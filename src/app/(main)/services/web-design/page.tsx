/*
 * WEB DESIGN SERVICE PAGE — redesign draft (23 Oct 2026). Markup and copy
 * live in src/components/rd/webdesign/ (WebDesignPage.tsx, webDesignUi.tsx,
 * content.ts) so Tailwind always scans them; this route only holds metadata
 * and JSON-LD. Noindex, canonical to the live /services/web-design, which
 * stays untouched until the owner approves the swap.
 */

import type { Metadata } from "next";
import { WebDesignPage } from "@/components/rd/webdesign/WebDesignPage";
import { WEB_FAQS } from "@/components/rd/webdesign/content";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  // Copy re-optimized 24 Oct 2026. Semrush has no ranking data for the
  // live URL, so the title leads with the biggest relevant terms:
  // website design company (18,100) and small business web design (4,400);
  // the H1 carries website design services (14,800).
  title: {
    absolute: "Website Design Company | Small Business Web Design Services",
  },
  description:
    "Website design services for small businesses: custom, mobile-first sites built for Google, with click-to-call and lead tracking. Redesigns, WordPress, Shopify.",
  keywords: [
    "website design services",
    "website design company",
    "small business web design",
    "small business website design",
    "web design services for small business",
    "website design for small business",
    "custom website design",
    "website development company",
    "website redesign services",
    "website design and development",
    "wordpress web design",
    "responsive web design services",
    "ecommerce website design",
  ],
  alternates: { canonical: "/services/web-design" },
  // Redesign draft: out of the index until it replaces /services/web-design.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Small Business Website Design Services | Zonic Media",
    description:
      "Custom websites for small and mid-size businesses, designed to load fast, rank on Google and turn visitors into calls.",
    url: "/services/web-design",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Web Design", url: "/services/web-design" },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/services/web-design#service`,
  name: "Website Design Services for Small Business",
  alternateName: [
    "Small Business Web Design",
    "Website Design Company",
    "Custom Website Design",
    "Website Redesign Services",
  ],
  serviceType: "Web Design and Development",
  description:
    "Zonic Media designs and builds custom websites for small and mid-size businesses: new sites, redesigns, WordPress and Shopify builds, ad landing pages and user experience design, each with SEO structure, schema and call and form tracking.",
  url: `${SITE_URL}/services/web-design`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses that want a website that brings in customers",
  },
  offers: {
    "@type": "Offer",
    name: "Free website consultation",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free consultation with a design direction, a search-ready page plan and a flat project quote.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: WEB_FAQS.map((faq) => ({
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
      <WebDesignPage />
    </>
  );
}
