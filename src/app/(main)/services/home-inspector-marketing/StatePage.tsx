import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import "@/app/style/homeInspAgency.css";
import "@/app/style/homeInspState.css";

import HomeInspectorLeadForm from "@/app/components/HomeInspectorLeadForm";
import HiaFaqAccordion from "@/app/components/HiaFaqAccordion";
import HashScrollLink from "@/app/components/HashScrollLink";
import HeroTrustBadges from "@/app/components/HeroTrustBadges";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";

import {
  StateContent,
  buildDefaultTemplate,
  STATE_CONTENT,
} from "./stateContent";
import StateSiblingLinks from "@/app/components/StateSiblingLinks";
import {
  CalendarFillChart,
  MapPackClimb,
  ProofCounters,
} from "@/app/components/StateResultVisuals";

// Code-split so the widget JavaScript loads after the hero has painted; the
// server still renders its markup, so nothing changes for users or Google.
const ClutchWidget = dynamic(() => import("@/app/components/ClutchWidget"));

const trustItems = [
  { num: "500+", label: "Businesses Ranked" },
  { num: "4.9/5", label: "Client Satisfaction" },
  { num: "95%", label: "Growth Success Rate" },
  { num: "$197", label: "Plans Start At" },
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

/** Renders [anchor](/path) markdown links inside a copy string. */
function renderRich(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link key={`l-${match.index}`} href={match[2]} className="hia-inline-link">
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

export default function StatePage({ state }: { state: StateContent }) {
  const stateName = state.name;
  const copy = state.template ?? buildDefaultTemplate(stateName);
  const services = copy.services.cards;
  const priceCards = copy.pricing.cards;
  const channelTable = copy.channels.rows;
  // Animated visuals ship with the state-written pages only.
  const showVisuals = Boolean(state.template);
  const leadCity = state.cities.cards[0]?.h.split(/[,&(—]/)[0].trim() ?? stateName;

  const pageUrl = `https://www.zonicllc.com/services/home-inspector-marketing/${state.slug}`;
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

  const processStepsLocal = copy.process.steps.map((step, i) => ({
    n: String(i + 1),
    ...step,
  }));

  return (
    <>
      <script
        id="his-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="his-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="his-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
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
                      <h3>{c.h}</h3>
                      <p>{c.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {showVisuals && (
                <MapPackClimb stateName={stateName} city={leadCity} />
              )}

              {/* SERVICES */}
              <section
                className="hia-section hia-services-sec"
                id="hia-services"
              >
                <div className="hia-sec-label">{copy.services.eyebrow}</div>
                <h2 className="hia-sec-h2">
                  {copy.services.headlinePre}{" "}
                  <span className="hia-accent">{copy.services.accent}</span>
                </h2>
                <p className="hia-sec-sub">{renderRich(copy.services.lede)}</p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    {copy.services.cta} →
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
                <div className="hia-sec-label">{copy.channels.eyebrow}</div>
                <h2 className="hia-sec-h2">
                  {copy.channels.headlinePre}{" "}
                  <span className="hia-accent">{copy.channels.accent}</span>
                </h2>
                <p className="hia-sec-sub">{renderRich(copy.channels.lede)}</p>
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
                      {channelTable.map((row, i) => (
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

              {showVisuals && <CalendarFillChart stateName={stateName} />}

              {/* PROCESS */}
              <section className="hia-section">
                <div className="hia-sec-label">{copy.process.eyebrow}</div>
                <h2 className="hia-sec-h2">
                  {copy.process.headlinePre}{" "}
                  <span className="hia-accent">{copy.process.accent}</span>
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
                <div className="hia-sec-label">{copy.results.eyebrow}</div>
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
                        <h3>{s.h}</h3>
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
                    {copy.results.cta} →
                  </HashScrollLink>
                </div>
              </section>

              {showVisuals && <ProofCounters stateName={stateName} />}

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
                    {copy.citiesCta} →
                  </HashScrollLink>
                </div>
                <div className="his-city-grid">
                  {state.cities.cards.map((c, i) => (
                    <div className="his-city-card" key={i}>
                      <h3>{c.h}</h3>
                      <p>{c.p}</p>
                      {c.link.length > 1 && c.link.startsWith("#") ? (
                        <HashScrollLink href={c.link} className="his-city-link">
                          {c.linkLabel} →
                        </HashScrollLink>
                      ) : (
                        <Link href={c.link} className="his-city-link">
                          {c.linkLabel} →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* CLUTCH REVIEWS */}
              <section
                className="hia-section hia-reviews-sec"
                id="hia-reviews"
              >
                <div className="hia-sec-label">{copy.reviews.eyebrow}</div>
                <h2 className="hia-sec-h2">
                  {copy.reviews.headlinePre}{" "}
                  <span className="hia-accent">{copy.reviews.accent}</span>
                </h2>
                <p className="hia-sec-sub">{renderRich(copy.reviews.lede)}</p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit"
                    className="hia-btn hia-btn-primary"
                  >
                    {copy.reviews.cta} →
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
                <div className="hia-sec-label">{copy.pricing.eyebrow}</div>
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
                  {copy.faq.headlinePre}{" "}
                  <span className="hia-accent">{copy.faq.accent}</span>
                </h2>
                <p className="hia-sec-sub">{renderRich(copy.faq.lede)}</p>
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
              {copy.final.eyebrow}
            </div>
            <h2>
              {copy.final.headlinePre}{" "}
              <span className="hia-accent">{state.final.accent}</span>
            </h2>
            <p className="hia-fc-lede">{state.final.lede}</p>
            <ul className="hia-final-check">
              {copy.final.checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="hia-fc-actions">
              <Link
                href={SITE_CONTACT.phoneHref}
                className="hia-fc-call"
              >
                Call {SITE_CONTACT.phoneDisplay}
              </Link>
              <HashScrollLink href="#hia-audit" className="hia-fc-form">
                {copy.final.cta} →
              </HashScrollLink>
            </div>
          </div>
        </section>

        <StateSiblingLinks
          basePath="/services/home-inspector-marketing"
          programLabel="Home inspector marketing"
          states={STATE_CONTENT}
          currentSlug={state.slug}
        />

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
                  <div className="hia-footer-title">Services</div>
                  <Link href="/services/local-seo-for-home-services">
                    Local SEO
                  </Link>
                  <Link href="/services/gbp-reinstatement-service">
                    Google Business Profile
                  </Link>
                  <Link href="/services/google-ads">Google Ads Management</Link>
                  <Link href="/services">Website Design</Link>
                  <Link href="/services">Review Management</Link>
                </div>
                <div className="hia-footer-col">
                  <div className="hia-footer-title">Industries</div>
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
                  <Link href="/services/industry/seo-services-for-pest-control">
                    Pest Control
                  </Link>
                  <Link href="/services/industry/real-estate-seo-services">
                    Real Estate Agents
                  </Link>
                </div>
                <div className="hia-footer-col">
                  <div className="hia-footer-title">Contact</div>
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
