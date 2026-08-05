import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { generalContractorMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = generalContractorMarketing.metadata;

export default function GeneralContractorMarketingAgencyPage() {
  return <IndustryMarketingPage page={generalContractorMarketing.page} />;
}
