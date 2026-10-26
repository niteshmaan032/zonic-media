/*
 * REDESIGN DRAFT (23 Oct 2026) of /services/nyc/local-seo. Same canonical,
 * schema types and form type as the live page, which stays untouched.
 * Built on the Dallas–Fort Worth layout template
 * (src/components/rd/delaware/DelawareLanding.tsx, as the Delaware and
 * Philadelphia drafts) with this page's own UI (nycSeoUi.tsx).
 * Noindex until the owner approves it.
 *
 * COPY RE-OPTIMIZED 24 Oct 2026 (docs/content-optimization-brief.md): every
 * heading, sentence and FAQ rewritten (the earlier draft carried the live
 * FAQs word for word); invented results removed (hero +187% / 5×, the
 * "after 6 months" console, the client scorecard). Company-wide, verified
 * numbers only: 1,500+ profiles optimized, 900+ reinstated, 20+ industries,
 * 5.0 Google rating. Timelines (4–8 weeks to first Map Pack movement, 3–6
 * months for organic pages) are the ones /services/local-seo-for-small-
 * business already publishes.
 *
 * Live URL ranking terms (Semrush US resource_organic, 24 Oct 2026): local
 * seo services nyc #17 (480) · local seo optimization in nyc #20 (320) ·
 * local seo nyc company #27 (260) · local seo nyc #28 (720, KD 17) · new
 * york local seo services #39 (260) · local seo new york #40 (1,300, KD 24)
 * · local seo new york city #42 (320) · new york local seo #45 (880, KD 23)
 * · local seo company in new york #47 (260) · local seo company nyc #56
 * (390). Earlier research (23 Oct): brooklyn seo 720 (KD 24) · local seo
 * brooklyn 590 (KD 11) · local seo manhattan 110 · seo agency new york
 * 3,600 (KD 41, secondary).
 *
 * NYC silo: digital-marketing is the hub (broad "digital marketing agency
 * nyc" terms) and links down to local-seo and web-design; the children link
 * back with narrow anchors.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { DelawareLanding } from "@/components/rd/delaware/DelawareLanding";
import type {
  DelawareData,
  DelawareExtras,
} from "@/components/rd/delaware/types";
import type { HubApp } from "@/components/rd/dfw-kit/hub";
import {
  buildBreadcrumbJsonLd,
  SITE_URL,
} from "@/shared/seoSchemas";
import { FaMicrosoft } from "react-icons/fa";
import {
  FiAlertOctagon,
  FiBarChart2,
  FiFileText,
  FiLink2,
  FiMapPin,
  FiMic,
  FiShield,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";
import {
  SiAmazonalexa,
  SiApple,
  SiGoogleassistant,
  SiGooglemaps,
  SiOpenai,
  SiWaze,
} from "react-icons/si";

const PAGE_PATH = "/services/nyc/local-seo";

const TITLE = "Local SEO Services NYC | New York Local SEO Company";
const DESCRIPTION =
  "Local SEO services in NYC: Google Business Profile, reviews, citations and neighborhood pages that rank New York businesses in the Map Pack, borough by borough.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "local seo nyc",
    "local seo new york",
    "new york local seo",
    "local seo services nyc",
    "local seo company nyc",
    "local seo new york city",
    "local seo company in new york",
    "new york local seo services",
    "local seo optimization in nyc",
    "local seo brooklyn",
    "brooklyn seo",
    "local seo queens",
    "local seo manhattan",
    "google maps seo nyc",
  ],
  alternates: { canonical: PAGE_PATH },
  // Redesign draft: keep it out of the index until it replaces the live page.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: TITLE,
    description:
      "Map Pack rankings for New York businesses, planned by a local SEO consultant neighborhood by neighborhood and tracked by ZIP code.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "NYC Local SEO", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services in New York City",
  serviceType: "Local Search Engine Optimization",
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
    question: "What does a local SEO company do for NYC businesses?",
    answer:
      "It gets you into the Google Map Pack for the searches your customers make nearby. We complete and update your Business Profile, report spam competitors, grow genuine reviews, fix your directory listings, write neighborhood pages and track rankings by ZIP code. You own every account we work in.",
  },
  {
    question: "How fast can local SEO get results in New York City?",
    answer:
      "Expect first Map Pack movement in about 4 to 8 weeks after your categories, listings and reviews are cleaned up. Neighborhood and service pages climb more slowly in regular search, typically over 3 to 6 months, and the busiest Manhattan categories take longer still.",
  },
  {
    question: "How much are local SEO services in NYC?",
    answer:
      "Local SEO starts at $297 a month, with $750 and $1,500 plans for busier categories, all on month-to-month terms. Which one fits depends on how crowded your category and neighborhoods are, and the free audit shows that before you choose.",
  },
  {
    question: "How do I get my business into the Google Map Pack in NYC?",
    answer:
      "Google ranks local results on relevance, distance and prominence, and you can’t pay for a better spot. So we sharpen relevance with the right categories and services, cover distance with neighborhood pages, and build prominence with reviews, local links and accurate listings.",
  },
  {
    question: "Can one business rank in more than one borough?",
    answer:
      "In organic results, yes: give each borough you serve its own strong page. The Map Pack favors businesses close to the searcher, so a Queens address won’t top Manhattan searches by itself. We win Maps near your location first, then widen your reach with pages, reviews and service areas.",
  },
  {
    question: "Can you get fake listings that outrank me removed?",
    answer:
      "We can report them properly. Keyword-stuffed names, fake addresses and duplicate listings break Google’s rules, so we document each one and submit it through Google’s official channels. Google makes the final call, but cleared spam often frees up room for genuine local businesses.",
  },
  {
    question:
      "What should I do if my NYC Google Business Profile is suspended?",
    answer:
      "Don’t create a new listing; that usually makes things worse. We’ve reinstated 900+ suspended profiles, so we know what Google asks for. We find the cause, prepare the evidence Google asks for, file the appeal and harden your profile against the next sweep.",
  },
  {
    question:
      "Can local SEO get my business named by ChatGPT and AI Overviews?",
    answer:
      "Yes, it lays the groundwork. AI tools build local recommendations from your Google profile, reviews, website and directory listings, so consistent details and clear service pages make you easier to name. We check what ChatGPT, Gemini and Google’s AI Overviews say about you every month.",
  },
  {
    question: "Is local SEO worth it if I already pay for Google Ads?",
    answer:
      "Usually, yes. Ads stop the moment the budget does, while Map Pack and organic rankings keep bringing calls without a cost per click. Many businesses run both, then lean more on SEO as rankings grow and lower their blended cost per lead.",
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

/* ---------------------------------------------------------------- content */

