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
import ChiropracticFaqList, { FAQS } from "./ChiropracticFaqList";
import ChiropracticLeadForm from "./ChiropracticLeadForm";
import ChiropracticOfferHeader from "./ChiropracticOfferHeader";
import ChiropracticServiceTabs from "./ChiropracticServiceTabs";
import "./offer.css";

const PAGE_PATH = "/chiropractic-website-design-agency-us/offer";

/* ── Structured data ──────────────────────────────────────────────────────
   Breadcrumb + Service (with the actual offer terms) + FAQPage. The FAQ
   entries are imported from the component that renders them, so the markup
   can never describe questions the page does not show. */
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Free Chiropractic Website Offer", url: PAGE_PATH },
]);

const serviceJsonLd = {
  ...buildServiceJsonLd({
    name: "Free Chiropractic Website Offer",
    description:
      "A conversion-focused chiropractic website with the upfront development fee waived for businesses on a qualifying Zonic Media marketing plan.",
    pageUrl: PAGE_PATH,
    serviceType: "Chiropractic Website Design",
    areaServed: "United States",
  }),
  offers: {
    "@type": "Offer",
    name: "Free Chiropractic Website Offer",
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
  "Back Pain Care leads",
  "Neck Pain Care leads",
  "Sports Injuries leads",
  "Auto Accident Care leads",
  "Wellness Care leads",
  "New Patient Visits leads",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Calm clinic design" },
  { icon: "smartphone", label: "Phone-friendly booking" },
  { icon: "mail", label: "New patient forms" },
  { icon: "phone", label: "Tap-to-call front desk" },
  { icon: "search", label: "Condition page SEO" },
  { icon: "chart", label: "Booked visit tracking" },
  { icon: "layers", label: "Care service pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Booked visit tracking" },
  { icon: "layers", label: "Care service pages" },
  { icon: "pin", label: "Calm clinic design" },
  { icon: "gauge", label: "Phone-friendly booking" },
  { icon: "code", label: "New patient forms" },
  { icon: "target", label: "Tap-to-call front desk" },
  { icon: "users", label: "Condition page SEO" },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Free Chiropractic Website | Chiropractor Web Design | Zonic" },
  description:
    "Free chiropractic website with new patient booking, condition pages and insurance details. Development fee waived on a qualifying Zonic marketing plan.",
  // Offer-intent terms, kept disjoint from the head terms the matching
  // /services page targets so the two do not compete.
  keywords: [
    "free chiropractic website",
    "chiropractic website design",
    "chiropractor website design",
    "chiropractic marketing websites",
    "free website for chiropractors",
    "chiropractic web design",
    "chiropractor website",
    "chiropractic marketing",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free Website for Chiropractors | Zonic Media",
    description:
      "Free chiropractic website with new patient booking, condition pages and insurance details. Development fee waived on a qualifying Zonic marketing plan.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media free chiropractic website offer",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-image.jpg"] },
};

export default function ChiropracticOfferPage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="ofr-chiropractic" id="top">
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

      <ChiropracticOfferHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Free website offer for chiropractors and clinics</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get Your
              <br />
              Chiropractic Website
              <span className="headline-accent">
                {" "}
                FREE.
                <svg viewBox="0 0 300 24" aria-hidden="true">
                  <path d="M6 18 C 80 4, 220 4, 294 14" />
                </svg>
              </span>
            </h1>

            <p className="hero-lede">Start a qualifying Zonic Media marketing plan and we build your chiropractic website with new patient booking, condition pages and clear insurance details. The upfront development fee is waived.</p>

            <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my clinic website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See the clinic site build</span>
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
                  <strong>No clinic build fee</strong>
                  <small>Website build waived</small>
                </span>
              </div>
              <div className="proof-item proof-item--yellow">
                <span className="proof-icon">
                  <Icon name="monitor" />
                </span>
                <span>
                  <strong>New-patient pages</strong>
                  <small>Built for first-visit bookings</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Patient-ready growth</strong>
                  <small>Website + clinic marketing</small>
                </span>
              </div>
              <div className="proof-item proof-item--purple proof-item--mobile">
                <span className="proof-icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Clinic terms in writing</strong>
                  <small>Agreed before we start</small>
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
                <small>With a qualifying clinic plan</small>
              </span>
            </div>

            <div className="browser-card">
              <div className="browser-topbar">
                <div className="browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="address-bar">chiropracticpros.com</div>
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
                  <span>Conditions</span>
                  <span>First Visit</span>
                  <span>Insurance</span>
                </div>
                <div className="mini-button">Book a visit</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">CHIROPRACTIC CLINIC</div>
                  <h2>Care that starts with listening.</h2>
                  <p>A chiropractic website that explains your care and makes the first visit easy to book.</p>
                  <div className="canvas-actions">
                    <span>Book first visit</span>
                    <span>Conditions we see</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack industry-visual-stack">
                  <Image
                    src="/images/free-website/free-chiropractic/hero.webp"
                    alt="Chiropractic professional at work"
                    fill
                    sizes="(max-width: 860px) 45vw, 300px"
                    priority
                  />
                  <div className="visual-chip">NEW PATIENTS WELCOME</div>
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
                <span className="phone-kicker">NEW PATIENTS</span>
                <h3>Book your first visit in a few taps.</h3>
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
                <strong>Built for new patients</strong>
                <small>Booking, calls and tracking</small>
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
            <span className="section-kicker">Your clinic website in three steps</span>
            <h2>Your clinic site, from kickoff to launch.</h2>
            <p>Zonic builds chiropractic marketing websites and pairs them with ongoing marketing, so people near your clinic find you and book a first visit.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Share your clinic goals</h3>
              <p>We review your care services, patient mix, location, current website and the channels most likely to bring new patients through the door.</p>
              <small>Clinic review call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Pick your clinic plan</h3>
              <p>Your plan can combine Google Ads, Local SEO, Google Business Profile care, booking tracking and conversion work.</p>
              <small>Monthly clinic marketing</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build your clinic site</h3>
              <p>
                Zonic builds the agreed chiropractic website, with booking on key pages and the build fee waived. Made to the same standard as{" "}
                <Link href="/services/web-design" className="offer-inlink">
                  our full website design service
                </Link>
                .
              </p>
              <small>Build cost waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my clinic</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Lead tracking ───────────── */}
        <section id="lead-tracking" className="section leadtrack-section">
          <div className="leadtrack-copy">
            <span className="section-kicker">New patient tracking</span>
            <h2>New patient calls and bookings, all in one view.</h2>
            <p>
              Calls, booking requests and chats arrive in one dashboard with the source attached, so you can see which visits came from ads, Google Maps or search instead of guessing.
            </p>
            <ul className="leadtrack-points">
              <li>
                <Icon name="check" /> Every call and booking request captured
              </li>
              <li>
                <Icon name="check" /> Source noted on each new patient lead
              </li>
              <li>
                <Icon name="check" /> Status from enquiry to first visit
              </li>
            </ul>
            <a className="section-button" href="#contact">
              <span>View The Booking Dashboard</span>
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
                <small>Back Pain Care</small>
              </b>
              <span>Google Ads</span>
              <span className="leadtrack-pill leadtrack-pill--new">New</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Priya S.
                <small>Neck Pain Care</small>
              </b>
              <span>Google Business Profile</span>
              <span className="leadtrack-pill leadtrack-pill--contacted">Contacted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Dana R.
                <small>Sports Injuries</small>
              </b>
              <span>Organic search</span>
              <span className="leadtrack-pill leadtrack-pill--quoted">Quoted</span>
            </div>
            <div className="leadtrack-row">
              <b>
                Elena V.
                <small>Auto Accident Care</small>
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
              <span className="section-kicker">Chiropractic care pages</span>
              <h2>Back pain, neck pain, sports care: a page for each reason people book.</h2>
            </div>
            <p>People search by what hurts and what they need. Pick a tab to see how each page explains your care, sets expectations and leads to booking.</p>
          </div>

          <ChiropracticServiceTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                Beyond these six services
              </span>
              <h3>Headaches, sciatica, prenatal care and more.</h3>
              <p>The tabs are a sample. Any care service patients search for can get its own page.</p>
            </div>
            <div className="niche-banner-tags">
              {MARQUEE_ITEMS.slice(0, 8).map((tag) => (
                <span key={tag}>{tag.replace(" leads", "")}</span>
              ))}
              <span className="niche-banner-more">+ every service your clinic offers</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Get my care service pages</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">What your clinic website includes</span>
            <h2>Booking, care pages and tracking, built into one clinic site.</h2>
            <p>Your chiropractic website runs inside your marketing, with care pages, booking tracking and insurance details working together to bring in new patients month after month.</p>
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
                <small>CLINIC SITE 01</small>
                <h3>Found by nearby patients</h3>
                <p>
                  Care pages, location pages, on-page SEO and schema help Google connect your clinic to chiropractor searches nearby. Built with the same method as our{" "}
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
                <small>CLINIC SITE 02</small>
                <h3>Bookings you can measure</h3>
                <p>Booking forms, click-to-call, GA4, Tag Manager and call tracking show which campaigns bring new patients in.</p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my clinic website</span>
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
              <span className="section-kicker">Clinic plans with the website</span>
              <h2>Pick the plan that fits your clinic. The site is included.</h2>
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
              The chiropractic marketing plan
            </span>
            <h2>Help nearby patients find your clinic, then book with ease.</h2>
            <p>Your plan is built around your clinic and local area. It can combine paid search, local visibility, Business Profile growth, booking tracking and steady conversion tests.</p>
            <a className="section-button section-button--light" href="#contact">
              <span>Check my clinic’s market</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Google Ads for clinics</h3>
              <p>
                Reach people searching for a chiropractor near them, with careful ad copy and tracked bookings. Read about our{" "}
                <Link href="/services/google-ads" className="offer-inlink">
                  Google Ads management
                </Link>
                .
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local SEO + Maps for clinics</h3>
              <p>
                Grow visibility in chiropractor near me searches, with a Business Profile, photos and reviews that help patients choose. Linked to our{" "}
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
              <h3>More first visits booked</h3>
              <p>Call and form tracking, booking-page tests and simple reports turn more site visits into first appointments.</p>
            </article>
            <article className="dark-stat">
              <span>
                <b>$0</b> upfront development fee
              </span>
              <span>
                <b>1</b> patient-ready website
              </span>
              <span>
                <b>100%</b> terms agreed in writing
              </span>
            </article>
          </div>
        </section>

        {/* ───────────── Terms ───────────── */}
        <section className="section terms-section">
          <div className="terms-main">
            <span className="section-kicker">
              Clinic offer terms
            </span>
            <h2>How the free chiropractic website works.</h2>
            <p>Zonic waives the upfront chiropractic website design and development fee when your clinic starts a qualifying monthly marketing plan. All terms are in writing before you agree.</p>
            <a className="section-button" href="#contact">
              <span>See if my clinic qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Fee waived for clinics</strong>
                <small>The chiropractic website development fee, valued at $2,000. Your monthly plan is billed at full rate and is not discounted.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Plans that count</strong>
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
                <strong>Owning your site</strong>
                <small>Your domain is registered in your business’s name from day one. We host and maintain the site during the term; full ownership of the website and hosting transfers to you at the completion of month six.</small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Stopping early</strong>
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
              <span className="section-kicker">Clinic site + marketing</span>
              <h2>Website plus marketing: better together for clinics.</h2>
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
                <strong>One clinic system</strong>
                <small>Site · search · bookings</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>Your clinic website, ads, map listing and tracking all speak to the same local patients, instead of being handled as separate projects.</p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One clinic strategy</strong>
                  <small>Built around your area</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>No upfront website bill means your budget goes toward reaching new patients, not paying off a build.</p>
              <footer>
                <span>02</span>
                <div>
                  <strong>A lighter start</strong>
                  <small>Clinic build fee waived</small>
                </div>
              </footer>
            </article>
            <article>
              <Icon name="target" />
              <p>Calls, bookings, ads and map actions are measured together, so each change aims at more booked first visits.</p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Visits you can trace</strong>
                  <small>Tracking ready from launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my patient booking system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Chiropractic website FAQs</span>
            <h2>Your clinic’s questions about the free site.</h2>
            <p>Answers for clinic owners on eligibility, website scope and the monthly marketing plan behind the offer.</p>
            <a className="section-button" href="#contact">
              <span>Ask about my clinic’s area</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <ChiropracticFaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Free Chiropractic Website Offer
            </span>
            <h2>Claim a chiropractic website made for new patient bookings.</h2>
            <p>Fill in the short form. Zonic reviews your clinic, care services, current website and goals before recommending a qualifying plan.</p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Booking-ready chiropractic website
              </span>
              <span>
                <Icon name="check" /> Plan matched to your clinic and area
              </span>
              <span>
                <Icon name="check" /> Scope and terms set before you commit
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

          <ChiropracticLeadForm />
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
            <p>Chiropractic websites built for new patient booking and local clinic marketing.</p>
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
            <a href="#work">Chiropractic services</a>
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
            <span>Chiropractic Website Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>With a qualifying marketing plan at $297/month or above on a six-month term.</p>
            <a href="#ofr-chiropractic-offer-form">
              Get my chiropractic website <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <nav className="offer-siblings" aria-label="Other free website offers">
          <small>MORE FREE WEBSITE OFFERS</small>
          <div>
            <Link href="/website-design-agency-us/offer">Free website offer</Link>
            <Link href="/cleaning-company-website-design-agency-us/offer">Cleaning Company websites</Link>
            <Link href="/electrician-website-design-agency-us/offer">Electrician websites</Link>
            <Link href="/flooring-website-design-agency-us/offer">Flooring websites</Link>
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
            <strong>OFFER TERMS.</strong> Chiropractic website development fee, valued at $2,000, is
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
        idPrefix="ofr-chiropractic"
        formType="free-chiropractic-website"
        heading="Get your chiropractic website with no upfront fee."
        serviceLabel="Chiropractic work you want more of"
        servicePlaceholder="Select a chiropractic service"
        services={[
          "Back Pain Care",
          "Neck Pain Care",
          "Sports Injuries",
          "Auto Accident Care",
          "Wellness Care",
          "New Patient Visits",
          "Mix of the above",
        ]}
      />
    </div>
  );
}
