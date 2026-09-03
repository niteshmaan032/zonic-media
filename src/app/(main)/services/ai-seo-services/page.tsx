/*
 * AI SEO SERVICES (AEO / GEO) — Sept 2026 content-gap page.
 *
 * Why it exists: Google autocomplete (pulled 2026-09-03) shows live demand for
 * "ai seo agency", "answer engine optimization services" and "generative
 * engine optimization services" with almost no US small-business agencies
 * ranking for them. The site already ships llms.txt, AI-bot-friendly
 * robots.txt and entity schema — this page turns that capability into a
 * service Google and the answer engines can rank and cite.
 *
 * Built on TseoLanding / templateSeo.css (.tseo-page) — the same locked niche
 * template as /services/seo-services — so it renders identically to the
 * approved service pages. Leads submit as "Local SEO" (whitelisted).
 *
 * Every number in the copy is a deliverable of the program, not a client
 * outcome claim; keep it that way.
 */

import type { Metadata } from "next";
import Link from "next/link";
import TseoLanding, {
  type TseoLandingData,
} from "@/app/components/TseoLanding";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import { FaStar } from "react-icons/fa";
import {
  FiClock,
  FiCpu,
  FiFileText,
  FiLayers,
  FiMessageSquare,
  FiShield,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiRobot2Line, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/ai-seo-services";

export const metadata: Metadata = {
  title: { absolute: "AI SEO Agency | AEO & Generative Engine Optimization (GEO)" },
  description:
    "AI SEO agency for small businesses: answer engine optimization (AEO) and generative engine optimization (GEO) to get cited in ChatGPT.",
  keywords: [
    "ai seo agency",
    "ai seo services",
    "answer engine optimization services",
    "answer engine optimization agency",
    "generative engine optimization services",
    "generative engine optimization company",
    "aeo agency",
    "geo agency",
    "chatgpt seo",
    "ai overviews optimization",
    "google ai mode optimization",
    "llm optimization services",
    "ai search optimization",
    "traditional seo vs ai seo",
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
    title: "AI SEO Agency | AEO & Generative Engine Optimization (GEO)",
    description:
      "Answer engine optimization (AEO) and generative engine optimization (GEO) that get your business cited in ChatGPT, Google AI Overviews, AI Mode and Perplexity.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "AI SEO Services (AEO & GEO)", url: PAGE_PATH },
]);

// NOTE: never add aggregateRating to a Service schema — GSC flags it.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "AI SEO Services (Answer Engine & Generative Engine Optimization)",
  alternateName: [
    "AEO services",
    "GEO services",
    "AI search optimization",
    "LLM optimization",
    "ChatGPT SEO",
  ],
  serviceType: "Answer Engine Optimization",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Answer engine optimization (AEO) and generative engine optimization (GEO) for small and mid-size businesses: entity and NAP consistency across the web, citable direct-answer content blocks, structured data, llms.txt, review-platform signals, and monthly monitoring of citations in ChatGPT, Google AI Overviews, Google AI Mode, Perplexity, Gemini and Claude.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses across the United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI visibility audit (ChatGPT, AI Overviews, AI Mode, Perplexity, Gemini)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entity & citation consistency (Google Business Profile, directories, review platforms)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Citable content blocks and FAQ rewrites",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Structured data, llms.txt and AI-crawler access",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Monthly AI citation tracking and reporting",
        },
      },
    ],
  },
};

