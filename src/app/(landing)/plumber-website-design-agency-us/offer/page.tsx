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
import PlumbingFaqList, { FAQS } from "./PlumbingFaqList";
import PlumbingLeadForm from "./PlumbingLeadForm";
import PlumbingOfferHeader from "./PlumbingOfferHeader";
import PlumbingServiceTabs from "./PlumbingServiceTabs";
import "./offer.css";

const PAGE_PATH = "/plumber-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Plumbing Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Plumbing Website Offer",
    description:
      "A conversion-focused plumbing website with the upfront development fee waived for plumbing companies on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Plumbing Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Plumbing Website Offer",
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
  "Emergency Plumbing leads",
  "Drain Cleaning leads",
  "Water Heaters leads",
  "Leak Detection leads",
  "Sewer Lines leads",
  "Fixture Repair leads",
  "Commercial Plumbing leads",
  "Repiping leads",
  "Sump Pumps leads",
  "Hydro Jetting leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Plumber-first layouts" },
  { icon: "smartphone", label: "One-tap mobile calls" },
  { icon: "clipboard", label: "Service booking forms" },
  { icon: "phone", label: "Burst-pipe call buttons" },
  { icon: "search", label: "Plumbing local SEO base" },
  { icon: "chart", label: "Plumbing call tracking" },
  { icon: "layers", label: "Drain and heater pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Plumbing call tracking" },
  { icon: "layers", label: "Drain and heater pages" },
  { icon: "pin", label: "Neighborhood pages" },
  { icon: "gauge", label: "Quick mobile loads" },
  { icon: "code", label: "Plumber schema markup" },
  { icon: "target", label: "Book-a-plumber buttons" },
  { icon: "users", label: "Dispatch lead routing" },
] as const;

const EXTRA_SERVICES = [
  "Fixture Repair",
  "Repiping",
  "Sump Pumps",
  "Hydro Jetting",
  "Gas Lines",
  "Backflow Testing",
  "Garbage Disposals",
  "Water Softeners",
  "Slab Leaks",
];

