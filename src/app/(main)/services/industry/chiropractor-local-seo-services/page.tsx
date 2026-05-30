import type { Metadata } from "next";
import ChiroDigitalPage from "./ChiroDigitalPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "Chiropractor Digital Marketing Agency",
  description:
    "Zonic Media helps chiropractic clinics attract more patients with local SEO, Google Maps optimization, high-converting websites, reputation growth, and lead generation strategies.",
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
