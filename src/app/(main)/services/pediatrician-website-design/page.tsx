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
  FiHeart,
  FiLayout,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiRefreshCw,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import {
  MdOutlineHealthAndSafety,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import { RiLineChartLine, RiPagesLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/pediatrician-website-design";

export const metadata: Metadata = {
  title: "Pediatrician Website Design That Books Families",
  description:
    "Pediatrician website design built as a patient acquisition system — online scheduling, new-patient and well-visit info, insurance UX, and warm, mobile-first design parents trust.",
  keywords: [
    "pediatrician website design",
    "pediatric website design",
    "pediatric practice website design",
    "websites for pediatricians",
    "pediatrician web design",
    "pediatric clinic website design",
    "pediatrician website redesign",
    "pediatric lead generation website",
    "pediatrician landing page design",
    "pediatric web designer",
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
    title: "Pediatrician Website Design That Books Families | Zonic Media",
    description:
      "Pediatrician website design built as a patient acquisition system — online scheduling, new-patient and well-visit info, insurance UX, and warm, mobile-first design parents trust.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Pediatrician Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pediatrician Website Design",
  serviceType: "Pediatric Practice Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom pediatric practice website design with online scheduling, new-patient and well-visit info, service pages, insurance verification UX, and HIPAA-aware forms built to book families.",
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
    name: "Pediatrician Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Pediatric Practice Websites",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pediatric Website Redesigns",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Service & Well-Visit Pages",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Online Scheduling Integration",
        },
      },
    ],
  },
};

