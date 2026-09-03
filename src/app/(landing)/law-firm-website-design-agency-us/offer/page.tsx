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
      "The website development fee, valued at $2,000, is waived for new clients who start a qualifying Zonic Media marketing plan at $895 per month or above on a six-month minimum term.",
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
  "Personal Injury leads leads",
  "Family Law leads leads",
  "Criminal Defense leads leads",
  "Immigration leads leads",
  "Estate Planning leads leads",
  "Business Law leads leads",
  "Employment Law leads leads",
  "Real Estate Law leads leads",
  "Civil Litigation leads leads",
  "Probate leads leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Law-firm-first design" },
  { icon: "smartphone", label: "Mobile optimization" },
  { icon: "mail", label: "Consultation request forms" },
  { icon: "phone", label: "Click-to-call intake" },
  { icon: "search", label: "Local SEO foundation" },
  { icon: "chart", label: "Consultation tracking" },
  { icon: "layers", label: "Practice-area pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Consultation tracking" },
  { icon: "layers", label: "Practice-area pages" },
  { icon: "pin", label: "Law-firm-first design" },
  { icon: "gauge", label: "Mobile optimization" },
  { icon: "code", label: "Consultation request forms" },
  { icon: "target", label: "Click-to-call intake" },
  { icon: "users", label: "Local SEO foundation" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Law Firm Website for Attorneys | Zonic Media" },
  description:
    "Free law firm website, no upfront development fee, when you start a qualifying Zonic marketing plan. Practice-area pages, attorney bios and intake built in.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free law firm website",
    "law firm website design",
    "attorney website design",
    "free website for law firms",
    "law firm web design",
    "law firm marketing plan",
    "lawyer website design",
    "law firm websites",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Website for Law Firms | Zonic Media",
    description:
      "Free law firm website, no upfront development fee, when you start a qualifying Zonic marketing plan. Practice-area pages, attorney bios and intake built in.",
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
              <span>Free website offer for law firms</span>
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

            <p className="hero-lede">Start a qualifying Zonic legal marketing plan and we’ll build a professional website designed to attract qualified enquiries, strengthen trust, and turn high-intent searches into consultation requests—with no upfront development fee.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my law firm website</span>
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
                  <strong>No upfront fee</strong>
                  <small>Development fee waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>Law Firm lead system</strong>
                  <small>Built for calls and enquiries</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Case-ready growth</strong>
                  <small>Website + legal marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Clear terms</strong>
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
                  <span>Results</span>
                </div>
                <div className="mini-button">Request consultation</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">TRUSTED LEGAL COUNSEL</div>
                  <h2>Clear guidance when the stakes are high.</h2>
                  <p>Focused legal representation, direct communication, and practical next steps from an experienced local firm.</p>
                  <div className="canvas-actions">
                    <span>Request consultation</span>
                    <span>View practice areas</span>
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
                  <div className="visual-chip">COUNSEL YOU CAN TRUST</div>
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
                <span className="phone-kicker">LEGAL SERVICES</span>
                <h3>Clear counsel starts with one conversation.</h3>
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
                <strong>Built for law firm leads</strong>
                <small>Calls, forms, and tracking included</small>
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
            <span className="section-kicker">One law-firm offer. One connected intake system.</span>
            <h2>Remove the website cost holding your firm’s growth back.</h2>
            <p>Zonic combines the credible website your firm needs with the recurring marketing required to reach prospective clients before they contact another attorney.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Map your legal market</h3>
              <p>We review your practice areas, target markets, ideal matters, current lead sources, and the consultations your firm wants more of.</p>
              <small>Law-firm growth call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Choose a qualifying plan</h3>
              <p>Your plan may combine legal Google Ads, Local SEO, Google Business Profile growth, content strategy, intake tracking, and conversion optimization.</p>
              <small>Recurring growth service</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build the law-firm site</h3>
              <p>
                Zonic creates the agreed law-firm lead-generation website with the upfront development fee waived under your marketing engagement. Same build standard as{" "}
                <Link href="/services/web-design" className="offer-inlink">
                  our full website design service
                </Link>
                .
              </p>
              <small>Website fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my law firm company</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">Lead tracking system</span>
            <h2>Every law firm lead in one place.</h2>
            <p>
              Calls, forms and chats arrive in one dashboard with the source
              attached, so you can see which law firm jobs your marketing produced
              instead of guessing where the phone calls came from.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every call, form and chat captured
              </li>
              <li>
                <Icon name="check" /> The source recorded against each lead
              </li>
              <li>
                <Icon name="check" /> Status tracked from new to won
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>See The Tracking Setup</span>
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
              <span className="section-kicker">Built around legal search intent</span>
              <h2>One law-firm website. A clear path for every priority practice area.</h2>
            </div>
            <p>Choose a practice area to see how Zonic structures the message, trust signals, calls to action, and consultation flow around what a prospective client needs in that moment.</p>
          </div>

          <LawFirmServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                Beyond these six
              </span>
              <h3>We build for every law firm service.</h3>
              <p>The tabs are a sample — if customers search for it, we can build the page that wins the enquiry.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ every law firm service</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Claim my law firm website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Your law-firm lead-generation website includes</span>
            <h2>More than a law-firm website handed over and forgotten.</h2>
            <p>Your site becomes part of the same system as your ads, local visibility, legal content, intake tracking, and consultation follow-up.</p>
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
                <small>LEGAL SYSTEM 01</small>
                <h3>Practice and market authority</h3>
                <p>
                  Practice-area, attorney, case-type, and market pathways help search engines and prospective clients understand exactly where your firm can help. The same structure behind our{" "}
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
                <small>LEGAL SYSTEM 02</small>
                <h3>Trackable intake flow</h3>
                <p>Consultation forms, click-to-call, call tracking, conversion events, and CRM routing connect legal campaigns to real enquiries and intake opportunities.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my law firm website</span>
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
              <span className="section-kicker">Qualifying legal marketing plans</span>
              <h2>Pick the law-firm growth plan. The website comes with it.</h2>
            </div>
            <p>Any qualifying plan at $895/month or above on a 6-month term includes the full law-firm lead-generation website build at no development fee.</p>
          </div>

          <div className="pricing-grid">
            <article className="pricing-card">
              <div className="pricing-card-head">
                <span>01</span>
                <small>LOCAL VISIBILITY</small>
              </div>
              <h3>Local Foundation</h3>
              <div className="plan-price">
                $895 <span>/ month</span>
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
                $1,495 <span>/ month</span>
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
                $2,495 <span>/ month</span>
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
              The qualifying legal marketing plan
            </span>
            <h2>The website is the trust hub. Marketing keeps qualified enquiries moving.</h2>
            <p>Your plan is selected around your practice areas and markets and may combine paid search, local visibility, Google Business Profile growth, legal content, intake tracking, and ongoing conversion improvements.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Check my law firm company</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Legal Google Ads</h3>
              <p>
                Capture high-intent practice-area searches with focused campaigns, compliant messaging, and trackable consultation actions. See our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local legal SEO + GBP</h3>
              <p>
                Build visibility across practice areas and target markets while strengthening the credibility prospective clients see in local results. Backed by{" "}
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
              <h3>Intake conversion strategy</h3>
              <p>Improve consultation forms, click-to-call paths, response tracking, and follow-up signals while measuring each qualified enquiry.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> upfront development fee
              </span>
              <span>
                <b>1</b> connected growth system
              </span>
              <span>
                <b>100%</b> clear written scope
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Clear qualification. Clear terms.
            </span>
            <h2>What &ldquo;free law-firm website&rdquo; means in this offer.</h2>
            <p>Zonic waives the upfront law-firm website design and development fee when an eligible firm starts a qualifying recurring marketing engagement. Nothing is left vague before you agree.</p>
            <a className="section-button" href="#contact">
              <span>See if my law firm company qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>What&rsquo;s waived</strong>
                <small>The law firm website development fee, valued at $2,000. Your monthly plan is billed at full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>What qualifies you</strong>
                <small>
                  Any Zonic marketing plan at $895/month or above — Local Foundation, Growth, or Full Market — on a six-month minimum term. Advertising spend is billed separately by the platform. Also available with{" "}
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
                <strong>What you own</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>If you cancel early</strong>
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
              <span className="section-kicker">Law-firm website + recurring growth</span>
              <h2>Why the combined offer is stronger for law firms.</h2>
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
                <strong>One legal intake system</strong>
                <small>Website · visibility · tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your law-firm website, ads, GBP visibility, legal content, and intake tracking are planned around the same prospective clients and target markets.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One law-firm strategy</strong>
                  <small>Built around your target market</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>The upfront website investment is removed, giving your legal campaigns a conversion-ready foundation without a separate development bill.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>Lower starting barrier</strong>
                  <small>Development fee waived</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, consultation forms, paid campaigns, and local search actions are measured together so improvements focus on qualified legal enquiries.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Measurable law-firm growth</strong>
                  <small>Tracking connected from launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my law firm lead system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Law-firm website FAQs</span>
            <h2>Understand the offer before you claim it.</h2>
            <p>These are the details law firms should know about eligibility, website scope, and the qualifying marketing engagement.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my law firm market</span>
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
              Zonic Law Firm Website Launch Offer
            </span>
            <h2>Claim your professional law-firm website with no upfront development fee.</h2>
            <p>Complete the short eligibility form. Zonic will review your practice areas, target markets, current website, and intake goals before recommending a qualifying legal marketing plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Law-firm lead-generation website
              </span>
              <span>
                <Icon name="check" /> Marketing plan matched to your practice and market
              </span>
              <span>
                <Icon name="check" /> Clear scope and terms before commitment
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
            <p>Law-firm websites connected to the marketing and intake systems that help firms earn qualified consultations.</p>
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
            <span>Law Firm Website Launch Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $895/month or above on a six-month term.</p>
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
            plan at $895 per month or above on a six-month minimum term. Client
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
