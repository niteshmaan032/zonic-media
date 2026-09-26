import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { cannabisMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = cannabisMarketing.metadata;

export default function CannabisMarketingAgencyPage() {
  return <IndustryMarketingPage page={cannabisMarketing.page} />;
}
