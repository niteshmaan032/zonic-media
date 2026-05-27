# Zonic Media — Claude Handoff Document

> Generated: 2026-05-27  
> Project: Zonic Media agency website (zonicllc.com)

---

## Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Database**: MongoDB Atlas (`cluster01.trirxox.mongodb.net`, DB: `zonic`)
- **Realtime**: Ably SDK v2 (`ably@^2.21.0`) + `@ably/chat@^1.3.1`
- **Auth**: JWT cookies (`JWT_SECRET` in `.env.local`)
- **Email**: Nodemailer + Gmail SMTP
- **Images**: Cloudinary
- **Styling**: Bootstrap 5 + custom CSS (`src/app/globals.css`, `src/app/style/chatbot.css`)
- **Deployment**: Vercel

---

## Environment Variables (`.env.local`)

```
MONGODB_URI=mongodb+srv://...@cluster01.trirxox.mongodb.net/?appName=Cluster01
MONGODB_DB_NAME=zonic
JWT_SECRET=...
JWT_EXPIRES_IN=1d
RESET_PASSWORD_SECRET=...
ADMIN_SETUP_SECRET=...
ABLY_API_KEY=0IbFPA.A5JtVg:_BPwkOZicLoVVbByDQHe_gSPkYPxqVozqzVSekHe-I0
RECAPTCHA_SECRET_KEY=...
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=contact@zonicllc.com
SMTP_PASS=...
NEXT_PUBLIC_APP_URL=https://zonicllc.com
CLOUDINARY_CLOUD_NAME=deusexrye
CLOUDINARY_URL=cloudinary://...
```

> ⚠️ Also add `ABLY_API_KEY` to Vercel's environment variables dashboard — `.env.local` is not deployed.

---

## Chat System Architecture

### Collections (MongoDB)

| Collection | Purpose |
|---|---|
| `leads` | Lead form submissions from chatbot |
| `chat_conversations` | Live chat sessions (one per visitor) |
| `chat_messages` | All messages (visitor + admin) |
| `admins` | Admin accounts |
| `blogs` | Blog/service posts |

### Ably Channel Naming

- Messages channel: `zonic-chat-{conversationId}::$chat::$chatMessages`
- Admin notifications: `zonic-admin-notifications`
- Room name (base): `zonic-chat-{conversationId}`

### Token Capabilities

**Visitor token** (scoped per conversation):
```json
{
  "zonic-chat-{id}": ["subscribe", "publish", "presence", "history"],
  "zonic-chat-{id}:*": ["subscribe", "publish", "presence", "history"]
}
```

**Admin token** (broad, all rooms):
```json
{
  "zonic-chat-*": ["subscribe", "publish", "presence", "history"],
  "zonic-chat-*:*": ["subscribe", "publish", "presence", "history"],
  "zonic-admin-notifications": ["subscribe"]
}
```

### Message Flow

1. Visitor fills lead form → POST `/api/send-lead` → saved to `leads` + email sent
2. Visitor clicks "Chat with Live Agent" → POST `/api/chat/start-live` → creates `chat_conversations` doc, publishes `new_conversation` to `zonic-admin-notifications`
3. Visitor/Admin sends message → POST `/api/chat/messages` → saved to `chat_messages` + published to Ably REST → real-time delivery
4. Admin closes chat → PATCH `/api/admin/chat/conversations/{id}` → status = "closed"

---

## Key Files

### Visitor Side

| File | Purpose |
|---|---|
| `src/app/components/ChatBot.jsx` | Lead capture bot (10-step state machine), manages live chat state |
| `src/app/components/LiveChatRoom.jsx` | Live chat UI — Ably providers, message subscription, typing, presence |

**LiveChatRoom provider tree:**
```
AblyProvider (realtimeClient)
  ChatClientProvider (chatClient from @ably/chat)
    ChatRoomProvider (room = zonic-chat-{id})
      LiveChatInner
        - realtimeClient passed as PROP (not useAbly/useChannel)
        - channel.subscribe("message.created", handler) in useEffect
        - useTyping, usePresence, usePresenceListener from @ably/chat/react
```

