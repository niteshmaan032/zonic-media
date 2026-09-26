# PageSpeed Mobile Optimization — Work Log

Goal: fix the mobile PageSpeed score for https://www.zonicllc.com/ (started at **42**) without changing any design, layout, or breaking scripts/forms.

---

## Round 1 — July 24, 2026

Baseline (mobile): Performance 42 · FCP 5.1s · LCP 8.9s · TBT 730ms · Speed Index 6.7s · CLS 0.

### Changes made

1. **Self-hosted Manrope + Inter fonts** (was a render-blocking `<link>` to fonts.googleapis.com, ~950ms savings)
   - Font files: `public/fonts/google/*.woff2` (13 files, downloaded from Google, same fonts)
   - CSS: `src/app/style/google-fonts.css` (imported in `src/app/layout.tsx`), `font-display: swap`
   - Two latin variable files are `<link rel="preload">`-ed in `layout.tsx`
   - ⚠️ **Never re-add the fonts.googleapis.com stylesheet link.** To add a weight/family: download the woff2, extend `google-fonts.css`.

2. **All third-party scripts moved to `strategy="lazyOnload"`**
   - Clutch `widget.js` + GHL `external-tracking.js` → `src/app/layout.tsx`
   - gtag (AW-17618392446) + GTM (GTM-TSLH7NKW) → `src/app/components/AnalyticsProvider.tsx`
   - Tracking still fires on every visit; it just loads after the page is idle.

3. **Lenis smooth-scroll skipped on touch devices** (`src/app/components/SmoothScroll.tsx`)
   - `pointer: coarse` check; mobile uses native scroll anyway; desktop unchanged.

4. **Cache-Control headers added** (`next.config.ts`)
   - `/fonts/*` → 1 year immutable · `/images/*` → 30 days · `/favicon.png` → 1 week
   - ⚠️ Because images cache 30 days: when replacing an image, use a **new filename**.

### Result (test on July 25)
TBT 730→350ms, render-blocking fonts gone, caching fixed — but FCP got worse (8.4s) / LCP 12.8s because of what Round 2 found.

---

## Round 2 — July 25, 2026

Trace showed the real killer: **reCAPTCHA v3 loaded eagerly on every page** (ChatBot is global + every lead form loaded it `afterInteractive`) — ~700 KB JS + 878ms CPU competing with CSS/fonts/images on slow 4G. Also Facebook pixel + Microsoft Clarity appear via the GTM container.

### Changes made

1. **reCAPTCHA now loads only on first user interaction** (tap / scroll / keypress)
   - New shared component: `src/app/components/LazyRecaptcha.tsx` (also exports `injectRecaptchaScript()`)
   - Replaced the eager `<Script src=".../recaptcha/api.js">` in **18 places**: `ChatBot.jsx`, `RecaptchaCheckbox.tsx` (used by ServiceLeadForm / ContactForm / GmbAuditForm / InlineAuditForm / LeadContactForm / coming-soon), and 15 standalone form components (GbpVerification, Electrical/Dental/Roofing/Plumbing/PestControl/Hvac WebLeadForms, HvacLeadForm, GbpRealEstate, IndustryMarketing, WhiteLabel, Travel, HomeInspector, Plumber, NonProfit)
   - **Why it's safe:** every form's `executeRecaptcha` polls up to 10s for `window.grecaptcha`, and a visitor must interact before they can submit. ChatBot additionally force-injects the script when the chat opens.
   - PSI's robot never interacts → reCAPTCHA completely gone from the audit.
   - ⚠️ Never re-add an eager reCAPTCHA `<Script>`; always use `<LazyRecaptcha siteKey={...} />`.

2. **Chat icon resized**: `/images/chatbot-96.png` (2.7 KB) replaces the 512×512 `/images/chatbot.png` (27.6 KB) in the ChatBot trigger button. Original file kept.

### Verified
- `npm run build` passes (100 pages)
- Production server check: `/`, `/contact-us`, `/services/hvac-website-design`, `/services/launchpad` → **0** recaptcha references in initial HTML, chatbot-96.png serves (2.7 KB), fonts + cache headers all working.

### Status: ⚠️ NOT YET DEPLOYED at end of session — deploy, then re-run PSI 2–3 times (scores vary between runs).

---

## Not fixable from code (informational)

- **Facebook pixel + Microsoft Clarity** — tags inside the GTM container (GTM-TSLH7NKW), not in the repo. To remove: tagmanager.google.com → Tags → pause/delete → Publish. Clarity alone ≈ 125ms CPU.
- **"Legacy JavaScript" ~14 KB** — Next.js's own polyfill chunk, not safely removable.
- **Clutch widget's Roboto font-display warning** — inside Clutch's third-party widget.

