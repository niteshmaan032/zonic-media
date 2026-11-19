/*
 * FLORIDA DIGITAL MARKETING — new live page (18 Nov 2026), the hub of the
 * Florida silo. Built on the location template shared with the Delaware,
 * Philadelphia and NYC pages (src/components/rd/delaware/DelawareLanding.tsx)
 * with this page's own UI (flMarketingUi.tsx). Plan:
 * https://claude.ai/artifact/AES7o7UFzy8bMQNW587U6G
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-keywords-
 * 2026-11.md): florida digital marketing agency 480 (KD 29) · digital
 * marketing florida 390 (KD 26) · digital marketing agency florida 1,000
 * (KD 66, long term) · marketing agency florida 590 · digital marketing
 * company florida 260 · best digital marketing agency in florida 210 ·
 * internet marketing florida 170 (KD 9) · south florida digital marketing
 * agency 140 (KD 22) · central florida digital marketing 110 (KD 8) · social
 * media marketing florida 110.
 *
 * Florida silo: this page owns the broad "digital marketing florida" terms
 * and will link down to the Florida local SEO, PPC and web design pages and
 * the city pages as each goes live (owner builds them one at a time). City
 * names appear in the copy, never in the title or H1, so the city pages own
 * them. Fresh wording only; company-wide verified numbers only; no Florida
 * office is implied (we serve Florida from Dover, Delaware).
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
  FiLayout,
  FiMapPin,
  FiMessageSquare,
  FiStar,
  FiSun,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";
import {
  SiFacebook,
  SiGoogle,
  SiGooglegemini,
  SiGooglemaps,
  SiInstagram,
  SiNextdoor,
  SiOpenai,
  SiYelp,
} from "react-icons/si";

const PAGE_PATH = "/services/florida/digital-marketing";

const TITLE = "Florida Digital Marketing Agency | Digital Marketing in Florida";

const DESCRIPTION =
  "Florida digital marketing agency for local businesses: Google Maps, Google Ads, AI search and websites planned around Florida's regions, seasons and storms.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "florida digital marketing agency",
    "digital marketing florida",
    "digital marketing agency florida",
    "digital marketing company florida",
    "best digital marketing agency in florida",
    "marketing agency florida",
    "marketing agencies in florida",
    "internet marketing florida",
    "online marketing florida",
    "south florida digital marketing agency",
    "central florida digital marketing",
    "social media marketing florida",
    "small business marketing florida",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/florida-digital-marketing-agency.webp",
        width: 1600,
        height: 900,
        alt: "Florida digital marketing dashboard with palm trees and a waterfront skyline",
      },
    ],
    title: TITLE,
    description:
      "One team for Google Maps, Google Ads, AI search and websites, planned around Florida's regions and its two busy seasons.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in Florida",
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
  areaServed: { "@type": "State", name: "Florida" },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses across Florida",
  },
};

const FlDmFaqs = [
  {
    question: "How much does digital marketing cost in Florida?",
    answer:
      "Our plans are a flat $297, $950 or $1,500 a month, and you can cancel any month. Ad spend is paid to Google or Meta with a 0% markup. The free audit shows which plan fits your region, your busy season and your competition before you commit.",
  },
  {
    question:
      "What does a Florida digital marketing agency do for a local business?",
    answer:
      "It puts you in front of people already searching for what you sell and makes calling you the easy choice. In practice that means a top-three Google Maps spot where you work, Google Ads on high-intent searches, visibility in AI answers and a website that books, all tracked to real leads.",
  },
  {
    question: "Which parts of Florida do you work in?",
    answer:
      "All of it. We plan campaigns for the Panhandle, North Florida, Central Florida, Tampa Bay, Southwest Florida and South Florida, and target only the cities and ZIP codes you actually serve. Our team works remotely from Dover, Delaware, with video calls whenever you need them.",
  },
  {
    question: "When should a Florida business prepare for snowbird season?",
    answer:
      "By September. Seasonal residents start searching for services and appointments as they arrive in October, so ads, Google posts and offers should already be live. We raise budgets through the winter months and use the quieter summer to build SEO.",
  },
  {
    question: "Can you run storm-response ads during hurricane season?",
    answer:
      "Yes, for roofing, restoration, tree, HVAC and generator companies. We prepare emergency ads, landing pages and Google profile updates before June, switch them on when a storm is named and return to everyday campaigns once cleanup winds down.",
  },
  {
    question: "Is SEO or Google Ads the better first step in Florida?",
    answer:
      "Google Ads can bring calls within days and reveal which searches are worth paying for, while local SEO grows Map Pack positions that keep producing calls with no per-click cost. In Florida we usually lead with ads before the busy season and build SEO during the slower months.",
  },
  {
    question: "How do I get my Florida business recommended by ChatGPT?",
    answer:
      "Assistants such as ChatGPT, Gemini and Google's AI Overviews look for consistent facts and clear answers. We align your website, Business Profile and directory listings, add answer-first service pages and schema, and review what each assistant says about your business every month.",
  },
  {
    question: "My Google Business Profile was suspended. What should I do?",
    answer:
      "Don't open a second listing; that usually makes things worse. Getting suspended listings back is what we're known for, with 900+ profiles restored, and once yours is back we keep every field within Google's guidelines so it stays live.",
  },
  {
    question: "Does my agency need to be based in Florida?",
    answer:
      "No. Map Pack positions, ads and websites come from steady, well-planned work, not a local address. Our in-house team serves Florida businesses from Dover, Delaware, meets on video and puts every result in a written monthly report.",
  },
];

const flDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: FlDmFaqs.map((faq) => ({
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
  { icon: SiNextdoor, name: "Nextdoor", tone: "nextdoor" },
  { icon: SiYelp, name: "Yelp", tone: "yelp" },
];
const hubRight: HubApp[] = [
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiGooglegemini, name: "Gemini", tone: "gemini" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Florida Digital Marketing Agency",
    h1Highlight: "for Businesses Statewide",
    sub: "Zonic Media runs digital marketing in Florida as one plan: Google Maps rankings, Google Ads, social, AI search and a website that books. Every region gets its own targeting, and campaigns are timed to snowbird season and hurricane season.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide verified numbers plus a public place count (Florida has 67 counties.)
    // No Florida client results, and no ad-markup stat (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "1,500+",
        label: "Business Profiles optimized by our team",
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
        label: "Plans, billed monthly or yearly",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "67",
        label: "Counties, from the Panhandle to the Keys",
      },
    ],
    proof: "",
    cta: "Get My Free Florida Marketing Audit",
  },
  about: {
    eyebrow: "Digital marketing in Florida",
    h2Start: "Florida Isn’t One Market.",
    h2Highlight: "We Plan Region by Region.",
    leads: [
      <>
        A pool builder in Naples, a law firm in Jacksonville and an HVAC company
        in Orlando chase different searches in different months. We study how
        customers search in your corner of the state, then spend where buyers
        are closest to picking up the phone.
      </>,
      <>
        Your ads, Maps profile, social channels and website sit with a single
        in-house team, and every result is reported as calls and booked jobs.
        Starting with rankings? See our{" "}
        <Link href="/services/florida/local-seo" className="phl-inline-link">
          Florida local SEO services
        </Link>
        . Need calls this month? Ask about{" "}
        <Link href="/services/florida/ppc" className="phl-inline-link">
          PPC management in Florida
        </Link>
        .
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Florida Digital Marketing Agency • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Florida Digital Marketing Services, Planned Together",
    lead: "Internet marketing for Florida businesses: search ads, Google Maps, AI search, websites, reviews and lead tracking, each one built to feed the next.",
    cards: [
      {
        tone: "blue",
        icon: <FiTarget aria-hidden="true" />,
        title: "Google Ads Across Florida Metros",
        desc: "Paid search and Local Services campaigns focused on your counties and ZIP codes, with bids lifted during your busy months.",
        points: [
          "Campaigns split by metro",
          "Seasonal budget shifts",
          "No markup on your ad budget",
        ],
        href: "/services/florida/ppc",
        link: "Florida PPC management",
      },
      {
        tone: "gold",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Top-Three Map Spots in Your Region",
        desc: "A fully built Business Profile, service-area pages and fresh reviews that lift you toward the top three results in your area.",
        points: [
          "Profile tuned every week",
          "Rankings tracked by city",
          "Pages for each service area",
        ],
        href: "/services/florida/local-seo",
        link: "Florida local SEO",
      },
      {
        tone: "blue",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "AI Search for Florida Businesses",
        desc: "Answer-ready pages, schema and matching business facts, so ChatGPT and Google’s AI Overviews suggest you by name.",
        points: [
          "Answer-first service pages",
          "Schema on key pages",
          "Monthly AI mention checks",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
      {
        tone: "gold",
        icon: <FiLayout aria-hidden="true" />,
        title: "Websites That Turn Visits Into Calls",
        desc: "Fast, phone-first sites with click-to-call, online booking and storm-season pages, so ad and Maps traffic becomes work.",
        points: [
          "Mobile-first layouts",
          "Tap-to-call and online booking",
          "Live in two to three weeks",
        ],
        href: "/services/florida/web-design",
        link: "Florida web design",
      },
      {
        tone: "blue",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Reviews and Listing Safety",
        desc: "A review request after each finished job, owner replies drafted in your voice, and fast recovery if Google suspends your listing.",
        points: [
          "Texted review requests",
          "Replies in your voice",
          "Help if you’re suspended",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Profile reinstatement",
      },
      {
        tone: "gold",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Lead Tracking by Florida Region",
        desc: "Every call, form and message tagged with the channel and region it came from, in a report you can read in minutes.",
        points: [
          "Call tracking by source",
          "Leads matched to jobs",
          "A regional monthly report",
        ],
        href: "#de-contact",
        link: "Get a free audit",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "See Which Florida Regions Bring You Customers",
    leads: [
      <>
        South Florida might fill your calendar while Central Florida clicks
        convert less. Your report splits leads, calls and Map Pack positions by
        region, so the effort follows the places that book.
      </>,
      <>
        Serve homeowners in a specialized trade? See our{" "}
        <Link
          href="/services/hvac-marketing-agency/florida"
          className="phl-inline-link"
        >
          Florida HVAC marketing
        </Link>
        ,{" "}
        <Link
          href="/services/plumbing-marketing-agency/florida"
          className="phl-inline-link"
        >
          Florida plumbing marketing
        </Link>{" "}
        and{" "}
        <Link
          href="/services/home-inspector-marketing/florida"
          className="phl-inline-link"
        >
          Florida home inspector marketing
        </Link>{" "}
        programs.
      </>,
    ],
    cta: "Get My Florida Region Report",
    // Sample report UI, not client data.
    console: {
      title: "Florida lead map",
      tag: "Sample report",
      metrics: [
        { strong: "6", label: "Regions planned" },
        { strong: "Top 3", label: "Map Pack goal" },
        { strong: "12", label: "Months mapped ahead" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "How a Florida Campaign Goes Live",
    steps: [
      {
        tag: "Week 1",
        title: "Check Your Florida Visibility",
        desc: "Your ads, Business Profile, website and regional competitors get a full check, and we point out exactly where leads leak.",
      },
      {
        tag: "Weeks 2–4",
        title: "Mapping Every Region and Season",
        desc: "Ads, Maps work, AI search and social mixed for every region you serve, with budgets set around your busy months.",
      },
      {
        tag: "Weekly",
        title: "Launch With Tracking From Day One",
        desc: "Campaigns go live with call and form tracking, and every week we clean search terms, schedule posts, improve pages and answer reviews.",
        chips: ["Search terms cleaned", "Posts scheduled", "Reviews replied"],
      },
      {
        tag: "Monthly",
        title: "Move Budget to What Books",
        desc: "Your report shows leads by channel, region and month, and we shift effort toward whatever books jobs before the next season.",
        chips: ["Region report", "Season plan", "Next moves"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My Florida Growth Audit",
  },
  showcase: undefined,
  compare: {
    h2: "One Florida Team vs. Scattered Vendors",
    lead: "Where Florida marketing budgets leak, and how we close the gaps.",
    themTitle: "Scattered Vendors",
    themSub: "Why results stall",
    them: [
      "A separate vendor for each channel",
      "One statewide campaign for every region",
      "The same ads in January and August",
      "Reports full of clicks, not leads",
      "Annual contracts before any results",
    ],
    usTitle: "Our Florida Program",
    usSub: "One team, measured in leads",
    us: [
      "Ads, Maps, AI search and web together",
      "A plan for each region you serve",
      "Budgets that follow your seasons",
      "Every lead traced to a booked job",
      "Month to month, cancel anytime",
    ],
    scoreTitle: "Sample Florida Scorecard",
    scoreSub: "An illustration of four signals our audit grades",
    scoreRows: [
      { label: "Regional reach", before: 22, after: 82 },
      { label: "Season readiness", before: 30, after: 88 },
      { label: "Lead tracking", before: 38, after: 100 },
      { label: "AI visibility", before: 15, after: 70 },
    ],
  },
  why: {
    h2: "Why Florida Businesses Hire Zonic Media",
    lead: "One accountable team, judged on calls and booked jobs.",
    cards: [
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "Every channel, one team",
        desc: "Ads, SEO, AI search, social and web managed in-house.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "No long contracts",
        desc: "Month-to-month plans, with 0% markup on ad spend.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Results by region",
        desc: "Leads, calls and bookings for each Florida region, every month.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Find the Florida Searches You’re Missing",
      p: "We study your ads, Business Profile, website and regional rivals, then send a plan built for your next busy season. Free of charge, with nothing to sign.",
      checks: [
        "Wasted ad spend flagged",
        "Regional rivals mapped",
        "Profile risks listed",
        "A season-by-season plan",
      ],
      cta: "Get My Free Florida Audit",
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
    chipsLabel: "Industries we grow in Florida",
    chips: [
      "HVAC & Plumbing",
      "Roofing & Restoration",
      "Pools & Outdoor Living",
      "Dentists & Clinics",
      "Law Firms",
      "Real Estate",
      "Home Inspectors",
      "Restaurants & Hospitality",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Florida Digital Marketing Questions, Answered",
    lead: "Costs, regions, seasons, storms and AI search, explained plainly.",
    cta: "",
    items: FlDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Florida Marketing Audit",
    lead: "Tell us about your business and we’ll send an audit and a plan for the regions you serve.",
    formType: "florida-digital-marketing",
    badge: "Free Audit",
    title: "Get Your Free Florida Growth Audit",
    subtitle: "A one-minute form, and nothing to sign afterwards.",
    submitText: "Request My Audit",
    messageLabel: "What should we know about your business?",
    messagePlaceholder:
      "Your services, the Florida cities you cover, what you run today and your busiest months",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-marketing",
  heroChips: {
    label: "Florida counties",
    items: ["Miami-Dade", "Broward", "Hillsborough", "Orange", "Duval"],
    more: true,
  },
  aboutTitle: ["Florida Isn’t", "One Market. We Plan", "Region by Region."],
  aboutPhoto: {
    src: "/images/florida/florida-digital-marketing-agency.webp",
    alt: "Florida digital marketing dashboard with palm trees and a waterfront skyline",
    position: "center top",
  },
  aboutCard: {
    kicker: "One plan for Florida",
    title: "What we run for you",
    points: [
      "Google Ads and Local Services Ads",
      "Google Maps rankings by region",
      "AI search visibility and reviews",
      "Websites built to win calls",
    ],
    foot: "Planned by our in-house team in Dover, DE",
  },
  // Florida palette: Gulf teal, sunset peach, palm green, night indigo.
  pillars: ["#0e7490", "#fed7aa", "#bbf7d0", "#1e1b4b"],
  features: {
    h2: "Built Around How Florida Buys",
    lead: (
      <>
        Two seasons that move demand, storms that move it overnight and more
        customers asking AI first. Here is how we plan for each.
      </>
    ),
    items: [
      {
        label: "Seasons",
        title: "Campaigns Timed to Florida’s Two Seasons",
        body: "Snowbird months from October to April bring extra residents and searches, while hurricane season from June to November shifts demand toward repairs and prep. We set budgets, offers and posts on a yearly calendar, so you are visible before each wave arrives.",
        points: [
          { t: "Yearly demand calendar", d: "Budgets set month by month." },
          { t: "Snowbird-season ads", d: "Reach seasonal residents early." },
          { t: "Off-season SEO", d: "Rankings built in quiet months." },
          { t: "Offers for each month", d: "Fresh posts and promotions." },
        ],
        href: "/services/florida/ppc",
        link: "See Florida PPC management",
        ui: "seasons",
      },
      {
        label: "Storms",
        title: "Storm-Ready Campaigns That Switch On Fast",
        body: "When a storm is named, searches change within hours. For contractors we keep emergency ads, landing pages and Google posts ready to switch on, then return to everyday campaigns once cleanup ends.",
        points: [
          { t: "Prebuilt storm ads", d: "Written before the season." },
          { t: "Emergency landing pages", d: "Clear 24/7 call buttons." },
          { t: "Profile updates", d: "Hours and services kept current." },
          { t: "Quick switch-back", d: "Everyday ads resume after." },
        ],
        href: "/services/hvac-marketing-agency/florida",
        link: "See Florida HVAC marketing",
        ui: "storm",
      },
      {
        label: "AI search",
        title: "Recommended When Floridians Ask AI",
        body: "A growing number of customers now type their question into ChatGPT, Gemini or Google’s AI Overviews before they search. We keep your website, Business Profile and listings consistent, publish answer-first pages and check what each assistant says about you every month.",
        points: [
          { t: "Answer-first pages", d: "Questions answered up top." },
          { t: "Matching business facts", d: "Same details everywhere." },
          { t: "Reviews that name the work", d: "Proof assistants trust." },
          { t: "Monthly AI checks", d: "See where you’re mentioned." },
        ],
        href: "/services/ai-seo-services",
        link: "See AI SEO services",
        ui: "aicities",
      },
    ],
  },
  platforms: {
    h2: "Seen on Every App Floridians Use",
    lead: "Floridians check Google Search and Maps, ask neighbors on Nextdoor, scroll Facebook and Instagram, and increasingly ask ChatGPT or Gemini who to call. Your hours, services, reviews and posts stay accurate and in step across all of them.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Search, maps and neighbors",
    rightLabel: "Social feeds and AI answers",
    centerIcon: <FiSun aria-hidden="true" />,
    centerTitle: "Your Florida business",
    centerSub: "one story, every app",
  },
  pricing: {
    title: "Florida Digital Marketing Pricing",
    lead: "Month-to-month plans for Florida businesses, from Google Maps basics to a full ads, SEO and social program.",
    compareTitle: "What Each Florida Plan Covers",
    compareLead: "Every plan, feature by feature.",
    addOnsTitle: "Add-Ons for Growing Florida Businesses",
    addOnsLead: "Add regions, landing pages or campaigns when you’re ready.",
    customTitle: "Several Florida locations?",
    customText: "We’ll plan each location and region you serve.",
  },
  phone: "stormprep",
  darkUi: "statewide",
  scoreStyle: "thermo",
  noGrow: true,
  reviewsTitle: "What Our Clients Say on Google",
  cities: {
    h2: "Digital Marketing in Florida’s Major Cities",
    lead: "Every metro has its own searches, busy months and competitors, so each one gets its own plan. Choose your city to see how we handle Maps, ads and AI search there.",
    items: [
      {
        name: "Miami",
        region: "Miami-Dade",
        desc: "Marketing for a city that searches in English and Spanish, planned neighborhood by neighborhood from Brickell to Doral.",
        href: "/services/miami/digital-marketing",
        link: "Miami digital marketing agency",
      },
      {
        name: "Tampa",
        region: "Tampa Bay",
        desc: "Local SEO, ads and websites for Hillsborough businesses, from Westshore offices to home service crews in Brandon.",
        href: "/services/tampa/digital-marketing",
        link: "Digital marketing in Tampa, FL",
      },
      {
        name: "Orlando",
        region: "Central Florida",
        desc: "Campaigns that separate tourist-corridor searches from the suburbs, from Winter Park and Lake Nona down to Kissimmee.",
        href: "/services/orlando/digital-marketing",
        link: "Orlando digital marketing agency",
      },
      {
        name: "Fort Lauderdale",
        region: "Broward County",
        desc: "Search and Maps visibility across Broward, from Las Olas and the beach to Plantation, Hollywood and Coral Springs.",
        href: "/services/fort-lauderdale/digital-marketing",
        link: "Fort Lauderdale digital marketing agency",
      },
      {
        name: "Jacksonville",
        region: "Northeast Florida",
        desc: "Search, Maps and ads planned for a city that stretches from Mandarin to the Beaches, so each side of the river gets its own reach.",
        href: "/services/jacksonville/digital-marketing",
        link: "Jacksonville digital marketing agency",
      },
      {
        name: "St. Petersburg",
        region: "Pinellas County",
        desc: "Map rankings and ads for St. Pete shops, clinics and trades, from downtown and the Grand Central District to the beaches.",
        href: "/services/st-petersburg/digital-marketing",
        link: "St. Petersburg digital marketing agency",
      },
      {
        name: "Fort Myers",
        region: "Southwest Florida",
        desc: "Lead generation for contractors, pool companies and clinics across Fort Myers, Cape Coral and the rest of Lee County.",
        href: "/services/fort-myers/digital-marketing",
        link: "Fort Myers digital marketing agency",
      },
      {
        name: "Sarasota",
        region: "Gulf Coast",
        desc: "Season-aware marketing for Sarasota, Lakewood Ranch and Venice, timed to the months when winter residents return.",
        href: "/services/sarasota/digital-marketing",
        link: "Digital marketing in Sarasota",
      },
    ],
    // Largest search markets first; the fourth card opens the other five
    // in a pop-up (owner, 19 Nov 2026).
    more: {
      shown: 3,
      region: "Across Florida",
      title: "Five More Florida Cities",
      open: "See all five",
      dialogTitle: "Choose Your Florida City",
      dialogLead:
        "Each page covers that city’s searches, neighborhoods and busy months.",
      elsewhere: {
        title: "Somewhere Else in Florida?",
        body: "Gainesville, Tallahassee, Naples or Pensacola: the Florida plan covers your county too.",
        href: "#de-contact",
        link: "Ask for a free Florida audit",
      },
    },
  },
  contact: {
    before: "Let’s Grow Your",
    after: "Florida Business",
    lead: `Tell us what you sell and which Florida cities you serve. We’ll review your ads, Google profile and website for free.`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flDmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
