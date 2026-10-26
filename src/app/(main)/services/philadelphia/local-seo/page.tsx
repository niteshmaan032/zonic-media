/*
 * REDESIGN DRAFT (23 Oct 2026) of /services/philadelphia/local-seo, in the Dallas–Fort Worth layout
 * (src/components/rd/delaware/DelawareLanding.tsx, the same template as
 * the Delaware drafts). Same schema and form type as the live page, which
 * stays untouched; this route is noindex. This page's own UI: phlSeoUi.tsx.
 *
 * Copy re-optimized 24 Oct 2026 (docs/content-optimization-brief.md): fresh
 * wording, verified numbers only.
 * Live URL ranks for (Semrush US, Oct 2026): local pack seo services #20 ·
 * philly seo firm #25 · seo firm philadelphia #33 · philadelphia seo
 * companies #31 · philadelphia seo results #31 · seo company philadelphia
 * #32 · philadelphia seo consulting #35 · seo marketing philadelphia #37.
 * Volumes: seo company philadelphia 1,600 · philadelphia seo company 1,300 ·
 * philadelphia seo 1,300 · seo philadelphia 1,000 · philadelphia seo
 * services 880 · seo services philadelphia 720 · philadelphia seo agency 720 ·
 * seo marketing philadelphia 590 · philadelphia search engine optimization
 * 480 · local seo philadelphia 320 · philly seo 320 · seo consultant
 * philadelphia 320 · local seo services philadelphia 260.
 *
 * Hub structure kept from the live pages: digital-marketing owns the broad
 * "digital marketing agency philadelphia" terms and links down to local-seo,
 * ppc and sem; those link back with narrow anchors only.
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
  FiBarChart2,
  FiCpu,
  FiFileText,
  FiLink2,
  FiMapPin,
  FiPhoneCall,
  FiSearch,
  FiShield,
  FiStar,
  FiTool,
  FiZap,
} from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import {
  SiDuckduckgo,
  SiGoogle,
  SiGooglegemini,
  SiOpenai,
  SiPerplexity,
  SiYoutube,
} from "react-icons/si";

const PAGE_PATH = "/services/philadelphia/local-seo";

export const metadata: Metadata = {
  title: {
    absolute: "Philadelphia SEO Company | Local SEO Services & SEO Firm",
  },
  description:
    "Philadelphia SEO company for local SEO, Google Maps rankings and content that turns Philly searches into calls. 1,500+ profiles optimized. Free SEO audit.",
  keywords: [
    "seo company philadelphia",
    "philadelphia seo company",
    "philadelphia seo",
    "seo philadelphia",
    "philadelphia seo services",
    "seo services philadelphia",
    "philadelphia seo agency",
    "local seo philadelphia",
    "local seo services philadelphia",
    "philly seo",
    "seo firm philadelphia",
    "seo consultant philadelphia",
    "seo marketing philadelphia",
    "philadelphia search engine optimization",
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
    title: "Philadelphia SEO Company | Philly Local SEO Services",
    description:
      "Local SEO for Philadelphia businesses: Google Business Profile work, neighborhood pages, local links and reviews that turn near-me searches into calls.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Philadelphia SEO Company", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services in Philadelphia",
  serviceType: "Local Search Engine Optimization",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Local SEO for Philadelphia businesses covering Google Business Profile optimization, citation building and cleanup, review growth, on-page SEO, and neighbourhood service-area pages — built to win the Google map pack and grow booked calls.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    url: "https://www.zonicllc.com",
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
  areaServed: {
    "@type": "City",
    name: "Philadelphia",
    containedInPlace: {
      "@type": "State",
      name: "Pennsylvania",
    },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Local businesses in Philadelphia and the surrounding counties",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Philadelphia Local SEO Services",
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
        itemOffered: {
          "@type": "Service",
          name: "Local Keyword & Competitor Research",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Citation Building & Listing Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Review Growth & Reputation" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Page SEO & Neighbourhood Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rank Tracking & Monthly Reporting",
        },
      },
    ],
  },
};

const PhilaSeoFaqs = [
  {
    question: "What does a Philadelphia SEO company do for a local business?",
    answer:
      "The right SEO agency Philadelphia businesses hire gets them found when nearby customers search for what they sell. That means a complete Google Business Profile, accurate listings, reviews, fast pages for each service and area, local links and clear tracking. Our in-house team handles all of it and reports the rankings and calls it produces each month.",
  },
  {
    question: "Local SEO or regular SEO: which does my business need?",
    answer:
      "If customers come to you, or you travel to them, local SEO comes first. It targets nearby searches and the Map Pack, where distance, your profile, listings and reviews carry the most weight. Regular SEO aims at wider, informational searches. Many Philadelphia businesses need both, with local work leading.",
  },
  {
    question: "When will I see my Philadelphia rankings move?",
    answer:
      "Profile and Map Pack changes often show first, because Google picks up profile signals quickly. Competitive organic terms for the city and suburbs take longer and build with steady content and links. Your monthly report covers both, so you can watch early Maps gains while organic rankings climb.",
  },
  {
    question: "How are your Philadelphia SEO plans priced?",
    answer:
      "Our SEO plans are flat: $297, $750 or $1,500 each month, paid monthly with no annual lock-in. Which one fits depends on your locations, how competitive your trade is and how many neighborhoods you want to rank in. The free audit recommends a plan before you commit to anything.",
  },
  {
    question:
      "Can one business rank across Center City, the Northeast and the suburbs?",
    answer:
      "Yes, with the right setup. Map results lean heavily on distance, so one profile will not rank equally in Port Richmond, Roxborough and Conshohocken. We build area pages, set your profile's service areas and earn local signals in each part of your footprint, then track rankings by ZIP code.",
  },
  {
    question: "Can any SEO company promise the #1 spot on Google?",
    answer:
      "No honest one can, because Google changes results constantly and controls the ranking. What we promise is the work and the proof: a written plan, the tasks done each month, and rankings, calls and direction requests reported openly. There is no long contract, so we keep earning your business.",
  },
  {
    question: "Can you reinstate a suspended Philadelphia Business Profile?",
    answer:
      "Yes. Our reinstatement team has brought back 900+ suspended profiles. We find the likely cause, gather the right evidence and file the appeal, then fix whatever triggered the suspension so it is less likely to happen again. Tell us the day it happens; quick, well-documented appeals tend to go better.",
  },
  {
    question: "Will SEO help me show up in ChatGPT and AI Overviews?",
    answer:
      "Yes. AI tools build their answers from pages that explain your services plainly, structured data, steady business facts and what reviews say about you. The same work that lifts your Google rankings feeds those answers, so we build it into every SEO plan rather than selling it separately.",
  },
];

const philaSeoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PhilaSeoFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ---------------------------------------------------------------- content */

