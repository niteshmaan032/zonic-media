/*
 * REDESIGN DRAFT (23 Oct 2026) of /services/philadelphia/digital-marketing, in the Dallas–Fort Worth layout
 * (src/components/rd/delaware/DelawareLanding.tsx, the same template as
 * the Delaware drafts). Same schema and form type as the live page, which
 * stays untouched; this route is noindex. This page's own UI:
 * phlMarketingUi.tsx.
 *
 * Copy re-optimized 24 Oct 2026 (docs/content-optimization-brief.md): fresh
 * wording, no unverified stats, no budget estimates. Semrush had no organic
 * rankings for the live URL (Oct 2026).
 * Volumes (Semrush US, Oct 2026): digital marketing agency philadelphia
 * 1,000 · digital marketing philadelphia 590 · philadelphia digital
 * marketing agency 480 · marketing agency philadelphia 480 · social media
 * marketing philadelphia 390 (KD 11) · marketing agencies in philadelphia
 * 390 · digital marketing company philadelphia 320 · marketing firms
 * philadelphia 260 · digital marketing services philadelphia 260 · internet
 * marketing philadelphia 170 · online marketing philadelphia 110.
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
import {
  FiBarChart2,
  FiLayers,
  FiLayout,
  FiMapPin,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import {
  SiInstagram,
  SiLinkedin,
  SiMailchimp,
  SiPinterest,
  SiThreads,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";

const PAGE_PATH = "/services/philadelphia/digital-marketing";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency Philadelphia | SEO, Ads & Social",
  },
  description:
    "Philadelphia digital marketing agency for local businesses: Google Maps, SEO, Google Ads, social media and websites run as one plan, priced flat. Free audit.",
  keywords: [
    "digital marketing agency philadelphia",
    "philadelphia digital marketing agency",
    "digital marketing philadelphia",
    "digital marketing company philadelphia",
    "marketing agency philadelphia",
    "marketing agencies in philadelphia",
    "marketing firms philadelphia",
    "digital marketing services philadelphia",
    "social media marketing philadelphia",
    "internet marketing philadelphia",
    "online marketing philadelphia",
    "small business marketing philadelphia",
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
    title: "Philadelphia Digital Marketing Agency | Zonic Media",
    description:
      "One in-house team for Philadelphia businesses: Google Maps, local SEO, Google Ads, social media and websites, reported in calls and booked jobs.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Philadelphia Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Agency in Philadelphia",
  serviceType: "Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Full-service digital marketing for Philadelphia businesses — local SEO and Google Business Profile optimization, Google Ads and paid search, social media, email, content and AI search visibility, and conversion-focused web design, all measured against calls and booked revenue.",
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
    name: "Philadelphia Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO & Google Business Profile Optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads & Paid Search Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Media Marketing" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content & AI Search Visibility",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Email & Lifecycle Marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conversion-Focused Web Design",
        },
      },
    ],
  },
};

const PhilaDigitalFaqs = [
  {
    question:
      "What services does a Philadelphia digital marketing agency offer?",
    answer:
      "A full-service agency covers every way customers find and choose you: Google Maps and local SEO, Google Ads, social media, your website and reviews. At Zonic Media one in-house team runs those together, so the channels share data and every call or form is traced back to the source that produced it.",
  },
  {
    question: "What do your Philadelphia marketing plans cost?",
    answer:
      "Our plans cost $297, $750 or $1,500 monthly at a flat rate, with no long-term contract. The right one depends on how many channels and locations you need, which the free audit makes clear. If you run ads, that spend is billed by Google, with 0% markup from us.",
  },
  {
    question:
      "Where should a small Philadelphia business start: SEO, ads or social?",
    answer:
      "Start where your customers already look. If you need calls this month, Google Ads and your Maps profile come first, because they reach people ready to hire. If work is steady and you want cheaper leads over time, lead with local SEO and reviews. Social keeps you remembered between purchases.",
  },
  {
    question: "Do you work with businesses outside Philadelphia city limits?",
    answer:
      "Yes. Much of our work is in the suburbs: Bucks, Chester, Delaware and Montgomery counties in Pennsylvania, plus Cherry Hill and Camden County in South Jersey. When you serve both city and suburbs, we set up pages and profile service areas so your locations never compete with each other.",
  },
  {
    question: "Do you offer social media marketing in Philadelphia?",
    answer:
      "Yes. We plan and post content for Instagram, Facebook, TikTok and LinkedIn, edit short videos from your own footage, answer comments and messages, and run paid social that retargets people who visited your site. Social is reported next to search and ads, so you can see which posts lead to calls.",
  },
  {
    question: "What should I ask a marketing firm before hiring it?",
    answer:
      "Ask who does the work, what the report measures and what you keep if you leave. Good answers are an in-house team, reports built on calls and booked jobs, and you owning your Google Business Profile, website and ad accounts outright. We put all three in writing before any work starts.",
  },
  {
    question:
      "Can you help my business show up in ChatGPT and Google AI answers?",
    answer:
      "Yes, it is part of every plan. AI assistants pull from clear service pages, schema markup, matching business details and review text. We build those so tools like ChatGPT, Gemini and Google AI Overviews can describe and recommend your business when Philadelphians ask for options.",
  },
  {
    question: "How will I know the marketing is working?",
    answer:
      "You get one monthly report showing calls, forms and messages by channel, your Google Maps and search rankings, what you spent on ads and the cost per lead, plus a short note on what we did and what comes next. If a number drops, we tell you first and explain the fix.",
  },
];

const philaDigitalFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PhilaDigitalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ---------------------------------------------------------------- content */

