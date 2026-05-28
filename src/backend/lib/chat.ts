import { Collection, Db, ObjectId } from "mongodb";
import { getMongoDb } from "./mongodb";
import type {
  ChatLeadDocument,
  ChatMessageDocument,
  ConversationDocument,
  ConversationStatus,
  LeadStatus,
  SafeConversation,
  SafeMessage,
} from "@/shared/chatTypes";

// ─── Collection names ─────────────────────────────────────────────────────────
export const LEADS_CHAT_COLLECTION = "leads";
export const CONVERSATIONS_COLLECTION = "chat_conversations";
export const MESSAGES_COLLECTION = "chat_messages";

// ─── Index setup (cached) ─────────────────────────────────────────────────────
declare global {
  var zonicChatIndexesPromise: Promise<void> | undefined;
}

export async function ensureChatIndexes(db: Db): Promise<void> {
  globalThis.zonicChatIndexesPromise ??= (async () => {
    const leads = db.collection(LEADS_CHAT_COLLECTION);
    const convs = db.collection(CONVERSATIONS_COLLECTION);
    const msgs = db.collection(MESSAGES_COLLECTION);

    await Promise.all([
      // ── leads ──────────────────────────────────────────────────────────────
      leads.createIndex({ email: 1, createdAt: -1 }),
      leads.createIndex({ createdAt: -1 }),

      // ── chat_conversations ─────────────────────────────────────────────────
      // createOrGetConversation: findOne({ visitorId, status: { $nin: ["closed"] } })
      convs.createIndex({ visitorId: 1, status: 1 }),
      // admin list (status filter + recency sort):
      //   find({ status: X }).sort({ lastMessageAt: -1, createdAt: -1 })
      convs.createIndex({ status: 1, lastMessageAt: -1, createdAt: -1 }),
      // admin list (all statuses, sort only):
      //   find({}).sort({ lastMessageAt: -1, createdAt: -1 })
      convs.createIndex({ lastMessageAt: -1, createdAt: -1 }),
      // lookup by leadId (sparse — most convs have no leadId)
      convs.createIndex({ leadId: 1 }, { sparse: true }),

      // ── chat_messages ──────────────────────────────────────────────────────
      // getMessages: find({ conversationId, createdAt: { $lt: X } }).sort({ createdAt: -1 })
      msgs.createIndex({ conversationId: 1, createdAt: -1 }),
      // markAdminRead: updateMany({ conversationId, readByAdmin: false })
      msgs.createIndex({ conversationId: 1, readByAdmin: 1 }),
      // roomName-based lookup (used by Ably publish helpers)
      msgs.createIndex({ roomName: 1, createdAt: -1 }),
      // idempotency: prevent duplicate saves for the same clientMessageId
      msgs.createIndex(
        { conversationId: 1, clientMessageId: 1 },
        { unique: true, sparse: true }
      ),
    ]);
  })().catch((err) => {
    globalThis.zonicChatIndexesPromise = undefined;
    throw err;
  });

  return globalThis.zonicChatIndexesPromise;
}

// ─── Collection getters ───────────────────────────────────────────────────────
export async function getLeadsCollection(): Promise<
  Collection<ChatLeadDocument>
> {
  const db = await getMongoDb();
  await ensureChatIndexes(db);
  return db.collection<ChatLeadDocument>(LEADS_CHAT_COLLECTION);
}

export async function getConversationsCollection(): Promise<
  Collection<ConversationDocument>
> {
  const db = await getMongoDb();
  await ensureChatIndexes(db);
  return db.collection<ConversationDocument>(CONVERSATIONS_COLLECTION);
}

export async function getMessagesCollection(): Promise<
  Collection<ChatMessageDocument>
> {
  const db = await getMongoDb();
  await ensureChatIndexes(db);
  return db.collection<ChatMessageDocument>(MESSAGES_COLLECTION);
}

// ─── Lead helpers ─────────────────────────────────────────────────────────────
export interface SaveChatLeadParams {
  name: string;
  service: string;
  subService?: string;
  projectDetails?: string;
  email?: string;
  phone?: string;
  sourcePage?: string;
  pageUrl?: string;
  source?: string;
  recaptchaScore?: number;
}

