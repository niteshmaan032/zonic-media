/*
 * PHILADELPHIA PPC — rebuilt Aug 2026 on the shared Philadelphia landing system
 * (src/app/style/philadelphia/philaLanding.css, scoped .phl-page).
 *
 * INTENT SPLIT — PPC and SEM are deliberately NOT the same page:
 *   this page (PPC) = the execution layer for PAID ONLY. Account structure,
 *     match types, negative keywords, Quality Score, bids, budgets, landing
 *     pages, conversion tracking. Head terms: "PPC agency Philadelphia",
 *     "Google Ads management Philadelphia", "pay per click Philadelphia".
 *   /philadelphia/sem = the umbrella strategy where paid and organic are
 *     planned together. Head terms: "search engine marketing Philadelphia".
 * Keep that boundary when editing: if a section here starts arguing for organic
 * search or budget splits between channels, it belongs on the SEM page instead.
 *
 * IMAGES: every photo slot is a `.phl-ph` shimmer skeleton captioned with what
 * belongs there and at which ratio. Replace the skeleton div with
 * <Image src="..." alt="..." fill />. Previous photos remain in
 * /public/images/philadelphia/phila-ppc.
 *
 * LEADS: submits as "Pay Per Click (PPC)" (on the ALLOWED_SERVICES whitelist).
 */

import type { Metadata } from "next";
import "@/app/style/philadelphia/philaLanding.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiClock,
  FiDollarSign,
  FiFilter,
  FiLayout,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
  FiRepeat,
  FiSliders,
  FiTarget,
  FiTrendingUp,
  FiX,
  FiZap,
} from "react-icons/fi";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/philadelphia/ppc";

export const metadata: Metadata = {
  title: "PPC Agency Philadelphia | Google Ads Management",
  description:
    "Philadelphia PPC agency managing Google Ads that generate high-intent leads — tight structure, converting landing pages, zero markup on spend. Free audit.",
  keywords: [
    "PPC agency Philadelphia",
    "Google Ads management Philadelphia",
    "PPC management services Philadelphia",
    "pay per click advertising Philadelphia",
    "Philadelphia Google Ads agency",
    "PPC company Philadelphia",
    "Google Ads consultant Philadelphia",
    "landing page optimization Philadelphia",
    "PPC for local business Philadelphia",
    "conversion tracking PPC Philadelphia",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "PPC Agency Philadelphia | Google Ads Management | Zonic Media",
    description:
      "Philadelphia PPC agency managing Google Ads that generate high-intent leads — tight account structure, landing pages that convert, and zero markup on your spend.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Philadelphia PPC", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PPC & Google Ads Management in Philadelphia",
  serviceType: "Pay Per Click Advertising Management",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Google Ads and paid search management for Philadelphia businesses — account structure and rebuilds, keyword and negative keyword management, bid and budget strategy, landing page optimization, remarketing, and full conversion tracking with no markup on ad spend.",
  provider: {
    "@type": "LocalBusiness",
    name: "Zonic Media",
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "City",
    name: "Philadelphia",
    containedInPlace: {
      "@type": "State",
      name: "Pennsylvania",
    },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Philadelphia and the Delaware Valley",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Philadelphia PPC Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Account Audit & Rebuild",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Keyword & Negative Keyword Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Bid & Budget Strategy" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Remarketing Campaigns" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conversion Tracking & Reporting",
        },
      },
    ],
  },
};

