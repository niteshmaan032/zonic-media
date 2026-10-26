/*
 * INDUSTRIES HUB — redesign draft (23 Oct 2026; copy re-optimized 24 Oct). Markup and copy live in
 * src/components/rd/industries/ (IndustriesPage.tsx, industriesUi.tsx,
 * content.ts, icons.tsx) so Tailwind always scans them; this route only
 * holds metadata and JSON-LD. Noindex, canonical to the live /industries,
 * which stays untouched until the owner approves the swap.
 */

import type { Metadata } from "next";
import { IndustriesPage } from "@/components/rd/industries/IndustriesPage";
import {
  ALL_INDUSTRIES,
  INDUSTRY_FAQS,
} from "@/components/rd/industries/content";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: {
    absolute:
      "Industries | Home Services & Contractor Marketing Agency",
  },
  description:
    "Marketing for contractors, home services and local businesses: Google Maps rankings, AI recommendations, reviews, websites and Google Ads planned for your industry.",
  keywords: [
    "home services marketing agency",
    "home services marketing",
    "contractor marketing agency",
    "marketing for contractors",
    "digital marketing for contractors",
    "local business marketing",
    "home improvement marketing",
    "home service business marketing",
    "industries we serve",
  ],
  alternates: { canonical: "/industries" },
  // Redesign draft: out of the index until it replaces /industries.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Industries We Serve | Home Services & Contractor Marketing",
    description:
      "Local SEO, Google Maps, reviews, websites and ads planned around how customers in your trade search, from roofing and HVAC to dental, legal and real estate.",
    url: "/industries",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Industries We Serve", url: "/industries" },
]);

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/industries#collection`,
  url: `${SITE_URL}/industries`,
  name: "Industries We Serve",
  description:
    "Industry-specific local business marketing from Zonic Media for contractors, home services, clinics and firms across the United States.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: ALL_INDUSTRIES.length,
    itemListElement: ALL_INDUSTRIES.map((ind, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${ind.name} Marketing`,
      url: `${SITE_URL}${ind.href}`,
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: INDUSTRY_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <IndustriesPage />
    </>
  );
}
