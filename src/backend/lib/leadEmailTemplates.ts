import { SITE_CONTACT } from "@/shared/siteConfig";

// Shared, email-client-safe templates for lead notifications (owner) and
// thank-you confirmations (visitor). Everything is table-based with inline
// styles so it renders consistently in Gmail, Outlook and Apple Mail.

export type LeadDetail = { label: string; value: string };

export type LeadEmailData = {
  formType?: string;
  sourcePage?: string;
  pageUrl?: string;
  fullName: string;
  email: string;
  contact: string;
  businessName?: string;
  message?: string;
  services?: string[];
  details?: LeadDetail[];
  smsConsent?: boolean;
};

const BRAND_ACCENT = "#fdc115";
const SITE_URL = "https://www.zonicllc.com";

export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Escapes the text, then turns **bold** markers into <strong>.
const inlineHtml = (value: string) =>
  escapeHtml(value).replace(
    /\*\*(.+?)\*\*/g,
    '<strong style="color:#111827;">$1</strong>',
  );

const stripBold = (value: string) => value.replace(/\*\*(.+?)\*\*/g, "$1");

export const getFirstName = (fullName: string) => {
  const [firstName] = fullName.trim().split(/\s+/);
  return firstName || fullName;
};

export const formatPhone = (digits: string) => {
  const clean = digits.replace(/\D/g, "");
  if (clean.length === 10) {
    return `(${clean.slice(0, 3)}) ${clean.slice(3, 6)}-${clean.slice(6)}`;
  }
  if (clean.length === 11 && clean.startsWith("1")) {
    return `+1 (${clean.slice(1, 4)}) ${clean.slice(4, 7)}-${clean.slice(7)}`;
  }
  return digits;
};

// Yellow accents need dark button text to stay readable.
const buttonTextColor = (accent: string) =>
  accent.toLowerCase() === BRAND_ACCENT ? "#111827" : "#ffffff";

/**
 * Forms without an email field submit our own address as a placeholder; that
 * is not the visitor's email and must never be shown or replied to.
 */
export const hasVisitorEmail = (data: Pick<LeadEmailData, "email">) =>
  !!data.email && data.email.toLowerCase() !== SITE_CONTACT.email.toLowerCase();

/**
 * Only what the visitor actually entered, in display order. Empty values are
 * dropped so the emails never show "Not provided" or fields the form lacked.
 */
export const getSubmittedFields = (data: LeadEmailData): LeadDetail[] => {
  const fields: LeadDetail[] = [
    { label: "Name", value: data.fullName },
    { label: "Email", value: hasVisitorEmail(data) ? data.email : "" },
    { label: "Phone", value: formatPhone(data.contact) },
    { label: "Business", value: data.businessName ?? "" },
    {
      label: (data.services?.length ?? 0) > 1 ? "Services" : "Service",
      value: (data.services ?? []).join(", "),
    },
    ...(data.details ?? []),
    { label: "Message", value: data.message ?? "" },
  ];

  return fields.filter((field) => field.value.trim().length > 0);
};

const renderFieldRows = (fields: LeadDetail[]) =>
  fields
    .map(
      (field, index) => `<tr>
                      <td valign="top" style="padding:12px 16px;${index > 0 ? " border-top:1px solid #eceef2;" : ""} width:34%; font-size:12px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.4px;">${escapeHtml(field.label)}</td>
                      <td valign="top" style="padding:12px 16px;${index > 0 ? " border-top:1px solid #eceef2;" : ""} font-size:14px; color:#111827; line-height:1.6; word-break:break-word;">${escapeHtml(field.value).replace(/\n/g, "<br>")}</td>
                    </tr>`,
    )
    .join("\n");

const renderFieldsTable = (fields: LeadDetail[]) =>
  fields.length === 0
    ? ""
    : `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e7eb; border-radius:8px; border-collapse:separate; background:#fafafa;">
                    ${renderFieldRows(fields)}
                  </table>`;

