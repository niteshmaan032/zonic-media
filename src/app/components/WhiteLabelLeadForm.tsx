"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import FormLegalLinks from "@/app/components/FormLegalLinks";
import LeadConsentCheckbox from "@/app/components/LeadConsentCheckbox";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

type FormValues = {
  fullName: string;
  agency: string;
  email: string;
  contact: string;
  message: string;
};

// /api/leads only accepts services from a fixed whitelist (see
// src/api/leadsRoute.ts); "Local SEO" is the closest allowed match for the
// white-label fulfillment stack. The specific services the partner wants ride
// along in the message so nothing is lost.
const DEFAULT_SERVICE = "Local SEO";

export default function WhiteLabelLeadForm() {
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

    const grecaptcha = await new Promise<Grecaptcha>((resolve, reject) => {
      const startedAt = Date.now();
      const check = () => {
        if (window.grecaptcha) {
          resolve(window.grecaptcha);
          return;
        }
        if (Date.now() - startedAt > 10000) {
          reject(
            new Error("reCAPTCHA could not load. Please refresh and try again."),
          );
          return;
        }
        window.setTimeout(check, 100);
      };
      check();
    });

    return new Promise<string>((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(siteKey, { action: RECAPTCHA_ACTION })
          .then(resolve)
          .catch(() =>
            reject(
              new Error("Unable to verify reCAPTCHA right now. Please try again."),
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
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      agency: "",
      email: "",
      contact: "",
      message: "",
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
        `Agency: ${data.agency}`,
        `Services of interest: ${data.message || "Not specified"}`,
      ];

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "white-label-services",
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: data.email,
          contact: data.contact,
          businessName: data.agency,
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
      setSmsConsent(false);
      sessionStorage.setItem(
        "thank_you_access_allowed_at",
        Date.now().toString(),
      );
      router.push("/thank-you");
    } catch (error) {
      console.error("White-label form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="wl-form-card">
      {siteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
          strategy="afterInteractive"
        />
      ) : null}

      <div className="wl-form-stamp">Partner</div>

      <div className="wl-form-head">
        <h3>Become a White-Label Partner</h3>
        <p>
          Tell us about your agency and the services you&apos;d like to resell.
          We&apos;ll follow up with partner details and your reseller rates.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="wl-form-body"
      >
        <div className="wl-fg">
          <label htmlFor="wl-fullName">Your name</label>
          <input
            id="wl-fullName"
            type="text"
            placeholder="Jordan Blake"
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 100, message: "Max 100 characters." },
            })}
          />
          {errors.fullName && (
            <p className="wl-field-error">{errors.fullName.message}</p>
          )}
        </div>

        <div className="wl-fg">
          <label htmlFor="wl-agency">Agency name</label>
          <input
            id="wl-agency"
            type="text"
            placeholder="Blake Digital"
            aria-invalid={errors.agency ? "true" : "false"}
            {...register("agency", {
              required: "Agency name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 120, message: "Max 120 characters." },
            })}
          />
          {errors.agency && (
            <p className="wl-field-error">{errors.agency.message}</p>
          )}
        </div>

        <div className="wl-fg-row">
          <div className="wl-fg">
            <label htmlFor="wl-email">Email</label>
            <input
              id="wl-email"
              type="email"
              placeholder="you@agency.com"
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
              <p className="wl-field-error">{errors.email.message}</p>
            )}
          </div>

          <div className="wl-fg">
            <label htmlFor="wl-contact">Phone</label>
            <input
              id="wl-contact"
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
              <p className="wl-field-error">{errors.contact.message}</p>
            )}
          </div>
        </div>

        <div className="wl-fg">
          <label htmlFor="wl-message">Which services interest you?</label>
          <textarea
            id="wl-message"
            rows={3}
            placeholder="e.g. GBP reinstatement + local SEO"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              maxLength: { value: 1500, message: "Max 1500 characters." },
            })}
          />
          {errors.message && (
            <p className="wl-field-error">{errors.message.message}</p>
          )}
        </div>

        {!siteKey && (
          <p className="wl-form-error">reCAPTCHA is not configured.</p>
        )}

        <LeadConsentCheckbox
          className="wl-sms-consent"
          checked={smsConsent}
          onChange={setSmsConsent}
        />

        {submitError && <p className="wl-form-error">{submitError}</p>}

        <button
          type="submit"
          className="wl-form-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="wl-form-spinner" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>Request Partner Details →</>
          )}
        </button>

        <p className="wl-form-fine">
          Your information is 100% confidential. We never contact your clients.
        </p>
        <FormLegalLinks />
      </form>
    </div>
  );
}
