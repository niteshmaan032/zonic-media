/*
 * JACKSONVILLE DIGITAL MARKETING — new live page (18 Nov 2026), a city page
 * in the Florida silo under the hub /services/florida/digital-marketing.
 * Built on the shared location template
 * (src/components/rd/delaware/DelawareLanding.tsx) with this page's own UI
 * (flJacksonvilleUi.tsx). Brief: docs/florida-cities-brief.md.
 *
 * Keywords (Semrush US, 18 Nov 2026; reports/research/florida-cities-
 * keywords-2026-11.md): jacksonville digital marketing agency 480 (KD 34) ·
 * jacksonville digital marketing 590 · best digital marketing companies in
 * jacksonville 170 · digital marketing recommendations jacksonville 170 ·
 * hard, long term: digital marketing agency jacksonville 480 (KD 69),
 * digital marketing jacksonville 480 (KD 55), marketing agency jacksonville
 * 590 (KD 53). Secondary (H3s, FAQs, body only): seo jacksonville 1,300 ·
 * seo company jacksonville 1,000 · web design jacksonville 880 (rising) ·
 * local seo jacksonville 320 · social media marketing jacksonville 320 · ppc
 * jacksonville 170 · google ads agency jacksonville 50.
 *
 * Rules: the hub owns the Florida-wide terms; no other city's terms here.
 * Fresh wording only; company-wide verified numbers only; no Jacksonville
 * office is implied (we serve the city remotely).
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
  FiKey,
  FiLayout,
  FiMapPin,
  FiMessageCircle,
  FiMessageSquare,
  FiRotateCcw,
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
  SiNextdoor,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";

const PAGE_PATH = "/services/jacksonville/digital-marketing";
const HUB_PATH = "/services/florida/digital-marketing";

const TITLE =
  "Jacksonville Digital Marketing Agency | SEO, Ads & Web Design";

const DESCRIPTION =
  "Jacksonville digital marketing agency for local businesses: Google Maps, SEO, Google Ads, AI search and websites planned for each side of the St. Johns River.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "jacksonville digital marketing agency",
    "jacksonville digital marketing",
    "digital marketing jacksonville",
    "digital marketing agency jacksonville",
    "best digital marketing companies in jacksonville",
    "digital marketing recommendations jacksonville",
    "marketing agency jacksonville",
    "seo jacksonville",
    "seo company jacksonville",
    "local seo jacksonville",
    "web design jacksonville",
    "social media marketing jacksonville",
    "ppc jacksonville",
    "google ads agency jacksonville",
    "digital marketing jacksonville beach",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/florida/jacksonville-digital-marketing-agency.webp",
        width: 1600,
        height: 900,
        alt: "Jacksonville digital marketing dashboard with a view of the St. Johns River and downtown towers",
      },
    ],
    title: TITLE,
    description:
      "Maps, SEO, ads, social and AI search for Jacksonville companies, aimed at the parts of town your crews reach and timed to Navy move season.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Florida Digital Marketing", url: HUB_PATH },
  { name: "Jacksonville Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing in Jacksonville",
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
    name: "Jacksonville",
    containedInPlace: { "@type": "State", name: "Florida" },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Jacksonville and Northeast Florida",
  },
};

const JaxDmFaqs = [
  {
    question: "How much does a Jacksonville digital marketing agency cost?",
    answer:
      "Our plans are $297, $950 or $1,500 a month, billed month to month and never locked into a long contract. You pay Google or Meta for ads directly, and we add 0% on top. Most owners start where their gaps are biggest, and after the free audit we recommend one based on your zones, your trade and your busy months.",
  },
  {
    question:
      "How do I compare the best digital marketing companies in Jacksonville?",
    answer:
      "Ask each one what they report, who does the work and what you are signing. Strong answers are leads by part of town rather than clicks, an in-house team rather than handoffs, and month-to-month terms. Then read their Google reviews and ask how they would handle your side of the river and your busiest season.",
  },
  {
    question:
      "How long does SEO take for Jacksonville Beach and Northeast Florida service areas?",
    answer:
      "Whether you hire us as an SEO company in Jacksonville or for a full plan, profile fixes and new area pages usually go live in the first month. Map Pack movement in one area, such as Jacksonville Beach, Mandarin or Arlington, tends to follow over the next few months, depending on how established nearby rivals are. Wider reach from Orange Park to St. Augustine grows as reviews and links build.",
  },
  {
    question: "Should a Jacksonville contractor run Local Services Ads?",
    answer:
      "Usually, yes. Local Services Ads sit above regular search ads, show a Google Verified badge and bill you for each lead instead of each click, which suits roofers, plumbers and HVAC crews. We set them up as part of PPC in Jacksonville, next to call ads, and keep both limited to the ZIP codes your trucks actually reach.",
  },
  {
    question: "Do I need a Jacksonville-based agency to rank locally?",
    answer:
      "No. Our in-house team works remotely and meets Jacksonville clients on video calls, with a written report every month. Map Pack rankings depend on your business address, your profile and the work done on both, not on where your agency sits.",
  },
  {
    question: "Which areas around Jacksonville do you cover?",
    answer:
      "All of Duval County, from Northside and the Westside to Southside, Arlington and Mandarin, plus the Beaches, Ponte Vedra, Nocatee, St. Augustine, Orange Park, Fleming Island and Fernandina Beach. We target only the places your team serves, and each one gets its own zone, budget and rank tracking.",
  },
  {
    question: "How do military moves affect marketing in Jacksonville?",
    answer:
      "Many Navy families relocate in summer, and those bound for NAS Jacksonville or Naval Station Mayport start searching for homes, schools and services in spring. We lift budgets and refresh offers from April through August, and make sure recent reviews and clear area pages are waiting when new households compare their options.",
  },
  {
    question:
      "How should Jacksonville businesses get ready for hurricane season?",
    answer:
      "Even storms that stay offshore can bring wind, flooding and fallen trees to the Beaches and the low streets along the river. For roofers, tree crews and restoration firms we build storm ads, emergency landing pages and Business Profile updates before June 1, then go back to normal campaigns when the cleanup is over.",
  },
  {
    question:
      "Can you get my company recommended by ChatGPT for Jacksonville searches?",
    answer:
      "We raise the odds. AI assistants lean toward businesses with consistent details across the web and pages that give direct answers. We line up your site, profile and listings, add question-led pages with schema, and check each month what ChatGPT, Gemini and Perplexity say when someone asks for your service in Jacksonville.",
  },
  {
    question: "Do you offer web design for Jacksonville companies?",
    answer:
      "Yes. Our sites load fast on phones, put the call button up top, take bookings online and give each part of town its own page, so the traffic from your ads and Maps listing turns into calls. Most launch in two to three weeks.",
  },
];

const jaxDmFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: JaxDmFaqs.map((faq) => ({
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
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: SiNextdoor, name: "Nextdoor", tone: "nextdoor" },
];
const hubRight: HubApp[] = [
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiPerplexity, name: "Perplexity", tone: "perplexity" },
];

const data: DelawareData = {
  hero: {
    eyebrow: "",
    h1Start: "Jacksonville Digital Marketing Agency",
    h1Highlight: "for Northeast Florida Businesses",
    sub: "Zonic Media runs Jacksonville digital marketing as one plan: Google Maps, SEO, Google Ads, social and AI search, aimed at the parts of town your crews reach.",
    media: { src: "", alt: "" },
    floatA: { strong: "", text: "" },
    floatB: { strong: "", text: "" },
    // Company-wide verified numbers plus a public place count (Jacksonville metro: Duval, St. Johns, Clay, Nassau, Baker.)
    // No Jacksonville client results, and no ad-markup stat (owner, 19 Nov 2026).
    stats: [
      {
        icon: <FiRotateCcw aria-hidden="true" />,
        num: "900+",
        label: "Suspended Business Profiles reinstated by our team",
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
        label: "Yours: the website, domain and content we build",
      },
      {
        icon: <FiTrendingUp aria-hidden="true" />,
        num: "5",
        label: "Counties in the Jacksonville metro",
      },
    ],
    proof: "",
    cta: "Audit My Jacksonville Marketing",
  },
  about: {
    eyebrow: "Digital marketing in Jacksonville",
    h2Start: "Big City, Long Drives.",
    h2Highlight: "We Plan Side by Side.",
    leads: [
      <>
        Jacksonville is the largest city by land area in the contiguous U.S.,
        and nobody in Oceanway wants to wait on a plumber from Mandarin. The St.
        Johns splits the city, the bridges set the drive times and the Beaches
        act like a town of their own. We learn where your buyers search, which
        bridges your team will cross and where a click is most likely to become
        a booked job.
      </>,
      <>
        It’s part of our{" "}
        <Link href={HUB_PATH} className="phl-inline-link">
          Florida digital marketing agency
        </Link>{" "}
        work, run by one in-house team that plans, builds and reports every
        channel for you. Also serving Central Florida? See our{" "}
        <Link
          href="/services/orlando/digital-marketing"
          className="phl-inline-link"
        >
          Orlando digital marketing agency
        </Link>{" "}
        page.
      </>,
    ],
    checks: [],
    collageA: NO_PHOTO,
    collageB: NO_PHOTO,
    badgeText: "Jacksonville Digital Marketing • Zonic Media •",
  },
  services: {
    eyebrow: "",
    h2: "Jacksonville Digital Marketing Services in One Plan",
    lead: "SEO, Maps, paid search, social, websites and AI answers, each measured by the calls it brings.",
    cards: [
      {
        tone: "blue",
        icon: <FiMapPin aria-hidden="true" />,
        title: "Local SEO Across Jacksonville Neighborhoods",
        desc: "A fully built Business Profile, one page per neighborhood you serve and a steady flow of reviews, so you climb the Map Pack from Arlington and Southside to Mandarin and Orange Park.",
        points: [
          "Weekly profile updates",
          "Ranks by neighborhood",
          "Area pages",
        ],
        href: "/services/florida/local-seo",
        link: "Florida local SEO",
      },
      {
        tone: "gold",
        icon: <FiTarget aria-hidden="true" />,
        title: "Jacksonville PPC and Google Ads",
        desc: "Search, call and Local Services Ads limited to the ZIP codes your crews reach, scheduled for the hours someone answers the phone and trimmed where a trip across the river isn’t worth it.",
        points: [
          "Drive-time targeting",
          "Call ads for trades",
          "No markup on spend",
        ],
        href: "/services/florida/ppc",
        link: "PPC management in Florida",
      },
      {
        tone: "blue",
        icon: <FiLayout aria-hidden="true" />,
        title: "Jacksonville Web Design Built to Book",
        desc: (
          <>
            Phone-first sites with a tap-to-call button, booking forms and one
            page per part of town, from the Beaches to the Westside, built by
            our{" "}
            <Link href="/services/web-design" className="phl-inline-link">
              website design services
            </Link>{" "}
            team.
          </>
        ),
        points: [
          "Phone-first layouts",
          "Booking and call buttons",
          "Area pages included",
        ],
        href: "/services/florida/web-design",
        link: "Web design in Florida",
      },
      {
        tone: "gold",
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "Social Media That Jacksonville Customers Follow",
        desc: "Facebook, Instagram and Nextdoor posts built on real job photos, so neighbors in Riverside or Atlantic Beach remember your name between searches.",
        points: [
          "Posts planned monthly",
          "Local photos, not stock",
          "Messages answered fast",
        ],
        href: "#de-contact",
        link: "Ask about social media",
      },
      {
        tone: "blue",
        icon: <FiMessageCircle aria-hidden="true" />,
        title: "AI Answers That Name Your Jacksonville Business",
        desc: "Question-led pages, schema and business facts that match everywhere, so AI assistants name you when someone in Jacksonville asks for a pro they can trust.",
        points: [
          "Question-led service pages",
          "Schema markup",
          "AI answers checked monthly",
        ],
        href: "/services/ai-seo-services",
        link: "See AI search optimization",
      },
      {
        tone: "gold",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Reviews and Suspension Protection",
        desc: "Review requests after each job, owner replies drafted for your approval and recovery support if your listing is ever suspended, from a team with 900+ profiles reinstated.",
        points: [
          "Requests by text",
          "Owner replies drafted",
          "Reinstatement if needed",
        ],
        href: "/services/gbp-reinstatement-service",
        link: "Business Profile reinstatement",
      },
    ],
  },
  band: {
    eyebrow: "",
    h2: "See Which Side of the River Calls You Most",
    leads: [
      <>
        Arlington may keep your phones busy while Westside clicks go quiet, and
        a Beaches campaign rarely behaves like one aimed at Northside. Your
        monthly report splits calls, forms and map positions across all five
        areas, so budget follows the places that book.
      </>,
      <>
        Run a trade crew? Roofers, plumbers and HVAC companies each get their
        own playbook here. See our{" "}
        <Link
          href="/services/plumbing-marketing-agency/florida"
          className="phl-inline-link"
        >
          plumbing marketing in Florida
        </Link>
        ,{" "}
        <Link
          href="/services/hvac-marketing-agency/florida"
          className="phl-inline-link"
        >
          HVAC marketing for Florida contractors
        </Link>{" "}
        and{" "}
        <Link
          href="/services/roofing-marketing-agency"
          className="phl-inline-link"
        >
          roofing company marketing
        </Link>{" "}
        programs.
      </>,
    ],
    cta: "Get My Jacksonville Area Report",
    // Sample report UI, not client data.
    console: {
      title: "Jacksonville lead map",
      tag: "Sample report",
      metrics: [
        { strong: "5", label: "Areas tracked" },
        { strong: "Top 3", label: "Map target per area" },
        { strong: "Weekly", label: "Rank checks" },
      ],
      barsLabel: "",
      bars: [],
      pills: [],
    },
  },
  process: {
    eyebrow: "",
    h2: "From Audit to Launch in Jacksonville",
    steps: [
      {
        tag: "Week 1",
        title: "Audit Your Local Footprint",
        desc: "We check your profile, site, ads and the rivals ranking near you on each side of the river, then show where calls slip away.",
      },
      {
        tag: "Weeks 2–4",
        title: "Draw Zones and a Yearly Calendar",
        desc: "Drive-time zones, a budget for each and a yearly plan built around Navy move season, summer at the Beaches and storms.",
      },
      {
        tag: "Weekly",
        title: "Launch, Then Tune Every Week",
        desc: "Ads, posts, review requests and page edits go live with call tracking, then improve every week as search terms and reviews arrive.",
        chips: ["Search terms pruned", "Reviews requested", "Posts published"],
      },
      {
        tag: "Monthly",
        title: "Report by Zone and Rebalance",
        desc: "A short report shows leads by zone and channel, and budget shifts to the areas booking jobs before the next season.",
        chips: ["Zone report", "Budget moves", "Next month’s focus"],
      },
    ],
    visualTitle: "",
    visualBars: [],
    ctaPrimary: "Start My Jacksonville Audit",
  },
  showcase: undefined,
  compare: {
    h2: "A Jacksonville Plan vs. Patchwork Marketing",
    lead: "Where Jacksonville marketing budgets tend to drift, and what we do differently on each point.",
    themTitle: "Patchwork Marketing",
    themSub: "Why calls stay flat",
    them: [
      "One radius around downtown",
      "Reviews left to chance",
      "No plan for summer move season",
      "Reports full of impressions",
      "Long contracts up front",
    ],
    usTitle: "Our Jacksonville Plan",
    usSub: "Measured in booked jobs",
    us: [
      "Zones from real drive times",
      "A review request after every job",
      "Campaigns timed to move season",
      "Each call traced to its area",
      "No contract; leave any month",
    ],
    scoreTitle: "Sample Jacksonville Scorecard",
    scoreSub: "An example of what our audit grades",
    scoreRows: [
      { label: "Drive-time coverage", before: 24, after: 84 },
      { label: "Review pace", before: 30, after: 88 },
      { label: "Move-season prep", before: 16, after: 76 },
      { label: "AI answer presence", before: 12, after: 68 },
    ],
  },
  why: {
    h2: "Picking From the Best Digital Marketing Companies in Jacksonville",
    lead: "Three questions worth asking every agency on your shortlist, and the answers we give.",
    cards: [
      {
        icon: <FiBarChart2 aria-hidden="true" />,
        title: "What will you report?",
        desc: "Calls, forms and booked jobs by part of town, every month, in plain language you can read in minutes.",
      },
      {
        icon: <FiUsers aria-hidden="true" />,
        title: "Who does the work?",
        desc: "Our in-house team plans and runs every channel on your account.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "What’s the commitment?",
        desc: "Month-to-month plans, nothing added to ad spend, and you can leave any month.",
      },
    ],
    banner: {
      eyebrow: "",
      h3: "Find the Jacksonville Calls You’re Missing",
      p: "We review your profile, site, ads and the rivals ranking near you, then send a zone-by-zone plan for the year ahead, covering move season and storms. No cost, no paperwork.",
      checks: [
        "Wasted clicks flagged",
        "Nearby rivals compared",
        "Drive-time gaps found",
        "A move-season plan",
      ],
      cta: "Request My Jacksonville Audit",
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
    chipsLabel: "Industries we grow in Jacksonville",
    chips: [
      "Roofing & Storm Repair",
      "HVAC & Plumbing",
      "Movers",
      "Pest Control",
      "Dentists & Clinics",
      "Law Firms",
      "Real Estate & Inspectors",
      "Pool Service",
    ],
  },
  marquee: [],
  results: { eyebrow: "", h2: "", cards: [] },
  grow: { eyebrow: "", h2: "", lead: null, cards: [] },
  faqs: {
    eyebrow: "",
    h2: "Jacksonville Marketing Questions We Hear Most",
    lead: "Costs, coverage, SEO timelines, move season, storms and AI search, answered plainly.",
    cta: "",
    items: JaxDmFaqs,
  },
  form: {
    eyebrow: "",
    h2: "Request a Free Jacksonville Marketing Audit",
    lead: "Share a few details and we’ll come back with an audit and a plan for the parts of Jacksonville you cover.",
    formType: "jacksonville-digital-marketing",
    badge: "Free Audit",
    title: "Get Your Free Jacksonville Growth Plan",
    subtitle: "One short form, with no obligation afterwards.",
    submitText: "Request My Audit",
    messageLabel: "What should we know first?",
    messagePlaceholder:
      "Your services, the parts of Jacksonville you cover, what you run now and your busiest months",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
};

const extras: DelawareExtras = {
  kind: "fl-jacksonville",
  heroChips: {
    label: "Jacksonville metro counties",
    items: ["Duval", "St. Johns", "Clay", "Nassau", "Baker"],
  },
  aboutTitle: ["Big City, Long", "Drives. We Plan", "Side by Side."],
  // Owner photo (19 Nov 2026); the crop keeps the wall sign in view on
  // phones, where the box is narrower than the photo.
  aboutPhoto: {
    src: "/images/florida/jacksonville-digital-marketing-agency.webp",
    alt: "Jacksonville digital marketing dashboard with a view of the St. Johns River and downtown towers",
    position: "center top",
  },
  aboutCard: {
    kicker: "Built for Jacksonville",
    title: "Your monthly program",
    points: [
      "Map Pack work in every zone",
      "Search and Local Services Ads",
      "Review requests and AI checks",
      "A website that books jobs",
    ],
    foot: "Managed remotely, on video calls",
  },
  // Jacksonville palette: river blue, marsh mint, sand peach, night navy.
  pillars: ["#1d4ed8", "#dcfce7", "#ffedd5", "#0f172a"],
  features: {
    h2: "Planned for Jacksonville’s Size, Moves and Riverbanks",
    lead: (
      <>
        Long drives across a sprawling city, Navy move season and a river that
        splits loyalties: each one shapes where and when we spend.
      </>
    ),
    items: [
      {
        label: "Drive time",
        title: "Service Zones Drawn From Real Drive Times",
        body: (
          <>
            A Mandarin crew reaches San Jose Boulevard in minutes, but Oceanway
            at rush hour, over the Dames Point Bridge, is another story. We draw
            zones from your address by drive time, then match your{" "}
            <Link href="/services/google-ads" className="phl-inline-link">
              Google Ads management
            </Link>
            , rank tracking and area pages to them, so budget stays where your
            trucks can show up on time.
          </>
        ),
        points: [
          { t: "Drive-time zones", d: "From your shop." },
          { t: "Budget by zone", d: "Most spend near jobs." },
          { t: "Area pages", d: "One per zone." },
          { t: "Ranks by zone", d: "Both sides of town." },
        ],
        href: "/services/florida/ppc",
        link: "Plan ads by drive time",
        ui: "city-1",
      },
      {
        label: "New residents",
        title: "Found First by New Neighbors and Navy Families",
        body: (
          <>
            Families reporting to NAS Jacksonville or Naval Station Mayport
            often arrive in summer, before school starts, and each household
            needs a dentist, a pediatrician, pest control and an HVAC check
            within weeks. We time ads, posts and review pushes to land before
            the moving truck, target the Westside and the Beaches near both
            bases, and help{" "}
            <Link
              href="/services/moving-company-marketing-agency"
              className="phl-inline-link"
            >
              moving companies
            </Link>{" "}
            and{" "}
            <Link
              href="/services/real-estate-marketing-agency"
              className="phl-inline-link"
            >
              real estate agents
            </Link>{" "}
            reach them even earlier.
          </>
        ),
        points: [
          { t: "Move-season calendar", d: "Set by the school year." },
          { t: "Welcome offers", d: "For new customers." },
          { t: "Base-area targeting", d: "Westside and the Beaches." },
          { t: "Fresh reviews ready", d: "Recent proof waiting." },
        ],
        href: "/services/home-inspector-marketing/florida",
        link: "Home inspector marketing in Florida",
        ui: "city-2",
      },
      {
        label: "Reviews",
        title: "Review Momentum on Both Banks of the St. Johns",
        body: (
          <>
            Customers trust reviews from people nearby, so the Map Pack in
            Arlington can look nothing like the one in Riverside or Avondale. We
            text a review request after every job, track how fast new reviews
            arrive on each side of the St. Johns and push harder where a rival
            pulls ahead, all as part of your{" "}
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
          { t: "Texted requests", d: "Sent as jobs close." },
          { t: "Pace by riverbank", d: "Weekly counts." },
          { t: "Replies drafted", d: "In your voice." },
          { t: "Photo reviews", d: "Proof Maps and AI favor." },
        ],
        href: "/services/florida/local-seo",
        link: "Local SEO in Florida",
        ui: "city-3",
      },
    ],
  },
  platforms: {
    h2: "On Every App Jacksonville Checks Before Calling",
    lead: "Neighbors swap names on Nextdoor and in Facebook groups, search Maps from the car on I-95 and more often ask ChatGPT first. Your hours, services, photos and reviews stay matched across every app.",
    left: hubLeft,
    right: hubRight,
    leftLabel: "Where locals search and ask",
    rightLabel: "Feeds and AI assistants",
    centerIcon: <FiAnchor aria-hidden="true" />,
    centerTitle: "Your Jacksonville business",
    centerSub: "one profile, every app",
  },
  pricing: {
    title: "What Digital Marketing Costs in Jacksonville",
    lead: "Month-to-month plans for Jacksonville companies, from Map Pack basics to full ads, SEO and social.",
    compareTitle: "Compare Plans for Jacksonville Businesses",
    compareLead: "See what each plan includes, line by line.",
    addOnsTitle: "Add-Ons as Your Jacksonville Business Grows",
    addOnsLead: "Add zones, landing pages or campaigns whenever you’re ready.",
    customTitle: "Crews across Duval and St. Johns?",
    customText: "We’ll plan every location and zone you cover.",
  },
  phone: "city",
  darkUi: "city",
  scoreStyle: "city",
  noGrow: true,
  reviewsTitle: "Reviews Our Clients Left on Google",
  contact: {
    before: "Let’s Fill Your",
    after: "Jacksonville Calendar",
    lead: "Share your services and the parts of Jacksonville you cover, and we’ll review your profile, ads and site for free.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jaxDmFaqJsonLd) }}
      />
      <DelawareLanding data={data} extras={extras} />
    </>
  );
}

export default Page;
