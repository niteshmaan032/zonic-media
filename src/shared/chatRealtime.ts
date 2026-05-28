export const LIVE_MESSAGE_EVENT = "message.created";

export function getLiveMessageChannelName(roomName: string) {
  return `zonic-chat-live:${roomName}`;
}

export function generateClientMessageId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
