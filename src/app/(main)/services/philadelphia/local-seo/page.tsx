/*
 * PHILADELPHIA LOCAL SEO — rebuilt Aug 2026 on the shared Philadelphia landing
 * system (src/app/style/philadelphia/philaLanding.css, scoped .phl-page).
 *
 * INTENT SPLIT — this page owns map-pack / Google-Business-Profile / "near me"
 * intent for Philadelphia and nothing broader. It links UP to the
 * /philadelphia/digital-marketing hub with a narrow anchor only, so it never
 * competes with the hub for "digital marketing agency Philadelphia".
 *
 * IMAGES: every photo slot is a `.phl-ph` shimmer skeleton captioned with what
 * belongs there and at which ratio. Replace the skeleton div with
 * <Image src="..." alt="..." fill /> — `Image` is already imported and the
 * wrapper sets position/ratio/radius. Previous photos remain in
 * /public/images/philadelphia/phila-seo.
 *
 * LEADS: submits as "Local SEO" (on the ALLOWED_SERVICES whitelist).
 */

import type { Metadata } from "next";
import "@/app/style/philadelphia/philaLanding.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import RelatedServices from "@/app/components/RelatedServices";
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
  FiFileText,
  FiLink2,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiX,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/philadelphia/local-seo";

export const metadata: Metadata = {
  title: "Philadelphia SEO Company | Local SEO & Map Pack",
  description:
    "Local SEO services in Philadelphia that win the Google map pack — GBP optimization, citations & reviews that turn 'near me' searches into calls. Free audit.",
  keywords: [
    "local SEO Philadelphia",
    "Philadelphia local SEO company",
    "local SEO services Philadelphia",
    "Google Maps ranking Philadelphia",
    "map pack ranking Philadelphia",
    "Google Business Profile optimization Philadelphia",
    "near me SEO Philadelphia",
    "local SEO for small business Philadelphia",
    "Philadelphia GBP optimization",
    "citation building Philadelphia",
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
    title: "Local SEO Philadelphia | Google Maps Rankings | Zonic Media",
    description:
      "Local SEO services in Philadelphia that win the Google map pack — profile optimization, citations, reviews, and neighbourhood pages that turn 'near me' searches into calls.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Philadelphia Local SEO", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services in Philadelphia",
  serviceType: "Local Search Engine Optimization",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Local SEO for Philadelphia businesses covering Google Business Profile optimization, citation building and cleanup, review growth, on-page SEO, and neighbourhood service-area pages — built to win the Google map pack and grow booked calls.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    url: "https://www.zonicllc.com",
    telephone: "+1-302-726-9736",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green, STE B",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US",
    },
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
    name: "Local businesses in Philadelphia and the surrounding counties",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Philadelphia Local SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local Keyword & Competitor Research",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Citation Building & Listing Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Review Growth & Reputation" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Page SEO & Neighbourhood Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rank Tracking & Monthly Reporting",
        },
      },
    ],
  },
};

