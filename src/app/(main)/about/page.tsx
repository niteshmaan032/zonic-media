/*
 * ABOUT PAGE — redesign draft (23 Oct 2026). Markup and copy live in
 * src/components/rd/about/ (AboutPage.tsx, aboutUi.tsx, content.ts) so
 * Tailwind always scans them; this route only holds metadata and JSON-LD.
 * Noindex, canonical to the live /about, which stays untouched until the
 * owner approves the swap.
 */

import type { Metadata } from "next";
import { AboutPage } from "@/components/rd/about/AboutPage";
import { ABOUT_FAQS } from "@/components/rd/about/content";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";

/* Re-targeted 24 Oct 2026 (Semrush US; no ranking data for /about):
   local marketing agency 1,900 in the title, small business marketing
   agency 3,600 in the description and copy, the H1 carries "marketing
   agency for small (and mid-size) businesses" 1,600. The homepage title
   owns "digital marketing agency for small business". */
export const metadata: Metadata = {
  title: {
    absolute: "About Zonic Media | Local Marketing Agency in Dover, DE",
  },
  description:
    "Meet Zonic Media, a small business marketing agency in Dover, Delaware. One in-house team for local SEO, Google profiles, web design and Google Ads, US-wide.",
  keywords: [
    "about zonic media",
    "zonic media",
    "local marketing agency",
    "small business marketing agency",
    "marketing agency for small business",
    "small business marketing services",
    "small business marketing company",
    "local digital marketing agency",
    "digital marketing agency in delaware",
    "marketing agency delaware",
    "delaware marketing agency",
    "digital marketing agency dover de",
    "google business profile agency",
  ],
  alternates: { canonical: "/about" },
  // Redesign draft: out of the index until it replaces /about.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media, a small business marketing agency in Dover, Delaware",
      },
    ],
    title: "About Zonic Media | Local Marketing Agency in Dover, DE",
    description:
      "Who we are: a senior, in-house marketing team in Dover, Delaware growing small and mid-size US businesses with local SEO, Google profiles, websites and ads.",
    url: "/about",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
]);

/* Organization and LocalBusiness are emitted once in the root layout;
   reference them by @id (same as the live page). */
const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#aboutpage`,
  url: `${SITE_URL}/about`,
  name: "About Zonic Media",
  description:
    "Zonic Media is a small business marketing agency in Dover, Delaware. Its in-house team grows small and mid-size US businesses with local SEO, Google Business Profile management, AI search optimization, website design and Google Ads.",
  inLanguage: "en-US",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  about: { "@id": `${SITE_URL}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/og-image.jpg`,
  },
};

const aboutFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/about#faq`,
  mainEntity: ABOUT_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqJsonLd) }}
      />
      <AboutPage />
    </>
  );
}
