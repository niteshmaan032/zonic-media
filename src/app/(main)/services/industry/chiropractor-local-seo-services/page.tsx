import type { Metadata } from "next";
import ChiroDigitalPage from "./ChiroDigitalPage";

export const metadata: Metadata = {
  title: "Chiropractor Digital Marketing Agency",
  description:
    "Zonic Media helps chiropractic clinics attract more patients with local SEO, Google Maps optimization, high-converting websites, reputation growth, and lead generation strategies.",
  alternates: { canonical: "/services/industry/chiropractor-local-seo-services" },
};

export default function Page() {
  return <ChiroDigitalPage />;
}
