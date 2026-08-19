import Link from "next/link";
import "@/app/style/webDesignPage.css";
import Footer from "@/app/components/Footer";
import RelatedServices from "@/app/components/RelatedServices";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { Metadata } from "next";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";
import type { CSSProperties, ReactNode } from "react";
import {
  FiActivity,
  FiArrowRight,
  FiCheck,
  FiEye,
  FiLock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiShoppingCart,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

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
  title: "Web Design Services for Small Business",
  description:
    "Professional web design services focused on speed, SEO, and conversions. We build responsive websites that attract visitors and turn them into customers.",
  keywords: [
    "web design services for small business",
    "conversion focused website design",
    "local business website design",
    "responsive web design services",
    "SEO friendly web design",
    "custom website design",
    "website redesign services",
    "mobile friendly website design",
    "affordable web design for small business",
    "best web design agency for small business",
    "small business website design company",
    "website design and development services",
    "lead generation website design",
  ],
  alternates: { canonical: "/services/web-design" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Web Design Services for Small Business | Zonic Media",
    description:
      "Professional web design services focused on speed, SEO, and conversions. We build responsive websites that attract visitors and turn them into customers.",
    url: "/services/web-design",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Web Design", url: "/services/web-design" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.zonicllc.com/services/web-design#service",
  name: "Web Design Services for Small Business",
  alternateName: [
    "Small Business Website Design",
    "Custom Website Design and Development",
    "Conversion-Focused Web Design",
    "Website Redesign Services",
  ],
  serviceType: "Web Design and Development",
  description:
    "Zonic Media designs fast, mobile-friendly, SEO-ready websites for small and mid-size businesses — built to rank on Google and convert visitors into leads and customers. Custom design, responsive development, on-page SEO structure, and conversion-focused landing pages. Verified client reviews on Trustpilot and Clutch.",
  url: "https://www.zonicllc.com/services/web-design",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    telephone: "+1-302-726-9736",
    email: "contact@zonicllc.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Small and mid-size businesses that need a website that generates leads",
  },
  offers: {
    "@type": "Offer",
    name: "Free website consultation",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free consultation covering design direction, SEO structure, and a transparent project quote.",
  },
};

/* ─────────────────────────────────────────────────────────────── data ───── */

type WdService = {
  visual: "code" | "ux" | "wp" | "shop";
  title: string;
  desc: ReactNode;
};

const wdServices: WdService[] = [
  {
    visual: "code",
    title: "Custom Web Development",
    desc: (
      <>
        Build a website designed for performance and growth. Our custom web
        development focuses on fast loading speeds, seamless functionality, and
        an optimized user experience — helping your business attract visitors
        and generate more leads as part of a broader{" "}
        <Link href="/services" className="wd-inline-link">
          full-service marketing
        </Link>{" "}
        system.
      </>
    ),
  },
  {
    visual: "ux",
    title: "Custom UI/UX Design",
    desc: (
      <>
        We design intuitive interfaces and engaging experiences that make your
        website easy to navigate and visually impactful. Our UI/UX approach
        improves usability and converts visitors into customers from search,
        referrals, and{" "}
        <Link href="/services/google-ads" className="wd-inline-link">
          Google Ads campaigns
        </Link>
        .
      </>
    ),
  },
  {
    visual: "wp",
    title: "WordPress Responsive Websites",
    desc: (
      <>
        Fully responsive WordPress websites that work seamlessly across
        desktops, tablets, and mobile devices — optimized for speed, SEO
        performance, and easy content management, alongside{" "}
        <Link href="/services/gmb-optimization" className="wd-inline-link">
          Google Business Profile optimization
        </Link>
        .
      </>
    ),
  },
  {
    visual: "shop",
    title: "Responsive Shopify ECommerce Stores",
    desc: (
      <>
        Launch a conversion-focused Shopify store with optimized product pages,
        secure checkout, and a seamless shopping experience. For brand-new
        companies, the same thinking powers our{" "}
        <Link href="/services/launchpad" className="wd-inline-link">
          Launchpad package
        </Link>
        .
      </>
    ),
  },
];

