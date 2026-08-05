import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Metadata } from "next";

import "@/app/style/gbpLanding.css";
import "@/app/style/localOpt.css";

import MapPackLeadForm from "@/app/components/MapPackLeadForm";
import HashScrollLink from "@/app/components/HashScrollLink";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

/* ---------------------------------------------------------------------------
   POSITIONING — read this before editing the copy.

   /services/gmb-optimization owns the head term "Google Business Profile
   optimization" and the deliverables list (categories, description, photos,
   posts, Q&A, review generation). Do not restate that list here.

   This page owns the *ranking mechanics* query set:

     · "how to rank in the Google Map Pack" / "local 3-pack ranking"
     · "Google Maps ranking factors" / proximity, relevance, prominence
     · "why am I not showing up on Google Maps"
     · geo-grid rank tracking and "near me" visibility

   Always link UP to /services/gmb-optimization using the head term as anchor
   text so it consolidates on the hub instead of splitting across two URLs.

   TYPE + CHROME come from gbpLanding.css (.gbp-lp) — shared with the other two
   GBP landing pages. Don't reintroduce local font/heading rules here.
--------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: {
    absolute: "How to Rank in the Google Map Pack | Local 3-Pack SEO",
  },
  description:
    "Why you rank on Google Maps in one neighbourhood and vanish in the next — the three factors behind local 3-Pack rankings, plus a free geo-grid scan.",
  keywords: [
    "how to rank in Google Map Pack",
    "local 3-pack ranking",
    "Google Maps ranking factors",
    "why am I not showing up on Google Maps",
    "geo grid rank tracking",
    "near me search ranking",
    "Google Maps proximity ranking",
    "local pack visibility",
    "map pack SEO",
    "improve Google Maps ranking",
  ],
  alternates: { canonical: "/local-seo-google-business-optimization" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "How to Rank in the Google Map Pack | Local 3-Pack SEO",
    description:
      "Proximity, relevance and prominence — what actually decides the local 3-Pack, which levers you control, and a free geo-grid scan of your service area.",
    url: "/local-seo-google-business-optimization",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Rank in the Google Map Pack | Local 3-Pack SEO",
    description:
      "Why you rank here and vanish three miles away — and which Map Pack ranking factors you can actually move.",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  {
    name: "Google Map Pack Ranking",
    url: "/local-seo-google-business-optimization",
  },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.zonicllc.com/local-seo-google-business-optimization#service",
  name: "Google Map Pack Ranking & Local Visibility",
  alternateName: [
    "Local 3-Pack ranking service",
    "Google Maps ranking service",
    "Geo-grid rank tracking",
  ],
  serviceType: "Local Map Pack ranking",
  description:
    "Zonic Media improves Google Map Pack visibility across a whole service area rather than at a single pin: geo-grid rank scanning to find where a business actually ranks, diagnosis against Google's proximity, relevance and prominence factors, and work on the levers a business can move — service-area configuration, category and service alignment, review velocity and local link prominence.",
  url: "https://www.zonicllc.com/local-seo-google-business-optimization",
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
    name: "Local and service-area businesses that are verified on Google but not ranking in the Map Pack",
  },
  isRelatedTo: {
    "@type": "Service",
    "@id": "https://www.zonicllc.com/services/gmb-optimization#service",
    name: "Google Business Profile Optimization",
  },
  offers: {
    "@type": "Offer",
    name: "Free geo-grid rank scan",
    price: "0",
    priceCurrency: "USD",
    description:
      "A free geo-grid scan showing where the business ranks in the Map Pack across every part of its service area.",
  },
};

/* ----------------------------------------------------------------- content */

// Rendered twice back to back — the track animates to -50%, so the second
// copy is what makes the loop seamless.
const tickerItems = [
  <>
    <b>1500+</b> Google Business Profiles optimized
  </>,
  <>
    ★ <b>5.0</b> rating on Clutch
  </>,
  <>Free geo-grid scan of your service area</>,
  <>No long-term contracts</>,
  <>US-based specialists · Dover, DE</>,
  <>Map Pack, &ldquo;near me&rdquo; and AI local answers</>,
];

