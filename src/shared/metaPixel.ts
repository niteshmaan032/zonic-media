// Meta (Facebook) pixel — base code installed in the site's own code in
// Nov 2026 (Meta's setup email, pixel 1822013341829789). Until then the
// pixel only ran inside the GTM container, which loads on the first
// interaction or 60 s after load, so visitors who left without touching the
// page were never counted.
//
// Meta's base code creates an `fbq` command queue, injects fbevents.js and
// tracks a PageView. The queue part lives here; AnalyticsProvider loads the
// script itself (lazyOnload, like the Google tag) and calls
// trackMetaPageView() on every route change outside the admin. Meta's own
// history tracking is switched off (`disablePushState`) so a client-side
// move into the admin never records a PageView there.

export const META_PIXEL_ID = "1822013341829789";

export const META_PIXEL_SDK_SRC =
  "https://connect.facebook.net/en_US/fbevents.js";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
  disablePushState?: boolean;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
    __fbqInitialized?: boolean;
  }
}

/** Meta's queue stub (same as its base code, minus the script tag). Calls
 *  made before fbevents.js arrives wait in `queue` and replay on load. */
function ensureFbq(): Fbq {
  if (window.fbq) return window.fbq;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];

  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  return fbq;
}

export function trackMetaPageView() {
  const fbq = ensureFbq();
  fbq.disablePushState = true;

  if (!window.__fbqInitialized) {
    window.__fbqInitialized = true;
    fbq("init", META_PIXEL_ID);
  }

  fbq("track", "PageView");
}
