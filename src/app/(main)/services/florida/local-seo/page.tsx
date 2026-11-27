/*
 * FLORIDA LOCAL SEO — new live page (18 Nov 2026) in the Florida silo, under
 * the hub /services/florida/digital-marketing. Built on the location
 * template shared with the Delaware, Philadelphia and NYC pages
 * (src/components/rd/delaware/DelawareLanding.tsx) with this page's own UI
 * (flSeoUi.tsx). Brief: docs/florida-pages-brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-keywords-
 * 2026-11.md): florida seo company 1,300 (KD 18) · seo florida 720 (KD 10)
 * · seo company florida 720 (KD 25) · seo agency florida 480 (KD 17) · local
 * seo florida 390 (KD 11) · local seo services florida 320 (KD 28) ·
 * florida local seo 260 (KD 18). Regional: south florida seo 320 · central
 * florida seo 170 · tampa bay seo 140 · ai seo agency florida 50. GSC: the
 * site already earns "landscaper seo miami fl" (pos 14), so Miami wording
 * sits in the body, never the title or H1.
 *
 * No cannibalization: the hub owns "digital marketing agency"; the PPC and
 * web design pages are linked with keyword anchors; city names stay out of
 * the title and H1 (the city pages will own them). Fresh wording only;
 * company-wide verified numbers only; no Florida office is implied (we serve
 * Florida remotely). About photo: the owner's SEO office image.
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
import { FaMicrosoft } from "react-icons/fa";
import {
  FiClock,
  FiCpu,
  FiFileText,
  FiLayers,
  FiMapPin,
  FiNavigation,
  FiPhoneCall,
  FiShield,
  FiStar,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import {
  SiApple,
  SiFacebook,
  SiGooglegemini,
  SiGooglemaps,
  SiPerplexity,
  SiTripadvisor,
  SiYelp,
} from "react-icons/si";

const PAGE_PATH = "/services/florida/local-seo";

const TITLE = "Florida SEO Company | Local SEO Services in Florida";

const DESCRIPTION =
  "Florida SEO company for local businesses: Map Pack rankings, Business Profile upkeep, citations, reviews and AI answers, planned for each region and season.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "florida seo company",
    "seo florida",
    "seo company florida",
    "seo agency florida",
    "local seo florida",
    "local seo services florida",
    "florida local seo",
    "florida seo services",
    "south florida seo",
    "central florida seo",
    "tampa bay seo",
    "ai seo agency florida",
    "google maps seo florida",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/florida-seo-company.webp",
        width: 1600,
        height: 900,
        alt: "Florida local SEO rankings dashboard with a neon Florida map and a waterfront skyline",
      },
    ],
    title: TITLE,
    description:
      "Local SEO for Florida businesses: top-three Map Pack positions, clean listings and fresh reviews in every region you serve, plus citations in AI answers.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  {
    name: "Florida Digital Marketing",
    url: "/services/florida/digital-marketing",
  },
  { name: "Florida Local SEO", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services in Florida",
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
  areaServed: { "@type": "State", name: "Florida" },
  audience: {
    "@type": "BusinessAudience",
    name: "Local businesses across Florida",
  },
};

const FlSeoFaqs = [
  {
    question: "How much does local SEO cost in Florida?",
    answer:
      "Our plans are $297, $950 or $1,500 a month, with no long-term contract. A single-location shop often starts with Business Profile and citation work, while service companies covering several towns usually need the larger plans for area pages and review growth. Your free audit shows which plan fits before you pay anything.",
  },
  {
    question: "How long does local SEO take to work in Florida?",
    answer:
      "Profile and listing fixes can move positions within a few weeks. Steady Map Pack gains usually take three to six months, longer in crowded markets such as Miami, Orlando or Tampa than in smaller towns like Ocala or Port St. Lucie. Monthly rank grids let you watch progress instead of guessing.",
  },
  {
    question: "Can my business rank in more than one Florida city?",
    answer:
      "Yes, within limits. Map Pack results lean heavily on how close you are to the searcher, so one address won’t top the map statewide. We widen your reach with service-area settings, a useful page for each area, reviews that name the towns you work in and organic rankings that don’t depend on distance. We never set up fake addresses, because Google suspends them.",
  },
  {
    question: "Should I change my Google hours during a hurricane?",
    answer:
      "Yes. For a closure of a few days, set special hours so your profile shows you closed on those dates. For a longer or open-ended closure, mark the business temporarily closed and switch it back the day you reopen. We make these updates for clients, post your emergency line and add storm-repair services once the weather clears.",
  },
  {
    question: "How does snowbird season affect local SEO?",
    answer:
      "Across much of Southwest Florida, the Gulf Coast and Palm Beach County, demand for local services climbs from October to April as seasonal residents return. Rankings take months to build, so we use the summer to strengthen your profile, pages and reviews, then set winter hours before the first arrivals.",
  },
  {
    question:
      "Do you offer SEO in South Florida, Central Florida and Tampa Bay?",
    answer:
      "Yes. Clients come to us from Miami-Dade, Broward and Palm Beach counties, from Orlando, Kissimmee and Lakeland, from Tampa, St. Petersburg and Clearwater, and from Naples, Jacksonville and Pensacola too. Each region gets its own rank grid and keyword list, because SEO in Miami for a landscaper plays out very differently from SEO in Gainesville for a dentist.",
  },
  {
    question: "Can an AI SEO agency in Florida get me mentioned by ChatGPT?",
    answer:
      "Nobody can promise a mention, but you can make one far more likely. Assistants favor businesses whose details agree everywhere and whose website answers questions clearly. We align your profile, site and listings, add schema and answer-first content, and check every month which assistants name you and which sources they use.",
  },
  {
    question: "What happens if my Google listing gets suspended?",
    answer:
      "Don’t create a replacement listing, because duplicates make the appeal harder. Our reinstatement record stands at 900+ profiles, and we file each appeal with the proof Google asks for. During your local SEO work, every edit stays inside Google’s guidelines to keep that risk low.",
  },
  {
    question: "Do you have an office in Florida?",
    answer:
      "No. The same in-house staff serve every Florida client remotely, with video calls and a written report each month. Map Pack positions depend on your business’s location and signals, not on where your SEO team sits.",
  },
];

const flSeoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: FlSeoFaqs.map((faq) => ({
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
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: FaMicrosoft, name: "Bing Places", tone: "bing" },
  { icon: SiYelp, name: "Yelp", tone: "yelp" },
];
const hubRight: HubApp[] = [
  { icon: SiTripadvisor, name: "Tripadvisor", tone: "tripadvisor" },
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiPerplexity, name: "Perplexity", tone: "perplexity" },
  { icon: SiGooglegemini, name: "Gemini", tone: "gemini" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Florida SEO Company",
    h1Highlight: "for Local Search, Google Maps and AI",
    sub: "Zonic Media handles local SEO for Florida businesses that want more calls from search. We complete your Google Business Profile, correct every listing, grow reviews town by town and get you cited in AI answers, with rankings checked in each region you serve.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide, verified numbers only (no Florida client results).
    stats: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "1,500+",
        label: "Business Profiles our team has optimized",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <FiShield aria-hidden="true" />,
        num: "900+",
        label: "Suspended listings brought back online",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "20+",
        label: "Industries in our local SEO work",
      },
    ],
    proof: "",
    cta: "Check My Florida Rankings Free",
  },
  about: {
    eyebrow: "Local SEO in Florida",
    h2Start: "Google Ranks You",
    h2Highlight: "One Florida Town at a Time.",
    leads: [
      <>
        Map Pack results depend on where the searcher stands. A landscaping
        company in Miami can lead the map in Kendall and drop out of sight by
        Doral, and a Jacksonville pest control firm can rule downtown while
        vanishing in Orange Park. Our work starts by measuring where you appear
        today, point by point, in every town you want calls from.
      </>,
      <>
        Next we fix what holds you back: a half-finished profile, old addresses
        on directories, thin service pages, too few recent reviews. Want ads and
        social planned alongside? Our{" "}
        <Link
          href="/services/florida/digital-marketing"
          className="phl-inline-link"
        >
          Florida digital marketing agency
        </Link>{" "}
        team runs every channel together, and{" "}
        <Link href="/services/florida/ppc" className="phl-inline-link">
          Florida PPC management
        </Link>{" "}
        can bring calls in while your Map Pack positions grow.
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Florida Local SEO • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Local SEO Services for Florida Businesses",
    lead: "Everything a Florida SEO agency should cover for a local business, from your Business Profile and directory listings to service pages, reviews and AI visibility.",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Complete Business Profile Buildout",
        desc: "Categories, services, products, photos and a clear description filled in properly, then weekly posts so Google sees an active business.",
        points: [
          "Primary category tested",
          "Weekly posts and photos",
          "Seasonal hours kept current",
        ],
        href: "/local-seo-google-business-optimization",
        link: "Google Business Profile optimization",
      },
      {
        tone: "gold",
        icon: <FiLayers aria-hidden="true" />,
        title: "Citation Cleanup on Every Directory",
        desc: "Your name, address and phone made identical on Apple Maps, Bing, Yelp, Facebook and the data providers that feed them, so Google trusts your details.",
        points: [
          "Duplicate listings merged",
          "Old addresses corrected",
          "Missing citations built",
        ],
        href: "#de-contact",
        link: "Request a citation check",
      },
      {
        tone: "blue",
        icon: <FiFileText aria-hidden="true" />,
        title: "Service Pages for Each Area You Cover",
        desc: "One genuinely useful page per service and area, written for how people search in places like Sarasota or Ocala, never a template with the town swapped.",
        points: [
          "Pages by service and area",
          "Local business schema",
          "Sensible internal links",
        ],
        href: "/services/florida/web-design",
        link: "Florida web design",
      },
      {
        tone: "gold",
        icon: <FiStar aria-hidden="true" />,
        title: "Review Growth in Each Town",
        desc: "A text request after every finished job, so new reviews describe the work and the town it was done in, and every reply sounds like you.",
        points: [
          "Request texts after each job",
          "Owner replies in days",
          "Review themes reported",
        ],
        href: "#de-contact",
        link: "Ask about review growth",
      },
      {
        tone: "blue",
        icon: <FiCpu aria-hidden="true" />,
        title: "AI SEO for Florida Searches",
        desc: "Answer-first content, schema and matching facts so ChatGPT, Gemini and Google’s AI Overviews can cite your business when Floridians ask who to call.",
        points: [
          "Answer-first FAQs",
          "Business facts aligned",
          "AI mentions checked monthly",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
      {
        tone: "gold",
        icon: <FiShield aria-hidden="true" />,
        title: "Listing Protection and Reinstatement",
        desc: "Edits made inside Google’s guidelines so your profile isn’t flagged, and quick reinstatement work if a listing is suspended anyway.",
        points: [
          "Guideline-safe edits",
          "Spam competitors reported",
          "Suspension appeals handled",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Google Business Profile reinstatement",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Rank Tracking for Every Florida Region You Serve",
    leads: [
      <>
        Strong positions in the Panhandle tell you nothing about South Florida.
        We track each region on your list separately, so you can see where the
        Map Pack already favors you and where the next push belongs.
      </>,
      <>
        Running a trade business? The same tracking powers our{" "}
        <Link
          href="/services/hvac-marketing-agency/florida"
          className="phl-inline-link"
        >
          HVAC marketing in Florida
        </Link>
        ,{" "}
        <Link
          href="/services/plumbing-marketing-agency/florida"
          className="phl-inline-link"
        >
          plumbing marketing across Florida
        </Link>{" "}
        and{" "}
        <Link
          href="/services/home-inspector-marketing/florida"
          className="phl-inline-link"
        >
          Florida home inspector SEO
        </Link>{" "}
        work.
      </>,
    ],
    cta: "Get My Florida Rank Report",
    // Sample tracker UI, not client data.
    console: {
      title: "Florida rank tracker",
      tag: "Sample",
      metrics: [
        { strong: "6", label: "Regions tracked" },
        { strong: "Weekly", label: "Grid scans" },
        { strong: "Top 3", label: "Map Pack target" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "Our Florida Local SEO Process",
    steps: [
      {
        tag: "Week 1",
        title: "Audit Listings and Rankings",
        desc: "We scan your Business Profile, the major directories and a rank grid in each town you serve, then list every problem holding your positions back.",
      },
      {
        tag: "Weeks 2–4",
        title: "Fix the Foundations",
        desc: "Categories, service areas, citations and service pages get corrected or built, so Google sees one consistent, complete business.",
      },
      {
        tag: "Weekly",
        title: "Earn Reviews, Keep the Profile Fresh",
        desc: "Review requests go out after each job, replies follow within days, and posts, photos and seasonal hours stay up to date.",
        chips: ["Reviews requested", "Posts published", "Hours checked"],
      },
      {
        tag: "Monthly",
        title: "Report Positions Region by Region",
        desc: "Your report shows rank grids, calls and route requests for each region, plus the towns we plan to target next.",
        chips: ["Rank grids", "Calls by town", "Next targets"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My Florida SEO Audit",
  },
  showcase: undefined,
  compare: {
    h2: "Our Florida SEO Agency vs. Generic Plans",
    lead: "Why so many Florida SEO packages stall, and what we do differently.",
    themTitle: "Generic SEO Package",
    themSub: "Where it falls short",
    them: [
      "One keyword report for the whole state",
      "Profile set up once, then left alone",
      "Listings with old details left live",
      "No plan for storms or seasonal hours",
      "Rankings shown without any calls",
    ],
    usTitle: "Our Florida Local SEO",
    usSub: "Measured in calls and Map Pack reach",
    us: [
      "Rank grids in each town you serve",
      "Profile updated every week",
      "Citations matched across directories",
      "Hours and posts set for each season",
      "Calls and routes tracked by town",
    ],
    scoreTitle: "Sample Florida Visibility Scorecard",
    scoreSub: "An example of four signals our audit scores",
    scoreRows: [
      { label: "Map Pack reach", before: 18, after: 76 },
      { label: "Listing accuracy", before: 46, after: 98 },
      { label: "Review freshness", before: 26, after: 84 },
      { label: "AI citations", before: 12, after: 64 },
    ],
  },
  why: {
    h2: "Why Florida Owners Trust Us With Local SEO",
    lead: "A focused local search team, honest about timelines and judged on the calls Google Maps sends you.",
    cards: [
      {
        icon: <FiTarget aria-hidden="true" />,
        title: "Maps before extras",
        desc: "Profile, citations and reviews come before anything fancy.",
      },
      {
        icon: <FiClock aria-hidden="true" />,
        title: "Honest timelines",
        desc: "Quick fixes in weeks, steady Map Pack gains over months.",
      },
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        title: "Results traced by town",
        desc: "Calls, route requests and form leads, counted every month.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "See Where You Rank Across Florida",
      p: "We run a rank grid for your main service in the towns you name, check your profile and listings, and send a plain-English plan. It’s free, and there’s nothing to sign.",
      checks: [
        "Rank grid for your town",
        "Listing errors flagged",
        "Review gap measured",
        "A 90-day action plan",
      ],
      cta: "Get My Free Rank Grid",
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
  // Kept for the type; the platform hub takes the hub slot. The first five
  // chips show on the hero bento.
  engine: {
    eyebrow: "",
    h2: "",
    lead: null,
    coreStrong: "",
    coreSub: "",
    coreCta: "",
    nodes: [],
    chipsLabel: "Florida industries we rank on Maps",
    chips: [
      "HVAC & AC Repair",
      "Roofing",
      "Pool Services",
      "Pest Control",
      "Dentists",
      "Plumbing",
      "Home Inspectors",
      "Law Firms",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Local SEO in Florida: What Owners Ask",
    lead: "Costs, timelines, multiple cities, storm hours and AI answers, in plain terms.",
    cta: "",
    items: FlSeoFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Florida Local SEO Audit",
    lead: "Tell us what you do and where, and we’ll send a rank grid and a plan for the towns you serve.",
    formType: "florida-local-seo",
    badge: "Free Rank Grid",
    title: "Get Your Free Florida SEO Audit",
    subtitle: "Takes roughly sixty seconds, and you’re under no obligation.",
    submitText: "Send My Audit Request",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your services, the Florida towns you want calls from, and anything already ranking",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-seo",
  aboutTitle: ["Google Ranks You", "One Florida Town", "at a Time."],
  aboutPhoto: {
    src: "/images/florida/florida-seo-company.webp",
    alt: "Florida local SEO rankings dashboard with a neon Florida map and a waterfront skyline",
    position: "75% top",
  },
  aboutCard: {
    kicker: "Local SEO for Florida",
    title: "Handled every month",
    points: [
      "Business Profile posts, photos and hours",
      "Citations matched on major directories",
      "Review requests and owner replies",
      "Rank grids for each town you serve",
    ],
    foot: "Managed remotely by our own staff",
  },
  // Florida SEO palette: palm green, sand, shallow-water aqua, deep gulf.
  pillars: ["#15803d", "#fde68a", "#cffafe", "#0c4a6e"],
  features: {
    h2: "Where Florida Local Rankings Are Won",
    lead: (
      <>
        Three things decide who shows in a Florida Map Pack: how far your reach
        stretches across town, how current your profile stays through the
        seasons, and whether AI tools trust your details.
      </>
    ),
    items: [
      {
        label: "Rank grids",
        title: "Rank Grids Show Exactly Where You Appear",
        body: "A single ranking number hides the truth. We check your Map Pack position at dozens of points around your location in each metro, from Tampa Bay to Miami-Dade, and watch the weak spots turn green as your profile, reviews and pages improve.",
        points: [
          { t: "Grid scans each week", d: "Positions mapped point by point." },
          { t: "A grid for every metro", d: "Each area you serve, measured." },
          { t: "Rivals on the same grid", d: "See who outranks you where." },
          { t: "Fixes aimed at weak zones", d: "Effort goes where it counts." },
        ],
        href: "/local-seo-google-business-optimization",
        link: "Explore Business Profile optimization",
        ui: "fl-seo-1",
      },
      {
        label: "Seasons & storms",
        title: "A Business Profile That Keeps Pace With Florida",
        body: "Seasonal residents arriving in October expect accurate hours, and a named storm can close you for days. We schedule winter hours, post hurricane-prep updates, set special hours for storm closures and announce your reopening, so the listing never sends customers to a locked door.",
        points: [
          { t: "Winter hours on time", d: "Ready before snowbirds arrive." },
          { t: "Storm-closure hours", d: "Set the moment you close." },
          { t: "Reopening updates", d: "Posts and services refreshed." },
          { t: "Guideline-safe edits", d: "No flags from frequent changes." },
        ],
        href: "/services/gbp-reinstatement-service",
        link: "See listing reinstatement",
        ui: "fl-seo-2",
      },
      {
        label: "AI answers",
        title: "Cited When Floridians Ask an AI Assistant",
        body: "AI answers draw on your Business Profile, reviews, website and directory listings. When those sources disagree, assistants hesitate to name you. We align every fact, publish answer-first pages and check monthly which sources ChatGPT, Gemini, Perplexity and AI Overviews rely on.",
        points: [
          { t: "One set of facts", d: "Profile, site and listings agree." },
          { t: "Answer-first pages", d: "Short replies to real questions." },
          { t: "Schema on key pages", d: "Services and areas spelled out." },
          { t: "Source checks", d: "See what AI reads about you." },
        ],
        href: "/services/ai-seo-services",
        link: "Explore our AI SEO service",
        ui: "fl-seo-3",
      },
    ],
  },
  platforms: {
    h2: "Accurate on Every Map and Directory Floridians Use",
    lead: "Customers compare you on Google Maps, Apple Maps and Bing, read reviews on Yelp, Tripadvisor and Facebook, and now ask Perplexity or Gemini for a name. Your hours, services, address and reviews stay in step on all of them.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Maps and directories",
    rightLabel: "Reviews, travel and AI",
    centerIcon: <FiNavigation aria-hidden="true" />,
    centerTitle: "Your Florida listing",
    centerSub: "one set of facts",
  },
  pricing: {
    title: "Florida Local SEO Pricing",
    lead: "Month-to-month local SEO plans for Florida businesses, from profile basics to multi-town review and page programs.",
    compareTitle: "Compare Florida SEO Plans",
    compareLead: "Every plan, line by line.",
    addOnsTitle: "Extras for Florida Local SEO",
    addOnsLead: "Add towns, pages or listings when you’re ready.",
    customTitle: "Serving many Florida towns or locations?",
    customText: "We’ll plan a rank grid and profile for each one.",
  },
  phone: "fl-seo",
  darkUi: "fl-seo",
  scoreStyle: "fl-seo",
  noGrow: true,
  reviewsTitle: "Local Owners Rate Our SEO Work",
  contact: {
    before: "Let’s Put Your",
    after: "Business on Florida’s Map",
    lead: "Name your services and the Florida towns you want calls from. We’ll check your rankings, profile and listings at no cost.",
  },
  stepLinks: [
    "#de-contact",
    "/local-seo-google-business-optimization",
    "/services/florida/digital-marketing",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flSeoFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
