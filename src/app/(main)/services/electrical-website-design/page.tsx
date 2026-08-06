import type { Metadata } from "next";
import "@/app/style/electricalWeb.css";
import ElectricalWebLeadForm from "@/app/components/ElectricalWebLeadForm";
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
  FiBatteryCharging,
  FiLayout,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiRefreshCw,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/electrical-website-design";

export const metadata: Metadata = {
  title: "Electrician Website Design That Books Jobs",
  description:
    "Electrician website design built as a job acquisition system — EV charger and panel upgrade landing pages, online booking, and license-first trust signals.",
  keywords: [
    "electrician website design",
    "electrical contractor website design",
    "electrician web design",
    "electrical company website design",
    "websites for electricians",
    "electrician website redesign",
    "EV charger installation landing page",
    "licensed electrician website",
    "electrician lead generation website",
    "electrical contractor web designer",
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
    title: "Electrician Website Design That Books Jobs | Zonic Media",
    description:
      "Electrician website design built as a job acquisition system — EV charger and panel upgrade landing pages, online booking, and license-first trust signals.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Electrical Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Website Design",
  serviceType: "Electrical Contractor Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom electrical contractor website design with EV charger and panel upgrade landing pages, online booking integration, license-first trust signals, and emergency call UX.",
  provider: {
    "@type": "LocalBusiness",
    name: "Zonic Media",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Electrical Company Websites",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Electrician Website Redesigns" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EV Charger & Service Landing Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Online Booking Integration",
        },
      },
    ],
  },
};

const ElectricalWebFaqs = [
  {
    question: "How Much Does Electrician Website Design Cost?",
    answer:
      "Pricing depends on the size of the build: number of service and city pages, booking and financing integrations, and whether content and photography are included. A focused redesign costs considerably less than a large multi-crew build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How Long Does It Take to Design an Electrician Website?",
    answer:
      "Most electrical contractor websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many service-area pages or custom integrations can take longer.",
  },
  {
    question: "Can My Website Capture EV Charger Installation Leads?",
    answer:
      "Yes — EV charger installation is one of the fastest-growing electrical searches, and most contractors still have no page for it. We build a dedicated landing page for home and commercial charger installs, wired for the searches homeowners actually type, plus pages for panel upgrades and generator installs — the big-ticket work that pays for the site many times over.",
  },
  {
    question: "Can You Integrate My Field Service Software?",
    answer:
      "Yes. We integrate the tools electrical contractors already run — ServiceTitan, Housecall Pro, Jobber — or build a structured booking request flow that routes straight to your office. Either way, homeowners can book a service call without waiting for business hours.",
  },
  {
    question: "Can You Redesign My Site Without Losing My Current Rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const electricalWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: ElectricalWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AboutChecks = [
  "License-first trust layout",
  "EV charger landing pages",
  "24/7 emergency call UX",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Electrical Company Websites",
    desc: (
      <>
        Launching or rebranding? We design your site from sitemap to launch —
        booking flows, service pages, and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="ew-inline-link"
        >
          local SEO foundations
        </Link>{" "}
        included from day one.
      </>
    ),
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    title: "Electrician Website Redesigns",
    desc: "Outdated site that never rings the phone? We rebuild it around homeowner conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <FiBatteryCharging aria-hidden="true" />,
    title: "EV Charger & Service Landing Pages",
    desc: "Dedicated pages for EV charger installs, panel upgrades, generators, and rewiring — each built around a single job type and a single action: book.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Booking Integration",
    desc: "ServiceTitan, Housecall Pro, Jobber, or a clean booking request flow routed to your office — homeowners book a service call in a few taps, day or night.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "License & Trust Pages",
    desc: "Homeowners search “licensed electrician” more than any other trade. We put your license, insurance, and certifications where they close the sale.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Electrical service lines designed for" },
  { num: "24/7", label: "Online booking, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <FiBatteryCharging aria-hidden="true" />,
    title: "EV & Upgrade Landing Pages",
    desc: "EV chargers, panel upgrades, generators — the big-ticket searches get dedicated pages built to rank and convert.",
  },
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    title: "Emergency Call UX",
    desc: "A no-power-at-9-PM visitor decides in seconds. Click-to-call and emergency CTAs stay one thumb-tap away on every page.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Booking Flows",
    desc: "Homeowners book or request a service call in a few taps — integrated with the field service tools electricians already use.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "License-First Trust Signals",
    desc: "License numbers, insurance, and certifications placed where cautious homeowners look before letting anyone near the panel.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-First Design",
    desc: "Most homeowners search for an electrician on their phone — every layout starts at 375px, not on a desktop monitor.",
  },
  {
    title: "Click-to-Call & Tap-to-Book",
    desc: "One thumb-tap from any page to a call or a booking request, always visible, never buried.",
  },
  {
    title: "Google Reviews Integration",
    desc: "Your best reviews pulled onto the site where cautious homeowners actually read them.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a patience factor.",
  },
  {
    title: "Service Area Pages",
    desc: "A dedicated page for every city and suburb you serve, built to rank for local electrician searches.",
  },
  {
    title: "Problem-Based Content",
    desc: "Pages for “breaker keeps tripping” and “flickering lights” that catch homeowners while they research.",
  },
  {
    title: "Local Schema Markup",
    desc: "Structured data that tells Google exactly who you are, where you work, and what you install.",
  },
  {
    title: "Secure Hosting & SSL",
    desc: "Fast, monitored hosting with daily backups — your site stays online and stays yours.",
  },
];

