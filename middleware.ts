import { NextRequest, NextResponse } from "next/server";
import { getAdminCookieDomain } from "@/shared/urlConfig";

const ADMIN_AUTH_COOKIE = "zonic_admin_auth";
const protectedAdminPrefix = "/admindashboard";

// A stylesheet from a retired deployment that Google keeps re-fetching and
// lists under "Not found (404)" (GSC, 10 Nov 2026). Matched on the exact file
// and the old deployment id, so no current or future asset is ever caught.
// Redirected here rather than in next.config.ts so the ?dpl= query is dropped.
const RETIRED_CSS_PATH = "/_next/static/chunks/f2117011d4a78af0.css";
const RETIRED_CSS_DEPLOYMENT = "dpl_GMdPQYztMicnWHp37PZT1YCwMYgh";

function base64UrlToBytes(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(
    normalized.length + ((4 - (normalized.length % 4)) % 4),
    "=",
  );
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function base64UrlToJson<T>(value: string): T | null {
  try {
    const bytes = base64UrlToBytes(value);
    const json = new TextDecoder().decode(bytes);
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
}

async function verifyMiddlewareJwt(token: string) {
  const secret = process.env.JWT_SECRET;

  if (!secret || secret.length < 32) {
    return false;
  }

  const [encodedHeader, encodedPayload, encodedSignature] = token.split(".");

  if (!encodedHeader || !encodedPayload || !encodedSignature) {
    return false;
  }

  const header = base64UrlToJson<{ alg?: string; typ?: string }>(encodedHeader);
  const payload = base64UrlToJson<{ exp?: number; adminId?: string }>(
    encodedPayload,
  );

  if (header?.alg !== "HS256" || !payload?.adminId) {
    return false;
  }

  if (typeof payload.exp !== "number" || payload.exp * 1000 <= Date.now()) {
    return false;
  }

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"],
  );

  return crypto.subtle.verify(
    "HMAC",
    key,
    base64UrlToBytes(encodedSignature),
    new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`),
  );
}

function redirectToLogin(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/admin-login";
  url.search = "";
  const response = NextResponse.redirect(url);
  clearAdminAuthCookie(response);
  return response;
}

function clearAdminAuthCookie(response: NextResponse) {
  const domain = getAdminCookieDomain();

  response.cookies.delete(ADMIN_AUTH_COOKIE);

  if (domain) {
    response.cookies.set({
      name: ADMIN_AUTH_COOKIE,
      value: "",
      path: "/",
      domain,
      maxAge: 0,
    });
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === RETIRED_CSS_PATH) {
    if (request.nextUrl.searchParams.get("dpl") !== RETIRED_CSS_DEPLOYMENT) {
      return NextResponse.next();
    }
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url, 308);
  }

  const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;
  const hasValidToken = token ? await verifyMiddlewareJwt(token) : false;

  if (pathname.startsWith(protectedAdminPrefix)) {
    if (!hasValidToken) {
      return redirectToLogin(request);
    }

    return NextResponse.next();
  }

  if (pathname === "/reset-password") {
    const resetToken = request.nextUrl.searchParams.get("token");

    if (!resetToken) {
      return redirectToLogin(request);
    }
  }

  if (token && !hasValidToken) {
    const response = NextResponse.next();
    clearAdminAuthCookie(response);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admindashboard/:path*",
    "/admin-login",
    "/admin-email-verification",
    "/reset-password",
    "/_next/static/chunks/f2117011d4a78af0.css",
  ],
};
