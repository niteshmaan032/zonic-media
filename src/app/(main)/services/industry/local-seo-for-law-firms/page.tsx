import type { Metadata } from "next";
import LawSeoPage from "./LawSeoPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "Local SEO for Law Firms | Attorney Marketing",
  description:
    "Local SEO for law firms that helps attorneys rank on Google Maps, win more case leads, and grow with reputation management and legal marketing.",
  keywords: [
    "law firm SEO services",
    "local SEO for law firms",
    "law firm marketing agency",
    "law firm lead generation",
    "attorney local SEO",
    "Google Maps ranking for law firms",
    "Google Business Profile for attorneys",
    "legal marketing services",
    "lawyer SEO company",
    "case lead generation for attorneys",
  ],
  alternates: { canonical: "/services/industry/local-seo-for-law-firms" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Law Firm Local SEO", url: "/services/industry/local-seo-for-law-firms" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LawSeoPage />
    </>
  );
}
