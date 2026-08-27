import nodemailer from "nodemailer";
import { SITE_CONTACT } from "@/shared/siteConfig";

export type LeadPayload = {
  formType?: string;
  sourcePage?: string;
  pageUrl?: string;
  fullName: string;
  email: string;
  contact: string;
  businessName?: string;
  message: string;
  services: string[];
  smsConsent?: boolean;
};

const OWNER_LEAD_CC_EMAILS = [
  "man2k19ish@gmail.com",
  "samrunads@gmail.com",
  "josef@zonicllc.com",
];

const GMB_REINSTATEMENT_TEMPLATE_PAGES = new Set([
  "/services/gmb-reinstatement-help",
  "/gmb-reinstatement-service-agency",
]);

const GMB_OPTIMIZATION_TEMPLATE_PAGES = new Set([
  "/services/gmb-optimization",
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

// Builds the shared, on-brand thank-you email (both text and HTML) so each
// new service page can send a tailored message without duplicating markup.
const buildBrandedThankYouEmail = ({
  subject,
  headerTag,
  greetingName,
  bodyParagraphs,
  signatureRole,
  disclaimer,
  accentColor = "#e8401c",
  ctaButton,
}: {
  subject: string;
  headerTag: string;
  greetingName: string;
  bodyParagraphs: string[];
  signatureRole: string;
  disclaimer: string;
  accentColor?: string;
  /** Optional booking/action button rendered between the body and call line. */
  ctaButton?: { label: string; href: string };
}) => {
  const closingLine = `If you'd like to speak with a specialist right away, feel free to call us at ${SITE_CONTACT.phoneDisplay}.`;

  const text = [
    `Hi ${greetingName},`,
    "",
    ...bodyParagraphs.flatMap((paragraph) => [paragraph, ""]),
    ...(ctaButton ? [`${ctaButton.label}: ${ctaButton.href}`, ""] : []),
    closingLine,
    "",
    "Talk soon,",
    "The Zonic Media Team",
    signatureRole,
    `${SITE_CONTACT.email} | ${SITE_CONTACT.phoneDisplay}`,
  ].join("\n");

  const safeGreeting = escapeHtml(greetingName);
  const paragraphsHtml = bodyParagraphs
    .map(
      (paragraph) =>
        `<p style="font-size:15px; color:#333; margin:0 0 18px; line-height:1.8;">${escapeHtml(paragraph)}</p>`,
    )
    .join("\n            ");
  const ctaButtonHtml = ctaButton
    ? `<table cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
              <tr>
                <td style="border-radius:8px; background:${accentColor};">
                  <a href="${ctaButton.href}" style="display:inline-block; padding:14px 26px; font-size:14px; font-weight:700; color:#ffffff; text-decoration:none; border-radius:8px;">${escapeHtml(ctaButton.label)}</a>
                </td>
              </tr>
            </table>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0; padding:0; background:#f4f2ee; font-family: Arial, sans-serif; font-size:16px; color:#1a1a1a;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f2ee; padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid rgba(0,0,0,0.08);">
        <tr>
          <td style="padding:28px 40px 24px; border-bottom:1px solid #f0ede8;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td><span style="font-size:20px; font-weight:800; color:#0d0d0d; letter-spacing:-0.5px;"><span style="color:${accentColor};">Zonic</span>Media</span></td>
                <td align="right"><span style="font-size:11px; color:#999;">${escapeHtml(headerTag)}</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 40px 32px;">
            <p style="font-size:15px; color:#1a1a1a; margin:0 0 20px; line-height:1.6;">Hi <strong>${safeGreeting}</strong>,</p>
            ${paragraphsHtml}
            ${ctaButtonHtml}
            <p style="font-size:15px; color:#333; margin:0 0 32px; line-height:1.8;">If you'd like to speak with a specialist right away, feel free to call us at <a href="${SITE_CONTACT.phoneHref}" style="color:${accentColor}; font-weight:700; text-decoration:none;">${SITE_CONTACT.phoneDisplay}</a>.</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;"><tr><td style="height:1px; background:#f0ede8;"></td></tr></table>
            <p style="font-size:15px; color:#333; margin:0 0 6px; line-height:1.7;">Talk soon,</p>
            <p style="font-size:15px; font-weight:700; color:#0d0d0d; margin:0 0 4px;">The Zonic Media Team</p>
            <p style="font-size:13px; color:#888; margin:0 0 16px; line-height:1.6;">${escapeHtml(signatureRole)}</p>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right:12px;"><a href="${SITE_CONTACT.emailHref}" style="font-size:13px; color:#555; text-decoration:none;">${escapeHtml(SITE_CONTACT.email)}</a></td>
                <td style="color:#ddd; font-size:13px; padding-right:12px;">|</td>
                <td><a href="${SITE_CONTACT.phoneHref}" style="font-size:13px; color:#555; text-decoration:none;">${SITE_CONTACT.phoneDisplay}</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 40px; background:#f9f7f3; border-top:1px solid #f0ede8;">
            <p style="font-size:11px; color:#ccc; margin:0; line-height:1.7; text-align:center;">${escapeHtml(disclaimer)}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  return { text, html };
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

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getFirstName = (fullName: string) => {
  const [firstName] = fullName.trim().split(/\s+/);
  return firstName || fullName;
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

  const {
    fullName,
    email,
    contact,
    businessName,
    message,
    services,
    smsConsent,
    pageUrl,
  } = payload;
  const servicesText = toServicesText(services);

  await transporter.sendMail({
    from,
    to: ownerEmail,
    cc: getOwnerLeadCcEmails(ownerEmail),
    subject: `New Lead: ${fullName}`,
    text: [
      "You received a new lead from the contact form.",
      "",
      `Page URL: ${pageUrl || "Not provided"}`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Contact: ${contact}`,
      `Business Name: ${businessName || "Not provided"}`,
      `Services: ${servicesText}`,
      `Message: ${message}`,
      ...(smsConsent ? ["", `${fullName} has opted for the SMS service.`] : []),
    ].join("\n"),
  });
};