export const metadata: Metadata = {
  title: { absolute: "Free Plumber Website for Plumbing Companies | Zonic" },
  description:
    "Free plumber website for plumbing companies, with no build fee on a qualifying Zonic plan. Emergency call buttons plus drain, water heater and city pages.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services/*-website-design page targets so the two do not compete.
  keywords: [
    "free plumber website",
    "free plumbing website",
    "plumber website design",
    "plumbing website design",
    "website for plumbers",
    "plumbing company website",
    "emergency plumber website",
    "plumbing marketing plan",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Plumber Website for Plumbing Companies | Zonic",
    description:
      "Free plumber website for plumbing companies, with no build fee on a qualifying Zonic plan. Emergency call buttons plus drain, water heater and city pages.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free plumbing website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function PlumbingOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="pwd-page" id="top">
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

      <PlumbingOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free plumber website for plumbing companies</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Plumbing Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic plumbing marketing plan and we build your plumber website with no development fee, made to turn burst pipe, clogged drain and no-hot-water searches into booked plumbing calls, day or night.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my free plumber website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See plumber website features</span>
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
                  <strong>Emergency call buttons</strong>
                  <small>Built for round-the-clock calls</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>After-hours ready</strong>
                  <small>Site + plumbing marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Terms in writing</strong>
                  <small>No surprises later</small>
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
                <div className="address-bar">yourplumbingcompany.com</div>
                <div className="browser-live">
                  <span /> PLUMBING CONCEPT
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
                  <span>Emergency</span>
                  <span>Drains</span>
                  <span>Water Heaters</span>
                </div>
                <div className="mini-button">Book service</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">LOCAL PLUMBING EXPERTS</div>
                  <h2>Fast, clean plumbing you can rely on.</h2>
                  <p>Emergency repairs, drains, water heaters, and leak detection from a trusted local team.</p>
                  <div className="canvas-actions">
                    <span>Book service</span>
                    <span>View plumbing services</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Licensed &amp; insured{" "}
                    <Icon name="check" /> Financing available
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-plumbing/emergency-plumbing.webp"
                    alt="Plumber repairing a residential water line under a sink"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">PLUMBING DONE RIGHT</div>
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
                <span className="phone-kicker">PLUMBING SERVICES</span>
                <h3>Fast help when water can’t wait.</h3>
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
                <strong>Made for plumbing calls</strong>
                <small>Calls, bookings and tracking</small>
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
            <span className="section-kicker">Three steps, no build invoice</span>
            <h2>Your plumber website, built while you stay on the tools.</h2>
            <p>We pair your plumbing website with the marketing that puts your number in front of property owners when a pipe bursts or a drain backs up.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Map your plumbing territory</h3>
              <p>We review your services, cities, emergency volume, current lead sources and the plumbing jobs you want more of.</p>
              <small>Plumbing strategy call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Pick a plumbing marketing plan</h3>
              <p>Your plan can combine plumbing Google Ads, local SEO, Google Business Profile work, emergency campaigns, call tracking and page improvements.</p>
              <small>Steady plumbing calls</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We launch your plumber site</h3>
              <p>We build the agreed plumbing website in 2–3 weeks with the upfront development fee waived under your plan. Built to the same standard as our <Link href="/services/plumbing-website-design" className="offer-inlink">
                  plumbing website design service
                </Link>.</p>
              <small>No plumber site invoice</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>See if my plumbing company qualifies</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Plumbing call tracking</span>
            <h2>Which ad booked that water heater job?</h2>
            <p>Emergency calls, booking forms and chats land in one dashboard with the source attached, so you can tell whether a job came from ads, Google Maps or organic search.</p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Emergency and routine calls recorded</li>
              <li>
                <Icon name="check" /> Lead source saved on every plumbing job</li>
              <li>
                <Icon name="check" /> Status from dispatch to paid invoice</li>
            </ul>
            <a className="section-button" href="#contact">
              <span>Show me plumbing tracking</span>
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
                <small>Emergency Plumbing</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Drain Cleaning</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>Water Heaters</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Sewer Lines</small>
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
              <span className="section-kicker">Matched to the plumbing emergency</span>
              <h2>Pages that match the plumbing problem in front of them.</h2>
            </div>
            <p>Pick a plumbing service to see how we shape the message, proof and booking steps for an owner with water on the floor or a drain that will not clear.</p>
          </div>

          <PlumbingServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">And the rest of the plumbing menu</span>
              <h3>Repiping, gas lines, backflow and more.</h3>
              <p>Six tabs are only the start. If property owners near you search for a plumbing service, we can build the page that gets the call.</p>
            </div>
            <div className="niche-banner-tags">
              {EXTRA_SERVICES.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span className="niche-banner-more">+ any plumbing service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my plumber website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Inside your plumber website</span>
            <h2>A plumbing company website built for the 2 a.m. call.</h2>
            <p>Your site works with your ads, Google profile, emergency campaigns, call tracking and service follow-up as one connected system.</p>
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
                <small>PLUMBING SETUP 01</small>
                <h3>Plumbing service and city pages</h3>
                <p>Emergency, drain, water heater, sewer line, leak detection and city pages show Google and property owners what you fix and where you work. The same structure behind our <Link href="/services/industry/seo-services-for-plumber" className="offer-inlink">
                    SEO services for plumbers
                  </Link>.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
            <article>
              <span className="system-card-icon system-card-icon--yellow">
                <Icon name="target" />
              </span>
              <div>
                <small>PLUMBING SETUP 02</small>
                <h3>Calls traced to campaigns</h3>
                <p>Service forms, click-to-call, call tracking, conversion events and CRM routing connect each plumbing campaign to real booked jobs and estimates.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my free plumber website</span>
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
              <span className="section-kicker">Plumbing growth plans</span>
              <h2>Pick a plumbing plan. Your plumber website is part of it.</h2>
            </div>
            <p>Any qualifying plan at $297/month or above on a 6-month term includes the full plumbing lead-generation website build at no development fee.</p>
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
              <p>Build a stronger local plumbing presence and the website foundation required to support discovery.</p>
              <ul>
                <li>
                  <Icon name="check" /> Plumbing GBP management
                </li>
                <li>
                  <Icon name="check" /> Local SEO and citation cleanup
                </li>
                <li>
                  <Icon name="check" /> Plumbing review generation
                </li>
                <li>
                  <Icon name="check" /> Monthly lead reporting
                </li>
                <li>
                  <Icon name="check" /> Plumbing website included
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
              <p>Combine local plumbing visibility with paid search, service-page improvements, and estimate tracking.</p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Local Foundation
                </li>
                <li>
                  <Icon name="check" /> Plumbing Google Ads management
                </li>
                <li>
                  <Icon name="check" /> Service-page optimization
                </li>
                <li>
                  <Icon name="check" /> Call tracking and lead scoring
                </li>
                <li>
                  <Icon name="check" /> Plumbing website included
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
              <p>Expand plumbing visibility across profitable services and locations with a broader organic and paid program.</p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Growth
                </li>
                <li>
                  <Icon name="check" /> Plumbing LSA management
                </li>
                <li>
                  <Icon name="check" /> Expanded city-page program
                </li>
                <li>
                  <Icon name="check" /> Plumbing content and authority
                </li>
                <li>
                  <Icon name="check" /> Plumbing website included
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
            <span className="section-kicker section-kicker--dark">Where plumbing calls come from</span>
            <h2>Your plumber website is the shop front. Marketing sends the calls.</h2>
            <p>We build your plan around your plumbing territory. It can mix paid search, local SEO, Google Business Profile growth, emergency campaigns, call tracking and ongoing page improvements.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Plan my plumbing marketing</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Emergency plumbing ads</h3>
              <p>Reach owners searching for emergency plumbing, drain cleaning, water heaters, sewer and leak repair with service-led ads and tracked bookings. See our <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local plumbing SEO + Google profile</h3>
              <p>Rank in local results and Google Maps across the cities you serve, with reviews that show owners you turn up. Backed by our <Link href="/services/industry/seo-services-for-plumber" className="offer-inlink">
                  SEO services for plumbers
                </Link> and <Link
                  href="/local-seo-google-business-optimization"
                  className="offer-inlink"
                >
                  Google Business Profile optimization
                </Link>.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Burst pipe and backup campaigns</h3>
              <p>Location-based campaigns for burst pipes, sewer backups and failed water heaters go live fast, with every service call tracked.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> plumber website build fee</span>
              <span>
                <b>1</b> team for site and ads</span>
              <span>
                <b>100%</b> of terms on paper</span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">No fine print surprises</span>
            <h2>Free plumbing website terms, with nothing hidden.</h2>
            <p>The plumbing website build fee is waived for new clients who start a qualifying recurring marketing plan. Your proposal spells out each term below before you sign.</p>
            <a className="section-button" href="#contact">
              <span>Check my plumbing company</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Waived fee</strong>
                <small>The plumbing website development fee, valued at $2,000. Your monthly plan stays at its full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>How to qualify</strong>
                <small>Start any Zonic plumbing marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. Ad spend is billed separately by the platform. Also available with our <Link href="/services/plumbing-marketing-agency" className="offer-inlink">
                    plumbing marketing agency service
                  </Link>.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Your ownership</strong>
                <small>Your domain is registered in your plumbing company’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>If you leave early</strong>
                <small>You keep your domain and any content you supplied. The website does not transfer, because the build fee was waived against the full six-month engagement.</small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Why plumbers bundle site and marketing</span>
              <h2>Your plumbing site, ads and calls, run by one team.</h2>
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
                <strong>One plumbing lead system</strong>
                <small>Site · listings · call tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your plumbing website, ads, Google profile, emergency campaigns and tracking all target the same property owners and service area.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One plumbing plan</strong>
                  <small>Planned around your routes</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>Without a build invoice, more of your budget goes to the campaigns that keep your trucks moving from the first month.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Cash for campaigns</strong>
                  <small>Build cost removed</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Emergency calls, booking forms, ads and Maps actions are measured together, so changes focus on paying plumbing jobs.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Plumbing results on record</strong>
                  <small>Tracked from launch day</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my plumbing lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Plumber questions</span>
            <h2>Questions plumbers ask before they sign.</h2>
            <p>Answers on the free plumber website, emergency and city pages, qualifying plans and the six-month term.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my plumbing market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <PlumbingFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">Plumber website launch</span>
            <h2>Start booking more plumbing calls from a new website.</h2>
            <p>Fill in the short form. We review your plumbing services, territory, current website and lead goals, then recommend a qualifying plumbing marketing plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Plumber website built for emergency calls</span>
              <span>
                <Icon name="check" /> Plan matched to your service area</span>
              <span>
                <Icon name="check" /> Scope and terms set out first</span>
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

          <PlumbingLeadForm />
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
            <p>Plumber websites paired with the marketing that keeps emergency and service calls coming in.</p>
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
            <a href="#work">Plumbing services</a>
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
            <span>Free Plumber Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying plumbing marketing plan at $297/month or above on a six-month term.</p>
            <a href="#pwd-offer-form">
              Get my plumbing website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/roofing-website-design-agency-us/offer">Roofing websites</Link>
            <Link href="/hvac-website-design-agency-us/offer">HVAC websites</Link>
          </div>
        </nav>

        <nav className="offer-siblings" aria-label="Zonic services">
          <small>ZONIC SERVICES</small>
          <div>
            <Link href="/services/plumbing-website-design">Plumbing Website Design</Link>
            <Link href="/services">All services</Link>
            <Link href="/services/google-ads">Google Ads</Link>
            <Link href="/local-seo-google-business-optimization">Google Business Profile</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact-us">Contact</Link>
          </div>
        </nav>

        <div className="footer-bottom">
          <small>
            <strong>OFFER TERMS.</strong> Plumbing website development fee, valued at $2,000, is
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
        idPrefix="pwd"
        formType="free-plumbing-website"
        heading="Get your plumbing website with no upfront fee."
        serviceLabel="Plumbing work you want more of"
        servicePlaceholder="Select a plumbing service"
        services={[
          "Emergency Plumbing",
          "Drain Cleaning",
          "Water Heaters",
          "Sewer Lines",
          "Leak Detection",
          "Repiping",
          "Sump Pumps",
          "Commercial Plumbing",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
