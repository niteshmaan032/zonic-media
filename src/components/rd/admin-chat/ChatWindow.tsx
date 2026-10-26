"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type Ably from "ably";
import {
  ChatRoomProvider,
  usePresence,
  usePresenceListener,
  useTyping,
} from "@ably/chat/react";
import { FiCheckCircle, FiRefreshCw, FiSend, FiXCircle } from "react-icons/fi";
import type { SafeConversation, SafeMessage } from "@/shared/chatTypes";
import {
  LIVE_MESSAGE_EVENT,
  generateClientMessageId,
  getLiveMessageChannelName,
} from "@/shared/chatRealtime";
import { STATUS_META, elapsed, initial } from "./util";

/* Admin chat window (live chat redesign, 26 Oct 2026). Same realtime logic
   as before (Mongo history + Ably channel + Ably Chat typing/presence);
   new: while the visitor waits, an "Accept & start chatting" panel replaces
   the composer — accepting tells the visitor they're connected. */

const QUICK_REPLIES = [
  "Hi! Thanks for reaching out — how can I help today?",
  "Could you share the best phone number to reach you?",
  "Great question — give me a moment to check that for you.",
];

type InnerProps = {
  realtimeClient: Ably.Realtime;
  conversation: SafeConversation;
  adminId: string;
  adminName: string;
  connState: string;
  now: number;
  accepting: boolean;
  acceptError: string;
  onAccept: (conv: SafeConversation) => void;
  onStatusChange: (status: string) => void;
};

