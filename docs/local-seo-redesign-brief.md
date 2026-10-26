# Local SEO dropdown redesign brief (26 Oct 2026)

The owner asked to rebuild every page under the **Local SEO** dropdown, with organic growth as the goal:

> "build all the page which are under local seo dropdown all -- so main motive will content optimization to grow organic -- new color pallets layouts, first deep search about the content and keywords no duplicate things"

Each page is a **noindex `-2` draft**, with its canonical pointing at the live URL. **Never edit a live page.**

## What gets built

| Piece | Where |
|---|---|
| Template (the `/services/seo-services-2` layout) | `src/components/rd/localseo/LocalSeoTemplate.tsx` |
| Schema / types | `src/components/rd/localseo/types.ts` (`LocalSeoContent`) |
| Hero UIs (7 kinds) | `src/components/rd/localseo/heroUi.tsx` |
| Colour sets (one per page, fixed) | `src/components/rd/localseo/tones.ts`, picked automatically from the live URL |
| Route helpers | `src/components/rd/localseo/route.tsx` (`localSeoMetadata`, `LocalSeoSchema`) |
| **Your content file** | `src/components/rd/localseo/content/<last-url-segment>.ts`, exporting `CONTENT: LocalSeoContent` |
| **Your route file** | `src/app/(main)<live-url>-2/page.tsx` |
| Reference page (structure only, **never reuse its wording**) | `content/local-seo-for-electricians.ts` → `/services/industry/local-seo-for-electricians-2` |

Route file pattern (copy exactly, change the comment, import and URL):

```tsx
/*
 * <PAGE NAME> — redesign draft (26 Oct 2026) of <live-url>. Template and
 * rules: src/components/rd/localseo/ and docs/local-seo-redesign-brief.md.
 * Noindex until the owner approves the swap; canonical and schema URLs
 * point at the live page.
 */

import { CONTENT } from "@/components/rd/localseo/content/<slug>";
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
```

**Do not edit any shared file** (template, `heroUi.tsx`, `growthUi.tsx`, `types.ts`, `tones.ts`, `route.tsx`, the industry or kit files). If the schema can't express something, say so in your report.

## Page sections (fixed order, main sections only)

1. **Hero:** H1 with icon badge, lead, CTA. The hero UI on the right is the page's centrepiece. Owner: it must *explain the service*, showing where this niche's customers find a business and which SEO work wins each spot.
2. **Services:** 6 cards. Each card has an icon, title, ~20-word description, 3 points and 0–2 links.
3. **Growth rows:** three alternating rows, each with a data-driven card:
   - `rank`: example searches climbing;
   - `ai`: a Google AI Overview naming Your Company;
   - `leads`: calls and forms tagged by source.
