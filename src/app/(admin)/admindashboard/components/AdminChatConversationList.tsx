"use client";

import { useEffect, useState, useCallback } from "react";
import type { SafeConversation } from "@/shared/chatTypes";

type Props = {
  selectedId: string | null;
  onSelect: (conv: SafeConversation) => void;
  newConvSignal: number; // increment this to trigger a refresh
};

const FILTERS = ["all", "waiting_agent", "active", "inactive", "closed"] as const;
type Filter = (typeof FILTERS)[number];

const FILTER_LABELS: Record<Filter, string> = {
  all: "All",
  waiting_agent: "Waiting",
  active: "Active",
  inactive: "Inactive",
  closed: "Closed",
};

function timeAgo(iso: string | null | undefined): string {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const s = Math.floor(diff / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

export default function AdminChatConversationList({
  selectedId,
  onSelect,
  newConvSignal,
}: Props) {
  const [conversations, setConversations] = useState<SafeConversation[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
            reset ? data.conversations : [...prev, ...data.conversations]
          );
          setTotalPages(data.pages ?? 1);
          setPage(p);
        }
      } catch (err) {
        console.error("[AdminChatConversationList] load failed:", err);
      } finally {
        setLoading(false);
      }
    },
    [filter, search]
  );

  // Reload on filter/search change or new conv signal
  useEffect(() => {
    load(1, true);
  }, [filter, search, newConvSignal, load]);

  return (
    <>
      <div className="alc-list-toolbar">
        <input
          type="search"
          className="alc-search-input"
          placeholder="Search name, email, service…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="alc-filter-tabs">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`alc-filter-tab${filter === f ? " alc-filter-tab--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {FILTER_LABELS[f]}
          </button>
        ))}
      </div>

      <div className="alc-list">
        {loading && conversations.length === 0 && (
          <div className="alc-list-loading">Loading…</div>
        )}

        {!loading && conversations.length === 0 && (
          <div className="alc-list-empty">No conversations found.</div>
        )}

        {conversations.map((conv) => (
          <div
            key={conv._id}
            className={`alc-conv-item${selectedId === conv._id ? " alc-conv-item--active" : ""}`}
            onClick={() => onSelect(conv)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelect(conv)}
          >
            <div className="alc-conv-top">
              <span className="alc-conv-name">{conv.name}</span>
              <span className="alc-conv-time">
                {timeAgo(conv.lastMessageAt ?? conv.createdAt)}
              </span>
            </div>

            <div className="alc-conv-meta">
              <span className="alc-conv-service">
                {conv.service ?? "—"}
                {conv.subService ? ` · ${conv.subService}` : ""}
              </span>
              <span
                className={`alc-status-badge alc-status-badge--${conv.status}`}
              >
                {conv.status.replace("_", " ")}
              </span>
            </div>

            {conv.lastMessage && (
              <span className="alc-conv-last">{conv.lastMessage}</span>
            )}

            {conv.unreadForAdmin > 0 && (
              <span className="alc-unread-badge">{conv.unreadForAdmin}</span>
            )}
          </div>
        ))}

        {page < totalPages && (
          <div style={{ padding: "10px", textAlign: "center" }}>
            <button
              type="button"
              className="alc-load-more-btn"
              disabled={loading}
              onClick={() => load(page + 1, false)}
            >
              {loading ? "Loading…" : "Load more"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
