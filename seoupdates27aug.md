# Zonic Media — SEO Action Plan Implementation Log (Aug 27, 2026)

Full record of implementing the SEO expert's four workbooks on zonicllc.com:
what the sheets said, every change made in code, the two design rebuilds of the
new pages, verification, and what remains user-owned.

---

## 1. Sources

Four workbooks delivered by the SEO expert (in `~/Downloads/zonic-seo/`):

| File | Contents |
|---|---|
| `Zonic_Master_Action_Plan.xlsx` | 25 sequenced actions with owners/effort/acceptance criteria; ready-to-paste title+meta copy; schema spec; keyword targets; measurement plan |
| `Zonic_Keyword_to_URL_Mapping.xlsx` | 587 deduped keywords → 448 mapped to 14 live URLs with P1/P2/P3 placement rules; 139 excluded; 8 content gaps |
| `Zonic_Sitemap_and_Competitor_Audit.xlsx` | Cannibalisation pairs, 23-vertical triplet matrix, geo coverage holes, competitor page patterns, directory plays, sitemap hygiene |
| `Competitor Analysis for top Queries.xlsx` | Top-10 SERP breakdowns for 17 queries, 1,109 keyword rows (raw evidence) |

Core diagnosis from the sheets: **ranking problem, not snippet problem** — 82%
of 217,659 impressions sat at position 21+; 367 clicks in 3 months; 0.17%
sitewide CTR. US ranks ~30 while India ranks ~15 (country-filter warning on
every metric).

## 2. Redirects & cannibalisation (next.config.ts)

Three duplicate-page pairs merged — one URL survives, loser 301s, page dirs
deleted, internal links swept across **98 files**, sitemap cleaned:

| 301 source (deleted) | Destination (survivor) |
|---|---|
| `/services/gmb-optimization` | `/local-seo-google-business-optimization` (mapped target for 59 keywords) |
| `/gmb-reinstatement-service-agency` | `/services/gmb-reinstatement-help` |
| `/google-business-profile-verification-help-2026` | `/services/gmb-verification-help` (kills year-in-slug) |

Also:
- 3 reinstatement-timeline blog posts 301 into
  `/blog/how-long-does-google-business-profile-reinstatement-take-in-2026`
  (`how-long-gbp-reinstatement-takes`, `what-happens-after-you-submit-a-gbp-reinstatement-request`,
  `after-gbp-reinstatement-request`)
- `/company` → `/about` (was → /services; sheet action 21 — page ranked pos 4.7)
- Pre-existing redirects re-pointed to avoid chains (`/service/google-my-business`,
  `/blog/category/google-my-business` now go straight to the root GBP URL)
- ServicesDirectory deduped (old landing-page entries collapsed)

## 3. Title + meta rewrites (Tab 3, all 12 applied)

Static pages (edited in place, `absolute` titles matching sheet char counts):

| Page | New title |
|---|---|
| `/services/local-seo-for-home-services` | Local SEO for Home Service Pros — Rank in the Map Pack |
| `/services/gmb-verification-help` | GMB Verification Help — Video & Instant Verification Fixes |
| `/` | GMB Suspension & Local SEO Experts \| Zonic Media |
| `/services` | SEO Services for Local Businesses \| Zonic Media |
| `/about` | About Zonic Media — GBP Reinstatement Specialists |

Blog posts (7): copy lives in MongoDB, so overrides live in
**`src/shared/blogSeoOverrides.ts`** and take precedence over CMS
metaTitle/metaDescription in `blog/[slug]/generateMetadata`. Remove an entry
once the same copy is saved in the CMS. Covered slugs: deceptive-content,
soft-vs-hard-suspension, virtual-office-address, keyword-stuffing-business-name,
suspends-without-warning, suspended-after-edit, reinstatement-timeline.

`/services/launchpad` was **not** rewritten — the sheet flags it "needs a
decision before rewriting".

## 4. Schema

- `openingHoursSpecification` (Mon–Fri 9–5) added to the sitewide
  ProfessionalService node in `src/app/layout.tsx` (Organization + LocalBusiness
  + sameAs already existed from the Aug 19 session)
- ProfessionalService node added to the 5 geo pages (Delaware DM, Philly ×4)
  via `buildLocalBusinessJsonLd` (builder extended to accept `City` areaServed)
- BreadcrumbList added to `IndustryMarketingPage.tsx` template → covers ~25
  marketing-agency pages that lacked it (static wrappers + dynamic slugs)
- FAQPage / Service / Breadcrumb ship on every new page (below)

## 5. New pages (8) — and their two design rebuilds

Built three times as feedback arrived; final state:

**Geo pages — `src/app/components/PhlLocationLanding.tsx`** (the
`philaLanding.css` `.phl-page` location-page system, itself a port of the
approved Delaware layout). Full landing structure: hero + badges + floats +
stats, collage opportunity section, 6 service cards, blue band + visibility
console, bento process, results, showcase, 3-col comparison + scorecard,
why + audit-ring banner, Clutch reviews, marquee, 6-node orbit engine, FAQs,
grow cards, lead form. Photo slots are `.phl-ph` shimmer skeletons captioned
with what belongs there (drop in real photos later).

| Page | Primary target |
|---|---|
| `/services/delaware/seo` | seo company delaware (590/mo) — the #1 content gap |
| `/services/wilmington/digital-marketing` | wilmington marketing agency / seo company wilmington delaware |
| `/services/delaware/web-design` | custom website design new castle county cluster |
| `/services/nyc/local-seo` | NYC silo child (mirrors Philadelphia template) |
| `/services/nyc/digital-marketing` | NYC silo hub |