const renderButton = (label: string, href: string, accent: string) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table; margin:0 8px 8px 0;">
                    <tr>
                      <td style="border-radius:6px; background:${accent};">
                        <a href="${escapeHtml(href)}" style="display:inline-block; padding:12px 22px; font-size:14px; font-weight:700; color:${buttonTextColor(accent)}; text-decoration:none; border-radius:6px;">${escapeHtml(label)}</a>
                      </td>
                    </tr>
                  </table>`;

const renderSecondaryButton = (label: string, href: string) =>
  `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table; margin:0 8px 8px 0;">
                    <tr>
                      <td style="border-radius:6px; border:1px solid #d1d5db; background:#ffffff;">
                        <a href="${escapeHtml(href)}" style="display:inline-block; padding:11px 20px; font-size:14px; font-weight:700; color:#111827; text-decoration:none; border-radius:6px;">${escapeHtml(label)}</a>
                      </td>
                    </tr>
                  </table>`;

const renderLayout = ({
  title,
  preheader,
  accent,
  headerTag,
  body,
  footerNote,
}: {
  title: string;
  preheader: string;
  accent: string;
  headerTag: string;
  body: string;
  footerNote: string;
}) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0; padding:0; background:#f3f4f6; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#111827; -webkit-text-size-adjust:100%;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f4f6; padding:32px 12px;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">
        <tr><td style="height:4px; background:${accent}; font-size:0; line-height:0;">&nbsp;</td></tr>
        <tr>
          <td style="padding:22px 32px; background:#0f0f10;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td><a href="${SITE_URL}" style="text-decoration:none; font-size:21px; font-weight:800; letter-spacing:-0.4px; color:#ffffff;"><span style="color:${BRAND_ACCENT};">Zonic</span>Media</a></td>
                <td align="right" style="font-size:11px; font-weight:600; color:#9ca3af; text-transform:uppercase; letter-spacing:0.8px;">${escapeHtml(headerTag)}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 32px 28px;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px; background:#f9fafb; border-top:1px solid #eceef2;">
            <p style="margin:0 0 6px; font-size:13px; font-weight:700; color:#374151;">Zonic Media</p>
            <p style="margin:0 0 10px; font-size:12px; line-height:1.6; color:#6b7280;">${escapeHtml(SITE_CONTACT.address)}<br><a href="${SITE_CONTACT.phoneHref}" style="color:#6b7280; text-decoration:none;">${escapeHtml(SITE_CONTACT.phoneDisplay)}</a> &nbsp;&middot;&nbsp; <a href="${SITE_CONTACT.emailHref}" style="color:#6b7280; text-decoration:none;">${escapeHtml(SITE_CONTACT.email)}</a> &nbsp;&middot;&nbsp; <a href="${SITE_URL}" style="color:#6b7280; text-decoration:none;">zonicllc.com</a></p>
            <p style="margin:0; font-size:11px; line-height:1.6; color:#9ca3af;">${escapeHtml(footerNote)}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

const formatSubmittedAt = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date) + " ET";

const humanizeFormType = (formType: string) =>
  formType
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

/** Internal notification sent to the Zonic team for every website lead. */
export const buildOwnerLeadEmail = (
  data: LeadEmailData,
  submittedAt: Date = new Date(),
) => {
  const fields = getSubmittedFields(data);
  const pageLabel =
    (data.pageUrl || "").replace(/^https?:\/\/(www\.)?/i, "").split(/[?#]/)[0] ||
    data.sourcePage ||
    "";
  const formLabel = data.formType ? humanizeFormType(data.formType) : "";
  const subjectContext = data.businessName?.trim() || formLabel;
  const subject = `New Lead: ${data.fullName}${subjectContext ? ` - ${subjectContext}` : ""}`;

  const meta: LeadDetail[] = [
    { label: "Submitted", value: formatSubmittedAt(submittedAt) },
    { label: "Form", value: formLabel },
    { label: "Page", value: pageLabel },
    {
      label: "SMS consent",
      value: data.smsConsent ? "Yes, opted in to SMS" : "",
    },
  ].filter((field) => field.value.length > 0);

  const pageLink =
    data.pageUrl && /^https?:\/\//i.test(data.pageUrl)
      ? `<a href="${escapeHtml(data.pageUrl)}" style="color:#2563eb; text-decoration:none; word-break:break-all;">${escapeHtml(pageLabel)}</a>`
      : escapeHtml(pageLabel);

  const metaRows = meta
    .map(
      (field) =>
        `<tr><td style="padding:3px 0; width:110px; font-size:12px; color:#6b7280;">${escapeHtml(field.label)}</td><td style="padding:3px 0; font-size:12px; color:#374151;">${field.label === "Page" ? pageLink : escapeHtml(field.value)}</td></tr>`,
    )
    .join("");

  const body = `<p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.8px;">New website lead</p>
            <h1 style="margin:0 0 6px; font-size:24px; line-height:1.3; color:#111827;">${escapeHtml(data.fullName)}</h1>
            ${data.businessName?.trim() ? `<p style="margin:0 0 20px; font-size:15px; color:#4b5563;">${escapeHtml(data.businessName.trim())}</p>` : '<div style="height:14px; line-height:14px;">&nbsp;</div>'}
            <div style="margin:0 0 24px;">
              ${renderButton(`Call ${formatPhone(data.contact)}`, `tel:${data.contact.replace(/\D/g, "")}`, BRAND_ACCENT)}
              ${hasVisitorEmail(data) ? renderSecondaryButton("Reply by email", `mailto:${data.email}`) : ""}
            </div>
            <p style="margin:0 0 10px; font-size:13px; font-weight:700; color:#111827;">What they submitted</p>
            ${renderFieldsTable(fields)}
            ${metaRows ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px; padding-top:16px; border-top:1px solid #eceef2;">${metaRows}</table>` : ""}`;

  const html = renderLayout({
    title: subject,
    preheader: `${data.fullName}${data.businessName ? ` (${data.businessName})` : ""} submitted a form on zonicllc.com.`,
    accent: BRAND_ACCENT,
    headerTag: "New Lead",
    body,
    footerNote: hasVisitorEmail(data)
      ? "Internal notification. Hit reply to respond directly to the lead."
      : "Internal notification. This form doesn't collect an email, so call the lead back.",
  });

  const text = [
    `New website lead: ${data.fullName}`,
    "",
    ...fields.map((field) => `${field.label}: ${field.value}`),
    "",
    ...meta.map((field) => `${field.label}: ${field.value}`),
  ].join("\n");

  return { subject, text, html };
};

