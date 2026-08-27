import Image from "next/image";
import type { Metadata } from "next";

import GhlChatWidget from "@/app/components/GhlChatWidget";
import { SITE_CONTACT, SITE_PATHS } from "@/shared/siteConfig";

import FaqList from "./FaqList";
import FreeDesignLeadForm from "./FreeDesignLeadForm";
import FreeWebsiteDesignHeader from "./FreeWebsiteDesignHeader";
import Icon from "./Icon";
import IndustryTabs from "./IndustryTabs";
import "./offer.css";

const PAGE_PATH = "/website-design-agency-us/offer";

const MARQUEE_ITEMS = [
  "HVAC websites",
  "Roofing websites",
  "Plumbing websites",
  "Electrical websites",
  "Home Inspection websites",
  "Pest Control websites",
  "Towing websites",
  "Landscaping websites",
  "Commercial Cleaning websites",
  "Garage Door websites",
];

const CAPABILITY_ROW_ONE = [
  { icon: "layout", label: "Professional design" },
  { icon: "smartphone", label: "Mobile optimization" },
  { icon: "mail", label: "Lead forms" },
  { icon: "phone", label: "Click-to-call" },
  { icon: "search", label: "SEO foundation" },
  { icon: "chart", label: "Conversion tracking" },
  { icon: "layers", label: "Service pages" },
] as const;

const CAPABILITY_ROW_TWO = [
  { icon: "chart", label: "Conversion tracking" },
  { icon: "layers", label: "Service pages" },
  { icon: "pin", label: "GBP integration" },
  { icon: "gauge", label: "Speed optimization" },
  { icon: "code", label: "Schema setup" },
  { icon: "target", label: "Clear CTAs" },
  { icon: "users", label: "CRM lead routing" },
] as const;

export const metadata: Metadata = {
  title: "Get a Free Professional Website",
  description:
    "Start a qualifying Zonic Media marketing plan and get a professional lead-generation website with no upfront development fee.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Get a Free Professional Website | Zonic Media",
    description:
      "Start a qualifying Zonic Media marketing plan and get a professional lead-generation website with no upfront development fee.",
    url: PAGE_PATH,
    type: "website",
  },
};

