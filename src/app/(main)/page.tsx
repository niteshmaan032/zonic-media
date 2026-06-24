import Script from "next/script";
import "./page.css";
import Footer from "@/app/components/Footer";
import RankGrid from "@/app/components/RankGrid";
import ClutchWidget from "@/app/components/ClutchWidget";
import Blogs from "@/app/components/Blogs";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import LaunchpadVideo from "@/app/components/LaunchpadVideo";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import { Metadata } from "next";

function BtnArrow() {
  return (
    <span className="buttons__icon-wrapper">
      <svg
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="buttons__icon-svg"
        width="8"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        />
      </svg>
      <svg
        viewBox="0 0 14 15"
        fill="none"
        width="8"
        xmlns="http://www.w3.org/2000/svg"
        className="buttons__icon-svg buttons__icon-svg--copy"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export const metadata: Metadata = {
  title: {
    absolute:
      "Marketing Agency for Small & Mid-Size Businesses | Zonic Media",
  },
  description:
    "Zonic Media is a marketing agency for small and mid-size US businesses. Local SEO, Google Business Profile, website design, graphic & logo design, and PPC ads under one roof. No. 1 local SEO agency for small businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Marketing Agency for Small & Mid-Size Businesses | Zonic Media",
    description:
      "Local SEO, Google Business Profile, website design, graphic & logo design, and PPC ads for small and mid-size US businesses.",
    url: "/",
    type: "website",
  },
};

export const revalidate = 300;

const SITE_URL = "https://www.zonicllc.com";

const siteNavigationItems = [
  { name: "Home", url: SITE_URL },
  { name: "Services", url: `${SITE_URL}/services` },
  { name: "Local SEO", url: `${SITE_URL}/services/local-seo-for-home-services` },
  { name: "GMB Reinstatement", url: `${SITE_URL}/services/gmb-reinstatement-help` },
  { name: "Launchpad", url: `${SITE_URL}/services/launchpad` },
  { name: "Blog", url: `${SITE_URL}/blog` },
  { name: "About Us", url: `${SITE_URL}/about` },
  { name: "Contact Us", url: `${SITE_URL}/contact-us` },
];

const siteNavigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "@id": `${SITE_URL}/#site-navigation`,
  name: siteNavigationItems.map((item) => item.name),
  url: siteNavigationItems.map((item) => item.url),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Zonic Media",
  url: SITE_URL,
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Local SEO and Google Business Profile Management",
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
    name: "Local Growth Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Reinstatement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Google Ads Management" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design and Development",
        },
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of businesses does Zonic Media work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with US local and service-based businesses: roofers, HVAC, plumbers, electricians, pest control, dental practices, real estate, cleaning companies, towing, and other local service providers. Our focus is helping these businesses get found on Google and turn nearby searches into phone calls.",
      },
    },
    {
      "@type": "Question",
      name: "Can you really get a suspended Google Business Profile reinstated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Profile reinstatement is one of our core specialties. We have helped reinstate more than 500 Google Business Profiles by diagnosing the suspension cause, fixing the underlying policy issues, and managing the appeal process. No agency can promise Google's decision, but we know the process and the common failure points.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with businesses in Delaware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We are based in Dover, Delaware and have deep roots in the Mid-Atlantic, but we serve local businesses across the United States. Our work is remote-first, so location is not a barrier to working together.",
      },
    },
    {
      "@type": "Question",
      name: "How is local SEO different from regular SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO focuses on getting your business into the Google Map Pack and local search results for customers searching nearby. It centers on your Google Business Profile, local citations, reviews, and location-relevant content, rather than competing nationally for broad keywords.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the service. Google Ads can generate qualified calls within the first weeks of launch. Local SEO and Map Pack ranking typically build over a few months as Google rebuilds trust in your profile and citations. Profile reinstatement timelines depend on Google's review process.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require long-term contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We don't lock you into long-term contracts. We earn the relationship month to month by delivering results, and most clients stay because the leads keep coming, not because they're contractually tied to us.",
      },
    },
  ],
};

