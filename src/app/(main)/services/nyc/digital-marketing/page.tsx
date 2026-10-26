/*
 * REDESIGN DRAFT (23 Oct 2026) of /services/nyc/digital-marketing. Same
 * title, canonical, schema types and form type as the live page, which
 * stays untouched. Built on the Dallas–Fort Worth layout template
 * (src/components/rd/delaware/DelawareLanding.tsx, as the Delaware and
 * Philadelphia drafts) with this page's own UI (nycMarketingUi.tsx).
 * Noindex until the owner approves it.
 *
 * COPY RE-OPTIMIZED 24 Oct 2026 (docs/content-optimization-brief.md): every
 * heading, sentence and FAQ rewritten (the earlier draft carried the live
 * FAQs word for word); invented results removed (hero +164% / 3.4× / −38%,
 * the "after 6 months" console and the client scorecard). Company-wide,
 * verified numbers only: 1,500+ profiles optimized, 900+ reinstated, 20+
 * industries, 0% ad-spend markup, 5.0 Google rating. The scorecard and
 * console are labelled as samples.
 *
 * Keywords (Semrush US, 23 Oct 2026; Semrush had no API units on 24 Oct, so
 * the live URL's ranking terms could not be re-pulled, and the live title is
 * kept): digital marketing agency nyc 1,900 (KD 48) · digital marketing
 * agency new york 1,900 (KD 51) · marketing agency new york 1,000 · digital
 * marketing nyc 880 (KD 27) · marketing companies nyc 880 · marketing agency
 * nyc 720 · nyc digital marketing agency 590 · digital marketing agencies nyc
 * 590 · digital marketing company nyc 480 · advertising agency nyc 390 ·
 * social media marketing nyc 320 (KD 21) · ppc agency nyc 260 (KD 22) · ppc
 * management nyc 170 (KD 4).
 *
 * NYC silo: digital-marketing is the hub (broad "digital marketing agency
 * nyc" terms) and links down to local-seo and web-design; the children link
 * back with narrow anchors.
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
  FiMapPin,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";
import {
  SiFacebook,
  SiGoogle,
  SiGooglemaps,
  SiInstagram,
  SiOpenai,
  SiTiktok,
  SiYelp,
  SiYoutube,
} from "react-icons/si";

const PAGE_PATH = "/services/nyc/digital-marketing";

const DESCRIPTION =
  "NYC digital marketing agency for local businesses: Google Maps, Google Ads, social media and websites run by one team and reported in calls and booked jobs.";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency NYC | New York Marketing Company",
  },
  description: DESCRIPTION,
  keywords: [
    "digital marketing agency nyc",
    "digital marketing agency new york",
    "nyc digital marketing agency",
    "digital marketing nyc",
    "digital marketing company nyc",
    "digital marketing agencies nyc",
    "marketing agency new york",
    "marketing agency nyc",
    "marketing companies nyc",
    "advertising agency nyc",
    "social media marketing nyc",
    "ppc agency nyc",
    "ppc management nyc",
    "digital marketing agency brooklyn",
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
    title: "Digital Marketing Agency NYC | New York Marketing Company",
    description:
      "One team for Google Maps, Google Ads, social media and websites, planned around the boroughs New York businesses serve.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "NYC Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in New York City",
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
    name: "New York",
    containedInPlace: { "@type": "State", name: "New York" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses across the five boroughs",
  },
};

const NycDmFaqs = [
  {
    question: "What do NYC digital marketing services cost?",
    answer:
      "We charge a flat $297, $750 or $1,500 each month, and you can stop any month. Ad spend goes straight to the ad platform with 0% markup, so every dollar you approve buys ads. The free audit shows which plan suits your competition and goals before you sign anything.",
  },
  {
    question:
      "What does a digital marketing company do for a small NYC business?",
    answer:
      "It finds the customers already searching for you and makes sure they call you first. For most New York businesses that means a top-three spot on Google Maps, Google Ads on high-intent searches, social content locals recognize and a website that books on a phone, all tracked to real leads.",
  },
  {
    question:
      "Should a New York small business start with local SEO or Google Ads?",
    answer:
      "Ads bring calls this week and show which searches pay; local SEO builds Map Pack rankings that keep working without paying per click. Most businesses do best with both, leaning on ads early and shifting effort toward SEO as rankings grow. Your audit decides the starting mix.",
  },
  {
    question: "Can you run campaigns for one borough or neighborhood only?",
    answer:
      "Yes. Ads can target specific ZIP codes or a radius around your shop, and your Google profile, service pages and reviews can focus on the neighborhoods you want work from. You can start with one borough and add the next once it books steadily.",
  },
  {
    question: "Do you handle social media marketing in NYC?",
    answer:
      "Yes. We plan and post short videos and photos on Instagram, TikTok and Facebook, answer messages quickly and run paid social that reaches people near you or retargets your site visitors. Social sits in the same monthly report as your ads and Maps leads.",
  },
  {
    question: "How will I know which channel brings in customers?",
    answer:
      "Every call, form and message is tagged with its source, from Google Ads and the Map Pack to Instagram, along with the neighborhood it came from. Your monthly report matches those leads to booked jobs, so you can see what pays and where to put more effort.",
  },
  {
    question: "Will ChatGPT and Google's AI answers recommend my business?",
    answer:
      "We make you far easier to recommend. AI tools build answers from your website, Google profile, reviews and trusted directories, so we keep those accurate and consistent, publish clear service pages and check what ChatGPT, Gemini and Google's AI Overviews say about you each month.",
  },
  {
    question: "What happens if my Google Business Profile gets suspended?",
    answer:
      "Call us before you create a new listing. Profile reinstatement is our specialty, with 900+ suspended profiles brought back, and we keep your listing inside Google's guidelines afterwards. Crowded New York categories draw spam reports and surprise edits, so we watch your profile every day.",
  },
  {
    question: "Does my marketing agency need an office in New York?",
    answer:
      "No. Map Pack rankings, ads and websites depend on strategy and steady weekly work, not a Manhattan lease. Our team works with New York businesses from Dover, Delaware, holds strategy calls on video whenever you like and reports every result in writing.",
  },
];

const nycDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: NycDmFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/* ---------------------------------------------------------------- content */

