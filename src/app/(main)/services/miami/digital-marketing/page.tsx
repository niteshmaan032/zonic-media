/*
 * MIAMI DIGITAL MARKETING — new live page (18 Nov 2026), a city page in the
 * Florida silo under the hub /services/florida/digital-marketing. Built on
 * the location template (src/components/rd/delaware/DelawareLanding.tsx)
 * with this page's own UI (flMiamiUi.tsx). Brief: docs/florida-cities-
 * brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-cities-
 * keywords-2026-11.md): digital marketing agency miami 1,300 (KD 32) ·
 * miami digital marketing agency 880 (KD 31, ↑25%) · marketing agency
 * miami 720 (KD 20, ↑22%) · digital marketing miami 590 · digital
 * marketing company miami 720 · digital marketing services miami 170
 * (↑176%). Secondary, in H2/H3, FAQs and body only: seo miami 1,600 ·
 * local seo miami 1,000 · web design miami 1,300 · social media marketing
 * miami 320 (↑111%) · ppc miami 140 · google ads agency miami 90.
 *
 * Rules: the hub owns "florida" / "south florida digital marketing
 * agency"; Fort Lauderdale owns Broward. Customers search in English and
 * Spanish, but the page never claims Spanish content or Spanish campaigns
 * (owner hasn't confirmed). No Miami office: served from Dover, Delaware.
 * Company-wide verified numbers only; no aggregateRating.
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
  FiAnchor,
  FiBarChart2,
  FiInstagram,
  FiLayers,
  FiLayout,
  FiMapPin,
  FiMessageSquare,
  FiSearch,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import {
  SiApple,
  SiFacebook,
  SiGoogle,
  SiGooglemaps,
  SiInstagram,
  SiOpenai,
  SiWhatsapp,
  SiYelp,
} from "react-icons/si";

const PAGE_PATH = "/services/miami/digital-marketing";
const HUB_PATH = "/services/florida/digital-marketing";

const TITLE = "Miami Digital Marketing Agency | Marketing Agency in Miami";

const DESCRIPTION =
  "Digital marketing agency in Miami for local businesses: Google Maps, Google Ads, Instagram and AI search, aimed at Brickell, Doral, Hialeah, Kendall and beyond.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "digital marketing agency miami",
    "miami digital marketing agency",
    "marketing agency miami",
    "digital marketing miami",
    "digital marketing company miami",
    "digital marketing services miami",
    "social media marketing miami",
    "local seo miami",
    "seo miami",
    "ppc miami",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/miami-digital-marketing-agency.webp",
        width: 1600,
        height: 900,
        alt: "Miami digital marketing performance screen with a lifeguard tower print and the waterfront skyline",
      },
    ],
    title: TITLE,
    description:
      "Google Maps, Google Ads, Instagram and AI search for Miami businesses, planned around each neighborhood's busy hours.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: HUB_PATH },
  { name: "Miami Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Agency in Miami",
  serviceType: "Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description: DESCRIPTION,
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "City",
    name: "Miami",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Miami and Miami-Dade County",
  },
};

const MiamiDmFaqs = [
  {
    question: "What does digital marketing in Miami cost per month?",
    answer:
      "Our plans are $297, $950 or $1,500 a month, with no long contract. Your ad budget is billed to you directly by Google or Meta, and we add nothing on top of it. The free audit tells you which plan fits your services, your neighborhoods and how crowded your field is.",
  },
  {
    question: "Do Miami customers search in Spanish as well as English?",
    answer:
      "Many do, and plenty switch between the two depending on what they need. Our keyword research compares English and Spanish demand for each of your services and areas, so you can see where each language matters before you decide how to serve it.",
  },
  {
    question: "Which parts of Miami-Dade do you cover?",
    answer:
      "The whole county: Aventura and North Miami, Brickell, Downtown, Wynwood, Little Havana, Coral Gables, Coconut Grove, Doral, Hialeah, Kendall, Miami Beach and down to Homestead. Campaigns target only the neighborhoods and ZIP codes you actually serve.",
  },
  {
    question: "Is Zonic Media based in Miami?",
    answer:
      "No. We are a remote, in-house team based in Dover, Delaware, and we meet Miami clients over video. Rankings, ads and websites depend on consistent work rather than a street address in town, and each month you get a written report of what changed and what it brought in.",
  },
  {
    question: "Can social media marketing in Miami bring in real leads?",
    answer:
      "Yes, when it is measured by leads. We plan Instagram and Facebook posts, Reels and local ads around your services, then track the messages they start and which of those turn into bookings, so social is judged on jobs instead of likes.",
  },
  {
    question: "Should a new Miami business start with SEO or Google Ads?",
    answer:
      "Google Ads can put you in front of buyers within days and show which searches are worth paying for. SEO in Miami builds more slowly but keeps Map Pack and organic calls arriving without paying per click. Most owners start both on a small scale, then lean toward whichever books more work.",
  },
  {
    question: "When are the busiest marketing months in Miami?",
    answer:
      "For many businesses it is winter, when seasonal residents and visitors arrive from October through April and Art Basel fills the city in December. Summer brings hurricane season and steady demand for AC, roofing and pool work. We plan budgets and posts around your own peak months.",
  },
  {
    question: "How can my Miami business get recommended by ChatGPT?",
    answer:
      "ChatGPT, Gemini and Google’s AI Overviews tend to recommend businesses they can verify. We make your name, services and hours identical across your site, Google profile and listings, publish pages that answer the questions Miami customers ask, add schema and review your AI mentions monthly.",
  },
  {
    question: "What if Google suspends my Business Profile?",
    answer:
      "Hold off on making a new listing; a second profile usually deepens the problem. Getting suspended profiles back is our specialty, with 900+ reinstated so far, and once yours returns we keep every detail inside Google’s guidelines to protect it.",
  },
];

const miamiDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: MiamiDmFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/* ---------------------------------------------------------------- content */

