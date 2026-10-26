/*
 * NYC WEB DESIGN (new page, 23 Oct 2026) — third page of the NYC silo,
 * built on the Dallas–Fort Worth layout template
 * (src/components/rd/delaware/DelawareLanding.tsx, as the Delaware and
 * Philadelphia drafts) with its own UI (nycWebUi.tsx). Noindex and left out
 * of the sitemap and navbar until the owner approves it.
 *
 * COPY RE-OPTIMIZED 24 Oct 2026 (docs/content-optimization-brief.md): every
 * heading, sentence and FAQ rewritten against the sibling drafts and the
 * live Dallas web design page. Unverified numbers removed: "100+ websites",
 * "95+ PageSpeed", "<2s" and the 4–8 week build time (owner, 25 Oct 2026:
 * builds take 2–3 weeks, stated in the FAQ). The hero uses the verified 20+ industries plus feature
 * outcomes, the console and scorecard are labelled as samples. No NYC
 * client claims; there is no NYC web design case study yet.
 * About photo: the owner's NYC web design studio image (25 Oct 2026).
 *
 * Keywords (Semrush US, 23 Oct 2026; no API units left on 24 Oct): web
 * design new york 1,600 (KD 46) · web design nyc 880 (KD 42) · nyc web
 * design 880 · web design agency nyc 880 (KD 46) · website design nyc 880 ·
 * web design brooklyn 720 (KD 10) · web design company nyc 590 (KD 42) ·
 * brooklyn web design 480 (KD 21) · web development nyc 480 (KD 36) · web
 * development company nyc 480 (KD 31) · ecommerce web design nyc 260 (KD
 * 35) · web design firms nyc 260 (KD 28); national: ada website compliance
 * 2,900.
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
  FiCalendar,
  FiCode,
  FiEye,
  FiKey,
  FiLayout,
  FiMapPin,
  FiPhoneCall,
  FiRefreshCw,
  FiShield,
  FiShoppingBag,
  FiSmartphone,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import {
  SiApplepay,
  SiCalendly,
  SiHubspot,
  SiMailchimp,
  SiPaypal,
  SiSquare,
  SiStripe,
  SiZapier,
} from "react-icons/si";

const PAGE_PATH = "/services/nyc/web-design";

const TITLE = "NYC Web Design Agency | Web Design New York & Brooklyn";
const DESCRIPTION =
  "Web design in NYC for small businesses: fast, accessible websites with booking, payments and local SEO built in, for Manhattan, Brooklyn, Queens and beyond.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "web design nyc",
    "nyc web design",
    "web design new york",
    "web design agency nyc",
    "website design nyc",
    "web design company nyc",
    "web design firms nyc",
    "web design brooklyn",
    "brooklyn web design",
    "web development nyc",
    "web development company nyc",
    "ecommerce web design nyc",
    "small business website design nyc",
    "ada compliant website design",
  ],
  alternates: { canonical: PAGE_PATH },
  // New page: out of the index until the owner approves it.
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: TITLE,
    description:
      "Phone-first, accessible websites with booking and payments for New York small businesses.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "NYC Web Design", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design in New York City",
  serviceType: "Web Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Website design and development for New York City small businesses: phone-first, accessible (WCAG 2.2 AA) sites with online booking, payments and local SEO set up at launch.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "City",
    name: "New York",
    containedInPlace: { "@type": "State", name: "New York" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses across the five boroughs",
  },
};

const NycWebFaqs = [
  {
    question: "How much does a small business website cost in NYC?",
    answer:
      "The price depends on page count, features such as booking or an online store, and how much copy we write. You get a fixed quote after a free review, with no hourly billing, and you own the finished site. Optional monthly plans after launch are $297, $750 or $1,500.",
  },
  {
    question: "How long does a new website take to build?",
    answer:
      "New York small business sites typically take two to three weeks, depending on the number of pages, the features and how quickly content gets approved. You get a dated schedule at kickoff, and because we write the copy with you, projects don’t stall waiting on text.",
  },
  {
    question: "Does my New York business website need to be ADA compliant?",
    answer:
      "It should be. Courts treat WCAG as the benchmark for website accessibility, and New York sees more of these lawsuits than almost any state. We design and test every page to WCAG 2.2 AA, and care plans re-check new content each month.",
  },
  {
    question: "Can my team update the website without a developer?",
    answer:
      "Yes. We set up a simple editor and train your team to change text, photos, hours and menus without breaking the layout. If you’d rather not touch it, routine edits are included in the monthly care plan.",
  },
  {
    question: "Do you build online stores and booking websites?",
    answer:
      "Yes. We build stores with secure checkout and set up appointment booking and payments with tools like Shopify, Stripe, Square and Calendly. Each one is connected to your site and tracked as a conversion, so you can see what sells.",
  },
  {
    question: "Will redesigning my website hurt my Google rankings?",
    answer:
      "Not when the move is planned. We map every old URL to its new page with permanent redirects, keep the titles and content that already rank, and watch Search Console closely for weeks after launch.",
  },
  {
    question: "Do you build websites for Brooklyn and Queens businesses?",
    answer:
      "Yes, and for businesses in Manhattan, the Bronx and Staten Island too. Projects run over video calls and shared drafts, so you review every page from your desk or phone, and each site gets neighborhood pages for the areas you serve.",
  },
  {
    question: "Does a new website come with SEO?",
    answer:
      "Every site launches with the SEO groundwork done: fast pages, clean structure, titles, LocalBusiness markup and neighborhood pages. Ongoing ranking work, like Map Pack growth and reviews, is a separate monthly local SEO plan.",
  },
];

const nycWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: NycWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/* ---------------------------------------------------------------- content */

