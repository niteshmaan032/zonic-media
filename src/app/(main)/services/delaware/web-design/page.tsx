/*
 * REDESIGN DRAFT (22 Oct 2026) of /services/delaware/web-design, in the Dallas–Fort Worth
 * layout (src/components/rd/delaware/DelawareLanding.tsx). Copy re-optimized
 * on 24 Oct 2026 (docs/content-optimization-brief.md): fresh wording, no text
 * shared with the live page or the sibling drafts, verified numbers only, no
 * price estimates; build time 2–3 weeks (owner, 25 Oct 2026). Noindex; canonical and schema URLs point at the live page so the
 * file can replace it as-is.
 *
 * DELAWARE WEB DESIGN — geo page under the Delaware silo. Aug 2026 SEO plan,
 * Content Gaps tab: captures geo-scoped web design terms.
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
  FiLayout,
  FiRefreshCw,
  FiSearch,
  FiShoppingCart,
  FiSmartphone,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import {
  SiCalendly,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiNextdotjs,
  SiShopify,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

const PAGE_PATH = "/services/delaware/web-design";

export const metadata: Metadata = {
  title: {
    absolute: "Web Design Delaware | Custom Website Design in Dover, DE",
  },
  description:
    "Delaware web design company in Dover: custom, SEO-ready websites for New Castle, Kent and Sussex County businesses, built fast, mobile-first and to convert.",
  keywords: [
    "web design delaware",
    "delaware web design",
    "website design delaware",
    "web design company delaware",
    "custom website design delaware",
    "custom website design new castle county",
    "website development company new castle county",
    "delaware seo and web design agency",
    "web design dover de",
    "web design wilmington de",
    "website developer delaware",
    "web development delaware",
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
    title: "Web Design Delaware | Custom Website Design in Dover, DE",
    description:
      "Custom website design and development for Delaware businesses: fast, SEO-ready sites from a Dover-based agency.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Delaware Web Design", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design in Delaware",
  serviceType: "Web Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom website design and development for Delaware businesses: conversion-focused, SEO-ready and tested against Core Web Vitals, from a Dover-based agency.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: { "@type": "State", name: "Delaware" },
  audience: {
    "@type": "BusinessAudience",
    name: "Businesses across New Castle, Kent and Sussex County, Delaware",
  },
};

/* FAQ (24 Oct 2026): questions owners search before hiring a web designer;
   no market price ranges and no week counts. */
const DelWebFaqs = [
  {
    question: "What does a custom website cost in Delaware?",
    answer:
      "Every build gets one fixed price after a free scoping call, based on the number of pages, features such as booking or online sales, and how much copy you need. The quote holds once agreed, with no hourly billing. Brand-new businesses can also compare our LaunchPad packages, which have published prices.",
  },
  {
    question: "Is SEO included in your web design?",
    answer:
      "Yes. Keyword-mapped pages, clean headings, schema, fast load times and internal links come with every build; that is the reason to hire one Delaware SEO and web design agency for both. Ongoing ranking work such as content, links and reviews is an optional monthly plan on top.",
  },
  {
    question: "Could a redesign cost me my Google rankings?",
    answer:
      "Not if the move is mapped out first. Before anything goes live we list every existing URL, keep or redirect every one, and move over the pages behind your current rankings. Many redesigns skip this step and lose traffic for months; we treat it as part of the build.",
  },
  {
    question: "Do you design websites across all of Delaware?",
    answer:
      "Yes, statewide. We build for businesses in Wilmington, Newark and Middletown, in Dover, Smyrna and Milford, and in Lewes, Rehoboth Beach and Seaford, as well as Delaware firms selling into Maryland and Pennsylvania. Most of the work runs remotely, and you are welcome to meet us at our Dover office.",
  },
  {
    question: "How quickly can my Delaware website go live?",
    answer:
      "A Delaware service-business website usually launches 2 to 3 weeks after kickoff. Page count, features and content readiness set the exact pace, and your quote includes a dated schedule, so you know the launch date before you commit.",
  },
  {
    question: "Who owns the website after launch?",
    answer:
      "You do, completely. Domain, hosting, code, content and analytics are registered to you from the start, and we train your team to update pages themselves, without waiting on us.",
  },
  {
    question: "Can a new website come bundled with a marketing plan?",
    answer:
      "Yes. Service businesses that sign up for a qualifying monthly marketing plan can get a new website with no upfront build fee. We confirm whether you qualify during your free review, along with exactly what the site and the plan include.",
  },
];

const delWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: DelWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/* ---------------------------------------------------------------------------
   CONTENT (24 Oct 2026 re-optimization). Live URL's ranking terms (Semrush
   US resource_organic, 24 Oct): website development company in new castle
   county #11 (140) · wilmington de website design seo company #13 (90) ·
   custom website design new castle county #14 (140) · delaware seo and web
   design agency #16 (140) · custom website development & optimization
   services in delaware #16 (140) · custom website designers in new castle
   county #17 (140) · web design dover #26 (140) · web design delaware #28
   (320) · website developer delaware #28 (110) · web development delaware
   #33 (110) · delaware web design #34 (320). 22 Oct volumes: web design
   delaware 390 (KD 11) · delaware web design 320 · website design delaware
   170. phrase_these was out of API units on 24 Oct.
--------------------------------------------------------------------------- */

const hubLeft: HubApp[] = [
  { icon: SiWordpress, name: "WordPress", tone: "wordpress" },
  { icon: SiShopify, name: "Shopify", tone: "shopify" },
  { icon: SiWoocommerce, name: "WooCommerce", tone: "woocommerce" },
  { icon: SiNextdotjs, name: "Custom builds (Next.js)", tone: "nextjs" },
];
const hubRight: HubApp[] = [
  { icon: SiGoogleanalytics, name: "Google Analytics", tone: "analytics" },
  {
    icon: SiGooglesearchconsole,
    name: "Google Search Console",
    tone: "searchconsole",
  },
  { icon: SiGoogletagmanager, name: "Google Tag Manager", tone: "tagmanager" },
  { icon: SiCalendly, name: "Online booking", tone: "calendly" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Delaware Web Design Company",
    h1Highlight: "Building Custom, SEO-Ready Websites",
    sub: "From our office in Dover, Zonic Media designs and builds custom sites for Delaware companies. Each site is fast on phones, structured for search and built around one goal: turning visitors from Wilmington to Rehoboth Beach into calls and quote requests.",
    media: {
      src: "/images/geo/delaware-web-design/delaware-web-design-studio.jpg",
      alt: "Web designer building a Delaware service business website in a sunlit studio",
    },
    floatA: { strong: "Core Web Vitals", text: "tested before every launch" },
    floatB: { strong: "SEO built in", text: "from the first page" },
    stats: [
      {
        icon: <FiZap aria-hidden="true" />,
        num: "Fast",
        label: "Pages that load quickly on any phone",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Our rating on Google",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "More quotes",
        label: "From pages that ask for the job",
      },
      {
        icon: <FiSearch aria-hidden="true" />,
        num: "SEO",
        label: "Built in from the first page",
      },
    ],
    proof: "",
    cta: "Request a Free Website Review",
  },
  about: {
    eyebrow: "Website design in Delaware",
    h2Start: "Custom Website Design for",
    h2Highlight: "Delaware Businesses.",
    leads: [
      <>
        Visitors decide in seconds whether to stay, and in New Castle County you
        are also up against Philadelphia firms for the same clicks. We plan each
        page around how your customers search and choose, so it answers their
        question and makes calling you easy.
      </>,
      <>
        Because our{" "}
        <Link href="/services/delaware/seo" className="phl-inline-link">
          Delaware SEO
        </Link>{" "}
        and web design teams work as one agency, keyword-mapped pages, clean
        structure and schema ship with every build. After launch,{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware digital marketing
        </Link>{" "}
        keeps the leads coming.
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/geo/delaware-web-design/responsive-web-design-devices.jpg",
      alt: "Designer testing a responsive website on laptop, tablet, and phone",
    },
    collageB: {
      src: "/images/geo/delaware-web-design/website-wireframe-planning.jpg",
      alt: "Website planning session with paper wireframes and a laptop",
    },
    badgeText: "Delaware Web Design • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Website Design and Development in Delaware",
    lead: "Our custom website design services in Delaware cover new sites, redesigns and online stores for local businesses, each quoted as a fixed project with search built in from page one.",
    cards: [
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Custom Websites for Local Businesses",
        desc: "Designed around your services and buyers, from a focused five-page site to a full service-area build.",
        points: [
          "Your brand, not a template",
          "A page per service and town",
          "One clear next step per page",
        ],
        href: "/services/web-design",
        link: "See our web design service",
      },
      {
        tone: "gold",
        icon: <FiRefreshCw aria-hidden="true" />,
        title: "Website Redesigns Without Ranking Loss",
        desc: "Refresh a dated site without losing the search traffic it has earned. Every URL is mapped and redirected before launch.",
        points: [
          "Old URLs mapped and redirected",
          "Ranking content carried over",
          "Faster, clearer layouts",
        ],
        href: "#de-contact",
        link: "Ask for a redesign quote",
      },
      {
        tone: "blue",
        icon: <FiSmartphone aria-hidden="true" />,
        title: "Layouts Designed for Phones",
        desc: "Most local customers meet you on a phone, so we design the small screen first and then scale up to desktop.",
        points: [
          "Big, thumb-friendly buttons",
          "Tap-to-call in the header",
          "Forms that are quick to finish",
        ],
        href: "/services/launchpad",
        link: "Starting out? See LaunchPad",
      },
      {
        tone: "gold",
        icon: <FiZap aria-hidden="true" />,
        title: "Fast Load Times and Core Web Vitals",
        desc: "Quick pages rank higher and convert more, so every build is tuned for speed and tested against Core Web Vitals.",
        points: [
          "Compressed images, lean code",
          "Mobile PageSpeed tested",
          "Hosting tuned for speed",
        ],
        href: "#de-contact",
        link: "Request a speed check",
      },
      {
        tone: "blue",
        icon: <FiShoppingCart aria-hidden="true" />,
        title: "Online Booking and Stores",
        desc: "Booking, quote requests, client portals and Shopify or WooCommerce stores, built around the way you sell.",
        points: [
          "Booking and quote forms",
          "Shopify and WooCommerce",
          "Secure checkout setup",
        ],
        href: "#de-contact",
        link: "Talk about your store",
      },
      {
        tone: "gold",
        icon: <FiSearch aria-hidden="true" />,
        title: "SEO Built Into Every Page",
        desc: "Keyword-mapped URLs, headings, schema and internal linking in place at launch, ready for a local SEO plan.",
        points: [
          "Keyword-mapped structure",
          "Schema and FAQ markup",
          "Ready for monthly SEO",
        ],
        href: "/services/delaware/seo",
        link: "Delaware SEO services",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Your Website and SEO, Planned Together",
    leads: [
      <>
        Delaware&apos;s best-ranking sites treat design and search as one job.
        Yours launches with the search groundwork in place, and an optional
        monthly SEO plan builds on it, from{" "}
        <Link
          href="/services/wilmington/digital-marketing"
          className="phl-inline-link"
        >
          Wilmington
        </Link>{" "}
        to the Sussex shore.
      </>,
      <>
        Unsure whether your current site is the problem? The free review scores
        its speed, structure and lost-lead points and shows what a rebuild would
        fix.
      </>,
    ],
    cta: "Review My Current Site",
    console: {
      title: "Sample launch report",
      tag: "Sample site",
      metrics: [
        { strong: "Passed", label: "Core Web Vitals" },
        { strong: "Mapped", label: "Keywords per page" },
        { strong: "Live", label: "Call and form tracking" },
      ],
      barsLabel: "Build quality signals",
      bars: [
        { label: "Core Web Vitals", val: 96, tone: "blue" },
        { label: "Mobile usability", val: 98, tone: "gold" },
        { label: "SEO structure", val: 94, tone: "blue" },
        { label: "Accessibility", val: 92, tone: "gold" },
      ],
      pills: [
        { icon: "pin", text: "Designed in Dover" },
        { icon: "star", text: "5.0 Google rating" },
        { icon: "pin", text: "All three counties" },
      ],
    },
  },
  process: {
    eyebrow: "",
    h2: "Your Website Build, Start to Launch",
    // Stage names instead of week counts (build time is unresolved sitewide).
    steps: [
      {
        tag: "Kickoff",
        title: "Free Site Review and Quote",
        desc: "We test your current site's speed, structure and conversion gaps, then send a fixed quote and a launch date.",
      },
      {
        tag: "Planning",
        title: "Sitemap, Wireframes and Page Copy",
        desc: "Each page is planned around what Delaware customers search, with wireframes and copy you sign off before design begins.",
      },
      {
        tag: "Build",
        title: "Design, Development and Testing",
        desc: "We design and build mobile-first, tune every page for speed and test on phones, tablets and desktops.",
        chips: ["Lean code", "Schema added", "Accessible colors"],
      },
      {
        tag: "Launch",
        title: "Go Live, Redirect and Hand Over",
        desc: "Old URLs redirected, analytics connected and your team trained to edit, so the new site holds its rankings and keeps growing.",
        chips: ["Redirect map", "Analytics on", "Editor training"],
      },
    ],
    visualTitle: "Example launch scores",
    visualBars: [
      { label: "PageSpeed (mobile)", val: 95 },
      { label: "Core Web Vitals", val: 96 },
      { label: "SEO readiness", val: 94 },
    ],
    ctaPrimary: "Request a Free Website Review",
  },
  // Kept for the type; the white band shows the feature rows instead.
  results: { eyebrow: "", h2: "", cards: [] },
  showcase: {
    image: {
      src: "/images/geo/delaware-web-design/delaware-website-portfolio-team.jpg",
      alt: "Web design team reviewing local business websites and printed page concepts",
    },
    floats: [
      { num: "Fast", label: "Mobile load times" },
      { num: "SEO", label: "Built into every page" },
      { num: "Yours", label: "Domain, code and content" },
    ],
  },
  compare: {
    h2: "Picking a Web Design Company in Delaware",
    lead: "What's different when your designers also know how search works.",
    themTitle: "The Template-First Studio",
    themSub: "Why many new sites never pay off",
    them: [
      "Templates sold as custom work",
      "Looks first, search structure never",
      "Slow pages that cost rankings and ad spend",
      "Launches that break old URLs",
      "A support ticket for every small edit",
    ],
    usTitle: "Websites by Zonic Media",
    usSub: "Designed to rank, convert and belong to you",
    us: [
      "Custom design shaped by how buyers search",
      "Keyword-mapped pages and schema at launch",
      "Core Web Vitals tested before go-live",
      "Every old URL kept or redirected",
      "Training so your team can make edits",
    ],
    scoreTitle: "Sample Rebuild Scorecard",
    scoreSub: "Illustrative scores before and after a rebuild",
    scoreRows: [
      { label: "Mobile PageSpeed", before: 45, after: 94 },
      { label: "Core Web Vitals", before: 35, after: 95 },
      { label: "SEO readiness", before: 40, after: 92 },
      { label: "Form conversion", before: 30, after: 75 },
    ],
  },
  why: {
    h2: "Custom WordPress Website Design, Brief to Launch Day",
    lead: "Design is what people see. What you're paying for is the plan underneath and a site that keeps earning after launch.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "SEO Shapes the Sitemap",
        desc: "Search planning comes first: every URL, heading and page maps to what Delaware buyers type.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "A Fixed Quote, Agreed Up Front",
        desc: "Quoted after a free call. The price holds, and your launch date is set before work begins.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Domain, Code and Content Are Yours",
        desc: "Domain, hosting, code and content live in your accounts, and training is included.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Find Out What a New Website Would Fix",
      p: "Send your current site and get back a clear report on its speed, structure and lost leads, plus a fixed quote for a rebuild. No obligation.",
      checks: [
        "Mobile speed results",
        "SEO and structure gaps",
        "Where leads are lost",
        "A fixed rebuild quote",
      ],
      cta: "Send Me My Site Report",
      audit: {
        title: "Site Health Score",
        tag: "Example",
        score: "95",
        grade: "Excellent",
        gradeDesc: "Sample launch scorecard",
        rows: [
          { label: "Core Web Vitals", flag: "Passed" },
          { label: "Mobile usability", flag: "A+ grade" },
          { label: "SEO structure", flag: "Keyword-mapped" },
        ],
      },
    },
  },
  marquee: [],
  // Kept for the type; the platform hub takes the hub slot. Chips feed the
  // hero card.
  engine: {
    eyebrow: "",
    h2: "",
    lead: null,
    coreStrong: "",
    coreSub: "",
    coreCta: "",
    nodes: [],
    chipsLabel: "Industries we build websites for",
    chips: [
      "Builders & Trades",
      "Medical Practices",
      "Professional Services",
      "Cafés & Restaurants",
      "Boutiques",
      "Auto Services",
      "Wellness Studios",
      "Nonprofits",
    ],
  },
  faqs: {
    eyebrow: "",
    h2: "Web Design Questions From Delaware Owners",
    lead: "Cost, timing, ownership and keeping your rankings.",
    cta: "",
    items: DelWebFaqs,
  },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  form: {
    eyebrow: "",
    h2: "Request a Delaware Website Review",
    lead: "Tell us about your project and we'll review your current site and send a fixed quote.",
    formType: "delaware-web-design",
    badge: "Free Review",
    title: "Your website review",
    subtitle:
      "Share your current site or your idea and we'll tell you what works, what slows you down and what a new build would fix.",
    submitText: "Send My Free Review",
    messageLabel: "What should the new site do?",
    messagePlaceholder:
      "Your business, your current website (if any) and the goals for the new one",
    defaultServices: ["Web Design"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "web",
  pricing: {
    title: "Plans to Grow Your Site After Launch",
    lead: "After launch, these monthly plans keep your new site climbing in search and producing leads.",
    compareTitle: "Post-Launch Plans Compared",
    compareLead: "What each plan adds once your site is live.",
    addOnsTitle: "Website Extras and Add-Ons",
    addOnsLead:
      "Extra pages, migrations and new builds, priced before we start.",
    customTitle: "Want the build and the marketing in one quote?",
    customText:
      "Tell us about your project and we'll price the site and the plan together.",
  },
  aboutTitle: ["Custom Website", "Design for Delaware", "Businesses."],
  aboutCard: {
    kicker: "Designed in Dover, DE",
    title: "What each build includes",
    points: [
      "Custom design, never a resold template",
      "Keyword-mapped pages with schema",
      "Speed tested on real phones",
      "Training so your team can edit",
    ],
    foot: "8 The Green, STE B, Dover, DE 19901",
  },
  // Own pillar colours (owner: a different set on every page).
  pillars: ["#be185d", "#ecfccb", "#ede9fe", "#0c4a6e"],
  features: {
    h2: "Three Things Every Delaware Website Needs",
    lead: "Phone-first design, fast load times and pages that ask for the job: the core of every site we build.",
    items: [
      {
        label: "Design",
        title: "Built for the Small Screen First",
        body: "Most customers look you up on a phone, usually on the move. We lay out each page for small screens first, then scale up, so services, reviews and your number stay one tap away.",
        points: [
          {
            t: "Phone-first layouts",
            d: "Designed small, then scaled to desktop.",
          },
          {
            t: "Sticky call button",
            d: "Your number stays visible as they scroll.",
          },
          { t: "Easy reading", d: "Clear type and spacing on any screen." },
          {
            t: "Device testing",
            d: "Checked on iPhone, Android, tablet and desktop.",
          },
        ],
        href: "/services/web-design",
        link: "Explore web design",
        ui: "devices",
      },
      {
        label: "Speed",
        title: "Speed That Keeps Visitors Around",
        body: "Slow pages lose visitors and rankings. We keep code lean, compress every image and test each page against Core Web Vitals before launch, so the site feels instant on a phone.",
        points: [
          { t: "Lean code", d: "No bloated themes or heavy page builders." },
          { t: "Sized images", d: "Compressed for every screen." },
          { t: "Mobile vitals", d: "Tested on phones before going live." },
          { t: "Quick hosting", d: "Configured for speed and security." },
        ],
        href: "#de-contact",
        link: "Get a free speed test",
        ui: "lighthouse",
      },
      {
        label: "Conversion",
        title: "Every Page Asks for the Next Step",
        body: "A page that never asks for the work wastes its traffic. Each page gets one clear action, a short form and tracking, so you can see which pages produce leads.",
        points: [
          { t: "Clear action", d: "Call, quote or book on every page." },
          { t: "Quick forms", d: "Name, number and the job." },
          { t: "Proof up front", d: "Reviews and badges where people decide." },
          { t: "Leads tracked", d: "Calls and forms counted from day one." },
        ],
        href: "/services/launchpad",
        link: "LaunchPad for new businesses",
        ui: "leadform",
      },
    ],
  },
  platforms: {
    h2: "Built on Platforms You Own, Wired for Tracking",
    lead: "We build on WordPress, Shopify or custom code that belongs to you, then connect analytics, Search Console and booking before launch, so you can see the site working from day one.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Build platforms",
    rightLabel: "Connected at launch",
    centerIcon: <FiLayout aria-hidden="true" />,
    centerTitle: "Your website",
    centerSub: "owned and edited by you",
  },
  phone: "site",
  darkUi: "build",
  scoreStyle: "tiles",
  noGrow: true,
  reviewsTitle: "Kind Words From Clients",
  contact: {
    before: "Let’s Build",
    after: "a Website That Brings Leads",
    lead: "Send your current site or just the idea. We'll reply with a free review, a fixed quote and a realistic launch date.",
  },
  stepLinks: [
    "#de-contact",
    "/services/web-design",
    "/services/launchpad",
    "/services/delaware/seo",
  ],
  phoneImage: {
    src: "/images/geo/delaware-web-design/delaware-web-design-studio.jpg",
    alt: "",
  },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(delWebFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
