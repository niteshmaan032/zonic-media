"use client";

import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import RecaptchaCheckbox from "@/app/components/RecaptchaCheckbox";
import FormLegalLinks from "@/app/components/FormLegalLinks";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";

type GmbAuditFormValues = {
  fullName: string;
  contact: string;
  email: string;
  businessName: string;
  profileStatus: string;
  message: string;
};

const DEFAULT_SERVICE = "Google My Business (GMB)";

const PROFILE_STATUS_OPTIONS = [
  "Suspended",
  "Disabled",
  "Suspended pending verification",
  "Not sure",
];

export default function GmbAuditForm() {
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
  } = useForm<GmbAuditFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      contact: "",
      email: "",
      businessName: "",
      profileStatus: PROFILE_STATUS_OPTIONS[0],
      message: "",
    },
  });

  const onSubmit = async (data: GmbAuditFormValues) => {
    setSubmitError("");

    try {
      const recaptchaToken = await recaptchaExecutorRef.current?.();

      if (!recaptchaToken) {
        throw new Error("reCAPTCHA is not ready yet. Please try again.");
      }

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "gmb-reinstatement",
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: data.email,
          contact: data.contact,
          businessName: data.businessName,
          message: `Business Name: ${data.businessName}. Profile Status: ${data.profileStatus}. Issue: ${data.message}`,
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
      console.error("GMB audit form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="audit-form">
      <span className="stamp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        Free Suspension Audit
      </span>
      <h3>Get your free case review</h3>
      <p>We&apos;ll respond within one business day.</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="af-row">
          <div className="af-col">
            <label htmlFor="gb-name">Full name</label>
            <input
              id="gb-name"
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
            {errors.fullName && <p className="af-error">{errors.fullName.message}</p>}
          </div>

          <div className="af-col">
            <label htmlFor="gb-phone">Phone number</label>
            <input
              id="gb-phone"
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
            {errors.contact && <p className="af-error">{errors.contact.message}</p>}
          </div>
        </div>

        <div className="af-row">
          <div className="af-col">
            <label htmlFor="gb-email">Email</label>
            <input
              id="gb-email"
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
            {errors.email && <p className="af-error">{errors.email.message}</p>}
          </div>

          <div className="af-col">
            <label htmlFor="gb-biz">Business name</label>
            <input
              id="gb-biz"
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
            {errors.businessName && <p className="af-error">{errors.businessName.message}</p>}
          </div>
        </div>

        <label htmlFor="gb-status">Profile status</label>
        <select id="gb-status" {...register("profileStatus")}>
          {PROFILE_STATUS_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="gb-message">Your message</label>
        <textarea
          id="gb-message"
          rows={3}
          placeholder="Tell us briefly what happened with your profile"
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", {
            required: "Message is required.",
            minLength: { value: 5, message: "Message must be at least 5 characters." },
            maxLength: { value: 1800, message: "Message must be at most 1800 characters." },
          })}
        ></textarea>
        {errors.message && <p className="af-error">{errors.message.message}</p>}

        <div className="af-recaptcha">
          <RecaptchaCheckbox
            action={RECAPTCHA_ACTION}
            onExecutorReady={(executor) => {
              recaptchaExecutorRef.current = executor;
            }}
            onSmsConsentChange={setSmsConsent}
            collapsibleConsent
          />
        </div>

        {submitError && <p className="af-error af-error-center">{submitError}</p>}

        <button type="submit" className="btn btn-primary af-submit" disabled={isSubmitting}>
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
              Get My Free Case Review
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 16, height: 16 }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </>
          )}
        </button>

        <FormLegalLinks />
      </form>
    </div>
  );
}
