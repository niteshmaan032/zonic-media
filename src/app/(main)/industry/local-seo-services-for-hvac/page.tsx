import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Local SEO Services",
  description:
    "HVAC local SEO services that help contractors improve Google visibility, rank in local search, and generate more booked service calls.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  redirect("/services/industry/local-seo-services-for-hvac");
}
