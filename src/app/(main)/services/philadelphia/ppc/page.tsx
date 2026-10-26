/*
 * REDESIGN DRAFT (23 Oct 2026) of /services/philadelphia/ppc, in the Dallas–Fort Worth layout
 * (src/components/rd/delaware/DelawareLanding.tsx, the same template as
 * the Delaware drafts). Same schema and form type as the live page, which
 * stays untouched; this route is noindex. This page's own UI: phlPpcUi.tsx.
 *
 * Copy re-optimized 24 Oct 2026 (docs/content-optimization-brief.md): fresh
 * wording, no unverified stats, no CPC or budget estimates.
 * Live URL ranks for (Semrush US, Oct 2026): ppc management philadelphia #5 ·
 * adwords agency philadelphia #16 · ppc service philadelphia #17 ·
 * philadelphia ppc company #18 · pay per click philadelphia #18 ·
 * ppc management company philadelphia #20 · google ads agency philadelphia #21.
 * Volumes: philadelphia ppc agency 320 · ppc agency philadelphia 260 ·
 * philadelphia ppc 170 · philadelphia pay per click 170 · philadelphia pay
 * per click management 140 · ppc services philadelphia 110 · pay per click
 * philadelphia 110 · ppc management philadelphia 90 · google ads management
 * philadelphia 90.
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
  FiFilter,
  FiKey,
  FiLayout,
  FiPercent,
  FiPhone,
  FiPhoneCall,
  FiRepeat,
  FiSearch,
  FiShield,
  FiSliders,
  FiStar,
  FiZap,
} from "react-icons/fi";
import { SiGoogleads, SiMeta, SiYoutube } from "react-icons/si";

const PAGE_PATH = "/services/philadelphia/ppc";

export const metadata: Metadata = {
  title: {
    absolute: "PPC Management Philadelphia | PPC Agency for Google Ads",
  },
  description:
    "Philadelphia PPC agency for Google Ads, Local Services Ads and pay per click management. Your own account, 0% ad-spend markup, month to month. Free audit.",
  keywords: [
    "philadelphia ppc agency",
    "ppc agency philadelphia",
    "ppc management philadelphia",
    "philadelphia ppc",
    "philadelphia pay per click",
    "philadelphia pay per click management",
    "pay per click philadelphia",
    "ppc services philadelphia",
    "philadelphia ppc company",
    "ppc management company philadelphia",
    "google ads management philadelphia",
    "google ads agency philadelphia",
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
    title: "Philadelphia PPC Agency | Pay Per Click Management | Zonic Media",
    description:
      "Pay per click management for Philadelphia businesses: Google Ads, Local Services Ads and remarketing that turn searches into calls, in an account you own.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Philadelphia PPC", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PPC & Google Ads Management in Philadelphia",
  serviceType: "Pay Per Click Advertising Management",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Google Ads and paid search management for Philadelphia businesses — account structure and rebuilds, keyword and negative keyword management, bid and budget strategy, landing page optimization, remarketing, and full conversion tracking with no markup on ad spend.",
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
    name: "Philadelphia PPC Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Account Audit & Rebuild",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Keyword & Negative Keyword Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Bid & Budget Strategy" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Remarketing Campaigns" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conversion Tracking & Reporting",
        },
      },
    ],
  },
};

const PhilaPpcFaqs = [
  {
    question: "Can my ads show only in the Philadelphia neighborhoods I serve?",
    answer:
      "Yes. We target by ZIP code, radius or neighborhood, exclude the areas you don't cover and give busy areas their own ad groups, so each one gets its own ads and bids. Ad schedules keep your ads on during the hours your team can answer the phone.",
  },
  {
    question: "Will the Google Ads account be in my name?",
    answer:
      "Yes. Campaigns run in an account you own, on your billing, with Zonic Media added as a manager. Your keywords, audiences and conversion history stay with you, so if you ever switch providers, nothing is lost and nothing has to be rebuilt from scratch.",
  },
  {
    question: "How soon can pay per click ads bring calls?",
    answer:
      "Ads can start showing as soon as Google approves them, often within days of launch. The first weeks are a learning stage: we read the search terms, block poor matches and move budget toward the ads that bring calls. After that the work is steady testing, reported every month.",
  },
  {
    question: "Should I use Local Services Ads or Google Search ads?",
    answer:
      "Often both. Local Services Ads sit at the very top with the Google Verified badge, and you pay per lead rather than per click. Search ads give more control over keywords, wording and landing pages. For home services, legal and many trades, we run the two side by side.",
  },
  {
    question: "Why is my ad account spending money without leads?",
    answer:
      "Usually one of four things: loose keywords with no negative list, ad groups that mix unrelated services, clicks sent to a homepage, or tracking that counts page views as conversions. Our free audit checks each of these in your account and shows which fixes to make first.",
  },
  {
    question: "Do you build the landing pages your ads point to?",
    answer:
      "Yes. Every campaign gets a page that matches its ad: the same offer, a phone number at the top, a short form and quick loading on mobile. We test headlines and forms against each other and keep whichever version brings more calls and quote requests.",
  },
  {
    question: "Can you run Microsoft Ads, YouTube and remarketing too?",
    answer:
      "Yes. Once Google Search is steady, Microsoft Ads reaches searchers on Bing and Edge, while YouTube and display remarketing keep you in front of people who visited but did not call. All of it runs from accounts you own and appears in the same monthly report.",
  },
  {
    question: "How do you track which ads bring customers?",
    answer:
      "Each call, form and chat is tagged with the campaign and keyword behind it. We use call tracking numbers, form tracking in Google Ads and, where your booking tool allows, imported booked jobs. Your monthly report shows leads by campaign, what we changed and what we test next.",
  },
];

const philaPpcFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PhilaPpcFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ---------------------------------------------------------------- content */

