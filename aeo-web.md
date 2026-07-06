# AEO + SEO Optimization — Complete Session Record (aeo-web)

**Date:** July 6, 2026
**Site:** https://www.zonicllc.com (Zonic Media — Next.js 16 App Router)
**Committed in:** `fdb3f8d` — "aeo of website and about page"

---

## 1. The Task

1. Rank the website on AI models (AEO — Answer Engine Optimization for ChatGPT, Claude, Perplexity, Gemini, AI Overviews).
2. Update content with latest keywords for Google organic rankings, **without touching styling** on any page.
3. Main ranking target: `/services/gmb-reinstatement-help` for "GMB reinstatement service".
4. Beat competitor **gmbgorilla.com**, which ranks #1 for GMB reinstatement service.

---

## 2. Competitor Research (gmbgorilla.com)

Why they rank #1:

- **Exact-match title:** "GMB Reinstatement Service - 99% Success Rate - GMB Gorilla"
- **H1:** "Get Your Suspended Google Business Profile Reinstated — Fast."
- **Trust numbers:** 2,900+ reinstatements, 99% success rate, 500+ brands, 5+ years, 4.9 on Google
- **Tiered pricing:** Reinstatement Review $200 / GBP Reinstatement Service $500 / Bulk (10+ profiles) custom
- **Guarantee:** "If we can't help, we'll tell you exactly why — before you pay anything."
- **Supporting blog content** funneling links to the service page (e.g. "How do I reinstate my Google My Business profile?")
- Heavy keyword density: "Google Business Profile/GBP" 40+, "reinstatement" 35+, "suspended/suspension" 20+

**Zonic's counter-differentiators used in copy:** 700+ profiles reinstated & verified, 5–7 business day average, No Fix No Charge on the reinstatement fee, free suspension audit, 4.9 rating.

Key keyword set targeted: `GMB reinstatement service`, `Google Business Profile reinstatement`, `suspended Google Business Profile`, `GBP suspension appeal`, `fix suspended GMB listing`, `Google My Business reinstatement`, `reinstate Google Business Profile`, `soft suspension`, `hard suspension`.

---

## 3. Changes Made

### A. Main page — `src/app/(main)/services/gmb-reinstatement-help/page.tsx`

