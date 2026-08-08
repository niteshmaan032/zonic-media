/*
 * PHILADELPHIA DIGITAL MARKETING — rebuilt Aug 2026 on the shared Philadelphia
 * landing system (src/app/style/philadelphia/philaLanding.css, scoped .phl-page),
 * a port of the approved Delaware layout. Blue #2567e8 carries backgrounds and
 * text; yellow #fdc115 carries the buttons.
 *
 * This is the HUB of the four Philly pages. It owns the broad
 * "digital marketing agency Philadelphia" head terms and links DOWN to the three
 * specialist pages (local-seo, sem, ppc). The children link back with narrow
 * anchors only, so they never compete with this page for its head terms.
 *
 * IMAGES: every photo slot is a `.phl-ph` shimmer skeleton captioned with what
 * belongs there and at which ratio. To drop a real photo in, replace the
 * skeleton div with <Image src="..." alt="..." fill /> — `Image` is already
 * imported for the hero badges, and the wrapper sets position/ratio/radius.
 * The previous build's photos are still in /public/images/philadelphia.
 *
 * LEADS: submits as "Local SEO" + "Pay Per Click (PPC)", both on the
 * ALLOWED_SERVICES whitelist in src/api/leadsRoute.ts.
 */

import type { Metadata } from "next";
import "@/app/style/philadelphia/philaLanding.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiClock,
  FiLayout,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
  FiSend,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiRobot2Line, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/philadelphia/digital-marketing";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Philadelphia | SEO & Ads",
  description:
    "Philadelphia digital marketing agency running local SEO, Google Ads, social, and web design — reported against calls and booked revenue. Free audit.",
  keywords: [
    "digital marketing agency Philadelphia",
    "Philadelphia digital marketing agency",
    "digital marketing Philadelphia",
    "marketing agency Philadelphia",
    "Philadelphia SEO company",
    "local SEO Philadelphia",
    "Google Ads management Philadelphia",
    "PPC agency Philadelphia",
    "social media marketing Philadelphia",
    "content marketing Philadelphia",
    "web design Philadelphia",
    "Philadelphia marketing agency for small business",
    "lead generation Philadelphia",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Digital Marketing Agency Philadelphia | Zonic Media",
    description:
      "Philadelphia digital marketing agency running local SEO, Google Ads, social, content, and conversion-focused web design — reported against calls and booked revenue.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Philadelphia Digital Marketing", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Agency in Philadelphia",
  serviceType: "Digital Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Full-service digital marketing for Philadelphia businesses — local SEO and Google Business Profile optimization, Google Ads and paid search, social media, email, content and AI search visibility, and conversion-focused web design, all measured against calls and booked revenue.",
  provider: {
    "@type": "LocalBusiness",
    name: "Zonic Media",
    telephone: "+1-302-726-9736",
  },
  areaServed: {
    "@type": "City",
    name: "Philadelphia",
    containedInPlace: {
      "@type": "State",
      name: "Pennsylvania",
    },
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses in Philadelphia and the Delaware Valley",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Philadelphia Digital Marketing Services",
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
        itemOffered: { "@type": "Service", name: "Email & Lifecycle Marketing" },
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

const PhilaDigitalFaqs = [
  {
    question: "What does a Philadelphia digital marketing agency actually do?",
    answer:
      "It owns everything that brings customers to you and turns them into inquiries: getting you found in Google Search, Maps, and AI answers, running paid campaigns that pay for themselves, building content and social presence that earns trust, and fixing the pages where visitors currently leave. In a market as competitive as Philadelphia the honest job description is simpler than that — more qualified calls and form fills every month, and a clear report showing exactly which channel produced each one.",
  },
  {
    question: "How much does digital marketing cost in Philadelphia?",
    answer:
      "It depends on how many channels you run and how contested your category is — Center City professional services cost more to compete in than a neighbourhood trade business. A single-channel engagement sits well below a full-funnel program with paid search, content, and web work behind it. After a free audit we quote one flat monthly price with the scope written out: no hourly billing, no surprise line items, no long-term contract. Ad spend stays yours, paid directly to Google, and is never marked up.",
  },
  {
    question: "How long before digital marketing works in a market this size?",
    answer:
      "Paid search can produce qualified calls within the first two to three weeks once tracking and landing pages are right. Organic takes longer in Philadelphia than in a small market because you are competing against established local brands — expect measurable ranking and profile movement in 60 to 90 days, with lead volume compounding from there. We run both together so you get near-term flow while the organic side builds.",
  },
  {
    question:
      "Do you work with businesses in the Philly suburbs and South Jersey?",
    answer:
      "Yes. Plenty of our work sits outside city limits — Montgomery, Bucks, Delaware, and Chester counties on the Pennsylvania side, and Cherry Hill and Camden County across the bridge. Suburban campaigns are often cheaper to win than Center City ones, and if you serve both we build the service-area structure to cover them without the pages competing against each other.",
  },
  {
    question: "Which channel should a Philadelphia business start with?",
    answer:
      "If you need leads this quarter, paid search first — it buys the top of the results page immediately and tells us which services and messages actually convert. If you already have steady flow and want to lower cost per lead, local SEO and content first. Most clients end up running both, with budget shifting toward whichever is producing the cheapest qualified lead that month. The free audit tells you which side you are weakest on.",
  },
  {
    question: "How do I choose between Philadelphia marketing agencies?",
    answer:
      "Ask three questions. Who actually does the work — the person on the call, or an offshore team you will never meet? What does the monthly report measure — calls and booked revenue, or impressions nobody buys from? And what happens if you leave — do you own your ad accounts, website, and Google Business Profile? We answer those with in-house execution, lead-level reporting, and full account ownership from day one.",
  },
  {
    question: "Do you optimize for AI search and Google AI Overviews?",
    answer:
      "Yes, and it is standard in every engagement rather than an upsell. A growing share of searches now end in an AI-generated answer instead of a click, so we structure your pages, schema, entity signals, and reviews so your business is the source those answers cite. The same work strengthens conventional rankings, so there is no trade-off between the two.",
  },
  {
    question: "What is actually in the monthly report?",
    answer:
      "Calls, form fills, and chat conversations with the channel each one came from; rankings and Google Business Profile actions; ad spend against cost per lead; and a plain-English summary of what we did, what moved, and what is next. No jargon dashboard you have to interpret. If a number drops you hear it from us first, with the fix already underway.",
  },
];

const philaDigitalFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PhilaDigitalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const HeroStats = [
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    num: "50+",
    label: "Businesses grown across the US",
  },
  {
    icon: <FaStar aria-hidden="true" />,
    num: "4.9/5",
    label: "Average client rating on Clutch",
  },
  {
    icon: <FiClock aria-hidden="true" />,
    num: "60–90",
    label: "Days to measurable movement",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    num: "100%",
    label: "In-house — nothing outsourced",
  },
];

const AboutChecks = [
  "Local SEO & map pack",
  "Paid search that converts",
  "AI search visibility",
  "Tracked to booked revenue",
];

const ServiceCards = [
  {
    tone: "blue",
    icon: <FiMapPin aria-hidden="true" />,
    title: "Local SEO & Google Business Profile",
    desc: (
      <>
        The map pack decides who gets the call in every Philly neighbourhood. We
        optimize every profile field, category, photo, and post, then build the
        citations and reviews that hold the position — the full system lives on
        our{" "}
        <Link
          href="/services/philadelphia/local-seo"
          className="phl-inline-link"
        >
          Philadelphia local SEO
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    tone: "gold",
    icon: <FiTarget aria-hidden="true" />,
    title: "Google Ads & Paid Search",
    desc: (
      <>
        High-intent campaigns that stop paying for tire-kickers. Tight match
        types, ruthless negative keywords, and landing pages built to convert —
        see how we run{" "}
        <Link href="/services/philadelphia/ppc" className="phl-inline-link">
          PPC in Philadelphia
        </Link>
        . Your spend goes straight to Google, never marked up.
      </>
    ),
  },
  {
    tone: "blue",
    icon: <FiUsers aria-hidden="true" />,
    title: "Social Media Marketing",
    desc: "Organic and paid social that does a real job: staying visible between purchases, proving you exist to people comparing options, and feeding retargeting audiences that make every other channel cheaper.",
  },
  {
    tone: "gold",
    icon: <RiRobot2Line aria-hidden="true" />,
    title: "Content & AI Search Visibility",
    desc: "Pages and articles written around what Philadelphia customers actually ask, structured with the schema and entity signals that get your business cited in AI Overviews and assistant answers — not just ranked in blue links.",
  },
  {
    tone: "blue",
    icon: <FiSend aria-hidden="true" />,
    title: "Email & Lifecycle Marketing",
    desc: "The cheapest revenue you own. Automated follow-up for unclosed quotes, seasonal campaigns to your existing list, and win-back sequences that turn one-time jobs into repeat customers.",
  },
  {
    tone: "gold",
    icon: <FiLayout aria-hidden="true" />,
    title: "Conversion-Focused Web Design",
    desc: (
      <>
        Traffic is wasted on a page that never asks for the call. We rebuild the
        pages that matter with fast load times, obvious next steps, and tracking
        on every action —{" "}
        <Link href="/services/web-design" className="phl-inline-link">
          web design built to convert
        </Link>
        .
      </>
    ),
  },
];

const ChannelBars = [
  { label: "Organic search", val: 86, tone: "blue" },
  { label: "Google Maps", val: 93, tone: "gold" },
  { label: "Paid search", val: 74, tone: "blue" },
  { label: "Social & referral", val: 48, tone: "gold" },
];

const ResultCards = [
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    industry: "Home services · Northeast Philly",
    metric: "+198%",
    label: "Calls from local search",
    desc: (
      <>
        A rebuilt Google Business Profile, citation cleanup, and neighbourhood
        pages moved a contractor from page two into the top three across every
        service area they cover — straight out of our{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="phl-inline-link"
        >
          local SEO for home services
        </Link>{" "}
        playbook.
      </>
    ),
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    industry: "Professional services · Center City",
    metric: "3.1×",
    label: "Qualified inquiries per month",
    desc: "Paid search proved which practice areas actually convert, then content and on-page work moved those same terms into organic positions that keep producing.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    industry: "Retail & hospitality · Montgomery County",
    metric: "−41%",
    label: "Cost per lead in six months",
    desc: "Wasted spend cut, suburban demand mapped separately from the city campaigns, and landing pages rewritten around the one action that mattered.",
  },
];

const ShowcaseFloats = [
  { num: "1,480", label: "Leads tracked last quarter" },
  { num: "#1", label: "Map pack across 8 Philly ZIPs" },
  { num: "4.9★", label: "Average client rating" },
];

const CompareThem = [
  "A junior account manager juggling 80 logos",
  "Reports full of impressions, empty of phone calls",
  "Ad spend marked up and hidden inside a retainer",
  "Work quietly offshored the week after you sign",
  "12-month contracts before you see a single lead",
];

const CompareUs = [
  "A dedicated strategist who knows the Philadelphia market",
  "Reporting tied to calls, forms, and booked revenue",
  "Your ad spend paid straight to Google, never marked up",
  "Everything executed in-house by the team on your calls",
  "Month-to-month — we keep you with results, not paperwork",
];

const ScoreRows = [
  { label: "Local visibility", before: 29, after: 90 },
  { label: "Lead volume", before: 24, after: 83 },
  { label: "Cost per lead", before: 36, after: 87 },
  { label: "Conversion rate", before: 21, after: 75 },
];

const WhyCards = [
  {
    icon: <FiMapPin aria-hidden="true" />,
    title: "We know this market",
    desc: "Center City competition looks nothing like Bucks County competition, and a Fishtown restaurant is not marketed like a Main Line law firm. We price and plan campaigns around which Philadelphia you are actually selling to.",
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Fast, Compounding Execution",
    desc: "Foundation fixes ship in the first weeks, not the first quarter. Every month of work stacks on the last, so month twelve is worth far more than month one.",
  },
  {
    icon: <FiBarChart2 aria-hidden="true" />,
    title: "Measured against revenue",
    desc: "You own every account and asset. Every lead is attributed to a channel. If a number dips you hear it from us first, with the fix already moving.",
  },
];

const BannerChecks = [
  "Your Philadelphia visibility gap, mapped",
  "Wasted ad spend identified",
  "Competitor positions benchmarked",
  "A 90-day growth plan you keep",
];

const AuditRows = [
  { label: "Search & map visibility", flag: "Top 3 target" },
  { label: "Paid efficiency", flag: "Spend audited" },
  { label: "Conversion readiness", flag: "Page-by-page" },
];

const MarqueeItems = [
  "Philadelphia Digital Marketing",
  "Local SEO",
  "Google Ads",
  "AI Search Visibility",
  "Lead Generation",
  "Conversion Web Design",
  "Social Media",
];

// Centre point of each node on the orbit ellipse (centre 50%/50%, semi-axes
// 37% × 43% — the figure .phl-engine-orbit draws). Collapses to a grid <992px.
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
    outcome: "Demand on tap",
    tone: "gold",
    left: "82%",
    top: "28.5%",
  },
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "Web & CRO",
    outcome: "Traffic converts",
    tone: "blue",
    left: "82%",
    top: "71.5%",
  },
  {
    icon: <FiSend aria-hidden="true" />,
    title: "Email & Lifecycle",
    outcome: "Repeat revenue",
    tone: "gold",
    left: "50%",
    top: "93%",
  },
  {
    icon: <RiRobot2Line aria-hidden="true" />,
    title: "Content & AI Search",
    outcome: "Cited in answers",
    tone: "blue",
    left: "18%",
    top: "71.5%",
  },
  {
    icon: <FiUsers aria-hidden="true" />,
    title: "Social Media",
    outcome: "Top of mind",
    tone: "gold",
    left: "18%",
    top: "28.5%",
  },
];

