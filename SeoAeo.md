# Zonic Media — SEO & AEO Overhaul (August 5, 2026)

Complete record of the site-wide SEO + AEO pass: Semrush data, audits, changes shipped, and the growth strategy behind them. US market focus.

---

## 1. Baseline (Semrush, US database, Aug 2026)

| Metric | Value |
|---|---|
| Semrush Rank | 3,711,016 |
| Organic keywords (top 100) | 652 |
| Est. monthly organic traffic | ~103 |
| Paid keywords | 1 |
| Semrush AEO / AI visibility | 29% (user-reported) — target 80% |

**Strongest current rankings** (position / volume):

| Keyword | Pos | Vol | URL |
|---|---|---|---|
| sem agency philadelphia | 3 | 110 | /services/philadelphia/sem |
| seo for car towing companies in las vegas | 2 | 170 | /services/industry/seo-services-for-car-towing |
| ppc marketing philadelphia | 4 | 170 | /services/philadelphia/ppc |
| best local seo agency near me with reviews | 4 | 170 | /services/philadelphia/local-seo |
| digital marketing delaware | 5 | 140 | /services/delaware/digital-marketing |
| best local seo company philadelphia | 7 | 260 | /services/philadelphia/local-seo |
| realtor seo company | 8 | 170 | /services/industry/real-estate-seo-services |
| seo for roadside assistance | 8 | 210 | /services/industry/seo-services-for-car-towing |
| chiropractor seo company | 11 | 720 | /services/industry/chiropractor-local-seo-services |
| seo philadelphia | 11 | 1,000 | /services/philadelphia/local-seo |
| philadelphia seo company | 15 | 1,300 | /services/philadelphia/local-seo |

**Top organic competitors (US):** greenlanemarketing.com (39 shared keywords, ~4.2K traffic), aesthetics-digital.com, chirobasix.com (chiro niche, ~1.1K), brandcenterusa.com, elysiummg.com, syndicate.marketing, delawaredigital.net. Priority named competitor for the GMB-reinstatement cluster: **gmbgorilla.com**.

## 2. Keyword opportunities (Semrush volume / KD, US)

### GBP / GMB cluster (flagship — highest priority)
| Keyword | Vol | KD | Notes |
|---|---|---|---|
| google business profile verification | 1,900 | 42 | verification hub + 2026 landing page |
| gmb optimization service | 590 | 1 | near-zero difficulty |
| google business profile suspended | 390 | 18 | very winnable, high intent |
| google business profile optimization service | 390 | 31 | |
| google business profile reinstatement | 140 | 34 | |
| gbp reinstatement | 110 | 7 | easy win |
| google business profile reinstatement request | 90 | 30 | |
| google business profile appeal tool rejection | 90 | 37 | escalation landing page intent |
| google business profile suspended for deceptive content | 70 | 2 | trivially easy; blog post exists |
| companies that help with google business reinstatement services | 70 | 14 | exact service intent |

Top questions (People-Also-Ask fodder, now reflected in FAQs/llms files): "why was my google business profile suspended", "how to fix suspended google business profile", "how to appeal suspended google business profile", "how to reinstate suspended google business profile 2026", "who can help reinstate a suspended google business profile".

### Head terms (hub pages)
local seo services 27,100/KD43 · local seo company 18,100/KD45 · local seo agency 14,800/KD46 · white label local seo 3,600/KD24 (big opportunity) · dental seo company 3,600/KD31 · google ads management services 2,400/KD22 · home services marketing agency 1,900/KD32

### Per-industry money keywords
| Family | Keyword | Vol | KD |
|---|---|---|---|
| Marketing agency | hvac marketing agency | 2,400 | 33 |
| | roofing marketing agency | 1,000 | 23 |
| | pest control marketing agency | 1,000 | 40 |
| | plumbing marketing agency | 720 | 52 |
| | landscaping marketing agency | 720 | 39 |
| | electrician marketing agency | 590 | 7 ← easy |
| | general contractor marketing | 590 | 17 |
| | tree service marketing | 590 | 28 |
| | solar marketing agency | 480 | 16 |
| | chiropractic marketing agency | 480 | 14 |
| | non profit marketing agency | 390 | 25 |
| | appliance repair marketing | 320 | 12 |
| | towing marketing | 590 | 42 |
| Website design | dental website design | 2,400 | 23 |
| | law firm website design | 4,400 | 30 |
| | real estate website design | 1,900 | 31 |
| | hvac website design | 1,300 | 26 |
| | roofing website design | 880 | 16 |
| | general contractor website design | 720 | 20 |
| | plumbing website design | 590 | 14 |
| | electrician website design | 480 | 7 ← easy |
| | landscaping website design | 480 | 16 |
| | chiropractor website design | 260 | 13 |
| | pest control website design | 260 | 12 |
| | tree service website design | 210 | 4 ← easy |
| | appliance repair website design | 110 | 6 ← easy |

