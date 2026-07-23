import type { Metadata } from "next";
import "@/app/style/roofingWeb.css";
import RoofingWebLeadForm from "@/app/components/RoofingWebLeadForm";
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
  FiCloudLightning,
  FiDollarSign,
  FiFileText,
  FiImage,
  FiLayout,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiRefreshCw,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/roofing-website-design";

export const metadata: Metadata = {
  title: "Roofing Website Design That Books Jobs",
  description:
    "Roofing website design built as a job acquisition system — instant quote flows, storm damage landing pages, financing UX, and galleries that win the bid.",
  keywords: [
    "roofing website design",
    "roofer website design",
    "roofing web design",
    "roofing company website design",
    "websites for roofing companies",
    "roofing website redesign",
    "roofing landing page design",
    "storm damage landing pages",
    "roofing lead generation website",
    "roofing contractor web designer",
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
    title: "Roofing Website Design That Books Jobs | Zonic Media",
    description:
      "Roofing website design built as a job acquisition system — instant quote flows, storm damage landing pages, financing UX, and galleries that win the bid.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Roofing Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Roofing Website Design",
  serviceType: "Roofing Company Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom roofing company website design with instant quote request flows, storm damage landing pages, financing and insurance claim pages, and project galleries built to win jobs.",
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
    name: "Roofing Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "New Roofing Company Websites" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Roofing Website Redesigns" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Storm & Service Landing Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instant Quote & Lead Flows",
        },
      },
    ],
  },
};

const RoofingWebFaqs = [
  {
    question: "How much does roofing website design cost?",
    answer:
      "Pricing depends on the size of the build: number of service and city pages, quote flow and financing integrations, and whether content and photography are included. A focused redesign costs considerably less than a large multi-crew, multi-market build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How long does it take to design a roofing website?",
    answer:
      "Most roofing company websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many service-area pages or custom integrations can take longer.",
  },
  {
    question: "Can my website capture storm damage leads?",
    answer:
      "Yes — that is one of the main reasons roofers hire us. We build dedicated storm damage and insurance claim landing pages you can point ads and social posts at within hours of a hail or wind event, with quote forms and click-to-call built for homeowners who need help fast. When the storm hits, your site is ready before your competitors have written their first post.",
  },
  {
    question: "Can you integrate my roofing CRM or quoting software?",
    answer:
      "Yes. We connect the tools roofing companies already run — AccuLynx, JobNimbus, Roofr, CompanyCam galleries — or build a structured quote request flow that routes straight to your office. Either way, homeowners can request an estimate without waiting for business hours.",
  },
  {
    question: "Can you redesign my site without losing my current rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const roofingWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: RoofingWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AboutChecks = [
  "Quote-first layouts",
  "Financing & insurance UX",
  "Project gallery proof",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Roofing Company Websites",
    desc: (
      <>
        Launching or rebranding? We design your site from sitemap to launch —
        quote flows, service pages, and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="rw-inline-link"
        >
          local SEO foundations
        </Link>{" "}
        included from day one.
      </>
    ),
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    title: "Roofing Website Redesigns",
    desc: "Outdated site that never rings the phone? We rebuild it around homeowner conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <FiCloudLightning aria-hidden="true" />,
    title: "Storm & Service Landing Pages",
    desc: "Dedicated pages for roof replacement, roof repair, storm damage, and insurance claims — each built around a single job type and a single action: request a quote.",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "Instant Quote & Lead Flows",
    desc: "AccuLynx, JobNimbus, Roofr, or a clean quote request flow routed to your office — homeowners request an estimate in a few taps, day or night.",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Financing & Insurance Pages",
    desc: "A new roof is a five-figure decision. Clear financing options and plain-English insurance claim guidance answer objections before homeowners ever call.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Roofing verticals designed for" },
  { num: "24/7", label: "Quote requests, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "Instant quote flows",
    desc: "Homeowners request an estimate in a few taps — integrated with the CRM and quoting tools roofing companies already use.",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Financing & insurance UX",
    desc: "Payment options and claim guidance up front, so sticker shock and insurance confusion stop killing your leads.",
  },
  {
    icon: <FiCloudLightning aria-hidden="true" />,
    title: "Storm response pages",
    desc: "Hail and wind damage landing pages ready to catch the surge of searches every storm season brings to your market.",
  },
  {
    icon: <FiImage aria-hidden="true" />,
    title: "Project galleries & reviews",
    desc: "Before-and-after photos and Google reviews placed where hesitant homeowners actually look before they call anyone.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-first design",
    desc: "Most homeowners find a roofer on their phone — every layout starts at 375px, not on a desktop monitor.",
  },
  {
    title: "Click-to-call & quote request",
    desc: "One thumb-tap from any page to a call or an estimate request, always visible, never buried.",
  },
  {
    title: "Google reviews integration",
    desc: "Your best reviews pulled onto the site where cautious homeowners actually read them.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a patience factor.",
  },
  {
    title: "Before & after galleries",
    desc: "Real project photos organized by job type, because homeowners buy the roof they can see.",
  },
  {
    title: "Service area pages",
    desc: "A dedicated page for every city and suburb you work, built to rank for local roofing searches.",
  },
  {
    title: "Local schema markup",
    desc: "Structured data that tells Google exactly who you are, where you work, and what you install.",
  },
  {
    title: "Secure hosting & SSL",
    desc: "Fast, monitored hosting with daily backups — your site stays online and stays yours.",
  },
];

