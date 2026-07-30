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
