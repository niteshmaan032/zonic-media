/*
 * FLORIDA PPC / SEM — new live page (18 Nov 2026) in the Florida silo, under
 * the hub /services/florida/digital-marketing. Built on the location
 * template shared with the Delaware, Philadelphia and NYC pages
 * (src/components/rd/delaware/DelawareLanding.tsx) with this page's own UI
 * (flPpcUi.tsx). Brief: docs/florida-pages-brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-keywords-
 * 2026-11.md): ppc agency florida 320 (KD 10) · ppc management florida 70
 * (KD 5) · search engine marketing florida 70 (KD 14) · google ads agency
 * florida 40 (KD 3) · google ads management florida 40 (KD 0) · sem agency
 * florida 30 · sem florida 20.
 *
 * The owner chose /ppc over /sem, so SEM is covered in the copy (services
 * card, FAQ "What is SEM…"). The hub owns "digital marketing agency"; the
 * sibling pages own local SEO and web design (linked with keyword anchors).
 * City names appear in the copy only, never in the title or H1. No fee for
 * Google Ads is stated anywhere (owner rule): plans live in the pricing
 * section; ad spend is billed by Google or Meta with a 0% markup.
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
  FiBarChart2,
  FiCrosshair,
  FiFileText,
  FiKey,
  FiLayers,
  FiLayout,
  FiMessageSquare,
  FiNavigation,
  FiPercent,
  FiPhone,
  FiPhoneCall,
  FiSearch,
  FiShield,
  FiStar,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import { SiGoogle, SiGoogleads, SiGooglemaps, SiYoutube } from "react-icons/si";

const PAGE_PATH = "/services/florida/ppc";

const TITLE = "PPC Agency Florida | Google Ads & SEM Management";

const DESCRIPTION =
  "PPC agency for Florida businesses: Google Ads, Local Services Ads and SEM aimed at the counties you serve and paced for snowbird and hurricane seasons.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "ppc agency florida",
    "ppc management florida",
    "search engine marketing florida",
    "google ads agency florida",
    "google ads management florida",
    "sem agency florida",
    "sem florida",
    "florida ppc agency",
    "pay per click florida",
    "local services ads florida",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/florida-ppc-agency.webp",
        width: 1600,
        height: 900,
        alt: "Florida PPC dashboard for paid ads on a laptop, with a waterfront skyline",
      },
    ],
    title: TITLE,
    description:
      "Google Ads, call ads and Local Services Ads for Florida, targeted by county and budgeted around the state's two busy seasons.",
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
  { name: "Florida PPC Agency", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PPC Management in Florida",
  alternateName: [
    "Google Ads Management in Florida",
    "Search Engine Marketing in Florida",
  ],
  serviceType: "Pay-Per-Click Advertising Management",
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
    name: "Florida businesses advertising on Google",
  },
};

const FlPpcFaqs = [
  {
    question: "How is PPC management priced for Florida businesses?",
    answer:
      "Management comes inside our monthly plans, listed in the pricing section above, and every plan runs month to month. Your ad budget is separate: Google or Meta bills your card directly, with a 0% markup from us. The free audit suggests a starting budget for your region and season.",
  },
  {
    question: "What is SEM, and is it different from PPC?",
    answer:
      "SEM, or search engine marketing, means winning customers from search engines, mostly through paid search ads and often alongside SEO. PPC is the pay-per-click model those ads use, and it covers social ads too. For Florida clients we run SEM as one plan, so paid and organic search share a keyword list.",
  },
  {
    question: "Do Local Services Ads work for Florida businesses?",
    answer:
      "For many home service trades, yes. Local Services Ads usually sit above regular search ads, charge per lead rather than per click and carry the Google Verified badge once your license, insurance and background checks pass. Eligible categories differ by trade and state, so we confirm yours in the audit.",
  },
  {
    question: "How should Google Ads change for snowbird season?",
    answer:
      "Plan it in September. We lift budgets and add seasonal ad copy as residents return in October, stretch schedules across busy winter weekends and ease spend after April. Services that seasonal owners book from up north, such as home watch or AC checks, can reach them before they fly down.",
  },
  {
    question: "What happens to my ads when a hurricane is coming?",
    answer:
      "Storm campaigns for roofing, restoration, tree and generator work are written and approved before June, so they can go live in minutes. Ads for routine services pause in evacuation zones, and once roads reopen we raise storm budgets in the hardest-hit counties.",
  },
  {
    question: "Can my ads reach only the Florida counties I serve?",
    answer:
      "Yes. We target by county, city, ZIP code or a radius around each location, exclude places your crews don’t cover and set Google to show ads to people in those areas rather than people reading about them. Each region can carry its own ads and budget.",
  },
  {
    question: "How soon will a new Florida campaign bring calls?",
    answer:
      "Search and call ads can ring your phone in the first week after approval. Local Services Ads take longer, because verification comes first and can last a few weeks. Results steady over the first one to three months as search terms get cleaned and bidding learns from booked jobs.",
  },
  {
    question: "Do Google Ads appear in AI Overviews?",
    answer:
      "For some commercial searches, Google now places ads inside or beside its AI Overviews. There is no separate campaign for that spot; eligible Search and Performance Max campaigns can show there. To be named in the AI answer itself, pair your ads with AI SEO work on your site and profile.",
  },
  {
    question: "Who owns the Google Ads account and its data?",
    answer:
      "You do. Campaigns run in an account under your business name with our team added as managers, so the history, audiences and conversion data stay with you if you ever leave.",
  },
  {
    question: "Can a team outside Florida manage my Florida ads?",
    answer:
      "Yes. Good targeting comes from search data and steady testing, not a local office. Our in-house team runs Florida accounts from Dover, Delaware, studies the searches in each region and meets you on video whenever you want to walk through results.",
  },
];

const flPpcFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: FlPpcFaqs.map((faq) => ({
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
  { icon: SiYoutube, name: "YouTube", tone: "youtube" },
  { icon: FaMicrosoft, name: "Microsoft Bing", tone: "bing" },
];
const hubRight: HubApp[] = [
  { icon: FiPhone, name: "Phone calls", tone: "calls" },
  { icon: FiMessageSquare, name: "Text messages", tone: "texts" },
  { icon: FiFileText, name: "Form leads", tone: "forms" },
  { icon: FiNavigation, name: "Direction requests", tone: "directions" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Florida PPC Agency",
    h1Highlight: "for Google Ads Management and SEM",
    sub: "Zonic Media runs pay-per-click for Florida businesses: Google Search ads, call ads and Local Services Ads fenced to the counties you serve. Budgets rise for snowbird months and storm weeks, and each call is traced to the search that sent it.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Verified company numbers and Florida coverage only (no client results).
    // No ad-markup stat in the hero (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiSearch aria-hidden="true" />,
        num: "Free",
        label: "Florida PPC audit before you commit to a plan",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <FiCrosshair aria-hidden="true" />,
        num: "6",
        label: "Florida regions, targeted one by one",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "20+",
        label: "Industries on our client list",
      },
    ],
    proof: "",
    cta: "Book My Free Florida PPC Audit",
  },
  about: {
    eyebrow: "PPC management in Florida",
    h2Start: "Every Paid Click Should Come",
    h2Highlight: "From Where You Work.",
    leads: [
      <>
        Florida stretches from the Panhandle to the Keys, and a statewide
        campaign easily pays for clicks from towns your crews never reach. We
        fence campaigns to your counties, write ads for each region and turn
        spend up when customers are ready to book.
      </>,
      <>
        Search engine marketing in Florida works best as one plan: paid search
        for calls this week, organic rankings for next season. Pair your ads
        with our{" "}
        <Link href="/services/florida/local-seo" className="phl-inline-link">
          Florida local SEO
        </Link>{" "}
        work, or start with{" "}
        <Link href="/services/google-ads" className="phl-inline-link">
          Google Ads management
        </Link>{" "}
        on its own.
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Florida PPC Agency • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "PPC Management Services Across Florida",
    lead: "Google Ads management in Florida for search, Maps, calls and Local Services Ads, with tracking that ties each lead to the keyword behind it.",
    cards: [
      {
        tone: "blue",
        icon: <FiSearch aria-hidden="true" />,
        title: "Google Search Ads by Region",
        desc: "Separate campaigns for South Florida, Tampa Bay, Central Florida and beyond, each with its own keywords, ad copy and county targeting.",
        points: [
          "Campaigns split by region",
          "Ads that name local areas",
          "Out-of-area clicks excluded",
        ],
        href: "/services/google-ads",
        link: "Google Ads management",
      },
      {
        tone: "gold",
        icon: <FiShield aria-hidden="true" />,
        title: "Google Verified Local Services Ads",
        desc: "We prepare your license, insurance and background checks for the Google Verified badge, then manage the pay-per-lead ads and the reviews that rank them.",
        points: [
          "Verification paperwork handled",
          "Every lead answered and rated",
          "A steady flow of new reviews",
        ],
        href: "/local-seo-google-business-optimization",
        link: "Business Profile optimization",
      },
      {
        tone: "blue",
        icon: <FiPhoneCall aria-hidden="true" />,
        title: "Call Ads for Phone-First Trades",
        desc: "For AC, plumbing, roofing and restoration companies: ads built around a call button and scheduled for the hours someone picks up the phone.",
        points: [
          "Tap-to-call on every ad",
          "Hours matched to your office",
          "After-hours storm lines",
        ],
        href: "/services/plumbing-marketing-agency/florida",
        link: "Florida plumbing marketing",
      },
      {
        tone: "gold",
        icon: <FiLayout aria-hidden="true" />,
        title: "Landing Pages That Match the Ad",
        desc: "Each campaign points to a fast page that repeats the searcher’s words, names their area and keeps the phone number in view.",
        points: [
          "A page for each service",
          "Click-to-call at the top",
          "Designed for phones first",
        ],
        href: "/services/florida/web-design",
        link: "Florida web design company",
      },
      {
        tone: "blue",
        icon: <FiLayers aria-hidden="true" />,
        title: "SEM With Paid and Organic Together",
        desc: "Search engine marketing as one plan: ads cover high-intent searches now, while SEO and AI search work build rankings that cut paid clicks later.",
        points: [
          "One shared keyword list",
          "Ads paused where SEO wins",
          "Visibility in AI Overviews",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
      {
        tone: "gold",
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Call and Form Conversion Tracking",
        desc: "Calls, forms and texts recorded as conversions, with booked jobs fed back to Google so bidding learns which searches turn into paid work.",
        points: [
          "Source on every call",
          "Booked jobs sent to Google",
          "A plain monthly report",
        ],
        href: "#de-contact",
        link: "Get a free ad audit",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Know Which Searches Turn Into Booked Jobs",
    leads: [
      <>
        Every lead is logged with the search term, campaign and region behind
        it. A call counts once it passes a set length, a minute by default, and
        booked jobs flow back into Google Ads so bidding favors the searches
        that pay off.
      </>,
      <>
        For trade-specific campaigns, see{" "}
        <Link
          href="/services/hvac-marketing-agency/florida"
          className="phl-inline-link"
        >
          Florida HVAC marketing
        </Link>{" "}
        or{" "}
        <Link
          href="/services/home-inspector-marketing/florida"
          className="phl-inline-link"
        >
          home inspector marketing in Florida
        </Link>
        .
      </>,
    ],
    cta: "Get My Free Tracking Check",
    // Sample log UI, not client data.
    console: {
      title: "Lead source log",
      tag: "Sample account",
      metrics: [
        { strong: "1 min", label: "Default call length we count" },
        { strong: "3", label: "Lead types: calls, forms, texts" },
        { strong: "0%", label: "Markup on ad spend" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "How Your Florida PPC Account Gets Built",
    steps: [
      {
        tag: "Week 1",
        title: "Audit Targeting and Tracking",
        desc: "We check location settings, conversion tracking, search terms and schedules in your current account, or plan a new one, then rank every fix.",
      },
      {
        tag: "Weeks 2–3",
        title: "Build Campaigns Region by Region",
        desc: "Campaigns, ad groups and negative keyword lists for each region you serve, plus call ads, Local Services Ads and season schedules ready to launch.",
      },
      {
        tag: "Weekly",
        title: "Sweep the Search Terms",
        desc: "Each week we read the searches that triggered your ads, block the ones that never buy and turn proven searches into keywords.",
        chips: ["Negatives added", "Winners promoted", "Bids checked"],
      },
      {
        tag: "Monthly",
        title: "Shift Budget Before Each Season",
        desc: "A monthly report shows leads by region and campaign, and budget moves toward what books ahead of the next busy stretch.",
        chips: ["Leads by region", "Pacing plan", "Storm standby"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My Florida Ads Audit",
  },
  showcase: undefined,
  compare: {
    h2: "Autopilot Ads vs. Managed Florida PPC",
    lead: "Where Florida ad budgets tend to slip, and what changes once we manage the account.",
    themTitle: "Autopilot Accounts",
    themSub: "Set up once, seldom checked",
    them: [
      "One campaign for the whole state",
      "Clicks counted, calls ignored",
      "Same budget in July and January",
      "Search terms left unread",
      "Storm ads written mid-storm",
    ],
    usTitle: "Managed Florida PPC",
    usSub: "Checked weekly, judged on jobs",
    us: [
      "Campaigns fenced by region",
      "Calls and booked jobs tracked",
      "Budgets paced to both seasons",
      "Search terms swept every week",
      "Storm ads approved in advance",
    ],
    scoreTitle: "Sample Florida Ad Account Grades",
    scoreSub: "How our audit rates four account basics (example)",
    scoreRows: [
      { label: "Location targeting", before: 30, after: 92 },
      { label: "Search-term hygiene", before: 25, after: 85 },
      { label: "Call tracking", before: 45, after: 100 },
      { label: "Season pacing", before: 20, after: 75 },
    ],
  },
  why: {
    h2: "What You Get When We Manage Your Florida Ads",
    lead: "Plain terms, your own ad account and reporting measured in calls.",
    cards: [
      {
        icon: <FiKey aria-hidden="true" />,
        title: "Your login, your data",
        desc: "We work inside a Google Ads account you own, so its history stays with you.",
      },
      {
        icon: <FiPercent aria-hidden="true" />,
        title: "Spend billed straight to you",
        desc: "Google or Meta charges your card directly, and we add a 0% markup.",
      },
      {
        icon: <FiTarget aria-hidden="true" />,
        title: "Booked jobs as the yardstick",
        desc: "Reports count calls, forms and booked jobs by region, not impressions.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "See What Your Florida Ad Spend Is Really Buying",
      p: "We review your campaigns, search terms, tracking and regional targeting, then send a season-by-season plan. It’s free, with no contract to sign.",
      checks: [
        "Wasted searches listed",
        "Targeting gaps mapped",
        "Tracking holes found",
        "A budget plan for each season",
      ],
      cta: "Claim My Florida Ads Audit",
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
    chipsLabel: "Industries we advertise for in Florida",
    chips: [
      "AC & Heating",
      "Roofing",
      "Water Restoration",
      "Pool Service",
      "Pest Control",
      "Personal Injury Law",
      "Dental Practices",
      "Home Inspection",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "What Florida Owners Ask About PPC and SEM",
    lead: "Pricing, seasons, storms, Local Services Ads, AI Overviews and who owns the account.",
    cta: "",
    items: FlPpcFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Florida PPC Audit",
    lead: "Share your services and counties, and we’ll audit your ads or plan a new account.",
    formType: "florida-ppc",
    badge: "Free Audit",
    title: "Get Your Free Florida Google Ads Audit",
    subtitle: "About a minute to fill in, and no contract follows.",
    submitText: "Request My Ads Audit",
    messageLabel: "Tell us about your ads",
    messagePlaceholder:
      "Your services, the Florida counties you cover, whether you run ads today and your busiest months",
    defaultServices: ["Pay Per Click (PPC)"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-ppc",
  aboutTitle: ["Every Paid Click", "Should Come From", "Where You Work."],
  aboutPhoto: {
    src: "/images/florida/florida-ppc-agency.webp",
    alt: "Florida PPC dashboard for paid ads on a laptop, with a waterfront skyline",
    position: "center top",
  },
  aboutCard: {
    kicker: "Florida PPC, run for you",
    title: "Inside your ad account",
    points: [
      "Search campaigns split by region",
      "Local Services Ads and Google Verified setup",
      "Call ads scheduled for open hours",
      "Call, form and text tracking",
    ],
    foot: "Your account team works from Dover, DE",
  },
  // PPC palette: burnt orange, sky, lemon, indigo.
  pillars: ["#c2410c", "#e0f2fe", "#fef9c3", "#312e81"],
  features: {
    h2: "Google Ads Built for How Florida Searches",
    lead: (
      <>
        A long map, two busy seasons and storms that change demand overnight.
        This is how we set up your account for each of them.
      </>
    ),
    items: [
      {
        label: "Geo-targeting",
        title: "Ads Fenced to the Counties You Actually Serve",
        body: "Campaigns target your counties and ZIP codes, with Google’s location option set to reach people in those places, not people reading about them. For services booked ahead, like home watch or AC checks, we can also reach seasonal owners still up north.",
        points: [
          { t: "County-level targeting", d: "Only where your crews drive." },
          { t: "Presence-only setting", d: "Fewer out-of-state clicks." },
          { t: "Region-specific ad copy", d: "Ads that name the area." },
          { t: "Snowbird reach", d: "For services booked ahead." },
        ],
        href: "/services/google-ads",
        link: "See Google Ads management",
        ui: "fl-ppc-1",
      },
      {
        label: "Seasons",
        title: "Ad Budgets That Rise and Fall With Florida Demand",
        body: "Spend climbs from October, when seasonal residents return, and eases after April. From June to November, storm campaigns sit on standby with ads and budgets already approved, ready to switch on the day a storm is named.",
        points: [
          { t: "Fall ramp-up", d: "Budgets lifted before arrivals." },
          { t: "Spring wind-down", d: "Spend eased as residents leave." },
          { t: "Storm standby", d: "Approved ads ready to run." },
          { t: "Weekly pacing checks", d: "No budget gone by mid-month." },
        ],
        href: "/services/florida/digital-marketing",
        link: "See our Florida digital marketing agency",
        ui: "fl-ppc-2",
      },
      {
        label: "Calls",
        title: "Built for Trades Where the Phone Rings First",
        body: "Homeowners with a leak or a dead AC rarely fill in forms; they call. We run Local Services Ads and call ads side by side, schedule both around staffed hours and count only real conversations as leads.",
        points: [
          { t: "Google Verified badge", d: "Trust shown before the call." },
          { t: "Pay-per-lead option", d: "Local Services Ads bill per lead." },
          { t: "Staffed-hours schedule", d: "No calls to an empty office." },
          { t: "Real-call counting", d: "Hang-ups left out." },
        ],
        href: "/services/hvac-marketing-agency/florida",
        link: "See Florida HVAC marketing",
        ui: "fl-ppc-3",
      },
    ],
  },
  platforms: {
    h2: "Where Florida Ads Show and How Leads Arrive",
    lead: "Your ads can run on Google Search, Google Maps, YouTube and Microsoft Bing, which still reaches many desktop searchers. Whatever follows, whether a call, text, form or request for directions, lands in the same report.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Where your ads show",
    rightLabel: "How leads reach you",
    centerIcon: <SiGoogleads aria-hidden="true" />,
    centerTitle: "Your Florida ad account",
    centerSub: "each lead traced to its ad",
  },
  pricing: {
    title: "Florida PPC Management Pricing",
    lead: "Month-to-month plans for Florida advertisers; ad spend is billed by Google or Meta.",
    compareTitle: "Florida PPC Plans, Line by Line",
    compareLead: "What each plan covers for ads, tracking and reporting.",
    addOnsTitle: "Extra Campaigns and Pages for Florida Advertisers",
    addOnsLead: "Add regions, landing pages or campaigns as you grow.",
    customTitle: "Advertising in several Florida regions?",
    customText: "We’ll scope a plan for every region you cover.",
  },
  phone: "fl-ppc",
  darkUi: "fl-ppc",
  scoreStyle: "fl-ppc",
  noGrow: true,
  reviewsTitle: "Straight From Our Google Reviews",
  contact: {
    before: "Let’s Plan Your",
    after: "Next Florida Ad Season",
    lead: `Tell us your services and the Florida counties you cover. We’ll review your Google Ads account, or plan a new one, at no cost.`,
  },
  stepLinks: [
    "#de-contact",
    "/services/google-ads",
    "#de-contact",
    "/services/florida/digital-marketing",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flPpcFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
