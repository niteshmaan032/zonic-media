import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import "@/app/style/homeInspAgency.css";

import HomeInspectorLeadForm from "@/app/components/HomeInspectorLeadForm";
import HiaFaqAccordion from "@/app/components/HiaFaqAccordion";
import HashScrollLink from "@/app/components/HashScrollLink";
import ClutchWidget from "@/app/components/ClutchWidget";
import HeroTrustBadges from "@/app/components/HeroTrustBadges";
import {
  GrowthCurveVisual,
  LeadEngineVisual,
  MapPackRaceVisual,
} from "@/app/components/IndustryMarketingVisuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: { absolute: "Home Inspector Marketing Agency | SEO, Ads & Leads" },
  description:
    "Home inspector marketing agency: local SEO, Google Business Profile, Google Ads and agent referral campaigns that book more inspections.",
  keywords: [
    "home inspector marketing",
    "home inspection marketing",
    "home inspector marketing ideas",
    "how to get clients as a home inspector",
    "home inspector marketing agency",
    "home inspector seo",
    "home inspector google ads",
    "home inspection marketing ideas",
    "realtors and home inspectors",
  ],
  alternates: { canonical: "/services/home-inspector-marketing" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  {
    name: "Home Inspector Marketing Agency",
    url: "/services/home-inspector-marketing",
  },
]);

const visualCopy = {
  industry: "home inspection",
  industryTitle: "Home Inspection",
  business: "home inspection company",
  jobsNoun: "booked inspections",
  mapQuery: "home inspector near me",
};

const tickerItems = [
  "Free Home Inspector Marketing Audit",
  "500+ Local Businesses Ranked",
  "Month-to-Month, No Contracts",
  "Local SEO · Google Ads · GBP · Social · Websites",
  "Trusted by Inspectors Nationwide",
  "4.9/5 Average Client Rating",
];

const trustItems = [
  { num: "500+", label: "Businesses Ranked" },
  { num: "4.9/5", label: "Client Satisfaction" },
  { num: "95%", label: "Growth Success Rate" },
  { num: "$750", label: "Plans Start At" },
];

const states = [
  { name: "Texas", slug: "texas" },
  { name: "Florida", slug: "florida" },
  { name: "California", slug: "california" },
  { name: "North Carolina", slug: "north-carolina" },
  { name: "Georgia", slug: "georgia" },
];

const problemCards = [
  {
    h: "Agent Referrals are Slowing Down.",
    p: "The agents who built your pipeline are retiring, switching brokerages, or splitting their referrals across multiple inspectors. You can't grow on a shrinking source.",
  },
  {
    h: "Your Google Listing is Invisible.",
    p: "You don't show up in the local pack for \"home inspector + your city.\" The map shows three other companies — and they're getting the buyer calls you should be getting.",
  },
  {
    h: "Your Website Doesn't Convert.",
    p: "The traffic you do get bounces because there's no online booking, no clear pricing direction, and the mobile experience is broken. People leave and never come back.",
  },
  {
    h: "Winter is Killing Your Revenue.",
    p: "Your busy season is six months long. The other six months you're burning savings. A diversified marketing engine smooths out the year so the dead months stop being dead.",
  },
];

