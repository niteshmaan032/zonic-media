import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import "@/app/style/homeInspAgency.css";
import "@/app/style/homeInspState.css";
import "@/app/style/hvacExtra.css";

import HvacLeadForm from "@/app/components/HvacLeadForm";
import HiaFaqAccordion from "@/app/components/HiaFaqAccordion";
import HashScrollLink from "@/app/components/HashScrollLink";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import RelatedServices from "@/app/components/RelatedServices";
import {
  GrowthCurveVisual,
  LeadEngineVisual,
  MapPackRaceVisual,
} from "@/app/components/IndustryMarketingVisuals";
import HvacConsentNotice from "./HvacConsentNotice";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";
import { SERVICES, SPECIALTIES, PRICE_CARDS } from "./stateContent";

export const metadata: Metadata = {
  title: "HVAC Marketing Agency for Contractors",
  description:
    "HVAC marketing agency for HVAC contractors. Google Business Profile, Google Maps ranking, ads, maintenance memberships, websites, and reviews. Free audit.",
  keywords: [
    "HVAC marketing agency",
    "marketing for HVAC contractors",
    "HVAC SEO services",
    "HVAC lead generation",
    "local SEO for HVAC companies",
    "Google Maps ranking for HVAC contractors",
    "Google Business Profile for HVAC companies",
    "Google Ads for HVAC companies",
    "HVAC maintenance membership marketing",
    "HVAC website design",
  ],
  alternates: { canonical: "/services/hvac-marketing-agency" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "HVAC Marketing Agency", url: "/services/hvac-marketing-agency" },
]);

const visualCopy = {
  industry: "HVAC",
  industryTitle: "HVAC",
  business: "HVAC company",
  jobsNoun: "booked service calls",
  mapQuery: "ac repair near me",
};

const tickerItems = [
  "Free HVAC Marketing Audit",
  "Google Maps · Google Ads · Website · Reviews · GBP",
  "500+ Local Businesses Ranked · 35+ HVAC Contractors Served",
  "FL · TX · CA · AZ · IL · GA · NC",
  "Starting at $750/mo · Month-to-Month",
];

const trustItems = [
  { num: "500+", label: "Local Businesses Ranked" },
  { num: "35+", label: "HVAC Contractors Served" },
  { num: "2 peaks", label: "Cooling + Heating Demand Windows" },
  { num: "4.9/5", label: "Client Satisfaction" },
];

const states = [
  {
    name: "Florida",
    slug: "florida",
    blurb:
      "Year-round cooling, salt-air condenser corrosion, hurricane recovery work, snowbird seasonality. Miami, Tampa, Orlando, Jacksonville.",
  },
  {
    name: "Texas",
    slug: "texas",
    blurb:
      "Extreme heat + 2021 freeze dual stressors. Hurricane Beryl recovery. Houston, Dallas, Austin, San Antonio.",
  },
  {
    name: "California",
    slug: "california",
    blurb:
      "Title 24 efficiency mandates, heat pump conversion requirements, refrigerant transition. LA, San Francisco, San Diego, Sacramento.",
  },
  {
    name: "Arizona",
    slug: "arizona",
    blurb:
      "115°F+ destroys condensers. Heat pumps overwork. Monsoon dust damages systems. Phoenix, Tucson, Mesa, Scottsdale.",
  },
  {
    name: "Illinois",
    slug: "illinois",
    blurb:
      "Brutal winter heating peak, polar vortex furnace emergencies, older Chicago heating systems. Chicago, Aurora, Naperville, Rockford.",
  },
  {
    name: "Georgia",
    slug: "georgia",
    blurb:
      "Hot humid summers, Atlanta growth corridor, occasional freeze surprises. Atlanta, Augusta, Savannah, Columbus.",
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    blurb:
      "Heat pump capital of the Southeast. Charlotte and Triangle growth. Mixed climate. Charlotte, Raleigh, Greensboro, Durham.",
  },
];

