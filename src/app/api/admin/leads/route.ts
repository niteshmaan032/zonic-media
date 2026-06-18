import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_AUTH_COOKIE,
  getAdminFromAuthToken,
} from "@/backend/lib/adminAuth";
import {
  getAdminLeads,
  getLeadSources,
  updateLeadStatus,
} from "@/backend/lib/chat";
import type { LeadStatus } from "@/shared/chatTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VALID_STATUSES = new Set<LeadStatus>([
  "new",
  "contacted",
  "live_chat_started",
  "callback_requested",
  "closed",
]);

function unauthorized() {
  return NextResponse.json(
    { success: false, message: "Unauthorized." },
    { status: 401 },
  );
}

async function requireAdmin(request: NextRequest) {
  const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;
  if (!token) return null;
  return getAdminFromAuthToken(token);
}

// Parse a YYYY-MM-DD string into a Date. `endOfDay` pushes it to 23:59:59.999
// so a "to" filter is inclusive of the whole selected day.
function parseDateParam(value: string | null, endOfDay = false): Date | undefined {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
  const date = new Date(`${value}T${endOfDay ? "23:59:59.999" : "00:00:00.000"}`);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export async function GET(request: NextRequest) {
  try {
    const admin = await requireAdmin(request);
    if (!admin) return unauthorized();

    const { searchParams } = request.nextUrl;
    const statusParam = (searchParams.get("status") ?? "all") as
      | LeadStatus
      | "all";
    const status =
      statusParam === "all" || VALID_STATUSES.has(statusParam as LeadStatus)
        ? statusParam
        : "all";

    const pageParam = Number(searchParams.get("page") ?? "1");
    const limitParam = Number(searchParams.get("limit") ?? "15");

    const result = await getAdminLeads({
      search: searchParams.get("search")?.trim() || undefined,
      source: searchParams.get("source")?.trim() || undefined,
      status,
      from: parseDateParam(searchParams.get("from")),
      to: parseDateParam(searchParams.get("to"), true),
      page: Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1,
      limit: Number.isFinite(limitParam) && limitParam > 0 ? limitParam : 15,
    });

    const sources = await getLeadSources();

    return NextResponse.json({ success: true, ...result, sources });
  } catch (error) {
    console.error("Failed to fetch admin leads.", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch leads." },
      { status: 500 },
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const admin = await requireAdmin(request);
    if (!admin) return unauthorized();

    const body = (await request.json()) as {
      id?: unknown;
      status?: unknown;
    };

    const id = typeof body.id === "string" ? body.id : "";
    const status = body.status as LeadStatus;

    if (!id || !VALID_STATUSES.has(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid lead id or status." },
        { status: 400 },
      );
    }

    await updateLeadStatus(id, status);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update lead status.", error);
    return NextResponse.json(
      { success: false, message: "Unable to update lead." },
      { status: 500 },
    );
  }
}
