"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import Ably from "ably";
import {
  ChatRoomProvider,
  useTyping,
  usePresenceListener,
  usePresence,
} from "@ably/chat/react";
import type { SafeConversation, SafeMessage } from "@/shared/chatTypes";
import { getLiveMessageChannelName, LIVE_MESSAGE_EVENT, generateClientMessageId } from "@/shared/chatRealtime";
import AdminChatVisitorInfo from "./AdminChatVisitorInfo";

// ─── Inner chat (inside ChatRoomProvider) ────────────────────────────────────
type InnerProps = {
  realtimeClient: Ably.Realtime;
  conversation: SafeConversation;
  adminId: string;
  connState: string;
  onStatusChange: (status: string) => void;
};

function AdminChatWindowInner({
  realtimeClient,
  conversation,
  adminId,
  connState,
  onStatusChange,
}: InnerProps) {
  const [historyMsgs, setHistoryMsgs] = useState<SafeMessage[]>([]);
  const [newMsgs, setNewMsgs] = useState<SafeMessage[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visitorOnline, setVisitorOnline] = useState(false);
  const [visitorTyping, setVisitorTyping] = useState(false);
  const [closing, setClosing] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const seenMongoIds = useRef(new Set<string>());
  const seenClientMsgIds = useRef(new Set<string>());
  const bottomRef = useRef<HTMLDivElement>(null);
  const prevConnStateRef = useRef(connState);

  const loadHistory = useCallback(
    async (before?: string) => {
      const params = new URLSearchParams({
        conversationId: conversation._id,
        limit: "30",
      });
      if (before) params.set("before", before);

      const res = await fetch(`/api/chat/messages?${params}`, {
        credentials: "include",
        cache: "no-store",
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.messages)) {
        return data.messages as SafeMessage[];
      }
      return [];
    },
    [conversation._id]
  );

  const appendUnseenMessages = useCallback((msgs: SafeMessage[]) => {
    const unseen = msgs.filter((msg) => {
      if (seenMongoIds.current.has(msg._id)) return false;
      if (msg.clientMessageId && seenClientMsgIds.current.has(msg.clientMessageId)) return false;
      return true;
    });
    if (unseen.length === 0) return;

    unseen.forEach((msg) => {
      seenMongoIds.current.add(msg._id);
      if (msg.clientMessageId) seenClientMsgIds.current.add(msg.clientMessageId);
    });
    setNewMsgs((prev) => [...prev, ...unseen]);
  }, []);

  // Load initial history
  useEffect(() => {
    let cancelled = false;
    setHistoryMsgs([]);
    setNewMsgs([]);
    seenMongoIds.current.clear();
    seenClientMsgIds.current.clear();
    setHistoryLoaded(false);

    loadHistory()
      .then((msgs) => {
        if (cancelled) return;
        msgs.forEach((m) => {
          seenMongoIds.current.add(m._id);
          if (m.clientMessageId) seenClientMsgIds.current.add(m.clientMessageId);
        });
        setHistoryMsgs(msgs);
        setHasMore(msgs.length === 30);
        setHistoryLoaded(true);
      })
      .catch(() => {
        if (!cancelled) setHistoryLoaded(true);
      });

    return () => { cancelled = true; };
  }, [conversation._id, loadHistory]);

  // Reconnect-triggered refresh: when Ably recovers from disconnected/suspended,
  // fetch the latest messages once to backfill anything missed while offline.
  useEffect(() => {
    if (!historyLoaded) return;

    const wasOffline =
      prevConnStateRef.current === "disconnected" ||
      prevConnStateRef.current === "suspended";
    prevConnStateRef.current = connState;

    if (wasOffline && connState === "connected") {
      loadHistory()
        .then((msgs) => appendUnseenMessages(msgs))
        .catch(() => {});
    }
  }, [connState, historyLoaded, loadHistory, appendUnseenMessages]);

  // Mark admin read
  useEffect(() => {
    if (!conversation._id) return;
    fetch(`/api/admin/chat/conversations/${conversation._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ markRead: true }),
    }).catch(() => {});
  }, [conversation._id]);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [newMsgs, visitorTyping]);

  // ── Ably channel subscription ───────────────────────────────────
  // Uses realtimeClient passed as a prop (not useAbly) so it is completely
  // independent of ChatRoomProvider's channel lifecycle.
  useEffect(() => {
    const channelName = getLiveMessageChannelName(conversation.roomName);
    const channel = realtimeClient.channels.get(channelName);

    const handler = (ablyMsg: Ably.Message) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = ablyMsg.data as any;
      const meta = (data?.metadata as Record<string, string>) ?? {};
      const mongoId = meta.mongoId;
      const clientMsgId = meta.clientMessageId;

      // Fast dedup before constructing the object
      if (mongoId && seenMongoIds.current.has(mongoId)) return;
      if (clientMsgId && seenClientMsgIds.current.has(clientMsgId)) return;

      const msg: SafeMessage = {
        _id: mongoId || ablyMsg.id || String(Date.now()),
        conversationId: conversation._id,
        roomName: conversation.roomName,
        senderType: (meta.senderType as "visitor" | "admin" | "system") ?? "visitor",
        senderId: meta.senderId ?? "",
        senderName: meta.senderName ?? "Visitor",
        text: data?.text ?? "",
        createdAt: ablyMsg.timestamp
          ? new Date(ablyMsg.timestamp).toISOString()
          : new Date().toISOString(),
        clientMessageId: clientMsgId || undefined,
      };

      appendUnseenMessages([msg]);
    };

    channel.subscribe(LIVE_MESSAGE_EVENT, handler).catch((err) => {
      console.error("[AdminChatWindow] message subscription failed:", err);
    });

    return () => {
      channel.unsubscribe(LIVE_MESSAGE_EVENT, handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appendUnseenMessages, realtimeClient, conversation._id, conversation.roomName]);

  // ── Ably Chat: typing ───────────────────────────────────────────
  const { currentlyTyping, currentTypers, keystroke, stop: stopTyping } = useTyping();

  useEffect(() => {
    const typers = currentTypers?.length
      ? currentTypers
      : Array.from(currentlyTyping ?? []).map((id) => ({ clientId: id }));
    setVisitorTyping(typers.some((m) => String(m.clientId).startsWith("visitor:")));
  }, [currentlyTyping, currentTypers]);

  // Stop typing on unmount (handles both component removal and conversation switch via key prop)
  useEffect(() => {
    return () => {
      stopTyping?.().catch(() => {});
    };
  }, [stopTyping]);

  // ── Ably Chat: presence ─────────────────────────────────────────
  usePresence({
    initialData: { role: "admin", adminId },
  });

  usePresenceListener({
    listener: (event) => {
      const isVisitor = String(event.member?.clientId ?? "").startsWith("visitor:");
      if (
        event.type === "enter" ||
        event.type === "present" ||
        event.type === "update"
      ) {
        if (isVisitor) setVisitorOnline(true);
      } else if (event.type === "leave") {
        if (isVisitor) setVisitorOnline(false);
      }
    },
  });

  // ── Load more (pagination) ──────────────────────────────────────
  const loadMore = async () => {
    const oldest = historyMsgs[0];
    if (!oldest || loadingMore) return;

    setLoadingMore(true);
    try {
      const msgs = await loadHistory(oldest.createdAt);
      msgs.forEach((m) => {
        seenMongoIds.current.add(m._id);
        if (m.clientMessageId) seenClientMsgIds.current.add(m.clientMessageId);
      });
      setHistoryMsgs((prev) => [...msgs, ...prev]);
      setHasMore(msgs.length === 30);
    } finally {
      setLoadingMore(false);
    }
  };

  // ── Send message (with optimistic update) ─────────────────────
  const sendMessage = async () => {
    const text = inputVal.trim();
    if (!text || sending) return;

    setSending(true);
    setSendError("");
    setInputVal("");

    // Generate stable ID before anything so Ably echo is always suppressed
    const clientMessageId = generateClientMessageId();
    seenClientMsgIds.current.add(clientMessageId);

    const tempId = `temp-${clientMessageId}`;
    setNewMsgs((prev) => [
      ...prev,
      {
        _id: tempId,
        conversationId: conversation._id,
        roomName: conversation.roomName,
        senderType: "admin" as const,
        senderId: `admin:${adminId}`,
        senderName: "Zonic Team",
        text,
        createdAt: new Date().toISOString(),
        clientMessageId,
      },
    ]);

    try {
      await stopTyping?.();
      const res = await fetch("/api/chat/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          conversationId: conversation._id,
          text,
          senderType: "admin",
          clientMessageId,
        }),
      });
      const data = await res.json();
      if (data.success && data.message?._id) {
        const realId = data.message._id;
        seenMongoIds.current.add(realId);
        setNewMsgs((prev) =>
          prev.map((m) => (m._id === tempId ? { ...m, _id: realId } : m))
        );
      } else if (!data.success) {
        seenClientMsgIds.current.delete(clientMessageId);
        setNewMsgs((prev) => prev.filter((m) => m._id !== tempId));
        setSendError(data.message ?? "Failed to send. Try again.");
      }
    } catch {
      seenClientMsgIds.current.delete(clientMessageId);
      setNewMsgs((prev) => prev.filter((m) => m._id !== tempId));
      setSendError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputVal(e.target.value);
    if (e.target.value.trim()) {
      keystroke?.().catch(() => {});
    } else {
      stopTyping?.().catch(() => {});
    }
  };

  // ── Close conversation ──────────────────────────────────────────
  const closeConversation = async () => {
    if (closing) return;
    setClosing(true);
    try {
      await fetch(`/api/admin/chat/conversations/${conversation._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ status: "closed" }),
      });
      onStatusChange("closed");
    } catch {
      setClosing(false);
    }
  };

  // ── Manual refresh ──────────────────────────────────────────────
  const handleRefresh = async () => {
    if (refreshing || !historyLoaded) return;
    setRefreshing(true);
    try {
      const msgs = await loadHistory();
      appendUnseenMessages(msgs);
    } catch {} finally {
      setRefreshing(false);
    }
  };

  const isClosed =
    conversation.status === "closed" || conversation.status === "inactive";
  const allMsgs = [...historyMsgs, ...newMsgs];

  return (
    <>
      {/* Header */}
      <div className="alc-chat-header">
        <AdminChatVisitorInfo
          conversation={conversation}
          visitorOnline={visitorOnline}
        />
        <div className="alc-chat-header-right">
          <button
            type="button"
            className="alc-chat-action-btn"
            onClick={handleRefresh}
            disabled={refreshing || !historyLoaded}
            title="Refresh messages"
          >
            {refreshing ? "…" : "↻"}
          </button>
          {!isClosed && (
            <button
              type="button"
              className="alc-chat-action-btn alc-chat-action-btn--danger"
              onClick={closeConversation}
              disabled={closing}
            >
              {closing ? "Closing…" : "Close chat"}
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="alc-messages">
        {hasMore && (
          <button
            type="button"
            className="alc-load-more-btn"
            onClick={loadMore}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading…" : "Load older messages"}
          </button>
        )}

        {!historyLoaded && (
          <div className="alc-msg-loading">Loading messages…</div>
        )}

        {historyLoaded && allMsgs.length === 0 && (
          <div className="alc-msg-empty">No messages yet.</div>
        )}

        {allMsgs.map((msg) => (
          <div
            key={msg._id}
            className={`alc-msg alc-msg--${msg.senderType}`}
          >
            {msg.senderType === "visitor" && (
              <div
                className="alc-msg-avatar alc-msg-avatar--visitor"
                aria-hidden="true"
              >
                {(conversation.name[0] ?? "V").toUpperCase()}
              </div>
            )}
            {msg.senderType === "admin" && (
              <div
                className="alc-msg-avatar alc-msg-avatar--admin"
                aria-hidden="true"
              >
                Z
              </div>
            )}
            <div className={`alc-bubble alc-bubble--${msg.senderType}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {visitorTyping && (
          <div className="alc-typing-indicator">
            <div
              className="alc-msg-avatar alc-msg-avatar--visitor"
              aria-hidden="true"
            >
              {(conversation.name[0] ?? "V").toUpperCase()}
            </div>
            <div className="alc-typing-dots">
              <span className="alc-typing-text">
                {conversation.name || "Visitor"} is typing
              </span>
              <span className="alc-typing-dot" />
              <span className="alc-typing-dot" />
              <span className="alc-typing-dot" />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {sendError && <div className="alc-connect-error">{sendError}</div>}

      {/* Input */}
      {isClosed ? (
        <div className="alc-input-closed-notice">
          This conversation is {conversation.status}. You cannot send messages.
        </div>
      ) : (
        <div className="alc-input-area">
          <textarea
            className="alc-textarea"
            placeholder="Type a reply… (Enter to send, Shift+Enter for new line)"
            value={inputVal}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={sending}
            maxLength={2000}
          />
          <div className="alc-input-actions">
            <span className="alc-char-count">
              {inputVal.length}/2000
            </span>
            <button
              type="button"
              className="alc-send-btn"
              onClick={sendMessage}
              disabled={!inputVal.trim() || sending}
            >
              {sending ? "Sending…" : "Send Reply"}
              {!sending && (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Outer wrapper: wraps with ChatRoomProvider ───────────────────────────────
type Props = {
  realtimeClient: Ably.Realtime;
  conversation: SafeConversation;
  adminId: string;
  connState: string;
  onStatusChange: (status: string) => void;
};

export default function AdminChatWindow({
  realtimeClient,
  conversation,
  adminId,
  connState,
  onStatusChange,
}: Props) {
  return (
    <ChatRoomProvider
      name={conversation.roomName}
      options={{ typing: { heartbeatThrottleMs: 3000 } }}
    >
      <AdminChatWindowInner
        realtimeClient={realtimeClient}
        conversation={conversation}
        adminId={adminId}
        connState={connState}
        onStatusChange={onStatusChange}
      />
    </ChatRoomProvider>
  );
}