const hubLeft: HubApp[] = [
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: SiWaze, name: "Waze", tone: "waze" },
  { icon: FaMicrosoft, name: "Bing Places", tone: "bing" },
];
const hubRight: HubApp[] = [
  { icon: SiGoogleassistant, name: "Google Assistant", tone: "assistant" },
  { icon: SiAmazonalexa, name: "Alexa", tone: "alexa" },
  { icon: FiMic, name: "Siri", tone: "indigo" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "NYC Local SEO Company",
    h1Highlight: "Ranking New York Businesses on Google Maps",
    sub: "We put New York businesses in the Map Pack with a complete Google profile, spam competitors reported, steady reviews and neighborhood pages that rank from Astoria and the Upper West Side to Park Slope. Every result is tracked by ZIP code.",
    media: {
      src: "/images/geo/nyc-local-seo/nyc-local-seo-storefront-owner.webp",
      alt: "New York storefront owner checking local search visibility on a phone",
    },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide, verified numbers only (no NYC client results).
    stats: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "1,500+",
        label: "Business profiles tuned for Map Pack reach",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        num: "900+",
        label: "Suspended profiles brought back",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "20+",
        label: "Local industries we rank",
      },
    ],
    proof: "",
    cta: "Audit My NYC Rankings",
  },
  about: {
    eyebrow: "Local SEO in New York City",
    h2Start: "Map Pack Results Change",
    h2Highlight: "Every Few Blocks.",
    leads: [
      <>
        Search for a dentist in Williamsburg, then two miles away in Park Slope,
        and Google shows different businesses. We plan your local SEO around the
        exact neighborhoods you serve and clear out the spam listings crowding
        them.
      </>,
      <>
        A dedicated strategist works on your profile every week and reports
        calls and rankings by ZIP code each month. Need leads before rankings
        land? Our{" "}
        <Link
          href="/services/nyc/digital-marketing"
          className="phl-inline-link"
        >
          New York digital marketing
        </Link>{" "}
        team can run Google Ads in the meantime.
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/geo/nyc-local-seo/nyc-near-me-mobile-search.webp",
      alt: "Near me mobile search used on a New York neighborhood street",
    },
    collageB: {
      src: "/images/geo/nyc-local-seo/nyc-map-pack-rankings-dashboard.webp",
      alt: "Neighborhood Map Pack rankings dashboard for New York City",
    },
    badgeText: "Local SEO NYC • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Local SEO Services That Move NYC Rankings",
    lead: "The hands-on work behind Map Pack gains in a city where the next competitor is a block away.",
    cards: [
      {
        tone: "blue",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Complete Profile Buildout",
        desc: "Categories, services, photos and weekly posts filled in completely, so Google can match you to more nearby searches.",
        points: [
          "Primary and extra categories",
          "All services listed",
          "Fresh posts every week",
        ],
        href: "/local-seo-google-business-optimization",
        link: "Business Profile optimization",
      },
      {
        tone: "gold",
        icon: <FiAlertOctagon aria-hidden="true" />,
        title: "Spam Listing Removal",
        desc: "Fake and keyword-stuffed competitors reported to Google with evidence, so genuine businesses like yours can rise.",
        points: [
          "Fake listings reported",
          "Edits to your profile watched",
          "Ranks rechecked after removals",
        ],
        href: "#de-contact",
        link: "Ask about spam removal",
      },
      {
        tone: "blue",
        icon: <FiFileText aria-hidden="true" />,
        title: "Neighborhood Service Pages",
        desc: "A genuinely useful page for each area and service, written the way locals search for it.",
        points: [
          "One page per neighborhood",
          "Local photos and proof",
          "Linked from your profile",
        ],
        href: "/services/nyc/web-design",
        link: "Web design in NYC",
      },
      {
        tone: "gold",
        icon: <FiStar aria-hidden="true" />,
        title: "Review Growth & Replies",
        desc: "A steady stream of genuine reviews that mention the service and the neighborhood, with replies drafted for you.",
        points: [
          "Requests sent by text",
          "Replies within a day",
          "Link on every invoice",
        ],
        href: "/services/local-seo-for-home-services",
        link: "Local SEO for home services",
      },
      {
        tone: "blue",
        icon: <FiLink2 aria-hidden="true" />,
        title: "NYC Citations & Local Links",
        desc: "Matching name, address and phone across directories, plus links from neighborhood sites and business groups.",
        points: [
          "Directory listings cleaned",
          "Duplicates merged",
          "Local links earned monthly",
        ],
        href: "/services/seo-services",
        link: "Our SEO services",
      },
      {
        tone: "gold",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "ZIP-Level Rank Reports",
        desc: "Map Pack positions by ZIP code, plus calls and direction requests, summed up in a plain-English monthly report.",
        points: [
          "ZIP-code rankings",
          "Calls and directions counted",
          "Next steps every month",
        ],
        href: "#de-contact",
        link: "See a sample report",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Profile Calls and Directions, Counted Monthly",
    leads: [
      <>
        Rankings only pay when they ring the phone. We track the calls,
        direction requests and website clicks your Business Profile earns, and
        show the trend every month.
      </>,
      <>
        Want ads and social in one plan? See our{" "}
        <Link
          href="/services/nyc/digital-marketing"
          className="phl-inline-link"
        >
          NYC marketing services
        </Link>
        . Profile suspended? Our{" "}
        <Link
          href="/services/gbp-reinstatement-service"
          className="phl-inline-link"
        >
          Business Profile reinstatement
        </Link>{" "}
        specialists have brought back 900+ listings.
      </>,
    ],
    cta: "Check My Profile Results",
    // Sample report UI, not client data.
    console: {
      title: "Profile insights",
      tag: "Sample report",
      metrics: [
        { strong: "Calls", label: "Tracked from your profile" },
        { strong: "Top 3", label: "Map Pack goal by ZIP" },
        { strong: "Monthly", label: "Plain-English report" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "Our Four-Step Plan for the NYC Map Pack",
    steps: [
      {
        tag: "Week 1",
        title: "Block-by-Block Audit",
        desc: "We grid-check your rankings across your neighborhoods, review your profile and site, and flag the spam listings in your category.",
      },
      {
        tag: "Weeks 2–4",
        title: "Clean Up the Basics",
        desc: "Categories, citations, page titles and markup corrected first, so every later step builds on accurate data.",
      },
      {
        tag: "Monthly",
        title: "Grow Reviews and Links",
        desc: "Review requests, new neighborhood pages and local links each month, plus fresh posts on your profile every week.",
        chips: ["Reviews", "Local links", "Profile posts"],
      },
      {
        tag: "Ongoing",
        title: "Win the Next Neighborhood",
        desc: "Once one area holds the top three, the plan extends to the next neighborhood and borough.",
        chips: ["Next borough", "ZIP tracking", "Monthly report"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Audit My NYC Rankings",
  },
  showcase: undefined,
  compare: {
    h2: "Weekly Local SEO vs. a Set-and-Forget Agency",
    lead: "What hands-on work changes for a New York business.",
    themTitle: "Set-and-Forget SEO",
    themSub: "Why NYC rankings stall",
    them: [
      "One citywide page for every borough",
      "Spam competitors ignored",
      "Profile updated once a quarter",
      "Rankings reported, calls ignored",
      "A year-long contract up front",
    ],
    usTitle: "Zonic Media Local SEO",
    usSub: "Hands-on, week after week",
    us: [
      "A plan for each neighborhood",
      "Spam listings reported to Google",
      "Weekly posts and profile updates",
      "Calls and directions in every report",
      "Month-to-month plans",
    ],
    scoreTitle: "Sample Map Pack Scorecard",
    scoreSub: "Illustration of the signals our audit grades",
    scoreRows: [
      { label: "Profile completeness", before: 30, after: 92 },
      { label: "Listing consistency", before: 41, after: 95 },
      { label: "Review pace", before: 24, after: 82 },
      { label: "Map Pack coverage", before: 14, after: 84 },
    ],
  },
  why: {
    h2: "A Local SEO Agency You Can Watch Working",
    lead: "The work, the rankings and the calls, visible every month.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Local search, full stop",
        desc: "Map Pack rankings and calls for local businesses are our focus.",
      },
      {
        icon: <FiShield aria-hidden="true" />,
        title: "Guideline-safe profiles",
        desc: "Every change inside Google’s rules, with spam rivals reported.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Calls over vanity ranks",
        desc: "Reports show calls, directions and bookings from Maps.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Check Where You Rank Across NYC",
      p: "We grid-check your Map Pack position across your neighborhoods, review your profile and the spam around you, then show the quickest path into the top three. No cost, no obligation.",
      checks: [
        "ZIP-level ranking map",
        "Spam listings flagged",
        "Profile gaps listed",
        "A review plan for your area",
      ],
      cta: "Check My NYC Rankings",
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
    chipsLabel: "Industries we rank on Google Maps",
    chips: [
      "Home Services",
      "Dentists & Doctors",
      "Law Firms",
      "Restaurants & Cafés",
      "Beauty & Wellness",
      "Auto Repair",
      "Retail Shops",
      "Contractors",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Local SEO in New York: Common Questions",
    lead: "Timelines, pricing, ranking in several boroughs and AI answers.",
    cta: "",
    items: NycSeoFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free NYC Local SEO Audit",
    lead: "Share your services and service area, and we’ll send a ranking audit by ZIP code with a plan to reach the top three.",
    formType: "nyc-local-seo",
    badge: "Free Audit",
    title: "Get Your Free NYC Rankings Audit",
    subtitle:
      "It takes about a minute. We’ll show where you rank today, block by block.",
    submitText: "Send My Rankings Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your services, the neighborhoods you serve and the searches you want to win",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "nyc-seo",
  aboutTitle: ["Map Pack Results", "Change Every", "Few Blocks."],
  aboutPhoto: {
    src: "/images/nyc/nyc-local-seo-company-dashboard.webp",
    alt: "NYC local SEO company dashboard showing Map Pack rankings across Manhattan neighborhoods",
    // 4:3 image in a wide box: keep the title text at the top in view.
    position: "50% 0%",
  },
  aboutCard: {
    kicker: "Where we rank you",
    title: "Top 3 across the boroughs",
    points: [
      "Manhattan, Midtown to Harlem",
      "Brooklyn, Williamsburg to Bay Ridge",
      "Queens, Astoria to Flushing",
      "The Bronx and Staten Island",
    ],
    foot: "Rankings checked by ZIP code every month",
  },
  pillars: ["#be123c", "#d1fae5", "#ede9fe", "#164e63"],
  features: {
    h2: "Local SEO in NYC: What Puts You in the Map Pack",
    lead: "Reach past your own block, categories chosen against rivals and markup Google can read.",
    items: [
      {
        label: "Proximity",
        title: "Stretch Your Reach Past Your Block",
        body: "Google leans toward the business nearest each searcher, so many NYC shops rank only on their own street. We build the relevance and review strength that widens your top-three reach, block by block.",
        points: [
          { t: "Grid rank checks", d: "Positions mapped across the area." },
          { t: "Local relevance", d: "Content tied to each neighborhood." },
          { t: "Review strength", d: "More recent reviews than rivals." },
          { t: "Reach tracking", d: "Coverage growth, month by month." },
        ],
        href: "#de-contact",
        link: "Check my coverage",
        ui: "blocks",
      },
      {
        label: "Categories",
        title: "Categories Chosen Against Your Rivals",
        body: "Your primary category decides which searches you can appear for. We study what the top-ranked businesses on your streets use, add the missing secondary categories and services, and keep every field complete.",
        points: [
          { t: "Category research", d: "Benchmarked on local leaders." },
          { t: "Services list", d: "Everything you offer, listed." },
          { t: "Attributes", d: "Hours, access and payments." },
          { t: "Monthly check", d: "Updated as Google adds options." },
        ],
        href: "/local-seo-google-business-optimization",
        link: "Google profile optimization",
        ui: "categories",
      },
      {
        label: "Markup",
        title: "Schema That Tells Google Who You Are",
        body: "LocalBusiness markup spells out your name, location, hours and service areas in a format search engines read. It supports your Map Pack listing and helps AI answers describe your business correctly.",
        points: [
          { t: "LocalBusiness schema", d: "On every key page." },
          { t: "Service areas", d: "Boroughs and neighborhoods named." },
          { t: "Hours and contact", d: "Kept in sync." },
          { t: "Validated", d: "Tested after each change." },
        ],
        href: "/services/seo-services",
        link: "Technical SEO services",
        ui: "schema",
      },
    ],
  },
  platforms: {
    h2: "Listed Right on Maps, Voice and AI",
    lead: "New Yorkers look businesses up on Google Maps, Apple Maps and Waze, or simply ask Siri, Alexa or ChatGPT. We keep your listing accurate on every source those answers draw from.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Map apps",
    rightLabel: "Voice and AI assistants",
    centerIcon: <FiMapPin aria-hidden="true" />,
    centerTitle: "Your listing",
    centerSub: "accurate on every map",
  },
  pricing: {
    title: "Local SEO Pricing for NYC Businesses",
    lead: "Month-to-month local SEO plans, from a single storefront to several boroughs.",
    compareTitle: "Compare NYC Local SEO Plans",
    compareLead: "What each plan covers, line by line.",
    addOnsTitle: "Add-Ons for NYC Local SEO",
    addOnsLead: "Extra neighborhood pages, locations or citation work.",
    customTitle: "Ranking more than one location?",
    customText: "We’ll scope local SEO for every location and borough.",
  },
  phone: "voice",
  darkUi: "insights",
  scoreStyle: "dumbbell",
  noGrow: true,
  reviewsTitle: "Owners Who Trust Our Work",
  contact: {
    before: "Ready to Rank",
    after: "in Your Neighborhood?",
    lead: `List your services and the neighborhoods you want to win. You’ll get a free local SEO audit showing your rankings by ZIP code.`,
  },
  stepLinks: [
    "#de-contact",
    "/local-seo-google-business-optimization",
    "/services/seo-services",
    "/services/nyc/digital-marketing",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nycSeoFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