const services = [
  {
    num: "01 · LOCAL SEO",
    h: "Rank for \"Home Inspector Near Me\" in Every Town You Serve.",
    p: "Local SEO for home inspectors is not a generic checklist exercise. The way buyers search for inspectors is hyper-local and intent-heavy — they're searching for a specific city, a specific neighborhood, sometimes a specific home type. We build out service-area pages for every town in your coverage map, fix your citations across the directories real estate buyers actually use, and earn the kind of local backlinks that move the needle.",
    items: [
      "Service-area pages for every town and zip you cover",
      "Citation cleanup on Angi, Yelp, NACHI, InterNACHI, BBB, HomeAdvisor",
      "NAP consistency audit across 60+ directories",
      "Local backlinks from real estate agents, lenders, title companies",
      "On-page SEO for radon, mold, sewer scope, pool, and pre-listing pages",
    ],
  },
  {
    num: "02 · GOOGLE BUSINESS PROFILE",
    h: "Own the Local Map Pack for Your Inspection Service Area.",
    p: "Your Google Business Profile is the single highest-converting asset you own — when it's optimized properly, it sends more calls than your website. We rebuild the profile from the inside out: every category beyond \"home inspector\" you should be claiming, photo geo-tagging from real inspections, weekly Google Posts about seasonal issues, and a Q&A section seeded with the questions homebuyers actually ask.",
    items: [
      "Category optimization (mold, radon, sewer scope, drone, thermal imaging)",
      "Geo-tagged photo uploads from real inspection sites",
      "Weekly Google Posts tied to season and local market events",
      "Q&A seeding with high-intent buyer questions",
      "Service-area accuracy and review response management",
    ],
  },
  {
    num: "03 · GOOGLE ADS",
    h: "Capture the Buyers Searching Right Now.",
    p: "Local SEO is a long game. Google Ads is how you fill the calendar this week. We build inspection-specific search campaigns with the negative keywords no one else thinks about (no, you don't want to pay for \"DIY home inspection checklist\" or \"home inspector salary\"), call-only ads for mobile users, and geo-targeting that matches the actual neighborhoods you want to work in. Most clients see calls inside the first ten days of the campaign going live.",
    items: [
      "Inspection-specific keyword research and negative keyword lists",
      "Call-only ads optimized for mobile buyers",
      "Geo-targeting at the zip code and neighborhood level",
      "Conversion tracking for calls, form fills, and online bookings",
      "Monthly bid management and budget pacing reports",
    ],
  },
  {
    num: "04 · SOCIAL MEDIA MARKETING",
    h: "Build the Trust That Closes the Booking.",
    p: "Homebuyers are nervous. They are spending more money than they ever have on a property they barely understand, and they're hiring you to be their last line of defense before signing. Social media — when done right for home inspectors — is where that trust gets built before a buyer ever picks up the phone. We create short-form video content from real inspection findings, agent-facing content on LinkedIn, and a weekly cadence that keeps your name in front of every potential referral source.",
    items: [
      "Short-form video clips of unusual inspection findings",
      "Educational content for first-time homebuyers",
      "LinkedIn presence for real estate agent relationships",
      "Instagram and Facebook content calendar with weekly posts",
      "Reels and YouTube Shorts optimized for local discovery",
    ],
  },
  {
    num: "05 · WEBSITE DESIGN & SEO",
    h: "A Website That Actually Books Inspections.",
    p: "Most home inspector websites are brochures. We build conversion machines. That means online scheduling integrated with your inspection software, instant quote calculators for service type and square footage, service pages for every inspection add-on you offer, mobile load times under two seconds, and on-page SEO that targets the exact phrases buyers in your city are typing. If your current site is what it is and we just need to fix it, we can do that too.",
    items: [
      "Online booking integrated with ISN, Spectora, HomeGauge, or HomeHubZone",
      "Instant quote calculator by property type and size",
      "Mobile-first design with sub-2-second load times",
      "Schema markup for LocalBusiness, FAQPage, Review, Service",
      "Dedicated pages for every ancillary service (mold, radon, pool, sewer scope, drone)",
    ],
  },
  {
    num: "06 · REVIEWS & REPUTATION",
    h: "Turn Every Inspection into a Five-Star Public Endorsement.",
    p: "Reviews are the single biggest factor — after distance — in whether a buyer chooses your inspection company over the one three blocks away. We build an automated review request system that fires the right message at the right time after every inspection, monitors review activity across Google, Yelp, Angi, and NextDoor, and writes professional response templates for negative reviews so a one-star complaint doesn't bury you on Page One.",
    items: [
      "Automated review requests by SMS and email after every inspection",
      "Custom review templates referencing actual findings (not generic)",
      "Monitoring across Google, Yelp, Angi, BBB, NextDoor, Facebook",
      "Professional response drafting for negative reviews",
      "Strategy to surface neighborhood-specific reviews for local SEO",
    ],
  },
];

const channelTable = [
  {
    channel: "Google Business Profile",
    tag: "Map pack",
    delivers:
      "Direct calls from local Maps searches and the GBP knowledge panel — typically the highest-converting asset for a home inspection company.",
    timeline: "30–60 days",
    fit: "Inspectors invisible in the local 3-pack despite having reviews.",
  },
  {
    channel: "Local SEO",
    tag: "Organic rankings",
    delivers:
      "Page-one rankings for buyer search phrases across your city, suburbs, and service-area towns.",
    timeline: "90–180 days",
    fit: "Inspectors paying for clicks they should be ranking for organically.",
  },
  {
    channel: "Google Ads",
    tag: "Paid search",
    delivers:
      "Buyer-intent leads that fill the calendar this week while SEO compounds in the background.",
    timeline: "1–10 days",
    fit: "Inspectors who need booked inspections now, not next quarter.",
  },
  {
    channel: "Conversion Website",
    tag: "Booking engine",
    delivers:
      "Mobile-first site with online scheduling, instant quote calculator, and dedicated pages for every add-on service.",
    timeline: "Day one of launch",
    fit: "Inspectors losing leads on a brochure-style site that loads in five seconds.",
  },
  {
    channel: "Reviews & Reputation",
    tag: "Trust signal",
    delivers:
      "Automated review requests across SMS and email, plus monitoring and response across Google, Yelp, Angi, BBB.",
    timeline: "First 14 days",
    fit: "Inspectors who can't break into the 4.8★+ tier of their local market.",
  },
  {
    channel: "Social Media",
    tag: "Top of funnel",
    delivers:
      "Short-form video of real findings and agent-facing LinkedIn content that builds trust before the booking call.",
    timeline: "60–90 days",
    fit: "Inspectors competing on reputation and referrals, not just clicks.",
  },
];

