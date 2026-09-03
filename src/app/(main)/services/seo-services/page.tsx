/*
 * SEO SERVICES — generic head-term page (Aug 2026 plan, Content Gaps tab),
 * rebuilt on the approved local-SEO niche template (TseoLanding /
 * templateSeo.css, .tseo-page) so it renders identically to the HVAC,
 * roofing and plumber industry pages. Targets the 60,500/mo "seo services"
 * cluster + near-me variants. Leads submit as "Local SEO" (whitelisted).
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
  FiLink2,
  FiPhoneCall,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/seo-services";

export const metadata: Metadata = {
  title: { absolute: "SEO Services for Small Business | Affordable SEO Company USA" },
  description:
    "Affordable SEO services for small businesses from a US SEO company: technical SEO, local SEO, Google Business Profile, content and links.",
  keywords: [
    "seo services for small business",
    "affordable seo services for small businesses",
    "best seo companies for small business",
    "search engine optimization services for small business",
    "seo company for small business near me",
    "best seo companies for small business in usa",
    "low cost seo services for small business",
    "how much does seo cost for a small business",
    "seo services packages for small business",
    "seo services near me",
    "seo company near me",
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
    title: "SEO Services for Small Business | Affordable SEO Company USA",
    description:
      "Full-stack SEO services for small and local businesses — local SEO, GBP, on-page, content and links, reported in calls and revenue.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "SEO Services", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
  serviceType: "Search Engine Optimization",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Full-stack SEO services for small and local businesses: technical SEO, local SEO, Google Business Profile management, content and link building — reported in calls and revenue.",
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
    name: "Small and local businesses across the United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Technical SEO" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO & Google Business Profile Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "On-Page SEO & Content" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Link Building" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Rank Tracking & Reporting" },
      },
    ],
  },
};

const SeoServicesFaqs = [
  {
    question: "What is included in your SEO services?",
    answer:
      "The full stack, run as one program: technical SEO (crawlability, indexing, Core Web Vitals, structured data), local SEO and Google Business Profile management, on-page optimization, content written to rank and convert, real link building, and a plain-English monthly report tied to rankings, traffic, calls and form fills.",
  },
  {
    question: "How much do SEO services cost?",
    answer:
      "For small and local businesses, credible SEO typically runs from a few hundred dollars a month for a single-location local program to several thousand for competitive metros or multi-location brands. We quote a flat price after a free audit so the number reflects your actual market, not a rate card.",
  },
  {
    question: "How do I choose between SEO companies near me?",
    answer:
      "Ask three things: will they show you exactly what they did each month, do they have proof in your industry, and do they report business outcomes — calls and leads — rather than only rankings? An agency that fails any of the three will waste your budget regardless of where it is located.",
  },
  {
    question: "How long until SEO produces results?",
    answer:
      "Google Business Profile and Map Pack improvements often show inside 4–8 weeks. Competitive organic keywords typically take 3–6 months. Anyone promising page one in two weeks is selling something other than SEO.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. Engagements are month-to-month after the initial scope. SEO compounds, so most clients stay — but they stay because the reports keep earning it, not because a contract forces them.",
  },
  {
    question: "Is local SEO or national SEO right for my business?",
    answer:
      "If your customers come from a service area or walk through a door, local SEO drives the revenue — Map Pack rankings, 'near me' searches, and your Google Business Profile. National SEO fits e-commerce and software. The free audit tells you which mix your market actually rewards.",
  },
  {
    question: "Can you handle a suspended Google Business Profile?",
    answer:
      "Yes — GBP reinstatement is one of our flagship services, with 700+ suspensions handled. If your profile is down, that is the first thing to fix; no amount of website SEO replaces a live profile.",
  },
  {
    question: "What makes Zonic Media different from other SEO agencies?",
    answer:
      "We specialise in local service businesses, we run everything in-house with nothing outsourced, and we report in calls and booked jobs. And because Google Business Profile work is our flagship — 1,500+ profiles optimized — the highest-leverage local signals get expert attention, not an intern's checklist.",
  },
  {
    question: "Is SEO still worth it for a small business now that Google shows AI Overviews?",
    answer:
      "Yes, and the data says it is more important, not less. Roughly three quarters of the pages Google cites in AI Overviews already rank in the top ten, and AI Mode leans heavily on Google Business Profile data. So the businesses that rank well organically are the ones AI answers recommend. Our SEO program includes the answer-first content and structured data that AI engines cite, so you are visible in both the classic results and the AI answer.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: SeoServicesFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const data: TseoLandingData = {
  hero: {
    eyebrow: "SEO Services",
    h1Start: "SEO Services That Turn Rankings Into",
    h1Highlight: "Revenue",
    sub: (
      <>
        We&apos;ve helped 50+ local and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="tseo-inline-link"
        >
          home-service businesses
        </Link>{" "}
        climb into the Google map pack and grow. Zonic Media runs the full SEO
        stack — technical SEO, local SEO, Google Business Profile, content and
        links — as one program, by one in-house team, reported in calls and
        booked jobs instead of vanity charts.
      </>
    ),
    cta: "Get Your Free SEO Audit",
    dash: {
      title: "SEO Performance",
      mapQuery: "seo services near me",
      youLabel: "Your Business",
      competitorA: "Competitor Agency Pick A",
      competitorB: "Competitor Agency Pick B",
      competitorC: "Competitor Agency Pick C",
      chartLabel: "Calls from search",
      afterNum: "284",
      afterDelta: "+212%",
      beforeNum: "38",
      beforeRank: "#14",
      afterFoot: { a: "Map pack rank", b: "Google rating", c: "Direction requests" },
      beforeFoot: { a: "Map pack rank", b: "Google rating", c: "Direction requests" },
    },
    floatA: { strong: "#1 in the Map Pack", text: "for your money keywords" },
    floatB: { strong: "+32 reviews", text: "this quarter" },
    stats: [
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
    ],
  },
  problem: {
    eyebrow: "The Search Opportunity",
    h2Start: "Your Customers are Searching Right Now.",
    h2Highlight: "We Make Sure They Find You.",
    leads: [
      <>
        Every day, people in your market type exactly what you sell into
        Google — &ldquo;seo services near me&rdquo;, your service plus your
        town — and call one of the first businesses they see. That is the
        highest-intent channel your business has, and it is exactly the
        channel most of your competitors have never properly worked.
      </>,
      <>
        SEO only works as a system: a blog post cannot save a slow site, and
        links cannot fix pages that target nothing. Our program runs the whole
        stack — a fully optimized{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="tseo-inline-link"
        >
          Google Business Profile
        </Link>
        , clean technical foundations, keyword-mapped pages, steady reviews
        and real links — every signal Google rewards, done properly and done
        monthly.
      </>,
    ],
    checks: [
      "Full-stack SEO strategy",
      "Profile fully optimized",
      "Technical foundation fixed",
      "Reviews growing weekly",
    ],
    gbp: {
      name: "Your Business",
      category: "Local business",
      rows: [
        { label: "Profile views", value: "+180%" },
        { label: "Calls from profile", value: "+212%" },
        { label: "Website clicks", value: "+3×" },
      ],
      chip: "Trusted by 50+ local businesses",
    },
  },
  services: {
    eyebrow: "What's Included",
    h2: "Full-Stack SEO Services, Run as One System",
    cards: [
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Technical SEO",
        desc: "Crawlability, indexing, Core Web Vitals and structured data — the foundation fixes that make every other SEO dollar work harder.",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Local SEO & Google Business Profile",
        desc: (
          <>
            Map Pack rankings, citations, reviews and profile management — the
            same system behind our{" "}
            <Link
              href="/local-seo-google-business-optimization"
              className="tseo-inline-link"
            >
              GBP optimization service
            </Link>
            , which decides most local rankings.
          </>
        ),
      },
      {
        icon: <FiSearch aria-hidden="true" />,
        title: "Keyword & Competitor Research",
        desc: "We map what your customers actually type — market by market — and audit who currently owns those results, then build the plan that takes those positions off them.",
      },
      {
        icon: <FiFileText aria-hidden="true" />,
        title: "On-Page SEO & Content",
        desc: (
          <>
            Keyword mapping, titles, heading structure, internal links, and
            service pages written to rank and convert — backed by
            conversion-first{" "}
            <Link href="/services/web-design" className="tseo-inline-link">
              website design
            </Link>{" "}
            when the site itself is the bottleneck.
          </>
        ),
      },
      {
        icon: <FiLink2 aria-hidden="true" />,
        title: "Link Building That Compounds",
        desc: "Real placements from relevant sources — no networks, no bought junk — so your authority builds instead of risking a penalty.",
      },
      {
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Tracking & Monthly Reporting",
        desc: "Rankings, traffic, calls and form fills in one plain-English report. You always know what we did, what moved, and what is next.",
      },
    ],
  },
  band: {
    eyebrow: "The Map Pack Is The Market",
    h2: "An SEO Company Near You — Wherever You Are",
    leads: [
      <>
        When people search &ldquo;seo services near me&rdquo; they usually
        mean an agency that understands their local market — not necessarily
        one on the same street. We are headquartered in Dover, Delaware and
        run campaigns in all 50 states, with dedicated market pages for{" "}
        <Link href="/services/delaware/seo" className="tseo-inline-link">
          Delaware
        </Link>
        ,{" "}
        <Link
          href="/services/philadelphia/local-seo"
          className="tseo-inline-link"
        >
          Philadelphia
        </Link>{" "}
        and{" "}
        <Link href="/services/nyc/local-seo" className="tseo-inline-link">
          New York City
        </Link>
        .
      </>,
      <>
        Because most of our clients are local service businesses, near-me
        search behavior is precisely the thing we optimize every day. And if a
        listing ever gets suspended, our{" "}
        <Link
          href="/services/gmb-reinstatement-help"
          className="tseo-inline-link"
        >
          Google Business Profile reinstatement
        </Link>{" "}
        team gets you back on the map fast.
      </>,
    ],
    cta: "See Where You Rank Today",
    mappack: {
      query: "seo services near me",
      youName: "Your Business",
      youMeta: "4.9 (187) · Local business ·",
      rowB: { name: "Competitor Business A", meta: "4.6 (98) · Local business" },
      rowC: { name: "Competitor Business B", meta: "4.4 (61) · Local business" },
    },
  },
  process: {
    h2: "From Audit to Rankings in Four Steps",
    steps: [
      {
        tag: "Week 1",
        title: "Free SEO Audit",
        desc: "Rankings, competitors, technical health and your Google Business Profile — we show you exactly where the customers you are missing are going instead.",
      },
      {
        tag: "Weeks 2–4",
        title: "Strategy & Foundation Fixes",
        desc: (
          <>
            A keyword-mapped plan for your services and markets, then the
            foundation work: technical fixes, profile optimization,{" "}
            <Link
              href="/services/gmb-verification-help"
              className="tseo-inline-link"
            >
              GBP verification support
            </Link>{" "}
            where a listing needs it, and on-page cleanup.
          </>
        ),
      },
      {
        tag: "Every month",
        title: "Build Authority Every Month",
        desc: "Content, links, review growth, and profile activity — the compounding signals that move you up the rankings and keep you there.",
        chips: ["Content that ranks", "Review growth", "Real links"],
      },
      {
        tag: "Ongoing",
        title: "Report, Refine, Expand",
        desc: "Monthly reporting tied to calls and leads, not vanity metrics. As rankings lock in, we expand to more services and more markets.",
        chips: ["Plain-English report", "New markets", "New services"],
      },
    ],
    visualTitle: "Where clients typically land after 90 days",
    visualBars: [
      { label: "Technical health", val: 94 },
      { label: "Profile strength", val: 92 },
      { label: "Review velocity", val: 80 },
    ],
    ctaPrimary: "Start Growing Today",
  },
  results: {
    h2: "What Happens When SEO is Done Properly",
    lead: (
      <>
        Different industries, different markets — the same system, executed
        month after month, often paired with{" "}
        <Link
          href="/services/local-seo-packages"
          className="tseo-inline-link"
        >
          a package scoped to the market
        </Link>
        .
      </>
    ),
    cards: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        industry: "Home Services",
        metric: "+212%",
        label: "Calls from Google Business Profile",
        desc: "From page-two invisibility to top-three map pack rankings for 'near me' searches across every service city within one quarter.",
      },
      {
        icon: <RiSearchLine aria-hidden="true" />,
        industry: "Healthcare Practice",
        metric: "Top 3",
        label: "Map pack for every core keyword",
        desc: "A profile rebuild, citation cleanup, and review growth took the practice from #11 to the top three in a heavily contested category.",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        industry: "Multi-Location Brand",
        metric: "3.2×",
        label: "More leads from organic search",
        desc: "Location pages and per-market keyword maps turned scattered visibility into a steady, attributable lead pipeline.",
      },
    ],
  },
  compare: {
    h2: "What You Get with Zonic Vs. A Typical SEO Agency",
    lead: (
      <>
        SEO for local businesses is all we do, and it shows. Here is exactly
        what working with a dedicated team looks like.
      </>
    ),
    themTitle: "Typical SEO Agency",
    themSub: "Why most SEO campaigns quietly stall",
    them: [
      "Set-and-forget checklists, updated quarterly at best",
      "Reports full of impressions, empty of phone calls",
      "Offshore link packages and duplicate citations",
      "One account manager for 80 clients",
      "12-month contracts before you see a single lead",
    ],
    usTitle: "SEO Services with Zonic Media",
    usSub: "Built to compound, reported like a P&L",
    us: [
      "Full stack worked monthly — technical, local, content, links",
      "Reporting tied to calls, form fills, and booked jobs",
      "Hand-built citations and real links that compound",
      "A dedicated strategist who knows your market",
      "Month-to-month — we keep you with results, not paperwork",
    ],
    scoreSub: "A typical client's first six months",
    scoreRows: [
      { label: "Technical health", before: 38, after: 94 },
      { label: "Profile strength", before: 34, after: 92 },
      { label: "Review velocity", before: 22, after: 80 },
      { label: "Map pack visibility", before: 18, after: 84 },
    ],
  },
  tracking: {
    h2Start: "Watch Your Rankings and Reviews Climb,",
    h2Highlight: "Month over Month",
    leads: [
      <>
        No black box. Every campaign comes with live rank tracking for the
        keywords that pay you, review growth monitoring, and call tracking
        from your profile — all rolled into one plain-English monthly report.
      </>,
      <>
        If a number moves, you know why. If a number stalls, you know what we
        are doing about it.
      </>,
    ],
    cta: "Get a Sample Report",
    rankRows: [
      { kw: "your service near me", pos: "#1", delta: "▲ 5" },
      { kw: "your service [city]", pos: "#2", delta: "▲ 7" },
      { kw: "best [service] company", pos: "#3", delta: "▲ 8" },
      { kw: "[service] cost", pos: "#4", delta: "▲ 6" },
    ],
  },
  why: {
    h2: "An SEO Partner, Not a Monthly Invoice",
    lead: "Rankings are the output. The inputs are strategy, execution, and accountability — and that is what you are actually buying.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Local Businesses are All We Do",
        desc: "We are not a generalist agency dabbling in local. Local rankings, local calls, and booked jobs for service businesses is the entire practice.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Fast, Compounding Execution",
        desc: "Foundation fixes ship in the first weeks, not the first quarter. Every month of technical, content and link work stacks on the last.",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Transparent to a Fault",
        desc: "You own every account and asset. You see every change in the monthly report. If a number dips, you hear it from us first — with the fix already moving.",
      },
    ],
    banner: {
      eyebrow: "Free SEO Audit",
      h3: "See Exactly How We'll Grow Your Rankings",
      p: "We'll map your technical health, profile, citations, reviews, and rankings — and show you the clear path to the top three for the searches that matter in your market. Free, and yours to keep either way.",
      checks: [
        "Your ranking growth plan",
        "Technical fixes prioritized",
        "Profile wins ready to unlock",
        "Review growth roadmap",
      ],
      cta: "Claim Your Free Audit",
      auditDesc:
        "Where our SEO campaigns typically land after six months of compounding work",
      auditScore: "92",
      auditRows: [
        { label: "Google Business Profile", flag: "A+ grade" },
        { label: "Technical health", flag: "94/100" },
        { label: "Review velocity", flag: "Ahead of top 3" },
      ],
    },
  },
  marquee: [
    "SEO Services",
    "Technical SEO",
    "Local SEO",
    "Google Business Profile",
    "Content That Ranks",
    "Link Building",
    "Map Pack Rankings",
  ],
  nationwide: {
    h2: "SEO Services for Businesses in Every Market in the US",
    lead: (
      <>
        From single-location shops to multi-location brands, we run SEO
        campaigns in every state. Everything happens remotely — audits,
        strategy calls, reporting — so you get the same process whether you
        are in Delaware, Texas, or California.
      </>
    ),
    chips: [
      "Home Services",
      "Healthcare & Dental",
      "Legal & Financial",
      "Real Estate",
      "Restaurants & Retail",
      "Auto & Repair",
      "Salons & Wellness",
      "Trades & Contractors",
    ],
  },
  faqs: {
    h2: "Straight Answers About SEO Services",
    lead: (
      <>
        Pricing, timelines, contracts, and how to pick between SEO companies —
        plus where{" "}
        <Link href="/services/google-ads" className="tseo-inline-link">
          Google Ads
        </Link>{" "}
        fits alongside SEO. If your question is not here, send it through the
        form — a strategist answers, not a sales script.
      </>
    ),
    cta: "Ask About Your Market",
    items: SeoServicesFaqs,
  },
  grow: {
    h2: "Rankings are Step One. Here is What Multiplies Them.",
    cards: [
      {
        href: "/services/local-seo-packages",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Local SEO Packages",
        desc: "Three flat-scope plans with concrete monthly deliverables — see what each tier includes.",
        cta: "See the packages",
      },
      {
        href: "/local-seo-google-business-optimization",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile Optimization",
        desc: "Most local buyers pick straight from the map pack. We optimize your profile so that pick is you.",
        cta: "Optimize your profile",
      },
      {
        href: "/services/google-ads",
        icon: <FiTrendingUp aria-hidden="true" />,
        title: "Google Ads Management",
        desc: "Pair organic rankings with paid coverage and own the whole results page while SEO compounds.",
        cta: "See Google Ads",
      },
    ],
  },
  form: {
    h2: "Claim Your Free SEO Audit",
    lead: "Send us your website and we will return a prioritized SEO plan — what is broken, what to fix first, and what it should cost. Yours to keep whether or not you hire us.",
    formType: "seo-services",
    badge: "Free Audit",
    title: "Get Your Free SEO Audit",
    subtitle:
      "No contracts, no pressure — just a clear picture of where you stand and what it takes to win your market.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your website, your market, and what you'd like to improve",
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
