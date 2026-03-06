import { NextResponse } from "next/server";
import { sendOwnerLeadEmail, type LeadPayload } from "@/backend/controllers/leadsController";

const isLeadPayload = (value: unknown): value is LeadPayload => {
  if (!value || typeof value !== "object") return false;
  const body = value as Record<string, unknown>;

  return (
    typeof body.fullName === "string" &&
    typeof body.email === "string" &&
    typeof body.contact === "string" &&
    typeof body.message === "string" &&
    Array.isArray(body.services) &&
    body.services.every((item) => typeof item === "string")
  );
};

export async function POST(req: Request) {
  const incomingSecret = req.headers.get("x-queue-secret");
  const expectedSecret = process.env.QSTASH_QUEUE_SECRET;

  if (!expectedSecret || incomingSecret !== expectedSecret) {
    return NextResponse.json(
      { success: false, message: "Unauthorized." },
      { status: 401 },
    );
  }

  try {
    const body = (await req.json()) as unknown;

    if (!isLeadPayload(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid payload." },
        { status: 400 },
      );
    }

    await sendOwnerLeadEmail(body);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to process queued email." },
      { status: 500 },
    );
  }
}
