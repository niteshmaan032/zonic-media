# Fence contractor pages + home inspector expansion — build brief (5 Nov 2026)

Owner request (5 Nov 2026), in short:
- Build three new pages for **fence contractors**: marketing agency, local SEO, website design. Use the new layouts.
- Do deep keyword research and write content to rank organically in the USA.
- No keyword cannibalization. Add new UI components.
- Content must be relevant and target the most-searched topics, including **AEO and GEO** (ranking in AI answers). Those sections are a must.
- Add **10 new home inspector states**: Connecticut, Iowa, Kansas, Mississippi, Idaho, New Mexico, Nebraska, New Hampshire, Maine, Delaware.
  - Every state page has different content and a different palette. Add the states to the main inspector page.
  - Add a section on the **types of inspection work**: realtor-referred work vs homeowners booking direct.

These pages go **live at their final URLs**: no `-2` drafts, no noindex. The route helpers already output canonical, OG and schema.

## Research (already collected; read these first)

- `reports/research/fence-keywords-2026-11.md`:
  - Semrush volumes and KD for every fence agency-side and customer-side term;
  - Search Console notes.
- `reports/research/home-inspector-states-2026-11.md`:
  - state relevance check and inspection-type volumes;
  - Search Console queries the home inspector pages already earn.

Semrush API units are out. Do **not** call Semrush. Your mandatory extra research is WebSearch/WebFetch, as described in the existing briefs:
- top results;
- People-also-ask style questions;
- per-state licensing and regional specifics.

Never copy competitor wording.

## Templates, formats and rules (unchanged; follow them)

| Page | Template | Rules doc | Format examples (never reuse their wording) |
|---|---|---|---|
| Fence marketing agency | `src/components/rd/industry/IndustryTemplate.tsx`, type `IndustryContent` | `docs/industry-redesign-brief.md` | `content/roofing-marketing-agency.ts`, `content/landscaping-marketing-agency.ts` |
| Fence local SEO | `src/components/rd/localseo/LocalSeoTemplate.tsx`, type `LocalSeoContent` | `docs/local-seo-redesign-brief.md` (incl. Round 2) | `localseo/content/local-seo-for-roofing-companies.ts` |
| Fence website design | `src/components/rd/nichewd/NicheWebTemplate.tsx`, type `NicheWebContent` | `docs/niche-webdesign-brief.md` | `nichewd/content/landscaping-website-design.ts`, `window-and-door-website-design.ts` (photo look) |
| Home inspector states | `src/components/rd/industry/LocationTemplate.tsx`, type `LocationContent` | `docs/industry-redesign-brief.md` | `content/home-inspector-marketing/utah.ts`, `ohio.ts` |

Owner rules that bite most often:
- Fresh wording only, and every H1/H2/H3 must be unique sitewide.
- No prices, budgets, CPCs or Semrush figures anywhere, including example UIs. The exceptions are the plan prices in the pricing/FAQ/audit points as the briefs allow, and the website price below.
- Never name another company: no lead sites, directories by name or competitors. "Shared lead sites" is fine.
- Verified numbers only: 1,500+ GBPs optimized, 900+ reinstated, 5.0 Google rating, 20+ industries, 0% ad-spend markup.
- Example UIs use "Your Company" or "Your Fence Co.", plain first names and no real addresses.
- Short, keyword-led copy. Location pages have **no images**.

## New in this round (shared code is done; only write data)

### Fence growth UIs (industry template `growth.rows[].ui`)

Types are in `src/components/rd/industry/types.ts`; the UI is in `fenceUi.tsx`.
- `{ kind: "fenceLine", title, yard, specs: [[label,value]×4], toast, toastNote }`: an aerial yard view. A fence line draws itself around the backyard and the gates pop in. It stands for an online estimate.
- `{ kind: "fenceRank", title, rows: [[search, material chip, result]×4], note }`: one customer search per fence material, each with a result such as "Map Pack #1" or "Top 3".
- `{ kind: "quotePipeline", title, stages: [4 names], cards: [{name, job, stage 0–3}] (5–7 cards), note }`: estimate requests moving from new to won.

### AEO + GEO section (`aiSearch?: AiSearchCopy`)

Available on IndustryContent, LocalSeoContent and NicheWebContent. Renders `src/components/rd/industry/AiSearchSection.tsx`.

