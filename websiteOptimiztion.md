# Zonic Media — Full-Site SEO Overhaul Log (3 September 2026)

Record of the 3 September 2026 SEO session on zonicllc.com: what the 27 August
work (see `seoupdates27aug.md`) broke, what the live audit found, every change
made in code across two passes, how it was verified, and what remains
user-owned. Report artifact:
https://claude.ai/code/artifact/caa39014-5292-47a8-aa7a-fae23d2baa6a

---

## 1. Brief and constraints

User goal: rank at the top in the US for digital marketing agency searches,
get more organic leads, and rank inside LLM answers (ChatGPT, Google AI
Overviews / AI Mode, Perplexity). User stated the 27 August SEO work "was not
accurate" and "dropped my organic traffic position", and asked for everything
new with the latest keywords and content.

Data sources actually available this session:

| Source | Status |
|---|---|
| Google Search Console | **Not reachable** — Claude Chrome extension not connected (two attempts) |
| Semrush (project 30675049) | **Not reachable** — no Semrush MCP in this session |
| Live crawl of all 180 sitemap URLs | Done (status, title, description, canonical, H1, JSON-LD, alt, word count, internal links) |
| Lighthouse 12, mobile, simulated throttling (homepage) | Done |
| Google + Bing autocomplete, US, per page | Done (177 URLs, ~30 live queries each) |
| Web research (Aug 2026 spam update, AI citation studies) | Done |
| Clutch / Trustpilot public ratings | Verified (Clutch 5.0 / 21 reviews; Trustpilot 4.3 / 7) |

PageSpeed Insights API was quota-blocked; Lighthouse was run locally instead.

## 2. Why the 27 August work likely hurt

| 27 Aug change | Problem |
|---|---|
| Homepage title → "GMB Suspension & Local SEO Experts" | H1 still said "Marketing Agency…"; homepage stopped targeting the agency query family |
| `/services` title → "SEO Services for Local Businesses" | Five pages then targeted "SEO services" at once (hub, seo-services, local-seo root, local-seo-for-small-business, delaware/seo) — cannibalisation |
| 7 blog titles rewritten as CTR hooks | Query words ("google business profile suspended", "without warning") removed from titles |
| 3 pages of 1,187 / 1,460 / 1,257 lines deleted and 301'd | Destination pages don't cover the same sub-topics |
| Philadelphia SEM title | Rendered "… \| Zonic Media \| Zonic Media" (double suffix) |
| 8 new pages, 3 of them SEO pages | Deepened the cannibalisation above |

Timing overlapped Google's 18–21 August 2026 spam update (16.7% of top-10
URLs fell past position 100 per Search Engine Land). The templated page
families share 39–53% of their five-word phrases with siblings (measured with
5-gram Jaccard), which is the doorway pattern that update targeted. Nothing
was removed, but **do not add more templated industry pages until Search
Console confirms the existing ones are indexed and earning impressions.**

## 3. Live crawl findings (3 Sept, before changes)

