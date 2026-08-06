import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

import "@/app/style/homeInspAgency.css";
import "@/app/style/homeInspState.css";
import "@/app/style/plumbingExtra.css";

import PlumberLeadForm from "@/app/components/PlumberLeadForm";
import HiaFaqAccordion from "@/app/components/HiaFaqAccordion";
import HashScrollLink from "@/app/components/HashScrollLink";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import {
  GrowthCurveVisual,
  LeadEngineVisual,
  MapPackRaceVisual,
} from "@/app/components/IndustryMarketingVisuals";
import PlumbingConsentNotice from "./PlumbingConsentNotice";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";
import { SERVICES, SPECIALTIES, PRICE_CARDS } from "./stateContent";

export const metadata: Metadata = {
  title: "Plumbing Marketing Agency for Contractors",
  description:
    "Plumbing marketing agency for contractors. Google Business Profile, Google Maps ranking, paid ads, websites, and reviews. Free plumbing marketing audit.",
  keywords: [
    "plumbing marketing agency",
    "marketing for plumbing contractors",
    "plumber marketing services",
    "plumbing lead generation",
    "local SEO for plumbers",
    "Google Maps ranking for plumbers",
    "Google Business Profile for plumbers",
    "Google Ads for plumbers",
    "plumbing website design",
    "plumber review management",
  ],
  alternates: { canonical: "/services/plumbing-marketing-agency" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  {
    name: "Plumbing Marketing Agency",
    url: "/services/plumbing-marketing-agency",
  },
]);

const visualCopy = {
  industry: "plumbing",
  industryTitle: "Plumbing",
  business: "plumbing company",
  jobsNoun: "booked jobs",
  mapQuery: "plumber near me",
};

const tickerItems = [
  "Free Plumbing Marketing Audit",
  "Google Maps · Google Ads · Website · Reviews · GBP",
  "500+ Local Businesses Ranked · 50+ Plumbers Served",
  "FL · TX · CA · AZ · IL · GA · NC",
  "Starting at $750/mo · Month-to-Month",
];

const trustItems = [
  { num: "500+", label: "Local Businesses Ranked" },
  { num: "50+", label: "Plumbing Contractors Served" },
  { num: "300+", label: "GBPs Reinstated" },
  { num: "4.9/5", label: "Client Satisfaction" },
];

const states = [
  {
    name: "Florida",
    slug: "florida",
    blurb:
      "Heat, humidity, slab construction, hurricane drainage, snowbird seasonality. Miami, Tampa, Orlando, Jacksonville.",
  },
  {
    name: "Texas",
    slug: "texas",
    blurb:
      "Hard water + extreme heat + fastest US growth. Hurricane and freeze events. Houston, Dallas, Austin, San Antonio.",
  },
  {
    name: "California",
    slug: "california",
    blurb:
      "Largest plumbing market, drought-driven restrictions, older housing stock. LA, San Francisco, San Diego.",
  },
  {
    name: "Arizona",
    slug: "arizona",
    blurb:
      "Hardest water in US (12-17 GPG), slab leaks, 100+ days above 100°F. Phoenix, Tucson, Mesa, Scottsdale.",
  },
  {
    name: "Illinois",
    slug: "illinois",
    blurb:
      "Brutal winters, polar vortex freeze events, older Chicago housing stock. Chicago, Aurora, Naperville, Joliet.",
  },
  {
    name: "Georgia",
    slug: "georgia",
    blurb:
      "Atlanta metro growth, humid summers, mixed older homes + new construction. Atlanta, Augusta, Savannah.",
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    blurb:
      "Charlotte and Triangle growth corridors, mixed climate. Charlotte, Raleigh, Greensboro, Durham.",
  },
];

