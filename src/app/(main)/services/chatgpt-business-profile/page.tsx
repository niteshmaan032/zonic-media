/*
 * Claim Business in ChatGPT Help — new service page (11 Nov 2026).
 * Built on src/components/rd/chatgpt (copy and research notes in
 * content.ts). Indexable; listed in the sitemap and the header's
 * Services menu.
 */

import type { Metadata } from "next";

import { ChatgptBusinessPage } from "@/components/rd/chatgpt/ChatgptBusinessPage";
import {
  FAQ,
  META,
  PAGE_URL,
  SERVICE_NAME,
  plain,
} from "@/components/rd/chatgpt/content";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

// Page-specific share image (JPG: WebP previews are unreliable on some
// social apps).
const OG_IMAGE = {
  url: "/images/chatgpt/claim-business-in-chatgpt-og.jpg",
  width: 1200,
  height: 630,
  alt: "Claim your business in ChatGPT with Zonic Media",
};

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
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    images: [OG_IMAGE.url],
  },
};

const url = `${SITE_URL}${PAGE_URL}`;

const SCHEMA = [
  buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: SERVICE_NAME, url: PAGE_URL },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: SERVICE_NAME,
    serviceType: "ChatGPT business profile setup and AI search visibility",
    url,
    description: META.description,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Zonic Media",
      url: SITE_URL,
      telephone: "+1-302-726-9736",
    },
    areaServed: { "@type": "Country", name: "United States" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: SERVICE_NAME,
      itemListElement: [
        "ChatGPT Business Hub claim and verification",
        "ChatGPT business profile management",
        "Business Agent setup",
        "ChatGPT visibility reporting",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: FAQ.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  },
];

export default function Page() {
  return (
    <>
      {SCHEMA.map((data, i) => (
        <script
          key={i}
          id={`cg-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <ChatgptBusinessPage />
    </>
  );
}
