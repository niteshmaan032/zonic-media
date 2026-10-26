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
import RoofingFaqList, { FAQS } from "./RoofingFaqList";
import RoofingLeadForm from "./RoofingLeadForm";
import RoofingOfferHeader from "./RoofingOfferHeader";
import RoofingServiceTabs from "./RoofingServiceTabs";
import "./offer.css";

const PAGE_PATH = "/roofing-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Roofing Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Roofing Website Offer",
    description:
      "A conversion-focused roofing website with the upfront development fee waived for roofing companies on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Roofing Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Roofing Website Offer",
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
  "Roof Repair leads",
  "Roof Replacement leads",
  "Storm Damage leads",
  "Shingle Roofing leads",
  "Commercial Roofing leads",
  "Emergency Roofing leads",
  "Metal Roofing leads",
  "Flat Roofing leads",
  "Gutters leads",
  "Siding leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Roofer-built layouts" },
  { icon: "smartphone", label: "Mobile estimate flow" },
  { icon: "clipboard", label: "Free inspection forms" },
  { icon: "phone", label: "Leak-call buttons" },
  { icon: "search", label: "Roofing local SEO base" },
  { icon: "chart", label: "Storm lead tracking" },
  { icon: "layers", label: "Roof service pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Storm lead tracking" },
  { icon: "layers", label: "Roof service pages" },
  { icon: "pin", label: "City roofing pages" },
  { icon: "gauge", label: "Fast page loads" },
  { icon: "code", label: "Roofer schema markup" },
  { icon: "target", label: "Estimate buttons" },
  { icon: "users", label: "Crew lead routing" },
] as const;

const EXTRA_SERVICES = [
  "Metal Roofing",
  "Flat Roofing",
  "Tile Roofing",
  "Emergency Tarping",
  "Roof Inspections",
  "Skylights",
  "Chimney Flashing",
  "Attic Ventilation",
  "Insurance Claims",
];

