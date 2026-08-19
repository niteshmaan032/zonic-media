import type { Metadata } from "next";
import "@/app/style/dentalWeb.css";
import DentalWebLeadForm from "@/app/components/DentalWebLeadForm";
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
  FiShield,
  FiZap,
} from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import {
  MdOutlineHealthAndSafety,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import { RiLineChartLine, RiPagesLine, RiSearchLine } from "react-icons/ri";

const PAGE_PATH = "/services/dental-website-design";

export const metadata: Metadata = {
  title: "Dental Website Design That Books Patients",
  description:
    "Dental website design built as a patient acquisition system — online booking flows, insurance verification UX, treatment landing pages, and HIPAA-aware forms.",
  keywords: [
    "dental website design",
    "dental web design",
    "dental practice website design",
    "websites for dentists",
    "dental website redesign",
    "dental website design company",
    "dental landing page design",
    "HIPAA aware dental websites",
    "online booking for dental websites",
    "dentist web designer",
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
    title: "Dental Website Design That Books Patients | Zonic Media",
    description:
      "Dental website design built as a patient acquisition system — online booking flows, insurance verification UX, treatment landing pages, and HIPAA-aware forms.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Dental Website Design", url: PAGE_PATH },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dental Website Design",
  serviceType: "Dental Practice Website Design",
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Custom dental practice website design with online booking flows, insurance verification UX, treatment-specific landing pages, and HIPAA-aware forms.",
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
    name: "Dental Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "New Practice Websites" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Dental Website Redesigns" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Treatment Landing Pages",
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

const DentalWebFaqs = [
  {
    question: "How Much Does Dental Website Design Cost?",
    answer:
      "Pricing depends on the size of the build: number of pages, treatment landing pages, booking and insurance integrations, and whether content and photography are included. A focused redesign costs considerably less than a large multi-location build. After a short discovery call we quote a flat project price, so there are no hourly surprises.",
  },
  {
    question: "How Long Does It Take to Design a Dental Website?",
    answer:
      "Most dental practice websites launch in one to two weeks. You see a free homepage mockup within about a week of our discovery call, and once the design direction is approved we move into build, content, and on-page SEO. Larger sites with many treatment pages or custom integrations can take longer.",
  },
  {
    question: "Will My Dental Website be HIPAA Compliant?",
    answer:
      "We build HIPAA-aware: secure encrypted forms, no patient information passed to analytics or ad pixels, and intake flows designed so protected health information is handled by your practice systems, not the marketing site. Full HIPAA compliance also depends on your internal processes and the agreements you hold with software vendors, and we flag exactly what to confirm on your side.",
  },
  {
    question: "Can You Integrate Online Booking Software?",
    answer:
      "Yes. We integrate the scheduling tools dental offices already use, such as NexHealth, LocalMed, and Flex, or build a structured appointment request flow that routes straight to your front desk. Either way, patients can request a visit without calling during office hours.",
  },
  {
    question: "Can You Redesign My Site Without Losing My Current Rankings?",
    answer:
      "Yes. Before anything goes live we map every existing URL, preserve or redirect each page, and carry over the content that is earning you rankings today. Redesigns should recover and grow traffic, not reset it — protecting existing SEO equity is a standard part of our launch checklist.",
  },
];

const dentalWebFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}${PAGE_PATH}`,
  mainEntity: DentalWebFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const AboutChecks = [
  "Booking-first layouts",
  "Insurance Verification UX",
  "HIPAA-Aware Forms",
  "Local SEO foundations",
];

const ServiceCards = [
  {
    icon: <FiLayout aria-hidden="true" />,
    title: "New Practice Websites",
    desc: (
      <>
        Opening or rebranding? We design your site from sitemap to launch —
        booking flows, insurance pages, and{" "}
        <Link
          href="/services/local-seo-for-home-services"
          className="dw-inline-link"
        >
          local SEO foundations
        </Link>{" "}
        included from day one.
      </>
    ),
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    title: "Dental Website Redesigns",
    desc: "Outdated site that never rings the phone? We rebuild it around patient conversion and map every existing URL so your rankings carry over on launch day.",
  },
  {
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Treatment Landing Pages",
    desc: "Dedicated pages for implants, Invisalign, veneers, and emergency dentistry — each built around a single treatment and a single action: book.",
  },
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Booking Integration",
    desc: "NexHealth, LocalMed, Flex, or a clean appointment request flow routed to your front desk — patients book in a few taps, day or night.",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Insurance & New-Patient Pages",
    desc: "Clear insurance participation, financing options, and new-patient info that answer objections before patients ever call the office.",
  },
  {
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Website Care & Growth",
    desc: "Hosting, updates, tracking, and conversion improvements after launch — your site keeps getting better instead of quietly going stale.",
  },
];

const BandStats = [
  { num: "50+", label: "Local business sites launched" },
  { num: "6+", label: "Dental specialties designed for" },
  { num: "24/7", label: "Online booking, even after hours" },
  { num: "1–2 wks", label: "Typical design-to-launch" },
];

const SystemCards = [
  {
    icon: <LuCalendarCheck2 aria-hidden="true" />,
    title: "Online Booking Flows",
    desc: "Patients book or request appointments in a few taps — integrated with the scheduling tools dental offices already use.",
  },
  {
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Insurance Verification UX",
    desc: "Patients confirm you take their plan before they book, so your front desk stops answering “do you accept my insurance?”",
  },
  {
    icon: <RiPagesLine aria-hidden="true" />,
    title: "Treatment Landing Pages",
    desc: "Implants, Invisalign, veneers, emergency dentistry — each high-value treatment gets its own page built to rank and convert.",
  },
  {
    icon: <MdOutlineHealthAndSafety aria-hidden="true" />,
    title: "HIPAA-Aware Forms",
    desc: "Encrypted intake and contact forms designed so patient information never leaks into analytics or ad pixels.",
  },
];

const AnatomyItems = [
  {
    title: "Mobile-First Design",
    desc: "Most patients find a dentist on their phone — every layout starts at 375px, not on a desktop monitor.",
  },
  {
    title: "Click-to-Call & Tap-to-Book",
    desc: "One thumb-tap from any page to a call or an appointment request, always visible, never buried.",
  },
  {
    title: "Google Reviews Integration",
    desc: "Your best reviews pulled onto the site where hesitant patients actually read them.",
  },
  {
    title: "Fast Core Web Vitals",
    desc: "Pages that load in under two seconds — speed is a ranking factor and a patience factor.",
  },
  {
    title: "ADA-Accessible Layouts",
    desc: "Readable contrast, keyboard navigation, and screen-reader support that also protect your practice legally.",
  },
  {
    title: "Patient Education Content",
    desc: "Treatment pages written in plain language that answer real questions and earn rankings.",
  },
  {
    title: "Local Schema Markup",
    desc: "Structured data that tells Google exactly who you are, where you practice, and what you treat.",
  },
  {
    title: "Secure Hosting & SSL",
    desc: "Fast, monitored hosting with daily backups — your site stays online and stays yours.",
  },
];

const ProcessSteps = [
  {
    num: "01",
    title: "Discovery & Patient Journey Mapping",
    desc: "The treatments you want more of, the insurance you accept, how your front desk books today, and who outranks you — mapped into the pages and flows your site needs.",
  },
  {
    num: "02",
    title: "Free Homepage Mockup",
    desc: "Within about a week you see a custom homepage mockup built around your brand and your patients — before you commit to the full project.",
  },
  {
    num: "03",
    title: "Build, Content & on-Page SEO",
    desc: "Treatment pages, booking integration, and HIPAA-aware forms — every page written around the searches patients use, with schema and fast load times baked in.",
  },
  {
    num: "04",
    title: "Launch, Tracking & Growth",
    desc: "Every form tested, every old URL redirected, call and form tracking wired up — then dental SEO and GBP services keep the pipeline growing.",
  },
];

const BannerFeats = [
  {
    icon: <FiZap aria-hidden="true" />,
    title: "Conversion-First Design",
    desc: "Every layout decision serves one goal: turning visitors into booked patients.",
  },
  {
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Built-in Local SEO",
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
    desc: "Every site plugs straight into dental SEO and Google Business Profile work when you are ready to scale.",
  },
];

const MarqueeItems = [
  "Dental Website Design",
  "Online Booking",
  "Insurance Verification",
  "Treatment Landing Pages",
  "HIPAA-Aware Forms",
  "Local SEO",
];

const NationwideChips = [
  "General & Family Dentistry",
  "Pediatric Dentistry",
  "Orthodontics & Invisalign",
  "Cosmetic Dentistry",
  "Implants & Oral Surgery",
  "Emergency Dentistry",
  "Multi-Location Groups & DSOs",
];

const GrowCards = [
  {
    href: "/services/industry/dental-seo-services",
    icon: <RiLineChartLine aria-hidden="true" />,
    title: "Dental SEO Services",
    desc: "Rank for the treatments that grow revenue — implants, Invisalign, emergency dentistry — across Google Search and Maps.",
    cta: "Explore dental SEO",
  },
  {
    href: "/services/gmb-optimization",
    icon: <MdOutlineVerifiedUser aria-hidden="true" />,
    title: "Google Business Profile Optimization",
    desc: "Most patients pick a dentist straight from the map pack. We optimize your profile so that dentist is you.",
    cta: "Optimize your profile",
  },
  {
    href: "/services/local-seo-for-home-services",
    icon: <RiSearchLine aria-hidden="true" />,
    title: "Local SEO Services",
    desc: "Citations, reviews, and local landing pages that make your practice the obvious choice in every nearby search.",
    cta: "See local SEO",
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
          __html: JSON.stringify(dentalWebFaqJsonLd),
        }}
      />

      <div className="dw-page">
        <main>
        {/* 1. Hero */}
        <section className="dw-hero">
          <div className="dw-container">
            <div className="dw-hero-grid">
              <div className="dw-hero-copy">
                <p className="dw-eyebrow">Dental Website Design</p>
                <h1 className="dw-hero-h1">
                  Dental Website Design{" "}
                  <span className="dw-h1-img" aria-hidden="true">
                    <Image
                      src="/images/dental-web/hero-title-img-1.webp"
                      alt=""
                      fill
                      sizes="120px"
                    />
                  </span>{" "}
                  That Turns Visitors into{" "}
                  <span className="dw-hl">Booked Patients</span>{" "}
                  <span className="dw-h1-img" aria-hidden="true">
                    <Image
                      src="/images/dental-web/hero-title-img-2.webp"
                      alt=""
                      fill
                      sizes="120px"
                    />
                  </span>
                </h1>
                <p className="dw-hero-sub">
                  Zonic Media designs dental practice websites that work like a
                  patient acquisition system — online booking flows, insurance
                  verification UX, treatment-specific landing pages, and
                  HIPAA-aware forms. Our{" "}
                  <Link href="/services/web-design" className="dw-inline-link">
                    website design services
                  </Link>{" "}
                  are built around booked appointments, not another brochure
                  site.
                </p>
                <div className="dw-hero-ctas">
                  <HashScrollLink
                    href="#dental-web-form"
                    className="dw-btn"
                    offset={120}
                  >
                    Start Your Dental Website
                  </HashScrollLink>
                  <a href={SITE_CONTACT.phoneHref} className="dw-btn-ghost">
                    <FiPhoneCall aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="dw-hero-stats">
                  <div className="dw-stat">
                    <p className="dw-stat-num">50+</p>
                    <p className="dw-stat-label">Local business sites launched</p>
                  </div>
                  <div className="dw-stat">
                    <p className="dw-stat-num">4.9/5</p>
                    <p className="dw-stat-label">Average client rating</p>
                  </div>
                  <div className="dw-stat">
                    <p className="dw-stat-num">1–2 wks</p>
                    <p className="dw-stat-label">Typical design-to-launch</p>
                  </div>
                </div>
              </div>

              <div className="dw-hero-visual">
                <div className="dw-hero-img">
                  <Image
                    src="/images/dental-web/hero-image-primary-v2.webp"
                    alt="Dentist reviewing a modern dental practice website on a laptop in her clinic"
                    fill
                    priority
                    sizes="(max-width: 991px) 100vw, 45vw"
                  />
                </div>
                <div className="dw-hero-badge">
                  <span className="dw-hero-badge-stars" aria-hidden="true">
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
                    className="dw-hero-badge-phone"
                    aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
                  >
                    <FiPhoneCall aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Contact strip (inside hero) */}
            <div className="dw-strip-inner">
              <div className="dw-strip-cell dw-strip-cell-main">
                <span className="dw-strip-icon">
                  <FiPhoneCall aria-hidden="true" />
                </span>
                <p>
                  <span>Planning a new dental website?</span>
                  <a href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
              <div className="dw-strip-cell">
                <p>
                  <span>Office hours</span>
                  <strong>Mon–Fri, 9:00 AM – 6:00 PM EST</strong>
                </p>
              </div>
              <div className="dw-strip-cell">
                <p>
                  <span>Response time</span>
                  <strong>Within one business day</strong>
                </p>
              </div>
              <HashScrollLink
                href="#dental-web-form"
                className="dw-btn dw-strip-cta"
                offset={120}
              >
                See what we&apos;d build for you
                <span className="dw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 3. First impressions */}
        <section className="dw-about">
          <div className="dw-container">
            <div className="dw-about-grid">
              <div className="dw-collage">
                <div className="dw-collage-img-1">
                  <Image
                    src="/images/dental-web/first-impressions-img-1.webp"
                    alt="Dental practice website shown on a laptop in a modern treatment room"
                    fill
                    sizes="(max-width: 991px) 80vw, 32vw"
                  />
                </div>
                <div className="dw-collage-img-2">
                  <Image
                    src="/images/dental-web/first-impressions-img-2.webp"
                    alt="Dental website design displayed on a desktop monitor in a dental office"
                    fill
                    sizes="(max-width: 991px) 70vw, 30vw"
                  />
                </div>
                <div className="dw-collage-badge" aria-hidden="true">
                  <svg viewBox="0 0 120 120">
                    <defs>
                      <path
                        id="dwBadgeCircle"
                        d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#dwBadgeCircle">
                        Dental Web Design • Zonic Media •
                      </textPath>
                    </text>
                  </svg>
                  <span className="dw-collage-badge-icon">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
              <div className="dw-about-copy">
                <p className="dw-eyebrow">First Impressions</p>
                <h2 className="dw-h2">
                  Your Website is the{" "}
                  <span className="dw-hl-text">First Exam</span> Patients Give
                  Your Practice
                </h2>
                <p className="dw-lead">
                  Before a patient ever sits in your chair, they have already
                  judged your practice — on their phone, in about five seconds.
                  They looked for your reviews, checked whether you take their
                  insurance, and tried to figure out how to book. If any of
                  that was slow, confusing, or missing, they tapped the next
                  practice on the list.
                </p>
                <p className="dw-lead">
                  Great dental website design closes that gap: it answers the
                  three questions every patient has — can I trust you, do you
                  take my insurance, and how fast can I get in — and then makes
                  booking effortless. It is also the foundation of any wider{" "}
                  <Link
                    href="/services/dental-marketing-agency"
                    className="dw-inline-link"
                  >
                    dental marketing
                  </Link>{" "}
                  program you run.
                </p>
                <div className="dw-checks">
                  {AboutChecks.map((check) => (
                    <div className="dw-check" key={check}>
                      <FaCircleCheck aria-hidden="true" />
                      {check}
                    </div>
                  ))}
                </div>
                <Link href="/about" className="dw-btn">
                  More About Zonic Media
                  <span className="dw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What we build — 6 icon cards */}
        <section className="dw-services" id="dw-services">
          <div className="dw-container">
            <div className="dw-sec-head">
              <div>
                <p className="dw-eyebrow">What We Build</p>
                <h2 className="dw-h2">
                  Dental Website Design for Every Stage of Your Practice
                </h2>
              </div>
              <Link href="/services" className="dw-link-arrow">
                View all services <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className="dw-cards">
              {ServiceCards.map((card) => (
                <article className="dw-card" key={card.title}>
                  <span className="dw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Split band */}
        <section className="dw-band">
          <div className="dw-band-grid">
            <div className="dw-band-content">
              <p className="dw-eyebrow">Every Specialty</p>
              <h2 className="dw-h2">
                Web Design for Every Kind of Dentistry
              </h2>
              <p className="dw-lead">
                General and family practices, pediatric dentistry,
                orthodontics, oral surgery, cosmetic studios, and
                multi-location groups — we design around your patient mix, your
                treatments, and the way your community searches for care. Your
                site should feel like your practice, not like a template every
                competitor is also using, whether you serve families or need
                sharper visibility for{" "}
                <Link
                  href="/services/industry/pediatricians"
                  className="dw-inline-link"
                >
                  pediatric dental SEO
                </Link>
                .
              </p>
              <div className="dw-band-stats">
                {BandStats.map((stat) => (
                  <div className="dw-band-stat" key={stat.num}>
                    <strong>{stat.num}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <HashScrollLink
                href="#dental-web-form"
                className="dw-btn"
                offset={120}
              >
                Get a Custom Design Plan
                <span className="dw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
            <div className="dw-band-media">
              <Image
                src="/images/dental-web/every-specialty-image.webp"
                alt="Responsive dental website design shown across desktop and tablet"
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* 6. Patient acquisition system */}
        <section className="dw-system">
          <div className="dw-container">
            <div className="dw-sec-head-center">
              <p className="dw-eyebrow">The Patient Acquisition System</p>
              <h2 className="dw-h2">
                More Than a Brochure — A System Built to Book Patients
              </h2>
              <p className="dw-lead">
                Most dental websites are digital business cards: a photo of the
                office, a list of services, a contact form nobody fills out. We
                design every site as a working system, where each page has one
                job — moving a visitor closer to a booked appointment.
              </p>
            </div>
            <div className="dw-feat-cards">
              {SystemCards.map((card) => (
                <article className="dw-feat-card" key={card.title}>
                  <span className="dw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Anatomy of a high-converting dental website */}
        <section className="dw-anatomy">
          <div className="dw-container">
            <div className="dw-anatomy-grid">
              <div>
                <p className="dw-eyebrow">Built Into Every Site</p>
                <h2 className="dw-h2">
                  The Anatomy of a High-Converting Dental Website
                </h2>
                <p className="dw-lead">
                  The best dental website design is not about decoration — it
                  is a checklist of things patients and search engines both
                  expect. Every website we ship includes all eight, as
                  standard, not as upsells.
                </p>
                <p className="dw-lead">
                  Miss any one of them and you leak patients: slow pages lose
                  mobile visitors, missing reviews lose trust, and a site
                  without local schema loses map-pack visibility to the
                  practice down the street.
                </p>
                <div className="dw-anatomy-cta">
                  <HashScrollLink
                    href="#dental-web-form"
                    className="dw-btn"
                    offset={120}
                  >
                    Get Every Feature, Standard
                    <span className="dw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div className="dw-anatomy-list">
                {AnatomyItems.map((item) => (
                  <div className="dw-anatomy-item" key={item.title}>
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

        {/* 8. Why choose us — gradient cards */}
        <section className="dw-why">
          <div className="dw-container">
            <div className="dw-sec-head-center">
              <p className="dw-eyebrow">Why Zonic Media</p>
              <h2 className="dw-h2">Designed to Convert. Built to Rank.</h2>
              <p className="dw-lead">
                A beautiful website that nobody finds is as useless as a
                ranking site that nobody trusts. We build both halves at once,
                so design and search work together from the first wireframe.
              </p>
            </div>
            <div className="dw-why-cards">
              <article className="dw-why-card">
                <span className="dw-why-card-icon">
                  <RiSearchLine aria-hidden="true" />
                </span>
                <h3>A Local SEO Foundation, Not an Afterthought</h3>
                <p>
                  Schema markup, keyword-mapped pages, and a structure that
                  plugs straight into{" "}
                  <Link
                    href="/services/industry/dental-seo-services"
                    className="dw-inline-link"
                  >
                    dental SEO
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="dw-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>{" "}
                  when you are ready to grow.
                </p>
              </article>
              <article className="dw-why-card">
                <span className="dw-why-card-icon">
                  <FiZap aria-hidden="true" />
                </span>
                <h3>Fast on the Phones Patients Actually Use</h3>
                <p>
                  Mobile-first layouts and Core Web Vitals-friendly builds,
                  because most dental searches happen on a phone and slow pages
                  lose patients before they load.
                </p>
              </article>
              <article className="dw-why-card">
                <span className="dw-why-card-icon">
                  <FiShield aria-hidden="true" />
                </span>
                <h3>Compliance-Minded from the First Wireframe</h3>
                <p>
                  HIPAA-aware forms, accessible layouts, and honest tracking —
                  so your marketing site never becomes a liability for your
                  practice.
                </p>
              </article>
            </div>
            <div className="dw-why-banner">
              <div className="dw-why-banner-text">
                <p className="dw-eyebrow">Free Strategy Call</p>
                <h3>Not Sure What Your Practice Actually Needs?</h3>
                <p>
                  Tell us your goals and we&apos;ll map the exact pages, booking
                  flows, and local SEO foundations your site needs — no
                  obligation, and no sales script.
                </p>
              </div>
              <div className="dw-why-banner-actions">
                <HashScrollLink
                  href="#dental-web-form"
                  className="dw-btn"
                  offset={120}
                >
                  Book a Free Strategy Call
                  <span className="dw-btn-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>
            </div>
          </div>
        </section>

        {/* 9. How it works — steps */}
        <section className="dw-process" id="dw-process">
          <div className="dw-container">
            <div className="dw-sec-head">
              <div>
                <p className="dw-eyebrow">How It Works</p>
                <h2 className="dw-h2">
                  From First Call to Launch in Four Steps
                </h2>
              </div>
              <HashScrollLink
                href="#dental-web-form"
                className="dw-link-arrow"
                offset={120}
              >
                Start with step one <FiArrowUpRight aria-hidden="true" />
              </HashScrollLink>
            </div>
            <div className="dw-steps">
              {ProcessSteps.map((step) => (
                <div className="dw-step" key={step.num}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <span className="dw-step-num" aria-hidden="true">
                    {step.num}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Banner (full width) */}
        <section className="dw-banner">
          <div className="dw-banner-grid">
            <div className="dw-banner-copy">
              <p className="dw-eyebrow">Why Dentists Choose Us</p>
              <h2 className="dw-h2">
                Excellence Your Patients Can See from the First Click
              </h2>
              <p className="dw-lead">
                A website built by a team that understands how patients choose
                a dentist — and what makes them book instead of keep scrolling.
                If the project touches ads, content, or profile work, our{" "}
                <Link href="/services" className="dw-inline-link">
                  full-service marketing
                </Link>{" "}
                team can keep the whole system aligned.
              </p>
              <Link href="/contact-us" className="dw-btn">
                Contact Us
                <span className="dw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </div>
            <div className="dw-banner-media">
              <ServiceSiteMockup
                prefix="dw"
                brand="Bright Smile Dental"
                url="brightsmiledental.com"
                navCta="Book Now"
                headline="Modern dentistry, gentle care."
                primaryCta="Book Appointment"
                chips={["Implants", "Invisalign", "Whitening"]}
                toastTitle="New appointment booked"
              />
            </div>
            <div className="dw-banner-feats">
              {BannerFeats.map((feat) => (
                <div className="dw-banner-feat" key={feat.title}>
                  <span className="dw-banner-feat-icon">{feat.icon}</span>
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
        <div className="dw-marquee" aria-hidden="true">
          <div className="dw-marquee-track">
            {[0, 1].map((copy) => (
              <span className="dw-marquee-item" key={copy}>
                {MarqueeItems.map((item) => (
                  <span className="dw-marquee-item" key={item}>
                    {item} <FaStar aria-hidden="true" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* 12. Nationwide */}
        <section className="dw-nationwide">
          <div className="dw-container">
            <div className="dw-sec-head-center">
              <p className="dw-eyebrow">Wherever You Practice</p>
              <h2 className="dw-h2">
                Dental Website Design Services Across the United States
              </h2>
              <p className="dw-lead">
                From single-chair startups to multi-location groups, Zonic
                Media designs dental websites for practices in every state.
                Because everything happens remotely — discovery calls, design
                reviews, launch — you get the same process whether you practice
                in Delaware, Texas, or California.
              </p>
            </div>
            <div className="dw-chips">
              {NationwideChips.map((chip) => (
                <span className="dw-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="dw-nationwide-cta">
              <HashScrollLink
                href="#dental-web-form"
                className="dw-btn"
                offset={120}
              >
                Request Your Free Mockup
                <span className="dw-btn-circ">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* 13. FAQs */}
        <section className="dw-faqs" id="dw-faqs">
          <div className="dw-container">
            <div className="dw-split-grid">
              <div>
                <p className="dw-eyebrow">FAQs</p>
                <h2 className="dw-h2">
                  Everything Dentists Ask Us About Website Design
                </h2>
                <p className="dw-lead">
                  Straight answers on pricing, timelines, compliance, and what
                  happens to your current rankings. If your question is not here,
                  or you are facing a suspension and need{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="dw-inline-link"
                  >
                    Google Business Profile reinstatement help
                  </Link>, send it through the form — a strategist answers, not a
                  sales script.
                </p>
                <div className="dw-faq-cta">
                  <HashScrollLink
                    href="#dental-web-form"
                    className="dw-btn"
                    offset={120}
                  >
                    Ask About Your Project
                    <span className="dw-btn-circ">
                      <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </HashScrollLink>
                </div>
              </div>
              <div>
                <GmbFaqs items={DentalWebFaqs} />
              </div>
            </div>
          </div>
        </section>

        {/* 14. Grow further — internal links */}
        <section className="dw-grow">
          <div className="dw-container">
            <div className="dw-sec-head-center">
              <p className="dw-eyebrow">Grow Further</p>
              <h2 className="dw-h2">
                Your Website is Step One. Here is What Fills It with Patients.
              </h2>
            </div>
            <div className="dw-grow-cards">
              {GrowCards.map((card) => (
                <Link href={card.href} className="dw-grow-card" key={card.href}>
                  <span className="dw-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className="dw-grow-link">
                    {card.cta} <FiArrowUpRight aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Lead form */}
        <section className="dw-form-sec" id="dental-web-form">
          <div className="dw-container">
            <div className="dw-form-grid">
              <aside className="dw-form-aside">
                <p className="dw-eyebrow">Get Started</p>
                <h2 className="dw-h2">
                  Book Your Free Dental Website Consult
                </h2>
                <p className="dw-lead">
                  Tell us about your practice and we will send a custom homepage
                  mockup plus a flat-price quote — free, and yours to keep
                  either way.
                </p>

                <div className="dw-form-contacts">
                  <a href={SITE_CONTACT.emailHref} className="dw-form-contact">
                    <span className="dw-form-contact-icon">
                      <FiMail aria-hidden="true" />
                    </span>
                    <span className="dw-form-contact-txt">
                      <small>Email us anytime</small>
                      <strong>{SITE_CONTACT.email}</strong>
                    </span>
                  </a>
                  <a href={SITE_CONTACT.phoneHref} className="dw-form-contact">
                    <span className="dw-form-contact-icon">
                      <FiPhoneCall aria-hidden="true" />
                    </span>
                    <span className="dw-form-contact-txt">
                      <small>Speak with a strategist</small>
                      <strong>{SITE_CONTACT.phoneDisplay}</strong>
                    </span>
                  </a>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dw-form-contact"
                  >
                    <span className="dw-form-contact-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <span className="dw-form-contact-txt">
                      <small>Visit our office</small>
                      <strong>{SITE_CONTACT.address}</strong>
                    </span>
                  </a>
                </div>
              </aside>
              <div className="dw-form-main">
                <DentalWebLeadForm />
              </div>
            </div>
          </div>
        </section>
        </main>

        {/* 16. Page footer */}
        <footer className="dw-footer">
          <div className="dw-container">
            <div className="dw-footer-grid">
              <div className="dw-footer-brand">
                <Link href="/" aria-label="Zonic Media — home">
                  <Image
                    src="/images/logo.webp"
                    alt="Zonic Media"
                    width={160}
                    height={44}
                  />
                </Link>
                <p>
                  Zonic Media is a digital growth agency helping dental
                  practices turn website visitors into booked patients.
                </p>
                <div className="dw-footer-social">
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

              <div className="dw-footer-col">
                <h3>On This Page</h3>
                <ul>
                  <li>
                    <HashScrollLink href="#dw-services" offset={96}>
                      What We Build
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#dw-process" offset={96}>
                      How It Works
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#dw-faqs" offset={96}>
                      FAQs
                    </HashScrollLink>
                  </li>
                  <li>
                    <HashScrollLink href="#dental-web-form" offset={120}>
                      Free Mockup
                    </HashScrollLink>
                  </li>
                </ul>
              </div>

              <div className="dw-footer-col">
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

              <div className="dw-footer-col">
                <h3>Talk to Us</h3>
                <ul className="dw-footer-contact">
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

            <div className="dw-footer-bottom">
              <p>
                © {new Date().getFullYear()} Zonic Media LLC. All rights
                reserved.
              </p>
              <div className="dw-footer-legal">
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
