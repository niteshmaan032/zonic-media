export const LIVE_MESSAGE_EVENT = "message.created";

export function getLiveMessageChannelName(roomName: string) {
  return `${roomName}:live-messages`;
}
