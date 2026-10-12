import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Metadata } from "next";
import {
  FiArrowRight,
  FiBarChart2,
  FiAward,
  FiCamera,
  FiCheck,
  FiClock,
  FiEyeOff,
  FiGlobe,
  FiGrid,
  FiMapPin,
  FiNavigation,
  FiPhone,
  FiPieChart,
  FiSearch,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiX,
} from "react-icons/fi";

import "@/app/style/rankChecker.css";

import Footer from "@/app/components/Footer";
import ClutchWidget from "@/app/components/ClutchWidget";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import {
  AnimOnView,
  KeywordScanDemo,
  type KeywordPattern,
} from "@/app/components/RankCheckerFx";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

/* ---------------------------------------------------------------------------
   POSITIONING — read before editing the copy.

   This page owns the TOOL-intent query set (Semrush US, Oct 2026):

     · "google maps rank checker" (720) / "google maps ranking checker" (140)
     · "google local rank checker" (590) / "google maps rank tracker" (390)
     · "google my business rank checker" (260, KD 18) / "gmb rank checker" (140)
     · "google maps ranking tool" (90) / "google business rank checker"

   /local-seo-google-business-optimization owns "how to rank in the Map Pack".
   The ranking-factors block here is the short version from the design file;
   link UP to the hub for the full treatment.

   THE SCAN is a myservice.report widget. Its embed key only accepts the
   parent origin https://www.zonicllc.com (checked against
   /embed-keys/validate-by-embed-id), so it prints "This embed is
   unavailable" on localhost, Vercel previews and the bare apex domain.
   Widget defaults: 7×7 grid, 10 km radius; it asks for a Google Maps URL,
   a keyword and an email address. Copy below describes exactly that.

   DESIGN: colours and type come from the hero of the supplied design file
   (zonic-google-business-rank-checker.html): Manrope 800 headings, Inter
   body, #3157f5 → #6e50f7. The gradient pin always means "your business".
   Sections never animate; only the product UI inside them does. Side
   insets follow the navbar (100 / 30 / 40 / 20).
--------------------------------------------------------------------------- */

const PAGE_PATH = "/google-maps-business-ranking-tool-online";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = "Google Maps Rank Checker | Free Google Business Rank Tool";
const DESCRIPTION =
  "Free Google Maps rank checker. See where your Google Business Profile ranks in the Map Pack across your whole service area. Run your free scan now.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "google business rank checker",
    "google maps rank checker",
    "google maps ranking checker",
    "check google maps ranking",
    "google local rank checker",
    "google maps rank tracker",
    "google my business rank checker",
    "gmb rank checker",
    "google business profile rank checker",
    "google maps ranking tool",
    "geo grid rank tracker",
    "local rank checker",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Google Business Rank Checker: Check Your Google Maps Ranking",
    description:
      "Run a free scan and see where your business shows up on Google Maps across your whole service area, plus how to read the results.",
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media: free Google Maps rank checker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Rank Checker: Check Your Google Maps Ranking",
    description:
      "You might be #1 at your front door and nowhere five miles out. Run a free scan of your service area.",
  },
};

/* ------------------------------------------------------------- shared data */

type Band = "is-top" | "is-mid" | "is-low" | "is-out";

const band = (rank: number): Band => {
  if (rank > 20) return "is-out";
  if (rank <= 3) return "is-top";
  if (rank <= 10) return "is-mid";
  return "is-low";
};

const rankLabel = (rank: number) => (rank > 20 ? "20+" : String(rank));

const statsOf = (grid: number[]) => ({
  average: (grid.reduce((s, r) => s + r, 0) / grid.length).toFixed(1),
  top3: grid.filter((r) => r <= 3).length,
  found: grid.filter((r) => r <= 20).length,
  total: grid.length,
});

const ring = (i: number, size = 7) => {
  const mid = (size - 1) / 2;
  return Math.max(
    Math.abs(Math.floor(i / size) - mid),
    Math.abs((i % size) - mid),
  );
};

/* The example scan used by the map, the report panel, the checker card and
   the closing plan. 7×7, 21 = not in the top 20, index 24 = the business. */
// prettier-ignore
const GRID = [
  21, 16, 12, 10, 12, 17, 21,
  15, 9, 6, 5, 7, 11, 18,
  11, 6, 3, 2, 3, 7, 14,
  9, 4, 2, 1, 1, 5, 12,
  12, 5, 2, 1, 3, 6, 13,
  16, 8, 5, 4, 6, 10, 19,
  21, 14, 11, 9, 12, 16, 21,
];
const PIN = 24;
const gridStats = statsOf(GRID);

/* "How to read it" cards under the geo-grid. `tone` matches the report. */
const readCards = [
  {
    title: "Rank at your address",
    body: "Almost every business looks good here. It’s the number owners see and the least useful one.",
    icon: FiMapPin,
    tone: "you",
  },
  {
    title: "Average position",
    body: "The honest headline. Under 3 and you own the area; above 10 and most customers scroll past you.",
    icon: FiBarChart2,
    tone: "blue",
  },
  {
    title: "Share of the grid in the 3-Pack",
    body: "The part of your area where you get calls without anyone scrolling. This is the number to grow.",
    icon: FiPieChart,
    tone: "green",
  },
  {
    title: "Points where you’re missing",
    body: "Grey dots are places Google doesn’t connect to you yet, often the towns you most want work from.",
    icon: FiEyeOff,
    tone: "grey",
  },
];

/* Distance demo: five plumbers, four searcher positions. `at` is each
   listing's row (0–3 visible, 4 = pushed off the list) at each position. */
