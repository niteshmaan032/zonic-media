import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { poolServiceMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = poolServiceMarketing.metadata;

export default function PoolServiceMarketingAgencyPage() {
  return <IndustryMarketingPage page={poolServiceMarketing.page} />;
}
