import type { Metadata } from "next";
import LocalSeoPage from "./LocalSeoPage";

export const metadata: Metadata = {
  title: "Local SEO Services | Rank Higher on Google Maps & Local Search",
  description:
    "Boost your visibility with expert local SEO services. Optimize your Google Business Profile, rank higher on Google Maps, and attract more local customers.",
};

export default function Page() {
  return <LocalSeoPage />;
}
