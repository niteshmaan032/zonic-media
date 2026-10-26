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
import TowingFaqList, { FAQS } from "./TowingFaqList";
import TowingLeadForm from "./TowingLeadForm";
import TowingOfferHeader from "./TowingOfferHeader";
import TowingServiceTabs from "./TowingServiceTabs";
import "./offer.css";

const PAGE_PATH = "/towing-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Towing Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Towing Website Offer",
    description:
      "A conversion-focused towing website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Towing Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Towing Website Offer",
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
  "Emergency Towing leads",
  "Roadside Assistance leads",
  "Accident Recovery leads",
  "Flatbed Towing leads",
  "Heavy-Duty Towing leads",
  "Fleet Accounts leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Dispatch-first layout" },
  { icon: "smartphone", label: "Roadside-ready mobile" },
  { icon: "mail", label: "Tow request forms" },
  { icon: "phone", label: "Tap-to-call dispatch" },
  { icon: "search", label: "Service-area SEO" },
  { icon: "chart", label: "Call source tracking" },
  { icon: "layers", label: "Towing service pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Call source tracking" },
  { icon: "layers", label: "Towing service pages" },
  { icon: "pin", label: "Dispatch-first layout" },
  { icon: "gauge", label: "Roadside-ready mobile" },
  { icon: "code", label: "Tow request forms" },
  { icon: "target", label: "Tap-to-call dispatch" },
  { icon: "users", label: "Service-area SEO" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Towing Website | Towing Company Web Design | Zonic" },
  description:
    "Get a free towing website built for 24/7 calls: tap-to-call dispatch, roadside and service-area pages. Build fee waived on a qualifying Zonic plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free towing website",
    "towing company website design",
    "tow truck website design",
    "towing website",
    "free website for towing company",
    "roadside assistance website",
    "24/7 towing website",
    "towing company marketing",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Towing Website for Tow Truck Companies | Zonic Media",
    description:
      "Get a free towing website built for 24/7 calls: tap-to-call dispatch, roadside and service-area pages. Build fee waived on a qualifying Zonic plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free towing website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function TowingOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-towing" id="top">
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

      <TowingOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website offer for towing and roadside companies</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Towing Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic Media marketing plan and we build your towing website with tap-to-call dispatch, service-area pages and roadside request forms. The upfront development fee is waived.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my towing website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See the tow site build</span>
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
                  <strong>No tow site invoice</strong>
                  <small>Tow site build fee waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Dispatch-first pages</strong>
                  <small>Built for calls at any hour</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Calls from your own site</strong>
                  <small>Website + towing marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Tow terms in writing</strong>
                  <small>Scope agreed before work</small>
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
                <small>On a qualifying towing plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">towingpros.com</div>
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
                  <span>Towing</span>
                  <span>Roadside</span>
                  <span>Coverage</span>
                </div>
                <div className="mini-button">Call dispatch</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">24/7 TOWING</div>
                  <h2>Fast towing, any hour, any road.</h2>
                  <p>A towing website that keeps your dispatch number one tap away on every screen.</p>
                  <div className="canvas-actions">
                    <span>Call for a tow</span>
                    <span>Roadside help</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-towing/hero.webp"
                    alt="Towing professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">ON CALL DAY AND NIGHT</div>
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
                <span className="phone-kicker">TOW DISPATCH</span>
                <h3>One tap from stranded to sorted.</h3>
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
                <strong>Built for towing calls</strong>
                <small>Tap-to-call, forms and tracking</small>
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
            <span className="section-kicker">Free towing website, step by step</span>
            <h2>How your free towing website gets built.</h2>
            <p>Zonic pairs your towing company website with ongoing marketing, so stranded drivers in the areas you cover find your number first.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Map your tow coverage</h3>
              <p>We look at your towing and roadside mix, the roads and towns you cover, your current website and where calls come from today.</p>
              <small>Coverage call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Choose your towing growth plan</h3>
              <p>Your plan can mix Google Ads, Local SEO, Google Business Profile care and call tracking for towing searches.</p>
              <small>Monthly towing marketing</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We launch your tow site</h3>
              <p>
                Zonic builds the agreed towing website, with dispatch buttons on every page and the upfront development fee waived. Built to the same standard as{" "}
                <Link href="/services/towing-company-website-design" className="offer-inlink">
                  our towing website design service
                </Link>
                .
              </p>
              <small>Site fee waived for towers</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my towing coverage</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Towing call tracking</span>
            <h2>See which tows your website sent.</h2>
            <p>
              Calls, tow requests and chats land in one dashboard with the source attached. You see which towing jobs came from ads, Google Maps or search, and which hours ring most.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every dispatch call and request logged
              </li>
              <li>
                <Icon name="check" /> Ad, Maps or search source on each lead
              </li>
              <li>
                <Icon name="check" /> Status from new call to completed tow
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>See How Calls Are Tracked</span>
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
                <small>Emergency Towing</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Roadside Assistance</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>Accident Recovery</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Flatbed Towing</small>
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
              <span className="section-kicker">Towing service pages</span>
              <h2>A page for every tow you run, from jump starts to heavy wrecks.</h2>
            </div>
            <p>Pick a service to see how each towing page pairs search-matched copy with a live phone mockup. Drivers get the number, the area and the next step fast.</p>
          </div>

          <TowingServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                More than six tow types
              </span>
              <h3>Lockouts, winch-outs, impound and more.</h3>
              <p>These tabs are a sample. Any towing service drivers search for can get its own page.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ every tow and roadside call</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my tow service pages</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Inside your towing website</span>
            <h2>A towing website that keeps working after launch day.</h2>
            <p>Your towing website plugs into your marketing, with service-area pages, call tracking and quick request forms built in, so it keeps pulling calls month after month.</p>
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
                <small>TOW SITE SYSTEM 01</small>
                <h3>Found in the towns you cover</h3>
                <p>
                  Towing service pages, city pages, on-page SEO and schema help Google match you to nearby tow searches. Built on the method behind our{" "}
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
                <small>TOW SITE SYSTEM 02</small>
                <h3>Every dispatch call counted</h3>
                <p>Tap-to-call buttons, request forms, GA4 and call tracking tie each tow back to the ad or search behind it.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my towing website</span>
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
              <span className="section-kicker">Plans that include the tow site</span>
              <h2>Three towing plans. Each one includes the website.</h2>
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
              Towing marketing in the plan
            </span>
            <h2>Your towing website answers the call. Marketing makes the phone ring.</h2>
            <p>We shape the plan around your towing market. It can combine paid search, Google Maps visibility, Business Profile growth, call tracking and ongoing tests.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Check my towing market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Google Ads for tow calls</h3>
              <p>
                Reach drivers searching for a tow right now with call-first ads and tracked results. Read about our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Google Maps + GBP</h3>
              <p>
                Build map visibility for towing searches across the towns you serve, with a profile drivers can trust. Supported by our{" "}
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
              <h3>More answered calls</h3>
              <p>Call tracking, click-to-call tests and simple reports show which pages turn stranded drivers into booked tows.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> upfront development fee
              </span>
              <span>
                <b>1</b> dispatch-ready website
              </span>
              <span>
                <b>100%</b> terms in writing
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Towing offer terms
            </span>
            <h2>The fine print on your free tow site.</h2>
            <p>Zonic waives the upfront towing website design and development fee when your company starts a qualifying monthly marketing plan. Every term is in writing before you sign.</p>
            <a className="section-button" href="#contact">
              <span>See if my tow company qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Towing build fee: waived</strong>
                <small>The towing website development fee, valued at $2,000. Your monthly plan is billed at full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>How towing companies qualify</strong>
                <small>
                  Any Zonic marketing plan at $297/month or above (Local Foundation, Growth, or Full Market) on a six-month minimum term. Advertising spend is billed separately by the platform. Also available with{" "}
                  <Link href="/services/towing-company-website-design" className="offer-inlink">
                    our towing website design service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Who owns the tow site</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>If you stop before month six</strong>
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
              <span className="section-kicker">Tow site + steady marketing</span>
              <h2>One system for towing calls, not four vendors.</h2>
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
                <strong>One towing system</strong>
                <small>Site · Maps · call tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your towing website, ads, map listing and call tracking target the same drivers in the same towns, not separate vendors pulling different ways.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One towing plan</strong>
                  <small>Built around your coverage</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>There is no build invoice to pay first, so your budget goes into reaching drivers instead of paying off a website.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>No upfront build bill</strong>
                  <small>Build cost off the table</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, forms, ads and map actions are measured together, so each change aims at more paying tows, not just more clicks.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Tows you can trace</strong>
                  <small>Calls tracked from launch day</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my towing call system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Towing website FAQs</span>
            <h2>Before you claim: towing website questions.</h2>
            <p>What towing owners ask most about eligibility, the website scope and the monthly marketing plan behind the free build.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my towing area</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <TowingFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Free Towing Website Offer
            </span>
            <h2>Get a towing website that rings your dispatch line, with no build fee.</h2>
            <p>Fill in the short form. Zonic reviews your towing company, coverage area, current website and goals, then recommends a qualifying plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Tap-to-call towing website
              </span>
              <span>
                <Icon name="check" /> Marketing matched to your coverage
              </span>
              <span>
                <Icon name="check" /> Scope and terms agreed first
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

          <TowingLeadForm />
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
            <p>Towing websites built around tap-to-call dispatch and the marketing that keeps tow trucks moving.</p>
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
            <a href="#work">Towing services</a>
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
            <span>Tow Company Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-towing-offer-form">
              Get my towing website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/auto-repair-website-design-agency-us/offer">Auto Repair websites</Link>
            <Link href="/bathroom-remodeling-website-design-agency-us/offer">Bathroom Remodeling websites</Link>
            <Link href="/chiropractic-website-design-agency-us/offer">Chiropractic websites</Link>
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
            <strong>OFFER TERMS.</strong> Towing website development fee, valued at $2,000, is
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
        idPrefix="ofr-towing"
        formType="free-towing-website"
        heading="Get your towing website with no upfront fee."
        serviceLabel="Towing work you want more of"
        servicePlaceholder="Select a towing service"
        services={[
          "Emergency Towing",
          "Roadside Assistance",
          "Accident Recovery",
          "Flatbed Towing",
          "Heavy-Duty Towing",
          "Fleet Accounts",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
