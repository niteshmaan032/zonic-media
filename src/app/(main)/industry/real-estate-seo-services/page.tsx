import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate SEO Services | Zonic Media",
  description:
    "Real estate SEO services for agents, brokers, and teams that want stronger Google rankings and more buyer and seller leads.",
  robots: {
    index: false,
    follow: true,
  },
};

function page() {
  redirect("/services/industry/real-estate-seo-services");
}

export default page;
