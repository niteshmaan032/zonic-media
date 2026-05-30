# Zonic Media — Claude Handoff Document

> Last updated: 2026-05-28
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

- Messages channel: `zonic-chat-live:{roomName}` (via `getLiveMessageChannelName(roomName)`)
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

1. Visitor fills lead form → `POST /api/send-lead` → saved to `leads` + email sent
2. Visitor clicks "Chat with Live Agent" → `POST /api/chat/start-live` → creates `chat_conversations` doc, publishes `new_conversation` to `zonic-admin-notifications`
3. Visitor/Admin sends message → `POST /api/chat/messages` → saved to `chat_messages` + published to Ably REST → real-time delivery
4. Admin closes chat → `PATCH /api/admin/chat/conversations/{id}` → status = `"closed"`

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
    ChatRoomProvider (room = zonic-chat-{id}, heartbeatThrottleMs: 3000)
      LiveChatInner
        - realtimeClient passed as PROP (not useAbly/useChannel)
        - channel.subscribe("message.created", handler) in useEffect
        - useTyping, usePresence, usePresenceListener from @ably/chat/react
```

### Admin Side

| File | Purpose |
|---|---|
| `src/app/(admin)/admindashboard/components/AdminLiveChatContent.tsx` | Admin Ably setup, connState tracking, conversation selection |
| `src/app/(admin)/admindashboard/components/AdminChatWindow.tsx` | Per-conversation chat window |
| `src/app/(admin)/admindashboard/components/AdminChatConversationList.tsx` | Conversation list sidebar with 30s safety refresh |
| `src/app/(admin)/admindashboard/components/AdminChatVisitorInfo.tsx` | Visitor info header |

**AdminChatWindow provider tree:**
```
AblyProvider (admin realtimeClient — shared across all conversations)
  ChatClientProvider
    [AdminLiveChatInner]
      AdminChatWindow (key={selectedConv._id} — remounts on conversation change)
        ChatRoomProvider (one per selected conversation, heartbeatThrottleMs: 3000)
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
| `src/app/api/chat/messages/route.ts` | GET history (auth), POST send (auth + clientMessageId idempotency) |
| `src/app/api/chat/start-live/route.ts` | Creates/resumes conversation |
| `src/app/api/admin/chat/conversations/route.ts` | Admin conversation list |

### Shared

| File | Purpose |
|---|---|
| `src/shared/chatTypes.ts` | All TypeScript interfaces: `ChatMessageDocument`, `SafeMessage`, `ConversationDocument`, etc. |
| `src/shared/chatRealtime.ts` | Shared Ably constants: `LIVE_MESSAGE_EVENT`, `getLiveMessageChannelName()`, `generateClientMessageId()` |

---

## MongoDB Indexes

### `chat_conversations`
```javascript
{ visitorId: 1, status: 1 }                        // createOrGetConversation
{ status: 1, lastMessageAt: -1, createdAt: -1 }    // admin list filtered by status
{ lastMessageAt: -1, createdAt: -1 }               // admin list all statuses
{ leadId: 1 }                                       // sparse
```

### `chat_messages`
```javascript
{ conversationId: 1, createdAt: -1 }               // getMessages pagination
{ conversationId: 1, readByAdmin: 1 }              // markAdminRead updateMany
{ roomName: 1, createdAt: -1 }
{ conversationId: 1, clientMessageId: 1 }          // unique sparse — idempotency
```

### `leads`
```javascript
{ email: 1, createdAt: -1 }
{ createdAt: -1 }
```

---

## API Routes

| Method | Route | Auth | Purpose |
|---|---|---|---|
| POST | `/api/send-lead` | Public + reCAPTCHA | Submit lead, send emails |
| POST | `/api/chat/start-live` | Public (rate-limited 10/min) | Create/reactivate conversation |
| GET | `/api/chat/messages` | Admin JWT **or** `visitorId` ownership | Load message history |
| POST | `/api/chat/messages` | Admin JWT **or** `visitorId` ownership | Send message |
| POST | `/api/chat/mark-inactive` | Public (`visitorId`) | Mark conversation inactive |
| POST | `/api/ably/token` | Admin JWT (admin) or `visitorId` (visitor) | Issue scoped Ably token |
| GET | `/api/admin/auth/me` | Admin JWT | Get current admin identity |
| GET/POST/PATCH | `/api/admin/chat/conversations/...` | Admin JWT | Manage conversations |

---

## Security Model (POST /api/chat/messages)

The POST route enforces sender identity server-side. Clients cannot forge `senderId` or `senderType`.

**Visitor path:**
1. `body.visitorId` required → 401 if missing
2. `conv.visitorId === body.visitorId` → 403 if mismatch
3. `senderId` forced to `visitor:{visitorId}` (never trusted from client)
4. `senderName` accepted from client (cosmetic only, 100 char max)

