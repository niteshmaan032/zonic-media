import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import "@/app/style/homeInspAgency.css";
import "@/app/style/homeInspState.css";

import HomeInspectorLeadForm from "@/app/components/HomeInspectorLeadForm";
import HiaFaqAccordion from "@/app/components/HiaFaqAccordion";
import HashScrollLink from "@/app/components/HashScrollLink";
import ClutchWidget from "@/app/components/ClutchWidget";
import HeroTrustBadges from "@/app/components/HeroTrustBadges";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";

import {
  StateContent,
  buildStateServices,
  buildStatePriceCards,
  CHANNEL_TABLE,
} from "./stateContent";

const trustItems = [
  { num: "500+", label: "Businesses Ranked" },
  { num: "4.9/5", label: "Client Satisfaction" },
  { num: "95%", label: "Growth Success Rate" },
  { num: "$750", label: "Plans Start At" },
];

const processSteps = [
  {
    n: "1",
    h: "The Free Audit",
    pTemplate:
      "You fill out the form. Within five business days you get a written report covering your GBP, your local rankings across {state}, your website, your reviews, your citations, and the gaps a competitor in your market is exploiting. No call required to receive the report.",
  },
  {
    n: "2",
    h: "The Strategy Call",
    pTemplate:
      "If the audit makes sense, we get on a thirty-minute call. You bring your booking goals, your {state} service area, your busy season, and your current marketing spend. We walk through which plan fits and where the first wins will come from.",
  },
  {
    n: "3",
    h: "Launch & Reporting",
    pTemplate:
      "Within fourteen days of signing, your campaigns are live and your GBP is rebuilt. You get a monthly performance report you can actually read — not a vanity dashboard — covering calls, form fills, ranking movement, and revenue attribution.",
  },
];

