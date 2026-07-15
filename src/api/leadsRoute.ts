import { createLead, type LeadPayload } from "@/backend/controllers/leadsController";
import { saveContactFormLead } from "@/backend/lib/chat";
import { verifyRecaptchaToken } from "@/backend/lib/recaptcha";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";

const ALLOWED_SERVICES = new Set([
  "Web Design",
  "UI/UX Design",
  "Pay Per Click (PPC)",
  "Branding",
  "Google My Business (GMB)",
  "Web Development",
  "Local SEO",
  "Home Inspector Marketing",
  "Nonprofit Marketing",
  "Travel & Tourism Marketing",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_REGEX = /^[0-9]{7,15}$/;

const sanitizeText = (value: string) =>
  value
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const isLengthValid = (value: string, min: number, max: number) =>
  value.length >= min && value.length <= max;

const normalizeServices = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];

  const normalized = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter((item) => ALLOWED_SERVICES.has(item));

  return Array.from(new Set(normalized));
};

const normalizeSmsConsent = (value: unknown) =>
  value === true || value === "true" || value === "yes";

type LeadsRouteResult = {
  status: number;
  body: {
    success: boolean;
    message: string;
  };
  thankYouPayload?: LeadPayload;
};

export const leadsRoute = async (
  body: Record<string, unknown>,
): Promise<LeadsRouteResult> => {
  const formType =
    typeof body.formType === "string" ? sanitizeText(body.formType) : "";
  const sourcePage =
    typeof body.sourcePage === "string" ? sanitizeText(body.sourcePage) : "";
  const pageUrl =
    typeof body.pageUrl === "string" ? body.pageUrl.trim() : "";
  const fullName = typeof body.fullName === "string" ? sanitizeText(body.fullName) : "";
  const email = typeof body.email === "string" ? sanitizeText(body.email).toLowerCase() : "";
  const contact = typeof body.contact === "string" ? sanitizeText(body.contact) : "";
  const businessName =
    typeof body.businessName === "string" ? sanitizeText(body.businessName) : "";
  const message = typeof body.message === "string" ? sanitizeText(body.message) : "";
  const services = normalizeServices(body.services);
  const smsConsent = normalizeSmsConsent(body.smsConsent);
  const recaptchaToken =
    typeof body.recaptchaToken === "string" ? body.recaptchaToken.trim() : "";
  const isGmbReinstatementForm = formType === "gmb-reinstatement";

  if (
    !recaptchaToken ||
    !isLengthValid(fullName, 2, 100) ||
    !EMAIL_REGEX.test(email) ||
    !CONTACT_REGEX.test(contact) ||
    (isGmbReinstatementForm && !isLengthValid(businessName, 2, 100)) ||
    !isLengthValid(message, 5, 2000) ||
    services.length === 0
  ) {
    return {
      status: 400,
      body: {
        success: false,
        message: "Invalid request body. Please check your inputs.",
      },
    };
  }

  const recaptchaResult = await verifyRecaptchaToken(
    recaptchaToken,
    RECAPTCHA_ACTION,
  );

  if (!recaptchaResult.success) {
    return {
      status: 400,
      body: {
        success: false,
        message:
          recaptchaResult.message ??
          "reCAPTCHA verification failed. Please try again.",
      },
    };
  }

  const payload: LeadPayload = {
    formType,
    sourcePage,
    pageUrl,
    fullName,
    email,
    contact,
    businessName,
    message,
    services,
    smsConsent,
  };

  // Persist the lead first so it appears in the admin dashboard even if the
  // notification email later fails. Storage is best-effort and never blocks
  // the visitor's submission.
  try {
    await saveContactFormLead({
      fullName,
      email,
      contact,
      businessName,
      message,
      services,
      smsConsent,
      formType,
      sourcePage,
      pageUrl,
    });
  } catch (error) {
    console.error("Failed to persist lead to database.", error);
  }

  try {
    const result = await createLead(payload);

    return {
      status: 200,
      body: result,
      thankYouPayload: payload,
    };
  } catch (error) {
    console.error("Lead creation failed.", error);

    return {
      status: 500,
      body: {
        success: false,
        message:
          "We verified your details, but could not send the emails right now. Please try again.",
      },
    };
  }
};