- **Title changed:** "GBP Suspension Recovery Experts" → `GMB Reinstatement Service | Fix Suspended Google Business Profile` (title.absolute, exact-match keyword first)
- **Meta description rewritten** with proof points (5–7 days, 700+ reinstated, No Fix No Charge)
- **Added `keywords` array** (10 phrases), **openGraph**, and **twitter** cards
- **Added `Service` JSON-LD schema** (`#service`): alternateNames (GBP Reinstatement Service, Google My Business Reinstatement, GBP Suspension Recovery), serviceType, provider → `#organization`, areaServed US, free-audit Offer (price 0), aggregateRating 4.9/127
- **4 new AEO-targeted FAQs** added to the FAQ data array (auto-feeds visible FAQ + FAQPage schema):
  - "What is a GMB reinstatement service?"
  - "How much does a GMB reinstatement service cost?" (positions No Fix No Charge vs competitors' $500 upfront)
  - "Can I just create a new Google Business Profile instead of reinstating the suspended one?"
  - "What is the difference between a soft suspension and a hard suspension?"
- **Copy keyword-enriched (text only):** H1 accent → "Get Reinstated Fast.", lead paragraph now says "GMB reinstatement service" + "reinstatement appeal", about-lead and featured-answer blocks mention "GMB reinstatement service", FAQ heading → "GMB reinstatement service — everything you need to know"

### B. AEO / technical files

- **`src/app/robots.ts`:** Added explicit allow rule for AI crawlers — GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot, meta-externalagent. Removed broken `/terms-conditions` disallow (route is actually `/legal/terms-conditions` and is meant to be indexed).
- **`src/app/sitemap.ts`:**
  - Added missing pages: `/services/white-label-services`, `/services/google-business-profile-services-real-estate-agents`
  - Bumped `/services/gmb-reinstatement-help` → priority **0.9 / weekly** (was 0.8/monthly)
  - (User later added `/industries` entry — verified valid, page exists and builds)
- **`public/llms.txt`:** Rewritten for AI citation — top summary now leads with GMB reinstatement as flagship service and citable facts (700+, 5–7 days, No Fix No Charge, 4.9). New "Google Business Profile Services (flagship)" section listing reinstatement first. Added white-label, real-estate agents, plumbing/HVAC hubs, landing pages, and later `/industries`.

### C. Site-wide metadata pass (~35 marketing pages, metadata objects only — zero JSX/styling changes)

Every marketing page received a service-matched `keywords` array (8–10 phrases) and openGraph where missing. Weak/overlong titles and descriptions rewritten (keyword-first, ≤65 char titles, 140–160 char descriptions). Notable title changes:

| Page | New title |
|---|---|
| gmb-optimization | GMB Optimization Service \| Rank in the Google Map Pack |
| white-label-services | White-Label Services for Agencies \| GBP, SEO & Web Design |
| contact-us | Contact Us \| Digital Marketing Agency |
| web-design | Web Design Services for Small Business |
| google-ads | Google Ads Management Services \| PPC Agency |
| local-seo-for-home-services | Local SEO for Home Services \| More Calls & Jobs |
| local-seo-services-for-hvac | Local SEO Services for HVAC Companies \| Zonic Media |
| launchpad | Business Launch Services \| Start Your Business |
| delaware/digital-marketing | Digital Marketing Agency Delaware \| SEO & PPC |
| philadelphia/digital-marketing | Digital Marketing Agency Philadelphia \| SEO & Ads |
| philadelphia/local-seo | Local SEO Philadelphia \| Google Maps Rankings |
| philadelphia/sem | SEM Agency Philadelphia \| Search Engine Marketing |
| philadelphia/ppc | PPC Agency Philadelphia \| Google Ads Management |
| real-estate-seo-services | Real Estate SEO Services for Realtors & Brokers |
| chiropractor-local-seo-services | Chiropractor Local SEO Services & Marketing |
| local-seo-for-roofing-companies | Local SEO for Roofing Companies \| Roofer Leads |
| pediatricians | Marketing for Pediatricians \| Pediatric SEO |
| seo-services-for-pest-control | SEO Services for Pest Control Companies |
| local-seo-for-law-firms | Local SEO for Law Firms \| Attorney Marketing |
| local-seo-for-commercial-cleaning | Local SEO for Commercial Cleaning \| Janitorial SEO |
| local-seo-services-for-residential-cleaning | Residential Cleaning SEO \| House Cleaning Leads |
| plumbing-marketing-agency | Plumbing Marketing Agency for Contractors \| Zonic Media |
| hvac-marketing-agency | HVAC Marketing Agency for Contractors \| Zonic Media |

Left unchanged (already keyword-strong): home, about, services index, dental, plumber SEO, car towing, home-inspector hub, gmb-verification-help, landing pages, real-estate agents page. State subpages (stateContent.ts) untouched.

**Body content (visible text) was rewritten only on the GMB reinstatement page** — bulk body edits elsewhere were skipped deliberately to guarantee zero styling breakage.

---

## 4. Verification (pre-launch)

- `npx tsc --noEmit` — passes clean
- `npm run build` (production) — ✅ compiled successfully, **all 91 pages generated**, robots.txt + sitemap.xml routes build, no errors or warnings on any marketing page
- New `/industries` page verified: has title, description, canonical, openGraph; sitemap entry valid
- **Verdict: cleared to push and deploy**

---

## 5. Post-Deploy Checklist (manual — Google Search Console)

1. **Sitemaps → resubmit `sitemap.xml`**
2. **URL Inspection → Request Indexing** for:
   - `/services/gmb-reinstatement-help`
   - `/services/white-label-services`
   - `/services/google-business-profile-services-real-estate-agents`
   - `/industries`

## 6. Recommended Next Steps (not yet done)

1. **Blog cluster:** 2–3 posts ("How to reinstate a suspended Google Business Profile (2026)", "Soft vs hard GBP suspension", "Why Google suspended your Business Profile") internally linked to the reinstatement page — this is how GMB Gorilla builds topical authority.
2. **Pricing/tier comparison section** on the reinstatement page (competitor's converts well) — skipped because it's a design change.
3. Monitor rankings for "GMB reinstatement service" / "Google Business Profile reinstatement" and iterate.
4. Backlinks/citations for the reinstatement page (directories, local SEO communities, HARO).

---

## Rules followed throughout

- No JSX structure, classNames, imports, component structure, or CSS touched anywhere — text, metadata, and schema data only.
- JSON-LD kept consistent with the site-wide hard-coded aggregateRating (4.9 / 127 reviews in `src/shared/seoSchemas.ts`).
