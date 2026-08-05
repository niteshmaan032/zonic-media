import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { towingMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = towingMarketing.metadata;

export default function TowingMarketingAgencyPage() {
  return <IndustryMarketingPage page={towingMarketing.page} />;
}
