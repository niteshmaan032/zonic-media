"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import LeadConsentCheckbox from "@/app/components/LeadConsentCheckbox";

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (
    siteKey: string,
    options: {
      action: string;
    },
  ) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

type RecaptchaCheckboxProps = {
  action: string;
  onExecutorReady?: (executor: (() => Promise<string>) | null) => void;
  onSmsConsentChange?: (checked: boolean) => void;
  /** Kept for backwards compatibility; no longer changes the consent copy. */
  collapsibleConsent?: boolean;
  /**
   * When false, only the reCAPTCHA script + branding are rendered (no built-in
   * SMS-consent checkbox). Use this when the parent form supplies its own
   * consent UI.
   */
  renderConsent?: boolean;
};

export default function RecaptchaCheckbox({
  action,
  onExecutorReady,
  onSmsConsentChange,
  renderConsent = true,
}: RecaptchaCheckboxProps) {
  const [smsConsentChecked, setSmsConsentChecked] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim();

  const execute = useCallback(async () => {
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

    return await new Promise<string>((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(siteKey, { action })
          .then(resolve)
          .catch(() => {
            reject(
              new Error("Unable to verify reCAPTCHA right now. Please try again."),
            );
          });
      });
    });
  }, [action, siteKey]);

  useEffect(() => {
    if (!onExecutorReady) {
      return;
    }

    onExecutorReady(siteKey ? execute : null);

    return () => onExecutorReady(null);
  }, [execute, onExecutorReady, siteKey]);

  useEffect(() => {
    onSmsConsentChange?.(smsConsentChecked);
  }, [onSmsConsentChange, smsConsentChecked]);

  return (
    <div className="recaptcha-field">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
      />

      {siteKey ? (
        <p className="mb-0 text-muted small">
          Protected by reCAPTCHA. Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      ) : (
        <p className="text-danger mb-0">reCAPTCHA is not configured.</p>
      )}

      {renderConsent && (
        <LeadConsentCheckbox
          className="sms-consent-checkbox"
          checked={smsConsentChecked}
          onChange={setSmsConsentChecked}
        />
      )}
    </div>
  );
}