const navLinks = [
  { href: "#lo-factors", label: "Ranking factors" },
  { href: "#lo-why", label: "Why you're not ranking" },
  { href: "#lo-levers", label: "What we change" },
  { href: "#lo-pricing", label: "Pricing" },
  { href: "#lo-faq", label: "FAQ" },
];

/* A 5×5 geo-grid: rank at the business pin vs rank at the edge of the area.
   The centre cell (0) is the pin itself. */
const geoGrid = [
  18, 14, 11, 15, 21, 12, 6, 4, 7, 16, 9, 3, 0, 2, 12, 11, 5, 3, 6, 17, 19, 13,
  10, 14, 22,
];

const rankBand = (rank: number) => {
  if (rank === 0) return "is-pin";
  if (rank <= 3) return "is-top";
  if (rank <= 10) return "is-mid";
  return "is-low";
};

const factors = [
  {
    name: "Proximity",
    weight: 45,
    lever: "Mostly fixed",
    cls: "is-fixed",
    body: "How close the searcher is to your address when they search. It is the strongest single factor in the Map Pack and the one you have least control over — which is exactly why a business can sit at #1 outside its own front door and be invisible four miles away. You cannot move proximity, but you can stop it being the only thing carrying you.",
  },
  {
    name: "Relevance",
    weight: 30,
    lever: "Fully yours",
    cls: "is-open",
    body: "How well Google understands that you do the specific thing being searched for. Primary category does most of the work here, then services, attributes and the wording on your site. This is the fastest lever in local search: a category correction can change a whole service area's rankings inside a fortnight.",
  },
  {
    name: "Prominence",
    weight: 25,
    lever: "Yours, slowly",
    cls: "is-partial",
    body: "How well known Google thinks you are — review count and velocity, consistency of your details across the web, local press and links, and general brand signals. It moves slowly, but it is what lets a business outrank a nearer competitor. Prominence is how you beat proximity.",
  },
];

const whyNotRanking = [
  {
    n: "01",
    title: "Your primary category doesn't match the search",
    body: "A general contractor set to \"Construction company\" will not rank for \"bathroom remodeler\" no matter how good the profile is. Primary category is the single biggest relevance signal, and the wrong one caps your ceiling everywhere in the area.",
  },
  {
    n: "02",
    title: "Your service area is drawn wrong",
    body: "Too large and Google dilutes you across places you'll never win; too small and you disappear from the suburbs that actually convert. Service-area businesses in particular get this wrong, then blame the profile.",
  },
  {
    n: "03",
    title: "You're only measuring rank at your own address",
    body: "Checking your ranking from the office tells you almost nothing — you're standing at the point of maximum proximity. A single average rank number hides that you're #2 in one neighbourhood and #19 in the next. This is what the grid scan is for.",
  },
  {
    n: "04",
    title: "Review velocity has stalled",
    body: "A profile with 80 reviews and none in eight months reads as less active than a competitor with 40 and one a week. Google weighs recency and pace, not just the total, and stalled velocity shows up as a slow slide down the pack.",
  },
  {
    n: "05",
    title: "Your details don't match across the web",
    body: "A different suite number on your site, an old phone on a directory, a former trading name on an aggregator — each mismatch chips at prominence. It rarely causes a dramatic drop; it quietly stops you climbing.",
  },
  {
    n: "06",
    title: "Competitors are simply doing more of it",
    body: "The Map Pack is comparative, not absolute. If three competitors added photos, posts and reviews all year and you didn't, you'll fall even though nothing about your profile got worse. Local rankings decay without maintenance.",
  },
];

