"use client";

import { useCallback, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import type { SafeConversation } from "@/shared/chatTypes";
import { STATUS_META, elapsed, initial, timeAgo } from "./util";

/* Conversation list (admin live chat redesign, 26 Oct 2026). Waiting chats
   sit on top with a live timer and an inline Accept button. */

const FILTERS = ["all", "waiting_agent", "active", "inactive", "closed"] as const;
export type Filter = (typeof FILTERS)[number];

const FILTER_LABELS: Record<Filter, string> = {
  all: "All",
  waiting_agent: "Waiting",
  active: "Active",
  inactive: "Inactive",
  closed: "Closed",
};

type Props = {
  selectedId: string | null;
  onSelect: (conv: SafeConversation) => void;
  onAccept: (conv: SafeConversation) => void;
  acceptingId: string | null;
  refreshSignal: number;
  now: number;
  onCounts: (counts: { waiting: number; unread: number }) => void;
};

export default function ConversationList({
  selectedId,
  onSelect,
  onAccept,
  acceptingId,
  refreshSignal,
  now,
  onCounts,
}: Props) {
  const [conversations, setConversations] = useState<SafeConversation[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [waitingCount, setWaitingCount] = useState(0);

  const load = useCallback(
    async (p = 1, reset = false) => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          status: filter,
          search,
          page: String(p),
        });
        const res = await fetch(`/api/admin/chat/conversations?${params}`, {
          credentials: "include",
          cache: "no-store",
        });
        const data = await res.json();
        if (data.success) {
          setConversations((prev) =>
            reset ? data.conversations : [...prev, ...data.conversations],
          );
          setTotalPages(data.pages ?? 1);
          setPage(p);
          setWaitingCount(data.waitingConversations ?? 0);
          onCounts({
            waiting: data.waitingConversations ?? 0,
            unread: data.unreadConversations ?? 0,
          });
        }
      } catch (err) {
        console.error("[admin-chat] list load failed:", err);
      } finally {
        setLoading(false);
      }
    },
    [filter, search, onCounts],
  );

  useEffect(() => {
    const t = setTimeout(() => load(1, true), 0);
    return () => clearTimeout(t);
  }, [filter, search, refreshSignal, load]);

  // Safety refresh in case a realtime notification was missed.
  useEffect(() => {
    const id = window.setInterval(() => {
      if (page === 1) load(1, true);
    }, 30_000);
    return () => window.clearInterval(id);
  }, [page, load]);

  // Waiting chats first, then the server's newest-first order.
  const sorted = [...conversations].sort(
    (a, b) =>
      Number(b.status === "waiting_agent") - Number(a.status === "waiting_agent"),
  );

  return (
    <div className="tw:flex tw:h-full tw:min-h-0 tw:flex-col">
      <div className="tw:flex-none tw:p-4 tw:pb-3">
        <label className="tw:flex tw:h-11 tw:items-center tw:gap-2.5 tw:rounded-full tw:border tw:border-(--line) tw:bg-(--panel) tw:px-4 tw:text-(--muted) tw:focus-within:border-(--blue) tw:focus-within:bg-white">
          <FiSearch aria-hidden="true" />
          <input
            type="search"
            className="tw:min-w-0 tw:flex-1 tw:border-0 tw:bg-transparent tw:text-[14px] tw:text-(--ink) tw:outline-none tw:placeholder:text-(--muted)"
            placeholder="Search name, email, topic…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <div className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5">
          {FILTERS.map((f) => {
            const on = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`tw:flex tw:cursor-pointer tw:items-center tw:gap-1.5 tw:rounded-full tw:border-0 tw:px-3 tw:py-1.5 tw:text-[12.5px] tw:font-semibold tw:transition ${on ? "tw:bg-(--ink) tw:text-white" : "tw:bg-(--panel) tw:text-(--text) tw:hover:bg-[#e6ebf3]"}`}
              >
                {FILTER_LABELS[f]}
                {f === "waiting_agent" && waitingCount > 0 && (
                  <span className="ac-pulse tw:grid tw:min-w-5 tw:place-items-center tw:rounded-full tw:bg-(--amber) tw:px-1.5 tw:text-[11px] tw:text-white">
                    {waitingCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="ac-scroll tw:min-h-0 tw:flex-1 tw:overflow-y-auto tw:px-3 tw:pb-3">
        {loading && conversations.length === 0 && (
          <p className="tw:p-6 tw:text-center tw:text-[13.5px] tw:text-(--muted)">Loading…</p>
        )}
        {!loading && conversations.length === 0 && (
          <p className="tw:p-6 tw:text-center tw:text-[13.5px] tw:text-(--muted)">
            No conversations here yet.
          </p>
        )}

        <ul className="tw:m-0 tw:grid tw:list-none tw:gap-1.5 tw:p-0">
          {sorted.map((conv) => {
            const selected = selectedId === conv._id;
            const waiting = conv.status === "waiting_agent";
            const meta = STATUS_META[conv.status];
            return (
              <li key={conv._id}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => onSelect(conv)}
                  onKeyDown={(e) => e.key === "Enter" && onSelect(conv)}
                  className={`ac-in tw:relative tw:flex tw:cursor-pointer tw:gap-3 tw:rounded-[16px] tw:p-3 tw:transition ${selected ? "tw:bg-(--blue-soft) tw:ring-1 tw:ring-(--blue)/30" : waiting ? "tw:bg-(--amber-soft)/60 tw:hover:bg-(--amber-soft)" : "tw:hover:bg-(--panel)"}`}
                >
                  <span
                    className={`tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[15px] tw:font-semibold ${waiting ? "ac-pulse tw:bg-(--amber) tw:text-white" : "tw:bg-(--ink) tw:text-white"}`}
                    aria-hidden="true"
                  >
                    {initial(conv.name)}
                  </span>
                  <span className="tw:min-w-0 tw:flex-1">
                    <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-2">
                      <b className="tw:truncate tw:text-[14px] tw:font-semibold">{conv.name}</b>
                      <span className="tw:flex-none tw:text-[11.5px] tw:text-(--muted)">
                        {waiting
                          ? elapsed(conv.liveChatStartedAt, now)
                          : timeAgo(conv.lastMessageAt ?? conv.createdAt)}
                      </span>
                    </span>
                    <span className="tw:mt-0.5 tw:block tw:truncate tw:text-[12.5px] tw:text-(--text)">
                      {conv.service || "General question"}
                    </span>
                    {conv.lastMessage && (
                      <span className="tw:mt-0.5 tw:block tw:truncate tw:text-[12.5px] tw:text-(--muted)">
                        {conv.lastMessage}
                      </span>
                    )}
                    <span className="tw:mt-2 tw:flex tw:items-center tw:gap-2">
                      <span className={`tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-semibold ${meta.cls}`}>
                        {meta.label}
                      </span>
                      {conv.assignedAdminName && !waiting && (
                        <span className="tw:truncate tw:text-[11.5px] tw:text-(--muted)">
                          · {conv.assignedAdminName}
                        </span>
                      )}
                      {waiting && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onAccept(conv);
                          }}
                          disabled={acceptingId === conv._id}
                          className="tw:ml-auto tw:cursor-pointer tw:rounded-full tw:border-0 tw:bg-(--blue) tw:px-3 tw:py-1 tw:text-[12px] tw:font-semibold tw:text-white tw:transition tw:hover:bg-(--blue-dark) tw:disabled:opacity-60"
                        >
                          {acceptingId === conv._id ? "Accepting…" : "Accept"}
                        </button>
                      )}
                    </span>
                  </span>
                  {conv.unreadForAdmin > 0 && !waiting && (
                    <span className="tw:absolute tw:top-3 tw:right-3 tw:grid tw:min-w-5 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:px-1.5 tw:text-[11px] tw:font-bold tw:text-white">
                      {conv.unreadForAdmin}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {page < totalPages && (
          <div className="tw:p-3 tw:text-center">
            <button
              type="button"
              disabled={loading}
              onClick={() => load(page + 1, false)}
              className="tw:cursor-pointer tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:px-4 tw:py-2 tw:text-[13px] tw:font-semibold tw:text-(--ink) tw:hover:bg-(--panel)"
            >
              {loading ? "Loading…" : "Load more"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
