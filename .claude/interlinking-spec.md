# Zonic Media — Internal Linking Spec (updated August 2026)

Goal: every public page carries **at least 8 contextual internal links inside its body copy** (not nav, not footer, not buttons, not breadcrumbs), each linking a keyword phrase to the most relevant page. Target 8, cap at 10.

## Canonical link targets (keyword → URL)

Use ONLY these URLs as link targets. Never invent a URL.

### Core
| Keyword themes | URL |
|---|---|
| digital marketing agency, Zonic Media, marketing agency for small businesses | `/` |
| our services, digital marketing services, full-service marketing | `/services` |
| industries we serve, industry-specific marketing | `/industries` |
| about our team, US-based team | `/about` |
| contact us, get in touch, free consultation | `/contact-us` |
| marketing blog, guides, resources | `/blog` |

### Main services (highest priority targets)
| Keyword themes | URL |
|---|---|
| **Google Business Profile reinstatement, GBP suspended, suspended Google Business Profile, GMB reinstatement service** (TOP PRIORITY TARGET) | `/services/gmb-reinstatement-help` |
| Google Business Profile optimization, GBP optimization, GMB optimization | `/services/gmb-optimization` |
| Google Business Profile verification, verify your GBP, GMB verification | `/services/gmb-verification-help` |
| Google Ads management, PPC campaigns, pay-per-click advertising | `/services/google-ads` |
| web design, website design services, conversion-focused websites | `/services/web-design` |
| local SEO, local SEO services, local SEO for home services, Google Map Pack | `/services/local-seo-for-home-services` |
| Launchpad, all-in-one starter marketing package for new businesses | `/services/launchpad` |
| white label services, white label SEO/marketing for agencies | `/services/white-label-services` |
| dental website design, dental websites | `/services/dental-website-design` |
| HVAC local SEO, local SEO for HVAC companies | `/services/industry/local-seo-services-for-hvac` |
| travel and tourism marketing, tourism marketing agency | `/services/travel-and-tourism-marketing-agency` |
| Google Business Profile for real estate agents, realtor GBP services | `/services/google-business-profile-services-real-estate-agents` |
| non-profit marketing | `/services/non-profit-marketing-agency` |

### Standalone landing pages (use sparingly as targets; they are mainly link SOURCES)
- `/local-seo-google-business-optimization` — local SEO & Google Business optimization
- `/gmb-reinstatement-service-agency` — GMB reinstatement agency
- `/google-business-profile-verification-help-2026` — GBP verification help

### Industry marketing agency pages
`/services/{slug}` for: auto-repair-marketing-agency, chiropractic-marketing-agency, cleaning-company-marketing-agency, dental-marketing-agency, electrician-marketing-agency, garage-door-marketing-agency, landscaping-marketing-agency, law-firm-marketing-agency, moving-company-marketing-agency, painting-contractor-marketing-agency, pest-control-marketing-agency, real-estate-marketing-agency, roofing-marketing-agency.
Keyword: "{industry} marketing agency", "{industry} marketing", "marketing for {industry}".

### Trade marketing hubs + state pages
- `/services/home-inspector-marketing` (+ `/california`, `/florida`, `/georgia`, `/north-carolina`, `/texas`)
- `/services/plumbing-marketing-agency` (+ `/arizona`, `/california`, `/florida`, `/georgia`, `/illinois`, `/north-carolina`, `/texas`)
- `/services/hvac-marketing-agency` (+ same 7 states as plumbing)
Keyword: "home inspector marketing", "plumbing marketing", "HVAC marketing", "{trade} marketing in {State}".

### Location pages
- `/services/philadelphia/digital-marketing` — digital marketing agency in Philadelphia
- `/services/philadelphia/local-seo` — local SEO Philadelphia
- `/services/philadelphia/sem` — SEM Philadelphia
- `/services/philadelphia/ppc` — PPC Philadelphia
- `/services/delaware/digital-marketing` — digital marketing agency Delaware

