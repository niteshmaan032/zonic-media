import { NextRequest, NextResponse } from "next/server";
import Ably from "ably";
import { ADMIN_AUTH_COOKIE, getAdminFromAuthToken } from "@/backend/lib/adminAuth";
import { getConversationById } from "@/backend/lib/chat";
import { getLiveMessageChannelName } from "@/shared/chatRealtime";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function unauthorized(msg = "Unauthorized.") {
  return NextResponse.json({ success: false, message: msg }, { status: 401 });
}

function badRequest(msg: string) {
  return NextResponse.json({ success: false, message: msg }, { status: 400 });
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.ABLY_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Ably not configured." },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => ({})) as Record<string, string>;
    const type = body.type; // 'visitor' | 'admin'

    const rest = new Ably.Rest({ key: apiKey });

    // ── Admin token ────────────────────────────────────────────────
    if (type === "admin") {
      const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;
      if (!token) return unauthorized();

      const admin = await getAdminFromAuthToken(token);
      if (!admin) return unauthorized();

      const adminId = admin._id.toHexString();
      const clientId = `admin:${adminId}`;

      const tokenRequest = await rest.auth.createTokenRequest({
        clientId,
        capability: JSON.stringify({
          "zonic-chat-*": ["subscribe", "publish", "presence", "history"],
          "zonic-chat-*:*": ["subscribe", "publish", "presence", "history"],
          "zonic-chat-*:live-messages": ["subscribe"],
          "zonic-admin-notifications": ["subscribe"],
        }),
        ttl: 3600 * 1000,
      });

      return NextResponse.json(tokenRequest);
    }

    // ── Visitor token ──────────────────────────────────────────────
    if (type === "visitor") {
      const visitorId = body.visitorId?.trim();
      const conversationId = body.conversationId?.trim();

      if (!visitorId || visitorId.length < 4) {
        return badRequest("Missing visitorId.");
      }

      // If conversationId provided, verify ownership
      let roomName: string;
      if (conversationId) {
        const conv = await getConversationById(conversationId);
        if (!conv) return badRequest("Conversation not found.");
        if (conv.visitorId !== visitorId) return unauthorized("Not your conversation.");
        roomName = conv.roomName;
      } else {
        // No conversation yet – grant generic visitor token (will be scoped later)
        // Allow access to any zonic-chat room with this visitorId prefix
        const clientId = `visitor:${visitorId}`;
        const tokenRequest = await rest.auth.createTokenRequest({
          clientId,
          capability: JSON.stringify({
            "zonic-chat-*": ["subscribe", "publish", "presence", "history"],
            "zonic-chat-*:*": ["subscribe", "publish", "presence", "history"],
            "zonic-chat-*:live-messages": ["subscribe"],
          }),
          ttl: 3600 * 1000,
        });
        return NextResponse.json(tokenRequest);
      }

      const clientId = `visitor:${visitorId}`;
      const tokenRequest = await rest.auth.createTokenRequest({
        clientId,
        capability: JSON.stringify({
          [roomName]: ["subscribe", "publish", "presence", "history"],
          [`${roomName}:*`]: ["subscribe", "publish", "presence", "history"],
          [getLiveMessageChannelName(roomName)]: ["subscribe"],
        }),
        ttl: 3600 * 1000,
      });

      return NextResponse.json(tokenRequest);
    }

    return badRequest("Invalid token type.");
  } catch (err) {
    console.error("[ably/token]", err);
    return NextResponse.json(
      { success: false, message: "Token generation failed." },
      { status: 500 }
    );
  }
}
