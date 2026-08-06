/*
 * DELAWARE DIGITAL MARKETING — rebuilt Aug 2026 on a component layout inspired
 * by /services/industry/local-seo-services-for-hvac (structure) and
 * /services/pest-control-website-design (section rhythm), but with its own
 * design language. Palette is the two-colour brand set: electric blue #2567e8
 * as the primary and gold #fdc115 as the accent. Gold stays off white
 * backgrounds for text (it fails contrast there) — see the note at the top of
 * delDigital.css for how the two are divided.
 *
 * IMAGES: four original documentary-style photos live in
 * /public/images/delaware. Each source ratio matches its wrapper so the full
 * composition stays sharp and intact instead of relying on an aggressive crop.
 *
 * LEADS: form submits as service "Local SEO" + "Pay Per Click (PPC)" — both are
 * on the ALLOWED_SERVICES whitelist in src/api/leadsRoute.ts. Because this page
 * now has an opt-in form, it was removed from GHL_PAGES in SiteFloatingWidgets
 * (GHL rejects its widget on pages with another opt-in source) — the site's own
 * ChatBot renders here instead.
 */

import type { Metadata } from "next";
import "@/app/style/delware/delDigital.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LocalRankTracker, {
  type LocalRankRow,
} from "@/app/components/LocalRankTracker";
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
  FiLayout,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
  FiSend,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiRobot2Line, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/delaware/digital-marketing";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Delaware | SEO & Ads",
  description:
    "Delaware digital marketing agency in Dover. Local SEO, Google Ads, social & conversion-focused web design — reported against calls and revenue. Free audit.",
  keywords: [
    "digital marketing agency Delaware",
    "Delaware digital marketing agency",
    "digital marketing Delaware",
    "marketing agency Delaware",
    "SEO company Delaware",
    "SEO services Delaware",
    "local SEO Delaware",
    "PPC management Delaware",
    "Google Ads agency Delaware",
    "social media marketing Delaware",
    "digital marketing agency Wilmington DE",
    "marketing agency Dover DE",
    "small business marketing Delaware",
    "lead generation Delaware",
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
    title: "Digital Marketing Agency in Delaware | Zonic Media",
    description:
      "Delaware digital marketing agency in Dover. Local SEO, Google Ads, social, content, and conversion-focused web design — reported against calls and booked revenue.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Delaware Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Agency in Delaware",
  serviceType: "Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Full-service digital marketing for Delaware businesses — local SEO and Google Business Profile optimization, Google Ads management, social media, email, content and AI search visibility, and conversion-focused web design, all measured against calls and booked revenue.",
  provider: {
    "@type": "LocalBusiness",
    name: "Zonic Media",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green, STE B",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US",
    },
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Delaware",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Delaware Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO & Google Business Profile Optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads & Paid Search Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Media Marketing" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content & AI Search Visibility",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Email & Lifecycle Marketing" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conversion-Focused Web Design",
        },
      },
    ],
  },
};

const DelDigitalFaqs = [
  {
    question: "What does a digital marketing agency do for a small business?",
    answer:
      "It owns the work that brings customers to you and turns them into inquiries: getting you found in Google Search, Maps, and AI answers, running paid campaigns that pay for themselves, building content and social presence that earns trust, and fixing the pages where visitors currently leave. For most Delaware businesses the honest job description is simpler than that — more qualified calls and form fills every month, and a clear report showing where they came from.",
  },
  {
    question: "How much does digital marketing cost in Delaware?",
    answer:
      "It depends on how many channels you run and how competitive your category is. A single-channel local SEO engagement sits well below a full-funnel program with paid search, content, and web work behind it. After a free audit we quote one flat monthly price with the scope written out — no hourly billing, no surprise line items, and no long-term contract. Ad spend is always yours, paid directly to Google, and never marked up.",
  },
  {
    question: "How long before digital marketing starts working?",
    answer:
      "Paid search can produce qualified calls in the first two to three weeks once tracking and landing pages are right. SEO and content work on a longer curve — most Delaware clients see measurable movement in rankings and profile actions within 60 to 90 days, with lead volume compounding from there. We run both together so you get near-term flow while the organic side builds, and the first monthly report shows the trajectory either way.",
  },
  {
    question: "Is SEO or Google Ads better for a Delaware business?",
    answer:
      "They solve different problems, and in a market the size of Delaware they work best together. Ads buy you the top of the results page today and are ideal for testing which services and messages actually convert. SEO and Google Business Profile work earn the map pack and organic positions that keep producing after you stop paying per click. We usually start paid to learn fast, then shift budget toward organic as rankings take hold.",
  },
  {
    question: "Do you work with businesses outside Delaware?",
    answer:
      "Yes. We are based in Dover and know New Castle, Kent, and Sussex counties well, but the same team runs campaigns across the Mid-Atlantic and nationwide — including our Philadelphia clients right across the state line. Everything happens remotely: audits, strategy calls, reporting, and the monthly work itself.",
  },
  {
    question: "How do I choose the right digital marketing agency?",
    answer:
      "Ask three questions. Who actually does the work — the person on the call, or an offshore team you will never meet? What does the monthly report measure — calls and booked jobs, or impressions and rankings nobody buys from? And what happens if you want to leave — do you own your ad accounts, website, and Google Business Profile? We answer those with in-house execution, lead-level reporting, and full account ownership from day one.",
  },
  {
    question: "Do you optimize for AI search and Google AI Overviews?",
    answer:
      "Yes, and it is now a standard part of every engagement rather than an upsell. A growing share of searches end in an AI-generated answer instead of a click, so we structure your pages, schema, entity signals, and reviews so your business is the source those answers cite. The same work that earns AI citations also strengthens conventional rankings, so there is no trade-off.",
  },
  {
    question: "What do I actually get in the monthly report?",
    answer:
      "Calls, form fills, and chat conversations with the channel each one came from; rankings and Google Business Profile actions; ad spend against cost per lead; and a plain-English summary of what we did, what moved, and what is next. No jargon dashboard you have to interpret. If a number drops, you hear it from us first, with the fix already underway.",
  },
];

const delDigitalFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: DelDigitalFaqs.map((faq) => ({
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
  "Local SEO & map pack",
  "Paid search that converts",
  "AI search visibility",
  "Tracked to booked revenue",
];

const ServiceCards = [
  {
    tone: "blue",
    icon: <FiMapPin aria-hidden="true" />,
    title: "Local SEO & Google Business Profile",
    desc: (
      <>
        The map pack is where Delaware buying decisions get made. We optimize
        every profile field, category, photo, and post — the same system behind
        our{" "}
        <Link href="/services/gmb-optimization" className="deldg-inline-link">
          Google Business Profile optimization
        </Link>{" "}
        — then build the citations and reviews that hold the position.
      </>
    ),
  },
  {
    tone: "gold",
    icon: <FiTarget aria-hidden="true" />,
    title: "Google Ads & Paid Search",
    desc: (
      <>
        High-intent campaigns that stop paying for tire-kickers. Tight match
        types, negative keyword discipline, and landing pages built to convert —
        see how we run{" "}
        <Link href="/services/google-ads" className="deldg-inline-link">
          Google Ads management
        </Link>
        . Your spend goes straight to Google, never marked up.
      </>
    ),
  },
  {
    tone: "blue",
    icon: <FiUsers aria-hidden="true" />,
    title: "Social Media Marketing",
    desc: "Organic and paid social that does a real job: staying visible between purchases, proving you exist to people comparing options, and feeding retargeting audiences that make every other channel cheaper.",
  },
  {
    tone: "gold",
    icon: <RiRobot2Line aria-hidden="true" />,
    title: "Content & AI Search Visibility",
    desc: "Pages and articles written around what Delaware customers actually ask, structured with the schema and entity signals that get your business cited in AI Overviews and assistant answers — not just ranked in blue links.",
  },
  {
    tone: "blue",
    icon: <FiSend aria-hidden="true" />,
    title: "Email & Lifecycle Marketing",
    desc: "The cheapest revenue you own. Automated follow-up for unclosed quotes, seasonal campaigns to your existing list, and win-back sequences that turn one-time jobs into repeat customers.",
  },
  {
    tone: "gold",
    icon: <FiLayout aria-hidden="true" />,
    title: "Conversion-Focused Web Design",
    desc: (
      <>
        Traffic is wasted on a page that does not ask for the call. We rebuild
        the pages that matter with fast load times, obvious next steps, and
        tracking on every action —{" "}
        <Link href="/services/web-design" className="deldg-inline-link">
          web design built to convert
        </Link>
        .
      </>
    ),
  },
];

const ChannelBars = [
  { label: "Organic search", val: 88, tone: "blue" },
  { label: "Google Maps", val: 94, tone: "gold" },
  { label: "Paid search", val: 71, tone: "blue" },
  { label: "Social & referral", val: 46, tone: "gold" },
];

const ResultCards = [
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    industry: "Home services · New Castle County",
    metric: "+212%",
    label: "Calls from local search",
    desc: "A rebuilt Google Business Profile, citation cleanup, and city pages took a Wilmington-area contractor from page two to the top three across every service area.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    industry: "Professional services · Dover",
    metric: "3.4×",
    label: "Qualified inquiries per month",
    desc: "Paid search proved which services actually convert, then content and on-page work moved those same terms into organic positions that keep producing.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    industry: "Retail & hospitality · Sussex County",
    metric: "−38%",
    label: "Cost per lead in six months",
    desc: "Wasted spend cut, seasonal beach-market demand mapped properly, and landing pages rewritten around the one action that mattered.",
  },
];

const RankRows: LocalRankRow[] = [
  { city: "Wilmington", keyword: "digital marketing agency", rank: "#1", change: "6" },
  { city: "Dover", keyword: "seo company near me", rank: "#1", change: "4" },
  { city: "Newark", keyword: "google ads management", rank: "#2", change: "9" },
  { city: "Middletown", keyword: "web design company", rank: "#3", change: "2" },
  { city: "Bear", keyword: "local seo services", rank: "#2", change: "5" },
  { city: "Rehoboth Beach", keyword: "marketing agency", rank: "#3", change: "7" },
];

const RankStats = [
  { label: "Cities tracked", value: "6" },
  { label: "Keywords tracked", value: "34" },
  { label: "Average position", value: "2.0" },
];

const CompareThem = [
  "A junior account manager juggling 80 logos",
  "Reports full of impressions, empty of phone calls",
  "Ad spend marked up and hidden inside a retainer",
  "Work quietly offshored the week after you sign",
  "12-month contracts before you see a single lead",
];

const CompareUs = [
  "A dedicated strategist who knows the Delaware market",
  "Reporting tied to calls, forms, and booked revenue",
  "Your ad spend paid straight to Google, never marked up",
  "Everything executed in-house by the team on your calls",
  "Month-to-month — we keep you with results, not paperwork",
];

const ScoreRows = [
  { label: "Local visibility", before: 31, after: 91 },
  { label: "Lead volume", before: 26, after: 84 },
  { label: "Cost per lead", before: 38, after: 88 },
  { label: "Conversion rate", before: 22, after: 76 },
];

const WhyCards = [
  {
    icon: <FiMapPin aria-hidden="true" />,
    title: "We are actually here",
    desc: "Our office is on The Green in Dover. We know how differently a New Castle County trade business and a Sussex County seasonal brand have to be marketed, because we work with both.",
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Fast, Compounding Execution",
    desc: "Foundation fixes ship in the first weeks, not the first quarter. Every month of work stacks on the last, so month twelve is worth far more than month one.",
  },
  {
    icon: <FiBarChart2 aria-hidden="true" />,
    title: "Measured against revenue",
    desc: "You own every account and asset. Every lead is attributed to a channel. If a number dips you hear it from us first, with the fix already moving.",
  },
];

const BannerChecks = [
  "Your Delaware visibility gap, mapped",
  "Wasted ad spend identified",
  "Competitor positions benchmarked",
  "A 90-day growth plan you keep",
];

const AuditRows = [
  { label: "Search & map visibility", flag: "Top 3 target" },
  { label: "Paid efficiency", flag: "Spend audited" },
  { label: "Conversion readiness", flag: "Page-by-page" },
];

const MarqueeItems = [
  "Delaware Digital Marketing",
  "Local SEO",
  "Google Ads",
  "AI Search Visibility",
  "Lead Generation",
  "Conversion Web Design",
  "Social Media",
];

// Centre point of each node, spaced 60° apart on the orbit ellipse (centre
// 50%/50%, semi-axes 37% × 43% — the same figure .deldg-engine-orbit draws, so
// the nodes land on the ring). CSS translates each back by half its own size
// and drops the absolute positioning for a grid below 992px.
const EngineNodes = [
  {
    icon: <FiMapPin aria-hidden="true" />,
    title: "Local SEO & Maps",
    outcome: "Found first",
    tone: "blue",
    left: "50%",
    top: "7%",
  },
  {
    icon: <FiTarget aria-hidden="true" />,
    title: "Google Ads",
    outcome: "Demand on tap",
    tone: "gold",
    left: "82%",
    top: "28.5%",
  },
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "Web & CRO",
    outcome: "Traffic converts",
    tone: "blue",
    left: "82%",
    top: "71.5%",
  },
  {
    icon: <FiSend aria-hidden="true" />,
    title: "Email & Lifecycle",
    outcome: "Repeat revenue",
    tone: "gold",
    left: "50%",
    top: "93%",
  },
  {
    icon: <RiRobot2Line aria-hidden="true" />,
    title: "Content & AI Search",
    outcome: "Cited in answers",
    tone: "blue",
    left: "18%",
    top: "71.5%",
  },
  {
    icon: <FiUsers aria-hidden="true" />,
    title: "Social Media",
    outcome: "Top of mind",
    tone: "gold",
    left: "18%",
    top: "28.5%",
  },
];

