import type { Metadata } from "next";
import Link from "next/link";
import "@/app/style/googleAdsPage.css";
import GhlChatWidget from "@/app/components/GhlChatWidget";
import Footer from "@/app/components/Footer";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";
import type { ReactNode } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiEye,
  FiFolder,
  FiNavigation,
  FiPhone,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiTarget,
  FiX,
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
  title: "Google Ads Management Services | PPC Agency",
  description:
    "Drive high-intent traffic with expert Google Ads management. We create, optimize, and scale PPC campaigns to generate qualified leads and maximize ROI.",
  keywords: [
    "Google Ads management services",
    "PPC agency for local business",
    "local services ads management",
    "Google Ads agency for small business",
    "PPC campaign management",
    "search ads management",
    "pay per click advertising services",
    "Google Ads optimization",
    "lead generation with Google Ads",
    "best PPC agency for small business",
    "Google Ads management company",
    "local PPC management services",
    "Google Local Services Ads agency",
  ],
  alternates: { canonical: "/services/google-ads" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Google Ads Management Services | PPC Agency | Zonic Media",
    description:
      "Drive high-intent traffic with expert Google Ads management. We create, optimize, and scale PPC campaigns to generate qualified leads and maximize ROI.",
    url: "/services/google-ads",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Google Ads", url: "/services/google-ads" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.zonicllc.com/services/google-ads#service",
  name: "Google Ads Management Services",
  alternateName: [
    "PPC Management Services",
    "Google Ads Agency for Small Business",
    "Pay-Per-Click Campaign Management",
    "Local Services Ads Management",
  ],
  serviceType: "Google Ads / PPC Management",
  description:
    "Zonic Media creates, optimizes, and scales Google Ads campaigns for small and mid-size businesses — search ads, Local Services Ads, and remarketing built to generate qualified leads and maximize ROI. Campaign strategy, keyword and negative-keyword management, ad copy testing, landing page optimization, and transparent reporting. Verified client reviews on Trustpilot and Clutch.",
  url: "https://www.zonicllc.com/services/google-ads",
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
    name: "Small and mid-size businesses that want qualified leads from Google Ads",
  },
  offers: {
    "@type": "Offer",
    name: "Free Google Ads account audit",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free PPC audit identifying wasted spend, missed keywords, and the fastest path to a higher return on ad spend.",
  },
};

/* ─────────────────────────────────────────────────────────────── data ───── */

const gaProcess = [
  {
    num: "01",
    title: "Campaign & Market Audit",
    desc: "A comprehensive analysis of your business, audience, competitors, and current ad performance to build a strong strategy.",
    bullets: [
      "Account performance review",
      "Competitor ad analysis",
      "Keyword opportunity research",
    ],
  },
  {
    num: "02",
    title: "Keyword Research & Targeting",
    desc: "We identify the high-intent searches your customers actually use, so your ads appear for valuable queries only.",
    bullets: [
      "High-intent keyword research",
      "Negative keyword filtering",
      "Search intent targeting",
    ],
  },
  {
    num: "03",
    title: "Ad Creation & Campaign Setup",
    desc: "Optimized campaigns with compelling copy, proper ad group structure, and conversion-focused messaging.",
    bullets: [
      "Ad copy creation",
      "Campaign structure setup",
      "Ad extension configuration",
    ],
  },
  {
    num: "04",
    title: "Campaign Optimization",
    desc: "Continuous monitoring and strategic adjustments to improve click-through rates, lower costs, and lift conversions.",
    bullets: [
      "Bid strategy optimization",
      "A/B ad testing",
      "Budget performance control",
    ],
  },
  {
    num: "05",
    title: "Tracking & Scaling",
    desc: "We track conversions, cost-per-click, and ROI to scale the campaigns that win and cut the ones that don't.",
    bullets: [
      "Conversion tracking setup",
      "ROI performance monitoring",
      "Campaign scaling strategy",
    ],
  },
];