export async function saveChatLead(
  params: SaveChatLeadParams
): Promise<string> {
  const collection = await getLeadsCollection();
  const now = new Date();
  const doc: Omit<ChatLeadDocument, "_id"> = {
    name: params.name,
    service: params.service,
    subService: params.subService,
    projectDetails: params.projectDetails,
    email: params.email,
    phone: params.phone,
    sourcePage: params.sourcePage,
    pageUrl: params.pageUrl,
    source: params.source,
    recaptchaScore: params.recaptchaScore,
    status: "new" as LeadStatus,
    createdAt: now,
    updatedAt: now,
  };
  const result = await collection.insertOne(doc as ChatLeadDocument);
  return result.insertedId.toHexString();
}

export async function updateLeadStatus(
  leadId: string,
  status: LeadStatus
): Promise<void> {
  const collection = await getLeadsCollection();
  await collection.updateOne(
    { _id: new ObjectId(leadId) },
    { $set: { status, updatedAt: new Date() } }
  );
}

// ─── Conversation helpers ─────────────────────────────────────────────────────
export function toSafeConversation(doc: ConversationDocument): SafeConversation {
  return {
    _id: doc._id.toHexString(),
    visitorId: doc.visitorId,
    roomName: doc.roomName,
    name: doc.name,
    email: doc.email,
    phone: doc.phone,
    service: doc.service,
    subService: doc.subService,
    status: doc.status,
    assignedAdminId: doc.assignedAdminId ?? null,
    lastMessage: doc.lastMessage ?? null,
    lastMessageAt: doc.lastMessageAt?.toISOString() ?? null,
    unreadForAdmin: doc.unreadForAdmin,
    unreadForVisitor: doc.unreadForVisitor,
    liveChatStartedAt: doc.liveChatStartedAt.toISOString(),
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
    closedAt: doc.closedAt?.toISOString() ?? null,
  };
}

export interface CreateConversationParams {
  visitorId: string;
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  subService?: string;
  leadId?: string | null;
}

export async function createOrGetConversation(
  params: CreateConversationParams
): Promise<{ conversationId: string; roomName: string; isNew: boolean }> {
  const collection = await getConversationsCollection();
  const now = new Date();

  // Look for an existing open conversation for this visitor
  const existing = await collection.findOne({
    visitorId: params.visitorId,
    status: { $nin: ["closed"] },
  });

  if (existing) {
    // Reactivate if inactive
    if (existing.status === "inactive") {
      await collection.updateOne(
        { _id: existing._id },
        {
          $set: {
            status: "waiting_agent",
            updatedAt: now,
            closedAt: null,
          },
        }
      );
    }
    return {
      conversationId: existing._id.toHexString(),
      roomName: existing.roomName,
      isNew: false,
    };
  }

  // Create new conversation
  const doc: Omit<ConversationDocument, "_id"> = {
    visitorId: params.visitorId,
    leadId: params.leadId ? new ObjectId(params.leadId) : null,
    roomName: "", // placeholder, set after insert
    name: params.name,
    email: params.email,
    phone: params.phone,
    service: params.service,
    subService: params.subService,
    status: "waiting_agent",
    assignedAdminId: null,
    lastMessage: null,
    lastMessageAt: null,
    unreadForAdmin: 0,
    unreadForVisitor: 0,
    liveChatStartedAt: now,
    createdAt: now,
    updatedAt: now,
    closedAt: null,
  };

  const result = await collection.insertOne(doc as ConversationDocument);
  const conversationId = result.insertedId.toHexString();
  const roomName = `zonic-chat-${conversationId}`;

  // Update with the generated roomName
  await collection.updateOne(
    { _id: result.insertedId },
    { $set: { roomName } }
  );

  return { conversationId, roomName, isNew: true };
}

export async function getConversationById(
  conversationId: string
): Promise<ConversationDocument | null> {
  if (!ObjectId.isValid(conversationId)) return null;
  const collection = await getConversationsCollection();
  return collection.findOne({ _id: new ObjectId(conversationId) });
}

