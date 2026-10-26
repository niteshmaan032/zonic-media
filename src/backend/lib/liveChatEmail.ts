import {
  getMailConfig,
  getOwnerLeadCcEmails,
  getTransporter,
} from "@/backend/lib/ownerMail";

/* ---------------------------------------------------------------------------
   Live chat request alert (26 Oct 2026). Owner: "if user click live chat
   than i want u to send email first to my emails". Sent to MAIL_TO_OWNER +
   the team CC list the moment a visitor asks for a live agent, with a
   button that opens that conversation in the admin dashboard, where an
   agent presses "Accept" to start chatting.
--------------------------------------------------------------------------- */

type LiveChatRequest = {
  conversationId: string;
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  subService?: string;
  sourcePage?: string | null;
  returning?: boolean;
};

const esc = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function siteUrl() {
  return (process.env.SITE_URL ?? "https://www.zonicllc.com").replace(/\/$/, "");
}

export async function sendLiveChatRequestEmail(req: LiveChatRequest) {
  const transporter = getTransporter();
  const { from, ownerEmail } = getMailConfig();
  const link = `${siteUrl()}/admindashboard/live-chat?c=${encodeURIComponent(req.conversationId)}`;
  const topic = [req.service, req.subService].filter(Boolean).join(" › ");
  const when = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const rows: [string, string][] = [
    ["Visitor", req.name],
    ...(req.email ? ([["Email", req.email]] as [string, string][]) : []),
    ...(req.phone ? ([["Phone", req.phone]] as [string, string][]) : []),
    ...(topic ? ([["Topic", topic]] as [string, string][]) : []),
    ...(req.sourcePage ? ([["Page", req.sourcePage]] as [string, string][]) : []),
    ["Requested", `${when} ET`],
  ];

  const subject = `${req.returning ? "Returning visitor" : "Live chat request"}: ${req.name} is waiting for an agent`;

  const text = [
    `${req.name} is waiting in live chat on zonicllc.com.`,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    `Accept the chat: ${link}`,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f1f4f9;font-family:Arial,Helvetica,sans-serif;color:#0c1526;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:28px 14px;background:#f1f4f9;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e3e9f2;">
        <tr><td style="background:#0c1526;padding:22px 28px;">
          <span style="display:inline-block;background:#22c55e;width:10px;height:10px;border-radius:50%;margin-right:8px;vertical-align:middle;"></span>
          <span style="color:#ffffff;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;vertical-align:middle;">Live chat request</span>
          <h1 style="margin:12px 0 0;color:#ffffff;font-size:22px;line-height:1.3;">${esc(req.name)} is waiting for an agent</h1>
        </td></tr>
        <tr><td style="padding:24px 28px 8px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#47546e;">The visitor sees a "connecting you to our team" screen until someone presses <strong>Accept</strong> in the dashboard.</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:9px 0;border-bottom:1px solid #eef1f6;font-size:13px;color:#7a869e;width:110px;">${esc(k)}</td><td style="padding:9px 0;border-bottom:1px solid #eef1f6;font-size:14px;color:#0c1526;font-weight:600;">${esc(v)}</td></tr>`,
              )
              .join("")}
          </table>
        </td></tr>
        <tr><td style="padding:22px 28px 28px;">
          <a href="${esc(link)}" style="display:inline-block;background:#3157f5;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:999px;font-weight:700;font-size:15px;">Open chat &amp; accept</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await transporter.sendMail({
    from,
    to: ownerEmail,
    cc: getOwnerLeadCcEmails(ownerEmail),
    ...(req.email ? { replyTo: req.email } : {}),
    subject,
    text,
    html,
  });
}
