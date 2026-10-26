# Industry pages redesign brief (24 Oct 2026)

Owner-approved rules for redesigning every industry niche page and its location pages. Each page is a **noindex `-2` draft** with its canonical pointing at the live URL. **Never edit a live page.**

## What gets built

| Type | Template | Content file | Draft route |
|---|---|---|---|
| Industry main page | `src/components/rd/industry/IndustryTemplate.tsx` (the HVAC agency layout) | `src/components/rd/industry/content/<niche-slug>.ts` exporting `CONTENT: IndustryContent` | `src/app/(main)/services/<live-slug>-2/page.tsx` |
| Location page | `src/components/rd/industry/LocationTemplate.tsx` (the Florida layout) | `src/components/rd/industry/content/<niche-slug>/<place>.ts` exporting `CONTENT: LocationContent` | `src/app/(main)/services/<live-slug>/<place>-2/page.tsx` |

- The schema lives in `src/components/rd/industry/types.ts`, icon keys in `icons.tsx` and palettes in `palettes.ts`.
- The complete reference examples are `examples/hvac.example.ts` and `examples/florida.example.ts`. **Never reuse their wording.**
- **Do not edit any shared file** (templates, `ui.tsx`, `types.ts`, `icons.tsx`, `palettes.ts`, `route.tsx`). If the schema can't express something, say so in your report.
- Only niches that already have location pages get location drafts. Their main page gets a `locations` section linking the **live** state URLs (no `-2`).

Route file pattern (main page):

```tsx
import { IndustryTemplate } from "@/components/rd/industry/IndustryTemplate";
import { CONTENT } from "@/components/rd/industry/content/plumbing-marketing-agency";
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
```

Location routes are the same, using `LocationTemplate` and `LocationSchema`.

## Owner rules (all non-negotiable)

1. **Fresh content only.** Never copy text, headings, stats, steps or FAQs from the live page, the HVAC/Florida drafts or any other draft. The message can be the same; the wording must be new. Every H1/H2/H3 must be unique across the whole site.
2. **Research first, from the most-searched terms.** The H1, title, description, H2s and FAQs are built from Semrush data and web research (see Research). Keep the exact term the live URL already ranks for in the `<title>`. The H1 uses the bigger head term (usually "<niche> marketing agency").
3. **Relevant sections only. Attract clients.** Every section shows what we offer and how we grow *their* business: Google Maps rankings, AI recommendations (ChatGPT, Gemini, Google AI Overviews), reviews, calls, websites, ads. No "market facts" sections (demand peaks, climate, industry size), no filler.
4. **No prices, budgets or cost estimates.** No ad budgets, cost-per-click, job prices or ROI promises anywhere.
   - The only allowed money figures are our sitewide plans ($297 / $750 / $1,500 a month), "0% ad-spend markup" and "month to month", and only in pricing, FAQ or audit points.
   - The pricing section itself is the sitewide component.
5. **Hero bento = growth outcomes**, e.g. "Top 3 on Google Maps", "More booked jobs", "More <job> calls". Short benefit lines, no figures, no company stats.
   - Main pages: `kind: "photos"` when `/public/images/free-website/free-<niche>/` has photos (open them and pick two that fit), else `kind: "tiles"`.
   - Location pages: **no images ever**, tiles only.
6. **Verified numbers only:** 1,500+ Google Business Profiles optimized, 900+ suspended profiles reinstated, 5.0 Google rating, 20+ industries served, 0% ad-spend markup. Never invent results, percentages, client counts or review numbers. Example UIs use "Your Company" and plain first names.
7. **Never name another company** (Angi, HomeAdvisor, Thumbtack, Yelp, Avvo, Zillow, Zocdoc, competitors…) in a claim; it's a legal risk. Say "shared lead sites" or "directories".
8. **Keep every internal link** the live page's main content carries (service and niche pages, state pages). Rewrite the anchor text. Add useful ones (`/services/ai-seo-services`, `/services/gbp-reinstatement-service`, `/services/gmb-verification-help`, the niche's `*-website-design` page if it exists).
9. **Short, keyword-led copy**, at roughly these lengths:
   - hero lead 35–50 words;
   - service desc ~20 words with 3 points of 2–5 words;
   - growth row body 35–50 words with 4 points;
   - specialty tactic 6–9 words;
   - FAQ answers 35–70 words, answer first.
   - Main page ≈ 2,000–2,500 words; location page ≈ 1,700–2,100.
10. **Headings:** compact (2–3 lines at desktop), no eyebrows, keyword-led but human. **H1 ≤ 66 characters in total** (h1Lead + h1Rest), so it fits 3 lines next to the icon badge. Prefer short words. Verify with `node /private/tmp/claude-501/-Users-niteshmaan-Desktop-zonic-media/5687465f-480a-41cb-8a01-b13eac3299b9/scratchpad/h1lines.mjs <draft-url> "#ind-h1"` (use `#loc-h1` on location pages). Every width from 1200 to 1600 must report 3 lines or fewer. FAQ: 8–10 questions on main pages, 6–7 on location pages, built from real "how/what/can" questions people search.
11. **The contact block lists phone, email and address on the left.** The templates do this; don't remove it.
12. The **light closing banner** is the default.

## Research (do it, record it)

1. **Live page**
   - `curl -s http://localhost:3000<live-url>`: note its title, H1, internal links, cities/states.
   - Semrush `resource_organic` (database `us`, target `https://www.zonicllc.com<live-url>`): which terms it ranks for, and their positions.
