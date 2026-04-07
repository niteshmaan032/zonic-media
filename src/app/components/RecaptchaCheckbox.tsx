"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";

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
};

export default function RecaptchaCheckbox({
  action,
  onExecutorReady,
}: RecaptchaCheckboxProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || RECAPTCHA_SITE_KEY;

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
    </div>
  );
}