const levers = [
  {
    n: "01",
    title: "Grid-scan first, so we're fixing the real problem",
    body: "Before touching anything we scan your rankings across a grid of points spanning the service area, for the terms that actually bring work. That map tells us whether you have a relevance problem, a prominence problem, or a coverage problem — three different jobs.",
  },
  {
    n: "02",
    title: "Category and service alignment",
    body: "Primary category set to the highest-intent match, secondaries chosen so they widen coverage without muddying relevance, and the services list built out to mirror how customers actually phrase the job.",
  },
  {
    n: "03",
    title: "Service-area geometry",
    body: "Coverage redrawn around where you genuinely compete and want to work, rather than an optimistic radius. For service-area businesses this is usually the biggest single change available.",
  },
  {
    n: "04",
    title: "Review velocity, not review count",
    body: "A repeatable request flow so reviews arrive steadily instead of in bursts, with replies on every one. Pace and recency are what the algorithm reads.",
  },
  {
    n: "05",
    title: "Consistency and local prominence",
    body: "Details reconciled everywhere Google cross-checks them, plus the local links and mentions that separate a known business from a listed one. Slow, but it's what beats a closer competitor.",
  },
  {
    n: "06",
    title: "Re-scan and compare",
    body: "The same grid, the same terms, monthly. You see coverage change square by square instead of trusting a single number that could move for any reason.",
  },
];

const pricing = [
  {
    name: "Grid Scan & Diagnosis",
    price: "0",
    from: "Free, one per business",
    desc: "The scan and the read on it. You get the map of where you rank across the area and a plain explanation of what's capping you.",
    features: [
      { text: "Geo-grid scan of your service area", dim: false },
      { text: "Up to 3 priority search terms", dim: false },
      { text: "Category and service-area review", dim: false },
      { text: "Competitor comparison in the pack", dim: false },
      { text: "Written diagnosis and priorities", dim: false },
      { text: "Ongoing ranking work", dim: true },
      { text: "Monthly re-scan reporting", dim: true },
    ],
    btn: "Get the free scan",
    note: "No card, no commitment",
    featured: false,
  },
  {
    name: "Map Pack Growth",
    price: "597",
    per: "/mo",
    from: "Month to month, no lock-in",
    desc: "The ongoing work: relevance and coverage fixed, prominence built, and the grid re-scanned every month so you can see it move.",
    features: [
      { text: "Everything in Grid Scan & Diagnosis", dim: false },
      { text: "Category & service buildout", dim: false },
      { text: "Service-area geometry rework", dim: false },
      { text: "Review request flow & replies", dim: false },
      { text: "Consistency cleanup across the web", dim: false },
      { text: "Local links & mentions", dim: false },
      { text: "Monthly grid re-scan & report", dim: false },
    ],
    btn: "Start Map Pack Growth",
    note: "Cancel any time · Reporting you can read",
    featured: true,
    badge: "Most chosen",
  },
  {
    name: "Multi-Location",
    price: "397",
    per: "/loc/mo",
    from: "Volume rate, minimum 3 locations",
    desc: "For brands and agencies running several profiles, where coverage overlap between locations is its own problem.",
    features: [
      { text: "Everything in Map Pack Growth", dim: false },
      { text: "Per-location grid scanning", dim: false },
      { text: "Overlap & cannibalisation analysis", dim: false },
      { text: "Cross-location consistency audit", dim: false },
      { text: "Dedicated account manager", dim: false },
      { text: "White-label reporting", dim: false },
      { text: "Agency partner program access", dim: false },
    ],
    btn: "Get a multi-location quote",
    note: "Min. 3 locations · Custom onboarding",
    featured: false,
  },
];