const PhilaSeoFaqs = [
  {
    question: "What is local SEO and how is it different from regular SEO?",
    answer:
      "Regular SEO chases national or informational rankings. Local SEO targets the searches that happen with buying intent nearby — 'plumber near me', 'best dentist Fishtown', 'emergency locksmith Center City' — and the map pack those searches produce. The ranking signals are different too: proximity, Google Business Profile completeness, citation consistency, and review velocity matter far more than raw backlink volume.",
  },
  {
    question: "What's included in your Philadelphia local SEO service?",
    answer:
      "Every campaign covers the full local ranking system: Google Business Profile optimization, citation building and cleanup, review growth, on-page SEO for your service and neighbourhood pages, local content, and a monthly report showing rankings, calls, and direction requests — not vanity metrics. Nothing is outsourced and you own every account we touch.",
  },
  {
    question: "How long does local SEO take to work in Philadelphia?",
    answer:
      "Most Philadelphia businesses see measurable movement within 60 to 90 days — better map pack visibility, more profile actions, and more calls from 'near me' searches. Dense, competitive neighbourhoods like Center City and University City take longer to fully dominate than outer neighbourhoods or suburban service areas, but the trajectory shows in the first monthly report either way.",
  },
  {
    question: "How much does local SEO cost in Philadelphia?",
    answer:
      "Pricing depends on how many locations you run, how competitive your category is, and how many neighbourhoods you want to rank in. After a free audit we quote a flat monthly price with the scope written out — no long-term contracts and no surprise line items. One location in a low-competition category costs meaningfully less than a multi-location push across the metro.",
  },
  {
    question: "Do you guarantee first-page Google rankings?",
    answer:
      "Our track record speaks for itself — most clients reach top-three map pack positions for their core terms, and every campaign is built on the exact signals Google rewards. Because Google's results change daily, no honest agency can promise a fixed position, so we guarantee what we can control: full transparency. You see exactly where you rank, what improved, and what we did each month, with no long-term contract holding you there.",
  },
  {
    question: "Can you rank me in multiple Philadelphia neighbourhoods?",
    answer:
      "Yes, and this is where most local SEO campaigns fall down. Map pack rankings are heavily proximity-based, so a single profile will not rank equally across South Philly, Manayunk, and King of Prussia. We build service-area and neighbourhood pages, tune the profile's service areas, and grow location-relevant signals so you show up across the footprint you actually cover.",
  },
  {
    question: "What if my Google Business Profile gets suspended?",
    answer:
      "It happens more than people expect, especially for service-area businesses and after an address or category change. We handle reinstatements as part of the engagement — see our dedicated Google Business Profile reinstatement service. The faster it is filed with the right evidence, the better the outcome, so tell us the day it happens rather than waiting.",
  },
  {
    question: "Do I need local SEO if I already run Google Ads?",
    answer:
      "They work best together. Ads buy the top of the page today; local SEO earns the map pack and organic positions that keep producing after you stop paying per click. Many clients start on ads for immediate flow, then shift budget toward local SEO as rankings take hold and cost per lead drops.",
  },
];

const philaSeoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PhilaSeoFaqs.map((faq) => ({
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
    label: "Local businesses ranked",
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
    label: "In-house — nothing outsourced",
  },
];

const AboutChecks = [
  "Map pack ranking strategy",
  "Profile fully optimized",
  "Citations cleaned & built",
  "Reviews growing weekly",
];

const ServiceCards = [
  {
    tone: "blue",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: (
      <>
        Your profile is the new homepage for local search. We optimize every
        field, category, photo, service, and post — the same system behind our{" "}
        <Link href="/services/gmb-optimization" className="phl-inline-link">
          GBP optimization service
        </Link>{" "}
        — so Google trusts it and Philadelphians choose it.
      </>
    ),
  },
  {
    tone: "gold",
    icon: <FiSearch aria-hidden="true" />,
    title: "Local Keyword & Competitor Research",
    desc: "We map what your customers actually type, neighbourhood by neighbourhood, and audit who currently owns those results — then build the plan that takes those positions off them.",
  },
  {
    tone: "blue",
    icon: <FiLink2 aria-hidden="true" />,
    title: "Citations & Listing Management",
    desc: "Consistent name, address, and phone across every directory Google cross-checks. We fix the wrong ones, build the missing ones, and keep them synced when you move or rebrand.",
  },
  {
    tone: "gold",
    icon: <FiStar aria-hidden="true" />,
    title: "Review Growth & Reputation",
    desc: "A steady stream of real reviews from real customers, with responses that show Google — and the next person comparing three businesses on their phone — that somebody is home.",
  },
  {
    tone: "blue",
    icon: <FiFileText aria-hidden="true" />,
    title: "Neighbourhood & Service-Area Pages",
    desc: (
      <>
        Pages built around real local searches for the neighbourhoods you cover,
        with schema and internal links that make each one easier to rank —
        backed by conversion-first{" "}
        <Link href="/services/web-design" className="phl-inline-link">
          website design
        </Link>{" "}
        when the site itself is the bottleneck.
      </>
    ),
  },
  {
    tone: "gold",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Tracking & Monthly Reporting",
    desc: "Rankings, calls, direction requests, and form fills in one plain-English report. You always know what we did, what moved, and what is next.",
  },
];

const ChannelBars = [
  { label: "Map pack visibility", val: 92, tone: "blue" },
  { label: "Profile completeness", val: 97, tone: "gold" },
  { label: "Citation accuracy", val: 95, tone: "blue" },
  { label: "Review velocity", val: 78, tone: "gold" },
];

const ResultCards = [
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    industry: "Home services · South Philly",
    metric: "+212%",
    label: "Calls from the map pack",
    desc: (
      <>
        From page-two invisibility to top-three positions for &lsquo;near
        me&rsquo; searches across every neighbourhood the business covers,
        inside one quarter — the same system as our{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="phl-inline-link"
        >
          local SEO for home services program
        </Link>
        .
      </>
    ),
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    industry: "Dental practice · Center City",
    metric: "Top 3",
    label: "Map pack for every core term",
    desc: "A profile rebuild, citation cleanup, and steady review growth moved the practice from #12 into the top three in one of the city's most contested categories.",
  },
  {
    icon: <FiMapPin aria-hidden="true" />,
    industry: "Multi-location retail · Metro",
    metric: "6×",
    label: "Neighbourhoods ranking top three",
    desc: "Individual location pages and per-branch profile tuning took a single-neighbourhood business to top-three visibility across six separate service areas.",
  },
];

const ShowcaseFloats = [
  { num: "187", label: "Average reviews earned" },
  { num: "#1", label: "Map pack across 8 Philly ZIPs" },
  { num: "+86%", label: "Direction requests" },
];

const CompareThem = [
  "Set-and-forget profile, updated quarterly at best",
  "Reports full of impressions, empty of phone calls",
  "Offshore link packages and duplicate citations",
  "One account manager for 80 clients",
  "12-month contracts before you see a single lead",
];

const CompareUs = [
  "Profile worked weekly — posts, photos, Q&A, categories",
  "Reporting tied to calls, direction requests, and forms",
  "Hand-built citations and local links that compound",
  "A dedicated strategist who knows the Philly market",
  "Month-to-month — we keep you with results, not paperwork",
];

const ScoreRows = [
  { label: "Profile strength", before: 32, after: 93 },
  { label: "Citation accuracy", before: 39, after: 96 },
  { label: "Review velocity", before: 21, after: 78 },
  { label: "Map pack visibility", before: 17, after: 86 },
];

const WhyCards = [
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local is the whole practice",
    desc: (
      <>
        We are not a generalist agency dabbling in maps. Local rankings, local
        calls, and booked jobs for local businesses is what the{" "}
        <Link href="/" className="phl-inline-link">
          Zonic Media
        </Link>{" "}
        team does every day.
      </>
    ),
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Fast, Compounding Execution",
    desc: "Foundation fixes ship in the first weeks, not the first quarter. Profile, citations, and on-page work stack month over month rather than resetting.",
  },
  {
    icon: <FiBarChart2 aria-hidden="true" />,
    title: "Transparent to a Fault",
    desc: "You own every account and asset. You see every change in the monthly report. If a number dips you hear it from us first, with the fix already moving.",
  },
];

const BannerChecks = [
  "Your map pack growth plan",
  "Profile wins ready to unlock",
  "Citation opportunities mapped",
  "Review growth roadmap",
];

const AuditRows = [
  { label: "Google Business Profile", flag: "A+ grade" },
  { label: "Citations & listings", flag: "100% accurate" },
  { label: "Review velocity", flag: "Ahead of top 3" },
];

const MarqueeItems = [
  "Philadelphia Local SEO",
  "Google Business Profile",
  "Map Pack Rankings",
  "Near Me Searches",
  "Review Growth",
  "Citation Building",
  "Neighbourhood Pages",
];

