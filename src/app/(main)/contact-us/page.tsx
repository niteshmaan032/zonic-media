/*
 * CONTACT US — redesign draft (24 Oct 2026). Markup lives in
 * src/components/rd/contact/. Title, description, keywords and Open Graph
 * re-optimized 24 Oct for "contact a digital marketing agency" intent
 * (Semrush US; the live URL has no ranking data). Canonical, breadcrumb and
 * ContactPage JSON-LD as live, plus FAQPage JSON-LD for the FAQ. Noindex
 * until the owner approves the swap.
 */

import type { Metadata } from "next";
import { ContactPage } from "@/components/rd/contact/ContactPage";
import { CONTACT_FAQS } from "@/components/rd/contact/content";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const contactBreadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Contact Us", url: "/contact-us" },
]);

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.zonicllc.com/contact-us#contact-page",
  name: "Contact Zonic Media",
  url: "https://www.zonicllc.com/contact-us",
  description:
    "Contact Zonic Media, a digital marketing agency in Dover, Delaware, for a free local SEO audit, Google Business Profile help, website design, Google Ads and AI search optimization.",
  about: { "@id": "https://www.zonicllc.com/#organization" },
  inLanguage: "en-US",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CONTACT_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const metadata: Metadata = {
  title: {
    absolute: "Contact Zonic Media | Digital Marketing Agency & Free Audit",
  },
  description:
    "Contact Zonic Media, a US digital marketing agency in Dover, DE. Call (302) 726-9736 or request a free local SEO audit. We reply within one business day.",
  keywords: [
    "contact digital marketing agency",
    "digital marketing agency contact",
    "contact zonic media",
    "zonic media phone number",
    "free local seo audit",
    "free seo audit",
    "free marketing consultation",
    "digital marketing consultation",
    "hire a digital marketing agency",
    "digital marketing agency near me",
    "local seo agency near me",
  ],
  alternates: { canonical: "/contact-us" },
  // Redesign draft: out of the index until it replaces /contact-us.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Contact Our Digital Marketing Agency | Zonic Media",
    description:
      "Call, email or message Zonic Media for a free local SEO audit of your Google Business Profile, Maps rankings and website. Replies within one business day.",
    url: "/contact-us",
  },
};

export default function Page() {
  return (
    <>
      <script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactBreadcrumbJsonLd),
        }}
      />
      <script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactPage />
    </>
  );
}
