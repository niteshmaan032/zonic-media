import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Local SEO Services | Zonic Media",
  description:
    "Local SEO services for HVAC companies that want better Google Maps rankings, more calls, and stronger service-area visibility.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  redirect("/services/local-seo-services-for-hvac");
}
