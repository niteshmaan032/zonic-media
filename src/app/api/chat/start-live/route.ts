import { NextRequest, NextResponse } from "next/server";
import Ably from "ably";
import {
  createOrGetConversation,
  updateLeadStatus,
} from "@/backend/lib/chat";
import { checkRateLimit, rateLimitResponse } from "@/backend/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function sanitize(val: unknown, maxLen = 200): string {
  if (typeof val !== "string") return "";
  return val.replace(/[<>]/g, "").trim().slice(0, maxLen);
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    const rl = checkRateLimit({ key: `start-live:${ip}`, limit: 10, windowMs: 60_000 });
    if (!rl.allowed) {
      return NextResponse.json(rateLimitResponse(rl.retryAfterSeconds), { status: 429 });
    }

    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body) {
      return NextResponse.json({ success: false, message: "Invalid body." }, { status: 400 });
    }

    const visitorId = sanitize(body.visitorId, 100);
    const name = sanitize(body.name, 100);
    const email = sanitize(body.email, 320);
    const phone = sanitize(body.phone, 30);
    const service = sanitize(body.service, 120);
    const subService = sanitize(body.subService, 120);
    const leadId = sanitize(body.leadId, 50);

    if (!visitorId || visitorId.length < 4) {
      return NextResponse.json({ success: false, message: "Missing visitorId." }, { status: 400 });
    }
    if (!name) {
      return NextResponse.json({ success: false, message: "Missing name." }, { status: 400 });
    }

    const { conversationId, roomName, isNew } = await createOrGetConversation({
      visitorId,
      name,
      email,
      phone,
      service,
      subService,
      leadId: leadId || null,
    });

    // If we have a leadId, mark it as live_chat_started
    if (leadId && isNew) {
      updateLeadStatus(leadId, "live_chat_started").catch((err) =>
        console.error("[start-live] updateLeadStatus failed:", err)
      );
    }

    // Notify admin dashboard via Ably (best-effort)
    const apiKey = process.env.ABLY_API_KEY;
    if (apiKey && isNew) {
      try {
        const rest = new Ably.Rest({ key: apiKey });
        const channel = rest.channels.get("zonic-admin-notifications");
        await channel.publish("new_conversation", {
          conversationId,
          roomName,
          name,
          service,
          subService,
          email,
          createdAt: new Date().toISOString(),
        });
      } catch (err) {
        console.error("[start-live] Ably notify failed:", err);
      }
    }

    return NextResponse.json({
      success: true,
      conversationId,
      roomName,
      visitorId,
    });
  } catch (err) {
    console.error("[start-live]", err);
    return NextResponse.json(
      { success: false, message: "Could not start live chat." },
      { status: 500 }
    );
  }
}
