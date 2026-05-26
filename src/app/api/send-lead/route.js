// src/app/api/send-lead/route.js
// Receives lead data from the Zoni chatbot and sends an email via Nodemailer.
//
// Required environment variables:
//   SMTP_HOST              — e.g. "smtp.zoho.com"
//   SMTP_PORT              — e.g. 465 (SSL) or 587 (STARTTLS)
//   SMTP_USER              — SMTP account login
//   SMTP_PASS              — SMTP account password
//   SMTP_SECURE            — "false" for STARTTLS; omit / "true" for SSL
//   MAIL_FROM              — "From" address (falls back to SMTP_USER)
//   LEAD_RECEIVER_EMAIL    — override recipient (defaults to contact@zonicllc.com)

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { verifyRecaptchaToken } from "@/backend/lib/recaptcha";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";

const DEFAULT_TO = "contact@zonicllc.com";
const CC_EMAILS  = ["man2k19ish@gmail.com", "samrunads@gmail.com", "josef@zonicllc.com"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getTransporter() {
  const host   = process.env.SMTP_HOST;
  const port   = Number(process.env.SMTP_PORT ?? "465");
  const secure = process.env.SMTP_SECURE !== "false";
  const user   = process.env.SMTP_USER;
  const pass   = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP env variables are not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    connectionTimeout: Number(process.env.SMTP_CONNECTION_TIMEOUT_MS ?? "15000"),
    greetingTimeout:   Number(process.env.SMTP_GREETING_TIMEOUT_MS  ?? "10000"),
    socketTimeout:     Number(process.env.SMTP_SOCKET_TIMEOUT_MS    ?? "20000"),
    auth: { user, pass },
  });
}

function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label, value) {
  return `<tr>
    <td style="padding:9px 14px;font-size:12.5px;font-weight:600;color:#6a6a6a;white-space:nowrap;border-bottom:1px solid #f0f0f0;width:155px;vertical-align:top;">
      ${esc(label)}
    </td>
    <td style="padding:9px 14px;font-size:13.5px;color:#1b1b1b;border-bottom:1px solid #f0f0f0;line-height:1.5;">
      ${esc(value || "—")}
    </td>
  </tr>`;
}

