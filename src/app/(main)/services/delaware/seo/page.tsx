/*
 * REDESIGN DRAFT (22 Oct 2026) of /services/delaware/seo, in the Dallas–Fort Worth
 * layout (src/components/rd/delaware/DelawareLanding.tsx). Copy re-optimized
 * on 24 Oct 2026 (docs/content-optimization-brief.md): fresh wording, no text
 * shared with the live page or the sibling drafts, verified numbers only.
 * Noindex; canonical and schema URLs point at the live page so the file can
 * replace it as-is.
 *
 * DELAWARE SEO — the #1 content gap in the Aug 2026 SEO plan. Primary keyword
 * "seo company delaware"; every top-5 competitor ranks an exact-match
 * Delaware-SEO URL.
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
  FiFileText,
  FiLayout,
  FiLink2,
  FiMapPin,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { FaMicrosoft } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";
import {
  SiApple,
  SiGoogle,
  SiGooglemaps,
  SiHouzz,
  SiThumbtack,
  SiTripadvisor,
  SiYelp,
} from "react-icons/si";

const PAGE_PATH = "/services/delaware/seo";

export const metadata: Metadata = {
  title: { absolute: "SEO Company in Delaware | SEO Services in Dover, DE" },
  description:
    "Delaware SEO company in Dover. Local SEO, Google Business Profile, technical SEO and content that help businesses in Wilmington, Dover and Lewes rank higher.",
  keywords: [
    "seo company in delaware",
    "seo company delaware",
    "delaware seo company",
    "delaware seo",
    "seo delaware",
    "seo services delaware",
    "seo service company delaware",
    "seo company dover",
    "seo dover de",
    "seo expert delaware",
    "seo company wilmington delaware",
    "seo lewes de",
    "local seo delaware",
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
    title: "SEO Company in Delaware | SEO Services in Dover, DE",
    description:
      "Dover-based SEO company for Delaware businesses: local SEO, Google Business Profile, technical fixes and content. Free audit.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Delaware SEO", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services in Delaware",
  serviceType: "Search Engine Optimization",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Local SEO, Google Business Profile optimization, technical SEO and content for Delaware businesses, from a Dover-based SEO company serving Wilmington, Newark, Dover and Sussex County.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
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
  areaServed: { "@type": "State", name: "Delaware" },
  audience: {
    "@type": "BusinessAudience",
    name: "Businesses across New Castle, Kent and Sussex County, Delaware",
  },
};

/* FAQ (24 Oct 2026): questions owners search before hiring an SEO company;
   answers lead with the answer, published plan prices only. */
const DelSeoFaqs = [
  {
    question: "How much do your Delaware SEO plans cost?",
    answer:
      "Our SEO plans are priced at $297, $750 and $1,500 a month, all month to month. The right one depends on how many locations you have and how hard your towns are to win; Wilmington terms usually take more work than Kent or Sussex. You get a recommendation and a fixed monthly price after a free audit.",
  },
  {
    question: "How long does local SEO take in Delaware?",
    answer:
      "Business Profile fixes usually show up in the Map Pack first. Organic rankings for tougher terms, such as Wilmington service keywords, take months of steady work. We set milestones in your audit and report against them every month, so you always know how far along you are and what comes next.",
  },
  {
    question: "Do you offer SEO in Dover, Wilmington and Lewes?",
    answer:
      "Yes. We cover the whole state: Wilmington, Newark and the rest of New Castle County; Dover, Smyrna, Milford and Kent County; and Lewes, Rehoboth Beach, Seaford, Millsboro and Sussex County. We also help Delaware businesses that sell into nearby Maryland and Pennsylvania.",
  },
  {
    question: "What sets your SEO company apart from others in Delaware?",
    answer:
      "Three things. We are an SEO company Delaware owners can visit, with an office on The Green in Dover. We specialize in Google Business Profiles, with 1,500+ optimized and 900+ suspended profiles reinstated. And our reports focus on calls and booked work rather than keyword positions alone.",
  },
  {
    question: "Can SEO be built into a new website?",
    answer:
      "Yes, and doing both at once costs less. When we build your site, target keywords, tidy page structure and schema are part of the plan from day one, so you never pay a second time to fix search problems after launch. Our Delaware web design team handles the build.",
  },
  {
    question: "Do you sell one-time SEO projects?",
    answer:
      "Yes. Technical cleanups, site migrations and suspended-profile rescues work well as fixed-scope projects. Ongoing ranking work, meaning content, links and reviews, runs monthly because search rewards steady effort. Our local SEO packages page lists what each plan covers.",
  },
  {
    question: "How do beach-season searches affect SEO in Sussex County?",
    answer:
      "A lot. Searches in Lewes, Rehoboth Beach and the coastal towns climb in summer, so we publish content and update profiles before the season starts, keep holiday hours accurate on Google, and shift focus to year-round resident services once the crowds leave. That is the seasonal SEO Lewes businesses need.",
  },
  {
    question: "Can an SEO company guarantee first-page rankings?",
    answer:
      "No honest one can. Google changes results daily and no agency controls them. What we guarantee is what we control: the work in your plan, full access to your accounts and a monthly report that shows your rankings, what moved and the work behind it.",
  },
  {
    question: "How do I pick the best SEO company in Delaware?",
    answer:
      "Look for three things: Delaware clients and reviews you can check, reports built on calls and leads rather than rankings alone, and a plan written for your towns. We are based in Dover, show our 5.0 Google rating openly and price every plan after a free audit.",
  },
];

const delSeoFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: DelSeoFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/* ---------------------------------------------------------------------------
   CONTENT (24 Oct 2026 re-optimization). Live URL's ranking terms (Semrush
   US resource_organic, 24 Oct; UK place-name matches ignored): seo company
   dover #14 (320) · seo company in delaware #15 (480) · delaware seo company
   #24 (390) · seo company delaware #26 (480) · seo delaware #27 (320) ·
   delaware seo #37 (390) · seo company wilmington delaware #46 (170).
   22 Oct volumes: seo company delaware 590 (KD 16) · delaware seo 480 ·
   seo service company delaware 480 · seo services delaware 210 · seo expert
   delaware 170. phrase_these was out of API units on 24 Oct. "wilmington
   seo" belongs to the Wilmington page, so it is only linked from here.
--------------------------------------------------------------------------- */

const data: DelawareData = {
  hero: {
    // No kicker: the keyword leads the H1.
    eyebrow: "",
    h1Start: "SEO Company in Delaware",
    h1Highlight: "Built to Rank You on Google and Maps",
    sub: "Zonic Media is a Delaware SEO company with its office in Dover. We use local SEO, technical fixes, content and Google Business Profile work to lift you in search and Maps, so customers in Wilmington, Dover and Lewes find you first.",
    media: {
      src: "/images/geo/delaware-seo/delaware-seo-strategy.webp",
      alt: "Delaware business owner reviewing local SEO rankings with a strategist near Dover Green",
    },
    floatA: { strong: "8 The Green, Dover", text: "our Delaware office" },
    floatB: { strong: "5.0 on Google", text: "from client reviews" },
    stats: [
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "Page 1",
        label: "Rankings for the searches your buyers use",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Our rating on Google",
      },
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "Top 3",
        label: "Map Pack target, town by town",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        num: "Found",
        label: "Before competitors in local searches",
      },
    ],
    proof: "",
    cta: "Start With a Free SEO Audit",
  },
  about: {
    eyebrow: "Local SEO for Delaware",
    h2Start: "Delaware SEO Planned",
    h2Highlight: "Around Each County.",
    leads: [
      <>
        Searches change from one end of the state to the other.{" "}
        <Link
          href="/services/wilmington/digital-marketing"
          className="phl-inline-link"
        >
          Wilmington
        </Link>{" "}
        buyers compare city and suburban firms, Kent County runs on service-area
        searches around Dover, and Sussex demand rises and falls with beach
        season. Your SEO plan should follow those patterns.
      </>,
      <>
        Our Dover office gives Google the local proof it looks for: a real
        Delaware address, Delaware reviews and Delaware citations. Need ads and
        social as well? Our{" "}
        <Link
          href="/services/delaware/digital-marketing"
          className="phl-inline-link"
        >
          Delaware digital marketing
        </Link>{" "}
        plans add them.
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/geo/delaware-seo/delaware-main-street-storefront.webp",
      alt: "Independent storefront on a tree-lined Delaware main street",
    },
    collageB: {
      src: "/images/geo/delaware-seo/delaware-local-rankings-dashboard.webp",
      alt: "Local search map rankings and visibility dashboard on a laptop",
    },
    badgeText: "Delaware SEO Company • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "SEO Services in Delaware That Win Local Searches",
    lead: "Everything that lifts a Delaware business in Google search and Maps, delivered in one monthly plan with a report written in plain English.",
    cards: [
      {
        tone: "blue",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Business Profile Setup and Care",
        desc: "Your profile decides your Map Pack position. We complete every field, choose the right categories and keep posts, photos and Q&A current.",
        points: [
          "Primary and extra categories",
          "Weekly posts and fresh photos",
          "Fast help if it's suspended",
        ],
        href: "/local-seo-google-business-optimization",
        link: "Profile optimization service",
      },
      {
        tone: "gold",
        icon: <FiSearch aria-hidden="true" />,
        title: "Keyword and Competitor Mapping",
        desc: "We find what Delaware customers type in each town, see who holds those results today and plan how you overtake them.",
        points: [
          "Search terms by town",
          "Competitor gaps in your county",
          "One target keyword per page",
        ],
        href: "#de-contact",
        link: "Ask for a keyword review",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Technical and On-Page Fixes",
        desc: "Fast, crawlable pages with sharp titles, clear headings and schema, so Google understands each service and town you cover.",
        points: [
          "Titles, headings and links",
          "Mobile speed and Core Web Vitals",
          "Schema on service pages",
        ],
        href: "/services/delaware/web-design",
        link: "Need a new site? Web design",
      },
      {
        tone: "gold",
        icon: <FiLink2 aria-hidden="true" />,
        title: "Local Citations and Links",
        desc: "The same name, address and phone on every directory Google checks, plus mentions from real Delaware sites.",
        points: [
          "Duplicate listings removed",
          "Map and directory listings claimed",
          "Chamber and local press links",
        ],
        href: "/services/seo-services",
        link: "Our SEO services",
      },
      {
        tone: "blue",
        icon: <FiStar aria-hidden="true" />,
        title: "Steady Google Review Growth",
        desc: "A steady flow of genuine reviews from Delaware customers, plus replies that show the next buyer you care.",
        points: [
          "Requests after every job",
          "Replies in your voice",
          "Review count tracked monthly",
        ],
        href: "#de-contact",
        link: "Ask about review growth",
      },
      {
        tone: "gold",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Clear Monthly SEO Reports",
        desc: "Rankings by town, calls, direction requests and form fills each month, plus the next steps, in plain English.",
        points: [
          "Rank tracking by town",
          "Calls and forms from search",
          "Next steps agreed in writing",
        ],
        href: "/services/local-seo-packages",
        link: "Compare local SEO packages",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "What a Delaware SEO Expert Does Differently",
    leads: [
      <>
        Out-of-state firms often treat Delaware as one market. A local SEO
        expert knows that ranking in Lewes and ranking in Wilmington are
        separate jobs, and that reviews from real Delaware customers carry
        weight a bought link never will.
      </>,
      <>
        All work stays in-house. Want calls while rankings build? We pair SEO
        with{" "}
        <Link href="/services/google-ads" className="phl-inline-link">
          Google Ads
        </Link>
        , and if your listing is ever suspended, our{" "}
        <Link
          href="/services/gbp-reinstatement-service"
          className="phl-inline-link"
        >
          Business Profile reinstatement
        </Link>{" "}
        team restores it.
      </>,
    ],
    cta: "Check My Delaware Rankings",
    console: {
      title: "Local Visibility Dashboard",
      tag: "Example view",
      metrics: [
        { strong: "Top 3", label: "Map Pack goal" },
        { strong: "Weekly", label: "Profile updates" },
        { strong: "Monthly", label: "Call report" },
      ],
      barsLabel: "Ranking signal strength",
      bars: [
        { label: "Map pack visibility", val: 84, tone: "blue" },
        { label: "Profile completeness", val: 95, tone: "gold" },
        { label: "Citation accuracy", val: 92, tone: "blue" },
        { label: "Review velocity", val: 74, tone: "gold" },
      ],
      pills: [
        { icon: "pin", text: "Dover · top 3" },
        { icon: "pin", text: "Lewes · top 3" },
        { icon: "star", text: "5.0 on Google" },
      ],
    },
  },
  process: {
    eyebrow: "",
    h2: "Our Path From Audit to the Map Pack",
    steps: [
      {
        tag: "Week 1",
        title: "Free Ranking and Profile Audit",
        desc: "We check your rankings, Business Profile, website and top local competitors, then send a ranked list of fixes that's yours to keep.",
      },
      {
        tag: "Weeks 2–4",
        title: "Groundwork: Profile, Listings, Pages",
        desc: "County keyword map, full profile build-out, listing cleanup and on-page fixes, so each later month builds on firm footing.",
      },
      {
        tag: "Every month",
        title: "Monthly Authority Building",
        desc: "Fresh content, local links, reviews and profile activity every month: the signals that push your listing higher on Maps and keep it there.",
        chips: ["New local pages", "More reviews", "Profile posts"],
      },
      {
        tag: "Ongoing",
        title: "Report, Then Widen Your Reach",
        desc: "A monthly report on calls and direction requests, then new services and towns once your main terms are secure.",
        chips: ["Monthly call report", "More towns", "More services"],
      },
    ],
    visualTitle: "Example 90-day signal check",
    visualBars: [
      { label: "Profile strength", val: 88 },
      { label: "Citation accuracy", val: 90 },
      { label: "Review velocity", val: 70 },
    ],
    ctaPrimary: "Start With a Free SEO Audit",
  },
  // Kept for the type; the white band shows the feature rows instead.
  results: {
    eyebrow: "",
    h2: "",
    cards: [],
  },
  // Profile-phone stats: goals and growth cues, no invented results.
  showcase: {
    image: {
      src: "/images/geo/delaware-seo/delaware-main-street-businesses.webp",
      alt: "Local shops and customers along a Delaware commercial main street",
    },
    floats: [
      { num: "Top 3", label: "Map Pack target in each town" },
      { num: "↑ Calls", label: "From your Business Profile" },
      { num: "↑ Visits", label: "Direction requests to your door" },
    ],
  },
  compare: {
    h2: "How to Compare SEO Companies in Delaware",
    lead: "Here is what changes when your SEO team is based in the state.",
    themTitle: "The Remote Rate-Card Agency",
    themSub: "Why many 'Delaware' campaigns stall",
    them: [
      "A Delaware page but no Delaware presence",
      "One campaign stretched over three counties",
      "Reports with impressions and no calls",
      "Bulk links and duplicate listings",
      "Year-long contracts before any leads",
    ],
    usTitle: "Zonic Media's Delaware SEO",
    usSub: "Run from Dover, reported in calls",
    us: [
      "An office on The Green in Dover",
      "County-level plans, Wilmington to the beaches",
      "Reports on calls, directions and forms",
      "Hand-built citations and local links",
      "Month to month, earned by results",
    ],
    scoreTitle: "Sample Visibility Scorecard",
    scoreSub: "Illustrative audit scores, before and after",
    scoreRows: [
      { label: "Profile strength", before: 30, after: 90 },
      { label: "Citation accuracy", before: 45, after: 92 },
      { label: "Review velocity", before: 25, after: 74 },
      { label: "Map pack visibility", before: 20, after: 84 },
    ],
  },
  why: {
    h2: "An SEO Company in Delaware You Can Visit",
    lead: "Rankings follow the work. You get the plan, the work itself and full visibility into both.",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "Local Search Is Our Specialty",
        desc: "We focus on Maps, local search and the calls they bring, starting with businesses in our home state.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Published Plans, No Lock-In",
        desc: (
          <>
            Month-to-month plans, no percentage-of-spend fees and no 12-month
            commitment. Compare our{" "}
            <Link
              href="/services/local-seo-packages"
              className="phl-inline-link"
            >
              local SEO packages
            </Link>
            .
          </>
        ),
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Every Change on the Record",
        desc: "Every account is yours, every change shows up in your report, and you hear about any drop from us first.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Get a Clear Plan to Climb Delaware Search Results",
      p: "We compare your profile, listings, reviews and rankings with the top businesses in your county and map the quickest route into the top three. Free, and the plan is yours to keep.",
      checks: [
        "Map Pack plan by town",
        "Profile fixes to make",
        "Listing gaps found",
        "Review growth plan",
      ],
      cta: "Send Me My SEO Plan",
      audit: {
        title: "Local Visibility Score",
        tag: "Example",
        score: "64",
        grade: "Needs work",
        gradeDesc: "A sample of the score your free audit includes",
        rows: [
          { label: "Business Profile", flag: "Fields missing" },
          { label: "Citations", flag: "Mismatches found" },
          { label: "Reviews", flag: "Behind the top 3" },
        ],
      },
    },
  },
  marquee: [],
  // Hidden on this page: the platform hub takes the hub slot; its chips
  // feed the hero card.
  engine: {
    eyebrow: "",
    h2: "Six Ranking Signals Worked Every Month",
    lead: (
      <>
        Rankings come from several signals working together, and our{" "}
        <Link href="/services/google-ads" className="phl-inline-link">
          Google Ads management
        </Link>{" "}
        brings calls while they build.
      </>
    ),
    coreStrong: "Your Delaware listing",
    coreSub: "Top three · every town you serve",
    coreCta: "Start With a Free SEO Audit",
    nodes: [
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Business Profile",
        outcome: "Trusted by Google",
        tone: "blue",
        left: "50%",
        top: "7%",
      },
      {
        icon: <FiSearch aria-hidden="true" />,
        title: "Keyword Research",
        outcome: "Right targets",
        tone: "gold",
        left: "82%",
        top: "28.5%",
      },
      {
        icon: <FiLink2 aria-hidden="true" />,
        title: "Citations",
        outcome: "Matching details",
        tone: "blue",
        left: "82%",
        top: "71.5%",
      },
      {
        icon: <FiStar aria-hidden="true" />,
        title: "Review Growth",
        outcome: "Picked first",
        tone: "gold",
        left: "50%",
        top: "93%",
      },
      {
        icon: <FiFileText aria-hidden="true" />,
        title: "Local Pages",
        outcome: "Ranks per town",
        tone: "blue",
        left: "18%",
        top: "71.5%",
      },
      {
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Tracking",
        outcome: "Monthly proof",
        tone: "gold",
        left: "18%",
        top: "28.5%",
      },
    ],
    chipsLabel: "Industries we rank in Delaware",
    chips: [
      "Contractors",
      "Dentists & Clinics",
      "Law Offices",
      "Restaurants",
      "Auto Shops",
      "Salons & Spas",
      "Real Estate",
      "Retail Stores",
    ],
  },
  faqs: {
    eyebrow: "",
    h2: "What Delaware Owners Ask About SEO",
    lead: "Plans, timelines and what actually lifts rankings here.",
    cta: "Ask About Your Town",
    items: DelSeoFaqs,
  },
  // Hidden on this page (owner removed the "grow further" block on the
  // marketing draft); its links now sit in the about copy and service cards.
  grow: {
    eyebrow: "",
    h2: "",
    lead: null,
    cards: [],
  },
  form: {
    eyebrow: "",
    h2: "Request a Delaware SEO Audit",
    lead: "Tell us about your business and we'll send a visibility audit and a fixed monthly quote for your county.",
    formType: "delaware-seo",
    badge: "Free SEO Audit",
    title: "Your Delaware SEO audit",
    subtitle:
      "Tell us where you want to rank. We'll show where you stand today and what it takes to reach the top three in your county.",
    submitText: "Send My Free Audit",
    messageLabel: "Which towns do you want to rank in?",
    messagePlaceholder: "Your services, target towns and current website",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const hubLeft: HubApp[] = [
  { icon: SiGoogle, name: "Google Business Profile", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiApple, name: "Apple Business Connect", tone: "apple" },
  { icon: FaMicrosoft, name: "Bing Places", tone: "bing" },
];
const hubRight: HubApp[] = [
  { icon: SiYelp, name: "Yelp", tone: "yelp" },
  { icon: SiHouzz, name: "Houzz", tone: "houzz" },
  { icon: SiThumbtack, name: "Thumbtack", tone: "thumbtack" },
  { icon: SiTripadvisor, name: "Tripadvisor", tone: "tripadvisor" },
];

const extras: DelawareExtras = {
  kind: "seo",
  pricing: {
    title: "SEO Plans and Pricing for Delaware",
    lead: "Month-to-month SEO plans for Delaware businesses, from Business Profile basics to multi-location growth.",
    compareTitle: "SEO Plans, Line by Line",
    compareLead: "Ranking work, reports and support for each plan.",
    addOnsTitle: "Add More Towns or Technical Work",
    addOnsLead:
      "Extra landing pages, locations and technical fixes, added when you need them.",
    customTitle: "Need rankings in several counties?",
    customText:
      "We'll scope a plan around each town and location you want to win.",
  },
  // Owner's photo (22 Oct); crop keeps the wall sign in frame.
  aboutPhoto: {
    src: "/images/delaware/delaware-digital-marketing-team.webp",
    alt: "Zonic Media's Delaware SEO team reviewing search rankings and organic traffic results together in the office",
    position: "50% 18%",
  },
  // Own pillar colours (owner: a different set on every page).
  pillars: ["#c2410c", "#dbeafe", "#fef3c7", "#14532d"],
  scoreStyle: "columns",
  // "Found everywhere" hub design with this page's content: the directories
  // Google cross-checks.
  platforms: {
    h2: "Accurate Listings on Every Directory Google Reads",
    lead: "Before Google trusts your profile, it compares your details across maps, directories and review sites. We claim and match each listing, giving your Delaware rankings a solid base.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Maps and search",
    rightLabel: "Directories and reviews",
    centerIcon: <FiLink2 aria-hidden="true" />,
    centerTitle: "Your listing",
    centerSub: "identical on every directory",
  },
  aboutTitle: ["Delaware SEO", "Planned Around", "Each County."],
  aboutCard: {
    kicker: "SEO from our Dover office",
    title: "A plan for each county",
    points: [
      "New Castle: Wilmington, Newark and suburbs",
      "Kent: Dover, Smyrna and Milford searches",
      "Sussex: Lewes and the beach towns",
      "Reports on calls, not just rankings",
    ],
    foot: "8 The Green, STE B, Dover, DE 19901",
  },
  features: {
    h2: "How Our Delaware SEO Company Earns Rankings",
    lead: (
      <>
        Keywords, technical health and local trust signals: the three parts of
        every ranking we build. For contractors, see our{" "}
        <Link href="/services/local-seo-for-home-services">
          home service SEO program
        </Link>
        .
      </>
    ),
    items: [
      {
        label: "Keywords & content",
        title: "Target the Searches Buyers Make",
        body: "The wrong keywords waste months. We choose the terms Delaware customers use when they're ready to hire, then give each service and town its own page so Google can match you to those searches.",
        points: [
          {
            t: "Ready-to-hire terms",
            d: "Searches made right before someone calls.",
          },
          { t: "Service pages", d: "A page per service, written to rank." },
          {
            t: "Town pages",
            d: "Dover, Wilmington, Lewes and your other towns.",
          },
          { t: "Monthly tracking", d: "Each target term checked every month." },
        ],
        href: "/services/seo-services",
        link: "See our SEO services",
        ui: "keywords",
      },
      {
        label: "Technical SEO",
        title: "Technical SEO That Clears the Way",
        body: "Slow pages, broken links and missing schema hold good businesses back. We fix the technical side first, so pages load fast on phones and Google reads exactly what you offer.",
        points: [
          { t: "Faster pages", d: "Core Web Vitals met on mobile." },
          { t: "Tidy structure", d: "Clear URLs and internal linking." },
          { t: "Schema markup", d: "Business, service and FAQ data." },
          { t: "Error fixes", d: "Broken links and redirect chains repaired." },
        ],
        href: "/services/delaware/web-design",
        link: "Delaware web design",
        ui: "crawl",
      },
      {
        label: "Citations & reviews",
        title: "Local Signals Google Trusts",
        body: "Google favors businesses whose details match everywhere and whose reviews keep coming. We clean up your listings across the web and keep genuine Delaware reviews flowing in.",
        points: [
          { t: "Matching NAP", d: "Identical details on major directories." },
          { t: "Duplicates gone", d: "Old and incorrect listings cleaned up." },
          { t: "Local mentions", d: "Links from Delaware sites and groups." },
          { t: "Review flow", d: "Requests and replies handled for you." },
        ],
        href: "/local-seo-google-business-optimization",
        link: "Google Business Profile optimization",
        ui: "citations",
      },
    ],
  },
  contact: {
    before: "Ready to Rank",
    after: "Higher Across Delaware?",
    lead: "Send us your business name and target towns. We'll audit your rankings, profile, listings and reviews for free and quote one fixed monthly price.",
  },
  stepLinks: [
    "#de-contact",
    "/local-seo-google-business-optimization",
    "/services/local-seo-packages",
    "#de-contact",
  ],
  noGrow: true,
  // No service named in the heading (owner, 22 Oct).
  reviewsTitle: "Straight From Our Clients",
  // The storefront photo reads as a Business Profile cover on the phone;
  // the wide street photo fills the about box.
  phoneImage: {
    src: "/images/geo/delaware-seo/delaware-main-street-storefront.webp",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(delSeoFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
