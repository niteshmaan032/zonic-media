/*
 * ST. PETERSBURG DIGITAL MARKETING — new live page (18 Nov 2026), a city
 * page in the Florida silo under /services/florida/digital-marketing. Built
 * on the location template shared with the Delaware, Philadelphia, NYC and
 * Florida pages (src/components/rd/delaware/DelawareLanding.tsx) with this
 * page's own UI (flStPetersburgUi.tsx). Brief: docs/florida-cities-brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-cities-
 * keywords-2026-11.md): digital marketing agency st petersburg 480 (KD 6) ·
 * digital marketing st. petersburg fl 320 · digital marketing agency st
 * petersburg fl 260 (KD 4) · st petersburg digital marketing companies 260
 * · digital marketing st petersburg 260 (KD 9) · digital marketing st pete
 * 210 (KD 5) · digital marketing agency st pete 170 (KD 6) · st pete
 * marketing agency 70 (KD 8, rising) · digital marketers in st petersburg
 * florida 140. Secondary (H2/H3, FAQ, body only): seo company st petersburg
 * 720 · seo st petersburg 590 · local seo st petersburg 320 (KD 1) · web
 * design st petersburg 590 · social media marketing st petersburg 110.
 *
 * Cannibalization: this page owns "St. Pete" and "Pinellas"; "Tampa Bay"
 * belongs to the Tampa page and is never used here. No "florida digital
 * marketing agency" head term (the hub's; it appears only as the hub link's
 * anchor). Fresh wording only; company-wide verified numbers only; no St.
 * Petersburg office is implied (we serve Pinellas remotely).
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
  FiLayout,
  FiMapPin,
  FiMessageSquare,
  FiRotateCcw,
  FiSearch,
  FiStar,
  FiSunrise,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import {
  SiFacebook,
  SiGoogle,
  SiGooglemaps,
  SiInstagram,
  SiOpenai,
  SiTiktok,
  SiTripadvisor,
  SiYelp,
} from "react-icons/si";

const PAGE_PATH = "/services/st-petersburg/digital-marketing";
const HUB_PATH = "/services/florida/digital-marketing";

const TITLE =
  "Digital Marketing Agency St. Petersburg, FL | St. Pete Marketing";

const DESCRIPTION =
  "Digital marketing agency in St. Petersburg, FL: local SEO, Google Ads, web design, reviews and AI search for St. Pete and Pinellas businesses, town by town.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "digital marketing agency st petersburg",
    "digital marketing st. petersburg fl",
    "digital marketing agency st petersburg fl",
    "digital marketing st petersburg",
    "st petersburg digital marketing companies",
    "digital marketing st pete",
    "digital marketing agency st pete",
    "st pete marketing agency",
    "digital marketers in st petersburg florida",
    "seo company st petersburg",
    "local seo st petersburg",
    "web design st petersburg",
    "social media marketing st petersburg",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/st-petersburg-digital-marketing-agency.webp",
        width: 1600,
        height: 900,
        alt: "St. Petersburg, FL digital marketing dashboards for SEO and social media, with the downtown waterfront",
      },
    ],
    title: TITLE,
    description:
      "Map rankings, Google Ads, websites, reviews and AI answers for St. Pete businesses, planned town by town from Dunedin to St. Pete Beach.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: HUB_PATH },
  { name: "St. Petersburg Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in St. Petersburg, FL",
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
    name: "St. Petersburg",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in St. Petersburg and Pinellas County",
  },
};

const StPeteDmFaqs = [
  {
    question: "How much does a St. Petersburg digital marketing agency charge?",
    answer:
      "Our plans are $297, $950 or $1,500 a month, with no long-term contract. Google or Meta bill your ad spend directly, with zero markup from us. After a free audit, we recommend the plan that suits your business and the Pinellas towns you cover.",
  },
  {
    question: "Where is your team, and how do St. Pete clients meet you?",
    answer:
      "Our team works remotely and meets St. Pete clients on video calls. Map positions, ads and websites improve through steady weekly work and clear reporting, not a local street address, and you receive a written summary each month.",
  },
  {
    question: "Which Pinellas County towns do you cover?",
    answer:
      "All of them, including downtown St. Pete, Old Northeast, Kenwood, Shore Acres, Gulfport, St. Pete Beach, Treasure Island, Madeira Beach, Seminole, Pinellas Park, Largo, Clearwater, Dunedin, Palm Harbor and Tarpon Springs. Ads and service areas reach only the places you truly serve.",
  },
  {
    question: "Can you be our SEO company in St. Petersburg?",
    answer:
      "Yes. For most businesses, SEO in St. Petersburg starts with local SEO: every Business Profile field filled in, pages for your towns and services, steady reviews and accurate listings, aimed at the top three map spots. Once those hold, we add content for wider searches.",
  },
  {
    question: "Do you handle web design in St. Petersburg too?",
    answer:
      "Yes. We design sites that load fast on phones, keep a call button in reach, offer booking or quote forms and give every service and town its own page. Most go live two to three weeks after kickoff. Already have a site that converts? Then we sharpen the pages that bring leads rather than rebuild.",
  },
  {
    question: "How does hurricane season change marketing in Pinellas?",
    answer:
      "From June to November, wind and storm surge push searches toward roofing, flood cleanup, seawall repair and generators, and beach-town businesses may close for days. We ready storm pages, ads and Google profile updates before the season, then switch them on and adjust hours as soon as a storm nears.",
  },
  {
    question: "When are the busiest months for St. Pete businesses?",
    answer:
      "Winter residents arrive around October and stay into April, while spring break and the Grand Prix weekend bring crowds early in the year. Restaurants, rentals and service companies should have posts, offers and ads running before the rush; summer is the time to grow SEO.",
  },
  {
    question:
      "How should I compare St. Petersburg digital marketing companies?",
    answer:
      "Ask who actually does the work, how results are measured and how long you are tied in. Look for one team covering maps, ads, website and AI answers, reports that count calls and bookings instead of clicks, and an agreement you can leave any month.",
  },
  {
    question: "Do you run social media marketing in St. Petersburg?",
    answer:
      "Yes. Each month we map out Instagram, Facebook and Google profile posts around finished work, new reviews and local moments such as Second Saturday ArtWalk, and add Meta ads when they fit your offer. Social sits in the same report as search.",
  },
  {
    question: "Does AI search matter for a small business in St. Pete?",
    answer:
      "A growing share of buyers now start with ChatGPT, Gemini or an AI Overview before they search. Those tools favor businesses whose facts agree everywhere, so we make your website, profile and listings tell the same story, write pages that answer common questions up front, mark them up with schema and check monthly what each assistant says about you.",
  },
  {
    question: "What if my Google listing in Pinellas gets suspended?",
    answer:
      "Hold off on creating a replacement listing, which usually deepens the problem. We’ve brought back 900+ suspended profiles, and after a recovery we keep your categories, service areas and business details inside Google’s rules.",
  },
];

const stPeteDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: StPeteDmFaqs.map((faq) => ({
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
  { icon: SiTripadvisor, name: "Tripadvisor", tone: "tripadvisor" },
];
const hubRight: HubApp[] = [
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiTiktok, name: "TikTok", tone: "tiktok" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "St. Petersburg Digital Marketing",
    h1Highlight: "Agency for Pinellas County Businesses",
    sub: "Zonic Media helps St. Pete restaurants, shops, clinics and home service crews get chosen on Google Maps, Google Ads, AI answers and their own website. Plans follow the Pinellas map from Dunedin down to St. Pete Beach, with reviews and posts kept fresh every week.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide verified numbers plus a public place count (Pinellas has 24 municipalities (pinellas.gov).)
    // No St. Petersburg client results, and no ad-markup stat (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiRotateCcw aria-hidden="true" />,
        num: "900+",
        label: "Suspended listings our team has put back on Maps",
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
        label: "Review of your marketing before any plan starts",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "24",
        label: "Cities and towns in Pinellas County",
      },
    ],
    proof: "",
    cta: "See Where I Rank in St. Pete",
  },
  about: {
    eyebrow: "Digital marketing in St. Petersburg, FL",
    h2Start: "One Peninsula,",
    h2Highlight: "Many Search Markets.",
    leads: [
      <>
        Pinellas is packed tight, yet a search in Dunedin rarely shows the same
        map results as one in Gulfport. A café on Central Avenue, a seawall
        contractor in Shore Acres and a dentist in Clearwater each compete
        inside a few miles, so digital marketing in St. Petersburg, FL has to be
        planned town by town.
      </>,
      <>
        As a St. Pete marketing agency that works remotely, we keep your ads,
        Google profile, website and AI visibility with one in-house team, and
        every report counts calls and booked jobs. The statewide plan, region by
        region, lives on our{" "}
        <Link href={HUB_PATH} className="phl-inline-link">
          Florida digital marketing agency
        </Link>{" "}
        hub.
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "St. Petersburg Digital Marketing Agency • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Digital Marketing Services in St. Pete and Pinellas",
    lead: "What St. Pete owners expect from digital marketers, handled by one team: maps, search, ads, social, websites and AI answers, each one sending more people to your phone.",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Local SEO for St. Petersburg Map Results",
        desc: "Comparing SEO companies in St. Petersburg? We start local SEO by completing your Business Profile, adding pages for the towns you serve and building a steady flow of reviews, aimed at the top three map spots.",
        points: [
          "Profile edits every week",
          "Ranks checked town by town",
          "Pages for Pinellas service areas",
        ],
        href: "/services/florida/local-seo",
        link: "Florida local SEO services",
      },
      {
        tone: "gold",
        icon: <FiTarget aria-hidden="true" />,
        title: "Google Ads and PPC for St. Pete Businesses",
        desc: "Search and Local Services Ads aimed only at the Pinellas ZIP codes you cover, with budgets raised before busy months and wasted searches removed weekly.",
        points: [
          "Campaigns split by town",
          "Weekly search-term cleanup",
          "Ad spend billed at cost",
        ],
        href: "/services/florida/ppc",
        link: "Florida PPC management services",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "St. Petersburg Web Design That Books Calls",
        desc: "Phone-first sites that load fast, with tap-to-call, booking and pages for each service and beach town, so visitors from Maps and ads become customers.",
        points: [
          "Phone-first layouts",
          "Town and service pages",
          "Live in 2–3 weeks",
        ],
        href: "/services/florida/web-design",
        link: "Web design in Florida",
      },
      {
        tone: "gold",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "AI Answers for Pinellas Businesses",
        desc: "When someone asks ChatGPT, Gemini or Google’s AI Overviews for a dentist in Clearwater or a roofer near Largo, matching facts and answer-first pages help your name make the reply.",
        points: [
          "Pages that answer buyer questions",
          "Business facts matched everywhere",
          "AI replies reviewed monthly",
        ],
        href: "/services/ai-seo-services",
        link: "AI SEO services",
      },
      {
        tone: "blue",
        icon: <FiUsers aria-hidden="true" />,
        title: "St. Petersburg Social Media Marketing",
        desc: "Instagram and Facebook content plus Google posts tied to what’s on in town, from Second Saturday ArtWalk to the Grand Prix weekend, with Meta ads when they suit what you sell.",
        points: [
          "A planned monthly calendar",
          "Posts for local events",
          "Meta ads when they fit",
        ],
        href: "/services/travel-and-tourism-marketing-agency",
        link: "Travel and tourism marketing",
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Reviews, Replies and Profile Safety",
        desc: "Review requests texted after every job, replies drafted in your voice for you to approve, and quick help if Google suspends your listing, with 900+ profiles reinstated.",
        points: [
          "Texted review requests",
          "Replies you approve",
          "Suspension recovery",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Business Profile reinstatement",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "Leads Mapped Down the Pinellas Peninsula",
    leads: [
      <>
        Most St. Pete businesses work in more than one town. Your report pins
        calls, forms and direction requests on the map from Tarpon Springs to
        Pass-a-Grille, so you see which towns book and which only browse.
      </>,
      <>
        Serving customers across the water as well? See our{" "}
        <Link
          href="/services/tampa/digital-marketing"
          className="phl-inline-link"
        >
          Tampa digital marketing agency
        </Link>{" "}
        plan, or head down the coast to our{" "}
        <Link
          href="/services/sarasota/digital-marketing"
          className="phl-inline-link"
        >
          Sarasota digital marketing agency
        </Link>{" "}
        page.
      </>,
    ],
    cta: "Get My Pinellas Lead Map",
    // Sample report UI, not client data.
    console: {
      title: "Pinellas lead map",
      tag: "Sample report",
      metrics: [
        { strong: "10", label: "Towns pinned" },
        { strong: "Top 3", label: "Map goal in each" },
        { strong: "Monthly", label: "Report by town" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "How We Launch Your St. Pete Campaign",
    steps: [
      {
        tag: "Week 1",
        title: "Check What St. Pete Searchers See",
        desc: "We search like your customers in each town you serve, then grade your profile, reviews, site and ads against the businesses that show up first.",
      },
      {
        tag: "Weeks 2–4",
        title: "Build Pages, Posts and Ads by Town",
        desc: "Service pages, town pages, Google posts and ad groups are set up for the parts of Pinellas that matter most to your business.",
      },
      {
        tag: "Weekly",
        title: "Post, Reply and Prune Every Week",
        desc: "Every week brings new Google posts, replies to fresh reviews, a sweep of wasted search terms and a rank check in each town.",
        chips: ["Posts live", "Reviews answered", "Terms cleaned"],
      },
      {
        tag: "Monthly",
        title: "Shift Effort to the Towns That Book",
        desc: "Your monthly report breaks leads down by town, channel and service, and we move time and budget toward whatever books jobs.",
        chips: ["Town report", "Next month’s plan", "Budget moves"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My St. Pete Audit",
  },
  showcase: undefined,
  compare: {
    h2: "One Team vs. Disconnected Vendors",
    lead: "Where St. Pete marketing budgets drift, and how a single plan keeps them working.",
    themTitle: "Disconnected Vendors",
    themSub: "Why calls stay flat",
    them: [
      "Separate vendors for ads, SEO and web",
      "One map radius for the whole county",
      "A Google profile untouched for months",
      "Unanswered reviews piling up",
      "A long contract signed up front",
    ],
    usTitle: "Our St. Pete Program",
    usSub: "Measured in calls and bookings",
    us: [
      "Maps, ads, web and AI in one plan",
      "Visibility tracked town by town",
      "Weekly posts and review replies",
      "Every lead tied to its source",
      "No contract; leave any month",
    ],
    scoreTitle: "Sample St. Pete Brick Wall",
    scoreSub: "How four audit signals build up, shown as an example",
    scoreRows: [
      { label: "Town coverage", before: 20, after: 80 },
      { label: "Fresh Google posts", before: 10, after: 90 },
      { label: "Review replies", before: 30, after: 100 },
      { label: "AI mentions", before: 10, after: 60 },
    ],
  },
  why: {
    h2: "Why Pinellas Owners Choose Zonic Media",
    lead: "One team that answers for calls and booked jobs, without a long contract.",
    cards: [
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "One plan for every channel",
        desc: (
          <>
            Map work,{" "}
            <Link href="/services/google-ads">Google Ads management</Link> and{" "}
            <Link href="/services/web-design">website design</Link> run on a
            single plan and report.
          </>
        ),
      },
      {
        icon: <FiTool aria-hidden="true" />,
        title: "Plans for your line of work",
        desc: (
          <>
            From{" "}
            <Link href="/services/pool-service-marketing-agency">
              pool service marketing
            </Link>{" "}
            to{" "}
            <Link href="/services/roofing-marketing-agency">
              roofing marketing
            </Link>
            , shaped by how your customers search.
          </>
        ),
      },
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "Reports split by town",
        desc: "Calls, forms and bookings for each Pinellas town, sent to you monthly.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Get a Free Look at Your St. Pete Visibility",
      p: "We check your Google profile, reviews, website and ads against the businesses ranking around you, then send a plan for the coming season. Free, with no strings attached.",
      checks: [
        "Map ranks by town",
        "Unanswered reviews counted",
        "Ad waste flagged",
        "A plan for next season",
      ],
      cta: "Send My Free St. Pete Audit",
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
    chipsLabel: "Industries we grow in St. Pete",
    chips: [
      "Restaurants & Cafés",
      "Breweries & Bars",
      "Boutiques & Shops",
      "Seawall & Dock Builders",
      "Roofing & Restoration",
      "Pool Service",
      "Dentists & Chiropractors",
      "Real Estate",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "St. Pete Owners Ask, We Answer",
    lead: "Costs, coverage, seasons, reviews and AI search, each in a few lines.",
    cta: "",
    items: StPeteDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Ask for a Free St. Petersburg Marketing Audit",
    lead: "Share a few details and we’ll send an audit plus a plan for the Pinellas towns you serve.",
    formType: "st-petersburg-digital-marketing",
    badge: "Free Audit",
    title: "Your Free St. Pete Marketing Audit",
    subtitle: "Takes about a minute, with no commitment.",
    submitText: "Request My St. Pete Audit",
    messageLabel: "What should we know first?",
    messagePlaceholder:
      "What you offer, the Pinellas towns you serve, the marketing you run today and your busiest months",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-st-petersburg",
  heroChips: {
    label: "Pinellas County cities and towns",
    items: ["Clearwater", "Largo", "Pinellas Park", "Dunedin", "Seminole"],
    more: true,
  },
  aboutTitle: ["One Peninsula,", "Many Different", "Search Markets."],
  // Owner photo (19 Nov 2026); the crop keeps the wall sign in view on
  // phones, where the box is narrower than the photo.
  aboutPhoto: {
    src: "/images/florida/st-petersburg-digital-marketing-agency.webp",
    alt: "St. Petersburg, FL digital marketing dashboards for SEO and social media, with the downtown waterfront",
    position: "left top",
  },
  aboutCard: {
    kicker: "Your St. Pete program",
    title: "Covered by one plan",
    points: [
      "Map rankings in each Pinellas town",
      "Search ads and Local Services Ads",
      "Weekly Google posts and review replies",
      "AI answer checks every month",
    ],
    foot: "Managed remotely, over video calls",
  },
  // St. Pete palette: mangrove green, Gulf sky, orchid, deep channel teal.
  pillars: ["#4d7c0f", "#e0f2fe", "#fae8ff", "#164e63"],
  features: {
    h2: "How St. Pete Businesses Win Local Searches",
    lead: (
      <>
        Short distances, busy main streets and customers who read reviews first
        shape how people choose here. Three habits keep you in front of them.
      </>
    ),
    items: [
      {
        label: "Towns",
        title: "Rank in Every Pinellas Town You Serve",
        body: (
          <>
            Map results shift every few miles along the peninsula. A plumber who
            leads in Largo can be missing in Dunedin or on St. Pete Beach. We
            track your map position town by town for each service, as in our{" "}
            <Link href="/services/plumbing-marketing-agency/florida">
              Florida plumbing marketing
            </Link>{" "}
            plans, then add pages, posts and reviews wherever you slip.
          </>
        ),
        points: [
          { t: "Rank checks by town", d: "Positions for each key service." },
          { t: "Town pages that help", d: "Real details, not swapped names." },
          { t: "Service areas set right", d: "Only places you truly cover." },
          { t: "Weak towns first", d: "The biggest gaps get fixed first." },
        ],
        href: "/services/florida/local-seo",
        link: "Explore Florida local SEO",
        ui: "city-1",
      },
      {
        label: "Google posts",
        title: "Weekly Google Posts for Shops and Restaurants",
        body: (
          <>
            Restaurants, cafés, boutiques and breweries from the Grand Central
            District to Beach Drive live on what is happening this week. We
            schedule Google posts for specials, live music, ArtWalk nights and
            holiday hours, so your profile looks open and current. Beach rentals
            and charters can pair this with{" "}
            <Link href="/services/travel-and-tourism-marketing-agency">
              tourism marketing
            </Link>
            .
          </>
        ),
        points: [
          { t: "Specials and events", d: "Posted before the weekend." },
          { t: "Holiday and storm hours", d: "Changed the same day." },
          { t: "Photos from the week", d: "New images on your profile." },
          { t: "Posts with a button", d: "Call, order or reserve." },
        ],
        href: "/local-seo-google-business-optimization",
        link: "See Google Business Profile optimization",
        ui: "city-2",
      },
      {
        label: "Reviews",
        title: "A Reply for Every Review, Approved by You",
        body: (
          <>
            People here read reviews before they book, and how you answer
            matters as much as the stars. We ask for reviews after each job,
            draft a reply to every new one in your voice and post it once you
            approve. Clinics, law offices and realtors lean on reviews too; see
            our{" "}
            <Link href="/services/chiropractic-marketing-agency">
              chiropractic marketing
            </Link>
            ,{" "}
            <Link href="/services/law-firm-marketing-agency">
              law firm marketing
            </Link>{" "}
            and{" "}
            <Link href="/services/real-estate-marketing-agency">
              real estate marketing
            </Link>{" "}
            plans.
          </>
        ),
        points: [
          { t: "Texted review asks", d: "Sent when the job wraps." },
          { t: "Drafts in your voice", d: "Ready the same day." },
          { t: "You approve each one", d: "Nothing posts unseen." },
          { t: "Tough reviews handled", d: "Calm, careful answers." },
        ],
        href: "/services/dental-marketing-agency",
        link: "See dental marketing",
        ui: "city-3",
      },
    ],
  },
  platforms: {
    h2: "The Apps St. Pete Customers Use to Choose",
    lead: "People here search Google, compare map pins, read Yelp and Tripadvisor, follow local spots on Instagram and TikTok and ask ChatGPT for a short list. We keep your hours, menus, photos and reviews matching on every one.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Search, maps and reviews",
    rightLabel: "Social feeds and AI chat",
    centerIcon: <FiSunrise aria-hidden="true" />,
    centerTitle: "Your St. Pete business",
    centerSub: "the same facts on every app",
  },
  pricing: {
    title: "St. Pete Marketing Plans and Monthly Prices",
    lead: "Month-to-month plans for St. Pete businesses, from a strong Google profile to full SEO, ads and social.",
    compareTitle: "Compare St. Pete Marketing Plans",
    compareLead: "Every inclusion, plan by plan.",
    addOnsTitle: "Add-Ons for Pinellas Businesses",
    addOnsLead: "Bolt on extra towns, pages or ad campaigns as you grow.",
    customTitle: "Several Pinellas locations?",
    customText: "Tell us about each one and we’ll scope a plan to match.",
  },
  phone: "city",
  darkUi: "city",
  scoreStyle: "city",
  noGrow: true,
  reviewsTitle: "Clients in Their Own Words",
  contact: {
    before: "Own Your Corner",
    after: "of St. Pete",
    lead: "Share what your business offers and the towns you cover, from Clearwater to St. Pete Beach. Our team checks your ads, Google profile and website free of charge.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stPeteDmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
