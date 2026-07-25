"use client";

import LazyRecaptcha from "@/app/components/LazyRecaptcha";
import { useCallback, useEffect, useId, useRef, useState } from "react";
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
  contact: string;
  email: string;
  businessName: string;
  goal: string;
};

// The /api/leads route only accepts services from a fixed whitelist
// (see src/api/leadsRoute.ts); anything else is stripped and the request 400s.
// Map each growth goal to an allowed service, keeping the readable goal text
// in the message. Fall back to Local SEO for any unmapped/custom option.
const GOAL_TO_SERVICE: Record<string, string> = {
  "More calls & booked jobs": "Local SEO",
  "Rank in Google Map Pack": "Google My Business (GMB)",
  "Google Ads / PPC leads": "Pay Per Click (PPC)",
  "New website": "Web Design",
  "Everything — full marketing": "Local SEO",
};

const DEFAULT_SERVICE = "Local SEO";

type IndustryMarketingLeadFormProps = {
  slug: string;
  title: string;
  subtitle: string;
  labels: string[];
  placeholders: string[];
  serviceOptions: string[];
  submitLabel: string;
  finePrint: string;
};

export default function IndustryMarketingLeadForm({
  slug,
  title,
  subtitle,
  labels,
  placeholders,
  serviceOptions,
  submitLabel,
  finePrint,
}: IndustryMarketingLeadFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const id = useId();
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
          reject(new Error("reCAPTCHA could not load. Please refresh and try again."));
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
            reject(new Error("Unable to verify reCAPTCHA right now. Please try again.")),
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
    defaultValues: {
      fullName: "",
      contact: "",
      email: "",
      businessName: "",
      goal: serviceOptions[0] ?? "",
    },
  });

  const onSubmit = async (values: FormValues) => {
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
          formType: slug,
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: values.fullName,
          email: values.email,
          contact: values.contact,
          businessName: values.businessName,
          message: `${title} — primary growth goal: ${values.goal}`,
          services: [GOAL_TO_SERVICE[values.goal] ?? DEFAULT_SERVICE],
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
      sessionStorage.setItem("thank_you_access_allowed_at", Date.now().toString());
      router.push("/thank-you");
    } catch (error) {
      console.error("Industry marketing form submission failed:", error);
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  };

  const fieldId = (name: string) => `ima-${id}-${name}`;

  return (
    <div className="ima-form-card">
      {siteKey ? (
        <LazyRecaptcha siteKey={siteKey} />
      ) : null}

      <div className="ima-form-head">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="ima-form-body">
        <div className="ima-field">
          <label htmlFor={fieldId("name")}>{labels[0] ?? "Full name"}</label>
          <input
            id={fieldId("name")}
            type="text"
            placeholder={placeholders[0] ?? "Your name"}
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 100, message: "Max 100 characters." },
            })}
          />
          {errors.fullName ? <p className="ima-field-error">{errors.fullName.message}</p> : null}
        </div>

        <div className="ima-field">
          <label htmlFor={fieldId("phone")}>{labels[1] ?? "Phone number"}</label>
          <input
            id={fieldId("phone")}
            type="tel"
            inputMode="numeric"
            placeholder={placeholders[1] ?? "(000) 000-0000"}
            aria-invalid={errors.contact ? "true" : "false"}
            {...register("contact", {
              required: "Phone number is required.",
              pattern: { value: /^[0-9]{7,15}$/, message: "Enter 7–15 digits." },
              onChange: (event) => {
                event.target.value = event.target.value.replace(/[^0-9]/g, "");
              },
            })}
          />
          {errors.contact ? <p className="ima-field-error">{errors.contact.message}</p> : null}
        </div>

        <div className="ima-field">
          <label htmlFor={fieldId("email")}>{labels[2] ?? "Email"}</label>
          <input
            id={fieldId("email")}
            type="email"
            placeholder={placeholders[2] ?? "you@business.com"}
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Email is required.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email." },
            })}
          />
          {errors.email ? <p className="ima-field-error">{errors.email.message}</p> : null}
        </div>

        <div className="ima-field">
          <label htmlFor={fieldId("business")}>{labels[3] ?? "Business name"}</label>
          <input
            id={fieldId("business")}
            type="text"
            placeholder={placeholders[3] ?? "Your business"}
            aria-invalid={errors.businessName ? "true" : "false"}
            {...register("businessName", {
              required: "Business name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 120, message: "Max 120 characters." },
            })}
          />
          {errors.businessName ? (
            <p className="ima-field-error">{errors.businessName.message}</p>
          ) : null}
        </div>

        <div className="ima-field">
          <label htmlFor={fieldId("goal")}>{labels[4] ?? "What do you want to grow?"}</label>
          <select id={fieldId("goal")} {...register("goal", { required: true })}>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {!siteKey ? <p className="ima-form-error">reCAPTCHA is not configured.</p> : null}
        <LeadConsentCheckbox
          className="ima-sms-consent"
          checked={smsConsent}
          onChange={setSmsConsent}
        />
        {submitError ? <p className="ima-form-error">{submitError}</p> : null}

        <button className="ima-form-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : submitLabel}
        </button>
        <p className="ima-form-fine">{finePrint}</p>
        <FormLegalLinks />
      </form>
    </div>
  );
}
