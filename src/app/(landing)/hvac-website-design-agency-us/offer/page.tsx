import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import GhlChatWidget from "@/app/components/GhlChatWidget";
import HeroTrustBadges from "@/app/components/HeroTrustBadges";
import OfferPopupModal from "@/app/components/OfferPopupModal";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";
import { SITE_CONTACT, SITE_PATHS } from "@/shared/siteConfig";

import Icon from "./Icon";
import HvacFaqList, { FAQS } from "./HvacFaqList";
import HvacLeadForm from "./HvacLeadForm";
import HvacOfferHeader from "./HvacOfferHeader";
import HvacServiceTabs from "./HvacServiceTabs";
import "./offer.css";

const PAGE_PATH = "/hvac-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free HVAC Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free HVAC Website Offer",
    description:
      "A conversion-focused HVAC website with the upfront development fee waived for HVAC companies on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "HVAC Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free HVAC Website Offer",
    description:
      "The website development fee, valued at $2,000, is waived for new clients who start a qualifying Zonic Media marketing plan at $297 per month or above on a six-month minimum term.",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `https://www.zonicllc.com${PAGE_PATH}`,
    eligibleCustomerType: "https://schema.org/NewCustomer",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const MARQUEE_ITEMS = [
  "AC Repair leads",
  "Heating Repair leads",
  "Heat Pumps leads",
  "Furnace Replacement leads",
  "Indoor Air Quality leads",
  "HVAC Maintenance leads",
  "Commercial HVAC leads",
  "Ductless Mini-Splits leads",
  "Emergency Service leads",
  "Smart Thermostats leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "HVAC-first layouts" },
  { icon: "smartphone", label: "Mobile booking flow" },
  { icon: "clipboard", label: "Service request forms" },
  { icon: "phone", label: "No-cool call buttons" },
  { icon: "search", label: "HVAC local SEO base" },
  { icon: "chart", label: "Service call tracking" },
  { icon: "layers", label: "AC and heating pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Service call tracking" },
  { icon: "layers", label: "AC and heating pages" },
  { icon: "pin", label: "Service-area pages" },
  { icon: "gauge", label: "Speed tuning" },
  { icon: "code", label: "HVAC schema markup" },
  { icon: "target", label: "Tune-up booking buttons" },
  { icon: "users", label: "Tech lead routing" },
] as const;

const EXTRA_SERVICES = [
  "Furnace Replacement",
  "Ductless Mini-Splits",
  "Smart Thermostats",
  "Ductwork",
  "Zoning Systems",
  "Humidifiers",
  "Air Handlers",
  "Emergency Service",
  "Financing",
];

