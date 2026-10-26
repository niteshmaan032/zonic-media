/*
 * REDESIGN DRAFT (22 Oct 2026) of /services/delaware/digital-marketing, in
 * the Dallas–Fort Worth layout (src/components/rd/delaware/DelawareLanding
 * .tsx). Copy re-optimized on 24 Oct 2026 (docs/content-optimization-brief.md):
 * fresh wording, no text shared with the live page or the sibling drafts,
 * verified numbers only. Noindex; canonical and schema URLs point at the live
 * page so the file can replace it as-is.
 */

import type { Metadata } from "next";
import Link from "next/link";
import type { LocalRankRow } from "@/app/components/LocalRankTracker";
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
  FiMapPin,
  FiSend,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import {
  SiApple,
  SiFacebook,
  SiGoogle,
  SiGooglegemini,
  SiGooglemaps,
  SiInstagram,
  SiOpenai,
  SiYelp,
} from "react-icons/si";

const PAGE_PATH = "/services/delaware/digital-marketing";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency in Delaware | Zonic Media, Dover DE",
  },
  description:
    "Delaware digital marketing agency based in Dover. Local SEO, Google Ads, social media and web design for businesses in New Castle, Kent and Sussex County.",
  keywords: [
    "digital marketing agency in delaware",
    "digital marketing agency delaware",
    "digital marketing delaware",
    "delaware digital marketing agency",
    "marketing agency delaware",
    "delaware marketing agency",
    "full service marketing agency delaware",
    "advertising agencies in delaware",
    "social media marketing delaware",
    "seo website marketing agency in delaware",
    "digital marketing services new castle county",
    "digital marketing agency in new castle county",
    "digital marketing agency in sussex county",
    "digital marketing agency dover de",
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
    title: "Digital Marketing Agency in Delaware | Zonic Media",
    description:
      "Dover-based digital marketing agency for Delaware businesses: local SEO, Google Ads, social media, AI search and websites, reported in calls and leads.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Delaware Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Agency in Delaware",
  serviceType: "Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Full-service digital marketing for Delaware businesses: local SEO and Google Business Profile work, Google Ads, social media, email, AI search visibility and conversion-focused websites, reported in calls and leads.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    url: "https://www.zonicllc.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green, STE B",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US",
    },
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "State",
    name: "Delaware",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Delaware",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Delaware Digital Marketing Services",
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

/* FAQ (24 Oct 2026): questions built from what Delaware owners search
   before hiring an agency; answers lead with the answer, no estimates. */
const DelDigitalFaqs = [
  {
    question: "What does a digital marketing agency in Delaware do?",
    answer:
      "It brings customers to your business and turns them into calls and form fills. For a Delaware company that means ranking on Google Search and Maps, showing up in AI answers, running paid ads that earn their keep and fixing the pages where visitors drop off, with a monthly report that shows where each lead came from.",
  },
  {
    question: "How much do your digital marketing plans cost?",
    answer:
      "Plans run $297, $750 or $1,500 a month, month to month with no long-term contract. Which fits best comes down to the channels you need and how competitive your towns are. Ad spend is separate and paid by you straight to Google or Meta, with 0% markup. Your free audit tells you which plan makes sense.",
  },
  {
    question: "How soon will I see results from digital marketing?",
    answer:
      "Google Ads can start producing calls soon after launch, once tracking and landing pages are ready. Local SEO and content build month by month as your profile, pages and reviews gain strength. Running both lets you book work now while the organic side grows, and your monthly report shows the trend either way.",
  },
  {
    question: "Should a Delaware business invest in SEO or Google Ads first?",
    answer:
      "Most do best with both. Ads buy visibility today and reveal which services and messages sell. Ranking work on your site and Business Profile earns map and organic spots that keep bringing calls without a cost per click. We often lead with ads to learn quickly, then lean on organic as rankings climb.",
  },
  {
    question:
      "Do you work with businesses in Sussex County and New Castle County?",
    answer:
      "Yes. From our Dover office we market businesses in all three counties, from Wilmington, Newark and Middletown to Smyrna, Milford, Lewes, Rehoboth Beach and Seaford. We also work with companies across the Mid-Atlantic, including Philadelphia. Audits, strategy calls and reporting all work remotely, or you can drop by our Dover office.",
  },
  {
    question: "How do I choose the right marketing agency in Delaware?",
    answer:
      "Ask who does the work, what the report measures and what happens if you leave. You want in-house people you can talk to, reports built on calls and booked jobs rather than impressions, and ad accounts, website and Business Profile kept in your name. We answer all three in writing before you sign.",
  },
  {
    question:
      "Can you get my business recommended by ChatGPT and Google AI Overviews?",
    answer:
      "We can make it far more likely. AI answers draw on clear pages, structured data, consistent business details and recent reviews, so we build all four into every plan. No one can promise a mention, because AI tools pick their own sources, but the same work also lifts your regular Google rankings.",
  },
  {
    question: "What will my monthly marketing report include?",
    answer:
      "Every call, form and chat with the channel it came from, your Google rankings and profile views, what you spent on ads and what each lead cost, plus a short summary of what we did, what changed and what comes next. If a number drops, we tell you first and explain the fix.",
  },
];

const delDigitalFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: DelDigitalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ---------------------------------------------------------------------------
   CONTENT (24 Oct 2026 re-optimization). Live URL's ranking terms (Semrush
   US resource_organic, 24 Oct): digital marketing delaware #6 (140) ·
   digital marketing services new castle county #5 (110) · digital marketing
   agency in sussex county #8 (140) · seo website marketing agency in
   delaware #14 (140) · digital marketing agency in new castle county #14
   (110) · digital marketing agency in delaware #15 (170) · delaware digital
   marketing agency #17 (90) · delaware marketing agency #21 (110) ·
   marketing agency delaware #23 (210) · advertising agencies in delaware #23
   (90) · full service marketing agency delaware #31 (110) · social media
   marketing delaware #51 (110). phrase_these was out of API units, so the
   22 Oct volumes above stand. Hero tiles are growth outcomes, no figures.
--------------------------------------------------------------------------- */

const HeroStats = [
  {
    icon: <FiMapPin aria-hidden="true" />,
    num: "Top 3",
    label: "Google Maps spot we target in each town you serve",
  },
  // Not shown: the template's Google rating card takes this slot.
  {
    icon: <FiStar aria-hidden="true" />,
    num: "5.0",
    label: "Our rating on Google",
  },
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    num: "More leads",
    label: "From search, ads, social and email",
  },
  {
    icon: <RiRobot2Line aria-hidden="true" />,
    num: "AI",
    label: "Named in ChatGPT and AI Overviews",
  },
];

const ServiceCards = [
  {
    tone: "blue" as const,
    icon: <FiMapPin aria-hidden="true" />,
    title: "Local SEO for Delaware Map Searches",
    desc: "Rank in the map pack when people nearby search for your service. We tune your Business Profile, fix listings and grow reviews.",
    points: [
      "Business Profile fully built out",
      "Listings matched across directories",
      "Review requests after every job",
    ],
    href: "/services/delaware/seo",
    link: "See Delaware SEO",
  },
  {
    tone: "gold" as const,
    icon: <FiTarget aria-hidden="true" />,
    title: "Pay-Per-Click and Google Ads",
    desc: "Search ads that put you at the top of Google from launch week, aimed at your towns and services, with every call tracked.",
    points: [
      "Campaigns per service and town",
      "Weekly search-term cleanup",
      "0% markup on your ad spend",
    ],
    href: "/services/google-ads",
    link: "How we run Google Ads",
  },
  {
    tone: "blue" as const,
    icon: <FiUsers aria-hidden="true" />,
    title: "Facebook and Instagram Marketing",
    desc: "Posts, ads and retargeting that keep your business in front of local customers between searches and bring past visitors back.",
    points: [
      "Weekly posts from your real work",
      "Retargeting for site visitors",
      "Paid social aimed by town",
    ],
    href: "#de-contact",
    link: "Talk to us about social",
  },
  {
    tone: "gold" as const,
    icon: <RiRobot2Line aria-hidden="true" />,
    title: "AI Search and ChatGPT Visibility",
    desc: "Pages, schema and reviews shaped so ChatGPT, Gemini and Google AI Overviews can find your business and recommend it.",
    points: [
      "Answer-first service pages",
      "Schema on every page",
      "Matching facts across the web",
    ],
    href: "/services/ai-seo-services",
    link: "See AI SEO services",
  },
  {
    tone: "blue" as const,
    icon: <FiSend aria-hidden="true" />,
    title: "Email and Follow-Up Campaigns",
    desc: "Reminders for open quotes, seasonal offers for past customers and win-back emails, so leads you already paid for turn into sales.",
    points: [
      "Automatic quote reminders",
      "Seasonal offers to past buyers",
      "Review asks after each sale",
    ],
    href: "#de-contact",
    link: "Plan an email program",
  },
  {
    tone: "gold" as const,
    icon: <FiLayout aria-hidden="true" />,
    title: "Websites Built to Convert",
    desc: "Fast, mobile-first sites with a page for every service and town, plus click-to-call and short forms that turn visits into leads.",
    points: [
      "Click-to-call on every screen",
      "Core Web Vitals checked at launch",
      "SEO and schema built in",
    ],
    href: "/services/delaware/web-design",
    link: "See Delaware web design",
  },
];

