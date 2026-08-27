"use client";

import LazyRecaptcha from "@/app/components/LazyRecaptcha";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import FormLegalLinks from "@/app/components/FormLegalLinks";
import LeadConsentCheckbox from "@/app/components/LeadConsentCheckbox";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";

import Icon from "./Icon";

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
  contact: string;
  email: string;
  website: string;
  serviceArea: string;
  businessType: string;
  budget: string;
};

const DEFAULT_SERVICE = "Web Design";

const BUSINESS_TYPES = [
  "HVAC",
  "Roofing",
  "Plumbing",
  "Electrical",
  "Home Inspection",
  "Pest Control",
  "Towing",
  "Landscaping",
  "Commercial Cleaning",
  "Garage Door",
  "House Cleaning",
  "Movers",
  "Auto Repair",
  "Painting",
  "General Contractor",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Flooring",
  "Dental",
  "Real Estate",
  "Other",
];

const BUDGET_OPTIONS = [
  { value: "under-895", label: "Under $895 — not ready yet" },
  { value: "895-1500", label: "$895 – $1,500" },
  { value: "1500-3000", label: "$1,500 – $3,000" },
  { value: "3000-plus", label: "$3,000+" },
];

export default function FreeDesignLeadForm() {
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
      contact: "",
      email: "",
      website: "",
      serviceArea: "",
      businessType: "",
      budget: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitError("");

    try {
      const recaptchaToken = await recaptchaExecutorRef.current?.();

      if (!recaptchaToken) {
        throw new Error("reCAPTCHA is not ready yet. Please try again.");
      }

      const budgetLabel =
        BUDGET_OPTIONS.find((option) => option.value === data.budget)?.label ||
        data.budget;

      const messageParts = [
        `Business: ${data.company}`,
        `Business type: ${data.businessType}`,
        `Current website: ${data.website || "none provided"}`,
        `Service area: ${data.serviceArea}`,
        `Monthly marketing budget: ${budgetLabel}`,
      ];

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "free-website-design",
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
      console.error("Free website design form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <form
      id="free-design-form"
      className="eligibility-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {siteKey ? <LazyRecaptcha siteKey={siteKey} /> : null}

      <div className="form-heading">
        <span>
          <Icon name="mail" /> Free website eligibility
        </span>
        <h3>See If You Qualify.</h3>
        <p>A short form to start the conversation. Submitting is not a contract.</p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="fwd-full-name">Your name *</label>
          <input
            id="fwd-full-name"
            placeholder="Full name"
            autoComplete="name"
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 100, message: "Max 100 characters." },
            })}
          />
          {errors.fullName && (
            <p className="form-field-error">{errors.fullName.message}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="fwd-business-name">Company *</label>
          <input
            id="fwd-business-name"
            placeholder="Business name"
            autoComplete="organization"
            aria-invalid={errors.company ? "true" : "false"}
            {...register("company", {
              required: "Business name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 120, message: "Max 120 characters." },
            })}
          />
          {errors.company && (
            <p className="form-field-error">{errors.company.message}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="fwd-phone">Phone *</label>
          <input
            id="fwd-phone"
            type="tel"
            placeholder="(555) 555-5555"
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
            <p className="form-field-error">{errors.contact.message}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="fwd-email">Email *</label>
          <input
            id="fwd-email"
            type="email"
            placeholder="you@company.com"
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
            <p className="form-field-error">{errors.email.message}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="fwd-website">Current website</label>
          <input
            id="fwd-website"
            placeholder="yoursite.com — or type ‘none’"
            {...register("website", {
              maxLength: { value: 200, message: "Max 200 characters." },
            })}
          />
          {errors.website && (
            <p className="form-field-error">{errors.website.message}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="fwd-service-area">Service area *</label>
          <input
            id="fwd-service-area"
            placeholder="City, state"
            aria-invalid={errors.serviceArea ? "true" : "false"}
            {...register("serviceArea", {
              required: "Service area is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 120, message: "Max 120 characters." },
            })}
          />
          {errors.serviceArea && (
            <p className="form-field-error">{errors.serviceArea.message}</p>
          )}
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="fwd-business-type">
            What&rsquo;s your business type? *
          </label>
          <select
            id="fwd-business-type"
            className="form-select standalone-select"
            defaultValue=""
            aria-invalid={errors.businessType ? "true" : "false"}
            {...register("businessType", {
              required: "Please select your business type.",
            })}
          >
            <option value="" disabled>
              Select your industry
            </option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.businessType && (
            <p className="form-field-error">{errors.businessType.message}</p>
          )}
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="fwd-budget">Monthly marketing budget *</label>
          <select
            id="fwd-budget"
            className="form-select standalone-select"
            defaultValue=""
            aria-invalid={errors.budget ? "true" : "false"}
            {...register("budget", {
              required: "Please select a budget range.",
            })}
          >
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="form-field-error">{errors.budget.message}</p>
          )}
        </div>
      </div>

      {!siteKey && <p className="form-error">reCAPTCHA is not configured.</p>}

      <LeadConsentCheckbox
        className="form-consent"
        checked={smsConsent}
        onChange={setSmsConsent}
      />

      {submitError && <p className="form-error">{submitError}</p>}

      <button className="form-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span>Sending…</span>
            <span className="form-spinner" aria-hidden="true" />
          </>
        ) : (
          <>
            Check if you qualify <Icon name="arrow-right" />
          </>
        )}
      </button>

      <p className="form-note">
        Submitting starts a conversation, not a contract. The free build
        requires a qualifying plan at $895/month on a 6-month term.
      </p>

      <FormLegalLinks />
    </form>
  );
}
