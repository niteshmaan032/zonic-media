import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services for Pest Control Companies",
  description:
    "Pest control SEO services built to improve local rankings, Google Business visibility, and qualified pest control leads.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PestControlPage() {
  redirect("/services/industry/seo-services-for-pest-control");
}
