import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";

import Footer from "@/app/components/Footer";
import GhlChatWidget from "@/app/components/GhlChatWidget";
import ServicesDirectory from "@/app/components/ServicesDirectory";
import ServiceSiteMockup from "@/app/components/ServiceSiteMockup";
import GrowthConsole from "@/app/components/services/GrowthConsole";
import SpeedGauges from "@/app/components/services/SpeedGauges";
import RankFlip from "@/app/components/services/RankFlip";
import GbpFlip from "@/app/components/services/GbpFlip";
import AdsPanel from "@/app/components/services/AdsPanel";
import GrowthLoop from "@/app/components/services/GrowthLoop";

import "@/app/style/servicesHub.css";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

import {
  FiActivity,
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiBriefcase,
  FiCheck,
  FiCheckCircle,
  FiClipboard,
  FiCode,
  FiCompass,
  FiEye,
  FiHeart,
  FiHome,
  FiLayers,
  FiMapPin,
  FiPenTool,
  FiPhone,
  FiSearch,
  FiShoppingBag,
  FiTarget,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";

/* ---------------------------------------------------------------------------
   POSITIONING — read before editing copy.

   This is the SERVICES HUB. It owns the head term "digital marketing services"
   and the supporting set ("digital marketing agency for small business",
   "full service digital marketing"). It must describe each discipline at
   summary depth only, then link DOWN to the page that owns that head term:

     web design           → /services/web-design
     local SEO            → /services/local-seo-for-home-services
     GBP optimization     → /services/gmb-optimization
     GBP reinstatement    → /services/gmb-reinstatement-help
     GBP verification     → /services/gmb-verification-help
     Map Pack ranking     → /local-seo-google-business-optimization
     Google Ads / PPC     → /services/google-ads
     white label          → /services/white-label-services

   Never restate a child page's full deliverables list here, and never link a
   card back to /services (a self-link on the hub wastes the slot).

   VISUALS: no photography on this page. Every panel is a CSS-animated UI
   component under `.svc-page` in servicesHub.css. Before/after visuals rest in
   the "after" state so prefers-reduced-motion users see the result.
--------------------------------------------------------------------------- */

const SITE_URL = "https://www.zonicllc.com";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, PPC & Web Design",
  description:
    "Digital marketing services for local and mid-size businesses: conversion-built websites, local SEO, Google Business Profile work and Google Ads. Free audit, no lock-in.",
  keywords: [
    "digital marketing services",
    "full service digital marketing agency",
    "local SEO services",
    "Google Ads management",
    "web design services",
    "Google Business Profile optimization",
    "PPC advertising services",
    "digital marketing for local business",
    "small business marketing services",
    "best digital marketing agency for small business",
    "GMB reinstatement and verification services",
    "local SEO agency USA",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Digital Marketing Services | SEO, PPC & Web Design",
    description:
      "Websites that convert, local SEO that wins the Map Pack, and Google Ads that pay for themselves. One team, one strategy, one report.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | SEO, PPC & Web Design",
    description:
      "Digital marketing services for local and mid-size businesses: web design, local SEO, Google Business Profile and Google Ads under one roof.",
  },
};

/* ────────────────────────────────────────────────────────────── data ───── */

const heroStats = [
  { v: "200%", k: "Average client growth in year one" },
  { v: "100+", k: "Brands scaled since launch" },
  { v: "1,500+", k: "Google profiles optimized" },
  { v: "4.9★", k: "Average client rating" },
];

type ServiceCard = {
  visual: "site" | "bars" | "pins" | "ad" | "brand" | "flow";
  title: string;
  desc: string;
  points: string[];
  href: string;
  cta: string;
};

