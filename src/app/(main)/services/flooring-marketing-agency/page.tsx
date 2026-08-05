import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { flooringMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = flooringMarketing.metadata;

export default function FlooringMarketingAgencyPage() {
  return <IndustryMarketingPage page={flooringMarketing.page} />;
}
