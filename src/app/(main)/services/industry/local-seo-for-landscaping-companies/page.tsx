import type { Metadata } from "next";
import "@/app/style/templateSeo.css";
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
  FiClock,
  FiFileText,
  FiImage,
  FiLink2,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiX,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/industry/local-seo-for-landscaping-companies";

export const metadata: Metadata = {
  title: "Local SEO for Landscaping Companies That Wins Jobs",
  description:
    "Local SEO for landscaping companies that ranks you when homeowners search 'landscaper near me' or 'landscaping company near me' — profile, reviews, and pages that book estimates. Get a free audit.",
  keywords: [
    "landscaper near me",
    "landscaping company near me",
    "lawn care near me",
    "landscape design near me",
    "hardscaping near me",
    "landscaping SEO",
    "SEO for landscapers",
    "local SEO for landscaping",
    "Google Business Profile for landscapers",
    "landscaping lead generation",
    "local SEO for landscaping companies",
    "landscaping company SEO agency",
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
    title: "Local SEO for Landscaping Companies That Wins Jobs | Zonic Media",
    description:
      "Local SEO for landscaping companies that wins the Google map pack — profile optimization, reviews, and service-area pages that turn 'landscaper near me' searches into booked estimates.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Local SEO for Landscaping Companies", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO for Landscaping Companies",
  serviceType: "Local Search Engine Optimization for Landscaping Companies",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Local SEO for landscaping companies covering Google Business Profile optimization, citation building, review growth, on-page SEO, and service-area content — built to rank landscapers in the Google map pack and grow booked estimates.",
  provider: {
    "@type": "LocalBusiness",
    name: "Zonic Media",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Landscaping companies, lawn care businesses, landscape design firms, hardscaping contractors",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping Local SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Optimization for Landscapers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landscaping Keyword & Competitor Research",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Citation & Listing Management" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Review Growth & Reputation" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Page SEO & Service-Area Pages",
        },
      },
    ],
  },
};

const LandscapingSeoFaqs = [
  {
    question: "What's included in your landscaping local SEO services?",
    answer:
      "Every landscaping campaign covers the full local ranking system: Google Business Profile optimization, citation building and cleanup, review growth, on-page SEO for your landscape design, lawn care, and service-area pages, local content, and a monthly report that shows rankings, calls, and booked estimates — not vanity metrics.",
  },
  {
    question: "How long does landscaping SEO take to show results?",
    answer:
      "Most landscaping companies see measurable movement within 60 to 90 days — better map pack visibility, more profile actions, and more calls for searches like 'landscaper near me' and 'landscape design near me.' Competitive markets take longer to fully dominate, but the trajectory is visible from the first monthly report, and momentum builds ahead of each spring and summer season.",
  },
  {
    question: "How much does local SEO for landscaping companies cost?",
    answer:
      "Pricing depends on how many locations or service areas you cover, how competitive your market is, and how aggressively you want to grow across design, lawn care, and hardscaping work. After a free audit we quote a flat monthly price — no long-term contracts and no surprise line items.",
  },
  {
    question: "Do you guarantee first-page Google rankings for landscaping keywords?",
    answer:
      "Our track record speaks for itself — most landscaping clients reach top-three map pack positions for their core keywords, and every campaign is built on the exact signals Google rewards. Because Google's results change daily, no agency can honestly promise a fixed position, so we guarantee what matters: full transparency. You see exactly where you rank, what improved, and what we did each month — and with no long-term contracts, we earn your business with results.",
  },
  {
    question: "Do landscaping companies really need Google Business Profile optimization?",
    answer:
      "Yes — it is the single biggest lever in landscaping local SEO. Your Google Business Profile decides whether you show up in the local map pack when a homeowner searches for a landscaper or lawn care, and it drives your call volume, direction requests, and review visibility. We optimize every field, category, project photo, and post so Google trusts your profile and customers choose it.",
  },
  {
    question: "Can you help seasonal, multi-location, and service-area landscaping businesses?",
    answer:
      "Absolutely. We build local SEO systems for solo landscapers, seasonal crews, and multi-location landscaping brands alike — service-area targeting, individual location and neighborhood pages, and map visibility for every city and suburb you cover, all reported in one clear dashboard.",
  },
  {
    question: "Why choose Zonic Media over another landscaping SEO company?",
    answer:
      "We specialize in local home-service businesses like landscaping, and everything is done in-house by the team you actually talk to. You get a dedicated strategist, monthly reporting tied to calls and booked estimates, and work that is built to compound season after season — not churn.",
  },
];

const landscapingSeoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: LandscapingSeoFaqs.map((faq) => ({
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
    label: "Local & home-service businesses ranked",
  },
  {
    icon: <FaStar aria-hidden="true" />,
    num: "4.9/5",
    label: "Average client rating on Clutch",
  },
  {
    icon: <FiClock aria-hidden="true" />,
    num: "60–90",
    label: "Days to measurable movement",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    num: "100%",
    label: "In-house work — nothing outsourced",
  },
];

const BannerChecks = [
  "Your landscaping map pack growth plan",
  "Profile wins ready to unlock",
  "Citation opportunities mapped",
  "Review growth roadmap",
];

const AuditRows = [
  { label: "Google Business Profile", flag: "A+ grade" },
  { label: "Citations & listings", flag: "100% accurate" },
  { label: "Review velocity", flag: "Ahead of top 3" },
];

const ProblemChecks = [
  "Map pack ranking strategy",
  "Profile fully optimized",
  "Citations cleaned & built",
  "Reviews growing weekly",
];

const ServiceCards = [
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: (
      <>
        Your profile is your new homepage in the map pack. We optimize every
        field, landscaping category, project photo, and post — the same system
        behind our{" "}
        <Link href="/services/gmb-optimization" className="tseo-inline-link">
          GBP optimization service
        </Link>{" "}
        — so Google trusts it and homeowners choose you.
      </>
    ),
  },
  {
    icon: <FiSearch aria-hidden="true" />,
    title: "Landscaping Keyword & Competitor Research",
    desc: "We map every search your customers actually type — landscaper near me, landscape design, lawn care, hardscaping, irrigation — city by city, and build the exact strategy that wins those searches for you.",
  },
  {
    icon: <FiLink2 aria-hidden="true" />,
    title: "Citations & Listing Management",
    desc: "Consistent name, address, and phone across every directory that matters — including the landscaping and contractor listings Google checks. We fix the wrong ones, build the missing ones, and keep them synced.",
  },
  {
    icon: <FiStar aria-hidden="true" />,
    title: "Review Growth & Reputation",
    desc: "A steady stream of real reviews from real homeowners, with responses that show Google — and the next customer comparing landscaping companies — that somebody is home.",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "On-Page SEO & Service-Area Pages",
    desc: (
      <>
        Service and city pages built around real landscaping searches, with
        schema and internal links that make every page easier to rank — backed
        by conversion-first{" "}
        <Link href="/services/web-design" className="tseo-inline-link">
          website design
        </Link>{" "}
        when your site needs it.
      </>
    ),
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Tracking & Monthly Reporting",
    desc: "Rankings, calls, direction requests, and booked-estimate leads in one plain-English report. You always know what we did, what moved, and what is next.",
  },
];

const ResultCards = [
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    industry: "Landscape Design Co.",
    metric: "+212%",
    label: "Calls from Google Business Profile",
    desc: "From page-two invisibility to top-three map pack rankings for 'landscaper near me' across every service city within one spring season.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    industry: "Lawn Care & Maintenance",
    metric: "Top 3",
    label: "Map pack for every core keyword",
    desc: "A profile rebuild, citation cleanup, and review growth took the company from #11 to the top three before the busy mowing season peaked.",
  },
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    industry: "Commercial Landscaping",
    metric: "3.2×",
    label: "More booked projects from local search",
    desc: "Service-area and city pages turned seasonal design and hardscaping spikes into a steady, year-round landscaping pipeline.",
  },
];

const ScoreRows = [
  { label: "Profile strength", before: 34, after: 92 },
  { label: "Citation accuracy", before: 41, after: 96 },
  { label: "Review velocity", before: 22, after: 78 },
  { label: "Map pack visibility", before: 18, after: 84 },
];

