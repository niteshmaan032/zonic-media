/*
 * ORLANDO DIGITAL MARKETING — new live page (18 Nov 2026), one of the eight
 * Florida city pages under the Florida hub. Built on the location template
 * (src/components/rd/delaware/DelawareLanding.tsx) with this page's own UI
 * (flOrlandoUi.tsx). Brief: docs/florida-cities-brief.md. Plan:
 * https://claude.ai/artifact/AES7o7UFzy8bMQNW587U6G
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-cities-
 * keywords-2026-11.md). Lead: orlando digital marketing agency 1,000
 * (KD 15) · digital marketing orlando fl 260 (KD 14) · digital marketing
 * services orlando 210 (KD 22) · advertising agency orlando 390 (KD 17).
 * Secondary (H2/H3, FAQ and body only): seo company orlando 1,600 · seo
 * orlando 880 · local seo orlando 480 · web design orlando 720 · social
 * media marketing orlando 320 · ppc orlando 70. Search Console: Business
 * Profile optimization and reinstatement queries for Orlando, home
 * inspector marketing.
 *
 * Rules: the Florida hub keeps "florida digital marketing agency"; no
 * other city's terms are targeted. Customers search in English, Spanish
 * and Portuguese here, but the page never claims we write or run
 * campaigns in Spanish or Portuguese (not confirmed by the owner). No
 * Orlando office: we serve the city remotely. Company-wide
 * verified numbers only.
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
  FiClock,
  FiCompass,
  FiLayout,
  FiMapPin,
  FiMessageSquare,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { MdOutlineHotel, MdOutlineVerifiedUser } from "react-icons/md";
import {
  SiFacebook,
  SiGoogle,
  SiGooglegemini,
  SiGooglemaps,
  SiInstagram,
  SiNextdoor,
  SiOpenai,
  SiYelp,
} from "react-icons/si";

const PAGE_PATH = "/services/orlando/digital-marketing";
const HUB_PATH = "/services/florida/digital-marketing";

const TITLE = "Orlando Digital Marketing Agency | Digital Marketing Orlando FL";

const DESCRIPTION =
  "Orlando digital marketing agency for local businesses: Google Maps, Google Ads, AI answers and websites, with tourist and resident searches planned apart.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "orlando digital marketing agency",
    "digital marketing orlando fl",
    "digital marketing services orlando",
    "advertising agency orlando",
    "seo company orlando",
    "seo orlando",
    "local seo orlando",
    "web design orlando",
    "social media marketing orlando",
    "ppc orlando",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/orlando-digital-marketing-agency.webp",
        width: 1600,
        height: 900,
        alt: "Orlando digital marketing campaign dashboard with Lake Eola and the downtown Orlando skyline",
      },
    ],
    title: TITLE,
    description:
      "Google Maps, Google Ads, AI search and websites for Orlando businesses, with visitor and resident searches handled as two audiences.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: HUB_PATH },
  { name: "Orlando Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in Orlando, FL",
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
    name: "Orlando",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in the Orlando area",
  },
};

const OrlDmFaqs = [
  {
    question: "How much does an Orlando digital marketing agency cost?",
    answer:
      "Our plans are $297, $950 or $1,500 a month, with no long contract. Ad budgets are paid straight to Google or Meta, and we add 0% markup. The free audit recommends a plan based on your suburbs, your competitors and how quickly you need calls.",
  },
  {
    question: "Are you an SEO company in Orlando or a full-service agency?",
    answer:
      "Both. Local SEO in Orlando is often where we begin, since Map Pack spots keep bringing calls without a per-click cost. The same team also runs your Google Ads, social media marketing, AI search work and website, so you get one plan and one report.",
  },
  {
    question: "How do you work with Orlando clients without a local office?",
    answer:
      "We serve Orlando remotely and meet clients on video calls. Map rankings, ad accounts and websites are built through steady weekly work, not a desk on Orange Avenue, and every result shows up in your monthly report.",
  },
  {
    question: "How do you separate tourist searches from local customers?",
    answer:
      "Visitor searches around International Drive, Lake Buena Vista and the airport go into their own campaigns, with their own budget and landing pages. Resident campaigns stay locked to the ZIP codes you serve in places like Winter Park, Oviedo or Lake Nona. Trades that only work for homeowners simply exclude the tourist zones.",
  },
  {
    question: "Can you measure searches in Spanish and Portuguese?",
    answer:
      "Yes. Orlando customers search in English, Spanish and Portuguese, and our keyword research breaks that demand down service by service. You can use it to plan bilingual staff, phone hours or review requests. If you want pages or ads in another language, ask on your audit call and we will tell you plainly what we can deliver.",
  },
  {
    question: "Can you build or rebuild our Orlando website?",
    answer:
      "Yes. When a slow or dated site is losing the calls your ads and Maps listing earn, we build a phone-first replacement with tap-to-call, online booking and separate pages for every suburb you cover. Most new sites go live in two to three weeks.",
  },
  {
    question: "How long until an Orlando business sees results?",
    answer:
      "Paid search can start producing calls within days of launch. Map Pack gains take longer, usually a few months, and tend to come sooner in quieter suburbs than downtown or along I-Drive. Your monthly report shows the movement either way.",
  },
  {
    question: "Will ChatGPT recommend my Orlando business?",
    answer:
      "It can, once the signals line up. AI assistants favor businesses whose details match everywhere and whose pages answer questions plainly. We align your profile, website and listings, add answer-first pages with schema, and check monthly what ChatGPT, Gemini and Google’s AI Overviews say about your service in Orlando.",
  },
  {
    question: "My Orlando Google listing was suspended. Can you get it back?",
    answer:
      "Yes. Restoring suspended listings is one of our specialties, with 900+ reinstated so far. We find out why Google flagged the profile, gather the proof it asks for, file the appeal and then keep the listing inside the guidelines so it stays live.",
  },
  {
    question: "Which towns around Orlando do you cover?",
    answer:
      "All of Greater Orlando, including Winter Park, Maitland, Altamonte Springs, Lake Mary, Sanford, Oviedo, Winter Garden, Clermont, Kissimmee and St. Cloud. We target only the towns and ZIP codes you serve, and each one gets its own ranking checks in your report.",
  },
];

const orlDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: OrlDmFaqs.map((faq) => ({
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
  { icon: SiYelp, name: "Yelp", tone: "yelp" },
  { icon: SiNextdoor, name: "Nextdoor", tone: "nextdoor" },
];
const hubRight: HubApp[] = [
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiGooglegemini, name: "Gemini", tone: "gemini" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Orlando Digital Marketing Agency",
    h1Highlight: "That Reaches Locals and Visitors",
    sub: "Zonic Media plans digital marketing in Orlando, FL around how the city really searches: visitors along I-Drive, homeowners in Winter Park and Lake Nona, and customers typing in English, Spanish or Portuguese. Google Maps, Google Ads, AI answers and your website work as one plan.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide verified numbers plus a public place count (Orange County lists 13 municipalities (voteorangefl.gov).)
    // No Orlando client results, and no ad-markup stat (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiMapPin aria-hidden="true" />,
        num: "1,500+",
        label: "Google Business Profiles optimized",
      },
      // Not shown: the template's Google rating card takes this slot.
      {
        icon: <FiStar aria-hidden="true" />,
        num: "5.0",
        label: "Rated on Google",
      },
      {
        icon: <FiClock aria-hidden="true" />,
        num: "2–3 wks",
        label: "From kickoff to a new website, if you need one",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "13",
        label: "Cities and towns in Orange County",
      },
    ],
    proof: "",
    cta: "Free Orlando Marketing Audit",
  },
  about: {
    eyebrow: "Digital marketing in Orlando, FL",
    h2Start: "Orlando Has Two Search Crowds.",
    h2Highlight: "We Market to Both.",
    leads: [
      <>
        Visitors fill the hotels along International Drive and Lake Buena Vista
        all year, while people who live here look for the plumbers, clinics and
        lawyers they need in Winter Park, Lake Nona or Sanford. As an Orlando
        digital marketing agency, we treat those as two audiences with two
        budgets, so ads meant for homeowners never chase tourists.
      </>,
      <>
        One in-house team runs your ads, Google Maps profile, social media, AI
        search work and website, and the monthly report counts what matters:
        calls and booked jobs. Orlando is one of the metros in our{" "}
        <Link href={HUB_PATH} className="phl-inline-link">
          Florida digital marketing agency
        </Link>{" "}
        program. Working in more than one city? We also plan campaigns as a{" "}
        <Link
          href="/services/tampa/digital-marketing"
          className="phl-inline-link"
        >
          Tampa digital marketing agency
        </Link>{" "}
        and a{" "}
        <Link
          href="/services/jacksonville/digital-marketing"
          className="phl-inline-link"
        >
          Jacksonville digital marketing agency
        </Link>
        .
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Orlando Digital Marketing Agency • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Digital Marketing Services in Orlando, FL",
    lead: (
      <>
        Paid search, Google Maps, AI answers, social media and websites from one
        advertising agency for Orlando businesses, starting with{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="phl-inline-link"
        >
          Google Business Profile optimization
        </Link>{" "}
        and building from there.
      </>
    ),
    cards: [
      {
        tone: "blue",
        icon: <FiTarget aria-hidden="true" />,
        title: "PPC Management in Orlando",
        desc: "Google Ads and Local Services Ads that only show in the ZIP codes you serve, with tourist-zone searches kept out of resident budgets.",
        points: [
          "Wasted searches blocked weekly",
          "Visitor and local budgets split",
          "0% markup on ad spend",
        ],
        href: "/services/florida/ppc",
        link: "Florida PPC services",
      },
      {
        tone: "gold",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Orlando Local SEO for the Map Pack",
        desc: "A complete Business Profile, a page for each suburb and steady new reviews, so you climb into Google’s top three map results.",
        points: [
          "Rankings checked by suburb",
          "Profile updated every week",
          "Review asks after each job",
        ],
        href: "/services/florida/local-seo",
        link: "Florida local SEO",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Web Design for Orlando Companies",
        desc: "Quick-loading sites built for phones, with a call button, online booking and a launch in two to three weeks, so ad clicks turn into calls.",
        points: [
          "Phone-first layouts",
          "Call and booking buttons up top",
          "A page per service area",
        ],
        href: "/services/florida/web-design",
        link: "Florida web design",
      },
      {
        tone: "gold",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "AI Search Visibility for Orlando",
        desc: "Service pages that answer questions, schema markup and consistent business details, so ChatGPT, Gemini and AI Overviews name you when asked.",
        points: [
          "AI answers checked monthly",
          "Schema on service pages",
          "Facts aligned across listings",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
      {
        tone: "blue",
        icon: <MdOutlineHotel aria-hidden="true" />,
        title: "Tourism Marketing Near the Parks",
        desc: "Hotels, vacation rentals, restaurants and tour companies reach visitors while they plan, with social media posts and Google updates that keep bookings coming.",
        points: [
          "Visitor-zone targeting",
          "Instagram and Facebook posts",
          "Seasonal offers on Google",
        ],
        href: "/services/travel-and-tourism-marketing-agency",
        link: "Travel and tourism marketing",
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Business Profile Protection",
        desc: "Risky edits caught early and suspended listings appealed by the team behind 900+ reinstatements, so your Maps calls keep coming.",
        points: [
          "Edits monitored",
          "Guideline checks",
          "Appeals handled for you",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "GBP reinstatement service",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "See Which Orlando Suburbs Send the Calls",
    leads: [
      <>
        Downtown searches may bring plenty of clicks while Oviedo, St. Cloud or
        Clermont quietly books more jobs. Your monthly report sorts leads ring
        by ring around the city, so budget follows the suburbs that pay off.
      </>,
      <>
        Working in a home trade? We also run{" "}
        <Link
          href="/services/hvac-marketing-agency/florida"
          className="phl-inline-link"
        >
          HVAC marketing in Florida
        </Link>
        ,{" "}
        <Link
          href="/services/plumbing-marketing-agency/florida"
          className="phl-inline-link"
        >
          plumbing marketing for Florida companies
        </Link>
        ,{" "}
        <Link
          href="/services/home-inspector-marketing/florida"
          className="phl-inline-link"
        >
          home inspector marketing in Florida
        </Link>
        ,{" "}
        <Link
          href="/services/landscaping-marketing-agency"
          className="phl-inline-link"
        >
          landscaping marketing
        </Link>{" "}
        and{" "}
        <Link
          href="/services/cleaning-company-marketing-agency"
          className="phl-inline-link"
        >
          cleaning company marketing
        </Link>
        , plus{" "}
        <Link
          href="/services/law-firm-marketing-agency"
          className="phl-inline-link"
        >
          law firm marketing
        </Link>{" "}
        for Orlando attorneys.
      </>,
    ],
    cta: "Get My Orlando Suburb Report",
    // Sample report UI, not client data.
    console: {
      title: "Orlando lead rings",
      tag: "Sample report",
      metrics: [
        { strong: "4", label: "Suburb rings around downtown" },
        { strong: "3", label: "Lead sources tagged" },
        { strong: "2", label: "Visitor and resident views" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "How Your Orlando Campaign Gets Built",
    steps: [
      {
        tag: "Week 1",
        title: "Find Where Orlando Leads Leak",
        desc: "We check your ads, Business Profile, website and nearby competitors, then show where calls slip away: wrong areas, missed hours or a weak profile.",
      },
      {
        tag: "Weeks 2–4",
        title: "Choose the Suburbs and Searches to Win",
        desc: "Together we pick the towns, services and search terms worth paying for, separate visitor and resident demand and set budgets around your busy months.",
      },
      {
        tag: "Weekly",
        title: "Weekly Tuning After Launch",
        desc: "Tracking goes live with the campaigns. Each week we block wasted search terms, publish Google posts, draft review replies and test your booking path.",
        chips: ["Terms blocked", "Posts published", "Replies drafted"],
      },
      {
        tag: "Monthly",
        title: "A Report in Calls, Not Clicks",
        desc: "Each month you see leads by source, suburb and service, plus what we will change next, so budget keeps moving to whatever books.",
        chips: ["Leads by source", "Suburb view", "Next month’s plan"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My Orlando Growth Audit",
  },
  showcase: undefined,
  compare: {
    h2: "One Orlando Plan vs. a Stack of Vendors",
    lead: "Common gaps we find in Orlando accounts, and what one team changes.",
    themTitle: "A Stack of Vendors",
    themSub: "Why calls stall",
    them: [
      "Tourist and local ads in one budget",
      "A different vendor for each channel",
      "Rankings checked downtown only",
      "Reports full of impressions",
      "Twelve-month contracts up front",
    ],
    usTitle: "Our Orlando Plan",
    usSub: "One team, judged on leads",
    us: [
      "Visitor and resident campaigns apart",
      "Ads, Maps, AI and web in one plan",
      "Rankings tracked in every suburb",
      "Each lead matched to a booked job",
      "No contract, cancel any month",
    ],
    scoreTitle: "Orlando Growth Scorecard",
    scoreSub: "A sample of four signals our audit tracks",
    scoreRows: [
      { label: "Suburb coverage", before: 20, after: 80 },
      { label: "Campaign split", before: 10, after: 90 },
      { label: "Profile health", before: 45, after: 95 },
      { label: "AI mentions", before: 15, after: 65 },
    ],
  },
  why: {
    h2: "Why Orlando Businesses Pick Zonic Media",
    lead: "One accountable crew, judged by the calls and jobs we bring in, never by clicks.",
    cards: [
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "One crew for every channel",
        desc: "Ads, SEO, AI search, social and websites, all in-house.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Month to month, always",
        desc: "Cancel any month, and ad spend carries 0% markup.",
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Leads split by suburb",
        desc: "Calls and bookings by area, for visitors and residents.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Find Out What Orlando Customers See First",
      p: "We look at your ad account, Maps listing, website and the competitors around you in Orlando, then send a 90-day plan. It costs nothing, and there is nothing to sign.",
      checks: [
        "Ad waste flagged",
        "Suburb gaps mapped",
        "Listing risks spotted",
        "Next 90 days planned",
      ],
      cta: "Request My Free Orlando Audit",
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
    chipsLabel: "Industries we grow in Orlando",
    chips: [
      "Hotels & Hospitality",
      "HVAC & Plumbing",
      "Law Firms",
      "Home Inspectors",
      "Lawn & Landscaping",
      "Carpet & Rental Cleaning",
      "Dentists & Clinics",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Straight Answers for Orlando Business Owners",
    lead: "Pricing, suburbs, languages, AI search and listings, answered.",
    cta: "",
    items: OrlDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Orlando Marketing Audit",
    lead: "Tell us about your business and we will send an audit and a plan for the Orlando suburbs you serve.",
    formType: "orlando-digital-marketing",
    badge: "Free Audit",
    title: "Your Free Orlando Growth Audit",
    subtitle: "One short form. No contract afterwards.",
    submitText: "Send My Request",
    messageLabel: "What should we know first?",
    messagePlaceholder:
      "Your services, the towns around Orlando you cover, what you run now and your busy months",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-orlando",
  heroChips: {
    label: "Orange County cities and towns",
    items: ["Winter Park", "Winter Garden", "Apopka", "Ocoee", "Maitland"],
    more: true,
  },
  aboutTitle: ["Orlando Has Two", "Search Crowds.", "We Market to Both."],
  // Owner photo (19 Nov 2026); the crop keeps the wall sign in view on
  // phones, where the box is narrower than the photo.
  aboutPhoto: {
    src: "/images/florida/orlando-digital-marketing-agency.webp",
    alt: "Orlando digital marketing campaign dashboard with Lake Eola and the downtown Orlando skyline",
    position: "right top",
  },
  aboutCard: {
    kicker: "Planned for Orlando",
    title: "What we manage",
    points: [
      "Google Ads for visitors and residents",
      "Map Pack rankings by suburb",
      "AI answers and review growth",
      "A website that books the job",
    ],
    foot: "Run remotely, over video calls",
  },
  // Orlando palette: violet, blossom pink, mint, night navy.
  pillars: ["#6d28d9", "#fce7f3", "#d1fae5", "#172554"],
  features: {
    h2: "Built for the Way Orlando Searches",
    lead: (
      <>
        Two crowds with different needs, three search languages and listings
        that need protecting. Here is how our{" "}
        <Link href="/services/google-ads" className="phl-inline-link">
          Google Ads management
        </Link>{" "}
        and Maps work handle each one.
      </>
    ),
    items: [
      {
        label: "Visitors vs. residents",
        title: "Tourist Searches and Local Searches, Kept Apart",
        body: (
          <>
            A search for dinner near International Drive and a search for AC
            repair in Winter Park need different ads, hours and landing pages.
            We route visitor searches around I-Drive, Lake Buena Vista and the
            airport into their own campaigns, keep homeowner campaigns locked to
            your ZIP codes, and pair each with a page from our{" "}
            <Link href="/services/web-design" className="phl-inline-link">
              website design services
            </Link>
            . Trades that serve only residents simply leave the tourist zones
            out.
          </>
        ),
        points: [
          { t: "Separate visitor campaigns", d: "Hotel corridors and parks." },
          { t: "Resident ZIP targeting", d: "Winter Park to Lake Nona." },
          { t: "Two budgets, two reports", d: "Each side measured alone." },
          { t: "Matching landing pages", d: "The right page per crowd." },
        ],
        href: "/services/travel-and-tourism-marketing-agency",
        link: "See tourism marketing",
        ui: "city-1",
      },
      {
        label: "Search languages",
        title: "Orlando Searches in English, Spanish and Portuguese",
        body: "Customers here search in all three languages, and the mix shifts by service and by suburb. Our keyword research sizes that demand service by service and lays it out side by side, so you can decide where bilingual staff, phone hours or review requests will help you win the call.",
        points: [
          { t: "Demand by language", d: "Measured for each service." },
          { t: "Suburb by suburb", d: "Each area read on its own." },
          { t: "Changes over the year", d: "Tracked month by month." },
          { t: "Clear next steps", d: "Staffing and review ideas." },
        ],
        href: "/services/florida/local-seo",
        link: "See Florida local SEO",
        ui: "city-2",
      },
      {
        label: "Listing safety",
        title: "An Orlando Business Profile That Stays Live",
        body: "A suspended listing can wipe out Map Pack calls overnight. We watch your profile for risky edits, keep the name, categories and service area within Google’s rules, and if a suspension does happen, the team behind 900+ reinstatements handles the appeal.",
        points: [
          { t: "Edits watched", d: "Unwanted changes caught early." },
          { t: "Guideline checks", d: "Name, categories, service area." },
          { t: "Photo and post upkeep", d: "An active, trusted profile." },
          { t: "Appeals handled", d: "If Google ever suspends you." },
        ],
        href: "/services/gbp-reinstatement-service",
        link: "See profile reinstatement",
        ui: "city-3",
      },
    ],
  },
  platforms: {
    h2: "Visible on Every App Orlando Checks",
    lead: "Residents read Google reviews and ask neighbors on Nextdoor. Visitors scroll Instagram, check Yelp and ask ChatGPT or Gemini for a recommendation near their hotel. Your hours, photos, services and reviews stay accurate across all of them.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Search, Maps and reviews",
    rightLabel: "Social feeds and AI assistants",
    centerIcon: <FiCompass aria-hidden="true" />,
    centerTitle: "Your Orlando business",
    centerSub: "accurate on every app",
  },
  pricing: {
    title: "Orlando Digital Marketing Plans",
    lead: "Monthly plans for Orlando businesses, from Map Pack basics to a full ads, SEO and social program.",
    compareTitle: "What You Get on Each Orlando Plan",
    compareLead: "Every feature, side by side.",
    addOnsTitle: "Extras for Orlando Campaigns",
    addOnsLead: "Add suburbs, landing pages or campaigns as you grow.",
    customTitle: "More than one Orlando-area location?",
    customText: "We will plan each location and the suburbs around it.",
  },
  phone: "city",
  darkUi: "city",
  scoreStyle: "city",
  noGrow: true,
  reviewsTitle: "Google Reviews From Our Clients",
  contact: {
    before: "Let’s Win More",
    after: "Orlando Customers",
    lead: "Share your services and the Orlando-area towns you cover. We will audit your Google Ads, Maps listing and website at no cost.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orlDmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