### Admin Side

| File | Purpose |
|---|---|
| `src/app/(admin)/admindashboard/components/AdminLiveChatContent.tsx` | Admin Ably setup, conversation selection |
| `src/app/(admin)/admindashboard/components/AdminChatWindow.tsx` | Per-conversation chat window |
| `src/app/(admin)/admindashboard/components/AdminChatConversationList.tsx` | Conversation list sidebar |
| `src/app/(admin)/admindashboard/components/AdminChatVisitorInfo.tsx` | Visitor info header |

**AdminChatWindow provider tree:**
```
AblyProvider (admin realtimeClient — shared across all conversations)
  ChatClientProvider
    [AdminLiveChatInner]
      AdminChatWindow
        ChatRoomProvider (one per selected conversation)
          AdminChatWindowInner
            - realtimeClient passed as PROP (not useAbly/useChannel)
            - channel.subscribe("message.created", handler) in useEffect
            - useTyping, usePresence, usePresenceListener from @ably/chat/react
```

### Backend

| File | Purpose |
|---|---|
| `src/backend/lib/chat.ts` | All chat DB helpers + `ensureChatIndexes()` |
| `src/backend/lib/adminAuth.ts` | Admin JWT auth helpers |
| `src/backend/lib/blogs.ts` | Blog DB helpers + `ensureBlogIndexes()` |
| `src/app/api/ably/token/route.ts` | Ably token generation (visitor scoped, admin broad) |
| `src/app/api/chat/messages/route.ts` | GET history, POST send (saves + Ably publish) |
| `src/app/api/chat/start-live/route.ts` | Creates/resumes conversation |
| `src/app/api/admin/chat/conversations/route.ts` | Admin conversation list |

---

## MongoDB Indexes

### `chat_conversations`
```javascript
{ visitorId: 1, status: 1 }                        // createOrGetConversation
{ status: 1, lastMessageAt: -1, createdAt: -1 }    // admin list filtered by status
{ lastMessageAt: -1, createdAt: -1 }               // admin list all statuses
{ leadId: 1 }  // sparse
```

### `chat_messages`
```javascript
{ conversationId: 1, createdAt: -1 }   // getMessages pagination
{ conversationId: 1, readByAdmin: 1 }  // markAdminRead updateMany
{ roomName: 1, createdAt: -1 }
```

### `leads`
```javascript
{ email: 1, createdAt: -1 }
{ createdAt: -1 }
```

---

## Critical Bugs Fixed in This Session

### 1. `ChannelProvider` error on visitor side
**Error:** `Could not find a parent ChannelProvider in the component tree`  
**Cause:** Ably React v2 requires `<ChannelProvider>` for `useChannel`. We were using `useChannel` without it.  
**Fix:** Removed `useChannel` entirely. Switched to `realtimeClient.channels.get().subscribe()` directly in a `useEffect`, passing `realtimeClient` as a prop. No `ChannelProvider` needed.

### 2. Real-time messages not appearing (both sides)
**Symptom:** Messages only appear after page refresh.  
**Cause:** `useChannel` (and later `useAbly()`) hooks are inside `ChatRoomProvider` context. `ChatRoomProvider` manages the `::$chat::$chatMessages` channel internally — when it re-attaches for room setup, it disrupts any `useChannel`/`useAbly`-based subscriptions.  
**Fix:** Pass `realtimeClient` as a **prop** all the way down to `LiveChatInner` and `AdminChatWindowInner`. Use `realtimeClient.channels.get(channelName).subscribe(handler)` directly in `useEffect([realtimeClient, roomName])`. This is completely outside the Chat SDK's lifecycle.

### 3. Admin→Visitor messages missing (TypeScript build error)
**Error:** `enterWithData does not exist on UsePresenceParams`  
**Fix:** Changed `enterWithData` → `initialData` (correct API for `@ably/chat` v1.3.1).

