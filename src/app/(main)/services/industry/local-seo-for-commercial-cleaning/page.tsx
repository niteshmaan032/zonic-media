import type { Metadata } from "next";
import CommercialSeoPage from "./CommercialSeoPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "Local SEO for Commercial Cleaning | Janitorial SEO",
  description:
    "Local SEO for commercial cleaning companies. Rank higher on Google Maps, win more janitorial contract leads, and grow your commercial cleaning business.",
  keywords: [
    "commercial cleaning SEO services",
    "local SEO for commercial cleaning companies",
    "commercial cleaning marketing agency",
    "commercial cleaning lead generation",
    "Google Maps ranking for commercial cleaners",
    "Google Business Profile for janitorial companies",
    "janitorial SEO services",
    "cleaning contract leads",
    "office cleaning SEO",
  ],
  alternates: { canonical: "/services/industry/local-seo-for-commercial-cleaning" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Commercial Cleaning Local SEO", url: "/services/industry/local-seo-for-commercial-cleaning" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CommercialSeoPage />
    </>
  );
}
