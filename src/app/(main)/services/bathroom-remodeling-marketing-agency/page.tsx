import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { bathroomRemodelingMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = bathroomRemodelingMarketing.metadata;

export default function BathroomRemodelingMarketingAgencyPage() {
  return <IndustryMarketingPage page={bathroomRemodelingMarketing.page} />;
}