// Hidden on this page (the local SEO dark card takes the band slot); no
// figures, so nothing unverified ships if the band is switched back on.
const ChannelBars = [
  { label: "Organic search", val: 70, tone: "blue" },
  { label: "Google Maps", val: 80, tone: "gold" },
  { label: "Paid search", val: 60, tone: "blue" },
  { label: "Social & referral", val: 40, tone: "gold" },
];

// Sample rows for the rank-tracker illustration (labelled as a sample).
const RankRows: LocalRankRow[] = [
  {
    city: "Dover",
    keyword: "marketing agency near me",
    rank: "#1",
    change: "5",
  },
  {
    city: "Wilmington",
    keyword: "digital marketing agency",
    rank: "#2",
    change: "7",
  },
  { city: "Newark", keyword: "google ads agency", rank: "#3", change: "8" },
  { city: "Middletown", keyword: "website design", rank: "#2", change: "3" },
  { city: "Milford", keyword: "local seo company", rank: "#1", change: "4" },
  { city: "Lewes", keyword: "social media marketing", rank: "#3", change: "6" },
];

const RankStats = [
  { label: "Towns tracked", value: "6" },
  { label: "Keywords tracked", value: "30" },
  { label: "Average position", value: "2.0" },
];

const CompareThem = [
  "A junior rep handling dozens of accounts",
  "Reports full of clicks, with no calls in them",
  "Ad spend marked up inside the retainer",
  "Work handed to outside contractors",
  "A 12-month contract before any results",
];

const CompareUs = [
  "A strategist who knows Delaware towns",
  "Reports built on calls, forms and sales",
  "0% markup: you pay Google and Meta directly",
  "All work done in-house by the people you meet",
  "Month to month, kept by results",
];

// Illustrative values for the sample scorecard (labelled as such).
const ScoreRows = [
  { label: "Maps visibility", before: 28, after: 82 },
  { label: "Monthly leads", before: 30, after: 78 },
  { label: "Lead cost control", before: 35, after: 80 },
  { label: "Site conversion", before: 25, after: 70 },
];

const WhyCards = [
  {
    icon: <FiMapPin aria-hidden="true" />,
    title: "Based on The Green in Dover",
    desc: "A Delaware company with a real office, marketing businesses in New Castle, Kent and Sussex County.",
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Quick Wins, Then Compounding Growth",
    desc: "Fixes go live in the first weeks, and each month of work stacks on the one before.",
  },
  {
    icon: <FiBarChart2 aria-hidden="true" />,
    title: "Reported in Calls and Leads",
    desc: "Every lead is traced to its channel, every account is in your name, and you hear about any dip from us first.",
  },
];

const BannerChecks = [
  "Visibility gaps by town",
  "Ad spend waste flagged",
  "Local competitors compared",
  "A 90-day plan to keep",
];

const AuditRows = [
  { label: "Search and Maps", flag: "Gaps mapped" },
  { label: "Ad account", flag: "Waste flagged" },
  { label: "Website", flag: "Checked page by page" },
];

const MarqueeItems = [
  "Delaware Digital Marketing",
  "Local SEO",
  "Google Ads",
  "AI Search Visibility",
  "Lead Generation",
  "Conversion Web Design",
  "Social Media",
];

