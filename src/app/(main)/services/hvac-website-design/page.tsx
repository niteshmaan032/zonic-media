import type { Metadata } from "next";
import "@/app/style/hvacWeb.css";
import HvacWebLeadForm from "@/app/components/HvacWebLeadForm";
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
  FiLayout,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiRefreshCw,
  FiShield,
  FiThermometer,
  FiWind,
  FiZap,
} from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiPagesLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/hvac-website-design";

export const metadata: Metadata = {
  title: "HVAC Website Design That Books Service Calls",
  description:
    "HVAC website design built as a call acquisition system — online booking, 24/7 emergency CTAs, and seasonal AC and furnace landing pages that fill the schedule.",
  keywords: [
    "hvac website design",
    "hvac web design",
    "hvac company website design",
    "websites for hvac contractors",
    "hvac website redesign",
    "ac repair landing page design",
    "furnace repair website",
    "hvac lead generation website",
    "hvac online booking website",
    "hvac contractor web designer",
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
    title: "HVAC Website Design That Books Service Calls | Zonic Media",
    description:
      "HVAC website design built as a call acquisition system — online booking, 24/7 emergency CTAs, and seasonal AC and furnace landing pages that fill the schedule.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HVAC Website Design",
  serviceType: "HVAC Company Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom HVAC company website design with online booking integration, 24/7 emergency call UX, seasonal AC and furnace landing pages, and maintenance plan signup flows.",
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
    name: "HVAC Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "New HVAC Company Websites" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "HVAC Website Redesigns" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Seasonal Service Landing Pages",
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

const HvacWebFaqs = [
  {
    question: "How Much Does HVAC Website Design Cost?",
    answer:
      "Pricing depends on the size of the build: number of service and city pages, booking and financing integrations, and whether content and photography are included. A focused redesign costs considerably less than a large multi-location build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How Long Does It Take to Design an HVAC Website?",
    answer:
      "Most HVAC company websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many service-area pages or custom integrations can take longer.",
  },
  {
    question: "Can You Integrate My HVAC Booking Software?",
    answer:
      "Yes. We integrate the field service tools HVAC companies already run — ServiceTitan, Housecall Pro, Jobber — or build a structured booking request flow that routes straight to your dispatcher. Either way, homeowners can book a service call without waiting for office hours, which matters most when the AC dies at 9 PM.",
  },
  {
    question: "Can My Website Capture Seasonal AC and Furnace Demand?",
    answer:
      "Yes — that swing is the heart of HVAC web design. We build dedicated seasonal landing pages for AC repair, furnace repair, heat pump installs, and tune-up specials, so you can point ads and Google Business Profile posts at the right page as the temperature moves. When the first heat wave or cold snap hits, your site is ready before the phones start ringing.",
  },
  {
    question: "Can You Redesign My Site Without Losing My Current Rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const hvacWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: HvacWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AboutChecks = [
  "Book-online-first layouts",
  "24/7 emergency call UX",
  "Seasonal campaign pages",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New HVAC Company Websites",
    desc: (
      <>
        Launching or rebranding? We design your site from sitemap to launch —
        booking flows, service pages, and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="hw-inline-link"
        >
          local SEO foundations
        </Link>{" "}
        included from day one.
      </>
    ),
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    title: "HVAC Website Redesigns",
    desc: "Outdated site that never rings the phone? We rebuild it around homeowner conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Seasonal Service Landing Pages",
    desc: "Dedicated pages for AC repair, furnace repair, heat pump installs, and tune-up specials — each built around a single service and a single action: book.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Booking Integration",
    desc: "ServiceTitan, Housecall Pro, Jobber, or a clean booking request flow routed to your dispatcher — homeowners book a service call in a few taps, day or night.",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Maintenance Plan & Financing Pages",
    desc: "A new system is a five-figure decision. Clear financing options and maintenance plan signups turn one-time repairs into year-round recurring revenue.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "HVAC service lines designed for" },
  { num: "24/7", label: "Online booking, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Booking Flows",
    desc: "Homeowners book or request a service call in a few taps — integrated with the field service tools HVAC companies already use.",
  },
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    title: "Emergency Call UX",
    desc: "A no-AC-at-midnight visitor decides in seconds. Click-to-call and emergency CTAs stay one thumb-tap away on every page.",
  },
  {
    icon: <FiThermometer aria-hidden="true" />,
    title: "Seasonal Landing Pages",
    desc: "AC pages for the heat wave, furnace pages for the cold snap — ready to catch the surge every season brings to your market.",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Maintenance Plan Signups",
    desc: "Membership and tune-up plan pages that turn one-time emergency calls into predictable recurring revenue.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-First Design",
    desc: "Most homeowners search for HVAC help on their phone — every layout starts at 375px, not on a desktop monitor.",
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
    desc: "A dedicated page for every city and suburb you serve, built to rank for local HVAC searches.",
  },
  {
    title: "Seasonal Service Content",
    desc: "AC, furnace, heat pump, and IAQ pages written in plain language that answer real questions and earn rankings.",
  },
  {
    title: "Local Schema Markup",
    desc: "Structured data that tells Google exactly who you are, where you work, and what you service.",
  },
  {
    title: "Secure Hosting & SSL",
    desc: "Fast, monitored hosting with daily backups — your site stays online and stays yours.",
  },
];

const ProcessSteps = [
  {
    num: "01",
    title: "Discovery & Service Mix Mapping",
    desc: "The calls you want more of, the cities you serve, how your dispatcher books today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free Homepage Mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your market — before you commit to the full project.",
  },
  {
    num: "03",
    title: "Build, Content & on-Page SEO",
    desc: "Service pages, booking integration, and seasonal landing pages — every page written around the searches homeowners use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, Tracking & Growth",
    desc: "Every form tested, every old URL redirected, call and form tracking wired up — then HVAC SEO and GBP services keep the pipeline growing.",
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
    desc: "License, insurance, and certification proof placed where homeowners look for it.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Growth-Ready Foundation",
    desc: "Every site plugs straight into HVAC SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "HVAC Website Design",
  "Online Booking",
  "Emergency Call UX",
  "Seasonal Landing Pages",
  "Maintenance Plans",
  "Local SEO",
];

const NationwideChips = [
  "AC Repair & Installation",
  "Heating & Furnace",
  "Heat Pumps & Mini-Splits",
  "Indoor Air Quality",
  "Ductwork & Ventilation",
  "Commercial HVAC",
  "Multi-Location Companies",
];

const GrowCards = [
  {
    href: "/services/hvac-marketing-agency",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "HVAC Marketing Agency",
    desc: "Ads, SEO, and lead generation built for HVAC contractors — the full engine that keeps your techs booked in every season.",
    cta: "Explore HVAC marketing",
  },
  {
    href: "/services/industry/local-seo-services-for-hvac",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local SEO for HVAC",
    desc: "Rank for AC repair and furnace searches across Google Search and Maps in every city you serve.",
    cta: "See HVAC local SEO",
  },
  {
    href: "/local-seo-google-business-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most homeowners pick an HVAC company straight from the map pack. We optimize your profile so that company is you.",
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
          __html: JSON.stringify(hvacWebFaqJsonLd),
        }}
      />

      <div className="hw-page">
        <main>
        {/* 1. Hero */}
        <section className="hw-hero">
          <div className="hw-container">
            <div className="hw-hero-grid">
              <div className="hw-hero-copy">
                <p className="hw-eyebrow">HVAC Website Design</p>
                <h1 className="hw-hero-h1">
                  HVAC Website Design That Turns Emergency Searches into{" "}
                  <span className="hw-hl">Booked Service Calls</span>
                </h1>
                <p className="hw-hero-sub">
                  Zonic Media designs HVAC company websites that work like a
                  call acquisition system — online booking, 24/7 emergency
                  CTAs, seasonal AC and furnace landing pages, and maintenance
                  plan flows that fill the schedule. Our{" "}
                  <Link href="/services/web-design" className="hw-inline-link">
                    website design services
                  </Link>{" "}
                  are built around booked calls, not another brochure site.
                </p>
                <div className="hw-hero-ctas">
                  <HashScrollLink
                    href="#hvac-web-form"
                    className="hw-btn"
                    offset={120}
                  >
                    Start Your HVAC Website
                  </HashScrollLink>
                  <a href={SITE_CONTACT.phoneHref} className="hw-btn-ghost">
                    <FiPhoneCall aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="hw-hero-stats">
                  <div className="hw-stat">
                    <p className="hw-stat-num">50+</p>
                    <p className="hw-stat-label">
                      Local business sites launched
                    </p>
                  </div>
                  <div className="hw-stat">
                    <p className="hw-stat-num">4.9/5</p>
                    <p className="hw-stat-label">Average client rating</p>
                  </div>
                  <div className="hw-stat">
                    <p className="hw-stat-num">1–2 wks</p>
                    <p className="hw-stat-label">Typical design-to-launch</p>
                  </div>
                </div>
              </div>

              <div className="hw-hero-visual">
                <div className="hw-hero-img">
                  <Image
                    src="/images/hvac-web/hero-image-primary-v2.webp"
                    alt="Experienced HVAC technician reviewing a heating and cooling company website on a laptop"
                    fill
                    priority
                    sizes="(max-width: 991px) 100vw, 45vw"
                  />
                </div>
                <div className="hw-hero-badge">
                  <span className="hw-hero-badge-stars" aria-hidden="true">
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
                    className="hw-hero-badge-phone"
                    aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
                  >
                    <FiPhoneCall aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Contact strip (inside hero) */}
            <div className="hw-strip-inner">
              <div className="hw-strip-cell hw-strip-cell-main">
                <span className="hw-strip-icon">
                  <FiPhoneCall aria-hidden="true" />
                </span>
                <p>
                  <span>Planning a new HVAC website?</span>
                  <a href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
              <div className="hw-strip-cell">
                <p>
                  <span>Office hours</span>
                  <strong>Mon–Fri, 9:00 AM – 6:00 PM EST</strong>
                </p>
              </div>
              <div className="hw-strip-cell">
                <p>
                  <span>Response time</span>
                  <strong>Within one business day</strong>
                </p>
              </div>
              <HashScrollLink
                href="#hvac-web-form"
                className="hw-btn hw-strip-cta"
                offset={120}
              >
                See what we&apos;d build for you
                <span className="hw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 3. First impressions */}
        <section className="hw-about">
          <div className="hw-container">
            <div className="hw-about-grid">
              <div className="hw-collage">
                <div className="hw-collage-img-1">
                  <Image
                    src="/images/hvac-web/first-impressions-img-1.webp"
                    alt="HVAC technician servicing a residential outdoor air-conditioning condenser"
                    fill
                    sizes="(max-width: 991px) 80vw, 32vw"
                  />
                </div>
                <div className="hw-collage-img-2">
                  <Image
                    src="/images/hvac-web/first-impressions-img-2.webp"
                    alt="HVAC company website displayed on a desktop monitor in a contractor office"
                    fill
                    sizes="(max-width: 991px) 70vw, 30vw"
                  />
                </div>
                <div className="hw-collage-badge" aria-hidden="true">
                  <svg viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="hwBadgeCircle"
                        d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#hwBadgeCircle">
                        HVAC Web Design • Zonic Media •
                      </textPath>
                    </text>
                  </svg>
                  <span className="hw-collage-badge-icon">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
              <div className="hw-about-copy">
                <p className="hw-eyebrow">First Impressions</p>
                <h2 className="hw-h2">
                  Your Website Gets Judged Like a{" "}
                  <span className="hw-hl-text">Broken AC</span> — Under
                  Pressure, in Seconds
                </h2>
                <p className="hw-lead">
                  Nobody browses HVAC websites for fun. Your visitors arrive
                  with a dead furnace or a blowing-warm AC, phone in hand,
                  making a decision in minutes. They looked for your reviews,
                  checked whether you serve their town, and tried to figure out
                  how fast you can come. If any of that was slow, confusing, or
                  missing, they tapped the next company on the list.
                </p>
                <p className="hw-lead">
                  Great HVAC website design closes that gap: it answers the
                  three questions every homeowner has — can I trust you, do you
                  serve my area, and how fast can you get here — and then makes
                  booking effortless. It is also the foundation of any wider{" "}
                  <Link
                    href="/services/hvac-marketing-agency"
                    className="hw-inline-link"
                  >
                    HVAC marketing
                  </Link>{" "}
                  program you run.
                </p>
                <div className="hw-checks">
                  {AboutChecks.map((check) => (
                    <div className="hw-check" key={check}>
                      <FaCircleCheck aria-hidden="true" />
                      {check}
                    </div>
                  ))}
                </div>
                <Link href="/about" className="hw-btn">
                  More About Zonic Media
                  <span className="hw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What we build — 6 icon cards */}
        <section className="hw-services" id="hw-services">
          <div className="hw-container">
            <div className="hw-sec-head">
              <div>
                <p className="hw-eyebrow">What We Build</p>
                <h2 className="hw-h2">
                  HVAC Website Design for Every Stage of Your Company
                </h2>
              </div>
              <Link href="/services" className="hw-link-arrow">
                View all services <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className="hw-cards">
              {ServiceCards.map((card) => (
                <article className="hw-card" key={card.title}>
                  <span className="hw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Split band */}
        <section className="hw-band">
          <div className="hw-band-grid">
            <div className="hw-band-content">
              <p className="hw-eyebrow">Every Service Line</p>
              <h2 className="hw-h2">
                Web Design for Heating, Cooling, and Everything Between
              </h2>
              <p className="hw-lead">
                AC repair and installation, furnaces and boilers, heat pumps
                and mini-splits, indoor air quality, and commercial work — we
                design around your service mix, your seasons, and the way
                homeowners in your market actually search. Your site should
                feel like your company, not like a template every competitor
                is also using — and it should be built to rank with{" "}
                <Link
                  href="/services/industry/local-seo-services-for-hvac"
                  className="hw-inline-link"
                >
                  local SEO for HVAC
                </Link>{" "}
                from day one.
              </p>
              <div className="hw-band-stats">
                {BandStats.map((stat) => (
                  <div className="hw-band-stat" key={stat.num}>
                    <strong>{stat.num}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <HashScrollLink
                href="#hvac-web-form"
                className="hw-btn"
                offset={120}
              >
                Get a Custom Design Plan
                <span className="hw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
            <div className="hw-band-media">
              <Image
                src="/images/hvac-web/every-service-line-image.webp"
                alt="Responsive HVAC website design shown across desktop and tablet"
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* 6. Call acquisition system */}
        <section className="hw-system">
          <div className="hw-container">
            <div className="hw-sec-head-center">
              <p className="hw-eyebrow">The Call Acquisition System</p>
              <h2 className="hw-h2">
                More Than a Brochure — A System Built to Book Calls
              </h2>
              <p className="hw-lead">
                Most HVAC websites are digital business cards: a stock photo of
                a condenser, a list of services, a contact form nobody fills
                out. We design every site as a working system, where each page
                has one job — moving a homeowner closer to a booked service
                call.
              </p>
            </div>
            <div className="hw-feat-cards">
              {SystemCards.map((card) => (
                <article className="hw-feat-card" key={card.title}>
                  <span className="hw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Anatomy of a high-converting HVAC website */}
        <section className="hw-anatomy">
          <div className="hw-container">
            <div className="hw-anatomy-grid">
              <div>
                <p className="hw-eyebrow">Built Into Every Site</p>
                <h2 className="hw-h2">
                  The Anatomy of a High-Converting HVAC Website
                </h2>
                <p className="hw-lead">
                  The best HVAC website design is not about decoration — it is
                  a checklist of things homeowners and search engines both
                  expect. Every website we ship includes all eight, as
                  standard, not as upsells.
                </p>
                <p className="hw-lead">
                  Miss any one of them and you leak calls: slow pages lose
                  overheated visitors, missing reviews lose trust, and a site
                  without service area pages loses every suburb to the company
                  that built them.
                </p>
                <div className="hw-anatomy-cta">
                  <HashScrollLink
                    href="#hvac-web-form"
                    className="hw-btn"
                    offset={120}
                  >
                    Get Every Feature, Standard
                    <span className="hw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div className="hw-anatomy-list">
                {AnatomyItems.map((item) => (
                  <div className="hw-anatomy-item" key={item.title}>
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
        <section className="hw-why">
          <div className="hw-container">
            <div className="hw-sec-head-center">
              <p className="hw-eyebrow">Why Zonic Media</p>
              <h2 className="hw-h2">Designed to Convert. Built to Rank.</h2>
              <p className="hw-lead">
                A beautiful website that nobody finds is as useless as a
                ranking site that nobody trusts. We build both halves at once,
                so design and search work together from the first wireframe.
              </p>
            </div>
            <div className="hw-why-cards">
              <article className="hw-why-card">
                <span className="hw-why-card-icon">
                  <RiSearchLine aria-hidden="true" />
                </span>
                <h3>A Local SEO Foundation, Not an Afterthought</h3>
                <p>
                  Schema markup, keyword-mapped pages, and a structure that
                  plugs straight into{" "}
                  <Link
                    href="/services/google-ads"
                    className="hw-inline-link"
                  >
                    paid search campaigns
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/local-seo-google-business-optimization"
                    className="hw-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  when you are ready to grow.
                </p>
              </article>
              <article className="hw-why-card">
                <span className="hw-why-card-icon">
                  <FiWind aria-hidden="true" />
                </span>
                <h3>Built for the Emergency-Search Moment</h3>
                <p>
                  Mobile-first layouts, fast Core Web Vitals, and click-to-call
                  everywhere — because your best lead is standing in a
                  90-degree living room deciding in seconds.
                </p>
              </article>
              <article className="hw-why-card">
                <span className="hw-why-card-icon">
                  <FiShield aria-hidden="true" />
                </span>
                <h3>Trust Signals Where Homeowners Look for Them</h3>
                <p>
                  License numbers, insurance proof, NATE certifications, and
                  guarantee details placed in the layout — not buried on an
                  about page nobody reads.
                </p>
              </article>
            </div>
            <div className="hw-why-banner">
              <div className="hw-why-banner-text">
                <p className="hw-eyebrow">Free Strategy Call</p>
                <h3>Not Sure What Your Company Actually Needs?</h3>
                <p>
                  Tell us your goals and we&apos;ll map the exact pages,
                  booking flows, and local SEO foundations your site needs —
                  no obligation, and no sales script.
                </p>
              </div>
              <div className="hw-why-banner-actions">
                <HashScrollLink
                  href="#hvac-web-form"
                  className="hw-btn"
                  offset={120}
                >
                  Book a Free Strategy Call
                  <span className="hw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </div>
        </section>

        {/* 9. How it works — steps */}
        <section className="hw-process" id="hw-process">
          <div className="hw-container">
            <div className="hw-sec-head">
              <div>
                <p className="hw-eyebrow">How It Works</p>
                <h2 className="hw-h2">
                  From First Call to Launch in Four Steps
                </h2>
              </div>
              <HashScrollLink
                href="#hvac-web-form"
                className="hw-link-arrow"
                offset={120}
              >
                Start with step one <FiArrowUpRight aria-hidden="true" />
              </HashScrollLink>
            </div>
            <div className="hw-steps">
              {ProcessSteps.map((step) => (
                <div className="hw-step" key={step.num}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <span className="hw-step-num" aria-hidden="true">
                    {step.num}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Banner (full width) */}
        <section className="hw-banner">
          <div className="hw-banner-grid">
            <div className="hw-banner-copy">
              <p className="hw-eyebrow">Why HVAC Companies Choose Us</p>
              <h2 className="hw-h2">
                Comfort Your Customers Can Feel from the First Click
              </h2>
              <p className="hw-lead">
                A website built by a team that understands how homeowners
                choose an HVAC company — and what makes them book instead of
                keep scrolling. If the project touches ads, content, or
                profile work, our{" "}
                <Link href="/services" className="hw-inline-link">
                  full-service marketing
                </Link>{" "}
                team can keep the whole system aligned.
              </p>
              <Link href="/contact-us" className="hw-btn">
                Contact Us
                <span className="hw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </div>
            <div className="hw-banner-media">
              <ServiceSiteMockup
                prefix="hw"
                brand="Summit Air"
                url="summitair.com"
                headline="Heating & cooling you can trust."
                primaryCta="Book a Tune-Up"
                chips={["AC Repair", "Heating", "Installs"]}
                toastTitle="New service booking"
              />
            </div>
            <div className="hw-banner-feats">
              {BannerFeats.map((feat) => (
                <div className="hw-banner-feat" key={feat.title}>
                  <span className="hw-banner-feat-icon">{feat.icon}</span>
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
        <div className="hw-marquee" aria-hidden="true">
          <div className="hw-marquee-track">
            {[0, 1].map((copy) => (
              <span className="hw-marquee-item" key={copy}>
                {MarqueeItems.map((item) => (
                  <span className="hw-marquee-item" key={item}>
                    {item} <FaStar aria-hidden="true" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* 12. Nationwide */}
        <section className="hw-nationwide">
          <div className="hw-container">
            <div className="hw-sec-head-center">
              <p className="hw-eyebrow">Wherever You Work</p>
              <h2 className="hw-h2">
                HVAC Website Design Services Across the United States
              </h2>
              <p className="hw-lead">
                From single-truck startups to multi-location companies, Zonic
                Media designs HVAC websites for contractors in every state.
                Because everything happens remotely — discovery calls, design
                reviews, launch — you get the same process whether you work in
                Delaware, Arizona, or Minnesota.
              </p>
            </div>
            <div className="hw-chips">
              {NationwideChips.map((chip) => (
                <span className="hw-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="hw-nationwide-cta">
              <HashScrollLink
                href="#hvac-web-form"
                className="hw-btn"
                offset={120}
              >
                Request Your Free Mockup
                <span className="hw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 13. FAQs */}
        <section className="hw-faqs" id="hw-faqs">
          <div className="hw-container">
            <div className="hw-split-grid">
              <div>
                <p className="hw-eyebrow">FAQs</p>
                <h2 className="hw-h2">
                  Everything HVAC Contractors Ask Us About Website Design
                </h2>
                <p className="hw-lead">
                  Straight answers on pricing, timelines, booking software,
                  and what happens to your current rankings. If your question
                  is not here, or you are facing a suspension and need{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="hw-inline-link"
                  >
                    Google Business Profile reinstatement help
                  </Link>, send it through the form — a strategist
                  answers, not a sales script.
                </p>
                <div className="hw-faq-cta">
                  <HashScrollLink
                    href="#hvac-web-form"
                    className="hw-btn"
                    offset={120}
                  >
                    Ask About Your Project
                    <span className="hw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div>
                <GmbFaqs items={HvacWebFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* 14. Grow further — internal links */}
        <section className="hw-grow">
          <div className="hw-container">
            <div className="hw-sec-head-center">
              <p className="hw-eyebrow">Grow Further</p>
              <h2 className="hw-h2">
                Your Website is Step One. Here is What Fills It with Calls.
              </h2>
            </div>
            <div className="hw-grow-cards">
              {GrowCards.map((card) => (
                <Link href={card.href} className="hw-grow-card" key={card.href}>
                  <span className="hw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className="hw-grow-link">
                    {card.cta} <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Lead form */}
        <section className="hw-form-sec" id="hvac-web-form">
          <div className="hw-container">
            <div className="hw-form-grid">
              <aside className="hw-form-aside">
                <p className="hw-eyebrow">Get Started</p>
                <h2 className="hw-h2">Book Your Free HVAC Website Consult</h2>
                <p className="hw-lead">
                  Tell us about your company and we will send a custom homepage
                  mockup plus a flat-price quote — free, and yours to keep
                  either way.
                </p>

                <div className="hw-form-contacts">
                  <a href={SITE_CONTACT.emailHref} className="hw-form-contact">
                    <span className="hw-form-contact-icon">
                      <FiMail aria-hidden="true" />
                    </span>
                    <span className="hw-form-contact-txt">
                      <small>Email us anytime</small>
                      <strong>{SITE_CONTACT.email}</strong>
                    </span>
                  </a>
                  <a href={SITE_CONTACT.phoneHref} className="hw-form-contact">
                    <span className="hw-form-contact-icon">
                      <FiPhoneCall aria-hidden="true" />
                    </span>
                    <span className="hw-form-contact-txt">
                      <small>Speak with a strategist</small>
                      <strong>{SITE_CONTACT.phoneDisplay}</strong>
                    </span>
                  </a>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hw-form-contact"
                  >
                    <span className="hw-form-contact-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <span className="hw-form-contact-txt">
                      <small>Visit our office</small>
                      <strong>{SITE_CONTACT.address}</strong>
                    </span>
                  </a>
                </div>
              </aside>
              <div className="hw-form-main">
                <HvacWebLeadForm />
              </div>
            </div>
          </div>
        </section>
        </main>

        {/* 16. Page footer */}
        <footer className="hw-footer">
          <div className="hw-container">
            <div className="hw-footer-grid">
              <div className="hw-footer-brand">
                <Link href="/" aria-label="Zonic Media — home">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={160}
                    height={44}
                  />
                </Link>
                <p>
                  Zonic Media is a digital growth agency helping HVAC
                  companies turn emergency searches into booked service calls.
                </p>
                <div className="hw-footer-social">
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

              <div className="hw-footer-col">
                <h3>On This Page</h3>
                <ul>
                  <li>
                    <HashScrollLink href="#hw-services" offset={96}>
                      What We Build
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#hw-process" offset={96}>
                      How It Works
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#hw-faqs" offset={96}>
                      FAQs
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#hvac-web-form" offset={120}>
                      Free Mockup
                    </HashScrollLink>
                  </li>
                </ul>
              </div>

              <div className="hw-footer-col">
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

              <div className="hw-footer-col">
                <h3>Talk to Us</h3>
                <ul className="hw-footer-contact">
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

            <div className="hw-footer-bottom">
              <p>
                © {new Date().getFullYear()} Zonic Media LLC. All rights
                reserved.
              </p>
              <div className="hw-footer-legal">
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