export const metadata: Metadata = {
  title: { absolute: "Free Roofing Website Design for Roofers | Zonic Media" },
  description:
    "Free roofing website design for roofers, with no build fee on a qualifying Zonic plan. Inspection booking, storm damage pages and project galleries.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services/*-website-design page targets so the two do not compete.
  keywords: [
    "free roofing website",
    "roofing website design",
    "free website for roofing companies",
    "roofing company website",
    "roofer website",
    "roofing contractor website",
    "storm damage roofing website",
    "roofing marketing plan",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Roofing Website Design for Roofers | Zonic Media",
    description:
      "Free roofing website design for roofers, with no build fee on a qualifying Zonic plan. Inspection booking, storm damage pages and project galleries.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free roofing website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function FreeRoofingWebsiteOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="rwd-page" id="top">
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

      <RoofingOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free roofing website for roofing contractors</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Roofing Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic roofing marketing plan and we build your roofing company website with no development fee, ready with inspection booking, storm damage pages and project galleries that turn local searches into signed roof jobs.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my free roofing website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See what roofers get</span>
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
                  <strong>Inspection booking</strong>
                  <small>Calls and estimate forms</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Storm season ready</strong>
                  <small>Site + roofing campaigns</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Written scope</strong>
                  <small>Terms agreed up front</small>
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
                <div className="address-bar">yourroofingcompany.com</div>
                <div className="browser-live">
                  <span /> ROOFING CONCEPT
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
                  <span>Roof Repair</span>
                  <span>Replacement</span>
                  <span>Storm Damage</span>
                </div>
                <div className="mini-button">Free inspection</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">LOCAL ROOFING EXPERTS</div>
                  <h2>Protect your home with a roof built to last.</h2>
                  <p>
                    Roof repair, replacement, and storm response from a trusted
                    local crew.
                  </p>
                  <div className="canvas-actions">
                    <span>Book free inspection</span>
                    <span>View roofing services</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Licensed &amp; insured{" "}
                    <Icon name="check" /> Financing available
                  </div>
                </div>
                <div className="visual-stack roofing-visual-stack">
                  <Image
                    src="/images/free-website/free-roof/roof-replacement.webp"
                    alt="Roofing crew installing architectural shingles on a suburban home"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">ROOFING DONE RIGHT</div>
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
                <span className="phone-kicker">ROOFING SERVICES</span>
                <h3>Fast help when your roof needs it.</h3>
                <div className="phone-art phone-art--roofing" />
                <div className="phone-cta">
                  Book inspection <Icon name="arrow-up-right" />
                </div>
              </div>
            </div>

            <div className="floating-note floating-note--bottom">
              <span className="note-icon note-icon--blue">
                <Icon name="target" />
              </span>
              <span>
                <strong>Made for roofing leads</strong>
                <small>Inspections, estimates and tracking</small>
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
            <span className="section-kicker">From first call to finished roofing site</span>
            <h2>Spend on roofing leads, not on a website invoice.</h2>
            <p>We pair your roofing website with the marketing that reaches homeowners while they choose a roofer, so the site earns from launch day.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Walk us through your territory</h3>
              <p>We look at your roof services, cities, storm seasons, current lead sources and the jobs you want more of.</p>
              <small>Roofing strategy call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Pick a roofing marketing plan</h3>
              <p>Your plan can combine roofing Google Ads, local SEO, Google Business Profile work, storm campaigns, call tracking and page improvements.</p>
              <small>Ongoing roofing leads</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build your roofing site</h3>
              <p>Our team builds the agreed roofing website in 2–3 weeks with the development fee waived. Built to the same standard as our <Link href="/services/roofing-website-design" className="offer-inlink">
                  roofing website design service
                </Link>.</p>
              <small>Roof site at no build fee</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>See if my roofing company qualifies</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Roofing lead tracking</span>
            <h2>See which roof jobs came from which channel.</h2>
            <p>Inspection calls, estimate forms and chats land in one dashboard with the source attached, so you know whether a replacement came from ads, Google Maps or a storm campaign.</p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Inspection calls and forms logged</li>
              <li>
                <Icon name="check" /> Ad, Maps or storm source on each lead</li>
              <li>
                <Icon name="check" /> Status from inspection to signed job</li>
            </ul>
            <a className="section-button" href="#contact">
              <span>Show me roofing tracking</span>
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
                <small>Roof Repair</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Roof Replacement</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>Storm Damage / Insurance</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Shingle Roofing</small>
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


        {/* ───────────── Roofing services ───────────── */}
        <section id="work" className="section niche-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Roof problems, mapped to pages</span>
              <h2>A page for every roof problem a homeowner searches.</h2>
            </div>
            <p>Pick a roofing service to see how we shape the message, proof and estimate path for a homeowner facing a leak, a storm or an old roof.</p>
          </div>

          <RoofingServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">Other roof work we cover</span>
              <h3>Metal, tile, flat roofs and more.</h3>
              <p>These six are a sample. If homeowners near you search for a roofing service, we can build the page that earns the call.</p>
            </div>
            <div className="niche-banner-tags">
              {EXTRA_SERVICES.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span className="niche-banner-more">+ any roofing service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my roofing website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">What your roofing website includes</span>
            <h2>A roofing website that keeps working long after launch.</h2>
            <p>Your site runs alongside your ads, Google Business Profile, storm campaigns, call tracking and estimate follow-up as one connected system.</p>
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
                <small>ROOF SITE LAYER 01</small>
                <h3>Roof service and city pages</h3>
                <p>Repair, replacement, material, storm damage and city pages show Google and homeowners exactly what you do and where. The same structure behind our <Link href="/services/industry/local-seo-for-roofing-companies" className="offer-inlink">
                    local SEO for roofing companies
                  </Link>.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
            <article>
              <span className="system-card-icon system-card-icon--yellow">
                <Icon name="target" />
              </span>
              <div>
                <small>ROOF SITE LAYER 02</small>
                <h3>Estimate requests you can trace</h3>
                <p>Inspection forms, click-to-call, call tracking, conversion events and CRM routing tie each roofing campaign to real estimate requests.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my free roofing website</span>
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
              <span className="section-kicker">Roofing plans that include the site</span>
              <h2>Your roofing website is built into every plan below.</h2>
            </div>
            <p>
              Any qualifying plan at $297/month or above on a 6-month term
              includes the full roofing lead-generation website build at no
              development fee.
            </p>
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
              <p>
                Build a stronger local roofing presence and the website
                foundation required to support discovery.
              </p>
              <ul>
                <li>
                  <Icon name="check" /> Roofing GBP management
                </li>
                <li>
                  <Icon name="check" /> Local SEO and citation cleanup
                </li>
                <li>
                  <Icon name="check" /> Roofing review generation
                </li>
                <li>
                  <Icon name="check" /> Monthly lead reporting
                </li>
                <li>
                  <Icon name="check" /> Roofing website included
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
              <p>
                Combine local roofing visibility with paid search, service-page
                improvements, and estimate tracking.
              </p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Local Foundation
                </li>
                <li>
                  <Icon name="check" /> Roofing Google Ads management
                </li>
                <li>
                  <Icon name="check" /> Service-page optimization
                </li>
                <li>
                  <Icon name="check" /> Call tracking and lead scoring
                </li>
                <li>
                  <Icon name="check" /> Roofing website included
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
              <p>
                Expand roofing visibility across profitable services and
                locations with a broader organic and paid program.
              </p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Growth
                </li>
                <li>
                  <Icon name="check" /> Roofing LSA management
                </li>
                <li>
                  <Icon name="check" /> Expanded city-page program
                </li>
                <li>
                  <Icon name="check" /> Roofing content and authority
                </li>
                <li>
                  <Icon name="check" /> Roofing website included
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
            <span className="section-kicker section-kicker--dark">Behind every booked inspection</span>
            <h2>A roofing site gets found when marketing runs behind it.</h2>
            <p>We build your plan around your roofing territory. It can mix paid search, local SEO, Google Business Profile growth, storm response campaigns, call tracking and ongoing page improvements.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Plan my roofing marketing</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Roof repair search ads</h3>
              <p>Reach homeowners searching for roof repair, replacement and inspections with service-led ads and tracked estimate requests. See our <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Maps rankings in your roofing cities</h3>
              <p>Climb local results in the cities you serve and show homeowners the reviews and project photos that build trust. Backed by our <Link href="/services/industry/local-seo-for-roofing-companies" className="offer-inlink">
                  local SEO for roofing companies
                </Link> and <Link
                  href="/local-seo-google-business-optimization"
                  className="offer-inlink"
                >
                  Google Business Profile optimization
                </Link>.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Storm response campaigns</h3>
              <p>After hail, wind or heavy rain, launch location-based campaigns fast and track every inspection call they bring in.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> roofing build fee</span>
              <span>
                <b>1</b> plan for site and marketing</span>
              <span>
                <b>100%</b> of the scope in writing</span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">The roofing offer, spelled out</span>
            <h2>What roofers should know before claiming the free site.</h2>
            <p>We waive the roofing website build fee when a new client starts a qualifying recurring marketing plan. Every detail below is agreed in writing before you sign.</p>
            <a className="section-button" href="#contact">
              <span>Check my roofing company</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>What we waive</strong>
                <small>The roofing website development fee, valued at $2,000. Your monthly plan is billed at its full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Plans that qualify</strong>
                <small>Any Zonic roofing marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. Ad spend is billed separately by the platform. Also available with our <Link href="/services/web-design" className="offer-inlink">
                    full website design service
                  </Link>.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Who owns the site</strong>
                <small>Your domain is registered in your roofing company’s name from day one. We host and maintain the site during the term, and full ownership of the website and hosting transfers to you when month six is complete.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Early cancellation</strong>
                <small>You keep your domain and any content you supplied. The website does not transfer, because the build fee was waived against the full six-month engagement.</small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Why roofers bundle site and marketing</span>
              <h2>Why roofers get more from the site and marketing together.</h2>
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
                <strong>One roofing lead system</strong>
                <small>Site · Maps · storm tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your roofing website, ads, Google profile, storm campaigns and tracking all target the same homeowners and the same service area.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One roofing game plan</strong>
                  <small>Built around your territory</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>No upfront build bill means more budget for the campaigns that fill your inspection calendar from the first month.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>More budget for leads</strong>
                  <small>No separate build bill</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Inspection calls, estimate forms, ads and Maps actions are measured together, so each change focuses on the jobs that pay.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Roofing results you can see</strong>
                  <small>Tracking live at launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my roofing lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Roofer FAQs</span>
            <h2>Roofing contractor questions, answered.</h2>
            <p>What roofers ask most about the free roofing website, storm damage pages, qualifying plans and the six-month term.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my roofing market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <RoofingFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">Roofing website launch</span>
            <h2>Put a new roofing website to work before storm season.</h2>
            <p>Fill in the short form. We review your roofing services, territory, current website and lead goals, then recommend a qualifying roofing marketing plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Roofing website built for inspections</span>
              <span>
                <Icon name="check" /> Plan matched to your storm territory</span>
              <span>
                <Icon name="check" /> Scope and terms in writing first</span>
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

          <RoofingLeadForm />
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
            <p>Roofing company websites paired with the marketing that books inspections and roof jobs.</p>
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
            <a href="#work">Roofing services</a>
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
            <span>Free Roofing Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>
              With a qualifying roofing marketing plan at $297/month or above on
              a six-month term.
            </p>
            <a href="#roofing-offer-form">
              Get my roofing website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/hvac-website-design-agency-us/offer">HVAC websites</Link>
            <Link href="/plumber-website-design-agency-us/offer">Plumbing websites</Link>
          </div>
        </nav>

        <nav className="offer-siblings" aria-label="Zonic services">
          <small>ZONIC SERVICES</small>
          <div>
            <Link href="/services/roofing-website-design">Roofing Website Design</Link>
            <Link href="/services">All services</Link>
            <Link href="/services/google-ads">Google Ads</Link>
            <Link href="/local-seo-google-business-optimization">Google Business Profile</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact-us">Contact</Link>
          </div>
        </nav>

        <div className="footer-bottom">
          <small>
            <strong>OFFER TERMS.</strong> Roofing website development fee,
            valued at $2,000, is waived for new clients who start a qualifying
            Zonic Media marketing plan at $297 per month or above on a six-month
            minimum term. Client owns and registers the domain from the start of
            the engagement. Zonic Media hosts and maintains the website during
            the term; full ownership of the website and hosting transfers to the
            client on completion of month six. Build scope is a homepage plus
            ten pages and up to five city pages, with two rounds of design
            revisions; additional pages, revisions and custom functionality are
            quoted separately. Advertising spend is billed by the ad platform
            and is not included in the monthly management fee. New clients only;
            not combinable with other promotions. Zonic Media reserves the right
            to decline applications.
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
        idPrefix="rwd"
        formType="free-roofing-website"
        heading="Get your roofing website with no upfront fee."
        serviceLabel="Roofing work you want more of"
        servicePlaceholder="Select a roofing service"
        services={[
          "Roof Repair",
          "Roof Replacement",
          "Storm Damage / Insurance",
          "Shingle Roofing",
          "Metal Roofing",
          "Flat / Commercial Roofing",
          "Emergency Roofing",
          "Gutters",
          "Siding",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
