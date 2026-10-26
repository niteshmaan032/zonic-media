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

import FaqList, { FAQS } from "./FaqList";
import FreeDesignLeadForm from "./FreeDesignLeadForm";
import FreeWebsiteDesignHeader from "./FreeWebsiteDesignHeader";
import Icon from "./Icon";
import IndustryTabs from "./IndustryTabs";
import "./offer.css";

const PAGE_PATH = "/website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Lead-Generation Website Offer",
    description:
      "A conversion-focused lead-generation website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Lead-Generation Website Offer",
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
  "HVAC websites",
  "Roofing websites",
  "Plumbing websites",
  "Electrical websites",
  "Home Inspection websites",
  "Pest Control websites",
  "Towing websites",
  "Landscaping websites",
  "Commercial Cleaning websites",
  "Garage Door websites",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Custom brand design" },
  { icon: "smartphone", label: "Mobile-first layout" },
  { icon: "mail", label: "Contact forms" },
  { icon: "phone", label: "Click-to-call" },
  { icon: "search", label: "Local SEO setup" },
  { icon: "chart", label: "Lead source tracking" },
  { icon: "layers", label: "Service pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Lead source tracking" },
  { icon: "layers", label: "Service pages" },
  { icon: "pin", label: "Google profile link-up" },
  { icon: "gauge", label: "Page speed work" },
  { icon: "code", label: "Schema markup" },
  { icon: "target", label: "Quote buttons" },
  { icon: "users", label: "CRM lead routing" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Website for Small Business, No Build Fee | Zonic" },
  description:
    "Get a free website for your small business with no upfront design fee when you start a qualifying Zonic marketing plan. Built for local search and leads.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services/*-website-design page targets so the two do not compete.
  keywords: [
    "free website for small business",
    "free website design for small business",
    "free small business website",
    "free professional website",
    "free website for small business owners",
    "small business website no upfront cost",
    "free business website with marketing",
    "website design agency usa",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Website for Small Business, No Build Fee | Zonic",
    description:
      "Get a free website for your small business with no upfront design fee when you start a qualifying Zonic marketing plan. Built for local search and leads.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function FreeWebsiteDesignServicePage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="fwd-page" id="top">
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

      <FreeWebsiteDesignHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website for small business owners</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your New Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic Media marketing plan and we build your professional small business website with no upfront development fee.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my free website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See what the site includes</span>
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
                  <strong>Lead-ready website</strong>
                  <small>Made to bring in enquiries</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Marketing attached</strong>
                  <small>Website + growth plan</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Straight terms</strong>
                  <small>Everything in writing</small>
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
                <div className="address-bar">yourbrand.com</div>
                <div className="browser-live">
                  <span /> LIVE CONCEPT
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
                  <span>Services</span>
                  <span>Work</span>
                  <span>About</span>
                </div>
                <div className="mini-button">Get a quote</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">LEAD-GENERATION WEBSITE</div>
                  <h2>More calls. More booked jobs.</h2>
                  <p>
                    A professional website connected to the marketing channels
                    that grow your business.
                  </p>
                  <div className="canvas-actions">
                    <span>Request service</span>
                    <span>View services</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack">
                  <div className="visual-card visual-card--back">
                    <span>01</span>
                  </div>
                  <div className="visual-card visual-card--front">
                    <div className="visual-grid">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="visual-chip">YOUR BEST WORK</div>
                  </div>
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
                <span className="phone-kicker">LEAD-GENERATION SITE</span>
                <h3>Built to turn visits into leads.</h3>
                <div className="phone-art">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="phone-cta">
                  Claim website <Icon name="arrow-up-right" />
                </div>
              </div>
            </div>

            <div className="floating-note floating-note--bottom">
              <span className="note-icon note-icon--blue">
                <Icon name="target" />
              </span>
              <span>
                <strong>Made for local customers</strong>
                <small>Calls, forms and tracking set up</small>
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
            <span className="section-kicker">Three steps to your new site</span>
            <h2>Skip the design invoice and start with a working website.</h2>
            <p>We pair your small business website with marketing that brings customers in, so your budget goes to growth, not a design bill.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Share your business goals</h3>
              <p>We look at your industry, service area, current website, lead sources and where your customers come from today.</p>
              <small>Discovery call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Choose your marketing plan</h3>
              <p>Pick Google Ads, local SEO, Google Business Profile management, tracking, or a mix that suits your budget.</p>
              <small>Recurring marketing service</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>Get your website built</h3>
              <p>We build the agreed website in 2–3 weeks with the upfront development fee waived under your marketing plan. Built to the same standard as our <Link href="/services/web-design" className="offer-inlink">
                  website design services
                </Link>.</p>
              <small>No design invoice</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>See if my business qualifies</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Know where customers come from</span>
            <h2>Every call and form, tied to its source.</h2>
            <p>Phone calls, web forms and chats land in one dashboard with the source attached, so you can see which ads, searches and listings bring in paying customers.</p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Calls, forms and chats logged automatically</li>
              <li>
                <Icon name="check" /> Ad, search or listing source on every lead</li>
              <li>
                <Icon name="check" /> Pipeline view from first contact to sale</li>
            </ul>
            <a className="section-button" href="#contact">
              <span>Show me the dashboard</span>
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
                <small>HVAC</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Roofing</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>Plumbing</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Electrical</small>
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


        {/* ───────────── Industries ───────────── */}
        <section id="work" className="section niche-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Built for how your customers search</span>
              <h2>A small business website shaped around your industry.</h2>
            </div>
            <p>Pick an industry below to see how we adjust the headline, services, trust signals and contact path for the people who buy from that kind of business.</p>
          </div>

          <IndustryTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">More industries we serve</span>
              <h3>Not listed? We still build for you.</h3>
              <p>We work across 20+ industries. If customers search for what you sell, we can build for it.</p>
            </div>
            <div className="niche-banner-tags">
              {[
                "Electrical",
                "Home Inspection",
                "Pest Control",
                "Towing",
                "Movers",
                "Auto Repair",
                "Painting",
                "Dental",
                "Real Estate",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span className="niche-banner-more">+ your industry</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my business website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Inside your free business website</span>
            <h2>Everything a local business site needs to win customers.</h2>
            <p>Your website launches with the structure, speed and tracking a small business needs to show up in search and turn visitors into calls.</p>
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
                <small>BUSINESS SITE 01</small>
                <h3>Pages Google can understand</h3>
                <p>Clear service pages, location pages, on-page SEO and schema markup help search engines match your business to local searches. The same approach behind our <Link href="/services/local-seo-for-home-services" className="offer-inlink">
                    local SEO for home services
                  </Link>.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
            <article>
              <span className="system-card-icon system-card-icon--yellow">
                <Icon name="target" />
              </span>
              <div>
                <small>BUSINESS SITE 02</small>
                <h3>Leads you can measure</h3>
                <p>Contact forms, click-to-call, GA4, Tag Manager and CRM routing show which marketing turns into real customer enquiries.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Start my free website</span>
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
              <span className="section-kicker">Plans that include the website</span>
              <h2>Every qualifying plan includes your new business website.</h2>
            </div>
            <p>
              Any plan at $297/month or above on a 6-month term includes the
              full lead-generation website build at no development fee.
            </p>
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
              <p>
                Build a strong local presence and a website foundation that
                supports discovery.
              </p>
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
              <p>
                Combine local visibility with paid search, landing-page
                improvements, and lead tracking.
              </p>
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
              <p>
                Expand across services and locations with a broader organic and
                paid growth program.
              </p>
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
            <span className="section-kicker section-kicker--dark">What your marketing plan covers</span>
            <h2>A website gets you online. Marketing gets you customers.</h2>
            <p>We match your plan to your market and goals. It can mix paid search, local SEO, Google Business Profile work, call tracking and ongoing site improvements.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Talk through my plan</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Search ads that bring buyers</h3>
              <p>Show up when people search for what you sell, with focused landing pages and tracked enquiries. See our <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local SEO and Maps visibility</h3>
              <p>Rank higher in Google Maps with a sharper profile and a steady flow of reviews. Backed by our <Link href="/services/local-seo-for-home-services" className="offer-inlink">
                  local SEO for home services
                </Link> and <Link
                  href="/local-seo-google-business-optimization"
                  className="offer-inlink"
                >
                  Google Business Profile optimization
                </Link>.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Monthly conversion work</h3>
              <p>We review calls, forms and page behavior each month and improve the pages that should bring in more enquiries.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> website build fee</span>
              <span>
                <b>1</b> point of contact for it all</span>
              <span>
                <b>100%</b> of the offer in writing</span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">The fine print, in plain English</span>
            <h2>No hidden catch: how the free business website works.</h2>
            <p>The build fee is waived when a new client starts a qualifying recurring marketing plan. Each term below is also written into your proposal before you sign.</p>
            <a className="section-button" href="#contact">
              <span>Check my business</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>The fee we waive</strong>
                <small>The website development fee, valued at $2,000. Your monthly marketing plan is billed at its full rate, with no discount.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Who qualifies</strong>
                <small>New clients who start any Zonic marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. Ad spend is billed separately by the platform. Also available with our <Link href="/services/launchpad" className="offer-inlink">
                    Launchpad package
                  </Link>.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Owning your website</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term, and full ownership of the website and hosting passes to you when month six is complete.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>If you stop early</strong>
                <small>You keep your domain and any content you supplied. The website itself does not transfer, since the build fee was waived against the full six-month engagement.</small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Why bundling works for small businesses</span>
              <h2>One partner for your website and your marketing.</h2>
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
                <strong>Site, search and tracking</strong>
                <small>Handled by one team</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your website, ads, Google profile and tracking are planned around the same customers, so no channel works against another.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>No mixed messages</strong>
                  <small>One plan for your market</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>Skipping the upfront build bill frees cash for the marketing that brings customers in from the first month.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Cash kept in the business</strong>
                  <small>Design invoice removed</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, forms, ads and local search are tracked in one place, so every change is based on what customers actually do.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Decisions backed by data</strong>
                  <small>Tracking connected at launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Start my small business plan</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Small business website questions</span>
            <h2>Answers for owners weighing a free website.</h2>
            <p>What owners ask most about the free build, qualifying plans, site scope and month six.</p>
            <a className="section-button" href="#contact">
              <span>Ask our team</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <FaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">Free Small Business Website Offer</span>
            <h2>Claim your free small business website today.</h2>
            <p>Fill in the short form. We review your business, current website and growth goals, then recommend the qualifying marketing plan that fits.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Professional small business website</span>
              <span>
                <Icon name="check" /> Marketing plan sized to your goals</span>
              <span>
                <Icon name="check" /> Clear scope before any commitment</span>
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

          <FreeDesignLeadForm />
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
            <p>Free small business websites paired with the local marketing that brings in customers.</p>
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
            <a href="#work">Industries</a>
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
            <span>Small Business Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>
              With a qualifying marketing plan at $297/month or above on a
              six-month term.
            </p>
            <a href="#free-design-form">
              Get my free website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/roofing-website-design-agency-us/offer">Roofing websites</Link>
            <Link href="/hvac-website-design-agency-us/offer">HVAC websites</Link>
            <Link href="/plumber-website-design-agency-us/offer">Plumbing websites</Link>
          </div>
        </nav>

        <nav className="offer-siblings" aria-label="Zonic services">
          <small>ZONIC SERVICES</small>
          <div>
            <Link href="/services/web-design">Website Designs</Link>
            <Link href="/services">All services</Link>
            <Link href="/services/google-ads">Google Ads</Link>
            <Link href="/local-seo-google-business-optimization">Google Business Profile</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact-us">Contact</Link>
          </div>
        </nav>

        <div className="footer-bottom">
          <small>
            <strong>OFFER TERMS.</strong> Website development fee, valued at
            $2,000, is waived for new clients who start a qualifying Zonic
            Media marketing plan at $297 per month or above on a six-month
            minimum term. Client owns and registers the domain from the start
            of the engagement. Zonic Media hosts and maintains the website
            during the term; full ownership of the website and hosting
            transfers to the client on completion of month six. Build scope is
            a homepage plus ten pages and up to five city pages, with two
            rounds of design revisions; additional pages, revisions and custom
            functionality are quoted separately. Advertising spend is billed by
            the ad platform and is not included in the monthly management fee.
            New clients only; not combinable with other promotions. Zonic Media
            reserves the right to decline applications.
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
        idPrefix="fwd"
        formType="free-website-design"
        heading="Get your new website with no upfront fee."
        serviceLabel="What do you need a website for"
        servicePlaceholder="Select your business type"
        services={[
          "HVAC",
          "Roofing",
          "Plumbing",
          "Electrical",
          "Landscaping",
          "Garage Door",
          "Commercial Cleaning",
          "Pest Control",
          "Towing",
          "Home Inspection",
          "General Contractor",
          "Other home service",
        ]}
      />
    </div>
  );
}