const processSteps = [
  {
    n: "1",
    h: "The Free Audit",
    p: "You fill out the form. Within five business days you get a written report covering your GBP, your local rankings, your website, your reviews, your citations, and the gaps a competitor in your market is exploiting. No call required to receive the report.",
  },
  {
    n: "2",
    h: "The Strategy Call",
    p: "If the audit makes sense, we get on a thirty-minute call. You bring your booking goals, your service area, your busy season, and your current marketing spend. We walk through which plan fits and where the first wins will come from.",
  },
  {
    n: "3",
    h: "Launch & Reporting",
    p: "Within fourteen days of signing, your campaigns are live and your GBP is rebuilt. You get a monthly performance report you can actually read — not a vanity dashboard — covering calls, form fills, ranking movement, and revenue attribution.",
  },
];

const statRows = [
  {
    big: "3.2×",
    h: "More Direct Calls Within 90 Days",
    p: "Average increase in non-referred phone calls from buyers and sellers.",
  },
  {
    big: "52%",
    h: "Lower Cost Per Booked Inspection",
    p: "Comparing month-one acquisition cost to month-twelve, blended across all channels.",
  },
  {
    big: "#1",
    h: "Local Map Pack Rankings",
    p: "Within 6 months for primary inspection keyword in target city.",
  },
  {
    big: "60%",
    h: "Less Winter Revenue Drop",
    p: "Off-season bookings stabilize as agent-referral dependency breaks.",
  },
];

const industryCards = [
  {
    h: "Solo Home Inspectors",
    p: "One inspector, one calendar. Goal: replace agent dependency with steady direct bookings.",
  },
  {
    h: "Multi-Inspector Firms",
    p: "3+ inspectors covering a metro. Goal: keep every calendar full and expand coverage zones.",
  },
  {
    h: "Specialty Inspectors",
    p: "Radon, mold, sewer scope, pool, commercial. Goal: own niche keywords with low competition.",
  },
  {
    h: "Commercial Inspectors",
    p: "Property condition assessments, retail, multifamily. Goal: high-value B2B lead generation.",
  },
  {
    h: "New & Growing Inspectors",
    p: "Less than two years in business. Goal: establish online presence and break in without an agent network.",
  },
  {
    h: "Established Firms",
    p: "Ten-plus years, strong reputation. Goal: modernize digital and stop losing share to newer competitors.",
  },
  {
    h: "Franchise Inspectors",
    p: "WIN, Pillar to Post, HouseMaster. Goal: dominate your local territory beyond corporate marketing.",
  },
  {
    h: "Pre-Listing Specialists",
    p: "Inspections for sellers, not buyers. Goal: reach listing agents and FSBO sellers directly.",
  },
];

const priceCards = [
  {
    tier: "Foundation",
    amount: "$750",
    period: "per month · billed monthly",
    features: [
      "Google Business Profile optimization (full rebuild + monthly management)",
      "Local SEO foundation — service-area pages for up to 5 towns",
      "Citation cleanup across 40+ home services and real estate directories",
      "NAP consistency audit and fix",
      "On-page SEO for primary inspection service pages",
      "Monthly performance report",
      "Email support, 24-hour response",
    ],
    cta: "Start with Foundation",
    featured: false,
  },
  {
    tier: "Growth",
    amount: "$1,350",
    period: "per month · billed monthly",
    features: [
      "Everything in Foundation",
      "Google Ads management — full search campaign build and weekly bid management",
      "Automated review request system with custom inspection templates",
      "Review monitoring and response across Google, Yelp, Angi, BBB",
      "Service-area pages expanded to up to 12 towns",
      "Quarterly strategy call with founder",
      "Priority email + SMS support",
    ],
    cta: "Choose Growth",
    featured: true,
    badge: "Most Popular",
  },
  {
    tier: "Authority",
    amount: "$2,000",
    period: "per month · billed monthly",
    features: [
      "Everything in Growth",
      "Social media management — Instagram, Facebook, LinkedIn",
      "Short-form video content from inspection sites (4 per month)",
      "Meta Ads management for buyer and agent audiences",
      "Website conversion audit and ongoing optimization",
      "Service-area expansion to unlimited towns",
      "Monthly strategy call with founder",
    ],
    cta: "Go Authority",
    featured: false,
  },
];

