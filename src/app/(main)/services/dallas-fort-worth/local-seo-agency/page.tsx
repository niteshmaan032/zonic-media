import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import type { CSSProperties } from "react";
import {
  FiArrowRight,
  FiLayout,
  FiList,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiPlus,
  FiStar,
  FiTrendingUp,
  FiCheck,
} from "react-icons/fi";
import {
  SiApple,
  SiFacebook,
  SiGoogle,
  SiGooglegemini,
  SiGooglemaps,
  SiOpenai,
  SiPerplexity,
  SiYelp,
} from "react-icons/si";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-local-seo/localSeo.css";
import "@/components/rd/dfw-kit/ui.css";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import {
  CenterHead,
  LEAD,
  Label,
  Pill,
  RowHead,
  Section,
  Strip,
  TickList,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import {
  AvatarPh,
  HandArrow,
  InlineChat,
  InlinePin,
  Ph,
  RatingBadge,
  Sparks,
  TrustLogos,
} from "@/components/rd/dfw-kit/visuals";
import {
  AiAnswerPanel,
  GbpProfilePanel,
  MapsJourneyPhone,
  RankBoard,
  ReviewsPanel,
} from "@/components/rd/dfw-local-seo/LocalSeoVisuals";
import {
  RankFactorsCard,
  localSeoStepUi,
} from "@/components/rd/dfw-local-seo/LocalSeoUi";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   DALLAS–FORT WORTH LOCAL SEO AGENCY — built 19 Oct 2026.

   Third page in the DFW cluster, same section order as the web-design page,
   but the first page built from the redesign component library
   (src/components/rd/dfw-kit, short Tailwind utilities on design tokens),
   not a one-to-one conversion. Local SEO UI demos live in
   src/components/rd/dfw-local-seo.

   STATUS: launched 27 Oct 2026 (indexable, in src/app/sitemap.ts). The
   header has linked here since 19 Oct, so leaving it noindex sent Google
   mixed signals (SEO checkup, 27 Oct). Plan names follow the sitewide
   pricing: Foundation / Growth / Authority at the monthly rates.

   NO PHOTOS (owner, 19 Oct 2026): the about section and the process steps
   use UI components instead of images (LocalSeoUi.tsx: RankFactorsCard, one UI
   per step); the wide about box keeps map-pack-grid-v5.svg (owner, same
   day). Other files under /public/images/dfw/seo/ are unused and stay until
   the final clean-up.

   FACTS come from existing pages only: plans from $297 / $750 / $1,500 a
   month, month to month, flat quote after a free audit (/services/local-
   seo-packages); Map Pack movement typically in 4–8 weeks, organic rankings
   in 3–6 months (/services/local-seo-for-small-business); 5.0 on Google;
   1,500+ profiles optimized; 20+ industries. Never claim a Dallas office
   or address (the contact block shows the Dover, DE head office).

   COPY RE-OPTIMIZED 24 Oct 2026 (docs/content-optimization-brief.md):
   headings, body and FAQs rewritten so nothing repeats the live DFW
   digital-marketing and web-design pages or the NYC / Philadelphia /
   Delaware drafts. Removed per the owner rules: the hero price card and
   "4–8 weeks" card (now growth outcomes), other agencies' price ranges,
   named third-party surveys and their percentages, the FTC penalty figure,
   census "market facts" and the Clutch badge (Google rating instead).
   The research notes below are kept for reference only; the page no
   longer quotes them.

   SOURCED STATS (research 19 Oct 2026):
   - Google: local results are mainly relevance, distance and prominence;
     no way to pay for a better local ranking (support.google.com/business/
     answer/7091). Service-area businesses hide the address; area within
     about 2 hours' drive (answer/3038177).
   - Whitespark 2026 Local Search Ranking Factors (Nov 2025): primary GBP
     category is the top Map Pack factor; proximity #2.
   - BrightLocal Local Consumer Review Survey (Feb 2026): 45% used ChatGPT
     or other AI tools for local recommendations (6% a year earlier); 74%
     only care about reviews from the last 3 months; 89% expect a reply.
   - FTC rule banning fake reviews, in effect 21 Oct 2024; penalties up to
     $53,088 per violation (FTC, Dec 2025).
   - Census Vintage 2025: Fort Worth 1,028,117; Celina the fastest-growing
     US city of 20,000+ (24.6%); DFW metro +123,557 in a year.
   - Ahrefs SEO pricing survey (439 providers, Aug 2024): local SEO average
     about $1,557 a month.
   - Ask Maps (Gemini in Google Maps) announced 12 Mar 2026; GBP Q&A
     retired late 2025; Apple Business replaced Apple Business Connect
     14 Apr 2026; Bing Places relaunched Oct 2025.
--------------------------------------------------------------------------- */

const PAGE_PATH = "/services/dallas-fort-worth/local-seo-agency";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/* Keywords (Semrush US, 19 Oct 2026):
     local seo dallas 480 (KD 9) · dallas local seo 480 (15) · local seo
     services dallas 390 (23) · local seo company dallas 320 (26) · local
     seo dallas tx 320 (14) · fort worth local seo 320 (14) · dallas local
     seo company 170 (26) · local seo fort worth 140 (8) · dallas local seo
     agency 110 (16) · fort worth local seo company 110 (23) · google maps
     seo dallas 110 (2) · local seo services fort worth 90 · dallas small
     business seo 170 (14) · plano seo 720 (10) · seo company plano tx 480
     (7) · frisco seo 480 (16) · arlington seo 480 (11). Core cluster
     ≈ 2,400/mo + Fort Worth ≈ 660/mo.
   SERP (Semrush, "local seo dallas"): a Semrush agency directory, agency
   blogs, Quora and Facebook — no strong dedicated page. Broader "dallas seo
   company" (2,400, KD 43) is a later target, not this page's. */
const TITLE = "Local SEO Dallas & Fort Worth | Dallas Local SEO Company";
const DESCRIPTION =
  "Dallas local SEO company for DFW businesses: Google Business Profile, reviews, listings and suburb pages that win the Map Pack in Dallas, Fort Worth and beyond.";

const OG_IMAGE = {
  url: "/images/dfw/audit-report.webp",
  width: 1448,
  height: 1086,
  alt: "Free local SEO audit report for a Dallas–Fort Worth business",
};

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  keywords: [
    "local seo dallas",
    "dallas local seo",
    "local seo services dallas",
    "local seo company dallas",
    "dallas local seo company",
    "dallas local seo services",
    "local seo agency dallas",
    "dallas local seo agency",
    "local seo dallas tx",
    "fort worth local seo",
    "local seo fort worth",
    "fort worth local seo company",
    "local seo services fort worth",
    "google maps seo dallas",
    "dallas small business seo",
    "plano seo",
    "frisco seo",
    "dfw local seo",
  ],
  openGraph: {
    title: "Dallas–Fort Worth Local SEO Agency | Zonic Media",
    description: DESCRIPTION,
    url: PAGE_PATH,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas–Fort Worth Local SEO Agency | Zonic Media",
    description:
      "Get your DFW business into the Google Map Pack and AI answers. Month-to-month local SEO, starting with a free audit.",
  },
};

/* ------------------------------------------------------------------ data */

const heroMarks: [number, number][] = [
  [5, 15],
  [12, 31],
  [4, 47],
  [15, 57],
  [8, 70],
  [95, 13],
  [88, 27],
  [96, 42],
  [85, 55],
  [92, 68],
  [33, 7],
  [67, 8],
];

const TONE = {
  blue: "tw:bg-(--blue) tw:text-white",
  red: "tw:bg-(--red) tw:text-white",
  gold: "tw:bg-(--gold) tw:text-(--ink)",
  green: "tw:bg-(--green) tw:text-white",
  ink: "tw:bg-(--ink) tw:text-white",
  soft: "tw:bg-(--blue-soft) tw:text-(--blue)",
};

