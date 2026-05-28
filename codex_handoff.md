# Codex Handoff

Generated: 2026-05-27
Project: Zonic Media agency website (`zonicllc.com`)
Workspace: `C:\Users\maann\OneDrive\Desktop\zonic`

## Session Summary

The user first asked Codex to read `CLAUDE_HANDOFF.md` before making any changes. Codex read it and used it as the source of truth for the existing chatbot/live-chat architecture.

The user then requested one focused change:

> "ok now i want a change in my chatbot system every thing is working perfect only the messages send by user to admin or admin to user does't auto reflect on screen s i have to hard refresh the page and then it appears fix this only"

Codex changed only the live message reflection path. No chatbot steps, lead capture flow, MongoDB persistence, message history loading, admin close flow, or UI copy were intentionally changed.

## Relevant Existing Context From `CLAUDE_HANDOFF.md`

- Next.js 16 App Router + TypeScript.
- MongoDB stores conversations and messages.
- Ably handles live chat realtime behavior.
- Visitor chat UI:
  - `src/app/components/ChatBot.jsx`
  - `src/app/components/LiveChatRoom.jsx`
- Admin chat UI:
  - `src/app/(admin)/admindashboard/components/AdminLiveChatContent.tsx`
  - `src/app/(admin)/admindashboard/components/AdminChatWindow.tsx`
- Backend message route:
  - `src/app/api/chat/messages/route.ts`
- Ably token route:
  - `src/app/api/ably/token/route.ts`

Important rule preserved from the previous handoff:

- Do not use `useChannel` or `useAbly()` inside `ChatRoomProvider`.
- Pass the raw `Ably.Realtime` client as a prop and subscribe directly from `realtimeClient.channels.get(...)`.

## Issue Diagnosed

Messages were being saved correctly to MongoDB and appeared after hard refresh, but they did not auto-appear on the opposite screen in realtime.

The code was publishing/subscribing to a custom stream using this channel shape:

```ts
`${roomName}::$chat::$chatMessages`
```

That channel name looks like an internal Ably Chat SDK channel. It is risky because the Chat SDK also manages room channel lifecycle, and token capability matching can be brittle around that naming. The user-facing symptom matched a realtime subscription/publish delivery issue, not a database issue.

## Changes Made

### Added shared realtime helper

File:

- `src/shared/chatRealtime.ts`

Content:

```ts
export const LIVE_MESSAGE_EVENT = "message.created";

export function getLiveMessageChannelName(roomName: string) {
  return `${roomName}:live-messages`;
}
```

Purpose:

- Keep visitor, admin, token route, and publish route on the exact same app-owned realtime channel.
- Avoid using the Chat SDK internal-looking `::$chat::$chatMessages` channel for custom message display updates.

### Visitor live chat subscription updated

File:

- `src/app/components/LiveChatRoom.jsx`

Changed:

- Imports `getLiveMessageChannelName` and `LIVE_MESSAGE_EVENT`.
- Subscribes to:

```ts
getLiveMessageChannelName(roomName)
```

instead of:

```ts
`${roomName}::$chat::$chatMessages`
```

- Logs subscription failure if Ably subscription rejects.
- Still uses the raw `realtimeClient` prop, preserving the previous architecture.

### Admin live chat subscription updated

File:

- `src/app/(admin)/admindashboard/components/AdminChatWindow.tsx`

Changed:

- Imports `getLiveMessageChannelName` and `LIVE_MESSAGE_EVENT`.
- Subscribes to:

```ts
getLiveMessageChannelName(conversation.roomName)
```

- Logs subscription failure if Ably subscription rejects.
- Still uses the raw `realtimeClient` prop, preserving the previous architecture.

### Message API publish channel updated

File:

- `src/app/api/chat/messages/route.ts`

Changed:

- Imports `getLiveMessageChannelName` and `LIVE_MESSAGE_EVENT`.
- Publishes saved messages to:

```ts
getLiveMessageChannelName(conv.roomName)
```

with event:

```ts
LIVE_MESSAGE_EVENT
```

This keeps database save behavior unchanged and only redirects the realtime display event to the new app-owned channel.

### Ably token capabilities updated

File:

- `src/app/api/ably/token/route.ts`

Changed:

- Imports `getLiveMessageChannelName`.
- Admin tokens now include subscribe capability for:

```ts
"zonic-chat-*:live-messages"
```

- Generic visitor tokens now include subscribe capability for:

```ts
"zonic-chat-*:live-messages"
```

- Scoped visitor tokens now include exact subscribe capability for:

```ts
getLiveMessageChannelName(roomName)
```

## Files Changed

```text
M  src/app/(admin)/admindashboard/components/AdminChatWindow.tsx
M  src/app/api/ably/token/route.ts
M  src/app/api/chat/messages/route.ts
M  src/app/components/LiveChatRoom.jsx
A  src/shared/chatRealtime.ts
```

## Verification

Command run:

```bash
npm run build
```

Result:

- Passed successfully.
- Next.js compiled, TypeScript passed, and all pages/routes generated.

Command run:

```bash
npm run lint
```

Result:

- Failed due to existing unrelated lint errors across the repo.
- The lint output included unrelated errors in files such as:
  - `src/app/(admin)/(admin-auth)/admin-login/page.tsx`
  - `src/app/components/AnalyticsProvider.tsx`
  - `src/app/components/Blogs.tsx`
  - `src/app/components/HeroTypewriter.tsx`
  - `src/app/components/Testimonials.tsx`
- There was also an existing React compiler lint complaint in `LiveChatRoom.jsx` about synchronous state updates inside an effect. This was already part of the component structure and was not caused by the realtime channel change.

## User Clarification During Session

The user asked:

> "just tell me the changes u made are only for the msg diplay on both sides live updates right"

Codex answered:

> Yes. The code changes are only for live message reflection between visitor and admin.
>
> Specifically, I changed the real-time message stream channel both sides subscribe to, updated the API route to publish to that same channel, and updated Ably token permissions so browsers are allowed to subscribe to it. I did not change the chatbot questions, lead flow, MongoDB saving, admin close flow, or message history loading.

## Current State

The code compiles with `npm run build`.

The intended behavior after deployment/restart:

1. Visitor sends a message.
2. Message is still saved to MongoDB through `/api/chat/messages`.
3. API publishes `message.created` to `zonic-chat-{conversationId}:live-messages`.
4. Admin `AdminChatWindow` receives it without refresh.
5. Admin sends a message.
6. Message is still saved to MongoDB through `/api/chat/messages`.
7. API publishes `message.created` to `zonic-chat-{conversationId}:live-messages`.
8. Visitor `LiveChatRoom` receives it without refresh.

## Notes For Next Agent

- Keep the app-owned realtime message display stream separate from Ably Chat SDK internals.
- Do not switch back to `::$chat::$chatMessages` unless intentionally adopting the official Chat SDK `messages.send()` / `useMessages()` flow end to end.
- If realtime still does not reflect in a browser test, inspect Ably subscription errors in the browser console. The new code logs:
  - `[LiveChatRoom] message subscription failed:`
  - `[AdminChatWindow] message subscription failed:`
- Confirm `ABLY_API_KEY` exists in both `.env.local` and Vercel environment variables.
- Because `npm run build` passes, the most likely remaining runtime problem, if any, would be Ably account capability/channel authorization or a stale deployed environment.