4. **Steps:** 3 steps, plus the audit/plan/launch chip labels.
5. **Searches we win:** 3 groups of 5–6 real searches this niche's customers type.
6. Google reviews (the widget is fixed; you write the title and lead).
7. **Explore:** 4 link tiles (the niche's marketing page, website-design page, Google Ads or another page, and the local SEO hub), plus one closing line.
8. Pricing: owner-locked. Write only the four headings.
9. FAQ: 9–10 questions.
10. Free audit block: title, lead with links, 4 points, form copy.
11. Gradient banner: title and lead.

### Hero UI kinds

> **Update 26 Oct 2026 (owner):** the 7 hero UI kinds below are retired. Every page now uses the `growth` hero (`src/components/rd/localseo/heroes/GrowthHero.tsx`): a clean, interactive card with Google Maps / AI / growth tabs and a different design combination per page. `hero.outcomes` and the "What grows" strip were removed.


The kind for each page is assigned in the appendix. See `types.ts` for the exact fields.

- **`serp`**: annotated Google results for a niche search. The AI Overview, Map Pack and top organic result are each tagged with the work behind them, plus 3 chips.
- **`phone`**: mobile Map Pack for an urgent search. Your Company comes first, with numbered markers 1–4 explained by 4 callouts. Used for emergency trades.
- **`grid`**: a Maps rank grid across the service area, with 3 callouts and 3 chips. Used for service-area trades.
- **`profile`**: a Google Business Profile taken apart (header, photos, services, post + Q&A), with 4 numbered callouts. Used for project, showroom and practice businesses.
- **`ai`**: an AI assistant answer naming Your Company first, with reasons, sources and 3 callouts.
- **`packages`**: what each plan tier covers. There are no prices.
- **`scorecard`**: a local SEO health check with 5 rows and 3 first fixes.

Hero UI text rules:

- Callout `label` is 1–3 words and `sub` is 2–4 words. Keep them niche-specific: "Storm pages / Rank after hail", not generic.
- Use "Your Company" for the client.
- **Other businesses get generic labels only**: "Another HVAC company", "Nearby plumber", "Competitor listing". Never invent brand names, because a made-up name can match a real business (legal risk).
- No numbers except Maps positions and times.

## Owner rules (all non-negotiable)

1. **Fresh content only.**
   - Never copy text, headings, FAQs or steps from the live page, the electricians reference, `/services/seo-services-2`, the niche's marketing `-2` draft, or any other draft. Same message, new words.
   - **Every H1/H2/H3 must be unique across the whole site.** Put the niche word in every service-card title, search-group label, step heading, growth-row title, FAQ question and pricing heading.
2. **Keyword-led, from the research below.**
   - The `<title>` keeps the exact term the live URL already ranks or is titled for. Add the biggest head term, and stay at 60 characters or fewer.
   - The H1 uses the biggest relevant term.
   - Use the 6–10 best terms naturally across:
     - the title, description and H1;
     - the H2s, service titles and FAQ questions;
     - the "searches we win" chips.
   - **No keyword stuffing.** Each exact phrase may appear 1–3 times outside the FAQ.
   - The search chips are real customer searches for the *client's* service (e.g. "ac repair near me"), not SEO searches.
3. **Own your keywords; don't cannibalise.**
   - The local SEO page owns "<niche> seo", "seo for <niche>", "local seo for <niche>" and "<niche> seo company/services/agency".
   - The niche's marketing page owns "<niche> marketing…". Don't target marketing terms here.
   - `/services/seo-services` owns "seo services / seo agency / seo company".
4. **No prices, budgets or cost estimates.**
   - No ad budgets, CPCs, job prices or ROI promises, and no Semrush volumes on the page.
   - The only allowed money figures are our plans ($297 / $750 / $1,500 a month), and only in the FAQ answer about cost. "Month to month" is fine anywhere.
5. **Verified numbers only:**
   - 1,500+ Google Business Profiles optimized;
   - 900+ suspended profiles reinstated;
   - 5.0 Google rating;
   - 20+ industries served;
   - 0% ad-spend markup.

   Never invent results, percentages, client counts or review counts. Example UIs say "Example".
6. **Never name another company.**
   - No Angi, HomeAdvisor, Thumbtack, Yelp, Avvo, Zillow, Zocdoc, Weedmaps, Leafly, or any agency or competitor.
   - Say "directories", "shared lead sites" or "listing apps" instead.
   - Google, Google Maps, Google Business Profile, ChatGPT, Gemini, Perplexity and Bing are fine.
7. **Keep every internal link** the live page's content carries (listed in the appendix; legal links are excluded).
   - Use your own anchor text.
   - Link to **live** URLs only, never `-2`.
   - Place them in service-card links, rich-text leads and bodies, explore tiles or the audit lead.
   - Each page must also link `/services/ai-seo-services` (except that page itself) and `/services/gbp-reinstatement-service`.
8. **Non-home-service niches** (dental, chiropractor, pediatricians, law firms, real estate, cannabis) link `/services/local-seo-for-small-business` where the live page linked `/services/local-seo-for-home-services`.
9. **Restricted verticals:** cannabis must never promise Google Ads, Meta ads or SMS marketing, and must not link `/services/google-ads`.
10. **Short, keyword-led copy.** Target lengths:
    - hero lead 35–50 words;
    - service description 18–24 words, with 3 points of 2–4 words;
    - growth body 35–50 words, with 4 points;
    - step body 18–26 words;
    - FAQ answers 35–70 words, answer first.
    - The page total is about 1,700–2,100 words (the electricians reference is about 1,750).
11. **Headings:**
    - Compact, keyword-led, human, with no eyebrows.
    - **H1 ≤ 66 characters** (h1Lead + h1Rest).
    - Centred H2s (growth, searches, FAQ) fit 2 lines at desktop, so aim for 40–56 characters.
    - The services title has exactly one `\n` (2 lines).
    - **Growth-row titles ≤ 48 characters.**
12. **Pricing:** write only `title`, `compareTitle`, `addOnsTitle` and `customTitle`, and make them unique. Never write anything else about plan contents in the pricing section.
13. **Form:**
    - `formType` matches the live page: `"local-seo"` for niche pages, `"local-seo-small-business"`, `"local-seo-packages"` and `"ai-seo-services"`.
    - The badge, title and submit text must be unique to the page.

## Research (mandatory: do it and record it)

Search Console and Semrush data for every page is in the appendix below. The Semrush API is unavailable, so don't call it, and don't use the Chrome browser.

For each page:

1. **WebSearch 3–5 queries**, the way the client and their customers search:
   - "<niche> seo", "local seo for <niche>";
   - what customers search for that service ("<service> near me", emergency or problem phrases);
   - "<niche> google business profile categories";
   - "<niche> ai search / google ai overviews".

   Note the People-also-ask questions, related searches and the angles of the top results.
2. **WebFetch 2 top-ranking pages** for the main term. Note their sections and gaps. **Never copy their wording**; use them only to choose which services, searches and FAQs the page needs.
3. Record a short research note at the top of your content file, in the comment style of the electricians file: the GSC terms, the Semrush terms and what the web research changed.

## Validation (must pass before you report)

1. `npx prettier --write <your files>`, then `npx tsc --noEmit -p . 2>&1 | grep localseo` (must be empty), then `npx eslint <your files>` (zero problems).
2. `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000<draft-url>` returns 200. The dev server is already running; never start or stop it.
3. H1 lines: `node /private/tmp/claude-501/-Users-niteshmaan-Desktop-zonic-media/5687465f-480a-41cb-8a01-b13eac3299b9/scratchpad/h1lines.mjs http://localhost:3000<draft-url> "#seo-h1"`. Every width must report ≤ 3.
4. Duplicate check:

   ```
   python3 /private/tmp/claude-501/-Users-niteshmaan-Desktop-zonic-media/5687465f-480a-41cb-8a01-b13eac3299b9/scratchpad/dupcheck.py <draft> <live> \
     http://localhost:3000/services/industry/local-seo-for-electricians-2 \
     http://localhost:3000/services/seo-services-2 \
     http://localhost:3000<the niche marketing -2 draft from the appendix> \
     <every sibling draft you built>
   ```

   It must print OK for every comparison. Rewrite and rerun until it does.
5. Don't run git, don't delete files, and don't touch other agents' files.

## Report back (short)

For each page:

- draft URL;
- title and H1;
- the 6–10 keywords used, with volumes;
- the live ranking terms you kept;
- links kept or added;
- word count;
- dupcheck and H1 results;
- anything you couldn't do.

## Round 2 (owner, 26 Oct 2026): animated hero + two new sections

Owner's request:

> "the ui component in hero section was the main part … there is no animation in it i want u to show like after our service how their brand will grow and how that service will grow their business — also the pages are small i want u to add atleast two more relevant section … positive things after taking service from zonic and another section … different between other seo service and zonic seo"

**Already built in the template; do not edit shared files:**

- The hero UIs now play a looping **Before → With Zonic** story. A "What grows with Zonic" strip sits under each one.
- Two new sections:
  - **Results** ("what changes after you hire Zonic"): a growth timeline, 4 outcome cards, then the sitewide verified numbers;
  - **Compare** ("Zonic vs a typical SEO company"): a table.
- The reference is `content/local-seo-for-electricians.ts`: see `hero.outcomes`, `results` and `compare`. **Never reuse its wording.**

**New fields per page:** see `types.ts`.

1. **`hero.outcomes`** is a tuple `[brand, business, trust]`: three labels of 2–3 words each, niche-specific.
   - brand: e.g. "Maps visibility", "Seen in AI answers";
   - business: e.g. "Panel and EV calls", "New patient bookings", "Signed roof jobs";
   - trust: e.g. "5-star reviews", "Parent reviews".
2. **`results`:**
   - `title`: unique, contains the niche word, 2 lines as a split head, about 36–52 characters.
   - `lead`: 2 lines max, about 80–110 characters.
   - `cta`: unique button text.
   - `milestones` (×4):
     - `when` is a loose phase such as "Weeks 1–2", "Month 1", "Months 2–4", "Month 4 onward" or "First season". Never promise dates.
     - `title` is 3–5 words.
     - `text` is 13–20 words: what WE do and what usually starts to change. Use hedged wording ("start to", "toward", "more"). No numbers or guarantees.
   - `wins` (×4):
     - `icon` is a key from icons.tsx.
     - `title` is 3–7 words: a positive change for the client's business (calls, bookings, reviews, AI mentions, fewer shared leads, steadier season, brand recognition…).
     - `text` is 13–20 words.
3. **`compare`:**
   - `title`: centred, ≤2 lines, about 38–56 characters, unique, contains the niche word (e.g. "Zonic vs. a Typical SEO Company for Roofers").
   - `lead`: one line, about 60–90 characters.
   - `rows` (×6): `topic` 2–5 words; `other` 8–14 words; `zonic` 10–16 words.
   - **Choose topics that matter to that niche:**
     - storm pages for roofers;
     - HIPAA-aware reviews for dental;
     - bar-rule-safe copy for law;
     - menu and directory listings for cannabis;
     - seasonal demand for pools;
     - and so on.

     Use at most 3 of the generic topics (contract terms, reporting, Business Profile upkeep, AI search, links). Don't copy the electricians topics or wording.

**Claims rules for compare and results (legal):**
- The `other` column describes what businesses *often* get elsewhere. Use hedged, fair wording ("often", "many", "can"). Never name or hint at a specific company. No insults, no prices, no "cheaper", no numbers.
- The `zonic` column must be TRUE: services we actually offer on this page (its service cards) and the facts in this brief:
  - month to month;
  - accounts and listings in the client's name;
  - calls and forms tracked;
  - 0% ad-spend markup, only where ads are relevant (never on cannabis).

  Never promise rankings, results or timelines. Never claim plan inclusions that `src/components/rd/home/pricing.ts` doesn't list.
- Verified numbers stay as they are (the template shows them). Don't add other figures.
- Healthcare: no outcome promises, and HIPAA-aware wording. Law: attorney-advertising care.

**Validation:** as before.
- prettier, then `tsc` filtered to your files, then eslint.
- curl 200.
- dupcheck against the electricians reference, seo-services-2, the niche marketing -2 draft, your sibling drafts and the live page. Everything must print OK.

  The new sections add many sentences, so write niche-specific wording to avoid collisions with the other 29 pages.

---

## Appendix: per-page research data (collected 25–26 Oct 2026)

Search Console is 90 days, for the live URL only: `query~impressions~avg position`. Semrush is US data: `keyword~monthly volume~KD`.

### ai-seo-services

- Live: `/services/ai-seo-services` → draft `/services/ai-seo-services-2`
- Live title: AI SEO Agency | AI Search Optimization, GEO & AEO Services  |  live H1: ['AI SEO Services That Get You Cited in AI Answers']
- Hero UI kind: **ai**
- Search Console (90 days, query~impressions~position): ai seo services~212~39.0; ai content seo consultant~25~57.0; ai seo consultant~13~40.4; ai search engine optimization services~10~53.6; chatgpt seo los angeles~7~74.1; ai search optimization consultant~7~75.7; ai optimization services~5~65.0
- Semrush US (keyword~volume~KD): ai search optimization~4400~73; ai seo agency~4400~36; ai seo services~4400~34; generative engine optimization services~2900~28; ai seo company~1900~46; llm seo~1900~25; chatgpt seo~1600~49; answer engine optimization services~880~50; ai seo consultant~260~38; geo seo services~110~35
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/delaware/seo, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-small-business, /services/local-seo-packages, /services/nyc/local-seo, /services/philadelphia/local-seo, /services/seo-services, /services/web-design
- Marketing draft for this niche: none (compare against `/services/seo-services-2` and `/services/local-seo-for-home-services-2`)

### local-seo-for-small-business

- Live: `/services/local-seo-for-small-business` → draft `/services/local-seo-for-small-business-2`
- Live title: Best Local SEO Services for Small Business | Zonic Media  |  live H1: ['Small Business Local SEO That Makes the Phone Ring']
- Hero UI kind: **scorecard**
- Search Console (90 days, query~impressions~position): local seo consultant~121~14.0; local seo consulting~59~23.3; small town seo company~33~19.5; local seo consultation~16~29.6; local seo services for kent small business~13~16.6; local seo audit services~7~37.4
- Semrush US (keyword~volume~KD): local seo expert~4400~42; local seo audit~3600~11; local seo consultant~3600~43; local seo for small business~2900~44; affordable local seo services~2400~50; local seo services for small business~1900~36; small business local seo~1300~63; local seo company for small business~50~34
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/local-seo-for-home-services, /services/local-seo-packages, /services/seo-services, /services/web-design
- Marketing draft for this niche: none (compare against `/services/seo-services-2` and `/services/local-seo-for-home-services-2`)
- Note: Live page ranks #14 for 'local seo consultant' (121 impr.): keep 'Local SEO Consultant' in the title.

### local-seo-packages

- Live: `/services/local-seo-packages` → draft `/services/local-seo-packages-2`
- Live title: Local SEO Packages & Pricing | Plans from $297/mo  |  live H1: ['Local SEO Packages With Deliverables You Can Read']
- Hero UI kind: **packages**
- Search Console (90 days, query~impressions~position): local seo packages~1417~41.8; local seo package~276~40.7; local business seo packages~237~38.4; local seo plans~198~38.2; seo packages for small business~180~49.6; local seo service package~174~45.6; local seo pricing packages~168~43.5; small business seo packages~116~45.8; affordable local seo packages~110~50.6; local seo package pricing~85~32.6; custom seo packages~52~65.1; seo packages~47~37.6; local business seo package~41~43.2; local seo packaged plans~35~29.6
- Semrush US (keyword~volume~KD): local seo packages~4400~38; local seo pricing~2900~34; seo packages for small business~2400~4; local seo package~1900~39; small business seo packages~1600~3; local seo plans~480~30; affordable local seo packages~170~37; monthly local seo packages~0~n/a
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/local-seo-for-home-services, /services/local-seo-for-small-business, /services/seo-services
- Marketing draft for this niche: none (compare against `/services/seo-services-2` and `/services/local-seo-for-home-services-2`)
- Note: Pricing lock: the hero UI and copy describe WHAT each package covers; never state prices outside the FAQ. Plan names are Foundation, Growth, Authority (src/components/rd/home/pricing.ts) — read the real features there and describe them accurately.

### local-seo-services-for-hvac

- Live: `/services/industry/local-seo-services-for-hvac` → draft `/services/industry/local-seo-services-for-hvac-2`
- Live title: HVAC SEO Company | Local SEO Services for HVAC Companies  |  live H1: ['Local SEO for HVAC That Books More Jobs']
- Hero UI kind: **phone**
- Search Console (90 days, query~impressions~position): no impressions recorded
- Semrush US (keyword~volume~KD): hvac seo~3600~33; hvac seo services~2400~28; seo for hvac companies~1900~34; hvac seo company~1600~29; hvac seo agency~1300~25; local seo for hvac~720~26
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/hvac-marketing-agency, /services/hvac-website-design, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/hvac-marketing-agency-2`

### seo-services-for-plumber

- Live: `/services/industry/seo-services-for-plumber` → draft `/services/industry/seo-services-for-plumber-2`
- Live title: SEO for Plumbers | Affordable Plumbing SEO Company & Agency  |  live H1: ['Local SEO for Plumbers That Books More Jobs']
- Hero UI kind: **phone**
- Search Console (90 days, query~impressions~position): no impressions recorded
- Semrush US (keyword~volume~KD): seo for plumbers~3600~17; plumber seo~2400~37; plumbing seo~1900~41; local seo for plumbers~1300~13; plumbing seo company~880~32; plumbing seo services~720~22
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/plumbing-marketing-agency, /services/plumbing-website-design, /services/web-design
- Marketing draft for this niche (compare against it): `/services/plumbing-marketing-agency-2`

### local-seo-for-garage-door-companies

- Live: `/services/industry/local-seo-for-garage-door-companies` → draft `/services/industry/local-seo-for-garage-door-companies-2`
- Live title: Garage Door Repair SEO Company | Garage Door Local SEO  |  live H1: ['Local SEO for Garage Door Companies That Books Jobs']
- Hero UI kind: **phone**
- Search Console (90 days, query~impressions~position): garage door repair seo company~822~20.6; garage door seo~706~35.0; seo for garage door companies~589~27.8; garage door seo services~391~27.8; garage door local seo marketing~383~19.1; local seo for garage door company~375~25.0; garage door repair seo agency~333~16.2; garage door repair seo services~311~21.0; garage door repair seo~299~22.6; garage door company seo~259~26.9; garage door repair seo experts~251~25.2; seo agency for garage door companies~245~20.9; local seo for garage door companies~208~24.3; seo services for garage door companies~181~24.1
- Semrush US (keyword~volume~KD): garage door seo~480~11; seo for garage door companies~260~1; garage door repair seo~110~9; garage door seo company~50~1
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/garage-door-marketing-agency, /services/garage-door-website-design, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/garage-door-marketing-agency-2`

### local-seo-for-appliance-repair

- Live: `/services/industry/local-seo-for-appliance-repair` → draft `/services/industry/local-seo-for-appliance-repair-2`
- Live title: Appliance Repair SEO | Local SEO for Appliance Repair  |  live H1: ['Local SEO for Appliance Repair That Books Calls']
- Hero UI kind: **serp**
- Search Console (90 days, query~impressions~position): appliance repair seo~302~30.4; seo for appliance repair~288~33.5; local seo for appliance repair~212~27.9; appliance repair seo services~138~21.5; appliance repair company seo~40~29.2; appliance repair seo agency~36~21.0; local seo tips for appliance repair~27~34.9; appliance repair web design services~11~58.5; appliance seo~7~35.9; seo for appliance repair services~5~25.6
- Semrush US (keyword~volume~KD): seo for appliance repair~320~7; appliance repair seo~260~13
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/appliance-repair-marketing-agency, /services/appliance-repair-website-design, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/appliance-repair-marketing-agency-2`

### local-seo-for-roofing-companies

- Live: `/services/industry/local-seo-for-roofing-companies` → draft `/services/industry/local-seo-for-roofing-companies-2`
- Live title: Roofing SEO Company | Local SEO for Roofing Companies  |  live H1: ['Local SEO for Roofers That Books More Jobs']
- Hero UI kind: **grid**
- Search Console (90 days, query~impressions~position): seo for roofing companies~520~47.7; local seo for roofing companies~306~40.7; roofing seo~296~42.7; seo for roofing company~268~51.7; local seo for roofers~234~38.2; roofing company seo~228~44.0; seo services for roofing company~188~46.5; roofing contractor seo~168~41.0; roofing seo services~165~34.0; seo for roofing contractors~150~31.9; roofing company seo services~140~43.6; roofing company local seo services~121~37.4; roofing local seo company~114~34.4; local seo for roofing company~114~42.6
- Semrush US (keyword~volume~KD): roofing seo~4400~23; seo for roofers~2400~10; roofing seo company~1900~21; seo for roofing companies~1900~22; roofing seo services~1000~40; roofing contractor seo~480~22; local seo for roofers~320~17
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/roofing-marketing-agency, /services/roofing-website-design, /services/web-design
- Marketing draft for this niche (compare against it): `/services/roofing-marketing-agency-2`

### local-seo-for-gutter-companies

- Live: `/services/industry/local-seo-for-gutter-companies` → draft `/services/industry/local-seo-for-gutter-companies-2`
- Live title: Gutter Company SEO | Local SEO for Gutter Companies  |  live H1: ['Local SEO for Gutter Companies That Books Jobs']
- Hero UI kind: **grid**
- Search Console (90 days, query~impressions~position): gutter seo~142~17.6; local seo for gutter installers~127~5.5; seo for gutter contractors~123~13.9; gutter installation seo~120~16.9; gutter company seo~92~16.2; gutter local seo~87~6.9; gutter marketing seo agency~77~18.9; seo for gutter installation & cleaning~70~10.4; local seo for gutter companies~54~5.8; google maps optimization for gutter companies~46~7.2; gutter contractors seo company~43~11.2; seo for gutter contractors tampa~39~24.3; google business profile for gutter companies~38~10.6
- Semrush US (keyword~volume~KD): gutter seo~50~1
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/gutter-company-website-design, /services/gutter-marketing-agency, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/gutter-marketing-agency-2`

### local-seo-for-solar-companies

- Live: `/services/industry/local-seo-for-solar-companies` → draft `/services/industry/local-seo-for-solar-companies-2`
- Live title: Solar SEO Company | Local SEO for Solar Companies  |  live H1: ['Local SEO for Solar Companies That Books Installs']
- Hero UI kind: **serp**
- Search Console (90 days, query~impressions~position): seo for solar companies~294~43.9; solar seo services~150~34.6; solar company seo~143~46.4; seo for solar power companies~142~50.0; seo for solar~120~42.1; solar panel manufacturers seo company~113~28.0; solar seo company~107~27.9; solar company seo near me~105~6.6; solar seo~99~37.2; local seo for solar company~95~32.7; solar company seo services~94~37.6; solar company local seo~90~26.2; local seo for solar companies~85~33.7; solar installer seo company~73~20.8
- Semrush US (keyword~volume~KD): seo for solar companies~390~20; solar seo~320~17; solar seo company~170~22; solar seo agency~10~n/a
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/solar-marketing-agency, /services/solar-website-design, /services/web-design
- Marketing draft for this niche (compare against it): `/services/solar-marketing-agency-2`

### local-seo-for-window-and-door-companies

- Live: `/services/industry/local-seo-for-window-and-door-companies` → draft `/services/industry/local-seo-for-window-and-door-companies-2`
- Live title: Window & Door SEO | Local SEO for Window and Door Companies  |  live H1: ['Local SEO for Window & Door Companies']
- Hero UI kind: **serp**
- Search Console (90 days, query~impressions~position): no impressions recorded
- Semrush US (keyword~volume~KD): window and door seo~40~10; seo for window companies~30~n/a; window company seo~20~n/a; door company seo~0~n/a
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/web-design, /services/window-and-door-marketing-agency, /services/window-and-door-website-design
- Marketing draft for this niche (compare against it): `/services/window-and-door-marketing-agency-2`
- Note: GSC shows no impressions for this URL in 90 days; pick targets from Semrush + web research ('window and door seo', 'window company seo', 'local seo for window and door companies', 'window installer seo', 'door installer seo').

### local-seo-for-bathroom-remodelers

- Live: `/services/industry/local-seo-for-bathroom-remodelers` → draft `/services/industry/local-seo-for-bathroom-remodelers-2`
- Live title: Bathroom Remodeling SEO | Local SEO for Bathroom Remodelers  |  live H1: ['Local SEO for Bathroom Remodelers That Books Jobs']
- Hero UI kind: **profile**
- Search Console (90 days, query~impressions~position): bathroom remodeling seo company~463~20.6; bathroom remodeling seo marketing~335~26.2; seo for bathroom remodeling~276~13.2; bathroom remodeling seo~273~22.9; seo for bathroom remodeling company~239~20.2; seo bath~212~27.1; bathroom remodeling company seo~162~26.4; seo for bathroom companies~150~21.9; seo for bathroom fitters~145~21.0; seo services for bathroom remodel company~140~14.6; seo for bathroom designers~132~27.8; seo services for bathroom remodel~125~15.5; seo for bathroom~124~16.6; bathroom remodel seo services~112~14.8
- Semrush US (keyword~volume~KD): seo for remodelers~880~13; remodeling seo~480~22; kitchen remodeling seo~390~22; bathroom remodeling seo~140~9; bathroom remodel seo~90~10; kitchen remodeler seo~10~n/a; seo for bathroom remodelers~10~n/a; seo for kitchen remodelers~10~n/a
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/bathroom-remodeling-marketing-agency, /services/bathroom-remodeling-website-design, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/bathroom-remodeling-marketing-agency-2`
- Note: Own 'bathroom remodeling seo'; leave 'seo for remodelers' / 'remodeling seo' to the kitchen page.

### local-seo-for-kitchen-remodelers

- Live: `/services/industry/local-seo-for-kitchen-remodelers` → draft `/services/industry/local-seo-for-kitchen-remodelers-2`
- Live title: Kitchen Remodeling SEO | Local SEO for Kitchen Remodelers  |  live H1: ['Local SEO for Kitchen Remodelers That Books Jobs']
- Hero UI kind: **profile**
- Search Console (90 days, query~impressions~position): kitchen remodel seo services~654~12.6; kitchen remodeling seo~479~26.8; seo for kitchen remodeling~266~27.3; kitchen renovation seo~254~25.4; seo for kitchen~105~20.9; seo for kitchen remodeling company~104~25.6; seo services for kitchen remodeling~104~26.4; seo for kitchen remodeling companies ny~97~18.0; seo for kitchen remodel company~87~23.1; kitchen remodel seo~81~31.7; seo for kitchen designers~79~32.4; kitchen company seo~63~35.5
- Semrush US (keyword~volume~KD): seo for remodelers~880~13; remodeling seo~480~22; kitchen remodeling seo~390~22; bathroom remodeling seo~140~9; bathroom remodel seo~90~10; kitchen remodeler seo~10~n/a; seo for bathroom remodelers~10~n/a; seo for kitchen remodelers~10~n/a
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/kitchen-remodeling-marketing-agency, /services/kitchen-remodeling-website-design, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/kitchen-remodeling-marketing-agency-2`
- Note: Own 'kitchen remodeling seo' plus the broader 'seo for remodelers' (880) / 'remodeling seo' (480).

### local-seo-for-flooring-companies

- Live: `/services/industry/local-seo-for-flooring-companies` → draft `/services/industry/local-seo-for-flooring-companies-2`
- Live title: Flooring SEO Company | Local SEO for Flooring Companies  |  live H1: ['Local SEO for Flooring Companies That Books Jobs']
- Hero UI kind: **profile**
- Search Console (90 days, query~impressions~position): seo for flooring companies~532~34.5; flooring company seo~329~29.7; flooring company seo services~257~30.9; flooring seo~214~34.0; flooring company local seo services~212~16.0; flooring company seo marketing~169~57.9; flooring company local seo~135~19.7; local seo cost for flooring company~121~20.3; seo services for flooring companies~103~21.0; local seo for flooring companies~89~27.2; local seo for flooring installers~79~21.8; local seo for flooring contractors~78~25.4; local seo marketing for flooring companies~70~26.6; local seo services for flooring contractors~68~17.9
- Semrush US (keyword~volume~KD): seo for flooring companies~590~10; flooring seo~320~5
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/flooring-marketing-agency, /services/flooring-website-design, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/flooring-marketing-agency-2`

### local-seo-for-general-contractors

- Live: `/services/industry/local-seo-for-general-contractors` → draft `/services/industry/local-seo-for-general-contractors-2`
- Live title: General Contractor SEO | Local SEO for General Contractors  |  live H1: ['Local SEO for General Contractors That Wins Jobs']
- Hero UI kind: **serp**
- Search Console (90 days, query~impressions~position): general contractor seo~495~35.0; seo for general contractors~415~43.5; local seo marketing for remodeling contractors~302~42.9; seo company for contractors~239~11.5; seo services for home improvement companies~177~10.1; local seo for general contractors~135~40.0; local seo general contractors~134~18.9; general contractor seo company~117~14.9; local seo for remodeling contractors~95~28.7; local seo residential remodelers~60~16.5; local seo services for remodeling contractors~53~9.7; general contractor seo services~50~11.4; seo for general contractors near me~41~4.9; local seo strategy for remodeling contractors~33~45.1
- Semrush US (keyword~volume~KD): contractor seo~3600~23; seo for contractors~3600~23; home builder seo~2400~8; construction seo~1600~26; seo for general contractors~1000~16; general contractor seo~880~22; seo for home builders~720~8; roofing contractor seo~480~22; painting contractor seo~140~9
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/general-contractor-marketing-agency, /services/general-contractor-website-design, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/general-contractor-marketing-agency-2`
- Note: Own 'contractor seo' (3,600), 'seo for contractors' (3,600), 'construction seo' (1,600), 'general contractor seo', 'seo for general contractors'. Home builders (2,400 'home builder seo') can be a service card.

### local-seo-for-painting-contractors

- Live: `/services/industry/local-seo-for-painting-contractors` → draft `/services/industry/local-seo-for-painting-contractors-2`
- Live title: Painting Contractor SEO | Local SEO for Painting Companies  |  live H1: ['Local SEO for Painting Contractors That Books Jobs']
- Hero UI kind: **grid**
- Search Console (90 days, query~impressions~position): seo for painters~724~62.3; seo for painting contractors~428~45.6; painting company seo~294~48.5; seo agency for painting service~198~40.4; seo for painting companies~159~52.8; painter seo~138~51.1; painting contractor seo~132~46.1; painter local seo marketing~95~33.1; local seo for painters~94~42.5; seo services for painting contractors~83~19.9; seo management for painting~67~65.7; seo for painting~66~58.5; local seo services for painting companies~65~18.6; seo services for painting companies~63~36.4
- Semrush US (keyword~volume~KD): seo for painters~720~7; painting company seo~480~10; painter seo~260~10; painting contractor seo~140~9
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/painting-contractor-marketing-agency, /services/painting-contractor-website-design, /services/web-design
- Marketing draft for this niche (compare against it): `/services/painting-contractor-marketing-agency-2`

### local-seo-for-landscaping-companies

- Live: `/services/industry/local-seo-for-landscaping-companies` → draft `/services/industry/local-seo-for-landscaping-companies-2`
- Live title: Landscaping SEO Company | Local SEO for Landscapers  |  live H1: ['Landscaping SEO Company: Local SEO That Books Jobs']
- Hero UI kind: **grid**
- Search Console (90 days, query~impressions~position): landscaping seo company~803~26.3; landscaper seo~472~54.4; local seo for landscapers~401~46.7; landscaping seo services~374~37.8; landscaper seo services~355~33.0; local seo for landscaping companies~330~44.7; landscaping seo service~278~38.5; landscaping company seo services~265~36.9; seo services for landscaping~200~39.9; seo company for landscaping~196~29.3; landscaping company seo company~196~32.1; landscaping company seo experts~184~27.8; landscaping company seo~183~51.2; seo for landscaping companies~176~57.9
- Semrush US (keyword~volume~KD): seo for landscapers~2400~21; landscaping seo~1900~19; lawn care seo~720~15; landscaping seo company~590~12
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/landscaping-marketing-agency, /services/landscaping-website-design, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/landscaping-marketing-agency-2`

### local-seo-for-tree-service-companies

- Live: `/services/industry/local-seo-for-tree-service-companies` → draft `/services/industry/local-seo-for-tree-service-companies-2`
- Live title: Tree Service SEO | Local SEO for Tree Service Companies  |  live H1: ['Local SEO for Tree Service That Books More Jobs']
- Hero UI kind: **phone**
- Search Console (90 days, query~impressions~position): tree service seo~858~28.7; tree service seo company~469~21.8; tree service seo agency~326~20.9; local seo for tree service~275~25.2; tree removal seo~238~31.7; local seo for tree services~169~29.3; tree service seo experts~154~30.1; tree service local search optimization~141~20.2; local tree service reputation management agency~141~34.4; local tree service online reputation management company~138~42.8; tree service seo services~130~23.9; tree service seo expert~130~29.5
- Semrush US (keyword~volume~KD): tree service seo~590~14; tree removal seo~210~9; arborist seo~40~8; seo for tree service~20~
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/tree-service-marketing-agency, /services/tree-service-website-design, /services/web-design
- Marketing draft for this niche (compare against it): `/services/tree-service-marketing-agency-2`

### local-seo-for-pool-service-companies

- Live: `/services/industry/local-seo-for-pool-service-companies` → draft `/services/industry/local-seo-for-pool-service-companies-2`
- Live title: Pool Service SEO | Local SEO for Pool Cleaning & Repair  |  live H1: ['Local SEO for Pool Service That Wins Clients']
- Hero UI kind: **grid**
- Search Console (90 days, query~impressions~position): pool company seo services~282~28.8; pool company seo~217~38.3; seo for pool service company~216~23.4; pool service search engine optimization~189~25.8; local seo pool services~180~11.9; pool service seo~139~22.4; local seo for pool companies~114~18.0; pool cleaners seo~95~21.2; seo for pool service companies~92~23.4; local seo services for pool services businesses~73~13.2; seo for pool cleaning & maintenance~66~16.4; seo consultation for pool companies~66~32.4
- Semrush US (keyword~volume~KD): pool company seo~390~20; pool builder seo~320~2; pool service seo~260~18; seo for pool companies~50~4
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/pool-service-marketing-agency, /services/pool-service-website-design, /services/web-design
- Marketing draft for this niche (compare against it): `/services/pool-service-marketing-agency-2`

### seo-services-for-pest-control

- Live: `/services/industry/seo-services-for-pest-control` → draft `/services/industry/seo-services-for-pest-control-2`
- Live title: Pest Control SEO Company | SEO Services for Pest Control  |  live H1: ['Local SEO for Pest Control That Books More Jobs']
- Hero UI kind: **phone**
- Search Console (90 days, query~impressions~position): no impressions recorded
- Semrush US (keyword~volume~KD): pest control seo~1600~30; pest control seo company~880~26; seo for pest control~880~25; exterminator seo~10~
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/pest-control-marketing-agency, /services/pest-control-website-design, /services/web-design
- Marketing draft for this niche (compare against it): `/services/pest-control-marketing-agency-2`
- Note: GSC shows no impressions for this URL in 90 days; pick targets from Semrush + web research.

### local-seo-for-commercial-cleaning

- Live: `/services/industry/local-seo-for-commercial-cleaning` → draft `/services/industry/local-seo-for-commercial-cleaning-2`
- Live title: Commercial Cleaning SEO | Local SEO for Janitorial Companies  |  live H1: ['Local SEO for Commercial Cleaning That Wins Contracts']
- Hero UI kind: **serp**
- Search Console (90 days, query~impressions~position): seo for cleaning companies~453~39.2; local seo for cleaning services~336~33.5; seo for janitorial services~292~41.4; janitorial seo~264~14.7; seo cleaning services~236~35.7; local seo for cleaning company~210~29.9; seo for cleaning company~180~33.8; cleaning company local seo~178~27.2; seo for cleaning business~177~36.5; cleaning company local seo company~162~23.7; local seo for cleaning companies~151~30.8; cleaning service company seo~128~23.3; local seo for cleaning business~110~32.0; local seo services for cleaning company~104~24.5
- Semrush US (keyword~volume~KD): cleaning company seo~590~16; seo for cleaning companies~390~18; cleaning business seo~140~14; house cleaning seo~70~9; janitorial seo~70~10; commercial cleaning seo~10~
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/cleaning-company-marketing-agency, /services/commercial-cleaning-website-design, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/web-design
- Marketing draft for this niche (compare against it): `/services/cleaning-company-marketing-agency-2`
- Note: Own the commercial/janitorial/B2B side: 'seo for cleaning companies', 'cleaning company seo', 'janitorial seo', 'commercial cleaning seo'. Leave maid/house cleaning terms to the residential page.

### local-seo-services-for-residential-cleaning

- Live: `/services/industry/local-seo-services-for-residential-cleaning` → draft `/services/industry/local-seo-services-for-residential-cleaning-2`
- Live title: House Cleaning SEO | Local SEO for Residential Cleaning  |  live H1: ['Local SEO for House Cleaning That Books Clients']
- Hero UI kind: **profile**
- Search Console (90 days, query~impressions~position): no impressions recorded
- Semrush US (keyword~volume~KD): cleaning company seo~590~16; seo for cleaning companies~390~18; maid service seo~260~10; cleaning business seo~140~14; house cleaning seo~70~9; commercial cleaning seo~10~
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/cleaning-company-marketing-agency, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/residential-cleaning-website-design, /services/web-design
- Marketing draft for this niche (compare against it): `/services/cleaning-company-marketing-agency-2`
- Note: GSC shows no SEO impressions for this URL. Own 'maid service seo' (260), 'house cleaning seo', 'residential cleaning seo', 'cleaning business seo' (140).

### dental-seo-services

- Live: `/services/industry/dental-seo-services` → draft `/services/industry/dental-seo-services-2`
- Live title: Dental SEO Company USA | Dental SEO Services & Experts  |  live H1: ['Dental SEO That Books More New Patients']
- Hero UI kind: **profile**
- Search Console (90 days, query~impressions~position): no impressions recorded
- Semrush US (keyword~volume~KD): dental seo~6600~35; seo for dentists~5400~28; dental seo company~3600~44; dentist seo~3600~26; dental seo services~2900~37; local seo for dentists~2900~24; dental seo agency~2400~32; seo for dental practices~720~25; pediatric dental seo~10~
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/dental-marketing-agency, /services/dental-website-design, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/web-design
- Non-home-service niche (owner, 25 Oct): link `/services/local-seo-for-small-business` where the live page linked `/services/local-seo-for-home-services`.
- Marketing draft for this niche (compare against it): `/services/dental-marketing-agency-2`
- Note: GSC shows no impressions for this URL in 90 days. Big terms: dental seo 6,600 · seo for dentists 5,400 · dentist seo 3,600 · dental seo company 3,600 · dental seo services 2,900 · local seo for dentists 2,900.

### chiropractor-local-seo-services

- Live: `/services/industry/chiropractor-local-seo-services` → draft `/services/industry/chiropractor-local-seo-services-2`
- Live title: Chiropractor SEO Company | Chiropractic SEO Services  |  live H1: ['Chiropractor SEO Company That Books Patients']
- Hero UI kind: **serp**
- Search Console (90 days, query~impressions~position): chiropractor seo company~605~29.9; chiropractic seo company~564~32.9; chiropractor seo expert~555~27.1; local seo for chiropractors~551~32.2; chiropractor seo services~484~27.0; chiropractor seo agency~464~24.7; seo services for chiropractors~415~38.1; chiropractor seo~387~35.0; chiropractic seo services~352~36.1; chiropractor seo experts~170~29.6; chiropractor seo service~140~29.8; chiropractic local seo~115~25.2; chiropractors local seo~90~25.7
- Semrush US (keyword~volume~KD): chiropractor seo~2400~21; seo for chiropractors~2400~26; chiropractic seo~1900~31; chiropractic seo company~590~21
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/chiropractic-marketing-agency, /services/chiropractor-website-design, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/web-design
- Non-home-service niche (owner, 25 Oct): link `/services/local-seo-for-small-business` where the live page linked `/services/local-seo-for-home-services`.
- Marketing draft for this niche (compare against it): `/services/chiropractic-marketing-agency-2`

### pediatricians

- Live: `/services/industry/pediatricians` → draft `/services/industry/pediatricians-2`
- Live title: Pediatrician SEO Company | Pediatric Practice Marketing  |  live H1: ['Pediatrician SEO Company That Fills Your Schedule']
- Hero UI kind: **profile**
- Search Console (90 days, query~impressions~position): pediatrics seo company~381~11.7; pediatrician marketing~228~55.5; pediatrician seo~100~20.5; pediatric marketing agency~85~35.3; seo for pediatrician~83~21.4; pediatrician ppc marketing~70~55.2; pediatrician seo marketing~53~18.1; pediatric marketing~49~44.4; marketing for pediatricians~43~34.8; lead generation for pediatrician~41~23.0; seo for pediatricians~36~17.8; pediatrican digital marketing~33~40.8; pediatrician marketing seo~28~19.3; pediatric digital marketing~24~51.5
- Semrush US (keyword~volume~KD): pediatrician seo~50~0; pediatric dental seo~10~
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/pediatric-marketing-agency, /services/pediatrician-website-design, /services/web-design
- Non-home-service niche (owner, 25 Oct): link `/services/local-seo-for-small-business` where the live page linked `/services/local-seo-for-home-services`.
- Marketing draft for this niche (compare against it): `/services/pediatric-marketing-agency-2`
- Note: Leave 'pediatric marketing' / 'pediatrician marketing' to the marketing page; this page owns 'pediatrician seo', 'pediatric seo', 'seo for pediatricians', 'pediatrics seo company' (GSC 381 @ 11.7, the page's best term).

### local-seo-for-law-firms

- Live: `/services/industry/local-seo-for-law-firms` → draft `/services/industry/local-seo-for-law-firms-2`
- Live title: Law Firm SEO Company | Local SEO for Law Firms & Attorneys  |  live H1: ['Law Firm SEO Company That Wins Clients']
- Hero UI kind: **serp**
- Search Console (90 days, query~impressions~position): law firm local seo~1006~51.2; local seo services for law firms~786~50.0; local seo for law firms~462~42.4; local seo services for lawyers~125~53.7; lawyer local seo~101~50.3; law firm local seo company~76~50.9; local seo services for law firm~72~53.7; attorney local seo~51~44.5; local seo services for attorneys~46~42.0; local seo for criminal defense law firms~43~47.2; law firms local seo~43~50.7; local seo lawyers~37~41.8; seo services for lawyers~35~78.1
- Semrush US (keyword~volume~KD): law firm seo~9900~37; seo for lawyers~9900~33; lawyer seo~6600~50; seo for law firms~6600~40; attorney seo~3600~41; legal seo~3600~40; law firm seo company~2900~49; seo for attorneys~2400~38; local seo for law firms~1600~29; personal injury seo~1000~20; lawn care seo~720~15
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/law-firm-marketing-agency, /services/law-firm-website-design, /services/local-seo-for-home-services, /services/web-design
- Non-home-service niche (owner, 25 Oct): link `/services/local-seo-for-small-business` where the live page linked `/services/local-seo-for-home-services`.
- Marketing draft for this niche (compare against it): `/services/law-firm-marketing-agency-2`
- Note: Big terms: law firm seo 9,900 · seo for lawyers 9,900 · lawyer seo 6,600 · seo for law firms 6,600 · attorney seo 3,600 · legal seo 3,600 · local seo for law firms 1,600. Keep 'Local SEO for Law Firms' in the title (live ranking term).

### real-estate-seo-services

- Live: `/services/industry/real-estate-seo-services` → draft `/services/industry/real-estate-seo-services-2`
- Live title: Real Estate SEO Company | SEO Services for Realtors & Agents  |  live H1: ['Real Estate SEO Experts That Win More Leads']
- Hero UI kind: **serp**
- Search Console (90 days, query~impressions~position): real estate seo services~1647~28.4; real estate seo company~1602~28.1; cheap seo for realtors~1408~29.8; real estate seo companies~1015~28.3; real estate seo agency~1009~32.0; seo services for real estate agents~871~25.7; seo services for real estate~810~29.4; best seo company for real estate~727~22.3; real estate seo expert~612~35.6; local seo for real estate agents~546~22.7; real estate seo consultant~493~30.0; local seo for real estate~423~22.4; real estate seo service~388~28.0; realtor seo company~378~13.1
- Semrush US (keyword~volume~KD): real estate seo~2900~28; real estate seo company~1300~23; real estate seo services~1300~32; seo for real estate agents~880~27; seo for realtors~720~28; realtor seo~320~28
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/real-estate-agent-website-design, /services/real-estate-marketing-agency, /services/web-design
- Non-home-service niche (owner, 25 Oct): link `/services/local-seo-for-small-business` where the live page linked `/services/local-seo-for-home-services`.
- Marketing draft for this niche (compare against it): `/services/real-estate-marketing-agency-2`
- Note: Live page already earns real impressions (real estate seo services 1,647 @ 28). Keep 'Real Estate SEO Services' in title. Do NOT target 'cheap seo for realtors' wording (owner: no price talk) — 'affordable' is fine once.

### local-seo-for-cannabis-dispensaries

- Live: `/services/industry/local-seo-for-cannabis-dispensaries` → draft `/services/industry/local-seo-for-cannabis-dispensaries-2`
- Live title: Dispensary SEO Company | Local SEO for Cannabis Dispensaries  |  live H1: ['Local SEO for Cannabis Dispensaries That Fills Your Store']
- Hero UI kind: **phone**
- Search Console (90 days, query~impressions~position): dispensary seo~97~61.1; dispensary seo services~67~39.7; local seo for dispensaries~63~42.4; cannabis local seo~60~43.8; seo for dispensaries~49~59.1; dispensary local seo~32~40.3; local seo cannabis~32~46.7; medical marijuana search engine marketing~21~54.0; local dispensary seo~20~38.8; cannabis dispensary local seo~16~45.4; medical marijuana search engine optimization~16~55.2; cannabis search engine optimization~15~65.7; local seo for cannabis~11~41.9
- Semrush US (keyword~volume~KD): cannabis seo~1900~14; dispensary seo~880~27; cannabis seo agency~720~38; marijuana seo~720~23; seo for dispensaries~210~19
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/ai-seo-services, /services/cannabis-marketing-agency, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/local-seo-for-small-business, /services/web-design
- Non-home-service niche (owner, 25 Oct): link `/services/local-seo-for-small-business` where the live page linked `/services/local-seo-for-home-services`.
- Marketing draft for this niche (compare against it): `/services/cannabis-marketing-agency-2`
- Note: Ad-restricted vertical: never promise Google Ads, Meta ads or SMS for THC; don't link Google Ads from this page. Organic/Maps/directory-menu SEO only. Keep live links (ai-seo-services, local-seo-for-small-business, cannabis-marketing-agency).

### seo-services-for-car-towing

- Live: `/services/industry/seo-services-for-car-towing` → draft `/services/industry/seo-services-for-car-towing-2`
- Live title: Towing SEO Company | SEO for Roadside Assistance & Towing  |  live H1: ['Local SEO for Towing and Roadside Assistance That Wins More Calls']
- Hero UI kind: **phone**
- Search Console (90 days, query~impressions~position): seo for towing~527~17.3; towing seo~401~19.3; seo for roadside assistance~240~7.4; towing company seo~234~22.1; local seo for towing~192~15.9; seo for car towing companies~169~6.5; seo for towing companies~132~16.9; seo for towing services~127~17.9; seo for towing service~70~13.9; local seo for towing companies~22~18.0
- Semrush US (keyword~volume~KD): towing seo~140~5; towing company seo~40~2; seo for towing companies~20~; roadside assistance seo~10~
- Live content links to keep: /about, /local-seo-google-business-optimization, /services, /services/gbp-reinstatement-service, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services, /services/towing-company-website-design, /services/towing-marketing-agency, /services/web-design
- Marketing draft for this niche (compare against it): `/services/towing-marketing-agency-2`

