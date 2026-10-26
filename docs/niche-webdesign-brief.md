# Niche Website Design Pages — Redesign Brief (26 Oct 2026)

Owner: "web design is my crucial service which i want to grow more and get
more organic leads … redesign my all web design pages for niches". HVAC was
built first and approved: `/services/hvac-website-design-2`. Now: "build for
all the niches under web design dropdown — keep all the points in mind we did
for hvac, deep content research, optimize pages, relevant sections, attract
users to get our web design service, positive results, different colour
palettes".

## What you build per niche

1. `src/components/rd/nichewd/content/<live-slug>.ts`: exports
   `CONTENT: NicheWebContent` (see `src/components/rd/nichewd/types.ts`).
2. `src/app/(main)/services/<live-slug>-2/page.tsx`: a copy of
   `src/app/(main)/services/hvac-website-design-2/page.tsx` with the import
   path and header comment changed. Nothing else.

Do **not** edit the shared template, `ui.tsx`, `heroes/SiteStage.tsx`,
`tones.ts`, `types.ts` or the HVAC files. If you think one needs a change, say
so in your report.

The reference is `content/hvac-website-design.ts`. Copy its **shape, length
and tone**, never its sentences, headings or heading skeletons.

## Owner rules (all apply)

- **Fresh copy only.** Never copy text, stats or FAQs from the live page,
  from HVAC or from sibling drafts. Every heading must be unique site-wide.
  No heading may be an HVAC heading with only the niche word swapped (e.g. NOT
  "Inside Every Plumbing Website We Launch", "The Pages We Build Into Every
  Roofing Site", "Zonic vs. a Template Dental Website", "What Changes After
  Your … Site Goes Live", "… Questions, Answered"). Templated families are a
  doorway-page risk. Each page must read as written for that trade.
- **Keyword-led and short.** Plain words, a keyword in each H2 where it fits
  naturally, about 2,000–2,300 words in total (HVAC is about 2,100).
- **Title:** `<primary keyword> | <secondary keyword>`, at most 60
  characters. It must keep the live page's ranking phrase (see the GSC data
  in the appendix). Meta description: 140–160 characters.
- **H1:** `h1Lead` = the main keyword (e.g. "Plumbing Website Design").
  `h1Rest` = a short, outcome-led line, at most 2–3 lines on desktop. Make it
  distinct from every sibling (bathroom vs kitchen vs painting were too
  similar in an earlier round).
- **No prices, budgets, CPCs, Semrush figures** or invented performance
  numbers anywhere, including example UIs. Times like "Today 10 AM" are fine.
- **Cost FAQ (required, worded freshly):** a fixed, single quote after a free
  call, plus the free website offer through a qualifying monthly growth plan.
  No figures.
- **Build time is 2–3 weeks** everywhere (process title, FAQ, consult points).
- **Verified numbers only:** 1,500+ GBPs optimized, 900+ suspended profiles
  reinstated, 5.0 Google rating, 20+ industries, 0% ad-spend markup. The
  template already shows the first four.
- **Never name** a competitor, firm, directory, software vendor or platform
  brand. Say "your scheduling software", "practice management software",
  "your CRM", "Another roofing company". (Google, Google Maps, Google Business
  Profile and AI Overviews are fine.)
- **Reviews heading** must not claim that the niche wrote the reviews. Say,
  for example, "Read Our 5.0 Google Reviews Before You Hire a Web Team", not
  "What Roofers Say About Us".
- **Pricing section is owner-locked.** Only its four headings come from your
  content (`pricing.title/compareTitle/addOnsTitle/customTitle`). Make them
  unique.
- **Keep every live internal link** (appendix list) somewhere in the copy
  (`Rich` leads, service-card `links`, consult lead). `/services/ai-seo-services`
  may be added (as HVAC did). **Non-home-service niches** (dental,
  chiropractor, pediatrician, law firm, real estate) link
  `/services/local-seo-for-small-business` **instead of**
  `/services/local-seo-for-home-services` (owner, 25 Oct). The other niches
  keep the home-services link.