const gaWhy = [
  {
    icon: <FiTarget aria-hidden="true" />,
    title: "Data-Driven Campaign Strategy",
    desc: "We build campaigns on data, not guesswork — in-depth keyword research, competitor analysis, and audience targeting so your ads reach customers actively searching for your services, maximizing visibility and qualified traffic.",
  },
  {
    icon: <FiBarChart2 aria-hidden="true" />,
    title: "Optimized Ad Spend & ROI Focus",
    desc: "We manage bidding strategies, keyword targeting, and campaign structure to reduce wasted budget and increase conversions — so every advertising dollar works efficiently toward measurable results.",
  },
  {
    icon: <FiRefreshCw aria-hidden="true" />,
    title: "Continuous Campaign Optimization",
    desc: "We regularly analyze performance, test new ad variations, adjust bids, and refine targeting. Ongoing optimization keeps your campaigns competitive and your leads consistent.",
  },
  {
    icon: <FiEye aria-hidden="true" />,
    title: "Transparent Reporting & Insights",
    desc: "Clear reports covering clicks, conversions, cost per lead, and return on investment — so you always understand how your Google Ads strategy contributes to business growth.",
  },
];

type Faq = { q: string; a: string };

const gaFaqsLeft: Faq[] = [
  {
    q: "What is Google Ads and how can it help my business?",
    a: "Google Ads is a paid advertising platform that allows your business to appear at the top of Google search results. It helps attract high-intent customers who are actively searching for your products or services, generating qualified leads and increasing sales.",
  },
  {
    q: "How quickly can I see results from Google Ads?",
    a: "Google Ads campaigns can start generating traffic and leads almost immediately after launch. However, optimizing campaigns for the best performance and return on ad spend typically takes a few weeks of testing and adjustments.",
  },
  {
    q: "How much should I spend on Google Ads?",
    a: "Your Google Ads budget depends on factors such as your industry, competition, and business goals. We help determine the right budget and bidding strategy to maximize your ad performance while keeping costs efficient.",
  },
];

const gaFaqsRight: Faq[] = [
  {
    q: "How do you improve the performance of Google Ads campaigns?",
    a: "We improve campaign performance through keyword research, audience targeting, ad copy testing, bid optimization, and continuous monitoring of conversion data to increase leads and reduce wasted ad spend.",
  },
  {
    q: "Can Google Ads work for local businesses?",
    a: "Yes. Google Ads is highly effective for local businesses because it allows your ads to appear when nearby customers search for services in your area, helping generate more calls, inquiries, and appointments.",
  },
];

// Derived from the visible FAQ arrays above so page copy and schema never drift.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...gaFaqsLeft, ...gaFaqsRight].map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

type GaFeature = {
  visual: "tree" | "filter" | "lp";
  flip: boolean;
  title: string;
  desc: ReactNode;
  points: string[];
  cta: string;
};

const gaFeatures: GaFeature[] = [
  {
    visual: "tree",
    flip: false,
    title: "Google Ads Campaign Setup",
    desc: (
      <>
        Launch highly targeted campaigns built to reach customers actively
        searching for your services. Ads are also the fastest way to stay
        visible if your organic listing goes dark — for example, while we
        handle a{" "}
        <Link
          href="/services/gmb-reinstatement-help"
          className="ga-inline-link"
        >
          suspended Google Business Profile
        </Link>
        . We build data-driven campaigns that maximize visibility and generate
        qualified leads.
      </>
    ),
    points: [
      "Keyword research & targeting",
      "Campaign structure setup",
      "Ad group optimization",
      "Conversion tracking setup",
    ],
    cta: "Get started with Google Ads",
  },
  {
    visual: "filter",
    flip: true,
    title: "Google Ads Optimization",
    desc: (
      <>
        We continuously monitor and optimize your campaigns to improve
        performance and maximize return on ad spend. For service-area
        businesses, we can also resolve{" "}
        <Link
          href="/services/gmb-verification-help"
          className="ga-inline-link"
        >
          Google Business Profile verification
        </Link>{" "}
        issues so your organic listing supports the paid strategy.
      </>
    ),
    points: [
      "Bid strategy optimization",
      "Negative keyword management",
      "Ad performance testing",
      "Budget efficiency improvements",
    ],
    cta: "Optimize my Google Ads",
  },
  {
    visual: "lp",
    flip: false,
    title: "Landing Page & Conversion Optimization",
    desc: (
      <>
        A successful campaign requires more than clicks. Our{" "}
        <Link href="/services/web-design" className="ga-inline-link">
          conversion-focused web design
        </Link>{" "}
        team optimizes landing pages and user experience to convert traffic
        into leads and customers while improving campaign performance.
      </>
    ),
    points: [
      "Conversion-focused landing pages",
      "User experience improvements",
      "A/B testing strategies",
      "Conversion rate optimization",
    ],
    cta: "Improve my conversions",
  },
];

