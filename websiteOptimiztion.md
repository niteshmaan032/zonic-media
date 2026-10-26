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

## 9 Sept — the reinstatement page has NEVER been indexed
- GSC URL inspection (user screenshot + my re-check): `/services/gmb-reinstatement-help` = "URL is not on Google · Discovered – currently not indexed", Last crawl N/A (never fetched). Referring page shown = the old `/services/gmb-optimization` URL (first place Google saw a link; informational only, that URL now 308s to the optimization page). The apex `zonicllc.com/services/gmb-reinstatement-help` = "URL is unknown to Google". Indexing was requested by the user today.
- Live test (9 Sep 14:10): "URL is available to Google · Page can be indexed"; Breadcrumbs 1 valid, Product snippets 1 valid, Review snippets 11 valid. Headers 200, robots index/follow, canonical self, sitemap lastmod 2026-09-07 priority 0.9, Googlebot UA gets the same 326 KB page in 0.2 s. Page created 11 Apr 2026 → 5 months discovered but never crawled = crawl deprioritisation (site-quality / authority signal), not a technical block.
- This explains the page's zero rankings; the earlier 29 "impressions" were anchor-text sitelinks for "zonic media".
- Note: 11 Review-snippet items on a self-serving service page — Google does not show self-serving review rich results; harmless for indexing but worth removing later.
- Plan: deploy today's changes (20 posts now link the page contextually), request indexing again after deploy, get one or two external links to the URL (GBP website field / post, LinkedIn), check inspection again in 7 days. Same cause behind the 21 "discovered" URLs incl. the 3 marketing-agency pages.

## 9 Sept — Search Console indexing report worked through (user lifted the freeze for this)
Lists pulled from GSC (last update 4 Sept):
- **Discovered – currently not indexed (21):** gmb-reinstatement-help, google-ads, web-design, philadelphia/digital-marketing, industry: dental-seo-services, local-seo-for-roofing-companies, local-seo-for-window-and-door-companies, local-seo-services-for-hvac, local-seo-services-for-residential-cleaning, seo-services-for-pest-control, seo-services-for-plumber; chiropractic/dental/general-contractor marketing-agency; 5 free-website offer landers; 2 blog posts. All linked from the homepage/nav and in the sitemap (lastmod 7 Sept) → crawl deprioritisation, not a technical block.
- **Page with redirect (27, validation failed 22 Aug):** apex `zonicllc.com/...` URLs, `http://` roots, and old www URLs (`/services/industry/car-towing`, `/who-we-help/...`, `/company`, `/home-inspector-marketing-agency/{texas,north-carolina}`) — all redirect correctly; no internal links point at them.
- **Crawled – not indexed (13):** 5 `_next/static` asset URLs (harmless), cleaning-company offer lander, old apex/WordPress URLs (`/services/gmb-optimization`, `/thank-you`, `/company/our-partners/`, `/service/google-my-business/...`, `/who-we-help/...`).
- **Blocked by robots.txt (2):** `/coming-soon` (intentional) and `/legal/terms-conditions` — stale: robots.txt stopped disallowing /legal on 26 May; page is 200, index,follow, in sitemap.
- **Excluded by noindex (1):** `zonicllc.com/blog/2025/10/30` (old WP archive, now 301 → /blog).
- **Duplicate, Google chose different canonical (1):** `/home-inspector-marketing-agency/california` (old URL, now 308 → /services/home-inspector-marketing/california).
- **Not found 404 (46):** validation already running since 19 Aug; all now redirect.

Code fix: `src/data/industryMarketingPages.generated.json` — 13 links on the generated industry marketing-agency pages pointed at the redirecting `/services/gmb-optimization`; now point at `/local-seo-google-business-optimization` directly (no redirect hop for crawlers).
GSC actions: validation started on Discovered (9 Sept), new validation on Page with redirect, robots, noindex, crawled-not-indexed; Request indexing on the core discovered pages (see chat). Reinstatement page already had a request today; live test = "URL is available to Google".
Done in GSC on 9 Sept (via browser): validation started on "Discovered – currently not indexed" (21) and a new validation on "Page with redirect" (27 pending); "Request indexing" accepted ("added to a priority crawl queue") for /services/gmb-reinstatement-help (by user), /services/google-ads (inspection said "URL is unknown to Google"!), /services/web-design, /services/philadelphia/digital-marketing, /services/industry/seo-services-for-plumber. Later the same day: Validate fix also started on robots.txt, noindex and crawled-not-indexed rows (needed a 14 s wait after page load before the click registered). Request indexing for local-seo-services-for-hvac, seo-services-for-pest-control, local-seo-for-roofing-companies, dental-seo-services, local-seo-for-window-and-door-companies, local-seo-services-for-residential-cleaning, chiropractic/dental/general-contractor marketing-agency (spread over 2 days, ~10/day quota).
Update (same afternoon): user asked for all requests today. Indexing requested and confirmed ("added to a priority crawl queue") for the remaining nine as well: local-seo-services-for-hvac, seo-services-for-pest-control, local-seo-for-roofing-companies, dental-seo-services (inspection: "URL is unknown to Google"), local-seo-for-window-and-door-companies, local-seo-services-for-residential-cleaning, chiropractic-marketing-agency, dental-marketing-agency, general-contractor-marketing-agency. Total today: 14 URLs (5 earlier + 9 now); one "Quota exceeded" dialog appeared only on an accidental repeat request, new URLs kept being accepted. Still user-owned: Validate fix on robots/noindex/crawled rows; commit + deploy; re-inspect the reinstatement page on 16 Sept.
Update: "Validate fix" now started (9 Sept) on the remaining three rows too — Blocked by robots.txt (2), Excluded by noindex (1), Crawled – currently not indexed (13). Every row in the Page indexing report is now either validating or already running (404s since 19 Aug). Nothing left for the user in GSC today except commit + deploy and the 16 Sept re-check.

---

# 9 September 2026 (evening): deploy check, indexing status, duplicate-canonical validation, 1,500+ figure

## 1. User: are the last changes pushed live?
Verified: working tree clean, local `main` = `origin/main`. Commits: `e751800` (8 Sep 14:46 — nav/footer/CWV), `5fb7b65` (9 Sep 13:48 — blog contextual links to the reinstatement page, 700+→900+ across 33 files, llms files), `a5d2aec` (9 Sep 15:07 — 13 industry-page links off `/services/gmb-optimization`, plus this doc). Live fetch of www.zonicllc.com confirmed every item: homepage/reinstatement page 13× "900+" and 0× "700+", nav renders 0 `<h2>`, footer badge served as .webp (0 png), step-by-step GBP post carries the two contextual anchors ("GBP reinstatement process", "Google Business Profile reinstatement support"), 0 `tel;` hrefs, chiropractic marketing-agency page 0 links to the old GMB-optimization URL and 3 to `/local-seo-google-business-optimization`, llms.txt says 900+. Production deployment therefore = HEAD.

## 2. User: are the indexing fixes done?
**Site side (all verified live, Googlebot UA):**
- All 21 "Discovered – currently not indexed" URLs + all 21 offer landers: 200, `index, follow`, self-canonical, in sitemap, no X-Robots-Tag.
- Old URLs: apex root / http root / apex deep paths → single 308 to www; `/services/gmb-optimization` → 308 → `/local-seo-google-business-optimization`; `/home-inspector-marketing-agency/{california,texas}` → 308 → `/services/home-inspector-marketing/…`; `/blog/2025/10/{15,30}` → 308 → `/blog`; `/services/industry/car-towing` → 308 → `…/seo-services-for-car-towing`; `/company` → 308 → `/about`; `/company/our-partners/` → home; old WordPress reinstatement URL → 308 → `/services/gmb-reinstatement-help`. `/thank-you` = 200 but disallowed in robots (intentional).
- `/legal/terms-conditions`: 200, index,follow, in sitemap; robots.txt only disallows /coming-soon, /admindashboard, /404, /thank-you, /api/.
- Crawl of all 194 sitemap pages: 0 noindex, 0 links to apex or http URLs, 0 links to any URL from the GSC report, canonical mismatch only on the root (canonical without trailing slash — harmless). 190 distinct internal paths; only 4 still hit a redirect (not in the GSC report):
  - `/blog/your-gbp-reinstatement-was-denied-what-to-do-next` and `/blog/after-gbp-reinstatement-request` (linked from posts gbp-reinstatement-denied-next-steps, gbp-reinstatement-for-roofing-contractors), `/blog/what-happens-after-you-submit-a-gbp-reinstatement-request` (linked from 5 reinstatement posts) — CMS post bodies, not code; all 308 via blogRedirects.json.
  - `/services/industry/pest-control` (308 → `…/seo-services-for-pest-control`) — code: `services/home-inspector-marketing/page.tsx:1073` and `StatePage.tsx:726` (6 live pages). Not fixed yet (user to decide; page freeze until 7 Oct).
**Google side (GSC domain property `sc-domain:zonicllc.com`, read 9 Sep evening):** last update still 4 Sep; Indexed 180 / Not indexed 111. Validation: Not found 404 (46) Started since 19 Aug; Page with redirect (27) Started; Discovered (21) Started; Crawled (13) Started; Blocked by robots (2) Started; noindex (1) Started; Duplicate, Google chose different canonical (1) was **Not started** → see §3. Validation normally takes 1–4 weeks; nothing will move in the counts before then.
Note: the Google account signed into Chrome has access only to the domain property, not the `https://www.zonicllc.com/` URL-prefix property ("you don't have access"). The domain property covers everything.

## 3. User: "fix this one and start it also" (duplicate-canonical row)
Affected URL = `https://www.zonicllc.com/home-inspector-marketing-agency/california` (first detected 18 Oct 2025). Already fixed in code (308 to `/services/home-inspector-marketing/california`, no internal links to the old URL), so no code change. Clicked **Validate fix** in GSC → "Validation started · 9/9/26". Every row of the Page indexing report is now validating.

## 4. User: "make the number 1500+ everywhere" (profiles optimized)
The "Google Business Profiles optimized" statistic (deliberately left at 700+ on 9 Sep morning) changed to **1,500+** (site number style with comma, matching about page, services page, llms.txt): `src/app/(main)/industries/page.tsx` stats ticker; solar and septic `pageData.ts` (ticker, trustbar, body stat); `src/data/industryMarketing/template.ts` (same three spots); `src/data/industryMarketingPages.generated.json` (13 pages × ticker, trustbar, body stat). 0 "700+" strings remain in src/public; `tsc` clean; JSON valid. Site is now consistent: 900+ reinstated/verified, 1,500+ optimized. **Uncommitted — user commits + deploys.**

## Open after this session
- Commit + deploy the 1,500+ change (5 files).
- Optional: repoint the `/services/industry/pest-control` link (2 code files) and the 3 old blog slugs (CMS) so no internal link hits a redirect.
- 16 Sep: re-inspect `/services/gmb-reinstatement-help` in GSC. ~23 Sep: check the Page indexing report for first validation results. Rerun Semrush Site Audit (its crawl is still 5 Sep).

---

# 9 September 2026 (late): Semrush Site Audit issues — verified against live, then items 1–4 fixed

User shared a screenshot of Site Audit (campaign 30675049) showing 2 errors, 2 warnings, 5 notices, asked which are fixed on live and which still need work, then: "ok do only 1, 2, 3, 4". All data pulled via the Semrush MCP: snapshot `6a9c2009360b06655cb5c3fa` (finished 5 Sept 2026, **pre-deploy**; health 95%, 212 pages crawled). Nothing clears in Semrush until the campaign is rerun.

## Status of the 9 issues (live check 9 Sept evening, post-deploy crawl of all 194 sitemap pages)
| # | Issue (5 Sept) | Live today | Verdict |
|---|---|---|---|
| 1 | 2 pages 4XX (`/blog/tel;(302) 726-9736`, `/blog/tel; (302) 726-9736`) | 0 `tel;` hrefs, 906 `tel:+13027269736` | Fixed 7 Sept (render-time normaliser) — needs recrawl |
| 2 | 2 broken internal links (same two, from gbp-reinstatement-denied-next-steps and how-to-get-more-local-business-leads…) | gone | Fixed — needs recrawl |
| 3 | 134 pages low text-HTML ratio (Semrush threshold ≤10%; reinstatement page 0.09, chiro 0.08) | still 134 of 194 under 10% (my measure 8.9% / 7.9%) | **Not fixed**. Cause per page: nav 108 KB, inline SVG 77–117 KB, Next.js RSC payload 37–58% of HTML. Without the SVG the ratios would be 22–29%. Lever = nav icon sprite + deferred mega-menu panels (design change). Not requested. |
| 4 | 2 pages duplicate H1/title (how-to-turn-google-map-pack-views…, how-to-get-more-local-business-leads…) | titles differ from H1 (commit af49346, 7 Sept) | Fixed — needs recrawl |
| 5 | 166 nofollow external links (all `clutch.co/profile/zonic-media?badge=11431`) | 208 links on 165 pages, from our own `rel="nofollow noopener noreferrer"` | Fixed now (item 4 below) |
| 6 | 85 pages "require content optimization" (AI Search check: poor heading hierarchy / long paragraphs / low readability; errorType 1) | unchanged | **Not fixed** — copy editing page by page; left for after the 7 Oct freeze. Not requested. |
| 7 | 53 URLs permanent redirect | 15 links left: `/services/industry/pest-control` ×6 (home-inspector pages) + 3 retired blog slugs ×9 | Fixed now (item 2 below) |
| 8 | 5 pages with only one incoming internal link | those 5 posts had **0** inbound from sitemap pages; overall 9 posts with 0, 4 with 1 (blog index links only 6 of 39; related block never reached older posts) | Fixed now (item 1 below) |
| 9 | llms.txt formatting issues (errorType 3) | About section held 10 non-link bullets; free-text lines under 3 H2s; no `---` rules | Fixed now (item 3 below) |

Root cause found for 7 and 8: the four merged posts in `src/data/blogRedirects.json` (how-long-gbp-reinstatement-takes, what-happens-after-you-submit-a-gbp-reinstatement-request, after-gbp-reinstatement-request, your-gbp-reinstatement-was-denied-what-to-do-next) are **still published in the CMS**, so the blog index (43 posts vs 39 in the sitemap), the "Related guides" block and the "Recent Posts" sidebar kept linking to them. The old-slug links Semrush saw came from the related block, not from article bodies.

## Changes made (uncommitted — user commits + deploys)
1. **Blog internal links** — `src/backend/lib/blogs.ts`: `getPublishedBlogsUncached` now queries `slug: { $nin: retired }` (retired = keys of blogRedirects.json), so retired posts never reach the homepage cards, blog index, related/recent blocks or sitemap. `src/shared/blogContent.ts`: `pickRelatedPosts` adds a "coverage ring" — the posts published immediately before and after the current one are always linked (4–6 related links per post). `src/app/(main)/blog/page.tsx`: server-rendered "All guides" list of every post under the card grid (the grid paginates client-side, 6 per page, so only 6 posts had a crawlable link from /blog); styles appended to `src/app/style/BlogPage.css` (`.bp-index*`). Simulation with the live 39-post list: before = 9 posts with 0 inbound / 4 with 1 (matches Semrush); after = every post ≥3 inbound (index + 2 ring + scored).
2. **Redirect links** — `home-inspector-marketing/page.tsx` + `StatePage.tsx`: `/services/industry/pest-control` → `/services/industry/seo-services-for-pest-control`. `blogContent.ts`: new `rewriteRetiredBlogLinks(html)` rewrites `href="/blog/<old-slug>"` (also absolute www/apex forms, trailing slash/query/hash kept) from blogRedirects.json; applied in `blog/[slug]/page.tsx` after `canonicalizeHostLinks`. Plus the retired-post exclusion above.
3. **llms.txt** — `public/llms.txt` restructured to the llmstxt.org format: the 10 About facts moved above the first H2 as paragraphs (Last updated → 2026-09-09); "About" now holds only its 2 links; the three intro sentences under Industry Website Design / Industry Marketing Agencies / State Pages dropped; "State Pages" split into `## HVAC Marketing by State`, `## Plumbing Marketing by State`, `## Home Inspector Marketing by State`. Result: 1 H1, 1 blockquote, 13 H2, 139 link items, 0 non-link content after the first H2. `public/llms-full.txt` rebuilt with `node scripts/build-llms-full.mjs`.
4. **Nofollow** — `rel="nofollow noopener noreferrer"` → `rel="noopener noreferrer"` on the Clutch profile link in 39 files (Footer, HeroTrustBadges, IndustryMarketingPage, PhlLocationLanding, TseoLanding, homepage, reinstatement page, Delaware DM, travel/tourism, 4 Philadelphia pages, 27 industry SEO pages). 0 `nofollow` left in src.

## Verification
`tsc` clean; `next build` clean (173 static pages); local `next start` checks: /blog = 39 distinct post links + "All guides" index, 0 retired slugs; five posts (denied-next-steps, step-by-step, roofing guide, deceptive-content, keyword-stuffing) = 5–6 related links, 0 retired slugs, 0 `tel;`, 0 nofollow; old slug `/blog/after-gbp-reinstatement-request` still 308s; home-inspector pages 0 old pest-control links; homepage/reinstatement/chiro/Philly pages 0 nofollow with Clutch links intact; llms.txt 200; sitemap (after its 5-minute ISR window) = 194 URLs incl. 39 posts, 0 retired slugs — identical to live. Note: in this sandbox the DB is unreachable at *build* time (DNS SRV), so the build-time sitemap prerender is empty locally until ISR regenerates it; irrelevant on Vercel.

## Still open (not requested)
- Item 5 text-HTML ratio (134 pages) — nav sprite / deferred mega menu.
- Item 6 content optimization (85 pages) — copy editing after 7 Oct.
- After deploy: rerun the Semrush Site Audit campaign; expect errors 2→0, warnings 136→134, notices: nofollow 166→0, redirects 53→0, one-incoming-link 5→0, llms.txt 1→0.

## 9 Sept (late) — correction: three "merged" posts were real articles wrongly redirected since 27 Aug
User asked whether the four retired posts are still in the blog admin. They are (all four still `published`). Comparing titles, excerpts and dates on the live /blog payload showed only one true duplicate:
| Retired slug | Its title (date) | Redirected to | Same article? |
|---|---|---|---|
| your-gbp-reinstatement-was-denied-what-to-do-next | Your GBP Reinstatement Was Denied: What to Do Next (14 Jul) | gbp-reinstatement-denied-next-steps — same title + opening (15 Jul) | Yes |
| after-gbp-reinstatement-request | What Happens After You Submit a GBP Reinstatement Request? (13 Jul) | how-long-does-google-business-profile-reinstatement-take-in-2026 | **No** |
| what-happens-after-you-submit-a-gbp-reinstatement-request | How to Write a GBP Reinstatement Appeal That Google Reviewers Approve (7 Jul) | same | **No** |
| how-long-gbp-reinstatement-takes | How Long Does Google Business Profile Reinstatement Take in 2026? (8 Jul) | same | **No** |
The redirect target's slug reads "how long…" but its H1/body are "What Documents Does Google Actually Accept for GBP Reinstatement in 2026?" (3,400 words). The three redirects were added on 27 Aug (commit f0fabe4) by slug similarity and moved into blogRedirects.json on 3 Sept; on 7 Sept the title override in `blogSeoOverrides.ts` gave the documents post the title "How Long Does Google Business Profile Reinstatement Take?". Net effect since 27 Aug: three reinstatement articles unreachable (308 → an unrelated post) and the documents post carrying a wrong title — in the cluster that holds most of the site's impressions. The earlier note above calling them "four merged posts" was wrong.

**Fix applied (user: "do it", no deleting):**
- `src/data/blogRedirects.json` → only `your-gbp-reinstatement-was-denied-what-to-do-next → gbp-reinstatement-denied-next-steps` remains. Because next.config redirects, the sitemap exclusion, the public-list `$nin` filter and `rewriteRetiredBlogLinks` all read this file, the three posts come back everywhere automatically.
- `src/shared/blogSeoOverrides.ts`: documents post → title "What Documents Does Google Accept for GBP Reinstatement?" (56) + matching description; the "how long" title/description moved to `how-long-gbp-reinstatement-takes`; new overrides for `after-gbp-reinstatement-request` ("What Happens After You Submit a GBP Reinstatement Request?", 58) and `what-happens-after-you-submit-a-gbp-reinstatement-request` ("How to Write a GBP Reinstatement Appeal That Gets Approved", 58). All descriptions 141–150 chars.
- Nothing unpublished or deleted; the old "denied" copy keeps forwarding.

**Verified (local production build, run outside the sandbox because its DNS blocks the Atlas SRV lookup):** the three restored URLs = 200, index/follow, self-canonical, new titles; documents post title now matches its H1; denied old slug still 308; /blog = 42 distinct post links incl. the three; prerendered sitemap = 42 posts, no denied slug; "Related guides" on the step-by-step post now links the restored appeal post directly.

**After deploy (user):** GSC → URL inspection → Request indexing for `/blog/how-long-gbp-reinstatement-takes`, `/blog/after-gbp-reinstatement-request`, `/blog/what-happens-after-you-submit-a-gbp-reinstatement-request`; optional later CMS tidy-up: give the appeal post a slug that matches its title (with a redirect from the current one).