const problemProse = [
  "Most marketing agencies that approach plumbing contractors are selling the same playbook they sell to every category. That playbook doesn't survive plumbing economics. Plumbers have specific Google Business Profile category requirements, service-area-business verification dynamics, 24/7 emergency search patterns, and review velocity needs that generic agencies miss. The result is plumbing contractors paying for marketing that produces awareness instead of calls.",
  "The shared-lead platforms — Angi, HomeAdvisor, Networx, Thumbtack — are even worse on the math. They charge $80 to $150 per lead, sell that same lead to three or four competitors, and produce booking conversion rates below 30%. The effective customer acquisition cost on shared platforms typically runs $300 to $500 per actual booked job. Plumbers running entirely on shared leads are paying for the privilege of being interchangeable.",
  "Properly engineered plumbing marketing produces the opposite math. Organic Google Business Profile leads run $15 to $25 per call. Properly run Google Ads with plumber-specific keyword targeting run $30 to $80 per call depending on metro. Map pack ranking, once established, keeps producing leads for months and years without proportional reinvestment. The compounding is real and it favors plumbing contractors who treat marketing as infrastructure, not advertising.",
  "And the GBP suspension problem is unusually severe for plumbers. The service-area-business model triggers verification confusion. Competitive false reporting is common in dense markets. Duplicate listings from old agencies linger. A suspended profile during summer demand or a winter freeze event is a six-figure mistake. Suspension prevention and rapid reinstatement are core parts of the work, not afterthoughts.",
];

const problemCards = [
  {
    h: "The Decision Happens in Under 60 Seconds.",
    p: "Plumbing emergencies don't allow research. Customers open Google, look at three results, and call one. The other dozens of plumbers in that submarket are invisible.",
  },
  {
    h: "Shared-Lead Platforms are a Tax, Not a Channel.",
    p: "Angi, HomeAdvisor, Networx, Thumbtack — same lead sold to four competitors at $80-150 each. Effective CAC runs $300-500 per booked job. The math gets worse every year.",
  },
  {
    h: "Organic Compounds. Paid Evaporates.",
    p: "Map pack ranking, once won, keeps producing leads for months without additional spend. Google Ads stops the day you stop paying. Both have a place; the mix matters.",
  },
  {
    h: "GBP Suspensions Strike When You Can Least Afford Them.",
    p: "Service-area-business verification, competitor reports, duplicate listings — all common triggers. Suspension in peak season is one of the most expensive avoidable losses in plumbing marketing.",
  },
];

const mapPackParas = [
  "The Google Map Pack is the only piece of search real estate that matters for plumbing. Three pinned results sit above every organic listing for plumbing-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four plumbing customers searching at that moment. Everything below position #3 is functionally invisible.",
  "For plumbers specifically, the map pack matters even more than for other home services because of the emergency decision compression. A plumbing customer with active water damage will not scroll past the map pack to find your business. They will call whoever appears first. Our entire plumbing marketing program is engineered around getting you into one of those three slots and defending the position against competitors trying to displace you.",
  "The work to rank is concrete: a complete Google Business Profile rebuild with proper plumber categories and service-area-business verification, citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a seasonal plumbing calendar, and submarket-specific landing pages for every neighborhood you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
];

const resultsProse = [
  "Plumbing marketing follows a predictable three-phase pattern. Months 1-2 are the foundation phase — GBP rebuild, citation work, review system installation, schema and on-page work. Leads during this window are mostly inherited from your existing visibility. The work isn't visible yet, but it's the foundation that everything else compounds on.",
  "Months 3-5 are the ranking phase — your business begins appearing in the map pack for primary plumbing keywords, first at position #4 or #5, then moving up. Lead volume grows month over month as visibility compounds. The automated review system has fired hundreds of requests, citations are now consistent, and Google's algorithm has begun trusting the profile.",
  "Months 6 through 12 are sustained ranking — top-three positions held across primary and most secondary plumbing keywords, leads running at multiples of pre-engagement baseline. This is where the math gets meaningfully attractive — cost per lead has dropped to a fraction of paid ads, and the ranking keeps producing for months and years without proportional reinvestment.",
];

const resultStats = [
  {
    big: "8.6×",
    h: "Month 12 Lead Volume Vs Month 1",
    p: "Representative plumbing contractor trajectory across the first year on plan.",
  },
  {
    big: "90-180",
    h: "Days to Top-Three Rankings",
    p: "Depending on metro competitive density; suburban submarkets are faster.",
  },
  {
    big: "$15-25",
    h: "Cost Per Organic Plumber Lead",
    p: "Versus $300-500 effective CAC on shared-lead platforms like Angi.",
  },
  {
    big: "7+ mo",
    h: "Average #1 Position Duration",
    p: "Map pack ranking, once won, keeps producing without proportional spend.",
  },
];

