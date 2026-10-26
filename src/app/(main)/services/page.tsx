/*
 * SERVICES HUB — redesign draft (23 Oct 2026; copy re-optimized 24 Oct). Markup and copy live in
 * src/components/rd/services/ (ServicesPage.tsx, servicesUi.tsx,
 * content.ts) so Tailwind always scans them; this route only holds metadata
 * and JSON-LD. Noindex, canonical to the live /services, which stays
 * untouched until the owner approves the swap.
 */

import type { Metadata } from "next";
import { ServicesPage } from "@/components/rd/services/ServicesPage";
import {
  SERVICE_GROUPS,
  SERVICES_FAQS,
  SERVICES_STEPS,
} from "@/components/rd/services/content";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Services for Small Business | Zonic Media",
  },
  description:
    "Digital marketing services for small business: local SEO, Google Business Profile, AI search, websites and Google Ads from one full-service, in-house team.",
  keywords: [
    "digital marketing services",
    "digital marketing services for small business",
    "full service digital marketing agency",
    "digital marketing agency for small business",
    "small business marketing services",
    "seo and digital marketing services",
    "local digital marketing services",
    "marketing services for small business",
  ],
  alternates: { canonical: "/services" },
  // Redesign draft: out of the index until it replaces /services.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Digital Marketing Services for Small Business | Zonic Media",
    description:
      "Get found on Google Maps, in AI answers and in ads. One full-service team runs your SEO, Google profile, website and Google Ads, month to month.",
    url: "/services",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/services#digital-marketing-services`,
  name: "Digital Marketing Services",
  url: `${SITE_URL}/services`,
  description:
    "Digital marketing services from Zonic Media for small and mid-size businesses: SEO and local SEO, AI search optimization, Google Business Profile optimization, verification and reinstatement, web design, Google Ads management, branding, UI/UX and automation.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "United Arab Emirates",
  ],
  serviceType: SERVICE_GROUPS.map((g) => g.label),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zonic Media Digital Marketing Services",
    itemListElement: SERVICE_GROUPS.flatMap((g) =>
      g.links
        .filter((l) => l.href.startsWith("/"))
        .map((l) => ({
          "@type": "Offer",
          url: `${SITE_URL}${l.href}`,
          itemOffered: {
            "@type": "Service",
            name: l.label,
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        })),
    ),
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}/services#how-to-start-a-project`,
  name: "How Zonic Media starts a digital marketing project",
  step: SERVICES_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.desc,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}/services`,
  mainEntity: SERVICES_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ServicesPage />
    </>
  );
}