**Admin path:**
1. `ADMIN_AUTH_COOKIE` JWT required → 401 if missing/invalid
2. `senderId` forced to `admin:{admin._id.toHexString()}`
3. `senderName` forced to `"Zonic Team"`

**Rejected:**
- `senderType: "system"` always returns 401 from public route
- No `visitorId` in body → 401
- `visitorId` doesn't match conversation owner → 403

**GET /api/chat/messages:**
- Admin JWT cookie → full access
- No JWT + `visitorId` param → checks `conv.visitorId === visitorId`, 401/403 otherwise

---

## clientMessageId Deduplication System

### Problem (race condition)
Old system used a single `seenIds` ref (Set). Race: if Ably echo arrived between the POST response and `seenIds.add(realId)`, a duplicate message would render.

### Solution
Two refs per component:
- `seenMongoIds` — Set of MongoDB `_id` strings
- `seenClientMsgIds` — Set of `clientMessageId` UUIDs

`generateClientMessageId()` (in `src/shared/chatRealtime.ts`) uses `crypto.randomUUID()` with a timestamp/random fallback for older browsers.

### Flow
```
1. generateClientMessageId() → stable UUID
2. seenClientMsgIds.current.add(clientMessageId)   ← BEFORE HTTP request
3. Optimistic message with tempId = "temp-{clientMessageId}" shown instantly
4. POST /api/chat/messages with { clientMessageId }
5. Server: idempotency check → if {conversationId, clientMessageId} exists, return existing doc
6. Server: saves to MongoDB with clientMessageId field
7. Server: includes clientMessageId in Ably metadata
8. POST response: seenMongoIds.current.add(realId), swap tempId → realId
9. Ably echo arrives: seenClientMsgIds.has(clientMessageId) → true → skipped
```

### MongoDB idempotency
Sparse unique index `{ conversationId: 1, clientMessageId: 1 }`. `saveMessage()` does a `findOne` before `insertOne`. Duplicate POSTs (network retry) return the same document.

---

## Typing Indicators

Both sides use the Ably Chat `useTyping` hook exclusively. No API calls, no MongoDB writes for typing.

### Detection (non-deprecated API)
```javascript
const { currentlyTyping, currentTypers, keystroke, stop: stopTyping } = useTyping();

// Prefer currentTypers (TypingMember[]) over deprecated currentlyTyping (Set<string>)
const typers = currentTypers?.length
  ? currentTypers
  : Array.from(currentlyTyping ?? []).map((id) => ({ clientId: id }));
const adminTyping = typers.some((m) => String(m.clientId).startsWith("admin:"));
```

### Stop triggers
- Input becomes empty → `stop()` called immediately
- Message sent → `await stop()` before POST
- Component unmounts → cleanup `useEffect(() => () => stop(), [stop])`
- Conversation switch (admin) → `key={selectedConv._id}` causes unmount → cleanup fires

### UI
- Visitor sees: agent avatar (`Z`) + bubble with "Zonic Team is typing" + animated dots (`.zlc-typing-bubble`)
- Admin sees: visitor avatar (first letter) + bubble with "{visitorName} is typing" + animated dots (`.alc-typing-dots`)

### Settings
`heartbeatThrottleMs: 3000` on `ChatRoomProvider` (both sides). This controls how often `keystroke()` actually sends an Ably event — rapid keystrokes within 3s are no-ops.

---

## Admin Connection Reliability

`AdminLiveChatContent.tsx` tracks all Ably connection states via `connection.on(stateChange => setConnState(...))`.

**Connection state flow the UI reacts to:**
- `"connected"` — normal operation
- `"disconnected"` / `"suspended"` — shows amber warning banner
- `"failed"` — shows red error banner, prompts reload

**On reconnect** (`disconnected`/`suspended` → `connected`):
- `AdminLiveChatInner` fires `setNewConvSignal` → conversation list reloads (catches new conversations that arrived while offline)
- `AdminChatWindowInner` calls `loadHistory()` + `appendUnseenMessages()` → backfills messages missed while offline

**30-second safety refresh** in `AdminChatConversationList.tsx`:
```javascript
setInterval(() => { if (page === 1) load(1, true); }, 30_000)
```
Catches `new_conversation` Ably events that might have been missed. Does not affect message delivery.

**No polling for messages** — the old 3-second `setInterval` safety poll was removed. Message delivery is Ably-only, with the reconnect-triggered history backfill as the safety net.

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
1. generateClientMessageId() → stable UUID
2. seenClientMsgIds.current.add(clientMessageId)     ← before everything
3. tempId = "temp-{clientMessageId}"
4. setNewMsgs adds { _id: tempId, clientMessageId, ... } immediately
5. POST /api/chat/messages with { clientMessageId } → returns { _id: realMongoId, clientMessageId }
6. seenMongoIds.current.add(realMongoId)
7. setNewMsgs swaps tempId → realMongoId
8. Ably echo arrives → seenClientMsgIds.has(clientMessageId) === true → skipped
```

On failure: `seenClientMsgIds.delete(clientMessageId)`, remove optimistic message, show error.

---

## Conversation Status Flow

```
waiting_agent  →  active  →  closed
                         ↘  inactive  (10-min visitor inactivity)