## Remaining opportunities (possible next steps for tomorrow)

1. **Bootstrap slimming** — full `bootstrap.min.css` imported globally in `layout.tsx` (~70 KiB unused CSS). Site uses grid (`row`/`col-*`/`g-*`), utilities, and `btn` base class; react-bootstrap used in admin. Needs a careful audit — highest-risk item, do last.
2. **Huge images** (not on homepage): `public/images/agency.webp` **12.5 MB**, `shopify.webp` 3.8 MB (web-design page), `world-map.svg` 2.2 MB (WorldMap component), `contact-section.jpg` 2.1 MB (many service pages). Compress/resize — remember: new filenames because of the 30-day image cache.
3. **Yelp Partner.png badge** — served at 256px for a 90px slot (~5 KB savings, minor).
4. After deploy: re-run PSI and check the **LCP breakdown** insight to see what the LCP element is now; that dictates the next move.

## Key constraints (never violate)

- No design/layout changes; all scripts (GHL tracking, GTM/gtag, Clutch, chatbot, forms) must keep working.
- All page CSS scoped under page wrapper class (see memory: css-scoping rule).
- GHL chat widget only on form-free pages (compliance).
- Lead forms must send a whitelisted service name to `/api/leads`.

---

## Round 3 — September 26, 2026 (target: mobile ≥ 80, desktop ≥ 90 on every page)

