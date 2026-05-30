import { NextRequest, NextResponse } from "next/server";
import Ably from "ably";
import {
  ADMIN_AUTH_COOKIE,
  getAdminFromAuthToken,
} from "@/backend/lib/adminAuth";
import {
  getConversationById,
  getConversationsCollection,
  markAdminRead,
  saveMessage,
  toSafeConversation,
} from "@/backend/lib/chat";
import { getLiveMessageChannelName, LIVE_MESSAGE_EVENT } from "@/shared/chatRealtime";
import type { ConversationStatus } from "@/shared/chatTypes";

const ADMIN_CLOSE_SENDER_ID = "system:admin-close";
const ADMIN_CLOSE_MESSAGE =
  "Your chat session has been closed by our team. Thank you for connecting with Zonic Media — we appreciate your time and will be in touch with you very soon!";

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

    // If the admin just closed the chat, notify the visitor with a persistent
    // system message so they see a friendly closing note (real-time + history).
    if (setFields.status === "closed" && conv.status !== "closed") {
      try {
        const saved = await saveMessage({
          conversationId,
          roomName: conv.roomName,
          senderType: "system",
          senderId: ADMIN_CLOSE_SENDER_ID,
          senderName: "Zonic Team",
          text: ADMIN_CLOSE_MESSAGE,
        });

        const apiKey = process.env.ABLY_API_KEY;
        if (apiKey) {
          const rest = new Ably.Rest({ key: apiKey });
          const channel = rest.channels.get(
            getLiveMessageChannelName(conv.roomName)
          );
          await channel.publish(LIVE_MESSAGE_EVENT, {
            text: ADMIN_CLOSE_MESSAGE,
            metadata: {
              mongoId: saved._id,
              conversationId,
              senderType: "system",
              senderId: ADMIN_CLOSE_SENDER_ID,
              senderName: "Zonic Team",
              conversationClosed: "true",
            },
            headers: {},
          });
        }
      } catch (closeNotifyErr) {
        // Non-fatal — admin still successfully closed the conversation.
        console.error(
          "[admin/chat/conversations/[id] PATCH] close-notify failed:",
          closeNotifyErr
        );
      }
    }

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
