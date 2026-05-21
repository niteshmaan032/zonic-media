import type { Metadata } from "next";
import LawSeoPage from "./LawSeoPage";

export const metadata: Metadata = {
  title: "Law Firm Marketing Services | Local SEO for Law Firms | Zonic Media",
  description:
    "Zonic Media provides law firm marketing services including local SEO, Google Maps optimization, legal website conversion, reputation growth, and digital marketing services for law firms.",
  alternates: { canonical: "/services/industry/local-seo-for-law-firms" },
};

export default function Page() {
  return <LawSeoPage />;
}
