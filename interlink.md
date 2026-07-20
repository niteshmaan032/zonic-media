# Internal Linking Handoff

Last updated: 2026-07-20

## Conversation Summary

1. The user asked whether the internal-linking work previously started with Claude could be continued.
2. The existing rules in `.claude/interlinking-spec.md` and the dirty worktree were inspected. The unfinished interlinking pass was completed without reverting unrelated user or Claude changes.
3. The user then requested a full internal-link audit, removal of the interlinking content added to Blog and Contact, and a contrast fix for the homepage link labeled "all-in-one starter package."
4. The Blog topic list was removed. Contact was restored to its original single introductory paragraph, and its added `next/link` import was removed.
5. The homepage Launchpad link now uses a dark navy color only inside the orange promo panel.
6. A strict audit found and fixed short/long anchor text, four missing scoped link styles, two duplicate CSS link-style blocks, and one missing sitemap entry for the non-profit marketing page.

## Current Status

- Static sitemap routes: 76
- Interlinked public routes: 71
- Contextual links audited: 385
- Required links per interlinked route: exactly 7
- Blog and Contact: intentional exceptions with no added interlinking copy, per user request
- Legal pages: excluded from this interlinking campaign
- Dynamic blog posts: excluded because their body content comes from the database
- Generated industry pages: 13 records, each with exactly 7 contextual links
- State templates: home inspector, plumbing, and HVAC templates each have exactly 7 links and represent 19 state routes
- Audit result: all checks pass

Run the audit from the repository root:

```powershell
node scripts/audit-internal-links.mjs
```

Expected output:

```text
Audited 55 interlinked sources.
Represented routes: 71.
Contextual links: 385.
All internal-link checks passed.
```

## Rules To Preserve

The source of truth is `.claude/interlinking-spec.md`.

- Use exactly 7 contextual links in readable body copy on each participating page. Eight is the absolute maximum.
- Navigation, footer, breadcrumbs, forms, and CTA buttons do not count.
- Use only canonical root-relative destinations defined by the spec and represented by real app routes.
- Do not add self-links or link to the same destination more than once per page.
- Keep anchor text descriptive and between 2 and 6 words.
- Place links in paragraphs, list copy, FAQ answers, or descriptive card copy. Do not place them in H1 text or buttons.
- Use `next/link` in TSX and `<a class="ima-inline-link">` in generated JSON HTML.
- Give each inline-link class a visibly underlined, page-scoped CSS rule.
- Do not re-add interlinking copy to `/blog` or `/contact-us` unless the user explicitly changes this decision.
- Preserve the homepage `.video-promo .hr-inline-link` override because the default orange link color disappears against that panel's orange background.

## Audit Coverage

The reusable checker at `scripts/audit-internal-links.mjs` verifies:

- exactly 7 contextual links per participating TSX source or generated JSON page
- canonical, root-relative destinations
- destination app-route existence
- sitemap inclusion for every participating route
- no self-links
- no duplicate destination on a page
- 2-6 word anchor text
- no links nested inside headings, buttons, or other links
- a matching scoped CSS class for every contextual link

## Notable Fixes From The Final Audit

- Expanded one-word anchors such as "website," "verification," "reinstatement," and trade names into descriptive 2-6 word anchors.
- Shortened the seven-word real-estate GBP anchor to "GBP services for realtors."
- Added scoped inline-link styling to dental SEO, roofing SEO, pediatric SEO, and car-towing SEO pages.
- Removed duplicate inline-link CSS blocks from travel/tourism and non-profit pages.
- Added `/services/non-profit-marketing-agency` to `src/app/sitemap.ts`.
- Changed the homepage "all-in-one starter package" link to `#172033` inside the orange Launchpad promo panel.

## Verification Notes

- `node scripts/audit-internal-links.mjs` passed: 55 sources, 71 represented routes, and 385 contextual links.
- Targeted ESLint passed with no errors or warnings for every TSX/JS file changed during the final audit.
- `npm run build` passed after the final audit. TypeScript passed and Next.js generated all 94 pages.
- The repository-wide lint command has unrelated pre-existing errors in admin and shared components. Do not treat those as interlinking regressions.
- The worktree contains many pre-existing Claude/user edits. Never reset or revert unrelated changes when continuing this task.

## Recommended Workflow For Future Updates

1. Read this file and `.claude/interlinking-spec.md`.
2. Run `node scripts/audit-internal-links.mjs` before editing.
3. Make only relevant link/copy/style changes.
4. Rerun the audit, targeted ESLint, and `npm run build`.
5. Update this handoff with any new exceptions, targets, or route-count changes.
