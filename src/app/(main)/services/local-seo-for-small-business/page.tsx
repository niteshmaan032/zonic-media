/*
 * LOCAL SEO FOR SMALL BUSINESS — (Aug 2026 plan, Content Gaps tab), rebuilt
 * on the approved local-SEO niche template (TseoLanding / templateSeo.css,
 * .tseo-page) so it renders identically to the HVAC, roofing and plumber
 * industry pages. Targets "local seo services for small business" (2,400/mo),
 * "local business seo services" (1,900/mo), "seo services for local
 * business" (1,300/mo). Leads submit as "Local SEO" (whitelisted).
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

const PAGE_PATH = "/services/local-seo-for-small-business";

export const metadata: Metadata = {
  title: { absolute: "Local SEO Services for Small Business | Zonic Media" },
  description:
    "Local SEO services for small businesses: Google Business Profile, Map Pack rankings, reviews and local content — priced for small business budgets. Free audit.",
  keywords: [
    "local seo services for small business",
    "local business seo services",
    "seo services for local business",
    "local seo services for businesses",
    "local business seo company",
    "small business local seo",
    "affordable local seo services",
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
    title: "Local SEO Services for Small Business | Zonic Media",
    description:
      "Local SEO services for small businesses: GBP, Map Pack rankings, reviews and local content — priced for small business budgets.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Local SEO for Small Business", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO for Small Business",
  serviceType: "Local Search Engine Optimization",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Local SEO services for small businesses: Google Business Profile optimization, reviews, local content and citations — deep work on the few signals that decide local rankings, priced for small business budgets.",
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
    name: "Single-location and owner-operated small businesses",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Small Business Local SEO Services",
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
        itemOffered: { "@type": "Service", name: "Review Generation & Management" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Citation Cleanup" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Location & Service Pages" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Local Link Building" },
      },
    ],
  },
};

const SmallBizFaqs = [
  {
    question: "How much should a small business spend on local SEO?",
    answer:
      "For a single location in a typical market, effective local SEO runs a few hundred dollars a month. Below that, the work gets too thin to move rankings; far above it, you are usually paying for reporting theater. The free audit tells you where your market actually sits.",
  },
  {
    question: "What is included in local SEO services for small business?",
    answer:
      "Google Business Profile optimization (categories, services, photos, posts, Q&A), review generation and response management, location and service pages targeting the searches your customers make, citation cleanup so your name, address and phone match everywhere, local link building, and a monthly report in plain English.",
  },
  {
    question: "How is this different from your home-services SEO program?",
    answer:
      "Home-services SEO is built for service-area businesses that travel to customers across multiple towns. This program is for location-based small businesses — storefronts, practices, restaurants, studios — where one address and its surrounding radius decide everything.",
  },
  {
    question: "Can I do local SEO myself?",
    answer:
      "The basics, yes — claim your profile, add photos, answer reviews. What is hard to do yourself is the consistent monthly compounding: content, citations, review velocity and technical upkeep. Many clients start with us after six months of DIY plateau.",
  },
  {
    question: "How fast will my small business see results?",
    answer:
      "Map Pack movement typically shows in 4–8 weeks; organic rankings in 3–6 months. Businesses with an unclaimed or messy Google Business Profile often see the fastest early gains, because the foundation fixes are immediate.",
  },
  {
    question: "Why do small businesses get burned by big-agency SEO?",
    answer:
      "Most SEO services for local business are enterprise programs shrunk until the price fits — thin work spread across a big checklist. A small business needs the opposite: deep work on the few signals that decide local rankings. One optimized profile with fifty fresh reviews beats a hundred directory submissions every time.",
  },
  {
    question: "Do you require contracts?",
    answer:
      "No — engagements are month-to-month after the initial scope. If your market is easy enough that you could do this yourself with a checklist, the audit will tell you that too.",
  },
  {
    question: "Why choose Zonic Media as your local business SEO company?",
    answer:
      "We specialise in exactly this: 1,500+ Google Business Profiles optimized, everything run in-house, and every month you get the list of changes we made, dated, with the reason for each. Rankings, calls and direction requests are tracked against a baseline — so 'is this working?' always has a number for an answer.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: SmallBizFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const data: TseoLandingData = {
  hero: {
    eyebrow: "Local SEO for Small Business",
    h1Start: "Small Business Local SEO That",
    h1Highlight: "Makes the Phone Ring",
    sub: (
      <>
        We&apos;ve helped 50+ local and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="tseo-inline-link"
        >
          home-service businesses
        </Link>{" "}
        climb into the Google map pack and grow. Zonic Media runs local SEO
        for single-location shops, practices and studios — the three signals
        that actually decide who gets the call: your Google Business Profile,
        your reviews, and location-targeted pages on a fast website.
      </>
    ),
    cta: "Get Your Free Local SEO Audit",
    dash: {
      title: "Small Business Local SEO Performance",
      mapQuery: "best [your business] near me",
      youLabel: "Your Business",
      competitorA: "Competitor Down the Street",
      competitorB: "Competitor Across Town",
      competitorC: "Competitor Franchise",
      chartLabel: "Calls from local search",
      afterNum: "216",
      afterDelta: "+187%",
      beforeNum: "34",
      beforeRank: "#12",
      afterFoot: { a: "Map pack rank", b: "Google rating", c: "Direction requests" },
      beforeFoot: { a: "Map pack rank", b: "Google rating", c: "Direction requests" },
    },
    floatA: { strong: "#1 in the Map Pack", text: "in your neighborhood" },
    floatB: { strong: "+32 reviews", text: "this quarter" },
    stats: [
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "50+",
        label: "Local & small businesses ranked",
      },
      {
        icon: <FaStar aria-hidden="true" />,
        num: "4.9/5",
        label: "Average client rating on Clutch",
      },
      {
        icon: <FiClock aria-hidden="true" />,
        num: "4–8 wks",
        label: "To first Map Pack movement",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        num: "100%",
        label: "In-house work — nothing outsourced",
      },
    ],
  },
  problem: {
    eyebrow: "The Local Growth Opportunity",
    h2Start: "Your Neighborhood is Searching.",
    h2Highlight: "We Make Sure They Choose You.",
    leads: [
      <>
        When someone nearby needs what you sell, they search, glance at the
        top three businesses on the map, and pick one — usually in under a
        minute. For a small business, that map decision is the whole game:
        the winners get the calls and walk-ins, and everyone below competes
        for leftovers.
      </>,
      <>
        Most local SEO sold to small businesses is an enterprise program
        shrunk until the price fits — thin work spread across a big
        checklist. We do the opposite: deep work on the few signals that
        decide local rankings. One optimized{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="tseo-inline-link"
        >
          Google Business Profile
        </Link>{" "}
        with fifty fresh reviews beats a hundred directory submissions every
        time, and our program is weighted accordingly.
      </>,
    ],
    checks: [
      "Profile worked weekly",
      "Reviews growing steadily",
      "Citations cleaned & built",
      "Location pages that rank",
    ],
    gbp: {
      name: "Your Business",
      category: "Local business",
      rows: [
        { label: "Profile views", value: "+164%" },
        { label: "Calls from profile", value: "+187%" },
        { label: "Direction requests", value: "+2.4×" },
      ],
      chip: "Trusted by 50+ local businesses",
    },
  },
  services: {
    eyebrow: "What's Included",
    h2: "Everything a Small Business's Rankings Need, in One System",
    cards: [
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile, Worked Weekly",
        desc: (
          <>
            Categories, services, photos, posts and Q&amp;A — the single
            highest-leverage asset a small business has in local search,
            maintained with the same system behind our{" "}
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
        title: "Review Generation & Responses",
        desc: "A steady stream of real reviews from real customers, with responses that keep velocity up — because when customers compare three businesses on their phone, review count and recency break the tie.",
      },
      {
        icon: <FiSearch aria-hidden="true" />,
        title: "Neighborhood Keyword Research",
        desc: "We map what your neighborhood actually types — your service, your town, 'near me' — and audit who currently owns those results, then take those positions off them.",
      },
      {
        icon: <FiLink2 aria-hidden="true" />,
        title: "Citation Cleanup & Consistency",
        desc: "Your name, address and phone matching everywhere Google cross-checks — the quiet consistency signal most DIY efforts miss, fixed once and kept synced.",
      },
      {
        icon: <FiFileText aria-hidden="true" />,
        title: "Location & Service Pages",
        desc: (
          <>
            Pages targeting the searches your customers make, on a fast site —
            backed by conversion-first{" "}
            <Link href="/services/web-design" className="tseo-inline-link">
              website design
            </Link>{" "}
            when the site itself is the bottleneck.
          </>
        ),
      },
      {
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Tracking & Monthly Reporting",
        desc: "Rankings, calls and direction requests tracked against a baseline from before we started — so 'is this working?' always has a number for an answer.",
      },
    ],
  },
  band: {
    eyebrow: "The Map Pack Is The Market",
    h2: "We Put Your Business in the Top Three — And Keep It There",
    leads: [
      <>
        The map pack gets the majority of clicks and nearly all of the calls
        and walk-ins, and that is exactly where we specialize. Every campaign
        is built around one goal: earning your business those top spots for
        the services that pay you best, then strengthening them month after
        month.
      </>,
      <>
        We work the signals Google actually rewards: proximity, relevance,
        and prominence. A fully built-out profile tells Google exactly what
        you do, consistent citations confirm you are who you say you are, and
        a steady flow of reviews proves customers rate you. And if a listing
        ever gets suspended, our{" "}
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
      query: "best [your business] near me",
      youName: "Your Business",
      youMeta: "4.9 (187) · Local business ·",
      rowB: { name: "Competitor Down the Street", meta: "4.6 (98) · Local business" },
      rowC: { name: "Competitor Franchise", meta: "4.4 (61) · Local business" },
    },
  },
  process: {
    h2: "From Invisible to Unavoidable in Four Steps",
    steps: [
      {
        tag: "Week 1",
        title: "Free Small Business SEO Audit",
        desc: "We grade your Google Business Profile, your reviews and your site against the three competitors who outrank you — and send the plan either way.",
      },
      {
        tag: "Weeks 2–4",
        title: "Strategy & Foundation Fixes",
        desc: (
          <>
            A keyword plan for your services and neighborhood, then the
            foundation work: profile optimization,{" "}
            <Link
              href="/services/gmb-verification-help"
              className="tseo-inline-link"
            >
              GBP verification support
            </Link>{" "}
            where a listing needs it, citation cleanup, and on-page fixes.
          </>
        ),
      },
      {
        tag: "Every month",
        title: "Compound the Signals",
        desc: "Review growth, local content, citations and profile activity — deep work on the few signals that decide local rankings, done consistently.",
        chips: ["Review velocity", "Local content", "Profile activity"],
      },
      {
        tag: "Ongoing",
        title: "Report, Refine, Expand",
        desc: "Monthly reporting tied to calls and direction requests, not vanity metrics. Every change dated and explained — if a month is quiet, the report says so.",
        chips: ["Plain-English report", "Honest months", "New services"],
      },
    ],
    visualTitle: "Where small-business clients typically land after 90 days",
    visualBars: [
      { label: "Profile strength", val: 92 },
      { label: "Citation accuracy", val: 96 },
      { label: "Review velocity", val: 82 },
    ],
    ctaPrimary: "Start Growing Today",
  },
  results: {
    h2: "What Happens When Small Business SEO is Done Properly",
    lead: (
      <>
        Different storefronts, different neighborhoods — the same system,
        executed month after month, scoped through our{" "}
        <Link href="/services/local-seo-packages" className="tseo-inline-link">
          local SEO packages
        </Link>
        .
      </>
    ),
    cards: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        industry: "Neighborhood Practice",
        metric: "+187%",
        label: "Calls from Google Business Profile",
        desc: "An unclaimed, half-empty profile rebuilt into the neighborhood's top result — with the fastest gains landing in the first eight weeks.",
      },
      {
        icon: <RiSearchLine aria-hidden="true" />,
        industry: "Local Storefront",
        metric: "Top 3",
        label: "Map pack for every core search",
        desc: "Citation cleanup and steady review growth took the shop from invisible to the top three for its money searches — without a single ad dollar.",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        industry: "Owner-Operated Studio",
        metric: "2.4×",
        label: "More bookings from local search",
        desc: "Location pages plus weekly profile activity turned walk-by awareness into a steady stream of booked appointments.",
      },
    ],
  },
  compare: {
    h2: "What You Get with Zonic Vs. A Typical SEO Agency",
    lead: (
      <>
        Local SEO for small businesses is all we do, and it shows. Here is
        exactly what working with a dedicated local team looks like.
      </>
    ),
    themTitle: "Typical SEO Agency",
    themSub: "Why most small-business campaigns quietly stall",
    them: [
      "Enterprise checklists shrunk until the price fits",
      "Reports full of impressions, empty of phone calls",
      "A hundred directory submissions instead of real signals",
      "One account manager for 80 clients",
      "12-month contracts before you see a single lead",
    ],
    usTitle: "Small Business SEO with Zonic Media",
    usSub: "Deep work on the signals that decide rankings",
    us: [
      "Profile worked weekly — posts, photos, Q&A, categories",
      "Reporting tied to calls, direction requests, and bookings",
      "Review velocity treated as the tiebreaker it is",
      "A dedicated strategist who knows your neighborhood",
      "Month-to-month — we keep you with results, not paperwork",
    ],
    scoreSub: "A typical small-business client's first six months",
    scoreRows: [
      { label: "Profile strength", before: 28, after: 92 },
      { label: "Citation accuracy", before: 39, after: 96 },
      { label: "Review velocity", before: 18, after: 82 },
      { label: "Map pack visibility", before: 15, after: 83 },
    ],
  },
  tracking: {
    h2Start: "Watch Your Rankings and Reviews Climb,",
    h2Highlight: "Month over Month",
    leads: [
      <>
        No black box. Every campaign comes with live rank tracking for the
        searches that pay you, review growth monitoring, and call tracking
        from your profile — all rolled into one plain-English monthly report.
      </>,
      <>
        Every change we make is dated and explained. If a number moves, you
        know why. If a month is quiet, the report says so — we would rather
        keep your trust than decorate a chart.
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
    h2: "A Local SEO Partner, Not a Monthly Invoice",
    lead: "Rankings are the output. The inputs are strategy, execution, and accountability — and that is what you are actually buying.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Small Local Businesses are the Practice",
        desc: "We are not a generalist agency dabbling in maps. Local rankings, local calls, and booked customers for small businesses is what we do every day.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Fast Foundation Wins",
        desc: "Businesses with an unclaimed or messy profile often see gains in the first 4–8 weeks, because the foundation fixes are immediate — then the compounding work takes over.",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Transparent to a Fault",
        desc: "You own every account and asset. You see every change in the monthly report, dated and explained. If a number dips, you hear it from us first.",
      },
    ],
    banner: {
      eyebrow: "Free Small Business SEO Audit",
      h3: "See Exactly How We'll Grow Your Local Rankings",
      p: "We'll grade your profile, citations, reviews, and rankings against the three competitors who outrank you — and show you the clear path to the top three for the searches that matter in your neighborhood. Free, and yours to keep either way.",
      checks: [
        "Your Map Pack growth plan",
        "Profile wins ready to unlock",
        "Citation opportunities mapped",
        "Review growth roadmap",
      ],
      cta: "Claim Your Free Audit",
      auditDesc:
        "Where our small-business campaigns typically land after six months of compounding work",
      auditScore: "91",
      auditRows: [
        { label: "Google Business Profile", flag: "A+ grade" },
        { label: "Citations & listings", flag: "100% accurate" },
        { label: "Review velocity", flag: "Ahead of top 3" },
      ],
    },
  },
  marquee: [
    "Small Business Local SEO",
    "Google Business Profile",
    "Map Pack Rankings",
    "Review Growth",
    "Storefronts",
    "Practices",
    "Restaurants",
    "Studios",
  ],
  nationwide: {
    h2: "Local SEO for Small Businesses in Every Market in the US",
    lead: (
      <>
        Storefronts, practices, restaurants, salons, studios and shops — we
        run local SEO campaigns in every state. Everything happens remotely —
        audits, strategy calls, reporting — so you get the same process
        whether you are in Delaware, Texas, or California.
      </>
    ),
    chips: [
      "Restaurants & Cafés",
      "Salons & Med Spas",
      "Medical & Dental",
      "Law & Accounting",
      "Fitness Studios",
      "Auto Shops",
      "Retail Storefronts",
      "Local Franchises",
    ],
  },
  faqs: {
    h2: "Straight Answers About Small Business Local SEO",
    lead: (
      <>
        Budgets, timelines, DIY vs. hiring, and what actually moves a small
        business up the map — plus how this differs from our{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="tseo-inline-link"
        >
          home-services program
        </Link>
        . If your question is not here, send it through the form — a
        strategist answers, not a sales script.
      </>
    ),
    cta: "Ask About Your Neighborhood",
    items: SmallBizFaqs,
  },
  grow: {
    h2: "Rankings are Step One. Here is What Multiplies Them.",
    cards: [
      {
        href: "/services/local-seo-packages",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Local SEO Packages",
        desc: "Three flat-scope plans with concrete monthly deliverables — see which tier fits your market.",
        cta: "See the packages",
      },
      {
        href: "/local-seo-google-business-optimization",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile Optimization",
        desc: "Most customers pick straight from the map pack. We optimize your profile so that pick is you.",
        cta: "Optimize your profile",
      },
      {
        href: "/services/seo-services",
        icon: <FiTrendingUp aria-hidden="true" />,
        title: "Full-Stack SEO Services",
        desc: "Ready for more than local? Technical, content and links on top of the local foundation.",
        cta: "See SEO services",
      },
    ],
  },
  form: {
    h2: "Claim Your Free Small Business SEO Audit",
    lead: "Tell us about your business and we will grade your profile, reviews and site against the competitors who outrank you — plus a flat-price plan to take the top spot in your neighborhood.",
    formType: "local-seo-small-business",
    badge: "Free Audit",
    title: "Get Your Free Small Business SEO Audit",
    subtitle:
      "No contracts, no pressure — just a clear picture of where you rank today and what it takes to win your neighborhood.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder: "What kind of business do you run, and where?",
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
