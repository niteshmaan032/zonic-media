"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

import RecaptchaCheckbox from "@/app/components/RecaptchaCheckbox";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";
import { SITE_CONTACT } from "@/shared/siteConfig";

type LeadContactFormValues = {
  fullName: string;
  contact: string;
  email: string;
  businessName: string;
  message: string;
};

type LeadContactFormProps = {
  leadFormTitle?: string;
  leadCallText?: ReactNode;
  submitButtonText?: string;
};

const DEFAULT_SERVICE = "Google My Business (GMB)";

export default function LeadContactForm({
  leadFormTitle = "Get Your Free GMB Suspension Audit",
  leadCallText = (
    <>
      One call can help recover your lost business visibility.{" "}
      <a href={SITE_CONTACT.phoneHref} className="lead-call-link">
        Call Now:{SITE_CONTACT.phoneDisplay}
      </a>
    </>
  ),
  submitButtonText = "Get Case Review",
}: LeadContactFormProps) {
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
  } = useForm<LeadContactFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      contact: "",
      email: "",
      businessName: "",
      message: "",
    },
  });

  const onSubmit = async (data: LeadContactFormValues) => {
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
          message: `Business Name: ${data.businessName}. Issue: ${data.message}`,
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
      console.error("Lead contact form submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="lead-form-wrapper">
      <h3 className="lead-form-title">{leadFormTitle}</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-2">
          <label className="form-label">
            Full Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: {
                value: 2,
                message: "Full name must be at least 2 characters.",
              },
              maxLength: {
                value: 100,
                message: "Full name must be at most 100 characters.",
              },
            })}
          />
          {errors.fullName && (
            <p className="text-danger mt-2 mb-0">{errors.fullName.message}</p>
          )}
        </div>

        <div className="row">
          <div className="col-md-6 mb-2">
            <label className="form-label">
              Phone number <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
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
            {errors.contact && (
              <p className="text-danger mt-2 mb-0">{errors.contact.message}</p>
            )}
          </div>

          <div className="col-md-6 mb-2">
            <label className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address.",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger mt-2 mb-0">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-2">
          <label className="form-label">
            Business Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Business Name"
            aria-invalid={errors.businessName ? "true" : "false"}
            {...register("businessName", {
              required: "Business name is required.",
              minLength: {
                value: 2,
                message: "Business name must be at least 2 characters.",
              },
              maxLength: {
                value: 100,
                message: "Business name must be at most 100 characters.",
              },
            })}
          />
          {errors.businessName && (
            <p className="text-danger mt-2 mb-0">
              {errors.businessName.message}
            </p>
          )}
        </div>

        <div className="mb-2">
          <label className="form-label">
            Your Message <span className="text-danger">*</span>
          </label>
          <textarea
            className="form-control"
            rows={2}
            placeholder="Write your message"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 5,
                message: "Message must be at least 5 characters.",
              },
              maxLength: {
                value: 1800,
                message: "Message must be at most 1800 characters.",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="text-danger mt-2 mb-0">{errors.message.message}</p>
          )}
        </div>

        <div className="mb-3">
          <RecaptchaCheckbox
            action={RECAPTCHA_ACTION}
            onExecutorReady={(executor) => {
              recaptchaExecutorRef.current = executor;
            }}
            onSmsConsentChange={setSmsConsent}
          />
        </div>

        <div className="d-grid mb-3">
          <button
            type="submit"
            className="lead-submit-btn"
            disabled={isSubmitting}
          >
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
              submitButtonText
            )}
          </button>
        </div>

        {submitError && (
          <p className="text-danger text-center mb-3">{submitError}</p>
        )}

        <div className="lead-confidential-box">
          <IoShieldCheckmarkSharp />
          Your information is 100% confidential. We never share your data.
        </div>

        <p className="lead-call-text">{leadCallText}</p>
      </form>
    </div>
  );
}
