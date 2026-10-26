/*
 * SEO SERVICES — redesign draft (25 Oct 2026) of /services/seo-services.
 * Markup in src/components/rd/seoservices/, copy + keyword research notes
 * in content.ts. Noindex until the owner approves the swap; canonical and
 * schema URLs point at the live page so this file can replace it as-is.
 * Schema mirrors the live page: BreadcrumbList, Service (no
 * aggregateRating, GSC flags it) with an offer catalog, FAQPage.
 */

import type { Metadata } from "next";
import {
  FAQ,
  LIVE_URL,
  META,
  SERVICES,
} from "@/components/rd/seoservices/content";
import { SeoServicesPage } from "@/components/rd/seoservices/SeoServicesPage";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: { absolute: META.title },
  description: META.description,
  keywords: META.keywords,
  alternates: { canonical: LIVE_URL },
  // Redesign draft: out of the index until it replaces the live page.
  openGraph: {
    title: META.title,
    description: META.description,
    url: LIVE_URL,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — SEO services for small businesses",
      },
    ],
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "SEO Services", url: LIVE_URL },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  serviceType: "Search Engine Optimization",
  url: `${SITE_URL}${LIVE_URL}`,
  description: META.description,
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses across the United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services",
    itemListElement: SERVICES.items.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${LIVE_URL}`,
  mainEntity: FAQ.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
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
      <SeoServicesPage />
    </>
  );
}