## 9 Sept (late) — deployed; indexing requested for the restored posts
Live check after the user's deploy: all three restored URLs 200 with the new titles; documents post title "What Documents Does Google Accept for GBP Reinstatement?"; the old "denied" slug still 308s; live /blog lists 42 posts.
GSC URL inspection (domain property, via browser): all three were still "URL is on Google · Page is indexed" (Google had not yet processed the 27 Aug redirects), so "Request indexing" was the right action.
- `/blog/how-long-gbp-reinstatement-takes` → "Indexing requested · added to a priority crawl queue" ✔
- `/blog/after-gbp-reinstatement-request` → "Indexing requested" ✔
- `/blog/what-happens-after-you-submit-a-gbp-reinstatement-request` → **"Quota Exceeded"** (daily request quota used up by today's 14 earlier requests + these two). **To do 10 Sept:** request indexing for this URL. It is live, indexable and in the sitemap regardless, so nothing is blocked.
Note: the direct deep link `search-console/inspect?resource_id=…&id=<url>` returns a Google 404; use the "Inspect any URL" box on the property instead.

## 9 Sept (night) — Semrush rerun reviewed; old-address links fixed in the CMS; duplicate title fixed
Semrush snapshot `6aa13acd360b06655cfb7411` (rerun after the evening deploy): health 95→98%, errors 4→0, warnings 140 (139 low text-HTML + 1 duplicate H1/title), notices 2 (72 content-not-optimized, 22 permanent-redirect links). Cleared: 4XX, broken links, nofollow (166→0), one-incoming-link (5→0), llms.txt format.
**AI search:** not blocked. robots.txt allows every AI crawler; each of the 10 bots in Semrush's "Blocked from AI Search" panel (Googlebot, Google-Extended, ChatGPT-User, OAI-SearchBot, GPTBot, PerplexityBot, Perplexity-User, Claude-User, Claude-SearchBot, ClaudeBot) fetched a service page with 200, no X-Robots-Tag, meta index/follow; no noai directives; Semrush "Blocked: 0", AI Search Health 92%.
**Duplicate H1/title (1):** `/blog/after-gbp-reinstatement-request` — my own override from earlier tonight matched the H1 exactly. `blogSeoOverrides.ts` title → "GBP Reinstatement Request Submitted: What Happens Next?" (55). Code, uncommitted — goes out with the next deploy.
**22 permanent-redirect links:** all inside article bodies stored in the CMS as absolute URLs (why the earlier relative-href crawl missed them): 19 posts → `https://www.zonicllc.com/services/gmb-optimization`; deceptive-content post → `/service/web-design` and `/contact`; competitor-flags post → `/services/`. A direct DB scan found 22 posts / 23 links (the 21 Semrush saw + the hidden old "denied" copy).
Fix, on the user's instruction, done **through the admin**: from the logged-in admin dashboard, each affected post was loaded via `GET /api/admin/blogs/:id` and saved via `PATCH` with only `descriptionHtml` changed (the same calls the Edit-blog form makes, so validation and `revalidatePublicBlogCache` ran). Swaps: gmb-optimization → `/local-seo-google-business-optimization`, `/service/web-design` → `/services/web-design`, `/contact` → `/contact-us`, `/services/` → `/services`. Backup of the 22 original documents: `/private/tmp/claude-501/-Users-niteshmaan-Desktop-zonic-media/030e7b0a-1787-43db-98d2-93dd51b7214e/scratchpad/blog-backup-2026-09-09T12-25-50-630Z.json`.
Verified: admin list = 0 of 43 posts with an old address; live = all 22 posts fetched, 0 old-address links, new links present; DB vs backup = all 22 bodies equal the backup with only the link swaps applied, every other field (title, slug, status, FAQs, date, image) untouched. Expected next Semrush crawl: redirects 22→0, duplicate H1/title 1→0 (after deploy).
Still open: 139 low text-HTML ratio (nav sprite / mega-menu), 72 content-not-optimized (copy), GSC indexing request for the appeal post on 10 Sept (quota).

---

# Audit — 15 September 2026 (read-only; report first, changes on command)

User asked for a full SEO audit "from the last changes till now" (GSC via Chrome, Semrush MCP, seo-check plugin), top/trending queries, AI visibility, US-only focus. **No website, CMS, GSC or Semrush change was made.** Report artifact: "Zonic Media Mid-September Audit".

## State (GSC to 12 Sep, Semrush to 14 Sep)
- GSC 28d: 143 clicks / 133K impr / 0.1% / pos 30.7 (prev 111 / 92K / 0.1% / 28.4). **US: 49 clicks / 119K impr / 0.04% / pos 31.3** (prev 50 / 80.6K / 29.8). India 46 clicks, "zonic media" brand 33. US 3-month: 139 clicks vs 54, 269K impr vs 10.8K.
- Generative-AI impressions 3,040 vs 3,260 (first drop). Semrush AI panel: WW 29 / US 14, 14 mentions (ChatGPT 1/5, AIO 2/3, AI Mode 2/6, Gemini 1/6); top cited sources zonicllc.com 2, walmart.com 1, viamark.com 1.
- Semrush daily: keywords 812 (15 Aug) → 1,492 (14 Sep); top10 41→53; top3 4→6; est traffic 134→127; AIO keywords 554→1,079. PT (Sep 8–15): visibility 3.22%, −5.01, 45 up / 35 down of 108 (campaign detail page errored twice in Chrome).
- Backlinks 1,451 / 196 domains / AS 9 (Aug: 850 / 146). **Spam network still active, anchors last seen 14 Sep** (37 domains per look-alike variant); new ref domains 9–14 Sep are backlink sellers / casino / domraider.*. "google business profile optimization" and "roofing seo" anchors: 39 domains each, identical first/last-seen (4 Jun → 14 Sep) = purchased package signature. 130 of 196 domains AS ≤6. Legit new: goodfirms.co (49, 11 Sep), allbusiness.com (42), ypages.us (29).
- Indexing: 180 / 111 unchanged; all 7 validations "Started". **`/services/gmb-reinstatement-help` still "Discovered – currently not indexed", last crawl N/A, referring page still `/services/gmb-optimization`** — 6 days after the priority request. Sitemap read 13 Sep, 197 URLs. Apex `zonicllc.com/services/local-seo-for-home-services` still gets 20 clicks/28d (308 live, not consolidated yet).
- Site Audit (10 Sep snapshot): health 98, 0 errors, 139 warnings (text ratio), 72 notices, 4 redirected links.
- Live crawl 201 URLs (Googlebot UA, seo-check checklist): all pass title/desc/H1/canonical/schema/OG; 0 real titles >60 after entity decoding; dental-website-design 2 img no alt; refund-policy desc 161; 39 pages >400KB HTML (home 582KB); median 4,125 words; median TTFB 419ms.
- Lighthouse 12 mobile home (1 run): perf 65, LCP 5.3s (hero subtitle text), FCP 3.0s, TBT 270ms, SI 6.0s, 1.5MB, render-blocking 764ms, unused JS 221KB, DOM 2,364. GSC CWV: no field data.
- Top US impressions (all 0 clicks): sem agency 1,566 (pos 31, philly/sem), seo for electricians 895, digital marketing 594, plumbing marketing agency 589, seo companies in kent 538 + seo services in kent 511 (**UK intent — footer prints "Dover, Kent, DE"**), real estate seo company/services/agency 1,543 (pos 21–29), philadelphia seo company 483 (pos 15).
- Rankings: philadelphia seo company #15, seo agency philadelphia #14, real estate seo company #21, landscaping seo company #12, chiropractor seo services #19, general contractor seo #25, local seo nyc #28, sem agency #31. Lost: chiropractor seo agency (15), digital marketing agency for chiropractors (31). Fell: local seo philadelphia 21→32.
- Trending (12-mo trend at peak now): ai seo agency/services/company (KD 28/43/28), GEO services 1,900 KD 23, ai search optimization services 480 **KD 8**, AEO services 590 KD 37, gmb optimization service 590 KD 10, gbp reinstatement 110 KD 10, roofing/hvac/plumbing/pest-control marketing agency, digital marketing agency for small business 2,900 KD 25 (spike), law firm seo company 2,900 KD 14. New question: "how to add faq to google business profile" 260 KD 0.

## Diagnosis
1. Spam links still growing daily → disavow (A1). 2. Reinstatement page is a stuck URL → new URL + 308 + external links (A2/A3). 3. "Dover, Kent, DE" footer pulls UK Kent queries (B1). 4. Page-2 ceiling on every money term = authority; directories on those SERPs (A4). 5. Mobile LCP 5.3s (lab only).

## Proposed plan (nothing started)
A (off-site, inside freeze): A1 disavow file via Semrush export + GSC upload; A2 move reinstatement page to `/services/gbp-reinstatement-service` with 308 (needs yes); A3 user: GBP website field + LinkedIn link; A4 user: DesignRush/UpCity/Manifest/Sortlist/Semrush Agency/GoodFirms claim; A5 request indexing restored posts + 3 marketing-agency pages.
B (text/meta/schema only): B1 footer address; B2 Philly SEO lede/proof/FAQ; B3 real-estate title back to the 7-Sep phrasing that held #1; B4 Philly SEM title toward "SEM Agency"; B5 AI SEO page add "ai search optimization services" + GEO; B6 GBP optimization H1 keyword; B7 electricians/plumbing/law-firm/HVAC/roofing/pest H1+lede alignment; B8 reinstatement price line + drop 11 self-serving review snippets; B9 alts + refund desc.
C (AI visibility): C1 user: Crunchbase, Wikidata, LinkedIn About, Bing Places; C2 user: Reddit/Whitespark/BrightLocal + 2 round-ups; C3 answer-first ledes on 7 AI-cited pages; C4 weekly tracking.
D (content): 4 posts/month from the question list.
Decisions asked: were links bought? may the reinstatement URL move? which phases to start?

## 15 Sept — backlink report PDF (user: "give me a pdf … only the backlinks one")
Delivered `~/Downloads/Zonic-Media-Backlink-Report-2026-09-15.pdf` (13 pages, printed from scratchpad `backlinks-report.html` with headless Chrome). Sections: profile numbers (1,451 links / 196 domains / AS 9; 130 domains AS ≤6; Moldova 16 domains / 197 links), 6-month growth table, four findings, what is fine, competitor comparison, how Google counts links, options A/B/C with positive/negative impact, will-the-disavow-hurt table, do / do-not lists, earned-link plan (40–50 domains in 6 months), KPIs, Appendix A disavow candidate domains, Appendix B never-disavow list.
**Correction to the 15 Sept audit:** the "roofing seo" and "google business profile optimization" 39-domain anchors are NOT a bought package — they are an EIN Presswire press release ("Roofing contractors are losing thousands in revenue…", 4 June 2026) syndicated to newsnetmedia/lifestyle.* partner sites, all nofollow. Harmless, low value, keep; not to be disavowed. The spam network ("… buy backlinks online cheap" anchors, template pages `/all/3345/15.html`, page authority 0, follow, last seen 15 Sep) stands as found.
User Q&A same day: removing "Kent" from the footer does not affect UK visibility (UK 90d = 5.59K impr / 13 clicks, top UK queries are gmb reinstatement / electrician local seo, not Kent); keep the `/local-seo-google-business-optimization` URL, fix only the H1; Pakistan/India clicks come from reinstatement posts and do not hurt US position; more backlinks ≠ better (one domain = one vote; gmbgorilla 1,814 links / 730 domains / AS 28 vs Zonic 1,451 / 196 / 9).

## 15 Sept — reinstatement page moved to a new URL (user: "okk so fix it")
Reason: `/services/gmb-reinstatement-help` had been "Discovered – currently not indexed" with no crawl ever since 11 Apr, still unfetched 6 days after the 9 Sept priority request → treated as a stuck URL. Backlink cleanup deliberately deferred by the user ("leave the backlinks part, will fix it later").
Code (uncommitted, 118 files):
- `git mv src/app/(main)/services/gmb-reinstatement-help → gbp-reinstatement-service` (page unchanged; title/H1 unchanged; canonical, schema `@id`/`url`, breadcrumb, RelatedServices `current` now the new path).
- `next.config.ts`: new 308 `/services/gmb-reinstatement-help → /services/gbp-reinstatement-service`; the four existing redirects that pointed at the old path (old WP reinstatement URL, `/gmb-reinstatement-service-agency`, `/services/google-my-business`, `/blog/google-business-profile-suspension-guidelines-2025`) now go straight to the new path (single hop).
- 116 files repointed (Navbar ×5, Footer, home ×4, services hub, GBP-optimization page, RelatedServices, BlogMidArticleCta, all industry/state/website-design pages and pageData, sitemap.ts, `blogContent.ts` REINSTATEMENT_SERVICE_PATH, `leadsController.ts` template set keeps both paths).
- Render-time rewrites for CMS bodies: `blogs.ts` `rewriteMovedServiceLinks()` applied in `toPublicBlog` (covers home cards, blog index, post pages); `blogContent.ts` `canonicalizeHostLinks` also maps the old path. Live homepage previously embedded two post bodies linking the old path.
- `public/llms.txt`, `llms/gmb-reinstatement.md` updated; `llms-full.txt` rebuilt via `scripts/build-llms-full.mjs`. `sitemapLastmod.generated.json` entry set to 2026-09-15 (only this page; re-run the lastmod script after commit if desired).
Verified on local `next start` (production build, 173 pages): old URL → 308 → new; old WP URL → 308 → new (one hop); new URL 200, `index,follow`, self-canonical, title unchanged; 0 `gmb-reinstatement-help` strings in home / blog index / step-by-step post / denied-next-steps post; home has 6 links to the new path; sitemap lists the new URL (lastmod 2026-09-15) and not the old; `tsc` clean. One build attempt failed on a transient Atlas DNS SERVFAIL; the retry built clean.
After deploy (user): GSC URL inspection on `/services/gbp-reinstatement-service` → Request indexing; "Validate fix" again on the Discovered row; GBP website field / GBP post + LinkedIn post linking the new URL; re-inspect 22 Sept. Optional: update the CMS post bodies that still hold the old absolute URL (render-time rewrite already covers live output).

## 15 Sept — Phase B applied (user: "do complete phase B fixes"); text / metadata / schema only, no new sections, no styles
(The reinstatement URL move was committed by the user as 72fcf93 "gmb url update" before this.) 21 files, uncommitted:
- **B1** "8 The Green, STE B Dover, Kent, DE 19901" → "… Dover, DE 19901" in `siteConfig.ts` (footer on every page), 5 industry page components with their own footer (car-towing, chiro, law-firms, residential-cleaning, commercial-cleaning), `conditions/terms.json`, `conditions/policy.json`. 0 "Kent" left in rendered HTML. Schema `addressRegion: DE` untouched.
- **B2** Philadelphia SEO: hero lede rewritten answer-first ("Looking for the best SEO company in Philadelphia for a local business? … rated 5.0 on Clutch from 21 verified reviews, 900+ GBPs … from Fishtown to the Main Line"); "Real Results" lede names South Philly, Center City, Fishtown, Manayunk, University City, Northeast Philly, Main Line; FAQ "What's included in your Philadelphia local SEO service?" → "What's included when you hire Zonic Media as your Philadelphia SEO company?" (feeds FAQPage schema). Title unchanged.
- **B3** Real estate: git history shows title/H1 did NOT change on 7 Sept (only body text), so the "title back" item was moot. H1 "Real Estate SEO Experts That Win More Leads" → "Real Estate SEO Company That Wins More Leads" (query phrasing). Title unchanged (60).
- **B4** Philly SEM: title → "SEM Agency Philadelphia | Search Engine Marketing Services" (58, OG same); lede now opens "Zonic Media is an SEM agency in Philadelphia: one search engine marketing team…"; keyword "sem agency" added.
- **B5** AI SEO: title → "AI SEO Agency | AI Search Optimization, GEO & AEO Services" (58, OG same); keywords + "ai seo company", "ai search optimization services"; services H2 → "AI Search Optimization Services: Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), Run as One Program"; FAQ Q1 → "What are AI SEO services and AI search optimization services?" (answer opens with the phrase), Q2 → "…answer engine optimization (AEO) and generative engine optimization (GEO) services?"; hero sentence "US AI SEO agency and AI SEO company offering AI search optimization services".
- **B6** GBP optimization H1 → "Google Business Profile Optimization Service: Rank #1 Outside Your Front Door — and Three Miles Away." (was keyword-less "You Rank #1 Outside Your Own Front Door…").
- **B7** Electricians H1 "Local SEO for Electricians…" → "SEO for Electricians That Books More Jobs", lede "electrician SEO company … electricians and electrical contractors"; law firms H1 → "Law Firm SEO Company That Wins Clients", lede "law firm SEO company … solo and small firms", keyword added; plumbing lede "As a plumbing marketing agency, we help…"; HVAC lede "As an HVAC marketing agency, we help…"; roofing + pest-control generated `heroHtml` leads now open "A roofing/pest control marketing agency running local SEO…" (H1s already carried the phrase).
- **B8** Reinstatement lede gains the decision line "900+ profiles reinstated, a typical 5–7 business day turnaround, a free suspension audit first, and No Fix, No Charge on the reinstatement fee."; FAQ "What makes Zonic Media one of the best…" → "Which companies help with Google Business reinstatement, and why choose Zonic Media?" with a one-sentence answer prefix. **No dollar prices added** — the page carries none today and the user has not confirmed figures. **Review snippets not removed** — no Review/AggregateRating schema exists in the code; GSC's 11 review snippets come from the third-party Trustindex widget script (design element, left alone).
- **B9** Refund-policy meta description 161 → 149 chars (`legal/[slug]/page.tsx`). Dental website-design "missing alts" are `alt=""` + `aria-hidden` on two decorative hero images — correct as-is, no change.
- `sitemapLastmod.generated.json`: 13 edited routes set to 2026-09-15.
Verified (tsc clean, `next build` 173 pages, local `next start`): all 12 titles ≤60 and as intended, H1s as listed above, footer "Dover, DE 19901" on home (12×) and law page (6×), 0 "Dover, Kent", refund description 155 chars in HTML (149 raw), Philly lede + FAQ live, AI SEO H2 + FAQ live, reinstatement lede live.
Not done / deferred: templated-family differentiation (≈30 pages, content work), Phase C answer-first ledes, Phase D posts, backlinks (user deferred).

## 15 Sept — review snippets + image alts (user: "fix this review snippet and img alt also")
- **Review snippets:** confirmed in Chrome on the live reinstatement page that the Trustindex loader injects a 14 KB `<script type="application/ld+json">` into `<head>` with `Product → AggregateRating → Review` (the "11 review snippets" and "1 product snippet" in GSC). No such schema exists in our code. Fix in `src/app/components/LenisIframeGuard.tsx` (the only place the Trustindex loader is mounted — reinstatement page + GBP optimization page): a MutationObserver (childList + characterData, whole document) plus timed rescans removes any ld+json node whose text contains `"@type":"Review"` or `"AggregateRating"`. First version only inspected added nodes and missed it because Trustindex appends an empty script and fills the text afterwards. Verified on local prod build in Chrome: 8 ld+json nodes → 7, review node gone, other schema untouched.
- **Finding while testing:** the Trustindex widget renders **nothing** on the live page either — `.gmb-reinst-google-reviews` holds only an empty div and the overlay; 0 iframes, 0 `.ti-widget`. The "Real Businesses, Real Reinstatements" section is an empty panel on live today (same on the GBP optimization page, same loader). Not caused by this change (checked before and after). User decision: fix the Trustindex embed key/domain or remove the section.
- **Image alts:** dental-website-design hero title images were decorative `alt=""` + `aria-hidden`; now `alt="Smiling cartoon teeth with a toothbrush"` and `alt="Smiling patient in a dental chair"`, `aria-hidden` removed from their spans.

## 15 Sept — Phase A run without backlinks (user: "do the phase 1 only leave the backlink part")
GSC (domain property, via Chrome): `/services/gbp-reinstatement-service` inspected = "URL is unknown to Google" (fresh path, live since the 72fcf93 deploy) → Request indexing → "Indexing requested, added to a priority crawl queue". `/blog/what-happens-after-you-submit-a-gbp-reinstatement-request` (quota-blocked on 9 Sept) = already "URL is on Google · Page is indexed" → recrawl requested (title changed 9 Sept). `/services/ai-seo-services` = already indexed; recrawl deliberately NOT requested until the Phase B title/H2/FAQ changes are deployed. Page indexing report: all 7 validations still "Started" (nothing to restart). Automation note: after any request the search box loses focus; the working sequence is navigate to the property overview → coordinate click on the box (twice if needed) → 5 s → type → Enter. A misfired Enter re-submits the current URL ("Request again"), which Google says does not change queue priority.
Still user-owned from Phase A: A3 add the new reinstatement URL to the GBP website field / a GBP post + one LinkedIn post; A4 directory profiles (DesignRush, UpCity, The Manifest, Sortlist, Semrush Agency Partners, claim GoodFirms) with NAP "8 The Green, STE B, Dover, DE 19901". After deploying Phase B: request recrawl for the 12 edited pages (10/day quota). Re-inspect the reinstatement URL on 22 Sept.

## 15 Sept — Phase C3 applied (user: "do the c3 part"); answer-first ledes on the 7 pages Google's AI features already cite
Rule: first paragraph only, same element/class, existing inline links kept, one dated figure ("As of September 2026 …"), no new sections. Figures used are the ones already published site-wide: 50+ local businesses into the map pack, 1,500+ GBPs optimized, 900+ reinstated & verified, 5.0 Clutch / 21 reviews.
- Home `hm-hero-sub`: "Zonic Media is a digital marketing and internet marketing agency in Dover, Delaware, serving businesses across the United States with local SEO, Google Business Profile management, AI search optimization, website design, graphic & logo design, and PPC ads from one team. As of September 2026 … 900+ … 1,500+ … 5.0 on Clutch from 21 reviews — … in the Map Pack, in search, and in the AI answers customers now trust."
- Garage door / pool service (`tseo-hero-sub`): "Zonic Media provides local SEO for … : Google Business Profile optimization, citations, reviews, and service-area pages that put you in the map pack for '… near me.' As of September 2026 we have moved 50+ … into [the Google map pack] and optimized 1,500+ …"
- Real estate: "Zonic Media is a real estate SEO company and agency for agents, teams, and brokerages: … rank you for 'realtor near me' and 'homes for sale in' your neighborhoods. As of September 2026 …"
- Delaware digital marketing (`deldg-hero-sub`): kept "digital marketing agency, internet marketing company, and the advertising experts" synonyms; added Wilmington/Newark/Lewes/Rehoboth and the Clutch + 1,500+ figures.
- Delaware SEO (TseoLanding `hero.sub` prop): "the Delaware SEO company headquartered at 8 The Green, Dover … As of September 2026 we have ranked 50+ …, optimized 1,500+ …, 5.0 on Clutch from 21 reviews …"
- Towing (`tseo-hero-sub` in page.tsx — CarTowSeoPage.tsx is a retired, unrendered component and was left untouched): "Zonic Media provides towing SEO and local SEO for tow truck companies and roadside assistance businesses: … put you in the map pack for 'tow truck near me.' As of September 2026 we have moved 50+ local and [home-service businesses] into the Google map pack and optimized 1,500+ …"
`sitemapLastmod.generated.json`: the 7 routes set to 2026-09-15. Verified: tsc clean, `next build` 173 pages, all 7 ledes present in served HTML. Uncommitted, goes out with the Phase B + widget-fix deploy. C4 tracking baseline (15 Sept): GSC generative-AI impressions 3,040/28d; Semrush AI mentions 14 (US score 14, WW 29).

## 15 Sept (night) — recrawl requests after the Phase B + C3 + widget deploy (user: "the changes are live do the recrawls part")
Live check first: Philly lede, AI SEO title, home lede, towing lede, reinstatement lede all present on www; footer "Dover, Kent" = 0.
GSC URL inspection → Request indexing (domain property, Chrome), confirmed "Indexing requested / added to a priority crawl queue": `/services/philadelphia/local-seo` (confirmed via "Request again" label after refresh), `/services/ai-seo-services`, `/local-seo-google-business-optimization`, `/` (home), `/services/delaware/seo`. Submitted with the request dialog observed but the confirmation toast not captured: `/services/industry/real-estate-seo-services`, `/services/philadelphia/sem`. Earlier today: `/services/gbp-reinstatement-service` (new URL, "unknown to Google" → requested), the appeal post. Stopped at ~9–10 requests to respect the daily quota.
**Still to request (16 Sept, ~10/day):** electricians, law-firms, plumbing-marketing-agency, hvac-marketing-agency, roofing-marketing-agency, pest-control-marketing-agency, delaware/digital-marketing, garage-door local SEO, pool-service local SEO, towing (`seo-services-for-car-towing`), dental-website-design, legal/refund-policy; then re-inspect the reinstatement URL on 22 Sept.
Automation notes (browser_batch): keep batches under ~60 s or the tool times out; after `navigate` the search box ignores the first attempt — run the click→6 s→click→6 s→type→Return sequence in a *separate* batch and retry once if the page stays on Overview; use `find` → click by ref for REQUEST INDEXING (frame size flips between 1456 and 1512 px so coordinates drift); heavy pages take ~30 s before "Indexing requested"; the toast can be missed but the button flips to "Indexing requested · REQUEST AGAIN" on the next refresh.

## 15 Sept (late night) — the "pending" recrawls, all done today (user: "try pending request today also")
Every remaining URL inspected and requested in GSC, each confirmed with the "Indexing requested · added to a priority crawl queue" dialog: electricians (first attempt was interrupted by a navigation, re-done), law-firms, plumbing-marketing-agency (first attempt interrupted, re-done), hvac-marketing-agency, roofing-marketing-agency, pest-control-marketing-agency, delaware/digital-marketing, local-seo-for-garage-door-companies, local-seo-for-pool-service-companies, seo-services-for-car-towing, dental-website-design, legal/refund-policy. Re-checked and re-requested with confirmation: real-estate-seo-services, philadelphia/sem. Total today ≈ 22 accepted requests; no "Quota exceeded" appeared.
Side finding: GSC still lists "Review snippets: 1 valid item" on roofing-marketing-agency and 11 on the GBP optimization page from the *previous* crawl; the live HTML of both no longer carries Review/AggregateRating markup (widget fix deployed), so these clear on recrawl. `layout.tsx` only mentions aggregateRating in a comment.
Automation: the live test now takes 40–60 s per URL; never put `navigate` in the same batch as the REQUEST INDEXING click — wait ≥50 s and screenshot the green dialog first. Search-box sequence after navigate: wait 20 s → click → 6 s → click → 6 s → type → Return (worked first time in most runs tonight; retry once if not).

---

# Chat log — 15 September 2026 (audit → backlink report → URL move → Phase B → widget/alts → Phase A → C3 → recrawls)

## 1. User: full SEO audit, report first, no changes
Asked for an audit "from the last changes till now" using GSC (Chrome), Semrush MCP and the seo-check plugin; US audience; organic leads, visibility and AI visibility; top and trending queries. Delivered artifact "Zonic Media Mid-September Audit" (https://claude.ai/artifact/2B7aUrreQkZMN1CeFQJHYU). Verdict: visible but not clickable (US 119K impressions / 49 clicks / pos 31); limiters are authority (AS 9, spam network still growing) and crawl trust (reinstatement page never crawled); on-page passes on all 201 pages. Five causes: spam links, stuck reinstatement URL, "Dover, Kent, DE" footer pulling UK queries, page-2 ceiling on money terms, mobile LCP 5.3 s. Plan A–D. Three decisions asked (links bought? move the URL? which phases?).

## 2. User's four doubts
Kent: UK 90-day view = 5.59K impr / 13 clicks on reinstatement/electrician queries, none Kent → removing "Kent" costs nothing; grow the UK with a real UK page later. GBP-optimization URL: keep, fix the H1 only. Backlinks: explained the three problems (spam anchors, junk domains, packages). Pakistan/India clicks: reinstatement posts, harmless to US; US position is a competitiveness/authority issue.

## 3. Backlinks Q&A + PDF
"What if I keep building backlinks / don't disavow / reach 1.5M links": no lift (links neutralised), rising manual-action risk, count ≠ authority (gmbgorilla 1,814 links / 730 domains / AS 28 vs Zonic 1,451 / 196 / 9). Delivered `~/Downloads/Zonic-Media-Backlink-Report-2026-09-15.pdf` (13 pp). Correction: the "roofing seo" / "google business profile optimization" 39-domain anchors are an EIN Presswire syndication (nofollow), not a bought package. User: "leave the backlinks part, will fix it later".

## 4. User: "fix it" (stuck reinstatement page) — is it the right time with validations running?
Yes. Moved `/services/gmb-reinstatement-help` → `/services/gbp-reinstatement-service` (308, 116 files repointed, render-time rewrites for CMS bodies, llms files, lastmod). User committed (72fcf93) and deployed.

## 5. "Is content upgrade required?" → "do complete phase B"
No site-wide rewrite; targeted upgrades. Phase B applied (footer address, Philly lede/FAQ, real-estate H1, SEM title/lede, AI SEO title/H2/FAQ, GBP-optimization H1, six industry H1/ledes, reinstatement decision line + FAQ, refund description). Not done: dollar prices (none on the page, user hasn't confirmed), review snippets (third-party widget) — then user said "fix this review snippet and img alt also" → LenisIframeGuard strips the Trustindex-injected Review/AggregateRating JSON-LD; dental hero alts added. Finding: the Trustindex widget renders nothing on live (empty "Real Businesses, Real Reinstatements" panel) — user decision pending.

## 6. "Do phase 1 only, leave backlinks"
GSC: new reinstatement URL "unknown to Google" → requested; appeal post recrawl requested; AI SEO recrawl held until deploy. User-owned: GBP/LinkedIn links to the new URL; directories.

## 7. "Explain Phase C" → "does it change the website?" → "do C3"
C1/C2/C4 off-site or tracking; C3 = seven answer-first ledes (home, garage door, pool, real estate, Delaware DM, Delaware SEO, towing — the towing edit first landed in the retired CarTowSeoPage.tsx and was moved to the live hero in page.tsx). C4 baseline: 3,040 AI impressions / 14 mentions.

## 8. "Changes are live, do the recrawls" → "try pending today also, then save the chat"
All 21 edited/moved pages requested and confirmed in GSC across the evening (see the two recrawl sections above). This chat log written on request.

## Open after this session
- User: GBP website field / post + LinkedIn post linking `/services/gbp-reinstatement-service`; directory profiles (DesignRush, UpCity, The Manifest, Sortlist, Semrush Agency Partners, GoodFirms claim); Crunchbase / Wikidata / Bing Places (C1); Reddit + round-ups (C2); decide on the empty Trustindex widget; confirm reinstatement prices if they should appear on the page; backlinks (deferred).
- Me: 22 Sept re-inspect the reinstatement URL; ~23 Sept read Page-indexing validation results; weekly C4 tracking (GSC AI impressions, Semrush mentions, prompt list); later content work = templated-family differentiation (~30 pages), Phase D posts.

## 18 Sept — homepage hero lede shortened (user: "too big … shorten it without affecting the optimization")
`hm-hero-sub` cut from ~88 words to ~48: kept the entity sentence (digital marketing + internet marketing agency, Dover, Delaware, United States) and the service keywords (local SEO, Google Business Profile management, AI search optimization, website design, Google Ads), kept the dated proof line (900+ reinstated and verified, 1,500+ optimized, 5.0 Clutch / 21 reviews). Dropped "graphic & logo design" and "PPC ads" (both appear elsewhere on the page 8× / 4×) and the closing "so you show up where it counts…" clause (no keyword value). "Internet marketing" kept because the lede is its only visible occurrence on the page (the other two are in the keywords meta). Could NOT be build-verified: the working tree holds the user's in-progress home-inspector state expansion (`states/index.ts` imports 26 state modules that do not exist yet — alabama … wisconsin — so `tsc`/`next build` fail on those files, not on the lede). Edit itself is a one-paragraph JSX text swap. Uncommitted; after deploy the homepage recrawl can be re-requested (a repeat request does not change queue priority, Google will pick the change up regardless).
- Same day, user: remove "As of September 2026:" from the homepage hero. Done — the proof line now reads "900+ Google Business Profiles reinstated and verified, 1,500+ optimized, and a 5.0 Clutch rating from 21 reviews." The date phrase stays on the other six C3 pages (garage door, pool, real estate, Delaware DM, Delaware SEO, towing) unless asked.

## 20 Sept — performance check-in (user: "give me seo report … not received even a single lead"); read-only
Artifact "Zonic Media 20 September Check-in". Semrush API returned "API UNITS BALANCE IS ZERO" on every call → used the Semrush web app via Chrome instead (user-owned: units).
Data (GSC to 17 Sep, Semrush 19 Sep): all-country 28d 146 clicks / 135K impr / pos 30.3 (prev 105 / 105K / 28.9); US 56 / 121K / pos 31.0 (prev 41 / 91.7K / 30.1), brand 17 of 56. Generative-AI impressions 3,470 vs 2,990 (+16%): garage door 253 (+176), Delaware SEO 235 (new), pool 229 (+222), Delaware DM 176, bathroom remodelers 115, towing 114 (−230). Semrush: keywords 1.6K (+43%), est traffic 144, AS 9, ref domains 242 (196 on 14 Sep — spam still growing), backlinks ~2K; PT 13–20 Sep visibility 15.61% (+9.52), 27 up / 51 down of 108; AI mentions 14, US 14 / WW 29, cited pages 5.
**Reinstatement page `/services/gbp-reinstatement-service`: "URL is on Google · Page is indexed", last crawl 17 Sep 19:56 Googlebot smartphone, canonical accepted, referring page = homepage.** The URL move worked in 2 days after 5 months stuck.
Indexing report: 187 indexed / 278 not. "Crawled – currently not indexed" 13 → 185 (validation Failed 15 Sep) — drill-down classified: 176 `/_next/static/*?dpl=` asset URLs (harmless), 5 new blog posts published 8–15 Sep (nap-consistency-checklist, gbp-proof, medical-practices, home-cleaning-services-in-2026, monitor-unauthorized-edits; crawled 15 Sep, awaiting quality decision), home-inspector-marketing/florida (+ its old URL), the reinstatement URL (stale entry), sitemap.xml. "Page with redirect" validation Failed (27) = redirects still redirect, expected. Discovered 21 → 17. Review snippets 16 → 3 valid, Product snippets 1 → 0 (widget fix landing).
US queries by impressions (all 0 clicks): sem agency 1,563 (+1,007 after the SEM retitle), seo for electricians 668 (+313), digital marketing 653, plumbing marketing agency 584, real estate seo company 540 (−185, post-edit dip), seo companies in kent 535, local seo packages 532 (new), seo services in kent 491, philadelphia seo company 489 (+166), real estate seo services 475 (−306). US pages: home 14 clicks; apex home-services 3 clicks / 1,903 impr (www copy now 6,066 impr, consolidation started); NYC local SEO 5,291 impr (new, +1,666%); Philly local-seo 12,871 impr (−3,239) / 1 click; SEM 5,755.
Lead arithmetic given: ~10–15 US commercial clicks/month × 2–5% form rate = 0.2–0.75 leads/month → zero leads is expected at position 31; ~330 commercial clicks/month needed for 10 leads. Timeline: reinstatement cluster top-20 by ~5 Oct; with directories/entities done, 3–5 money terms on page 1 by end Oct and first organic leads; without off-site work, position stays ~30.
Next checks: 30 Sept (5 new posts, Florida state page, Philly/real-estate positions). GSC automation: a drill-down with 250 rows/page can kill the tab group (happened once); read it with a single JS extraction immediately after the rows change.

## 22 Sept — heading hierarchy fix (Semrush issue 223 "Poor heading hierarchy", 99 pages); user: "fix it without changing a single word of content or the design"
Verified first: live crawl of all 234 sitemap URLs → 115 pages with a skipped heading level (Semrush's 99 + the 26 new home-inspector state pages). Three causes, none in the copy: (1) the hero lead-form / dashboard title was an `<h3>` placed right after the `<h1>` (≈100 pages: "Get Your Free … Audit", "Get Your Marketing Audit", "Free HVAC/Plumbing Marketing Audit", "X Local SEO Performance", "Get Your Free Case Review", "See Where You Actually Rank", "Send Us a Message", "Become a White-Label Partner", "Book a Free Consultation", "Real Estate GBP Audit"); (2) card/stat titles as `<h4>` directly under an `<h2>` (home process cards, reinstatement process + optimisation cards, state-page problem/stat/industry/city cards, web-design CWV cards, GBP real-estate problem cards); (3) footer column titles as `<h4>`/`<h5>` ("Services", "Company", "Contact", "White-Label"…) and the web-design mock label `<h5>Layers</h5>`. AI-visibility "drop 30→14" = worldwide vs US toggle (values unchanged since 15 Sept).
Fix = tag names only, zero text changes, CSS selectors retargeted so every element keeps its exact declarations:
- Hero widget titles → non-heading `<div>` with a class hook: `.hia-form-title` (HomeInspector/Plumber/Hvac/GbpRealEstate/NonProfit lead forms), `.slf-title` (ServiceLeadForm, already class-styled), `.lead-form-title` (LeadContactForm, class-styled in globals.css), `.tseo-dash-title` (TseoLanding dashboard), `.ima-form-title` (IndustryMarketingLeadForm), `.gmb-audit-title` (GmbAuditForm), `.lp-form-title` (MapPackLeadForm), `.wd-cv-layers-title` (web-design "Layers").
- Card titles `<h4>` → `<h3>`: home (4 process cards; "Local Visibility Score" left as is — it sits under an h3), reinstatement (10), web-design (4), GBP real-estate (1), home-inspector page + StatePage (3 each), plumbing/HVAC page (4 each) + StatePage (2 each).
- Footer column titles → `<div class="…-footer-title">`: `.hia-footer-title` (home-inspector page/StatePage, GBP real-estate), `.wl-footer-title` (white-label), `.ima-footer-title` (industry marketing: template.ts, solar + septic pageData.ts, and all 13 entries in industryMarketingPages.generated.json).
- CSS (homeInspAgency, homeInspState, gmb-reinstatement, gbpLanding, templateSeo, industryMarketingPages, whiteLabelServices, webDesignPage, home.css, globals.css, service-lead-form.css): selectors renamed to the new tag/class; scope-rule props the old tag inherited (`font-weight:500`, `letter-spacing:-0.02em`, `line-height:1.16`) added where the element left a `:where()/:is()` heading group; and because globals.css forces `body h1–h3 { line-height:1.34 !important }` under 768px, every promoted h3 keeps its old h4 line-height via `!important` in a ≤767.98px block and every demoted title gets an explicit 1.34 there. Global `* { margin:0 }` means UA heading margins were never in play.
- Blog: `normalizeHeadingLevels()` in `blogContent.ts` (render-time, lowers any heading that skips a level to prev+1; text/attributes untouched) wired into `blog/[slug]/page.tsx`; fixes the one flagged post (google-business-profile-description-guide) and any future CMS post.
Verification method: puppeteer-core (system Chrome) captured computed style + bounding box of every heading/title element on all 234 pages at 1440 px and 390 px from the pre-change build (port 3130) and from the post-change build; compared key-by-text. Results recorded below.
**Verification results (22 Sept, three rounds):**
- Round 1 exposed two page families that render their own hero markup instead of the shared component — the 26 `/services/industry/*` SEO pages (inline `<div className="tseo-dash-head"><h3>…`) and `WhiteLabelLeadForm.tsx` — so the CSS rename had left their `<h3>` unstyled; both patched to the same `<div>` + class pattern. It also showed that Bootstrap's global `h1–h6 { line-height:1.2; margin-bottom:.5rem; font-weight:500 }` had been supplying the line-height of several demoted titles (`.lead-form-title`, `.wd-cv-layers-title`, `.hia-footer-title`, `.wl-footer-title`, `.tseo-dash-title`): explicit `line-height:1.2` added. (`.ima-footer-title` keeps 1.16 — `.ima-page :where(h1,h2,h3,h4)` carries `.ima-page`'s specificity and beats Bootstrap.) Round 1's capture had also silently failed on 205 pages (Chrome connection dropped); capture script now relaunches the browser and retries, compare script counts page-level failures as missing.
- Round 2 (all 234 pages, 0 capture errors): 2,322 tag changes on 126 pages; heading-order crawl = **0 pages with a skipped level**; style diffs only the 26 industry-marketing footer titles (line-height 1.16→1.2, my wrong guess) → restored to 1.16.
- Round 3 (26 marketing-agency pages + solar/septic + 21 landers): **0 style diffs**. Only remaining position diffs: the one blog post whose first heading was intentionally promoted H3→H2 (22→26 px, content below shifts 6 px desktop / 47 px mobile — the disclosed exception), and ±8 px vertical jitter in the offer landers' animated mockup section that differs from run to run with no tag changed and identical page height (scroll-animation timing, not the change). `/blog` index differences were CMS content flux between captures (newer posts had been published).
- Text parity: line-by-line diff with tag names stripped → 0 text differences across all 67 changed files; word-count check → 0 words lost. `tsc` and `eslint` clean; `next build` 199 pages.
**Uncommitted (67 files); user commits + deploys, then "Rerun campaign" in Semrush Site Audit so issue 223 recounts (expect 99 → 0).** Verification artifacts: scratchpad `stylecheck/` (before.json, after.json, after3.json, compare-run2.txt, capture.mjs, compare.mjs), `headings.mjs`/`headings-after.json`.

## 25 Sept — GSC Page indexing "validation failed" rows (user: "fix the issues and restart the validation … no change on my pages content, not even a single word"); explained first, then acted on command
GSC data to 21 Sep: 219 indexed / 403 not. Two rows had Validation "Failed" (started 9 Sep, failed 15 Sep).
- **Page with redirect — 29 URLs.** Drill-down read in full: 23 are the non-www (`https://zonicllc.com/…`) or `http://` versions of live pages, 6 are retired paths (`/company`, `/who-we-help/medical/plastic-surgeons`, `/services/industry/car-towing`, `/gmb-reinstatement-service-agency`, `/google-business-profile-verification-help-2026`, old `/home-inspector-marketing-agency/{north-carolina,texas}`). Every one traced with curl (Googlebot UA): 308 → correct www page → 200. Four are two-hop chains (apex + retired path: http root, /company, /who-we-help…, /services/gmb-optimization) — fine, Google follows up to 10. No internal link, no sitemap entry (234 URLs) and no absolute apex URL in `src/`/`public/` points at any of them. Nothing on-site to fix: the row is informational (a redirecting URL cannot be indexed, which is the intent) and its validation can only "pass" if the redirects are removed. Restarted validation anyway on the user's command: **"Validation started 9/25/26", 29 pending / 0 failed** — expected to fail again for the same (correct) reason.
- **Crawled – currently not indexed — 314 URLs (185 on 20 Sep).** Drill-down classified via one JS extraction at 500 rows/page: 311 are `/_next/static/` assets (185 `chunks/*.js`, 125 `chunks/*.css`, 1 `media/*.woff2`) spread over 16 Vercel deployment ids (`?dpl=…`, ~20–31 per deploy since 4 Sep); 3 are stale page URLs last crawled in June that now redirect (apex `/services/gmb-optimization`, old `/home-inspector-marketing-agency/{georgia,florida}`) — all three destinations confirmed "URL is on Google" by URL inspection today. The 5 September blog posts, the Florida page and the reinstatement URL that were in this row on 20 Sep have left it (indexed). Old-deploy chunk URLs already return 404 on Vercel; the current deploy's return 200 with `immutable` caching.
  Static-chunk options given to the user: (1) do nothing — assets never index and never affect rankings, the count is cosmetic; (2) `X-Robots-Tag: noindex` on `/_next/static/:path*` via `next.config.ts` headers() — moves them to the "Excluded by noindex" row, no content/design change; (3) turn off Vercel Skew Protection (Project → Settings → Advanced) — removes the `?dpl=` parameter so chunk URLs stop changing on every deploy (trade-off: an open tab during a deploy may need one refresh). Warned never to block `/_next/static/` in robots.txt (Google needs CSS/JS to render pages). **User chose option 1 ("leave the static links, do nothing").** Validation restarted for the 3 real URLs' sake: **"Validation started 9/25/26", 314 pending / 0 failed** — will fail again because of the assets; the 3 page URLs should move to "Page with redirect".
- Other rows unchanged (validation "Started"): Not found (404) 40, Blocked by robots.txt 2, Excluded by noindex 1, Discovered – not indexed 16, Duplicate/Google chose different canonical 1.
- **OpenAI Ads Manager** (user's screenshot: two conversions `zonic-gpt-leads` and `Thank_You Page`, both base event `lead_created`, same pixel, 0 events; only `Thank_You Page` attached to the 1 campaign): both are rules for the same `lead_created` event the thank-you page fires, so they are duplicates; keep one, never attach both to a campaign (double counting). The name `zonic-gpt-leads` does not exist anywhere in the code (grep of the repo) — the code only sends the event `lead_created` (`src/shared/openaiAdsPixel.ts`, `src/app/thank-you/page.tsx`), so the duplicate has to be deleted in Ads Manager itself, not in code. 0 events is expected until a real form submission reaches `/thank-you` after the pixel commit (001b250) went live.
- No code, content, or config changed today. Heading fix from 22 Sept is committed (4a42f18) — Semrush Site Audit "Rerun campaign" still user-owned.
- Next: ~30 Sept read both validation results and the Page-indexing counts; 30 Sept check the 5 September posts' positions.
- Follow-up (user: "so they will be indexed on the new one, correct?"): checked the GSC "Indexed pages" drill-down (219 rows, all www) against the 25 distinct www destinations of the 32 redirecting URLs — **25 of 25 are indexed**, so every redirect already resolves to an indexed page. The old URLs themselves cannot be "removed" from the report: the non-www/http ones must redirect forever (that is the canonical-host consolidation), the retired paths stay listed until Google forgets them; the Removals tool only hides results for ~6 months and does not touch the report. Only useful lever: keep external profiles (GBP, LinkedIn, Clutch, directories) linking to `https://www.zonicllc.com/…`, so Google stops re-crawling the apex URLs.

## 26 Sept — Semrush "142 pages have low text-HTML ratio" + unused-image audit (user: report first; "no change in the content even a single word, no design change, no adding more content")
Report artifact: https://claude.ai/artifact/SPdeMvJbD3ZRBWBJMV3TmM (nothing changed yet).
**Ratio:** own crawl of all 234 sitemap URLs, Semrush method (raw HTML, no JS): 138 pages ≤10% (Semrush 142/235). Average page 318 KB HTML = visible text 28 KB (9%), Next.js React payload `self.__next_f` 138 KB (43%), inline SVG icons from react-icons 82 KB (26%; 100–270 icons per page, 43–104 unique), JSON-LD 9 KB, head 11 KB, markup ~50 KB. Families failing: industry SEO 26/26 (426 KB avg), website-design 26/26, industry marketing 28/30, offer landers 21/21, core services 14/16, city/state 7/7, legal 3/3, home (570 KB, 4.5%), blog index, 6 blog posts; passing: home-inspector state pages (13%) and HVAC/plumbing state pages (10.4%) only because they carry 41–45 KB of text. Verdict given: not a ranking factor (Google has said so), Semrush "Warning"; cannot be cleared without adding text or leaving App Router. Levers offered (no words/design/added content): (1) homepage passes 6 full blog bodies (`descriptionHtml`, 147 KB of the 335 KB payload) to the client `Blogs` card component that only uses title/slug/date/image/author/excerpt → slim the props, home 570 → ~420 KB (blog index already maps to a slim object); (2) delete the dead code found below; (3) "Exclude check" in Semrush. Refused: robots/JS blocking, icon-sprite rewrite (300+ files, 71 pages would still fail), removing the React payload, adding text. Expected: warning stays on ~137 pages after (1).
**Unused images:** `public/` = 626 files / 245 MB, images 596 / 184 MB. Cross-check: HTML of all 234 live pages, `url()` of all 67 live CSS chunks, and every `src/` file (exact path, template-string folder use, comment-stripped import reachability + whether the referencing component is rendered). Result: **268 image files / 137.2 MB unused** = A never referenced anywhere 216 files / 116.7 MB (many superseded by "-v2" files; largest `/images/agency.webp` 12.3 MB, `/images/shopify.webp` 3.7 MB, root `/images/ChatGPT Image May 4…png` 1.3 MB) + B referenced only by dead code 54 files / 56.7 MB (dead files: `WorldMap.tsx`, `ImageMarquee.tsx`, `GmbReinstProfileSwiper.tsx`, `gbp-reinstatement-service/page.tsx.bak`, retired `LawSeoPage.tsx`, `CommercialSeoPage.tsx`, `ResidentialSeoPage.tsx`, `ChiroDigitalPage.tsx`, `CarTowSeoPage.tsx`, CSS `hvacSeo/dentaSeo/plumbSeo/realEstate/localRoofing/pestSeo` + `philadelphia/philaSeo|philaDigital|philaPpc|philaSem.css` — none imported by any live module; `pestSeo.css` @imports plumbSeo/philaSeo and is itself unimported). Also unused: `/video/web-design.mp4` 28.4 MB and `/video/seo-video.mp4` 7.8 MB (user's call), two `.DS_Store`. Keep list (live code, off-sitemap): 14 files / 2.1 MB (admin auth pages, Navbar, ChatBot, thank-you, coming-soon, HomeSeoMarquee, WhyHomeSeo, launchpad, home-services). Spot check: 10 random flagged files → 0 references in the whole repo; no DB-stored `/images/` paths. Delete list: scratchpad `ratio/delete-list.txt`; groups in `ratio/final-groups.json`; crawl data `ratio/ratio.json`.
Awaiting the user's go for: homepage blog-prop slimming, deleting the 268 images (+ optionally 2 videos), deleting the dead source files.
- **Applied on the user's command (26 Sept, "do point 1, remove dead code, remove all unused images, leave Exclude check"):**
  1. Homepage blog props slimmed: `page.tsx` now maps `getPublishedBlogs(6)` to `{id, slug, blogTitle, authorName, publishDate, featuredImageUrl, excerpt}` before `<Blogs>`; `Blogs.tsx` prop type narrowed to `BlogCardData = Pick<PublicBlog, …>` (only place `<Blogs>` is used). Local prod build: home HTML 570 → 405 KB, React payload 335 → 170 KB, article-body chunks 6 → 0, text ratio 4.6% → 6.5%; blog-section visible text identical to live (1,672 chars), card image srcs identical apart from Vercel's `dpl` parameter.
  2. Dead code deleted (31 files, none imported by any live module after comment-stripping, safety check for outside importers = clean): `WorldMap.tsx`+`worldMap.css`, `ImageMarquee.tsx`+`imagemarquee.css`, `GmbReinstProfileSwiper.tsx`, retired `LawSeoPage.tsx`+`lawSeo/lawSeo.css`, `CommercialSeoPage.tsx`+`commercialSeo.css`, `ResidentialSeoPage.tsx`+`residentialSeo.css`, `ChiroDigitalPage.tsx`+`chiroDigital.css`, `CarTowSeoPage.tsx`+`carTow.css`, CSS `hvacSeo/dentaSeo/plumbSeo/realEstate/localRoofing/pestSeo` + `philadelphia/philaSeo|philaDigital|philaPpc|philaSem`, and six `.bak` files (`gbp-reinstatement-service/page.tsx.bak`, `local-seo-google-business-optimization/page.tsx.bak`, `gbpVerf.css.bak`, `gmb-reinstatement.css.bak`, `gmbRein.css.bak`, `localOpt.css.bak`). **Also unreachable but left in place (not in the approved list, user's call):** components `ContactForm`, `Faqs`, `GbpAppealLeadForm`, `GbpVerificationLeadForm`, `GmbReviews`, `GoHighLevelForm`, `HeroTypewriter`, `InlineAuditForm`, `LaunchpadVideo`, `ProcessSwiper`, `RankGrid`, `ServiceSectionCta`, `Testimonials`, `WhyWork`; CSS `services-page.css` (×2), `contactform.css`, `gbpVerf.css`, `gmbRein.css`, `landingServices.css`, `newServ.css`, `pediatricians.css`, `processSwiper.css`, `testimonials.css`, `whywork.css`; `backend/queues/ownerLeadQueue.ts`, `shared/contactFormValidation.ts` (empty), `shared/conditions/policy.json` + `terms.json` (no reference found anywhere).
  3. Unused images deleted: 268 files, `public/images` 186 MB → 48 MB (596 → 328 image files); two `.DS_Store` removed; empty folders pruned. Videos (`/video/web-design.mp4` 28 MB, `/video/seo-video.mp4` 7.8 MB) left in place — not images.
  Verification: `tsc` clean, `eslint` clean on the two edited files, `next build` 201 pages (includes the user's untracked cannabis pages); local crawl of all 240 pages (sitemap + thank-you, coming-soon, cannabis pages) + 69 compiled CSS files → 335 asset references, **0 missing files**. All uncommitted; user commits and deploys. Working tree also holds the user's own edits (llms files, cannabis pages) — untouched.
- **Orphan sweep, second pass (user: "if they are not used anywhere delete them"):** verified with a comment-stripped search of every import, JSX tag and call in `src/`, `scripts/`, `next.config.ts` plus `git log -S` for when each importer disappeared (5 Aug "website organised", 27 Aug "web seo updates", 6 Jul, 24 Jun). Deleted 29 files: components `ContactForm`, `Faqs`, `GbpAppealLeadForm`, `GbpVerificationLeadForm`, `GmbReviews`, `GoHighLevelForm`, `HeroTypewriter`, `InlineAuditForm`, `LaunchpadVideo`, `ProcessSwiper`, `RankGrid`, `ServiceSectionCta`, `Testimonials`, `WhyWork`; CSS `services-page.css` (both copies), `contactform.css`, `gbpVerf.css`, `gmbRein.css`, `landingServices.css`, `newServ.css`, `pediatricians.css`, `processSwiper.css`, `testimonials.css`, `whywork.css`; `backend/queues/ownerLeadQueue.ts` (QStash producer nobody called; no QSTASH env vars), `shared/contactFormValidation.ts`, `shared/conditions/policy.json` + `terms.json` (superseded by `policy-new.json`/`terms-new.json`, old imports were commented out in `conditions/index.ts`). Left: `/api/internal/owner-lead/route.ts` (the QStash receiver; reachable as a route, now has no producer — user's call), comment-only mentions of `InlineAuditForm` in 8 industry pages. `tsc` clean, `next build` 201 pages. Session total now: 60 source files + 268 images deleted, all uncommitted.
- **Owner-lead receiver removed (user: keep the flow "visitor gets a thank-you email, I get the lead email" — confirmed intact, then "delete it"):** verified path = `src/app/api/leads/route.ts` → `leadsRoute` (saves lead to DB) → `createLead` → `sendOwnerLeadEmail` (to owner + CC, reply-to visitor) → route then calls `sendUserThankYouEmail` (to visitor); all in committed code, untouched. Deleted `src/app/api/internal/owner-lead/route.ts` (QStash receiver whose producer `ownerLeadQueue.ts` was unwired on 17 Mar 2026 and deleted above; no QSTASH env vars). Empty `api/internal` folder removed. `tsc` clean, `next build` OK.

## 26 Sept — page speed round (user: "above 80 mobile and above 90 desktop on all pages"; pagespeed.md used and extended as "Round 3")
Baseline: local Lighthouse 12 on 12 template pages (home, reinstatement, law-firms industry SEO, roofing website-design, roofing marketing, roofing offer lander, Texas home-inspector, blog post, blog index, Philly local SEO, GBP optimization, contact) = desktop 98–100; mobile 77 (blog index, LCP image lazy-loaded), 87 (blog post), 89 (home, CLS 0.127 from the hero font swap), 92–96 (rest). PageSpeed Insights (Google's machine) for the homepage: **58 mobile** (FCP 2.5 s, LCP 4.5 s, TBT 670 ms, SI 6.5 s; "JS execution 1.9 s", "render-blocking 570 ms", "unused JS 378 KB", "unused CSS 33 KB"), so PSI ≈ local − 30 on mobile and is the yardstick. Live Lighthouse runs vary ±10 between runs (same page 77–89 within an hour), so single runs are not proof.
Byte anatomy per page: ~770–850 KB raw JS in 20–23 files (react-dom+framer+react-hook-form 218 KB, Next router runtime 108 KB, swiper 83 KB, a 110 KB core-js polyfill that is `noModule` so modern browsers skip it), 338 KB CSS of which Bootstrap 227 KB, ~100 requests, 1.5 MB total; third parties 550–720 KB (GTM container with Facebook pixel + Clarity 340 KB, Clutch widget 165 KB + Roboto TTF 88 KB, gtag 186 KB, GHL tracking 66 KB unminified, OpenAI pixel 28 KB). Local CPU profile (390 px, 4× throttle): all first-party JS ≈ 200 ms, so hydration is not the problem; third parties and render-blocking CSS are.
Changes (no words, no design): (1) homepage no longer serialises 6 article bodies (from earlier today); (2) GTM → first interaction or 5 s after load (`deferUntilInteraction.ts`, `AnalyticsProvider.tsx`; gtag + OpenAI pixel unchanged on lazyOnload for ad attribution); (3) GHL external-tracking → same rule via `GhlExternalTracking.tsx`; (4) Clutch widget.js removed from the layout, injected by `ClutchWidget.tsx` when a widget is within 600 px of the viewport (128 of 175 public page files never load it now); (5) Bootstrap trimmed 227 → 42 KB (`bootstrap.trimmed.css` + `scripts/build-bootstrap-trimmed.mjs`, PurgeCSS over the rendered HTML of all 239 public pages + all public source; admin layout keeps full Bootstrap; purgecss added as devDependency); (6) weight-specific `neueHaas Fallback` faces (500/600) in globals.css computed with fontkit (size-adjust 97.17% / 100.44%) — mobile CLS on home 0.127 → 0.000 under throttling; (7) blog index first card `priority`, next two eager; article-body Cloudinary images get `f_auto,q_auto` + lazy loading (`optimizeCloudinaryImages`).
Verified: functional puppeteer run on the local build — GHL script appears 5 s after load with no interaction and immediately on scroll; Clutch script appears only when its widget is approached and the iframe renders (1194×357); pages without a widget never load it; `tsc` + `eslint` clean (one pre-existing `set-state-in-effect` lint hit in AnalyticsProvider); 67 Bootstrap classes used in rendered HTML all present in the trimmed file. Full-site computed-style verification (every element, every public page, 1440 + 390 px, before vs after the Bootstrap swap): see next line.
- **Full-site style verification (Bootstrap 227 → 42 KB):** every element on all 239 public pages (sitemap + thank-you, coming-soon, 404, the two untracked cannabis pages) captured at 1440 px and 390 px before and after the swap, 62 computed properties each. Result: page-views compared: 478; elements: 615367; STYLE DIFFS: 311; rect-only diffs: 587; animation noise (opacity/transform only): 1710; missing/mismatch: 8. All 311 property differences are explained by things that changed between the two captures, not by CSS: 200 are `box-shadow` values of pulsing badges and flow-node animations (state pages, about, industries), 35 are `border-top-color` of the animated `.imv-flow-node` / `.wlv-flow-node` cards caught at different phases (they flip in both directions between the same two blues), 74 are widths/heights on /blog and blog posts and the homepage blog cards caused by three posts the CMS published between the captures (index list 89 → 92 items, sitemap 53 → 56 posts), and the remaining 2 are an animated progress bar (`.recovery-fill`) and an animated icon width. No `display`, `padding`, `margin`, `font`, `grid`, `flex`, `color` or `border-width` difference anywhere across 615,367 element checks. Key mismatches (8) are the chat greeting bubble's timer class and the longer blog list. Zero differences attributable to the trimmed stylesheet. Build clean (200 pages).
- Deploy note: all of this is uncommitted alongside the earlier deletions and the user's own WIP. After deploy, run PSI 2–3× on home, a service page, an industry page, a blog post and /blog (mobile + desktop) and record in pagespeed.md. If mobile is still under 80: second round = defer gtag too, pause Clarity in GTM, Navbar/Footer hydration.
- **Semrush Core Web Vitals 25% (user re-ran the campaign after deploying the speed round; screenshot):** 8 sample pages, desktop Lighthouse on Semrush's runner. LCP and CLS Good on all 8; TBT Poor/To Improve on 6 (/services 842 ms, /about 867 ms, home 480 ms, /industries 558 ms, residential cleaning 462 ms, pool 356 ms). Verified the run used the new deployment (chunk URLs carry `dpl_ZuUfeLB3…`) and that its longest tasks were still GTM 261 ms, Facebook 228 + 157 ms, Clarity 123 ms, GHL chat widget 105 ms, GHL tracking 91 ms — the 5 s fallback timer fired inside Semrush's long trace. Same three pages on my Lighthouse 12 desktop: 100 / TBT 0 ms. Fixes applied (uncommitted): `mousemove` added as an interaction trigger and the fallback raised to 60 s (GTM + GHL tracking); `browserslist` added to package.json so Next stops injecting Array.prototype.at/flat/flatMap and Promise.allSettled polyfills into the React chunk ("legacy JavaScript", 6 of 8 pages). Not deferred: the GHL chat-widget loader (server-rendered for GHL's compliance crawler). Two of the 8 Semrush sample URLs are the retired `/services/gmb-reinstatement-help` and `/services/gmb-optimization` ("Out of crawl scope") — swap them in Semrush → Site Audit → Core Web Vitals → Edit list for `/services/gbp-reinstatement-service` and `/local-seo-google-business-optimization`. Next: user deploys, reruns the campaign.

## 28 Sept — progress report (user: "check the seo report … till now how it's performing, use /seo-audit and seo-check, give me the url")
Read-only. Data: GSC 28 d to 25 Sep — all countries 148 clicks / 132K impr / pos 28.8 (prev 120 / 117K / 29.8); US 52 / 117K / 29.8 (prev 46 / 103K / 30.7); brand 31 clicks; top US zero-click groups: sem agency 1,368 impr, local seo packages 654 (new), local seo services 435, gmb instant verification method 674; pages: NYC local SEO 6,256 impr (new), Philly local-seo 11,490 (−4,658), home-services 5,684 (+2,539), real-estate SEO 4,868 (−997). GSC AI features 4,060 (+42%). Index 219 / 403, validations "Started". GSC CWV: no field data. Semrush 27–28 Sep: AS 9, ref domains 317 (spam still growing), backlinks 2.7K, keywords 1.8K (+58%), traffic 182 (+29%); Site Health 99%, 0 errors, 141 warnings (all text-HTML ratio), AI Search Health 95%; CWV 75% (6 Good / 2 To Improve / 0 Poor — up from 25%: home TBT 480 → 194 ms, /services 842 → 213, /about 867 → 402); Position Tracking 11.37% (−4.22 wk; 37 up / 39 down of 108; was 15.61% the week before). PSI home mobile today: 82 (FCP 1.7 s, LCP 3.8 s, TBT 190 ms, CLS 0; desktop 96–100) vs 58 on 26 Sep. Live crawl of 239 URLs: 0 heading skips, 0 missing alts, 0 duplicate titles/descriptions, 239 single H1 + canonical + OG + JSON-LD; 230 titles in 50–60; 14 descriptions < 120 chars; no HSTS / X-Content-Type-Options / X-Frame-Options headers. Deferral v2 + browserslist confirmed live (dpl_3XvTqGR6…). Report artifact: see next line. Recommendations restated: backlinks/disavow + directories/entities (user, critical), HSTS headers, 14 descriptions, towing + Philly ledes, Semrush CWV list edit, exclude text-HTML check, AI comparison set, pause Clarity in GTM.
- **28 Sept follow-up (user: "toxic score is green" and "visibility dropped on some keywords, change those keywords?"):** Semrush Backlink Audit (last run 16 Sep, only 125 of the 317 referring domains audited): toxicity Low — 0 toxic, 24 potentially toxic, 101 non-toxic; but 87.2% of domains have AS 0–20, top referrers are creativeposts.top / analyticshaven.top / bestnz-poker-casinoslot.com, anchors dominated by the "High Quality Dofollow Backlinks DA 50 PA 40 Premium PBN…" network across ~17 typo-squat domains (zonicmediia.com etc.); 36 items already disavowed (32 domains incl. casino/domraider network; 2 new URLs "to export"). Read: no penalty risk visible, but the profile carries no authority (AS 9) — the need is earned links, not cleanup; rerun the audit and add the PBN network to the disavow as hygiene. Position Tracking (21–28 Sep): 39 declined / 37 improved; declined list shows ~25 keywords going to "lost" and several "position 1 → lost/42/49" (electrician seo services, real estate seo agency/services/company, garage door repair seo company, delaware ppc agency); the declined-set visibility chart drops 26% → 1% between 26 and 28 Sep with a Google-update marker on 24 Sep. Cross-checked in GSC (US, daily to 25 Sep): "real estate seo agency" 373 impr / pos 33.6 steady daily, "electrician seo services" 334 impr / pos 33.1 steady — the site was never #1 for these, so Semrush's Sep 21 "1" and Sep 28 "lost" are SERP-feature/AI-Overview attribution churn, not rankings lost. Week-over-week (19–25 vs 12–18 Sep): impressions 23.1K vs 30.2K (−23%), position 25.5 vs 27.9 (better), pages down: Philly local-seo −1,430, home-services −834, Delaware SEO −685, real-estate SEO −663, NYC −512; up: kitchen remodelers +522, window-and-door +538. Advice given: do not change keyword targets now (one week of churn during an update, GSC positions steady, Sept 7 retitle already showed the cost); re-check 5 and 12 Oct with post-deploy GSC data; only revisit a page's title/H1 after 3 straight weeks of >40% impression loss with worsening position.

## 29 Sept — "impressions down 50%, no leads, check everything" (user); diagnostic report, nothing changed
Report artifact: see next line. Facts: GSC daily impressions (all countries) Aug ≈4.3K/day, 1–16 Sep ≈5.0K (best 6,367 on 31 Aug), 17–25 Sep ≈3.9K (−22% vs peak), 26 Sep 2,878 (last day, under-counted). 28-day totals still +13% (137K vs 122K), US +10%, UK flat, image search +12%. No manual action, no security issue, 219 indexed. **Cause 1 (mine): the 15 Sep rewrites** — Philly local-seo fell from ≈490/day to ≈250/day from 17 Sep (lede + FAQ question rewritten toward "best SEO company in Philadelphia"), real-estate SEO ≈210 → ≈110/day from 17 Sep (H1 "Experts" → "Company" + lede), law firms/chiropractor dipped 15–19 Sep then recovered from 20–22 Sep (so the 22 Sep heading fix shows no harm). Queries gone: local seo for law firms 315→0, best local seo company for google 172→0, roofing marketing agency 163→1, local seo for roofing companies 127→0, ppc advertising agency 142→1, gbp optimization 66→0; "ppc agency" 921→34 on the Philly PPC page (national query dropped from a city page). **Cause 2: cannibalization** — "digital marketing agency in delaware" split Delaware DM 63→41 / Wilmington DM 3→21 / Delaware web-design 2→19 (Delaware DM −1.8K); "local seo services" rotates NYC 10→305 vs Philly 204→117; "seo services" Philly 47→163 while /services/seo-services gets none; industry triplets (SEO page / marketing page / web-design page / offer lander) share phrases. **Cause 3: user's 26 Sep "web clean" removed 6 footer links** (Philly local-seo, local-seo-packages, seo-services, ai-seo-services, white-label, travel); white-label now has 3 inbound links; not yet visible in GSC. **Cause 4: Google update 24 Sep** (Semrush marker). UK-town junk impressions (kent/telford/lichfield/haslingden/derbyshire) rose 1,438 → 2,863 (never click). Schema: all 239 parse; **FAQ schema ≠ visible text on 28 pages** (27 industry marketing pages carry 2 questions not on the page: "What does a X marketing agency do?", "How much does X marketing cost?"; homepage wording "does Zonic Media work with" vs "do you work with"); no review markup anywhere. Review snippets = 3 valid / 0 invalid (last update 28 Sep; the 3 = appliance-repair-website-design, kitchen-remodeling-marketing-agency, roofing-marketing-agency, last crawled 8–9 Aug): stale entries from the stripped Trustindex markup, will reach 0; self-reviews are ineligible by guideline. Titles/descriptions/H1/headings/canonical/OG/alts all clean (from the 28 Sep crawl). Recommendations: restore pre-15-Sep wording on Philly local-seo (lede + FAQ Q) and real-estate SEO (H1 + lede) word-for-word from git; restore the 3 footer links + link white-label; Delaware cluster de-duplication (hub keeps "digital marketing agency in Delaware", Wilmington and web-design pages retitled + linked to the hub); one national owner for "local seo services" (/services/seo-services H1 + anchors from city pages); sync FAQ schema; 4-week text freeze on ranking pages; judge after 3 weekly readings; track US commercial impressions not the site total. Lead maths unchanged (52 US clicks / 28 d).
- **30 Sept — fixes applied (user: "do all the fixes except the off-site one"):** (1) Restored word for word from git (reverse of commit 36506bd hunks): real-estate SEO H1 "Real Estate SEO Experts That Win More Leads" + original lede; Philly local-SEO original lede, FAQ Q "What's included in your Philadelphia local SEO service?", original "Different neighbourhoods…" lead. (2) Footer: SEO Services, Local SEO Packages, Philadelphia SEO Company, White-Label Services links restored (AI SEO + Travel left out as the user had them). (3) Delaware cluster: Wilmington meta description now "Digital marketing agency in Wilmington, DE: …", "marketing agency in delaware" dropped from its meta keywords, hub-link anchor "digital marketing agency in Delaware"; Delaware web-design H2 "A Delaware SEO and Web Design Agency in One" → "Website and SEO, Built as One System", hub-link anchor "digital marketing agency in Delaware"; H1s untouched. (4) "local seo services" owner: /services/seo-services H1 "SEO and Local SEO Services That Turn Rankings Into Revenue"; Philly and NYC pages each link to it with anchor "local SEO services" (one short clause each; the restored Philly lede untouched). (5) FAQ schema: removed the schema-only "How much does X marketing cost?" question from template.ts, the 13 JSON-driven pages and the solar/septic pageData ("What does a X agency do?" kept — it is visible as the "short answer" block); homepage schema question now "What kind of businesses do you work with?" to match the page. Verified on a local prod build: all 16 text/link checks OK; FAQ schema vs visible text = 0 mismatches on 237 FAQ pages; tsc clean, build 200 pages. Uncommitted. After deploy: request indexing for Philly local-SEO, real-estate SEO, SEO services, Wilmington DM, Delaware web design, NYC local SEO. (6) Text freeze until ~28 Oct on pages with impressions; readings 6, 13, 20 Oct.

## Chat log — 25 to 30 September 2026 (saved on request)
1. **25 Sep — "fix the GSC issues" (redirect + crawled-not-indexed validations failed).** Explained: redirect row = apex/http/retired URLs that correctly 308 (informational, can't "pass"); crawled-not-indexed = 311 `_next/static` asset URLs + 3 stale redirects. User chose "leave the static links, do nothing"; both validations restarted. OpenAI Ads: `zonic-gpt-leads` and `Thank_You Page` are duplicate rules on `lead_created`; not in code, delete in Ads Manager.
2. **"How to remove redirect URLs from Google?"** — not needed; all 25 destinations indexed.
3. **26 Sep — Semrush low text-HTML ratio (142 pages) + unused images.** Report: framework overhead, not a ranking factor. User approved: homepage blog props slimmed (570 → 405 KB), dead code removed (60 files), 268 unused images deleted (137 MB). Owner-lead QStash files removed after confirming the lead flow (visitor thank-you + owner lead email) is unchanged.
4. **"Speed: mobile ≥80, desktop ≥90"** — GTM/GHL deferred to first interaction, Clutch on demand, Bootstrap trimmed 227 → 42 KB, font-fallback CLS fix, blog image priority + Cloudinary f_auto. Verified across all 239 pages.
5. **AI visibility 30 → 14** — not a drop; Semrush share-of-voice gauge; GSC AI impressions +42%.
6. **Semrush CWV 25%** — tags still inside Semrush's long trace; added mousemove trigger + 60 s fallback, modern browserslist. Result 28 Sep: CWV 75%, PSI home mobile 82.
7. **28 Sep — progress report** (artifact "Zonic Media Late-September Report"); backlink toxicity "Low" explained (not harmful, but no authority); keyword drops = Semrush SERP-feature churn, don't change keywords.
8. **29 Sep — "impressions down 50%, check everything"** (artifact "Why Zonic Impressions Fell"): real drop ≈22% from peak, caused mainly by the 15 Sep rewrites on Philly local-SEO and real-estate SEO, plus cannibalization (Delaware cluster, generic "local seo services"), 26 Sep footer-link removal, 24 Sep Google update. Review snippets 3 = stale widget markup (will reach 0).
9. **30 Sep — demand check**: "seo company philadelphia" 1.6K/mo, "real estate seo services" 1.3K/mo, stable. **User: "do all fixes except off-site"** → restores, footer links, Delaware de-dup, local-SEO owner, FAQ schema sync applied and verified (see entry above). Next: user deploys → request indexing for 6 pages; readings 6/13/20 Oct; text freeze to ~28 Oct.
- **30 Sept — deployed (commit 8c9573c "web seo changes restore") and re-indexing requested in GSC, all 6 confirmed "Indexing requested":** /services/philadelphia/local-seo, /services/industry/real-estate-seo-services, /services/seo-services, /services/delaware/web-design, /services/wilmington/digital-marketing, /services/nyc/local-seo. Do not re-request; next readings 6, 13, 20 Oct. GSC tip: after loading the overview, click the search box, cmd+a, type, zoom to confirm the text is there, then press Return in a separate step (the first typing after navigation is often dropped).
- **30 Sept — blog mid-article CTA limited to suspension posts (user: "keep on suspension posts only, for a short test").** The "Profile suspended right now? / Get My Profile Back" box (BlogMidArticleCta, added 27 Aug) was inserted after the first section of every post regardless of topic, e.g. "Real Estate SEO vs Zillow Leads". `blog/[slug]/page.tsx` now shows it only when title+slug match /suspen|reinstat|appeal|deceptive|verif|unauthorized|lose their google|disappeared from google/i; the article still splits and renders identically otherwise. Verified on local build: 60 posts → box on 38, hidden on 22 (Zillow hidden, "reinstatement denied" shown); article text identical to live on all 60. Uncommitted. Review in ~3–4 weeks whether to keep, extend or drop.

## 2 October 2026 — "wait or fix?" check + toxic links (read-only, no site changes)

Report: see artifact "Zonic October Ranking Check". Data read from GSC and Semrush web app (API units still zero).

- **GSC, US:** clicks flat (13 last 7 days vs 12 previous; worldwide 40 vs 34). Impressions 16,400 vs 23,397 (−30%, 23–29 Sep vs 16–22 Sep). Daily: ~3.5K (22 Sep) → 3.0K (25 Sep) → 2.4K (26 Sep) → 2.3K (28–29 Sep). Avg position 26.1 → 27.9 (26–29 vs 19–22 Sep).
- **Drop is sitewide, not the edited pages:** six edited pages −34% (5,081 → 3,345), the other 186 pages −29% (18,316 → 13,055). Query level (1,013 shared keywords): 372 slipped >3 places, 182 rose >3, 459 held; keywords that held rank still lost 36% of impressions.
- **Semrush Position Tracking (108 kw, 26 Sep → 2 Oct):** visibility 10.16% (−4.29), 48 down / 10 up; e.g. local seo packages 33→60, sem agency 32→52, philadelphia seo company 26→41; Delaware terms rose (seo company delaware 57→4).
- **Recrawl status of the six pages (URL inspection, last crawl):** real-estate 2 Oct (restored version crawled); Wilmington 29 Sep; SEO services 24 Sep; Delaware web design 19 Sep; NYC 19 Sep; Philadelphia 11 Sep. Do NOT re-request.
- **CORRECTION to the 29 Sep diagnosis:** Philadelphia local-SEO was last crawled 11 Sep, so Google never saw the 15 Sep rewrite; that rewrite cannot be the cause of its drop. The 30 Sep restore stays (harmless) but was not the fix.
- **Likely drivers (correlation, not proven):** Google "September 2026 spam update" started 24 Sep, still rolling out (status dashboard); Semrush Backlink Audit re-run 1 Oct: toxicity Low → High, 100 toxic domains (all new, all pointing at https://zonicllc.com/, link-farm/PBN "buy backlinks" pages), 206 referring domains, AS 9. No manual action, no security issues, sitemap read 1 Oct OK (243 pages), non-www → www is 308.
- **Disavow (user-owned, in progress):** add the 100 toxic domains at domain level via Semrush → Disavow → Export TXT (keeps the existing 34 + 2 unexported); upload replaces the old file; upload to both www and non-www URL-prefix properties if both exist. Leave press-release pickups (lifestyle.*, newsnetmedia, Delaware news sites, TS 24–44) and real profiles (Trustpilot, Techreviewer, Apsense).
- **Open questions for user:** was a backlink package bought in Sept (Fiverr anchor seen)? Press releases use exact-match anchors ("roofing SEO" ×43, "Google Business Profile optimization" ×43) — use brand/URL anchors in future.
- **Plan:** text freeze to ~28 Oct continues; readings 6, 13, 20 Oct (impressions, position, crawl dates, spam-update completion); decide two weeks after the update ends (position back near 26 = turbulence; stuck near 30+ = links devalued → genuine link building is the only lever).

## 4 October 2026 — "everything is red" review + recovery plan (read-only)

Report: artifact "Zonic Recovery Plan". No code changed.

- **Real counters vs Semrush estimates:** GA4 organic sessions (admin landings excluded) by week from 3 Aug: 90, 88, 67, 71, 68, 67, 86, 87, **101** (27 Sep–3 Oct, best week in two months). GSC US clicks flat ≈13/week (data still ends 29 Sep). GA4 /thank-you sessions Sep: organic 12, referral 11, paid 8, direct 4, AI assistant 2 (Aug: organic 10, paid 11). 63 organic form_start in Sep. No GA4 key events configured (keyEvents = 0 everywhere).
- **GA4 pollution:** 356 "Organic Search" sessions in Sep landed on /admindashboard/leads (303), /admin-login (42), /admindashboard (11) — the owner's own logins. AnalyticsProvider is in the root layout, so GA4/GTM fire on admin routes. Proposed fixes (awaiting user go): skip analytics on /admin* paths; add a GA4 key event for /thank-you (lead).
- **Semrush PT 28 Sep–4 Oct:** visibility 8.81% (−2.56), est. traffic 42.8 (+4.8), 9 improved / 48 declined, top 3 = 8 (2 new, 5 lost), top 10 = 19 (4 new, 11 lost). Domain Overview: AS 9, organic traffic est. 157 (−10%), 1.8K keywords (+1.8%), ref domains 367 / backlinks 3.2K. AI toolkit: visibility 14, mentions 11, cited pages 22 (AI Overview 6, AI Mode 3, ChatGPT 1, Gemini 1); top cited sources zonicllc.com 4, youtube.com 2, google.com 2.
- **Disavow:** user uploaded; Semrush shows 100 disavowed, toxicity Low, 106 referring domains remain (15 with AS > 20). Disavow list = 136 items (129 domains, 7 URLs), 36 marked "not exported" → told user to export the full 136 and re-upload as one file (upload replaces).
- **Review snippets (3 valid):** self-serving aggregateRating markup exists in layout.tsx and ~8 service pages; ineligible by Google policy, not a defect to fix; the 3 valid come from the Trustindex widget. Don't add more.
- **Site has llms.txt + llms-full.txt (200) and Organization sameAs (LinkedIn, Facebook, Instagram, YouTube, Trustpilot, Clutch).**
- **Plan handed over:** weekly authority program (Delaware chambers/BBB, agency directories, Qwoted/Featured/Help a B2B Writer, 2 YouTube videos/month, client case studies, Reddit/GBP community answers, branded-anchor PR only); no page edits until 28 Oct; readings 6, 13, 20 Oct; checkpoints early Nov (AS>20 domains 15→25, US clicks 13→25/wk, Delaware terms top 3) and early Jan (AS 9→15, first Philly top-10).

## 4 October 2026 — analytics fixes (code, uncommitted) + GA4 key event + review-snippet explanation

- **Admin traffic out of analytics:** new `src/shared/adminPaths.ts` (`isAdminPath`: /admindashboard, /admindashboard/*, /admin-login, /reset-password, /admin-email-verification). `AnalyticsProvider` now returns null and skips GTM/gtag/OpenAI pixel on those routes; `GhlExternalTracking` skips too. Cause: 356 Sept "Organic Search" sessions were the owner's admin logins.
- **Thank-you page:** GTM loads immediately on /thank-you (no interaction deferral; the page redirects home after 60 s). Google Ads conversion snippet rewritten to queue into dataLayer — the old `if (typeof gtag === 'function')` guard ran before the lazyOnload tag defined gtag, so the Ads lead conversion was silently skipped.
- **GA4 (property 538212703, done in the UI with user approval):** created event `lead_thank_you` = page_view where URL contains /thank-you, marked as key event, default value 1, once per event. Shows under Admin → Events → Key events once data arrives. GA4 search showed 13 active users on /thank-you for 27 Sep–3 Oct.
- **Review snippets — no change made:** GSC had 35 valid items on 11 Aug because Organization + LocalBusiness JSON-LD in layout.tsx carried a self-serving aggregateRating (5.0/21 Clutch). Removed 10 Aug (commit e9c8779) after Rich Results Test errors ("multiple aggregate ratings") and because self-serving ratings are ineligible for stars. Count fell as pages were re-crawled; the 3 remaining (appliance-repair-website-design, kitchen-remodeling-marketing-agency, roofing-marketing-agency) were last crawled 8–9 Aug and still carry the old markup in Google's copy — they will drop to 0 on re-crawl. No ranking effect either way; do not re-add.
- Verified: tsc clean, `next build` OK (200 pages).

## 5 October 2026 — "positions 34+, push or wait?" (read-only; report "Zonic Position Plan")

- GSC US: impressions 2.0K (30 Sep) → 3.9K (1 Oct) → 4.5K (2 Oct) at avg position 33–33.5: Google showing the site for more queries at deep positions after the spam-update reshuffle (day 11, still not marked complete).
- Impressions by page band (7 d, US): <10: 25 pages/685; 11–20: 39/2,535; 21–30: 24/2,816; **31–40: 36 pages/9,115 (49%)**; 41+: 32/3,390.
- Top pages (imp @pos): Philly local-seo 1,645@33.5; real-estate 1,484@34.1; NYC 896@31.9; Philly SEM 756@37.2; window-door 690@28.8; Philly PPC 664@28.7; home-services 662@41.3; garage-door 529@20.4; Delaware DM 409@34.3; Delaware SEO 401@32.2; landscaping 361@41.3; tree 352@13.4; local-seo-packages 282@29.6.
- Keywords per page (28 d): Philly = "philadelphia seo company" 379@25.9, "seo company philadelphia" 268@30.1, "philadelphia seo agency" 258@26.5; real-estate = "cheap seo for realtors" 957@31.9, "real estate seo company" 367@30.8, "best seo company for real estate" 247@14.5; NYC = "local seo services" 243@18.6, "local seo new york" 201@32.9.
- Live crawl (243 pages) in-content inbound links: real-estate 8, NYC 3, Philly SEM 6, Philly PPC 6, Delaware DM 7, Delaware SEO 6, Delaware web design 4, garage-door 3, window-door 2, Wilmington 3; Philly local-seo 131 / local-seo-packages 132 / seo-services 131 are mostly the footer link. 43 of 122 service pages have ≤2 in-content links.
- SERPs (Semrush 5 Oct): "philadelphia seo company" 1.3K/KD37 — Directive list, Thrive, GreenLane (Philly), Semrush agency directory, Coalition, SEO Locale (Philly), BuiltIn list, Clutch list, SEOBrand, Alliance; local pack. "real estate seo company" 1.3K/KD31 — Thrive, Boulder SEO Marketing, Siteimprove, Real Estate Webmasters, FirstPageSage list, Semrush directory, Ylopo list, DesignRush list, Intero, Straight North; AI Overview. "local seo packages" 4.4K — page-1 pages with 46–216 ref domains, a YouTube video at #8, review stars on two results.
- Recommendation: keep text freeze to 28 Oct; now = internal links (proposed: "Related services" block on blog posts + neighbour links between related service pages — awaiting user approval), directory pages already on page 1 (Semrush Agency Partners, DesignRush, Clutch service areas, GoodFirms, UpCity), YouTube video for packages; after 28 Oct = content-gap additions (pricing table, case figures, neighbourhoods); ongoing = 5 links each to the real-estate and Philadelphia pages.

## 5 October 2026 — AI summary refresh + pricing file (uncommitted, user deploys)

- `public/llms.txt`: date 2026-10-05; trust line now Clutch 5.0/21, Google 5.0/17, Trustpilot 9 reviews all 5-star; "minimum project size $1,000+" replaced with the Starter/Growth/Dominate tiers and a link to pricing.md; independent-reviews line links Google (maps.app.goo.gl/wWvgJJjzki7kjT8A9), Clutch, Trustpilot and says what the reviews cover; new "Pricing (machine-readable)" section; new "Free Website Offers" section listing the 21 offer landers (they were the only non-blog sitemap URLs missing).
- `public/pricing.md` (new): the three local SEO plans with inclusions from the packages page, reinstatement/verification/web design/Ads pricing terms, month-to-month terms, contact.
- `public/llms/*.md` (6 files): Google reviews link added beside Trustpilot/Clutch.
- `public/llms-full.txt` rebuilt with `node scripts/build-llms-full.mjs` (43.9 KB).
- Not done, by design: no aggregateRating markup (self-serving, ineligible), no page text changes. Trustpilot 4.3 explained to user as TrustScore mechanics (starts at 3.5, recency-weighted); fix = ~2 reviews/month.

## 5 October 2026 — keyword cannibalization check (GSC, US, 28 days; read-only)

Checked 30 top queries page-by-page. Clean (one page per query): sem agency, local seo packages, pest control/plumbing/electrician marketing agency, philadelphia seo company, real estate seo company, tree service seo, local seo for electricians, electrician seo services, web design delaware, search engine marketing agency.
Overlaps found:
- "local seo services": NYC 243@18.6 vs Philadelphia 111@16.9 (Delaware SEO 5, home-services 2). "local seo company": NYC 149@26.5 vs Philly 87@17.5. "local seo near me": Philly 79@18.7 vs NYC 62@6.8. "seo company near me": Philly 83@6.9 (+ NYC 1, Delaware 2). "seo agency near me": Philly 131@24.7. → generic/near-me terms split between the two city pages; Google picks by searcher location, so this is natural, not harmful. No action.
- "delaware seo": delaware/seo 125@20.5 vs delaware/digital-marketing 45@57.8. "digital marketing agency delaware": delaware/digital-marketing 65@18.2 vs wilmington/digital-marketing 37@57.8. → mild; the right page wins each time. Watch, no action during freeze.
- "hvac marketing consultant": hvac-marketing-agency 338@54.3 plus Illinois/Florida state pages at 75–84. → state pages leaking onto the national term; minor.
- "pest control marketing agency": marketing-agency page 375@28.2 vs pest-control-website-design 54@3.7 (sitelink-type impressions). Fine.
- **Reinstatement (real issue, intent-driven):** the flagship /services/gbp-reinstatement-service had only 18 US impressions in 28 days (indexed, last crawl 2 Oct). "gbp reinstatement" 105@14 and 83@17 go to two blog posts; "google business profile reinstatement" 16@54.5 and "gmb reinstatement" 5@27 go to the step-by-step post. Google treats these as informational and ranks the posts. The service page only shows for "gbp reinstatement service(s)" (8–10). Two posts overlap each other: /blog/after-gbp-reinstatement-request and /blog/what-happens-after-you-submit-a-gbp-reinstatement-request (whose title is actually "How to Write a GBP Reinstatement Appeal"; slug ≠ title).
- Non-www oddity: GSC reports 418–554 impressions on https://zonicllc.com/services/local-seo-for-home-services ("digital marketing" 554@3.9). URL inspection: "Page with redirect", not indexed, last crawl 28 Sep, referred from www and from the typosquat zoniccmedia.com. Reporting artifact; nothing to fix.
- Semrush competitive-positioning map question: hovering your own domain shows keywords = common (1,842 both) because overlap with yourself is everything; competitors show their own totals and the overlap with you. Normal.

## 5 October 2026 — reinstatement service page: title + FAQ schema (uncommitted, user deploys, then ONE indexing request)

Why: /services/gbp-reinstatement-service had 18 US impressions in 28 days. URL changed 15 Sep from /services/gmb-reinstatement-help (308 redirect in place); the old URL only ever had ~10 brand-sitelink impressions/week, so the page has never ranked. Semrush shows it in the top 100 for 1 keyword. SERP for "google business profile reinstatement" (140/mo, KD 34) includes two competitor service pages with 0–2 referring domains (gmbgorilla #4, activatedigitalmedia #10), so the page can rank. Commercial targets: "google business profile reinstatement service" 70/mo KD 16, "companies that help with google business reinstatement services" 70/mo KD 14, "google reinstatement" 50, "gmb reinstatement service" 20.
Changes (page text unchanged, verified by diffing rendered main text):
- Title: "GBP Reinstatement Service | GMB Reinstatement Experts" → "Google Business Profile Reinstatement Service (GBP/GMB) | Zonic Media". Meta description now leads with the full phrase + 5–7 days, 900+, free audit, No Fix No Charge.
- FAQPage JSON-LD added for the 13 visible "Common questions" (built from the same GmbResinstFaqs array; no schema-only entries).
- tsc clean, next build OK; rendered page has 4 schema blocks (Breadcrumb, Service, ProfessionalService, FAQPage), 13 Q&A.
Next: user deploys → requests indexing once → 3–5 external links to this exact URL (Clutch, Semrush agency profile, YouTube descriptions, PR answers) → readings 13 & 20 Oct. After 28 Oct: merge/re-slug the overlapping posts /blog/after-gbp-reinstatement-request and /blog/what-happens-after-you-submit-a-gbp-reinstatement-request (title is "How to Write a GBP Reinstatement Appeal").

## 5 October 2026 (evening) — re-crawl check of the six restored pages (deploy was 30 Sep 12:26)
- Real-estate SEO: crawled 5 Oct 07:07 ✔ (also 2 Oct)
- SEO services: crawled 5 Oct 13:01 ✔
- Wilmington digital marketing: 29 Sep (before the deploy) ✘
- Delaware web design: 19 Sep ✘
- NYC local SEO: 19 Sep ✘
- Philadelphia local SEO: 11 Sep ✘ (Google still holds the original, pre-15-Sep version)
Two of six re-crawled so far; no further indexing requests. Next check 13 Oct.

## 6 October 2026 — scheduled reading + leadership briefing + title rewrites prepared (read-only; nothing deployed)

- **GSC US, week 29 Sep–5 Oct vs 22–28 Sep:** impressions 15,517 vs 13,008 (+19%); on the 1,170 keywords present in both weeks, weighted position 26.5 → 31.2 (real slide, not mix); 443 keywords slipped >3, 203 rose >3; 109 new keywords = 926 impressions at avg pos 36. Daily: 2.0K (30 Sep) → 3.9K → 4.5K → 3.4K (3 Oct) at pos 33. Spam update day 12, still open.
- **CTR by band (28 d, US):** ≤10: 3,805 imp / 4 clicks; 11–20: 13,774 / 2; 21–30: 20,369 / 1; 31+: 26,354 / 0. GSC Generative-AI report (US, 28 d): 3,160 impressions across 145 pages (top: delaware/seo 233, garage-door 186, pool 152, painting 133, delaware DM 129, kitchen remodelers 128, window-door agency 118) → most "page-1, zero-click" impressions are AI Overview citations. Page-2 (11–20) CTR is the fixable part (≈50 clicks expected, 2 received).
- **Workflow (48 agents, propose + adversarial verify):** title/description rewrites for 24 pages (12 at pos 6–20, 12 high-impression pages at 29–42); 7 approved as drafted, 17 corrected (repetition, wording of claims). Found a sitewide stale fact: most pages print "4.9/5 on Clutch" while Clutch shows 5.0 (21 reviews) → fix in the 28 Oct batch. Output: scratchpad/titles.json; artifact "Zonic Title Rewrites". Do NOT deploy before 28 Oct.
- **Artifacts:** "Zonic SEO Briefing" (for leadership: sitewide hold until 28 Oct, authority plan, checkpoints, limits) and "Zonic Title Rewrites".
- User confirmed the question is about the complete website: answer stands — no sitewide SEO/keyword rewrite; keywords already map to the right pages; the constraint is authority (AS 9 vs 30–60).

## 6 October 2026 — master growth plan approved (Oct 2026 → Apr 2027)

- Plan file copied to `docs/growth-plan-2026-10.md`; shareable page: artifact "Zonic Growth Plan". Research inputs: GSC (90 d, index coverage: 219 indexed, 314 "crawled not indexed" = 311 `_next/static` chunks + 2 old home-inspector URLs + 1 non-www), GA4 (90 d by channel/device/source; leads by landing page), Semrush (competitors, Site Audit 98%/0 errors, PT 9.15% vis, 10 up/51 down), three read-only codebase reviews (page architecture; template duplication; design system), one technical-workstream design.
- Key findings added to the record: ~100 of 184 sitemap URLs are template clones (local-SEO 81–93% shared, marketing-agency 72–82%, website-design 77–85%, offer landers 66% verbatim; home-inspector states 79–85% unique = model); contradictory claims (4.9 ×74 files vs 5.0 ×33; 50+/500+/1,500+; no-long-term vs six-month; $900 vs $2,000; 60–90 d vs 3–6 mo); all photos AI-looking, invented dashboard stats, 707 hex colours, 3 typefaces, 6 icon sets, marketing-agency pages hide the global nav; GA4 referral leads: Clutch 132 sessions/22 leads, chatgpt.com 105 sessions.
- User decisions: offer landers → noindex + out of sitemap (generic offer page stays indexable); design = trust fixes (Nov) then tokens/typeface (Dec–Jan), no full redesign; focus by service line GBP → web design → local SEO across the whole site; 5 h/week off-site.
- Phases: P0 freeze + tooling to 28 Oct; P1 28-Oct batch (24 titles, facts registry wave 1, lander noindex, post merge, additions, blog related-services); P2 Nov trust layer + GBP pillar; P3 Dec–Jan consolidation + tokens + web-design pillar; P4 Feb–Apr local SEO + prune. Checkpoints mid-Nov, mid-Dec, mid-Jan, mid-Feb, April.
- Next engineering: WS0 tooling (`scripts/text-snapshot.mjs`, `content-similarity.mjs`, `check-brand-facts.mjs`, `crawl-inbound-links.mjs`, `validate-registry.mjs`), `src/shared/brandFacts.ts`, `src/data/siteRegistry.ts` — all non-visible, allowed before 28 Oct.
- **WS0 tooling added (6 Oct, uncommitted, no visible change):** `scripts/text-snapshot.mjs` (187 route snapshots → `reports/text-snapshots/`, tracked in git for freeze diffs), `scripts/check-brand-facts.mjs` (baseline: 207 files with literal claims; volume N+ 136 files, six-month 111, 4.9 88, no-long-term 75, 60–90 d 63, $2,000 52, invented reviews 45, 5.0 43, uplift % 42, 3–6 mo 21, $900 17), `scripts/crawl-inbound-links.mjs` (baseline `reports/links/2026-10-06.json`: 111 of 153 service pages have ≤3 strict in-content inbound links; home-inspector states 0 strict / 31 with modules). npm: `snapshot`, `facts:lint`, `links:crawl`. `.gitignore`: `reports/links/`, `reports/brand-facts-lint.json`.

## 9 October 2026 — new page: Google Business Rank Checker (`/google-maps-business-ranking-tool-online`)

- **Built at the user's request.** H1 "Google Business Rank Checker", hero H2 "Check your Google Maps Ranking", the myservice.report "Local Search Quick Scan" iframe in the hero (wrapped in `LenisIframeGuard`). Main-site chrome (Navbar + Footer), Zonic yellow/black tokens; styles in `src/app/style/rankChecker.css` (scoped `.grc-page`), motion in `src/app/components/RankCheckerFx.tsx` (reveal, count-up, typed queries; reduced-motion respected; all content server-rendered).
- **Keyword set (Semrush US, Oct 2026):** google maps rank checker 720, google local rank checker 590, google maps rank tracker 390, google my business rank checker 260 (KD 18), gmb rank checker 140, google maps ranking checker 140, google maps ranking tool 90. Tool intent only — ranking-factor/how-to-rank queries stay on `/local-seo-google-business-optimization`, linked up with the head term.
- **Sections:** keyword ticker, animated 7×7 geo-grid (all metrics computed from the same example array), "why your own search misleads", four-metric reading panel, query patterns + typed search box, 5 steps, checker vs tracker table, five result patterns → service links, evidence block (Clutch badge, Dover address), 9 FAQs, final CTA.
- **SEO:** title "Google Maps Rank Checker | Free Google Business Rank Tool" (57), description 147 chars, self canonical, JSON-LD WebPage + WebApplication (free Offer) + BreadcrumbList + FAQPage; 9 in-content internal links (all 200). Added to `sitemap.ts`, `public/llms.txt`, Navbar GMB tags ("GMB Rank Checker") and Footer services list.
- **Open:** the widget prints "This embed is unavailable" on localhost and when opened directly — its domain whitelist must include www.zonicllc.com (and the preview host to test there). In-content link from the hub page deferred to the 28 Oct batch (page-text freeze).

## 9 October 2026 (later) — rank checker page: redesign + hero from the user's design file

- **Widget diagnosis:** the myservice.report embed validates the parent origin (`/embed-keys/validate-by-embed-id?embedId=…&parentOrigin=…`). Allowed: `www.zonicllc.com` only (7×7 grid, 10 km default). localhost, Vercel previews and the bare apex `zonicllc.com` all get "This embed is unavailable". iframe now sets `referrerPolicy="strict-origin-when-cross-origin"` so the origin is always sent. Widget form = Google Maps URL + keyword + email; results include average position, best/worst, top performers, "where competitors beat you".
- **Redesign (user feedback: too generic, no fade-reveal sections, side spacing must match the header):** removed all section reveal animations; insets now mirror `.navbar-wrapper` (100 / 30 / 40 / 20); palette = homepage tokens. Every section carries an animated Google-Maps/GBP UI component: Maps list + map with a moving searcher (listing order changes), 7×7 geo-grid map with scan report, typed keyword demo with per-pattern grid, 5-step phone demo, checker-vs-tracker snapshot + line chart, mini-grid patterns, Zonic GBP-style profile card, today→goal grid. Demos pause off screen.
- **Hero:** replaced with a 1:1 port of the hero in `~/Downloads/zonic-google-business-rank-checker.html` (Manrope 800 / Inter, blue→violet gradient, chips, widget shell with toolbar + trademark note). Kept the H2 "Check your Google Maps Ranking" from the original brief; top padding adds the fixed navbar height; stat bar below the file's hero not ported.
- **Follow-up (same day):** widget shell capped at 1000 px wide and the iframe cut from 900 → 760 px tall (700 / 680 on phones); removed the note + trademark line under the widget; added the design file's four-item stat bar (1,500+ optimized · 900+ reinstated and verified · Nationwide · Map Pack) directly under the hero, aligned to the navbar insets.
- **Theme pass (same day):** whole page moved to the hero's palette and type (Manrope 800 / Inter, #3157f5 → #6e50f7; gradient pin = your business); section padding cut to 72 / 64 / 56 / 48 px. Distance section rebalanced (bigger Maps demo, reasons as cards below); geo-grid and keyword/compare/pattern headings centred, geo map capped at 1040 px; "How to check" steps replaced by the design file's ranking-factors section (relevance / distance / prominence, with small animated visuals) — the how-to answer moved into a new FAQ; checker-vs-tracker cards rebuilt (viewfinder snapshot + specs + results vs annotated 12-week chart + week-1/week-12 grids) and the table tinted per column; five patterns rebuilt as cards with diagnosis tags, overlays (check-list, "green stops here" ring, two-keyword split, seen/clicked/called funnel, sponsored ad) and per-card stats; team section rebuilt as a panel with three proof tiles and a GBP-style card holding the Clutch badge; final CTA is a dark panel with an example plan (today → goal grid, four levers ticking off).
- **Polish pass (same day):** distance section drawn flat (no shadows); ranking-factors heading/kicker/copy centred and the animated card visuals replaced with icons (target / navigation / award); checker-vs-tracker block capped at 1040 px with smaller grids, chart and type; patterns cut to the three grid-readable ones (profile / reach / relevance — heading now "Three Grid Patterns…"; web-design and Google-Ads links from the dropped cards are gone) as compact cards with a small grid and one note chip; team section no longer boxed; final CTA is a full-width dark band with a before/after "wipe" (today's grid → goal grid, avg 9.7 → 2.6, 3-Pack 9 → 37 of 49, labelled "Example goal").
- **Polish pass 2 (same day):** hero widget 760 → 640 px (600 / 580 on phones); section H2s cut to clamp(28–40px) with line-height 1.22; the four "how to read" items are now icon cards (pin / bar chart / pie / eye-off, colour-coded) with h3 titles; checker-vs-tracker cards are full-width horizontal rows (head · visual · results) and the table is full width; CTA left column gained a four-point "on the call" list, a 1-2-3 steps row and a Clutch trust line so it matches the component's height (566 vs 578 px).
- **Polish pass 3 (same day):** section H2s back to clamp(32–50px) / line-height 1.06; checker and tracker cards side by side again, each laid out as header row + visual (left) + stacked results (right); geo-grid map and the four "how to read" cards widened to the full content width (map stage up to 500 px, report panel 340 px).
- **Polish pass 4 (same day):** geo-grid map and "how to read" cards capped at 1160 px (from full 1270); section H2 line-height 1.06 → 1.16 (all sections, for consistency); report panel top-aligned with the grid's first row instead of vertically centred.

## 12 October 2026 — rank checker: widget confirmed + Services menu link
- User re-sent the myservice.report embed code; widget ID 70aa6aa5a37de1e22f7656f2 matches what the page already uses (src unchanged). Height kept at 640 px per the 9 Oct request rather than the snippet's 900.
- Navbar: "Google Maps Rank Checker" card added to the desktop Services dropdown directly after Travel & Tourism Marketing (RiRadarLine icon), and to the mobile Services list after Travel & Tourism. The existing "GMB Rank Checker" tag under Google My Business stays.
- **Widget swap (12 Oct):** myservice.report scans failed on the provider's side ("Scan failed. Please try again." = server error code EMBED_SCAN_FAILED returned by /embed/v1/start-scan, not our page). Old iframe commented out in the hero; replaced with the Local Marketing Reports (BrightLocal) lead-gen widget `c6bf81ed34cc47ccb0f432b81e9e4aea8bc7dd0a`, mounted by `LeadGenWidget` (RankCheckerFx.tsx) because the loader needs `document.currentScript` and a JSX <script> never runs. The widget sizes its own iframe (476 px on desktop); fixed 640 px height removed; host min-height 420 px. It is a "Get your free local SEO report" form (business name → Google suggestions → report on rankings, listings, reviews, on-site SEO, social), so widget-specific copy was updated: meta/OG/Twitter descriptions, WebApplication schema (description + alternateName "Free Local SEO Report"), FAQs 1–3 (free / what the report covers / how to check), geo-grid intro ("a geo-grid rank check…"), keywords H2 ("Which Keywords to Check Your Ranking For"), team and CTA wording (report instead of scan), llms.txt entry. Renders on localhost; widget colours (teal) are set in the Local Marketing Reports dashboard.
- **Mobile hero H1 (12 Oct):** globals.css forces `line-height: 1.34 !important` on h1–h3 below 768 px; the rank-checker hero H1 now opts out with 1.06 !important (verified at 390 px: 58px type / 61.7px line).

## 14 October 2026 — Semrush "structured data item is invalid" on the rank-checker page (fixed in code, uncommitted)
- Page: /google-maps-business-ranking-tool-online. Its `WebApplication` JSON-LD (a SoftwareApplication subtype) lacked `aggregateRating`/`review`, which Google's software-app rich result requires. The tool has no genuine user ratings, so no rating was added.
- Fix: node converted to `@type: Service` (same name, alternateName, description, free Offer, provider, `serviceType`, `areaServed`), keeping `@id #tool` so the WebPage `mainEntity` reference still resolves. Rendered schema now: WebPage, Service, BreadcrumbList, FAQPage. Visible text unchanged (snapshot diff clean for this route). tsc + build OK.
- After deploy: rerun the Semrush campaign (Site Audit → Rerun) so the error clears; GSC will drop any "Software app" enhancement entry on its next crawl.

## 14 October 2026 — status report ("impressions dropped in 24 h"); artifact "Zonic Mid-October Report"

- **24-hour view is provisional:** GSC hourly view showed 453 impressions / 1 click; daily data (complete to 11 Oct) shows a normal weekend dip (Oct 10 2,741; Oct 11 Sun 2,290 vs Sep 27 Sun 1,915). Week 5–11 Oct vs 28 Sep–4 Oct (US): impressions 23.6K vs 22K (+8%); shared-keyword position 32.1 → 34.6; 464 worse / 198 better; 91 new keywords (1,231 impr @37.6), 54 gone (477).
- **Spam update finished:** status dashboard shows "13 days, 16 hours" (ended ~8 Oct). Decision point 22 Oct.
- **Second spam-link wave:** Semrush Backlink Analytics 14 Oct: referring domains 2.2K (+550%/30 d), backlinks 10K (+248%), 2,159 of 2,198 domains AS 0–10, toxicity High, "99+ backlinks found today"; ~1,300 new domains in the week of 28 Sep–5 Oct and ~300 the week after; anchors "premium backlinks… higher rankings", "expert backlink… website rankings", "high quality do…ks online cheap". Backlink Audit last run 1 Oct (206 domains) → user must rerun, disavow all toxic at domain level, export full TXT (includes the 136 earlier lines), upload (replaces), repeat weekly. Open question remains whether a link package was bought.
- **Pages:** Philly 1,962→2,163 @33.8→39.2 (still not re-crawled since 11 Sep); real-estate 1,558→464 — the "cheap seo for realtors" query (957) vanished, core queries steady/better (e.g. "real estate seo expert" 34 vs 40 @39 vs 47); NYC 1,014→836 @34.7→42.9 (re-crawled 12 Oct); Delaware web design 432→594 (not re-crawled); Wilmington 415→494 (re-crawled 7 Oct); window-door 799→564. Re-crawl status: 4 of 6 done.
- **Quick SEO check (live pages):** all 7 key pages have 1 H1, full alt text, canonical, OG/Twitter. Flags for the 28 Oct batch: reinstatement title 69 chars / description 190; real-estate description 113; verification description 99 and no FAQ markup; rank-checker WebApplication schema (fix in code, awaiting deploy). Homepage schema: Organization, ProfessionalService, WebSite, SiteNavigationElement, Service, FAQPage.
- **Tooling status:** GA4 MCP token expired (user must re-authorise); Semrush Position Tracking old project URL 404s — site audit now under campaign 31539815 (new project); update URLs next time.
- Semrush Position Tracking moved to a new project/campaign (user link 14 Oct): https://www.semrush.com/tracking/landscape/31539815_5619385.html — 92 keywords, data from 8 Oct; 14 Oct: visibility 5.07%, est. traffic 8.25, avg pos 63.3, 15 up / 38 down, top 3 = 5, top 10 = 9, top 100 = 55. Not comparable with the old 108-keyword history; treat 8 Oct as the new baseline.

## 17 October 2026 — view on redesign using the Dallas–Fort Worth layout (assessment only, no change)
- New DFW pages were added 15 Oct (commits 8faeffc, 62c4371, 727488f): /services/dallas-fort-worth/digital-marketing-agency (2,147 words, 34 headings, mobile Lighthouse 91, LCP 3.4 s, CLS 0, 881 KB) and /web-design-agency (2,364 words). Layout: strong typography (Neue Haas, no highlight spans), clear hierarchy, colour stat tiles, hand-drawn arrow + rotating "21 verified reviews" badge, photos, icon service cards, process sections, consistent main nav.
- Weak points: AI-generated team/office photos (team-campaign.png etc., 1.8–2.3 MB PNGs), 📍 emoji inside both H1s, new unverified claim "120+ websites shipped", stock template tropes (arrow, rotating badge), DFW is a no-office metro (same constraint as Philadelphia/NYC) and the pages were added outside the plan's page gates.
- Recommendation given: adopt the DFW layout as the house-style reference for the Dec–Jan consolidation (tokens taken from it), fix its own AI signals first (real photos, no emoji in H1, facts from the registry), migrate one page family at a time with text-identical snapshots, Tier B (zero-impression) pages first, nothing on ranking pages before 28 Oct. Not a one-shot sitewide reskin.

## 17 October 2026 — redesign programme approved + R0 setup (uncommitted)
- Plan §6b added to `docs/growth-plan-2026-10.md`; shareable page "Zonic Redesign Plan". Owner decisions: redesign is the top engineering priority; DFW layout as reference; single typeface Satoshi (owner supplies woff2); Tailwind; no content/keyword loss; layouts flex to content; if text does not fit, add to it or trim filler only; de-template per trade (different components/images/content, not noun swaps). Schedule: R0 setup 18–22 Oct, R1 Satoshi sitewide 23 Oct, R2 pilot (offer landers + DFW) 24–27 Oct, R3 home + GBP pages 3 Nov, R4 web-design 10 Nov, R5 marketing-agency 17 Nov, R6 local-SEO 24 Nov–1 Dec, R7 cities/states/blog/hubs 8–15 Dec, R8 de-templating Jan–Mar. Layout-only steps judged after 7 days, content steps 14.
- **R0 done (invisible):** Tailwind 4.3.3 + `@tailwindcss/postcss` (`postcss.config.mjs`); `src/app/style/tailwind.css` with `prefix(tw)`, no Preflight (theme + utilities only), `source(none)` + `@source "../../components/rd"`, `@theme` tokens from the DFW pages, scoped `.rd` reset; imported in `src/app/layout.tsx` after the existing CSS. Emits no utilities until `src/components/rd/` has components → zero visual effect (text snapshot unchanged except the owner's 15 Oct DFW link on /services/web-design).
- **Guards:** `scripts/text-snapshot.mjs` now also writes `reports/seo-snapshots/<route>.json` (title, description, canonical, robots, H1, H2 list, word count). New `scripts/keyword-guard.mjs` (fails on any title/description/canonical/robots/H1/H2 change, word-count drop, `--layout-only` text change, or a missing query word from `reports/gsc/queries/<route>.txt`; `--worktree` for dry runs) — dry run 190 routes, 0 failures; forced-fail test works. New `scripts/visual-snap.mjs` (puppeteer-core + system Chrome, 390/768/1440, overflow + clipped-text detection, pixel diff vs previous run) — smoke test on DFW + reinstatement: 0 issues. npm: `keyword:guard`, `visual:snap`. devDeps added: tailwindcss, @tailwindcss/postcss, puppeteer-core, pixelmatch, pngjs. `.gitignore`: reports/visual/.
- **Baseline to commit before R1:** `reports/text-snapshots/` + `reports/seo-snapshots/` (the guard reads the baseline from HEAD).
- **Blocked on owner:** Satoshi woff2 files (400/500/700 or variable) + licence file.
- **Owner rule added 17 Oct:** nothing old is deleted during the redesign. Each page/family is redesigned and adjusted first; old CSS, fonts (Neue Haas, Inter, Manrope), images, components and page code stay in the repo until a final clean-up phase (R9) after all families have passed their watch. Plan §6b updated (R1 no longer drops fonts; per-family CSS deletion removed; R9 clean-up added).
- 17 Oct: Satoshi woff2 added (not applied) from ~/Downloads/zonic-font → `src/app/fonts/satoshi/` (Regular 400, Medium 500, Bold 700, Black 900; verified woff2 signature, byte-identical copies) + README with weights, licence note (ITF Free Font License via Fontshare; licence file still to add) and how R1 will load it. No code imports them; `tailwind.css` only references `--font-satoshi`, which is undefined, so rendering is unchanged.

## 17 October 2026 — redesign pilot: both DFW pages converted to Tailwind + Satoshi (uncommitted, user deploys)
Pages: /services/dallas-fort-worth/digital-marketing-agency and /services/dallas-fort-worth/web-design-agency. Owner scope: font family + Tailwind only; plus section headings 67px → 62px on both (hero H1 unchanged).
- **Method:** new `scripts/css-to-tailwind.mjs` converts the page stylesheet (`dfwMarketing.css`, + `dfwWebDesign.css` for the web page) into prefixed Tailwind utilities on the JSX elements (arbitrary properties + arbitrary variants for context/pseudo/descendant rules, `max-bs*` Bootstrap breakpoints, cascade pruning, shorthand/longhand ordering, component-prop handling, `scripts/migrations/dfw-*.json` boosts). Class names kept as unstyled markers (`dm-*` marketing, `dw-*` web; BEM `__` → `-` because Tailwind reads `_` as a space in variants). Keyframes + root tag rules → `src/components/rd/dfw-marketing/dfwMarketing.base.css`, `src/components/rd/dfw-web/dfwWeb.base.css`.
- **Proof of fidelity (before the font change):** new `scripts/style-diff.mjs` (every element in <main>, all computed properties + ::before/::after, 390/768/1440, animations frozen at t=0) → **0 differences** on 1,119 elements (marketing) and 1,166 (web).
- **Then visible changes:** Satoshi via new shared loader `src/app/fonts/satoshi.ts` (next/font/local, 400/500/700/900, size-adjusted Arial fallback; weight 600 renders as 700) applied on <main>; lead form inside the page inherits Satoshi; Strip section headings `clamp(34px,4.6vw,68px)` → `…62px` (62px at ≥1348px wide). Navbar/footer unchanged (they switch in R1). Satoshi now renders 318/363 text elements on the two pages, no other face inside <main>.
- **Checks:** keyword guard (layout-only) passes on all 190 routes; visual check 0 overflow/clipped text at 3 widths; page height +4% (Satoshi sets wider; e.g. "Highland Village" wraps). Lighthouse mobile local: marketing 93 (was 91 live/LCP 3.0 s, CLS 0); web 80–83 vs old 79–80 on the same machine, FCP 2.4 → 2.0 s, CLS 0. HTML grows ~40 KB gzipped per page (long arbitrary class strings) — to be reduced when components are rebuilt with theme utilities during the real redesign.
- **Files:** pages rewritten in place; originals preserved as `…/_legacy/LegacyPage.tsx` in each route folder (rollback = re-export); converted visuals copies in `src/components/rd/dfw-marketing/` and `src/components/rd/dfw-web/`; old `dfwMarketing.css`, `dfwWebDesign.css`, `DfwMarketingVisuals.tsx`, `DfwWebVisuals.tsx` untouched (owner rule: delete only in final clean-up R9). `tailwind.css`: utilities now unlayered (must beat unlayered Bootstrap/globals), Bootstrap breakpoints, `@source` per migrated page.
- **17 Oct, later — Satoshi rejected by the owner; Neue Haas Display restored** on both DFW pages (removed the `satoshi.className` on <main>, the lead-form inherit rule, and the brief H1/H2 weight-900 change that had been requested for Satoshi Black). Verified with `scripts/style-diff.mjs` against the original captures: the only differences left are the requested section headings (Strip `clamp(34px,4.6vw,62px)`, i.e. 66.24 → 62px at 1440 wide) and the heights that follow from them. Satoshi files (`src/app/fonts/satoshi/`, `src/app/fonts/satoshi.ts`) stay in the repo unused until the final clean-up; `tailwind.css` `--font-sans` falls back to `inherit`.
- **17 Oct — owner: one font for the whole website = Neue Haas Display; remove Satoshi; plan only, do not apply sitewide yet.** Plan §6b updated (R1 = Neue Haas everywhere, Inter/Manrope stop being applied, date "when the owner says go"); `tailwind.css` font token now `inherit`; Satoshi removed from the project (`src/app/fonts/satoshi/`, `src/app/fonts/satoshi.ts`; originals remain in ~/Downloads/zonic-font). No page uses Satoshi; build OK. Shared page "Zonic Redesign Plan" updated.

## 17 October 2026 — chat split
From today the redesign runs in a separate chat; this chat covers website optimization only. Redesign handoff: `docs/redesign-handoff.md`. Open SEO items (28 Oct batch, disavow at scale, GA4 re-auth, readings 20/22 Oct, reinstatement links, off-site programme) are listed in the memory note "Chat split Oct 2026".

## 17 October 2026 — DFW page sections (uncommitted)
- /services/dallas-fort-worth/digital-marketing-agency: "Where We Work" card — map photo replaced by the animated `AreaMapPack` (src/components/rd/dfw-marketing/AreaMapPack.tsx; Map Pack card cycling Dallas → Fort Worth → Frisco); lead paragraph rewritten to a growth/leads angle at owner request (all place names and the 123,000 figure kept).
- /services/dallas-fort-worth/web-design-agency: "Web Design Across Dallas–Fort Worth" county/city card replaced by a centred blue Zonic web-design service banner (owner request). Removed from that page: the county/city lists, the old H2, and five trade links (roofing/HVAC/plumbing/dental/law-firm website pages); old markup kept in `_legacy/LegacyPage.tsx`.

## 19 October 2026 — new page: Dallas–Fort Worth local SEO agency (draft, uncommitted)
- **URL:** /services/dallas-fort-worth/local-seo-agency. **Status:** `robots: noindex, follow`, not in sitemap or navbar until the owner adds photos (every photo slot is a shimmer skeleton with a caption naming the shot).
- **Keywords (Semrush US, 19 Oct):** local seo dallas 480 (KD 9), dallas local seo 480 (15), local seo services dallas 390 (23), local seo company dallas 320 (26), local seo dallas tx 320 (14), fort worth local seo 320 (14), dallas local seo company 170, local seo fort worth 140 (8), dallas local seo agency 110 — core ≈ 2,400/mo + Fort Worth ≈ 660/mo. SERP for "local seo dallas" = Semrush directory, agency blogs, Quora, Facebook (no strong dedicated page).
- **Title:** "Local SEO Dallas & Fort Worth | Dallas Local SEO Company". **Description:** "Dallas local SEO services: Google Business Profile, reviews, citations and city pages that put DFW businesses in the Map Pack. Plans from $197/mo." H1 "Dallas–Fort Worth Local SEO Agency for Local Businesses"; 12 H2s; 13 FAQs; schema WebPage + Service (3 priced plans, areaServed 12 cities + 11 counties) + BreadcrumbList + FAQPage.
- **Content angle (competitor gaps from the 19 Oct research):** Dallas vs Fort Worth proximity in the Map Pack; Google's service-area business rules; FTC fake-review rule + Google review policy; 2026 AI search (BrightLocal: 45% used AI tools for local recommendations; Ask Maps; GBP Q&A retired; Apple Business; Bing Places); Census growth (Fort Worth > 1M, Celina fastest-growing US city of its size); visible pricing ($197 / $750 / $1,500, month to month). Facts only from existing pages + sourced stats listed in the page header comment.
- **Build:** first page built from the redesign component library — `src/components/rd/dfw-kit/` (kit.css tokens + root rules, primitives.tsx, visuals.tsx) with short `tw:` utilities; new local SEO UI in `src/components/rd/dfw-local-seo/` (GBP profile, reviews, AI answer panels, Google Maps phone journey, city rank board). Same section order and look as the DFW web-design page; class-attribute bytes in <main> 93 KB vs 166 KB on the converted web-design page. tsc + eslint clean; visual-snap 0 layout issues at 390/768/1440.
- **Launch steps (when photos are in):** add `src` to each `<Ph>`, drop `robots`, add to `src/app/sitemap.ts`, navbar Locations tag under Dallas–Fort Worth, link from the DFW marketing hub's local SEO card + web-design page's local SEO card (the hub currently also targets "local seo dallas"), commit a text/SEO snapshot baseline.

## 19 October 2026 — DFW pages: UI components instead of photos (owner request, uncommitted)
- All three DFW pages (digital-marketing-agency, web-design-agency, local-seo-agency). About section: narrow left photo → solid info card with real text (marketing "One team for every channel", web "Built to bring in leads", local SEO "From $197 a month"; facts from each page); it now also shows on phones. Wide right box keeps its image (owner asked to bring it back after a UI version). Process: the 4 step photos per page → 12 step-specific UIs (audit bars, profile switches, city pages publishing, report chart; call booking, sitemap tree, design system, launch checks; audit gauge, listings sync, work queue, report bars).
- Code: shared blocks `src/components/rd/dfw-kit/ui.tsx` + keyframes `ui.css` (imported by all three pages); per page `dfw-marketing/MarketingUi.tsx`, `dfw-web/WebUi.tsx`, `dfw-local-seo/LocalSeoUi.tsx` (unused about UIs LeadsDashboard / RedesignSlider / GridScan kept there). Photo fields removed from the steps data; image files untouched. No heading or copy changes on the live pages; image alt text for the removed photos is gone.
- Fixed: Tailwind drops `bg-[gradient…,#colour]` classes (mixed image + colour), so the local SEO journey stage tint never rendered — now `[background:…]`. tsc + eslint clean; visual-snap 0 layout issues at 390/768/1440 on all three pages.
- 19 Oct (later): local SEO about card changed at owner request from the plan list ("From $197 a month", repeated the pricing section) to "How Google picks the top three" — relevance, distance, prominence (Google Business Profile Help), no paid ranking. AboutCard now takes rich-text points; tighter spacing below 1200px so no card clips at any width.
- 19 Oct (later): local SEO about wide box now uses the owner's illustration /images/dfw/seo/dfw-local-seo-visibility.jpg (from a 2400×1792 PNG, saved as 1800 px JPEG, 337 KB). Note: the artwork shows "+310% Local Traffic" and "DFW #1 Map Pack" — not backed by verified data; owner told.

## 19 October 2026 — homepage redesign draft at /home2 (uncommitted, noindex)
- Owner request: new homepage in the Dallas layout, built first as a separate page. Sections: hero (Clutch, Trustpilot, Yelp, Google badges; 900+ / 1,500+ / 5.0 Clutch / 20+ niches pillars) → about (Dover HQ card + Delaware office photo) → 7 horizontal service cards with a UI each (Local SEO, AI Search, GBP incl. reinstatement steps, PPC, Web Design, UI/UX, Graphic Design) → platform hub → Clutch reviews → Launchpad (day-by-day list synced to an animated phone) → difference (busy vs books jobs) → FAQ (8, unchanged) → blog (6 latest) → contact (email/phone/office + lead form) → gradient banner after the owner's reference → footer.
- Copy/headings carried over from the live home word for word; live home untouched. Not on /home2 yet: process steps, rankings/report block, free-audit block, homepage JSON-LD — to decide before a swap.
- Files: `src/app/(main)/home2/page.tsx` (metadata + blogs), `src/components/rd/home/HomePage.tsx`, `src/components/rd/home/HomeUi.tsx`, `src/components/rd/dfw-kit/hub.tsx`; `StepUi` gained `center`. Lesson: Tailwind `@source` lines for files created after `next dev` started aren't picked up — keep redesigned page markup under `src/components/rd`.
- tsc + eslint clean; visual-snap 0 layout issues at 390/768/1440.
- 19 Oct (later), /home2 owner changes: hero "Built for US businesses" pill removed; H1 widened to two lines (new Strip size `heroWide`); about photo = /images/dfw/team-campaign.png; row heads top-aligned; all service cards details-left / UI-right with a light per-colour tint on the detail box; UI cards centred and capped at 380px; GBP card shrunk (reinstatement panel removed, its 4 steps are now the tick list); Launchpad compacted to fit one screen (≈665px at 1440: 2×2 steps, phone at 82%); blog = the live homepage's Swiper slider (Blogs.tsx) on a white band; contact shows email + phone only (no office address); "Trusted by…" and the closing banner heading on two lines. visual-snap flags the slider's 2-line excerpt crop (same 3 flags on the live home — by design).
- 19 Oct (later), /home2: blog slider restyled for this page only (homeBlogs.css scoped to .hm2-blogs — ink heading, ink View All pill with circled arrow → gold on hover, white round arrows → ink on hover, Continue Reading → blue on hover); AI Search card in its own teal (was grey/ink); hero H1 on three lines ("…for SEO, / AI Search, Web Design / and Google Ads.") from 768 px up.
- 19 Oct (later), /home2: service cards stack on scroll (each row sticky under the fixed navbar at 108px + 14px per card, 146px base at 992–1199; only ≥992 px wide and ≥760/860 px tall; page-coloured rounded row background + top shadow). Blog View All is now the kit Pill (new optional `viewAll` prop on src/app/components/Blogs.tsx; live homepage passes nothing, keeps its old button).
- 19 Oct (later), /home2: shadows removed from the service cards (stacking edge shadow and the tilted UI card's lift shadow), at owner request.
- 19 Oct (later), /home2: each service card's details box and UI box joined into one card (no gap, outer corners rounded, row background removed).
- 19 Oct (later), /home2: service-card gap and page-coloured row background restored; all rows pin at the same top so a covered card never shows (no peeking edges, nothing through the gap). Hero H1 back to two lines: "Digital Marketing Agency for SEO, / AI Search, Web Design and Google Ads."
- 19 Oct (later), /home2: service-card rows have no background (only the section is coloured); while stacking, rows are equal height (auto-rows-fr on the list, ≥992 px) so covered cards never peek out and gaps line up. Map pin removed from the hero H1 (H1 text unchanged).
- 19 Oct (later), /home2: service-card UIs rebuilt (owner: v1 too basic and slow) — src/components/rd/home/ServiceUi.tsx + serviceUi.css, 6s loops: Google Maps (pin pulses, listing climbs #3→#1), AI chat (question types, answer streams, Your Business is the top pick with sources), Business Profile (suspended → reinstated, insights grow), Google Ads (cursor clicks Call now, incoming call, cost per lead down, leads up), browser (wireframe → finished site, phone view, speed ring, quote request), design canvas (click → prototype arrow to the next screen, AA contrast), brand kit (logo draws, palette, social/card/sign). GBP card now green, Web Design pink. v1 service UIs removed from HomeUi.tsx (draft code). Stacked phone layout gives each UI a taller panel.
- 19 Oct (later), /home2: GBP card UI lost its three cover-photo strips; UI/UX card UI rebuilt as a design-tool inspector (selection hops header → service card → Book a visit button on an app screen, properties panel follows: layer, size, fill, radius, text, AA contrast).
- 19 Oct (later), /home2: service-card details boxes now a light solid tint of the card colour (blue #eaf0fd, teal #e3f6f3, green #e6f6eb, gold #fff5d6, pink #fdebf3, violet #efeafd, red #fdeae7); kicker in ink/65 and inline links in blue-dark for contrast. (Full panel colour was tried first; owner preferred light.)
- 19 Oct (later), /home2: about section redesigned (owner: too much white space) — text column left (label, H2, copy, 3 points, buttons), team photo right at the same height with the Clutch badge on its corner and the Dover HQ card floating over its bottom-left (stacks under the photo below 992 px). Section 1,113 → 775 px at 1440. Hand-drawn arrow removed; copy unchanged.
- 19 Oct (later), /home2: about section is now a bento grid (owner chose it from three options): white text tile (label, H2, copy, buttons) over two rows on the left; team photo with compact Clutch badge top right; lime points tile + ink Dover HQ tile bottom right. 586 px at 1440 (was 1,113 originally). RatingBadge gained a `compact` size. Copy unchanged.
- 19 Oct (later), /home2: about section reverted to the first design (heading + hand-drawn arrow left, copy/points/buttons right; Dover HQ card + team photo row with the Clutch stamp) after split, bento and photo-banner variants were rejected. Service-card details boxes now white.
- 19 Oct (later), /home2: about = content left (label, H2, copy, points, buttons); right = short ink Dover card ("Based in Dover, Delaware / Serving businesses nationwide" only) beside the team photo, compact Clutch stamp on the photo corner. 684 px at 1440.
- 19 Oct (later), /home2 about: team photo fills the right column; the short Dover card overlaps its bottom-left corner (reaches into the column gap on desktop, inside the photo on tablet/phone, compact on phones); "Meet the team" is now the filled ink pill with the circled arrow.
- 19 Oct (later), /home2 about: heading on two lines ("The Growth Team Behind 900+ / Local Business Comebacks", from 1000 px up); points now four in two pairs (2×2; title over short line) — the fourth, "No long-term contracts", is the homepage FAQ answer; "Built for smaller budgets, bigger goals" shortened to "Built for smaller budgets". Section 684 → 615 px at 1440.
- 19 Oct (later), /home2 about: the four points replaced by a second paragraph carrying the same facts (one team under one roof, phone-first work, plain-English reporting on calls and jobs, no long-term contract). Section 615 → 552 px at 1440.
- 19 Oct (later), /home2 about: reverted to the original design (heading + arrow left; copy, 3 points, buttons right; full Dover card + team photo row with the Clutch stamp). Only change kept: gap between copy and the photo row 110 → 40 px on desktop (96 px tablet, 56 px phone, so the stamp never touches the buttons). "Meet the team" stays the filled arrow pill.
- 19 Oct (later), /home2: Launchpad rebuilt as a client component (src/components/rd/home/LaunchpadShowcase.tsx): day-steps are clickable (whole card, stretched button, aria-pressed) and drive the phone; autoplay 4s/step continues after a click, runs only while on screen, never with reduced motion. Phone redesigned: story progress bars, labelled screens (Brand identity / Your website / Google Business Profile / Live & taking leads lock screen with three lead notifications). Old LaunchPhone removed from HomeUi.tsx. About: line above the points removed; heading on two lines ("The Growth Team Behind 900+ / Local Business Comebacks", clamp 30–44 px); arrow positioned from the column top (224 px).
- 19 Oct (later), /home2 about: heading reverted to the original (section size, 3 lines at 1440); arrow 32 px under it (between the 18 px original and the 48 px tried), tip just above the Clutch stamp.
- 19 Oct (later), /home2: slight shadow (0 14px 30px -20px, 28% ink) on the white details box of each service card; none on the coloured UI panel.
- 19 Oct (later), /home2: service-card details box — shadow removed, 1px hairline border #e6eaf1 instead (owner).
- 19 Oct (later), /home2: service-card details content vertically centred in its box (content moves down 0–30 px; equal space above and below).

## 20 October 2026 — /home2 (uncommitted, noindex)
- New footer for /home2 only: src/components/rd/home/HomeFooter.tsx — white card on the page background (logo, description, phone/email/address/hours, social icons; Services 11 / Company 5 / Legal 3 link columns, same links as the site footer; Clutch, BusinessFirms, Yelp, Trustpilot badges + "Contact Zonic Media" pill) and a slim copyright bar. Column labels are <p>. Site-wide Footer.tsx untouched.
- PPC service card UI rebuilt (owner: "redesign properly"): search results with your sponsored ad + Call button the cursor clicks, then a Google Ads campaign view (Enabled; Calls ↑, Leads ↑, Cost/lead ↓ mini charts) and a "New call from your ad — tracked as a lead" row. No figures.
- 20 Oct (later), /home2 footer: no card — full-width white band with a top hairline straight after the banner section (banner is already a rounded box); text weights raised (links/description/contact medium, phone & email semibold, column labels darker).
- 20 Oct (later), /home2 footer: background = the page grey (#eef1f6) the banner section sits on (no white band, no top border), at owner request.
- 20 Oct (later), /home2 footer re-laid out (owner picked "top strip + columns" from three options to cut white space): top strip = logo · description · "Let's work together" + Contact button; then Services (2 sub-columns; 3 on tablet) · Company · Legal · Contact (phone, email, address, hours, socials); then badges + copyright on one line. Height at 1440: ~760 → 643 px; tablet 1,117 → 947 px.
- 20 Oct (later), /home2 footer: description under the logo; "Let's work together" removed; social icons under the Contact button (top strip, right); contact-detail icons larger (36 px circles, 17 px icons); "Based in Dover, Delaware · Serving businesses nationwide" line removed — bottom row = badges + copyright.
- 20 Oct (later), /home2 footer: Contact button under the description (left of top strip); trust badges moved to the top strip's right (where the button was) and social icons to the bottom row (where the badges were); horizontal gaps tightened (columns 32→24 px, services sub-columns 24→16 px, badges 20→16 px).
- 20 Oct (later), /home2 footer top strip: description runs wider (max 1000 px, 3 lines at 1440) and the Contact button + trust badges share one row under it, removing the empty block above the badges.
- 20 Oct (later), /home2: back on the site's original footer (src/app/components/Footer.tsx) at owner request. The redesigned footer stays in src/components/rd/home/HomeFooter.tsx, unused.
- 20 Oct (later), /home2 blog: new Swiper slider in the kit style (src/components/rd/home/HomeBlogSlider.tsx, client): heading row with prev/next round buttons + View All pill; white cards with hairline border, 190 px inset photo, author (user icon) + date row, title, 2-line excerpt, Continue Reading with circled arrow; whole card clickable; 1.1/2/3 per view; keyboard nav. Live homepage Blogs.tsx restored to its committed version (viewAll prop removed); homeBlogs.css deleted.
- 20 Oct (later): Footer.tsx gained an optional `badgesBelowContact` prop (default false = unchanged on every page). /home2 passes it: Clutch/BusinessFirms/Yelp/Trustpilot badges move under the contact details, and the socials/CTA row is lifted (footer-upper-content gap 80 → 36 px via .footer-wrapper--compact in footer.css). Verified the live home footer still has badges under the menus and the 80 px gap.
- 20 Oct (later), /home2 footer (badgesBelowContact): "Let's work together / Contact Zonic Media" removed; social links moved under the line, same row as the copyright; footer no longer forced to full-screen height (min-height 0) so it ends after that row. Live pages unchanged (checked: CTA present, socials above the line, min-height 100svh).
- 20 Oct (later), /home2 footer: trust badges slightly smaller (Clutch/BusinessFirms/Yelp 85 → 70 px, Trustpilot 110 → 92 px wide), scoped to .footer-wrapper--compact; live footer badges unchanged (85/110).

## 22 October 2026 — /home2 (uncommitted, noindex)
- Web Design and UI/UX service-card UIs rebuilt (owner: "show the service properly"). Web Design: browser where the site builds section by section (header, hero with Call/Free quote, services, reviews) beside its phone version; launch checklist ticks (Mobile-first, Fast loading, SEO-ready, Lead forms); status Building… → Live. UI/UX: 8s timeline — Research/Wireframe/UI design/Prototype tabs; three linked app screens (Home → Service → Booking) go wireframe → finished design, then taps flow through to "✓ Booked"; chips User flows / Usability tested / AA accessible. UX timeline uses inline animation styles (dev server's Tailwind stopped generating new classes for the file mid-session); the web card's phone is static (a fading layer inside the tilted clipped card didn't paint).
- 22 Oct (later), /home2: Web Design + UI/UX card UIs rebuilt again (v4) after the owner chose from sketched options. Web Design = "design to launch board": project bar (Designing… → Live), brand kit (colours, Aa, Primary/Secondary buttons) builds the homepage artboard (header, hero + Get a quote, tiles), cursor clicks Publish. UI/UX = "design tool canvas": dark toolbar (Booking app · UI, collaborators, Share), layers panel, Home + Booking artboards on a dotted canvas; the Designer cursor selects the Book button (layer highlights), a prototype link draws to Booking, a comment "Make the CTA clearer" appears and is resolved. Both 8s loops, stage-by-stage keyframes (wd-*, cv-* in serviceUi.css) applied inline; checked every tw: class in both cards has a CSS rule.
- 22 Oct (later), /home2 about: wide photo is now the owner's "Digital Marketing Strategy Workshop" image (saved as public/images/home/zonic-marketing-team-workshop.jpg, 1448×1086 JPEG q82, 455 KB from a 2.3 MB PNG); alt describes the team workshop.
- 22 Oct (later), /home2 reviews: Clutch widget replaced by the site's Google reviews widget (same Trustindex loader as /local-seo-google-business-optimization, wrapped in LenisIframeGuard so the review schema it injects is stripped). Copy under the heading now says the reviews come from Google; card resized for the shorter widget (min-height 420 → 360 px, content centred). Note: Trustindex does not render for headless browsers, so automated screenshots show an empty card; with a normal browser user agent it renders the Google review slider (checked on localhost).

## 22 October 2026 — Delaware location pages, redesign drafts (uncommitted, noindex)
- New noindex drafts in the Dallas–Fort Worth layout: /services/delaware/digital-marketing-2, /services/delaware/seo-2, /services/delaware/web-design-2, /services/wilmington/digital-marketing-2. The live pages are untouched; each draft carries the live page's metadata, canonical (→ live URL), JSON-LD, data and form type (leads route as before).
- Shared template src/components/rd/delaware/DelawareLanding.tsx (+ types.ts, delaware.css, DelawareUi.tsx). Sections in DFW order: hero + 4 bento stat cards → about (county card + photo + rotating badge) → [digital marketing only: "SEO + Web Design, One Agency" as the centred blue banner] → services grid → white results band (3 alternating rows with a UI each + the showcase photo with its stats, or the rank board on the digital-marketing page) → console card (band copy + console UI) → 4 process steps with a UI each → why cards + dark free-audit card → hub (6 services/signals + industries) → reviews (Clutch) + town marquee → compare (3 cards) → FAQ → grow links → contact card (form) → closing band.
- All headings, paragraphs, FAQs (still H3, now inside <summary>) and internal links come from each live page; nothing is copied from the DFW pages. New UIs: three-county Delaware map card (Dover HQ pin, hero facts), lead feed, monthly bars, Map Pack term list, towns-in-top-3 grid, PageSpeed gauge, console, audit/foundation/monthly/report-or-launch step UIs, audit score gauge, before→after scorecard, growth hub. 8s loops with stage keyframes (de-*).
- New copy (only): the closing band on each draft ("More Qualified Leads, Across Delaware." / "Rank First Across Delaware." / "A Website That Ranks and Converts." / "Win Wilmington's Top Three."), each line backed by claims already on that page.
- Checked: every live text node is on the draft except the hero "Rated 4.9/5 by …" line (the gold stat card shows 4.9/5), "Start with step one / Start with the free audit" link labels, the chat note in the form aside, and the decorative console H3; no internal link lost; every tw: class has a CSS rule; no horizontal overflow; visual-snap: 0 issues on the drafts (3 expected blog-excerpt flags on /home2).
- 22 Oct (later), Delaware drafts restructured to EXACTLY the Dallas–Fort Worth section pattern (owner: "same sections pattern but different content"): hero + bento → about + photo row → services → white "how we win" band (the page's 3 results, a UI each) → journey card (the page's "why" heading, lead and 3 reasons as the numbered list; phone with the showcase photo + its 3 stats, or the rank tracker on the digital-marketing page) → 4-step process (step 1 = the free-audit score card) → dark card (band copy + console) → hub (+ industries and the "grow further" links) → reviews → banner/pricing slot (marketing page's "SEO + Web Design" banner, then the compare cards) → FAQ → contact (audit checklist chips + form) → closing band (the page's free-audit banner: eyebrow, heading, paragraph, button). Removed: the separate why-cards row, standalone grow section, town marquee and the invented closing-band copy; about photo is now the page's wide showcase photo. Phone stats have a screen-reader copy. Checks: every live text node present except button/kicker labels ("Start with step one", "FAQs", "Get Started", "Ask About Your …", the form-aside labels) and the hero "Rated 4.9/5 by …" line; no internal link lost; no missing tw: classes; visual-snap 0 issues.

## 22 October 2026 (evening) — Google rating sitewide on the redesign pages + Delaware digital marketing draft rewrite (uncommitted)
- Owner: no Clutch rating, use the 5.0 Google rating. Hero "pillar" card now reads 5.0 + "Average rating from our Google reviews" on the three Dallas pages, /home2 (hero copy "5.0 Clutch rating from 21 reviews" → "5.0 rating on Google") and every Delaware draft (Google G icon). Rating checked on the Trustindex widget: 5.0 "Excellent", 18 reviews (count not printed on pages, it will change).
- Dallas pages (digital marketing, web design, local SEO): Clutch review widget replaced by the Google reviews widget (Trustindex via LenisIframeGuard, as on /home2); intro line now "Real reviews from Zonic Media clients, straight from Google."; card 420 → 360 px min height, content centred. Delaware drafts use the same widget.
- /services/delaware/digital-marketing-2 rewritten as short, keyword-led copy (Semrush US 22 Oct: marketing agency delaware 210, digital marketing agency in delaware 170, digital marketing delaware 140, delaware marketing agency 110, social media marketing delaware 110, advertising agency delaware 90):
  - Hero: no kicker; H1 "Digital Marketing Agency in Delaware / That Drives More Qualified Leads" (no blue); 36-word intro; pillars in a Delaware palette (violet / mint / peach / deep teal).
  - About: "A Delaware Marketing Agency That Brings In Leads." + two short paragraphs (Dallas length), no tick list; narrow box = text card (Based in Dover · Serving all three counties · towns per county · Philadelphia link · address).
  - Services: "Digital Marketing Services for Delaware Businesses" + intro + 6 Dallas-style cards (body, 3 points, link): Local SEO & GBP, Google Ads, Social Media Marketing, AI Search Optimization, Email Marketing, Website Design.
  - White band: "How We Bring In Leads Across Delaware" — 3 Dallas-pattern rows (label, title, body, 4 points, button) for Google Maps, Google Ads, AI search, each with a new UI (Map Pack rank by town, search ad + campaign trend, AI answer recommending Your Business). Replaced "What Happens When the Channels Finally Work Together".
  - Journey: "A Growth Partner, Not a Monthly Invoice" + 3 short reasons; phone = lock screen filling with tracked leads.
  - Process: "Our Digital Marketing Process in 4 Steps" with new steps (free audit → tracking & basics → launch ads, local SEO, social → report and grow); step 3 UI shows the channels going live.
  - Dark card: local SEO — "See Where You Rank in Every Delaware Town" + rank tracker UI + GBP reinstatement link + Google Maps rank checker button (replaced "Channels That Feed Each Other…").
  - Hub slot: "Found Everywhere Delaware Customers Look" platform hub on the white band (Google, Maps, Apple Maps, Yelp · ChatGPT, Gemini, Facebook, Instagram); "Six Services, One Growth Engine" and the "Visibility is Step One" links removed (owner).
  - "SEO + Web Design" banner: curved line/arc shapes in the background; body shortened.
  - Contact: Dallas pattern — "Let's Talk [chat icon] About Growing Your Delaware Business", short intro, phone/email, envelope + pin decorations, form (same formType); audit chips and address line removed.
  - Footer: the /home2 variant (badges under the contact details).
- Template defaults for the other Delaware drafts: H1 no longer blue, new pillar palette + Google rating, Google reviews widget, Dallas-style contact with icons, /home2 footer. Their copy is unchanged until each page is reworked.
- Checks: tsc + eslint clean; every tw: class has a CSS rule; no horizontal overflow; visual-snap 0 issues on the Delaware draft (seo-2's only flag is the screen-reader copy of the phone stats). Note: next.config.ts sends a report-only CSP that doesn't list cdn.trustindex.io, so the browser logs notices but nothing is blocked; add the domain before ever enforcing the CSP.
- 22 Oct (later), Delaware drafts (template): kicker labels removed from above the section headings (owner) — hero, services, results, why/journey, process, dark card, hub, grow, reviews ("Verified Client Reviews"), compare ("The Difference") and the closing band. Kept, as on the Dallas pages: the small label over the about copy, the feature-row labels (Google Maps / Google Ads / AI search), the step timings (Week 1 …) and the pill on the blue banner.
- 22 Oct (later), /services/dallas-fort-worth/digital-marketing-agency (live, indexed): H1 now "Dallas–Fort Worth [pin] Digital Marketing Agency for Local Businesses" (was "… Marketing Agency …"), matching the title and the target "digital marketing agency dallas". Two lines at 1440 and 1200 px, three on phones. Intentional H1 change: keyword-guard will report it at the next build; not run here (needs `next build`, which would clash with the running dev server).
- 22 Oct (later), /services/delaware/digital-marketing-2 about section: wide photo is now the owner's Delaware team image (public/images/delaware/delaware-digital-marketing-team.jpg, 1448×1086 JPEG q82, 433 KB), crop anchored at 50% 18% so the "Delaware Digital Marketing Agency" wall sign isn't cut. Kit Ph gained an optional `position` prop (object-position); default unchanged, so existing pages are unaffected.
- 22 Oct (later), Delaware digital-marketing draft: about heading has no blue accent and uses the Dallas section size on three set lines ("A Delaware Marketing / Agency That Brings / In Leads."; size capped 992–1400 px so it stays three lines at every width; hand-drawn arrow shortened so it stops above the badge). Headings with content beside them (services, process, grow) are now top-aligned with that content. Testimonial heading shortened to "Real Reviews, Real Results".
- 22 Oct (later), Dallas digital marketing page (live): testimonial H2 "900+ Profiles Back on Google" → "Rated 5.0 on Google" (owner wanted Dallas and Delaware headings short and different); "Where We Work" paragraph cut from 75 to 37 words ("…across all eleven counties, from Denton to Waxahachie, including fast-growing towns like Celina and Princeton."), dropping the population figures. Both intentional H2/text changes for keyword-guard at the next build.
- 22 Oct (later), Dallas digital marketing page: removed the line beside "Rated 5.0 on Google" ("Client satisfaction says more than we can. Real reviews from Zonic Media clients, straight from Google."); the avatars and sparks stay.
- 22 Oct (later), Delaware drafts (all four): page ending now matches /home2 — the blue → violet → pink gradient banner card (grain + hand-drawn loops) followed by the footer. The banner carries each page's own free-audit heading, paragraph, button and checklist (no kicker). The light closing band and the dark "Related Services" strip were removed (home2 has neither; the strip's main links are also in the footer). Banner art (GRAIN, BannerLoops) moved from HomePage.tsx into src/components/rd/dfw-kit/banner.tsx and shared by both; /home2 renders unchanged.

## 22 October 2026 (late) — /services/delaware/seo-2 rewritten (uncommitted, noindex draft)
- Same treatment as the digital-marketing draft: short, keyword-led copy at its word counts, new UI, no copy shared with that page (checked: only the template's Google-rating line, the office address and the "Google Business Profile reinstatement" link name appear on both). Keywords (Semrush US, 22 Oct): seo company delaware 590 · delaware seo 480 · seo company in delaware 480 · seo service company delaware 480 · delaware seo company 390 · seo delaware 390 · seo services delaware 210 · seo expert delaware 170 · delaware seo agency 90 · seo consultant delaware 90. "wilmington seo" (390) is left to the Wilmington page (linked from the about copy).
- Hero: H1 "Delaware SEO Agency That / Gets You Found on Google"; 35-word intro ("an SEO company in Delaware, based in Dover…"); pillars 50+ businesses ranked · Google 5.0 · 4–8 wks to Map Pack movement · 1,500+ profiles optimized.
- About: "A Delaware SEO / Company You Can / Actually Visit." (Dallas size, three lines); two ~40-word paragraphs (county-by-county plan, local signals; links to Wilmington and the Delaware marketing page); text card "One plan per county"; wide photo = the main-street showcase photo.
- Services: "Delaware SEO Services That Bring In Calls" + 6 cards with points and links (GBP optimization, keyword & competitor research, on-page & technical, citations & local links, review growth, SEO reporting).
- White band: "How We Rank Delaware Businesses on Google" — keywords & content / technical SEO / citations & reviews, each with a new UI (keyword rankings with demand bars, site-health crawl, listing consistency across Google, Apple, Yelp, Bing, Facebook).
- Journey: "SEO You Can Check, From a Team You Can Visit" + 3 short reasons; phone = Business Profile with the storefront photo and the page's three stats.
- Process: "Our Delaware SEO Process in 4 Steps" (audit → foundation → monthly authority → report and expand). Dark card keeps the Delaware Visibility Console with shortened copy. Hub: "Six Signals, One Ranking Engine" with a shorter lead; "grow further" block hidden (its links moved into the about copy and service cards). Reviews heading "What Our SEO Clients Say". Compare lists and FAQ lead shortened; contact "Ready to Talk [chat] About Ranking Higher in Delaware?"; closing banner = the page's free-audit card.
- Template: new feature UIs (`keywords`, `crawl`, `citations`) and options `noGrow`, `reviewsTitle`, `phoneImage`.
- Checks: tsc + eslint clean; no missing tw: classes; no overflow; about heading three lines at every width; visual-snap flags only the screen-reader copy of the phone stats (sr-only, expected).
- 22 Oct (late), /services/delaware/seo-2 follow-ups (owner): about photo = the owner's Delaware team image (same file as the marketing draft, SEO alt text, crop 50% 18%); hero pillars in their own colours (orange #c2410c · blue #dbeafe · cream #fef3c7 · green #14532d; template `extras.pillars`); no UI shared with the marketing draft — new process-step UIs for this page (who ranks above you · Business Profile completion · authority this month · rank grid) and a column-chart scorecard (`scoreColumns`); "Six Signals, One Ranking Engine" replaced by the "Found Everywhere" hub design with this page's content: "Listed Right Everywhere Google Checks" — Google Business Profile, Google Maps, Apple Business Connect, Bing Places · Yelp, Houzz, Thumbtack, Tripadvisor around "Your listing / matched on every directory" (kit APP_TONE gained bing, houzz, thumbtack, tripadvisor). Headings reworded so none repeats the marketing draft's pattern: process "How Our Delaware SEO Works, Step by Step", FAQ "Delaware SEO Questions, Answered", testimonials "Our Clients Say It Best" (no service named). Shared text with the marketing draft: only the Google-rating line, the address and the "Google Business Profile reinstatement" link name.

## 22 October 2026 (late) — /services/delaware/web-design-2 and /services/wilmington/digital-marketing-2 rewritten (uncommitted, noindex drafts)
- Same recipe as the marketing and SEO drafts: Semrush keywords first, short keyword-led copy at the same word counts, own pillar colours, own UI components, "Found Everywhere" hub layout with page-specific icons, no shared headings or copy. Text diff across all six draft pairs: only the Google-rating label, the office address and the "Google Business Profile reinstatement" link name repeat.
- Web design (keywords: web design delaware 390 · delaware web design 320 · website design delaware 170 · web design wilmington de 140 · web development delaware 90 · web design company delaware 70 · website designer delaware 70 · web design lewes de 70): H1 "Delaware Web Design Company / for Sites That Rank and Convert"; about "Custom Websites / Built for How / Delaware Searches."; services "Web Design Services in Delaware"; features "What Makes a Delaware Website Win Customers" (design · speed · conversion with responsive-devices, speed-test and quote-form UIs); journey "A Build Partner From Brief to Launch" with a mobile-site phone; process "From First Call to Live Site in Four Stages" (teardown · sitemap · device tests · redirect map UIs); dark card = launch report; hub "Your Website, Built and Connected Right" (WordPress, Shopify, WooCommerce, Next.js · Analytics, Search Console, Tag Manager, booking); compare with before/after tiles; reviews "What Clients Tell Us"; FAQ "Delaware Web Design FAQs"; contact "Let's Plan [chat] Your New Delaware Website". Pillars pink · lime · lavender · navy.
- Wilmington (keywords: wilmington seo 390 · search engine optimization wilmington de 390 · wilmington marketing agency 210 · seo wilmington de 90 · wilmington digital marketing 70 · digital marketing agency wilmington de 50): H1 "Wilmington Digital Marketing / and SEO That Wins Local Search"; hero stats from the page's own showcase (5 NCC suburbs at #1, +77% direction requests, 165 average reviews); about "Wilmington Is / Delaware's Toughest / Search Market."; services "What We Run for Wilmington Businesses"; features "Three Ways We Win Wilmington Searches" (suburb radar, Local Services Ads, review feed); journey "Local Accountability, Not a Rate Card" with a Maps-directions phone; process "Your First 90 Days in Wilmington" (Map Pack share · plan board · month of activity · calls trend); dark card = Map Pack board; hub "Every Call, Click and Visit Counted" (Google, Maps, Waze, Google Ads · calls, texts, forms, directions); compare with ring scorecard; reviews "In Our Clients' Words"; FAQ "Questions Wilmington Owners Ask"; contact "Want More Calls [chat] From Wilmington Searches?". Pillars teal · rose · slate · deep violet.
- Code: page UI in src/components/rd/delaware/webUi.tsx and wilmingtonUi.tsx; shared building blocks moved to uiBits.tsx; template options `phone`, `darkUi`, `scoreStyle` (SEO page now `scoreStyle: "columns"`); kit APP_TONE gained web-stack and lead-channel tones.
- Checks: tsc + eslint clean; no missing tw: classes; no overflow; visual-snap 0 issues on both pages.

## 23 October 2026 — /services/wilmington/digital-marketing-2
- H1 now "Wilmington Digital Marketing Agency / for SEO That Wins Local Search" (owner: add "agency"); two lines from 1440 down to 768 px, four on phones.
- "Local Accountability, Not a Rate Card": the Maps-directions phone is replaced by a monthly-report phone that matches the three points beside it — verified Dover, DE sender, calls by source, ad spend by suburb with the best cost-per-lead suburb marked, and accounts "owned by you" (wilmingtonUi.tsx `ReportPhone`; template `phone: "report"`). Directions phone removed.

## 23 October 2026 — /home2 pricing section (uncommitted, noindex draft)
- New section after "The Difference" (id `#pricing`): "Marketing Plans That Grow With You", three trust points (monthly or annual · clear deliverables · ad spend separate), Monthly/Annual toggle (annual selected first; "Save up to $3,000/yr"), three plan cards (Foundation $197/mo annual · $297 monthly; Growth $750, recommended, same price either way; Authority $1,250/mo annual · $1,500 monthly) with the owner's inclusions, "Best for" notes and buttons to the contact form; "Compare Plans Side by Side" table (15 rows, prices follow the toggle, first column pinned on phones); "Optional Add-On Services" (6 items, prices from the owner's reference image); custom-plan strip.
- Audience lines rewritten for any business (owner's text was for home inspectors). Files: src/components/rd/home/pricing.ts (data), PricingPlans.tsx (client: toggle, cards, table), HomePricing.tsx (section).
- Checks: toggle switches prices correctly (annual $197/$750/$1,250 → monthly $297/$750/$1,500), aria-pressed + polite live region; tsc + eslint clean; no missing tw: classes; visual-snap only the 3 known blog-excerpt flags.
- Open for the owner: Growth has no separate monthly price; Growth optimizes up to 10 pages/month but Authority (which includes Growth) lists up to 8; add-on prices come from the reference image; other pages still show the older single prices ($197 / $750 / $1,500).
- 23 Oct (later), pricing on all redesign drafts: the four Delaware drafts now have the pricing section (after the comparison, before the FAQ) with page-specific headings — "Digital Marketing Plans for Delaware Businesses", "Delaware SEO Pricing and Plans", "Marketing Plans for Your New Delaware Website", "Wilmington Marketing Plans and Pricing" (plus their own compare/add-on/custom-plan lines); buttons go to each page's contact form. HomePricing.tsx now exports PricingSection (copy per page) and the pieces TrustPoints / AddOnsGrid / CustomPlanStrip.
- 23 Oct (later), Wilmington draft about photo = the owner's "Wilmington Digital Marketing Agency" banner (public/images/geo/wilmington-digital-marketing/wilmington-digital-marketing-agency.jpg, 1536×1024 JPEG q82, 557 KB), anchored top-left so the full heading shows on phones.
- 23 Oct (later), compare table → pop-up (owner: the inline table made pages too long): a "Compare plans" button beside the Monthly/Annual toggle opens a native <dialog> with the table and its own toggle (prices follow it; cards update too). Esc, the X and the backdrop close it; focus moves in; page scroll is locked; data-lenis-prevent lets it scroll. On phones the table is narrower (label column ~120 px) with a swipe hint. Applies on /home2 and the four Delaware drafts.
- 23 Oct (later), new page /pricing (noindex draft, not in navbar or sitemap): H1 "Digital Marketing Pricing and Plans", trust points, toggle + plan cards, the comparison table inline (no pop-up), add-ons, custom-plan strip, contact form (formType "pricing-page"), /home2 gradient banner "Start With the Plan That Fits Today" and the /home2 footer. Markup src/components/rd/pricing/PricingPage.tsx; route src/app/(main)/pricing/page.tsx.
- Checks: pop-up tested at 1440 and 390 (open, toggle inside, Esc, X); tsc + eslint clean; no missing tw: classes; visual-snap only the known blog-excerpt and sr-only flags.
- 23 Oct (later), "Compare plans" button restyled to match the billing toggle: same white track (54 px) with a 44 px pill inside, dark on hover (was a 54 px dark-outlined pill that looked bigger). Applies on /home2 and the Delaware drafts.
- 23 Oct (later), /services/delaware/digital-marketing-2: removed the blue "An SEO and Website Marketing Agency in Delaware — Both Jobs, One Team" banner (owner). Its Wilmington link moved into the about card ("New Castle County: Wilmington, …"); the SEO and web-design links were already elsewhere on the page. Note: that block was added on the live page as a quick win for "seo website marketing agency in delaware" (#11 at the time); the live page still has it.

## 23 October 2026 — Philadelphia redesign drafts: /services/philadelphia/{digital-marketing,local-seo,ppc,sem}-2 (uncommitted, noindex)
- Same recipe as the Delaware drafts: DelawareLanding template, Dallas section order, short keyword-led copy at the Delaware word counts, each page with its own pillar colours, UI components, hub icons, headings and copy. The live pages keep their metadata, schema, FAQs and form types and stay untouched; the drafts add `robots: noindex, follow`. Hub structure kept: digital-marketing owns "digital marketing agency philadelphia" and links down to local-seo, ppc and sem; those link back with narrow anchors.
- Keywords (Semrush US): digital marketing agency philadelphia 1,000 · digital marketing philadelphia 590 · philadelphia digital marketing agency 480 · social media marketing philadelphia 390 (KD 11) | seo company philadelphia 1,600 · philadelphia seo company 1,300 · philadelphia seo 1,300 · philadelphia seo services 880 · local seo philadelphia 320 · philly seo 320 | ppc agency philadelphia 260 (KD 7) · philadelphia ppc 170 · pay per click philadelphia 110 · ppc management philadelphia 90 | search engine marketing philadelphia 260 · sem agency philadelphia 110 (+ national SEM terms: search engine marketing agency 4,400, sem services 2,400, what is sem 2,400).
- Digital marketing: H1 "Philadelphia Digital Marketing Agency / for More Calls, Leads and Jobs"; about "Marketing That Works / in Every Corner / of Philadelphia."; features "Where Philadelphia Leads Come From" (social calendar · leads-by-neighborhood heat grid · search-to-booked-job funnel); journey phone = social post; process channel grades → budget split → launch timeline → KPI tiles; dark card = leads by channel; hub "On Every App Philly Scrolls" (Instagram, TikTok, YouTube, Pinterest · LinkedIn, Threads, X, email); scorecard with deltas. Pillars magenta · cyan · pink · indigo.
- SEO: H1 "Philadelphia SEO Company for / Rankings That Turn Into Calls"; about "Philly SEO, Planned / Neighborhood by / Neighborhood."; features "What Moves Philadelphia Rankings" (neighborhood pages · local link building · Search Console growth); phone = organic results; process issue counts → keyword map → content queue → position buckets; dark card = visibility vs. competitors; hub "Found on Search Engines and in AI Answers" (Google, Bing, DuckDuckGo, YouTube · ChatGPT, Gemini, Perplexity, AI Overviews); table scorecard. Pillars green · yellow · sky · brown.
- PPC: H1 "Philadelphia PPC Agency for / Google Ads That Bring Real Leads"; about "Pay for Clicks / That Turn Into / Customers."; features "How We Make Philadelphia Ad Spend Work Harder" (account structure · search terms · landing-page A/B test); phone = call ad + incoming call; process wasted-spend donut → keyword build → bid adjustments → cost-per-lead trend; dark card = spend vs. revenue; hub "Every Ad Format That Brings Philly Leads"; bullet-bar scorecard. Pillars red · periwinkle · mint · dark brown.
- SEM: H1 "Philadelphia Search Engine Marketing / Agency for SEO and Google Ads"; about "Paid and Organic / Search, Run as / One Plan."; features "Why SEO and Paid Search Work Better Together" (results-page share · one keyword list, two channels · budget split by return); phone = weekly search report; process keyword overlap → intent matrix → running both → leads by source; dark card = blended cost per lead; hub "Paid and Organic, on Every Search Surface"; radar scorecard. Pillars blue · peach · stone · graphite.
- Numbers on the drafts (hero, dark cards, scorecards) all come from the live Philadelphia pages.
- Code: page UI in src/components/rd/delaware/phlMarketingUi.tsx, phlSeoUi.tsx, phlPpcUi.tsx, phlSemUi.tsx; template kinds phl-marketing / phl-seo / phl-ppc / phl-sem with new `phone`, `darkUi`, `scoreStyle` options and feature UIs; `de-split` keyframe; kit APP_TONE gained social, search-engine and ad tones.
- Checks: tsc + eslint clean; no missing tw: classes; no horizontal overflow at 390 / 768 / 1024 / 1440; about heading three lines from 768 px up; text diff across the 8 redesign drafts + the 3 Dallas pages — the only repeats are the template's Google-rating line, the office address and the "Google Business Profile reinstatement" link name (plus the shared pricing section, by design); visual-snap 0 layout issues (reports/visual/phl-drafts-2026-10-23).

## 23 October 2026 — NYC: /services/nyc/digital-marketing-2, /services/nyc/local-seo-2 (drafts) and new /services/nyc/web-design (uncommitted, all noindex)
- Owner asked for the NYC pages "as we did with Delaware" plus a new NYC web design page (NYC only had digital marketing and local SEO). Same template and recipe: Semrush keywords first, short keyword-led copy at the Delaware word counts, own pillar colours / UI components / hub icons / headings. Live NYC pages untouched; drafts keep their live metadata, schema, FAQs and form types and add noindex. The web design page is new at its final URL, noindex, not yet in the sitemap or navbar.
- Keywords (Semrush US): digital marketing agency nyc 1,900 (KD 48) · digital marketing agency new york 1,900 · marketing agency new york 1,000 · digital marketing nyc 880 (KD 27) · social media marketing nyc 320 (KD 21) · ppc agency nyc 260 | local seo new york 1,300 (KD 20) · local seo nyc 720 (KD 17) · brooklyn seo 720 · local seo brooklyn 590 (KD 11) · local seo services nyc 480 · nyc local seo 320 (KD 8) | web design new york 1,600 (KD 46) · web design nyc 880 · web design agency nyc 880 · web design brooklyn 720 (KD 10) · web design company nyc 590 · web development nyc 480 · ecommerce web design nyc 260 · ada website compliance 2,900 (national).
- Digital marketing (hub): H1 "NYC Digital Marketing Agency / Growing Businesses in All Five Boroughs"; about "Five Boroughs. / Five Markets. / One Marketing Plan." with the NYC street photo; features "How We Win New York Customers" (search demand by hour · lead log by source and neighborhood · Business Profile monitor); phone = missed-call text-back ending in a booking; process budget leak finder → borough plan → this week's work → budget moved; dark card = results by borough; hub "Where New Yorkers Find and Choose You" (Google, Maps, Yelp, Facebook · Instagram, TikTok, YouTube, ChatGPT); slope scorecard. Links down to local-seo and web-design, across to the Philadelphia hub. Pillars amber · taxi yellow · mint · near-black.
- Local SEO: H1 "NYC Local SEO Services / for Map Pack Rankings in Every Borough"; about "Ranking in NYC / Happens One Block / at a Time."; features "What Gets You Into the NYC Map Pack" (top-3 coverage across city blocks · profile categories · local business markup); phone = voice search answer; process fake listings removed → page title rewrite → reviews per week → borough rollout; dark card = Business Profile performance; hub "On Every Map and Voice Assistant" (Google Maps, Apple Maps, Waze, Bing Places · Google Assistant, Alexa, Siri, ChatGPT); dumbbell scorecard. One live FAQ question reworded ("Can a local SEO company outside New York rank my NYC business?") because the live wording repeated the digital-marketing page's. Pillars rose · mint · lavender · deep teal.
- Web design (new): title "Web Design NYC | New York Web Design Agency | Zonic Media"; H1 "NYC Web Design Agency for / Websites That Book Customers"; 8 new FAQs (cost, timeline, ADA, editing, e-commerce/booking, redesign without losing rankings, Brooklyn and Queens, SEO included); features accessibility check (WCAG 2.2 AA) · edit-your-own-site editor · page load on 4G; phone = appointment booking; process project brief → wireframe → style tile → care plan; dark card = after the relaunch; hub "Connected to How You Get Paid and Booked" (Stripe, Square, PayPal, Apple Pay · Calendly, HubSpot, Mailchimp, Zapier); gauge-needle scorecard. Numbers are company-wide only (100+ sites, 95+ launch PageSpeed, 4–8 weeks, <2s mobile, the "typical rebuild" scorecard from the Delaware web page); no NYC web case study is claimed. About photo is a skeleton until the owner supplies one. Pillars violet · butter · pink · navy.
- Code: src/components/rd/delaware/nycMarketingUi.tsx, nycSeoUi.tsx, nycWebUi.tsx; template kinds nyc-marketing / nyc-seo / nyc-web with phone (textback, voice, booking), darkUi (boroughs, insights, relaunch) and scoreStyle (slope, dumbbell, needles) options; `de-needle` keyframe; kit APP_TONE gained assistant, alexa, stripe, square, paypal, hubspot, zapier.
- Fix (also on the Philadelphia drafts): animated chart lines that combined a draw-on dash with a non-scaling stroke stopped about 70–80% of the way across in wide charts (relaunch chart, PHL Search Console, visibility race, CPL trend, SEM leads chart). Removed the non-scaling stroke on those lines; their charts are drawn at 1:1 height so stroke width is unchanged. The /home2 prototype connector (ServiceUi.tsx) uses the same pair and was left alone.
- Checks: tsc + eslint clean; no missing tw: classes; no overflow at 390 / 768 / 1024 / 1440; H1 two lines and about heading three lines from 768 px up; text diff across all 14 redesign pages (NYC, Philadelphia, Delaware, Wilmington, Dallas) — only the accepted repeats remain (Google-rating line, office address, "Google Business Profile reinstatement" anchor, shared pricing section); visual-snap 0 layout issues (reports/visual/nyc-drafts-2026-10-23).
- Launch steps for the web design page: owner photo for the about section; remove `robots` noindex; add to sitemap.ts and the navbar NYC group; link it from the live NYC digital-marketing and local-seo pages (the drafts already link it).
- 23 Oct (later), hero map pin on all 11 redesigned location pages (Delaware ×3, Wilmington, Philadelphia ×4, NYC ×3), as on the Dallas pages (owner): the red bobbing pin sits right after the place name in the H1 ("Philadelphia 📍 Digital Marketing Agency…", "…Agency in Delaware 📍"). Done once in DelawareLanding.tsx (place picked per page type; no page files edited). The pin is aria-hidden, so the H1 text Google reads is unchanged; checked on all 11 pages: pin present, H1 still two lines from 768 to 1440 px.

## 23 October 2026 — About page redesign draft: /about-2 (uncommitted, noindex, canonical /about)
- Owner asked for a new About page in the redesign's UI pattern with a different hero, built around the target keywords. Live /about untouched.
- Keywords (Semrush US): local marketing agency 1,900 (KD 27) · small business marketing agency 3,600 (KD 20) · marketing agency for small business 1,600 (KD 18) · digital marketing agency in delaware 170 (KD 12) · marketing agency delaware 210 (KD 11). The homepage keeps "digital marketing agency"; Semrush has no ranking data for /about. Title "About Zonic Media | Small Business Marketing Agency, Dover DE"; H1 "Meet Zonic Media, the Local Marketing Agency for Small Businesses".
- New hero layout (split): heading, intro, CTAs and badge row left; the owner's team-workshop photo right with floating cards (5.0 Google rating, 1,500+ profiles optimized, "Head office · Dover, Delaware" with the map pin); stats strip below (1,500+ profiles · 900+ reinstated · 5.0 Google · 20+ industries). Heading three lines from 992 px up.
- Sections: who we are ("A Senior Team / Built Around / Local Businesses." with the Dover head-office card and the Delaware team photo) → six services with links to their hubs (local SEO for small business, GBP optimization, reinstatement, AI SEO, web design, Google Ads) → "Why Small Businesses Choose Zonic" (track record bars, account team, plan builder) → "What You Can Count On" with a strategy-call phone → 4-step process (what we check, 90-day roadmap, go-live switches, leads by month) → dark card "Based in Dover, Working Across the US" with a US map (HQ + market pins) linking all five location pages → "Check Us Out Anywhere" hub (Google reviews, Clutch, Trustpilot, Google Maps · LinkedIn, Facebook, Instagram, YouTube) → Google reviews → FAQ → contact form (formType about-page) → gradient banner → footer.
- Kept from the live page's rules: positive framing only (no comparison block), no invented dates, headcounts or client names, NAP visible, AboutPage + FAQPage + breadcrumb JSON-LD. The reinstatement figure is 900+ (what the reinstatement page and 20 other pages say); the live About still says 500+. FAQ: the two "where are you based" questions merged, the services answer now lists six services.
- Code: src/components/rd/about/AboutPage.tsx, aboutUi.tsx, content.ts; route src/app/(main)/about-2/page.tsx (metadata + JSON-LD only); hub tones trustpilot, clutch (custom Clutch mark, no Simple Icons glyph).
- Checks: tsc + eslint clean; no missing tw: classes; no overflow at 390 / 768 / 1024 / 1440; visual-snap 0 layout issues (reports/visual/about-draft-2026-10-23); text overlap with /home2, Dallas and the location drafts limited to the address and the Google Business Profile link names.
- 23 Oct (later), /about-2 owner revisions: copy re-angled to "small and mid-size businesses" (as on the homepage). Hero: new H1 "The Marketing Agency for Small and Mid-Size Businesses", bigger (up to 72 px, three lines from 992 px), photo replaced by a four-card bento (1,500+ profiles · 5.0 Google · 900+ reinstated · Dover head office, in two staggered columns); stats strip removed (its numbers now sit in the bento). About heading now "Big-Agency Skills, / Sized for Small and / Mid-Size Businesses." with new copy; the about-row photo is now the team-workshop image (the Delaware team photo is no longer used here). "Why Small Businesses Choose Zonic" replaced by "What We Specialize In": SEO, Google Business Profile, Web Design and AI Search Optimization, each with its own UI (SEO health check, Maps listing, website booking, AI mentions) and link. "What You Can Count On" became "How We Work With You", carrying the old "people who audit it, run it" and "plans sized for smaller budgets" rows. Hub tiles now link to the real profiles (Google, Clutch, Trustpilot, Maps, LinkedIn, Facebook, Instagram, YouTube; new tab) via an optional `href` on the kit's HubApp. Closing banner: own light gradient (peach → pink → lavender → sky) with ink text and buttons, after the owner rejected a dark blue version. Checks: tsc + eslint clean, no missing classes, no overflow, visual-snap 0 issues.
- 23 Oct (later), /about-2: removed the six-card "Services for Small and Mid-Size Businesses" section (owner) and folded every service into "What We Specialize In", now six rows: SEO (with an inline link to local SEO for small business), Google Business Profile, Reinstatement (new UI: suspended → audit → appeal → reinstated, status flips to live), AI Search, Web Design, Google Ads (new UI: sponsored result plus account basics). Lead: "Six services, one in-house team, planned together for small and mid-size businesses." Every service hub keeps its link from this page. Checks: tsc + eslint clean, no missing classes, no overflow, visual-snap 0 issues.
- 23 Oct (later), /about-2 closing banner: light version of the original /home2 blue → violet → pink (periwinkle → lavender → orchid → blush), ink text kept (owner: "something related to the previous one").

## 23 October 2026 — Redesigned header and dropdowns, /home2 only (uncommitted)
- Owner asked for a new header and dropdowns in the redesign's UI, on /home2 only for now. New `src/components/rd/header/RdHeader.tsx` (+ header.css tokens); `HeaderSwitch.tsx` renders it when the path is /home2 and the live Navbar everywhere else; `(main)/layout.tsx` now renders HeaderSwitch. The live Navbar is unchanged apart from `export` on its link data (gmbServiceLinks, seoServiceGroups, webDesignGroups, industryGroups, freeWebsiteGroups), which the new header imports so the two menus never drift.
- Design: floating white rounded bar inside the kit insets (logo, Services, Local SEO, Web Design, GBP Reinstatement, Locations, Industries, Free Website, phone, "Free Audit" pill); white rounded dropdown panels spanning the bar: Services (six service cards incl. the four GMB links, dark "Let's start a project" card with the 5.0 Google rating), Local SEO / Web Design / Industries (category tabs left, that category's pages right, "All …" link and a promo strip: free rank check / free website offer / talk to us), Locations (four market cards with their tag links + Dover head-office card with directions), Free Website (offer card + all landers by group). Mobile (<1280 px): full-screen menu with accordions, CTA, phone and social links, mounted only while open.
- Breakpoints sized from measurements so nothing spills out of the bar: full items with arrows ≥1440 px, compact items 1280–1439 px, hamburger below; phone number shown ≥1600 px, phone icon below.
- SEO: every desktop panel stays in the server HTML when closed (hidden, not unmounted), as with the live Navbar. 136 unique links in the SSR header; every link in the live desktop Navbar is present (only the tel: format differs; Google Maps link added).
- Checks: tsc + eslint clean; no missing tw: classes; no overflow at 390/1024/1200/1366/1920; visual-snap on /home2 shows only its 3 known blog-excerpt clamp flags. Rolling out sitewide = add paths to RD_HEADER_PATHS (or make RdHeader the default) after owner approval.
- 23 Oct (later), /home2 header: Industries dropdown rebuilt in the Free Website style (owner liked that one): dark "Marketing built for your industry" card (20+ industries, All Industries, "Don't see yours? Talk to us") left, every industry by group on the right in three balanced columns (CSS columns), no tabs. All 34 industry links visible without scrolling at 900 px height; link count unchanged (136 unique).
- 23 Oct (later), /home2 header: Local SEO, Web Design, Industries and Free Website dropdowns now share one layout (owner: "like the free website dropdown"): coloured card left (green / violet / ink / blue, each with its own badge, heading, main button and secondary link), every link by group in a three-column icon grid right, all at the Free Website panel height (520 px, capped at viewport − 140 px); the list scrolls inside the panel when longer (Local SEO, Web Design, Industries). Category tabs removed. Bar: the dark "Free Audit" pill now shows the phone number (tel: link) and the separate phone button is gone (owner); phones keep a small call icon. Still 136 unique links; fits the bar at 1280–1920 px.
- 23 Oct (later), /home2 header (owner): more spacing in every dropdown (panel padding 16 px, gaps 20 px between card and list, link rows 10 px padding with 12 px column gaps, 20 px between groups, larger service/location cards); list panels raised to 616 px so Free Website still fits without scrolling (others scroll inside); Industries side card now orange (#c2410c) with a white badge; "GMB Rank Checker" removed from the GMB links in this header only (the Google Maps Rank Checker card still links the page; the live Navbar is unchanged); NYC gets an "NYC Web Design" link (/services/nyc/web-design — still a noindex draft, so make it live before this header goes sitewide); location and GMB sub-link pills bigger (14.5 px, more padding); main menu font 15 → 16 px (15 px at 1280–1439), still fits the bar at every width. 137 unique header links.
- 23 Oct (later), /home2 header (owner: dropdowns too tall): list panels 616 → 480 px (Local SEO, Web Design, Industries, Free Website all scroll inside; Free Website now scrolls slightly), Services 425 → 388 px and Locations 427 → 338 px via tighter card padding; location and GMB sub-link pills reverted to their original 13 px size (owner).
- 23 Oct (later), /home2 header: Locations dropdown loosened (owner: looked congested): 338 → 401 px via more card padding, 12 px between card rows, more space above the description and around the sub-link pills (pill size unchanged at 13 px).

## 23 October 2026 — Services hub redesign draft: /services-2 (uncommitted, noindex, canonical /services)
- Owner asked to redesign the services main page. Draft at /services-2 in the redesign kit; live /services untouched. Still the services hub: owns "digital marketing services" and links down to every service page.
- Keywords (Semrush US; no ranking data for /services): digital marketing services 33,100 (KD 44) · digital marketing services for small business 2,900 (KD 38) · small business marketing services 1,900 (KD 24) · digital marketing packages 1,900 (KD 19) · full service digital marketing 1,300 (KD 23). Title "Digital Marketing Services for Small Business | Zonic Media"; H1 "Digital Marketing Services for Small and Mid-Size Businesses" (two lines from 768 px).
- New hero: centred heading, intro, CTAs and badges over a six-tile service mosaic (SEO & Local SEO, Google Business Profile, AI Search Optimization, Web Design, Google Ads, Profile Reinstatement), each tile linking to its service page.
- Sections: "Full-Service Digital / Marketing, Run by / One Team." (about row with the team-review photo) → "Our Digital Marketing Services" — five rows (SEO & AI search, Google Business Profile, Web design, Google Ads, Branding/UI-UX/automation), each with its own UI and pill links to every child page (SEO services, local SEO for home services and small business, AI SEO, local SEO packages, GBP optimization/reinstatement/verification, Maps rank checker, web design, free website offer, LaunchPad, Google Ads, white label) → "Why Businesses Pick Zonic Media" with a plan phone → "How Every Project Runs" (audit findings, roadmap board, launch checks, monthly goals) → dark card "One Plan and One Report for Every Channel" (links to the four market hubs) → channel hub + industries chips → Google reviews → "Digital Marketing Packages" pricing → FAQ (live FAQs; first answer updated, one question reworded) → contact form (formType services-hub) → light mint/sky/lavender banner → footer.
- Not carried over: the live page's unsourced figures (200% average growth, 100+ brands, 4.9 rating, 3–5× leads, 40%+ conversion lift, 90% retention). Only 1,500+ profiles, 900+ reinstated, 5.0 Google and 0% ad-spend markup appear.
- Schema: breadcrumb, Service with OfferCatalog (every child link), HowTo (4 steps), FAQPage.
- Code: src/components/rd/services/ServicesPage.tsx, servicesUi.tsx, content.ts; route src/app/(main)/services-2/page.tsx.
- Checks: tsc + eslint clean; no missing classes; no overflow at 390/768/1024/1440; visual-snap 0 issues; text overlap with About, /home2, location drafts and Dallas removed; every live hub link to a service page kept, 7 added.
- 23 Oct (later), /home2: "Found Everywhere Your Customers Look" hub replaced with the About page's linked reviews/profiles hub (owner), under its own heading "Trusted on Every Platform You Check": Google reviews, Clutch, Trustpilot, Google Maps · LinkedIn, Facebook, Instagram, YouTube, each opening the real profile in a new tab; own lead text, labels ("Where clients review us" / "Where our team posts") and centre ("Zonic Media · real reviews, real profiles"). Clutch icon shared from about/aboutUi.tsx.

## 23 October 2026 — Industries hub redesign draft: /industries-2 (uncommitted, noindex, canonical /industries)
- Owner asked to redesign /industries. Draft at /industries-2 in the redesign kit; live page untouched.
- Keywords (Semrush US; no ranking data for /industries): home services marketing agency 2,400 (KD 25) · digital marketing for contractors 2,400 (KD 17) · contractor marketing agency 1,600 (KD 21) · home service marketing agency 1,300 (KD 25) · home improvement marketing 880 (KD 3) · marketing agency for contractors 720 (KD 15). No other page targets them. Title "Industries We Serve | Home Services & Contractor Marketing Agency"; H1 "Home Services Marketing Agency for Contractors and Local Businesses".
- New hero: copy left; right a 3×3 grid of industry tiles (Roofing, HVAC, Plumbing, Dental, Law Firm, Real Estate, Electrician, Pest Control around a "31 industry playbooks" tile), each linking to its industry page.
- Sections: "One Playbook per / Industry, Not One / for Everyone." (about row) → "Marketing for Every Industry We Serve" — the full directory of all 31 industries in the header's 8 groups, with the live page's icons and taglines, every one linked → "How We Tailor Marketing to Your Trade" (search by trade, trust signals, season plan) → "What Makes Our Industry Marketing Different" with a roofing-playbook phone → "How We Build Your Industry Playbook" (niche benchmark, buyer priorities, trade assets, season ahead) → dark card "A Playbook Library Built From Real Local Work" (links to services, local SEO for home services, GBP optimization and reinstatement) → "Where Your Customers Compare You" hub (Google, Yelp, Houzz, HomeAdvisor · Zillow, Nextdoor, Tripadvisor, Facebook) → Google reviews → pricing ("Marketing Plans for Every Industry") → FAQ (live FAQs; the Delaware question reworded because /home2 has it) → contact form (formType industries, same service options) → light peach/butter/mint banner → footer.
- Schema: breadcrumb, CollectionPage with all 31 industries, FAQPage. Every link the live page body has is kept.
- Code: src/components/rd/industries/IndustriesPage.tsx, industriesUi.tsx, content.ts (generated from the live page + header groups), icons.tsx (the live page's icon set); route src/app/(main)/industries-2/page.tsx; hub tones zillow, nextdoor, homeadvisor.
- Checks: tsc + eslint clean; no missing classes; no overflow at 390/768/1024/1440; visual-snap 0 issues; no copy shared with the other redesigned pages apart from link names.

## 23 October 2026 — Web design service page redesign draft: /services/web-design-2 (uncommitted, noindex, canonical /services/web-design)
- Owner asked to redesign /services/web-design. Draft in the redesign kit; live page untouched.
- Keywords (Semrush US; no ranking data for this URL): website design services 14,800 (KD 9) · website design company 18,100 (KD 20) · website development company 9,900 (KD 19) · website redesign services 3,600 (KD 23) · wordpress web design 3,600 (KD 20) · web design services for small business 2,900 (KD 25) · responsive web design services 2,900 (KD 21). The live title targets "web design company" (KD 69). Title "Website Design Company | Website Design Services for Small Business"; H1 "Website Design Services That Turn Visitors Into Customers" (two lines from 768 px).
- New hero: centred heading over a browser window holding the build photo (dfw-responsive-build.png, unused on live pages) with floating Core Web Vitals, new quote request and Google 5.0 cards.
- Sections: "Websites Built to / Win Customers, Not / Just Look Good." (about row, wireframes photo) → "Website Design Services We Offer" (custom design, redesign, WordPress, Shopify & e-commerce, landing pages, UI/UX; white-label link) → "Built to Pass Core Web Vitals and Bring In Leads" (page-weight budget, SEO outline, click heatmap) → "Why Clients Pick Our Web Design Team" with a design-review phone → "Our Website Design and Development Process" (competitor check, page templates, build checks, uptime) → dark card "What Changes When You Rebuild With Us" (old vs new site; Delaware, DFW and industries links) → "Tested on Every Browser and Device" hub → Google reviews → pricing ("Keep Your Website Growing After Launch") → FAQ (live FAQs; one reworded because the DFW page has it) → contact form (formType web-design) → light rose/peach/lilac/sky banner → footer.
- Not carried over: the live page's unsourced figures (4.9 rating, 120+ websites, 250%+ conversion growth, 8+ years, 1M+ users). Every live body link kept.
- Code: src/components/rd/webdesign/WebDesignPage.tsx, webDesignUi.tsx, content.ts; route src/app/(main)/services/web-design-2/page.tsx; hub tones chrome, safari, firefox, edge, android, samsung, windows.
- Checks: tsc + eslint clean; no missing classes; no overflow at 390/768/1024/1440; visual-snap 0 issues; no copy shared with other redesigned pages apart from link names.
- Note for the owner: the live FAQ says builds take 2–6 weeks while the Delaware and NYC web pages say 4–8 weeks; one figure should be picked sitewide.
- 24 Oct, /services/web-design-2 hero redesigned (owner disliked the centred heading over a browser-framed photo; picked "split + website bento" from three sketches): copy, CTAs and badge row left with a bigger H1 (three lines from 992 px); right a bento of four cards: violet mobile-first card with a mini website, Core Web Vitals passed, gold Google 5.0 card, and a dark "New booking: kitchen remodel" alert. The responsive-build photo is no longer used on this page.
- 24 Oct (later), /services/web-design-2 hero visual replaced again (owner: the four-card bento looked congested and not relevant): right side is now one laptop showing a full example website homepage (roofing example: nav, headline, estimate/call buttons, house illustration, rating strip, three service cards) with a phone overlapping it showing the same site on mobile. Drawn in container-relative units so it scales with the column; picked by the owner from three sketched directions.
- 24 Oct (latest), /services/web-design-2 hero reworked on owner feedback: (1) layout is now centred, with the H1 (2 lines on desktop, 3 on phones), lead, CTAs and badge row stacked and the device mockup underneath (max 840 px); (2) no niche content: the roofing example and house illustration are gone, and the mockup shows a generic "Your Business" homepage (Our services, Reviews, Contact); (3) it is animated, on a 10 s loop with de-wd-* keyframes in delaware.css: the page starts as a wireframe, fills in as the design (a cursor selects the headline with an "H1 · 48px" tag), then the cursor clicks Publish, the toolbar goes Wireframe → Design → Live, a "Your website is live · Mobile-ready · SEO-ready · Fast" card appears, and the phone builds the mobile layout and receives a "New inquiry" alert. With motion turned off (reduced-motion setting) it rests on the live page. The live card is hidden on phones, where the scaled-down text would overlap. Checks: tsc/eslint clean, no missing classes, no overflow at 390/768/1024, visual-snap 0 issues (reports/visual/webdesign-hero-v3-2026-10-24).
- 24 Oct, /services/web-design-2 H1: added an inline browser-window icon after "Website" (InlineBrowser in webDesignUi.tsx: violet-blue window, mini page layout, cursor; same em sizing and gentle bob as the location pages' pin). Decorative (aria-hidden), so the H1 text is unchanged; still 2 lines from 768 px up and 3 at 390, no overflow.

## 24 October 2026 — Google Ads service page redesign draft: /services/google-ads-2 (uncommitted, noindex, canonical /services/google-ads)

- Owner asked for the Google Ads page in the web design draft's pattern. Same section order: centred hero with an animated visual underneath; then about, services, features, why-us with phone, 5-step process, dark card, hub, reviews, pricing, FAQ, contact and a light banner. All UI, headings and copy are new, in amber/blue/green pillar colours.
- Code: src/components/rd/googleads/GoogleAdsPage.tsx, googleAdsUi.tsx, content.ts; route src/app/(main)/services/google-ads-2/page.tsx (metadata + breadcrumb/Service/FAQPage JSON-LD); de-ga-* hero keyframes appended to src/components/rd/delaware/delaware.css.
- H1: "Google Ads [ad-click icon] Management Services That Turn Clicks Into Calls" (2 lines from 768 px up, 3 at 390). The icon's "Ad" label is drawn as SVG paths so the H1 text stays clean. Title kept from the live page; the meta description was rewritten (see the owner notes).
- Keywords (Semrush US, 24 Oct): google ads management services 2,900 (KD 19), ppc management services 8,100 (KD 34), google ads agency 9,900 (KD 32), google ads services 1,900 (KD 19), paid search agency 2,900 (KD 31), ppc audit 1,600 (KD 24), google ads audit 720 (KD 19).
- Hero visual (AdsSearchHero, 10 s loop): a niche-neutral Google search is typed, the "Your Business" sponsored result appears, the cursor clicks Call, and the campaign card logs a call, a quote form and a booked job while its leads line climbs. A dark card shows the two verified promises: you own the account, 0% markup.
- New UIs (none used on another page): responsive search ad strength, keyword Quality Score, conversion actions, and five step cards (audit findings, keyword intent, ad assets, optimization log, budget by campaign). Also a lead-review phone and a location-targeting map.
- Kept: every live body link (GBP reinstatement, GBP verification, web design, local SEO, HVAC, industries, GBP optimization, LaunchPad) and the six live FAQs word for word. /contact-us is replaced by the on-page form. Added /services and the Philadelphia PPC and SEM pages.
- Dropped as unsourced: 4.9 rating, the $38 / 9.2% / 96 hero metrics, −$412, 12.4%, 1.2 s, and the "Certified Google Ads Specialists" badge. Claims used are already sitewide: 0% markup on ad spend, you own your ad accounts, no long-term contracts, and the plan's "1 Google Ads account, up to 2 Search campaigns".
- Photo: /images/dfw/strategist-profile.png (previously used only by the unpublished legacy DFW page).
- Checks: tsc/eslint clean; no missing classes; no overflow at 390/768/1024; visual-snap 0 issues (reports/visual/google-ads-draft-2026-10-24). Text overlap with other drafts is limited to the shared pricing block.
- Notes for the owner: (1) the live meta description says "priced on your ad spend" while the live FAQ says a flat fee; the draft uses the flat fee. (2) The live page claims "certified specialists"; the draft drops that until a certification is on file.
- 24 Oct (later), /services/google-ads-2 hero visual replaced on owner feedback ("too small, lots of white space at the sides; want a wider desktop with a Google Ads dashboard showing positive results"). The new AdsDashboardHero is a full-width desktop monitor (about 1,240 px at 1440) running a Google Ads dashboard:
  - sidebar nav, with an "Account owner: You / Ad-spend markup: 0%" card;
  - KPI cards: conversions 128 (+42%), cost/conversion $31.40 (−28%), calls 86 (+37%), conversion rate 9.6% (+2.4 pts);
  - a 12-week conversions vs cost-per-conversion chart with "Negative keywords added" and "Winning ad test" markers;
  - totals: 1,333 clicks, 18.5K impressions, 7.2% CTR, $3.01 CPC;
  - optimization score 94%, a top-campaigns table (adds up to 128) and a "New conversion" alert.
  It is labelled "Example account" (illustrative figures, kept internally consistent), sized in real px with breakpoints (sidebar hidden below 992 px, side panels below 768 px, 2×2 KPIs on phones), and loops on the shared 8 s de-* keyframes. The old AdsSearchHero and its de-ga-* keyframes were removed. Checks: tsc/eslint clean, no overflow at 390/768/1024, visual-snap 0 issues (reports/visual/google-ads-draft-v2-2026-10-24).
- 24 Oct (latest), /services/google-ads-2 hero dashboard capped at 1,080 px wide (was full content width, about 1,240 px at 1440); owner found it too big. Layout unchanged; no overflow at 390/768/1024.

## 24 October 2026 — Local SEO for home services redesign draft: /services/local-seo-for-home-services-2 (uncommitted, noindex, canonical /services/local-seo-for-home-services)

- The owner called this the site's most important page (most clicks and impressions) and asked for a redesign "without losing my things". It is built as a LAYOUT redesign in the DFW kit; the live page is untouched.
- Code: src/components/rd/homeservices/HomeServicesSeoPage.tsx, homeServicesUi.tsx and content.ts (all copy verbatim from the live page.tsx and WhyHomeSeo.tsx); route src/app/(main)/services/local-seo-for-home-services-2/page.tsx.
- Kept identical: title, meta description, keywords, Open Graph, canonical, the H1 (now with a decorative house-and-pin icon; heading text unchanged), all 13 H2s in the same order, all 34 H3s, every paragraph, the 11 FAQs, both lead forms (same props), all 38 internal links with their anchor text, and the breadcrumb, Service and FAQPage JSON-LD. Robots is noindex on the draft only.
- Verified against the committed baseline (reports/seo-snapshots and reports/text-snapshots for this route), using keyword-guard's own text extraction:
  - title, description, canonical, H1, H2 list, H3s and JSON-LD all PASS;
  - word count 1,704 → 2,168;
  - 149 of 152 live text blocks present word for word;
  - all 16 home-service queries the URL ranks for (Semrush US, 24 Oct, positions 15–45) still fully covered.
- The only text changed is three unsourced trust claims: "95% Growth Success Rate" → "Free Local SEO Audit"; "4.9/5 Client Satisfaction Rating" → "5.0 Google Rating"; "500+ Businesses Ranked on Google" → "1,500+ Google Business Profiles Optimized".
- Design changes:
  - eyebrow labels moved under their headings;
  - the Clutch reviews widget swapped for the Google reviews widget;
  - the Lottie animations and the contact illustration replaced by new UIs: a service-area rank scan in the hero beside the form (form first on tablets and phones), mini visuals in the "Essential" cards, a homeowner-journey card, a call log on the dark banner and a "metrics that matter" board;
  - the trade marquee is now server-rendered (it was client-only, so its text is new to crawlers).
- Checks: tsc/eslint clean; no missing classes; no overflow at 390/768/1024; H1 2 lines from 768 px up, 3 at 390; visual-snap 0 issues (reports/visual/local-seo-home-services-draft-2026-10-24).
- Swap plan, when approved:
  1. Move the live page.tsx to _legacy/LegacyPage.tsx for rollback.
  2. Point page.tsx at HomeServicesSeoPage with robots index.
  3. Build and run `node scripts/keyword-guard.mjs services__local-seo-for-home-services` (must exit 0).
  4. Deploy on its own, not in the same week as any title/meta change, and watch GSC for 7 days.
  A real GSC query export in reports/gsc/queries/services__local-seo-for-home-services.txt would make the guard stronger.
- 24 Oct (later), /services/local-seo-for-home-services-2 owner revisions:
  1. Hero: the second paragraph ("Homeowners search online every day…") was dropped. Its message and keywords stay in the "Local SEO Built to Grow" section; the keyword-rich first paragraph is unchanged.
  2. The rank scan now stretches to the form column's height (the map flexes; stacked layouts keep a fixed ratio).
  3. "Why Home Service Businesses Need a Local SEO Company" is a centred 2-line heading above the card. The left visual is now a larger Google Maps phone ("plumber near me", Your Business #1 with Call / Directions / Website, call connecting), with "Top 3 on Google Maps", "New 5★ review" and "Job booked" cards on its edges.
  4. "Trusted by Home Service Businesses Ready to Grow" is a full-width, centred dark banner under the five cards, with floating icon tiles (house, wrench, phone, map pin, Google, star; gentle bob, hidden under 768 px) over two soft orange and teal glows. The owner swapped these in for an earlier version with background shapes.
  5. "Ready to Get More Calls…" is 2 lines and has a new paragraph about the free audit.
  6. "Why Choose Zonic Media…" is a centred 2-line heading. The panel on the left changes with the reason highlighted on the right (urgent searches by trade → metrics that matter → monthly report → 12-month leads), all on one 12 s CSS loop (de-hs-card / de-hs-panel).
  8. The reviews H2 was shortened to "Hear What Our Clients Say" (owner request). This is the only H2 that now differs from the live page, so at swap time keyword-guard will report "H2 list changed" for it. That is expected; update the baseline snapshot for this route in the swap commit.
  9. New closing-banner gradient: sky → periwinkle → blush → apricot.
  Also: long heading-row H2s are capped so they wrap to 2 lines, with extra space before the text beside them. Every big heading is 2 lines from 768 px up, 3 at 390.
  Checks:
  - title, description, canonical, H1, all 34 H3s, all 38 links and all three JSON-LD blocks PASS;
  - word count 2,259 (baseline 1,704);
  - all 16 ranking queries still covered;
  - 147 of 152 live text blocks verbatim (the other five are the 3 trust claims, the dropped hero paragraph and the reviews H2);
  - no overflow at 390/768/1024; visual-snap 0 issues (reports/visual/local-seo-home-services-draft-v2-2026-10-24).

## 24 October 2026 — Contact, blog listing and blog post redesign drafts (uncommitted, noindex, canonical to the live pages)

- /contact-us-2 (src/components/rd/contact/, route src/app/(main)/contact-us-2/page.tsx):
  - Kept: the live H1 "Contact Us" (with a decorative chat icon), the intro, the four contact channels in the same wording, and the same lead form (formType "contact", same service options). Same title, description, keywords, canonical, breadcrumb and ContactPage JSON-LD.
  - New: review logos and Google 5.0; "What Happens After You Reach Out" (3 steps with small visuals); a Dover office card with a drawn map, directions and calls; links to the Delaware, Philadelphia, NYC and DFW pages; quick links to 6 services; a 4-question FAQ with FAQPage JSON-LD (answers only restate site claims: reply within one business day, free review, no contracts, US-wide).
- /blog-2 (src/components/rd/blog/BlogIndexPage.tsx + BlogGrid.tsx, route src/app/(main)/blog-2/page.tsx):
  - Kept: the live H1 and subtitle, the same posts, the same metadata and JSON-LD (breadcrumb, ItemList, Blog), and the server-rendered "All guides" index of every post.
  - New: a featured card for the newest post; a grid with topic chips, search and "Load more" (first 9 rendered on the server); a light closing banner.
  - The CMS category field is free text (32 values for 64 posts, with duplicates and typos), so the drafts group posts into clean topics with topicOf() in blogBits.ts: Suspension & Reinstatement, Local SEO, Google Business Profile, Google Maps, Real Estate, Google Ads, Web Design.
- /blog-2/[slug] (BlogPostView.tsx, prose.css, route src/app/(main)/blog-2/[slug]/page.tsx):
  - Kept: the same data, content pipeline, generateMetadata logic (SEO overrides, description clamp, title rule), Article, breadcrumb and FAQ JSON-LD, and the mid-article reinstatement CTA rule and copy.
  - New:
    - a centred header (breadcrumb, clean topic, H1, author initials, date, read time) and a wide featured image;
    - the article in a white card styled by scoped .rd-prose CSS (CMS HTML can't carry utility classes);
    - "On this page" contents from the article's H2s (addHeadingIds adds ids only, so splitAfterFirstSection still works), shown as a sticky sidebar on desktop and a folding panel on phones;
    - a sidebar free-audit card and recent guides;
    - FAQs as native <details>, an author box and related guides as cards (all 4–6 that pickRelatedPosts returns, including the previous/next neighbours);
    - a light closing banner.
- Post parity (live /blog/<slug> vs draft, 8 posts): every article text block, every in-article link, the H1, all article H2s, the title and the description are identical. Tables (5 of the 8) render in scrollable, bordered wrappers.
- Draft links point to /blog-2/... via BLOG_BASE in blogBits.ts; set it to "/blog" in the swap commit.
- Checks: tsc/eslint clean; no missing classes; no overflow at 390/768/1024 on all three; visual-snap 0 issues (reports/visual/contact-blog-drafts-2026-10-24, after removing card text clamps).
- 24 Oct (later), owner revisions to the contact and blog drafts:
  - Contact (/contact-us-2):
    - Email and "What can we help with?" share a row, via a new opt-in ServiceLeadForm prop `serviceBesideEmail` (default off, so every other form, including the live /contact-us, is unchanged; the shared file was restored from git after an accidental Prettier pass and hand-edited).
    - The four logos, including the Google 5.0 badge, fit on one row.
    - The "Prefer to chat?" channel was removed; the address box now spans the full width.
    - The "Our Office in Dover, Delaware" section (map and area links) was removed.
  - Blog listing (/blog-2):
    - 6 cards a page with numbered pagination; pages and topic chips are server-rendered URLs (?page=, ?topic=). All 64 posts are linked across the 11 pages, so the long "All guides" index was removed.
    - Canonicals: page 1 → /blog, ?page=N → /blog?page=N, topic views → /blog. Search still covers every guide.
    - Card images are 16:9 with object-contain (every featured image is 1200×675), so they are never cropped.
    - The topic tag sits top-right with a colour per topic (TOPIC_TONE).
    - New closing-banner gradient (aqua → sky → lavender with a peach glow).
  - Blog post (/blog-2/[slug]):
    - The header is split: breadcrumb, coloured topic tag, H1, summary and author/date/read time on the left; the 16:9 image (contained) on the right; the article below.
    - Sidebar thumbnails are 16:9 and contained.
    - Summaries on the header and cards use the SEO override or meta description before the CMS excerpt (the excerpt is cut mid-word).
  - Checks: tsc/eslint clean; no overflow at 390/768/1024; post parity unchanged (4 posts re-checked); visual-snap 0 issues (reports/visual/contact-blog-drafts-v2-2026-10-24).
- 24 Oct (latest), blog post and card fixes (owner):
  1. The post header and body lost their 1,180 px cap, so their sides line up with the site header and the other sections.
  2. Under the H1 the post header now shows only the date, reading time and author (each with an icon circle; the author has a user icon). The summary paragraph and the topic tag were removed.
  3. Sidebar:
     - "On this page" and the audit card are pinned together while reading.
     - The contents list has its own height cap and `data-lenis-prevent`, because Lenis smooth scrolling was eating wheel events, so the list could not scroll until the page end. Tested: the list scrolls 0→465 px while the page stays put.
     - Recent guides (now 3) sit at the foot of the sidebar.
  4. Recent guides show the 16:9 image on top and the title and date below.
  5. Related guides are a Swiper slider (RelatedSlider.tsx: 1.1/2/3 per view, prev/next, keyboard). All slides are in the HTML, so the links stay crawlable.
  6. Blog cards on /blog-2 and in the related slider use the /home2 card style: hairline-bordered white card, inset rounded 16:9 photo (contained, never cropped), coloured topic tag top-right, author and date with icon circles, title, summary, and "Continue Reading" with the circled arrow.
  Checks: no overflow at 390/768/1024; post parity unchanged; visual-snap 0 issues (reports/visual/blog-drafts-v3-2026-10-24).
- 24 Oct (final pass), blog card and post fixes (owner):
  - Card summaries on /blog-2 and in the related slider are clamped to 2 lines (line-clamp-2), as on /home2. This is the owner's explicit call. visual-snap (reports/visual/blog-drafts-v4-2026-10-24) now reports 6 "clipped text" items, all of them these intentional 2-line summaries; there is no overflow and nothing else is flagged. Full summaries stay on the posts and in their meta descriptions.
  - Post sidebar: the pinned block (contents + audit card) sits in its own flex-1 wrapper that ends above "Recent guides", so it can no longer slide over that box. Tested while scrolling two posts: the gap never drops below 20 px.
  - The related slider's "All guides" is now a Pill CTA with an arrow.
  - The "Written by Zonic Media" author box was removed from the post page.
  - The post header has bottom padding (64/48/40 px) so the featured image no longer touches the section edge.

## 24 October 2026 — /home2 footer radius; owner images on the Google Ads and Web Design drafts (uncommitted)

- /home2 footer: rounded top corners (48 px, 28 px on phones), via a new opt-in Footer prop `rounded` (`.footer-wrapper--rounded` in footer.css). Only /home2 passes it, so every other page's footer is unchanged.
- The owner supplied two images, saved as compressed JPEGs (PNG ~1.8–2 MB → ~410/460 KB):
  - public/images/googleads/google-ads-management-services.jpg on /services/google-ads-2;
  - public/images/webdesign/website-design-services.jpg on /services/web-design-2.
  The owner chose the about-section photo slot for both. They replace the old photos there (/images/dfw/strategist-profile.png and /images/dfw/web/dfw-wireframes.png, which stay on disk). The animated hero UIs are unchanged.
- Each image is shown whole in a box with its own 1448×1086 ratio. The section grid moved from 1fr/2.1fr to 1fr/1.7fr so the photo isn't oversized; the rating badge moved to stay on the column line. Both images have descriptive alt text.
- Checks: tsc/eslint clean; no overflow at 390/768/1024 on all three pages. visual-snap's 3 flags are the existing, intentional 2-line clamp on the /home2 blog-slider cards, not today's changes.
- 24 Oct (later), the owner's images on /services/google-ads-2 and /services/web-design-2: the owner said they were too tall, keep the width and reduce only the height. The grid is back to 1fr/1.7fr (photo ~766 px wide at 1440) and the photo box is the old photo height again: 460 px (420 px at ≤1199). The image fills it with object-cover anchored to the top, so the headline, icons and dashboards stay whole and only the bottom of the desk scene is trimmed. Below 992 px the layout stacks and the whole 4:3 image shows (max 560 px wide). No overflow at 390/768/1024.
- 24 Oct, /home2 header and footer (owner):
  - The redesigned header (RdHeader, /home2 only) no longer has the "Free Website" menu (dropdown, side card and mobile section removed). "Pricing" (/pricing) takes its place in the desktop bar and the mobile menu. The free-website lander links leave the header; those landers are noindex per the growth plan, and the offer hub is still linked from the Web Design panel and the footer.
  - The footer's "Others" column gets "Free Website" (/website-design-agency-us/offer) through a new opt-in Footer prop `freeWebsiteLink`. Only /home2 passes it, so other pages' footers are unchanged (checked in the HTML).
  - Note: /pricing is still a noindex draft. It must go live before this header rolls out sitewide, or the header will link to a noindex page on every page.

## 24 October 2026 — LaunchPad redesign draft: /services/launchpad-2 (uncommitted, noindex, canonical /services/launchpad)

- Code: src/components/rd/launchpad/LaunchpadPage.tsx, launchpadUi.tsx and content.ts; route src/app/(main)/services/launchpad-2/page.tsx (live metadata + breadcrumb/Service/FAQPage JSON-LD).
- Same section order as the live page in the DFW-kit layout:
  - centred hero with a rocket icon in the H1 and an animated "launch board" underneath: a 7–14 day track with six milestones and a rocket riding it, then six deliverables (logo & brand, website, Google Business Profile, social profiles, local SEO foundation, lead capture) turning to "Done";
  - the YouTube video beside an indigo card;
  - problem / solution cards, plus the deliverables list beside the rocket image;
  - the 3 steps, each with its own UI (business brief, brand and build, launch checklist);
  - a dark band with the launch-day card;
  - an insights bento;
  - three pricing cards ($950 / $1,750 / $4,200 unchanged; Growth featured);
  - the Google reviews widget, the 11 FAQs, a contact block with ServiceLeadForm (formType "launchpad"), a light lilac → cream → peach banner, and RelatedServices.
- Pillar colours: deep indigo #2a1aa8 + orange #f97316, from the rocket artwork.
- Parity with live:
  - title, description, H1, all 10 internal body links and the JSON-LD are identical;
  - 136 of 138 text blocks are verbatim. The other two are the eyebrow "Zonic Media Your Growth Partner" (dropped; no eyebrows above headings) and "| Most Popular" (now a separate badge);
  - words 1,327 → 1,608.
  Semrush has no ranking data for this URL (24 Oct).
- Changes to flag for the owner:
  - the plan prices are no longer H2 headings;
  - a contact form was added (the live page hides its form and relies on the GHL chat);
  - one new line under the video heading.
- Checks: tsc/eslint clean; no missing classes; no overflow at 390/768/1024; H1 2 lines from 768 px up; visual-snap 0 issues (reports/visual/launchpad-draft-2026-10-24).
- 24 Oct (later), /services/launchpad-2 owner revisions:
  - Hero visual replaced. The owner disliked the launch board and picked "Idea → launched business" from three sketches. New IdeaToLaunchUi:
    - a taped idea note ("Start my own business") whose questions (Logo? Website? Google listing? Customers?) turn from "?" to ticks;
    - a flowing arrow labelled "Zonic LaunchPad · 7–14 days";
    - the launched business assembling piece by piece: brand row with palette, website, Google Business Profile phone (verified, Call/Directions/Website), social profiles, directory listings and a "New customer call" pop-up.
    It stacks with the arrow turning down below 992 px. The old LaunchBoardUi was removed.
  - "From Idea to Launch" boxes are smaller (owner: too big): tighter padding, 21–26 px card headings, 15.5 px lists, smaller icons, the image box 340 px min, and the top row no longer stretches the shorter card.
  - "Everything You Need to Start and Grow…" gets four contact tiles with icons (phone, email, Dover office with map link, "We respond within one business day") above the Call Now pill.
  - Fix: a dashed border drew on all four sides (no Preflight), so the note's underline now uses an explicit border-bottom.
  Checks: no overflow at 390/768/1024; parity unchanged (136/138 blocks, all 10 links); visual-snap 0 issues (reports/visual/launchpad-draft-v2-2026-10-24).
- 24 Oct (latest), /services/launchpad-2:
  - The "From Idea to Launch" section was rebuilt as the owner's pick from three sketches ("Before / After split"; the compact boxes were rejected):
    - one wide card split down the middle. The left "Before" half (soft red) holds "Starting a Business Feels Exciting at First / Then reality hits" with the four problems as white rows; the right "After" half (indigo) holds "Introducing Zonic LaunchPad™" with the five answers as glass rows and the CTA;
    - a white rocket badge sits on the dividing line (hidden when the halves stack below 992 px);
    - below it, the rocket image beside "Everything Required to Launch Your Business", with the six items as icon tiles in two columns (both links kept).
  - The "Quick replies / We respond within one business day" contact tile was removed; the Dover address tile now spans both columns.
  Checks: no overflow at 390/768/1024; parity unchanged (136/138 blocks, all 10 links, title/description/H1 identical); visual-snap 0 issues (reports/visual/launchpad-draft-v3-2026-10-24).
- 24 Oct (latest), /services/launchpad-2 hero: six floating service icon tiles around the intro/CTA/logos band (owner): branding (pen), website (monitor), social (share) on the left; Google, local SEO (map pin), leads (phone) on the right. Indigo/orange/pink/white/red/green, gentle bob, decorative (aria-hidden). Shown from 1280 px only, where there is room beside the band; they never touch the H1. No overflow at 390/768/1024.

## 24 October 2026 — HVAC marketing agency redesign draft (industry-page pilot): /services/hvac-marketing-agency-2 (uncommitted, noindex, canonical /services/hvac-marketing-agency)

- The owner asked to redesign the industry pages without losing organic leads, starting with HVAC, and chose /services/hvac-marketing-agency (the page the Industries hub links to, parent of 7 state pages) over /services/industry/local-seo-services-for-hvac.
- Code: src/components/rd/hvac/HvacMarketingPage.tsx, hvacUi.tsx and content.ts; route src/app/(main)/services/hvac-marketing-agency-2/page.tsx. SERVICES and SPECIALTIES are imported from the live stateContent.ts, so the parent and the state pages can't drift.
- Data (24 Oct):
  - Semrush shows the live page ranking for only 4 low-volume terms (positions 32–97), and no data at all for the HVAC SEO page.
  - GA4 could not be queried (token expired: invalid_grant), so organic-lead landing pages couldn't be confirmed.
  - The owner's home-inspector example is a separate family and is untouched.
- Kept from live:
  - title, description, keywords, canonical and H1 (with a decorative thermostat icon);
  - all 12 H2s, present and in the same order; all 32 H3s;
  - every paragraph, the 4 problem cards, the results stats, the 3 steps, the 7 state links, the 7 FAQs;
  - all 19 internal links;
  - breadcrumb, LocalBusiness and Service JSON-LD.
  The word count grew 3,410 → 4,594.
- Changed:
  - unverified trust badges (500+ businesses, 35+ HVAC contractors, 4.9/5) replaced by verified figures (1,500+ GBPs optimized, 900+ reinstated) plus the "2 peaks" stat;
  - the GBP FAQ's "300-plus" reinstatements is now "900-plus";
  - the Clutch widget is now the Google reviews widget (its intro rewritten to match);
  - the HVAC price cards are replaced by the sitewide PricingSection with the same tiers and prices ($297 / $750 / $1,500), as the owner asked. Its lead keeps the live pricing paragraph and its GBP reinstatement link (PricingCopy.lead now accepts ReactNode).
  - the ticker, the old nav strip and the old animated visuals (MapPackRace/LeadEngine/GrowthCurve) are replaced by new UIs.
- New, for search and AI (Semrush US volumes, 24 Oct):
  - H2 "HVAC Marketing Strategies and Ideas That Book More Calls": 8 strategy cards. Targets: hvac marketing ideas 1,300 · strategies 1,000 · plan 880 · social media marketing 1,000 · email marketing 590 · reputation management 210.
  - H2 "HVAC Lead Generation Without Paying for Shared Leads": a shared-vs-exclusive table built only from the live page's figures. Targets: hvac lead generation 1,300 · hvac leads 1,300 · how to get hvac leads 260.
  - H2 "Get Your HVAC Company Recommended in AI Search": an AI-answer card plus a link to /services/ai-seo-services.
  - Five answer-first FAQs (how to get HVAC leads, 2026 marketing ideas, SEO vs Google Ads, social/email, ChatGPT/AI Overviews), included in the FAQPage JSON-LD (12 questions).
  - A light closing banner.
- New UIs:
  - TwoSeasonsUi hero: a 95°F Thursday phone and a 20°F Sunday phone with the Map Pack and a call, plus a dispatch board;
  - DemandPeaksUi (sticky beside the problem prose), MapPackShareUi (the live 44/18/11% figures), AiAnswerUi, and three process-step UIs.
  - Pillar colours: hot red #ef4444 and cold blue #0284c7.
- Checks: tsc/eslint clean; no missing classes; no overflow at 390/768/1024; H1 is 2 lines from 768 px (4 at 390: the 13-word live H1 is kept verbatim); visual-snap 0 issues (reports/visual/hvac-marketing-draft-2026-10-24).
- Template for the other industry pages: keep every live H2/H3/paragraph/link/FAQ, add strategies, lead-generation, AI-search and answer-first FAQs per trade with that trade's own Semrush keywords, use the sitewide pricing, and swap unverified stats for verified ones.
- 24 Oct (later), /services/hvac-marketing-agency-2 rebuilt as v2. Owner: v1 kept every live block and "made it filled up again"; they want short pages like the other redesigns, important sections only, strong UI and images, a different hero, and a better position than the current 30–40.
  - New hero: a left-aligned H1 across the top (live H1 kept), then the copy, CTAs, stats ($15–25 organic cost per lead · 1,500+ optimized · 900+ reinstated) and logos beside HeroCollageUi. The collage: summer AC-repair photo (95°F, "ac repair near me") and winter furnace photo (20°F, "furnace repair near me"), a thermostat dial, a Map Pack card with Your HVAC Co #1, a new-call toast and a "5 jobs booked" chip. The old TwoSeasonsUi phones were removed.
  - Sections (12): hero · HVAC Marketing Services That Fill Your Schedule (6 cards, each linking out) · How Our HVAC Marketing Company Books More Calls (3 rows: Map Pack, PPC timed to the peaks, AI search) · HVAC Lead Generation Without Shared Leads (dark band + table) · HVAC Specialties We Market (commercial photo + 8 tiles) · Our 3-Step Start · HVAC Marketing in Your State (7 state links) · Google reviews · sitewide pricing · 9 FAQs (5 live + 4 answer-first) · free audit + HvacLeadForm · light banner.
  - SEO:
    - title, description and H1 unchanged; all 19 live internal links kept (checked);
    - H2s now lead with the target keywords: hvac marketing services, hvac marketing company, hvac lead generation, HVAC PPC, HVAC specialties, hvac marketing agency FAQs;
    - "HVAC SEO" is linked to the dedicated HVAC SEO page rather than targeted, so the two pages don't compete;
    - FAQPage JSON-LD for the 9 FAQs; breadcrumb, LocalBusiness and Service JSON-LD unchanged.
  - Words in <main>: live 3,410 → v2 2,385 (v1 was 4,782; the other redesigned pages run 2,250–2,450).
  - Checks: tsc/eslint clean; no missing classes; no overflow at 390/768/1024; H1 2 lines from 768 px (4 at 390); visual-snap 0 issues (reports/visual/hvac-marketing-draft-v2-2026-10-24). The v1 page file is backed up in the session scratchpad only.
- 24 Oct (latest), /services/hvac-marketing-agency-2 v3 (owner):
  - Hero: content on the left (H1, lead, CTAs, logos), a bento on the right (HeroBentoUi): the summer AC-repair photo (95°F, "ac repair near me") and the winter furnace photo (20°F, "furnace repair near me") as tall tiles, a Map Pack tile (Your HVAC Co #1, Call now) and a dark tile (new call + 1,500+ / 900+). Replaces the v2 collage.
  - The H1 was changed at the owner's request to the most-searched terms: "HVAC Marketing Agency for Contractors Who Want More Calls & Booked Jobs" (hvac marketing agency 2,900/mo KD 9 · hvac marketing company 1,900 · marketing for hvac contractors). Title and description unchanged. Note: this is a content change (H1), so at swap time keyword-guard will flag it, and it should not deploy in the same week as any title/meta change.
  - Contact: HvacLeadForm rendered unstyled (its hia-* CSS lives with the old page), so it was replaced by the sitewide ServiceLeadForm with formType "hvac-marketing" (leads stay tagged HVAC; the city now goes in the message field).
  - Closing banner is now dark: an ink base with the HVAC red and blue glowing from opposite corners, white text, and sun/snowflake tiles.
  - Checks: no overflow at 390/768/1024; H1 3 lines from 992 to 1600 px (2 at 768 and 1920, 4 at 390); all 19 live links kept; visual-snap 0 issues (reports/visual/hvac-marketing-draft-v3-2026-10-24).
- 24 Oct (latest), /services/hvac-marketing-agency-2 hero: the left content column is wider (grid 1.12fr/0.88fr, lead max 640 px; owner: the left side looked congested). The bento is narrower (rows 172 px). H1 3 lines from 992–1600 px; the four logos now sit on one row; no overflow at 390/768/1024.
- 24 Oct (latest), /services/hvac-marketing-agency-2 heading scale (owner: the hero H1 looked smaller than the section headings): every section H2 is capped at clamp(28px,3.3vw,48px) via a main-level override, and the H1 is raised to clamp(38px,4vw,60px) (phones 31–36 px), with the hero columns at 1.18fr/0.88fr. Measured: 1440 → H1 57.6 / H2 47.5 px; 1024 → 41 / 33.8; 390 → 32 / 28. H1 stays 3 lines (2 at 768/1920, 4 at 390). No overflow; visual-snap 0 issues.
- 24 Oct (latest), /services/hvac-marketing-agency-2 heading/hero follow-ups (owner):
  - "Don't reduce the other headings, increase the hero one": reverted the main-level H2 cap. Section H2s are back to the kit sizes (1440: 62 / 57.6 / 47.5 / 36 px; banner 63.4).
  - Tried a taller hero (pt-44/pb-24, bento rows 212 px) and a 68 px H1. Owner: heading too big, then "reduce it more", then revert the height.
  - Final: H1 clamp(36px,3.85vw,56px) (phones clamp(30px,8vw,34px)): 1440 → 55.4 px, 3 lines from 992–1600 px (2 at 768/1920, 3 at 390). Grid 1.2fr/0.8fr. The hero height is restored to its earlier values: pt-36 / pb-(--sec-y) (phones pt-120 px), bento rows 172 px (160 px under 1200). No overflow at 390/768/1024; tsc and eslint clean.
- 24 Oct (latest), /services/hvac-marketing-agency-2 hero + services (owner):
  - Hero background now matches the /home2 hero: same near-white blue gradient, the two blurred blue/violet glows and the "+" marks. The marks are placed in the gutters, the top band and the column gap so none sit on the H1 or the bento, and they are hidden below 992 px. Two earlier backgrounds were rejected: a warm/cool diagonal, then white with a dot grid.
  - The hero fills the screen from 992 px (min-height min(100svh,1080px), content centred) so the next section no longer peeks in at 1280×800, 1366×768, 1440×900, 1536×864 or 1920×1080.
  - Bento: wider (grid 1.1fr/0.9fr); temperature badges removed from both photos (search chips kept); no animation on the Map Pack or call tiles.
  - Service cards: three check-mark points each under the description, using the card's hot/cold tone, with the link pinned to the bottom. "0% ad-spend markup" and "GBP reinstatement included" are verified claims; the rest describe deliverables.
- 24 Oct (latest), /services/hvac-marketing-agency-2 contact + lead-gen + legal (owner):
  - Audit/contact block: the four points are now a 2×2 grid (1 column on phones). The call button is replaced by contact tiles: phone (orange-red icon) and email (blue icon) side by side, the Dover address across the full row. Tiles stack in one column at 992–1199 px and on phones. "Free audit before any commitment" is shortened to "Free audit, no commitment".
  - Lead-gen band: the owner asked where the table figures came from. They were copied from the live HVAC page, not from search research: $80–150 per shared lead, sold to 3–4 competitors, $15–25 per organic lead, $300–500 per booked job. The live page cites no source for any of them. Replaced with rows that hold for shared leads by definition (who gets the lead / what you pay for / when you stop paying / repeat business). The lead paragraph no longer names any lead platform.
  - Legal (owner): no third-party company may be named in a negative or comparative claim. FAQ 1 and 2 no longer mention Angi or HomeAdvisor (the FAQPage JSON-LD follows automatically). The HVAC draft now has 0 such mentions.
  - Still on live pages, not changed (live pages stay untouched until the owner approves): live HVAC, plumbing and bathroom-remodeling pages, the home-inspector hub, its stateContent.ts and 27 home-inspector state files name Angi/HomeAdvisor/Thumbtack/Networx in "shared leads cost $X" claims. The industries-2 hub and the dfw-kit hub list HomeAdvisor only as a directory we manage, which is neutral.
- 24 Oct (latest), /services/hvac-marketing-agency-2: copy refreshed under the owner's fresh-content rule. Owner: "dont copy the previous content from my old page i want the fresh relevent content … new h1's trending keywords and content with different design".
  - Semrush US data pulled 24 Oct.
    - Agency terms: hvac seo 3,600 · hvac marketing agency 2,900 (KD 9) · hvac seo services 2,400 · hvac marketing company 1,900 · hvac digital marketing 1,600 · hvac lead generation 1,300 · hvac marketing ideas 1,300 · hvac ppc 1,000 · hvac social media marketing 1,000 (KD 13) · hvac email marketing 590 (KD 5).
    - Questions: how to get hvac leads 260 · how to market your hvac business 210.
    - Homeowner searches: ac repair near me 201K · furnace repair near me 165K · air duct cleaning near me 165K · hvac repair near me 135K · heat pump installation 40.5K · emergency ac repair 33.1K ($41 CPC) · hvac maintenance near me 18.1K · mini split installation 12.1K · commercial hvac near me 9.9K.
  - Rewritten fresh:
    - hero paragraph, Map Pack and PPC feature copy, service-card descriptions;
    - the specialties section (now "HVAC Marketing for Every Service You Sell": each tile shows the homeowner search we target and its Semrush volume; New Construction and Maintenance Plans swapped for Duct Cleaning & Air Quality and Emergency & 24-Hour);
    - the 3 steps and their H2 ("Start Your HVAC Marketing in 3 Steps"), the audit paragraph, points and form subtitle, the pricing lead, the states lead;
    - all 10 FAQs, written around the Semrush questions (FAQPage JSON-LD follows).
  - Removed the old page's unsourced figures: 44/18/11% click share (the card is replaced by SearchDemandUi with real Semrush volumes), the "70% of calls" claim, the five-page / thirty-minute / 14-day process figures, and the "launch windows Mar–Apr/Sep–Oct" wording.
  - New title "HVAC Marketing Agency | SEO, PPC & HVAC Lead Generation" (55 characters), a new 147-character description and new keywords. This is a title change for keyword-guard at swap time; don't ship it in the same week as other title/meta changes.
  - Check: no 7-word run of text is shared with the live page except the phone/CTA, the address and the sitewide form consent. Live HVAC files untouched; no overflow; visual-snap 0 issues (reports/visual/hvac-marketing-draft-v3c-2026-10-24).
- 24 Oct (latest), /services/hvac-marketing-agency-2 specialties section (owner: still not relevant; drop the "US searches per month · Semrush" note). Owner picked option 1 of 3: same layout and photo, but each tile now names a service and the marketing we run for it (AC repair → 24/7 call ads + top-3 Map Pack spot; heat pumps → install pages with quote and financing forms; emergency → call-only ads after hours; tune-ups → spring/fall offers to past customers; commercial → B2B service pages + contract-focused ads; etc.). The search-volume badges and the Semrush note are gone; the note's spot is now a "Sell something else? We market it too." link to the audit form. Lead: "Each service gets its own plan, built around how homeowners buy that job." The Semrush figures stay only in the Map Pack/PPC feature copy and the Map Pack card.
- 24 Oct (latest), /services/hvac-marketing-agency-2 hero background (owner disliked the /home2 copy). Four new directions were offered; the owner picked "Tinted panel behind bento". The section is plain white; behind the bento sits a large panel (sky blue #d8ecfd → #eaf4fe → light peach #fdeee2, 165°) with rounded left corners, running off the right edge. It becomes a full-width band behind the bento when stacked below 992 px. Its left edge sits in the column gap (40 px past the bento, 20 px at 992–1199) so it never touches the H1 or the badges. The /home2 glows and "+" marks are removed. No overflow; visual-snap 0 issues (reports/visual/hvac-marketing-draft-v3d-2026-10-24).
  - Backgrounds the owner has rejected for this hero: warm/cool corner glows, warm→cool diagonal, white + dot grid, the /home2 blue/violet glows + "+" marks.
- 24 Oct (latest), /services/hvac-marketing-agency-2 hero, a series of owner calls:
  - "Make it just like the hero of /about-2" (owner picked: its look, keep the HVAC photos). Background = the /about-2 gradient (blue/violet glows → #f6f8fd) with its 5 "+" marks, hidden on phones. The tinted panel is removed.
  - The bento went through two quick versions (an /about-2-style staggered stat-card bento, then a 5-tile checkerboard). Final per owner: no 5.0 card (the Google rating is already on the left), no company stats like "1,500+ optimized" ("show something like we grow that particular service"), and four tiles only. Final bento (HeroBentoUi v6), two columns:
    - the tall AC-repair photo over a red "More AC repair calls / Every summer peak" card;
    - a blue "More furnace jobs / Every winter rush" card over the tall furnace photo.
    - Each card has a rising mini bar chart and a trend arrow, no figures. Static; all corners use --r-xl.
  - Hero content raised ~30 px at 992 px and up (pt 120 px, pb sec-y + 40 px; still fills the screen). At 1440×900 the H1 starts at 227 px, was 259.
  - No overflow at 390/768/1024; tsc/eslint clean; visual-snap 0 issues (reports/visual/hvac-marketing-draft-v3e-2026-10-24).
- 24 Oct (latest), NEW draft /services/hvac-marketing-agency/florida-2 (noindex; canonical → live /services/hvac-marketing-agency/florida). Owner: relevant sections, trending keywords, every heading and paragraph freshly worded (same message, different words), new UI components, few figures, nothing copied from the live Florida page or the HVAC draft.
  - Research (Semrush US, 24 Oct):
    - The live URL ranks only for "hvac marketing company fl" (#19, 70/mo).
    - Florida agency terms are small (hvac marketing florida 40, agency/company florida 30 each, hvac seo tampa 50).
    - The demand and cost sit in homeowner AC searches; "ac repair <city>" CPC: Jacksonville $72, Orlando $70, Tampa $66, Fort Myers $55, Sarasota $52, Miami $24.
  - Title "HVAC Marketing Company FL | Florida HVAC SEO & Google Ads" (57 characters; exact-match for the one ranking term); new 150-character description; H1 "Florida HVAC Marketing Company for Year-Round AC Calls".
  - Sections, in order:
    1. Hero: /about-2 background + photo slot with a Maps search card, storm-ready and Spanish chips.
    2. "What Makes Selling HVAC in Florida Different": FlYearUi (no off-season + Jun 1–Nov 30 storm band) + 4 factors.
    3. "Paying Too Much for Florida AC Repair Clicks?": FlAdCostUi with the CPCs.
    4. "What We Run for Florida HVAC Contractors": 6 service rows.
    5. "Florida Regions and Cities We Cover": 6 region tiles + "other towns" link.
    6. Google reviews ("Reviews From Owners We've Helped Grow").
    7. Pricing ("Florida HVAC Marketing Pricing").
    8. Split FAQ, 7 fresh questions (FAQPage JSON-LD).
    9. Audit + ServiceLeadForm, formType "hvac-marketing-florida".
    10. Light sand→teal banner "Turn Florida's Endless Summer Into Booked Jobs".
  - Pillar colours: Gulf teal #0d9488 + sunset coral #f97316. Code in src/components/rd/hvacstate/ (florida.ts, floridaUi.tsx, HvacFloridaPage.tsx).
  - Checks:
    - all 8 internal links from the live page kept;
    - no heading identical to the HVAC draft or the live page (only the shared plan names match);
    - 6-word overlap only in shared components (form, pricing, phone);
    - no overflow at 390/768/1024; visual-snap 0 issues (reports/visual/hvac-florida-draft-2026-10-24);
    - tsc and eslint clean.
  - Open: the hero photo is a labelled skeleton (no Florida HVAC photo in /public). The owner supplies one or approves generating it.
- 24 Oct (latest), /services/hvac-marketing-agency/florida-2 follow-ups (owner):
  - Owner asked whether "company" vs "agency" was researched. Semrush US: hvac marketing company fl 70 (the live URL's only ranking term, #19) · hvac marketing florida 40 · hvac marketing agency orlando 40 · hvac marketing agency florida 30 · hvac marketing company florida 30 · nationally agency 2,900 vs company 1,900. Now the title is "HVAC Marketing Company FL | Florida HVAC Marketing Agency" (56 characters) and the H1 is "Florida HVAC Marketing Agency for Year-Round AC Calls".
  - "Don't use images on location pages, use stats": the hero photo slot and its overlay cards are removed. FlHeroStats has four tiles:
    - teal: 12,500+ "AC repair" searches a month across 12 Florida cities (Semrush sum: 12,550);
    - white: $66–72 per "AC repair" click in Tampa, Orlando and Jacksonville;
    - coral: Jun–Nov hurricane season (June 1 to November 30);
    - ink: 12 of 12 months with AC demand.
    - A "Search and click data: Semrush (US), Oct 2026" note sits under the tiles.
  - No overflow; visual-snap 0 issues (reports/visual/hvac-florida-draft-v2-2026-10-24).
- 24 Oct (latest), /services/hvac-marketing-agency/florida-2 contact block: the left column now lists phone, email and office address (owner; saved as a rule for every future page). The single phone card is replaced by one panel with three dashed-divider rows (teal phone, coral email, ink office pin; each row is a link: tel:, mailto:, Google Maps in a new tab). No overflow at 390/768/1024; tsc/eslint clean.
- 24 Oct (latest), /services/hvac-marketing-agency/florida-2 hero: the "$66–72 per AC repair click" tile is removed. Owner: no price or ad-budget estimates in heroes because they vary; saved as a rule for all pages. It is replaced by a white "EN + ES — Pages, posts and ads in English and Spanish" tile; the source note now reads "Search data: Semrush (US), Oct 2026". No overflow; tsc/eslint clean.
- 24 Oct (latest), /services/hvac-marketing-agency/florida-2 hero bento (owner: "grid layout is perfect, just change the content … we grow business … attract the clients"; saved as a rule for future pages). Same 4-tile grid, new growth messages:
  - teal: "Top 3 on Google Maps — In every Florida city you serve, in English and Spanish" (Tampa/Miami/Orlando/Jacksonville/+ your city chips);
  - white: "More booked jobs — Every call tracked from first ring to finished install";
  - coral: "Storm-season ready — Pages and ads live before the calls flood in";
  - ink: "A full schedule, all year — Tune-up and membership offers fill the cooler months" (rising bars).
  - The Semrush note under the hero is gone (no data in the hero now).
  - The "Paying Too Much for Florida AC Repair Clicks?" section keeps its CPC figures; the owner's no-estimates note was for the hero only.
  - No overflow; visual-snap 0 issues (reports/visual/hvac-florida-draft-v3-2026-10-24).
- 24 Oct (latest), /services/hvac-marketing-agency/florida-2 restructure (owner):
  - Service cards "What We Run for Florida HVAC Contractors" moved up to right after the hero and rebuilt like the HVAC agency page's cards: 3-column grid; each card has an icon circle (coral/teal), a title, the description, three fresh check points and the link(s) pinned to the bottom. RowHead lead + "Audit My Florida Marketing" pill.
  - "What Makes Selling HVAC in Florida Different" (demand/season facts + FlYearUi) removed. Owner: not relevant; show what we offer and how we grow the client.
  - Replaced by "How We Grow Florida HVAC Companies", three alternating rows, each with a new UI:
    - "Show Up First on Google Maps in Your Florida City" — FlMapPackUi: street map with pins, Your HVAC Co #1 for "ac repair orlando", Call/Directions;
    - "Get Named When Floridians Ask AI for an AC Company" — FlAiOverviewUi: Google AI Overview for "best ac repair company in tampa fl" + ChatGPT/Gemini/Perplexity row;
    - "Earn a New Google Review After Every Job" — FlReviewFlowUi: after-job text, then a 5-star review with an owner reply; example names.
  - Order now: hero → services → growth → ad cost → regions → reviews → pricing → FAQ → audit → banner.
  - Checks:
    - 31 headings, none identical to the HVAC draft or the live page (only the shared plan names match);
    - 6-word overlap only in contact/form/pricing components;
    - all 8 live links kept;
    - no overflow; visual-snap 0 issues (reports/visual/hvac-florida-draft-v4-2026-10-24).
- 24 Oct (latest), INDUSTRY REDESIGN PROGRAMME + EARLIER-DRAFTS CONTENT PASS (owner). Progress log:
  - Built shared templates in src/components/rd/industry/:
    - types, icons, palettes, ui;
    - IndustryTemplate (the HVAC-2 layout) and LocationTemplate (the Florida-2 layout);
    - route helpers and reference examples.
    - Verified they reproduce the HVAC/Florida drafts. Agent rules: docs/industry-redesign-brief.md and docs/content-optimization-brief.md. Temporary previews: /rd-preview/industry and /rd-preview/location (delete later).
  - PLUMBING (8 drafts, done):
    - /services/plumbing-marketing-agency-2 and /services/plumbing-marketing-agency/{arizona,california,florida,georgia,illinois,north-carolina,texas}-2.
    - Fresh researched copy; all live links kept. Main H1 "Plumbing Marketing Agency That Keeps Plumbers Booked Solid" (shortened to 3 lines); FL H1 shortened to keep the ranking term "plumbing digital marketing agency".
    - Checks: cross-dupcheck of all 8 against each other + the HVAC drafts is OK; 3-line H1s; no overflow.
    - Fixes along the way: AI row restored on main (dupcheck now treats template UI labels as sitewide).
  - EARLIER DRAFTS (copy only, design kept):
    - /services/local-seo-for-home-services-2: ranking phrases kept inside the new H1/H2s (e.g. "seo experts for home services" #21), 11 FAQs, all 30 links, verified-only trust strip. Dupcheck vs live: 14 runs / 46 headings → 0 / 0.
    - /home2:
      - H1 is now "Digital Marketing Agency for Small Business Growth" (was "…for SEO, AI Search, Web Design and Google Ads"; owner to confirm).
      - Title "Digital Marketing Agency for Small Business | Zonic Media".
      - Removed: 44% Map Pack claim, $1,000–5,000 fee line, Clutch badge text.
      - Address added to the contact block.
      - Only the blog slider (same posts as live) still overlaps.
    - /about-2: copy refreshed, hero kept, title "About Zonic Media | Local Marketing Agency in Dover, DE".
    - /services/launchpad-2: all copy new; package names, prices ($950/$1,750/$4,200) and inclusions unchanged. Title/H1 now "Small Business Startup Package…"; the "LaunchPad" name is no longer in the title/H1 (owner to confirm). The $1,500–3,000 spend estimate is removed.
    - /contact-us-2 and /blog-2: copy refreshed. /blog-2 overlaps only on post titles/dates.
    - /services/web-design-2: build times removed pending the owner's choice (2–6 vs 4–8 weeks); $2,500–10,000 FAQ removed.
    - /services/google-ads-2: CPC/cost figures removed from the hero dashboard (now calls/leads), ad-spend/fee estimates removed. The owner must confirm the fee model (live meta says "priced on your ad spend") and any Google Ads certification.
  - Semrush API units ran out mid-run (24 Oct); the remaining agents use Google web research per the owner's instruction.
  - Still running:
    - home inspector main + 31 states (5 agents);
    - services-2/industries-2/pricing;
    - Delaware + Wilmington;
    - Philadelphia;
    - NYC + DFW local SEO.
- 24–25 Oct (latest), earlier-drafts content pass finished for all groups (copy only, designs kept):
  - /services-2, /industries-2, /pricing:
    - Copy is new; all child and industry links kept.
    - Industries no longer names review sites, and its wrong "No" to working outside Delaware is fixed.
    - /pricing title "Digital Marketing Packages & Pricing | Plans From $297/mo" (old title said $197), plus a 7-question FAQ with schema.
  - Delaware ×3 + Wilmington:
    - Live ranking terms kept, e.g. "digital marketing delaware" #6, "seo company dover" #14, "website development company in new castle county" #11.
    - Removed unverified stats ("50+ businesses", +212%, "$41 cost per lead", "100+ sites", "$2,500–$8,000"…) and all build-time week counts (2–6 vs 4–8 unresolved).
  - Philadelphia ×4:
    - Ranking terms kept, e.g. "philadelphia search marketing" #1, "ppc management philadelphia" #5, "sem agency philadelphia" #3.
    - Removed invented stats and budget/CPC FAQs; stale $197 fixed; the LSA badge name is now "Google Verified".
  - NYC ×3 + DFW local SEO:
    - NYC local SEO ranking terms kept ("local seo services nyc" #17…).
    - Invented results removed (+164%, 3.4×, "<2s"…); the DFW hero's $297/"4–8 weeks" cards are now growth outcomes; named-source survey stats removed.
  - Shared Delaware template fixes (only the noindex drafts use it):
    - DelawareLanding contact block now has an address pill (phone/email/address rule). The address sentences agents had added to 11 contact leads as a workaround are removed again, along with the 7 now-unused SITE_CONTACT imports.
    - Mock-up legends "Before Zonic / After 6 months / After six months / After 90 days / up from X% before Zonic" are relabelled "Example: starting point / Example: goal" so they can't read as client results (DelawareUi, nycSeoUi, phlSemUi, phlPpcUi, wilmingtonUi).
  - dupcheck SITEWIDE list now includes the DelawareLanding Google-rating label.
  - Session restart and a usage-limit stop interrupted 9 agents; all were resumed from their saved transcripts with no work lost.
- 25 Oct (latest), HOME INSPECTOR (32 drafts) + pricing lock + template additions:
  - /services/home-inspector-marketing-2:
    - Title "Home Inspector Marketing Agency | SEO, Ads & Inspection Leads" (contains the live title word for word); H1 "Home Inspector Marketing Agency for More Booked Inspections".
    - Hero photos buyer-inspections + sewer-scope; growth cards "More buyer inspections" / "More add-on bookings".
    - Agent-referral card + own-leads table; all 31 states linked.
    - Semrush units were gone, so the ranking queries are unconfirmed. Pull GSC queries for this URL before any swap.
  - 31 state drafts /services/home-inspector-marketing/<state>-2 (5 agents; all research via WebSearch/WebFetch after Semrush ran out):
    - Each title keeps "Home Inspector Marketing in <State>", and every live keywords-meta phrase sits in the title, H1, headings or FAQ.
    - State facts were checked online (licensing boards, radon/WDI/septic rules, e.g. NC due diligence, MA 760 CMR 74.00, UT H.B. 58, PA Act 114).
    - Unverifiable points were softened: Georgia's licensing bill is "debated in 2026"; Utah's application date is just "2026".
    - Each state has its own palette; no images; no prices beyond the plan figures.
  - LocationTemplate now renders an "<Niche> marketing in other states" link row from src/components/rd/industry/siblings.ts (home inspector 31; plumbing/HVAC 7). This keeps every live sibling-state link. The 30-link paragraphs agents had stuffed into contact/pricing leads are removed from 20 content files.
  - PRICING LOCK (owner, 25 Oct: change nothing in /pricing or any pricing section except headings; never touch cards):
    - The shared PricingSection now always shows the /home2 baseline lead, compare, add-on and custom texts; only the four headings vary per page.
    - /pricing is restored to its original copy and metadata. The FAQ/schema/contact additions were removed. The only changes kept are the headings "Compare Digital Marketing Packages" and "Add-Ons for Any Marketing Plan" (they had duplicated /home2).
    - The original /pricing title/description still say "From $197/mo" (the annual rate); left as instructed and flagged to the owner.
  - dupcheck/crosscheck now ignore the locked pricing text and the sibling link rows.
  - A pairwise cross-check of 42 industry drafts found 27 pairs sharing one short phrase; a dedupe agent is rewording the state/plumbing side (the HVAC pages are untouched).
- 25 Oct (latest), HVAC STATES done: /services/hvac-marketing-agency/{texas,california,arizona,illinois,georgia,north-carolina}-2 (LocationTemplate; palettes amberIndigo, fuchsiaTeal, orangeSky, roseBlue, greenViolet, violetCyan).
  - Live keyword phrases kept in titles/H1/headings/FAQ questions.
  - Licensing FAQs verified online (TDLR + 16 TAC 75.71, CSLB C-20 + B&P 7030.5, AZ ROC/A.R.S. 32-1124, IL local licensing + EPA 608, GA Conditioned Air Class I/II, NC H-1/H-2/H-3).
  - A dedupe pass reworded the six pages until the pairwise cross-check of all 48 industry drafts reports 0 issues.
  - Layout: no overflow at 390/768/1024 on all 46 template pages.
  - Industries with location pages (HVAC, plumbing, home inspector) are COMPLETE: 3 main + 44 location drafts. Next: the 28 single-niche main pages.
- 25–26 Oct (latest), 28 SINGLE-NICHE MAIN PAGES built on IndustryTemplate (7 agents × 4; Semrush exhausted, so research came from WebSearch/WebFetch plus each live page's keywords meta):
  - Drafts at /services/<niche>-marketing-agency-2 for: roofing, electrician, pest-control, landscaping, dental, chiropractic, pediatric, law-firm, real-estate, auto-repair, towing, moving-company, cleaning-company, painting-contractor, garage-door, window-and-door, bathroom-remodeling, kitchen-remodeling, flooring, general-contractor, gutter, tree-service, pool-service, septic, solar, appliance-repair, cannabis, non-profit.
  - On every page:
    - live title core term and every live keywords-meta phrase kept;
    - all live main-content links kept, with the niche's *-website-design / industry local-SEO pages added where they exist;
    - pricing section shows headings only (owner lock);
    - plan figures appear only in FAQ/audit points;
    - 10 FAQs from web research;
    - H1 ≤ 3 lines.
  - Niche safeguards:
    - Cannabis: no Google Ads promise (US cannabis ads prohibited; Google's only pilot is Canada-only).
    - Healthcare (dental, chiro, pediatric): no outcome claims; example review replies never confirm patient status.
    - Law firm: no expert/guarantee/case-result claims.
    - Solar/window: no savings or incentive figures.
    - Garage door: notes Google's Advanced Verification requirement.
    - Real estate: housing-ad rules.
  - Template additions: ReviewsUi.title/sentNote and WebsiteUi.cta/note are now configurable (cannabis "After-visit review request"; non-profit "Donate now"). The cleaning hero switched to tiles because its photo folder holds one image only.
  - Open owner questions:
    - cannabis "programmatic ads where legal" offer;
    - the towing own-leads "motor club dispatch" band;
    - the non-profit page keeps its live link to the home-services local SEO page.
- 26 Oct (latest), INDUSTRY PROGRAMME COMPLETE — final verification:
  - 76 industry drafts (3 location niches = 50, 28 single-niche mains) are cross-checked pairwise: "pages 76, pairs with issues: 0". This took 3 dedupe agents and ~200 small rewordings; titles, H1s, live keyword phrases, hrefs and plan figures are untouched.
  - Plan-price restatements ("$297, $750 or $1,500 a month", "0% markup") are treated as sitewide owner-locked facts in the checker, like the pricing section.
  - tsc 0 errors; eslint clean on src/components/rd/industry.
  - Layout: no overflow at 390/768/1024 on every template page.
  - Before any swap:
    - pull GSC queries for home inspector (Semrush was exhausted);
    - run keyword-guard/snapshot per the redesign programme;
    - title changes deploy on their own, not in the same week as other title/meta changes.
  - Temporary preview routes /rd-preview/industry and /rd-preview/location still exist (noindex). Delete them at clean-up.
- 25 Oct (owner answers), changes:
  - **home2:** H1 "small business" → "local business" (title unchanged).
  - **LaunchPad-2:** new title "New Business Marketing & Website Package | Zonic LaunchPad" and new H1, for organic growth.
  - **Build time = 2–4 weeks:**
    - drafts: web-design-2, delaware/web-design-2 and nyc/web-design FAQs;
    - live pages, number only: /services/web-design, /services/delaware/web-design, DFW web-design-agency.
  - **Google Ads fee no longer stated:** google-ads-2 tile, lead and FAQ; philadelphia ppc-2 and sem-2 cost FAQs replaced.
  - **Semrush volumes/CPCs removed:** from the HVAC main + Florida drafts, and money figures removed from the NYC DM / PHL PPC / PHL SEM example UIs.
  - **Sweep:** no page names or targets another firm. The live blog post "Real Estate SEO vs Zillow Leads" is flagged.
  - **/home2 header (review mode):** menus open the -2 drafts, plus a "New Pages" menu listing all 99 drafts (reviewDrafts.ts; set REVIEW=false before go-live).
  - **Checks:** dupcheck OK on all touched pages; 76-page cross-check 0 issues; tsc/eslint clean.
  - **Still blocked:**
    - Search Console (Chrome extension disconnected);
    - Semrush (MCP disconnected).
- 25 Oct (owner approved): six industry drafts (non-profit, law firm, dental, chiropractic, pediatric, real estate) now point their in-content local SEO link at /services/local-seo-for-small-business instead of the home-services page. Header/footer links are unchanged. Auto repair still links to the home-services page.
- 25 Oct (later):
  - **Build time is now 2–3 weeks everywhere** (owner: "website build can take up to 2-3 weeks only… use this on launchpage also"). Covers:
    - the LaunchPad draft and the live LaunchPad page (H1/H2s/FAQ/meta: "7 to 14 days" → "2 to 3 weeks");
    - the live homepage LaunchPad block and home2;
    - the web design drafts;
    - the live web design, Delaware and DFW web design pages.
  - **Live title/H1 change:** keyword-guard will flag the /services/launchpad H1 and title change. This is expected; the URL had no non-brand queries.
  - **Search Console read (Chrome), last 90 days:**
    - Brand only, so title changes are safe: home, about, contact, services hub, launchpad, web design.
    - Home inspector state pages: almost no real customer queries ("+google search central…" probe queries).
    - Real losses (live word missing from draft) fixed: plumbing "contractors", kitchen "renovation", window & door "contractors", landscaping "targeted", NYC "Upper West Side".
    - Opportunities added: HVAC + FL/IL/GA "HVAC marketing consultant" (1,209 impressions on the main page); "digital" for plumbing/solar/bathroom/moving/painting/flooring/auto repair/window & door; "PPC" for electrician/garage door/moving/chiropractic/pool; "local SEO consultant" + "internet marketing" + "digital marketing consultant" on the NYC drafts; home inspector "home inspection local SEO" (199 impressions, position 14) etc.
    - Re-check: 0 lost words on all 38 pages with data; 76-page cross-check 0 issues.
  - **Keyword guard:** reports/gsc/queries/ now holds query lists for 38 routes (queries ≥50 impressions whose words are on both the live page and the draft), so the guard blocks any swap that drops a ranking word.
  - **Blog:** the Zillow post is left as is (owner).
- 25 Oct (owner: "optimize my pages… use the keywords and content so my pages rank… how u gonna do it depends on you"):
  - **Semrush (web app via Chrome) confirmed the added keywords:** local seo consultant 3,600 (KD 43), window and door contractor marketing 720 (14), electrician ppc 390 (10), hvac marketing consultant 390 (20), digital marketing for home inspectors 320 (12), plumbing digital marketing agency 320 (27), small business website package 320 (5), moving company ppc 260 (5), solar digital marketing agency 260 (10), chiropractor ppc 260 (13), kitchen renovation marketing 210 (10), startup branding package 110 (0).
  - **H2s rewritten:** 51 H2s across ~30 drafts now carry the exact search phrases each live page already earns impressions for (GSC, positions mostly 15–40), e.g. "How Our Moving Company SEO Agency Gets You Shortlisted" (875 impr), "How Our PPC Agency Makes Philadelphia Budgets Go Further", "Questions for an HVAC Marketing Consultant in FL".
  - **LaunchPad:** "Pick the Startup Branding Package…".
  - **Checks:** 76-page cross-check 0 issues; city drafts OK vs live and siblings; tsc clean.
- 25 Oct (owner review fixes):
  - **Blog post hero:** title is larger (clamp 36–60px) and top-aligned with the image.
  - **web-design-2:** H1 now 2 lines at every desktop/tablet width (max-w 1180).
  - **Home-services banner:** "First on Google Maps…" content centred.
  - **Industry templates:**
    - H1 icon badge centred on the capital letters;
    - growth-row panels are flat palette tints (no gradient);
    - reviews heading shrinks so the avatars stay beside it.
  - **Locations with more than 6 entries** (home inspector 31, plumbing 7, HVAC 7): 5 cards plus a "N more states" card that opens a native <dialog> with the rest. All links stay in the HTML (MoreLocations.tsx).
  - **New images (owner's), renamed:**
    - NYC DM, NYC local SEO and NYC web design about photos → /images/nyc/*.webp; the old NYC photos are kept because the live NYC pages use them;
    - Philly DM, SEO, SEM and PPC about photos → *-agency-office / *-dashboard.webp;
    - 4:3 images anchored to the top so the title text shows;
    - the morning's skyline versions were deleted (unreferenced).
  - **Checks:** dev server restarted once (stale route cache); tsc/eslint clean; 76-page cross-check 0.
- 25 Oct (owner tests, home-inspector-marketing-2 only, via content flags):
  - `headingCap` (industry.css):
    - section headings capped at the old H1 size minus 2px at every width; the H1 itself is +2px (57px at 1440);
    - split section heads get a 40–56px column gap, a 500px heading basis and a 400px lead column, so the heading keeps 2 lines with clear space.
  - `heroLayout: "float"`:
    - centred hero copy with the 4 photo/growth cards floating around it (tilted, shadowed) from 1366px up;
    - below 1366 the cards sit in a row under the copy (2×2 on phones);
    - hero still fills the viewport; no overflow.
  - Roll out by setting the flags on other content files (or making them the template default).
- 25 Oct: home inspector hero H1 enlarged again (owner): clamp(40px, 4.3vw+2px, 66px), phones clamp(34px, 9vw+2px, 40px); 64px at 1440. Float cards now clamp(190px, 23vw−120px, 240px) and copy max-w min(720px, 100%−480px) so the H1 stays on 3 lines at 1366–1920 with no card overlap.
- 25 Oct (home inspector only):
  - Hero reverted to the 3-line floating version (the 2-line rule is for sections below the hero).
  - Below the hero: split headings (text beside them) may wrap to 3 lines so a clear gap stays (the 400px lead narrowing was removed); centred section headings stay ≤2 lines. Verified at 768–1920: every centred heading ≤2 lines, every split heading ≤3.
- 25 Oct (home inspector only):
  - Split heading column capped at 620px, so long split headings take 3 lines at every desktop width.
  - Services heading uses explicit desktop breaks: "Home Inspection Marketing / Services for Every / Booking Source" (TitleLines: "\n" in a title = a line break from 992px up; natural wrap below).
- 25 Oct (home inspector only): services heading back to 2 lines ("Home Inspection Marketing / Services for Every Booking Source", set breaks). The heading keeps its natural width, the lead column is 340px, and the gap is clamp(64px, 25vw−250px, 128px): visual gap 149px at 1440 (was ~51), 115 at 1366, 75 at 1280. Below ~1250 the lead stacks under the heading as before. The 620px column cap was removed.
- 25 Oct (home inspector only): split heads stay top-aligned (owner). To even out the space down to the cards, the right column was made about as tall as the 2-line heading:
  - services lead shortened to "One team runs every channel that books inspections, from Maps to reviews.";
  - steps lead shortened to "Maps and ads move first, then rankings climb.";
  - the button gap is 16px with no top padding.
  - Result at 1440: heading→cards 50px vs button→cards 36px (was 95 vs 36); steps 40 vs 54; locations 47 vs 36. The 76-page cross-check is still 0.
- 25 Oct: **home inspector rules rolled out to all 30 template industry pages** (owner: "apply all the rules … heading, hero section layout"):
  - **Template defaults:** `.ind-hcap` on every page, the centred hero with floating bento on every page (FloatBento handles photo and tile bentos), and the test flags removed.
  - **Headings:** section headings capped below the H1; the H1 is larger (64px at 1440); split heads get a clear gap; services headings are 2 lines (set breaks on real estate, tree service, pool service, solar, cannabis).
  - **Copy:** 27 services leads and 5 steps leads shortened to ~2 lines so the space under the heading matches the button side (svc 50/36 px, steps 52/36 px on every page).
  - **Hero:** copy column 800px from 1600px (keeps 3-line H1s); floating card titles 19–23px, short slots 220px (no clipped text).
  - **Checks:**
    - 30 pages audited at 1280/1366/1440/1600/1920: H1 ≤3 lines, no card overlap, centred ≤2, split ≤3, no clipped cards;
    - 76-page dupcheck 0; GSC lost words 0; no overflow at 768/1024; tsc/eslint clean.
  - **Not covered yet:** HVAC main (custom page) and the location/state pages.
- 25 Oct: **same design rules extended to HVAC main, HVAC Florida and all 44 LocationTemplate state pages** (owner):
  - **Centred hero with floating cards on all three:**
    - HVAC main uses its AC and furnace photos plus the growth cards (redSky palette);
    - Florida and the state pages use their four tiles (FloatBento kind "tiles").
  - **CSS:** industry.css selectors cover the ind-, loc-, hv- and fl- ids. The services heading column is flex 1 1 560px (max 760), so heads stay side by side at 1280–1366.
  - **HVAC copy:** services, steps and states leads shortened; four specialty names renamed so no heading repeats the live page.
  - **Florida copy:** services and regions leads shortened.
  - **State-page copy:** the services leads (and 6 home inspector services titles plus the MA growth title) are being shortened by an agent.
- 25 Oct: **state pages done.**
  - **Copy:** an agent rewrote all 44 services leads to 62–70 characters (2 lines), set 2-line breaks on 6 home inspector services titles and shortened the MA growth title. Arizona's break was moved after "Inspectors,".
  - **Overlap fix:** the HVAC "HVAC Maintenance Plans" desc was reworded (it shared a phrase with chiropractic).
  - **Final checks:**
    - 76-page dupcheck 0; GSC lost words 0; no clipped hero cards; no overflow at 768/1024; tsc/eslint clean;
    - state pages svc gap 48–56/36 at 1366–1920; every H1 ≤3 lines with no card overlap.
- 25 Oct: **/services/seo-services-2 built** (noindex draft; canonical /services/seo-services) — first of the local SEO pages redesign.
  - **Layout:** split hero (copy left, new "search visibility" UI right), then services (6 cards), growth rows (rank climb / AI Overview / organic leads UIs), 3 steps, SEO by city, reviews, pricing (locked, headings only), 9 FAQs, audit with contact tiles, light banner. Built from the industry blocks; the heading rules apply via industry.css (seo-* ids).
  - **Keywords (Semrush US via Chrome):** seo services 60.5K · seo agency 60.5K · seo company 49.5K · seo services near me 12.1K (KD 30) · technical seo services 6.6K (KD 27) · seo services for small business 3.6K (KD 19). GSC: the live URL earns almost nothing, so the title/H1 were retargeted.
  - **Title:** "SEO Services & SEO Agency for Small Businesses | Zonic". **H1:** "SEO Services That Bring In Customers From Google and AI Search".
  - **Checks:** all 14 live internal links kept (+ AI SEO and small business local SEO); dupcheck 0 vs the live page, home2, services-2, web-design-2, PHL local SEO and all 76 industry drafts; tsc/eslint clean; no overflow at 768/1024; H1 ≤3 lines.
- 25 Oct (owner review of seo-services-2):
  1. **Local SEO family palette:** the site's Google-style brand colours (blue/red/gold/green cycle, SEO_BRAND + tone() in seouI.tsx), not the industry two-tone pastels.
  2. **Closing banner:** the /home2 vivid gradient (blue → violet → pink, grain, loops, white text) as a shared GradientBanner. Now used on the SEO page AND every industry, state, HVAC and Florida page (replacing the pale banner).
  3. **SEO hero UI rebuilt to explain the service:** an annotated Google results page for "your service near me". AI Overview, Map Pack and organic #1 all show Your Company, each tagged with the work that wins it (AI SEO / Local SEO / On-page SEO), with Technical SEO, Link building and Reporting chips below. Checked at 1440/1280/phone; no overflow.
- 26 Oct: **all 30 Local SEO dropdown pages rebuilt as noindex `-2` drafts** (owner: "build all the page which are under local seo dropdown… content optimization to grow organic… new color pallets layouts… deep search… no duplicate things").
  - **Pages:** ai-seo-services, local-seo-for-small-business, local-seo-packages + the 27 /services/industry/* niche SEO pages. Canonicals point at the live URLs.
  - **Template:** `src/components/rd/localseo/` (data-driven, the seo-services-2 layout).
    - Sections: split hero → 6 services → growth rows (rank / AI Overview / leads, niche data) → steps → new "searches we win" section (3 groups of real customer searches) → reviews → explore tiles → pricing (locked, headings only) → 9–10 FAQs → audit + contact tiles → home2 gradient banner.
    - Hero UI explains the service, 7 kinds:
      - serp: annotated results;
      - phone: mobile Map Pack, for emergency trades;
      - grid: Maps rank grid, for service-area trades;
      - profile: Business Profile breakdown, for remodelers and practices;
      - ai: AI-assistant answer;
      - packages: plan contents with no prices;
      - scorecard: local SEO health check.
    - Colour: a unique 4-hue set per page (tones.ts). No set repeats, and none reuses the niche's industry pair.
  - **Research:**
    - GSC 90-day queries for every URL (6 URLs have no impressions yet: HVAC, plumber, window & door, pest, residential cleaning, dental).
    - Semrush US volumes for 172 terms via the Chrome web app.
    - 3–5 web searches + 1–2 top-page reads per page.
    - Data and rules are in docs/local-seo-redesign-brief.md.
  - **Build:** electricians was written as the reference; 8 parallel agents wrote the other 29, then 4 agents removed the cross-page overlaps.
  - **Rules held:** fresh copy; unique headings sitewide; titles ≤60 characters keep the live ranking term; H1 ≤66 characters and ≤3 lines; prices only in the cost FAQ; no named companies (generic labels in example UIs); every live content link kept + AI SEO and reinstatement links; non-home-service niches link small-business local SEO; cannabis has no ads or SMS.
  - **Checks:**
    - 58-page pairwise dupcheck: 0 issues. The set was the 30 drafts + seo-services-2 + home-services-2 + 26 niche marketing drafts; it started at 125 overlapping pairs.
    - GSC lost words 0; tsc/eslint clean.
  - **Header:** in /home2 review mode, the Local SEO menu opens the drafts, and the New Pages menu has a "Local SEO pages" group. /rd-preview/localseo is a temporary QA route.
- 26 Oct (owner review of the local SEO drafts):
  - **Two new sections on all 30 pages:**
    - Results ("what changes after you hire Zonic"): 4 loose-phase milestones, 4 outcome cards and the verified numbers band.
    - Compare ("Zonic vs a typical SEO company"): 6 niche-specific rows, hedged, no company named.
    - The 8 original writers added the copy; pages are now about 2,200–2,500 words.
  - **Hero UI replaced:**
    - The owner rejected the long annotated cards, the before/after loop and a house illustration.
    - New design: one clean interactive card with Google Maps / AI / growth tabs (`localseo/heroes/GrowthHero.tsx`). Tabs auto-advance, pause on hover and stop after a click; reduced motion holds still.
    - 4 Maps designs × 3 AI designs × 4 growth designs, with a unique combination per page and niche copy. The visual is 340px tall (372px on phone).
    - The old hero kinds, the growth strip, `hero.outcomes` and /rd-preview/localseo were removed.
  - **Checks:**
    - 58-page dupcheck 0. dupcheck now strips sr-only labels and exempts the grid digits.
    - GSC lost words 0; overflow 0 at 390/768/1024; all 30 drafts return 200; tsc/eslint clean.
- 26 Oct: hero H1 icon badge is now a single solid colour (owner: "dont add gradient in them just single color") on the 30 local SEO pages and seo-services-2, via a new optional `solid` prop on the shared `H1Badge`. Industry pages are unchanged.
- 26 Oct: **HVAC website design redesign draft** at `/services/hvac-website-design-2`: the first of the niche web design pages (owner: web design is the service to grow).
  - **Template:** `src/components/rd/nichewd/`.
  - **New hero layout:** a headline row (H1 left, lead and buttons right) above a wide interactive stage. The stage is an example HVAC site in a browser plus a phone. A Cooling/Heating switch restyles the site; numbered markers and a legend name what we build (call header, seasonal pages, online booking, mobile call bar).
  - **Sections (important only):** services, features, growth rows, 2–3-week process, Zonic vs a template site, reviews, pricing (locked), FAQ, free mockup form, banner.
  - **Keywords:** hvac website design 1.6K, hvac websites 1K, hvac web design 880, hvac web design agency 480 (GSC: agency 169 / services 163 impressions).
  - **Checks:** dupcheck 0 vs 11 related pages; GSC lost words 0; no overflow; tsc/eslint clean. Added to the /home2 review header.
- 26 Oct (owner review of hvac-website-design-2):
  - **Hero:** switched to the industry-page hero: centred copy with floating photo and growth cards from the hvac-web images.
  - **Example site:** the interactive season-switch site moved to a mid-page section.
  - **New sections:** an animated page map and results after launch.
  - **Animated components:** ranking climb, booking phone, AI answer typing, page map build, process progress line and results curve.
  - **Checks:** dupcheck 0 vs 12 pages; no overflow; H1 ≤3 lines; GSC lost words 0.
- 26 Oct (owner tweaks on hvac-website-design-2):
  - The hero growth cards have new text.
  - The results section ("What Changes After Your HVAC Site Goes Live") no longer animates.
- 26 Oct: **rollout to the other 25 niche web design pages** (owner: "build for all the niches under web design dropdown").
  - **Example site generalised:**
    - `HvacStage` became `nichewd/heroes/SiteStage.tsx`, driven by each page's `stage` data: modes, nav, buttons, legend and business name.
    - Five conversion widgets: `book` (calendar), `quote` (estimate request), `dispatch` (tow request), `case` (law case review), `valuation` (real estate).
    - The booking phone and AI answer cards now take their button, toast and business name from the same data, so nothing says "HVAC" on other pages.
  - **Palettes:** `nichewd/tones.ts` gives each of the 26 pages its own four-colour set. Every lead pair is unique, and no set repeats a local SEO set or the same niche's marketing pair.
  - **Brief:** `docs/niche-webdesign-brief.md`. It holds the rules, field guidance, checks and a per-niche appendix: GSC queries, Semrush volumes, live links, images, widget and modes, and the drafts to dupcheck against.
  - **HVAC fix:** its redesign FAQ question was reworded because it mirrored a question on web-design-2.
- 25 Oct (evening): **25 niche web design drafts built** (`/services/<niche>-website-design-2`, noindex, canonical to live) on `src/components/rd/nichewd`. One content file per niche plus a route.
  - **Writing:** 7 group agents wrote the content from `docs/niche-webdesign-brief.md`:
    - per-niche GSC and Semrush keywords plus web research;
    - fresh copy and all HVAC sections;
    - industry-style photo hero with new growth cards;
    - a mid-page example site with a niche widget: book, quote, dispatch (towing), case (law) or valuation (real estate);
    - static results section and trade-specific compare rows.
  - **Recovery:** a session limit and then a Mac shutdown interrupted the agents. The scratchpad check tools were rebuilt, and the final duplicate fixes were done by hand.
  - **Checks:**
    - cross-check 0 overlapping pairs across 133 pages: all -2 drafts, the live web design pages and the offer landers;
    - about 60 templated section headings rewritten (same heading with only the niche swapped). FAQ questions keep natural search-query wording;
    - GSC lost words 0; rule audit 0 (links kept, small-business link on dental/chiro/pediatric/law/real estate, no prices, 2–3 weeks, formType = slug, titles ≤60);
    - tsc/eslint clean.
  - **Review header:** in review mode, the web design dropdown opens all 26 drafts, and New Pages has a "Web design pages" group.
- 26 Oct: **local SEO pages hero background + mobile centring** (owner: "use bg of hero section on home2 … i dont want two color gradients … in mobile the hero section content should be centered align"). One change in `src/components/rd/localseo/LocalSeoTemplate.tsx`, so all 30 local SEO `-2` drafts get it.
  - **Background:** the hero now uses the exact /home2 hero background (two faint blue/violet radials on a near-white fade), the same on every page. The per-page palette blobs (`tone(0).soft` / `tone(1).soft` radials) are gone. The plus marks stay because /home2 has the same ones.
  - **Mobile:** below 992px (where the split hero stacks), the H1, lead, buttons and trust logos are centred. Desktop is unchanged.
  - **Checks:** tsc/eslint clean; all 30 drafts 200; no overflow at 390/768/1024; screenshots at 390/768/1440 on roofing, dental and packages.
- 26 Oct: **Travel and tourism redesign draft** at `/services/travel-and-tourism-marketing-agency-2` (noindex, canonical to live; the live page sits in the (landing) group with its own header and footer).
  - **Template:** the industry template, extended with an optional `hero.video`:
    - `VideoHero` + `HeroVideo` show a full-bleed video under one dark scrim, white copy, a solid H1 badge, the trust logos on a white plate and four glass outcome tiles;
    - the video starts after load (poster first), pauses off-screen, stays still for reduced motion, and has a pause button.
  - **Video:** the 25 MB `travel.mp4` was re-encoded with an AVFoundation script to `public/video/travel-hero-720.mp4` (4.0 MB) and `travel-hero-540.mp4` (1.7 MB, phones). Poster: `travel-tourism/travel-hero-poster.webp` (24 KB).
  - **Keywords:**
    - GSC has almost no non-brand data;
    - Semrush: travel and tourism marketing agency 880 (KD 18) is the primary; tourism marketing agency 1.3K, travel seo 1.9K, tourism marketing 1K, destination marketing agency 480, google ads for tour operators 210.
  - **Copy:**
    - new title "Travel and Tourism Marketing Agency | Travel SEO & Ads", new description, H1 "… Built for Direct Bookings", fresh content;
    - removed the live page's home-service cards, unverified percentages, stale 500+ and badges;
    - local SEO link → small-business.
  - **Design:**
    - new `tealRose` palette and travel icons;
    - owner follow-up: the growth section uses three new travel UIs (AI trip planner, Google Things to do, direct booking widget; `industry/travelUi.tsx`) on home2's grey `var(--panel)` via the new `growthPanel` option.
  - **Checks:** 0 overlaps vs 93 pages (all drafts + live); lost words 0; no overflow; tsc/eslint clean. Added to the review header.
- 26 Oct: **GO-LIVE: every redesigned page replaced its old version** (owner: "replacing all the old pages with new (remove the old pages codes)").
  - **Swap:**
    - all 153 `-2` drafts moved onto their live routes with noindex removed (canonicals already pointed at the live URLs);
    - /home2 became `/`, carrying the old homepage's SiteNavigationElement + Service JSON-LD, OG tags and `revalidate`;
    - blog base `/blog`;
    - travel moved from the (landing) group into (main);
    - the 13 `[marketingAgencySlug]` pages are now static, so the dynamic route was deleted;
    - `/rd-preview/*` deleted;
    - /pricing and /services/nyc/web-design are indexable and in the sitemap.
    - /services/dallas-fort-worth/local-seo-agency stays noindex (owner decision pending: its image carries unverified claims).
  - **Header/footer sitewide:**
    - RdHeader in the (main) layout and on the root 404;
    - review mode, the "New Pages" menu, HeaderSwitch and reviewDrafts.ts removed;
    - nav link data moved from the old Navbar to `rd/header/navLinks.tsx`;
    - Footer = the /home2 variant only (rounded, badges under contact, Free Website link);
    - pages with their own header (GBP optimization, white-label, GBP real estate) hide `.rh-root`.
  - **Old code removed:** 124 unreachable files found by an import-graph scan from every Next entry point and script, including the old Navbar, the IndustryMarketingPage template, the lead forms, TseoLanding, Travel header/form, state-page templates and data, pageData files, the DFW `_legacy` copies and 30 old stylesheets. Backup before the swap: `~/Desktop/zonic-media-backup-2026-10-26-preswap.tar.gz`.
  - **Same-day owner changes:**
    - /home2 contact section without the location tile;
    - industry H1 icons in one solid colour (incl. the HVAC thermostat);
    - web design pages:
      - a per-page outcome band replaced the sitewide 1,500+/900+/5.0/20+ numbers;
      - the example site is now a real website mockup (photo hero, nav, trade-specific form, why-us strip) on desktop and a matching responsive phone version, using trade photos from `/images/free-website/*`;
    - blog grid heading with its intro beside it;
    - Related Services as an inset rounded card above the footer;
    - Locations dropdown box without the office address;
    - travel hero H1 on two lines with the logos straight on the video (new `trust-white.png`).
  - **Checks:**
    - production build passes;
    - tsc clean;
    - 190 sitemap URLs: 200, indexable, self-canonical, new header + footer;
    - 0 duplicate runs across the 154 redesigned pages;
    - GSC lost words 0 (web design).
    - Pre-existing lint errors remain in admin/chat/analytics files (untouched).

## 26 October 2026 — SEO checkup fixes (before redesign launch)
Report: https://claude.ai/artifact/Mzta5sA4zF238r9rhzS8sY
- Keywords: ranking phrases put back on 29 pages (no new sections). 68 pages checked against Search Console queries: exact ranking phrases 185 (live) → 313 (new); no page has fewer than live.
- Schema: page-level ProfessionalService removed from 91 pages (layout keeps #local-business); reinstatement page duplicate FAQPage removed; white-label breadcrumb fixed; home Service named; /pricing gets breadcrumb + OfferCatalog; blog FAQ text whitespace normalized.
- Indexing: /services/dallas-fort-worth/local-seo-agency launched (indexable, in sitemap, linked from both DFW pages); sitemap lastmod regenerated; X-Robots-Tag noindex on /_next/static.
- Redirects: 14 visited 404 URLs + /blog/page/N → real pages (next.config.ts).
- Speed: lead form uses the site font (no Inter/Manrope downloads); experimental.inlineCss on. Mobile Lighthouse (throttled) 71–81 → 92–100; simulated mobile HVAC 80→85, home 73→82; desktop 99.
- Content: reinstatement 4.9 → 5.0, title 57 / description 147 chars; real-estate GBP page timeline aligned to 5–7 business days; DFW local SEO plan names → Foundation/Growth/Authority; long titles/descriptions trimmed; 2 blog titles distinct from H1; ~110 trade photos get alt text (src/components/rd/photoAlt.ts).
- Free-website landers (21): new trade-specific copy per page (design, offer facts, prices, form untouched). Shared text 51% → 15%; repeated headings 34 → 6 (locked plan names, form heading).
- Interlinking: travel page added to Industries hub; 4 landers + /pricing + DFW local SEO linked from page content.
- AI files: llms.txt now generated from the site by `node scripts/build-llms.mjs <base-url>` (all 253 pages, key facts, quick answers); pricing.md rewritten to Foundation/Growth/Authority; unverified stats removed from llms/*.md; llms-full.txt rebuilt.
- GSC: "Redirect error" validation started 26 Oct.
- 26 Oct: **Live chat redesign + accept flow** (owner request).
  - **Visitor widget:** moved to `src/components/rd/chat/` (ChatBot.jsx + LiveChatRoom.jsx + chat.css) in the new design; `src/app/components/ChatBot.jsx` re-exports it. Bot logic unchanged. The `.zoni-*` hook classes are kept for pages that hide the widget.
  - **Accept flow:**
    - visitor asks for an agent → `/api/chat/start-live` creates the chat as `waiting_agent` and emails the team via `next/server` `after()` (`src/backend/lib/liveChatEmail.ts`, with an "Open chat & accept" link to `/admindashboard/live-chat?c=<id>`);
    - the visitor sees an animated "Connecting you to our team…" card (timer, steps) and can type meanwhile;
    - an agent presses **Accept** (PATCH `{action:"accept"}`, atomic) → status active and a system message "You're now connected with <agent> from Zonic Media" over Ably (`metadata.agentJoined`);
    - the visitor sees "Connected to <agent>", with a 6s status poll as fallback;
    - admins can't reply before accepting (409).
  - **Admin panels:** `src/components/rd/admin-chat/`:
    - stats header (live / waiting / unread);
    - list with waiting chats first, live timers and inline Accept;
    - chat window with an Accept panel replacing the composer, quick replies and close/refresh;
    - visitor details column;
    - incoming-request toasts with sound;
    - email deep link.
    - Old admin chat components, `live-chat.css`, the old `LiveChatRoom.jsx` and `chatbot.css` were removed.
  - **Team inboxes:** `src/backend/lib/ownerMail.ts` now holds the CC list and the SMTP transport for both lead emails and chat alerts. **rachel@zonicllc.com added** (owner).
  - **Checks:** tsc clean, production build passes, widget screenshots at 1440/390.

## 27 October 2026 — mobile fixes (owner list)
- Flicker on scroll: pages ran 70–110 looping UI animations at once (many on width/height/background), so phones repainted constantly. New `src/components/rd/AnimationGate.tsx` (mounted in app/layout.tsx) pauses animations in off-screen sections; layout passes while scrolling dropped 255 → 10 (home) and 105 → 8 (Delaware SEO). Rounded clipping cards get `isolation: isolate` on ≤991px (Safari repaint flicker).
- Headings: globals.css forced `line-height: 1.34 !important` on h1–h3 under 768px; redesigned pages (.dk-root/.dm-root/.dw-root) now use 1.08 (h1) / 1.15 (h2). Location pages (`.loc-page` on DelawareLanding, LocationTemplate, HVAC Florida, all DFW pages) get smaller H1/H2 on phones.
- Blog: cards keep author + date on one line and titles at 2 lines (HomeBlogSlider, BlogGrid); slider arrows sit under the cards on phones/tablets (HomeBlogSlider, RelatedSlider). Post page: smaller H1 (≈3 lines max), meta on one line, tables fit the screen on ≤767px for every post (prose.css overrides the editor's inline widths).
- Closing gradient banner (13 pages): side spacing on phones, less padding (desktop 64px, phones 40/56px).
- Testimonial avatars capped at 44px on phones (AvatarPh).
- Pricing: trust points icon-on-top and centred on phones; add-ons are a swipe row on ≤767px; comparison has a stacked phone layout (plans side by side under each deliverable, sticky plan header).
- Images: 34 large PNG/JPGs used by the site converted to WebP (19.8 MB → 4.2 MB), code points to the .webp files; originals kept until the R9 clean-up.
- Checks: tsc clean, build OK, 253 pages at 390px with 0 sideways overflow.
- 27 Oct (later, owner): plan cards show the first 5 features on phones/tablets with a "View all N features" toggle (rest stays in the HTML); blog tables back to sideways scrolling on phones (fit-to-width removed); plan comparison opens full screen on ≤767px (fixed title bar, comparison scrolls); pricing trust points vertically centred on phones; phone H1 line-height 1.16 on redesigned pages.
