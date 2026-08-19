# Zonic Media — SEO / AEO Session Log (Aug 16–19, 2026)

Full record of the diagnosis and implementation work on zonicllc.com: why CTR and visibility dropped, why LLM/AI leads stopped, and every fix applied.

Live report artifact: https://claude.ai/code/artifact/a0e288eb-c2fa-414e-9ea9-3f036f9aa8d4

---

## 1. The original complaints

- CTR dropped (2% → 0.2%) — impressions there, clicks not
- Visibility "dropping" in Semrush
- Leads from ChatGPT stopped completely
- AI visibility stuck at ~30% in Semrush AI toolkit

## 2. Diagnosis (verified with Semrush API + Google Search Console via browser)

### Not a penalty — a denominator explosion
GSC, last 3 months vs previous 3 months:

| Metric | Previous 3 mo | Last 3 mo | Change |
|---|---|---|---|
| Clicks | 180 | 340 | **+89%** |
| Impressions | 9,140 | 173,000 | **+1,793%** |
| CTR | 2% | 0.2% | ÷10 (pure arithmetic) |
| Avg position | 15.5 | 28.7 | diluted by ~700 new low-position keywords |

The June–July bulk page publishing tripled the keyword footprint (495 → 812 keywords in 31 days), but ~95% of rankings sat at position 11–100 — impressions without clicks. CTR fell because the denominator exploded, not because performance declined.

### Where the clicks actually were
- "zonic media" brand query = 145 of 520 clicks (~28%)
- India: 253 clicks @ 7.7% CTR vs United States: 150 clicks from 158,687 impressions (**0.09% CTR**)
- Top non-brand queries: "ppc agency" 3,739 impr → 1 click; "chiropractor seo company" 997 impr → 1 click

### SERP-feature displacement
Of 620 July keywords: **63% trigger AI Overviews**, 56% Local Pack, 60% People Also Ask — clicks are absorbed above the organic results even at good positions.

### Why LLM leads stopped / AI visibility plateaued
Technical plumbing was already good (robots.txt allows all AI bots, llms.txt complete, content server-rendered, site health 95/100). The real cause: **Authority Score 8**, 119 referring domains, 71% nofollow, near-zero brand search — below the citation threshold as AI answer engines consolidated toward authority-weighted sources. llms.txt earns the first ~30 points; the rest is off-site brand presence.

