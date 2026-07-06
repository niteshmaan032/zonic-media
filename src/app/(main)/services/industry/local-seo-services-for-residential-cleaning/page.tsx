import type { Metadata } from "next";
import ResidentialSeoPage from "./ResidentialSeoPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "Residential Cleaning SEO | House Cleaning Leads",
  description:
    "Local SEO services for residential cleaning companies. Rank on Google Maps, book more house cleaning jobs, and grow your maid service with proven SEO.",
  keywords: [
    "residential cleaning SEO services",
    "local SEO for residential cleaning companies",
    "house cleaning marketing agency",
    "house cleaning lead generation",
    "Google Maps ranking for cleaning companies",
    "Google Business Profile for maid services",
    "maid service SEO",
    "house cleaning SEO",
    "cleaning company lead generation",
  ],
  alternates: { canonical: "/services/industry/local-seo-services-for-residential-cleaning" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Residential Cleaning Local SEO", url: "/services/industry/local-seo-services-for-residential-cleaning" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ResidentialSeoPage />
    </>
  );
}
