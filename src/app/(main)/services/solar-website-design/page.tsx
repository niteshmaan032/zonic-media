import type { Metadata } from "next";
import "@/app/style/homeImprovementWeb.css";
import HomeImprovementWebLeadForm from "@/app/components/HomeImprovementWebLeadForm";
import ServiceSiteMockup from "@/app/components/ServiceSiteMockup";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import { SITE_CONTACT, SITE_SOCIAL_LINKS } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import {
  FiArrowUpRight,
  FiDollarSign,
  FiFileText,
  FiLayout,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiRefreshCw,
  FiShield,
  FiSun,
  FiZap,
} from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { RiLineChartLine, RiPagesLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/solar-website-design";

export const metadata: Metadata = {
  title: "Solar Website Design That Books Consultations",
  description:
    "Solar website design built as a lead system — savings estimates, instant quote flows, financing UX, and mobile-first design that books consultations and installs.",
  keywords: [
    "solar website design",
    "solar company website design",
    "solar installer website design",
    "solar panel website design",
    "websites for solar companies",
    "solar energy website design",
    "solar web design",
    "solar lead generation website",
    "solar landing page design",
    "solar company web designer",
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
    title: "Solar Website Design That Books Consultations | Zonic Media",
    description:
      "Solar website design built as a lead system — savings estimates, instant quote flows, financing UX, and mobile-first design that books consultations and installs.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Solar Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Solar Website Design",
  serviceType: "Solar Company Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom solar company website design with savings estimate flows, instant quote requests, financing and incentive pages, and service-area pages built to book consultations and installs.",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    url: "https://www.zonicllc.com",
    telephone: "+1-302-726-9736",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green, STE B",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solar Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "New Solar Company Websites" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Solar Website Redesigns" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Savings & Service Landing Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Quote & Consultation Flows",
        },
      },
    ],
  },
};

const SolarWebFaqs = [
  {
    question: "How Much Does Solar Website Design Cost?",
    answer:
      "Pricing depends on the size of the build: number of service and city pages, calculator and quote integrations, financing content, and whether content and photography are included. A focused redesign costs considerably less than a large multi-market build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How Long Does It Take to Design a Solar Website?",
    answer:
      "Most solar websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many service-area pages or custom integrations can take longer.",
  },
  {
    question: "Can My Website Capture Savings-Estimate Leads?",
    answer:
      "Yes — the savings question is what turns a curious visitor into a consultation. We build simple savings-estimate and quote flows that ask a few questions and route the lead straight to your team, so homeowners raise their hand before they leave, instead of comparison-shopping the next installer.",
  },
  {
    question: "Can You Integrate My Solar CRM or Proposal Software?",
    answer:
      "Yes. We connect the tools solar companies already run — Aurora, OpenSolar, Salesforce, or a structured quote request flow that routes straight to your team. Either way, homeowners can request a proposal without waiting for business hours.",
  },
  {
    question: "Can You Redesign My Site Without Losing My Current Rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const solarWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: SolarWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AboutChecks = [
  "Savings-first layouts",
  "Financing & Incentive UX",
  "Quote & consultation flows",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Solar Company Websites",
    desc: (
      <>
        Launching or rebranding? We design your site from sitemap to launch —
        quote flows, savings pages, and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="hiw-inline-link"
        >
          local SEO foundations
        </Link>{" "}
        included from day one.
      </>
    ),
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    title: "Solar Website Redesigns",
    desc: "Dated site that never books consultations? We rebuild it around homeowner conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <FiSun aria-hidden="true" />,
    title: "Savings & Service Landing Pages",
    desc: "Dedicated pages for residential solar, battery storage, and commercial installs — each built around one offer and one action: request a savings estimate.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Quote & Consultation Flows",
    desc: "Aurora, OpenSolar, Salesforce, or a clean quote request flow routed to your team — homeowners book a consultation in a few taps, day or night.",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Financing & Incentive Pages",
    desc: "Loans, leases, and incentive guidance explained in plain English, so financing questions stop killing consultations before they start.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Solar offers designed for" },
  { num: "24/7", label: "Quote requests, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Savings-Estimate Flows",
    desc: "Simple estimate flows that ask a few questions and capture the lead, so curious visitors become booked consultations instead of bouncing.",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Financing & Incentive UX",
    desc: "Loans, leases, and incentives explained clearly up front, so the money question is answered before it becomes an objection.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Consultation Booking",
    desc: "Book-a-consultation flows integrated with the CRM and proposal tools solar companies already use, so no lead waits for business hours.",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "Proof & Trust Pages",
    desc: "Warranties, panel and battery specs, and reviews placed up front, so homeowners trust a five-figure decision to your team.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-First Design",
    desc: "Most homeowners research solar on their phone — every layout starts at 375px, not on a desktop monitor.",
  },
  {
    title: "Click-to-Call & Quote Request",
    desc: "One thumb-tap from any page to a call or a savings estimate, always visible, never buried.",
  },
  {
    title: "Google Reviews Integration",
    desc: "Your best reviews pulled onto the site where cautious homeowners actually read them before a big investment.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a patience factor.",
  },
  {
    title: "Savings & Financing Content",
    desc: "Clear savings and financing pages that answer the questions every solar shopper has before they book.",
  },
  {
    title: "Service Area Pages",
    desc: "A dedicated page for every city and region you install in, built to rank for local solar searches.",
  },
  {
    title: "Local Schema Markup",
    desc: "Structured data that tells Google exactly who you are, where you install, and what you offer.",
  },
  {
    title: "Secure Hosting & SSL",
    desc: "Fast, monitored hosting with daily backups — your site stays online and stays yours.",
  },
];

