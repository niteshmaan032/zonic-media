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
import GarageDoorFaqList, { FAQS } from "./GarageDoorFaqList";
import GarageDoorLeadForm from "./GarageDoorLeadForm";
import GarageDoorOfferHeader from "./GarageDoorOfferHeader";
import GarageDoorServiceTabs from "./GarageDoorServiceTabs";
import "./offer.css";

const PAGE_PATH = "/garage-door-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Garage Door Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Garage Door Website Offer",
    description:
      "A conversion-focused garage door website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Garage Door Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Garage Door Website Offer",
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
  "Emergency Repair leads",
  "Broken Springs leads",
  "Opener Repair leads",
  "New Door Installation leads",
  "Commercial Doors leads",
  "Preventive Maintenance leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Sticky call button" },
  { icon: "smartphone", label: "Thumb-friendly mobile" },
  { icon: "mail", label: "Repair request form" },
  { icon: "phone", label: "Click-to-call" },
  { icon: "search", label: "Garage door SEO setup" },
  { icon: "chart", label: "Call tracking" },
  { icon: "layers", label: "Spring & opener pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Lead source tracking" },
  { icon: "layers", label: "Install quote pages" },
  { icon: "pin", label: "Door style gallery" },
  { icon: "gauge", label: "Fast loading" },
  { icon: "code", label: "Quote forms" },
  { icon: "target", label: "Emergency banner" },
  { icon: "users", label: "City coverage pages" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Garage Door Website Design for Repair Companies" },
  description:
    "Free garage door website built for urgent repair calls: tap-to-call, spring and opener pages, install quote forms. No upfront build fee on a qualifying plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free garage door website",
    "garage door website design",
    "garage door company website",
    "free website for garage door companies",
    "garage door repair website",
    "garage door marketing plan",
    "garage door web design",
    "garage door websites",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Garage Door Website Design for Repair Companies | Zonic Media",
    description:
      "Free garage door website built for urgent repair calls: tap-to-call, spring and opener pages, install quote forms. No upfront build fee on a qualifying plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free garage door website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function GarageDoorOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-garage-door" id="top">
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

      <GarageDoorOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website for garage door companies</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Garage Door Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic Media marketing plan and we build a garage door website made for urgent repair calls and install quotes, with no upfront development fee.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my free website</span>
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
                  <strong>$0 upfront build</strong>
                  <small>Development fee waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Repair call system</strong>
                  <small>Built for fast phone calls</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Call-first growth</strong>
                  <small>Website + garage door marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Clear contract</strong>
                  <small>Terms written before work</small>
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
                <strong>$0 to build the garage door site</strong>
                <small>With a qualifying marketing plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">garagedoorpros.com</div>
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
                <div className="mini-button">Call now</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">GARAGE DOOR WEBSITE</div>
                  <h2>Broken spring? Call for same-day help.</h2>
                  <p>A garage door website that puts the phone number first and turns urgent searches into booked repairs.</p>
                  <div className="canvas-actions">
                    <span>Call now</span>
                    <span>Repair services</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-garage-door/hero.webp"
                    alt="Garage Door professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">SAME-DAY REPAIR</div>
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
                <span className="phone-kicker">GARAGE DOOR REPAIR</span>
                <h3>Stuck door? One tap to a tech.</h3>
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
                <strong>Built for urgent repair calls</strong>
                <small>Call tracking and forms ready</small>
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
            <span className="section-kicker">Built around your dispatch</span>
            <h2>A garage door website made for the phone, $0 to build.</h2>
            <p>When a spring snaps, owners call the first company that looks trustworthy. We build a site that earns that call and pair it with marketing in your service area.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Tell us how your calls come in</h3>
              <p>We review your repair and install mix, dispatch hours, service area, current website and the lead sources that ring your phone today.</p>
              <small>Dispatch review call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Pick the plan for your service area</h3>
              <p>Your plan can pair Google Ads, Local SEO, Google Business Profile management, call tracking and conversion work aimed at urgent searches.</p>
              <small>Recurring growth plan</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build a call-first garage site</h3>
              <p>
                We build the agreed garage door website with the upfront development fee waived under your marketing plan. It shares the build standard of{" "}
                <Link href="/services/garage-door-website-design" className="offer-inlink">
                  our garage door website design service
                </Link>
                .
              </p>
              <small>No upfront website cost</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my garage door company</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Call and dispatch tracking</span>
            <h2>Know which source rang for each door job.</h2>
            <p>
              Calls, forms and chats land in one dashboard with the source attached, so you know whether the spring repair came from an ad, your map listing or organic search.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every call, form and chat on record
              </li>
              <li>
                <Icon name="check" /> Source tagged on each repair lead
              </li>
              <li>
                <Icon name="check" /> From first call to job done
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>See the call tracking setup</span>
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
                Mike S.
                <small>Emergency Repair</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Jordan E.
                <small>Broken Springs</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Alicia F.
                <small>Opener Repair</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Ray K.
                <small>New Door Installation</small>
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
              <span className="section-kicker">Garage door repair and install pages</span>
              <h2>Snapped springs, dead openers, new doors: one page for each call type.</h2>
            </div>
            <p>Pick a service to see the copy on the left and the garage door website mockup on the right. Each page answers what owners need to know before they call.</p>
          </div>

          <GarageDoorServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                Every door service you run
              </span>
              <h3>Gate openers or keypads? We add those pages.</h3>
              <p>Six tabs show the core work. If owners search for a garage door service you offer, we can build its page.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ every garage door service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Claim my garage door website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Garage door site build</span>
            <h2>A garage door website that brings in calls while your techs work.</h2>
            <p>Your garage door website is wired into your marketing plan, with service pages, local structure and call tracking that support steady repair and install leads.</p>
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
                <small>GARAGE SITE 01</small>
                <h3>Ready for urgent searches</h3>
                <p>
                  Service pages, city pages, on-page SEO and schema where it fits help Google match your garage door company to nearby searches. The same structure behind our{" "}
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
                <small>GARAGE SITE 02</small>
                <h3>Every call traced</h3>
                <p>Repair forms, click-to-call, GA4, Tag Manager, call and conversion tracking and CRM routing connect each garage door lead to its source.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Get my garage door website</span>
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
              <span className="section-kicker">Plans for door companies</span>
              <h2>Start on any plan. Your garage door website is part of it.</h2>
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
              Marketing that brings repair calls
            </span>
            <h2>Broken doors can’t wait. The plan puts you in view when owners search.</h2>
            <p>We build the plan around your garage door market and hours. It can combine paid search, local visibility, Google Business Profile growth, call tracking and conversion work.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Review my garage door market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Ads for urgent repairs</h3>
              <p>
                Show up for searches like garage door repair near me or broken spring, with call-focused ads and matching pages. See our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Maps where breakdowns happen</h3>
              <p>
                Earn visibility in local results across your service area, with a profile that shows real jobs and response details. Backed by{" "}
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
              <h3>More calls from each visit</h3>
              <p>Call tracking, page tests and monthly reports show what turns a stressed visitor into a booked repair, so we can improve it.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> website development cost
              </span>
              <span>
                <b>1</b> log for every repair call
              </span>
              <span>
                <b>100%</b> of the terms in writing
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Garage door offer terms
            </span>
            <h2>Read this before claiming the garage door website.</h2>
            <p>Zonic waives the upfront design and development fee for your garage door website when an eligible company starts a qualifying recurring marketing plan. Every term is clear before you agree.</p>
            <a className="section-button" href="#contact">
              <span>See if my garage door company qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>The waived cost</strong>
                <small>The garage door website development fee, valued at $2,000. Your monthly plan is billed at full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>What you need to qualify</strong>
                <small>
                  Any Zonic marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. Advertising spend is billed separately by the ad platform. Also available with{" "}
                  <Link href="/services/garage-door-website-design" className="offer-inlink">
                    our garage door website design service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Who owns what</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Early exit</strong>
                <small>
                  You keep your domain and any content you supplied. The garage door website does not transfer, because the build fee was waived against the full six-month engagement.
                </small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Website + call-driven marketing</span>
              <h2>Site, ads and maps, working as one.</h2>
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
                <strong>One call system</strong>
                <small>Site · ads · call tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your website, ads and map listing are built around the same urgent caller, so every path leads to the phone instead of three vendors working apart.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One goal: the call</strong>
                  <small>Planned for your area</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>With the website fee waived, your budget can go into reaching owners with a broken door today, without a separate development bill.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Lower cost to launch</strong>
                  <small>Development fee waived</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, forms, campaigns and map actions are tracked together, so each month’s changes focus on the repairs and installs you want.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Calls you can count</strong>
                  <small>Tracking live on day one</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my garage door call system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Quick answers</span>
            <h2>Garage door owners ask these first.</h2>
            <p>Quick answers on eligibility, what the garage door website includes and how the qualifying marketing engagement works.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my garage door market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <GarageDoorFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Ready for more door calls?
            </span>
            <h2>Make your number the one they call. Garage door website, no upfront development fee.</h2>
            <p>Complete the short form. We review your garage door company, current website, service area, hours and goals, then recommend the qualifying plan that fits.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Garage door website built around the phone
              </span>
              <span>
                <Icon name="check" /> Marketing plan matched to your goals
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

          <GarageDoorLeadForm />
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
            <p>Garage door websites connected to the marketing services that bring garage door companies repair and install calls.</p>
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
            <a href="#work">Garage Door services</a>
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
            <span>Free Garage Door Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-garage-door-offer-form">
              Get my garage door website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/home-inspector-website-design-agency-us/offer">Home Inspector websites</Link>
            <Link href="/kitchen-remodeling-website-design-agency-us/offer">Kitchen Remodeling websites</Link>
            <Link href="/landscaping-website-design-agency-us/offer">Landscaping websites</Link>
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
            <strong>OFFER TERMS.</strong> Garage Door website development fee, valued at $2,000, is
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
        idPrefix="ofr-garage-door"
        formType="free-garage-door-website"
        heading="Get your garage door website with no upfront fee."
        serviceLabel="Garage Door work you want more of"
        servicePlaceholder="Select a garage door service"
        services={[
          "Emergency Repair",
          "Broken Springs",
          "Opener Repair",
          "New Door Installation",
          "Commercial Doors",
          "Preventive Maintenance",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