const problemProse = [
  "Most marketing agencies that approach HVAC contractors are selling the same playbook they sell to every category. That playbook doesn't survive HVAC economics. HVAC contractors have specific Google Business Profile category requirements, service-area-business verification dynamics, 24/7 emergency search patterns, and review velocity needs that generic agencies miss. The result is HVAC contractors paying for marketing that produces awareness instead of calls.",
  "The shared-lead platforms — Angi, HomeAdvisor, Networx, Thumbtack — are even worse on the math. They charge $80 to $150 per lead, sell that same lead to three or four competitors, and produce booking conversion rates below 30%. The effective customer acquisition cost on shared platforms typically runs $300 to $500 per actual booked job. HVAC contractors running entirely on shared leads are paying for the privilege of being interchangeable.",
  "Properly engineered HVAC marketing produces the opposite math. Organic Google Business Profile leads run $15 to $25 per call. Google Ads with proper HVAC keyword targeting run $40 to $90 per call depending on metro. And maintenance contracts — the recurring revenue play — convert one-time service customers into 80%+ gross margin recurring revenue at scale. HVAC contractors with established maintenance contract programs run 30-50% of their annual revenue on autopilot.",
  "The refrigerant transition from R-410A to R-454B that began in 2025 adds a new marketing layer. Customers are confused about what the transition means for their existing systems, repair vs replacement decisions, and 2026+ pricing. HVAC contractors who address the transition openly in their website content and Google Posts capture trust and bookings the contractors who ignore it lose. We build refrigerant-transition content into every HVAC marketing program.",
];

const problemCards = [
  {
    h: "70% of Annual Demand Hits in Two Narrow Windows.",
    p: "Late May through September for cooling. Late November through February for heating. Miss either window because rankings weren't established and you've lost a year of growth.",
  },
  {
    h: "Timing the Launch Matters More Than in Any Other Category.",
    p: "Foundational work has to begin 90-180 days before the peak season. March-April launches catch the cooling peak. September launches catch the heating peak. June launches miss both.",
  },
  {
    h: "Maintenance Contracts are the Highest-Leverage HVAC Asset.",
    p: "Recurring revenue at 80%+ margins. Two visits per year keep customers loyal and create referrals. Most HVAC contractors leave this on the table because no one marketed for it.",
  },
  {
    h: "The R-410A to R-454B Refrigerant Transition is Reshaping Repair-Vs-Replace Decisions.",
    p: "Customers are confused about A2L refrigerants. Contractors who address the transition openly capture the conversation. Those who avoid it lose trust to those who don't.",
  },
];

const mapPackParas = [
  "The Google Map Pack is the only piece of search real estate that matters for HVAC. Three pinned results sit above every organic listing for HVAC-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four HVAC customers searching at that moment. During peak summer heat waves and winter cold snaps, those percentages skew even harder toward position #1.",
  "For HVAC specifically, the map pack matters more than for any other home service because of the emergency equipment failure pattern. When an AC fails on a 95°F afternoon, the indoor temperature climbs by roughly 4°F per hour. By the time a homeowner finishes comparing three quotes, the house is uncomfortable enough that they'll call whoever can come fastest. The same physics applies in reverse for furnaces during winter storms. Our entire HVAC marketing program is engineered around getting you into one of the three map pack slots and defending that position year-round.",
  "The work to rank is concrete: a complete Google Business Profile rebuild with proper HVAC categories (HVAC contractor, air conditioning contractor, heating contractor, furnace repair service), NATE-certification trust signals, equipment manufacturer credentials (Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi), citation consistency across home services directories, automated review velocity from every completed service call, seasonal Google Posts on a HVAC content calendar, and submarket-specific landing pages.",
];

const resultsProse = [
  "HVAC marketing follows the most predictable seasonal pattern in home services. Cooling peak hits May through August — emergency AC repairs, condenser replacements, full system installs in homes where the old AC finally died on a 95°F afternoon. Heating peak hits November through February — furnace repairs, heating system installs, no-heat emergencies during the first cold snap.",
  "The shoulder seasons — March-April and September-October — are where the foundational work compounds. Maintenance contract members generate steady twice-yearly visits. Indoor air quality add-ons close at high rates. Heat pump conversions hit during shoulder months when customers can plan ahead rather than react to emergencies. The right HVAC marketing program treats shoulder seasons as the strategic windows they are, not as off-season downtime.",
  "The compounding effect across HVAC marketing is steeper than in any other home services category because rankings established before a peak window translate directly to peak-window revenue. Maintenance contract members compound year over year — every member added in year one continues generating revenue in years two, three, four. HVAC contractors who treat marketing as a 12-month system rather than a peak-season scramble build defensible, growing books of business.",
];

