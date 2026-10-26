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
import CleaningCompanyFaqList, { FAQS } from "./CleaningCompanyFaqList";
import CleaningCompanyLeadForm from "./CleaningCompanyLeadForm";
import CleaningCompanyOfferHeader from "./CleaningCompanyOfferHeader";
import CleaningCompanyServiceTabs from "./CleaningCompanyServiceTabs";
import "./offer.css";

const PAGE_PATH = "/cleaning-company-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Cleaning Company Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Cleaning Company Website Offer",
    description:
      "A conversion-focused cleaning company website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Cleaning Company Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Cleaning Company Website Offer",
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
  "Office Cleaning leads",
  "Janitorial Services leads",
  "Medical Facilities leads",
  "Retail & Hospitality leads",
  "Deep Cleaning leads",
  "Floor Care leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Clean, polished design" },
  { icon: "smartphone", label: "Mobile bid requests" },
  { icon: "mail", label: "Walkthrough forms" },
  { icon: "phone", label: "Click-to-call quotes" },
  { icon: "search", label: "Cleaning service SEO" },
  { icon: "chart", label: "Contract lead tracking" },
  { icon: "layers", label: "Facility type pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Contract lead tracking" },
  { icon: "layers", label: "Facility type pages" },
  { icon: "pin", label: "Clean, polished design" },
  { icon: "gauge", label: "Mobile bid requests" },
  { icon: "code", label: "Walkthrough forms" },
  { icon: "target", label: "Click-to-call quotes" },
  { icon: "users", label: "Cleaning service SEO" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Cleaning Company Website | Janitorial Web Design" },
  description:
    "Free cleaning company website for commercial and janitorial teams, with walkthrough requests and service pages. Build fee waived on a qualifying Zonic plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free cleaning company website",
    "cleaning company website design",
    "cleaning business website",
    "commercial cleaning website design",
    "janitorial website design",
    "free website for cleaning business",
    "office cleaning website",
    "cleaning company marketing",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Website for Cleaning Companies | Zonic Media",
    description:
      "Free cleaning company website for commercial and janitorial teams, with walkthrough requests and service pages. Build fee waived on a qualifying Zonic plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free cleaning company website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function CleaningCompanyOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-cleaning-company" id="top">
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

      <CleaningCompanyOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website offer for commercial cleaning companies</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Cleaning Company Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic Media marketing plan and we build your cleaning company website with walkthrough requests, facility pages and quick quote forms. The upfront development fee is waived.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my cleaning website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See the cleaning site build</span>
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
                  <strong>Zero cleaning site fee</strong>
                  <small>Build cost waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Walkthrough-ready pages</strong>
                  <small>Built for bids and quotes</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Recurring-contract growth</strong>
                  <small>Website + cleaning marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Terms up front</strong>
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
                <strong>$0 upfront website fee</strong>
                <small>With a qualifying cleaning plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">cleaningcompanypros.com</div>
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
                  <span>Industries</span>
                  <span>Reviews</span>
                </div>
                <div className="mini-button">Book a walkthrough</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">COMMERCIAL CLEANING</div>
                  <h2>Spotless spaces. Reliable crews.</h2>
                  <p>A cleaning company website that turns facility manager searches into walkthrough requests.</p>
                  <div className="canvas-actions">
                    <span>Request a walkthrough</span>
                    <span>Facilities we clean</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-cleaning-company/hero.webp"
                    alt="Cleaning Company professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">RELIABLE CREWS</div>
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
                <span className="phone-kicker">FREE WALKTHROUGH</span>
                <h3>A cleaner workplace starts here.</h3>
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
                <strong>Built for cleaning bids</strong>
                <small>Walkthrough forms and tracking</small>
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
            <span className="section-kicker">Your cleaning website in three steps</span>
            <h2>From walkthrough to website: how it works.</h2>
            <p>Zonic pairs your cleaning company website with ongoing marketing, so office managers and facility buyers in your area find you when they need a new cleaning partner.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Tell us who you clean for</h3>
              <p>We review your facility types, contract mix, service area, current website and the channels most likely to bring in recurring cleaning accounts.</p>
              <small>Market review call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Choose a cleaning growth plan</h3>
              <p>Your plan can combine Google Ads, Local SEO, Google Business Profile care, quote tracking and conversion work.</p>
              <small>Monthly cleaning marketing</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build the cleaning site</h3>
              <p>
                Zonic builds the agreed cleaning company website with walkthrough requests on key pages and the build fee waived. Built to the standard of{" "}
                <Link href="/services/commercial-cleaning-website-design" className="offer-inlink">
                  our cleaning company website design service
                </Link>
                .
              </p>
              <small>Website at no build cost</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my cleaning company</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Bid and quote tracking</span>
            <h2>Track every cleaning bid from first enquiry.</h2>
            <p>
              Calls, walkthrough forms and chats arrive in one dashboard with the source attached, so you can see which contracts came from ads, Google Maps or search, and what to do more of.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every walkthrough and quote request captured
              </li>
              <li>
                <Icon name="check" /> Source logged against each account
              </li>
              <li>
                <Icon name="check" /> Status from walkthrough to signed contract
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>See The Bid Dashboard</span>
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
                <small>Office Cleaning</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Janitorial Services</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>Medical Facilities</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Retail & Hospitality</small>
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
              <span className="section-kicker">Cleaning company service pages</span>
              <h2>Offices, clinics and stores each need their own cleaning page.</h2>
            </div>
            <p>Facility buyers search by building type and need. Pick a tab to see how each page speaks to that buyer, with a live website and phone mockup.</p>
          </div>

          <CleaningCompanyServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                Beyond these six facilities
              </span>
              <h3>Schools, gyms, warehouses and post-construction.</h3>
              <p>The tabs are a sample. Any facility or cleaning service your buyers search for can get its own page.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ every facility you clean</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my cleaning service pages</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">What your cleaning website includes</span>
            <h2>Everything your cleaning website needs to win contracts.</h2>
            <p>Your cleaning company website works inside your marketing, with facility pages, quote tracking and simple forms that help win and keep recurring accounts.</p>
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
                <small>CLEAN SITE 01</small>
                <h3>Visible to local facility buyers</h3>
                <p>
                  Service pages, facility pages, on-page SEO and schema help Google match your company to commercial cleaning searches nearby. Built on the same approach as our{" "}
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
                <small>CLEAN SITE 02</small>
                <h3>Contracts you can measure</h3>
                <p>Walkthrough forms, click-to-call, GA4, Tag Manager and call tracking link every enquiry to the campaign that sent it.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my cleaning website</span>
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
              <span className="section-kicker">Cleaning plans with the website</span>
              <h2>Cleaning growth plans with the website built in.</h2>
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
              The cleaning marketing plan
            </span>
            <h2>Get in front of facility buyers before they ask for bids.</h2>
            <p>Your plan is built around the facilities you want more of. It can combine paid search, local visibility, Business Profile growth, tracking and steady conversion tests.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Check my cleaning market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Google Ads for cleaning bids</h3>
              <p>
                Reach office and facility managers searching for cleaning services, with focused ads and tracked quote requests. Details on our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local SEO + Business Profile</h3>
              <p>
                Grow visibility for commercial cleaning searches across your service area, with a profile that builds trust fast. Paired with our{" "}
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
              <h3>More signed contracts</h3>
              <p>Form and call tracking, quote-page tests and clear reports turn more site visits into walkthroughs and contracts.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> upfront development fee
              </span>
              <span>
                <b>1</b> bid-ready cleaning site
              </span>
              <span>
                <b>100%</b> scope agreed in writing
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Cleaning offer terms
            </span>
            <h2>What cleaning companies agree to, and what they get.</h2>
            <p>Zonic waives the upfront cleaning company website design and development fee when your business starts a qualifying monthly marketing plan. Each term is written down before you agree.</p>
            <a className="section-button" href="#contact">
              <span>See if my cleaning company qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>The cleaning site fee we waive</strong>
                <small>The cleaning company website development fee, valued at $2,000. Your monthly plan is billed at full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Which cleaning plans qualify</strong>
                <small>
                  Any Zonic marketing plan at $297/month or above (Local Foundation, Growth, or Full Market) on a six-month minimum term. Advertising spend is billed separately by the platform. Also available with{" "}
                  <Link href="/services/commercial-cleaning-website-design" className="offer-inlink">
                    our cleaning company website design service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>What your company keeps</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>If the plan ends early</strong>
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
              <span className="section-kicker">Cleaning site + marketing</span>
              <h2>The full package for cleaning companies, explained.</h2>
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
                <strong>One cleaning system</strong>
                <small>Site · Maps · bid tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your cleaning website, ads, map listing and tracking all target the same facility buyers, instead of running as unrelated projects.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One cleaning strategy</strong>
                  <small>Built around your buyers</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>With no build bill up front, your budget goes toward winning walkthroughs and contracts, not paying for a website.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Simpler to get started</strong>
                  <small>Cleaning build fee waived</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, walkthrough forms, ads and map actions are tracked together, so changes aim at more signed contracts.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Contracts you can trace</strong>
                  <small>Tracking on from day one</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my cleaning bid system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Cleaning website FAQs</span>
            <h2>Answers for cleaning company owners.</h2>
            <p>What cleaning company owners ask about eligibility, website scope and the monthly marketing plan behind the offer.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my cleaning market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <CleaningCompanyFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Free Cleaning Website Offer
            </span>
            <h2>Claim a cleaning company website built to win contracts.</h2>
            <p>Fill in the short form. Zonic reviews your cleaning company, facility types, current website and goals before recommending a qualifying plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Walkthrough-ready cleaning website
              </span>
              <span>
                <Icon name="check" /> Plan matched to your facility buyers
              </span>
              <span>
                <Icon name="check" /> Scope and terms clear before you sign
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

          <CleaningCompanyLeadForm />
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
            <p>Cleaning company websites built for walkthrough requests and the marketing that wins recurring contracts.</p>
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
            <a href="#work">Cleaning Company services</a>
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
            <span>Cleaning Company Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-cleaning-company-offer-form">
              Get my cleaning company website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/electrician-website-design-agency-us/offer">Electrician websites</Link>
            <Link href="/flooring-website-design-agency-us/offer">Flooring websites</Link>
            <Link href="/garage-door-website-design-agency-us/offer">Garage Door websites</Link>
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
            <strong>OFFER TERMS.</strong> Cleaning Company website development fee, valued at $2,000, is
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
        idPrefix="ofr-cleaning-company"
        formType="free-cleaning-company-website"
        heading="Get your cleaning company website with no upfront fee."
        serviceLabel="Cleaning Company work you want more of"
        servicePlaceholder="Select a cleaning company service"
        services={[
          "Office Cleaning",
          "Janitorial Services",
          "Medical Facilities",
          "Retail & Hospitality",
          "Deep Cleaning",
          "Floor Care",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
