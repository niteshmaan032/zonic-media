/*
 * TRAVEL AND TOURISM MARKETING AGENCY — redesign draft (26 Oct 2026) of
 * /services/travel-and-tourism-marketing-agency (live page lives in the
 * (landing) group with its own header/footer). Industry template with the
 * new background-video hero. Noindex until the owner approves the swap;
 * canonical and schema point at the live URL.
 */

import { IndustryTemplate } from "@/components/rd/industry/IndustryTemplate";
import { CONTENT } from "@/components/rd/industry/content/travel-and-tourism-marketing-agency";
import { IndustrySchema, draftMetadata } from "@/components/rd/industry/route";

export const metadata = draftMetadata(CONTENT);

export default function Page() {
  return (
    <>
      <IndustrySchema c={CONTENT} />
      <IndustryTemplate c={CONTENT} />
    </>
  );
}