const CHIPS_LABEL = "Growing Philadelphia businesses in";

const hubLeft: HubApp[] = [
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiTiktok, name: "TikTok", tone: "tiktok" },
  { icon: SiYoutube, name: "YouTube", tone: "youtube" },
  { icon: SiPinterest, name: "Pinterest", tone: "pinterest" },
];
const hubRight: HubApp[] = [
  { icon: SiLinkedin, name: "LinkedIn", tone: "linkedin" },
  { icon: SiThreads, name: "Threads", tone: "threads" },
  { icon: SiX, name: "X", tone: "tiktok" },
  { icon: SiMailchimp, name: "Email marketing", tone: "mailchimp" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Philadelphia Digital Marketing Agency",
    h1Highlight: "Turning Searches and Scrolls Into Customers",
    sub: "Zonic Media is a digital marketing agency for Philadelphia businesses, from Center City storefronts to Main Line service companies. One in-house team runs your Google Maps profile, SEO, ads, social media and website, and reports every call and booked job.",
    media: {
      src: "/images/philadelphia/phila-digital/philadelphia-digital-marketing-strategy.webp",
      alt: "Zonic Media strategists planning a Philadelphia digital marketing campaign",
    },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Growth outcomes and verified figures only (owner, 24 Oct 2026).
    stats: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "1,500+",
        label: "Google Business Profiles we have optimized",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Google rating",
      },
      {
        icon: <FiLayers aria-hidden="true" />,
        num: "20+",
        label: "Industries we market for",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "More jobs",
        label: "Booked from Maps, search and social",
      },
    ],
    proof: "",
    cta: "Plan My Philly Marketing",
  },
  about: {
    eyebrow: "Digital marketing, Philadelphia",
    h2Start: "Marketing Built Around How Philly",
    h2Highlight: "Actually Searches.",
    leads: [
      <>
        Philadelphians search by neighborhood: &ldquo;coffee near me&rdquo; in
        Fishtown, &ldquo;dentist Center City&rdquo;, a contractor on the Main
        Line. We plan your marketing around where your customers live and work,
        then put you in front of them on Maps, search and social.
      </>,
      <>
        One team handles local SEO, Google Ads and social together, with a
        single report on the calls and jobs each one brings in. For a deeper
        look at one channel, see our{" "}
        <Link
          href="/services/philadelphia/local-seo"
          className="phl-inline-link"
        >
          Philadelphia SEO company
        </Link>
        ,{" "}
        <Link href="/services/philadelphia/ppc" className="phl-inline-link">
          PPC agency
        </Link>{" "}
        and{" "}
        <Link href="/services/philadelphia/sem" className="phl-inline-link">
          search engine marketing
        </Link>{" "}
        pages.
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/philadelphia/phila-digital/philadelphia-digital-growth-workstation.webp",
      alt: "Digital marketing workstation showing campaign growth for a Philadelphia business",
    },
    collageB: {
      src: "/images/philadelphia/phila-digital/philadelphia-multichannel-dashboard.webp",
      alt: "Multichannel marketing dashboard with search, social and ads data",
    },
    badgeText: "Digital Marketing Philadelphia • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Digital Marketing Services for Philadelphia Businesses",
    lead: "Search, social and your website on one plan, with each Philadelphia lead traced to where it came from.",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Google Maps & Local SEO",
        desc: "Rank in the Map Pack and local results across Philly neighborhoods with a strong profile, local pages and steady reviews.",
        points: [
          "Neighborhood and service pages",
          "Business Profile worked weekly",
          "Rankings checked by ZIP code",
        ],
        href: "/services/philadelphia/local-seo",
        link: "Philadelphia SEO services",
      },
      {
        tone: "gold",
        icon: <FiTarget aria-hidden="true" />,
        title: "Google Ads for Philly Leads",
        desc: "Search ads aimed at the services and areas that pay best, managed weekly, with Google billing you directly.",
        points: [
          "Ads by service and area",
          "Junk searches blocked",
          "Landing pages that convert",
        ],
        href: "/services/philadelphia/ppc",
        link: "PPC management",
      },
      {
        tone: "blue",
        icon: <FiUsers aria-hidden="true" />,
        title: "Social Media That Brings Customers Back",
        desc: "Instagram, Facebook and TikTok content that keeps Philly customers seeing you, plus paid social that retargets site visitors.",
        points: [
          "Weekly posts and reels",
          "Paid social and retargeting",
          "Comments and DMs answered",
        ],
        href: "#de-contact",
        link: "Ask about social media",
      },
      {
        tone: "gold",
        icon: <FiLayers aria-hidden="true" />,
        title: "SEO and Ads on One Plan",
        desc: "Search engine marketing that plans SEO and paid search from one keyword list, so you hold more of page one.",
        points: [
          "Shared keyword plan",
          "Budget sent to what returns",
          "Both channels reported together",
        ],
        href: "/services/philadelphia/sem",
        link: "SEM services",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Websites Built to Convert Philly Visitors",
        desc: "Fast, mobile-first pages with a clear next step, built to turn Philadelphia visitors into calls and quote requests.",
        points: [
          "Mobile-first design",
          "Tap-to-call and short forms",
          "Speed and schema built in",
        ],
        href: "/services/web-design",
        link: "Web design",
      },
      {
        tone: "gold",
        icon: <FiStar aria-hidden="true" />,
        title: "Google Reviews & Reputation",
        desc: "A steady flow of genuine Google reviews and thoughtful replies, so you win the comparison before anyone calls.",
        points: [
          "Review requests by text",
          "Replies written for you",
          "Profile kept active",
        ],
        href: "/local-seo-google-business-optimization",
        link: "Profile optimization",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "One Report for Search, Ads and Social",
    leads: [
      <>
        Most agencies report each channel alone, so nobody can say which one
        booked the job. Our report puts them together: leads by channel, month
        by month, and what each one cost.
      </>,
      <>
        Should your Google listing ever be suspended, our{" "}
        <Link
          href="/services/gbp-reinstatement-service"
          className="phl-inline-link"
        >
          profile reinstatement
        </Link>{" "}
        specialists, who have reinstated 900+ profiles, can get you back on the
        map. The same people run our{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware digital marketing
        </Link>{" "}
        program.
      </>,
    ],
    cta: "See My Channel Mix",
    // Example UI: labels only, no invented results.
    console: {
      title: "Leads by channel",
      tag: "Month by month",
      metrics: [
        { strong: "3", label: "Channels, one report" },
        { strong: "Calls", label: "Counted by source" },
        { strong: "Jobs", label: "Matched to channel" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "Your First 90 Days With Our Philly Team",
    steps: [
      {
        tag: "Week 1",
        title: "Full Marketing Audit",
        desc: "We review your profile, website, ads and social, look at who is winning your customers, and send a plan with a flat price.",
      },
      {
        tag: "Weeks 2–4",
        title: "Choose the Channel Mix",
        desc: "Budget is split across SEO, ads and social based on where your customers search, and tracking goes in before anything launches.",
      },
      {
        tag: "Weeks 5–8",
        title: "Launch in the Right Order",
        desc: "Ads, profile updates, new pages and the first social posts go live in sequence, each one tracked from day one.",
        chips: ["Ads running", "Pages live", "Posts scheduled"],
      },
      {
        tag: "Monthly",
        title: "Measure, Then Rebalance",
        desc: "A monthly scorecard of calls, forms and cost per lead, with budget moved toward the channels booking the most work.",
        chips: ["Scorecard", "Budget review", "Next steps"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Get My Philly Marketing Plan",
  },
  showcase: undefined,
  compare: {
    h2: "Many Vendors vs. One Philly Marketing Team",
    lead: "The same budget, spent two different ways.",
    themTitle: "A Patchwork of Vendors",
    themSub: "Why marketing split across agencies stalls",
    them: [
      "A separate agency per channel",
      "Reports on reach, not jobs",
      "Ad spend marked up in a retainer",
      "Work handed to subcontractors",
      "Long contracts before results",
    ],
    usTitle: "Zonic Media Digital Marketing",
    usSub: "One plan, one team, one report",
    us: [
      "A strategist who knows Philly",
      "Reports tied to calls and jobs",
      "Ad spend paid straight to Google",
      "Work done by our in-house team",
      "Plans billed month to month",
    ],
    scoreTitle: "Sample Six-Month View",
    scoreSub: "Example scores for illustration",
    scoreRows: [
      { label: "Local visibility", before: 27, after: 88 },
      { label: "Lead volume", before: 25, after: 81 },
      { label: "Cost per lead", before: 34, after: 85 },
      { label: "Conversion rate", before: 20, after: 74 },
    ],
  },
  why: {
    h2: "Why Philly Businesses Pick Zonic Media",
    lead: "One accountable team and plain reports, instead of a separate agency for each channel.",
    cards: [
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "All channels, one team",
        desc: "SEO, ads, social and web handled in-house by people who talk daily.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Flat monthly plans",
        desc: "Choose $297, $750 or $1,500 a month, month to month.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Plain-English monthly reports",
        desc: "Calls, forms, cost per lead and next steps, every month.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "See What Philly Customers See When They Search",
      p: "We audit your Google profile, website, ads and social against the businesses winning your customers, then send a 90-day plan. No charge and no strings attached.",
      checks: [
        "Visibility gaps across Philly",
        "Budget leaks by channel",
        "How you compare locally",
        "A 90-day plan by channel",
      ],
      cta: "Get My Marketing Audit",
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
      "Restaurants & Cafés",
      "Retail Shops",
      "Health & Wellness",
      "Home Services",
      "Salons & Spas",
      "Real Estate",
      "Fitness Studios",
      "Nonprofits",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Questions About Marketing in Philadelphia",
    lead: "Services, costs, where to start and how we report.",
    cta: "",
    items: PhilaDigitalFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Philadelphia Marketing Audit",
    lead: "Tell us about your business and we will send a full audit and a flat-price plan.",
    formType: "philadelphia-digital-marketing",
    badge: "Free Audit",
    title: "Get your free Philly marketing audit",
    subtitle:
      "An honest look at where you stand in Philadelphia and the fastest ways to win more customers.",
    submitText: "Send My Free Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your services, the neighborhoods you cover and your main goal",
    defaultServices: ["Local SEO", "Pay Per Click (PPC)"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "phl-marketing",
  aboutTitle: ["Marketing Built", "Around How Philly", "Actually Searches."],
  aboutPhoto: {
    src: "/images/philadelphia/phila-digital/philadelphia-digital-marketing-agency-office.webp",
    alt: "Philadelphia digital marketing agency office with a marketing performance dashboard and the city skyline",
    // 4:3 image in a wide box: keep the title text at the top in view.
    position: "50% 0%",
  },
  aboutCard: {
    kicker: "One team, every channel",
    title: "Philly and the suburbs",
    points: [
      "Google Maps and local SEO",
      "Google Ads and remarketing",
      "Instagram, Facebook and TikTok",
      "Websites and landing pages",
    ],
    foot: "8 The Green, STE B, Dover, DE 19901",
  },
  pillars: ["#a21caf", "#cffafe", "#fce7f3", "#1e1b4b"],
  features: {
    h2: "Where Philadelphia Customers Find You",
    lead: "Social, neighborhood search and tracking that follows every lead to a booked job.",
    items: [
      {
        label: "Social media",
        title: "Posts and Reels That Keep You Top of Mind",
        body: "Most people look a business up on Instagram or Facebook before they call. We plan and publish a steady calendar of posts, reels and offers, then retarget the people who engaged with them.",
        points: [
          {
            t: "A monthly calendar",
            d: "Posts and stories planned ahead.",
          },
          {
            t: "Short-form video",
            d: "Your footage cut for Reels and TikTok.",
          },
          { t: "Retargeting", d: "Ads for people who already engaged." },
          {
            t: "Inbox watched",
            d: "Comments and DMs answered quickly.",
          },
        ],
        href: "#de-contact",
        link: "Ask about social media",
        ui: "social",
      },
      {
        label: "Neighborhoods",
        title: "Marketing Aimed at Your Best Neighborhoods",
        body: "A customer in Fishtown and one in Northeast Philly search differently. We find where your best jobs come from, then point pages, ads and profile updates at those areas first.",
        points: [
          {
            t: "Area pages",
            d: "Written for each neighborhood you serve.",
          },
          {
            t: "Weighted ads",
            d: "More budget on your best ZIP codes.",
          },
          {
            t: "Local reviews",
            d: "Requests that mention the job and area.",
          },
          { t: "Leads by area", d: "See which neighborhoods send work." },
        ],
        href: "/services/local-seo-for-home-services",
        link: "Local SEO for contractors",
        ui: "hoods",
      },
      {
        label: "Tracking",
        title: "Proof of What Turns Into Jobs",
        body: "Every call, form and message is traced to the search, ad or post that started it. You see which channels bring booked jobs, and budget follows them each month.",
        points: [
          { t: "Call tracking", d: "Every call tagged with its source." },
          { t: "Forms and chat", d: "Every inquiry counted." },
          { t: "Booked-job matching", d: "Leads tied to real jobs." },
          { t: "Monthly rebalance", d: "Budget moved to what works." },
        ],
        href: "#de-contact",
        link: "Get a free marketing audit",
        ui: "funnel",
      },
    ],
  },
  platforms: {
    h2: "Social Channels Where Philly Customers Spend Time",
    lead: "Your customers move between Instagram, TikTok, YouTube and LinkedIn all day. We keep your business active and consistent on the apps that suit it, with posts that send people back to book.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Social and video",
    rightLabel: "Professional, news and email",
    centerIcon: <FiUsers aria-hidden="true" />,
    centerTitle: "Your brand",
    centerSub: "one voice everywhere",
  },
  pricing: {
    title: "Digital Marketing Plans for Philadelphia",
    lead: "Plans for Philly businesses, from local visibility to full SEO, ads and social, at one flat monthly price.",
    compareTitle: "Philly Plans Side by Side",
    compareLead: "Every deliverable at a glance.",
    addOnsTitle: "Add-Ons for Philly Businesses",
    addOnsLead:
      "More neighborhoods, pages or campaigns whenever you need them.",
    customTitle: "More than one Philly location?",
    customText:
      "We will build a single plan that covers each of your locations.",
  },
  phone: "social",
  phoneImage: {
    src: "/images/philadelphia/phila-digital/philadelphia-digital-marketing-strategy.webp",
    alt: "",
  },
  darkUi: "channels",
  scoreStyle: "delta",
  noGrow: true,
  reviewsTitle: "Trusted by Philly Business Owners",
  contact: {
    before: "Ready to Grow",
    after: "Across Philadelphia?",
    lead: `Tell us your services and the neighborhoods you serve. We will send a free audit of your search, ads and social, plus a flat-priced plan.`,
  },
  stepLinks: [
    "#de-contact",
    "/services/philadelphia/sem",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(philaDigitalFaqJsonLd),
        }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
