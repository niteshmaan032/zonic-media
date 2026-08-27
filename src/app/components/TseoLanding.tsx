import type { CSSProperties, ReactNode } from "react";
import "@/app/style/templateSeo.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import RelatedServices from "@/app/components/RelatedServices";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import {
  FiArrowUpRight,
  FiImage,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiSearch,
  FiStar,
  FiX,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";

/*
 * Shared landing template on the approved local-SEO niche layout
 * (templateSeo.css, scoped .tseo-page — the design behind the HVAC, roofing,
 * plumber, chiropractor and real-estate industry pages). Used by the Aug 2026
 * SEO-plan service pages (seo-services, local-seo-for-small-business,
 * local-seo-packages) so they render pixel-identical to those niche pages.
 * All mockups (before/after dashboard, GBP card, map pack, rank tracker,
 * review growth, coverage map, audit ring) are the template's own components,
 * re-labelled per page via data.
 */

export type TseoFaq = { question: string; answer: string };

export type TseoLandingData = {
  hero: {
    eyebrow: string;
    h1Start: string;
    h1Highlight: string;
    sub: ReactNode;
    cta: string;
    dash: {
      title: string;
      mapQuery: string;
      youLabel: string;
      competitorA: string;
      competitorB: string;
      competitorC: string;
      chartLabel: string;
      afterNum: string;
      afterDelta: string;
      beforeNum: string;
      beforeRank: string;
      afterFoot: { a: string; b: string; c: string };
      beforeFoot: { a: string; b: string; c: string };
    };
    floatA: { strong: string; text: string };
    floatB: { strong: string; text: string };
    stats: { icon: ReactNode; num: string; label: string }[];
  };
  problem: {
    eyebrow: string;
    h2Start: string;
    h2Highlight: string;
    leads: ReactNode[];
    checks: string[];
    gbp: {
      name: string;
      category: string;
      rows: { label: string; value: string }[];
      chip: string;
    };
  };
  services: {
    eyebrow: string;
    h2: string;
    cards: { icon: ReactNode; title: string; desc: ReactNode }[];
  };
  /** Optional pricing tier section (packages page). Rendered after services.
      Card design mirrors the approved /website-design-agency-us/offer pricing
      cards (numbered head, large price, check list, full-width CTA, featured
      middle card). */
  pricing?: {
    eyebrow: string;
    h2: string;
    lead: ReactNode;
    tiers: {
      num: string;
      kicker: string;
      name: string;
      price: string;
      priceNote: string;
      subtitle: string;
      features: string[];
      cta: string;
      featured?: boolean;
    }[];
    note?: string;
  };
  band: {
    eyebrow: string;
    h2: string;
    leads: ReactNode[];
    cta: string;
    mappack: {
      query: string;
      youName: string;
      youMeta: string;
      rowB: { name: string; meta: string };
      rowC: { name: string; meta: string };
    };
  };
  process: {
    h2: string;
    steps: { tag: string; title: string; desc: ReactNode; chips?: string[] }[];
    visualTitle: string;
    visualBars: { label: string; val: number }[];
    ctaPrimary: string;
  };
  results: {
    h2: string;
    lead: ReactNode;
    cards: { icon: ReactNode; industry: string; metric: string; label: string; desc: string }[];
  };
  compare: {
    h2: string;
    lead: ReactNode;
    themTitle: string;
    themSub: string;
    them: string[];
    usTitle: string;
    usSub: string;
    us: string[];
    scoreSub: string;
    scoreRows: { label: string; before: number; after: number }[];
  };
  tracking: {
    h2Start: string;
    h2Highlight: string;
    leads: ReactNode[];
    cta: string;
    rankRows: { kw: string; pos: string; delta: string }[];
  };
  why: {
    h2: string;
    lead: string;
    cards: { icon: ReactNode; title: string; desc: ReactNode }[];
    banner: {
      eyebrow: string;
      h3: string;
      p: string;
      checks: string[];
      cta: string;
      auditDesc: string;
      auditScore: string;
      auditRows: { label: string; flag: string }[];
    };
  };
  marquee: string[];
  nationwide: {
    h2: string;
    lead: ReactNode;
    chips: string[];
  };
  faqs: {
    h2: string;
    lead: ReactNode;
    cta: string;
    items: TseoFaq[];
  };
  grow: {
    h2: string;
    cards: { href: string; icon: ReactNode; title: string; desc: string; cta: string }[];
  };
  form: {
    h2: string;
    lead: string;
    formType: string;
    badge: string;
    title: string;
    subtitle: string;
    submitText: string;
    messageLabel: string;
    messagePlaceholder: string;
    defaultServices: string[];
  };
  relatedCurrent: string;
};