## 3. Technical SEO — audited & fixed

**Route ↔ sitemap reconciliation:** 128 indexable URLs in the filesystem, 128 in the sitemap — zero missing, zero phantom. Blog posts appended dynamically.

**Fixed this pass:**
1. **Sitemap `<lastmod>`** — every static URL now carries a real last-modified date derived from git history (`scripts/generate-sitemap-lastmod.mjs` → `src/data/sitemapLastmod.generated.json`, consumed by `src/app/sitemap.ts`). Blog entries use the CMS `updatedAt`. Re-run the script after content edits.
2. **7 pages had broken internal links** to non-existent routes (`/services/local-seo-for-{landscaping,pool-service,tree-service,solar,appliance-repair,garage-door,gutter}-companies…`) — all re-pointed to the real `/services/industry/local-seo-for-…` routes.
3. **robots.ts** — added `/api/` to disallow list. AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) remain explicitly welcomed.
4. **Canonicals** — verified 100% coverage on all real pages (relative canonicals resolved via `metadataBase`); redirect stubs correctly excluded. Non-www→www 301 enforced in next.config.
5. **Redirects** — all 60+ legacy redirect rules verified to resolve to live routes; no chains into 404s. Old `/home-inspector-marketing-agency/*` URLs still ranking in Google correctly 301 to `/services/home-inspector-marketing/*`.
6. **Blog post meta descriptions** (CMS-driven, previously unbounded) now clamped to 160 chars at a word boundary in `blog/[slug]/generateMetadata`.

## 4. AEO program (29% → 80% plan)

**Shipped this pass:**
- `public/llms.txt` — expanded from ~45 to full coverage: all 25 website-design pages, all 31 marketing-agency pages, all 26 industry local-SEO pages, GBP landing pages, locations. LLMs discovering the site now see the complete service graph.
- `public/llms-full.txt` — now generated from llms.txt + the 6 deep-dive files via `scripts/build-llms-full.mjs` (run it after editing either).
- `public/llms/gmb-reinstatement.md` — added 5 new Q&As matching the exact questions users ask AI assistants (why suspended / how to fix / deceptive content / appeal rejected / who can help).
- **Rating consistency**: all schema + llms files now state the same verifiable rating (5.0 on Clutch, 21 reviews). Previously three different figures (4.9/127, 4.9, 5.0/21) — inconsistency LLMs and Google both notice.
- **Site-wide JSON-LD**: added `WebSite` schema; added `aggregateRating` to the LocalBusiness/ProfessionalService node (valid placement — NEVER on `Service`, which GSC flags).
- **New `buildServiceJsonLd()` helper** in `src/shared/seoSchemas.ts` for pages missing a Service entity.
- `Blog` schema on /blog, `ContactPage` schema on /contact-us.

**Why this raises AI visibility:** LLMs cite sources that (a) answer the literal question in the first sentence, (b) carry consistent entity data (name/address/rating everywhere identical), (c) expose machine-readable service maps (llms.txt, JSON-LD), (d) are crawlable by AI bots (robots.ts allows all major AI crawlers). All four are now materially stronger.

## 5. Interlinking program

Spec: `.claude/interlinking-spec.md` (updated: **minimum 8, max 10 contextual in-body links per page**, one link per target, 2–6-word keyword anchors, hub-and-spoke pairings, visible styled links — accent color + underline, scoped CSS, with contrast overrides on dark sections so links never camouflage).

Verifier: `node scripts/audit-internal-links.mjs` (updated to the ≥8 standard; also validates targets exist as routes, no self-links, no duplicate targets, anchor length, CSS class present).

