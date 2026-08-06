import type { Metadata } from "next";
import "@/app/style/pestControlWeb.css";
import PestControlWebLeadForm from "@/app/components/PestControlWebLeadForm";
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
  FiLayout,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiRefreshCw,
  FiRepeat,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiLineChartLine, RiPagesLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/pest-control-website-design";

export const metadata: Metadata = {
  title: "Pest Control Website Design That Books Jobs",
  description:
    "Pest control website design built as a lead system — recurring plan signups, pest-specific landing pages, online scheduling, and trust signals that win calls.",
  keywords: [
    "pest control website design",
    "exterminator website design",
    "pest control web design",
    "pest control company website design",
    "websites for pest control companies",
    "pest control website redesign",
    "termite treatment landing page",
    "bed bug exterminator website",
    "recurring pest control plan signups",
    "pest control lead generation website",
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
    title: "Pest Control Website Design That Books Jobs | Zonic Media",
    description:
      "Pest control website design built as a lead system — recurring plan signups, pest-specific landing pages, online scheduling, and trust signals that win calls.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Pest Control Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pest Control Website Design",
  serviceType: "Pest Control Company Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom pest control company website design with recurring plan signup flows, pest-specific landing pages, online scheduling integration, and family-and-pet-safe trust signals.",
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
    name: "Pest Control Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Pest Control Company Websites",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pest Control Website Redesigns",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pest-Specific Landing Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Recurring Plan Signup Flows",
        },
      },
    ],
  },
};

const PestWebFaqs = [
  {
    question: "How Much Does Pest Control Website Design Cost?",
    answer:
      "Pricing depends on the size of the build: number of pest and city pages, scheduling and plan-signup integrations, and whether content and photography are included. A focused redesign costs considerably less than a large multi-branch build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How Long Does It Take to Design a Pest Control Website?",
    answer:
      "Most pest control websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many pest or service-area pages can take longer.",
  },
  {
    question: "Can My Website Sell Recurring Service Plans?",
    answer:
      "Yes — recurring plans are where we focus, because ongoing service makes up around 85% of residential pest control revenue. We build plan comparison pages, clear quarterly and monthly pricing presentation, and signup flows that turn a one-time bed bug emergency into a year-round customer your business can count on.",
  },
  {
    question: "Can You Integrate My Pest Control Software?",
    answer:
      "Yes. We connect the tools pest control companies already run — FieldRoutes, PestPac, GorillaDesk, Jobber — or build a structured scheduling request flow that routes straight to your office. Either way, customers can request service without waiting for business hours.",
  },
  {
    question: "Can You Redesign My Site Without Losing My Current Rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const pestWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PestWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AboutChecks = [
  "Recurring Plan Signups",
  "Pest-specific pages",
  "Family & pet safe messaging",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Pest Control Websites",
    desc: (
      <>
        Launching or rebranding? We design your site from sitemap to launch —
        plan signups, pest pages, and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="pc-inline-link"
        >
          local SEO foundations
        </Link>{" "}
        included from day one.
      </>
    ),
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    title: "Pest Control Website Redesigns",
    desc: "Outdated site that never rings the phone? We rebuild it around homeowner conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Pest-Specific Landing Pages",
    desc: "Dedicated pages for termites, bed bugs, rodents, mosquitoes, and ants — each built around a single pest and a single action: schedule service.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Scheduling Integration",
    desc: "FieldRoutes, PestPac, GorillaDesk, or a clean scheduling request flow routed to your office — customers book service in a few taps, day or night.",
  },
  {
    icon: <FiRepeat aria-hidden="true" />,
    title: "Recurring Plan & Pricing Pages",
    desc: "Plan comparisons, quarterly pricing, and signup flows that turn one-time emergencies into the recurring revenue your business runs on.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Pest service lines designed for" },
  { num: "24/7", label: "Online scheduling, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <FiRepeat aria-hidden="true" />,
    title: "Recurring Plan Signups",
    desc: "Plan pages and signup flows that turn a one-time treatment into quarterly service — the revenue pest control runs on.",
  },
  {
    icon: <FiPhoneCall aria-hidden="true" />,
    title: "Emergency Pest UX",
    desc: "A found-bed-bugs-tonight visitor decides in minutes. Click-to-call and same-day CTAs stay one thumb-tap away on every page.",
  },
  {
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Pest-Specific Landing Pages",
    desc: "Termites, bed bugs, rodents, mosquitoes — each pest gets its own page built to rank for the searches homeowners actually type.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Family & Pet Safe Trust",
    desc: "Licensing, safety messaging, and guarantees placed where worried homeowners look before they let anyone spray their home.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-First Design",
    desc: "Most homeowners search for pest control on their phone — every layout starts at 375px, not on a desktop monitor.",
  },
  {
    title: "Click-to-Call & Tap-to-Schedule",
    desc: "One thumb-tap from any page to a call or a service request, always visible, never buried.",
  },
  {
    title: "Google Reviews Integration",
    desc: "Your best reviews pulled onto the site where worried homeowners actually read them.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a patience factor.",
  },
  {
    title: "Service Area Pages",
    desc: "A dedicated page for every city and suburb you serve, built to rank for local exterminator searches.",
  },
  {
    title: "Seasonal Pest Content",
    desc: "Ant season, mosquito season, rodent season — content mapped to the pests your market searches each quarter.",
  },
  {
    title: "Local Schema Markup",
    desc: "Structured data that tells Google exactly who you are, where you work, and what you treat.",
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
    desc: "The jobs and plans you want more of, the cities you serve, how your office schedules today, and who outranks you — mapped into the pages your site needs.",
  },
  {
    num: "02",
    title: "Free Homepage Mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your market — before you commit to the full project.",
  },
  {
    num: "03",
    title: "Build, Content & on-Page SEO",
    desc: "Pest pages, plan signups, and scheduling integration — every page written around the searches homeowners use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, Tracking & Growth",
    desc: "Every form tested, every old URL redirected, call and form tracking wired up — then pest control SEO and GBP services keep the pipeline growing.",
  },
];

