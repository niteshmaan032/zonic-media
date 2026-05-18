import { NextResponse } from "next/server";
import {
  LOGIN_LOCK_MS,
  MAX_FAILED_LOGIN_ATTEMPTS,
  POST_LOCK_FAILED_LOGIN_ATTEMPTS,
  ensureAdminIndexes,
  getAdminsCollection,
  getClientIp,
  loginSchema,
  setAdminAuthCookie,
  signAdminToken,
  toSafeAdmin,
  verifyPassword,
} from "@/backend/lib/adminAuth";
import { checkRateLimit, rateLimitResponse } from "@/backend/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const invalidLoginResponse = () =>
  NextResponse.json(
    { success: false, message: "Invalid email or password" },
    { status: 401 },
  );

const getRetryAfterSeconds = (lockUntil: Date, now: Date) =>
  Math.max(0, Math.ceil((lockUntil.getTime() - now.getTime()) / 1000));

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = loginSchema.safeParse(body);
    const ip = getClientIp(request);
    const emailKey =
      parsed.success && parsed.data.email ? parsed.data.email : "unknown";
    const limiter = checkRateLimit({
      key: `admin-login:${ip}:${emailKey}`,
      limit: 10,
      windowMs: 15 * 60 * 1000,
    });

    if (!limiter.allowed) {
      return NextResponse.json(rateLimitResponse(limiter.retryAfterSeconds), {
        status: 429,
      });
    }

    if (!parsed.success) {
      return invalidLoginResponse();
    }

    await ensureAdminIndexes();
    const admins = await getAdminsCollection();
    const admin = await admins.findOne({ email: parsed.data.email });

    if (!admin || !admin.isActive) {
      return invalidLoginResponse();
    }

    const now = new Date();

    if (admin.passwordLoginDisabledAt) {
      return NextResponse.json(
        {
          success: false,
          code: "PASSWORD_RESET_REQUIRED",
          message:
            "Password login is disabled. Please reset your password to continue.",
        },
        { status: 423 },
      );
    }

    if (admin.lockUntil && admin.lockUntil > now) {
      return NextResponse.json(
        {
          success: false,
          code: "ACCOUNT_LOCKED",
          message: "Too many failed attempts. Please try again shortly.",
          attemptsRemaining: 0,
          retryAfterSeconds: getRetryAfterSeconds(admin.lockUntil, now),
          lockUntil: admin.lockUntil.toISOString(),
        },
        { status: 423 },
      );
    }

    const passwordMatches = await verifyPassword(
      parsed.data.password,
      admin.passwordHash,
    );

    if (!passwordMatches) {
      const isPostLockAttempt =
        (admin.postLockFailedLoginAttempts ?? 0) > 0 ||
        Boolean(admin.lockUntil && admin.lockUntil <= now);
      const nextPostLockFailedLoginAttempts =
        isPostLockAttempt
          ? (admin.postLockFailedLoginAttempts ?? 0) + 1
          : undefined;
      const shouldDisablePasswordLogin =
        typeof nextPostLockFailedLoginAttempts === "number" &&
        nextPostLockFailedLoginAttempts >= POST_LOCK_FAILED_LOGIN_ATTEMPTS;
      const failedLoginAttempts = shouldDisablePasswordLogin
        ? MAX_FAILED_LOGIN_ATTEMPTS
        : isPostLockAttempt
          ? MAX_FAILED_LOGIN_ATTEMPTS
          : (admin.failedLoginAttempts ?? 0) + 1;
      const shouldLock =
        !isPostLockAttempt && failedLoginAttempts >= MAX_FAILED_LOGIN_ATTEMPTS;
      const lockUntil =
        shouldLock && !shouldDisablePasswordLogin
          ? new Date(now.getTime() + LOGIN_LOCK_MS)
          : null;

      await admins.updateOne(
        { _id: admin._id },
        {
          $set: {
            failedLoginAttempts,
            lockUntil,
            postLockFailedLoginAttempts:
              nextPostLockFailedLoginAttempts ??
              admin.postLockFailedLoginAttempts ??
              0,
            passwordLoginDisabledAt: shouldDisablePasswordLogin ? now : null,
            updatedAt: now,
          },
        },
      );

      if (shouldDisablePasswordLogin) {
        return NextResponse.json(
          {
            success: false,
            code: "PASSWORD_RESET_REQUIRED",
            message:
              "Too many incorrect attempts. Please reset your password to continue.",
            attemptsRemaining: 0,
          },
          { status: 423 },
        );
      }

      if (lockUntil) {
        return NextResponse.json(
          {
            success: false,
            code: "ACCOUNT_LOCKED",
            message: "Too many failed attempts. Please try again shortly.",
            attemptsRemaining: 0,
            retryAfterSeconds: getRetryAfterSeconds(lockUntil, now),
            lockUntil: lockUntil.toISOString(),
          },
          { status: 423 },
        );
      }

      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
          attemptsRemaining:
            typeof nextPostLockFailedLoginAttempts === "number"
              ? Math.max(
                  0,
                  POST_LOCK_FAILED_LOGIN_ATTEMPTS -
                    nextPostLockFailedLoginAttempts,
                )
              : Math.max(0, MAX_FAILED_LOGIN_ATTEMPTS - failedLoginAttempts),
          postLockAttemptsRemaining:
            typeof nextPostLockFailedLoginAttempts === "number"
              ? Math.max(
                  0,
                  POST_LOCK_FAILED_LOGIN_ATTEMPTS -
                    nextPostLockFailedLoginAttempts,
                )
              : undefined,
        },
        { status: 401 },
      );
    }

    await admins.updateOne(
      { _id: admin._id },
      {
        $set: {
          failedLoginAttempts: 0,
          postLockFailedLoginAttempts: 0,
          lockUntil: null,
          passwordLoginDisabledAt: null,
          lastLoginAt: now,
          updatedAt: now,
        },
      },
    );

    const freshAdmin = {
      ...admin,
      failedLoginAttempts: 0,
      postLockFailedLoginAttempts: 0,
      lockUntil: null,
      passwordLoginDisabledAt: null,
      lastLoginAt: now,
      updatedAt: now,
    };
    const token = signAdminToken(freshAdmin);
    const response = NextResponse.json({
      success: true,
      message: "Logged in successfully.",
      admin: toSafeAdmin(freshAdmin),
    });

    setAdminAuthCookie(response, token);
    return response;
  } catch (error) {
    console.error("Failed to log admin in.", error);
    return NextResponse.json(
      { success: false, message: "Unable to log in right now." },
      { status: 500 },
    );
  }
}