const services: ServiceCard[] = [
  {
    visual: "site",
    title: "Web Design & Development",
    desc: "Fast, mobile-first websites built around one job: turning the visit into a call or a form. Structure, copy and speed are set up for search from the first build.",
    points: [
      "Business sites, landing pages and rebuilds",
      "WordPress, headless and custom builds",
      "Core Web Vitals passed at launch",
    ],
    href: "/services/web-design",
    cta: "See web design",
  },
  {
    visual: "bars",
    title: "Local SEO",
    desc: "Rankings across a whole service area, not just at your front door. Service pages, location pages, citations and reviews built into one plan.",
    points: [
      "Service and location page architecture",
      "Citation cleanup and local link building",
      "Review generation that keeps velocity up",
    ],
    href: "/services/local-seo-for-home-services",
    cta: "See local SEO",
  },
  {
    visual: "pins",
    title: "Google Business Profile",
    desc: "Your listing is where most local buyers decide. We set categories, services, photos, posts and reviews so the profile works as a channel, not a formality.",
    points: [
      "Category, service and attribute alignment",
      "Photo, post and Q&A programme",
      "Suspension appeals and video verification",
    ],
    href: "/services/gmb-optimization",
    cta: "See profile work",
  },
  {
    visual: "ad",
    title: "Google Ads & PPC",
    desc: "Tight campaigns aimed at buyers who are ready now. Wasted clicks get cut every week, and the landing page matches the search that paid for it.",
    points: [
      "Search, Local Services and Performance Max",
      "Intent-matched landing pages",
      "Call tracking and revenue reporting",
    ],
    href: "/services/google-ads",
    cta: "See Google Ads",
  },
  {
    visual: "brand",
    title: "Branding & UI/UX Design",
    desc: "Identity, interface and messaging that make a small company read as the safe choice. Design systems your team can keep using after handover.",
    points: [
      "Logo, colour and type systems",
      "Wireframes, prototypes and design systems",
      "Accessibility checked at AA contrast",
    ],
    href: "/contact-us",
    cta: "Request a quote",
  },
  {
    visual: "flow",
    title: "Custom Software & Automation",
    desc: "Client portals, booking flows and integrations that remove the manual steps between an enquiry and a booked job.",
    points: [
      "Web apps and client portals",
      "CRM and API integrations",
      "Workflow automation and internal tools",
    ],
    href: "/contact-us",
    cta: "Request a quote",
  },
];

type Block = {
  badge: string;
  heading: string;
  body: ReactNode;
  points: string[];
  href: string;
  cta: string;
  reverse: boolean;
  visual: ReactNode;
};

