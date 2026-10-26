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
import PaintingContractorFaqList, { FAQS } from "./PaintingContractorFaqList";
import PaintingContractorLeadForm from "./PaintingContractorLeadForm";
import PaintingContractorOfferHeader from "./PaintingContractorOfferHeader";
import PaintingContractorServiceTabs from "./PaintingContractorServiceTabs";
import "./offer.css";

const PAGE_PATH = "/painting-contractor-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Painting Contractor Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Painting Contractor Website Offer",
    description:
      "A conversion-focused painting contractor website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Painting Contractor Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Painting Contractor Website Offer",
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
  "Interior Painting leads",
  "Exterior Painting leads",
  "Cabinet Painting leads",
  "Commercial Painting leads",
  "Deck & Fence Staining leads",
  "Color Consultation leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Paint job galleries" },
  { icon: "smartphone", label: "Mobile pages" },
  { icon: "mail", label: "Estimate request form" },
  { icon: "phone", label: "Click-to-call" },
  { icon: "search", label: "Painter SEO setup" },
  { icon: "chart", label: "Estimate tracking" },
  { icon: "layers", label: "Interior & exterior pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Call tracking" },
  { icon: "layers", label: "Cabinet painting page" },
  { icon: "pin", label: "Color consult page" },
  { icon: "gauge", label: "Quick loading" },
  { icon: "code", label: "Bid request forms" },
  { icon: "target", label: "Tap-to-call" },
  { icon: "users", label: "Town pages" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Painting Contractor Website Design for Painters" },
  description:
    "Get a free painting contractor website with estimate forms, project galleries and color consultation pages. No upfront build fee on a qualifying Zonic plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free painting contractor website",
    "painting contractor website design",
    "painting company website",
    "free website for painters",
    "painter web design",
    "painting marketing plan",
    "house painter website",
    "painting company websites",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Painting Contractor Website Design for Painters | Zonic Media",
    description:
      "Get a free painting contractor website with estimate forms, project galleries and color consultation pages. No upfront build fee on a qualifying Zonic plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free painting contractor website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function PaintingContractorOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-painting-contractor" id="top">
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

      <PaintingContractorOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website for painting contractors</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Painting Contractor Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic Media marketing plan and we build your painting contractor website, with project galleries and estimate forms, at no upfront development fee.</p>

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
                  <strong>No upfront website fee</strong>
                  <small>Build fee waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Estimate request system</strong>
                  <small>Built for calls and quotes</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Paint-job proof</strong>
                  <small>Website + painting marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Plain terms</strong>
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
                <strong>$0 upfront painter website</strong>
                <small>When you start a qualifying plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">paintingcontractorpros.com</div>
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
                <div className="mini-button">Get an estimate</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">PAINTING CONTRACTOR WEBSITE</div>
                  <h2>Fresh paint. Booked estimates.</h2>
                  <p>A painting contractor website that shows clean lines and finished rooms, then turns visits into estimate requests.</p>
                  <div className="canvas-actions">
                    <span>Get an estimate</span>
                    <span>See our work</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-painting-contractor/hero.webp"
                    alt="Painting Contractor professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">FRESH COAT</div>
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
                <span className="phone-kicker">PAINTING CONTRACTOR</span>
                <h3>Show the finish. Win the estimate.</h3>
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
                <strong>Built for paint estimates</strong>
                <small>Calls, forms and tracking ready</small>
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
            <span className="section-kicker">How your painter website comes together</span>
            <h2>A painting contractor website with the build fee waived.</h2>
            <p>Homeowners pick painters by photos, reviews and how fast they get an estimate. We build a painting contractor website for all three and add marketing that reaches them.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Share the paint work you want</h3>
              <p>We review your interior, exterior and commercial mix, service towns, current website, crew size and where your estimates come from today.</p>
              <small>Planning call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Plan around your paint season</h3>
              <p>Your plan can combine Google Ads, Local SEO, Google Business Profile management, tracking and conversion work timed to your busy months.</p>
              <small>Recurring marketing</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>Our team builds the painter site</h3>
              <p>
                We build the agreed painting contractor website with the upfront development fee waived under your marketing plan. Built to the same standard as{" "}
                <Link href="/services/painting-contractor-website-design" className="offer-inlink">
                  our painting contractor website design service
                </Link>
                .
              </p>
              <small>Development fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my painting company</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Estimate request tracking</span>
            <h2>Track every paint estimate back to its source.</h2>
            <p>
              Calls, estimate forms and chats land in one dashboard with the source attached, so you know which channel sent the exterior repaint and which sent the cabinet job.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every call, estimate form and chat saved
              </li>
              <li>
                <Icon name="check" /> Source recorded on each painting lead
              </li>
              <li>
                <Icon name="check" /> From estimate to job won
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>See the estimate tracker</span>
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
                Ben A.
                <small>Interior Painting</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Grace O.
                <small>Exterior Painting</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Luis M.
                <small>Cabinet Painting</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Kate J.
                <small>Commercial Painting</small>
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
              <span className="section-kicker">Painting contractor service pages</span>
              <h2>Interior, exterior or cabinets: the right page wins the estimate.</h2>
            </div>
            <p>Select a service to see the copy on the left and the painting contractor website mockup on the right. Each page answers what owners ask before a quote.</p>
          </div>

          <PaintingContractorServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                All the paint work you do
              </span>
              <h3>Drywall repair or epoxy floors? Add a page for it.</h3>
              <p>Six services shown. If customers search for painting work you offer, we can build the page that wins the estimate.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ any painting service you offer</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Claim my painting contractor website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">What the painter website includes</span>
            <h2>A painting contractor website that keeps booking estimates.</h2>
            <p>Your painting contractor website is tied into your marketing plan, with galleries, local search structure and tracking that support steady estimate requests.</p>
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
                <small>PAINTER SITE 01</small>
                <h3>Built for painter searches</h3>
                <p>
                  Service pages, town pages, on-page SEO and schema where it fits help Google match your painting work to local searches. The same structure behind our{" "}
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
                <small>PAINTER SITE 02</small>
                <h3>Estimate sources on record</h3>
                <p>Estimate forms, click-to-call, GA4, Tag Manager, conversion tracking and CRM routing connect each painting enquiry to the channel behind it.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Get my painting contractor website</span>
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
              <span className="section-kicker">Painter growth plans</span>
              <h2>Pick the plan that fits your paint season. The site is included.</h2>
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
              The plan that drives estimates
            </span>
            <h2>Your website shows the work. The plan puts it in front of local homeowners.</h2>
            <p>We shape the plan around your painting market and season. It can combine paid search, local visibility, Google Business Profile growth, tracking and ongoing conversion work.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Review my painting market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Ads for paint jobs</h3>
              <p>
                Reach people searching for house painters, exterior painting or cabinet painting nearby, with ads that land on the right page. See our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Map pack for painters</h3>
              <p>
                Show up in local results across your towns, with a profile full of finished rooms and exteriors. Backed by{" "}
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
              <h3>Turn visits into quotes</h3>
              <p>Call and form tracking, page tweaks and monthly reports show what turns visitors into estimate requests, then we do more of it.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> website development fee
              </span>
              <span>
                <b>1</b> tracker for every estimate
              </span>
              <span>
                <b>100%</b> of scope agreed on paper
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Offer terms for painters
            </span>
            <h2>The deal behind your free painter website.</h2>
            <p>Zonic waives the upfront design and development fee for your painting contractor website when an eligible business starts a qualifying recurring marketing plan. Nothing stays unclear before you agree.</p>
            <a className="section-button" href="#contact">
              <span>See if my painting company qualifies</span>
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
                <small>The painting contractor website development fee, valued at $2,000. Your monthly plan is billed at full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>What you need</strong>
                <small>
                  Any Zonic marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. Ad spend is billed separately by the platform. Also available with{" "}
                  <Link href="/services/painting-contractor-website-design" className="offer-inlink">
                    our painting contractor website design service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>What stays yours</strong>
                <small>Your domain is registered in your company’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you once month six is complete.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>If you stop early</strong>
                <small>
                  You keep your domain and any content you supplied, such as your job photos. The website does not transfer, because the build fee was waived against the full six-month engagement.
                </small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">How the bundle helps painters</span>
              <h2>The case for one painter site and one plan.</h2>
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
                <strong>One painting system</strong>
                <small>Site · map · estimates</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your website, ads and map listing speak to the same homeowner with the same message, instead of running as separate projects with separate goals.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One direction</strong>
                  <small>Set for your market</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>The website fee is waived, so your budget can go to reaching homeowners ready for a repaint, with no separate development bill.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Low cost to begin</strong>
                  <small>No build fee</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, estimate forms, campaigns and map actions are tracked together, so changes each month focus on the paint jobs you want more of.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Results in view</strong>
                  <small>Tracking from launch day</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my painting lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Asked by painters</span>
            <h2>Painters ask these before claiming.</h2>
            <p>Plain answers on eligibility, what the painting contractor website covers and how the qualifying marketing plan works.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my painting market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <PaintingContractorFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Claim the painter offer
            </span>
            <h2>No upfront development fee. Just a painting contractor website that wins estimates.</h2>
            <p>Complete the short form. We look at your painting company, current website, service area and goals, then recommend a qualifying plan that fits your season.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Painting contractor website with estimate forms
              </span>
              <span>
                <Icon name="check" /> Marketing plan fitted to your goals
              </span>
              <span>
                <Icon name="check" /> Clear scope and terms up front
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

          <PaintingContractorLeadForm />
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
            <p>Painting contractor websites connected to the marketing services that bring painters more estimate requests.</p>
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
            <a href="#work">Painting Contractor services</a>
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
            <span>Free Painting Contractor Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-painting-contractor-offer-form">
              Get my painting contractor website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/pool-service-website-design-agency-us/offer">Pool Service websites</Link>
            <Link href="/real-estate-website-design-agency-us/offer">Real Estate websites</Link>
            <Link href="/solar-website-design-agency-us/offer">Solar websites</Link>
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
            <strong>OFFER TERMS.</strong> Painting Contractor website development fee, valued at $2,000, is
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
        idPrefix="ofr-painting-contractor"
        formType="free-painting-contractor-website"
        heading="Get your painting contractor website with no upfront fee."
        serviceLabel="Painting Contractor work you want more of"
        servicePlaceholder="Select a painting contractor service"
        services={[
          "Interior Painting",
          "Exterior Painting",
          "Cabinet Painting",
          "Commercial Painting",
          "Deck & Fence Staining",
          "Color Consultation",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
