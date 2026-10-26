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
import ElectricianFaqList, { FAQS } from "./ElectricianFaqList";
import ElectricianLeadForm from "./ElectricianLeadForm";
import ElectricianOfferHeader from "./ElectricianOfferHeader";
import ElectricianServiceTabs from "./ElectricianServiceTabs";
import "./offer.css";

const PAGE_PATH = "/electrician-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Electrician Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Electrician Website Offer",
    description:
      "A conversion-focused electrician website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Electrician Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Electrician Website Offer",
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
  "Emergency Electrical leads",
  "Panel Upgrades leads",
  "EV Chargers leads",
  "Whole-Home Rewiring leads",
  "Lighting Installation leads",
  "Commercial Electrical leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Electrician-first layouts" },
  { icon: "smartphone", label: "Mobile quote flow" },
  { icon: "mail", label: "Quote request forms" },
  { icon: "phone", label: "Outage call buttons" },
  { icon: "search", label: "Electrical local SEO" },
  { icon: "chart", label: "Job source tracking" },
  { icon: "layers", label: "Panel and EV pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Job source tracking" },
  { icon: "layers", label: "Panel and EV pages" },
  { icon: "pin", label: "City service pages" },
  { icon: "gauge", label: "Speed optimization" },
  { icon: "code", label: "Electrician schema" },
  { icon: "target", label: "Book-an-electrician CTAs" },
  { icon: "users", label: "Job lead routing" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Electrician Website Design for Electricians | Zonic" },
  description:
    "Free electrician website design with no build fee on a qualifying Zonic plan. Panel upgrade, EV charger and emergency pages built to book electrical jobs.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free electrician website",
    "electrician website design",
    "free website for electricians",
    "electrical contractor website",
    "electrician web design",
    "free advertising for electricians",
    "electrical company website",
    "electrician marketing plan",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Electrician Website Design for Electricians | Zonic",
    description:
      "Free electrician website design with no build fee on a qualifying Zonic plan. Panel upgrade, EV charger and emergency pages built to book electrical jobs.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free electrician website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function ElectricianOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-electrician" id="top">
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

      <ElectricianOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free electrician website for electrical contractors</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Electrician Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic marketing plan and we build your electrician website with no development fee, ready to book panel upgrades, EV chargers, rewiring and emergency repairs.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my free electrician website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See electrician site features</span>
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
                  <strong>Electrical lead system</strong>
                  <small>Built for calls and quotes</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Licensed trust signals</strong>
                  <small>Site + electrical marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Plain terms</strong>
                  <small>Scope set before work</small>
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
                <div className="address-bar">electricianpros.com</div>
                <div className="browser-live">
                  <span /> ELECTRICAL CONCEPT
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
                  <span>Panels</span>
                  <span>EV Chargers</span>
                  <span>Lighting</span>
                </div>
                <div className="mini-button">Book an electrician</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">LICENSED LOCAL ELECTRICIANS</div>
                  <h2>Safe, steady power for every room.</h2>
                  <p>Panel upgrades, EV chargers, rewiring and emergency repairs from a licensed local team.</p>
                  <div className="canvas-actions">
                    <span>Book service</span>
                    <span>View electrical services</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Licensed &amp; insured <Icon name="check" />{" "}
                    Code-compliant work
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-electrician/hero.webp"
                    alt="Electrician professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">WIRED RIGHT</div>
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
                <span className="phone-kicker">ELECTRICAL SERVICES</span>
                <h3>Power out? Help is close.</h3>
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
                <strong>Made for electrical leads</strong>
                <small>Calls, quotes and tracking</small>
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
            <span className="section-kicker">Your path to a new electrical site</span>
            <h2>Wire up a new electrician website with no build fee.</h2>
            <p>We pair your electrician website with marketing that puts you in front of homeowners and businesses when they need a licensed electrician nearby.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Review your electrical market</h3>
              <p>We look at your service mix, cities, current website, lead sources and the electrical jobs you want more of, from panels to EV chargers.</p>
              <small>Electrical strategy call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Pick an electrician marketing plan</h3>
              <p>Your plan can combine Google Ads, local SEO, Google Business Profile management, call tracking and quote-page improvements.</p>
              <small>Ongoing electrical leads</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build your electrician site</h3>
              <p>We build the agreed electrician website in 2–3 weeks with the upfront development fee waived under your marketing plan. Built to the same standard as <Link href="/services/electrical-website-design" className="offer-inlink">
                  our electrician website design service
                </Link>.</p>
              <small>Electrical build fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>See if my electrical company qualifies</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Electrical lead tracking</span>
            <h2>Trace every electrical job back to its source.</h2>
            <p>Calls, quote forms and chats land in one dashboard with the source attached, so you know whether a panel upgrade came from ads, Google Maps or a free listing.</p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Calls, quotes and chats captured</li>
              <li>
                <Icon name="check" /> Ad, Maps or listing source on each lead</li>
              <li>
                <Icon name="check" /> Status from quote to completed job</li>
            </ul>
            <a className="section-button" href="#contact">
              <span>Show me electrician tracking</span>
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
                <small>Emergency Electrical</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Panel Upgrades</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>EV Chargers</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Whole-Home Rewiring</small>
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
              <span className="section-kicker">Electrical work, page by page</span>
              <h2>From panel swaps to EV chargers, a page for each job.</h2>
            </div>
            <p>Pick an electrical service to see how we shape the message, proof and quote steps for the homeowner or business that needs that exact job done.</p>
          </div>

          <ElectricianServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">Other electrical work</span>
              <h3>Every electrical job you take on, covered.</h3>
              <p>These are a starting point. If customers near you search for an electrical service, we can build the page that wins the job.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ any electrical service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my electrician website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Built into your electrician website</span>
            <h2>An electrical contractor website wired for leads.</h2>
            <p>Your electrician website is built into a connected marketing system, with the structure, tracking and conversion tools that keep quote requests coming in.</p>
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
                <small>CIRCUIT 01</small>
                <h3>Pages search engines trust</h3>
                <p>Service pages, city pages, on-page SEO and schema markup help Google match your company to local electrical searches. The same structure behind our <Link href="/services/local-seo-for-home-services" className="offer-inlink">
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
                <small>CIRCUIT 02</small>
                <h3>Quote requests you can trace</h3>
                <p>Quote forms, click-to-call, GA4, Tag Manager, conversion tracking and CRM routing tie your marketing to real electrical enquiries.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my free electrician website</span>
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
              <span className="section-kicker">Electrician marketing plans</span>
              <h2>The electrician website comes wired into every plan.</h2>
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
            <span className="section-kicker section-kicker--dark">Power behind your electrical leads</span>
            <h2>Your electrician website gets busy when marketing powers it.</h2>
            <p>We build your plan around your electrical market. It can mix paid search, local SEO, Google Business Profile growth, call tracking and ongoing page improvements.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Plan my electrical marketing</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Paid search for electricians</h3>
              <p>Show up for panel upgrade, EV charger, rewiring and emergency searches with targeted ads and tracked quotes. See our <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Free advertising for electricians</h3>
              <p>Your Google Business Profile is free advertising for electricians. We optimize it so you show in Maps across your cities. Backed by <Link
                  href="/local-seo-google-business-optimization"
                  className="offer-inlink"
                >
                  Google Business Profile optimization
                </Link>.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Quote page improvements</h3>
              <p>We review calls, quote forms and page behavior, then improve the pages that should book more jobs.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> electrician build fee</span>
              <span>
                <b>1</b> partner for site and marketing</span>
              <span>
                <b>100%</b> of terms set in writing</span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">Straight electrical terms</span>
            <h2>Read the electrician website terms before you claim.</h2>
            <p>We waive the electrician website design and development fee when a new client starts a qualifying recurring marketing plan. Nothing stays vague before you agree.</p>
            <a className="section-button" href="#contact">
              <span>Check my electrical company</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>The waived fee</strong>
                <small>The electrician website development fee, valued at $2,000. Your monthly plan is charged at its full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Plans that count</strong>
                <small>Any Zonic marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. Ad spend is billed separately by the platform. Also available with <Link href="/services/electrical-website-design" className="offer-inlink">
                    our electrician website design service
                  </Link>.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Ownership</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term, and full ownership of the website and hosting transfers to you when month six ends.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Cancelling before month six</strong>
                <small>You keep your domain and any content you supplied. The website does not transfer, because the build fee was waived against the full six-month engagement.</small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Why electricians bundle</span>
              <h2>Why electricians keep site and marketing under one roof.</h2>
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
                <strong>One electrical lead system</strong>
                <small>Site · listings · tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your website, ads, Google profile and tracking all target the same homeowners and businesses in your service area.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One electrical strategy</strong>
                  <small>Built for your market</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>Skipping the build invoice leaves more budget for campaigns that fill your calendar with panel and EV work.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Budget for real jobs</strong>
                  <small>Zero build invoice</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, quote forms, ads and local search actions are tracked together, so every change aims at paying electrical work.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Electrical growth on record</strong>
                  <small>Reporting from launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my electrician lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Electrician FAQs</span>
            <h2>Answers for licensed electrical contractors.</h2>
            <p>What electricians ask most about the free website, free advertising options, qualifying plans and the terms.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my electrical market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <ElectricianFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">Electrician website launch</span>
            <h2>Switch on a new electrician website at no build cost.</h2>
            <p>Fill in the short form. We review your electrical company, current website, service area and goals before recommending a qualifying plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Electrician website built for quote requests</span>
              <span>
                <Icon name="check" /> Marketing plan matched to your market</span>
              <span>
                <Icon name="check" /> Every term confirmed before you sign</span>
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

          <ElectricianLeadForm />
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
            <p>Electrician websites paired with the marketing that books panel, EV and service calls.</p>
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
            <a href="#work">Electrician services</a>
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
            <span>Free Electrician Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-electrician-offer-form">
              Get my electrician website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/flooring-website-design-agency-us/offer">Flooring websites</Link>
            <Link href="/garage-door-website-design-agency-us/offer">Garage Door websites</Link>
            <Link href="/home-inspector-website-design-agency-us/offer">Home Inspector websites</Link>
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
            <strong>OFFER TERMS.</strong> Electrician website development fee, valued at $2,000, is
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
        idPrefix="ofr-electrician"
        formType="free-electrician-website"
        heading="Get your electrician website with no upfront fee."
        serviceLabel="Electrician work you want more of"
        servicePlaceholder="Select a electrician service"
        services={[
          "Emergency Electrical",
          "Panel Upgrades",
          "EV Chargers",
          "Whole-Home Rewiring",
          "Lighting Installation",
          "Commercial Electrical",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