- **Law firms:** no outcome promises, no "guaranteed" or "best lawyer" claims,
  no testimonials implying results. **Medical/dental/pediatric:** no clinical
  claims; HIPAA-aware forms are fine to mention ("forms that don't ask for
  medical details", "secure forms").
- `formType` = the live slug (e.g. "plumbing-website-design"). It is used by
  the CRM, so never change it.
- **Results section** ("what changes after launch"): copy only. The template
  renders it static (owner: no animation there). Milestones use loose phases
  ("Launch week", "Month 1", "Months 2–3", a niche peak such as "Storm
  season" or "Back-to-school"), never numbers.

## Field-by-field guidance

| Field | Notes |
|---|---|
| `tones` | `tonesFor("<live-slug>")` from `../tones` (palettes are assigned there; unique per page). |
| `serviceName` / `audience` | e.g. "Plumbing Website Design" / "plumbers and plumbing companies". |
| `meta.keywords` | 10–14 terms from the appendix (no "avoid" terms). |
| `hero.lead` | `Rich`, 2 sentences: what the site does for this trade, a link to `/services/web-design` ("custom website") and "launches in 2–3 weeks". |
| `hero.cta` | Unique button text per page (e.g. "Get My Free Plumbing Site Mockup"). |
| `hero.bento` | `kind: "photos"`, photoA, photoB (appendix images; **look at both images** with the Read tool before choosing `position`). `query` = a short search phrase shown on the photo: use a real search term for the niche. cardA/cardB: icon + a 3–6-word growth title + a 4–8-word sub, both fresh (HVAC's were "Ranked in Every Town Served" / "Booked Jobs All Year Round"). Icons from `src/components/rd/industry/icons.tsx`. |
| `stage` | The interactive example site in the showcase section (see "Stage" below). |
| `showcase` | Title (fresh, keyworded) + one-line lead that tells people to switch modes. |
| `services` | `title` has one "\n" (two lines on desktop). 6 cards: icon, 3–6-word title, 1–2-sentence desc, 3 short points, `links` (0–2 live links each). Must be services **for this trade** (e.g. law: practice-area pages, intake forms; real estate: IDX search pages, seller valuation pages; towing: dispatch/roadside pages). |
| `features` | 8 "inside every site" items: icon, 3–6-word title, one sentence. |
| `growth` | 3 rows with an animated UI each. `rank`: rank climb card. `keywords` = 4 real niche searches as `[term, oldPos, newPos]`, positions only and illustrative (e.g. 21→3). `convert`: phone booking animation. `url` = example domain (same as stage.domain), `headline` = phone headline, 4 short service tiles. `ai`: AI Overview card. `query` = a natural question a customer asks AI, `intro` = answer opener ending before the business name (the template appends "Your … Co. stands out for:"), 3 bullets. Each row: title, `body` (Rich, 2 sentences), 4 points, cta. |
| `sitemap` | `home` = "Your … Co. homepage" style label; 4 groups (name, icon, 3 pages) = the real page structure for this trade. |
| `results` | title, lead, cta, 4 milestones, 4 wins (icon, title, text). Positive, specific to the trade, no numbers. |
| `process` | 4 steps over 2–3 weeks (`when`: "Week 1", "Weeks 1–2", "Weeks 2–3", "Launch"); fresh step names. |
| `compare` | `otherLabel` varies per page ("Template website", "DIY builder site", "Generic agency site", "Directory profile page" …). 6 rows with **trade-specific topics**. |
| `reviews` / `pricing` | Unique headings (see rules). |
| `faq` | 8–9 questions **people actually ask** about websites for this trade (use research: People Also Ask, forums). Must include cost (no figures), timeline (2–3 weeks), what the site should include, and a redesign/rankings question. Answers 40–70 words. |
| `consult` | Free homepage mockup offer: title, `Rich` lead with `/contact-us`, `/about`, `/services`, `/services/gbp-reinstatement-service` and the home-services or small-business link, 4 points, `form` (formType = slug; badge, title, subtitle, submitText, messageLabel, messagePlaceholder: all niche-worded). |
| `banner` | Closing title (unique) + one line. |

### Stage (the example site)

`stage` drives `heroes/SiteStage.tsx`: a browser with an example homepage
plus a phone, and a two-mode switch that restyles the whole site (mode 1 uses
tones[0], mode 2 tones[1]). Fields:

- `widget`: `"book"` (calendar slots), `"quote"` (estimate request: progress,
  ZIP, photos, contact preference), `"dispatch"` (tow request: map, location
  shared, driver status), `"case"` (case review: practice-area chips, "Tell us
  what happened", confidential note) or `"valuation"` (address field, chips,
  listing tiles). Use the widget given in the appendix.
- `switchLabel`: aria label, e.g. "Preview the example site by job type".
- `business`: "Your Plumbing Co.", "Your Dental Practice", "Your Law Firm",
  "Your Realty Team". Never a real name. `domain`: e.g. "yourplumbingco.com".
- `nav`: 4 short menu items. `call`: header call button ("Call 24/7", "Call
  the office"). `primary`/`secondary`: hero buttons. `proof`: a line next to
  stars ("Rated by local homeowners", "Trusted by local families"), no
  numbers. `bookTitle`: widget title ("Book a visit", "Get a free estimate",
  "Request a tow", "Free case review", "What's my home worth?"). `confirm`:
  widget button. `serviceSubs`: 3 subtitles under the service tiles.
- `toast`: phone confirmation title. `toastNote`: its second line after the
  first chip (e.g. "Today 10 AM", "Callback today", "Driver on the way").
  `phoneCta`: second sticky-bar button on the phone (≤ 7 characters: "Book",
  "Quote", "Review", "Tow").
- `modes`: 2 modes (label ≤ 18 characters, icon, badge, headline ≤ 48
  characters, sub ≤ 80 characters, 3 services, 3 `book` chips ≤ 16
  characters each). They must show **targeted landing pages** for the trade's
  two main demand types (see appendix).
- `legend`: what markers 1–4 point to: header call button, the mode badge /
  landing page, the widget, the phone's sticky bar. Word them for the trade.

## Research you must do (per niche)

The appendix gives Search Console queries (90 days, live page) and Semrush
US volumes. Add **web research** (WebSearch, 2–4 searches per niche): what
customers in this trade search for and expect on a website in 2026, trending
features (e.g. online booking, financing, AI answers, EV chargers, heat pumps,
battery storage, walk-in showers, IDX), and questions people ask about
websites for the trade. Use it to choose sections, features and FAQs. Put a
short research note at the top of each content file, like the HVAC file:
GSC, Semrush and the web findings. Do not quote or name any source company.

## Checks (run all; fix until clean)

Scripts are in the scratchpad
`/private/tmp/claude-501/-Users-niteshmaan-Desktop-zonic-media/5687465f-480a-41cb-8a01-b13eac3299b9/scratchpad/`
(`$S` below). The dev server is already running on http://localhost:3000.
**Do not start, stop or restart it.** If a request times out, wait 20 s and
retry; it restarts itself when memory runs high.

1. `npx tsc --noEmit -p .` (from the repo root) shows no errors in your files.
   Also run `npx eslint <your files>`.
2. `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/services/<slug>-2`
   returns 200.
3. **Duplicates:**
   `python3 $S/dupcheck.py http://localhost:3000/services/<slug>-2 <compare URLs…>`
   must print OK for every compare URL. Compare against: the live page, `/services/web-design-2`,
   `/services/hvac-website-design-2`, the niche's marketing draft and local
   SEO draft (appendix), `/services/seo-services-2`,
   `/services/local-seo-for-home-services-2`, and **every other web design
   draft in your group** (and any other `-website-design-2` page that already
   returns 200). Fix every shared 7-word run and identical heading by
   rewriting your copy.
4. **Lost ranking words:** `python3 $S/gsclost.py $S/wdn/gsc<GROUP>` prints
   nothing for your pages (any word printed is a word the live page ranks for
   that the draft dropped; work it into the copy naturally).
5. **H1 lines:** `node $S/h1lines.mjs http://localhost:3000/services/<slug>-2 "#ind-h1"`
   gives at most 3 lines at 1440 px.
6. **Overflow:** `node $S/lseo/ovf-patient.mjs http://localhost:3000/services/<slug>-2`
   reports no horizontal overflow at 390/768/1024.

## Report back

Per page: title, H1, primary and secondary keywords, stage modes and widget,
the 2 hero card titles, FAQ questions, the check results (with any
remaining issue) and anything you think the template needs.

---

## Appendix: per-niche data

Format: live title · live H1 · GSC (query~impressions~position) · Semrush US
(term volume/KD) · live links · images · widget and suggested modes · related
drafts to dupcheck. Every live page also links `/about`, `/contact-us`,
`/local-seo-google-business-optimization`, `/services`,
`/services/gbp-reinstatement-service`, `/services/web-design` (not repeated
below), plus the links listed per niche. `[small-biz]` = use
`/services/local-seo-for-small-business` instead of
`/services/local-seo-for-home-services`; otherwise keep
`/services/local-seo-for-home-services`.

Image folders: `/images/<x>-web/` (dedicated) or `/images/home-improvement-web/`.

### Group A: plumbing, electrical, appliance-repair, garage-door

**plumbing-website-design**
- Live: "Plumbing Website Design Company USA | Sites That Book Jobs" · H1 "Plumbing Website Design That Turns Emergency Searches into Booked Jobs".
- GSC: website design for plumbers long beach 65@22.5 · plumbing web design agency 50@33.7 · plumbing website design company 48@30.5 · plumbing web design company 38@32.9 · plumber web design company 29@29 · sewer repair website design 28@6.5 · plumber website design company 23@33.6.
- Semrush: plumbing websites 880/14 · plumber website design 590/23 · plumbing website design 590/19 · plumber websites 480/17 · plumbing web design 210/15.
- Links: /plumber-website-design-agency-us/offer, /services/google-ads, /services/industry/seo-services-for-plumber, /services/local-seo-for-home-services, /services/plumbing-marketing-agency.
- Images: `/images/plumbing-web/every-service-line-image.webp`, `/images/plumbing-web/hero-image-primary-v3.webp` (also first-impressions-img-1/2.webp).
- Stage: widget `book`. Modes: "Emergency" (burst pipe, no hot water, 24/7) vs "Planned work" (water heater install, repiping, drain service).
- Dupcheck also: /services/plumbing-marketing-agency-2, /services/industry/seo-services-for-plumber-2, /plumber-website-design-agency-us/offer.

**electrical-website-design**
- Live: "Electrician Website Design Company | Sites That Book Jobs" · H1 "Electrician Website Design That Turns Searches into Booked Jobs".
- GSC: electrician web design company 295@30.9 · electrical company web design services 286@22.2 · electrician web design services 268@19.9 · electrician website 268@28.1 · electrician websites 222@32.6 · electrician website design services 215@17.1 · electrician website design company 174@30.8 · website design agency for electrical companies 149@25.8 · electricians website design agency 149@28.3 · electrician website design agency 148@23.2 · electrical company websites 113@24.3 · electrician web design agency 112@33.4.
- Semrush: electrician websites 720/15 · electrician website design 480/19 · electrician web design 390/15 · electrical contractor website design 50/21 · electrical website design 40.
- Links: /electrician-website-design-agency-us/offer, /services/electrician-marketing-agency, /services/gmb-verification-help, /services/google-ads, /services/local-seo-for-home-services.
- Images: `/images/electrical-web/every-service-line-image.webp`, `/images/electrical-web/hero-image-primary-v2.webp`.
- Stage: widget `book`. Modes: "Repairs & safety" (outages, breakers, inspections) vs "Upgrades" (panel upgrades, EV chargers, generators).
- Dupcheck also: /services/electrician-marketing-agency-2, /services/industry/local-seo-for-electricians-2, /electrician-website-design-agency-us/offer.

**appliance-repair-website-design**
- Live: "Appliance Repair Website Design | Sites That Book Calls" · H1 "Appliance Repair Website Design That Turns Visitors into Booked Repairs".
- GSC: appliance repair website design 187@25.5 · appliance repair web design 173@23.7 · appliance repair web design services 145@19.6 · web design for appliance repair 52@24.7 · appliance repair web design company 45@20.7 · appliance repair website design agency 25@21.4.
- Semrush: appliance repair website design 110/11 · appliance repair web design 50/6 · appliance repair websites 40/53.
- Links: /services/gmb-verification-help, /services/google-ads, /services/industry/local-seo-for-appliance-repair, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/appliance-repair-hero-v2.webp`, `/images/home-improvement-web/appliance-repair-first-impressions-1.webp` (also -first-impressions-2, -responsive-preview-square).
- Stage: widget `book`. Modes: "Kitchen appliances" (fridge, oven, dishwasher) vs "Laundry" (washer, dryer).
- Dupcheck also: /services/appliance-repair-marketing-agency-2, /services/industry/local-seo-for-appliance-repair-2.

**garage-door-website-design**
- Live: "Garage Door Website Design | Repair Sites That Book" · H1 "Garage Door Website Design That Turns Visitors into Booked Jobs".
- GSC: garage door repair web design agency 110@22.8 · garage door repair web design company 93@24.3 · garage door repair web design services 68@21.1 · garage door web design 11@52.8 · website design agency for garage door companies 9@27.3 · garage door website design 7@36.4.
- Semrush: garage door web design 70 · garage door website design 70/10 · garage door websites 70/64.
- Links: /garage-door-website-design-agency-us/offer, /services/garage-door-marketing-agency, /services/google-ads, /services/industry/local-seo-for-garage-door-companies, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/garage-door-hero-v2.webp`, `/images/home-improvement-web/garage-door-first-impressions-1.webp`.
- Stage: widget `book`. Modes: "Same-day repair" (broken spring, off track, opener) vs "New doors" (install, insulated doors, openers).
- Dupcheck also: /services/garage-door-marketing-agency-2, /services/industry/local-seo-for-garage-door-companies-2, /garage-door-website-design-agency-us/offer.

### Group B: roofing, gutter-company, solar, window-and-door

**roofing-website-design**
- Live: "Roofing Website Design Company | Sites That Book Jobs" · H1 "Roofing Website Design That Turns Visitors into Booked Jobs".
- GSC: roofing website design agency 449@23.6 · roofing web design agency 440@35.2 · roofing web design company 195@35.1 · roofing company web design services 182@26.8 · roofing web design services 104@36.3 · website design roofing company 78@35.2 · roofing website design services 71@27.7 · siding company website design 43@30.1.
- Semrush: roofing website design 1,000/19 · roofing web design 720/19 · roofing websites 480/16 · roofer website design 210/18 · roofing company website 110/29.
- Links: /roofing-website-design-agency-us/offer, /services/google-ads, /services/industry/local-seo-for-roofing-companies, /services/local-seo-for-home-services, /services/roofing-marketing-agency.
- Images: `/images/roofing-web/every-roofing-vertical-image.webp`, `/images/roofing-web/hero-image-primary-v3.webp`.
- Stage: widget `quote`. Modes: "Storm damage" (inspections, insurance claims, tarping) vs "Replacement" (full re-roof, metal, shingles).
- Dupcheck also: /services/roofing-marketing-agency-2, /services/industry/local-seo-for-roofing-companies-2, /roofing-website-design-agency-us/offer.

**gutter-company-website-design** (ranks top 10 already: keep "gutter company website design" exactly in title + H1)
- Live: "Gutter Company Website Design | Sites That Book Estimates" · H1 "Gutter Company Website Design That Turns Visitors into Booked Installs".
- GSC: gutter company website design 94@7.6 · website design for gutter companies 50@4.7 · gutter website services 45@10.8 · website design agency for gutter contractors 44@5.6 · gutter website hosting 25@8.8.
- Semrush: gutter company website design 10 · gutter website design 10 (tiny; GSC matters more).
- Links: /services/gmb-verification-help, /services/google-ads, /services/industry/local-seo-for-gutter-companies, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/gutter-company-hero-v2.webp`, `/images/home-improvement-web/gutter-company-first-impressions-1.webp`.
- Stage: widget `quote`. Modes: "Gutter guards" vs "Seamless install" (or cleaning vs install).
- Dupcheck also: /services/gutter-marketing-agency-2, /services/industry/local-seo-for-gutter-companies-2.

**solar-website-design**
- Live: "Solar Website Design Agency | Sites That Book Consultations" · H1 "Solar Website Design That Turns Visitors into Booked Consultations".
- GSC: solar website development 10@49.5 · web design for solar companies 6@25.3 · website design agency for solar companies 5@23.4 · solar installer website design companies 4@20.8 · solar website design agency 3@21.3.
- Semrush: solar website design 170/15 · solar web design 140/36 · solar websites 170/67 (high KD) · solar company website design 0.
- Links: /services/google-ads, /services/industry/local-seo-for-solar-companies, /services/local-seo-for-home-services, /services/solar-marketing-agency, /solar-website-design-agency-us/offer.
- Images: `/images/home-improvement-web/solar-hero-v2.webp`, `/images/home-improvement-web/solar-first-impressions-1.webp`.
- Stage: widget `quote`. Modes: "Solar panels" vs "Battery storage" (or "Homes" vs "Businesses").
- Dupcheck also: /services/solar-marketing-agency-2, /services/industry/local-seo-for-solar-companies-2, /solar-website-design-agency-us/offer.

**window-and-door-website-design** (ranks ~8–14: keep "window and door web design" phrasing)
- Live: "Window & Door Company Website Design | Sites That Book Jobs" · H1 "Window and Door Website Design That Turns Browsers into Booked Installs".
- GSC: window and door web design services 149@8.5 · web design services for window and door companies 142@10 · web design for window companies 132@12.4 · website development services for window and door companies 74@13.8 · window and door installers web design 63@6.3 · window company web design 56@7.9 · window service web design 56@17.6 · website design for window and door companies 45@13.1 · window company website design 45@14.4.
- Semrush: window company website design 10 · window and door website design (no data).
- Links: /services/general-contractor-website-design, /services/google-ads, /services/industry/local-seo-for-window-and-door-companies, /services/local-seo-for-home-services, /services/painting-contractor-website-design.
- Images: `/images/home-improvement-web/window-and-door-hero.webp`, `/images/home-improvement-web/window-and-door-first-impressions-1.webp`.
- Stage: widget `quote`. Modes: "Replacement windows" vs "Entry & patio doors".
- Dupcheck also: /services/window-and-door-marketing-agency-2, /services/industry/local-seo-for-window-and-door-companies-2.

### Group C: bathroom-remodeling, kitchen-remodeling, general-contractor, flooring

**bathroom-remodeling-website-design**
- Live: "Bathroom Remodeling Website Design | Sites That Book" · H1 "Bathroom Remodeling Website Design That Turns Browsers into Booked Renovations".
- GSC: only bot-like long tail ("website design company providing websites for companies providing bathroom remodeling services near <town>"). Choose targets from Semrush.
- Semrush: bathroom remodeling website design 10 · remodeling website design 110/15 · remodeling websites 170/16 (shared with kitchen: bathroom leads with "bathroom remodeler websites" + "remodeling website design"; kitchen takes "remodeling websites").
- Links: /bathroom-remodeling-website-design-agency-us/offer, /services/flooring-website-design, /services/google-ads, /services/industry/local-seo-for-bathroom-remodelers, /services/kitchen-remodeling-website-design, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/bathroom-remodeling-hero.webp`, `/images/home-improvement-web/bathroom-remodeling-first-impressions-1.webp`.
- Stage: widget `quote`. Modes: "Full remodel" vs "Walk-in showers" (tub-to-shower and aging-in-place: a trending search).
- Dupcheck also: /services/bathroom-remodeling-marketing-agency-2, /services/industry/local-seo-for-bathroom-remodelers-2, /bathroom-remodeling-website-design-agency-us/offer.

**kitchen-remodeling-website-design**
- Live: "Kitchen Remodeling Website Design | Sites That Book Consults" · H1 "Kitchen Remodeling Website Design That Turns Browsers into Booked Renovations".
- GSC: bot-like long tail only.
- Semrush: kitchen remodeling website design 0 · kitchen website design 20 · remodeling websites 170/16.
- Links: /kitchen-remodeling-website-design-agency-us/offer, /services/bathroom-remodeling-website-design, /services/general-contractor-website-design, /services/google-ads, /services/industry/local-seo-for-kitchen-remodelers, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/kitchen-remodeling-hero.webp`, `/images/home-improvement-web/kitchen-remodeling-first-impressions-1.webp`.
- Stage: widget `book` (a design consultation / showroom visit, not an estimate form, so it differs from bathroom). Modes: "Full kitchen" vs "Cabinets & counters".
- Dupcheck also: /services/kitchen-remodeling-marketing-agency-2, /services/industry/local-seo-for-kitchen-remodelers-2, /kitchen-remodeling-website-design-agency-us/offer.

**general-contractor-website-design** (biggest opportunity in this group)
- Live: "General Contractor Website Design | Construction Websites" · H1 "General Contractor Website Design That Turns Browsers into Booked Projects".
- GSC: general contractor website 39@18.5 · website design for general contractors 28@37.1 · general contractor web design 16@22.3 · general contractor website design 13@29.2 · contractor website design 13@15.8.
- Semrush: contractor website design 1,900/27 · construction website design 880/19 · contractor websites 880/34 · general contractor website design 720/7 · general contractor websites 390/18 · construction company website design 320/26.
- Links: /services/google-ads, /services/industry/local-seo-for-general-contractors, /services/kitchen-remodeling-website-design, /services/local-seo-for-home-services, /services/window-and-door-website-design.
- Images: `/images/home-improvement-web/general-contractor-hero.webp`, `/images/home-improvement-web/general-contractor-first-impressions-1.webp`.
- Stage: widget `quote`. Modes: "Home projects" (additions, remodels, custom homes) vs "Commercial builds" (tenant build-outs, bids).
- Dupcheck also: /services/general-contractor-marketing-agency-2, /services/industry/local-seo-for-general-contractors-2.

**flooring-website-design**
- Live: "Flooring Website Design | Sites That Book Installs" · H1 "Flooring Website Design That Turns Browsers into Booked Installs".
- GSC: flooring website design 155@28.4 · flooring contractor website design 93@31.1 · flooring web design 72@31.5 · flooring company web design 49@31.3 · flooring company website design 46@31.8 · web design for flooring installation 44@25.7 · flooring company website builder 36@41.9 · flooring company web development 29@32.6 · web design services for flooring contractors 21@22.
- Semrush: flooring website design 210/13 · flooring web design 110/17 · flooring company website 20.
- Links: /flooring-website-design-agency-us/offer, /services/bathroom-remodeling-website-design, /services/google-ads, /services/industry/local-seo-for-flooring-companies, /services/local-seo-for-home-services, /services/painting-contractor-website-design.
- Images: `/images/home-improvement-web/flooring-hero.webp`, `/images/home-improvement-web/flooring-first-impressions-1.webp`.
- Stage: widget `book` (free in-home measure). Modes: "Hardwood" vs "Vinyl & tile".
- Dupcheck also: /services/flooring-marketing-agency-2, /services/industry/local-seo-for-flooring-companies-2, /flooring-website-design-agency-us/offer.

### Group D: painting-contractor, landscaping, tree-service, pool-service

**painting-contractor-website-design**
- Live: "Painting Contractor Website Design | Sites That Book Jobs" · H1 "Painting Contractor Website Design That Turns Browsers into Booked Paint Jobs".
- GSC: painting contractor website design 236@21.8 · painting contractor websites 212@15.8 · painting company website design 167@29 · web design for painting companies 141@29.7 · website for painting business 80@28.6 · website design for painting contractors 79@29.1 · best painting contractor websites 71@14.9 · painting contractor website 67@13.9 · web design for painting contractors 63@21.4.
- Semrush: painting contractor website design 170/27 · painting contractor websites 170/13 · painting company website design 140/6 · painter website design 30. AVOID "painting websites" (art intent).
- Links: /painting-contractor-website-design-agency-us/offer, /services/flooring-website-design, /services/google-ads, /services/industry/local-seo-for-painting-contractors, /services/local-seo-for-home-services, /services/painting-contractor-marketing-agency, /services/window-and-door-website-design.
- Images: `/images/home-improvement-web/painting-contractor-hero.webp`, `/images/home-improvement-web/painting-contractor-first-impressions-1.webp`.
- Stage: widget `quote`. Modes: "Interior" vs "Exterior" (or residential vs commercial).
- Dupcheck also: /services/painting-contractor-marketing-agency-2, /services/industry/local-seo-for-painting-contractors-2, /painting-contractor-website-design-agency-us/offer.

**landscaping-website-design**
- Live: "Landscaping Website Design Agency | Sites That Book Jobs" · H1 "Landscaping Website Design That Turns Browsers into Booked Projects".
- GSC: landscaping web design services 205@39.2 · landscaper web design services 151@42.5 · landscaping company web design services 100@37.6 · web design services for landscaping companies 81@43.4 · landscaping web design company 48@33.7 · web design for sod installation 39@14.4 · landscaping web design agency 38@42.5 · website design for landscaping companies 28@43.7 · landscaping website design agency 26@30.1.
- Semrush: landscaping websites 590/20 · landscaping website design 480/16 · landscaping web design 390/20 · lawn care website design 390/9 · landscaper website design 50/11.
- Links: /landscaping-website-design-agency-us/offer, /services/google-ads, /services/industry/local-seo-for-landscaping-companies, /services/landscaping-marketing-agency, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/landscaping-hero.webp`, `/images/home-improvement-web/landscaping-first-impressions-1.webp`.
- Stage: widget `quote`. Modes: "Design & hardscape" vs "Lawn care plans" (recurring maintenance).
- Dupcheck also: /services/landscaping-marketing-agency-2, /services/industry/local-seo-for-landscaping-companies-2, /landscaping-website-design-agency-us/offer.

**tree-service-website-design**
- Live: "Tree Service Website Design | Sites That Book Removals" · H1 "Tree Service Website Design That Turns Visitors into Booked Jobs".
- GSC: tree service web design company 49@26.6 · tree service web design agency 41@24.8 · tree service web design services 37@30.6 · tree service web design 35@36.9 · tree service web design experts 30@34.6 · tree service website design 14@35.1 · tree service website hosting 8@31.2.
- Semrush: tree service website design 210/3 (easy win) · tree service websites 70/67.
- Links: /services/gmb-verification-help, /services/google-ads, /services/industry/local-seo-for-tree-service-companies, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/tree-service-hero.webp`, `/images/home-improvement-web/tree-service-first-impressions-1.webp`.
- Stage: widget `book` (on-site assessment; differs from landscaping's quote). Modes: "Storm emergencies" vs "Trimming & removal".
- Dupcheck also: /services/tree-service-marketing-agency-2, /services/industry/local-seo-for-tree-service-companies-2.

**pool-service-website-design**
- Live: "Pool Service Website Design | Sites That Book Accounts" · H1 "Pool Service Website Design That Turns Visitors into Recurring Customers".
- GSC: pool services web design company 4@8.2 (very little).
- Semrush: pool builder website design 90/4 · pool service website design 50 · pool company website design 20.
- Links: /pool-service-website-design-agency-us/offer, /services/gmb-verification-help, /services/google-ads, /services/industry/local-seo-for-pool-service-companies, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/pool-service-hero.webp`, `/images/home-improvement-web/pool-service-first-impressions-1.webp`.
- Stage: widget `book`. Modes: "Weekly service" (route plans) vs "Repairs & openings" (pumps, filters, seasonal opening/closing).
- Dupcheck also: /services/pool-service-marketing-agency-2, /services/industry/local-seo-for-pool-service-companies-2, /pool-service-website-design-agency-us/offer.

### Group E: pest-control, commercial-cleaning, residential-cleaning

**pest-control-website-design**
- Live: "Pest Control Website Design Agency | Sites That Book Jobs" · H1 "Pest Control Website Design That Turns Panic Searches into Scheduled Service".
- GSC: pest control web design services 167@32.8 · website design for pest control companies 90@33.3 · pest control web design 77@36.6 · pest control services website design agency 69@31.1 · website design for pest control 68@36.7 · pest control website design services 56@28.7 · exterminator website design 52@28.4 · pest control website builder 49@39.4.
- Semrush: pest control web design 260/12 · pest control website design 260/16 · exterminator website design 70/12 · pest control websites 480/85 (high KD, secondary).
- Links: /services/google-ads, /services/industry/seo-services-for-pest-control, /services/local-seo-for-home-services, /services/pest-control-marketing-agency.
- Images: `/images/pest-control-web/every-service-line-image.webp`, `/images/pest-control-web/hero-image-primary-v2.webp`.
- Stage: widget `book`. Modes: "Active problem" (termites, bed bugs, rodents) vs "Protection plans" (quarterly service).
- Dupcheck also: /services/pest-control-marketing-agency-2, /services/industry/seo-services-for-pest-control-2.

**commercial-cleaning-website-design**
- Live: "Commercial Cleaning Website Design | Win More Contracts" · H1 "Commercial Cleaning Website Design That Turns Visitors into Signed Contracts".
- GSC: cleaning company web design company 33@39.6 · cleaning company web design agency 26@32.3 · cleaning company web design services 14@38 · cleaning company website design agency 10@33.8 · commercial cleaning web design company 5@27.8 · commercial cleaning website 5@37.4 · web design janitorial service 4@25.5.
- Semrush: cleaning company website design 140/23 · commercial cleaning website design 20 · janitorial website design 20. (Residential takes "house cleaning website design", "maid service website design" and "cleaning business website".)
- Links: /cleaning-company-website-design-agency-us/offer, /services/cleaning-company-marketing-agency, /services/google-ads, /services/industry/local-seo-for-commercial-cleaning, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/commercial-cleaning-hero-v2.webp`, `/images/home-improvement-web/commercial-cleaning-first-impressions-1.webp`.
- Stage: widget `quote` (walkthrough / bid request). Modes: "Offices" vs "Medical & industrial" (or "Janitorial contracts" vs "One-time deep cleans").
- Dupcheck also: /services/cleaning-company-marketing-agency-2, /services/industry/local-seo-for-commercial-cleaning-2, /cleaning-company-website-design-agency-us/offer.

**residential-cleaning-website-design**
- Live: "House Cleaning Website Design | Sites That Book Cleans" · H1 "House Cleaning Website Design That Turns Visitors into Booked Cleans".
- GSC: deep cleaning services web design services 6@18.5 · housekeeping web design services 5@24.4 · web design for deep cleaning 4@1 · cleaning company web design company 4@47.2.
- Semrush: cleaning business website 170/20 · house cleaning website 40/52 · house cleaning website design 20 · maid service website design 20.
- Links: /services/cleaning-company-marketing-agency, /services/google-ads, /services/industry/local-seo-services-for-residential-cleaning, /services/local-seo-for-home-services.
- Images: `/images/home-improvement-web/residential-cleaning-hero.webp`, `/images/home-improvement-web/residential-cleaning-first-impressions-1.webp`.
- Stage: widget `book` (instant booking). Modes: "Recurring cleans" vs "Deep & move-out".
- Dupcheck also: /services/cleaning-company-marketing-agency-2, /services/industry/local-seo-services-for-residential-cleaning-2.

### Group F: dental, chiropractor, pediatrician  `[small-biz]`

**dental-website-design** (largest volume after law)
- Live: "Dental Website Design Company | Sites That Book Patients" · H1 "Dental Website Design That Turns Visitors into Booked Patients".
- GSC: dental website design company 183@39.2 · dentist web design company 131@43.8 · dental website design companies 123@30.7 · dental web design company 110@31 · dental website design agency 106@39.9 · dental website design services 47@37 · dentist website design company 28@43.1 · dental web design services 13@40.7.
- Semrush: dental website design 2,900/26 · dental web design 1,900/27 · dental websites 1,600/33 · dentist website design 880/32 · dental practice website design 480/23.
- Links: /services/dental-marketing-agency, /services/industry/dental-seo-services, /services/industry/pediatricians, plus /services/local-seo-for-small-business (replaces the home-services link). The live page has no /services/google-ads link; you may add one.
- Images: `/images/dental-web/every-specialty-image.webp`, `/images/dental-web/hero-image-primary-v2.webp` (also hero-title-img-1/2, first-impressions-img-1/2).
- Stage: widget `book`. Modes: "New patients" (cleanings, exams, Invisalign-style aligners: say "clear aligners") vs "Emergency care" (toothache, broken tooth, same-day).
- Dupcheck also: /services/dental-marketing-agency-2, /services/industry/dental-seo-services-2.

**chiropractor-website-design**
- Live: "Chiropractic Website Design Company | Book More Patients" · H1 "Chiropractor Website Design That Turns Visitors into Booked Patients".
- GSC: chiropractic website design 324@45.1 · chiropractor website design 132@39.3 · chiropractor web design company 110@35.1 · chiropractor web design 110@40.3 · chiropractic web design 99@35 · website design for chiropractors 91@41.3 · chiropractic website companies 84@38.1 · custom chiropractic websites 66@57.3 · chiropractic websites 63@46.3.
- Semrush: chiropractic website design 480/9 (easy) · chiropractic websites 480/17 · chiropractic web design 320/17 · chiropractor website design 260/0.
- Links: /services/chiropractic-marketing-agency, /services/google-ads, /services/industry/chiropractor-local-seo-services, plus /services/local-seo-for-small-business.
- Images: `/images/home-improvement-web/chiropractor-hero.webp`, `/images/home-improvement-web/chiropractor-first-impressions-1.webp`.
- Stage: widget `book`. Modes: "Back & neck pain" vs "Auto & sports injury" (new-patient specials are common, but no prices).
- Dupcheck also: /services/chiropractic-marketing-agency-2, /services/industry/chiropractor-local-seo-services-2.

**pediatrician-website-design**
- Live: "Pediatric Website Design | Practice Sites That Book Families" · H1 "Pediatrician Website Design That Turns Visitors into New-Patient Families".
- GSC: pediatrician web design 25@31.2 · pediatric website design 14@54.1 · pediatrician website design 9@51.3 · website design for pediatrics 6@35.7 · website design agencies for pediatricians 5@13.4 · pediatric website design examples 5@37.4 · pediatric web design 4@61.8.
- Semrush: pediatric website design 260/8 · pediatrician website design 170/0 · medical practice website design 720/27 (secondary).
- Links: /services/gmb-verification-help, /services/google-ads, /services/industry/pediatricians, plus /services/local-seo-for-small-business.
- Images: `/images/home-improvement-web/pediatrician-hero-v2.webp`, `/images/home-improvement-web/pediatrician-first-impressions-1.webp`.
- Stage: widget `book`. Modes: "Well visits" (checkups, vaccines, sports physicals) vs "Sick visits" (same-day appointments).
- Dupcheck also: /services/pediatric-marketing-agency-2, /services/industry/pediatricians-2.

### Group G: law-firm, real-estate-agent, towing-company

**law-firm-website-design** `[small-biz]` (largest volume of all)
- Live: "Law Firm Website Design Company | Sites That Sign Cases" · H1 "Law Firm Website Design That Turns Visitors into Signed Cases".
- GSC: almost none.
- Semrush: law firm website design 4,400/35 · attorney website design 2,400/45 · lawyer website design 2,400/35 · law firm websites 1,900/62 · legal website design 1,600/41.
- Links: /services/google-ads, /services/industry/local-seo-for-law-firms, /services/law-firm-marketing-agency, plus /services/local-seo-for-small-business.
- Images: `/images/home-improvement-web/law-firm-hero-v2.webp`, `/images/home-improvement-web/law-firm-first-impressions-1.webp`.
- Stage: widget `case`. Modes: "Personal injury" vs "Family law" (practice-area landing pages). Bar-rule safe: no results promised.
- Dupcheck also: /services/law-firm-marketing-agency-2, /services/industry/local-seo-for-law-firms-2.

**real-estate-agent-website-design** `[small-biz]`
- Live: "Real Estate Agent Website Design | Sites That Win Clients" · H1 "Real Estate Agent Website Design That Turns Visitors into Buyer & Seller Leads".
- GSC: little (real estate website design 5@19.8, realtor web design texas 5@3.6, real estate brokerage websites 5@14.6).
- Semrush: real estate website design 1,900/40 · realtor website design 390/35 · real estate agent website design 320/32. AVOID "real estate websites" (9,900, portal intent).
- Links: /real-estate-website-design-agency-us/offer, /services/google-ads, /services/industry/real-estate-seo-services, /services/real-estate-marketing-agency, plus /services/local-seo-for-small-business.
- Images: `/images/home-improvement-web/real-estate-agent-hero.webp`, `/images/home-improvement-web/real-estate-agent-first-impressions-1.webp`.
- Stage: widget `valuation`. Modes: "Sellers" (home value, seller guide) vs "Buyers" (search homes, book a tour). Mention IDX/MLS search generically.
- Dupcheck also: /services/real-estate-marketing-agency-2, /services/industry/real-estate-seo-services-2, /real-estate-website-design-agency-us/offer.

**towing-company-website-design**
- Live: "Towing Company Website Design | Sites That Book Calls Fast" · H1 "Towing Company Website Design That Turns Searches into Ringing Phones".
- GSC: towing website design 154@17.4 · towing web design 52@16 · web design for roadside assistance 41@19.1 · web design for towing service 39@19.6 · towing website design agency 21@11 · towing company website design 21@17.6.
- Semrush: towing website design 110/18 · tow truck website 30 · towing company website design 20.
- Links: /services/gmb-verification-help, /services/google-ads, /services/industry/seo-services-for-car-towing, /services/local-seo-for-home-services, /towing-website-design-agency-us/offer.
- Images: `/images/home-improvement-web/towing-company-hero.webp`, `/images/home-improvement-web/towing-company-first-impressions-1.webp`.
- Stage: widget `dispatch`. Modes: "Roadside & towing" (lockouts, jump starts, flat tires) vs "Fleet & heavy-duty" (commercial accounts).
- Dupcheck also: /services/towing-marketing-agency-2, /services/industry/seo-services-for-car-towing-2, /towing-website-design-agency-us/offer.
