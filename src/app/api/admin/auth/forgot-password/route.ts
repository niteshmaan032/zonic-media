import { NextResponse } from "next/server";
import {
  forgotPasswordSchema,
  getAdminsCollection,
  getClientIp,
  getResetPasswordExpiresMinutes,
  ensureAdminIndexes,
} from "@/backend/lib/adminAuth";
import { sendAdminResetPasswordEmail } from "@/backend/lib/mailer";
import { checkRateLimit, rateLimitResponse } from "@/backend/lib/rateLimit";
import { createRawResetToken, hashResetToken } from "@/backend/lib/resetToken";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const genericSuccess = {
  success: true,
  message:
    "If an active admin account exists for this email, a reset link has been sent.",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = forgotPasswordSchema.safeParse(body);
    const ip = getClientIp(request);
    const emailKey =
      parsed.success && parsed.data.email ? parsed.data.email : "unknown";
    const limiter = checkRateLimit({
      key: `admin-forgot:${ip}:${emailKey}`,
      limit: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!limiter.allowed) {
      return NextResponse.json(rateLimitResponse(limiter.retryAfterSeconds), {
        status: 429,
      });
    }

    if (!parsed.success) {
      return NextResponse.json(genericSuccess);
    }

    await ensureAdminIndexes();
    const admins = await getAdminsCollection();
    const admin = await admins.findOne({
      email: parsed.data.email,
      isActive: true,
    });

    if (!admin) {
      return NextResponse.json(genericSuccess);
    }

    const rawToken = createRawResetToken();
    const tokenHash = hashResetToken(rawToken);
    const now = new Date();
    const expiresAt = new Date(
      now.getTime() + getResetPasswordExpiresMinutes() * 60 * 1000,
    );
    const appUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/+$/, "");

    if (!appUrl) {
      throw new Error("NEXT_PUBLIC_APP_URL is not configured.");
    }

    await admins.updateOne(
      { _id: admin._id },
      {
        $set: {
          resetPasswordTokenHash: tokenHash,
          resetPasswordExpiresAt: expiresAt,
          resetPasswordRequestedAt: now,
          updatedAt: now,
        },
      },
    );

    await sendAdminResetPasswordEmail({
      to: admin.email,
      resetLink: `${appUrl}/reset-password?token=${encodeURIComponent(
        rawToken,
      )}`,
    });

    return NextResponse.json(genericSuccess);
  } catch (error) {
    console.error("Failed to process admin forgot-password request.", error);
    return NextResponse.json(genericSuccess);
  }
}
