import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import "@/app/style/gbpLanding.css";
import "@/app/style/gmbRein.css";

import GbpAppealLeadForm from "@/app/components/GbpAppealLeadForm";
import HashScrollLink from "@/app/components/HashScrollLink";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

/* ---------------------------------------------------------------------------
   POSITIONING — read this before editing the copy.

   This page is deliberately NOT a second "GMB reinstatement service" page.
   /services/gmb-reinstatement-help owns that head term and the first-time
   suspension intent. This page owns the *escalation* intent only:

     · "Google Business Profile appeal rejected / denied"
     · "profile disabled after failed appeals"
     · "suspended again after being reinstated"
     · multi-location and agency portfolios

   Keep every H1/H2 and the metadata on that side of the line, and always link
   UP to /services/gmb-reinstatement-help using the head term as anchor text so
   the head term consolidates on the hub instead of splitting across two URLs.

   TYPE + CHROME come from gbpLanding.css (.gbp-lp) — shared with the other two
   GBP landing pages. Don't reintroduce local font/heading rules here.
--------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: {
    absolute: "Google Business Profile Appeal Rejected? Second-Appeal Help",
  },
  description:
    "Google denied your reinstatement appeal? We take over rejected GBP appeals, disabled profiles and multi-location suspensions. Free case review. No Fix, No Charge.",
  keywords: [
    "Google Business Profile appeal rejected",
    "GMB reinstatement appeal denied",
    "second appeal Google Business Profile",
    "Google Business Profile disabled",
    "reinstatement appeal rejected multiple times",
    "Google Business Profile suspended again after reinstatement",
    "GBP appeal escalation",
    "GMB reinstatement agency",
    "multi-location Google Business Profile suspension",
    "bulk GBP reinstatement",
    "white label GMB reinstatement for agencies",
    "profile removed from Google Maps",
  ],
  alternates: { canonical: "/gmb-reinstatement-service-agency" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Google Business Profile Appeal Rejected? Second-Appeal Help",
    description:
      "Rejected appeal, disabled profile, or several locations down at once? Zonic Media takes over complex GBP reinstatement cases. Free case review, No Fix, No Charge.",
    url: "/gmb-reinstatement-service-agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Profile Appeal Rejected? Second-Appeal Help",
    description:
      "We take over rejected GBP appeals, disabled profiles and multi-location suspensions. Free case review. No Fix, No Charge.",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  {
    name: "GBP Appeal Rejected — Second-Appeal Help",
    url: "/gmb-reinstatement-service-agency",
  },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.zonicllc.com/gmb-reinstatement-service-agency#service",
  name: "Google Business Profile Appeal Escalation & Complex Case Reinstatement",
  alternateName: [
    "Rejected GBP appeal recovery",
    "Second appeal Google Business Profile",
    "Disabled Google Business Profile recovery",
    "Multi-location GBP suspension recovery",
  ],
  serviceType: "Google Business Profile appeal escalation",
  description:
    "Zonic Media takes over Google Business Profile cases that have already failed at least one appeal: rejected reinstatement requests, profiles disabled after repeated DIY attempts, listings suspended again shortly after reinstatement, and multi-location portfolios with several suspended profiles. Every case starts with a free review of the rejection wording and an honest read on the odds, and is backed by a No Fix, No Charge policy on the reinstatement fee.",
  url: "https://www.zonicllc.com/gmb-reinstatement-service-agency",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    telephone: "+1-302-726-9736",
    email: "contact@zonicllc.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Businesses and marketing agencies whose Google Business Profile reinstatement appeal has already been rejected",
  },
  isRelatedTo: {
    "@type": "Service",
    "@id": "https://www.zonicllc.com/services/gmb-reinstatement-help#service",
    name: "GMB Reinstatement Service",
  },
  offers: {
    "@type": "Offer",
    name: "Free rejected-appeal case review",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free review of the rejected appeal and Google's rejection wording, with a No Fix, No Charge policy on the reinstatement fee.",
  },
};

/* ----------------------------------------------------------------- content */

// Rendered twice back to back — the track animates to -50%, so the second
// copy is what makes the loop seamless.
const tickerItems = [
  <>
    <b>700+</b> Google Business Profiles reinstated &amp; verified
  </>,
  <>
    ★ <b>5.0</b> rating on Clutch
  </>,
  <>
    <b>No Fix, No Charge</b> on the reinstatement fee
  </>,
  <>Rejected appeals &amp; disabled profiles</>,
  <>Multi-location &amp; agency portfolios</>,
  <>US-based specialists · Dover, DE</>,
];

const navLinks = [
  { href: "#gbr-decoder", label: "Rejection decoder" },
  { href: "#gbr-why", label: "Why appeals fail" },
  { href: "#gbr-ladder", label: "Escalation" },
  { href: "#gbr-pricing", label: "Pricing" },
  { href: "#gbr-faq", label: "FAQ" },
];

