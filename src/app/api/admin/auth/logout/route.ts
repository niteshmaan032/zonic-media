import { NextResponse } from "next/server";
import { clearAdminAuthCookie } from "@/backend/lib/adminAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully.",
  });

  clearAdminAuthCookie(response);
  return response;
}
