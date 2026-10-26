import type { ConversationStatus } from "@/shared/chatTypes";

export function timeAgo(iso: string | null | undefined): string {
  if (!iso) return "";
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

/** "1:05" / "12:40" / "1:02:09" since an ISO time. */
export function elapsed(iso: string | null | undefined, now: number): string {
  if (!iso) return "0:00";
  const total = Math.max(0, Math.floor((now - new Date(iso).getTime()) / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = String(total % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}

export function formatDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

/** Same rule as the server's agentNameFromEmail. */
export function agentNameFromEmail(email: string): string {
  const local = (email.split("@")[0] ?? "").split(/[._+-]/)[0] ?? "";
  return local
    ? local.charAt(0).toUpperCase() + local.slice(1).toLowerCase()
    : "Zonic Team";
}

export const STATUS_META: Record<
  ConversationStatus,
  { label: string; cls: string }
> = {
  waiting_agent: {
    label: "Waiting",
    cls: "tw:bg-(--amber-soft) tw:text-[#92400e]",
  },
  active: { label: "Active", cls: "tw:bg-(--green-soft) tw:text-[#166534]" },
  waiting_visitor: {
    label: "Awaiting visitor",
    cls: "tw:bg-(--blue-soft) tw:text-(--blue-dark)",
  },
  inactive: { label: "Inactive", cls: "tw:bg-(--panel) tw:text-(--muted)" },
  closed: { label: "Closed", cls: "tw:bg-(--panel) tw:text-(--muted)" },
};

export function initial(name: string | null | undefined) {
  return (name?.trim()?.[0] ?? "V").toUpperCase();
}
