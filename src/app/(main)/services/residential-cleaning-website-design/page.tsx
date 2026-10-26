/*
 * HOUSE CLEANING (RESIDENTIAL) WEBSITE DESIGN — redesign draft (26 Oct 2026) of
 * /services/residential-cleaning-website-design. Template: src/components/rd/nichewd/.
 * Noindex until the owner approves the swap; canonical and schema URLs
 * point at the live page.
 */

import { CONTENT } from "@/components/rd/nichewd/content/residential-cleaning-website-design";
import { NicheWebTemplate } from "@/components/rd/nichewd/NicheWebTemplate";
import {
  NicheWebSchema,
  nicheWebMetadata,
} from "@/components/rd/nichewd/route";

export const metadata = nicheWebMetadata(CONTENT);

export default function Page() {
  return (
    <>
      <NicheWebSchema c={CONTENT} />
      <NicheWebTemplate c={CONTENT} />
    </>
  );
}
