"use client";

import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import RecaptchaCheckbox from "@/app/components/RecaptchaCheckbox";
import FormLegalLinks from "@/app/components/FormLegalLinks";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";
import { SITE_CONTACT } from "@/shared/siteConfig";

type AppealFormValues = {
  fullName: string;
  contact: string;
  email: string;
  businessName: string;
  caseStage: string;
  locations: string;
  rejectionText: string;
};

const DEFAULT_SERVICE = "Google My Business (GMB)";

const CASE_STAGE_OPTIONS = [
  "Appeal rejected once",
  "Appeal rejected two or more times",
  "Profile disabled or removed from Maps",
  "Reinstated, then suspended again",
  "Several locations suspended at once",
  "Not sure — need a diagnosis",
];

const LOCATION_OPTIONS = [
  "1 location",
  "2–5 locations",
  "6–20 locations",
  "20+ locations",
];

export default function GbpAppealLeadForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [submitError, setSubmitError] = useState("");
  const [smsConsent, setSmsConsent] = useState(true);
  const recaptchaExecutorRef = useRef<(() => Promise<string>) | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppealFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      contact: "",
      email: "",
      businessName: "",
      caseStage: CASE_STAGE_OPTIONS[0],
      locations: LOCATION_OPTIONS[0],
      rejectionText: "",
    },
  });

  const onSubmit = async (data: AppealFormValues) => {
    setSubmitError("");

    try {
      const recaptchaToken = await recaptchaExecutorRef.current?.();

      if (!recaptchaToken) {
        throw new Error("reCAPTCHA is not ready yet. Please try again.");
      }

      const messageParts = [
        `Business Name: ${data.businessName}`,
        `Case Stage: ${data.caseStage}`,
        `Locations Affected: ${data.locations}`,
      ];
      if (data.rejectionText.trim()) {
        messageParts.push(
          `Google's Rejection Message: ${data.rejectionText.trim()}`,
        );
      }

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "gmb-reinstatement",
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: data.email,
          contact: data.contact,
          businessName: data.businessName,
          message: messageParts.join(". "),
          services: [DEFAULT_SERVICE],
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
      sessionStorage.setItem(
        "thank_you_access_allowed_at",
        Date.now().toString(),
      );
      router.push("/thank-you");
    } catch (error) {
      console.error("GBP appeal form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="lp-form">
      <span className="lp-form-stamp">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        Free case review
      </span>

      <h3>Send Us the Rejected Case</h3>
      <p className="lp-form-sub">
        We read Google&apos;s rejection, tell you what it actually means, and
        give you an honest read on the odds — before you pay anything.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="lp-form-row">
          <div className="lp-fg">
            <label htmlFor="gbr-name">Full name</label>
            <input
              id="gbr-name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              aria-invalid={errors.fullName ? "true" : "false"}
              {...register("fullName", {
                required: "Full name is required.",
                minLength: { value: 2, message: "At least 2 characters." },
                maxLength: { value: 100, message: "Max 100 characters." },
              })}
            />
            {errors.fullName && (
              <p className="lp-field-error">{errors.fullName.message}</p>
            )}
          </div>

          <div className="lp-fg">
            <label htmlFor="gbr-phone">Phone number</label>
            <input
              id="gbr-phone"
              type="tel"
              placeholder="(302) 000-0000"
              autoComplete="tel"
              inputMode="numeric"
              aria-invalid={errors.contact ? "true" : "false"}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const t = e.currentTarget;
                t.value = t.value.replace(/[^0-9]/g, "");
              }}
              {...register("contact", {
                required: "Phone number is required.",
                pattern: {
                  value: /^[0-9]{7,15}$/,
                  message: "Digits only (7–15).",
                },
              })}
            />
            {errors.contact && (
              <p className="lp-field-error">{errors.contact.message}</p>
            )}
          </div>
        </div>

        <div className="lp-form-row">
          <div className="lp-fg">
            <label htmlFor="gbr-email">Email</label>
            <input
              id="gbr-email"
              type="email"
              placeholder="you@business.com"
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email.",
                },
              })}
            />
            {errors.email && (
              <p className="lp-field-error">{errors.email.message}</p>
            )}
          </div>

          <div className="lp-fg">
            <label htmlFor="gbr-biz">Business name</label>
            <input
              id="gbr-biz"
              type="text"
              placeholder="Your business"
              autoComplete="organization"
              aria-invalid={errors.businessName ? "true" : "false"}
              {...register("businessName", {
                required: "Business name is required.",
                minLength: { value: 2, message: "At least 2 characters." },
                maxLength: { value: 100, message: "Max 100 characters." },
              })}
            />
            {errors.businessName && (
              <p className="lp-field-error">{errors.businessName.message}</p>
            )}
          </div>
        </div>

        <div className="lp-fg">
          <label htmlFor="gbr-stage">Where does the case stand?</label>
          <select id="gbr-stage" {...register("caseStage")}>
            {CASE_STAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="lp-fg">
          <label htmlFor="gbr-locations">Locations affected</label>
          <select id="gbr-locations" {...register("locations")}>
            {LOCATION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="lp-fg">
          <label htmlFor="gbr-rejection">
            Paste Google&apos;s rejection message{" "}
            <span className="lp-fg-opt">optional</span>
          </label>
          <textarea
            id="gbr-rejection"
            rows={3}
            placeholder="“We were unable to verify…” — the exact wording tells us which review team handled it."
            aria-invalid={errors.rejectionText ? "true" : "false"}
            {...register("rejectionText", {
              maxLength: { value: 1500, message: "Max 1500 characters." },
            })}
          ></textarea>
          {errors.rejectionText && (
            <p className="lp-field-error">{errors.rejectionText.message}</p>
          )}
        </div>

        <div className="lp-form-recaptcha">
          <RecaptchaCheckbox
            action={RECAPTCHA_ACTION}
            onExecutorReady={(executor) => {
              recaptchaExecutorRef.current = executor;
            }}
            onSmsConsentChange={setSmsConsent}
            collapsibleConsent
          />
        </div>

        {submitError && (
          <p className="lp-field-error lp-error-center">{submitError}</p>
        )}

        <button
          type="submit"
          className="lp-form-submit"
          disabled={isSubmitting}
        >
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
              Review my rejected case
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </>
          )}
        </button>

        <p className="lp-form-fine">
          Or call <a href={SITE_CONTACT.phoneHref}>{SITE_CONTACT.phoneDisplay}</a>{" "}
          · Mon–Fri 9AM–5PM ET. We reply within one business day.
        </p>

        <FormLegalLinks />
      </form>
    </div>
  );
}