const faqs = [
  {
    q: "How long does it take to see results from home inspector marketing?",
    a: "Most home inspectors start seeing measurable changes within thirty to forty-five days. Google Business Profile improvements and paid ad campaigns typically generate calls inside the first three weeks. Sustained local SEO ranking improvements take ninety to one-hundred-eighty days depending on competition in your metro and the current state of your online presence. We give you honest timelines during the audit — never inflated \"results in seven days\" promises that don't survive contact with reality.",
  },
  {
    q: "Do I need to sign a long-term contract with Zonic Media?",
    a: "No. Every plan is month to month. If a service is not producing results, you can pause or cancel without penalty. We have stayed away from twelve-month lockups because home inspectors deserve to keep working with us because the work is paying off, not because a contract says they have to. Our retention rate is higher than the industry average specifically because we don't trap people.",
  },
  {
    q: "Will digital marketing replace my real estate agent referrals?",
    a: "Our goal is not to replace agent relationships, it is to stop you from depending entirely on them. Most of the inspectors we work with keep their agent referrals and add a steady stream of direct calls from buyers, sellers, and FSBO transactions that come through Google searches, Maps results, and paid ads. The agent referrals become a bonus, not a lifeline.",
  },
  {
    q: "Do you work with home inspectors outside of Delaware?",
    a: "Yes. Our home office is in Dover, Delaware, but we work with home inspectors across Texas, Florida, California, North Carolina, Georgia, Arizona, Tennessee, Colorado, South Carolina, Virginia, and select metros nationally. Local SEO and digital marketing for home inspectors translates well across geographies because the search behavior of homebuyers is fundamentally the same.",
  },
  {
    q: "What is included in the free home inspector marketing audit?",
    a: "The audit reviews your current Google Business Profile setup, your local pack ranking for primary inspection keywords in your service area, your website speed and conversion structure, your review velocity and response patterns, citation accuracy across home services and real estate directories, and any active Google Ads or Meta Ads accounts. You receive a written report with prioritized recommendations within five business days.",
  },
  {
    q: "How much does home inspector marketing cost?",
    a: "Our plans start at $750 per month for foundational local SEO and Google Business Profile work, $1,350 per month for growth-stage inspectors who need paid ads and review systems on top of SEO, and $2,000 per month for established firms who want the full digital marketing stack including social media, content, and website conversion work. Ad spend is separate and goes directly to Google and Meta.",
  },
  {
    q: "Can you fix my Google Business Profile if it's been suspended?",
    a: "Yes. GBP reinstatement is one of our specialties — Zonic Media has reinstated hundreds of suspended profiles across local service businesses including home inspectors. If your profile is currently suspended, mention it on the audit form and we will prioritize reviewing the suspension reason and the path to reinstatement before we look at anything else.",
  },
  {
    q: "What home inspection software do you integrate with?",
    a: "We integrate online booking with the major home inspection scheduling platforms including ISN (Inspection Support Network), Spectora, HomeGauge, HomeHubZone, and Inspector Nexus. If your inspection software is not on that list, we can build a custom intake flow that pushes new bookings into whatever system you currently use.",
  },
  {
    q: "How do home inspectors get clients in 2026 beyond agent referrals?",
    a:
      "Agent referrals still matter, but buyers increasingly pick their own inspector from Google. A verified Google Business Profile in the right category, reviews that mention the city, service pages for each inspection type, and Google Local Services Ads put you in front of buyers the day they go under contract. Zonic Media runs that program and keeps an agent-outreach track alongside it so both channels compound.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://www.zonicllc.com/services/home-inspector-marketing",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  pageUrl: "/services/home-inspector-marketing",
  areaServed: { type: "Country", name: "United States" },
});

const serviceJsonLd = buildServiceJsonLd({
  name: "Home Inspector Marketing Agency",
  description:
    "Home inspector marketing agency: local SEO, Google Business Profile, Google Ads and agent referral campaigns that book more inspections.",
  pageUrl: "/services/home-inspector-marketing",
  serviceType: "Home Inspector Marketing",
  areaServed: "United States",
});