const IndustryChips = [
  "Home Services",
  "Healthcare & Dental",
  "Legal & Financial",
  "Real Estate",
  "Restaurants & Hospitality",
  "Construction & Trades",
  "B2B & Manufacturing",
  "Nonprofits",
];

const GrowCards = [
  {
    href: "/services/philadelphia/local-seo",
    icon: <FiMapPin aria-hidden="true" />,
    title: "Local SEO in Philadelphia",
    desc: "Own the map pack for every neighbourhood and ZIP you actually serve.",
    cta: "See local SEO",
  },
  {
    href: "/services/philadelphia/ppc",
    icon: <FiTarget aria-hidden="true" />,
    title: "PPC & Google Ads",
    desc: "Buy the top of the results page while your organic rankings build underneath it.",
    cta: "See PPC",
  },
  {
    href: "/services/philadelphia/sem",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Search Engine Marketing",
    desc: "Paid and organic run as one strategy so you own the whole search page.",
    cta: "See SEM",
  },
];

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
          __html: JSON.stringify(philaDigitalFaqJsonLd),
        }}
      />

      <div className="phl-page">
        <main>
          {/* 1. Hero */}
          <section className="phl-hero">
            <div className="phl-container">
              <div className="phl-hero-grid">
                <div className="phl-hero-copy">
                  <p className="phl-eyebrow">
                    Digital Marketing Agency in Philadelphia
                  </p>
                  <h1 className="phl-h1">
                    Digital Marketing in Philly That{" "}
                    <span className="phl-hl">Drives Real Growth</span>
                  </h1>
                  <p className="phl-hero-sub">
                    Zonic Media helps Philadelphia businesses turn search, ads,
                    and content into booked calls. Local SEO, Google Ads,
                    social, email, and conversion-first websites — run by one
                    in-house team and reported against leads and revenue instead
                    of impressions.
                  </p>

                  <div className="phl-hero-badges" aria-label="Partner badges">
                    {/* Self-hosted Clutch badge — the live iframe embed sits
                        behind a Cloudflare challenge and breaks randomly. */}
                    <a
                      href="https://clutch.co/profile/zonic-media?badge=11431"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Image
                        className="phl-hero-badge"
                        width={74}
                        height={74}
                        src="/images/clutch-top-company-2026.png"
                        alt="Top Clutch Digital Marketing Company Delaware 2026"
                      />
                    </a>
                    <Image
                      className="phl-hero-badge"
                      width={74}
                      height={74}
                      src="/images/Partner.png"
                      alt="Yelp Advertising Partner"
                    />
                    <a
                      href="https://www.trustpilot.com/review/zonicllc.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="phl-hero-badge-trustpilot"
                        width={104}
                        height={50}
                        src="/images/trust-black.png"
                        alt="Zonic Media reviews on Trustpilot"
                      />
                    </a>
                  </div>

                  <div className="phl-hero-ctas">
                    <HashScrollLink
                      href="#phl-form"
                      className="phl-btn"
                      offset={120}
                    >
                      Get Your Free Philadelphia Audit
                      <span className="phl-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                    <a href={SITE_CONTACT.phoneHref} className="phl-btn-ghost">
                      <FiPhoneCall aria-hidden="true" />
                      Call {SITE_CONTACT.phoneDisplay}
                    </a>
                  </div>

                  <div className="phl-hero-proof">
                    <span className="phl-stars" aria-hidden="true">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <p>
                      <strong>Rated 4.9/5</strong> by the businesses we grow
                    </p>
                  </div>
                </div>

                <div className="phl-hero-visual">
                  <div className="phl-hero-media">
                    <Image
                      src="/images/philadelphia/phila-digital/philadelphia-digital-marketing-strategy.webp"
                      alt="Digital marketing strategists reviewing campaign growth with a Philadelphia business client"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 991px) 92vw, 38vw"
                    />
                  </div>

                  <div className="phl-hero-float phl-hero-float--a">
                    <span className="phl-hero-float-icon">
                      <FiTrendingUp aria-hidden="true" />
                    </span>
                    <p>
                      <strong>+198% qualified leads</strong>
                      Home services, Northeast Philly
                    </p>
                  </div>

                  <div className="phl-hero-float phl-hero-float--b">
                    <span className="phl-hero-float-icon phl-hero-float-icon--gold">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <p>
                      <strong>#1 in the map pack</strong>
                      &ldquo;near me&rdquo; searches across Philly
                    </p>
                  </div>
                </div>
              </div>

              <div className="phl-hero-stats">
                {HeroStats.map((stat) => (
                  <div className="phl-stat" key={stat.label}>
                    <span className="phl-stat-icon">{stat.icon}</span>
                    <div>
                      <p className="phl-stat-num">{stat.num}</p>
                      <p className="phl-stat-label">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. The Philadelphia opportunity */}
          <section className="phl-about">
            <div className="phl-container">
              <div className="phl-about-grid">
                <div className="phl-collage">
                  <div className="phl-collage-a">
                    <Image
                      src="/images/philadelphia/phila-digital/philadelphia-digital-growth-workstation.webp"
                      alt="Philadelphia digital marketing workstation displaying multichannel campaign growth"
                      fill
                      unoptimized
                      sizes="(max-width: 991px) 72vw, 31vw"
                    />
                  </div>
                  <div className="phl-collage-b">
                    <Image
                      src="/images/philadelphia/phila-digital/philadelphia-multichannel-dashboard.webp"
                      alt="Laptop displaying multichannel marketing traffic and lead growth"
                      fill
                      unoptimized
                      sizes="(max-width: 991px) 54vw, 23vw"
                    />
                  </div>
                  <div className="phl-collage-badge" aria-hidden="true">
                    <svg viewBox="0 0 120 120">
                      <defs>
                        <path
                          id="phlBadgeCircle"
                          d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                        />
                      </defs>
                      <text>
                        <textPath href="#phlBadgeCircle">
                          Philadelphia Digital Marketing • Zonic Media •
                        </textPath>
                      </text>
                    </svg>
                    <span className="phl-collage-badge-icon">
                      <FiTrendingUp aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="phl-about-copy">
                  <p className="phl-eyebrow">The Philadelphia Opportunity</p>
                  <h2 className="phl-h2">
                    Six Million People in the Metro.{" "}
                    <span className="phl-hl-text">
                      All of Them Search First.
                    </span>
                  </h2>
                  <p className="phl-lead">
                    Philadelphia is the sixth-largest city in the country and
                    sits at the centre of a metro of roughly six million people,
                    stretching from Bucks and Montgomery counties down through
                    Delaware County and across the river into South Jersey.
                    Almost every buying decision in that footprint starts the
                    same way — a search on a phone, a glance at the map results,
                    and a call to one of the first three businesses listed.
                  </p>
                  <p className="phl-lead">
                    The catch is that Philly is genuinely competitive.
                    Established brands hold the obvious terms, and generic
                    campaigns burn budget without moving anything. Our job is to
                    find the searches worth winning in your specific
                    neighbourhoods and take them — through local SEO and a{" "}
                    <Link
                      href="/services/gmb-optimization"
                      className="phl-inline-link"
                    >
                      properly built Google Business Profile
                    </Link>
                    , paid search on terms that convert, content that earns
                    citations in AI answers, and pages that actually ask for the
                    call.
                  </p>

                  <div className="phl-checks">
                    {AboutChecks.map((check) => (
                      <div className="phl-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>

                  <Link href="/about" className="phl-btn">
                    More About Zonic Media
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Services */}
          <section className="phl-services" id="phl-services">
            <div className="phl-container">
              <div className="phl-sec-head">
                <div>
                  <p className="phl-eyebrow">What We Do</p>
                  <h2 className="phl-h2">
                    Every Channel a Philadelphia Business Needs, Under One Roof
                  </h2>
                </div>
                <Link href="/services" className="phl-link-arrow">
                  View all services <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>

              <div className="phl-cards">
                {ServiceCards.map((card) => (
                  <article
                    className={`phl-card phl-card--${card.tone}`}
                    key={card.title}
                  >
                    <span className="phl-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <span className="phl-card-line" aria-hidden="true" />
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Blue band + growth console mockup */}
          <section className="phl-band">
            <div className="phl-band-grid">
              <div className="phl-band-content">
                <p className="phl-eyebrow">One System, Not Six Invoices</p>
                <h2 className="phl-h2">
                  Channels That Feed Each Other Instead of Competing for Credit
                </h2>
                <p className="phl-lead">
                  Most agencies sell channels in isolation, so nobody can tell
                  you which one produced the customer. We run them as one
                  system: paid search finds the terms that convert, those terms
                  shape the content and local SEO plan, reviews and profile
                  activity lift both, and the website turns the traffic all of
                  it generates into tracked inquiries —{" "}
                  <Link
                    href="/services/philadelphia/sem"
                    className="phl-inline-link"
                  >
                    search engine marketing in Philadelphia
                  </Link>
                  , run as one discipline.
                </p>
                <p className="phl-lead">
                  Everything lands in a single view — the keywords you rank for,
                  the searches you are buying, the calls each channel produced,
                  and what a lead actually cost. If a listing ever gets
                  suspended, our{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="phl-inline-link"
                  >
                    Google Business Profile reinstatement
                  </Link>{" "}
                  team gets you back on the map fast.
                </p>
                <HashScrollLink
                  href="#phl-form"
                  className="phl-btn"
                  offset={120}
                >
                  See Where You Stand Today
                  <span className="phl-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>

              <div className="phl-console" aria-hidden="true">
                <div className="phl-console-head">
                  <h3>Philadelphia Growth Console</h3>
                  <span className="phl-console-tag">Last 90 days</span>
                </div>

                <div className="phl-console-metrics">
                  <div>
                    <strong>512</strong>
                    <span>Tracked leads</span>
                  </div>
                  <div>
                    <strong>$46</strong>
                    <span>Cost per lead</span>
                  </div>
                  <div>
                    <strong>+174%</strong>
                    <span>Vs. last quarter</span>
                  </div>
                </div>

                <p className="phl-console-sub">Visibility by channel</p>
                <div className="phl-console-bars">
                  {ChannelBars.map((bar) => (
                    <div className="phl-console-bar" key={bar.label}>
                      <div className="phl-console-bar-head">
                        <span>{bar.label}</span>
                        <span>{bar.val}%</span>
                      </div>
                      <div className="phl-console-track">
                        <span
                          className={`phl-console-fill phl-console-fill--${bar.tone}`}
                          style={{ width: `${bar.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="phl-console-foot">
                  <span className="phl-console-pill">
                    <FiMapPin />
                    Center City · #1
                  </span>
                  <span className="phl-console-pill">
                    <FiMapPin />
                    Fishtown · #2
                  </span>
                  <span className="phl-console-pill">
                    <FaStar />
                    4.9 · 187 reviews
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Process */}
          <section className="phl-process" id="phl-process">
            <div className="phl-container">
              <div className="phl-sec-head">
                <div>
                  <p className="phl-eyebrow">How It Works</p>
                  <h2 className="phl-h2">
                    From Guesswork to a Growth Engine in Four Steps
                  </h2>
                </div>
                <HashScrollLink
                  href="#phl-form"
                  className="phl-link-arrow"
                  offset={120}
                >
                  Start with step one <FiArrowUpRight aria-hidden="true" />
                </HashScrollLink>
              </div>

              <div className="phl-bento">
                <article className="phl-bento-card phl-bento-card--s1">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      01
                    </span>
                    <span className="phl-bento-tag">Week 1</span>
                  </div>
                  <h3>Free Philadelphia Growth Audit</h3>
                  <p>
                    We map your rankings, Google Business Profile, ad spend,
                    website conversion, and the competitors currently taking the
                    calls you are missing — then show you exactly where the
                    fastest gains are.
                  </p>
                  <div className="phl-bento-visual" aria-hidden="true">
                    <p className="phl-bento-visual-title">
                      Where Philly clients typically land after 90 days
                    </p>
                    {[
                      { label: "Local visibility", val: 90 },
                      { label: "Lead volume", val: 83 },
                      { label: "Conversion rate", val: 75 },
                    ].map((bar) => (
                      <div className="phl-bento-bar-row" key={bar.label}>
                        <div className="phl-bento-bar-head">
                          <span>{bar.label}</span>
                          <span>{bar.val}%</span>
                        </div>
                        <div className="phl-bento-bar-track">
                          <span
                            className="phl-bento-bar-fill"
                            style={{ width: `${bar.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="phl-bento-card phl-bento-card--s2">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      02
                    </span>
                    <span className="phl-bento-tag">Weeks 2–4</span>
                  </div>
                  <h3>Strategy &amp; Foundation</h3>
                  <p>
                    A channel plan built around your margins, then the
                    groundwork: tracking installed, profile optimized, campaigns
                    restructured, and the pages that convert rewritten first.
                  </p>
                </article>

                <article className="phl-bento-card phl-bento-card--s3">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      03
                    </span>
                    <span className="phl-bento-tag">Every month</span>
                  </div>
                  <h3>Launch, Test, Compound</h3>
                  <p>
                    Campaigns live, content shipping, reviews growing, and
                    budget shifting toward whatever is producing the cheapest
                    qualified lead this month.
                  </p>
                  <div className="phl-bento-chips">
                    {["Local content", "Ad testing", "Review growth"].map(
                      (chip) => (
                        <span className="phl-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ),
                    )}
                  </div>
                  <HashScrollLink
                    href="#phl-form"
                    className="phl-btn phl-bento-cta"
                    offset={120}
                  >
                    Start Growing Today
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </article>

                <article className="phl-bento-card phl-bento-card--s4">
                  <div className="phl-bento-s4-copy">
                    <div className="phl-bento-head">
                      <span className="phl-bento-num" aria-hidden="true">
                        04
                      </span>
                      <span className="phl-bento-tag">Ongoing</span>
                    </div>
                    <h3>Report, Refine, Expand</h3>
                    <p>
                      Monthly reporting tied to calls and booked revenue, not
                      vanity metrics. As the core market locks in, we expand to
                      more services, more neighbourhoods, and more channels.
                    </p>
                  </div>
                  <div className="phl-bento-s4-side">
                    <div className="phl-bento-chips">
                      {[
                        "Plain-English report",
                        "New service lines",
                        "New neighbourhoods",
                      ].map((chip) => (
                        <span className="phl-bento-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                    <HashScrollLink
                      href="#phl-form"
                      className="phl-link-arrow"
                      offset={120}
                    >
                      Start with the free audit{" "}
                      <FiArrowUpRight aria-hidden="true" />
                    </HashScrollLink>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* 6. Results */}
          <section className="phl-results">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Real Results</p>
                <h2 className="phl-h2">
                  What Happens When the Channels Finally Work Together
                </h2>
                <p className="phl-lead">
                  Three very different businesses across the Philadelphia metro
                  — the same system, executed month after month.
                </p>
              </div>

              <div className="phl-results-cards">
                {ResultCards.map((card) => (
                  <article className="phl-result-card" key={card.industry}>
                    <p className="phl-result-ind">
                      {card.icon}
                      {card.industry}
                    </p>
                    <p className="phl-result-metric">{card.metric}</p>
                    <p className="phl-result-label">{card.label}</p>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Showcase image band */}
          <section className="phl-showcase">
            <div className="phl-container">
              <div className="phl-showcase-media">
                <div className="phl-showcase-photo">
                  <Image
                    src="/images/philadelphia/phila-digital/philadelphia-digital-agency-office.webp"
                    alt="Digital marketing agency workspace overlooking the Philadelphia skyline"
                    fill
                    unoptimized
                    sizes="(max-width: 991px) 92vw, 80vw"
                  />
                </div>
                <div className="phl-showcase-floats">
                  {ShowcaseFloats.map((float) => (
                    <div className="phl-showcase-float" key={float.label}>
                      <strong>{float.num}</strong>
                      <span>{float.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 8. Comparison */}
          <section className="phl-compare">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">The Difference</p>
                <h2 className="phl-h2">
                  Zonic Media Vs. A Typical Philadelphia Agency
                </h2>
                <p className="phl-lead">
                  Same monthly invoice, very different month. Here is what
                  working with a small, in-house team actually looks like.
                </p>
              </div>

              <div className="phl-compare-grid">
                <div className="phl-compare-col phl-compare-col--them">
                  <h3>Typical Agency</h3>
                  <p className="phl-compare-sub">
                    Why most campaigns quietly stall
                  </p>
                  <ul>
                    {CompareThem.map((item) => (
                      <li key={item}>
                        <FiX aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="phl-compare-col phl-compare-col--us">
                  <h3>Digital Marketing with Zonic Media</h3>
                  <p className="phl-compare-sub">
                    Built to compound, reported like a P&amp;L
                  </p>
                  <ul>
                    {CompareUs.map((item) => (
                      <li key={item}>
                        <FaCircleCheck aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="phl-compare-col phl-compare-col--score"
                  aria-hidden="true"
                >
                  <h3>Growth Scorecard</h3>
                  <p className="phl-compare-sub">
                    A typical Philly client&apos;s first six months
                  </p>
                  <div className="phl-score-rows">
                    {ScoreRows.map((row) => (
                      <div key={row.label}>
                        <div className="phl-score-head">
                          <span>{row.label}</span>
                          <span className="phl-score-vals">
                            {row.before}% → <strong>{row.after}%</strong>
                          </span>
                        </div>
                        <div className="phl-score-track">
                          <span
                            className="phl-score-fill"
                            style={
                              { "--w": `${row.after}%` } as React.CSSProperties
                            }
                          />
                          <span
                            className="phl-score-before"
                            style={
                              { "--b": `${row.before}%` } as React.CSSProperties
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="phl-score-legend">
                    <span>
                      <i className="phl-score-legend-before" />
                      Before Zonic
                    </span>
                    <span>
                      <i />
                      After 6 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. Why us + audit banner */}
          <section className="phl-why">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Why Zonic Media</p>
                <h2 className="phl-h2">
                  A Philadelphia Growth Partner, Not a Monthly Invoice
                </h2>
                <p className="phl-lead">
                  Rankings and impressions are the output. Strategy, execution,
                  and accountability are what you are actually buying.
                </p>
              </div>

              <div className="phl-why-cards">
                {WhyCards.map((card) => (
                  <article className="phl-why-card" key={card.title}>
                    <span className="phl-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>

              <div className="phl-why-banner">
                <div className="phl-why-banner-text">
                  <p className="phl-eyebrow">
                    Free Philadelphia Marketing Audit
                  </p>
                  <h3>See Exactly Where Your Growth is Leaking</h3>
                  <p>
                    We audit your search visibility, ad spend, website
                    conversion, and competitors — then hand you a 90-day plan
                    with the numbers behind it. Free, and yours to keep whether
                    or not we work together.
                  </p>
                  <div className="phl-banner-checks">
                    {BannerChecks.map((check) => (
                      <div className="phl-banner-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>
                  <HashScrollLink
                    href="#phl-form"
                    className="phl-btn"
                    offset={120}
                  >
                    Claim Your Free Audit
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                <div className="phl-audit-card" aria-hidden="true">
                  <div className="phl-audit-head">
                    <h4>Growth Readiness Score</h4>
                    <span className="phl-audit-tag">After 6 months</span>
                  </div>
                  <div className="phl-audit-ring-wrap">
                    <div className="phl-audit-ring">
                      <span>
                        90<small>/100</small>
                      </span>
                    </div>
                    <div className="phl-audit-ring-info">
                      <strong>Excellent</strong>
                      <small>
                        Where our Philadelphia campaigns typically land after
                        six months of compounding work
                      </small>
                    </div>
                  </div>
                  {AuditRows.map((row) => (
                    <div className="phl-audit-row" key={row.label}>
                      <span>{row.label}</span>
                      <span className="phl-audit-flag">{row.flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 10. Reviews */}
          <section className="phl-reviews" aria-labelledby="phl-reviews-title">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Verified Client Reviews</p>
                <h2 className="phl-h2" id="phl-reviews-title">
                  Trusted by Small &amp; Mid-Size Businesses Across the US
                </h2>
              </div>
              <div className="phl-reviews-widget">
                <ClutchWidget
                  widgetType="12"
                  height="375"
                  primaryColor="#2567e8"
                  reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
                />
              </div>
            </div>
          </section>

          {/* 11. Marquee */}
          <div className="phl-marquee" aria-hidden="true">
            <div className="phl-marquee-track">
              {[0, 1].map((copy) => (
                <span className="phl-marquee-item" key={copy}>
                  {MarqueeItems.map((item) => (
                    <span className="phl-marquee-item" key={item}>
                      {item} <FaStar aria-hidden="true" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* 12. Growth engine — services hub */}
          <section className="phl-engine-sec">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Everything Working Together</p>
                <h2 className="phl-h2">Six Services, One Growth Engine</h2>
                <p className="phl-lead">
                  Nothing here runs in a silo. Each service feeds the next, and
                  all six point at the same outcome — more qualified inquiries
                  for your business. We run it the same way from Center City and
                  Fishtown out through Montgomery, Bucks, Delaware, and Chester
                  counties, and across the bridge into South Jersey.
                </p>
              </div>

              <div className="phl-engine">
                <div className="phl-engine-orbit" aria-hidden="true" />

                <div className="phl-engine-core">
                  <span className="phl-engine-core-icon" aria-hidden="true">
                    <FiTrendingUp />
                  </span>
                  <strong>Your Philadelphia business</strong>
                  <span>One team · one plan · one report</span>
                  <HashScrollLink
                    href="#phl-form"
                    className="phl-btn phl-engine-core-cta"
                    offset={120}
                  >
                    Get Your Free Audit
                    <span className="phl-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>

                {EngineNodes.map((node) => (
                  <div
                    className={`phl-engine-node phl-engine-node--${node.tone}`}
                    style={
                      {
                        "--l": node.left,
                        "--t": node.top,
                      } as React.CSSProperties
                    }
                    key={node.title}
                  >
                    <span className="phl-engine-node-icon">{node.icon}</span>
                    <span className="phl-engine-node-txt">
                      <strong>{node.title}</strong>
                      <small>{node.outcome}</small>
                    </span>
                  </div>
                ))}
              </div>

              <p className="phl-chips-label">
                Running this engine for Philadelphia businesses in
              </p>
              <div className="phl-chips">
                {IndustryChips.map((chip) => (
                  <span className="phl-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 13. FAQs */}
          <section className="phl-faqs" id="phl-faqs">
            <div className="phl-container">
              <div className="phl-split-grid">
                <div>
                  <p className="phl-eyebrow">FAQs</p>
                  <h2 className="phl-h2">
                    Straight Answers About Digital Marketing in Philadelphia
                  </h2>
                  <p className="phl-lead">
                    Pricing, timelines, channel choices, and what actually shows
                    up in the monthly report. If your question is not here, send
                    it through the form — a strategist answers, not a sales
                    script.
                  </p>
                  <div className="phl-faq-cta">
                    <HashScrollLink
                      href="#phl-form"
                      className="phl-btn"
                      offset={120}
                    >
                      Ask About Your Market
                      <span className="phl-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                  </div>
                </div>
                <div>
                  <GmbFaqs items={PhilaDigitalFaqs} />
                </div>
              </div>
            </div>
          </section>

          {/* 14. Grow further — internal links */}
          <section className="phl-grow">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Grow Further</p>
                <h2 className="phl-h2">Want to Go Deeper on One Channel?</h2>
                <p className="phl-lead">
                  Each of these runs as part of the engine above — or on its own
                  if that is where your gap is. Serving Delaware too? We cover
                  that market from our Dover office with{" "}
                  <Link
                    href="/services/delaware/digital-marketing"
                    className="phl-inline-link"
                  >
                    digital marketing in Delaware
                  </Link>
                  .
                </p>
              </div>
              <div className="phl-grow-cards">
                {GrowCards.map((card) => (
                  <Link
                    href={card.href}
                    className="phl-grow-card"
                    key={card.href}
                  >
                    <span className="phl-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <span className="phl-grow-link">
                      {card.cta} <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 15. Lead form */}
          <section className="phl-form-sec" id="phl-form">
            <div className="phl-container">
              <div className="phl-form-grid">
                <aside className="phl-form-aside">
                  <p className="phl-eyebrow">Get Started</p>
                  <h2 className="phl-h2">
                    Claim Your Free Philadelphia Marketing Audit
                  </h2>
                  <p className="phl-lead">
                    Tell us about your business and we will send back a full
                    audit — search visibility, ad spend, website conversion, and
                    competitor positions — plus a flat-price plan for the next
                    90 days.
                  </p>

                  <div className="phl-form-contacts">
                    <a
                      href={SITE_CONTACT.emailHref}
                      className="phl-form-contact"
                    >
                      <span className="phl-form-contact-icon">
                        <FiMail aria-hidden="true" />
                      </span>
                      <span className="phl-form-contact-txt">
                        <small>Email us anytime</small>
                        <strong>{SITE_CONTACT.email}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="phl-form-contact"
                    >
                      <span className="phl-form-contact-icon">
                        <FiPhoneCall aria-hidden="true" />
                      </span>
                      <span className="phl-form-contact-txt">
                        <small>Speak with a strategist</small>
                        <strong>{SITE_CONTACT.phoneDisplay}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="phl-form-contact"
                    >
                      <span className="phl-form-contact-icon">
                        <FiMapPin aria-hidden="true" />
                      </span>
                      <span className="phl-form-contact-txt">
                        <small>Our office</small>
                        <strong>{SITE_CONTACT.address}</strong>
                      </span>
                    </a>
                    <div className="phl-form-contact phl-form-contact--static">
                      <span className="phl-form-contact-icon">
                        <FiMessageCircle aria-hidden="true" />
                      </span>
                      <span className="phl-form-contact-txt">
                        <small>Prefer to chat?</small>
                        <strong>
                          Use the chat bubble — a real strategist replies
                        </strong>
                      </span>
                    </div>
                  </div>
                </aside>

                <div className="phl-form-main">
                  <ServiceLeadForm
                    formType="philadelphia-digital-marketing"
                    badge="Free Audit"
                    title="Get your free Philadelphia marketing audit"
                    subtitle="No contracts, no pressure — just a clear picture of where your business stands and what it takes to win your market."
                    submitText="Send My Free Audit"
                    messageLabel="Tell us about your business"
                    messagePlaceholder="Your services, the neighbourhoods you cover, and what you'd like to improve"
                    defaultServices={["Local SEO", "Pay Per Click (PPC)"]}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Page;