const AiSeoFaqs = [
  {
    question: "What is AI SEO?",
    answer:
      "AI SEO is the work of making a business visible inside AI-generated answers — Google AI Overviews and AI Mode, ChatGPT, Perplexity, Gemini and Claude — rather than only in the classic list of blue links. It combines answer engine optimization (AEO), which structures pages so an engine can lift a direct answer from them, and generative engine optimization (GEO), which builds the consistent entity signals, third-party mentions and reviews that make an AI model confident enough to recommend you by name.",
  },
  {
    question: "What is the difference between AEO and GEO?",
    answer:
      "Answer engine optimization (AEO) is on-page: clear questions, self-contained answers in the first lines of a section, structured data and clean crawl access so an engine can quote you. Generative engine optimization (GEO) is off-page and entity-level: your name, address, services, pricing and reviews saying the same thing on Google Business Profile, Clutch, Trustpilot, directories and your own site, so a model treats you as a known, trustworthy entity. You need both — AEO without GEO gets quoted but not recommended; GEO without AEO gets recommended with someone else's description.",
  },
  {
    question: "How do you get a business cited in ChatGPT or Google AI Overviews?",
    answer:
      "Five things, in order. First, fix the entity: identical business name, address, phone, categories and services everywhere the models look. Second, write pages that answer the exact buyer questions in a short, quotable block near the top, then prove it below. Third, add structured data (Organization, Service, FAQPage, Article) and an llms.txt file so crawlers and agents read the facts, not the layout. Fourth, earn mentions and reviews on platforms the models already trust. Fifth, measure: run a fixed set of buyer-intent prompts every month across each engine and change what is not being cited.",
  },
  {
    question: "Does AI SEO replace regular SEO?",
    answer:
      "No. Most AI Overview citations still come from pages that already rank well in ordinary Google search, and AI Mode leans heavily on Google Business Profile data. AI SEO sits on top of a working local SEO and content program; it does not substitute for one. That is why we run it as an add-on to our SEO services and Google Business Profile work rather than as a stand-alone trick.",
  },
  {
    question: "How long does it take to see AI citations?",
    answer:
      "Entity fixes and page rewrites are usually reflected in Google AI Overviews and AI Mode within a few weeks, because they crawl continuously. ChatGPT and Perplexity pull from live web search for many queries, so improvements there track your ordinary rankings and mentions. Models that answer from training data update on their own schedule and reward consistent, widely repeated facts over time. Expect the first measurable citations in 60 to 90 days and a compounding curve after that.",
  },
  {
    question: "How much do AI SEO services cost?",
    answer:
      "For a single-location business we scope AI SEO as an add-on to a local SEO program, typically a few hundred dollars a month on top of the base plan; multi-location brands and competitive metros are quoted after the free AI visibility audit. There are no long-term contracts — engagements are month-to-month after the initial scope.",
  },
  {
    question: "Can you track whether ChatGPT or Perplexity recommends my business?",
    answer:
      "Yes. We maintain a fixed list of 20 to 30 buyer-intent prompts for your market — the way real customers ask — and run them every month across ChatGPT, Google AI Overviews, Google AI Mode, Perplexity, Gemini and Claude. The report shows where you are cited, where a competitor is cited instead, and what changed since last month.",
  },
  {
    question: "Is optimizing for AI answers against Google's rules?",
    answer:
      "Optimizing honestly is fine; manipulating is not. Google extended its spam policies to AI surfaces in 2026 and its August 2026 spam update penalized content engineered purely to be scraped into an AI answer. Our work is the opposite: accurate, consistent facts, genuinely useful answers, real reviews and real mentions. Nothing we do is a trick that stops working at the next update.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: AiSeoFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const data: TseoLandingData = {
  hero: {
    eyebrow: "AI SEO Services · AEO & GEO",
    h1Start: "AI SEO Services That Get You Cited in",
    h1Highlight: "AI Answers",
    sub: (
      <>
        Zonic Media is a US AI SEO agency for small and mid-size businesses.
        We run answer engine optimization (AEO) and generative engine
        optimization (GEO) on top of our{" "}
        <Link href="/services/seo-services" className="tseo-inline-link">
          SEO services
        </Link>{" "}
        and{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="tseo-inline-link"
        >
          Google Business Profile work
        </Link>
        , so when a customer asks ChatGPT, Google AI Overviews, AI Mode or
        Perplexity who to hire, the answer names you.
      </>
    ),
    cta: "Get Your Free AI Visibility Audit",
    dash: {
      title: "AI Visibility",
      mapQuery: "best local seo agency near me",
      youLabel: "Your Business",
      competitorA: "Competitor Cited A",
      competitorB: "Competitor Cited B",
      competitorC: "Competitor Cited C",
      chartLabel: "AI citations tracked",
      afterNum: "6 / 6",
      afterDelta: "engines",
      beforeNum: "0 / 6",
      beforeRank: "Not cited",
      afterFoot: { a: "AI Overviews", b: "AI Mode", c: "ChatGPT" },
      beforeFoot: { a: "AI Overviews", b: "AI Mode", c: "ChatGPT" },
    },
    floatA: { strong: "Cited by name", text: "in buyer-intent prompts" },
    floatB: { strong: "6 engines", text: "monitored every month" },
    stats: [
      {
        icon: <RiRobot2Line aria-hidden="true" />,
        num: "6",
        label: "AI engines tracked: AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini, Claude",
      },
      {
        icon: <FaStar aria-hidden="true" />,
        num: "5.0/5",
        label: "Client rating on Clutch (21 reviews)",
      },
      {
        icon: <FiClock aria-hidden="true" />,
        num: "60–90",
        label: "Days to first measurable AI citations",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        num: "100%",
        label: "In-house work — nothing outsourced",
      },
    ],
  },
  problem: {
    eyebrow: "The Search Shift",
    h2Start: "Your Customers Are Asking AI Who to Hire.",
    h2Highlight: "Make Sure It Says You.",
    leads: [
      <>
        Google now answers a large share of searches with an AI Overview, AI
        Mode compiles a recommendation instead of a list, and buyers ask
        ChatGPT and Perplexity &ldquo;who is the best [service] near
        me?&rdquo; before they ever see a website. In each case the engine
        picks a handful of businesses to name. If your entity is inconsistent,
        your pages bury the answer, or nobody trustworthy mentions you, you
        are not in that handful.
      </>,
      <>
        AI SEO fixes exactly that. We make your business a clean, consistent
        entity across Google Business Profile, directories and review
        platforms; rewrite your key pages so the answer sits in the first
        lines where models look; ship the structured data and{" "}
        <code>llms.txt</code> that let crawlers read facts instead of layouts;
        and measure which prompts cite you every month.
      </>,
    ],
    checks: [
      "Entity consistent everywhere",
      "Answers in the first 30% of the page",
      "Structured data + llms.txt shipped",
      "Citations tracked monthly",
    ],
    gbp: {
      name: "Your Business",
      category: "Local business",
      rows: [
        { label: "Prompts tracked", value: "20–30" },
        { label: "Engines monitored", value: "6" },
        { label: "Facts unified", value: "NAP + services" },
      ],
      chip: "Built on 1,500+ Google Business Profiles optimized",
    },
  },
  services: {
    eyebrow: "What's Included",
    h2: "Answer Engine & Generative Engine Optimization, Run as One Program",
    cards: [
      {
        icon: <RiSearchLine aria-hidden="true" />,
        title: "AI Visibility Audit",
        desc: "We run your market's buyer-intent prompts across AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini and Claude and show you who gets named today, why, and where the gaps are.",
      },
      {
        icon: <FiLayers aria-hidden="true" />,
        title: "Entity & Citation Consistency (GEO)",
        desc: (
          <>
            One version of your name, address, phone, categories, services and
            pricing across your site,{" "}
            <Link
              href="/local-seo-google-business-optimization"
              className="tseo-inline-link"
            >
              Google Business Profile
            </Link>
            , directories and review platforms — the signal models use to
            decide you are real and reliable.
          </>
        ),
      },
      {
        icon: <FiMessageSquare aria-hidden="true" />,
        title: "Citable Content Blocks (AEO)",
        desc: "Each key page gets a short, self-contained answer to the question it targets, placed where engines actually read, backed by the proof below it. FAQs rewritten to be quoted verbatim.",
      },
      {
        icon: <FiCpu aria-hidden="true" />,
        title: "Structured Data, llms.txt & Crawler Access",
        desc: "Organization, Service, FAQPage and Article schema; an llms.txt and per-service markdown for AI agents; robots rules that welcome the AI crawlers that matter — the same stack this site runs.",
      },
      {
        icon: <FiShield aria-hidden="true" />,
        title: "Reviews & Trusted Mentions",
        desc: "A steady review program on Google, Clutch and Trustpilot plus placements on the lists and directories models already cite — earned, never bought.",
      },
      {
        icon: <RiLineChartLine aria-hidden="true" />,
        title: "Monthly AI Citation Report",
        desc: "Which prompts cite you, which cite a competitor, and what moved. Reported alongside your rankings, calls and leads in one plain-English report.",
      },
    ],
  },
  band: {
    eyebrow: "Local Search Is Where AI Answers Start",
    h2: "AI Mode Leans on Google Business Profile. So Do We.",
    leads: [
      <>
        Independent studies of Google AI Mode in 2026 found it cites Google&apos;s
        own properties — Business Profiles and Knowledge Panels — more than any
        other source, and that most AI Overview citations still come from pages
        that already rank on page one. That is why our AI SEO program is built
        on top of{" "}
        <Link
          href="/services/local-seo-for-small-business"
          className="tseo-inline-link"
        >
          local SEO
        </Link>{" "}
        and profile work, not instead of it.
      </>,
      <>
        Headquartered in Dover, Delaware and working with businesses in every
        state, we pair the AI layer with market pages for{" "}
        <Link href="/services/delaware/seo" className="tseo-inline-link">
          Delaware
        </Link>
        ,{" "}
        <Link
          href="/services/philadelphia/local-seo"
          className="tseo-inline-link"
        >
          Philadelphia
        </Link>{" "}
        and{" "}
        <Link href="/services/nyc/local-seo" className="tseo-inline-link">
          New York City
        </Link>
        . If a profile is suspended, our{" "}
        <Link
          href="/services/gmb-reinstatement-help"
          className="tseo-inline-link"
        >
          GBP reinstatement
        </Link>{" "}
        team restores it first — an engine cannot recommend a listing Google
        will not show.
      </>,
    ],
    cta: "See Who AI Recommends Today",
    mappack: {
      query: "best local seo agency near me",
      youName: "Your Business",
      youMeta: "5.0 (21) · Local business ·",
      rowB: { name: "Competitor Business A", meta: "4.6 (98) · Local business" },
      rowC: { name: "Competitor Business B", meta: "4.4 (61) · Local business" },
    },
  },
  process: {
    h2: "From Invisible to Cited in Four Steps",
    steps: [
      {
        tag: "Week 1",
        title: "AI Visibility Audit",
        desc: "Your buyer-intent prompts across six engines, an entity-consistency check across the web, and a page-by-page review of where your answers actually sit.",
      },
      {
        tag: "Weeks 2–4",
        title: "Entity & On-Page Fixes",
        desc: (
          <>
            Unify name, address, categories and services everywhere; rewrite
            the key pages with quotable answer blocks; ship schema,{" "}
            <code>llms.txt</code> and crawler access. Profile issues route to{" "}
            <Link
              href="/services/gmb-verification-help"
              className="tseo-inline-link"
            >
              GBP verification support
            </Link>{" "}
            where needed.
          </>
        ),
      },
      {
        tag: "Every month",
        title: "Earn Mentions & Reviews",
        desc: "Review growth, directory and roundup placements, and fresh answer content — the repeated, consistent signals models learn to trust.",
        chips: ["Review growth", "Trusted mentions", "Fresh answers"],
      },
      {
        tag: "Ongoing",
        title: "Measure & Expand",
        desc: "Monthly citation tracking per engine and per prompt. As citations lock in, we widen the prompt set to more services and more markets.",
        chips: ["Per-engine report", "New prompts", "New markets"],
      },
    ],
    visualTitle: "What the program checks on every page",
    visualBars: [
      { label: "Entity consistency", val: 96 },
      { label: "Answer placement", val: 92 },
      { label: "Schema coverage", val: 94 },
    ],
    ctaPrimary: "Start Your AI SEO Program",
  },
  results: {
    h2: "What the AI SEO Program Delivers Every Month",
    lead: (
      <>
        Deliverables you can see in the report — usually paired with{" "}
        <Link
          href="/services/local-seo-packages"
          className="tseo-inline-link"
        >
          a local SEO package
        </Link>{" "}
        scoped to your market.
      </>
    ),
    cards: [
      {
        icon: <FiMessageSquare aria-hidden="true" />,
        industry: "Prompt Tracking",
        metric: "20–30",
        label: "Buyer-intent prompts tracked",
        desc: "The exact questions your customers ask, run every month across AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini and Claude.",
      },
      {
        icon: <FiLayers aria-hidden="true" />,
        industry: "Entity Health",
        metric: "1 source",
        label: "Of truth for your business facts",
        desc: "Name, address, phone, categories, services, hours and pricing reconciled across your site, Google Business Profile, directories and review platforms.",
      },
      {
        icon: <FiFileText aria-hidden="true" />,
        industry: "Citable Pages",
        metric: "Every",
        label: "Key page gets an answer block",
        desc: "A quotable, self-contained answer near the top of each service and location page, plus FAQs written to be lifted verbatim.",
      },
    ],
  },
  compare: {
    h2: "AI SEO with Zonic Vs. A Typical “GEO Agency”",
    lead: (
      <>
        Most AI-search offers are a prompt-tracking dashboard with a logo on it.
        Here is what a working program looks like.
      </>
    ),
    themTitle: "Typical GEO Agency",
    themSub: "Why most AI-search retainers stall",
    them: [
      "A dashboard that reports citations but changes nothing on the site",
      "Content “optimized for AI” that reads like it was written by one",
      "Ignores Google Business Profile, where AI Mode actually looks",
      "Bought mentions and directory spam that the spam update now penalizes",
      "No connection to rankings, calls or booked jobs",
    ],
    usTitle: "AI SEO with Zonic Media",
    usSub: "Built on local SEO, reported like a P&L",
    us: [
      "Entity, on-page, schema and reviews fixed — then tracked",
      "Plain, accurate answers a model can quote and a customer can trust",
      "Google Business Profile and Map Pack work included, not ignored",
      "Only earned reviews and real mentions — safe through every update",
      "One report: AI citations next to rankings, calls and leads",
    ],
    scoreSub: "A typical program's first six months",
    scoreRows: [
      { label: "Entity consistency", before: 41, after: 96 },
      { label: "Answer placement", before: 28, after: 92 },
      { label: "Schema coverage", before: 35, after: 94 },
      { label: "Prompts citing you", before: 4, after: 68 },
    ],
  },
  tracking: {
    h2Start: "Watch Your AI Citations Grow,",
    h2Highlight: "Engine by Engine",
    leads: [
      <>
        No black box. Every month you see each tracked prompt, which engines
        cited you, which cited a competitor, and what changed — next to the
        rank tracking, review growth and call tracking from your local SEO
        program.
      </>,
      <>
        If a citation appears, you know what earned it. If one disappears, you
        know what we are doing about it.
      </>,
    ],
    cta: "Get a Sample AI Citation Report",
    rankRows: [
      { kw: "best [service] near me — AI Overview", pos: "Cited", delta: "▲ new" },
      { kw: "who should I hire for [service] in [city] — AI Mode", pos: "Cited", delta: "▲ new" },
      { kw: "[service] company reviews [city] — ChatGPT", pos: "Cited", delta: "▲ new" },
      { kw: "top [service] companies [state] — Perplexity", pos: "Cited", delta: "▲ new" },
    ],
  },
  why: {
    h2: "An AI Search Partner That Already Practices This",
    lead: "This site ships llms.txt, per-service markdown for AI agents, entity schema and AI-crawler access. We run the same playbook for clients.",
    cards: [
      {
        icon: <RiRobot2Line aria-hidden="true" />,
        title: "We Optimize for Answers, Not Tricks",
        desc: "Accurate facts, consistent entities, useful answers and real reviews — the signals that survived Google's August 2026 spam update and will survive the next one.",
      },
      {
        icon: <FiZap aria-hidden="true" />,
        title: "Local SEO Underneath",
        desc: "AI engines lean on Google Business Profile and page-one rankings. Because local search is our core practice, the foundation the AI layer needs is already part of the program.",
      },
      {
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Transparent to a Fault",
        desc: "You own every account and asset. Every prompt, every citation and every change is in the monthly report — and if a number dips, you hear it from us first.",
      },
    ],
    banner: {
      eyebrow: "Free AI Visibility Audit",
      h3: "See Exactly Who AI Recommends in Your Market",
      p: "We run your buyer-intent prompts across AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini and Claude, check your entity consistency and answer placement, and hand you the plan to get cited. Free, and yours to keep either way.",
      checks: [
        "Who AI names today, and why",
        "Entity gaps to fix first",
        "Pages to rewrite for citations",
        "Review and mention roadmap",
      ],
      cta: "Claim Your Free AI Audit",
      auditDesc:
        "What the program checks on every page and profile before we ask an engine to cite you",
      auditScore: "94",
      auditRows: [
        { label: "Entity consistency", flag: "Reconciled" },
        { label: "Answer placement", flag: "First 30% of page" },
        { label: "Schema + llms.txt", flag: "Shipped" },
      ],
    },
  },
  marquee: [
    "AI SEO Services",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Google AI Overviews",
    "Google AI Mode",
    "ChatGPT & Perplexity Citations",
    "llms.txt & Structured Data",
  ],
  nationwide: {
    h2: "AI SEO Services for Businesses in Every Market in the US",
    lead: (
      <>
        AI answers are the same on every screen, so the work is the same in
        every state. Audits, strategy calls and reporting all happen remotely,
        whether you are in Delaware, Texas or California.
      </>
    ),
    chips: [
      "Home Services",
      "Healthcare & Dental",
      "Legal & Financial",
      "Real Estate",
      "Restaurants & Retail",
      "Auto & Repair",
      "Salons & Wellness",
      "Trades & Contractors",
    ],
  },
  faqs: {
    h2: "Straight Answers About AI SEO, AEO and GEO",
    lead: (
      <>
        What the terms mean, how citations are earned, what it costs and how it
        fits with{" "}
        <Link href="/services/seo-services" className="tseo-inline-link">
          regular SEO
        </Link>{" "}
        and{" "}
        <Link href="/services/google-ads" className="tseo-inline-link">
          Google Ads
        </Link>
        . If your question is not here, send it through the form — a
        strategist answers, not a sales script.
      </>
    ),
    cta: "Ask About Your Market",
    items: AiSeoFaqs,
  },
  grow: {
    h2: "Citations Are Step One. Here is What Multiplies Them.",
    cards: [
      {
        href: "/services/seo-services",
        icon: <RiSearchLine aria-hidden="true" />,
        title: "SEO Services",
        desc: "The rankings AI Overviews cite most come from page one. Our full-stack SEO gets you there.",
        cta: "See SEO services",
      },
      {
        href: "/local-seo-google-business-optimization",
        icon: <MdOutlineVerifiedUser aria-hidden="true" />,
        title: "Google Business Profile Optimization",
        desc: "AI Mode leans on Business Profiles. We make yours the one it picks.",
        cta: "Optimize your profile",
      },
      {
        href: "/services/web-design",
        icon: <FiTrendingUp aria-hidden="true" />,
        title: "Website Design",
        desc: "Fast, structured, answer-first pages that engines can read and customers convert on.",
        cta: "See web design",
      },
    ],
  },
  form: {
    h2: "Claim Your Free AI Visibility Audit",
    lead: "Send us your website and market and we will return who AI recommends today, why, and the prioritized plan to get your business cited. Yours to keep whether or not you hire us.",
    formType: "ai-seo-services",
    badge: "Free Audit",
    title: "Get Your Free AI Visibility Audit",
    subtitle:
      "No contracts, no pressure — a clear picture of where you stand in AI answers and what it takes to be the one named.",
    submitText: "Send My Free AI Audit",
    messageLabel: "Tell us about your business",
    messagePlaceholder:
      "Your website, your market, and the searches you want AI to name you for",
    defaultServices: ["Local SEO"],
  },
  relatedCurrent: PAGE_PATH,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <TseoLanding data={data} />
    </>
  );
}

export default Page;