const distanceStops = ["0.3 km", "2 km", "5 km", "9 km"];
const yourRankAtStop = ["#1", "#2", "#4", "#14"];
const listings = [
  {
    name: "Your Plumbing Co.",
    rating: "4.8",
    reviews: 96,
    you: true,
    at: [0, 1, 3, 4],
  },
  {
    name: "Rapid Rooter Plumbing",
    rating: "4.6",
    reviews: 310,
    at: [1, 0, 1, 2],
  },
  { name: "Blue Wave Plumbing", rating: "4.9", reviews: 58, at: [2, 3, 4, 3] },
  { name: "Kent Drain & Sewer", rating: "4.5", reviews: 122, at: [3, 2, 0, 1] },
  {
    name: "Harbor Plumbing Co.",
    rating: "4.7",
    reviews: 204,
    at: [4, 4, 2, 0],
  },
];

const phoneReasons = [
  {
    icon: FiNavigation,
    title: "You search from your own address",
    body: "From your desk you’re the closest business in the category, so you look like #1 whatever your real visibility is.",
  },
  {
    icon: FiUser,
    title: "Google already knows you",
    body: "You’ve opened your own listing and clicked your own site. Incognito mode hides some history but not your location.",
  },
  {
    icon: FiMapPin,
    title: "One search is one point",
    body: "Customers search from homes and job sites all over your area. A rank checker repeats the search from each of them.",
  },
];

const keywordPatterns: KeywordPattern[] = [
  {
    pattern: "Implicit local",
    query: "water heater repair",
    note: "No city, no “near me”. Google uses the searcher’s location anyway, and it’s usually your biggest keyword.",
    grid: [
      9, 6, 5, 7, 12, 5, 3, 2, 4, 8, 4, 2, 1, 2, 6, 7, 3, 2, 5, 9, 13, 8, 6, 9,
      15,
    ],
  },
  {
    pattern: "Near me",
    query: "water heater repair near me",
    note: "Same job, said out loud. It leans hardest on distance, so the green shrinks fastest.",
    grid: [
      21, 14, 9, 15, 21, 12, 4, 2, 5, 16, 8, 2, 1, 2, 11, 14, 5, 3, 6, 17, 21,
      16, 12, 18, 21,
    ],
  },
  {
    pattern: "Service + town",
    query: "water heater repair dover de",
    note: "Shows whether Google connects you to towns beyond the one on your address.",
    grid: [
      21, 21, 18, 21, 21, 19, 11, 7, 12, 21, 14, 6, 3, 8, 17, 21, 12, 9, 13, 21,
      21, 21, 21, 21, 21,
    ],
  },
  {
    pattern: "Urgent & spoken",
    query: "who can fix a water heater today",
    note: "“Open now”, “today”, full questions typed into AI Mode or said to a phone.",
    grid: [
      16, 11, 8, 12, 19, 10, 6, 4, 7, 14, 7, 3, 2, 4, 9, 12, 7, 5, 8, 15, 21,
      13, 10, 14, 21,
    ],
  },
];

/* Ranking factors: copy from the supplied design file. */
const factors = [
  {
    name: "Relevance",
    icon: FiTarget,
    body: "How closely your Business Profile matches what the customer is searching for. Accurate categories, services, and complete business information help Google understand the match.",
  },
  {
    name: "Distance",
    icon: FiNavigation,
    body: "How far the business is from the searcher, or from the location included in the search. Local visibility naturally changes as the search point changes.",
  },
  {
    name: "Prominence",
    icon: FiAward,
    body: "How established and well known the business appears. Reviews, links, references across the web, and organic visibility can all contribute to local prominence.",
  },
];

/* Checker vs tracker. Tracker numbers are an illustration. */
const trackerWeeks = [
  14.2, 13.8, 12.9, 12.1, 10.4, 9.8, 8.1, 7.5, 6.2, 5.4, 4.8, 4.1,
];
const chartX = (i: number) => 34 + i * (290 / (trackerWeeks.length - 1));
const chartY = (rank: number) => 18 + (rank - 1) * (118 / 19);
const trackerPath = trackerWeeks
  .map(
    (r, i) => `${i ? "L" : "M"}${chartX(i).toFixed(1)} ${chartY(r).toFixed(1)}`,
  )
  .join(" ");
const trackerArea = `${trackerPath} L${chartX(11).toFixed(1)} ${chartY(20).toFixed(1)} L${chartX(0).toFixed(1)} ${chartY(20).toFixed(1)} Z`;
const trackerEvents = [
  { week: 3, label: "Category fixed" },
  { week: 7, label: "Review push" },
];
const WEEK_1 = [
  21, 18, 15, 19, 21, 16, 12, 9, 13, 20, 14, 8, 4, 9, 17, 18, 11, 8, 12, 21, 21,
  17, 14, 18, 21,
];
const WEEK_12 = [
  6, 4, 3, 4, 7, 3, 2, 1, 2, 4, 2, 1, 1, 1, 3, 4, 2, 1, 2, 5, 7, 4, 3, 5, 8,
];

const compareRows: { label: string; checker: ReactNode; tracker: ReactNode }[] =
  [
    {
      label: "What it answers",
      checker: "Where do I rank right now?",
      tracker: "Am I moving, and why?",
    },
    {
      label: "How often",
      checker: "On demand, one run",
      tracker: "Weekly or monthly, automatically",
    },
    {
      label: "Keywords",
      checker: "One or a few",
      tracker: "Your full service list",
    },
    {
      label: "Competitors",
      checker: "Who holds the 3-Pack today",
      tracker: "Who is gaining on you over time",
    },
    {
      label: "Best for",
      checker: "A first diagnosis before spending money",
      tracker: "Proving work is paying off",
    },
    {
      label: "Cost",
      checker: <span className="grc-pill grc-pill--green">Free</span>,
      tracker: (
        <span className="grc-pill grc-pill--violet">
          Part of a local SEO plan
        </span>
      ),
    },
  ];

