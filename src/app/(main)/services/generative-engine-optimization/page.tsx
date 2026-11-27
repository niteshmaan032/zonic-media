/*
 * Generative Engine Optimization (26 Nov 2026): new service page, built on
 * its own components in src/components/rd/geo/. Keyword split with
 * /services/ai-seo-services: this page owns "generative engine optimization
 * services / agency / company" and "geo agency"; the AI SEO page keeps "ai
 * seo services / agency", AEO, LLM SEO and ChatGPT SEO (Google's top 10 for
 * the two families share no URLs). Research: research_notes/GEO service
 * page research/.
 */

import type { Metadata } from "next";
import { FAQ, META, PAGE_URL, SERVICES } from "@/components/rd/geo/content";
import { GeoPage } from "@/components/rd/geo/GeoPage";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: { absolute: META.title },
  description: META.description,
  keywords: META.keywords,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: META.title,
    description: META.description,
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Generative Engine Optimization", url: PAGE_URL },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Generative Engine Optimization Services",
  serviceType: "Generative Engine Optimization",
  alternateName: ["GEO Agency", "AI Visibility Services"],
  url: `${SITE_URL}${PAGE_URL}`,
  description:
    "Generative engine optimization (GEO) that gets businesses named and cited in AI answers from ChatGPT, Google AI Overviews and AI Mode, Gemini, Perplexity and Microsoft Copilot: prompt mapping, brand fact alignment, listings and reviews, source-backed service pages, AI crawler access and monthly share-of-answer tracking.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    url: "https://www.zonicllc.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Generative Engine Optimization Services",
    itemListElement: SERVICES.items.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_URL}`,
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
      <GeoPage />
    </>
  );
}
