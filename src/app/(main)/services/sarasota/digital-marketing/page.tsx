/*
 * SARASOTA DIGITAL MARKETING — new live page (18 Nov 2026), a city page in
 * the Florida silo under the hub /services/florida/digital-marketing. Built
 * on the location template (src/components/rd/delaware/DelawareLanding.tsx)
 * with this page's own UI (flSarasotaUi.tsx). Brief: docs/florida-cities-
 * brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-cities-
 * keywords-2026-11.md): digital marketing sarasota 320 (KD 5) · digital
 * marketing agency sarasota 320 (KD 16) · sarasota digital marketing 260 ·
 * sarasota marketing agency 320 (KD 22) · sarasota digital marketing
 * agency / company 170 each · digital marketing services sarasota 140
 * (KD 11) · online digital marketing services sarasota 210 · digital
 * marketing sarasota pool companies 170. Secondary, in H2/H3, FAQs and
 * body only: seo company sarasota 590 · seo sarasota 320 · web design
 * sarasota 720 · social media marketing sarasota 320 · ppc sarasota 90 ·
 * marketing agency lakewood ranch (rising).
 *
 * Rules: the hub owns "florida digital marketing agency"; Tampa owns
 * "Tampa Bay" (never used here); St. Petersburg owns Pinellas / St. Pete.
 * No Sarasota office: served from Dover, Delaware. Company-wide verified
 * numbers only; no aggregateRating.
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
  FiClock,
  FiInstagram,
  FiLayers,
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
import {
  SiApple,
  SiFacebook,
  SiGoogle,
  SiGooglegemini,
  SiGooglemaps,
  SiInstagram,
  SiNextdoor,
  SiOpenai,
} from "react-icons/si";

const PAGE_PATH = "/services/sarasota/digital-marketing";
const HUB_PATH = "/services/florida/digital-marketing";

const TITLE = "Digital Marketing Sarasota | Sarasota Digital Marketing Agency";

const DESCRIPTION =
  "Digital marketing services in Sarasota for local businesses: Google Maps, Google Ads, web design and AI search, timed to season from Lakewood Ranch to Venice.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "digital marketing sarasota",
    "digital marketing agency sarasota",
    "sarasota digital marketing",
    "sarasota marketing agency",
    "sarasota digital marketing agency",
    "sarasota digital marketing company",
    "digital marketing services sarasota",
    "online digital marketing services sarasota",
    "digital marketing sarasota pool companies",
    "seo company sarasota",
    "web design sarasota",
    "social media marketing sarasota",
    "ppc sarasota",
    "marketing agency lakewood ranch",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/sarasota-digital-marketing-agency.webp",
        width: 1600,
        height: 900,
        alt: "Sarasota digital marketing campaign screens with the bay, a long bridge and waterfront towers",
      },
    ],
    title: TITLE,
    description:
      "Google Maps, Google Ads, websites and AI search for Sarasota and Manatee businesses, ready before winter residents return.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: HUB_PATH },
  { name: "Sarasota Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Agency in Sarasota",
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
    name: "Sarasota",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Sarasota and Manatee counties",
  },
};

const SarasotaDmFaqs = [
  {
    question: "How much does digital marketing in Sarasota cost?",
    answer:
      "Plans are $297, $950 or $1,500 a month, on month-to-month terms. Google or Meta charge you directly for clicks, and we take no cut of that spend. After a free audit, we suggest the plan that fits your services, the towns you cover and how competitive your season is.",
  },
  {
    question: "When should a Sarasota business start preparing for season?",
    answer:
      "In late summer. Many winter residents start looking for services weeks before they arrive, so your campaigns, Google updates and seasonal offers should be running by September. We keep budgets high through the winter, ask happy clients for reviews before they leave in spring and spend the summer on SEO.",
  },
  {
    question: "Which towns near Sarasota do you serve?",
    answer:
      "Everywhere in Sarasota and Manatee counties: downtown Sarasota, Siesta Key, Longboat Key, Lakewood Ranch, Palmer Ranch, Osprey, Venice, Nokomis, North Port, Englewood, Bradenton, Parrish and Anna Maria Island. Ads and pages are limited to the places you really work.",
  },
  {
    question: "Is your agency based in Sarasota?",
    answer:
      "No. Our team is in-house but remote, based in Dover, Delaware, and Sarasota owners meet us on video calls. Map rankings, ads and websites depend on steady work, not an address on Main Street, and a plain monthly report lists the work done and the leads it produced.",
  },
  {
    question: "Do you offer digital marketing for Sarasota pool companies?",
    answer:
      "Yes. Pool service, repair and construction companies are a core part of our client mix. We build a page for each community you serve, run ads on searches like pool heater repair and green pool cleanup, and push heater and startup offers in the cooler months when winter residents want warm water.",
  },
  {
    question: "Should I hire a Sarasota SEO company or start with PPC?",
    answer:
      "PPC in Sarasota puts you at the top of search within days and reveals which keywords deserve your budget. SEO builds over a few months, then Map Pack and organic calls keep arriving without a fee per click. Many owners run ads ahead of season and grow SEO over the summer.",
  },
  {
    question: "Do you handle web design for Sarasota businesses?",
    answer:
      "Yes. We design quick, mobile-first websites where visitors call with one tap or book online, with a page for every town or community you cover. Most launch two to three weeks after kickoff, and if the site you have already performs, we upgrade it instead of rebuilding.",
  },
  {
    question: "Will AI assistants recommend my Sarasota business?",
    answer:
      "They can, once your details are consistent and easy to confirm. We match your name, services and hours across your website, Business Profile and directories, write pages that respond to the questions Sarasota customers ask, mark them up with schema and review every month how ChatGPT, Gemini and Google’s AI Overviews mention your business.",
  },
  {
    question: "Can you help if Google suspends my Sarasota listing?",
    answer:
      "Yes. Hold off on opening a new listing, because duplicates tend to deepen the problem. We have reinstated 900+ suspended profiles, and after yours returns we keep its details within Google’s guidelines so it stays visible.",
  },
];

const sarasotaDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: SarasotaDmFaqs.map((faq) => ({
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
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: SiNextdoor, name: "Nextdoor", tone: "nextdoor" },
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
    h1Start: "Sarasota Digital Marketing Agency",
    h1Highlight: "Serving Lakewood Ranch to Venice",
    sub: "Zonic Media plans digital marketing in Sarasota around the months locals simply call season. Your Google Maps profile, Google Ads, website and AI search run as one program, aimed at the towns you serve and live before winter residents start arriving in October.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide verified numbers plus a public place count (North Port–Bradenton–Sarasota metro: Sarasota and Manatee counties.)
    // No Sarasota client results, and no ad-markup stat (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiLayers aria-hidden="true" />,
        num: "20+",
        label: "Industries we market for",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <FiClock aria-hidden="true" />,
        num: "2–3 wks",
        label: "From first call to a live new website",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "2",
        label: "Counties: Sarasota and Manatee",
      },
    ],
    proof: "",
    cta: "Book a Sarasota Season Audit",
  },
  about: {
    eyebrow: "Digital marketing in Sarasota",
    h2Start: "Sarasota Runs on Season.",
    h2Highlight: "So Should Your Marketing.",
    leads: [
      <>
        A pool company in Lakewood Ranch, an estate planning attorney near St.
        Armands Circle and a café on Siesta Key all get busy in the same winter
        weeks, then slow down after Easter. We learn how your customers search
        across Sarasota and Manatee, then spend in the months and towns where
        they are most likely to call.
      </>,
      <>
        Ads, Maps, AI search and your site are run by a single in-house team,
        and results arrive as calls and booked jobs. Running locations across
        the state? See how our{" "}
        <Link href={HUB_PATH} className="phl-inline-link">
          Florida digital marketing agency
        </Link>{" "}
        plans each region. If rankings come first, begin with{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="phl-inline-link"
        >
          Google Maps optimization
        </Link>
        .
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Sarasota Digital Marketing Agency • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Digital Marketing Services in Sarasota, Planned as One",
    lead: (
      <>
        Online digital marketing services for Sarasota companies: paid search,
        Map Pack work,{" "}
        <Link href="/services/web-design" className="phl-inline-link">
          web design services
        </Link>
        , AI answers, social posts and reviews, each one handing leads to the
        next.
      </>
    ),
    cards: [
      {
        tone: "blue",
        icon: <FiTarget aria-hidden="true" />,
        title: "PPC in Sarasota, Scheduled by Season",
        desc: "Search ads and Local Services Ads for the ZIP codes you cover, with budgets lifted from October to April and cut back in the slow months.",
        points: [
          "Budgets that follow season",
          "Ad groups by town",
          "0% markup on your spend",
        ],
        href: "/services/florida/ppc",
        link: "Florida pay-per-click management",
      },
      {
        tone: "gold",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Sarasota SEO That Wins the Map Pack",
        desc: "We fill out every part of your Business Profile, add a page for every town you serve and keep new reviews coming, lifting you into the top three on Maps where your customers live.",
        points: [
          "Weekly profile updates",
          "Rank grids for each town",
          "Pages for every service area",
        ],
        href: "/services/florida/local-seo",
        link: "Local SEO in Florida",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Web Design in Sarasota for Phone-First Buyers",
        desc: (
          <>
            Mobile pages where visitors call in one tap or book online, plus a
            page for each community, ready for the traffic your ads and Maps
            listing send. Pool companies can start with our{" "}
            <Link
              href="/services/pool-service-website-design"
              className="phl-inline-link"
            >
              pool service website design
            </Link>
            .
          </>
        ),
        points: [
          "Built for small screens",
          "One-tap calls and booking",
          "Live in about 2–3 weeks",
        ],
        href: "/services/florida/web-design",
        link: "Web design across Florida",
      },
      {
        tone: "gold",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "Show Up in ChatGPT and AI Overviews",
        desc: "Pages that answer buyers’ questions directly, structured data and identical business details on every listing, so ChatGPT and AI Overviews can recommend you.",
        points: [
          "Question-led service pages",
          "Schema on your key pages",
          "AI answers checked monthly",
        ],
        href: "/services/ai-seo-services",
        link: "AI search optimization",
      },
      {
        tone: "blue",
        icon: <FiInstagram aria-hidden="true" />,
        title: "Social Media Marketing for Locals and Snowbirds",
        desc: "Facebook and Instagram posts, plus local ads that remind returning residents you’re open, tracked to the calls and messages they start.",
        points: [
          "Posts planned a month ahead",
          "Welcome-back campaigns each fall",
          "Messages traced to bookings",
        ],
        href: "#de-contact",
        link: "Ask about social media plans",
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Review Requests and Suspension Help",
        desc: "Each customer gets a review link by text when the work is done, every review gets a drafted reply, and we act quickly if Google suspends your listing.",
        points: [
          "Review texts sent automatically",
          "Replies that sound like you",
          "Fast help with suspensions",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Google Business Profile reinstatement",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "See How Season Shapes Your Sarasota Leads",
    leads: [
      <>
        Winter may keep the phones busy while August goes quiet. Your monthly
        report breaks out calls, form leads and Map Pack rank for each town,
        month by month, so you know when to push spend and when to build
        rankings for next year.
      </>,
      <>
        Run a home service business? See our{" "}
        <Link
          href="/services/pool-service-marketing-agency"
          className="phl-inline-link"
        >
          pool service marketing
        </Link>
        ,{" "}
        <Link
          href="/services/hvac-marketing-agency/florida"
          className="phl-inline-link"
        >
          Florida HVAC marketing
        </Link>
        ,{" "}
        <Link
          href="/services/roofing-marketing-agency"
          className="phl-inline-link"
        >
          roofing marketing
        </Link>{" "}
        and{" "}
        <Link
          href="/services/landscaping-marketing-agency"
          className="phl-inline-link"
        >
          landscaping marketing
        </Link>{" "}
        programs, and law offices can start with{" "}
        <Link
          href="/services/law-firm-marketing-agency"
          className="phl-inline-link"
        >
          law firm marketing
        </Link>
        .
      </>,
      <>
        Up the coast, our{" "}
        <Link
          href="/services/tampa/digital-marketing"
          className="phl-inline-link"
        >
          Tampa digital marketing agency
        </Link>{" "}
        and{" "}
        <Link
          href="/services/st-petersburg/digital-marketing"
          className="phl-inline-link"
        >
          St. Petersburg digital marketing agency
        </Link>{" "}
        pages cover Hillsborough and Pinellas, and{" "}
        <Link
          href="/services/fort-myers/digital-marketing"
          className="phl-inline-link"
        >
          digital marketing in Fort Myers
        </Link>{" "}
        covers Lee County to the south.
      </>,
    ],
    cta: "Get My Sarasota Season Report",
    // Sample report UI, not client data.
    console: {
      title: "Sarasota leads by month",
      tag: "Sample report",
      metrics: [
        { strong: "Oct–Apr", label: "Peak budget window" },
        { strong: "Top 3", label: "Map Pack goal per town" },
        { strong: "Monthly", label: "Report by town and source" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "How We Get Sarasota Campaigns Ready for Season",
    steps: [
      {
        tag: "Week 1",
        title: "Check Where Sarasota Can Find You",
        desc: "We search the way your customers do, from downtown to Venice, and compare your ads, Business Profile, website and AI mentions with the companies ranking above you.",
      },
      {
        tag: "Weeks 2–4",
        title: "Build Before the Snowbirds Land",
        desc: "Profile fixes, ad groups for each town, community pages and a welcome-back email are prepared in order, so everything is running before October.",
      },
      {
        tag: "Weekly",
        title: "Tune the Campaigns Every Week",
        desc: "Every week we prune search terms, post updates to Google, answer reviews and move bids toward the towns that are calling.",
        chips: ["Bids by town", "Google posts", "Review replies"],
      },
      {
        tag: "Monthly",
        title: "Report by Month, Town and Channel",
        desc: "A short report shows which towns and channels booked work, how the month compares with last season and what we change next.",
        chips: ["Town report", "Season compare", "Changes for next month"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Plan My Sarasota Season",
  },
  showcase: undefined,
  compare: {
    h2: "Season-Ready Marketing vs. Set-and-Forget Ads",
    lead: "The usual leaks in a Sarasota marketing budget, and how our program closes them.",
    themTitle: "Set-and-Forget Ads",
    themSub: "Why the calls dry up",
    them: [
      "The same budget in January and August",
      "One ad for all of Sarasota and Manatee",
      "No plan for returning winter residents",
      "Clicks reported, booked jobs ignored",
      "A twelve-month contract up front",
    ],
    usTitle: "Our Sarasota Program",
    usSub: "Timed to season, judged on jobs",
    us: [
      "Budgets that rise and fall with season",
      "Ad groups for each town you serve",
      "Welcome-back campaigns every fall",
      "Every call matched to its source",
      "Month to month, leave any time",
    ],
    scoreTitle: "Sample Sarasota Scorecard",
    scoreSub: "Four things our audit grades, shown as an illustration",
    scoreRows: [
      { label: "Season readiness", before: 20, after: 86 },
      { label: "Town coverage", before: 28, after: 82 },
      { label: "Review pace", before: 34, after: 90 },
      { label: "AI answer presence", before: 14, after: 68 },
    ],
  },
  why: {
    h2: "Why Sarasota Businesses Work With Zonic Media",
    lead: "Choosing a Sarasota marketing agency? Judge it on calls and booked jobs, not clicks.",
    cards: [
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "Every channel, one Sarasota plan",
        desc: "Ads, Maps, AI search, social and your website in one in-house team.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Leave whenever you like",
        desc: "No lock-in, and nothing added to your ad spend.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Results by town and month",
        desc: "Calls and bookings for each area, all year round.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Get Ready for Season With a Free Sarasota Audit",
      p: "Our team studies your ads, listing, site and the rivals around you, and you get a written plan for the months ahead. Free, with no paperwork.",
      checks: [
        "Off-season waste flagged",
        "Town-by-town gaps mapped",
        "Listing risks found",
        "A plan for next season",
      ],
      cta: "Book My Free Sarasota Audit",
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
    chipsLabel: "Sarasota industries we work with",
    chips: [
      "Pool Service & Builders",
      "Home Watch & Cleaning",
      "HVAC & Plumbing",
      "Roofing & Contractors",
      "Law & Accounting Firms",
      "Dentists & Clinics",
      "Real Estate",
      "Restaurants & Hospitality",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Before You Hire a Sarasota Marketing Agency",
    lead: "Short, honest answers about pricing, towns, season, SEO, websites and AI search.",
    cta: "",
    items: SarasotaDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Get a Free Sarasota Marketing Plan",
    lead: "Share a few details and we’ll send an audit and a plan for the towns you serve before season starts.",
    formType: "sarasota-digital-marketing",
    badge: "Free Audit",
    title: "Start Your Free Sarasota Audit",
    subtitle: "One minute to fill in, with no contract afterwards.",
    submitText: "Send My Request",
    messageLabel: "What should we know about your business?",
    messagePlaceholder:
      "Your services, the towns you cover around Sarasota, your busiest months and what you run now",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-sarasota",
  heroChips: {
    label: "Towns across Sarasota and Manatee counties",
    items: ["Sarasota", "Bradenton", "Venice", "North Port", "Lakewood Ranch"],
    more: true,
  },
  aboutTitle: ["Sarasota Runs", "on Season. So Should", "Your Marketing."],
  // Owner photo (19 Nov 2026); the crop keeps the wall sign in view on
  // phones, where the box is narrower than the photo.
  aboutPhoto: {
    src: "/images/florida/sarasota-digital-marketing-agency.webp",
    alt: "Sarasota digital marketing campaign screens with the bay, a long bridge and waterfront towers",
    position: "center top",
  },
  aboutCard: {
    kicker: "Sarasota and Manatee",
    title: "Your Sarasota program",
    points: [
      "Google Ads raised for season",
      "Map Pack rankings town by town",
      "Welcome-back email and social",
      "AI answers that name you",
    ],
    foot: "Run remotely from Dover, Delaware",
  },
  // Sarasota palette: Gulf gold, Gulf sky, sunset pink, banyan green.
  pillars: ["#a16207", "#dbeafe", "#fce7f3", "#14532d"],
  features: {
    h2: "How Marketing Works Differently in Sarasota",
    lead: (
      <>
        Winter residents who come back every fall, pool and home service work
        that follows the weather, and new neighborhoods opening east of I-75.
        Each one shapes the plan below.
      </>
    ),
    items: [
      {
        label: "Season",
        title: "A Snowbird Season Plan That Starts in Summer",
        body: (
          <>
            From October to April, Sarasota fills with returning residents who
            need AC checks, pool openings, home cleaning and appointments, and
            spring training crowds arrive in March. Many search before they
            leave home. We run{" "}
            <Link href="/services/google-ads" className="phl-inline-link">
              Google Ads campaigns
            </Link>{" "}
            that reach them while they plan, refresh your profile in September
            and keep budgets high until they head north after Easter.
          </>
        ),
        points: [
          { t: "Ads seen up north", d: "Reach residents before they land." },
          { t: "September refresh", d: "Profile, photos and offers updated." },
          { t: "Welcome-back emails", d: "Past clients reminded in October." },
          { t: "Spring review push", d: "Reviews asked for before they go." },
        ],
        href: "/services/florida/ppc",
        link: "See Florida PPC management",
        ui: "city-1",
      },
      {
        label: "Pool companies",
        title: "Digital Marketing for Sarasota Pool Companies",
        body: "Pools are everywhere from Palmer Ranch to Parrish, and so are pool companies competing for them. We track requests across Sarasota and Manatee by area and job type, from weekly routes to heater repairs, green pool cleanups and resurfacing, then point ads and Map Pack work at the jobs you want more of.",
        points: [
          { t: "Requests by area", d: "Sarasota and Manatee compared." },
          { t: "Jobs by type", d: "Service, repairs, heaters, resurfacing." },
          { t: "Heater ads in winter", d: "Raised as the nights cool." },
          {
            t: "Route-friendly targeting",
            d: "Fewer far-flung service calls.",
          },
        ],
        href: "/services/pool-service-marketing-agency",
        link: "See pool service marketing",
        ui: "city-2",
      },
      {
        label: "New communities",
        title: "Pages for Every New Lakewood Ranch Neighborhood",
        body: "Lakewood Ranch keeps adding villages, and new homeowners search by the name of their community. As a marketing agency for Lakewood Ranch businesses, we build a page for each village you serve, with your services there, local FAQs and schema, so you appear when someone in Waterside or Star Farms needs help. The same plan works in Wellen Park and North Port.",
        points: [
          { t: "One page per village", d: "Named the way residents search." },
          { t: "Local FAQs and schema", d: "Answers search engines can read." },
          { t: "Linked from your profile", d: "Maps and site kept in step." },
          { t: "New villages added", d: "Pages ready as homes close." },
        ],
        href: "/services/florida/web-design",
        link: "See Florida web design",
        ui: "city-3",
      },
    ],
  },
  platforms: {
    h2: "Found on Every App Sarasota Checks Before Calling",
    lead: "Sarasota customers check Google and Apple Maps, read recommendations on Nextdoor, browse Facebook and Instagram, and increasingly put the question to ChatGPT or Gemini. Returning residents often look you up from home before they fly down. Your hours, services and offers match on every one.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Search, maps and neighbors",
    rightLabel: "Social and AI assistants",
    centerIcon: <FiSun aria-hidden="true" />,
    centerTitle: "Your Sarasota business",
    centerSub: "the same on every app",
  },
  pricing: {
    title: "Digital Marketing Pricing for Sarasota Businesses",
    lead: "Month-to-month plans, from Google Maps essentials to full ads, SEO and social for your busiest months.",
    compareTitle: "How the Sarasota Plans Compare",
    compareLead: "What each plan includes, line by line.",
    addOnsTitle: "Add-Ons for Season and Growth",
    addOnsLead:
      "Add towns, landing pages or seasonal campaigns when you need them.",
    customTitle: "Locations in Sarasota and Manatee?",
    customText: "We’ll plan each location and the towns it serves.",
  },
  phone: "city",
  darkUi: "city",
  scoreStyle: "city",
  noGrow: true,
  reviewsTitle: "What Our Clients Tell Google",
  contact: {
    before: "Ready for a Busier",
    after: "Sarasota Season?",
    lead: "Tell us what you offer and the towns you cover. We’ll audit your ads, Google listing and website free of charge and send a plan before season.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sarasotaDmFaqJsonLd),
        }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
