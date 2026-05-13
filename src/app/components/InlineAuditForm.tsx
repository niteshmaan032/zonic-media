"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import RecaptchaCheckbox from "@/app/components/RecaptchaCheckbox";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";

type FormValues = {
  fullName: string;
  contact: string;
  businessName: string;
  message: string;
};

interface InlineAuditFormProps {
  eyebrow?: string;
  heading: string;
  description: string;
}

const ArrowIcon = () => (
  <span className="buttons__icon-wrapper" aria-hidden="true">
    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="buttons__icon-svg" width="8">
      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
    </svg>
    <svg viewBox="0 0 14 15" fill="none" width="8" xmlns="http://www.w3.org/2000/svg" className="buttons__icon-svg buttons__icon-svg--copy">
      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
    </svg>
  </span>
);

export default function InlineAuditForm({
  eyebrow = "Quick Audit Request",
  heading,
  description,
}: InlineAuditFormProps) {
  const [submitError, setSubmitError] = useState("");
  const [smsConsent, setSmsConsent] = useState(true);
  const recaptchaExecutorRef = useRef<(() => Promise<string>) | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { fullName: "", contact: "", businessName: "", message: "" },
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
          formType: "gmb-reinstatement",
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: SITE_CONTACT.email,
          contact: data.contact,
          businessName: data.businessName,
          message: `Business Name: ${data.businessName}. Message: ${data.message}`,
          services: ["Local SEO"],
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
      sessionStorage.setItem("thank_you_access_allowed_at", Date.now().toString());
      router.push("/thank-you");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="iaf-banner">
      <div className="iaf-copy">
        <p className="car-tow-eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <form className="iaf-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="iaf-field">
          <input
            type="text"
            placeholder="Full name"
            aria-label="Full name"
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: { value: 2, message: "Full name must be at least 2 characters." },
              maxLength: { value: 100, message: "Full name must be at most 100 characters." },
            })}
          />
          {errors.fullName && <p className="text-danger mt-2 mb-0">{errors.fullName.message}</p>}
        </div>
        <div className="iaf-field">
          <input
            type="tel"
            placeholder="Phone number"
            aria-label="Phone number"
            inputMode="numeric"
            aria-invalid={errors.contact ? "true" : "false"}
            onInput={(e) => {
              const t = e.currentTarget as HTMLInputElement;
              t.value = t.value.replace(/[^0-9]/g, "");
            }}
            {...register("contact", {
              required: "Phone number is required.",
              pattern: { value: /^[0-9]{7,15}$/, message: "Phone number must contain only digits (7 to 15)." },
            })}
          />
          {errors.contact && <p className="text-danger mt-2 mb-0">{errors.contact.message}</p>}
        </div>
        <div className="iaf-field">
          <input
            type="text"
            placeholder="Business name"
            aria-label="Business name"
            aria-invalid={errors.businessName ? "true" : "false"}
            {...register("businessName", {
              required: "Business name is required.",
              minLength: { value: 2, message: "Business name must be at least 2 characters." },
              maxLength: { value: 100, message: "Business name must be at most 100 characters." },
            })}
          />
          {errors.businessName && <p className="text-danger mt-2 mb-0">{errors.businessName.message}</p>}
        </div>
        <div className="iaf-field">
          <textarea
            placeholder="Your message"
            aria-label="Your message"
            rows={1}
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: "Message is required.",
              minLength: { value: 5, message: "Message must be at least 5 characters." },
              maxLength: { value: 1800, message: "Message must be at most 1800 characters." },
            })}
          />
          {errors.message && <p className="text-danger mt-2 mb-0">{errors.message.message}</p>}
        </div>
        <button type="submit" className="buttons" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Get a Free Audit"}
          <ArrowIcon />
        </button>
        <div className="iaf-recaptcha">
          <RecaptchaCheckbox
            action={RECAPTCHA_ACTION}
            onExecutorReady={(executor) => { recaptchaExecutorRef.current = executor; }}
            onSmsConsentChange={setSmsConsent}
          />
        </div>
        {submitError && (
          <p className="text-danger text-center mb-0 iaf-error">{submitError}</p>
        )}
      </form>
    </div>
  );
}
