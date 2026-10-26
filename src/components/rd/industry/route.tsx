import type { Metadata } from "next";
import {
  SITE_URL,
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";
import type { IndustryContent, LocationContent } from "./types";

/* Route helpers for the industry pages (24 Oct 2026): metadata (canonical,
   Open Graph with og:url) and the JSON-LD set (breadcrumb, FAQPage, Service).
   No page-level LocalBusiness/ProfessionalService node: the root layout
   already outputs the business as #local-business on every page, and a
   second copy here made Google see two businesses (SEO checkup, 27 Oct). */

export function draftMetadata(c: IndustryContent | LocationContent): Metadata {
  return {
    title: { absolute: c.meta.title },
    description: c.meta.description,
    keywords: c.meta.keywords,
    alternates: { canonical: c.liveUrl },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: c.liveUrl,
      type: "website",
      siteName: "Zonic Media",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Zonic Media — ${c.meta.title}`,
        },
      ],
    },
  };
}

function LdScripts({ id, items }: { id: string; items: object[] }) {
  return (
    <>
      {items.map((data, i) => (
        <script
          key={i}
          id={`${id}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

function faqLd(url: string, items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${SITE_URL}${url}`,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function IndustrySchema({ c }: { c: IndustryContent }) {
  return (
    <LdScripts
      id="ind-schema"
      items={[
        buildBreadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: `${c.niche} Marketing Agency`, url: c.liveUrl },
        ]),
        faqLd(c.liveUrl, c.faq.items),
        buildServiceJsonLd({
          name: `${c.niche} Marketing Agency`,
          description: c.meta.description,
          pageUrl: c.liveUrl,
          serviceType: `${c.niche} Marketing`,
          areaServed: "United States",
        }),
      ]}
    />
  );
}

export function LocationSchema({ c }: { c: LocationContent }) {
  return (
    <LdScripts
      id="loc-schema"
      items={[
        buildBreadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: c.parent.label, url: c.parent.href },
          { name: c.place, url: c.liveUrl },
        ]),
        faqLd(c.liveUrl, c.faq.items),
        buildServiceJsonLd({
          name: `${c.parent.niche} Marketing in ${c.place}`,
          description: c.meta.description,
          pageUrl: c.liveUrl,
          serviceType: `${c.parent.niche} Marketing`,
          areaServed: c.place,
        }),
      ]}
    />
  );
}
