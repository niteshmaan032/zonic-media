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
import HomeInspectorFaqList, { FAQS } from "./HomeInspectorFaqList";
import HomeInspectorLeadForm from "./HomeInspectorLeadForm";
import HomeInspectorOfferHeader from "./HomeInspectorOfferHeader";
import HomeInspectorServiceTabs from "./HomeInspectorServiceTabs";
import "./offer.css";

const PAGE_PATH = "/home-inspector-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Home Inspector Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Home Inspector Website Offer",
    description:
      "A conversion-focused home inspector website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Home Inspector Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Home Inspector Website Offer",
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
  "Buyer Inspections leads",
  "Pre-Listing Inspections leads",
  "New Construction leads",
  "Radon Testing leads",
  "Sewer Scope leads",
  "Commercial Inspections leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Inspector-first layouts" },
  { icon: "smartphone", label: "Mobile scheduling" },
  { icon: "mail", label: "Booking request forms" },
  { icon: "phone", label: "Click-to-call for agents" },
  { icon: "search", label: "Inspection local SEO" },
  { icon: "chart", label: "Booking source tracking" },
  { icon: "layers", label: "Inspection service pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Booking source tracking" },
  { icon: "layers", label: "Inspection service pages" },
  { icon: "pin", label: "County coverage pages" },
  { icon: "gauge", label: "Fast mobile pages" },
  { icon: "code", label: "Inspector schema markup" },
  { icon: "target", label: "Sample report CTAs" },
  { icon: "users", label: "Agent referral routing" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Home Inspector Website Design | Zonic Media" },
  description:
    "Free home inspector website design with online booking, a sample report and agent pages. No build fee when you start a qualifying Zonic marketing plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free home inspector website",
    "home inspector website design",
    "home inspector web design",
    "home inspection website design",
    "best website builder for home inspectors",
    "home inspection company website",
    "free website for home inspectors",
    "home inspector marketing plan",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Home Inspector Website Design | Zonic Media",
    description:
      "Free home inspector website design with online booking, a sample report and agent pages. No build fee when you start a qualifying Zonic marketing plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free home inspector website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function HomeInspectorOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-home-inspector" id="top">
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

      <HomeInspectorOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free home inspector website design</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Home Inspector Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic marketing plan and we build your home inspection website with no development fee, with online booking, sample reports and agent pages that fill your calendar.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my free inspector website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See inspector website features</span>
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
                  <strong>Online booking</strong>
                  <small>Built for calls and schedules</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Referral-ready</strong>
                  <small>Site + inspection marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>No vague promises</strong>
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
                <div className="address-bar">homeinspectorpros.com</div>
                <div className="browser-live">
                  <span /> INSPECTOR CONCEPT
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
                  <span>Inspections</span>
                  <span>Sample Report</span>
                  <span>For Agents</span>
                </div>
                <div className="mini-button">Book inspection</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">CERTIFIED HOME INSPECTORS</div>
                  <h2>Know the home before you buy.</h2>
                  <p>Buyer, pre-listing, radon and sewer scope inspections with clear, photo-rich reports.</p>
                  <div className="canvas-actions">
                    <span>Book inspection</span>
                    <span>View sample report</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Certified &amp; insured <Icon name="check" />{" "}
                    Online booking
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-home-inspector/hero.webp"
                    alt="Home Inspector professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">INSPECTED RIGHT</div>
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
                <span className="phone-kicker">HOME INSPECTIONS</span>
                <h3>Book your inspection online.</h3>
                <div className="phone-art phone-art--industry" />
                <div className="phone-cta">
                  Schedule now <Icon name="arrow-up-right" />
                </div>
              </div>
            </div>

            <div className="floating-note floating-note--bottom">
              <span className="note-icon note-icon--blue">
                <Icon name="target" />
              </span>
              <span>
                <strong>Made for booked inspections</strong>
                <small>Bookings, agents and tracking</small>
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
            <span className="section-kicker">Getting your inspection site live</span>
            <h2>Home inspector website design with no upfront fee.</h2>
            <p>We pair your inspection website with marketing that reaches buyers and agents the moment an offer is accepted and an inspection needs booking.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Learn your inspection market</h3>
              <p>We look at your inspection types, counties, agent relationships, current site, lead sources and the bookings you want more of.</p>
              <small>Inspection strategy call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Pick an inspector marketing plan</h3>
              <p>Your plan can pair Google Ads and local SEO with Google Business Profile management, call tracking and booking improvements.</p>
              <small>Ongoing inspection leads</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build your inspector site</h3>
              <p>We build the agreed home inspection website in 2–3 weeks with the upfront development fee waived under your marketing plan. Built to the same standard as <Link href="/services/home-inspector-marketing" className="offer-inlink">
                  our home inspector website design service
                </Link>.</p>
              <small>Inspector build fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>See if my inspection company qualifies</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Inspection booking tracking</span>
            <h2>See which agents and searches book your inspections.</h2>
            <p>Calls, booking forms and chats land in one dashboard with the source attached, so you know which bookings came from agent referrals, Google Maps or paid search.</p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every booking request logged</li>
              <li>
                <Icon name="check" /> Agent, Maps or ad source recorded</li>
              <li>
                <Icon name="check" /> Status from booked to report delivered</li>
            </ul>
            <a className="section-button" href="#contact">
              <span>Show me booking tracking</span>
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
                <small>Buyer Inspections</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Pre-Listing Inspections</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>New Construction</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Radon Testing</small>
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
              <span className="section-kicker">Inspection services buyers book</span>
              <h2>A clear booking path for every inspection you offer.</h2>
            </div>
            <p>Pick an inspection type to see how we shape the message, proof and booking steps for buyers, sellers and the agents who refer them.</p>
          </div>

          <HomeInspectorServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">Add-on inspection services</span>
              <h3>Every inspection and add-on you offer, covered.</h3>
              <p>These are examples. If buyers or agents near you search for an inspection service, we can build the page that gets it booked.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ any inspection service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my inspector website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Built for inspection businesses</span>
            <h2>Home inspection website design that agents trust.</h2>
            <p>Your inspection website is built into a connected marketing system, with the structure, tracking and booking tools that keep your calendar full.</p>
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
                <small>INSPECTION SITE 01</small>
                <h3>Service and county pages</h3>
                <p>Inspection pages, service-area pages, on-page SEO and schema markup help Google match your company to local inspection searches. The same structure behind our <Link href="/services/local-seo-for-home-services" className="offer-inlink">
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
                <small>INSPECTION SITE 02</small>
                <h3>Bookings tied to their source</h3>
                <p>Booking forms, click-to-call, GA4, Tag Manager, conversion tracking and CRM routing link your marketing to real scheduled inspections.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my free inspector website</span>
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
              <span className="section-kicker">Inspector marketing plans</span>
              <h2>Each inspector plan comes with the website build.</h2>
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
            <span className="section-kicker section-kicker--dark">Marketing for home inspectors</span>
            <h2>Agents refer. Buyers search. Your site has to win both.</h2>
            <p>We build your plan around your inspection market. It can mix paid search, local SEO, Google Business Profile growth, call tracking and ongoing page improvements.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Plan my inspection marketing</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Inspection search ads</h3>
              <p>Show up for home inspection, radon testing and sewer scope searches with targeted ads and tracked bookings. See our <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local SEO for inspectors</h3>
              <p>Rank in Google Maps across the counties you cover, with reviews that buyers and agents check first. Backed by <Link
                  href="/local-seo-google-business-optimization"
                  className="offer-inlink"
                >
                  Google Business Profile optimization
                </Link>.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Booking page improvements</h3>
              <p>We review calls, booking forms and page behavior, then improve the pages that should book more inspections.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> inspector website build fee</span>
              <span>
                <b>1</b> team for site and marketing</span>
              <span>
                <b>100%</b> of terms written down</span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">Inspector offer terms</span>
            <h2>What inspectors get, and what the plan requires.</h2>
            <p>The website build fee is waived for new clients who start a qualifying recurring marketing plan. Your proposal repeats every term below before you sign.</p>
            <a className="section-button" href="#contact">
              <span>Check my inspection company</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Waived at signup</strong>
                <small>The home inspector website development fee, valued at $2,000. Your monthly plan is billed at its full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Plan requirement</strong>
                <small>Any Zonic marketing plan at $297/month or above (Local Foundation, Growth or Full Market) on a six-month minimum term. Ad spend is billed separately by the platform. Also available with <Link href="/services/home-inspector-marketing" className="offer-inlink">
                    our home inspector website design service
                  </Link>.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Domain and site ownership</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Leaving before month six</strong>
                <small>You keep your domain and any content you supplied. The website does not transfer, because the build fee was waived against the full six-month engagement.</small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Why inspectors bundle</span>
              <h2>Agents, buyers and Google see one consistent inspection brand.</h2>
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
                <strong>One inspection lead system</strong>
                <small>Site · Maps · bookings</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your website, ads, Google profile and tracking all speak to the same buyers, sellers and agents in your counties.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One inspection strategy</strong>
                  <small>Built for your counties</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>With no build invoice, more of your budget can go to campaigns that keep your inspection calendar full.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Budget for bookings</strong>
                  <small>No build cost upfront</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, booking forms, ads and Maps actions are tracked together, so changes focus on inspections that get booked.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Bookings you can trace</strong>
                  <small>Live from launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my inspection lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Inspector FAQs</span>
            <h2>Your home inspector web design questions.</h2>
            <p>What inspectors ask most about the free website, website builders, agent pages and the terms.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my inspection market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <HomeInspectorFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">Inspector website launch</span>
            <h2>Give agents and buyers a site that books inspections.</h2>
            <p>Fill in the short form. We review your inspection company, current website, service area and goals before recommending a qualifying plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Inspector website with online booking</span>
              <span>
                <Icon name="check" /> Plan matched to your counties</span>
              <span>
                <Icon name="check" /> Terms spelled out before you start</span>
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

          <HomeInspectorLeadForm />
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
            <p>Home inspector websites paired with the marketing that fills inspection calendars.</p>
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
            <a href="#work">Home Inspector services</a>
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
            <span>Free Inspector Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-home-inspector-offer-form">
              Get my home inspector website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/kitchen-remodeling-website-design-agency-us/offer">Kitchen Remodeling websites</Link>
            <Link href="/landscaping-website-design-agency-us/offer">Landscaping websites</Link>
            <Link href="/law-firm-website-design-agency-us/offer">Law Firm websites</Link>
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
            <strong>OFFER TERMS.</strong> Home Inspector website development fee, valued at $2,000, is
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
        idPrefix="ofr-home-inspector"
        formType="free-home-inspector-website"
        heading="Get your home inspector website with no upfront fee."
        serviceLabel="Home Inspector work you want more of"
        servicePlaceholder="Select a home inspector service"
        services={[
          "Buyer Inspections",
          "Pre-Listing Inspections",
          "New Construction",
          "Radon Testing",
          "Sewer Scope",
          "Commercial Inspections",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
