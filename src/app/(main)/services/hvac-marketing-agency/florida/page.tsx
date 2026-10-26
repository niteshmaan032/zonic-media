/*
 * FLORIDA HVAC MARKETING — redesign draft (24 Oct 2026). Markup and copy
 * live in src/components/rd/hvacstate/. Owner rules: fresh wording for every
 * heading and paragraph, new UI components, relevant sections only. New
 * title, description and keywords from Semrush US data (see florida.ts).
 * Canonical and JSON-LD point at the live Florida URL; noindex until the
 * owner approves the swap. The title change counts as a content change for
 * keyword-guard.
 */

import type { Metadata } from "next";
import { HvacFloridaPage } from "@/components/rd/hvacstate/HvacFloridaPage";
import { FL_FAQS, FL_META } from "@/components/rd/hvacstate/florida";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";

const PATH = "/services/hvac-marketing-agency/florida";

export const metadata: Metadata = {
  title: { absolute: FL_META.title },
  description: FL_META.description,
  keywords: FL_META.keywords,
  alternates: { canonical: PATH },
  openGraph: {
    title: FL_META.title,
    description: FL_META.description,
    url: PATH,
    type: "website",
    siteName: "Zonic Media",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Zonic Media HVAC marketing" }],
  },
  // Redesign draft: out of the index until it replaces the live page.
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "HVAC Marketing Agency", url: "/services/hvac-marketing-agency" },
  { name: "Florida", url: PATH },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `https://www.zonicllc.com${PATH}`,
  mainEntity: FL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceJsonLd = buildServiceJsonLd({
  name: "HVAC Marketing in Florida",
  description: FL_META.description,
  pageUrl: PATH,
  serviceType: "HVAC Marketing",
  areaServed: "Florida",
});

export default function Page() {
  return (
    <>
      <script
        id="fl-hvac-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="fl-hvac-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="fl-hvac-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <HvacFloridaPage />
    </>
  );
}