const appealLog = [
  {
    state: "is-fail",
    id: "APPEAL 01 · filed by owner",
    title: "Generic appeal form, no supporting documents",
    status: "Rejected",
  },
  {
    state: "is-fail",
    id: "APPEAL 02 · filed by owner",
    title: "Resubmitted the same case four days later",
    status: "Rejected",
  },
  {
    state: "is-fail",
    id: "APPEAL 03 · filed by a freelancer",
    title: "Violation still live on the profile at submission",
    status: "Rejected",
  },
  {
    state: "is-work",
    id: "CASE REVIEW · Zonic Media",
    title: "Rejection wording traced to an unresolved duplicate listing",
    status: "Root cause found",
  },
  {
    state: "is-win",
    id: "APPEAL 04 · filed by Zonic Media",
    title: "Duplicate resolved, evidence pack attached, appeal re-filed",
    status: "Reinstated",
  },
];

const decoder = [
  {
    quote:
      "Your business does not comply with our guidelines. We are unable to reinstate this listing.",
    heading: "A Live Violation is Still on the Profile",
    body: "This is the catch-all rejection. It almost never means the case is unwinnable — it means Google reviewed the profile as it exists right now and still found something that breaks policy: a keyword in the business name, a category that doesn't match the licence, or an address that can't be occupied by this business.",
    fix: "We audit the profile against current guidelines, remove the violation, wait out the indexing delay, and only then re-file — with a before-and-after record showing the fix.",
  },
  {
    quote:
      "We could not verify that your business operates at the address provided.",
    heading: "An Address or Occupancy Problem, Not a Conduct Problem",
    body: "Google's reviewers could not tie your business to that address. Coworking suites, virtual offices, a unit number that Street View can't confirm, or a service-area business showing a residential address all land here — and so does a perfectly legitimate address with no visible signage.",
    fix: "We rebuild the occupancy evidence (lease or deed, utility bill, insurance certificate, dated signage photos), correct the address configuration first, then appeal.",
  },
  {
    quote: "This account has been suspended.",
    heading: "The Suspension is on the Account, Not the Listing",
    body: "The most misread rejection of all. When the Google account itself is flagged, appealing the listing does nothing — the listing appeal is closed automatically. Businesses spend weeks re-filing listing appeals that were never going to be read.",
    fix: "We identify whether the flag sits on the listing, the account, or the organisation, and file on the correct track. Wrong track means an automatic no, every time.",
  },
  {
    quote: "Your business is a duplicate of an existing Business Profile.",
    heading: "Another Listing is Claiming Your Place on the Map",
    body: "There is a second profile for the same business — often created by a previous owner, a former agency, an aggregator feed, or you, during an earlier failed appeal. Until the conflict is resolved, every appeal on the suspended profile is dismissed.",
    fix: "We find every duplicate across the account and public map data, resolve or merge them in the right order, and appeal once the map shows a single entity.",
  },
  {
    quote:
      "We are unable to reinstate this profile at this time. This decision is final.",
    heading: "The Current Appeal Thread is Closed — Not the Case",
    body: "\"Final\" refers to that appeal thread, not the profile's lifetime eligibility. What it does mean is that filing again through the same form, with the same information, will be dismissed without a human reading it.",
    fix: "We change what is materially true about the case before re-filing, and route it through a different channel with a new evidence package rather than resubmitting the same request.",
  },
  {
    quote: "Your Business Profile has been disabled.",
    heading: "The Listing Has Been Removed from Maps Entirely",
    body: "Disabled sits a level above suspended, and it usually follows a run of failed appeals. Recovery is slower and the evidence bar is higher, but disabled profiles are still recovered regularly — provided nobody creates a replacement listing in the meantime.",
    fix: "We treat these as documentation cases: registration, tax and licence records, operating history and premises evidence, assembled before a single form is submitted.",
  },
];

const whyDenied = [
  {
    n: "01",
    title: "The Appeal was Filed Before the Violation was Fixed",
    body: "The single most common reason. Google reviews the profile in its current state, not your explanation of it. If the keyword is still in the business name when a reviewer opens the case, the appeal is denied no matter how well it was written.",
  },
  {
    n: "02",
    title: "The Wrong Appeal Form was Used",
    body: "There are separate paths for listing suspensions, account-level suspensions, verification failures and ownership disputes. A listing appeal filed on an account-level suspension is closed automatically — which reads to the owner as a rejection on the merits.",
  },
  {
    n: "03",
    title: "Nothing Changed Between Submissions",
    body: "Re-filing the same case with the same wording and the same evidence trains the system to dismiss it faster. Each identical resubmission lowers the chance a human ever reads the thread.",
  },
  {
    n: "04",
    title: "The Documentation Didn't Prove What the Reviewer Needed",
    body: "A business card and a website screenshot don't establish occupancy. Reviewers are looking for records that independently tie the legal entity to the address — a lease, a utility bill, a licence, an insurance certificate — in the name on the profile.",
  },
  {
    n: "05",
    title: "The Appeal Came from an Account Without Ownership Rights",
    body: "Appeals filed from a manager-level account, an old agency account, or an email that was never the primary owner carry far less weight. Sorting out ownership before appealing changes the outcome more often than the wording of the appeal does.",
  },
  {
    n: "06",
    title: "A Replacement Listing was Created Mid-Appeal",
    body: "Creating a new profile while the original is under appeal ties the two together through address, phone and account signals. The new listing is usually suspended too, and the original case gets materially harder to win.",
  },
];