function ChatWindowInner({
  realtimeClient,
  conversation,
  adminId,
  adminName,
  connState,
  now,
  accepting,
  acceptError,
  onAccept,
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
  const [remoteClosed, setRemoteClosed] = useState(false);

  const seenMongoIds = useRef(new Set<string>());
  const seenClientMsgIds = useRef(new Set<string>());
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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
      return data.success && Array.isArray(data.messages)
        ? (data.messages as SafeMessage[])
        : [];
    },
    [conversation._id],
  );

  const appendUnseenMessages = useCallback((msgs: SafeMessage[]) => {
    const unseen = msgs.filter((msg) => {
      if (seenMongoIds.current.has(msg._id)) return false;
      if (msg.clientMessageId && seenClientMsgIds.current.has(msg.clientMessageId))
        return false;
      return true;
    });
    if (!unseen.length) return;
    unseen.forEach((msg) => {
      seenMongoIds.current.add(msg._id);
      if (msg.clientMessageId) seenClientMsgIds.current.add(msg.clientMessageId);
    });
    setNewMsgs((prev) => [...prev, ...unseen]);
  }, []);

  // Initial history
  useEffect(() => {
    let cancelled = false;
    seenMongoIds.current.clear();
    seenClientMsgIds.current.clear();
    loadHistory()
      .then((msgs) => {
        if (cancelled) return;
        msgs.forEach((m) => {
          seenMongoIds.current.add(m._id);
          if (m.clientMessageId) seenClientMsgIds.current.add(m.clientMessageId);
        });
        setHistoryMsgs(msgs);
        setNewMsgs([]);
        setHasMore(msgs.length === 30);
        setHistoryLoaded(true);
        if (
          msgs.some(
            (m) =>
              m.senderType === "system" &&
              (m.senderId === "system:visitor-end" ||
                m.senderId === "system:admin-close"),
          )
        )
          setRemoteClosed(true);
      })
      .catch(() => {
        if (!cancelled) setHistoryLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, [conversation._id, loadHistory]);

  // Backfill after a reconnect
  useEffect(() => {
    if (!historyLoaded) return;
    const wasOffline =
      prevConnStateRef.current === "disconnected" ||
      prevConnStateRef.current === "suspended";
    prevConnStateRef.current = connState;
    if (wasOffline && connState === "connected") {
      loadHistory().then(appendUnseenMessages).catch(() => {});
    }
  }, [connState, historyLoaded, loadHistory, appendUnseenMessages]);

  // Mark read
  useEffect(() => {
    fetch(`/api/admin/chat/conversations/${conversation._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ markRead: true }),
    }).catch(() => {});
  }, [conversation._id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [historyMsgs, newMsgs, visitorTyping]);

  // Realtime messages
  useEffect(() => {
    const channel = realtimeClient.channels.get(
      getLiveMessageChannelName(conversation.roomName),
    );
    const handler = (ablyMsg: Ably.Message) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = ablyMsg.data as any;
      const meta = (data?.metadata as Record<string, string>) ?? {};
      if (meta.mongoId && seenMongoIds.current.has(meta.mongoId)) return;
      if (meta.clientMessageId && seenClientMsgIds.current.has(meta.clientMessageId))
        return;
      appendUnseenMessages([
        {
          _id: meta.mongoId || ablyMsg.id || String(Date.now()),
          conversationId: conversation._id,
          roomName: conversation.roomName,
          senderType: (meta.senderType as SafeMessage["senderType"]) ?? "visitor",
          senderId: meta.senderId ?? "",
          senderName: meta.senderName ?? "Visitor",
          text: data?.text ?? "",
          createdAt: ablyMsg.timestamp
            ? new Date(ablyMsg.timestamp).toISOString()
            : new Date().toISOString(),
          clientMessageId: meta.clientMessageId || undefined,
        },
      ]);
      if (
        meta.senderType === "system" &&
        (meta.conversationClosed === "true" ||
          meta.senderId === "system:visitor-end" ||
          meta.senderId === "system:admin-close")
      ) {
        setRemoteClosed(true);
      }
    };
    channel.subscribe(LIVE_MESSAGE_EVENT, handler).catch((err) => {
      console.error("[admin-chat] subscribe failed:", err);
    });
    return () => {
      channel.unsubscribe(LIVE_MESSAGE_EVENT, handler);
    };
  }, [appendUnseenMessages, realtimeClient, conversation._id, conversation.roomName]);

  // Typing + presence (Ably Chat)
  const { currentlyTyping, currentTypers, keystroke, stop: stopTyping } =
    useTyping();
  useEffect(() => {
    const typers = currentTypers?.length
      ? currentTypers
      : Array.from(currentlyTyping ?? []).map((id) => ({ clientId: id }));
    setVisitorTyping(typers.some((m) => String(m.clientId).startsWith("visitor:")));
  }, [currentlyTyping, currentTypers]);
  useEffect(() => {
    return () => {
      stopTyping?.().catch(() => {});
    };
  }, [stopTyping]);

  usePresence({ initialData: { role: "admin", adminId } });
  usePresenceListener({
    listener: (event) => {
      const isVisitor = String(event.member?.clientId ?? "").startsWith("visitor:");
      if (!isVisitor) return;
      if (event.type === "leave") setVisitorOnline(false);
      else setVisitorOnline(true);
    },
  });

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

  const sendMessage = async (override?: string) => {
    const text = (override ?? inputVal).trim();
    if (!text || sending) return;
    setSending(true);
    setSendError("");
    if (!override) setInputVal("");
    const clientMessageId = generateClientMessageId();
    seenClientMsgIds.current.add(clientMessageId);
    const tempId = `temp-${clientMessageId}`;
    setNewMsgs((prev) => [
      ...prev,
      {
        _id: tempId,
        conversationId: conversation._id,
        roomName: conversation.roomName,
        senderType: "admin",
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
        seenMongoIds.current.add(data.message._id);
        setNewMsgs((prev) =>
          prev.map((m) => (m._id === tempId ? { ...m, _id: data.message._id } : m)),
        );
      } else {
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
      textareaRef.current?.focus();
    }
  };

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

  const handleRefresh = async () => {
    if (refreshing || !historyLoaded) return;
    setRefreshing(true);
    try {
      appendUnseenMessages(await loadHistory());
    } catch {
    } finally {
      setRefreshing(false);
    }
  };

  const waiting = conversation.status === "waiting_agent" && !remoteClosed;
  const isClosed =
    remoteClosed ||
    conversation.status === "closed" ||
    conversation.status === "inactive";
  const meta = STATUS_META[remoteClosed ? "closed" : conversation.status];
  const allMsgs = [...historyMsgs, ...newMsgs];
  const isMine = (m: SafeMessage) => m.senderId === `admin:${adminId}`;

  return (
    <div className="tw:flex tw:h-full tw:min-h-0 tw:flex-col">
      {/* Header */}
      <div className="tw:flex tw:flex-none tw:items-center tw:gap-3 tw:border-b tw:border-(--line) tw:px-5 tw:py-3.5">
        <span className="tw:relative tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[16px] tw:font-semibold tw:text-white">
          {initial(conversation.name)}
          <span
            className={`tw:absolute tw:right-0 tw:bottom-0 tw:size-3 tw:rounded-full tw:ring-2 tw:ring-white ${visitorOnline ? "tw:bg-(--green)" : "tw:bg-[#c3cad6]"}`}
            title={visitorOnline ? "Visitor online" : "Visitor away"}
          />
        </span>
        <span className="tw:min-w-0 tw:flex-1 tw:leading-tight">
          <b className="tw:block tw:truncate tw:text-[16px] tw:font-semibold">{conversation.name}</b>
          <span className="tw:mt-0.5 tw:flex tw:flex-wrap tw:items-center tw:gap-x-2 tw:gap-y-1 tw:text-[12.5px] tw:text-(--muted)">
            <span className={`tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-semibold ${meta.cls}`}>
              {meta.label}
            </span>
            <span>{visitorOnline ? "Online now" : "Away"}</span>
            {conversation.service && <span className="tw:truncate">· {conversation.service}</span>}
          </span>
        </span>
        <button
          type="button"
          onClick={handleRefresh}
          disabled={refreshing || !historyLoaded}
          title="Refresh messages"
          className="tw:grid tw:size-9 tw:cursor-pointer tw:place-items-center tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:text-(--text) tw:hover:bg-(--panel) tw:disabled:opacity-50"
        >
          <FiRefreshCw className={refreshing ? "tw:animate-spin" : ""} aria-hidden="true" />
        </button>
        {!isClosed && (
          <button
            type="button"
            onClick={closeConversation}
            disabled={closing}
            className="tw:flex tw:cursor-pointer tw:items-center tw:gap-1.5 tw:rounded-full tw:border tw:border-(--red)/40 tw:bg-white tw:px-3.5 tw:py-2 tw:text-[13px] tw:font-semibold tw:text-(--red) tw:hover:bg-(--red-soft) tw:disabled:opacity-50"
          >
            <FiXCircle aria-hidden="true" /> {closing ? "Closing…" : "Close chat"}
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="ac-scroll tw:flex tw:min-h-0 tw:flex-1 tw:flex-col tw:gap-3 tw:overflow-y-auto tw:bg-(--panel) tw:px-5 tw:py-5">
        {hasMore && (
          <button
            type="button"
            onClick={loadMore}
            disabled={loadingMore}
            className="tw:mx-auto tw:cursor-pointer tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:px-3.5 tw:py-1.5 tw:text-[12.5px] tw:font-semibold"
          >
            {loadingMore ? "Loading…" : "Load older messages"}
          </button>
        )}
        {!historyLoaded && (
          <p className="tw:text-center tw:text-[13px] tw:text-(--muted)">Loading messages…</p>
        )}
        {historyLoaded && allMsgs.length === 0 && (
          <p className="tw:mt-6 tw:text-center tw:text-[13.5px] tw:text-(--muted)">
            {waiting
              ? "The visitor is on the connecting screen. Accept to start the conversation."
              : "No messages yet."}
          </p>
        )}

        {allMsgs.map((msg) => {
          if (msg.senderType === "system") {
            return (
              <div key={msg._id} className="ac-in tw:mx-auto tw:max-w-[80%] tw:rounded-full tw:bg-white tw:px-3.5 tw:py-1.5 tw:text-center tw:text-[12.5px] tw:text-(--muted) tw:ring-1 tw:ring-(--line)">
                {msg.text}
              </div>
            );
          }
          if (msg.senderType === "admin") {
            return (
              <div key={msg._id} className="ac-in tw:flex tw:flex-col tw:items-end">
                <span className="tw:mb-1 tw:text-[11px] tw:font-semibold tw:text-(--muted)">
                  {isMine(msg) ? "You" : msg.senderName}
                </span>
                <div className="tw:max-w-[70%] tw:rounded-[18px] tw:rounded-br-[6px] tw:bg-(--blue) tw:px-4 tw:py-2.5 tw:text-[14px]/[1.55] tw:whitespace-pre-line tw:text-white">
                  {msg.text}
                </div>
              </div>
            );
          }
          return (
            <div key={msg._id} className="ac-in tw:flex tw:items-end tw:gap-2">
              <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[12px] tw:font-semibold tw:ring-1 tw:ring-(--line)" aria-hidden="true">
                {initial(conversation.name)}
              </span>
              <div className="tw:max-w-[70%] tw:rounded-[18px] tw:rounded-bl-[6px] tw:bg-white tw:px-4 tw:py-2.5 tw:text-[14px]/[1.55] tw:whitespace-pre-line tw:ring-1 tw:ring-(--line)">
                {msg.text}
              </div>
            </div>
          );
        })}

        {visitorTyping && (
          <div className="ac-in tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:text-(--muted)">
            <span className="tw:flex tw:gap-1">
              <span className="ac-dot tw:size-1.5 tw:rounded-full tw:bg-(--muted)" />
              <span className="ac-dot tw:size-1.5 tw:rounded-full tw:bg-(--muted)" />
              <span className="ac-dot tw:size-1.5 tw:rounded-full tw:bg-(--muted)" />
            </span>
            {conversation.name || "Visitor"} is typing
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {(sendError || acceptError) && (
        <div className="tw:mx-5 tw:mt-3 tw:rounded-[12px] tw:bg-(--red-soft) tw:px-3.5 tw:py-2 tw:text-[13px] tw:text-[#b42318]">
          {acceptError || sendError}
        </div>
      )}

      {/* Accept panel / composer / closed notice */}
      {waiting ? (
        <div className="tw:m-4 tw:flex tw:flex-none tw:flex-wrap tw:items-center tw:gap-4 tw:rounded-[18px] tw:bg-(--amber-soft) tw:p-4 tw:ring-1 tw:ring-[#fde3a7]">
          <span className="ac-pulse tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--amber) tw:text-[18px] tw:text-white">
            {initial(conversation.name)}
          </span>
          <span className="tw:min-w-[200px] tw:flex-1 tw:leading-tight">
            <b className="tw:block tw:text-[15px] tw:font-semibold">
              {conversation.name} is waiting for an agent
            </b>
            <span className="tw:mt-1 tw:block tw:text-[13px] tw:text-(--text)">
              Waiting {elapsed(conversation.liveChatStartedAt, now)} · they&apos;ll see
              &ldquo;Connected to {adminName}&rdquo; as soon as you accept.
            </span>
          </span>
          <button
            type="button"
            onClick={() => onAccept(conversation)}
            disabled={accepting}
            className="tw:flex tw:cursor-pointer tw:items-center tw:gap-2 tw:rounded-full tw:border-0 tw:bg-(--blue) tw:px-5 tw:py-3 tw:text-[14.5px] tw:font-semibold tw:text-white tw:[box-shadow:0_12px_26px_-12px_rgba(37,103,232,0.8)] tw:transition tw:hover:bg-(--blue-dark) tw:disabled:opacity-60"
          >
            <FiCheckCircle aria-hidden="true" />
            {accepting ? "Accepting…" : "Accept & start chatting"}
          </button>
        </div>
      ) : isClosed ? (
        <div className="tw:m-4 tw:flex-none tw:rounded-[14px] tw:bg-(--panel) tw:px-4 tw:py-3 tw:text-center tw:text-[13px] tw:text-(--muted)">
          This conversation is {remoteClosed ? "closed" : conversation.status}. Messages can no longer be sent.
        </div>
      ) : (
        <div className="tw:flex-none tw:border-t tw:border-(--line) tw:bg-white tw:p-4">
          <div className="tw:mb-2.5 tw:flex tw:flex-wrap tw:gap-1.5">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                disabled={sending}
                className="tw:max-w-full tw:cursor-pointer tw:truncate tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:px-3 tw:py-1 tw:text-[12px] tw:text-(--text) tw:hover:border-(--blue) tw:hover:text-(--blue)"
              >
                {q}
              </button>
            ))}
          </div>
          <div className="tw:flex tw:items-end tw:gap-2.5">
            <textarea
              ref={textareaRef}
              rows={2}
              className="tw:min-h-[52px] tw:flex-1 tw:resize-none tw:rounded-[16px] tw:border tw:border-(--line) tw:bg-(--panel) tw:px-4 tw:py-3 tw:text-[14px] tw:outline-none tw:focus:border-(--blue) tw:focus:bg-white"
              placeholder="Type a reply… (Enter to send, Shift+Enter for a new line)"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                if (e.target.value.trim()) keystroke?.().catch(() => {});
                else stopTyping?.().catch(() => {});
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              disabled={sending}
              maxLength={2000}
            />
            <button
              type="button"
              onClick={() => sendMessage()}
              disabled={!inputVal.trim() || sending}
              className="tw:flex tw:h-[52px] tw:cursor-pointer tw:items-center tw:gap-2 tw:rounded-[16px] tw:border-0 tw:bg-(--blue) tw:px-5 tw:text-[14px] tw:font-semibold tw:text-white tw:hover:bg-(--blue-dark) tw:disabled:cursor-not-allowed tw:disabled:bg-(--line) tw:disabled:text-(--muted)"
            >
              <FiSend aria-hidden="true" /> {sending ? "Sending…" : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

type Props = Omit<InnerProps, never>;

export default function ChatWindow(props: Props) {
  return (
    <ChatRoomProvider
      name={props.conversation.roomName}
      options={{ typing: { heartbeatThrottleMs: 3000 } }}
    >
      <ChatWindowInner {...props} />
    </ChatRoomProvider>
  );
}
