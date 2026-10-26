import type { Metadata } from "next";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";

import { getPublishedBlogs } from "@/backend/lib/blogs";
import { HomePage } from "@/components/rd/home/HomePage";

/* Homepage — the redesign (built 19 Oct 2026 as /home2, live since the
   26 Oct go-live). Markup and content live in
   src/components/rd/home/HomePage.tsx. The SiteNavigationElement and
   Service JSON-LD and the Open Graph block are carried over from the
   previous homepage; the FAQPage schema is rendered by HomePage. */

const PAGE_PATH = "/";

/* Title, description and keywords re-targeted 24 Oct 2026 (Semrush US):
   digital marketing agency 74K, digital marketing agency for small business
   2.9K, plus the brand ("zonic" 2.9K, the only term the live "/" ranks
   for). Notes on the copy are in HomePage.tsx. */
export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency for Small Business | Zonic Media",
  },
  description:
    "Zonic Media helps small and mid-size businesses win more calls from Google Maps, AI search and ads: local SEO, web design, Google Business Profile and PPC.",
  keywords: [
    "digital marketing agency",
    "digital marketing agency for small business",
    "full service digital marketing agency",
    "digital marketing company",
    "digital marketing services",
    "local seo services",
    "local seo agency",
    "ai seo agency",
    "google ads agency",
    "ppc agency",
    "google business profile management",
    "website design for small business",
    "digital marketing agency near me",
    "zonic media",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Digital Marketing Agency for Small Business | Zonic Media",
    description:
      "Zonic Media helps small and mid-size businesses win more calls from Google Maps, AI search and ads: local SEO, web design, Google Business Profile and PPC.",
    url: "/",
    type: "website",
  },
};

export const revalidate = 300;

const SITE_URL = "https://www.zonicllc.com";

/* ─────────────────────────────────────────────────────────── JSON-LD ───── */

const siteNavigationItems = [
  { name: "Home", url: SITE_URL },
  { name: "Services", url: `${SITE_URL}/services` },
  {
    name: "Local SEO",
    url: `${SITE_URL}/services/local-seo-for-home-services`,
  },
  {
    name: "GMB Reinstatement",
    url: `${SITE_URL}/services/gbp-reinstatement-service`,
  },
  { name: "Launchpad", url: `${SITE_URL}/services/launchpad` },
  { name: "About Us", url: `${SITE_URL}/about` },
  { name: "Contact Us", url: `${SITE_URL}/contact-us` },
];

const siteNavigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "@id": `${SITE_URL}/#site-navigation`,
  name: siteNavigationItems.map((item) => item.name),
  url: siteNavigationItems.map((item) => item.url),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO and Google Business Profile Management",
  serviceType: "Local SEO and Google Business Profile Management",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    url: "https://www.zonicllc.com",
    telephone: "+1-302-726-9736",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green, STE B",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Local Growth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Local SEO" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Reinstatement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Google Ads Management" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design and Development",
        },
      },
    ],
  },
};

export default async function Home() {
  const blogs = (await getPublishedBlogs(6)).map((blog) => ({
    id: blog.id,
    slug: blog.slug,
    blogTitle: blog.blogTitle,
    authorName: blog.authorName,
    publishDate: blog.publishDate,
    featuredImageUrl: blog.featuredImageUrl,
    excerpt: blog.excerpt,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <HomePage blogs={blogs} />
    </>
  );
}