const ladder = [
  {
    step: "01",
    owner: true,
    title: "The Standard Reinstatement Request",
    body: "The public appeal form every owner starts with. It works well for straightforward first-time cases — which is exactly why re-filing it unchanged after a rejection so rarely does anything.",
    tags: ["Where most owners stop", "Automated triage first"],
  },
  {
    step: "02",
    title: "A Re-File with Materially New Evidence",
    body: "A fresh submission that references the prior case, states plainly what changed on the profile since the rejection, and attaches evidence that wasn't in the first package. The change is the reason a human looks again.",
    tags: ["New evidence required", "Prior case referenced"],
  },
  {
    step: "03",
    title: "Support Escalation with a Case ID",
    body: "Working the existing case ID through Google Business Profile support rather than opening new threads — keeping one reviewable history instead of a scatter of duplicate requests that compete with each other.",
    tags: ["One thread", "Case history preserved"],
  },
  {
    step: "04",
    title: "Product-Expert and Forum Escalation",
    body: "Public escalation channels where documented, well-presented cases can be picked up for a second look. Useless for a thin case; genuinely effective for a case with a clean paper trail behind it.",
    tags: ["Public record", "Documentation-led"],
  },
  {
    step: "05",
    title: "Rebuild, Then Re-Approach",
    body: "When every channel is exhausted, the answer is rarely a new listing at the same address. We stabilise what's recoverable, fix the underlying entity data, and re-approach on a timeline — and we tell you if that's where your case sits.",
    tags: ["Last resort", "Honest read on the odds"],
  },
];

const stopList = [
  {
    title: "Don't Create a Replacement Listing",
    body: "Google links it to the suspended profile through address, phone and account signals. The new listing usually gets suspended too, and the original case becomes harder to win.",
  },
  {
    title: "Don't File Another Identical Appeal",
    body: "Repeat submissions with nothing new attached get dismissed faster each time. Wait until something about the case has genuinely changed.",
  },
  {
    title: "Don't Edit the Name, Address or Phone Right Now",
    body: "Core-field edits during an open appeal look like evasion to the review system. Any correction needs to be sequenced deliberately, not made in a panic.",
  },
  {
    title: "Don't Remove the Previous Owner from the Account",
    body: "Ownership history is evidence. Strip it out mid-case and you lose the record that proves continuity of the business.",
  },
  {
    title: "Don't Buy a \"Guaranteed Reinstatement\"",
    body: "Nobody outside Google can guarantee the decision. What an honest provider can promise is the process — and that you aren't charged a reinstatement fee if the profile doesn't come back.",
  },
];

const agencyCards = [
  {
    title: "Portfolio Triage First",
    body: "With several profiles down, order matters. We rank the portfolio by recoverability and revenue impact, and work the winnable cases first instead of filing everything at once.",
  },
  {
    title: "Shared-Cause Detection",
    body: "Multi-location suspensions usually trace to one shared trigger — a bulk edit, a template naming convention, a chain-wide category change. Fix the pattern and the individual cases get much easier.",
  },
  {
    title: "White-Label Reporting",
    body: "Agencies get per-location status reporting they can put their own logo on, plus a single point of contact instead of a separate thread per listing.",
  },
];

const pricing = [
  {
    name: "Second Appeal",
    price: "400",
    from: "Flat fee, quoted after the free case review",
    desc: "One profile, one prior rejection. The standard path back for a case that failed on documentation or sequencing.",
    features: [
      { text: "Rejection wording decoded", dim: false },
      { text: "Prior appeal history reviewed", dim: false },
      { text: "Root-cause fix before re-filing", dim: false },
      { text: "Evidence package built for you", dim: false },
      { text: "Escalation if the re-file stalls", dim: false },
      { text: "Full profile optimization", dim: true },
      { text: "30-day compliance monitoring", dim: true },
    ],
    btn: "Start a second appeal",
    note: "No Fix, No Charge on the reinstatement fee",
    featured: false,
  },
  {
    name: "Disabled Profile Recovery",
    price: "497",
    from: "Flat fee, quoted after the free case review",
    desc: "Profiles disabled after repeated failed appeals, or reinstated once and suspended again. Higher evidence bar, longer runway.",
    features: [
      { text: "Everything in Second Appeal", dim: false },
      { text: "Account vs listing suspension diagnosis", dim: false },
      { text: "Full duplicate and ownership audit", dim: false },
      { text: "Legal-entity documentation package", dim: false },
      { text: "Post-reinstatement optimization", dim: false },
      { text: "Repeat-suspension prevention audit", dim: false },
      { text: "30-day compliance monitoring", dim: false },
    ],
    btn: "Start a recovery case",
    note: "No Fix, No Charge on the reinstatement fee",
    featured: true,
    badge: "Most complex cases",
  },
  {
    name: "Agency / Multi-Location",
    price: "197",
    per: "/loc",
    from: "Volume rate, minimum 3 locations",
    desc: "For agencies and brands with several suspended profiles. Shared-cause diagnosis and one point of contact across the portfolio.",
    features: [
      { text: "Everything in Disabled Profile Recovery", dim: false },
      { text: "Portfolio triage and sequencing", dim: false },
      { text: "Shared-cause pattern analysis", dim: false },
      { text: "Cross-location duplicate audit", dim: false },
      { text: "Dedicated account manager", dim: false },
      { text: "White-label status reporting", dim: false },
      { text: "Agency partner program access", dim: false },
    ],
    btn: "Get an agency quote",
    note: "Min. 3 locations · Custom onboarding",
    featured: false,
  },
];

