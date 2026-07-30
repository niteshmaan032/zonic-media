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

/**
 * Shared lead form for every Home Improvement & Remodeling website-design page.
 * All copy that differs per service (form type, labels, placeholders) is passed
 * in via the `variant` prop, so one component + one `.hiwf-` style block serves
 * all six routes.
 */
export type HomeImprovementWebVariant = {
  formType: string;
  headline: string;
  subcopy: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  cityPlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
};

export default function HomeImprovementWebLeadForm({
  variant,
}: {
  variant: HomeImprovementWebVariant;
}) {
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
        `Company: ${data.company}`,
        `City: ${data.city}`,
        `Message: ${data.message}`,
      ];

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: variant.formType,
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
      console.error(`${variant.formType} form submission failed:`, error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="hiwf-card">
      {siteKey ? <LazyRecaptcha siteKey={siteKey} /> : null}

      <div className="hiwf-stamp">Free Mockup</div>

      <div className="hiwf-head">
        <h3>{variant.headline}</h3>
        <p>{variant.subcopy}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="hiwf-body">
        <div className="hiwf-fg">
          <label htmlFor="hiwf-fullName">Your name</label>
          <input
            id="hiwf-fullName"
            type="text"
            placeholder={variant.namePlaceholder}
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 100, message: "Max 100 characters." },
            })}
          />
          {errors.fullName && (
            <p className="hiwf-field-error">{errors.fullName.message}</p>
          )}
        </div>

        <div className="hiwf-fg-row">
          <div className="hiwf-fg">
            <label htmlFor="hiwf-company">{variant.companyLabel}</label>
            <input
              id="hiwf-company"
              type="text"
              placeholder={variant.companyPlaceholder}
              aria-invalid={errors.company ? "true" : "false"}
              {...register("company", {
                required: "Company name is required.",
                minLength: { value: 2, message: "At least 2 characters." },
                maxLength: { value: 120, message: "Max 120 characters." },
              })}
            />
            {errors.company && (
              <p className="hiwf-field-error">{errors.company.message}</p>
            )}
          </div>

          <div className="hiwf-fg">
            <label htmlFor="hiwf-city">City you serve</label>
            <input
              id="hiwf-city"
              type="text"
              placeholder={variant.cityPlaceholder}
              aria-invalid={errors.city ? "true" : "false"}
              {...register("city", {
                required: "City is required.",
                minLength: { value: 2, message: "At least 2 characters." },
                maxLength: { value: 80, message: "Max 80 characters." },
              })}
            />
            {errors.city && (
              <p className="hiwf-field-error">{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className="hiwf-fg-row">
          <div className="hiwf-fg">
            <label htmlFor="hiwf-email">Email</label>
            <input
              id="hiwf-email"
              type="email"
              placeholder={variant.emailPlaceholder}
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
              <p className="hiwf-field-error">{errors.email.message}</p>
            )}
          </div>

          <div className="hiwf-fg">
            <label htmlFor="hiwf-contact">Phone</label>
            <input
              id="hiwf-contact"
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
              <p className="hiwf-field-error">{errors.contact.message}</p>
            )}
          </div>
        </div>

        <div className="hiwf-fg">
          <label htmlFor="hiwf-message">Your message</label>
          <textarea
            id="hiwf-message"
            rows={2}
            placeholder={variant.messagePlaceholder}
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: "A short message is required.",
              minLength: { value: 5, message: "At least 5 characters." },
              maxLength: { value: 1500, message: "Max 1500 characters." },
            })}
          />
          {errors.message && (
            <p className="hiwf-field-error">{errors.message.message}</p>
          )}
        </div>

        {!siteKey && (
          <p className="hiwf-form-error">reCAPTCHA is not configured.</p>
        )}

        <LeadConsentCheckbox
          className="hiwf-sms-consent"
          checked={smsConsent}
          onChange={setSmsConsent}
        />

        {submitError && <p className="hiwf-form-error">{submitError}</p>}

        <button type="submit" className="hiwf-submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="hiwf-spinner" aria-hidden="true" />
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
