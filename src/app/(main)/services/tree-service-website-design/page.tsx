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
  FiClock,
  FiDollarSign,
  FiImage,
  FiLayout,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiRefreshCw,
  FiScissors,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { RiLineChartLine, RiPagesLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/tree-service-website-design";

export const metadata: Metadata = {
  title: { absolute: "Tree Service Website Design | Sites That Book Removals" },
  description:
    "Tree service website design for arborists and tree removal companies: emergency removal pages, trimming and stump grinding services, service-area pages.",
  keywords: [
    "tree service website design",
    "tree service web design",
    "tree removal website design",
    "arborist website design",
    "tree service digital marketing",
    "tree service marketing agency",
    "tree service advertising ideas",
    "tree service companies",
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
    title: "Tree Service Website Design That Books Jobs | Zonic Media",
    description:
      "Tree service website design for arborists and tree removal companies: emergency removal pages, trimming and stump grinding services, service-area pages.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Tree Service Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tree Service Website Design",
  serviceType: "Tree Service Company Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom tree service company website design with emergency removal pages, instant quote request flows, before-and-after galleries, and service-area pages built to book removals, trimming, and stump grinding.",
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
    name: "Tree Service Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Tree Service Websites",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tree Service Website Redesigns",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Removal & Service Landing Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Quote & Estimate Flows",
        },
      },
    ],
  },
};