const resultStats = [
  {
    big: "6.3×",
    h: "Peak Month Lead Volume Vs Month 1",
    p: "Representative HVAC contractor trajectory across the first year on plan.",
  },
  {
    big: "90-180",
    h: "Days to Top-Three Rankings",
    p: "Depending on metro competitive density; suburban submarkets are faster.",
  },
  {
    big: "$15-25",
    h: "Cost Per Organic HVAC Lead",
    p: "Versus $300-500 effective CAC on shared-lead platforms like Angi.",
  },
  {
    big: "30-50%",
    h: "Revenue from Memberships at Scale",
    p: "Recurring maintenance-contract revenue at 80%+ gross margin.",
  },
];

const processSteps = [
  {
    n: "1",
    h: "The Free Audit",
    p: "Five-page written report covering current map pack position, GBP health, website audit, maintenance-contract opportunity assessment, review velocity vs competitors, and the specific gaps keeping you out of the three-pack. Delivered within five business days.",
  },
  {
    n: "2",
    h: "The Strategy Call",
    p: "Thirty-minute call covering service area, HVAC specialties (cooling, heating, heat pumps, ductless, commercial), dispatch software, peak season patterns, current maintenance member count, and current marketing spend. We map out the plan and the seasonal timing — when we launch matters as much as what we launch.",
  },
  {
    n: "3",
    h: "Launch & Reporting",
    p: "Within fourteen days of signing: GBP rebuilt with HVAC-specific categories and NATE markup, citations underway, membership landing page launched, review automation integrated with dispatch software. Monthly performance reports covering rankings, calls, memberships, and revenue attribution.",
  },
];

const faqs = [
  {
    q: "What does an HVAC marketing agency actually do?",
    a: "An HVAC marketing agency runs the digital marketing functions that bring service calls to HVAC contractors — Google Business Profile optimization for map pack rankings, Google Ads management, website design for mobile emergency conversions, review velocity systems, local SEO across submarkets, and citations across home services directories. The goal is consistent monthly call volume at lower cost per lead than shared platforms like Angi or HomeAdvisor.",
  },
  {
    q: "How is an HVAC marketing agency different from a general digital marketing agency?",
    a: "HVAC-specific marketing requires industry knowledge most generalists lack. HVAC contractors operate as service-area businesses with seasonal demand asymmetry — summer cooling spikes and winter heating spikes drive 60-80% of annual call volume in concentrated windows. The category mix on Google Business Profile, the attribute selection, the ad copy patterns tuned to emergency cooling and emergency heating searches, the maintenance-contract membership funnel, and the refrigerant-transition messaging (R-410A to R-454B) all differ from general home services. A HVAC-specific agency calibrates the strategy to these mechanics.",
  },
  {
    q: "How quickly do HVAC contractors see results?",
    a: "Most HVAC contractors see initial map pack movement within 45 to 90 days of foundational work being completed. Top-three rankings for primary keywords like \"HVAC contractor near me\" or \"emergency HVAC contractor\" typically take 90 to 180 days depending on metro competitive density. Hyper-competitive metros like Phoenix, Houston, Dallas, and Chicago generally take six months. Less competitive suburban submarkets often hit top-three rankings inside 60 days.",
  },
  {
    q: "What does this cost?",
    a: "Plans start at $750 per month for foundational local SEO and Google Business Profile work, $1,350 per month for growth-stage HVAC companies needing paid ads, review automation, and website rebuild support, and $2,000 per month for established firms wanting the full marketing stack including social, content, and multi-state expansion. Ad spend is separate. Every plan is month-to-month with no setup fee.",
  },
  {
    q: "Do you handle Google Business Profile suspensions?",
    a: "Yes. GBP reinstatement is included on every plan. HVAC contractors see disproportionately high suspension rates because of the service-area-business model, competitor false reporting in dense markets, and duplicate listings from old marketing agencies. Most reinstatements resolve within seven to twenty-one days. We've reinstated 300-plus profiles across home services nationally.",
  },
  {
    q: "What states do you serve?",
    a: "We work with HVAC contractors nationally. The states with our deepest presence and dedicated marketing pages are Florida, Texas, California, Arizona, Illinois, Georgia, and North Carolina. Each state has unique HVAC market dynamics — 115°F summers in Phoenix, year-round cooling and hurricane recovery in Florida, polar vortex furnace emergencies in Illinois — and the marketing strategy adapts to those dynamics. We also serve HVAC contractors in other states; the seven listed are simply the ones with dedicated landing pages.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://zonicllc.com/services/hvac-marketing-agency",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  pageUrl: "/services/hvac-marketing-agency",
  areaServed: { type: "Country", name: "United States" },
});

