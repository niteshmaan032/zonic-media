import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services for Car Towing Companies | Zonic Media",
  description:
    "SEO services for towing companies that want more local visibility, roadside assistance calls, and high-intent towing leads.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CarTowingPage() {
  redirect("/services/industry/seo-services-for-car-towing");
}