export async function updateConversationStatus(
  conversationId: string,
  status: ConversationStatus,
  extra?: Partial<ConversationDocument>
): Promise<void> {
  const collection = await getConversationsCollection();
  const now = new Date();
  await collection.updateOne(
    { _id: new ObjectId(conversationId) },
    {
      $set: {
        status,
        updatedAt: now,
        ...(status === "closed" ? { closedAt: now } : {}),
        ...extra,
      },
    }
  );
}

export async function touchConversationLastMessage(
  conversationId: string,
  text: string,
  senderType: "visitor" | "admin" | "system"
): Promise<void> {
  const collection = await getConversationsCollection();
  const now = new Date();
  const setFields = {
    lastMessage: text.slice(0, 120),
    lastMessageAt: now,
    updatedAt: now,
    status: "active" as ConversationStatus,
  };

  if (senderType === "visitor") {
    await collection.updateOne(
      { _id: new ObjectId(conversationId) },
      { $set: setFields, $inc: { unreadForAdmin: 1 } }
    );
  } else if (senderType === "admin") {
    await collection.updateOne(
      { _id: new ObjectId(conversationId) },
      { $set: setFields, $inc: { unreadForVisitor: 1 } }
    );
  } else {
    await collection.updateOne(
      { _id: new ObjectId(conversationId) },
      { $set: setFields }
    );
  }
}

// ─── Message helpers ──────────────────────────────────────────────────────────
export function toSafeMessage(doc: ChatMessageDocument): SafeMessage {
  return {
    _id: doc._id.toHexString(),
    conversationId: doc.conversationId.toHexString(),
    roomName: doc.roomName,
    senderType: doc.senderType,
    senderId: doc.senderId,
    senderName: doc.senderName,
    text: doc.text,
    createdAt: doc.createdAt.toISOString(),
    clientMessageId: doc.clientMessageId ?? undefined,
  };
}

export interface SaveMessageParams {
  conversationId: string;
  roomName: string;
  senderType: "visitor" | "admin" | "system";
  senderId: string;
  senderName: string;
  text: string;
  clientMessageId?: string;
}

export async function saveMessage(
  params: SaveMessageParams
): Promise<SafeMessage> {
  const collection = await getMessagesCollection();

  // Idempotency: if a clientMessageId was provided, return existing doc if found
  if (params.clientMessageId) {
    const existing = await collection.findOne({
      conversationId: new ObjectId(params.conversationId),
      clientMessageId: params.clientMessageId,
    });
    if (existing) return toSafeMessage(existing);
  }

  const now = new Date();
  const doc: Omit<ChatMessageDocument, "_id"> = {
    conversationId: new ObjectId(params.conversationId),
    roomName: params.roomName,
    senderType: params.senderType,
    senderId: params.senderId,
    senderName: params.senderName,
    text: params.text,
    clientMessageId: params.clientMessageId ?? null,
    readByAdmin: params.senderType === "admin",
    readByVisitor: params.senderType === "visitor",
    createdAt: now,
  };
  const result = await collection.insertOne(doc as ChatMessageDocument);
  return toSafeMessage({ ...doc, _id: result.insertedId } as ChatMessageDocument);
}

export async function getMessages(
  conversationId: string,
  limit = 30,
  before?: Date
): Promise<SafeMessage[]> {
  if (!ObjectId.isValid(conversationId)) return [];
  const collection = await getMessagesCollection();
  const filter: Record<string, unknown> = {
    conversationId: new ObjectId(conversationId),
  };
  if (before) {
    filter.createdAt = { $lt: before };
  }
  const docs = await collection
    .find(filter)
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();

  return docs.reverse().map(toSafeMessage);
}

export async function markAdminRead(conversationId: string): Promise<void> {
  const [msgCol, convCol] = await Promise.all([
    getMessagesCollection(),
    getConversationsCollection(),
  ]);
  await Promise.all([
    msgCol.updateMany(
      {
        conversationId: new ObjectId(conversationId),
        readByAdmin: false,
      },
      { $set: { readByAdmin: true } }
    ),
    convCol.updateOne(
      { _id: new ObjectId(conversationId) },
      { $set: { unreadForAdmin: 0, updatedAt: new Date() } }
    ),
  ]);
}