export const metadata: Metadata = {
  title: { absolute: "Free HVAC Website + HVAC Marketing Packages | Zonic" },
  description:
    "Get a free HVAC website with our HVAC marketing packages. No build fee on a qualifying plan, with AC repair, furnace and maintenance pages that book calls.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services/*-website-design page targets so the two do not compete.
  keywords: [
    "free hvac website",
    "hvac marketing packages",
    "hvac marketing website",
    "hvac digital marketing websites",
    "hvac website design",
    "free hvac leads",
    "free hvac advertising",
    "free website for hvac companies",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free HVAC Website + HVAC Marketing Packages | Zonic",
    description:
      "Get a free HVAC website with our HVAC marketing packages. No build fee on a qualifying plan, with AC repair, furnace and maintenance pages that book calls.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free HVAC website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function HvacOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="hwd-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="aurora aurora--one" />
      <div className="aurora aurora--two" />

      <HvacOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free HVAC website with HVAC marketing packages</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              HVAC Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic HVAC marketing plan and we build your HVAC marketing website with no development fee, made to book AC repairs, furnace calls, seasonal tune-ups and maintenance plan sign-ups all year.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my free HVAC website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See HVAC website features</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
            </div>

            <div className="proof-row">
              <div className="proof-item proof-item--blue">
                <span className="proof-icon">
                  <Icon name="layers" />
                </span>
                <span>
                  <strong>No upfront fee</strong>
                  <small>Development fee waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Service call booking</strong>
                  <small>Calls, forms and tune-ups</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Ready for every season</strong>
                  <small>Site + HVAC marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Scope in writing</strong>
                  <small>Agreed before we start</small>
                </span>
              </div>
            </div>
          </div>

          <div className="concept-stage">
            <div className="stage-orbit stage-orbit--one" />
            <div className="stage-orbit stage-orbit--two" />

            <div className="floating-note floating-note--top">
              <span className="note-icon">
                <Icon name="sparkles" />
              </span>
              <span>
                <strong>$0 upfront website fee</strong>
                <small>With a qualifying growth plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">yourhvaccompany.com</div>
                <div className="browser-live">
                  <span /> HVAC CONCEPT
                </div>
              </div>

              <div className="design-toolbar">
                <span className="mini-logo">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={400}
                    height={113}
                  />
                </span>
                <div className="mini-nav">
                  <span>AC Repair</span>
                  <span>Heating</span>
                  <span>Maintenance</span>
                </div>
                <div className="mini-button">Book service</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">LOCAL COMFORT EXPERTS</div>
                  <h2>Reliable comfort in every season.</h2>
                  <p>AC repair, heating, maintenance, and indoor air solutions from a trusted local team.</p>
                  <div className="canvas-actions">
                    <span>Book service</span>
                    <span>View HVAC services</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Licensed &amp; insured{" "}
                    <Icon name="check" /> Financing available
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-hvac/ac-repair.webp"
                    alt="HVAC technician servicing an outdoor air conditioning unit"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">COMFORT DONE RIGHT</div>
                </div>
              </div>

              <div className="cursor-badge">
                <Icon name="target" />
                <span>Zonic designer</span>
              </div>
            </div>

            <div className="phone-card">
              <div className="phone-notch" />
              <div className="phone-header">
                <span className="mini-logo">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={400}
                    height={113}
                  />
                </span>
                <Icon name="menu" />
              </div>
              <div className="phone-body">
                <span className="phone-kicker">HVAC SERVICES</span>
                <h3>Fast help when comfort can’t wait.</h3>
                <div className="phone-art phone-art--industry" />
                <div className="phone-cta">
                  Book service <Icon name="arrow-up-right" />
                </div>
              </div>
            </div>

            <div className="floating-note floating-note--bottom">
              <span className="note-icon note-icon--blue">
                <Icon name="target" />
              </span>
              <span>
                <strong>Made for HVAC service calls</strong>
                <small>Bookings, plans and tracking</small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Marquee ───────────── */}
        <section className="marquee-section" aria-hidden="true">
          <div className="marquee-track">
            {marqueeItems.map((item, index) => (
              <span key={`${item}-${index}`}>
                <Icon name="zap" /> {item} <i />
              </span>
            ))}
          </div>
        </section>

        {/* ───────────── Process ───────────── */}
        <section id="process" className="section process-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">How the HVAC website offer works</span>
            <h2>HVAC marketing packages that include the website build.</h2>
            <p>We bundle your HVAC marketing website with campaigns that keep it busy, so homeowners find you when the AC quits or the furnace fails.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Review your HVAC market</h3>
              <p>We look at your services, cities, peak seasons, current lead sources and the HVAC calls you want more of.</p>
              <small>HVAC strategy call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Choose from HVAC marketing packages</h3>
              <p>Pick a plan that can combine HVAC Google Ads, local SEO, Google Business Profile work, seasonal campaigns, call tracking and page improvements.</p>
              <small>Year-round lead flow</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>Launch your HVAC website</h3>
              <p>We build the agreed HVAC website in 2–3 weeks with the upfront development fee waived under your plan. Built to the same standard as our <Link href="/services/hvac-website-design" className="offer-inlink">
                  HVAC website design service
                </Link>.</p>
              <small>HVAC build fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>See if my HVAC company qualifies</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">HVAC call tracking</span>
            <h2>Know which channel booked each HVAC call.</h2>
            <p>Service calls, booking forms and chats land in one dashboard with their source, so you can tell paid leads apart from the free HVAC leads that arrive through Maps and organic search.</p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> No-cool and no-heat calls logged</li>
              <li>
                <Icon name="check" /> Paid or organic source on every lead</li>
              <li>
                <Icon name="check" /> Status from booked call to sold system</li>
            </ul>
            <a className="section-button" href="#contact">
              <span>Show me HVAC tracking</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <div className="leadtrack-panel">
            <div className="leadtrack-statrow">
              <div className="leadtrack-stat leadtrack-stat--accent">
                <span>Leads</span>
                <strong>128</strong>
                <small>
                  <Icon name="arrow-up-right" /> 24%
                </small>
              </div>
              <div className="leadtrack-stat">
                <span>Avg response</span>
                <strong>3m 12s</strong>
              </div>
              <div className="leadtrack-stat">
                <span>Booked</span>
                <strong>41</strong>
              </div>
            </div>

            <div className="leadtrack-board">
              <header>
                <div className="leadtrack-tabs">
                  <b>All</b>
                  <i>New</i>
                  <i>Won</i>
                </div>
                <span className="leadtrack-live">Live</span>
              </header>
              <div className="leadtrack-head" aria-hidden="true">
                <span>Lead</span>
                <span>Source</span>
                <span>Status</span>
              </div>
            <div className="leadtrack-row">
              <b>
                Marcus D.
                <small>AC Repair</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Heating / Furnace Repair</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>AC or Furnace Replacement</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Heat Pumps</small>
              </b>
              <span>Call extension</span>
              <span className="leadtrack-pill leadtrack-pill--won">Won</span>
            </div>
            </div>

            <p className="leadtrack-caption">
              Example dashboard. Yours is set up with your own services and lead
              sources during onboarding.
            </p>
          </div>
        </section>


        {/* ───────────── Services ───────────── */}
        <section id="work" className="section niche-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Heating and cooling service paths</span>
              <h2>A booking path for every heating and cooling call.</h2>
            </div>
            <p>Pick an HVAC service to see how we shape the message, proof and booking steps for a homeowner who is too hot, too cold or planning an upgrade.</p>
          </div>

          <HvacServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">Plus every comfort service</span>
              <h3>Ductless, zoning, air handlers and more.</h3>
              <p>The tabs show six. If homeowners near you search for an HVAC service, we can build the page that books the call.</p>
            </div>
            <div className="niche-banner-tags">
              {EXTRA_SERVICES.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span className="niche-banner-more">+ any HVAC service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my HVAC website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Inside your HVAC marketing website</span>
            <h2>What sets our HVAC digital marketing websites apart.</h2>
            <p>Your site works with your ads, Google profile, seasonal campaigns, call tracking and service follow-up instead of sitting on its own.</p>
          </div>

          <div className="icon-cloud">
            <div className="icon-row icon-row--one">
              {CAPABILITY_ROW_ONE.map((tile) => (
                <div className="capability-tile" key={tile.label}>
                  <Icon name={tile.icon} />
                  <span>{tile.label}</span>
                </div>
              ))}
            </div>
            <div className="icon-row icon-row--two">
              {CAPABILITY_ROW_TWO.map((tile) => (
                <div className="capability-tile" key={tile.label}>
                  <Icon name={tile.icon} />
                  <span>{tile.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="system-cards">
            <article>
              <span className="system-card-icon">
                <Icon name="search" />
              </span>
              <div>
                <small>HVAC SITE CORE 01</small>
                <h3>Service and city pages that rank</h3>
                <p>AC repair, heating, heat pump, air quality, maintenance and city pages show Google and homeowners what you fix and where you work. The same structure behind our <Link href="/services/industry/local-seo-services-for-hvac" className="offer-inlink">
                    local SEO services for HVAC
                  </Link>.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
            <article>
              <span className="system-card-icon system-card-icon--yellow">
                <Icon name="target" />
              </span>
              <div>
                <small>HVAC SITE CORE 02</small>
                <h3>Bookings tied to campaigns</h3>
                <p>Service forms, click-to-call, call tracking, conversion events and CRM routing link each HVAC campaign to real booked calls and estimates.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my free HVAC website</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Pricing ───────────── */}
        <section id="pricing" className="section pricing-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">HVAC marketing packages</span>
              <h2>Each HVAC marketing package comes with the website build.</h2>
            </div>
            <p>Any qualifying plan at $297/month or above on a 6-month term includes the full HVAC lead-generation website build at no development fee.</p>
          </div>

          <div className="pricing-grid">
            <article className="pricing-card">
              <div className="pricing-card-head">
                <span>01</span>
                <small>LOCAL VISIBILITY</small>
              </div>
              <h3>Local Foundation</h3>
              <div className="plan-price">
                $297 <span>/ month</span>
              </div>
              <p>Build a stronger local HVAC presence and the website foundation required to support discovery.</p>
              <ul>
                <li>
                  <Icon name="check" /> HVAC GBP management
                </li>
                <li>
                  <Icon name="check" /> Local SEO and citation cleanup
                </li>
                <li>
                  <Icon name="check" /> HVAC review generation
                </li>
                <li>
                  <Icon name="check" /> Monthly lead reporting
                </li>
                <li>
                  <Icon name="check" /> HVAC website included
                </li>
              </ul>
              <a href="#contact">
                Choose Local Foundation <Icon name="arrow-up-right" />
              </a>
            </article>

            <article className="pricing-card pricing-card--featured">
              <div className="pricing-popular">Most popular</div>
              <div className="pricing-card-head">
                <span>02</span>
                <small>LEAD GENERATION</small>
              </div>
              <h3>Growth</h3>
              <div className="plan-price">
                $750 <span>/ month</span>
              </div>
              <p>Combine local HVAC visibility with paid search, service-page improvements, and estimate tracking.</p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Local Foundation
                </li>
                <li>
                  <Icon name="check" /> HVAC Google Ads management
                </li>
                <li>
                  <Icon name="check" /> Service-page optimization
                </li>
                <li>
                  <Icon name="check" /> Call tracking and lead scoring
                </li>
                <li>
                  <Icon name="check" /> HVAC website included
                </li>
              
                <li>
                  <Icon name="check" /> Lead tracking system
                </li>
</ul>
              <a href="#contact">
                Choose Growth <Icon name="arrow-up-right" />
              </a>
            </article>

            <article className="pricing-card pricing-card--verdant">
              <div className="pricing-card-head">
                <span>03</span>
                <small>MARKET EXPANSION</small>
              </div>
              <h3>Full Market</h3>
              <div className="plan-price">
                $1,500 <span>/ month</span>
              </div>
              <p>Expand HVAC visibility across profitable services and locations with a broader organic and paid program.</p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Growth
                </li>
                <li>
                  <Icon name="check" /> HVAC LSA management
                </li>
                <li>
                  <Icon name="check" /> Expanded city-page program
                </li>
                <li>
                  <Icon name="check" /> HVAC content and authority
                </li>
                <li>
                  <Icon name="check" /> HVAC website included
                </li>
              </ul>
              <a href="#contact">
                Choose Full Market <Icon name="arrow-up-right" />
              </a>
            </article>
          </div>

          <p className="pricing-note">
            <Icon name="shield" /> Marketing fees exclude advertising spend. The
            website development fee is waived under the qualifying six-month
            engagement.{" "}
            Compare the full{" "}
            <Link href="/services" className="offer-inlink">
              Zonic marketing services
            </Link>
            .
          </p>
        </section>

        {/* ───────────── Why / marketing plan ───────────── */}
        <section id="why" className="dark-section">
          <div className="dark-glow" />
          <div className="dark-copy">
            <span className="section-kicker section-kicker--dark">What the HVAC plan covers</span>
            <h2>Paid ads, free listings and one HVAC site, working together.</h2>
            <p>We shape your plan around your HVAC territory. It can mix paid search, local SEO, Google Business Profile growth, seasonal campaigns, call tracking and ongoing page improvements.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Plan my HVAC marketing</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Google Ads for HVAC</h3>
              <p>Reach homeowners searching for AC repair, furnace repair, system replacement and tune-ups with service-led ads and tracked bookings. See our <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Free HVAC advertising on Maps</h3>
              <p>Your Google profile is free HVAC advertising. We sharpen it and lift your local rankings in each city you serve. Backed by our <Link href="/services/industry/local-seo-services-for-hvac" className="offer-inlink">
                  local SEO services for HVAC
                </Link> and <Link
                  href="/local-seo-google-business-optimization"
                  className="offer-inlink"
                >
                  Google Business Profile optimization
                </Link>.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Heat wave and cold snap campaigns</h3>
              <p>When temperatures spike or drop, location-based campaigns go live fast and every service call they bring is tracked.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> HVAC build fee</span>
              <span>
                <b>1</b> plan for site and ads</span>
              <span>
                <b>100%</b> of terms agreed in writing</span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">Free HVAC website terms</span>
            <h2>The free HVAC website, explained line by line.</h2>
            <p>We waive the HVAC website build fee when a new client starts a qualifying recurring marketing plan. Each term below also appears in your written proposal.</p>
            <a className="section-button" href="#contact">
              <span>Check my HVAC company</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Fee waived</strong>
                <small>The HVAC website development fee, valued at $2,000. Your monthly plan is billed at the full rate, with no discount.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Qualifying plans</strong>
                <small>Any Zonic HVAC marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. The ad platform bills ad spend separately. Also available with our <Link href="/services/hvac-marketing-agency" className="offer-inlink">
                    HVAC marketing agency service
                  </Link>.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Who owns it</strong>
                <small>Your domain is registered in your HVAC company’s name from day one. We host and maintain the site during the term, and full ownership of the website and hosting moves to you once month six is complete.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Cancelling early</strong>
                <small>You keep your domain and any content you supplied. The website itself does not transfer, since the build fee was waived against the full six-month engagement.</small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Why HVAC companies bundle</span>
              <h2>Why your HVAC site and marketing belong in one plan.</h2>
            </div>
            <div className="growth-priority-badge">
              <div>
                <span>
                  <Icon name="layout" />
                </span>
                <span>
                  <Icon name="search" />
                </span>
                <span>
                  <Icon name="chart" />
                </span>
              </div>
              <p>
                <strong>One HVAC lead system</strong>
                <small>Website · Maps · call tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your HVAC website, ads, Google profile, seasonal campaigns and tracking aim at the same homeowners and the same service area.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One HVAC playbook</strong>
                  <small>Built for your service area</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>With no build invoice, more of your budget goes into campaigns that keep techs busy in the shoulder seasons.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>More budget for calls</strong>
                  <small>No upfront HVAC site cost</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Service calls, booking forms, ads and Maps actions are measured together, so each change targets real HVAC revenue.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>HVAC growth you can measure</strong>
                  <small>Tracking from day one</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my HVAC lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">HVAC website questions</span>
            <h2>HVAC owners ask, we answer.</h2>
            <p>Straight answers on the free HVAC website, our HVAC marketing packages, free HVAC leads and the six-month term.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my HVAC market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <HvacFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">HVAC website launch</span>
            <h2>Get your HVAC website live before the next heat wave.</h2>
            <p>Fill in the short form. We review your HVAC services, territory, current website and lead goals, then recommend the HVAC marketing package that fits.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> HVAC website built for service calls</span>
              <span>
                <Icon name="check" /> Package matched to your service area</span>
              <span>
                <Icon name="check" /> Written scope before you commit</span>
            </div>

            <div className="cta-direct">
              <a href={SITE_CONTACT.phoneHref}>
                <Icon name="phone" />
                <span>
                  <small>Call us directly</small>
                  <strong>{SITE_CONTACT.phoneDisplay}</strong>
                </span>
              </a>
              <a href={SITE_CONTACT.emailHref}>
                <Icon name="mail" />
                <span>
                  <small>Email the team</small>
                  <strong>{SITE_CONTACT.email}</strong>
                </span>
              </a>
            </div>
          </div>

          <HvacLeadForm />
        </section>
      </main>

      {/* ───────────── Footer ───────────── */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              className="footer-wordmark"
              href="#top"
              aria-label="Zonic Media — back to top"
            >
              Zonic Media
            </a>
            <p>HVAC marketing websites paired with campaigns that keep service calls coming every season.</p>
            <div className="footer-contact">
              <a href={SITE_CONTACT.phoneHref}>
                {SITE_CONTACT.phoneDisplay} <Icon name="arrow-up-right" />
              </a>
              <a href={SITE_CONTACT.emailHref}>
                {SITE_CONTACT.email} <Icon name="arrow-up-right" />
              </a>
            </div>
          </div>

          <div className="footer-nav-group">
            <small>EXPLORE</small>
            <a href="#process">How it works</a>
            <a href="#work">HVAC services</a>
            <a href="#deliverables">Website includes</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-nav-group">
            <small>OFFER</small>
            <a href="#why">Marketing plans</a>
            <a href="#reviews">Why it works</a>
            <a href="#faqs">FAQs</a>
            <a href="#contact">Check eligibility</a>
          </div>

          <div className="footer-offer">
            <span>Free HVAC Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying HVAC marketing plan at $297/month or above on a six-month term.</p>
            <a href="#hwd-offer-form">
              Get my HVAC website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/roofing-website-design-agency-us/offer">Roofing websites</Link>
            <Link href="/plumber-website-design-agency-us/offer">Plumbing websites</Link>
          </div>
        </nav>

        <nav className="offer-siblings" aria-label="Zonic services">
          <small>ZONIC SERVICES</small>
          <div>
            <Link href="/services/hvac-website-design">Hvac Website Design</Link>
            <Link href="/services">All services</Link>
            <Link href="/services/google-ads">Google Ads</Link>
            <Link href="/local-seo-google-business-optimization">Google Business Profile</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact-us">Contact</Link>
          </div>
        </nav>

        <div className="footer-bottom">
          <small>
            <strong>OFFER TERMS.</strong> HVAC website development fee, valued at $2,000, is
            waived for new clients who start a qualifying Zonic Media marketing
            plan at $297 per month or above on a six-month minimum term. Client
            owns and registers the domain from the start of the engagement.
            Zonic Media hosts and maintains the website during the term; full
            ownership of the website and hosting transfers to the client on
            completion of month six. Build scope is a homepage plus ten pages
            and up to five city pages, with two rounds of design revisions;
            additional pages, revisions and custom functionality are quoted
            separately. Advertising spend is billed by the ad platform and is
            not included in the monthly management fee. New clients only; not
            combinable with other promotions. Zonic Media reserves the right to
            decline applications.
          </small>
          <p>
            Zonic Media LLC · 8 The Green, STE B, Dover, DE 19901 ·{" "}
            <a href="https://www.zonicllc.com">zonicllc.com</a>
          </p>
          <span>
            © 2026 Zonic Media LLC ·{" "}
            <span className="footer-legal">
              <a href={SITE_PATHS.privacy}>Privacy</a>
              <a href={SITE_PATHS.terms}>Terms</a>
            </span>
          </span>
        </div>
      </footer>

      <GhlChatWidget />

      <OfferPopupModal
        idPrefix="hwd"
        formType="free-hvac-website"
        heading="Get your HVAC website with no upfront fee."
        serviceLabel="HVAC work you want more of"
        servicePlaceholder="Select an HVAC service"
        services={[
          "AC Repair",
          "Heating / Furnace Repair",
          "AC or Furnace Replacement",
          "Heat Pumps",
          "Ductless Mini-Splits",
          "Indoor Air Quality",
          "Maintenance Plans",
          "Commercial HVAC",
          "Emergency Service",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
