"use client";

import LazyRecaptcha from "@/app/components/LazyRecaptcha";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { RECAPTCHA_ACTION } from "@/shared/recaptcha";
import { SITE_CONTACT } from "@/shared/siteConfig";
import FormLegalLinks from "@/app/components/FormLegalLinks";
import LeadConsentCheckbox from "@/app/components/LeadConsentCheckbox";

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (
    siteKey: string,
    options: { action: string },
  ) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

type FormValues = {
  fullName: string;
  contact: string;
  email: string;
  businessName: string;
  whatsHappening: string;
  industry: string;
};

const WHATS_HAPPENING_OPTIONS = [
  "Postcard never arrived or expired",
  "Video verification rejected",
  "Phone/email option not showing",
  "Verified then revoked — keeps repeating",
  "New listing stuck in verification loop",
  "Service area business (no storefront)",
  "Not sure — need a diagnosis",
];

const INDUSTRY_OPTIONS = [
  "HVAC / Heating & Cooling",
  "Plumbing",
  "Roofing",
  "Pest Control",
  "Electrical",
  "Dental / Medical",
  "Law Firm",
  "Real Estate",
  "Restaurant / Food Service",
  "Landscaping / Lawn Care",
  "Cleaning Services",
  "Other",
];

const DEFAULT_SERVICE = "Google My Business (GMB)";

export default function GbpVerificationLeadForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [submitError, setSubmitError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim();

  const recaptchaExecutorRef = useRef<(() => Promise<string>) | null>(null);

  const executeRecaptcha = useCallback(async () => {
    if (!siteKey) {
      throw new Error("reCAPTCHA is not configured.");
    }

    const waitForGrecaptcha = () =>
      new Promise<Grecaptcha>((resolve, reject) => {
        const start = Date.now();
        const tick = () => {
          if (window.grecaptcha) {
            resolve(window.grecaptcha);
            return;
          }
          if (Date.now() - start > 10000) {
            reject(
              new Error(
                "reCAPTCHA could not load. Please refresh and try again.",
              ),
            );
            return;
          }
          setTimeout(tick, 100);
        };
        tick();
      });

    const grecaptcha = await waitForGrecaptcha();

    return new Promise<string>((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(siteKey, { action: RECAPTCHA_ACTION })
          .then(resolve)
          .catch(() =>
            reject(
              new Error(
                "Unable to verify reCAPTCHA right now. Please try again.",
              ),
            ),
          );
      });
    });
  }, [siteKey]);

  useEffect(() => {
    recaptchaExecutorRef.current = siteKey ? executeRecaptcha : null;
    return () => {
      recaptchaExecutorRef.current = null;
    };
  }, [executeRecaptcha, siteKey]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      contact: "",
      email: "",
      businessName: "",
      whatsHappening: "",
      industry: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitError("");

    try {
      const recaptchaToken = await recaptchaExecutorRef.current?.();

      if (!recaptchaToken) {
        throw new Error("reCAPTCHA is not ready yet. Please try again.");
      }

      const messageParts = [
        `Business Name: ${data.businessName}`,
        `What's Happening: ${data.whatsHappening}`,
      ];
      if (data.industry) {
        messageParts.push(`Industry: ${data.industry}`);
      }

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "gmb-verification",
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
      console.error("GBP verification form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="gbv-form-card">
      {siteKey ? (
        <LazyRecaptcha siteKey={siteKey} />
      ) : null}

      <div className="gbv-form-head">
        <h3>Free Verification Diagnosis</h3>
        <p>
          Tell us your situation. We&apos;ll identify the exact issue and map
          the fastest path to getting verified — same business day, no charge.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="gbv-form-body"
      >
        <div className="gbv-fg">
          <label htmlFor="gbv-fullName">Full Name</label>
          <input
            id="gbv-fullName"
            type="text"
            placeholder="Your name"
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 100, message: "Max 100 characters." },
            })}
          />
          {errors.fullName && (
            <p className="gbv-field-error">{errors.fullName.message}</p>
          )}
        </div>

        <div className="gbv-fg">
          <label htmlFor="gbv-contact">Phone Number</label>
          <input
            id="gbv-contact"
            type="tel"
            placeholder="(302) 000-0000"
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
            <p className="gbv-field-error">{errors.contact.message}</p>
          )}
        </div>

        <div className="gbv-fg">
          <label htmlFor="gbv-email">Email Address</label>
          <input
            id="gbv-email"
            type="email"
            placeholder="you@business.com"
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
            <p className="gbv-field-error">{errors.email.message}</p>
          )}
        </div>

        <div className="gbv-fg">
          <label htmlFor="gbv-businessName">Business Name</label>
          <input
            id="gbv-businessName"
            type="text"
            placeholder="Your Business Name"
            aria-invalid={errors.businessName ? "true" : "false"}
            {...register("businessName", {
              required: "Business name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 100, message: "Max 100 characters." },
            })}
          />
          {errors.businessName && (
            <p className="gbv-field-error">{errors.businessName.message}</p>
          )}
        </div>

        <div className="gbv-fg">
          <label htmlFor="gbv-whatsHappening">What&apos;s Happening?</label>
          <select
            id="gbv-whatsHappening"
            aria-invalid={errors.whatsHappening ? "true" : "false"}
            defaultValue=""
            {...register("whatsHappening", {
              required: "Please select your issue.",
            })}
          >
            <option value="" disabled>
              Select your issue
            </option>
            {WHATS_HAPPENING_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.whatsHappening && (
            <p className="gbv-field-error">{errors.whatsHappening.message}</p>
          )}
        </div>

        <div className="gbv-fg">
          <label htmlFor="gbv-industry">Your Industry</label>
          <select
            id="gbv-industry"
            defaultValue=""
            {...register("industry")}
          >
            <option value="" disabled>
              Select your industry
            </option>
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <p className="gbv-form-fine">
          Or call:{" "}
          <a href={SITE_CONTACT.phoneHref}>{SITE_CONTACT.phoneDisplay}</a> ·
          Mon–Fri 9AM–5PM ET
          <br />
          100% confidential · Same-day response · No commitment
        </p>

        <div className="gbv-form-trust">
          <span className="gbv-ft-i">🛡️ Money-back guaranteed</span>
          <span className="gbv-ft-i">⚡ Same-day response</span>
        </div>

        {!siteKey && (
          <p className="gbv-form-error">reCAPTCHA is not configured.</p>
        )}

        <LeadConsentCheckbox
          className="gbv-sms-consent"
          checked={smsConsent}
          onChange={setSmsConsent}
        />

        {submitError && <p className="gbv-form-error">{submitError}</p>}

        <button
          type="submit"
          className="gbv-form-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="gbv-form-spinner" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>Submit My Free Diagnosis →</>
          )}
        </button>

        <FormLegalLinks />
      </form>
    </div>
  );
}