const faqs = [
  {
    q: "Google said the decision was final. Is the profile gone for good?",
    a: "No. \"Final\" applies to that appeal thread, not to the profile's lifetime eligibility. What it does mean is that re-filing the same request through the same form will be dismissed without a human reading it. Something about the case has to materially change first — the violation removed, the duplicate resolved, ownership corrected, or new occupancy evidence attached — and then it goes through a different channel. That sequence is most of what we do here.",
  },
  {
    q: "How many times can a Google Business Profile appeal be rejected before it's unrecoverable?",
    a: "There's no published limit, and we've recovered profiles that had been rejected four and five times before we saw them. What matters far more than the count is whether anything changed between attempts. Five identical resubmissions are much harder to come back from than two rejections followed by a properly fixed and documented third attempt, because repeat identical filings train the triage system to dismiss the thread.",
  },
  {
    q: "Does a rejected appeal make it harder to get reinstated later?",
    a: "It makes it harder, not impossible. Each rejection adds history to the case, and identical resubmissions add the most. Two things do real damage: creating a replacement listing while the original is under appeal, and repeatedly editing the business name, address or phone number mid-case. If you've done either, tell us — it changes the strategy, and it's better to know upfront than to discover it after we file.",
  },
  {
    q: "My profile was reinstated and then suspended again weeks later. Why?",
    a: "Because the reinstatement fixed the symptom and not the trigger. Recurring suspension almost always traces to one of three things: a duplicate listing that was never resolved, business data that doesn't match across your website, licence and other directories, or a category that conflicts with what the profile actually does. Until that's corrected, the profile will keep tripping the same automated check. We treat repeat suspensions as root-cause cases, not as another appeal.",
  },
  {
    q: "What's the difference between a suspended and a disabled Google Business Profile?",
    a: "A suspended profile has lost its visibility or your management access, but it still exists in Google's system and can be appealed on the standard track. A disabled profile has been removed from Maps and Search entirely, usually after a run of failed appeals. Disabled cases take longer and need a far stronger documentation package — registration and tax records, licences, premises evidence, operating history — but they're recovered regularly, as long as nobody has created a replacement listing at the same address.",
  },
  {
    q: "Can you take over a case another agency already failed?",
    a: "Yes, and it's a large share of the work here. We ask for the full history: what was submitted, when, from which account, and the exact rejection wording each time. That history is diagnostic — the pattern of rejections usually tells us which review track the case is on and what the previous attempts never addressed.",
  },
  {
    q: "We have several locations suspended at once. Is that handled differently?",
    a: "Yes. Multi-location suspensions usually share one trigger — a bulk edit pushed across the portfolio, a naming convention that breaks guidelines chain-wide, or a category change applied everywhere. Filing every location at once repeats the same mistake in parallel. We diagnose the shared cause, fix it across the portfolio, then sequence the appeals by recoverability and revenue impact.",
  },
  {
    q: "What do you need from us to start?",
    a: "The business name and address as they appear on the profile, the exact wording of Google's rejection, roughly when each appeal was submitted and from which account, and whether any listing was created or edited since. If you still have the rejection email, paste it into the form — the specific phrasing tells us which review team handled it, which shapes the whole approach.",
  },
  {
    q: "How long does an escalated case take compared with a standard reinstatement?",
    a: "A straightforward first-time case through our GMB reinstatement service typically resolves in five to seven business days. Escalated cases run longer — usually ten to fourteen business days, and longer again for disabled profiles or portfolios, because the fix has to be in place and indexed before the appeal is worth filing. You get a realistic timeline at the case review, before you pay anything.",
  },
  {
    q: "What does it cost, and what happens if you can't get it back?",
    a: "The case review is free. After it, we quote a flat fee based on complexity — second appeals start at $400, disabled-profile recovery at $497, and multi-location work is priced per location from $197 with a three-location minimum. Every engagement carries No Fix, No Charge on the reinstatement fee: if the profile doesn't come back, that fee isn't charged. Full terms are in our refund policy.",
  },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

function Page() {
  return (
    <div className="gbp-lp gbr-page">
      <script
        id="gbr-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="gbr-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ============================ TICKER ============================ */}
      <div className="lp-ticker" aria-label="Zonic Media highlights">
        <div className="lp-ticker-track">
          {[0, 1].map((copy) =>
            tickerItems.map((item, i) => (
              <span key={`${copy}-${i}`} aria-hidden={copy === 1}>
                {item}
              </span>
            )),
          )}
        </div>
      </div>

      {/* ============================ HEADER ============================ */}
      <nav className="lp-nav">
        <Link href="/" className="lp-nav-logo" aria-label="Zonic Media home">
          <Image
            src="/images/logo.webp"
            width={132}
            height={50}
            alt="Zonic Media"
            priority
          />
        </Link>

        <ul className="lp-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <HashScrollLink href={link.href} offset={80}>
                {link.label}
              </HashScrollLink>
            </li>
          ))}
        </ul>

        <div className="lp-nav-right">
          <a href={SITE_CONTACT.phoneHref} className="lp-nav-phone">
            <PhoneIcon />
            <span>{SITE_CONTACT.phoneDisplay}</span>
          </a>
          <HashScrollLink href="#gbr-case-form" className="lp-nav-cta">
            Review my case
          </HashScrollLink>
        </div>
      </nav>

      <div className="lp-alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
        <span>
          <strong>Already appealed and been rejected?</strong> Don&apos;t file
          again yet — a repeat submission with nothing new attached is dismissed
          faster than the first one.
        </span>
        <HashScrollLink href="#gbr-case-form" className="lp-alert-cta">
          Send us the rejection →
        </HashScrollLink>
      </div>

      <div className="lp-wrap">
        {/* ========================= LEFT: CONTENT ========================= */}
        <div className="lp-col">
          {/* ------------------------------ HERO ------------------------------ */}
          <section className="lp-panel-dark">
            <span className="lp-eyebrow on-dark">Escalation desk</span>

            <h1 className="lp-h1">
              Google Rejected Your Appeal.{" "}
              <span className="lp-accent">The Case Isn&apos;t Over.</span>
            </h1>

            <p className="lp-lead">
              A rejection is a decision about one submission, not a verdict on
              your business.{" "}
              <Link href="/" className="lp-link">
                Zonic Media
              </Link>{" "}
              takes over Google Business Profile cases that have already failed
              at least one appeal — we read what Google actually said, fix what
              the earlier attempts left in place, and re-file the case on the
              right track.
            </p>

            <div className="lp-final-actions" style={{ justifyContent: "flex-start", marginTop: 28 }}>
              <HashScrollLink href="#gbr-case-form" className="lp-btn">
                Get a free case review
                <ArrowIcon />
              </HashScrollLink>
              <a href={SITE_CONTACT.phoneHref} className="lp-btn lp-btn-on-dark">
                <PhoneIcon />
                {SITE_CONTACT.phoneDisplay}
              </a>
            </div>

            {/* --- signature: an appeal history, read top to bottom --- */}
            <div className="gbr-log">
              <div className="gbr-log-head">
                <b>Case history</b>
                <span>· roofing contractor, 1 location</span>
                <span className="gbr-log-tag">3 rejections before us</span>
              </div>
              <div className="gbr-log-list">
                {appealLog.map((row) => (
                  <div key={row.id} className={`gbr-log-row ${row.state}`}>
                    <span className="gbr-log-dot" aria-hidden="true"></span>
                    <span className="gbr-log-label">
                      <span className="gbr-log-id">{row.id}</span>
                      <span className="gbr-log-title">{row.title}</span>
                    </span>
                    <span className="gbr-log-status">{row.status}</span>
                  </div>
                ))}
              </div>
              <p className="gbr-log-foot">
                Representative case. Nothing about the business changed between
                appeal 03 and appeal 04 — only what was fixed before filing.
              </p>
            </div>
          </section>

          {/* Mobile form — the sticky right column is desktop-only */}
          <div className="d-block d-lg-none" id="gbr-case-form">
            <GbpAppealLeadForm />
          </div>

          {/* ------------------------- STATS ------------------------- */}
          <section className="lp-panel">
            <div className="lp-stats">
              <div className="lp-stat">
                <div className="lp-stat-num">
                  700<span>+</span>
                </div>
                <p className="lp-stat-cap">Profiles reinstated &amp; verified</p>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">
                  10–14<span>d</span>
                </div>
                <p className="lp-stat-cap">Typical escalated case timeline</p>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">
                  4.9<span>★</span>
                </div>
                <p className="lp-stat-cap">Client satisfaction rating</p>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">
                  1<span>st</span>
                </div>
                <p className="lp-stat-cap">Step is always the free case review</p>
              </div>
            </div>
          </section>

          {/* --------------- SIGNATURE: REJECTION DECODER --------------- */}
          <section className="lp-panel" id="gbr-decoder">
            <div className="lp-head">
              <span className="lp-eyebrow">Rejection decoder</span>
              <h2 className="lp-h2">
                What Google&apos;s Rejection Message Actually Means
              </h2>
              <p className="lp-lead">
                Google rejects appeals with a short, standardised line and no
                detail. The wording is still the single most useful clue in the
                case — it tells you which review track handled it and what has to
                change before the next filing. Find yours below.
              </p>
            </div>

            <div className="gbr-decode">
              {decoder.map((row) => (
                <article className="gbr-decode-row" key={row.heading}>
                  <div className="gbr-decode-quote">
                    <span className="gbr-decode-src">Google&apos;s reply</span>
                    <q>{row.quote}</q>
                  </div>
                  <div className="gbr-decode-body">
                    <div>
                      <h3 className="lp-h3">{row.heading}</h3>
                      <p className="lp-body">{row.body}</p>
                    </div>
                    <p className="gbr-decode-fix">
                      <CheckIcon />
                      <span>
                        <b>How we handle it:</b> {row.fix}
                      </span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* --------------------- WHY APPEALS GET DENIED --------------------- */}
          <section className="lp-panel" id="gbr-why">
            <div className="lp-head">
              <span className="lp-eyebrow">Why first appeals fail</span>
              <h2 className="lp-h2">
                Six Reasons a Reinstatement Appeal Gets Denied
              </h2>
              <p className="lp-lead">
                These are failures of process, not of the business. A profile
                that was suspended for a fixable reason can still be rejected six
                times if the appeals are filed the wrong way — which is why the
                causes of a Google Business Profile suspension and the causes of
                a rejected appeal are two different lists.
              </p>
            </div>
            <div className="lp-grid-2">
              {whyDenied.map((item) => (
                <div className="lp-card" key={item.n}>
                  <div className="lp-ic lp-ic-red">{item.n}</div>
                  <h3 className="lp-h3">{item.title}</h3>
                  <p className="lp-body">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------------------ ESCALATION LADDER ------------------------ */}
          <section className="lp-panel-dark" id="gbr-ladder">
            <div className="lp-head">
              <span className="lp-eyebrow on-dark">The escalation ladder</span>
              <h2 className="lp-h2">
                What Sits Above the Appeal Form You Already Used
              </h2>
              <p className="lp-lead">
                Most owners only ever see rung one, then repeat it. These are the
                routes in order — each one only worth taking once the rung below
                it has genuinely been exhausted.
              </p>
            </div>
            <div className="gbr-ladder">
              {ladder.map((rung) => (
                <div
                  className={`gbr-rung${rung.owner ? " is-owner" : ""}`}
                  key={rung.step}
                >
                  <div className="gbr-rung-step">{rung.step}</div>
                  <div>
                    <h3 className="lp-h3">{rung.title}</h3>
                    <p className="lp-body">{rung.body}</p>
                    <div className="gbr-rung-meta">
                      {rung.tags.map((tag) => (
                        <span className="gbr-rung-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --------------------------- STOP LIST --------------------------- */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">Before you touch it again</span>
              <h2 className="lp-h2">Five Things That Make a Rejected Case Worse</h2>
              <p className="lp-lead">
                Everything below is reversible damage we see weekly — and all of
                it happens after the first rejection, while the owner is trying
                to help.
              </p>
            </div>
            <div className="gbr-stop">
              {stopList.map((item) => (
                <div className="gbr-stop-item" key={item.title}>
                  <span className="gbr-stop-x">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="lp-h4">{item.title}</h3>
                    <p className="lp-body">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ----------------------- AGENCY / MULTI-LOCATION ----------------------- */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">Agencies &amp; multi-location</span>
              <h2 className="lp-h2">When Several Profiles Go Down at Once</h2>
              <p className="lp-lead">
                A portfolio suspension is a different problem from a single
                rejected appeal, and filing every location in parallel repeats
                the same mistake five times over. Agencies reselling recovery
                under their own brand can also run this through our{" "}
                <Link href="/services/white-label-services" className="lp-link">
                  white-label services for agencies
                </Link>
                .
              </p>
            </div>
            <div className="lp-grid-3">
              {agencyCards.map((card) => (
                <div className="lp-card-soft" key={card.title}>
                  <div className="lp-ic lp-ic-dark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  </div>
                  <h3 className="lp-h4">{card.title}</h3>
                  <p className="lp-body">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------------------- PRICING ---------------------------- */}
          <section className="lp-panel" id="gbr-pricing">
            <div className="lp-head">
              <span className="lp-eyebrow">What escalated cases cost</span>
              <h2 className="lp-h2">
                Priced by Case Complexity, Quoted After the Review
              </h2>
              <p className="lp-lead">
                A rejected appeal costs more to fix than a clean first-time
                suspension, because the fix has to be in place and indexed before
                the case is worth filing. Every tier is backed by No Fix, No
                Charge on the reinstatement fee.
              </p>
            </div>
            <div className="lp-price-grid">
              {pricing.map((tier) => (
                <div
                  className={`lp-pc${tier.featured ? " is-featured" : ""}`}
                  key={tier.name}
                >
                  {tier.featured && tier.badge ? (
                    <span className="lp-pc-badge">{tier.badge}</span>
                  ) : null}

                  <div className="lp-pc-main">
                    <div className="lp-pc-name">{tier.name}</div>
                    <div className="lp-pc-price">
                      <sup>$</sup>
                      {tier.price}
                      {tier.per ? <span className="lp-pc-per">{tier.per}</span> : null}
                    </div>
                    <p className="lp-pc-from">{tier.from}</p>
                    <p className="lp-pc-desc">{tier.desc}</p>
                    <HashScrollLink href="#gbr-case-form" className="lp-pc-btn">
                      {tier.btn}
                    </HashScrollLink>
                    <p className="lp-pc-note">{tier.note}</p>
                  </div>

                  <div className="lp-pc-side">
                    <p className="lp-pc-side-label">What&apos;s included</p>
                    <ul className="lp-pc-feats">
                      {tier.features.map((f) => (
                        <li key={f.text} className={f.dim ? "is-dim" : ""}>
                          {f.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------- COMMITMENTS -------------------------- */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">How we work with you</span>
              <h2 className="lp-h2">What We Promise, and What We Won&apos;t</h2>
              <p className="lp-lead">
                Nobody outside Google can promise the decision. We can promise
                how the case is handled, who handles it, and what happens if it
                doesn&apos;t come back.
              </p>
            </div>
            <div className="lp-grid-3">
              <div className="lp-card-soft">
                <div className="lp-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2 4 5v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V5z" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <h3 className="lp-h4">An Honest Read Before You Pay</h3>
                <p className="lp-body">
                  The case review is free, and it includes an honest assessment
                  of the odds. If we think a case is unwinnable, we say so rather
                  than take the work. See our{" "}
                  <Link href="/legal/refund-policy" className="lp-link">
                    refund policy
                  </Link>{" "}
                  for the full terms.
                </p>
              </div>
              <div className="lp-card-soft">
                <div className="lp-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h3 className="lp-h4">We File When It&apos;s Ready</h3>
                <p className="lp-body">
                  Escalated cases run ten to fourteen business days because the
                  fix has to be live and indexed first. Filing early is the
                  fastest way to collect another rejection.
                </p>
              </div>
              <div className="lp-card-soft">
                <div className="lp-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M19 8v6M22 11h-6" />
                  </svg>
                </div>
                <h3 className="lp-h4">One Specialist, Start to Finish</h3>
                <p className="lp-body">
                  The person who reads your rejection is the person who writes
                  and files the appeal. No handoffs to a junior, no automated
                  submission tools.
                </p>
              </div>
            </div>
          </section>

          {/* --------------------------- REVIEWS --------------------------- */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">Client results</span>
              <h2 className="lp-h2">Cases That Came Back After a Rejection</h2>
            </div>
            <LenisIframeGuard
              className="gbr-reviews-widget"
              widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c"
            />
          </section>

          {/* ----------------------------- FAQ ----------------------------- */}
          <section className="lp-panel" id="gbr-faq">
            <div className="lp-head">
              <span className="lp-eyebrow">Rejected-appeal questions</span>
              <h2 className="lp-h2">What Owners Ask After a Rejection</h2>
            </div>

            {faqs.map((faq, index) => (
              <details className="lp-faq-item" name="lp-faq" key={faq.q} open={index === 0}>
                <summary className="lp-faq-q">
                  {faq.q}
                  <span className="lp-faq-pm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="lp-faq-a">{faq.a}</div>
              </details>
            ))}

            <script
              id="gbr-faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  url: "https://www.zonicllc.com/gmb-reinstatement-service-agency",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: { "@type": "Answer", text: faq.a },
                  })),
                }),
              }}
            />
          </section>

          {/* ------------------------- RELATED SERVICES ------------------------- */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">Not a rejected appeal?</span>
              <h2 className="lp-h2">Start on the Right Page</h2>
              <p className="lp-lead">
                This page is for cases that have already failed an appeal. If
                that isn&apos;t you, one of these will get you there faster: a
                first-time suspension belongs with our{" "}
                <Link href="/services/gmb-reinstatement-help" className="lp-link">
                  GMB reinstatement service
                </Link>
                ; a profile that was never verified in the first place needs{" "}
                <Link href="/services/gmb-verification-help" className="lp-link">
                  GMB verification help
                </Link>
                , and the{" "}
                <Link
                  href="/google-business-profile-verification-help-2026"
                  className="lp-link"
                >
                  2026 verification rules
                </Link>{" "}
                cover what changed this year. Once a profile is live again,{" "}
                <Link href="/services/gmb-optimization" className="lp-link">
                  Google Business Profile optimization
                </Link>{" "}
                and{" "}
                <Link
                  href="/local-seo-google-business-optimization"
                  className="lp-link"
                >
                  Map Pack ranking work
                </Link>{" "}
                rebuild the visibility the suspension cost you.
              </p>
            </div>
          </section>
        </div>

        {/* ===================== RIGHT: STICKY FORM (desktop) ===================== */}
        <aside
          className="lp-form-col d-none d-lg-block"
          data-scroll-target="gbr-case-form"
        >
          <GbpAppealLeadForm />
        </aside>
      </div>

      {/* ========================== FINAL CTA BAND ========================== */}
      <section className="lp-final">
        <div className="lp-final-inner">
          <span className="lp-eyebrow on-dark">One rejection isn&apos;t the end</span>
          <h2 className="lp-h2">Send Us the Rejection Before You File Again</h2>
          <p className="lp-lead">
            Every identical resubmission makes the next one harder. Let us read
            what Google actually said, fix what the last attempt left in place,
            and file the case once — properly.
          </p>
          <div className="lp-final-actions">
            <HashScrollLink href="#gbr-case-form" className="lp-btn">
              Get a free case review
              <ArrowIcon />
            </HashScrollLink>
            <a href={SITE_CONTACT.phoneHref} className="lp-btn lp-btn-white">
              <PhoneIcon />
              {SITE_CONTACT.phoneDisplay}
            </a>
          </div>
          <div className="lp-final-sub">
            <span>
              <CheckIcon />
              Free, no-obligation review
            </span>
            <span>
              <CheckIcon />
              No Fix, No Charge
            </span>
            <span>
              <CheckIcon />
              Dover, DE · serving the US
            </span>
          </div>
        </div>
      </section>

      {/* ============================= FOOTER ============================= */}
      <footer className="lp-footer">
        <div className="lp-footer-top">
          <div className="lp-footer-brand">
            <Link href="/" className="lp-footer-logo" aria-label="Zonic Media home">
              <Image
                src="/images/logo.webp"
                width={132}
                height={50}
                alt="Zonic Media"
              />
            </Link>
            <p className="lp-footer-blurb">
              A Delaware digital marketing agency specialising in Google Business
              Profile recovery — reinstatement, appeal escalation, verification
              and optimization — for local and service-area businesses across the
              United States.
            </p>
            <div className="lp-footer-contact">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                8 The Green, STE B, Dover, DE 19901
              </span>
              <a href={SITE_CONTACT.phoneHref}>
                <PhoneIcon />
                {SITE_CONTACT.phoneDisplay}
              </a>
              <a href={SITE_CONTACT.emailHref}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
                {SITE_CONTACT.email}
              </a>
            </div>
          </div>

          <div className="lp-footer-col">
            <h3>Google Business Profile</h3>
            <ul>
              <li>
                <Link href="/services/gmb-reinstatement-help">
                  GMB reinstatement service
                </Link>
              </li>
              <li>
                <Link href="/services/gmb-verification-help">
                  GMB verification help
                </Link>
              </li>
              <li>
                <Link href="/google-business-profile-verification-help-2026">
                  2026 verification rules
                </Link>
              </li>
              <li>
                <Link href="/services/gmb-optimization">Profile optimization</Link>
              </li>
              <li>
                <Link href="/local-seo-google-business-optimization">
                  Map Pack ranking
                </Link>
              </li>
            </ul>
          </div>

          <div className="lp-footer-col">
            <h3>More Services</h3>
            <ul>
              <li>
                <Link href="/services/local-seo-for-home-services">
                  Local SEO for home services
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads">Google Ads management</Link>
              </li>
              <li>
                <Link href="/services/web-design">Web design</Link>
              </li>
              <li>
                <Link href="/services/white-label-services">
                  White-label for agencies
                </Link>
              </li>
              <li>
                <Link href="/services">All services</Link>
              </li>
            </ul>
          </div>

          <div className="lp-footer-col">
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/about">About Zonic Media</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/industries">Industries we serve</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lp-footer-bottom">
          <span>
            © {new Date().getFullYear()} Zonic Media LLC. All rights reserved.
          </span>
          <div className="lp-footer-legal">
            <Link href="/legal/privacy-policy">Privacy policy</Link>
            <Link href="/legal/refund-policy">Refund policy</Link>
            <Link href="/legal/terms-conditions">Terms &amp; conditions</Link>
          </div>
        </div>
      </footer>

      {/* =========================== STICKY CTA =========================== */}
      <div className="lp-sticky-bar">
        <div className="lp-sb-left">
          <strong>Appeal rejected?</strong> Don&apos;t re-file yet — free case
          review first · No Fix, No Charge
        </div>
        <div className="lp-sb-right">
          <a href={SITE_CONTACT.phoneHref} className="lp-sb-call">
            <PhoneIcon />
            {SITE_CONTACT.phoneDisplay}
          </a>
          <HashScrollLink href="#gbr-case-form" className="lp-sb-form">
            Free case review
          </HashScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Page;
