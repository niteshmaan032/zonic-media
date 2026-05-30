import type { Metadata } from "next";
import LawSeoPage from "./LawSeoPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "Law Firm Marketing Services | Local SEO for Law Firms",
  description:
    "Zonic Media provides law firm marketing services including local SEO, Google Maps optimization, legal website conversion, reputation growth, and digital marketing services for law firms.",
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