const CHIPS_LABEL = "Running ads for Philadelphia businesses in";

const hubLeft: HubApp[] = [
  { icon: FiSearch, name: "Search ads", tone: "google" },
  { icon: FiShield, name: "Local Services Ads", tone: "emerald" },
  { icon: FiZap, name: "Performance Max", tone: "amber" },
  { icon: FiPhone, name: "Call ads", tone: "calls" },
];
const hubRight: HubApp[] = [
  { icon: FiRepeat, name: "Remarketing", tone: "indigo" },
  { icon: SiYoutube, name: "YouTube ads", tone: "youtube" },
  { icon: FaMicrosoft, name: "Microsoft Ads", tone: "bing" },
  { icon: SiMeta, name: "Meta ads", tone: "meta" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Philadelphia PPC Agency for",
    h1Highlight: "Pay Per Click Management That Books Calls",
    sub: "Zonic Media handles pay per click management for Philadelphia businesses: Google Ads, Local Services Ads and remarketing aimed at people ready to call. You own the account, Google bills your card directly, and every lead is traced to the ad that found it.",
    media: {
      src: "/images/philadelphia/phila-ppc/philadelphia-ppc-specialist.webp",
      alt: "Philadelphia PPC specialist reviewing a Google Ads campaign",
    },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Growth outcomes and verified figures only (owner, 24 Oct 2026).
    stats: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        num: "More calls",
        label: "From Philly searchers ready to book",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Google rating",
      },
      {
        icon: <FiFilter aria-hidden="true" />,
        num: "Less waste",
        label: "Spend kept on searches that convert",
      },
      {
        icon: <FiPercent aria-hidden="true" />,
        num: "0%",
        label: "Added to the clicks Google bills you",
      },
    ],
    proof: "",
    cta: "Get My Ad Account Audited",
  },
  about: {
    eyebrow: "Philadelphia pay per click",
    h2Start: "Ads That Reach Philly Buyers,",
    h2Highlight: "Not Browsers.",
    leads: [
      <>
        In a busy market like Philadelphia every click costs money, so the job
        is simple: show your ads to people about to hire, and nobody else. As a
        PPC agency Philadelphia businesses can hire month to month, we build
        campaigns by service and neighborhood, then cut weak searches every
        week.
      </>,
      <>
        The account and its data stay yours. When rankings can take over a
        search, our{" "}
        <Link
          href="/services/philadelphia/local-seo"
          className="phl-inline-link"
        >
          Philadelphia SEO team
        </Link>{" "}
        picks it up; for campaigns outside the city, see our nationwide{" "}
        <Link href="/services/google-ads" className="phl-inline-link">
          Google Ads management
        </Link>
        .
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/philadelphia/phila-ppc/philadelphia-business-ppc-results.webp",
      alt: "Philadelphia business owner reviewing paid search results",
    },
    collageB: {
      src: "/images/philadelphia/phila-ppc/philadelphia-ppc-performance-dashboard.webp",
      alt: "Google Ads performance dashboard for a Philadelphia account",
    },
    badgeText: "Pay Per Click Philadelphia • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Pay Per Click Services for Philadelphia Businesses",
    lead: "The campaigns, pages and tracking a Philly ad account needs to turn clicks into booked work.",
    cards: [
      {
        tone: "blue",
        icon: <FiSearch aria-hidden="true" />,
        title: "Google Search Campaigns",
        desc: "Campaigns built around the searches Philadelphia customers type when they are ready to hire, with ads written for each service.",
        points: [
          "Grouped by service and area",
          "Exact and phrase keywords",
          "Ad copy for each group",
        ],
        href: "/services/google-ads",
        link: "Google Ads management",
      },
      {
        tone: "gold",
        icon: <FiShield aria-hidden="true" />,
        title: "Local Services Ads Setup",
        desc: "Earn the Google Verified badge at the very top of local results and pay for leads, not clicks.",
        points: [
          "Badge verification handled",
          "Lead disputes filed for you",
          "Reviews kept fresh",
        ],
        href: "#de-contact",
        link: "Ask about Local Services Ads",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Philly Landing Pages Built for Ads",
        desc: "A quick page for every campaign, matched to its ad and built to turn paid visits into calls and quote requests.",
        points: [
          "One offer per page",
          "Tap-to-call up top",
          "Headlines tested",
        ],
        href: "/services/web-design",
        link: "Landing page design",
      },
      {
        tone: "gold",
        icon: <FiRepeat aria-hidden="true" />,
        title: "Remarketing That Wins Back Philly Visitors",
        desc: "Reach people who looked but did not call, with YouTube and display ads tied to the service they viewed.",
        points: [
          "Audiences by service viewed",
          "Frequency caps set",
          "Offers for return visits",
        ],
        href: "#de-contact",
        link: "Ask about remarketing",
      },
      {
        tone: "blue",
        icon: <FiPhoneCall aria-hidden="true" />,
        title: "Every Call Traced to Its Keyword",
        desc: "Calls, forms and booked jobs traced to the keyword that started them, so bids follow real customers.",
        points: [
          "Tracked phone numbers",
          "Form and chat events",
          "Booked jobs imported",
        ],
        href: "#de-contact",
        link: "Request a tracking check",
      },
      {
        tone: "gold",
        icon: <FiSliders aria-hidden="true" />,
        title: "Ad Account Takeovers",
        desc: "Already advertising? We check every campaign, keyword and setting, then fix the leaks before changing anything else.",
        points: [
          "Waste found and cut",
          "Structure rebuilt",
          "History kept in your account",
        ],
        href: "/services/philadelphia/sem",
        link: "Run ads alongside SEO",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Every Ad Dollar Traced to a Lead",
    leads: [
      <>
        Impressions and clicks do not pay invoices. We connect each call and
        form to the campaign and keyword behind it, so you can see which ads
        earn their spend and which ones to cut.
      </>,
      <>
        Want ads working beside SEO and social? See our{" "}
        <Link
          href="/services/philadelphia/digital-marketing"
          className="phl-inline-link"
        >
          Philadelphia marketing plans
        </Link>
        , the{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware marketing program
        </Link>{" "}
        if you serve both states, or{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="phl-inline-link"
        >
          local SEO for home service companies
        </Link>
        .
      </>,
    ],
    cta: "Trace My Ad Spend",
    // Example UI: labels only, no invented results.
    console: {
      title: "Lead tracking",
      tag: "Your account",
      metrics: [
        { strong: "Calls", label: "Tied to the keyword" },
        { strong: "Forms", label: "Tied to the ad" },
        { strong: "0%", label: "Ad spend markup" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "From Free Audit to Lower-Cost Leads",
    steps: [
      {
        tag: "Week 1",
        title: "Ad Account Review",
        desc: "We check every campaign, keyword and tracking tag, flag wasted spend and send a written 90-day plan.",
      },
      {
        tag: "Week 2",
        title: "Rebuild and Retarget",
        desc: "Keywords regrouped by intent, negatives added, ads rewritten and targeting trimmed to the areas you serve.",
      },
      {
        tag: "Weeks 3–6",
        title: "Go Live and Tune",
        desc: "Campaigns launch with landing pages and tracking in place, then bids shift by device, area and hour.",
        chips: ["Bids tuned", "Search terms read", "Pages tested"],
      },
      {
        tag: "Monthly",
        title: "Bring Cost Per Lead Down",
        desc: "Every month we trim waste, test new ads and pages, and report each lead against your target.",
        chips: ["Lead report", "New ad tests", "Next month's plan"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Book a Free Google Ads Review",
  },
  showcase: undefined,
  compare: {
    h2: "Ad Spend Run Loosely vs. Run With Care",
    lead: "One budget, two very different ways of managing it.",
    themTitle: "The Usual PPC Setup",
    themSub: "Where budgets quietly leak",
    them: [
      "Spend markup hidden in the fee",
      "Account held by the agency",
      "Loose keywords, no negatives",
      "Every click sent to the homepage",
      "Reports on clicks, not calls",
    ],
    usTitle: "Zonic Media PPC Management",
    usSub: "Built around leads, billed in the open",
    us: [
      "Google charges your card directly",
      "Account and history in your name",
      "Search terms read every week",
      "A landing page for each campaign",
      "Reports on calls and cost per lead",
    ],
    scoreTitle: "Sample Ad Account Check",
    scoreSub: "Illustrative scores out of 100",
    scoreRows: [
      { label: "Waste control", before: 26, after: 90 },
      { label: "Ad relevance", before: 33, after: 85 },
      { label: "Landing page fit", before: 22, after: 78 },
      { label: "Tracking coverage", before: 18, after: 96 },
    ],
  },
  why: {
    h2: "Why Philly Advertisers Switch to Our Google Ads Agency",
    lead: "Most accounts we take over were paying for clicks nobody reviewed. Three things change on day one.",
    cards: [
      {
        icon: <FiKey aria-hidden="true" />,
        title: "You keep the account",
        desc: "Campaigns and history sit in your own Google Ads account, even if you leave.",
      },
      {
        icon: <FiPercent aria-hidden="true" />,
        title: "No markup on spend",
        desc: "Google bills you for clicks; our plan fee is a separate, flat line.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Calls over clicks",
        desc: "Each month: calls, forms, cost per lead and what we changed.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Find the Leaks in Your Google Ads Account",
      p: "We review your campaigns, keywords, negatives and tracking, show where budget slips away, and send a 90-day ad plan you can keep whether or not you hire us.",
      checks: [
        "Wasted spend flagged",
        "Account structure scored",
        "Missing negatives listed",
        "A 90-day ad plan to keep",
      ],
      cta: "Audit My Ad Account",
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
      "Law Firms",
      "Home Services",
      "Dental & Medical",
      "Contractors",
      "Auto Repair",
      "Real Estate",
      "Retail",
      "B2B Services",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Philadelphia PPC Management FAQs",
    lead: "Costs, account ownership, timing and tracking, answered plainly.",
    cta: "",
    items: PhilaPpcFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Philadelphia PPC Audit",
    lead: "Share what you spend now and we will audit your account and send a flat management quote.",
    formType: "philadelphia-ppc",
    badge: "Free Audit",
    title: "Book your free Google Ads audit",
    subtitle:
      "Straight answers on what your ad spend buys today and what it could buy with a cleaner account.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your ads",
    messagePlaceholder:
      "Your services, rough monthly ad spend and what you want to improve",
    defaultServices: ["Pay Per Click (PPC)"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "phl-ppc",
  aboutTitle: ["Ads That Reach", "Philly Buyers,", "Not Browsers."],
  aboutPhoto: {
    src: "/images/philadelphia/phila-ppc/philadelphia-ppc-agency-dashboard.webp",
    alt: "Philadelphia PPC agency office with a Google Ads dashboard and the Ben Franklin Bridge behind",
    // 4:3 image in a wide box: keep the title text at the top in view.
    position: "50% 0%",
  },
  aboutCard: {
    kicker: "Paid search, Philly",
    title: "What we manage",
    points: [
      "Google Search and call ads",
      "Local Services Ads",
      "YouTube and display remarketing",
      "Microsoft Ads",
    ],
    foot: "Run by our in-house PPC team",
  },
  pillars: ["#dc2626", "#e0e7ff", "#dcfce7", "#422006"],
  features: {
    h2: "How Our PPC Agency Makes Philadelphia Budgets Go Further",
    lead: "Tight structure, weekly clean-up and landing page tests sit behind every account we manage.",
    items: [
      {
        label: "Structure",
        title: "Campaigns Sorted by Service and Intent",
        body: "Messy campaigns pay for the wrong clicks. We group keywords by service and buying intent, write ads for each group and send every group to a page that matches what was searched.",
        points: [
          { t: "Themed ad groups", d: "One service in each." },
          { t: "Match types", d: "Exact and phrase, on purpose." },
          { t: "Matching headlines", d: "Ads that echo the search." },
          { t: "Area targeting", d: "Only the ZIP codes you serve." },
        ],
        href: "/services/google-ads",
        link: "Google Ads management",
        ui: "tree",
      },
      {
        label: "Waste control",
        title: "Blocking Searches That Never Buy",
        body: "Each week we read the search terms report and block queries that will not become customers, such as job seekers, DIY questions and other cities, so your budget stays on buyers.",
        points: [
          { t: "Weekly term review", d: "Every query checked." },
          { t: "Shared negative lists", d: "Applied across campaigns." },
          { t: "Bid adjustments", d: "By device, area and hour." },
          { t: "Budget pacing", d: "Spend spread across the month." },
        ],
        href: "#de-contact",
        link: "Get a free ad account audit",
        ui: "terms",
      },
      {
        label: "Testing",
        title: "Pages Tested Until They Convert",
        body: "A small change on a landing page can lift leads from the same clicks. We test headlines, forms and calls to action against each other and keep the version that brings more inquiries.",
        points: [
          { t: "Split tests", d: "Two versions, one winner." },
          { t: "Fast loading", d: "Built light for mobile." },
          { t: "Call-first layout", d: "Phone number at the top." },
          { t: "Results tracked", d: "Leads, not just clicks." },
        ],
        href: "/services/web-design",
        link: "Landing page design",
        ui: "abtest",
      },
    ],
  },
  platforms: {
    h2: "Ad Formats That Win Philadelphia Customers",
    lead: "Search ads catch people ready to hire, Local Services Ads take the top slot, and remarketing brings back visitors who left. We pick the formats that suit your goals and run them from one account you own.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Google ad formats",
    rightLabel: "Reach and return visits",
    centerIcon: <SiGoogleads aria-hidden="true" />,
    centerTitle: "Your ad account",
    centerSub: "yours, billed by Google",
  },
  pricing: {
    title: "PPC Management Plans for Philly",
    lead: "Flat monthly management, month to month, with Google billing your ad spend directly.",
    compareTitle: "Compare PPC Plans",
    compareLead: "Campaigns, tracking and reporting by plan.",
    addOnsTitle: "Add Campaigns or Landing Pages",
    addOnsLead: "Expand into new services, pages or locations as you grow.",
    customTitle: "Spending heavily on Google Ads?",
    customText:
      "Share your spend and goals, and we will scope management to match.",
  },
  phone: "callad",
  darkUi: "roas",
  scoreStyle: "bullet",
  noGrow: true,
  reviewsTitle: "What Philly Advertisers Tell Us",
  contact: {
    before: "Let’s Cut",
    after: "Your Wasted Ad Spend",
    lead: `Tell us what you spend and what you want from it. We audit your account free and reply with a plan and a flat management quote.`,
  },
  stepLinks: [
    "#de-contact",
    "/services/google-ads",
    "/services/web-design",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philaPpcFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
