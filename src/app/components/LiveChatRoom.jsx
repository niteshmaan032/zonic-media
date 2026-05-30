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
  const [adminClosed, setAdminClosed] = useState(false);

  const seenMongoIds = useRef(new Set());
  const seenClientMsgIds = useRef(new Set());
  const onlineNotifShownRef = useRef(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const inactivityRef = useRef(null);

  const clearLiveChatSession = useCallback(() => {
    try {
      sessionStorage.removeItem("zonic_live_conv_id");
      sessionStorage.removeItem("zonic_live_room_name");
      sessionStorage.removeItem("zonic_live_chat_mode");
      sessionStorage.removeItem("zonic_live_visitor_name");
    } catch {}
  }, []);

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

          // If admin already closed this chat (visitor refreshed after close),
          // detect the system close marker and reflect the closed state.
          const alreadyClosed = data.messages.some(
            (m) => m.senderType === "system" && m.senderId === "system:admin-close"
          );
          if (alreadyClosed) {
            setAdminClosed(true);
            clearLiveChatSession();
          }
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
          senderId: meta.senderId,
          senderName: meta.senderName ?? "User",
          text: ablyMsg.data?.text ?? "",
          createdAt: ablyMsg.timestamp
            ? new Date(ablyMsg.timestamp).toISOString()
            : new Date().toISOString(),
          clientMessageId: clientMsgId,
        },
      ]);

      // Detect admin-close system message published by the admin PATCH route.
      if (
        meta.senderType === "system" &&
        (meta.senderId === "system:admin-close" || meta.conversationClosed === "true")
      ) {
        setAdminClosed(true);
        clearLiveChatSession();
        if (inactivityRef.current) clearTimeout(inactivityRef.current);
        return;
      }

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

  // ── In-chat notification when the live agent comes online ─────
  // Fires once per session — confirms an agent is available to chat.
  useEffect(() => {
    if (!adminOnline || onlineNotifShownRef.current || adminClosed) return;
    onlineNotifShownRef.current = true;
    setNewMsgs((prev) => [
      ...prev,
      {
        _id: `system-online-${Date.now()}`,
        senderType: "system",
        senderName: "System",
        text: "Zonic Team is online. Feel free to start chatting!",
        createdAt: new Date().toISOString(),
      },
    ]);
  }, [adminOnline, adminClosed]);

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
      <div className="zlc-status-bar">
        <span className={`zlc-status-dot${adminClosed ? "" : " zlc-status-dot--online"}`} />
        <span className="zlc-status-text">
          {adminClosed
            ? "Chat closed"
            : adminOnline
            ? "Zonic Team is online"
            : "You're connected. Start chatting!"}
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
          if (msg.senderType === "system") {
            return (
              <div key={msg._id} className="zlc-system-msg">
                {msg.text}
              </div>
            );
          }
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
          placeholder={adminClosed ? "This chat was closed by our team" : "Type your message…"}
          value={inputVal}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={sending || adminClosed}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          maxLength={2000}
        />
        <button
          type="button"
          className="zlc-send-btn"
          onClick={sendMessage}
          disabled={!inputVal.trim() || sending || adminClosed}
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
