# Florida city digital marketing pages — build brief (18 Nov 2026)

## Background

The owner approved the Florida plan (https://claude.ai/artifact/AES7o7UFzy8bMQNW587U6G). Its phase 1 is 8 city digital marketing pages, at the URL format already used by Philadelphia and Wilmington.

These pages already exist and are live in dev:
- The Florida hub: `/services/florida/digital-marketing`.
- Three Florida service pages: `/services/florida/local-seo`, `/services/florida/ppc`, `/services/florida/web-design`.

The hub now has a cities section linking all 8 city pages.

**Keyword research:** `reports/research/florida-cities-keywords-2026-11.md`. Read your city's section and the "Cannibalization rules" before writing.

Each page goes **live at its final URL**: indexable, with a self canonical.

## Your page

| City | URL | `kind` | UI file (you own it) | Export |
|---|---|---|---|---|
| Tampa | `/services/tampa/digital-marketing` | `fl-tampa` | `src/components/rd/delaware/flTampaUi.tsx` | `tampaUi` |
| Orlando | `/services/orlando/digital-marketing` | `fl-orlando` | `flOrlandoUi.tsx` | `orlandoUi` |
| Miami | `/services/miami/digital-marketing` | `fl-miami` | `flMiamiUi.tsx` | `miamiUi` |
| Jacksonville | `/services/jacksonville/digital-marketing` | `fl-jacksonville` | `flJacksonvilleUi.tsx` | `jacksonvilleUi` |
| Fort Lauderdale | `/services/fort-lauderdale/digital-marketing` | `fl-fort-lauderdale` | `flFortLauderdaleUi.tsx` | `fortLauderdaleUi` |
| Sarasota | `/services/sarasota/digital-marketing` | `fl-sarasota` | `flSarasotaUi.tsx` | `sarasotaUi` |
| St. Petersburg | `/services/st-petersburg/digital-marketing` | `fl-st-petersburg` | `flStPetersburgUi.tsx` | `stPetersburgUi` |
| Fort Myers | `/services/fort-myers/digital-marketing` | `fl-fort-myers` | `flFortMyersUi.tsx` | `fortMyersUi` |

- Your page file is `src/app/(main)/services/<slug>/digital-marketing/page.tsx`. It is new; create the folder.
- Your optional CSS is `src/components/rd/delaware/fl<City>.css`, imported by your UI file.
- You touch **only** those three files.

## Design: the same as the other location pages

- Use the location template `src/components/rd/delaware/DelawareLanding.tsx`. Everything is already wired. Do **not** edit DelawareLanding, DelawareUi, types, flCities, flCitiesSection or any other shared file.
- Your models for structure and format:
  - `src/app/(main)/services/florida/digital-marketing/page.tsx` (the Florida hub): data object, extras, metadata, schema, FAQ JSON-LD, pricing copy.
  - `src/components/rd/delaware/flMarketingUi.tsx` and `flSeoUi.tsx`: UI style, the `uiBits` helpers (`run()`, `inAt()`, `Flip`, `Slot`, `CARD`, `TICK_AT`), `UiHead` and `Chip` from `dfw-kit/ui`, and `PhoneFrame` from `dfw-kit/visuals`.
- **Never reuse wording from those or any other page.**
- Your city page **must not** set `extras.cities`; only the hub shows that section.

### UI contract

Your UI file holds a placeholder `FlCityUi` object. Replace its members with real components:

| Member | Where it shows | Activated by |
|---|---|---|
| `Feature1`, `Feature2`, `Feature3` | The three white "how we win" feature rows | `extras.features.items[i].ui` = `"city-1"`, `"city-2"`, `"city-3"` |
| `Phone` | The journey phone | `extras.phone = "city"` |
| `DarkUi({ console })` | The dark band card | `extras.darkUi = "city"` |
| `Score({ rows })` | The compare scorecard | `extras.scoreStyle = "city"` |
| `stepUis(process)` | The 4 tilted process-step cards (return 4 `<Slot>`s) | automatic, by `kind` |

**Rules for every component:**
- Decorative: `aria-hidden`.
- Example labels only: "Your Company", first names.
- **No prices, CPCs, cost-per-lead or money figures, and no invented results** ("+142%", "6.4× ROI"). Positions, statuses, relative bars and counts of tasks are fine.
- Extra keyframes need a `prefers-reduced-motion` rule.
- Use real place names from your city. Every UI must be about digital marketing for that city.
- Each UI must look different from the hub's, the 3 Florida service pages' and the other cities'.

**UI concepts per city.** Assigned so the 8 pages don't converge. Build these; your own take on each is fine.

| City | Feature 1 | Feature 2 | Feature 3 | Phone | Dark card | Scorecard |
|---|---|---|---|---|---|---|
| Tampa | Hillsborough neighborhood search board (Westshore, South Tampa, Brandon, Wesley Chapel…: searches → calls bars) | Tampa season swimlanes (Gasparilla in late Jan, spring, hurricane Jun–Nov, holidays) with campaign blocks | Trade lead router (plumbing, pool, gutters, electrical leads sorted with status chips) | Maps result + call for "pool builder near Westshore" | Hillsborough vs Pinellas split across the bay bridges, with relative lead bars | Vertical tide-gauge columns |
| Orlando | Visitor vs resident query splitter (I-Drive/Lake Buena Vista searches vs Winter Park/Lake Nona homeowner searches routed to separate campaigns) | Search-language mix: relative EN/ES/PT demand per service, purely analytic | Profile health and suspension guard for an Orlando listing | Business Profile "Book" flow for a Winter Park home inspection | Concentric suburb rings (Downtown → Winter Park → Lake Nona → Kissimmee → Sanford) with lead dots | Stepped staircase bars |
| Miami | Neighborhood × hour heat grid (Brickell, Doral, Hialeah, Kendall, Coral Gables, Miami Beach) for ad scheduling | English/Spanish search pairs side by side with relative bars, purely analytic | Social-to-lead feed (Instagram/Facebook post → message → booked) | Instagram post → DM lead → booked chip | Neighborhood tiles with lead sparklines | Skyline columns (two-tone towers) |
| Jacksonville | Drive-time coverage planner (zones from a shop across Southside, Mandarin, Arlington, Northside, the Beaches) | New-resident timing calendar (summer military move season near NAS Jax/Mayport, school year) | Review velocity by side of the river | Local Services Ads "Google Verified" call for a roofer in Mandarin | River-quadrant map (Northside/Westside/Southside/Arlington/Beaches) with relative counts | Lollipop chart |
| Fort Lauderdale | Broward city × service ranking matrix (Hollywood, Plantation, Coral Springs, Pompano Beach, Weston…) | AI-answer citations card for a Las Olas query (sources that agree) | "How to choose a marketing partner" checklist scorecard (answers that search) | Voice/AI assistant answer on a phone: "best dentist near Las Olas" | Port-style departures board: Broward cities, campaign, status | Progress ribbons |
| Sarasota | Snowbird return planner (Oct–Apr arrivals, campaigns scheduled before) | Pool company request board across Sarasota/Manatee (pool service jobs by area) | New-community page builder for Lakewood Ranch neighborhoods | Seasonal-resident welcome-back email/newsletter preview | Monthly lead bars with the season band highlighted | Sun-arc semicircle gauges |
| St. Petersburg | Pinellas strip ranking board (Dunedin → Clearwater → Largo → St. Pete → St. Pete Beach) | Google posts calendar for shops and restaurants (weekly specials, events, Grand Central District) | Review reply desk (incoming reviews with drafted replies, approve chips) | Review-request text → 5-star review posted | Vertical Pinellas peninsula strip map with towns and pins | Stacked brick blocks |
| Fort Myers | Storm-recovery demand tracker (roofing, screen enclosures, pool repair searches over months) | Contractor estimate pipeline (Inspection → Estimate → Booked) with follow-up chips | Lee County service-area pages (Cape Coral, Fort Myers, Estero, Bonita Springs, Lehigh Acres) | Call-tracking summary card (tagged call, source, outcome) | Kanban of leads by Lee County city | Ruler/caliper bars with a moving pointer |

### Pillars

`extras.pillars`, hero bento a → d. `a` and `d` take white text.

| City | a | b | c | d |
|---|---|---|---|---|
| Tampa | #9f1239 | #fef3c7 | #e0e7ff | #1f2937 |
| Orlando | #6d28d9 | #fce7f3 | #d1fae5 | #172554 |
| Miami | #0f766e | #fecaca | #ede9fe | #4c0519 |
| Jacksonville | #1d4ed8 | #dcfce7 | #ffedd5 | #0f172a |
| Fort Lauderdale | #a21caf | #e0f2fe | #ecfccb | #1e3a8a |
| Sarasota | #a16207 | #dbeafe | #fce7f3 | #14532d |
| St. Petersburg | #4d7c0f | #e0f2fe | #fae8ff | #164e63 |
| Fort Myers | #9a3412 | #dcfce7 | #e0e7ff | #052e16 |

## Keywords

Format: volume / KD. Full maps and trends are in the research file.

**Title and H1:**
- The title leads with the city's best digital marketing term; suggestions below.
- The H1 starts with `<City> Digital Marketing Agency` so the map pin lands after the city name. The `PLACE` map is already set to the city name: "St. Petersburg", "Fort Lauderdale", "Fort Myers".
- The H1 must fit in **2 lines at desktop**. Check with h1lines.

| City | Title suggestion | Lead terms |
|---|---|---|
| Tampa | Tampa Digital Marketing Agency \| Digital Marketing Tampa FL | digital marketing tampa fl 1,300/28 · tampa digital marketing agency 880/38 · digital marketing tampa 1,600/40 · digital marketing services tampa 480 |
| Orlando | Orlando Digital Marketing Agency \| Digital Marketing Orlando FL | orlando digital marketing agency 1,000/15 · digital marketing orlando fl 260/14 · digital marketing services orlando 210/22 · advertising agency orlando 390/17 |
| Miami | Miami Digital Marketing Agency \| Marketing Agency in Miami | digital marketing agency miami 1,300/32 · miami digital marketing agency 880/31 · marketing agency miami 720/20 · digital marketing services miami 170 ↑ |
| Jacksonville | Jacksonville Digital Marketing Agency \| Digital Marketing Jacksonville | jacksonville digital marketing agency 480/34 · jacksonville digital marketing 590 · best digital marketing companies in jacksonville 170 |
| Fort Lauderdale | Digital Marketing Agency Fort Lauderdale \| Fort Lauderdale Marketing | digital marketing agency fort lauderdale 590/18 · digital marketing fort lauderdale 590/21 · marketing agency fort lauderdale 390/21 ↑ |
| Sarasota | Digital Marketing Sarasota \| Sarasota Digital Marketing Agency | digital marketing sarasota 320/5 · digital marketing agency sarasota 320/16 · sarasota marketing agency 320/22 · digital marketing services sarasota 140/11 |
| St. Petersburg | Digital Marketing Agency St. Petersburg, FL \| St. Pete Marketing | digital marketing agency st petersburg 480/6 · digital marketing st. petersburg fl 320 · digital marketing st pete 210/5 · st pete marketing agency 70 ↑ |
| Fort Myers | Digital Marketing Fort Myers \| Fort Myers Digital Marketing Agency | digital marketing fort myers 480/17 · fort myers digital marketing agency 390/19 · fort myers marketing agency 260/17 |

**Secondary terms** (city SEO, local SEO, web design, PPC, social media): put them in an H2/H3, an FAQ or the body. Never in the title or H1. They are in the research file.

**No cannibalization:**
- Never use "florida digital marketing agency" or "south florida digital marketing agency" as a head term; the hub owns them.
- **Tampa owns "Tampa Bay"**; St. Petersburg uses "Pinellas" and "St. Pete".
- Naples stays for a later page; Fort Myers may mention it once in passing at most.
- Don't target another city's terms.

**Language:**
- Miami, Orlando and Fort Lauderdale may say customers search in English and Spanish (Orlando also Portuguese).
- **Never claim** we write Spanish content or run Spanish campaigns; the owner hasn't confirmed it.

## Content rules (owner)

- **Fresh wording only.**
  - The duplicate checker flags any 7-word run shared with another page.
  - Every H2/H3 and FAQ question must be unique sitewide: grep `src/` for each.
  - Short, keyword-led copy. About 2,200–2,700 words in `<main>`.
- **City-specific substance:**
  - neighborhoods and nearby towns;
  - the local economy and the trades and businesses that search there (see the niches in the research file and the Search Console notes);
  - seasons (snowbird Oct–Apr, hurricane Jun–Nov, local events);
  - AI answers (AEO/GEO).
  - Use well-known facts only. No statistics you can't stand behind; no population or income figures.
- **Facts and honesty:**
  - Verified company numbers only: 1,500+ Business Profiles optimized, 900+ suspended listings reinstated, 5.0 Google rating, 20+ industries, 0% ad-spend markup.
  - Plan prices only as "$297, $950 or $1,500 a month" (Growth is $950 monthly / $750 annual), in an FAQ or the pricing copy.
  - **Never state the Google Ads management fee.**
  - No invented results or client names.
  - **No local office:** we serve the city from Dover, Delaware, with video calls. Answer "Do you have an office in <City>?" honestly if you include it.
  - Never name another company.
  - Some Semrush keywords contain agency brand names. Never use them.
- **Pricing:** `extras.pricing` (monthly plans). Write unique copy for title, lead, compareTitle, compareLead, addOnsTitle, addOnsLead, customTitle and customText.
- **Photo:** `extras.aboutPhoto` with `src: ""` (shimmer placeholder) and a descriptive alt. The owner will send photos.
- **Lead form:** `form.formType` = `<slug>-digital-marketing`, e.g. `tampa-digital-marketing`.
- **Schema:**
  - BreadcrumbList Home > Services > Florida Digital Marketing (`/services/florida/digital-marketing`) > this page;
  - `Service` with `areaServed` `{ "@type": "City", name, containedInPlace: { "@type": "State", name: "Florida" } }`;
  - FAQPage built from the FAQ array;
  - **Never `aggregateRating`.**
- **Links (in-content, keyword anchors):**
  - **The hub** `/services/florida/digital-marketing`, with an anchor like "Florida digital marketing agency".
  - **The three Florida service pages**: `/services/florida/local-seo`, `/services/florida/ppc`, `/services/florida/web-design`.
  - **Neighbor cities:**
    - Tampa ↔ St. Petersburg, Sarasota, Orlando
    - Orlando ↔ Tampa, Jacksonville
    - Miami ↔ Fort Lauderdale
    - Jacksonville ↔ Orlando
    - Fort Lauderdale ↔ Miami
    - Sarasota ↔ Tampa, St. Petersburg, Fort Myers
    - St. Petersburg ↔ Tampa, Sarasota
    - Fort Myers ↔ Sarasota, Fort Lauderdale
  - **Core pages:** `/local-seo-google-business-optimization`, `/services/google-ads`, `/services/web-design`, `/services/ai-seo-services`, `/services/gbp-reinstatement-service`.
  - **Niche pages** that fit your city's searches, for example:
    - `/services/pool-service-marketing-agency`
    - `/services/plumbing-marketing-agency/florida`
    - `/services/hvac-marketing-agency/florida`
    - `/services/home-inspector-marketing/florida`
    - `/services/electrician-marketing-agency`
    - `/services/gutter-marketing-agency`
    - `/services/roofing-marketing-agency`
    - `/services/law-firm-marketing-agency`
    - `/services/dental-marketing-agency`
    - `/services/chiropractic-marketing-agency`
    - `/services/landscaping-marketing-agency`
    - `/services/travel-and-tourism-marketing-agency`
    - `/services/real-estate-marketing-agency`
    - `/services/general-contractor-marketing-agency`
    - `/services/non-profit-marketing-agency`
    - `/services/painting-contractor-marketing-agency`
    - `/services/plumbing-website-design`
  - Check each URL exists under `src/app/(main)/services/` before linking.
  - The service cards (`services.cards[].href`) and feature links should point to the Florida service pages or niche pages, not all to the generic core pages.

## Validation (must pass)

The dev server is already running on :3000. **Never start, stop or restart it**; other builders share it. If a request is slow, wait and retry.

1. Code checks:
   - `npx prettier --write` and `npx eslint` on your files;
   - `npx tsc --noEmit -p .` once at the end.
2. `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000<your url>` returns 200.
3. H1 fit: `node ~/.cache/zonic-qa/h1lines.mjs http://localhost:3000<url> "#de-h1"` must print OK.
4. Duplicates: `python3 ~/.cache/zonic-qa/dupcheck.py http://localhost:3000<your url> <compare urls…>`. Every comparison must print OK. Compare against:
   - the hub `/services/florida/digital-marketing`;
   - `/services/florida/local-seo`, `/services/florida/ppc`, `/services/florida/web-design`;
   - `/services/philadelphia/digital-marketing`, `/services/wilmington/digital-marketing`, `/services/nyc/digital-marketing`, `/services/delaware/digital-marketing`, `/services/dallas-fort-worth/digital-marketing-agency`;
   - every other Florida city page that returns 200 when you finish.
5. Screenshots:
   - `node ~/.cache/zonic-qa/fullshot.mjs <out.png> /services/<slug>/digital-marketing 1440` and again at `390`. The second argument is a **path**, not a full URL.
   - Look at your UIs and fix anything clipped, overlapping or broken.
   - Check sideways overflow with `node ~/.cache/zonic-qa/secshot.mjs <out.png> <path> <selector> 390` (it prints `sideways overflow: true/false`).
   - Save screenshots to your scratchpad or `/tmp`, never inside the repo.
6. No git commands, no deletes, no edits to shared files. I register the sitemap and hub links myself.

## Report back (short)

- URL, title, H1;
- lead and secondary keywords used, with volumes;
- the UI components you built (one line each);
- links added;
- word count;
- dupcheck and h1lines results;
- anything not done or any claim you were unsure about.
