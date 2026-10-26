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
import LawFirmFaqList, { FAQS } from "./LawFirmFaqList";
import LawFirmLeadForm from "./LawFirmLeadForm";
import LawFirmOfferHeader from "./LawFirmOfferHeader";
import LawFirmServiceTabs from "./LawFirmServiceTabs";
import "./offer.css";

const PAGE_PATH = "/law-firm-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Law Firm Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Law Firm Website Offer",
    description:
      "A conversion-focused law firm website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Law Firm Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Law Firm Website Offer",
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
  "Personal Injury leads",
  "Family Law leads",
  "Criminal Defense leads",
  "Immigration leads",
  "Estate Planning leads",
  "Business Law leads",
  "Employment Law leads",
  "Real Estate Law leads",
  "Civil Litigation leads",
  "Probate leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Credible firm design" },
  { icon: "smartphone", label: "Mobile consult flow" },
  { icon: "mail", label: "Consultation forms" },
  { icon: "phone", label: "Tap-to-call intake" },
  { icon: "search", label: "Practice-area SEO" },
  { icon: "chart", label: "Intake source tracking" },
  { icon: "layers", label: "Attorney bio pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Intake source tracking" },
  { icon: "layers", label: "Attorney bio pages" },
  { icon: "pin", label: "Credible firm design" },
  { icon: "gauge", label: "Mobile consult flow" },
  { icon: "code", label: "Consultation forms" },
  { icon: "target", label: "Tap-to-call intake" },
  { icon: "users", label: "Practice-area SEO" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Law Firm Website | Attorney Website Design | Zonic" },
  description:
    "Free law firm website with practice-area pages, attorney bios and consultation intake. Development fee waived when you start a qualifying Zonic marketing plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free law firm website",
    "law firm website design",
    "attorney website design",
    "lawyer website design",
    "free website for law firms",
    "law firm web design",
    "practice area pages",
    "law firm marketing",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Law Firm Website for Attorneys | Zonic Media",
    description:
      "Free law firm website with practice-area pages, attorney bios and consultation intake. Development fee waived when you start a qualifying Zonic marketing plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free law firm website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function LawFirmOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-law-firm" id="top">
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

      <LawFirmOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website offer for law firms and attorneys</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Law Firm Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic legal marketing plan and we build your law firm website with practice-area pages, attorney bios and a clear consultation path. The upfront development fee is waived.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my firm’s website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See the law firm site build</span>
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
                  <strong>No firm build fee</strong>
                  <small>Development fee waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Consultation-first pages</strong>
                  <small>Built for intake calls</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Practice-area growth</strong>
                  <small>Website + legal marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Your approval first</strong>
                  <small>Copy reviewed by your firm</small>
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
                <small>With a qualifying legal plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">yourlawfirm.com</div>
                <div className="browser-live">
                  <span /> LAW FIRM CONCEPT
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
                  <span>Practice Areas</span>
                  <span>Attorneys</span>
                  <span>Contact</span>
                </div>
                <div className="mini-button">Request a consultation</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">YOUR LOCAL LAW FIRM</div>
                  <h2>Talk to an attorney about your next step.</h2>
                  <p>A law firm website that explains your practice areas plainly and makes booking a consultation simple.</p>
                  <div className="canvas-actions">
                    <span>Request consultation</span>
                    <span>Practice areas</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-law-firm/consultation.webp"
                    alt="Law Firm professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">PRACTICE AREAS FIRST</div>
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
                <span className="phone-kicker">BOOK A CONSULTATION</span>
                <h3>Your first conversation, one tap away.</h3>
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
                <strong>Built for consultation requests</strong>
                <small>Intake forms, calls and tracking</small>
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
            <span className="section-kicker">Your law firm website in three steps</span>
            <h2>How your firm’s new website comes together.</h2>
            <p>Zonic pairs a credible law firm website with ongoing legal marketing, so people searching for help in your practice areas can find and contact your firm.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Map your practice areas</h3>
              <p>We review your practice areas, target counties, the matters you want more of, your current website and where consultations come from today.</p>
              <small>Firm strategy call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Choose a legal marketing plan</h3>
              <p>Your plan can combine Google Ads, Local SEO, Google Business Profile care, legal content and intake tracking.</p>
              <small>Monthly legal marketing</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build the firm’s site</h3>
              <p>
                Zonic builds the agreed law firm website, with your team reviewing every page before launch and the build fee waived. Same standard as{" "}
                <Link href="/services/web-design" className="offer-inlink">
                  our full website design service
                </Link>
                .
              </p>
              <small>Firm build fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my law firm</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Consultation tracking</span>
            <h2>See where every consultation request starts.</h2>
            <p>
              Calls, consultation forms and chats arrive in one dashboard with the source attached, so you can see which practice areas and campaigns bring enquiries, without guessing.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every call and consultation form logged
              </li>
              <li>
                <Icon name="check" /> Source recorded for each enquiry
              </li>
              <li>
                <Icon name="check" /> Status tracked through your intake steps
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>See The Intake Dashboard</span>
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
                <small>Personal Injury</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Family Law</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>Criminal Defense</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Immigration</small>
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
              <span className="section-kicker">Practice-area pages</span>
              <h2>Personal injury to estate planning: one page per practice area.</h2>
            </div>
            <p>People search by legal problem, not by firm name. Pick a practice area to see how each page explains the matter in plain words and leads to a consultation.</p>
          </div>

          <LawFirmServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                Beyond these six areas
              </span>
              <h3>Employment, probate, real estate law and more.</h3>
              <p>These tabs are a sample. Any practice area your firm handles can get its own page and intake path.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ every practice area you handle</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my practice-area pages</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Inside your law firm website</span>
            <h2>A law firm website built to earn consultations.</h2>
            <p>Your law firm website runs inside your legal marketing, with practice-area pages, attorney bios, intake tracking and clear consultation paths working together.</p>
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
                <small>FIRM SITE 01</small>
                <h3>Practice areas Google can read</h3>
                <p>
                  Practice-area pages, attorney bios, county pages, on-page SEO and schema help search engines and people see what your firm handles. The same structure behind our{" "}
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
                <small>FIRM SITE 02</small>
                <h3>Intake you can measure</h3>
                <p>Consultation forms, click-to-call, call tracking, conversion events and CRM routing link legal campaigns to real enquiries.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my firm’s website</span>
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
              <span className="section-kicker">Plans for law firms</span>
              <h2>Law firm marketing plans that include the website.</h2>
            </div>
            <p>Any qualifying plan at $297/month or above on a 6-month term includes the full law-firm lead-generation website build at no development fee.</p>
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
              <p>Build a stronger local legal presence and the website foundation required to support discovery and trust.</p>
              <ul>
                <li>
                  <Icon name="check" /> Law-firm GBP management
                </li>
                <li>
                  <Icon name="check" /> Local SEO and directory consistency
                </li>
                <li>
                  <Icon name="check" /> Ethical review strategy
                </li>
                <li>
                  <Icon name="check" /> Monthly lead reporting
                </li>
                <li>
                  <Icon name="check" /> Law-firm website included
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
              <p>Combine local legal visibility with paid search, practice-page improvements, and consultation tracking.</p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Local Foundation
                </li>
                <li>
                  <Icon name="check" /> Legal Google Ads management
                </li>
                <li>
                  <Icon name="check" /> Practice-page optimization
                </li>
                <li>
                  <Icon name="check" /> Call tracking and intake scoring
                </li>
                <li>
                  <Icon name="check" /> Law-firm website included
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
              <p>Expand visibility across priority practice areas and markets with a broader organic and paid program.</p>
              <ul>
                <li>
                  <Icon name="check" /> Everything in Growth
                </li>
                <li>
                  <Icon name="check" /> Legal content strategy
                </li>
                <li>
                  <Icon name="check" /> Expanded market-page program
                </li>
                <li>
                  <Icon name="check" /> Attorney and practice authority
                </li>
                <li>
                  <Icon name="check" /> Law-firm website included
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
              The legal marketing plan
            </span>
            <h2>The website earns trust. Marketing brings the right enquiries.</h2>
            <p>Your plan is built around your practice areas and counties. It can combine paid search, local visibility, Business Profile growth, legal content, intake tracking and steady conversion work.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Check my firm’s market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Google Ads for law firms</h3>
              <p>
                Reach people searching for help in your practice areas, with careful ad copy and tracked consultation requests. See our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local SEO + GBP for firms</h3>
              <p>
                Build visibility in the counties you serve, with a Business Profile that shows who you are and where you practice. Backed by{" "}
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
              <h3>Intake conversion work</h3>
              <p>Clearer consultation forms, call paths and response tracking help more site visitors become qualified enquiries.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> upfront development fee
              </span>
              <span>
                <b>1</b> intake-ready firm website
              </span>
              <span>
                <b>100%</b> copy approved by your firm
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Law firm offer terms
            </span>
            <h2>Free law firm website terms, set out plainly.</h2>
            <p>Zonic waives the upfront law firm website design and development fee when your firm starts a qualifying monthly marketing plan. Every term is in writing before you agree.</p>
            <a className="section-button" href="#contact">
              <span>See if my firm qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Waived for your firm</strong>
                <small>The law firm website development fee, valued at $2,000. Your monthly plan is billed at full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Plans that qualify a firm</strong>
                <small>
                  Any Zonic marketing plan at $297/month or above (Local Foundation, Growth, or Full Market) on a six-month minimum term. Advertising spend is billed separately by the platform. Also available with{" "}
                  <Link href="/services/web-design" className="offer-inlink">
                    our full website design service
                  </Link>
                  .
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Who owns the firm’s site</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>If the firm cancels early</strong>
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
              <span className="section-kicker">Firm website + legal marketing</span>
              <h2>Why firms run the website and marketing as one.</h2>
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
                <strong>One intake system</strong>
                <small>Site · visibility · intake</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your law firm website, ads, Business Profile, legal content and intake tracking speak to the same prospective clients in the same markets.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One firm strategy</strong>
                  <small>Built around your practice</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>The upfront build fee is removed, so your legal marketing starts on a ready website without a separate development bill.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>A lighter start for the firm</strong>
                  <small>No separate build bill</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, consultation forms, campaigns and local search actions are measured together, so changes focus on qualified enquiries.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Enquiries you can trace</strong>
                  <small>Intake tracked from launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my firm’s intake system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Law firm website FAQs</span>
            <h2>Questions firms raise before they sign.</h2>
            <p>Answers for managing partners and solo attorneys on eligibility, website scope and the monthly marketing plan.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my firm’s market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <LawFirmFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Free Law Firm Website Offer
            </span>
            <h2>Request your law firm website with the development fee waived.</h2>
            <p>Fill in the short form. Zonic reviews your practice areas, markets, current website and intake goals before recommending a qualifying plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Consultation-ready law firm website
              </span>
              <span>
                <Icon name="check" /> Plan matched to your practice areas
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

          <LawFirmLeadForm />
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
            <p>Law firm websites built around practice-area pages, clear intake and the marketing that brings qualified enquiries.</p>
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
            <a href="#work">Law Firm services</a>
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
            <span>Law Firm Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-law-firm-offer-form">
              Get my law firm website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/moving-company-website-design-agency-us/offer">Moving Company websites</Link>
            <Link href="/painting-contractor-website-design-agency-us/offer">Painting Contractor websites</Link>
            <Link href="/pool-service-website-design-agency-us/offer">Pool Service websites</Link>
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
            <strong>OFFER TERMS.</strong> Law Firm website development fee, valued at $2,000, is
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
        idPrefix="ofr-law-firm"
        formType="free-law-firm-website"
        heading="Get your law firm website with no upfront fee."
        serviceLabel="Law Firm work you want more of"
        servicePlaceholder="Select a law firm service"
        services={[
          "Personal Injury",
          "Family Law",
          "Criminal Defense",
          "Immigration",
          "Estate Planning",
          "Business Law",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
