/*
 * GOOGLE ADS SERVICE PAGE — redesign draft (24 Oct 2026). Markup and copy
 * live in src/components/rd/googleads/ (GoogleAdsPage.tsx, googleAdsUi.tsx,
 * content.ts) so Tailwind always scans them; this route only holds metadata
 * and JSON-LD. Noindex, canonical to the live /services/google-ads, which
 * stays untouched until the owner approves the swap.
 */

import type { Metadata } from "next";
import { GoogleAdsPage } from "@/components/rd/googleads/GoogleAdsPage";
import { ADS_FAQS } from "@/components/rd/googleads/content";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  // Copy re-optimized 24 Oct 2026. Semrush has no ranking data for the
  // live URL. Title carries google ads agency (9,900), google ads / ppc
  // management and ppc management services (8,100); the H1 carries google
  // ads management services (2,900, KD 19).
  title: {
    absolute: "Google Ads Agency | Google Ads & PPC Management Services",
  },
  description:
    "Google Ads management for small and mid-size businesses: search campaigns, Local Services Ads and remarketing, with call tracking and 0% ad-spend markup.",
  keywords: [
    "google ads management",
    "google ads management services",
    "google ads management agency",
    "google ads agency",
    "ppc management",
    "ppc management services",
    "ppc agency",
    "google ads services",
    "paid search agency",
    "ppc audit",
    "google ads audit",
    "local services ads management",
    "google ads agency for small business",
  ],
  alternates: { canonical: "/services/google-ads" },
  // Redesign draft: out of the index until it replaces /services/google-ads.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Google Ads Management Services | Zonic Media",
    description:
      "Search campaigns, Local Services Ads and remarketing for small and mid-size businesses, with every lead tracked and 0% ad-spend markup.",
    url: "/services/google-ads",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Google Ads", url: "/services/google-ads" },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/services/google-ads#service`,
  name: "Google Ads Management Services",
  alternateName: [
    "PPC Management Services",
    "Google Ads Agency for Small Business",
    "Pay-Per-Click Campaign Management",
    "Local Services Ads Management",
  ],
  serviceType: "Google Ads / PPC Management",
  description:
    "Zonic Media sets up and manages Google Ads for small and mid-size businesses: search campaigns, Local Services Ads and remarketing, with keyword and negative-keyword management, weekly ad tests, landing pages, call and form tracking and monthly lead reports. 0% ad-spend markup.",
  url: `${SITE_URL}/services/google-ads`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses that want more calls and leads from Google Ads",
  },
  offers: {
    "@type": "Offer",
    name: "Free Google Ads account audit",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free review of your Google Ads account covering wasted clicks, keyword gaps and tracking problems, with a plan to fix them.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ADS_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GoogleAdsPage />
    </>
  );
}