const RankRows = [
  { kw: "landscaper near me", pos: "#1", delta: "▲ 5" },
  { kw: "landscape design [city]", pos: "#2", delta: "▲ 7" },
  { kw: "lawn care near me", pos: "#1", delta: "▲ 4" },
  { kw: "hardscaping near me", pos: "#3", delta: "▲ 8" },
];

const ReviewBarHeights = [28, 36, 44, 52, 58, 68, 74];

const CompareThem = [
  "Set-and-forget profile, updated quarterly at best",
  "Reports full of impressions, empty of booked estimates",
  "Offshore link packages and duplicate citations",
  "One account manager for 80 clients",
  "12-month contracts before you see a single lead",
];

const CompareUs = [
  "Profile worked weekly — posts, project photos, Q&A, landscaping categories",
  "Reporting tied to calls, direction requests, and booked estimates",
  "Hand-built citations and local links that compound",
  "A dedicated strategist who knows your landscaping market",
  "Month-to-month — we keep you with results, not paperwork",
];

const WhyCards = [
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Home services is all we do",
    desc: "We are not a generalist agency dabbling in maps. Local rankings, local calls, and booked estimates for landscaping and home-service contractors is the entire practice.",
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Fast, compounding execution",
    desc: "Foundation fixes ship in the first weeks, not the first quarter — so you are stronger heading into peak spring and summer demand. Every month of work stacks on the last.",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Transparent to a fault",
    desc: "You own every account and asset. You see every change in the monthly report. If a number dips, you hear it from us first — with the fix already moving.",
  },
];

const MarqueeItems = [
  "Landscaping Local SEO",
  "Landscaper Near Me Rankings",
  "Google Business Profile",
  "Map Pack Rankings",
  "Landscaping Lead Generation",
  "Review Growth",
  "Service-Area Pages",
];

const NationwideChips = [
  "Landscape Design",
  "Lawn Care",
  "Hardscaping",
  "Irrigation",
  "Sod Installation",
  "Tree & Shrub",
  "Outdoor Lighting",
  "Commercial Landscaping",
];

