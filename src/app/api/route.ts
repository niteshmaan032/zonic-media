import { after, NextResponse } from "next/server";
import { leadsRoute } from "@/api/leadsRoute";
import { sendUserThankYouEmail } from "@/backend/controllers/leadsController";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const result = await leadsRoute(body);

    if (result.status === 200 && result.thankYouPayload) {
      after(async () => {
        try {
          await sendUserThankYouEmail(result.thankYouPayload!);
        } catch (error) {
          console.error("Failed to send user thank-you email.", error);
        }
      });
    }

    return NextResponse.json(result.body, { status: result.status });
  } catch (error) {
    console.error("Failed to handle /api request.", error);

    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 },
    );
  }
}
