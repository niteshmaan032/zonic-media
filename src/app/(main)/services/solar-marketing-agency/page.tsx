import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { solarMarketingPage } from "./pageData";
import "@/app/style/industryMarketingPages.css";
import "@/app/style/solarMarketing.css";

export const metadata: Metadata = {
  title: { absolute: solarMarketingPage.title },
  description: solarMarketingPage.description,
  keywords: [
    "solar marketing agency",
    "solar company marketing",
    "marketing for solar installers",
    "solar lead generation",
    "exclusive solar leads",
    "solar SEO",
    "local SEO for solar companies",
    "solar panel installation leads",
    "Google Ads for solar companies",
    "solar battery storage marketing",
  ],
  alternates: { canonical: "/services/solar-marketing-agency" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: solarMarketingPage.title,
    description: solarMarketingPage.description,
    url: "/services/solar-marketing-agency",
    type: "website",
  },
};

export default function SolarMarketingAgencyPage() {
  return <IndustryMarketingPage page={solarMarketingPage} />;
}
