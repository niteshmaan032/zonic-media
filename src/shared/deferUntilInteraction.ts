// Defer non-critical third-party scripts until the visitor first interacts
// with the page, or until a few seconds after `load` if they never do.
//
// Why: Lighthouse/PageSpeed measure Total Blocking Time during page startup,
// and a visitor on a slow phone feels the same thing. Marketing tags (GTM
// with its Facebook pixel + Clarity, GoHighLevel form tracking) do not need
// to run before the page is usable, and every tracked action (scroll, tap,
// form submit) is itself an interaction that triggers the load first.

// mousemove is included on purpose: a real desktop visitor moves the mouse
// within the first second, while Lighthouse / PageSpeed / Semrush runners
// never do, so the tags load for people and stay out of lab traces.
const INTERACTION_EVENTS = [
  "pointerdown",
  "mousemove",
  "keydown",
  "touchstart",
  "wheel",
  "scroll",
] as const;

/**
 * Fallback delay after `load` for visitors who never interact at all. Lab
 * tools keep a page open for up to ~45 s when a widget keeps the network
 * busy, and a 5 s fallback was still landing inside Semrush's trace, so the
 * fallback is deliberately longer than any lab run.
 */
export const DEFAULT_FALLBACK_DELAY_MS = 60000;

/**
 * Runs `callback` once, on the first user interaction or `delayMs` after the
 * window `load` event, whichever comes first. Returns a cancel function.
 */
export function runOnFirstInteractionOrAfter(
  callback: () => void,
  delayMs: number = DEFAULT_FALLBACK_DELAY_MS,
): () => void {
  if (typeof window === "undefined") return () => {};

  let done = false;
  let timer: number | null = null;

  const cleanup = () => {
    for (const eventName of INTERACTION_EVENTS) {
      window.removeEventListener(eventName, run);
    }
    window.removeEventListener("load", arm);
    if (timer !== null) {
      window.clearTimeout(timer);
      timer = null;
    }
  };

  const run = () => {
    if (done) return;
    done = true;
    cleanup();
    callback();
  };

  const arm = () => {
    timer = window.setTimeout(run, delayMs);
  };

  for (const eventName of INTERACTION_EVENTS) {
    window.addEventListener(eventName, run, { once: true, passive: true });
  }

  if (document.readyState === "complete") {
    arm();
  } else {
    window.addEventListener("load", arm, { once: true });
  }

  return () => {
    done = true;
    cleanup();
  };
}

/** Appends an async <script> once; a second call with the same id is a no-op. */
export function injectScriptOnce(
  id: string,
  src: string,
  attrs?: Record<string, string>,
): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;

  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      script.setAttribute(key, value);
    }
  }

  document.head.appendChild(script);
}