const faqs = [
  {
    q: "Why do I rank #1 at my office but disappear a few miles away?",
    a: "Because proximity is the strongest factor in the Map Pack, and at your own address you are standing at the point where it is strongest. Google builds a different result for every searcher based on where they are, so there is no single \"my ranking\" — there is a ranking at every point in your service area. Checking from the office is the most flattering possible test. A geo-grid scan checks from dozens of points instead, which is usually the first time an owner sees the actual shape of their visibility.",
  },
  {
    q: "What is a geo-grid scan and why does it matter?",
    a: "It queries your target search terms from a grid of coordinates spread across your service area and records your Map Pack position at each one, producing a map of green, amber and red squares. It matters because the average rank number most tools report can stay flat while your coverage collapses in the neighbourhoods that actually generate work. The grid shows the shape of the problem, which is what tells you whether to fix relevance, coverage, or prominence.",
  },
  {
    q: "Can I outrank a competitor who is physically closer to the searcher?",
    a: "Yes, though not everywhere. Proximity is the heaviest factor but it is not the only one, and a business with stronger relevance and prominence regularly beats a nearer competitor with a thin profile. What is not realistic is outranking a well-run competitor at their own front door. The honest goal is to widen the area where you place in the top three, not to win every square on the grid.",
  },
  {
    q: "How long does it take to move in the Map Pack?",
    a: "Relevance changes move fastest — a corrected primary category or a properly built service list often shows up within two to four weeks. Coverage changes from service-area work land in a similar window. Prominence is the slow one: review velocity and local links compound over three to six months. Anyone promising top-three across a whole metro in thirty days is describing the proximity effect at a single point, not a real ranking change.",
  },
  {
    q: "Is this the same as Google Business Profile optimization?",
    a: "They overlap but they answer different questions. Google Business Profile optimization is about building the profile itself out properly — categories, description, photos, posts, Q&A and reviews. This page is about where that profile ranks geographically and what moves it: measuring coverage across the area, then working proximity, relevance and prominence against the competitors in each part of it. Most businesses need the profile built out first, then the ranking work on top.",
  },
  {
    q: "Do I need to be verified before any of this works?",
    a: "Yes, and it is not negotiable. An unverified profile cannot rank in the Map Pack at all, and it is also missing from Google's AI-generated local answers. If your profile is unverified, suspended, or stuck in a verification loop, that has to be resolved before ranking work makes any sense — none of the levers on this page can lift a listing Google will not display.",
  },
  {
    q: "Does any of this help with \"near me\" searches?",
    a: "It is essentially the same mechanism. Google treats \"near me\" as a proximity-weighted local query, so the results come from the same Map Pack logic — there is no separate \"near me\" ranking to optimise for. Widening the area where you place in the top three is what increases how often you appear for \"near me\", because more searchers are standing inside your strong zone.",
  },
  {
    q: "What do you need from me to run the free scan?",
    a: "The business name as it appears on the profile, the city or area you want scanned, and up to three search terms that actually bring you work — the phrases a customer would type, not industry jargon. That is enough to run the grid and send you the map with a written read on what it shows.",
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

const onDarkCard = {
  background: "rgba(255,255,255,.04)",
  borderColor: "rgba(255,255,255,.1)",
};

function Page() {
  return (
    <div className="gbp-lp lo-page">
      <Script
        id="lo-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="lo-service-schema"
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
          <HashScrollLink href="#lo-scan-form" className="lp-nav-cta">
            Free grid scan
          </HashScrollLink>
        </div>
      </nav>

      <div className="lp-alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        <span>
          <strong>Checking your rank from the office?</strong> That&apos;s the
          one spot where you always look good — it tells you nothing about the
          rest of your service area.
        </span>
        <HashScrollLink href="#lo-scan-form" className="lp-alert-cta">
          Scan the whole area →
        </HashScrollLink>
      </div>

      <div className="lp-wrap">
        {/* ========================= LEFT: CONTENT ========================= */}
        <div className="lp-col">
          {/* ------------------------------ HERO ------------------------------ */}
          <section className="lp-panel-dark">
            <span className="lp-eyebrow on-dark">Map Pack ranking</span>

            <h1 className="lp-h1">
              You rank #1 outside your own front door.{" "}
              <span className="lp-accent">
                Three miles away, you don&apos;t exist.
              </span>
            </h1>

            <p className="lp-lead">
              Google builds a different Map Pack for every searcher, weighted
              heavily by how close they are standing. So there is no single
              ranking to chase — there is a map of them. We scan yours, show you
              where the green stops, and work on the factors that widen it.
            </p>

            <div
              className="lp-final-actions"
              style={{ justifyContent: "flex-start", marginTop: 28 }}
            >
              <HashScrollLink href="#lo-scan-form" className="lp-btn">
                Get a free grid scan
                <ArrowIcon />
              </HashScrollLink>
              <a href={SITE_CONTACT.phoneHref} className="lp-btn lp-btn-on-dark">
                <PhoneIcon />
                {SITE_CONTACT.phoneDisplay}
              </a>
            </div>

            {/* --- signature: the geo-grid --- */}
            <div className="lo-geo">
              <div
                className="lo-geo-map"
                role="img"
                aria-label="Geo-grid showing Map Pack rank at 25 points across one service area: top three beside the business, outside the top twenty at the edges."
              >
                {geoGrid.map((rank, i) => (
                  <div key={i} className={`lo-cell ${rankBand(rank)}`}>
                    {rank === 0 ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ) : (
                      rank
                    )}
                  </div>
                ))}
              </div>

              <div className="lo-geo-side">
                <p className="lo-geo-title">
                  Rank by location · &ldquo;emergency plumber&rdquo;
                </p>
                <div className="lo-geo-legend">
                  <div>
                    <i className="k-top"></i> Top 3 — in the pack
                  </div>
                  <div>
                    <i className="k-mid"></i> 4–10 — page one, rarely clicked
                  </div>
                  <div>
                    <i className="k-low"></i> 11+ — effectively invisible
                  </div>
                </div>
                <p className="lo-geo-note">
                  Same business, same profile, same day. The average of these 25
                  points is a rank of 11 — a number that describes none of them.
                </p>
              </div>
            </div>
          </section>

          {/* Mobile form — the sticky right column is desktop-only */}
          <div className="d-block d-lg-none" id="lo-scan-form">
            <MapPackLeadForm />
          </div>

          {/* ------------------------------ STATS ------------------------------ */}
          <section className="lp-panel">
            <div className="lp-stats">
              <div className="lp-stat">
                <div className="lp-stat-num">
                  1500<span>+</span>
                </div>
                <p className="lp-stat-cap">Profiles optimized</p>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">
                  25<span>pt</span>
                </div>
                <p className="lp-stat-cap">Grid scanned per service area</p>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">
                  2–4<span>wk</span>
                </div>
                <p className="lp-stat-cap">Typical relevance-fix response</p>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">
                  5.0<span>★</span>
                </div>
                <p className="lp-stat-cap">Rating on Clutch</p>
              </div>
            </div>
          </section>

          {/* -------------------------- RANKING FACTORS -------------------------- */}
          <section className="lp-panel" id="lo-factors">
            <div className="lp-head">
              <span className="lp-eyebrow">What decides the pack</span>
              <h2 className="lp-h2">
                Three factors, and only two of them are yours
              </h2>
              <p className="lp-lead">
                Google names proximity, relevance and prominence as what
                determines local ranking. Knowing which one is holding you back
                is the whole diagnosis — the work for each is completely
                different, and one of them you cannot change at all.
              </p>
            </div>
            <div className="lo-factors">
              {factors.map((f) => (
                <article className={`lo-factor ${f.cls}`} key={f.name}>
                  <div className="lo-factor-top">
                    <h3 className="lp-h3" style={{ margin: 0 }}>
                      {f.name}
                    </h3>
                    <span className="lo-factor-lever">{f.lever}</span>
                  </div>
                  <div className="lo-factor-bar">
                    <div
                      className="lo-factor-fill"
                      style={{ width: `${f.weight}%` }}
                    />
                  </div>
                  <p className="lp-body">{f.body}</p>
                </article>
              ))}
            </div>
            <p className="lp-small" style={{ marginTop: 18 }}>
              Bar widths illustrate relative influence. Google does not publish
              weightings.
            </p>
          </section>

          {/* --------------------------- WHY NOT RANKING --------------------------- */}
          <section className="lp-panel" id="lo-why">
            <div className="lp-head">
              <span className="lp-eyebrow">Diagnosis</span>
              <h2 className="lp-h2">
                Six reasons a good profile still doesn&apos;t rank
              </h2>
              <p className="lp-lead">
                A profile can be complete, verified and well filled in and still
                sit outside the pack. When it does, it is almost always one of
                these — and none of them are fixed by adding more photos.
              </p>
            </div>
            <div className="lp-grid-2">
              {whyNotRanking.map((item) => (
                <div className="lp-card" key={item.n}>
                  <div className="lp-ic lp-ic-red">{item.n}</div>
                  <h3 className="lp-h3">{item.title}</h3>
                  <p className="lp-body">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------------------------ LEVERS ------------------------------ */}
          <section className="lp-panel" id="lo-levers">
            <div className="lp-head">
              <span className="lp-eyebrow">What we actually change</span>
              <h2 className="lp-h2">The levers, in the order we pull them</h2>
              <p className="lp-lead">
                Ranking work is sequenced, not bundled. Relevance first because
                it moves fastest, coverage next, prominence last because it
                compounds slowly. If the profile itself still needs building
                out, that belongs with Google Business Profile optimization
                before any of this.
              </p>
            </div>
            <div className="lo-levers">
              {levers.map((lever) => (
                <div className="lo-lever" key={lever.n}>
                  <span className="lo-lever-n">{lever.n}</span>
                  <div>
                    <h3 className="lp-h4">{lever.title}</h3>
                    <p className="lp-body">{lever.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --------------------------- PREREQUISITE --------------------------- */}
          <section className="lp-panel-dark">
            <div className="lp-head">
              <span className="lp-eyebrow on-dark">Before ranking work</span>
              <h2 className="lp-h2">
                A listing Google won&apos;t show can&apos;t be ranked
              </h2>
              <p className="lp-lead">
                None of the levers on this page lift a profile that is
                unverified, suspended or disabled — it isn&apos;t in the pool
                being ranked at all. If that&apos;s where you are, start there
                and come back once the listing is live.
              </p>
            </div>
            <div className="lp-grid-3">
              <div className="lp-card-soft" style={onDarkCard}>
                <h3 className="lp-h4" style={{ color: "#fff" }}>
                  Not verified yet
                </h3>
                <p className="lp-body">
                  Video is the default method now and the rules changed twice
                  since 2024 — see the{" "}
                  <Link
                    href="/google-business-profile-verification-help-2026"
                    className="lp-link"
                  >
                    2026 verification rules
                  </Link>
                  , or get{" "}
                  <Link
                    href="/services/gmb-verification-help"
                    className="lp-link"
                  >
                    GMB verification help
                  </Link>
                  .
                </p>
              </div>
              <div className="lp-card-soft" style={onDarkCard}>
                <h3 className="lp-h4" style={{ color: "#fff" }}>
                  Suspended
                </h3>
                <p className="lp-body">
                  A suspended listing is off the map entirely. Our{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="lp-link"
                  >
                    GMB reinstatement service
                  </Link>{" "}
                  handles first-time suspensions.
                </p>
              </div>
              <div className="lp-card-soft" style={onDarkCard}>
                <h3 className="lp-h4" style={{ color: "#fff" }}>
                  Appeal already rejected
                </h3>
                <p className="lp-body">
                  If Google has already turned down an appeal, that&apos;s a
                  different job —{" "}
                  <Link
                    href="/gmb-reinstatement-service-agency"
                    className="lp-link"
                  >
                    the escalation desk
                  </Link>{" "}
                  picks it up from there.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------------------- PRICING ---------------------------- */}
          <section className="lp-panel" id="lo-pricing">
            <div className="lp-head">
              <span className="lp-eyebrow">Engagements</span>
              <h2 className="lp-h2">Start with the scan — it costs nothing</h2>
              <p className="lp-lead">
                The scan and the diagnosis are free because they&apos;re how
                both of us find out whether there&apos;s work worth doing.
                Ongoing work is month to month, with the same grid re-run so you
                can see what moved. Need leads while rankings build?{" "}
                <Link href="/services/google-ads" className="lp-link">
                  Google Ads management
                </Link>{" "}
                covers the gap.
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
                      {tier.per ? (
                        <span className="lp-pc-per">{tier.per}</span>
                      ) : null}
                    </div>
                    <p className="lp-pc-from">{tier.from}</p>
                    <p className="lp-pc-desc">{tier.desc}</p>
                    <HashScrollLink href="#lo-scan-form" className="lp-pc-btn">
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

          {/* --------------------------- REVIEWS --------------------------- */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">Client results</span>
              <h2 className="lp-h2">What clients say about the work</h2>
            </div>
            <LenisIframeGuard
              className="lo-reviews-widget"
              widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c"
            />
          </section>

          {/* ----------------------------- FAQ ----------------------------- */}
          <section className="lp-panel" id="lo-faq">
            <div className="lp-head">
              <span className="lp-eyebrow">Map Pack questions</span>
              <h2 className="lp-h2">What owners ask about local rankings</h2>
            </div>

            {faqs.map((faq, index) => (
              <details className="lp-faq-item" key={faq.q} open={index === 0}>
                <summary className="lp-faq-q">
                  {faq.q}
                  <span className="lp-faq-pm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="lp-faq-a">{faq.a}</div>
              </details>
            ))}

            <Script
              id="lo-faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  url: "https://www.zonicllc.com/local-seo-google-business-optimization",
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
              <span className="lp-eyebrow">Related work</span>
              <h2 className="lp-h2">Where this sits in the rest of it</h2>
              <p className="lp-lead">
                Ranking work assumes a profile that is already built out —
                that&apos;s{" "}
                <Link href="/services/gmb-optimization" className="lp-link">
                  Google Business Profile optimization
                </Link>
                . For trades specifically, most of the coverage problems on this
                page show up inside{" "}
                <Link
                  href="/services/local-seo-for-home-services"
                  className="lp-link"
                >
                  local SEO for home services
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/industry/local-seo-services-for-hvac"
                  className="lp-link"
                >
                  local SEO for HVAC companies
                </Link>
                . Once the calls start, a{" "}
                <Link href="/services/web-design" className="lp-link">
                  conversion-focused website
                </Link>{" "}
                is what turns them into booked jobs.
              </p>
            </div>
          </section>
        </div>

        {/* ===================== RIGHT: STICKY FORM (desktop) ===================== */}
        <aside
          className="lp-form-col d-none d-lg-block"
          data-scroll-target="lo-scan-form"
        >
          <MapPackLeadForm />
        </aside>
      </div>

      {/* ========================== FINAL CTA BAND ========================== */}
      <section className="lp-final">
        <div className="lp-final-inner">
          <span className="lp-eyebrow on-dark">See the map first</span>
          <h2 className="lp-h2">Find out where your green actually stops</h2>
          <p className="lp-lead">
            The scan is free and takes a day. You get the grid, the diagnosis,
            and an honest answer on whether there&apos;s enough headroom to be
            worth paying for.
          </p>
          <div className="lp-final-actions">
            <HashScrollLink href="#lo-scan-form" className="lp-btn">
              Get a free grid scan
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
              Free scan, no card
            </span>
            <span>
              <CheckIcon />
              Month to month, no lock-in
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
            <Link
              href="/"
              className="lp-footer-logo"
              aria-label="Zonic Media home"
            >
              <Image
                src="/images/logo.webp"
                width={132}
                height={50}
                alt="Zonic Media"
              />
            </Link>
            <p className="lp-footer-blurb">
              A Delaware digital marketing agency specialising in Google
              Business Profile work — Map Pack ranking, optimization,
              verification and reinstatement — for local and service-area
              businesses across the United States.
            </p>
            <div className="lp-footer-contact">
              <span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
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
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
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
                <Link href="/services/gmb-optimization">
                  Profile optimization
                </Link>
              </li>
              <li>
                <Link href="/services/gmb-reinstatement-help">
                  GMB reinstatement service
                </Link>
              </li>
              <li>
                <Link href="/gmb-reinstatement-service-agency">
                  Rejected appeal help
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
            </ul>
          </div>

          <div className="lp-footer-col">
            <h3>More services</h3>
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
          <strong>Not in the 3-Pack?</strong> Free geo-grid scan of your whole
          service area
        </div>
        <div className="lp-sb-right">
          <a href={SITE_CONTACT.phoneHref} className="lp-sb-call">
            <PhoneIcon />
            {SITE_CONTACT.phoneDisplay}
          </a>
          <HashScrollLink href="#lo-scan-form" className="lp-sb-form">
            Free grid scan
          </HashScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Page;