const GrowCards = [
  {
    href: "/services/gmb-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most homeowners pick a landscaper straight from the map pack. We optimize your profile so that company is you.",
    cta: "Optimize your profile",
  },
  {
    href: "/services/web-design",
    icon: <FiZap aria-hidden="true" />,
    title: "Website Design",
    desc: "Ready to convert more traffic? Conversion-first landscaping websites — fast, mobile, and built to turn visitors into booked estimates.",
    cta: "See website design",
  },
  {
    href: "/services/google-ads",
    icon: <FiTrendingUp aria-hidden="true" />,
    title: "Google Ads Management",
    desc: "Pair organic rankings with paid coverage and own the whole results page during peak spring and summer demand.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landscapingSeoFaqJsonLd),
        }}
      />

      <div className="tseo-page">
        <main>
          {/* 1. Hero */}
          <section className="tseo-hero">
            <div className="tseo-container">
              <div className="tseo-hero-grid">
                <div className="tseo-hero-copy">
                  <p className="tseo-eyebrow">
                    Local SEO for Landscaping Companies
                  </p>
                  <h1 className="tseo-hero-h1">
                    Local SEO for landscaping that{" "}
                    <span className="tseo-hl">books jobs</span>
                  </h1>
                  <p className="tseo-hero-sub">
                    We&apos;ve helped 50+ local and home-service businesses climb
                    into the Google map pack and grow. Zonic Media builds the
                    full local ranking system for landscaping companies — Google
                    Business Profile, citations, reviews, and service-area
                    content — so when homeowners search &ldquo;landscaper near
                    me,&rdquo; they find you first.
                  </p>
                  <div className="tseo-hero-badges" aria-label="Partner badges">
                    {/* Self-hosted Clutch badge — the live iframe embed is
                        behind a Cloudflare challenge and breaks randomly. */}
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
                    <HashScrollLink
                      href="#tseo-form"
                      className="tseo-btn"
                      offset={120}
                    >
                      Get Your Free Landscaping SEO Audit
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
                    <span
                      className="tseo-hero-proof-stars"
                      aria-hidden="true"
                    >
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
                      <h3>Landscaping Local SEO Performance</h3>
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
                              Map pack · &ldquo;landscaper near me&rdquo;
                            </p>
                            <div className="tseo-dash-li tseo-dash-li--you">
                              <FiMapPin />
                              <span>Your Landscaping Company</span>
                              <em>#1</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Lawn &amp; Landscape</span>
                              <em>#2</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Gardens</span>
                              <em>#3</em>
                            </div>
                            <div className="tseo-dash-review">
                              <FaStar />
                              4.9 · 176 reviews
                              <em>+32 this quarter</em>
                            </div>
                          </div>
                          <div className="tseo-dash-chart">
                            <p className="tseo-dash-sub">
                              Calls from local search
                            </p>
                            <div className="tseo-dash-metric">
                              <p className="tseo-dash-metric-num">284</p>
                              <span className="tseo-dash-delta">+212%</span>
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
                            <span>Map pack rank</span>
                          </div>
                          <div>
                            <strong>4.9★</strong>
                            <span>Google rating</span>
                          </div>
                          <div>
                            <strong>+86%</strong>
                            <span>Direction requests</span>
                          </div>
                        </div>
                      </div>

                      {/* BEFORE state (fading overlay) */}
                      <div className="tseo-ba-panel tseo-ba-panel--before">
                        <div className="tseo-dash-body">
                          <div className="tseo-dash-list">
                            <p className="tseo-dash-sub">
                              Map pack · &ldquo;landscaper near me&rdquo;
                            </p>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Lawn &amp; Landscape</span>
                              <em>#1</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Gardens</span>
                              <em>#2</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Outdoor Co.</span>
                              <em>#3</em>
                            </div>
                            <div className="tseo-dash-li tseo-dash-li--lost">
                              <FiMapPin />
                              <span>Your Landscaping Company</span>
                              <em>#13</em>
                            </div>
                          </div>
                          <div className="tseo-dash-chart">
                            <p className="tseo-dash-sub">
                              Calls from local search
                            </p>
                            <div className="tseo-dash-metric">
                              <p className="tseo-dash-metric-num">38</p>
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
                            <strong>#13</strong>
                            <span>Map pack rank</span>
                          </div>
                          <div>
                            <strong>4.1★</strong>
                            <span>Google rating</span>
                          </div>
                          <div>
                            <strong>−8%</strong>
                            <span>Direction requests</span>
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
                        <strong>#1 in the Map Pack</strong>
                        &ldquo;landscaper near me&rdquo;
                      </p>
                    </div>
                    <div className="tseo-float-card">
                      <span className="tseo-float-card-icon tseo-float-card-icon--green">
                        <FiStar aria-hidden="true" />
                      </span>
                      <p>
                        <strong>+32 reviews</strong>
                        this quarter
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <div className="tseo-hero-stats">
                {HeroStats.map((stat) => (
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
                          Your Landscaping Company
                          <MdOutlineVerifiedUser />
                        </strong>
                        <span className="tseo-gbp-stars">
                          <FaStar />
                          4.9 (176 reviews)
                        </span>
                      </div>
                    </div>
                    <p className="tseo-gbp-meta">
                      Landscaper · <em>Open now</em> · Free design consultations
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
                    <div className="tseo-gbp-row">
                      <span>Profile views</span>
                      <em>+180%</em>
                    </div>
                    <div className="tseo-gbp-row">
                      <span>Calls from profile</span>
                      <em>+212%</em>
                    </div>
                    <div className="tseo-gbp-row">
                      <span>Estimate requests</span>
                      <em>+3×</em>
                    </div>
                  </div>
                  <span className="tseo-gbp-chip">
                    <FaStar aria-hidden="true" />
                    Trusted by 50+ local businesses
                  </span>
                </div>
                <div>
                  <p className="tseo-eyebrow">The Local Growth Opportunity</p>
                  <h2 className="tseo-h2">
                    Homeowners are searching for landscaping help.{" "}
                    <span className="tseo-hl-text">
                      We make sure they find you.
                    </span>
                  </h2>
                  <p className="tseo-lead">
                    When a homeowner wants a new patio, a greener lawn, or a full
                    yard redesign, the first thing they do is search
                    &ldquo;landscaper near me&rdquo; and call one of the top
                    three companies on the map. That is an enormous, high-intent
                    growth channel sitting right in front of your business — and
                    it is exactly the channel we have spent years mastering for
                    landscaping companies.
                  </p>
                  <p className="tseo-lead">
                    Our local SEO system captures it step by step: a fully
                    optimized Google Business Profile, consistent citations,
                    steadily growing reviews, and service-area pages built
                    around the searches your customers actually type. Every
                    ranking signal Google rewards, done properly and done
                    monthly — that is how our clients turn local searches into
                    calls, booked estimates, and revenue that compounds season
                    after season.
                  </p>
                  <div className="tseo-checks">
                    {ProblemChecks.map((check) => (
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
                  <p className="tseo-eyebrow">What&apos;s Included</p>
                  <h2 className="tseo-h2">
                    Everything your landscaping rankings need, in one system
                  </h2>
                </div>
                <Link href="/services" className="tseo-link-arrow">
                  View all services <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
              <div className="tseo-cards">
                {ServiceCards.map((card) => (
                  <article className="tseo-card" key={card.title}>
                    <span className="tseo-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Dark band + map pack mockup */}
          <section className="tseo-band">
            <div className="tseo-band-grid">
              <div className="tseo-band-content">
                <p className="tseo-eyebrow">The Map Pack Is The Market</p>
                <h2 className="tseo-h2">
                  We put your landscaping company in the top three — and keep it
                  there
                </h2>
                <p className="tseo-lead">
                  The map pack gets the majority of clicks and nearly all of the
                  estimate calls, and that is exactly where we specialize. Every
                  campaign is built around one goal: earning your business those
                  top spots for the landscaping services and cities that pay you
                  best, then strengthening them month after month.
                </p>
                <p className="tseo-lead">
                  We work the signals Google actually rewards: proximity,
                  relevance, and prominence. A fully built-out profile tells
                  Google exactly which landscaping services you offer,
                  consistent citations confirm you are who you say you are, and a
                  steady flow of reviews and local content proves homeowners love
                  working with you. And if a listing ever gets suspended, our{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="tseo-inline-link"
                  >
                    Google Business Profile reinstatement
                  </Link>{" "}
                  team gets you back on the map fast.
                </p>
                <HashScrollLink
                  href="#tseo-form"
                  className="tseo-btn"
                  offset={120}
                >
                  See Where You Rank Today
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
                  landscaper near me
                </div>
                <div className="tseo-mappack-list">
                  <p className="tseo-mappack-title">Google · Local results</p>
                  <div className="tseo-mappack-row tseo-mappack-row--you">
                    <span className="tseo-mappack-thumb">
                      <FiImage />
                    </span>
                    <span className="tseo-mappack-info">
                      <strong>Your Landscaping Company</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        4.9 (176) · Landscaper ·{" "}
                        <span className="tseo-mappack-open">Open now</span>
                      </span>
                    </span>
                    <span className="tseo-mappack-badge">
                      That&apos;s you
                    </span>
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
                      <strong>Competitor Lawn &amp; Landscape</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        4.6 (98) · Landscaper
                      </span>
                    </span>
                  </div>
                  <div className="tseo-mappack-row">
                    <span className="tseo-mappack-thumb">
                      <FiImage />
                    </span>
                    <span className="tseo-mappack-info">
                      <strong>Competitor Gardens Co.</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        4.4 (61) · Landscaper
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
                  <h2 className="tseo-h2">
                    From invisible to unavoidable in four steps
                  </h2>
                </div>
                <HashScrollLink
                  href="#tseo-form"
                  className="tseo-link-arrow"
                  offset={120}
                >
                  Start with step one <FiArrowUpRight aria-hidden="true" />
                </HashScrollLink>
              </div>
              <div className="tseo-bento">
                {/* 01 — featured */}
                <article className="tseo-bento-card tseo-bento-card--s1">
                  <div className="tseo-bento-head">
                    <span className="tseo-bento-num" aria-hidden="true">
                      01
                    </span>
                    <span className="tseo-bento-tag">Week 1</span>
                  </div>
                  <h3>Free landscaping visibility audit</h3>
                  <p>
                    We audit your rankings, profile, citations, reviews, and
                    competitors — and show you exactly where the design and lawn
                    care jobs you are missing are going instead.
                  </p>
                  <div className="tseo-bento-visual" aria-hidden="true">
                    <p className="tseo-bento-visual-title">
                      Where landscaping clients typically land after 90 days
                    </p>
                    {[
                      { label: "Profile strength", val: 92 },
                      { label: "Citation accuracy", val: 96 },
                      { label: "Review velocity", val: 84 },
                    ].map((bar) => (
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

                {/* 02 */}
                <article className="tseo-bento-card tseo-bento-card--s2">
                  <div className="tseo-bento-head">
                    <span className="tseo-bento-num" aria-hidden="true">
                      02
                    </span>
                    <span className="tseo-bento-tag">Weeks 2–4</span>
                  </div>
                  <h3>Strategy &amp; foundation fixes</h3>
                  <p>
                    A keyword-mapped plan for your landscaping services and
                    cities, then the foundation work: profile optimization,
                    citation cleanup, and on-page fixes.
                  </p>
                </article>

                {/* 03 — dark */}
                <article className="tseo-bento-card tseo-bento-card--s3">
                  <div className="tseo-bento-head">
                    <span className="tseo-bento-num" aria-hidden="true">
                      03
                    </span>
                    <span className="tseo-bento-tag">Every month</span>
                  </div>
                  <h3>Build authority every month</h3>
                  <p>
                    Local content, links, review growth, and profile activity —
                    the compounding signals that move you up the map pack and
                    keep you there through every season.
                  </p>
                  <div className="tseo-bento-chips">
                    {["Local content", "Review growth", "Profile activity"].map(
                      (chip) => (
                        <span className="tseo-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ),
                    )}
                  </div>
                  <HashScrollLink
                    href="#tseo-form"
                    className="tseo-btn tseo-bento-cta"
                    offset={120}
                  >
                    Start Growing Today
                    <span className="tseo-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </article>

                {/* 04 — wide */}
                <article className="tseo-bento-card tseo-bento-card--s4">
                  <div className="tseo-bento-s4-copy">
                    <div className="tseo-bento-head">
                      <span className="tseo-bento-num" aria-hidden="true">
                        04
                      </span>
                      <span className="tseo-bento-tag">Ongoing</span>
                    </div>
                    <h3>Report, refine, expand</h3>
                    <p>
                      Monthly reporting tied to calls and booked estimates, not
                      vanity metrics. As rankings lock in, we expand to more
                      landscaping services and more cities.
                    </p>
                  </div>
                  <div className="tseo-bento-s4-side">
                    <div className="tseo-bento-chips">
                      {[
                        "Plain-English report",
                        "New cities",
                        "New services",
                      ].map((chip) => (
                        <span className="tseo-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
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

          {/* 5c. Results */}
          <section className="tseo-results">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Real Results</p>
                <h2 className="tseo-h2">
                  What happens when landscaping local SEO is done properly
                </h2>
                <p className="tseo-lead">
                  Different markets, different seasons — the same system,
                  executed month after month.
                </p>
              </div>
              <div className="tseo-results-cards">
                {ResultCards.map((card) => (
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

          {/* 6. Comparison */}
          <section className="tseo-compare">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">The Difference</p>
                <h2 className="tseo-h2">
                  What you get with Zonic vs. a typical landscaping SEO agency
                </h2>
                <p className="tseo-lead">
                  Local SEO for home-service businesses is all we do, and it
                  shows. Here is exactly what working with a dedicated local team
                  looks like.
                </p>
              </div>
              <div className="tseo-compare-grid">
                <div className="tseo-compare-col tseo-compare-col--them">
                  <h3>Typical SEO agency</h3>
                  <p className="tseo-compare-sub">
                    Why most landscaping campaigns quietly stall
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
                <div className="tseo-compare-col tseo-compare-col--us">
                  <h3>Landscaping Local SEO with Zonic Media</h3>
                  <p className="tseo-compare-sub">
                    Built to compound, reported like a P&amp;L
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
                  className="tseo-compare-col tseo-compare-col--score"
                  aria-hidden="true"
                >
                  <h3>Local Visibility Scorecard</h3>
                  <p className="tseo-compare-sub">
                    A typical landscaping client&apos;s first six months
                  </p>
                  <div className="tseo-score-rows">
                    {ScoreRows.map((row) => (
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
                            style={
                              { "--w": `${row.after}%` } as React.CSSProperties
                            }
                          />
                          <span
                            className="tseo-score-before"
                            style={
                              { "--b": `${row.before}%` } as React.CSSProperties
                            }
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

          {/* 6b. Live tracking mockups */}
          <section className="tseo-tracking">
            <div className="tseo-container">
              <div className="tseo-tracking-grid">
                <div>
                  <p className="tseo-eyebrow">Always Measurable</p>
                  <h2 className="tseo-h2">
                    Watch your landscaping rankings and reviews climb,{" "}
                    <span className="tseo-hl-text">month over month</span>
                  </h2>
                  <p className="tseo-lead">
                    No black box. Every campaign comes with live rank tracking
                    for the landscaping keywords that pay you, review growth
                    monitoring, and call tracking from your profile — all rolled
                    into one plain-English monthly report.
                  </p>
                  <p className="tseo-lead">
                    If a number moves, you know why. If a number stalls, you
                    know what we are doing about it.
                  </p>
                  <HashScrollLink
                    href="#tseo-form"
                    className="tseo-btn"
                    offset={120}
                  >
                    Get a Sample Report
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
                      {RankRows.map((row) => (
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
                      176 Google reviews and counting
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

          {/* 7. Why choose us + audit banner */}
          <section className="tseo-why">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Why Zonic Media</p>
                <h2 className="tseo-h2">
                  A landscaping local SEO partner, not a monthly invoice
                </h2>
                <p className="tseo-lead">
                  Rankings are the output. The inputs are strategy, execution,
                  and accountability — and that is what you are actually buying.
                </p>
              </div>
              <div className="tseo-why-cards">
                {WhyCards.map((card) => (
                  <article className="tseo-why-card" key={card.title}>
                    <span className="tseo-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
              <div className="tseo-why-banner">
                <div className="tseo-why-banner-text">
                  <p className="tseo-eyebrow">Free Landscaping SEO Audit</p>
                  <h3>
                    See exactly how we&apos;ll grow your landscaping rankings
                  </h3>
                  <p>
                    We&apos;ll map your profile, citations, reviews, and
                    rankings — and show you the clear path to the top three for
                    the landscaping searches in your market. Free, and yours to
                    keep either way.
                  </p>
                  <div className="tseo-banner-checks">
                    {BannerChecks.map((check) => (
                      <div className="tseo-banner-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>
                  <HashScrollLink
                    href="#tseo-form"
                    className="tseo-btn"
                    offset={120}
                  >
                    Claim Your Free Audit
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
                        92<small>/100</small>
                      </span>
                    </div>
                    <div className="tseo-audit-ring-info">
                      <strong>Excellent</strong>
                      <small>
                        Where our landscaping campaigns typically land after six
                        months of compounding local SEO work
                      </small>
                    </div>
                  </div>
                  {AuditRows.map((row) => (
                    <div className="tseo-audit-row" key={row.label}>
                      <span>{row.label}</span>
                      <span className="tseo-audit-flag">{row.flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 8. Reviews */}
          <section
            className="tseo-reviews"
            aria-labelledby="tseo-reviews-title"
          >
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Verified Client Reviews</p>
                <h2 className="tseo-h2" id="tseo-reviews-title">
                  Trusted by small &amp; mid-size businesses across the US
                </h2>
              </div>
              <div className="tseo-reviews-widget">
                <ClutchWidget
                  widgetType="12"
                  height="375"
                  primaryColor="#2567e8"
                  reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
                />
              </div>
            </div>
          </section>

          {/* 9. Marquee */}
          <div className="tseo-marquee" aria-hidden="true">
            <div className="tseo-marquee-track">
              {[0, 1].map((copy) => (
                <span className="tseo-marquee-item" key={copy}>
                  {MarqueeItems.map((item) => (
                    <span className="tseo-marquee-item" key={item}>
                      {item} <FaStar aria-hidden="true" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* 10. Industries / nationwide */}
          <section className="tseo-nationwide">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Wherever You Work</p>
                <h2 className="tseo-h2">
                  Local SEO for landscaping companies in every market in the US
                </h2>
                <p className="tseo-lead">
                  From solo landscapers to multi-location landscaping brands, we
                  run local SEO campaigns in every state. Everything happens
                  remotely — audits, strategy calls, reporting — so you get the
                  same process whether you are in Delaware, Texas, or California.
                </p>
              </div>
              <div className="tseo-coverage" aria-hidden="true">
                {[
                  { city: "Dover, DE", win: "#1 Map Pack", top: "26%", left: "78%" },
                  { city: "Philadelphia, PA", win: "Top 3", top: "12%", left: "58%" },
                  { city: "Miami, FL", win: "+3× leads", top: "68%", left: "70%" },
                  { city: "Austin, TX", win: "+212% calls", top: "66%", left: "34%" },
                  { city: "Denver, CO", win: "Top 3", top: "24%", left: "22%" },
                  { city: "Phoenix, AZ", win: "#1 rankings", top: "58%", left: "10%" },
                ].map((pin) => (
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
                {NationwideChips.map((chip) => (
                  <span className="tseo-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <div className="tseo-nationwide-cta">
                <HashScrollLink
                  href="#tseo-form"
                  className="tseo-btn"
                  offset={120}
                >
                  Get Your Free Audit
                  <span className="tseo-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </section>

          {/* 11. FAQs */}
          <section className="tseo-faqs" id="tseo-faqs">
            <div className="tseo-container">
              <div className="tseo-split-grid">
                <div>
                  <p className="tseo-eyebrow">FAQs</p>
                  <h2 className="tseo-h2">
                    Straight answers about landscaping local SEO
                  </h2>
                  <p className="tseo-lead">
                    Pricing, timelines, guarantees, and what actually moves
                    landscaping rankings. If your question is not here, send it
                    through the form — a strategist answers, not a sales script.
                  </p>
                  <div className="tseo-faq-cta">
                    <HashScrollLink
                      href="#tseo-form"
                      className="tseo-btn"
                      offset={120}
                    >
                      Ask About Your Market
                      <span className="tseo-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                  </div>
                </div>
                <div>
                  <GmbFaqs items={LandscapingSeoFaqs} />
                </div>
              </div>
            </div>
          </section>

          {/* 12. Grow further — internal links */}
          <section className="tseo-grow">
            <div className="tseo-container">
              <div className="tseo-sec-head-center">
                <p className="tseo-eyebrow">Grow Further</p>
                <h2 className="tseo-h2">
                  Rankings are step one. Here is what multiplies them.
                </h2>
              </div>
              <div className="tseo-grow-cards">
                {GrowCards.map((card) => (
                  <Link
                    href={card.href}
                    className="tseo-grow-card"
                    key={card.href}
                  >
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

          {/* 13. Lead form */}
          <section className="tseo-form-sec" id="tseo-form">
            <div className="tseo-container">
              <div className="tseo-form-grid">
                <aside className="tseo-form-aside">
                  <p className="tseo-eyebrow">Get Started</p>
                  <h2 className="tseo-h2">
                    Claim your free landscaping local SEO audit
                  </h2>
                  <p className="tseo-lead">
                    Tell us about your landscaping business and we will send a
                    full local visibility audit — rankings, profile, citations,
                    reviews — plus a flat-price growth plan to take you to the
                    top of your market.
                  </p>
                  <div className="tseo-form-contacts">
                    <a
                      href={SITE_CONTACT.emailHref}
                      className="tseo-form-contact"
                    >
                      <span className="tseo-form-contact-icon">
                        <FiMail aria-hidden="true" />
                      </span>
                      <span className="tseo-form-contact-txt">
                        <small>Email us anytime</small>
                        <strong>{SITE_CONTACT.email}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="tseo-form-contact"
                    >
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
                    formType="local-seo"
                    badge="Free Audit"
                    title="Get your free landscaping SEO audit"
                    subtitle="No contracts, no pressure — just a clear picture of where your landscaping company stands and what it takes to win your market."
                    submitText="Send My Free Audit"
                    messageLabel="Tell us about your landscaping business"
                    messagePlaceholder="Your services, your city, and what you'd like to improve"
                    defaultServices={["Local SEO"]}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* 14. Global site footer */}
      <Footer />
    </>
  );
}

export default Page;
