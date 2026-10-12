# Zonic Media organic growth plan (Oct 2026 → Apr 2027)

## Context

The user (owner of Zonic Media, zonicllc.com) asked for one honest, data-backed master plan to take the agency's own site "to the top on every service we offer", with everything we have done so far, what is wrong (including design/"AI-generated look"), what to do next, how to add pages in future, and a shareable URL. Decisions taken by the user on 6 Oct 2026:

- **Offer pages (21 free-website landers):** user asked "they are all indexed, so what now" → answer: `noindex` works on already-indexed pages; Google drops them at the next crawl (2–6 weeks). Keep them live for ads, remove from the sitemap.
- **Design scope:** trust fixes first (Nov), design system later (Dec–Jan). No full redesign.
- **Focus:** the complete site, by service line: Google Business Profile services (reinstatement, verification, optimization) first, then web design, then local SEO (cities + industries).
- **Capacity:** about 5 hours/week of off-site work from the Zonic team.

Everything below is read-only research + planning. No site change is made until the plan is approved; even then nothing textual changes on ranking pages before **28 Oct 2026** (text freeze while Google's September spam update finishes).

---

## 1. Where the site stands (data pulled 2–6 Oct 2026)

| Measure | Value | Source |
|---|---|---|
| Real organic visits / week | 67–101 (101 in week to 3 Oct, best in 2 months) | GA4, admin traffic excluded |
| US clicks / week | ≈13, flat since August | GSC |
| US impressions / week | 15,517 (+19% WoW) but position on shared keywords 26.5 → 31.2 | GSC |
| 90-day US totals | 306K impressions, 153 clicks, CTR 0.05%, position 30.1; 80% of impressions desktop (tool/scraper-heavy) | GSC |
| AI-feature impressions (US, 28 d) | 3,160 across 145 pages → explains "page-1 but zero clicks" | GSC Generative-AI report |
| Indexing | 219 indexed; "not indexed" 403 = 311 `_next/static` chunks + 40 404s + 29 redirects → **healthy** | GSC |
| Technical | Site Health 98%, 0 errors, 147 warnings (146 = low text/HTML ratio, accepted); AI Search Health 95%; CWV 75% pass; mobile PSI ≈82 | Semrush, PSI |
| Authority | AS 9; 106 referring domains after disavow, 15 with AS>20; 100 spam domains disavowed 2 Oct | Semrush |
| Semrush PT (108 kw, 30 Sep–6 Oct) | visibility 9.15% (−2.8), 10 up / 51 down; top-3: 8, top-10: 19 | Semrush |
| Organic competitors (Semrush) | delawaredigital.net, aesthetics-digital.com, greenlanemarketing.com, homeservicedirect.net, grownearby.com, kitchenremodelingseo.com, homeremodelerseo.com — small local/trade agencies, plus national AS 30–60 agencies on head terms | Semrush |
| Leads (90 d, thank-you sessions) | Paid: reinstatement 21, verification 8 · Referral (Clutch) 22 · Organic: home-services 13, home 6, Philly 2, verification 2 | GA4 |
| Referral/AI traffic (90 d) | clutch.co 132, chatgpt.com 105, techreviewer 27, perplexity 9, claude 6 | GA4 |
| Flagship reinstatement page | 18 US impressions / 28 d; URL renamed 15 Sep; never ranked; title + FAQ schema fixed 5 Oct (uncommitted) | GSC |

### What has been done (Aug–Oct 2026)
Speed (PSI 58→82, CWV 25→75%), bootstrap trim, deferred third-party tags; schema cleanup (self-serving ratings removed); titles/H1 passes (Sep 3); cannibalisation merges; 268 unused images + dead code removed; lead flow verified; GA4 admin pollution fixed + `lead_thank_you` key event; AI files (llms.txt, llms-full, pricing.md) refreshed; 100 toxic domains disavowed; six pages restored (30 Sep) after the 15 Sep rewrite mistake; 24 title/meta rewrites drafted + adversarially verified (ready for 28 Oct); reinstatement page title/FAQ schema (ready to deploy).

### Honest diagnosis (what is actually wrong)
1. **Authority, not pages.** AS 9 vs 30–60. Same-keyword positions slid 5 places during the spam update; untouched pages fell like edited ones. No on-page work changes this.
2. **~100 of 184 sitemap URLs are template clones** (25 industry local-SEO pages 81–93% shared text; 28 marketing-agency pages 72–82%; 26 website-design pages 77–85%; 21 offer landers 66% verbatim). Swap errors ("dental businesses… booked jobs", "a Arizona-specific"). This is the pattern in Google's scaled-content/doorway policies and it dilutes site quality signals. Home-inspector state pages (79–85% unique) are the good model.
3. **Contradictory claims** across files: Clutch 4.9 (74 files) vs 5.0 (33); 50+ vs 500+ vs 1,500+; "no long-term contracts" vs "six-month term" (landers); "$900" vs "$2,000" website price; "60–90 days" vs "3–6 months".
4. **Design reads as generated:** every photo AI-looking, no real team/office/client photos; mock dashboards with invented stats ("4.9 · 196 reviews", "+212%"); ~100/112 H1s with a coloured highlight span; ★/emoji tickers; 707 hex colours, 103 radii, three typefaces, six icon sets; marketing-agency pages use a different header than the rest of the site. Blog featured image renders as a large empty grey block on at least one post (verify).
5. **CTR:** page-1 impressions are mostly AI Overview citations (unclickable); page-2 (13,774 impr → 2 clicks) is fixable with the prepared titles.
6. **Reinstatement flagship invisible:** new URL, no history, competes with the site's own 36 suspension posts for informational terms (by design); needs 3–5 external links to the exact URL + time.
7. **Leads come from paid + Clutch**, not organic. Organic cannot carry leads this quarter.

---

## 2. Strategy in one paragraph

Stop adding pages; make the existing ones true, specific and trusted. Build authority off-site every week (5 h). Keep the service-line order GBP → Web design → Local SEO. Treat the blog as the informational funnel that hands readers to service pages. Measure on fixed dates and change only in batches so cause and effect stay readable.

---

## 3. Phased plan

### Phase 0 — now → 28 Oct 2026 (freeze; off-site only)
- No text edits on any page with impressions (entire site). Allowed: new blog posts, hidden-code fixes, off-site work.
- Deploy pending uncommitted work: reinstatement page title + FAQPage schema; AI files; analytics gating (already committed per git status).
- Weekly readings 13 & 20 Oct (positions per page, re-crawl of the 4 pending restored pages, spam-update status).
- Off-site (5 h/wk, see §5).
- User: Semrush Agency Partners + DesignRush profiles; Clutch service areas (Philadelphia, New York) and reinstatement service URL; first location blog (Delaware).

### Phase 1 — 28 Oct batch (one deploy, one indexing request per page)
1. 24 verified title/description rewrites (artifact "Zonic Title Rewrites"; data in session scratchpad `titles.json`).
2. **Facts registry**: new `src/shared/brandFacts.ts` (Clutch 5.0/21, Google 5.0/17, Trustpilot 9×5★, 900+ reinstated, 1,500+ optimized, timelines, plan prices, month-to-month) consumed by templates and pages; replace hard-coded 4.9/50+/500+/"six-month term"/"$900" (order: `template.ts` → `TseoLanding.tsx` → website-design pages → local-SEO pages → landers).
3. Offer landers: `robots: { index: false, follow: true }` in each lander's metadata (or in a shared `(landing)` layout), remove the 21 URLs from `src/app/sitemap.ts`, keep pages live for ads; verify with URL inspection after 2 weeks; watch paid conversion count in GA4/Ads for regression (none expected).
4. Merge/re-slug the two overlapping reinstatement posts (`/blog/after-gbp-reinstatement-request` vs `/blog/what-happens-after-you-submit-a-gbp-reinstatement-request`, whose title is "How to write a GBP reinstatement appeal") with a 308 in `next.config.ts` / `blogRedirects.json`.
5. Content additions (no rewrites): pricing table on `/services/local-seo-packages`, case figures + neighbourhood list on Philadelphia local SEO, realtor results block on real-estate SEO.
6. Related-services block on blog posts (topic → service map; real-estate and industry matches; city posts as they appear) + neighbour links between city/industry siblings.

### Phase 2 — Nov 2026: trust layer + GBP pillar
- Real assets: founder/team photos, office (8 The Green), client screenshots with permission → replace AI images in hero/about slots; remove or label mock-dashboard numbers as illustrations; delete ★/emoji tickers; unify header across marketing-agency pages; one H1 pattern without highlight spans on new/edited pages.
- Author pages + bylines + "last updated" dates on blog and service pages (E-E-A-T).
- GBP pillar: reinstatement page gets 3–5 external links (Clutch service link, Semrush/DesignRush profiles, YouTube descriptions, PR answers); verification + optimization pages get the same treatment; 2 YouTube videos/month on reinstatement; GBP-topic posts link the service pages with full-phrase anchors.
- Blog featured-image bug: verify and fix.
- Checkpoint 1 (early Nov): linking domains AS>20 15→25; Delaware terms top 3; US clicks 13→25/wk; reinstatement page appearing for "reinstatement service" terms; position on shared keywords back near 26 two weeks after the update closes.

### Phase 3 — Dec 2026–Jan 2027: template consolidation + design tokens + web-design pillar
- Consolidate the three industry families into one data-driven component with a required per-trade **evidence block** (case figures, screenshots, pricing, local proof); rewrite shared middle sections trade by trade, highest-impression trades first (garage door, tree service, kitchen/bath, window & door, electricians, landscaping, HVAC, plumbing, roofing, dental, real estate); target <40% shared copy per page. URLs unchanged.
- Design tokens (colour/spacing/radius) + one typeface pair (Neue Haas + one text face), retire Inter/Manrope; applied family by family.
- Web-design pillar: the 26 website-design pages get real portfolio screenshots and one consistent price/timeline (the facts registry); merge weak duplicates where two trades have no demand.
- Checkpoint 2 (early Jan): AS 9→15; first Philadelphia term top 10; real-estate page on page 2; organic leads the sales team calls real.

### Phase 4 — Feb–Apr 2027: local SEO pillar + scale rules
- City pages: Delaware first (chamber/BBB links, Dover GBP), then Philadelphia/NYC via directory pages that already rank; location blogs monthly.
- Only then consider new pages, under §4 rules.
- Checkpoint 3 (April): AS ≥18; US clicks ≥50/wk; 3+ organic leads/month; reinstatement page top 10 for its commercial terms.

---

## 4. Rules for adding pages in future (quality gates)
1. **Demand first**: a page needs a keyword set with ≥100 US searches/month combined and a SERP where small agencies rank (check Semrush Keyword Overview SERP analysis).
2. **Uniqueness**: ≥60% unique visible copy vs the closest sibling; a trade/city **evidence block** is mandatory (named client, figure, screenshot, local fact); no noun-swap H1s.
3. **Facts from the registry only** (`brandFacts.ts`); no new numbers typed into pages.
4. **Links**: ≥8 in-content inbound links planned at launch (blog Related-services map, siblings, hub) and ≥5 outbound to related pages.
5. **Registration**: add to the single page registry (see §6) so sitemap, nav, RelatedServices and hubs update together; set canonical; run `scripts/generate-sitemap-lastmod.mjs`.
6. **Don't**: more trade clones without evidence, more state pages without state-specific facts, new offer landers in the index, keyword anchors in press releases, bought links.

---

## 5. Off-site authority programme (5 h/week, every week)
- 1.5 h: journalist requests (Qwoted, Featured, Help a B2B Writer): 3 answers/week with real reinstatement case figures.
- 1 h: one directory/profile (Semrush Agency Partners, DesignRush, UpCity, GoodFirms, Agency Spotter, Expertise.com), then Delaware institutions (Central Delaware Chamber, Delaware State Chamber, BBB).
- 1 h: one client ask/week (case study + "marketing by Zonic Media" mention or testimonial link).
- 1 h: video — 2 YouTube videos/month (reinstatement walkthroughs, local SEO packages), descriptions link the exact service URLs.
- 0.5 h: reviews — 2 Google + 1 Trustpilot per month, naming the service; Reddit/GBP community answers.
- Press releases: brand-name anchors only, ≤1/quarter.
- Monthly: location blog (Delaware → Philadelphia → NYC), information questions only.

---

## 6. Technical workstreams (designed from the codebase; effort ≈ 60–80 engineering days over 6 months, owner time 1–2 h per trade for evidence/photos)

### WS0 — Freeze guard + shared tooling (build now, Oct 6–28; no visible change)
- `scripts/text-snapshot.mjs`: after `next build`, dump visible text of every prerendered route (`.next/server/app/**/*.html`, strip script/style/nav/header/footer) to `reports/text-snapshots/`; `git diff` on it proves a refactor changed no copy. Required for every pre-28-Oct deploy.
- `scripts/content-similarity.mjs`: 5-word-shingle Jaccard vs nearest sibling per family → the "% shared" metric for the <40% target and the page gate.
- `scripts/check-brand-facts.mjs`: lint for literal claims (`4.9`, `5.0`, `50+|500+|900+|1,500+`, `$900`, `$2,000`, `six-month`, `no long-term`, `60–90`, `three to six months`, `196 reviews`, `+\d{2,3}%`) outside the allow-list; report first, failing check per migrated family.
- `scripts/crawl-inbound-links.mjs` (from the session scratchpad crawler): strict in-content vs in-body-with-modules inbound counts, anchor distribution, `--compare` deltas → `reports/links/<date>.json`.
- `scripts/validate-registry.mjs` (WS3). All exposed as `npm run snapshot | similarity | facts:lint | links:crawl | registry:check`.
- Rule after 28 Oct: additions before rewrites; one page family per deploy; judge after 14 days.

### WS1 — Offer landers (21 × `src/app/(landing)/*-website-design-agency-us/offer/`)
- Decision: `robots: { index: false, follow: true }` in each of the 20 trade landers' `metadata` (per page, not a group layout, because `(landing)/services/travel-and-tourism-marketing-agency` must stay indexable); keep `/website-design-agency-us/offer` indexable as the single offer page; remove the 20 from `STATIC_PAGES` in `src/app/sitemap.ts` (lines ~107–128), re-run `scripts/generate-sitemap-lastmod.mjs`. No 301, no cross-canonical, no robots.txt disallow (AdsBot obeys robots.txt). Keep Navbar `freeWebsiteLinks` for now.
- Pre-check: GSC Pages filter `-agency-us/offer` 90 d; any lander with >20 clicks is kept indexable. GA4 baseline of cpc sessions + `lead_thank_you` on the 21 paths; alert if >15% drop with flat spend.
- Dec–Jan: consolidate to `(landing)/_components/OfferLanding.tsx` + per-trade `offerData.ts` + one `offer.css` (21 forks, 1.84 MB today). Precedent for noindex: `src/app/thank-you/layout.tsx`.

### WS2 — Template consolidation + facts registry
- Families → targets: website-design (26 hand-written, no shared component) → new `src/app/components/WebDesignLanding.tsx` + `WebDesignLandingData`, one `style/webDesign.css`; marketing-agency (13 JSON + 15 pageData) → all on `IndustryMarketingConfig`/`buildIndustryMarketingPage`, retire `industryMarketingPages.generated.json` + `scripts/import-industry-landing-pages.mjs`; local-SEO (25 hand-written) → migrate onto existing `src/app/components/TseoLanding.tsx` (extend `TseoLandingData` for compare/tracking/nationwide variants).
- Method: text-identical migration first (`scripts/extract-page-data.mjs` pulls literals into `pageData.ts`; `text-snapshot` proves zero delta), then content. Tier A = pages with impressions (additions only until Jan); Tier B = zero impressions in 90 d (free to rework). Order: website-design → marketing-agency → local-SEO. Website-design pages also gain global `<Footer />` + `<RelatedServices />` (they have neither).
- Evidence block: `src/app/components/EvidenceBlock.tsx` + `src/data/evidence/<tradeId>.ts` (`cases[]` with proof image + permission, `localProof[]`, `reviews[]`, `lastVerified`); a metric renders only with a proof image verified within 12 months, otherwise the no-numbers variant. One evidence file lifts all three pages of a trade.
- Facts registry `src/shared/brandFacts.ts`: `RATINGS` (Clutch 5.0/21, Google 5.0/17, Trustpilot 9), `VOLUMES` (1,500+ optimized, 900+ reinstated — fixes "300+" in HVAC/plumbing `stateContent.ts`; pick one of 50+/500+ businesses ranked), `PRICING` (plans; decide `$900` vs `$2,000` website build), `TERMS` (month-to-month + the named free-website exception "six-month plan"), `TIMELINES` (60–90 days first movement; 3–6 months established), `CONTACT` re-exported from `siteConfig.ts` (delete duplicates in `template.ts`). Replacement waves: (1) pre-28 Oct create + lint, no page edits; (2) 29 Oct–7 Nov shared components (`HeroTrustBadges`, `ServiceSiteMockup`, `TseoLanding`, `StateResultVisuals`, `BlogMidArticleCta`, `template.ts` ticker/trust bar, home-inspector `StatePage.tsx`, HVAC/plumbing `BASE_TRUST`); (3) Nov landers; (4) Nov–Dec ranking pages with each family deploy; (5) generators write `public/llms.txt`, `pricing.md`, `llms/*.md` trust/pricing lines from the registry.

### WS3 — Page registry + addition framework
- `src/data/siteRegistry.ts`: `TRADES` (label, nouns, seo/marketing/web/offer paths, navGroup, related), `PAGES` (path, family, indexable, priority, inNav, navTheme, hub), `STATE_PROGRAMS`. Rewire in order, each text-identical: `sitemap.ts` (byte-identical XML check) → `RelatedServices.tsx` (replace `VERTICALS`; add NYC/Wilmington) → `Navbar.tsx` (derive `seoServiceLinks`, `webDesignLinks`, `industryLinks`, `forceWhiteNavbar`; last, with dropdown screenshots) → lastmod/audit scripts, `services/page.tsx`, `industries/page.tsx` hubs.
- `scripts/scaffold-trade.mjs <tradeId>` creates the trade data file, three thin routes and the registry entry; docs in `docs/content-ops/*.md`; `.claude/interlinking-spec.md` keeps rules only (targets regenerated from the registry).
- `scripts/page-quality-gate.mjs` on built HTML: shared copy ≤40% (≤25% for states), ≥1,200 words, unique title/description, canonical + Breadcrumb/Service JSON-LD, evidence block present, ≥8 in-content outbound and ≥5 inbound after a crawl, facts lint clean, registered. Inverse rule in March: 0 impressions + 0 leads for 6 months → noindex or fold into hub.

### WS4 — Internal linking
- Blog → services: `src/shared/blogServiceMap.ts` + `components/BlogRelatedServices.tsx` rendered after `BlogPostFaqs` in `blog/[slug]/page.tsx`; generalise `BlogMidArticleCta.tsx` to variants (reinstatement / local SEO → packages / web design / GBP optimization).
- Services → blog: `components/RelatedGuides.tsx` reading a build-time `src/data/blogIndex.generated.json` (`scripts/export-blog-index.mjs`) so static pages don't hit Mongo.
- Siblings: `CitySiblingLinks.tsx` (10 city pages), `related` trades in `RelatedServices`, `StateCrossProgramLinks.tsx` (HVAC ↔ plumbing ↔ home-inspector per state); `RelatedServices` on state pages; marketing-agency pages stop hiding the global Navbar and use `<Footer />` (also WS5).
- Targets by Dec: pages with ≤2 strict inbound from 43/122 to <10; NYC 3→≥8; real-estate 8→≥12.

### WS5 — Design/trust layer
- Phase 1 (29 Oct–Nov, with family deploys): remove or caption invented stats (`tseo-dash` "4.9 · 196 reviews/+212%", `ServiceSiteMockup` defaults, `IndustryMarketingVisuals` +216%, home-inspector "95% success", lander "95%") → numbers only from `src/data/evidence/*`, schematics get an "Illustration, not client data" caption and no numerals; real photos (office at 8 The Green, team, founder, author headshots, 5–8 permissioned client screenshots) into `public/images/{team,office,evidence}` replacing AI images in About, Contact, Delaware/Wilmington, homepage trust band, bylines; unify the H1 highlight via one CSS token now (DOM unchanged); replace ★/emoji tickers with `clutchLine()` text or badges; consistent nav (un-hide Navbar on marketing-agency pages, registry `navTheme`, one `OfferHeader`).
- Phase 2 (Dec–Jan): `style/tokens.css` (≤24 colours from 720 hex, spacing 4–96, radius 6/12/999, 2 shadows), typeface pair Neue Haas + Inter (drop Manrope, trim `google-fonts.css`), `scripts/css-tokenize.mjs` codemod, icon set `fi` + `fa6`, CSS consolidation (21 offer.css → 1; 7 web-design CSS → 1), `scripts/visual-snap.mjs` (Playwright + pixelmatch, 1 page per family × 3 viewports) before token swaps; CLS budget check.

### WS6 — Blog/content system
- `src/data/authors.ts` (real people, headshot, role, sameAs); `authorId` on `BlogDocument`/schemas with fallback to `authorName`; admin select; `scripts/backfill-blog-authors.mjs`; author pages `blog/author/[authorId]` with Person JSON-LD; Article `author.url`.
- `contentUpdatedAt` (editorial) → "Updated <date>", `dateModified`, sitemap lastmod (today `dateModified` uses first-publish time — wrong).
- FAQ rules (3–6, ≤300 chars) + `scripts/faq-dupes.mjs`; `src/data/topicClusters.ts` with `tags[]`/`primaryServicePath` on posts; `locations[]` for city posts (same local-proof gate).
- Featured image grey block: verify before fixing — DevTools/Vercel logs for `/_next/image` 4xx/5xx, `curl -I` the optimizer URL, Cloudinary asset check; likely fix = Cloudinary custom loader or `unoptimized` on `BlogHeroImage`/cards (body images already bypass the optimizer), plus `scripts/check-blog-images.mjs`.

### WS7 — Measurement
- `scripts/gsc-weekly.mjs` via Search Console API (service account in `.env.local`), grouped by registry family, writes `reports/gsc/<date>.json` + summary; URL Inspection API weekly for `lastCrawlTime`/`indexingState` over sitemap URLs. Manual CSV export as fallback.
- GA4: `src/shared/analytics.ts` `track()` helper → `phone_click`, `form_start/submit` with `form_id`, `offer_cta_click`, `chat_open`; `page_family`/`trade_id` pushed on route change; `phone_click` as key event; Exploration landing page × source/medium × key events.
- Semrush monthly: Site Audit ≥98%, Position Tracking, Authority Score.
- Calendar: Oct 6–28 WS0/WS3 registry/WS4 baseline/WS6 diagnosis/WS7 script; Oct 29–Nov 15 WS1 + facts wave + bylines + blog block (checkpoint 15 Nov: did the slide stabilise after the update closed?); Nov 15–Dec 15 web-design migration + marketing-agency nav/footer + evidence on top-20 pages (checkpoint 15 Dec: links report, facts lint, impressions ±10%); Dec 15–Jan 31 tokens/typeface/CSS consolidation + Tier B local-SEO (checkpoint 15 Jan: PSI/CLS, visual diffs, rankings); Feb Tier A local-SEO + authors + clusters (checkpoint 15 Feb: Tier A <40% shared); Mar prune + facts review.

---

## 7. Measurement & decision calendar
- Weekly (Mon): GSC US clicks/impressions/position per page + re-crawl status; Semrush PT movers; log in `websiteOptimiztion.md`.
- Monthly: GA4 organic sessions (admin excluded), `lead_thank_you` by landing page/channel; Semrush AS + referring domains AS>20; AI toolkit mentions.
- Decision rules: positions not recovered 2 weeks after the update closes → more links, not rewrites; a page family still <40% unique by Feb → merge, don't add; offer landers still indexed after 6 weeks → use Removals tool.

## 8. Risks & limits (stated plainly)
- No position is promised. Organic cannot produce steady leads this quarter; paid + Clutch carry leads.
- Consolidation/rewrites after 28 Oct will cause temporary movement; batch and measure.
- Philadelphia/NYC map packs are closed without a local office.
- AI Overviews absorb clicks; AI visibility converts via brand recognition only.
- Capacity: 5 h/week off-site is the minimum that moves authority; results lag 6–10 weeks.

## 9. Deliverables after approval
1. Publish the plan as a shareable artifact ("Zonic Growth Plan") and log it.
2. Prepare the 28 Oct batch (code) on a branch for the user to deploy.
3. Set the weekly reading routine (13 Oct next).

## Verification
- After each deploy: `npx tsc --noEmit`, `next build`, compare rendered visible text before/after for untouched pages (script pattern used on 30 Sep), GSC URL inspection for changed pages, Semrush Site Audit re-run (health ≥98%, 0 errors), PSI mobile ≥80 on home + one service page.
- Lander noindex: URL inspection shows "Excluded by noindex" within 2–6 weeks; GA4 paid conversions on lander paths unchanged.
- Facts registry: grep for `4.9`, `500+`, `six-month`, `$900` returns 0 hits in `src/app`.
