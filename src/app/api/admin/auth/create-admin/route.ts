import { MongoServerError, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import {
  adminCredentialsSchema,
  ensureAdminIndexes,
  getAdminsCollection,
  hashPassword,
  toSafeAdmin,
  type AdminDocument,
} from "@/backend/lib/adminAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
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

    // Security: public bootstrap is allowed only before the first admin exists.
    // Keep ADMIN_SETUP_SECRET private and remove external access to this route
    // after setup if your deployment does not need admin self-provisioning.
    if (existingAdminCount > 0) {
      const setupSecret = process.env.ADMIN_SETUP_SECRET;
      const requestSecret = request.headers.get("x-admin-setup-secret");

      if (!setupSecret || requestSecret !== setupSecret) {
        return NextResponse.json(
          { success: false, message: "Admin creation is not available." },
          { status: 403 },
        );
      }
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
