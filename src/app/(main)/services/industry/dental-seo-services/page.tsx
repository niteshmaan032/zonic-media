/*
 * DENTAL SEO SERVICES — revamped July 2026 onto the approved local SEO template
 * layout (see /services/template-seo). Design/classes come from templateSeo.css
 * (scoped under .tseo-page); all copy, mockups, FAQs, and schema are dental /
 * dentist-specific and speak to PATIENTS (conversion = booked appointments /
 * new patients). Form leads submit as service "Local SEO" (API whitelist).
 *
 * ==========================================================================
 * OLD IMPLEMENTATION — kept commented for reference during the revamp.
 * ==========================================================================
 *
 * import "@/app/style/dentaSeo.css";
 * import "@/app/style/carTow.css";
 * import ClutchWidget from "@/app/components/ClutchWidget";
 * import InlineAuditForm from "@/app/components/InlineAuditForm";
 * import GmbFaqs from "@/app/components/GmbFaqs";
 * import HashScrollLink from "@/app/components/HashScrollLink";
 * import LeadContactForm from "@/app/components/LeadContactForm";
 * import Footer from "@/app/components/Footer";
 * import { SITE_CONTACT } from "@/shared/siteConfig";
 * import Image from "next/image";
 * import Script from "next/script";
 * import { Col, Row } from "react-bootstrap";
 * import { FaDatabase, FaDollarSign, FaEye, FaFileAlt } from "react-icons/fa";
 * import { FiPhoneCall } from "react-icons/fi";
 * import { LuCalendarCheck2 } from "react-icons/lu";
 * import { MdOutlineLocationOn } from "react-icons/md";
 * import { RiLineChartLine } from "react-icons/ri";
 * import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";
 *
 * const DentalSeoFaqs = [
 *   { question: "What is local SEO for dental practices?", answer: "Local SEO for dental practices helps your clinic rank higher on Google Search and Google Maps when patients search for dentists, cosmetic dentistry, emergency dental care, implants, Invisalign, and other services near them." },
 *   { question: "How can dental SEO help my clinic get more patients?", answer: "Dental SEO improves local visibility, builds trust through reviews and content, and helps your website convert high-intent searches into calls, appointment requests, and booked patients." },
 *   { question: "How Long Does Dental SEO Take to Show Results?", answer: "Most dental offices begin seeing early ranking and visibility improvements within 2 to 3 months, while stronger patient lead flow usually builds over 4 to 6 months depending on competition and current website authority." },
 *   { question: "Do dental offices need Google Business Profile optimization?", answer: "Yes. Google Business Profile optimization is critical for dental offices because many patients choose practices directly from Google Maps results, reviews, photos, service listings, and local search information." },
 *   { question: "Is SEO better than paid ads for dental offices?", answer: "SEO builds long-term visibility and lowers patient acquisition cost over time, while paid ads can generate faster short-term leads. Many dental offices get the best results from using both together." },
 *   { question: "What dental services can you target with SEO?", answer: "We can target general dentistry, cosmetic dentistry, dental implants, Invisalign, teeth whitening, emergency dentistry, pediatric dentistry, veneers, root canals, dentures, and service-area searches." },
 *   { question: "Can you help my dental office rank on Google Maps?", answer: "Yes. Our dental SEO strategy includes Google Business Profile optimization, local citations, review strategy, service optimization, local landing pages, and map ranking improvements." },
 *   { question: "How do I get started with Zonic Media?", answer: "You can book a free dental SEO audit or strategy call so we can review your clinic's visibility, rankings, website, competition, and best growth opportunities." },
 * ];
 *
 * OLD data arrays also included: DentalFormHead, DentalProcessSteps (6),
 * DentalChoosePoints (4), DentalServices (8). Old internal hrefs:
 * /services/gmb-optimization, /services/gmb-reinstatement-help,
 * /services/gmb-verification-help, /services/local-seo-for-home-services,
 * /services/google-ads, /services, /services/dental-website-design.
 *
 * (Full prior JSX in git history — replaced wholesale by the template layout below.)
 */

