import nodemailer from "nodemailer";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildOwnerLeadEmail,
  buildThankYouEmail,
  getFirstName,
  hasVisitorEmail,
  type LeadDetail,
} from "@/backend/lib/leadEmailTemplates";

export type LeadPayload = {
  formType?: string;
  sourcePage?: string;
  pageUrl?: string;
  fullName: string;
  email: string;
  contact: string;
  businessName?: string;
  /** Only what the visitor typed into a message field; may be empty. */
  message: string;
  /** Only services the visitor picked; empty when the form has no picker. */
  services: string[];
  /** The visitor's answers to the form's other fields, e.g. budget or goal. */
  details?: LeadDetail[];
  smsConsent?: boolean;
};

const OWNER_LEAD_CC_EMAILS = [
  "man2k19ish@gmail.com",
  "samrunads@gmail.com",
  "josef@zonicllc.com",
];

const GMB_REINSTATEMENT_TEMPLATE_PAGES = new Set([
  "/services/gbp-reinstatement-service",
  "/services/gmb-reinstatement-help", // old path, still in cached pages/forms
]);

const GMB_OPTIMIZATION_TEMPLATE_PAGES = new Set([
  "/local-seo-google-business-optimization",
  "/local-seo-google-business-optimization",
]);

// Per-industry copy for the marketing-agency landing pages built from
// src/data/industryMarketingPages.generated.json. Keyed by the form's
// `formType`, which is the page slug (see IndustryMarketingLeadForm).
// `adj` reads in "our {adj} marketing specialists"; `biz` reads in
// "your {biz}".
const INDUSTRY_MARKETING_TEMPLATES: Record<
  string,
  { label: string; adj: string; biz: string }
