/*
 * REDESIGN DRAFT (23 Oct 2026) of /services/philadelphia/sem, in the Dallas–Fort Worth layout
 * (src/components/rd/delaware/DelawareLanding.tsx, the same template as
 * the Delaware drafts). Same schema and form type as the live page, which
 * stays untouched; this route is noindex. This page's own UI: phlSemUi.tsx.
 *
 * Copy re-optimized 24 Oct 2026 (docs/content-optimization-brief.md): fresh
 * wording, no unverified stats, no CPC or budget estimates.
 * Live URL ranks for (Semrush US, Oct 2026): philadelphia search marketing #1 ·
 * sem agency philadelphia #3 · sem agencies philadelphia #3 · sem company
 * philadelphia #5 · local sem agency #15 · top sem companies in philadelphia
 * #20 · search engine marketing company philadelphia #21 · search engine
 * marketing agency philadelphia #26.
 * Volumes: search engine marketing philadelphia 260 · search engine
 * marketing agency philadelphia 260 · sem agency philadelphia 110 ·
 * philadelphia search marketing 90 · sem company philadelphia 50; national:
 * sem agency 3,600 · search engine marketing services 3,600 · what is sem
 * 2,400 · seo and ppc agency 1,300 · seo sem agency 1,000.
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
  FiCompass,
  FiCpu,
  FiGitMerge,
  FiLayers,
  FiLayout,
  FiMapPin,
  FiPercent,
  FiSearch,
  FiShoppingBag,
  FiStar,
  FiTarget,
} from "react-icons/fi";
import {
  SiDuckduckgo,
  SiGoogle,
  SiGoogleads,
  SiGooglemaps,
  SiYoutube,
} from "react-icons/si";

const PAGE_PATH = "/services/philadelphia/sem";

export const metadata: Metadata = {
  title: {
    absolute: "SEM Agency Philadelphia | Search Engine Marketing Company",
  },
  description:
    "Philadelphia search engine marketing agency running SEO and Google Ads from one keyword plan, so you show up in ads, Maps and organic results. Free SEM audit.",
  keywords: [
    "sem agency philadelphia",
    "sem agencies philadelphia",
    "philadelphia search marketing",
    "search engine marketing philadelphia",
    "search engine marketing agency philadelphia",
    "search engine marketing company philadelphia",
    "sem company philadelphia",
    "sem services philadelphia",
    "top sem companies in philadelphia",
    "seo and ppc agency",
    "seo sem agency",
    "sem audit services",
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
    title: "Philadelphia SEM Agency | SEO and Google Ads on One Plan",
    description:
      "Search engine marketing for Philadelphia businesses: paid and organic search planned from one keyword list and reported together, with 0% ad-spend markup.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Philadelphia SEM", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Search Engine Marketing in Philadelphia",
  serviceType: "Search Engine Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Integrated search engine marketing for Philadelphia businesses — paid search and organic SEO planned together, with shared keyword intelligence, budget allocated by return, landing page optimization, remarketing, and cross-channel attribution.",
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
    name: "Small and mid-size businesses in Philadelphia and the Delaware Valley",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Philadelphia SEM Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Integrated Search Strategy",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paid Search Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Organic Search & Content" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page & Conversion Optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Remarketing & Audiences" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Measurement & Cross-Channel Attribution",
        },
      },
    ],
  },
};

const PhilaSemFaqs = [
  {
    question: "What is search engine marketing (SEM)?",
    answer:
      "SEM is the work of winning space on search results pages through paid ads and organic rankings together. Pay per click buys the top spots today; SEO earns the free listings and Map Pack places that keep bringing calls. Run as one plan, the two share keyword data and cost less than two separate projects.",
  },
  {
    question: "Is SEM the same thing as Google Ads?",
    answer:
      "No. Google Ads is one part of SEM. Search engine marketing covers every way you appear on a results page: paid ads, the Map Pack, organic listings and AI answers. We plan all of them from one keyword list, so your ads and your SEO stop competing for the same searches.",
  },
  {
    question: "Should a Philadelphia business run SEO and ads at once?",
    answer:
      "In most cases, yes. Ads bring leads while SEO is still building, and their data shows which searches convert, so SEO aims at proven terms. As rankings land, you can spend less on those terms. Holding an ad and an organic listing on the same search also takes up more of the page.",
  },
  {
    question: "How do you decide which searches get ads and which get SEO?",
    answer:
      "By intent and competition. Urgent, ready-to-buy searches usually get ads first, because those leads are worth paying for today. Research-style searches, and terms where the organic results look winnable, go to SEO. We review the split monthly and move terms between channels as rankings and costs change.",
  },
  {
    question: "How soon does SEM start bringing in leads?",
    answer:
      "The paid side can bring calls soon after Google approves your ads, while the organic side builds over the following months as pages and your profile gain ground. We report both together each month, so you can see paid leads carry you while organic rankings climb.",
  },
  {
    question: "What does a free SEM audit include?",
    answer:
      "We check which of your money keywords show your ads, your organic pages and your Map Pack listing, and where you are missing. We flag ad spend on terms you already rank for, gaps a new page could fill and tracking problems, then send a 90-day plan you can keep.",
  },
  {
    question: "Does SEM help with Google AI Overviews and ChatGPT?",
    answer:
      "Yes. AI answers lean on clear service pages, steady business details and strong reviews, and the SEO side of SEM builds all three. Meanwhile ads keep you visible on searches where an AI summary pushes the organic results down. Together they keep your business in view as search keeps changing.",
  },
  {
    question: "Can you work with my existing ads account and website?",
    answer:
      "Yes, and existing history helps. We audit your current Google Ads account and website first, show what is wasting money before changing anything, and restructure from there. Everything stays in your name and on your billing, so the data remains yours whatever happens next.",
  },
];

const philaSemFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PhilaSemFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ---------------------------------------------------------------- content */

