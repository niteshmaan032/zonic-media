/*
 * TAMPA DIGITAL MARKETING — new live page (18 Nov 2026), a city page in the
 * Florida silo under /services/florida/digital-marketing. Built on the
 * location template shared with the Delaware, Philadelphia, NYC and Florida
 * pages (src/components/rd/delaware/DelawareLanding.tsx) with this page's
 * own UI (flTampaUi.tsx). Brief: docs/florida-cities-brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-cities-
 * keywords-2026-11.md): digital marketing tampa fl 1,300 (KD 28) · tampa
 * digital marketing agency 880 (KD 38) · digital marketing tampa 1,600
 * (KD 40) · digital marketing agency tampa 1,300 (KD 48) · digital marketing
 * services tampa 480 · tampa digital marketing 720. Secondary (H2/H3, FAQ,
 * body only): seo company tampa 1,000 · seo tampa 880 · local seo tampa 720
 * · web design tampa 880 · ppc tampa 390 · google ads agency tampa 260 ·
 * social media marketing tampa 320 · tampa bay marketing agency 50 ·
 * digital marketing tampa bay 40.
 *
 * Cannibalization: this page owns "Tampa Bay"; St. Petersburg owns
 * "Pinellas" and "St. Pete" as terms (Pinellas appears here only as the
 * other side of the bay). No "florida digital marketing agency" head term
 * (the hub's). Fresh wording only; company-wide verified numbers only; no
 * Tampa office is implied (we serve Tampa remotely).
 */

import type { Metadata } from "next";
import Link from "next/link";
import { DelawareLanding } from "@/components/rd/delaware/DelawareLanding";
import type {
  DelawareData,
  DelawareExtras,
} from "@/components/rd/delaware/types";
import type { HubApp } from "@/components/rd/dfw-kit/hub";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import {
  FiAnchor,
  FiBarChart2,
  FiCompass,
  FiLayout,
  FiMapPin,
  FiMessageSquare,
  FiRotateCcw,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import {
  SiApple,
  SiFacebook,
  SiGoogle,
  SiGoogleads,
  SiGooglemaps,
  SiInstagram,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";

const PAGE_PATH = "/services/tampa/digital-marketing";
const HUB_PATH = "/services/florida/digital-marketing";

const TITLE = "Tampa Digital Marketing Agency | Digital Marketing Tampa FL";

const DESCRIPTION =
  "Digital marketing in Tampa, FL for local businesses: local SEO, Google Ads, web design and AI search, planned by neighborhood across Hillsborough and Tampa Bay.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "tampa digital marketing agency",
    "digital marketing tampa fl",
    "digital marketing tampa",
    "digital marketing agency tampa",
    "digital marketing services tampa",
    "tampa digital marketing",
    "digital marketing tampa bay",
    "tampa bay marketing agency",
    "seo company tampa",
    "local seo tampa",
    "web design tampa",
    "ppc tampa",
    "social media marketing tampa",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/tampa-digital-marketing-agency.webp",
        width: 1600,
        height: 900,
        alt: "Tampa digital marketing illustration with SEO, PPC and social media icons, a performance dashboard and the downtown Tampa skyline",
      },
    ],
    title: TITLE,
    description:
      "Local SEO, Google Ads, websites and AI search for Tampa businesses, planned around Hillsborough neighborhoods and the Tampa Bay calendar.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: HUB_PATH },
  { name: "Tampa Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in Tampa, FL",
  serviceType: "Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description: DESCRIPTION,
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "City",
    name: "Tampa",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Tampa and Hillsborough County",
  },
};