/* Three grid patterns. `tone` colours the diagnosis tag. */
const NONE = Array(25).fill(21);
const patterns: {
  tag: string;
  tone: "red" | "amber" | "blue" | "green" | "violet";
  signal: string;
  reading: string;
  art: "missing" | "ring" | "split";
  grids: number[][];
  links: { href: string; label: string }[];
}[] = [
  {
    tag: "Profile problem",
    tone: "red",
    signal: "Grey everywhere: not found at any point",
    reading:
      "Usually a profile problem rather than a ranking one. The listing is unverified, suspended, or sits under a category that doesn’t match the keyword.",
    art: "missing",
    grids: [NONE],
    links: [
      {
        href: "/services/gmb-verification-help",
        label: "GMB verification help",
      },
      {
        href: "/services/gbp-reinstatement-service",
        label: "Suspended? Reinstatement",
      },
    ],
  },
  {
    tag: "Reach problem",
    tone: "amber",
    signal: "Green at the door, red two miles out",
    reading:
      "The classic pattern. Distance is carrying you, and relevance and prominence aren’t strong enough to reach the rest of the area.",
    art: "ring",
    grids: [
      [
        21, 21, 18, 21, 21, 19, 9, 5, 11, 21, 14, 3, 1, 4, 17, 21, 8, 6, 12, 21,
        21, 21, 19, 21, 21,
      ],
    ],
    links: [
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
    ],
  },
  {
    tag: "Relevance problem",
    tone: "blue",
    signal: "Green on one keyword, red on the next",
    reading:
      "Google connects you to one service and not the others. Categories, listed services and the pages on your website decide which searches you’re eligible for.",
    art: "split",
    grids: [
      [
        5, 3, 2, 4, 7, 3, 2, 1, 2, 4, 2, 1, 1, 1, 3, 4, 2, 1, 2, 5, 6, 3, 2, 4,
        8,
      ],
      [
        21, 19, 16, 21, 21, 18, 14, 11, 15, 21, 15, 12, 9, 13, 18, 21, 15, 12,
        17, 21, 21, 21, 19, 21, 21,
      ],
    ],
    links: [
      { href: "/services/local-seo-packages", label: "Local SEO packages" },
    ],
  },
];

/* Closing CTA: today's example scan wiped over by a goal grid. */
// prettier-ignore
const GOAL = [
  6, 4, 3, 3, 3, 4, 6,
  4, 2, 2, 1, 2, 2, 4,
  3, 2, 1, 1, 1, 2, 3,
  3, 1, 1, 1, 1, 1, 3,
  3, 2, 1, 1, 1, 2, 3,
  4, 2, 2, 1, 2, 2, 4,
  6, 4, 3, 3, 3, 4, 6,
];
const goalStats = statsOf(GOAL);
const levers = ["Category", "Service pages", "Reviews", "Local links"];

const faqs = [
  {
    q: "Is this Google Maps rank checker free?",
    a: "Yes. There’s no charge and no contract. The scan asks for your Google Maps link, one keyword and an email address, then shows your results.",
  },
  {
    q: "How many points does the scan check?",
    a: "By default it searches from 49 points on a 7 × 7 grid spread across 10 km around your business, so you see your rank in every direction rather than at one spot.",
  },
  {
    q: "How do I check my Google Maps ranking?",
    a: "Copy your business’s link from Google Maps, paste it into the scan at the top of this page with the keyword a customer would type (the service, not your business name), and run it. Read where the green stops first, then the averages, and check again with the same keyword in about 30 days.",
  },
  {
    q: "Why does my ranking look different when I search on my own phone?",
    a: "Because you are searching from your own location, usually your own address, and Google orders Map Pack results heavily by distance from the searcher. Your search history plays a part too. A rank checker runs the same search from many points around your area, which is how customers actually see you.",
  },
  {
    q: "Will checking my ranking affect my Google Business Profile?",
    a: "No. A rank checker only reads public search results. It doesn’t log in to your profile, change anything on it, or send any signal Google uses for ranking.",
  },
  {
    q: "How often should I check my Google Maps ranking?",
    a: "Once a month is enough for most local businesses, plus a check a few weeks after any real change, such as a new primary category, a review push or a moved address. Rankings move a little every day, so checking daily mostly shows you noise.",
  },
  {
    q: "What is a good Google Maps ranking?",
    a: "The top three, the Map Pack, is where most calls come from, so the goal is to be in the top three across the core of your service area, not only at your address. If your average across the grid is in single figures and the green covers the neighbourhoods you want work from, you’re in good shape.",
  },
  {
    q: "Is this the same as a Google My Business rank checker?",
    a: "Yes. Google My Business was renamed Google Business Profile in 2021, so a Google My Business rank checker, a GMB rank checker and a Google Business Profile rank checker all measure the same thing: where your listing appears in Google Maps and the local Map Pack.",
  },
  {
    q: "What is the difference between a rank checker and a rank tracker?",
    a: "A rank checker gives you a snapshot of where you rank right now for a keyword. A rank tracker repeats the same scan on a schedule and stores the history, so you can see whether rankings are moving and which competitors are gaining.",
  },
  {
    q: "Why doesn’t my business show up on Google Maps at all?",
    a: "The most common causes are a profile that was never verified, a suspension, a primary category that doesn’t match the search, or a keyword your profile and website don’t mention. Check that the profile is live in Google Maps first; if it is suspended, it needs reinstating before any ranking work will help.",
  },
  {
    q: "Does the checker work for service-area businesses without a storefront?",
    a: "Yes. Map Pack rankings are measured from where the searcher is, so the same scan applies whether your address is shown on the profile or hidden.",
  },
];

/* ------------------------------------------------------------------ schema */

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Google Business Rank Checker", url: PAGE_PATH },
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
    mainEntity: { "@id": `${PAGE_URL}#tool` },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${PAGE_URL}#tool`,
    name: "Google Business Rank Checker",
    alternateName: [
      "Google Maps Rank Checker",
      "GMB Rank Checker",
      "Local Search Quick Scan",
    ],
    url: PAGE_URL,
    description:
      "A free online tool that checks where a Google Business Profile ranks in Google Maps and the local Map Pack from 49 points on a 7 × 7 grid across a business's service area.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript and a modern web browser",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@id": `${SITE_URL}/#organization` },
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