const wdProcess = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We start with your business goals, audience, and competitors to build a clear strategy for a website that supports growth.",
    bullets: [
      "Business goal analysis",
      "Competitor research",
      "Website strategy planning",
    ],
  },
  {
    num: "02",
    title: "Planning & Wireframing",
    desc: "We map the structure and layout for a smooth user experience and logical content flow before development begins.",
    bullets: [
      "Website structure planning",
      "Wireframe layout creation",
      "User journey mapping",
    ],
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "A modern, visually engaging interface focused on usability, branding, and conversion optimization.",
    bullets: ["Custom UI design", "UX optimization", "Brand-focused visuals"],
  },
  {
    num: "04",
    title: "Development & Optimization",
    desc: "A fast, responsive, SEO-friendly build using modern technologies for optimal performance on every device.",
    bullets: [
      "Responsive development",
      "Speed optimization",
      "SEO-ready structure",
    ],
  },
  {
    num: "05",
    title: "Testing & Launch",
    desc: "Thorough functionality, performance, and security testing — then a smooth, monitored public launch.",
    bullets: [
      "Cross-device testing",
      "Performance checks",
      "Website launch deployment",
    ],
  },
];

type Faq = { q: string; a: string };

const wdFaqsLeft: Faq[] = [
  {
    q: "How long does it take to design and develop a website?",
    a: "The timeline for website design and development typically ranges from 2 to 6 weeks, depending on the complexity of the project, number of pages, and required features.",
  },
  {
    q: "Will my website be mobile-friendly and responsive?",
    a: "Yes. Every website we build is fully mobile-responsive, ensuring it works seamlessly across desktops, tablets, and smartphones while providing an optimal user experience.",
  },
  {
    q: "Do you build SEO-friendly websites?",
    a: "Absolutely. Our websites are built with SEO best practices, including fast loading speeds, optimized structure, clean code, and proper heading hierarchy to help improve search engine visibility.",
  },
];

const wdFaqsRight: Faq[] = [
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We offer website redesign services to improve design, performance, user experience, and search engine optimization while maintaining your brand identity.",
  },
  {
    q: "What platforms do you use for website development?",
    a: "We build websites using industry-leading platforms such as WordPress, Shopify, and custom development frameworks, depending on your business needs and goals.",
  },
];

// Derived from the visible FAQ arrays above so page copy and schema never drift.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...wdFaqsLeft, ...wdFaqsRight].map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

/* ─────────────────────────────────────────── animated visuals (CSS-only) ── */

/** Hero visual: a homepage being designed on a studio canvas. */
function WdSiteBuilder() {
  const layers = ["Header", "Hero", "Services", "Footer"];

  return (
    <div
      className="wd-hero-visual"
      role="img"
      aria-label="A homepage being designed on a studio canvas: layers for header, hero, services, and footer check off as each section lands on the artboard in brand colors, a selection marquee moves between sections, and the brand palette and heading-body type pair lock in."
    >
      <div className="wd-canvas" aria-hidden="true">
        <div className="wd-cv-top">
          <span className="wd-cv-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="wd-cv-tab">
            <i />
            Homepage · Design
          </span>
          <span className="wd-cv-zoom">100%</span>
        </div>
        <div className="wd-cv-body">
          <aside className="wd-cv-layers">
            <h5>Layers</h5>
            {layers.map((layer, i) => (
              <span
                className="wd-cv-layer"
                key={layer}
                style={{ "--i": i } as CSSProperties}
              >
                <FiEye />
                {layer}
              </span>
            ))}
          </aside>
          <div className="wd-cv-board">
            <span className="wd-cv-sec wd-cv-sec--head">
              <b />
              <i />
              <i />
              <i />
            </span>
            <span className="wd-cv-sec wd-cv-sec--hero">
              <i />
              <i />
              <b />
            </span>
            <span className="wd-cv-sec wd-cv-sec--cards">
              <i />
              <i />
              <i />
            </span>
            <span className="wd-cv-sec wd-cv-sec--foot" />
            <span className="wd-cv-marquee">
              <b />
              <b />
              <b />
              <b />
            </span>
            <svg className="wd-cv-cursor" viewBox="0 0 24 24">
              <path d="M4 2l16 11.5-7.3 1.2-4.2 6.3z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="wd-chip-palette" aria-hidden="true">
        <span className="wd-swatches">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span>
          <strong>Brand palette</strong>
          <small>Locked in</small>
        </span>
      </div>

      <div className="wd-chip-type" aria-hidden="true">
        <span className="wd-type-aa">Aa</span>
        <span>
          <strong>Type pair</strong>
          <small>Heading · Body</small>
        </span>
      </div>
    </div>
  );
}

