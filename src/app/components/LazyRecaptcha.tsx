"use client";

import { useEffect } from "react";

// Loads the reCAPTCHA v3 script on the visitor's first interaction instead of
// during page startup. On slow mobile connections the ~700 KB reCAPTCHA
// payload competes with CSS/fonts/images and wrecks FCP/LCP; deferring it to
// first touch/scroll/keypress removes it from the critical window without
// changing behavior — every form's executeRecaptcha() already polls up to 10s
// for window.grecaptcha, and a visitor must interact long before submitting.
const SCRIPT_ID = "recaptcha-v3-script";
const INTERACTION_EVENTS: (keyof WindowEventMap)[] = [
  "pointerdown",
  "touchstart",
  "keydown",
  "scroll",
  "wheel",
];

export function injectRecaptchaScript(siteKey: string | undefined) {
  if (!siteKey || typeof document === "undefined") return;
  if (document.getElementById(SCRIPT_ID) || window.grecaptcha) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
  script.async = true;
  document.head.appendChild(script);
}

export default function LazyRecaptcha({ siteKey }: { siteKey?: string }) {
  useEffect(() => {
    if (!siteKey) return;
    if (document.getElementById(SCRIPT_ID) || window.grecaptcha) return;

    const load = () => injectRecaptchaScript(siteKey);

    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, load, { once: true, passive: true }),
    );

    return () => {
      INTERACTION_EVENTS.forEach((event) =>
        window.removeEventListener(event, load),
      );
    };
  }, [siteKey]);

  return null;
}
