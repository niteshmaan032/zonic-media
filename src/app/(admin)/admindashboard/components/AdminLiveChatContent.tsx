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
}: {
  adminId: string;
  realtimeClient: Ably.Realtime;
}) {
  const [selectedConv, setSelectedConv] = useState<SafeConversation | null>(null);
  const [newConvSignal, setNewConvSignal] = useState(0);

  // Subscribe to admin notification channel (new conversations)
  useEffect(() => {
    const channel = realtimeClient.channels.get("zonic-admin-notifications");

    const handler = (message: Ably.Message) => {
      if (message.name === "new_conversation") {
        // Trigger conversation list refresh
        setNewConvSignal((n) => n + 1);
      }
    };

    channel.subscribe(handler);

    return () => {
      channel.unsubscribe(handler);
    };
  }, [realtimeClient]);

  const handleSelectConv = useCallback((conv: SafeConversation) => {
    setSelectedConv(conv);
  }, []);

  const handleStatusChange = useCallback((newStatus: string) => {
    setSelectedConv((prev) =>
      prev
        ? { ...prev, status: newStatus as SafeConversation["status"] }
        : null
    );
    setNewConvSignal((n) => n + 1);
  }, []);

  return (
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
            conversation={selectedConv}
            adminId={adminId}
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
  );
}

// ─── Outer: sets up Ably connection when admin visits page ───────────────────
export default function AdminLiveChatContent() {
  const [adminId, setAdminId] = useState<string | null>(null);
  const [realtimeClient, setRealtimeClient] = useState<Ably.Realtime | null>(null);
  const [chatClient, setChatClient] = useState<ChatClient | null>(null);
  const [connectError, setConnectError] = useState<string | null>(null);
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
          authUrl: "/api/ably/token",
          authMethod: "POST",
          authParams: { type: "admin" },
          clientId: `admin:${id}`,
        });

        realtime.connection.on("failed", () => {
          if (!cancelled) {
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
        />
      </ChatClientProvider>
    </AblyProvider>
  );
}
