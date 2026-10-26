/*
 * WINDOW AND DOOR WEBSITE DESIGN — redesign draft (26 Oct 2026) of
 * /services/window-and-door-website-design. Template: src/components/rd/nichewd/.
 * Noindex until the owner approves the swap; canonical and schema URLs
 * point at the live page.
 */

import { CONTENT } from "@/components/rd/nichewd/content/window-and-door-website-design";
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