// The owner's photo fills the about box (extras.aboutPhoto); the
// collage slots aren't shown on this layout.
const NO_PHOTO = { src: "", alt: "" };

const hubLeft: HubApp[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: SiYelp, name: "Yelp", tone: "yelp" },
];
const hubRight: HubApp[] = [
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiWhatsapp, name: "WhatsApp", tone: "emerald" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Miami Digital Marketing Agency",
    h1Highlight: "for Every Corner of Miami-Dade",
    sub: "More calls, messages and booked jobs from people searching near you. Our team runs your Google Maps profile, Google Ads, Instagram and AI search as one program, tuned to the streets you serve, from Brickell and Coral Gables to Doral, Hialeah and Kendall.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide verified numbers plus a public place count (Miami-Dade has 34 municipalities (miamidade.gov).)
    // No Miami client results, and no ad-markup stat (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiLayers aria-hidden="true" />,
        num: "20+",
        label: "Industries we market every month",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <FiSearch aria-hidden="true" />,
        num: "Free",
        label: "Audit of your marketing before you pick a plan",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "34",
        label: "Cities, towns and villages in Miami-Dade",
      },
    ],
    proof: "",
    cta: "Request My Miami Audit",
  },
  about: {
    eyebrow: "Digital marketing in Miami",
    h2Start: "Miami Changes Block by Block.",
    h2Highlight: "Your Plan Should Too.",
    leads: [
      <>
        An immigration lawyer near Little Havana, a med spa in Brickell and a
        landscaper in Pinecrest win customers in very different ways. We start
        with how your buyers search, in English or Spanish, on Google, Maps,
        Instagram or ChatGPT, then put the budget where they are ready to call.
      </>,
      <>
        Every channel sits with the same in-house team, and results come back as
        calls, messages and booked jobs. Serving more of the state? Visit our{" "}
        <Link href={HUB_PATH} className="phl-inline-link">
          Florida digital marketing agency
        </Link>{" "}
        page. Want Map Pack rankings first? Start with{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="phl-inline-link"
        >
          Google Business Profile optimization
        </Link>
        .
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Miami Digital Marketing Agency • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Digital Marketing Services in Miami, Run by One Team",
    lead: (
      <>
        Search ads, Map Pack work, social media marketing, AI visibility,{" "}
        <Link href="/services/web-design" className="phl-inline-link">
          website design services
        </Link>{" "}
        and reviews for Miami companies, each one feeding the next so fewer
        leads slip away.
      </>
    ),
    cards: [
      {
        tone: "blue",
        icon: <FiTarget aria-hidden="true" />,
        title: "Miami PPC and Google Ads by Neighborhood",
        desc: "Search and Local Services campaigns aimed at the ZIP codes you serve, with ads scheduled for the hours each area searches most.",
        points: [
          "Ad groups by neighborhood",
          "Schedules set hour by hour",
          "Nothing added to ad spend",
        ],
        href: "/services/florida/ppc",
        link: "Google Ads management in Florida",
      },
      {
        tone: "gold",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Local SEO in Miami’s Map Pack",
        desc: "A complete Business Profile, location pages and a steady flow of reviews that move you toward the top three on Google Maps near your customers.",
        points: [
          "Profile updates every week",
          "Rank grids for each area",
          "Location pages that convert",
        ],
        href: "/services/florida/local-seo",
        link: "Local SEO for Florida businesses",
      },
      {
        tone: "blue",
        icon: <FiInstagram aria-hidden="true" />,
        title: "Social Media Marketing That Starts Chats",
        desc: "Instagram and Facebook posts, Reels and local ads that fill your inbox with questions, with each chat followed through to a booking.",
        points: [
          "Reels and posts planned monthly",
          "Ads shown to nearby followers",
          "Messages tracked to bookings",
        ],
        href: "#de-contact",
        link: "Ask about social media",
      },
      {
        tone: "gold",
        icon: <FiLayout aria-hidden="true" />,
        title: "Miami Web Design Made for Phones",
        desc: (
          <>
            Fast pages with tap-to-call, booking and a page for each service and
            area. Plumbers can start with our{" "}
            <Link
              href="/services/plumbing-website-design"
              className="phl-inline-link"
            >
              plumbing website design
            </Link>
            .
          </>
        ),
        points: [
          "Built mobile-first",
          "Booking and click-to-call",
          "Launched in 2–3 weeks",
        ],
        href: "/services/florida/web-design",
        link: "Web design for Florida businesses",
      },
      {
        tone: "blue",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "Found in ChatGPT and AI Overviews",
        desc: "Clear answers on your site, schema and matching facts across listings, so assistants name you when someone in Miami asks who to hire.",
        points: [
          "Answer-led service pages",
          "Structured data added",
          "Monthly AI mention review",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Reviews, Replies and Profile Protection",
        desc: "A review request after every job, owner replies written in your voice and quick help if Google ever suspends your profile.",
        points: [
          "Review asks after every job",
          "Owner replies written for you",
          "Fast suspension recovery",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Business Profile reinstatement",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Know Which Miami Neighborhoods Send You Work",
    leads: [
      <>
        Calls from Coconut Grove might book more often than clicks from
        Aventura. Your report splits calls, messages and Map Pack positions by
        neighborhood, so spending moves toward the parts of the county that turn
        into jobs.
      </>,
      <>
        Work in a specialized field? We also run{" "}
        <Link
          href="/services/law-firm-marketing-agency"
          className="phl-inline-link"
        >
          law firm marketing
        </Link>
        ,{" "}
        <Link
          href="/services/dental-marketing-agency"
          className="phl-inline-link"
        >
          dental marketing
        </Link>
        ,{" "}
        <Link
          href="/services/chiropractic-marketing-agency"
          className="phl-inline-link"
        >
          chiropractic marketing
        </Link>{" "}
        and{" "}
        <Link
          href="/services/pool-service-marketing-agency"
          className="phl-inline-link"
        >
          pool service marketing
        </Link>{" "}
        programs, and our{" "}
        <Link
          href="/services/fort-lauderdale/digital-marketing"
          className="phl-inline-link"
        >
          Fort Lauderdale digital marketing
        </Link>{" "}
        page covers Broward County.
      </>,
    ],
    cta: "Get My Miami Neighborhood Report",
    // Sample report UI, not client data.
    console: {
      title: "Miami leads by neighborhood",
      tag: "Sample report",
      metrics: [
        { strong: "6", label: "Neighborhood groups tracked" },
        { strong: "Top 3", label: "Map Pack goal in each" },
        { strong: "Weekly", label: "Lead and rank check" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "From First Call to a Live Miami Campaign",
    steps: [
      {
        tag: "Week 1",
        title: "Audit What Miami Sees Today",
        desc: "We review your ads, Business Profile, website, social pages and AI mentions against nearby competitors, then show where calls are slipping away.",
      },
      {
        tag: "Weeks 2–4",
        title: "Build Your Neighborhood Plan",
        desc: "Areas, hours, channels and offers laid out in one plan, with ad groups, profile fixes, posts and pages scheduled in order of impact.",
      },
      {
        tag: "Weekly",
        title: "Go Live and Adjust Weekly",
        desc: "Campaigns go live with call, form and message tracking. Each week we trim search terms, shift ad hours, publish posts and answer new reviews.",
        chips: ["Ad hours shifted", "Reels published", "Reviews answered"],
      },
      {
        tag: "Monthly",
        title: "Review Leads by Area and Channel",
        desc: "A short monthly report shows which neighborhoods and channels brought booked work, and what we will change next month.",
        chips: ["Area breakdown", "Channel mix", "Next month’s changes"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My Miami Marketing Plan",
  },
  showcase: undefined,
  compare: {
    h2: "A Joined-Up Plan vs. Piecemeal Marketing",
    lead: "Where Miami marketing budgets usually leak, and how we plug each gap.",
    themTitle: "Piecemeal Marketing",
    themSub: "Why leads go missing",
    them: [
      "Ads, social and SEO with different vendors",
      "One campaign running all day, citywide",
      "Instagram judged on likes, not bookings",
      "Reports nobody can tie to revenue",
      "A year-long contract on day one",
    ],
    usTitle: "Our Miami Program",
    usSub: "One plan, judged on booked work",
    us: [
      "Every channel handled by one team",
      "Ads aimed by neighborhood and hour",
      "Social measured in messages and jobs",
      "Each lead traced to its source",
      "No long contract, cancel any month",
    ],
    scoreTitle: "Sample Miami Scorecard",
    scoreSub: "Four audit signals, before and after (illustration)",
    scoreRows: [
      { label: "Neighborhood reach", before: 24, after: 84 },
      { label: "Ad timing", before: 30, after: 90 },
      { label: "Social to lead", before: 18, after: 72 },
      { label: "AI mentions", before: 12, after: 66 },
    ],
  },
  why: {
    h2: "Why Miami Businesses Choose Zonic Media",
    lead: "What you get from a digital marketing company in Miami that is measured on booked work, not clicks.",
    cards: [
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "Every channel under one roof",
        desc: "Ads, Maps, social, AI search and web, all in-house.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Free to leave any month",
        desc: "No lock-in, and no markup on what you spend on ads.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Results by neighborhood",
        desc: "Calls, chats and bookings for each area, every month.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Find Out Where Miami Customers Can’t See You",
      p: "We look at your ads, Google profile, Instagram, website and the competitors around you, and you get a 90-day plan back. It’s free, and you won’t sign anything.",
      checks: [
        "Wasted ad hours flagged",
        "Neighborhood gaps mapped",
        "Listing risks spotted",
        "Your next 90 days planned",
      ],
      cta: "Claim My Free Miami Audit",
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
    chipsLabel: "Miami industries we work with",
    chips: [
      "Law Firms",
      "Dentists & Med Spas",
      "Chiropractors",
      "Landscaping & Pools",
      "HVAC & Plumbing",
      "Real Estate",
      "Restaurants & Hospitality",
      "Home Services",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Miami Digital Marketing FAQs",
    lead: "Short answers on cost, coverage, language, timing and AI search.",
    cta: "",
    items: MiamiDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Miami Marketing Audit",
    lead: "Share a few details and we’ll send an audit and a plan for the Miami neighborhoods you serve.",
    formType: "miami-digital-marketing",
    badge: "Free Audit",
    title: "Your Free Miami Audit Starts Here",
    subtitle: "Takes about a minute, with no contract afterwards.",
    submitText: "Send My Audit Request",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "What you offer, which parts of Miami you serve and the marketing you do now",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-miami",
  heroChips: {
    label: "Miami-Dade municipalities",
    items: ["Hialeah", "Coral Gables", "Doral", "Homestead", "Miami Beach"],
    more: true,
  },
  aboutTitle: ["Miami Changes", "Block by Block.", "Your Plan Should Too."],
  // Owner photo (19 Nov 2026); the crop keeps the wall sign in view on
  // phones, where the box is narrower than the photo.
  aboutPhoto: {
    src: "/images/florida/miami-digital-marketing-agency.webp",
    alt: "Miami digital marketing performance screen with a lifeguard tower print and the waterfront skyline",
    position: "center top",
  },
  aboutCard: {
    kicker: "Built for Miami-Dade",
    title: "Your Miami program",
    points: [
      "Google Ads by neighborhood and hour",
      "Map Pack rankings across the county",
      "Instagram and Facebook that start chats",
      "AI answers that name your business",
    ],
    foot: "Run by our in-house team from Dover, DE",
  },
  // Miami palette: Biscayne teal, flamingo pink, deco lavender, deep wine.
  pillars: ["#0f766e", "#fecaca", "#ede9fe", "#4c0519"],
  features: {
    h2: "What Makes Marketing in Miami Different",
    lead: (
      <>
        Busy hours that shift from one neighborhood to the next, two languages
        in the search bar and customers who message before they call. Each one
        shapes the plan below.
      </>
    ),
    items: [
      {
        label: "Ad scheduling",
        title: "Ads Timed to Each Neighborhood’s Busy Hours",
        body: (
          <>
            Search timing changes across the city: an office crowd in Brickell,
            families in Kendall and late-night diners on Miami Beach rarely look
            for help at the same hour. We map when each area searches for your
            service and run{" "}
            <Link href="/services/google-ads" className="phl-inline-link">
              Google Ads management
            </Link>{" "}
            around those windows rather than all day.
          </>
        ),
        points: [
          { t: "Hour-by-hour patterns", d: "Measured for every area." },
          { t: "Neighborhood ad groups", d: "Brickell, Doral, Kendall, more." },
          { t: "Quiet hours paused", d: "Less spend wasted overnight." },
          { t: "Weekly schedule tune-ups", d: "Adjusted as habits shift." },
        ],
        href: "/services/florida/ppc",
        link: "See PPC management in Florida",
        ui: "city-1",
      },
      {
        label: "Two languages",
        title: "English and Spanish Searches, Measured Side by Side",
        body: "Miami customers search in English, in Spanish and often in both. For every service we compare how demand splits between the two languages and across neighborhoods, so you know where each audience is and can choose how to reach it.",
        points: [
          { t: "Paired keyword research", d: "Each service checked in both." },
          { t: "Language mix by area", d: "Compared across neighborhoods." },
          { t: "Search terms reviewed", d: "Real queries read, not guessed." },
          { t: "Plain findings", d: "Clear next steps in your report." },
        ],
        href: "/services/florida/local-seo",
        link: "See Florida local SEO",
        ui: "city-2",
      },
      {
        label: "Social leads",
        title: "Instagram and Facebook Posts That Turn Into Bookings",
        body: "Plenty of Miami customers find a landscaper, a clinic or a contractor on Instagram and send a message before they ever call. We plan posts, Reels and local ads around your best work and the areas you serve, then track which posts start chats that end in a booking.",
        points: [
          { t: "Monthly content plan", d: "Posts and Reels mapped ahead." },
          { t: "Local follower ads", d: "Shown near the jobs you want." },
          { t: "Message tracking", d: "Each chat traced to its post." },
          { t: "Booked jobs counted", d: "Social judged on real work." },
        ],
        href: "/services/landscaping-marketing-agency",
        link: "See landscaping marketing",
        ui: "city-3",
      },
    ],
  },
  platforms: {
    h2: "Where Miami Customers Look You Up",
    lead: "People in Miami compare you on Google and Apple Maps, check your Instagram, ask questions on WhatsApp and increasingly let ChatGPT pick for them. Your hours, photos, offers and contact buttons stay current on every one.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Search and maps",
    rightLabel: "Social, chat and AI",
    centerIcon: <FiAnchor aria-hidden="true" />,
    centerTitle: "Your Miami business",
    centerSub: "easy to reach anywhere",
  },
  pricing: {
    title: "Digital Marketing Plans for Miami Businesses",
    lead: "Month-to-month plans, from Google Maps essentials to a full ads, SEO and social program for Miami.",
    compareTitle: "Compare the Miami Plans",
    compareLead: "Side by side, feature by feature.",
    addOnsTitle: "Extras for Busy Miami Businesses",
    addOnsLead: "Add neighborhoods, landing pages or campaigns as you grow.",
    customTitle: "More than one Miami location?",
    customText: "We’ll plan each location and the neighborhoods around it.",
  },
  phone: "city",
  darkUi: "city",
  scoreStyle: "city",
  noGrow: true,
  reviewsTitle: "What Clients Say About Working With Us",
  contact: {
    before: "Ready for More",
    after: "Miami Customers?",
    lead: "Tell us what you sell and where in Miami you work. We’ll review your ads, Google profile, social pages and website at no cost.",
  },
  stepLinks: [
    "#de-contact",
    "/services/florida/ppc",
    "/services/florida/local-seo",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(miamiDmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
