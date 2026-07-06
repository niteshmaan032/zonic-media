import type { Metadata } from "next";
import ChiroDigitalPage from "./ChiroDigitalPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "Chiropractor Local SEO Services & Marketing",
  description:
    "Chiropractor local SEO services that help clinics rank on Google Maps, attract new patients, and grow with reviews, websites, and lead generation.",
  keywords: [
    "chiropractor SEO services",
    "local SEO for chiropractors",
    "chiropractor marketing agency",
    "chiropractor lead generation",
    "Google Maps ranking for chiropractors",
    "Google Business Profile for chiropractors",
    "chiropractic patient lead generation",
    "chiropractic clinic marketing",
    "SEO for chiropractic clinics",
  ],
  alternates: { canonical: "/services/industry/chiropractor-local-seo-services" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Chiropractor Local SEO", url: "/services/industry/chiropractor-local-seo-services" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ChiroDigitalPage />
    </>
  );
}
