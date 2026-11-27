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
    // 26 Nov 2026: the home services phrases moved off this hub; since
    // 27 Nov the homepage owns them. The hub keeps its "industries we
    // serve" job and the contractor marketing wording.
    absolute: "Industries We Serve | Marketing for Contractors & Trades",
  },
  description:
    "Industries we serve, from contractors and home services to clinics and law firms: Google Maps, AI answers, reviews, websites and ads built for each.",
  keywords: [
    "industries we serve",
    "marketing for contractors",
    "contractor marketing agency",
    "digital marketing for contractors",
    "marketing by industry",
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
    title: "Industries We Serve | Marketing for Contractors & Trades",
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
