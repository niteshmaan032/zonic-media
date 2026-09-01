import Image from "next/image";
import Link from "next/link";

import "@/app/style/homeInspAgency.css";
import "@/app/style/homeInspState.css";
import "@/app/style/hvacExtra.css";

import HvacLeadForm from "@/app/components/HvacLeadForm";
import HiaFaqAccordion from "@/app/components/HiaFaqAccordion";
import HashScrollLink from "@/app/components/HashScrollLink";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";

import {
  StateContent,
  BASE_TRUST,
  SERVICES,
  PRICE_CARDS,
} from "./stateContent";

export default function StatePage({ state }: { state: StateContent }) {
  const stateName = state.name;
  const trustItems = [...BASE_TRUST, state.hero.trustExtra];

  const pageUrl = `https://zonicllc.com/services/hvac-marketing-agency/${state.slug}`;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    {
      name: "HVAC Marketing Agency",
      url: "/services/hvac-marketing-agency",
    },
    {
      name: stateName,
      url: `/services/hvac-marketing-agency/${state.slug}`,
    },
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
    pageUrl: `/services/hvac-marketing-agency/${state.slug}`,
    areaServed: stateName,
  });

  const serviceJsonLd = buildServiceJsonLd({
    name: `HVAC Marketing in ${stateName}`,
    description: state.metaDescription,
    pageUrl: `/services/hvac-marketing-agency/${state.slug}`,
    serviceType: "HVAC Marketing",
    areaServed: stateName,
  });

  return (
    <>
      <script
        id="hvac-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="hvac-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="hvac-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        id="hvac-service-schema"
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

        {/* Minimal NAV — logo image */}
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
            <HashScrollLink href="#hia-map">Map Pack</HashScrollLink>
            <HashScrollLink href="#hia-strategy">Strategy</HashScrollLink>
            <HashScrollLink href="#hia-cities">
              {stateName} Cities
            </HashScrollLink>
            <HashScrollLink href="#hia-faq">FAQ</HashScrollLink>
          </div>
          <div className="hia-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="hia-nav-phone">
              {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#hia-audit-top" className="hia-nav-cta">
              Free {stateName} Audit
            </HashScrollLink>
          </div>
        </nav>

        <div className="hia-main-wrapper">
          <div className="hia-row">
            {/* LEFT: CONTENT */}
            <div className="hia-content-col">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="his-breadcrumb">
                <Link href="/services/hvac-marketing-agency">
                  HVAC Marketing
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
                    Get Free {stateName} Audit →
                  </HashScrollLink>
                  <Link
                    href={SITE_CONTACT.phoneHref}
                    className="hia-btn hia-btn-ghost"
                  >
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>

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
                  <HvacLeadForm />
                </div>
              </section>

              {/* PROBLEM */}
              <section className="hia-section" id="hia-problem">
                <div className="hia-sec-label">{state.problem.eyebrow}</div>
                <h2 className="hia-sec-h2">{state.problem.title}</h2>
                <p className="hia-sec-sub">{state.problem.lede}</p>
                <div className="hia-section-cta">
                  <Link href={SITE_CONTACT.phoneHref} className="hia-cta-call">
                    <span className="hia-cta-call-dot" aria-hidden="true" />
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

              {/* MAP PACK */}
              <section className="hia-section hia-results-sec" id="hia-map">
                <div className="hia-sec-label">{state.mapPack.eyebrow}</div>
                <h2 className="hia-sec-h2">{state.mapPack.title}</h2>
                <div className="hia-results-prose">
                  {state.mapPack.paras.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Check My Map Pack Position →
                  </HashScrollLink>
                </div>
              </section>

              {/* SERVICES */}
              <section
                className="hia-section hia-services-sec"
                id="hia-services"
              >
                <div className="hia-sec-label">
                  What an HVAC Marketing Agency Delivers
                </div>
                <h2 className="hia-sec-h2">
                  Six Marketing Functions, Tuned for {stateName}{" "}
                  <span className="hia-accent">HVAC Economics.</span>
                </h2>
                <p className="hia-sec-sub">
                  Every service below is calibrated to how {stateName} HVAC
                  customers actually find and choose contractors — categories,
                  attributes, schema, content cadence, ad copy, and review
                  templates designed around HVAC search behavior. It is the same
                  discipline behind our{" "}
                  <Link
                    href="/services/industry/local-seo-services-for-hvac"
                    className="hvac-inline-link"
                  >
                    local SEO for HVAC companies
                  </Link>
                  , layered with the broader{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="hvac-inline-link"
                  >
                    local SEO for home services
                  </Link>{" "}
                  playbook that wins the map pack.
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
                  {SERVICES.map((s, i) => (
                    <article className="hia-svc-card" key={i}>
                      <div className="hia-svc-num">{s.num}</div>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                    </article>
                  ))}
                </div>
              </section>

              {/* STRATEGY */}
              <section className="hia-section" id="hia-strategy">
                <div className="hia-sec-label">{state.strategy.eyebrow}</div>
                <h2 className="hia-sec-h2">{state.strategy.title}</h2>
                <p className="hia-sec-sub">{state.strategy.lede}</p>
                <ul className="hvac-strategy">
                  {state.strategy.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
                <div className="hia-section-cta">
                  <Link href={SITE_CONTACT.phoneHref} className="hia-cta-call">
                    <span className="hia-cta-call-dot" aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>
              </section>

              {/* CITIES */}
              <section className="hia-section" id="hia-cities">
                <div className="hia-sec-label">{state.cities.eyebrow}</div>
                <h2 className="hia-sec-h2">{state.cities.title}</h2>
                <p className="hia-sec-sub">{state.cities.lede}</p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Match Me to a {stateName} City Plan →
                  </HashScrollLink>
                </div>
                <div className="hia-industry-grid">
                  {state.cities.cards.map((c, i) => (
                    <div className="hia-industry-card" key={i}>
                      <h4>{c.h}</h4>
                      <p>{c.p}</p>
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
                  What HVAC Contractors and Other Service Businesses{" "}
                  <span className="hia-accent">Say About Working with Us.</span>
                </h2>
                <p className="hia-sec-sub">
                  Verified reviews from Clutch — the independent platform
                  agencies can&apos;t edit, filter, or fake. The same operators
                  who hired us for{" "}
                  <Link
                    href="/local-seo-google-business-optimization"
                    className="hvac-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>
                  , to{" "}
                  <Link
                    href="/services/gmb-verification-help"
                    className="hvac-inline-link"
                  >
                    verify a new GBP
                  </Link>
                  , and to win the map pack left these.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
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
                  Three Plans Built for Where Your {stateName} HVAC Company is{" "}
                  <span className="hia-accent">Right Now.</span>
                </h2>
                <p className="hia-sec-sub">
                  Pick the plan that fits where you are today — move up or down
                  between tiers any month. Ad spend for{" "}
                  <Link href="/services/google-ads" className="hvac-inline-link">
                    Google Ads management
                  </Link>{" "}
                  is separate from the management fee. No setup fees, no
                  twelve-month lockups, and{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="hvac-inline-link"
                  >
                    Google Business Profile reinstatement
                  </Link>{" "}
                  is included on every plan.
                </p>
                <div className="hia-price-grid">
                  {PRICE_CARDS.map((p, i) => (
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
                  If you don&apos;t see your question below, just include it in
                  the audit form and we will answer it in the written report.
                  You can also explore our broader{" "}
                  <Link
                    href="/services/hvac-marketing-agency"
                    className="hvac-inline-link"
                  >
                    HVAC marketing
                  </Link>{" "}
                  program or the conversion-focused{" "}
                  <Link href="/services/web-design" className="hvac-inline-link">
                    website design services
                  </Link>{" "}
                  behind every campaign.
                </p>
                <HiaFaqAccordion items={state.faqs} defaultOpen={0} />
              </section>

              {/* Mobile inline form (bottom) */}
              <div className="hia-mob-form d-block d-lg-none" id="hia-audit">
                <HvacLeadForm />
              </div>
            </div>

            {/* RIGHT: STICKY FORM */}
            <div
              className="hia-form-col d-none d-lg-block"
              data-scroll-target="hia-audit hia-audit-top"
            >
              <div className="hia-sticky-form" id="hia-audit-desktop">
                <HvacLeadForm />
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
              Get an {stateName} HVAC Marketing Audit Built Around{" "}
              <span className="hia-accent">{state.final.accentTail}</span>
            </h2>
            <p className="hia-fc-lede">{state.final.lede}</p>
            <ul className="hia-final-check">
              {state.final.checks.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <div className="hia-fc-actions">
              <Link href={SITE_CONTACT.phoneHref} className="hia-fc-call">
                Call {SITE_CONTACT.phoneDisplay}
              </Link>
              <HashScrollLink href="#hia-audit" className="hia-fc-form">
                Submit My Free Audit →
              </HashScrollLink>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