```

- `waiting_agent`: set on conversation creation
- `active`: set by `touchConversationLastMessage()` whenever any message is sent
- `closed`: admin clicks "Close chat" → `PATCH` with `{ status: "closed" }`
- `inactive`: visitor 10-min inactivity timer fires → `POST /api/chat/mark-inactive`

Inactive conversations can be reactivated: `createOrGetConversation()` resets status to `waiting_agent` if an existing non-closed conversation is found.

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

## CSS Files

| File | Scope |
|---|---|
| `src/app/style/chatbot.css` | Chatbot widget + live chat visitor widget. Brand: `#fdc115`, `#1b1b1b`, `#d9d9d9` |
| `src/app/(admin)/admindashboard/live-chat/live-chat.css` | Admin live chat dashboard. Tokens: `--admin-primary: #009cff`, `--admin-dark: #191c24`, `--admin-light: #f3f6f9` |

No Tailwind. No box-shadow. Depth via border, gradient, transform, opacity.

**Key CSS class namespaces:**
- `.zoni-*` — chatbot bubble/window
- `.zlc-*` — live chat visitor widget (inside chatbot window)
- `.alc-*` — admin live chat dashboard

---

## Rate Limiting

In-memory only (resets on server restart / Vercel cold start). For production scale, swap to Redis.

| Route | Limit |
|---|---|
| `POST /api/chat/start-live` | 10 requests/min per IP |
| `POST /api/chat/messages` | 30 requests/min per IP |

---

## Critical Bugs Fixed (Historical)

### 1. `ChannelProvider` error on visitor side
**Fix:** Removed `useChannel`. Use `realtimeClient.channels.get().subscribe()` in `useEffect` directly, passing `realtimeClient` as a prop.

### 2. Real-time messages not appearing (both sides)
**Fix:** Never use `useChannel` or `useAbly()` inside `ChatRoomProvider`. Pass raw `realtimeClient` as prop all the way to `LiveChatInner` / `AdminChatWindowInner`.

### 3. `@ably/chat` v1.3.1 API fixes
- `enterWithData` → `initialData` (UsePresenceParams)
- `event.action` → `event.type` (PresenceEvent)
- `timeoutMs` → `heartbeatThrottleMs` (TypingOptions)
- `id=` → `name=` (ChatRoomProvider prop)
- `"absent"` → `"leave"` (presence event type)

### 4. Ably `authParams` form-encoded instead of JSON
**Fix:** Use `authCallback` with `fetch(..., { body: JSON.stringify({...}) })` instead of `authUrl + authMethod`.

### 5. Chatbot resets on page refresh
**Fix:** Persist `liveConvId`, `liveRoomName`, `liveChatMode` to `sessionStorage`. Restore on mount. Clear on chat end.

### 6. Admin `ChatRoomProvider` stays mounted after close
**Fix:** On `status === "closed" | "inactive"`, set `selectedConv(null)` → component unmounts → room subscription released.

### 7. MongoDB `$inc` TypeScript error
**Fix:** Split `touchConversationLastMessage()` into 3 separate `updateOne` calls with explicitly typed `$inc`.

---

## Things to Watch Out For

1. **Ably API key in Vercel** — must be added to Vercel env vars, not just `.env.local`
2. **`@ably/chat` channel conflicts** — never use `useChannel` / `useAbly()` inside `ChatRoomProvider`; always pass raw `realtimeClient` as prop
3. **Token TTL** — Ably tokens expire after 1 hour; `authCallback` auto-refreshes. Handle network failures in `authCallback` gracefully.
4. **Two-ref dedup** — `seenMongoIds` + `seenClientMsgIds` must both be checked in Ably handler AND `appendUnseenMessages`. Never revert to single-ref.
5. **`clientMessageId` must be added before the HTTP request** — adding it after breaks the race-condition fix
6. **Idempotency index** — `{ conversationId: 1, clientMessageId: 1 }` unique sparse index in MongoDB. Don't drop it.
7. **Conversation status flow**: `waiting_agent` → `active` → `closed`/`inactive`
8. **`createOrGetConversation`** uses `{ visitorId: 1, status: 1 }` index — visitor can only have one open conversation at a time
9. **POST auth is server-enforced** — `senderId` / `senderName` are never trusted from client body; always forced from JWT or ownership check
10. **Typing cleanup on unmount** — `stop()` must be called in a cleanup `useEffect` to clear the indicator for the other side
11. **`key={selectedConv._id}`** on `AdminChatWindow` is intentional — causes full remount on conversation switch, which clears all state refs, history, and fires typing cleanup
