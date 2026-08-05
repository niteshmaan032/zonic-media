import type { Metadata } from "next";

import IndustryMarketingPage from "@/app/components/IndustryMarketingPage";
import { kitchenRemodelingMarketing } from "./pageData";
import "@/app/style/industryMarketingPages.css";

export const metadata: Metadata = kitchenRemodelingMarketing.metadata;

export default function KitchenRemodelingMarketingAgencyPage() {
  return <IndustryMarketingPage page={kitchenRemodelingMarketing.page} />;
}