const PhilaPpcFaqs = [
  {
    question: "How much does PPC management cost in Philadelphia?",
    answer:
      "There are two separate numbers and we keep them separate. Our management fee is a flat monthly price based on how many campaigns and service lines we are running, quoted after a free account audit, with no long-term contract. Your ad spend is entirely yours — billed by Google directly to your card, never routed through us, and never marked up. Any agency that will not show you that split is hiding something.",
  },
  {
    question: "What monthly ad budget do I need to start?",
    answer:
      "Enough to gather statistically useful data in your category, which in most Philadelphia markets means a few hundred dollars a week rather than a few hundred a month. Competitive categories like legal or home services cost more per click than a niche B2B service. In the free audit we estimate the realistic entry budget for your specific keywords rather than quoting a generic minimum.",
  },
  {
    question: "How fast will Google Ads produce leads?",
    answer:
      "Campaigns can go live within days, but the honest answer is two to three weeks before the numbers mean anything. The first week is learning: match types tightening, negatives going in, low-quality traffic getting cut. By week three you should be seeing qualified calls at a cost per lead we can actually forecast from, and from there it is optimization rather than guesswork.",
  },
  {
    question: "Why is my current Google Ads account wasting money?",
    answer:
      "In almost every account we audit it is the same short list: broad match with no negative keyword discipline, one ad group trying to cover twenty unrelated keywords, traffic pointed at a homepage instead of a relevant landing page, and conversion tracking that either was never installed or counts page views as leads. Each of those is fixable, and the audit shows you exactly which ones are costing you.",
  },
  {
    question: "Do I own the Google Ads account?",
    answer:
      "Always. We build or work inside an account in your name, on your billing, with you as owner and us as a manager. If we ever stop working together you keep the account, the campaign history, the conversion data, and the audiences. Agencies that run your ads inside their own account are holding your history hostage.",
  },
  {
    question: "Do you do the landing pages, or just run the ads?",
    answer:
      "Both, because sending paid traffic to a weak page is the fastest way to waste a budget. We build or rebuild the pages your ads point at — one clear action, fast load, message matched to the ad that brought them — and track every meaningful interaction. Lifting conversion rate from 2% to 4% halves your cost per lead without adding a dollar of spend.",
  },
  {
    question: "Can you manage Bing Ads and remarketing too?",
    answer:
      "Yes. Microsoft Ads is often overlooked and frequently cheaper per click in professional and B2B categories, so it is worth running once Google is stable. Remarketing runs alongside both — most first-time visitors are not ready to buy, and staying in front of them costs a fraction of what the original click did.",
  },
  {
    question: "What do you report on each month?",
    answer:
      "Spend, clicks, cost per click, conversions, cost per lead, and which campaigns and keywords produced them — plus a plain-English note on what we changed and why. Not a screenshot of the Google Ads dashboard. If cost per lead moves in the wrong direction you hear it from us with the fix already underway.",
  },
];

const philaPpcFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PhilaPpcFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const HeroStats = [
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    num: "50+",
    label: "Businesses grown across the US",
  },
  {
    icon: <FaStar aria-hidden="true" />,
    num: "4.9/5",
    label: "Average client rating on Clutch",
  },
  {
    icon: <FiClock aria-hidden="true" />,
    num: "2–3 wks",
    label: "To your first tracked leads",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    num: "0%",
    label: "Markup on your ad spend",
  },
];

const AboutChecks = [
  "High-intent keywords only",
  "Negatives worked weekly",
  "Landing pages that convert",
  "Every lead tracked to source",
];

const ServiceCards = [
  {
    tone: "blue",
    icon: <FiSliders aria-hidden="true" />,
    title: "Account Audit & Rebuild",
    desc: "We start by showing you where the money is going. Then we restructure — tight themed ad groups, sensible match types, and campaigns split so budget follows your margins instead of your loudest keyword.",
  },
  {
    tone: "gold",
    icon: <FiFilter aria-hidden="true" />,
    title: "Keyword & Negative Management",
    desc: (
      <>
        The negative keyword list is where most accounts are won or lost. We
        mine the search terms report every week and cut the queries quietly
        draining your budget before they add up — and what converts feeds the
        organic half of our{" "}
        <Link href="/services/philadelphia/sem" className="phl-inline-link">
          search engine marketing
        </Link>
        .
      </>
    ),
  },
  {
    tone: "blue",
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Bid & Budget Strategy",
    desc: "Bids set against what a lead is actually worth to you, budgets weighted toward the campaigns and hours that convert, and automated bidding used where it helps rather than everywhere by default.",
  },
  {
    tone: "gold",
    icon: <FiLayout aria-hidden="true" />,
    title: "Landing Page Optimization",
    desc: (
      <>
        One page, one action, message matched to the ad that produced the click
        — built on the same conversion-first{" "}
        <Link href="/services/web-design" className="phl-inline-link">
          web design
        </Link>{" "}
        principles we use everywhere else.
      </>
    ),
  },
  {
    tone: "blue",
    icon: <FiRepeat aria-hidden="true" />,
    title: "Remarketing Campaigns",
    desc: "Most people who click are not ready today. We build audiences from your traffic and stay in front of them until they are, at a fraction of the original click cost.",
  },
  {
    tone: "gold",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Conversion Tracking & Reporting",
    desc: "Call tracking, form tracking, and offline conversion import wired properly, so the report shows leads and cost per lead rather than clicks and impressions.",
  },
];

