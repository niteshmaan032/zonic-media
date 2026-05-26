import type { Metadata } from "next";
import CommercialSeoPage from "./CommercialSeoPage";

export const metadata: Metadata = {
  title:
    "Local SEO for Commercial Cleaning Companies | Janitorial SEO Services",
  description:
    "Zonic Media provides local SEO services for commercial cleaning companies. Rank higher on Google Maps, generate more cleaning contract leads, and grow your janitorial business with commercial cleaning SEO.",
  alternates: { canonical: "/services/industry/local-seo-for-commercial-cleaning" },
};

export default function Page() {
  return <CommercialSeoPage />;
}