> = {
  "auto-repair-marketing-agency": {
    label: "Auto Repair Marketing",
    adj: "auto repair",
    biz: "auto repair shop",
  },
  "chiropractic-marketing-agency": {
    label: "Chiropractic Marketing",
    adj: "chiropractic",
    biz: "chiropractic practice",
  },
  "cleaning-company-marketing-agency": {
    label: "Cleaning Company Marketing",
    adj: "cleaning company",
    biz: "cleaning company",
  },
  "dental-marketing-agency": {
    label: "Dental Marketing",
    adj: "dental",
    biz: "dental practice",
  },
  "electrician-marketing-agency": {
    label: "Electrician Marketing",
    adj: "electrician",
    biz: "electrical business",
  },
  "garage-door-marketing-agency": {
    label: "Garage Door Marketing",
    adj: "garage door",
    biz: "garage door business",
  },
  "landscaping-marketing-agency": {
    label: "Landscaping Marketing",
    adj: "landscaping",
    biz: "landscaping business",
  },
  "law-firm-marketing-agency": {
    label: "Law Firm Marketing",
    adj: "law firm",
    biz: "law firm",
  },
  "moving-company-marketing-agency": {
    label: "Moving Company Marketing",
    adj: "moving company",
    biz: "moving company",
  },
  "painting-contractor-marketing-agency": {
    label: "Painting Contractor Marketing",
    adj: "painting",
    biz: "painting business",
  },
  "pest-control-marketing-agency": {
    label: "Pest Control Marketing",
    adj: "pest control",
    biz: "pest control business",
  },
  "real-estate-marketing-agency": {
    label: "Real Estate Marketing",
    adj: "real estate",
    biz: "real estate business",
  },
  "roofing-marketing-agency": {
    label: "Roofing Marketing",
    adj: "roofing",
    biz: "roofing business",
  },
  "septic-marketing-agency": {
    label: "Septic Marketing",
    adj: "septic",
    biz: "septic company",
  },
  "solar-marketing-agency": {
    label: "Solar Marketing",
    adj: "solar",
    biz: "solar company",
  },
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

const getMailConfig = () => {
  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER;
  const ownerEmail = process.env.MAIL_TO_OWNER ?? SITE_CONTACT.email;

  if (!from) {
    throw new Error("MAIL_FROM or SMTP_USER must be configured.");
  }

  return { from, ownerEmail };
};

const getOwnerLeadCcEmails = (ownerEmail: string) =>
  OWNER_LEAD_CC_EMAILS.filter(
    (email, index, emails) =>
      email.toLowerCase() !== ownerEmail.toLowerCase() &&
      emails.findIndex((item) => item.toLowerCase() === email.toLowerCase()) ===
        index,
  );

export const sendOwnerLeadEmail = async (payload: LeadPayload) => {
  const transporter = getTransporter();
  const { from, ownerEmail } = getMailConfig();
  const { subject, text, html } = buildOwnerLeadEmail(payload);

  await transporter.sendMail({
    from,
    to: ownerEmail,
    cc: getOwnerLeadCcEmails(ownerEmail),
    ...(hasVisitorEmail(payload) ? { replyTo: payload.email } : {}),
    subject,
    text,
    html,
  });
};

type ThankYouContent = {
  subject: string;
  headerTag: string;
  bodyParagraphs: string[];
  signatureRole: string;
  disclaimer: string;
  accentColor?: string;
  ctaButton?: { label: string; href: string };
};

const GMB_DISCLAIMER =
  "Zonic Media is an independent GMB specialist agency, not affiliated with Google.";

// Picks the copy for the visitor's confirmation email based on which form
// they submitted. Layout and the submitted-details summary are shared.
const getThankYouContent = (payload: LeadPayload): ThankYouContent => {
  const { formType, sourcePage, businessName } = payload;
  const business = businessName?.trim();

  if (
    formType === "gmb-reinstatement" &&
    GMB_REINSTATEMENT_TEMPLATE_PAGES.has(sourcePage ?? "")
  ) {
    return {
      subject: "Your GMB Case is Being Reviewed - Zonic Media",
      headerTag: "GMB Suspension Specialists",
      bodyParagraphs: [
        `Thank you for reaching out to Zonic Media. We've received your GMB suspension audit request for ${business ? `**${business}**` : "your business"} and our team is already on it. One of our GMB suspension experts will call or email you shortly.`,
        "We know how stressful a suspended listing feels - the lost calls, the missing walk-ins, the confusion. You've come to the right place. Our veteran specialists will review your case and get back to you with a clear action plan, fast.",
      ],
      signatureRole: "GMB Suspension & Local Growth Specialists",
      disclaimer: GMB_DISCLAIMER,
    };
  }

  if (
    formType === "gmb-reinstatement" &&
    sourcePage === "/services/gmb-verification-help"
  ) {
    return {
      subject: "Your GMB Verification Request - Zonic Media",
      headerTag: "GMB Verification Specialists",
      accentColor: "#e8401c",
      bodyParagraphs: [
        `Thank you for reaching out to Zonic Media. We've received your GMB verification request for ${business ? `**${business}**` : "your business"} and our team is already reviewing it. One of our Google Business Profile verification specialists will call or email you shortly.`,
        "We understand how frustrating verification issues can be - whether your postcard isn't arriving, your video verification keeps getting rejected, or your phone and email options simply aren't showing up. Every day your profile stays unverified is a day you're invisible on Google Maps. You've come to the right place. Our specialists know exactly how to get your profile verified and live, fast.",
      ],
      signatureRole: "GMB Verification & Local Growth Specialists",
      disclaimer: GMB_DISCLAIMER,
    };
  }

  if (
    formType === "gmb-reinstatement" &&
    GMB_OPTIMIZATION_TEMPLATE_PAGES.has(sourcePage ?? "")
  ) {
    return {
      subject: "Your GMB Optimization Request - Zonic Media",
      headerTag: "GMB Optimization Specialists",
      accentColor: "#e8401c",
      bodyParagraphs: [
        `Thank you for reaching out to Zonic Media. We've received your GMB Optimization inquiry for ${business ? `**${business}**` : "your business"} and our team is already reviewing it. One of our Google Business Profile optimization specialists will call or email you shortly.`,
        "Having a Google Business Profile and having one that actually ranks, converts, and drives real customers are two very different things. If your listing isn't showing up in the Google Maps 3-Pack, not getting enough calls, or simply not turning profile views into customers - it almost always comes down to how well your profile is optimized. Wrong categories, weak keywords, missing photos, no posts, and an untouched Q&A section are the most common culprits. Our specialists know exactly what Google's algorithm responds to and will fine-tune every element of your profile to fix it.",
      ],
      signatureRole: "GMB Optimization & Local Growth Specialists",
      disclaimer: GMB_DISCLAIMER,
    };
  }

  // Free website launch-offer landing page.
  if (formType === "free-website-design") {
    return {
      subject: "Your Free Website Request Is Being Reviewed - Zonic Media",
      headerTag: "Website Launch Offer",
      accentColor: "#2167f5",
      bodyParagraphs: [
        `Thank you for claiming the Zonic website launch offer. We've received the eligibility request for ${business ? `**${business}**` : "your business"} and our team is already reviewing your industry, market, and growth goals.`,
        "One of our specialists will call or email you shortly with your eligibility result and a written proposal covering the website scope, the qualifying marketing plan, and clear terms - no surprises.",
      ],
      ctaButton: {
        label: "Book a Call With Zonic",
        href: "https://www.zonicllc.com/contact-us",
      },
      signatureRole: "Websites & Local Growth Specialists",
      disclaimer:
        "You're receiving this email because you requested the free website offer at zonicllc.com.",
    };
  }

  // Industry marketing-agency landing pages (formType === page slug).
  const industryTemplate = INDUSTRY_MARKETING_TEMPLATES[formType ?? ""];
  if (industryTemplate) {
    return {
      subject: `Your Free ${industryTemplate.label} Audit Is Underway - Zonic Media`,
      headerTag: `${industryTemplate.label} Specialists`,
      accentColor: "#f97316",
      bodyParagraphs: [
        `Thank you for reaching out to Zonic Media. We've received your free marketing audit request for ${business ? `**${business}**` : `your ${industryTemplate.biz}`} and our team is already digging into it. One of our ${industryTemplate.adj} marketing specialists will call or email you shortly.`,
        `Whether you're after more qualified leads, higher rankings in the Google Map Pack, better-performing Google Ads, or a website that actually converts, we'll pinpoint exactly where your ${industryTemplate.biz} is leaving money on the table and give you a clear, no-fluff plan to fix it.`,
      ],
      signatureRole: `${industryTemplate.label} & Local Growth Specialists`,
      disclaimer:
        "You're receiving this email because you requested a free marketing audit at zonicllc.com.",
    };
  }

  // Google Business Profile services for real estate agents & brokers.
  if (formType === "gbp-real-estate") {
    return {
      subject: "Your Real Estate GBP Audit Is Underway - Zonic Media",
      headerTag: "Real Estate GBP Specialists",
      accentColor: "#e8401c",
      bodyParagraphs: [
        `Thank you for reaching out to Zonic Media. We've received your Google Business Profile audit request for ${business ? `**${business}**` : "your brokerage"} and our team is already reviewing it. One of our real estate GBP specialists will call or email you shortly.`,
        "Real estate has the highest GBP suspension rate of any local service category, and one wrong edit can wipe your listing off Google Maps overnight. Your five-page audit covers your current profile status, suspension risk, and a written reinstatement plan if you're suspended, delivered within five business days.",
      ],
      signatureRole: "GMB Suspension & Real Estate Growth Specialists",
      disclaimer: GMB_DISCLAIMER,
    };
  }

  return {
    subject: "Thank you for contacting Zonic Media",
    headerTag: "Request Received",
    bodyParagraphs: [
      `Thank you for reaching out to Zonic Media. We've received your request${business ? ` for **${business}**` : ""} and a member of our team will review it and get back to you shortly.`,
      "In the meantime, keep an eye on your inbox and phone. We'll reach out from this email address or from our main line.",
    ],
    signatureRole: "Local Marketing & Growth Specialists",
    disclaimer:
      "You're receiving this email because you submitted a form at zonicllc.com.",
  };
};

export const sendUserThankYouEmail = async (payload: LeadPayload) => {
  if (!hasVisitorEmail(payload)) return;

  const transporter = getTransporter();
  const { from } = getMailConfig();
  const content = getThankYouContent(payload);
  const { text, html } = buildThankYouEmail({
    ...content,
    greetingName: getFirstName(payload.fullName),
    data: payload,
  });

  await transporter.sendMail({
    from,
    to: payload.email,
    subject: content.subject,
    text,
    html,
  });
};

export const createLead = async (payload: LeadPayload) => {
  await sendOwnerLeadEmail(payload);

  return {
    success: true,
    message: "Lead email sent successfully.",
  };
};
