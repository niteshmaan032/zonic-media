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
import FlooringFaqList, { FAQS } from "./FlooringFaqList";
import FlooringLeadForm from "./FlooringLeadForm";
import FlooringOfferHeader from "./FlooringOfferHeader";
import FlooringServiceTabs from "./FlooringServiceTabs";
import "./offer.css";

const PAGE_PATH = "/flooring-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Flooring Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Flooring Website Offer",
    description:
      "A conversion-focused flooring website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Flooring Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Flooring Website Offer",
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
  "Hardwood Flooring leads",
  "Luxury Vinyl leads",
  "Tile Flooring leads",
  "Carpet Installation leads",
  "Floor Refinishing leads",
  "Commercial Flooring leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Flooring product pages" },
  { icon: "smartphone", label: "Mobile layout" },
  { icon: "mail", label: "Measure request form" },
  { icon: "phone", label: "Click-to-call" },
  { icon: "search", label: "Flooring SEO setup" },
  { icon: "chart", label: "Lead tracking" },
  { icon: "layers", label: "Showroom page" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Call tracking" },
  { icon: "layers", label: "Install gallery" },
  { icon: "pin", label: "Floor type guides" },
  { icon: "gauge", label: "Fast loading" },
  { icon: "code", label: "Quote forms" },
  { icon: "target", label: "Tap-to-call" },
  { icon: "users", label: "Service area pages" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Flooring Website Design for Flooring Contractors" },
  description:
    "Get a free flooring website for your flooring company or store, with product pages, in-home measure requests and showroom info. $0 upfront on a qualifying plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free flooring website",
    "flooring website design",
    "flooring company website",
    "free website for flooring contractors",
    "flooring web design",
    "flooring marketing plan",
    "websites for flooring contractors",
    "flooring store website",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Flooring Website Design for Flooring Contractors | Zonic Media",
    description:
      "Get a free flooring website for your flooring company or store, with product pages, in-home measure requests and showroom info. $0 upfront on a qualifying plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free flooring website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function FlooringOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-flooring" id="top">
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

      <FlooringOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website for flooring companies and stores</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Flooring Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic Media marketing plan and we build your flooring company website, with product pages and in-home measure requests, at no upfront development fee.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my flooring website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See what’s included</span>
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
                  <strong>$0 website build</strong>
                  <small>Development fee waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Measure request flow</strong>
                  <small>Calls, quotes and visits</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Product-led growth</strong>
                  <small>Flooring website + marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Terms you can read</strong>
                  <small>Scope set in writing</small>
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
                <strong>$0 to build your flooring website</strong>
                <small>Paired with a qualifying plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">flooringpros.com</div>
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
                <div className="mini-button">Get a measure</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">FLOORING COMPANY WEBSITE</div>
                  <h2>New floors start with a measure.</h2>
                  <p>A flooring website that walks shoppers from product ideas to a booked in-home measure in your area.</p>
                  <div className="canvas-actions">
                    <span>Book a measure</span>
                    <span>Shop floors</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-flooring/hero.webp"
                    alt="Flooring professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">FRESH INSTALL</div>
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
                <span className="phone-kicker">FLOORING WEBSITE</span>
                <h3>Pick the floor. Book the measure.</h3>
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
                <strong>Made for measure requests</strong>
                <small>Forms, calls and tracking set</small>
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
            <span className="section-kicker">Three steps to your flooring website</span>
            <h2>Your next flooring website is on us, with a qualifying plan.</h2>
            <p>Flooring shoppers compare products, prices and installers online first. We build a flooring website that answers those questions and back it with local marketing.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Tell us what floors you sell</h3>
              <p>We review your product lines, install crews, showroom, service area, current website and where your measure requests come from now.</p>
              <small>Intro call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Choose the flooring growth plan</h3>
              <p>Your plan can include Google Ads, Local SEO, Google Business Profile management, tracking and conversion work aimed at local floor buyers.</p>
              <small>Monthly marketing</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>Your flooring site goes live</h3>
              <p>
                We build the agreed flooring website with the upfront development fee waived under your marketing plan. It matches the build quality of{" "}
                <Link href="/services/flooring-website-design" className="offer-inlink">
                  our flooring website design service
                </Link>
                .
              </p>
              <small>Fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my flooring company</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Measure and quote tracking</span>
            <h2>Every flooring quote and measure, tracked.</h2>
            <p>
              Calls, quote forms and chats reach one dashboard with the source attached, so you can see whether the hardwood job came from an ad, your map listing or your flooring website.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Each call, quote form and chat stored
              </li>
              <li>
                <Icon name="check" /> Source attached to every floor job
              </li>
              <li>
                <Icon name="check" /> Status from measure to installed
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>See the flooring lead board</span>
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
                Jason L.
                <small>Hardwood Flooring</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Mia R.
                <small>Luxury Vinyl</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Tom F.
                <small>Tile Flooring</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Ava S.
                <small>Carpet Installation</small>
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
              <span className="section-kicker">Flooring website product pages</span>
              <h2>Hardwood buyers and LVP shoppers search differently. Each gets its own page.</h2>
            </div>
            <p>Choose a floor type to see the copy on the left and the flooring website mockup on the right. Each page answers what buyers ask about cost, wear and install.</p>
          </div>

          <FlooringServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                Every floor you install
              </span>
              <h3>Laminate, stairs and epoxy can rank too.</h3>
              <p>The tabs show six floor types. If shoppers search for a flooring product you offer, we can build that page.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ every flooring product you sell</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Claim my flooring website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Flooring website features</span>
            <h2>A flooring website that sells floors while your crews install them.</h2>
            <p>Your flooring website is built into your marketing plan, with product pages, local search structure and tracking that keep quote and measure requests coming.</p>
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
                <small>FLOORING SITE 01</small>
                <h3>Product pages that rank</h3>
                <p>
                  Floor type pages, town pages, on-page SEO and schema where it fits help Google match your flooring business to local searches. The same structure behind our{" "}
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
                <small>FLOORING SITE 02</small>
                <h3>Quotes tied to sources</h3>
                <p>Quote forms, click-to-call, GA4, Tag Manager, conversion tracking and CRM routing link each flooring enquiry to the channel that sent it.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Get my flooring website</span>
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
              <span className="section-kicker">Qualifying flooring plans</span>
              <h2>Your flooring website comes with any plan below.</h2>
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
              The marketing side of the offer
            </span>
            <h2>A flooring website needs shoppers. The plan sends local floor buyers your way.</h2>
            <p>We fit the plan to your flooring market. It can mix paid search, local visibility, Google Business Profile growth, tracking and steady conversion work.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Review my flooring market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Ads for floor buyers</h3>
              <p>
                Show up for searches like hardwood installers or LVP near me, with ads that land on the matching flooring page. See our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local map visibility</h3>
              <p>
                Rank in local results for the towns you install in, with a profile that shows your showroom and finished floors. Backed by{" "}
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
              <h3>More measures booked</h3>
              <p>Call and form tracking, page updates and clear reporting help turn more flooring website visits into booked measures.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> fee to build the website
              </span>
              <span>
                <b>1</b> board for every floor lead
              </span>
              <span>
                <b>100%</b> of the scope in writing
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              How the free flooring website works
            </span>
            <h2>Free flooring website terms, in plain English.</h2>
            <p>Zonic waives the upfront design and development fee for your flooring website when an eligible flooring company starts a qualifying recurring marketing plan. Each term is agreed in writing.</p>
            <a className="section-button" href="#contact">
              <span>See if my flooring company qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>What is waived</strong>
                <small>The flooring website development fee, valued at $2,000. Your monthly plan is billed at its full rate and is not reduced.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Who qualifies</strong>
                <small>
                  Any Zonic marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. Advertising spend is billed separately by the platform. Also available with{" "}
                  <Link href="/services/flooring-website-design" className="offer-inlink">
                    our flooring website design service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Website ownership</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the flooring website during the term, and full ownership of the site and hosting transfers to you at the end of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Early cancellation</strong>
                <small>
                  You keep your domain and any content you supplied. The flooring website does not transfer, because the build fee was waived against the full six-month engagement.
                </small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Flooring website + marketing</span>
              <h2>Why flooring firms pair site and marketing.</h2>
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
                <strong>One flooring system</strong>
                <small>Website · maps · tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your flooring website, ads and map listing are planned for the same floor buyer, from first search to booked measure, not run as unrelated jobs.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>Single plan</strong>
                  <small>Built for your area</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>With the build fee waived, your budget goes into reaching people shopping for new floors, without a separate website development bill.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Easy to start</strong>
                  <small>Development fee waived</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, quotes, campaigns and map actions are measured together, so ongoing work focuses on the channels that bring installed jobs.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Growth you can see</strong>
                  <small>Tracking set at launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my flooring lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Flooring website FAQ</span>
            <h2>The flooring questions we hear most.</h2>
            <p>What flooring contractors and stores ask about eligibility, flooring website scope and the qualifying marketing plan.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my flooring market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <FlooringFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Claim the flooring website
            </span>
            <h2>Book more measures from a new flooring website, with no upfront development fee.</h2>
            <p>Fill in the short form. We review your flooring company, current website, product lines, service area and goals, then recommend a qualifying plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Flooring website with product and measure pages
              </span>
              <span>
                <Icon name="check" /> Marketing plan matched to your market
              </span>
              <span>
                <Icon name="check" /> Scope and terms clear before you commit
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

          <FlooringLeadForm />
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
            <p>Flooring websites for contractors and stores, connected to the marketing that brings in measure and quote requests.</p>
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
            <a href="#work">Flooring services</a>
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
            <span>Free Flooring Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-flooring-offer-form">
              Get my flooring website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/garage-door-website-design-agency-us/offer">Garage Door websites</Link>
            <Link href="/home-inspector-website-design-agency-us/offer">Home Inspector websites</Link>
            <Link href="/kitchen-remodeling-website-design-agency-us/offer">Kitchen Remodeling websites</Link>
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
            <strong>OFFER TERMS.</strong> Flooring website development fee, valued at $2,000, is
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
        idPrefix="ofr-flooring"
        formType="free-flooring-website"
        heading="Get your flooring website with no upfront fee."
        serviceLabel="Flooring work you want more of"
        servicePlaceholder="Select a flooring service"
        services={[
          "Hardwood Flooring",
          "Luxury Vinyl",
          "Tile Flooring",
          "Carpet Installation",
          "Floor Refinishing",
          "Commercial Flooring",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
