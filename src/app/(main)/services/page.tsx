import "./services-page.css";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";
import type { Metadata } from "next";
import {
  FaArrowRight,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaMagnifyingGlass,
  FaRocket,
  FaCircleCheck,
  FaClipboardCheck,
  FaHandshake,
  FaLaptopCode,
  FaLocationDot,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Web Design, SEO & PPC | Zonic Media",
  description:
    "Explore Zonic Media's digital marketing services including web development, local SEO, Google Business Profile optimization, and Google Ads management.",
};

/* ── data ─────────────────────────────────────────────────── */

function BtnArrow() {
  return (
    <span className="buttons__icon-wrapper">
      <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="buttons__icon-svg" width="8">
        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 14 15" fill="none" width="8" xmlns="http://www.w3.org/2000/svg" className="buttons__icon-svg buttons__icon-svg--copy">
        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
      </svg>
    </span>
  );
}

const heroStats = [
  { val: "95%+", lbl: "Client Success Rate" },
  { val: "100+", lbl: "Brands Grown" },
  { val: "50+", lbl: "Projects Delivered" },
  { val: "4.9★", lbl: "Average Rating" },
];

const services = [
  {
    color: "sp-svc-c1",
    icon: <FaLocationDot />,
    title: "Google Business Profile Optimization",
    desc: "Your GBP is the single most powerful free asset for local visibility. We optimize every signal — categories, photos, posts, and reviews — so you dominate local search and attract more qualified calls.",
    tags: ["Profile Setup & Optimization", "Map Pack Strategy", "Review Generation"],
    href: "/services/gmb-reinstatement-help",
    cta: "Explore GBP Optimization",
  },
  {
    color: "sp-svc-c2",
    icon: <FaCode />,
    title: "Custom Web Development",
    desc: "We build fast, mobile-first websites designed to convert visitors into paying customers. Clean code, technical SEO foundations, and conversion-focused UX built from day one — not as an afterthought.",
    tags: ["Conversion-Focused Design", "SEO-Ready Structure", "Speed Optimization"],
    href: "/services/web-design",
    cta: "Explore Web Development",
  },
  {
    color: "sp-svc-c3",
    icon: <FaMagnifyingGlass />,
    title: "Local SEO Services",
    desc: "Rank higher in local and national search with proven, sustainable strategies. We build organic visibility that compounds over time — improving rankings, driving targeted traffic, and generating consistent leads.",
    tags: ["Local Keyword Research", "Citation Building", "On-Page SEO"],
    href: "/services/local-seo-for-home-services",
    cta: "Explore Local SEO",
  },
  {
    color: "sp-svc-c4",
    icon: <FaBullhorn />,
    title: "Google Ads Management (PPC)",
    desc: "Data-driven campaigns that attract high-intent buyers and turn ad spend into measurable revenue. Every dollar of your budget is optimized for maximum ROAS with full transparency and reporting.",
    tags: ["Keyword Targeting", "ROAS-Focused Campaigns", "Conversion Tracking"],
    href: "/services/google-ads",
    cta: "Explore Google Ads",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep research into your business, competitors, and audience to build a strategy rooted in real data — not guesswork or assumptions.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes, brand assets, and pixel-perfect interfaces designed for conversion, visual clarity, and brand alignment at every touchpoint.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Clean, fast, accessible, SEO-optimized code built to perform flawlessly across every device, browser, and screen size.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Rigorous QA, smooth deployment, full cross-device testing, and a seamless go-live experience with zero disruption to your business.",
  },
  {
    num: "05",
    title: "Grow",
    desc: "Post-launch SEO, analytics tracking, ongoing A/B testing, and continuous optimization to keep your results compounding over time.",
  },
];

const whyPoints = [
  {
    icon: <FaClipboardCheck />,
    title: "Strategy-First Approach",
    desc: "We begin with deep discovery — your goals, market, and audience — before writing a single line of code. Strategy is built in, not bolted on.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Scalable Development",
    desc: "Every project is engineered for performance and long-term scale. The systems we build today grow seamlessly with your business tomorrow.",
  },
  {
    icon: <FaChartLine />,
    title: "Conversion-Focused Design",
    desc: "Our design decisions are grounded in user psychology and data — built to maximize engagement, trust, and lead generation at every scroll depth.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparent Process",
    desc: "Clear milestones, open communication, and full project visibility at every stage. You will always know exactly where things stand.",
  },
  {
    icon: <FaRocket />,
    title: "Long-Term Support",
    desc: "We don't disappear after launch. Ongoing optimization, updates, and strategic reviews keep your results compounding month over month.",
  },
];

const contactContent = {
  heading: "Let's Start Your Project",
  highlightedHeading: "",
  points: [
    "Dedicated team focused on your business growth",
    "Long-term support and ongoing optimization",
    "Clear communication and fast response times",
  ],
  cta: {
    eyebrow: "Schedule meeting :",
    label: "Book a Strategy Call",
    href: "/contact-us",
  },
};

