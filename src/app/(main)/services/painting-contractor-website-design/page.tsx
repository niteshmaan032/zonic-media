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
  FiDroplet,
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
import { LuCalendarCheck2 } from "react-icons/lu";
import { RiLineChartLine, RiPagesLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/painting-contractor-website-design";

export const metadata: Metadata = {
  title: "Painting Contractor Website Design That Books Jobs",
  description:
    "Painting contractor website design built as a lead system — instant quote flows, before-and-after galleries, financing UX, and service pages that book paint jobs.",
  keywords: [
    "painting contractor website design",
    "painting company website design",
    "painter website design",
    "painting business website design",
    "websites for painting contractors",
    "house painter website design",
    "commercial painting website design",
    "painting contractor landing page design",
    "painting lead generation website",
    "painting contractor web designer",
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
    title: "Painting Contractor Website Design That Books Jobs | Zonic Media",
    description:
      "Painting contractor website design built as a lead system — instant quote flows, before-and-after galleries, financing UX, and service pages that book paint jobs.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Painting Contractor Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Painting Contractor Website Design",
  serviceType: "Painting Contractor Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom painting contractor website design with instant quote request flows, before-and-after galleries, financing pages, and service-specific landing pages built to book interior, exterior, and cabinet painting jobs.",
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
    name: "Painting Contractor Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Painting Company Websites",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Painting Website Redesigns",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Service & Project Landing Pages",
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

const PaintingWebFaqs = [
  {
    question: "How much does painting contractor website design cost?",
    answer:
      "Pricing depends on the size of the build: number of service and city pages, quote and financing integrations, gallery volume, and whether content and photography are included. A focused redesign costs considerably less than a large multi-crew, multi-market build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How long does it take to design a painting website?",
    answer:
      "Most painting websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many service-area pages or custom integrations can take longer.",
  },
  {
    question: "Can my website show off before-and-after project photos?",
    answer:
      "Yes — for a painter, the gallery is the sale. We build fast, filterable before-and-after galleries organized by job type (interior, exterior, cabinet refinishing) so homeowners can see your finish before they ever call. Every gallery is paired with a quote button, because a photo that impresses should never leave a visitor with nowhere to go.",
  },
  {
    question: "Can you integrate my CRM or estimating software?",
    answer:
      "Yes. We connect the tools painters already run — Jobber, Housecall Pro, PaintScout, or a structured quote request flow that routes straight to your office. Either way, homeowners can request an estimate without waiting for business hours.",
  },
  {
    question: "Can you redesign my site without losing my current rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const paintingWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PaintingWebFaqs.map((faq) => ({
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
  "Before-and-after galleries",
  "Financing & pricing UX",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Painting Company Websites",
    desc: (
      <>
        Launching or rebranding? We design your site from sitemap to launch —
        quote flows, project galleries, and{" "}
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
    title: "Painting Website Redesigns",
    desc: "Great work, forgettable website? We rebuild it around homeowner conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Service & Project Landing Pages",
    desc: "Dedicated pages for interior painting, exterior painting, cabinet refinishing, and commercial painting — each built around one service and one action: request a quote.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Quote & Estimate Flows",
    desc: "Jobber, Housecall Pro, PaintScout, or a clean estimate request flow routed to your office — homeowners request a quote in a few taps, day or night.",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Financing & Estimate Pages",
    desc: "A whole-home repaint is a real investment. Clear financing options and plain-English estimate guidance answer sticker-shock objections before homeowners ever call.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Painting services designed for" },
  { num: "24/7", label: "Quote requests, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "Instant quote flows",
    desc: "Homeowners request an estimate or design consultation in a few taps — integrated with the CRM and estimating tools painters already use.",
  },
  {
    icon: <FiImage aria-hidden="true" />,
    title: "Before-and-after galleries",
    desc: "Filterable job photos organized by paint type, placed where hesitant homeowners actually decide whether your work is worth the call.",
  },
  {
    icon: <FiDollarSign aria-hidden="true" />,
    title: "Financing & pricing UX",
    desc: "Payment options and honest price-range guidance up front, so sticker shock stops killing leads before they reach your inbox.",
  },
  {
    icon: <FiDroplet aria-hidden="true" />,
    title: "Color-driven service pages",
    desc: "Interior, exterior, and cabinet work shown in the colors homeowners are dreaming about — pages that sell the finish, not just the trade.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-first design",
    desc: "Most homeowners plan a paint job on their phone — every layout starts at 375px, not on a desktop monitor.",
  },
  {
    title: "Click-to-call & quote request",
    desc: "One thumb-tap from any page to a call or an estimate request, always visible, never buried.",
  },
  {
    title: "Google reviews integration",
    desc: "Your best reviews pulled onto the site where cautious homeowners actually read them before spending big.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a patience factor.",
  },
  {
    title: "Before & after galleries",
    desc: "Real project photos organized by job type, because homeowners buy the finish they can already picture.",
  },
  {
    title: "Service area pages",
    desc: "A dedicated page for every city and suburb you work, built to rank for local painting searches.",
  },
  {
    title: "Local schema markup",
    desc: "Structured data that tells Google exactly who you are, where you work, and what you paint.",
  },
  {
    title: "Secure hosting & SSL",
    desc: "Fast, monitored hosting with daily backups — your site stays online and stays yours.",
  },
];

const ProcessSteps = [
  {
    num: "01",
    title: "Discovery & project mix mapping",
    desc: "The jobs you want more of, the cities you work, how your office handles leads today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free homepage mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your best projects — before you commit to the full build.",
  },
  {
    num: "03",
    title: "Build, content & on-page SEO",
    desc: "Service pages, quote flows, and project galleries — every page written around the searches homeowners use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, tracking & growth",
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
    desc: "Every site plugs straight into local SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Painting Web Design",
  "Instant Quotes",
  "Before & After Galleries",
  "Financing Pages",
  "Estimate Booking",
  "Local SEO",
];

const NationwideChips = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Refinishing",
  "Commercial Painting",
  "Deck & Fence Staining",
  "Specialty Finishes",
  "Multi-Crew Painters",
];

const GrowCards = [
  {
    href: "/services/industry/local-seo-for-painting-contractors",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local SEO for Painting Contractors",
    desc: "Rank for interior and exterior painting searches across Google Search and Maps in every city you work.",
    cta: "See painting SEO",
  },
  {
    href: "/services/flooring-website-design",
    icon: <FiLayout aria-hidden="true" />,
    title: "Flooring Website Design",
    desc: "Offer flooring too? A matching, conversion-first site that shows the finish and books the measure.",
    cta: "Explore flooring web design",
  },
  {
    href: "/services/window-and-door-website-design",
    icon: <FiImage aria-hidden="true" />,
    title: "Window & Door Website Design",
    desc: "Install windows and doors as well? A dedicated site that shows the products and books the estimate.",
    cta: "See window & door web design",
  },
];

const formVariant = {
  formType: "painting-contractor-website-design",
  headline: "Get Your Free Homepage Mockup",
  subcopy:
    "See what your painting company's new website could look like before you spend a dollar — delivered within about a week.",
  namePlaceholder: "Mike Johnson",
  companyLabel: "Company name",
  companyPlaceholder: "Johnson Painting Co.",
  cityPlaceholder: "Dover, DE",
  emailPlaceholder: "mike@johnsonpainting.com",
  messagePlaceholder:
    "Tell us about your company, your current website, or the jobs you want more of — interior, exterior, cabinet painting...",
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
          __html: JSON.stringify(paintingWebFaqJsonLd),
        }}
      />

      <div className="hiw-page hiw-theme-painting">
        <main>
          {/* 1. Hero */}
          <section className="hiw-hero">
            <div className="hiw-container">
              <div className="hiw-hero-grid">
                <div className="hiw-hero-copy">
                  <p className="hiw-eyebrow">Painting Contractor Website Design</p>
                  <h1 className="hiw-hero-h1">
                    Painting contractor website design that turns browsers into{" "}
                    <span className="hiw-hl">booked paint jobs</span>
                  </h1>
                  <p className="hiw-hero-sub">
                    Zonic Media designs painting contractor websites that work
                    like a lead system — instant quote flows, before-and-after
                    galleries, financing UX, and service pages that sell the
                    finish. Our{" "}
                    <Link href="/services/web-design" className="hiw-inline-link">
                      website design services
                    </Link>{" "}
                    are built around booked estimates, not another brochure
                    site.
                  </p>
                  <div className="hiw-hero-ctas">
                    <HashScrollLink
                      href="#hiw-form"
                      className="hiw-btn"
                      offset={120}
                    >
                      Start Your Painting Website
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
                      src="/images/home-improvement-web/painting-contractor-hero.webp"
                      alt="Painting contractor reviewing her company website with a fan of paint color samples"
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
                    <span>Planning a new painting website?</span>
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
                      src="/images/home-improvement-web/painting-contractor-first-impressions-1.webp"
                      alt="Freshly painted living room with a deep plum accent wall and crisp white trim"
                      fill
                      sizes="(max-width: 991px) 80vw, 32vw"
                    />
                  </div>
                  <div className="hiw-collage-img-2">
                    <Image
                      src="/images/home-improvement-web/painting-contractor-first-impressions-2.webp"
                      alt="Painting contractor website displayed on a desktop monitor in a color studio"
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
                          Painting Web Design • Zonic Media •
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
                    Your website is the{" "}
                    <span className="hiw-hl-text">first coat</span>{" "}
                    homeowners judge you on
                  </h2>
                  <p className="hiw-lead">
                    Before a homeowner ever lets a crew into their house, they
                    have already judged your company — on their phone, in about
                    five seconds. They scanned your before-and-after photos,
                    looked for your reviews, and tried to figure out roughly
                    what a job costs. If any of that was slow, confusing, or
                    missing, they tapped the next painter on the list.
                  </p>
                  <p className="hiw-lead">
                    Great painting contractor website design closes that gap: it
                    answers the three questions every homeowner has — can I
                    trust your work, what will this cost, and how do I start —
                    and then makes requesting a quote effortless. It is also the
                    foundation of any wider{" "}
                    <Link
                      href="/services/industry/local-seo-for-painting-contractors"
                      className="hiw-inline-link"
                    >
                      painting contractor SEO
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
                    Painting contractor website design for every stage of your
                    company
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
                <p className="hiw-eyebrow">Every Paint Job</p>
                <h2 className="hiw-h2">
                  Web design for every kind of painting work
                </h2>
                <p className="hiw-lead">
                  Interior repaints, exterior jobs, cabinet refinishing,
                  commercial painting, and specialty finishes — we design around
                  your job mix, your service area, and the way homeowners in your
                  market actually search. Your site should feel like your work,
                  not like a template every competitor is also using — and it
                  plugs straight into your wider{" "}
                  <Link
                    href="/services/painting-contractor-marketing-agency"
                    className="hiw-inline-link"
                  >
                    painting contractor marketing
                  </Link>{" "}
                  program.
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
                  src="/images/home-improvement-web/painting-contractor-responsive-preview-v4.webp"
                  alt="Responsive painting contractor website displayed across desktop, tablet, and phone"
                  fill
                  sizes="(max-width: 1199px) 0px, 45vw"
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
                  More than a brochure — a system built to book renovations
                </h2>
                <p className="hiw-lead">
                  Most painting websites are digital business cards: a stock
                  photo of a freshly painted room, a list of services, a contact form nobody
                  fills out. We design every site as a working system, where
                  each page has one job — moving a homeowner closer to a booked
                  estimate.
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
                    The anatomy of a high-converting painting website
                  </h2>
                  <p className="hiw-lead">
                    The best painting contractor website design is not about
                    decoration — it is a checklist of things homeowners and
                    search engines both expect. Every website we ship includes
                    all eight, as standard, not as upsells.
                  </p>
                  <p className="hiw-lead">
                    Miss any one of them and you leak jobs: slow pages lose
                    mobile visitors, missing project photos lose trust, and a
                    site without service area pages loses every suburb to the
                    painter who built them.
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
                <h2 className="hiw-h2">Designed to convert. Built to rank.</h2>
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
                  <h3>A local SEO foundation, not an afterthought</h3>
                  <p>
                    Schema markup, keyword-mapped pages, and a structure that
                    plugs straight into{" "}
                    <Link
                      href="/services/industry/local-seo-for-painting-contractors"
                      className="hiw-inline-link"
                    >
                      painting contractor SEO
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/services/gmb-optimization"
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
                  <h3>Fast on the phones homeowners actually use</h3>
                  <p>
                    Mobile-first layouts and Core Web Vitals-friendly builds,
                    because most painting research happens on a phone, while they look at the walls they want repainted.
                  </p>
                </article>
                <article className="hiw-why-card">
                  <span className="hiw-why-card-icon">
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
              <div className="hiw-why-banner">
                <div className="hiw-why-banner-text">
                  <p className="hiw-eyebrow">Free Strategy Call</p>
                  <h3>Not sure what your company actually needs?</h3>
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
                    From first call to launch in four steps
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
                <p className="hiw-eyebrow">Why Painters Choose Us</p>
                <h2 className="hiw-h2">Craftsmanship customers can see</h2>
                <p className="hiw-lead">
                  A website built by a team that understands how homeowners
                  choose a painter — and what makes them request a quote
                  instead of keep scrolling. If the project touches ads,
                  content, or profile work, our{" "}
                  <Link href="/services/painting-contractor-marketing-agency" className="hiw-inline-link">
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
                  brand="TrueCoat Painting"
                  url="truecoatpainting.com"
                  headline="A finish that lasts."
                  primaryCta="Get Free Estimate"
                  chips={["Interior", "Exterior", "Cabinets"]}
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
                  Painting contractor website design across the United States
                </h2>
                <p className="hiw-lead">
                  From single-crew startups to multi-market painting
                  companies, Zonic Media designs painting contractor websites
                  for painters in every state. Because everything happens
                  remotely — discovery calls, design reviews, launch — you get
                  the same process whether you work in Delaware, Texas, or
                  Arizona.
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
                    Everything painters ask us about website design
                  </h2>
                  <p className="hiw-lead">
                    Straight answers on pricing, timelines, galleries, and what
                    happens to your current rankings. If your question is not
                    here, send it through the form — a strategist answers, not a
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
                  <GmbFaqs items={PaintingWebFaqs} />
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
                  Your website is step one. Here is what fills it with jobs.
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
                    Book your free painting website consult
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
                  Zonic Media is a digital growth agency helping painting
                  contractors turn website visitors into booked paint jobs.
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
