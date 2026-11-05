/*
 * FENCE COMPANY WEBSITE DESIGN — new page built 5 Nov 2026, live at
 * /services/fence-company-website-design. Template: src/components/rd/nichewd/.
 * Copy: src/components/rd/nichewd/content/fence-company-website-design.ts.
 * Indexed; canonical and schema URLs point at this page.
 */

import { CONTENT } from "@/components/rd/nichewd/content/fence-company-website-design";
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