const ChannelBars = [
  { label: "Search impression share", val: 84, tone: "gold" },
  { label: "Quality Score avg.", val: 89, tone: "blue" },
  { label: "Conversion rate", val: 76, tone: "gold" },
  { label: "Wasted spend cut", val: 92, tone: "blue" },
];

const ResultCards = [
  {
    icon: <FiDollarSign aria-hidden="true" />,
    industry: "Home services · Delaware County",
    metric: "−52%",
    label: "Cost per lead in 90 days",
    desc: (
      <>
        A negative keyword overhaul and a rebuilt account structure cut the
        traffic that was never going to convert, without reducing lead volume
        once — paired with{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="phl-inline-link"
        >
          home-services local SEO
        </Link>{" "}
        to keep the organic calls flowing.
      </>
    ),
  },
  {
    icon: <FiTarget aria-hidden="true" />,
    industry: "Legal services · Center City",
    metric: "4.2×",
    label: "Return on ad spend",
    desc: "Match types tightened, budget shifted onto the three practice areas with real case value, and a dedicated landing page built for each one.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    industry: "B2B services · Metro",
    metric: "+186%",
    label: "Qualified form fills",
    desc: "Conversion tracking was counting page views as leads. Once we fixed the measurement, the optimization finally had something true to optimize toward.",
  },
];

const ShowcaseFloats = [
  { num: "−52%", label: "Typical cost-per-lead drop" },
  { num: "2–3 wks", label: "To first tracked leads" },
  { num: "0%", label: "Markup on ad spend" },
];

const CompareThem = [
  "Ad spend marked up and hidden inside the retainer",
  "Campaigns run inside the agency's own account",
  "Broad match everywhere, negatives never touched",
  "All traffic dumped onto the homepage",
  "Reports showing clicks and impressions, not leads",
];

const CompareUs = [
  "Spend billed by Google straight to you, never marked up",
  "Account in your name — you keep it and the history",
  "Search terms mined and negatives added every week",
  "A dedicated landing page per campaign, built to convert",
  "Reports showing leads, cost per lead, and what changed",
];

const ScoreRows = [
  { label: "Wasted spend", before: 28, after: 92 },
  { label: "Cost per lead", before: 31, after: 87 },
  { label: "Conversion rate", before: 24, after: 76 },
  { label: "Tracking accuracy", before: 15, after: 98 },
];

const WhyCards = [
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Zero markup, full transparency",
    desc: "Your spend goes from your card to Google. Our fee is separate and flat. You can log into the account any day of the week and see exactly what we did.",
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Weekly, not monthly",
    desc: "Search terms mined, negatives added, and bids adjusted every week. Accounts that get touched once a month are the ones quietly bleeding budget between check-ins.",
  },
  {
    icon: <FiBarChart2 aria-hidden="true" />,
    title: "Measured on leads, not clicks",
    desc: "We set up tracking before we spend a dollar, so every optimization decision is made against real leads instead of the proxy metrics that make reports look good.",
  },
];

const BannerChecks = [
  "Wasted spend identified line by line",
  "Account structure benchmarked",
  "Negative keyword gaps mapped",
  "A 90-day paid search plan you keep",
];

const AuditRows = [
  { label: "Account structure", flag: "Audited" },
  { label: "Negative keywords", flag: "Gaps mapped" },
  { label: "Conversion tracking", flag: "Verified" },
];

const MarqueeItems = [
  "Philadelphia PPC",
  "Google Ads Management",
  "Zero Spend Markup",
  "Negative Keywords",
  "Landing Page CRO",
  "Remarketing",
  "Conversion Tracking",
];

