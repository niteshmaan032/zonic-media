import type { Metadata } from "next";

import CarTowSeoPage from "./CarTowSeoPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "SEO Services for Car Towing Companies",
  description:
    "SEO services for car towing companies focused on Google Maps visibility, emergency towing searches, roadside assistance keywords, and more direct local calls.",
  alternates: { canonical: "/services/industry/seo-services-for-car-towing" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Car Towing SEO", url: "/services/industry/seo-services-for-car-towing" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CarTowSeoPage />
    </>
  );
}
