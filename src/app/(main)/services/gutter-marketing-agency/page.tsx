import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { gutterMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = gutterMarketing.metadata;

export default function GutterMarketingAgencyPage() {
  return <IndustryMarketingPage page={gutterMarketing.page} />;
}
