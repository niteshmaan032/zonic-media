"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";
import FloatingPhone from "@/app/components/FloatingPhone";
import ChatBot from "@/app/components/ChatBot";

// Pages where the GHL (LeadConnector) chat widget should be the active chat.
// On every other page we show our own floating ChatBot instead.
const GHL_PAGES = [
  "/services",
  "/services/launchpad",
  "/services/delaware/digital-marketing",
  "/services/google-ads",
];

export default function SiteFloatingWidgets() {
  const pathname = usePathname();
  const isGhlPage = GHL_PAGES.includes(pathname);

  // A2P compliance: the GHL (LeadConnector) chat widget must be the ONLY
  // place collecting phone numbers / SMS consent on any page it appears on.
  // The widget loader is therefore mounted ONLY on the GHL pages below (which
  // have their phone-collecting forms disabled) — never site-wide. Loading it
  // globally would make every page with a lead form a "Multiple Opt-ins"
  // violation and cause A2P campaign rejection.
  //
  // The `ghl-page` body class + CSS in globals.css is kept as a safety net so
  // the widget stays hidden on other pages if it lingers in the DOM after a
  // client-side navigation away from a GHL page.
  useEffect(() => {
    const cls = "ghl-page";
    if (isGhlPage) {
      document.body.classList.add(cls);
    } else {
      document.body.classList.remove(cls);
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

      {/* GoHighLevel (LeadConnector) chat widget — loaded ONLY on GHL pages so
          it is never embedded on a page that has a competing phone form. */}
      {isGhlPage && (
        <Script
          id="ghl-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a2ac834e20523fdce854ae4"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
