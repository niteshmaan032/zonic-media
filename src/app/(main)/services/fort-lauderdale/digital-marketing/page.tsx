/*
 * FORT LAUDERDALE DIGITAL MARKETING — new live page (18 Nov 2026), a city
 * page in the Florida silo under the hub /services/florida/digital-
 * marketing. Built on the location template (src/components/rd/delaware/
 * DelawareLanding.tsx) with this page's own UI (flFortLauderdaleUi.tsx).
 * Brief: docs/florida-cities-brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-cities-
 * keywords-2026-11.md): digital marketing agency fort lauderdale 590 (KD
 * 18) · digital marketing fort lauderdale 590 (KD 21) · marketing agency
 * fort lauderdale 390 (KD 21, ↑62%) · fort lauderdale digital marketing
 * agency 320 (KD 20) · digital marketing in fort lauderdale 210 · fort
 * lauderdale marketing agency 170 (KD 23, ↑146%). Question: how to choose
 * a digital marketing agency fort lauderdale. Secondary, in H3s, FAQs and
 * body only: seo fort lauderdale 880 (↑42%) · seo company fort lauderdale
 * 720 · local seo fort lauderdale 590 · web design fort lauderdale 720
 * (↑32%) · social media marketing fort lauderdale 210 · ppc fort
 * lauderdale 170.
 *
 * Rules: the hub owns "florida" / "south florida digital marketing
 * agency"; Miami owns Miami-Dade. Customers search in English and Spanish,
 * but the page never claims Spanish content or Spanish campaigns (owner
 * hasn't confirmed). No Fort Lauderdale office: served from Dover,
 * Delaware. Company-wide verified numbers only; no aggregateRating.
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
  FiBarChart2,
  FiCalendar,
  FiCompass,
  FiLayout,
  FiMapPin,
  FiMessageSquare,
  FiShare2,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import {
  SiFacebook,
  SiGoogle,
  SiGooglegemini,
  SiGooglemaps,
  SiInstagram,
  SiOpenai,
  SiTripadvisor,
  SiWaze,
} from "react-icons/si";

const PAGE_PATH = "/services/fort-lauderdale/digital-marketing";
const HUB_PATH = "/services/florida/digital-marketing";

const TITLE =
  "Digital Marketing Agency Fort Lauderdale | Broward SEO & Ads";

const DESCRIPTION =
  "Digital marketing agency in Fort Lauderdale: Map Pack rankings, Google Ads, AI answers and websites for Broward businesses, from Las Olas to Coral Springs.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "digital marketing agency fort lauderdale",
    "digital marketing fort lauderdale",
    "marketing agency fort lauderdale",
    "fort lauderdale digital marketing agency",
    "digital marketing in fort lauderdale",
    "fort lauderdale marketing agency",
    "seo fort lauderdale",
    "local seo fort lauderdale",
    "web design fort lauderdale",
    "social media marketing fort lauderdale",
    "ppc fort lauderdale",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/fort-lauderdale-digital-marketing-agency.webp",
        width: 1600,
        height: 900,
        alt: "Fort Lauderdale digital marketing illustration with SEO, PPC and web design icons and yachts in the marina",
      },
    ],
    title: TITLE,
    description:
      "Map Pack rankings, Google Ads, AI answers and quick-loading websites for Fort Lauderdale and Broward County businesses, planned city by city.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: HUB_PATH },
  { name: "Fort Lauderdale Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Agency in Fort Lauderdale",
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
    name: "Fort Lauderdale",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Fort Lauderdale and Broward County",
  },
};

const FtlDmFaqs = [
  {
    question: "What does a Fort Lauderdale digital marketing agency cost?",
    answer:
      "Our plans are $297, $950 or $1,500 a month, and none of them ties you to a long contract. Ad budgets go straight to Google or Meta, with nothing added by us. The free audit points to the plan that suits your services, the Broward cities you cover and how crowded your field is.",
  },
  {
    question: "How do I choose a digital marketing agency in Fort Lauderdale?",
    answer:
      "Ask five things on the first call: who owns the ad account, whether ad spend carries a markup, how long the contract lasts, what the monthly report counts and how AI search is handled. A good partner answers “you do, no, month to month, calls and booked jobs, every month” without hesitating, and shows results by city rather than one blended number.",
  },
  {
    question: "Which Broward County cities do you cover?",
    answer:
      "All of them. Inside Fort Lauderdale that means Las Olas, Victoria Park, Flagler Village, Rio Vista and the beach; around it, Hollywood, Dania Beach, Hallandale Beach, Pompano Beach, Deerfield Beach, Coral Springs, Parkland, Plantation, Sunrise, Davie, Weston, Pembroke Pines and Miramar. Targeting stays inside the ZIP codes where you take work.",
  },
  {
    question: "Can a remote team market a Fort Lauderdale business?",
    answer:
      "Yes. We work remotely as an in-house team in Dover, Delaware, and hold Fort Lauderdale meetings over video. Rankings, campaigns and sites get better through consistent effort, which a street address in town doesn’t change, and a written report each month shows which work moved your calls.",
  },
  {
    question: "Is SEO in Fort Lauderdale worth it for a small business?",
    answer:
      "For most, yes. Local SEO earns Map Pack and organic spots for searches like “ac repair near me” without paying per click, and those positions keep producing calls after the work is done. While rankings build, many owners run a modest Google Ads budget. If you are comparing an SEO company in Fort Lauderdale, ask to see rankings tracked city by city.",
  },
  {
    question: "How fast can PPC in Fort Lauderdale bring in calls?",
    answer:
      "Often within the first week or two, once ads, call tracking and landing pages are live. We clean search terms every week so the budget stays on people ready to hire, and the data shows which services and Broward cities deserve SEO attention next.",
  },
  {
    question: "When is the busy season for Fort Lauderdale businesses?",
    answer:
      "For many it starts in late October, when the boat show fills the city and seasonal residents come back, and it runs through April. Summer brings hurricane season and a jump in searches for AC, roofing, generators and shutters. We raise budgets before your peak and use slower weeks to build rankings and pages.",
  },
  {
    question: "How do AI assistants decide which local business to recommend?",
    answer:
      "They favor businesses whose facts line up across several sources: your website, Google Business Profile, reviews and directories. We make those details match, publish pages that answer the questions customers actually ask, add schema and review each month how ChatGPT, Gemini and AI Overviews describe you.",
  },
  {
    question: "What does social media marketing in Fort Lauderdale include?",
    answer:
      "Facebook and Instagram posts planned around your services, your seasons and the Broward cities you serve, plus local ads shown to people nearby. We track the calls and messages each post starts, so social is measured by the enquiries it brings.",
  },
  {
    question: "Can you get a suspended Google listing back online?",
    answer:
      "Usually, yes. Reinstating suspended profiles is our specialty, with 900+ brought back so far. Avoid creating a replacement listing while you wait; a duplicate tends to make the review harder. Once yours is live again, we keep each field compliant with Google’s rules so it stays up.",
  },
];

const ftlDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: FtlDmFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/* ---------------------------------------------------------------- content */