const processSteps = [
  {
    n: "1",
    h: "The Free Audit",
    p: "Five-page written report covering current map pack position, GBP health, website audit, review velocity vs competitors, and the specific gaps keeping you out of the three-pack. Delivered within five business days. No sales call required to receive it.",
  },
  {
    n: "2",
    h: "The Strategy Call",
    p: "If the audit makes sense, thirty-minute call. You bring service area, plumbing specialties, dispatch software, seasonal patterns, current marketing spend. We map out which plan fits and where the first ranking wins will come from.",
  },
  {
    n: "3",
    h: "Launch & Reporting",
    p: "Within fourteen days of signing: GBP rebuilt, citations underway, submarket pages in production, review automation integrated with dispatch software. Monthly performance report covering rankings, calls, directions, and revenue attribution.",
  },
];

const faqs = [
  {
    q: "What does a plumbing marketing agency actually do?",
    a: "A plumbing marketing agency runs the digital marketing functions that bring service calls to plumbing contractors — Google Business Profile optimization for map pack rankings, Google Ads management, website design for mobile emergency conversions, review velocity systems, local SEO across submarkets, and citations across home services directories. The goal is consistent monthly call volume at lower cost per lead than shared platforms like Angi or HomeAdvisor.",
  },
  {
    q: "How is a plumbing marketing agency different from a general digital marketing agency?",
    a: "Plumbing-specific marketing requires knowledge most generalist agencies don't have. Plumbers operate as service-area businesses with no public storefront, which creates Google Business Profile verification dynamics that generalists miss. Plumbing customer searches are 92% mobile, emergency-driven, and decided in under sixty seconds. The category mix, attribute selection, and review velocity needed to win in plumbing differ from dental, restaurant, or general home services. A plumbing-specific agency calibrates the strategy to those mechanics.",
  },
  {
    q: "How quickly do plumbing contractors see results?",
    a: "Most plumbing contractors see initial map pack movement within 45 to 90 days of foundational work being completed. Top-three rankings for primary keywords like 'plumber near me' or 'emergency plumber' typically take 90 to 180 days depending on metro competitive density. Hyper-competitive metros like Phoenix, Houston, Dallas, and Chicago generally take six months. Less competitive suburban submarkets often hit top-three rankings inside 60 days.",
  },
  {
    q: "What does this cost?",
    a: "Plans start at $750 per month for foundational local SEO and Google Business Profile work, $1,350 per month for growth-stage plumbing companies needing paid ads, review automation, and website rebuild support, and $2,000 per month for established firms wanting the full marketing stack including social, content, and multi-state expansion. Ad spend is separate. Every plan is month-to-month with no setup fee.",
  },
  {
    q: "Do you handle Google Business Profile suspensions?",
    a: "Yes. GBP reinstatement is included on every plan. Plumbers see disproportionately high suspension rates because of the service-area-business model, competitor false reporting in dense markets, and duplicate listings from old marketing agencies. Most reinstatements resolve within seven to twenty-one days. We've reinstated 300-plus profiles across home services nationally.",
  },
  {
    q: "What states do you serve?",
    a: "We work with plumbing contractors nationally. The states with our deepest presence and dedicated marketing pages are Florida, Texas, California, Arizona, Illinois, Georgia, and North Carolina. Each state has unique plumbing market dynamics — hard water in Phoenix, slab construction in Florida, freeze events in Illinois — and the marketing strategy adapts to those dynamics. We also serve plumbing contractors in other states; the seven listed are simply the ones with dedicated landing pages.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://zonicllc.com/services/plumbing-marketing-agency",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  pageUrl: "/services/plumbing-marketing-agency",
  areaServed: { type: "Country", name: "United States" },
});