| Field | Content |
|---|---|
| `title` | Unique H2 |
| `lead` | Rich, 30–45 words |
| `prompt` | The customer's question to an AI assistant |
| `answer` | Clause before "Your Company", e.g. "For an aluminum pool fence near you," |
| `reasons` | 3 reasons, 3–7 words each |
| `tactics` | 4 cards `{tag: "AEO" \| "GEO", icon, title, text 18–28 words}`, two of each tag |
| `cta` | Call-to-action label |

- AEO = answer engine optimization: being the quoted answer. Examples: answer-first FAQ blocks, FAQ/Service schema, short definitions, cost and process explainers in plain words.
- GEO = generative engine optimization: being the recommended business. Examples: consistent business facts across the web, reviews that name the service and town, being cited on trusted local sources, fresh project pages, an entity-rich About page.

### Audience lanes (`audiences?: AudiencesCopy`)

Available on IndustryContent and LocationContent. Renders `AudienceLanes.tsx`. Two lanes:
- Lane 1 is **real estate agents**. They refer buyer inspections inside the contract window.
- Lane 2 is **homeowners who book direct**: buyers searching on their own, sellers wanting a pre-listing inspection, owners wanting a maintenance, 11-month warranty or new-construction phase inspection.

Each lane has these fields:

| Field | Content |
|---|---|
| `audience` | Lane name |
| `icon` | e.g. `agent`, `handshake`, `home`, `sold` |
| `pitch` | 20–30 words |
| `query` | Mini-UI line: an agent's request or the homeowner's search |
| `flow` | 4 steps of 2–4 words |
| `badge` | Result chip |
| `jobs` | 3 inspection types with the marketing tactic for each |

The section also has:
- `addOns: { title, items }`: 4–7 add-on tests both audiences buy. Make them **state-relevant**, e.g. radon (CT, IA, KS, NE, ID, ME, NH), wood-destroying insect/termite (MS, south), well and septic (rural ME, NH, ID, NM), lead paint and oil tanks (older New England stock), sewer scope, mold, stucco/EIFS.
- `title`, `lead` (Rich) and `cta`.

Agent-lane tactics must be compliant:
- **Never** suggest paying or rewarding agents for referrals (RESPA, and some states restrict agent referrals).
- Market *to* agents with:
  - fast online scheduling;
  - sample reports;
  - quick turnaround;
  - agent-friendly report summaries;
  - reviews from agents and buyers;
  - an agent page;
  - LinkedIn/email updates.
- If a state restricts agent referrals, say the plan focuses on the consumer side there.

Search Console shows the hub already earns impressions for "how seo helps home inspectors book more jobs with buyers, sellers, and agents" (71 at position 8.1). Buyers, sellers and agents is the language to use.

### Fence estimator widget (niche web design `stage.widget: "estimate"`)

The example homepage's hero form becomes a fence estimator:
- fence-type chips from `modes[i].book` (first = selected);
- an "Approx. length" slider;
- a gate picker;
- name and phone fields;
- the button from `stage.confirm`.

### Website pricing on web design pages (owner, 5 Nov 2026)

Web design pages no longer show the monthly plans. They show the one-time **$950 starting price** card (`WebsitePricing`): no monthly or yearly rental, no hosting charge, you keep domain and site ownership, one-time fee, specialized for home service businesses. There is also a custom-plan card.

On niche web design pages:
- `pricing.title` is the section H2. Write it as a website-pricing heading, e.g. "Fence Company Website Pricing, Paid Once".
- `pricing.customTitle` heads the custom-plan card, e.g. "Running Crews in Several Counties?".
- `compareTitle` and `addOnsTitle` are still required by the type but not shown. Keep them short and unique.

Cost FAQ answers on web design pages may now say builds start at $950, one-time. Industry and local SEO pages keep the monthly-plan PricingSection (4 headings only).

## Fence pages: URLs, keyword map, no cannibalization

| URL | Owns (title + H1 + H2s) | Must NOT target |
|---|---|---|
| `/services/fence-company-marketing-agency` | fence company marketing (260), fence contractor marketing (210), fence marketing (170), fence company advertising (90), fence company marketing agency, marketing for fence contractors, fencing/fence contractor leads (140/140), lead generation for fence contractors (110), fence company google ads / PPC (70/50) | "fence company SEO" in title/H1/H2s (link to the SEO page instead); "website design" in title/H1 |
| `/services/industry/fence-company-seo` | fence company seo (590, KD2), fence contractor seo (210), seo for fencing companies (140), fencing seo services (90), local seo for fence companies/installers (40/70), fence company seo agency (70), gmb seo for fence companies (40; GSC impressions), fence company Google Business Profile | "marketing agency" and "website design" as head terms |
| `/services/fence-company-website-design` | fence company website design, fence contractor website design (30), fence company websites (50), fencing websites (30), website for fence company | "fence company seo", "fence company marketing" as head terms |