const TreeWebFaqs = [
  {
    question: "How Much Does Tree Service Website Design Cost?",
    answer:
      "Pricing depends on the size of the build: number of service and city pages, quote integrations, gallery volume, and whether content and photography are included. A focused redesign costs considerably less than a large multi-crew, multi-market build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How Long Does It Take to Design a Tree Service Website?",
    answer:
      "Most tree service websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many service-area pages or custom integrations can take longer.",
  },
  {
    question: "Can My Website Capture Emergency Storm Removal Leads?",
    answer:
      "Yes — a tree on a roof is an emergency, and those searches convert fast. We build dedicated emergency and storm-damage pages with click-to-call up top and a short quote form, so a homeowner with a fallen tree reaches you in one tap instead of the next crew on the list.",
  },
  {
    question: "Can You Integrate My CRM or Estimating Software?",
    answer:
      "Yes. We connect the tools tree companies already run — Jobber, Arborgold, SingleOps, or a structured quote request flow that routes straight to your office. Either way, homeowners can request an estimate without waiting for business hours.",
  },
  {
    question: "Can You Redesign My Site Without Losing My Current Rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
  {
    question: "How does a tree service website capture both emergency and planned jobs?",
    answer:
      "With two front doors. An emergency removal page with a tap-to-call button and storm-damage messaging captures the urgent searches after a storm, while trimming, stump grinding, and tree health pages with galleries and price ranges capture the planned work. Certification and insurance details build trust for both. Zonic Media builds tree service sites on that structure and tracks calls by page.",
  },
];

const treeWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: TreeWebFaqs.map((faq) => ({
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
  "Emergency removal UX",
  "Before-and-After Galleries",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Tree Service Websites",
    desc: (
      <>
        Launching or rebranding? We design your site from sitemap to launch —
        quote flows, service pages, and{" "}
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
    title: "Tree Service Redesigns",
    desc: "Dated site that never rings the phone? We rebuild it around homeowner conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <FiScissors aria-hidden="true" />,
    title: "Removal & Service Landing Pages",
    desc: "Dedicated pages for tree removal, trimming and pruning, stump grinding, and emergency storm work — each built around one job and one action: request an estimate.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Quote & Estimate Flows",
    desc: "Jobber, Arborgold, SingleOps, or a clean estimate request flow routed to your office — homeowners request a quote in a few taps, day or night.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Safety & Insurance Pages",
    desc: "Certifications, insurance proof, and safety credentials up front — the trust signals homeowners need before they let a crew near their house.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Tree services designed for" },
  { num: "24/7", label: "Quote requests, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <FiClock aria-hidden="true" />,
    title: "Emergency Response Pages",
    desc: "Storm-damage and emergency removal pages with click-to-call up top, built to catch the homeowner with a tree on the roof right now.",
  },
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "Instant Quote Flows",
    desc: "Homeowners request an estimate in a few taps — integrated with the CRM and estimating tools tree companies already use.",
  },
  {
    icon: <FiImage aria-hidden="true" />,
    title: "Before-and-After Galleries",
    desc: "Filterable project photos organized by job type, placed where hesitant homeowners actually decide whether your crew is worth the call.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Safety & Trust UX",
    desc: "Insurance proof, certifications, and reviews placed up front, so homeowners trust your crew before a saw ever starts.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-First Design",
    desc: "Most homeowners find a tree company on their phone — every layout starts at 375px, not on a desktop monitor.",
  },
  {
    title: "Click-to-Call & Quote Request",
    desc: "One thumb-tap from any page to a call or an estimate request, always visible, never buried.",
  },
  {
    title: "Google Reviews Integration",
    desc: "Your best reviews pulled onto the site where cautious homeowners actually read them before booking a crew.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a patience factor.",
  },
  {
    title: "Before & After Galleries",
    desc: "Real project photos organized by job, because homeowners buy the clean, safe yard they can already picture.",
  },
  {
    title: "Service Area Pages",
    desc: "A dedicated page for every city and suburb you cover, built to rank for local tree service searches.",
  },
  {
    title: "Local Schema Markup",
    desc: "Structured data that tells Google exactly who you are, where you work, and what you remove and trim.",
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
    desc: "The jobs you want more of, the cities you cover, how your office handles leads today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free Homepage Mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your market — before you commit to the full build.",
  },
  {
    num: "03",
    title: "Build, Content & on-Page SEO",
    desc: "Service pages, quote flows, and emergency landing pages — every page written around the searches homeowners use, with schema and fast load times baked in.",
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
    desc: "Every layout decision serves one goal: turning visitors into booked estimates.",
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
    desc: "Every site plugs straight into local SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Tree Service Web Design",
  "Instant Quotes",
  "Emergency Removal Pages",
  "Before & After Galleries",
  "Google Reviews",
  "Local SEO",
];

const NationwideChips = [
  "Tree Removal",
  "Trimming & Pruning",
  "Stump Grinding",
  "Emergency Storm Work",
  "Land Clearing",
  "Commercial Tree Care",
  "Multi-Crew Companies",
];

const GrowCards = [
  {
    href: "/services/industry/local-seo-for-tree-service-companies",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local SEO for Tree Service Companies",
    desc: "Rank for tree removal, trimming, and stump grinding searches across Google Search and Maps in every city you cover.",
    cta: "See tree service SEO",
  },
  {
    href: "/local-seo-google-business-optimization",
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most tree jobs start in the map pack. We optimize your profile so that crew is yours.",
    cta: "Optimize your profile",
  },
  {
    href: "/services/local-seo-for-home-services",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Local SEO for Home Services",
    desc: "Citations, reviews, and local landing pages that make your company the obvious choice in every nearby search.",
    cta: "Explore local SEO",
  },
];

const formVariant = {
  formType: "tree-service-website-design",
  headline: "Get Your Free Homepage Mockup",
  subcopy:
    "See what your tree service company's new website could look like before you spend a dollar — delivered within about a week.",
  namePlaceholder: "Jake Foster",
  companyLabel: "Company name",
  companyPlaceholder: "Summit Tree Care",
  cityPlaceholder: "Dover, DE",
  emailPlaceholder: "jake@summittreecare.com",
  messagePlaceholder:
    "Tell us about your company, your current website, or the work you want more of — removal, trimming, stump grinding, storm work...",
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
          __html: JSON.stringify(treeWebFaqJsonLd),
        }}
      />

      <div className="hiw-page hiw-theme-tree">
        <main>
          {/* 1. Hero */}
          <section className="hiw-hero">
            <div className="hiw-container">
              <div className="hiw-hero-grid">
                <div className="hiw-hero-copy">
                  <p className="hiw-eyebrow">Tree Service Website Design</p>
                  <h1 className="hiw-hero-h1">
                    Tree Service Website Design That Turns Visitors into{" "}
                    <span className="hiw-hl">Booked Jobs</span>
                  </h1>
                  <p className="hiw-hero-sub">
                    Zonic Media designs tree service websites that work like a
                    lead system — emergency removal pages, instant quote flows,
                    before-and-after galleries, and design that books removals and
                    trimming. Our{" "}
                    <Link href="/services/web-design" className="hiw-inline-link">
                      website design services
                    </Link>{" "}
                    are built around booked estimates, not another brochure site.
                  </p>
                  <div className="hiw-hero-ctas">
                    <HashScrollLink
                      href="#hiw-form"
                      className="hiw-btn"
                      offset={120}
                    >
                      Start Your Tree Service Website
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
                      src="/images/home-improvement-web/tree-service-hero.webp"
                      alt="Arborist reviewing the Canopy Pro website beneath mature trees"
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
                    <span>Planning a new tree service website?</span>
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
                      src="/images/home-improvement-web/tree-service-first-impressions-1.webp"
                      alt="Arborist directing a controlled tree removal from a secured work zone"
                      fill
                      sizes="(max-width: 991px) 80vw, 32vw"
                    />
                  </div>
                  <div className="hiw-collage-img-2">
                    <Image
                      src="/images/home-improvement-web/tree-service-first-impressions-2.webp"
                      alt="Canopy Pro Tree Care website displayed on a desktop monitor"
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
                          Tree Service Web Design • Zonic Media •
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
                    <span className="hiw-hl-text">First Estimate</span>{" "}
                    Homeowners Run on Your Crew
                  </h2>
                  <p className="hiw-lead">
                    Before a homeowner ever lets a crew near their house, they
                    have already judged your company — on their phone, in about
                    five seconds. They looked for your reviews, checked that you
                    are insured, and scanned photos of your work. If any of that
                    was slow, confusing, or missing, they tapped the next tree
                    company on the list.
                  </p>
                  <p className="hiw-lead">
                    Great tree service website design closes that gap: it answers
                    the three questions every homeowner has — are you insured, can
                    I trust your crew, and how fast can you get here — and then
                    makes requesting an estimate effortless. It is also the
                    foundation of any wider{" "}
                    <Link
                      href="/services/industry/local-seo-for-tree-service-companies"
                      className="hiw-inline-link"
                    >
                      tree service SEO
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
                    Tree Service Website Design for Every Stage of Your Company
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
                <p className="hiw-eyebrow">Every Service Type</p>
                <h2 className="hiw-h2">
                  Web Design for Every Kind of Tree Work
                </h2>
                <p className="hiw-lead">
                  Tree removal, trimming and pruning, stump grinding, emergency
                  storm work, and land clearing — we design around your service
                  mix, your area, and the way homeowners in your market actually
                  search. Your site should feel like your company, not like a
                  template every competitor is also using — and it should be built
                  to rank, with{" "}
                  <Link
                    href="/services/gmb-verification-help"
                    className="hiw-inline-link"
                  >
                    Google Business Profile verification
                  </Link>{" "}
                  done right from day one.
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
                  src="/images/home-improvement-web/tree-service-responsive-preview-square.webp"
                  alt="Canopy Pro Tree Care website displayed on a desktop monitor and tablet"
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
                  More Than a Brochure — A System Built to Book Jobs
                </h2>
                <p className="hiw-lead">
                  Most tree service websites are digital business cards: a stock
                  photo of a tree, a list of services, a contact form nobody fills
                  out. We design every site as a working system, where each page
                  has one job — moving a homeowner closer to a booked estimate.
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
                    The Anatomy of a High-Converting Tree Service Website
                  </h2>
                  <p className="hiw-lead">
                    The best tree service website design is not about decoration —
                    it is a checklist of things homeowners and search engines both
                    expect. Every website we ship includes all eight, as standard,
                    not as upsells.
                  </p>
                  <p className="hiw-lead">
                    Miss any one of them and you leak jobs: slow pages lose mobile
                    visitors, missing insurance proof loses the nervous homeowner,
                    and a site without service area pages loses every suburb to the
                    crew that built them.
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
                      PPC campaigns
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
                    because most tree searches happen on a phone — often right
                    after a storm drops a limb on the driveway.
                  </p>
                </article>
                <article className="hiw-why-card">
                  <span className="hiw-why-card-icon">
                    <FiShield aria-hidden="true" />
                  </span>
                  <h3>Trust Signals Where Homeowners Look for Them</h3>
                  <p>
                    Insurance proof, ISA certifications, and safety credentials
                    placed in the layout — not buried on an about page a nervous
                    homeowner will never read.
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
                <p className="hiw-eyebrow">Why Tree Pros Choose Us</p>
                <h2 className="hiw-h2">Craftsmanship Customers Can See</h2>
                <p className="hiw-lead">
                  A website built by a team that understands how homeowners
                  choose a tree company — and what makes them request a quote
                  instead of keep scrolling. If the project touches ads, content,
                  or profile work, our{" "}
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
                  brand="Summit Tree Care"
                  url="summittreecare.com"
                  headline="Tree removal & care, done safe."
                  primaryCta="Get Free Estimate"
                  chips={["Removal", "Trimming", "Emergency"]}
                  toastTitle="New estimate request"
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
                <p className="hiw-eyebrow">Wherever You Work</p>
                <h2 className="hiw-h2">
                  Tree Service Website Design Across the United States
                </h2>
                <p className="hiw-lead">
                  From single-crew startups to multi-market tree companies, Zonic
                  Media designs tree service websites for businesses in every
                  state. Because everything happens remotely — discovery calls,
                  design reviews, launch — you get the same process whether you
                  work in Delaware, Texas, or Arizona.
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
                    Everything Tree Pros Ask Us About Website Design
                  </h2>
                  <p className="hiw-lead">
                    Straight answers on pricing, timelines, emergency leads, and
                    what happens to your current rankings. If your question is not here,
                    or you are facing a suspension and need{" "}
                    <Link
                      href="/services/gmb-reinstatement-help"
                      className="hiw-inline-link"
                    >
                      Google Business Profile reinstatement help
                    </Link>, send it through the form — a strategist answers, not a
                    sales script.
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
                  <GmbFaqs items={TreeWebFaqs} />
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
                  Your Website is Step One. Here is What Fills It with Jobs.
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
                    Book Your Free Tree Service Website Consult
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
                  Zonic Media is a digital growth agency helping tree service
                  companies turn website visitors into booked jobs.
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
