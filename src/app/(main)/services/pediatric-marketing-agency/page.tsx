import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { pediatricMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = pediatricMarketing.metadata;

export default function PediatricMarketingAgencyPage() {
  return <IndustryMarketingPage page={pediatricMarketing.page} />;
}