/* ── page ─────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="sp-hero">
        <div className="sp-hero-inner">
          {/* left */}
          <div>
            <p className="sp-hero-eyebrow">Digital Marketing Agency</p>
            <h1 className="sp-hero-h1">
              Services Built to Grow<br />
              <span>Your Business</span>
            </h1>
            <p className="sp-hero-sub">
              End-to-end digital solutions designed to strengthen your brand,
              increase online visibility, and generate measurable business
              growth through strategy, technology, and performance-driven
              marketing.
            </p>
            <div className="sp-hero-actions">
              <Link href="/contact-us" className="buttons sp-btn-dark">
                Book a Strategy Call <BtnArrow />
              </Link>
              <Link href="#sp-services" className="buttons sp-btn-outline">
                View Services <BtnArrow />
              </Link>
            </div>
          </div>

          {/* right card */}
          <div className="sp-hero-card">
            <p className="sp-hero-card-title">Proven Results</p>
            <div className="sp-hero-stat-row">
              {heroStats.map((s, i) => (
                <div key={i} className="sp-hero-stat">
                  <p className="sp-hero-stat-val">{s.val}</p>
                  <p className="sp-hero-stat-lbl">{s.lbl}</p>
                </div>
              ))}
            </div>
            <div className="sp-hero-card-pills">
              {["Web Design", "Local SEO", "Google Ads", "GBP Optimization"].map((p, i) => (
                <span key={i} className="sp-pill">
                  <FaCircleCheck size={11} /> {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES DEEP DIVE ────────────────────────────── */}
      <section className="sp-section" id="sp-services">
        <div className="sp-section-header">
          <p className="sp-label">Our Services</p>
          <h2 className="sp-section-h2">
            Everything Your Business Needs to Grow Online
          </h2>
          <p className="sp-section-sub">
            From local search visibility to full-scale digital marketing — every
            service is engineered to generate leads, build trust, and compound
            results over time.
          </p>
        </div>

        <div className="sp-services-grid">
          {services.map((svc, i) => (
            <div key={i} className="sp-service-card">
              <div className={`sp-service-card-color ${svc.color}`} />
              <div className="sp-service-card-body">
                <div className="sp-service-card-icon">{svc.icon}</div>
                <h3 className="sp-service-card-h3">{svc.title}</h3>
                <p className="sp-service-card-p">{svc.desc}</p>
                <div className="sp-service-card-tags">
                  {svc.tags.map((t, j) => (
                    <span key={j} className="sp-service-tag">{t}</span>
                  ))}
                </div>
                <Link href={svc.href} className="sp-service-card-link">
                  {svc.cta} <FaArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section className="sp-section sp-section-dark">
        <div className="sp-section-header">
          <p className="sp-label sp-label-light">5 Simple Steps</p>
          <h2 className="sp-section-h2 sp-section-h2-light">
            Effortless Process, Exceptional Results
          </h2>
          <p className="sp-section-sub sp-section-sub-light">
            A clear, repeatable framework that connects strategy, design,
            development, and growth into one accountable delivery system.
          </p>
        </div>

        <div className="sp-process-grid">
          {processSteps.map((step, i) => (
            <div key={i} className="sp-process-card">
              <p className="sp-process-num">{step.num}</p>
              <h3 className="sp-process-title">{step.title}</h3>
              <p className="sp-process-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="sp-process-footer">
          <div className="sp-process-proof">
            <div className="sp-proof-avatars">
              {["Z", "O", "N", "I", "C"].map((l, i) => (
                <span key={i}>{l}</span>
              ))}
            </div>
            <p>Trusted by 100+ businesses that choose growth</p>
          </div>
          <Link href="/contact-us" className="buttons sp-btn-process">
            Start Now <BtnArrow />
          </Link>
        </div>
      </section>

      {/* ── WHY ZONIC ─────────────────────────────────────── */}
      <section className="sp-section sp-section-alt">
        <div className="sp-why-inner">
          {/* visual column */}
          <div className="sp-why-visual">
            <p className="sp-why-visual-kicker">Why Zonic Media</p>
            <h3 className="sp-why-visual-h3">
              The Growth Partner Built for Measurable Results
            </h3>
            <p className="sp-why-visual-p">
              We combine deep strategy, premium design, and performance-first
              development to deliver outcomes that matter to your bottom line —
              not just your portfolio page.
            </p>
            <div className="sp-why-stat-row">
              {[
                { val: "90%", lbl: "Client Retention Rate" },
                { val: "4.9★", lbl: "Avg. Client Rating" },
                { val: "100+", lbl: "Brands Grown" },
                { val: "24/7", lbl: "Dedicated Support" },
              ].map((s, i) => (
                <div key={i} className="sp-why-stat">
                  <p className="sp-why-stat-val">{s.val}</p>
                  <p className="sp-why-stat-lbl">{s.lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* content column */}
          <div>
            <p className="sp-label">What Sets Us Apart</p>
            <h2 className="sp-section-h2">Built Different, Proven Better</h2>
            <p className="sp-section-sub" style={{ marginBottom: "28px" }}>
              Every decision we make is in service of your measurable business
              outcomes — not just deliverables.
            </p>
            <div className="sp-why-list">
              {whyPoints.map((pt, i) => (
                <div key={i} className="sp-why-item">
                  <div className="sp-why-check">{pt.icon}</div>
                  <div>
                    <p className="sp-why-item-title">{pt.title}</p>
                    <p className="sp-why-item-desc">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ──────────────────────────────── */}
      <div className="sp-finalcta">
        <div>
          <h2 className="sp-finalcta-h2">
            Ready to Build a Digital Growth System?
          </h2>
          <p className="sp-finalcta-p">
            No fluff, no bloated timelines — just measurable outcomes from day
            one. Let's map the fastest path to your next growth milestone.
          </p>
        </div>
        <div className="sp-finalcta-actions">
          <Link href="/contact-us" className="buttons sp-btn-finalcta-dark">
            Book a Strategy Call <BtnArrow />
          </Link>
          <Link href="/services/web-design" className="buttons sp-btn-finalcta-ghost">
            Explore Web Design <BtnArrow />
          </Link>
        </div>
      </div>

      <ContactForm content={contactContent} />
      <Footer />
    </>
  );
}
