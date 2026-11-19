# Florida service pages — build brief (18 Nov 2026)

## Background

The owner approved the Florida plan (https://claude.ai/artifact/AES7o7UFzy8bMQNW587U6G). The hub is live in dev: `/services/florida/digital-marketing`.

Three more Florida service pages are now being built, in parallel, one agent per page:

| Page | URL | `kind` | UI file you own |
|---|---|---|---|
| Florida Local SEO | `/services/florida/local-seo` | `fl-seo` | `src/components/rd/delaware/flSeoUi.tsx` |
| Florida PPC / SEM | `/services/florida/ppc` | `fl-ppc` | `src/components/rd/delaware/flPpcUi.tsx` |
| Florida Web Design | `/services/florida/web-design` | `fl-web` | `src/components/rd/delaware/flWebUi.tsx` |

These pages go **live at their final URL**: indexable, with a self canonical. They are not drafts.

## Design: the same as the other location pages

- Use the location template `src/components/rd/delaware/DelawareLanding.tsx`, as the Florida, Philadelphia, NYC and Delaware pages do.
- Write **new content, new UI components and your own colours**.
- **Your model for structure and format is the Florida hub**:
  - `src/app/(main)/services/florida/digital-marketing/page.tsx`: data object, extras, metadata, schema, FAQ JSON-LD;
  - `src/components/rd/delaware/flMarketingUi.tsx`: UI style, `uiBits` helpers, animations via `run()` / `inAt()` / `Flip`.
- Never reuse its wording, or that of any other page.

## UI contract

The shared template is already wired. Do **not** edit DelawareLanding, DelawareUi, types or any other shared file.

Your UI file currently holds placeholders. Replace them with real, page-specific components under these exact export names (`Xxx` = `Seo` / `Ppc` / `Web`):

| Export | Where it shows | Activated by |
|---|---|---|
| `FlXxxFeature1`, `FlXxxFeature2`, `FlXxxFeature3` | The three white "how we win" feature rows | `extras.features.items[i].ui` = `"fl-xxx-1"`, `"fl-xxx-2"`, `"fl-xxx-3"` |
| `FlXxxPhone()` | The journey phone | `extras.phone = "fl-xxx"` |
| `FlXxxDarkUi({ console })` | The dark band card | `extras.darkUi = "fl-xxx"` |
| `FlXxxScore({ rows })` | The compare scorecard | `extras.scoreStyle = "fl-xxx"` |
| `flXxxStepUis(process)` | The 4 tilted process-step cards (return 4 `<Slot>`s) | Picked automatically by `kind` |

- Each component must look different from the hub's and the other pages' versions.
- Each must be built for the service: local SEO shows Map Pack / citations / GBP / reviews; PPC shows campaigns, search terms, call ads, budgets by season; web design shows site builds, speed, mobile, forms, storm pages.
- Keep them decorative (`aria-hidden`). Use example labels only ("Your Company", first names). **No prices, CPCs, cost-per-lead or money figures**; positions, statuses and relative bars are fine.
- If you need extra CSS, put it in your own `flXxx.css`, imported by your UI file.
- Provide a reduced-motion rule for any new keyframes.

**Pillars** (hero bento colours `extras.pillars`):

| Page | a | b | c | d |
|---|---|---|---|---|
| SEO | #15803d | #fde68a | #cffafe | #0c4a6e |
| PPC | #c2410c | #e0f2fe | #fef9c3 | #312e81 |
| Web | #be185d | #ccfbf1 | #ffe4e6 | #134e4a |

## Keywords

Semrush US, 18 Nov 2026; full data in `reports/research/florida-keywords-2026-11.md`. Format: volume / KD.

**Local SEO page.** Title e.g. "Florida SEO Company | Local SEO Services in Florida"; H1 starts with "Florida SEO Company" or "Florida Local SEO".
- Head terms:
  - florida seo company 1,300 / KD 18
  - seo florida 720 / 10
  - seo company florida 720 / 25
  - seo agency florida 480 / 17
  - local seo florida 390 / 11
  - local seo services florida 320 / 28
  - florida local seo 260 / 18
- Regional terms for H2/H3/FAQ:
  - central florida seo 170 / 9
  - south florida seo 320 / 34
  - tampa bay seo 140 / 20
  - ai seo agency florida 50 / 0
- Search Console shows the site already earns "landscaper seo miami fl" (110 impressions at position 14). "seo miami" style wording is welcome in the body, but not in the title or H1.

**PPC page.** Title e.g. "PPC Agency Florida | Google Ads & SEM Management".
- Terms:
  - ppc agency florida 320 / 10
  - ppc management florida 70 / 5
  - search engine marketing florida 70 / 14
  - google ads agency florida 40 / 3
  - google ads management florida 40 / 0
  - sem agency florida 30
  - sem florida 20
- The owner chose `/ppc`, not `/sem`. Cover SEM fully in the copy, e.g. an H2 or FAQ "What is SEM…".

**Web design page.** Title e.g. "Florida Web Design Company | Website Design in Florida".
- Terms:
  - web design company florida 390 / 35
  - south florida web design 320 / 19
  - web design florida 880 / 52
  - website design florida 320 / 50
  - florida web design company 170 / 47
  - web designer florida 170 / 41
  - website design company florida 140 / 47
  - central florida web design 90 / 7
- **Pricing on this page is the one-time website price.** `extras.pricing.title` is the H2 of the $950 card, a unique website-pricing heading. `customTitle` heads the custom-plan card. Fill `compareTitle` and `addOnsTitle` too: required, but not shown.
- The cost FAQ may say builds start at $950 one-time, with no monthly hosting or rental fees, and the client owns the site.

**No cannibalization:**
- Never use "digital marketing agency" as a head term; the hub owns it.
- Don't target another Florida page's head term. Link to it with a keyword anchor instead.
- City names may appear in the body, never in the title or H1; the city pages will own those.

## Rules (owner)

- **Fresh wording only.**
  - No sentence may be shared with any other page. The checker flags 7-word runs.
  - Every H2/H3 must be unique sitewide: grep `src/` for each heading.
- **Florida-specific substance:**
  - regions (South Florida, Tampa Bay, Central, Southwest, North, Panhandle);
  - snowbird season (Oct–Apr) and hurricane season (Jun–Nov);
  - storm-related demand for trades;
  - AEO/GEO (AI answers).
  - Bilingual or Spanish work is **not confirmed**. Don't claim it. Saying searchers use English and Spanish is fine.
- **Facts and honesty:**
  - Verified numbers only: 1,500+ profiles optimized, 900+ reinstated, 5.0 Google rating, 20+ industries, 0% ad-spend markup.
  - Plan prices only as `$297, $950 or $1,500 a month` (Growth is $950 monthly / $750 annual), in the FAQ or pricing.
  - No invented results.
  - No Florida office: we serve Florida from Dover, Delaware. Never name another company.
- **Links:**
  - Link to the hub `/services/florida/digital-marketing` and the two sibling Florida pages (`/services/florida/local-seo`, `/services/florida/ppc`, `/services/florida/web-design`), all live by the end.
  - Link to the right core pages (`/local-seo-google-business-optimization`, `/services/google-ads`, `/services/web-design`, `/services/ai-seo-services`, `/services/gbp-reinstatement-service`) and to the existing Florida niche pages where natural (`/services/hvac-marketing-agency/florida`, `/services/plumbing-marketing-agency/florida`, `/services/home-inspector-marketing/florida`).
- **Photos:**
  - `extras.aboutPhoto` with `src: ""` shows a shimmer placeholder until the owner sends a photo.
  - The hub uses the owner's photo `/images/florida/florida-digital-marketing-agency.webp`. **Do not reuse it.** Leave a placeholder and tell me in your report.
- **Lead form:** `form.formType` is `florida-local-seo`, `florida-ppc` or `florida-web-design`.
- **Schema:**
  - BreadcrumbList Home > Services > Florida Digital Marketing (`/services/florida/digital-marketing`) > this page;
  - Service with `areaServed` State Florida;
  - FAQPage built from the FAQ array.
  - **Never add `aggregateRating`.**

## Validation (must pass)

1. `npx prettier --write` and `npx eslint` on your files; `npx tsc --noEmit -p .` once at the end.
2. `curl` returns 200 for your URL.
3. H1 fit: `node ~/.cache/zonic-qa/h1lines.mjs <url> "#de-h1"` must print OK.
4. Duplicates: `python3 ~/.cache/zonic-qa/dupcheck.py http://localhost:3000<your url> <compare…>`. Every comparison must print OK. Compare against:
   - the Florida hub;
   - the closest siblings:
     - SEO: `/services/philadelphia/local-seo`, `/services/nyc/local-seo`, `/services/delaware/seo`, `/services/dallas-fort-worth/local-seo-agency`;
     - PPC: `/services/philadelphia/ppc`, `/services/philadelphia/sem`, `/services/google-ads`;
     - Web: `/services/delaware/web-design`, `/services/nyc/web-design`, `/services/dallas-fort-worth/web-design-agency`, `/services/web-design`;
   - the other two Florida pages once they return 200.
5. Screenshots: `node ~/.cache/zonic-qa/fullshot.mjs <out.png> <url> 1440` and at `390`. Look at your UIs and fix anything clipped or broken. Check for sideways overflow with `node ~/.cache/zonic-qa/secshot.mjs` (it prints the overflow).
6. Only touch your UI file (and your optional CSS) and your page file `src/app/(main)/services/florida/<slug>/page.tsx`. No git, no deletes, no shared-file edits. I register the header, sitemap and hub links myself.

## Report back (short)

- URL, title, H1;
- target keywords with volumes;
- the UI components you built (one line each);
- links added;
- word count;
- dupcheck and h1lines results;
- anything not done.