function buildHtml(d) {
  const submittedAt = d.createdAt
    ? new Date(d.createdAt).toLocaleString("en-US", {
        timeZone: "America/New_York",
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "—";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>New Lead — Zoni Chatbot</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;color:#1b1b1b;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f4;padding:36px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"
        style="max-width:580px;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #dedede;">

        <!-- Header -->
        <tr>
          <td style="background:#1b1b1b;padding:20px 26px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
              <td>
                <span style="font-size:19px;font-weight:800;color:#fff;letter-spacing:-0.5px;">
                  <span style="color:#fdc115;">Zonic</span>Media
                </span>
              </td>
              <td align="right">
                <span style="font-size:11.5px;color:rgba(255,255,255,0.45);">Zoni Chatbot Lead</span>
              </td>
            </tr></table>
          </td>
        </tr>

        <!-- Intro -->
        <tr>
          <td style="padding:22px 26px 14px;">
            <div style="display:inline-block;background:#fdc115;padding:4px 12px;border-radius:100px;
                        font-size:11.5px;font-weight:700;color:#1b1b1b;letter-spacing:0.07em;text-transform:uppercase;">
              New Lead
            </div>
            <p style="margin:12px 0 0;font-size:14px;color:#555;line-height:1.55;">
              A new lead was submitted through the <strong>Zoni chatbot</strong>
              on your website. Here are their details:
            </p>
          </td>
        </tr>

        <!-- Details table -->
        <tr>
          <td style="padding:0 26px 22px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0"
              style="border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
              ${row("Name",                d.name)}
              ${row("Email",               d.email)}
              ${row("Phone",               d.phone)}
              ${row("Service",             d.service)}
              ${row("Sub-service",         d.subService)}
              ${row("Project Description", d.projectDescription)}
              ${row("Page URL",            d.pageUrl)}
              ${row("Submitted",           submittedAt)}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9f9f9;padding:14px 26px;border-top:1px solid #eeeeee;">
            <p style="margin:0;font-size:11.5px;color:#bbb;text-align:center;line-height:1.6;">
              Captured by Zoni chatbot · <a href="https://zonicllc.com" style="color:#bbb;">zonicllc.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

// ─── User confirmation email ──────────────────────────────────────────────────

const SERVICE_BLURBS = {
  "Web Design / Website Redesign":
    "Your website is your most powerful digital asset — and it needs to work hard around the clock. Our team specializes in high-performing, visually stunning websites that turn visitors into paying customers. We're already reviewing your project details and will reach out with a tailored plan.",
  "Local SEO":
    "Ranking at the top of local Google searches is one of the highest-ROI moves a business can make. Our Local SEO specialists are reviewing your inquiry and will map out a strategy to get you in front of more local customers, fast.",
  "Google Business Profile / GMB Help":
    "Your Google Business Profile is your #1 local ranking asset — and we know exactly how to make it work harder for you. Our GBP specialists are reviewing your case and will be in touch with a clear action plan shortly.",
  "Google Ads / PPC":
    "A well-run Google Ads campaign is one of the fastest ways to generate high-quality leads. Our PPC team is reviewing your details and will craft a strategy built around maximizing your return on every dollar spent.",
  "Branding / Logo":
    "A strong brand builds trust and recognition from the very first glance. Our creative team is reviewing your brief and will be in touch with ideas, concepts, and next steps to bring your vision to life.",
  "UI/UX Design":
    "Great design is the difference between users staying and bouncing. Our design team is reviewing your project details and will reach out with a focused plan to create an experience your users will love.",
  "Custom Software":
    "Custom software can fundamentally transform how your business operates. Our development team is reviewing your requirements and will be in touch to discuss the best technical approach for your goals.",
};

function buildUserConfirmationHtml(d) {
  const firstName = esc((d.name || "").trim().split(/\s+/)[0] || d.name);
  const blurb = SERVICE_BLURBS[d.service] ||
    "Our team has received your enquiry and will review your details shortly. We look forward to helping you grow your business online.";

  const summaryRows = [
    d.service     && `<tr><td style="padding:8px 14px;font-size:12.5px;font-weight:600;color:#6a6a6a;width:140px;vertical-align:top;border-bottom:1px solid #f0f0f0;">Service</td><td style="padding:8px 14px;font-size:13.5px;color:#1b1b1b;border-bottom:1px solid #f0f0f0;">${esc(d.service)}</td></tr>`,
    d.subService  && `<tr><td style="padding:8px 14px;font-size:12.5px;font-weight:600;color:#6a6a6a;width:140px;vertical-align:top;border-bottom:1px solid #f0f0f0;">Specific Need</td><td style="padding:8px 14px;font-size:13.5px;color:#1b1b1b;border-bottom:1px solid #f0f0f0;">${esc(d.subService)}</td></tr>`,
    d.projectDescription && `<tr><td style="padding:8px 14px;font-size:12.5px;font-weight:600;color:#6a6a6a;width:140px;vertical-align:top;">Project Details</td><td style="padding:8px 14px;font-size:13.5px;color:#1b1b1b;line-height:1.55;">${esc(d.projectDescription)}</td></tr>`,
  ].filter(Boolean).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>We've Received Your Enquiry — Zonic Media</title>
</head>
<body style="margin:0;padding:0;background:#f4f2ee;font-family:Arial,sans-serif;color:#1a1a1a;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f2ee;padding:40px 16px;">
  <tr>
    <td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"
        style="max-width:580px;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1b1b1b;padding:24px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
              <td>
                <span style="font-size:20px;font-weight:800;color:#fff;letter-spacing:-0.5px;">
                  <span style="color:#fdc115;">Zonic</span>Media
                </span>
              </td>
              <td align="right">
                <span style="font-size:11px;color:rgba(255,255,255,0.4);">Digital Growth Agency</span>
              </td>
            </tr></table>
          </td>
        </tr>

        <!-- Hero strip -->
        <tr>
          <td style="background:#fdc115;padding:14px 36px;">
            <p style="margin:0;font-size:13px;font-weight:700;color:#1b1b1b;letter-spacing:0.04em;text-transform:uppercase;">
              Enquiry Confirmed ✓
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 36px 24px;">
            <p style="margin:0 0 18px;font-size:15px;color:#1a1a1a;line-height:1.6;">
              Hi <strong>${firstName}</strong>,
            </p>
            <p style="margin:0 0 18px;font-size:15px;color:#333;line-height:1.75;">
              Thanks for reaching out to <strong>Zonic Media</strong>! We've received your enquiry and our team is already on it. You can expect to hear from us within <strong>1 business day</strong>.
            </p>
            <p style="margin:0 0 28px;font-size:15px;color:#333;line-height:1.75;">
              ${blurb}
            </p>

            ${summaryRows ? `
            <!-- Enquiry summary -->
            <p style="margin:0 0 10px;font-size:12.5px;font-weight:700;color:#999;letter-spacing:0.06em;text-transform:uppercase;">Your Enquiry Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0"
              style="border:1px solid #e8e8e8;border-radius:8px;overflow:hidden;margin-bottom:28px;">
              ${summaryRows}
            </table>` : ""}

            <!-- CTA buttons -->
            <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding-right:10px;">
                  <a href="https://calendar.app.google/EGNcQQMvMU3DGP5R6"
                    style="display:inline-block;background:#1b1b1b;color:#fdc115;font-size:13px;font-weight:700;
                           text-decoration:none;padding:11px 20px;border-radius:100px;letter-spacing:0.02em;">
                    📅 Book a Meeting
                  </a>
                </td>
                <td>
                  <a href="tel:+13027269736"
                    style="display:inline-block;background:#f5f5f5;color:#1b1b1b;font-size:13px;font-weight:700;
                           text-decoration:none;padding:11px 20px;border-radius:100px;letter-spacing:0.02em;border:1px solid #e0e0e0;">
                    📞 Call Us
                  </a>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
              <tr><td style="height:1px;background:#f0ede8;"></td></tr>
            </table>

            <p style="margin:0 0 4px;font-size:15px;color:#333;line-height:1.6;">Talk soon,</p>
            <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#1a1a1a;">The Zonic Media Team</p>
            <p style="margin:0 0 16px;font-size:13px;color:#999;">Digital Growth Specialists</p>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right:12px;">
                  <a href="mailto:contact@zonicllc.com" style="font-size:13px;color:#555;text-decoration:none;">contact@zonicllc.com</a>
                </td>
                <td style="color:#ddd;font-size:13px;padding-right:12px;">|</td>
                <td>
                  <a href="tel:+13027269736" style="font-size:13px;color:#555;text-decoration:none;">+1 (302) 726-9736</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:16px 36px;background:#f9f7f3;border-top:1px solid #f0ede8;">
            <p style="margin:0;font-size:11px;color:#ccc;text-align:center;line-height:1.7;">
              © Zonic Media · <a href="https://zonicllc.com" style="color:#ccc;text-decoration:none;">zonicllc.com</a>
              · You received this because you submitted an enquiry via our chatbot.
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function validateBody(body) {
  for (const field of ["name", "service"]) {
    if (!body[field] || typeof body[field] !== "string" || !body[field].trim()) {
      return `Missing required field: ${field}`;
    }
  }
  const hasEmail = body.email && typeof body.email === "string" && body.email.trim();
  const hasPhone = body.phone && typeof body.phone === "string" && body.phone.trim();
  if (!hasEmail && !hasPhone) {
    return "At least one contact method (email or phone) is required.";
  }
  return null;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const err = validateBody(body);
  if (err) {
    return NextResponse.json({ success: false, message: err }, { status: 400 });
  }

  const recaptchaResult = await verifyRecaptchaToken(
    typeof body.recaptchaToken === "string" ? body.recaptchaToken : "",
    RECAPTCHA_ACTION,
  );
  if (!recaptchaResult.success) {
    return NextResponse.json(
      { success: false, message: recaptchaResult.message ?? "reCAPTCHA verification failed." },
      { status: 400 },
    );
  }

  const {
    name, email, phone, service,
    subService = "", projectDescription = "",
    pageUrl = "", createdAt, source = "Zoni Chatbot",
  } = body;

  try {
    const transporter = getTransporter();
    const from = process.env.MAIL_FROM ?? process.env.SMTP_USER;
    const to   = process.env.LEAD_RECEIVER_EMAIL ?? DEFAULT_TO;
    const cc   = CC_EMAILS.filter((a) => a.toLowerCase() !== to.toLowerCase());

    const plainText = [
      `New lead via ${source}`,
      "",
      `Name:               ${name}`,
      `Email:              ${email}`,
      `Phone:              ${phone || "—"}`,
      `Service:            ${service}`,
      `Sub-service:        ${subService         || "—"}`,
      `Project description:${projectDescription || "—"}`,
      `Page URL:           ${pageUrl            || "—"}`,
      `Submitted:      ${createdAt       || new Date().toISOString()}`,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      cc,
      subject: `New Lead from Zoni Chatbot — ${service}`,
      text: plainText,
      html: buildHtml({
        name, email, phone, service, subService,
        projectDescription, pageUrl,
        createdAt: createdAt || new Date().toISOString(),
      }),
    });

    // Send confirmation email to the user (best-effort — don't fail the request if this errors)
    if (email) {
      try {
        const confirmationData = { name, service, subService, projectDescription };
        await transporter.sendMail({
          from,
          to: email,
          subject: `We've received your enquiry — Zonic Media`,
          text: [
            `Hi ${name},`,
            "",
            `Thanks for reaching out to Zonic Media! We've received your enquiry for "${service}" and our team will be in touch within 1 business day.`,
            "",
            "In the meantime, feel free to book a meeting or call us directly:",
            "📅 https://calendar.app.google/EGNcQQMvMU3DGP5R6",
            "📞 +1 (302) 726-9736",
            "📧 contact@zonicllc.com",
            "",
            "Talk soon,",
            "The Zonic Media Team",
          ].join("\n"),
          html: buildUserConfirmationHtml(confirmationData),
        });
      } catch (confirmErr) {
        console.error("[send-lead] User confirmation email failed:", confirmErr);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[send-lead] Email failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send lead email. Please try again." },
      { status: 500 }
    );
  }
}