export const sendUserThankYouEmail = async (payload: LeadPayload) => {
  const transporter = getTransporter();
  const { from } = getMailConfig();
  const {
    formType,
    sourcePage,
    fullName,
    email,
    contact,
    businessName,
    message,
    services,
  } = payload;
  const servicesText = toServicesText(services);

  if (
    formType === "gmb-reinstatement" &&
    GMB_REINSTATEMENT_TEMPLATE_PAGES.has(sourcePage ?? "")
  ) {
    const firstName = escapeHtml(getFirstName(fullName));
    const safeBusinessName = escapeHtml(
      businessName?.trim() || "your business",
    );

    await transporter.sendMail({
      from,
      to: email,
      subject: "Your GMB Case is Being Reviewed - Zonic Media",
      text: [
        `Hi ${getFirstName(fullName)},`,
        "",
        `Thank you for reaching out to Zonic Media. We've received your GMB suspension audit request for ${businessName?.trim() || "your business"} and our team is already on it. One of our GMB suspension experts will call or email you shortly.`,
        "",
        "We know how stressful a suspended listing feels. You've come to the right place. Our veteran specialists will review your case and get back to you with a clear action plan, fast.",
        "",
        `If you'd like to speak with an expert right away, feel free to call us at ${SITE_CONTACT.phoneDisplay}.`,
        "",
        "Talk soon,",
        "The Zonic Media Team",
        "GMB Suspension & Local Growth Specialists",
        `${SITE_CONTACT.email} | ${SITE_CONTACT.phoneDisplay}`,
      ].join("\n"),
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Your GMB Case is Being Reviewed - Zonic Media</title>
</head>
<body style="margin:0; padding:0; background:#f4f2ee; font-family: Arial, sans-serif; font-size:16px; color:#1a1a1a;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f2ee; padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid rgba(0,0,0,0.08);">
        <tr>
          <td style="padding:28px 40px 24px; border-bottom:1px solid #f0ede8;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td><span style="font-size:20px; font-weight:800; color:#0d0d0d; letter-spacing:-0.5px;"><span style="color:#fdc115;">Zonic</span>Media</span></td>
                <td align="right"><span style="font-size:11px; color:#999;">GMB Suspension Specialists</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 40px 32px;">
            <p style="font-size:15px; color:#1a1a1a; margin:0 0 20px; line-height:1.6;">Hi <strong>${firstName}</strong>,</p>
            <p style="font-size:15px; color:#333; margin:0 0 18px; line-height:1.8;">Thank you for reaching out to Zonic Media. We've received your GMB suspension audit request for <strong>${safeBusinessName}</strong> and our team is already on it. One of our GMB suspension experts will call or email you shortly.</p>
            <p style="font-size:15px; color:#333; margin:0 0 18px; line-height:1.8;">We know how stressful a suspended listing feels - the lost calls, the missing walk-ins, the confusion. You've come to the right place. Our veteran specialists will review your case and get back to you with a clear action plan, fast.</p>
            <p style="font-size:15px; color:#333; margin:0 0 32px; line-height:1.8;">If you'd like to speak with an expert right away, feel free to call us at <a href="${SITE_CONTACT.phoneHref}" style="color:#fdc115; font-weight:700; text-decoration:none;">${SITE_CONTACT.phoneDisplay}</a>.</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;"><tr><td style="height:1px; background:#f0ede8;"></td></tr></table>
            <p style="font-size:15px; color:#333; margin:0 0 6px; line-height:1.7;">Talk soon,</p>
            <p style="font-size:15px; font-weight:700; color:#0d0d0d; margin:0 0 4px;">The Zonic Media Team</p>
            <p style="font-size:13px; color:#888; margin:0 0 16px; line-height:1.6;">GMB Suspension &amp; Local Growth Specialists</p>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right:12px;"><a href="${SITE_CONTACT.emailHref}" style="font-size:13px; color:#555; text-decoration:none;">${escapeHtml(SITE_CONTACT.email)}</a></td>
                <td style="color:#ddd; font-size:13px; padding-right:12px;">|</td>
                <td><a href="${SITE_CONTACT.phoneHref}" style="font-size:13px; color:#555; text-decoration:none;">${SITE_CONTACT.phoneDisplay}</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 40px; background:#f9f7f3; border-top:1px solid #f0ede8;">
            <p style="font-size:11px; color:#ccc; margin:0; line-height:1.7; text-align:center;">Zonic Media is an independent GMB specialist agency, not affiliated with Google.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`,
    });

    return;
  }

  if (
    formType === "gmb-reinstatement" &&
    sourcePage === "/services/gmb-verification-help"
  ) {
    const firstName = escapeHtml(getFirstName(fullName));
    const plainBusinessName = businessName?.trim() || "your business";
    const safeBusinessName = escapeHtml(plainBusinessName);

    await transporter.sendMail({
      from,
      to: email,
      subject: "Your GMB Verification Request - Zonic Media",
      text: [
        `Hi ${getFirstName(fullName)},`,
        "",
        `Thank you for reaching out to Zonic Media. We've received your GMB verification request for ${plainBusinessName} and our team is already reviewing it. One of our Google Business Profile verification specialists will call or email you shortly.`,
        "",
        "We understand how frustrating verification issues can be - whether your postcard isn't arriving, your video verification keeps getting rejected, or your phone and email options simply aren't showing up. Every day your profile stays unverified is a day you're invisible on Google Maps. You've come to the right place. Our specialists know exactly how to get your profile verified and live, fast.",
        "",
        "If you'd like to speak with a specialist right away, feel free to call us at 302-726-9736.",
        "",
        "Talk soon,",
        "The Zonic Media Team",
        "GMB Verification & Local Growth Specialists",
        `${SITE_CONTACT.email} | 302-726-9736`,
      ].join("\n"),
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Your GMB Verification Request &mdash; Zonic Media</title>
</head>
<body style="margin:0; padding:0; background:#f4f2ee; font-family: Arial, sans-serif; font-size:16px; color:#1a1a1a;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f2ee; padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid rgba(0,0,0,0.08);">
        <tr>
          <td style="padding:28px 40px 24px; border-bottom:1px solid #f0ede8;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td><span style="font-size:20px; font-weight:800; color:#0d0d0d; letter-spacing:-0.5px;"><span style="color:#e8401c;">Zonic</span>Media</span></td>
                <td align="right"><span style="font-size:11px; color:#999;">GMB Verification Specialists</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 40px 32px;">
            <p style="font-size:15px; color:#1a1a1a; margin:0 0 20px; line-height:1.6;">Hi <strong>${firstName}</strong>,</p>
            <p style="font-size:15px; color:#333; margin:0 0 18px; line-height:1.8;">Thank you for reaching out to Zonic Media. We've received your GMB verification request for <strong>${safeBusinessName}</strong> and our team is already reviewing it. One of our Google Business Profile verification specialists will call or email you shortly.</p>
            <p style="font-size:15px; color:#333; margin:0 0 18px; line-height:1.8;">We understand how frustrating verification issues can be &mdash; whether your postcard isn't arriving, your video verification keeps getting rejected, or your phone and email options simply aren't showing up. Every day your profile stays unverified is a day you're invisible on Google Maps. You've come to the right place. Our specialists know exactly how to get your profile verified and live, fast.</p>
            <p style="font-size:15px; color:#333; margin:0 0 32px; line-height:1.8;">If you'd like to speak with a specialist right away, feel free to call us at <a href="${SITE_CONTACT.phoneHref}" style="color:#e8401c; font-weight:700; text-decoration:none;">302-726-9736</a>.</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;"><tr><td style="height:1px; background:#f0ede8;"></td></tr></table>
            <p style="font-size:15px; color:#333; margin:0 0 6px; line-height:1.7;">Talk soon,</p>
            <p style="font-size:15px; font-weight:700; color:#0d0d0d; margin:0 0 4px;">The Zonic Media Team</p>
            <p style="font-size:13px; color:#888; margin:0 0 16px; line-height:1.6;">GMB Verification &amp; Local Growth Specialists</p>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right:12px;"><a href="${SITE_CONTACT.emailHref}" style="font-size:13px; color:#555; text-decoration:none;">&#9993; ${escapeHtml(SITE_CONTACT.email)}</a></td>
                <td style="color:#ddd; font-size:13px; padding-right:12px;">|</td>
                <td><a href="${SITE_CONTACT.phoneHref}" style="font-size:13px; color:#555; text-decoration:none;">&#9742; 302-726-9736</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 40px; background:#f9f7f3; border-top:1px solid #f0ede8;">
            <p style="font-size:11px; color:#ccc; margin:0; line-height:1.7; text-align:center;">Zonic Media is an independent GMB specialist agency, not affiliated with Google.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`,
    });

    return;
  }

  if (
    formType === "gmb-reinstatement" &&
    GMB_OPTIMIZATION_TEMPLATE_PAGES.has(sourcePage ?? "")
  ) {
    const firstName = escapeHtml(getFirstName(fullName));
    const plainBusinessName = businessName?.trim() || "your business";
    const safeBusinessName = escapeHtml(plainBusinessName);

    await transporter.sendMail({
      from,
      to: email,
      subject: "Your GMB Optimization Request - Zonic Media",
      text: [
        `Hi ${getFirstName(fullName)},`,
        "",
        `Thank you for reaching out to Zonic Media. We've received your GMB Optimization inquiry for ${plainBusinessName} and our team is already reviewing it. One of our Google Business Profile optimization specialists will call or email you shortly.`,
        "",
        "Having a Google Business Profile and having one that actually ranks, converts, and drives real customers are two very different things. If your listing isn't showing up in the Google Maps 3-Pack, not getting enough calls, or simply not turning profile views into customers - it almost always comes down to how well your profile is optimized. Wrong categories, weak keywords, missing photos, no posts, and an untouched Q&A section are the most common culprits. Our specialists know exactly what Google's algorithm responds to and will fine-tune every element of your profile to fix it.",
        "",
        "If you'd like to speak with a specialist right away, feel free to call us at 302-726-9736.",
        "",
        "Talk soon,",
        "The Zonic Media Team",
        "GMB Optimization & Local Growth Specialists",
        `${SITE_CONTACT.email} | 302-726-9736`,
      ].join("\n"),
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<title>Your GMB Optimization Request &mdash; Zonic Media</title>
</head>
<body style="margin:0; padding:0; background:#f4f2ee; font-family: Arial, sans-serif; font-size:16px; color:#1a1a1a;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f2ee; padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid rgba(0,0,0,0.08);">
        <tr>
          <td style="padding:28px 40px 24px; border-bottom:1px solid #f0ede8;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td><span style="font-size:20px; font-weight:800; color:#0d0d0d; letter-spacing:-0.5px;"><span style="color:#e8401c;">Zonic</span>Media</span></td>
                <td align="right"><span style="font-size:11px; color:#999;">GMB Optimization Specialists</span></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 40px 32px;">
            <p style="font-size:15px; color:#1a1a1a; margin:0 0 20px; line-height:1.6;">Hi <strong>${firstName}</strong>,</p>
            <p style="font-size:15px; color:#333; margin:0 0 18px; line-height:1.8;">Thank you for reaching out to Zonic Media. We've received your GMB Optimization inquiry for <strong>${safeBusinessName}</strong> and our team is already reviewing it. One of our Google Business Profile optimization specialists will call or email you shortly.</p>
            <p style="font-size:15px; color:#333; margin:0 0 18px; line-height:1.8;">Having a Google Business Profile and having one that actually ranks, converts, and drives real customers are two very different things. If your listing isn't showing up in the Google Maps 3-Pack, not getting enough calls, or simply not turning profile views into customers &mdash; it almost always comes down to how well your profile is optimized. Wrong categories, weak keywords, missing photos, no posts, and an untouched Q&amp;A section are the most common culprits. Our specialists know exactly what Google's algorithm responds to and will fine-tune every element of your profile to fix it.</p>
            <p style="font-size:15px; color:#333; margin:0 0 32px; line-height:1.8;">If you'd like to speak with a specialist right away, feel free to call us at <a href="${SITE_CONTACT.phoneHref}" style="color:#e8401c; font-weight:700; text-decoration:none;">302-726-9736</a>.</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;"><tr><td style="height:1px; background:#f0ede8;"></td></tr></table>
            <p style="font-size:15px; color:#333; margin:0 0 6px; line-height:1.7;">Talk soon,</p>
            <p style="font-size:15px; font-weight:700; color:#0d0d0d; margin:0 0 4px;">The Zonic Media Team</p>
            <p style="font-size:13px; color:#888; margin:0 0 16px; line-height:1.6;">GMB Optimization &amp; Local Growth Specialists</p>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right:12px;"><a href="${SITE_CONTACT.emailHref}" style="font-size:13px; color:#555; text-decoration:none;">&#9993; ${escapeHtml(SITE_CONTACT.email)}</a></td>
                <td style="color:#ddd; font-size:13px; padding-right:12px;">|</td>
                <td><a href="${SITE_CONTACT.phoneHref}" style="font-size:13px; color:#555; text-decoration:none;">&#9742; 302-726-9736</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 40px; background:#f9f7f3; border-top:1px solid #f0ede8;">
            <p style="font-size:11px; color:#ccc; margin:0; line-height:1.7; text-align:center;">Zonic Media is an independent GMB specialist agency, not affiliated with Google.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`,
    });

    return;
  }

  // Free website launch-offer landing page.
  if (formType === "free-website-design") {
    const businessLabel = businessName?.trim() || "your business";
    const subject = "Your Free Website Request Is Being Reviewed - Zonic Media";
    const { text, html } = buildBrandedThankYouEmail({
      subject,
      accentColor: "#2167f5",
      headerTag: "Website Launch Offer",
      greetingName: getFirstName(fullName),
      bodyParagraphs: [
        `Thank you for claiming the Zonic website launch offer. We've received the eligibility request for ${businessLabel} and our team is already reviewing your industry, market, and growth goals.`,
        "One of our specialists will call or email you shortly with your eligibility result and a written proposal covering the website scope, the qualifying marketing plan, and clear terms - no surprises.",
      ],
      ctaButton: {
        label: "Book a Call With Zonic",
        href: "https://www.zonicllc.com/contact-us",
      },
      signatureRole: "Websites & Local Growth Specialists",
      disclaimer:
        "You're receiving this email because you requested the free website offer at zonicllc.com.",
    });

    await transporter.sendMail({ from, to: email, subject, text, html });
    return;
  }

  // Industry marketing-agency landing pages (formType === page slug).
  const industryTemplate = INDUSTRY_MARKETING_TEMPLATES[formType ?? ""];
  if (industryTemplate) {
    const businessLabel =
      businessName?.trim() || `your ${industryTemplate.biz}`;
    const subject = `Your Free ${industryTemplate.label} Audit Is Underway - Zonic Media`;
    const { text, html } = buildBrandedThankYouEmail({
      subject,
      accentColor: "#f97316",
      headerTag: `${industryTemplate.label} Specialists`,
      greetingName: getFirstName(fullName),
      bodyParagraphs: [
        `Thank you for reaching out to Zonic Media. We've received your free marketing audit request for ${businessLabel} and our team is already digging into it. One of our ${industryTemplate.adj} marketing specialists will call or email you shortly.`,
        `Whether you're after more qualified leads, higher rankings in the Google Map Pack, better-performing Google Ads, or a website that actually converts, we'll pinpoint exactly where your ${industryTemplate.biz} is leaving money on the table and give you a clear, no-fluff plan to fix it.`,
      ],
      signatureRole: `${industryTemplate.label} & Local Growth Specialists`,
      disclaimer:
        "You're receiving this email because you requested a free marketing audit at zonicllc.com.",
    });

    await transporter.sendMail({ from, to: email, subject, text, html });
    return;
  }

  // Google Business Profile services for real estate agents & brokers.
  if (formType === "gbp-real-estate") {
    const businessLabel = businessName?.trim() || "your brokerage";
    const subject = "Your Real Estate GBP Audit Is Underway - Zonic Media";
    const { text, html } = buildBrandedThankYouEmail({
      subject,
      accentColor: "#e8401c",
      headerTag: "Real Estate GBP Specialists",
      greetingName: getFirstName(fullName),
      bodyParagraphs: [
        `Thank you for reaching out to Zonic Media. We've received your Google Business Profile audit request for ${businessLabel} and our team is already reviewing it. One of our real estate GBP specialists will call or email you shortly.`,
        "Real estate has the highest GBP suspension rate of any local service category, and one wrong edit can wipe your listing off Google Maps overnight. Your five-page audit covers your current profile status, suspension risk, and a written reinstatement plan if you're suspended, delivered within five business days.",
      ],
      signatureRole: "GMB Suspension & Real Estate Growth Specialists",
      disclaimer:
        "Zonic Media is an independent GMB specialist agency, not affiliated with Google.",
    });

    await transporter.sendMail({ from, to: email, subject, text, html });
    return;
  }

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
