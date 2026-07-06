import "@/app/style/about.css";
import Script from "next/script";
import { Metadata } from "next";
import Footer from "@/app/components/Footer";
import ClutchWidget from "@/app/components/ClutchWidget";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const SITE_URL = "https://www.zonicllc.com";

export const metadata: Metadata = {
  title: "About Zonic Media | Marketing Agency for Small & Mid-Size Businesses",
  description:
    "Meet Zonic Media — a US marketing agency helping small and mid-size businesses grow with Local SEO, Google Business Profile management, website design, and PPC. Based in Dover, DE, serving businesses nationwide.",
  keywords: [
    "about Zonic Media",
    "marketing agency for small business",
    "local SEO agency",
    "digital marketing agency Dover DE",
    "Google Business Profile management",
    "marketing agency for local businesses",
    "web design and SEO agency",
    "US marketing agency for service businesses",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "About Zonic Media | Marketing Agency for Small & Mid-Size Businesses",
    description:
      "Meet the team helping small and mid-size US businesses get found, look established, and bring in more customers — Local SEO, GBP, web design, and PPC under one roof.",
    url: "/about",
    type: "website",
  },
};

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

const ABOUT_SERVICE_OPTIONS = [
  "Web Design",
  "Pay Per Click (PPC)",
  "Google My Business (GMB)",
  "Web Development",
  "Local SEO",
];

const aboutFaqs = [
  {
    question: "What kind of businesses does Zonic Media work with?",
    answer:
      "We work with small and mid-size US businesses — mostly local and service-based: roofers, HVAC and plumbing companies, dental and chiropractic practices, real estate agents, cleaning and towing companies, law firms, and other local providers. Our focus is helping these businesses get found on Google and turn nearby searches into phone calls.",
  },
  {
    question: "Where is Zonic Media based, and do you work nationwide?",
    answer:
      "We're based in Dover, Delaware, with deep roots across the Mid-Atlantic. Our work is remote-first, so we serve local businesses across the United States — your location is never a barrier to working together.",
  },
  {
    question: "What services does Zonic Media offer?",
    answer:
      "Everything a growing business needs to compete online, under one roof: Local SEO, Google Business Profile setup, optimization and reinstatement, website design and development, Google Ads (PPC), and graphic and logo design.",
  },
  {
    question: "What makes Zonic Media different from other agencies?",
    answer:
      "We're strategy-first and results-focused. One team handles your search visibility, website, and ads — so nothing falls through the cracks. We don't lock you into long-term contracts, and we report in plain English on the metrics that actually matter: calls, leads, and rankings.",
  },
  {
    question: "How do you measure project success?",
    answer:
      "By real business outcomes, not vanity metrics. We track Map Pack rankings, qualified calls and form leads, conversion rates, and return on investment — so you always know exactly what's working and where your dollars are going.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. Most of our relationships are month to month — we keep optimizing, monitoring performance, and reporting so your growth compounds over time. Clients stay because the leads keep coming, not because they're contractually tied to us.",
  },
];

const aboutBreadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
]);

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#aboutpage`,
  url: `${SITE_URL}/about`,
  name: "About Zonic Media",
  description:
    "Zonic Media is a US marketing agency helping small and mid-size businesses grow with Local SEO, Google Business Profile management, website design, and PPC.",
  mainEntity: {
    "@type": "Organization",
    name: "Zonic Media",
    url: SITE_URL,
    email: SITE_CONTACT.email,
    telephone: SITE_CONTACT.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green, STE B",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US",
    },
    areaServed: { "@type": "Country", name: "United States" },
  },
};

const aboutFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aboutFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function Page() {
  return (
    <>
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutBreadcrumbJsonLd),
        }}
      />
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <Script
        id="about-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqJsonLd) }}
      />

      <main className="about-revamp">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="about-hero">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">About Zonic Media</span>
                <h1>
                  The marketing team behind{" "}
                  <span className="accent">small-business growth.</span>
                </h1>
                <p className="lead">
                  We help small and mid-size US businesses get found, look
                  established, and bring in more customers — with Local SEO,
                  Google Business Profile management, website design, and PPC
                  handled by one team that actually understands smaller budgets
                  and bigger goals.
                </p>
                <div className="hero-actions">
                  <a href={SITE_CONTACT.bookCallHref} className="buttons">
                    Book a Free Strategy Call
                    <BtnArrow />
                  </a>
                  <a
                    href={SITE_CONTACT.phoneHref}
                    className="btn btn-ghost-light"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ width: 17, height: 17 }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Digital-marketing performance snapshot */}
              <div className="hero-visual" aria-hidden="true">
                <div className="growth-card">
                  <div className="gc-head">
                    <div>
                      <span className="gc-eyebrow">
                        <span className="gc-ping"></span>Campaign performance
                      </span>
                      <div className="gc-metric">
                        <span className="gc-num">+142%</span>
                        <span className="gc-up">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path d="M3 17l6-6 4 4 8-8" />
                            <path d="M17 7h4v4" />
                          </svg>
                        </span>
                      </div>
                      <div className="gc-cap">Qualified leads vs. last quarter</div>
                    </div>
                  </div>

                  <div className="gc-chart">
                    <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gcFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.34" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 96 L50 88 L100 92 L150 64 L200 58 L250 30 L300 14 L300 120 L0 120 Z"
                        fill="url(#gcFill)"
                      />
                      <path
                        d="M0 96 L50 88 L100 92 L150 64 L200 58 L250 30 L300 14"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="300" cy="14" r="4.5" fill="#f97316" />
                    </svg>
                  </div>

                  <div className="gc-channels">
                    <div className="gc-ch">
                      <span className="gc-ch-lbl">Local SEO</span>
                      <span className="gc-bar">
                        <i style={{ width: "88%" }}></i>
                      </span>
                      <span className="gc-ch-val">88</span>
                    </div>
                    <div className="gc-ch">
                      <span className="gc-ch-lbl">Google Ads</span>
                      <span className="gc-bar">
                        <i style={{ width: "64%" }}></i>
                      </span>
                      <span className="gc-ch-val">64</span>
                    </div>
                    <div className="gc-ch">
                      <span className="gc-ch-lbl">GBP</span>
                      <span className="gc-bar">
                        <i style={{ width: "94%" }}></i>
                      </span>
                      <span className="gc-ch-val">94</span>
                    </div>
                  </div>
                </div>

                <div className="gc-badge b1">
                  <div className="ic ic-rank">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="lbl">Map Pack</div>
                    <div className="val">Top 3</div>
                  </div>
                </div>
                <div className="gc-badge b2">
                  <div className="ic ic-call">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="lbl">Calls this month</div>
                    <div className="val">+38%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-stats">
              <div className="st">
                <div className="n">
                  700<span>+</span>
                </div>
                <div className="c">
                  Google Business Profiles reinstated &amp; verified
                </div>
              </div>
              <div className="st">
                <div className="n">
                  5.0<span>★</span>
                </div>
                <div className="c">Average client rating</div>
              </div>
              <div className="st">
                <div className="n">
                  95<span>%</span>
                </div>
                <div className="c">Client growth success rate</div>
              </div>
              <div className="st">
                <div className="n">
                  20<span>+</span>
                </div>
                <div className="c">Local service niches served</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STORY / WHO WE ARE ───────────────────────────── */}
        <section className="story">
          <div className="wrap">
            <div className="story-grid">
              <div className="story-label">
                <span className="eyebrow">Who we are</span>
                <h2>A smarter model for sustainable growth.</h2>
              </div>
              <div className="story-body">
                <p>
                  Zonic Media is a performance-focused marketing agency built for
                  the businesses bigger agencies overlook. We believe a strong
                  digital presence comes from{" "}
                  <strong>strategy, clarity, and results</strong> — never
                  guesswork or busywork that looks good on a report but never
                  rings the phone.
                </p>
                <p>
                  Every engagement starts with understanding your business, your
                  customers, and how people actually search for what you do. From
                  there we build a clear plan — Local SEO, a conversion-ready
                  website, a healthy Google Business Profile, and ads tuned to
                  cost-per-call — and we ship the work, not just a slide deck.
                </p>
                <p>
                  Based in Dover, Delaware and working remote-first with clients
                  across the United States, we keep the same focus from research
                  to launch to ongoing optimization:{" "}
                  <strong>
                    steady growth, stronger visibility, and measurable results
                  </strong>{" "}
                  for every business we partner with.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── JOURNEY / HOW WE WORK ────────────────────────── */}
        <section className="journey">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow center">How we work</span>
              <h2>A clear path from strategy to steady leads</h2>
              <p>
                No black boxes. Every partnership moves through the same three
                stages — so you always know what we&apos;re doing and why.
              </p>
            </div>
            <div className="journey-grid">
              <div className="journey-card">
                <div className="journey-num" aria-hidden="true"></div>
                <h3>Discover</h3>
                <div className="kicker">Strategy &amp; research</div>
                <p>
                  We analyze your business, audience, competitors, and local
                  search opportunities to build a clear, data-driven roadmap
                  aimed at the fastest routes to more leads.
                </p>
              </div>
              <div className="journey-card">
                <div className="journey-num" aria-hidden="true"></div>
                <h3>Design</h3>
                <div className="kicker">Brand, web &amp; content</div>
                <p>
                  We turn the plan into a conversion-focused website, a polished
                  brand, and content built to rank — crafted with real user
                  experience at the core, not templates.
                </p>
              </div>
              <div className="journey-card">
                <div className="journey-num" aria-hidden="true"></div>
                <h3>Deliver</h3>
                <div className="kicker">Launch, growth &amp; optimization</div>
                <p>
                  We launch, monitor, and continuously optimize your search
                  visibility, profile, and campaigns — then report in plain
                  English on the leads and dollars they generate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIFFERENTIATORS / WHY CHOOSE US ──────────────── */}
        <section className="why">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow center">Why choose us</span>
              <h2>Built to make your brand stand out locally</h2>
              <p>
                We position small and mid-size businesses to compete — and win —
                in a digital-first world where the top of Google is where
                customers decide.
              </p>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-ic">
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
                <h3>Strategy before tactics</h3>
                <p>
                  We start with a plan tied to your goals — not a checklist of
                  activities that keep an agency busy but never move your
                  numbers.
                </p>
              </div>
              <div className="why-card">
                <div className="why-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                </div>
                <h3>One team, everything covered</h3>
                <p>
                  SEO, your Google profile, website, and ads all under one roof —
                  aligned and accountable, so nothing falls through the cracks
                  between vendors.
                </p>
              </div>
              <div className="why-card">
                <div className="why-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m7 14 4-4 3 3 5-6" />
                  </svg>
                </div>
                <h3>Measured by real results</h3>
                <p>
                  We report on calls, leads, and rankings — the metrics that pay
                  the bills — with clear, honest numbers you can actually act on.
                </p>
              </div>
              <div className="why-card">
                <div className="why-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3>No long-term lock-in</h3>
                <p>
                  We earn the relationship month to month. Most clients stay
                  because the leads keep coming — not because a contract forces
                  them to.
                </p>
              </div>
              <div className="why-card">
                <div className="why-ic">
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
                <h3>Local search specialists</h3>
                <p>
                  Map Pack visibility and Google Business Profile recovery are
                  what we do best — including 500+ suspended profiles we&apos;ve
                  helped reinstate.
                </p>
              </div>
              <div className="why-card">
                <div className="why-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M8 13h8M8 17h5" />
                  </svg>
                </div>
                <h3>Built for smaller budgets</h3>
                <p>
                  We make every dollar work harder, so a growing business can
                  look established and compete with far bigger names in its
                  market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMPACT BY THE NUMBERS ────────────────────────── */}
        <section className="numbers">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow center light">Our impact</span>
              <h2>Results we measure by impact, not just design</h2>
              <p>
                Bold work is only worth it if it moves the numbers that matter to
                your business.
              </p>
            </div>
            <div className="numbers-grid">
              <div className="num-card">
                <div className="n">
                  10<span>+</span>
                </div>
                <div className="c">
                  Years of combined SEO, web, and marketing experience.
                </div>
              </div>
              <div className="num-card">
                <div className="n">
                  500<span>+</span>
                </div>
                <div className="c">
                  Suspended Google Business Profiles reinstated.
                </div>
              </div>
              <div className="num-card">
                <div className="n">
                  100<span>+</span>
                </div>
                <div className="c">
                  Projects delivered for businesses across the US.
                </div>
              </div>
              <div className="num-card">
                <div className="n">
                  92<span>%</span>
                </div>
                <div className="c">
                  Client satisfaction from post-project feedback.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS (Clutch reviews) ────────────────── */}
        <section className="testimonials">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow center">Client results</span>
              <h2>Hear what our clients say about working with us</h2>
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

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="faq">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow center">Common questions</span>
              <h2>Frequently asked questions</h2>
            </div>
            <div className="faq-wrap">
              {[aboutFaqs.slice(0, 3), aboutFaqs.slice(3)].map((column, ci) => (
                <div className="faq-col" key={ci}>
                  {column.map((faq, i) => (
                    <details
                      className="faq-item"
                      key={faq.question}
                      open={ci === 0 && i === 0}
                    >
                      <summary className="faq-q">
                        {faq.question}
                        <span className="pm">
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
                      <div className="faq-a">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT (contact-us form + details) ──────────── */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact-grid">
              <div className="contact-copy">
                <span className="eyebrow">Get in touch</span>
                <h2>Let&apos;s start your project</h2>
                <p>
                  Tell us where you want to grow and we&apos;ll come back with the
                  fastest next step — a free review of your Google profile, search
                  visibility, and website. No obligation.
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
                        <span className="val">
                          {SITE_CONTACT.phoneDisplay}
                        </span>
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

              <div className="contact-form-col">
                <ServiceLeadForm
                  formType="about"
                  badge="Free consultation"
                  title="Send us a message"
                  subtitle="We'll reply within one business day."
                  submitText="Send Message"
                  showBusinessName={false}
                  serviceOptions={ABOUT_SERVICE_OPTIONS}
                  messagePlaceholder="Tell us a bit about your goals or project"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────── */}
        <section className="cta-final">
          <div className="wrap">
            <div className="cta-inner">
              <span className="eyebrow center">Ready when you are</span>
              <h2>Let&apos;s map your growth plan</h2>
              <p>
                Book a free strategy call and we&apos;ll walk you through the
                fastest next step for your profile, search visibility, and
                website — with no obligation.
              </p>
              <div className="cta-actions">
                <a href={SITE_CONTACT.bookCallHref} className="buttons">
                  Book a Free Strategy Call
                  <BtnArrow />
                </a>
                <a href={SITE_CONTACT.phoneHref} className="btn btn-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ width: 17, height: 17 }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Page;