const ReviewBarHeights = [28, 36, 44, 52, 58, 68, 74];

const CoveragePins = [
  { city: "Dover, DE", win: "#1 Map Pack", top: "26%", left: "78%" },
  { city: "Philadelphia, PA", win: "Top 3", top: "12%", left: "58%" },
  { city: "Miami, FL", win: "+3× leads", top: "68%", left: "70%" },
  { city: "Austin, TX", win: "+212% calls", top: "66%", left: "34%" },
  { city: "Denver, CO", win: "Top 3", top: "24%", left: "22%" },
  { city: "Phoenix, AZ", win: "#1 rankings", top: "58%", left: "10%" },
];

export default function TseoLanding({ data }: { data: TseoLandingData }) {
  const {
    hero,
    problem,
    services,
    pricing,
    band,
    process,
    results,
    compare,
    tracking,
    why,
    marquee,
    nationwide,
    faqs,
    grow,
    form,
  } = data;

  return (
    <>
      <div className="tseo-page">
        <main>
          {/* 1. Hero */}
          <section className="tseo-hero">
            <div className="tseo-container">
              <div className="tseo-hero-grid">
                <div className="tseo-hero-copy">
                  <p className="tseo-eyebrow">{hero.eyebrow}</p>
                  <h1 className="tseo-hero-h1">
                    {hero.h1Start}{" "}
                    <span className="tseo-hl">{hero.h1Highlight}</span>
                  </h1>
                  <p className="tseo-hero-sub">{hero.sub}</p>
                  <div className="tseo-hero-badges" aria-label="Partner badges">
                    <a
                      href="https://clutch.co/profile/zonic-media?badge=11431"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Image
                        className="tseo-hero-badge"
                        width={74}
                        height={74}
                        src="/images/clutch-top-company-2026.png"
                        alt="Top Clutch Digital Marketing Company Delaware 2026"
                      />
                    </a>
                    <Image
                      className="tseo-hero-badge"
                      width={74}
                      height={74}
                      src="/images/Partner.png"
                      alt="Yelp Advertising Partner"
                    />
                    <a
                      href="https://www.trustpilot.com/review/zonicllc.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="tseo-hero-badge-trustpilot"
                        width={104}
                        height={50}
                        src="/images/trust-black.png"
                        alt="Zonic Media reviews on Trustpilot"
                      />
                    </a>
                  </div>
                  <div className="tseo-hero-ctas">
                    <HashScrollLink href="#tseo-form" className="tseo-btn" offset={120}>
                      {hero.cta}
                      <span className="tseo-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                    <a href={SITE_CONTACT.phoneHref} className="tseo-btn-ghost">
                      <FiPhoneCall aria-hidden="true" />
                      Call {SITE_CONTACT.phoneDisplay}
                    </a>
                  </div>
                  <div className="tseo-hero-proof">
                    <span className="tseo-hero-proof-stars" aria-hidden="true">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <p>
                      <strong>Rated 4.9/5</strong> by the local businesses we
                      rank
                    </p>
                  </div>
                </div>

                <div className="tseo-hero-visual">
                  <div className="tseo-hero-dash-wrap">
                    <div className="tseo-hero-dash" aria-hidden="true">
                      <div className="tseo-dash-head">
                        <h3>{hero.dash.title}</h3>
                      </div>
                      <div className="tseo-ba-toggle-row">
                        <span className="tseo-ba-toggle">
                          <span className="tseo-ba-thumb" />
                          <span className="tseo-ba-label tseo-ba-label--before">
                            Before
                          </span>
                          <span className="tseo-ba-label tseo-ba-label--after">
                            After
                          </span>
                        </span>
                      </div>
                      <div className="tseo-ba-stage">
                        {/* AFTER state (base layer) */}
                        <div className="tseo-ba-panel">
                          <div className="tseo-dash-body">
                            <div className="tseo-dash-list">
                              <p className="tseo-dash-sub">
                                Map pack · &ldquo;{hero.dash.mapQuery}&rdquo;
                              </p>
                              <div className="tseo-dash-li tseo-dash-li--you">
                                <FiMapPin />
                                <span>{hero.dash.youLabel}</span>
                                <em>#1</em>
                              </div>
                              <div className="tseo-dash-li">
                                <FiMapPin />
                                <span>{hero.dash.competitorA}</span>
                                <em>#2</em>
                              </div>
                              <div className="tseo-dash-li">
                                <FiMapPin />
                                <span>{hero.dash.competitorB}</span>
                                <em>#3</em>
                              </div>
                              <div className="tseo-dash-review">
                                <FaStar />
                                4.9 · 187 reviews
                                <em>+32 this quarter</em>
                              </div>
                            </div>
                            <div className="tseo-dash-chart">
                              <p className="tseo-dash-sub">{hero.dash.chartLabel}</p>
                              <div className="tseo-dash-metric">
                                <p className="tseo-dash-metric-num">
                                  {hero.dash.afterNum}
                                </p>
                                <span className="tseo-dash-delta">
                                  {hero.dash.afterDelta}
                                </span>
                              </div>
                              <div className="tseo-dash-bars">
                                {[26, 34, 30, 42, 50, 46, 58, 66, 62, 78, 90, 104].map(
                                  (height, index) => (
                                    <span
                                      key={index}
                                      style={{ height: `${height}px` }}
                                    />
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="tseo-dash-foot">
                            <div>
                              <strong>#1</strong>
                              <span>{hero.dash.afterFoot.a}</span>
                            </div>
                            <div>
                              <strong>4.9★</strong>
                              <span>{hero.dash.afterFoot.b}</span>
                            </div>
                            <div>
                              <strong>+86%</strong>
                              <span>{hero.dash.afterFoot.c}</span>
                            </div>
                          </div>
                        </div>

                        {/* BEFORE state (fading overlay) */}
                        <div className="tseo-ba-panel tseo-ba-panel--before">
                          <div className="tseo-dash-body">
                            <div className="tseo-dash-list">
                              <p className="tseo-dash-sub">
                                Map pack · &ldquo;{hero.dash.mapQuery}&rdquo;
                              </p>
                              <div className="tseo-dash-li">
                                <FiMapPin />
                                <span>{hero.dash.competitorA}</span>
                                <em>#1</em>
                              </div>
                              <div className="tseo-dash-li">
                                <FiMapPin />
                                <span>{hero.dash.competitorB}</span>
                                <em>#2</em>
                              </div>
                              <div className="tseo-dash-li">
                                <FiMapPin />
                                <span>{hero.dash.competitorC}</span>
                                <em>#3</em>
                              </div>
                              <div className="tseo-dash-li tseo-dash-li--lost">
                                <FiMapPin />
                                <span>{hero.dash.youLabel}</span>
                                <em>{hero.dash.beforeRank}</em>
                              </div>
                            </div>
                            <div className="tseo-dash-chart">
                              <p className="tseo-dash-sub">{hero.dash.chartLabel}</p>
                              <div className="tseo-dash-metric">
                                <p className="tseo-dash-metric-num">
                                  {hero.dash.beforeNum}
                                </p>
                                <span className="tseo-dash-delta tseo-dash-delta--down">
                                  Page 2
                                </span>
                              </div>
                              <div className="tseo-dash-bars tseo-dash-bars--muted">
                                {[48, 34, 42, 28, 36, 24, 32, 20, 28, 16, 22, 12].map(
                                  (height, index) => (
                                    <span
                                      key={index}
                                      style={{ height: `${height}px` }}
                                    />
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="tseo-dash-foot">
                            <div>
                              <strong>{hero.dash.beforeRank}</strong>
                              <span>{hero.dash.beforeFoot.a}</span>
                            </div>
                            <div>
                              <strong>4.1★</strong>
                              <span>{hero.dash.beforeFoot.b}</span>
                            </div>
                            <div>
                              <strong>−8%</strong>
                              <span>{hero.dash.beforeFoot.c}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tseo-hero-floats">
                      <div className="tseo-float-card">
                        <span className="tseo-float-card-icon">
                          <FiMapPin aria-hidden="true" />
                        </span>
                        <p>
                          <strong>{hero.floatA.strong}</strong>
                          {hero.floatA.text}
                        </p>
                      </div>
                      <div className="tseo-float-card">
                        <span className="tseo-float-card-icon tseo-float-card-icon--green">
                          <FiStar aria-hidden="true" />
                        </span>
                        <p>
                          <strong>{hero.floatB.strong}</strong>
                          {hero.floatB.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tseo-hero-stats">
                {hero.stats.map((stat) => (
                  <div className="tseo-stat" key={stat.label}>
                    <span className="tseo-stat-icon">{stat.icon}</span>
                    <div>
                      <p className="tseo-stat-num">{stat.num}</p>
                      <p className="tseo-stat-label">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Problem / solution */}
          <section className="tseo-problem">
            <div className="tseo-container">
              <div className="tseo-problem-grid">
                <div className="tseo-gbp-wrap" aria-hidden="true">
                  <div className="tseo-gbp">
                    <div className="tseo-gbp-head">
                      <span className="tseo-gbp-avatar">
                        <FiImage />
                      </span>
                      <div>
                        <strong>
                          {problem.gbp.name}
                          <MdOutlineVerifiedUser />
                        </strong>
                        <span className="tseo-gbp-stars">
                          <FaStar />
                          4.9 (187 reviews)
                        </span>
                      </div>
                    </div>
                    <p className="tseo-gbp-meta">
                      {problem.gbp.category} · <em>Open now</em>
                    </p>
                    <div className="tseo-gbp-actions">
                      <span className="tseo-gbp-action tseo-gbp-action--solid">
                        <FiPhoneCall />
                        Call
                      </span>
                      <span className="tseo-gbp-action">
                        <FiMapPin />
                        Directions
                      </span>
                      <span className="tseo-gbp-action">
                        <FiArrowUpRight />
                        Website
                      </span>
                    </div>
                    {problem.gbp.rows.map((row) => (
                      <div className="tseo-gbp-row" key={row.label}>
                        <span>{row.label}</span>
                        <em>{row.value}</em>
                      </div>
                    ))}
                  </div>
                  <span className="tseo-gbp-chip">
                    <FaStar aria-hidden="true" />
                    {problem.gbp.chip}
                  </span>
                </div>
                <div>
                  <p className="tseo-eyebrow">{problem.eyebrow}</p>
                  <h2 className="tseo-h2">
                    {problem.h2Start}{" "}
                    <span className="tseo-hl-text">{problem.h2Highlight}</span>
                  </h2>
                  {problem.leads.map((lead, index) => (
                    <p className="tseo-lead" key={index}>
                      {lead}
                    </p>
                  ))}
                  <div className="tseo-checks">
                    {problem.checks.map((check) => (
                      <div className="tseo-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>
                  <Link href="/about" className="tseo-btn">
                    More About Zonic Media
                    <span className="tseo-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Deliverables */}
          <section className="tseo-services" id="tseo-services">
            <div className="tseo-container">
              <div className="tseo-sec-head">
                <div>
                  <p className="tseo-eyebrow">{services.eyebrow}</p>
                  <h2 className="tseo-h2">{services.h2}</h2>
                </div>
                <Link href="/services" className="tseo-link-arrow">
                  View all services <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
              <div className="tseo-cards">
                {services.cards.map((card) => (
                  <article className="tseo-card" key={card.title}>
                    <span className="tseo-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 3b. Optional pricing tiers (packages page) — card design mirrors
              the /website-design-agency-us/offer pricing cards. */}
          {pricing ? (
            <section className="tseo-services" id="tseo-pricing">
              <div className="tseo-container">
                <div className="tseo-sec-head-center">
                  <p className="tseo-eyebrow">{pricing.eyebrow}</p>
                  <h2 className="tseo-h2">{pricing.h2}</h2>
                  <p className="tseo-lead">{pricing.lead}</p>
                </div>
                <div className="tseo-price-grid">
                  {pricing.tiers.map((tier) => (
                    <article
                      className={
                        tier.featured
                          ? "tseo-price-card tseo-price-card--featured"
                          : "tseo-price-card"
                      }
                      key={tier.name}
                    >
                      {tier.featured ? (
                        <div className="tseo-price-popular">Most popular</div>
                      ) : null}
                      <div className="tseo-price-head">
                        <span>{tier.num}</span>
                        <small>{tier.kicker}</small>
                      </div>
                      <h3>{tier.name}</h3>
                      <div className="tseo-price-amount">
                        {tier.price} <span>{tier.priceNote}</span>
                      </div>
                      <p>{tier.subtitle}</p>
                      <ul>
                        {tier.features.map((feature) => (
                          <li key={feature}>
                            <FaCircleCheck aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <HashScrollLink
                        href="#tseo-form"
                        className="tseo-price-cta"
                        offset={120}
                      >
                        {tier.cta}
                        <span className="tseo-price-cta-circ">
                          <FiArrowUpRight aria-hidden="true" />
                        </span>
                      </HashScrollLink>
                    </article>
                  ))}
                </div>
                {pricing.note ? (
                  <p className="tseo-price-note">
                    <MdOutlineVerifiedUser aria-hidden="true" />
                    {pricing.note}
                  </p>
                ) : null}
              </div>
            </section>
          ) : null}

          {/* 4. Dark band + map pack mockup */}
          <section className="tseo-band">
            <div className="tseo-band-grid">
              <div className="tseo-band-content">
                <p className="tseo-eyebrow">{band.eyebrow}</p>
                <h2 className="tseo-h2">{band.h2}</h2>
                {band.leads.map((lead, index) => (
                  <p className="tseo-lead" key={index}>
                    {lead}
                  </p>
                ))}
                <HashScrollLink href="#tseo-form" className="tseo-btn" offset={120}>
                  {band.cta}
                  <span className="tseo-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>

              <div className="tseo-mappack" aria-hidden="true">
                <div className="tseo-mappack-map">
                  <span className="tseo-map-pin tseo-map-pin--a">
                    <FiMapPin />
                  </span>
                  <span className="tseo-map-pin tseo-map-pin--you">
                    <FiMapPin />
                  </span>
                  <span className="tseo-map-pin tseo-map-pin--b">
                    <FiMapPin />
                  </span>
                </div>
                <div className="tseo-mappack-bar">
                  <FiSearch />
                  {band.mappack.query}
                </div>
                <div className="tseo-mappack-list">
                  <p className="tseo-mappack-title">Google · Local results</p>
                  <div className="tseo-mappack-row tseo-mappack-row--you">
                    <span className="tseo-mappack-thumb">
                      <FiImage />
                    </span>
                    <span className="tseo-mappack-info">
                      <strong>{band.mappack.youName}</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        {band.mappack.youMeta}{" "}
                        <span className="tseo-mappack-open">Open now</span>
                      </span>
                    </span>
                    <span className="tseo-mappack-badge">That&apos;s you</span>
                    <span className="tseo-mappack-actions">
                      <span className="tseo-mappack-action">
                        <FiPhoneCall />
                        Call
                      </span>
                      <span className="tseo-mappack-action tseo-mappack-action--ghost">
                        <FiArrowUpRight />
                        Directions
                      </span>
                    </span>
                  </div>
                  <div className="tseo-mappack-row">
                    <span className="tseo-mappack-thumb">
                      <FiImage />
                    </span>
                    <span className="tseo-mappack-info">
                      <strong>{band.mappack.rowB.name}</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        {band.mappack.rowB.meta}
                      </span>
                    </span>
                  </div>
                  <div className="tseo-mappack-row">
                    <span className="tseo-mappack-thumb">
                      <FiImage />
                    </span>
                    <span className="tseo-mappack-info">
                      <strong>{band.mappack.rowC.name}</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        {band.mappack.rowC.meta}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Process */}
          <section className="tseo-process" id="tseo-process">
            <div className="tseo-container">
              <div className="tseo-sec-head">
                <div>
                  <p className="tseo-eyebrow">How It Works</p>
                  <h2 className="tseo-h2">{process.h2}</h2>
                </div>
                <HashScrollLink href="#tseo-form" className="tseo-link-arrow" offset={120}>
                  Start with step one <FiArrowUpRight aria-hidden="true" />
                </HashScrollLink>
              </div>
              <div className="tseo-bento">
                <article className="tseo-bento-card tseo-bento-card--s1">
                  <div className="tseo-bento-head">
                    <span className="tseo-bento-num" aria-hidden="true">
                      01
                    </span>
                    <span className="tseo-bento-tag">{process.steps[0].tag}</span>
                  </div>
                  <h3>{process.steps[0].title}</h3>
                  <p>{process.steps[0].desc}</p>
                  <div className="tseo-bento-visual" aria-hidden="true">
                    <p className="tseo-bento-visual-title">{process.visualTitle}</p>
                    {process.visualBars.map((bar) => (
                      <div className="tseo-bento-bar-row" key={bar.label}>
                        <div className="tseo-bento-bar-head">
                          <span>{bar.label}</span>
                          <span>{bar.val}%</span>
                        </div>
                        <div className="tseo-bento-bar-track">
                          <span
                            className="tseo-bento-bar-fill"
                            style={{ width: `${bar.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="tseo-bento-card tseo-bento-card--s2">
                  <div className="tseo-bento-head">
                    <span className="tseo-bento-num" aria-hidden="true">
                      02
                    </span>
                    <span className="tseo-bento-tag">{process.steps[1].tag}</span>
                  </div>
                  <h3>{process.steps[1].title}</h3>
                  <p>{process.steps[1].desc}</p>
                </article>

                <article className="tseo-bento-card tseo-bento-card--s3">
                  <div className="tseo-bento-head">
                    <span className="tseo-bento-num" aria-hidden="true">
                      03
                    </span>
                    <span className="tseo-bento-tag">{process.steps[2].tag}</span>
                  </div>
                  <h3>{process.steps[2].title}</h3>
                  <p>{process.steps[2].desc}</p>
                  {process.steps[2].chips ? (
                    <div className="tseo-bento-chips">
                      {process.steps[2].chips.map((chip) => (
                        <span className="tseo-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <HashScrollLink
                    href="#tseo-form"
                    className="tseo-btn tseo-bento-cta"
                    offset={120}
                  >
                    {process.ctaPrimary}
                    <span className="tseo-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </article>

                <article className="tseo-bento-card tseo-bento-card--s4">
                  <div className="tseo-bento-s4-copy">
                    <div className="tseo-bento-head">
                      <span className="tseo-bento-num" aria-hidden="true">
                        04
                      </span>
                      <span className="tseo-bento-tag">{process.steps[3].tag}</span>
                    </div>
                    <h3>{process.steps[3].title}</h3>
                    <p>{process.steps[3].desc}</p>
                  </div>
                  <div className="tseo-bento-s4-side">
                    {process.steps[3].chips ? (
                      <div className="tseo-bento-chips">
                        {process.steps[3].chips.map((chip) => (
                          <span className="tseo-bento-chip" key={chip}>
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <HashScrollLink
                      href="#tseo-form"
                      className="tseo-link-arrow"
                      offset={120}
                    >
                      Start with the free audit{" "}
                      <FiArrowUpRight aria-hidden="true" />
                    </HashScrollLink>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* 6. Results */}
          <section className="tseo-results">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Real Results</p>
                <h2 className="tseo-h2">{results.h2}</h2>
                <p className="tseo-lead">{results.lead}</p>
              </div>
              <div className="tseo-results-cards">
                {results.cards.map((card) => (
                  <article className="tseo-result-card" key={card.industry}>
                    <p className="tseo-result-ind">
                      {card.icon}
                      {card.industry}
                    </p>
                    <p className="tseo-result-metric">{card.metric}</p>
                    <p className="tseo-result-label">{card.label}</p>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Comparison */}
          <section className="tseo-compare">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">The Difference</p>
                <h2 className="tseo-h2">{compare.h2}</h2>
                <p className="tseo-lead">{compare.lead}</p>
              </div>
              <div className="tseo-compare-grid">
                <div className="tseo-compare-col tseo-compare-col--them">
                  <h3>{compare.themTitle}</h3>
                  <p className="tseo-compare-sub">{compare.themSub}</p>
                  <ul>
                    {compare.them.map((item) => (
                      <li key={item}>
                        <FiX aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tseo-compare-col tseo-compare-col--us">
                  <h3>{compare.usTitle}</h3>
                  <p className="tseo-compare-sub">{compare.usSub}</p>
                  <ul>
                    {compare.us.map((item) => (
                      <li key={item}>
                        <FaCircleCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="tseo-compare-col tseo-compare-col--score"
                  aria-hidden="true"
                >
                  <h3>Local Visibility Scorecard</h3>
                  <p className="tseo-compare-sub">{compare.scoreSub}</p>
                  <div className="tseo-score-rows">
                    {compare.scoreRows.map((row) => (
                      <div key={row.label}>
                        <div className="tseo-score-head">
                          <span>{row.label}</span>
                          <span className="tseo-score-vals">
                            {row.before}% → <strong>{row.after}%</strong>
                          </span>
                        </div>
                        <div className="tseo-score-track">
                          <span
                            className="tseo-score-fill"
                            style={{ "--w": `${row.after}%` } as CSSProperties}
                          />
                          <span
                            className="tseo-score-before"
                            style={{ "--b": `${row.before}%` } as CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tseo-score-legend">
                    <span>
                      <i className="tseo-score-legend-before" />
                      Before Zonic
                    </span>
                    <span>
                      <i />
                      After 6 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Live tracking mockups */}
          <section className="tseo-tracking">
            <div className="tseo-container">
              <div className="tseo-tracking-grid">
                <div>
                  <p className="tseo-eyebrow">Always Measurable</p>
                  <h2 className="tseo-h2">
                    {tracking.h2Start}{" "}
                    <span className="tseo-hl-text">{tracking.h2Highlight}</span>
                  </h2>
                  {tracking.leads.map((lead, index) => (
                    <p className="tseo-lead" key={index}>
                      {lead}
                    </p>
                  ))}
                  <HashScrollLink href="#tseo-form" className="tseo-btn" offset={120}>
                    {tracking.cta}
                    <span className="tseo-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                <div className="tseo-mocks" aria-hidden="true">
                  <div className="tseo-mock-card">
                    <div className="tseo-mock-head">
                      <h3>Keyword Rankings</h3>
                      <span className="tseo-mock-tag">All improving</span>
                    </div>
                    <div className="tseo-rank-rows">
                      {tracking.rankRows.map((row) => (
                        <div className="tseo-rank-row" key={row.kw}>
                          <span className="tseo-rank-kw">{row.kw}</span>
                          <span className="tseo-rank-pos">{row.pos}</span>
                          <span className="tseo-rank-delta">{row.delta}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="tseo-mock-card">
                    <div className="tseo-mock-head">
                      <h3>Review Growth</h3>
                      <span className="tseo-mock-tag">+32 this quarter</span>
                    </div>
                    <div className="tseo-review-score">
                      <strong>4.9</strong>
                      <span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                    </div>
                    <p className="tseo-review-count">
                      187 Google reviews and counting
                    </p>
                    <div className="tseo-review-bars">
                      {ReviewBarHeights.map((height, index) => (
                        <span
                          className="tseo-review-bar"
                          key={index}
                          style={{ height: `${height}px` }}
                        />
                      ))}
                    </div>
                    <p className="tseo-review-bars-label">
                      New reviews per month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Why choose us + audit banner */}
          <section className="tseo-why">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Why Zonic Media</p>
                <h2 className="tseo-h2">{why.h2}</h2>
                <p className="tseo-lead">{why.lead}</p>
              </div>
              <div className="tseo-why-cards">
                {why.cards.map((card) => (
                  <article className="tseo-why-card" key={card.title}>
                    <span className="tseo-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
              <div className="tseo-why-banner">
                <div className="tseo-why-banner-text">
                  <p className="tseo-eyebrow">{why.banner.eyebrow}</p>
                  <h3>{why.banner.h3}</h3>
                  <p>{why.banner.p}</p>
                  <div className="tseo-banner-checks">
                    {why.banner.checks.map((check) => (
                      <div className="tseo-banner-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>
                  <HashScrollLink href="#tseo-form" className="tseo-btn" offset={120}>
                    {why.banner.cta}
                    <span className="tseo-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                <div className="tseo-audit-card" aria-hidden="true">
                  <div className="tseo-audit-head">
                    <h4>Local Visibility Score</h4>
                    <span className="tseo-mock-tag">After 6 months</span>
                  </div>
                  <div className="tseo-audit-ring-wrap">
                    <div className="tseo-audit-ring">
                      <span>
                        {why.banner.auditScore}
                        <small>/100</small>
                      </span>
                    </div>
                    <div className="tseo-audit-ring-info">
                      <strong>Excellent</strong>
                      <small>{why.banner.auditDesc}</small>
                    </div>
                  </div>
                  {why.banner.auditRows.map((row) => (
                    <div className="tseo-audit-row" key={row.label}>
                      <span>{row.label}</span>
                      <span className="tseo-audit-flag">{row.flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 10. Reviews */}
          <section className="tseo-reviews" aria-labelledby="tseo-reviews-title">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Verified Client Reviews</p>
                <h2 className="tseo-h2" id="tseo-reviews-title">
                  Trusted by Small &amp; Mid-Size Businesses Across the US
                </h2>
              </div>
              <div className="tseo-reviews-widget">
                <ClutchWidget
                  widgetType="12"
                  height="375"
                  primaryColor="#2567e8"
                  reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
                />
              </div>
            </div>
          </section>

          {/* 11. Marquee */}
          <div className="tseo-marquee" aria-hidden="true">
            <div className="tseo-marquee-track">
              {[0, 1].map((copy) => (
                <span className="tseo-marquee-item" key={copy}>
                  {marquee.map((item) => (
                    <span className="tseo-marquee-item" key={item}>
                      {item} <FaStar aria-hidden="true" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* 12. Nationwide */}
          <section className="tseo-nationwide">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Wherever You Work</p>
                <h2 className="tseo-h2">{nationwide.h2}</h2>
                <p className="tseo-lead">{nationwide.lead}</p>
              </div>
              <div className="tseo-coverage" aria-hidden="true">
                {CoveragePins.map((pin) => (
                  <span
                    className="tseo-coverage-pin"
                    style={{ top: pin.top, left: pin.left }}
                    key={pin.city}
                  >
                    <FiMapPin />
                    {pin.city}
                    <em>{pin.win}</em>
                  </span>
                ))}
                <div className="tseo-coverage-core">
                  <strong>50+</strong>
                  <span>
                    local businesses growing
                    <br />
                    across the United States
                  </span>
                </div>
              </div>
              <div className="tseo-chips">
                {nationwide.chips.map((chip) => (
                  <span className="tseo-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <div className="tseo-nationwide-cta">
                <HashScrollLink href="#tseo-form" className="tseo-btn" offset={120}>
                  Get Your Free Audit
                  <span className="tseo-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </section>

          {/* 13. FAQs */}
          <section className="tseo-faqs" id="tseo-faqs">
            <div className="tseo-container">
              <div className="tseo-split-grid">
                <div>
                  <p className="tseo-eyebrow">FAQs</p>
                  <h2 className="tseo-h2">{faqs.h2}</h2>
                  <p className="tseo-lead">{faqs.lead}</p>
                  <div className="tseo-faq-cta">
                    <HashScrollLink href="#tseo-form" className="tseo-btn" offset={120}>
                      {faqs.cta}
                      <span className="tseo-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                  </div>
                </div>
                <div>
                  <GmbFaqs items={faqs.items} />
                </div>
              </div>
            </div>
          </section>

          {/* 14. Grow further */}
          <section className="tseo-grow">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Grow Further</p>
                <h2 className="tseo-h2">{grow.h2}</h2>
              </div>
              <div className="tseo-grow-cards">
                {grow.cards.map((card) => (
                  <Link href={card.href} className="tseo-grow-card" key={card.href}>
                    <span className="tseo-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <span className="tseo-grow-link">
                      {card.cta} <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 15. Lead form */}
          <section className="tseo-form-sec" id="tseo-form">
            <div className="tseo-container">
              <div className="tseo-form-grid">
                <aside className="tseo-form-aside">
                  <p className="tseo-eyebrow">Get Started</p>
                  <h2 className="tseo-h2">{form.h2}</h2>
                  <p className="tseo-lead">{form.lead}</p>
                  <div className="tseo-form-contacts">
                    <a href={SITE_CONTACT.emailHref} className="tseo-form-contact">
                      <span className="tseo-form-contact-icon">
                        <FiMail aria-hidden="true" />
                      </span>
                      <span className="tseo-form-contact-txt">
                        <small>Email us anytime</small>
                        <strong>{SITE_CONTACT.email}</strong>
                      </span>
                    </a>
                    <a href={SITE_CONTACT.phoneHref} className="tseo-form-contact">
                      <span className="tseo-form-contact-icon">
                        <FiPhoneCall aria-hidden="true" />
                      </span>
                      <span className="tseo-form-contact-txt">
                        <small>Speak with a strategist</small>
                        <strong>{SITE_CONTACT.phoneDisplay}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tseo-form-contact"
                    >
                      <span className="tseo-form-contact-icon">
                        <FiMapPin aria-hidden="true" />
                      </span>
                      <span className="tseo-form-contact-txt">
                        <small>Visit our office</small>
                        <strong>{SITE_CONTACT.address}</strong>
                      </span>
                    </a>
                  </div>
                </aside>
                <div className="tseo-form-main">
                  <ServiceLeadForm
                    formType={form.formType}
                    badge={form.badge}
                    title={form.title}
                    subtitle={form.subtitle}
                    submitText={form.submitText}
                    messageLabel={form.messageLabel}
                    messagePlaceholder={form.messagePlaceholder}
                    defaultServices={form.defaultServices}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <RelatedServices current={data.relatedCurrent} />
      <Footer />
    </>
  );
}