// Centre point of each node, spaced 60° apart on the orbit ellipse (centre
// 50%/50%, semi-axes 37% × 43% — the same figure .deldg-engine-orbit draws, so
// the nodes land on the ring). CSS translates each back by half its own size
// and drops the absolute positioning for a grid below 992px.
const EngineNodes = [
  {
    icon: <FiMapPin aria-hidden="true" />,
    title: "Local SEO & Maps",
    outcome: "Found first",
    tone: "blue",
    left: "50%",
    top: "7%",
  },
  {
    icon: <FiTarget aria-hidden="true" />,
    title: "Google Ads",
    outcome: "Calls on demand",
    tone: "gold",
    left: "82%",
    top: "28.5%",
  },
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "Web & CRO",
    outcome: "Visits convert",
    tone: "blue",
    left: "82%",
    top: "71.5%",
  },
  {
    icon: <FiSend aria-hidden="true" />,
    title: "Email & Lifecycle",
    outcome: "Repeat sales",
    tone: "gold",
    left: "50%",
    top: "93%",
  },
  {
    icon: <RiRobot2Line aria-hidden="true" />,
    title: "Content & AI Search",
    outcome: "Named in answers",
    tone: "blue",
    left: "18%",
    top: "71.5%",
  },
  {
    icon: <FiUsers aria-hidden="true" />,
    title: "Social Media",
    outcome: "Remembered",
    tone: "gold",
    left: "18%",
    top: "28.5%",
  },
];

// First five show on the hero card; own order so no run matches a sibling.
const IndustryChips = [
  "Contractors & Trades",
  "Medical & Dental",
  "Law Firms",
  "Real Estate",
  "Hospitality",
  "Retail",
  "B2B & Manufacturing",
  "Nonprofits",
];

const GrowCards = [
  {
    href: "/services/google-ads",
    icon: <FiTarget aria-hidden="true" />,
    title: "Google Ads Management",
    desc: "Top-of-page visibility while your organic rankings build.",
    cta: "See Google Ads",
  },
  {
    href: "/services/web-design",
    icon: <FiLayout aria-hidden="true" />,
    title: "Web Design & Development",
    desc: "A site that converts the visits every other channel sends.",
    cta: "See web design",
  },
  {
    href: "/services/philadelphia/digital-marketing",
    icon: <FiMapPin aria-hidden="true" />,
    title: "Digital Marketing in Philadelphia",
    desc: "The same team and system for the Philadelphia metro.",
    cta: "See Philadelphia",
  },
];

const hubLeft: HubApp[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: SiYelp, name: "Yelp", tone: "yelp" },
];
const hubRight: HubApp[] = [
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiGooglegemini, name: "Gemini", tone: "gemini" },
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
];

type Tone = "blue" | "gold";