const blocks: Block[] = [
  {
    badge: "Web design & development",
    heading: "A website that loads fast and asks for the job",
    body: (
      <>
        Most small business sites look fine and still leak enquiries. Our{" "}
        <Link href="/services/web-design" className="svc-inline-link">
          website design and development
        </Link>{" "}
        starts from the search that brings someone in, then removes every step
        between that search and the phone ringing. Speed is treated as a
        feature, not a cleanup task, so the build passes Core Web Vitals before
        it goes live.
      </>
    ),
    points: [
      "Page speed budgeted during the build, not patched after launch",
      "Layouts shaped around call, quote and booking intent",
      "Technical SEO, schema and tracking wired in from day one",
      "Trade-specific builds for roofing, HVAC, plumbing and remodeling",
    ],
    href: "/services/web-design",
    cta: "Start a website project",
    reverse: false,
    visual: (
      <>
        <ServiceSiteMockup
          prefix="svc"
          brand="Your Business"
          url="yourbusiness.com"
          headline="Same-day service across the metro, booked online in 60 seconds"
          primaryCta="Get a free quote"
          secondaryCta="Call now"
          chips={["Licensed & insured", "Upfront pricing", "Open 24/7"]}
          toastTitle="New quote request"
          reviews="214 reviews"
        />
        <SpeedGauges />
      </>
    ),
  },
  {
    badge: "Local SEO",
    heading: "Rankings across the service area, not just at your pin",
    body: (
      <>
        A business can sit at number one outside its own office and be invisible
        four miles away. Our{" "}
        <Link href="/services/local-seo-for-home-services" className="svc-inline-link">
          local SEO service
        </Link>{" "}
        fixes that with the levers you actually control: category and service
        relevance, page architecture per town, and the local prominence signals
        that let you outrank a closer competitor. If you want the mechanics
        behind it, we break down{" "}
        <Link
          href="/local-seo-google-business-optimization"
          className="svc-inline-link"
        >
          how Map Pack ranking works
        </Link>
        .
      </>
    ),
    points: [
      "Geo-grid scanning to find where you rank across the whole area",
      "One indexable page per service and per town you serve",
      "Citation consistency, local links and review velocity",
      "Monthly rank reporting tied to calls, not impressions",
    ],
    href: "/services/local-seo-for-home-services",
    cta: "Get found locally",
    reverse: true,
    visual: <RankFlip />,
  },
  {
    badge: "Google Business Profile",
    heading: "From suspended listing back to live on Maps",
    body: (
      <>
        A suspension takes the phone off the hook overnight. Our team handles{" "}
        <Link href="/services/gmb-reinstatement-help" className="svc-inline-link">
          suspended profile reinstatement
        </Link>{" "}
        and{" "}
        <Link href="/services/gmb-verification-help" className="svc-inline-link">
          stuck video verification
        </Link>
        , then keeps the listing healthy with ongoing{" "}
        <Link href="/services/gmb-optimization" className="svc-inline-link">
          Google Business Profile optimization
        </Link>{" "}
        so it does not happen twice.
      </>
    ),
    points: [
      "Root-cause audit before any appeal is filed",
      "Guideline violations fixed, then a documented appeal",
      "Video verification prep and re-verification support",
      "Ongoing posts, photos, services and review response",
    ],
    href: "/services/gmb-optimization",
    cta: "Fix my Google profile",
    reverse: false,
    visual: <GbpFlip />,
  },
  {
    badge: "Google Ads & PPC",
    heading: "Ad budget that stops paying for the wrong clicks",
    body: (
      <>
        Most underperforming accounts are not short of budget, they are short of
        negatives. Our{" "}
        <Link href="/services/google-ads" className="svc-inline-link">
          Google Ads management
        </Link>{" "}
        rebuilds the account around buyer intent, sends each campaign to a page
        written for that search, and reports on booked revenue rather than
        clicks.
      </>
    ),
    points: [
      "Search term audits and weekly negative keyword work",
      "Landing pages matched to the query that paid for the click",
      "Call tracking with recorded lead quality scoring",
      "Local Services Ads set up alongside search where it fits",
    ],
    href: "/services/google-ads",
    cta: "Review my ad account",
    reverse: true,
    visual: <AdsPanel />,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit",
    desc: "We scan your site, rankings, profile and ad account, then compare them against the competitors already taking the calls.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "You get a prioritised roadmap: what moves first, what it should return, and what it costs. No 40-slide deck.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Design, copy, page architecture and tracking are built together so nothing waits on another vendor.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Full QA, redirects, schema and analytics checked before go-live, so rankings carry over instead of resetting.",
  },
  {
    num: "05",
    title: "Compound",
    desc: "Monthly reporting, testing and content keep the gains stacking after launch instead of levelling off.",
  },
];

const whyPoints = [
  {
    icon: <FiClipboard />,
    title: "Audit before proposal",
    desc: "We look at your numbers before we quote. If a channel is not worth funding yet, we say so.",
  },
  {
    icon: <FiLayers />,
    title: "One team, one strategy",
    desc: "Site, SEO, profile and ads run off the same plan, so the channels stop competing for credit.",
  },
  {
    icon: <FiActivity />,
    title: "Reporting you can read",
    desc: "Calls, forms and booked jobs in plain language, with the ranking data underneath if you want it.",
  },
  {
    icon: <FiZap />,
    title: "Senior people on the work",
    desc: "The specialist who audits your account is the one who runs it. Nothing is passed to a junior queue.",
  },
  {
    icon: <FiAward />,
    title: "No long lock-ins",
    desc: "Month to month after the initial build period. We keep the account by keeping it profitable.",
  },
];