// The owner's photo fills the about box (extras.aboutPhoto); the
// collage slots aren't shown on this layout.
const NO_PHOTO = { src: "", alt: "" };

const hubLeft: HubApp[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiWaze, name: "Waze", tone: "waze" },
  { icon: SiTripadvisor, name: "Tripadvisor", tone: "tripadvisor" },
];
const hubRight: HubApp[] = [
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiGooglegemini, name: "Gemini", tone: "gemini" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    // Split before "Agency" so both halves fit one line each at 1200–1600
    // (the city name is long); the H1 text still reads "Fort Lauderdale
    // Digital Marketing Agency …".
    h1Start: "Fort Lauderdale Digital Marketing",
    h1Highlight: "Agency for Broward Businesses",
    sub: "Get found, chosen and called across Broward County. We manage your Maps listing, Google Ads, AI answers and website as a single plan, aimed at the cities you serve, from Las Olas and Victoria Park to Plantation, Coral Springs and Weston.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide verified numbers plus a public place count (Broward has 31 municipalities (broward.org).)
    // No Fort Lauderdale client results, and no ad-markup stat (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiUsers aria-hidden="true" />,
        num: "1",
        label: "Team, all in-house, for every channel you run",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <FiCalendar aria-hidden="true" />,
        num: "3",
        label: "Plan levels, paid monthly or once a year",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "31",
        label: "Broward cities, towns and villages",
      },
    ],
    proof: "",
    cta: "Audit My Broward Marketing",
  },
  about: {
    eyebrow: "Digital marketing in Fort Lauderdale",
    h2Start: "Every Broward City Searches Its Own Way.",
    h2Highlight: "Each One Gets a Plan.",
    leads: [
      <>
        The “Venice of America” runs on boats, beaches, courtrooms and clinics.
        A personal injury firm near the Broward County courthouse, a dental
        office in Plantation and an AC company in Coral Springs each win
        customers differently. First we learn where your buyers look, on Google,
        Maps or an AI assistant and in English or Spanish, and then the budget
        follows the searches most likely to become a call.
      </>,
      <>
        Ads, rankings, AI visibility and your site sit with a single in-house
        crew, and each month you see calls and booked jobs for every city.
        Prefer to start with Maps rankings? See our{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="phl-inline-link"
        >
          Google Business Profile optimization services
        </Link>
        . Covering other Florida metros as well? Our{" "}
        <Link href={HUB_PATH} className="phl-inline-link">
          Florida digital marketing agency
        </Link>{" "}
        page explains the statewide plan.
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Fort Lauderdale Marketing Agency • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Fort Lauderdale Digital Marketing Services That Work Together",
    lead: (
      <>
        Search ads, Map Pack rankings, social media, AI visibility,{" "}
        <Link href="/services/web-design" className="phl-inline-link">
          custom website design
        </Link>{" "}
        and reviews for Fort Lauderdale companies, planned together so each
        channel hands the next one a warmer lead.
      </>
    ),
    cards: [
      {
        tone: "blue",
        icon: <FiTarget aria-hidden="true" />,
        title: "PPC in Fort Lauderdale for Ready-to-Hire Searches",
        desc: (
          <>
            Search campaigns and Local Services Ads pointed at the Broward ZIP
            codes you serve, run by our{" "}
            <Link href="/services/google-ads" className="phl-inline-link">
              Google Ads management
            </Link>{" "}
            team, with budgets lifted for boat-show weeks and the winter rush.
          </>
        ),
        points: [
          "Campaigns split by city",
          "Search terms cleaned weekly",
          "No markup on your spend",
        ],
        href: "/services/florida/ppc",
        link: "Florida PPC management",
      },
      {
        tone: "gold",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Fort Lauderdale SEO and Map Pack Rankings",
        desc: "Local SEO in Fort Lauderdale built on a complete Business Profile, city pages for Hollywood, Plantation and Weston, and a steady stream of reviews.",
        points: [
          "Rank grids for each city",
          "Profile posts every week",
          "A page for every service area",
        ],
        href: "/services/florida/local-seo",
        link: "Local SEO across Florida",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Web Design in Fort Lauderdale, Phone First",
        desc: (
          <>
            Quick-loading pages, a call button on every screen, online
            scheduling and separate pages for every service and Broward city.
            For plumbing companies we also build{" "}
            <Link
              href="/services/plumbing-website-design"
              className="phl-inline-link"
            >
              websites for plumbers
            </Link>
            .
          </>
        ),
        points: [
          "Layouts built for phones",
          "Call and booking buttons",
          "Launched in 2–3 weeks",
        ],
        href: "/services/florida/web-design",
        link: "Florida website design",
      },
      {
        tone: "gold",
        icon: <FiShare2 aria-hidden="true" />,
        title: "Social Media Marketing in Fort Lauderdale",
        desc: "Facebook and Instagram posts, short videos and local ads built around your best work and the cities you cover, with each message traced to a booking.",
        points: [
          "A monthly content calendar",
          "Ads for nearby audiences",
          "Messages traced to jobs",
        ],
        href: "#de-contact",
        link: "Talk to us about social",
      },
      {
        tone: "blue",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "AI Search Visibility From Las Olas Outward",
        desc: "Pages that answer questions directly, schema and identical facts on every listing, so ChatGPT, Gemini and AI Overviews can name you with confidence.",
        points: [
          "Question-led service pages",
          "Schema on every key page",
          "Monthly checks of AI mentions",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Review Requests, Replies and Listing Rescue",
        desc: "A text asking for a review after every job, owner replies that sound like you, and fast reinstatement if Google ever suspends your listing.",
        points: [
          "Review texts after each job",
          "Replies in your tone",
          "Suspension help, fast",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Google Business Profile reinstatement",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "See Which Broward Cities Fill Your Calendar",
    leads: [
      <>
        Calls from Plantation might turn into jobs more often than clicks from
        Hollywood. Your report lists leads, calls and Map Pack positions for
        every city you serve, and next month’s budget moves toward the places
        that become paid work.
      </>,
      <>
        Your trade has its own playbook too. We run{" "}
        <Link
          href="/services/real-estate-marketing-agency"
          className="phl-inline-link"
        >
          real estate marketing
        </Link>
        ,{" "}
        <Link
          href="/services/travel-and-tourism-marketing-agency"
          className="phl-inline-link"
        >
          travel and tourism marketing
        </Link>
        ,{" "}
        <Link
          href="/services/hvac-marketing-agency/florida"
          className="phl-inline-link"
        >
          HVAC marketing in Florida
        </Link>{" "}
        and{" "}
        <Link
          href="/services/dental-marketing-agency"
          className="phl-inline-link"
        >
          dental practice marketing
        </Link>
        . Also serving Miami-Dade? See our{" "}
        <Link
          href="/services/miami/digital-marketing"
          className="phl-inline-link"
        >
          Miami digital marketing agency
        </Link>{" "}
        page.
      </>,
    ],
    cta: "Get My Broward City Report",
    // Sample board UI, not client data.
    console: {
      title: "Broward departures",
      tag: "Sample board",
      metrics: [
        { strong: "6", label: "Cities on this board" },
        { strong: "Top 3", label: "Map Pack target in each" },
        { strong: "Weekly", label: "Status updates" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "Launching Your Fort Lauderdale Campaign, Step by Step",
    steps: [
      {
        tag: "Week 1",
        title: "Check How Broward Finds You Today",
        desc: "We grade your ads, Business Profile, website, reviews and AI mentions against the competitors near you, so the weak spots are plain to see.",
      },
      {
        tag: "Weeks 2–4",
        title: "Roll Out One City at a Time",
        desc: "Profile fixes, ad groups, city pages and posts go live in order of impact, starting with the cities closest to your best customers.",
      },
      {
        tag: "Weekly",
        title: "Tune Every Channel Each Week",
        desc: "Search terms get trimmed, budget moves between cities, posts are scheduled and new reviews answered, while call and form tracking runs the whole time.",
        chips: ["Terms trimmed", "Budgets shifted", "Replies posted"],
      },
      {
        tag: "Monthly",
        title: "See Booked Work by City Each Month",
        desc: "A short report shows which Broward cities and channels produced booked work, plus what we will change before your next busy stretch.",
        chips: ["Leads by city", "Top channels", "Plan for next month"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Plan My Broward Campaign",
  },
  showcase: undefined,
  compare: {
    h2: "City-by-City Marketing vs. One-Size-Fits-All",
    lead: "Where Fort Lauderdale marketing budgets tend to slip, and how our approach closes each gap.",
    themTitle: "One-Size Marketing",
    themSub: "Where budgets slip",
    them: [
      "One campaign stretched over all of Broward",
      "Rankings checked in a single city",
      "AI search left to chance",
      "Reports that stop at clicks",
      "A year-long contract to start",
    ],
    usTitle: "Our Broward Approach",
    usSub: "Planned by city, judged on jobs",
    us: [
      "Campaigns and pages for each city",
      "Map Pack grids across your area",
      "Facts aligned for AI answers",
      "Leads matched to the jobs they became",
      "Month to month, leave whenever you like",
    ],
    scoreTitle: "Sample Broward Scorecard",
    scoreSub: "An example of four signals we grade, today versus the aim",
    scoreRows: [
      { label: "City coverage", before: 22, after: 86 },
      { label: "AI answer mentions", before: 14, after: 68 },
      { label: "Review momentum", before: 30, after: 82 },
      { label: "Call tracking", before: 36, after: 100 },
    ],
  },
  why: {
    h2: "What a Fort Lauderdale Marketing Agency Should Deliver",
    lead: "An agency should be judged by the calls it brings in, so that is exactly how we report.",
    cards: [
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "A single team for all channels",
        desc: "Ads, SEO, AI answers, social and web, handled in-house.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Leave any month you like",
        desc: "Plans run month to month, with nothing added to ad spend.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Leads shown city by city",
        desc: "Calls, forms and bookings for each Broward city, monthly.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Find the Broward Searches Passing You By",
      p: "We study your ads, Google profile, website, AI mentions and the competitors in your cities, then send back a 90-day plan. There is no fee and nothing to sign.",
      checks: [
        "Wasted spend flagged",
        "City gaps mapped",
        "Listing risks found",
        "90 days planned out",
      ],
      cta: "Get My Free Fort Lauderdale Audit",
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
    chipsLabel: "Fort Lauderdale industries we work with",
    chips: [
      "Law Firms",
      "Dentists & Clinics",
      "HVAC & Plumbing",
      "Real Estate",
      "Travel & Hospitality",
      "Pools & Landscaping",
      "Roofing & Contractors",
      "Home Services",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Fort Lauderdale Digital Marketing Questions",
    lead: "Plain answers on cost, coverage, choosing an agency, seasons and AI search.",
    cta: "",
    items: FtlDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Fort Lauderdale Marketing Audit",
    lead: "Tell us a little about your business and we’ll send an audit and a plan for the Broward cities you serve.",
    formType: "fort-lauderdale-digital-marketing",
    badge: "Free Audit",
    title: "Start Your Free Broward Audit",
    subtitle: "One short form, and no contract follows.",
    submitText: "Request My Free Audit",
    messageLabel: "What should we know first?",
    messagePlaceholder:
      "Your services, the Broward cities you cover, the marketing you run now and your busiest months",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-fort-lauderdale",
  heroChips: {
    label: "Broward County municipalities",
    items: ["Hollywood", "Pompano Beach", "Coral Springs", "Weston", "Plantation"],
    more: true,
  },
  aboutTitle: [
    "Every Broward City",
    "Searches Its Own Way.",
    "Each One Gets a Plan.",
  ],
  // Owner photo (19 Nov 2026); the crop keeps the wall sign in view on
  // phones, where the box is narrower than the photo.
  aboutPhoto: {
    src: "/images/florida/fort-lauderdale-digital-marketing-agency.webp",
    alt: "Fort Lauderdale digital marketing illustration with SEO, PPC and web design icons and yachts in the marina",
    position: "left top",
  },
  aboutCard: {
    kicker: "Made for Broward County",
    title: "Your Fort Lauderdale plan",
    points: [
      "Map Pack rankings city by city",
      "Google Ads on high-intent searches",
      "AI answers that cite your business",
      "A fast site with tap-to-call",
    ],
    foot: "Strategy and reporting from Dover, DE",
  },
  // Fort Lauderdale palette: sunset magenta, Intracoastal sky, palm lime,
  // deep navy.
  pillars: ["#a21caf", "#e0f2fe", "#ecfccb", "#1e3a8a"],
  features: {
    h2: "How We Win Searches Across Broward County",
    lead: (
      <>
        Rankings that change at every city line, AI assistants that compare
        sources before naming anyone and owners who want a fair way to judge an
        agency. Here is how we handle each one.
      </>
    ),
    items: [
      {
        label: "City by city",
        title: "Map Pack Rankings Tracked in Every Broward City",
        body: (
          <>
            Ranking first for “ac repair” in Fort Lauderdale says little about
            Pompano Beach or Weston. We track your Map Pack position for each
            service in each city you cover, then add city pages, profile updates
            and reviews wherever the grid shows a gap. It is the core of our{" "}
            <Link
              href="/services/florida/local-seo"
              className="phl-inline-link"
            >
              local SEO in Florida
            </Link>{" "}
            work.
          </>
        ),
        points: [
          { t: "A grid for every service", d: "Positions checked per city." },
          { t: "Gaps ranked by value", d: "Busiest services fixed first." },
          { t: "City landing pages", d: "From Hollywood to Coral Springs." },
          { t: "Monthly grid refresh", d: "Progress you can see." },
        ],
        href: "/services/hvac-marketing-agency/florida",
        link: "See Florida HVAC marketing",
        ui: "city-1",
      },
      {
        label: "AI answers",
        title: "Named When Someone Asks AI About Las Olas",
        body: (
          <>
            Ask ChatGPT or Google’s AI Overviews for a lawyer, dentist or
            restaurant near Las Olas Boulevard and the reply leans on sources
            that agree: your site, your Business Profile, reviews and
            directories. We line those facts up, write pages that answer real
            questions and check monthly which assistants mention you. Read more
            about our{" "}
            <Link href="/services/ai-seo-services" className="phl-inline-link">
              AI search optimization
            </Link>
            .
          </>
        ),
        points: [
          { t: "Facts that match", d: "Same name, hours and services." },
          { t: "Answer-ready pages", d: "Questions answered up front." },
          { t: "Reviews that describe work", d: "Detail AI can quote." },
          { t: "Monthly AI audit", d: "Who names you, and where." },
        ],
        href: "/services/law-firm-marketing-agency",
        link: "See law firm marketing",
        ui: "city-2",
      },
      {
        label: "Choosing a partner",
        title: "How to Choose a Digital Marketing Agency in Fort Lauderdale",
        body: "Before you sign with any marketing agency in Fort Lauderdale, put five plain questions to it: who owns the accounts, whether ad spend is marked up, how long the contract runs, what the report measures and how AI search is handled. The clipboard shows the answers we give on every first call.",
        points: [
          { t: "You own every account", d: "Ads, profile and website." },
          { t: "No markup on spend", d: "Paid straight to Google." },
          { t: "Month-to-month terms", d: "Stay because it works." },
          { t: "Leads, not clicks", d: "Reports count booked jobs." },
        ],
        href: "#de-contact",
        link: "Put us to the test",
        ui: "city-3",
      },
    ],
  },
  platforms: {
    h2: "Found on the Apps Fort Lauderdale Checks First",
    lead: "People in Fort Lauderdale look you up on Google Search and Maps, follow directions in Waze, read Tripadvisor reviews, browse Facebook and Instagram and now ask ChatGPT or Gemini for a name. We keep your hours, services, photos and offers correct everywhere they look.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Search, maps and reviews",
    rightLabel: "Social feeds and AI assistants",
    centerIcon: <FiCompass aria-hidden="true" />,
    centerTitle: "Your Broward business",
    centerSub: "accurate on every app",
  },
  pricing: {
    title: "Fort Lauderdale Marketing Plans and Pricing",
    lead: "Month-to-month plans for Broward businesses, from Map Pack basics to a full program covering ads, SEO, social and AI search.",
    compareTitle: "Fort Lauderdale Plans, Side by Side",
    compareLead: "Everything each plan includes.",
    addOnsTitle: "Add-Ons for Broward Growth",
    addOnsLead:
      "Add cities, landing pages or extra campaigns whenever you need them.",
    customTitle: "Locations across Broward?",
    customText:
      "We’ll build a plan for each location and the cities around it.",
  },
  phone: "city",
  darkUi: "city",
  scoreStyle: "city",
  noGrow: true,
  reviewsTitle: "What Clients Write in Their Google Reviews",
  contact: {
    before: "Ready to Grow in",
    after: "Fort Lauderdale?",
    lead: "Share what you sell and the parts of Broward you cover. Our team will look over your ads, Business Profile and site at no cost.",
  },
  stepLinks: [
    "#de-contact",
    "/services/florida/local-seo",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ftlDmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