export default function FreeWebsiteDesignServicePage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="fwd-page" id="top">
      <div className="aurora aurora--one" />
      <div className="aurora aurora--two" />

      <FreeWebsiteDesignHeader />

      <main id="main-content">
        {/* ───────────── Hero ───────────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow__pulse" />
              <span>Zonic Website Launch Offer</span>
              <Icon name="sparkles" />
            </div>

            <h1 id="hero-title">
              Get your new website
              <span className="headline-accent"> FREE.</span>
            </h1>

            <p className="hero-lede">
              Start a qualifying Zonic Media marketing plan and we&rsquo;ll
              build your professional, conversion-focused website with no
              upfront development fee.
            </p>

            <div className="hero-actions">
              <a className="button" href="#contact">
                <span>Claim my free website</span>
                <span className="button__icon">
                  <Icon name="arrow-up-right" />
                </span>
              </a>
              <a className="button button--secondary" href="#deliverables">
                <span>See what&rsquo;s included</span>
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
                  <strong>Lead-generation site</strong>
                  <small>Built to drive enquiries</small>
                </span>
              </div>
              <div className="proof-item proof-item--green">
                <span className="proof-icon">
                  <Icon name="chart" />
                </span>
                <span>
                  <strong>Growth connected</strong>
                  <small>Website + marketing plan</small>
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
                <div className="address-bar">yourbrand.com</div>
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
                <div className="mini-button">Get a quote</div>
              </div>

              <div className="design-canvas">
                <div className="canvas-copy">
                  <div className="skeleton-label">LEAD-GENERATION WEBSITE</div>
                  <h2>More calls. More booked jobs.</h2>
                  <p>
                    A professional website connected to the marketing channels
                    that grow your business.
                  </p>
                  <div className="canvas-actions">
                    <span>Request service</span>
                    <span>View services</span>
                  </div>
                  <div className="canvas-trust">
                    <Icon name="check" /> Tracking ready <Icon name="check" />{" "}
                    Mobile optimized
                  </div>
                </div>
                <div className="visual-stack">
                  <div className="visual-card visual-card--back">
                    <span>01</span>
                  </div>
                  <div className="visual-card visual-card--front">
                    <div className="visual-grid">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="visual-chip">YOUR BEST WORK</div>
                  </div>
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
                <span className="phone-kicker">LEAD-GENERATION SITE</span>
                <h3>Built to turn visits into leads.</h3>
                <div className="phone-art">
                  <i />
                  <i />
                  <i />
                </div>
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
                <strong>Built to generate leads</strong>
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
            <span className="section-kicker">
              One offer. One connected growth system.
            </span>
            <h2>Remove the website cost that holds marketing back.</h2>
            <p>
              Zonic combines the site your business needs with the recurring
              marketing required to put it in front of qualified prospects.
            </p>
          </div>

          <div className="process-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <Icon name="quote" />
              </div>
              <h3>Tell us your growth goals</h3>
              <p>
                We review your industry, locations, current website, lead
                sources, and the marketing channels most likely to create
                demand.
              </p>
              <small>Qualification call</small>
            </article>
            <article className="process-card--featured">
              <span className="step-number">02</span>
              <div className="step-icon">
                <Icon name="chart" />
              </div>
              <h3>Choose a qualifying plan</h3>
              <p>
                Your plan may combine Google Ads, Local SEO, Google Business
                Profile management, tracking, and conversion optimization.
              </p>
              <small>Recurring growth service</small>
            </article>
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Icon name="wand" />
              </div>
              <h3>We build your website</h3>
              <p>
                Zonic creates the agreed lead-generation website with the
                upfront development fee waived under your marketing engagement.
              </p>
              <small>Website fee waived</small>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Check my eligibility</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── Industries ───────────── */}
        <section id="work" className="section niche-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">
                Industry-specific launch offers
              </span>
              <h2>Your free website should match how your customers search.</h2>
            </div>
            <p>
              Choose an industry to see how Zonic adapts the website message,
              service paths, trust signals, and enquiry flow while connecting it
              to a qualifying marketing plan.
            </p>
          </div>

          <IndustryTabs />

          <div className="niche-banner">
            <div className="niche-banner-copy">
              <span className="section-kicker section-kicker--dark">
                Beyond these six
              </span>
              <h3>We build for every local niche.</h3>
              <p>
                The tabs are just a sample — if customers search for your
                service, we can build for it.
              </p>
            </div>
            <div className="niche-banner-tags">
              {[
                "Electrical",
                "Home Inspection",
                "Pest Control",
                "Towing",
                "Movers",
                "Auto Repair",
                "Painting",
                "Dental",
                "Real Estate",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span className="niche-banner-more">+ every other niche</span>
            </div>
            <a className="section-button section-button--light" href="#contact">
              <span>Claim my free website</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
        </section>

        {/* ───────────── What's included ───────────── */}
        <section id="deliverables" className="included-section">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">
              Your lead-generation website includes
            </span>
            <h2>More than a basic website handed over and forgotten.</h2>
            <p>
              The website is built as part of your marketing system, with the
              essential structure, tracking, and conversion tools needed to
              support recurring growth.
            </p>
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
                <small>WEBSITE SYSTEM 01</small>
                <h3>Search-ready structure</h3>
                <p>
                  Service pages, location pathways, on-page SEO, and schema
                  where appropriate help search engines understand your
                  business.
                </p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
            <article>
              <span className="system-card-icon system-card-icon--yellow">
                <Icon name="target" />
              </span>
              <div>
                <small>WEBSITE SYSTEM 02</small>
                <h3>Measurable lead flow</h3>
                <p>
                  Lead forms, click-to-call, GA4, Tag Manager, conversion
                  tracking, and CRM routing connect marketing activity to real
                  enquiries.
                </p>
              </div>
              <Icon name="arrow-up-right" />
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Claim my free website</span>
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
              <span className="section-kicker">Qualifying plans</span>
              <h2>Pick the plan. The website comes with it.</h2>
            </div>
            <p>
              Any plan at $895/month or above on a 6-month term includes the
              full lead-generation website build at no development fee.
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
                $895 <span>/ month</span>
              </div>
              <p>
                Build a strong local presence and a website foundation that
                supports discovery.
              </p>
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
                $1,495 <span>/ month</span>
              </div>
              <p>
                Combine local visibility with paid search, landing-page
                improvements, and lead tracking.
              </p>
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
              </ul>
              <a href="#contact">
                Choose Growth <Icon name="arrow-up-right" />
              </a>
            </article>

            <article className="pricing-card">
              <div className="pricing-card-head">
                <span>03</span>
                <small>MARKET EXPANSION</small>
              </div>
              <h3>Full Market</h3>
              <div className="plan-price">
                $2,495 <span>/ month</span>
              </div>
              <p>
                Expand across services and locations with a broader organic and
                paid growth program.
              </p>
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
            engagement.
          </p>
        </section>

        {/* ───────────── Why / marketing plan ───────────── */}
        <section id="why" className="dark-section">
          <div className="dark-glow" />
          <div className="dark-copy">
            <span className="section-kicker section-kicker--dark">
              The qualifying marketing plan
            </span>
            <h2>The website is the foundation. Marketing creates the demand.</h2>
            <p>
              Your plan is selected around your market and may combine paid
              search, local visibility, Google Business Profile growth,
              tracking, and ongoing conversion improvements.
            </p>
            <a className="section-button section-button--light" href="#contact">
              <span>Check my eligibility</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="dark-grid">
            <article>
              <strong>01</strong>
              <h3>Google Ads management</h3>
              <p>
                Capture high-intent searches with targeted campaigns, focused
                landing experiences, and measurable lead actions.
              </p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Local SEO + GBP</h3>
              <p>
                Build visibility across services and locations while improving
                the business signals customers see in local results.
              </p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Conversion optimization</h3>
              <p>
                Use call and form tracking, landing-page improvements, and
                reporting to turn more visits into qualified enquiries.
              </p>
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
            <h2>What &ldquo;free website&rdquo; means in this offer.</h2>
            <p>
              Zonic waives the upfront website design and development fee when
              an eligible business starts a qualifying recurring marketing
              engagement. Nothing is left vague before you agree.
            </p>
            <a className="section-button" href="#contact">
              <span>See if my business qualifies</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>
          <div className="terms-list">
            <div>
              <Icon name="check" />
              <span>
                <strong>Website scope</strong>
                <small>
                  Agreed page count, standard functionality, content
                  responsibilities, and reasonable revision limits.
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Marketing eligibility</strong>
                <small>
                  The recurring services and plan level that qualify your
                  business for the waived development fee.
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>Engagement terms</strong>
                <small>
                  Any minimum commitment, hosting, cancellation, and website
                  ownership terms shown in writing.
                </small>
              </span>
            </div>
            <div>
              <Icon name="check" />
              <span>
                <strong>No surprise setup fee</strong>
                <small>
                  The approved proposal clearly states what is included at no
                  upfront development cost.
                </small>
              </span>
            </div>
          </div>
        </section>

        {/* ───────────── Why the combined offer ───────────── */}
        <section id="reviews" className="section review-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Website + recurring growth</span>
              <h2>Why the combined offer is stronger.</h2>
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
                <strong>One connected system</strong>
                <small>Website · visibility · tracking</small>
              </p>
            </div>
          </div>

          <div className="review-grid">
            <article>
              <Icon name="users" />
              <p>
                Your website, ads, local visibility, and tracking are planned
                around the same audience instead of being handled as unrelated
                projects.
              </p>
              <footer>
                <span>01</span>
                <div>
                  <strong>One strategy</strong>
                  <small>Built around your market</small>
                </div>
              </footer>
            </article>
            <article className="review-featured">
              <Icon name="wand" />
              <p>
                The upfront website investment is removed, giving the marketing
                plan a stronger foundation without adding a separate development
                bill.
              </p>
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
              <p>
                Calls, forms, campaigns, and local search actions are measured
                together so ongoing improvements can focus on qualified leads.
              </p>
              <footer>
                <span>03</span>
                <div>
                  <strong>Measurable growth</strong>
                  <small>Tracking connected from launch</small>
                </div>
              </footer>
            </article>
          </div>

          <div className="section-cta-row">
            <a className="button" href="#contact">
              <span>Build my growth system</span>
              <span className="button__icon">
                <Icon name="arrow-up-right" />
              </span>
            </a>
          </div>
        </section>

        {/* ───────────── FAQs ───────────── */}
        <section id="faqs" className="section faq-section">
          <div className="faq-intro">
            <span className="section-kicker">Frequently asked questions</span>
            <h2>Understand the offer before you claim it.</h2>
            <p>
              These are the details business owners should know about
              eligibility, website scope, and the qualifying marketing
              engagement.
            </p>
            <a className="section-button" href="#contact">
              <span>Ask us directly</span>
              <i>
                <Icon name="arrow-up-right" />
              </i>
            </a>
          </div>

          <FaqList />
        </section>

        {/* ───────────── Final CTA + form ───────────── */}
        <section id="contact" className="final-cta">
          <div className="cta-orbit cta-orbit--one" />
          <div className="cta-orbit cta-orbit--two" />

          <div className="cta-content">
            <span className="section-kicker section-kicker--dark">
              Zonic Website Launch Offer
            </span>
            <h2>
              Claim your professional website with no upfront development fee.
            </h2>
            <p>
              Complete the short eligibility form. Zonic will review your
              industry, website needs, and growth goals before recommending a
              qualifying marketing plan.
            </p>
            <div className="contact-points">
              <span>
                <Icon name="check" /> Professional lead-generation website
              </span>
              <span>
                <Icon name="check" /> Marketing plan matched to your goals
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

          <FreeDesignLeadForm />
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
            <p>
              Lead-generation websites connected to the marketing services that
              grow local businesses.
            </p>
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
            <a href="#work">Industries</a>
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
            <span>Website Launch Offer</span>
            <strong>$0 upfront development fee</strong>
            <p>
              With a qualifying marketing plan at $895/month or above on a
              six-month term.
            </p>
            <a href="#contact">
              See if you qualify <Icon name="arrow-right" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Zonic Media LLC · 8 The Green, STE B, Dover, DE 19901 ·{" "}
            <a href="https://zonicllc.com">zonicllc.com</a>
          </p>
          <small>
            Website development fee, valued at $2,000, is waived for eligible
            new clients. Advertising spend is separate. Build scope, revisions,
            hosting, ownership transfer, and full offer terms are confirmed in
            writing before engagement.
          </small>
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
    </div>
  );
}