const ProcessSteps = [
  {
    num: "01",
    title: "Discovery & Job Mix Mapping",
    desc: "The jobs you want more of, the cities you serve, how your office books today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free Homepage Mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your market — before you commit to the full project.",
  },
  {
    num: "03",
    title: "Build, Content & on-Page SEO",
    desc: "Service pages, booking integration, and EV charger landing pages — every page written around the searches homeowners use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, Tracking & Growth",
    desc: "Every form tested, every old URL redirected, call and form tracking wired up — then electrician SEO and GBP services keep the pipeline growing.",
  },
];

const BannerFeats = [
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Conversion-First Design",
    desc: "Every layout decision serves one goal: turning visitors into booked jobs.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Built-in Local SEO",
    desc: "Schema, keyword-mapped pages, and fast Core Web Vitals from day one.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "License-First Trust",
    desc: "Credentials and insurance proof placed where homeowners look for them.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Growth-Ready Foundation",
    desc: "Every site plugs straight into electrician SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Electrician Website Design",
  "EV Charger Pages",
  "Panel Upgrades",
  "Online Booking",
  "Emergency Call UX",
  "Local SEO",
];

const NationwideChips = [
  "Panel Upgrades",
  "EV Charger Installation",
  "Generator Installs",
  "Rewiring & Remodels",
  "Lighting & Smart Home",
  "Commercial Electrical",
  "Multi-Crew Companies",
];