2. **Keywords:** Semrush `phrase_these` with 20–30 candidates.
   - Main pages: "<niche> marketing agency/company/services", "<niche> seo", "<niche> lead generation", "<niche> advertising", "<niche> google ads", "marketing for <niche>", "<niche> marketing ideas", "<niche> social media marketing", "<niche> website design".
   - Location pages: "<niche> marketing <state>", "<niche> seo <city>" and top city service searches like "<service> <city>".
3. **Questions:** Semrush `phrase_questions` on "<niche> marketing" and "<niche> leads" (or the closest).
4. **Web research:** WebSearch 2–4 queries on what <niche> businesses need from marketing in 2026, what customers search, and AI/Maps trends for the niche. For locations, also the state's main metros and regional specifics. Use the findings to choose services, specialties and FAQs. Don't quote sources or stats on the page.
5. **Budget:** keep Semrush to about 5 calls per page. If a call fails with `no_api_units`, stop calling Semrush and continue with web research. Say so in the report.

### Web research is mandatory, not optional (owner, 24 Oct 2026)

Don't rely on Semrush alone. For every page, research Google directly with the WebSearch and WebFetch tools (load them with ToolSearch: "select:WebSearch,WebFetch"):

- Search the page's main terms exactly as a customer or business owner would, e.g. "plumbing marketing agency" or "local seo tampa". Note what the top results cover (sections, angles, the questions they answer), the "People also ask"-style questions, and the related searches.
- Open (WebFetch) 2–3 top-ranking pages for the main term and note their topics and gaps. **Never copy their wording**; use them only to judge which sections and answers the page needs.
- Use what you find to choose H2s, service cards, growth rows and FAQs.
- **If Semrush returns `no_api_units` (or any error), don't stop.** Do the whole keyword job with web search: autocomplete-style queries, related searches, competitor titles and H1s. Say in your report that the keywords came from web research.

### Owner locks added 25 Oct 2026

- **Pricing section:** write only the four unique headings (`pricing.title`, `compareTitle`, `addOnsTitle`, `customTitle`). The section's text and cards are owner-locked and identical on every page; leave the other pricing fields out.
- **Sibling location links:** the location template renders an "<Niche> marketing in other states" link row automatically from `siblings.ts`. Never list sibling states in your copy.

## Validation (must pass before you report)

Note: the template's fixed UI labels ("Your Company", "yourcompany.com", "Also recommended in", the step-card labels) are treated as sitewide by dupcheck, so the `ai` growth row is safe to use. Main pages must include a `maps` row and an `ai` row.

1. `npx prettier --write <your files>` and `npx tsc --noEmit -p .`, then `npx eslint <your files>`: zero errors or warnings in your files.
2. `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000<draft-url>` returns 200.
3. Duplicate check: `python3 /private/tmp/claude-501/-Users-niteshmaan-Desktop-zonic-media/5687465f-480a-41cb-8a01-b13eac3299b9/scratchpad/dupcheck.py <draft-url> <live-url> http://localhost:3000/services/hvac-marketing-agency-2 http://localhost:3000/services/hvac-marketing-agency/florida-2 <any sibling drafts you were given>`. It must print OK for every comparison; rewrite and rerun until it does.
4. Don't run git, don't delete files, don't touch other agents' files.

## Report back (short)

- Draft URL(s).
- For each page:
  - title, H1 and the 5–8 keywords used, with volumes;
  - the live page's ranking terms and how you kept them;
  - links kept or added;
  - word count;
  - dupcheck result.
- Anything you couldn't do.

## Palettes (fixed; siblings must differ)

**Main pages:**

| Niche | Palette | Niche | Palette |
|---|---|---|---|
| hvac | redSky | plumbing | orangeBlue |
| home-inspector | amberGreen | roofing | redSlate |
| electrician | amberIndigo | pest-control | limeTeal |
| landscaping | greenSky | law-firm | amberBlue |
| dental | cyanOrange | real-estate | emeraldIndigo |
| auto-repair | redIndigo | chiropractic | tealAmber |
| cleaning-company | skyAmber | garage-door | orangeViolet |
| moving-company | blueOrange | painting-contractor | fuchsiaTeal |
| appliance-repair | roseCyan | bathroom-remodeling | violetCyan |
| cannabis | limeIndigo | flooring | amberTeal |
| general-contractor | amberSlate | gutter | slateTeal |
| kitchen-remodeling | roseEmerald | non-profit | roseBlue |
| pediatric | violetAmber | pool-service | orangeSky |
| septic | emeraldAmber | solar | orangeEmerald |
| towing | redTeal | tree-service | greenViolet |
| window-and-door | fuchsiaIndigo | | |

**Location pages:**

| Niche | State | Palette |
|---|---|---|
| Plumbing | arizona | orangeViolet |
| Plumbing | california | emeraldIndigo |
| Plumbing | florida | coralTeal |
| Plumbing | georgia | roseEmerald |
| Plumbing | illinois | skyAmber |
| Plumbing | north-carolina | tealAmber |
| Plumbing | texas | redIndigo |
| HVAC | texas | amberIndigo |
| HVAC | california | fuchsiaTeal |
| HVAC | arizona | orangeSky |
| HVAC | illinois | roseBlue |
| HVAC | georgia | greenViolet |
| HVAC | north-carolina | violetCyan |

Home inspector states use the palette assigned in the agent's brief.