const services: {
  icon: typeof FiMapPin;
  tone: keyof typeof TONE;
  title: string;
  body: string;
  points: string[];
  href: string;
  link: string;
  note?: string;
}[] = [
  {
    icon: FiMapPin,
    tone: "blue",
    title: "DFW Google Business Profiles",
    body: "We set categories, services, service areas and photos the way Google reads them, then post and update your profile every week.",
    points: [
      "Primary category researched",
      "Service areas set correctly",
      "Weekly posts and photos",
    ],
    href: "/local-seo-google-business-optimization",
    link: "Profile optimization service",
  },
  {
    icon: FiStar,
    tone: "gold",
    title: "Review generation & replies",
    body: "Requests go out after every job, so new reviews keep arriving and describe the work and the suburb. Each one gets a thoughtful reply.",
    points: [
      "A request after each job",
      "A reply to every review",
      "Inside Google and FTC rules",
    ],
    href: "/services/local-seo-for-home-services",
    link: "Home services local SEO",
  },
  {
    icon: FiList,
    tone: "green",
    title: "Citation cleanup & listings",
    body: "Your name, address and phone matched on Apple, Bing and the directories AI assistants read when they describe you.",
    points: [
      "Duplicate listings merged",
      "Apple Business and Bing Places claimed",
      "Industry directories added",
    ],
    href: "/services/local-seo-for-small-business",
    link: "Small business local SEO",
  },
  {
    icon: FiLayout,
    tone: "red",
    title: "Suburb & service pages",
    body: "Pages for each service and each suburb you want jobs from, written with real local detail so they rank in Plano, Frisco or Fort Worth.",
    points: [
      "A page for every service",
      "Pages for priority suburbs",
      "Schema on each page",
    ],
    href: "/services/dallas-fort-worth/web-design-agency",
    link: "DFW web design services",
  },
  {
    icon: FiMessageCircle,
    tone: "ink",
    title: "ChatGPT & AI answer visibility",
    body: "Clear pages, reviews and listings that ChatGPT, Gemini and Google’s AI answers can quote when someone asks who to call.",
    points: [
      "Pages that answer real questions",
      "Mentions on trusted DFW sites",
      "AI answers checked monthly",
    ],
    href: "/services/ai-seo-services",
    link: "AI SEO services",
  },
  {
    icon: FiTrendingUp,
    tone: "soft",
    note: "In every plan",
    title: "Map Pack rank reports",
    body: "Grid scans show your Map Pack position across the metro, alongside the calls, website clicks and directions your profile brings in.",
    points: [
      "Rankings for each DFW city",
      "Calls, clicks and directions",
      "One clear report each month",
    ],
    href: "/services/local-seo-packages",
    link: "Local SEO packages",
  },
];

const features = [
  {
    label: "Google Business Profile",
    title: "A Business Profile Google Wants to Show",
    body: "Google picks Map Pack businesses on relevance, distance and prominence, and your profile drives much of the first and the last. We choose the right primary category, list real services and areas, add fresh photos and posts, and match every detail to your website.",
    points: [
      {
        t: "The right primary category",
        d: "Chosen against the businesses ranking above you.",
      },
      {
        t: "Service-area setup",
        d: "Areas listed, address hidden where the rules allow.",
      },
      {
        t: "Weekly posts and photos",
        d: "Proof the business is open, active and real.",
      },
      {
        t: "A clean business name",
        d: "No stuffed keywords that risk a suspension.",
      },
    ],
    href: "/local-seo-google-business-optimization",
    link: "See profile optimization",
    Panel: GbpProfilePanel,
  },
  {
    label: "Reviews",
    title: "Fresh Reviews That Win the Click and the Call",
    body: "Customers trust recent reviews and notice when an owner replies. We send a review request after every job and answer each review promptly, staying inside Google’s rules and the FTC’s ban on fake reviews.",
    points: [
      {
        t: "A request after every job",
        d: "Sent to every customer, not just the happy ones.",
      },
      {
        t: "Replies that build trust",
        d: "Thanks for the good, calm answers to the bad.",
      },
      {
        t: "More detailed reviews",
        d: "Customers invited to mention the job and the suburb.",
      },
      { t: "Fully compliant", d: "No gating, no incentives, no fake reviews." },
    ],
    href: "/services/local-seo-for-home-services",
    link: "How we grow reviews",
    Panel: ReviewsPanel,
  },
  {
    label: "AI search",
    title: "Get Named When DFW Customers Ask AI",
    body: "More customers now ask ChatGPT or Gemini who to call, and Google answers questions right inside Maps. These assistants read your website, your Google profile and review sites, so we make all three say the same clear things about your business.",
    points: [
      {
        t: "Pages AI can quote",
        d: "One clear page per service, answering real questions.",
      },
      {
        t: "Listings that agree",
        d: "Google, Apple and Bing tell the same story.",
      },
      {
        t: "Local mentions",
        d: "Pitches to trusted DFW sites and best-of lists.",
      },
      {
        t: "Monthly AI checks",
        d: "We ask ChatGPT, Gemini and AI Mode about you.",
      },
    ],
    href: "/services/ai-seo-services",
    link: "AI SEO services",
    Panel: AiAnswerPanel,
  },
];

const journey = [
  {
    t: "A “near me” search",
    d: "A homeowner in Richardson types “AC repair near me”, and Google picks three businesses based on relevance, distance and prominence.",
  },
  {
    t: "Your pin makes the top three",
    d: "Your category, reviews and website put your name in the Map Pack, above every other result on the page.",
  },
  {
    t: "They read your profile",
    d: "Recent reviews, your replies, photos and hours answer their questions before they decide.",
  },
  {
    t: "They tap to call",
    d: "That call, website visit or direction request is counted and appears in your monthly report by city.",
  },
];

const STEP_TONE = {
  blue: { num: "tw:bg-[#e3ecfd] tw:text-(--blue-dark)", bg: "tw:bg-[#cddcfb]" },
  gold: { num: "tw:bg-[#fff3cc] tw:text-[#8a6400]", bg: "tw:bg-[#fde08a]" },
  green: { num: "tw:bg-[#ddf3e3] tw:text-[#1f7a3a]", bg: "tw:bg-[#bfe9cc]" },
  red: { num: "tw:bg-[#fde4e1] tw:text-[#b8352a]", bg: "tw:bg-[#f9c7c1]" },
};

const steps: {
  when: string;
  title: string;
  body: string;
  href: string;
  tone: keyof typeof STEP_TONE;
}[] = [
  {
    when: "Week 1",
    title: "Free Map Pack Audit",
    body: "We review your profile, listings, reviews and website, then grid-scan your rankings from every corner of the metro you serve.",
    href: "/google-maps-business-ranking-tool-online",
    tone: "blue",
  },
  {
    when: "Weeks 1–4",
    title: "Quick Wins First",
    body: "Categories, services, duplicate listings, on-page fixes and review requests come first: the changes that usually move a profile in the Map Pack within 4–8 weeks.",
    href: "/local-seo-google-business-optimization",
    tone: "gold",
  },
  {
    when: "Months 2–6",
    title: "Pages, Reviews and Local Links",
    body: "Each month adds suburb and service pages, new reviews and links from DFW websites: the steady work that builds organic rankings over 3–6 months.",
    href: "/services/local-seo-packages",
    tone: "green",
  },
  {
    when: "Every month",
    title: "Report, Then Adjust",
    body: "Rankings by city, calls and clicks, plus next month’s plan, in plain English. Plans run month to month, so you stay because it works.",
    href: "#dfw-contact",
    tone: "red",
  },
];