const IndustryChips = [
  "Home Services",
  "Healthcare & Dental",
  "Legal & Financial",
  "Real Estate",
  "Retail & Hospitality",
  "Construction & Trades",
  "B2B & Manufacturing",
  "Nonprofits",
];

const GrowCards = [
  {
    href: "/services/google-ads",
    icon: <FiTarget aria-hidden="true" />,
    title: "Google Ads Management",
    desc: "Buy the top of the results page while your organic rankings build underneath it.",
    cta: "See Google Ads",
  },
  {
    href: "/services/web-design",
    icon: <FiLayout aria-hidden="true" />,
    title: "Web Design & Development",
    desc: "A site built to convert the traffic every other channel is working to send you.",
    cta: "See web design",
  },
  {
    href: "/services/philadelphia/digital-marketing",
    icon: <FiMapPin aria-hidden="true" />,
    title: "Digital Marketing in Philadelphia",
    desc: "Same team, same system, right across the state line for the Philadelphia metro.",
    cta: "See Philadelphia",
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
          __html: JSON.stringify(delDigitalFaqJsonLd),
        }}
      />

      <div className="deldg-page">
        <main>
          {/* 1. Hero */}
          <section className="deldg-hero">
            <div className="deldg-container">
              <div className="deldg-hero-grid">
                <div className="deldg-hero-copy">
                  <p className="deldg-eyebrow">
                    Digital Marketing Agency in Delaware
                  </p>
                  <h1 className="deldg-h1">
                    Digital Marketing in Delaware That{" "}
                    <span className="deldg-hl">Drives Real Growth</span>
                  </h1>
                  <p className="deldg-hero-sub">
                    Zonic Media is a Dover-based{" "}
                    <Link href="/" className="deldg-inline-link">
                      digital marketing agency
                    </Link>{" "}
                    helping Delaware businesses turn search, ads, and content
                    into booked calls. Local SEO, Google Ads, social, email, and
                    conversion-first websites — run by one in-house team and
                    reported against leads and revenue instead of impressions.
                  </p>

                  <div
                    className="deldg-hero-badges"
                    aria-label="Partner badges"
                  >
                    {/* Self-hosted Clutch badge — the live iframe embed sits
                        behind a Cloudflare challenge and breaks randomly. */}
                    <a
                      href="https://clutch.co/profile/zonic-media?badge=11431"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Image
                        className="deldg-hero-badge"
                        width={74}
                        height={74}
                        src="/images/clutch-top-company-2026.png"
                        alt="Top Clutch Digital Marketing Company Delaware 2026"
                      />
                    </a>
                    <Image
                      className="deldg-hero-badge"
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
                        className="deldg-hero-badge-trustpilot"
                        width={104}
                        height={50}
                        src="/images/trust-black.png"
                        alt="Zonic Media reviews on Trustpilot"
                      />
                    </a>
                  </div>

                  <div className="deldg-hero-ctas">
                    <HashScrollLink
                      href="#deldg-form"
                      className="deldg-btn"
                      offset={120}
                    >
                      Get Your Free Delaware Marketing Audit
                      <span className="deldg-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="deldg-btn-ghost"
                    >
                      <FiPhoneCall aria-hidden="true" />
                      Call {SITE_CONTACT.phoneDisplay}
                    </a>
                  </div>

                  <div className="deldg-hero-proof">
                    <span className="deldg-stars" aria-hidden="true">
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

                <div className="deldg-hero-visual">
                  <div className="deldg-hero-media">
                    <Image
                      src="/images/delaware/delaware-digital-marketing-hero.webp"
                      alt="Zonic Media strategists reviewing a campaign plan with a Delaware small-business owner"
                      fill
                      preload
                      unoptimized
                      sizes="(max-width: 991px) 460px, 44vw"
                    />
                  </div>

                  <div className="deldg-hero-float deldg-hero-float--a">
                    <span className="deldg-hero-float-icon">
                      <FiTrendingUp aria-hidden="true" />
                    </span>
                    <p>
                      <strong>+212% qualified leads</strong>
                      Home services, New Castle County
                    </p>
                  </div>

                  <div className="deldg-hero-float deldg-hero-float--b">
                    <span className="deldg-hero-float-icon deldg-hero-float-icon--gold">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <p>
                      <strong>#1 in the map pack</strong>
                      &ldquo;near me&rdquo; searches across DE
                    </p>
                  </div>
                </div>
              </div>

              <div className="deldg-hero-stats">
                {HeroStats.map((stat) => (
                  <div className="deldg-stat" key={stat.label}>
                    <span className="deldg-stat-icon">{stat.icon}</span>
                    <div>
                      <p className="deldg-stat-num">{stat.num}</p>
                      <p className="deldg-stat-label">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* 2. The Delaware opportunity */}
          <section className="deldg-about">
            <div className="deldg-container">
              <div className="deldg-about-grid">
                <div className="deldg-collage">
                  <div className="deldg-collage-a">
                    <Image
                      src="/images/delaware/delaware-digital-agency-workstation.webp"
                      alt="Digital marketing agency workstation displaying campaign growth analytics"
                      fill
                      unoptimized
                      sizes="(max-width: 991px) 78vw, 36vw"
                    />
                  </div>
                  <div className="deldg-collage-b">
                    <Image
                      src="/images/delaware/delaware-campaign-dashboard.webp"
                      alt="Campaign performance dashboard with lead and search data on a laptop"
                      fill
                      unoptimized
                      sizes="(max-width: 991px) 58vw, 27vw"
                    />
                  </div>
                  <div className="deldg-collage-badge" aria-hidden="true">
                    <svg viewBox="0 0 120 120">
                      <defs>
                        <path
                          id="deldgBadgeCircle"
                          d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                        />
                      </defs>
                      <text>
                        <textPath href="#deldgBadgeCircle">
                          Delaware Digital Marketing • Zonic Media •
                        </textPath>
                      </text>
                    </svg>
                    <span className="deldg-collage-badge-icon">
                      <FiTrendingUp aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="deldg-about-copy">
                  <p className="deldg-eyebrow">The Delaware Opportunity</p>
                  <h2 className="deldg-h2">
                    Delaware is a Small State.{" "}
                    <span className="deldg-hl-text">
                      The Search Demand is Not.
                    </span>
                  </h2>
                  <p className="deldg-lead">
                    Just under a million people live between Claymont and
                    Fenwick Island, and almost every one of them starts a buying
                    decision the same way — a search on a phone, a glance at the
                    map results, and a call to one of the first three
                    businesses listed. Add the I-95 commuter traffic in New
                    Castle County and the seasonal surge along the Sussex
                    beaches, and the demand sitting in front of a Delaware
                    business is far larger than the population suggests.
                  </p>
                  <p className="deldg-lead">
                    The catch is that most of it goes to whoever shows up first.
                    Our job is to make that you — through{" "}
                    <Link
                      href="/services/local-seo-for-home-services"
                      className="deldg-inline-link"
                    >
                      local SEO
                    </Link>{" "}
                    and a properly built Google Business Profile, paid search
                    that covers the terms worth buying, content that earns
                    citations in AI answers, and pages that actually ask for the
                    call.
                    Every channel tracked, every lead attributed, every month
                    reported in language you can act on.
                  </p>

                  <div className="deldg-checks">
                    {AboutChecks.map((check) => (
                      <div className="deldg-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>

                  <Link href="/about" className="deldg-btn">
                    More About Zonic Media
                    <span className="deldg-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Services */}
          <section className="deldg-services" id="deldg-services">
            <div className="deldg-container">
              <div className="deldg-sec-head">
                <div>
                  <p className="deldg-eyebrow">What We Do</p>
                  <h2 className="deldg-h2">
                    Every Channel a Delaware Business Needs, Under One Roof
                  </h2>
                </div>
                <Link href="/services" className="deldg-link-arrow">
                  View all services <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>

              <div className="deldg-cards">
                {ServiceCards.map((card) => (
                  <article
                    className={`deldg-card deldg-card--${card.tone}`}
                    key={card.title}
                  >
                    <span className="deldg-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <span className="deldg-card-line" aria-hidden="true" />
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Blue band + growth console mockup */}
          <section className="deldg-band">
            <div className="deldg-band-grid">
              <div className="deldg-band-content">
                <p className="deldg-eyebrow">One System, Not Six Invoices</p>
                <h2 className="deldg-h2">
                  Channels That Feed Each Other Instead of Competing for Credit
                </h2>
                <p className="deldg-lead">
                  Most agencies sell channels in isolation, so nobody can tell
                  you which one produced the customer. We run them as one
                  system: paid search finds the terms that convert, those terms
                  shape the content and local SEO plan, reviews and profile
                  activity lift both, and the website turns the traffic all of
                  it generates into tracked inquiries.
                </p>
                <p className="deldg-lead">
                  Everything lands in a single view — the keywords you rank for,
                  the searches you are buying, the calls each channel produced,
                  and what a lead actually cost. If a listing ever gets
                  suspended, our{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="deldg-inline-link"
                  >
                    Google Business Profile reinstatement
                  </Link>{" "}
                  team gets you back on the map fast.
                </p>
                <HashScrollLink
                  href="#deldg-form"
                  className="deldg-btn"
                  offset={120}
                >
                  See Where You Stand Today
                  <span className="deldg-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>

              <div className="deldg-console" aria-hidden="true">
                <div className="deldg-console-head">
                  <h3>Delaware Growth Console</h3>
                  <span className="deldg-console-tag">Last 90 days</span>
                </div>

                <div className="deldg-console-metrics">
                  <div>
                    <strong>418</strong>
                    <span>Tracked leads</span>
                  </div>
                  <div>
                    <strong>$41</strong>
                    <span>Cost per lead</span>
                  </div>
                  <div>
                    <strong>+186%</strong>
                    <span>Vs. last quarter</span>
                  </div>
                </div>

                <p className="deldg-console-sub">Visibility by channel</p>
                <div className="deldg-console-bars">
                  {ChannelBars.map((bar) => (
                    <div className="deldg-console-bar" key={bar.label}>
                      <div className="deldg-console-bar-head">
                        <span>{bar.label}</span>
                        <span>{bar.val}%</span>
                      </div>
                      <div className="deldg-console-track">
                        <span
                          className={`deldg-console-fill deldg-console-fill--${bar.tone}`}
                          style={{ width: `${bar.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="deldg-console-foot">
                  <span className="deldg-console-pill">
                    <FiMapPin />
                    Dover · #1
                  </span>
                  <span className="deldg-console-pill">
                    <FiMapPin />
                    Wilmington · #2
                  </span>
                  <span className="deldg-console-pill">
                    <FaStar />
                    4.9 · 187 reviews
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Process */}
          <section className="deldg-process" id="deldg-process">
            <div className="deldg-container">
              <div className="deldg-sec-head">
                <div>
                  <p className="deldg-eyebrow">How It Works</p>
                  <h2 className="deldg-h2">
                    From Guesswork to a Growth Engine in Four Steps
                  </h2>
                </div>
                <HashScrollLink
                  href="#deldg-form"
                  className="deldg-link-arrow"
                  offset={120}
                >
                  Start with step one <FiArrowUpRight aria-hidden="true" />
                </HashScrollLink>
              </div>

              <div className="deldg-bento">
                <article className="deldg-bento-card deldg-bento-card--s1">
                  <div className="deldg-bento-head">
                    <span className="deldg-bento-num" aria-hidden="true">
                      01
                    </span>
                    <span className="deldg-bento-tag">Week 1</span>
                  </div>
                  <h3>Free Delaware Growth Audit</h3>
                  <p>
                    We map your rankings, Google Business Profile, ad spend,
                    website conversion, and the competitors currently taking the
                    calls you are missing — then show you exactly where the
                    fastest gains are.
                  </p>
                  <div className="deldg-bento-visual" aria-hidden="true">
                    <p className="deldg-bento-visual-title">
                      Where Delaware clients typically land after 90 days
                    </p>
                    {[
                      { label: "Local visibility", val: 91 },
                      { label: "Lead volume", val: 84 },
                      { label: "Conversion rate", val: 76 },
                    ].map((bar) => (
                      <div className="deldg-bento-bar-row" key={bar.label}>
                        <div className="deldg-bento-bar-head">
                          <span>{bar.label}</span>
                          <span>{bar.val}%</span>
                        </div>
                        <div className="deldg-bento-bar-track">
                          <span
                            className="deldg-bento-bar-fill"
                            style={{ width: `${bar.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="deldg-bento-card deldg-bento-card--s2">
                  <div className="deldg-bento-head">
                    <span className="deldg-bento-num" aria-hidden="true">
                      02
                    </span>
                    <span className="deldg-bento-tag">Weeks 2–4</span>
                  </div>
                  <h3>Strategy &amp; Foundation</h3>
                  <p>
                    A channel plan built around your margins, then the
                    groundwork: tracking installed, profile optimized, campaigns
                    restructured, and the pages that convert rewritten first.
                  </p>
                </article>

                <article className="deldg-bento-card deldg-bento-card--s3">
                  <div className="deldg-bento-head">
                    <span className="deldg-bento-num" aria-hidden="true">
                      03
                    </span>
                    <span className="deldg-bento-tag">Every month</span>
                  </div>
                  <h3>Launch, Test, Compound</h3>
                  <p>
                    Campaigns live, content shipping, reviews growing, and
                    budget shifting toward whatever is producing the cheapest
                    qualified lead this month.
                  </p>
                  <div className="deldg-bento-chips">
                    {["Local content", "Ad testing", "Review growth"].map(
                      (chip) => (
                        <span className="deldg-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ),
                    )}
                  </div>
                  <HashScrollLink
                    href="#deldg-form"
                    className="deldg-btn deldg-bento-cta"
                    offset={120}
                  >
                    Start Growing Today
                    <span className="deldg-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </article>

                <article className="deldg-bento-card deldg-bento-card--s4">
                  <div className="deldg-bento-s4-copy">
                    <div className="deldg-bento-head">
                      <span className="deldg-bento-num" aria-hidden="true">
                        04
                      </span>
                      <span className="deldg-bento-tag">Ongoing</span>
                    </div>
                    <h3>Report, Refine, Expand</h3>
                    <p>
                      Monthly reporting tied to calls and booked revenue, not
                      vanity metrics. As the core market locks in, we expand to
                      more services, more cities, and more channels.
                    </p>
                  </div>
                  <div className="deldg-bento-s4-side">
                    <div className="deldg-bento-chips">
                      {[
                        "Plain-English report",
                        "New service lines",
                        "New markets",
                      ].map((chip) => (
                        <span className="deldg-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                    <HashScrollLink
                      href="#deldg-form"
                      className="deldg-link-arrow"
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
          <section className="deldg-results">
            <div className="deldg-container">
              <div className="deldg-sec-head-center">
                <p className="deldg-eyebrow">Real Results</p>
                <h2 className="deldg-h2">
                  What Happens When the Channels Finally Work Together
                </h2>
                <p className="deldg-lead">
                  Three Delaware counties, three very different businesses — the
                  same system we run for our{" "}
                  <Link
                    href="/services/philadelphia/local-seo"
                    className="deldg-inline-link"
                  >
                    Philadelphia local SEO
                  </Link>{" "}
                  clients, executed month after month.
                </p>
              </div>

              <div className="deldg-results-cards">
                {ResultCards.map((card) => (
                  <article className="deldg-result-card" key={card.industry}>
                    <p className="deldg-result-ind">
                      {card.icon}
                      {card.industry}
                    </p>
                    <p className="deldg-result-metric">{card.metric}</p>
                    <p className="deldg-result-label">{card.label}</p>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Local rank tracker band */}
          <section className="deldg-showcase">
            <div className="deldg-container">
              <LocalRankTracker
                prefix="deldg"
                scope="Delaware · last 30 days"
                rows={RankRows}
                summaryPercent={82}
                summaryLabel="Of tracked terms sit in the top three"
                stats={RankStats}
                footnote="An illustrative view of the local rank board every Delaware client gets — the same screen we walk through with you each month."
              />
            </div>
          </section>

          {/* 8. Comparison */}
          <section className="deldg-compare">
            <div className="deldg-container">
              <div className="deldg-sec-head-center">
                <p className="deldg-eyebrow">The Difference</p>
                <h2 className="deldg-h2">
                  Zonic Media Vs. A Typical Marketing Agency
                </h2>
                <p className="deldg-lead">
                  Same monthly invoice, very different month. Here is what
                  working with a local, in-house team actually looks like.
                </p>
              </div>

              <div className="deldg-compare-grid">
                <div className="deldg-compare-col deldg-compare-col--them">
                  <h3>Typical Agency</h3>
                  <p className="deldg-compare-sub">
                    Why most campaigns quietly stall
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

                <div className="deldg-compare-col deldg-compare-col--us">
                  <h3>Digital Marketing with Zonic Media</h3>
                  <p className="deldg-compare-sub">
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
                  className="deldg-compare-col deldg-compare-col--score"
                  aria-hidden="true"
                >
                  <h3>Growth Scorecard</h3>
                  <p className="deldg-compare-sub">
                    A typical Delaware client&apos;s first six months
                  </p>
                  <div className="deldg-score-rows">
                    {ScoreRows.map((row) => (
                      <div key={row.label}>
                        <div className="deldg-score-head">
                          <span>{row.label}</span>
                          <span className="deldg-score-vals">
                            {row.before}% → <strong>{row.after}%</strong>
                          </span>
                        </div>
                        <div className="deldg-score-track">
                          <span
                            className="deldg-score-fill"
                            style={
                              { "--w": `${row.after}%` } as React.CSSProperties
                            }
                          />
                          <span
                            className="deldg-score-before"
                            style={
                              { "--b": `${row.before}%` } as React.CSSProperties
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="deldg-score-legend">
                    <span>
                      <i className="deldg-score-legend-before" />
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
          <section className="deldg-why">
            <div className="deldg-container">
              <div className="deldg-sec-head-center">
                <p className="deldg-eyebrow">Why Zonic Media</p>
                <h2 className="deldg-h2">
                  A Delaware Growth Partner, Not a Monthly Invoice
                </h2>
                <p className="deldg-lead">
                  Rankings and impressions are the output. Strategy, execution,
                  and accountability are what you are actually buying.
                </p>
              </div>

              <div className="deldg-why-cards">
                {WhyCards.map((card) => (
                  <article className="deldg-why-card" key={card.title}>
                    <span className="deldg-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>

              <div className="deldg-why-banner">
                <div className="deldg-why-banner-text">
                  <p className="deldg-eyebrow">Free Delaware Marketing Audit</p>
                  <h3>See Exactly Where Your Growth is Leaking</h3>
                  <p>
                    We audit your search visibility, ad spend, website
                    conversion, and competitors — then hand you a 90-day plan
                    with the numbers behind it. Free, and yours to keep whether
                    or not we work together.
                  </p>
                  <div className="deldg-banner-checks">
                    {BannerChecks.map((check) => (
                      <div className="deldg-banner-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>
                  <HashScrollLink
                    href="#deldg-form"
                    className="deldg-btn"
                    offset={120}
                  >
                    Claim Your Free Audit
                    <span className="deldg-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                <div className="deldg-audit-card" aria-hidden="true">
                  <div className="deldg-audit-head">
                    <h4>Growth Readiness Score</h4>
                    <span className="deldg-audit-tag">After 6 months</span>
                  </div>
                  <div className="deldg-audit-ring-wrap">
                    <div className="deldg-audit-ring">
                      <span>
                        91<small>/100</small>
                      </span>
                    </div>
                    <div className="deldg-audit-ring-info">
                      <strong>Excellent</strong>
                      <small>
                        Where our Delaware campaigns typically land after six
                        months of compounding work
                      </small>
                    </div>
                  </div>
                  {AuditRows.map((row) => (
                    <div className="deldg-audit-row" key={row.label}>
                      <span>{row.label}</span>
                      <span className="deldg-audit-flag">{row.flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 10. Reviews */}
          <section
            className="deldg-reviews"
            aria-labelledby="deldg-reviews-title"
          >
            <div className="deldg-container">
              <div className="deldg-sec-head-center">
                <p className="deldg-eyebrow">Verified Client Reviews</p>
                <h2 className="deldg-h2" id="deldg-reviews-title">
                  Trusted by Small &amp; Mid-Size Businesses Across the US
                </h2>
              </div>
              <div className="deldg-reviews-widget">
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
          <div className="deldg-marquee" aria-hidden="true">
            <div className="deldg-marquee-track">
              {[0, 1].map((copy) => (
                <span className="deldg-marquee-item" key={copy}>
                  {MarqueeItems.map((item) => (
                    <span className="deldg-marquee-item" key={item}>
                      {item} <FaStar aria-hidden="true" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* 12. Growth engine — services hub */}
          <section className="deldg-engine-sec">
            <div className="deldg-container">
              <div className="deldg-sec-head-center">
                <p className="deldg-eyebrow">Everything Working Together</p>
                <h2 className="deldg-h2">
                  Six Services, One Growth Engine
                </h2>
                <p className="deldg-lead">
                  Nothing here runs in a silo. Each service feeds the next, and
                  all six point at the same outcome — more qualified inquiries
                  for your business. We run it the same way from Wilmington and
                  Newark down through Dover and Milford to the Sussex beach
                  markets, and across all three counties in between — plus
                  across the state line for our{" "}
                  <Link
                    href="/services/philadelphia/digital-marketing"
                    className="deldg-inline-link"
                  >
                    digital marketing in Philadelphia
                  </Link>{" "}
                  clients.
                </p>
              </div>

              <div className="deldg-engine">
                <div className="deldg-engine-orbit" aria-hidden="true" />

                <div className="deldg-engine-core">
                  <span className="deldg-engine-core-icon" aria-hidden="true">
                    <FiTrendingUp />
                  </span>
                  <strong>Your Delaware business</strong>
                  <span>One team · one plan · one report</span>
                  <HashScrollLink
                    href="#deldg-form"
                    className="deldg-btn deldg-engine-core-cta"
                    offset={120}
                  >
                    Get Your Free Audit
                    <span className="deldg-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                {EngineNodes.map((node) => (
                  <div
                    className={`deldg-engine-node deldg-engine-node--${node.tone}`}
                    style={
                      {
                        "--l": node.left,
                        "--t": node.top,
                      } as React.CSSProperties
                    }
                    key={node.title}
                  >
                    <span className="deldg-engine-node-icon">{node.icon}</span>
                    <span className="deldg-engine-node-txt">
                      <strong>{node.title}</strong>
                      <small>{node.outcome}</small>
                    </span>
                  </div>
                ))}
              </div>

              <p className="deldg-chips-label">
                Running this engine for Delaware businesses in
              </p>
              <div className="deldg-chips">
                {IndustryChips.map((chip) => (
                  <span className="deldg-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 13. FAQs */}
          <section className="deldg-faqs" id="deldg-faqs">
            <div className="deldg-container">
              <div className="deldg-split-grid">
                <div>
                  <p className="deldg-eyebrow">FAQs</p>
                  <h2 className="deldg-h2">
                    Straight Answers About Digital Marketing in Delaware
                  </h2>
                  <p className="deldg-lead">
                    Pricing, timelines, channel choices, and what actually shows
                    up in the monthly report. If your question is not here, send
                    it through the form — a strategist answers, not a sales
                    script.
                  </p>
                  <div className="deldg-faq-cta">
                    <HashScrollLink
                      href="#deldg-form"
                      className="deldg-btn"
                      offset={120}
                    >
                      Ask About Your Market
                      <span className="deldg-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                  </div>
                </div>
                <div>
                  <GmbFaqs items={DelDigitalFaqs} />
                </div>
              </div>
            </div>
          </section>

          {/* 14. Grow further — internal links */}
          <section className="deldg-grow">
            <div className="deldg-container">
              <div className="deldg-sec-head-center">
                <p className="deldg-eyebrow">Grow Further</p>
                <h2 className="deldg-h2">
                  Visibility is Step One. Here is What Multiplies It.
                </h2>
              </div>
              <div className="deldg-grow-cards">
                {GrowCards.map((card) => (
                  <Link
                    href={card.href}
                    className="deldg-grow-card"
                    key={card.href}
                  >
                    <span className="deldg-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <span className="deldg-grow-link">
                      {card.cta} <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 15. Lead form */}
          <section className="deldg-form-sec" id="deldg-form">
            <div className="deldg-container">
              <div className="deldg-form-grid">
                <aside className="deldg-form-aside">
                  <p className="deldg-eyebrow">Get Started</p>
                  <h2 className="deldg-h2">
                    Claim Your Free Delaware Marketing Audit
                  </h2>
                  <p className="deldg-lead">
                    Tell us about your business and we will send back a full
                    audit — search visibility, ad spend, website conversion, and
                    competitor positions — plus a flat-price plan for the next
                    90 days.
                  </p>

                  <div className="deldg-form-contacts">
                    <a
                      href={SITE_CONTACT.emailHref}
                      className="deldg-form-contact"
                    >
                      <span className="deldg-form-contact-icon">
                        <FiMail aria-hidden="true" />
                      </span>
                      <span className="deldg-form-contact-txt">
                        <small>Email us anytime</small>
                        <strong>{SITE_CONTACT.email}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="deldg-form-contact"
                    >
                      <span className="deldg-form-contact-icon">
                        <FiPhoneCall aria-hidden="true" />
                      </span>
                      <span className="deldg-form-contact-txt">
                        <small>Speak with a strategist</small>
                        <strong>{SITE_CONTACT.phoneDisplay}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deldg-form-contact"
                    >
                      <span className="deldg-form-contact-icon">
                        <FiMapPin aria-hidden="true" />
                      </span>
                      <span className="deldg-form-contact-txt">
                        <small>Visit our Dover office</small>
                        <strong>{SITE_CONTACT.address}</strong>
                      </span>
                    </a>
                    <div className="deldg-form-contact deldg-form-contact--static">
                      <span className="deldg-form-contact-icon">
                        <FiMessageCircle aria-hidden="true" />
                      </span>
                      <span className="deldg-form-contact-txt">
                        <small>Prefer to chat?</small>
                        <strong>
                          Use the chat bubble — a real strategist replies
                        </strong>
                      </span>
                    </div>
                  </div>
                </aside>

                <div className="deldg-form-main">
                  <ServiceLeadForm
                    formType="delaware-digital-marketing"
                    badge="Free Audit"
                    title="Get your free Delaware marketing audit"
                    subtitle="No contracts, no pressure — just a clear picture of where your business stands and what it takes to win your market."
                    submitText="Send My Free Audit"
                    messageLabel="Tell us about your business"
                    messagePlaceholder="Your services, the areas you cover, and what you'd like to improve"
                    defaultServices={["Local SEO", "Pay Per Click (PPC)"]}
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