Other `@ably/chat` v1.3.1 API fixes:
- `event.action` → `event.type` (on `PresenceEvent`)
- `timeoutMs` → `heartbeatThrottleMs` (on `TypingOptions`)
- `id=` → `name=` (on `ChatRoomProvider` prop)
- `"absent"` → `"leave"` (presence event type)

### 4. Ably `authParams` sent as form-encoded instead of JSON
**Cause:** `authUrl + authMethod: "POST"` sends `application/x-www-form-urlencoded`; server does `request.json()` → silent parse fail → type undefined → 400 error.  
**Fix:** Switched both visitor and admin to `authCallback` pattern with explicit `fetch(..., { body: JSON.stringify({...}) })`.

### 5. Chatbot resets on page refresh
**Cause:** `liveConvId`, `liveRoomName`, `liveChatMode` are React state — wiped on refresh.  
**Fix:** Persist them to `sessionStorage` when live chat starts. Restore on mount. Clear when chat ends.

### 6. Admin `ChatRoomProvider` stays mounted after "Close chat"
**Cause:** `handleStatusChange` updated `selectedConv` in-place (same `key`) so `ChatRoomProvider` stayed mounted, keeping the closed room subscribed.  
**Fix:** When `newStatus === "closed" || "inactive"`, set `selectedConv(null)` → `AdminChatWindow` unmounts → `ChatRoomProvider` cleans up.

### 7. MongoDB `$inc` TypeScript error
**Fix:** Split `touchConversationLastMessage()` into 3 separate `updateOne` calls with explicitly typed `$inc`.

---

## Ably Connection Lifecycle

**Visitor:**
- Dedicated `Ably.Realtime` instance per chat session
- Closed explicitly on: "End live chat" click, 10-min inactivity, component unmount
- Token scoped to specific room only

**Admin:**
- Single persistent `Ably.Realtime` instance for entire live-chat page
- Connection stays open across conversations (needed for `zonic-admin-notifications`)
- Per-conversation `ChatRoomProvider` releases its room subscription when a different conversation is selected (or when admin closes a conversation — sets `selectedConv(null)`)
- Full connection only closes when admin navigates away from live-chat page

---

## Optimistic UI Pattern (both sides)

```
1. User submits message
2. tempId = `temp-${Date.now()}-${random}`
3. setNewMsgs adds { _id: tempId, ... } immediately (user sees it)
4. POST /api/chat/messages → saved → returns { success, message: { _id: realId } }
5. seenIds.current.add(realId) — prevents Ably echo from showing duplicate
6. setNewMsgs swaps tempId → realId
7. Ably delivers echo → mongoId in seenIds → skipped
```

---

## sessionStorage Keys (Chatbot State)

| Key | Value |
|---|---|
| `zonic_live_conv_id` | MongoDB conversation `_id` |
| `zonic_live_room_name` | `zonic-chat-{conversationId}` |
| `zonic_live_chat_mode` | `"active"` |
| `zonic_live_visitor_name` | Visitor's name from lead form |

`visitorId` is in **localStorage** (`zonic_visitor_id`) — persists across sessions.

---

## Things to Watch Out For

1. **Ably API key in Vercel** — must be added to Vercel's environment variables, not just `.env.local`
2. **`@ably/chat` SDK channel conflicts** — never use `useChannel` or `useAbly()` inside `ChatRoomProvider`; always pass the raw `Ably.Realtime` instance as a prop
3. **Token TTL** — tokens expire after 1 hour; `authCallback` will be called to refresh. Handle network failures in `authCallback` gracefully.
4. **Message dedup** — `seenIds` ref (Set) prevents double-display. History IDs added on load, sent message real IDs added after API confirms. Critical for correctness.
5. **Conversation status flow**: `waiting_agent` → `active` (when message sent) → `closed`/`inactive`
6. **`createOrGetConversation`** — returns existing open conversation for same `visitorId`, or creates new one. Uses `{ visitorId: 1, status: 1 }` index.
