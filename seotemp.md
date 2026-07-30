# Local SEO Template Page — Build Session Log (July 27–28, 2026)

Session record for the creation and iteration of the local SEO master template page.
This template is the approved layout for revamping all local SEO service pages.

## Files

| File | Purpose |
|---|---|
| `src/app/(main)/services/template-seo/page.tsx` | Template page (noindex, NOT in sitemap.ts) |
| `src/app/style/templateSeo.css` | All styles, scoped under `.tseo-page` |

Live preview: `http://localhost:3000/services/template-seo` (`npm run dev`)

## Design system

- Premium light SaaS look, designed with the ui-ux-pro-max skill guidance.
- Palette: ink `#0a1b3d`, accent `#2567e8` (matches global `--color8`), accent-dark `#1c4fc4`,
  accent-soft `#e8effe`, gold `#fdc115` (site primary, stars), green `#34a852`,
  body text `#47546e`, surface tint `#f4f7fe`, divider `#e2e9f8`.
- Pill eyebrow chips with dot, 18–24px radius cards, `--tseo-inset` side padding
  (100/40/30/40/20px by breakpoint — same pattern as the roofing/hvac family).
- **No box-shadows anywhere** (user rule). Hovers = translateY lift + blue border accent.
- Section rhythm: 52px desktop / 44px tablet / 36px mobile (halved from 90px to kill
  double-gap between adjacent sections).
- **Zero images** — every visual is a CSS-built UI mockup. All mockups show POSITIVE
  results only (user rule).
- Global site `<Footer />` (not a custom footer). Navbar comes from the (main) layout.

## Page structure (top → bottom)

1. **Hero** — light gradient + grid backdrop. Left: eyebrow, 6-word H1
   ("Local SEO that *grows your business*", gradient highlight), proof-led sub,
   Clutch/Yelp/Trustpilot badges ABOVE the CTAs, primary CTA + phone ghost CTA,
   4.9/5 stars line. Right (top-aligned with left content, max-width 500px, centered):
   **animated Before/After dashboard** — 9s CSS loop crossfading two states with a
   sliding Before/After segmented toggle:
   - Before: competitors #1–#3, "Your Business #12" (red), 42 calls, "Page 2" pill,
     low gray bars, foot #12 / 4.1★ / −8%
   - After: "Your Business #1" highlighted, 4.9 · 212 reviews strip, 312 calls,
     +214% green pill, rising blue bars, foot #1 / 4.9★ / +86%
   - `prefers-reduced-motion`: settles on After state.
   Below the card: two static info boxes in a row ("#1 in the Map Pack",
   "+38 reviews this quarter") — moved out of floating/overlay position on request.
   Bottom: icon stat row (gradient numbers, hairline separators): 50+ / 4.9/5 / 60–90 days / 100% in-house.
2. **Problem/solution** ("The Local Growth Opportunity" / "We make sure they find you") —
   left: **GBP profile mockup** on dotted backdrop (avatar, verified name, 4.9 stars,
   Call/Directions/Website pills, green growth rows +180% / +214% / +3×) with navy
   "Trusted by 50+ local businesses" chip hanging off the bottom.
3. **What's Included** — 6 deliverable cards (GBP, keywords, citations, reviews,
   on-page/content, reporting). Light section.
4. **Dark navy band** ("We put you in the top three — and keep you there") — copy +
   **map-pack mockup**: mini map header (grid gradient, 2 gray pins + pulsing blue
   "you" pin), overlapping search bar, 3 GBP-style listing rows with photo thumbs,
   "That's you" badge, Call/Directions action pills.
5. **How It Works — bento grid** (chosen over card grid → timeline → progress panel):
   - 01 featured large (soft gradient, "Where clients typically land after 90 days"
     bars 92/96/84%)
   - 02 white card
   - 03 dark navy card + chips + **"Start Growing Today" CTA at bottom**
   - 04 wide card, copy left / chips + arrow link right
   Each card: number badge + phase tag (Week 1 / Weeks 2–4 / Every month / Ongoing).