import type { Metadata } from "next";
import "@/app/style/templateSeo.css";
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

const PAGE_PATH = "/services/industry/dental-seo-services";

export const metadata: Metadata = {
  title: "Dental SEO Services That Book More Patients",
  description:
    "Dental SEO services that win 'dentist near me' — GBP optimization, reviews, and local pages that turn searches into booked patients. Free audit.",
  keywords: [
    "dental SEO services",
    "dentist near me",
    "emergency dentist",
    "dental implants",
    "cosmetic dentist",
    "teeth whitening",
    "SEO for dentists",
    "dental practice SEO",
    "local SEO for dentists",
    "Google Business Profile for dentists",
    "dental patient acquisition",
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
    title: "Dental SEO Services That Book More Patients | Zonic Media",
    description:
      "Dental SEO services that win 'dentist near me' — Google Business Profile optimization, reviews, and local pages that turn searches into booked patients.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Dental SEO Services", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental SEO Services",
  serviceType: "Local Search Engine Optimization for Dental Practices",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Dental SEO services covering Google Business Profile optimization, citation building, review growth, on-page SEO, and local service pages — built to rank dental practices in the Google map pack and grow booked patient appointments.",
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
    name: "Dental practices, dentists, cosmetic and implant clinics, multi-location dental groups",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Optimization for Dentists",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dental Keyword & Competitor Research",
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
          name: "On-Page SEO & Treatment Pages",
        },
      },
    ],
  },
};

const DentalSeoFaqs = [
  {
    question: "What's Included in Your Dental SEO Services?",
    answer:
      "Every dental campaign covers the full local ranking system: Google Business Profile optimization, citation building and cleanup, review growth, on-page SEO for your treatment and service-area pages, local content, and a monthly report that shows rankings, calls, and booked appointments — not vanity metrics.",
  },
  {
    question: "How Long Does Dental SEO Take to Show Results?",
    answer:
      "Most dental practices see measurable movement within 60 to 90 days — better map pack visibility, more profile actions, and more calls for searches like 'dentist near me' and 'emergency dentist.' Competitive markets take longer to fully dominate, but the trajectory is visible from the first monthly report, and momentum compounds every month.",
  },
  {
    question: "How Much Do Dental SEO Services Cost?",
    answer:
      "Pricing depends on how many locations you run, how competitive your area is, and how aggressively you want to grow high-value treatments like implants and Invisalign. After a free audit we quote a flat monthly price — no long-term contracts and no surprise line items.",
  },
  {
    question: "Do You Guarantee First-Page Google Rankings for Dental Keywords?",
    answer:
      "Our track record speaks for itself — most dental clients reach top-three map pack positions for their core keywords, and every campaign is built on the exact signals Google rewards. Because Google's results change daily, no agency can honestly promise a fixed position, so we guarantee what matters: full transparency. You see exactly where you rank, what improved, and what we did each month — and with no long-term contracts, we earn your business with results.",
  },
  {
    question: "Do Dental Practices Really Need Google Business Profile Optimization?",
    answer:
      "Yes — it is the single biggest lever in dental local SEO. Your Google Business Profile decides whether you show up in the local map pack when a patient searches for a dentist, and it drives your call volume, appointment requests, direction requests, and review visibility. We optimize every field, category, photo, and post so Google trusts your profile and patients choose it.",
  },
  {
    question: "Can You Help Multi-Location Dental Practices?",
    answer:
      "Absolutely. We build local SEO systems for single-location dentists and multi-location dental groups alike — service-area targeting, individual location pages, and map visibility for every neighborhood you serve, all reported in one clear dashboard.",
  },
  {
    question: "Why Choose Zonic Media over Another Dental SEO Company?",
    answer:
      "We specialize in local businesses like dental practices, and everything is done in-house by the team you actually talk to. You get a dedicated strategist, monthly reporting tied to calls and booked appointments, and work that is built to compound month after month — not churn.",
  },
];

const dentalSeoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: DentalSeoFaqs.map((faq) => ({
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
    label: "Local businesses & practices ranked",
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
  "Your dental map pack growth plan",
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
        Your profile is your new front door in the map pack. We optimize every
        field, dental category, photo, and post — the same system behind our{" "}
        <Link href="/services/gmb-optimization" className="tseo-inline-link">
          GBP optimization service
        </Link>{" "}
        — so Google trusts it and patients choose you.
      </>
    ),
  },
  {
    icon: <FiSearch aria-hidden="true" />,
    title: "Dental Keyword & Competitor Research",
    desc: "We map every search your patients actually type — dentist near me, emergency dentist, dental implants, Invisalign, cosmetic dentistry — city by city, and build the exact strategy that wins those searches for you.",
  },
  {
    icon: <FiLink2 aria-hidden="true" />,
    title: "Citations & Listing Management",
    desc: "Consistent name, address, and phone across every directory that matters — including the healthcare and dental listings Google checks. We fix the wrong ones, build the missing ones, and keep them synced.",
  },
  {
    icon: <FiStar aria-hidden="true" />,
    title: "Review Growth & Reputation",
    desc: "A steady stream of real reviews from real patients, with responses that show Google — and the next person comparing dentists — that your practice is trusted and active.",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "On-Page SEO & Treatment Pages",
    desc: (
      <>
        Treatment and city pages built around real dental searches, with schema
        and internal links that make every page easier to rank — backed by
        conversion-first{" "}
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
    desc: "Rankings, calls, direction requests, and appointment-request leads in one plain-English report. You always know what we did, what moved, and what is next.",
  },
];

const ResultCards = [
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    industry: "General Dentistry",
    metric: "+212%",
    label: "New patient calls from Google Business Profile",
    desc: "From page-two invisibility to top-three map pack rankings for 'dentist near me' across every neighborhood the practice serves.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    industry: "Cosmetic & Implants",
    metric: "Top 3",
    label: "Map pack for every core treatment keyword",
    desc: "A profile rebuild, citation cleanup, and review growth took the clinic from #13 to the top three for implants, veneers, and cosmetic dentistry.",
  },
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    industry: "Multi-Location Dental",
    metric: "3.2×",
    label: "More booked appointments from local search",
    desc: "Treatment and city pages turned scattered visibility into a steady, year-round flow of new patients across every office.",
  },
];

const ScoreRows = [
  { label: "Profile strength", before: 34, after: 92 },
  { label: "Citation accuracy", before: 41, after: 96 },
  { label: "Review velocity", before: 22, after: 78 },
  { label: "Map pack visibility", before: 18, after: 84 },
];

const RankRows = [
  { kw: "dentist near me", pos: "#1", delta: "▲ 5" },
  { kw: "emergency dentist [city]", pos: "#2", delta: "▲ 7" },
  { kw: "dental implants", pos: "#1", delta: "▲ 4" },
  { kw: "cosmetic dentist", pos: "#3", delta: "▲ 8" },
];

const ReviewBarHeights = [28, 36, 44, 52, 58, 68, 74];

const CompareThem = [
  "Set-and-forget profile, updated quarterly at best",
  "Reports full of impressions, empty of new patients",
  "Offshore link packages and duplicate citations",
  "One account manager for 80 clients",
  "12-month contracts before you see a single patient",
];

const CompareUs = [
  "Profile worked weekly — posts, photos, Q&A, dental categories",
  "Reporting tied to calls, appointment requests, and booked patients",
  "Hand-built citations and local links that compound",
  "A dedicated strategist who knows your dental market",
  "Month-to-month — we keep you with results, not paperwork",
];

