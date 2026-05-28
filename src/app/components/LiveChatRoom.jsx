"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Ably from "ably";
import { AblyProvider } from "ably/react";
import { ChatClient } from "@ably/chat";
import {
  ChatClientProvider,
  ChatRoomProvider,
  useTyping,
  usePresenceListener,
  usePresence,
} from "@ably/chat/react";
import { getLiveMessageChannelName, LIVE_MESSAGE_EVENT, generateClientMessageId } from "@/shared/chatRealtime";

const INACTIVITY_MS = 10 * 60 * 1000; // 10 minutes

// ─── Inner component (inside providers) ──────────────────────────────────────
function LiveChatInner({
  realtimeClient,
  conversationId,
  roomName,
  visitorId,
  visitorName,
  onClose,
  onInactive,
}) {
  const [inputVal, setInputVal] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [historyMsgs, setHistoryMsgs] = useState([]);
  const [newMsgs, setNewMsgs] = useState([]);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [adminOnline, setAdminOnline] = useState(false);
  const [adminTyping, setAdminTyping] = useState(false);
  const [justConnected, setJustConnected] = useState(false);

  const seenMongoIds = useRef(new Set());
  const seenClientMsgIds = useRef(new Set());
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const inactivityRef = useRef(null);

  // ── Inactivity reset ────────────────────────────────────────────
  const resetInactivity = useCallback(() => {
    if (inactivityRef.current) clearTimeout(inactivityRef.current);
    inactivityRef.current = setTimeout(() => {
      onInactive?.();
    }, INACTIVITY_MS);
  }, [onInactive]);

  useEffect(() => {
    resetInactivity();
    return () => {
      if (inactivityRef.current) clearTimeout(inactivityRef.current);
    };
  }, [resetInactivity]);

  // ── Load history from MongoDB ───────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    fetch(`/api/chat/messages?conversationId=${encodeURIComponent(conversationId)}&visitorId=${encodeURIComponent(visitorId)}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (data.success && Array.isArray(data.messages)) {
          data.messages.forEach((m) => {
            seenMongoIds.current.add(m._id);
            if (m.clientMessageId) seenClientMsgIds.current.add(m.clientMessageId);
          });
          setHistoryMsgs(data.messages);
        }
        setHistoryLoaded(true);
      })
      .catch(() => {
        if (!cancelled) setHistoryLoaded(true);
      });
    return () => { cancelled = true; };
  }, [conversationId, visitorId]);

  // ── Ably channel subscription ───────────────────────────────────
  // Uses realtimeClient passed as a prop (not useAbly/useChannel) so it is
  // completely independent of ChatRoomProvider's channel lifecycle.
  useEffect(() => {
    if (!realtimeClient) return;
    const channelName = getLiveMessageChannelName(roomName);
    const channel = realtimeClient.channels.get(channelName);

    const handler = (ablyMsg) => {
      const meta = ablyMsg.data?.metadata ?? {};
      const mongoId = meta.mongoId;
      const clientMsgId = meta.clientMessageId;

      // Dedup by mongoId or clientMessageId (covers the race condition)
      if (mongoId && seenMongoIds.current.has(mongoId)) return;
      if (clientMsgId && seenClientMsgIds.current.has(clientMsgId)) return;

      if (mongoId) seenMongoIds.current.add(mongoId);
      if (clientMsgId) seenClientMsgIds.current.add(clientMsgId);

      setNewMsgs((prev) => [
        ...prev,
        {
          _id: mongoId || ablyMsg.id || String(Date.now()),
          senderType: meta.senderType ?? "visitor",
          senderName: meta.senderName ?? "User",
          text: ablyMsg.data?.text ?? "",
          createdAt: ablyMsg.timestamp
            ? new Date(ablyMsg.timestamp).toISOString()
            : new Date().toISOString(),
          clientMessageId: clientMsgId,
        },
      ]);
      resetInactivity();
    };

    channel.subscribe(LIVE_MESSAGE_EVENT, handler).catch((err) => {
      console.error("[LiveChatRoom] message subscription failed:", err);
    });

    return () => {
      channel.unsubscribe(LIVE_MESSAGE_EVENT, handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [realtimeClient, roomName]);

  // ── Ably Chat: typing indicator ─────────────────────────────────
  const { currentlyTyping, currentTypers, keystroke, stop: stopTyping } = useTyping();

  useEffect(() => {
    const typers = currentTypers?.length
      ? currentTypers
      : Array.from(currentlyTyping ?? []).map((id) => ({ clientId: id }));
    setAdminTyping(typers.some((m) => String(m.clientId).startsWith("admin:")));
  }, [currentlyTyping, currentTypers]);

  // Stop typing on unmount (e.g. chat closed, inactivity)
  useEffect(() => {
    return () => {
      stopTyping?.().catch(() => {});
    };
  }, [stopTyping]);

  // ── Ably Chat: presence ─────────────────────────────────────────
  usePresence({ initialData: { name: visitorName, role: "visitor" } });

  usePresenceListener({
    listener: (event) => {
      const isAdmin = String(event.member?.clientId ?? "").startsWith("admin:");
      if (event.type === "enter" || event.type === "present" || event.type === "update") {
        if (isAdmin) setAdminOnline(true);
      } else if (event.type === "leave") {
        if (isAdmin) setAdminOnline(false);
      }
    },
  });

  // ── "Connected!" flash when admin joins ────────────────────────
  useEffect(() => {
    if (!adminOnline) return;
    setJustConnected(true);
    const t = setTimeout(() => setJustConnected(false), 3000);
    return () => clearTimeout(t);
  }, [adminOnline]);

  // ── Auto-scroll ─────────────────────────────────────────────────
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [historyMsgs, newMsgs, adminTyping]);

  // ── Send message (with optimistic update) ─────────────────────
  const sendMessage = async () => {
    const text = inputVal.trim();
    if (!text || sending) return;

    setSending(true);
    setError("");
    setInputVal("");
    resetInactivity();

    // Generate stable ID before anything so Ably echo is always suppressed
    const clientMessageId = generateClientMessageId();
    seenClientMsgIds.current.add(clientMessageId);

    const tempId = `temp-${clientMessageId}`;
    setNewMsgs((prev) => [
      ...prev,
      {
        _id: tempId,
        senderType: "visitor",
        senderName: visitorName,
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
        body: JSON.stringify({
          conversationId,
          text,
          senderType: "visitor",
          visitorId,
          senderName: visitorName,
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
        setError(data.message ?? "Failed to send. Try again.");
      }
    } catch {
      seenClientMsgIds.current.delete(clientMessageId);
      setNewMsgs((prev) => prev.filter((m) => m._id !== tempId));
      setError("Network error. Check your connection.");
    } finally {
      setSending(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
    if (e.target.value.trim()) {
      keystroke?.().catch(() => {});
      resetInactivity();
    } else {
      stopTyping?.().catch(() => {});
    }
  };

  const allMsgs = [...historyMsgs, ...newMsgs];

  return (
    <div className="zlc-inner">
      {/* Status bar */}
      <div className={`zlc-status-bar${justConnected ? " zlc-status-bar--connected" : ""}`}>
        <span className={`zlc-status-dot${adminOnline ? " zlc-status-dot--online" : ""}`} />
        <span className="zlc-status-text">
          {justConnected
            ? "✅ Agent connected! Start chatting."
            : adminOnline
            ? "Agent is online"
            : "Connecting you to an agent…"}
        </span>
      </div>

      {/* Messages */}
      <div className="zlc-messages" data-lenis-prevent>
        {!historyLoaded && (
          <div className="zlc-loading-history">Loading messages…</div>
        )}

        {historyLoaded && allMsgs.length === 0 && (
          <div className="zlc-empty-history">
            You&#39;re connected. Start chatting!
          </div>
        )}

        {allMsgs.map((msg) => {
          const isMine = msg.senderType === "visitor";
          return (
            <div
              key={msg._id}
              className={`zlc-msg zlc-msg--${isMine ? "visitor" : "agent"}`}
            >
              {!isMine && (
                <div className="zlc-agent-avatar" aria-hidden="true">Z</div>
              )}
              <div className={`zlc-bubble zlc-bubble--${isMine ? "visitor" : "agent"}`}>
                {msg.text}
              </div>
            </div>
          );
        })}

        {adminTyping && (
          <div className="zlc-msg zlc-msg--agent">
            <div className="zlc-agent-avatar" aria-hidden="true">Z</div>
            <div className="zlc-bubble zlc-bubble--agent zlc-typing-bubble">
              <span className="zlc-typing-label">Zonic Team is typing</span>
              <span className="zlc-typing-dots">
                <span /><span /><span />
              </span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Error */}
      {error && <div className="zlc-error">{error}</div>}

      {/* Input */}
      <div className="zlc-input-row">
        <input
          ref={inputRef}
          type="text"
          className="zlc-input"
          placeholder="Type your message…"
          value={inputVal}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={sending}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          maxLength={2000}
        />
        <button
          type="button"
          className="zlc-send-btn"
          onClick={sendMessage}
          disabled={!inputVal.trim() || sending}
          aria-label="Send message"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      {/* End chat */}
      <div className="zlc-footer">
        <button type="button" className="zlc-end-btn" onClick={onClose}>
          End live chat
        </button>
      </div>
    </div>
  );
}

// ─── Outer wrapper: sets up Ably providers ────────────────────────────────────
export default function LiveChatRoom({
  conversationId,
  roomName,
  visitorId,
  visitorName,
  onClose,
}) {
  const [realtimeClient, setRealtimeClient] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [connectError, setConnectError] = useState(null);
  const [inactive, setInactive] = useState(false);
  const clientsRef = useRef({ realtime: null, chat: null });

  useEffect(() => {
    let realtime;
    try {
      realtime = new Ably.Realtime({
        authCallback: (tokenParams, callback) => {
          fetch("/api/ably/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type: "visitor", visitorId, conversationId }),
          })
            .then((r) => {
              if (!r.ok) throw new Error(`Token request failed: ${r.status}`);
              return r.json();
            })
            .then((tokenRequest) => callback(null, tokenRequest))
            .catch((err) => callback(err, null));
        },
        clientId: `visitor:${visitorId}`,
      });

      realtime.connection.on("failed", () => {
        setConnectError("Could not connect to live chat. Please try again.");
      });

      const chat = new ChatClient(realtime);
      clientsRef.current = { realtime, chat };
      setRealtimeClient(realtime);
      setChatClient(chat);
    } catch (err) {
      console.error("[LiveChatRoom] init failed:", err);
      setConnectError("Live chat unavailable. Your message is saved.");
    }

    return () => {
      // Release on unmount
      try {
        clientsRef.current.realtime?.connection?.close();
      } catch {}
    };
  }, [conversationId, visitorId]);

  const handleInactive = useCallback(() => {
    setInactive(true);
    // Tell server
    fetch("/api/chat/mark-inactive", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversationId, visitorId }),
    }).catch(() => {});
    // Close Ably connection
    try {
      clientsRef.current.realtime?.connection?.close();
    } catch {}
  }, [conversationId, visitorId]);

  const handleClose = useCallback(() => {
    // Close connection when user manually ends chat
    try {
      clientsRef.current.realtime?.connection?.close();
    } catch {}
    onClose?.();
  }, [onClose]);

  if (connectError) {
    return (
      <div className="zlc-offline-msg">
        <p>{connectError}</p>
        <button type="button" className="zlc-end-btn" onClick={onClose}>
          Close
        </button>
      </div>
    );
  }

  if (inactive) {
    return (
      <div className="zlc-offline-msg">
        <p>
          You were inactive for a while. Your chat history is saved — refresh
          the page if you need to continue.
        </p>
        <button type="button" className="zlc-end-btn" onClick={onClose}>
          Close
        </button>
      </div>
    );
  }

  if (!realtimeClient || !chatClient) {
    return (
      <div className="zlc-connecting">
        <div className="zlc-connecting-dots">
          <span /><span /><span />
        </div>
        <p>Connecting you to a live agent…</p>
      </div>
    );
  }

  return (
    <AblyProvider client={realtimeClient}>
      <ChatClientProvider client={chatClient}>
        <ChatRoomProvider name={roomName} options={{ typing: { heartbeatThrottleMs: 3000 } }}>
          <LiveChatInner
            realtimeClient={realtimeClient}
            conversationId={conversationId}
            roomName={roomName}
            visitorId={visitorId}
            visitorName={visitorName}
            onClose={handleClose}
            onInactive={handleInactive}
          />
        </ChatRoomProvider>
      </ChatClientProvider>
    </AblyProvider>
  );
}