export default async function Home() {
  const blogs = await getPublishedBlogs(6);

  return (
    <>
      <Script
        id="home-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="home-site-navigation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
      />
      <Script
        id="home-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="home-revamp">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid row g-4 g-lg-5 align-items-center">
              <div className="hero-copy col-md-7 col-lg-8">
                <span className="hero-badge">
                  <span className="ping"></span>Built for small &amp; mid-size
                  US businesses
                </span>
                <h1>
                  Marketing Agency for{" "}
                  <span className="accent">Small and Mid&#8209;Size</span>{" "}
                  Businesses.
                </h1>
                <p className="lead">
                  Local SEO, Google Business Profile, website design, graphic
                  &amp; logo design, and PPC ads — everything a growing business
                  needs to get found, look the part, and bring in customers,
                  under one roof.
                </p>
                <div className="hero-actions">
                  <a
                    href="https://www.zonicllc.com/contact-us"
                    className="buttons"
                  >
                    Book a Free Strategy Call
                    <BtnArrow />
                  </a>
                  <a href="tel:+13027269736" className="btn btn-ghost-light">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ width: 17, height: 17 }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                    (302) 726-9736
                  </a>
                </div>
                <div className="hero-trust">
                  <span>
                    <span className="stars">★★★★★</span> <b>5.0</b> client rating
                  </span>
                  <span>
                    <b>700+</b> Google Business Profiles reinstated &amp;
                    verified
                  </span>
                </div>
              </div>

              <div className="hero-visual col-md-5 col-lg-4">
                <RankGrid />
                <div className="float-badge b1">
                  <div className="ic ic-rocket">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ width: 20, height: 20 }}
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="lbl">Local growth</div>
                    <div className="val">Lift off</div>
                  </div>
                </div>
                <div className="float-badge b2">
                  <div
                    className="ic"
                    style={{
                      background: "rgba(245,197,24,.18)",
                      color: "var(--yellow-dark)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      style={{ width: 19, height: 19 }}
                    >
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M17 7h4v4" />
                    </svg>
                  </div>
                  <div>
                    <div className="lbl">Calls this month</div>
                    <div className="val">+38%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="niche-card">
              <div className="niche-head">
                <div>
                  <span className="eyebrow light">Industries we serve</span>
                  <h3>Specialists across 20+ local service niches</h3>
                </div>
                <a
                  href="https://www.zonicllc.com/services"
                  className="niche-head-link"
                >
                  View all industries
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              <div className="niche-chips">
                <a
                  href="https://www.zonicllc.com/services/industry/local-seo-for-roofing-companies"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="m3 12 9-8 9 8" />
                    <path d="M5 10v10h14V10" />
                  </svg>
                  Roofing
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/local-seo-services-for-hvac"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
                  </svg>
                  HVAC
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/plumber"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5z" />
                    <path d="M12 16v6" />
                  </svg>
                  Plumbing
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/pest-control"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <circle cx="12" cy="13" r="5" />
                    <path d="M12 8V4M9 4h6M5 11l-2-1M19 11l2-1M5 15l-2 1M19 15l2 1" />
                  </svg>
                  Pest Control
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/dental-seo-services"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M12 5.5c-2-2-5-2-6 .5-1 3 .5 6 1 9 .3 2 .5 4 2 4s1.5-3 3-3 1.5 3 3 3 1.7-2 2-4c.5-3 2-6 1-9-1-2.5-4-2.5-6-.5" />
                  </svg>
                  Dental
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/chiropractor-local-seo-services"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <circle cx="12" cy="4" r="2" />
                    <path d="M12 6v6M8 22l4-7 4 7M7 10l5 2 5-2" />
                  </svg>
                  Chiropractic
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/real-estate-seo-services"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M3 21V9l9-6 9 6v12" />
                    <path d="M9 21v-6h6v6" />
                  </svg>
                  Real Estate
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/local-seo-for-law-firms"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M12 3v18M5 7h14M7 7l-3 6a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0zM8 21h8" />
                  </svg>
                  Law Firms
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/local-seo-for-commercial-cleaning"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                  Commercial Cleaning
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/local-seo-services-for-residential-cleaning"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M19 3l-7 7M12 10l-2 9-3-3 9-2M5 14l-2 2" />
                  </svg>
                  Residential Cleaning
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/car-towing"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M3 17h13v-5l4-1 1 6h-2" />
                    <circle cx="7" cy="18" r="2" />
                    <circle cx="18" cy="18" r="2" />
                    <path d="M3 17V8h6l3 4" />
                  </svg>
                  Towing
                </a>
                <a
                  href="https://www.zonicllc.com/home-inspector-marketing-agency"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="m3 12 9-8 9 8M5 10v10h14V10" />
                    <circle cx="12" cy="14" r="2.5" />
                    <path d="m16 18-2.2-2.2" />
                  </svg>
                  Home Inspection
                </a>
                <a
                  href="https://www.zonicllc.com/services/industry/pediatricians"
                  className="niche-chip"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M19 14c0 4-3.5 7-7 7s-7-3-7-7a7 7 0 0 1 1-3.5" />
                    <circle cx="9" cy="4" r="1.5" />
                    <circle cx="15" cy="4" r="1.5" />
                    <path d="M9 5.5C9 8 10 9 12 9s3-1 3-3.5" />
                  </svg>
                  Pediatricians
                </a>
                <span className="niche-chip muted">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
                  </svg>
                  Electrical
                </span>
                <span className="niche-chip muted">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  more
                </span>
              </div>
              <div className="niche-cta">
                <span>Don&apos;t see your niche listed?</span>
                <a
                  href="https://www.zonicllc.com/contact-us"
                  className="buttons niche-cta-btn"
                >
                  Can&apos;t find your niche? Let&apos;s connect
                  <BtnArrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <div className="trustbar">
          <div className="wrap">
            <div className="trustbar-grid row g-4">
              <div className="stat col-6 col-md-3">
                <div className="num">
                  700<span>+</span>
                </div>
                <div className="cap">
                  Google Business Profiles reinstated &amp; verified
                </div>
              </div>
              <div className="stat col-6 col-md-3">
                <div className="num">
                  5.0<span>★</span>
                </div>
                <div className="cap">Average client rating</div>
              </div>
              <div className="stat col-6 col-md-3">
                <div className="num">
                  95<span>%</span>
                </div>
                <div className="cap">Client growth success rate</div>
              </div>
              <div className="stat col-6 col-md-3">
                <div className="num">
                  20<span>+</span>
                </div>
                <div className="cap">Local service niches served</div>
              </div>
            </div>
          </div>
        </div>

        {/* CORE SERVICES */}
        <section className="services" id="services">
          <div className="wrap">
            <div className="sec-head center col-lg-8 mx-auto">
              <span className="eyebrow center">What we do</span>
              <h2>
                No. 1 Marketing &amp; SEO Agency for Small Businesses in the US
              </h2>
              <p>
                Everything a small or mid-size business needs to grow online —
                strategy, visibility, design, and ads — handled by one team that
                actually understands smaller budgets and bigger goals. Serving
                businesses nationwide, with deep roots across Delaware,
                Pennsylvania, New Jersey, Maryland, Florida, Texas, Georgia, and
                beyond.
              </p>
            </div>
            <div className="svc-grid row g-4">
              {/* Local SEO */}
              <div className="col-md-6 col-lg-4">
              <div className="svc-card h-100">
                <div className="svc-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Local SEO Agency</h3>
                <div className="svc-sub">For Small &amp; Mid-Size Biz</div>
                <p>
                  We get your business ranking in the Google Map Pack so nearby
                  customers find you first — turning local searches into steady
                  calls and walk-ins, not just website traffic.
                </p>
                <a
                  href="https://www.zonicllc.com/services/local-seo-for-home-services"
                  className="svc-link"
                >
                  Explore Local SEO{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              </div>

              {/* GBP */}
              <div className="col-md-6 col-lg-4">
              <div className="svc-card h-100">
                <div className="svc-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
                  </svg>
                </div>
                <h3>Google Business Profile</h3>
                <div className="svc-sub">Setup, Optimization &amp; Recovery</div>
                <p>
                  Your profile is your best free lead source. We optimize it to
                  rank, generate reviews, and — if it&apos;s suspended —
                  reinstate it. We&apos;ve recovered 500+ profiles for
                  businesses like yours.
                </p>
                <a
                  href="https://www.zonicllc.com/services/gmb-reinstatement-help"
                  className="svc-link"
                >
                  Explore GBP Services{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              </div>

              {/* PPC */}
              <div className="col-md-6 col-lg-4">
              <div className="svc-card h-100">
                <div className="svc-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M3 17l6-6 4 4 8-8" />
                    <path d="M17 7h4v4" />
                  </svg>
                </div>
                <h3>PPC Ads Agency</h3>
                <div className="svc-sub">For Small &amp; Mid-Size Biz</div>
                <p>
                  Google Ads campaigns built to capture customers searching
                  right now — managed for cost-per-lead, not wasted clicks, so
                  every dollar of a tighter budget works harder.
                </p>
                <a
                  href="https://www.zonicllc.com/services/google-ads"
                  className="svc-link"
                >
                  Explore PPC Ads{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              </div>

              {/* Web Design */}
              <div className="col-md-6 col-lg-4">
              <div className="svc-card h-100">
                <div className="svc-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M3 9h18M8 21h8" />
                  </svg>
                </div>
                <h3>Website Design</h3>
                <div className="svc-sub">For Small &amp; Mid-Size Biz</div>
                <p>
                  Fast, mobile-first websites that make a small business look
                  established and turn visitors into booked jobs — with the
                  technical SEO foundation built in from day one.
                </p>
                <a
                  href="https://www.zonicllc.com/services/web-design"
                  className="svc-link"
                >
                  Explore Web Design{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              </div>

              {/* Graphic Design */}
              <div className="col-md-6 col-lg-4">
              <div className="svc-card h-100">
                <div className="svc-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <circle cx="13.5" cy="6.5" r="2.5" />
                    <circle cx="6.5" cy="11.5" r="2.5" />
                    <circle cx="17" cy="15" r="2.5" />
                    <path d="M2 22c0-3 2-5 5-5" />
                  </svg>
                </div>
                <h3>Graphic Design</h3>
                <div className="svc-sub">Brand &amp; Marketing Assets</div>
                <p>
                  Professional graphics for ads, social, signage, and print that
                  keep a growing brand looking consistent and credible
                  everywhere customers see you.
                </p>
                <a
                  href="https://www.zonicllc.com/services"
                  className="svc-link"
                >
                  Explore Graphic Design{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              </div>

              {/* Logo Design */}
              <div className="col-md-6 col-lg-4">
              <div className="svc-card h-100">
                <div className="svc-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M12 2 4 7v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-5Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3>Logo Design</h3>
                <div className="svc-sub">Identity That Builds Trust</div>
                <p>
                  A distinctive logo and brand identity that earns instant
                  recognition and trust — giving a small business the polished
                  first impression bigger competitors rely on.
                </p>
                <a
                  href="https://www.zonicllc.com/services"
                  className="svc-link"
                >
                  Explore Logo Design{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testi">
          <div className="wrap">
            <div className="sec-head center col-lg-8 mx-auto">
              <span className="eyebrow center">Client results</span>
              <h2>Trusted by small &amp; mid-size businesses across the US</h2>
            </div>
            <div className="testi-clutch">
              <ClutchWidget
                widgetType="12"
                height="375"
                primaryColor="#f7c00a"
                reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
              />
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="industries" id="industries">
          <div className="wrap">
            <div className="sec-head center col-lg-8 mx-auto">
              <span className="eyebrow center">
                Search engine optimization by industry
              </span>
              <h2>Local SEO built around your industry</h2>
              <p>
                We don&apos;t write generic copy and swap the logo. Every
                industry has its own licensing bodies, certifications, seasons,
                and competitive dynamics — so we build Local SEO, Google Maps
                visibility, and lead systems specific to yours.
              </p>
            </div>
            <div className="indseo-grid row g-3 g-lg-4">
              {[
                {
                  href: "https://www.zonicllc.com/services/industry/local-seo-for-law-firms",
                  h: "Law Firm Local SEO",
                  p: "Local SEO, Google Maps visibility, and case inquiry growth systems built for law firms.",
                  icon: (
                    <path d="M12 3v18M5 7h14M7 7l-3 6a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0zM8 21h8" />
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/real-estate-seo-services",
                  h: "Real Estate SEO",
                  p: "SEO and lead generation strategies built for agents, teams, and brokerages.",
                  icon: (
                    <>
                      <path d="M3 21V9l9-6 9 6v12" />
                      <path d="M9 21v-6h6v6" />
                    </>
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/chiropractor-local-seo-services",
                  h: "Chiropractor Local SEO",
                  p: "Local SEO, Google Maps visibility, and patient growth systems for chiropractic clinics.",
                  icon: (
                    <>
                      <circle cx="12" cy="4" r="2" />
                      <path d="M12 6v6M8 22l4-7 4 7M7 10l5 2 5-2" />
                    </>
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/local-seo-for-commercial-cleaning",
                  h: "Commercial Cleaning SEO",
                  p: "Local SEO, Maps visibility, and contract inquiry growth for commercial cleaning companies.",
                  icon: (
                    <>
                      <rect x="3" y="3" width="18" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </>
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/local-seo-services-for-residential-cleaning",
                  h: "Residential Cleaning SEO",
                  p: "Local SEO, Maps visibility, and booking growth for house cleaning and maid services.",
                  icon: (
                    <path d="M19 3l-7 7M12 10l-2 9-3-3 9-2M5 14l-2 2" />
                  ),
                },
                {
                  href: "https://www.zonicllc.com/home-inspector-marketing-agency",
                  h: "Home Inspector Marketing",
                  p: "Local SEO, Google Ads, GBP, and websites built to book more home inspections across the US.",
                  icon: (
                    <>
                      <path d="m3 12 9-8 9 8M5 10v10h14V10" />
                      <circle cx="12" cy="14" r="2.5" />
                      <path d="m16 18-2.2-2.2" />
                    </>
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/car-towing",
                  h: "Car Towing Local SEO",
                  p: "Help towing companies capture urgent local searches and turn them into inbound dispatch calls.",
                  icon: (
                    <>
                      <path d="M3 17h13v-5l4-1 1 6h-2" />
                      <circle cx="7" cy="18" r="2" />
                      <circle cx="18" cy="18" r="2" />
                      <path d="M3 17V8h6l3 4" />
                    </>
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/local-seo-for-roofing-companies",
                  h: "Roofing Local SEO",
                  p: "Help roofing companies rank locally and turn search traffic into booked estimates.",
                  icon: (
                    <>
                      <path d="m3 12 9-8 9 8" />
                      <path d="M5 10v10h14V10" />
                    </>
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/dental-seo-services",
                  h: "Dentist Local SEO",
                  p: "Improve map visibility and patient leads for dental practices in competitive markets.",
                  icon: (
                    <path d="M12 5.5c-2-2-5-2-6 .5-1 3 .5 6 1 9 .3 2 .5 4 2 4s1.5-3 3-3 1.5 3 3 3 1.7-2 2-4c.5-3 2-6 1-9-1-2.5-4-2.5-6-.5" />
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/pediatricians",
                  h: "Pediatrician Marketing",
                  p: "Help pediatric clinics improve local visibility and generate more patient appointments.",
                  icon: (
                    <>
                      <path d="M19 14c0 4-3.5 7-7 7s-7-3-7-7a7 7 0 0 1 1-3.5" />
                      <circle cx="9" cy="4" r="1.5" />
                      <circle cx="15" cy="4" r="1.5" />
                      <path d="M9 5.5C9 8 10 9 12 9s3-1 3-3.5" />
                    </>
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/local-seo-services-for-hvac",
                  h: "HVAC Local SEO",
                  p: "Generate more calls for heating and cooling services with stronger local rankings.",
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
                    </>
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/plumber",
                  h: "Plumber Local SEO",
                  p: "Build consistent local visibility that helps plumbing businesses win urgent service calls.",
                  icon: (
                    <>
                      <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5z" />
                      <path d="M12 16v6" />
                    </>
                  ),
                },
                {
                  href: "https://www.zonicllc.com/services/industry/pest-control",
                  h: "Pest Control Local SEO",
                  p: "Win recurring-service customers with stronger local rankings and a steady stream of inquiries.",
                  icon: (
                    <>
                      <circle cx="12" cy="13" r="5" />
                      <path d="M12 8V4M9 4h6M5 11l-2-1M19 11l2-1M5 15l-2 1M19 15l2 1" />
                    </>
                  ),
                },
              ].map((it) => (
                <div className="col-md-6 col-lg-4 d-flex" key={it.h}>
                <a href={it.href} className="indseo-card w-100">
                  <div className="indseo-ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                    >
                      {it.icon}
                    </svg>
                  </div>
                  <h3>{it.h}</h3>
                  <p>{it.p}</p>
                  <span className="indseo-go">
                    Learn more{" "}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GBP AUTHORITY */}
        <section className="gbp" id="gbp">
          <div className="wrap">
            <div className="gbp-grid row g-5">
              <div className="col-lg-6">
                <span className="eyebrow light">Google Business profile recovery</span>
                <h2>Profile suspended? We&apos;ve reinstated 500+ of them.</h2>
                <p className="lead">
                  A suspended Google Business Profile can shut off your best free
                  lead source overnight — and Google rarely tells you why.
                  Reinstatement is one of the things we do best. We find the real
                  cause, fix it, and manage the appeal start to finish.
                </p>
                <div className="gbp-feats">
                  <div className="gbp-feat">
                    <div className="ic">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                    <div>
                      <h4>Diagnose the cause</h4>
                      <p>
                        We pinpoint the exact policy that triggered the
                        suspension.
                      </p>
                    </div>
                  </div>
                  <div className="gbp-feat">
                    <div className="ic">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6M9 15l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4>Build the appeal</h4>
                      <p>
                        Documentation and evidence packaged the way Google wants
                        it.
                      </p>
                    </div>
                  </div>
                  <div className="gbp-feat">
                    <div className="ic">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                      </svg>
                    </div>
                    <div>
                      <h4>Protect it after</h4>
                      <p>We harden the profile so it doesn&apos;t get flagged again.</p>
                    </div>
                  </div>
                  <div className="gbp-feat">
                    <div className="ic">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                      >
                        <path d="M3 17l6-6 4 4 8-8" />
                        <path d="M17 7h4v4" />
                      </svg>
                    </div>
                    <div>
                      <h4>Rank it higher</h4>
                      <p>Once it&apos;s back, we optimize for the Map Pack.</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.zonicllc.com/services/gmb-reinstatement-help"
                  className="buttons"
                >
                  Get reinstatement help
                  <BtnArrow />
                </a>
              </div>

              <div className="gbp-panel col-lg-6">
                <div className="gbp-panel-head">
                  <div className="badge">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ width: 24, height: 24 }}
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                  </div>
                  <div>
                    <div className="t">Our reinstatement process</div>
                    <div className="s">A proven path back to visibility</div>
                  </div>
                </div>
                <ul className="gbp-steps">
                  <li>
                    <div>
                      <div className="st-t">Free profile review</div>
                      <div className="st-d">
                        We audit the listing and identify the suspension trigger.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="st-t">Fix the violations</div>
                      <div className="st-d">
                        Correct the categories, info, content, or signals at
                        fault.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="st-t">Submit the appeal</div>
                      <div className="st-d">
                        File with the right evidence and follow through with
                        Google.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="st-t">Reinstate &amp; optimize</div>
                      <div className="st-d">
                        Get back online, then build rankings and review flow.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO SHOWCASE */}
        <section className="video" id="video">
          <div className="wrap">
            <div className="video-grid row g-4">
              <div className="video-card col-lg-6">
                <LaunchpadVideo />
              </div>
              <div className="video-promo col-lg-6">
                <span className="eyebrow light">Done-for-you launch</span>
                <h2>Launch Your Business Online in 7 to 14 Days</h2>
                <p>
                  Logo, website, Google Business Profile, social setup, and a
                  lead system — everything a new or growing business needs to
                  start showing up and getting calls, handled by one team.
                </p>
                <ul className="video-promo-list">
                  <li>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Logo &amp; brand identity
                  </li>
                  <li>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Conversion-ready website
                  </li>
                  <li>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Google Business Profile setup
                  </li>
                  <li>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Lead capture &amp; tracking
                  </li>
                </ul>
                <a
                  href="https://www.zonicllc.com/contact-us"
                  className="btn btn-white"
                >
                  Book a Free Consultation
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    style={{ width: 16, height: 16 }}
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process" id="process">
          <div className="wrap">
            <div className="sec-head center col-lg-8 mx-auto">
              <span className="eyebrow center">How we work</span>
              <h2>A clear plan before we build anything</h2>
              <p>
                Every engagement starts with your goals and the fastest route to
                better leads — then we ship the work, not just a slide deck.
              </p>
            </div>
            <div className="proc-grid row g-4">
              <div className="col-6 col-lg-3">
                <div className="proc-card h-100">
                  <div className="proc-num">01</div>
                  <h4>Audit the gaps</h4>
                  <p>
                    We review your profile, search visibility, website, and ad
                    opportunities to find the fastest routes to more leads.
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="proc-card h-100">
                  <div className="proc-num">02</div>
                  <h4>Build the plan</h4>
                  <p>
                    You get a clear roadmap with priorities, timelines, and the
                    metrics that actually define success for your business.
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="proc-card h-100">
                  <div className="proc-num">03</div>
                  <h4>Launch the work</h4>
                  <p>
                    We ship the pages, profile fixes, campaigns, and tracking —
                    moving from strategy into real, measurable execution.
                  </p>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="proc-card h-100">
                  <div className="proc-num">04</div>
                  <h4>Grow &amp; report</h4>
                  <p>
                    Ongoing optimization and plain-English reporting that shows
                    exactly where your leads and dollars are coming from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARE */}
        <section className="compare">
          <div className="wrap">
            <div className="sec-head center col-lg-8 mx-auto">
              <span className="eyebrow center">The difference</span>
              <h2>Marketing that&apos;s busy vs. marketing that books jobs</h2>
            </div>
            <div className="cmp-grid row g-4">
              <div className="col-lg-6 d-flex">
              <div className="cmp-card cmp-without w-100">
                <span className="cmp-tag">Going it alone</span>
                <h3>Lots of activity, unpredictable results</h3>
                <div className="cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  Your listing sits below competitors in the Map Pack
                </div>
                <div className="cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  Ad budget burns on clicks that never call
                </div>
                <div className="cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  A website that looks fine but leaks leads
                </div>
                <div className="cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  No clear answer to &quot;what&apos;s actually working?&quot;
                </div>
              </div>
              </div>
              <div className="col-lg-6 d-flex">
              <div className="cmp-card cmp-with w-100">
                <span className="cmp-tag">Working with Zonic</span>
                <h3>Focused, measurable, easier to scale</h3>
                <div className="cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Your profile ranks in the top 3 where buyers look
                </div>
                <div className="cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Ads tuned to cost-per-call, not cost-per-click
                </div>
                <div className="cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  A site built to turn visits into booked jobs
                </div>
                <div className="cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Reporting that shows where every lead came from
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="wrap">
            <div className="sec-head center col-lg-8 mx-auto">
              <span className="eyebrow center">Common questions</span>
              <h2>What local business owners ask us</h2>
            </div>
            <div className="faq-wrap row g-3 g-lg-4">
              <div className="col-lg-6">
              <details className="faq-item" open>
                <summary className="faq-q">
                  What kind of businesses do you work with?
                  <span className="pm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{ width: 16, height: 16 }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-a">
                  US local and service-based businesses — roofers, HVAC,
                  plumbers, electricians, pest control, dental practices, real
                  estate, cleaning companies, towing, and other local providers.
                  Our focus is getting these businesses found on Google and
                  turning nearby searches into phone calls.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Can you really get a suspended Google profile back?
                  <span className="pm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{ width: 16, height: 16 }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-a">
                  Reinstatement is one of our core specialties — we&apos;ve
                  helped recover 500+ profiles by diagnosing the suspension
                  cause, fixing the underlying policy issues, and managing the
                  appeal. No agency can promise Google&apos;s decision, but we
                  know the process and the common failure points cold.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Do you only work with businesses in Delaware?
                  <span className="pm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{ width: 16, height: 16 }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-a">
                  No. We&apos;re based in Dover, Delaware with deep roots in the
                  Mid-Atlantic, but we serve local businesses across the United
                  States. Our work is remote-first, so your location is never a
                  barrier.
                </div>
              </details>
              </div>
              <div className="col-lg-6">
              <details className="faq-item">
                <summary className="faq-q">
                  How is local SEO different from regular SEO?
                  <span className="pm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{ width: 16, height: 16 }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-a">
                  Local SEO focuses on getting you into the Google Map Pack and
                  local results for customers searching nearby. It centers on
                  your Google Business Profile, citations, reviews, and
                  location-relevant content — rather than competing nationally
                  for broad keywords.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  How quickly will I see results?
                  <span className="pm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{ width: 16, height: 16 }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-a">
                  It depends on the service. Google Ads can generate qualified
                  calls within the first weeks of launch. Local SEO and Map Pack
                  ranking typically build over a few months as Google rebuilds
                  trust in your profile and citations. Reinstatement timelines
                  depend on Google&apos;s review process.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-q">
                  Do you require long-term contracts?
                  <span className="pm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{ width: 16, height: 16 }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-a">
                  No. We don&apos;t lock you into long-term contracts. We earn
                  the relationship month to month by delivering results — most
                  clients stay because the leads keep coming, not because
                  they&apos;re contractually tied to us.
                </div>
              </details>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST BLOGS */}
        {blogs.length > 0 && (
          <div className="wrap blogs-home">
            <Blogs blogs={blogs} />
          </div>
        )}

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact-grid row g-4 g-lg-5 justify-content-between">
              {/* LEFT — copy + contact details */}
              <div className="col-lg-5">
                <div className="contact-copy">
                  <span className="eyebrow">Get in touch</span>
                  <h2>Tell us where you want to grow</h2>
                  <p>
                    Send us a few details about your business and the leads
                    you&apos;re after. We&apos;ll review your Google profile,
                    search visibility, and website, then come back with the
                    fastest next step — no obligation.
                  </p>

                  <ul className="contact-details">
                    <li>
                      <a href={SITE_CONTACT.phoneHref}>
                        <span className="ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                          </svg>
                        </span>
                        <span className="ct">
                          <span className="lbl">Call us</span>
                          <span className="val">{SITE_CONTACT.phoneDisplay}</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={SITE_CONTACT.emailHref}>
                        <span className="ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <path d="m3 7 9 6 9-6" />
                          </svg>
                        </span>
                        <span className="ct">
                          <span className="lbl">Email us</span>
                          <span className="val">{SITE_CONTACT.email}</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={SITE_CONTACT.mapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </span>
                        <span className="ct">
                          <span className="lbl">Visit us</span>
                          <span className="val">{SITE_CONTACT.address}</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT — custom lead form */}
              <div className="col-lg-6">
                <ServiceLeadForm
                  formType="home-strategy"
                  badge="Free strategy session"
                  title="Request your free strategy session"
                  subtitle="Takes about a minute — no commitment required."
                  submitText="Request My Free Session"
                  defaultServices={["Local SEO"]}
                  messageLabel="What do you want to grow?"
                  messagePlaceholder="Tell us about your business and goals"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta-final">
          <div className="wrap">
            <div className="cta-inner col-lg-8 mx-auto">
              <span className="eyebrow center light">Ready when you are</span>
              <h2>Let&apos;s map your growth plan</h2>
              <p>
                Tell us where you want to grow and we&apos;ll walk you through
                the fastest next step — a free strategy call covering your
                profile, search visibility, and website, with no obligation.
              </p>
              <div className="cta-actions">
                <a
                  href="https://www.zonicllc.com/contact-us"
                  className="buttons"
                >
                  Book a Free Strategy Call
                  <BtnArrow />
                </a>
                <a href="tel:+13027269736" className="btn btn-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ width: 17, height: 17 }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  (302) 726-9736
                </a>
              </div>
              <div className="cta-sub">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Free, no-obligation call
                </span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  No long-term lock-in
                </span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Based in Dover, DE · serving the US
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