const industries = [
  {
    icon: <FiHome />,
    title: "Home services",
    desc: "Roofing, HVAC, plumbing, electrical and remodeling companies competing on Map Pack position and speed to answer.",
  },
  {
    icon: <FiBriefcase />,
    title: "Professional services",
    desc: "Law firms, accountants and consultants who need authority signals before a high-value enquiry converts.",
  },
  {
    icon: <FiHeart />,
    title: "Healthcare & wellness",
    desc: "Dentists, chiropractors, pediatricians and clinics where reviews and local visibility drive the booking.",
  },
  {
    icon: <FiCompass />,
    title: "Real estate",
    desc: "Agents and brokerages building local search presence, listing funnels and follow-up that survives a slow market.",
  },
  {
    icon: <FiShoppingBag />,
    title: "E-commerce",
    desc: "Stores that need product-level SEO, paid traffic that clears its own cost, and a checkout that stops leaking.",
  },
  {
    icon: <FiCode />,
    title: "SaaS & tech",
    desc: "Product-led pages, onboarding flows and feature positioning aimed at trial signups rather than raw traffic.",
  },
  {
    icon: <FiUsers />,
    title: "Non-profits",
    desc: "Grant-funded and donor-funded organisations that need reach without an enterprise budget behind it.",
  },
  {
    icon: <FiPenTool />,
    title: "Agencies",
    desc: (
      <>
        <Link href="/services/white-label-services" className="svc-inline-link">
          White-label design and development
        </Link>{" "}
        capacity for agencies that need delivery they can put their name on.
      </>
    ),
  },
];

const withoutPoints = [
  "Four vendors, four plans, and nobody accountable for the lead count",
  "Reports full of impressions and sessions that never reach revenue",
  "Ad spend paying for searches you would never quote on",
  "A site that ranks but does not ask anyone to call",
  "Competitors taking the Map Pack while your listing sits half filled in",
];

const withPoints = [
  "Site, SEO, profile and ads run off one plan with one owner",
  "Monthly reporting that ends at calls, forms and booked jobs",
  "Search terms and landing pages reviewed together every week",
  "Pages built to convert the traffic they earn",
  "Local visibility that keeps compounding after the build is paid for",
];

const benefits = [
  {
    v: "3–5×",
    k: "More qualified leads",
    d: "Typical lift in qualified inbound enquiries within 90 days of the rebuild going live.",
    w: 82,
  },
  {
    v: "Top 3",
    k: "Map Pack position",
    d: "Where our local SEO clients land for their primary service term across the core service area.",
    w: 94,
  },
  {
    v: "40%+",
    k: "Conversion rate lift",
    d: "Improvement in visitor-to-lead rate after the conversion and speed work on a rebuilt site.",
    w: 68,
  },
  {
    v: "90%",
    k: "Client retention",
    d: "Nine in ten clients stay past the initial engagement, on month-to-month terms.",
    w: 90,
  },
];

const auditIncludes = [
  {
    icon: <FiSearch />,
    title: "Website and technical review",
    desc: "Speed, structure, indexing and the pages that should be ranking but are not.",
  },
  {
    icon: <FiMapPin />,
    title: "Local visibility scan",
    desc: "Where you rank across the service area, and how the profile compares to the businesses above you.",
  },
  {
    icon: <FiEye />,
    title: "Competitor gap analysis",
    desc: "What the top three in your market are doing that you are not, listed in order of effort.",
  },
  {
    icon: <FiTarget />,
    title: "Prioritised action plan",
    desc: "The fixes worth doing first, with rough effort and expected return next to each one.",
  },
];

