import type { Metadata } from "next";
import "@/app/style/plumbingWeb.css";
import PlumbingWebLeadForm from "@/app/components/PlumbingWebLeadForm";
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
  FiDroplet,
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

const PAGE_PATH = "/services/plumbing-website-design";

export const metadata: Metadata = {
  title: "Plumbing Website Design That Books Jobs",
  description:
    "Plumbing website design built as a call acquisition system — 24/7 emergency CTAs, online booking, and water heater and drain landing pages that fill schedules.",
  keywords: [
    "plumbing website design",
    "plumber website design",
    "plumbing web design",
    "plumbing company website design",
    "websites for plumbers",
    "plumbing website redesign",
    "emergency plumber landing page",
    "online booking for plumbers",
    "plumbing lead generation website",
    "plumber web designer",
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
    title: "Plumbing Website Design That Books Jobs | Zonic Media",
    description:
      "Plumbing website design built as a call acquisition system — 24/7 emergency CTAs, online booking, and water heater and drain landing pages that fill schedules.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Plumbing Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Plumbing Website Design",
  serviceType: "Plumbing Company Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom plumbing company website design with 24/7 emergency call UX, online booking integration, water heater and drain landing pages, and financing pages built to book jobs.",
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
    name: "Plumbing Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "New Plumbing Company Websites" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Plumbing Website Redesigns" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Service & Emergency Landing Pages",
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

const PlumbingWebFaqs = [
  {
    question: "How Much Does Plumbing Website Design Cost?",
    answer:
      "Pricing depends on the size of the build: number of service and city pages, booking and financing integrations, and whether content and photography are included. A focused redesign costs considerably less than a large multi-truck, multi-market build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How Long Does It Take to Design a Plumbing Website?",
    answer:
      "Most plumbing company websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many service-area pages or custom integrations can take longer.",
  },
  {
    question: "Can My Website Capture Emergency Plumbing Calls?",
    answer:
      "Yes — that is the heart of plumber web design. A homeowner with a burst pipe at midnight decides in seconds, so click-to-call stays one thumb-tap away on every page, emergency service pages rank for the panic searches, and the site loads fast enough that nobody bails before it opens. When the water is rising, your number is the first one they can tap.",
  },
  {
    question: "Can You Integrate My Plumbing Booking Software?",
    answer:
      "Yes. We integrate the field service tools plumbers already run — ServiceTitan, Housecall Pro, Jobber — or build a structured booking request flow that routes straight to your dispatcher. Either way, homeowners can book a service call without waiting for office hours.",
  },
  {
    question: "Can You Redesign My Site Without Losing My Current Rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const plumbingWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PlumbingWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AboutChecks = [
  "Call-first layouts",
  "24/7 emergency UX",
  "Service & city pages",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Plumbing Company Websites",
    desc: (
      <>
        Launching or rebranding? We design your site from sitemap to launch —
        booking flows, service pages, and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="pw-inline-link"
        >
          local SEO foundations
        </Link>{" "}
        included from day one.
      </>
    ),
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    title: "Plumbing Website Redesigns",
    desc: "Outdated site that never rings the phone? We rebuild it around homeowner conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <FiDroplet aria-hidden="true" />,
    title: "Service & Emergency Landing Pages",
    desc: "Dedicated pages for drain cleaning, water heaters, sewer lines, and emergency plumbing — each built around a single job type and a single action: call or book.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Booking Integration",
    desc: "ServiceTitan, Housecall Pro, Jobber, or a clean booking request flow routed to your dispatcher — homeowners book a service call in a few taps, day or night.",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Financing & Maintenance Pages",
    desc: "A repipe or new water heater is a big-ticket decision. Clear financing options and maintenance plan pages answer objections before homeowners ever call.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Plumbing service lines designed for" },
  { num: "24/7", label: "Online booking, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    title: "Emergency Call UX",
    desc: "A burst-pipe-at-midnight visitor decides in seconds. Click-to-call and emergency CTAs stay one thumb-tap away on every page.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Booking Flows",
    desc: "Homeowners book or request a service call in a few taps — integrated with the field service tools plumbers already use.",
  },
  {
    icon: <FiDroplet aria-hidden="true" />,
    title: "Service Landing Pages",
    desc: "Drain cleaning, water heaters, sewer repair, repipes — each high-value service gets its own page built to rank and convert.",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Reviews & Service Areas",
    desc: "Google reviews and a page for every city you serve, placed where cautious homeowners actually look before they call anyone.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-First Design",
    desc: "Most homeowners search for a plumber on their phone — every layout starts at 375px, not on a desktop monitor.",
  },
  {
    title: "Click-to-Call & Tap-to-Book",
    desc: "One thumb-tap from any page to a call or a booking request, always visible, never buried.",
  },
  {
    title: "Google Reviews Integration",
    desc: "Your best reviews pulled onto the site where stressed homeowners actually read them.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a patience factor.",
  },
  {
    title: "Service Area Pages",
    desc: "A dedicated page for every city and suburb you serve, built to rank for local plumbing searches.",
  },
  {
    title: "Service-Specific Content",
    desc: "Drain, water heater, sewer, and repipe pages written in plain language that answer real questions and earn rankings.",
  },
  {
    title: "Local Schema Markup",
    desc: "Structured data that tells Google exactly who you are, where you work, and what you fix.",
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
    desc: "The jobs you want more of, the cities you serve, how your dispatcher books today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free Homepage Mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your market — before you commit to the full project.",
  },
  {
    num: "03",
    title: "Build, Content & on-Page SEO",
    desc: "Service pages, booking integration, and emergency landing pages — every page written around the searches homeowners use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, Tracking & Growth",
    desc: "Every form tested, every old URL redirected, call and form tracking wired up — then plumbing SEO and GBP services keep the pipeline growing.",
  },
];

const BannerFeats = [
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Conversion-First Design",
    desc: "Every layout decision serves one goal: turning visitors into booked service calls.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Built-in Local SEO",
    desc: "Schema, keyword-mapped pages, and fast Core Web Vitals from day one.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Trust Built In",
    desc: "License, insurance, and guarantee proof placed where homeowners look for it.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Growth-Ready Foundation",
    desc: "Every site plugs straight into plumbing SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Plumbing Website Design",
  "Emergency Call UX",
  "Online Booking",
  "Service Landing Pages",
  "Financing Pages",
  "Local SEO",
];

const NationwideChips = [
  "Drain Cleaning",
  "Water Heaters & Tankless",
  "Sewer Line & Excavation",
  "Repipes & Leak Detection",
  "Gas Lines",
  "Commercial Plumbing",
  "Multi-Truck Companies",
];

const GrowCards = [
  {
    href: "/services/plumbing-marketing-agency",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Plumbing Marketing Agency",
    desc: "Ads, SEO, and lead generation built for plumbers — the full engine that keeps your trucks rolling between emergencies.",
    cta: "Explore plumbing marketing",
  },
  {
    href: "/services/industry/seo-services-for-plumber",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "SEO Services for Plumbers",
    desc: "Rank for drain, water heater, and emergency plumbing searches across Google Search and Maps in every city you serve.",
    cta: "See plumbing SEO",
  },
  {
    href: "/services/gmb-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most homeowners pick a plumber straight from the map pack. We optimize your profile so that plumber is you.",
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
          __html: JSON.stringify(plumbingWebFaqJsonLd),
        }}
      />

      <div className="pw-page">
        <main>
        {/* 1. Hero */}
        <section className="pw-hero">
          <div className="pw-container">
            <div className="pw-hero-grid">
              <div className="pw-hero-copy">
                <p className="pw-eyebrow">Plumbing Website Design</p>
                <h1 className="pw-hero-h1">
                  Plumbing Website Design That Turns Emergency Searches into{" "}
                  <span className="pw-hl">Booked Jobs</span>
                </h1>
                <p className="pw-hero-sub">
                  Zonic Media designs plumbing company websites that work like
                  a call acquisition system — 24/7 emergency CTAs, online
                  booking, service and city pages, and financing UX that wins
                  the big-ticket jobs. Our{" "}
                  <Link href="/services/web-design" className="pw-inline-link">
                    website design services
                  </Link>{" "}
                  are built around booked calls, not another brochure site.
                </p>
                <div className="pw-hero-ctas">
                  <HashScrollLink
                    href="#plumbing-web-form"
                    className="pw-btn"
                    offset={120}
                  >
                    Start Your Plumbing Website
                  </HashScrollLink>
                  <a href={SITE_CONTACT.phoneHref} className="pw-btn-ghost">
                    <FiPhoneCall aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="pw-hero-stats">
                  <div className="pw-stat">
                    <p className="pw-stat-num">50+</p>
                    <p className="pw-stat-label">
                      Local business sites launched
                    </p>
                  </div>
                  <div className="pw-stat">
                    <p className="pw-stat-num">4.9/5</p>
                    <p className="pw-stat-label">Average client rating</p>
                  </div>
                  <div className="pw-stat">
                    <p className="pw-stat-num">1–2 wks</p>
                    <p className="pw-stat-label">Typical design-to-launch</p>
                  </div>
                </div>
              </div>

              <div className="pw-hero-visual">
                <div className="pw-hero-img">
                  <Image
                    src="/images/plumbing-web/hero-image-primary-v3.webp"
                    alt="Male plumbing contractor reviewing his plumbing company website on a laptop in the workshop"
                    fill
                    priority
                    sizes="(max-width: 991px) 100vw, 45vw"
                  />
                </div>
                <div className="pw-hero-badge">
                  <span className="pw-hero-badge-stars" aria-hidden="true">
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
                    className="pw-hero-badge-phone"
                    aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
                  >
                    <FiPhoneCall aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Contact strip (inside hero) */}
            <div className="pw-strip-inner">
              <div className="pw-strip-cell pw-strip-cell-main">
                <span className="pw-strip-icon">
                  <FiPhoneCall aria-hidden="true" />
                </span>
                <p>
                  <span>Planning a new plumbing website?</span>
                  <a href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
              <div className="pw-strip-cell">
                <p>
                  <span>Office hours</span>
                  <strong>Mon–Fri, 9:00 AM – 6:00 PM EST</strong>
                </p>
              </div>
              <div className="pw-strip-cell">
                <p>
                  <span>Response time</span>
                  <strong>Within one business day</strong>
                </p>
              </div>
              <HashScrollLink
                href="#plumbing-web-form"
                className="pw-btn pw-strip-cta"
                offset={120}
              >
                See what we&apos;d build for you
                <span className="pw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 3. First impressions */}
        <section className="pw-about">
          <div className="pw-container">
            <div className="pw-about-grid">
              <div className="pw-collage">
                <div className="pw-collage-img-1">
                  <Image
                    src="/images/plumbing-web/first-impressions-img-1.webp"
                    alt="Plumber repairing the drain and supply connections beneath a modern kitchen sink"
                    fill
                    sizes="(max-width: 991px) 80vw, 32vw"
                  />
                </div>
                <div className="pw-collage-img-2">
                  <Image
                    src="/images/plumbing-web/first-impressions-img-2.webp"
                    alt="Plumbing company website displayed on a desktop monitor"
                    fill
                    sizes="(max-width: 991px) 70vw, 30vw"
                  />
                </div>
                <div className="pw-collage-badge" aria-hidden="true">
                  <svg viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="pwBadgeCircle"
                        d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#pwBadgeCircle">
                        Plumbing Web Design • Zonic Media •
                      </textPath>
                    </text>
                  </svg>
                  <span className="pw-collage-badge-icon">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
              <div className="pw-about-copy">
                <p className="pw-eyebrow">First Impressions</p>
                <h2 className="pw-h2">
                  Your Website Gets Judged with{" "}
                  <span className="pw-hl-text">Water on the Floor</span> — In
                  Seconds
                </h2>
                <p className="pw-lead">
                  Nobody browses plumbing websites for fun. Your visitors
                  arrive with a burst pipe, a cold shower, or a backed-up
                  drain, phone in hand, deciding in minutes. They looked for
                  your reviews, checked whether you serve their town, and
                  tried to figure out how fast you can come. If any of that
                  was slow, confusing, or missing, they tapped the next
                  plumber on the list.
                </p>
                <p className="pw-lead">
                  Great plumbing website design closes that gap: it answers
                  the three questions every homeowner has — can I trust you,
                  do you serve my area, and how fast can you get here — and
                  then makes calling effortless. It is also the foundation of
                  any wider{" "}
                  <Link
                    href="/services/plumbing-marketing-agency"
                    className="pw-inline-link"
                  >
                    plumbing marketing
                  </Link>{" "}
                  program you run.
                </p>
                <div className="pw-checks">
                  {AboutChecks.map((check) => (
                    <div className="pw-check" key={check}>
                      <FaCircleCheck aria-hidden="true" />
                      {check}
                    </div>
                  ))}
                </div>
                <Link href="/about" className="pw-btn">
                  More About Zonic Media
                  <span className="pw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What we build — 6 icon cards */}
        <section className="pw-services" id="pw-services">
          <div className="pw-container">
            <div className="pw-sec-head">
              <div>
                <p className="pw-eyebrow">What We Build</p>
                <h2 className="pw-h2">
                  Plumbing Website Design for Every Stage of Your Company
                </h2>
              </div>
              <Link href="/services" className="pw-link-arrow">
                View all services <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className="pw-cards">
              {ServiceCards.map((card) => (
                <article className="pw-card" key={card.title}>
                  <span className="pw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Split band */}
        <section className="pw-band">
          <div className="pw-band-grid">
            <div className="pw-band-content">
              <p className="pw-eyebrow">Every Service Line</p>
              <h2 className="pw-h2">
                Web Design for Every Kind of Plumbing Work
              </h2>
              <p className="pw-lead">
                Emergency service, drain cleaning, water heaters, sewer and
                excavation, repipes, and commercial contracts — we design
                around your job mix, your service area, and the way
                homeowners in your market actually search. Your site should
                feel like your company, not like a template every competitor
                is also using — and it should be built to rank with{" "}
                <Link
                  href="/services/industry/seo-services-for-plumber"
                  className="pw-inline-link"
                >
                  SEO for plumbers
                </Link>{" "}
                from day one.
              </p>
              <div className="pw-band-stats">
                {BandStats.map((stat) => (
                  <div className="pw-band-stat" key={stat.num}>
                    <strong>{stat.num}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <HashScrollLink
                href="#plumbing-web-form"
                className="pw-btn"
                offset={120}
              >
                Get a Custom Design Plan
                <span className="pw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
            <div className="pw-band-media">
              <Image
                src="/images/plumbing-web/every-service-line-image.webp"
                alt="Responsive plumbing website design shown across desktop and tablet"
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* 6. Call acquisition system */}
        <section className="pw-system">
          <div className="pw-container">
            <div className="pw-sec-head-center">
              <p className="pw-eyebrow">The Call Acquisition System</p>
              <h2 className="pw-h2">
                More Than a Brochure — A System Built to Book Calls
              </h2>
              <p className="pw-lead">
                Most plumbing websites are digital business cards: a stock
                photo of a wrench, a list of services, a contact form nobody
                fills out. We design every site as a working system, where
                each page has one job — moving a homeowner closer to a booked
                service call.
              </p>
            </div>
            <div className="pw-feat-cards">
              {SystemCards.map((card) => (
                <article className="pw-feat-card" key={card.title}>
                  <span className="pw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Anatomy of a high-converting plumbing website */}
        <section className="pw-anatomy">
          <div className="pw-container">
            <div className="pw-anatomy-grid">
              <div>
                <p className="pw-eyebrow">Built Into Every Site</p>
                <h2 className="pw-h2">
                  The Anatomy of a High-Converting Plumbing Website
                </h2>
                <p className="pw-lead">
                  The best plumbing website design is not about decoration —
                  it is a checklist of things homeowners and search engines
                  both expect. Every website we ship includes all eight, as
                  standard, not as upsells.
                </p>
                <p className="pw-lead">
                  Miss any one of them and you leak calls: slow pages lose
                  panicked visitors, missing reviews lose trust, and a site
                  without service area pages loses every suburb to the
                  plumber who built them.
                </p>
                <div className="pw-anatomy-cta">
                  <HashScrollLink
                    href="#plumbing-web-form"
                    className="pw-btn"
                    offset={120}
                  >
                    Get Every Feature, Standard
                    <span className="pw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div className="pw-anatomy-list">
                {AnatomyItems.map((item) => (
                  <div className="pw-anatomy-item" key={item.title}>
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
        <section className="pw-why">
          <div className="pw-container">
            <div className="pw-sec-head-center">
              <p className="pw-eyebrow">Why Zonic Media</p>
              <h2 className="pw-h2">Designed to Convert. Built to Rank.</h2>
              <p className="pw-lead">
                A beautiful website that nobody finds is as useless as a
                ranking site that nobody trusts. We build both halves at
                once, so design and search work together from the first
                wireframe.
              </p>
            </div>
            <div className="pw-why-cards">
              <article className="pw-why-card">
                <span className="pw-why-card-icon">
                  <RiSearchLine aria-hidden="true" />
                </span>
                <h3>A Local SEO Foundation, Not an Afterthought</h3>
                <p>
                  Schema markup, keyword-mapped pages, and a structure that
                  plugs straight into{" "}
                  <Link
                    href="/services/google-ads"
                    className="pw-inline-link"
                  >
                    PPC campaigns
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="pw-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  when you are ready to grow.
                </p>
              </article>
              <article className="pw-why-card">
                <span className="pw-why-card-icon">
                  <FiZap aria-hidden="true" />
                </span>
                <h3>Built for the Emergency-Search Moment</h3>
                <p>
                  Mobile-first layouts, fast Core Web Vitals, and
                  click-to-call everywhere — because your best lead is
                  standing in two inches of water deciding in seconds.
                </p>
              </article>
              <article className="pw-why-card">
                <span className="pw-why-card-icon">
                  <FiShield aria-hidden="true" />
                </span>
                <h3>Trust Signals Where Homeowners Look for Them</h3>
                <p>
                  License numbers, insurance proof, guarantees, and real
                  before-and-after work placed in the layout — not buried on
                  an about page nobody reads.
                </p>
              </article>
            </div>
            <div className="pw-why-banner">
              <div className="pw-why-banner-text">
                <p className="pw-eyebrow">Free Strategy Call</p>
                <h3>Not Sure What Your Company Actually Needs?</h3>
                <p>
                  Tell us your goals and we&apos;ll map the exact pages,
                  booking flows, and local SEO foundations your site needs —
                  no obligation, and no sales script.
                </p>
              </div>
              <div className="pw-why-banner-actions">
                <HashScrollLink
                  href="#plumbing-web-form"
                  className="pw-btn"
                  offset={120}
                >
                  Book a Free Strategy Call
                  <span className="pw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </div>
        </section>

        {/* 9. How it works — steps */}
        <section className="pw-process" id="pw-process">
          <div className="pw-container">
            <div className="pw-sec-head">
              <div>
                <p className="pw-eyebrow">How It Works</p>
                <h2 className="pw-h2">
                  From First Call to Launch in Four Steps
                </h2>
              </div>
              <HashScrollLink
                href="#plumbing-web-form"
                className="pw-link-arrow"
                offset={120}
              >
                Start with step one <FiArrowUpRight aria-hidden="true" />
              </HashScrollLink>
            </div>
            <div className="pw-steps">
              {ProcessSteps.map((step) => (
                <div className="pw-step" key={step.num}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <span className="pw-step-num" aria-hidden="true">
                    {step.num}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Banner (full width) */}
        <section className="pw-banner">
          <div className="pw-banner-grid">
            <div className="pw-banner-copy">
              <p className="pw-eyebrow">Why Plumbers Choose Us</p>
              <h2 className="pw-h2">Workmanship Customers Can See</h2>
              <p className="pw-lead">
                A website built by a team that understands how homeowners
                choose a plumber — and what makes them call instead of keep
                scrolling. If the project touches ads, content, or profile
                work, our{" "}
                <Link href="/services" className="pw-inline-link">
                  full-service marketing
                </Link>{" "}
                team can keep the whole system aligned.
              </p>
              <Link href="/contact-us" className="pw-btn">
                Contact Us
                <span className="pw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </div>
            <div className="pw-banner-media">
              <ServiceSiteMockup
                prefix="pw"
                brand="FlowPro Plumbing"
                url="flowproplumbing.com"
                headline="Fast, reliable plumbing."
                primaryCta="Request Service"
                chips={["Drains", "Water Heaters", "Leaks"]}
                toastTitle="New service request"
              />
            </div>
            <div className="pw-banner-feats">
              {BannerFeats.map((feat) => (
                <div className="pw-banner-feat" key={feat.title}>
                  <span className="pw-banner-feat-icon">{feat.icon}</span>
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
        <div className="pw-marquee" aria-hidden="true">
          <div className="pw-marquee-track">
            {[0, 1].map((copy) => (
              <span className="pw-marquee-item" key={copy}>
                {MarqueeItems.map((item) => (
                  <span className="pw-marquee-item" key={item}>
                    {item} <FaStar aria-hidden="true" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* 12. Nationwide */}
        <section className="pw-nationwide">
          <div className="pw-container">
            <div className="pw-sec-head-center">
              <p className="pw-eyebrow">Wherever You Work</p>
              <h2 className="pw-h2">
                Plumbing Website Design Services Across the United States
              </h2>
              <p className="pw-lead">
                From single-truck startups to multi-market companies, Zonic
                Media designs plumbing websites for contractors in every
                state. Because everything happens remotely — discovery calls,
                design reviews, launch — you get the same process whether you
                work in Delaware, Texas, or Ohio.
              </p>
            </div>
            <div className="pw-chips">
              {NationwideChips.map((chip) => (
                <span className="pw-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="pw-nationwide-cta">
              <HashScrollLink
                href="#plumbing-web-form"
                className="pw-btn"
                offset={120}
              >
                Request Your Free Mockup
                <span className="pw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 13. FAQs */}
        <section className="pw-faqs" id="pw-faqs">
          <div className="pw-container">
            <div className="pw-split-grid">
              <div>
                <p className="pw-eyebrow">FAQs</p>
                <h2 className="pw-h2">
                  Everything Plumbers Ask Us About Website Design
                </h2>
                <p className="pw-lead">
                  Straight answers on pricing, timelines, booking software,
                  and what happens to your current rankings. If your question
                  is not here, or you need{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="pw-inline-link"
                  >
                    suspended profile reinstatement
                  </Link>{" "}
                  for your Google listing, send it through the form — a strategist
                  answers, not a sales script.
                </p>
                <div className="pw-faq-cta">
                  <HashScrollLink
                    href="#plumbing-web-form"
                    className="pw-btn"
                    offset={120}
                  >
                    Ask About Your Project
                    <span className="pw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div>
                <GmbFaqs items={PlumbingWebFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* 14. Grow further — internal links */}
        <section className="pw-grow">
          <div className="pw-container">
            <div className="pw-sec-head-center">
              <p className="pw-eyebrow">Grow Further</p>
              <h2 className="pw-h2">
                Your Website is Step One. Here is What Fills It with Calls.
              </h2>
            </div>
            <div className="pw-grow-cards">
              {GrowCards.map((card) => (
                <Link href={card.href} className="pw-grow-card" key={card.href}>
                  <span className="pw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className="pw-grow-link">
                    {card.cta} <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Lead form */}
        <section className="pw-form-sec" id="plumbing-web-form">
          <div className="pw-container">
            <div className="pw-form-grid">
              <aside className="pw-form-aside">
                <p className="pw-eyebrow">Get Started</p>
                <h2 className="pw-h2">
                  Book Your Free Plumbing Website Consult
                </h2>
                <p className="pw-lead">
                  Tell us about your company and we will send a custom
                  homepage mockup plus a flat-price quote — free, and yours
                  to keep either way.
                </p>

                <div className="pw-form-contacts">
                  <a href={SITE_CONTACT.emailHref} className="pw-form-contact">
                    <span className="pw-form-contact-icon">
                      <FiMail aria-hidden="true" />
                    </span>
                    <span className="pw-form-contact-txt">
                      <small>Email us anytime</small>
                      <strong>{SITE_CONTACT.email}</strong>
                    </span>
                  </a>
                  <a href={SITE_CONTACT.phoneHref} className="pw-form-contact">
                    <span className="pw-form-contact-icon">
                      <FiPhoneCall aria-hidden="true" />
                    </span>
                    <span className="pw-form-contact-txt">
                      <small>Speak with a strategist</small>
                      <strong>{SITE_CONTACT.phoneDisplay}</strong>
                    </span>
                  </a>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pw-form-contact"
                  >
                    <span className="pw-form-contact-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <span className="pw-form-contact-txt">
                      <small>Visit our office</small>
                      <strong>{SITE_CONTACT.address}</strong>
                    </span>
                  </a>
                </div>
              </aside>
              <div className="pw-form-main">
                <PlumbingWebLeadForm />
              </div>
            </div>
          </div>
        </section>
        </main>

        {/* 16. Page footer */}
        <footer className="pw-footer">
          <div className="pw-container">
            <div className="pw-footer-grid">
              <div className="pw-footer-brand">
                <Link href="/" aria-label="Zonic Media — home">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={160}
                    height={44}
                  />
                </Link>
                <p>
                  Zonic Media is a digital growth agency helping plumbing
                  companies turn emergency searches into booked jobs.
                </p>
                <div className="pw-footer-social">
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

              <div className="pw-footer-col">
                <h3>On This Page</h3>
                <ul>
                  <li>
                    <HashScrollLink href="#pw-services" offset={96}>
                      What We Build
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#pw-process" offset={96}>
                      How It Works
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#pw-faqs" offset={96}>
                      FAQs
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#plumbing-web-form" offset={120}>
                      Free Mockup
                    </HashScrollLink>
                  </li>
                </ul>
              </div>

              <div className="pw-footer-col">
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

              <div className="pw-footer-col">
                <h3>Talk to Us</h3>
                <ul className="pw-footer-contact">
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

            <div className="pw-footer-bottom">
              <p>
                © {new Date().getFullYear()} Zonic Media LLC. All rights
                reserved.
              </p>
              <div className="pw-footer-legal">
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