const CHIPS_LABEL = "Running search for Philadelphia businesses in";

const hubLeft: HubApp[] = [
  { icon: SiGoogleads, name: "Google Ads", tone: "googleads" },
  { icon: FaMicrosoft, name: "Microsoft Ads", tone: "bing" },
  { icon: SiYoutube, name: "YouTube ads", tone: "youtube" },
  { icon: FiShoppingBag, name: "Shopping ads", tone: "amber" },
];
const hubRight: HubApp[] = [
  { icon: SiGoogle, name: "Google organic results", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: FiCpu, name: "AI Overviews", tone: "indigo" },
  { icon: SiDuckduckgo, name: "DuckDuckGo", tone: "duckduckgo" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Philadelphia SEM Agency for",
    h1Highlight: "Paid and Organic Search on One Plan",
    sub: "Zonic Media runs search engine marketing for Philadelphia businesses, pairing SEO with Google Ads from a single keyword plan. Ads bring calls now, rankings take over the searches that convert, and your business fills more of the same results page.",
    media: {
      src: "/images/philadelphia/phila-sem/philadelphia-sem-strategist.webp",
      alt: "Philadelphia SEM strategist reviewing paid and organic search data",
    },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Growth outcomes and verified figures only (owner, 24 Oct 2026).
    stats: [
      {
        icon: <FiLayers aria-hidden="true" />,
        num: "Ads + SEO",
        label: "Planned from one keyword list",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Google rating",
      },
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "Top 3",
        label: "Map Pack goal for the searches ads prove",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        num: "One report",
        label: "For paid and organic leads together",
      },
    ],
    proof: "",
    cta: "Audit My Search Coverage",
  },
  about: {
    eyebrow: "Search engine marketing, Philly",
    h2Start: "SEO and Ads Sharing One",
    h2Highlight: "Keyword Plan.",
    leads: [
      <>
        Search engine marketing (SEM) puts your business in both the paid ads
        and the free results for the same searches. When SEO and pay per click
        run apart, they fight over credit. Run together, each one lowers the
        cost of the other.
      </>,
      <>
        Ads reveal within weeks which searches turn into customers; SEO then
        builds pages to rank for them, and ad budget moves on to new terms. Go
        deeper with our{" "}
        <Link
          href="/services/philadelphia/local-seo"
          className="phl-inline-link"
        >
          Philadelphia SEO company
        </Link>{" "}
        or{" "}
        <Link href="/services/philadelphia/ppc" className="phl-inline-link">
          pay per click management
        </Link>
        .
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/philadelphia/phila-sem/philadelphia-search-coverage-planning.webp",
      alt: "Search coverage planning session for a Philadelphia business",
    },
    collageB: {
      src: "/images/philadelphia/phila-sem/philadelphia-paid-organic-dashboard.webp",
      alt: "Dashboard comparing paid and organic search results",
    },
    badgeText: "Search Marketing Philadelphia • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Search Engine Marketing Services in Philadelphia",
    lead: "SEO and paid search planned, run and reported by one Philadelphia search team.",
    cards: [
      {
        tone: "blue",
        icon: <FiCompass aria-hidden="true" />,
        title: "One Search Plan",
        desc: "A single plan for paid and organic search, built from the terms your customers use and the ones proven to convert.",
        points: [
          "Shared keyword list",
          "Each term given a channel",
          "90-day search roadmap",
        ],
        href: "#de-contact",
        link: "Get a search plan",
      },
      {
        tone: "gold",
        icon: <SiGoogleads aria-hidden="true" />,
        title: "Google and Microsoft Ads",
        desc: "Paid campaigns that test new keywords quickly and cover the searches you cannot rank for yet.",
        points: [
          "Search and call campaigns",
          "Weekly search-term checks",
          "Bids set by return",
        ],
        href: "/services/google-ads",
        link: "Google Ads management",
      },
      {
        tone: "blue",
        icon: <FiSearch aria-hidden="true" />,
        title: "SEO for Converting Keywords",
        desc: "Pages and links built for the keywords your ads proved bring leads, so those leads cost less over time.",
        points: [
          "Pages from proven terms",
          "Technical fixes first",
          "Local links and citations",
        ],
        href: "/services/philadelphia/local-seo",
        link: "Philadelphia SEO services",
      },
      {
        tone: "gold",
        icon: <FiLayers aria-hidden="true" />,
        title: "Results-Page Coverage",
        desc: "Ads, the Map Pack and organic listings working together to fill more of page one for your best searches.",
        points: [
          "Ad, Maps and organic slots",
          "Business Profile managed",
          "Page share tracked",
        ],
        href: "#de-contact",
        link: "See your page share",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Pages That Serve Both Channels",
        desc: "Landing pages that load fast for ads, are structured for SEO and are built to turn visits into calls.",
        points: ["One page per offer", "Quick on mobile", "Tested monthly"],
        href: "/services/web-design",
        link: "Web design",
      },
      {
        tone: "gold",
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "One Report for Paid and Organic",
        desc: "Paid and organic leads side by side, with one blended cost per lead and where budget should go next.",
        points: [
          "Leads by channel",
          "Blended cost per lead",
          "Monthly budget call",
        ],
        href: "/services/philadelphia/ppc",
        link: "PPC management",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Paid and Organic Leads, Side by Side",
    leads: [
      <>
        Many businesses get an SEO report from one agency and a PPC report from
        another, both claiming the same customer. We put the two channels in one
        view, with a single blended cost per lead.
      </>,
      <>
        Need social and web as well? See our{" "}
        <Link
          href="/services/philadelphia/digital-marketing"
          className="phl-inline-link"
        >
          digital marketing plans
        </Link>{" "}
        or the{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware program
        </Link>
        . Trades can start with{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="phl-inline-link"
        >
          home-services local SEO
        </Link>
        , and if Google ever suspends your listing, our{" "}
        <Link
          href="/services/gbp-reinstatement-service"
          className="phl-inline-link"
        >
          profile reinstatement team
        </Link>
        , with 900+ profiles restored, can step in.
      </>,
    ],
    cta: "Compare My Paid and Organic",
    // Example UI: labels only, no invented results.
    console: {
      title: "Search coverage",
      tag: "Monthly view",
      metrics: [
        { strong: "Both", label: "Channels on one list" },
        { strong: "1", label: "Blended cost per lead" },
        { strong: "0%", label: "Markup on ads" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "How Our Search Engine Marketing Agency Builds Your Plan",
    steps: [
      {
        tag: "Week 1",
        title: "Paid and Organic Audit",
        desc: "We compare where you show in ads and organic results, find overlap and waste, and send a 90-day search plan.",
      },
      {
        tag: "Weeks 2–3",
        title: "Sort Keywords by Intent",
        desc: "Every keyword goes to ads, SEO or both, based on how ready the searcher is to buy and how crowded the results are.",
      },
      {
        tag: "Weeks 3–8",
        title: "Launch Ads, Build Pages",
        desc: "Ads go live for quick leads while pages and links are built for the terms those ads prove convert.",
        chips: ["Ads running", "Pages published", "Links earned"],
      },
      {
        tag: "Monthly",
        title: "Move Budget to What Returns",
        desc: "A blended report each month, with spend shifted toward organic as rankings take over proven searches.",
        chips: ["Blended report", "Budget shift", "New terms"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start With an SEM Audit",
  },
  showcase: undefined,
  compare: {
    h2: "Split Search Vendors vs. One SEM Team",
    lead: "What changes when one team handles both paid and organic search.",
    themTitle: "Separate SEO and Ads Vendors",
    themSub: "Why split search costs more",
    them: [
      "Two quotes and two reports",
      "Both claiming the same lead",
      "Fees taken as a cut of spend",
      "Keyword research paid for twice",
      "Long contracts up front",
    ],
    usTitle: "Philadelphia SEM by Zonic Media",
    usSub: "One plan and one report",
    us: [
      "One strategy and keyword map",
      "Credit given lead by lead",
      "Google bills ad spend to you",
      "Ad data shapes SEO from month one",
      "Flat plans, cancel any month",
    ],
    scoreTitle: "Sample Coverage Check",
    scoreSub: "Example scores, out of 100",
    scoreRows: [
      { label: "Page-one share", before: 20, after: 92 },
      { label: "Lead cost control", before: 31, after: 86 },
      { label: "Conversion rate", before: 28, after: 80 },
      { label: "Attribution", before: 14, after: 95 },
    ],
  },
  why: {
    h2: "One SEO and SEM Agency in Place of Two Vendors",
    lead: "No more SEO and PPC providers arguing over who earned the same lead.",
    cards: [
      {
        icon: <FiGitMerge aria-hidden="true" />,
        title: "One shared strategy",
        desc: "A single keyword map and monthly plan for ads and SEO.",
      },
      {
        icon: <FiTarget aria-hidden="true" />,
        title: "Lead-level credit",
        desc: "Each lead credited to the search and channel that won it.",
      },
      {
        icon: <FiPercent aria-hidden="true" />,
        title: "Spend at cost",
        desc: "Ad spend goes straight to Google; our plan fee stays flat.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "See How Much of Page One You Own",
      p: "We map your paid and organic coverage on your most valuable searches, find the gaps and the overlap, and send a 90-day search plan. It costs nothing, and the plan is yours.",
      checks: [
        "Paid clicks you could earn free",
        "Overlap between ads and SEO",
        "Organic gaps on key terms",
        "A 90-day SEM plan",
      ],
      cta: "Get My SEM Audit",
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
      "Professional Services",
      "Healthcare",
      "Home Improvement",
      "E-commerce",
      "Legal",
      "Hospitality",
      "Real Estate",
      "Education",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Questions About Search Engine Marketing in Philadelphia",
    lead: "What SEM is, how the work is split and what it costs.",
    cta: "",
    items: PhilaSemFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Philadelphia SEM Audit",
    lead: "Tell us about your business and we will send a paid and organic search audit with a flat-priced plan.",
    formType: "philadelphia-sem",
    badge: "Free Audit",
    title: "Request your free SEM audit",
    subtitle:
      "A plain read on where your search budget goes now and where it would earn more.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your search marketing",
    messagePlaceholder:
      "Your services, any current ad spend, and the searches you want to win",
    defaultServices: ["Local SEO", "Pay Per Click (PPC)"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "phl-sem",
  aboutTitle: ["SEO and Ads", "Sharing One", "Keyword Plan."],
  aboutPhoto: {
    src: "/images/philadelphia/phila-sem/philadelphia-sem-agency-dashboard.webp",
    alt: "Philadelphia SEM agency desk with a paid search performance dashboard and City Hall in view",
    // 4:3 image in a wide box: keep the title text at the top in view.
    position: "50% 0%",
  },
  aboutCard: {
    kicker: "SEM, Philadelphia",
    title: "How one plan works",
    points: [
      "Ads test what converts",
      "SEO ranks the winners",
      "Budget follows the return",
      "One report, both channels",
    ],
    foot: "Google bills your ad spend, never marked up",
  },
  pillars: ["#1d4ed8", "#ffedd5", "#f5f5f4", "#3f3f46"],
  features: {
    h2: "Why SEO and Google Ads Win More Together",
    lead: "More of the results page, sharper keyword choices and budget that follows what returns.",
    items: [
      {
        label: "Page share",
        title: "Show Up Three Times on One Search",
        body: "When your ad, your Map Pack listing and your organic result appear for the same search, customers keep seeing you before they see anyone else. We plan for the whole page, not a single slot.",
        points: [
          { t: "Ad on top", d: "For your highest-value terms." },
          { t: "Map Pack listing", d: "Profile tuned for the local pack." },
          { t: "Organic result", d: "Pages built to rank below." },
          { t: "Share tracked", d: "Your slice of page one, monthly." },
        ],
        href: "/services/philadelphia/local-seo",
        link: "Philadelphia SEO",
        ui: "serpshare",
      },
      {
        label: "Keyword data",
        title: "Paid Data Picks the Pages SEO Builds",
        body: "Ads show quickly which searches bring leads. Those terms go straight into the SEO plan, and once a page ranks on its own, that ad budget is freed up for new searches.",
        points: [
          { t: "Fast testing", d: "Ads prove demand in weeks." },
          { t: "Pages from proof", d: "SEO targets terms that sell." },
          { t: "Budget recycled", d: "Ranked terms need fewer ads." },
          { t: "One list", d: "No research done twice." },
        ],
        href: "/services/google-ads",
        link: "Google Ads management",
        ui: "loop",
      },
      {
        label: "Budget",
        title: "Spend Shifted Toward the Better Return",
        body: "Each month we compare cost per lead across paid and organic and move budget toward whichever is returning more. Early on that tends to be ads; over time, rankings carry more of the load.",
        points: [
          { t: "Monthly review", d: "Both channels compared." },
          { t: "Blended cost", d: "One number to watch." },
          { t: "Billed by Google", d: "Never marked up." },
          { t: "Every shift explained", d: "In plain English." },
        ],
        href: "#de-contact",
        link: "Get a free SEM audit",
        ui: "budget",
      },
    ],
  },
  platforms: {
    h2: "Ads and Organic on Every Search Surface",
    lead: "Customers search Google, Bing, YouTube and Maps, and read AI answers before they choose. We cover each with the right mix of paid and organic placements, all from one keyword plan.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Paid placements",
    rightLabel: "Organic placements",
    centerIcon: <FiLayers aria-hidden="true" />,
    centerTitle: "Your keywords",
    centerSub: "one plan, two channels",
  },
  pricing: {
    title: "Search Engine Marketing Plans in Philadelphia",
    lead: "SEO and paid search management at a flat monthly price, with ad spend billed to you by Google.",
    compareTitle: "Compare SEM Plans",
    compareLead: "What each plan covers across paid and organic.",
    addOnsTitle: "SEM Add-Ons",
    addOnsLead:
      "Extra ad campaigns, landing pages or service areas, added any month.",
    customTitle: "Need SEM for several locations?",
    customText: "We will plan paid and organic search for each one.",
  },
  phone: "semreport",
  darkUi: "blended",
  scoreStyle: "radar",
  noGrow: true,
  reviewsTitle: "What Business Owners Say",
  contact: {
    before: "Let’s Map",
    after: "Your Search Plan",
    lead: `Tell us your services and the searches you want to win. We will send a free paid and organic audit and a flat-priced plan.`,
  },
  stepLinks: [
    "#de-contact",
    "/services/philadelphia/local-seo",
    "/services/philadelphia/ppc",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philaSemFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
