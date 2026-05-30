import { NextRequest, NextResponse } from "next/server";
import Ably from "ably";
import {
  getConversationById,
  saveMessage,
  updateConversationStatus,
} from "@/backend/lib/chat";
import { getLiveMessageChannelName, LIVE_MESSAGE_EVENT } from "@/shared/chatRealtime";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VISITOR_END_SENDER_ID = "system:visitor-end";
const VISITOR_END_MESSAGE = "The visitor has ended the chat.";

export async function POST(request: NextRequest) {
  try {
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

    const conversationId =
      typeof body.conversationId === "string" ? body.conversationId.trim() : "";
    const visitorId =
      typeof body.visitorId === "string" ? body.visitorId.trim() : "";

    if (!conversationId || !visitorId) {
      return NextResponse.json(
        { success: false, message: "Missing conversationId or visitorId." },
        { status: 400 }
      );
    }

    const conv = await getConversationById(conversationId);
    if (!conv) {
      return NextResponse.json(
        { success: false, message: "Conversation not found." },
        { status: 404 }
      );
    }

    if (conv.visitorId !== visitorId) {
      return NextResponse.json(
        { success: false, message: "Forbidden." },
        { status: 403 }
      );
    }

    // Idempotent — if the conversation is already closed (e.g. admin closed it
    // first, or duplicate request), just succeed without re-publishing.
    if (conv.status === "closed") {
      return NextResponse.json({ success: true, alreadyClosed: true });
    }

    // Persist the system close message so it shows in admin history too.
    const saved = await saveMessage({
      conversationId,
      roomName: conv.roomName,
      senderType: "system",
      senderId: VISITOR_END_SENDER_ID,
      senderName: "System",
      text: VISITOR_END_MESSAGE,
    });

    // Mark conversation closed so admin's UI reflects it on next list refresh
    // and the messages POST route will reject further writes (409).
    await updateConversationStatus(conversationId, "closed");

    // Broadcast to the live message channel so admin sees it immediately.
    const apiKey = process.env.ABLY_API_KEY;
    if (apiKey) {
      try {
        const rest = new Ably.Rest({ key: apiKey });
        const channel = rest.channels.get(
          getLiveMessageChannelName(conv.roomName)
        );
        await channel.publish(LIVE_MESSAGE_EVENT, {
          text: VISITOR_END_MESSAGE,
          metadata: {
            mongoId: saved._id,
            conversationId,
            senderType: "system",
            senderId: VISITOR_END_SENDER_ID,
            senderName: "System",
            conversationClosed: "true",
          },
          headers: {},
        });
      } catch (publishErr) {
        console.error("[chat/end-chat] Ably publish failed:", publishErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[chat/end-chat]", err);
    return NextResponse.json(
      { success: false, message: "Failed to end chat." },
      { status: 500 }
    );
  }
}