// Centre point of each node on the orbit ellipse (centre 50%/50%, semi-axes
// 37% × 43% — the figure .phl-engine-orbit draws). Collapses to a grid <992px.
const EngineNodes = [
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Business Profile",
    outcome: "Google trusts it",
    tone: "blue",
    left: "50%",
    top: "7%",
  },
  {
    icon: <FiSearch aria-hidden="true" />,
    title: "Keyword Research",
    outcome: "Right targets",
    tone: "gold",
    left: "82%",
    top: "28.5%",
  },
  {
    icon: <FiLink2 aria-hidden="true" />,
    title: "Citations",
    outcome: "Consistent NAP",
    tone: "blue",
    left: "82%",
    top: "71.5%",
  },
  {
    icon: <FiStar aria-hidden="true" />,
    title: "Review Growth",
    outcome: "Chosen first",
    tone: "gold",
    left: "50%",
    top: "93%",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "Local Pages",
    outcome: "Rank per area",
    tone: "blue",
    left: "18%",
    top: "71.5%",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Tracking",
    outcome: "Proof monthly",
    tone: "gold",
    left: "18%",
    top: "28.5%",
  },
];

const IndustryChips = [
  "Home Services",
  "Healthcare & Dental",
  "Legal & Financial",
  "Restaurants & Cafés",
  "Salons & Wellness",
  "Auto & Repair",
  "Retail Storefronts",
  "Trades & Contractors",
];

