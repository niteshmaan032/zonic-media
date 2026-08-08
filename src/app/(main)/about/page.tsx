import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";

import Footer from "@/app/components/Footer";
import ClutchWidget from "@/app/components/ClutchWidget";
import HomeSeoMarquee from "@/app/components/HomeSeoMarquee";
import HeroTrustBadges from "@/app/components/HeroTrustBadges";
import WinsBoard from "@/app/components/about/WinsBoard";
import CoverageBoard from "@/app/components/about/CoverageBoard";
import TimelineBars from "@/app/components/about/TimelineBars";

import "@/app/style/about.css";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";

import {
  FiActivity,
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiCheck,
  FiHome,
  FiLayers,
  FiMapPin,
  FiMousePointer,
  FiPhone,
  FiSearch,
  FiStar,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";

/* ---------------------------------------------------------------------------
   POSITIONING — read this before editing the copy.

   This is the site's primary E-E-A-T page. Its job is not to rank for a
   service head term — the hubs own those — it is to make Zonic Media
   legible as a real, locatable, accountable business: who we are, where
   we are, and what we're good at.

   Rules that keep it that way:

     · Never restate a hub's deliverables list. Link up to the hub with
       the head term as anchor text instead (/services/gmb-optimization,
       /services/local-seo-for-home-services, /services/web-design,
       /services/google-ads).
     · Every number here must match the number used elsewhere on the site.
       1,500+ optimized / 500+ reinstated / 5.0 Clutch is the canonical
       set — the same figures the GBP landing pages use.
     · NAP (Dover, DE address + phone) stays visible in the markup, not
       only in JSON-LD. It is a trust signal for humans first.
     · Don't invent founding dates, headcounts or client names. If we
       can't source it, it doesn't go on this page.
     · POSITIVE FRAMING ONLY. State what we do well and what clients
       gain. Don't sell against other agencies, don't lead with the
       reader's problems, and don't describe failure states — the same
       rule the visuals follow (see the header of about.css).

   DESIGN: about.css (.abt-page) is a direct continuation of the /services
   hub (servicesHub.css, .svc-page) — identical palette, atoms and section
   rhythm. Hard rules carried over: no shadows, no photography, and every
   visual rests in its winning state. The three panels are CSS-keyframed
   components in components/about/ (WinsBoard, CoverageBoard, TimelineBars)
   and the card mini-visuals are inline below, so this stays a server
   component with no scroll-triggered animation anywhere on the page.
--------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: {
    absolute: "About Zonic Media | Local SEO & Web Design Agency, Dover DE",
  },
  description:
    "Meet Zonic Media, a Dover, Delaware agency running Local SEO, Google Business Profile, web design and Google Ads for small and mid-size US businesses.",
  keywords: [
    "about Zonic Media",
    "Zonic Media agency",
    "local marketing agency for small business",
    "local SEO agency Dover DE",
    "Google Business Profile agency",
    "digital marketing agency Delaware",
    "marketing agency for service businesses",
    "web design and SEO agency US",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "About Zonic Media | Local SEO & Web Design Agency, Dover DE",
    description:
      "A small, senior team in Dover, Delaware running Local SEO, Google Business Profile, web design and Google Ads for small and mid-size US businesses.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Zonic Media | Local SEO & Web Design Agency, Dover DE",
    description:
      "Who we are, where we are, and the local search work we're known for.",
  },
};

/* ────────────────────────────────────────────────────────────── data ───── */

/* Canonical figures — these must match the GBP landing pages. */
const heroStats = [
  { v: "1,500+", k: "Google Business Profiles optimized" },
  { v: "500+", k: "Suspended profiles restored" },
  { v: "5.0★", k: "Average rating on Clutch" },
  { v: "20+", k: "Local service niches served" },
];

const pillars = [
  {
    icon: <FiMapPin />,
    title: "Local search specialists",
    desc: "Google Business Profile and Map Pack work is the core of the practice — the area we've gone deepest in and the one clients come to us for by name.",
  },
  {
    icon: <FiUsers />,
    title: "One senior team",
    desc: "The people who audit your account are the people who run it, across search, the profile, the website and the ads.",
  },
  {
    icon: <FiHome />,
    title: "Dover, DE — working nationwide",
    desc: "A real office in Delaware, a remote-first team, and clients winning in markets right across the United States.",
  },
];

const companyFacts = [
  { k: "Head office", v: "8 The Green, STE B, Dover, DE 19901" },
  { k: "Coverage", v: "United States, remote-first" },
  { k: "Who we work with", v: "Local and service-area businesses" },
  { k: "Engagements", v: "Month to month, no lock-in" },
];

type ServiceCard = {
  visual: "serp" | "map" | "site" | "ads";
  title: string;
  desc: string;
  points: string[];
  href: string;
  cta: string;
};

const services: ServiceCard[] = [
  {
    visual: "serp",
    title: "Local SEO",
    desc: "Getting a business found by the people already searching for what it does, in every town it can serve.",
    points: [
      "Category and Service Alignment",
      "Location content that ranks",
      "Review velocity and local links",
    ],
    href: "/services/local-seo-for-home-services",
    cta: "Local SEO for home services",
  },
  {
    visual: "map",
    title: "Google Business Profile",
    desc: "Our deepest specialism: profiles built, verified and optimized to hold the Map Pack — and listings recovered when they need it.",
    points: [
      "Verification and full buildout",
      "Map Pack coverage across the area",
      "Fast, documented listing recovery",
    ],
    href: "/services/gmb-optimization",
    cta: "Google Business Profile optimization",
  },
  {
    visual: "site",
    title: "Website Design & Development",
    desc: "Fast, conversion-shaped sites that make a small business look established and give rankings somewhere worth landing.",
    points: [
      "Built to convert, not to win awards",
      "Core Web Vitals in the green",
      "Yours to edit after launch",
    ],
    href: "/services/web-design",
    cta: "Web design services",
  },
  {
    visual: "ads",
    title: "Google Ads (PPC)",
    desc: "Paid search run to a cost-per-call number, filling the pipeline from week one while the organic side compounds.",
    points: [
      "Managed to cost per lead",
      "Local intent and geo-targeting",
      "Accounts stay in your name",
    ],
    href: "/services/google-ads",
    cta: "Google Ads management",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit",
    desc: "Profile health, where you rank across the whole service area, site speed and conversion, and the openings the data shows are worth taking first.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "The work sequenced with reasoning attached — what's first, why it's first, and what each stage should move. Flat monthly cost, agreed up front.",
  },
  {
    num: "03",
    title: "Build",
    desc: "The same team writes the content, builds the profile, ships the site and structures the campaigns, all against the audit they ran.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Calls and form fills tracked from day one, so reporting is about outcomes. You can see what a channel is producing inside three weeks.",
  },
  {
    num: "05",
    title: "Compound",
    desc: "Review velocity, profile currency and fresh content keep the coverage widening, so month six is stronger than month three.",
  },
];

const principles = [
  {
    icon: <FiTarget />,
    title: "Strategy tied to booked work",
    desc: "The plan is built around what the business needs to book next quarter, and every task on it traces back to that number.",
  },
  {
    icon: <FiLayers />,
    title: "One team, one accountable plan",
    desc: "Search, the profile, the website and the ads sit with the same people, so the four channels reinforce each other.",
  },
  {
    icon: <FiActivity />,
    title: "We report calls and leads",
    desc: "Map Pack coverage, qualified calls, form leads and cost per lead, in plain English, with the ranking data underneath if you want it.",
  },
  {
    icon: <FiAward />,
    title: "Month to month, always",
    desc: "Clients stay because the leads keep arriving, which means we re-earn the relationship every single cycle.",
  },
  {
    icon: <FiMapPin />,
    title: "Local search is the specialism",
    desc: "Verification, Map Pack coverage and listing recovery are the problems we've solved most, across more than 20 trades.",
  },
  {
    icon: <FiZap />,
    title: "Built for smaller budgets",
    desc: "Scoped so a business with three trucks can compete with a name ten times its size in the same market.",
  },
];

const aboutFaqs = [
  {
    q: "What kind of businesses does Zonic Media work with?",
    a: "Small and mid-size US businesses, almost all of them local or service-area: roofers, HVAC, plumbing and electrical companies, dental and chiropractic practices, cleaning and towing companies, pest control, real estate agents and law firms among them. The common thread is that customers find them through a nearby search, so Map Pack visibility and a website that converts are what keep them busy.",
  },
  {
    q: "Where is Zonic Media based, and do you work nationwide?",
    a: "Our office is at 8 The Green, STE B, Dover, Delaware 19901. The team works remote-first and serves businesses right across the United States — the work happens inside Google's tools and your own accounts, so we can take on a client in any US market.",
  },
  {
    q: "What services does Zonic Media offer?",
    a: "Four things, under one roof: Local SEO, Google Business Profile work (setup, verification, optimization and reinstatement), website design and development, and Google Ads management. We also handle graphic and logo design where a brand is being rebuilt alongside the site.",
  },
  {
    q: "What makes Zonic Media a good fit?",
    a: "Two things. The first is depth in local search specifically — verification, Map Pack coverage and listing recovery are the problems we've solved most, across 1,500+ profiles. The second is that one team owns the profile, the site and the ads, so the four channels pull in the same direction. Engagements are month to month, and reporting is in plain English about calls and leads.",
  },
  {
    q: "How do you measure whether the work is succeeding?",
    a: "By Map Pack coverage across the service area, qualified calls, form leads, conversion rate and cost per lead. Rankings are the diagnostic underneath; booked work is the result we report on.",
  },
  {
    q: "How long does it take to see results?",
    a: "Relevance moves fastest — a corrected primary category or a properly built service list typically shows within two to four weeks. Website and conversion gains register as soon as traffic arrives. Map Pack coverage widens over four to eight weeks, and authority signals like review velocity and local links keep compounding from month three onward. We set that timeline out on day one so you know what to expect at each stage.",
  },
  {
    q: "Do you lock clients into long-term contracts?",
    a: "No. Every engagement is month to month. Most clients stay for years because the leads keep arriving, and that arrangement keeps us sharp: the work has to earn its cost every cycle.",
  },
  {
    q: "Do you provide ongoing support after a project launches?",
    a: "Yes, and for local search it's the part that pays off most. Ongoing work covers review velocity, profile currency, content, campaign tuning and a monthly re-scan of Map Pack coverage, so the position you win keeps widening rather than holding still.",
  },
];

/* ─────────────────────────────────────────────────────── structured data ─ */

const aboutBreadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
]);

