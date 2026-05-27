import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_AUTH_COOKIE,
  getAdminFromAuthToken,
} from "@/backend/lib/adminAuth";
import {
  getConversationById,
  getConversationsCollection,
  markAdminRead,
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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;
    if (!token) return unauthorized();

    const admin = await getAdminFromAuthToken(token);
    if (!admin) return unauthorized();

    const { id: conversationId } = await params;

    const conv = await getConversationById(conversationId);
    if (!conv) {
      return NextResponse.json(
        { success: false, message: "Conversation not found." },
        { status: 404 }
      );
    }

    const body = (await request.json().catch(() => null)) as Record<
      string,
      unknown
    > | null;
    if (!body) {
      return NextResponse.json(
        { success: false, message: "Invalid body." },
        { status: 400 }
      );
    }

    const collection = await getConversationsCollection();
    const now = new Date();
    const setFields: Record<string, unknown> = { updatedAt: now };

    // Update status
    if (body.status !== undefined) {
      const newStatus = body.status as ConversationStatus;
      if (!VALID_STATUSES.has(newStatus)) {
        return NextResponse.json(
          { success: false, message: "Invalid status." },
          { status: 400 }
        );
      }
      setFields.status = newStatus;
      if (newStatus === "closed") {
        setFields.closedAt = now;
      }
    }

    // Assign admin
    if (body.assignedAdminId !== undefined) {
      setFields.assignedAdminId =
        typeof body.assignedAdminId === "string"
          ? body.assignedAdminId
          : null;
    }

    // Mark read
    if (body.markRead === true) {
      await markAdminRead(conversationId);
      setFields.unreadForAdmin = 0;
    }

    await collection.updateOne({ _id: conv._id }, { $set: setFields });

    const updated = await getConversationById(conversationId);
    return NextResponse.json({
      success: true,
      conversation: updated ? toSafeConversation(updated) : null,
    });
  } catch (err) {
    console.error("[admin/chat/conversations/[id] PATCH]", err);
    return NextResponse.json(
      { success: false, message: "Failed to update conversation." },
      { status: 500 }
    );
  }
}
