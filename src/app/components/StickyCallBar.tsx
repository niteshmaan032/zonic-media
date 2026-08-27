"use client";

import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { SITE_CONTACT } from "@/shared/siteConfig";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Persistent mobile click-to-call bar on service pages (Aug 2026 SEO plan,
 * action 19). A suspended-profile owner wants to phone, not fill a form.
 * Mobile-only via CSS (.sticky-call-bar is display:none above 767px).
 */
const SERVICE_PATH_PREFIXES = [
  "/services",
  "/local-seo-google-business-optimization",
];

// The location landing pages carry their own hero call CTA and footer contact
// rails; the extra fixed bar doubled up on small screens, so they opt out.
const EXCLUDED_PATH_PREFIXES = [
  "/services/delaware",
  "/services/philadelphia",
  "/services/wilmington",
  "/services/nyc",
];

export default function StickyCallBar() {
  const pathname = usePathname();
  const matches = (prefix: string) =>
    pathname === prefix || pathname.startsWith(`${prefix}/`);
  const isServicePage =
    SERVICE_PATH_PREFIXES.some(matches) &&
    !EXCLUDED_PATH_PREFIXES.some(matches);

  if (!isServicePage) {
    return null;
  }

  const trackCall = () => {
    window.gtag?.("event", "click_to_call", {
      event_category: "engagement",
      event_label: pathname,
    });
  };

  return (
    <a
      href={SITE_CONTACT.phoneHref}
      className="sticky-call-bar"
      onClick={trackCall}
      aria-label={`Call Zonic Media at ${SITE_CONTACT.phoneDisplay}`}
    >
      <FaPhoneAlt aria-hidden="true" />
      <span>Call {SITE_CONTACT.phoneDisplay}</span>
    </a>
  );
}