const data: DelawareData = {
  hero: {
    // No kicker: the keyword leads the H1 (owner, 22 Oct).
    eyebrow: "",
    h1Start: "Digital Marketing Agency in Delaware",
    h1Highlight: "That Turns Searches Into Customers",
    sub: "Zonic Media is a Delaware digital marketing agency on The Green in Dover. We combine local SEO, Google Ads, social media and websites into one plan that puts your business in front of buyers from New Castle County to Sussex County.",
    media: {
      src: "/images/delaware/delaware-digital-marketing-hero.webp",
      alt: "Zonic Media strategists reviewing a campaign plan with a Delaware small-business owner",
    },
    floatA: { strong: "Top 3 on Google Maps", text: "the goal in every town" },
    floatB: { strong: "5.0 on Google", text: "from our own client reviews" },
    stats: HeroStats,
    proof: "",
    cta: "Book a Free Marketing Audit",
  },
  about: {
    eyebrow: "Marketing for Delaware businesses",
    h2Start: "Your SEO, Website & Marketing",
    h2Highlight: "Agency in Delaware.",
    leads: [
      <>
        Most Delaware buyers choose a business in minutes: a quick search, a
        scan of the map pack and a call to whoever looks most trusted. Our job
        is to make that call yours, in Wilmington, Newark, Dover and the beach
        towns alike.
      </>,
      <>
        One in-house team runs your{" "}
        <Link href="/services/delaware/seo" className="deldg-inline-link">
          local SEO
        </Link>
        , Google Ads, social media and{" "}
        <Link href="/services/web-design" className="deldg-inline-link">
          website design
        </Link>{" "}
        on a single month-to-month plan. Each month you see which channel
        produced every call and form.
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/delaware/delaware-digital-agency-workstation.webp",
      alt: "Digital marketing agency workstation displaying campaign growth analytics",
    },
    collageB: {
      src: "/images/delaware/delaware-campaign-dashboard.webp",
      alt: "Campaign performance dashboard with lead and search data on a laptop",
    },
    badgeText: "Delaware Digital Marketing • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Full-Service Digital Marketing for Delaware Businesses",
    lead: "Six services, one plan and one monthly report. Each is built to bring Delaware customers to your phone, inbox or front door.",
    cards: ServiceCards,
  },
  // Kept for the type; the dark card shows the local SEO block instead.
  band: {
    eyebrow: "",
    h2: "Every Channel Pulling Toward One Goal",
    leads: [],
    cta: "Get My Free Audit",
    console: {
      title: "Delaware Growth Console",
      tag: "Example view",
      metrics: [
        { strong: "Calls", label: "Tracked by source" },
        { strong: "Forms", label: "Tracked by page" },
        { strong: "Top 3", label: "Maps goal" },
      ],
      barsLabel: "Visibility by channel",
      bars: ChannelBars.map((bar) => ({ ...bar, tone: bar.tone as Tone })),
      pills: [
        { icon: "pin", text: "Dover" },
        { icon: "pin", text: "Wilmington" },
        { icon: "star", text: "5.0 on Google" },
      ],
    },
  },
  process: {
    eyebrow: "",
    h2: "How a Delaware Campaign Comes Together",
    steps: [
      {
        tag: "Week 1",
        title: "Free Audit and Flat Quote",
        desc: "We review your Google profile, website, ads and rankings across Delaware, check who is winning your calls and send a plan at one flat price.",
      },
      {
        tag: "Weeks 2–4",
        title: "Tracking and Groundwork",
        desc: "Call and form tracking goes in, your profile and listings get cleaned up, and the pages meant to win leads are rewritten first.",
      },
      {
        tag: "Month 2",
        title: "Ads, Local SEO and Social Go Live",
        desc: "Google Ads start bringing calls right away while local SEO, reviews and social posts build demand that lasts.",
      },
      {
        tag: "Month 3 on",
        title: "Monthly Report, Then Scale",
        desc: "A plain-English report on calls, forms and cost per lead each month, with budget shifted to whatever brings the best customers.",
      },
    ],
    visualTitle: "Example: your 90-day progress view",
    visualBars: [
      { label: "Maps visibility", val: 72 },
      { label: "Tracked leads", val: 64 },
      { label: "Site conversion", val: 58 },
    ],
    ctaPrimary: "Book a Free Marketing Audit",
  },
  // Kept for the type; the white band shows the feature rows instead.
  results: {
    eyebrow: "",
    h2: "",
    cards: [],
  },
  compare: {
    h2: "Choosing Among Advertising Agencies in Delaware",
    lead: "The invoice may look similar. The month you get does not. Here is what changes with a local, in-house team.",
    themTitle: "The Usual Agency Setup",
    themSub: "Why so many campaigns stall",
    them: CompareThem,
    usTitle: "Your Campaign With Zonic Media",
    usSub: "Built to grow, reported in leads",
    us: CompareUs,
    scoreTitle: "Sample Campaign Scorecard",
    scoreSub: "Illustrative scores before and after the work",
    scoreRows: ScoreRows,
  },
  why: {
    h2: "A Marketing Agency in Delaware That Answers for Results",
    lead: "Clicks and rankings are only the means. You hire us for a plan, the work behind it and people who own the outcome.",
    cards: WhyCards,
    banner: {
      eyebrow: "",
      h3: "Find Out What's Holding Your Delaware Business Back",
      p: "We review your search visibility, ad spend, website and local competitors, then send a 90-day plan. It's free, and the plan is yours whether or not you hire us.",
      checks: BannerChecks,
      cta: "Request My Free Audit",
      audit: {
        title: "Marketing Health Check",
        tag: "Example report",
        score: "58",
        grade: "Room to grow",
        gradeDesc: "An example of the scorecard your free audit includes",
        rows: AuditRows,
      },
    },
  },
  marquee: MarqueeItems,
  // Hidden on this page: the platform hub takes the hub slot; its chips
  // feed the hero card.
  engine: {
    eyebrow: "",
    h2: "Six Channels Feeding One Plan",
    lead: (
      <>
        Each service feeds the next, from Wilmington to the Sussex shore and for
        our{" "}
        <Link
          href="/services/philadelphia/digital-marketing"
          className="deldg-inline-link"
        >
          Philadelphia digital marketing
        </Link>{" "}
        clients.
      </>
    ),
    coreStrong: "Your Delaware business",
    coreSub: "One team · one plan · one report",
    coreCta: "Book a Free Marketing Audit",
    nodes: EngineNodes.map((node) => ({ ...node, tone: node.tone as Tone })),
    chipsLabel: "Industries we market in Delaware",
    chips: IndustryChips,
  },
  faqs: {
    eyebrow: "",
    h2: "Your Questions About Marketing in Delaware",
    lead: "Costs, timelines, channels and what each monthly report shows.",
    cta: "Ask About Your Market",
    items: DelDigitalFaqs,
  },
  // Hidden on this page: the platform hub takes its place (owner, 22 Oct).
  grow: {
    eyebrow: "",
    h2: "More Ways to Grow From Here",
    lead: null,
    cards: GrowCards,
  },
  form: {
    eyebrow: "",
    h2: "Request a Delaware Marketing Audit",
    lead: "Tell us about your business and we'll send an audit plus a plan at one flat monthly price.",
    formType: "delaware-digital-marketing",
    badge: "Free Audit",
    title: "Get your Delaware marketing audit",
    subtitle:
      "Tell us a little about your business. We'll show where you stand online and what it will take to win more local customers.",
    submitText: "Send My Free Audit",
    messageLabel: "What would you like to grow?",
    messagePlaceholder: "Your services, the towns you cover and your goals",
    defaultServices: ["Local SEO", "Pay Per Click (PPC)"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "marketing",
  pricing: {
    title: "Monthly Marketing Plans for Delaware Businesses",
    lead: "Choose the mix of local SEO, Google Ads and social that suits your business now, and add channels as you grow.",
    compareTitle: "Delaware Plans Side by Side",
    compareLead: "See what each plan delivers every month.",
    addOnsTitle: "Extras for Growing Delaware Campaigns",
    addOnsLead:
      "Add towns, landing pages or ad campaigns whenever you need them.",
    customTitle: "Want a plan shaped around your towns?",
    customText:
      "Share your services and service area, and we'll build a plan to match.",
  },
  aboutPhoto: {
    src: "/images/delaware/delaware-digital-marketing-team.webp",
    alt: "Zonic Media's Delaware digital marketing team planning SEO, social media, web design and ad campaigns, with the Wilmington riverfront behind them",
    // Keep the "Delaware Digital Marketing Agency" wall sign in frame.
    position: "50% 18%",
  },
  // Carries "seo website marketing agency in delaware" (live #14), which the
  // removed "SEO + Web Design" banner used to hold.
  aboutTitle: ["Your SEO, Website", "& Marketing Agency", "in Delaware."],
  aboutCard: {
    kicker: "Headquartered in Dover, DE",
    title: "Marketing all three counties",
    points: [
      // Wilmington link kept here after the "SEO + Web Design" banner was
      // removed (owner, 23 Oct).
      <>
        New Castle County:{" "}
        <Link
          href="/services/wilmington/digital-marketing"
          className="tw:underline tw:underline-offset-[3px]"
        >
          Wilmington
        </Link>
        , Newark, Middletown, Bear
      </>,
      "Kent County: Dover, Smyrna, Milford, Camden",
      "Sussex County: Lewes, Rehoboth Beach, Georgetown, Seaford",
      // Philadelphia links: digital marketing (kept from the engine section)
      // and local SEO (carried by the live page).
      <>
        Across the state line:{" "}
        <Link
          href="/services/philadelphia/digital-marketing"
          className="tw:underline tw:underline-offset-[3px]"
        >
          Philadelphia marketing
        </Link>{" "}
        and{" "}
        <Link
          href="/services/philadelphia/local-seo"
          className="tw:underline tw:underline-offset-[3px]"
        >
          local SEO
        </Link>
      </>,
    ],
    foot: "8 The Green, STE B, Dover, DE 19901",
  },
  features: {
    h2: "Three Ways We Grow Delaware Businesses Online",
    lead: "Maps, paid search and AI answers: where more and more Delaware customers find the businesses they hire.",
    items: [
      {
        label: "Google Maps",
        title: "Top Three on Maps, Town by Town",
        body: "Dover, Newark and Rehoboth Beach each show their own top three on Google Maps, and those three take most of the calls. We build your profile, listings and reviews so you appear there in the towns that pay best.",
        points: [
          {
            t: "Complete profile",
            d: "Categories, services, hours and photos set for real searches.",
          },
          {
            t: "Clean listings",
            d: "One business name, address and number across all directories.",
          },
          {
            t: "Fresh reviews",
            d: "Requests sent after each job, replies written for you.",
          },
          {
            t: "Town pages",
            d: "A landing page for each Delaware town you target.",
          },
        ],
        href: "/services/delaware/seo",
        link: "Explore Delaware SEO",
        ui: "towns",
      },
      {
        label: "Google Ads",
        title: "Paid Search That Rings While SEO Grows",
        body: "Google Ads place you above the organic results from launch week. We aim spend at the towns and services with the best margins, block wasted searches and send each click to a page built to convert.",
        points: [
          { t: "Town targeting", d: "Ads run only where you take work." },
          {
            t: "Waste cut weekly",
            d: "Search terms and bids reviewed every week.",
          },
          {
            t: "Landing pages",
            d: "One focused page per offer, with tap-to-call.",
          },
          { t: "Zero markup", d: "You pay Google directly for every click." },
        ],
        href: "/services/google-ads",
        link: "See Google Ads management",
        ui: "ads",
      },
      {
        label: "AI search",
        title: "Recommended When Customers Ask AI",
        body: "More Delaware buyers now ask ChatGPT, Gemini or Google’s AI Overviews who to hire. We make your pages, reviews and business facts clear and consistent, so AI tools can trust your business and name it.",
        points: [
          {
            t: "Answer-ready pages",
            d: "Service pages that answer real questions.",
          },
          {
            t: "Structured data",
            d: "Schema that AI tools and Google can read.",
          },
          {
            t: "One set of facts",
            d: "Same details on your site, profile and listings.",
          },
          { t: "Recent reviews", d: "The proof AI answers lean on." },
        ],
        href: "/services/ai-seo-services",
        link: "Learn about AI SEO",
        ui: "ai",
      },
    ],
  },
  rank: {
    scope: "Delaware towns · past month",
    rows: RankRows,
    summaryPercent: 82,
    summaryLabel: "Share of tracked terms in the top three",
    stats: RankStats,
    footnote:
      "Sample tracker view. Real rankings depend on your category, competition and distance from each town.",
  },
  localSeo: {
    eyebrow: "",
    h2: "Track Your Google Maps Rank Across Delaware",
    body: (
      <>
        Map results shift with the searcher&apos;s location, so you can lead in
        Dover and barely show in Wilmington. We track your position town by
        town, widen your reach each month and restore suspended listings through
        our{" "}
        <Link
          href="/services/gbp-reinstatement-service"
          className="deldg-inline-link"
        >
          Business Profile reinstatement
        </Link>{" "}
        service.
      </>
    ),
    points: [
      "Rank checks from towns in every county",
      "New town pages where you want work",
      "Town-by-town progress each month",
    ],
    cta: {
      href: "/google-maps-business-ranking-tool-online",
      label: "Try Our Free Maps Rank Checker",
    },
  },
  platforms: {
    h2: "Seen on Every Platform Delaware Customers Use",
    lead: "Google is the start, not the finish. We keep your details right and your profiles active on maps, review sites, social apps and AI assistants, so customers get the same story wherever they check.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Maps and reviews",
    rightLabel: "AI and social",
    centerTitle: "Your business",
    centerSub: "accurate on every platform",
  },
  reviewsTitle: "Reviews From the Owners We Work With",
  contact: {
    before: "Ready for",
    after: "More Delaware Customers?",
    lead: "Tell us what you offer and where you want more customers. We'll reply with a free review of your search, ads and website, plus a plan at one flat monthly price.",
  },
  stepLinks: [
    "#de-contact",
    "/local-seo-google-business-optimization",
    "/services/google-ads",
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
          __html: JSON.stringify(delDigitalFaqJsonLd),
        }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
