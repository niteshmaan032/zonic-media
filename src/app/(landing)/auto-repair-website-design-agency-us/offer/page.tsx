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
import AutoRepairFaqList, { FAQS } from "./AutoRepairFaqList";
import AutoRepairLeadForm from "./AutoRepairLeadForm";
import AutoRepairOfferHeader from "./AutoRepairOfferHeader";
import AutoRepairServiceTabs from "./AutoRepairServiceTabs";
import "./offer.css";

const PAGE_PATH = "/auto-repair-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Auto Repair Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Auto Repair Website Offer",
    description:
      "A conversion-focused auto repair website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Auto Repair Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Auto Repair Website Offer",
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
  "Vehicle Diagnostics leads",
  "Brake Repair leads",
  "Engine Repair leads",
  "Oil & Maintenance leads",
  "Tires & Alignment leads",
  "Fleet Service leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Shop-branded design" },
  { icon: "smartphone", label: "Mobile booking" },
  { icon: "mail", label: "Appointment requests" },
  { icon: "phone", label: "Call-the-shop button" },
  { icon: "search", label: "Repair service SEO" },
  { icon: "chart", label: "Repair order tracking" },
  { icon: "layers", label: "Service menu pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Repair order tracking" },
  { icon: "layers", label: "Service menu pages" },
  { icon: "pin", label: "Shop-branded design" },
  { icon: "gauge", label: "Mobile booking" },
  { icon: "code", label: "Appointment requests" },
  { icon: "target", label: "Call-the-shop button" },
  { icon: "users", label: "Repair service SEO" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Auto Repair Website | Auto Shop Web Design | Zonic" },
  description:
    "Free auto repair shop website with appointment requests, service menus and click-to-call. Development fee waived on a qualifying Zonic marketing plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free auto repair website",
    "auto repair website design",
    "auto repair shop website",
    "mechanic website design",
    "free website for auto repair shop",
    "auto shop web design",
    "car repair website",
    "auto repair marketing",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Website for Auto Repair Shops | Zonic Media",
    description:
      "Free auto repair shop website with appointment requests, service menus and click-to-call. Development fee waived on a qualifying Zonic marketing plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free auto repair website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function AutoRepairOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-auto-repair" id="top">
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

      <AutoRepairOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website offer for auto repair shops and mechanics</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Auto Repair Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic Media marketing plan and we build your auto repair shop website with appointment requests, service pages and a call button drivers can tap. No upfront development fee.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my auto shop website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See the shop site build</span>
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
                  <strong>Shop site fee waived</strong>
                  <small>No upfront website bill</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Appointment-ready pages</strong>
                  <small>Built for calls and bay bookings</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Bay-filling growth</strong>
                  <small>Website + auto marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Shop scope in writing</strong>
                  <small>Agreed before we build</small>
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
                <small>With a qualifying shop plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">autorepairpros.com</div>
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
                  <span>Repairs</span>
                  <span>Our Shop</span>
                  <span>Reviews</span>
                </div>
                <div className="mini-button">Book service</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">AUTO REPAIR SHOP</div>
                  <h2>Repairs done right. Booking made easy.</h2>
                  <p>An auto repair website that turns check engine searches into booked appointments.</p>
                  <div className="canvas-actions">
                    <span>Book an appointment</span>
                    <span>See repairs</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-auto-repair/hero.webp"
                    alt="Auto Repair professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">YOUR SHOP, YOUR BAYS</div>
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
                <span className="phone-kicker">BOOK SERVICE</span>
                <h3>From warning light to booked bay.</h3>
                <div className="phone-art phone-art--industry" />
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
                <strong>Built for repair orders</strong>
                <small>Bookings, calls and tracking</small>
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
            <span className="section-kicker">Your auto shop website in three steps</span>
            <h2>How your auto shop gets its new website.</h2>
            <p>Zonic pairs your auto repair shop website with ongoing marketing, so drivers near you with a warning light or a service due find your shop first.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Walk us through your shop</h3>
              <p>We review your repair mix, bay capacity, service area, current website and the channels most likely to bring in profitable repair orders.</p>
              <small>Shop review call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Pick your shop’s plan</h3>
              <p>Your plan can mix Google Ads, Local SEO, Google Business Profile care, call tracking and booking improvements.</p>
              <small>Monthly shop marketing</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build the shop site</h3>
              <p>
                Zonic builds the agreed auto repair website, with appointment requests on key pages and the build fee waived. Same quality bar as{" "}
                <Link href="/services/web-design" className="offer-inlink">
                  our full website design service
                </Link>
                .
              </p>
              <small>No shop build invoice</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my auto shop</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Repair order tracking</span>
            <h2>Know which repairs your marketing booked.</h2>
            <p>
              Calls, appointment requests and chats land in one dashboard with the source attached, so you see which brake jobs, diagnostics and services came from ads, Maps or search.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every call and booking request logged
              </li>
              <li>
                <Icon name="check" /> Lead source shown on each repair job
              </li>
              <li>
                <Icon name="check" /> Status from new request to finished job
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>Preview The Shop Dashboard</span>
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
                <small>Vehicle Diagnostics</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Brake Repair</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>Engine Repair</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Oil & Maintenance</small>
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
              <span className="section-kicker">Auto repair service pages</span>
              <h2>Brakes, diagnostics, engines: a page for each job your bays want.</h2>
            </div>
            <p>Drivers search by symptom and by service. Pick a tab to see how each page explains the repair, shows trust signals and leads to a booking.</p>
          </div>

          <AutoRepairServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                Past these six repairs
              </span>
              <h3>A/C, transmission, electrical and more.</h3>
              <p>These tabs are a sample. Any repair drivers search for in your area can get its own page.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ every repair your bays handle</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my repair service pages</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Built into your shop website</span>
            <h2>An auto repair website that keeps booking after launch.</h2>
            <p>Your auto repair website is part of a full marketing system, with service pages, booking tracking and trust signals that keep repair orders coming in.</p>
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
                <small>SHOP SITE 01</small>
                <h3>Found for nearby repair searches</h3>
                <p>
                  Repair pages, nearby-area pages, on-page SEO and schema help Google match your shop to drivers searching close by. It uses the same groundwork as our{" "}
                  <Link href="/services/local-seo-for-home-services" className="offer-inlink">
                    local SEO service
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
                <small>SHOP SITE 02</small>
                <h3>Bookings traced to source</h3>
                <p>Appointment forms, click-to-call, GA4, Tag Manager and call tracking show which campaigns put cars in your bays.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my auto shop website</span>
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
              <span className="section-kicker">Auto shop plans, website included</span>
              <h2>Choose your shop’s plan. The new website comes with it.</h2>
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
            <span className="section-kicker section-kicker--dark">
              The auto repair marketing plan
            </span>
            <h2>Keep your bays full with search, Maps and ads behind the site.</h2>
            <p>Your plan is built around your shop and nearby drivers. It can combine paid search, local visibility, Google Business Profile growth, booking tracking and steady conversion tests.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Check my shop’s market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Google Ads for repairs</h3>
              <p>
                Reach drivers searching for brakes or a mechanic nearby, with tracked ads and booking pages. Read about our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Maps visibility + GBP</h3>
              <p>
                Show up for mechanic searches around your shop, with a profile, photos and reviews that help drivers choose you. Backed by our{" "}
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
              <h3>More booked repairs</h3>
              <p>Call and form tracking, booking-page tests and plain reports turn more shop website visits into repair orders.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> upfront development fee
              </span>
              <span>
                <b>1</b> shop-ready website
              </span>
              <span>
                <b>100%</b> scope in writing
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Auto shop offer terms
            </span>
            <h2>The free auto shop website, line by line.</h2>
            <p>Zonic waives the upfront auto repair website design and development fee when your shop starts a qualifying monthly marketing plan. Every term is set out before you agree.</p>
            <a className="section-button" href="#contact">
              <span>See if my auto shop qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>The shop fee we waive</strong>
                <small>The auto repair website development fee, valued at $2,000. Your monthly plan is billed at full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>How your shop qualifies</strong>
                <small>
                  Any Zonic marketing plan at $297/month or above (Local Foundation, Growth, or Full Market) on a six-month minimum term. Advertising spend is billed separately by the platform. Also available with{" "}
                  <Link href="/services/web-design" className="offer-inlink">
                    our full website design service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Site ownership</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>If your shop cancels early</strong>
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
              <span className="section-kicker">Shop site + steady marketing</span>
              <h2>A shop website and marketing that work as one team.</h2>
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
                <strong>One shop system</strong>
                <small>Site · Maps · bookings</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your shop website, ads, map listing and tracking all aim at the same local drivers, not handled as separate jobs by separate vendors.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One shop strategy</strong>
                  <small>Built around your bays</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>No website invoice up front, so your budget goes toward getting cars booked instead of paying off a build.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Less cash needed up front</strong>
                  <small>No shop build bill</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, bookings, ads and map actions are tracked together, so each update aims at more repair orders.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Repairs you can trace</strong>
                  <small>Tracking ready at launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my shop booking system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Auto repair website FAQs</span>
            <h2>What shop owners ask before signing up.</h2>
            <p>Straight answers for auto shop owners on eligibility, website scope and the monthly marketing plan behind the offer.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my shop’s area</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <AutoRepairFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Free Auto Repair Website Offer
            </span>
            <h2>Put a booking-ready website behind your shop for $0 upfront.</h2>
            <p>Fill in the short form. Zonic reviews your shop, services, current website and goals, then recommends a qualifying plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Booking-ready auto repair website
              </span>
              <span>
                <Icon name="check" /> Marketing matched to your shop
              </span>
              <span>
                <Icon name="check" /> Scope and terms agreed before you start
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

          <AutoRepairLeadForm />
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
            <p>Auto repair shop websites built around booked appointments and the marketing that fills your bays.</p>
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
            <a href="#work">Auto Repair services</a>
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
            <span>Free Auto Shop Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-auto-repair-offer-form">
              Get my auto repair website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/bathroom-remodeling-website-design-agency-us/offer">Bathroom Remodeling websites</Link>
            <Link href="/chiropractic-website-design-agency-us/offer">Chiropractic websites</Link>
            <Link href="/cleaning-company-website-design-agency-us/offer">Cleaning Company websites</Link>
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
            <strong>OFFER TERMS.</strong> Auto Repair website development fee, valued at $2,000, is
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
        idPrefix="ofr-auto-repair"
        formType="free-auto-repair-website"
        heading="Get your auto repair website with no upfront fee."
        serviceLabel="Auto Repair work you want more of"
        servicePlaceholder="Select a auto repair service"
        services={[
          "Vehicle Diagnostics",
          "Brake Repair",
          "Engine Repair",
          "Oil & Maintenance",
          "Tires & Alignment",
          "Fleet Service",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
