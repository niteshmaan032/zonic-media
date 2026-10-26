"use client";

/* ---------------------------------------------------------------------------
   LIVE CHAT ROOM — visitor side (redesign + accept flow, 26 Oct 2026).

   Owner: when a visitor asks for live chat, email the team first, show the
   visitor an interactive "we are connecting, please wait" message, and only
   start the chat when an agent presses Accept in the dashboard — then the
   visitor sees "connected to agent".

   States: waiting (conversation.status "waiting_agent": animated connecting
   card with a timer and steps; the visitor may type their question) →
   connected (an Ably system message with metadata.agentJoined, or the 6s
   status poll, flips it; a green "Connected with <agent>" banner) → closed.
--------------------------------------------------------------------------- */

import { useState, useEffect, useRef, useCallback } from "react";
import { FiCheck, FiHeadphones, FiLoader, FiSend } from "react-icons/fi";
import Ably from "ably";
import { AblyProvider } from "ably/react";
import { ChatClient } from "@ably/chat";
import {
  ChatClientProvider,
  ChatRoomProvider,
  useTyping,
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
  initialAgent,
  onAgentChange,
  onClose,
  onInactive,
}) {
  // null while waiting for an agent to press Accept; then the agent's name
  const [agent, setAgent] = useState(initialAgent ?? null);
  const [statusKnown, setStatusKnown] = useState(Boolean(initialAgent));
  const [waitedSec, setWaitedSec] = useState(0);
  const joinedSoundRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [historyMsgs, setHistoryMsgs] = useState([]);
  const [newMsgs, setNewMsgs] = useState([]);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [adminTyping, setAdminTyping] = useState(false);
  const [adminClosed, setAdminClosed] = useState(false);

  const seenMongoIds = useRef(new Set());
  const seenClientMsgIds = useRef(new Set());
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
          const st = data.conversation?.status;
          if (st === "active" || st === "waiting_visitor") {
            setAgent(data.conversation?.agentName || "Zonic Team");
          } else if (st === "waiting_agent" || st === "inactive") {
            setAgent(null);
          }
          setStatusKnown(true);

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

      // Agent pressed Accept in the dashboard → connected.
      if (meta.senderType === "system" && meta.agentJoined === "true") {
        markJoined(meta.agentName);
      }

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


  // ── Agent joined (accept) ───────────────────────────────────────
  const markJoined = useCallback(
    (name) => {
      setAgent((prev) => {
        if (prev) return prev;
        try {
          if (!joinedSoundRef.current) {
            joinedSoundRef.current = new Audio("/audio/chatbot.mp3");
            joinedSoundRef.current.volume = 0.5;
          }
          joinedSoundRef.current.currentTime = 0;
          joinedSoundRef.current.play().catch(() => {});
        } catch {}
        return name || "Zonic Team";
      });
      setStatusKnown(true);
    },
    []
  );

  useEffect(() => {
    if (statusKnown) onAgentChange?.(agent);
  }, [agent, statusKnown, onAgentChange]);

  // Waiting timer
  useEffect(() => {
    if (agent || adminClosed) return;
    const t = setInterval(() => setWaitedSec((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [agent, adminClosed]);

  // Poll the conversation status while waiting — fallback for a missed
  // Ably "agent joined" event (network blip, tab asleep).
  useEffect(() => {
    if (agent || adminClosed) return;
    const t = setInterval(() => {
      fetch(`/api/chat/messages?conversationId=${encodeURIComponent(conversationId)}&visitorId=${encodeURIComponent(visitorId)}&limit=50`)
        .then((r) => r.json())
        .then((data) => {
          if (!data?.success) return;
          const st = data.conversation?.status;
          if (st === "active" || st === "waiting_visitor") {
            const unseen = (data.messages ?? []).filter((m) => {
              if (seenMongoIds.current.has(m._id)) return false;
              if (m.clientMessageId && seenClientMsgIds.current.has(m.clientMessageId)) return false;
              return true;
            });
            unseen.forEach((m) => {
              seenMongoIds.current.add(m._id);
              if (m.clientMessageId) seenClientMsgIds.current.add(m.clientMessageId);
            });
            if (unseen.length) setNewMsgs((prev) => [...prev, ...unseen]);
            markJoined(data.conversation?.agentName);
          } else if (st === "closed") {
            setAdminClosed(true);
            clearLiveChatSession();
          }
        })
        .catch(() => {});
    }, 6000);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agent, adminClosed, conversationId, visitorId]);

  // ── Auto-return to bot view shortly after admin closes the chat ─
  // Visitor reads the close notice for ~4s, then transitions back to the
  // bot which shows the existing "Chat ended. Thanks for chatting..." note.
  useEffect(() => {
    if (!adminClosed) return;
    const t = setTimeout(() => {
      onClose?.();
    }, 4000);
    return () => clearTimeout(t);
  }, [adminClosed, onClose]);

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
  const waiting = !agent && !adminClosed;
  const mmss = `${Math.floor(waitedSec / 60)}:${String(waitedSec % 60).padStart(2, "0")}`;

  return (
    <div className="tw:flex tw:min-h-0 tw:flex-1 tw:flex-col tw:bg-(--panel)">
      <div
        className="tw:flex tw:flex-1 tw:flex-col tw:gap-3 tw:overflow-y-auto tw:px-4 tw:py-4"
        data-lenis-prevent
        role="log"
        aria-live="polite"
      >
        {/* Connecting card (owner: "we are connecting, please wait") */}
        {waiting && statusKnown && (
          <div className="zc-msg-in tw:rounded-[20px] tw:bg-white tw:p-5 tw:text-center tw:ring-1 tw:ring-(--line)">
            <span className="tw:relative tw:mx-auto tw:grid tw:size-16 tw:place-items-center">
              <span className="zc-ring tw:absolute tw:inset-0 tw:rounded-full tw:bg-(--blue)/25" aria-hidden="true" />
              <span className="zc-ring zc-ring-2 tw:absolute tw:inset-0 tw:rounded-full tw:bg-(--blue)/25" aria-hidden="true" />
              <span className="tw:relative tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[24px] tw:text-white">
                <FiHeadphones aria-hidden="true" />
              </span>
            </span>
            <b className="tw:mt-4 tw:block tw:text-[16.5px] tw:font-semibold">
              Connecting you to our team…
            </b>
            <p className="tw:mt-1.5 tw:text-[13.5px]/[1.55] tw:text-(--text)">
              Please wait a moment — an agent will join this chat shortly.
            </p>
            <ul className="tw:mx-auto tw:mt-4 tw:grid tw:max-w-[260px] tw:gap-2 tw:text-left tw:text-[13px]">
              {[
                ["Request received", true],
                ["Our team has been notified", true],
                ["An agent is joining", false],
              ].map(([label, done]) => (
                <li key={label} className="tw:flex tw:items-center tw:gap-2.5">
                  <span
                    className={`tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] ${done ? "tw:bg-(--green) tw:text-white" : "tw:bg-(--blue-soft) tw:text-(--blue)"}`}
                  >
                    {done ? <FiCheck className="tw:[stroke-width:3]" /> : <FiLoader className="zc-spin" />}
                  </span>
                  <span className={done ? "tw:text-(--ink)" : "tw:font-semibold tw:text-(--blue)"}>{label}</span>
                </li>
              ))}
            </ul>
            <span className="tw:mt-4 tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1 tw:text-[12px] tw:font-semibold tw:text-(--muted)">
              Waiting {mmss}
            </span>
            {waitedSec >= 120 && (
              <p className="tw:mt-3 tw:text-[12.5px]/[1.5] tw:text-(--muted)">
                Thanks for your patience! Our team will be right with you. You can type your question below while you wait.
              </p>
            )}
          </div>
        )}

        {/* Connected banner */}
        {agent && !adminClosed && (
          <div className="zc-connected tw:flex tw:items-center tw:gap-3 tw:rounded-[16px] tw:bg-[#e8f8ee] tw:px-4 tw:py-3 tw:ring-1 tw:ring-[#bfe9cc]">
            <span className="tw:relative tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[14px] tw:font-semibold tw:text-white">
              {agent.charAt(0).toUpperCase()}
              <span className="zc-online tw:absolute tw:right-0 tw:bottom-0 tw:size-2.5 tw:rounded-full tw:bg-(--green) tw:ring-2 tw:ring-[#e8f8ee]" />
            </span>
            <span className="tw:leading-tight">
              <b className="tw:block tw:text-[14px] tw:font-semibold tw:text-[#14532d]">
                Connected to {agent}
              </b>
              <span className="tw:text-[12.5px] tw:text-[#166534]">Zonic Media · Live agent</span>
            </span>
          </div>
        )}

        {!historyLoaded && (
          <div className="tw:text-center tw:text-[13px] tw:text-(--muted)">Loading messages…</div>
        )}

        {allMsgs.map((msg) => {
          if (msg.senderType === "system") {
            return (
              <div key={msg._id} className="zc-msg-in tw:mx-auto tw:max-w-[90%] tw:rounded-full tw:bg-white tw:px-3.5 tw:py-1.5 tw:text-center tw:text-[12.5px] tw:text-(--muted) tw:ring-1 tw:ring-(--line)">
                {msg.text}
              </div>
            );
          }
          const isMine = msg.senderType === "visitor";
          return isMine ? (
            <div key={msg._id} className="zc-msg-in tw:flex tw:justify-end">
              <div className="tw:max-w-[84%] tw:rounded-[18px] tw:rounded-br-[6px] tw:bg-(--blue) tw:px-4 tw:py-3 tw:text-[14px]/[1.55] tw:whitespace-pre-line tw:text-white">
                {msg.text}
              </div>
            </div>
          ) : (
            <div key={msg._id} className="zc-msg-in tw:flex tw:items-end tw:gap-2">
              <span className="tw:grid tw:size-[26px] tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[12px] tw:font-semibold tw:text-white" aria-hidden="true">
                {(agent || "Z").charAt(0).toUpperCase()}
              </span>
              <div className="tw:max-w-[84%] tw:rounded-[18px] tw:rounded-bl-[6px] tw:bg-white tw:px-4 tw:py-3 tw:text-[14px]/[1.55] tw:whitespace-pre-line tw:text-(--ink) tw:ring-1 tw:ring-(--line)">
                {msg.text}
              </div>
            </div>
          );
        })}

        {adminTyping && (
          <div className="zc-msg-in tw:flex tw:items-end tw:gap-2">
            <span className="tw:grid tw:size-[26px] tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[12px] tw:font-semibold tw:text-white" aria-hidden="true">
              {(agent || "Z").charAt(0).toUpperCase()}
            </span>
            <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-[18px] tw:rounded-bl-[6px] tw:bg-white tw:px-4 tw:py-3 tw:ring-1 tw:ring-(--line)">
              <span className="tw:text-[12.5px] tw:text-(--muted)">{agent || "Zonic Team"} is typing</span>
              <span className="tw:flex tw:gap-1">
                <span className="zc-dot tw:size-1.5 tw:rounded-full tw:bg-(--muted)" />
                <span className="zc-dot tw:size-1.5 tw:rounded-full tw:bg-(--muted)" />
                <span className="zc-dot tw:size-1.5 tw:rounded-full tw:bg-(--muted)" />
              </span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {error && (
        <div className="tw:mx-3 tw:mb-2 tw:rounded-[12px] tw:bg-[#fdecea] tw:px-3 tw:py-2 tw:text-[13px] tw:text-[#b42318]">{error}</div>
      )}

      {/* Input */}
      <div className="zc-input-area tw:flex tw:flex-none tw:items-center tw:gap-2 tw:border-t tw:border-(--line) tw:bg-white tw:p-3">
        <input
          ref={inputRef}
          type="text"
          className="zc-input tw:h-11 tw:min-w-0 tw:flex-1 tw:rounded-full tw:border tw:border-(--line) tw:bg-(--panel) tw:px-4 tw:text-[14px] tw:text-(--ink) tw:outline-none tw:transition tw:placeholder:text-(--muted) tw:focus:border-(--blue) tw:focus:bg-white tw:disabled:cursor-not-allowed"
          placeholder={
            adminClosed
              ? "This chat was closed by our team"
              : waiting
                ? "Type your question while we connect you…"
                : "Type your message…"
          }
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
          className="tw:grid tw:size-11 tw:flex-none tw:cursor-pointer tw:place-items-center tw:rounded-full tw:border-0 tw:bg-(--blue) tw:text-white tw:transition tw:hover:bg-(--blue-dark) tw:disabled:cursor-not-allowed tw:disabled:bg-(--line) tw:disabled:text-(--muted)"
          onClick={sendMessage}
          disabled={!inputVal.trim() || sending || adminClosed}
          aria-label="Send message"
        >
          <FiSend className="tw:size-4" aria-hidden="true" />
        </button>
      </div>

      {/* End chat */}
      <div className="tw:flex tw:flex-none tw:justify-center tw:bg-white tw:pb-3">
        <button
          type="button"
          className="tw:cursor-pointer tw:rounded-full tw:border-0 tw:bg-transparent tw:px-3 tw:py-1 tw:text-[12.5px] tw:font-medium tw:text-(--muted) tw:underline tw:underline-offset-2 tw:hover:text-(--ink)"
          onClick={onClose}
        >
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
  initialAgent,
  onAgentChange,
  onClose,
}) {
  const [realtimeClient, setRealtimeClient] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [connectError, setConnectError] = useState(null);
  const [inactive, setInactive] = useState(false);
  const clientsRef = useRef({ realtime: null, chat: null });

  useEffect(() => {
    let realtime;
    let cancelled = false;
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
      // Hand the clients to React after the effect (not synchronously).
      queueMicrotask(() => {
        if (cancelled) return;
        setRealtimeClient(realtime);
        setChatClient(chat);
      });
    } catch (err) {
      console.error("[LiveChatRoom] init failed:", err);
      queueMicrotask(() => {
        if (!cancelled) setConnectError("Live chat unavailable. Your message is saved.");
      });
    }

    return () => {
      cancelled = true;
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
    // Tell the server the visitor ended the chat so the admin sees a system
    // close message in real time. Fire-and-forget — the bot transition should
    // not wait on the network. The endpoint is idempotent if already closed.
    try {
      fetch("/api/chat/end-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({ conversationId, visitorId }),
      }).catch(() => {});
    } catch {}

    // Close connection when user manually ends chat
    try {
      clientsRef.current.realtime?.connection?.close();
    } catch {}
    onClose?.();
  }, [conversationId, visitorId, onClose]);

  if (connectError) {
    return (
      <div className="tw:flex tw:flex-1 tw:flex-col tw:items-center tw:justify-center tw:gap-4 tw:bg-(--panel) tw:p-6 tw:text-center tw:text-[14px] tw:text-(--text)">
        <p>{connectError}</p>
        <button type="button" className="tw:cursor-pointer tw:rounded-full tw:border-0 tw:bg-(--ink) tw:px-5 tw:py-2.5 tw:text-[14px] tw:font-medium tw:text-white" onClick={onClose}>
          Close
        </button>
      </div>
    );
  }

  if (inactive) {
    return (
      <div className="tw:flex tw:flex-1 tw:flex-col tw:items-center tw:justify-center tw:gap-4 tw:bg-(--panel) tw:p-6 tw:text-center tw:text-[14px] tw:text-(--text)">
        <p>
          You were inactive for a while. Your chat history is saved — refresh
          the page if you need to continue.
        </p>
        <button type="button" className="tw:cursor-pointer tw:rounded-full tw:border-0 tw:bg-(--ink) tw:px-5 tw:py-2.5 tw:text-[14px] tw:font-medium tw:text-white" onClick={onClose}>
          Close
        </button>
      </div>
    );
  }

  if (!realtimeClient || !chatClient) {
    return (
      <div className="tw:flex tw:flex-1 tw:flex-col tw:items-center tw:justify-center tw:gap-3 tw:bg-(--panel) tw:text-[14px] tw:text-(--muted)">
        <span className="tw:flex tw:gap-1">
          <span className="zc-dot tw:size-2 tw:rounded-full tw:bg-(--blue)" />
          <span className="zc-dot tw:size-2 tw:rounded-full tw:bg-(--blue)" />
          <span className="zc-dot tw:size-2 tw:rounded-full tw:bg-(--blue)" />
        </span>
        Connecting you to a live agent…
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
            initialAgent={initialAgent}
            onAgentChange={onAgentChange}
            onClose={handleClose}
            onInactive={handleInactive}
          />
        </ChatRoomProvider>
      </ChatClientProvider>
    </AblyProvider>
  );
}
