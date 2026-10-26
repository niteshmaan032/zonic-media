"use client";

/* ---------------------------------------------------------------------------
   ADMIN LIVE CHAT — redesign + accept flow (26 Oct 2026).

   Owner: "in admin dashboard … redesign the live chat panels … if user
   visit for live chat than admin should have a btn … when it press than they
   start chatting and when admin press that button user see connected to
   agent".

   Layout: stats header → [conversation list | chat window | visitor
   details]. New requests arrive over the zonic-admin-notifications Ably
   channel: a sound plus a toast with Accept/View. Accepting PATCHes
   {action:"accept"}; the server flips the chat to active, posts "You're now
   connected with <agent>" to the visitor and tells other dashboards. The
   request email's "Open chat" link lands here as ?c=<conversationId>.
--------------------------------------------------------------------------- */

import { useCallback, useEffect, useRef, useState } from "react";
import Ably from "ably";
import { AblyProvider } from "ably/react";
import { ChatClient } from "@ably/chat";
import { ChatClientProvider } from "@ably/chat/react";
import { FiBell, FiMessageSquare, FiX } from "react-icons/fi";
import type { SafeConversation } from "@/shared/chatTypes";
import ChatWindow from "./ChatWindow";
import ConversationList from "./ConversationList";
import VisitorPanel from "./VisitorPanel";
import { agentNameFromEmail } from "./util";
import "./admin-chat.css";

type Toast = {
  id: string;
  conversationId: string;
  name: string;
  service?: string;
  returning?: boolean;
};

