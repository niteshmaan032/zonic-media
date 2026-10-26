import nodemailer from "nodemailer";
import { SITE_CONTACT } from "@/shared/siteConfig";

/* ---------------------------------------------------------------------------
   Owner notification mail (26 Oct 2026): one place for the team inbox list
   and the SMTP transport, shared by lead emails (leadsController) and the
   live-chat request alert (liveChatEmail). Owner: rachel@zonicllc.com
   "will receive leads and all its admin email".
--------------------------------------------------------------------------- */

/** Team inboxes copied on every lead and live-chat alert, besides
    MAIL_TO_OWNER (or the site contact email). */
export const OWNER_LEAD_CC_EMAILS = [
  "man2k19ish@gmail.com",
  "samrunads@gmail.com",
  "josef@zonicllc.com",
  "rachel@zonicllc.com",
];

export const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE !== "false";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const connectionTimeout = Number(
    process.env.SMTP_CONNECTION_TIMEOUT_MS ?? "15000",
  );
  const greetingTimeout = Number(
    process.env.SMTP_GREETING_TIMEOUT_MS ?? "10000",
  );
  const socketTimeout = Number(process.env.SMTP_SOCKET_TIMEOUT_MS ?? "20000");

  if (!host || !user || !pass) {
    throw new Error("SMTP env variables are not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    connectionTimeout,
    greetingTimeout,
    socketTimeout,
    auth: {
      user,
      pass,
    },
  });
};

export const getMailConfig = () => {
  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER;
  const ownerEmail = process.env.MAIL_TO_OWNER ?? SITE_CONTACT.email;

  if (!from) {
    throw new Error("MAIL_FROM or SMTP_USER must be configured.");
  }

  return { from, ownerEmail };
};

/** The CC list without the main recipient and without duplicates. */
export const getOwnerLeadCcEmails = (ownerEmail: string) =>
  OWNER_LEAD_CC_EMAILS.filter(
    (email, index, emails) =>
      email.toLowerCase() !== ownerEmail.toLowerCase() &&
      emails.findIndex((item) => item.toLowerCase() === email.toLowerCase()) ===
        index,
  );