// Centre point of each node on the orbit ellipse (centre 50%/50%, semi-axes
// 37% × 43% — the figure .phl-engine-orbit draws). Collapses to a grid <992px.
const EngineNodes = [
  {
    icon: <FiSliders aria-hidden="true" />,
    title: "Account Structure",
    outcome: "Built to scale",
    tone: "blue",
    left: "50%",
    top: "7%",
  },
  {
    icon: <FiFilter aria-hidden="true" />,
    title: "Negative Keywords",
    outcome: "Waste cut weekly",
    tone: "gold",
    left: "82%",
    top: "28.5%",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Bids & Budgets",
    outcome: "Spend follows margin",
    tone: "blue",
    left: "82%",
    top: "71.5%",
  },
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "Landing Pages",
    outcome: "Clicks convert",
    tone: "gold",
    left: "50%",
    top: "93%",
  },
  {
    icon: <FiRepeat aria-hidden="true" />,
    title: "Remarketing",
    outcome: "Second chance",
    tone: "blue",
    left: "18%",
    top: "71.5%",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Tracking",
    outcome: "Leads, not clicks",
    tone: "gold",
    left: "18%",
    top: "28.5%",
  },
];

const IndustryChips = [
  "Home Services",
  "Legal & Financial",
  "Healthcare & Dental",
  "Professional Services",
  "B2B & Manufacturing",
  "Real Estate",
  "Education & Training",
  "E-commerce",
];

const GrowCards = [
  {
    href: "/services/philadelphia/sem",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Search Engine Marketing",
    desc: "Ads are half the page. See how paid and organic run as one strategy.",
    cta: "See SEM",
  },
  {
    href: "/services/philadelphia/local-seo",
    icon: <FiMapPin aria-hidden="true" />,
    title: "Local SEO in Philadelphia",
    desc: "Stop renting every click — earn the map pack positions underneath your ads.",
    cta: "See local SEO",
  },
  {
    href: "/services/google-ads",
    icon: <FiTarget aria-hidden="true" />,
    title: "Google Ads Nationwide",
    desc: "Operating outside the Philadelphia metro? Same team, same process, any market.",
    cta: "See Google Ads",
  },
];