/* ─────────────────────────────────────────── animated visuals (CSS-only) ── */

/** Hero visual: your sponsored ad winning the search — and the phone. */
function GaSerpConsole() {
  return (
    <div
      className="ga-hero-visual"
      role="img"
      aria-label="A Google search for a local service: the sponsored ad for your business appears first with call and directions buttons, the call button is clicked, a new lead arrives, and cost per lead drops while conversions climb."
    >
      <div className="ga-serp" aria-hidden="true">
        <div className="ga-serp-search">
          <FiSearch />
          plumber near me
          <span className="ga-serp-caret" />
        </div>
        <div className="ga-serp-body">
          <div className="ga-ad">
            <span className="ga-ad-tag">Sponsored</span>
            <p className="ga-ad-title">Your Business — Same-Day Service</p>
            <i />
            <i />
            <div className="ga-ad-actions">
              <span className="ga-ad-act ga-ad-act--primary">
                <FiPhone />
                Call now
              </span>
              <span className="ga-ad-act">
                <FiNavigation />
                Directions
              </span>
            </div>
            <span className="ga-click" />
          </div>
          <div className="ga-organic">
            <i />
            <i />
          </div>
          <div className="ga-organic">
            <i />
            <i />
          </div>
        </div>
      </div>

      <div className="ga-metrics" aria-hidden="true">
        <div className="ga-metric">
          <b>
            $38 <span>▼ 44%</span>
          </b>
          <small>Cost per lead</small>
        </div>
        <div className="ga-metric">
          <b>
            9.2% <span>▲ 2.1%</span>
          </b>
          <small>Click-through rate</small>
        </div>
        <div className="ga-metric">
          <b>
            96 <span>▲ 31</span>
          </b>
          <small>Calls this month</small>
        </div>
      </div>

      <div className="ga-toast" aria-hidden="true">
        <span className="ga-toast-ic">
          <FiPhone />
        </span>
        <span>
          <b>New call from your ad</b>
          <small>High-intent search · just now</small>
        </span>
      </div>
    </div>
  );
}

