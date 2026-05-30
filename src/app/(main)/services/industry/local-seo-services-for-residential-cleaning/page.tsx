import type { Metadata } from "next";
import ResidentialSeoPage from "./ResidentialSeoPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title:
    "Local SEO Services for Residential Cleaning Companies | House Cleaning SEO",
  description:
    "Zonic Media provides local SEO services for residential cleaning companies. Rank higher on Google Maps, generate more house cleaning bookings, and grow your maid service business with residential cleaning SEO.",
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