const hubLeft: HubApp[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiYelp, name: "Yelp", tone: "yelp" },
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
];
const hubRight: HubApp[] = [
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiTiktok, name: "TikTok", tone: "tiktok" },
  { icon: SiYoutube, name: "YouTube", tone: "youtube" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "NYC Digital Marketing Agency",
    h1Highlight: "Bringing New York Businesses More Calls",
    sub: "Zonic Media plans your Google Maps rankings, search ads, social posts and website together for New York businesses. Each channel targets the boroughs you serve, with one digital marketing consultant as your contact and results reported in calls and jobs.",
    media: {
      src: "/images/geo/nyc-digital-marketing/nyc-digital-marketing-strategy.webp",
      alt: "New York business owner and strategist reviewing a digital marketing plan",
    },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide, verified numbers only (no NYC client results).
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
        label: "Rated on Google",
      },
      {
        icon: <FiTarget aria-hidden="true" />,
        num: "0%",
        label: "Markup on the ad spend you approve",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "20+",
        label: "Industries we help grow",
      },
    ],
    proof: "",
    cta: "Start My NYC Growth Audit",
  },
  about: {
    eyebrow: "Digital marketing in New York City",
    h2Start: "Every Borough Searches Differently.",
    h2Highlight: "We Plan for Each One.",
    leads: [
      <>
        A dentist in Midtown and a roofer on Staten Island don’t share
        customers, search terms or competitors. We plan your marketing around
        the neighborhoods you actually serve, then focus effort where people are
        ready to call.
      </>,
      <>
        One in-house team handles ads, Google Maps, social and your website,
        with one monthly report on the leads each brings in. Want rankings
        first? Start with our{" "}
        <Link href="/services/nyc/local-seo" className="phl-inline-link">
          local SEO services in NYC
        </Link>
        , or ask about a new site from our{" "}
        <Link href="/services/nyc/web-design" className="phl-inline-link">
          New York web design
        </Link>{" "}
        team.
      </>,
    ],
    checks: [],
    collageA: {
      src: "/images/geo/nyc-digital-marketing/nyc-storefront-marketing-consultation.webp",
      alt: "Marketing consultant meeting an independent shop owner in New York City",
    },
    collageB: {
      src: "/images/geo/nyc-digital-marketing/nyc-multichannel-marketing-dashboard.webp",
      alt: "Multichannel local marketing performance dashboard on a laptop",
    },
    badgeText: "Digital Marketing Agency NYC • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "NYC Digital Marketing Services Under One Roof",
    lead: "Internet marketing for NYC businesses: search ads, Google Maps, social, websites, reviews and tracking, planned together so each channel feeds the next.",
    cards: [
      {
        tone: "blue",
        icon: <FiTarget aria-hidden="true" />,
        title: "PPC & Google Ads in NYC",
        desc: "Search and Local Services Ads aimed at the ZIP codes and hours that bring calls, with junk searches blocked every week.",
        points: [
          "Campaigns split by borough",
          "Search terms reviewed weekly",
          "0% markup on ad spend",
        ],
        href: "/services/google-ads",
        link: "Google Ads management",
      },
      {
        tone: "gold",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Map Pack Rankings by Neighborhood",
        desc: "A complete Google Business Profile, local pages and steady reviews that lift you into the top three where you work.",
        points: [
          "Profile updated weekly",
          "Rankings checked by ZIP",
          "Pages for each area",
        ],
        href: "/services/nyc/local-seo",
        link: "Local SEO in NYC",
      },
      {
        tone: "blue",
        icon: <FiUsers aria-hidden="true" />,
        title: "Social Media for New York Brands",
        desc: "Short videos and posts on Instagram, TikTok and Facebook that keep locals seeing you, plus ads that bring back site visitors.",
        points: [
          "Reels cut from your footage",
          "Paid social by neighborhood",
          "Messages answered same day",
        ],
        href: "#de-contact",
        link: "Ask about social media",
      },
      {
        tone: "gold",
        icon: <FiLayout aria-hidden="true" />,
        title: "Websites Built to Book Jobs",
        desc: "Fast, phone-first websites with click-to-call and online booking, so ad and Maps traffic turns into appointments.",
        points: [
          "Built for phones first",
          "Booking and call buttons",
          "Accessibility tested",
        ],
        href: "/services/nyc/web-design",
        link: "Web design in NYC",
      },
      {
        tone: "blue",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Reviews & Profile Protection",
        desc: "Review requests after every job, replies written for you, and fast help when a Google listing gets suspended.",
        points: [
          "Review requests by text",
          "Every review answered",
          "Suspension recovery",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Profile reinstatement",
      },
      {
        tone: "gold",
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Lead Tracking You Can Read",
        desc: "Each call, form and message tagged to the channel and area it came from, in a report that takes minutes to read.",
        points: [
          "Call tracking by channel",
          "Leads matched to jobs",
          "Plain-English monthly report",
        ],
        href: "#de-contact",
        link: "Get a free audit",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "See Which Boroughs Bring You Customers",
    leads: [
      <>
        Brooklyn might fill your calendar while Manhattan clicks convert less.
        Your report breaks down leads, calls and Map Pack position by borough,
        so the effort follows the areas that book.
      </>,
      <>
        If your listing is ever suspended, our{" "}
        <Link
          href="/services/gbp-reinstatement-service"
          className="phl-inline-link"
        >
          Google profile reinstatement
        </Link>{" "}
        specialists take over. Also serving Pennsylvania? Our{" "}
        <Link
          href="/services/philadelphia/digital-marketing"
          className="phl-inline-link"
        >
          Philadelphia digital marketing
        </Link>{" "}
        program works the same way.
      </>,
    ],
    cta: "Get My Borough Breakdown",
    // Sample report UI, not client data.
    console: {
      title: "Borough report",
      tag: "Sample report",
      metrics: [
        { strong: "5", label: "Boroughs tracked" },
        { strong: "Top 3", label: "Map Pack goal" },
        { strong: "1", label: "Report a month" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "From Free Audit to Live NYC Campaigns",
    steps: [
      {
        tag: "Week 1",
        title: "A Free NYC Growth Audit",
        desc: "We review your ads, Google profile, website and the competitors around you, show where leads slip away and recommend a plan.",
      },
      {
        tag: "Weeks 2–4",
        title: "A Plan for Each Borough",
        desc: "Ads, Maps work and social mixed for each area you serve, based on how your customers search there.",
      },
      {
        tag: "Weekly",
        title: "Launch, Then Tune Weekly",
        desc: "Campaigns go live with tracking from day one. Search terms, posts, pages and reviews get attention every week.",
        chips: ["Ads tuned", "Posts live", "Reviews answered"],
      },
      {
        tag: "Monthly",
        title: "Shift Effort to What Books",
        desc: "Your monthly report shows leads by channel and borough, and we move effort toward whatever is booking jobs.",
        chips: ["Borough report", "Channel mix", "Next steps"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My NYC Growth Audit",
  },
  showcase: undefined,
  compare: {
    h2: "One NYC Team vs. a Patchwork of Vendors",
    lead: "Where marketing budgets leak, and how we plug the gaps.",
    themTitle: "Patchwork Vendors",
    themSub: "Why results stall",
    them: [
      "A different vendor for every channel",
      "One citywide campaign for five boroughs",
      "Fees tied to your ad spend",
      "Reports full of clicks, no leads",
      "Long contracts signed up front",
    ],
    usTitle: "Our NYC Program",
    usSub: "One team, reported in leads",
    us: [
      "Ads, Maps, social and web together",
      "A plan for every borough you serve",
      "0% markup on your ad spend",
      "Calls and forms tied to jobs",
      "Month to month, no lock-in",
    ],
    scoreTitle: "Sample Growth Scorecard",
    scoreSub: "Illustration of the four signals our audit grades",
    scoreRows: [
      { label: "Lead tracking", before: 35, after: 100 },
      { label: "Map Pack reach", before: 18, after: 84 },
      { label: "Ad efficiency", before: 42, after: 87 },
      { label: "Site conversions", before: 31, after: 78 },
    ],
  },
  why: {
    h2: "Why New York Owners Choose Zonic Media",
    lead: "A team that answers to booked jobs, not vanity numbers.",
    cards: [
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "Our own team, every channel",
        desc: "Ads, SEO, social and web built and managed in-house.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Plans with no lock-in",
        desc: "Month to month, with 0% markup on your ad spend.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Reports built on leads",
        desc: "Calls, forms and bookings by channel and borough, every month.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Find Out Where Your NYC Leads Are Leaking",
      p: "We check your ads, Google profile, website and nearby competitors, then send a clear plan for the boroughs you serve. No cost and no obligation.",
      checks: [
        "Wasted ad spend flagged",
        "Competitors mapped by borough",
        "Profile risks listed",
        "A 90-day action plan",
      ],
      cta: "Get My Free NYC Audit",
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
    chipsLabel: "Industries we grow in New York",
    chips: [
      "Contractors & Trades",
      "Dentists & Clinics",
      "Law & Accounting",
      "Restaurants & Bars",
      "Salons & Spas",
      "Auto Shops",
      "Boutiques & Retail",
      "Home Services",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Digital Marketing in NYC: Your Questions",
    lead: "Pricing, channels, borough targeting and AI search, answered plainly.",
    cta: "",
    items: NycDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free NYC Growth Audit",
    lead: "Tell us about your business and we’ll send an audit and a plan for the boroughs you serve.",
    formType: "nyc-digital-marketing",
    badge: "Free Audit",
    title: "Get Your Free NYC Growth Audit",
    subtitle:
      "It takes about a minute, and there’s no obligation to sign up for anything.",
    submitText: "Request My Audit",
    messageLabel: "What should we know about your business?",
    messagePlaceholder:
      "Your services, the boroughs you cover, what you run today and what you’d like more of",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "nyc-marketing",
  aboutTitle: ["Every Borough", "Searches Differently.", "We Plan for Each."],
  aboutPhoto: {
    src: "/images/nyc/nyc-digital-marketing-agency-office.webp",
    alt: "New York digital marketing agency workspace with a campaign dashboard and the Manhattan skyline",
  },
  aboutCard: {
    kicker: "One plan for New York",
    title: "What we run for you",
    points: [
      "Google Ads and Local Services Ads",
      "Google Maps rankings and reviews",
      "Instagram, TikTok and Facebook",
      "Websites that turn visits into calls",
    ],
    foot: "Planned and managed by our own team",
  },
  pillars: ["#b45309", "#fef08a", "#ccfbf1", "#111827"],
  features: {
    h2: "What Makes Digital Marketing in New York Pay Off",
    lead: "Ads timed to how New Yorkers search, leads traced to their source and a Google profile that stays live.",
    items: [
      {
        label: "Timing",
        title: "Ads Scheduled Around the NYC Commute",
        body: "Searches spike on the morning train, at lunch and after work. We raise bids in those windows, ease off overnight and fund each borough on its own, so your ads appear when people are ready to book.",
        points: [
          { t: "Hour-by-hour bidding", d: "More reach at peak times." },
          { t: "Borough budgets", d: "Each area funded separately." },
          { t: "Phone-first ads", d: "Call buttons on every ad." },
          { t: "Weekly cleanup", d: "Junk searches blocked." },
        ],
        href: "/services/google-ads",
        link: "See Google Ads management",
        ui: "hours",
      },
      {
        label: "Attribution",
        title: "Trace Every Lead to Its Source",
        body: "Calls, forms and DMs are tagged with the channel and neighborhood they came from. You see whether Google Ads, the Map Pack or Instagram found each customer, and spending follows whatever books jobs.",
        points: [
          { t: "Call tracking", d: "Each call tagged by source." },
          { t: "Neighborhood view", d: "Where your leads live." },
          { t: "Job matching", d: "Leads tied to revenue." },
          { t: "Single dashboard", d: "All channels together." },
        ],
        href: "#de-contact",
        link: "See how leads are tracked",
        ui: "leadlog",
      },
      {
        label: "Protection",
        title: "Keep Your Google Listing Live",
        body: "Crowded New York categories draw spam listings, surprise edits and suspensions. We check your Business Profile daily, reverse unwanted changes and keep every field inside Google’s guidelines, so the calls don’t stop.",
        points: [
          { t: "Daily checks", d: "Name, hours and address watched." },
          { t: "Edit alerts", d: "Bad changes undone fast." },
          { t: "Guideline checks", d: "No risky names or categories." },
          { t: "Reinstatement", d: "Help if you’re suspended." },
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Profile reinstatement help",
        ui: "monitor",
      },
    ],
  },
  platforms: {
    h2: "Seen on Every App New Yorkers Check",
    lead: "People compare businesses on Google Search and Maps, scroll Instagram and TikTok, and now ask ChatGPT for a recommendation. We keep your details, reviews and content consistent on each one.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Search, maps and reviews",
    rightLabel: "Social feeds and AI answers",
    centerIcon: <FiTarget aria-hidden="true" />,
    centerTitle: "Your NYC business",
    centerSub: "the same story everywhere",
  },
  pricing: {
    title: "NYC Digital Marketing Pricing",
    lead: "Month-to-month plans for New York businesses, from Google Maps basics to a full ads, SEO and social program.",
    compareTitle: "What Each NYC Plan Includes",
    compareLead: "Plan features, line by line.",
    addOnsTitle: "Extras for Growing NYC Businesses",
    addOnsLead: "Add boroughs, landing pages or campaigns when you’re ready.",
    customTitle: "More than one NYC location?",
    customText: "We’ll plan each location and borough you serve.",
  },
  phone: "textback",
  darkUi: "boroughs",
  scoreStyle: "slope",
  noGrow: true,
  reviewsTitle: "Reviews From Business Owners",
  contact: {
    before: "Ready for More",
    after: "New York Customers?",
    lead: `Share what you sell and which boroughs you work in. Our team will review your ads, Google profile and website for free.`,
  },
  stepLinks: [
    "#de-contact",
    "/services/nyc/local-seo",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nycDmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