const APP_TONE = {
  google: "tw:bg-[#4285f4] tw:text-white",
  maps: "tw:bg-[#34a853] tw:text-white",
  apple: "tw:bg-(--ink) tw:text-white",
  yelp: "tw:bg-[#d32323] tw:text-white",
  openai: "tw:bg-[#10a37f] tw:text-white",
  gemini: "tw:bg-[linear-gradient(135deg,#4e82ee,#a26bf4)] tw:text-white",
  facebook: "tw:bg-[#1877f2] tw:text-white",
  perplexity: "tw:bg-[#20808d] tw:text-white",
};

const hubLeft: {
  icon: typeof SiGoogle;
  name: string;
  tone: keyof typeof APP_TONE;
}[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiApple, name: "Apple Maps and Apple Business", tone: "apple" },
  { icon: SiYelp, name: "Yelp", tone: "yelp" },
];

const hubRight: typeof hubLeft = [
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiGooglegemini, name: "Gemini", tone: "gemini" },
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiPerplexity, name: "Perplexity", tone: "perplexity" },
];

const plans = [
  {
    kicker: "Local foundation",
    name: "Foundation",
    price: "$297",
    subtitle: "For single-location businesses in lighter markets.",
    features: [
      "Google Business Profile optimization",
      "Local keyword targeting",
      "On-page fixes for key pages",
      "Citation audit & cleanup",
      "Review strategy setup",
      "Rank tracking & monthly report",
    ],
  },
  {
    kicker: "Compounding growth",
    name: "Growth",
    price: "$750",
    badge: "Best fit for most DFW markets",
    subtitle:
      "Everything in Foundation, plus the monthly work that builds rankings you keep.",
    features: [
      "Everything in Foundation",
      "Monthly service & city pages",
      "Active review generation",
      "Google Business Profile posts every month",
      "Local link building",
      "Competitor tracking",
    ],
  },
  {
    kicker: "Market expansion",
    name: "Authority",
    price: "$1,500",
    subtitle:
      "For multi-location brands and the most crowded parts of the Metroplex.",
    features: [
      "Everything in Growth, per location",
      "Location-page architecture",
      "Technical SEO & schema sitewide",
      "Digital PR & authority links",
      "Landing-page conversion work",
      "Call tracking by location",
    ],
  },
];

const faqs: { q: string; a: string; link?: { href: string; label: string } }[] =
  [
    {
      q: "What do local SEO services cost in Dallas?",
      a: "Plans begin at $297, with $750 and $1,500 tiers for busier markets, all billed monthly with no contract. A free audit comes first, then one flat quote based on how competitive your category and suburbs are.",
      link: {
        href: "/services/local-seo-packages",
        label: "Compare our local SEO packages",
      },
    },
    {
      q: "When will I see results from local SEO in Dallas?",
      a: "Profiles usually start moving in the Map Pack 4 to 8 weeks after the profile, listings and reviews are fixed. Service and suburb pages take longer to climb in regular search, often 3 to 6 months, depending on how crowded your market is.",
    },
    {
      q: "What does it take to rank in the Dallas Map Pack?",
      a: "Google says local results rest on relevance, distance and prominence, and nobody can pay for a higher local ranking. We work all three: the right category and services for relevance, service areas and suburb pages for distance, and reviews, links and listings for prominence.",
    },
    {
      q: "Can one business rank across Dallas and Fort Worth?",
      a: "In standard search results, yes, with a strong page for each city. The Map Pack is harder because Google favors businesses near the searcher, and the two downtowns sit far apart. Most businesses win near their address first, then reach further with city pages, reviews that name those areas and Google Ads where Maps can’t reach yet.",
    },
    {
      q: "Can a service-area business without a storefront rank on Google Maps?",
      a: "Yes. Google lets service-area businesses hide their address and list the areas they cover, as long as that area stays within about two hours’ drive of your base. Virtual offices aren’t allowed and keyword-stuffed names risk a suspension, so we set your profile up by the rules.",
    },
    {
      q: "Can you guarantee a #1 ranking on Google Maps?",
      a: "No, and be wary of anyone who does. Google doesn’t sell local rankings and no agency controls them. We show you where you rank today, what we’ll change and how your rankings, calls and clicks move each month.",
    },
    {
      q: "Will ChatGPT and Gemini recommend my Dallas business?",
      a: "We make you much easier to recommend. These assistants pull from your website, Google profile and review sites, so we keep those consistent, publish clear service pages, earn mentions on trusted DFW sites and check what the AI tools say about you every month.",
      link: {
        href: "/services/ai-seo-services",
        label: "See our AI SEO services",
      },
    },
    {
      q: "Can I give customers a discount for leaving a review?",
      a: "No. The FTC bans fake reviews and rewards tied to positive reviews, and Google bans incentives and asking only happy customers. Breaking those rules can get reviews removed, new ones blocked or a warning shown on your profile. We ask every real customer, every time.",
    },
    {
      q: "Do you handle local SEO for several DFW locations?",
      a: "Yes. Each location gets its own Google Business Profile, never a duplicate, plus its own location page, and our Authority plan reports rankings and calls for each location separately.",
    },
    {
      q: "Which DFW cities and suburbs do you cover?",
      a: "The whole Metroplex: Plano, Frisco, McKinney, Allen and Celina to the north; Fort Worth, Arlington, Mansfield and Grand Prairie to the west; and Dallas, Irving, Garland, Richardson, Denton, Lewisville, Carrollton, Flower Mound, Prosper, Princeton, Melissa, Anna and Forney.",
    },
    {
      q: "What will my monthly local SEO report show?",
      a: "Map Pack rankings by city from a grid scan, organic keyword positions, the calls, website clicks and direction requests from your Google profile, new reviews, the work we finished and next month’s plan, all in plain English.",
    },
    {
      q: "Do I need a new website before starting local SEO?",
      a: "Usually not. We fix titles, headings, speed and local details on the site you have. If it’s slow, awkward on a phone or missing service pages, we’ll say so, and we can rebuild it.",
      link: {
        href: "/services/dallas-fort-worth/web-design-agency",
        label: "See our Dallas web design",
      },
    },
    {
      q: "Is there a long-term contract?",
      a: "No. Every plan is month to month, and you can stop at the end of any month. We would rather keep you with results than with paperwork.",
    },
  ];

const servedCities = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Plano",
  "Frisco",
  "McKinney",
  "Irving",
  "Garland",
  "Denton",
  "Grand Prairie",
  "Richardson",
  "Celina",
];

const servedCounties = [
  "Dallas County",
  "Tarrant County",
  "Collin County",
  "Denton County",
  "Rockwall County",
  "Ellis County",
  "Johnson County",
  "Kaufman County",
  "Parker County",
  "Hunt County",
  "Wise County",
];

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  {
    name: "Dallas–Fort Worth",
    url: "/services/dallas-fort-worth/digital-marketing-agency",
  },
  { name: "Local SEO", url: PAGE_PATH },
]);

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: { "@id": `${PAGE_URL}#service` },
    mainEntity: { "@id": `${PAGE_URL}#service` },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}${OG_IMAGE.url}`,
      width: OG_IMAGE.width,
      height: OG_IMAGE.height,
      caption: OG_IMAGE.alt,
    },
  },
  // A Service with areaServed, not a LocalBusiness: there is no Texas
  // address, and a LocalBusiness here would claim one.
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Local SEO for Dallas–Fort Worth businesses",
    alternateName: [
      "Dallas local SEO",
      "Fort Worth local SEO",
      "DFW local SEO",
    ],
    serviceType: [
      "Local SEO",
      "Google Business Profile optimization",
      "Review management",
      "Citation building",
      "AI search optimization",
    ],
    url: PAGE_URL,
    description: DESCRIPTION,
    provider: { "@id": `${SITE_URL}/#organization` },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Local businesses in Dallas–Fort Worth",
    },
    // Published "starting at" monthly prices from /services/local-seo-packages.
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} local SEO plan`,
      description: plan.subtitle,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: Number(plan.price.replace(/[$,]/g, "")),
        priceCurrency: "USD",
        unitText: "MONTH",
        description: `${plan.name} plan, starting at ${plan.price} a month`,
      },
    })),
    areaServed: [
      ...servedCities.map((name) => ({ "@type": "City", name: `${name}, TX` })),
      ...servedCounties.map((name) => ({
        "@type": "AdministrativeArea",
        name: `${name}, TX`,
      })),
      { "@type": "AdministrativeArea", name: "Dallas–Fort Worth metroplex" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local SEO services for DFW businesses",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.body,
          url: `${SITE_URL}${service.href}`,
        },
      })),
    },
  },
  { ...breadcrumbJsonLd, "@id": `${PAGE_URL}#breadcrumb` },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

