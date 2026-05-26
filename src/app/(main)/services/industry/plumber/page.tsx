import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services for Plumbers",
  description:
    "Plumber SEO services that help plumbing companies improve local search rankings, generate more calls, and grow booked jobs.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PlumberPage() {
  redirect("/services/industry/seo-services-for-plumber");
}