function Inner({
  adminId,
  adminName,
  realtimeClient,
  connState,
}: {
  adminId: string;
  adminName: string;
  realtimeClient: Ably.Realtime;
  connState: string;
}) {
  const [selected, setSelected] = useState<SafeConversation | null>(null);
  const [refreshSignal, setRefreshSignal] = useState(0);
  const [counts, setCounts] = useState({ waiting: 0, unread: 0 });
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [acceptingId, setAcceptingId] = useState<string | null>(null);
  const [acceptError, setAcceptError] = useState("");
  const [now, setNow] = useState(() => Date.now());
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prevConn = useRef(connState);

  const refresh = useCallback(() => setRefreshSignal((n) => n + 1), []);

  // 1s clock for waiting timers
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const fetchConversation = useCallback(async (id: string) => {
    const res = await fetch(`/api/admin/chat/conversations/${id}`, {
      credentials: "include",
      cache: "no-store",
    });
    const data = await res.json();
    return data.success ? (data.conversation as SafeConversation) : null;
  }, []);

  const openById = useCallback(
    async (id: string) => {
      const conv = await fetchConversation(id).catch(() => null);
      if (conv) {
        setAcceptError("");
        setSelected(conv);
      }
    },
    [fetchConversation],
  );

  // Deep link from the request email: /admindashboard/live-chat?c=<id>
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("c");
    if (!id) return;
    const t = setTimeout(() => openById(id), 0);
    return () => clearTimeout(t);
  }, [openById]);

  const playNotify = useCallback(() => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/audio/admin-notify.mp3");
        audioRef.current.volume = 0.65;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch {}
  }, []);

  // Realtime: new requests and accepts from other dashboards
  useEffect(() => {
    const channel = realtimeClient.channels.get("zonic-admin-notifications");
    const handler = (message: Ably.Message) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const d = (message.data ?? {}) as any;
      if (message.name === "new_conversation") {
        playNotify();
        refresh();
        const toast: Toast = {
          id: `${d.conversationId}-${Date.now()}`,
          conversationId: d.conversationId,
          name: d.name ?? "Visitor",
          service: d.service,
          returning: Boolean(d.returning),
        };
        setToasts((prev) => [toast, ...prev].slice(0, 4));
        setTimeout(
          () => setToasts((prev) => prev.filter((t) => t.id !== toast.id)),
          30_000,
        );
      } else if (message.name === "conversation_accepted") {
        refresh();
        setToasts((prev) => prev.filter((t) => t.conversationId !== d.conversationId));
        setSelected((cur) =>
          cur && cur._id === d.conversationId
            ? { ...cur, status: "active", assignedAdminName: d.agentName ?? cur.assignedAdminName }
            : cur,
        );
      }
    };
    channel.subscribe(handler);
    return () => {
      channel.unsubscribe(handler);
    };
  }, [realtimeClient, playNotify, refresh]);

  // Refresh after reconnecting
  useEffect(() => {
    const wasOffline =
      prevConn.current === "disconnected" || prevConn.current === "suspended";
    prevConn.current = connState;
    if (wasOffline && connState === "connected") {
      const t = setTimeout(refresh, 0);
      return () => clearTimeout(t);
    }
  }, [connState, refresh]);

  const accept = useCallback(
    async (conv: SafeConversation) => {
      if (acceptingId) return;
      setAcceptingId(conv._id);
      setAcceptError("");
      try {
        const res = await fetch(`/api/admin/chat/conversations/${conv._id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ action: "accept" }),
        });
        const data = await res.json();
        if (data.conversation) setSelected(data.conversation as SafeConversation);
        if (!data.success) setAcceptError(data.message ?? "Could not accept this chat.");
        setToasts((prev) => prev.filter((t) => t.conversationId !== conv._id));
        refresh();
      } catch {
        setAcceptError("Network error — please try again.");
      } finally {
        setAcceptingId(null);
      }
    },
    [acceptingId, refresh],
  );

  const handleStatusChange = useCallback(
    (status: string) => {
      setSelected((prev) =>
        prev ? { ...prev, status: status as SafeConversation["status"] } : prev,
      );
      refresh();
    },
    [refresh],
  );

  const offline = connState === "disconnected" || connState === "suspended";

  return (
    <div className="tw:flex tw:h-full tw:min-h-0 tw:flex-col tw:gap-4 tw:p-4 tw:max-bsmd:p-2">
      {/* Header */}
      <div className="tw:flex tw:flex-none tw:flex-wrap tw:items-center tw:gap-3 tw:rounded-[20px] tw:bg-white tw:px-5 tw:py-4 tw:ring-1 tw:ring-(--line)">
        <span className="tw:grid tw:size-11 tw:place-items-center tw:rounded-[14px] tw:bg-(--ink) tw:text-[20px] tw:text-white">
          <FiMessageSquare aria-hidden="true" />
        </span>
        <span className="tw:mr-auto tw:leading-tight">
          <b className="tw:block tw:text-[19px] tw:font-semibold">Live Chat</b>
          <span className="tw:text-[13px] tw:text-(--muted)">
            Signed in as {adminName} · visitors see your name when you accept
          </span>
        </span>
        <span className={`tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:px-3 tw:py-1.5 tw:text-[12.5px] tw:font-semibold ${offline || connState === "failed" ? "tw:bg-(--amber-soft) tw:text-[#92400e]" : "tw:bg-(--green-soft) tw:text-[#166534]"}`}>
          <span className={`tw:size-2 tw:rounded-full ${offline || connState === "failed" ? "tw:bg-(--amber)" : "tw:bg-(--green)"}`} />
          {connState === "connected" ? "Live" : connState === "failed" ? "Connection failed" : "Reconnecting…"}
        </span>
        <span className={`tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:px-3 tw:py-1.5 tw:text-[12.5px] tw:font-semibold ${counts.waiting ? "ac-pulse tw:bg-(--amber) tw:text-white" : "tw:bg-(--panel) tw:text-(--text)"}`}>
          <FiBell aria-hidden="true" /> {counts.waiting} waiting
        </span>
        <span className="tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12.5px] tw:font-semibold tw:text-(--text)">
          {counts.unread} unread
        </span>
      </div>

      {/* Columns */}
      <div className="tw:grid tw:min-h-0 tw:flex-1 tw:grid-cols-[340px_minmax(0,1fr)_300px] tw:gap-4 tw:max-[1279px]:grid-cols-[320px_minmax(0,1fr)] tw:max-bslg:grid-cols-1">
        <div className={`tw:min-h-0 tw:overflow-hidden tw:rounded-[20px] tw:bg-white tw:ring-1 tw:ring-(--line) ${selected ? "tw:max-bslg:hidden" : ""}`}>
          <ConversationList
            selectedId={selected?._id ?? null}
            onSelect={(c) => {
              setAcceptError("");
              setSelected(c);
            }}
            onAccept={accept}
            acceptingId={acceptingId}
            refreshSignal={refreshSignal}
            now={now}
            onCounts={setCounts}
          />
        </div>

        <div className={`tw:min-h-0 tw:overflow-hidden tw:rounded-[20px] tw:bg-white tw:ring-1 tw:ring-(--line) ${selected ? "" : "tw:max-bslg:hidden"}`}>
          {selected ? (
            <div className="tw:flex tw:h-full tw:min-h-0 tw:flex-col">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="tw:hidden tw:cursor-pointer tw:border-0 tw:border-b tw:border-(--line) tw:bg-white tw:px-5 tw:py-2.5 tw:text-left tw:text-[13px] tw:font-semibold tw:text-(--blue) tw:max-bslg:block"
              >
                ← All conversations
              </button>
              <div className="tw:min-h-0 tw:flex-1">
                <ChatWindow
                  key={selected._id}
                  realtimeClient={realtimeClient}
                  conversation={selected}
                  adminId={adminId}
                  adminName={adminName}
                  connState={connState}
                  now={now}
                  accepting={acceptingId === selected._id}
                  acceptError={acceptError}
                  onAccept={accept}
                  onStatusChange={handleStatusChange}
                />
              </div>
            </div>
          ) : (
            <div className="tw:grid tw:h-full tw:place-items-center tw:p-8 tw:text-center">
              <div>
                <span className="tw:mx-auto tw:grid tw:size-16 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[26px] tw:text-(--blue)">
                  <FiMessageSquare aria-hidden="true" />
                </span>
                <b className="tw:mt-4 tw:block tw:text-[17px] tw:font-semibold">Pick a conversation</b>
                <p className="tw:mt-1.5 tw:max-w-[340px] tw:text-[13.5px] tw:text-(--muted)">
                  Waiting visitors appear at the top of the list. Press Accept to
                  start chatting — they&apos;ll see you&apos;re connected instantly.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="tw:min-h-0 tw:overflow-hidden tw:rounded-[20px] tw:bg-white tw:ring-1 tw:ring-(--line) tw:max-[1279px]:hidden">
          {selected ? (
            <VisitorPanel conversation={selected} now={now} />
          ) : (
            <p className="tw:p-6 tw:text-center tw:text-[13px] tw:text-(--muted)">
              Visitor details show here.
            </p>
          )}
        </div>
      </div>

      {/* Incoming request toasts */}
      <div className="tw:pointer-events-none tw:fixed tw:top-20 tw:right-5 tw:z-[1050] tw:grid tw:w-[340px] tw:max-w-[calc(100vw-40px)] tw:gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="ac-toast tw:pointer-events-auto tw:rounded-[18px] tw:bg-white tw:p-4 tw:[box-shadow:0_24px_50px_-20px_rgba(12,21,38,0.5)] tw:ring-1 tw:ring-(--line)"
            role="status"
          >
            <div className="tw:flex tw:items-start tw:gap-3">
              <span className="ac-pulse tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--amber) tw:text-[16px] tw:font-semibold tw:text-white">
                {t.name.charAt(0).toUpperCase()}
              </span>
              <span className="tw:min-w-0 tw:flex-1 tw:leading-tight">
                <b className="tw:block tw:text-[14px] tw:font-semibold">
                  {t.returning ? "Visitor is back" : "New chat request"}
                </b>
                <span className="tw:mt-0.5 tw:block tw:truncate tw:text-[13px] tw:text-(--text)">
                  {t.name}
                  {t.service ? ` · ${t.service}` : ""}
                </span>
              </span>
              <button
                type="button"
                aria-label="Dismiss"
                onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}
                className="tw:grid tw:size-7 tw:cursor-pointer tw:place-items-center tw:rounded-full tw:border-0 tw:bg-transparent tw:text-(--muted) tw:hover:bg-(--panel)"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
            <div className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-2">
              <button
                type="button"
                onClick={async () => {
                  const conv = await fetchConversation(t.conversationId).catch(() => null);
                  if (conv) accept(conv);
                }}
                className="tw:cursor-pointer tw:rounded-full tw:border-0 tw:bg-(--blue) tw:py-2 tw:text-[13px] tw:font-semibold tw:text-white tw:hover:bg-(--blue-dark)"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => openById(t.conversationId)}
                className="tw:cursor-pointer tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:py-2 tw:text-[13px] tw:font-semibold tw:text-(--ink) tw:hover:bg-(--panel)"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdminLiveChat() {
  const [admin, setAdmin] = useState<{ id: string; name: string } | null>(null);
  const [realtimeClient, setRealtimeClient] = useState<Ably.Realtime | null>(null);
  const [chatClient, setChatClient] = useState<ChatClient | null>(null);
  const [connectError, setConnectError] = useState<string | null>(null);
  const [connState, setConnState] = useState("connecting");
  const realtimeRef = useRef<Ably.Realtime | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/admin/auth/me", { credentials: "include", cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (!data.success) {
          setConnectError("Admin session expired. Please log in again.");
          return;
        }
        const id = data.admin?.id as string;
        const name = agentNameFromEmail(String(data.admin?.email ?? ""));
        const realtime = new Ably.Realtime({
          authCallback: (_params, callback) => {
            fetch("/api/ably/token", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ type: "admin" }),
            })
              .then((r) => {
                if (!r.ok) throw new Error(`Token request failed: ${r.status}`);
                return r.json();
              })
              .then((tokenRequest) => callback(null, tokenRequest))
              .catch((err) => callback(String(err), null));
          },
          clientId: `admin:${id}`,
        });
        realtime.connection.on((change) => {
          if (cancelled) return;
          setConnState(change.current);
          if (change.current === "failed") {
            setConnectError("Realtime connection failed. Reload to try again.");
          }
        });
        realtimeRef.current = realtime;
        setAdmin({ id, name });
        setRealtimeClient(realtime);
        setChatClient(new ChatClient(realtime));
      })
      .catch(() => {
        if (!cancelled) setConnectError("Could not connect to live chat. Check your session.");
      });
    return () => {
      cancelled = true;
      try {
        realtimeRef.current?.connection.close();
      } catch {}
    };
  }, []);

  if (connectError) {
    return (
      <div className="ac tw:p-6">
        <div className="tw:rounded-[16px] tw:bg-(--red-soft) tw:px-4 tw:py-3 tw:text-[14px] tw:text-[#b42318]">
          {connectError}
        </div>
      </div>
    );
  }

  if (!realtimeClient || !chatClient || !admin) {
    return (
      <div className="ac tw:grid tw:h-full tw:place-items-center tw:p-6 tw:text-[14px] tw:text-(--muted)">
        Connecting to live chat…
      </div>
    );
  }

  return (
    <div className="ac tw:h-full tw:min-h-0 tw:bg-(--panel)">
      <AblyProvider client={realtimeClient}>
        <ChatClientProvider client={chatClient}>
          <Inner
            adminId={admin.id}
            adminName={admin.name}
            realtimeClient={realtimeClient}
            connState={connState}
          />
        </ChatClientProvider>
      </AblyProvider>
    </div>
  );
}
