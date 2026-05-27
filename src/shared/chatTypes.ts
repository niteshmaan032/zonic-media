import { ObjectId } from "mongodb";

// ─── Lead ─────────────────────────────────────────────────────────────────────
export type LeadStatus =
  | "new"
  | "live_chat_started"
  | "callback_requested"
  | "closed";

export interface ChatLeadDocument {
  _id: ObjectId;
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
  status: LeadStatus;
  createdAt: Date;
  updatedAt: Date;
}

// ─── Conversation ─────────────────────────────────────────────────────────────
export type ConversationStatus =
  | "waiting_agent"
  | "active"
  | "waiting_visitor"
  | "inactive"
  | "closed";

export interface ConversationDocument {
  _id: ObjectId;
  leadId?: ObjectId | null;
  visitorId: string;
  roomName: string;
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  subService?: string;
  status: ConversationStatus;
  assignedAdminId?: string | null;
  lastMessage?: string | null;
  lastMessageAt?: Date | null;
  unreadForAdmin: number;
  unreadForVisitor: number;
  liveChatStartedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  closedAt?: Date | null;
}

// ─── Message ──────────────────────────────────────────────────────────────────
export type SenderType = "visitor" | "admin" | "system";

export interface ChatMessageDocument {
  _id: ObjectId;
  conversationId: ObjectId;
  roomName: string;
  senderType: SenderType;
  senderId: string;
  senderName: string;
  text: string;
  ablyMessageSerial?: string | null;
  readByAdmin: boolean;
  readByVisitor: boolean;
  createdAt: Date;
}

// ─── Safe/serialised shapes (sent to client) ──────────────────────────────────
export type SafeConversation = {
  _id: string;
  visitorId: string;
  roomName: string;
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  subService?: string;
  status: ConversationStatus;
  assignedAdminId?: string | null;
  lastMessage?: string | null;
  lastMessageAt?: string | null;
  unreadForAdmin: number;
  unreadForVisitor: number;
  liveChatStartedAt: string;
  createdAt: string;
  updatedAt: string;
  closedAt?: string | null;
};

export type SafeMessage = {
  _id: string;
  conversationId: string;
  roomName: string;
  senderType: SenderType;
  senderId: string;
  senderName: string;
  text: string;
  createdAt: string;
};