**Service pages — `src/app/components/TseoLanding.tsx`** (the
`templateSeo.css` `.tseo-page` niche-page system behind the HVAC / roofing /
plumber industry pages). Includes every template mockup: before/after
performance dashboard, GBP profile card, map-pack search mockup, bento
process, rank tracker + review-growth cards, US coverage map, audit ring.

| Page | Primary target |
|---|---|
| `/services/seo-services` | seo services (60,500/mo) + near-me cluster |
| `/services/local-seo-for-small-business` | local seo services for small business (2,400/mo) |
| `/services/local-seo-packages` | local seo packages (4,400/mo) — has a pricing-tier section: Starter $750 / Growth $1,350 / Dominate $2,000 "starting at" (team-drafted numbers from the commented-out pricing block) |

All 8: metadata + Breadcrumb + Service (OfferCatalog) + ProfessionalService +
FAQPage schema, 6–9 FAQs each, internal links per the mapping workbook, leads
via `ServiceLeadForm` with whitelisted service types. Added to sitemap,
mega-nav (desktop Locations cards + tags, NYC card added), mobile accordion,
footer, and ServicesDirectory. `HomeSeoMarquee` now accepts an `items` prop.

## 6. On-page keyword deployment (Tab 5, the 14 mapped pages)

- **`/services/philadelphia/local-seo`** retitled **"Philadelphia SEO Company"**
  — title, eyebrow, H1, opening copy, breadcrumb, keywords led by the generic
  Philly head terms; "SEO firm" H2 variant; parent hub
  `/services/philadelphia/digital-marketing` re-anchored to link down to it
- **`/local-seo-google-business-optimization`** — title/lede lead with
  "local seo services" (27,100/mo) + P1 cluster in keywords; pricing section
  links to `/services/local-seo-packages` (catches packages/affordable intent)
- **`/services/delaware/digital-marketing`** — quick-win H2 section combining
  SEO + web design + Delaware (audit #1: page ranked #11, one slot off page 1);
  opening re-pointed at the new Delaware SEO page; "marketing agency in
  Delaware" phrasing in copy
- **Real estate** — title/H1 now "Real Estate SEO Experts…", H2s cover
  services/realtors/commercial variants
- **Chiropractor** — H1 "Chiropractor SEO That Books Patients", eyebrow
  "Chiropractor SEO Company", H2s cover chiropractic SEO services/experts
- **Homepage** — near-me cluster woven into hero sub; **/services hub** H1 now
  "SEO Services That Turn Local Searches into Booked Jobs"
- **`/services/philadelphia/sem`** title → "Philadelphia Search Marketing — SEM
  Agency"; **web-design** got a visible Delaware section (wd-band) linking the
  new Delaware pages; keywords added to google-ads & chiropractor-website-design

## 7. Content & CRO

- **`BlogMidArticleCta`** — reinstatement-service CTA rendered after the first
  section of every blog post (`splitAfterFirstSection` in
  `src/shared/blogContent.ts`; styles in BlogPage.css)
- **`StickyCallBar`** — mobile-only fixed click-to-call bar on all `/services/*`
  routes + the root GBP page, firing a GA4 `click_to_call` event; mounted in
  `(main)/layout.tsx`
- **Roundup article draft** (action 24) ready to paste at
  **`content-drafts/top-seo-companies-in-delaware.md`** (suggested slug, meta,
  FAQ block included — publish via blog admin)

## 8. Verification

- `tsc --noEmit` clean; `next build` passes — **152/152 pages**
- Built HTML spot-checked: titles, FAQPage/Breadcrumb/ProfessionalService/
  Service nodes, canonical, design-system classes (`phl-*`, `tseo-*`),
  sticky call bar, retired routes absent, sitemap entries correct
- `scripts/generate-sitemap-lastmod.mjs` re-run (134 routes) — run again after
  committing so the new pages pick up real lastmod dates

## 9. Still owned by the user (cannot be done from code)

1. **Review + `git commit` + `git push`** (all changes uncommitted), then re-run
   the lastmod script.
2. **GSC indexing check first** (action 1): count indexed vs not of the sitemap
   URLs; if >20% unindexed, pause keyword work.
3. **GSC country-filter re-analysis** — the US-vs-India decision gates budget.
4. **Confirm the reinstatement canonical by GSC impressions** — code followed
   the sheet (`/services/gmb-reinstatement-help` wins); flip the 301 if data
   disagrees.
5. **`/services/launchpad` decision** — keyword target or noindex.
6. **Publish the roundup draft** via the blog admin.
7. **Directories**: DesignRush (free) + Semrush Agency Partners (paid) +
   janbask roundup outreach.
8. **23-vertical triplet audit** in GSC (action 22) before any consolidation.
9. **Geo-page photos** — replace the `.phl-ph` shimmer skeletons on the 5 new
   geo pages with real imagery (captions say what belongs where).
10. Blog meta overrides: paste the Tab-3 copy into the CMS at leisure, then
    delete the corresponding entries from `blogSeoOverrides.ts`.

## 10. Measurement plan (from Tab 6)

Baseline GSC export before deploy → week 3 indexing recheck → week 4 rich-result
types in Search Appearance → week 6 CTR check on the 5 rewritten pages only
(target 0.5% → 2–4%) → week 8 position check on the 14 mapped pages (country
filter) → week 12 full re-run. Headline metric: push the 82%-at-position-21+
share below 70%.
