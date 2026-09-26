/*
 * LOCAL SEO FOR CANNABIS DISPENSARIES — built on the approved local SEO
 * template layout (see /services/template-seo). Design/classes come from
 * templateSeo.css (scoped under .tseo-page); all copy, mockups, FAQs, and
 * schema are dispensary-specific. Cannabis facts (GBP storefront rule, ad
 * bans, menu SEO) were checked Sep 26 2026 — sources in
 * content-drafts/cannabis-pages-content-brief.md. Form leads submit as
 * service "Local SEO" (on the API whitelist).
 */

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "@/app/style/templateSeo.css";
import Footer from "@/app/components/Footer";
import RelatedServices from "@/app/components/RelatedServices";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
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

// Code-split so the widget JavaScript loads after the hero has painted; the
// server still renders its markup, so nothing changes for users or Google.
const ClutchWidget = dynamic(() => import("@/app/components/ClutchWidget"));
const ServiceLeadForm = dynamic(() => import("@/app/components/ServiceLeadForm"));

const PAGE_PATH = "/services/industry/local-seo-for-cannabis-dispensaries";

export const metadata: Metadata = {
  title: { absolute: "Dispensary SEO Company | Local SEO for Cannabis Dispensaries" },
  description:
    "Dispensary SEO for licensed cannabis stores: Google Business Profile, Map Pack rankings, SEO-friendly menus, Weedmaps & Leafly listings, AI search.",
  keywords: [
    "dispensary seo",
    "local seo for dispensaries",
    "cannabis seo",
    "dispensary seo company",
    "dispensary seo agency",
    "dispensary seo services",
    "cannabis seo agency",
    "cannabis seo company",
    "seo for dispensaries",
    "dispensary local seo",
    "marijuana seo",
    "dispensary google business profile",
    "dispensary near me seo",
    "dutchie seo",
    "dispensary menu seo",
    "weedmaps seo",
    "cannabis ai search optimization",
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
    title: "Local SEO for Cannabis Dispensaries That Fills Your Store | Zonic Media",
    description:
      "Dispensary SEO that ranks you for 'dispensary near me' — compliant Google Business Profile, menu SEO, Weedmaps and Leafly listings, and reviews that bring in adult shoppers.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Local SEO for Cannabis Dispensaries", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO for Cannabis Dispensaries",
  serviceType: "Local Search Engine Optimization for Cannabis Dispensaries",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Dispensary SEO covering compliant Google Business Profile optimization, menu SEO, Weedmaps and Leafly listing management, citation building, review growth, and city and neighborhood pages — built to rank licensed cannabis dispensaries in the Google map pack and bring in more store visits and online orders.",
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
    "@type": "Country",
    name: "United States",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Licensed adult-use and medical cannabis dispensaries, multi-location operators, and cannabis retailers",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dispensary Local SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Optimization for Dispensaries",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dispensary Menu SEO",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Weedmaps, Leafly & Citation Management",
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
          name: "City & Neighborhood Pages",
        },
      },
    ],
  },
};

