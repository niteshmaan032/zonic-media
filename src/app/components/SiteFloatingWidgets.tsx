"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
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

  // The GHL widget is loaded globally (layout.tsx) but kept hidden via CSS
  // unless the body has the `ghl-page` class. Toggling a class (instead of
  // mounting/unmounting the script) avoids the widget lingering in the DOM
  // after client-side navigation.
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
    </>
  );
}
