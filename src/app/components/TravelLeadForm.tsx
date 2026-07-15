"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";

import FormLegalLinks from "@/app/components/FormLegalLinks";
import { LEAD_CONSENT_TEXT } from "@/shared/consent";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";

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
  email: string;
  contact: string;
  message: string;
};

const DEFAULT_SERVICE = "Travel & Tourism Marketing";

export default function TravelLeadForm() {
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

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "travel-tourism-marketing",
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: data.email,
          contact: data.contact,
          message: `Travel brand: ${data.message}`,
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
      console.error("Travel marketing form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="ttf-shell" id="travel-lead-form">
      {siteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
          strategy="afterInteractive"
        />
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="ttf-form">
        <div className="ttf-bar">
          <div className="ttf-fg">
            <label htmlFor="ttf-fullName">Your name</label>
            <input
              id="ttf-fullName"
              type="text"
              placeholder="Alex Carter"
              autoComplete="name"
              aria-invalid={errors.fullName ? "true" : "false"}
              {...register("fullName", {
                required: "Name is required.",
                minLength: { value: 2, message: "At least 2 characters." },
                maxLength: { value: 100, message: "Max 100 characters." },
              })}
            />
            {errors.fullName && (
              <p className="ttf-field-error">{errors.fullName.message}</p>
            )}
          </div>

          <div className="ttf-fg">
            <label htmlFor="ttf-email">Work email</label>
            <input
              id="ttf-email"
              type="email"
              placeholder="alex@yourbrand.com"
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
              <p className="ttf-field-error">{errors.email.message}</p>
            )}
          </div>

          <div className="ttf-fg">
            <label htmlFor="ttf-contact">Phone</label>
            <input
              id="ttf-contact"
              type="tel"
              placeholder="(302) 000-0000"
              inputMode="numeric"
              autoComplete="tel"
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
              <p className="ttf-field-error">{errors.contact.message}</p>
            )}
          </div>

          <div className="ttf-fg">
            <label htmlFor="ttf-message">Your travel brand</label>
            <input
              id="ttf-message"
              type="text"
              placeholder="Hotel, tour company, DMO..."
              aria-invalid={errors.message ? "true" : "false"}
              {...register("message", {
                required: "Tell us about your brand.",
                minLength: { value: 5, message: "At least 5 characters." },
                maxLength: { value: 1500, message: "Max 1500 characters." },
              })}
            />
            {errors.message && (
              <p className="ttf-field-error">{errors.message.message}</p>
            )}
          </div>

          <button type="submit" className="ttf-submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="ttf-spinner" aria-hidden="true" />
                Sending...
              </>
            ) : (
              <>
                Get My Growth Plan
                <FiArrowRight aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        {!siteKey && (
          <p className="ttf-form-error">reCAPTCHA is not configured.</p>
        )}

        {submitError && <p className="ttf-form-error">{submitError}</p>}

        <label className="ttf-sms-consent">
          <input
            type="checkbox"
            name="smsConsent"
            checked={smsConsent}
            onChange={(event) => setSmsConsent(event.currentTarget.checked)}
          />
          <span>{LEAD_CONSENT_TEXT}</span>
        </label>

        <FormLegalLinks />
      </form>
    </div>
  );
}
