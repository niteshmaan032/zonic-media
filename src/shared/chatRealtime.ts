export const LIVE_MESSAGE_EVENT = "message.created";

export function getLiveMessageChannelName(roomName: string) {
  return `zonic-chat-live:${roomName}`;
}