const faqs = [
  {
    q: "What do your digital marketing services include?",
    a: "Web design and development, local SEO, Google Business Profile optimization and reinstatement, Google Ads and PPC management, branding and UI/UX design, and custom software or automation work. Most clients start with one or two of these and add channels as the numbers justify it.",
  },
  {
    q: "How much do digital marketing services cost?",
    a: "It depends on the market and the channel mix. Website projects are quoted as a fixed scope. Local SEO and Google Ads run as monthly retainers, with ad spend paid directly to Google rather than through us. You get the number in writing after the audit, before any commitment.",
  },
  {
    q: "How long before I see results from SEO?",
    a: "Local SEO usually shows movement in 60 to 90 days, with the bigger gains between months four and six as review velocity and local links build. Competitive national terms take longer. Google Ads produces leads in the first week, which is why we often run it alongside SEO in year one.",
  },
  {
    q: "Do you work with businesses outside the United States?",
    a: "Yes. Most of our clients are US-based, and we also work with businesses in Canada, the UK, Australia and the UAE. Local SEO work is done against whichever market you sell in.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. Website projects run on a fixed scope, and ongoing services are month to month after the initial build period. If a channel stops earning its keep, you can pause it.",
  },
  {
    q: "Can you take over an account another agency built?",
    a: "Yes, and it is common. We audit what is there first, keep what is working, and document what we change. You keep ownership of every account, property and profile, including anything we create.",
  },
  {
    q: "Who actually does the work?",
    a: "The specialist who audits your account runs it. You get named contacts for SEO, ads and development rather than a rotating account manager, and you can talk to them directly.",
  },
  {
    q: "How do we get started?",
    a: "Book a free audit. We review your site, rankings, Google profile and ad account, then walk you through what we found and what we would do first. There is no obligation to buy anything at the end of it.",
  },
];

