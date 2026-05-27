import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import {
  ADMIN_AUTH_COOKIE,
  getAdminFromAuthToken,
} from "@/backend/lib/adminAuth";
import {
  getConversationsCollection,
  toSafeConversation,
} from "@/backend/lib/chat";
import type { ConversationStatus } from "@/shared/chatTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json(
    { success: false, message: "Unauthorized." },
    { status: 401 }
  );
}

const VALID_STATUSES = new Set<ConversationStatus>([
  "waiting_agent",
  "active",
  "waiting_visitor",
  "inactive",
  "closed",
]);

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;
    if (!token) return unauthorized();

    const admin = await getAdminFromAuthToken(token);
    if (!admin) return unauthorized();

    const { searchParams } = request.nextUrl;
    const status = searchParams.get("status") ?? "all";
    const search = searchParams.get("search")?.trim() ?? "";
    const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
    const pageSize = 25;

    const collection = await getConversationsCollection();

    // Build filter
    const filter: Record<string, unknown> = {};

    if (status !== "all" && VALID_STATUSES.has(status as ConversationStatus)) {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { service: { $regex: search, $options: "i" } },
      ];
    }

    const [total, docs] = await Promise.all([
      collection.countDocuments(filter),
      collection
        .find(filter)
        .sort({ lastMessageAt: -1, createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .toArray(),
    ]);

    return NextResponse.json({
      success: true,
      conversations: docs.map(toSafeConversation),
      total,
      page,
      pages: Math.ceil(total / pageSize),
    });
  } catch (err) {
    console.error("[admin/chat/conversations GET]", err);
    return NextResponse.json(
      { success: false, message: "Failed to load conversations." },
      { status: 500 }
    );
  }
}