const CannabisSeoFaqs = [
  {
    question: "What's Included in Your Dispensary SEO Services?",
    answer:
      "Every dispensary campaign covers the full local ranking system. That means Google Business Profile optimization within Google's cannabis rules, a menu SEO audit, Weedmaps, Leafly and citation cleanup, review growth, city and neighborhood pages with schema, and a monthly report. The report shows rankings, calls, direction requests and menu clicks, not vanity metrics.",
  },
  {
    question: "Can a Dispensary Have a Google Business Profile?",
    answer:
      "Yes, if it has a licensed storefront customers can visit. Since November 2024, Google no longer allows age-restricted businesses, including cannabis, to list as service-area businesses without a storefront. That means delivery-only operators aren't eligible. We set up the profile in the Cannabis store category, with a business name that matches your license and photos that follow Google's rules.",
  },
  {
    question: "Why Do Dispensary Google Profiles Get Suspended?",
    answer:
      "The most common triggers are product or menu photos, listed prices or promotions, the wrong primary category, a business name that doesn't match the license, and address or verification problems. Delivery-only listings get suspended too. We audit for all of these before we touch anything else. If your profile is already down, our reinstatement team handles the appeal.",
  },
  {
    question: "Does My Dutchie or Jane Menu Hurt My SEO?",
    answer:
      "It can. With an iframe-embedded menu, the content is credited to the menu provider's site rather than yours, and it loads slower. A subdomain storefront gets indexed but is treated largely as a separate site. Native or headless setups, such as Dutchie Plus or Jane's API, put every product and category on your own domain with its own URL. That's what lets you rank for strain, brand and category searches. We audit your setup and tell you honestly what's worth changing.",
  },
  {
    question: "How Can My Dispensary Outrank Weedmaps and Leafly?",
    answer:
      "For '[city] dispensary' searches, the directories often rank above store websites because of their authority. You win by owning the map pack, which sits above the directories, and by building city and neighborhood pages with real local content. Your menu should live on your own domain. Keep your Weedmaps and Leafly listings accurate and consistent with your Google profile too, because Google and AI assistants read them as trust signals.",
  },
  {
    question: "How Long Does Dispensary SEO Take to Show Results?",
    answer:
      "Most dispensaries see measurable movement within 60 to 90 days: better map pack positions, more direction requests, and more calls for 'dispensary near me' searches. Competitive adult-use markets take longer to fully dominate, typically three to six months. The trend is visible from the first monthly report, and it compounds as reviews and authority grow.",
  },
  {
    question: "How Much Does Dispensary SEO Cost?",
    answer:
      "Specialist cannabis SEO agencies commonly charge $1,500 to $5,000 a month for a single location. Zonic Media's plans are $197, $750 and $1,500 a month, all month-to-month with no long-term contracts. After a free audit we recommend the plan that fits your market and number of locations, at a flat monthly price.",
  },
  {
    question: "Can You Get My Dispensary Recommended in ChatGPT and AI Overviews?",
    answer:
      "We work the signals those answers are built from. When someone asks ChatGPT, Gemini, Perplexity or Google's AI Overviews for the best dispensary nearby, the answer draws on Google Maps data, reviews, and directory listings like Weedmaps and Leafly. We keep those consistent and strong, and we add clear, factual store information to your site so AI systems can cite it. No one can guarantee an AI mention, but these are the same inputs that decide it.",
  },
  {
    question: "Is Your Dispensary SEO Compliant with State Advertising Rules?",
    answer:
      "Yes. Every page we publish is reviewed against the rules of the state that licenses you. That means a 21+ age gate, your license number where required, no health or medical claims, and nothing that appeals to minors. Your Google profile also stays inside Google's cannabis policies.",
  },
  {
    question: "Why Choose Zonic Media over Another Cannabis SEO Company?",
    answer:
      "You get published, month-to-month pricing instead of a five-figure retainer. A dedicated strategist does everything in-house, and your monthly report is tied to calls, direction requests and menu clicks. We also know the cannabis-specific rules that trip up general agencies, from Google's storefront requirement to iframe menus, so your rankings build without putting your profile at risk.",
  },
];

const cannabisSeoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: CannabisSeoFaqs.map((faq) => ({
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
    label: "Local businesses ranked in the map pack",
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
  "Your dispensary map pack plan",
  "Profile compliance check",
  "Menu SEO opportunities mapped",
  "Review growth roadmap",
];

const AuditRows = [
  { label: "Google Business Profile", flag: "A+ grade" },
  { label: "Weedmaps, Leafly & citations", flag: "100% consistent" },
  { label: "Review velocity", flag: "Ahead of top 3" },
];

const ProblemChecks = [
  "Map pack ranking strategy",
  "Profile inside Google's rules",
  "Menu Google can index",
  "Reviews growing weekly",
];

const ServiceCards = [
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Compliant Google Business Profile",
    desc: (
      <>
        Your profile is your storefront in the map pack. We set up the Cannabis
        store category, hours, attributes, and photos Google actually allows,
        using the same system behind our{" "}
        <Link href="/local-seo-google-business-optimization" className="tseo-inline-link">
          GBP optimization service
        </Link>
        , so the profile ranks without tripping a suspension.
      </>
    ),
  },
  {
    icon: <FiSearch aria-hidden="true" />,
    title: "Dispensary Keyword & Competitor Research",
    desc: "We map every search your customers actually type, city by city and neighborhood by neighborhood. That includes dispensary near me, [city] dispensary, recreational dispensary, medical dispensary, and the brand and strain searches your menu can win. Then we build the plan that wins them.",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "Menu SEO (Dutchie, Jane & Headless)",
    desc: "An iframe menu gives your product pages' ranking power to the menu provider. We audit your setup and move you toward native or headless menus. That way every product and category lives on your domain with its own URL, title, and schema.",
  },
  {
    icon: <FiLink2 aria-hidden="true" />,
    title: "Weedmaps, Leafly & Citations",
    desc: "The same name, address, phone, and hours on Weedmaps, Leafly, Yelp, and every directory Google and AI assistants read. We fix the mismatched ones, build the missing ones, and keep them synced with your license.",
  },
  {
    icon: <FiStar aria-hidden="true" />,
    title: "Review Growth & Reputation",
    desc: "A steady stream of real reviews from real customers, collected the compliant way, with responses that show Google, and the next shopper comparing stores, that someone is paying attention.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "City Pages, Schema & Reporting",
    desc: (
      <>
        City and neighborhood pages, store schema, and a 21+ age gate. We build
        them on a fast{" "}
        <Link href="/services/web-design" className="tseo-inline-link">
          dispensary website
        </Link>{" "}
        when yours needs one. Every month you get one plain-English report on
        rankings, calls, and menu clicks.
      </>
    ),
  },
];

const ResultCards = [
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    industry: "Adult-Use Dispensary",
    metric: "+212%",
    label: "Direction requests from Google Maps",
    desc: "From page-two invisibility to the top three for 'dispensary near me' across the surrounding neighborhoods, after a profile rebuild and category fix.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    industry: "Medical Dispensary",
    metric: "Top 3",
    label: "Map pack for every core keyword",
    desc: "A reinstated profile, citation cleanup, and consistent Weedmaps and Leafly listings took the store from #13 to the top three for medical dispensary searches.",
  },
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    industry: "Multi-Location Operator",
    metric: "3.2×",
    label: "More organic menu traffic",
    desc: "Moving from an iframe menu to a native menu put every product on the brand's own domain, and category and strain pages started ranking alongside the stores.",
  },
];

const ScoreRows = [
  { label: "Profile strength", before: 34, after: 92 },
  { label: "Citation accuracy", before: 41, after: 96 },
  { label: "Review velocity", before: 22, after: 78 },
  { label: "Map pack visibility", before: 18, after: 84 },
];

const RankRows = [
  { kw: "dispensary near me", pos: "#1", delta: "▲ 5" },
  { kw: "[city] dispensary", pos: "#2", delta: "▲ 7" },
  { kw: "recreational dispensary", pos: "#1", delta: "▲ 4" },
  { kw: "medical dispensary near me", pos: "#3", delta: "▲ 8" },
];

const ReviewBarHeights = [28, 36, 44, 52, 58, 68, 74];

const CompareThem = [
  "Treats a dispensary like any retail store and gets the profile suspended",
  "Ignores the iframe menu quietly giving away your rankings",
  "Reports full of impressions, empty of store visits",
  "Five-figure retainers and one account manager for 80 clients",
  "12-month contracts before you see a single customer",
];

const CompareUs = [
  "Profile kept inside Google's cannabis rules and worked weekly",
  "Menu SEO audit and a plan to put your menu on your own domain",
  "Reporting tied to calls, direction requests, and menu clicks",
  "A dedicated strategist who knows your state's rules",
  "Month-to-month from $197. We keep you with results, not paperwork.",
];

const WhyCards = [
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local Search Is All We Do",
    desc: "We aren't a general agency dabbling in maps. The whole practice is local rankings, local calls, and store visits, and for a dispensary that's the channel that replaces the ads you can't run.",
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Fast, Compounding Execution",
    desc: "Profile and citation fixes ship in the first weeks, not the first quarter, so you get stronger while new stores open around you. Every month of work stacks on the last.",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Compliance-First, Transparent Always",
    desc: "You own every account and asset, and you see every change in the monthly report. Nothing goes live on your profile or site that we haven't checked against Google's and your state's rules.",
  },
];

