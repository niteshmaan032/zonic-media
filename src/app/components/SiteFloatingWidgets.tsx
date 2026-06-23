"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
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
const GHL_PAGES = [
  "/services",
  "/services/launchpad",
  "/services/delaware/digital-marketing",
  "/services/google-ads",
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

export default function SiteFloatingWidgets() {
  const pathname = usePathname();
  const isGhlPage = GHL_PAGES.includes(pathname);

  // The widget itself is rendered server-side by GhlChatWidget on GHL pages.
  // Here we only toggle the `ghl-page` body class (CSS safety net that hides a
  // lingering widget on non-GHL pages) and tear down any leftover widget DOM
  // when the user navigates onto a page that has a lead form.
  useEffect(() => {
    const cls = "ghl-page";

    if (isGhlPage) {
      document.body.classList.add(cls);
    } else {
      document.body.classList.remove(cls);
      removeGhlWidget();
    }

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
