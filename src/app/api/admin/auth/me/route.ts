import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_AUTH_COOKIE,
  clearAdminAuthCookie,
  getAdminFromAuthToken,
  toSafeAdmin,
} from "@/backend/lib/adminAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  const response = NextResponse.json(
    { success: false, message: "Unauthorized." },
    { status: 401 },
  );
  clearAdminAuthCookie(response);
  return response;
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;

    if (!token) {
      return unauthorized();
    }

    const admin = await getAdminFromAuthToken(token);

    if (!admin) {
      return unauthorized();
    }

    return NextResponse.json({
      success: true,
      admin: toSafeAdmin(admin),
    });
  } catch (error) {
    console.error("Failed to verify admin session.", error);
    return unauthorized();
  }
}
