import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { treeServiceMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = treeServiceMarketing.metadata;

export default function TreeServiceMarketingAgencyPage() {
  return <IndustryMarketingPage page={treeServiceMarketing.page} />;
}
