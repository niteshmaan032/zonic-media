/*
 * REAL ESTATE SEO SERVICES — redesign draft (26 Oct 2026) of
 * /services/industry/real-estate-seo-services. Template and rules:
 * src/components/rd/localseo/ and docs/local-seo-redesign-brief.md.
 * Noindex until the owner approves the swap; canonical and schema URLs
 * point at the live page.
 */

import { CONTENT } from "@/components/rd/localseo/content/real-estate-seo-services";
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
