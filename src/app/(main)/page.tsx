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

/* 27 Nov 2026 (owner and SEO expert): the homepage targets home services
   and contractors. It earned only brand clicks as "for Small Business"
   (Aug–Nov: 76 brand clicks, 0 non-brand). The separate home services page
   was folded in before launch, so one URL owns these searches: digital
   marketing agency for home services 480 (KD 16), home services digital
   marketing agency 720 (KD 14), home services marketing agency 1,900
   (KD 17). Notes on the copy are in HomePage.tsx. */
export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency for Home Services & Contractors | Zonic",
  },
  description:
    "Digital marketing agency for home service businesses and contractors: local SEO, Google Business Profile, AI search, websites and Google Ads that book jobs.",
  keywords: [
    "digital marketing agency for home services",
    "home services digital marketing agency",
    "home services marketing agency",
    "home service marketing agency",
    "home services digital marketing",
    "digital marketing for contractors",
    "contractor marketing agency",
    "digital marketing agency",
    "local seo services",
    "google business profile management",
    "google ads agency",
    "ai seo agency",
    "zonic media",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Digital Marketing Agency for Home Services & Contractors",
      },
    ],
    title: "Digital Marketing Agency for Home Services & Contractors | Zonic",
    description:
      "Digital marketing agency for home service businesses and contractors: local SEO, Google Business Profile, AI search, websites and Google Ads that book jobs.",
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
