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
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
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
  primaryService: string;
  budget: string;
};

const DEFAULT_SERVICE = "Web Design";

/** Kitchen Remodeling revenue lines — the answer routes the follow-up conversation. */
const SERVICES = [
  "Full Kitchen Remodels",
  "Custom Cabinetry",
  "Countertops",
  "Kitchen Islands",
  "Lighting & Layout",
  "Design-Build",
  "Mix of the above",
];

const BUDGET_OPTIONS = [
  { value: "under-895", label: "Under $895 — not ready yet" },
  { value: "895-1500", label: "$895 – $1,500" },
  { value: "1500-3000", label: "$1,500 – $3,000" },
  { value: "3000-plus", label: "$3,000+" },
];

export default function KitchenRemodelingLeadForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [submitError, setSubmitError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim();

  const recaptchaExecutorRef = useRef<(() => Promise<string>) | null>(null);

  const executeRecaptcha = useCallback(async () => {
    if (!siteKey) throw new Error("reCAPTCHA is not configured.");

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
      primaryService: "",
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
        `Remodeling company: ${data.company}`,
        `Primary service: ${data.primaryService}`,
        `Current website: ${data.website || "none provided"}`,
        `Service area: ${data.serviceArea}`,
        `Monthly marketing budget: ${budgetLabel}`,
      ];

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "free-kitchen-remodeling-website",
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
      console.error("Free kitchen remodeling website form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <form
      id="ofr-kitchen-remodeling-offer-form"
      className="eligibility-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {siteKey ? <LazyRecaptcha siteKey={siteKey} /> : null}

      <div className="form-heading">
        <span>
          <Icon name="mail" /> Free kitchen remodeling website eligibility
        </span>
        <h3>See If You Qualify.</h3>
        <p>
          A short form to review your market and growth fit. Submitting is not a
          contract.
        </p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="ofr-kitchen-remodeling-full-name">Your name *</label>
          <input
            id="ofr-kitchen-remodeling-full-name"
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
          <label htmlFor="ofr-kitchen-remodeling-business-name">Remodeling company *</label>
          <input
            id="ofr-kitchen-remodeling-business-name"
            placeholder="Company name"
            autoComplete="organization"
            aria-invalid={errors.company ? "true" : "false"}
            {...register("company", {
              required: "Remodeling company is required.",
              minLength: { value: 2, message: "At least 2 characters." },
              maxLength: { value: 120, message: "Max 120 characters." },
            })}
          />
          {errors.company && (
            <p className="form-field-error">{errors.company.message}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="ofr-kitchen-remodeling-phone">Phone *</label>
          <input
            id="ofr-kitchen-remodeling-phone"
            type="tel"
            placeholder="(555) 555-5555"
            autoComplete="tel"
            inputMode="numeric"
            aria-invalid={errors.contact ? "true" : "false"}
            onInput={(event: React.FormEvent<HTMLInputElement>) => {
              const target = event.currentTarget;
              target.value = target.value.replace(/[^0-9]/g, "");
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
          <label htmlFor="ofr-kitchen-remodeling-email">Email *</label>
          <input
            id="ofr-kitchen-remodeling-email"
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
          <label htmlFor="ofr-kitchen-remodeling-website">Current website</label>
          <input
            id="ofr-kitchen-remodeling-website"
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
          <label htmlFor="ofr-kitchen-remodeling-service-area">Service area *</label>
          <input
            id="ofr-kitchen-remodeling-service-area"
            placeholder="Cities, counties, or metro area"
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
          <label htmlFor="ofr-kitchen-remodeling-primary-service">
            Which work do you want more of? *
          </label>
          <select
            id="ofr-kitchen-remodeling-primary-service"
            className="form-select standalone-select"
            defaultValue=""
            aria-invalid={errors.primaryService ? "true" : "false"}
            {...register("primaryService", {
              required: "Please select a service.",
            })}
          >
            <option value="" disabled>
              Select a kitchen remodeling service
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.primaryService && (
            <p className="form-field-error">{errors.primaryService.message}</p>
          )}
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="ofr-kitchen-remodeling-budget">Monthly marketing budget *</label>
          <select
            id="ofr-kitchen-remodeling-budget"
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