/**
 * Visitor-facing confirmation. `bodyParagraphs` accept **bold** markers.
 * The summary shows only the fields the visitor filled in.
 */
export const buildThankYouEmail = ({
  subject,
  headerTag,
  greetingName,
  bodyParagraphs,
  signatureRole,
  disclaimer,
  accentColor = BRAND_ACCENT,
  ctaButton,
  data,
}: {
  subject: string;
  headerTag: string;
  greetingName: string;
  bodyParagraphs: string[];
  signatureRole: string;
  disclaimer: string;
  accentColor?: string;
  ctaButton?: { label: string; href: string };
  data: LeadEmailData;
}) => {
  const fields = getSubmittedFields(data);
  const closingLine = `If you'd like to speak with a specialist right away, call us at ${SITE_CONTACT.phoneDisplay}.`;

  const text = [
    `Hi ${greetingName},`,
    "",
    ...bodyParagraphs.flatMap((paragraph) => [stripBold(paragraph), ""]),
    ...(ctaButton ? [`${ctaButton.label}: ${ctaButton.href}`, ""] : []),
    ...(fields.length > 0
      ? [
          "Here's a copy of what you sent us:",
          ...fields.map((field) => `${field.label}: ${field.value}`),
          "",
        ]
      : []),
    closingLine,
    "",
    "Talk soon,",
    "The Zonic Media Team",
    signatureRole,
    `${SITE_CONTACT.email} | ${SITE_CONTACT.phoneDisplay}`,
  ].join("\n");

  const paragraphsHtml = bodyParagraphs
    .map(
      (paragraph) =>
        `<p style="margin:0 0 16px; font-size:15px; line-height:1.75; color:#374151;">${inlineHtml(paragraph)}</p>`,
    )
    .join("\n            ");

  const body = `<p style="margin:0 0 6px; font-size:12px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.8px;">Request received</p>
            <h1 style="margin:0 0 20px; font-size:22px; line-height:1.35; color:#111827;">Hi ${escapeHtml(greetingName)},</h1>
            ${paragraphsHtml}
            ${ctaButton ? `<div style="margin:8px 0 20px;">${renderButton(ctaButton.label, ctaButton.href, accentColor)}</div>` : ""}
            ${
              fields.length > 0
                ? `<p style="margin:12px 0 10px; font-size:13px; font-weight:700; color:#111827;">Here's a copy of what you sent us</p>
            ${renderFieldsTable(fields)}`
                : ""
            }
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 0;">
              <tr>
                <td style="padding:16px 18px; background:#fffbeb; border:1px solid #fde68a; border-radius:8px; font-size:14px; line-height:1.6; color:#374151;">
                  <strong style="color:#111827;">Need us sooner?</strong> Call <a href="${SITE_CONTACT.phoneHref}" style="color:#111827; font-weight:700; text-decoration:underline;">${escapeHtml(SITE_CONTACT.phoneDisplay)}</a> or reply to this email.
                </td>
              </tr>
            </table>
            <p style="margin:28px 0 2px; font-size:15px; color:#374151;">Talk soon,</p>
            <p style="margin:0 0 2px; font-size:15px; font-weight:700; color:#111827;">The Zonic Media Team</p>
            <p style="margin:0; font-size:13px; color:#6b7280;">${escapeHtml(signatureRole)}</p>`;

  const html = renderLayout({
    title: subject,
    preheader: `We've received your request. Our team will be in touch shortly.`,
    accent: accentColor,
    headerTag,
    body,
    footerNote: disclaimer,
  });

  return { text, html };
};
