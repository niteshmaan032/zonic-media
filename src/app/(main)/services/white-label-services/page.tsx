/*
 * WHITE LABEL SEO SERVICES — redesigned 5 Nov 2026 in the new layout
 * (IndustryTemplate) with fresh research-led content. Content and keyword
 * notes: src/components/rd/industry/content/white-label-services.ts.
 */

import { IndustryTemplate } from "@/components/rd/industry/IndustryTemplate";
import { CONTENT } from "@/components/rd/industry/content/white-label-services";
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