const TampaDmFaqs = [
  {
    question: "How much is digital marketing in Tampa each month?",
    answer:
      "Our plans run $297, $950 or $1,500 a month, with no long contract. Ad spend is billed to you by Google or Meta and we never mark it up. The free audit tells you which tier fits your trade and your corner of Hillsborough.",
  },
  {
    question: "Is there a Zonic Media office in Tampa?",
    answer:
      "No. We work remotely and hold Tampa client meetings over video. Rankings, ads and websites come from consistent work and honest reporting, not a street address, and a written report lands in your inbox monthly.",
  },
  {
    question: "Which parts of Tampa and Hillsborough do you cover?",
    answer:
      "All of Hillsborough County, including South Tampa, Westshore, Downtown, Ybor City, Seminole Heights, Carrollwood, Temple Terrace, Brandon, Riverview and Plant City, plus Wesley Chapel and Land O’ Lakes in Pasco. Campaigns target only the ZIP codes you actually serve.",
  },
  {
    question: "Should a Tampa company start with local SEO or PPC?",
    answer:
      "PPC in Tampa can bring calls within days and shows which searches turn into jobs. Local SEO earns Map Pack spots that go on bringing calls with no per-click charge. We usually pair them: ads for quick demand, SEO for steady growth over the year.",
  },
  {
    question: "Can you also handle web design for my Tampa business?",
    answer:
      "Yes. Our sites load quickly on phones, keep a call button on every screen and include booking forms plus dedicated service and neighborhood pages, typically live within two to three weeks. If your current site works, we improve the pages that matter instead of starting over.",
  },
  {
    question: "How do Gasparilla and hurricane season affect Tampa marketing?",
    answer:
      "Gasparilla in late January changes traffic, opening hours and event searches, so restaurants, bars and shops should post early. From June through November, roofers, tree crews and restoration companies need storm campaigns ready before a system is named. Both go on your calendar.",
  },
  {
    question: "Can you run social media marketing for a Tampa business?",
    answer:
      "Yes. We plan a monthly calendar for Facebook, Instagram and your Google profile around local moments, finished work and new reviews, and run Meta ads when they suit your offer. Social results sit in the same report as search, so you can judge what it adds.",
  },
  {
    question: "How can my Tampa business show up in ChatGPT answers?",
    answer:
      "AI assistants draw on your website, Business Profile, reviews and directory listings. We line those facts up, publish answer-first pages with schema, and review monthly how ChatGPT, Gemini, Perplexity and Google’s AI Overviews describe you when someone in Tampa asks for your service.",
  },
  {
    question: "How soon will a Tampa campaign bring in calls?",
    answer:
      "Google Ads and Local Services Ads can start ringing within days of launch. Map rankings and organic SEO usually take a few months to build, depending on your competition and reviews. Both show up in the same monthly report.",
  },
  {
    question: "What if Google suspends my Tampa business listing?",
    answer:
      "Don’t open a new listing; that tends to make things worse. Our team has reinstated 900+ suspended profiles; after a reinstatement we hold the categories, service areas and details inside Google’s guidelines.",
  },
];

const tampaDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: TampaDmFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/* ---------------------------------------------------------------- content */

// The owner's photo fills the about box (extras.aboutPhoto); the collage
// slots aren't shown on this layout.
const NO_PHOTO = { src: "", alt: "" };

