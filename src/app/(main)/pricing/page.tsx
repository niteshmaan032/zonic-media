import type { Metadata } from "next";

import { PricingPage } from "@/components/rd/pricing/PricingPage";
import { PLANS } from "@/components/rd/home/pricing";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

/* Standalone pricing page (owner, 23 Oct 2026). Markup and copy live in
   src/components/rd/pricing/PricingPage.tsx; plans in
   src/components/rd/home/pricing.ts. Indexable and in the sitemap since the
   redesign launch. Schema (27 Oct): breadcrumb + an OfferCatalog built from
   PLANS, so the prices in markup always match the cards. */

const PAGE_PATH = "/pricing";
const TITLE = "Digital Marketing Pricing & Plans | From $197/mo | Zonic Media";
const DESCRIPTION =
  "Compare Zonic Media's digital marketing plans: local SEO, Google Business Profile, Google Ads and social media from $197 a month, billed monthly or annually.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_PATH,
    type: "website",
    siteName: "Zonic Media",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media digital marketing pricing and plans",
      },
    ],
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Pricing", url: PAGE_PATH },
]);

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Zonic Media digital marketing plans",
  url: `${SITE_URL}${PAGE_PATH}`,
  itemListElement: PLANS.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: plan.audience,
    url: `${SITE_URL}${PAGE_PATH}`,
    priceCurrency: "USD",
    priceSpecification: [
      {
        "@type": "UnitPriceSpecification",
        price: plan.price.monthly,
        priceCurrency: "USD",
        unitText: "MONTH",
        name: "Billed monthly",
      },
      {
        "@type": "UnitPriceSpecification",
        price: plan.price.annual,
        priceCurrency: "USD",
        unitText: "MONTH",
        name: "Billed annually",
      },
    ],
    seller: { "@id": `${SITE_URL}/#organization` },
  })),
};

export default function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      <PricingPage />
    </>
  );
}