const PediatricWebFaqs = [
  {
    question: "How much does pediatrician website design cost?",
    answer:
      "Pricing depends on the size of the build: number of service pages, scheduling and insurance integrations, and whether content and photography are included. A focused redesign costs considerably less than a large multi-provider build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How long does it take to design a pediatric website?",
    answer:
      "Most pediatric websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many service pages or custom integrations can take longer.",
  },
  {
    question: "Can my website bring in new-patient families?",
    answer:
      "Yes — that is the goal. We build clear new-patient info, online scheduling, and reassuring well-visit and sick-visit pages, so a parent searching at 9 p.m. can see you take their insurance and request a visit without waiting to call. Warm, trustworthy design paired with easy scheduling is what turns a worried parent into a new family.",
  },
  {
    question: "Can you integrate my scheduling or patient portal?",
    answer:
      "Yes. We integrate the tools pediatric offices already use — Athenahealth, Zocdoc, Phreesia, patient portals — or build a structured appointment request flow that routes to your front desk. Either way, parents can request a visit without calling during office hours.",
  },
  {
    question: "Can you redesign my site without losing my current rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const pediatricWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: PediatricWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AboutChecks = [
  "Scheduling-first layouts",
  "Warm, parent-friendly design",
  "Insurance verification",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Pediatric Practice Websites",
    desc: (
      <>
        Opening or rebranding? We design your site from sitemap to launch —
        scheduling flows, service pages, and{" "}
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
    title: "Pediatric Website Redesigns",
    desc: "Dated site that worries parents instead of reassuring them? We rebuild it around new-patient conversion and map every existing URL so your rankings carry over.",
  },
  {
    icon: <FiHeart aria-hidden="true" />,
    title: "Service & Well-Visit Pages",
    desc: "Dedicated pages for well-child visits, sick care, vaccines, and newborn care — each written to reassure parents and route them to scheduling.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Scheduling Integration",
    desc: "Athenahealth, Zocdoc, Phreesia, or a clean appointment request flow routed to your front desk — parents request a visit in a few taps, day or night.",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Insurance & New-Patient Pages",
    desc: "Clear insurance participation, new-patient steps, and what-to-expect info that answer a parent's questions before they ever call.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Pediatric services designed for" },
  { num: "24/7", label: "Scheduling, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online scheduling flows",
    desc: "Parents request or book appointments in a few taps — integrated with the scheduling tools pediatric offices already use.",
  },
  {
    icon: <FiHeart aria-hidden="true" />,
    title: "Reassuring service pages",
    desc: "Well-visit, sick-care, and vaccine pages written to calm worried parents and match how they search for a pediatrician.",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "New-patient & insurance UX",
    desc: "New-patient steps and insurance participation up front, so parents confirm the fit before they book a visit.",
  },
  {
    icon: <MdOutlineHealthAndSafety aria-hidden="true" />,
    title: "HIPAA-aware forms",
    desc: "Encrypted intake and contact forms designed so patient information never leaks into analytics or ad pixels.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-first design",
    desc: "Most parents find a pediatrician on their phone, often with a sick child nearby — every layout starts at 375px.",
  },
  {
    title: "Click-to-call & scheduling",
    desc: "One thumb-tap from any page to a call or an appointment request, always visible, never buried.",
  },
  {
    title: "Google reviews integration",
    desc: "Your best reviews pulled onto the site where anxious parents actually read them before choosing a doctor.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a patience factor.",
  },
  {
    title: "Well-visit & service content",
    desc: "Plain-language, reassuring pages for the visits and care you provide that answer real questions and earn rankings.",
  },
  {
    title: "Service area pages",
    desc: "A dedicated page for every city and neighborhood you serve, built to rank for local pediatrician searches.",
  },
  {
    title: "Local schema markup",
    desc: "Structured data that tells Google exactly who you are, where you practice, and who you care for.",
  },
  {
    title: "Secure hosting & SSL",
    desc: "Fast, monitored hosting with daily backups — your site stays online and stays yours.",
  },
];

const ProcessSteps = [
  {
    num: "01",
    title: "Discovery & family journey mapping",
    desc: "The visits you want more of, the insurance you accept, how your front desk schedules today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free homepage mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your families — before you commit to the full build.",
  },
  {
    num: "03",
    title: "Build, content & on-page SEO",
    desc: "Service pages, scheduling flows, and new-patient info — every page written around the searches parents use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, tracking & growth",
    desc: "Every form tested, every old URL redirected, call and form tracking wired up — then local SEO and GBP work keep new families coming.",
  },
];

const BannerFeats = [
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Conversion-First Design",
    desc: "Every layout decision serves one goal: turning visitors into new-patient families.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Built-In Local SEO",
    desc: "Schema, keyword-mapped pages, and fast Core Web Vitals from day one.",
  },
  {
    icon: <FiShield aria-hidden="true" />,
    title: "Compliance-Minded",
    desc: "HIPAA-aware forms and honest tracking, so your site never becomes a liability.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Growth-Ready Foundation",
    desc: "Every site plugs straight into local SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Pediatric Web Design",
  "Online Scheduling",
  "Well-Visit Pages",
  "New-Patient Info",
  "Google Reviews",
  "Local SEO",
];

const NationwideChips = [
  "Well-Child Visits",
  "Sick Visits",
  "Vaccinations",
  "Newborn Care",
  "Sports Physicals",
  "Behavioral Health",
  "Multi-Provider Practices",
];

const GrowCards = [
  {
    href: "/services/industry/pediatricians",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "SEO Services for Pediatricians",
    desc: "Rank for pediatrician and well-visit searches across Google Search and Maps in every neighborhood you serve.",
    cta: "See pediatric SEO",
  },
  {
    href: "/services/gmb-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most parents pick a pediatrician straight from the map pack. We optimize your profile so that practice is you.",
    cta: "Optimize your profile",
  },
  {
    href: "/services/web-design",
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Website Design Services",
    desc: "Explore our full website design offering — the same conversion-first system, tailored to any practice or business.",
    cta: "See web design",
  },
];

const formVariant = {
  formType: "pediatrician-website-design",
  headline: "Get Your Free Homepage Mockup",
  subcopy:
    "See what your pediatric practice's new website could look like before you spend a dollar — delivered within about a week.",
  namePlaceholder: "Dr. Emily Ross",
  companyLabel: "Practice name",
  companyPlaceholder: "Little Sprouts Pediatrics",
  cityPlaceholder: "Dover, DE",
  emailPlaceholder: "dr.ross@littlesproutspeds.com",
  messagePlaceholder:
    "Tell us about your practice, your current website, or the families you want more of — well visits, newborn care, sick care...",
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
          __html: JSON.stringify(pediatricWebFaqJsonLd),
        }}
      />

      <div className="hiw-page hiw-theme-pediatrician">
        <main>
          {/* 1. Hero */}
          <section className="hiw-hero">
            <div className="hiw-container">
              <div className="hiw-hero-grid">
                <div className="hiw-hero-copy">
                  <p className="hiw-eyebrow">Pediatrician Website Design</p>
                  <h1 className="hiw-hero-h1">
                    Pediatrician website design that turns visitors into{" "}
                    <span className="hiw-hl">new-patient families</span>
                  </h1>
                  <p className="hiw-hero-sub">
                    Zonic Media designs pediatric websites that work like a
                    patient acquisition system — online scheduling, new-patient
                    info, insurance UX, and warm, mobile-first design parents
                    trust. Our{" "}
                    <Link href="/services/web-design" className="hiw-inline-link">
                      website design services
                    </Link>{" "}
                    are built around booked visits, not another brochure site.
                  </p>
                  <div className="hiw-hero-ctas">
                    <HashScrollLink
                      href="#hiw-form"
                      className="hiw-btn"
                      offset={120}
                    >
                      Start Your Pediatric Website
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
                    <div className="hiw-ph">
                      <span>Pediatric website mockup</span>
                    </div>
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
                    <span>Planning a new pediatric website?</span>
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
                    <div className="hiw-ph">
                      <span>Pediatrician with a young patient</span>
                    </div>
                  </div>
                  <div className="hiw-collage-img-2">
                    <div className="hiw-ph">
                      <span>Pediatric website on desktop</span>
                    </div>
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
                          Pediatric Web Design • Zonic Media •
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
                    <span className="hiw-hl-text">first visit</span> a parent
                    gives your practice
                  </h2>
                  <p className="hiw-lead">
                    Before a parent ever brings their child in, they have already
                    judged your practice — on their phone, often worried, in about
                    five seconds. They looked for your reviews, checked whether you
                    take their insurance, and tried to schedule. If any of that was
                    slow, confusing, or missing, they tapped the next pediatrician
                    on the list.
                  </p>
                  <p className="hiw-lead">
                    Great pediatric website design closes that gap: it answers the
                    three questions every parent has — can I trust you with my
                    child, do you take my insurance, and how do I get in — and then
                    makes scheduling effortless. It is also the foundation of any
                    wider{" "}
                    <Link
                      href="/services/industry/pediatricians"
                      className="hiw-inline-link"
                    >
                      pediatric SEO
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
                    Pediatrician website design for every stage of your practice
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
                <p className="hiw-eyebrow">Every Kind of Visit</p>
                <h2 className="hiw-h2">
                  Web design for every kind of pediatric care
                </h2>
                <p className="hiw-lead">
                  Well-child visits, sick care, vaccinations, newborn care, and
                  sports physicals — we design around the care you provide, the
                  insurance you accept, and the way parents in your community
                  search. Your site should feel like your practice, not like a
                  template every competitor is also using — and it should be built
                  to rank with{" "}
                  <Link
                    href="/services/industry/pediatricians"
                    className="hiw-inline-link"
                  >
                    pediatric SEO
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
                <div className="hiw-ph">
                  <span>Responsive pediatric website preview</span>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Lead system */}
          <section className="hiw-system">
            <div className="hiw-container">
              <div className="hiw-sec-head-center">
                <p className="hiw-eyebrow">The Patient Acquisition System</p>
                <h2 className="hiw-h2">
                  More than a brochure — a system built to book families
                </h2>
                <p className="hiw-lead">
                  Most pediatric websites are digital business cards: a photo of
                  the office, a list of services, a contact form nobody fills out.
                  We design every site as a working system, where each page has one
                  job — moving a parent closer to a scheduled visit.
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
                    The anatomy of a high-converting pediatric website
                  </h2>
                  <p className="hiw-lead">
                    The best pediatric website design is not about decoration — it
                    is a checklist of things parents and search engines both
                    expect. Every website we ship includes all eight, as standard,
                    not as upsells.
                  </p>
                  <p className="hiw-lead">
                    Miss any one of them and you leak families: slow pages lose
                    anxious parents, missing insurance info loses the visit, and a
                    site without local schema loses map-pack visibility to the
                    practice down the street.
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
                      href="/services/industry/pediatricians"
                      className="hiw-inline-link"
                    >
                      pediatric SEO
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
                  <h3>Fast on the phones parents actually use</h3>
                  <p>
                    Mobile-first layouts and Core Web Vitals-friendly builds,
                    because most pediatric searches happen on a phone, often from a
                    parent with a sick child on their lap.
                  </p>
                </article>
                <article className="hiw-why-card">
                  <span className="hiw-why-card-icon">
                    <FiShield aria-hidden="true" />
                  </span>
                  <h3>Compliance-minded from the first wireframe</h3>
                  <p>
                    HIPAA-aware forms, accessible layouts, and honest tracking —
                    so your marketing site never becomes a liability for your
                    practice.
                  </p>
                </article>
              </div>
              <div className="hiw-why-banner">
                <div className="hiw-why-banner-text">
                  <p className="hiw-eyebrow">Free Strategy Call</p>
                  <h3>Not sure what your practice actually needs?</h3>
                  <p>
                    Tell us your goals and we&apos;ll map the exact pages,
                    scheduling flows, and local SEO foundations your site needs —
                    no obligation, and no sales script.
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
                <p className="hiw-eyebrow">Why Pediatricians Choose Us</p>
                <h2 className="hiw-h2">Warmth parents feel from the first click</h2>
                <p className="hiw-lead">
                  A website built by a team that understands how parents choose a
                  pediatrician — and what makes them schedule instead of keep
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
                  brand="Little Sprouts Pediatrics"
                  url="littlesproutspeds.com"
                  navCta="Book Visit"
                  headline="Caring for kids, every stage."
                  primaryCta="Book a Visit"
                  chips={["Well Visits", "Sick Care", "Vaccines"]}
                  toastTitle="New appointment booked"
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
                  Pediatrician website design across the United States
                </h2>
                <p className="hiw-lead">
                  From solo practices to multi-provider groups, Zonic Media designs
                  pediatric websites for practices in every state. Because
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
                    Everything pediatricians ask us about website design
                  </h2>
                  <p className="hiw-lead">
                    Straight answers on pricing, timelines, online scheduling, and
                    what happens to your current rankings. If your question is not
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
                  <GmbFaqs items={PediatricWebFaqs} />
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
                  Your website is step one. Here is what fills it with families.
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
                    Book your free pediatric website consult
                  </h2>
                  <p className="hiw-lead">
                    Tell us about your practice and we will send a custom homepage
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
                  Zonic Media is a digital growth agency helping pediatric
                  practices turn website visitors into new-patient families.
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
