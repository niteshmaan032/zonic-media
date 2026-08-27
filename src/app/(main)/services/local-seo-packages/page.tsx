/*
 * LOCAL SEO PACKAGES — pricing page (Aug 2026 plan, Content Gaps tab),
 * rebuilt on the approved local-SEO niche template (TseoLanding /
 * templateSeo.css, .tseo-page) with its optional pricing-tier section, so it
 * renders identically to the HVAC, roofing and plumber industry pages.
 * Targets "local seo packages" (4,400/mo), "local seo package" (1,900/mo),
 * "affordable local seo services" (2,900/mo).
 *
 * Tier prices are the team-drafted $750/$1350/$2000 numbers (from the
 * commented-out pricing block in local-seo-for-home-services), shown as
 * "starting at" with the audit-based quote as the source of truth.
 */

import type { Metadata } from "next";
import Link from "next/link";
import TseoLanding, {
  type TseoLandingData,
} from "@/app/components/TseoLanding";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import { FaStar } from "react-icons/fa";
import {
  FiClock,
  FiFileText,
  FiLayers,
  FiPhoneCall,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/local-seo-packages";

export const metadata: Metadata = {
  title: { absolute: "Local SEO Packages — Plans, Deliverables & Pricing" },
  description:
    "Three local SEO packages with concrete monthly deliverables — Google Business Profile, reviews, content and links. Affordable, flat-scope pricing quoted after a free audit.",
  keywords: [
    "local seo packages",
    "local seo package",
    "affordable local seo services",
    "local seo pricing",
    "local seo plans",
    "cheap local seo packages",
    "small business seo packages",
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
    title: "Local SEO Packages — Plans, Deliverables & Pricing",
    description:
      "Three local SEO packages with concrete monthly deliverables. Flat-scope pricing quoted after a free audit.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Local SEO Packages", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Packages",
  serviceType: "Local Search Engine Optimization",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Tiered local SEO packages — Google Business Profile optimization, reviews, content and link building with flat-scope monthly pricing quoted after a free audit.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Small businesses, multi-location brands and franchises",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Local SEO Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Starter Local SEO Plan" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Growth Local SEO Plan" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Dominate Local SEO Plan" },
      },
    ],
  },
};

