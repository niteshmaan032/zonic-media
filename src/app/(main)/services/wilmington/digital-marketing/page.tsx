/*
 * REDESIGN DRAFT (22 Oct 2026) of /services/wilmington/digital-marketing, in the Dallas–Fort Worth
 * layout (src/components/rd/delaware/DelawareLanding.tsx). Copy re-optimized
 * on 24 Oct 2026 (docs/content-optimization-brief.md): fresh wording, no text
 * shared with the live page or the sibling drafts, verified numbers only.
 * Noindex; canonical and schema URLs point at the live page so the file can
 * replace it as-is.
 *
 * WILMINGTON DE DIGITAL MARKETING — city page under the Delaware silo.
 * Aug 2026 SEO plan, Content Gaps tab.
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
  FiCalendar,
  FiFileText,
  FiLayout,
  FiMapPin,
  FiMessageSquare,
  FiNavigation,
  FiPhoneCall,
  FiStar,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";
import { SiGoogle, SiGoogleads, SiGooglemaps, SiWaze } from "react-icons/si";

const PAGE_PATH = "/services/wilmington/digital-marketing";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency in Wilmington, DE | Wilmington SEO",
  },
  description:
    "Wilmington, DE digital marketing agency for search engine optimization, Google Maps, Google Ads and web design across New Castle County.",
  keywords: [
    "digital marketing agency wilmington de",
    "wilmington digital marketing agency",
    "wilmington seo",
    "search engine optimization wilmington de",
    "wilmington search engine marketing",
    "wilmington internet marketing",
    "wilmington marketing agency",
    "seo services new castle county",
    "digital marketing services new castle county",
    "digital marketing agency in new castle county",
    "seo company wilmington delaware",
    "google ads wilmington de",
    "advertising agency wilmington de",
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
    title: "Digital Marketing Agency in Wilmington, DE | Wilmington SEO",
    description:
      "SEO, Google Maps, Google Ads and websites for Wilmington, Delaware businesses, from a Delaware agency. Free audit.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Wilmington Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in Wilmington, Delaware",
  serviceType: "Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Search engine optimization, Google Business Profile management, Google Ads and web design for Wilmington, Delaware businesses, from a Dover-based Delaware agency.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "City",
    name: "Wilmington",
    containedInPlace: { "@type": "State", name: "Delaware" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Businesses in Wilmington and New Castle County, Delaware",
  },
};

/* FAQ (24 Oct 2026): what Wilmington owners ask before hiring; answers lead
   with the answer, published plan prices only. */
const WilmFaqs = [
  {
    question: "Can a Dover-based agency market a Wilmington business?",
    answer:
      "Yes. Wilmington is a short drive up Route 1 from our Dover office and one of our main markets. Strategy calls run on video or face to face, and the day-to-day work can happen from anywhere. What helps your rankings is a genuine Delaware footprint, and ours carries straight into Wilmington campaigns.",
  },
  {
    question: "Is SEO harder in Wilmington than in the rest of Delaware?",
    answer:
      "Usually, yes. Regional firms and national brands compete hard for Wilmington searches, so broad terms need more time and stronger content than in Kent or Sussex. We chase early Map Pack gains first, then work up to the harder organic phrases.",
  },
  {
    question: "What is search engine marketing for a Wilmington business?",
    answer:
      "It covers everything that earns you visibility on Google: SEO for organic and Maps rankings, plus paid search such as Google Ads and Local Services Ads. For Wilmington businesses we usually run both, so ads bring calls now while rankings build underneath.",
  },
  {
    question: "Should a Wilmington business run SEO and Google Ads together?",
    answer:
      "In most cases. Ads bring leads now and reveal which searches convert, which sharpens your SEO targeting. As rankings arrive, organic traffic lowers your blended cost per lead. With Wilmington click prices, moving from paid toward organic over time makes a real difference.",
  },
  {
    question: "What do your Wilmington marketing plans cost?",
    answer:
      "You can choose a $297, $750 or $1,500 monthly plan, all month to month, and ad spend stays separate with 0% markup. Which plan fits depends on your services, your suburbs and how much competition you face. We recommend one after a free audit, with no percentage-of-spend fees.",
  },
  {
    question: "Which towns around Wilmington do you cover?",
    answer:
      "All of New Castle County, including Hockessin, Greenville, Pike Creek, Newark, Bear, New Castle, Claymont, Middletown and towns across the Brandywine Valley. We also help Wilmington companies whose customers live across the Pennsylvania and Maryland lines.",
  },
  {
    question: "Can you fix a suspended Google Business Profile in Wilmington?",
    answer:
      "Yes. Reinstatement is our flagship service, and we have brought back 900+ suspended profiles. If your Wilmington listing is down, fix it first, because no amount of website SEO makes up for a missing Maps listing.",
  },
  {
    question: "How does a Wilmington business get into the Google Map Pack?",
    answer:
      "Start with what you control: the right primary category, a complete profile, steady recent reviews, real photos and citations that show your address the same way everywhere. Distance to the searcher counts too, which means downtown businesses compete street by street. We map your rank on a grid covering Wilmington, Newark and the suburbs so you can see where you lead.",
  },
];

const wilmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: WilmFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/* ---------------------------------------------------------------------------
   CONTENT (24 Oct 2026 re-optimization). Live URL's ranking terms (Semrush
   US resource_organic, 24 Oct): seo services new castle county #14 (140) ·
   search engine optimization wilmington de #31 (320) · website development
   company in new castle county #31 (140) · digital marketing agency in new
   castle county #34 (110) · digital marketing services new castle county #35
   (110) · franchise marketing agency wilmington de #39 (170) · wilmington seo
   #45 (390) · wilmington search engine marketing #48 (260) · wilmington
   internet marketing #51 (110) · wilmington marketing #54 (140). 22 Oct
   volumes: wilmington seo 390 (KD 12) · search engine optimization
   wilmington de 390 (7) · wilmington marketing agency 210 (54).
   phrase_these was out of API units on 24 Oct.
--------------------------------------------------------------------------- */

const hubLeft: HubApp[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiWaze, name: "Waze", tone: "waze" },
  { icon: SiGoogleads, name: "Google Ads", tone: "googleads" },
];
const hubRight: HubApp[] = [
  { icon: FiPhoneCall, name: "Phone calls", tone: "calls" },
  { icon: FiMessageSquare, name: "Text messages", tone: "texts" },
  { icon: FiFileText, name: "Website forms", tone: "forms" },
  { icon: FiNavigation, name: "Direction requests", tone: "directions" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Wilmington Digital Marketing Agency",
    h1Highlight: "Growing New Castle County Businesses",
    sub: "Zonic Media helps Wilmington businesses win local search with SEO, Google Business Profile work, Google Ads and websites. We are a Delaware company based in Dover, planning your marketing suburb by suburb, from downtown to Newark, Hockessin and Middletown.",
    media: {
      src: "/images/geo/wilmington-digital-marketing/wilmington-riverfront-business-owner.webp",
      alt: "Wilmington business owner using a phone along the Christina Riverfront",
    },
    floatA: { strong: "Delaware HQ", text: "in Dover, DE" },
    floatB: { strong: "5.0 on Google", text: "client rating" },
    stats: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "Top 3",
        label: "Map Pack goal from downtown to the suburbs",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Our rating on Google",
      },
      {
        icon: <FiPhoneCall aria-hidden="true" />,
        num: "More calls",
        label: "From Wilmington search, Maps and ads",
      },
      {
        icon: <FiCalendar aria-hidden="true" />,
        num: "Booked",
        label: "More jobs across New Castle County",
      },
    ],
    proof: "",
    cta: "Claim a Free Wilmington Audit",
  },
  about: {
    eyebrow: "Wilmington marketing",
    h2Start: "Search Engine Marketing Built",
    h2Highlight: "for Wilmington, DE.",
    leads: [
      <>
        Search results for New Castle County services are packed with big
        regional firms and national brands. Add I-95 commuters, a busy downtown
        and the Riverfront, and Wilmington searches outrun the city&apos;s size.
        We plan for that suburb by suburb.
      </>,
      <>
        We are a registered Delaware business on The Green in Dover, so you can
        check our address and reviews before you call. See how this fits our
        statewide{" "}
        <Link href="/services/delaware/seo" className="phl-inline-link">
          Delaware SEO
        </Link>{" "}
        and{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware digital marketing
        </Link>{" "}
        plans.
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/geo/wilmington-digital-marketing/wilmington-market-street-storefront.webp",
      alt: "Independent storefront opening for the day on Market Street in Wilmington",
    },
    collageB: {
      src: "/images/geo/wilmington-digital-marketing/wilmington-rankings-dashboard.webp",
      alt: "Wilmington local rankings and campaign performance dashboard",
    },
    badgeText: "Wilmington Delaware Marketing • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Digital Marketing Services in New Castle County",
    lead: "Six services, one in-house team and one monthly report, aimed at the Wilmington suburbs and services that earn you the most.",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Wilmington SEO Services",
        desc: "Search engine optimization for Wilmington: service pages, local content and citations that lift you downtown and across the suburbs.",
        points: [
          "A page for each suburb",
          "New Castle County citations",
          "Rank tracking by suburb",
        ],
        href: "/services/delaware/seo",
        link: "Our Delaware SEO program",
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Maps Profile Management",
        desc: "Your Map Pack listing fully completed and kept active, with quick recovery if Google ever suspends it.",
        points: [
          "Categories, services and photos",
          "Posts and Q&A kept current",
          "Suspension recovery included",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Suspended? Get reinstated",
      },
      {
        tone: "blue",
        icon: <FiTarget aria-hidden="true" />,
        title: "Wilmington PPC and Local Services Ads",
        desc: "Pay-per-click and Local Services Ads aimed at Wilmington and its suburbs, with waste trimmed every week.",
        points: [
          "Ads by suburb and service",
          "Google Guaranteed badge setup",
          "Weekly search-term reviews",
        ],
        href: "/services/google-ads",
        link: "How we manage Google Ads",
      },
      {
        tone: "gold",
        icon: <FiLayout aria-hidden="true" />,
        title: "Websites for Wilmington Buyers",
        desc: "Quick, phone-friendly pages built to turn Wilmington visitors into booked calls.",
        points: [
          "Designed for phones first",
          "Tap-to-call on each page",
          "Pages per service and suburb",
        ],
        href: "/services/delaware/web-design",
        link: "See Delaware web design",
      },
      {
        tone: "blue",
        icon: <FiStar aria-hidden="true" />,
        title: "Review and Reputation Growth",
        desc: "More genuine reviews from local customers, and thoughtful replies that persuade the next person comparing options.",
        points: [
          "Text and email requests",
          "Every review answered",
          "Monthly review report",
        ],
        href: "#de-contact",
        link: "Ask about reviews",
      },
      {
        tone: "gold",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Call Tracking and Reports",
        desc: "Calls, forms and direction requests traced to the search behind them, in one plain monthly report.",
        points: [
          "Tracked phone numbers",
          "Form and chat tracking",
          "Results by suburb",
        ],
        href: "/services/local-seo-packages",
        link: "See local SEO packages",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Reach Wilmington's Map Pack Top Three",
    leads: [
      <>
        The Map Pack collects most local clicks and calls, and Wilmington&apos;s
        is the busiest in the state. We target the top three in the suburbs and
        services that pay you best.
      </>,
      <>
        Proximity, relevance and prominence decide who appears there. We work on
        all three with a complete profile, consistent citations and a steady
        flow of reviews.
      </>,
    ],
    cta: "See My Wilmington Rankings",
    console: {
      title: "Wilmington Map Pack",
      tag: "Illustration",
      metrics: [
        { strong: "Top 3", label: "Map Pack goal" },
        { strong: "Calls", label: "Tracked by suburb" },
        { strong: "Reviews", label: "Requested weekly" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "Your First Three Months in Wilmington",
    steps: [
      {
        tag: "Week 1",
        title: "Free Map Pack and Market Review",
        desc: "We see who holds the Map Pack in your suburbs, check your profile and site, and return a flat-rate plan.",
      },
      {
        tag: "Weeks 2–4",
        title: "Profiles, Pages and Tracking Fixed",
        desc: "Profile rebuilt, citations cleaned, suburb pages planned and call tracking running before any ads launch.",
      },
      {
        tag: "Month 2",
        title: "Ads and Suburb Content Go Live",
        desc: "Local Services Ads and search ads start producing calls while suburb pages and reviews lift your rankings.",
        chips: ["LSAs live", "New suburb pages", "Review asks"],
      },
      {
        tag: "Month 3 on",
        title: "Grow Into New Suburbs",
        desc: "A monthly report by suburb, then new areas and services once your core terms hold steady.",
        chips: ["Report by suburb", "Added areas", "Added services"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Claim a Free Wilmington Audit",
  },
  // Kept for the type; the white band shows the feature rows instead.
  results: { eyebrow: "", h2: "", cards: [] },
  showcase: {
    image: {
      src: "/images/geo/wilmington-digital-marketing/wilmington-riverfront-business-district.webp",
      alt: "Businesses, cyclists, and pedestrians along the Wilmington Riverfront",
    },
    floats: [
      { num: "Top 3", label: "Map Pack goal by suburb" },
      { num: "↑ Calls", label: "From Maps and search" },
      { num: "↑ Reviews", label: "Requested after each job" },
    ],
  },
  compare: {
    h2: "Comparing Marketing Agencies in Wilmington, DE",
    lead: "Here's what changes when your agency answers to you in Delaware.",
    themTitle: "Out-of-Area Agency",
    themSub: "Why so many Wilmington campaigns stall",
    them: [
      "Sells Wilmington from somewhere else",
      "A single citywide push that skips the suburbs",
      "Reports that never mention calls",
      "Ad spend wasted on clicks outside your area",
      "Contracts that outlive the results",
    ],
    usTitle: "Zonic Media in Wilmington",
    usSub: "Answerable in Delaware",
    us: [
      "A Delaware office you can visit",
      "Targeting by suburb, Newark to Claymont",
      "Each call and form traced to its source",
      "Ads shown only where you work",
      "No long contract, just results",
    ],
    scoreTitle: "Sample Wilmington Scorecard",
    scoreSub: "Example scores, first audit versus goal",
    scoreRows: [
      { label: "Map Pack reach", before: 18, after: 80 },
      { label: "Listing accuracy", before: 42, after: 95 },
      { label: "Review pace", before: 22, after: 72 },
      { label: "Profile completeness", before: 35, after: 94 },
    ],
  },
  why: {
    h2: "A Delaware Team Wilmington Can Hold to Account",
    lead: "Plenty of agencies that show up for Wilmington searches sell the city from out of state. You can see exactly where we are.",
    cards: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        title: "Headquartered in Delaware",
        desc: "Our office is on The Green in Dover, a short drive down Route 1 from downtown Wilmington.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Spend Aimed at Profit",
        desc: "Wilmington clicks are pricey, so we steer budget toward your best jobs and cut waste every week.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Open Accounts and Data",
        desc: "Your accounts, your data and a monthly report listing every call and where it came from.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Get Your Wilmington Growth Plan",
      p: "We check your rankings, profile and competitors across New Castle County, then send a ranked plan at a fixed monthly rate. Free, with no obligation.",
      checks: [
        "Map Pack plan by suburb",
        "Competitors by area",
        "Listing gaps",
        "Review plan",
      ],
      cta: "Get My Free Wilmington Plan",
      audit: {
        title: "",
        tag: "",
        score: "62",
        grade: "",
        gradeDesc: "",
        rows: [],
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
    chipsLabel: "Industries we market in Wilmington",
    chips: [
      "Law & Finance",
      "Home Services",
      "Medical Offices",
      "Restaurants & Bars",
      "Salons & Spas",
      "Auto Repair",
      "Retail Shops",
      "Contractors",
    ],
  },
  faqs: {
    eyebrow: "",
    h2: "Wilmington Marketing Questions, Answered",
    lead: "Pricing, coverage and how fast rankings move.",
    cta: "",
    items: WilmFaqs,
  },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  form: {
    eyebrow: "",
    h2: "Request a Wilmington Market Review",
    lead: "Tell us about your business and we'll send a market review and a plan at one flat price.",
    formType: "wilmington-digital-marketing",
    badge: "Free Audit",
    title: "Request your Wilmington audit",
    subtitle:
      "Share a few details and we'll show where you rank across Wilmington and what it takes to move up.",
    submitText: "Send My Free Audit",
    messageLabel: "What would you like to improve?",
    messagePlaceholder: "Your services, the suburbs you serve and your goals",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "wilmington",
  // Owner's Wilmington banner (23 Oct); top-left anchor keeps the whole
  // "Wilmington Digital Marketing Agency" heading in frame on phones too.
  aboutPhoto: {
    src: "/images/geo/wilmington-digital-marketing/wilmington-digital-marketing-agency.webp",
    alt: "Wilmington digital marketing agency banner over the Christina Riverfront at dusk, with SEO, PPC, social media, content marketing and web design icons",
    position: "0% 0%",
  },
  pricing: {
    title: "Marketing Plans for Wilmington Businesses",
    lead: "Plans sized for New Castle County competition, from Map Pack basics to full SEO, ads and social.",
    compareTitle: "Wilmington Plans at a Glance",
    compareLead: "Every deliverable from Foundation up to Authority.",
    addOnsTitle: "Extras for Wilmington Campaigns",
    addOnsLead: "More suburbs, landing pages and campaigns when you're ready.",
    customTitle: "Serving several suburbs?",
    customText: "We'll build a plan around each area you cover.",
  },
  // Targets "wilmington search engine marketing" / "search engine
  // optimization wilmington de".
  aboutTitle: ["Search Engine", "Marketing Built for", "Wilmington, DE."],
  aboutCard: {
    kicker: "Serving New Castle County",
    title: "Wilmington and nearby towns",
    points: [
      "Downtown, the Riverfront and Trolley Square",
      "Newark, Bear and Pike Creek",
      "Hockessin, Greenville and the Brandywine Valley",
      "Claymont, New Castle and Middletown",
    ],
    foot: "Delaware HQ: 8 The Green, STE B, Dover",
  },
  // Own pillar colours (owner: a different set on every page).
  pillars: ["#0e7490", "#ffe4e6", "#e2e8f0", "#4c1d95"],
  features: {
    h2: "Local SEO Services in Wilmington, DE That Win Search",
    lead: (
      <>
        Suburb targeting, paid search and reviews work together across New
        Castle County. Run a trade business? See{" "}
        <Link href="/services/local-seo-for-home-services">
          local SEO for home services
        </Link>
        .
      </>
    ),
    items: [
      {
        label: "Suburbs",
        title: "Rankings in Each Suburb You Serve",
        body: "A downtown address alone won't put you on the map in Hockessin or Bear. We add suburb pages, local citations and profile signals for each area, then check your rank from each one.",
        points: [
          { t: "Suburb pages", d: "A landing page for each area." },
          { t: "County citations", d: "Listings tied to New Castle County." },
          { t: "Wider reach", d: "New suburbs added month by month." },
          { t: "Suburb tracking", d: "Rank checked from every area." },
        ],
        href: "/services/delaware/seo",
        link: "Delaware SEO program",
        ui: "suburbs",
      },
      {
        label: "Paid search",
        title: "Google Ads and LSAs That Make the Phone Ring",
        body: "Local Services Ads put a Google Guaranteed badge at the very top, and search ads cover the terms you don't rank for yet. We run both by suburb and trim wasted spend weekly.",
        points: [
          {
            t: "Google Guaranteed",
            d: "Local Services Ads set up and managed.",
          },
          { t: "Suburb budgets", d: "Spend aimed where the best jobs are." },
          { t: "Pay per lead", d: "LSAs charge for leads, not clicks." },
          { t: "Direct billing", d: "Google bills your ad spend to you." },
        ],
        href: "/services/google-ads",
        link: "Google Ads management",
        ui: "lsa",
      },
      {
        label: "Reviews",
        title: "Reviews That Tip the Decision",
        body: "Wilmington customers compare several businesses before they call. A steady stream of recent, genuine reviews with real replies is often what wins the choice for you.",
        points: [
          { t: "Steady asks", d: "Requests after every finished job." },
          { t: "Real replies", d: "Each review answered by name." },
          { t: "Fresh reviews", d: "New ones coming in every month." },
          { t: "Rating alerts", d: "Drops flagged quickly." },
        ],
        href: "/local-seo-google-business-optimization",
        link: "Business Profile optimization",
        ui: "reviews",
      },
    ],
  },
  platforms: {
    h2: "Every Call, Text and Visit Tracked",
    lead: "People in Wilmington find you on Google, Maps or Waze, then call, text, fill in a form or stop by. We track each of those actions, so your report ties every customer to the search that sent them.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Where customers find you",
    rightLabel: "How they get in touch",
    centerIcon: <FiBarChart2 aria-hidden="true" />,
    centerTitle: "One monthly report",
    centerSub: "each lead tied to its search",
  },
  // Monthly report: matches the accountability points beside it (owner, 23 Oct).
  phone: "report",
  darkUi: "mappack",
  scoreStyle: "rings",
  noGrow: true,
  reviewsTitle: "What Business Owners Tell Us",
  contact: {
    before: "Let’s Get Wilmington",
    after: "Calling You First",
    lead: "Name your services and the suburbs you want more work from. We'll send a free market audit and a fixed-rate plan.",
  },
  stepLinks: [
    "#de-contact",
    "/local-seo-google-business-optimization",
    "/services/google-ads",
    "/services/local-seo-packages",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wilmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