const MarqueeItems = [
  "Dispensary SEO",
  "Cannabis Local SEO",
  "Google Business Profile",
  "Map Pack Rankings",
  "Menu SEO",
  "Weedmaps & Leafly",
  "Review Growth",
];

const NationwideChips = [
  "Adult-Use Dispensaries",
  "Medical Dispensaries",
  "Multi-Location Operators",
  "Pickup & Order-Ahead",
  "Dutchie Menus",
  "Jane Menus",
  "Headless Menus",
  "New Store Launches",
];

const GrowCards = [
  {
    href: "/services/cannabis-marketing-agency",
    icon: <FiTrendingUp aria-hidden="true" />,
    title: "Cannabis Marketing",
    desc: "Add compliant 21+ advertising, SMS, and loyalty on top of your rankings, so first-time visitors become regulars.",
    cta: "See cannabis marketing",
  },
  {
    href: "/services/gbp-reinstatement-service",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "GBP Reinstatement",
    desc: "Dispensary profiles get suspended more than almost any other category. If yours is down, we handle the appeal and the fixes.",
    cta: "Reinstate your profile",
  },
  {
    href: "/services/web-design",
    icon: <FiZap aria-hidden="true" />,
    title: "Website Design",
    desc: "A fast, age-gated dispensary site with a menu Google can index, built to turn map pack clicks into online orders.",
    cta: "See website design",
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
          __html: JSON.stringify(cannabisSeoFaqJsonLd),
        }}
      />

      <div className="tseo-page">
        <main>
          {/* 1. Hero */}
          <section className="tseo-hero">
            <div className="tseo-container">
              <div className="tseo-hero-grid">
                <div className="tseo-hero-copy">
                  <p className="tseo-eyebrow">Dispensary SEO</p>
                  <h1 className="tseo-hero-h1">
                    Local SEO for Cannabis Dispensaries That{" "}
                    <span className="tseo-hl">Fills Your Store</span>
                  </h1>
                  <p className="tseo-hero-sub">
                    Google Ads and Meta won&apos;t run THC ads, so your map
                    pack ranking is your ad budget. We&apos;ve helped 50+{" "}
                    <Link href="/services/local-seo-for-small-business" className="tseo-inline-link">local businesses</Link> climb
                    into the Google map pack. For licensed dispensaries, we
                    build the full system: a compliant Google Business Profile,
                    a menu Google can read, Weedmaps and Leafly listings,
                    reviews, and city pages. Adults who search &ldquo;dispensary
                    near me&rdquo; find your store first, not a directory.
                  </p>
                  <div className="tseo-hero-badges" aria-label="Partner badges">
                    {/* Self-hosted Clutch badge — the live iframe embed is
                        behind a Cloudflare challenge and breaks randomly. */}
                    <a
                      href="https://clutch.co/profile/zonic-media?badge=11431"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      Get Your Free Dispensary SEO Audit
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
                      <div className="tseo-dash-title">Dispensary Local SEO Performance</div>
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
                              Map pack · &ldquo;dispensary near me&rdquo;
                            </p>
                            <div className="tseo-dash-li tseo-dash-li--you">
                              <FiMapPin />
                              <span>Your Dispensary</span>
                              <em>#1</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Cannabis Co.</span>
                              <em>#2</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Dispensary</span>
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
                              Map pack · &ldquo;dispensary near me&rdquo;
                            </p>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Cannabis Co.</span>
                              <em>#1</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Dispensary</span>
                              <em>#2</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Wellness</span>
                              <em>#3</em>
                            </div>
                            <div className="tseo-dash-li tseo-dash-li--lost">
                              <FiMapPin />
                              <span>Your Dispensary</span>
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
                        &ldquo;dispensary near me&rdquo;
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
                          Your Dispensary
                          <MdOutlineVerifiedUser />
                        </strong>
                        <span className="tseo-gbp-stars">
                          <FaStar />
                          4.9 (176 reviews)
                        </span>
                      </div>
                    </div>
                    <p className="tseo-gbp-meta">
                      Cannabis store · <em>Open now</em> · Order ahead online
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
                      <span>Menu &amp; website clicks</span>
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
                    Adults are Searching for a Dispensary.{" "}
                    <span className="tseo-hl-text">
                      We Make Sure They Find You.
                    </span>
                  </h2>
                  <p className="tseo-lead">
                    When an adult wants to shop today, they search &ldquo;dispensary
                    near me&rdquo; and pick one of the top three stores on the
                    map. That query runs well over a million searches a month
                    in the US, and it&apos;s high intent. Most of those shoppers
                    are ready to order within the hour. For a dispensary, that
                    ranking matters more than it would for almost any other
                    store, because Google Ads and Meta ads aren&apos;t available
                    to you.
                  </p>
                  <p className="tseo-lead">
                    Our local SEO system captures that demand step by step. It
                    starts with a Google Business Profile built to Google&apos;s
                    rules for cannabis stores, then consistent citations
                    across Weedmaps, Leafly, and Yelp, steadily growing
                    reviews, menu pages Google can index, and city pages built
                    around the searches your customers actually type. We work
                    every ranking signal, keep it compliant, and do it every
                    month. That&apos;s how our clients turn local searches into
                    store visits and online orders.
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
                    Everything Your Dispensary Rankings Need, in One System
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
                  We Put Your Dispensary in the Top Three — And Keep It There
                </h2>
                <p className="tseo-lead">
                  The map pack gets most of the clicks, calls, and direction
                  requests, and that&apos;s where we specialize. When paid search
                  is closed to THC, it&apos;s also the closest thing a dispensary
                  has to an ad slot. Every campaign has one goal: earning your
                  store those top spots for the neighborhoods and cities
                  around you, then strengthening them month after month.
                </p>
                <p className="tseo-lead">
                  We work the signals Google actually rewards: proximity,
                  relevance, and prominence. A fully built-out profile tells
                  Google exactly what you offer: adult-use, medical, pickup,
                  and accessibility. Consistent citations on Weedmaps, Leafly,
                  and the directories confirm you are who your license says
                  you are, and a steady flow of reviews and local content
                  proves shoppers trust your store. We keep the profile
                  inside Google&apos;s cannabis rules: no product photos, no
                  prices, no promotions. And if a
                  listing ever gets suspended, our{" "}
                  <Link
                    href="/services/gbp-reinstatement-service"
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
                  dispensary near me
                </div>
                <div className="tseo-mappack-list">
                  <p className="tseo-mappack-title">Google · Local results</p>
                  <div className="tseo-mappack-row tseo-mappack-row--you">
                    <span className="tseo-mappack-thumb">
                      <FiImage />
                    </span>
                    <span className="tseo-mappack-info">
                      <strong>Your Dispensary</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        4.9 (176) · Cannabis store ·{" "}
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
                      <strong>Competitor Cannabis Co.</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        4.6 (98) · Cannabis store
                      </span>
                    </span>
                  </div>
                  <div className="tseo-mappack-row">
                    <span className="tseo-mappack-thumb">
                      <FiImage />
                    </span>
                    <span className="tseo-mappack-info">
                      <strong>Competitor Dispensary</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        4.4 (61) · Cannabis store
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
                    From Invisible to Unavoidable in Four Steps
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
                  <h3>Free Dispensary Visibility Audit</h3>
                  <p>
                    We audit your rankings, profile, citations, reviews, and
                    menu setup, and competitors, and show you exactly where the
                    shoppers you&apos;re missing are going instead.
                  </p>
                  <div className="tseo-bento-visual" aria-hidden="true">
                    <p className="tseo-bento-visual-title">
                      Where dispensary clients typically land after 90 days
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
                  <h3>Strategy &amp; Foundation Fixes</h3>
                  <p>
                    A keyword-mapped plan for your store, neighborhoods, and menu
                    categories, then
                    the foundation work: <Link href="/services/gmb-verification-help" className="tseo-inline-link">GBP verification support</Link> where a listing needs it, profile optimization, citation cleanup,
                    and on-page fixes.
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
                  <h3>Build Authority Every Month</h3>
                  <p>
                    Local content, links, review growth, and profile activity —
                    the compounding signals that move you up the map pack and
                    keep you there as new stores open around you.
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
                    <h3>Report, Refine, Expand</h3>
                    <p>
                      Monthly reporting tied to calls, direction requests, and
                      menu clicks, not vanity metrics. As rankings lock in, we
                      expand to more neighborhoods, categories, and locations.
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
                  What Happens When Dispensary SEO is Done Properly
                </h2>
                <p className="tseo-lead">
                  Different markets, different offers — the same system, executed month after month, often paired with a <Link href="/services/web-design" className="tseo-inline-link">dispensary website design</Link> that turns the extra traffic into online orders.
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
                  What You Get with Zonic Vs. A Typical Cannabis SEO Agency
                </h2>
                <p className="tseo-lead">
                  Local SEO is all we do, and it shows. Here is exactly what
                  working with a dedicated <Link href="/services/cannabis-marketing-agency" className="tseo-inline-link">cannabis marketing agency</Link>
                  looks like.
                </p>
              </div>
              <div className="tseo-compare-grid">
                <div className="tseo-compare-col tseo-compare-col--them">
                  <h3>Typical SEO Agency</h3>
                  <p className="tseo-compare-sub">
                    Why most dispensary campaigns quietly stall
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
                  <h3>Dispensary SEO with Zonic Media</h3>
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
                    A typical dispensary client&apos;s first six months
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
                    Watch Your Dispensary Rankings and Reviews Climb,{" "}
                    <span className="tseo-hl-text">Month over Month</span>
                  </h2>
                  <p className="tseo-lead">
                    No black box. Every campaign comes with live rank tracking
                    for the dispensary keywords that pay you, review growth
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
                  A Dispensary SEO Partner, Not a Monthly Invoice
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
                  <p className="tseo-eyebrow">Free Dispensary SEO Audit</p>
                  <h3>See Exactly How We&apos;ll Grow Your Dispensary Rankings</h3>
                  <p>
                    We&apos;ll map your profile, citations, reviews, and
                    rankings — and show you the clear path to the top three for
                    the dispensary searches in your market. Free, and yours to keep
                    either way.
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
                        Where our dispensary campaigns typically land after six months
                        of compounding local SEO work
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
                  Local SEO for Cannabis Dispensaries in Every Legal Market
                </h2>
                <p className="tseo-lead">
                  From single-store operators to multi-location brands, we run
                  dispensary SEO in adult-use and medical markets across the
                  US. Audits, strategy calls, and reporting all happen
                  remotely, so you get the same process in Michigan, Colorado,
                  or California. Every campaign follows the rules of the state
                  that licenses you.
                </p>
              </div>
              <div className="tseo-coverage" aria-hidden="true">
                {[
                  { city: "Dover, DE", win: "#1 Map Pack", top: "26%", left: "78%" },
                  { city: "Philadelphia, PA", win: "Top 3", top: "12%", left: "58%" },
                  { city: "Miami, FL", win: "+3× leads", top: "68%", left: "70%" },
                  { city: "Detroit, MI", win: "+212% calls", top: "20%", left: "46%" },
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
                    Straight Answers About Dispensary SEO
                  </h2>
                  <p className="tseo-lead">
                    Pricing, timelines, Google&apos;s cannabis rules, menus, and
                    how <Link href="/services/ai-seo-services" className="tseo-inline-link">AI search</Link> picks
                    which dispensary to recommend. If your question is not here, send it through the
                    form — a strategist answers, not a sales script.
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
                  <GmbFaqs items={CannabisSeoFaqs} />
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
                  Rankings are Step One. Here is What Multiplies Them.
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
                    Claim Your Free Dispensary SEO Audit
                  </h2>
                  <p className="tseo-lead">
                    Tell us about your dispensary and we&apos;ll send a full
                    local visibility audit covering rankings, profile, menu
                    setup, citations, and reviews, plus a flat-price growth
                    plan to take you to the top of your market.
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
                    title="Get Your Free Dispensary SEO Audit"
                    subtitle="No contracts, no pressure — just a clear picture of where your dispensary stands and what it takes to win your market."
                    submitText="Send My Free Audit"
                    messageLabel="Tell us about your dispensary"
                    messagePlaceholder="Your city, number of locations, menu platform, and what you'd like to improve"
                    defaultServices={["Local SEO"]}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* 14. Global site footer */}
      <RelatedServices current="/services/industry/local-seo-for-cannabis-dispensaries" />
      <Footer />
    </>
  );
}

export default Page;
