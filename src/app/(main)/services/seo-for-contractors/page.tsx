/*
 * SEO for Contractors (26 Nov 2026): hub for every trade SEO page. Template
 * and rules: src/components/rd/localseo/; research notes in
 * research_notes/Home services and contractor SEO pages/.
 */

import { CONTENT } from "@/components/rd/localseo/content/seo-for-contractors";
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
