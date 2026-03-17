import nodemailer from "nodemailer";
import { SITE_CONTACT } from "@/shared/siteConfig";

export type LeadPayload = {
  fullName: string;
  email: string;
  contact: string;
  message: string;
  services: string[];
};

const getTransporter = () => {
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

const toServicesText = (services: string[]) =>
  services.length > 0 ? services.join(", ") : "Not provided";

const getMailConfig = () => {
  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER;
  const ownerEmail = process.env.MAIL_TO_OWNER ?? SITE_CONTACT.email;

  if (!from) {
    throw new Error("MAIL_FROM or SMTP_USER must be configured.");
  }

  return { from, ownerEmail };
};

export const sendOwnerLeadEmail = async (payload: LeadPayload) => {
  const transporter = getTransporter();
  const { from, ownerEmail } = getMailConfig();

  const { fullName, email, contact, message, services } = payload;
  const servicesText = toServicesText(services);

  await transporter.sendMail({
    from,
    to: ownerEmail,
    subject: `New Lead: ${fullName}`,
    text: [
      "You received a new lead from the contact form.",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Contact: ${contact}`,
      `Services: ${servicesText}`,
      `Message: ${message}`,
    ].join("\n"),
  });
};

export const sendUserThankYouEmail = async (payload: LeadPayload) => {
  const transporter = getTransporter();
  const { from } = getMailConfig();
  const { fullName, email, contact, message, services } = payload;
  const servicesText = toServicesText(services);

  await transporter.sendMail({
    from,
    to: email,
    subject: "Thank you for contacting Zonic Media",
    text: [
      `Hi ${fullName},`,
      "",
      "Thanks for contacting Zonic Media. We received your request and will get back to you shortly.",
      "",
      "Your submitted details:",
      `Contact: ${contact}`,
      `Services: ${servicesText}`,
      `Message: ${message}`,
      "",
      "Regards,",
      "Zonic Media",
    ].join("\n"),
  });
};

export const createLead = async (payload: LeadPayload) => {
  await sendOwnerLeadEmail(payload);

  return {
    success: true,
    message: "Lead email sent successfully.",
  };
};
