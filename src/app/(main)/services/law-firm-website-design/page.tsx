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
  FiAward,
  FiClock,
  FiFileText,
  FiLayout,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiRefreshCw,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { RiLineChartLine, RiPagesLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/law-firm-website-design";

export const metadata: Metadata = {
  title: "Law Firm Website Design That Signs Cases",
  description:
    "Law firm website design built as a client acquisition system — practice-area pages, case-intake flows, trust and results UX, and mobile-first design that signs cases.",
  keywords: [
    "law firm website design",
    "attorney website design",
    "lawyer website design",
    "legal website design",
    "websites for law firms",
    "law office website design",
    "law firm web design",
    "attorney website redesign",
    "law firm lead generation website",
    "legal web designer",
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
    title: "Law Firm Website Design That Signs Cases | Zonic Media",
    description:
      "Law firm website design built as a client acquisition system — practice-area pages, case-intake flows, trust and results UX, and mobile-first design that signs cases.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Law Firm Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Law Firm Website Design",
  serviceType: "Law Firm Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom law firm website design with practice-area landing pages, case-intake and consultation flows, results and trust content, and service-area pages built to sign cases.",
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
    name: "Law Firm Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "New Law Firm Websites" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Law Firm Website Redesigns" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Practice-Area Landing Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Case Intake & Consultation Flows",
        },
      },
    ],
  },
};

