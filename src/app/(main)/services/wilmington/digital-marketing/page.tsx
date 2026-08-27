/*
 * WILMINGTON DE DIGITAL MARKETING — city page under the Delaware silo, built
 * on the shared location landing system (PhlLocationLanding /
 * philaLanding.css) so it renders identically to the other location pages.
 * Aug 2026 SEO plan, Content Gaps tab.
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
  FiMapPin,
  FiPhoneCall,
  FiSearch,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/wilmington/digital-marketing";

export const metadata: Metadata = {
  title: { absolute: "Wilmington DE Digital Marketing Agency | Zonic Media" },
  description:
    "Digital marketing and SEO for Wilmington, Delaware businesses — local SEO, Google Business Profile, Google Ads and web design from a Dover-based agency. Free audit.",
  keywords: [
    "wilmington marketing agency",
    "marketing company wilmington",
    "seo company wilmington delaware",
    "search engine optimization wilmington de",
    "digital marketing wilmington de",
    "wilmington delaware seo",
    "pay per click wilmington",
    "wilmington de web design",
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
    title: "Wilmington DE Digital Marketing Agency | Zonic Media",
    description:
      "Digital marketing and SEO for Wilmington, Delaware businesses — local SEO, GBP, Google Ads and web design. Free audit.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Wilmington Digital Marketing", url: PAGE_PATH },
]);

const professionalServiceJsonLd = buildLocalBusinessJsonLd({
  pageUrl: PAGE_PATH,
  areaServed: { type: "City", name: "Wilmington" },
});

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in Wilmington, Delaware",
  serviceType: "Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Local SEO, Google Business Profile optimization, Google Ads and web design for Wilmington, Delaware businesses — from a Dover-headquartered Delaware agency.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "City",
    name: "Wilmington",
    containedInPlace: { "@type": "State", name: "Delaware" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Businesses in Wilmington and New Castle County, Delaware",
  },
};

const WilmFaqs = [
  {
    question: "Do you work with Wilmington businesses if your office is in Dover?",
    answer:
      "Yes — Wilmington is 45 minutes up Route 13 from our Dover office and a core market for us. Strategy calls run over video or in person, and the campaign work is location-independent. What matters for your rankings is our Delaware footprint, which transfers fully to Wilmington campaigns.",
  },
  {
    question: "How competitive is SEO in Wilmington compared to the rest of Delaware?",
    answer:
      "Noticeably more. Wilmington draws Philadelphia-metro agencies and national franchises across the state line, so head terms take longer and content has to be stronger than in Kent or Sussex County. We usually sequence quick Map Pack wins first, then build toward the harder organic terms.",
  },
  {
    question: "Can you run both SEO and Google Ads for a Wilmington business?",
    answer:
      "Yes, and they work best together: Ads buys leads now and produces the search-term data that sharpens SEO targeting; SEO steadily lowers your blended cost per lead as rankings arrive. At Wilmington's click prices, that transition matters.",
  },
  {
    question: "What does digital marketing cost in Wilmington?",
    answer:
      "Local SEO programs for single-location Wilmington businesses start at a few hundred dollars a month; combined SEO + Ads programs scale with ad budget and competition. Every quote is flat-scope after a free audit — no percentage-of-spend and no long-term contracts.",
  },
  {
    question: "Which Wilmington-area suburbs do you cover?",
    answer:
      "The whole New Castle County footprint: Newark, Bear, Pike Creek, Hockessin, Greenville, Claymont, Middletown and the Brandywine Valley — plus campaigns for Wilmington businesses serving the Philadelphia and Maryland border markets.",
  },
  {
    question: "My Google Business Profile is suspended. Can you help?",
    answer:
      "Yes — GBP reinstatement is our flagship service, with 700+ recoveries handled. If your Wilmington profile is down, that is the first thing to fix; no amount of website SEO replaces a live listing.",
  },
];

const wilmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: WilmFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const data: PhlLandingData = {
  hero: {
    eyebrow: "Digital Marketing Agency in Wilmington, DE",
    h1Start: "Wilmington Digital Marketing That",
    h1Highlight: "Wins Delaware's Toughest Market",
    sub: (
      <>
        Wilmington is Delaware&apos;s most competitive market — the search
        results for any New Castle County service are crowded with
        Philadelphia agencies and national franchises. Zonic Media is a
        Wilmington marketing agency choice with an actual Delaware
        headquarters: local SEO, Google Business Profile, Google Ads, and web
        design, an hour up Route 13 from our Dover office.
      </>
    ),
    media: {
      src: "/images/geo/wilmington-digital-marketing/wilmington-riverfront-business-owner.jpg",
      alt: "Wilmington business owner using a phone along the Christina Riverfront",
    },
    floatA: {
      strong: "Delaware HQ",
      text: "45 minutes from Wilmington",
    },
    floatB: { strong: "+32 reviews", text: "earned this quarter" },
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
        num: "100%",
        label: "In-house — nothing outsourced",
      },
    ],
    proof: "by the Delaware businesses we grow",
    cta: "Get Your Free Wilmington Audit",
  },
  about: {
    eyebrow: "The Wilmington Opportunity",
    h2Start: "The Biggest Market in Delaware.",
    h2Highlight: "The Most Contested, Too.",
    leads: [
      <>
        Search engine optimization in Wilmington DE means beating two kinds of
        competitors at once: local firms that have held rankings for years,
        and Philadelphia-metro companies spilling across the state line. Add
        the I-95 corridor&apos;s commuter traffic and the corporate density
        downtown, and the demand in front of a Wilmington business is far
        larger than the city&apos;s size suggests.
      </>,
      <>
        Anyone can put &ldquo;Wilmington&rdquo; in a page title. We are a
        registered Delaware company at 8 The Green in Dover — you can check
        the address, the Clutch reviews and the Delaware client list before
        you ever get on a call. That local accountability matters when most
        agencies in the results are selling Delaware from three states away.
        See the statewide picture on our{" "}
        <Link href="/services/delaware/seo" className="phl-inline-link">
          Delaware SEO
        </Link>{" "}
        page.
      </>,
    ],
    checks: [
      "Hyper-local Wilmington signals",
      "Profile fully optimized",
      "New Castle County citations",
      "Reviews growing weekly",
    ],
    collageA: {
      src: "/images/geo/wilmington-digital-marketing/wilmington-market-street-storefront.jpg",
      alt: "Independent storefront opening for the day on Market Street in Wilmington",
    },
    collageB: {
      src: "/images/geo/wilmington-digital-marketing/wilmington-rankings-dashboard.jpg",
      alt: "Wilmington local rankings and campaign performance dashboard",
    },
    badgeText: "Wilmington Delaware Marketing • Zonic Media •",
  },
  services: {
    eyebrow: "What We Do",
    h2: "Every Channel a Wilmington Business Needs, Under One Roof",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Wilmington Local SEO",
        desc: (
          <>
            Hyper-local Google Business Profile signals, Wilmington-specific
            service pages, and citations that anchor you to New Castle County
            — built on the same system as our{" "}
            <Link href="/services/delaware/seo" className="phl-inline-link">
              Delaware SEO program
            </Link>
            .
          </>
        ),
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile",
        desc: (
          <>
            Optimization, reviews, posts and Q&amp;A — plus{" "}
            <Link
              href="/services/gmb-reinstatement-help"
              className="phl-inline-link"
            >
              suspension recovery
            </Link>{" "}
            when a listing goes down.
          </>
        ),
      },
      {
        tone: "blue",
        icon: <FiTarget aria-hidden="true" />,
        title: "Google Ads & Local Services Ads",
        desc: (
          <>
            Pay-per-click scoped to Wilmington and its suburbs — Newark, Bear,
            Pike Creek, Hockessin, the Brandywine Valley — with weekly
            waste-cutting. See how we run{" "}
            <Link href="/services/google-ads" className="phl-inline-link">
              Google Ads
            </Link>
            .
          </>
        ),
      },
      {
        tone: "gold",
        icon: <FiLayout aria-hidden="true" />,
        title: "Web Design That Converts",
        desc: (
          <>
            Fast, mobile-first{" "}
            <Link
              href="/services/delaware/web-design"
              className="phl-inline-link"
            >
              Delaware web design
            </Link>{" "}
            — pages that load quickly, pass Core Web Vitals, and turn
            Wilmington traffic into calls.
          </>
        ),
      },
      {
        tone: "blue",
        icon: <FiFileText aria-hidden="true" />,
        title: "Content & Local Authority",
        desc: "Wilmington and New Castle County content that ranks, answers real customer questions, and earns citations in the AI answers customers now trust.",
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
    eyebrow: "The Map Pack Is The Market",
    h2: "We Put You in Wilmington's Top Three — And Keep You There",
    leads: [
      <>
        The Map Pack takes the majority of clicks and nearly all of the phone
        calls, and Wilmington&apos;s is the most contested in the state.
        Every campaign is built around one goal: earning the top spots for
        the services and neighborhoods that pay you best, then defending them
        month after month.
      </>,
      <>
        We work the signals Google actually rewards — proximity, relevance,
        and prominence. A fully built-out profile tells Google exactly what
        you do, consistent citations confirm you are who you say you are, and
        steady reviews plus local content prove customers rate you. If a
        listing ever gets suspended, our{" "}
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
      title: "Wilmington Visibility Console",
      tag: "After 6 months",
      metrics: [
        { strong: "241", label: "Calls from profile" },
        { strong: "#1", label: "Map pack rank" },
        { strong: "+77%", label: "Direction requests" },
      ],
      barsLabel: "Ranking signal strength",
      bars: [
        { label: "Map pack visibility", val: 89, tone: "blue" },
        { label: "Profile completeness", val: 96, tone: "gold" },
        { label: "Citation accuracy", val: 94, tone: "blue" },
        { label: "Review velocity", val: 76, tone: "gold" },
      ],
      pills: [
        { icon: "pin", text: "Downtown · top 3" },
        { icon: "pin", text: "Pike Creek · #1" },
        { icon: "star", text: "4.9 · 165 reviews" },
      ],
    },
  },
  process: {
    eyebrow: "How It Works",
    h2: "From Invisible to Unavoidable in Four Steps",
    steps: [
      {
        tag: "Week 1",
        title: "Free Wilmington Market Audit",
        desc: "We map your rankings against Wilmington competitors, review your Google Business Profile, and show you where the calls you are missing are going instead.",
      },
      {
        tag: "Weeks 2–4",
        title: "Strategy & Foundation Fixes",
        desc: "A keyword-mapped plan for your services and suburbs, then the foundation work: profile optimization, citation cleanup, and on-page fixes.",
      },
      {
        tag: "Every month",
        title: "Build Authority Every Month",
        desc: "Local content, links, review growth, and profile activity — the compounding signals that beat the out-of-state agencies at their own game.",
        chips: ["Local content", "Review growth", "Profile activity"],
      },
      {
        tag: "Ongoing",
        title: "Report, Refine, Expand",
        desc: "Monthly reporting tied to calls and direction requests. As rankings lock in, we expand from downtown Wilmington out through the suburbs.",
        chips: ["Plain-English report", "New suburbs", "New services"],
      },
    ],
    visualTitle: "Where Wilmington clients typically land after 90 days",
    visualBars: [
      { label: "Profile strength", val: 92 },
      { label: "Citation accuracy", val: 94 },
      { label: "Review velocity", val: 76 },
    ],
    ctaPrimary: "Start Ranking Today",
  },
  results: {
    eyebrow: "Real Results",
    h2: "What Happens When Wilmington Marketing is Done Properly",
    lead: "Different neighborhoods, different categories — the same system, executed month after month.",
    cards: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        industry: "Home services · New Castle County",
        metric: "+192%",
        label: "Calls from the map pack",
        desc: (
          <>
            From page-two invisibility to top-three positions across the
            suburbs the business covers — the same system as our{" "}
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
        industry: "Professional practice · Downtown",
        metric: "Top 3",
        label: "Map pack for every core term",
        desc: "A profile rebuild, citation cleanup, and steady review growth moved the practice into the top three against Philadelphia-metro competition.",
      },
      {
        icon: <FiMapPin aria-hidden="true" />,
        industry: "Service business · Suburbs",
        metric: "5×",
        label: "Suburbs ranking top three",
        desc: "Suburb-level pages and profile tuning took a single-location business to top-three visibility from Newark to Hockessin.",
      },
    ],
  },
  showcase: {
    image: {
      src: "/images/geo/wilmington-digital-marketing/wilmington-riverfront-business-district.jpg",
      alt: "Businesses, cyclists, and pedestrians along the Wilmington Riverfront",
    },
    floats: [
      { num: "165", label: "Average reviews earned" },
      { num: "#1", label: "Map pack across 5 NCC suburbs" },
      { num: "+77%", label: "Direction requests" },
    ],
  },
  compare: {
    h2: "Zonic vs. a Typical Wilmington Marketing Agency",
    lead: "Local growth for local businesses is all we do, and it shows. Here is what working with a Delaware team looks like.",
    themTitle: "Out-of-State Agency",
    themSub: "Why most Wilmington campaigns quietly stall",
    them: [
      "Sells 'Wilmington' from a Philadelphia or national office",
      "One citywide push ignoring suburb-level economics",
      "Reports full of impressions, empty of phone calls",
      "Offshore link packages and duplicate citations",
      "12-month contracts before you see a single lead",
    ],
    usTitle: "Marketing with Zonic Media",
    usSub: "Built to compound, reported like a P&L",
    us: [
      "A verifiable Delaware headquarters and client list",
      "Suburb-by-suburb targeting from Newark to Claymont",
      "Reporting tied to calls, direction requests, and forms",
      "Hand-built Delaware citations and local links",
      "Month-to-month — we keep you with results, not paperwork",
    ],
    scoreTitle: "Local Visibility Scorecard",
    scoreSub: "A typical Wilmington client's first six months",
    scoreRows: [
      { label: "Profile strength", before: 33, after: 92 },
      { label: "Citation accuracy", before: 40, after: 94 },
      { label: "Review velocity", before: 20, after: 76 },
      { label: "Map pack visibility", before: 16, after: 85 },
    ],
  },
  why: {
    h2: "A Wilmington Growth Partner, Not a Monthly Invoice",
    lead: "Leads are the output. The inputs are strategy, execution, and accountability — and that is what you are actually buying.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Local is the whole practice",
        desc: (
          <>
            Local rankings, local calls, and booked jobs for local businesses
            is what the{" "}
            <Link href="/" className="phl-inline-link">
              Zonic Media
            </Link>{" "}
            team does every day — in our own state first.
          </>
        ),
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Built for Wilmington Economics",
        desc: "Wilmington clicks are not cheap. Tight geo-targeting, intent-matched landing pages, and weekly waste-cutting keep cost per lead honest in the state's most contested market.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Transparent to a Fault",
        desc: "You own every account and asset. You see every change in the monthly report. If a number dips you hear it from us first, with the fix already moving.",
      },
    ],
    banner: {
      eyebrow: "Free Wilmington Market Audit",
      h3: "See Exactly How We'll Grow Your Wilmington Visibility",
      p: "We map your rankings, your profile, and your competitors across New Castle County — and send back a prioritized, flat-priced plan. Free, and yours to keep either way.",
      checks: [
        "Your Map Pack growth plan",
        "Suburb-level competitive map",
        "Citation opportunities mapped",
        "Review growth roadmap",
      ],
      cta: "Claim Your Free Audit",
      audit: {
        title: "Local Visibility Score",
        tag: "After 6 months",
        score: "89",
        grade: "Excellent",
        gradeDesc:
          "Where our Wilmington campaigns typically land after six months of compounding work",
        rows: [
          { label: "Google Business Profile", flag: "A+ grade" },
          { label: "Citations & listings", flag: "100% accurate" },
          { label: "Review velocity", flag: "Ahead of top 3" },
        ],
      },
    },
  },
  marquee: [
    "Wilmington Digital Marketing",
    "Local SEO",
    "Google Ads",
    "Web Design",
    "Newark",
    "Pike Creek",
    "Hockessin",
    "Brandywine Valley",
  ],
  engine: {
    eyebrow: "Everything Working Together",
    h2: "Six Signals, One Ranking Engine",
    lead: (
      <>
        Local rankings are not one lever, they are six working at once. Skip
        any of them and the Map Pack notices. We run all six every month,
        from downtown Wilmington out through Newark, Bear, Pike Creek and the
        Brandywine Valley — and when you need calls before the rankings land,{" "}
        <Link href="/services/google-ads" className="phl-inline-link">
          Google Ads campaigns
        </Link>{" "}
        fill the gap.
      </>
    ),
    coreStrong: "Your Wilmington listing",
    coreSub: "Top three · every suburb you serve",
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
        icon: <FiTarget aria-hidden="true" />,
        title: "Google Ads",
        outcome: "Leads now",
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
        outcome: "Rank per suburb",
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
    chipsLabel: "Growing Wilmington businesses in",
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
    h2: "Straight Answers About Marketing in Wilmington",
    lead: "Pricing, timelines, suburbs, and what actually moves rankings in New Castle County. If your question is not here, send it through the form — a strategist answers, not a sales script.",
    cta: "Ask About Your Suburb",
    items: WilmFaqs,
  },
  grow: {
    eyebrow: "More Delaware Coverage",
    h2: "Wilmington is One Market. Here is the Rest of the State.",
    lead: (
      <>
        See the statewide program on our{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware digital marketing
        </Link>{" "}
        page, or go channel-deep below.
      </>
    ),
    cards: [
      {
        href: "/services/delaware/seo",
        icon: <FiSearch aria-hidden="true" />,
        title: "SEO Company in Delaware",
        desc: "The statewide SEO program — Wilmington, Dover, Newark and Sussex County.",
        cta: "See Delaware SEO",
      },
      {
        href: "/services/delaware/web-design",
        icon: <FiLayout aria-hidden="true" />,
        title: "Delaware Web Design",
        desc: "Custom, SEO-ready sites for New Castle, Kent and Sussex County businesses.",
        cta: "See web design",
      },
      {
        href: "/services/google-ads",
        icon: <FiTarget aria-hidden="true" />,
        title: "Google Ads Management",
        desc: "Paid search that pays for itself, tracked to calls.",
        cta: "See Google Ads",
      },
    ],
  },
  form: {
    eyebrow: "Get Started",
    h2: "Claim Your Free Wilmington Market Audit",
    lead: "Tell us about your business and we will map your rankings against Wilmington competitors, review your Google Business Profile, and send back a prioritized, flat-priced plan — no obligation.",
    formType: "wilmington-digital-marketing",
    badge: "Free Audit",
    title: "Get Your Free Wilmington Audit",
    subtitle:
      "No contracts, no pressure — just a clear picture of where you rank today and what it takes to win New Castle County.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your services, the Wilmington-area suburbs you cover, and what you'd like to improve",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wilmFaqJsonLd) }}
      />
      <PhlLocationLanding data={data} />
    </>
  );
}

export default Page;