| Finding | Count | Status |
|---|---|---|
| Apex → www redirect is a temporary **307** | 1 | **User: Vercel setting** (still live) |
| Titles > 60 chars | 63 / 180 | Fixed |
| Descriptions > 160 chars | 17 | Fixed |
| Blog posts with zero internal links (client-side pagination showed 6) | 28 | Fixed |
| Duplicate blog post (identical title + 4,949-word body) | 1 pair | 301 added |
| Redirecting URLs still in sitemap | 3 | Fixed |
| Pages with non-www `https://zonicllc.com` in schema/links | 33 | Fixed |
| Duplicate schema nodes (2× WebSite on home, 2× BreadcrumbList on 13 industry pages) | 14 | Fixed |
| False rating claims ("4.9 across 127 reviews on Trustpilot and Clutch"; "4.9 on Clutch") | 3 | Corrected to 5.0 / 21 (Clutch) |
| Missing/generic alt text ("group", "shield logo", "logo", "…") | 17 | Fixed |
| State pages with only 2 inlinks each | 19 | Fixed |
| llms.txt / llms-full.txt / llms/*.md linking to 301'd URLs | 5 files | Fixed |
| 828 KB businessfirms.co badge PNG loaded on every page | 1 | 7 KB WebP, self-hosted |

Healthy: all 177 live pages 200 with self-canonical, one H1, description,
Org + ProfessionalService schema; robots.txt allows AI crawlers; llms.txt
exists. Lighthouse mobile home: perf 83, SEO 100, a11y 95, CLS 0,
**LCP 4.1 s** (text LCP delayed by render-blocking CSS + fonts) — next
technical job.

## 4. Round 1 — fix what was wrong (title/H1 realignment + technical)

### Positioning and titles
| Page | Title |
|---|---|
| `/` | Digital Marketing Agency for Small Business \| Zonic Media — H1 now "Digital Marketing Agency for Small and Mid-Size Businesses." |
| `/services` | Digital Marketing Services for Small Business \| Zonic Media — H1 "Digital Marketing Services That Turn Local Searches into Booked Jobs" |
| `/about` | About Zonic Media \| Digital Marketing Agency in Dover, DE |
| `/services/seo-services` | SEO Services — Affordable SEO Company for Small Business (later refined in round 2) |
| `/local-seo-google-business-optimization` | Local SEO & Google Business Profile Optimization Services (later refined) |
| `/services/philadelphia/sem` | Philadelphia SEM Agency \| Search Engine Marketing Services (double-suffix bug gone) |
| `/services/gmb-reinstatement-help` | Google Business Profile Reinstatement Service \| GMB Experts |
| 30 industry pages | Rendered `absolute` (no " \| Zonic Media") so they stop truncating; 7 marketing-agency titles shortened to keep the brand |
| Homepage H2 | "No. 1 Marketing & SEO Agency…" → "A Top-Rated Marketing & SEO Agency for Small Businesses in the US" (Clutch-supported) |

### Technical / structured data
- `src/data/blogRedirects.json` now drives both `next.config.ts` 301s and
  sitemap exclusion; adds
  `your-gbp-reinstatement-was-denied-what-to-do-next` →
  `gbp-reinstatement-denied-next-steps`.
- Homepage page-level `WebSite` node removed (root layout already emits it;
  its `SearchAction` pointed at a non-existent `/blog?search=`).
- `IndustryMarketingPage.tsx` skips its BreadcrumbList when the generated
  page already ships one.
- All `https://zonicllc.com` schema/link URLs → `https://www.zonicllc.com`
  (19 files incl. state pages, landers, email templates).
- Article schema on posts: `@id`, `mainEntityOfPage`, publisher logo,
  `author.worksFor` → organization `@id`.
- `blogContent.ts`: `ensureImageAlts()` (fallback alt from post title),
  `pickRelatedPosts()` (title-term overlap), `canonicalizeHostLinks()`.
- `blog/[slug]`: title rendered `absolute` when it would overflow 60 with the
  suffix; "Related guides" block (4 posts) on every post.
- `blog/page.tsx`: server-rendered "All articles" index under the grid (fixes
  the 28 orphans). CSS in `BlogPage.css`.
- New `StateSiblingLinks` component on all HVAC / plumbing / home-inspector
  state pages (+ hub link). CSS in `homeInspAgency.css`.
- Alt text fixes in `Navbar.tsx`, `WorldMap.tsx`, `gmb-verification-help`,
  `local-seo-for-home-services`.
- Footer badge: `public/images/badges/businessfirms-certified.webp`.
- Organization schema: `alternateName`, `description`, GEO added to
  `knowsAbout`.
- `llms.txt`, `llms-full.txt`, `llms/*.md`: stale 301'd links replaced,
  `Last updated: 2026-09-03`, trust signals set to verified numbers, new
  pages (seo-services, ai-seo-services, local-seo-for-small-business,
  local-seo-packages, Delaware/Wilmington/NYC geo pages) added.

### New page
`/services/ai-seo-services` — "AI SEO Agency | AEO & Generative Engine
Optimization (GEO)". Built on `TseoLanding` (same locked template as
seo-services). Targets live low-competition autocomplete demand: "ai seo
agency", "answer engine optimization services", "generative engine
optimization services". Wired into Navbar (Core SEO Services), Footer,
ServicesDirectory, sitemap, llms.txt. Every number on it is a program
deliverable, not a client-outcome claim.

## 5. Round 2 — every page, rebuilt from live search data

User reaffirmed: all pages, latest keywords, content. Scope and method:

1. **Harvest** (`scratchpad/harvest.mjs`): for each of the 177 sitemap URLs,
   a seed keyword derived from the route, six seed variants (`kw`, `kw usa`,
   `kw near me`, `best kw`, `kw cost`, `kw 2026`) against Google autocomplete
   (US) plus two against Bing; non-US locale suggestions filtered. Output
   `kw.json`, ~30 suggestions per page.
2. **Author** per-page plan JSON (title, description, keywords, one FAQ):
   `plan_core` (36), `plan_webdesign` (26), `plan_agency` (26),
   `plan_localseo` (26), `plan_states` (19), `plan_offers` (21),
   `plan_blog` (40). Rules: keyword phrase first; title ≤ 60 (rendered
   `absolute` when the suffix would overflow); description ≤ 160 with the
   benefit/proof in the first clause; FAQ answers 60–90 words, self-contained
   so AI engines can quote them, 2026-specific, no fabricated client results.
3. **Apply** (`scratchpad/apply.mjs`), idempotent, by page type:
   - static `export const metadata` blocks → title / description / keywords
     replaced or inserted; OG/Twitter copies kept consistent
   - state pages → `stateContent.ts` `metaTitle` / `metaDescription`, FAQ
     appended to that state's `faqs` (q/a), `keywords` added to each
     `<state>/page.tsx`; titles made `absolute`
   - industry `pageData.ts` → title / description / keywords
   - `industryMarketingPages.generated.json` → title / description + new
     `keywords` field; `[marketingAgencySlug]/page.tsx` passes
     `keywords: page.keywords`; type extended
   - FAQ appended to the first `question/answer` or `q/a` array (bracket
     matcher, indentation-agnostic)
   - `blogSeoOverrides.ts` regenerated for all 40 posts

Result: 152 page files updated, 102 pages gained a FAQ (71 question/answer +
12 q/a on core pages + 19 state), 40 blog overrides. Offer landers received
metadata only (their bodies are the locked design family).

## 6. Verification

- `tsc --noEmit`: clean (three times, after each pass).
- `next build`: 173/173 pages, exit 0.
- Crawl of the built site (`next start -p 3111`, `scratchpad/verify2.mjs`):
  **194 sitemap URLs, all 200; 0 titles > 60; 0 descriptions > 160; keywords
  tag and exactly one H1 on every page; valid JSON-LD everywhere; no non-www
  references; canonical matches URL on every page; no duplicate titles; FAQ
  schema on 188 pages, 1,296 Q&A pairs.**

Sample rendered titles:
- `/` → Digital Marketing Agency for Small Business | Zonic Media
- `/services/hvac-marketing-agency/texas` → HVAC Marketing Agency in Texas | Local SEO & Google Ads
- `/services/roofing-website-design` → Roofing Website Design Company | Sites That Book Jobs
- `/services/industry/dental-seo-services` → Dental SEO Company USA | Dental SEO Services & Experts
- `/blog/the-9-most-common-reasons-…` → 9 Reasons Your Google Business Profile Gets Suspended

## 7. Keyword strategy (US)

"Digital marketing agency" as a bare head term is held by agencies with
thousands of referring domains; Zonic has ~119 (Authority Score 8). The
realistic route to the top is the clusters below, plus entity work that gets
the agency named in AI answers.

| Cluster | Live queries (autocomplete, US, 3 Sept) | Owning pages |
|---|---|---|
| Agency positioning | digital marketing agency for small business · … usa · … near me · … new york | `/`, `/services`, NYC & Delaware pages |
| GBP recovery (strongest asset) | gmb reinstatement service / agency / experts · google business profile reinstatement expert / help · suspended for no reason / after changing address / for deceptive content | `/services/gmb-reinstatement-help` + suspension guides |
| Local SEO | local seo services for small business · … near me · local seo agency usa · affordable seo services for small businesses · local seo services cost | local-seo-for-small-business, local-seo-packages, local-seo root |
| Industry programs | hvac marketing agency usa · roofing marketing agency in usa · plumber marketing company | marketing-agency + state pages |
| AI search (new) | ai seo agency · answer engine optimization services · generative engine optimization services | `/services/ai-seo-services` |

Next content gaps: "local SEO services cost" guide with real package prices;
"how to choose a digital marketing agency for a small business".

## 8. Ranking inside AI answers — what matters

Per 2026 studies: AI Mode cites Google Business Profiles more than any other
source; ~76% of AI Overview citations come from pages already in the top 10;
~65% of cited pages carry structured data; content < 3 months old and
self-contained answers in the first third of a page are cited several times
more often. Priorities: entity consistency (NAP, services, ratings identical
everywhere — the 4.9 vs 5.0 mismatch fixed today is the kind of thing that
costs a recommendation); directory presence (Clutch done; DesignRush, Semrush
Agency Partners, UpCity, GoodFirms next); freshness dates on the top
suspension guides; a fixed 20-prompt monthly citation check across five
engines.

## 9. Still user-owned

1. **Vercel → Settings → Domains → zonicllc.com → redirect to www → status
   308.** The Next.js `permanent` redirect never runs because Vercel answers
   first. Highest-impact 5-minute fix.
2. Review the diff, `git commit`, `git push`, then
   `node scripts/generate-sitemap-lastmod.mjs`.
3. Reconnect the Claude Chrome extension so Search Console
   (`sc-domain:zonicllc.com`) and Semrush can be read and every new title can
   be validated against the queries each page actually earns.
4. Request indexing for `/`, `/services`, `/services/seo-services`,
   `/services/ai-seo-services` and the retitled blog posts after deploy.
5. Claim DesignRush, Semrush Agency Partners, UpCity, GoodFirms with identical
   descriptions and the 5.0 Clutch rating.
6. Ask the last ten reinstatement clients for a Trustpilot review (4.3 / 7 is
   the weakest public signal).
7. No more templated industry pages until GSC shows the existing families
   indexed and earning impressions.
8. Core Web Vitals: LCP 4.1 s on mobile home → target < 2.5 s (render-blocking
   CSS, font loading, Bootstrap CSS loaded globally).

## 10. Expect ranking movement

Titles changed on every page at once, so Google re-evaluates every page at
once. Rankings can wobble for two to four weeks. Watch Search Console weekly,
not daily, for the first month. Measurement: week 1 sitemap/redirect check;
week 3 US-filtered average position on `/` and `/services`; week 4 CTR on the
retitled posts; week 6 LCP; monthly 20-prompt AI citation check.

## 11. Files touched (this session, excluding the pre-existing lander work)

`next.config.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`,
`src/data/blogRedirects.json` (new), `src/data/industryMarketingPages.generated.json`,
`src/shared/blogSeoOverrides.ts`, `src/shared/blogContent.ts`,
`src/app/components/{IndustryMarketingPage,Navbar,Footer,ServicesDirectory,WorldMap,StateSiblingLinks(new)}.tsx`,
`src/app/style/{BlogPage,homeInspAgency}.css`,
`src/app/(main)/page.tsx`, `about`, `services`, `industries`, `contact-us`, `blog`, `blog/[slug]`,
`services/ai-seo-services/page.tsx` (new), every `services/*` page, every
`services/industry/*` page, every state `page.tsx` + `stateContent.ts`,
every `*-marketing-agency/pageData.ts`, `services/[marketingAgencySlug]/page.tsx`,
every `(landing)/*/offer/page.tsx`, `public/llms.txt`, `public/llms-full.txt`,
`public/llms/*.md`, `public/images/badges/businessfirms-certified.webp` (new),
`src/app/api/send-lead/route.js` (www host in email footer).

## 12. Sources

- https://searchengineland.com/google-august-2026-spam-update-ranking-impact-485980
- https://searchenginewatch.com/google-algorithm-update-august-2026/
- https://almcorp.com/blog/google-ai-mode-cites-itself-organic-links-seo-2026/
- https://seranking.com/blog/how-to-optimize-for-ai-mode/
- https://www.digitalapplied.com/blog/ai-search-citation-ranking-factors-2026-data-study
- https://www.position.digital/blog/ai-seo-statistics/
- https://www.yotpo.com/blog/chatgpt-seo-geo-tips/
- https://clutch.co/profile/zonic-media (5.0, 21 reviews)
- https://www.trustpilot.com/review/zonicllc.com (4.3, 7 reviews)
- https://clutch.co/us/agencies/digital-marketing/small-business
- https://www.designrush.com/agency/digital-marketing
- https://agencies.semrush.com/list/united-states/small-business/

---

# Addendum — 7 September 2026: data-driven fix round

User reported Semrush AI visibility 30→29, rare positive visibility, organic
traffic down, GSC average position 26→34 and very low CTR. Chrome extension
was connected this time, so Search Console and Semrush were read directly.
Constraint from the user: **no new sections on pages — upgrade existing
elements only, without touching styles.**

## What the data shows

| Source | Figure | Meaning |
|---|---|---|
| GSC, 28 days | 122 clicks · 128K impr · 0.1% CTR · pos 30.4 | Shown constantly, on page 3+ |
| GSC, 30 Aug–5 Sep vs 23–29 Aug | 35 vs 33 clicks · 35.6K vs 31.9K impr · pos 32.5 vs 31.6 | The 3 Sept deploy did not cut clicks; more impressions at deep positions pull the average down |
| GSC countries | US 45 clicks / 114,513 impr; India 36 / 1,038 | 89% of impressions are US and almost none click — a US position problem |
| GSC pages | `zonicllc.com/services/local-seo-for-home-services` (non-www) 19 clicks @ 3.7 | The apex host is indexed as a separate site because the redirect is a **307** |
| GSC pages | /services/philadelphia/local-seo 16,216 impr @ 29.5, 2 clicks | 13% of all impressions on one page 3 URL |
| GSC pages | real-estate-seo-services 6,817 @ 28.4 · gmb-verification-help 3,934 @ 17.4 · electrical-website-design 1,678 @ 15.7 · roofing-website-design 1,043 @ 13.1 | The clusters to push onto page 1 |
| Semrush PT (82 kw, US) | visibility 9.51%, 12 up / 38 down this week; "real estate seo company" 43→**1** | Retitle produced a #1; declines are re-evaluation wobble, mostly Philly PPC terms |
| Semrush AI Search | AI visibility 29 (project) / 14 (dashboard), 6 mentions, 16 cited pages | Entity mentions are the constraint |
| Semrush Listings | 22 / 37 listings to fix, presence "Bad" | NAP inconsistency — biggest local/AI lever left, user-owned |
| Semrush backlinks | 165 ref. domains, 89% AS 0–20 | Thin, low-quality link profile |
| Semrush Site Audit | 95% health; 2×404 (`/blog/tel; (302) 726-9736`), 2 broken links, dup H1/title on 2 posts, llms.txt formatting notice, CWV 56% | All code-side items fixed below except CWV |

## Changes made (all inside existing elements)

- **Philadelphia SEO** (`services/philadelphia/local-seo`): title → "Philadelphia SEO Company | SEO Services & Local SEO Agency"; lede now "Philadelphia SEO company and local SEO agency … our SEO services in Philadelphia"; H2s → "Philadelphia SEO Services: …", "Local SEO in Philadelphia That Puts You in the Top Three…", "A Philly SEO Agency That Acts Like a Partner…"; anchor text from seo-services, ai-seo-services and the footer → "Philadelphia SEO company".
- **Philadelphia SEM**: H1 had no keyword → "Philadelphia SEM Agency: Own the Whole Search Results Page"; lede and first H2 name "search engine marketing services".
- **GMB verification**: title → "GMB Verification Service | Instant, Video & Postcard Fixes"; H1 → "GMB Verification Service That Gets Your Google Business Profile Verified"; lede names the instant verification method; H2s → "GMB Instant Verification, Video or Postcard: Get Verified in 4 Clear Steps", "GMB Verification Service Packages".
- **GBP reinstatement**: title → "GBP Reinstatement Service | GMB Reinstatement Experts"; H1 → "…Our GBP Reinstatement Service Gets You Reinstated Fast."
- **Garage door local SEO**: title → "Garage Door Repair SEO Company | Garage Door Local SEO"; services H2 → "Garage Door Repair SEO Services…".
- **Pediatricians / chiropractor / landscaping**: H1s now "… SEO Company That …"; pediatrician title → "Pediatrician SEO Company | Pediatric Practice Marketing".
- **Electricians / law firms**: services H2 → "Electrician SEO Services…", "Local SEO Services for Law Firms…".
- **Delaware SEO**: county H2 → "New Castle, Kent and Sussex County: Three Different Markets."
- **Local SEO packages**: `AggregateOffer` (197–1,500 USD, 3 tiers, matching the user's updated Starter/Growth/Dominate prices) added to the Service schema; footer link "Local SEO Packages".
- **Auto repair (JSON page)**: title → "Auto Repair Marketing & SEO Agency | Local SEO & Google Ads".
- **Blog**: `canonicalizeHostLinks` now also normalises malformed `tel;` hrefs (the two 404s); two override titles changed so they differ from the H1.
- **llms.txt / llms-full.txt**: single summary blockquote; "Last updated" moved into the About list.
- Footer: "Local SEO Packages" and "Philadelphia SEO Company" added to the existing services list.

Verified: `tsc` clean, `next build` 173/173, titles ≤ 60 and descriptions ≤ 160 on every touched page.

Note: `ServicesDirectory.tsx` was deleted in the working tree by the user (staged `D`), so the /services hub directory mesh from 19 Aug is gone; the RelatedServices strips on individual pages remain.

## User-owned, in priority order

1. **Vercel → Project → Settings → Domains → `zonicllc.com` → Redirect to `www.zonicllc.com` → set 308 (permanent).** GSC proves the apex host is ranking as a separate page. Alternatively remove the domain-level redirect so the Next.js permanent redirect fires.
2. **Semrush Listing Management: fix the 22 inconsistent listings** (or do it manually: identical name, "8 The Green, STE B, Dover, DE 19901", +1 302-726-9736, categories). This is the top lever for both local rankings and AI mentions.
3. Claim DesignRush, Semrush Agency Partners, UpCity, GoodFirms with the same NAP and the 5.0 Clutch rating; ask the last ten reinstatement clients for Trustpilot reviews (4.3 / 7 today).
4. Commit and push (the 7 Sept edits are uncommitted), then request indexing for the Philadelphia SEO, GMB verification, GBP reinstatement and SEM pages.
5. Watch GSC weekly, US filter, for four weeks. Do not retitle again inside that window.

---

# Addendum — 7 September 2026 (second pass): declined keywords, 308, synonym coverage

## Semrush Position Tracking
- Added 40 keywords from Search Console's highest-impression queries (tag `gsc-sep-2026`): the Philadelphia SEO cluster, GMB verification / instant verification / without postcard, GBP + GMB reinstatement, real estate SEO variants, electrician / garage door / landscaping / pediatrics / auto repair SEO, local SEO packages / services / company, SEM agency, industry marketing agencies, "digital marketing agency for small business", "marketing company for small business", "internet marketing agency", "small business marketing agency", "ai seo agency", "answer engine optimization services", Delaware terms. Total now 118.
- Removed mis-targeted tracked keywords that never ranked and don't match a page: seo company st. george, local seo for real estate columbia sc, seo company paoli, affordable seo marketing pa (+ the remaining ones listed in the session summary).

## Pages behind the declined keywords (text/metadata only, no new sections)
- **Philadelphia PPC** (`ppc management philadelphia` 1→24, `ppc marketing philadelphia` 27→40): title → "PPC Management Philadelphia | Google Ads & PPC Agency"; H1 → "Philadelphia PPC Management: Google Ads That Buy Leads, Not Clicks"; lede names "PPC management and PPC marketing"; H2s → "PPC Management in Philadelphia: …", "A Philadelphia PPC Marketing Partner…"; keywords added.
- **Towing SEO** (`seo for roadside assistance` 1→10): title → "Towing SEO Company | SEO for Roadside Assistance & Towing"; H1 → "Local SEO for Towing and Roadside Assistance That Wins More Calls"; keywords added.
- **Delaware digital marketing** (`digital marketing company dover` 2→17, `advertising experts delaware` 3→37): lede now "digital marketing agency and internet marketing company, the advertising experts Delaware businesses call…"; H2s → "Zonic Media Vs. A Typical Delaware Advertising Agency", "A Dover Digital Marketing Company Built to Be a Growth Partner…"; keywords added.

## Synonym coverage ("internet marketing", "online marketing", "marketing company", "advertising agency", …)
Live autocomplete (3 Sept and 7 Sept) shows Google folds internet/online/web/digital-advertising "agency" queries into the digital-marketing family, while "marketing company for small business", "small business marketing agency/firm", "local marketing agency", "google marketing agency", "lead generation agency" and "internet marketing services" carry their own demand. Applied:
- Home hero: "The digital marketing and internet marketing agency near you…"; services hub lede: "digital marketing, internet marketing and online advertising services…"; about lede: "digital marketing and internet marketing agency".
- Keywords meta widened on home, services, about, contact, the 4 geo hubs, seo-services, google-ads, local-seo pages, ai-seo-services (agency/company/firm/advertising/lead-generation variants).
- Every industry page family got 2–5 synonym keywords (`{industry} marketing company / advertising agency / internet marketing / lead generation`; `{industry} seo services / seo agency / seo company for {industry}`; `{industry} web design company / website developer`). pageData.ts and the generated JSON pages included.
- Organization schema `knowsAbout` + description now name internet marketing, online advertising, lead generation and SEM; llms.txt positioning line lists the alternate descriptors.

## Vercel — apex redirect
- Project `zonic-media` had only `www.zonicllc.com`. Added `zonicllc.com` → **308 Permanent Redirect → www.zonicllc.com** ("Include apex and www variants" unchecked so www stays Production).
- Vercel reports **"Verification Required — this domain is linked to another Vercel account"**. The live 307 is served by that other account. To complete, add at Cloudflare DNS (nameservers ivan/saanvi.ns.cloudflare.com), proxy off:
  - `TXT  _vercel  vc-domain-verify=zonicllc.com,b256b60ad5b789219ef1`
  - (optional, recommended by Vercel) `CNAME @ afa2f3597ae599e0.vercel-dns-017.com.` — the current `A 216.198.79.1` also works.
  Then click Refresh on the domain row. Until then the apex keeps returning 307 from the old account.

Verified: `tsc` clean, `next build` exit 0 (173 pages) after each pass.

---

# Addendum — 7 September 2026 (third pass): full-site keyword re-check and broad positioning

## Data pulled
- **Semrush Keyword Overview (US, Sept 2026):** digital marketing agency 74,000 (KD 82) · seo agency 60,500 (41) · seo services 60,500 (60) · seo company 49,500 (59) · digital marketing services 40,500 · marketing agency 40,500 (84) · digital marketing company 33,100 · web design company 33,100 · local seo services 27,100 (46) · web design agency 27,100 · advertising agency 22,200 · local seo company 18,100 · ppc agency 18,100 · local seo agency 14,800 · online marketing agency 14,800 · website design services 14,800 · digital marketing agency near me 12,100 · google ads agency 12,100 · seo services near me 12,100 · best digital marketing agency 8,100 · internet marketing agency 8,100 · lead generation agency 5,400 · full service digital marketing agency 4,400 · local seo packages 4,400 · ai marketing agency 3,600 · ai seo agency 3,600 (KD 28) · ai seo services 3,600 · small business marketing agency 3,600 · **digital marketing agency for small business 2,900** · generative engine optimization services 1,900 · home services marketing agency 1,900 · digital marketing agency usa 1,600 · gmb optimization service 590 (KD 10) · answer engine optimization services 590 · marketing agency for contractors 590 · google business profile optimization service 480.
- **Google Trends (US, 12 months):** "marketing agency" carries ~3× the interest of "digital marketing agency" and rose through H1 2026; "ai seo" grew all year and now matches "digital marketing agency"; "google business profile" is the highest-interest service term (spiked Apr–Jun 2026); "local seo" steady.
- Semrush research article (agency keywords) and Search Console query data from the earlier passes.

## Conclusion
"…for Small Business" narrowed the site to a 2,900/mo modifier while the head terms it should carry are 20–25× larger. Titles now lead with the head terms and name the full service set; the small-business framing stays only on the page built for it (`/services/local-seo-for-small-business`) and the free-website offer.

## Title / description / H1 changes (no new sections)
| Page | New title (chars) |
|---|---|
| `/` | Digital Marketing Agency \| SEO, AI SEO, Web Design & Ads (56) — H1 "Digital Marketing Agency for SEO, AI Search, Web Design and Google Ads."; hero badge "Built for US businesses of every size"; description full-service + SEO company |
| `/services` | Digital Marketing Services \| SEO, Local SEO, Web Design, Ads (60) |
| `/services/seo-services` | SEO Services & SEO Company USA \| Local, Technical & AI SEO (58) |
| `/services/web-design` | Web Design Company & Agency \| Custom Website Design Services (60) |
| `/services/google-ads` | Google Ads Agency & PPC Management Services \| Zonic Media (57) |
| `/services/ai-seo-services` | AI SEO Agency & AI SEO Services \| GEO & AEO Optimization (56) |
| `/local-seo-google-business-optimization` | GMB Optimization Service \| Google Business Profile Local SEO (60) |
| `/industries` | Industries We Serve \| Home Services & Contractor Marketing (58) |
| `/about` | description broadened to "businesses across the USA" |

- Keywords meta: head terms front-loaded on home, services, seo-services, web-design, google-ads, local-seo root, industries, about.
- Organization schema + ProfessionalService description + llms.txt positioning: "full-service digital marketing agency and SEO company … for businesses of every size".
- 26 industry local-SEO pages: keywords gained `google business profile for {industry}`, `ai search optimization for {industry}`, `{industry} seo 2026`; the Sept-3 FAQ answer on each now ends with the 2026 AI Overviews / AI Mode signal.
- Every other page was re-checked against the 3 Sept and 7 Sept plans (titles ≤ 60, descriptions ≤ 160, live-query keywords present); no further changes needed.

---

# Addendum — 8 September 2026: the four changes from the SEO expert's sheet

Requested by the user after the sheet review ("just make these 4 changes and then give me the new report"). No new sections, no style changes, nothing committed (user commits).

## 1. Navigation heading hierarchy (Semrush "poor heading hierarchy", 85 pages)
- Cause: the mobile menu's three `Accordion.Header` elements rendered as `<h2>` above every page's H1.
- Fix: `src/app/components/Navbar.tsx` — the three headers render `as="div"`. FAQ accordions already used H3.
- Verified: crawl of all 194 sitemap URLs on the local build → 0 navigation H2s, exactly one H1 per page.

## 2. Core Web Vitals / mobile LCP
Trace of the homepage under mobile throttling showed what the hero was waiting on. Fixes:
- `src/app/components/Footer.tsx`: the 828 KB PNG badge hot-linked from businessfirms.co (1258×1395 squeezed into 85×85) → local 6.7 KB WebP `public/images/badges/businessfirms-certified.webp` via next/image, lazy-loaded, descriptive alt.
- `src/app/layout.tsx`: removed the two `<link rel="preload">` for Inter and Manrope (75 KB). They are only used by `service-lead-form.css`, i.e. the form at the bottom of pages. They still load after first paint.
- `src/app/components/Navbar.tsx`: mobile menu contents (`mob-tab-nav-menus`) mount only while `mobileOpen` is true. Desktop mega-menu unchanged → 104 service links per page remain in the HTML.
- `src/app/(main)/home.css`: `content-visibility: auto; contain-intrinsic-size: auto 900px` on the 12 below-the-fold `.hm-page` sections (hero excluded).
- `next/dynamic` code-splitting for ClutchWidget, ServiceLeadForm, Blogs (Swiper) on the homepage; ClutchWidget/ServiceLeadForm on 50 bespoke page files; SiteFloatingWidgets in the root layout. Server-rendered markup unchanged (checked in the built HTML).

Measurements (Lighthouse 12 mobile, local `next start`, median of 3 runs; "real throttling" = `--throttling-method=devtools`):

| Homepage | Before | After |
|---|---|---|
| Real throttling LCP | 2.74 s | 2.20 s |
| Real throttling perf score | 91 | 92 (95 one build earlier) |
| Real throttling main-thread | 4.6 s | 2.3 s |
| Simulated (PSI model) LCP | 4.45 s | 3.99 s |
| Simulated perf score | 83 | 86 |
| DOM elements | 2,748 | 2,356 |

- Philadelphia local SEO page, widget split alone: simulated LCP 4.8 s → 4.1 s (real throttling flat at ~2.5 s, 2 runs).
- Note: the earlier single "before" run of 3.0 s simulated LCP was a lucky run; the 3-run median baseline is 4.45 s. Lighthouse's simulated LCP for a text hero is driven by the bytes requested before first paint (HTML 99 KB gz, CSS 76 KB gz incl. Bootstrap 32 KB, ~290 KB gz first-party JS, 3 Neue Haas fonts). Under 2.5 s in the PSI model would need Bootstrap/react-bootstrap replaced and the 120 inline nav icons (40 unique, 70 KB) turned into a sprite — design work, not done.

## 3. Sitemap lastmod
- `node scripts/generate-sitemap-lastmod.mjs` → `src/data/sitemapLastmod.generated.json` regenerated (155 routes; `/services/ai-seo-services` now 2026-09-07).

## 4. Housekeeping
- `next.config.ts`: `/blog/:year/:month` and `/blog/:year/:month/:day` → 301 to `/blog`.
- 25 "ChatGPT Image …" files renamed to `<dir>-hero.png` / `<dir>-image-N.png` in `public/images/{chiro-digital,law-seo,residential-seo,commercial-seo}`; references updated in ChiroDigitalPage, LawSeoPage, ResidentialSeoPage, CommercialSeoPage; law-firm `img2` 404 fixed; unreferenced leftovers renamed `*-extra-N.png`.
- Readability on 11 pages: skipped on purpose (scores are driven by the technical terms the pages rank for; sentences are already short).

## After deploy (user-owned)
- Commit + push; GSC request indexing for `/` and `/services/philadelphia/local-seo`; Semrush Site Audit re-run (heading issue 85 → 0); GSC Core Web Vitals report + PSI field data after ~4 weeks.
- Report artifact: https://claude.ai/code/artifact/0e1c4e0f-ab7c-4699-8a8f-c39a0dba3e2f

---

# Chat log — 8 September 2026 (expert sheet review → 308 → the four changes)

## 1. User: review the SEO expert's sheet, report only, no changes
> "my seo expert has shared me a sheet with some of the changes can u go through the sheet and checkout are they required to do or not … go through all the tabs and do not do any changes just give me a report like are they required to do or not"

Sheet: `docs.google.com/spreadsheets/d/1zSsrPNoXjwddFdqQ-ZWNzAy3Vgifw-1c` (20 tabs, exported and read as xlsx). Every claim was checked against a live crawl of the 194 sitemap URLs, the code, and Lighthouse. Report artifact: https://claude.ai/code/artifact/a7931bda-5732-485f-a1d0-19969a7ab795

| Tab | Sheet asks | Verdict |
|---|---|---|
| Page Speed / CWV (two tabs disagree: mobile 63 vs 96) | Raise PageSpeed scores | **Required** — mobile perf 83, LCP 4.1 s vs 2.5 s target |
| Content optimization (97 rows) | 85 pages "poor heading hierarchy", 11 "low readability" | **Required for the 85** (one cause: mobile nav accordion renders 3 H2s before the H1) · optional for the 11 |
| Multiple H1 tags | Launchpad 2 H1s, home-services 5 | Done, live — one H1 on every URL |
| Sitemap | Add lastmod / realistic changefreq | Done, live — 193/194 carry lastmod; only the new AI SEO page lacked one |
| Incorrect pages in sitemap (29 rows, May) | Non-www URLs listed | Done, live — sitemap is all www |
| 404 pages | 301 two old service URLs | Done, live — both 308 already |
| Broken internal links (`/blog/tel;(302)…`) | Redirect them | Done in code — malformed tel link normalised at render |
| Duplicate H1 = title (2 posts) | Append "\| Zonic Media" | Done in code — distinct titles |
| llms.txt format | Fix notice | Done in code — single blockquote |
| Title too long (1 + 21 rows) | Use the sheet's replacements | Done, live (all ≤ 60) · **do not paste the sheet's replacements** (they read "Zonic Media \| … \| Zonic Media") |
| Duplicate meta descriptions (Privacy/Terms) | Unique | Done, live |
| Images without alt (6 blog images) | Add alt | Done in code — fallback alt at render |
| Broken internal images (3 homepage) | Fix | Done, live · renaming "ChatGPT Image…" files optional |
| GSC "Discovered, not indexed" (9 non-www) | Make everything www | User action — apex 307 from another Vercel account |
| Excluded by noindex (`/blog/2025/10/15`, `/blog/2025/10/30`) | Redirect to /blog | Optional |
| Blocked by robots.txt (`/coming-soon`) | Optimise or redirect | Not required — placeholder, blocked on purpose |
| GSC "Page with redirect" (4) / "Crawled, not indexed" | Validate / request indexing | User action after deploy |
| Schema: Organization, WebSite, LocalBusiness, BreadcrumbList, Service+OfferCatalog, SiteNavigationElement, FAQPage/Article | "Not present" | Done, live — all emitted (188 pages carry FAQPage, 1,296 Q&A pairs) |
| Schema: HowTo | "High priority" | Not required — Google dropped HowTo rich results in Sept 2023 |
| "13 structured data items invalid" (July) | Fix | Done, live — no invalid JSON-LD on 194 URLs |

Summary given: only two items genuinely required (nav H2s, CWV/LCP); the rest already done, user-owned, or not worth doing.

## 2. User: 308 is done, what code changes now?
> "i have done 308 redirection to www one -- now just tell me what changes should be done in code now first tell me"

Verified live: `curl -I https://zonicllc.com/` → `HTTP/2 308` to www, deep paths too. Answer: four code items — (1) nav accordion H2 → div, (2) Core Web Vitals / mobile LCP work (target LCP < 2.5 s, score > 90), (3) sitemap lastmod for the new AI SEO page, (4) optional housekeeping: `/blog/2025/*` archive redirect, rename the "ChatGPT Image…" files, readability on 11 pages. Plus two non-code steps after deploy: Validate Fix and request indexing in GSC.

## 3. User: make those four changes and give the new report
> "see i already have optimized my website okk so just make these 4 changes and than give me the new report"

Executed as documented in "Addendum — 8 September 2026" above. Highlights of the conversation while doing it:
- First Lighthouse pass after the nav + `content-visibility` change looked *worse* (LCP 3.0 s → 4.4 s). Investigation showed the 3.0 s "before" was a single lucky run; three-run medians put the baseline at 4.45 s simulated / 2.74 s real throttling. Lesson recorded: never compare single Lighthouse runs.
- The trace exposed the real LCP blockers nobody's sheet mentioned: the 828 KB businessfirms.co PNG in the footer on every page, and Inter/Manrope preloads used only by the bottom lead form.
- Final: real-throttling LCP 2.74 → 2.20 s (score 91 → 92), simulated 4.45 → 3.99 s (83 → 86), DOM 2,748 → 2,356. Crawl of 194 URLs: 0 issues.
- Readability rewrite on 11 pages deliberately skipped; Bootstrap/react-bootstrap removal and a nav icon sprite identified as the remaining lever for the PSI score, not done (design change).
- Report updated in place: https://claude.ai/code/artifact/0e1c4e0f-ab7c-4699-8a8f-c39a0dba3e2f (section "8 September").

## 4. User: save the chat
> "save the chat in website optimize md file"

This section.

## Files touched today (uncommitted, user commits)
`src/app/components/Navbar.tsx`, `src/app/components/Footer.tsx`, `src/app/layout.tsx`, `src/app/(main)/page.tsx`, `src/app/(main)/home.css`, `next.config.ts`, `src/data/sitemapLastmod.generated.json`, `public/images/badges/businessfirms-certified.webp`, 50 page files under `src/app/(main)/**` (dynamic imports for ClutchWidget / ServiceLeadForm), `ChiroDigitalPage.tsx` / `LawSeoPage.tsx` / `ResidentialSeoPage.tsx` / `CommercialSeoPage.tsx` (image refs), 25 renamed files in `public/images/{chiro-digital,law-seo,residential-seo,commercial-seo}`.

---

# Check-up — 9 September 2026 (read-only; no website changes)

User asked: organic traffic declined (Semrush), are the "negative impact" keywords on the site, why AI visibility is 29, why GSC average position is 30, low generative-AI impressions, should we wait. Report artifact: (see chat) — "Zonic Media September Check-up".

## What the data says
- **GSC 28d vs previous 28d:** clicks 125 vs 115 (+9%), impressions 129K vs 79.9K (+61%), CTR 0.1% flat, position 30.6 vs 28.6. Daily: ~600–1,000 impressions/day at pos 39–46 in early June → ~2,500/day at pos 24–27 late July → 4,500–6,400/day at pos 31–35 in early Sept. Clicks flat at 3–6/day the whole time. Semrush "organic traffic 129, −8.5%" is a model, not visits.
- **US:** 115,251 impressions / 47 clicks (0.04%). India 1,028 / 36. "zonic media" brand = 31 of 125 clicks. Philly SEO page 15,966 impr / 3 clicks (page 3).
- **Declined keywords (Semrush PT Sep 3→9):** all 33 verified present on their landing pages (words; most exact phrases in the title). Biggest drops sit on pages edited 7 Sept: real estate seo company 1→lost (page still #1 for "real estate seo services" and "seo services for real estate agents"), ppc management philadelphia 1→37, advertising experts delaware 3→38, digital marketing company dover 2→18. 20 improved (local seo philadelphia 30→1, pest control marketing agency 30→1, philadelphia search marketing 4→1). Net visibility 6.5%→8.4%. 25 head terms (local seo services 27.1K, local seo company 18.1K, internet marketing agency 8.1K, ai seo agency 4.4K, hvac marketing agency 2.9K) not ranking at all.
- **SERP competition:** "philadelphia seo company" (1.3K, KD 37) page 1 = 4 lists/directories (Directive, Semrush Agency Partners, Built In, Clutch) + Thrive, Green Lane, Coalition, SEO Locale (AS 61, 1.3K ref domains). "real estate seo company" (1.3K, KD 31): 5 of 10 are lists. Zonic AS 8.
- **Backlinks (biggest finding):** since **24 Aug 2026** 33 domains link with anchor "high quality dofollow backlinks da 50 pa 40 premium pbn network service <look-alike domain> … buy backlinks online cheap" — 20 look-alike variants (zonicc.online, zoniccmedia.com, zonic.services, zonic.work, zonicc.world, zoniicc.site, zonnicmedia.com …) ≈ 650 links, still growing (38 found today). Since 2 May: "fiverr backlinks/PBN links helped my {zonicc.work}…" anchors. 83% of ref domains AS 0–10, 10% Moldova, network graph "Dangerous". Timeline: spam update 18–21 Aug → links 24 Aug → drop 27 Aug. Unknown whether bought (Fiverr) or negative SEO — user must answer. Recommended: Backlink Audit + disavow (not done).
- **AI visibility:** Domain Overview 29 = index score; AI Visibility toolkit = **0/100 "Low"** vs Seer, Coalition, Directive, DMi. 8 mentions / 27 citations / 20 cited pages in 6 months; one mention is a ChatGPT answer about "Piro fingerboard wheels". GSC **Generative AI features** report: 7,820 impressions in 3 months, 2.9K last 28d (US 2,317), rising since June; top pages towing 776, real estate 426, Philly 418, home 350. Semrush AI Search Health 83%; robots.txt allows all AI bots. On-page side done; missing = directories/listings/press/mentions.
- **Indexing:** 180 indexed / 111 not: 46 legacy apex 404s (now 308, validation started 19 Aug), 27 "page with redirect" (validation failed while apex was 307 — revalidate), 21 discovered-not-indexed (offer landers, chiropractic/dental/general-contractor marketing-agency pages, 2 posts — all linked from 133+ pages and in sitemap; crawl priority), 13 crawled-not-indexed (mostly _next static files).
- **Site Audit (5 Sept crawl, pre-deploy):** health 95%, 4 errors, 136 warnings; open items are the nav H2s, llms.txt format, CWV — all changed 8 Sept; rerun needed.
- **Deploy timeline:** 3 Sep 22:02 IST (rebuild), 7 Sep 21:28 (second pass), 8 Sep 14:46 (CWV/nav). GSC data ends 6 Sep.

## Advice given
Freeze pages until 7 Oct; meanwhile (off-site): answer the link-buying question → Backlink Audit + disavow; fix 22 listings; get onto DesignRush/UpCity/GoodFirms/Semrush Agency lists and Delaware/Philly lists; GSC validate-fix on redirects + request indexing for the 3 marketing-agency pages and /services/ai-seo-services; rerun Site Audit; set up Prompt Tracking with 20 agency prompts. "Rank top worldwide" is not realistic at AS 8 — Philadelphia/Delaware/industry terms (KD 30–40) are the winnable set.

---

# 9 September 2026 (afternoon): GMB reinstatement page fix + Semrush 4xx errors

User: "okk go fix it" (the reinstatement page), then "after this i got these issues in semrush … fix them also" (2 pages 4XX + 2 broken internal links: `/blog/tel; (302) 726-9736`).

## Diagnosis (read-only, before the fix)
- `/services/gmb-reinstatement-help`: GSC 28d = 29 impressions / 0 clicks (90d: 99 / 0), only brand/sitelink queries; Semrush: not in Google top 100 for any US keyword. Page has 4,340 words, 13 FAQs, Service + ProfessionalService schema, 134 internal links, 5 ref domains.
- All "reinstat" demand (1,330 impressions / 90d: gbp reinstatement 905, gmb reinstatement 315, gbp reinstatement service 29) lands on the blog post `the-exact-step-by-step-gbp-reinstatement-process-google-doesnt-publish` (1,195 impr, 1 click, ~pos 14) and five other posts. The posts linked to the service page only via sidebar/footer.
- SERP "gbp reinstatement": 110/mo, KD 10; page 1 includes papayasearch and greenthumblocal with AS 0 → winnable.
- Old URL `zonicllc.com/service/google-my-business/gmb-suspension-reinstatement/` already 308s to the service page (no lost history).

## Change made (code, uncommitted)
- `src/shared/blogContent.ts`: new `linkReinstatementService(html)` — at render, turns the first reinstatement/suspension phrase in the opening paragraphs (first 6) and the last one in the closing paragraphs (last 4) into a link to `/services/gmb-reinstatement-help`. Existing words only; skips headings, text already inside `<a>`, paragraphs already linking to the page; max 2 links per post; idempotent; posts that never mention the topic are untouched. Phrase regex covers "GBP/GMB/Google Business Profile reinstatement|suspension (service|appeal|process|support…)", "reinstatement appeal/process/support", "be/get reinstated", "reinstate(d|ing)".
- `src/app/(main)/blog/[slug]/page.tsx`: applied in the render chain before `splitOnFaqMarker`.
- Tested against 24 live posts: 20 of 22 suspension/reinstatement posts gain 1–2 contextual links, 2 unrelated posts gain 0, no nested anchors, no heading links; `tsc` clean; `next build` ok; local render confirmed (e.g. anchors "GBP reinstatement process" + "Google Business Profile reinstatement support" on the step-by-step post).
- Service page title ("GBP Reinstatement Service | GMB Reinstatement Experts") and H1 deliberately left alone — they already carry the query phrasing and have been changed twice since 27 Aug.

## Semrush 4XX / broken internal links
- Both are `href="tel; (302) 726-9736"` from the CMS body of two posts (gbp-reinstatement-denied-next-steps, how-to-get-more-local-business-leads-from-google-in-2026). The render-time normaliser in `canonicalizeHostLinks` (7 Sept) already fixes them: live pages emit `tel:+13027269736` ×4 and no `tel;` hrefs. Semrush's crawl is dated 5 Sept (pre-deploy) → needs a campaign rerun; no further code change.

## After deploy (user)
- Commit + deploy; then GSC URL inspection → Request indexing for `/services/gmb-reinstatement-help` and the step-by-step post; Semrush Site Audit rerun.
- Expectation given to user: service page into top 10 for the reinstatement group in 3–6 weeks, top 5 by November; ~300–400 US searches/month in the group → 20–40 clicks/month at pos 3–5, high intent. If Google still prefers the post after 6 weeks, fold the post into the service page.

## 9 Sept — why gmbgorilla.com outranks Zonic for "gmb reinstatement agency" / "gmb optimization" (read-only)
| | gmbgorilla.com | zonicllc.com |
|---|---|---|
| Authority Score / ref. domains | 28 / 704 (74% under AS 10, but 15 domains AS 41–50, 2 at 91–100) | 8 / 169 (83% under AS 10, spam anchors) |
| Top-linked asset | /local-seo-audit/ free tool: 172 ref domains | homepage 47 (mostly spam) |
| US organic keywords / traffic | 1,900 / 1.5K est. | 1,300 / 129 est. |
| AI visibility (Semrush) | 30, 17 mentions; top cited sources gmbgorilla.com 15, reddit.com 6, merchynt.com 2 | 29 index / 0 toolkit, 8 mentions |
| Site focus | one topic: 19 pages + 82 posts all about Google Business Profile (setup, optimization, management, reinstatement, reviews, posts, white-label) | 190+ pages across SEO, web design, ads, 30 industries, states, cities; GBP is one cluster |
| Reinstatement page | 1,996 words, H1 "Get Your Suspended GBP Reinstated — Fast", two priced offers on the page ($200 review / $500 service), "99% success rate", "900+ reinstatements", "1 business day", bulk option, 6 FAQ, G2 widget | 4,340 words, 13 FAQ, $400/$500/$750, "700+ profiles", "5–7 days", Trustindex/Trustpilot/Clutch widgets |
| Optimization page | 8,033 words, H1 "Google Business Profile Optimization Services Done Right", 6 price points, reviews; ranks #1 "gmb optimization service", #2 "gmb optimization", #3 "google my business optimization" | H1 "You Rank #1 Outside Your Own Front Door." (no keyword); 7 impressions in 90 days for "gmb optimization" queries, pos 66 |
- "gmb reinstatement agency": Semrush volume 0 (no SERP data); GSC shows 1 impression for Zonic in 90 days. Reinstatement demand is "gbp reinstatement" 110/mo, "gbp reinstatement service" 40, "reinstate google business profile" 30 — gmbgorilla holds #1 / #6 / #2.
- AI Overview for "gmb optimization" (Semrush snapshot 9 Sept) cites: Google support, a LinkedIn top-content page, bullseyeinternet.com, two YouTube videos — not gmbgorilla, not Zonic. Page-1 organic: Reddit thread #1, gmbgorilla #2, Google #3, gmboptimizers, LinkedIn, Milestone, YouTube, BrightLocal, GMB Crush, Merchynt.
- Conclusion given: they win on (1) topical focus and depth (100 GBP pages), (2) 700 ref domains earned by a free audit tool, (3) priced, decision-ready service pages, (4) Reddit/merchynt mentions feeding AI answers. Zonic's GMB optimization H1 has no keyword — flagged for after the 7 Oct freeze (or as a one-page exception).

## 9 Sept — track-record figure updated: 700+ → 900+ (user request; first asked for 1,000+, then changed to 900+)
- 53 occurrences (incl. two split-markup stats `700<span>+</span>` on the reinstatement page and homepage) of "700+ profiles reinstated / recovered / verified", "more than 700 …", "700+ reinstatements/recoveries/suspensions handled", "700+ GBPs reinstated", "Behind 700+ Local Business Comebacks" changed to **900+** (site number style, matching "1,500+") across: homepage (FAQ answer + schema, hero badge, stats, H2), reinstatement page (title-area badge, meta/OG/schema descriptions, body copy), white-label, NYC local-SEO + digital-marketing, Wilmington, SEO services, local-seo-packages, real-estate GBP page, solar/septic/towing pageData FAQs, industryMarketingPages.generated.json FAQs, BlogMidArticleCta, llms.txt, llms-full.txt, llms/gmb-reinstatement.md, llms/local-seo.md.
- Deliberately untouched: the separate "700+ Google Business Profiles optimized" ticker on the industry marketing-agency pages (template.ts, generated JSON, solar/septic pageData) — a different statistic. Note for the user: llms.txt says "1,500+ profiles optimized" while that ticker says 700+; pick one.
- Meta description on the reinstatement page = 144 chars (ok); `tsc` clean; generated JSON still valid.