### Industry SEO pages (`/services/industry/...`)
| Industry keyword | URL |
|---|---|
| real estate SEO services | `/services/industry/real-estate-seo-services` |
| chiropractor local SEO | `/services/industry/chiropractor-local-seo-services` |
| SEO for car towing / towing companies | `/services/industry/seo-services-for-car-towing` |
| local SEO for roofing companies | `/services/industry/local-seo-for-roofing-companies` |
| dental SEO services | `/services/industry/dental-seo-services` |
| SEO for pediatricians | `/services/industry/pediatricians` |
| SEO services for plumbers | `/services/industry/seo-services-for-plumber` |
| SEO for pest control companies | `/services/industry/seo-services-for-pest-control` |
| local SEO for law firms | `/services/industry/local-seo-for-law-firms` |
| local SEO for commercial cleaning | `/services/industry/local-seo-for-commercial-cleaning` |
| local SEO for residential cleaning | `/services/industry/local-seo-services-for-residential-cleaning` |

## Natural pairings (hub-and-spoke — prefer these)
- Industry SEO page ↔ matching agency page (e.g., `dental-seo-services` ↔ `dental-marketing-agency`; also `dental-website-design`).
- Roofing/pest/cleaning/law/real-estate/chiropractic: SEO page ↔ agency page both directions.
- Plumber SEO page ↔ `plumbing-marketing-agency`; HVAC pages ↔ `local-seo-services-for-hvac`.
- State pages → own hub + core services (GMB reinstatement/optimization, Google Ads, web design, local SEO).
- Every service page: link `gmb-reinstatement-help` where GBP suspension is mentioned (or can be naturally mentioned) — it is the #1 priority keyword target vs gmbgorilla.com.
- Real estate: `real-estate-seo-services` ↔ `real-estate-marketing-agency` ↔ `google-business-profile-services-real-estate-agents`.

## Rules (STRICT)

1. **At least 8 contextual in-body links per page.** Count links already present inside body copy (paragraphs, FAQ answers, feature card descriptions) toward the 8. Add links to reach at least 8 (10 max). Nav/footer/breadcrumb/CTA-button links DO NOT count.
2. **Placement:** only inside flowing text a reader actually reads — `<p>`, list items, FAQ answers, section descriptions. NEVER in H1. Sparingly in H2/H3 (avoid; prefer body text). Never inside existing `<Link>`/`<a>`, never in buttons or CTAs.
3. **Anchor text:** use a keyword phrase that already exists in the sentence whenever possible. If a page has no natural mention for a needed link, you may minimally extend/adjust ONE sentence so the phrase fits naturally — meaning must not change, tone must match. Anchors: 2–6 words, descriptive, varied (don't use the identical exact-match anchor for the same target across every page — mix e.g. "GBP reinstatement service" / "recover a suspended Google Business Profile" / "Google Business Profile reinstatement help").
4. **No self-links.** Never link a page to itself. Max **one** link per target URL per page. Spread the 7 links across different sections of the page — never 3+ in a single paragraph/section.
5. **Relevance first.** Only link where the sentence is genuinely about the target topic. If you can't find 7 highly relevant spots, extend sentences per rule 3 rather than forcing an irrelevant link.
6. **Markup:**
   - TSX pages: `<Link href="/services/...">anchor text</Link>` with `import Link from "next/link";` added if missing. Root-relative hrefs, no domain, no trailing slash.
   - JSON HTML strings (`industryMarketingPages.generated.json`): plain `<a href="/services/...">anchor</a>` inserted into the HTML string. Keep valid JSON escaping.
7. **Styling (CSS scoping rule is law):** in-body links must be visibly styled. Check the page's scoped CSS file for an existing content-anchor style. If none exists, add ONE rule to that page's CSS file scoped under the page wrapper class (e.g., `.gr-wrap .gr-inline-link { color: <page accent color>; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }`) and put that class on the links you add. Use the accent color already used on that page. NEVER add unscoped selectors.
8. **Do not touch:** shared components (`Navbar.tsx`, `Footer.tsx`, `SiteFloatingWidgets`, forms, widgets), metadata blocks, JSON-LD schema, headings' wording (except per rule 3 in body text), styling/layout/JSX structure beyond inserting the Link elements and the one CSS rule.
9. **Don't over-link:** never link the same phrase twice on a page; never stack links in consecutive sentences.

## Reporting
For every page report: page path → list of `anchor text → href` added (and how many pre-existing body links counted toward 7), plus every file modified.
