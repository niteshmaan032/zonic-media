"use client";

import LazyRecaptcha from "@/app/components/LazyRecaptcha";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import FormLegalLinks from "@/app/components/FormLegalLinks";
import LeadConsentCheckbox from "@/app/components/LeadConsentCheckbox";
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
  company: string;
  city: string;
  email: string;
  contact: string;
  message: string;
};

const DEFAULT_SERVICE = "Web Design";

export default function PlumbingWebLeadForm() {
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
      company: "",
      city: "",
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
        `Plumbing Company: ${data.company}`,
        `City: ${data.city}`,
        `Message: ${data.message}`,
      ];

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "plumbing-website-design",
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: data.email,
          contact: data.contact,
          businessName: data.company,
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
      console.error("Plumbing website design form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="pwf-card">
      {siteKey ? (
        <LazyRecaptcha siteKey={siteKey} />
      ) : null}

      <div className="pwf-stamp">Free Mockup</div>

      <div className="pwf-head">
        <h3>Get Your Free Homepage Mockup</h3>
        <p>
          See what your plumbing company&apos;s new website could look like
          before you spend a dollar — delivered within about a week.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="pwf-body">
        <div className="pwf-fg">
          <label htmlFor="pwf-fullName">Your name</label>
          <input
            id="pwf-fullName"
            type="text"
            placeholder="Tony Rivera"
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 100, message: "Max 100 characters." },
            })}
          />
          {errors.fullName && (
            <p className="pwf-field-error">{errors.fullName.message}</p>
          )}
        </div>

        <div className="pwf-fg-row">
          <div className="pwf-fg">
            <label htmlFor="pwf-company">Company name</label>
            <input
              id="pwf-company"
              type="text"
              placeholder="Rivera Plumbing & Drain"
              aria-invalid={errors.company ? "true" : "false"}
              {...register("company", {
                required: "Company name is required.",
                minLength: { value: 2, message: "At least 2 characters." },
                maxLength: { value: 120, message: "Max 120 characters." },
              })}
            />
            {errors.company && (
              <p className="pwf-field-error">{errors.company.message}</p>
            )}
          </div>

          <div className="pwf-fg">
            <label htmlFor="pwf-city">City you serve</label>
            <input
              id="pwf-city"
              type="text"
              placeholder="Wilmington, DE"
              aria-invalid={errors.city ? "true" : "false"}
              {...register("city", {
                required: "City is required.",
                minLength: { value: 2, message: "At least 2 characters." },
                maxLength: { value: 80, message: "Max 80 characters." },
              })}
            />
            {errors.city && (
              <p className="pwf-field-error">{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className="pwf-fg-row">
          <div className="pwf-fg">
            <label htmlFor="pwf-email">Email</label>
            <input
              id="pwf-email"
              type="email"
              placeholder="tony@riveraplumbing.com"
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
              <p className="pwf-field-error">{errors.email.message}</p>
            )}
          </div>

          <div className="pwf-fg">
            <label htmlFor="pwf-contact">Phone</label>
            <input
              id="pwf-contact"
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
              <p className="pwf-field-error">{errors.contact.message}</p>
            )}
          </div>
        </div>

        <div className="pwf-fg">
          <label htmlFor="pwf-message">Your message</label>
          <textarea
            id="pwf-message"
            rows={2}
            placeholder="Tell us about your company, your current website, or what you want more of — water heaters, repipes, emergency calls..."
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: "A short message is required.",
              minLength: { value: 5, message: "At least 5 characters." },
              maxLength: { value: 1500, message: "Max 1500 characters." },
            })}
          />
          {errors.message && (
            <p className="pwf-field-error">{errors.message.message}</p>
          )}
        </div>

        {!siteKey && (
          <p className="pwf-form-error">reCAPTCHA is not configured.</p>
        )}

        <LeadConsentCheckbox
          className="pwf-sms-consent"
          checked={smsConsent}
          onChange={setSmsConsent}
        />

        {submitError && <p className="pwf-form-error">{submitError}</p>}

        <button type="submit" className="pwf-submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="pwf-spinner" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>Get My Free Mockup →</>
          )}
        </button>

        <FormLegalLinks />
      </form>
    </div>
  );
}