function fillTemplate(text: string, values: string[]): ReactNode {
  if (!text.includes("{")) return text;
  const parts: ReactNode[] = [];
  const regex = /\{(\d+)\}/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const idx = Number(match[1]);
    parts.push(<strong key={`s-${match.index}`}>{values[idx]}</strong>);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

export default function StatePage({ state }: { state: StateContent }) {
  const stateName = state.name;
  const services = buildStateServices(stateName);
  const priceCards = buildStatePriceCards(stateName);

  const pageUrl = `https://zonicllc.com/services/home-inspector-marketing/${state.slug}`;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    {
      name: "Home Inspector Marketing Agency",
      url: "/services/home-inspector-marketing",
    },
    { name: stateName, url: `/services/home-inspector-marketing/${state.slug}` },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: pageUrl,
    mainEntity: state.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const localBusinessJsonLd = buildLocalBusinessJsonLd({
    pageUrl: `/services/home-inspector-marketing/${state.slug}`,
    areaServed: stateName,
  });

  const serviceJsonLd = buildServiceJsonLd({
    name: `Home Inspector Marketing in ${stateName}`,
    description: state.metaDescription,
    pageUrl: `/services/home-inspector-marketing/${state.slug}`,
    serviceType: "Home Inspector Marketing",
    areaServed: stateName,
  });

  const processStepsLocal = processSteps.map((s) => ({
    n: s.n,
    h: s.h,
    p: s.pTemplate.replace(/\{state\}/g, stateName),
  }));

  return (
    <>
      <Script
        id="his-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="his-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="his-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Script
        id="his-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div id="hia-top" className="hia-page">
        {/* Ticker */}
        <div className="hia-ticker">
          <div className="hia-ticker-track">
            {[...state.ticker, ...state.ticker].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* Minimal NAV — no child-state links, same as parent */}
        <nav className="hia-nav">
          <Link href="/" className="hia-nav-logo" aria-label="Zonic Media">
            <Image
              src="/images/logo.webp"
              width={108}
              height={41}
              alt="Zonic Media"
              className="hia-nav-logo-img"
              priority
            />
          </Link>
          <div className="hia-nav-links">
            <HashScrollLink href="#hia-problem">The Problem</HashScrollLink>
            <HashScrollLink href="#hia-services">What We Do</HashScrollLink>
            <HashScrollLink href="#hia-cities">
              {stateName} Cities
            </HashScrollLink>
            <HashScrollLink href="#hia-pricing">Pricing</HashScrollLink>
            <HashScrollLink href="#hia-faq">FAQ</HashScrollLink>
          </div>
          <div className="hia-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="hia-nav-phone">
              {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#hia-audit-top" className="hia-nav-cta">
              Get Free Audit
            </HashScrollLink>
          </div>
        </nav>

        <div className="hia-main-wrapper">
          <div className="hia-row">
            {/* LEFT: CONTENT */}
            <div className="hia-content-col">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="his-breadcrumb">
                <Link href="/services/home-inspector-marketing">
                  Home Inspector Marketing
                </Link>
                <span className="his-breadcrumb-sep">›</span>
                <span className="his-breadcrumb-current">{stateName}</span>
              </nav>

              {/* HERO */}
              <section className="hia-hero">
                <div className="hia-eyebrow">{state.hero.eyebrow}</div>
                <h1>
                  {state.hero.headlinePre}{" "}
                  <span className="hia-accent">{state.hero.accent}</span>
                </h1>
                <p className="hia-hero-sub">{state.hero.sub}</p>
                <div className="hia-hero-ctas">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Book Your Free Audit →
                  </HashScrollLink>
                  <Link
                    href={SITE_CONTACT.phoneHref}
                    className="hia-btn hia-btn-ghost"
                  >
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>

                <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

                <div className="hia-trust-row">
                  {trustItems.map((t, i) => (
                    <div className="hia-trust-item" key={i}>
                      <span className="hia-trust-num">{t.num}</span>
                      <span className="hia-trust-label">{t.label}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile/Tab top inline form */}
                <div
                  className="hia-mob-form hia-mob-form-top d-block d-lg-none"
                  id="hia-audit-top"
                >
                  <HomeInspectorLeadForm />
                </div>
              </section>

              {/* PROBLEM */}
              <section className="hia-section" id="hia-problem">
                <div className="hia-sec-label">{state.problem.eyebrow}</div>
                <h2 className="hia-sec-h2">
                  {state.problem.headlinePre}{" "}
                  <span className="hia-accent">{state.problem.accent}</span>
                </h2>
                <p className="hia-sec-sub">{state.problem.lede}</p>
                <div className="hia-problem-prose">
                  {state.problem.proseSegments.map((seg, i) => (
                    <p key={i}>{fillTemplate(seg.text, seg.strongs ?? [])}</p>
                  ))}
                </div>
                <div className="hia-section-cta">
                  <Link
                    href={SITE_CONTACT.phoneHref}
                    className="hia-cta-call"
                  >
                    <span
                      className="hia-cta-call-dot"
                      aria-hidden="true"
                    />
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>
                <div className="hia-problem-grid">
                  {state.problem.cards.map((c, i) => (
                    <div className="hia-problem-card" key={i}>
                      <h4>{c.h}</h4>
                      <p>{c.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SERVICES */}
              <section
                className="hia-section hia-services-sec"
                id="hia-services"
              >
                <div className="hia-sec-label">
                  Complete Digital Marketing Stack
                </div>
                <h2 className="hia-sec-h2">
                  Everything a {stateName} Home Inspection Company Needs to{" "}
                  <span className="hia-accent">Grow Online.</span>
                </h2>
                <p className="hia-sec-sub">
                  We are not a &ldquo;just SEO&rdquo; shop or a &ldquo;just
                  Google Ads&rdquo; shop. Our{" "}
                  <Link
                    href="/services/home-inspector-marketing"
                    className="hia-inline-link"
                  >
                    home inspector marketing
                  </Link>{" "}
                  program builds the whole funnel for {stateName} home
                  inspectors, from the way you appear on Google Maps through{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="hia-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  to the way your website converts a visitor into a booked
                  inspection.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Audit My Full Funnel →
                  </HashScrollLink>
                </div>
                <div className="hia-svc-grid">
                  {services.map((s, i) => (
                    <article className="hia-svc-card" key={i}>
                      <div className="hia-svc-num">{s.num}</div>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                      <ul className="hia-svc-includes">
                        {s.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              {/* CHANNEL MIX TABLE */}
              <section className="hia-section" id="hia-channels">
                <div className="hia-sec-label">Channel Mix at a Glance</div>
                <h2 className="hia-sec-h2">
                  What Each Marketing Channel Does — And{" "}
                  <span className="hia-accent">How Fast It Pays Back.</span>
                </h2>
                <p className="hia-sec-sub">
                  Use this grid as a planning guide.{" "}
                  <Link href="/services/google-ads" className="hia-inline-link">
                    Google Ads management
                  </Link>{" "}
                  and a polished Google Business Profile buy you bookings this
                  month.{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="hia-inline-link"
                  >
                    Local SEO for home services
                  </Link>{" "}
                  and social compound across the year. The strongest{" "}
                  {stateName} home inspector marketing plans blend both
                  timelines so the calendar never goes cold.
                </p>
                <div className="hia-channel-table-wrap">
                  <table className="hia-channel-table">
                    <caption className="hia-sr-only">
                      How {stateName} home inspector marketing channels compare
                      on delivery, timeline, and ideal fit.
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Channel</th>
                        <th scope="col">What it delivers</th>
                        <th scope="col">Time to first leads</th>
                        <th scope="col">Strongest for</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CHANNEL_TABLE.map((row, i) => (
                        <tr key={i}>
                          <td data-label="Channel">
                            <div className="hia-ct-name">{row.channel}</div>
                            <span className="hia-ct-tag">{row.tag}</span>
                          </td>
                          <td data-label="What it delivers">{row.delivers}</td>
                          <td data-label="Time to first leads">
                            <span className="hia-ct-time">{row.timeline}</span>
                          </td>
                          <td data-label="Strongest for">{row.fit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* PROCESS */}
              <section className="hia-section">
                <div className="hia-sec-label">How We Work With You</div>
                <h2 className="hia-sec-h2">
                  A Clean Three-Step Start. Then We{" "}
                  <span className="hia-accent">Get to Work.</span>
                </h2>
                <p className="hia-sec-sub">{state.processLede}</p>
                <div className="hia-section-cta">
                  <Link
                    href={SITE_CONTACT.phoneHref}
                    className="hia-cta-call"
                  >
                    <span
                      className="hia-cta-call-dot"
                      aria-hidden="true"
                    />
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>
                <div className="hia-process-grid">
                  {processStepsLocal.map((s, i) => (
                    <div className="hia-process-step" key={i}>
                      <span className="hia-process-num">{s.n}</span>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* RESULTS */}
              <section
                className="hia-section hia-results-sec"
                id="hia-results"
              >
                <div className="hia-sec-label">
                  Real Outcomes, Not Vanity Metrics
                </div>
                <h2 className="hia-sec-h2">
                  {state.results.headlinePre}{" "}
                  <span className="hia-accent">{state.results.accent}</span>
                </h2>
                <p className="hia-sec-sub">{state.results.lede}</p>
                <div className="hia-results-prose">
                  {state.results.proseSegments.map((seg, i) => (
                    <p key={i}>{fillTemplate(seg.text, seg.strongs ?? [])}</p>
                  ))}
                </div>
                <div className="hia-stat-stack">
                  {state.results.stats.map((s, i) => (
                    <div className="hia-stat-row" key={i}>
                      <div className="hia-stat-big">{s.big}</div>
                      <div className="hia-stat-desc">
                        <h4>{s.h}</h4>
                        <p>{s.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit"
                    className="hia-btn hia-btn-primary"
                  >
                    Get My {stateName} Growth Plan →
                  </HashScrollLink>
                </div>
              </section>

              {/* CITIES */}
              <section className="hia-section" id="hia-cities">
                <div className="hia-sec-label">{state.cities.eyebrow}</div>
                <h2 className="hia-sec-h2">
                  {state.cities.headlinePre}{" "}
                  <span className="hia-accent">{state.cities.accent}</span>
                </h2>
                <p className="hia-sec-sub">{state.cities.lede}</p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit"
                    className="hia-btn hia-btn-primary"
                  >
                    Match Me to a {stateName} City Plan →
                  </HashScrollLink>
                </div>
                <div className="his-city-grid">
                  {state.cities.cards.map((c, i) => (
                    <div className="his-city-card" key={i}>
                      <h4>{c.h}</h4>
                      <p>{c.p}</p>
                      <Link href={c.link} className="his-city-link">
                        {c.linkLabel} →
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              {/* CLUTCH REVIEWS */}
              <section
                className="hia-section hia-reviews-sec"
                id="hia-reviews"
              >
                <div className="hia-sec-label">
                  Trusted by Clients Nationwide
                </div>
                <h2 className="hia-sec-h2">
                  What Inspectors and Other Service Businesses{" "}
                  <span className="hia-accent">
                    Say About Working with Us.
                  </span>
                </h2>
                <p className="hia-sec-sub">
                  Verified reviews from Clutch — the independent platform
                  agencies can&apos;t edit, filter, or fake. The same operators
                  who hired us to fix their booking pipeline left these. Many
                  came to us needing to{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="hia-inline-link"
                  >
                    recover a suspended Google Business Profile
                  </Link>{" "}
                  or rebuild a slow, dated site into a{" "}
                  <Link href="/services/web-design" className="hia-inline-link">
                    conversion-focused website
                  </Link>{" "}
                  before the reviews ever started rolling in.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit"
                    className="hia-btn hia-btn-primary"
                  >
                    Become the Next Win →
                  </HashScrollLink>
                </div>
                <div className="hia-reviews-wrap">
                  <ClutchWidget
                    widgetType="12"
                    height="375"
                    primaryColor="#2567e8"
                    reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
                  />
                </div>
              </section>

              {/* PRICING */}
              <section
                className="hia-section hia-pricing-sec"
                id="hia-pricing"
              >
                <div className="hia-sec-label">
                  Transparent Pricing, Month to Month
                </div>
                <h2 className="hia-sec-h2">
                  {state.pricingHeadlinePre}{" "}
                  <span className="hia-accent">{state.pricingAccent}</span>
                </h2>
                <p className="hia-sec-sub">{state.pricingLede}</p>
                <div className="hia-price-grid">
                  {priceCards.map((p, i) => (
                    <div
                      className={`hia-price-card${p.featured ? " hia-featured" : ""}`}
                      key={i}
                    >
                      {p.featured && p.badge && (
                        <div className="hia-price-badge">{p.badge}</div>
                      )}
                      <div className="hia-price-tier">{p.tier}</div>
                      <div className="hia-price-amount">{p.amount}</div>
                      <div className="hia-price-period">{p.period}</div>
                      <hr className="hia-price-divider" />
                      <ul className="hia-price-list">
                        {p.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                      <HashScrollLink
                        href="#hia-audit"
                        className="hia-btn hia-btn-primary hia-btn-block"
                      >
                        {p.cta}
                      </HashScrollLink>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="hia-section" id="hia-faq">
                <div className="hia-sec-label">{state.faqEyebrow}</div>
                <h2 className="hia-sec-h2">
                  Everything You Wanted to Ask Before That{" "}
                  <span className="hia-accent">Strategy Call.</span>
                </h2>
                <p className="hia-sec-sub">
                  If you don&apos;t see your question below — whether it&apos;s
                  about paid ads, review systems, or how to{" "}
                  <Link
                    href="/services/gmb-verification-help"
                    className="hia-inline-link"
                  >
                    verify a new Google Business Profile
                  </Link>{" "}
                  — just include it in the audit form and we will answer it in
                  the written report. You can also browse the full menu of{" "}
                  <Link href="/services" className="hia-inline-link">
                    digital marketing services
                  </Link>{" "}
                  we run for local service businesses.
                </p>
                <HiaFaqAccordion items={state.faqs} defaultOpen={0} />
              </section>

              {/* Mobile inline form (bottom) */}
              <div
                className="hia-mob-form d-block d-lg-none"
                id="hia-audit"
              >
                <HomeInspectorLeadForm />
              </div>
            </div>

            {/* RIGHT: STICKY FORM */}
            <div
              className="hia-form-col d-none d-lg-block"
              data-scroll-target="hia-audit hia-audit-top"
            >
              <div className="hia-sticky-form" id="hia-audit-desktop">
                <HomeInspectorLeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="hia-final-cta">
          <div className="hia-fc-inner">
            <div className="hia-eyebrow hia-eyebrow-light">
              Start With the Free Audit
            </div>
            <h2>
              Get a Marketing Audit Built For{" "}
              <span className="hia-accent">{state.final.accent}</span>
            </h2>
            <p className="hia-fc-lede">{state.final.lede}</p>
            <ul className="hia-final-check">
              <li>No long-term contracts — every plan month to month</li>
              <li>
                Audit delivered as a PDF, not a high-pressure sales meeting
              </li>
              <li>
                Strategy call only if you decide it&apos;s worth your time
              </li>
              <li>
                Plans built for solo and multi-inspector {stateName} firms
              </li>
              <li>
                Specializing in home inspection marketing across {stateName} and
                nationwide
              </li>
            </ul>
            <div className="hia-fc-actions">
              <Link
                href={SITE_CONTACT.phoneHref}
                className="hia-fc-call"
              >
                Call {SITE_CONTACT.phoneDisplay}
              </Link>
              <HashScrollLink href="#hia-audit" className="hia-fc-form">
                Submit My Free Audit →
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hia-footer">
          <div className="hia-footer-inner">
            <div className="hia-footer-top">
              <div className="hia-footer-brand">
                <Link
                  href="/"
                  className="hia-footer-logo"
                  aria-label="Zonic Media"
                >
                  ZONIC
                </Link>
                <p>
                  Zonic Media is a full-service digital marketing agency for
                  home inspectors and local businesses across the United
                  States. Headquartered in Dover, Delaware. Specializing in
                  local SEO, Google Business Profile optimization, paid
                  advertising, and lead generation.
                </p>
              </div>
              <div className="hia-footer-links">
                <div className="hia-footer-col">
                  <h5>Services</h5>
                  <Link href="/services/local-seo-for-home-services">
                    Local SEO
                  </Link>
                  <Link href="/services/gmb-reinstatement-help">
                    Google Business Profile
                  </Link>
                  <Link href="/services/google-ads">Google Ads Management</Link>
                  <Link href="/services">Website Design</Link>
                  <Link href="/services">Review Management</Link>
                </div>
                <div className="hia-footer-col">
                  <h5>Industries</h5>
                  <Link href="/services/home-inspector-marketing">
                    Home Inspectors
                  </Link>
                  <Link href="/services/industry/local-seo-for-roofing-companies">
                    Roofing Contractors
                  </Link>
                  <Link href="/services/industry/local-seo-services-for-hvac">
                    HVAC Companies
                  </Link>
                  <Link href="/services/industry/dental-seo-services">
                    Dental Practices
                  </Link>
                  <Link href="/services/industry/pest-control">
                    Pest Control
                  </Link>
                  <Link href="/services/industry/real-estate-seo-services">
                    Real Estate Agents
                  </Link>
                </div>
                <div className="hia-footer-col">
                  <h5>Contact</h5>
                  <Link href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </Link>
                  <Link href={SITE_CONTACT.emailHref}>
                    {SITE_CONTACT.email}
                  </Link>
                  <span>8 The Green, STE B</span>
                  <span>Dover, DE 19901</span>
                </div>
              </div>
            </div>
            <div className="hia-footer-bottom">
              <span>© 2026 Zonic Media LLC. All rights reserved.</span>
              <span>Local SEO · Google Ads · GBP · Web Design · Reviews</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
