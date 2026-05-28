import { MongoServerError, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_AUTH_COOKIE,
  adminCredentialsSchema,
  ensureAdminIndexes,
  getAdminFromAuthToken,
  getAdminsCollection,
  getClientIp,
  hashPassword,
  toSafeAdmin,
  type AdminDocument,
} from "@/backend/lib/adminAuth";
import { checkRateLimit, rateLimitResponse } from "@/backend/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function canCreateAdmin(request: NextRequest, existingAdminCount: number) {
  if (existingAdminCount === 0) {
    return true;
  }

  const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;

  if (token) {
    const currentAdmin = await getAdminFromAuthToken(token);

    if (currentAdmin) {
      return true;
    }
  }

  const setupSecret = process.env.ADMIN_SETUP_SECRET;
  const requestSecret = request.headers.get("x-admin-setup-secret");

  return Boolean(setupSecret && requestSecret === setupSecret);
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const limiter = checkRateLimit({
      key: `create-admin:${ip}`,
      limit: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!limiter.allowed) {
      return NextResponse.json(rateLimitResponse(limiter.retryAfterSeconds), {
        status: 429,
      });
    }

    const body = (await request.json()) as unknown;
    const parsed = adminCredentialsSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Invalid request body.",
        },
        { status: 400 },
      );
    }

    await ensureAdminIndexes();
    const admins = await getAdminsCollection();
    const existingAdminCount = await admins.countDocuments({}, { limit: 1 });

    // Public bootstrap is allowed only before the first admin exists.
    // Later admin creation requires a valid admin session or setup secret.
    if (!(await canCreateAdmin(request, existingAdminCount))) {
      return NextResponse.json(
        { success: false, message: "Admin creation is not available." },
        { status: 403 },
      );
    }

    const now = new Date();
    const passwordHash = await hashPassword(parsed.data.password);
    const admin: AdminDocument = {
      _id: new ObjectId(),
      email: parsed.data.email,
      passwordHash,
      role: "admin",
      isActive: true,
      failedLoginAttempts: 0,
      postLockFailedLoginAttempts: 0,
      lockUntil: null,
      passwordLoginDisabledAt: null,
      lastLoginAt: null,
      createdAt: now,
      updatedAt: now,
      passwordChangedAt: now,
      resetPasswordTokenHash: null,
      resetPasswordExpiresAt: null,
      resetPasswordRequestedAt: null,
    };

    await admins.insertOne(admin);

    return NextResponse.json(
      {
        success: true,
        message: "Admin created successfully.",
        admin: toSafeAdmin(admin),
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      return NextResponse.json(
        { success: false, message: "Admin email already exists." },
        { status: 409 },
      );
    }

    console.error("Failed to create admin.", error);
    return NextResponse.json(
      { success: false, message: "Unable to create admin." },
      { status: 500 },
    );
  }
}
