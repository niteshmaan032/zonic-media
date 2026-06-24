"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import RecaptchaCheckbox from "@/app/components/RecaptchaCheckbox";
import LeadConsentCheckbox from "@/app/components/LeadConsentCheckbox";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";
import { SITE_PATHS } from "@/shared/siteConfig";

type ServiceLeadFormValues = {
  fullName: string;
  contact: string;
  email: string;
  businessName: string;
  message: string;
  service: string;
};

type ServiceLeadFormProps = {
  /** Value stored against the lead (e.g. "contact", "local-seo"). */
  formType: string;
  /** Render inside a bordered white card (default) or bare (no chrome). */
  card?: boolean;
  badge?: string;
  title?: string;
  subtitle?: string;
  submitText?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  /** Show the Business Name field. */
  showBusinessName?: boolean;
  /**
   * When provided, renders a multi-select of these services (visitor must pick
   * at least one). Each value must be on the API's allowed-services list.
   */
  serviceOptions?: string[];
  /**
   * Services submitted with the lead when `serviceOptions` is not used. Must be
   * on the API's allowed-services list.
   */
  defaultServices?: string[];
};

export default function ServiceLeadForm({
  formType,
  card = true,
  badge,
  title,
  subtitle,
  submitText = "Get Started",
  messageLabel = "Your message",
  messagePlaceholder = "Tell us a little about what you need",
  showBusinessName = true,
  serviceOptions,
  defaultServices = ["Local SEO"],
}: ServiceLeadFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [submitError, setSubmitError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const recaptchaExecutorRef = useRef<(() => Promise<string>) | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ServiceLeadFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      contact: "",
      email: "",
      businessName: "",
      message: "",
      service: "",
    },
  });

  const onSubmit = async (data: ServiceLeadFormValues) => {
    setSubmitError("");

    try {
      const recaptchaToken = await recaptchaExecutorRef.current?.();

      if (!recaptchaToken) {
        throw new Error("reCAPTCHA is not ready yet. Please try again.");
      }

      const services = serviceOptions ? [data.service] : defaultServices;

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType,
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: data.email,
          contact: data.contact,
          businessName: data.businessName,
          message: data.message,
          services,
          smsConsent,
          recaptchaToken,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit form.");
      }

      reset();
      setSmsConsent(false);
      sessionStorage.setItem(
        "thank_you_access_allowed_at",
        Date.now().toString(),
      );
      router.push("/thank-you");
    } catch (error) {
      console.error("Service lead form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className={`slf${card ? " slf--card" : ""}`}>
      {badge && (
        <span className="slf-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
          </svg>
          {badge}
        </span>
      )}
      {title && <h3 className="slf-title">{title}</h3>}
      {subtitle && <p className="slf-sub">{subtitle}</p>}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="slf-row">
          <div className="slf-col">
            <label className="slf-label" htmlFor="slf-name">
              Full name
            </label>
            <input
              id="slf-name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              aria-invalid={errors.fullName ? "true" : "false"}
              {...register("fullName", {
                required: "Full name is required.",
                minLength: { value: 2, message: "Full name must be at least 2 characters." },
                maxLength: { value: 100, message: "Full name must be at most 100 characters." },
              })}
            />
            {errors.fullName && <p className="slf-error">{errors.fullName.message}</p>}
          </div>

          <div className="slf-col">
            <label className="slf-label" htmlFor="slf-phone">
              Phone number
            </label>
            <input
              id="slf-phone"
              type="tel"
              placeholder="(555) 555-5555"
              autoComplete="tel"
              inputMode="numeric"
              aria-invalid={errors.contact ? "true" : "false"}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const target = e.currentTarget;
                target.value = target.value.replace(/[^0-9]/g, "");
              }}
              {...register("contact", {
                required: "Phone number is required.",
                pattern: {
                  value: /^[0-9]{7,15}$/,
                  message: "Phone number must contain only digits (7 to 15).",
                },
              })}
            />
            {errors.contact && <p className="slf-error">{errors.contact.message}</p>}
          </div>
        </div>

        <div className="slf-row">
          <div className="slf-col">
            <label className="slf-label" htmlFor="slf-email">
              Email
            </label>
            <input
              id="slf-email"
              type="email"
              placeholder="you@business.com"
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address.",
                },
              })}
            />
            {errors.email && <p className="slf-error">{errors.email.message}</p>}
          </div>

          {showBusinessName && (
            <div className="slf-col">
              <label className="slf-label" htmlFor="slf-biz">
                Business name
              </label>
              <input
                id="slf-biz"
                type="text"
                placeholder="Your business"
                autoComplete="organization"
                aria-invalid={errors.businessName ? "true" : "false"}
                {...register("businessName", {
                  required: "Business name is required.",
                  minLength: { value: 2, message: "Business name must be at least 2 characters." },
                  maxLength: { value: 100, message: "Business name must be at most 100 characters." },
                })}
              />
              {errors.businessName && (
                <p className="slf-error">{errors.businessName.message}</p>
              )}
            </div>
          )}
        </div>

        {serviceOptions && (
          <>
            <label className="slf-label" htmlFor="slf-service">
              What can we help with?
            </label>
            <select
              id="slf-service"
              defaultValue=""
              aria-invalid={errors.service ? "true" : "false"}
              {...register("service", {
                required: "Please select a service.",
              })}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="slf-error">{errors.service.message}</p>
            )}
          </>
        )}

        <label className="slf-label" htmlFor="slf-message">
          {messageLabel}
        </label>
        <textarea
          id="slf-message"
          rows={3}
          placeholder={messagePlaceholder}
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", {
            required: "Message is required.",
            minLength: { value: 5, message: "Message must be at least 5 characters." },
            maxLength: { value: 1800, message: "Message must be at most 1800 characters." },
          })}
        ></textarea>
        {errors.message && <p className="slf-error">{errors.message.message}</p>}

        <div className="slf-recaptcha">
          <RecaptchaCheckbox
            action={RECAPTCHA_ACTION}
            renderConsent={false}
            onExecutorReady={(executor) => {
              recaptchaExecutorRef.current = executor;
            }}
          />
        </div>

        {/* Consent checkbox (unchecked by default) — sits above the submit button */}
        <LeadConsentCheckbox
          className="slf-consent"
          checked={smsConsent}
          onChange={setSmsConsent}
        />

        {submitError && <p className="slf-error slf-error-center">{submitError}</p>}

        <button type="submit" className="slf-submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Sending...
            </>
          ) : (
            <>
              {submitText}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </>
          )}
        </button>

        {/* Below the submit button: only the legal links */}
        <p className="slf-legal">
          <Link href={SITE_PATHS.privacy}>Privacy Policy</Link>
          <span className="slf-legal-sep" aria-hidden="true">
            ·
          </span>
          <Link href={SITE_PATHS.terms}>Terms &amp; Conditions</Link>
        </p>
      </form>
    </div>
  );
}