/* ------------------------------------------------------------ ui fragments */

/** A light Google-Maps-style street map. Pure decoration. */
function MapArt({
  className = "",
  stretch = false,
}: {
  className?: string;
  /** Stretch to the box so overlay % positions match SVG coordinates. */
  stretch?: boolean;
}) {
  return (
    <svg
      className={`grc-map ${className}`}
      viewBox="0 0 400 300"
      preserveAspectRatio={stretch ? "none" : "xMidYMid slice"}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="400" height="300" className="grc-map__land" />
      <rect
        x="250"
        y="18"
        width="92"
        height="62"
        rx="10"
        className="grc-map__park"
      />
      <rect
        x="24"
        y="196"
        width="70"
        height="46"
        rx="10"
        className="grc-map__park"
      />
      <path
        className="grc-map__water"
        d="M-10 258 C 60 232 120 280 190 258 S 320 214 410 236 L 410 300 L -10 300 Z"
      />
      <g className="grc-map__minor">
        <path d="M0 40 H400 M0 120 H400 M0 210 H400 M60 0 V300 M160 0 V300 M230 0 V300 M330 0 V300" />
      </g>
      <g className="grc-map__major">
        <path d="M-10 168 C 90 150 170 196 260 150 S 360 92 410 100" />
        <path d="M110 -10 C 118 80 96 160 128 310" />
        <path d="M120 186 L 184 138 L 256 96 L 336 48 L 410 6" />
      </g>
    </svg>
  );
}

function DotGrid({
  grid,
  size = 5,
  className = "",
  numbers = false,
}: {
  grid: number[];
  size?: number;
  className?: string;
  numbers?: boolean;
}) {
  const you = (grid.length - 1) / 2;
  return (
    <span
      className={`grc-dots ${className}`}
      style={{ "--n": size } as CSSProperties}
    >
      {grid.map((rank, i) => (
        <i
          key={i}
          className={`${band(rank)}${i === you ? " is-you" : ""}`}
          style={{ "--r": ring(i, size) } as CSSProperties}
        >
          {numbers && i !== you ? rankLabel(rank) : null}
        </i>
      ))}
    </span>
  );
}

