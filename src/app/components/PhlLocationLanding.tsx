import type { CSSProperties, ReactNode } from "react";
import "@/app/style/philadelphia/philaLanding.css";
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
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
  FiStar,
  FiX,
} from "react-icons/fi";

/*
 * Shared location/service landing template on the Philadelphia landing design
 * system (philaLanding.css, scoped .phl-page — itself a port of the approved
 * Delaware layout). Used by the Aug 2026 SEO-plan pages: NYC local-seo + digital
 * marketing, Wilmington, Delaware SEO, and Delaware web design, so they render
 * pixel-identical to the existing location pages.
 *
 * Each location page owns the source and alt text for its four responsive
 * photos. The shared layout controls crop behavior and responsive sizes.
 */

export type PhlFaq = { question: string; answer: string };
export type PhlImage = { src: string; alt: string };

export type PhlLandingData = {
  /** id used for the lead-form anchor — keep "phl-form" unless two on a page. */
  hero: {
    eyebrow: string;
    /** H1 before the highlighted span. */
    h1Start: string;
    /** Highlighted (gold) part of the H1. */
    h1Highlight: string;
    /** H1 after the span (optional). */
    h1End?: string;
    sub: ReactNode;
    media: PhlImage;
    floatA: { strong: string; text: string };
    floatB: { strong: string; text: string };
    stats: { icon: ReactNode; num: string; label: string }[];
    proof: string;
    cta: string;
  };
  about: {
    eyebrow: string;
    h2Start: string;
    h2Highlight: string;
    leads: ReactNode[];
    checks: string[];
    collageA: PhlImage;
    collageB: PhlImage;
    badgeText: string;
  };
  services: {
    eyebrow: string;
    h2: string;
    cards: { tone: "blue" | "gold"; icon: ReactNode; title: string; desc: ReactNode }[];
  };
  band: {
    eyebrow: string;
    h2: string;
    leads: ReactNode[];
    cta: string;
    console: {
      title: string;
      tag: string;
      metrics: { strong: string; label: string }[];
      barsLabel: string;
      bars: { label: string; val: number; tone: "blue" | "gold" }[];
      pills: { icon: "pin" | "star"; text: string }[];
    };
  };
  process: {
    eyebrow: string;
    h2: string;
    steps: {
      tag: string;
      title: string;
      desc: string;
      chips?: string[];
    }[];
    visualTitle: string;
    visualBars: { label: string; val: number }[];
    ctaPrimary: string;
  };
  results: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: { icon: ReactNode; industry: string; metric: string; label: string; desc: ReactNode }[];
  };
  showcase?: {
    image: PhlImage;
    floats: { num: string; label: string }[];
  };
  compare: {
    h2: string;
    lead: string;
    themTitle: string;
    themSub: string;
    them: string[];
    usTitle: string;
    usSub: string;
    us: string[];
    scoreTitle: string;
    scoreSub: string;
    scoreRows: { label: string; before: number; after: number }[];
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
      audit: {
        title: string;
        tag: string;
        score: string;
        grade: string;
        gradeDesc: string;
        rows: { label: string; flag: string }[];
      };
    };
  };
  marquee: string[];
  engine: {
    eyebrow: string;
    h2: string;
    lead: ReactNode;
    coreStrong: string;
    coreSub: string;
    coreCta: string;
    nodes: { icon: ReactNode; title: string; outcome: string; tone: "blue" | "gold"; left: string; top: string }[];
    chipsLabel: string;
    chips: string[];
  };
  faqs: {
    eyebrow: string;
    h2: string;
    lead: string;
    cta: string;
    items: PhlFaq[];
  };
  grow: {
    eyebrow: string;
    h2: string;
    lead: ReactNode;
    cards: { href: string; icon: ReactNode; title: string; desc: string; cta: string }[];
  };
  form: {
    eyebrow: string;
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

function Photo({
  asset,
  sizes,
  priority = false,
}: {
  asset: PhlImage;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      /* Raw file serving, same as the Philadelphia location pages — the
         optimizer route 400'd on quality until Aug 27 and those errors sit in
         browser caches; raw URLs always served. */
      unoptimized
    />
  );
}

export default function PhlLocationLanding({ data }: { data: PhlLandingData }) {
  const { hero, about, services, band, process, results, showcase, compare, why, marquee, engine, faqs, grow, form } = data;

  return (
    <>
      <div className="phl-page">
        <main>
          {/* 1. Hero */}
          <section className="phl-hero">
            <div className="phl-container">
              <div className="phl-hero-grid">
                <div className="phl-hero-copy">
                  <p className="phl-eyebrow">{hero.eyebrow}</p>
                  <h1 className="phl-h1">
                    {hero.h1Start}{" "}
                    <span className="phl-hl">{hero.h1Highlight}</span>
                    {hero.h1End ? <> {hero.h1End}</> : null}
                  </h1>
                  <p className="phl-hero-sub">{hero.sub}</p>

                  <div className="phl-hero-badges" aria-label="Partner badges">
                    <a
                      href="https://clutch.co/profile/zonic-media?badge=11431"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Image
                        className="phl-hero-badge"
                        width={74}
                        height={74}
                        src="/images/clutch-top-company-2026.png"
                        alt="Top Clutch Digital Marketing Company Delaware 2026"
                      />
                    </a>
                    <Image
                      className="phl-hero-badge"
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
                        className="phl-hero-badge-trustpilot"
                        width={104}
                        height={50}
                        src="/images/trust-black.png"
                        alt="Zonic Media reviews on Trustpilot"
                      />
                    </a>
                  </div>

                  <div className="phl-hero-ctas">
                    <HashScrollLink href="#phl-form" className="phl-btn" offset={120}>
                      {hero.cta}
                      <span className="phl-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                    <a href={SITE_CONTACT.phoneHref} className="phl-btn-ghost">
                      <FiPhoneCall aria-hidden="true" />
                      Call {SITE_CONTACT.phoneDisplay}
                    </a>
                  </div>

                  <div className="phl-hero-proof">
                    <span className="phl-stars" aria-hidden="true">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <p>
                      <strong>Rated 4.9/5</strong> {hero.proof}
                    </p>
                  </div>
                </div>

                <div className="phl-hero-visual">
                  <div className="phl-hero-media">
                    <Photo
                      asset={hero.media}
                      sizes="(max-width: 991px) 100vw, 44vw"
                      priority
                    />
                  </div>

                  <div className="phl-hero-float phl-hero-float--a">
                    <span className="phl-hero-float-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <p>
                      <strong>{hero.floatA.strong}</strong>
                      {hero.floatA.text}
                    </p>
                  </div>

                  <div className="phl-hero-float phl-hero-float--b">
                    <span className="phl-hero-float-icon phl-hero-float-icon--gold">
                      <FiStar aria-hidden="true" />
                    </span>
                    <p>
                      <strong>{hero.floatB.strong}</strong>
                      {hero.floatB.text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="phl-hero-stats">
                {hero.stats.map((stat) => (
                  <div className="phl-stat" key={stat.label}>
                    <span className="phl-stat-icon">{stat.icon}</span>
                    <div>
                      <p className="phl-stat-num">{stat.num}</p>
                      <p className="phl-stat-label">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. About / opportunity */}
          <section className="phl-about">
            <div className="phl-container">
              <div className="phl-about-grid">
                <div className="phl-collage">
                  <div className="phl-collage-a">
                    <Photo
                      asset={about.collageA}
                      sizes="(max-width: 991px) 78vw, 36vw"
                    />
                  </div>
                  <div className="phl-collage-b">
                    <Photo
                      asset={about.collageB}
                      sizes="(max-width: 991px) 58vw, 27vw"
                    />
                  </div>
                  <div className="phl-collage-badge" aria-hidden="true">
                    <svg viewBox="0 0 120 120">
                      <defs>
                        <path
                          id="phlBadgeCircle"
                          d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                        />
                      </defs>
                      <text>
                        <textPath href="#phlBadgeCircle">{about.badgeText}</textPath>
                      </text>
                    </svg>
                    <span className="phl-collage-badge-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="phl-about-copy">
                  <p className="phl-eyebrow">{about.eyebrow}</p>
                  <h2 className="phl-h2">
                    {about.h2Start}{" "}
                    <span className="phl-hl-text">{about.h2Highlight}</span>
                  </h2>
                  {about.leads.map((lead, index) => (
                    <p className="phl-lead" key={index}>
                      {lead}
                    </p>
                  ))}

                  <div className="phl-checks">
                    {about.checks.map((check) => (
                      <div className="phl-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>

                  <Link href="/about" className="phl-btn">
                    More About Zonic Media
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Services */}
          <section className="phl-services" id="phl-services">
            <div className="phl-container">
              <div className="phl-sec-head">
                <div>
                  <p className="phl-eyebrow">{services.eyebrow}</p>
                  <h2 className="phl-h2">{services.h2}</h2>
                </div>
                <Link href="/services" className="phl-link-arrow">
                  View all services <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>

              <div className="phl-cards">
                {services.cards.map((card) => (
                  <article
                    className={`phl-card phl-card--${card.tone}`}
                    key={card.title}
                  >
                    <span className="phl-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <span className="phl-card-line" aria-hidden="true" />
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Blue band + console */}
          <section className="phl-band">
            <div className="phl-band-grid">
              <div className="phl-band-content">
                <p className="phl-eyebrow">{band.eyebrow}</p>
                <h2 className="phl-h2">{band.h2}</h2>
                {band.leads.map((lead, index) => (
                  <p className="phl-lead" key={index}>
                    {lead}
                  </p>
                ))}
                <HashScrollLink href="#phl-form" className="phl-btn" offset={120}>
                  {band.cta}
                  <span className="phl-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>

              <div className="phl-console" aria-hidden="true">
                <div className="phl-console-head">
                  <h3>{band.console.title}</h3>
                  <span className="phl-console-tag">{band.console.tag}</span>
                </div>

                <div className="phl-console-metrics">
                  {band.console.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.strong}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>

                <p className="phl-console-sub">{band.console.barsLabel}</p>
                <div className="phl-console-bars">
                  {band.console.bars.map((bar) => (
                    <div className="phl-console-bar" key={bar.label}>
                      <div className="phl-console-bar-head">
                        <span>{bar.label}</span>
                        <span>{bar.val}%</span>
                      </div>
                      <div className="phl-console-track">
                        <span
                          className={`phl-console-fill phl-console-fill--${bar.tone}`}
                          style={{ width: `${bar.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="phl-console-foot">
                  {band.console.pills.map((pill) => (
                    <span className="phl-console-pill" key={pill.text}>
                      {pill.icon === "pin" ? <FiMapPin /> : <FaStar />}
                      {pill.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Process bento */}
          <section className="phl-process" id="phl-process">
            <div className="phl-container">
              <div className="phl-sec-head">
                <div>
                  <p className="phl-eyebrow">{process.eyebrow}</p>
                  <h2 className="phl-h2">{process.h2}</h2>
                </div>
                <HashScrollLink href="#phl-form" className="phl-link-arrow" offset={120}>
                  Start with step one <FiArrowUpRight aria-hidden="true" />
                </HashScrollLink>
              </div>

              <div className="phl-bento">
                <article className="phl-bento-card phl-bento-card--s1">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      01
                    </span>
                    <span className="phl-bento-tag">{process.steps[0].tag}</span>
                  </div>
                  <h3>{process.steps[0].title}</h3>
                  <p>{process.steps[0].desc}</p>
                  <div className="phl-bento-visual" aria-hidden="true">
                    <p className="phl-bento-visual-title">{process.visualTitle}</p>
                    {process.visualBars.map((bar) => (
                      <div className="phl-bento-bar-row" key={bar.label}>
                        <div className="phl-bento-bar-head">
                          <span>{bar.label}</span>
                          <span>{bar.val}%</span>
                        </div>
                        <div className="phl-bento-bar-track">
                          <span
                            className="phl-bento-bar-fill"
                            style={{ width: `${bar.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="phl-bento-card phl-bento-card--s2">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      02
                    </span>
                    <span className="phl-bento-tag">{process.steps[1].tag}</span>
                  </div>
                  <h3>{process.steps[1].title}</h3>
                  <p>{process.steps[1].desc}</p>
                </article>

                <article className="phl-bento-card phl-bento-card--s3">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      03
                    </span>
                    <span className="phl-bento-tag">{process.steps[2].tag}</span>
                  </div>
                  <h3>{process.steps[2].title}</h3>
                  <p>{process.steps[2].desc}</p>
                  {process.steps[2].chips ? (
                    <div className="phl-bento-chips">
                      {process.steps[2].chips.map((chip) => (
                        <span className="phl-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <HashScrollLink
                    href="#phl-form"
                    className="phl-btn phl-bento-cta"
                    offset={120}
                  >
                    {process.ctaPrimary}
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </article>

                <article className="phl-bento-card phl-bento-card--s4">
                  <div className="phl-bento-s4-copy">
                    <div className="phl-bento-head">
                      <span className="phl-bento-num" aria-hidden="true">
                        04
                      </span>
                      <span className="phl-bento-tag">{process.steps[3].tag}</span>
                    </div>
                    <h3>{process.steps[3].title}</h3>
                    <p>{process.steps[3].desc}</p>
                  </div>
                  <div className="phl-bento-s4-side">
                    {process.steps[3].chips ? (
                      <div className="phl-bento-chips">
                        {process.steps[3].chips.map((chip) => (
                          <span className="phl-bento-chip" key={chip}>
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <HashScrollLink href="#phl-form" className="phl-link-arrow" offset={120}>
                      Start with the free audit <FiArrowUpRight aria-hidden="true" />
                    </HashScrollLink>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* 6. Results */}
          <section className="phl-results">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">{results.eyebrow}</p>
                <h2 className="phl-h2">{results.h2}</h2>
                <p className="phl-lead">{results.lead}</p>
              </div>

              <div className="phl-results-cards">
                {results.cards.map((card) => (
                  <article className="phl-result-card" key={card.industry}>
                    <p className="phl-result-ind">
                      {card.icon}
                      {card.industry}
                    </p>
                    <p className="phl-result-metric">{card.metric}</p>
                    <p className="phl-result-label">{card.label}</p>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Showcase */}
          {showcase ? (
            <section className="phl-showcase">
              <div className="phl-container">
                <div className="phl-showcase-media">
                  <div className="phl-showcase-photo">
                    <Photo
                      asset={showcase.image}
                      sizes="(max-width: 991px) 100vw, 86vw"
                    />
                  </div>
                  <div className="phl-showcase-floats">
                    {showcase.floats.map((float) => (
                      <div className="phl-showcase-float" key={float.label}>
                        <strong>{float.num}</strong>
                        <span>{float.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* 8. Comparison */}
          <section className="phl-compare">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">The Difference</p>
                <h2 className="phl-h2">{compare.h2}</h2>
                <p className="phl-lead">{compare.lead}</p>
              </div>

              <div className="phl-compare-grid">
                <div className="phl-compare-col phl-compare-col--them">
                  <h3>{compare.themTitle}</h3>
                  <p className="phl-compare-sub">{compare.themSub}</p>
                  <ul>
                    {compare.them.map((item) => (
                      <li key={item}>
                        <FiX aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="phl-compare-col phl-compare-col--us">
                  <h3>{compare.usTitle}</h3>
                  <p className="phl-compare-sub">{compare.usSub}</p>
                  <ul>
                    {compare.us.map((item) => (
                      <li key={item}>
                        <FaCircleCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="phl-compare-col phl-compare-col--score" aria-hidden="true">
                  <h3>{compare.scoreTitle}</h3>
                  <p className="phl-compare-sub">{compare.scoreSub}</p>
                  <div className="phl-score-rows">
                    {compare.scoreRows.map((row) => (
                      <div key={row.label}>
                        <div className="phl-score-head">
                          <span>{row.label}</span>
                          <span className="phl-score-vals">
                            {row.before}% → <strong>{row.after}%</strong>
                          </span>
                        </div>
                        <div className="phl-score-track">
                          <span
                            className="phl-score-fill"
                            style={{ "--w": `${row.after}%` } as CSSProperties}
                          />
                          <span
                            className="phl-score-before"
                            style={{ "--b": `${row.before}%` } as CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="phl-score-legend">
                    <span>
                      <i className="phl-score-legend-before" />
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

          {/* 9. Why us + audit banner */}
          <section className="phl-why">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Why Zonic Media</p>
                <h2 className="phl-h2">{why.h2}</h2>
                <p className="phl-lead">{why.lead}</p>
              </div>

              <div className="phl-why-cards">
                {why.cards.map((card) => (
                  <article className="phl-why-card" key={card.title}>
                    <span className="phl-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>

              <div className="phl-why-banner">
                <div className="phl-why-banner-text">
                  <p className="phl-eyebrow">{why.banner.eyebrow}</p>
                  <h3>{why.banner.h3}</h3>
                  <p>{why.banner.p}</p>
                  <div className="phl-banner-checks">
                    {why.banner.checks.map((check) => (
                      <div className="phl-banner-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>
                  <HashScrollLink href="#phl-form" className="phl-btn" offset={120}>
                    {why.banner.cta}
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                <div className="phl-audit-card" aria-hidden="true">
                  <div className="phl-audit-head">
                    <h4>{why.banner.audit.title}</h4>
                    <span className="phl-audit-tag">{why.banner.audit.tag}</span>
                  </div>
                  <div className="phl-audit-ring-wrap">
                    <div className="phl-audit-ring">
                      <span>
                        {why.banner.audit.score}
                        <small>/100</small>
                      </span>
                    </div>
                    <div className="phl-audit-ring-info">
                      <strong>{why.banner.audit.grade}</strong>
                      <small>{why.banner.audit.gradeDesc}</small>
                    </div>
                  </div>
                  {why.banner.audit.rows.map((row) => (
                    <div className="phl-audit-row" key={row.label}>
                      <span>{row.label}</span>
                      <span className="phl-audit-flag">{row.flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 10. Reviews */}
          <section className="phl-reviews" aria-labelledby="phl-reviews-title">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Verified Client Reviews</p>
                <h2 className="phl-h2" id="phl-reviews-title">
                  Trusted by Small &amp; Mid-Size Businesses Across the US
                </h2>
              </div>
              <div className="phl-reviews-widget">
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
          <div className="phl-marquee" aria-hidden="true">
            <div className="phl-marquee-track">
              {[0, 1].map((copy) => (
                <span className="phl-marquee-item" key={copy}>
                  {marquee.map((item) => (
                    <span className="phl-marquee-item" key={item}>
                      {item} <FaStar aria-hidden="true" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* 12. Engine */}
          <section className="phl-engine-sec">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">{engine.eyebrow}</p>
                <h2 className="phl-h2">{engine.h2}</h2>
                <p className="phl-lead">{engine.lead}</p>
              </div>

              <div className="phl-engine">
                <div className="phl-engine-orbit" aria-hidden="true" />

                <div className="phl-engine-core">
                  <span className="phl-engine-core-icon" aria-hidden="true">
                    <FiMapPin />
                  </span>
                  <strong>{engine.coreStrong}</strong>
                  <span>{engine.coreSub}</span>
                  <HashScrollLink
                    href="#phl-form"
                    className="phl-btn phl-engine-core-cta"
                    offset={120}
                  >
                    {engine.coreCta}
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                {engine.nodes.map((node) => (
                  <div
                    className={`phl-engine-node phl-engine-node--${node.tone}`}
                    style={{ "--l": node.left, "--t": node.top } as CSSProperties}
                    key={node.title}
                  >
                    <span className="phl-engine-node-icon">{node.icon}</span>
                    <span className="phl-engine-node-txt">
                      <strong>{node.title}</strong>
                      <small>{node.outcome}</small>
                    </span>
                  </div>
                ))}
              </div>

              <p className="phl-chips-label">{engine.chipsLabel}</p>
              <div className="phl-chips">
                {engine.chips.map((chip) => (
                  <span className="phl-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 13. FAQs */}
          <section className="phl-faqs" id="phl-faqs">
            <div className="phl-container">
              <div className="phl-split-grid">
                <div>
                  <p className="phl-eyebrow">{faqs.eyebrow}</p>
                  <h2 className="phl-h2">{faqs.h2}</h2>
                  <p className="phl-lead">{faqs.lead}</p>
                  <div className="phl-faq-cta">
                    <HashScrollLink href="#phl-form" className="phl-btn" offset={120}>
                      {faqs.cta}
                      <span className="phl-btn-circ">
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
          <section className="phl-grow">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">{grow.eyebrow}</p>
                <h2 className="phl-h2">{grow.h2}</h2>
                <p className="phl-lead">{grow.lead}</p>
              </div>
              <div className="phl-grow-cards">
                {grow.cards.map((card) => (
                  <Link href={card.href} className="phl-grow-card" key={card.href}>
                    <span className="phl-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <span className="phl-grow-link">
                      {card.cta} <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 15. Lead form */}
          <section className="phl-form-sec" id="phl-form">
            <div className="phl-container">
              <div className="phl-form-grid">
                <aside className="phl-form-aside">
                  <p className="phl-eyebrow">{form.eyebrow}</p>
                  <h2 className="phl-h2">{form.h2}</h2>
                  <p className="phl-lead">{form.lead}</p>

                  <div className="phl-form-contacts">
                    <a href={SITE_CONTACT.emailHref} className="phl-form-contact">
                      <span className="phl-form-contact-icon">
                        <FiMail aria-hidden="true" />
                      </span>
                      <span className="phl-form-contact-txt">
                        <small>Email us anytime</small>
                        <strong>{SITE_CONTACT.email}</strong>
                      </span>
                    </a>
                    <a href={SITE_CONTACT.phoneHref} className="phl-form-contact">
                      <span className="phl-form-contact-icon">
                        <FiPhoneCall aria-hidden="true" />
                      </span>
                      <span className="phl-form-contact-txt">
                        <small>Speak with a strategist</small>
                        <strong>{SITE_CONTACT.phoneDisplay}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="phl-form-contact"
                    >
                      <span className="phl-form-contact-icon">
                        <FiMapPin aria-hidden="true" />
                      </span>
                      <span className="phl-form-contact-txt">
                        <small>Our office</small>
                        <strong>{SITE_CONTACT.address}</strong>
                      </span>
                    </a>
                    <div className="phl-form-contact phl-form-contact--static">
                      <span className="phl-form-contact-icon">
                        <FiMessageCircle aria-hidden="true" />
                      </span>
                      <span className="phl-form-contact-txt">
                        <small>Prefer to chat?</small>
                        <strong>
                          Use the chat bubble — a real strategist replies
                        </strong>
                      </span>
                    </div>
                  </div>
                </aside>

                <div className="phl-form-main">
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