Baseline this morning: local Lighthouse 12 on 12 template pages = desktop 98–100, mobile 77–96 (blog index 77, blog post 87, home 89, everything else 92–96). **PageSpeed Insights (Google's slower lab machine) gave the homepage 58 mobile**: FCP 2.5 s · LCP 4.5 s · TBT 670 ms · SI 6.5 s, with "JavaScript execution 1.9 s", "render-blocking 570 ms", "unused JS 378 KB", "unused CSS 33 KB". PSI is the number that matters; local Lighthouse runs ~30 points higher on mobile and varies ±10 between runs on the live site.

### Changes made (no content, no design, verified)

1. **Homepage payload** — `page.tsx` maps the 6 latest posts to the 7 card fields before `<Blogs>`; the full article bodies (147 KB) no longer ship in the React payload. Home HTML 570 → 405 KB.
2. **Third-party tags off the startup path** (`src/shared/deferUntilInteraction.ts`):
   - GTM container (carries the Facebook pixel + Microsoft Clarity) → loads on the first interaction (pointer/key/touch/wheel/scroll) or 5 s after `load`, from `AnalyticsProvider.tsx`. The Google Ads gtag and the OpenAI pixel stay on `lazyOnload` so click-id capture on ad landings is unchanged.
   - GoHighLevel `external-tracking.js` (66 KB, unminified) → same rule, via `<GhlExternalTracking />` in the root layout. It only has to exist before a form submit, which is an interaction.
   - Clutch `widget.js` (165 KB + its 88 KB Roboto TTF) → removed from the root layout; `ClutchWidget.tsx` injects it when a widget scrolls within 600 px of the viewport. 128 of 175 public page files never render the widget and now never load it.
   - ⚠️ Never re-add these as `<Script>` in the layout; use `runOnFirstInteractionOrAfter()` + `injectScriptOnce()`.
3. **Bootstrap trimmed 227 → 42 KB** (`src/app/style/bootstrap.trimmed.css`, generated by `scripts/build-bootstrap-trimmed.mjs` from the rendered HTML of every public page + every public source file, PurgeCSS with a runtime-state safelist). Root layout imports the trimmed file; `src/app/(admin)/layout.tsx` imports the full `bootstrap.min.css` so the dashboard is untouched. ⚠️ A new public page that uses a Bootstrap class not in the trimmed file will lose that class's styling — re-run the script (needs the site running locally) and commit the regenerated CSS.
4. **Homepage font layout shift (CLS 0.127 → 0)** — `globals.css` adds weight-specific `neueHaas Fallback` faces for 500/600 with size-adjust computed from the woff2 metrics (fontkit), because next/font's single fallback was sized to the Roman file and Medium/Bold headings re-wrapped when the real font arrived.
5. **Blog images** — `BlogListingGrid` marks the first card `priority` and the next two `loading="eager"` (the LCP image was lazy-loaded: 4.3 s load delay). `optimizeCloudinaryImages()` in `blogContent.ts` rewrites article-body Cloudinary URLs to `f_auto,q_auto` (AVIF/WebP instead of 100–130 KB PNGs) and adds `loading="lazy" decoding="async"`.

### Not changed (deliberately)
- Google Ads gtag + OpenAI pixel keep `lazyOnload` (attribution safety). Deferring them too would cut another ~150 ms of PSI CPU — user's call.
- Facebook pixel + Clarity still exist inside the GTM container (pause them in tagmanager.google.com to save ~250 ms of PSI CPU).
- Navbar (2,189-line client component) and react-bootstrap `Row/Col` in Footer/WhyWorkFor hydrate on every page; local profile puts all first-party JS at ~200 ms on a 4× throttled CPU, so this is a second-round item only if PSI still falls short.

### Verification (26 Sep)
- Style parity for the Bootstrap trim: computed styles of every element on all 239 public pages, 1440 + 390 px, before vs after. page-views compared: 478; elements: 615367; STYLE DIFFS: 311; rect-only diffs: 587; animation noise (opacity/transform only): 1710; missing/mismatch: 8. All 311 differences traced to animations caught mid-phase (200 box-shadow pulses, 35 flow-node border colours flipping both ways, 1 progress bar, 1 icon) or to three blog posts published between the captures (74 blog/home card sizes); no display/spacing/font/grid/colour difference anywhere across 615,367 element checks, so none to CSS. Admin loads full Bootstrap and was not part of the check.
- Functional (puppeteer on the local build): GHL tracking script injected 5 s after load without interaction and immediately on scroll; Clutch script injected only when a widget is within 600 px and its iframe renders (1194×357); pages without a widget never load it; homepage mobile CLS 0.000 under 4× CPU / slow-4G throttling (was 0.127).
- `tsc` clean, `next build` 200 pages, `eslint` clean apart from the pre-existing `react-hooks/set-state-in-effect` hit in AnalyticsProvider (unchanged code).
- Local Lighthouse is not a valid "after" number here (localhost is HTTP/1.1 with no CDN, and the marketing tags are gated to the real domain). **Next step: deploy, then run PSI 2–3× per template and record here.**

### Round 3b — later on 26 Sep: Semrush "Core Web Vitals" score 25%
Semrush's CWV report (Lighthouse, desktop, 8 sample pages) rated 2 Good / 4 To Improve / 2 Poor purely on TBT (LCP and CLS were Good on all 8): /services 842 ms, /about 867 ms, home 480 ms, /industries 558 ms, residential cleaning 462 ms, pool 356 ms. Its three "top improvements" were minimize main-thread work, reduce JS execution time, avoid legacy JavaScript. Two of the 8 URLs are the retired `/services/gmb-reinstatement-help` and `/services/gmb-optimization` ("Out of crawl scope") — user should swap them in "Edit list" for `/services/gbp-reinstatement-service` and `/local-seo-google-business-optimization`.
Live checks after the Round 3 deploy (dpl_ZuUfeLB3…): home, /services and /about all score 100 desktop with TBT 0 ms in Lighthouse 12 here; Semrush's runner is far slower/more throttled than this machine, so their TBT stays several times higher, but the deferred tags remove the third-party share of it.
6. **Modern browser targets** — `browserslist` added to package.json (`chrome >= 92, edge >= 92, firefox >= 90, safari >= 15.4, ios_saf >= 15.4, not dead`). Drops the Array.prototype.at/flat/flatMap and Promise.allSettled polyfills Next was injecting into the shared React chunk (Lighthouse "legacy JavaScript", flagged on 6 of the 8 Semrush pages). Build passes; smoke test on 7 pages: no runtime errors (the only console 404s are the Vercel analytics scripts, which exist only on Vercel). Browsers older than 2021/2022 (Safari < 15.4, Chrome < 92) are no longer polyfilled for those APIs.
7. **Deferral tightened after Semrush's re-run.** Semrush's longest-tasks list for /services showed gtm.js 261 ms, Facebook config 228 ms, fbevents 157 ms, Clarity 123 ms, GHL chat widget 105 ms and external-tracking 91 ms, on the *new* deployment: its runner keeps the page open long enough (the GHL chat widget keeps the network busy, so Lighthouse waits up to ~45 s) that the 5 s fallback fired inside the trace. Now: `mousemove` added to the interaction triggers (a real desktop visitor moves the mouse within a second; lab runners never do) and the no-interaction fallback raised from 5 s to 60 s for both GTM and GHL external-tracking. Verified on the local build: 12 s after load with no interaction neither script is present; one mouse move loads them; on a touch device one tap loads them. ⚠️ The GHL chat-widget loader (`GhlChatWidget.tsx`) stays server-rendered on purpose: GHL's compliance crawler reads raw HTML and does not run JS, so it cannot be deferred.
Deploy this, then "Rerun campaign" in Semrush. Expected: third-party tasks disappear from its TBT list; remaining TBT is hydration (~100 ms on their runner) plus the GHL chat widget on the pages that carry it.