const serviceJsonLd = buildServiceJsonLd({
  name: "Plumbing Marketing Agency",
  description:
    "Plumbing marketing agency for contractors. Google Business Profile, Google Maps ranking, paid ads, websites, and reviews. Free plumbing marketing audit.",
  pageUrl: "/services/plumbing-marketing-agency",
  serviceType: "Plumbing Marketing",
  areaServed: "United States",
});

function Page() {
  return (
    <>
      <Script
        id="pmb-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="pmb-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="pmb-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Script
        id="pmb-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div id="hia-top" className="hia-page">
        {/* Ticker */}
        <div className="hia-ticker">
          <div className="hia-ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* Minimal NAV — logo image */}
        <nav className="hia-nav">
          <Link href="/" className="hia-nav-logo" aria-label="Zonic Media">
            <Image
              src="/images/logo.webp"
              width={108}
              height={41}
              alt="Zonic Media"
              className="hia-nav-logo-img"
              priority
            />
          </Link>
          <div className="hia-nav-links">
            <HashScrollLink href="#hia-problem">The Problem</HashScrollLink>
            <HashScrollLink href="#hia-map">Map Pack</HashScrollLink>
            <HashScrollLink href="#hia-services">What We Do</HashScrollLink>
            <HashScrollLink href="#hia-states">States</HashScrollLink>
            <HashScrollLink href="#hia-pricing">Pricing</HashScrollLink>
            <HashScrollLink href="#hia-faq">FAQ</HashScrollLink>
          </div>
          <div className="hia-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="hia-nav-phone">
              {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#hia-audit-top" className="hia-nav-cta">
              Free Plumbing Audit
            </HashScrollLink>
          </div>
        </nav>

        <div className="hia-main-wrapper">
          <div className="hia-row">
            {/* LEFT: CONTENT */}
            <div className="hia-content-col">
              {/* HERO */}
              <section className="hia-hero">
                <div className="hia-eyebrow">For Plumbing Contractors</div>
                <h1>
                  Plumbing Marketing Agency Built for the{" "}
                  <span className="hia-accent">Calls You Actually Want.</span>
                </h1>
                <p className="hia-hero-sub">
                  The customer whose pipe is bursting at 11 PM does not
                  research. They search and they call. We help plumbing
                  contractors win those calls — through{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="pmb-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  that gets you into the map pack,{" "}
                  <Link
                    href="/services/plumbing-website-design"
                    className="pmb-inline-link"
                  >
                    websites that convert mobile emergencies
                  </Link>
                  , reviews that compound month over month,
                  paid ads tuned to plumbing search patterns, and local SEO
                  across every submarket you serve. Across home services
                  we&apos;ve helped 50-plus plumbing contractors rank in their
                  map packs and cut cost per lead from $80-150 on shared
                  platforms to $15-25 organic.
                </p>
                <div className="hia-hero-ctas">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Get Free Plumbing Audit →
                  </HashScrollLink>
                  <Link
                    href={SITE_CONTACT.phoneHref}
                    className="hia-btn hia-btn-ghost"
                  >
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>

                <div className="hia-trust-row">
                  {trustItems.map((t, i) => (
                    <div className="hia-trust-item" key={i}>
                      <span className="hia-trust-num">{t.num}</span>
                      <span className="hia-trust-label">{t.label}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile/Tab top inline form */}
                <div
                  className="hia-mob-form hia-mob-form-top d-block d-lg-none"
                  id="hia-audit-top"
                >
                  <PlumberLeadForm />
                </div>
              </section>

              {/* PROBLEM */}
              <section className="hia-section" id="hia-problem">
                <div className="hia-sec-label">
                  Why Plumbing Marketing Is Different
                </div>
                <h2 className="hia-sec-h2">
                  Plumbing Customers Don&apos;t Compare. They Call the First
                  Plumber <span className="hia-accent">They See.</span>
                </h2>
                <p className="hia-sec-sub">
                  Plumbing has the shortest decision cycle of any home service
                  category. A roofing customer can compare three estimates over
                  a week. A plumbing customer has water actively pooling on
                  their kitchen floor. They open Google, type &ldquo;plumber
                  near me,&rdquo; and call the first business pinned to the map.
                  Whoever appears in the three-pin map pack captures the lead.
                  Whoever doesn&apos;t might as well not exist for that customer
                  in that moment.
                </p>
                <div className="hia-problem-prose">
                  {problemProse.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="hia-section-cta">
                  <Link href={SITE_CONTACT.phoneHref} className="hia-cta-call">
                    <span className="hia-cta-call-dot" aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>
                <div className="hia-problem-grid">
                  {problemCards.map((c, i) => (
                    <div className="hia-problem-card" key={i}>
                      <h4>{c.h}</h4>
                      <p>{c.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              <MapPackRaceVisual copy={visualCopy} />

              {/* MAP PACK */}
              <section className="hia-section hia-results-sec" id="hia-map">
                <div className="hia-sec-label">How Customers Find Plumbers</div>
                <h2 className="hia-sec-h2">
                  Three Pinned Results. One Winner.{" "}
                  <span className="hia-accent">Roughly 73% of All Calls.</span>
                </h2>
                <div className="hia-results-prose">
                  {mapPackParas.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Check My Map Pack Position →
                  </HashScrollLink>
                </div>
              </section>

              {/* SERVICES */}
              <section
                className="hia-section hia-services-sec"
                id="hia-services"
              >
                <div className="hia-sec-label">
                  What a Plumbing Marketing Agency Delivers
                </div>
                <h2 className="hia-sec-h2">
                  Six Marketing Functions, Tuned for{" "}
                  <span className="hia-accent">Plumbing Economics.</span>
                </h2>
                <p className="hia-sec-sub">
                  Every service below is calibrated to how plumbing customers
                  actually find and choose plumbers. Generic marketing
                  fundamentals get a plumber-specific layer — categories,
                  attributes, schema, content cadence, ad copy patterns, and
                  review templates designed around plumbing search behavior, the
                  same foundation as our dedicated{" "}
                  <Link
                    href="/services/industry/seo-services-for-plumber"
                    className="pmb-inline-link"
                  >
                    SEO services for plumbers
                  </Link>
                  .
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Audit My Full Funnel →
                  </HashScrollLink>
                </div>
                <div className="hia-svc-grid">
                  {SERVICES.map((s, i) => (
                    <article className="hia-svc-card" key={i}>
                      <div className="hia-svc-num">{s.num}</div>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                    </article>
                  ))}
                </div>
              </section>

              <LeadEngineVisual copy={visualCopy} />

              {/* SPECIALTIES */}
              <section className="hia-section" id="hia-specialties">
                <div className="hia-sec-label">
                  Plumbing Specialties We Market
                </div>
                <h2 className="hia-sec-h2">
                  Eight Plumbing Service Categories Where Local Visibility{" "}
                  <span className="hia-accent">Decides Who Books.</span>
                </h2>
                <p className="hia-sec-sub">
                  Each specialty has its own customer search behavior, its own
                  competitive landscape, and its own optimal keyword set. We
                  tune the strategy to the specialties that drive your business
                  — whether you&apos;re an emergency-only operation, a
                  water-heater specialist, or a full-service plumbing firm — all
                  built on the same{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="pmb-inline-link"
                  >
                    local SEO for home services
                  </Link>{" "}
                  foundation.
                </p>
                <div className="hia-industry-grid">
                  {SPECIALTIES.map((s, i) => (
                    <div className="hia-industry-card" key={i}>
                      <span className="pmb-spec-icon" aria-hidden="true">
                        {s.icon}
                      </span>
                      <h4>{s.h}</h4>
                      <p>{s.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* RESULTS */}
              <section className="hia-section hia-results-sec" id="hia-results">
                <div className="hia-sec-label">What This Actually Produces</div>
                <h2 className="hia-sec-h2">
                  Three Phases. One Outcome.{" "}
                  <span className="hia-accent">
                    Leads Compounding for Years.
                  </span>
                </h2>
                <p className="hia-sec-sub">
                  These are the patterns we see across the plumbing contractors
                  we work with through the first twelve months. Your specific
                  numbers will depend on your metro&apos;s competitive density,
                  your current presence, how aggressive you want to be, and
                  whether you pair organic rankings with{" "}
                  <Link href="/services/google-ads" className="pmb-inline-link">
                    Google Ads management
                  </Link>{" "}
                  to accelerate early lead flow.
                </p>
                <div className="hia-results-prose">
                  {resultsProse.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="hia-stat-stack">
                  {resultStats.map((s, i) => (
                    <div className="hia-stat-row" key={i}>
                      <div className="hia-stat-big">{s.big}</div>
                      <div className="hia-stat-desc">
                        <h4>{s.h}</h4>
                        <p>{s.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit"
                    className="hia-btn hia-btn-primary"
                  >
                    Get My Growth Plan →
                  </HashScrollLink>
                </div>
              </section>

              {/* STATES */}
              <section className="hia-section hia-states" id="hia-states">
                <div className="hia-sec-label">States We Cover</div>
                <h2 className="hia-sec-h2">
                  Plumbing Marketing Built for the State You{" "}
                  <span className="hia-accent">Actually Operate In.</span>
                </h2>
                <p className="hia-sec-sub">
                  Plumbing markets vary dramatically by state. Florida&apos;s
                  slab construction and humidity drive a different service mix
                  than Arizona&apos;s hard-water and extreme heat. Illinois
                  winters produce freeze emergencies Texas plumbers never see.
                  The seven states below have dedicated plumbing marketing pages
                  calibrated to each market&apos;s specific economics, and we run
                  the same state-by-state playbook for our{" "}
                  <Link
                    href="/services/hvac-marketing-agency"
                    className="pmb-inline-link"
                  >
                    HVAC marketing agency
                  </Link>{" "}
                  clients — plus a dedicated{" "}
                  <Link
                    href="/services/septic-marketing-agency"
                    className="pmb-inline-link"
                  >
                    septic marketing
                  </Link>{" "}
                  program for plumbers who also run septic crews.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Request Free Audit →
                  </HashScrollLink>
                </div>
                <div className="hia-industry-grid">
                  {states.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/plumbing-marketing-agency/${s.slug}`}
                      className="hia-industry-card"
                    >
                      <h4>{s.name}</h4>
                      <p>{s.blurb}</p>
                      <span className="his-city-link">
                        {s.name} Plumbing Marketing →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* PROCESS */}
              <section className="hia-section">
                <div className="hia-sec-label">
                  How We Work With Plumbing Contractors
                </div>
                <h2 className="hia-sec-h2">
                  Three-Step Start. Then We{" "}
                  <span className="hia-accent">Get to Work.</span>
                </h2>
                <p className="hia-sec-sub">
                  Plumbing contractors are running crews, dispatching emergency
                  calls, and managing techs. Your total time investment across
                  the first two weeks is under an hour. After that, you read a
                  monthly report.
                </p>
                <div className="hia-section-cta">
                  <Link href={SITE_CONTACT.phoneHref} className="hia-cta-call">
                    <span className="hia-cta-call-dot" aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>
                <div className="hia-process-grid">
                  {processSteps.map((s, i) => (
                    <div className="hia-process-step" key={i}>
                      <span className="hia-process-num">{s.n}</span>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CLUTCH REVIEWS */}
              <section
                className="hia-section hia-reviews-sec"
                id="hia-reviews"
              >
                <div className="hia-sec-label">
                  Trusted by Clients Nationwide
                </div>
                <h2 className="hia-sec-h2">
                  What Plumbers and Other Service Businesses{" "}
                  <span className="hia-accent">Say About Working with Us.</span>
                </h2>
                <p className="hia-sec-sub">
                  Verified reviews from Clutch — the independent platform
                  agencies can&apos;t edit, filter, or fake. The same operators
                  who hired us to win the map pack left these.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit"
                    className="hia-btn hia-btn-primary"
                  >
                    Become the Next Win →
                  </HashScrollLink>
                </div>
                <div className="hia-reviews-wrap">
                  <ClutchWidget
                    widgetType="12"
                    height="375"
                    primaryColor="#2567e8"
                    reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
                  />
                </div>
              </section>

              <GrowthCurveVisual copy={visualCopy} />

              {/* PRICING */}
              <section className="hia-section hia-pricing-sec" id="hia-pricing">
                <div className="hia-sec-label">
                  Transparent Pricing, Month to Month
                </div>
                <h2 className="hia-sec-h2">
                  Three Plans Built for Where Your Plumbing Company is{" "}
                  <span className="hia-accent">Right Now.</span>
                </h2>
                <p className="hia-sec-sub">
                  Pick the plan that fits where you are today — move up or down
                  between tiers any month. Ad spend is separate from the
                  management fee. No setup fees, no twelve-month lockups, and{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="pmb-inline-link"
                  >
                    Google Business Profile reinstatement
                  </Link>{" "}
                  is included on every plan. Most plumbing contractors start at
                  Growth to get review automation, Google Ads, and submarket
                  expansion working in parallel with the foundational work.
                </p>
                <div className="hia-price-grid">
                  {PRICE_CARDS.map((p, i) => (
                    <div
                      className={`hia-price-card${p.featured ? " hia-featured" : ""}`}
                      key={i}
                    >
                      {p.featured && p.badge && (
                        <div className="hia-price-badge">{p.badge}</div>
                      )}
                      <div className="hia-price-tier">{p.tier}</div>
                      <div className="hia-price-amount">{p.amount}</div>
                      <div className="hia-price-period">{p.period}</div>
                      <hr className="hia-price-divider" />
                      <ul className="hia-price-list">
                        {p.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                      <HashScrollLink
                        href="#hia-audit"
                        className="hia-btn hia-btn-primary hia-btn-block"
                      >
                        {p.cta}
                      </HashScrollLink>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="hia-section" id="hia-faq">
                <div className="hia-sec-label">
                  Common Questions From Plumbing Contractors
                </div>
                <h2 className="hia-sec-h2">
                  Everything You Wanted to Ask Before That{" "}
                  <span className="hia-accent">Strategy Call.</span>
                </h2>
                <p className="hia-sec-sub">
                  If you don&apos;t see your question here, include it in the
                  audit form and we&apos;ll answer it in the written report.
                </p>
                <HiaFaqAccordion items={faqs} defaultOpen={0} />
              </section>

              {/* Mobile inline form */}
              <div className="hia-mob-form d-block d-lg-none" id="hia-audit">
                <PlumberLeadForm />
              </div>
            </div>

            {/* RIGHT: STICKY FORM */}
            <div
              className="hia-form-col d-none d-lg-block"
              data-scroll-target="hia-audit hia-audit-top"
            >
              <div className="hia-sticky-form" id="hia-audit-desktop">
                <PlumberLeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="hia-final-cta">
          <div className="hia-fc-inner">
            <div className="hia-eyebrow hia-eyebrow-light">
              Start With the Free Audit
            </div>
            <h2>
              Get a Plumbing Marketing Audit Built Around{" "}
              <span className="hia-accent">
                Your Specific State and Service Area.
              </span>
            </h2>
            <p className="hia-fc-lede">
              Five-page written report covering current map pack position,
              Google Business Profile health,{" "}
              <Link href="/services/web-design" className="pmb-inline-link">
                website conversion architecture
              </Link>
              , review velocity vs the plumbers outranking you, and the specific
              work required to move your business into the three-pack across the
              submarkets you actually serve. Delivered within five business
              days.
            </p>
            <ul className="hia-final-check">
              <li>No long-term contract — every plan month-to-month</li>
              <li>GBP reinstatement included on every plan</li>
              <li>Starting at $750/mo · No setup fee</li>
              <li>Free audit before any commitment</li>
              <li>Active across FL · TX · CA · AZ · IL · GA · NC and nationally</li>
            </ul>
            <div className="hia-fc-actions">
              <Link href={SITE_CONTACT.phoneHref} className="hia-fc-call">
                Call {SITE_CONTACT.phoneDisplay}
              </Link>
              <HashScrollLink href="#hia-audit" className="hia-fc-form">
                Submit My Free Audit →
              </HashScrollLink>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <PlumbingConsentNotice />
      <Footer />
    </>
  );
}

export default Page;
