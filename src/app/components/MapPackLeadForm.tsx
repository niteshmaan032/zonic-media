"use client";

import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import RecaptchaCheckbox from "@/app/components/RecaptchaCheckbox";
import FormLegalLinks from "@/app/components/FormLegalLinks";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";
import { SITE_CONTACT } from "@/shared/siteConfig";

type MapPackFormValues = {
  fullName: string;
  contact: string;
  email: string;
  businessName: string;
  serviceArea: string;
  currentPosition: string;
};

const DEFAULT_SERVICE = "Local SEO";

/* The branded thank-you template for this page is selected in
   leadsController by sourcePage AND formType === "gmb-reinstatement"
   (see GMB_OPTIMIZATION_TEMPLATE_PAGES) — don't change the formType here
   without updating that branch, or the page falls back to the generic email. */
const FORM_TYPE = "gmb-reinstatement";

const POSITION_OPTIONS = [
  "Not showing in the Map Pack at all",
  "Top 3 near my address only, nowhere else",
  "Ranking 4–10 across the area",
  "Slipped after being in the top 3",
  "New profile — no rankings yet",
  "Not sure — need a grid scan",
];

export default function MapPackLeadForm() {
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
  } = useForm<MapPackFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      contact: "",
      email: "",
      businessName: "",
      serviceArea: "",
      currentPosition: POSITION_OPTIONS[0],
    },
  });

  const onSubmit = async (data: MapPackFormValues) => {
    setSubmitError("");

    try {
      const recaptchaToken = await recaptchaExecutorRef.current?.();

      if (!recaptchaToken) {
        throw new Error("reCAPTCHA is not ready yet. Please try again.");
      }

      const messageParts = [
        `Business Name: ${data.businessName}`,
        `Service Area: ${data.serviceArea}`,
        `Current Map Pack Position: ${data.currentPosition}`,
      ];

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: FORM_TYPE,
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
      console.error("Map Pack form submission failed:", error);
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        Free grid scan
      </span>

      <h3>See Where You Actually Rank</h3>
      <p className="lp-form-sub">
        We run a geo-grid scan across your service area and send you the map —
        your real position in every neighbourhood, not one average number.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="lp-form-row">
          <div className="lp-fg">
            <label htmlFor="lo-name">Full name</label>
            <input
              id="lo-name"
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
            <label htmlFor="lo-phone">Phone number</label>
            <input
              id="lo-phone"
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
            <label htmlFor="lo-email">Email</label>
            <input
              id="lo-email"
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
            <label htmlFor="lo-biz">Business name</label>
            <input
              id="lo-biz"
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
          <label htmlFor="lo-area">City or service area to scan</label>
          <input
            id="lo-area"
            type="text"
            placeholder="e.g. Wilmington, DE and 15 miles around it"
            aria-invalid={errors.serviceArea ? "true" : "false"}
            {...register("serviceArea", {
              required: "Tell us which area to scan.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 160, message: "Max 160 characters." },
            })}
          />
          {errors.serviceArea && (
            <p className="lp-field-error">{errors.serviceArea.message}</p>
          )}
        </div>

        <div className="lp-fg">
          <label htmlFor="lo-position">Where do you rank today?</label>
          <select id="lo-position" {...register("currentPosition")}>
            {POSITION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
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

        <button type="submit" className="lp-form-submit" disabled={isSubmitting}>
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
              Send my grid scan
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
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
