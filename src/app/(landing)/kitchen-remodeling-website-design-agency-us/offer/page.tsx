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
import KitchenRemodelingFaqList, { FAQS } from "./KitchenRemodelingFaqList";
import KitchenRemodelingLeadForm from "./KitchenRemodelingLeadForm";
import KitchenRemodelingOfferHeader from "./KitchenRemodelingOfferHeader";
import KitchenRemodelingServiceTabs from "./KitchenRemodelingServiceTabs";
import "./offer.css";

const PAGE_PATH = "/kitchen-remodeling-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Kitchen Remodeling Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Kitchen Remodeling Website Offer",
    description:
      "A conversion-focused kitchen remodeling website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Kitchen Remodeling Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Kitchen Remodeling Website Offer",
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
  "Full Kitchen Remodels leads",
  "Custom Cabinetry leads",
  "Countertops leads",
  "Kitchen Islands leads",
  "Lighting & Layout leads",
  "Design-Build leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Kitchen style gallery" },
  { icon: "smartphone", label: "Mobile-ready pages" },
  { icon: "mail", label: "Consult booking form" },
  { icon: "phone", label: "Click-to-call" },
  { icon: "search", label: "Local search setup" },
  { icon: "chart", label: "Lead source tracking" },
  { icon: "layers", label: "Cabinet & counter pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Conversion tracking" },
  { icon: "layers", label: "Design-build pages" },
  { icon: "pin", label: "Financing page" },
  { icon: "gauge", label: "Fast page loads" },
  { icon: "code", label: "Estimate forms" },
  { icon: "target", label: "Tap-to-call header" },
  { icon: "users", label: "Project case studies" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Kitchen Remodeling Website & Remodeler Web Design" },
  description:
    "Free kitchen remodeling website with style galleries, design consultation booking and a financing page. No upfront build fee on a qualifying Zonic plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free kitchen remodeling website",
    "kitchen remodeling website design",
    "remodeling contractor website",
    "free website for remodelers",
    "kitchen remodeler web design",
    "remodeling marketing plan",
    "home remodeling website design",
    "kitchen remodeling leads",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Kitchen Remodeling Website & Remodeler Web Design | Zonic Media",
    description:
      "Free kitchen remodeling website with style galleries, design consultation booking and a financing page. No upfront build fee on a qualifying Zonic plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free kitchen remodeling website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function KitchenRemodelingOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-kitchen-remodeling" id="top">
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

      <KitchenRemodelingOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website for kitchen remodeling contractors</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Kitchen Remodeling Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic Media marketing plan and we design a kitchen remodeling website that shows your finished kitchens and books design consultations, with no upfront development fee.</p>

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
                  <strong>No build invoice</strong>
                  <small>Website fee waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Consult booking system</strong>
                  <small>For calls and design visits</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Portfolio-led growth</strong>
                  <small>Website + kitchen marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Scope in writing</strong>
                  <small>Agreed before work starts</small>
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
                <strong>$0 upfront for the kitchen site</strong>
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
                <div className="address-bar">kitchenremodelingpros.com</div>
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
                <div className="mini-button">Plan my kitchen</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">KITCHEN REMODELING WEBSITE</div>
                  <h2>Dream kitchens start with a consult.</h2>
                  <p>A kitchen remodeling website that turns style browsing into booked design consultations in your area.</p>
                  <div className="canvas-actions">
                    <span>Plan my kitchen</span>
                    <span>Browse kitchens</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-kitchen-remodeling/hero.webp"
                    alt="Kitchen Remodeling professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">FEATURED KITCHEN</div>
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
                <span className="phone-kicker">KITCHEN REMODELS</span>
                <h3>From inspiration to booked consult.</h3>
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
                <strong>Made for kitchen design visits</strong>
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
            <span className="section-kicker">How the kitchen site gets built</span>
            <h2>Kitchen remodelers get the website. We waive the build fee.</h2>
            <p>Kitchen buyers research for weeks before they call. We build a site that earns trust during that research and pair it with marketing that keeps you in view.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Share your kitchen project mix</h3>
              <p>We review the kitchen work you want more of, your project sizes, service towns, current site and the sources sending your best consults.</p>
              <small>Discovery call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Pick a plan sized to your projects</h3>
              <p>Your plan can pair Google Ads, Local SEO, Google Business Profile management, tracking and conversion work for kitchen searches.</p>
              <small>Ongoing marketing</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We design your kitchen website</h3>
              <p>
                We build the agreed kitchen remodeling website with the upfront development fee waived under your marketing plan. It is held to the same standard as{" "}
                <Link href="/services/kitchen-remodeling-website-design" className="offer-inlink">
                  our kitchen remodeling website design service
                </Link>
                .
              </p>
              <small>Build fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my kitchen remodeling company</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Know your best lead source</span>
            <h2>Know which channel booked each kitchen consult.</h2>
            <p>
              Calls, consult requests and chats arrive in one dashboard with their source, so you can see if the cabinet job came from Google Ads, your map listing or organic search.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Each call, form and chat recorded
              </li>
              <li>
                <Icon name="check" /> Source saved for every kitchen enquiry
              </li>
              <li>
                <Icon name="check" /> Tracked from consult to signed contract
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>See the consult dashboard</span>
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
                Nina P.
                <small>Full Kitchen Remodels</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Omar H.
                <small>Custom Cabinetry</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Laura B.
                <small>Countertops</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Steve C.
                <small>Kitchen Islands</small>
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
              <span className="section-kicker">Kitchen remodeling page lineup</span>
              <h2>Cabinets, countertops and islands each get a page built to win that search.</h2>
            </div>
            <p>Pick a service to see the copy on the left and the page mockup on the right. Each one speaks to what homeowners compare before they book a kitchen design visit.</p>
          </div>

          <KitchenRemodelingServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                The full kitchen menu
              </span>
              <h3>Pantries and backsplashes can have pages as well.</h3>
              <p>Six tabs are only a sample. If buyers search for a kitchen service you sell, we can build the page that wins it.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ every kitchen remodeling service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Claim my kitchen remodeling website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">What your kitchen site includes</span>
            <h2>Built to sell kitchen projects, not to sit online unused.</h2>
            <p>Your kitchen remodeling website is part of your marketing plan, with portfolio pages, search structure and tracking that support a long, high-value sales cycle.</p>
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
                <small>KITCHEN SITE 01</small>
                <h3>Structure Google can read</h3>
                <p>
                  Service pages, town pages, on-page SEO and schema where it fits help Google match your kitchens to local searches. The same approach behind our{" "}
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
                <small>KITCHEN SITE 02</small>
                <h3>Every consult measured</h3>
                <p>Consult forms, click-to-call, GA4, Tag Manager, conversion tracking and CRM routing connect each kitchen enquiry to the channel behind it.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Start my kitchen remodeling website</span>
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
              <span className="section-kicker">Kitchen marketing plans</span>
              <h2>Every kitchen plan below includes the website build.</h2>
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
              Marketing behind the kitchen site
            </span>
            <h2>Homeowners plan kitchens for months. The plan keeps you in front of them.</h2>
            <p>We build the plan around your kitchen remodel market. It can combine paid search, local visibility, Google Business Profile growth, tracking and ongoing conversion work.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Review my kitchen remodeling market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Paid search for kitchen buyers</h3>
              <p>
                Reach people searching for kitchen remodelers, cabinets or countertops near them, with ads that land on the right page. See our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local maps presence</h3>
              <p>
                Show up in local results across your towns, with a profile full of finished kitchens and recent reviews. Backed by{" "}
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
              <h3>Better consult rates</h3>
              <p>Tracking, page improvements and clear monthly reports help turn more kitchen browsers into booked design consultations.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> upfront website build fee
              </span>
              <span>
                <b>1</b> place to see every consult
              </span>
              <span>
                <b>100%</b> of terms agreed in writing
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Offer terms, explained
            </span>
            <h2>The free kitchen website terms, line by line.</h2>
            <p>Zonic waives the upfront design and development fee on your kitchen remodeling website when an eligible company starts a qualifying recurring marketing plan. All terms are written down first.</p>
            <a className="section-button" href="#contact">
              <span>See if my kitchen remodeling company qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Fee we waive</strong>
                <small>The kitchen remodeling website development fee, valued at $2,000. Your monthly plan is charged at its full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>How you qualify</strong>
                <small>
                  Any Zonic marketing plan at $297/month or above, whether Local Foundation, Growth or Full Market, on a six-month minimum term. Ad spend is billed separately by the ad platform. Also available with{" "}
                  <Link href="/services/kitchen-remodeling-website-design" className="offer-inlink">
                    our kitchen remodeling website design service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Ownership of the site</strong>
                <small>Your domain is registered in your business’s name from the first day. We host and maintain the site during the term; full ownership of the website and hosting moves to you once month six is complete.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Cancelling early</strong>
                <small>
                  You keep your domain and any content you supplied. The website itself does not transfer, since the build fee was waived against the full six-month engagement.
                </small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Why it works for remodelers</span>
              <h2>Why kitchen remodelers keep it all with one team.</h2>
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
                <strong>Connected kitchen plan</strong>
                <small>Site · search · tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your website, ads and map listing target the same kitchen buyer with the same story, instead of three separate projects pulling in different directions.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>Shared strategy</strong>
                  <small>Fit to your service area</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>With the website fee waived, more of your budget reaches homeowners planning a kitchen, and you skip a separate design and development bill.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Easier first step</strong>
                  <small>No development fee</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, forms, campaigns and map actions are tracked as one, so monthly changes focus on the sources that bring real kitchen projects.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Clear results</strong>
                  <small>Tracking live at launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my kitchen remodeling lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Before you book a call</span>
            <h2>What kitchen remodelers ask about this offer.</h2>
            <p>Answers on who qualifies, what goes into your kitchen remodeling website and how the six-month marketing engagement works.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my kitchen remodeling market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <KitchenRemodelingFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Kitchen website offer
            </span>
            <h2>Your kitchen remodeling website, built and launched with no upfront development fee.</h2>
            <p>Send the short form. We look at your kitchen remodeling company, current website, service area, project size and goals, then suggest the qualifying plan that fits.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Kitchen remodeling website with style galleries
              </span>
              <span>
                <Icon name="check" /> Marketing plan built around your goals
              </span>
              <span>
                <Icon name="check" /> Clear scope and terms before you sign
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

          <KitchenRemodelingLeadForm />
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
            <p>Kitchen remodeling websites tied to the marketing services that bring remodelers more design consultations.</p>
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
            <a href="#work">Kitchen Remodeling services</a>
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
            <span>Free Kitchen Remodeling Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-kitchen-remodeling-offer-form">
              Get my kitchen remodeling website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/landscaping-website-design-agency-us/offer">Landscaping websites</Link>
            <Link href="/law-firm-website-design-agency-us/offer">Law Firm websites</Link>
            <Link href="/moving-company-website-design-agency-us/offer">Moving Company websites</Link>
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
            <strong>OFFER TERMS.</strong> Kitchen Remodeling website development fee, valued at $2,000, is
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
        idPrefix="ofr-kitchen-remodeling"
        formType="free-kitchen-remodeling-website"
        heading="Get your kitchen remodeling website with no upfront fee."
        serviceLabel="Kitchen Remodeling work you want more of"
        servicePlaceholder="Select a kitchen remodeling service"
        services={[
          "Full Kitchen Remodels",
          "Custom Cabinetry",
          "Countertops",
          "Kitchen Islands",
          "Lighting & Layout",
          "Design-Build",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