const GrowCards = [
  {
    href: "/services/electrician-marketing-agency",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Electrician Marketing Agency",
    desc: "Ads, SEO, and lead generation built for electrical contractors — the full engine that keeps your crews on the calendar.",
    cta: "Explore electrician marketing",
  },
  {
    href: "/services/local-seo-for-home-services",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local SEO for Home Services",
    desc: "Rank for panel upgrade and emergency electrician searches across Google Search and Maps in every city you serve.",
    cta: "See local SEO",
  },
  {
    href: "/services/gmb-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most homeowners pick an electrician straight from the map pack. We optimize your profile so that electrician is you.",
    cta: "Optimize your profile",
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
          __html: JSON.stringify(electricalWebFaqJsonLd),
        }}
      />

      <div className="ew-page">
        <main>
        {/* 1. Hero */}
        <section className="ew-hero">
          <div className="ew-container">
            <div className="ew-hero-grid">
              <div className="ew-hero-copy">
                <p className="ew-eyebrow">Electrician Website Design</p>
                <h1 className="ew-hero-h1">
                  Electrician Website Design That Turns Searches into{" "}
                  <span className="ew-hl">Booked Jobs</span>
                </h1>
                <p className="ew-hero-sub">
                  Zonic Media designs electrical contractor websites that work
                  like a job acquisition system — EV charger and panel upgrade
                  landing pages, online booking, license-first trust signals,
                  and 24/7 emergency CTAs. Our{" "}
                  <Link href="/services/web-design" className="ew-inline-link">
                    website design services
                  </Link>{" "}
                  are built around booked jobs, not another brochure site.
                </p>
                <div className="ew-hero-ctas">
                  <HashScrollLink
                    href="#electrical-web-form"
                    className="ew-btn"
                    offset={120}
                  >
                    Start Your Electrician Website
                  </HashScrollLink>
                  <a href={SITE_CONTACT.phoneHref} className="ew-btn-ghost">
                    <FiPhoneCall aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="ew-hero-stats">
                  <div className="ew-stat">
                    <p className="ew-stat-num">50+</p>
                    <p className="ew-stat-label">
                      Local business sites launched
                    </p>
                  </div>
                  <div className="ew-stat">
                    <p className="ew-stat-num">4.9/5</p>
                    <p className="ew-stat-label">Average client rating</p>
                  </div>
                  <div className="ew-stat">
                    <p className="ew-stat-num">1–2 wks</p>
                    <p className="ew-stat-label">Typical design-to-launch</p>
                  </div>
                </div>
              </div>

              <div className="ew-hero-visual">
                <div className="ew-hero-img">
                  <Image
                    src="/images/electrical-web/hero-image-primary-v2.webp"
                    alt="Electrician reviewing an electrical company website on a laptop in his workshop"
                    fill
                    priority
                    sizes="(max-width: 991px) 100vw, 45vw"
                  />
                </div>
                <div className="ew-hero-badge">
                  <span className="ew-hero-badge-stars" aria-hidden="true">
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
                    className="ew-hero-badge-phone"
                    aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
                  >
                    <FiPhoneCall aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Contact strip (inside hero) */}
            <div className="ew-strip-inner">
              <div className="ew-strip-cell ew-strip-cell-main">
                <span className="ew-strip-icon">
                  <FiPhoneCall aria-hidden="true" />
                </span>
                <p>
                  <span>Planning a new electrician website?</span>
                  <a href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
              <div className="ew-strip-cell">
                <p>
                  <span>Office hours</span>
                  <strong>Mon–Fri, 9:00 AM – 6:00 PM EST</strong>
                </p>
              </div>
              <div className="ew-strip-cell">
                <p>
                  <span>Response time</span>
                  <strong>Within one business day</strong>
                </p>
              </div>
              <HashScrollLink
                href="#electrical-web-form"
                className="ew-btn ew-strip-cta"
                offset={120}
              >
                See what we&apos;d build for you
                <span className="ew-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 3. First impressions */}
        <section className="ew-about">
          <div className="ew-container">
            <div className="ew-about-grid">
              <div className="ew-collage">
                <div className="ew-collage-img-1">
                  <Image
                    src="/images/electrical-web/first-impressions-img-1.webp"
                    alt="Electrician installing and labeling a modern residential electrical panel"
                    fill
                    sizes="(max-width: 991px) 80vw, 32vw"
                  />
                </div>
                <div className="ew-collage-img-2">
                  <Image
                    src="/images/electrical-web/first-impressions-img-2.webp"
                    alt="Electrical company website displayed on a desktop monitor"
                    fill
                    sizes="(max-width: 991px) 70vw, 30vw"
                  />
                </div>
                <div className="ew-collage-badge" aria-hidden="true">
                  <svg viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="ewBadgeCircle"
                        d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#ewBadgeCircle">
                        Electrician Web Design • Zonic Media •
                      </textPath>
                    </text>
                  </svg>
                  <span className="ew-collage-badge-icon">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
              <div className="ew-about-copy">
                <p className="ew-eyebrow">First Impressions</p>
                <h2 className="ew-h2">
                  Homeowners Run a{" "}
                  <span className="ew-hl-text">Background Check</span> Before
                  They Let You Near the Panel
                </h2>
                <p className="ew-lead">
                  Electrical work is the trade homeowners trust least to
                  strangers — “licensed electrician” is searched more than any
                  other contractor credential. Before anyone calls, they have
                  checked your reviews, looked for your license, and scanned
                  your work photos on their phone. If any of that was slow,
                  confusing, or missing, they moved to the next name on the
                  list.
                </p>
                <p className="ew-lead">
                  Great electrician website design closes that gap: it answers
                  the three questions every homeowner has — are you licensed,
                  do you serve my area, and how fast can you come — and then
                  makes booking effortless. It is also the foundation of any
                  wider{" "}
                  <Link
                    href="/services/electrician-marketing-agency"
                    className="ew-inline-link"
                  >
                    electrician marketing
                  </Link>{" "}
                  program you run.
                </p>
                <div className="ew-checks">
                  {AboutChecks.map((check) => (
                    <div className="ew-check" key={check}>
                      <FaCircleCheck aria-hidden="true" />
                      {check}
                    </div>
                  ))}
                </div>
                <Link href="/about" className="ew-btn">
                  More About Zonic Media
                  <span className="ew-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What we build — 6 icon cards */}
        <section className="ew-services" id="ew-services">
          <div className="ew-container">
            <div className="ew-sec-head">
              <div>
                <p className="ew-eyebrow">What We Build</p>
                <h2 className="ew-h2">
                  Electrician Website Design for Every Stage of Your Company
                </h2>
              </div>
              <Link href="/services" className="ew-link-arrow">
                View all services <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className="ew-cards">
              {ServiceCards.map((card) => (
                <article className="ew-card" key={card.title}>
                  <span className="ew-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Split band */}
        <section className="ew-band">
          <div className="ew-band-grid">
            <div className="ew-band-content">
              <p className="ew-eyebrow">Every Service Line</p>
              <h2 className="ew-h2">
                Web Design for Every Kind of Electrical Work
              </h2>
              <p className="ew-lead">
                Panel upgrades, EV charger installs, generators, rewiring,
                lighting, and commercial contracts — we design around your
                job mix, your service area, and the way homeowners in your
                market actually search. Your site should feel like your
                company, not like a template every competitor is also using —
                and it should be built to rank, with a{" "}
                <Link
                  href="/services/gmb-verification-help"
                  className="ew-inline-link"
                >
                  verified Business Profile
                </Link>{" "}
                supporting it from day one.
              </p>
              <div className="ew-band-stats">
                {BandStats.map((stat) => (
                  <div className="ew-band-stat" key={stat.num}>
                    <strong>{stat.num}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <HashScrollLink
                href="#electrical-web-form"
                className="ew-btn"
                offset={120}
              >
                Get a Custom Design Plan
                <span className="ew-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
            <div className="ew-band-media">
              <Image
                src="/images/electrical-web/every-service-line-image.webp"
                alt="Responsive electrician website design shown across desktop and tablet"
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* 6. Job acquisition system */}
        <section className="ew-system">
          <div className="ew-container">
            <div className="ew-sec-head-center">
              <p className="ew-eyebrow">The Job Acquisition System</p>
              <h2 className="ew-h2">
                More Than a Brochure — A System Built to Book Jobs
              </h2>
              <p className="ew-lead">
                Most electrician websites are digital business cards: a stock
                photo of a hard hat, a list of services, a contact form nobody
                fills out. We design every site as a working system, where
                each page has one job — moving a homeowner closer to a booked
                appointment.
              </p>
            </div>
            <div className="ew-feat-cards">
              {SystemCards.map((card) => (
                <article className="ew-feat-card" key={card.title}>
                  <span className="ew-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Anatomy of a high-converting electrician website */}
        <section className="ew-anatomy">
          <div className="ew-container">
            <div className="ew-anatomy-grid">
              <div>
                <p className="ew-eyebrow">Built Into Every Site</p>
                <h2 className="ew-h2">
                  The Anatomy of a High-Converting Electrician Website
                </h2>
                <p className="ew-lead">
                  The best electrician website design is not about decoration
                  — it is a checklist of things homeowners and search engines
                  both expect. Every website we ship includes all eight, as
                  standard, not as upsells.
                </p>
                <p className="ew-lead">
                  Miss any one of them and you leak jobs: slow pages lose
                  mobile visitors, a missing license number loses trust, and
                  a site without an EV charger page loses the fastest-growing
                  searches to the contractor who built one.
                </p>
                <div className="ew-anatomy-cta">
                  <HashScrollLink
                    href="#electrical-web-form"
                    className="ew-btn"
                    offset={120}
                  >
                    Get Every Feature, Standard
                    <span className="ew-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div className="ew-anatomy-list">
                {AnatomyItems.map((item) => (
                  <div className="ew-anatomy-item" key={item.title}>
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
        <section className="ew-why">
          <div className="ew-container">
            <div className="ew-sec-head-center">
              <p className="ew-eyebrow">Why Zonic Media</p>
              <h2 className="ew-h2">Designed to Convert. Built to Rank.</h2>
              <p className="ew-lead">
                A beautiful website that nobody finds is as useless as a
                ranking site that nobody trusts. We build both halves at
                once, so design and search work together from the first
                wireframe.
              </p>
            </div>
            <div className="ew-why-cards">
              <article className="ew-why-card">
                <span className="ew-why-card-icon">
                  <RiSearchLine aria-hidden="true" />
                </span>
                <h3>A Local SEO Foundation, Not an Afterthought</h3>
                <p>
                  Schema markup, keyword-mapped pages, and a structure that
                  plugs straight into{" "}
                  <Link
                    href="/services/google-ads"
                    className="ew-inline-link"
                  >
                    pay-per-click campaigns
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="ew-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  when you are ready to grow.
                </p>
              </article>
              <article className="ew-why-card">
                <span className="ew-why-card-icon">
                  <FiBatteryCharging aria-hidden="true" />
                </span>
                <h3>Built for Where the Trade is Going</h3>
                <p>
                  EV chargers, panel upgrades for electrified homes, battery
                  and generator installs — your site is structured to catch
                  the searches growing fastest, not just the ones from five
                  years ago.
                </p>
              </article>
              <article className="ew-why-card">
                <span className="ew-why-card-icon">
                  <FiShield aria-hidden="true" />
                </span>
                <h3>License-First Trust, Everywhere</h3>
                <p>
                  License numbers, insurance proof, and certifications placed
                  in the layout — not buried on an about page nobody reads —
                  because that is the first thing homeowners verify.
                </p>
              </article>
            </div>
            <div className="ew-why-banner">
              <div className="ew-why-banner-text">
                <p className="ew-eyebrow">Free Strategy Call</p>
                <h3>Not Sure What Your Company Actually Needs?</h3>
                <p>
                  Tell us your goals and we&apos;ll map the exact pages,
                  booking flows, and local SEO foundations your site needs —
                  no obligation, and no sales script.
                </p>
              </div>
              <div className="ew-why-banner-actions">
                <HashScrollLink
                  href="#electrical-web-form"
                  className="ew-btn"
                  offset={120}
                >
                  Book a Free Strategy Call
                  <span className="ew-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </div>
        </section>

        {/* 9. How it works — steps */}
        <section className="ew-process" id="ew-process">
          <div className="ew-container">
            <div className="ew-sec-head">
              <div>
                <p className="ew-eyebrow">How It Works</p>
                <h2 className="ew-h2">
                  From First Call to Launch in Four Steps
                </h2>
              </div>
              <HashScrollLink
                href="#electrical-web-form"
                className="ew-link-arrow"
                offset={120}
              >
                Start with step one <FiArrowUpRight aria-hidden="true" />
              </HashScrollLink>
            </div>
            <div className="ew-steps">
              {ProcessSteps.map((step) => (
                <div className="ew-step" key={step.num}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <span className="ew-step-num" aria-hidden="true">
                    {step.num}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Banner (full width) */}
        <section className="ew-banner">
          <div className="ew-banner-grid">
            <div className="ew-banner-copy">
              <p className="ew-eyebrow">Why Electricians Choose Us</p>
              <h2 className="ew-h2">Craftsmanship Customers Can See</h2>
              <p className="ew-lead">
                A website built by a team that understands how homeowners
                choose an electrician — and what makes them book instead of
                keep scrolling. If the project touches ads, content, or
                profile work, our{" "}
                <Link href="/services" className="ew-inline-link">
                  full-service marketing
                </Link>{" "}
                team can keep the whole system aligned.
              </p>
              <Link href="/contact-us" className="ew-btn">
                Contact Us
                <span className="ew-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </div>
            <div className="ew-banner-media">
              <ServiceSiteMockup
                prefix="ew"
                brand="Voltix Electric"
                url="voltixelectric.com"
                headline="Licensed electricians on call."
                primaryCta="Get a Free Quote"
                chips={["Panels", "Rewiring", "EV Chargers"]}
                toastTitle="New quote request"
              />
            </div>
            <div className="ew-banner-feats">
              {BannerFeats.map((feat) => (
                <div className="ew-banner-feat" key={feat.title}>
                  <span className="ew-banner-feat-icon">{feat.icon}</span>
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
        <div className="ew-marquee" aria-hidden="true">
          <div className="ew-marquee-track">
            {[0, 1].map((copy) => (
              <span className="ew-marquee-item" key={copy}>
                {MarqueeItems.map((item) => (
                  <span className="ew-marquee-item" key={item}>
                    {item} <FaStar aria-hidden="true" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* 12. Nationwide */}
        <section className="ew-nationwide">
          <div className="ew-container">
            <div className="ew-sec-head-center">
              <p className="ew-eyebrow">Wherever You Work</p>
              <h2 className="ew-h2">
                Electrician Website Design Services Across the United States
              </h2>
              <p className="ew-lead">
                From single-van startups to multi-crew contractors, Zonic
                Media designs electrician websites for companies in every
                state. Because everything happens remotely — discovery calls,
                design reviews, launch — you get the same process whether you
                work in Delaware, Georgia, or Washington.
              </p>
            </div>
            <div className="ew-chips">
              {NationwideChips.map((chip) => (
                <span className="ew-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="ew-nationwide-cta">
              <HashScrollLink
                href="#electrical-web-form"
                className="ew-btn"
                offset={120}
              >
                Request Your Free Mockup
                <span className="ew-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 13. FAQs */}
        <section className="ew-faqs" id="ew-faqs">
          <div className="ew-container">
            <div className="ew-split-grid">
              <div>
                <p className="ew-eyebrow">FAQs</p>
                <h2 className="ew-h2">
                  Everything Electricians Ask Us About Website Design
                </h2>
                <p className="ew-lead">
                  Straight answers on pricing, timelines, EV charger pages,
                  and what happens to your current rankings. If your question
                  is not here, or you need{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="ew-inline-link"
                  >
                    suspended profile reinstatement
                  </Link>{" "}
                  for your Google listing, send it through the form — a strategist
                  answers, not a sales script.
                </p>
                <div className="ew-faq-cta">
                  <HashScrollLink
                    href="#electrical-web-form"
                    className="ew-btn"
                    offset={120}
                  >
                    Ask About Your Project
                    <span className="ew-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div>
                <GmbFaqs items={ElectricalWebFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* 14. Grow further — internal links */}
        <section className="ew-grow">
          <div className="ew-container">
            <div className="ew-sec-head-center">
              <p className="ew-eyebrow">Grow Further</p>
              <h2 className="ew-h2">
                Your Website is Step One. Here is What Fills It with Jobs.
              </h2>
            </div>
            <div className="ew-grow-cards">
              {GrowCards.map((card) => (
                <Link href={card.href} className="ew-grow-card" key={card.href}>
                  <span className="ew-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className="ew-grow-link">
                    {card.cta} <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Lead form */}
        <section className="ew-form-sec" id="electrical-web-form">
          <div className="ew-container">
            <div className="ew-form-grid">
              <aside className="ew-form-aside">
                <p className="ew-eyebrow">Get Started</p>
                <h2 className="ew-h2">
                  Book Your Free Electrician Website Consult
                </h2>
                <p className="ew-lead">
                  Tell us about your company and we will send a custom
                  homepage mockup plus a flat-price quote — free, and yours
                  to keep either way.
                </p>

                <div className="ew-form-contacts">
                  <a href={SITE_CONTACT.emailHref} className="ew-form-contact">
                    <span className="ew-form-contact-icon">
                      <FiMail aria-hidden="true" />
                    </span>
                    <span className="ew-form-contact-txt">
                      <small>Email us anytime</small>
                      <strong>{SITE_CONTACT.email}</strong>
                    </span>
                  </a>
                  <a href={SITE_CONTACT.phoneHref} className="ew-form-contact">
                    <span className="ew-form-contact-icon">
                      <FiPhoneCall aria-hidden="true" />
                    </span>
                    <span className="ew-form-contact-txt">
                      <small>Speak with a strategist</small>
                      <strong>{SITE_CONTACT.phoneDisplay}</strong>
                    </span>
                  </a>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ew-form-contact"
                  >
                    <span className="ew-form-contact-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <span className="ew-form-contact-txt">
                      <small>Visit our office</small>
                      <strong>{SITE_CONTACT.address}</strong>
                    </span>
                  </a>
                </div>
              </aside>
              <div className="ew-form-main">
                <ElectricalWebLeadForm />
              </div>
            </div>
          </div>
        </section>
        </main>

        {/* 16. Page footer */}
        <footer className="ew-footer">
          <div className="ew-container">
            <div className="ew-footer-grid">
              <div className="ew-footer-brand">
                <Link href="/" aria-label="Zonic Media — home">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={160}
                    height={44}
                  />
                </Link>
                <p>
                  Zonic Media is a digital growth agency helping electrical
                  contractors turn local searches into booked jobs.
                </p>
                <div className="ew-footer-social">
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

              <div className="ew-footer-col">
                <h3>On This Page</h3>
                <ul>
                  <li>
                    <HashScrollLink href="#ew-services" offset={96}>
                      What We Build
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#ew-process" offset={96}>
                      How It Works
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#ew-faqs" offset={96}>
                      FAQs
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#electrical-web-form" offset={120}>
                      Free Mockup
                    </HashScrollLink>
                  </li>
                </ul>
              </div>

              <div className="ew-footer-col">
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

              <div className="ew-footer-col">
                <h3>Talk to Us</h3>
                <ul className="ew-footer-contact">
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

            <div className="ew-footer-bottom">
              <p>
                © {new Date().getFullYear()} Zonic Media LLC. All rights
                reserved.
              </p>
              <div className="ew-footer-legal">
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