const ProcessSteps = [
  {
    num: "01",
    title: "Discovery & Offer Mapping",
    desc: "The offers you want more of, the regions you install in, how your team handles leads today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free Homepage Mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your market — before you commit to the full build.",
  },
  {
    num: "03",
    title: "Build, Content & on-Page SEO",
    desc: "Savings pages, quote flows, and service pages — every page written around the searches homeowners use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, Tracking & Growth",
    desc: "Every form tested, every old URL redirected, call and form tracking wired up — then local SEO and GBP work keep the pipeline growing.",
  },
];

const BannerFeats = [
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Conversion-First Design",
    desc: "Every layout decision serves one goal: turning visitors into booked consultations.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Built-in Local SEO",
    desc: "Schema, keyword-mapped pages, and fast Core Web Vitals from day one.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Trust Built In",
    desc: "License, insurance, and warranty proof placed where homeowners look for it.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Growth-Ready Foundation",
    desc: "Every site plugs straight into local SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Solar Web Design",
  "Savings Estimates",
  "Financing Pages",
  "Consultation Booking",
  "Google Reviews",
  "Local SEO",
];

const NationwideChips = [
  "Residential Solar",
  "Commercial Solar",
  "Battery Storage",
  "Panel Installation",
  "Savings Estimates",
  "Financing & Incentives",
  "Multi-Market Installers",
];

const GrowCards = [
  {
    href: "/services/industry/local-seo-for-solar-companies",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local SEO for Solar Companies",
    desc: "Rank for solar installation, battery, and savings searches across Google Search and Maps in every market you cover.",
    cta: "See solar SEO",
  },
  {
    href: "/services/solar-marketing-agency",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Solar Marketing Agency",
    desc: "Ads, SEO, and lead generation built for solar — the full engine that keeps your installers booked.",
    cta: "Explore solar marketing",
  },
  {
    href: "/local-seo-google-business-optimization",
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Many solar shoppers start in the map pack. We optimize your profile so that installer is you.",
    cta: "Optimize your profile",
  },
];