function Page() {
  return (
    <>
      <script
        id="hia-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="hia-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="hia-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        id="hia-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div id="hia-top" className="hia-page">
        {/* Ticker */}
        <div className="hia-ticker">
          <div className="hia-ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* Minimal NAV */}
        <nav className="hia-nav">
          <Link href="/" className="hia-nav-logo" aria-label="Zonic Media">
            <Image
              src="/images/logo.webp"
              width={108}
              height={41}
              alt="Zonic Media"
              className="hia-nav-logo-img"
              priority
            />
          </Link>
          <div className="hia-nav-links">
            <HashScrollLink href="#hia-problem">The Problem</HashScrollLink>
            <HashScrollLink href="#hia-services">What We Do</HashScrollLink>
            <HashScrollLink href="#hia-results">Results</HashScrollLink>
            <HashScrollLink href="#hia-pricing">Pricing</HashScrollLink>
            <HashScrollLink href="#hia-faq">FAQ</HashScrollLink>
          </div>
          <div className="hia-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="hia-nav-phone">
              {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#hia-audit-top" className="hia-nav-cta">
              Get Free Audit
            </HashScrollLink>
          </div>
        </nav>

        <div className="hia-main-wrapper">
          <div className="hia-row">
            {/* LEFT: CONTENT */}
            <div className="hia-content-col">
              {/* HERO */}
              <section className="hia-hero">
                <div className="hia-eyebrow">
                  Marketing Agency for Home Inspectors
                </div>
                <h1>
                  The Marketing Partner Home Inspectors Hire When They Want
                  the <span className="hia-accent">Phone to Ring.</span>
                </h1>
                <p className="hia-hero-sub">
                  Most home inspectors built their business on a handful of
                  real estate agents who keep sending work. That worked until
                  it didn&apos;t. We help home inspection companies show up
                  first when buyers, sellers, and new agents search Google —
                  so your calendar stays full whether your favorite agents
                  are referring or not.
                </p>
                <div className="hia-hero-ctas">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Book Your Free Audit →
                  </HashScrollLink>
                  <Link
                    href={SITE_CONTACT.phoneHref}
                    className="hia-btn hia-btn-ghost"
                  >
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>

                <HeroTrustBadges trustpilotSrc="/images/trust-black.png" />

                <div className="hia-trust-row">
                  {trustItems.map((t, i) => (
                    <div className="hia-trust-item" key={i}>
                      <span className="hia-trust-num">{t.num}</span>
                      <span className="hia-trust-label">{t.label}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile/Tab top inline form */}
                <div className="hia-mob-form hia-mob-form-top d-block d-lg-none" id="hia-audit-top">
                  <HomeInspectorLeadForm />
                </div>
              </section>

              {/* STATES SERVED */}
              <section className="hia-section hia-states">
                <div className="hia-sec-label">Where We Work</div>
                <h2 className="hia-sec-h2">
                  Home Inspectors We Help Grow Across{" "}
                  <span className="hia-accent">5 States.</span>
                </h2>
                <p className="hia-sec-sub">
                  Zonic Media helps{" "}
                  <Link
                    href="/services/home-inspector-marketing/texas"
                    className="hia-inline-link"
                  >
                    home inspectors in Texas
                  </Link>
                  , Florida, California, North Carolina, and Georgia — with
                  dedicated{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="hia-inline-link"
                  >
                    local SEO
                  </Link>{" "}
                  playbooks for each market.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Check My Coverage →
                  </HashScrollLink>
                </div>
                <div className="hia-states-grid">
                  {states.map((state) => (
                    <Link
                      key={state.slug}
                      href={`/services/home-inspector-marketing/${state.slug}`}
                      className="hia-state-chip"
                    >
                      <span className="hia-state-pin" aria-hidden="true" />
                      <span className="hia-state-name">{state.name}</span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* PROBLEM */}
              <section className="hia-section" id="hia-problem">
                <div className="hia-sec-label">Why Home Inspectors Stop Growing</div>
                <h2 className="hia-sec-h2">
                  Your Phone Rings When an Agent Refers You. Then It{" "}
                  <span className="hia-accent">Goes Quiet.</span>
                </h2>
                <p className="hia-sec-sub">
                  This is the pattern almost every home inspector knows. Two
                  or three loyal agents send most of the work, the rest of the
                  calendar fills with stragglers, and when a referral source
                  retires, moves, or shifts to a competitor, the whole
                  business wobbles. Digital marketing solves this — but only
                  when it&apos;s built around how the home inspection
                  industry actually works.
                </p>
                <div className="hia-problem-prose">
                  <p>
                    Home inspection is one of the most referral-dependent
                    businesses in the local services world. The problem is
                    that the people writing the checks — homebuyers — are not
                    the people sending the referrals. Buyers ask their agent
                    for a recommendation, but plenty of them also Google{" "}
                    <strong>&ldquo;home inspector near me&rdquo;</strong>{" "}
                    first, especially when they&apos;re buying without an
                    agent, working with an out-of-state agent, or simply want
                    to compare options on their own.
                  </p>
                  <p>
                    If your{" "}
                    <Link
                      href="/local-seo-google-business-optimization"
                      className="hia-inline-link"
                    >
                      Google Business Profile
                    </Link>{" "}
                    is sitting on page two and your website looks like it was
                    built in 2014, those buyers never see you. They book the
                    inspector with the better reviews, the cleaner Maps
                    listing, and a{" "}
                    <Link href="/services/web-design" className="hia-inline-link">
                      website that actually loads
                    </Link>{" "}
                    in under three seconds on their phone.
                  {" "}
                    Starting a marketing plan? See our{" "}
                    <Link href="/home-inspector-website-design-agency-us/offer" className="hia-inline-link">
                      free home inspector website offer
                    </Link>
                    .
                  </p>
                </div>
                <div className="hia-section-cta">
                  <Link href={SITE_CONTACT.phoneHref} className="hia-cta-call">
                    <span className="hia-cta-call-dot" aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>
                <div className="hia-problem-grid">
                  {problemCards.map((c, i) => (
                    <div className="hia-problem-card" key={i}>
                      <h4>{c.h}</h4>
                      <p>{c.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              <MapPackRaceVisual copy={visualCopy} />

              {/* SERVICES */}
              <section className="hia-section hia-services-sec" id="hia-services">
                <div className="hia-sec-label">Complete Digital Marketing Stack</div>
                <h2 className="hia-sec-h2">
                  Everything a Home Inspection Company Needs to{" "}
                  <span className="hia-accent">Grow Online.</span>
                </h2>
                <p className="hia-sec-sub">
                  We are not a &ldquo;just SEO&rdquo; shop or a &ldquo;just
                  Google Ads&rdquo; shop. We build the whole funnel for home
                  inspectors, from the way you appear on Google Maps to the
                  way your website converts a visitor into a booked
                  inspection.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Audit My Full Funnel →
                  </HashScrollLink>
                </div>
                <div className="hia-svc-grid">
                  {services.map((s, i) => (
                    <article className="hia-svc-card" key={i}>
                      <div className="hia-svc-num">{s.num}</div>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                      <ul className="hia-svc-includes">
                        {s.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <LeadEngineVisual copy={visualCopy} />

              {/* CHANNEL MIX TABLE */}
              <section className="hia-section" id="hia-channels">
                <div className="hia-sec-label">Channel Mix at a Glance</div>
                <h2 className="hia-sec-h2">
                  What Each Marketing Channel Does — And{" "}
                  <span className="hia-accent">How Fast It Pays Back.</span>
                </h2>
                <p className="hia-sec-sub">
                  Use this grid as a planning guide.{" "}
                  <Link href="/services/google-ads" className="hia-inline-link">
                    Google Ads management
                  </Link>{" "}
                  and a polished Google Business Profile buy you bookings this
                  month. Local SEO and social compound across the year. The
                  strongest home inspector marketing plans blend both timelines
                  so the calendar never goes cold.
                </p>
                <div className="hia-channel-table-wrap">
                  <table className="hia-channel-table">
                    <caption className="hia-sr-only">
                      How home inspector marketing channels compare on delivery,
                      timeline, and ideal fit.
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Channel</th>
                        <th scope="col">What it delivers</th>
                        <th scope="col">Time to first leads</th>
                        <th scope="col">Strongest for</th>
                      </tr>
                    </thead>
                    <tbody>
                      {channelTable.map((row, i) => (
                        <tr key={i}>
                          <td data-label="Channel">
                            <div className="hia-ct-name">{row.channel}</div>
                            <span className="hia-ct-tag">{row.tag}</span>
                          </td>
                          <td data-label="What it delivers">{row.delivers}</td>
                          <td data-label="Time to first leads">
                            <span className="hia-ct-time">{row.timeline}</span>
                          </td>
                          <td data-label="Strongest for">{row.fit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* PROCESS */}
              <section className="hia-section">
                <div className="hia-sec-label">How We Work With You</div>
                <h2 className="hia-sec-h2">
                  A Clean Three-Step Start. Then We{" "}
                  <span className="hia-accent">Get to Work.</span>
                </h2>
                <p className="hia-sec-sub">
                  No tedious onboarding deck. No fifty-question intake form.
                  Most home inspectors are running a business while we&apos;re
                  getting started, so we keep your time in the process to
                  about forty-five minutes total across the first two weeks.
                </p>
                <div className="hia-section-cta">
                  <Link href={SITE_CONTACT.phoneHref} className="hia-cta-call">
                    <span className="hia-cta-call-dot" aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>
                <div className="hia-process-grid">
                  {processSteps.map((s, i) => (
                    <div className="hia-process-step" key={i}>
                      <span className="hia-process-num">{s.n}</span>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* RESULTS */}
              <section className="hia-section hia-results-sec" id="hia-results">
                <div className="hia-sec-label">Real Outcomes, Not Vanity Metrics</div>
                <h2 className="hia-sec-h2">
                  What Changes When Home Inspectors Stop{" "}
                  <span className="hia-accent">Relying on Referrals Alone.</span>
                </h2>
                <p className="hia-sec-sub">
                  These are the patterns we see across the home inspection
                  companies we work with after the first ninety to
                  one-hundred-eighty days. Your specific numbers will depend
                  on your market, your current presence, and how aggressive
                  you want to be.
                </p>
                <div className="hia-results-prose">
                  <p>
                    The pattern is consistent: in the first ninety days, the
                    Google Business Profile work — including{" "}
                    <Link
                      href="/services/gmb-reinstatement-help"
                      className="hia-inline-link"
                    >
                      reinstating any suspended profile
                    </Link>{" "}
                    — and the paid ads start filling the calendar with direct
                    calls. By month four or five, the local SEO investment
                    starts compounding — you stop paying for clicks on keywords
                    you now rank #1 for organically. By the end of year one, the
                    cost per booked inspection has typically dropped by half.
                  </p>
                  <p>
                    The other pattern worth flagging:{" "}
                    <strong>seasonality flattens</strong>. The slow months
                    stop being as slow because you&apos;re capturing buyer
                    searches year-round, including from buyers doing
                    pre-listing inspections, investors, and the small-but-
                    steady flow of FSBO transactions that don&apos;t have an
                    agent involved at all.
                  </p>
                </div>
                <div className="hia-stat-stack">
                  {statRows.map((s, i) => (
                    <div className="hia-stat-row" key={i}>
                      <div className="hia-stat-big">{s.big}</div>
                      <div className="hia-stat-desc">
                        <h4>{s.h}</h4>
                        <p>{s.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit"
                    className="hia-btn hia-btn-primary"
                  >
                    Get My Growth Plan →
                  </HashScrollLink>
                </div>
              </section>

              {/* INDUSTRIES */}
              <section className="hia-section">
                <div className="hia-sec-label">Who We Work With</div>
                <h2 className="hia-sec-h2">
                  Built for the Full Spectrum of the{" "}
                  <span className="hia-accent">Home Inspection Industry.</span>
                </h2>
                <p className="hia-sec-sub">
                  Whether you&apos;re a solo inspector running one calendar
                  or a multi-inspector firm covering an entire metro, the
                  marketing playbook is similar but the priorities shift.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit"
                    className="hia-btn hia-btn-primary"
                  >
                    Match Me to a Plan →
                  </HashScrollLink>
                </div>
                <div className="hia-industry-grid">
                  {industryCards.map((c, i) => (
                    <div className="hia-industry-card" key={i}>
                      <h4>{c.h}</h4>
                      <p>{c.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CLUTCH REVIEWS */}
              <section className="hia-section hia-reviews-sec" id="hia-reviews">
                <div className="hia-sec-label">Trusted by Clients Nationwide</div>
                <h2 className="hia-sec-h2">
                  What Inspectors and Other Service Businesses{" "}
                  <span className="hia-accent">Say About Working with Us.</span>
                </h2>
                <p className="hia-sec-sub">
                  Verified reviews from Clutch — the independent platform
                  agencies can&apos;t edit, filter, or fake. The same operators
                  who hired us to fix their booking pipeline — from{" "}
                  <Link
                    href="/services/home-inspector-marketing/florida"
                    className="hia-inline-link"
                  >
                    Florida home inspection companies
                  </Link>{" "}
                  to multi-state firms — left these.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit"
                    className="hia-btn hia-btn-primary"
                  >
                    Become the Next Win →
                  </HashScrollLink>
                </div>
                <div className="hia-reviews-wrap">
                  <ClutchWidget
                    widgetType="12"
                    height="375"
                    primaryColor="#2567e8"
                    reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
                  />
                </div>
              </section>

              <GrowthCurveVisual copy={visualCopy} />

              {/* PRICING */}
              <section className="hia-section hia-pricing-sec" id="hia-pricing">
                <div className="hia-sec-label">Transparent Pricing, Month to Month</div>
                <h2 className="hia-sec-h2">
                  Three Plans Built for Where Your Inspection Business is{" "}
                  <span className="hia-accent">Right Now.</span>
                </h2>
                <p className="hia-sec-sub">
                  Pick the plan that fits where you are today — you can move
                  up or down between tiers any month. Ad spend is separate
                  from the management fee and goes straight to Google and
                  Meta, never to us. No setup fees, no twelve-month lockups,
                  no hidden overage charges.
                </p>
                <div className="hia-price-grid">
                  {priceCards.map((p, i) => (
                    <div
                      className={`hia-price-card${p.featured ? " hia-featured" : ""}`}
                      key={i}
                    >
                      {p.featured && p.badge && (
                        <div className="hia-price-badge">{p.badge}</div>
                      )}
                      <div className="hia-price-tier">{p.tier}</div>
                      <div className="hia-price-amount">{p.amount}</div>
                      <div className="hia-price-period">{p.period}</div>
                      <hr className="hia-price-divider" />
                      <ul className="hia-price-list">
                        {p.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                      <HashScrollLink
                        href="#hia-audit"
                        className="hia-btn hia-btn-primary hia-btn-block"
                      >
                        {p.cta}
                      </HashScrollLink>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="hia-section" id="hia-faq">
                <div className="hia-sec-label">Common Questions From Home Inspectors</div>
                <h2 className="hia-sec-h2">
                  Everything You Wanted to Ask Before That{" "}
                  <span className="hia-accent">Strategy Call.</span>
                </h2>
                <p className="hia-sec-sub">
                  If you don&apos;t see your question below — whether it&apos;s
                  about paid ads, review systems, or how to{" "}
                  <Link
                    href="/services/gmb-verification-help"
                    className="hia-inline-link"
                  >
                    verify a new Google Business Profile
                  </Link>{" "}
                  — just include it in the audit form and we will answer it in
                  the written report.
                </p>
                <HiaFaqAccordion items={faqs} defaultOpen={0} />
              </section>

              {/* Mobile inline form */}
              <div className="hia-mob-form d-block d-lg-none" id="hia-audit">
                <HomeInspectorLeadForm />
              </div>
            </div>

            {/* RIGHT: STICKY FORM */}
            <div
              className="hia-form-col d-none d-lg-block"
              data-scroll-target="hia-audit hia-audit-top"
            >
              <div className="hia-sticky-form" id="hia-audit-desktop">
                <HomeInspectorLeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="hia-final-cta">
          <div className="hia-fc-inner">
            <div className="hia-eyebrow hia-eyebrow-light">
              Start With the Free Audit
            </div>
            <h2>
              Get a Marketing Audit Built for{" "}
              <span className="hia-accent">Home Inspectors.</span>
            </h2>
            <p className="hia-fc-lede">
              Five-page written report covering your GBP, your local
              rankings, your website, and the gaps your competitors are
              exploiting. Delivered within five business days. No sales call
              required to receive it.
            </p>
            <ul className="hia-final-check">
              <li>No long-term contracts — every plan month to month</li>
              <li>Audit delivered as a PDF, not a high-pressure sales meeting</li>
              <li>Strategy call only if you decide it&apos;s worth your time</li>
              <li>Plans built for solo inspectors and multi-inspector firms</li>
              <li>
                Specializing in home inspection across Texas, Florida,
                California &amp; nationwide
              </li>
            </ul>
            <div className="hia-fc-actions">
              <Link href={SITE_CONTACT.phoneHref} className="hia-fc-call">
                Call {SITE_CONTACT.phoneDisplay}
              </Link>
              <HashScrollLink href="#hia-audit" className="hia-fc-form">
                Submit My Free Audit →
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hia-footer">
          <div className="hia-footer-inner">
            <div className="hia-footer-top">
              <div className="hia-footer-brand">
                <Link href="/" className="hia-footer-logo" aria-label="Zonic Media">
                  ZONIC
                </Link>
                <p>
                  Zonic Media is a full-service digital marketing agency for
                  local businesses across the United States. Specializing in
                  local SEO, Google Business Profile optimization, paid
                  advertising, and lead generation for the home services and
                  inspection industry.
                </p>
              </div>
              <div className="hia-footer-links">
                <div className="hia-footer-col">
                  <h5>Services</h5>
                  <Link href="/services/local-seo-for-home-services">
                    Local SEO
                  </Link>
                  <Link href="/services/gmb-reinstatement-help">
                    Google Business Profile
                  </Link>
                  <Link href="/services">Google Ads Management</Link>
                  <Link href="/services">Social Media Marketing</Link>
                  <Link href="/services">Website Design</Link>
                  <Link href="/services">Review Management</Link>
                </div>
                <div className="hia-footer-col">
                  <h5>Industries</h5>
                  <Link href="/services/home-inspector-marketing">
                    Home Inspectors
                  </Link>
                  <Link href="/services/industry/local-seo-for-roofing-companies">
                    Roofing Contractors
                  </Link>
                  <Link href="/services/industry/local-seo-services-for-hvac">
                    HVAC Companies
                  </Link>
                  <Link href="/services/industry/dental-seo-services">
                    Dental Practices
                  </Link>
                  <Link href="/services/industry/pest-control">
                    Pest Control
                  </Link>
                  <Link href="/services/industry/real-estate-seo-services">
                    Real Estate Agents
                  </Link>
                </div>
                <div className="hia-footer-col">
                  <h5>Contact</h5>
                  <Link href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </Link>
                  <Link href={SITE_CONTACT.emailHref}>
                    {SITE_CONTACT.email}
                  </Link>
                  <span>8 The Green, STE B</span>
                  <span>Dover, DE 19901</span>
                </div>
              </div>
            </div>
            <div className="hia-footer-bottom">
              <span>© 2026 Zonic Media LLC. All rights reserved.</span>
              <span>Local SEO · Google Ads · GBP · Web Design · Reviews</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;
