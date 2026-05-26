import type { Metadata } from "next";

import CarTowSeoPage from "./CarTowSeoPage";

export const metadata: Metadata = {
  title: "SEO Services for Car Towing Companies",
  description:
    "SEO services for car towing companies focused on Google Maps visibility, emergency towing searches, roadside assistance keywords, and more direct local calls.",
  alternates: { canonical: "/services/industry/seo-services-for-car-towing" },
};

export default function Page() {
  return <CarTowSeoPage />;
}