const LawWebFaqs = [
  {
    question: "How much does law firm website design cost?",
    answer:
      "Pricing depends on the size of the build: number of practice-area and city pages, intake integrations, and whether content and photography are included. A focused redesign costs considerably less than a large multi-practice, multi-office build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How long does it take to design a law firm website?",
    answer:
      "Most law firm websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many practice-area pages or custom integrations can take longer.",
  },
  {
    question: "Can my website bring in qualified case leads?",
    answer:
      "Yes — that is the entire point. We build practice-area pages that match how clients search, paired with 24/7 case-intake forms and click-to-call, so a person with a legal problem can reach you the moment they decide to act. Clear results and credentials on the page are what make them choose your firm over the next listing.",
  },
  {
    question: "Can you integrate my intake or CRM software?",
    answer:
      "Yes. We connect the tools firms already run — Clio, Filevine, Lawmatics, or a structured case-intake flow that routes straight to your intake team. Either way, prospective clients can start a case without waiting for business hours.",
  },
  {
    question: "Can you redesign my site without losing my current rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const lawWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: LawWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AboutChecks = [
  "Intake-first layouts",
  "Practice-area pages",
  "Results & trust proof",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Law Firm Websites",
    desc: (
      <>
        Launching or rebranding? We design your site from sitemap to launch —
        intake flows, practice-area pages, and{" "}
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
    title: "Law Firm Website Redesigns",
    desc: "Dated site that never signs a case? We rebuild it around client conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Practice-Area Landing Pages",
    desc: "Dedicated pages for personal injury, family law, criminal defense, and estate planning — each built around one practice area and one action: request a consultation.",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "Case Intake & Consultation Flows",
    desc: "Clio, Filevine, Lawmatics, or a clean case-intake flow routed to your team — prospective clients start a case in a few taps, day or night.",
  },
  {
    icon: <FiAward aria-hidden="true" />,
    title: "Results & Credibility Pages",
    desc: "Case results, verdicts, attorney bios, and credentials placed where a client decides whether to trust you with their case.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Practice areas designed for" },
  { num: "24/7", label: "Case intake, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <FiClock aria-hidden="true" />,
    title: "24/7 case intake",
    desc: "Always-on intake forms and click-to-call, because legal problems do not keep business hours and the first firm to respond usually wins the case.",
  },
  {
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Practice-area pages",
    desc: "A focused page for each practice area that matches how clients search and routes them to a consultation, not a wall of legalese.",
  },
  {
    icon: <FiAward aria-hidden="true" />,
    title: "Results & trust UX",
    desc: "Verdicts, settlements, credentials, and reviews placed up front, because clients hire the firm that proves it wins.",
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    title: "Qualified intake flows",
    desc: "Intake questions that pre-qualify a case and route it to the right attorney, so your team spends time on cases worth signing.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-first design",
    desc: "Most legal searches happen on a phone, often in a stressful moment — every layout starts at 375px, not on a desktop monitor.",
  },
  {
    title: "Click-to-call & case intake",
    desc: "One thumb-tap from any page to a call or a case-intake form, always visible, never buried.",
  },
  {
    title: "Google reviews integration",
    desc: "Your best reviews pulled onto the site where cautious clients actually read them before they call.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a credibility factor.",
  },
  {
    title: "Practice-area content",
    desc: "Plain-language pages for each practice area that answer real questions and earn rankings.",
  },
  {
    title: "Service area pages",
    desc: "A dedicated page for every city and county you serve, built to rank for local attorney searches.",
  },
  {
    title: "Local schema markup",
    desc: "Structured data that tells Google exactly who you are, where you practice, and what cases you take.",
  },
  {
    title: "Secure hosting & SSL",
    desc: "Fast, monitored hosting with daily backups — your site stays online and stays yours.",
  },
];

const ProcessSteps = [
  {
    num: "01",
    title: "Discovery & practice-area mapping",
    desc: "The cases you want more of, the areas you serve, how intake works today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free homepage mockup",
    desc: "Within about a week you see a custom homepage mockup built around your firm and your market — before you commit to the full build.",
  },
  {
    num: "03",
    title: "Build, content & on-page SEO",
    desc: "Practice-area pages, intake flows, and results content — every page written around the searches clients use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, tracking & growth",
    desc: "Every form tested, every old URL redirected, call and form tracking wired up — then local SEO and GBP work keep qualified cases coming.",
  },
];

const BannerFeats = [
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Conversion-First Design",
    desc: "Every layout decision serves one goal: turning visitors into signed cases.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Built-In Local SEO",
    desc: "Schema, keyword-mapped pages, and fast Core Web Vitals from day one.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Trust Built In",
    desc: "Results, credentials, and bar-compliant proof placed where clients look for it.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Growth-Ready Foundation",
    desc: "Every site plugs straight into local SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Law Firm Web Design",
  "24/7 Case Intake",
  "Practice-Area Pages",
  "Results & Credibility",
  "Google Reviews",
  "Local SEO",
];

const NationwideChips = [
  "Personal Injury",
  "Family Law",
  "Criminal Defense",
  "Estate Planning",
  "Business Law",
  "Immigration",
  "Multi-Attorney Firms",
];

const GrowCards = [
  {
    href: "/services/industry/local-seo-for-law-firms",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local SEO for Law Firms",
    desc: "Rank for practice-area and attorney searches across Google Search and Maps in every area you serve.",
    cta: "See law firm SEO",
  },
  {
    href: "/services/law-firm-marketing-agency",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Law Firm Marketing Agency",
    desc: "Ads, SEO, and case generation built for firms — the full engine that keeps qualified cases coming in.",
    cta: "Explore law firm marketing",
  },
  {
    href: "/services/gmb-optimization",
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Many clients pick an attorney straight from the map pack. We optimize your profile so that firm is you.",
    cta: "Optimize your profile",
  },
];

const formVariant = {
  formType: "law-firm-website-design",
  headline: "Get Your Free Homepage Mockup",
  subcopy:
    "See what your firm's new website could look like before you spend a dollar — delivered within about a week.",
  namePlaceholder: "James Hartwell",
  companyLabel: "Firm name",
  companyPlaceholder: "Hartwell Law Group",
  cityPlaceholder: "Dover, DE",
  emailPlaceholder: "james@hartwelllaw.com",
  messagePlaceholder:
    "Tell us about your firm, your current website, or the cases you want more of — personal injury, family, criminal, estate...",
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
          __html: JSON.stringify(lawWebFaqJsonLd),
        }}
      />

      <div className="hiw-page hiw-theme-law">
        <main>
          {/* 1. Hero */}
          <section className="hiw-hero">
            <div className="hiw-container">
              <div className="hiw-hero-grid">
                <div className="hiw-hero-copy">
                  <p className="hiw-eyebrow">Law Firm Website Design</p>
                  <h1 className="hiw-hero-h1">
                    Law firm website design that turns visitors into{" "}
                    <span className="hiw-hl">signed cases</span>
                  </h1>
                  <p className="hiw-hero-sub">
                    Zonic Media designs law firm websites that work like a client
                    acquisition system — practice-area pages, 24/7 case intake,
                    results and trust proof, and mobile-first design that signs
                    cases. Our{" "}
                    <Link href="/services/web-design" className="hiw-inline-link">
                      website design services
                    </Link>{" "}
                    are built around signed cases, not another brochure site.
                  </p>
                  <div className="hiw-hero-ctas">
                    <HashScrollLink
                      href="#hiw-form"
                      className="hiw-btn"
                      offset={120}
                    >
                      Start Your Law Firm Website
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
                      src="/images/home-improvement-web/law-firm-hero-v2.webp"
                      alt="Attorney presenting a law firm website from his office"
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
                    <span>Planning a new law firm website?</span>
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
                      src="/images/home-improvement-web/law-firm-first-impressions-1.webp"
                      alt="Attorney meeting with a client across a conference table"
                      fill
                      sizes="(max-width: 991px) 80vw, 32vw"
                    />
                  </div>
                  <div className="hiw-collage-img-2">
                    <Image
                      src="/images/home-improvement-web/law-firm-first-impressions-2.webp"
                      alt="Sterling and Rowe law firm website displayed on a desktop monitor"
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
                          Law Firm Web Design • Zonic Media •
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
                    <span className="hiw-hl-text">first consultation</span> a
                    client gives your firm
                  </h2>
                  <p className="hiw-lead">
                    Before a client ever calls, they have already judged your firm
                    — on their phone, often in a stressful moment, in about five
                    seconds. They looked for your results, checked whether you
                    handle their kind of case, and tried to reach someone. If any
                    of that was slow, confusing, or missing, they tapped the next
                    firm on the list.
                  </p>
                  <p className="hiw-lead">
                    Great law firm website design closes that gap: it answers the
                    three questions every client has — do you handle my case, can I
                    trust you to win, and how do I reach you now — and then makes
                    starting a case effortless. It is also the foundation of any
                    wider{" "}
                    <Link
                      href="/services/law-firm-marketing-agency"
                      className="hiw-inline-link"
                    >
                      law firm marketing
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
                    Law firm website design for every stage of your firm
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
                <p className="hiw-eyebrow">Every Practice Area</p>
                <h2 className="hiw-h2">
                  Web design for every kind of practice
                </h2>
                <p className="hiw-lead">
                  Personal injury, family law, criminal defense, estate planning,
                  business law, and immigration — we design around your practice
                  areas, your market, and the way clients actually search for an
                  attorney. Your site should feel like your firm, not like a
                  template every competitor is also using — and it should be built
                  to rank with{" "}
                  <Link
                    href="/services/industry/local-seo-for-law-firms"
                    className="hiw-inline-link"
                  >
                    local SEO for law firms
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
                  src="/images/home-improvement-web/law-firm-responsive-preview-square.webp"
                  alt="Sterling and Rowe website displayed on a desktop monitor and tablet"
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
                <p className="hiw-eyebrow">The Client Acquisition System</p>
                <h2 className="hiw-h2">
                  More than a brochure — a system built to sign cases
                </h2>
                <p className="hiw-lead">
                  Most law firm websites are digital business cards: a stock photo
                  of a courthouse, a list of practice areas, a contact form nobody
                  fills out. We design every site as a working system, where each
                  page has one job — moving a prospective client closer to a
                  signed case.
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
                    The anatomy of a high-converting law firm website
                  </h2>
                  <p className="hiw-lead">
                    The best law firm website design is not about decoration — it
                    is a checklist of things clients and search engines both
                    expect. Every website we ship includes all eight, as standard,
                    not as upsells.
                  </p>
                  <p className="hiw-lead">
                    Miss any one of them and you leak cases: slow pages lose the
                    stressed client, missing results lose trust, and a site without
                    practice-area pages loses every case type to the firm that
                    built them.
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
                      href="/services/google-ads"
                      className="hiw-inline-link"
                    >
                      pay-per-click campaigns
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
                  <h3>Fast on the phones clients actually use</h3>
                  <p>
                    Mobile-first layouts and Core Web Vitals-friendly builds,
                    because most legal searches happen on a phone, in the moment a
                    client decides they need help.
                  </p>
                </article>
                <article className="hiw-why-card">
                  <span className="hiw-why-card-icon">
                    <FiShield aria-hidden="true" />
                  </span>
                  <h3>Trust signals where clients look for them</h3>
                  <p>
                    Case results, verdicts, attorney credentials, and reviews
                    placed in the layout — the proof a client needs before they
                    trust you with their case.
                  </p>
                </article>
              </div>
              <div className="hiw-why-banner">
                <div className="hiw-why-banner-text">
                  <p className="hiw-eyebrow">Free Strategy Call</p>
                  <h3>Not sure what your firm actually needs?</h3>
                  <p>
                    Tell us your goals and we&apos;ll map the exact pages, intake
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
                <p className="hiw-eyebrow">Why Law Firms Choose Us</p>
                <h2 className="hiw-h2">Authority clients can see</h2>
                <p className="hiw-lead">
                  A website built by a team that understands how clients choose a
                  firm — and what makes them start a case instead of keep
                  scrolling. If the project touches ads, content, or profile work,
                  our{" "}
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
                  brand="Hartwell Law Group"
                  url="hartwelllaw.com"
                  navCta="Free Consult"
                  headline="Aggressive advocacy, real results."
                  primaryCta="Free Consultation"
                  chips={["Injury", "Family", "Criminal"]}
                  toastTitle="New case inquiry"
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
                <p className="hiw-eyebrow">Wherever You Practice</p>
                <h2 className="hiw-h2">
                  Law firm website design across the United States
                </h2>
                <p className="hiw-lead">
                  From solo practitioners to multi-attorney firms, Zonic Media
                  designs law firm websites for practices in every state. Because
                  everything happens remotely — discovery calls, design reviews,
                  launch — you get the same process whether you practice in
                  Delaware, Texas, or California.
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
                    Everything firms ask us about website design
                  </h2>
                  <p className="hiw-lead">
                    Straight answers on pricing, timelines, case intake, and what
                    happens to your current rankings. If your question is not here,
                    or you need{" "}
                    <Link
                      href="/services/gmb-reinstatement-help"
                      className="hiw-inline-link"
                    >
                      Google Business Profile reinstatement
                    </Link>{" "}
                    for a suspended listing, send it through the form — a strategist answers, not a sales
                    script.
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
                  <GmbFaqs items={LawWebFaqs} />
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
                  Your website is step one. Here is what fills it with cases.
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
                    Book your free law firm website consult
                  </h2>
                  <p className="hiw-lead">
                    Tell us about your firm and we will send a custom homepage
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
                  Zonic Media is a digital growth agency helping law firms turn
                  website visitors into signed cases.
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