const ProcessSteps = [
  {
    num: "01",
    title: "Discovery & job mix mapping",
    desc: "The jobs you want more of, the cities you work, how your office handles leads today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free homepage mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your market — before you commit to the full project.",
  },
  {
    num: "03",
    title: "Build, content & on-page SEO",
    desc: "Service pages, quote flows, and storm landing pages — every page written around the searches homeowners use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, tracking & growth",
    desc: "Every form tested, every old URL redirected, call and form tracking wired up — then roofing SEO and GBP services keep the pipeline growing.",
  },
];

const BannerFeats = [
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Conversion-First Design",
    desc: "Every layout decision serves one goal: turning visitors into booked estimates.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Built-In Local SEO",
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
    desc: "Every site plugs straight into roofing SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Roofing Website Design",
  "Instant Quotes",
  "Storm Landing Pages",
  "Financing Pages",
  "Project Galleries",
  "Local SEO",
];

const NationwideChips = [
  "Residential Roofing",
  "Commercial Roofing",
  "Metal Roofing",
  "Storm Damage & Restoration",
  "Gutters & Siding",
  "Solar & Specialty Roofing",
  "Multi-Crew Companies",
];

const GrowCards = [
  {
    href: "/services/roofing-marketing-agency",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Roofing Marketing Agency",
    desc: "Ads, SEO, and lead generation built for roofers — the full engine that keeps your crews booked between storms.",
    cta: "Explore roofing marketing",
  },
  {
    href: "/services/industry/local-seo-for-roofing-companies",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local SEO for Roofing Companies",
    desc: "Rank for roof replacement and repair searches across Google Search and Maps in every city you work.",
    cta: "See roofing local SEO",
  },
  {
    href: "/services/gmb-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most homeowners pick a roofer straight from the map pack. We optimize your profile so that roofer is you.",
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
          __html: JSON.stringify(roofingWebFaqJsonLd),
        }}
      />

      <div className="rw-page">
        <main>
        {/* 1. Hero */}
        <section className="rw-hero">
          <div className="rw-container">
            <div className="rw-hero-grid">
              <div className="rw-hero-copy">
                <p className="rw-eyebrow">Roofing Website Design</p>
                <h1 className="rw-hero-h1">
                  Roofing website design that turns visitors into{" "}
                  <span className="rw-hl">booked jobs</span>
                </h1>
                <p className="rw-hero-sub">
                  Zonic Media designs roofing company websites that work like a
                  job acquisition system — instant quote flows, storm damage
                  landing pages, financing and insurance claim UX, and project
                  galleries that win the bid. Our{" "}
                  <Link href="/services/web-design" className="rw-inline-link">
                    website design services
                  </Link>{" "}
                  are built around booked estimates, not another brochure site.
                </p>
                <div className="rw-hero-ctas">
                  <HashScrollLink
                    href="#roofing-web-form"
                    className="rw-btn"
                    offset={120}
                  >
                    Start Your Roofing Website
                  </HashScrollLink>
                  <a href={SITE_CONTACT.phoneHref} className="rw-btn-ghost">
                    <FiPhoneCall aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="rw-hero-stats">
                  <div className="rw-stat">
                    <p className="rw-stat-num">50+</p>
                    <p className="rw-stat-label">
                      Local business sites launched
                    </p>
                  </div>
                  <div className="rw-stat">
                    <p className="rw-stat-num">4.9/5</p>
                    <p className="rw-stat-label">Average client rating</p>
                  </div>
                  <div className="rw-stat">
                    <p className="rw-stat-num">1–2 wks</p>
                    <p className="rw-stat-label">Typical design-to-launch</p>
                  </div>
                </div>
              </div>

              <div className="rw-hero-visual">
                <div className="rw-hero-img">
                  <Image
                    src="/images/roofing-web/hero-image-primary.webp"
                    alt="Roofing contractor presenting his roofing company website on a laptop"
                    fill
                    priority
                    sizes="(max-width: 991px) 100vw, 45vw"
                  />
                </div>
                <div className="rw-hero-badge">
                  <span className="rw-hero-badge-stars" aria-hidden="true">
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
                    className="rw-hero-badge-phone"
                    aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
                  >
                    <FiPhoneCall aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Contact strip (inside hero) */}
            <div className="rw-strip-inner">
              <div className="rw-strip-cell rw-strip-cell-main">
                <span className="rw-strip-icon">
                  <FiPhoneCall aria-hidden="true" />
                </span>
                <p>
                  <span>Planning a new roofing website?</span>
                  <a href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
              <div className="rw-strip-cell">
                <p>
                  <span>Office hours</span>
                  <strong>Mon–Fri, 9:00 AM – 6:00 PM EST</strong>
                </p>
              </div>
              <div className="rw-strip-cell">
                <p>
                  <span>Response time</span>
                  <strong>Within one business day</strong>
                </p>
              </div>
              <HashScrollLink
                href="#roofing-web-form"
                className="rw-btn rw-strip-cta"
                offset={120}
              >
                See what we&apos;d build for you
                <span className="rw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 3. First impressions */}
        <section className="rw-about">
          <div className="rw-container">
            <div className="rw-about-grid">
              <div className="rw-collage">
                <div className="rw-collage-img-1">
                  <Image
                    src="/images/roofing-web/first-impressions-img-1.webp"
                    alt="Roofing crew installing architectural shingles on a residential roof"
                    fill
                    sizes="(max-width: 991px) 80vw, 32vw"
                  />
                </div>
                <div className="rw-collage-img-2">
                  <Image
                    src="/images/roofing-web/first-impressions-img-2.webp"
                    alt="Roofing company website displayed on a desktop monitor in a contractor office"
                    fill
                    sizes="(max-width: 991px) 70vw, 30vw"
                  />
                </div>
                <div className="rw-collage-badge" aria-hidden="true">
                  <svg viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="rwBadgeCircle"
                        d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#rwBadgeCircle">
                        Roofing Web Design • Zonic Media •
                      </textPath>
                    </text>
                  </svg>
                  <span className="rw-collage-badge-icon">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
              <div className="rw-about-copy">
                <p className="rw-eyebrow">First Impressions</p>
                <h2 className="rw-h2">
                  Your website is the{" "}
                  <span className="rw-hl-text">first inspection</span>{" "}
                  homeowners run on your company
                </h2>
                <p className="rw-lead">
                  Before a homeowner ever lets you on their roof, they have
                  already judged your company — on their phone, in about five
                  seconds. They looked for your reviews, scanned your project
                  photos, and tried to figure out how to get a quote. If any of
                  that was slow, confusing, or missing, they tapped the next
                  roofer on the list.
                </p>
                <p className="rw-lead">
                  Great roofing website design closes that gap: it answers the
                  three questions every homeowner has — can I trust you, what
                  will this cost me, and how fast can you get here — and then
                  makes requesting an estimate effortless. It is also the
                  foundation of any wider{" "}
                  <Link
                    href="/services/roofing-marketing-agency"
                    className="rw-inline-link"
                  >
                    roofing marketing
                  </Link>{" "}
                  program you run.
                </p>
                <div className="rw-checks">
                  {AboutChecks.map((check) => (
                    <div className="rw-check" key={check}>
                      <FaCircleCheck aria-hidden="true" />
                      {check}
                    </div>
                  ))}
                </div>
                <Link href="/about" className="rw-btn">
                  More About Zonic Media
                  <span className="rw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What we build — 6 icon cards */}
        <section className="rw-services" id="rw-services">
          <div className="rw-container">
            <div className="rw-sec-head">
              <div>
                <p className="rw-eyebrow">What We Build</p>
                <h2 className="rw-h2">
                  Roofing website design for every stage of your company
                </h2>
              </div>
              <Link href="/services" className="rw-link-arrow">
                View all services <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className="rw-cards">
              {ServiceCards.map((card) => (
                <article className="rw-card" key={card.title}>
                  <span className="rw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Split band */}
        <section className="rw-band">
          <div className="rw-band-grid">
            <div className="rw-band-content">
              <p className="rw-eyebrow">Every Roofing Vertical</p>
              <h2 className="rw-h2">Web design for every kind of roofing</h2>
              <p className="rw-lead">
                Residential replacements, commercial flat roofs, metal
                installers, storm restoration crews, and gutter and siding
                add-ons — we design around your job mix, your service area, and
                the way homeowners in your market actually search. Your site
                should feel like your company, not like a template every
                competitor is also using — and it should be built to rank with{" "}
                <Link
                  href="/services/industry/local-seo-for-roofing-companies"
                  className="rw-inline-link"
                >
                  local SEO for roofing companies
                </Link>{" "}
                from day one.
              </p>
              <div className="rw-band-stats">
                {BandStats.map((stat) => (
                  <div className="rw-band-stat" key={stat.num}>
                    <strong>{stat.num}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <HashScrollLink
                href="#roofing-web-form"
                className="rw-btn"
                offset={120}
              >
                Get a Custom Design Plan
                <span className="rw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
            <div className="rw-band-media">
              <Image
                src="/images/roofing-web/every-roofing-vertical-image.webp"
                alt="Responsive roofing website design shown across desktop and tablet"
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* 6. Job acquisition system */}
        <section className="rw-system">
          <div className="rw-container">
            <div className="rw-sec-head-center">
              <p className="rw-eyebrow">The Job Acquisition System</p>
              <h2 className="rw-h2">
                More than a brochure — a system built to book jobs
              </h2>
              <p className="rw-lead">
                Most roofing websites are digital business cards: a stock photo
                of a roof, a list of services, a contact form nobody fills out.
                We design every site as a working system, where each page has
                one job — moving a homeowner closer to a booked estimate.
              </p>
            </div>
            <div className="rw-feat-cards">
              {SystemCards.map((card) => (
                <article className="rw-feat-card" key={card.title}>
                  <span className="rw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Anatomy of a high-converting roofing website */}
        <section className="rw-anatomy">
          <div className="rw-container">
            <div className="rw-anatomy-grid">
              <div>
                <p className="rw-eyebrow">Built Into Every Site</p>
                <h2 className="rw-h2">
                  The anatomy of a high-converting roofing website
                </h2>
                <p className="rw-lead">
                  The best roofing website design is not about decoration — it
                  is a checklist of things homeowners and search engines both
                  expect. Every website we ship includes all eight, as
                  standard, not as upsells.
                </p>
                <p className="rw-lead">
                  Miss any one of them and you leak jobs: slow pages lose
                  mobile visitors, missing project photos lose trust, and a
                  site without service area pages loses every suburb to the
                  roofer who built them.
                </p>
                <div className="rw-anatomy-cta">
                  <HashScrollLink
                    href="#roofing-web-form"
                    className="rw-btn"
                    offset={120}
                  >
                    Get Every Feature, Standard
                    <span className="rw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div className="rw-anatomy-list">
                {AnatomyItems.map((item) => (
                  <div className="rw-anatomy-item" key={item.title}>
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
        <section className="rw-why">
          <div className="rw-container">
            <div className="rw-sec-head-center">
              <p className="rw-eyebrow">Why Zonic Media</p>
              <h2 className="rw-h2">Designed to convert. Built to rank.</h2>
              <p className="rw-lead">
                A beautiful website that nobody finds is as useless as a
                ranking site that nobody trusts. We build both halves at once,
                so design and search work together from the first wireframe.
              </p>
            </div>
            <div className="rw-why-cards">
              <article className="rw-why-card">
                <span className="rw-why-card-icon">
                  <RiSearchLine aria-hidden="true" />
                </span>
                <h3>A local SEO foundation, not an afterthought</h3>
                <p>
                  Schema markup, keyword-mapped pages, and a structure that
                  plugs straight into{" "}
                  <Link
                    href="/services/industry/local-seo-for-roofing-companies"
                    className="rw-inline-link"
                  >
                    roofing local SEO
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="rw-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  when you are ready to grow.
                </p>
              </article>
              <article className="rw-why-card">
                <span className="rw-why-card-icon">
                  <FiZap aria-hidden="true" />
                </span>
                <h3>Fast on the phones homeowners actually use</h3>
                <p>
                  Mobile-first layouts and Core Web Vitals-friendly builds,
                  because most roofing searches happen on a phone — often
                  standing in the driveway looking up at the damage.
                </p>
              </article>
              <article className="rw-why-card">
                <span className="rw-why-card-icon">
                  <FiShield aria-hidden="true" />
                </span>
                <h3>Trust signals where homeowners look for them</h3>
                <p>
                  License numbers, insurance proof, manufacturer
                  certifications, and warranty details placed in the layout —
                  not buried on an about page nobody reads.
                </p>
              </article>
            </div>
            <div className="rw-why-banner">
              <div className="rw-why-banner-text">
                <p className="rw-eyebrow">Free Strategy Call</p>
                <h3>Not sure what your company actually needs?</h3>
                <p>
                  Tell us your goals and we&apos;ll map the exact pages, quote
                  flows, and local SEO foundations your site needs — no
                  obligation, and no sales script.
                </p>
              </div>
              <div className="rw-why-banner-actions">
                <HashScrollLink
                  href="#roofing-web-form"
                  className="rw-btn"
                  offset={120}
                >
                  Book a Free Strategy Call
                  <span className="rw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </div>
        </section>

        {/* 9. How it works — steps */}
        <section className="rw-process" id="rw-process">
          <div className="rw-container">
            <div className="rw-sec-head">
              <div>
                <p className="rw-eyebrow">How It Works</p>
                <h2 className="rw-h2">
                  From first call to launch in four steps
                </h2>
              </div>
              <HashScrollLink
                href="#roofing-web-form"
                className="rw-link-arrow"
                offset={120}
              >
                Start with step one <FiArrowUpRight aria-hidden="true" />
              </HashScrollLink>
            </div>
            <div className="rw-steps">
              {ProcessSteps.map((step) => (
                <div className="rw-step" key={step.num}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <span className="rw-step-num" aria-hidden="true">
                    {step.num}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Banner (full width) */}
        <section className="rw-banner">
          <div className="rw-banner-grid">
            <div className="rw-banner-copy">
              <p className="rw-eyebrow">Why Roofers Choose Us</p>
              <h2 className="rw-h2">
                Craftsmanship customers can see
              </h2>
              <p className="rw-lead">
                A website built by a team that understands how homeowners
                choose a roofer — and what makes them request a quote instead
                of keep scrolling. If the project touches ads, content, or
                profile work, our{" "}
                <Link href="/services" className="rw-inline-link">
                  full-service marketing
                </Link>{" "}
                team can keep the whole system aligned.
              </p>
              <Link href="/contact-us" className="rw-btn">
                Contact Us
                <span className="rw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </div>
            <div className="rw-banner-media">
              <Image
                src="/images/roofing-web/why-roofers-choose-us-image.webp"
                alt="Roofing contractor holding a tablet that displays a new roofing company website"
                fill
                sizes="(max-width: 1199px) 0px, 30vw"
              />
            </div>
            <div className="rw-banner-feats">
              {BannerFeats.map((feat) => (
                <div className="rw-banner-feat" key={feat.title}>
                  <span className="rw-banner-feat-icon">{feat.icon}</span>
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
        <div className="rw-marquee" aria-hidden="true">
          <div className="rw-marquee-track">
            {[0, 1].map((copy) => (
              <span className="rw-marquee-item" key={copy}>
                {MarqueeItems.map((item) => (
                  <span className="rw-marquee-item" key={item}>
                    {item} <FaStar aria-hidden="true" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* 12. Nationwide */}
        <section className="rw-nationwide">
          <div className="rw-container">
            <div className="rw-sec-head-center">
              <p className="rw-eyebrow">Wherever You Work</p>
              <h2 className="rw-h2">
                Roofing website design services across the United States
              </h2>
              <p className="rw-lead">
                From single-crew startups to multi-market storm restoration
                companies, Zonic Media designs roofing websites for
                contractors in every state. Because everything happens
                remotely — discovery calls, design reviews, launch — you get
                the same process whether you work in Delaware, Texas, or
                Colorado.
              </p>
            </div>
            <div className="rw-chips">
              {NationwideChips.map((chip) => (
                <span className="rw-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="rw-nationwide-cta">
              <HashScrollLink
                href="#roofing-web-form"
                className="rw-btn"
                offset={120}
              >
                Request Your Free Mockup
                <span className="rw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 13. FAQs */}
        <section className="rw-faqs" id="rw-faqs">
          <div className="rw-container">
            <div className="rw-split-grid">
              <div>
                <p className="rw-eyebrow">FAQs</p>
                <h2 className="rw-h2">
                  Everything roofers ask us about website design
                </h2>
                <p className="rw-lead">
                  Straight answers on pricing, timelines, storm season, and
                  what happens to your current rankings. If your question is
                  not here, send it through the form — a strategist answers,
                  not a sales script.
                </p>
                <div className="rw-faq-cta">
                  <HashScrollLink
                    href="#roofing-web-form"
                    className="rw-btn"
                    offset={120}
                  >
                    Ask About Your Project
                    <span className="rw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div>
                <GmbFaqs items={RoofingWebFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* 14. Grow further — internal links */}
        <section className="rw-grow">
          <div className="rw-container">
            <div className="rw-sec-head-center">
              <p className="rw-eyebrow">Grow Further</p>
              <h2 className="rw-h2">
                Your website is step one. Here is what fills it with jobs.
              </h2>
            </div>
            <div className="rw-grow-cards">
              {GrowCards.map((card) => (
                <Link href={card.href} className="rw-grow-card" key={card.href}>
                  <span className="rw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className="rw-grow-link">
                    {card.cta} <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Lead form */}
        <section className="rw-form-sec" id="roofing-web-form">
          <div className="rw-container">
            <div className="rw-form-grid">
              <aside className="rw-form-aside">
                <p className="rw-eyebrow">Get Started</p>
                <h2 className="rw-h2">
                  Book your free roofing website consult
                </h2>
                <p className="rw-lead">
                  Tell us about your company and we will send a custom homepage
                  mockup plus a flat-price quote — free, and yours to keep
                  either way.
                </p>

                <div className="rw-form-contacts">
                  <a href={SITE_CONTACT.emailHref} className="rw-form-contact">
                    <span className="rw-form-contact-icon">
                      <FiMail aria-hidden="true" />
                    </span>
                    <span className="rw-form-contact-txt">
                      <small>Email us anytime</small>
                      <strong>{SITE_CONTACT.email}</strong>
                    </span>
                  </a>
                  <a href={SITE_CONTACT.phoneHref} className="rw-form-contact">
                    <span className="rw-form-contact-icon">
                      <FiPhoneCall aria-hidden="true" />
                    </span>
                    <span className="rw-form-contact-txt">
                      <small>Speak with a strategist</small>
                      <strong>{SITE_CONTACT.phoneDisplay}</strong>
                    </span>
                  </a>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rw-form-contact"
                  >
                    <span className="rw-form-contact-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <span className="rw-form-contact-txt">
                      <small>Visit our office</small>
                      <strong>{SITE_CONTACT.address}</strong>
                    </span>
                  </a>
                </div>
              </aside>
              <div className="rw-form-main">
                <RoofingWebLeadForm />
              </div>
            </div>
          </div>
        </section>
        </main>

        {/* 16. Page footer */}
        <footer className="rw-footer">
          <div className="rw-container">
            <div className="rw-footer-grid">
              <div className="rw-footer-brand">
                <Link href="/" aria-label="Zonic Media — home">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={160}
                    height={44}
                  />
                </Link>
                <p>
                  Zonic Media is a digital growth agency helping roofing
                  companies turn storm-season searches into booked jobs.
                </p>
                <div className="rw-footer-social">
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

              <div className="rw-footer-col">
                <h3>On This Page</h3>
                <ul>
                  <li>
                    <HashScrollLink href="#rw-services" offset={96}>
                      What We Build
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#rw-process" offset={96}>
                      How It Works
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#rw-faqs" offset={96}>
                      FAQs
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#roofing-web-form" offset={120}>
                      Free Mockup
                    </HashScrollLink>
                  </li>
                </ul>
              </div>

              <div className="rw-footer-col">
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

              <div className="rw-footer-col">
                <h3>Talk to Us</h3>
                <ul className="rw-footer-contact">
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

            <div className="rw-footer-bottom">
              <p>
                © {new Date().getFullYear()} Zonic Media LLC. All rights
                reserved.
              </p>
              <div className="rw-footer-legal">
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
