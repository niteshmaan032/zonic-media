# Zonic Media — SEO & AEO Audit (August 8, 2026)

Method: full production build (`next build`, clean, 146 routes), then parsed the **rendered HTML** of all 133 prerendered pages plus live HTTP checks against `next start`. Structured data was read from actual `<script type="application/ld+json">` tags in the server response — not from source — so JS-injected schema is correctly counted as absent.

Scope: technical + on-page + structured data + AEO. **Not measured:** live Core Web Vitals field data, backlink profile, Search Console/GA data — I have no access to those from the repo. Asset weights and caching config were checked as CWV proxies only.

Context: this is a re-audit 3 days after the Aug 5 pass documented in `SeoAeo.md`. 373 files changed in between (home/industry/web-design redesigns), so most findings are regressions or gaps introduced by that work.

> **Status: Findings 1, 2, 3 and the anchor-text failures in Finding 5 were fixed on Aug 8. See [Fixes applied](#fixes-applied-august-8-2026) at the end for the change list and before/after verification.**

---

## Executive summary

The site is in good technical health. Crawlability, canonicals, indexation, titles/descriptions, alt text, and content depth are all clean or near-clean. Two findings matter:

| # | Finding | Impact |
|---|---|---|
| **1** | **All JSON-LD is client-injected and absent from server HTML.** The homepage and 38 other pages ship *zero* structured data; every page is missing the global Organization / LocalBusiness / WebSite entity. | **Critical — AEO** |
| **2** | Sitemap `lastmod` is stale on 103 of 128 URLs after the redesign. | High |
| 3 | 19 state pages: 1 inbound link, no schema, absent from `llms.txt`. | Medium |
| 4 | 42 titles at 61–65 chars; 19 descriptions at 166–170. | Low–Medium |
| 5 | 33 pages with no `BreadcrumbList`; 5 anchor-text audit failures. | Low |

Finding #1 is the single biggest lever on the 29% → 80% AI-visibility goal and directly undercuts most of what the Aug 5 AEO pass shipped.

---

## Verified clean

These were checked and are genuinely fine — no action needed.

- **Route ↔ sitemap reconciliation:** 128 static routes, 129 sitemap URLs, 27 blog entries → 156 total. Zero missing, zero phantom. The 13 apparent "phantom" agency URLs are served by the `[marketingAgencySlug]` dynamic route; the 5 apparent "missing" routes are legacy redirect stubs, correctly excluded.
- **Redirect stubs verified over HTTP:** all 5 return `308` to their real targets. `/admindashboard` → `307` to login. No chains, no loops, no 404s.
- **Canonicals:** present on 100% of real pages, all self-referencing, **zero** route/canonical mismatches.
- **Indexation:** zero `noindex` on any real page. `robots.txt` correct — `/api/`, admin, thank-you, coming-soon disallowed; 12 AI crawlers explicitly allowed; sitemap declared.
- **H1:** exactly one per page across all 127 real pages.
- **Alt text:** zero `<img>` without an `alt` attribute, site-wide.
- **OG images:** every page ships an absolute `og:image`. Zero missing.
- **Internal links:** zero links to non-existent routes. Zero orphan pages (the homepage is linked from 127 pages).
- **Schema validity:** zero JSON-LD parse failures. Zero `Service` nodes carrying `aggregateRating` — the GSC critical error from July has not regressed.
- **Content depth:** median 3,832 words per page; thinnest real page is 1,762 (travel). No thin content.
- **Duplicates:** zero duplicate titles or descriptions among real pages.
- **Caching:** `/fonts` immutable/1yr, `/images` 30d + SWR, correctly set in `next.config.ts`.
- **Build:** compiles clean, all routes generate, `sitemap.xml` renders with lastmod.

---

## Finding 1 — JSON-LD never reaches the server HTML (Critical)

### Issue

36 files render their structured data through `next/script`:

```tsx
<Script id="organization-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
```

`next/script` defaults to `afterInteractive` — the tag is created by JavaScript **after hydration**. It never appears in the server response. It exists only inside the RSC flight payload, as an escaped string inside `self.__next_f.push(...)`.

### Evidence

Live HTTP against the production build:

```
GET /            → <script type="application/ld+json"> tags: 0
GET /            → '"@type":"Organization"' occurrences: 0
GET /services/roofing-website-design → 3   (this page uses a plain <script>, not next/script)
```

Pages using a raw `<script type="application/ld+json">` render server-side correctly. Pages using `next/script` do not. Both patterns exist in the codebase, which is why the coverage is uneven.

### Scope

**39 pages ship zero structured data in the server HTML**, including every commercially important cluster:

- `/` (homepage)
- All 3 GBP landing pages — `/gmb-reinstatement-service-agency`, `/google-business-profile-verification-help-2026`, `/local-seo-google-business-optimization`
- All 22 state + trade-hub pages (HVAC, plumbing, home-inspector)
- `/industries`, `/services/white-label-services`, `/services/non-profit-marketing-agency`, `/services/google-business-profile-services-real-estate-agents`
- All 3 legal pages

**Separately, on all 127 pages**, the global entity block from `src/app/layout.tsx` is absent from server HTML: `Organization`, `LocalBusiness`/`ProfessionalService` (NAP, `sameAs`, `knowsAbout`, `aggregateRating` 5.0/21), and `WebSite`.

The Aug 5 pass added `aggregateRating`, unified the rating to 5.0/21, and added `WebSite` schema — none of that is visible to a non-rendering crawler.

### Why this matters most for AEO

Google renders JavaScript and will usually pick this up on a second pass. **AI crawlers largely do not.** GPTBot, PerplexityBot, ClaudeBot and CCBot fetch raw HTML. `robots.ts` explicitly invites all 12 of them — and then serves them pages with no entity data, no rating, no service graph, and on 39 pages no schema at all. That is the mechanism behind a 29% AI-visibility score despite good content.

### Fix

Replace `next/script` with a plain `<script>` for JSON-LD. React renders it into the server HTML:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
/>
```

No behavior change, no client cost — JSON-LD is inert data, it was never a script that needed a loading strategy. Start with `src/app/layout.tsx` (fixes the global entity on all 127 pages in one edit), then the 35 page files. Full list:

```
src/app/layout.tsx                                    ← do this first
src/app/(main)/page.tsx
src/app/(main)/blog/page.tsx
src/app/(main)/blog/[slug]/page.tsx
src/app/(main)/gmb-reinstatement-service-agency/page.tsx
src/app/(main)/google-business-profile-verification-help-2026/page.tsx
src/app/(main)/local-seo-google-business-optimization/page.tsx
src/app/(main)/industries/page.tsx
src/app/(main)/services/gmb-optimization/page.tsx
src/app/(main)/services/gmb-reinstatement-help/page.tsx
src/app/(main)/services/gmb-verification-help/page.tsx
src/app/(main)/services/google-business-profile-services-real-estate-agents/page.tsx
src/app/(main)/services/home-inspector-marketing/page.tsx
src/app/(main)/services/home-inspector-marketing/StatePage.tsx      ← fixes 5 states
src/app/(main)/services/hvac-marketing-agency/page.tsx
src/app/(main)/services/hvac-marketing-agency/StatePage.tsx         ← fixes 7 states
src/app/(main)/services/plumbing-marketing-agency/page.tsx
src/app/(main)/services/plumbing-marketing-agency/StatePage.tsx     ← fixes 7 states
src/app/(main)/services/launchpad/page.tsx
src/app/(main)/services/local-seo-for-home-services/page.tsx
src/app/(main)/services/non-profit-marketing-agency/page.tsx
src/app/(main)/services/white-label-services/page.tsx
src/app/(main)/services/industry/*/page.tsx          (11 files)
src/app/(main)/services/industry/*/{Chiro,Commercial,Law,Residential,CarTow}*Page.tsx  (5 dead files — skip)
```

Verify after the change with:

```bash
npx next build && curl -s http://localhost:3111/ | grep -c '<script type="application/ld+json"'
```

Expect ≥ 4 on the homepage, ≥ 1 on every page.

---

## Finding 2 — Sitemap `lastmod` stale on 103 of 128 URLs (High)

The Aug 5–8 redesign touched 373 files but `scripts/generate-sitemap-lastmod.mjs` was not re-run. 103 URLs advertise an older date than their actual last change — including `/`, `/industries`, `/about`, all 26 industry-SEO pages (all showing Aug 5, actually Aug 8), and all 26 website-design pages (Aug 5 → Aug 6).

Telling Google "unchanged" about pages that were just rebuilt suppresses recrawl of exactly the work you want reassessed.

**Status: fixed during this audit.** I ran the generator; `src/data/sitemapLastmod.generated.json` is modified in your working tree and needs committing. Nothing else was changed.

Root cause is process, not code — step 1 of the `SeoAeo.md` playbook. Worth a pre-commit hook or a CI check rather than relying on memory.

---

## Finding 3 — The 19 state pages are structurally isolated (Medium)

Every HVAC, plumbing, and home-inspector state page has:

- **exactly 1 inbound internal link** (from its own hub) — the lowest in the site; every other page has 100+
- **zero structured data** in server HTML (part of Finding 1 — the shared `StatePage.tsx` components)
- **no entry in `llms.txt`** — all 19 missing
- no `BreadcrumbList`

These are the deepest pages in the architecture and currently get the least crawl equity and no machine-readable context. Because they share three `StatePage.tsx` components, fixing schema is 3 edits for 19 pages.

Recommended: add sibling-state cross-links (each state page links to 2–3 neighbouring states), add the 19 URLs to `llms.txt`, and add `Service` + `BreadcrumbList` via the shared components.

---

## Finding 4 — Title and description length drift (Low–Medium)

**42 titles render at 61–65 chars** (target ≤ 60). Worst offenders at 65: `/services/gmb-reinstatement-help`, `/services/home-inspector-marketing`, `/services/pediatric-marketing-agency`, `/services/tree-service-marketing-agency`.

The mechanism is the `%s | Zonic Media` template in `layout.tsx` silently adding 14 chars — the same root cause fixed for 8 pages on Aug 5 that has re-appeared on 42 pages after the redesign. Most are 1–5 chars over, so truncation risk is real but modest.

Two options: trim the 42 source titles, or use `title: { absolute: ... }` on pages where the brand suffix isn't earning its 14 characters. The dynamic agency route already does the latter.

**19 descriptions at 166–170 chars** (target 135–162): `/services/industry/dental-seo-services`, `/services/law-firm-marketing-agency`, `/services/residential-cleaning-website-design` and 16 others. Marginal — these will clip a few words in SERPs.

---

## Finding 5 — Schema coverage gaps and anchor-text failures (Low)

Coverage across 127 real pages, as rendered:

| Schema | Pages | Gap |
|---|---|---|
| `BreadcrumbList` | 94 | 33 missing |
| `FAQPage` | 88 | — |
| `Service` | 66 | — |
| `Organization` / `LocalBusiness` / `WebSite` | **0** | see Finding 1 |

The 33 without `BreadcrumbList` are the same set as Finding 1 — fixing the `next/script` pattern resolves most of it.

`node scripts/audit-internal-links.mjs` reports **5 issues**, all single-word anchors on one page (spec requires 2–6 words):

```
src/app/(main)/services/local-seo-for-home-services/page.tsx
  :544 "Electricians"   :553 "Plumbers"     :701 "Chiropractors"
  :710 "Dentists"       :719 "Pediatricians"
```

Otherwise the interlinking program is holding: 94 sources, 778 contextual links, 110 routes represented.

The 3 GBP landing pages have only 2–3 inbound links each. That asymmetry is deliberate per the cannibalization split, but 2 inbound links for a priority page is thin even under that policy — worth raising to 5–6 from non-competing pages.

---

## Finding 6 — Asset hygiene (Low, not user-facing)

`public/images` is 159 MB across 396 files. **223 files / 132 MB are referenced by no built page and no CSS** — mostly `ChatGPT Image May …png` originals (1.5–2.2 MB each) belonging to the 5 dead legacy `*Page.tsx` components, plus `agency.webp` (12.6 MB) and `shopify.webp` (3.8 MB).

This is repo and deploy bloat, **not** a page-speed problem — those bytes never reach a browser.

Genuinely shipped large sources are few, and all pass through `next/image` (so users receive resized WebP/AVIF, not the original):

| Source | Pages | Delivery |
|---|---|---|
| `contact-section.jpg` 2,148 KB | 1 | `<Image>` optimized |
| `launchpad-2.jpg` 1,020 KB | 1 | `<Image>` optimized |
| `email.png` 998 KB | 1 | `<Image>` optimized |

Recompressing those three sources is still worthwhile (the optimizer re-encodes on every cache miss), but no page is shipping multi-MB images to users.

---

## Prioritized action plan

**1 — Critical, do first**
- Convert JSON-LD from `next/script` to plain `<script>`, starting with `src/app/layout.tsx`. One file restores the global Organization/LocalBusiness/WebSite entity — including the 5.0/21 rating — on all 127 pages. The remaining 35 files restore page-level schema on the 39 pages that currently have none.

**2 — High**
- Commit the regenerated `sitemapLastmod.generated.json`.
- Add a pre-commit hook or CI check so `lastmod` can't drift again.

**3 — Medium**
- State pages: schema via the 3 shared `StatePage.tsx` files, sibling cross-links, and the 19 URLs into `llms.txt`.
- Rebuild `llms-full.txt` (`node scripts/build-llms-full.mjs`) — `llms.txt` has not been touched since Aug 5 despite the redesign.

**4 — Quick wins**
- Fix the 5 single-word anchors in `local-seo-for-home-services/page.tsx` → audit returns to zero issues.
- Trim the 4 titles at 65 chars and the 3 descriptions at 170.
- Raise inbound links to the 3 GBP landing pages from 2–3 to 5–6.

**5 — Longer term**
- Delete the 5 dead legacy `*Page.tsx` components and their 132 MB of orphaned images.
- Re-run the 42 over-length titles as a batch once a policy on the `| Zonic Media` suffix is settled.
- Backlinks remain the competitive gap vs. `greenlanemarketing.com` — unchanged from Aug 5, and no on-page work closes it.

---

## Re-verification commands

```bash
npx next build
npx next start -p 3111
curl -s http://localhost:3111/ | grep -o '<script[^>]*application/ld+json' | wc -l   # expect >= 4
node scripts/audit-internal-links.mjs                                                # expect 0 issues
node scripts/generate-sitemap-lastmod.mjs && git diff --stat                         # expect no diff
```

Note the grep: React renders `id` before `type`, so a literal `'<script type="application/ld+json"'` match returns 0 even when the tag is present. Match the tag opening loosely.

---

# Fixes applied (August 8, 2026)

25 files changed. `npx tsc --noEmit` clean, `npx next build` clean (128 routes), `audit-internal-links.mjs` at zero issues.

## Fix 1 — JSON-LD now server-rendered (Finding 1)

Converted 68 JSON-LD tags across 22 files from `next/script` to a plain `<script>`:

```diff
- <Script
+ <script
    id="organization-schema"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
  />
```

Applied by codemod that only rewrote self-closing `<Script>` tags containing `type="application/ld+json"`, then dropped the now-unused `next/script` import from 21 files. **`src/app/layout.tsx` deliberately keeps its import** — the Clutch widget and GHL tracking scripts are real scripts and remain `strategy="lazyOnload"`, verified still present after the change.

Files changed:

```
src/app/layout.tsx                            (3 tags, import kept)
src/app/(main)/page.tsx                       (4)
src/app/(main)/blog/page.tsx                  (4)
src/app/(main)/blog/[slug]/page.tsx           (3)
src/app/(main)/industries/page.tsx            (3)
src/app/(main)/gmb-reinstatement-service-agency/page.tsx              (3)
src/app/(main)/google-business-profile-verification-help-2026/page.tsx (4)
src/app/(main)/local-seo-google-business-optimization/page.tsx        (3)
src/app/(main)/services/gmb-optimization/page.tsx                     (1)
src/app/(main)/services/gmb-reinstatement-help/page.tsx               (1)
src/app/(main)/services/gmb-verification-help/page.tsx                (1)
src/app/(main)/services/launchpad/page.tsx                            (1)
src/app/(main)/services/local-seo-for-home-services/page.tsx          (1)
src/app/(main)/services/non-profit-marketing-agency/page.tsx          (4)
src/app/(main)/services/white-label-services/page.tsx                 (4)
src/app/(main)/services/google-business-profile-services-real-estate-agents/page.tsx (4)
src/app/(main)/services/home-inspector-marketing/page.tsx             (4)
src/app/(main)/services/home-inspector-marketing/StatePage.tsx        (4)  → 5 state pages
src/app/(main)/services/hvac-marketing-agency/page.tsx                (4)
src/app/(main)/services/hvac-marketing-agency/StatePage.tsx           (4)  → 7 state pages
src/app/(main)/services/plumbing-marketing-agency/page.tsx            (4)
src/app/(main)/services/plumbing-marketing-agency/StatePage.tsx       (4)  → 7 state pages
```

The 5 dead legacy `*Page.tsx` components were deliberately skipped — they render nothing.

### Result, measured from rendered HTML

| Schema type | Before | After |
|---|---:|---:|
| `Organization` | **0** | **127** |
| `LocalBusiness` / `ProfessionalService` | **0** | **127** |
| `WebSite` | **0** | **128** |
| `BreadcrumbList` | 94 | **123** |
| `FAQPage` | 88 | **123** |
| `Service` | 66 | **95** |
| **Pages with zero structured data** | **39** | **0** |

The only pages still without schema are the 5 legacy redirect stubs (which serve a 308 and are never indexed) and `_global-error`.

Live HTTP confirmation:

```
/                                      7 ld+json tags   (was 0)
/gmb-reinstatement-service-agency      6                (was 0)
/services/hvac-marketing-agency/texas  7                (was 0)
/services/white-label-services         7                (was 0)

homepage: "ratingValue":"5.0","reviewCount":"21"        (was absent)
Clutch widget script still lazyOnload:  present
```

## Fix 2 — Sitemap lastmod (Finding 2)

Ran `node scripts/generate-sitemap-lastmod.mjs`. 103 of 128 URLs corrected. `src/data/sitemapLastmod.generated.json` modified — **needs committing**.

## Fix 3 — State pages into `llms.txt` (Finding 3)

All 19 state page URLs were previously only referenced in prose ("With state pages for AZ, CA, FL…") with no URLs, so an LLM could not discover them. Added a dedicated `## State Pages` section listing all 19 explicitly, grouped by trade, and removed the now-redundant prose entry from `## Locations`.

Regenerated `public/llms-full.txt` (`node scripts/build-llms-full.mjs`) — 17,921-byte index + 6 sections.

Still outstanding from Finding 3: the state pages have only 1 inbound internal link each. Schema and `llms.txt` discovery are fixed; sibling cross-linking is not.

## Fix 4 — Anchor text (Finding 5)

Five single-word anchors in `local-seo-for-home-services/page.tsx` expanded to match the sibling style already used in that directory list ("HVAC Companies", "Roofing Contractors"):

| Before | After |
|---|---|
| Electricians | Electrical Contractors |
| Plumbers | Plumbing Companies |
| Chiropractors | Chiropractic Clinics |
| Dentists | Dental Practices |
| Pediatricians | Pediatric Practices |

`audit-internal-links.mjs`: **5 issues → 0**. 94 sources, 778 contextual links, 110 routes represented.

## Deliberately not done

- **42 titles at 61–65 chars / 19 descriptions at 166–170.** Google truncates by pixel width, not character count; 1–5 chars over is inside the noise, and meta descriptions are not a ranking factor. Low value against the churn of editing 61 files.
- **132 MB of unreferenced images.** Repo hygiene, zero SEO impact — those bytes never reach a browser.
- **State page sibling cross-linking.** Worth doing; not done in this pass.

## Expectation setting

These fixes make the site **machine-readable**, which is a precondition for AI citation, not a driver of rankings. Structured data is not a Google ranking factor — expect little to no direct organic traffic change. The AEO effect should be real, because a hard blocker was removed, but reaching the 80% AI-visibility target also needs third-party corroboration (directories, review sites, mentions).

The traffic bottleneck is unchanged and remains what `SeoAeo.md` already identified: **backlinks**, plus the KD 1–7 keywords already mapped in §2 of that document (`gmb optimization service` KD 1, `electrician marketing agency` KD 7, `gbp reinstatement` KD 7, `tree service website design` KD 4).