6. **Real Results** — 3 case metric cards (+214% plumbing calls, Top 3 dental, 3.2× HVAC).
7. **The Difference** — 3-column comparison: typical agency (crosses) / Zonic (dark,
   gold checks) / **Local Visibility Scorecard** (before→after progress bars 34→92,
   41→96, 22→78, 18→84 with legend).
8. **Why Zonic** — 3 cards + **blue gradient audit banner**: copy + 4 gold checks +
   CTA left, **92/100 green "Excellent" audit scorecard** right (A+ grade / 100%
   accurate / Ahead of top 3 — all positive per user rule).
9. **Reviews** — ClutchWidget widgetType 12, primaryColor #2567e8, full container width.
10. **Marquee** — blue keyword ticker.
11. **Wherever You Work** — gradient bg section; **coverage board** (dotted field,
    6 city pins with green win tags, navy "50+ businesses" center badge), industry
    chips, CTA.
12. **FAQs** — GmbFaqs accordion + FAQPage JSON-LD; confident answers (guarantee FAQ
    leads with track record).
13. **Grow Further** — 3 internal-link cards (GBP optimization, web design, Google Ads).
14. **Lead form** — ServiceLeadForm (`formType="local-seo"`, defaultServices
    `["Local SEO"]` — on the API whitelist), max-width 500px right-aligned, shadow
    removed; contact cards aside.
15. **Global `<Footer />`**.

## SEO layer

- Metadata: title "Local SEO Services That Grow Local Businesses", positive
  growth-framed description, keywords array, canonical, og:image included
  (og-image gotcha), **`robots: { index: false, follow: false }` — TEMPLATE ONLY,
  remove when cloning**.
- JSON-LD: breadcrumb + Service (NO aggregateRating — GSC gotcha) + FAQPage.
- Copy tone: confidence/growth-framed everywhere (seo-audit positivity pass) —
  no fear/problem framing.

## Iteration history (user decisions)

1. Initial build: 14 sections, image skeletons, custom footer.
2. Round 2: more skeletons, full-width Clutch widget, nationwide gradient, narrow
   form + no form shadow, all shadows removed, results + tracking mock sections
   added, band stats → paragraph.
3. Round 3: photo band removed, scorecard added as 3rd comparison box, tracking
   mocks stretched to content height, map-pack mockup redesigned (map header +
   thumbs + action pills).
4. Round 4: hero stats redesigned (icon + gradient numbers row), audit banner
   redesigned (gradient + sample scorecard), custom footer → global Footer.
5. Process section: card grid → timeline (rejected) → progress panel (rejected) →
   **bento grid** (chosen via option picker).
6. All mockups flipped to positive-only states.
7. seo-audit content pass: positive/confident messaging site-wide.
8. Coverage board replaced the US-map skeleton.
9. Section rhythm halved (90 → 52px).
10. Dark bento card got bottom CTA.
11. Hero skeleton → dashboard component → animated Before/After version →
    composite full-width version (list + chart) after "too small" feedback.
12. Floats: corner overlays → static row below the card. Badges moved above CTAs.
    Hero grid top-aligned. Dashboard capped at 500px.
13. H1 shortened to 6 words: "Local SEO that grows your business".

## Clone checklist (also in page.tsx header)

1. Copy `template-seo/` folder → new slug; update `PAGE_PATH` + all metadata.
2. **Delete the `robots: { index: false }` block.**
3. Rewrite copy/FAQs for target keyword; update all JSON-LD.
4. Update mockup numbers/keywords per industry (search terms, city names, metrics).
5. Add page to `sitemap.ts`; optionally re-prefix CSS if the page gets its own palette.
6. Form: keep a whitelisted service in `defaultServices` (see `src/api/leadsRoute.ts`).

## Pages queued for revamp from this template

- /services/local-seo-for-home-services
- /services/gmb-optimization
- /services/industry/local-seo-services-for-hvac
- /local-seo-google-business-optimization
- (others as directed)
