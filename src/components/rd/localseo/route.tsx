import type { Metadata } from "next";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/shared/seoSchemas";
import type { LocalSeoContent } from "./types";

/* Route helpers for the Local SEO dropdown drafts (26 Oct 2026): metadata
   (canonical to the live URL, noindex until the owner approves a swap)
   and the JSON-LD the live pages carry: BreadcrumbList, Service with an
   offer catalog (never aggregateRating — GSC flags it) and FAQPage. */

export function localSeoMetadata(c: LocalSeoContent): Metadata {
  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    keywords: c.meta.keywords,
    alternates: { canonical: c.liveUrl },
    // Redesign draft: out of the index until it replaces the live page.
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: c.liveUrl,
      type: "website",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Zonic Media — ${c.serviceName}`,
        },
      ],
    },
  };
}

export function LocalSeoSchema({ c }: { c: LocalSeoContent }) {
  const url = `${SITE_URL}${c.liveUrl}`;
  const items = [
    buildBreadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: c.serviceName, url: c.liveUrl },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.serviceName,
      serviceType: "Local Search Engine Optimization",
      url,
      description: c.meta.description,
      provider: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Zonic Media",
        url: SITE_URL,
        telephone: "+1-302-726-9736",
      },
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "BusinessAudience", name: c.audience },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: c.serviceName,
        itemListElement: c.services.items.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      url,
      mainEntity: c.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <>
      {items.map((data, i) => (
        <script
          key={i}
          id={`lseo-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