/* Organization and LocalBusiness are emitted once in the root layout.
   Reference them by @id rather than redefining them — a second inline
   Organization would create a duplicate, unlinked entity. */
const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#aboutpage`,
  url: `${SITE_URL}/about`,
  name: "About Zonic Media",
  description:
    "Zonic Media is a Dover, Delaware marketing agency helping small and mid-size US businesses grow with Local SEO, Google Business Profile management, website design and Google Ads.",
  inLanguage: "en-US",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  about: { "@id": `${SITE_URL}/#organization` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/og-image.jpg`,
  },
};

const aboutFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/about#faq`,
  mainEntity: aboutFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

/* ──────────────────────────────────────────────── card mini-visuals ────── */

/**
 * Decorative micro-animation on each service card, in the same idiom as
 * `MiniVisual` on the /services hub — but each one is a miniature of the
 * service itself rather than a generic chart, so the graphic identifies the
 * card before the title is read:
 *
 *   serp — a search results page with the client resting at position 1
 *   map  — a map pin landing and holding the top spot
 *   site — a browser window with a live call-to-action
 *   ads  — a paid result being clicked, converting to a booked lead
 *
 * All four animate into their winning state and rest there, so the frozen
 * frame is always the result rather than the problem.
 */
function MiniVisual({ kind }: { kind: ServiceCard["visual"] }) {
  if (kind === "serp") {
    return (
      <div className="abt-mini abt-mini-serp" aria-hidden="true">
        <span className="abt-mini-query">
          <FiSearch />
          roofer near me
        </span>
        {[0, 1, 2].map((n) => (
          <span
            className={`abt-mini-res${n === 0 ? " is-top" : ""}`}
            key={n}
            style={{ "--n": n } as CSSProperties}
          >
            <i>{n + 1}</i>
            <b />
          </span>
        ))}
      </div>
    );
  }
  if (kind === "map") {
    return (
      <div className="abt-mini abt-mini-map" aria-hidden="true">
        <span className="abt-mini-badge">
          <FiStar size={8} />
          #1
        </span>
        <span className="abt-mini-pin">
          <FiMapPin />
        </span>
      </div>
    );
  }
  if (kind === "site") {
    return (
      <div className="abt-mini abt-mini-site" aria-hidden="true">
        <span className="abt-mini-chrome">
          <em />
          <em />
          <em />
          <span />
        </span>
        <span className="abt-mini-body">
          <i style={{ "--n": 0 } as CSSProperties} />
          <i style={{ "--n": 1 } as CSSProperties} />
          <b />
        </span>
      </div>
    );
  }
  return (
    <div className="abt-mini abt-mini-ads" aria-hidden="true">
      <span className="abt-mini-tag">Sponsored</span>
      <i style={{ "--n": 0 } as CSSProperties} />
      <i style={{ "--n": 1 } as CSSProperties} />
      <span className="abt-mini-won">
        <FiCheck size={9} />
        Lead booked
      </span>
      <span className="abt-mini-cursor">
        <FiMousePointer />
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────── page ─── */

export default function AboutPage() {
  return (
    <>
      <main className="abt-page">
        <script
          id="about-breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aboutBreadcrumbJsonLd),
          }}
        />
        <script
          id="about-page-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
        />
        <script
          id="about-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqJsonLd) }}
        />

        {/* ═══════════════════════════════════════════ 1 · HERO ═══════════ */}
        <section className="abt-hero">
          <div className="abt-container">
            <div className="abt-hero-grid">
              <div>
                <p className="abt-eyebrow">About Zonic Media</p>
                <h1 className="abt-hero-h1">
                  The Local Marketing Agency Built for{" "}
                  <span className="abt-hl">Smaller Budgets</span> and Bigger
                  Goals
                </h1>
                <p className="abt-hero-sub">
                  Zonic Media is a Dover, Delaware agency that helps small and
                  mid-size US businesses get found on Google and turn nearby
                  searches into booked work — Local SEO, Google Business Profile
                  management,{" "}
                  <Link href="/services/web-design" className="abt-inline-link">
                    website design
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/google-ads" className="abt-inline-link">
                    Google Ads
                  </Link>
                  , run by one team under one plan.
                </p>

                {/* Platform badges sit above the CTAs so the proof is read
                    before the ask. */}
                <HeroTrustBadges />

                <div className="abt-hero-ctas">
                  <Link href={SITE_CONTACT.bookCallHref} className="abt-btn">
                    Book a free strategy call
                    <span className="abt-btn-arrow" aria-hidden="true">
                      <FiArrowUpRight />
                    </span>
                  </Link>
                  <a href={SITE_CONTACT.phoneHref} className="abt-btn-ghost">
                    <FiPhone aria-hidden="true" />
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>

                <div className="abt-hero-trust">
                  <span>
                    <span className="abt-hero-stars" aria-hidden="true">
                      <FiStar />
                    </span>
                    5.0 rating on Clutch
                  </span>
                  <span>
                    <FiCheck size={14} aria-hidden="true" />
                    1,500+ profiles optimized
                  </span>
                  <span>
                    <FiCheck size={14} aria-hidden="true" />
                    Month to month, no lock-in
                  </span>
                </div>
              </div>

              <div>
                <WinsBoard />
              </div>
            </div>

            <div className="abt-stats">
              {heroStats.map((stat) => (
                <div className="abt-stat" key={stat.k}>
                  <p className="abt-stat-v">{stat.v}</p>
                  <p className="abt-stat-k">{stat.k}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════ 2 · MARQUEE ═══════════ */}
        <div className="abt-marquee">
          <HomeSeoMarquee />
        </div>

        {/* ══════════════════════════════════════════ 3 · STORY ═══════════ */}
        <section className="abt-section">
          <div className="abt-container">
            <div className="abt-sec-head-center">
              <p className="abt-eyebrow">Who we are</p>
              <h2 className="abt-h2">
                A Senior Team, Built Around{" "}
                <span className="abt-hl">Local Businesses</span>
              </h2>
              <p className="abt-lead">
                Zonic Media is a small, senior group in Dover, Delaware doing
                one kind of work well: making local and service-area businesses
                the obvious choice in the searches their customers are already
                running.
              </p>
            </div>

            <div className="abt-pillars">
              {pillars.map((pillar) => (
                <div className="abt-pillar" key={pillar.title}>
                  <span className="abt-pillar-ic" aria-hidden="true">
                    {pillar.icon}
                  </span>
                  <div>
                    <p className="abt-pillar-title">{pillar.title}</p>
                    <p className="abt-pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="abt-split">
              <div>
                <CoverageBoard />
              </div>

              <div>
                <h3 className="abt-h3">
                  Where the Work Happens, and Who It&apos;s For
                </h3>
                <p className="abt-lead">
                  We built this agency for the roofer with three trucks, the
                  two-chair dental practice and the cleaning company that just
                  hired its first crew — the businesses where one extra job a
                  week genuinely changes the year. Scoping the work for that
                  budget is the whole point.
                </p>
                <p className="abt-lead">
                  Every engagement starts the same way: understand the business,
                  look at how its customers actually search, and take the
                  shortest route between the two. Then we build it — the site,
                  the profile, the content, the campaigns — with the same team
                  that ran the audit.
                </p>
                <p className="abt-lead">
                  Google Business Profile work is where we go deepest, and it
                  keeps the rest of the stack honest: a profile that wins the{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="abt-inline-link"
                  >
                    local Map Pack
                  </Link>
                  , a site that converts the click it sends, and ads held to a
                  cost-per-call number.
                </p>
                <Link href="/services" className="abt-arrow-link">
                  See how we work across all four channels
                  <FiArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="abt-facts abt-facts-row">
              {companyFacts.map((fact) => (
                <div className="abt-fact" key={fact.k}>
                  <span className="abt-fact-k">{fact.k}</span>
                  <span className="abt-fact-v">{fact.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════ 4 · WHAT WE DO ════════════ */}
        <section className="abt-section">
          <div className="abt-container">
            <div className="abt-sec-head-center">
              <p className="abt-eyebrow">What we do</p>
              <h2 className="abt-h2">
                Four Disciplines, Deliberately Kept in{" "}
                <span className="abt-hl">One Team</span>
              </h2>
              <p className="abt-lead">
                Local visibility compounds when the four channels are built
                together — a profile that ranks, a site that converts the
                traffic it earns, and ads that cover the ground organic
                hasn&apos;t reached yet.
              </p>
            </div>

            <div className="abt-cards">
              {services.map((service) => (
                <div className="abt-card" key={service.title}>
                  <MiniVisual kind={service.visual} />
                  <h3 className="abt-card-title">{service.title}</h3>
                  <p className="abt-card-desc">{service.desc}</p>
                  <ul className="abt-card-list">
                    {service.points.map((point) => (
                      <li key={point}>
                        <FiCheck size={13} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="abt-card-foot">
                    <Link href={service.href} className="abt-arrow-link">
                      {service.cta}
                      <FiArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="abt-note-line">
              Working in a specific trade? Each one has its own playbook — see
              the{" "}
              <Link href="/industries" className="abt-inline-link">
                industries we serve
              </Link>{" "}
              or browse{" "}
              <Link href="/services" className="abt-inline-link">
                all services
              </Link>
              . Need a listing back on Maps quickly? That&apos;s our most
              requested job —{" "}
              <Link href="/services/gmb-reinstatement-help" className="abt-inline-link">
                GMB reinstatement help
              </Link>{" "}
              covers how we handle it.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════ 5 · PROCESS ═══════════ */}
        <section className="abt-section abt-band">
          <div className="abt-container">
            <div className="abt-sec-head">
              <p className="abt-eyebrow abt-eyebrow-light">How we work</p>
              <h2 className="abt-h2">
                Five Stages, in This Order, on Every Engagement
              </h2>
              <p className="abt-lead">
                Same five steps whether we&apos;re building a website, restoring
                a listing or opening an ad account. You always know which one
                you&apos;re on and what it should move.
              </p>
            </div>

            <div className="abt-process-track">
              {processSteps.map((step, i) => (
                <div
                  className="abt-step"
                  key={step.num}
                  style={{ "--i": i } as CSSProperties}
                >
                  <p className="abt-step-num">{step.num}</p>
                  <h3 className="abt-step-title">{step.title}</h3>
                  <p className="abt-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="abt-process-foot">
              <p>
                The audit comes before the proposal, every time — so the plan
                you get is priced against what the data actually shows.
              </p>
              <Link href={SITE_CONTACT.bookCallHref} className="abt-btn-gold">
                Start with the audit
                <span className="abt-btn-arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════ 6 · PRINCIPLES ═══════════ */}
        <section className="abt-section">
          <div className="abt-container">
            <div className="abt-sec-head-center">
              <p className="abt-eyebrow">What you can count on</p>
              <h2 className="abt-h2">Six Things We Hold the Work To</h2>
              <p className="abt-lead">
                These are the standards every engagement is scoped against, and
                the fastest way to tell whether we&apos;re the right fit before
                anyone books a call.
              </p>
            </div>

            <div className="abt-why-cards">
              {principles.map((item) => (
                <div className="abt-why-card" key={item.title}>
                  <div className="abt-why-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <p className="abt-why-card-title">{item.title}</p>
                  <p className="abt-why-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════ 7 · TRACK RECORD ═══════════ */}
        <section className="abt-section">
          <div className="abt-container">
            <div className="abt-split">
              <div>
                <p className="abt-eyebrow">Our track record</p>
                <h2 className="abt-h2">
                  The Numbers Behind the Work, and{" "}
                  <span className="abt-hl">When Each Gain Lands</span>
                </h2>
                <p className="abt-lead">
                  1,500+{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="abt-inline-link"
                  >
                    profiles optimized
                  </Link>
                  , 500+ listings restored and a 5.0 rating on Clutch,
                  cumulative across every engagement to date.
                  Clutch verifies each reviewer before publishing, so that score
                  reflects confirmed work rather than collected testimonials.
                </p>
                <p className="abt-lead">
                  The three levers of local search each land in their own
                  window, and every one of them keeps building after it arrives.
                  Setting that out on day one is how an engagement stays on
                  track — more on the mechanics in{" "}
                  <Link
                    href="/local-seo-google-business-optimization"
                    className="abt-inline-link"
                  >
                    how Map Pack ranking is decided
                  </Link>
                  .
                </p>
                <Link href={SITE_CONTACT.bookCallHref} className="abt-btn">
                  Get a free visibility review
                  <span className="abt-btn-arrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>

              <div>
                <TimelineBars />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════ 8 · REVIEWS ═══════════ */}
        <section className="abt-section">
          <div className="abt-container">
            <div className="abt-sec-head-center">
              <p className="abt-eyebrow">Client reviews</p>
              <h2 className="abt-h2">
                What Clients Say, <span className="abt-hl">Verified</span> by
                Clutch
              </h2>
              <p className="abt-lead">
                Clutch confirms every reviewer before publishing, so each of
                these comes from a client who verified the engagement.
              </p>
            </div>

            <div className="abt-reviews">
              <ClutchWidget
                widgetType="12"
                height="375"
                primaryColor="#2567e8"
                reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ 9 · FAQ ═══════════ */}
        <section className="abt-section">
          <div className="abt-container">
            <div className="abt-faq-grid">
              <div>
                <p className="abt-eyebrow">Common questions</p>
                <h2 className="abt-h2">
                  Questions We Get Before the First Call
                </h2>
                <p className="abt-lead">
                  Anything not covered here, call and ask — you&apos;ll get a
                  direct answer, with no requirement to book anything first.
                </p>
                <a href={SITE_CONTACT.phoneHref} className="abt-btn-ghost">
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>

              <div className="abt-faq-list">
                {aboutFaqs.map((faq) => (
                  <details className="abt-faq-item" name="abt-faq" key={faq.q}>
                    <summary className="abt-faq-q">
                      {faq.q}
                      <span className="abt-faq-icon" aria-hidden="true" />
                    </summary>
                    <p className="abt-faq-a">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════ 10 · FINAL CTA ══════════ */}
        {/* Full-bleed closing band — no .abt-container here on purpose; the
            card carries the side inset itself so it runs edge to edge. This
            is the page's only conversion point now that the contact section
            is gone, so both the call and the phone number live here. */}
        <section className="abt-final">
          <div className="abt-final-card">
            <div className="abt-final-inner">
              <p className="abt-eyebrow abt-eyebrow-light">Ready when you are</p>
              <h2 className="abt-final-h">
                Let&apos;s Map Your <span>Growth Plan</span>
              </h2>
              <p className="abt-final-sub">
                Book a free strategy call and we&apos;ll walk you through the
                fastest next step for your profile, your search visibility and
                your website — with no obligation.
              </p>
              <div className="abt-final-actions">
                <Link href={SITE_CONTACT.bookCallHref} className="abt-btn-gold">
                  Book a free strategy call
                  <span className="abt-btn-arrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="abt-btn-outline-light"
                >
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
