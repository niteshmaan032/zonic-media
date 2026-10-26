/*
 * HVAC MARKETING AGENCY — redesign draft (24 Oct 2026), the pilot for the
 * industry pages. Markup and copy live in src/components/rd/hvac/. Owner
 * rule (24 Oct): fresh content, so the title, description and keywords
 * are new, from Semrush US data (hvac marketing agency 2,900 · hvac lead
 * generation 1,300 · hvac ppc 1,000). Canonical and the breadcrumb,
 * LocalBusiness and Service JSON-LD point at the live URL; the FAQPage
 * JSON-LD covers the page's ten FAQs. Noindex until the owner approves
 * the swap; the title change counts as a content change for keyword-guard.
 */

import type { Metadata } from "next";
import { HvacMarketingPage } from "@/components/rd/hvac/HvacMarketingPage";
import { FAQS } from "@/components/rd/hvac/content";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: {
    absolute: "HVAC Marketing Agency | SEO, PPC & HVAC Lead Generation",
  },
  description:
    "HVAC marketing agency for contractors: Google Business Profile, HVAC SEO, PPC and websites that turn “AC repair near me” searches into booked jobs.",
  keywords: [
    "hvac marketing agency",
    "hvac marketing company",
    "hvac marketing services",
    "hvac lead generation",
    "hvac digital marketing",
    "hvac ppc",
    "hvac marketing ideas",
    "hvac marketing strategies",
    "marketing for hvac companies",
    "hvac advertising",
    "hvac social media marketing",
    "hvac email marketing",
  ],
  alternates: { canonical: "/services/hvac-marketing-agency" },
  openGraph: {
    title: "HVAC Marketing Agency | SEO, PPC & HVAC Lead Generation",
    description:
      "HVAC marketing agency for contractors: Google Business Profile, HVAC SEO, PPC and websites that turn “AC repair near me” searches into booked jobs.",
    url: "/services/hvac-marketing-agency",
    type: "website",
    siteName: "Zonic Media",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Zonic Media HVAC marketing" }],
  },
  // Redesign draft: out of the index until it replaces the live page.
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "HVAC Marketing Agency", url: "/services/hvac-marketing-agency" },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://www.zonicllc.com/services/hvac-marketing-agency",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceJsonLd = buildServiceJsonLd({
  name: "HVAC Marketing Agency",
  description:
    "HVAC marketing agency for contractors: Google Business Profile, HVAC SEO, PPC and websites that turn “AC repair near me” searches into booked jobs.",
  pageUrl: "/services/hvac-marketing-agency",
  serviceType: "HVAC Marketing",
  areaServed: "United States",
});

export default function Page() {
  return (
    <>
      <script
        id="hvac-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="hvac-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="hvac-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <HvacMarketingPage />
    </>
  );
}
