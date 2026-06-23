"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import FloatingPhone from "@/app/components/FloatingPhone";
import ChatBot from "@/app/components/ChatBot";

// Pages where the GHL (LeadConnector) chat widget should be the active chat.
// On every other page we show our own floating ChatBot instead.
//
// COMPLIANCE: the GHL widget may only be *installed* on pages that have no
// other phone/SMS opt-in form. Loading the loader site-wide (even when hidden
// with CSS) makes GHL's compliance crawler see the widget on the same pages as
// our lead forms and reject the application ("multiple opt-in sources"). So we
// inject the loader only on these (form-free) pages and tear it down when the
// user navigates away.
const GHL_PAGES = [
  "/services",
  "/services/launchpad",
  "/services/delaware/digital-marketing",
  "/services/google-ads",
];

const GHL_WIDGET_ID = "6a2ac834e20523fdce854ae4";

// Remove the loader script and every node the widget injects so it does not
// linger in the DOM after a client-side navigation to a page with a lead form.
function removeGhlWidget() {
  document
    .querySelectorAll(
      'chat-widget, script[src*="leadconnectorhq.com"], iframe[src*="leadconnectorhq.com"]',
    )
    .forEach((el) => el.remove());
}

export default function SiteFloatingWidgets() {
  const pathname = usePathname();
  const isGhlPage = GHL_PAGES.includes(pathname);

  // Inject the GHL chat-widget loader only on GHL pages; remove it (script +
  // injected DOM) everywhere else. The `ghl-page` body class + CSS rule is a
  // safety net that keeps any lingering widget hidden until cleanup runs.
  useEffect(() => {
    const cls = "ghl-page";

    if (!isGhlPage) {
      document.body.classList.remove(cls);
      removeGhlWidget();
      return;
    }

    document.body.classList.add(cls);

    if (
      !document.querySelector('script[src*="leadconnectorhq.com/loader.js"]')
    ) {
      const script = document.createElement("script");
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.async = true;
      script.setAttribute(
        "data-resources-url",
        "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
      );
      script.setAttribute("data-widget-id", GHL_WIDGET_ID);
      script.setAttribute("data-source", "WEB_USER");
      document.body.appendChild(script);
    }

    return () => {
      document.body.classList.remove(cls);
      removeGhlWidget();
    };
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
