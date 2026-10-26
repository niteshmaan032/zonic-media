/* Hero UI for the Local SEO dropdown pages (26 Oct 2026).

   Owner: "hero section ui component is the main part of local seo pages …
   make it properly explaining the service" → "clean interactive ui
   component showing the niche growth … every ui component should be
   different … no after before" → "showing google maps ranking, ai
   ranking, getting more leads".

   Every page renders the GrowthHero card (heroes/GrowthHero.tsx): Maps /
   AI / growth tabs, each with several designs, combined differently per
   page. */

import type { BrandTone } from "@/components/rd/seoservices/seoUi";
import { GrowthHero } from "./heroes/GrowthHero";
import type { HeroUi } from "./types";

export function LocalSeoHeroUi({
  ui,
  tones,
}: {
  ui: HeroUi;
  tones: [BrandTone, BrandTone, BrandTone, BrandTone];
}) {
  return <GrowthHero ui={ui} tones={tones} />;
}
