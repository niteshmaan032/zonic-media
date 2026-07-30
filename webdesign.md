# Home Improvement & Remodeling — Website Design Landing Pages

Session log / build documentation for the 6 new `{service}-website-design` landing pages
(Home Improvement & Remodeling category). Built July 2026.

---

## The request

> Design 5 (→ 6) website-design service landing pages for the "Home Improvement & Remodeling"
> category. Use the existing `hvac-website-design`, `roofing-website-design`,
> `dental-website-design` pages as reference — reuse their layout, make skeletons for images,
> use color palettes related to each service, run the ui-ux-pro-max + seo-audit skills for the
> content (content is the most important part — use latest keywords), and interlink the pages.

The screenshot showed the **Home Improvement & Remodeling** category with 6 services. Confirmed
with the user to build **all 6** (completes the category + tightest interlinking).

---

## What was built

**6 pages** (all statically prerendered at `/services/{slug}`):

| # | Page slug | Palette theme | Local-SEO twin (interlinked) |
|---|-----------|---------------|------------------------------|
| 1 | `bathroom-remodeling-website-design` | spa teal (`hiw-theme-bathroom`) | `local-seo-for-bathroom-remodelers` |
| 2 | `kitchen-remodeling-website-design` | warm terracotta (`hiw-theme-kitchen`) | `local-seo-for-kitchen-remodelers` |
| 3 | `general-contractor-website-design` | blueprint navy + amber (`hiw-theme-contractor`) | `local-seo-for-general-contractors` |
| 4 | `flooring-website-design` | walnut / oak (`hiw-theme-flooring`) | `local-seo-for-flooring-companies` |
| 5 | `window-and-door-website-design` | glass azure (`hiw-theme-window`) | `local-seo-for-window-and-door-companies` |
| 6 | `painting-contractor-website-design` | creative violet (`hiw-theme-painting`) | `local-seo-for-painting-contractors` |

---

## Files created / changed

**Created**
- `src/app/style/homeImprovementWeb.css` — ONE shared, variable-driven stylesheet (prefix `hiw-`,
  form prefix `hiwf-`), scoped under `.hiw-page`, with 6 `.hiw-theme-*` palette blocks.
- `src/app/components/HomeImprovementWebLeadForm.tsx` — ONE parameterized lead form (takes a
  `variant` prop).
- `src/app/(main)/services/bathroom-remodeling-website-design/page.tsx` (canonical template)
- `src/app/(main)/services/kitchen-remodeling-website-design/page.tsx`
- `src/app/(main)/services/general-contractor-website-design/page.tsx`
- `src/app/(main)/services/flooring-website-design/page.tsx`
- `src/app/(main)/services/window-and-door-website-design/page.tsx`
- `src/app/(main)/services/painting-contractor-website-design/page.tsx`

**Changed**
- `src/app/sitemap.ts` — registered all 6 routes (priority 0.8, monthly).

---

## Architecture decisions

**Shared themed CSS instead of 6 duplicate files.** The older web-design family
(dental/roofing/hvac/electrical/plumbing/pest-control) each has its own ~2,000-line CSS + own
LeadForm component. Instead of six near-duplicate files, this family uses:

- **One stylesheet.** Every color in the body references a CSS variable or a `color-mix()` tint
  derived from the accent. A page's palette is set by a `.hiw-theme-*` modifier class that only
  defines 7 tokens (`--hiw-ink / accent / second / hl / text / light / divider`). Background
  washes, skeleton tints, rgba shadows, etc. all derive automatically via `color-mix()`.
  → Fully scoped under `.hiw-page` (satisfies the project CSS-scoping rule), and DRY.
- **One lead form.** `HomeImprovementWebLeadForm` takes a `variant` prop (formType, labels,
  placeholders, headline/subcopy). Sends `services: ["Web Design"]` (the whitelisted service —
  avoids the `/api/leads` ALLOWED_SERVICES 400) with a per-page `formType`.

**Skeletons, not images.** Every visual slot is a `.hiw-ph` shimmer placeholder
(`<div className="hiw-ph"><span>label</span></div>`) so nothing 404s until real photography is
added. To swap later: replace the `.hiw-ph` div with a `next/image` `<Image>`.

**Palettes** — 6 distinct, service-appropriate. All accents contrast-checked to ≥ 4.5:1 for
white text on the accent (buttons, icons) per ui-ux-pro-max guidance:

```
bathroom    ink #12211e  accent #0c837a  second #45c4b8  hl #7fd8ce  light #eef9f7  divider #cfebe6
kitchen     ink #241611  accent #b14a22  second #e39a3c  hl #f1b57c  light #fbf3ec  divider #f0ddcb
contractor  ink #14181e  accent #1d4e89  second #f5a623  hl #7aa3d0  light #eef3fa  divider #d4e0ee
flooring    ink #241b12  accent #8a5626  second #c6975a  hl #d8b888  light #faf4eb  divider #ecdcc6
window      ink #10202a  accent #0e6e9c  second #6fc7ec  hl #86d2ef  light #edf8fd  divider #cfe9f6
painting    ink #1c1530  accent #6d28d9  second #ec5b9c  hl #b79cf0  light #f5f1fd  divider #e4daf7
```

---

## Content & SEO

Each page has:
- Unique `title`, `description`, H1, and a 10-keyword set targeting the latest clusters:
  `{service} website design` / `web design` / `websites for {service}` / `{service} landing page
  design` / `lead generation website` / `web designer`, plus service-specific long-tails.
- **JSON-LD:** Service (with `hasOfferCatalog`) + FAQPage (5 Q&As) + BreadcrumbList.
- Service-specific copy throughout: hero, "first impressions" angle, 6 "what we build" cards,
  split band, 4-card lead system, 8-item anatomy checklist, why-choose-us, 4-step process,
  banner, marquee, nationwide chips, FAQ, "grow further" cards, and a page-specific footer.

Note: Python was not installed, so the ui-ux-pro-max CLI could not run — its full guidance
(4.5:1 contrast, semantic color tokens, 8px rhythm, shimmer skeletons, reduced-motion, focus
rings) was applied from the loaded skill reference instead.

---

## Interlinking

Every page links to:
- its **local-SEO twin** (`/services/industry/local-seo-for-*`),
- **2 sibling web-design pages** (Grow Further cards — a ring so all 6 cross-link),
- the **`/services/web-design`** hub, `/services/local-seo-for-home-services`,
  `/services/gmb-optimization`,
- painting additionally links `/services/painting-contractor-marketing-agency`.

Sibling ring (Grow Further):
```
bathroom  → kitchen, flooring
kitchen   → bathroom, general-contractor
contractor→ kitchen, window-and-door
flooring  → bathroom, painting
window    → contractor, painting
painting  → flooring, window
```

---

## Verification

- `npx tsc --noEmit` → **0 errors** project-wide.
- `npx next build` → **✓ Compiled successfully**; all 6 pages statically generated (○) alongside
  their local-SEO twins.
- All 6 wrappers carry exactly one `hiw-theme-*` class; all 6 themes defined in CSS; no foreign
  prefix (`hw-/dw-/rw-/…`) leaked; each page links its twin.

---

## To do later

- Drop in real photography: swap each `.hiw-ph` skeleton for a `next/image` `<Image>`
  (hero, first-impressions collage ×2, split band, banner). Suggested image dir per page,
  e.g. `/public/images/bathroom-web/…`.
- Memory: architecture recorded at
  `memory/project_home_improvement_web_pages.md`.
