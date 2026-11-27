/*
 * FLORIDA WEB DESIGN — new live page (18 Nov 2026) in the Florida silo,
 * under the hub /services/florida/digital-marketing. Built on the location
 * template shared with the Delaware, Philadelphia, NYC and Florida pages
 * (src/components/rd/delaware/DelawareLanding.tsx) with this page's own UI
 * (flWebUi.tsx). Brief: docs/florida-pages-brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-keywords-
 * 2026-11.md): web design florida 880 (KD 52) · web design company florida
 * 390 (KD 35) · south florida web design 320 (KD 19) · website design
 * florida 320 (KD 50) · florida web design company 170 (KD 47) · web
 * designer florida 170 (KD 41) · website design company florida 140 (KD 47)
 * · central florida web design 90 (KD 7).
 *
 * Rules: the hub owns "digital marketing agency"; the Florida local SEO and
 * PPC pages own their head terms (linked here with keyword anchors). City
 * names appear in the copy only, never in the title or H1. Pricing is the
 * one-time $950 website card (template, kind "fl-web"). Build time 2–3
 * weeks (sitewide fact). Company-wide verified numbers only; no Florida
 * office is implied (we serve Florida remotely). The about
 * photo is the owner's web design studio image.
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
  FiClipboard,
  FiClock,
  FiCloudLightning,
  FiEye,
  FiKey,
  FiLayout,
  FiMap,
  FiMessageSquare,
  FiNavigation,
  FiPhone,
  FiSmartphone,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { SiGoogle, SiGooglemaps, SiOpenai, SiPerplexity } from "react-icons/si";

const PAGE_PATH = "/services/florida/web-design";
const HUB_PATH = "/services/florida/digital-marketing";

const TITLE = "Florida Web Design Company | Website Design in Florida";

const DESCRIPTION =
  "Florida web design company building phone-first websites with estimate forms, storm-season alerts and region pages. Live in 2–3 weeks, and you own the site.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "florida web design company",
    "web design company florida",
    "web design florida",
    "website design florida",
    "website design company florida",
    "web designer florida",
    "south florida web design",
    "central florida web design",
    "small business website design florida",
    "ada accessible website florida",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/florida-web-design-company.webp",
        width: 1600,
        height: 900,
        alt: "Florida website design layout on a laptop with wireframes and color swatches",
      },
    ],
    title: TITLE,
    description:
      "Phone-first websites for Florida businesses, with storm-season alerts, region pages and estimate forms. One build fee, and the site is yours.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: HUB_PATH },
  { name: "Florida Web Design", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design in Florida",
  serviceType: "Web Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Website design and development for Florida businesses: phone-first sites with estimate and booking forms, storm-season alert bars, region service-area pages and WCAG 2.2 AA accessibility checks, live in two to three weeks.",
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

const FlWebFaqs = [
  {
    question: "What does a new website cost for a Florida business?",
    answer:
      "We charge a single $950 development fee for a Florida small business website. There is no monthly hosting charge and no rental fee, and the domain, design and content belong to you from launch day. Larger builds with many region pages or booking tools are priced up front, once we’ve reviewed what you need.",
  },
  {
    question: "How quickly can my new Florida website go live?",
    answer:
      "Most of our Florida builds launch two to three weeks after the kickoff call. The schedule depends on page count, features such as booking and how fast content is approved, and you get dated milestones at the start so nothing drifts.",
  },
  {
    question: "Do you take on South Florida web design projects?",
    answer:
      "Yes. We build for businesses across South Florida, from Miami and Fort Lauderdale to Boca Raton and West Palm Beach, and we handle Central Florida web design for Orlando, Kissimmee and Lakeland too. Tampa Bay, Southwest Florida, North Florida and the Panhandle get the same treatment, with pages for the areas you serve.",
  },
  {
    question: "Can my website show a storm notice during hurricane season?",
    answer:
      "Yes. Our builds for storm-affected trades include an alert bar you switch on from your phone, plus emergency service pages prepared before June. Post closures, a 24/7 emergency line or recovery updates in minutes, then turn the notice off once life is back to normal.",
  },
  {
    question: "Does my Florida website need to be ADA accessible?",
    answer:
      "It should be. Florida is one of the busiest states for website accessibility lawsuits, and courts generally look to WCAG as the benchmark. We design and check every page against WCAG 2.2 AA, covering contrast, alt text, keyboard use and form labels. For questions about your own legal exposure, speak with an attorney.",
  },
  {
    question: "Do I need a web designer based in Florida?",
    answer:
      "No. What matters is a designer who understands how Floridians search, when the seasons turn and what storms do to demand. Our in-house team works remotely, runs each project over video calls and shared previews, and you approve every page on your own phone before it goes live.",
  },
  {
    question: "Will my new site appear in Google and in AI answers?",
    answer:
      "Each site launches with the groundwork in place: quick pages, clear titles, LocalBusiness and FAQ schema, region pages and a link to your Business Profile. Assistants such as ChatGPT and Google’s AI Overviews favor pages that answer questions plainly, so we write that way. Ongoing ranking work is a separate monthly plan.",
  },
  {
    question: "Will moving to a new website cost me my current rankings?",
    answer:
      "It shouldn’t, as long as the move is planned. We list every old URL, point each one to its new page with a permanent redirect, keep the content that already earns traffic and watch Search Console for several weeks after the switch.",
  },
  {
    question: "Can customers request an estimate or book from their phone?",
    answer:
      "Yes. Forms are built for thumbs: a service picker, a ZIP check for your service area, optional job photos and a preferred callback time. Each request reaches your phone and inbox right away, and calls, texts and forms are tracked so you can see what the site brings in.",
  },
];

const flWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: FlWebFaqs.map((faq) => ({
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
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiPerplexity, name: "Perplexity", tone: "perplexity" },
];
const hubRight: HubApp[] = [
  { icon: FiPhone, name: "Phone calls", tone: "calls" },
  { icon: FiMessageSquare, name: "Text messages", tone: "texts" },
  { icon: FiClipboard, name: "Estimate requests", tone: "forms" },
  { icon: FiNavigation, name: "Directions", tone: "directions" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Florida Web Design Company",
    h1Highlight: "for Phone-First Sites That Book Jobs",
    sub: "We design websites for Florida businesses that load fast on a phone, make asking for an estimate effortless and switch to a storm notice in one tap. Every build is live in two to three weeks, planned around the regions you serve and owned by you.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Build facts and company-wide verified numbers only.
    stats: [
      {
        icon: <FiClock aria-hidden="true" />,
        num: "2–3 wks",
        label: "From kickoff call to your live Florida website",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <FiKey aria-hidden="true" />,
        num: "100%",
        label: "Ownership of your domain, design and content",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "20+",
        label: "Industries we build and market for",
      },
    ],
    proof: "",
    cta: "Claim My Free Florida Site Review",
  },
  about: {
    eyebrow: "Website design in Florida",
    h2Start: "Florida Websites Built for",
    h2Highlight: "Busy Seasons and Storms.",
    leads: [
      <>
        Florida customers find you on a phone: in a truck between jobs, on a
        beach chair or in a kitchen lit by a flashlight after the power drops.
        We design for those moments, with pages that appear before patience runs
        out, a call button within thumb reach and an estimate form that asks
        only what you need.
      </>,
      <>
        As a website design company serving the whole state, we build each site around the regions, services and seasons
        you actually sell into. Pair it with{" "}
        <Link href="/services/florida/local-seo" className="phl-inline-link">
          Florida local SEO
        </Link>{" "}
        to climb the Map Pack, call on our{" "}
        <Link href="/services/florida/ppc" className="phl-inline-link">
          PPC agency in Florida
        </Link>{" "}
        when you need calls this week, or see the full{" "}
        <Link href={HUB_PATH} className="phl-inline-link">
          Florida digital marketing agency
        </Link>{" "}
        program.
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Florida Web Design Company • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Website Design Services for Florida Businesses",
    lead: "From the first wireframe to a search-ready launch, one in-house team handles the design, the build and the Florida details most template sites miss.",
    cards: [
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Custom Websites for Florida Small Businesses",
        desc: "Designed around your trade and your customers instead of a theme thousands of companies share, and every screen points to a single next step.",
        points: [
          "Phone layout designed first",
          "Copy drafted with you",
          "Your colors, logo and photos",
        ],
        href: "#de-contact",
        link: "Start my website",
      },
      {
        tone: "gold",
        icon: <FiCloudLightning aria-hidden="true" />,
        title: "Storm-Season Pages and Site Alerts",
        desc: "An alert bar you control plus emergency service pages prepared before June, so storm traffic lands on the right offer instead of a generic homepage.",
        points: [
          "Alert bar you control",
          "Emergency pages on standby",
          "Closures and hours posted fast",
        ],
        href: "/services/hvac-marketing-agency/florida",
        link: "Storm-season HVAC marketing",
      },
      {
        tone: "blue",
        icon: <FiMap aria-hidden="true" />,
        title: "Service-Area Pages by Florida Region",
        desc: "Useful pages for the regions and towns you cover, from South Florida to the Panhandle, each written to rank where those customers search.",
        points: [
          "A page per region or city",
          "Local FAQs on each page",
          "Areas served in schema",
        ],
        href: "/services/florida/local-seo",
        link: "Florida local SEO",
      },
      {
        tone: "gold",
        icon: <FiEye aria-hidden="true" />,
        title: "Accessible Website Design to WCAG 2.2 AA",
        desc: "Pages designed and checked against WCAG 2.2 AA, so visitors using screen readers or a keyboard can browse, call and request work like anyone else.",
        points: [
          "Contrast checked on every color",
          "Alt text on each image",
          "Forms usable by keyboard",
        ],
        href: "#de-contact",
        link: "Check my site’s accessibility",
      },
      {
        tone: "blue",
        icon: <FiClipboard aria-hidden="true" />,
        title: "Estimate and Booking Forms That Work on Phones",
        desc: "Short forms with photo upload, a ZIP check and a preferred callback time, delivered to your phone and inbox the moment someone hits send.",
        points: [
          "Photo upload for quotes",
          "Service-area ZIP check",
          "Text and email alerts",
        ],
        href: "/services/web-design",
        link: "How we design websites",
      },
      {
        tone: "gold",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "Search- and AI-Ready From Launch Day",
        desc: "Titles, schema, quick pages and answer-first FAQs in place at launch, so Google and assistants like ChatGPT can understand your business and cite it.",
        points: [
          "Titles and descriptions written",
          "FAQ and LocalBusiness schema",
          "Search Console connected",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "A Website That Stays Accurate When Storms Hit",
    leads: [
      <>
        Closed for a storm, short on crews after one or booked solid with
        repairs? Customers trust the site that tells them so. Your alert bar,
        hours and emergency pages are set up so the message changes in minutes
        while the rest of the site stays put. Mirror the update on your{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="phl-inline-link"
        >
          Google Business Profile
        </Link>{" "}
        and customers see one story everywhere.
      </>,
      <>
        Run a trade that storms keep busy? See our programs for{" "}
        <Link
          href="/services/hvac-marketing-agency/florida"
          className="phl-inline-link"
        >
          Florida HVAC companies
        </Link>
        ,{" "}
        <Link
          href="/services/plumbing-marketing-agency/florida"
          className="phl-inline-link"
        >
          Florida plumbing companies
        </Link>{" "}
        and{" "}
        <Link
          href="/services/home-inspector-marketing/florida"
          className="phl-inline-link"
        >
          home inspectors in Florida
        </Link>
        . If Google suspends your Business Profile mid-season, our{" "}
        <Link
          href="/services/gbp-reinstatement-service"
          className="phl-inline-link"
        >
          profile reinstatement service
        </Link>{" "}
        can help get it back.
      </>,
    ],
    cta: "Get My Storm-Ready Site Plan",
    // Sample status UI, not client data.
    console: {
      title: "Site status, June to November",
      tag: "Sample",
      metrics: [
        { strong: "1 tap", label: "To post a storm notice" },
        { strong: "2–3 wks", label: "Kickoff to launch" },
        { strong: "Yours", label: "Domain and files" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "Your Florida Website, From Kickoff to Launch",
    steps: [
      {
        tag: "Days 1–3",
        title: "Collect Photos, Licenses and Services",
        desc: "One kickoff call and a shared folder: your logo, license and insurance details, job photos, the services you sell and the Florida areas you cover.",
      },
      {
        tag: "Week 1",
        title: "Design the Phone Screen First",
        desc: "We lay out the homepage for a thumb, not a mouse: alert bar, call button, reviews, services and service areas, then scale it up for tablets and desktops.",
      },
      {
        tag: "Week 2",
        title: "Build, Connect and Check Accessibility",
        desc: "Pages are built on a private preview, forms and call tracking are connected, and every template is checked for contrast, alt text and keyboard use.",
        chips: ["Forms connected", "Tracking installed", "WCAG checks"],
      },
      {
        tag: "Week 3",
        title: "Launch With the Keys in Your Name",
        desc: "Your domain points to the new site, old URLs are redirected, and the logins for every account are handed to you on launch day.",
        chips: ["Redirects live", "SSL active", "Logins handed over"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Plan My Florida Website",
  },
  showcase: undefined,
  compare: {
    h2: "Owning Your Website vs. Renting One",
    lead: "Where rented builders and template sites fall short for Florida companies, and what we hand over instead.",
    themTitle: "Rented Website Builder",
    themSub: "Why it costs more over time",
    them: [
      "A fee every month for as long as you stay",
      "The same theme as thousands of other sites",
      "One page trying to cover all of Florida",
      "No fast way to post a storm notice",
      "Cancel and the site stays with them",
    ],
    usTitle: "Your Zonic-Built Site",
    usSub: "Paid for once, yours for good",
    us: [
      "One development fee, no rental",
      "Designed around your own services",
      "Pages for each region you serve",
      "An alert bar you switch yourself",
      "Domain and files registered to you",
    ],
    scoreTitle: "Sample Florida Website Grade",
    scoreSub: "An illustration of four things our free review measures",
    scoreRows: [
      { label: "Mobile load speed", before: 30, after: 90 },
      { label: "Region page coverage", before: 10, after: 80 },
      { label: "Accessibility checks", before: 40, after: 100 },
      { label: "Estimate form ease", before: 30, after: 80 },
    ],
  },
  why: {
    h2: "Why Florida Owners Pick Our Web Design Team",
    lead: "A short build, a site you own outright and forms that turn a phone visit into a booked estimate.",
    cards: [
      {
        icon: <FiClock aria-hidden="true" />,
        title: "A short schedule, in writing",
        desc: "Two to three weeks, with dated milestones from kickoff to launch.",
      },
      {
        icon: <FiKey aria-hidden="true" />,
        title: "You own every piece",
        desc: "Domain, design, files and content in your name.",
      },
      {
        icon: <FiSmartphone aria-hidden="true" />,
        title: "Estimates from any phone",
        desc: "Photos, a ZIP check and a call button on every page.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Is Your Website Ready for Florida’s Next Busy Season?",
      p: "We open your current site on a phone, check its accessibility, see how well it covers your regions and compare it with nearby competitors, then send a plain plan and a fixed quote for the rebuild. Free, and there’s no contract.",
      checks: [
        "Mobile speed measured",
        "Accessibility issues listed",
        "Region gaps mapped",
        "A fixed build quote",
      ],
      cta: "Start My Free Site Review",
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
  // Kept for the type; the platform hub takes the hub slot. The bento
  // shows the first five chips.
  engine: {
    eyebrow: "",
    h2: "",
    lead: null,
    coreStrong: "",
    coreSub: "",
    coreCta: "",
    nodes: [],
    chipsLabel: "Websites for Florida businesses in",
    chips: [
      "Roofing & Restoration",
      "HVAC & Plumbing",
      "Impact Windows",
      "Pool & Lawn Care",
      "Dental & Medical",
      "Law Firms",
      "Real Estate",
      "Home Inspectors",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Questions About Website Design in Florida",
    lead: "Costs, timelines, storms, accessibility and who owns the site, answered plainly.",
    cta: "",
    items: FlWebFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Florida Website Review",
    lead: "Tell us about your business and your current site, and we’ll send back what a new Florida website should do.",
    formType: "florida-web-design",
    badge: "Free Review",
    title: "Get Your Free Florida Website Review",
    subtitle: "One short form, and we reply with what your site should change.",
    submitText: "Request My Review",
    messageLabel: "What should your new website do?",
    messagePlaceholder:
      "Your services, the Florida areas you cover, your current site (if any) and your busiest months",
    defaultServices: ["Web Design"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-web",
  aboutTitle: ["Florida Websites", "Built for Busy", "Seasons and Storms."],
  aboutPhoto: {
    src: "/images/florida/florida-web-design-company.webp",
    alt: "Florida website design layout on a laptop with wireframes and color swatches",
    position: "left top",
  },
  aboutCard: {
    kicker: "Included in each build",
    title: "Made for Florida phones",
    points: [
      "Tap-to-call and estimate forms",
      "A storm alert bar you control",
      "Pages for each region you serve",
      "WCAG 2.2 AA accessibility checks",
    ],
    foot: "Designed and built by our in-house team",
  },
  // Florida web palette: hibiscus pink, sea-glass mint, shell rose, deep
  // mangrove teal.
  pillars: ["#be185d", "#ccfbf1", "#ffe4e6", "#134e4a"],
  features: {
    h2: "What a Florida Website Has to Handle",
    lead: (
      <>
        Storm warnings, seasonal residents, six very different regions and
        visitors who won’t wait for a slow page. Each one shapes how we design
        and build.
      </>
    ),
    items: [
      {
        label: "Seasons & storms",
        title: "Switch Your Site to Storm Mode in One Tap",
        body: "Hurricane season runs June through November, and snowbird season brings seasonal residents back from October to April. We build an alert bar and seasonal homepage sections you change from your phone, so the site matches what customers need that week, whether that’s emergency tarping or a fall roof check.",
        points: [
          { t: "Alert bar on demand", d: "Storm notices in seconds." },
          { t: "Seasonal hero sections", d: "Offers swapped by month." },
          { t: "Emergency pages ready", d: "Built before June." },
          { t: "Accurate hours", d: "Closures posted fast." },
        ],
        href: "/services/florida/ppc",
        link: "Add storm-season PPC",
        ui: "fl-web-1",
      },
      {
        label: "Regions",
        title: "A Page for Every Florida Region You Serve",
        body: "A homeowner in Naples and a property manager in Jacksonville search differently and expect to see their own area named. We plan a page tree by region, then write each page around local services, nearby towns and the questions people there ask, so your site can rank well beyond your home city.",
        points: [
          { t: "Region hub pages", d: "South Florida to the Panhandle." },
          { t: "Town pages with substance", d: "No copy-paste filler." },
          { t: "Internal links mapped", d: "Pages support each other." },
          { t: "Service areas marked up", d: "Schema on every page." },
        ],
        href: "/services/florida/local-seo",
        link: "Explore Florida local SEO",
        ui: "fl-web-2",
      },
      {
        label: "Mobile speed",
        title: "Quick to Load When the Signal Is Weak",
        body: "Local service searches mostly happen on phones, and in Florida that often means a crowded network after a storm or a spotty signal on the road between jobs. We keep the code lean, size every image for mobile and test Core Web Vitals against Google’s thresholds before launch, then recheck once real visitors arrive.",
        points: [
          { t: "Images sized for phones", d: "Sharp but light." },
          { t: "No heavy page builders", d: "Only the code a page needs." },
          { t: "Core Web Vitals passed", d: "Tested before launch." },
          { t: "Real-visitor data", d: "Rechecked after go-live." },
        ],
        href: "/services/web-design",
        link: "See our web design process",
        ui: "fl-web-3",
      },
    ],
  },
  platforms: {
    h2: "Found in Search and AI, Turned Into Calls",
    lead: "Floridians reach your site from Google Search, Google Maps and assistants such as ChatGPT and Perplexity. Once they land, every page offers four quick ways to reach you, each one tracked: a call, a text, an estimate request or directions.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Where Floridians find you",
    rightLabel: "What they do next",
    centerIcon: <FiSmartphone aria-hidden="true" />,
    centerTitle: "Your website",
    centerSub: "found, then contacted",
  },
  // kind "fl-web" shows the one-time website card: only `title` and
  // `customTitle` render; the rest is required by the type.
  pricing: {
    title: "What a Florida Website Costs, Paid Once",
    lead: "One development fee for a phone-first Florida website you own, with optional monthly plans after launch.",
    compareTitle: "Florida Website Options Side by Side",
    compareLead: "What each option includes.",
    addOnsTitle: "Extras for Your Florida Website",
    addOnsLead:
      "Add region pages, booking or estimate tools whenever you need them.",
    customTitle: "Need Region Pages or Several Locations?",
    customText: "We’ll scope a larger Florida build at a fixed price.",
  },
  phone: "fl-web",
  darkUi: "fl-web",
  scoreStyle: "fl-web",
  noGrow: true,
  reviewsTitle: "Client Reviews on Google",
  contact: {
    before: "Ready for a Florida Website",
    after: "That Wins the Call?",
    lead: "Tell us what you do and where in Florida you work. We’ll review your current site for free and outline what the new one should change.",
  },
  stepLinks: ["#de-contact", "/services/web-design", "#de-contact", HUB_PATH],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flWebFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
