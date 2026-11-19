/*
 * FORT MYERS DIGITAL MARKETING — new live page (18 Nov 2026), a city page
 * in the Florida silo under the hub /services/florida/digital-marketing.
 * Built on the shared location template
 * (src/components/rd/delaware/DelawareLanding.tsx) with this page's own UI
 * (flFortMyersUi.tsx). Brief: docs/florida-cities-brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-cities-
 * keywords-2026-11.md): digital marketing fort myers 480 (KD 17) · fort
 * myers digital marketing agency 390 (KD 19) · fort myers digital marketing
 * 320 · fort myers marketing agency 260 (KD 17) · marketing agency fort
 * myers 210 · digital marketing agency fort myers 140 · niche: top-rated
 * contractor digital marketing agency in fort myers fl 90, contractor
 * digital marketing fort myers fl 30, hardscape digital marketing fort
 * myers 30 · digital marketing cape coral 110. Secondary (H3s, FAQs, body
 * only): seo company fort myers 720 · seo fort myers 390 (KD 5) · web
 * design fort myers 320 · ppc fort myers 210 · local seo fort myers 170 ·
 * social media marketing fort myers 170. Search Console: pool and
 * electrician SEO queries for Fort Myers and Cape Coral.
 *
 * Rules: the hub owns the Florida-wide terms; no other city's terms here
 * (Naples is saved for its own page and isn't mentioned). Storm recovery
 * is written about plainly, with no figures. Fresh wording only;
 * company-wide verified numbers only; no Fort Myers office is implied (we
 * serve Lee County from Dover, Delaware).
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
  FiBarChart2,
  FiKey,
  FiLayout,
  FiMapPin,
  FiMessageCircle,
  FiMessageSquare,
  FiStar,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import {
  SiFacebook,
  SiGoogle,
  SiGooglegemini,
  SiGooglemaps,
  SiHouzz,
  SiInstagram,
  SiNextdoor,
  SiOpenai,
} from "react-icons/si";

const PAGE_PATH = "/services/fort-myers/digital-marketing";
const HUB_PATH = "/services/florida/digital-marketing";

const TITLE =
  "Digital Marketing Fort Myers | Lee County Marketing Agency";

const DESCRIPTION =
  "Fort Myers digital marketing agency for Lee County businesses: local SEO, Google Ads, web design and AI search, timed to season and storm repairs.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "digital marketing fort myers",
    "fort myers digital marketing agency",
    "fort myers digital marketing",
    "fort myers marketing agency",
    "marketing agency fort myers",
    "digital marketing agency fort myers",
    "contractor digital marketing fort myers fl",
    "hardscape digital marketing fort myers",
    "digital marketing cape coral",
    "seo company fort myers",
    "seo fort myers",
    "local seo fort myers",
    "web design fort myers",
    "ppc fort myers",
    "social media marketing fort myers",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/fort-myers-digital-marketing-agency.webp",
        width: 1600,
        height: 900,
        alt: "Fort Myers digital marketing campaign screen with the river and a bridge",
      },
    ],
    title: TITLE,
    description:
      "Maps, SEO, ads, websites and AI search for Fort Myers and Cape Coral companies, planned city by city and around the repair work storms leave.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: HUB_PATH },
  { name: "Fort Myers Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in Fort Myers",
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
    name: "Fort Myers",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Fort Myers and Lee County",
  },
};

const FmDmFaqs = [
  {
    question: "How are Fort Myers digital marketing plans priced?",
    answer:
      "Plans cost $297, $950 or $1,500 a month, with no long contract and a 0% markup on the ad budget you set with Google or Meta. Which plan fits depends on your trade, your service area and how busy your season gets, and the free audit spells that out.",
  },
  {
    question: "Does Zonic Media have a Fort Myers office?",
    answer:
      "No. Our base is Dover, Delaware, and Lee County clients meet us over video. Your Map Pack position comes from your own address, service area and reviews, so where your agency sits makes no difference to it.",
  },
  {
    question: "Which Lee County communities do you serve?",
    answer:
      "Fort Myers, Cape Coral, Estero, Bonita Springs, Lehigh Acres, North Fort Myers, Fort Myers Beach, Sanibel, Pine Island and the rest of the county. Every city you serve gets its own targeting, its own page on your site and its own line in the report.",
  },
  {
    question: "Will you handle Fort Myers SEO as well as ads?",
    answer:
      "Yes. Plenty of owners first look for an SEO company in Fort Myers, and we do that work in full: Business Profile fixes, local SEO, page edits and citations. Ads, reviews and your website sit in the same plan, so paid clicks and rankings help each other.",
  },
  {
    question: "How should contractors market during storm recovery?",
    answer:
      "Calmly and honestly. Homeowners rebuilding after a storm want a licensed crew that answers the phone, explains the work and keeps appointments. We keep your hours and services current, publish clear repair pages, ask finished customers for reviews and steer ads toward the repairs people are searching for, with no pressure-sales copy.",
  },
  {
    question: "When should a Fort Myers business get ready for season?",
    answer:
      "Before October. Winter residents return through the fall and spring training fills February and March with visitors, so offers, ads and Google posts need to be running ahead of them. We raise budgets through the winter and use the quieter summer for SEO and site work.",
  },
  {
    question: "Do you offer web design for Fort Myers businesses?",
    answer:
      "Yes. Our builds put the call button and an estimate form with photo upload on every phone screen, add a page for each Lee County city you serve and include a storm notice you can switch on in minutes. A typical build goes live within two to three weeks.",
  },
  {
    question: "Can you help pool and electrical companies in Cape Coral?",
    answer:
      "Yes. Cape Coral is full of backyard pools and newer homes, so pool and electrical contractors have plenty to compete for. We build Cape Coral pages, set the right profile categories and run ads on the jobs you want more of, from heater installs to panel upgrades.",
  },
  {
    question: "How do I get my Fort Myers business named in ChatGPT answers?",
    answer:
      "Give AI assistants consistent facts and clear answers to quote. We match your name, address, phone and services everywhere, put direct answers near the top of your pages, add schema and ask for reviews that name the work and the town, then check ChatGPT, Gemini and Google’s AI Overviews each month.",
  },
];

const fmDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: FmDmFaqs.map((faq) => ({
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
  { icon: SiNextdoor, name: "Nextdoor", tone: "nextdoor" },
  { icon: SiHouzz, name: "Houzz", tone: "houzz" },
];
const hubRight: HubApp[] = [
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiGooglegemini, name: "Gemini", tone: "gemini" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Fort Myers Digital Marketing Agency",
    h1Highlight: "for Lee County Businesses",
    sub: "From canal homes in Cape Coral to new builds in Lehigh Acres, Lee County customers search before they call. Zonic Media puts your business first on Google Maps, in Google Ads and in AI answers, with campaigns timed to season and to storm repairs.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide verified numbers plus a public place count (Lee County has 6 municipalities (leegov.com).)
    // No Fort Myers client results, and no ad-markup stat (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "1,500+",
        label: "Business Profiles optimized nationwide",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Score across our Google reviews",
      },
      {
        icon: <FiKey aria-hidden="true" />,
        num: "100%",
        label: "Of the site, domain and content we build is yours",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "6",
        label: "Cities, towns and villages in Lee County",
      },
    ],
    proof: "",
    cta: "Map Out My Fort Myers Growth",
  },
  about: {
    eyebrow: "Digital marketing in Fort Myers",
    h2Start: "Snowbirds, Storms and Canal Homes.",
    h2Highlight: "One Lee County Plan.",
    leads: [
      <>
        A pool company in Cape Coral, an electrician in Lehigh Acres and a{" "}
        <Link
          href="/services/dental-marketing-agency"
          className="phl-inline-link"
        >
          dental practice
        </Link>{" "}
        near the River District see demand rise and fall in different months. We
        learn how people in your part of Lee County search, then spend where
        they are ready to book.
      </>,
      <>
        Lee County is one of the markets our{" "}
        <Link href={HUB_PATH} className="phl-inline-link">
          Florida digital marketing agency
        </Link>{" "}
        covers with a single in-house team. Working the coast to the north or
        Broward across Alligator Alley too? See{" "}
        <Link
          href="/services/sarasota/digital-marketing"
          className="phl-inline-link"
        >
          digital marketing in Sarasota
        </Link>{" "}
        and our{" "}
        <Link
          href="/services/fort-lauderdale/digital-marketing"
          className="phl-inline-link"
        >
          digital marketing agency in Fort Lauderdale
        </Link>
        .
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Fort Myers Digital Marketing • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Fort Myers Digital Marketing Services, One Team",
    lead: "Local SEO, paid search, websites, social and AI answers for Lee County companies, all measured in calls and booked estimates.",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Fort Myers SEO and Google Maps Visibility",
        desc: "Every Business Profile field filled in, a page per city and new reviews each week, so you climb into the top three from McGregor Boulevard to Del Prado.",
        points: [
          "Categories and services set right",
          "Map positions checked by city",
          "Local links and citations",
        ],
        href: "/services/florida/local-seo",
        link: "Local SEO for Florida businesses",
      },
      {
        tone: "gold",
        icon: <FiTarget aria-hidden="true" />,
        title: "PPC in Fort Myers, Aimed at Your ZIP Codes",
        desc: "Paid search, call-only ads and Local Services Ads shown only in the Lee County areas you serve, and paused when nobody can pick up.",
        points: [
          "Ads split by city and ZIP",
          "Call ads for trade crews",
          "No markup on what you spend",
        ],
        href: "/services/florida/ppc",
        link: "PPC services in Florida",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Web Design in Fort Myers That Books Estimates",
        desc: (
          <>
            Fast mobile pages with tap-to-call, estimate forms and photo
            uploads, built by our{" "}
            <Link href="/services/web-design" className="phl-inline-link">
              website design team
            </Link>
            .
          </>
        ),
        points: [
          "Estimate forms with photos",
          "A page for each city",
          "Storm notice ready to switch on",
        ],
        href: "/services/florida/web-design",
        link: "Florida website builds",
      },
      {
        tone: "gold",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "Social Media Marketing for Lee County Brands",
        desc: "Project photos, before-and-after posts and Nextdoor updates that keep neighbors seeing your name between jobs.",
        points: [
          "A monthly content calendar",
          "Real job photos",
          "Quick replies to messages",
        ],
        href: "#de-contact",
        link: "Get a social media plan",
      },
      {
        tone: "blue",
        icon: <FiMessageCircle aria-hidden="true" />,
        title: "AI Search for Fort Myers Companies",
        desc: "Clear answers on your pages, schema markup and the same details on every listing, so AI assistants can recommend you when someone in Lee County asks.",
        points: [
          "Question-and-answer sections",
          "Schema on service pages",
          "Monthly checks in ChatGPT and Gemini",
        ],
        href: "/services/ai-seo-services",
        link: "AI search optimization services",
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Reviews, Listings and Suspension Help",
        desc: "Texts that ask happy customers for a Google review, replies written in your voice and help getting a suspended listing back, with 900+ reinstated so far.",
        points: [
          "Review texts after each job",
          "Replies ready for approval",
          "Reinstatement support",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Google Business Profile reinstatement",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Find Out Which Lee County Cities Bring Jobs",
    leads: [
      <>
        Cape Coral might fill your schedule while Lehigh Acres clicks rarely
        turn into work. Your report sorts every call, form and message by city
        and stage, so spending follows the towns that hire you.
      </>,
      <>
        Run a specialist crew? See our{" "}
        <Link
          href="/services/pool-service-marketing-agency"
          className="phl-inline-link"
        >
          pool service marketing
        </Link>
        ,{" "}
        <Link
          href="/services/electrician-marketing-agency"
          className="phl-inline-link"
        >
          electrician marketing
        </Link>{" "}
        and{" "}
        <Link
          href="/services/landscaping-marketing-agency"
          className="phl-inline-link"
        >
          hardscape and landscaping marketing
        </Link>{" "}
        programs.
      </>,
    ],
    cta: "Get My Lee County Lead Report",
    // Sample board UI, not client data.
    console: {
      title: "Lee County lead board",
      tag: "Sample board",
      metrics: [
        { strong: "5", label: "Cities on the board" },
        { strong: "Daily", label: "Lead status updates" },
        { strong: "Top 3", label: "Map goal per city" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "Launching Your Fort Myers Marketing, Step by Step",
    steps: [
      {
        tag: "Week 1",
        title: "Check Calls, Listings and Rivals",
        desc: "A look at your profile, website, ads and closest competitors, plus a test of how calls are handled after hours.",
      },
      {
        tag: "Weeks 2–4",
        title: "Match Services to Cities and Seasons",
        desc: "Each service gets the Lee County cities where it sells best, with budgets set for season and the storm months.",
      },
      {
        tag: "Weekly",
        title: "Go Live and Follow Up on Every Lead",
        desc: "Ads, posts, review texts and estimate reminders switch on with call tracking, and Map positions get checked weekly.",
        chips: [
          "Search terms trimmed",
          "Estimate reminders sent",
          "Google posts live",
        ],
      },
      {
        tag: "Monthly",
        title: "Report Jobs by City and Source",
        desc: "A short report shows calls, estimates and booked jobs by city and channel, and next month’s spend follows them.",
        chips: ["City report", "Source mix", "Next month’s plan"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My Fort Myers Audit",
  },
  showcase: undefined,
  compare: {
    h2: "A Lee County Plan vs. Blanket Marketing",
    lead: "Where local contractors lose leads, and how we plug the gaps.",
    themTitle: "Blanket Marketing",
    themSub: "Why estimates dry up",
    them: [
      "One ad set for all of Lee County",
      "Calls missed after 5 PM",
      "Estimates never followed up",
      "The same campaign in July and January",
      "Contracts that lock you in",
    ],
    usTitle: "Our Fort Myers Plan",
    usSub: "Judged by booked jobs",
    us: [
      "Targeting city by city",
      "Missed calls get a text back",
      "Reminders on every open estimate",
      "Budgets that follow season and storms",
      "Month to month, leave anytime",
    ],
    scoreTitle: "Sample Fort Myers Scorecard",
    scoreSub: "An illustration of four things our audit measures",
    scoreRows: [
      { label: "City page coverage", before: 20, after: 86 },
      { label: "Estimate follow-up", before: 26, after: 92 },
      { label: "Storm-season readiness", before: 34, after: 84 },
      { label: "AI answer mentions", before: 10, after: 66 },
    ],
  },
  why: {
    h2: "Choosing a Fort Myers Marketing Agency",
    lead: "Looking for a top-rated contractor digital marketing agency in Fort Myers? Ask any shortlist these three questions.",
    cards: [
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Can you show booked jobs?",
        desc: "We report calls, estimates and jobs by city every month.",
      },
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "Who answers my questions?",
        desc: "The same in-house team that runs your campaigns.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Am I locked in?",
        desc: "No. Plans run month to month, and ad spend carries no markup.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "See Where Your Fort Myers Leads Slip Away",
      p: "We look over your profile, site, ads, call handling and local rivals, then send a city-by-city plan for the coming season. No charge and no contract.",
      checks: [
        "Missed calls spotted",
        "Local rivals compared",
        "City page gaps listed",
        "A season and storm plan",
      ],
      cta: "Request My Fort Myers Audit",
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
    chipsLabel: "Industries we grow in Fort Myers",
    chips: [
      "Roofing & Lanai Screens",
      "Pool Service & Repair",
      "Electricians",
      "Hardscape & Pavers",
      "Impact Windows",
      "HVAC",
      "Dentists & Med Spas",
      "Property Management",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Fort Myers Digital Marketing, Answered",
    lead: "Pricing, coverage, season, storm recovery and AI search, in plain words.",
    cta: "",
    items: FmDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Get a Free Fort Myers Marketing Plan",
    lead: "Tell us about your business and the Lee County cities you serve, and we’ll send back an audit with a plan.",
    formType: "fort-myers-digital-marketing",
    badge: "Free Audit",
    title: "Your Free Fort Myers Growth Audit",
    subtitle: "Sixty seconds to fill in, with nothing to sign.",
    submitText: "Request My Audit",
    messageLabel: "Anything we should know?",
    messagePlaceholder:
      "Your trade, the cities you cover from Cape Coral to Bonita Springs, current marketing and peak months",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-fort-myers",
  heroChips: {
    label: "Lee County municipalities",
    items: ["Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Sanibel", "Fort Myers Beach"],
  },
  aboutTitle: ["Snowbirds, Storms", "and Canal Homes.", "One Lee County Plan."],
  // Owner photo (19 Nov 2026); the crop keeps the wall sign in view on
  // phones, where the box is narrower than the photo.
  aboutPhoto: {
    src: "/images/florida/fort-myers-digital-marketing-agency.webp",
    alt: "Fort Myers digital marketing campaign screen with the river and a bridge",
    position: "left top",
  },
  aboutCard: {
    kicker: "Made for Lee County",
    title: "What we run each month",
    points: [
      "Google Maps rankings city by city",
      "Search and Local Services Ads",
      "Estimate follow-ups and reviews",
      "A website built to book jobs",
    ],
    foot: "Run from Dover, DE, with video check-ins",
  },
  // Fort Myers palette: royal poinciana rust, mangrove mint, evening lilac,
  // deep pine.
  pillars: ["#9a3412", "#dcfce7", "#e0e7ff", "#052e16"],
  features: {
    h2: "Built for How Fort Myers Hires",
    lead: (
      <>
        Repairs that run for months, estimates that need chasing and five cities
        with their own searches. Here’s what we do about each one.
      </>
    ),
    items: [
      {
        label: "Storm recovery",
        title: "Storm Recovery Demand, Tracked Month by Month",
        body: (
          <>
            Since Hurricane Ian, many Lee County homeowners have repaired in
            stages: roofs first, then lanai screens, pools and yards. We follow
            which repairs are rising near you, move your{" "}
            <Link href="/services/google-ads" className="phl-inline-link">
              Google Ads management
            </Link>{" "}
            and Google posts toward them, and ease off as the work winds down.
          </>
        ),
        points: [
          { t: "Repair search tracking", d: "By service, month by month." },
          { t: "Ads that follow demand", d: "Budget moves as it shifts." },
          { t: "Calm, factual messaging", d: "No pressure tactics." },
          { t: "Proof of licensed work", d: "Photos, permits and reviews." },
        ],
        href: "/services/roofing-marketing-agency",
        link: "Marketing for roofing contractors",
        ui: "city-1",
      },
      {
        label: "Estimates",
        title: "Contractor Estimates That Turn Into Booked Work",
        body: (
          <>
            Contractor digital marketing in Fort Myers only pays off when leads
            become signed jobs. Every inquiry moves from inspection to estimate
            to booked, with reminder texts and photo recaps before a quote goes
            cold. It suits{" "}
            <Link
              href="/services/window-and-door-marketing-agency"
              className="phl-inline-link"
            >
              window and door installers
            </Link>{" "}
            and{" "}
            <Link
              href="/services/hvac-marketing-agency/florida"
              className="phl-inline-link"
            >
              Florida HVAC contractors
            </Link>{" "}
            as well as remodelers.
          </>
        ),
        points: [
          { t: "Three-stage pipeline", d: "Inspection, estimate, booked." },
          { t: "Reminder texts", d: "Sent before quotes go cold." },
          { t: "Missed-call text-back", d: "Every caller hears back." },
          { t: "Source on every job", d: "See which ads sign work." },
        ],
        href: "/services/general-contractor-marketing-agency",
        link: "Marketing for general contractors",
        ui: "city-2",
      },
      {
        label: "Service areas",
        title: "A Page for Each Lee County City You Serve",
        body: (
          <>
            Cape Coral owners ask about canal-front pools and docks, Estero and
            Bonita Springs residents look for help near their communities, and
            Lehigh Acres has streets of newer homes. Each city gets its own page
            with local photos, reviews and answers, tied to your{" "}
            <Link
              href="/local-seo-google-business-optimization"
              className="phl-inline-link"
            >
              Google Business Profile optimization
            </Link>
            .
          </>
        ),
        points: [
          { t: "One page per city", d: "Written, not copied." },
          { t: "Local proof", d: "Reviews from that city." },
          { t: "City FAQs", d: "Answers AI tools can quote." },
          { t: "Rank checks per city", d: "Each page tracked." },
        ],
        href: "/services/florida/web-design",
        link: "Web design for Florida businesses",
        ui: "city-3",
      },
    ],
  },
  platforms: {
    h2: "On the Apps Lee County Checks Before Hiring",
    lead: "Homeowners compare contractors on Google Maps, ask their neighborhood on Nextdoor or Facebook, browse project photos on Houzz and Instagram, and more often ask ChatGPT who to hire. We make sure each app shows the same hours, photos and reviews.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Where homeowners compare",
    rightLabel: "Social feeds and AI tools",
    centerIcon: <FiTool aria-hidden="true" />,
    centerTitle: "Your Fort Myers business",
    centerSub: "same facts on every app",
  },
  pricing: {
    title: "Digital Marketing Plans and Prices in Fort Myers",
    lead: "Month-to-month plans for Lee County businesses, from Google Maps essentials to full ads, SEO and social.",
    compareTitle: "Plan by Plan for Fort Myers Companies",
    compareLead: "Every feature, side by side.",
    addOnsTitle: "Add-Ons for Busy Lee County Seasons",
    addOnsLead:
      "Add cities, landing pages or storm-season campaigns when you need them.",
    customTitle: "Crews in several Lee County cities?",
    customText: "We’ll plan each location and the cities it covers.",
  },
  phone: "city",
  darkUi: "city",
  scoreStyle: "city",
  noGrow: true,
  reviewsTitle: "What Owners Write About Zonic Media",
  contact: {
    before: "Book More",
    after: "Fort Myers Jobs",
    lead: "Tell us your trade and the Lee County cities you cover. We’ll review your profile, ads and website at no cost.",
  },
  stepLinks: [
    "#de-contact",
    "/services/florida/local-seo",
    "/services/florida/ppc",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fmDmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
