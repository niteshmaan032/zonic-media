/*
 * LAUNCHPAD — redesign draft (24 Oct 2026). Markup and copy live in
 * src/components/rd/launchpad/. Title, description, keywords and Open Graph
 * re-optimized 24 Oct (Semrush US: small business startup package, business
 * launch services, business startup services, small business website
 * package, start a business online; the live URL has no ranking data).
 * Title + H1 re-targeted 25 Oct 2026 (owner: "new heading and title so it
 * can grow organically"), from the 24 Oct Semrush pull plus Google results:
 * new business marketing 320 · small business website package 320 ·
 * startup branding package 110 (KD 0) · business startup services 110 ·
 * small business startup package 20. "LaunchPad" stays as the brand at
 * the end of the title.
 * Canonical and JSON-LD types (breadcrumb, Service, FAQPage) as live.
 * Noindex until the owner approves the swap.
 */

import type { Metadata } from "next";
import { LaunchpadPage } from "@/components/rd/launchpad/LaunchpadPage";
import { LP_FAQS } from "@/components/rd/launchpad/content";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/shared/seoSchemas";

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "LaunchPad", url: "/services/launchpad" },
]);

const serviceJsonLd = buildServiceJsonLd({
  name: "Zonic LaunchPad — New Business Marketing Package",
  description:
    "Business launch services for new small businesses: logo and brand identity, a mobile-ready website, Google Business Profile setup, social profiles, local SEO groundwork and lead capture, live in 2 to 3 weeks.",
  pageUrl: "/services/launchpad",
  serviceType: "Business Launch Services",
  areaServed: "United States",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://www.zonicllc.com/services/launchpad",
  mainEntity: LP_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const metadata: Metadata = {
  title: {
    absolute: "New Business Marketing & Website Package | Zonic LaunchPad",
  },
  description:
    "One new business marketing package: startup branding, a small business website, Google Business Profile setup and local SEO groundwork, built by one team.",
  keywords: [
    "new business marketing",
    "new business marketing package",
    "small business website package",
    "startup branding package",
    "business startup services",
    "small business startup package",
    "business startup package",
    "business launch services",
    "business setup services",
    "new business website package",
    "start a business online",
    "business starter kit",
    "logo and website package",
    "branding package for small business",
    "google business profile setup",
  ],
  alternates: { canonical: "/services/launchpad" },
  // Redesign draft: out of the index until it replaces /services/launchpad.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "New Business Marketing & Website Package | Zonic LaunchPad",
    description:
      "One team builds your logo, website, Google Business Profile, social profiles and local SEO groundwork, so your new business opens online in 2 to 3 weeks.",
    url: "/services/launchpad",
    type: "website",
  },
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
        id="launchpad-service-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LaunchpadPage />
    </>
  );
}