/* ------------------------------------------------------------- fragments */

const BENTO_CARD =
  "tw:relative tw:flex tw:flex-col tw:rounded-(--r-xl) tw:px-7 tw:py-[30px] tw:max-bs2xl:px-[22px] tw:max-bs2xl:py-[26px] tw:max-bsxl:flex-[0_0_250px] tw:max-bsxl:snap-center tw:max-bssm:basis-[236px] tw:max-bssm:px-[22px] tw:max-bssm:py-6";
const BIG =
  "tw:block tw:text-[clamp(40px,4vw,60px)] tw:leading-none tw:font-medium tw:tracking-[-0.03em]";
const TAG =
  "tw:rounded-full tw:px-[13px] tw:py-1.5 tw:text-[13.5px] tw:leading-[1.3] tw:font-medium tw:whitespace-nowrap tw:nth-[3n+1]:-rotate-4 tw:nth-[3n+2]:rotate-3 tw:nth-[3n]:-rotate-[1.5deg] tw:max-bs2xl:px-3 tw:max-bs2xl:text-[13px] tw:max-bssm:px-[11px] tw:max-bssm:py-[5px] tw:max-bssm:text-[12.5px]";

const TAGS: [string, string][] = [
  ["HVAC", "tw:bg-(--gold) tw:text-(--ink)"],
  ["Roofing", "tw:bg-white tw:text-(--ink)"],
  ["Plumbing", "tw:bg-[#b8eccb] tw:text-(--ink)"],
  ["Dentists", "tw:bg-white tw:text-(--ink)"],
  ["Electricians", "tw:bg-[#cddcfb] tw:text-(--ink)"],
  ["Law firms", "tw:bg-white tw:text-(--ink)"],
  ["Pest control", "tw:bg-(--gold) tw:text-(--ink)"],
  ["Landscapers", "tw:bg-[#b8eccb] tw:text-(--ink)"],
  ["Home inspectors", "tw:bg-white tw:text-(--ink)"],
  ["+ more", "tw:border tw:border-dashed tw:border-white/45 tw:text-white/85"],
];

const HUB_SIDE =
  "tw:relative tw:grid tw:grid-cols-3 tw:grid-rows-3 tw:items-center tw:justify-items-center tw:gap-y-6 tw:before:absolute tw:before:top-[12%] tw:before:bottom-[12%] tw:before:left-1/2 tw:before:border-l-[1.5px] tw:before:border-dashed tw:before:border-[#d3dae6] tw:before:content-[''] tw:[&>li:nth-child(1)]:[grid-area:1/2] tw:[&>li:nth-child(2)]:[grid-area:2/1] tw:[&>li:nth-child(3)]:[grid-area:2/3] tw:[&>li:nth-child(4)]:[grid-area:3/2] tw:max-bssm:mx-auto tw:max-bssm:w-full tw:max-bssm:max-w-[320px] tw:max-bssm:grid-cols-4 tw:max-bssm:grid-rows-none tw:max-bssm:gap-x-3 tw:max-bssm:gap-y-0 tw:max-bssm:before:hidden tw:max-bssm:[&>li:nth-child(n)]:[grid-area:auto]";
const APP =
  "tw:relative tw:z-1 tw:grid tw:size-[100px] tw:place-items-center tw:rounded-[28px] tw:text-[44px] tw:transition tw:duration-200 tw:hover:-translate-y-1 tw:hover:-rotate-3 tw:max-bs2xl:size-[86px] tw:max-bs2xl:rounded-3xl tw:max-bs2xl:text-[38px] tw:max-bsxl:size-[74px] tw:max-bsxl:rounded-[20px] tw:max-bsxl:text-[32px] tw:max-bssm:size-[62px] tw:max-bssm:rounded-[18px] tw:max-bssm:text-[28px]";