function Page() {
  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philaPpcFaqJsonLd) }}
      />

      <div className="phl-page">
        <main>
          {/* 1. Hero */}
          <section className="phl-hero">
            <div className="phl-container">
              <div className="phl-hero-grid">
                <div className="phl-hero-copy">
                  <p className="phl-eyebrow">PPC Agency in Philadelphia</p>
                  <h1 className="phl-h1">
                    Google Ads that buy{" "}
                    <span className="phl-hl">leads, not clicks</span>
                  </h1>
                  <p className="phl-hero-sub">
                    Most Philadelphia Google Ads accounts waste a third of their
                    budget on traffic that was never going to convert. We
                    restructure the account, cut the queries draining it, point
                    every campaign at a page built to convert — and bill your
                    spend straight from Google with zero markup.
                  </p>

                  <div className="phl-hero-badges" aria-label="Partner badges">
                    {/* Self-hosted Clutch badge — the live iframe embed sits
                        behind a Cloudflare challenge and breaks randomly. */}
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
                    <HashScrollLink
                      href="#phl-form"
                      className="phl-btn"
                      offset={120}
                    >
                      Get Your Free Google Ads Audit
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
                      <strong>Rated 4.9/5</strong> by the businesses we grow
                    </p>
                  </div>
                </div>

                <div className="phl-hero-visual">
                  <div className="phl-hero-media">
                    <Image
                      src="/images/philadelphia/phila-ppc/philadelphia-ppc-specialist.webp"
                      alt="Philadelphia PPC specialist optimizing campaign performance"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 991px) 92vw, 38vw"
                    />
                  </div>

                  <div className="phl-hero-float phl-hero-float--a">
                    <span className="phl-hero-float-icon">
                      <FiDollarSign aria-hidden="true" />
                    </span>
                    <p>
                      <strong>−52% cost per lead</strong>
                      home services, Delaware County
                    </p>
                  </div>

                  <div className="phl-hero-float phl-hero-float--b">
                    <span className="phl-hero-float-icon phl-hero-float-icon--gold">
                      <FiTarget aria-hidden="true" />
                    </span>
                    <p>
                      <strong>4.2× return on spend</strong>
                      legal services, Center City
                    </p>
                  </div>
                </div>
              </div>

              <div className="phl-hero-stats">
                {HeroStats.map((stat) => (
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

          {/* 2. Where the budget goes */}
          <section className="phl-about">
            <div className="phl-container">
              <div className="phl-about-grid">
                <div className="phl-collage">
                  <div className="phl-collage-a">
                    <Image
                      src="/images/philadelphia/phila-ppc/philadelphia-business-ppc-results.webp"
                      alt="Philadelphia business owner reviewing paid campaign leads and booked jobs"
                      fill
                      unoptimized
                      sizes="(max-width: 991px) 72vw, 31vw"
                    />
                  </div>
                  <div className="phl-collage-b">
                    <Image
                      src="/images/philadelphia/phila-ppc/philadelphia-ppc-performance-dashboard.webp"
                      alt="Laptop displaying PPC conversions, cost per lead, and budget pacing"
                      fill
                      unoptimized
                      sizes="(max-width: 991px) 54vw, 23vw"
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
                        <textPath href="#phlBadgeCircle">
                          Philadelphia PPC Management • Zonic Media •
                        </textPath>
                      </text>
                    </svg>
                    <span className="phl-collage-badge-icon">
                      <FiTarget aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="phl-about-copy">
                  <p className="phl-eyebrow">Where The Budget Actually Goes</p>
                  <h2 className="phl-h2">
                    You are not short on clicks.{" "}
                    <span className="phl-hl-text">
                      You are short on the right ones.
                    </span>
                  </h2>
                  <p className="phl-lead">
                    Nearly every Philadelphia Google Ads account we audit has
                    the same four problems. Broad match running without a real
                    negative keyword list, so you pay for searches from people
                    looking for jobs, DIY guides, or your competitors by name.
                    One ad group covering twenty unrelated keywords, so the ad
                    can never match the search closely enough to earn a decent
                    Quality Score. Every campaign pointed at the homepage. And
                    conversion tracking that either was never installed or
                    counts a page view as a lead.
                  </p>
                  <p className="phl-lead">
                    None of that is exotic and none of it is unfixable. We start
                    by showing you exactly what each problem is costing in your
                    account, then rebuild in the order that saves money fastest
                    — negatives and tracking first, structure second, landing
                    pages third — the same discipline behind our{" "}
                    <Link
                      href="/services/google-ads"
                      className="phl-inline-link"
                    >
                      nationwide Google Ads management
                    </Link>
                    . The budget does not need to grow before the results do.
                  </p>

                  <div className="phl-checks">
                    {AboutChecks.map((check) => (
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
                  <p className="phl-eyebrow">What&apos;s Included</p>
                  <h2 className="phl-h2">
                    Everything a paid search account needs, worked weekly
                  </h2>
                </div>
                <Link href="/services" className="phl-link-arrow">
                  View all services <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>

              <div className="phl-cards">
                {ServiceCards.map((card) => (
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

          {/* 4. Blue band + account console */}
          <section className="phl-band">
            <div className="phl-band-grid">
              <div className="phl-band-content">
                <p className="phl-eyebrow">No Markup, No Mystery</p>
                <h2 className="phl-h2">
                  Your spend goes to Google. Our fee is separate.
                </h2>
                <p className="phl-lead">
                  A lot of agencies quote one number that bundles their fee and
                  your ad spend together, which makes it impossible to tell
                  whether your campaigns are working or your agency is just
                  taking a bigger cut. We do not do that. Google bills your card
                  directly for every click. Our management fee is a separate,
                  flat monthly figure, agreed up front.
                </p>
                <p className="phl-lead">
                  The account sits in your name with you as owner, so you can
                  log in whenever you like and see precisely what changed. If we
                  ever part ways you keep the account, the history, the
                  conversion data, and the audiences — none of which you would
                  get back from an agency running your ads inside their own
                  account.
                </p>
                <HashScrollLink
                  href="#phl-form"
                  className="phl-btn"
                  offset={120}
                >
                  Audit My Ad Spend
                  <span className="phl-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>

              <div className="phl-console" aria-hidden="true">
                <div className="phl-console-head">
                  <h3>Account Health Console</h3>
                  <span className="phl-console-tag">After 90 days</span>
                </div>

                <div className="phl-console-metrics">
                  <div>
                    <strong>318</strong>
                    <span>Tracked leads</span>
                  </div>
                  <div>
                    <strong>$34</strong>
                    <span>Cost per lead</span>
                  </div>
                  <div>
                    <strong>−52%</strong>
                    <span>Vs. before</span>
                  </div>
                </div>

                <p className="phl-console-sub">Account health</p>
                <div className="phl-console-bars">
                  {ChannelBars.map((bar) => (
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
                  <span className="phl-console-pill">
                    <FiFilter />
                    412 negatives added
                  </span>
                  <span className="phl-console-pill">
                    <FiDollarSign />
                    0% markup
                  </span>
                  <span className="phl-console-pill">
                    <FaStar />
                    4.9 · 187 reviews
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Process */}
          <section className="phl-process" id="phl-process">
            <div className="phl-container">
              <div className="phl-sec-head">
                <div>
                  <p className="phl-eyebrow">How It Works</p>
                  <h2 className="phl-h2">
                    From wasted spend to tracked leads in four steps
                  </h2>
                </div>
                <HashScrollLink
                  href="#phl-form"
                  className="phl-link-arrow"
                  offset={120}
                >
                  Start with step one <FiArrowUpRight aria-hidden="true" />
                </HashScrollLink>
              </div>

              <div className="phl-bento">
                <article className="phl-bento-card phl-bento-card--s1">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      01
                    </span>
                    <span className="phl-bento-tag">Week 1</span>
                  </div>
                  <h3>Free Google Ads audit</h3>
                  <p>
                    We go through your account line by line and show you what
                    each problem is costing — the wasted queries, the structural
                    issues, and whether your conversion tracking is telling you
                    the truth.
                  </p>
                  <div className="phl-bento-visual" aria-hidden="true">
                    <p className="phl-bento-visual-title">
                      Where Philly PPC clients land after 90 days
                    </p>
                    {[
                      { label: "Wasted spend cut", val: 92 },
                      { label: "Cost per lead", val: 87 },
                      { label: "Conversion rate", val: 76 },
                    ].map((bar) => (
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
                    <span className="phl-bento-tag">Weeks 2–3</span>
                  </div>
                  <h3>Tracking, then structure</h3>
                  <p>
                    Conversion tracking goes in before anything else, because
                    optimizing against bad data is worse than not optimizing.
                    Then the rebuild: themed ad groups, match types, negatives.
                  </p>
                </article>

                <article className="phl-bento-card phl-bento-card--s3">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      03
                    </span>
                    <span className="phl-bento-tag">Every week</span>
                  </div>
                  <h3>Mine, cut, and refine</h3>
                  <p>
                    Search terms reviewed weekly, negatives added, bids adjusted
                    against what a lead is actually worth. This is the work that
                    separates an account that improves from one that drifts.
                  </p>
                  <div className="phl-bento-chips">
                    {["Search terms", "Negatives", "Bid tuning"].map((chip) => (
                      <span className="phl-bento-chip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <HashScrollLink
                    href="#phl-form"
                    className="phl-btn phl-bento-cta"
                    offset={120}
                  >
                    Start Cutting Waste
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
                      <span className="phl-bento-tag">Ongoing</span>
                    </div>
                    <h3>Scale what converts</h3>
                    <p>
                      Once cost per lead is stable and predictable, we scale
                      budget into the campaigns earning it and expand into new
                      services, new areas, and Microsoft Ads — while{" "}
                      <Link
                        href="/services/philadelphia/local-seo"
                        className="phl-inline-link"
                      >
                        local SEO in Philadelphia
                      </Link>{" "}
                      earns the map-pack spots you stop having to buy.
                    </p>
                  </div>
                  <div className="phl-bento-s4-side">
                    <div className="phl-bento-chips">
                      {["Scale budget", "New services", "Microsoft Ads"].map(
                        (chip) => (
                          <span className="phl-bento-chip" key={chip}>
                            {chip}
                          </span>
                        ),
                      )}
                    </div>
                    <HashScrollLink
                      href="#phl-form"
                      className="phl-link-arrow"
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
          <section className="phl-results">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Real Results</p>
                <h2 className="phl-h2">
                  What happens when the waste gets cut first
                </h2>
                <p className="phl-lead">
                  Three Philadelphia accounts, three different problems, the
                  same order of operations.
                </p>
              </div>

              <div className="phl-results-cards">
                {ResultCards.map((card) => (
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

          {/* 7. Showcase image band */}
          <section className="phl-showcase">
            <div className="phl-container">
              <div className="phl-showcase-media">
                <div className="phl-showcase-photo">
                  <Image
                    src="/images/philadelphia/phila-ppc/philadelphia-ppc-agency-office.webp"
                    alt="PPC campaign operations workspace overlooking Philadelphia"
                    fill
                    unoptimized
                    sizes="(max-width: 991px) 92vw, 80vw"
                  />
                </div>
                <div className="phl-showcase-floats">
                  {ShowcaseFloats.map((float) => (
                    <div className="phl-showcase-float" key={float.label}>
                      <strong>{float.num}</strong>
                      <span>{float.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 8. Comparison */}
          <section className="phl-compare">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">The Difference</p>
                <h2 className="phl-h2">
                  Zonic Media vs. a typical PPC agency
                </h2>
                <p className="phl-lead">
                  The difference is mostly about what you can see. Here is what
                  working with a transparent{" "}
                  <Link href="/" className="phl-inline-link">
                    marketing agency
                  </Link>{" "}
                  looks like.
                </p>
              </div>

              <div className="phl-compare-grid">
                <div className="phl-compare-col phl-compare-col--them">
                  <h3>Typical PPC agency</h3>
                  <p className="phl-compare-sub">
                    Why the budget quietly leaks
                  </p>
                  <ul>
                    {CompareThem.map((item) => (
                      <li key={item}>
                        <FiX aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="phl-compare-col phl-compare-col--us">
                  <h3>PPC with Zonic Media</h3>
                  <p className="phl-compare-sub">
                    Transparent, and reported like a P&amp;L
                  </p>
                  <ul>
                    {CompareUs.map((item) => (
                      <li key={item}>
                        <FaCircleCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="phl-compare-col phl-compare-col--score"
                  aria-hidden="true"
                >
                  <h3>Account scorecard</h3>
                  <p className="phl-compare-sub">
                    A typical Philly account&apos;s first six months
                  </p>
                  <div className="phl-score-rows">
                    {ScoreRows.map((row) => (
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
                            style={
                              { "--w": `${row.after}%` } as React.CSSProperties
                            }
                          />
                          <span
                            className="phl-score-before"
                            style={
                              { "--b": `${row.before}%` } as React.CSSProperties
                            }
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
                <h2 className="phl-h2">
                  A PPC partner, not a percentage of your spend
                </h2>
                <p className="phl-lead">
                  Clicks are the output. Structure, discipline, and honest
                  measurement are what you are actually buying.
                </p>
              </div>

              <div className="phl-why-cards">
                {WhyCards.map((card) => (
                  <article className="phl-why-card" key={card.title}>
                    <span className="phl-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>

              <div className="phl-why-banner">
                <div className="phl-why-banner-text">
                  <p className="phl-eyebrow">Free Google Ads Audit</p>
                  <h3>See exactly what your ad spend is buying</h3>
                  <p>
                    We go through your account and show you the wasted queries,
                    the structural problems, and whether your tracking is
                    trustworthy — then hand you a 90-day plan. Free, and yours
                    to keep whether or not we work together.
                  </p>
                  <div className="phl-banner-checks">
                    {BannerChecks.map((check) => (
                      <div className="phl-banner-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>
                  <HashScrollLink
                    href="#phl-form"
                    className="phl-btn"
                    offset={120}
                  >
                    Claim Your Free Audit
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                <div className="phl-audit-card" aria-hidden="true">
                  <div className="phl-audit-head">
                    <h4>Account Health Score</h4>
                    <span className="phl-audit-tag">After 6 months</span>
                  </div>
                  <div className="phl-audit-ring-wrap">
                    <div className="phl-audit-ring">
                      <span>
                        93<small>/100</small>
                      </span>
                    </div>
                    <div className="phl-audit-ring-info">
                      <strong>Excellent</strong>
                      <small>
                        Where our Philadelphia PPC accounts typically land after
                        six months of weekly optimization
                      </small>
                    </div>
                  </div>
                  {AuditRows.map((row) => (
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
                  Trusted by small &amp; mid-size businesses across the US
                </h2>
              </div>
              <div className="phl-reviews-widget">
                <ClutchWidget
                  widgetType="12"
                  height="375"
                  primaryColor="#2567e8"
                  reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
                />
              </div>
            </div>
          </section>

          {/* 11. Marquee */}
          <div className="phl-marquee" aria-hidden="true">
            <div className="phl-marquee-track">
              {[0, 1].map((copy) => (
                <span className="phl-marquee-item" key={copy}>
                  {MarqueeItems.map((item) => (
                    <span className="phl-marquee-item" key={item}>
                      {item} <FaStar aria-hidden="true" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* 12. Account engine — the six PPC levers */}
          <section className="phl-engine-sec">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Everything Working Together</p>
                <h2 className="phl-h2">Six levers, one paid engine</h2>
                <p className="phl-lead">
                  A Google Ads account is not one setting you optimize, it is
                  six levers that only work pulled together. Neglect any one and
                  the cost per lead tells on you. We work all six every week,
                  for businesses across Philadelphia and the surrounding
                  counties — and across the state line for our{" "}
                  <Link
                    href="/services/delaware/digital-marketing"
                    className="phl-inline-link"
                  >
                    digital marketing in Delaware
                  </Link>{" "}
                  clients.
                </p>
              </div>

              <div className="phl-engine">
                <div className="phl-engine-orbit" aria-hidden="true" />

                <div className="phl-engine-core">
                  <span className="phl-engine-core-icon" aria-hidden="true">
                    <FiTarget />
                  </span>
                  <strong>Your ad account</strong>
                  <span>Your name · your billing · zero markup</span>
                  <HashScrollLink
                    href="#phl-form"
                    className="phl-btn phl-engine-core-cta"
                    offset={120}
                  >
                    Get Your Free Audit
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                {EngineNodes.map((node) => (
                  <div
                    className={`phl-engine-node phl-engine-node--${node.tone}`}
                    style={
                      {
                        "--l": node.left,
                        "--t": node.top,
                      } as React.CSSProperties
                    }
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

              <p className="phl-chips-label">
                Running paid search for Philadelphia businesses in
              </p>
              <div className="phl-chips">
                {IndustryChips.map((chip) => (
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
                  <p className="phl-eyebrow">FAQs</p>
                  <h2 className="phl-h2">
                    Straight answers about PPC in Philadelphia
                  </h2>
                  <p className="phl-lead">
                    Pricing, budgets, timelines, account ownership, and why your
                    current account is probably leaking. If your question is not
                    here, send it through the form — a strategist answers, not a
                    sales script.
                  </p>
                  <div className="phl-faq-cta">
                    <HashScrollLink
                      href="#phl-form"
                      className="phl-btn"
                      offset={120}
                    >
                      Ask About Your Account
                      <span className="phl-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                  </div>
                </div>
                <div>
                  <GmbFaqs items={PhilaPpcFaqs} />
                </div>
              </div>
            </div>
          </section>

          {/* 14. Grow further — internal links */}
          <section className="phl-grow">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Grow Further</p>
                <h2 className="phl-h2">
                  Ads are the fastest channel. Not the only one.
                </h2>
                <p className="phl-lead">
                  Paid search buys you the top of the page today — see the full{" "}
                  <Link
                    href="/services/philadelphia/digital-marketing"
                    className="phl-inline-link"
                  >
                    Philadelphia marketing engine
                  </Link>{" "}
                  for what runs alongside it.
                </p>
              </div>
              <div className="phl-grow-cards">
                {GrowCards.map((card) => (
                  <Link
                    href={card.href}
                    className="phl-grow-card"
                    key={card.href}
                  >
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
                  <p className="phl-eyebrow">Get Started</p>
                  <h2 className="phl-h2">
                    Claim your free Google Ads audit
                  </h2>
                  <p className="phl-lead">
                    Send us your account and we will show you exactly where the
                    spend is going, what it is costing you, and the 90-day plan
                    to fix it — at a flat monthly fee with zero markup.
                  </p>

                  <div className="phl-form-contacts">
                    <a
                      href={SITE_CONTACT.emailHref}
                      className="phl-form-contact"
                    >
                      <span className="phl-form-contact-icon">
                        <FiMail aria-hidden="true" />
                      </span>
                      <span className="phl-form-contact-txt">
                        <small>Email us anytime</small>
                        <strong>{SITE_CONTACT.email}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="phl-form-contact"
                    >
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
                    formType="philadelphia-ppc"
                    badge="Free Audit"
                    title="Get your free Google Ads audit"
                    subtitle="No contracts, no pressure — just a clear picture of what your ad spend is buying and what it could buy instead."
                    submitText="Send My Free Audit"
                    messageLabel="Tell us about your account"
                    messagePlaceholder="Your services, roughly what you spend per month, and what you'd like to improve"
                    defaultServices={["Pay Per Click (PPC)"]}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Page;
