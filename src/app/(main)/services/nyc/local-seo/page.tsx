/*
 * NYC LOCAL SEO — built on the shared location landing system
 * (PhlLocationLanding / philaLanding.css) so it renders identically to the
 * Philadelphia and Delaware location pages. Aug 2026 SEO plan: first page of
 * the NYC geo silo, mirroring the Philadelphia template.
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

const PAGE_PATH = "/services/nyc/local-seo";

export const metadata: Metadata = {
  title: { absolute: "Local SEO Company NYC | Local SEO Services New York" },
  description:
    "Local SEO company for NYC businesses: Google Business Profile, Map Pack rankings and neighborhood visibility across Manhattan, Brooklyn, Queens and the Bronx.",
  keywords: [
    "local seo nyc",
    "local seo new york",
    "local seo services nyc",
    "local seo agency nyc",
    "local seo company nyc",
    "local seo manhattan",
    "seo services in new york",
    "seo agency new york",
    "local seo brooklyn",
    "local seo queens",
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
    title: "Local SEO Company NYC | Local SEO Services New York",
    description:
      "Local SEO for NYC businesses — Google Business Profile, Map Pack rankings and neighborhood-level visibility across all five boroughs.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "NYC Local SEO", url: PAGE_PATH },
]);

const professionalServiceJsonLd = buildLocalBusinessJsonLd({
  pageUrl: PAGE_PATH,
  areaServed: { type: "City", name: "New York" },
});

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services in New York City",
  serviceType: "Local Search Engine Optimization",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Local SEO for New York City businesses covering Google Business Profile optimization, citation building, review growth, on-page SEO and borough-level landing pages — built to win the Map Pack in the country's densest market.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "City",
    name: "New York",
    containedInPlace: { "@type": "State", name: "New York" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Local businesses across the five boroughs of New York City",
  },
};

const NycSeoFaqs = [
  {
    question: "How is local SEO different in New York City?",
    answer:
      "Density changes everything. In most cities the Map Pack is contested at the city level; in New York, Google slices results by neighborhood — a Park Slope search shows different businesses than a Williamsburg search two miles away. Winning NYC local SEO means running a portfolio of micro-market campaigns: neighborhood pages, borough-tuned profiles, and review velocity strong enough to break ties in the country's most crowded categories.",
  },
  {
    question: "What's included in your NYC local SEO service?",
    answer:
      "The full local ranking system: Google Business Profile optimization, citation building and cleanup across New York directories, review growth and response management, on-page SEO, borough and neighborhood landing pages, and monthly reporting tied to calls and direction requests. Nothing is outsourced and you own every account we touch.",
  },
  {
    question: "How long does local SEO take to work in NYC?",
    answer:
      "Expect measurable Map Pack movement in 60–90 days for most categories, with the most contested Manhattan categories taking longer. NYC timelines run longer than smaller markets because review counts and competitor budgets are higher — but the payoff per position gained is also the largest in the country.",
  },
  {
    question: "How much does local SEO cost in New York?",
    answer:
      "More than the national average, honestly quoted: thin programs simply do not move rankings in New York. Most single-location NYC engagements land in our Growth or Dominate tiers, with a flat monthly quote issued after a free audit that benchmarks your actual neighborhood competition. No long-term contracts.",
  },
  {
    question: "Can you rank my business in multiple boroughs?",
    answer:
      "Yes — with the right structure. Map Pack rankings are proximity-based, so a Brooklyn address cannot buy its way into the Manhattan pack. What works is a borough-level page architecture plus profile service-area tuning: each borough (often each neighborhood cluster) gets its own landing page and signal set, so you win the organic results everywhere you serve and the Map Pack where you physically are.",
  },
  {
    question: "My NYC Google Business Profile was suspended. Can you help?",
    answer:
      "Yes — GBP reinstatement is our flagship service, with 700+ recoveries handled. NYC profiles live under the heaviest enforcement in the country because dense markets breed spam and Google's filters sweep up legitimate businesses too. Recovery plus compliance hardening is often where our NYC engagements start.",
  },
  {
    question: "Do you need to be based in NYC to do this well?",
    answer:
      "No — most agencies ranking NYC businesses are not on Fifth Avenue either. Rankings are decided by strategy and consistent execution, both of which travel. We are headquartered in Dover, Delaware, run campaigns across the Northeast, and hold strategy calls on video whenever you want them.",
  },
  {
    question: "Do I need local SEO if I already run Google Ads in NYC?",
    answer:
      "At New York click prices, more than anywhere. Ads buy the top of the page today; local SEO earns Map Pack and organic positions that keep producing after the budget stops. Most NYC clients run both, then shift spend toward SEO as rankings take hold and blended cost per lead drops.",
  },
  {
    question: "How does local SEO work in New York City when competitors are a block away?",
    answer:
      "In NYC the Map Pack changes every few blocks, so a single citywide ranking does not exist. What wins is neighborhood-level relevance: reviews that mention the neighborhood, service pages for each area you serve, a primary category chosen against the actual competitors on your street, and photos and posts that keep the profile active. Zonic Media tracks rankings on a grid across the boroughs and builds the program around the neighborhoods that drive your revenue.",
  },
];

const nycSeoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: NycSeoFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const data: PhlLandingData = {
  hero: {
    eyebrow: "Local SEO in New York City",
    h1Start: "NYC Local SEO That Wins the",
    h1Highlight: "Map Pack",
    h1End: "Block by Block",
    sub: (
      <>
        New York is the hardest local SEO market in the country — and the one
        where a Map Pack slot pays the most. Zonic Media builds the full local
        ranking system for NYC businesses — Google Business Profile, citations,
        reviews, and neighborhood pages — precise enough to compete where a
        three-block radius decides who gets the call.
      </>
    ),
    media: {
      src: "/images/geo/nyc-local-seo/nyc-local-seo-storefront-owner.jpg",
      alt: "New York storefront owner checking local search visibility on a phone",
    },
    floatA: {
      strong: "Top 3 in the map pack",
      text: "neighborhood searches across NYC",
    },
    floatB: { strong: "+40 reviews", text: "earned this quarter" },
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
        num: "700+",
        label: "GBP suspensions recovered",
      },
    ],
    proof: "by the local businesses we rank",
    cta: "Get Your Free NYC SEO Audit",
  },
  about: {
    eyebrow: "The NYC Search Opportunity",
    h2Start: "Eight Million Customers Search by Neighborhood.",
    h2Highlight: "We Make Sure They Find You.",
    leads: [
      <>
        When a pipe bursts in Astoria or somebody needs a dentist near Union
        Square, the search happens on a phone and the decision happens in
        seconds. The Map Pack shows three businesses — and in New York, Google
        builds a different pack for practically every neighborhood. That is
        the single highest-intent channel an NYC business has, multiplied
        across dozens of micro-markets most competitors have never properly
        worked.
      </>,
      <>
        Our system captures it street by street: a fully optimized{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="phl-inline-link"
        >
          Google Business Profile
        </Link>
        , citations that agree with each other everywhere Google checks,
        reviews arriving steadily in the categories where review count breaks
        ties, and neighborhood pages built around the searches New Yorkers
        actually type.
      </>,
    ],
    checks: [
      "Borough-level ranking strategy",
      "Profile fully optimized",
      "Citations cleaned & built",
      "Reviews growing weekly",
    ],
    collageA: {
      src: "/images/geo/nyc-local-seo/nyc-near-me-mobile-search.jpg",
      alt: "Near me mobile search used on a New York neighborhood street",
    },
    collageB: {
      src: "/images/geo/nyc-local-seo/nyc-map-pack-rankings-dashboard.jpg",
      alt: "Neighborhood Map Pack rankings dashboard for New York City",
    },
    badgeText: "New York City Local SEO • Zonic Media •",
  },
  services: {
    eyebrow: "What's Included",
    h2: "Everything Your NYC Rankings Need, in One System",
    cards: [
      {
        tone: "blue",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile Optimization",
        desc: (
          <>
            Your profile is the new homepage for local search. We optimize
            every field, category, photo, service, and post — the same system
            behind our{" "}
            <Link
              href="/local-seo-google-business-optimization"
              className="phl-inline-link"
            >
              GBP optimization service
            </Link>{" "}
            — tuned for NYC&apos;s category competition.
          </>
        ),
      },
      {
        tone: "gold",
        icon: <FiSearch aria-hidden="true" />,
        title: "Neighborhood Keyword & Competitor Research",
        desc: "We map what New Yorkers actually type, neighborhood by neighborhood — Astoria vs. Park Slope vs. Riverdale — and audit who currently owns those results, then build the plan that takes those positions off them.",
      },
      {
        tone: "blue",
        icon: <FiLink2 aria-hidden="true" />,
        title: "Citations & Listing Management",
        desc: "Consistent name, address, and phone across every directory Google cross-checks — critical in NYC, where address churn and suite-number mismatches quietly kill rankings.",
      },
      {
        tone: "gold",
        icon: <FiStar aria-hidden="true" />,
        title: "Review Growth & Reputation",
        desc: "In New York's crowded categories, review count and recency are the tiebreakers. We build a steady stream of real reviews with responses that show Google — and the next customer — that somebody is home.",
      },
      {
        tone: "blue",
        icon: <FiFileText aria-hidden="true" />,
        title: "Borough & Neighborhood Pages",
        desc: (
          <>
            Landing pages built around real local searches for every borough
            and neighborhood cluster you serve, with schema and internal links
            that make each one easier to rank — backed by conversion-first{" "}
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
    ],
  },
  band: {
    eyebrow: "The Map Pack Is The Market",
    h2: "We Put You in the Top Three — Neighborhood by Neighborhood",
    leads: [
      <>
        The Map Pack takes the majority of clicks and nearly all of the phone
        calls, and in New York it is rebuilt for every few blocks. Every
        campaign is built around one goal: earning the top spots for the
        services and neighborhoods that pay you best, then defending them
        month after month — with{" "}
        <Link href="/services/nyc/digital-marketing" className="phl-inline-link">
          NYC digital marketing
        </Link>{" "}
        covering the paid side when you want the whole results page.
      </>,
      <>
        We work the signals Google actually rewards — proximity, relevance,
        and prominence. A fully built-out profile tells Google exactly what
        you do, consistent citations confirm you are who you say you are, and
        steady reviews plus local content prove customers rate you. If a
        listing ever gets suspended in NYC&apos;s enforcement-heavy market,
        our{" "}
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
      title: "NYC Visibility Console",
      tag: "After 6 months",
      metrics: [
        { strong: "312", label: "Calls from profile" },
        { strong: "#1", label: "Map pack rank" },
        { strong: "+94%", label: "Direction requests" },
      ],
      barsLabel: "Ranking signal strength",
      bars: [
        { label: "Map pack visibility", val: 90, tone: "blue" },
        { label: "Profile completeness", val: 97, tone: "gold" },
        { label: "Citation accuracy", val: 94, tone: "blue" },
        { label: "Review velocity", val: 82, tone: "gold" },
      ],
      pills: [
        { icon: "pin", text: "Astoria · #1" },
        { icon: "pin", text: "Park Slope · #2" },
        { icon: "star", text: "4.9 · 240 reviews" },
      ],
    },
  },
  process: {
    eyebrow: "How It Works",
    h2: "From Invisible to Unavoidable in Four Steps",
    steps: [
      {
        tag: "Week 1",
        title: "Free NYC Visibility Audit",
        desc: "We audit your rankings, profile, citations, reviews, and the competitors actually beating you in your neighborhood's Map Pack — and show you exactly where the calls you are missing are going instead.",
      },
      {
        tag: "Weeks 2–4",
        title: "Strategy & Foundation Fixes",
        desc: "A keyword-mapped plan for your services and boroughs, then the foundation work: profile optimization, citation cleanup, and on-page fixes.",
      },
      {
        tag: "Every month",
        title: "Build Authority Every Month",
        desc: "Neighborhood content, links, review growth, and profile activity — the compounding signals that move you up the Map Pack in a market where standing still means sliding.",
        chips: ["Neighborhood content", "Review growth", "Profile activity"],
      },
      {
        tag: "Ongoing",
        title: "Report, Refine, Expand",
        desc: "Monthly reporting tied to calls and direction requests, not vanity metrics. As rankings lock in, we expand to more services and more neighborhoods.",
        chips: ["Plain-English report", "New neighborhoods", "New services"],
      },
    ],
    visualTitle: "Where NYC clients typically land after 90 days",
    visualBars: [
      { label: "Profile strength", val: 92 },
      { label: "Citation accuracy", val: 95 },
      { label: "Review velocity", val: 80 },
    ],
    ctaPrimary: "Start Ranking Today",
  },
  results: {
    eyebrow: "Real Results",
    h2: "What Happens When NYC Local SEO is Done Properly",
    lead: "Different boroughs, different categories — the same system, executed month after month.",
    cards: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        industry: "Home services · Queens",
        metric: "+187%",
        label: "Calls from the map pack",
        desc: (
          <>
            From page-two invisibility to top-three positions for &lsquo;near
            me&rsquo; searches across the neighborhoods the business covers —
            the same system as our{" "}
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
        industry: "Dental practice · Manhattan",
        metric: "Top 3",
        label: "Map pack for every core term",
        desc: "A profile rebuild, citation cleanup, and steady review growth moved the practice from #14 into the top three in one of the city's most contested categories.",
      },
      {
        icon: <FiMapPin aria-hidden="true" />,
        industry: "Multi-location service · Brooklyn + Queens",
        metric: "5×",
        label: "Neighborhoods ranking top three",
        desc: "Individual neighborhood pages and per-location profile tuning took a single-area business to top-three visibility across five separate service areas.",
      },
    ],
  },
  showcase: {
    image: {
      src: "/images/geo/nyc-local-seo/nyc-neighborhood-storefronts.jpg",
      alt: "Independent storefronts along an active New York neighborhood corridor",
    },
    floats: [
      { num: "240", label: "Average reviews earned" },
      { num: "#1", label: "Map pack across 6 NYC neighborhoods" },
      { num: "+94%", label: "Direction requests" },
    ],
  },
  compare: {
    h2: "Zonic vs. a Typical NYC SEO Agency",
    lead: "Local SEO for local businesses is all we do, and it shows. Here is what working with a dedicated local team looks like.",
    themTitle: "Typical NYC Agency",
    themSub: "Why most local campaigns quietly stall",
    them: [
      "One citywide campaign ignoring how NYC actually searches",
      "Reports full of impressions, empty of phone calls",
      "Offshore link packages and duplicate citations",
      "One account manager for 80 clients",
      "12-month contracts before you see a single lead",
    ],
    usTitle: "Local SEO with Zonic Media",
    usSub: "Built to compound, reported like a P&L",
    us: [
      "Borough-by-borough targeting matched to real search behavior",
      "Reporting tied to calls, direction requests, and forms",
      "Hand-built citations and local links that compound",
      "A dedicated strategist who knows your market",
      "Month-to-month — we keep you with results, not paperwork",
    ],
    scoreTitle: "Local Visibility Scorecard",
    scoreSub: "A typical NYC client's first six months",
    scoreRows: [
      { label: "Profile strength", before: 30, after: 92 },
      { label: "Citation accuracy", before: 41, after: 95 },
      { label: "Review velocity", before: 24, after: 82 },
      { label: "Map pack visibility", before: 14, after: 84 },
    ],
  },
  why: {
    h2: "A Local SEO Partner, Not a Monthly Invoice",
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
            team does every day.
          </>
        ),
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Built for NYC Enforcement",
        desc: "New York profiles get suspended more than anywhere in the country. With 700+ reinstatements handled, we harden your profile against the sweeps — and recover it fast if one hits.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Transparent to a Fault",
        desc: "You own every account and asset. You see every change in the monthly report. If a number dips you hear it from us first, with the fix already moving.",
      },
    ],
    banner: {
      eyebrow: "Free NYC Local SEO Audit",
      h3: "See Exactly How We'll Grow Your NYC Rankings",
      p: "We map your profile, citations, reviews, and rankings against the businesses actually beating you in your neighborhood — and show you the clear path to the top three. Free, and yours to keep either way.",
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
        score: "90",
        grade: "Excellent",
        gradeDesc:
          "Where our NYC local SEO campaigns typically land after six months of compounding work",
        rows: [
          { label: "Google Business Profile", flag: "A+ grade" },
          { label: "Citations & listings", flag: "100% accurate" },
          { label: "Review velocity", flag: "Ahead of top 3" },
        ],
      },
    },
  },
  marquee: [
    "NYC Local SEO",
    "Google Business Profile",
    "Map Pack Rankings",
    "Manhattan",
    "Brooklyn",
    "Queens",
    "The Bronx",
    "Staten Island",
    "Review Growth",
  ],
  engine: {
    eyebrow: "Everything Working Together",
    h2: "Six Signals, One Ranking Engine",
    lead: (
      <>
        Local rankings are not one lever, they are six working at once. Skip
        any of them and the Map Pack notices. We run all six every month, from
        the Financial District up through Harlem and out across Brooklyn,
        Queens, the Bronx, and Staten Island — and when you need calls before
        the rankings land, our{" "}
        <Link href="/services/google-ads" className="phl-inline-link">
          Google Ads campaigns
        </Link>{" "}
        fill the gap.
      </>
    ),
    coreStrong: "Your NYC listing",
    coreSub: "Top three · every neighborhood you serve",
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
    ],
    chipsLabel: "Ranking local New York businesses in",
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
    h2: "Straight Answers About Local SEO in New York City",
    lead: "Pricing, timelines, boroughs, and what actually moves Map Pack rankings in NYC. If your question is not here, send it through the form — a strategist answers, not a sales script.",
    cta: "Ask About Your Neighborhood",
    items: NycSeoFaqs,
  },
  grow: {
    eyebrow: "Grow Further",
    h2: "Rankings are Step One. Here is What Multiplies Them.",
    lead: (
      <>
        Local SEO is one channel inside a bigger system — see the full{" "}
        <Link href="/services/nyc/digital-marketing" className="phl-inline-link">
          NYC marketing engine
        </Link>{" "}
        if you want every channel working together.
      </>
    ),
    cards: [
      {
        href: "/local-seo-google-business-optimization",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile Optimization",
        desc: "Most local buyers pick straight from the map pack. We make sure that pick is you.",
        cta: "Optimize your profile",
      },
      {
        href: "/services/nyc/digital-marketing",
        icon: <FiZap aria-hidden="true" />,
        title: "NYC Digital Marketing",
        desc: "SEO, ads, and web design as one borough-targeted program with one report.",
        cta: "See the full program",
      },
      {
        href: "/services/gmb-reinstatement-help",
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Profile Reinstatement",
        desc: "Suspended listing? We file the appeal with the right evidence and get you back on the map.",
        cta: "Get reinstated",
      },
    ],
  },
  form: {
    eyebrow: "Get Started",
    h2: "Claim Your Free NYC Local SEO Audit",
    lead: "Tell us about your business and we will send a full local visibility audit — rankings, profile, citations, reviews — plus a flat-price growth plan benchmarked against your actual neighborhood competitors.",
    formType: "nyc-local-seo",
    badge: "Free Audit",
    title: "Get Your Free NYC Local SEO Audit",
    subtitle:
      "No contracts, no pressure — just a clear picture of where you rank today and what it takes to win your neighborhood.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your services, the boroughs and neighborhoods you cover, and what you'd like to improve",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nycSeoFaqJsonLd) }}
      />
      <PhlLocationLanding data={data} />
    </>
  );
}

export default Page;