const GrowCards = [
  {
    href: "/services/gmb-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most local buyers pick straight from the map pack. We make sure that pick is you.",
    cta: "Optimize your profile",
  },
  {
    href: "/services/philadelphia/ppc",
    icon: <FiZap aria-hidden="true" />,
    title: "PPC & Google Ads",
    desc: "Pair organic map rankings with paid coverage and own the whole results page.",
    cta: "See PPC",
  },
  {
    href: "/services/gmb-reinstatement-help",
    icon: <FiBarChart2 aria-hidden="true" />,
    title: "Profile Reinstatement",
    desc: "Suspended listing? We file the appeal with the right evidence and get you back on the map.",
    cta: "Get reinstated",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philaSeoFaqJsonLd) }}
      />

      <div className="phl-page">
        <main>
          {/* 1. Hero */}
          <section className="phl-hero">
            <div className="phl-container">
              <div className="phl-hero-grid">
                <div className="phl-hero-copy">
                  <p className="phl-eyebrow">Local SEO in Philadelphia</p>
                  <h1 className="phl-h1">
                    Local SEO That Wins the{" "}
                    <span className="phl-hl">Philly Map Pack</span>
                  </h1>
                  <p className="phl-hero-sub">
                    When somebody in Philadelphia searches &ldquo;near
                    me,&rdquo; three businesses get the call and everyone else
                    gets scrolled past. Zonic Media builds the full local
                    ranking system — Google Business Profile, citations,
                    reviews, and neighbourhood pages — so the business they call
                    is yours.
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
                      Get Your Free Local SEO Audit
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
                      <strong>Rated 4.9/5</strong> by the local businesses we
                      rank
                    </p>
                  </div>
                </div>

                <div className="phl-hero-visual">
                  <div className="phl-hero-media">
                    <Image
                      src="/images/philadelphia/phila-seo/philadelphia-local-seo-workstation.webp"
                      alt="Local SEO workstation displaying Philadelphia map-pack rankings and visibility growth"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 991px) 92vw, 38vw"
                    />
                  </div>

                  <div className="phl-hero-float phl-hero-float--a">
                    <span className="phl-hero-float-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <p>
                      <strong>#1 in the map pack</strong>
                      &ldquo;near me&rdquo; searches in Philly
                    </p>
                  </div>

                  <div className="phl-hero-float phl-hero-float--b">
                    <span className="phl-hero-float-icon phl-hero-float-icon--gold">
                      <FiStar aria-hidden="true" />
                    </span>
                    <p>
                      <strong>+32 reviews</strong>
                      earned this quarter
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

          {/* 2. The local search opportunity */}
          <section className="phl-about">
            <div className="phl-container">
              <div className="phl-about-grid">
                <div className="phl-collage">
                  <div className="phl-collage-a">
                    <Image
                      src="/images/philadelphia/phila-seo/philadelphia-near-me-search.webp"
                      alt="Smartphone showing nearby Philadelphia businesses in local search"
                      fill
                      unoptimized
                      sizes="(max-width: 991px) 72vw, 31vw"
                    />
                  </div>
                  <div className="phl-collage-b">
                    <Image
                      src="/images/philadelphia/phila-seo/philadelphia-map-pack-rankings.webp"
                      alt="Laptop displaying Philadelphia map-pack rankings and local visibility growth"
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
                          Philadelphia Local SEO • Zonic Media •
                        </textPath>
                      </text>
                    </svg>
                    <span className="phl-collage-badge-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="phl-about-copy">
                  <p className="phl-eyebrow">The Local Search Opportunity</p>
                  <h2 className="phl-h2">
                    Three Results Get the Calls.{" "}
                    <span className="phl-hl-text">
                      We Make Sure One is Yours.
                    </span>
                  </h2>
                  <p className="phl-lead">
                    When a pipe bursts in Fishtown or somebody needs a dentist
                    near Rittenhouse, the search happens on a phone and the
                    decision happens in seconds. The map pack shows three
                    businesses. Those three split almost all of the calls, and
                    everyone below them competes for the leftovers. That is the
                    single highest-intent channel a local Philadelphia business
                    has — and the one most of them have never properly worked.
                  </p>
                  <p className="phl-lead">
                    Our system captures it step by step: a fully optimized
                    Google Business Profile, citations that agree with each
                    other everywhere Google checks, reviews arriving steadily
                    rather than in suspicious bursts, and neighbourhood pages
                    built around the searches your customers actually type.
                    Every signal Google rewards, worked every month — that is
                    how local searches turn into calls that keep compounding.
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
                    Everything Your Local Rankings Need, in One System
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

          {/* 4. Blue band + local visibility console */}
          <section className="phl-band">
            <div className="phl-band-grid">
              <div className="phl-band-content">
                <p className="phl-eyebrow">The Map Pack Is The Market</p>
                <h2 className="phl-h2">
                  We Put You in the Top Three — And Keep You There
                </h2>
                <p className="phl-lead">
                  The map pack takes the majority of clicks and nearly all of
                  the phone calls, and that is exactly where we specialize.
                  Every campaign is built around one goal: earning the top spots
                  for the services and neighbourhoods that pay you best, then
                  defending them month after month — and when you want paid
                  coverage planned alongside those rankings, our{" "}
                  <Link
                    href="/services/philadelphia/sem"
                    className="phl-inline-link"
                  >
                    Philadelphia search engine marketing
                  </Link>{" "}
                  team runs both as one plan.
                </p>
                <p className="phl-lead">
                  We work the signals Google actually rewards — proximity,
                  relevance, and prominence. A fully built-out profile tells
                  Google exactly what you do, consistent citations confirm you
                  are who you say you are, and steady reviews plus local content
                  prove customers rate you. If a listing ever gets suspended,
                  our{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="phl-inline-link"
                  >
                    Google Business Profile reinstatement
                  </Link>{" "}
                  team gets you back on the map fast.
                </p>
                <HashScrollLink
                  href="#phl-form"
                  className="phl-btn"
                  offset={120}
                >
                  See Where You Rank Today
                  <span className="phl-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>

              <div className="phl-console" aria-hidden="true">
                <div className="phl-console-head">
                  <h3>Local Visibility Console</h3>
                  <span className="phl-console-tag">After 6 months</span>
                </div>

                <div className="phl-console-metrics">
                  <div>
                    <strong>284</strong>
                    <span>Calls from profile</span>
                  </div>
                  <div>
                    <strong>#1</strong>
                    <span>Map pack rank</span>
                  </div>
                  <div>
                    <strong>+86%</strong>
                    <span>Direction requests</span>
                  </div>
                </div>

                <p className="phl-console-sub">Ranking signal strength</p>
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
                    <FiMapPin />
                    Center City · #1
                  </span>
                  <span className="phl-console-pill">
                    <FiMapPin />
                    Manayunk · #2
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
                    From Invisible to Unavoidable in Four Steps
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
                  <h3>Free Local Visibility Audit</h3>
                  <p>
                    We audit your rankings, profile, citations, reviews, and
                    competitors — and show you exactly where the calls you are
                    missing are going instead.
                  </p>
                  <div className="phl-bento-visual" aria-hidden="true">
                    <p className="phl-bento-visual-title">
                      Where Philly clients typically land after 90 days
                    </p>
                    {[
                      { label: "Profile strength", val: 93 },
                      { label: "Citation accuracy", val: 96 },
                      { label: "Review velocity", val: 78 },
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
                    <span className="phl-bento-tag">Weeks 2–4</span>
                  </div>
                  <h3>Strategy &amp; Foundation Fixes</h3>
                  <p>
                    A keyword-mapped plan for your services and neighbourhoods,
                    then the foundation work: profile optimization, citation
                    cleanup, and on-page fixes.
                  </p>
                </article>

                <article className="phl-bento-card phl-bento-card--s3">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      03
                    </span>
                    <span className="phl-bento-tag">Every month</span>
                  </div>
                  <h3>Build Authority Every Month</h3>
                  <p>
                    Local content, links, review growth, and profile activity —
                    the compounding signals that move you up the map pack and
                    keep you there.
                  </p>
                  <div className="phl-bento-chips">
                    {["Local content", "Review growth", "Profile activity"].map(
                      (chip) => (
                        <span className="phl-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ),
                    )}
                  </div>
                  <HashScrollLink
                    href="#phl-form"
                    className="phl-btn phl-bento-cta"
                    offset={120}
                  >
                    Start Ranking Today
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
                    <h3>Report, Refine, Expand</h3>
                    <p>
                      Monthly reporting tied to calls and direction requests,
                      not vanity metrics. As rankings lock in, we expand to more
                      services and more neighbourhoods.
                    </p>
                  </div>
                  <div className="phl-bento-s4-side">
                    <div className="phl-bento-chips">
                      {[
                        "Plain-English report",
                        "New neighbourhoods",
                        "New services",
                      ].map((chip) => (
                        <span className="phl-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
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
                  What Happens When Local SEO is Done Properly
                </h2>
                <p className="phl-lead">
                  Different neighbourhoods, different categories — the same
                  system, executed month after month.
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
                    src="/images/philadelphia/phila-seo/philadelphia-neighborhood-storefronts.webp"
                    alt="Philadelphia neighborhood corridor lined with independent storefronts"
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
                <h2 className="phl-h2">Zonic Vs. A Typical Local SEO Agency</h2>
                <p className="phl-lead">
                  Local SEO for local businesses is all we do, and it shows.
                  Here is what working with a dedicated local team looks like.
                </p>
              </div>

              <div className="phl-compare-grid">
                <div className="phl-compare-col phl-compare-col--them">
                  <h3>Typical SEO Agency</h3>
                  <p className="phl-compare-sub">
                    Why most local campaigns quietly stall
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
                  <h3>Local SEO with Zonic Media</h3>
                  <p className="phl-compare-sub">
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
                  className="phl-compare-col phl-compare-col--score"
                  aria-hidden="true"
                >
                  <h3>Local Visibility Scorecard</h3>
                  <p className="phl-compare-sub">
                    A typical Philly client&apos;s first six months
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
                  A Local SEO Partner, Not a Monthly Invoice
                </h2>
                <p className="phl-lead">
                  Rankings are the output. The inputs are strategy, execution,
                  and accountability — and that is what you are actually buying.
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
                  <p className="phl-eyebrow">Free Local SEO Audit</p>
                  <h3>See Exactly How We&apos;ll Grow Your Local Rankings</h3>
                  <p>
                    We map your profile, citations, reviews, and rankings — and
                    show you the clear path to the top three for the searches
                    that matter in your neighbourhood. Free, and yours to keep
                    either way.
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
                    <h4>Local Visibility Score</h4>
                    <span className="phl-audit-tag">After 6 months</span>
                  </div>
                  <div className="phl-audit-ring-wrap">
                    <div className="phl-audit-ring">
                      <span>
                        92<small>/100</small>
                      </span>
                    </div>
                    <div className="phl-audit-ring-info">
                      <strong>Excellent</strong>
                      <small>
                        Where our Philadelphia local SEO campaigns typically
                        land after six months of compounding work
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
                  {MarqueeItems.map((item) => (
                    <span className="phl-marquee-item" key={item}>
                      {item} <FaStar aria-hidden="true" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* 12. Ranking engine — the six local signals */}
          <section className="phl-engine-sec">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Everything Working Together</p>
                <h2 className="phl-h2">Six Signals, One Ranking Engine</h2>
                <p className="phl-lead">
                  Local rankings are not one lever, they are six working at
                  once. Skip any of them and the map pack notices. We run all
                  six every month, from Center City and Fishtown out through
                  Montgomery, Bucks, Delaware, and Chester counties — and when
                  you need calls before the rankings land,{" "}
                  <Link
                    href="/services/philadelphia/ppc"
                    className="phl-inline-link"
                  >
                    Philadelphia PPC campaigns
                  </Link>{" "}
                  fill the gap.
                </p>
              </div>

              <div className="phl-engine">
                <div className="phl-engine-orbit" aria-hidden="true" />

                <div className="phl-engine-core">
                  <span className="phl-engine-core-icon" aria-hidden="true">
                    <FiMapPin />
                  </span>
                  <strong>Your Philadelphia listing</strong>
                  <span>Top three · every neighbourhood</span>
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
                Ranking local Philadelphia businesses in
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
                    Straight Answers About Local SEO in Philadelphia
                  </h2>
                  <p className="phl-lead">
                    Pricing, timelines, guarantees, and what actually moves map
                    pack rankings. If your question is not here, send it through
                    the form — a strategist answers, not a sales script.
                  </p>
                  <div className="phl-faq-cta">
                    <HashScrollLink
                      href="#phl-form"
                      className="phl-btn"
                      offset={120}
                    >
                      Ask About Your Neighbourhood
                      <span className="phl-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                  </div>
                </div>
                <div>
                  <GmbFaqs items={PhilaSeoFaqs} />
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
                  Rankings are Step One. Here is What Multiplies Them.
                </h2>
                <p className="phl-lead">
                  Local SEO is one channel inside a bigger system — see the full{" "}
                  <Link
                    href="/services/philadelphia/digital-marketing"
                    className="phl-inline-link"
                  >
                    Philadelphia marketing engine
                  </Link>{" "}
                  if you want every channel working together.
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
                    Claim Your Free Philadelphia Local SEO Audit
                  </h2>
                  <p className="phl-lead">
                    Tell us about your business and we will send a full local
                    visibility audit — rankings, profile, citations, reviews —
                    plus a flat-price growth plan to take you to the top of your
                    neighbourhood.
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
                    formType="philadelphia-local-seo"
                    badge="Free Audit"
                    title="Get Your Free Local SEO Audit"
                    subtitle="No contracts, no pressure — just a clear picture of where you rank today and what it takes to win your neighbourhood."
                    submitText="Send My Free Audit"
                    messageLabel="Tell us about your business"
                    messagePlaceholder="Your services, the neighbourhoods you cover, and what you'd like to improve"
                    defaultServices={["Local SEO"]}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <RelatedServices current="/services/philadelphia/local-seo" />
      <Footer />
    </>
  );
}

export default Page;
