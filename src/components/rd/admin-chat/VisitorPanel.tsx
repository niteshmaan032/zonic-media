"use client";

import { FiExternalLink, FiMail, FiPhone } from "react-icons/fi";
import type { SafeConversation } from "@/shared/chatTypes";
import { STATUS_META, elapsed, formatDate, initial } from "./util";

/* Visitor details column (admin live chat redesign, 26 Oct 2026). */

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="tw:border-b tw:border-(--line) tw:py-3 tw:last:border-0">
      <span className="tw:block tw:text-[11.5px] tw:font-semibold tw:tracking-[0.06em] tw:text-(--muted) tw:uppercase">
        {label}
      </span>
      <span className="tw:mt-1 tw:block tw:text-[14px] tw:break-words tw:text-(--ink)">{children}</span>
    </div>
  );
}

export default function VisitorPanel({
  conversation,
  now,
}: {
  conversation: SafeConversation;
  now: number;
}) {
  const meta = STATUS_META[conversation.status];
  const topic = [conversation.service, conversation.subService].filter(Boolean).join(" › ");
  return (
    <div className="ac-scroll tw:h-full tw:overflow-y-auto tw:p-5">
      <div className="tw:text-center">
        <span className="tw:mx-auto tw:grid tw:size-16 tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[24px] tw:font-semibold tw:text-white">
          {initial(conversation.name)}
        </span>
        <b className="tw:mt-3 tw:block tw:text-[17px] tw:font-semibold">{conversation.name}</b>
        <span className={`tw:mt-2 tw:inline-block tw:rounded-full tw:px-2.5 tw:py-0.5 tw:text-[11.5px] tw:font-semibold ${meta.cls}`}>
          {meta.label}
        </span>
      </div>

      <div className="tw:mt-4 tw:grid tw:grid-cols-2 tw:gap-2">
        {conversation.email ? (
          <a
            href={`mailto:${conversation.email}`}
            className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[13px] tw:font-semibold tw:text-(--ink) tw:no-underline tw:hover:bg-(--blue-soft)"
          >
            <FiMail aria-hidden="true" /> Email
          </a>
        ) : (
          <span />
        )}
        {conversation.phone ? (
          <a
            href={`tel:${conversation.phone}`}
            className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[13px] tw:font-semibold tw:text-(--ink) tw:no-underline tw:hover:bg-(--blue-soft)"
          >
            <FiPhone aria-hidden="true" /> Call
          </a>
        ) : null}
      </div>

      <div className="tw:mt-4 tw:rounded-[16px] tw:bg-white tw:px-4 tw:ring-1 tw:ring-(--line)">
        {conversation.email && <Row label="Email">{conversation.email}</Row>}
        {conversation.phone && <Row label="Phone">{conversation.phone}</Row>}
        <Row label="Topic">{topic || "General question"}</Row>
        {conversation.sourcePage && (
          <Row label="Page">
            <a
              href={conversation.sourcePage}
              target="_blank"
              rel="noopener noreferrer"
              className="tw:inline-flex tw:items-center tw:gap-1 tw:text-(--blue) tw:no-underline tw:hover:underline"
            >
              {conversation.sourcePage.replace(/^https?:\/\/(www\.)?zonicllc\.com/, "") || "/"}
              <FiExternalLink className="tw:size-3" aria-hidden="true" />
            </a>
          </Row>
        )}
        <Row label="Requested">{formatDate(conversation.liveChatStartedAt)}</Row>
        {conversation.status === "waiting_agent" ? (
          <Row label="Waiting for">{elapsed(conversation.liveChatStartedAt, now)}</Row>
        ) : conversation.acceptedAt ? (
          <Row label="Accepted">
            {formatDate(conversation.acceptedAt)}
            {conversation.assignedAdminName ? ` · ${conversation.assignedAdminName}` : ""}
          </Row>
        ) : null}
        {conversation.closedAt && <Row label="Closed">{formatDate(conversation.closedAt)}</Row>}
      </div>
    </div>
  );
}
