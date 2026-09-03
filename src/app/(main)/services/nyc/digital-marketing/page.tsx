/*
 * NYC DIGITAL MARKETING — hub of the NYC geo silo, built on the shared
 * location landing system (PhlLocationLanding / philaLanding.css) so it
 * renders identically to the Philadelphia and Delaware location pages.
 * Links DOWN to /services/nyc/local-seo with narrow anchors.
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
  FiTarget,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/nyc/digital-marketing";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing Agency NYC | New York Marketing Company" },
  description:
    "NYC digital marketing agency for small and mid-size businesses: local SEO, Google Business Profile, Google Ads and web design across the five boroughs.",
  keywords: [
    "digital marketing agency nyc",
    "digital marketing agency new york",
    "digital marketing company nyc",
    "best digital marketing agency nyc",
    "digital marketing firms nyc",
    "top digital marketing agencies nyc",
    "digital advertising agency nyc",
    "seo agency new york",
    "google ads agency nyc",
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
    title: "Digital Marketing Agency NYC | New York Marketing Company",
    description:
      "Digital marketing for New York City businesses — local SEO, GBP, Google Ads and web design across all five boroughs.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "NYC Digital Marketing", url: PAGE_PATH },
]);

const professionalServiceJsonLd = buildLocalBusinessJsonLd({
  pageUrl: PAGE_PATH,
  areaServed: { type: "City", name: "New York" },
});

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in New York City",
  serviceType: "Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Full-service digital marketing for New York City businesses — local SEO and Google Business Profile optimization, Google Ads management, and conversion-focused web design, measured against calls and booked revenue.",
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
    name: "Small and mid-size businesses across the five boroughs",
  },
};

const NycDmFaqs = [
  {
    question: "What does digital marketing cost for an NYC business?",
    answer:
      "It scales with borough competition and the channels you run. A single-location local SEO program costs less than a combined SEO + Ads program with meaningful ad spend. Every engagement is quoted flat after a free audit that benchmarks your actual neighborhood competition — no percentage-of-spend pricing and no long-term contracts.",
  },
  {
    question: "Why does borough-level targeting matter so much in New York?",
    answer:
      "A citywide campaign in New York is five different markets wearing one budget. Search behavior, competition, and cost per click all change between Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. We scope each borough — often each neighborhood cluster — as its own campaign, then let the winners take more of the budget.",
  },
  {
    question: "SEO or Google Ads first for a New York business?",
    answer:
      "Usually both, staged: Ads produce leads and search-term data immediately while local SEO compounds toward free traffic. If budget forces a choice, we pick based on your market's Map Pack difficulty — the audit makes that call with data rather than preference.",
  },
  {
    question: "Do you work with small businesses or only larger NYC companies?",
    answer:
      "Mostly small and mid-size service businesses: contractors, practices, firms, restaurants, and shops. The program is designed for owners who need the phone to ring, not enterprise brand teams — and it is reported in calls and booked revenue, not impressions.",
  },
  {
    question: "How do you handle NYC's expensive click prices in Google Ads?",
    answer:
      "Waste-cutting is the core skill at New York prices. We run tightly themed campaigns with negative-keyword discipline, landing pages matched to each search intent, and weekly pruning — because a single leaking search term can eat a week of budget in Manhattan.",
  },
  {
    question: "Can you fix a suspended Google Business Profile in NYC?",
    answer:
      "Yes — GBP reinstatement is our flagship service, with 700+ recoveries handled. NYC profiles face the country's heaviest enforcement, and recovery plus compliance hardening is often the first step of our NYC engagements.",
  },
  {
    question: "Do you need to be based in NYC to do this well?",
    answer:
      "No — most agencies ranking NYC businesses are not on Fifth Avenue either. Execution quality and borough-level strategy decide outcomes; both are location-independent, and video strategy calls run whenever you want them.",
  },
  {
    question: "Are digital marketing agencies worth it for a small NYC business?",
    answer:
      "They are when the agency works the channels that capture demand rather than the ones that look busy. For a small New York business that means the Google Map Pack, Google Ads on high-intent searches and a website that converts on a phone. An agency that reports in calls and booked appointments pays for itself; one that reports in impressions usually does not. Zonic Media's NYC program is priced flat, month to month, and reported in leads.",
  },
];

const nycDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: NycDmFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const data: PhlLandingData = {
  hero: {
    eyebrow: "Digital Marketing Agency in NYC",
    h1Start: "NYC Digital Marketing That",
    h1Highlight: "Drives Calls",
    h1End: "in Every Borough",
    sub: (
      <>
        Zonic Media runs digital marketing for New York City businesses that
        need calls, bookings, and walk-ins — not brand decks. Local SEO,
        Google Business Profile, Google Ads, and conversion-first web design
        operate as one program with one strategy and one report, tuned to how
        New Yorkers actually search, borough by borough.
      </>
    ),
    media: {
      src: "/images/geo/nyc-digital-marketing/nyc-digital-marketing-strategy.jpg",
      alt: "New York business owner and strategist reviewing a digital marketing plan",
    },
    floatA: {
      strong: "5 boroughs",
      text: "one integrated growth program",
    },
    floatB: { strong: "+118% leads", text: "typical first-year growth" },
    stats: [
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "100+",
        label: "Brands scaled since launch",
      },
      {
        icon: <FaStar aria-hidden="true" />,
        num: "4.9/5",
        label: "Average client rating on Clutch",
      },
      {
        icon: <FiClock aria-hidden="true" />,
        num: "1,500+",
        label: "Google profiles optimized",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        num: "100%",
        label: "In-house — nothing outsourced",
      },
    ],
    proof: "by the businesses we grow",
    cta: "Get Your Free NYC Marketing Audit",
  },
  about: {
    eyebrow: "The New York Opportunity",
    h2Start: "The Biggest Market in the Country.",
    h2Highlight: "The Most Wasted Budgets, Too.",
    leads: [
      <>
        Eight and a half million people start their buying decisions the same
        way — a search on a phone, a glance at the map results, a call to one
        of the first businesses listed. New York&apos;s demand is enormous,
        but so is the waste: NYC businesses burn more marketing budget than
        anywhere else, mostly on channels that never connect to each other.
      </>,
      <>
        Our job is to make the demand land on you — through dedicated{" "}
        <Link href="/services/nyc/local-seo" className="phl-inline-link">
          NYC local SEO
        </Link>{" "}
        and a properly built Google Business Profile, paid search geo-fenced
        to the blocks that convert, and pages that actually ask for the call.
        Every channel tracked, every lead attributed, every month reported in
        language you can act on.
      </>,
    ],
    checks: [
      "Borough-level campaign scoping",
      "One team across every channel",
      "Calls & revenue reporting",
      "Month-to-month terms",
    ],
    collageA: {
      src: "/images/geo/nyc-digital-marketing/nyc-storefront-marketing-consultation.jpg",
      alt: "Marketing consultant meeting an independent shop owner in New York City",
    },
    collageB: {
      src: "/images/geo/nyc-digital-marketing/nyc-multichannel-marketing-dashboard.jpg",
      alt: "Multichannel local marketing performance dashboard on a laptop",
    },
    badgeText: "New York City Marketing • Zonic Media •",
  },
  services: {
    eyebrow: "What We Do",
    h2: "Every Channel an NYC Business Needs, Under One Roof",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Local SEO & Map Pack Rankings",
        desc: (
          <>
            Neighborhood-targeted rankings and Map Pack visibility across the
            five boroughs — the full system lives on our{" "}
            <Link href="/services/nyc/local-seo" className="phl-inline-link">
              NYC local SEO
            </Link>{" "}
            page.
          </>
        ),
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile",
        desc: (
          <>
            Optimization, reviews, posts, and Q&amp;A — plus{" "}
            <Link
              href="/services/gmb-reinstatement-help"
              className="phl-inline-link"
            >
              suspension recovery
            </Link>
            , critical in NYC&apos;s enforcement-heavy market.
          </>
        ),
      },
      {
        tone: "blue",
        icon: <FiTarget aria-hidden="true" />,
        title: "Google Ads & Local Services Ads",
        desc: (
          <>
            High-intent campaigns geo-fenced to the blocks that convert, with
            weekly waste-cutting — see how we run{" "}
            <Link href="/services/google-ads" className="phl-inline-link">
              Google Ads
            </Link>
            . Your spend goes straight to Google, never marked up.
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
            <Link href="/services/web-design" className="phl-inline-link">
              websites
            </Link>{" "}
            that load on flaky subway connections and put the call button
            where a thumb lands.
          </>
        ),
      },
      {
        tone: "blue",
        icon: <FiFileText aria-hidden="true" />,
        title: "Content & AI Search Visibility",
        desc: "Service and neighborhood content that ranks in Google and gets cited in the AI answers New Yorkers increasingly trust.",
      },
      {
        tone: "gold",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Tracking & Attribution",
        desc: "Every call and form attributed to the channel that earned it. One monthly report across SEO, ads, and the site — readable in five minutes.",
      },
    ],
  },
  band: {
    eyebrow: "One System, Not Six Invoices",
    h2: "Channels That Feed Each Other, Not Fight for Credit",
    leads: [
      <>
        Ads produce search-term data that sharpens the SEO targeting. SEO
        lowers the blended cost per lead as rankings arrive. The site turns
        both traffic streams into calls. Run separately by three vendors,
        those hand-offs never happen — run as one program, they compound.
      </>,
      <>
        That is the whole pitch: one team, one strategy, one report, priced
        flat after a free audit. And because we specialise in local service
        businesses, the program is built for owners who measure marketing in
        booked jobs — not impressions.
      </>,
    ],
    cta: "Get Your Growth Plan",
    console: {
      title: "NYC Growth Console",
      tag: "After 6 months",
      metrics: [
        { strong: "3.4×", label: "Return on ad spend" },
        { strong: "#1", label: "Map pack rank" },
        { strong: "-38%", label: "Cost per lead" },
      ],
      barsLabel: "Channel contribution",
      bars: [
        { label: "Local SEO & Map Pack", val: 88, tone: "blue" },
        { label: "Google Ads", val: 76, tone: "gold" },
        { label: "Website conversion", val: 91, tone: "blue" },
        { label: "Review & reputation", val: 82, tone: "gold" },
      ],
      pills: [
        { icon: "pin", text: "Brooklyn · #1" },
        { icon: "pin", text: "Manhattan · top 3" },
        { icon: "star", text: "4.9 · 240 reviews" },
      ],
    },
  },
  process: {
    eyebrow: "How It Works",
    h2: "From Scattered Spend to One Growth Engine",
    steps: [
      {
        tag: "Week 1",
        title: "Free NYC Marketing Audit",
        desc: "We map your visibility, your profile, your ad account (if you run one), and your competitors across your borough — and show you where the budget is leaking.",
      },
      {
        tag: "Weeks 2–4",
        title: "Strategy & Foundation",
        desc: "A borough-scoped plan across SEO, ads, and the site, then the foundation work: profile optimization, tracking setup, and the fixes that stop the waste first.",
      },
      {
        tag: "Every month",
        title: "Compound Every Channel",
        desc: "Rankings build, ads sharpen, pages convert better — each channel feeding the others, reported together so you see the whole picture.",
        chips: ["SEO compounding", "Weekly ad pruning", "CRO iterations"],
      },
      {
        tag: "Ongoing",
        title: "Report, Reallocate, Expand",
        desc: "Monthly reporting in calls and revenue. Winning boroughs and services get more budget; new neighborhoods come online as rankings lock in.",
        chips: ["Plain-English report", "Budget reallocation", "New boroughs"],
      },
    ],
    visualTitle: "Where NYC clients typically land after 90 days",
    visualBars: [
      { label: "Tracking coverage", val: 100 },
      { label: "Profile strength", val: 92 },
      { label: "Ad waste eliminated", val: 84 },
    ],
    ctaPrimary: "Start With the Audit",
  },
  results: {
    eyebrow: "Real Results",
    h2: "What an Integrated NYC Program Produces",
    lead: "Different boroughs, different industries — the same system, executed month after month.",
    cards: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        industry: "Contractor · Queens",
        metric: "+164%",
        label: "Booked jobs in year one",
        desc: (
          <>
            Local SEO won the Map Pack while Ads covered the gap — the same
            playbook as our{" "}
            <Link
              href="/services/local-seo-for-home-services"
              className="phl-inline-link"
            >
              home services program
            </Link>
            , scaled to New York competition.
          </>
        ),
      },
      {
        icon: <RiSearchLine aria-hidden="true" />,
        industry: "Medical practice · Manhattan",
        metric: "3.4×",
        label: "Return on ad spend",
        desc: "Tightly themed campaigns, intent-matched landing pages, and weekly pruning turned an unprofitable ad account into the practice's best channel.",
      },
      {
        icon: <FiMapPin aria-hidden="true" />,
        industry: "Multi-location service · Brooklyn",
        metric: "-38%",
        label: "Blended cost per lead",
        desc: "As SEO rankings locked in across neighborhoods, paid spend shifted to the categories where ads outperform — the integration doing exactly what it should.",
      },
    ],
  },
  showcase: {
    image: {
      src: "/images/geo/nyc-digital-marketing/nyc-business-district.jpg",
      alt: "Street-level view of businesses and commuters in a New York business district",
    },
    floats: [
      { num: "3.4×", label: "Average return on ad spend" },
      { num: "#1", label: "Map pack across 6 neighborhoods" },
      { num: "-38%", label: "Blended cost per lead" },
    ],
  },
  compare: {
    h2: "Zonic vs. a Typical NYC Marketing Agency",
    lead: "Local growth for local businesses is all we do, and it shows. Here is what working with an integrated team looks like.",
    themTitle: "Typical NYC Agency",
    themSub: "Why most programs quietly burn budget",
    them: [
      "Separate vendors for SEO, ads, and the website",
      "Citywide campaigns ignoring borough economics",
      "Percentage-of-spend pricing that rewards waste",
      "Reports full of impressions, empty of revenue",
      "12-month contracts before you see a single lead",
    ],
    usTitle: "Digital Marketing with Zonic Media",
    usSub: "Built to compound, reported like a P&L",
    us: [
      "One team across SEO, ads, web, and content",
      "Borough-by-borough scoping and budget flow",
      "Flat pricing quoted after a free audit",
      "Reporting tied to calls, forms, and booked revenue",
      "Month-to-month — results keep you, not paperwork",
    ],
    scoreTitle: "Program Scorecard",
    scoreSub: "A typical NYC client's first six months",
    scoreRows: [
      { label: "Tracking coverage", before: 35, after: 100 },
      { label: "Map pack visibility", before: 18, after: 84 },
      { label: "Ad efficiency", before: 42, after: 87 },
      { label: "Site conversion", before: 31, after: 78 },
    ],
  },
  why: {
    h2: "A Growth Partner, Not a Monthly Invoice",
    lead: "Leads are the output. The inputs are strategy, execution, and accountability — and that is what you are actually buying.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Local is the whole practice",
        desc: (
          <>
            We are not a brand agency dabbling in local. Local rankings, local
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
        title: "Built for NYC Economics",
        desc: "At New York click prices and rent, wasted spend hurts more. Borough-level scoping, weekly ad pruning, and conversion-first pages keep every dollar accountable.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Transparent to a Fault",
        desc: "You own every account and asset. You see every change in the monthly report. If a number dips you hear it from us first, with the fix already moving.",
      },
    ],
    banner: {
      eyebrow: "Free NYC Marketing Audit",
      h3: "See Exactly Where Your Budget Should Go",
      p: "We map your visibility, your profile, and your competitors across your borough — then send back a prioritized, priced plan across SEO, ads, and your site. Free, and yours to keep either way.",
      checks: [
        "Borough-level competitive map",
        "Channel-by-channel plan",
        "Ad waste findings",
        "Flat-price quote",
      ],
      cta: "Claim Your Free Audit",
      audit: {
        title: "Growth Readiness Score",
        tag: "After 6 months",
        score: "91",
        grade: "Excellent",
        gradeDesc:
          "Where our integrated NYC programs typically land after six months of compounding work",
        rows: [
          { label: "Tracking & attribution", flag: "100% coverage" },
          { label: "Map pack visibility", flag: "Top 3" },
          { label: "Ad efficiency", flag: "Waste cut weekly" },
        ],
      },
    },
  },
  marquee: [
    "NYC Digital Marketing",
    "Local SEO",
    "Google Ads",
    "Web Design",
    "Manhattan",
    "Brooklyn",
    "Queens",
    "The Bronx",
    "Staten Island",
  ],
  engine: {
    eyebrow: "Everything Working Together",
    h2: "Six Channels, One Growth Engine",
    lead: (
      <>
        Growth in New York is not one channel, it is six working at once —
        from the Financial District up through Harlem and out across Brooklyn,
        Queens, the Bronx, and Staten Island. Skip any of them and the
        competitors in your borough notice. Start with{" "}
        <Link href="/services/nyc/local-seo" className="phl-inline-link">
          NYC local SEO
        </Link>{" "}
        if organic is the priority.
      </>
    ),
    coreStrong: "Your NYC business",
    coreSub: "Every channel · one strategy · one report",
    coreCta: "Get Your Free Audit",
    nodes: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        title: "Local SEO",
        outcome: "Map Pack won",
        tone: "blue",
        left: "50%",
        top: "7%",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Business Profile",
        outcome: "Google trusts it",
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
        icon: <FiLayout aria-hidden="true" />,
        title: "Web Design",
        outcome: "Visits convert",
        tone: "gold",
        left: "50%",
        top: "93%",
      },
      {
        icon: <FiFileText aria-hidden="true" />,
        title: "Content",
        outcome: "Rank + AI cited",
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
    chipsLabel: "Growing New York businesses in",
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
    h2: "Straight Answers About Marketing in New York City",
    lead: "Pricing, channel choice, borough strategy, and what an integrated program actually costs. If your question is not here, send it through the form — a strategist answers, not a sales script.",
    cta: "Ask About Your Borough",
    items: NycDmFaqs,
  },
  grow: {
    eyebrow: "Go Deeper",
    h2: "The Channels, Up Close",
    lead: (
      <>
        Each discipline has its own dedicated page — start where your biggest
        gap is, or let the{" "}
        <Link href="/contact-us" className="phl-inline-link">
          free audit
        </Link>{" "}
        decide for you.
      </>
    ),
    cards: [
      {
        href: "/services/nyc/local-seo",
        icon: <FiMapPin aria-hidden="true" />,
        title: "NYC Local SEO",
        desc: "Borough-level rankings and Map Pack visibility, block by block.",
        cta: "See NYC local SEO",
      },
      {
        href: "/services/google-ads",
        icon: <FiTarget aria-hidden="true" />,
        title: "Google Ads Management",
        desc: "Paid search with weekly waste-cutting discipline, built for NYC click prices.",
        cta: "See Google Ads",
      },
      {
        href: "/services/gmb-reinstatement-help",
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Profile Reinstatement",
        desc: "Suspended listing? The first thing to fix in NYC's enforcement-heavy market.",
        cta: "Get reinstated",
      },
    ],
  },
  form: {
    eyebrow: "Get Started",
    h2: "Claim Your Free NYC Marketing Audit",
    lead: "Tell us about your business and we will map your visibility, your profile, and your competitors across your borough — then send a prioritized, flat-priced growth plan.",
    formType: "nyc-digital-marketing",
    badge: "Free Audit",
    title: "Get Your Free NYC Marketing Audit",
    subtitle:
      "No contracts, no pressure — just a clear picture of where your market is and what it takes to win it.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your services, the boroughs you serve, what you're running today, and what you'd like to improve",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nycDmFaqJsonLd) }}
      />
      <PhlLocationLanding data={data} />
    </>
  );
}

export default Page;
