/*
 * LOCAL SEO FOR HOME SERVICES — redesign draft (24 Oct 2026). Markup and
 * copy live in src/components/rd/homeservices/ so Tailwind always scans
 * them; this route only holds metadata and JSON-LD.
 *
 * Copy re-optimized 24 Oct 2026 (docs/content-optimization-brief.md,
 * "Special care"). The live URL ranks (Semrush US, 24 Oct) for "local seo
 * for home services companies", "home services seo agency", "home service
 * seo agency", "seo services for home services", "home services seo
 * services", "seo experts for home services", "home improvement seo
 * services / company" and "organic search for home service businesses";
 * the title keeps the live exact phrase "Local SEO for Home Service
 * Companies" and adds the head term "home services seo" (2,400/mo).
 * Canonical, breadcrumb, Service and FAQPage JSON-LD blocks are the live
 * page's (FAQ text comes from HS_FAQS). Robots: noindex until the owner
 * approves the swap. At swap time keyword-guard will report the title,
 * description, H1 and H2 changes: expected, update the baseline snapshot
 * in that commit and ship it on its own.
 */

import type { Metadata } from "next";
import { HomeServicesSeoPage } from "@/components/rd/homeservices/HomeServicesSeoPage";
import { HS_FAQS } from "@/components/rd/homeservices/content";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: {
    absolute: "Local SEO for Home Service Companies | Home Services SEO",
  },
  description:
    "Local SEO for home service companies and contractors: Google Business Profile, reviews, service-area pages and AI search that win Map Pack calls and jobs.",
  keywords: [
    "local seo for home services",
    "home services seo",
    "home service seo",
    "local seo for contractors",
    "seo for home services",
    "local seo for home service companies",
    "local seo for home service businesses",
    "home services seo company",
    "home services seo agency",
    "seo for home service companies",
    "home improvement seo",
    "google business profile for contractors",
  ],
  alternates: { canonical: "/services/local-seo-for-home-services" },
  // Redesign draft: out of the index until it replaces the live page.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Local SEO for Home Service Companies | Zonic Media",
    description:
      "Home services SEO that puts plumbers, HVAC techs, roofers and other contractors in the Google Map Pack and AI answers. Book a free local SEO audit.",
    url: "/services/local-seo-for-home-services",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  {
    name: "Local SEO for Home Services",
    url: "/services/local-seo-for-home-services",
  },
]);

const serviceJsonLd = buildServiceJsonLd({
  name: "Local SEO for Home Services",
  description:
    "Home services SEO and local SEO for contractors: Google Business Profile, reviews, service-area pages and AI search visibility for plumbers, HVAC, roofers, electricians and other trades.",
  pageUrl: "/services/local-seo-for-home-services",
  serviceType: "Local SEO",
  areaServed: "United States",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://www.zonicllc.com/services/local-seo-for-home-services",
  mainEntity: HS_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
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
        id="local-seo-home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeServicesSeoPage />
    </>
  );
}
