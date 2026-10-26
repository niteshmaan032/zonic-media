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
import SolarFaqList, { FAQS } from "./SolarFaqList";
import SolarLeadForm from "./SolarLeadForm";
import SolarOfferHeader from "./SolarOfferHeader";
import SolarServiceTabs from "./SolarServiceTabs";
import "./offer.css";

const PAGE_PATH = "/solar-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Solar Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Solar Website Offer",
    description:
      "A conversion-focused solar website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Solar Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Solar Website Offer",
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
  "Residential Solar leads",
  "Commercial Solar leads",
  "Battery Storage leads",
  "Solar Repair leads",
  "EV Charging leads",
  "Financing Options leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Solar-first layouts" },
  { icon: "smartphone", label: "Mobile consult booking" },
  { icon: "mail", label: "Consultation forms" },
  { icon: "phone", label: "Click-to-call for quotes" },
  { icon: "search", label: "Solar local SEO" },
  { icon: "chart", label: "Quote source tracking" },
  { icon: "layers", label: "Panel and battery pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Quote source tracking" },
  { icon: "layers", label: "Panel and battery pages" },
  { icon: "pin", label: "Utility-area pages" },
  { icon: "gauge", label: "Lightweight pages" },
  { icon: "code", label: "Solar schema markup" },
  { icon: "target", label: "Savings CTAs" },
  { icon: "users", label: "Sales rep routing" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Solar Website Design for Solar Installers | Zonic" },
  description:
    "Free solar website design for installers. Skip the solar company website builder: we build it, no fee, on a qualifying plan, with savings and battery pages.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free solar website",
    "solar company website builder",
    "solar website design",
    "solar installer website",
    "free website for solar companies",
    "solar company website",
    "solar web design agency",
    "solar marketing plan",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Solar Website Design for Solar Installers | Zonic",
    description:
      "Free solar website design for installers. Skip the solar company website builder: we build it, no fee, on a qualifying plan, with savings and battery pages.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free solar website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function SolarOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-solar" id="top">
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

      <SolarOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free solar website for solar installers</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Solar Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic marketing plan and we build your solar company website with no development fee, ready to explain savings, financing and batteries and book consultations.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my free solar website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See solar website features</span>
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
                  <strong>Consultation booking</strong>
                  <small>Built for quotes and calls</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Savings-first content</strong>
                  <small>Site + solar marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Agreed scope</strong>
                  <small>Signed off up front</small>
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
                <div className="address-bar">solarpros.com</div>
                <div className="browser-live">
                  <span /> SOLAR CONCEPT
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
                  <span>Residential</span>
                  <span>Batteries</span>
                  <span>Financing</span>
                </div>
                <div className="mini-button">Free solar quote</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">LOCAL SOLAR INSTALLERS</div>
                  <h2>Lower bills. Cleaner power at home.</h2>
                  <p>Solar panels, battery storage and financing options from a trusted local installer.</p>
                  <div className="canvas-actions">
                    <span>Get a quote</span>
                    <span>View solar options</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Licensed installers <Icon name="check" />{" "}
                    Financing options
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-solar/hero.webp"
                    alt="Solar professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">POWERED BY SUN</div>
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
                <span className="phone-kicker">SOLAR SERVICES</span>
                <h3>See what solar could save you.</h3>
                <div className="phone-art phone-art--industry" />
                <div className="phone-cta">
                  Get a quote <Icon name="arrow-up-right" />
                </div>
              </div>
            </div>

            <div className="floating-note floating-note--bottom">
              <span className="note-icon note-icon--blue">
                <Icon name="target" />
              </span>
              <span>
                <strong>Made for solar quotes</strong>
                <small>Consults, forms and tracking</small>
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
            <span className="section-kicker">From discovery call to live solar site</span>
            <h2>Solar websites for long sales cycles, minus the build fee.</h2>
            <p>We pair your solar website with marketing that reaches homeowners while they research panels, batteries and financing, long before they sign.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Study your solar market</h3>
              <p>We look at your services, utility areas, current website, lead sources and the installs you want more of across your territory.</p>
              <small>Solar strategy call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Pick a solar marketing plan</h3>
              <p>Your plan can mix solar Google Ads, local SEO, Google Business Profile work, call tracking and consultation-page improvements.</p>
              <small>Ongoing solar leads</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build your solar site</h3>
              <p>We build the agreed solar website in 2–3 weeks with the upfront development fee waived under your marketing plan. Built to the same standard as <Link href="/services/solar-website-design" className="offer-inlink">
                  our solar website design service
                </Link>.</p>
              <small>Solar build fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>See if my solar company qualifies</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Solar lead tracking</span>
            <h2>Follow each solar lead to a signed contract.</h2>
            <p>Calls, quote forms and chats land in one dashboard with the source attached, so you can see which channels bring homeowners who actually book a consultation.</p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Quote requests and calls captured</li>
              <li>
                <Icon name="check" /> Channel recorded for every solar lead</li>
              <li>
                <Icon name="check" /> Status from consult to signed install</li>
            </ul>
            <a className="section-button" href="#contact">
              <span>Show me solar tracking</span>
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
                <small>Residential Solar</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Commercial Solar</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>Battery Storage</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Solar Repair</small>
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


        {/* ───────────── Service paths ───────────── */}
        <section id="work" className="section niche-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Built for solar research</span>
              <h2>Answer every solar buyer question on its own page.</h2>
            </div>
            <p>Pick a solar service to see how we shape the message, proof and quote steps for a homeowner or business weighing the switch to solar.</p>
          </div>

          <SolarServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">The full solar lineup</span>
              <h3>Every solar service you sell, covered.</h3>
              <p>This is a sample. If buyers near you search for a solar service, we can build the page that earns the consultation.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ any solar service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my solar website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">What your solar site includes</span>
            <h2>Skip the solar company website builder. We build it for you.</h2>
            <p>Your solar website is built into a connected marketing system, with the structure, tracking and conversion tools that keep consultation requests coming.</p>
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
                <small>SOLAR STACK 01</small>
                <h3>Pages that answer solar research</h3>
                <p>Service pages, utility-area pages, on-page SEO and schema markup help Google match your company to local solar searches. The same structure behind our <Link href="/services/local-seo-for-home-services" className="offer-inlink">
                    local SEO service
                  </Link>.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
            <article>
              <span className="system-card-icon system-card-icon--yellow">
                <Icon name="target" />
              </span>
              <div>
                <small>SOLAR STACK 02</small>
                <h3>Consultations you can trace</h3>
                <p>Quote forms, click-to-call, GA4, Tag Manager, conversion tracking and CRM routing tie your marketing to real solar consultations.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my free solar website</span>
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
              <span className="section-kicker">Plans for solar installers</span>
              <h2>Choose a solar plan. The website is installed with it.</h2>
            </div>
            <p>Any plan at $297/month or above on a 6-month term includes the full lead-generation website build at no development fee.</p>
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
              <p>Build a strong local presence and a website foundation that supports discovery.</p>
              <ul>
                <li>
                  <Icon name="check" /> Google Business Profile management
                </li>
                <li>
                  <Icon name="check" /> Local SEO and citation cleanup
                </li>
                <li>
                  <Icon name="check" /> Review generation system
                </li>
                <li>
                  <Icon name="check" /> Monthly reporting
                </li>
                <li>
                  <Icon name="check" /> Website build included
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
              <p>Combine local visibility with paid search, landing-page improvements, and lead tracking.</p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Local Foundation
                </li>
                <li>
                  <Icon name="check" /> Google Ads management
                </li>
                <li>
                  <Icon name="check" /> Landing page optimization
                </li>
                <li>
                  <Icon name="check" /> Call tracking and lead scoring
                </li>
                <li>
                  <Icon name="check" /> Website build included
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
              <p>Expand across services and locations with a broader organic and paid growth program.</p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Growth
                </li>
                <li>
                  <Icon name="check" /> Local Services Ads management
                </li>
                <li>
                  <Icon name="check" /> Expanded city page program
                </li>
                <li>
                  <Icon name="check" /> Content and link building
                </li>
                <li>
                  <Icon name="check" /> Website build included
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
            engagement. Compare the full{" "}
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
            <span className="section-kicker section-kicker--dark">Keeping solar buyers close</span>
            <h2>Solar buyers research for weeks. Marketing keeps you in view.</h2>
            <p>We build your plan around your solar market. It can mix paid search, local SEO, Google Business Profile growth, call tracking and ongoing page improvements.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Plan my solar marketing</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Solar search campaigns</h3>
              <p>Show up for solar panel, battery and solar financing searches with targeted ads and tracked quotes. See our <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local solar visibility</h3>
              <p>Build visibility in the cities and utility areas you serve, with reviews and install photos that earn trust. Backed by <Link
                  href="/local-seo-google-business-optimization"
                  className="offer-inlink"
                >
                  Google Business Profile optimization
                </Link>.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Consultation page improvements</h3>
              <p>We review calls, quote forms and page behavior, then improve the pages that should book more consultations.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> solar build fee</span>
              <span>
                <b>1</b> plan covering site and ads</span>
              <span>
                <b>100%</b> of the terms in writing</span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">Offer details for solar companies</span>
            <h2>How the solar website fee waiver works.</h2>
            <p>We waive the solar website design and development fee when a new client starts a qualifying recurring marketing plan. Every term is agreed before you sign.</p>
            <a className="section-button" href="#contact">
              <span>Check my solar company</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Fee we cover</strong>
                <small>The solar website development fee, valued at $2,000. Your monthly plan is billed at its full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Plans that apply</strong>
                <small>Any Zonic marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. The ad platform bills ad spend separately. Also available with <Link href="/services/solar-website-design" className="offer-inlink">
                    our solar website design service
                  </Link>.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>What you keep</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term, and full ownership of the website and hosting transfers to you once month six is complete.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Ending the plan early</strong>
                <small>You keep your domain and any content you supplied. The website does not transfer, because the build fee was waived against the full six-month engagement.</small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Why solar companies bundle</span>
              <h2>Long solar sales cycles need one connected plan.</h2>
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
                <strong>One solar lead system</strong>
                <small>Site · Maps · quote tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your website, ads, Google profile and tracking all speak to the same homeowners and businesses in your territory.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One solar strategy</strong>
                  <small>Planned for your territory</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>With no build invoice, more of your budget goes into the campaigns that keep consultations on the calendar.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Budget for consultations</strong>
                  <small>No upfront site bill</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, quote forms, ads and local search actions are tracked together, so each change aims at signed installs.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Signed installs you can trace</strong>
                  <small>Tracking set at launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my solar lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Solar website FAQs</span>
            <h2>Solar website answers, before you commit.</h2>
            <p>What solar companies ask most about the free website, website builders, qualifying plans and the terms.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my solar market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <SolarFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">Solar website launch</span>
            <h2>Turn solar research into booked consultations.</h2>
            <p>Fill in the short form. We review your solar company, current website, service area and goals before recommending a qualifying plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Solar website built for consultations</span>
              <span>
                <Icon name="check" /> Marketing plan matched to your territory</span>
              <span>
                <Icon name="check" /> Scope and terms agreed first</span>
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

          <SolarLeadForm />
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
            <p>Solar company websites paired with the marketing that books consultations and installs.</p>
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
            <a href="#work">Solar services</a>
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
            <span>Free Solar Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-solar-offer-form">
              Get my solar website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/towing-website-design-agency-us/offer">Towing websites</Link>
            <Link href="/auto-repair-website-design-agency-us/offer">Auto Repair websites</Link>
            <Link href="/bathroom-remodeling-website-design-agency-us/offer">Bathroom Remodeling websites</Link>
          </div>
        </nav>

        <nav className="offer-siblings" aria-label="Zonic services">
          <small>ZONIC SERVICES</small>
          <div>
            <Link href="/services">All services</Link>
            <Link href="/services/google-ads">Google Ads</Link>
            <Link href="/local-seo-google-business-optimization">Google Business Profile</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact-us">Contact</Link>
          </div>
        </nav>

        <div className="footer-bottom">
          <small>
            <strong>OFFER TERMS.</strong> Solar website development fee, valued at $2,000, is
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
        idPrefix="ofr-solar"
        formType="free-solar-website"
        heading="Get your solar website with no upfront fee."
        serviceLabel="Solar work you want more of"
        servicePlaceholder="Select a solar service"
        services={[
          "Residential Solar",
          "Commercial Solar",
          "Battery Storage",
          "Solar Repair",
          "EV Charging",
          "Financing Options",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