### Technical defects found
1. **307 Temporary Redirect** non-www → www (Vercel domain-level, fired before Next.js's 308) — both hostnames indexed, clicks split (homepage 163 + 86), crawl budget wasted. *(User fixed to 308 in Vercel dashboard.)*
2. **Duplicate non-www sitemap** submitted in GSC since April. *(User deleted it.)*
3. **28 structured-data errors** — `Service.provider` was an empty `{"@type":"LocalBusiness","name":"Zonic Media"}` stub on all industry pages.
4. **49 orphaned sitemap pages + 21 single-link pages** — the /services hub linked only 7 of ~110 service pages.
5. **19 money pages "Discovered — currently not indexed"** (never crawled), including `/services/gmb-reinstatement-help` (flagship), `/services/gmb-optimization`, `/services/google-ads`, `/services/web-design`.
6. **GSC 404 bucket (46 URLs)**: 42 already redirected correctly (GSC hadn't revalidated); 3 real 404s (`/plumber-seo-services`, `/dentist-seo-services`, `/pest-seo-services`); 1 stray subdomain `email.support.zonicllc.com` (DNS-level).
7. 46 pages "Crawled/Discovered — not indexed": mostly stale old-site non-www URLs; 1 real refusal: `/services/electrical-website-design`.
8. Google generative-AI features report: 5.49K impressions across 128 pages, growing since June — Google's AI cites the site; clicks don't follow proportionally.

## 3. Implementation (commits d101c08, 1d1b9fc, + final trim — Aug 19)

### Schemas — sitewide
- All **59** `Service.provider` stubs replaced with full Organization node: `@id: https://www.zonicllc.com/#organization`, name, url, telephone, Dover postal address. Covers all `/services/industry/*`, all `*-website-design`, Philadelphia + Delaware city pages, homepage, travel/tourism landing.

### Internal-link mesh (orphan fix)
- New `ServicesDirectory` component on `/services` hub: complete grouped, server-rendered directory of ~110 service pages (GBP services / core / 26 industry SEO / 29 marketing agencies / 26 website design / 24 location pages).
- New `RelatedServices` component on **53 pages** (40 static + 13 dynamic marketing-agency pages via the shared template): each trade's Local SEO ↔ marketing-agency ↔ website-design trio cross-links + core GMB/services links.
- Footer widened: GMB Verification, GBP Optimization, Local SEO Philadelphia, Digital Marketing Delaware.

### Redirects
- Added the last 3 flat-URL 301s: `/plumber-seo-services`, `/dentist-seo-services`, `/pest-seo-services` → their industry pages. All 46 GSC 404 URLs now resolve (43 verified live end-to-end; 3 go live on deploy).

### Page optimization per "Page Wise Recommendations.xlsx"
- **/services/local-seo-for-home-services** (best page, pos 5.8): title → "Local SEO for Home Service Businesses | Zonic Media"; sheet meta description; H1 → "…That Drives More Calls & Jobs"; above-fold label → "Get More Calls & Booked Jobs From Local Search"; GEO direct-answer opening paragraph (entity-first, liftable by AI engines).
- **/services/gmb-verification-help**: title → "Google Business Profile Verification Help | Zonic Media"; sheet meta; H1 → "…That Gets Your Listing Verified"; compliance-safe timeline wording ("typical… final timing controlled by Google"). FAQ answers confirmed server-rendered with FAQPage schema.
- **/services/delaware/digital-marketing**: title → "Digital Marketing Agency in Delaware"; sheet meta (service mix + free audit); H1 highlight → "Drives More Qualified Leads".

### CTR titles aligned to ranked queries (fresh Semrush data, Aug 19)
- Car towing → "SEO for Towing & Roadside Assistance Companies" (covers "seo for roadside assistance" #8)
- Chiropractor → "Chiropractor SEO Company That Books Patients" (exact match of #11, 720-vol query)
- Real estate → "Real Estate SEO Company for Realtors & Agents"
- Philadelphia local-seo/sem/ppc titles were already well-aligned — untouched.

### Sitewide title/description audit (all 138 built pages)
- Every page has a unique, real title + description (verified from build output; "missing" flags were metadata via data files).
- Trimmed **22 over-length descriptions** (166–193 chars → ≤160): 7 industry SEO pages, 9 website-design pages, 4 marketing-agency pages (generated JSON), privacy/terms, home-inspector NC state page, services hub.
- Trimmed **3 over-length titles** (69 → ≤59 chars): home-inspector, pediatric, tree-service marketing.
- Final check: **zero pages** exceed 66-char titles or 165-char descriptions. Only intentional fallbacks remain on redirect-stub/admin pages (never indexed).

### Verification
- `tsc --noEmit` clean; `next build` passes (146/146 pages).
- Built HTML confirmed: new provider schema, directory, related-links strips, updated titles all rendering.

## 4. Still owned by the user (cannot be done from code)

1. **`git push`** to deploy all three commits.
2. **Delete `email.support.zonicllc.com` DNS record** at the domain/email provider.
3. **After deploy, in GSC:** URL Inspection → *Request indexing* for the 19 money pages (start: gmb-reinstatement-help, gmb-optimization, google-ads, web-design, philadelphia/digital-marketing); *Validate Fix* on the Not found (404) bucket; re-validate "Crawled — currently not indexed".
4. **Authority building (the root cause, ongoing):** get into "best GMB reinstatement service" roundups/listicles (what ChatGPT/Perplexity cite), genuine Reddit r/GoogleMyBusiness + Quora presence, digital PR pitching the 700+ reinstatement dataset, keep stacking Clutch/Trustpilot reviews. Target AS 8 → 20+.
5. **Pause bulk page publishing** until existing pages are indexed.
6. **KPI hygiene:** track US + non-brand + top-10-page clicks segmented in GSC — not blended CTR (which will stay "ugly" while impressions grow).
7. Review `/services/electrical-website-design` (Google crawled and declined it — differentiate or consolidate).

## 5. Expectations

- 2–4 weeks post-deploy: hostname consolidation completes, 404/redirect buckets validate clean, money pages get crawled/indexed, rich results become eligible on industry pages.
- Rankings beyond page 2 → page 1 and LLM citations are governed by the authority work in §4.4 — no on-site change substitutes for it.
