/*
 * PHILADELPHIA SEM — rebuilt Aug 2026 on the shared Philadelphia landing system
 * (src/app/style/philadelphia/philaLanding.css, scoped .phl-page).
 *
 * INTENT SPLIT — SEM and PPC are deliberately NOT the same page:
 *   this page (SEM) = the umbrella strategy. Paid AND organic search run as one
 *     plan: shared keyword intelligence, budget split between the two, whole-SERP
 *     ownership, attribution across both. Head terms: "search engine marketing
 *     Philadelphia", "SEM agency Philadelphia".
 *   /philadelphia/ppc = the execution layer for paid only — account structure,
 *     match types, negatives, Quality Score, bids. Head terms: "PPC agency
 *     Philadelphia", "Google Ads management Philadelphia".
 * Keep that boundary when editing: if a section here starts describing bid
 * management or ad-group structure, it belongs on the PPC page instead.
 *
 * IMAGES: every photo slot is a `.phl-ph` shimmer skeleton captioned with what
 * belongs there and at which ratio. Replace the skeleton div with
 * <Image src="..." alt="..." fill />. Previous photos remain in
 * /public/images/philadelphia/phila-sem.
 *
 * LEADS: submits as "Local SEO" + "Pay Per Click (PPC)" — SEM spans both, and
 * both are on the ALLOWED_SERVICES whitelist.
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
  FiFileText,
  FiLayout,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
  FiRepeat,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiX,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/philadelphia/sem";

export const metadata: Metadata = {
  title: "SEM Agency Philadelphia | Paid + Organic Search",
  description:
    "Philadelphia search engine marketing agency running paid and organic search as one strategy — budget split by return, whole-SERP ownership. Free audit.",
  keywords: [
    "search engine marketing Philadelphia",
    "SEM agency Philadelphia",
    "Philadelphia SEM services",
    "SEM company Philadelphia",
    "SEO and PPC Philadelphia",
    "paid and organic search strategy Philadelphia",
    "search marketing company Philadelphia",
    "integrated search marketing Philadelphia",
    "lead generation SEM Philadelphia",
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
    title: "SEM Agency Philadelphia | Search Engine Marketing | Zonic Media",
    description:
      "Philadelphia search engine marketing agency running paid and organic search as one strategy — shared keyword intelligence and whole-SERP ownership.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Philadelphia SEM", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Search Engine Marketing in Philadelphia",
  serviceType: "Search Engine Marketing",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Integrated search engine marketing for Philadelphia businesses — paid search and organic SEO planned together, with shared keyword intelligence, budget allocated by return, landing page optimization, remarketing, and cross-channel attribution.",
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
    name: "Philadelphia SEM Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Integrated Search Strategy",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paid Search Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Organic Search & Content" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page & Conversion Optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Remarketing & Audiences" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Measurement & Cross-Channel Attribution",
        },
      },
    ],
  },
};

const PhilaSemFaqs = [
  {
    question: "What is SEM, and how is it different from SEO or PPC?",
    answer:
      "SEM — search engine marketing — is the umbrella over everything you do to get found on a search results page, paid and organic together. PPC is one half of it: the ads you bid on. SEO is the other half: the listings you earn. Running them as separate projects is how most budgets get wasted, because each side re-learns the same lessons in isolation. SEM means one plan, one keyword set, and one decision about where the next dollar goes.",
  },
  {
    question: "Why run paid and organic together instead of picking one?",
    answer:
      "Because each makes the other cheaper. Paid search tells you within weeks which keywords actually convert, so the SEO plan targets proven terms instead of guesses. Organic rankings then take over the terms you were renting, so you can move that budget to the next set. And when you hold both the ad and the organic listing for a query, you take up far more of the page than either alone — which matters most on the competitive Philadelphia terms where a single listing gets lost.",
  },
  {
    question: "How do you split budget between paid and organic?",
    answer:
      "By what each is returning, reviewed monthly rather than fixed at signup. Early on the split leans paid, because it produces leads while the organic work is still compounding. As rankings land, we move spend off the terms you now own for free and into new keyword territory or a new service line. You see the split and the reasoning in every report — it is never a black box.",
  },
  {
    question: "How much does SEM cost in Philadelphia?",
    answer:
      "There are two numbers: our management fee and your ad spend. The fee is a flat monthly price scoped to how many campaigns, services, and neighbourhoods we are running, quoted after a free audit with no long-term contract. Ad spend is entirely yours — paid directly to Google, never marked up, and never touched by us beyond deciding where it goes. Most Philadelphia businesses start modestly and scale spend once cost per lead is proven.",
  },
  {
    question: "How quickly will I see results from SEM?",
    answer:
      "The paid half can produce qualified calls within two to three weeks of launch, once tracking and landing pages are right. The organic half typically shows measurable movement in 60 to 90 days and keeps compounding after that. That gap is exactly why we run both — you are not waiting a quarter for the first lead, and you are not renting every click forever either.",
  },
  {
    question: "Do you handle the landing pages too, or just the traffic?",
    answer:
      "Both, because traffic to a weak page is the most common reason SEM underperforms. We audit where visitors currently drop off, rewrite or rebuild the pages that matter, add tracking to every meaningful action, and test the elements that move conversion rate. Doubling your conversion rate halves your cost per lead without touching the ad budget.",
  },
  {
    question: "What does the SEM reporting actually show?",
    answer:
      "One view across both channels: which keywords you rank for organically, which you are buying, how many calls and forms each side produced, what a lead cost from each, and where we moved budget and why. Plus a plain-English summary of what we did this month and what is next. If a number moves in the wrong direction you hear it from us before you spot it.",
  },
  {
    question: "Can you take over an existing Google Ads account?",
    answer:
      "Yes, and we usually prefer it — the historical data is valuable. We audit the account first, show you exactly what is wasting spend before touching anything, and restructure from there. The account stays in your name and your billing throughout, so if we ever part ways you keep everything including the history.",
  },
];

const philaSemFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PhilaSemFaqs.map((faq) => ({
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
    num: "2–3 wks",
    label: "To first tracked paid leads",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    num: "0%",
    label: "Markup on your ad spend",
  },
];

const AboutChecks = [
  "Paid + organic in one plan",
  "Shared keyword intelligence",
  "Budget split by return",
  "Attribution across both",
];

const ServiceCards = [
  {
    tone: "blue",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Integrated Search Strategy",
    desc: "One keyword map covering both channels, one decision about which terms to buy and which to earn, and one plan for taking the whole results page for the searches that matter most to your revenue.",
  },
  {
    tone: "gold",
    icon: <FiTarget aria-hidden="true" />,
    title: "Paid Search Management",
    desc: (
      <>
        The paid half, run properly — high-intent targeting, disciplined
        negatives, and spend that goes to Google unmarked-up. The full execution
        detail lives on our{" "}
        <Link href="/services/philadelphia/ppc" className="phl-inline-link">
          Philadelphia PPC
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    tone: "blue",
    icon: <FiFileText aria-hidden="true" />,
    title: "Organic Search & Content",
    desc: (
      <>
        The earned half — on-page work, content, and technical SEO aimed at the
        terms paid search has already proven convert. Location-led businesses
        pair this with{" "}
        <Link
          href="/services/philadelphia/local-seo"
          className="phl-inline-link"
        >
          local SEO
        </Link>{" "}
        for the map pack.
      </>
    ),
  },
  {
    tone: "gold",
    icon: <FiLayout aria-hidden="true" />,
    title: "Landing Page & Conversion Work",
    desc: "Traffic is only half the equation. We rebuild the pages your search traffic lands on around one obvious action, then test until the conversion rate justifies every click you paid for.",
  },
  {
    tone: "blue",
    icon: <FiRepeat aria-hidden="true" />,
    title: "Remarketing & Audiences",
    desc: "Most first-time visitors are not ready. We build audiences from your search traffic and stay in front of them until they are — at a fraction of what the original click cost.",
  },
  {
    tone: "gold",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Measurement & Attribution",
    desc: "Call tracking, form tracking, and conversion tracking wired across both channels, so you can see which half of your search budget produced which lead instead of guessing.",
  },
];

const ChannelBars = [
  { label: "Paid search coverage", val: 88, tone: "gold" },
  { label: "Organic coverage", val: 79, tone: "blue" },
  { label: "Combined SERP share", val: 94, tone: "gold" },
  { label: "Conversion rate", val: 71, tone: "blue" },
];

const ResultCards = [
  {
    icon: <FiSearch aria-hidden="true" />,
    industry: "Professional services · Center City",
    metric: "94%",
    label: "Share of the results page",
    desc: "Holding both the ad and the organic listing on their core terms pushed three competitors below the fold on the searches that produce their best cases.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    industry: "Home services · Bucks County",
    metric: "−44%",
    label: "Cost per lead in six months",
    desc: (
      <>
        As organic rankings landed on the terms they had been buying, we moved
        that spend into new keyword territory instead of paying twice for the
        same clicks — the same play our{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="phl-inline-link"
        >
          local SEO for home services
        </Link>{" "}
        clients run.
      </>
    ),
  },
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    industry: "B2B services · Metro",
    metric: "3.6×",
    label: "Qualified inquiries per month",
    desc: "Paid search identified which service lines actually convert within five weeks, and the content plan then targeted exactly those instead of the ones the team assumed mattered.",
  },
];

const ShowcaseFloats = [
  { num: "94%", label: "Combined SERP share" },
  { num: "2–3 wks", label: "To first paid leads" },
  { num: "0%", label: "Markup on ad spend" },
];

const CompareThem = [
  "SEO and PPC quoted, run, and reported separately",
  "Both teams bidding for credit on the same lead",
  "Ad spend marked up and hidden inside the retainer",
  "Keyword research redone from scratch on each side",
  "12-month contracts before you see a single lead",
];

const CompareUs = [
  "One strategy, one keyword map, one monthly report",
  "Lead-level attribution so credit is never guesswork",
  "Ad spend paid straight to Google, never marked up",
  "Paid data feeds the SEO plan from month one",
  "Month-to-month — we keep you with results, not paperwork",
];

const ScoreRows = [
  { label: "SERP share", before: 22, after: 94 },
  { label: "Cost per lead", before: 34, after: 88 },
  { label: "Conversion rate", before: 26, after: 79 },
  { label: "Attribution clarity", before: 12, after: 96 },
];

const WhyCards = [
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "One team, both channels",
    desc: "No handoffs between an SEO vendor and an ads vendor who never speak. The same strategist decides what to buy and what to earn, which is the only way the two actually compound.",
  },
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Paid teaches, organic keeps",
    desc: (
      <>
        We use{" "}
        <Link href="/services/google-ads" className="phl-inline-link">
          Google Ads campaigns
        </Link>{" "}
        to learn what converts in weeks rather than quarters, then aim the
        organic work at exactly those terms so you stop renting them.
      </>
    ),
  },
  {
    icon: <FiBarChart2 aria-hidden="true" />,
    title: "Your accounts, your data",
    desc: "Ad accounts, analytics, and search console stay in your name and your billing. If we ever part ways you keep every asset and the full history.",
  },
];

const BannerChecks = [
  "Wasted ad spend identified",
  "Keyword overlap mapped",
  "Organic gaps benchmarked",
  "A 90-day search plan you keep",
];

const AuditRows = [
  { label: "Paid account health", flag: "Spend audited" },
  { label: "Organic coverage", flag: "Gaps mapped" },
  { label: "Conversion tracking", flag: "End-to-end" },
];

const MarqueeItems = [
  "Philadelphia SEM",
  "Paid + Organic Search",
  "Whole-SERP Ownership",
  "Keyword Intelligence",
  "Landing Page CRO",
  "Remarketing",
  "Cross-Channel Attribution",
];

// Centre point of each node on the orbit ellipse (centre 50%/50%, semi-axes
// 37% × 43% — the figure .phl-engine-orbit draws). Collapses to a grid <992px.
const EngineNodes = [
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Search Strategy",
    outcome: "One plan",
    tone: "blue",
    left: "50%",
    top: "7%",
  },
  {
    icon: <FiTarget aria-hidden="true" />,
    title: "Paid Search",
    outcome: "Leads now",
    tone: "gold",
    left: "82%",
    top: "28.5%",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "Organic Search",
    outcome: "Leads later",
    tone: "blue",
    left: "82%",
    top: "71.5%",
  },
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "Landing Pages",
    outcome: "Clicks convert",
    tone: "gold",
    left: "50%",
    top: "93%",
  },
  {
    icon: <FiRepeat aria-hidden="true" />,
    title: "Remarketing",
    outcome: "Second chance",
    tone: "blue",
    left: "18%",
    top: "71.5%",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Attribution",
    outcome: "Credit is clear",
    tone: "gold",
    left: "18%",
    top: "28.5%",
  },
];

const IndustryChips = [
  "Professional Services",
  "Legal & Financial",
  "Healthcare & Dental",
  "Home Services",
  "B2B & Manufacturing",
  "Education & Training",
  "Real Estate",
  "E-commerce",
];

const GrowCards = [
  {
    href: "/services/philadelphia/ppc",
    icon: <FiTarget aria-hidden="true" />,
    title: "PPC & Google Ads",
    desc: "The execution detail behind the paid half — account structure, negatives, and bid strategy.",
    cta: "See PPC",
  },
  {
    href: "/services/philadelphia/local-seo",
    icon: <FiMapPin aria-hidden="true" />,
    title: "Local SEO in Philadelphia",
    desc: "If your customers search 'near me', the map pack matters more than the blue links.",
    cta: "See local SEO",
  },
  {
    href: "/services/web-design",
    icon: <FiLayout aria-hidden="true" />,
    title: "Web Design & Development",
    desc: "A site built to convert the search traffic both channels are working to send you.",
    cta: "See web design",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(philaSemFaqJsonLd) }}
      />

      <div className="phl-page">
        <main>
          {/* 1. Hero */}
          <section className="phl-hero">
            <div className="phl-container">
              <div className="phl-hero-grid">
                <div className="phl-hero-copy">
                  <p className="phl-eyebrow">
                    Search Engine Marketing in Philadelphia
                  </p>
                  <h1 className="phl-h1">
                    Own the Whole{" "}
                    <span className="phl-hl">Search Results Page</span>
                  </h1>
                  <p className="phl-hero-sub">
                    Most Philadelphia businesses buy SEO from one vendor and ads
                    from another, then wonder why neither can prove what it
                    produced. We run paid and organic search as a single
                    strategy — one keyword map, one budget decision, one report
                    — so the two compound instead of competing.
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
                      Get Your Free Search Audit
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
                      src="/images/philadelphia/phila-sem/philadelphia-sem-strategist.webp"
                      alt="Philadelphia search strategist comparing paid and organic performance"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 991px) 92vw, 38vw"
                    />
                  </div>

                  <div className="phl-hero-float phl-hero-float--a">
                    <span className="phl-hero-float-icon">
                      <RiSearchLine aria-hidden="true" />
                    </span>
                    <p>
                      <strong>94% SERP share</strong>
                      ad + organic on core terms
                    </p>
                  </div>

                  <div className="phl-hero-float phl-hero-float--b">
                    <span className="phl-hero-float-icon phl-hero-float-icon--gold">
                      <RiLineChartLine aria-hidden="true" />
                    </span>
                    <p>
                      <strong>−44% cost per lead</strong>
                      as organic took over paid terms
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

          {/* 2. Why integrated search wins */}
          <section className="phl-about">
            <div className="phl-container">
              <div className="phl-about-grid">
                <div className="phl-collage">
                  <div className="phl-collage-a">
                    <Image
                      src="/images/philadelphia/phila-sem/philadelphia-search-coverage-planning.webp"
                      alt="Search marketing team planning paid and organic coverage together"
                      fill
                      unoptimized
                      sizes="(max-width: 991px) 72vw, 31vw"
                    />
                  </div>
                  <div className="phl-collage-b">
                    <Image
                      src="/images/philadelphia/phila-sem/philadelphia-paid-organic-dashboard.webp"
                      alt="Laptop dashboard comparing paid and organic search growth"
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
                          Philadelphia Search Marketing • Zonic Media •
                        </textPath>
                      </text>
                    </svg>
                    <span className="phl-collage-badge-icon">
                      <RiSearchLine aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <div className="phl-about-copy">
                  <p className="phl-eyebrow">Why Integrated Search Wins</p>
                  <h2 className="phl-h2">
                    Paid Teaches Fast.{" "}
                    <span className="phl-hl-text">Organic Keeps Forever.</span>
                  </h2>
                  <p className="phl-lead">
                    Run in isolation, each channel wastes the other&apos;s
                    lessons. Your ads team learns within weeks that three
                    specific keywords produce almost all your good leads — and
                    your SEO team, working from a separate spreadsheet, spends
                    six months ranking for terms nobody buys from. Meanwhile you
                    keep paying for clicks on queries you could already be
                    winning organically.
                  </p>
                  <p className="phl-lead">
                    Running them together fixes both problems. Paid search
                    becomes the research budget that proves what converts, the
                    organic plan aims at exactly those proven terms, and as
                    rankings land we move the spend off them and into new
                    territory. On the Philadelphia searches that matter most you
                    end up holding the ad and the organic listing at once —
                    which is how you push competitors off the visible page
                    rather than just sitting next to them.
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
                  <p className="phl-eyebrow">What&apos;s Included</p>
                  <h2 className="phl-h2">
                    Both Halves of Search, Run by One Team
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

          {/* 4. Blue band + SERP console */}
          <section className="phl-band">
            <div className="phl-band-grid">
              <div className="phl-band-content">
                <p className="phl-eyebrow">The Whole Page, Not One Listing</p>
                <h2 className="phl-h2">
                  Two Listings on One Query Beats One Listing Every Time
                </h2>
                <p className="phl-lead">
                  A searcher in Philadelphia scans the first screen and picks.
                  If you hold only the organic listing, the ads above you get
                  first refusal. If you hold only the ad, you pay for every
                  click and vanish the day the budget stops. Hold both and you
                  occupy far more of that first screen than either alone — while
                  your competitors split what is left.
                </p>
                <p className="phl-lead">
                  That is the whole thesis behind running search as one
                  strategy. We decide, query by query, whether to buy the
                  position, earn it, or take both — and we revisit that decision
                  every month as rankings and costs move. And if a suspension
                  ever knocks your listing out of the map results, our{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="phl-inline-link"
                  >
                    Google Business Profile reinstatement help
                  </Link>{" "}
                  gets it back fast.
                </p>
                <HashScrollLink
                  href="#phl-form"
                  className="phl-btn"
                  offset={120}
                >
                  See Your Current SERP Share
                  <span className="phl-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>

              <div className="phl-console" aria-hidden="true">
                <div className="phl-console-head">
                  <h3>Search Coverage Console</h3>
                  <span className="phl-console-tag">Last 90 days</span>
                </div>

                <div className="phl-console-metrics">
                  <div>
                    <strong>94%</strong>
                    <span>SERP share</span>
                  </div>
                  <div>
                    <strong>$38</strong>
                    <span>Blended CPL</span>
                  </div>
                  <div>
                    <strong>−44%</strong>
                    <span>Vs. paid only</span>
                  </div>
                </div>

                <p className="phl-console-sub">Coverage by channel</p>
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
                    <FiTarget />
                    Ad · position 1
                  </span>
                  <span className="phl-console-pill">
                    <RiSearchLine />
                    Organic · #2
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
                    From Split Budgets to One Search Engine
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
                  <h3>Free Search Audit</h3>
                  <p>
                    We pull your ad account, rankings, and analytics together
                    and show you three things: where spend is being wasted,
                    which terms you are paying for that you could own, and what
                    your competitors hold that you do not.
                  </p>
                  <div className="phl-bento-visual" aria-hidden="true">
                    <p className="phl-bento-visual-title">
                      Where Philly SEM clients land after 90 days
                    </p>
                    {[
                      { label: "SERP share", val: 94 },
                      { label: "Cost per lead", val: 88 },
                      { label: "Conversion rate", val: 79 },
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
                  <h3>One Keyword Map, Both Channels</h3>
                  <p>
                    Every target term gets a decision: buy it, earn it, or both.
                    Tracking goes in first so that from launch day every lead is
                    attributable to the side that produced it.
                  </p>
                </article>

                <article className="phl-bento-card phl-bento-card--s3">
                  <div className="phl-bento-head">
                    <span className="phl-bento-num" aria-hidden="true">
                      03
                    </span>
                    <span className="phl-bento-tag">Every month</span>
                  </div>
                  <h3>Let Paid Teach Organic</h3>
                  <p>
                    Live conversion data from the ads reshapes the content and
                    on-page plan, so the organic work targets proven terms
                    instead of assumptions.
                  </p>
                  <div className="phl-bento-chips">
                    {["Query mining", "Content plan", "Bid shifts"].map(
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
                    <h3>Shift Budget as Rankings Land</h3>
                    <p>
                      When organic takes a term you were buying, the spend moves
                      to the next opportunity instead of paying twice for the
                      same click. That reallocation is where the compounding
                      returns come from.
                    </p>
                  </div>
                  <div className="phl-bento-s4-side">
                    <div className="phl-bento-chips">
                      {["Blended CPL", "New terms", "New services"].map(
                        (chip) => (
                          <span className="phl-bento-chip" key={chip}>
                            {chip}
                          </span>
                        ),
                      )}
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
                  What Happens When Both Halves Finally Talk
                </h2>
                <p className="phl-lead">
                  Three Philadelphia businesses, three different starting
                  points, one integrated search strategy.
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
                    src="/images/philadelphia/phila-sem/philadelphia-sem-agency-office.webp"
                    alt="Integrated search marketing workspace overlooking Philadelphia"
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
                  One Search Team Vs. Two Separate Vendors
                </h2>
                <p className="phl-lead">
                  The split-vendor model is the single most expensive habit in
                  search marketing. Here is what the alternative looks like.
                </p>
              </div>

              <div className="phl-compare-grid">
                <div className="phl-compare-col phl-compare-col--them">
                  <h3>Two Separate Vendors</h3>
                  <p className="phl-compare-sub">
                    Why the budget quietly leaks
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
                  <h3>Integrated SEM with Zonic Media</h3>
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
                  <h3>Search Scorecard</h3>
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
                  A Search Partner, Not Two Competing Invoices
                </h2>
                <p className="phl-lead">
                  Traffic is the output. Strategy, execution, and honest
                  attribution are what you are actually buying from a{" "}
                  <Link href="/" className="phl-inline-link">
                    digital marketing agency
                  </Link>
                  .
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
                  <p className="phl-eyebrow">Free Philadelphia Search Audit</p>
                  <h3>See What Your Search Budget is Really Doing</h3>
                  <p>
                    We audit your ad account, organic rankings, and conversion
                    tracking together — then hand you a 90-day plan showing what
                    to buy, what to earn, and what to stop paying for. Free, and
                    yours to keep either way.
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
                    <h4>Search Readiness Score</h4>
                    <span className="phl-audit-tag">After 6 months</span>
                  </div>
                  <div className="phl-audit-ring-wrap">
                    <div className="phl-audit-ring">
                      <span>
                        94<small>/100</small>
                      </span>
                    </div>
                    <div className="phl-audit-ring-info">
                      <strong>Excellent</strong>
                      <small>
                        Where our Philadelphia SEM campaigns typically land
                        after six months of compounding work
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
                  reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
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

          {/* 12. Search engine — the six SEM parts */}
          <section className="phl-engine-sec">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Everything Working Together</p>
                <h2 className="phl-h2">Six Parts, One Search Engine</h2>
                <p className="phl-lead">
                  Paid and organic are not two projects, they are two halves of
                  the same machine. Each part below feeds the next, and every
                  one is run by the same team from Center City out through
                  Montgomery, Bucks, Delaware, and Chester counties — and across
                  the state line for our{" "}
                  <Link
                    href="/services/delaware/digital-marketing"
                    className="phl-inline-link"
                  >
                    Delaware digital marketing
                  </Link>{" "}
                  clients.
                </p>
              </div>

              <div className="phl-engine">
                <div className="phl-engine-orbit" aria-hidden="true" />

                <div className="phl-engine-core">
                  <span className="phl-engine-core-icon" aria-hidden="true">
                    <RiSearchLine />
                  </span>
                  <strong>Your search presence</strong>
                  <span>Paid + organic · one plan</span>
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
                Running integrated search for Philadelphia businesses in
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
                    Straight Answers About SEM in Philadelphia
                  </h2>
                  <p className="phl-lead">
                    Pricing, budget splits, timelines, and how paid and organic
                    actually feed each other. If your question is not here, send
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
                  <GmbFaqs items={PhilaSemFaqs} />
                </div>
              </div>
            </div>
          </section>

          {/* 14. Grow further — internal links */}
          <section className="phl-grow">
            <div className="phl-container">
              <div className="phl-sec-head-center">
                <p className="phl-eyebrow">Grow Further</p>
                <h2 className="phl-h2">Go Deeper on Either Half</h2>
                <p className="phl-lead">
                  Want the whole picture beyond search? See the full{" "}
                  <Link
                    href="/services/philadelphia/digital-marketing"
                    className="phl-inline-link"
                  >
                    Philadelphia marketing engine
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
                    Claim Your Free Philadelphia Search Audit
                  </h2>
                  <p className="phl-lead">
                    Tell us about your business and we will audit both halves —
                    ad account, organic rankings, and conversion tracking — then
                    send a flat-price plan for the next 90 days.
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
                    formType="philadelphia-sem"
                    badge="Free Audit"
                    title="Get your free search audit"
                    subtitle="No contracts, no pressure — just a clear picture of what your search budget is doing and where it should go instead."
                    submitText="Send My Free Audit"
                    messageLabel="Tell us about your business"
                    messagePlaceholder="Your services, your current ad spend, and what you'd like to improve"
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