const serviceJsonLd = buildServiceJsonLd({
  name: "HVAC Marketing Agency",
  description:
    "HVAC marketing agency for HVAC contractors. Google Business Profile, Google Maps ranking, ads, maintenance memberships, websites, and reviews. Free audit.",
  pageUrl: "/services/hvac-marketing-agency",
  serviceType: "HVAC Marketing",
  areaServed: "United States",
});

function Page() {
  return (
    <>
      <script
        id="hvac-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="hvac-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="hvac-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        id="hvac-service-schema"
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
              Free HVAC Audit
            </HashScrollLink>
          </div>
        </nav>

        <div className="hia-main-wrapper">
          <div className="hia-row">
            {/* LEFT: CONTENT */}
            <div className="hia-content-col">
              {/* HERO */}
              <section className="hia-hero">
                <div className="hia-eyebrow">
                  For HVAC Contractors · Dual-Peak Marketing
                </div>
                <h1>
                  HVAC Marketing Agency Built for the{" "}
                  <span className="hia-accent">
                    95° Thursday and the 20° Sunday.
                  </span>
                </h1>
                <p className="hia-hero-sub">
                  When the AC dies on a 95°F afternoon or the furnace quits at
                  5°F, customers don&apos;t research — they search and they
                  call. We help HVAC contractors win those calls through{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="hvac-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  that gets you into the map pack,{" "}
                  <Link
                    href="/services/hvac-website-design"
                    className="hvac-inline-link"
                  >
                    HVAC websites that convert mobile emergencies
                  </Link>
                  , reviews that compound month
                  over month, paid ads tuned to HVAC seasonal patterns, and
                  local SEO across every submarket you serve. Across home
                  services we&apos;ve helped HVAC contractors rank in their map
                  packs and cut cost per lead from $80-150 on shared platforms
                  to $15-25 organic.
                </p>
                <div className="hia-hero-ctas">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Get Free HVAC Audit →
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
                  <HvacLeadForm />
                </div>
              </section>

              {/* PROBLEM */}
              <section className="hia-section" id="hia-problem">
                <div className="hia-sec-label">
                  Why HVAC Marketing Is Different
                </div>
                <h2 className="hia-sec-h2">
                  HVAC Has the Most Extreme Seasonal Demand Asymmetry in{" "}
                  <span className="hia-accent">Home Services.</span>
                </h2>
                <p className="hia-sec-sub">
                  70% of annual call volume is concentrated in two peak windows
                  — summer cooling (May-September) and winter heating
                  (November-February). When the AC dies on a 95°F afternoon or
                  the furnace stops at 5°F, customers don&apos;t research — they
                  search &ldquo;AC repair near me&rdquo; or &ldquo;emergency
                  furnace repair&rdquo; and call the first business pinned to
                  the map pack.
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
                <div className="hia-sec-label">
                  How Customers Find HVAC Contractors
                </div>
                <h2 className="hia-sec-h2">
                  &ldquo;AC Repair Near Me&rdquo; at 95°F is a{" "}
                  <span className="hia-accent">30-Second Decision.</span>
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
                  What an HVAC Marketing Agency Delivers
                </div>
                <h2 className="hia-sec-h2">
                  Six Marketing Functions, Tuned for{" "}
                  <span className="hia-accent">HVAC Economics.</span>
                </h2>
                <p className="hia-sec-sub">
                  Every service below is calibrated to how HVAC customers
                  actually find and choose contractors. Generic marketing
                  fundamentals get an HVAC-specific layer — categories,
                  attributes, schema, content cadence, ad copy patterns, and
                  review templates designed around HVAC search behavior, the same
                  foundation as our dedicated{" "}
                  <Link
                    href="/services/industry/local-seo-services-for-hvac"
                    className="hvac-inline-link"
                  >
                    local SEO for HVAC companies
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
                <div className="hia-sec-label">HVAC Specialties We Market</div>
                <h2 className="hia-sec-h2">
                  Eight HVAC Service Categories Where Map Pack Visibility{" "}
                  <span className="hia-accent">Decides Who Books.</span>
                </h2>
                <p className="hia-sec-sub">
                  Each specialty has its own customer search behavior, its own
                  competitive landscape, and its own optimal keyword set. We
                  tune the strategy to the specialties that drive your business
                  — whether you&apos;re emergency service, residential install,
                  commercial, or the rapidly growing heat-pump and ductless
                  markets — all built on the same{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="hvac-inline-link"
                  >
                    local SEO for home services
                  </Link>{" "}
                  foundation.
                </p>
                <div className="hia-industry-grid">
                  {SPECIALTIES.map((s, i) => (
                    <div className="hia-industry-card" key={i}>
                      <span className="hvac-spec-icon" aria-hidden="true">
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
                  Two Peaks. One Predictable Pattern.{" "}
                  <span className="hia-accent">
                    Years of Compounding Leads.
                  </span>
                </h2>
                <p className="hia-sec-sub">
                  These are the patterns we see across the HVAC contractors we
                  work with through the first twelve months. Your specific
                  numbers will depend on your metro&apos;s competitive density,
                  your current presence, how aggressive you want to be, and
                  whether you pair organic rankings with{" "}
                  <Link href="/services/google-ads" className="hvac-inline-link">
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
                  HVAC Marketing Tuned to the Climate and Competitive Density of{" "}
                  <span className="hia-accent">Each State.</span>
                </h2>
                <p className="hia-sec-sub">
                  HVAC markets vary dramatically by state. Phoenix runs cooling
                  year-round. Chicago survives or fails on winter heating
                  volume. California is mandating heat pump conversions.
                  Florida&apos;s salt air corrodes condensers at three times the
                  inland rate. The seven states below have dedicated HVAC
                  marketing pages calibrated to each market&apos;s specific
                  economics, and we run the same state-by-state playbook for our{" "}
                  <Link
                    href="/services/plumbing-marketing-agency"
                    className="hvac-inline-link"
                  >
                    plumbing marketing agency
                  </Link>{" "}
                  clients.
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
                      href={`/services/hvac-marketing-agency/${s.slug}`}
                      className="hia-industry-card"
                    >
                      <h4>{s.name}</h4>
                      <p>{s.blurb}</p>
                      <span className="his-city-link">
                        {s.name} HVAC Marketing →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* PROCESS */}
              <section className="hia-section">
                <div className="hia-sec-label">
                  How We Work With HVAC Contractors
                </div>
                <h2 className="hia-sec-h2">
                  Three-Step Start, Timed to Your{" "}
                  <span className="hia-accent">Peak Season.</span>
                </h2>
                <p className="hia-sec-sub">
                  HVAC marketing timing matters more than launch speed. We
                  deliberately try to start engagements in shoulder seasons
                  (March-April for cooling peak, September-October for heating
                  peak) so foundational work is established before peak demand
                  hits. Your total time investment across the first two weeks is
                  under an hour.
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
                  What HVAC Contractors and Other Service Businesses{" "}
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
                    reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
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
                  Three Plans Built for Where Your HVAC Company is{" "}
                  <span className="hia-accent">Right Now.</span>
                </h2>
                <p className="hia-sec-sub">
                  Pick the plan that fits where you are today — move up or down
                  between tiers any month. Ad spend is separate from the
                  management fee. No setup fees, no twelve-month lockups, and{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="hvac-inline-link"
                  >
                    Google Business Profile reinstatement
                  </Link>{" "}
                  is included on every plan. Most HVAC contractors start at
                  Growth to get Google Ads management and maintenance-contract
                  membership program development working in parallel with
                  foundational work.
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
                  Common Questions From HVAC Contractors
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
                <HvacLeadForm />
              </div>
            </div>

            {/* RIGHT: STICKY FORM */}
            <div
              className="hia-form-col d-none d-lg-block"
              data-scroll-target="hia-audit hia-audit-top"
            >
              <div className="hia-sticky-form" id="hia-audit-desktop">
                <HvacLeadForm />
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
              Get an HVAC Marketing Audit Built Around{" "}
              <span className="hia-accent">Your Peak Season.</span>
            </h2>
            <p className="hia-fc-lede">
              Five-page written report covering current map pack position,
              Google Business Profile health,{" "}
              <Link href="/services/web-design" className="hvac-inline-link">
                website conversion architecture
              </Link>
              , maintenance-contract opportunity, review velocity vs the HVAC
              contractors outranking you, and the specific work required to move
              your business into the three-pack before your next peak window
              arrives. Delivered within five business days.
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
      <HvacConsentNotice />
      <RelatedServices current="/services/hvac-marketing-agency" />
      <Footer />
    </>
  );
}

export default Page;
