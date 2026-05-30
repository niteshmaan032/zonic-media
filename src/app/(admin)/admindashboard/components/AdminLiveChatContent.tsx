"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import Ably from "ably";
import { AblyProvider } from "ably/react";
import { ChatClient } from "@ably/chat";
import { ChatClientProvider } from "@ably/chat/react";
import type { SafeConversation } from "@/shared/chatTypes";
import AdminChatConversationList from "./AdminChatConversationList";
import AdminChatWindow from "./AdminChatWindow";

// ─── Inner: has access to Ably providers ─────────────────────────────────────
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

function AdminLiveChatInner({
  adminId,
  realtimeClient,
  connState,
}: {
  adminId: string;
  realtimeClient: Ably.Realtime;
  connState: string;
}) {
  const [selectedConv, setSelectedConv] = useState<SafeConversation | null>(null);
  const [newConvSignal, setNewConvSignal] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [rightPanelConversations, setRightPanelConversations] = useState<SafeConversation[]>([]);
  const prevConnState = useRef(connState);
  const notifyAudioRef = useRef<HTMLAudioElement | null>(null);

  const playAdminNotify = useCallback(() => {
    try {
      if (!notifyAudioRef.current) {
        notifyAudioRef.current = new Audio("/audio/admin-notify.mp3");
        notifyAudioRef.current.volume = 0.65;
      }
      notifyAudioRef.current.currentTime = 0;
      notifyAudioRef.current.play().catch(() => {});
    } catch {
      // ignore
    }
  }, []);

  // Subscribe to admin notification channel (new conversations)
  useEffect(() => {
    const channel = realtimeClient.channels.get("zonic-admin-notifications");

    const handler = (message: Ably.Message) => {
      if (message.name === "new_conversation") {
        setNewConvSignal((n) => n + 1);
        playAdminNotify();
      }
    };

    channel.subscribe(handler);

    return () => {
      channel.unsubscribe(handler);
    };
  }, [realtimeClient, playAdminNotify]);

  // When connection recovers from disconnected/suspended, refresh the list
  // so any new conversations that arrived while offline appear immediately.
  useEffect(() => {
    const wasOffline =
      prevConnState.current === "disconnected" ||
      prevConnState.current === "suspended";
    if (wasOffline && connState === "connected") {
      setNewConvSignal((n) => n + 1);
    }
    prevConnState.current = connState;
  }, [connState]);

  const handleSelectConv = useCallback((conv: SafeConversation) => {
    setSelectedConv(conv);
  }, []);

  const handleFilterDataChange = useCallback(
    (payload: {
      filter: string;
      visibleConversationIds: string[];
      visibleConversations: SafeConversation[];
    }) => {
      setActiveFilter(payload.filter);
      setRightPanelConversations(payload.visibleConversations);
      setSelectedConv((current) => {
        if (!current) return current;
        return payload.visibleConversationIds.includes(current._id)
          ? current
          : null;
      });
    },
    []
  );

  const handleStatusChange = useCallback((newStatus: string) => {
    if (newStatus === "closed" || newStatus === "inactive") {
      setSelectedConv(null);
    } else {
      setSelectedConv((prev) =>
        prev
          ? { ...prev, status: newStatus as SafeConversation["status"] }
          : null
      );
    }
    setNewConvSignal((n) => n + 1);
  }, []);

  const isOffline = connState === "disconnected" || connState === "suspended";

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      {/* Connection status banner — only shown when not connected */}
      {isOffline && (
        <div className="alc-conn-banner alc-conn-banner--warn">
          <span className="alc-conn-banner-dot" />
          {connState === "suspended"
            ? "Connection lost — retrying… New messages may be delayed."
            : "Reconnecting to live chat…"}
        </div>
      )}
      {connState === "failed" && (
        <div className="alc-conn-banner alc-conn-banner--error">
          <span className="alc-conn-banner-dot" />
          Connection failed. Please reload the page.
        </div>
      )}

      <div className="alc-layout">
        {/* Left: conversation list */}
        <div className="alc-list-col">
          <AdminChatConversationList
            selectedId={selectedConv?._id ?? null}
            onSelect={handleSelectConv}
            newConvSignal={newConvSignal}
            onFilterDataChange={handleFilterDataChange}
          />
        </div>

        {/* Right: chat window */}
        <div className="alc-chat-col">
          <div className="alc-chat-filter-info">
            Showing: {activeFilter.replace("_", " ")}
          </div>
          {selectedConv ? (
            <AdminChatWindow
              key={selectedConv._id}
              realtimeClient={realtimeClient}
              conversation={selectedConv}
              adminId={adminId}
              connState={connState}
              onStatusChange={handleStatusChange}
            />
          ) : (
            <div
              className={`alc-empty-state${
                rightPanelConversations.length > 0 ? " alc-empty-state--with-list" : ""
              }`}
            >
              {rightPanelConversations.length === 0 ? (
                <>
                  <div className="alc-empty-state-icon" aria-hidden="true">💬</div>
                  <p>No chats available in this filter.</p>
                </>
              ) : (
                <div className="alc-right-list">
                  {rightPanelConversations.map((conv) => (
                    <button
                      key={conv._id}
                      type="button"
                      className="alc-conv-item alc-conv-item--right"
                      onClick={() => handleSelectConv(conv)}
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
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Outer: sets up Ably connection when admin visits page ───────────────────
export default function AdminLiveChatContent() {
  const [adminId, setAdminId] = useState<string | null>(null);
  const [realtimeClient, setRealtimeClient] = useState<Ably.Realtime | null>(null);
  const [chatClient, setChatClient] = useState<ChatClient | null>(null);
  const [connectError, setConnectError] = useState<string | null>(null);
  const [connState, setConnState] = useState<string>("connecting");
  const clientsRef = useRef<{
    realtime: Ably.Realtime | null;
    chat: ChatClient | null;
  }>({ realtime: null, chat: null });

  useEffect(() => {
    let cancelled = false;

    // Get admin identity
    fetch("/api/admin/auth/me", { credentials: "include", cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (!data.success) {
          setConnectError("Admin session expired. Please log in again.");
          return;
        }

        const id = data.admin?.id as string;
        setAdminId(id);

        const realtime = new Ably.Realtime({
          authCallback: (tokenParams, callback) => {
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

        // Track all connection state changes so the UI can reflect them
        realtime.connection.on((stateChange) => {
          if (cancelled) return;
          setConnState(stateChange.current);
          if (stateChange.current === "failed") {
            setConnectError("Ably connection failed. Reload to try again.");
          }
        });

        const chat = new ChatClient(realtime);
        clientsRef.current = { realtime, chat };

        if (!cancelled) {
          setRealtimeClient(realtime);
          setChatClient(chat);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setConnectError("Could not connect to live chat. Check your session.");
        }
      });

    return () => {
      cancelled = true;
      try {
        clientsRef.current.realtime?.connection.close();
      } catch {}
    };
  }, []);

  if (connectError) {
    return (
      <div className="container-fluid pt-4 px-4">
        <div className="alc-connect-error">{connectError}</div>
      </div>
    );
  }

  if (!realtimeClient || !chatClient || !adminId) {
    return (
      <div className="container-fluid pt-4 px-4">
        <div className="alc-msg-loading">Connecting to live chat…</div>
      </div>
    );
  }

  return (
    <AblyProvider client={realtimeClient}>
      <ChatClientProvider client={chatClient}>
        <AdminLiveChatInner
          adminId={adminId}
          realtimeClient={realtimeClient}
          connState={connState}
        />
      </ChatClientProvider>
    </AblyProvider>
  );
}