const BannerFeats = [
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Conversion-First Design",
    desc: "Every layout decision serves one goal: turning visitors into scheduled service.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Built-in Local SEO",
    desc: "Schema, keyword-mapped pages, and fast Core Web Vitals from day one.",
  },
  {
    icon: <FiRepeat aria-hidden="true" />,
    title: "Recurring-Revenue Focus",
    desc: "Plan pages and signup flows built around the quarterly service model.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Growth-Ready Foundation",
    desc: "Every site plugs straight into pest control SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Pest Control Website Design",
  "Recurring Plans",
  "Pest Landing Pages",
  "Online Scheduling",
  "Trust & Safety",
  "Local SEO",
];

const NationwideChips = [
  "General Pest Control",
  "Termite Treatment",
  "Bed Bug Extermination",
  "Rodent Removal",
  "Mosquito Control",
  "Wildlife & Exclusion",
  "Commercial Accounts",
];

const GrowCards = [
  {
    href: "/services/pest-control-marketing-agency",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Pest Control Marketing Agency",
    desc: "Ads, SEO, and lead generation built for pest control — the full engine that keeps your routes full in every season.",
    cta: "Explore pest control marketing",
  },
  {
    href: "/services/industry/seo-services-for-pest-control",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "SEO Services for Pest Control",
    desc: "Rank for exterminator and pest-specific searches across Google Search and Maps in every city you serve.",
    cta: "See pest control SEO",
  },
  {
    href: "/services/gmb-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most homeowners pick an exterminator straight from the map pack. We optimize your profile so that company is you.",
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
          __html: JSON.stringify(pestWebFaqJsonLd),
        }}
      />

      <div className="pc-page">
        <main>
        {/* 1. Hero */}
        <section className="pc-hero">
          <div className="pc-container">
            <div className="pc-hero-grid">
              <div className="pc-hero-copy">
                <p className="pc-eyebrow">Pest Control Website Design</p>
                <h1 className="pc-hero-h1">
                  Pest Control Website Design That Turns Panic Searches into{" "}
                  <span className="pc-hl">Scheduled Service</span>
                </h1>
                <p className="pc-hero-sub">
                  Zonic Media designs pest control websites that work like a
                  lead system — recurring plan signups, pest-specific landing
                  pages, online scheduling, and family-and-pet-safe trust
                  signals that win the call. Our{" "}
                  <Link href="/services/web-design" className="pc-inline-link">
                    website design services
                  </Link>{" "}
                  are built around scheduled jobs, not another brochure site.
                </p>
                <div className="pc-hero-ctas">
                  <HashScrollLink
                    href="#pest-web-form"
                    className="pc-btn"
                    offset={120}
                  >
                    Start Your Pest Control Website
                  </HashScrollLink>
                  <a href={SITE_CONTACT.phoneHref} className="pc-btn-ghost">
                    <FiPhoneCall aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="pc-hero-stats">
                  <div className="pc-stat">
                    <p className="pc-stat-num">50+</p>
                    <p className="pc-stat-label">
                      Local business sites launched
                    </p>
                  </div>
                  <div className="pc-stat">
                    <p className="pc-stat-num">4.9/5</p>
                    <p className="pc-stat-label">Average client rating</p>
                  </div>
                  <div className="pc-stat">
                    <p className="pc-stat-num">1–2 wks</p>
                    <p className="pc-stat-label">Typical design-to-launch</p>
                  </div>
                </div>
              </div>

              <div className="pc-hero-visual">
                <div className="pc-hero-img">
                  <Image
                    src="/images/pest-control-web/hero-image-primary-v2.webp"
                    alt="Pest control business owner reviewing his company website on a laptop beside a service van"
                    fill
                    priority
                    sizes="(max-width: 991px) 100vw, 45vw"
                  />
                </div>
                <div className="pc-hero-badge">
                  <span className="pc-hero-badge-stars" aria-hidden="true">
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
                    className="pc-hero-badge-phone"
                    aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
                  >
                    <FiPhoneCall aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Contact strip (inside hero) */}
            <div className="pc-strip-inner">
              <div className="pc-strip-cell pc-strip-cell-main">
                <span className="pc-strip-icon">
                  <FiPhoneCall aria-hidden="true" />
                </span>
                <p>
                  <span>Planning a new pest control website?</span>
                  <a href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
              <div className="pc-strip-cell">
                <p>
                  <span>Office hours</span>
                  <strong>Mon–Fri, 9:00 AM – 6:00 PM EST</strong>
                </p>
              </div>
              <div className="pc-strip-cell">
                <p>
                  <span>Response time</span>
                  <strong>Within one business day</strong>
                </p>
              </div>
              <HashScrollLink
                href="#pest-web-form"
                className="pc-btn pc-strip-cta"
                offset={120}
              >
                See what we&apos;d build for you
                <span className="pc-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 3. First impressions */}
        <section className="pc-about">
          <div className="pc-container">
            <div className="pc-about-grid">
              <div className="pc-collage">
                <div className="pc-collage-img-1">
                  <Image
                    src="/images/pest-control-web/first-impressions-img-1.webp"
                    alt="Pest control technician applying a targeted exterior treatment around a family home"
                    fill
                    sizes="(max-width: 991px) 80vw, 32vw"
                  />
                </div>
                <div className="pc-collage-img-2">
                  <Image
                    src="/images/pest-control-web/first-impressions-img-2.webp"
                    alt="Pest control company website displayed on a desktop monitor"
                    fill
                    sizes="(max-width: 991px) 70vw, 30vw"
                  />
                </div>
                <div className="pc-collage-badge" aria-hidden="true">
                  <svg viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="pcBadgeCircle"
                        d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#pcBadgeCircle">
                        Pest Control Web Design • Zonic Media •
                      </textPath>
                    </text>
                  </svg>
                  <span className="pc-collage-badge-icon">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
              <div className="pc-about-copy">
                <p className="pc-eyebrow">First Impressions</p>
                <h2 className="pc-h2">
                  Three Kinds of Visitors.{" "}
                  <span className="pc-hl-text">One Website</span> Has to Win
                  Them All.
                </h2>
                <p className="pc-lead">
                  A pest control website serves three completely different
                  buyers at once: the panic search (“bed bug exterminator
                  near me, tonight”), the seasonal search (“mosquito control
                  before the party”), and the subscription search (“quarterly
                  pest plan cost”). Most sites are built for none of them —
                  one generic services list and a contact form.
                </p>
                <p className="pc-lead">
                  Great pest control website design gives each visitor a
                  clear path: emergency callers get click-to-call, seasonal
                  shoppers get pest-specific pages, and plan buyers get
                  pricing and signup flows. It is also the foundation of any
                  wider{" "}
                  <Link
                    href="/services/pest-control-marketing-agency"
                    className="pc-inline-link"
                  >
                    pest control marketing
                  </Link>{" "}
                  program you run.
                </p>
                <div className="pc-checks">
                  {AboutChecks.map((check) => (
                    <div className="pc-check" key={check}>
                      <FaCircleCheck aria-hidden="true" />
                      {check}
                    </div>
                  ))}
                </div>
                <Link href="/about" className="pc-btn">
                  More About Zonic Media
                  <span className="pc-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What we build — 6 icon cards */}
        <section className="pc-services" id="pc-services">
          <div className="pc-container">
            <div className="pc-sec-head">
              <div>
                <p className="pc-eyebrow">What We Build</p>
                <h2 className="pc-h2">
                  Pest Control Website Design for Every Stage of Your Company
                </h2>
              </div>
              <Link href="/services" className="pc-link-arrow">
                View all services <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className="pc-cards">
              {ServiceCards.map((card) => (
                <article className="pc-card" key={card.title}>
                  <span className="pc-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Split band */}
        <section className="pc-band">
          <div className="pc-band-grid">
            <div className="pc-band-content">
              <p className="pc-eyebrow">Every Service Line</p>
              <h2 className="pc-h2">
                Web Design for Every Pest You Treat
              </h2>
              <p className="pc-lead">
                General pest, termites, bed bugs, rodents, mosquitoes,
                wildlife, and commercial accounts — we design around your
                service mix, your seasons, and the way homeowners in your
                market actually search. Your site should feel like your
                company, not like a template every competitor is also using —
                and it should be built to rank with{" "}
                <Link
                  href="/services/industry/seo-services-for-pest-control"
                  className="pc-inline-link"
                >
                  SEO for pest control
                </Link>{" "}
                from day one.
              </p>
              <div className="pc-band-stats">
                {BandStats.map((stat) => (
                  <div className="pc-band-stat" key={stat.num}>
                    <strong>{stat.num}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <HashScrollLink
                href="#pest-web-form"
                className="pc-btn"
                offset={120}
              >
                Get a Custom Design Plan
                <span className="pc-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
            <div className="pc-band-media">
              <Image
                src="/images/pest-control-web/every-service-line-image.webp"
                alt="Responsive pest control website design shown across desktop and tablet"
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* 6. Lead system */}
        <section className="pc-system">
          <div className="pc-container">
            <div className="pc-sec-head-center">
              <p className="pc-eyebrow">The Recurring Revenue System</p>
              <h2 className="pc-h2">
                More Than a Brochure — A System Built to Fill Routes
              </h2>
              <p className="pc-lead">
                Most pest control websites are digital business cards: a
                stock photo of a sprayer, a list of pests, a contact form
                nobody fills out. We design every site as a working system,
                where each page has one job — moving a homeowner closer to
                scheduled service or a plan signup.
              </p>
            </div>
            <div className="pc-feat-cards">
              {SystemCards.map((card) => (
                <article className="pc-feat-card" key={card.title}>
                  <span className="pc-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Anatomy of a high-converting pest control website */}
        <section className="pc-anatomy">
          <div className="pc-container">
            <div className="pc-anatomy-grid">
              <div>
                <p className="pc-eyebrow">Built Into Every Site</p>
                <h2 className="pc-h2">
                  The Anatomy of a High-Converting Pest Control Website
                </h2>
                <p className="pc-lead">
                  The best pest control website design is not about
                  decoration — it is a checklist of things homeowners and
                  search engines both expect. Every website we ship includes
                  all eight, as standard, not as upsells.
                </p>
                <p className="pc-lead">
                  Miss any one of them and you leak jobs: slow pages lose
                  panicked visitors, missing safety messaging loses worried
                  parents, and a site without pest-specific pages loses every
                  termite and bed bug search to the company that built them.
                </p>
                <div className="pc-anatomy-cta">
                  <HashScrollLink
                    href="#pest-web-form"
                    className="pc-btn"
                    offset={120}
                  >
                    Get Every Feature, Standard
                    <span className="pc-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div className="pc-anatomy-list">
                {AnatomyItems.map((item) => (
                  <div className="pc-anatomy-item" key={item.title}>
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
        <section className="pc-why">
          <div className="pc-container">
            <div className="pc-sec-head-center">
              <p className="pc-eyebrow">Why Zonic Media</p>
              <h2 className="pc-h2">Designed to Convert. Built to Rank.</h2>
              <p className="pc-lead">
                A beautiful website that nobody finds is as useless as a
                ranking site that nobody trusts. We build both halves at
                once, so design and search work together from the first
                wireframe.
              </p>
            </div>
            <div className="pc-why-cards">
              <article className="pc-why-card">
                <span className="pc-why-card-icon">
                  <RiSearchLine aria-hidden="true" />
                </span>
                <h3>A Local SEO Foundation, Not an Afterthought</h3>
                <p>
                  Schema markup, keyword-mapped pages, and a structure that
                  plugs straight into{" "}
                  <Link
                    href="/services/google-ads"
                    className="pc-inline-link"
                  >
                    Google Ads management
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="pc-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  when you are ready to grow.
                </p>
              </article>
              <article className="pc-why-card">
                <span className="pc-why-card-icon">
                  <FiRepeat aria-hidden="true" />
                </span>
                <h3>Built Around Recurring Revenue</h3>
                <p>
                  Roughly 85% of residential pest control revenue is
                  recurring service. Your plan pages, pricing, and signup
                  flows get the same design attention most agencies spend on
                  the homepage.
                </p>
              </article>
              <article className="pc-why-card">
                <span className="pc-why-card-icon">
                  <FiShield aria-hidden="true" />
                </span>
                <h3>Trust Signals Where Homeowners Look for Them</h3>
                <p>
                  Licensing, family-and-pet-safe messaging, and guarantees
                  placed in the layout — not buried on an about page nobody
                  reads — because nobody lets a stranger spray their home
                  without checking.
                </p>
              </article>
            </div>
            <div className="pc-why-banner">
              <div className="pc-why-banner-text">
                <p className="pc-eyebrow">Free Strategy Call</p>
                <h3>Not Sure What Your Company Actually Needs?</h3>
                <p>
                  Tell us your goals and we&apos;ll map the exact pages, plan
                  flows, and local SEO foundations your site needs — no
                  obligation, and no sales script.
                </p>
              </div>
              <div className="pc-why-banner-actions">
                <HashScrollLink
                  href="#pest-web-form"
                  className="pc-btn"
                  offset={120}
                >
                  Book a Free Strategy Call
                  <span className="pc-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </div>
        </section>

        {/* 9. How it works — steps */}
        <section className="pc-process" id="pc-process">
          <div className="pc-container">
            <div className="pc-sec-head">
              <div>
                <p className="pc-eyebrow">How It Works</p>
                <h2 className="pc-h2">
                  From First Call to Launch in Four Steps
                </h2>
              </div>
              <HashScrollLink
                href="#pest-web-form"
                className="pc-link-arrow"
                offset={120}
              >
                Start with step one <FiArrowUpRight aria-hidden="true" />
              </HashScrollLink>
            </div>
            <div className="pc-steps">
              {ProcessSteps.map((step) => (
                <div className="pc-step" key={step.num}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <span className="pc-step-num" aria-hidden="true">
                    {step.num}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Banner (full width) */}
        <section className="pc-banner">
          <div className="pc-banner-grid">
            <div className="pc-banner-copy">
              <p className="pc-eyebrow">Why Pest Control Companies Choose Us</p>
              <h2 className="pc-h2">Protection Customers Can See</h2>
              <p className="pc-lead">
                A website built by a team that understands how homeowners
                choose an exterminator — and what makes them schedule instead
                of keep scrolling. If the project touches ads, content, or
                profile work, our{" "}
                <Link href="/services" className="pc-inline-link">
                  full-service marketing
                </Link>{" "}
                team can keep the whole system aligned.
              </p>
              <Link href="/contact-us" className="pc-btn">
                Contact Us
                <span className="pc-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </div>
            <div className="pc-banner-media">
              <ServiceSiteMockup
                prefix="pc"
                brand="GuardPest"
                url="guardpest.com"
                headline="Pest-free, guaranteed."
                primaryCta="Get Free Inspection"
                chips={["Ants", "Termites", "Rodents"]}
                toastTitle="New inspection request"
              />
            </div>
            <div className="pc-banner-feats">
              {BannerFeats.map((feat) => (
                <div className="pc-banner-feat" key={feat.title}>
                  <span className="pc-banner-feat-icon">{feat.icon}</span>
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
        <div className="pc-marquee" aria-hidden="true">
          <div className="pc-marquee-track">
            {[0, 1].map((copy) => (
              <span className="pc-marquee-item" key={copy}>
                {MarqueeItems.map((item) => (
                  <span className="pc-marquee-item" key={item}>
                    {item} <FaStar aria-hidden="true" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* 12. Nationwide */}
        <section className="pc-nationwide">
          <div className="pc-container">
            <div className="pc-sec-head-center">
              <p className="pc-eyebrow">Wherever You Work</p>
              <h2 className="pc-h2">
                Pest Control Website Design Services Across the United States
              </h2>
              <p className="pc-lead">
                From single-route startups to multi-branch companies, Zonic
                Media designs pest control websites for operators in every
                state. Because everything happens remotely — discovery calls,
                design reviews, launch — you get the same process whether you
                work in Delaware, Florida, or Arizona.
              </p>
            </div>
            <div className="pc-chips">
              {NationwideChips.map((chip) => (
                <span className="pc-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="pc-nationwide-cta">
              <HashScrollLink
                href="#pest-web-form"
                className="pc-btn"
                offset={120}
              >
                Request Your Free Mockup
                <span className="pc-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 13. FAQs */}
        <section className="pc-faqs" id="pc-faqs">
          <div className="pc-container">
            <div className="pc-split-grid">
              <div>
                <p className="pc-eyebrow">FAQs</p>
                <h2 className="pc-h2">
                  Everything Pest Control Companies Ask Us About Website
                  Design
                </h2>
                <p className="pc-lead">
                  Straight answers on pricing, timelines, recurring plans,
                  and what happens to your current rankings. If your question
                  is not here, or Google has suspended your listing and you need{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="pc-inline-link"
                  >
                    GMB reinstatement service
                  </Link>, send it through the form — a strategist
                  answers, not a sales script.
                </p>
                <div className="pc-faq-cta">
                  <HashScrollLink
                    href="#pest-web-form"
                    className="pc-btn"
                    offset={120}
                  >
                    Ask About Your Project
                    <span className="pc-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div>
                <GmbFaqs items={PestWebFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* 14. Grow further — internal links */}
        <section className="pc-grow">
          <div className="pc-container">
            <div className="pc-sec-head-center">
              <p className="pc-eyebrow">Grow Further</p>
              <h2 className="pc-h2">
                Your Website is Step One. Here is What Fills Your Routes.
              </h2>
            </div>
            <div className="pc-grow-cards">
              {GrowCards.map((card) => (
                <Link href={card.href} className="pc-grow-card" key={card.href}>
                  <span className="pc-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className="pc-grow-link">
                    {card.cta} <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Lead form */}
        <section className="pc-form-sec" id="pest-web-form">
          <div className="pc-container">
            <div className="pc-form-grid">
              <aside className="pc-form-aside">
                <p className="pc-eyebrow">Get Started</p>
                <h2 className="pc-h2">
                  Book Your Free Pest Control Website Consult
                </h2>
                <p className="pc-lead">
                  Tell us about your company and we will send a custom
                  homepage mockup plus a flat-price quote — free, and yours
                  to keep either way.
                </p>

                <div className="pc-form-contacts">
                  <a href={SITE_CONTACT.emailHref} className="pc-form-contact">
                    <span className="pc-form-contact-icon">
                      <FiMail aria-hidden="true" />
                    </span>
                    <span className="pc-form-contact-txt">
                      <small>Email us anytime</small>
                      <strong>{SITE_CONTACT.email}</strong>
                    </span>
                  </a>
                  <a href={SITE_CONTACT.phoneHref} className="pc-form-contact">
                    <span className="pc-form-contact-icon">
                      <FiPhoneCall aria-hidden="true" />
                    </span>
                    <span className="pc-form-contact-txt">
                      <small>Speak with a strategist</small>
                      <strong>{SITE_CONTACT.phoneDisplay}</strong>
                    </span>
                  </a>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pc-form-contact"
                  >
                    <span className="pc-form-contact-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <span className="pc-form-contact-txt">
                      <small>Visit our office</small>
                      <strong>{SITE_CONTACT.address}</strong>
                    </span>
                  </a>
                </div>
              </aside>
              <div className="pc-form-main">
                <PestControlWebLeadForm />
              </div>
            </div>
          </div>
        </section>
        </main>

        {/* 16. Page footer */}
        <footer className="pc-footer">
          <div className="pc-container">
            <div className="pc-footer-grid">
              <div className="pc-footer-brand">
                <Link href="/" aria-label="Zonic Media — home">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={160}
                    height={44}
                  />
                </Link>
                <p>
                  Zonic Media is a digital growth agency helping pest control
                  companies turn panic searches into scheduled service.
                </p>
                <div className="pc-footer-social">
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

              <div className="pc-footer-col">
                <h3>On This Page</h3>
                <ul>
                  <li>
                    <HashScrollLink href="#pc-services" offset={96}>
                      What We Build
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#pc-process" offset={96}>
                      How It Works
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#pc-faqs" offset={96}>
                      FAQs
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#pest-web-form" offset={120}>
                      Free Mockup
                    </HashScrollLink>
                  </li>
                </ul>
              </div>

              <div className="pc-footer-col">
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

              <div className="pc-footer-col">
                <h3>Talk to Us</h3>
                <ul className="pc-footer-contact">
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

            <div className="pc-footer-bottom">
              <p>
                © {new Date().getFullYear()} Zonic Media LLC. All rights
                reserved.
              </p>
              <div className="pc-footer-legal">
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
