"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const RECAPTCHA_SITE_KEY = "6LcV06osAAAAAOintbuZMBlDCPVqgQFNRDMq7jAn";

type Grecaptcha = {
  ready: (callback: () => void) => void;
  render: (
    container: HTMLElement,
    parameters: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

type RecaptchaCheckboxProps = {
  value: string;
  onChange: (token: string) => void;
  resetSignal?: number;
  error?: string;
};

export default function RecaptchaCheckbox({
  value,
  onChange,
  resetSignal = 0,
  error,
}: RecaptchaCheckboxProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);
  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (
      !scriptReady ||
      !siteKey ||
      !containerRef.current ||
      !window.grecaptcha ||
      widgetIdRef.current !== null
    ) {
      return;
    }

    window.grecaptcha.ready(() => {
      if (
        !containerRef.current ||
        !window.grecaptcha ||
        widgetIdRef.current !== null
      ) {
        return;
      }

      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onChange(token),
        "expired-callback": () => onChange(""),
        "error-callback": () => onChange(""),
      });
    });
  }, [onChange, scriptReady, siteKey]);

  useEffect(() => {
    if (
      resetSignal === 0 ||
      widgetIdRef.current === null ||
      !window.grecaptcha
    ) {
      return;
    }

    window.grecaptcha.reset(widgetIdRef.current);

    if (value) {
      onChange("");
    }
  }, [onChange, resetSignal, value]);

  return (
    <div className="recaptcha-field">
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />

      {siteKey ? (
        <div className="recaptcha-widget" ref={containerRef} />
      ) : (
        <p className="text-danger mb-0">reCAPTCHA is not configured.</p>
      )}

      {error ? <p className="text-danger mb-0">{error}</p> : null}
    </div>
  );
}
