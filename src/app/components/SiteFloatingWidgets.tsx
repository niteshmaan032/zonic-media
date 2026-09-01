"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import FloatingPhone from "@/app/components/FloatingPhone";
import ChatBot from "@/app/components/ChatBot";

// Pages where the GHL (LeadConnector) chat widget should be the active chat.
// On every other page we show our own floating ChatBot instead.
//
// COMPLIANCE: the GHL widget may only be *installed* on pages that have no
// other phone/SMS opt-in form, or GHL's compliance crawler rejects it for
// "multiple opt-in sources". The loader is therefore rendered server-side (so
// the crawler, which doesn't run JS, can detect it) only on these form-free
// pages — see GhlChatWidget.tsx. This component just keeps the rest of the UI
// in sync: hide our own ChatBot on GHL pages, and remove any widget DOM that
// lingers after a client-side navigation to a page that has a lead form.
// NOTE: /services/delaware/digital-marketing was removed from this list in
// Aug 2026 — that page now carries its own ServiceLeadForm, which would trip
// GHL's "multiple opt-in sources" check, so it runs our own ChatBot instead.
const GHL_PAGES = [
  "/services",
  "/services/launchpad",
  "/services/google-ads",
  // Free-website offer landers. NOTE: these four DO carry a lead form with a
  // phone field and SMS consent, which is the "multiple opt-in sources" shape
  // GHL's compliance crawler rejects — added on explicit request.
  "/website-design-agency-us/offer",
  "/roofing-website-design-agency-us/offer",
  "/hvac-website-design-agency-us/offer",
  "/plumber-website-design-agency-us/offer",
];

// Remove the loader script and every node the widget injects so it does not
// linger in the DOM after a client-side navigation to a page with a lead form.
function removeGhlWidget() {
  document
    .querySelectorAll(
      'chat-widget, script[src*="leadconnectorhq.com"], iframe[src*="leadconnectorhq.com"]',
    )
    .forEach((el) => el.remove());
}

// On a full page load the server-rendered loader <script> (GhlChatWidget) is
// parsed and executed by the browser. On a client-side navigation React inserts
// that <script> node but the browser never runs it, so the widget never shows
// until a refresh. Injecting the loader programmatically makes it execute.
function injectGhlWidget() {
  if (document.querySelector('chat-widget, iframe[src*="leadconnectorhq.com"]')) {
    return; // widget already present
  }
  const script = document.createElement("script");
  script.src = "https://widgets.leadconnectorhq.com/loader.js";
  script.async = true;
  script.setAttribute(
    "data-resources-url",
    "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
  );
  script.setAttribute("data-widget-id", "6a2ac834e20523fdce854ae4");
  script.setAttribute("data-source", "WEB_USER");
  document.body.appendChild(script);
}

export default function SiteFloatingWidgets() {
  const pathname = usePathname();
  const isGhlPage = GHL_PAGES.includes(pathname);
  const initialLoadRef = useRef(true);

  // The widget itself is rendered server-side by GhlChatWidget on GHL pages.
  // Here we toggle the `ghl-page` body class (CSS safety net that hides a
  // lingering widget on non-GHL pages), tear down any leftover widget DOM when
  // the user navigates onto a page that has a lead form, and — on a client-side
  // navigation onto a GHL page — execute the loader (the server-rendered script
  // doesn't run on SPA navigation, only on a full page load).
  useEffect(() => {
    const cls = "ghl-page";

    if (isGhlPage) {
      document.body.classList.add(cls);
      if (!initialLoadRef.current) {
        injectGhlWidget();
      }
    } else {
      document.body.classList.remove(cls);
      removeGhlWidget();
    }

    initialLoadRef.current = false;

    return () => document.body.classList.remove(cls);
  }, [isGhlPage]);

  if (pathname.startsWith("/admindashboard")) {
    return null;
  }

  return (
    <>
      <FloatingPhone />
      {/* Old floating chatbot shows everywhere except the GHL pages above. */}
      {!isGhlPage && <ChatBot />}
    </>
  );
}
