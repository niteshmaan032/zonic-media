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
  const prevConnState = useRef(connState);

  // Subscribe to admin notification channel (new conversations)
  useEffect(() => {
    const channel = realtimeClient.channels.get("zonic-admin-notifications");

    const handler = (message: Ably.Message) => {
      if (message.name === "new_conversation") {
        setNewConvSignal((n) => n + 1);
      }
    };

    channel.subscribe(handler);

    return () => {
      channel.unsubscribe(handler);
    };
  }, [realtimeClient]);

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
          />
        </div>

        {/* Right: chat window */}
        <div className="alc-chat-col">
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
            <div className="alc-empty-state">
              <div className="alc-empty-state-icon" aria-hidden="true">💬</div>
              <p>Select a conversation to start chatting</p>
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