const CHIPS_LABEL = "Ranking Philadelphia businesses in";

const hubLeft: HubApp[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: FaMicrosoft, name: "Bing", tone: "bing" },
  { icon: SiDuckduckgo, name: "DuckDuckGo", tone: "duckduckgo" },
  { icon: SiYoutube, name: "YouTube search", tone: "youtube" },
];
const hubRight: HubApp[] = [
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiGooglegemini, name: "Gemini", tone: "gemini" },
  { icon: SiPerplexity, name: "Perplexity", tone: "perplexity" },
  { icon: FiCpu, name: "Google AI Overviews", tone: "indigo" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Philadelphia SEO Company for",
    h1Highlight: "Local SEO, Map Rankings and More Calls",
    sub: "Zonic Media is an SEO company for Philadelphia businesses. Our in-house team handles local SEO, Google Business Profile work, technical fixes, content and links that move you up Google search and the Map Pack, one neighborhood at a time.",
    media: {
      src: "/images/philadelphia/phila-seo/philadelphia-local-seo-workstation.webp",
      alt: "Philadelphia local SEO workstation with rankings on screen",
    },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Growth outcomes and verified figures only (owner, 24 Oct 2026).
    stats: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "Top 3",
        label: "On Google Maps in the areas you serve",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Google rating",
      },
      {
        icon: <FiShield aria-hidden="true" />,
        num: "900+",
        label: "Suspended Google profiles reinstated",
      },
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        num: "1,500+",
        label: "Business profiles tuned for Maps",
      },
    ],
    proof: "",
    cta: "See Where My Business Ranks",
  },
  about: {
    eyebrow: "Philadelphia local SEO",
    h2Start: "Philly SEO Built One Neighborhood",
    h2Highlight: "at a Time.",
    leads: [
      <>
        Google ranks local results by distance, relevance and prominence, so a
        single citywide page rarely wins everywhere. We build pages, listings
        and profile signals for each Philadelphia neighborhood you serve.
      </>,
      <>
        You get a named SEO consultant, a flat monthly plan and a report showing
        rankings by ZIP code and the calls they bring. Add our{" "}
        <Link href="/services/philadelphia/ppc" className="phl-inline-link">
          Philadelphia PPC management
        </Link>{" "}
        when you need leads while rankings build.
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/philadelphia/phila-seo/philadelphia-near-me-search.webp",
      alt: "Customer running a near-me search for a Philadelphia business on a phone",
    },
    collageB: {
      src: "/images/philadelphia/phila-seo/philadelphia-map-pack-rankings.webp",
      alt: "Google Map Pack rankings for Philadelphia neighborhoods on a laptop",
    },
    badgeText: "Philadelphia SEO Company • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Philadelphia SEO Services That Bring Calls",
    lead: "The monthly work that moves rankings, done by our in-house team and reported in calls as well as positions.",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Google Maps & Map Pack SEO",
        desc: "Win the Map Pack across Philly neighborhoods with a complete Google Business Profile, matching listings and steady reviews.",
        points: [
          "Categories and photos set",
          "Listings matched everywhere",
          "Reviews asked after each job",
        ],
        href: "/local-seo-google-business-optimization",
        link: "Profile optimization",
      },
      {
        tone: "gold",
        icon: <FiTool aria-hidden="true" />,
        title: "Technical SEO Fixes",
        desc: "Clear the speed, crawl and markup issues holding good pages back, so Google can read and rank every page.",
        points: [
          "Core Web Vitals on mobile",
          "Crawl errors and redirects",
          "Schema on every page",
        ],
        href: "#de-contact",
        link: "Request a technical audit",
      },
      {
        tone: "blue",
        icon: <FiFileText aria-hidden="true" />,
        title: "Pages for Each Neighborhood and Service",
        desc: "A page for each service and Philadelphia neighborhood you want to win, written around what people there search.",
        points: [
          "A keyword for every page",
          "Local proof on each page",
          "Pages linked together",
        ],
        href: "/services/local-seo-for-home-services",
        link: "SEO for home service businesses",
      },
      {
        tone: "gold",
        icon: <FiLink2 aria-hidden="true" />,
        title: "Links From Philly Websites",
        desc: "Earn links from Philadelphia news sites, associations and directories that show Google you are a trusted local business.",
        points: [
          "Local news and blog mentions",
          "Association and chamber links",
          "No paid link schemes",
        ],
        href: "/services/seo-services",
        link: "SEO services",
      },
      {
        tone: "blue",
        icon: <FiCpu aria-hidden="true" />,
        title: "Content for AI Answers",
        desc: "Answer-first content and structured data so Google AI Overviews and ChatGPT can name your business.",
        points: [
          "Answer-first FAQs",
          "FAQ and service schema",
          "Matching facts everywhere",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
      {
        tone: "gold",
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Monthly SEO Reports",
        desc: "One plain-English report each month: rankings by ZIP code, calls, direction requests and the next steps.",
        points: [
          "Rankings by neighborhood",
          "Leads from organic search",
          "Next month's plan in writing",
        ],
        href: "/services/philadelphia/sem",
        link: "Pair SEO with paid search",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Rankings Measured Against Your Real Competitors",
    leads: [
      <>
        We track your visibility against the businesses you actually compete
        with, so you can see the month you pass them and which searches moved.
      </>,
      <>
        Want ads and social in the same plan? See our{" "}
        <Link
          href="/services/philadelphia/digital-marketing"
          className="phl-inline-link"
        >
          full-service marketing plan
        </Link>
        . If a suspension ever takes your listing down, our{" "}
        <Link
          href="/services/gbp-reinstatement-service"
          className="phl-inline-link"
        >
          Google Business Profile reinstatement
        </Link>{" "}
        team handles the appeal for you.
      </>,
    ],
    cta: "Check Where I Rank",
    // Example UI: labels only, no invented results.
    console: {
      title: "Search visibility",
      tag: "Tracked monthly",
      metrics: [
        { strong: "Top 3", label: "Map Pack target" },
        { strong: "ZIP", label: "Rank checks by area" },
        { strong: "Calls", label: "From your profile" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "How We Climb Philadelphia Rankings",
    steps: [
      {
        tag: "Week 1",
        title: "Rankings and Site Audit",
        desc: "We crawl your site, check rankings across Philly ZIP codes, review your profile and competitors, and send a ranked plan.",
      },
      {
        tag: "Weeks 2–4",
        title: "Match Keywords to Areas",
        desc: "Each service and neighborhood gets its target search, and the audit's technical fixes go live first.",
      },
      {
        tag: "Monthly",
        title: "Publish Pages, Earn Links",
        desc: "New neighborhood pages, answer-first content and local links each month, with reviews and profile posts alongside.",
        chips: ["Area pages", "Local links", "Profile posts"],
      },
      {
        tag: "Ongoing",
        title: "Build on What Ranks",
        desc: "Rankings by ZIP code every month, with the next pages chosen from what Search Console shows is working.",
        chips: ["ZIP rankings", "Search Console", "Next pages"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Get a Free Philly SEO Audit",
  },
  showcase: undefined,
  compare: {
    h2: "Philly SEO Done In-House vs. Farmed Out",
    lead: "What changes when the team you hire does the work itself.",
    themTitle: "Farmed-Out SEO",
    themSub: "Where rankings stall",
    them: [
      "Profile touched once a quarter",
      "Rank reports with no call data",
      "Bulk offshore link packages",
      "One manager juggling many clients",
      "A year-long contract",
    ],
    usTitle: "Philly SEO by Zonic Media",
    usSub: "Worked weekly, reported in calls",
    us: [
      "Profile worked every week",
      "Reports on calls and directions",
      "Hand-earned local links",
      "A consultant who knows Philly",
      "Flat plans with no hidden fees",
    ],
    scoreTitle: "Sample Local SEO Check",
    scoreSub: "Scores shown for illustration",
    scoreRows: [
      { label: "Profile strength", before: 30, after: 91 },
      { label: "Listing accuracy", before: 41, after: 95 },
      { label: "Review pace", before: 22, after: 77 },
      { label: "Map Pack reach", before: 18, after: 84 },
    ],
  },
  why: {
    h2: "An SEO Agency in Philadelphia That Shows Its Work",
    lead: "Rankings are the outcome. What you pay for is the work, the plan and a team that reports honestly.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Local SEO, in-house",
        desc: "Every task done by our own team, with nothing outsourced.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Plans with set prices",
        desc: "Set at $297, $750 or $1,500, scoped after a free audit.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Ranks by ZIP code",
        desc: "See where you rank across Philadelphia each month.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Check Your Rankings in Every Philly Neighborhood",
      p: "We check your rankings across Philadelphia ZIP codes, review your profile and your top local competitors, and show the quickest route into the top three, with no obligation.",
      checks: [
        "Map Pack gaps by ZIP code",
        "Profile fixes ranked by impact",
        "Listings to clean up or add",
        "A plan to grow reviews",
      ],
      cta: "Get My Free SEO Audit",
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
    chipsLabel: CHIPS_LABEL,
    chips: [
      "Plumbing & HVAC",
      "Dentists",
      "Law Firms",
      "Roofers",
      "Med Spas",
      "Contractors",
      "Auto Shops",
      "Cleaning Services",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Philly SEO Questions We Hear Most",
    lead: "Rankings, timing, pricing and AI search, answered.",
    cta: "",
    items: PhilaSeoFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Philadelphia SEO Audit",
    lead: "Tell us your services and neighborhoods and we will send a full SEO audit and a flat monthly quote.",
    formType: "philadelphia-local-seo",
    badge: "Free Audit",
    title: "Request your free Philly SEO audit",
    subtitle:
      "Find out how you rank right now and the steps to lead your neighborhood.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your services, the neighborhoods you want to rank in and your goals",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "phl-seo",
  aboutTitle: ["Philly SEO Built", "One Neighborhood", "at a Time."],
  aboutPhoto: {
    src: "/images/philadelphia/phila-seo/philadelphia-seo-company-dashboard.webp",
    alt: "Philadelphia SEO company workspace with an SEO performance dashboard overlooking the skyline",
    // 4:3 image in a wide box: keep the title text at the top in view.
    position: "50% 0%",
  },
  aboutCard: {
    kicker: "Local SEO, Philadelphia",
    title: "Neighborhoods we rank",
    points: [
      "Center City and Old City",
      "Fishtown and Northern Liberties",
      "South Philly and University City",
      "Manayunk and the Northeast",
    ],
    foot: "Managed by our in-house SEO team",
  },
  pillars: ["#047857", "#fef9c3", "#e0f2fe", "#7c2d12"],
  features: {
    h2: "What Our SEO Company in Philadelphia Fixes First",
    lead: "A page for every neighborhood, links that build trust and growth you can watch in Search Console.",
    items: [
      {
        label: "Local pages",
        title: "A Useful Page for Every Neighborhood",
        body: "One citywide page cannot rank in Fishtown, Manayunk and South Philly at once. We build a genuinely useful page for each neighborhood and service you cover, then track where each one ranks.",
        points: [
          { t: "Area research", d: "What people there search." },
          { t: "Unique pages", d: "Local detail, never copied text." },
          { t: "Fast indexing", d: "Pages submitted and checked." },
          { t: "Ranks per page", d: "Each page tracked on its own." },
        ],
        href: "/services/local-seo-for-home-services",
        link: "Home-service SEO playbook",
        ui: "pages",
      },
      {
        label: "Authority",
        title: "Links Philadelphia Sites Vouch For",
        body: "Google trusts businesses that other local sites point to. We earn mentions from neighborhood news, business groups and trade directories, never from paid link farms.",
        points: [
          { t: "Local outreach", d: "Real sites in and around Philly." },
          { t: "Clean profile", d: "Toxic links reviewed and disavowed." },
          { t: "Steady pace", d: "New links each month." },
          { t: "Authority tracked", d: "Growth shown in the report." },
        ],
        href: "/services/seo-services",
        link: "SEO services",
        ui: "links",
      },
      {
        label: "Growth",
        title: "Search Console Clicks Heading Up",
        body: "Rankings matter only when they bring visitors. We track clicks, impressions and the queries behind them in Google Search Console, and plan the next pages around what is working.",
        points: [
          { t: "Search Console data", d: "Clicks and impressions monthly." },
          { t: "Query research", d: "New pages from real searches." },
          { t: "Title rewrites", d: "Snippets written to earn clicks." },
          { t: "Calls tracked", d: "Visits tied to leads." },
        ],
        href: "/services/web-design",
        link: "Web design",
        ui: "gsc",
      },
    ],
  },
  platforms: {
    h2: "Seen on Google, Bing and AI Assistants",
    lead: "People search Google, Bing and DuckDuckGo, and ask ChatGPT, Gemini and Perplexity for recommendations. We structure your site and profile so each of them can find, trust and cite your business.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Search engines",
    rightLabel: "AI assistants",
    centerIcon: <FiSearch aria-hidden="true" />,
    centerTitle: "Your website",
    centerSub: "readable by every engine",
  },
  pricing: {
    title: "SEO Plans for Philadelphia Businesses",
    lead: "Flat monthly SEO plans for Philly, from Map Pack basics to multi-location growth.",
    compareTitle: "Compare Philly SEO Plans",
    compareLead: "What each plan includes, line by line.",
    addOnsTitle: "SEO Add-Ons",
    addOnsLead:
      "Extra neighborhood pages, locations or technical work as you need it.",
    customTitle: "Ranking several Philly locations?",
    customText: "Tell us your locations and we will scope local SEO for each.",
  },
  phone: "serp",
  darkUi: "visibility",
  scoreStyle: "table",
  noGrow: true,
  reviewsTitle: "Hear It From Our Clients",
  contact: {
    before: "Ready to Rank",
    after: "Higher Across Philly?",
    lead: `Tell us your services and neighborhoods. We will audit your rankings, site and profile for free and send a flat monthly quote.`,
  },
  stepLinks: [
    "#de-contact",
    "/services/seo-services",
    "/services/local-seo-for-home-services",
    "/services/philadelphia/sem",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philaSeoFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