function SectionHead({
  kicker,
  id,
  title,
  children,
  center = false,
}: {
  kicker: string;
  id: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`grc-head${center ? " grc-head--center" : ""}`}>
      <p className="grc-kicker">{kicker}</p>
      <h2 id={id} className="grc-h2">
        {title}
      </h2>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------- page */

export default function GoogleMapsRankCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimOnView />

      <main className="grc">
        {/* =========================================================== HERO
            Built 1:1 from the supplied design file
            (zonic-google-business-rank-checker.html, hero section only). */}
        <section className="grc-hx" aria-labelledby="grc-h1">
          <span className="grc-hx__glow grc-hx__glow--one" aria-hidden="true" />
          <span className="grc-hx__glow grc-hx__glow--two" aria-hidden="true" />

          <div className="grc-in">
            <div className="grc-hx__copy">
              <p className="grc-hx__eyebrow">
                <span className="grc-hx__pulse" aria-hidden="true" /> Free Local
                SEO Tool
              </p>
              <h1 id="grc-h1" className="grc-hx__h1">
                Google Business{" "}
                <span className="grc-hx__gradient">Rank Checker</span>
              </h1>
              <h2 className="grc-hx__h2">Check your Google Maps Ranking</h2>
              <p className="grc-hx__lede">
                Run a quick local search scan to see how visible your business
                is on Google. Use the results to understand where you stand
                before you invest in local SEO, profile optimization, or a
                bigger growth plan.
              </p>

              <ul className="grc-hx__chips" aria-label="Tool benefits">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 21s7-4.45 7-11A7 7 0 1 0 5 10c0 6.55 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                  Local search visibility
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 19V9m5 10V5m5 14v-7m5 7V3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  Ranking insight
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="m9.3 12.2 1.8 1.8 3.9-4.2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Actionable next step
                </li>
              </ul>
            </div>

            <div className="grc-hx__shell" id="scan">
              <div className="grc-hx__toolbar">
                <div className="grc-hx__traffic" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="grc-hx__title">
                  <span className="grc-hx__g" aria-hidden="true">
                    G
                  </span>
                  Local Search Quick Scan
                </div>
                <div className="grc-hx__live">
                  <b aria-hidden="true" /> Live scan
                </div>
              </div>

              <LenisIframeGuard className="grc-hx__frame">
                <iframe
                  src="https://scan.myservice.report/?widgetId=70aa6aa5a37de1e22f7656f2"
                  width="100%"
                  height="640"
                  style={{ border: "none" }}
                  title="Local Search Quick Scan"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </LenisIframeGuard>
            </div>
          </div>
        </section>

        {/* ======================================================= STATS */}
        <div className="grc-stats">
          <ul className="grc-in grc-stats__row">
            <li>
              <span className="grc-stats__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 19V8l8-4 8 4v11H4Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M8 19v-6h8v6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>
              <div>
                <strong>1,500+</strong>
                <span>Google Business Profiles optimized</span>
              </div>
            </li>
            <li>
              <span className="grc-stats__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3 5 6v5c0 4.8 2.9 8.3 7 10 4.1-1.7 7-5.2 7-10V6l-7-3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <strong>900+</strong>
                <span>Profiles reinstated and verified</span>
              </div>
            </li>
            <li>
              <span className="grc-stats__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12h18M12 3c2.7 2.6 4 5.6 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.6-4-9s1.3-6.4 4-9Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>
              <div>
                <strong>Nationwide</strong>
                <span>Built for US local and service-area businesses</span>
              </div>
            </li>
            <li>
              <span className="grc-stats__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 18 10 13l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9h4v4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <strong>Map Pack</strong>
                <span>
                  Focused on the searches that lead to calls and bookings
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* =================================================== DISTANCE */}
        <section className="grc-sec grc-sec--flat" aria-labelledby="grc-dist-h">
          <div className="grc-in">
            <div className="grc-dist">
              <SectionHead
                kicker="Why your own search misleads you"
                id="grc-dist-h"
                title="Your Google Maps Ranking Changes Every Few Streets"
              >
                <p className="grc-copy">
                  Google orders the Map Pack partly by how close each business
                  is to the person searching. The same search for “plumber near
                  me” gives a different top three on every street, so checking
                  from your own phone almost always says you’re #1.
                </p>
                <p className="grc-copy">
                  Watch the demo: as the blue searcher moves away from the
                  business, the same listing slides from #1 to #14.
                </p>
              </SectionHead>

              <figure className="grc-gmaps" data-anim>
                <div className="grc-gmaps__list">
                  <div className="grc-gmaps__search">
                    <FiSearch aria-hidden="true" /> plumber near me
                  </div>
                  <p className="grc-gmaps__label">Results · Map Pack</p>
                  <ol className="grc-gmaps__rows" aria-hidden="true">
                    {listings.map((item) => (
                      <li
                        key={item.name}
                        className={item.you ? "is-you" : undefined}
                        style={
                          {
                            "--a": item.at[0],
                            "--b": item.at[1],
                            "--c": item.at[2],
                            "--d": item.at[3],
                          } as CSSProperties
                        }
                      >
                        <b>{item.name}</b>
                        <span>
                          {item.rating} <FiStar /> ({item.reviews}) · Plumber
                        </span>
                        {item.you ? <em>You</em> : null}
                      </li>
                    ))}
                  </ol>
                  <div className="grc-gmaps__you" aria-hidden="true">
                    <span>Your position here</span>
                    <span className="grc-cycle">
                      {yourRankAtStop.map((label, k) => (
                        <b key={label} style={{ "--k": k } as CSSProperties}>
                          {label}
                        </b>
                      ))}
                    </span>
                  </div>
                </div>

                <div className="grc-gmaps__map" aria-hidden="true">
                  <MapArt stretch />
                  <span className="grc-gmaps__ring grc-gmaps__ring--1" />
                  <span className="grc-gmaps__ring grc-gmaps__ring--2" />
                  <span className="grc-gmaps__ring grc-gmaps__ring--3" />
                  <span className="grc-youpin grc-gmaps__store">
                    <FiMapPin />
                  </span>
                  <span className="grc-gmaps__searcher">
                    <span className="grc-cycle grc-gmaps__km">
                      {distanceStops.map((label, k) => (
                        <b key={label} style={{ "--k": k } as CSSProperties}>
                          {label}
                        </b>
                      ))}
                    </span>
                  </span>
                </div>
                <figcaption>
                  Illustration: one search, four places. The listing order moves
                  as the searcher gets further from the business.
                </figcaption>
              </figure>
            </div>

            <ul className="grc-reasons">
              {phoneReasons.map((item) => (
                <li key={item.title}>
                  <span className="grc-icon" aria-hidden="true">
                    <item.icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===================================================== GEO GRID */}
        <section className="grc-sec grc-sec--soft" aria-labelledby="grc-geo-h">
          <div className="grc-in">
            <SectionHead
              kicker="Inside the scan"
              id="grc-geo-h"
              title="What a Google Maps Rank Checker Shows You"
              center
            >
              <p className="grc-copy">
                Instead of one search, the checker lays a 7 × 7 grid over your
                service area and runs your keyword from every point, the way a
                customer standing there would. Each dot is your position from
                that spot.
              </p>
            </SectionHead>

            <figure className="grc-geo" data-anim>
              <MapArt />
              <div className="grc-geo__stage" aria-hidden="true">
                <span className="grc-geo__pulse" />
                <div className="grc-geo__grid">
                  {GRID.map((rank, i) =>
                    i === PIN ? (
                      <span key={i} className="grc-youpin grc-geo__you">
                        <FiMapPin />
                      </span>
                    ) : (
                      <span
                        key={i}
                        className={`grc-dot ${band(rank)}`}
                        style={{ "--r": ring(i) } as CSSProperties}
                      >
                        {rankLabel(rank)}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="grc-report">
                <p className="grc-report__kw">
                  <FiSearch aria-hidden="true" /> plumber near me
                  <span>7 × 7 · 10 km</span>
                </p>
                <div className="grc-report__big">
                  <span>Average position</span>
                  <strong>{gridStats.average}</strong>
                </div>
                <ul className="grc-report__bars">
                  <li>
                    <span>In the 3-Pack</span>
                    <b>
                      {gridStats.top3}/{gridStats.total}
                    </b>
                    <i
                      className="is-top"
                      style={
                        {
                          "--w": gridStats.top3 / gridStats.total,
                        } as CSSProperties
                      }
                    />
                  </li>
                  <li>
                    <span>Found in the top 20</span>
                    <b>
                      {gridStats.found}/{gridStats.total}
                    </b>
                    <i
                      className="is-mid"
                      style={
                        {
                          "--w": gridStats.found / gridStats.total,
                        } as CSSProperties
                      }
                    />
                  </li>
                  <li>
                    <span>At your address</span>
                    <b>#1</b>
                    <i
                      className="is-top"
                      style={{ "--w": 1 } as CSSProperties}
                    />
                  </li>
                </ul>
                <p className="grc-report__beat">
                  <span>Beats you most often</span>
                  Rapid Rooter Plumbing
                </p>
              </div>
              <figcaption className="grc-legend">
                <span>
                  <i className="is-top" /> 1–3 Map Pack
                </span>
                <span>
                  <i className="is-mid" /> 4–10 first screen
                </span>
                <span>
                  <i className="is-low" /> 11–20 buried
                </span>
                <span>
                  <i className="is-out" /> 20+ not found
                </span>
                <span className="grc-legend__note">Example scan</span>
              </figcaption>
            </figure>

            <ul className="grc-read">
              {readCards.map((card) => (
                <li
                  key={card.title}
                  className={`grc-read__card is-${card.tone}`}
                >
                  <span className="grc-read__icon" aria-hidden="true">
                    <card.icon />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===================================================== KEYWORDS */}
        <section className="grc-sec" aria-labelledby="grc-kw-h">
          <div className="grc-in">
            <SectionHead
              kicker="Choosing keywords"
              id="grc-kw-h"
              title="Which Keywords to Run Through the Checker"
              center
            >
              <p className="grc-copy">
                Check the way customers search now, not the way you’d search for
                yourself. One keyword from each of these four patterns tells you
                more than ten versions of the same one. If you rank for the
                first two but not the third, Google knows what you do but not
                where you do it.
              </p>
            </SectionHead>
            <KeywordScanDemo patterns={keywordPatterns} />
          </div>
        </section>

        {/* ============================================== RANKING FACTORS
            From the supplied design file. */}
        <section className="grc-sec grc-factors" aria-labelledby="grc-fac-h">
          <div className="grc-in">
            <SectionHead
              kicker="Why local rankings move"
              id="grc-fac-h"
              title="Google's local results are not based on one signal."
              center
            >
              <p className="grc-copy">
                Google says local results are mainly based on relevance,
                distance, and prominence. That is why the same business can look
                strong for one search and weaker for another.
              </p>
            </SectionHead>

            <div className="grc-factors__grid">
              {factors.map((factor, i) => (
                <article key={factor.name} className="grc-factor">
                  <div className="grc-factor__label">
                    <span aria-hidden="true" /> Local factor 0{i + 1}
                  </div>
                  <span className="grc-factor__icon" aria-hidden="true">
                    <factor.icon />
                  </span>
                  <h3>{factor.name}</h3>
                  <p>{factor.body}</p>
                </article>
              ))}
            </div>

            <p className="grc-factors__note">
              Ranking factors summary based on Google&apos;s published local
              ranking guidance. No third-party tool can guarantee or sell a
              specific Google Maps position.
            </p>
          </div>
        </section>

        {/* ===================================================== COMPARE */}
        <section className="grc-sec" aria-labelledby="grc-vs-h">
          <div className="grc-in">
            <SectionHead
              kicker="Checker or tracker?"
              id="grc-vs-h"
              title="Google Maps Rank Checker vs. Rank Tracker"
              center
            >
              <p className="grc-copy">
                Both run the same kind of grid scan. A checker gives you one
                answer today; a tracker repeats it on a schedule so you can see
                whether the work is moving you.
              </p>
            </SectionHead>

            <div className="grc-vs" data-anim>
              {/* checker */}
              <article className="grc-vs__card grc-vs__card--checker">
                <header className="grc-vs__top">
                  <span className="grc-vs__icon" aria-hidden="true">
                    <FiCamera />
                  </span>
                  <div>
                    <h3>Rank checker</h3>
                    <p className="grc-vs__q">“Where do I rank right now?”</p>
                  </div>
                  <span className="grc-pill grc-pill--blue">One snapshot</span>
                </header>

                <div
                  className="grc-vs__stage grc-vs__stage--snap"
                  aria-hidden="true"
                >
                  <div className="grc-vs__frame">
                    <DotGrid grid={GRID} size={7} />
                    <span className="grc-vs__flash" />
                    <span className="grc-vs__corner grc-vs__corner--tl" />
                    <span className="grc-vs__corner grc-vs__corner--tr" />
                    <span className="grc-vs__corner grc-vs__corner--bl" />
                    <span className="grc-vs__corner grc-vs__corner--br" />
                  </div>
                  <ul className="grc-vs__specs">
                    <li>
                      <FiSearch /> 1 keyword
                    </li>
                    <li>
                      <FiClock /> 1 moment
                    </li>
                    <li>
                      <FiGrid /> 49 points
                    </li>
                  </ul>
                </div>

                <div className="grc-vs__side">
                  <dl className="grc-vs__result">
                    <div>
                      <dt>Average</dt>
                      <dd>{gridStats.average}</dd>
                    </div>
                    <div>
                      <dt>In 3-Pack</dt>
                      <dd>
                        {gridStats.top3}
                        <small>/49</small>
                      </dd>
                    </div>
                    <div>
                      <dt>Found</dt>
                      <dd>
                        {gridStats.found}
                        <small>/49</small>
                      </dd>
                    </div>
                  </dl>
                  <p className="grc-vs__best">
                    <b>Best for:</b> a first diagnosis before you spend money.
                  </p>
                </div>
              </article>

              {/* tracker */}
              <article className="grc-vs__card grc-vs__card--tracker">
                <header className="grc-vs__top">
                  <span className="grc-vs__icon" aria-hidden="true">
                    <FiTrendingUp />
                  </span>
                  <div>
                    <h3>Rank tracker</h3>
                    <p className="grc-vs__q">“Am I moving, and why?”</p>
                  </div>
                  <span className="grc-pill grc-pill--violet">
                    Ongoing history
                  </span>
                </header>

                <div className="grc-vs__stage" aria-hidden="true">
                  <svg
                    className="grc-vs__chart"
                    viewBox="0 0 340 170"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient id="grc-area" x1="0" x2="0" y1="0" y2="1">
                        <stop
                          offset="0"
                          stopColor="#6e50f7"
                          stopOpacity="0.22"
                        />
                        <stop offset="1" stopColor="#6e50f7" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="grc-line" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0" stopColor="#3157f5" />
                        <stop offset="1" stopColor="#6e50f7" />
                      </linearGradient>
                    </defs>
                    {[1, 5, 10, 15, 20].map((rank) => (
                      <g key={rank} className="grc-vs__axis">
                        <line
                          x1="34"
                          x2="324"
                          y1={chartY(rank)}
                          y2={chartY(rank)}
                        />
                        <text x="6" y={chartY(rank) + 3}>
                          #{rank}
                        </text>
                      </g>
                    ))}
                    {[0, 3, 7, 11].map((i) => (
                      <text
                        key={i}
                        className="grc-vs__week"
                        x={chartX(i)}
                        y="160"
                        textAnchor="middle"
                      >
                        W{i + 1}
                      </text>
                    ))}
                    {trackerEvents.map((event) => (
                      <g key={event.label} className="grc-vs__event">
                        <line
                          x1={chartX(event.week)}
                          x2={chartX(event.week)}
                          y1="14"
                          y2={chartY(20)}
                        />
                        <rect
                          x={chartX(event.week) - 38}
                          y="2"
                          width="76"
                          height="16"
                          rx="8"
                        />
                        <text x={chartX(event.week)} y="13" textAnchor="middle">
                          {event.label}
                        </text>
                      </g>
                    ))}
                    <path className="grc-vs__area" d={trackerArea} />
                    <path
                      className="grc-vs__line"
                      d={trackerPath}
                      pathLength={1}
                    />
                    {trackerWeeks.map((rank, i) => (
                      <circle
                        key={i}
                        cx={chartX(i)}
                        cy={chartY(rank)}
                        r="3.4"
                        style={{ "--i": i } as CSSProperties}
                      />
                    ))}
                  </svg>

                  <div className="grc-vs__compare">
                    <span>
                      <DotGrid grid={WEEK_1} />
                      <em>Week 1</em>
                    </span>
                    <FiArrowRight className="grc-vs__arrow" />
                    <span>
                      <DotGrid grid={WEEK_12} />
                      <em>Week 12</em>
                    </span>
                  </div>
                </div>

                <div className="grc-vs__side">
                  <dl className="grc-vs__result">
                    <div>
                      <dt>Week 1</dt>
                      <dd>{trackerWeeks[0]}</dd>
                    </div>
                    <div>
                      <dt>Week 12</dt>
                      <dd>{trackerWeeks[11]}</dd>
                    </div>
                    <div>
                      <dt>Change</dt>
                      <dd className="is-up">
                        ▲ {(trackerWeeks[0] - trackerWeeks[11]).toFixed(1)}
                      </dd>
                    </div>
                  </dl>
                  <p className="grc-vs__best">
                    <b>Best for:</b> proving the work is paying off.
                    Illustration.
                  </p>
                </div>
              </article>
            </div>

            <div className="grc-table-wrap">
              <table className="grc-table">
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="grc-sr">Question</span>
                    </th>
                    <th scope="col" className="is-checker">
                      <span>
                        <FiCamera aria-hidden="true" /> Rank checker
                      </span>
                    </th>
                    <th scope="col" className="is-tracker">
                      <span>
                        <FiTrendingUp aria-hidden="true" /> Rank tracker
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td className="is-checker">{row.checker}</td>
                      <td className="is-tracker">{row.tracker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================================================== PATTERNS */}
        <section className="grc-sec grc-sec--soft" aria-labelledby="grc-pat-h">
          <div className="grc-in">
            <SectionHead
              kicker="Reading your result"
              id="grc-pat-h"
              title="Three Grid Patterns, and What Fixes Each One"
              center
            >
              <p className="grc-copy">
                For the reasons behind Map Pack positions see our guide to{" "}
                <Link href="/local-seo-google-business-optimization">
                  Google Business Profile optimization
                </Link>
                . Below is the short version, matched to what your scan shows.
              </p>
            </SectionHead>

            <ul className="grc-patterns" data-anim>
              {patterns.map((item) => (
                <li key={item.signal} className="grc-pcard">
                  <div className="grc-pcard__art" aria-hidden="true">
                    {item.art === "split" ? (
                      <>
                        <span className="grc-pcard__kw">
                          <em className="is-ok">
                            <FiCheck /> repair
                          </em>
                          <DotGrid grid={item.grids[0]} />
                        </span>
                        <span className="grc-pcard__kw">
                          <em className="is-bad">
                            <FiX /> drains
                          </em>
                          <DotGrid grid={item.grids[1]} />
                        </span>
                      </>
                    ) : (
                      <span className="grc-pcard__one">
                        <DotGrid grid={item.grids[0]} />
                        {item.art === "ring" ? (
                          <span className="grc-pcard__ring" />
                        ) : null}
                      </span>
                    )}
                    <span className={`grc-pcard__note grc-tag--${item.tone}`}>
                      {item.art === "missing"
                        ? "0 of 25 found"
                        : item.art === "ring"
                          ? "Green stops here"
                          : "Same area, two keywords"}
                    </span>
                  </div>

                  <div className="grc-pcard__body">
                    <span className={`grc-tag grc-tag--${item.tone}`}>
                      {item.tag}
                    </span>
                    <h3>{item.signal}</h3>
                    <p>{item.reading}</p>
                    <div className="grc-pcard__links">
                      {item.links.map((link) => (
                        <Link key={link.href} href={link.href}>
                          {link.label} <FiArrowRight aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ======================================================= TEAM */}
        <section className="grc-sec" aria-labelledby="grc-who-h">
          <div className="grc-in">
            <div className="grc-team">
              <div className="grc-team__copy">
                <p className="grc-kicker">Who’s behind the checker</p>
                <h2 id="grc-who-h" className="grc-h2">
                  Built by a Local SEO Team That Reads These Grids Every Week
                </h2>
                <p className="grc-copy">
                  Zonic Media is a US marketing agency based in Dover, Delaware.
                  Geo-grid scans are part of how we diagnose{" "}
                  <Link href="/services/local-seo-for-small-business">
                    local SEO for small business
                  </Link>{" "}
                  clients and how we report progress, which is why we put the
                  same scan on this page for free. Trades can see how that work
                  runs on our{" "}
                  <Link href="/services/local-seo-for-home-services">
                    local SEO for home services
                  </Link>{" "}
                  page.
                </p>
                <ul className="grc-team__proof">
                  <li>
                    <span className="grc-icon" aria-hidden="true">
                      <FiStar />
                    </span>
                    <div>
                      <strong>5.0 on Clutch</strong>
                      <span>From 21 verified client reviews</span>
                    </div>
                  </li>
                  <li>
                    <span className="grc-icon" aria-hidden="true">
                      <FiMapPin />
                    </span>
                    <div>
                      <strong>Dover, Delaware</strong>
                      <span>US-based team, clients nationwide</span>
                    </div>
                  </li>
                  <li>
                    <span className="grc-icon" aria-hidden="true">
                      <FiGrid />
                    </span>
                    <div>
                      <strong>Grid-first reporting</strong>
                      <span>
                        Rankings shown street by street, not one number
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <article
                className="grc-profile"
                data-anim
                aria-label="Zonic Media business details"
              >
                <div className="grc-profile__cover" aria-hidden="true">
                  <MapArt />
                  <span className="grc-profile__rings" />
                  <span className="grc-youpin">
                    <FiMapPin />
                  </span>
                </div>
                <div className="grc-profile__body">
                  <p className="grc-profile__name">Zonic Media</p>
                  <p className="grc-profile__rating">
                    <b>5.0</b>
                    <span className="grc-stars" aria-hidden="true">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <FiStar key={s} style={{ "--s": s } as CSSProperties} />
                      ))}
                    </span>
                    21 reviews on Clutch
                  </p>
                  <p className="grc-profile__cat">
                    Marketing agency · Dover, Delaware
                  </p>
                  <div className="grc-profile__actions">
                    <a href={SITE_CONTACT.phoneHref}>
                      <FiPhone aria-hidden="true" />
                      Call
                    </a>
                    <Link href="/contact-us">
                      <FiGlobe aria-hidden="true" />
                      Contact
                    </Link>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiNavigation aria-hidden="true" />
                      Directions
                    </a>
                  </div>
                  <ul className="grc-profile__facts">
                    <li>
                      <FiMapPin aria-hidden="true" /> {SITE_CONTACT.address}
                    </li>
                    <li>
                      <FiPhone aria-hidden="true" /> {SITE_CONTACT.phoneDisplay}
                    </li>
                  </ul>
                  <div className="grc-profile__clutch">
                    <ClutchWidget />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ========================================================== FAQ */}
        <section className="grc-sec grc-sec--soft" aria-labelledby="grc-faq-h">
          <div className="grc-in grc-faq-layout">
            <div className="grc-faq-layout__head">
              <p className="grc-kicker">FAQ</p>
              <h2 id="grc-faq-h" className="grc-h2">
                Google Maps Rank Checker Questions
              </h2>
              <p className="grc-copy">
                Something else? Call us on{" "}
                <a href={SITE_CONTACT.phoneHref}>{SITE_CONTACT.phoneDisplay}</a>
                .
              </p>
            </div>
            <div className="grc-faq">
              {faqs.map((item, i) => (
                <details key={item.q} open={i === 0}>
                  <summary>
                    <h3>{item.q}</h3>
                    <span className="grc-faq__icon" aria-hidden="true" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================== CTA
            Full-width dark band. The component wipes the goal grid over
            today's example scan. */}
        <section className="grc-final" aria-labelledby="grc-final-h">
          <div className="grc-in grc-final__grid">
            <div className="grc-final__copy">
              <p className="grc-kicker">Next step</p>
              <h2 id="grc-final-h" className="grc-h2">
                Found Where Your Green Stops? We Can Move It.
              </h2>
              <p className="grc-copy">
                Send us your scan and we’ll tell you, on a free call, which of
                the patterns you’re in and which levers we’d pull first, in
                order.
              </p>
              <ul className="grc-final__list">
                <li>
                  <FiCheck aria-hidden="true" /> A walk-through of your scan,
                  point by point
                </li>
                <li>
                  <FiCheck aria-hidden="true" /> Which of the three patterns
                  you’re in, and why
                </li>
                <li>
                  <FiCheck aria-hidden="true" /> The first changes we’d make, in
                  order
                </li>
                <li>
                  <FiCheck aria-hidden="true" /> No contract and no obligation
                </li>
              </ul>
              <ol className="grc-final__steps">
                <li>
                  <b>1</b>
                  <span>Run the free scan above</span>
                </li>
                <li>
                  <b>2</b>
                  <span>Book a free call with us</span>
                </li>
                <li>
                  <b>3</b>
                  <span>Get your first steps, in order</span>
                </li>
              </ol>
              <div className="grc-final__actions">
                <Link href={SITE_CONTACT.bookCallHref} className="grc-btn">
                  Book a free call <FiArrowRight aria-hidden="true" />
                </Link>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="grc-btn grc-btn--ghost"
                >
                  <FiPhone aria-hidden="true" /> {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              <p className="grc-final__trust">
                <span className="grc-final__stars" aria-hidden="true">
                  ★★★★★
                </span>
                5.0 on Clutch from 21 reviews · Based in Dover, Delaware
              </p>
            </div>

            <figure className="grc-wipe" data-anim aria-hidden="true">
              <div className="grc-wipe__labels">
                <span>Today</span>
                <span>Example goal</span>
              </div>
              <div className="grc-wipe__stage">
                <DotGrid grid={GRID} size={7} className="grc-wipe__today" />
                <span className="grc-wipe__goal">
                  <DotGrid grid={GOAL} size={7} />
                </span>
                <span className="grc-wipe__bar" />
              </div>
              <div className="grc-wipe__stats">
                <div>
                  <span>Average position</span>
                  <b>
                    {gridStats.average} <FiArrowRight /> {goalStats.average}
                  </b>
                </div>
                <div>
                  <span>In the 3-Pack</span>
                  <b>
                    {gridStats.top3} <FiArrowRight /> {goalStats.top3}
                    <small>/49</small>
                  </b>
                </div>
              </div>
              <ul className="grc-wipe__levers">
                {levers.map((lever) => (
                  <li key={lever}>
                    <FiCheck /> {lever}
                  </li>
                ))}
              </ul>
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
