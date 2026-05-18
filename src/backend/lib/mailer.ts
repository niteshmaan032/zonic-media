import nodemailer from "nodemailer";

type ResetPasswordEmailPayload = {
  to: string;
  resetLink: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP env variables are not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendAdminResetPasswordEmail({
  to,
  resetLink,
}: ResetPasswordEmailPayload) {
  const from =
    process.env.SMTP_FROM ?? process.env.MAIL_FROM ?? process.env.SMTP_USER;

  if (!from) {
    throw new Error("SMTP_FROM or SMTP_USER must be configured.");
  }

  const safeResetLink = escapeHtml(resetLink);

  await getTransporter().sendMail({
    from,
    to,
    subject: "Reset your Zonic Media admin password",
    text: [
      "Zonic Media Admin Password Reset",
      "",
      "Use the link below to reset your admin password. This link expires shortly.",
      resetLink,
      "",
      "If you did not request this, you can ignore this email.",
    ].join("\n"),
    html: `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f6f7fb;font-family:Arial,sans-serif;color:#1f2937;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:32px 16px;background:#f6f7fb;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="padding:24px 28px;border-bottom:1px solid #eef0f4;">
              <strong style="font-size:20px;color:#111827;">Zonic Media</strong>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <h1 style="margin:0 0 14px;font-size:22px;line-height:1.3;color:#111827;">Reset your admin password</h1>
              <p style="margin:0 0 22px;font-size:15px;line-height:1.6;color:#4b5563;">Use the button below to set a new password for your Zonic Media admin account. This link expires shortly.</p>
              <p style="margin:0 0 24px;"><a href="${safeResetLink}" style="display:inline-block;background:#0d6efd;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:6px;font-weight:700;">Reset Password</a></p>
              <p style="margin:0;font-size:13px;line-height:1.6;color:#6b7280;">If the button does not work, paste this URL into your browser:<br><a href="${safeResetLink}" style="color:#0d6efd;word-break:break-all;">${safeResetLink}</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  });
}
