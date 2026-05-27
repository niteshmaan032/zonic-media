"use client";

import type { SafeConversation } from "@/shared/chatTypes";

type Props = {
  conversation: SafeConversation;
  visitorOnline: boolean;
};

function formatDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function AdminChatVisitorInfo({
  conversation,
  visitorOnline,
}: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "rgba(0,156,255,0.12)",
          border: "1px solid rgba(0,156,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 14,
          color: "var(--admin-primary)",
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {(conversation.name[0] ?? "V").toUpperCase()}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: 6 }}
        >
          <span className="alc-chat-visitor-name">{conversation.name}</span>
          <span
            className={`alc-presence-dot${visitorOnline ? " alc-presence-dot--online" : ""}`}
            title={visitorOnline ? "Online" : "Offline"}
          />
        </div>
        <div className="alc-chat-visitor-sub">
          {conversation.email && <span>{conversation.email}</span>}
          {conversation.email && conversation.phone && <span> · </span>}
          {conversation.phone && <span>{conversation.phone}</span>}
          {conversation.service && (
            <span>
              {(conversation.email || conversation.phone) && " · "}
              {conversation.service}
              {conversation.subService ? ` › ${conversation.subService}` : ""}
            </span>
          )}
        </div>
      </div>

      <div
        style={{
          fontSize: 11,
          color: "#adb5bd",
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        <div>Started {formatDate(conversation.liveChatStartedAt)}</div>
        <div
          className={`alc-status-badge alc-status-badge--${conversation.status}`}
          style={{ marginTop: 4, display: "inline-flex" }}
        >
          {conversation.status.replace("_", " ")}
        </div>
      </div>
    </div>
  );
}