const hubLeft: HubApp[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: SiGoogleads, name: "Google Ads", tone: "googleads" },
];
const hubRight: HubApp[] = [
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiPerplexity, name: "Perplexity", tone: "perplexity" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Tampa Digital Marketing Agency",
    h1Highlight: "for Businesses Across Tampa Bay",
    sub: "Zonic Media runs digital marketing in Tampa, FL as one connected program: Google Maps rankings, Google Ads, a website that converts and a place in AI answers. Every plan follows your neighborhoods, from Westshore to Brandon, and the Tampa Bay calendar.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide verified numbers plus a public place count (Tampa–St. Petersburg–Clearwater metro: Hillsborough, Pinellas, Pasco, Hernando.)
    // No Tampa client results, and no ad-markup stat (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiUsers aria-hidden="true" />,
        num: "1",
        label: "In-house team running your ads, Maps, social and site",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <FiRotateCcw aria-hidden="true" />,
        num: "900+",
        label: "Suspended Google listings we’ve brought back",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "4",
        label: "Counties in the Tampa Bay metro",
      },
    ],
    proof: "",
    cta: "Request My Free Tampa Audit",
  },
  about: {
    eyebrow: "Digital marketing in Tampa, FL",
    h2Start: "Tampa Searches Change",
    h2Highlight: "From Westshore to Wesley Chapel.",
    leads: [
      <>
        A law office in Westshore, a pool builder in South Tampa and a plumber
        covering Brandon and Riverview need different searches, ads and map
        spots. As a Tampa digital marketing agency, we learn how your customers
        search in each part of town, then spend where calls are most likely.
      </>,
      <>
        A single in-house crew manages your Google profile, ads, website and AI
        visibility, and reports leads rather than clicks. For the statewide
        view, including the regions beyond Tampa Bay, see our{" "}
        <Link href={HUB_PATH} className="phl-inline-link">
          Florida digital marketing agency
        </Link>{" "}
        overview, which covers each region in turn.
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Tampa Digital Marketing Agency • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Digital Marketing Services for Tampa Businesses",
    lead: "Search, maps, ads, websites, social and AI answers for companies in Tampa, FL, with each channel feeding the next so more searches end in booked work.",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Tampa Local SEO, Neighborhood by Neighborhood",
        desc: "Need an SEO company in Tampa? Our local SEO begins with a fully built Business Profile, area pages and fresh reviews each month, lifting you up the map results.",
        points: [
          "Profile updates every week",
          "Rank checks by neighborhood",
          "A page for each area you serve",
        ],
        href: "/services/florida/local-seo",
        link: "Florida local SEO services",
      },
      {
        tone: "gold",
        icon: <FiTarget aria-hidden="true" />,
        title: "PPC and Google Ads Management in Tampa",
        desc: "Google Search and Local Services Ads pointed at your ZIP codes, with spend lifted ahead of busy months and wasted terms cut every week.",
        points: [
          "Campaigns by part of town",
          "Search terms pruned weekly",
          "Ad spend never marked up",
        ],
        href: "/services/florida/ppc",
        link: "Florida PPC management",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Tampa Websites Built to Win the Call",
        desc: "Fast, mobile-first websites with tap-to-call, booking forms and a page for every service, so visitors from Maps and ads turn into calls.",
        points: [
          "Designed for phones first",
          "Service and area pages",
          "Launched in 2–3 weeks",
        ],
        href: "/services/florida/web-design",
        link: "Florida web design",
      },
      {
        tone: "gold",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "AI Search and Answer Engines",
        desc: "When Tampa residents ask ChatGPT, Gemini or AI Overviews who to hire, matching facts, answer-first pages and schema help your name come up.",
        points: [
          "Pages that answer questions",
          "Schema and matching facts",
          "Monthly AI answer review",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
      {
        tone: "blue",
        icon: <FiUsers aria-hidden="true" />,
        title: "Instagram and Facebook Marketing for Tampa",
        desc: "Facebook, Instagram and Google posts built around local moments like Gasparilla and storm prep, with Meta ads added when they fit your offer.",
        points: [
          "A monthly content calendar",
          "Event and season posts",
          "Meta ads where they pay",
        ],
        href: "#de-contact",
        link: "Ask about social media",
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Reviews and Listing Protection",
        desc: "We ask happy customers for reviews as each job wraps, draft owner replies in your voice and step in fast if Google suspends you, with 900+ profiles reinstated.",
        points: [
          "Review asks after each job",
          "Owner replies drafted",
          "Suspension recovery",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Google profile reinstatement",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Leads From Both Sides of Tampa Bay, Measured Apart",
    leads: [
      <>
        Plenty of Tampa businesses also work across the Howard Frankland, Gandy
        and Courtney Campbell bridges. Your report splits calls, forms and
        direction requests between Hillsborough and Pinellas, so you know
        whether crossing the bay pays off.
      </>,
      <>
        Covering more of the Gulf coast or Central Florida? See{" "}
        <Link
          href="/services/st-petersburg/digital-marketing"
          className="phl-inline-link"
        >
          St. Petersburg digital marketing
        </Link>
        ,{" "}
        <Link
          href="/services/sarasota/digital-marketing"
          className="phl-inline-link"
        >
          digital marketing in Sarasota
        </Link>{" "}
        and our{" "}
        <Link
          href="/services/orlando/digital-marketing"
          className="phl-inline-link"
        >
          Orlando digital marketing agency
        </Link>{" "}
        plans.
      </>,
    ],
    cta: "Get My Tampa Bay Lead Report",
    // Sample report UI, not client data.
    console: {
      title: "Tampa Bay lead split",
      tag: "Sample report",
      metrics: [
        { strong: "3", label: "Bridges in the plan" },
        { strong: "2", label: "Counties compared" },
        { strong: "Weekly", label: "Rank checks by area" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "From First Audit to Booked Jobs in Tampa",
    steps: [
      {
        tag: "Week 1",
        title: "Size Up Your Tampa Search Market",
        desc: "We grade your profile, ads, site and reviews against the businesses holding the top map spots near you, and list each gap that costs you calls.",
      },
      {
        tag: "Weeks 2–4",
        title: "Match Every Tampa Search to a Page",
        desc: "Search terms are grouped by service and area, then sent to an ad group, a Maps update or a page, so no search ends on a dead end.",
      },
      {
        tag: "Weekly",
        title: "Launch With Each Call Tagged",
        desc: "Campaigns go live with tracking on calls, forms and directions. Every week we prune search terms, publish updates and answer reviews.",
        chips: ["Calls tagged", "Terms pruned", "Posts published"],
      },
      {
        tag: "Monthly",
        title: "Send the Budget Where Tampa Books",
        desc: "Your report splits booked jobs by neighborhood and channel, and we move spend toward what worked before the next busy stretch.",
        chips: ["Neighborhood report", "Next-month plan", "Budget shifts"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My Tampa Audit",
  },
  showcase: undefined,
  compare: {
    h2: "Joined-Up Marketing vs. a Patchwork Setup",
    lead: "Where Tampa marketing budgets usually slip away, and what we do instead.",
    themTitle: "Patchwork Setup",
    themSub: "Where the money leaks",
    them: [
      "Ads, SEO and site run by different people",
      "One campaign for all of Hillsborough",
      "No plan for Gasparilla or storm months",
      "Reports that stop at clicks",
      "A 12-month lock-in on day one",
    ],
    usTitle: "The Zonic Tampa Program",
    usSub: "Judged on booked work",
    us: [
      "Every channel under one plan",
      "Targeting by neighborhood and ZIP",
      "Lanes for events and storm season",
      "Leads traced from search to job",
      "Monthly terms, cancel anytime",
    ],
    scoreTitle: "Sample Tampa Tide Gauge",
    scoreSub: "Four signals our audit measures, shown as an example",
    scoreRows: [
      { label: "Neighborhood reach", before: 24, after: 80 },
      { label: "Season planning", before: 18, after: 86 },
      { label: "Call tracking", before: 35, after: 96 },
      { label: "AI answers", before: 12, after: 68 },
    ],
  },
  why: {
    h2: "Why Tampa Owners Pick Zonic Media",
    lead: "A single team answerable for calls and booked jobs, with no long contract.",
    cards: [
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "Ads, SEO and web in one place",
        desc: (
          <>
            Google Ads, local SEO and our{" "}
            <Link href="/services/web-design">website design services</Link>{" "}
            share one plan and one report.
          </>
        ),
      },
      {
        icon: <FiCompass aria-hidden="true" />,
        title: "Plans shaped by your trade",
        desc: (
          <>
            From{" "}
            <Link href="/services/hvac-marketing-agency/florida">
              Florida HVAC marketing
            </Link>{" "}
            to{" "}
            <Link href="/services/law-firm-marketing-agency">
              law firm marketing
            </Link>
            , built on how your buyers search.
          </>
        ),
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Monthly reports you can skim",
        desc: "Calls, forms and booked jobs by neighborhood, sent every month.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Your Free Tampa Search Audit Starts Here",
      p: "We review your Google profile, ads, website and nearby rivals, then send a plan for Tampa’s next busy stretch. It costs nothing and there’s nothing to sign.",
      checks: [
        "Ad waste spotted",
        "Neighborhood gaps mapped",
        "Listing risks flagged",
        "Season plan included",
      ],
      cta: "Claim My Free Tampa Audit",
      audit: {
        title: "",
        tag: "",
        score: "90",
        grade: "",
        gradeDesc: "",
        rows: [],
      },
    },
  },
  // Kept for the type; the platform hub takes the hub slot.
  engine: {
    eyebrow: "",
    h2: "",
    lead: null,
    coreStrong: "",
    coreSub: "",
    coreCta: "",
    nodes: [],
    chipsLabel: "Industries we grow in Tampa",
    chips: [
      "Pool Builders",
      "Plumbing & HVAC",
      "Gutters & Roofing",
      "Electricians",
      "Law Firms",
      "Med Spas & Clinics",
      "Dentists",
      "Painters",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "What Tampa Owners Ask Before Hiring Us",
    lead: "Pricing, coverage, seasons, AI search and timing, answered briefly.",
    cta: "",
    items: TampaDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Tampa Marketing Review",
    lead: "Tell us about your business and we’ll send an audit and a plan for the parts of Tampa you serve.",
    formType: "tampa-digital-marketing",
    badge: "Free Audit",
    title: "Your Free Tampa Marketing Review",
    subtitle: "About a minute to fill in, with no obligation.",
    submitText: "Get My Tampa Review",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "What you sell, the Tampa neighborhoods you cover, the marketing you run now and your busiest months",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-tampa",
  heroChips: {
    label: "Tampa Bay metro counties",
    items: ["Hillsborough", "Pinellas", "Pasco", "Hernando"],
  },
  aboutTitle: ["Tampa Searches Change", "From Westshore to", "Wesley Chapel."],
  // Owner photo (19 Nov 2026); the crop keeps the wall sign in view on
  // phones, where the box is narrower than the photo.
  aboutPhoto: {
    src: "/images/florida/tampa-digital-marketing-agency.webp",
    alt: "Tampa digital marketing illustration with SEO, PPC and social media icons, a performance dashboard and the downtown Tampa skyline",
    position: "left top",
  },
  aboutCard: {
    kicker: "Your Tampa program",
    title: "Handled by one team",
    points: [
      "Map Pack work for each neighborhood",
      "Google Ads and Local Services Ads",
      "Pages for every service and area",
      "AI answer checks and review replies",
    ],
    foot: "Run remotely, with video calls",
  },
  // Tampa palette: Gasparilla rose, sand, bay lilac, slate.
  pillars: ["#9f1239", "#fef3c7", "#e0e7ff", "#1f2937"],
  features: {
    h2: "Tampa Marketing Planned by Place, Season and Trade",
    lead: (
      <>
        Demand in Tampa shifts by neighborhood, by month and by trade. These
        three habits keep your budget where the calls are.
      </>
    ),
    items: [
      {
        label: "Neighborhoods",
        title: "Know Which Parts of Tampa Actually Call",
        body: "Searches from Westshore offices, South Tampa homes and the fast-growing suburbs of Brandon, Riverview and Wesley Chapel behave differently. We compare searches with calls in each area, then fix the places where people look but don’t phone.",
        points: [
          {
            t: "Area-level rank checks",
            d: "Map spots tracked by neighborhood.",
          },
          { t: "Search-to-call gaps", d: "Areas that look but don’t call." },
          { t: "Service-area pages", d: "One page per part of town." },
          {
            t: "A profile tuned by zone",
            d: "Categories, services and posts.",
          },
        ],
        href: "/local-seo-google-business-optimization",
        link: "See Business Profile optimization",
        ui: "city-1",
      },
      {
        label: "Seasons",
        title: "A Tampa Calendar From Gasparilla to Storm Season",
        body: (
          <>
            Gasparilla brings crowds and event searches in late January, spring
            lifts AC tune-ups and yard work, and June through November turns
            searches toward storm prep and repairs, which is why our{" "}
            <Link href="/services/roofing-marketing-agency">
              roofing marketing
            </Link>{" "}
            plans start in May. Each lane gets campaigns set weeks before demand
            peaks.
          </>
        ),
        points: [
          { t: "Event-week posts", d: "Gasparilla hours and offers." },
          { t: "Spring tune-up ads", d: "AC, pool and lawn demand." },
          { t: "Storm lanes by June", d: "Prep, then repair campaigns." },
          { t: "Holiday offers", d: "Gift cards and year-end slots." },
        ],
        href: "/services/google-ads",
        link: "See Google Ads management",
        ui: "city-2",
      },
      {
        label: "Trades",
        title: "Every Trade Lead Sorted Before It Goes Cold",
        body: (
          <>
            Pool builders, plumbers, gutter installers and electricians all
            compete hard for Tampa searches. We tag each call and form by trade,
            area and source so your office can call back fast. See{" "}
            <Link href="/services/plumbing-marketing-agency/florida">
              Florida plumbing marketing
            </Link>
            ,{" "}
            <Link href="/services/electrician-marketing-agency">
              electrician marketing
            </Link>{" "}
            and{" "}
            <Link href="/services/gutter-marketing-agency">
              gutter company marketing
            </Link>{" "}
            for trade plans.
          </>
        ),
        points: [
          {
            t: "Leads tagged by trade",
            d: "Pool, plumbing, gutters, electric.",
          },
          { t: "Area and source on each", d: "Maps, ads, site or AI." },
          { t: "Instant lead emails", d: "Sent the moment one lands." },
          { t: "Booked jobs counted", d: "Not just clicks or calls." },
        ],
        href: "/services/pool-service-marketing-agency",
        link: "See pool service marketing",
        ui: "city-3",
      },
    ],
  },
  platforms: {
    h2: "Where Tampa Customers Look Before They Call",
    lead: "Before picking up the phone, Tampa Bay customers search Google, compare pins on Google and Apple Maps, scroll Facebook and Instagram, and more and more ask ChatGPT or Perplexity. We keep your hours, services and reviews consistent on each one.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Search, maps and ads",
    rightLabel: "Social feeds and AI assistants",
    centerIcon: <FiAnchor aria-hidden="true" />,
    centerTitle: "Your Tampa business",
    centerSub: "listed right everywhere",
  },
  pricing: {
    title: "Tampa Marketing Plans, Priced Monthly",
    lead: "Monthly plans for Tampa businesses, from a Maps foundation to full ads, SEO and social.",
    compareTitle: "Which Tampa Plan Fits Your Business?",
    compareLead: "See what every tier includes.",
    addOnsTitle: "Extras for Growing Tampa Companies",
    addOnsLead: "Add neighborhoods, pages or campaigns as you grow.",
    customTitle: "Locations on both sides of the bay?",
    customText: "We’ll scope a plan for every location you run.",
  },
  phone: "city",
  darkUi: "city",
  scoreStyle: "city",
  noGrow: true,
  reviewsTitle: "In Our Clients’ Words",
  contact: {
    before: "Ready to Win More",
    after: "Tampa Customers?",
    lead: "Tell us what you do and which parts of Tampa Bay you serve. We’ll audit your ads, Google profile and website at no cost.",
  },
  stepLinks: [
    "#de-contact",
    "/services/florida/web-design",
    "/services/florida/ppc",
    "#de-contact",
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tampaDmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
