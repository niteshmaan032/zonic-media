/*
 * DELAWARE SEO — the #1 content gap in the Aug 2026 SEO plan, built on the
 * shared location landing system (PhlLocationLanding / philaLanding.css — a
 * port of the approved Delaware layout) so it renders identically to
 * /services/delaware/digital-marketing and the Philadelphia pages.
 *
 * Primary keyword "seo company delaware" (590/mo); highest competitor-traffic
 * term "seo service company delaware" (164/mo captured). Every top-5
 * competitor ranks an exact-match Delaware-SEO URL.
 */

import type { Metadata } from "next";
import Link from "next/link";
import PhlLocationLanding, {
  type PhlLandingData,
} from "@/app/components/PhlLocationLanding";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  SITE_URL,
} from "@/shared/seoSchemas";
import { FaStar } from "react-icons/fa";
import {
  FiBarChart2,
  FiClock,
  FiFileText,
  FiLayout,
  FiLink2,
  FiMapPin,
  FiPhoneCall,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/delaware/seo";

export const metadata: Metadata = {
  title: { absolute: "SEO Company in Delaware | Affordable SEO Services, Dover DE" },
  description:
    "Delaware SEO company headquartered in Dover: affordable local SEO, Google Business Profile and content programs for businesses in Wilmington, Dover.",
  keywords: [
    "seo company delaware",
    "seo services delaware",
    "affordable seo company in delaware",
    "best seo company in delaware",
    "seo service company delaware",
    "seo services delaware county",
    "local seo company delaware",
    "seo company dover de",
    "seo company wilmington de",
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
    title: "SEO Company in Delaware | Affordable SEO Services, Dover DE",
    description:
      "Delaware SEO service company headquartered in Dover. Local SEO, GBP and content programs for businesses across the state. Free audit.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Delaware SEO", url: PAGE_PATH },
]);

const professionalServiceJsonLd = buildLocalBusinessJsonLd({
  pageUrl: PAGE_PATH,
  areaServed: { type: "State", name: "Delaware" },
});

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services in Delaware",
  serviceType: "Search Engine Optimization",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Local SEO, Google Business Profile optimization and content marketing for Delaware businesses, from a Dover-headquartered SEO company serving Wilmington, Newark, Dover, and Sussex County.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
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
  areaServed: { "@type": "State", name: "Delaware" },
  audience: {
    "@type": "BusinessAudience",
    name: "Businesses across New Castle, Kent and Sussex County, Delaware",
  },
};

const DelSeoFaqs = [
  {
    question: "How much does SEO cost in Delaware?",
    answer:
      "Most Delaware small businesses invest between a few hundred and a few thousand dollars per month depending on competition and scope — Wilmington and New Castle County cost more to win than Kent or Sussex County. We quote a flat monthly price after a free audit, so you know the exact cost before committing, with no long-term lock-in.",
  },
  {
    question: "How long does SEO take to work for a Delaware business?",
    answer:
      "Google Business Profile improvements often move Map Pack visibility within 4–8 weeks. Organic rankings for competitive terms like 'seo company delaware' or Wilmington service keywords typically take 3–6 months of consistent work. We set milestone expectations in the audit and report against them monthly.",
  },
  {
    question: "Do you only work with businesses in Dover?",
    answer:
      "No — we work across all three counties: Wilmington, Newark and New Castle County; Dover, Smyrna and Kent County; and Lewes, Rehoboth, Seaford, Millsboro and the rest of Sussex County. We also run campaigns for Delaware businesses serving the Philadelphia and Maryland border markets.",
  },
  {
    question: "What makes Zonic different from other SEO companies in Delaware?",
    answer:
      "Three things: we are physically headquartered at 8 The Green in Dover with a verifiable Delaware footprint; we specialise in Google Business Profile work — 1,500+ profiles optimized, including suspension recovery most agencies cannot handle; and we report on calls and booked jobs, not just keyword positions.",
  },
  {
    question: "Can you combine SEO with a website redesign?",
    answer:
      "Yes — and it is usually cheaper together. As a combined Delaware SEO and web design agency, we build the new site on an SEO-ready architecture from day one, so you avoid paying twice: once for a design and again for an agency to fix its search problems. See our Delaware web design service for the build side.",
  },
  {
    question: "Do you offer one-time SEO projects or only monthly plans?",
    answer:
      "Both. Technical cleanups, migrations and Google Business Profile rescues can run as fixed-price projects. Ongoing rankings work — content, links, reviews — is monthly, because that is how search actually compounds. Our local SEO packages page shows what each tier includes.",
  },
  {
    question: "Does seasonal beach traffic change SEO strategy in Sussex County?",
    answer:
      "Significantly. Lewes, Rehoboth and the coastal towns see search demand swing with the season, so we front-load content and profile work ahead of the summer surge and shift targeting toward year-round resident services in the off-season. It is one of the clearest examples of why a Delaware-based team outperforms a national rate card.",
  },
  {
    question: "Do you guarantee first-page rankings in Delaware?",
    answer:
      "Our track record speaks for itself — most Delaware clients reach top-three Map Pack positions for their core terms. Because Google's results change daily, no honest agency promises a fixed position; we guarantee what we control: full transparency. You see exactly where you rank, what improved, and what we did each month.",
  },
  {
    question: "How do I choose the best SEO company in Delaware?",
    answer:
      "Ask for three things: local proof, meaning Delaware clients you can call; monthly reports that show calls and leads, not just rankings; and a plan built for your town, because Wilmington, Dover and the beach towns have very different competition. Zonic Media is physically in Dover, publishes its Clutch reviews, and quotes a flat monthly price after a free audit of your current rankings.",
  },
];

const delSeoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: DelSeoFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const data: PhlLandingData = {
  hero: {
    eyebrow: "SEO Company in Delaware",
    h1Start: "The Delaware SEO Company That's",
    h1Highlight: "Actually in Delaware",
    sub: (
      <>
        Zonic Media is an SEO service company headquartered on the Dover Green
        — not an out-of-state agency with a Delaware landing page. We run
        local SEO, Google Business Profile optimization and content programs
        for Delaware businesses from Wilmington and Newark down to Lewes and
        Rehoboth Beach, and we report results in calls and booked jobs, not
        just rankings.
      </>
    ),
    media: {
      src: "/images/geo/delaware-seo/delaware-seo-strategy.jpg",
      alt: "Delaware business owner reviewing local SEO rankings with a strategist near Dover Green",
    },
    floatA: {
      strong: "8 The Green, Dover",
      text: "a registered Delaware company",
    },
    floatB: { strong: "Top Clutch DE", text: "digital marketing company 2026" },
    stats: [
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
        num: "1,500+",
        label: "Google profiles optimized",
      },
    ],
    proof: "by the Delaware businesses we rank",
    cta: "Get Your Free Delaware SEO Audit",
  },
  about: {
    eyebrow: "The Delaware Opportunity",
    h2Start: "Three Counties, Three Different Markets.",
    h2Highlight: "One SEO Plan Doesn't Fit All.",
    leads: [
      <>
        In New Castle County we compete for high-volume Wilmington and Newark
        terms against Philadelphia-metro agencies spilling across the state
        line. In Kent County we win service-area searches around Dover. In
        Sussex County — Lewes, Rehoboth, Seaford, Millsboro — seasonal and
        tourism-driven search patterns change what we target and when. Our
        SEO services in Delaware are scoped county by county, because that is
        how the demand actually behaves.
      </>,
      <>
        And because we are based here, the local signals Google weighs — a
        real Delaware address, Delaware reviews, Delaware citations — are
        already working in your favor the day you hire us. Pair it with the
        full{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware digital marketing program
        </Link>{" "}
        when you want ads and content in the same plan.
      </>,
    ],
    checks: [
      "County-scoped keyword strategy",
      "Profile fully optimized",
      "Delaware citations built",
      "Reviews growing weekly",
    ],
    collageA: {
      src: "/images/geo/delaware-seo/delaware-main-street-storefront.jpg",
      alt: "Independent storefront on a tree-lined Delaware main street",
    },
    collageB: {
      src: "/images/geo/delaware-seo/delaware-local-rankings-dashboard.jpg",
      alt: "Local search map rankings and visibility dashboard on a laptop",
    },
    badgeText: "Delaware SEO Company • Zonic Media •",
  },
  services: {
    eyebrow: "What's Included",
    h2: "SEO Services in Delaware, Built Around Local Intent",
    cards: [
      {
        tone: "blue",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile Optimization",
        desc: (
          <>
            Most searches that matter to a Delaware business carry local
            intent — &ldquo;near me&rdquo;, a town name, a service plus a
            county. We optimize your profile and website together with the
            same system behind our{" "}
            <Link
              href="/local-seo-google-business-optimization"
              className="phl-inline-link"
            >
              GBP optimization service
            </Link>
            , so you show up in the Map Pack and organic results for the same
            search.
          </>
        ),
      },
      {
        tone: "gold",
        icon: <FiSearch aria-hidden="true" />,
        title: "Delaware Keyword & Competitor Research",
        desc: "We map what your customers actually type — town by town, from Wilmington to Seaford — and audit who currently owns those results, then build the plan that takes those positions off them.",
      },
      {
        tone: "blue",
        icon: <FiLink2 aria-hidden="true" />,
        title: "Citations & Local Link Building",
        desc: "Consistent name, address, and phone across every directory Google cross-checks, plus links from real Delaware sources — local press, chambers, and business organizations that anchor you to the state.",
      },
      {
        tone: "gold",
        icon: <FiStar aria-hidden="true" />,
        title: "Review Growth & Reputation",
        desc: "A steady stream of real reviews from Delaware customers, with responses that show Google — and the next person comparing three businesses — that somebody is home.",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "SEO + Web Design, One Team",
        desc: (
          <>
            Rankings die on slow, dated websites. As a combined Delaware SEO
            and{" "}
            <Link
              href="/services/delaware/web-design"
              className="phl-inline-link"
            >
              web design agency
            </Link>
            , we fix both sides: conversion-focused pages that pass Core Web
            Vitals, built on an architecture search engines can rank.
          </>
        ),
      },
      {
        tone: "gold",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Tracking & Monthly Reporting",
        desc: "Rankings, calls, direction requests, and form fills in one plain-English report. You always know what we did, what moved, and what is next.",
      },
    ],
  },
  band: {
    eyebrow: "Local Signals Win Local Rankings",
    h2: "Why Delaware Businesses Pick a Local SEO Expert",
    leads: [
      <>
        National agencies treat Delaware as a checkbox. A local SEO expert
        knows that &ldquo;seo lewes&rdquo; and &ldquo;seo company wilmington
        delaware&rdquo; are different battles, that the Dover Green is an
        address customers recognize, and that reviews from Delaware customers
        move the needle more than anything a link farm can sell you. That
        judgment is what you are actually buying.
      </>,
      <>
        Our SEO professionals in Delaware run the whole engagement in-house —
        research, content, technical work and reporting. Nothing is
        outsourced, and if a listing ever gets suspended, our{" "}
        <Link
          href="/services/gmb-reinstatement-help"
          className="phl-inline-link"
        >
          Google Business Profile reinstatement
        </Link>{" "}
        team gets you back on the map fast.
      </>,
    ],
    cta: "See Where You Rank Today",
    console: {
      title: "Delaware Visibility Console",
      tag: "After 6 months",
      metrics: [
        { strong: "268", label: "Calls from profile" },
        { strong: "#1", label: "Map pack rank" },
        { strong: "+81%", label: "Direction requests" },
      ],
      barsLabel: "Ranking signal strength",
      bars: [
        { label: "Map pack visibility", val: 91, tone: "blue" },
        { label: "Profile completeness", val: 97, tone: "gold" },
        { label: "Citation accuracy", val: 95, tone: "blue" },
        { label: "Review velocity", val: 79, tone: "gold" },
      ],
      pills: [
        { icon: "pin", text: "Wilmington · top 3" },
        { icon: "pin", text: "Dover · #1" },
        { icon: "star", text: "4.9 · 187 reviews" },
      ],
    },
  },
  process: {
    eyebrow: "How It Works",
    h2: "From Invisible to Unavoidable in Four Steps",
    steps: [
      {
        tag: "Week 1",
        title: "Free Delaware SEO Audit",
        desc: "We review your rankings, your Google Business Profile and your competitors across Delaware, then send a prioritized plan — whether or not you hire us.",
      },
      {
        tag: "Weeks 2–4",
        title: "Strategy & Foundation Fixes",
        desc: "A county-scoped keyword plan for your services and towns, then the foundation work: profile optimization, citation cleanup, and on-page fixes.",
      },
      {
        tag: "Every month",
        title: "Build Authority Every Month",
        desc: "Delaware content, local links, review growth, and profile activity — the compounding signals that move you up the Map Pack and keep you there.",
        chips: ["Delaware content", "Review growth", "Profile activity"],
      },
      {
        tag: "Ongoing",
        title: "Report, Refine, Expand",
        desc: "Monthly reporting tied to calls and direction requests, not vanity metrics. As rankings lock in, we expand to more services and more towns.",
        chips: ["Plain-English report", "New towns", "New services"],
      },
    ],
    visualTitle: "Where Delaware clients typically land after 90 days",
    visualBars: [
      { label: "Profile strength", val: 93 },
      { label: "Citation accuracy", val: 96 },
      { label: "Review velocity", val: 79 },
    ],
    ctaPrimary: "Start Ranking Today",
  },
  results: {
    eyebrow: "Real Results",
    h2: "What Happens When Delaware SEO is Done Properly",
    lead: "Different counties, different categories — the same system, executed month after month.",
    cards: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        industry: "Home services · Kent County",
        metric: "+205%",
        label: "Calls from the map pack",
        desc: (
          <>
            From page-two invisibility to top-three positions for &lsquo;near
            me&rsquo; searches across the whole service area — the same system
            as our{" "}
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
        industry: "Professional practice · Wilmington",
        metric: "Top 3",
        label: "Map pack for every core term",
        desc: "A profile rebuild, citation cleanup, and steady review growth moved the practice into the top three in New Castle County's most contested category.",
      },
      {
        icon: <FiMapPin aria-hidden="true" />,
        industry: "Service business · Sussex County",
        metric: "4×",
        label: "Towns ranking top three",
        desc: "Seasonal targeting and town-level pages took a single-town business to top-three visibility across the beach corridor before the summer surge.",
      },
    ],
  },
  showcase: {
    image: {
      src: "/images/geo/delaware-seo/delaware-main-street-businesses.jpg",
      alt: "Local shops and customers along a Delaware commercial main street",
    },
    floats: [
      { num: "187", label: "Average reviews earned" },
      { num: "#1", label: "Map pack across 8 Delaware towns" },
      { num: "+81%", label: "Direction requests" },
    ],
  },
  compare: {
    h2: "Zonic vs. a Typical Delaware SEO Company",
    lead: "Local SEO for local businesses is all we do, and it shows. Here is what working with a dedicated Delaware team looks like.",
    themTitle: "Out-of-State SEO Agency",
    themSub: "Why most 'Delaware' campaigns quietly stall",
    them: [
      "A Delaware landing page, a rate card, and no local footprint",
      "One statewide campaign ignoring the three-county reality",
      "Reports full of impressions, empty of phone calls",
      "Offshore link packages and duplicate citations",
      "12-month contracts before you see a single lead",
    ],
    usTitle: "SEO with Zonic Media",
    usSub: "Built to compound, reported like a P&L",
    us: [
      "Headquartered on the Dover Green — verify the address yourself",
      "County-scoped strategy from Wilmington to the beaches",
      "Reporting tied to calls, direction requests, and forms",
      "Hand-built Delaware citations and local links that compound",
      "Month-to-month — we keep you with results, not paperwork",
    ],
    scoreTitle: "Local Visibility Scorecard",
    scoreSub: "A typical Delaware client's first six months",
    scoreRows: [
      { label: "Profile strength", before: 34, after: 93 },
      { label: "Citation accuracy", before: 42, after: 96 },
      { label: "Review velocity", before: 22, after: 79 },
      { label: "Map pack visibility", before: 19, after: 88 },
    ],
  },
  why: {
    h2: "A Delaware SEO Partner, Not a Monthly Invoice",
    lead: "Rankings are the output. The inputs are strategy, execution, and accountability — and that is what you are actually buying.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Local is the whole practice",
        desc: (
          <>
            We are not a generalist agency dabbling in maps. Local rankings,
            local calls, and booked jobs for local businesses is what the{" "}
            <Link href="/" className="phl-inline-link">
              Zonic Media
            </Link>{" "}
            team does every day — from our own state first.
          </>
        ),
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Affordable, Audit-Priced Packages",
        desc: (
          <>
            No percentage-of-spend pricing and no 12-month lock-in. Every
            engagement starts with a free audit and a flat quote — see our{" "}
            <Link
              href="/services/local-seo-packages"
              className="phl-inline-link"
            >
              local SEO packages
            </Link>{" "}
            for what each tier includes.
          </>
        ),
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Transparent to a Fault",
        desc: "You own every account and asset. You see every change in the monthly report. If a number dips you hear it from us first, with the fix already moving.",
      },
    ],
    banner: {
      eyebrow: "Free Delaware SEO Audit",
      h3: "See Exactly How We'll Grow Your Delaware Rankings",
      p: "We map your profile, citations, reviews, and rankings against the competitors in your county — and show you the clear path to the top three for the searches that matter. Free, and yours to keep either way.",
      checks: [
        "Your Map Pack growth plan",
        "Profile wins ready to unlock",
        "Citation opportunities mapped",
        "Review growth roadmap",
      ],
      cta: "Claim Your Free Audit",
      audit: {
        title: "Local Visibility Score",
        tag: "After 6 months",
        score: "92",
        grade: "Excellent",
        gradeDesc:
          "Where our Delaware SEO campaigns typically land after six months of compounding work",
        rows: [
          { label: "Google Business Profile", flag: "A+ grade" },
          { label: "Citations & listings", flag: "100% accurate" },
          { label: "Review velocity", flag: "Ahead of top 3" },
        ],
      },
    },
  },
  marquee: [
    "Delaware SEO",
    "Wilmington",
    "Newark",
    "Dover",
    "Middletown",
    "Lewes",
    "Rehoboth Beach",
    "Seaford",
    "Google Business Profile",
  ],
  engine: {
    eyebrow: "Everything Working Together",
    h2: "Six Signals, One Ranking Engine",
    lead: (
      <>
        Local rankings are not one lever, they are six working at once. Skip
        any of them and the Map Pack notices. We run all six every month,
        from New Castle County down through Kent and Sussex — and when you
        need calls before the rankings land, our{" "}
        <Link href="/services/google-ads" className="phl-inline-link">
          Google Ads campaigns
        </Link>{" "}
        fill the gap.
      </>
    ),
    coreStrong: "Your Delaware listing",
    coreSub: "Top three · every town you serve",
    coreCta: "Get Your Free Audit",
    nodes: [
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
        outcome: "Rank per town",
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
    ],
    chipsLabel: "Ranking Delaware businesses in",
    chips: [
      "Home Services",
      "Healthcare & Dental",
      "Legal & Financial",
      "Restaurants & Cafés",
      "Salons & Wellness",
      "Auto & Repair",
      "Retail Storefronts",
      "Trades & Contractors",
    ],
  },
  faqs: {
    eyebrow: "FAQs",
    h2: "Straight Answers About SEO in Delaware",
    lead: "Pricing, timelines, county strategy, and what actually moves rankings in Delaware. If your question is not here, send it through the form — a strategist answers, not a sales script.",
    cta: "Ask About Your Town",
    items: DelSeoFaqs,
  },
  grow: {
    eyebrow: "Grow Further",
    h2: "Rankings are Step One. Here is What Multiplies Them.",
    lead: (
      <>
        SEO is one channel inside a bigger system — see the full{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware marketing engine
        </Link>{" "}
        if you want every channel working together.
      </>
    ),
    cards: [
      {
        href: "/services/delaware/web-design",
        icon: <FiLayout aria-hidden="true" />,
        title: "Delaware Web Design",
        desc: "Custom, SEO-ready websites for New Castle, Kent and Sussex County businesses.",
        cta: "See Delaware web design",
      },
      {
        href: "/services/wilmington/digital-marketing",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Wilmington Digital Marketing",
        desc: "City-level SEO and marketing for Delaware's biggest market.",
        cta: "See Wilmington",
      },
      {
        href: "/services/local-seo-packages",
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Local SEO Packages",
        desc: "What each plan includes and how audit-based pricing is scoped.",
        cta: "See the packages",
      },
    ],
  },
  form: {
    eyebrow: "Get Started",
    h2: "Claim Your Free Delaware SEO Audit",
    lead: "Tell us about your business and we will send a full visibility audit — rankings, profile, citations, reviews — plus a flat-price growth plan for your county, whether or not you hire us.",
    formType: "delaware-seo",
    badge: "Free Audit",
    title: "Get Your Free Delaware SEO Audit",
    subtitle:
      "No contracts, no pressure — just a clear picture of where you rank today and what it takes to win your county.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your services, the Delaware towns you cover, and what you'd like to improve",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(delSeoFaqJsonLd) }}
      />
      <PhlLocationLanding data={data} />
    </>
  );
}

export default Page;
