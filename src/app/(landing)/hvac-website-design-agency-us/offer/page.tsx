import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import GhlChatWidget from "@/app/components/GhlChatWidget";
import HeroTrustBadges from "@/app/components/HeroTrustBadges";
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
      "The website development fee, valued at $2,000, is waived for new clients who start a qualifying Zonic Media marketing plan at $895 per month or above on a six-month minimum term.",
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
  { icon: "layout", label: "HVAC-first design" },
  { icon: "smartphone", label: "Mobile optimization" },
  { icon: "clipboard", label: "Service request forms" },
  { icon: "phone", label: "Emergency click-to-call" },
  { icon: "search", label: "Local SEO foundation" },
  { icon: "chart", label: "Service call tracking" },
  { icon: "layers", label: "HVAC service pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Service call tracking" },
  { icon: "layers", label: "HVAC service pages" },
  { icon: "pin", label: "Service-area signals" },
  { icon: "gauge", label: "Speed optimization" },
  { icon: "code", label: "Schema setup" },
  { icon: "target", label: "Booking CTAs" },
  { icon: "users", label: "HVAC lead routing" },
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
  title: "Free Website for HVAC Companies",
  description:
    "Start a qualifying Zonic HVAC marketing plan and get a conversion-focused HVAC website with no upfront development fee.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services/*-website-design page targets so the two do not compete.
  keywords: [
    "free hvac website",
    "free website for hvac companies",
    "free hvac website offer",
    "hvac website no upfront cost",
    "free website for hvac contractors",
    "hvac lead generation website offer",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Website for HVAC Companies | Zonic Media",
    description:
      "Start a qualifying Zonic HVAC marketing plan and get a conversion-focused HVAC website with no upfront development fee.",
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
              <span>Free website offer for HVAC companies</span>
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

            <p className="hero-lede">Start a qualifying Zonic HVAC marketing plan and we’ll build a professional website designed to generate service calls, installation estimates, maintenance sign-ups, and booked HVAC jobs — with no upfront development fee.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my HVAC website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See the HVAC features</span>
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
                  <strong>HVAC lead system</strong>
                  <small>Built for calls and bookings</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Season-ready growth</strong>
                  <small>Website + HVAC marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Clear terms</strong>
                  <small>Scope agreed in writing</small>
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
                <strong>Built for HVAC leads</strong>
                <small>Calls, bookings, and tracking included</small>
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
            <span className="section-kicker">One HVAC offer. One connected lead system.</span>
            <h2>Remove the website cost holding your HVAC growth back.</h2>
            <p>Zonic combines the HVAC website your company needs with the recurring marketing required to reach homeowners before they call another comfort contractor.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Map your HVAC market</h3>
              <p>We review your HVAC services, target cities, seasonal demand, current lead sources, and the jobs you want more of.</p>
              <small>HVAC growth call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Choose a qualifying plan</h3>
              <p>Your plan may combine HVAC Google Ads, Local SEO, Google Business Profile growth, seasonal campaigns, tracking, and conversion optimization.</p>
              <small>Recurring lead generation</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build the HVAC site</h3>
              <p>Zonic creates the agreed HVAC lead-generation website with the upfront development fee waived under your marketing engagement.{" "}
                Same build standard as our{" "}
                <Link href="/services/hvac-website-design" className="offer-inlink">
                  HVAC website design service
                </Link>
                .
              </p>
              <small>Website fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my HVAC company</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Services ───────────── */}
        <section id="work" className="section niche-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Built around HVAC search intent</span>
              <h2>One HVAC website. A clear path for every profitable service.</h2>
            </div>
            <p>Choose an HVAC service to see how Zonic structures the message, proof, calls to action, and booking flow around what homeowners need in that moment.</p>
          </div>

          <HvacServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                Beyond these six
              </span>
              <h3>We build for every HVAC service.</h3>
              <p>The tabs are a sample — if homeowners search for it, we can build the page that wins the call.</p>
            </div>
            <div className="niche-banner-tags">
              {EXTRA_SERVICES.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span className="niche-banner-more">+ every HVAC service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Claim my HVAC website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Your HVAC lead-generation website includes</span>
            <h2>More than an HVAC website handed over and forgotten.</h2>
            <p>Your site becomes part of the same system as your ads, local visibility, seasonal campaigns, call tracking, and service follow-up.</p>
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
                <small>HVAC SYSTEM 01</small>
                <h3>Service and city authority</h3>
                <p>AC repair, heating, heat pumps, air quality, maintenance, and location pathways help search engines and homeowners understand exactly where your company fits.{" "}
                  The same structure behind our{" "}
                  <Link href="/services/industry/local-seo-services-for-hvac" className="offer-inlink">
                    local SEO services for HVAC
                  </Link>
                  .
                </p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
            <article>
              <span className="system-card-icon system-card-icon--yellow">
                <Icon name="target" />
              </span>
              <div>
                <small>HVAC SYSTEM 02</small>
                <h3>Trackable booking flow</h3>
                <p>Service forms, click-to-call, call tracking, conversion events, and CRM routing connect HVAC campaigns to real booking and estimate requests.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my HVAC website</span>
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
              <span className="section-kicker">Qualifying HVAC plans</span>
              <h2>Pick the HVAC growth plan. The website comes with it.</h2>
            </div>
            <p>Any qualifying plan at $895/month or above on a 6-month term includes the full HVAC lead-generation website build at no development fee.</p>
          </div>

          <div className="pricing-grid">
            <article className="pricing-card">
              <div className="pricing-card-head">
                <span>01</span>
                <small>LOCAL VISIBILITY</small>
              </div>
              <h3>Local Foundation</h3>
              <div className="plan-price">
                $895 <span>/ month</span>
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
                $1,495 <span>/ month</span>
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
              </ul>
              <a href="#contact">
                Choose Growth <Icon name="arrow-up-right" />
              </a>
            </article>

            <article className="pricing-card">
              <div className="pricing-card-head">
                <span>03</span>
                <small>MARKET EXPANSION</small>
              </div>
              <h3>Full Market</h3>
              <div className="plan-price">
                $2,495 <span>/ month</span>
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
            <span className="section-kicker section-kicker--dark">
              The qualifying HVAC marketing plan
            </span>
            <h2>The website is the comfort hub. Marketing keeps the lead pipeline moving.</h2>
            <p>Your plan is selected around your HVAC territory and may combine paid search, local visibility, Google Business Profile growth, seasonal campaigns, tracking, and ongoing conversion improvements.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Check my HVAC company</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>HVAC Google Ads</h3>
              <p>Capture urgent AC repair, heating, replacement, maintenance, and installation searches with service-led campaigns and trackable booking actions.{" "}
                See our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local HVAC SEO + GBP</h3>
              <p>Build visibility across HVAC services and target cities while strengthening the proof homeowners see in local results.{" "}
                Backed by our{" "}
                <Link href="/services/industry/local-seo-services-for-hvac" className="offer-inlink">
                  local SEO services for HVAC
                </Link>{" "}
                and{" "}
                <Link
                  href="/local-seo-google-business-optimization"
                  className="offer-inlink"
                >
                  Google Business Profile optimization
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Seasonal demand campaigns</h3>
              <p>Launch fast, location-focused campaigns during heat waves and cold snaps while tracking every service call and booking request.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> upfront development fee
              </span>
              <span>
                <b>1</b> connected growth system
              </span>
              <span>
                <b>100%</b> clear written scope
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Clear qualification. Clear terms.
            </span>
            <h2>What &ldquo;free HVAC website&rdquo; means in this offer.</h2>
            <p>Zonic waives the upfront HVAC website design and development fee when an eligible contractor starts a qualifying recurring marketing engagement. Nothing is left vague before you agree.</p>
            <a className="section-button" href="#contact">
              <span>See if my HVAC company qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>What&rsquo;s waived</strong>
                <small>The HVAC website development fee, valued at $2,000. Your monthly plan is billed at full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>What qualifies you</strong>
                <small>Any Zonic HVAC marketing plan at $895/month or above — Local Foundation, Growth, or Full Market — on a six-month minimum term. Advertising spend is billed separately by the platform.{" "}
                  Also available with our{" "}
                  <Link href="/services/hvac-marketing-agency" className="offer-inlink">
                    HVAC marketing agency service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>What you own</strong>
                <small>Your domain is registered in your HVAC company’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>If you cancel early</strong>
                <small>
                  You keep your domain and any content you supplied. The website
                  does not transfer, because the build fee was waived against
                  the full six-month engagement.
                </small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">HVAC website + recurring growth</span>
              <h2>Why the combined offer is stronger for HVAC contractors.</h2>
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
                <small>Website · visibility · tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your HVAC website, ads, GBP visibility, seasonal campaigns, and tracking are planned around the same homeowners and service territory.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One HVAC strategy</strong>
                  <small>Built around your territory</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>The upfront website investment is removed, giving your HVAC campaigns a conversion-ready foundation without a separate development bill.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Lower starting barrier</strong>
                  <small>Development fee waived</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Service calls, booking forms, paid campaigns, and local search actions are measured together so improvements focus on real HVAC opportunities.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Measurable HVAC growth</strong>
                  <small>Tracking connected from launch</small>
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
            <span className="section-kicker">HVAC website FAQs</span>
            <h2>Understand the offer before you claim it.</h2>
            <p>These are the details HVAC contractors should know about eligibility, website scope, and the qualifying marketing engagement.</p>
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
            <span className="section-kicker section-kicker--dark">
              Zonic HVAC Website Launch Offer
            </span>
            <h2>Claim your professional HVAC website with no upfront development fee.</h2>
            <p>Complete the short eligibility form. Zonic will review your services, target territory, current website, and lead goals before recommending a qualifying HVAC marketing plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> HVAC lead-generation website
              </span>
              <span>
                <Icon name="check" /> Marketing plan matched to your territory
              </span>
              <span>
                <Icon name="check" /> Clear scope and terms before commitment
              </span>
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
            <p>HVAC lead-generation websites connected to the marketing services that grow HVAC companies.</p>
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
            <span>HVAC Website Launch Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying HVAC marketing plan at $895/month or above on a six-month term.</p>
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
            plan at $895 per month or above on a six-month minimum term. Client
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
            <a href="https://zonicllc.com">zonicllc.com</a>
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
    </div>
  );
}