/** Feature visuals. Purely presentational. */
function GaVisual({ kind }: { kind: GaFeature["visual"] }) {
  if (kind === "tree") {
    return (
      <div className="ga-visual" aria-hidden="true">
        <div className="ga-visual-head">
          <h4>Campaign Structure</h4>
          <span className="ga-visual-tag">Built right</span>
        </div>
        <div className="ga-tree">
          <span className="ga-tree-node">
            <FiFolder />
            Search campaign
          </span>
          <span className="ga-tree-stem" />
          <div className="ga-tree-branches">
            <div className="ga-tree-group">
              <b>Emergency services</b>
              <span className="ga-kw">emergency repair</span>
              <span className="ga-kw">24/7 service</span>
            </div>
            <div className="ga-tree-group">
              <b>Scheduled work</b>
              <span className="ga-kw">free estimate</span>
              <span className="ga-kw">installation</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "filter") {
    return (
      <div className="ga-visual" aria-hidden="true">
        <div className="ga-visual-head">
          <h4>Search Term Review</h4>
          <span className="ga-visual-tag">Weekly</span>
        </div>
        <div className="ga-filter-rows">
          <span className="ga-filter-row ga-filter-row--keep">
            <FiCheck />
            emergency service near me
            <b>Keep</b>
          </span>
          <span className="ga-filter-row ga-filter-row--cut">
            <FiX />
            free diy repair guide
            <b>Cut</b>
          </span>
          <span className="ga-filter-row ga-filter-row--keep">
            <FiCheck />
            same day repair [city]
            <b>Keep</b>
          </span>
          <span className="ga-filter-row ga-filter-row--cut">
            <FiX />
            repair jobs hiring
            <b>Cut</b>
          </span>
        </div>
        <div className="ga-filter-save">
          <span>Wasted spend removed</span>
          <b>−$412 / mo</b>
        </div>
      </div>
    );
  }
  return (
    <div className="ga-visual" aria-hidden="true">
      <div className="ga-visual-head">
        <h4>Landing Page</h4>
        <span className="ga-visual-tag">Converting</span>
      </div>
      <div className="ga-lp">
        <div className="ga-lp-page">
          <i />
          <i />
          <span />
          <span />
          <b />
        </div>
        <div className="ga-lp-stats">
          <div className="ga-lp-stat">
            <b>
              12.4% <span>▲</span>
            </b>
            <small>Conversion rate</small>
            <span className="ga-lp-bar">
              <i />
            </span>
          </div>
          <div className="ga-lp-stat">
            <b>
              1.2s <span>fast</span>
            </b>
            <small>Load time</small>
          </div>
        </div>
      </div>
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

      <main className="ga-page">
        {/* ═══════════════════════════════════════════════ 1 · HERO ═══════ */}
        <section className="ga-hero">
          <div className="ga-wrap">
            <div className="ga-hero-grid">
              <div>
                <span className="ga-hero-badge">
                  <FiShield aria-hidden="true" />
                  Certified Google Ads Specialists
                </span>
                <h1 className="ga-hero-h1">
                  Google Ads Campaigns That Drive{" "}
                  <span className="ga-hl">High-Intent Customers</span>
                </h1>
                <p className="ga-hero-sub">
                  We help businesses capture ready-to-convert traffic, appear
                  at the top of Google search results, optimize advertising
                  budgets, and turn paid clicks into measurable leads and
                  revenue — a fast complement to the slower-building results of{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="ga-inline-link"
                  >
                    local SEO
                  </Link>
                  .
                </p>
                <div className="ga-hero-ctas">
                  <Link href="/contact-us" className="buttons">
                    Request a Consultation
                    <BtnArrow />
                  </Link>
                  <a href={SITE_CONTACT.phoneHref} className="ga-btn-ghost">
                    <FiPhone aria-hidden="true" />
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="ga-hero-trust">
                  <span>
                    <span className="ga-stars" aria-hidden="true">
                      ★★★★★
                    </span>{" "}
                    <b>4.9</b> client rating
                  </span>
                  <span>
                    <b>Cost-per-lead</b> managed, not cost-per-click
                  </span>
                  <span>
                    <b>No</b> long-term contracts
                  </span>
                </div>
              </div>

              <GaSerpConsole />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ 2 · INDUSTRIES COPY ════ */}
        <section className="ga-industries">
          <div className="ga-wrap">
            <div className="ga-industries-grid">
              <div>
                <span className="ga-eyebrow">Who we run ads for</span>
                <h2 className="ga-h2">
                  Trusted Google Ads Management Across Industries
                </h2>
              </div>
              <div className="ga-industries-copy">
                <p>
                  Whether you operate an{" "}
                  <Link
                    href="/services/industry/local-seo-services-for-hvac"
                    className="ga-inline-link"
                  >
                    HVAC company
                  </Link>
                  , roofing business, locksmith service, healthcare clinic, or{" "}
                  <Link href="/industries" className="ga-inline-link">
                    any local service business
                  </Link>
                  , Zonic Media helps companies across industries generate
                  qualified leads through strategic
                  Google Ads campaigns. From plumbers, electricians,
                  landscapers, and contractors to dentists, medical spas, real
                  estate agencies, auto repair shops, moving companies, and
                  cleaning services — we help businesses attract ready-to-buy
                  customers through highly targeted paid search advertising.
                </p>
                <p>
                  Google Ads puts your business at the top of search results
                  exactly when potential customers are looking for your
                  services. Paired with{" "}
                  <Link
                    href="/services/gmb-optimization"
                    className="ga-inline-link"
                  >
                    Google Business Profile optimization
                  </Link>
                  , paid and organic reinforce each other. We focus on
                  data-driven campaigns that maximize return on ad spend while
                  minimizing wasted budget.
                </p>
                <p>
                  Our services support local businesses, service-area
                  businesses, and multi-location companies scaling their lead
                  generation. Brand-new companies can get ads, branding, and a
                  website together through our{" "}
                  <Link href="/services/launchpad" className="ga-inline-link">
                    business launch package
                  </Link>
                  . Whatever your industry, we build optimized campaigns,
                  refine targeting, and continuously improve performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ 3 · FEATURES ═══════ */}
        <section className="ga-features">
          <div className="ga-wrap">
            {gaFeatures.map((feature) => (
              <div
                className={`ga-feature${feature.flip ? " ga-feature--flip" : ""}`}
                key={feature.title}
              >
                {feature.flip ? (
                  <>
                    <GaVisual kind={feature.visual} />
                    <div>
                      <h3>{feature.title}</h3>
                      <p className="ga-feature-desc">{feature.desc}</p>
                      <ul className="ga-feature-points">
                        {feature.points.map((point) => (
                          <li key={point}>
                            <FiCheck aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact-us" className="ga-feature-link">
                        {feature.cta}
                        <FiArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3>{feature.title}</h3>
                      <p className="ga-feature-desc">{feature.desc}</p>
                      <ul className="ga-feature-points">
                        {feature.points.map((point) => (
                          <li key={point}>
                            <FiCheck aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact-us" className="ga-feature-link">
                        {feature.cta}
                        <FiArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                    <GaVisual kind={feature.visual} />
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════ 4 · PROCESS ═══════ */}
        <section className="ga-process">
          <div className="ga-wrap">
            <div className="ga-sec-head ga-sec-head--center">
              <span className="ga-eyebrow">How we work</span>
              <h2 className="ga-h2">
                Our Proven 5-Step Google Ads Management Process
              </h2>
            </div>
            <div className="ga-proc-grid">
              {gaProcess.map((step) => (
                <div className="ga-proc-card" key={step.num}>
                  <span className="ga-proc-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <ul className="ga-proc-list">
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

        {/* ════════════════════════════════════════════════ 5 · WHY ═══════ */}
        <section className="ga-why">
          <div className="ga-wrap">
            <div className="ga-sec-head ga-sec-head--center">
              <span className="ga-eyebrow">Why Zonic Media</span>
              <h2 className="ga-h2">
                Why Work with Zonic Media for Google Ads Management
              </h2>
            </div>
            <div className="ga-why-grid">
              {gaWhy.map((item) => (
                <div className="ga-why-card" key={item.title}>
                  <span className="ga-why-ic" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════ 6 · FAQ ═══════ */}
        <section className="ga-faq">
          <div className="ga-wrap">
            <div className="ga-sec-head ga-sec-head--center">
              <span className="ga-eyebrow">Common questions</span>
              <h2 className="ga-h2">Google Ads Questions, Answered</h2>
            </div>
            <div className="ga-faq-cols">
              <div>
                {gaFaqsLeft.map((faq, i) => (
                  <details className="ga-faq-item" name="ga-faq" open={i === 0} key={faq.q}>
                    <summary className="ga-faq-q">
                      {faq.q}
                      <span className="ga-faq-pm" aria-hidden="true">
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
                    <div className="ga-faq-a">{faq.a}</div>
                  </details>
                ))}
              </div>
              <div>
                {gaFaqsRight.map((faq) => (
                  <details className="ga-faq-item" name="ga-faq" key={faq.q}>
                    <summary className="ga-faq-q">
                      {faq.q}
                      <span className="ga-faq-pm" aria-hidden="true">
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
                    <div className="ga-faq-a">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ 7 · CTA BAND ═══════ */}
        <section className="ga-cta">
          <div className="ga-wrap">
            <div className="ga-cta-inner">
              <span className="ga-eyebrow">Free Google Ads audit</span>
              <h2>Find Out Where Your Ad Budget is Leaking</h2>
              <p>
                We&apos;ll audit your account — wasted spend, missed keywords,
                and the fastest path to a higher return on ad spend. Free, and
                yours to keep either way.
              </p>
              <div className="ga-cta-checks">
                <span>
                  <FiCheck aria-hidden="true" />
                  Wasted spend identified
                </span>
                <span>
                  <FiCheck aria-hidden="true" />
                  Missed keywords mapped
                </span>
                <span>
                  <FiCheck aria-hidden="true" />
                  Clear scaling plan
                </span>
              </div>
              <div className="ga-cta-ctas">
                <Link href="/contact-us" className="ga-btn-white">
                  Get My Free Ads Audit
                  <FiArrowRight aria-hidden="true" />
                </Link>
                <a href={SITE_CONTACT.phoneHref} className="ga-btn-gold">
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GhlChatWidget />
      <Footer />
    </>
  );
}

export default Page;
