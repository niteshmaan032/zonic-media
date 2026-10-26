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
import BathroomRemodelingFaqList, { FAQS } from "./BathroomRemodelingFaqList";
import BathroomRemodelingLeadForm from "./BathroomRemodelingLeadForm";
import BathroomRemodelingOfferHeader from "./BathroomRemodelingOfferHeader";
import BathroomRemodelingServiceTabs from "./BathroomRemodelingServiceTabs";
import "./offer.css";

const PAGE_PATH = "/bathroom-remodeling-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Bathroom Remodeling Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Bathroom Remodeling Website Offer",
    description:
      "A conversion-focused bathroom remodeling website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Bathroom Remodeling Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Bathroom Remodeling Website Offer",
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
  "Shower Remodels leads",
  "Tub Conversions leads",
  "Full Bathroom Remodels leads",
  "Accessible Bathrooms leads",
  "Vanities & Tile leads",
  "Design Consultation leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Before/after gallery" },
  { icon: "smartphone", label: "Mobile-first layout" },
  { icon: "mail", label: "Consult request forms" },
  { icon: "phone", label: "Tap-to-call buttons" },
  { icon: "search", label: "Local SEO setup" },
  { icon: "chart", label: "Call tracking" },
  { icon: "layers", label: "Remodel service pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Lead source tracking" },
  { icon: "layers", label: "Bath service pages" },
  { icon: "pin", label: "Design process page" },
  { icon: "gauge", label: "Fast mobile pages" },
  { icon: "code", label: "Consult booking" },
  { icon: "target", label: "Click-to-call" },
  { icon: "users", label: "Review highlights" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Bathroom Remodeling Website Design for Remodelers" },
  description:
    "Free bathroom remodeling website for companies offering bathroom remodeling services. Project galleries, consult booking and $0 upfront on a qualifying plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free bathroom remodeling website",
    "bathroom remodeling website design",
    "remodeling contractor website",
    "free website for remodelers",
    "bathroom remodeler web design",
    "remodeling marketing plan",
    "home remodeling website design",
    "bathroom remodeling leads",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Bathroom Remodeling Website Design for Remodelers | Zonic Media",
    description:
      "Free bathroom remodeling website for companies offering bathroom remodeling services. Project galleries, consult booking and $0 upfront on a qualifying plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free bathroom remodeling website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function BathroomRemodelingOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-bathroom-remodeling" id="top">
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

      <BathroomRemodelingOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website for bathroom remodeling companies</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Bathroom Remodeling Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">For companies that provide bathroom remodeling services. Start a qualifying Zonic Media marketing plan and we build your remodel website, with galleries and consult forms, at no upfront development fee.</p>

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
                  <strong>$0 build fee</strong>
                  <small>Development fee waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Remodel consult pipeline</strong>
                  <small>Calls and consult requests</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Gallery-led growth</strong>
                  <small>Website + bathroom marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Terms in writing</strong>
                  <small>Scope agreed before we build</small>
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
                <strong>$0 to build your remodel site</strong>
                <small>On a qualifying growth plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">bathroomremodelingpros.com</div>
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
                <div className="mini-button">Book a consult</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">BATHROOM REMODELING SITE</div>
                  <h2>Show the remodel. Book the consult.</h2>
                  <p>A bathroom remodeling website that shows finished rooms and turns local searches into consult requests.</p>
                  <div className="canvas-actions">
                    <span>Book a consult</span>
                    <span>See remodels</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-bathroom-remodeling/hero.webp"
                    alt="Bathroom Remodeling professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">BEFORE & AFTER</div>
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
                <span className="phone-kicker">BATHROOM REMODELS</span>
                <h3>Finished baths sell the next one.</h3>
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
                <strong>Built for remodel consults</strong>
                <small>Forms, calls and tracking set up</small>
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
            <span className="section-kicker">From first call to live remodel site</span>
            <h2>Your bathroom remodeling website, without the build invoice.</h2>
            <p>Homeowners judge remodelers by photos, process and trust. We build a site that shows all three, then pair it with marketing aimed at local remodel searches.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Walk us through your remodel jobs</h3>
              <p>We look at the bathroom remodeling services you sell most, your towns, your current site and where your best consults come from today.</p>
              <small>Fit call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Match a plan to your remodel market</h3>
              <p>Your plan can mix Google Ads, Local SEO, Google Business Profile management, tracking and conversion work, sized to your area.</p>
              <small>Monthly growth plan</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We design and launch the remodel site</h3>
              <p>
                We build the agreed bathroom remodeling website with the upfront development fee waived under your marketing plan. It follows the same build standard as{" "}
                <Link href="/services/bathroom-remodeling-website-design" className="offer-inlink">
                  our bathroom remodeling website design service
                </Link>
                .
              </p>
              <small>No build invoice</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>See if my remodel company fits</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Consult request tracking</span>
            <h2>See which ads booked which bathroom remodels.</h2>
            <p>
              Calls, consult forms and chats land in one dashboard with the source attached, so you know which channel sent the shower remodel and which sent the full gut job.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every call, consult form and chat logged
              </li>
              <li>
                <Icon name="check" /> Lead source saved on each remodel enquiry
              </li>
              <li>
                <Icon name="check" /> Tracked from consult to signed job
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>Preview the consult tracker</span>
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
                Carla M.
                <small>Shower Remodels</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Devin T.
                <small>Tub Conversions</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Rosa K.
                <small>Full Bathroom Remodels</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Gary W.
                <small>Accessible Bathrooms</small>
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
              <span className="section-kicker">Pages for each bathroom remodeling service</span>
              <h2>Separate pages for showers, tub swaps and full remodels, each built to rank.</h2>
            </div>
            <p>Tap a service to see the pitch on the left and the live page mockup on the right. Each page answers what homeowners ask before they book a remodel consult.</p>
          </div>

          <BathroomRemodelingServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                More than six services
              </span>
              <h3>Steam showers or heated floors? We cover those too.</h3>
              <p>A sample of six. If homeowners search for a bathroom remodeling service you offer, we can build its page.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ any bathroom remodeling service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Start my bathroom remodeling site</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Inside your remodeling website</span>
            <h2>A remodel website that keeps working long after launch day.</h2>
            <p>Your bathroom remodeling website is wired into your marketing plan, with the galleries, page structure and tracking that keep consult requests coming in.</p>
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
                <small>REMODEL SITE 01</small>
                <h3>Pages that match remodel searches</h3>
                <p>
                  Service pages, town pages, on-page SEO and schema where it fits help Google connect your remodels to local searches. The same structure behind our{" "}
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
                <small>REMODEL SITE 02</small>
                <h3>Consults you can trace</h3>
                <p>Consult forms, click-to-call, GA4, Tag Manager, conversion tracking and CRM routing tie each bathroom enquiry to the channel that sent it.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Get my remodel website started</span>
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
              <span className="section-kicker">Plans that include the site</span>
              <h2>Three plans. Each one includes your bathroom remodeling website.</h2>
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
              What the marketing plan does
            </span>
            <h2>Great bathroom photos need traffic. The plan brings remodel shoppers to them.</h2>
            <p>We shape the plan around your remodel market. It can combine paid search, local visibility, Google Business Profile growth, tracking and steady conversion work.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Review my remodel market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Ads for remodel searches</h3>
              <p>
                Show up when homeowners search for a shower remodel or tub conversion, with ads that point to the matching page. See our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Maps and local rankings</h3>
              <p>
                Earn visibility in the map pack for each town you serve, with a profile that shows your finished bathrooms. Backed by{" "}
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
              <h3>More consults per visit</h3>
              <p>Call and form tracking, page tests and monthly reports show where visitors drop off, so more of them book a consult.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> upfront development fee
              </span>
              <span>
                <b>1</b> dashboard for every consult
              </span>
              <span>
                <b>100%</b> of the scope set in writing
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              The fine print, in plain words
            </span>
            <h2>How the free bathroom remodeling website works.</h2>
            <p>Zonic waives the upfront design and development fee for your bathroom remodeling website when an eligible company starts a qualifying recurring marketing plan. Every term is in writing first.</p>
            <a className="section-button" href="#contact">
              <span>Check if my remodel company qualifies</span>
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
                <small>The development fee for your bathroom remodeling website, valued at $2,000. Your monthly plan is billed at the full rate, with no discount.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Plans that qualify</strong>
                <small>
                  Any Zonic marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. Ad spend is billed separately by the platform. Also available with{" "}
                  <Link href="/services/bathroom-remodeling-website-design" className="offer-inlink">
                    our bathroom remodeling website design service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Who owns the site</strong>
                <small>Your domain is registered in your company’s name from day one. We host and maintain the site during the term, and full ownership of the website and hosting passes to you when month six is complete.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Leaving before month six</strong>
                <small>
                  You keep your domain and any content you supplied. The remodel website does not transfer, because the build fee was waived against the full six-month engagement.
                </small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Site and marketing, one team</span>
              <h2>One team for your remodel site and ads.</h2>
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
                <strong>One remodel system</strong>
                <small>Site · maps · tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your site, ads and map listing speak to the same homeowner, from the first search to the consult, instead of three vendors pulling different ways.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One message</strong>
                  <small>Shaped around your market</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>The build fee is waived, so your budget goes to reaching people planning a bathroom remodel instead of paying a separate design invoice.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Lower cost to start</strong>
                  <small>No development invoice</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, forms, ads and map actions are measured together, so each month we can push the channels that bring signed bathroom remodels.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Tracked from day one</strong>
                  <small>Reporting live at launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my remodel lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Remodeler questions</span>
            <h2>Bathroom remodeler questions, answered.</h2>
            <p>Straight answers on eligibility, what the remodel site includes and how the qualifying marketing plan works for you.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my remodel market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <BathroomRemodelingFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Free remodel website offer
            </span>
            <h2>Claim a bathroom remodeling website that shows your work, with no upfront development fee.</h2>
            <p>Fill in the short form. We review your remodel company, your current site, the towns you serve and your goals, then recommend the qualifying plan that fits.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Bathroom remodeling website built for consults
              </span>
              <span>
                <Icon name="check" /> Marketing plan sized to your market
              </span>
              <span>
                <Icon name="check" /> Scope and terms agreed before you commit
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

          <BathroomRemodelingLeadForm />
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
            <p>Websites for companies that provide bathroom remodeling services, connected to the marketing that brings them consults.</p>
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
            <a href="#work">Bathroom Remodeling services</a>
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
            <span>Free Bathroom Remodeling Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-bathroom-remodeling-offer-form">
              Get my bathroom remodeling website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/chiropractic-website-design-agency-us/offer">Chiropractic websites</Link>
            <Link href="/cleaning-company-website-design-agency-us/offer">Cleaning Company websites</Link>
            <Link href="/electrician-website-design-agency-us/offer">Electrician websites</Link>
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
            <strong>OFFER TERMS.</strong> Bathroom Remodeling website development fee, valued at $2,000, is
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
        idPrefix="ofr-bathroom-remodeling"
        formType="free-bathroom-remodeling-website"
        heading="Get your bathroom remodeling website with no upfront fee."
        serviceLabel="Bathroom Remodeling work you want more of"
        servicePlaceholder="Select a bathroom remodeling service"
        services={[
          "Shower Remodels",
          "Tub Conversions",
          "Full Bathroom Remodels",
          "Accessible Bathrooms",
          "Vanities & Tile",
          "Design Consultation",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
