import { NextRequest, NextResponse } from "next/server";
import {
  clearAdminAuthCookie,
  ensureAdminIndexes,
  getAdminsCollection,
  getClientIp,
  hashPassword,
  resetPasswordSchema,
} from "@/backend/lib/adminAuth";
import { checkRateLimit, rateLimitResponse } from "@/backend/lib/rateLimit";
import { hashResetToken } from "@/backend/lib/resetToken";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function findAdminByResetToken(token: string) {
  await ensureAdminIndexes();
  const admins = await getAdminsCollection();
  const tokenHash = hashResetToken(token);

  return admins.findOne({
    resetPasswordTokenHash: tokenHash,
    resetPasswordExpiresAt: { $gt: new Date() },
    isActive: true,
  });
}

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get("token")?.trim();

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Reset token is required." },
        { status: 400 },
      );
    }

    const admin = await findAdminByResetToken(token);

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "This reset link is invalid or expired." },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to validate admin reset token.", error);
    return NextResponse.json(
      { success: false, message: "Unable to validate reset link." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = resetPasswordSchema.safeParse(body);
    const ip = getClientIp(request);
    const limiter = checkRateLimit({
      key: `admin-reset:${ip}`,
      limit: 8,
      windowMs: 15 * 60 * 1000,
    });

    if (!limiter.allowed) {
      return NextResponse.json(rateLimitResponse(limiter.retryAfterSeconds), {
        status: 429,
      });
    }

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Invalid reset request.",
        },
        { status: 400 },
      );
    }

    const admin = await findAdminByResetToken(parsed.data.token);

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "This reset link is invalid or expired." },
        { status: 400 },
      );
    }

    const admins = await getAdminsCollection();
    const now = new Date();
    const passwordHash = await hashPassword(parsed.data.password);

    await admins.updateOne(
      { _id: admin._id },
      {
        $set: {
          passwordHash,
          passwordChangedAt: now,
          failedLoginAttempts: 0,
          postLockFailedLoginAttempts: 0,
          lockUntil: null,
          passwordLoginDisabledAt: null,
          updatedAt: now,
        },
        $unset: {
          resetPasswordTokenHash: "",
          resetPasswordExpiresAt: "",
          resetPasswordRequestedAt: "",
        },
      },
    );

    const response = NextResponse.json({
      success: true,
      message: "Password reset successfully. Please log in.",
    });
    clearAdminAuthCookie(response);

    return response;
  } catch (error) {
    console.error("Failed to reset admin password.", error);
    return NextResponse.json(
      { success: false, message: "Unable to reset password right now." },
      { status: 500 },
    );
  }
}