const PackagesFaqs = [
  {
    question: "What does a local SEO package cost?",
    answer:
      "Starter engagements begin around $750 per month; Growth and Dominate scale with competition and location count. Every price is a flat monthly quote issued after a free audit — the audit tells us how contested your market is, and the quote you receive is the price you pay. No surprise invoices, no hourly true-ups.",
  },
  {
    question: "Are cheap local SEO packages worth it?",
    answer:
      "Usually not — $99-style packages fund about an hour of real work a month, which cannot move rankings in any contested market. If your market genuinely needs very little, our audit will say so, and we would rather tell you that than sell you a package you don't need.",
  },
  {
    question: "Which package do I need?",
    answer:
      "Single location in a lighter market: Starter. Single location in a contested market, or real growth goals: Growth. Multiple locations or a major metro like Philadelphia or NYC: Dominate. The free audit confirms the fit before you commit to anything.",
  },
  {
    question: "Can I switch tiers later?",
    answer:
      "Yes, at any month boundary. A common path is Starter for the foundation quarter, then Growth once the profile and site fundamentals are earning — the audit report maps that sequence for your market.",
  },
  {
    question: "Is there a contract?",
    answer:
      "Month-to-month after the initial scope. Local SEO compounds, so results build with time — but you stay because the monthly report keeps proving the spend, not because paperwork traps you.",
  },
  {
    question: "What's in the monthly report?",
    answer:
      "Every change we made, dated, with the reason for each — plus rankings, calls, direction requests and form fills tracked against your pre-engagement baseline. If a month is quiet, the report says so.",
  },
  {
    question: "Do the packages include Google Business Profile work?",
    answer:
      "Yes — GBP optimization is the core of every tier, because it is the single highest-leverage asset in local search. We have optimized 1,500+ profiles, and suspension recovery is available if your listing ever goes down.",
  },
  {
    question: "Why is pricing quoted after an audit instead of published exactly?",
    answer:
      "Because market competition is the biggest cost driver in local SEO, and one-size-fits-all prices would be wrong for half the people reading them. Affordable local SEO in a small Delaware town and affordable local SEO in a crowded metro are different jobs. The audit prices your actual market — free, with no obligation.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PackagesFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const data: TseoLandingData = {
  hero: {
    eyebrow: "Local SEO Packages & Pricing",
    h1Start: "Local SEO Packages With",
    h1Highlight: "Deliverables You Can Read",
    sub: (
      <>
        Every local SEO package we sell is a flat monthly scope: you see the
        deliverables before you pay, and the price is quoted after a free
        audit of your market — because affordable local SEO in a small
        Delaware town and{" "}
        <Link
          href="/services/local-seo-for-small-business"
          className="tseo-inline-link"
        >
          affordable local SEO
        </Link>{" "}
        in a crowded metro are different jobs. Three tiers cover almost every
        small business; anything unusual gets a custom scope.
      </>
    ),
    cta: "Get Your Free Audit & Quote",
    dash: {
      title: "What a Package Buys You",
      mapQuery: "best [your business] near me",
      youLabel: "Your Business",
      competitorA: "Competitor Business A",
      competitorB: "Competitor Business B",
      competitorC: "Competitor Business C",
      chartLabel: "Calls from local search",
      afterNum: "248",
      afterDelta: "+196%",
      beforeNum: "36",
      beforeRank: "#13",
      afterFoot: { a: "Map pack rank", b: "Google rating", c: "Direction requests" },
      beforeFoot: { a: "Map pack rank", b: "Google rating", c: "Direction requests" },
    },
    floatA: { strong: "Flat monthly scope", text: "no hourly true-ups" },
    floatB: { strong: "Month-to-month", text: "cancel anytime" },
    stats: [
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "3",
        label: "Tiers covering almost every small business",
      },
      {
        icon: <FaStar aria-hidden="true" />,
        num: "4.9/5",
        label: "Average client rating on Clutch",
      },
      {
        icon: <FiClock aria-hidden="true" />,
        num: "$750+",
        label: "Starter engagements begin per month",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        num: "0",
        label: "Long-term contracts — ever",
      },
    ],
  },
  problem: {
    eyebrow: "Priced by Your Market, Not a Rate Card",
    h2Start: "Affordable Local SEO is Scoped,",
    h2Highlight: "Not Discounted.",
    leads: [
      <>
        Market competition is the biggest cost driver in local SEO, so we do
        not publish one-size-fits-all prices that would be wrong for half the
        people reading them. Instead, the free audit establishes what your
        market requires, and you get a flat monthly quote per tier — the
        quote you receive is the price you pay.
      </>,
      <>
        Every tier runs on the same engine:{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="tseo-inline-link"
        >
          Google Business Profile optimization
        </Link>
        , reviews, content and links — scaled to your market, never thinned
        to hit a price. $99-style packages fund about an hour of real work a
        month; if your market genuinely needs very little, the audit will say
        so instead of selling you a package you don&apos;t need.
      </>,
    ],
    checks: [
      "Deliverables listed, never vague",
      "Flat quote after a free audit",
      "Month-to-month terms",
      "Every tier includes reporting",
    ],
    gbp: {
      name: "Your Business",
      category: "Local business",
      rows: [
        { label: "Profile views", value: "+172%" },
        { label: "Calls from profile", value: "+196%" },
        { label: "Direction requests", value: "+2.6×" },
      ],
      chip: "Trusted by 50+ local businesses",
    },
  },
  services: {
    eyebrow: "The Engine Inside Every Tier",
    h2: "What Every Local SEO Package Runs On",
    cards: [
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile Optimization",
        desc: (
          <>
            The single highest-leverage asset in local search — categories,
            services, photos, posts and Q&amp;A, run with the system behind
            our{" "}
            <Link
              href="/local-seo-google-business-optimization"
              className="tseo-inline-link"
            >
              GBP optimization service
            </Link>
            .
          </>
        ),
      },
      {
        icon: <FiStar aria-hidden="true" />,
        title: "Review Growth & Reputation",
        desc: "A steady stream of real reviews with managed responses — because review count and recency are the tiebreakers when customers compare three businesses on their phone.",
      },
      {
        icon: <FiFileText aria-hidden="true" />,
        title: "Content & Location Pages",
        desc: "Service and location pages written to rank and convert, targeting the searches your customers actually make — added monthly from the Growth tier up.",
      },
      {
        icon: <FiLayers aria-hidden="true" />,
        title: "Citations & Listings",
        desc: "Name, address and phone matching everywhere Google cross-checks — audited and cleaned in Starter, kept synced in every tier above.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Local Link Building",
        desc: "Real placements from relevant local sources — chambers, local press, community organizations — never networks or bought junk.",
      },
      {
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Tracking & Monthly Reporting",
        desc: "Rankings, calls, direction requests and form fills tracked against your pre-engagement baseline — every change dated and explained.",
      },
    ],
  },
  pricing: {
    eyebrow: "The Three Tiers",
    h2: "Pick the Scope. The Audit Confirms the Fit.",
    lead: (
      <>
        Prices shown are where each tier starts; your flat quote reflects your
        market&apos;s actual competition. Not sure which tier?{" "}
        <Link href="#tseo-form" className="tseo-inline-link">
          The free audit decides
        </Link>{" "}
        — honestly.
      </>
    ),
    tiers: [
      {
        num: "01",
        kicker: "Local Foundation",
        name: "Starter",
        price: "$750",
        priceNote: "/ month, starting at",
        subtitle:
          "For single-location businesses in lighter markets — get the local foundation right.",
        features: [
          "Google Business Profile optimization",
          "Local keyword targeting",
          "On-page fixes for key pages",
          "Citation audit & cleanup",
          "Review strategy setup",
          "Rank tracking & monthly report",
        ],
        cta: "Choose Starter",
      },
      {
        num: "02",
        kicker: "Compounding Growth",
        name: "Growth",
        price: "$1,350",
        priceNote: "/ month, starting at",
        subtitle:
          "Everything in Starter plus the monthly work that builds rankings you keep.",
        features: [
          "Everything in Starter",
          "Monthly service & location pages",
          "Active review generation",
          "GBP posts & Q&A every month",
          "Local link building",
          "Competitor tracking & reviews",
        ],
        cta: "Choose Growth",
        featured: true,
      },
      {
        num: "03",
        kicker: "Market Expansion",
        name: "Dominate",
        price: "$2,000",
        priceNote: "/ month, starting at",
        subtitle:
          "For multi-location brands and crowded metros like Wilmington, Philly or NYC.",
        features: [
          "Everything in Growth, per location",
          "Location-page architecture",
          "Technical SEO & schema sitewide",
          "Digital PR & authority links",
          "Landing-page conversion work",
          "Call tracking by location",
        ],
        cta: "Choose Dominate",
      },
    ],
    note: "Prices shown are where each tier starts — your flat quote reflects your market's actual competition, confirmed by the free audit. Month-to-month, no lock-in.",
  },
  band: {
    eyebrow: "The Map Pack Is The Market",
    h2: "Every Tier Aims at the Same Target: the Top Three",
    leads: [
      <>
        The map pack gets the majority of clicks and nearly all of the calls,
        and that is what every package is built to win. The tiers differ in
        how much compounding work ships each month — content, links, reviews,
        locations — not in the quality of the work itself.
      </>,
      <>
        We work the signals Google actually rewards: proximity, relevance,
        and prominence. And if a listing ever gets suspended, our{" "}
        <Link
          href="/services/gmb-reinstatement-help"
          className="tseo-inline-link"
        >
          Google Business Profile reinstatement
        </Link>{" "}
        team gets you back on the map fast — 700+ recoveries handled.
      </>,
    ],
    cta: "Get Your Tier Recommendation",
    mappack: {
      query: "best [your business] near me",
      youName: "Your Business",
      youMeta: "4.9 (187) · Local business ·",
      rowB: { name: "Competitor Business A", meta: "4.6 (98) · Local business" },
      rowC: { name: "Competitor Business B", meta: "4.4 (61) · Local business" },
    },
  },
  process: {
    h2: "From Audit to Quote in Four Steps",
    steps: [
      {
        tag: "Week 1",
        title: "Free Market Audit",
        desc: "We grade your market's difficulty — your competitors, their reviews, their content — and your current profile, citations and site.",
      },
      {
        tag: "Days later",
        title: "Honest Tier Recommendation",
        desc: "The audit comes back with the tier we would honestly recommend, its exact monthly price, and the first 90 days of deliverables.",
      },
      {
        tag: "Month 1",
        title: "Foundation Quarter",
        desc: "Profile optimization, citation cleanup and on-page fixes ship first — the fast wins that make every later dollar work harder.",
        chips: ["Profile rebuilt", "Citations cleaned", "On-page fixed"],
      },
      {
        tag: "Ongoing",
        title: "Compound and Prove It",
        desc: "Content, links and reviews stack month over month, and the report proves the spend — that is what keeps clients, not paperwork.",
        chips: ["Plain-English report", "Tier upgrades anytime", "No lock-in"],
      },
    ],
    visualTitle: "Where package clients typically land after 90 days",
    visualBars: [
      { label: "Profile strength", val: 92 },
      { label: "Citation accuracy", val: 96 },
      { label: "Review velocity", val: 80 },
    ],
    ctaPrimary: "Start With the Audit",
  },
  results: {
    h2: "What the Packages Produce, Tier by Tier",
    lead: (
      <>
        Different tiers, different markets — the same engine, scoped to what
        each market actually requires.
      </>
    ),
    cards: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        industry: "Starter · Single Location",
        metric: "+164%",
        label: "Calls after the foundation quarter",
        desc: "A never-optimized profile rebuilt, citations cleaned, and reviews restarted — the fast wins that a lighter market rewards immediately.",
      },
      {
        icon: <RiSearchLine aria-hidden="true" />,
        industry: "Growth · Contested Market",
        metric: "Top 3",
        label: "Map pack for every core search",
        desc: "Monthly content, links and review velocity pushed the business past entrenched competitors inside two quarters.",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        industry: "Dominate · Multi-Location",
        metric: "3.1×",
        label: "More leads across all locations",
        desc: "Location-page architecture and per-market keyword maps turned scattered visibility into attributable, per-location lead flow.",
      },
    ],
  },
  compare: {
    h2: "Zonic's Packages Vs. Typical SEO Packages",
    lead: (
      <>
        The word &ldquo;package&rdquo; hides a lot of thin work in this
        industry. Here is exactly how ours differ.
      </>
    ),
    themTitle: "Typical SEO Package",
    themSub: "Why cheap packages quietly fail",
    them: [
      "$99–$299 tiers funding an hour of real work",
      "Same checklist for every market and industry",
      "Directory submissions dressed up as strategy",
      "Reports full of impressions, empty of calls",
      "12-month contracts before you see a lead",
    ],
    usTitle: "Local SEO Packages with Zonic Media",
    usSub: "Scoped to the market, proven monthly",
    us: [
      "Flat quote priced by your market's real difficulty",
      "Deliverables listed before you pay a dollar",
      "GBP, reviews, content and links — the signals that rank",
      "Reporting tied to calls, directions, and bookings",
      "Month-to-month — results keep you, not paperwork",
    ],
    scoreSub: "A typical Growth-tier client's first six months",
    scoreRows: [
      { label: "Profile strength", before: 31, after: 92 },
      { label: "Citation accuracy", before: 40, after: 96 },
      { label: "Review velocity", before: 20, after: 80 },
      { label: "Map pack visibility", before: 16, after: 85 },
    ],
  },
  tracking: {
    h2Start: "Every Package Proves Itself,",
    h2Highlight: "Month over Month",
    leads: [
      <>
        No black box at any tier. Live rank tracking for the searches that
        pay you, review growth monitoring, and call tracking from your
        profile — rolled into one plain-English monthly report.
      </>,
      <>
        Every change is dated and explained. If a month is quiet, the report
        says so — we would rather keep your trust than decorate a chart.
      </>,
    ],
    cta: "Get a Sample Report",
    rankRows: [
      { kw: "[your business] near me", pos: "#1", delta: "▲ 6" },
      { kw: "best [service] [town]", pos: "#2", delta: "▲ 8" },
      { kw: "[service] open now", pos: "#1", delta: "▲ 4" },
      { kw: "[service] prices", pos: "#3", delta: "▲ 7" },
    ],
  },
  why: {
    h2: "A Package That Behaves Like a Partner",
    lead: "The tier is the pricing; the work is the product. Strategy, execution, and accountability come standard at every level.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Honest Tiering",
        desc: "The audit recommends the tier your market actually needs — including 'less than you expected' when that is the truth. We would rather under-sell than churn you.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Upgrade When It's Earned",
        desc: "Start on Starter, move to Growth when the foundation is producing — tier changes happen at any month boundary, mapped in the audit report.",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Transparent to a Fault",
        desc: "You own every account and asset. You see every change in the monthly report. If a number dips, you hear it from us first — with the fix already moving.",
      },
    ],
    banner: {
      eyebrow: "Free Audit & Package Quote",
      h3: "Get the Tier Your Market Actually Needs",
      p: "The free audit grades your market's difficulty and comes back with the tier we would honestly recommend, its exact monthly price, and the first 90 days of deliverables — yours to keep whether or not you hire us.",
      checks: [
        "Market difficulty graded",
        "Honest tier recommendation",
        "Exact flat monthly price",
        "First 90 days of deliverables",
      ],
      cta: "Claim Your Free Quote",
      auditDesc:
        "Where our package clients typically land after six months of compounding work",
      auditScore: "91",
      auditRows: [
        { label: "Google Business Profile", flag: "A+ grade" },
        { label: "Citations & listings", flag: "100% accurate" },
        { label: "Review velocity", flag: "Ahead of top 3" },
      ],
    },
  },
  marquee: [
    "Local SEO Packages",
    "Starter Plan",
    "Growth Plan",
    "Dominate Plan",
    "Google Business Profile",
    "Review Growth",
    "Flat Pricing",
    "No Lock-In",
  ],
  nationwide: {
    h2: "Local SEO Packages for Every Market in the US",
    lead: (
      <>
        The tiers scale from a single-location shop in a small town to
        multi-location brands in major metros. Everything happens remotely —
        audits, strategy calls, reporting — so you get the same process
        whether you are in Delaware, Texas, or California.
      </>
    ),
    chips: [
      "Home Services",
      "Healthcare & Dental",
      "Legal & Financial",
      "Restaurants & Retail",
      "Salons & Wellness",
      "Auto & Repair",
      "Multi-Location Brands",
      "Franchises",
    ],
  },
  faqs: {
    h2: "Straight Answers About Local SEO Packages",
    lead: (
      <>
        Costs, tiers, contracts, and why cheap packages fail — plus how the
        packages power our{" "}
        <Link
          href="/services/local-seo-for-small-business"
          className="tseo-inline-link"
        >
          small business
        </Link>{" "}
        and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="tseo-inline-link"
        >
          home services
        </Link>{" "}
        programs. If your question is not here, send it through the form — a
        strategist answers, not a sales script.
      </>
    ),
    cta: "Ask About Your Market",
    items: PackagesFaqs,
  },
  grow: {
    h2: "See the Work Behind the Packages",
    cards: [
      {
        href: "/local-seo-google-business-optimization",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile Optimization",
        desc: "The Map Pack engine inside every tier — profile, reviews, posts and Q&A.",
        cta: "See the engine",
      },
      {
        href: "/services/local-seo-for-small-business",
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Local SEO for Small Business",
        desc: "How the program fits single-location storefronts, practices and studios.",
        cta: "See the program",
      },
      {
        href: "/services/seo-services",
        icon: <FiTrendingUp aria-hidden="true" />,
        title: "Full-Stack SEO Services",
        desc: "The complete stack beyond local — technical, content and links.",
        cta: "See SEO services",
      },
    ],
  },
  form: {
    h2: "Claim Your Free Audit & Package Quote",
    lead: "Tell us about your business and we will grade your market's difficulty, recommend the honest tier, and send its exact flat monthly price with the first 90 days of deliverables.",
    formType: "local-seo-packages",
    badge: "Free Quote",
    title: "Get Your Package Quote",
    subtitle:
      "Free audit first — then a flat price for the tier your market needs. No contracts, no pressure.",
    submitText: "Get My Quote",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your business, your market, and how many locations you run",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <TseoLanding data={data} />
    </>
  );
}

export default Page;
