import { NextRequest, NextResponse } from "next/server";
import {
  getConversationById,
  updateConversationStatus,
} from "@/backend/lib/chat";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

    // Ensure the visitorId matches
    if (conv.visitorId !== visitorId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 403 }
      );
    }

    // Only mark inactive if not already closed
    if (conv.status !== "closed") {
      await updateConversationStatus(conversationId, "inactive");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[mark-inactive]", err);
    return NextResponse.json(
      { success: false, message: "Failed to mark inactive." },
      { status: 500 }
    );
  }
}