/* ─────────────────────────────────────────────────────── structured data ─ */

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/services#digital-marketing-services`,
  name: "Digital Marketing Services",
  url: `${SITE_URL}/services`,
  description:
    "Full-service digital marketing from Zonic Media: web design and development, local SEO, Google Business Profile optimization and reinstatement, Google Ads management, branding and UI/UX design, and custom software.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zonic Media",
    url: SITE_URL,
    telephone: "+1-302-726-9736",
    email: "contact@zonicllc.com",
  },
  areaServed: [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "United Arab Emirates",
    "India",
  ],
  serviceType: services.map((service) => service.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zonic Media Digital Marketing Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      url: `${SITE_URL}${service.href}`,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}/services#how-to-start-a-project`,
  name: "How to start a digital marketing project with Zonic Media",
  description:
    "Zonic Media's five-step process for taking a digital marketing project from audit through launch and ongoing growth.",
  supply: [
    {
      "@type": "HowToSupply",
      name: "Business goals, current website, and marketing context",
    },
  ],
  tool: [
    {
      "@type": "HowToTool",
      name: "Strategy, design, development, SEO, analytics, and reporting",
    },
  ],
  step: processSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.desc,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}/services`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

/* ──────────────────────────────────────────────── small inline visuals ─── */

/** Decorative micro-animation on each service card. Purely presentational. */
function MiniVisual({ kind }: { kind: ServiceCard["visual"] }) {
  if (kind === "site") {
    return (
      <div className="svc-mini svc-mini-site" aria-hidden="true">
        <i />
        <i />
        <i />
        <b />
      </div>
    );
  }
  if (kind === "bars") {
    return (
      <div className="svc-mini svc-mini-bars" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <i key={n} />
        ))}
      </div>
    );
  }
  if (kind === "pins") {
    return (
      <div className="svc-mini svc-mini-pins" aria-hidden="true">
        {Array.from({ length: 15 }, (_, n) => (
          <i key={n} style={{ "--n": n } as CSSProperties} />
        ))}
      </div>
    );
  }
  if (kind === "ad") {
    return (
      <div className="svc-mini svc-mini-ad" aria-hidden="true">
        <span>Sponsored</span>
        <i />
        <i />
        <b />
      </div>
    );
  }
  if (kind === "brand") {
    return (
      <div className="svc-mini svc-mini-brand" aria-hidden="true">
        {[0, 1, 2, 3].map((n) => (
          <i key={n} style={{ "--n": n } as CSSProperties} />
        ))}
      </div>
    );
  }
  return (
    <div className="svc-mini svc-mini-flow" aria-hidden="true">
      <i />
      <span />
      <i />
      <span />
      <i />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────── page ─── */

export default function ServicesPage() {
  return (
    <div className="svc-page">
      <script
        id="services-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="services-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id="services-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ═══════════════════════════════════════════ 1 · HERO ═══════════ */}
      <section className="svc-hero">
        <div className="svc-container">
          <div className="svc-hero-grid">
            <div>
              <p className="svc-eyebrow">Full-service digital agency</p>
              <h1 className="svc-hero-h1">
                Digital Marketing Services That Turn Local Searches into{" "}
                <span className="svc-hl">Booked Jobs</span>
              </h1>
              <p className="svc-hero-sub">
                Zonic Media runs the digital marketing services a local or
                mid-size business actually needs: a website built to convert,
                local SEO and Google Business Profile work that wins the Map
                Pack, and Google Ads that pay for themselves. One team, one
                plan, one report at the end of the month.
              </p>
              <div className="svc-hero-ctas">
                <Link href="/contact-us" className="svc-btn">
                  Get a free growth audit
                  <span className="svc-btn-arrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
                <a href={SITE_CONTACT.phoneHref} className="svc-btn-ghost">
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="svc-hero-trust">
                <span>
                  <FiCheck size={14} aria-hidden="true" />
                  100+ brands scaled
                </span>
                <span>
                  <FiCheck size={14} aria-hidden="true" />
                  No long-term lock-in
                </span>
              </div>
            </div>

            <div>
              <GrowthConsole />
            </div>
          </div>

          <div className="svc-stats">
            {heroStats.map((s) => (
              <div className="svc-stat" key={s.k}>
                <p className="svc-stat-v">{s.v}</p>
                <p className="svc-stat-k">{s.k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ 2 · SERVICE GRID ═══════ */}
      <section className="svc-section svc-services" id="services">
        <div className="svc-container">
          <div className="svc-sec-head-center">
            <p className="svc-eyebrow">What we do</p>
            <h2 className="svc-h2">
              Every Digital Marketing Service Under One Roof
            </h2>
            <p className="svc-lead">
              Six disciplines, run by the same team off the same plan. Start
              with one, add the next when the numbers say it is worth funding.
            </p>
          </div>

          <div className="svc-services-grid">
            {services.map((svc) => (
              <div className="svc-card" key={svc.title}>
                <MiniVisual kind={svc.visual} />
                <h3 className="svc-card-title">{svc.title}</h3>
                <p className="svc-card-desc">{svc.desc}</p>
                <ul className="svc-card-list">
                  {svc.points.map((p) => (
                    <li key={p}>
                      <FiCheck size={13} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="svc-card-foot">
                  <Link href={svc.href} className="svc-arrow-link">
                    {svc.cta}
                    <FiArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ 3 · FEATURED BLOCKS ════════ */}
      <section className="svc-section svc-band svc-featured">
        <div className="svc-container">
          <div className="svc-sec-head-center">
            <p className="svc-eyebrow">How it works</p>
            <h2 className="svc-h2">
              What Each Service Changes, Shown Rather Than Claimed
            </h2>
            <p className="svc-lead">
              The panels below are illustrative views of the shift we are hired
              to produce: a faster site, a listing back on Maps, rankings across
              a service area, and an ad account that stops funding the wrong
              clicks.
            </p>
          </div>

          {blocks.map((b) => (
            <div
              className={`svc-block${b.reverse ? " svc-block-reverse" : ""}`}
              key={b.heading}
            >
              <div>
                <p className="svc-block-badge">{b.badge}</p>
                <h3 className="svc-h3">{b.heading}</h3>
                <p className="svc-lead">{b.body}</p>
                <ul className="svc-block-points">
                  {b.points.map((p) => (
                    <li key={p}>
                      <FiCheckCircle size={15} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href={b.href} className="svc-btn">
                  {b.cta}
                  <span className="svc-btn-arrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
              <div className="svc-block-visual">{b.visual}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════ 4 · PROCESS ════════ */}
      <section className="svc-section svc-band svc-process">
        <div className="svc-container">
          <div className="svc-sec-head">
            <p className="svc-eyebrow svc-eyebrow-light">Five-step process</p>
            <h2 className="svc-h2">
              A Process You Can Follow Without a Project Manager
            </h2>
            <p className="svc-lead">
              Same five steps whether we are building a site, rescuing a Google
              profile or rebuilding an ad account. You always know which step
              you are on.
            </p>
          </div>

          <div className="svc-process-track">
            {processSteps.map((step, i) => (
              <div
                className="svc-step"
                key={step.num}
                style={{ "--i": i } as CSSProperties}
              >
                <p className="svc-step-num">{step.num}</p>
                <h3 className="svc-step-title">{step.title}</h3>
                <p className="svc-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="svc-process-foot">
            <p>Trusted by 100+ businesses across home services, health and professional trades.</p>
            <Link href="/contact-us" className="svc-btn-gold">
              Book the audit
              <span className="svc-btn-arrow" aria-hidden="true">
                <FiArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ 5 · WHY ZONIC ═══════ */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-why-grid">
            <div>
              <p className="svc-eyebrow">Why Zonic Media</p>
              <h2 className="svc-h2">
                Four Channels, One Growth System Instead of Four Invoices
              </h2>
              <p className="svc-lead">
                Splitting a website across one vendor, SEO across another and
                ads across a third is how a marketing budget quietly stops
                working. Nobody owns the lead count, and every report measures a
                different thing.
              </p>
              <p className="svc-lead">
                We run all four off one plan. The site is built for the
                keywords SEO is chasing, the ad landing pages reuse the same
                conversion patterns, and the Google profile feeds both. One
                report tells you what produced the calls.
              </p>
              <Link href="/about" className="svc-arrow-link">
                More about how we work
                <FiArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div>
              <GrowthLoop />
            </div>
          </div>

          <div className="svc-why-cards">
            {whyPoints.map((p) => (
              <div className="svc-why-card" key={p.title}>
                <div className="svc-why-icon" aria-hidden="true">
                  {p.icon}
                </div>
                <p className="svc-why-card-title">{p.title}</p>
                <p className="svc-why-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════ 6 · INDUSTRIES ═══════ */}
      <section className="svc-section svc-band svc-industries">
        <div className="svc-container">
          <div className="svc-sec-head-center">
            <p className="svc-eyebrow">Who we serve</p>
            <h2 className="svc-h2">Industries We Work With</h2>
            <p className="svc-lead">
              The strategy changes by market. A roofer competes on Map Pack
              position and speed to answer; a law firm competes on authority and
              review depth. See all the{" "}
              <Link href="/industries" className="svc-inline-link">
                industries we serve
              </Link>
              .
            </p>
          </div>

          <div className="svc-ind-grid">
            {industries.map((ind) => (
              <div className="svc-ind-card" key={ind.title}>
                <div className="svc-ind-icon" aria-hidden="true">
                  {ind.icon}
                </div>
                <h3 className="svc-ind-title">{ind.title}</h3>
                <p className="svc-ind-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════ 7 · COMPARISON ═══════ */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-sec-head-center">
            <p className="svc-eyebrow">The difference</p>
            <h2 className="svc-h2">
              What Changes When the Channels Stop Working in Isolation
            </h2>
            <p className="svc-lead">
              Most businesses are not short of marketing activity. They are
              short of a single plan that ties the activity to booked work.
            </p>
          </div>

          <div className="svc-compare-grid">
            <div className="svc-compare-card">
              <p className="svc-compare-label">Running channels separately</p>
              <h3 className="svc-compare-heading">
                Busy Months, Flat Lead Count
              </h3>
              <ul className="svc-compare-list">
                {withoutPoints.map((p) => (
                  <li key={p}>
                    <span className="svc-compare-ico is-x" aria-hidden="true">
                      <FiX />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="svc-compare-card is-with">
              <p className="svc-compare-label">Working with Zonic Media</p>
              <h3 className="svc-compare-heading">
                One Plan, One Owner, One Number That Matters
              </h3>
              <ul className="svc-compare-list">
                {withPoints.map((p) => (
                  <li key={p}>
                    <span
                      className="svc-compare-ico is-check"
                      aria-hidden="true"
                    >
                      <FiCheck />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="svc-btn">
                Start with an audit
                <span className="svc-btn-arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ 8 · RESULTS ════════ */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-results-grid">
            <div>
              <p className="svc-eyebrow">Measurable outcomes</p>
              <h2 className="svc-h2">What Clients Gain in the First Year</h2>
              <p className="svc-lead">
                These are the ranges we see across active accounts, not a best
                case pulled from one campaign. Where a market is unusually
                competitive we say so during the audit rather than after you
                sign.
              </p>
              <Link href="/contact-us" className="svc-btn">
                Grow my business
                <span className="svc-btn-arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </Link>
            </div>

            <div className="svc-benefits">
              {benefits.map((b, i) => (
                <div className="svc-benefit" key={b.k}>
                  <div className="svc-benefit-bar" aria-hidden="true">
                    <i style={{ "--w": `${b.w}%`, "--i": i } as CSSProperties} />
                  </div>
                  <p className="svc-benefit-v">{b.v}</p>
                  <p className="svc-benefit-k">{b.k}</p>
                  <p className="svc-benefit-d">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════ 9 · AUDIT ════════ */}
      <section className="svc-section svc-band svc-audit">
        <div className="svc-container">
          <div className="svc-audit-grid">
            <div>
              <p className="svc-eyebrow">Free strategy session</p>
              <h2 className="svc-h2">
                Start with a Free Digital Marketing Audit
              </h2>
              <p className="svc-lead">
                Before we recommend a single service, we look at what you
                already have: the site, the rankings, the Google profile and the
                ad account. You leave the call with the findings whether or not
                you hire us.
              </p>
              <p className="svc-audit-proof">
                <FiCheckCircle size={16} aria-hidden="true" />
                Free, roughly 30 minutes, no obligation
              </p>
              <Link href="/contact-us" className="svc-btn">
                Book my free audit
                <span className="svc-btn-arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </Link>
            </div>

            <div className="svc-audit-list">
              {auditIncludes.map((item, i) => (
                <div
                  className="svc-audit-item"
                  key={item.title}
                  style={{ "--i": i } as CSSProperties}
                >
                  <span className="svc-audit-tick" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <p className="svc-audit-title">{item.title}</p>
                    <p className="svc-audit-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ 10 · FAQ ═══════ */}
      <section className="svc-section">
        <div className="svc-container">
          <div className="svc-faq-grid">
            <div>
              <p className="svc-eyebrow">FAQ</p>
              <h2 className="svc-h2">
                Digital Marketing Services: Common Questions
              </h2>
              <p className="svc-lead">
                Anything not covered here, ask on the audit call. We answer
                pricing and timeline questions directly rather than routing them
                to a proposal.
              </p>
              <Link href="/contact-us" className="svc-btn-ghost">
                Book a strategy call
                <FiArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="svc-faq-list">
              {faqs.map((faq) => (
                <details className="svc-faq-item" name="svc-faq" key={faq.q}>
                  <summary className="svc-faq-q">
                    {faq.q}
                    <span className="svc-faq-icon" aria-hidden="true" />
                  </summary>
                  <p className="svc-faq-a">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════ 11 · FINAL CTA ═══════ */}
      <section className="svc-final">
        <div className="svc-container">
          <div className="svc-final-card">
            <div className="svc-final-inner">
              <p className="svc-eyebrow svc-eyebrow-light">Ready to start?</p>
              <h2 className="svc-final-h">
                Let Us Find Where Your Leads are Leaking,{" "}
                <span>Then Fix That First</span>
              </h2>
              <p className="svc-final-sub">
                Whether you need a new website, local rankings, a Google profile
                back on Maps or an ad account that finally returns its spend, it
                starts the same way: a free audit and a plan you can act on with
                or without us.
              </p>
              <div className="svc-final-actions">
                <Link href="/contact-us" className="svc-btn-gold">
                  Get my free audit
                  <span className="svc-btn-arrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="svc-btn-outline-light"
                >
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesDirectory />

      <GhlChatWidget />
      <Footer />
    </div>
  );
}