function HubSide({ items, label }: { items: typeof hubLeft; label: string }) {
  return (
    <ul className={HUB_SIDE} aria-label={label}>
      {items.map((item) => (
        <li key={item.name} className={cx(APP, APP_TONE[item.tone])}>
          <item.icon aria-hidden="true" />
          <span className="tw:sr-only">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ page */

export default function DallasFortWorthLocalSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="dk-root loc-page">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:bg-[radial-gradient(circle_at_16%_12%,rgba(49,87,245,0.07),transparent_26%),radial-gradient(circle_at_88%_6%,rgba(110,80,247,0.065),transparent_22%),linear-gradient(180deg,#fdfdff_0%,#f9fbff_60%,#fff_100%)] tw:pt-36 tw:pb-(--sec-y) tw:text-center tw:max-bsmd:pt-[120px]"
          aria-labelledby="dfw-h1"
        >
          <span className="tw:pointer-events-none tw:absolute tw:top-[250px] tw:-left-[200px] tw:-z-1 tw:size-[450px] tw:rounded-full tw:bg-[#5070ff] tw:opacity-[0.09] tw:blur-[70px]" />
          <span className="tw:pointer-events-none tw:absolute tw:top-[440px] tw:-right-[220px] tw:-z-1 tw:size-[450px] tw:rounded-full tw:bg-[#875cff] tw:opacity-[0.09] tw:blur-[70px]" />
          <span
            className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:max-bssm:hidden"
            aria-hidden="true"
          >
            {heroMarks.map(([x, y], i) => (
              <i
                key={`${x}-${y}`}
                className={cx(
                  "tw:absolute tw:before:absolute tw:before:top-1/2 tw:before:left-1/2 tw:before:h-[1.5px] tw:before:w-full tw:before:-translate-1/2 tw:before:rounded-[1px] tw:before:bg-[#3157f5] tw:before:content-[''] tw:after:absolute tw:after:top-1/2 tw:after:left-1/2 tw:after:h-[1.5px] tw:after:w-full tw:after:-translate-1/2 tw:after:rotate-90 tw:after:rounded-[1px] tw:after:bg-[#3157f5] tw:after:content-['']",
                  i % 2
                    ? "tw:size-3.5 tw:opacity-40"
                    : "tw:size-2.5 tw:opacity-30",
                )}
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            ))}
          </span>

          <Wrap>
            <Strip as="h1" id="dfw-h1" size="hero">
              Dallas &amp; Fort Worth <InlinePin id="dk-pin-hero" /> Local SEO{" "}
              <br className="tw:max-bssm:hidden" />
              That Wins the Map Pack
            </Strip>
            <p className={cx(LEAD, "tw:mx-auto tw:mt-7 tw:max-w-[760px]")}>
              Our local SEO services lift Dallas–Fort Worth businesses into the
              Google Map Pack and AI answers, so nearby customers call you
              first, from Denton to Mansfield. One flat monthly plan, no
              long-term contract.
            </p>
            <TrustLogos
              mapHref={SITE_CONTACT.mapHref}
              className="tw:mt-[30px]"
            />
            <div className="tw:mt-[30px] tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
              <Pill href="#dfw-contact" fullOnPhone>
                Get My DFW Map Pack Audit
              </Pill>
              <Pill
                href={SITE_CONTACT.phoneHref}
                tone="outline"
                size="md"
                fullOnPhone
              >
                <FiPhone aria-hidden="true" />
                Call {SITE_CONTACT.phoneDisplay}
              </Pill>
            </div>
          </Wrap>

          <div className="tw:mt-1 tw:grid tw:grid-cols-4 tw:items-end tw:gap-6 tw:px-(--inset) tw:text-left tw:max-bs2xl:gap-[18px] tw:max-bsxl:flex tw:max-bsxl:snap-x tw:max-bsxl:snap-mandatory tw:max-bsxl:overflow-x-auto tw:max-bsxl:pb-1.5 tw:max-bsxl:[scrollbar-width:none] tw:max-bssm:mt-4 tw:[&::-webkit-scrollbar]:hidden">
            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[345px] tw:justify-between tw:bg-(--blue) tw:text-white tw:max-bssm:h-[315px]",
              )}
            >
              <span className="tw:flex tw:items-center">
                <AvatarPh tone="a" ring="var(--blue)" />
                <AvatarPh tone="b" ring="var(--blue)" />
                <AvatarPh tone="c" ring="var(--blue)" />
                <span
                  className="tw:-ml-3 tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:border-3 tw:border-(--blue) tw:bg-(--gold) tw:text-xl tw:text-(--ink)"
                  aria-hidden="true"
                >
                  <FiPlus />
                </span>
              </span>
              <div>
                <p className="tw:mb-2.5 tw:text-[15.5px]/[1.45] tw:text-white/80">
                  Our goal in every DFW suburb you serve
                </p>
                <b className={BIG}>Top 3</b>
              </div>
            </div>

            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[285px] tw:items-center tw:justify-center tw:bg-[#dcfc7c] tw:text-center tw:max-bssm:h-[265px]",
              )}
            >
              <span
                className="tw:grid tw:size-[58px] tw:place-items-center tw:rounded-full tw:bg-white/55 tw:text-[23px] tw:text-(--ink)"
                aria-hidden="true"
              >
                <FiMapPin />
              </span>
              <b className={cx(BIG, "tw:mt-5")}>1,500+</b>
              <p className="tw:mt-2.5 tw:text-[15.5px]/[1.45] tw:text-(--ink)/70">
                Google Business Profiles optimized
              </p>
            </div>

            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[380px] tw:justify-between tw:bg-(--gold) tw:max-bssm:h-[345px]",
              )}
            >
              <span
                className="tw:grid tw:size-[58px] tw:place-items-center tw:rounded-full tw:bg-white tw:text-[23px]"
                aria-hidden="true"
              >
                <FiStar />
              </span>
              <div>
                <b className={BIG}>5.0</b>
                <span
                  className="tw:mt-3.5 tw:mb-2.5 tw:flex tw:gap-1"
                  aria-hidden="true"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <FiStar key={n} className="tw:size-4 tw:fill-(--ink)" />
                  ))}
                </span>
                <p className="tw:text-[15.5px]/[1.45]">
                  Client rating on Google
                </p>
              </div>
            </div>

            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[420px] tw:justify-start tw:bg-(--ink) tw:text-white tw:max-bssm:h-[390px]",
              )}
            >
              <b className="tw:block tw:text-[clamp(50px,4.6vw,70px)] tw:leading-none tw:font-medium tw:tracking-[-0.03em]">
                20+
              </b>
              <p className="tw:mt-4 tw:max-w-[12ch] tw:text-[clamp(19px,1.6vw,24px)]/[1.3]">
                Local industries served
              </p>
              <ul
                className="tw:absolute tw:right-[22px] tw:bottom-[22px] tw:left-[22px] tw:flex tw:flex-wrap tw:content-end tw:gap-x-1.5 tw:gap-y-[7px] tw:max-bssm:right-[18px] tw:max-bssm:bottom-[18px] tw:max-bssm:left-[18px]"
                aria-label="Industries we do local SEO for"
              >
                {TAGS.map(([name, tone]) => (
                  <li key={name} className={cx(TAG, tone)}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================== ABOUT */}
        <Section labelledBy="dfw-about-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-2 tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div className="tw:relative">
                <Strip id="dfw-about-h">
                  Local SEO in Dallas <br />
                  That Gets You Picked.
                </Strip>
                <HandArrow className="tw:absolute tw:top-[calc(100%+18px)] tw:left-[32%] tw:w-[230px] tw:max-bslg:hidden" />
              </div>
              <div>
                <Label>Dallas &amp; Fort Worth local SEO</Label>
                <p className={cx(LEAD, "tw:mb-6")}>
                  Search for a plumber or a dentist anywhere in DFW and Google
                  shows three businesses on the map. Those three take most of
                  the calls. Our job is to make one of them yours, with a fully
                  built profile, a steady stream of reviews, consistent listings
                  and pages for the suburbs you serve.
                </p>
                <p className={cx(LEAD, "tw:mb-6")}>
                  As a local SEO company for Dallas–Fort Worth service
                  businesses, we give you one dedicated strategist, a flat
                  month-to-month plan and a report showing where you rank in
                  each city, plus the calls, clicks and directions that
                  followed.
                </p>
                <Pill href="/about" tone="outline">
                  Meet Zonic Media
                </Pill>
              </div>
            </div>

            <div className="tw:relative tw:mt-[110px] tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] tw:gap-6 tw:max-bssm:mt-[84px] tw:max-bssm:grid-cols-1">
              <RatingBadge
                text="5.0 RATED ON GOOGLE • DFW LOCAL SEO •"
                className="tw:absolute tw:-top-24 tw:left-[calc(32%-96px)] tw:z-2 tw:max-bslg:-top-[75px] tw:max-bslg:left-[calc(32%-75px)] tw:max-bssm:-top-16 tw:max-bssm:right-6 tw:max-bssm:left-auto"
              />
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-auto">
                <RankFactorsCard />
              </div>
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-[280px]">
                <Ph
                  label="Dallas–Fort Worth local SEO: metro map with Map Pack pins, a local pack visibility chart and the Dallas skyline"
                  ratio="16:9"
                  src="/images/dfw/seo/dfw-local-seo-visibility.webp"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ======================================================== SERVICES */}
        <Section labelledBy="dfw-svc-h">
          <Wrap>
            <RowHead>
              <Strip id="dfw-svc-h">
                Local SEO Services <br />
                Dallas Businesses Rely On
              </Strip>
              <div className="tw:flex tw:max-w-[460px] tw:flex-col tw:items-start tw:gap-[22px]">
                <p className={LEAD}>
                  Everything that lifts a DFW business on Google Maps and in
                  search. Each plan covers profile management, review growth,
                  listing cleanup and a monthly report.
                </p>
                <Pill href="#dfw-contact">Get My DFW Map Pack Audit</Pill>
              </div>
            </RowHead>

            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="tw:group tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:pt-7 tw:pb-[26px] tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:hover:shadow-[0_26px_50px_-30px_rgba(12,21,38,0.28)] tw:max-bssm:px-6"
                >
                  <div className="tw:mb-[22px] tw:flex tw:items-center tw:justify-between tw:gap-3">
                    <span
                      className={cx(
                        "tw:grid tw:size-[60px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-2xl",
                        TONE[service.tone],
                      )}
                      aria-hidden="true"
                    >
                      <service.icon />
                    </span>
                    {service.note ? (
                      <span className="tw:rounded-full tw:bg-(--green-soft) tw:px-3.5 tw:py-1.5 tw:text-[13px] tw:font-medium tw:text-[#1f7a3a]">
                        {service.note}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="tw:text-[23px]/[1.2] tw:max-bssm:text-[21px]">
                    {service.title}
                  </h3>
                  <p className="tw:mt-3 tw:grow tw:text-lg/[1.65] tw:text-(--text)">
                    {service.body}
                  </p>
                  <TickList
                    items={service.points}
                    className="tw:mt-[18px] tw:mb-[22px] tw:min-h-[140px] tw:content-start tw:border-t tw:border-(--line) tw:pt-[18px] tw:text-(--ink-2) tw:max-bssm:min-h-0"
                  />
                  <Link
                    href={service.href}
                    className="tw:inline-flex tw:items-center tw:gap-2 tw:text-[15px] tw:font-medium tw:text-(--blue)"
                  >
                    {service.link}
                    <FiArrowRight
                      aria-hidden="true"
                      className="tw:transition-transform tw:group-hover:translate-x-[3px]"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ======================================================== FEATURES */}
        <Section labelledBy="dfw-feat-h" tone="white">
          <Wrap>
            <CenterHead
              id="dfw-feat-h"
              title="Three Ways We Lift DFW Businesses on Google Maps"
            >
              What our local SEO does for every Dallas–Fort Worth client, month
              after month.
            </CenterHead>
            {features.map((feature, i) => (
              <div
                key={feature.label}
                className={cx(
                  "tw:grid tw:grid-cols-2 tw:items-center tw:gap-16 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9",
                  i > 0 && "tw:mt-16 tw:max-bslg:mt-[72px]",
                )}
              >
                <feature.Panel flip={i % 2 === 1} />
                <div>
                  <Label>{feature.label}</Label>
                  <h3 className="tw:text-[clamp(30px,3.4vw,52px)] tw:leading-[1.06] tw:tracking-[-0.03em] tw:text-balance">
                    {feature.title}
                  </h3>
                  <p className={cx(LEAD, "tw:mt-6 tw:max-w-[54ch]")}>
                    {feature.body}
                  </p>
                  <ul className="tw:mt-[26px] tw:mb-7 tw:grid tw:grid-cols-2 tw:gap-x-8 tw:gap-y-[22px] tw:border-t tw:border-(--line) tw:pt-6 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-y-[18px]">
                    {feature.points.map((point) => (
                      <li
                        key={point.t}
                        className="tw:flex tw:items-start tw:gap-3"
                      >
                        <FiCheck
                          aria-hidden="true"
                          className="tw:mt-px tw:size-6 tw:flex-none tw:rounded-full tw:bg-(--blue-soft) tw:p-[5px] tw:text-(--blue) tw:[stroke-width:3]"
                        />
                        <span className="tw:text-[16.5px]/[1.55] tw:text-(--text)">
                          <b className="tw:mb-0.5 tw:block tw:text-lg tw:text-(--ink)">
                            {point.t}
                          </b>
                          {point.d}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Pill href={feature.href} arrow>
                    {feature.link}
                  </Pill>
                </div>
              </div>
            ))}
          </Wrap>
        </Section>

        {/* ========================================================= JOURNEY */}
        <Section labelledBy="dfw-journey-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:max-bslg:grid-cols-1">
              <div className="tw:px-11 tw:pt-12 tw:pb-11 tw:max-bssm:px-[22px] tw:max-bssm:pt-[30px] tw:max-bssm:pb-[26px]">
                <Strip id="dfw-journey-h" size="card">
                  How a Map Pack Search <br />
                  Becomes Your Next Job
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    "tw:mt-[22px] tw:mb-[26px] tw:max-w-[54ch]",
                  )}
                >
                  Local searchers act fast: they call, visit or ask for
                  directions. These four moments decide who gets the job, and
                  our local SEO is built to win each one.
                </p>
                <ol className="tw:grid tw:gap-2">
                  {journey.map((step, i) => (
                    <li
                      key={step.t}
                      className="tw:grid tw:grid-cols-[40px_minmax(0,1fr)] tw:gap-4 tw:rounded-[18px] tw:px-4 tw:py-3.5 tw:animate-[dk-step-on_12s_ease_infinite_both] tw:first:bg-(--blue-soft) tw:max-bssm:gap-3 tw:max-bssm:p-3"
                      style={{ animationDelay: `${i * 3}s` } as CSSProperties}
                    >
                      <span
                        className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-(--line) tw:bg-white tw:text-[15px] tw:font-semibold tw:text-(--blue-dark) tw:animate-[dk-num-on_12s_ease_infinite_both]"
                        style={{ animationDelay: `${i * 3}s` } as CSSProperties}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="tw:mt-0.5 tw:text-lg">{step.t}</h3>
                        <p className="tw:mt-1 tw:text-lg/[1.65] tw:text-(--text)">
                          {step.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="tw:grid tw:min-h-[560px] tw:place-items-center tw:[background:radial-gradient(60%_50%_at_30%_20%,rgba(49,87,245,0.16),transparent_70%),radial-gradient(60%_50%_at_80%_85%,rgba(110,80,247,0.14),transparent_70%),#f2f5fd] tw:px-6 tw:py-11 tw:max-bslg:min-h-0 tw:max-bslg:px-5 tw:max-bslg:py-9">
                <MapsJourneyPhone />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="dfw-steps-h">
          <Wrap>
            <RowHead>
              <Strip id="dfw-steps-h">Four Steps to the DFW Map Pack</Strip>
              <Pill href="#dfw-contact">Get My DFW Map Pack Audit</Pill>
            </RowHead>
            <ol className="tw:grid tw:gap-5">
              {steps.map((step, i) => {
                const tone = STEP_TONE[step.tone];
                const goCls =
                  "tw:grid tw:size-[84px] tw:place-items-center tw:self-end tw:rounded-full tw:border tw:border-[#d3dae6] tw:text-2xl tw:transition tw:duration-200 tw:hover:border-(--ink) tw:hover:bg-(--ink) tw:hover:text-white tw:max-bssm:absolute tw:max-bssm:top-6 tw:max-bssm:right-[22px] tw:max-bssm:size-14 tw:max-bssm:text-xl";
                return (
                  <li
                    key={step.title}
                    className="tw:grid tw:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] tw:gap-6 tw:max-bsxl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-3.5"
                  >
                    <div className="tw:relative tw:grid tw:grid-cols-[130px_minmax(0,1fr)_auto] tw:gap-6 tw:rounded-(--r-xl) tw:bg-white tw:px-10 tw:pt-10 tw:pb-9 tw:max-bs2xl:grid-cols-[90px_minmax(0,1fr)_auto] tw:max-bs2xl:pt-12 tw:max-bs2xl:pb-10 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-3.5 tw:max-bssm:px-[26px] tw:max-bssm:pt-8 tw:max-bssm:pb-7">
                      <span
                        className={cx(
                          "tw:grid tw:size-16 tw:place-items-center tw:rounded-full tw:text-xl tw:font-semibold tw:max-bssm:size-[52px] tw:max-bssm:text-[17px]",
                          tone.num,
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <Label>{step.when}</Label>
                        <h3 className="tw:max-w-[14ch] tw:text-[clamp(28px,3vw,46px)] tw:leading-[1.08] tw:tracking-[-0.03em]">
                          {step.title}
                        </h3>
                        <p
                          className={cx(
                            LEAD,
                            "tw:mt-[22px] tw:max-w-[42ch] tw:max-bssm:mt-[18px]",
                          )}
                        >
                          {step.body}
                        </p>
                      </div>
                      {step.href.startsWith("#") ? (
                        <a
                          href={step.href}
                          className={goCls}
                          aria-label={`More on: ${step.title}`}
                        >
                          <FiArrowRight aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          href={step.href}
                          className={goCls}
                          aria-label={`More on: ${step.title}`}
                        >
                          <FiArrowRight aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                    <div
                      className={cx(
                        "tw:relative tw:min-h-[260px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bssm:min-h-[220px]",
                        tone.bg,
                      )}
                    >
                      <div
                        className={cx(
                          "tw:absolute tw:top-[34px] tw:right-[30px] tw:-bottom-5 tw:left-[30px] tw:overflow-hidden tw:rounded-[22px] tw:[box-shadow:var(--lift)]",
                          i % 2 ? "tw:rotate-3" : "tw:-rotate-3",
                        )}
                      >
                        {localSeoStepUi[i]}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Wrap>
        </Section>

        {/* =================================================== RANKS BY CITY */}
        <Section labelledBy="dfw-cov-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-8 tw:max-bssm:px-[18px] tw:max-bssm:pt-[22px] tw:max-bssm:pb-7">
              <div className="tw:w-full tw:max-bslg:max-w-[520px]">
                <RankBoard />
              </div>
              <div>
                <Strip id="dfw-cov-h" size="card" className="tw:text-white">
                  Track Your Rankings <br />
                  City by City
                </Strip>
                <p className="tw:mt-6 tw:mb-[22px] tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]">
                  Google favors businesses close to the person searching, so a
                  shop in Dallas rarely shows up in Fort Worth by default. We
                  measure your Map Pack position from each suburb you serve, not
                  only from your address, and widen your reach month after
                  month.
                </p>
                <TickList
                  tone="gold"
                  className="tw:mb-[30px] tw:text-white"
                  items={[
                    "Grid scans across the metro",
                    "Pages for the suburbs you want",
                    "City-by-city progress each month",
                  ]}
                />
                <Pill
                  href="/google-maps-business-ranking-tool-online"
                  tone="white"
                  arrow
                  fullOnPhone
                >
                  Try Our Free Maps Rank Checker
                </Pill>
                <p className="tw:mt-[18px] tw:text-[13px] tw:text-[#8592ab]">
                  Illustration only. Real results depend on your market,
                  competitors and distance from each city.
                </p>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ============================================================= HUB */}
        <Section labelledBy="dfw-hub-h" tone="white">
          <Wrap>
            <CenterHead
              id="dfw-hub-h"
              title="One Accurate Listing on Every Map and AI App"
            >
              Customers also check Apple Maps, Bing and AI assistants. We claim
              and match your listing on each, including Apple Business and Bing
              Places, so your name, address and phone never conflict.
            </CenterHead>
            <div className="tw:relative tw:grid tw:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] tw:items-center tw:gap-10 tw:before:absolute tw:before:top-1/2 tw:before:right-[4%] tw:before:left-[4%] tw:before:border-t-[1.5px] tw:before:border-dashed tw:before:border-[#d3dae6] tw:before:content-[''] tw:max-bsxl:gap-5 tw:max-bslg:grid-cols-2 tw:max-bslg:gap-x-5 tw:max-bslg:gap-y-10 tw:max-bslg:before:hidden tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              <HubSide items={hubLeft} label="Maps and review sites" />
              <div className="tw:relative tw:z-1 tw:flex tw:flex-col tw:items-center tw:bg-white tw:px-3 tw:text-center tw:max-bslg:order-first tw:max-bslg:col-span-full tw:max-bssm:mb-3">
                <span className="tw:grid tw:size-[220px] tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-(--blue) tw:text-[72px] tw:text-(--blue) tw:shadow-[0_0_0_14px_#fff,0_0_0_15.5px_var(--blue-soft)] tw:max-bs2xl:size-[190px] tw:max-bs2xl:text-[62px] tw:max-bsxl:size-40 tw:max-bsxl:text-[52px] tw:max-bssm:size-[132px] tw:max-bssm:text-[44px] tw:max-bssm:shadow-[0_0_0_10px_#fff,0_0_0_11.5px_var(--blue-soft)]">
                  <FiMapPin aria-hidden="true" />
                </span>
                <b className="tw:mt-[30px] tw:text-2xl tw:max-bssm:mt-5 tw:max-bssm:text-[21px]">
                  Your business
                </b>
                <span className="tw:text-[15px] tw:text-(--muted)">
                  one name, one number, everywhere
                </span>
              </div>
              <HubSide items={hubRight} label="AI assistants and Facebook" />
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="dfw-love-h">
          <Wrap>
            <RowHead align="start">
              <Strip id="dfw-love-h">
                5.0 on Google From <br />
                Local Business Owners
              </Strip>
              <div className="tw:relative tw:max-w-[470px] tw:pt-2 tw:max-bsmd:max-w-none">
                <span className="tw:flex tw:items-center">
                  <AvatarPh tone="a" ring="var(--bg)" size={70} />
                  <AvatarPh tone="b" ring="var(--bg)" size={70} />
                  <AvatarPh tone="c" ring="var(--bg)" size={70} />
                  <AvatarPh tone="d" ring="var(--bg)" size={70} />
                </span>
                <Sparks className="tw:absolute tw:-top-[34px] tw:left-[270px] tw:w-[120px] tw:max-bsmd:hidden" />
                <p className={cx(LEAD, "tw:mt-[22px]")}>
                  Don’t take our word for it. These are unedited Google reviews
                  from the owners we work with.
                </p>
              </div>
            </RowHead>
            <div className="tw:flex tw:min-h-[360px] tw:flex-col tw:justify-center tw:rounded-(--r-xl) tw:bg-white tw:px-6 tw:py-7 tw:max-bssm:px-3 tw:max-bssm:py-5">
              {/* Google reviews (owner, 22 Oct 2026): same Trustindex widget as /home2;
                  the guard strips the review schema it injects. */}
              <LenisIframeGuard widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c" />
            </div>
            <TrustLogos
              mapHref={SITE_CONTACT.mapHref}
              size="row"
              className="tw:mt-8"
            />
          </Wrap>
        </Section>

        {/* ========================================================= PRICING */}
        <Section labelledBy="dfw-price-h">
          <Wrap>
            <div className="tw:mx-auto tw:max-w-[820px] tw:text-center">
              <Strip id="dfw-price-h">
                Dallas Local SEO <br />
                Pricing and Plans
              </Strip>
              <p className={cx(LEAD, "tw:mx-auto tw:mt-6 tw:max-w-[62ch]")}>
                Three month-to-month plans that scale with how crowded your
                market is. You get a flat quote after a free audit, so you know
                the price before you start.
              </p>
            </div>
            <div className="tw:mt-10 tw:grid tw:grid-cols-3 tw:items-stretch tw:gap-6 tw:max-bslg:mx-auto tw:max-bslg:max-w-[560px] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-8 tw:max-bssm:mt-8">
              {plans.map((plan) => {
                const featured = Boolean(plan.badge);
                return (
                  <article
                    key={plan.name}
                    className={cx(
                      "tw:relative tw:flex tw:flex-col tw:rounded-(--r-xl) tw:p-8 tw:max-bssm:p-6",
                      featured ? "tw:bg-(--ink) tw:text-white" : "tw:bg-white",
                    )}
                  >
                    {plan.badge ? (
                      <span className="tw:absolute tw:-top-3.5 tw:left-8 tw:rounded-full tw:bg-(--gold) tw:px-3.5 tw:py-1 tw:text-[12.5px] tw:font-medium tw:text-(--ink) tw:max-bssm:left-6">
                        {plan.badge}
                      </span>
                    ) : null}
                    <p
                      className={cx(
                        "tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:uppercase",
                        featured ? "tw:text-(--gold)" : "tw:text-(--muted)",
                      )}
                    >
                      {plan.kicker}
                    </p>
                    <h3
                      className={cx(
                        "tw:mt-2 tw:text-[28px]",
                        featured && "tw:text-white",
                      )}
                    >
                      {plan.name}
                    </h3>
                    <p className="tw:mt-5 tw:flex tw:items-baseline tw:gap-2">
                      <b className="tw:text-[56px] tw:leading-none tw:tracking-[-0.03em] tw:max-bssm:text-[48px]">
                        {plan.price}
                      </b>
                      <span
                        className={cx(
                          "tw:text-[15px]",
                          featured ? "tw:text-white/70" : "tw:text-(--muted)",
                        )}
                      >
                        / month, starting at
                      </span>
                    </p>
                    <p
                      className={cx(
                        "tw:mt-3 tw:text-[16.5px]/[1.55]",
                        featured ? "tw:text-white/75" : "tw:text-(--text)",
                      )}
                    >
                      {plan.subtitle}
                    </p>
                    <TickList
                      tone={featured ? "gold" : "green"}
                      items={plan.features}
                      className={cx(
                        "tw:mt-6 tw:mb-8 tw:grow tw:content-start tw:border-t tw:pt-6",
                        featured
                          ? "tw:border-white/15 tw:text-white/90"
                          : "tw:border-(--line) tw:text-(--ink-2)",
                      )}
                    />
                    <Pill
                      href="#dfw-contact"
                      tone={featured ? "white" : "ink"}
                      size="md"
                      className="tw:w-full"
                    >
                      Get a Free Audit
                    </Pill>
                  </article>
                );
              })}
            </div>
            <p className="tw:mx-auto tw:mt-8 tw:max-w-[70ch] tw:text-center tw:text-[15.5px]/[1.6] tw:text-(--text)">
              Each price is where that plan starts; your quote depends on the
              competition the audit finds. Month to month, stop any month.{" "}
              <Link
                href="/services/local-seo-packages"
                className="tw:font-medium tw:text-(--blue) tw:underline tw:underline-offset-[3px]"
              >
                Compare every local SEO package
              </Link>
              .
            </p>
          </Wrap>
        </Section>

        {/* ============================================================= FAQ */}
        <Section labelledBy="dfw-faq-h">
          <Wrap>
            <h2
              id="dfw-faq-h"
              className="tw:mb-9 tw:text-center tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
            >
              Local SEO in Dallas–Fort Worth: FAQs
            </h2>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                >
                  <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-[22px] tw:text-xl tw:font-medium tw:tracking-[-0.01em] tw:text-(--ink) tw:max-bsmd:text-[17.5px]">
                    {item.q}
                    <FiPlus
                      aria-hidden="true"
                      className="tw:size-[22px] tw:flex-none tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                    />
                  </summary>
                  <p className="tw:max-w-[76ch] tw:pb-[22px] tw:text-lg/[1.65] tw:text-(--text) tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:underline-offset-[3px]">
                    {item.a}
                    {item.link ? (
                      <>
                        {" "}
                        <Link href={item.link.href}>{item.link.label}</Link>.
                      </>
                    ) : null}
                  </p>
                </details>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= CONTACT */}
        <Section id="dfw-contact" labelledBy="dfw-contact-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:overflow-hidden tw:rounded-[48px] tw:bg-white tw:px-12 tw:pt-[60px] tw:pb-11 tw:text-center tw:max-bslg:px-10 tw:max-bslg:pt-16 tw:max-bslg:pb-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-12 tw:max-bssm:pb-4">
              <svg
                viewBox="0 0 120 90"
                className="tw:absolute tw:top-[38%] tw:left-[5%] tw:w-[132px] tw:-rotate-[14deg] tw:drop-shadow-[0_18px_18px_rgba(28,79,196,0.25)] tw:max-bsxl:left-[3%] tw:max-bsxl:w-[100px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <rect
                  x="6"
                  y="14"
                  width="108"
                  height="70"
                  rx="10"
                  fill="#5d8ff2"
                />
                <path
                  d="M10 22 L60 56 L110 22"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={6}
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="tw:absolute tw:top-[34%] tw:right-[6%] tw:text-[150px] tw:leading-none tw:max-bsxl:right-[4%] tw:max-bsxl:text-[110px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <InlinePin id="dk-pin-contact" />
              </span>
              <h2
                id="dfw-contact-h"
                className="tw:text-[clamp(34px,4.8vw,74px)] tw:leading-[1.08] tw:tracking-[-0.035em]"
              >
                Ready to Climb <InlineChat id="dk-chat-contact" /> the <br />
                DFW Map Pack?
              </h2>
              <p
                className={cx(LEAD, "tw:mx-auto tw:mt-[26px] tw:max-w-[640px]")}
              >
                Share your services and the DFW suburbs you want more calls
                from. We’ll audit your local SEO for free, show where you rank
                today and send one flat monthly quote.
              </p>
              <div className="tw:mt-7 tw:flex tw:flex-wrap tw:justify-center tw:gap-3">
                <Pill href={SITE_CONTACT.phoneHref} size="md" fullOnPhone>
                  <FiPhone aria-hidden="true" className="tw:size-[17px]" />
                  {SITE_CONTACT.phoneDisplay}
                </Pill>
                <Pill
                  href={SITE_CONTACT.emailHref}
                  tone="outline"
                  size="md"
                  fullOnPhone
                >
                  <FiMail aria-hidden="true" className="tw:size-[17px]" />
                  {SITE_CONTACT.email}
                </Pill>
                {/* Head-office address (content brief rule 9); not a DFW office. */}
                <Pill
                  href={SITE_CONTACT.mapHref}
                  tone="outline"
                  size="md"
                  fullOnPhone
                >
                  <FiMapPin aria-hidden="true" className="tw:size-[17px]" />
                  {SITE_CONTACT.address}
                </Pill>
              </div>
              <div className="tw:mx-auto tw:mt-[34px] tw:max-w-[760px] tw:text-left">
                <ServiceLeadForm
                  formType="dfw-local-seo"
                  title="Get Your Free DFW Map Pack Audit"
                  subtitle="One minute to fill in, and nothing to sign."
                  submitText="Send My DFW Audit"
                  messageLabel="Which suburbs and services matter most?"
                  messagePlaceholder="For example: more AC repair calls from Plano and Frisco"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ============================================================ BAND */}
        <section
          className="tw:bg-[radial-gradient(45%_120%_at_22%_110%,rgba(234,67,52,0.18)_0%,transparent_60%),radial-gradient(40%_120%_at_78%_100%,rgba(253,193,21,0.32)_0%,transparent_60%),linear-gradient(100deg,#e4ecfb_0%,#f3eef6_55%,#fde9df_100%)] tw:py-16 tw:max-bssm:py-[60px]"
          aria-labelledby="dfw-band-h"
        >
          <Wrap className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-x-14 tw:gap-y-8 tw:max-bslg:flex-col tw:max-bslg:items-start">
            <h2
              id="dfw-band-h"
              className="tw:max-w-[16ch] tw:text-[clamp(38px,5.4vw,82px)] tw:leading-none tw:tracking-[-0.04em]"
            >
              Own the Map Pack{" "}
              <span className="tw:text-(--blue)">
                Across Dallas–Fort Worth.
              </span>
            </h2>
            <div className="tw:max-w-[380px]">
              <p className={cx(LEAD, "tw:mb-[22px]")}>
                Your first step is a free audit, followed by one flat monthly
                quote. No long-term contract, ever.
              </p>
              <Pill href={SITE_CONTACT.bookCallHref} tone="blue" fullOnPhone>
                Book a Free Strategy Call
              </Pill>
            </div>
          </Wrap>
        </section>
      </main>
      <Footer />
    </>
  );
}