const hubLeft: HubApp[] = [
  { icon: SiStripe, name: "Stripe", tone: "stripe" },
  { icon: SiSquare, name: "Square", tone: "square" },
  { icon: SiPaypal, name: "PayPal", tone: "paypal" },
  { icon: SiApplepay, name: "Apple Pay", tone: "apple" },
];
const hubRight: HubApp[] = [
  { icon: SiCalendly, name: "Calendly", tone: "calendly" },
  { icon: SiHubspot, name: "HubSpot", tone: "hubspot" },
  { icon: SiMailchimp, name: "Mailchimp", tone: "mailchimp" },
  { icon: SiZapier, name: "Zapier", tone: "zapier" },
];

// The template never renders these placeholders (hero media and the
// collage); the about photo is set in `extras` below.
const NO_PHOTO = {
  src: "",
  alt: "Zonic Media designer reviewing a New York client's new website on a laptop and phone",
};

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "NYC Web Design Agency",
    h1Highlight: "Building Sites That Turn Searches Into Bookings",
    sub: "We design and build websites for New York small businesses: quick on a phone, accessible to every visitor, with booking, click-to-call and local SEO set up at launch. You own the domain, the design and the content.",
    media: NO_PHOTO,
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Feature outcomes and the verified 20+ industries; no client results.
    stats: [
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        num: "1 tap",
        label: "From any page to a call or booking",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <FiEye aria-hidden="true" />,
        num: "AA",
        label: "WCAG 2.2 accessibility, tested before launch",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "20+",
        label: "Industries served",
      },
    ],
    proof: "",
    cta: "Review My Website Free",
  },
  about: {
    eyebrow: "Website design in NYC",
    h2Start: "Web Design for New York’s",
    h2Highlight: "Phone-First City.",
    leads: [
      <>
        Most people find a New York business on their phone, often mid-commute
        on a weak signal. We design for that moment: pages that load fast, an
        obvious next step and booking or calling one tap away.
      </>,
      <>
        Every site launches accessible, search-ready and connected to your
        Google profile. Pair it with{" "}
        <Link href="/services/nyc/local-seo" className="phl-inline-link">
          local SEO for NYC businesses
        </Link>
        , or add ads and social through our{" "}
        <Link
          href="/services/nyc/digital-marketing"
          className="phl-inline-link"
        >
          New York digital marketing
        </Link>{" "}
        program.
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Web Design NYC • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Website Design & Development for NYC",
    lead: "Design, build and ongoing care for websites that turn New York searches into bookings and calls.",
    cards: [
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Custom Websites for NYC Businesses",
        desc: "Designed around your services and customers, never a stock template, so each page leads visitors to call or book.",
        points: [
          "Phone-first layouts",
          "Copy written for you",
          "Matched to your brand",
        ],
        href: "#de-contact",
        link: "Start a project",
      },
      {
        tone: "gold",
        icon: <FiCode aria-hidden="true" />,
        title: "Web Development in NYC",
        desc: "A fast, secure build with booking, forms, maps and integrations set up and tested before go-live.",
        points: [
          "WordPress or custom code",
          "Integrations tested end to end",
          "Hosting and SSL handled",
        ],
        href: "#de-contact",
        link: "Ask about development",
      },
      {
        tone: "blue",
        icon: <FiShoppingBag aria-hidden="true" />,
        title: "E-commerce Stores",
        desc: "Online stores with secure checkout, shipping and inventory, built to sell across the city and beyond.",
        points: [
          "Shopify and WooCommerce",
          "Quick, secure checkout",
          "Product pages that rank",
        ],
        href: "#de-contact",
        link: "Plan an online store",
      },
      {
        tone: "gold",
        icon: <FiEye aria-hidden="true" />,
        title: "ADA-Compliant Design",
        desc: "Built and tested to WCAG 2.2 AA so every customer can use your site, including people on screen readers.",
        points: [
          "Contrast and alt text",
          "Keyboard-friendly menus",
          "Checked before launch",
        ],
        href: "#de-contact",
        link: "Request an accessibility check",
      },
      {
        tone: "blue",
        icon: <FiRefreshCw aria-hidden="true" />,
        title: "Redesigns That Keep Rankings",
        desc: "Replace an outdated site without losing the rankings and leads it already brings in.",
        points: [
          "Every old URL redirected",
          "Ranking pages kept",
          "Search Console monitored",
        ],
        href: "/services/web-design",
        link: "Our web design services",
      },
      {
        tone: "gold",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Local SEO Built In",
        desc: "Each site launches with the essentials Google needs to rank you locally, in your borough and the next.",
        points: [
          "Neighborhood service pages",
          "LocalBusiness markup",
          "Linked to your Google profile",
        ],
        href: "/services/nyc/local-seo",
        link: "Local SEO in NYC",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "A Website Measured by Inquiries",
    leads: [
      <>
        A beautiful site that never rings the phone is just an expense. We track
        calls, forms and bookings from launch day, so you see what the new site
        brings in each month.
      </>,
      <>
        Run a trade or home-service company? See{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="phl-inline-link"
        >
          local SEO for home services
        </Link>
        . Lost your Google listing to a suspension? Our{" "}
        <Link
          href="/services/gbp-reinstatement-service"
          className="phl-inline-link"
        >
          Business Profile reinstatement
        </Link>{" "}
        team can step in.
      </>,
    ],
    cta: "Get My Site Reviewed",
    // Sample launch UI, not client data.
    console: {
      title: "After the relaunch",
      tag: "Sample launch",
      metrics: [
        { strong: "AA", label: "WCAG 2.2 tested" },
        { strong: "1 tap", label: "To call or book" },
        { strong: "100%", label: "Owned by you" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "How Your NYC Website Gets Built",
    steps: [
      {
        tag: "Kickoff",
        title: "Discovery Call and Brief",
        desc: "We learn what you sell and who buys it, look at your current site and local competitors, then put the plan in writing.",
      },
      {
        tag: "Planning",
        title: "Page Plan and Copy",
        desc: "Page structure and copy shaped around what customers need to see before they book.",
      },
      {
        tag: "Build",
        title: "Build and Test on Real Phones",
        desc: "Your brand applied, pages built, booking and forms connected, and every screen checked on real devices.",
        chips: ["Design", "Build", "Device tests"],
      },
      {
        tag: "Monthly",
        title: "Go Live, Then Ongoing Care",
        desc: "Launch with redirects and tracking in place, followed by monthly updates, backups and edits.",
        chips: ["Go-live", "Backups", "Edits"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Review My Website Free",
  },
  results: { eyebrow: "", h2: "", cards: [] },
  showcase: undefined,
  compare: {
    h2: "Why a Cheap Template Costs NYC Businesses Bookings",
    lead: "Where template and DIY sites lose customers, and what we build instead.",
    themTitle: "DIY Template Site",
    themSub: "Why it stops winning work",
    them: [
      "Slow on crowded mobile networks",
      "No booking or call tracking",
      "Accessibility never checked",
      "Generic copy that doesn’t rank",
      "Stuck on the builder’s platform",
    ],
    usTitle: "Built by Zonic Media",
    usSub: "Made to convert, yours to keep",
    us: [
      "Lean pages built for phones",
      "Calls, forms and bookings tracked",
      "Tested to WCAG 2.2 AA",
      "Neighborhood pages written to rank",
      "Domain and files in your name",
    ],
    scoreTitle: "Sample Site Health Check",
    scoreSub: "Illustration of what our free review scores",
    scoreRows: [
      { label: "Mobile speed", before: 43, after: 95 },
      { label: "Core Web Vitals", before: 31, after: 96 },
      { label: "SEO readiness", before: 38, after: 94 },
      { label: "Form conversions", before: 35, after: 78 },
    ],
  },
  why: {
    h2: "Web Design Support That Continues After Launch",
    lead: "Design, build, launch and the monthly care that keeps everything working.",
    cards: [
      {
        icon: <FiKey aria-hidden="true" />,
        title: "Everything in your name",
        desc: "Domain, design, content and accounts stay yours.",
      },
      {
        icon: <FiCalendar aria-hidden="true" />,
        title: "A dated schedule",
        desc: "A written timeline before any work starts.",
      },
      {
        icon: <FiShield aria-hidden="true" />,
        title: "Monthly care plan",
        desc: "Updates, backups and small edits handled for you.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "See What Your Current Website Is Missing",
      p: "We test your site’s speed, accessibility, mobile layout and local SEO against nearby competitors and send back a plain-English rebuild plan. No cost, no obligation.",
      checks: [
        "Mobile speed tested",
        "Accessibility issues listed",
        "Conversion gaps found",
        "A fixed-price build plan",
      ],
      cta: "Get My Free Website Review",
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
    chipsLabel: "Websites for New York businesses in",
    chips: [
      "Restaurants & Cafés",
      "Clinics & Dental",
      "Law & Finance",
      "Salons & Spas",
      "Fitness Studios",
      "Real Estate",
      "Home Services",
      "Retail & E-commerce",
    ],
  },
  marquee: [],
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Web Design in NYC: Questions Answered",
    lead: "Pricing, timelines, accessibility and who owns the site.",
    cta: "",
    items: NycWebFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free NYC Website Review",
    lead: "Tell us about your business and your current site, and we’ll send a review with a plan for the new one.",
    formType: "nyc-web-design",
    badge: "Free Review",
    title: "Get Your Free NYC Website Review",
    subtitle:
      "It takes about a minute. We’ll look at your current site and tell you what a rebuild would change.",
    submitText: "Request My Review",
    messageLabel: "Tell us about your website",
    messagePlaceholder:
      "Your business, your current site (if any) and what the new one should do",
    defaultServices: ["Web Design"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "nyc-web",
  aboutTitle: ["Web Design for", "New York’s", "Phone-First City."],
  aboutPhoto: {
    src: "/images/nyc/nyc-web-design-agency-studio.webp",
    alt: "NYC web design agency studio with a new website on a laptop and phone above the Manhattan skyline",
    // 4:3 image in a wide box: keep the title text at the top in view.
    position: "50% 0%",
  },
  aboutCard: {
    kicker: "Every NYC build includes",
    title: "Made for the phone first",
    points: [
      "Booking and secure payments",
      "WCAG 2.2 AA accessibility",
      "Local SEO set up at launch",
      "An editor your team can use",
    ],
    foot: "Domain, design and content stay yours",
  },
  pillars: ["#7c3aed", "#fde68a", "#fae8ff", "#0c4a6e"],
  features: {
    h2: "What Every NYC Website Needs to Win",
    lead: "Access for every visitor, easy updates and speed on a busy network.",
    items: [
      {
        label: "Accessibility",
        title: "Usable by Every Visitor",
        body: "New York sees more website accessibility lawsuits than almost anywhere. We design and test each page to WCAG 2.2 AA, so people using screen readers or keyboards can browse and book like everyone else.",
        points: [
          { t: "Contrast and type", d: "Easy to read for all." },
          { t: "Alt text", d: "Every image described." },
          { t: "Keyboard access", d: "No mouse required." },
          { t: "Monthly checks", d: "New content tested too." },
        ],
        href: "#de-contact",
        link: "Check my current site",
        ui: "a11y",
      },
      {
        label: "Easy updates",
        title: "Edit Hours and Menus in Minutes",
        body: "Holiday hours, a new menu or a price change shouldn’t need a developer. We set up a simple editor, train your team on it and lock the layout, so edits never break the design.",
        points: [
          { t: "Simple editor", d: "Text and photos, fast." },
          { t: "Design guardrails", d: "Layouts stay on brand." },
          { t: "Training call", d: "Your team shown how." },
          { t: "Care plan", d: "Or we edit for you." },
        ],
        href: "#de-contact",
        link: "Ask about care plans",
        ui: "editor",
      },
      {
        label: "Speed",
        title: "Fast Pages on a Weak Midtown Signal",
        body: "Pages need to work on a patchy signal in Midtown or on a station platform. We compress images, defer scripts and preload fonts so pages are usable in seconds, and we check Core Web Vitals before launch.",
        points: [
          { t: "Image compression", d: "Sharp, light files." },
          { t: "Lean code", d: "Only what each page needs." },
          { t: "Core Web Vitals", d: "Checked at launch." },
          { t: "Speed monitoring", d: "Reviewed every month." },
        ],
        href: "/services/web-design",
        link: "How we build websites",
        ui: "waterfall",
      },
    ],
  },
  platforms: {
    h2: "Plugged Into How You Get Booked and Paid",
    lead: "Your site takes bookings and payments, then sends every lead to the tools you already use, from Stripe and Square to Calendly and HubSpot.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Payments",
    rightLabel: "Booking, CRM and email",
    centerIcon: <FiSmartphone aria-hidden="true" />,
    centerTitle: "Your website",
    centerSub: "booking and payments built in",
  },
  pricing: {
    title: "Monthly Plans to Pair With Your NYC Website",
    lead: "Keep a new site bringing in customers with a month-to-month plan for local SEO, ads and updates.",
    compareTitle: "Post-Launch Plans, Compared",
    compareLead: "What each plan adds once your site is live.",
    addOnsTitle: "Add-Ons for Your Website",
    addOnsLead: "Extra pages, landing pages or booking features any time.",
    customTitle: "Planning a larger build?",
    customText: "Tell us what you need and we’ll scope it at a fixed price.",
  },
  phone: "booking",
  darkUi: "relaunch",
  scoreStyle: "needles",
  noGrow: true,
  reviewsTitle: "Feedback From Our Clients",
  contact: {
    before: "Ready for a Website",
    after: "That Books Customers?",
    lead: `Describe your business and the site you have today. We’ll review it for free and outline what a new one should do.`,
  },
  stepLinks: [
    "#de-contact",
    "#de-contact",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nycWebFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
