import { NextRequest, NextResponse } from "next/server";
import Ably from "ably";
import {
  getConversationById,
  getMessages,
  saveMessage,
  touchConversationLastMessage,
} from "@/backend/lib/chat";
import { ADMIN_AUTH_COOKIE, getAdminFromAuthToken } from "@/backend/lib/adminAuth";
import { checkRateLimit, rateLimitResponse } from "@/backend/lib/rateLimit";
import { getLiveMessageChannelName, LIVE_MESSAGE_EVENT } from "@/shared/chatRealtime";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_TEXT_LENGTH = 2000;

function sanitizeText(val: unknown): string {
  if (typeof val !== "string") return "";
  return val.replace(/[<>]/g, "").trim().slice(0, MAX_TEXT_LENGTH);
}

// ─── GET — load message history ───────────────────────────────────────────────
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const conversationId = searchParams.get("conversationId")?.trim() ?? "";
    const beforeTs = searchParams.get("before");
    const limit = Math.min(
      Number(searchParams.get("limit") ?? "30"),
      50
    );

    if (!conversationId) {
      return NextResponse.json(
        { success: false, message: "Missing conversationId." },
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

    // Require either a valid admin JWT or matching visitorId
    const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;
    const admin = token ? await getAdminFromAuthToken(token) : null;
    if (!admin) {
      const visitorId = searchParams.get("visitorId")?.trim() ?? "";
      if (!visitorId) {
        return NextResponse.json(
          { success: false, message: "Unauthorized." },
          { status: 401 }
        );
      }
      if (conv.visitorId !== visitorId) {
        return NextResponse.json(
          { success: false, message: "Forbidden." },
          { status: 403 }
        );
      }
    }

    const before = beforeTs ? new Date(beforeTs) : undefined;
    const messages = await getMessages(conversationId, limit, before);

    return NextResponse.json({ success: true, messages });
  } catch (err) {
    console.error("[chat/messages GET]", err);
    return NextResponse.json(
      { success: false, message: "Failed to load messages." },
      { status: 500 }
    );
  }
}

// ─── POST — send a message ────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    // Rate limit: 30 messages per minute per IP
    const rl = checkRateLimit({ key: `chat-msg:${ip}`, limit: 30, windowMs: 60_000 });
    if (!rl.allowed) {
      return NextResponse.json(rateLimitResponse(rl.retryAfterSeconds), { status: 429 });
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

    const conversationId =
      typeof body.conversationId === "string" ? body.conversationId.trim() : "";
    const text = sanitizeText(body.text);
    const senderType =
      body.senderType === "admin"
        ? "admin"
        : body.senderType === "system"
        ? "system"
        : "visitor";
    const senderId =
      typeof body.senderId === "string" ? body.senderId.trim().slice(0, 100) : "";
    const senderName =
      typeof body.senderName === "string"
        ? body.senderName.trim().slice(0, 100)
        : "User";

    // Basic validation
    if (!conversationId) {
      return NextResponse.json(
        { success: false, message: "Missing conversationId." },
        { status: 400 }
      );
    }
    if (!text) {
      return NextResponse.json(
        { success: false, message: "Message text is required." },
        { status: 400 }
      );
    }
    if (text.length > MAX_TEXT_LENGTH) {
      return NextResponse.json(
        { success: false, message: `Message too long (max ${MAX_TEXT_LENGTH} chars).` },
        { status: 400 }
      );
    }

    // Only a verified admin may send as "admin"
    if (senderType === "admin") {
      const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;
      const admin = token ? await getAdminFromAuthToken(token) : null;
      if (!admin) {
        return NextResponse.json(
          { success: false, message: "Unauthorized." },
          { status: 401 }
        );
      }
    }

    // Verify conversation exists
    const conv = await getConversationById(conversationId);
    if (!conv) {
      return NextResponse.json(
        { success: false, message: "Conversation not found." },
        { status: 404 }
      );
    }
    if (conv.status === "closed") {
      return NextResponse.json(
        { success: false, message: "Conversation is closed." },
        { status: 409 }
      );
    }

    // Save to MongoDB
    const saved = await saveMessage({
      conversationId,
      roomName: conv.roomName,
      senderType,
      senderId,
      senderName,
      text,
    });

    // Update conversation metadata (non-blocking)
    touchConversationLastMessage(conversationId, text, senderType).catch(
      (err) => console.error("[chat/messages] touchConversation failed:", err)
    );

    // Publish to Ably Chat room channel so subscribers receive in real-time
    const apiKey = process.env.ABLY_API_KEY;
    if (apiKey) {
      try {
        const rest = new Ably.Rest({ key: apiKey });
        const channelName = getLiveMessageChannelName(conv.roomName);
        const channel = rest.channels.get(channelName);
        await channel.publish(LIVE_MESSAGE_EVENT, {
          text,
          metadata: {
            mongoId: saved._id,
            conversationId,
            senderType,
            senderId,
            senderName,
          },
          headers: {},
        });
      } catch (publishErr) {
        // Non-fatal: message is saved in MongoDB even if Ably publish fails
        console.error("[chat/messages] Ably publish failed:", publishErr);
      }
    }

    return NextResponse.json({ success: true, message: saved });
  } catch (err) {
    console.error("[chat/messages POST]", err);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