**Results shipped (verified by the audit script — zero issues):**
- **94 link sources audited, 778 contextual in-body links site-wide. Every audited page now carries 8–10 unique-target links** (the local-SEO hub keeps its 30-link designed directory).
- Industry SEO cluster: all 26 pages went 3 → 8 links (marketing-agency twin, website-design twin, GBP verification, local SEO hub, Google Ads — anchors rotated per page).
- Website-design cluster: all 26 pages de-duplicated and brought to 8 unique targets; `/services/gmb-reinstatement-help` now linked from every one.
- Marketing-agency cluster: all 26 (13 pageData.ts + 13 generated JSON) at 8; hidden template-injected links accounted for; FAQ links kept in sync with pre-baked FAQ schema.
- State pages & hubs: all 22 at 8+ (shared StatePage components upgrade all sibling states at once).
- Philadelphia/Delaware: 2–5 → 8 each, cross-linked as a local cluster.
- Core pages (home, about, industries, services, GMB pages, web-design, google-ads, white-label, launchpad, septic/solar, travel, GBP-for-realtors): all at 8+; homepage duplicate targets re-pointed.
- 3 GBP landing pages: already at 8–10 via `lp-link`; duplicates removed; audit script now counts `lp-link` so they stay tracked.
- **Link visibility:** all links use scoped accent-color + underline classes; added dark-band contrast overrides in `electricalWeb.css`, `pestControlWeb.css`, `plumbingWeb.css`, `roofingWeb.css`, and the marketing-agency navy band (`industryMarketingPages.css`) so links never blend into their background.
- 5 dead legacy components (Chiro/Commercial/Law/Residential/CarTow `*Page.tsx`) excluded from the audit — they are unrendered code.

## 6. On-page metadata fixes

Audit found: 59 pages with descriptions >170 chars (worst 233), 8 pages with rendered titles >65 chars (worst 81 — the `%s | Zonic Media` template adds +14 silently), 2 pages with visible FAQs but no FAQPage schema, 26 pages lacking a Service entity.

**Results shipped:**
- **~60 meta descriptions rewritten to 135–162 chars** (SERP-safe), each keeping its primary keyword up front and ending in a CTA: 18 industry-SEO pages, 15 state pages, 9 generated-JSON agency pages, 5 Philadelphia/Delaware pages, 6 website-design pages, homepage, and 7 core service pages (gmb-verification-help, gmb-reinstatement-help, white-label, non-profit, GBP-for-realtors, blog, contact).
- **8 over-length titles fixed** (all now render 52–63 chars): gmb-verification-help 81→56, non-profit 73→62, Philadelphia digital-marketing/local-seo/sem 70→61-63, Delaware 69→62, industries 69→57, commercial-cleaning-website-design 68→63. Ranking keywords preserved (e.g. "Philadelphia SEO Company | Local SEO & Map Pack").
- **FAQPage schema added** to /services/google-ads and /services/web-design — generated from the visible FAQ arrays so copy and schema can never drift.
- **Service schema added** to all 21 state pages + 3 trade hubs, local-seo-for-home-services, launchpad, white-label-services, non-profit-marketing-agency, and GBP-services-for-real-estate-agents (via the new `buildServiceJsonLd`; no aggregateRating on Service, ever).
- **Alt text:** verified — every `<img>`/`<Image>` site-wide already has an alt attribute (0 missing).
- OG images: verified — no page ships without an og:image (own block or site default).
- **Production build verified:** `next build` compiles clean, all 146 routes generate, sitemap.xml renders with lastmod dates.

## 7. Ongoing playbook (do monthly)

1. `node scripts/generate-sitemap-lastmod.mjs` after every content edit; commit the JSON.
2. `node scripts/audit-internal-links.mjs` — keep at zero issues; new pages must ship with 8+ in-body links.
3. `node scripts/build-llms-full.mjs` after editing llms.txt or any deep-dive; add every new page to llms.txt the day it ships.
4. New blog posts: target one question cluster from §2 each (start: "google business profile suspended for deceptive content" KD2, "gbp reinstatement" KD7, "how to reinstate suspended google business profile 2026").
5. Watch cannibalization: the 3 root GBP landing pages own escalation / 2026-rules / Map-Pack intents — never the service hubs' head terms (asymmetric child→hub anchors).
6. Philadelphia cluster is the traffic engine today — refresh those pages quarterly with new proof points.
7. Backlinks remain the gap vs greenlanemarketing.com — pitch Clutch/UpCity/local Philly + Delaware directories, HARO/Connectively quotes on GBP suspensions.
