import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { windowAndDoorMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = windowAndDoorMarketing.metadata;

export default function WindowAndDoorMarketingAgencyPage() {
  return <IndustryMarketingPage page={windowAndDoorMarketing.page} />;
}
