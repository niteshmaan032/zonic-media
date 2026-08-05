import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { applianceRepairMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = applianceRepairMarketing.metadata;

export default function ApplianceRepairMarketingAgencyPage() {
  return <IndustryMarketingPage page={applianceRepairMarketing.page} />;
}
