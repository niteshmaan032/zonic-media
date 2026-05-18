import { NextRequest, NextResponse } from "next/server";

const ADMIN_AUTH_COOKIE = "zonic_admin_auth";
const protectedAdminPrefix = "/admindashboard";

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
  response.cookies.delete(ADMIN_AUTH_COOKIE);
  return response;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
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
    response.cookies.delete(ADMIN_AUTH_COOKIE);
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
  ],
};
