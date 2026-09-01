"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import FormLegalLinks from "@/app/components/FormLegalLinks";
import LazyRecaptcha from "@/app/components/LazyRecaptcha";
import LeadConsentCheckbox from "@/app/components/LeadConsentCheckbox";
import { RECAPTCHA_ACTION } from "@/shared/recaptcha";
import "@/app/style/offerModal.css";

/**
 * Timed offer modal for the free-website landers.
 *
 * Opens 30 seconds after the page loads, every time, wherever the visitor
 * happens to be on the page. There is deliberately no once-per-session memory
 * and no "skip if they are already at the form" guard — the offer is the point
 * of these pages, so it always gets shown.
 *
 * Four fields: name, phone, email and the service they want more of, so the
 * lead arrives already qualified by industry. Everything else (budget, area,
 * current site) stays on the in-page form. A circular "claim offer" seal sits
 * over the corner; it is aria-hidden because it only restates the CTA.
 *
 * Colours come from the host lander's palette. The markup sits inside the
 * page's scope element, so `--blue` / `--yellow` / `--ink` inherit and each
 * industry keeps its own accent with no per-page stylesheet.
 */

/** Delay before the modal opens, in milliseconds. */
const TRIGGER_DELAY = 30000;

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
  contact: string;
  email: string;
  primaryService: string;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export type OfferPopupModalProps = {
  /** Prefixes element ids so the modal never collides with the page form. */
  idPrefix: string;
  /** Lead routing tag, matching the page's in-body form. */
  formType: string;
  heading: string;
  /** Label for the service select, e.g. "Roofing service you want more of". */
  serviceLabel: string;
  /** Empty-state option text, e.g. "Select a roofing service". */
  servicePlaceholder: string;
  /** The page's own service lines, so the lead arrives pre-qualified. */
  services: readonly string[];
};

export default function OfferPopupModal({
  idPrefix,
  formType,
  heading,
  serviceLabel,
  servicePlaceholder,
  services,
}: OfferPopupModalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim();

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    lastFocusedRef.current?.focus();
  }, []);

  // ── Timed trigger ───────────────────────────────────────────────────────
  useEffect(() => {
    const timer = window.setTimeout(() => {
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    }, TRIGGER_DELAY);

    return () => window.clearTimeout(timer);
  }, []);

  // ── Escape to close, body scroll lock, focus management ─────────────────
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes || nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    // Lock the page behind the modal. `overflow: hidden` alone leaks on iOS
    // Safari, so pin the body and restore the offset on close.
    const scrollY = window.scrollY;
    const { body } = document;
    body.classList.add("offer-modal-open");
    body.style.top = `-${scrollY}px`;

    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.classList.remove("offer-modal-open");
      body.style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, [open, close]);

  // ── reCAPTCHA ───────────────────────────────────────────────────────────
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { fullName: "", contact: "", email: "", primaryService: "" },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitError("");

    try {
      const recaptchaToken = await executeRecaptcha();

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType,
          sourcePage: pathname,
          pageUrl: window.location.href,
          fullName: data.fullName,
          email: data.email,
          contact: data.contact,
          message: `${serviceLabel}: ${data.primaryService}. Submitted from the on-page offer popup.`,
          services: ["Web Design"],
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
      console.error("Offer popup submission failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  if (!open) return null;

  const titleId = `${idPrefix}-modal-title`;

  return (
    <div className="offer-modal" role="presentation">
      {siteKey ? <LazyRecaptcha siteKey={siteKey} /> : null}

      <div className="offer-modal__backdrop" onClick={close} />

      <div
        className="offer-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
      >
        <button
          type="button"
          className="offer-modal__close"
          onClick={close}
          aria-label="Close offer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <span className="offer-modal__badge" aria-hidden="true">
          <b>Claim</b>
          <i>offer</i>
        </span>

        <div className="offer-modal__scroll">
        <h2 id={titleId}>{heading}</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="offer-modal__grid">
            <div className="offer-modal__field">
              <label htmlFor={`${idPrefix}-modal-name`}>Your name *</label>
              <input
                id={`${idPrefix}-modal-name`}
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
                <p className="offer-modal__error">{errors.fullName.message}</p>
              )}
            </div>

            <div className="offer-modal__field">
              <label htmlFor={`${idPrefix}-modal-phone`}>Phone *</label>
              <input
                id={`${idPrefix}-modal-phone`}
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
                <p className="offer-modal__error">{errors.contact.message}</p>
              )}
            </div>

            <div className="offer-modal__field offer-modal__field--full">
              <label htmlFor={`${idPrefix}-modal-email`}>Email *</label>
              <input
                id={`${idPrefix}-modal-email`}
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
                <p className="offer-modal__error">{errors.email.message}</p>
              )}
            </div>

            <div className="offer-modal__field offer-modal__field--full">
              <label htmlFor={`${idPrefix}-modal-service`}>
                {serviceLabel} *
              </label>
              <select
                id={`${idPrefix}-modal-service`}
                defaultValue=""
                aria-invalid={errors.primaryService ? "true" : "false"}
                {...register("primaryService", {
                  required: "Please select a service.",
                })}
              >
                <option value="" disabled>
                  {servicePlaceholder}
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.primaryService && (
                <p className="offer-modal__error">
                  {errors.primaryService.message}
                </p>
              )}
            </div>
          </div>

          {!siteKey && (
            <p className="offer-modal__error">reCAPTCHA is not configured.</p>
          )}

          <LeadConsentCheckbox
            className="offer-modal__consent"
            checked={smsConsent}
            onChange={setSmsConsent}
          />

          {submitError && <p className="offer-modal__error">{submitError}</p>}

          <button
            className="offer-modal__submit"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Claim my free website"}
          </button>

            <FormLegalLinks />
          </form>
        </div>
      </div>
    </div>
  );
}
