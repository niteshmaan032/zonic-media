import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ObjectId, type Collection } from "mongodb";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getMongoDb } from "./mongodb";
import { getAdminCookieDomain } from "@/shared/urlConfig";

export const ADMIN_AUTH_COOKIE = "zonic_admin_auth";
export const ADMIN_COLLECTION = "admins";
export const MAX_FAILED_LOGIN_ATTEMPTS = 5;
export const LOGIN_LOCK_MS = 2 * 60 * 1000;
export const POST_LOCK_FAILED_LOGIN_ATTEMPTS = 2;
export const RESET_TOKEN_BYTES = 32;

export type AdminRole = "admin";

export type AdminDocument = {
  _id: ObjectId;
  email: string;
  passwordHash: string;
  role: AdminRole;
  isActive: boolean;
  failedLoginAttempts: number;
  postLockFailedLoginAttempts?: number;
  lockUntil?: Date | null;
  passwordLoginDisabledAt?: Date | null;
  lastLoginAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  passwordChangedAt?: Date | null;
  resetPasswordTokenHash?: string | null;
  resetPasswordExpiresAt?: Date | null;
  resetPasswordRequestedAt?: Date | null;
};

export type AdminJwtPayload = JwtPayload & {
  adminId: string;
  email: string;
  role: AdminRole;
};

export type SafeAdmin = {
  id: string;
  email: string;
  role: AdminRole;
  isActive: boolean;
  lastLoginAt: string | null;
};

const passwordMessage =
  "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";

const strongPasswordSchema = z
  .string()
  .min(8, passwordMessage)
  .regex(/[A-Z]/, passwordMessage)
  .regex(/[a-z]/, passwordMessage)
  .regex(/[0-9]/, passwordMessage)
  .regex(/[^A-Za-z0-9]/, passwordMessage);

export const emailSchema = z
  .string()
  .trim()
  .email("Enter a valid email address.")
  .max(320)
  .transform((value) => value.toLowerCase());

export const adminCredentialsSchema = z.object({
  email: emailSchema,
  password: strongPasswordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required.").max(200),
});

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z.object({
  token: z.string().trim().min(32).max(256),
  password: strongPasswordSchema,
});

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export async function getAdminsCollection(): Promise<
  Collection<AdminDocument>
> {
  const db = await getMongoDb();
  return db.collection<AdminDocument>(ADMIN_COLLECTION);
}

export async function ensureAdminIndexes() {
  const admins = await getAdminsCollection();
  await Promise.all([
    admins.createIndex({ email: 1 }, { unique: true }),
    admins.createIndex({ resetPasswordTokenHash: 1 }, { sparse: true }),
  ]);
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function toSafeAdmin(admin: AdminDocument): SafeAdmin {
  return {
    id: admin._id.toHexString(),
    email: admin.email,
    role: admin.role,
    isActive: admin.isActive,
    lastLoginAt: admin.lastLoginAt?.toISOString() ?? null,
  };
}

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("JWT_SECRET must be configured with at least 32 characters.");
  }

  return secret;
}

export function getJwtExpiresIn() {
  return process.env.JWT_EXPIRES_IN?.trim() || "1d";
}

export function getResetPasswordExpiresMinutes() {
  const value = Number(process.env.RESET_PASSWORD_TOKEN_EXPIRES_MINUTES ?? "15");
  return Number.isFinite(value) && value > 0 ? value : 15;
}

export function getJwtCookieMaxAgeSeconds() {
  const expiresIn = getJwtExpiresIn();

  if (/^\d+$/.test(expiresIn)) {
    return Number(expiresIn);
  }

  const match = expiresIn.match(/^(\d+)\s*([smhd])$/i);

  if (!match) {
    return 24 * 60 * 60;
  }

  const amount = Number(match[1]);
  const unit = match[2].toLowerCase();
  const multipliers: Record<string, number> = {
    s: 1,
    m: 60,
    h: 60 * 60,
    d: 24 * 60 * 60,
  };

  return amount * multipliers[unit];
}

export function signAdminToken(admin: AdminDocument) {
  const payload: Omit<AdminJwtPayload, keyof JwtPayload> = {
    adminId: admin._id.toHexString(),
    email: admin.email,
    role: admin.role,
  };
  const options: jwt.SignOptions = {
    algorithm: "HS256",
    expiresIn: getJwtExpiresIn() as jwt.SignOptions["expiresIn"],
  };

  return jwt.sign(payload, getJwtSecret(), options);
}

export function verifyAdminToken(token: string): AdminJwtPayload | null {
  try {
    const decoded = jwt.verify(token, getJwtSecret(), {
      algorithms: ["HS256"],
    });

    if (
      typeof decoded === "object" &&
      typeof decoded.adminId === "string" &&
      typeof decoded.email === "string" &&
      decoded.role === "admin"
    ) {
      return decoded as AdminJwtPayload;
    }

    return null;
  } catch {
    return null;
  }
}

export function setAdminAuthCookie(response: NextResponse, token: string) {
  const domain = getAdminCookieDomain();

  response.cookies.set({
    name: ADMIN_AUTH_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    ...(domain ? { domain } : {}),
    maxAge: getJwtCookieMaxAgeSeconds(),
  });
}

export function clearAdminAuthCookie(response: NextResponse) {
  const domain = getAdminCookieDomain();

  response.cookies.set({
    name: ADMIN_AUTH_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    ...(domain ? { domain } : {}),
    maxAge: 0,
  });
}

export async function getAdminFromAuthToken(token: string) {
  const payload = verifyAdminToken(token);

  if (!payload || !ObjectId.isValid(payload.adminId)) {
    return null;
  }

  await ensureAdminIndexes();
  const admins = await getAdminsCollection();
  const admin = await admins.findOne({ _id: new ObjectId(payload.adminId) });

  if (
    !admin ||
    !admin.isActive ||
    admin.passwordLoginDisabledAt ||
    admin.email !== payload.email
  ) {
    return null;
  }

  return admin;
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}
