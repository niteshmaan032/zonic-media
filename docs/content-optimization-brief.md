# Content optimization brief for earlier redesign drafts (24 Oct 2026)

The owner asked to deep-research and re-optimize the copy of the redesign drafts built before the HVAC page. Some of them still carry old live-page wording. **Keep each page's approved design, layout and UI components; change the words.** All pages are noindex drafts; **never edit a live page or a shared component.**

## Rules (owner, non-negotiable)

1. **Fresh, research-led copy.** Rewrite any sentence, heading, FAQ or stat line copied from the live counterpart (find them with the dupcheck below). Same message, new wording. Every H1/H2/H3 must be unique across the site, including sibling drafts.
2. **Research first.**
   - Semrush `resource_organic` on the live URL (`https://www.zonicllc.com<live-url>`): keep the terms it already ranks for in the `<title>` and H1, plus the main H2s.
   - Semrush `phrase_these` for 15–25 candidate terms, and `phrase_questions` for the FAQ.
   - 2–3 WebSearch queries on what customers of that service search and need in 2026.
   - Re-target the title, description, keywords, H1, H2s, body and FAQs at the strongest relevant terms.
   - Keep Semrush to about 3 calls per page. On `no_api_units`, continue with web research only.
3. **Relevant sections only. Attract clients.** Show what we offer and how we grow their business: Google Maps, AI recommendations, reviews, calls, websites, ads. Cut filler and "market facts".
4. **No price or budget estimates** (ad budgets, cost per click, job prices, ROI promises).
   - Keep the company's actual published offers exactly as they are: plan prices $297 / $750 / $1,500, LaunchPad and website-build package prices, "0% ad-spend markup", "month to month".
   - Never add new figures.
5. **Verified numbers only:** 1,500+ GBPs optimized, 900+ reinstated, 5.0 Google rating, 20+ industries, 0% ad-spend markup. Never invent results, client counts or percentages.
6. **Never name another company** in a claim (legal risk). Use "directories" or "shared lead sites".
7. **Keep every internal link** in the page's main content. Rewrite the anchor text if needed.
8. **Short, keyword-led copy**, at roughly the page's current length or shorter. No eyebrows above section headings. Headings run 2–3 lines.
9. **Every contact or audit block shows phone, email and address on the left** (`SITE_CONTACT` from `@/shared/siteConfig`). If one is missing, add a compact contact list in the page's own component, matching its style.
10. **Hero:** if a hero shows a price or budget estimate, replace it with growth outcomes ("Top 3 on Google Maps", "More booked jobs"). Don't redesign heroes otherwise.

## Special care: `/services/local-seo-for-home-services-2`

This mirrors the site's top-traffic page.
- Before rewriting, list its ranking queries (`resource_organic`).
- Keep those exact phrases in the title, H1 and the H2s or FAQ questions that carry them. Rewrite the surrounding copy for freshness and clarity.
- Keep every link and the FAQ count. Report every heading you changed (old → new).

## Files

Edit only the files listed for your pages, typically the page's `src/components/rd/<page>/content.ts`, its page component, and for Delaware/Philadelphia/NYC/DFW pages the route `page.tsx` that holds the data.

Never edit:
- `dfw-kit/*`;
- `delaware/DelawareLanding.tsx` or `delaware/types.ts`;
- `home/HomePricing.tsx`, `home/pricing.ts` or `PricingPlans`;
- `Footer`, `Navbar`, `ServiceLeadForm`;
- anything under `src/components/rd/industry/`, `hvac/` or `hvacstate/`.

If a shared component hard-codes copy you can't reach, list it in your report.

### Web research is mandatory, not optional (owner, 24 Oct 2026)

Don't rely on Semrush alone. For every page, research Google directly with the WebSearch and WebFetch tools (load them with ToolSearch: "select:WebSearch,WebFetch"):

- Search the page's main terms exactly as a customer or business owner would, e.g. "plumbing marketing agency" or "local seo tampa". Note what the top results cover (sections, angles, the questions they answer), the "People also ask"-style questions, and the related searches.
- Open (WebFetch) 2–3 top-ranking pages for the main term and note their topics and gaps. **Never copy their wording**; use them only to judge which sections and answers the page needs.
- Use what you find to choose H2s, service cards, growth rows and FAQs.
- **If Semrush returns `no_api_units` (or any error), don't stop.** Do the whole keyword job with web search: autocomplete-style queries, related searches, competitor titles and H1s. Say in your report that the keywords came from web research.

## Validation (must pass before reporting)

1. `npx prettier --write <your files>`, `npx tsc --noEmit -p .` (no errors from your files) and `npx eslint <your files>`, all clean.
2. `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000<draft-url>` returns 200 for every page.
3. Run `python3 /private/tmp/claude-501/-Users-niteshmaan-Desktop-zonic-media/5687465f-480a-41cb-8a01-b13eac3299b9/scratchpad/dupcheck.py http://localhost:3000<draft> http://localhost:3000<live-counterpart> <sibling drafts…>` once before you start, to measure the copying, and again after, when it must print OK for every comparison. Pages with no live counterpart only compare against siblings.
4. Don't run git, delete files or touch files outside your list.

## Report (short, per page)

- Draft URL.
- The live page's ranking terms (or "Semrush no data").
- New title and H1.
- Keywords used, with volumes.
- Dupcheck before → after.
- Links kept.
- Notable changes.
- Anything you couldn't do.