- All three link to each other with keyword anchors. Also link to:
  - `/services/ai-seo-services`;
  - `/local-seo-google-business-optimization`;
  - `/services/google-ads` (marketing page);
  - `/services/gbp-reinstatement-service`;
  - `/services/web-design` (web design page);
  - `/services/landscaping-marketing-agency` where natural.
- Customer-side demand to reflect in sections, example UIs and FAQs (no figures on the page):
  - "near me" Map Pack searches;
  - material searches: vinyl, chain link, wood/cedar privacy, aluminum/ornamental, pool, farm/ranch, commercial/security;
  - repair (huge);
  - gates and automatic gate openers;
  - quote, estimate, cost-calculator and financing intent;
  - permits, HOA approval and property lines/surveys (common homeowner questions).
- Palettes and tones (already registered):
  - marketing page: `PALETTES.woodGreen`;
  - local SEO: `localseo/tones.ts` key `fence-company-seo`;
  - web design: `nichewd/tones.ts` key `fence-company-website-design`.
- Icons: `fence`, `gate`, `ruler`, `deck`, `farm`, plus the existing set (`pool`, `pets`, `shield`, `home`, `building`, `repair`, `storm`, `wrench`…).
- Lead form `formType`: `fence-company-marketing`, `fence-company-seo`, `fence-company-website-design`.
- Nav, sitemap, Related Services, the industries hub and tones are **already registered**. Don't edit shared files.

## Home inspector states: assignments

| State | Slug | Palette |
|---|---|---|
| Connecticut | connecticut | skyFuchsia |
| Delaware | delaware | violetLime |
| Idaho | idaho | emeraldViolet |
| Iowa | iowa | greenRose |
| Kansas | kansas | tealViolet |
| Maine | maine | emeraldSky |
| Mississippi | mississippi | blueFuchsia |
| Nebraska | nebraska | slateOrange |
| New Hampshire | new-hampshire | slateRose |
| New Mexico | new-mexico | cyanRed |

- Content goes in `src/components/rd/industry/content/home-inspector-marketing/<slug>.ts` (`CONTENT: LocationContent`):
  - `draftSlug: "<slug>"`;
  - `liveUrl: "/services/home-inspector-marketing/<slug>"`.
- Route goes in `src/app/(main)/services/home-inspector-marketing/<slug>/page.tsx` (same as `utah/page.tsx`).
- Siblings and sitemap are already registered.
- Verify each state's regulator and licensing status by web search. Several of these states do not license inspectors, or changed rules recently. Never guess; if unclear, say "check your state's current rules".
- Every new state page **must** include `audiences`. Its AEO/GEO coverage comes from an `ai` growth row; location pages have no `aiSearch` field.
- Sections: hero (tiles only), services, growth (include `maps` + `ai` rows), audiences, regions (real metros/cities), reviews, pricing headings, FAQ (6–7), audit, banner.
- Title pattern keeps "Home Inspector Marketing" + the state, like the existing 31.

## Validation (must pass before you report)

1. `npx prettier --write <your files>`; `npx eslint <your files>` clean; `npx tsc --noEmit -p .` clean (run once near the end).
2. `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000<url>` returns 200.
3. H1 fit:
   - main and niche pages: `node /private/tmp/claude-501/-Users-niteshmaan-Desktop-zonic-media/5687465f-480a-41cb-8a01-b13eac3299b9/scratchpad/h1lines.mjs <url> "#ind-h1"`, or `#seo-h1` (local SEO and web design) or `#loc-h1` (states);
   - must print OK (≤3 lines at 1200–1600).
4. Duplicates: `python3 /private/tmp/claude-501/-Users-niteshmaan-Desktop-zonic-media/5687465f-480a-41cb-8a01-b13eac3299b9/scratchpad/dupcheck.py <your url> <comparison urls…>`. Every comparison must print OK. Compare against:
   - each page in your batch;
   - the closest live siblings: same template, 3–4 pages; for states, at least 4 existing state pages plus `/services/home-inspector-marketing`;
   - for fence, the other two fence pages once they exist.
5. Don't run git, don't delete files, and touch only the files you were assigned. Other agents are working in parallel. Keep dev-server load light.

## Report back (short)

- Per page:
  - URL, title, H1;
  - 5–8 target keywords with volumes;
  - links added;
  - word count;
  - dupcheck and h1lines result.
- Anything you could not do or verify (e.g. a licensing fact).
