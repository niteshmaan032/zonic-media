import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { septicMarketingPage } from "./pageData";
import "@/app/style/industryMarketingPages.css";
import "@/app/style/septicMarketing.css";

export const metadata: Metadata = {
  title: { absolute: septicMarketingPage.title },
  description: septicMarketingPage.description,
  keywords: [
    "septic marketing agency",
    "septic company marketing",
    "septic tank marketing",
    "marketing for septic companies",
    "septic lead generation",
    "septic SEO",
    "local SEO for septic companies",
    "septic pumping leads",
    "Google Ads for septic companies",
  ],
  alternates: { canonical: "/services/septic-marketing-agency" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: septicMarketingPage.title,
    description: septicMarketingPage.description,
    url: "/services/septic-marketing-agency",
    type: "website",
  },
};

export default function SepticMarketingAgencyPage() {
  return <IndustryMarketingPage page={septicMarketingPage} />;
}