const WhyCards = [
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local Businesses are All We Do",
    desc: "We are not a generalist agency dabbling in maps. Local rankings, local calls, and booked appointments for dental practices and local businesses is the entire practice.",
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Fast, Compounding Execution",
    desc: "Foundation fixes ship in the first weeks, not the first quarter — so new patients start finding you sooner. Every month of work stacks on the last.",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Transparent to a Fault",
    desc: "You own every account and asset. You see every change in the monthly report. If a number dips, you hear it from us first — with the fix already moving.",
  },
];

const MarqueeItems = [
  "Dental SEO",
  "Dentist Near Me Rankings",
  "Google Business Profile",
  "Map Pack Rankings",
  "New Patient Leads",
  "Review Growth",
  "Treatment Pages",
];

const NationwideChips = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Invisalign",
  "Emergency Dental",
  "Teeth Whitening",
  "Pediatric Dentistry",
  "Root Canals",
];

const GrowCards = [
  {
    href: "/services/gmb-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most patients pick a dentist straight from the map pack. We optimize your profile so that practice is yours.",
    cta: "Optimize your profile",
  },
  {
    href: "/services/web-design",
    icon: <FiZap aria-hidden="true" />,
    title: "Dental Website Design",
    desc: "Ready to convert more of the traffic you earn? A fast, conversion-first site that turns visitors into booked appointments.",
    cta: "See website design",
  },
  {
    href: "/services/google-ads",
    icon: <FiTrendingUp aria-hidden="true" />,
    title: "Google Ads Management",
    desc: "Pair organic rankings with paid coverage and own the whole results page for your highest-value treatments.",
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
          __html: JSON.stringify(dentalSeoFaqJsonLd),
        }}
      />

      <div className="tseo-page">
        <main>
          {/* 1. Hero */}
          <section className="tseo-hero">
            <div className="tseo-container">
              <div className="tseo-hero-grid">
                <div className="tseo-hero-copy">
                  <p className="tseo-eyebrow">Dental SEO Services</p>
                  <h1 className="tseo-hero-h1">
                    Dental SEO That{" "}
                    <span className="tseo-hl">Books More New Patients</span>
                  </h1>
                  <p className="tseo-hero-sub">
                    We&apos;ve helped 50+ local businesses climb into the <Link href="/services/local-seo-for-home-services" className="tseo-inline-link">Google map pack</Link> and grow. Zonic Media builds the full local ranking
                    system for dental practices — Google Business Profile,
                    citations, reviews, and treatment pages — so when patients
                    search &ldquo;dentist near me,&rdquo; they find you first.
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
                      Get Your Free Dental SEO Audit
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
                      <h3>Dental Local SEO Performance</h3>
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
                              Map pack · &ldquo;dentist near me&rdquo;
                            </p>
                            <div className="tseo-dash-li tseo-dash-li--you">
                              <FiMapPin />
                              <span>Your Dental Practice</span>
                              <em>#1</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Family Dental</span>
                              <em>#2</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Dental Care</span>
                              <em>#3</em>
                            </div>
                            <div className="tseo-dash-review">
                              <FaStar />
                              4.9 · 194 reviews
                              <em>+32 this quarter</em>
                            </div>
                          </div>
                          <div className="tseo-dash-chart">
                            <p className="tseo-dash-sub">
                              New patient calls from local search
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
                              Map pack · &ldquo;dentist near me&rdquo;
                            </p>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Family Dental</span>
                              <em>#1</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Dental Care</span>
                              <em>#2</em>
                            </div>
                            <div className="tseo-dash-li">
                              <FiMapPin />
                              <span>Competitor Smile Studio</span>
                              <em>#3</em>
                            </div>
                            <div className="tseo-dash-li tseo-dash-li--lost">
                              <FiMapPin />
                              <span>Your Dental Practice</span>
                              <em>#13</em>
                            </div>
                          </div>
                          <div className="tseo-dash-chart">
                            <p className="tseo-dash-sub">
                              New patient calls from local search
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
                        &ldquo;dentist near me&rdquo;
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
                          Your Dental Practice
                          <MdOutlineVerifiedUser />
                        </strong>
                        <span className="tseo-gbp-stars">
                          <FaStar />
                          4.9 (194 reviews)
                        </span>
                      </div>
                    </div>
                    <p className="tseo-gbp-meta">
                      Dentist · <em>Open now</em> · Accepting new patients
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
                      <span>Appointment requests</span>
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
                    Patients are Searching for a Dentist.{" "}
                    <span className="tseo-hl-text">
                      We Make Sure They Find You.
                    </span>
                  </h2>
                  <p className="tseo-lead">
                    When a tooth aches or a family needs a new dentist, the first
                    thing patients do is search &ldquo;dentist near me&rdquo; and
                    call one of the top three practices on the map. That is an
                    enormous, high-intent growth channel sitting right in front
                    of your practice — and it is exactly the channel we have
                    spent years mastering for dental offices.
                  </p>
                  <p className="tseo-lead">
                    Our local SEO system captures it step by step: a fully
                    optimized Google Business Profile, consistent citations,
                    steadily growing reviews, and treatment pages built around
                    the searches your patients actually type. Every ranking
                    signal Google rewards, done properly and done monthly — that
                    is how our clients turn local searches into calls, booked
                    appointments, and new patients who stay for years.
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
                    Everything Your Dental Rankings Need, in One System
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
                  We Put Your Dental Practice in the Top Three — And Keep It There
                </h2>
                <p className="tseo-lead">
                  The map pack gets the majority of clicks and nearly all of the
                  new patient calls, and that is exactly where we specialize.
                  Every campaign is built around one goal: earning your practice
                  those top spots for the dental services and neighborhoods that
                  pay you best, then strengthening them month after month.
                </p>
                <p className="tseo-lead">
                  We work the signals Google actually rewards: proximity,
                  relevance, and prominence. A fully built-out profile tells
                  Google exactly which treatments you offer, consistent
                  citations confirm you are who you say you are, and a steady
                  flow of reviews and local content proves patients love your
                  practice. And if a listing ever gets suspended, our{" "}
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
                  dentist near me
                </div>
                <div className="tseo-mappack-list">
                  <p className="tseo-mappack-title">Google · Local results</p>
                  <div className="tseo-mappack-row tseo-mappack-row--you">
                    <span className="tseo-mappack-thumb">
                      <FiImage />
                    </span>
                    <span className="tseo-mappack-info">
                      <strong>Your Dental Practice</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        4.9 (194) · Dentist ·{" "}
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
                      <strong>Competitor Family Dental</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        4.6 (98) · Dentist
                      </span>
                    </span>
                  </div>
                  <div className="tseo-mappack-row">
                    <span className="tseo-mappack-thumb">
                      <FiImage />
                    </span>
                    <span className="tseo-mappack-info">
                      <strong>Competitor Dental Care</strong>
                      <span className="tseo-mappack-stars">
                        <FaStar />
                        4.4 (61) · Dentist
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
                  <h3>Free Dental Visibility Audit</h3>
                  <p>
                    We audit your rankings, profile, citations, reviews, and
                    competitors — and show you exactly where the new patients you
                    are missing are booking instead.
                  </p>
                  <div className="tseo-bento-visual" aria-hidden="true">
                    <p className="tseo-bento-visual-title">
                      Where dental clients typically land after 90 days
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
                    A keyword-mapped plan for your treatments and neighborhoods,
                    then the foundation work: <Link href="/services/gmb-verification-help" className="tseo-inline-link">GBP verification support</Link> where a listing needs it, profile optimization, citation
                    cleanup, and on-page fixes.
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
                    keep you there month after month.
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
                      Monthly reporting tied to calls and booked appointments,
                      not vanity metrics. As rankings lock in, we expand to more
                      treatments and more neighborhoods.
                    </p>
                  </div>
                  <div className="tseo-bento-s4-side">
                    <div className="tseo-bento-chips">
                      {[
                        "Plain-English report",
                        "New neighborhoods",
                        "New treatments",
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
                  What Happens When Dental SEO is Done Properly
                </h2>
                <p className="tseo-lead">
                  Different markets, different practices — the same system,
                  executed month after month, and often a <Link href="/services/dental-website-design" className="tseo-inline-link">dental website design</Link> that converts that traffic into booked appointments.
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
                  What You Get with Zonic Vs. A Typical Dental SEO Agency
                </h2>
                <p className="tseo-lead">
                  Local SEO for local businesses is all we do, and it shows. Here
                  is exactly what working with a dedicated <Link href="/services/dental-marketing-agency" className="tseo-inline-link">dental marketing agency</Link> looks like.
                </p>
              </div>
              <div className="tseo-compare-grid">
                <div className="tseo-compare-col tseo-compare-col--them">
                  <h3>Typical SEO Agency</h3>
                  <p className="tseo-compare-sub">
                    Why most dental campaigns quietly stall
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
                  <h3>Dental SEO with Zonic Media</h3>
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
                    A typical dental client&apos;s first six months
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
                    Watch Your Dental Rankings and Reviews Climb,{" "}
                    <span className="tseo-hl-text">Month over Month</span>
                  </h2>
                  <p className="tseo-lead">
                    No black box. Every campaign comes with live rank tracking
                    for the dental keywords that pay you, review growth
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
                      194 Google reviews and counting
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
                  A Dental SEO Partner, Not a Monthly Invoice
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
                  <p className="tseo-eyebrow">Free Dental SEO Audit</p>
                  <h3>See Exactly How We&apos;ll Grow Your Dental Rankings</h3>
                  <p>
                    We&apos;ll map your profile, citations, reviews, and
                    rankings — and show you the clear path to the top three for
                    the dental searches in your area. Free, and yours to keep
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
                        Where our dental campaigns typically land after six
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
                <p className="tseo-eyebrow">Wherever You Practice</p>
                <h2 className="tseo-h2">
                  Dental SEO for Practices in Every Market in the US
                </h2>
                <p className="tseo-lead">
                  From single-location dentists to multi-location dental groups,
                  we run local SEO campaigns in every state. Everything happens
                  remotely — audits, strategy calls, reporting — so you get the
                  same process whether you are in Delaware, Texas, or California.
                </p>
              </div>
              <div className="tseo-coverage" aria-hidden="true">
                {[
                  { city: "Dover, DE", win: "#1 Map Pack", top: "26%", left: "78%" },
                  { city: "Philadelphia, PA", win: "Top 3", top: "12%", left: "58%" },
                  { city: "Miami, FL", win: "+3× patients", top: "68%", left: "70%" },
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
                    Straight Answers About Dental SEO
                  </h2>
                  <p className="tseo-lead">
                    Pricing, timelines, guarantees, where <Link href="/services/google-ads" className="tseo-inline-link">Google Ads for dentists</Link> fits alongside SEO, and what actually moves
                    dental rankings. If your question is not here, send it
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
                  <GmbFaqs items={DentalSeoFaqs} />
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
                    Claim Your Free Dental SEO Audit
                  </h2>
                  <p className="tseo-lead">
                    Tell us about your practice and we will send a full local
                    visibility audit — rankings, profile, citations, reviews —
                    plus a flat-price growth plan to take you to the top of your
                    market and book more new patients.
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
                    title="Get Your Free Dental SEO Audit"
                    subtitle="No contracts, no pressure — just a clear picture of where your dental practice stands and what it takes to win your market."
                    submitText="Send My Free Audit"
                    messageLabel="Tell us about your dental practice"
                    messagePlaceholder="Your treatments, your city, and what you'd like to improve"
                    defaultServices={["Local SEO"]}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* 14. Global site footer */}
      <RelatedServices current="/services/industry/dental-seo-services" />
      <Footer />
    </>
  );
}

export default Page;