/** Service card micro-visuals. Purely presentational. */
function WdMiniVisual({ kind }: { kind: WdService["visual"] }) {
  if (kind === "code") {
    return (
      <div className="wd-mini wd-mini-code" aria-hidden="true">
        <span className="wd-code-bar">
          <i />
          <i />
          <i />
          <b />
        </span>
        <span className="wd-code-lines">
          <span className="wd-cl" style={{ "--i": 0 } as CSSProperties}>
            <b />
            <b />
            <b />
          </span>
          <span
            className="wd-cl wd-cl--b"
            style={{ "--i": 1 } as CSSProperties}
          >
            <b />
            <b />
            <b />
          </span>
          <span
            className="wd-cl wd-cl--c"
            style={{ "--i": 2 } as CSSProperties}
          >
            <b />
            <b />
          </span>
        </span>
        <span className="wd-code-caret" />
      </div>
    );
  }
  if (kind === "ux") {
    return (
      <div className="wd-mini wd-mini-ux" aria-hidden="true">
        <span className="wd-ux-el wd-ux-el--bar" />
        <span className="wd-ux-el wd-ux-el--card" />
        <span className="wd-ux-el wd-ux-el--btn" />
        <svg className="wd-ux-cursor" viewBox="0 0 24 24">
          <path d="M4 2l16 11.5-7.3 1.2-4.2 6.3z" />
        </svg>
      </div>
    );
  }
  if (kind === "wp") {
    return (
      <div className="wd-mini wd-mini-wp" aria-hidden="true">
        <span className="wd-wp-badge">W</span>
        <span
          className="wd-wp-block wd-wp-block--h"
          style={{ "--i": 0 } as CSSProperties}
        >
          <span className="wd-wp-handle" />
          <i />
        </span>
        <span
          className="wd-wp-block wd-wp-block--img"
          style={{ "--i": 1 } as CSSProperties}
        >
          <span className="wd-wp-handle" />
          <i />
        </span>
        <span
          className="wd-wp-block wd-wp-block--btn"
          style={{ "--i": 2 } as CSSProperties}
        >
          <span className="wd-wp-handle" />
          <i />
        </span>
      </div>
    );
  }
  return (
    <div className="wd-mini wd-mini-shop" aria-hidden="true">
      <span className="wd-shop-card">
        <span className="wd-shop-price">$49</span>
        <i />
        <b />
      </span>
      <span className="wd-shop-feed">
        <span
          className="wd-shop-order"
          style={{ "--i": 0 } as CSSProperties}
        >
          <FiCheck />
          Order #1042
          <b>Paid</b>
        </span>
        <span
          className="wd-shop-order"
          style={{ "--i": 1 } as CSSProperties}
        >
          <FiShoppingCart />
          New order
          <b>+$49</b>
        </span>
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────── page ───── */

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="wd-page">
        {/* ═══════════════════════════════════════════════ 1 · HERO ═══════ */}
        <section className="wd-hero">
          <div className="wd-wrap">
            <div className="wd-hero-grid">
              <div>
                <span className="wd-eyebrow">Web design &amp; development</span>
                <h1 className="wd-hero-h1">
                  Web Design Services That Drive{" "}
                  <span className="wd-hl">Real Business Growth</span>
                </h1>
                <p className="wd-hero-sub">
                  Get a high-performing website built by experienced web design
                  professionals. We create modern, SEO-friendly, and
                  user-focused websites designed to turn visitors into
                  customers — and we can extend them with{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="wd-inline-link"
                  >
                    local SEO
                  </Link>{" "}
                  so you can focus on scaling your business.
                </p>
                <div className="wd-hero-ctas">
                  <Link href="/contact-us" className="buttons">
                    Launch Your Website
                    <BtnArrow />
                  </Link>
                  <a href={SITE_CONTACT.phoneHref} className="wd-btn-ghost">
                    <FiPhone aria-hidden="true" />
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="wd-hero-trust">
                  <span>
                    <span className="wd-stars" aria-hidden="true">
                      ★★★★★
                    </span>{" "}
                    <b>4.9</b> client rating
                  </span>
                  <span>
                    <b>120+</b> websites shipped
                  </span>
                  <span>
                    <b>Core Web Vitals</b> passed at launch
                  </span>
                </div>
              </div>

              <WdSiteBuilder />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════ 2 · STATS ═══════ */}
        <section className="wd-stats">
          <div className="wd-wrap">
            <div className="wd-stats-grid">
              <div className="wd-stat">
                <p className="wd-stat-num">
                  120<span>+</span>
                </p>
                <p className="wd-stat-cap">
                  Successful website projects delivered across{" "}
                  <Link href="/industries" className="wd-inline-link">
                    multiple industries
                  </Link>
                </p>
              </div>
              <div className="wd-stat">
                <p className="wd-stat-num">
                  250<span>%+</span>
                </p>
                <p className="wd-stat-cap">
                  Average conversion growth — start with a{" "}
                  <Link href="/contact-us" className="wd-inline-link">
                    free consultation
                  </Link>
                </p>
              </div>
              <div className="wd-stat">
                <p className="wd-stat-num">
                  8<span>+</span>
                </p>
                <p className="wd-stat-cap">
                  Years of digital experience building scalable websites
                </p>
              </div>
              <div className="wd-stat">
                <p className="wd-stat-num">
                  1M<span>+</span>
                </p>
                <p className="wd-stat-cap">
                  Global users reached across client websites worldwide
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ 3 · SERVICES ═══════ */}
        <section className="wd-services" id="services">
          <div className="wd-wrap">
            <div className="wd-sec-head wd-sec-head--center">
              <span className="wd-eyebrow">What&apos;s included</span>
              <h2 className="wd-h2">
                What&apos;s Included in Our Website Design Services
              </h2>
              <p className="wd-lead">
                Every build is designed, developed, and optimized by one team —
                the same team agencies rely on for{" "}
                <Link
                  href="/services/white-label-services"
                  className="wd-inline-link"
                >
                  white label web design
                </Link>{" "}
                — so speed, SEO, and conversion are baked in from the first
                wireframe, not patched on after launch.
              </p>
            </div>
            <div className="wd-svc-grid">
              {wdServices.map((svc) => (
                <div className="wd-svc-card" key={svc.title}>
                  <WdMiniVisual kind={svc.visual} />
                  <h3 className="wd-svc-title">{svc.title}</h3>
                  <p className="wd-svc-desc">{svc.desc}</p>
                  <div className="wd-svc-foot">
                    <Link href="/contact-us" className="wd-svc-link">
                      Start Your Website Project
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ 4 · CWV BAND ═══════ */}
        <section className="wd-cwv">
          <div className="wd-wrap">
            <div className="wd-cwv-grid">
              <div>
                <span className="wd-eyebrow wd-eyebrow--light">
                  Speed is a feature
                </span>
                <h2>Built to Pass Core Web Vitals — And to Ask for the Job</h2>
                <p className="wd-lead">
                  Most small business sites look fine and still leak enquiries.
                  We treat speed as a feature, not a cleanup task, and shape
                  every layout around call, quote, and booking intent — so the
                  site earns rankings and turns visits into booked work.
                </p>
                <div className="wd-cwv-feats">
                  <div className="wd-cwv-feat">
                    <span className="wd-cf-ic" aria-hidden="true">
                      <FiZap />
                    </span>
                    <div>
                      <h4>Speed Budgeted In</h4>
                      <p>
                        Page speed is planned during the build, not patched
                        after launch.
                      </p>
                    </div>
                  </div>
                  <div className="wd-cwv-feat">
                    <span className="wd-cf-ic" aria-hidden="true">
                      <FiSearch />
                    </span>
                    <div>
                      <h4>SEO Structure First</h4>
                      <p>
                        Technical SEO, schema, and tracking wired in from day
                        one.
                      </p>
                    </div>
                  </div>
                  <div className="wd-cwv-feat">
                    <span className="wd-cf-ic" aria-hidden="true">
                      <FiTrendingUp />
                    </span>
                    <div>
                      <h4>Layouts That Convert</h4>
                      <p>
                        Built around call, quote, and booking intent — not just
                        looks.
                      </p>
                    </div>
                  </div>
                  <div className="wd-cwv-feat">
                    <span className="wd-cf-ic" aria-hidden="true">
                      <FiActivity />
                    </span>
                    <div>
                      <h4>Tracking Included</h4>
                      <p>
                        Calls and forms measured, so you know what the site
                        earns.
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/contact-us" className="buttons">
                  Start a Website Project
                  <BtnArrow />
                </Link>
              </div>

              <div
                className="wd-sp-console"
                role="img"
                aria-label="A PageSpeed-style report going from failing to passing: the performance score climbs from 42 to 99, Largest Contentful Paint drops from 4.2 seconds to 0.9, Interaction to Next Paint from 480 to 80 milliseconds, layout shift from 0.31 to zero, and the page paints fully in 0.9 seconds."
              >
                <span className="wd-speed-chip" aria-hidden="true">
                  <FiZap />
                  Passes CWV at launch
                </span>

                <div className="wd-sp-card" aria-hidden="true">
                  <div className="wd-sp-head">
                    <span className="wd-sp-url">
                      <FiLock />
                      yourbusiness.com
                    </span>
                    <span className="wd-sp-pill">
                      <span className="wd-flip">
                        <span className="wd-flip-b">Failing</span>
                        <span className="wd-flip-a">Passing</span>
                      </span>
                    </span>
                  </div>
                  <div className="wd-sp-main">
                    <span className="wd-sp-ring">
                      <svg viewBox="0 0 80 80">
                        <circle
                          className="wd-sp-ring-bg"
                          cx="40"
                          cy="40"
                          r="34"
                        />
                        <circle
                          className="wd-sp-ring-val"
                          cx="40"
                          cy="40"
                          r="34"
                        />
                      </svg>
                      <span className="wd-sp-score wd-flip">
                        <span className="wd-flip-b">42</span>
                        <span className="wd-flip-a">99</span>
                      </span>
                      <small>Performance</small>
                    </span>
                    <div className="wd-sp-mets">
                      <div className="wd-sp-met">
                        <div className="wd-sp-met-top">
                          <b>LCP</b>
                          <span className="wd-flip">
                            <span className="wd-flip-b">4.2 s</span>
                            <span className="wd-flip-a">0.9 s</span>
                          </span>
                        </div>
                        <span className="wd-sp-met-track">
                          <span className="wd-sp-met-fill" />
                        </span>
                      </div>
                      <div className="wd-sp-met">
                        <div className="wd-sp-met-top">
                          <b>INP</b>
                          <span className="wd-flip">
                            <span className="wd-flip-b">480 ms</span>
                            <span className="wd-flip-a">80 ms</span>
                          </span>
                        </div>
                        <span className="wd-sp-met-track">
                          <span className="wd-sp-met-fill" />
                        </span>
                      </div>
                      <div className="wd-sp-met">
                        <div className="wd-sp-met-top">
                          <b>CLS</b>
                          <span className="wd-flip">
                            <span className="wd-flip-b">0.31</span>
                            <span className="wd-flip-a">0.00</span>
                          </span>
                        </div>
                        <span className="wd-sp-met-track">
                          <span className="wd-sp-met-fill" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wd-sp-strip" aria-hidden="true">
                  <div className="wd-sp-frame wd-sp-frame--a">
                    <i />
                    <i />
                    <b />
                    <small>0.3 s</small>
                  </div>
                  <div className="wd-sp-frame wd-sp-frame--b">
                    <i />
                    <i />
                    <b />
                    <small>0.6 s</small>
                  </div>
                  <div className="wd-sp-frame wd-sp-frame--c">
                    <span className="wd-sp-check">
                      <FiCheck />
                    </span>
                    <i />
                    <i />
                    <b />
                    <small>0.9 s · loaded</small>
                  </div>
                </div>

                <div className="wd-sp-foot" aria-hidden="true">
                  <span>First load, mobile connection</span>
                  <b>Fully interactive in 0.9 s</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ 5 · PROCESS ═══════ */}
        <section className="wd-process">
          <div className="wd-wrap">
            <div className="wd-sec-head wd-sec-head--center">
              <span className="wd-eyebrow">How we build</span>
              <h2 className="wd-h2">
                Our Proven 5-Step Website Design &amp; Development Process
              </h2>
            </div>
            <div className="wd-proc-grid">
              {wdProcess.map((step) => (
                <div className="wd-proc-card" key={step.num}>
                  <span className="wd-proc-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <ul className="wd-proc-list">
                    {step.bullets.map((bullet) => (
                      <li key={bullet}>
                        <FiCheck aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════ 6 · FAQ ═══════ */}
        <section className="wd-faq">
          <div className="wd-wrap">
            <div className="wd-sec-head wd-sec-head--center">
              <span className="wd-eyebrow">Common questions</span>
              <h2 className="wd-h2">Web Design Questions, Answered</h2>
            </div>
            <div className="wd-faq-cols">
              <div>
                {wdFaqsLeft.map((faq, i) => (
                  <details className="wd-faq-item" name="wd-faq" open={i === 0} key={faq.q}>
                    <summary className="wd-faq-q">
                      {faq.q}
                      <span className="wd-faq-pm" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <div className="wd-faq-a">{faq.a}</div>
                  </details>
                ))}
              </div>
              <div>
                {wdFaqsRight.map((faq) => (
                  <details className="wd-faq-item" name="wd-faq" key={faq.q}>
                    <summary className="wd-faq-q">
                      {faq.q}
                      <span className="wd-faq-pm" aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <div className="wd-faq-a">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ 7 · CONTACT ═══════ */}
        <section className="wd-contact" id="contact">
          <div className="wd-wrap">
            <div className="wd-contact-grid">
              <aside className="wd-contact-aside">
                <span className="wd-eyebrow">Get started</span>
                <h2 className="wd-h2">High-Converting Business Websites</h2>
                <p className="wd-lead">
                  Tell us about your business and we&apos;ll come back with a
                  design direction, an SEO-ready structure, and a transparent
                  project quote — modern, fast, mobile-friendly, and built to
                  turn visitors into customers.
                </p>
                <div className="wd-contact-rows">
                  <a href={SITE_CONTACT.emailHref} className="wd-contact-row">
                    <span className="wd-contact-row-icon" aria-hidden="true">
                      <FiMail />
                    </span>
                    <span className="wd-contact-row-txt">
                      <small>Email us anytime</small>
                      <strong>{SITE_CONTACT.email}</strong>
                    </span>
                  </a>
                  <a href={SITE_CONTACT.phoneHref} className="wd-contact-row">
                    <span className="wd-contact-row-icon" aria-hidden="true">
                      <FiPhone />
                    </span>
                    <span className="wd-contact-row-txt">
                      <small>Speak with a strategist</small>
                      <strong>{SITE_CONTACT.phoneDisplay}</strong>
                    </span>
                  </a>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wd-contact-row"
                  >
                    <span className="wd-contact-row-icon" aria-hidden="true">
                      <FiMapPin />
                    </span>
                    <span className="wd-contact-row-txt">
                      <small>Visit our office</small>
                      <strong>{SITE_CONTACT.address}</strong>
                    </span>
                  </a>
                </div>
              </aside>

              <div className="wd-contact-main">
                <ServiceLeadForm
                  formType="web-design"
                  badge="Free consultation"
                  title="Start Your Website Project"
                  subtitle="Takes about a minute — no commitment required."
                  submitText="Book a Strategy Call"
                  defaultServices={["Web Design"]}
                  messageLabel="Tell us about your project"
                  messagePlaceholder="Your business, your goals, and what your website needs to do"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <RelatedServices current="/services/web-design" />
      <Footer />
    </>
  );
}

export default Page;
