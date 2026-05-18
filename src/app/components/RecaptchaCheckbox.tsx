"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import { SITE_CONTACT } from "@/shared/siteConfig";

const RECAPTCHA_SITE_KEY = "6Ldj3aosAAAAABKXmvYgO85tVuQrkvCdtBAOKShY";

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
};

export default function RecaptchaCheckbox({
  action,
  onExecutorReady,
  onSmsConsentChange,
}: RecaptchaCheckboxProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const [smsConsentChecked, setSmsConsentChecked] = useState(true);
  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || RECAPTCHA_SITE_KEY;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/+$/, "");
  const privacyHref = appUrl
    ? `${appUrl}/legal/privacy-policy`
    : "/legal/privacy-policy";

  const execute = useCallback(async () => {
    if (!siteKey || !scriptReady || !window.grecaptcha) {
      throw new Error("reCAPTCHA is not ready yet. Please try again.");
    }

    return await new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha
          ?.execute(siteKey, { action })
          .then(resolve)
          .catch(() => {
            reject(
              new Error("Unable to verify reCAPTCHA right now. Please try again."),
            );
          });
      });
    });
  }, [action, scriptReady, siteKey]);

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
        onReady={() => setScriptReady(true)}
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

      <label className="sms-consent-checkbox">
        <input
          type="checkbox"
          name="smsConsent"
          value="yes"
          checked={smsConsentChecked}
          onChange={(event) => setSmsConsentChecked(event.currentTarget.checked)}
        />
        <span>
          By submitting this form, you agree to receive personalized text
          messages, emails, and calls (e.g., call notifications, service
          updates, replies) from us at the cell number used when signing up.
          Consent is not a condition of any purchase. Msg frequency varies. SMS
          Msg and data rates may apply. To opt out at any time, reply STOP; no
          more messages will be sent. Reply &quot;HELP&quot; for help. Call{" "}
          <a href={SITE_CONTACT.phoneHref}>{SITE_CONTACT.phoneDisplay}</a> or
          email at <a href={SITE_CONTACT.emailHref}>{SITE_CONTACT.email}</a>{" "}
          for more info. Visit{" "}
          <a
            href={privacyHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          to view terms &amp; privacy.
        </span>
      </label>
    </div>
  );
}
