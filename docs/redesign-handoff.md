# Redesign — handoff (state on 17 Oct 2026)

The redesign is now run from a separate chat. This file is the starting point
for it. Full plan: `docs/growth-plan-2026-10.md` §6b. Change log:
`websiteOptimiztion.md` (entries dated 17 Oct).

## Owner decisions (binding)
- **One font for the whole site: Neue Haas Display** (already self-hosted in
  `src/app/fonts/neue-haas-display`, loaded in `src/app/layout.tsx`, weights
  400/500/600, no Black). Satoshi was tried and rejected, and removed from the
  project. Do not reintroduce it. Applying Neue Haas sitewide (stop Inter and
  Manrope overrides, e.g. `style/google-fonts.css`, `service-lead-form.css`)
  is step R1 and runs only **when the owner says go**.
- **Tailwind only for new/redesigned components**, built on the design tokens
  with short theme utilities. **Never** convert an old page one-to-one (tested
  on the two DFW pages: no visible gain, ~+40 KB gzipped HTML per page).
- **Never lose content, keywords, impressions or rankings.** Every heading,
  paragraph, FAQ and link stays. Layouts bend to the content (no fixed heights,
  clamps, hidden "read more"). If text doesn't fit: add to it, or trim filler
  words only — never keywords.
- **Redesign first, clean up last.** Old CSS, fonts, images, components and page
  code are never deleted during the redesign; a redesigned page just stops
  importing them. Everything unused goes in one final clean-up (R9) from a
  reviewed list, in small batches.
- Reference layout: the Dallas–Fort Worth pages. De-template per trade
  (different component composition, real images, evidence, rewritten
  boilerplate) — not noun swaps.
- Page design feedback memory: no section fade-reveals; insets track the navbar;
  port supplied HTML designs exactly.

## Done so far
- Tailwind 4.3.3 set up safely: `postcss.config.mjs`, `src/app/style/tailwind.css`
  (prefix `tw:`, no Preflight, utilities **unlayered** so they beat the
  unlayered Bootstrap/globals, Bootstrap breakpoints `max-bssm…max-bs2xl`,
  `@source` limited to `src/components/rd` + migrated pages), imported last in
  `src/app/layout.tsx`.
- Both DFW pages converted one-to-one to Tailwind (proved 0 computed-style
  differences), section headings capped at 62px (hero unchanged), still on Neue
  Haas. Originals kept as `_legacy/LegacyPage.tsx` in each route folder
  (rollback: `export { default, metadata } from "./_legacy/LegacyPage"`).
  Converted visuals: `src/components/rd/dfw-marketing/`, `src/components/rd/dfw-web/`.
  Old `dfwMarketing.css`, `dfwWebDesign.css`, `DfwMarketingVisuals.tsx`,
  `DfwWebVisuals.tsx` untouched.
- **All of the above is uncommitted** — owner commits and deploys.

## Component library (19 Oct 2026)
- `src/components/rd/dfw-kit/` is the start of the redesign component library:
  `kit.css` (DFW tokens on `.dk-root` + root element rules + shared keyframes),
  `primitives.tsx` (Section, Wrap, Strip, CenterHead, RowHead, Label, Pill,
  TickList, PanelShell, FloatChip) and `visuals.tsx` (Ph skeleton/photo,
  AvatarPh, InlinePin, InlineChat, HandArrow, Sparks, RatingBadge,
  GoogleRatingBadge, TrustLogos, PhoneFrame/PhoneScreen). Short theme
  utilities only; variants never repeat a property the base sets.
- First page built with it: /services/dallas-fort-worth/local-seo-agency
  (draft, noindex). Its class bytes are ~44% lower than the one-to-one
  converted DFW pages. Rebuild the two converted DFW pages from this kit
  when their family comes up.

## Guards and tools (run on every redesign deploy)
| Script | Purpose |
|---|---|
| `npm run snapshot` (`scripts/text-snapshot.mjs`) | visible text + SEO fields (title, description, canonical, robots, H1, H2s, word count) of every route → `reports/text-snapshots`, `reports/seo-snapshots`; commit as the baseline |
| `node scripts/keyword-guard.mjs <route-prefix> [--layout-only] [--worktree]` | fails on any title/description/H1/H2 change, word-count drop, text change (layout-only), or a missing GSC query word (`reports/gsc/queries/<route>.txt`) |
| `node scripts/visual-snap.mjs --base http://localhost:3000 --routes … --out <name> --compare <name>` | 390/768/1440 screenshots, overflow + clipped-text check, pixel diff |
| `node scripts/style-diff.mjs capture/compare` | every element's computed style (animations frozen) — proves a CSS change renders identically |
| `scripts/css-to-tailwind.mjs` | the one-to-one converter used on the DFW pages — **do not use for further pages** (owner decision); kept for reference |
| Lighthouse | mobile ≥ 80, CLS < 0.1 |

## Schedule (plan §6b)
R1 one font (Neue Haas) — when owner says go · R2 pilot · R3 home + GBP pages ·
R4 web-design family · R5 marketing-agency · R6 industry local-SEO · R7 cities,
states, blog, hubs · R8 de-templating per trade · R9 final clean-up.
Layout-only steps judged after 7 days, content steps after 14. One family per
deploy; never in the same week as that family's title/meta changes.

## Coordination with the SEO chat
- Text freeze on ranking pages until **28 Oct 2026** (SEO chat ships a batch of
  24 title/description rewrites that day). Don't redesign a family in the same
  week its titles change.
- Owner inputs pending: real office/team/founder photos + client screenshots
  (or approval for illustrations), evidence figures per trade.