const formVariant = {
  formType: "solar-website-design",
  headline: "Get Your Free Homepage Mockup",
  subcopy:
    "See what your solar company's new website could look like before you spend a dollar — delivered within about a week.",
  namePlaceholder: "Alex Nguyen",
  companyLabel: "Company name",
  companyPlaceholder: "SunPeak Solar",
  cityPlaceholder: "Dover, DE",
  emailPlaceholder: "alex@sunpeaksolar.com",
  messagePlaceholder:
    "Tell us about your company, your current website, or the offers you want more of — residential solar, battery storage, commercial...",
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
          __html: JSON.stringify(solarWebFaqJsonLd),
        }}
      />

      <div className="hiw-page hiw-theme-solar">
        <main>
          {/* 1. Hero */}
          <section className="hiw-hero">
            <div className="hiw-container">
              <div className="hiw-hero-grid">
                <div className="hiw-hero-copy">
                  <p className="hiw-eyebrow">Solar Website Design</p>
                  <h1 className="hiw-hero-h1">
                    Solar Website Design That Turns Visitors into{" "}
                    <span className="hiw-hl">Booked Consultations</span>
                  </h1>
                  <p className="hiw-hero-sub">
                    Zonic Media designs solar websites that work like a lead
                    system — savings estimates, instant quote flows, financing UX,
                    and mobile-first design that books consultations. Our{" "}
                    <Link href="/services/web-design" className="hiw-inline-link">
                      website design services
                    </Link>{" "}
                    are built around booked consultations, not another brochure
                    site.
                  </p>
                  <div className="hiw-hero-ctas">
                    <HashScrollLink
                      href="#hiw-form"
                      className="hiw-btn"
                      offset={120}
                    >
                      Start Your Solar Website
                    </HashScrollLink>
                    <a href={SITE_CONTACT.phoneHref} className="hiw-btn-ghost">
                      <FiPhoneCall aria-hidden="true" />
                      Call {SITE_CONTACT.phoneDisplay}
                    </a>
                  </div>
                  <div className="hiw-hero-stats">
                    <div className="hiw-stat">
                      <p className="hiw-stat-num">50+</p>
                      <p className="hiw-stat-label">
                        Local business sites launched
                      </p>
                    </div>
                    <div className="hiw-stat">
                      <p className="hiw-stat-num">4.9/5</p>
                      <p className="hiw-stat-label">Average client rating</p>
                    </div>
                    <div className="hiw-stat">
                      <p className="hiw-stat-num">1–2 wks</p>
                      <p className="hiw-stat-label">Typical design-to-launch</p>
                    </div>
                  </div>
                </div>

                <div className="hiw-hero-visual">
                  <div className="hiw-hero-img">
                    <Image
                      src="/images/home-improvement-web/solar-hero-v2.webp"
                      alt="Solar technician presenting an installation website beside solar equipment"
                      fill
                      priority
                      sizes="(max-width: 991px) 100vw, 45vw"
                    />
                  </div>
                  <div className="hiw-hero-badge">
                    <span className="hiw-hero-badge-stars" aria-hidden="true">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <p>
                      <strong>Rated 4.9/5</strong>
                      by the businesses we build for
                    </p>
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="hiw-hero-badge-phone"
                      aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
                    >
                      <FiPhoneCall aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. Contact strip (inside hero) */}
              <div className="hiw-strip-inner">
                <div className="hiw-strip-cell hiw-strip-cell-main">
                  <span className="hiw-strip-icon">
                    <FiPhoneCall aria-hidden="true" />
                  </span>
                  <p>
                    <span>Planning a new solar website?</span>
                    <a href={SITE_CONTACT.phoneHref}>
                      {SITE_CONTACT.phoneDisplay}
                    </a>
                  </p>
                </div>
                <div className="hiw-strip-cell">
                  <p>
                    <span>Office hours</span>
                    <strong>Mon–Fri, 9:00 AM – 6:00 PM EST</strong>
                  </p>
                </div>
                <div className="hiw-strip-cell">
                  <p>
                    <span>Response time</span>
                    <strong>Within one business day</strong>
                  </p>
                </div>
                <HashScrollLink
                  href="#hiw-form"
                  className="hiw-btn hiw-strip-cta"
                  offset={120}
                >
                  See what we&apos;d build for you
                  <span className="hiw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </section>

          {/* 3. First impressions */}
          <section className="hiw-about">
            <div className="hiw-container">
              <div className="hiw-about-grid">
                <div className="hiw-collage">
                  <div className="hiw-collage-img-1">
                    <Image
                      src="/images/home-improvement-web/solar-first-impressions-1.webp"
                      alt="Solar installer securely fitting rooftop solar panels"
                      fill
                      sizes="(max-width: 991px) 80vw, 32vw"
                    />
                  </div>
                  <div className="hiw-collage-img-2">
                    <Image
                      src="/images/home-improvement-web/solar-first-impressions-2.webp"
                      alt="SunGrid Energy website displayed on a desktop monitor"
                      fill
                      sizes="(max-width: 991px) 70vw, 30vw"
                    />
                  </div>
                  <div className="hiw-collage-badge" aria-hidden="true">
                    <svg viewBox="0 0 120 120">
                      <defs>
                        <path
                          id="hiwBadgeCircle"
                          d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                        />
                      </defs>
                      <text>
                        <textPath href="#hiwBadgeCircle">
                          Solar Web Design • Zonic Media •
                        </textPath>
                      </text>
                    </svg>
                    <span className="hiw-collage-badge-icon">
                      <FiArrowUpRight />
                    </span>
                  </div>
                </div>
                <div className="hiw-about-copy">
                  <p className="hiw-eyebrow">First Impressions</p>
                  <h2 className="hiw-h2">
                    Your Website is the{" "}
                    <span className="hiw-hl-text">First Estimate</span> a
                    Homeowner Runs on Solar
                  </h2>
                  <p className="hiw-lead">
                    Before a homeowner ever books a consultation, they have
                    already judged your company — on their phone, in about five
                    seconds. They scanned your reviews, looked for a rough idea of
                    savings, and tried to understand financing. If any of that was
                    slow, confusing, or missing, they tapped the next installer on
                    the list.
                  </p>
                  <p className="hiw-lead">
                    Great solar website design closes that gap: it answers the
                    three questions every homeowner has — can I trust you, how
                    much will I save, and how does financing work — and then makes
                    booking a consultation effortless. It is also the foundation
                    of any wider{" "}
                    <Link
                      href="/services/solar-marketing-agency"
                      className="hiw-inline-link"
                    >
                      solar marketing
                    </Link>{" "}
                    program you run.
                  </p>
                  <div className="hiw-checks">
                    {AboutChecks.map((check) => (
                      <div className="hiw-check" key={check}>
                        <FaCircleCheck aria-hidden="true" />
                        {check}
                      </div>
                    ))}
                  </div>
                  <Link href="/about" className="hiw-btn">
                    More About Zonic Media
                    <span className="hiw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 4. What we build — 6 icon cards */}
          <section className="hiw-services" id="hiw-services">
            <div className="hiw-container">
              <div className="hiw-sec-head">
                <div>
                  <p className="hiw-eyebrow">What We Build</p>
                  <h2 className="hiw-h2">
                    Solar Website Design for Every Stage of Your Company
                  </h2>
                </div>
                <Link href="/services" className="hiw-link-arrow">
                  View all services <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
              <div className="hiw-cards">
                {ServiceCards.map((card) => (
                  <article className="hiw-card" key={card.title}>
                    <span className="hiw-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Split band */}
          <section className="hiw-band">
            <div className="hiw-band-grid">
              <div className="hiw-band-content">
                <p className="hiw-eyebrow">Every Offer Type</p>
                <h2 className="hiw-h2">
                  Web Design for Every Kind of Solar Offer
                </h2>
                <p className="hiw-lead">
                  Residential solar, commercial installs, battery storage, and
                  panel upgrades — we design around your offers, your markets, and
                  the way homeowners actually shop for solar. Your site should
                  feel like your company, not like a template every competitor is
                  also using — and it should be built to rank with{" "}
                  <Link
                    href="/services/industry/local-seo-for-solar-companies"
                    className="hiw-inline-link"
                  >
                    local SEO for solar companies
                  </Link>{" "}
                  from day one.
                </p>
                <div className="hiw-band-stats">
                  {BandStats.map((stat) => (
                    <div className="hiw-band-stat" key={stat.num}>
                      <strong>{stat.num}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <HashScrollLink href="#hiw-form" className="hiw-btn" offset={120}>
                  Get a Custom Design Plan
                  <span className="hiw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
              <div className="hiw-band-media">
                <Image
                  src="/images/home-improvement-web/solar-responsive-preview-square.webp"
                  alt="SunGrid Energy website displayed on a desktop monitor and tablet"
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>

          {/* 6. Lead system */}
          <section className="hiw-system">
            <div className="hiw-container">
              <div className="hiw-sec-head-center">
                <p className="hiw-eyebrow">The Lead System</p>
                <h2 className="hiw-h2">
                  More Than a Brochure — A System Built to Book Consultations
                </h2>
                <p className="hiw-lead">
                  Most solar websites are digital business cards: a stock photo of
                  panels, a list of benefits, a contact form nobody fills out. We
                  design every site as a working system, where each page has one
                  job — moving a homeowner closer to a booked consultation.
                </p>
              </div>
              <div className="hiw-feat-cards">
                {SystemCards.map((card) => (
                  <article className="hiw-feat-card" key={card.title}>
                    <span className="hiw-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Anatomy checklist */}
          <section className="hiw-anatomy">
            <div className="hiw-container">
              <div className="hiw-anatomy-grid">
                <div>
                  <p className="hiw-eyebrow">Built Into Every Site</p>
                  <h2 className="hiw-h2">
                    The Anatomy of a High-Converting Solar Website
                  </h2>
                  <p className="hiw-lead">
                    The best solar website design is not about decoration — it is
                    a checklist of things homeowners and search engines both
                    expect. Every website we ship includes all eight, as standard,
                    not as upsells.
                  </p>
                  <p className="hiw-lead">
                    Miss any one of them and you leak consultations: slow pages
                    lose mobile visitors, missing savings content loses the
                    shopper, and a site without service area pages loses every
                    market to the installer who built them.
                  </p>
                  <div className="hiw-anatomy-cta">
                    <HashScrollLink
                      href="#hiw-form"
                      className="hiw-btn"
                      offset={120}
                    >
                      Get Every Feature, Standard
                      <span className="hiw-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                  </div>
                </div>
                <div className="hiw-anatomy-list">
                  {AnatomyItems.map((item) => (
                    <div className="hiw-anatomy-item" key={item.title}>
                      <FaCircleCheck aria-hidden="true" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 8. Why choose us */}
          <section className="hiw-why">
            <div className="hiw-container">
              <div className="hiw-sec-head-center">
                <p className="hiw-eyebrow">Why Zonic Media</p>
                <h2 className="hiw-h2">Designed to Convert. Built to Rank.</h2>
                <p className="hiw-lead">
                  A beautiful website that nobody finds is as useless as a
                  ranking site that nobody trusts. We build both halves at once,
                  so design and search work together from the first wireframe.
                </p>
              </div>
              <div className="hiw-why-cards">
                <article className="hiw-why-card">
                  <span className="hiw-why-card-icon">
                    <RiSearchLine aria-hidden="true" />
                  </span>
                  <h3>A Local SEO Foundation, Not an Afterthought</h3>
                  <p>
                    Schema markup, keyword-mapped pages, and a structure that
                    plugs straight into{" "}
                    <Link
                      href="/services/google-ads"
                      className="hiw-inline-link"
                    >
                      Google Ads management
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/local-seo-google-business-optimization"
                      className="hiw-inline-link"
                    >
                      Google Business Profile optimization
                    </Link>{" "}
                    when you are ready to grow.
                  </p>
                </article>
                <article className="hiw-why-card">
                  <span className="hiw-why-card-icon">
                    <FiZap aria-hidden="true" />
                  </span>
                  <h3>Fast on the Phones Homeowners Actually Use</h3>
                  <p>
                    Mobile-first layouts and Core Web Vitals-friendly builds,
                    because most solar research happens on a phone, on the couch,
                    next to last month&apos;s power bill.
                  </p>
                </article>
                <article className="hiw-why-card">
                  <span className="hiw-why-card-icon">
                    <FiShield aria-hidden="true" />
                  </span>
                  <h3>Trust Signals Where Homeowners Look for Them</h3>
                  <p>
                    Warranties, certifications, panel and battery specs, and
                    reviews placed in the layout — not buried on an about page
                    nobody reads.
                  </p>
                </article>
              </div>
              <div className="hiw-why-banner">
                <div className="hiw-why-banner-text">
                  <p className="hiw-eyebrow">Free Strategy Call</p>
                  <h3>Not Sure What Your Company Actually Needs?</h3>
                  <p>
                    Tell us your goals and we&apos;ll map the exact pages, quote
                    flows, and local SEO foundations your site needs — no
                    obligation, and no sales script.
                  </p>
                </div>
                <div className="hiw-why-banner-actions">
                  <HashScrollLink
                    href="#hiw-form"
                    className="hiw-btn"
                    offset={120}
                  >
                    Book a Free Strategy Call
                    <span className="hiw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
            </div>
          </section>

          {/* 9. How it works — steps */}
          <section className="hiw-process" id="hiw-process">
            <div className="hiw-container">
              <div className="hiw-sec-head">
                <div>
                  <p className="hiw-eyebrow">How It Works</p>
                  <h2 className="hiw-h2">
                    From First Call to Launch in Four Steps
                  </h2>
                </div>
                <HashScrollLink
                  href="#hiw-form"
                  className="hiw-link-arrow"
                  offset={120}
                >
                  Start with step one <FiArrowUpRight aria-hidden="true" />
                </HashScrollLink>
              </div>
              <div className="hiw-steps">
                {ProcessSteps.map((step) => (
                  <div className="hiw-step" key={step.num}>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <span className="hiw-step-num" aria-hidden="true">
                      {step.num}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 10. Banner (full width) */}
          <section className="hiw-banner">
            <div className="hiw-banner-grid">
              <div className="hiw-banner-copy">
                <p className="hiw-eyebrow">Why Solar Pros Choose Us</p>
                <h2 className="hiw-h2">Savings Customers Can See</h2>
                <p className="hiw-lead">
                  A website built by a team that understands how homeowners shop
                  for solar — and what makes them book a consultation instead of
                  keep scrolling. If the project touches ads, content, or profile
                  work, our{" "}
                  <Link href="/services" className="hiw-inline-link">
                    full-service marketing
                  </Link>{" "}
                  team can keep the whole system aligned.
                </p>
                <Link href="/contact-us" className="hiw-btn">
                  Contact Us
                  <span className="hiw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              </div>
              <div className="hiw-banner-media">
                <ServiceSiteMockup
                  prefix="hiw"
                  brand="SunPeak Solar"
                  url="sunpeaksolar.com"
                  headline="Cut your power bill with solar."
                  primaryCta="Get a Free Quote"
                  chips={["Residential", "Battery", "Financing"]}
                  toastTitle="New consultation request"
                />
              </div>
              <div className="hiw-banner-feats">
                {BannerFeats.map((feat) => (
                  <div className="hiw-banner-feat" key={feat.title}>
                    <span className="hiw-banner-feat-icon">{feat.icon}</span>
                    <div>
                      <h3>{feat.title}</h3>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 11. Marquee */}
          <div className="hiw-marquee" aria-hidden="true">
            <div className="hiw-marquee-track">
              {[0, 1].map((copy) => (
                <span className="hiw-marquee-item" key={copy}>
                  {MarqueeItems.map((item) => (
                    <span className="hiw-marquee-item" key={item}>
                      {item} <FaStar aria-hidden="true" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* 12. Nationwide */}
          <section className="hiw-nationwide">
            <div className="hiw-container">
              <div className="hiw-sec-head-center">
                <p className="hiw-eyebrow">Wherever You Install</p>
                <h2 className="hiw-h2">
                  Solar Website Design Across the United States
                </h2>
                <p className="hiw-lead">
                  From regional installers to multi-market solar companies, Zonic
                  Media designs solar websites for businesses in every state.
                  Because everything happens remotely — discovery calls, design
                  reviews, launch — you get the same process whether you install
                  in California, Texas, or Florida.
                </p>
              </div>
              <div className="hiw-chips">
                {NationwideChips.map((chip) => (
                  <span className="hiw-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <div className="hiw-nationwide-cta">
                <HashScrollLink href="#hiw-form" className="hiw-btn" offset={120}>
                  Request Your Free Mockup
                  <span className="hiw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </section>

          {/* 13. FAQs */}
          <section className="hiw-faqs" id="hiw-faqs">
            <div className="hiw-container">
              <div className="hiw-split-grid">
                <div>
                  <p className="hiw-eyebrow">FAQs</p>
                  <h2 className="hiw-h2">
                    Everything Solar Pros Ask Us About Website Design
                  </h2>
                  <p className="hiw-lead">
                    Straight answers on pricing, timelines, savings-estimate
                    leads, and what happens to your current rankings. If your question is not here,
                    or you need{" "}
                    <Link
                      href="/services/gmb-reinstatement-help"
                      className="hiw-inline-link"
                    >
                      Google Business Profile reinstatement
                    </Link>{" "}
                    for a suspended listing, send it through the form — a strategist
                    answers, not a sales script.
                  </p>
                  <div className="hiw-faq-cta">
                    <HashScrollLink
                      href="#hiw-form"
                      className="hiw-btn"
                      offset={120}
                    >
                      Ask About Your Project
                      <span className="hiw-btn-circ">
                        <FiArrowUpRight aria-hidden="true" />
                      </span>
                    </HashScrollLink>
                  </div>
                </div>
                <div>
                  <GmbFaqs items={SolarWebFaqs} />
                </div>
              </div>
            </div>
          </section>

          {/* 14. Grow further — internal links */}
          <section className="hiw-grow">
            <div className="hiw-container">
              <div className="hiw-sec-head-center">
                <p className="hiw-eyebrow">Grow Further</p>
                <h2 className="hiw-h2">
                  Your Website is Step One. Here is What Fills It with Leads.
                </h2>
              </div>
              <div className="hiw-grow-cards">
                {GrowCards.map((card) => (
                  <Link
                    href={card.href}
                    className="hiw-grow-card"
                    key={card.href}
                  >
                    <span className="hiw-card-icon">{card.icon}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <span className="hiw-grow-link">
                      {card.cta} <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 15. Lead form */}
          <section className="hiw-form-sec" id="hiw-form">
            <div className="hiw-container">
              <div className="hiw-form-grid">
                <aside className="hiw-form-aside">
                  <p className="hiw-eyebrow">Get Started</p>
                  <h2 className="hiw-h2">
                    Book Your Free Solar Website Consult
                  </h2>
                  <p className="hiw-lead">
                    Tell us about your company and we will send a custom homepage
                    mockup plus a flat-price quote — free, and yours to keep
                    either way.
                  </p>

                  <div className="hiw-form-contacts">
                    <a
                      href={SITE_CONTACT.emailHref}
                      className="hiw-form-contact"
                    >
                      <span className="hiw-form-contact-icon">
                        <FiMail aria-hidden="true" />
                      </span>
                      <span className="hiw-form-contact-txt">
                        <small>Email us anytime</small>
                        <strong>{SITE_CONTACT.email}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.phoneHref}
                      className="hiw-form-contact"
                    >
                      <span className="hiw-form-contact-icon">
                        <FiPhoneCall aria-hidden="true" />
                      </span>
                      <span className="hiw-form-contact-txt">
                        <small>Speak with a strategist</small>
                        <strong>{SITE_CONTACT.phoneDisplay}</strong>
                      </span>
                    </a>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hiw-form-contact"
                    >
                      <span className="hiw-form-contact-icon">
                        <FiMapPin aria-hidden="true" />
                      </span>
                      <span className="hiw-form-contact-txt">
                        <small>Visit our office</small>
                        <strong>{SITE_CONTACT.address}</strong>
                      </span>
                    </a>
                  </div>
                </aside>
                <div className="hiw-form-main">
                  <HomeImprovementWebLeadForm variant={formVariant} />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* 16. Page footer */}
        <footer className="hiw-footer">
          <div className="hiw-container">
            <div className="hiw-footer-grid">
              <div className="hiw-footer-brand">
                <Link href="/" aria-label="Zonic Media — home">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={160}
                    height={44}
                  />
                </Link>
                <p>
                  Zonic Media is a digital growth agency helping solar companies
                  turn website visitors into booked consultations.
                </p>
                <div className="hiw-footer-social">
                  {SITE_SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hiw-footer-col">
                <h3>On This Page</h3>
                <ul>
                  <li>
                    <HashScrollLink href="#hiw-services" offset={96}>
                      What We Build
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#hiw-process" offset={96}>
                      How It Works
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#hiw-faqs" offset={96}>
                      FAQs
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#hiw-form" offset={120}>
                      Free Mockup
                    </HashScrollLink>
                  </li>
                </ul>
              </div>

              <div className="hiw-footer-col">
                <h3>Explore Zonic</h3>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">All Services</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="hiw-footer-col">
                <h3>Talk to Us</h3>
                <ul className="hiw-footer-contact">
                  <li>
                    <a href={SITE_CONTACT.phoneHref}>
                      <FiPhoneCall aria-hidden="true" />
                      {SITE_CONTACT.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={SITE_CONTACT.emailHref}>
                      <FiMail aria-hidden="true" />
                      {SITE_CONTACT.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiMapPin aria-hidden="true" />
                      {SITE_CONTACT.address}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hiw-footer-bottom">
              <p>
                © {new Date().getFullYear()} Zonic Media LLC. All rights
                reserved.
              </p>
              <div className="hiw-footer-legal">
                <Link href="/legal/privacy-policy">Privacy Policy</Link>
                <Link href="/legal/terms-conditions">
                  Terms &amp; Conditions
                </Link>
                <Link href="/legal/refund-policy">Refund Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;
