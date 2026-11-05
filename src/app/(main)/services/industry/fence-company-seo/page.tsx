/*
 * FENCE COMPANY SEO — new page built 5 Nov 2026, live at
 * /services/industry/fence-company-seo. Template and rules:
 * src/components/rd/localseo/, docs/local-seo-redesign-brief.md and
 * docs/fence-and-inspector-brief-2026-11.md. Indexable; canonical and
 * schema URLs point at this page.
 */

import { CONTENT } from "@/components/rd/localseo/content/fence-company-seo";
import { LocalSeoTemplate } from "@/components/rd/localseo/LocalSeoTemplate";
import {
  LocalSeoSchema,
  localSeoMetadata,
} from "@/components/rd/localseo/route";

export const metadata = localSeoMetadata(CONTENT);

export default function Page() {
  return (
    <>
      <LocalSeoSchema c={CONTENT} />
      <LocalSeoTemplate c={CONTENT} />
    </>
  );
}
