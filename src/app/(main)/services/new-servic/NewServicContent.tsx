"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";
import { motion, useAnimation } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaMagnifyingGlass,
  FaRocket,
  FaStar,
  FaCircleCheck,
  FaStore,
  FaBuilding,
  FaCloudArrowUp,
  FaHouse,
  FaBriefcase,
  FaCheck,
  FaClipboardCheck,
  FaHandshake,
  FaLaptopCode,
  FaPaintbrush,
  FaLocationDot,
  FaGlobe,
} from "react-icons/fa6";
import "@/app/style/newServ.css";

/* ── BtnArrow ─────────────────────────────────────────────── */
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

/* ── DATA ─────────────────────────────────────────────────── */

const heroStats = [
  { value: "95%+", label: "Client Success Rate" },
  { value: "100+", label: "Brands Grown" },
  { value: "50+", label: "Projects Delivered" },
  { value: "4.9★", label: "Average Rating" },
];

const services = [
  {
    color: "ns-bento-card-c1",
    icon: <FaCode />,
    title: "Web Design & Development",
    desc: "High-performing, conversion-optimized websites built fast, mobile-first, and SEO-ready from the ground up. We engineer digital experiences that turn visitors into paying customers.",
    features: ["Landing Pages & Business Sites", "WordPress & Custom CMS", "Conversion-Focused Layouts"],
    href: "/services/web-design",
  },
  {
    color: "ns-bento-card-c2",
    icon: <FaMagnifyingGlass />,
    title: "Local SEO Services",
    desc: "Rank higher in local and national search with proven strategies. We build sustainable organic visibility that compounds over time and outlasts paid channels.",
    features: ["Local & Technical SEO", "Keyword Strategy & Content", "On-Page & Off-Page Optimization"],
    href: "/services/local-seo-for-home-services",
  },
  {
    color: "ns-bento-card-c3",
    icon: <FaBullhorn />,
    title: "Google Ads Management",
    desc: "Data-driven PPC campaigns that attract high-intent buyers and turn ad spend into measurable revenue. Every dollar optimized for maximum ROAS with full transparency.",
    features: ["Strategic Keyword Targeting", "ROAS-Focused Campaigns", "A/B Tested Ad Copy"],
    href: "/services/google-ads",
  },
  {
    color: "ns-bento-card-c4",
    icon: <FaLocationDot />,
    title: "GBP Optimization",
    desc: "Your Google Business Profile is the single most powerful free asset for local visibility. We optimize, verify, and manage it so you appear at the top of local search.",
    features: ["Profile Setup & Optimization", "Map Pack Ranking Strategy", "Review Generation System"],
    href: "/services/gmb-reinstatement-help",
  },
  {
    color: "ns-bento-card-c5",
    icon: <FaPaintbrush />,
    title: "UI/UX Design",
    desc: "Intuitive, engaging interfaces crafted with user psychology and conversion principles. Every pixel has a purpose — guiding users toward clear, confident action.",
    features: ["User Research & Wireframing", "Prototype & Design Systems", "Accessibility-First Design"],
    href: "/services",
  },
  {
    color: "ns-bento-card-c6",
    icon: <FaGlobe />,
    title: "Branding & Identity",
    desc: "Strategic brand identities that build instant recognition and lasting trust. From logo design to full brand guidelines — the visual language of your business.",
    features: ["Logo & Visual Identity", "Brand Guidelines", "Messaging & Positioning"],
    href: "/services",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <FaMagnifyingGlass />,
    title: "Discovery & Audit",
    desc: "We conduct a deep review of your digital presence, market, competitors, and audience. Every strategy decision is grounded in real data, not assumptions or guesswork.",
  },
  {
    step: "02",
    icon: <FaClipboardCheck />,
    title: "Strategy Blueprint",
    desc: "You receive a custom growth roadmap with clear priorities, timelines, creative direction, and the specific metrics that define success for your business goals.",
  },
  {
    step: "03",
    icon: <FaRocket />,
    title: "Launch & Execute",
    desc: "Our team ships high-converting assets, campaigns, and digital systems with speed and precision. Every deliverable is built to perform from day one.",
  },
  {
    step: "04",
    icon: <FaChartLine />,
    title: "Optimize & Grow",
    desc: "Post-launch, we measure, A/B test, and refine every component. Continuous optimization compounds your results month over month — we stay invested in your growth.",
  },
];

const whyPoints = [
  {
    icon: <FaClipboardCheck />,
    title: "Strategy-First Approach",
    desc: "We begin with deep discovery — your goals, market, and audience — before writing a single line of code. Strategy is built in, not bolted on after launch.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Scalable Development",
    desc: "Every project is engineered for performance and long-term scale. The systems we build today are designed to grow seamlessly with your business tomorrow.",
  },
  {
    icon: <FaChartLine />,
    title: "Conversion-Focused Design",
    desc: "Our design decisions are grounded in user psychology and data — built to maximize engagement, trust signals, and lead generation at every scroll depth.",
  },
  {
    icon: <FaHandshake />,
    title: "Transparent Process",
    desc: "Clear milestones, open communication, and full project visibility at every stage. You will always know exactly where things stand — no surprises.",
  },
  {
    icon: <FaRocket />,
    title: "Long-Term Support",
    desc: "We don't disappear after launch. Ongoing optimization, updates, and strategic reviews keep your results compounding month over month.",
  },
];

const whyStats = [
  { val: "90%", lbl: "Client Retention Rate" },
  { val: "4.9★", lbl: "Average Client Rating" },
  { val: "100+", lbl: "Brands Grown" },
  { val: "24/7", lbl: "Dedicated Support" },
];

const industries = [
  { icon: <FaRocket />, title: "Startups", desc: "Launch fast with messaging, product pages, and acquisition systems that help early users understand your value immediately." },
  { icon: <FaBriefcase />, title: "Agencies", desc: "White-label design, development support, and scalable design systems for agencies that need reliable delivery capacity." },
  { icon: <FaStore />, title: "E-commerce", desc: "Conversion-focused storefronts, SEO foundations, and paid traffic funnels built to increase average order value and repeat sales." },
  { icon: <FaCloudArrowUp />, title: "SaaS", desc: "Product-led landing pages, onboarding flows, and lifecycle touchpoints that convert signups and support long-term retention." },
  { icon: <FaHouse />, title: "Real Estate", desc: "Local SEO, listing funnels, and lead capture systems that help agents and brokerages attract qualified buyers and sellers." },
  { icon: <FaBuilding />, title: "Local Businesses", desc: "Google Maps visibility, local SEO, review strategy, and high-converting service pages built to turn nearby searches into calls." },
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

/* ── PAGE ─────────────────────────────────────────────────── */

export default function NewServicContent() {
  const [highlightedUpTo, setHighlightedUpTo] = useState(0);
  const lineControls = useAnimation();
  const cancelledRef = useRef(false);
  const processSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = processSectionRef.current;
    if (!section) return;
    cancelledRef.current = false;

    const run = async () => {
      await new Promise<void>((r) => setTimeout(r, 400));
      for (let step = 1; step < processSteps.length; step++) {
        if (cancelledRef.current) return;
        const pct = (step / (processSteps.length - 1)) * 100;
        await lineControls.start({ width: `${pct}%`, transition: { duration: 1.4, ease: "easeInOut" } });
        if (cancelledRef.current) return;
        setHighlightedUpTo(step);
        if (step < processSteps.length - 1) {
          await new Promise<void>((r) => setTimeout(r, 2400));
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(section);

    return () => {
      cancelledRef.current = true;
      lineControls.stop();
      observer.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="ns-hero">
        <div className="ns-hero-inner">

          {/* ── TOP ROW: heading (left) | description + CTA (right) ── */}
          <div className="ns-hero-top">
            <div className="ns-hero-left">
              <h1 className="ns-hero-h1">
                Every Service Built to{" "}
                <span>Generate Revenue</span>
              </h1>
            </div>

            <div className="ns-hero-right-top">
              <p className="ns-hero-sub">
                We provide innovative, results-driven digital services —
                web design, SEO, Google Ads, and GBP optimization —
                engineered to grow your business and drive measurable results.
                Every solution is built around your goals, backed by strategy,
                and designed to compound value over time.
              </p>
              <Link href="/contact-us" className="buttons ns-btn-dark">
                Get Started <BtnArrow />
              </Link>
            </div>
          </div>

          {/* ── BOTTOM ROW: full-width image grid ─────────────── */}
          <div className="ns-hero-images-row">
            <div className="ns-hero-img-main">
              <Image
                src="/images/ChatGPT Image May 4, 2026, 03_12_21 PM.png"
                fill
                alt="Zonic Media digital agency team"
                sizes="(max-width: 991px) 50vw, 30vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            <div className="ns-hero-stat-card">
              <p className="ns-hero-stat-card-lbl">Brands Grown</p>
              <p className="ns-hero-stat-card-val">100+</p>
              <div className="ns-hero-avatar-row">
                {["Z", "O", "N", "I", "C"].map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </div>
            </div>

            <div className="ns-hero-img-right">
              <Image
                src="/images/new-home/ChatGPT Image May 4, 2026, 02_35_28 PM.png"
                fill
                alt="Zonic Media marketing results"
                sizes="(max-width: 991px) 50vw, 22vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────── */}
      <div className="ns-trust-bar">
        <div className="ns-trust-track">
          {[
            { icon: <FaCode />, label: "Web Development" },
            { icon: <FaMagnifyingGlass />, label: "Local SEO" },
            { icon: <FaBullhorn />, label: "Google Ads" },
            { icon: <FaLocationDot />, label: "GBP Optimization" },
            { icon: <FaPaintbrush />, label: "UI/UX Design" },
            { icon: <FaGlobe />, label: "Branding" },
            { icon: <FaChartLine />, label: "Analytics" },
            { icon: <FaStar />, label: "Review Strategy" },
          ].map((pill, i) => (
            <span key={i} className="ns-trust-pill">
              {pill.icon} {pill.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES BENTO ────────────────────────────────── */}
      <section className="ns-bento-section" id="ns-services">
        <div className="ns-container">
          <div className="ns-section-header">
            <p className="ns-label">Our Services</p>
            <h2 className="ns-section-h2">
              Six Disciplines. <span>One Growth System.</span>
            </h2>
            <p className="ns-section-sub">
              From the first click to the final conversion — every service is
              designed to connect, compound, and generate measurable results for
              your business.
            </p>
          </div>
          <div className="ns-bento-grid">
            {services.map((svc, i) => (
              <div key={i} className={`ns-bento-card ${svc.color}`}>
                <div className="ns-bento-icon">{svc.icon}</div>
                <h3 className="ns-bento-h3">{svc.title}</h3>
                <p className="ns-bento-p">{svc.desc}</p>
                <ul className="ns-bento-features">
                  {svc.features.map((f, j) => (
                    <li key={j}>
                      <FaCheck /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={svc.href} className="ns-bento-link">
                  Learn More <FaArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section ref={processSectionRef} className="ns-process-section">
        <div className="ns-container">
          <div className="ns-process-header">
            <p className="ns-label ns-label-light">Our Process</p>
            <h2 className="ns-process-h2">
              Four Steps Built for Measurable Growth
            </h2>
            <p className="ns-process-sub">
              Our process is structured to improve your digital presence first,
              then reinforce trust and conversion — keeping every deliverable
              tied to real business outcomes.
            </p>
          </div>

          <div className="ns-process-nav" role="tablist" aria-label="Process steps">
            <div className="ns-process-line" aria-hidden="true">
              <motion.div
                className="ns-process-line-fill"
                initial={{ width: "0%" }}
                animate={lineControls}
              />
            </div>
            {processSteps.map((step, index) => (
              <button
                key={step.step}
                type="button"
                role="tab"
                aria-selected={highlightedUpTo === index}
                className={`ns-process-btn${highlightedUpTo >= index ? " is-active" : ""}`}
                onClick={() => {
                  cancelledRef.current = true;
                  lineControls.stop();
                  const pct = (index / (processSteps.length - 1)) * 100;
                  lineControls.start({ width: `${pct}%`, transition: { duration: 0.45, ease: "easeOut" } });
                  setHighlightedUpTo(index);
                }}
              >
                <div className="ns-process-btn-circle" aria-hidden="true">
                  {step.icon}
                </div>
                <span className="ns-process-btn-label">{step.title}</span>
              </button>
            ))}
          </div>

          <div className="ns-process-detail" role="tabpanel">
            <div className="ns-process-detail-icon" aria-hidden="true">
              {processSteps[highlightedUpTo].icon}
            </div>
            <motion.div
              key={highlightedUpTo}
              className="ns-process-detail-body"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <span className="ns-process-detail-step">
                Step {processSteps[highlightedUpTo].step}
              </span>
              <h3>{processSteps[highlightedUpTo].title}</h3>
              <p>{processSteps[highlightedUpTo].desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESULTS BAR ───────────────────────────────────── */}
      <div className="ns-results-section">
        <div className="ns-results-grid">
          {[
            { val: "95%+", lbl: "Client Success Rate" },
            { val: "100+", lbl: "Brands Grown" },
            { val: "50+", lbl: "Projects Delivered" },
            { val: "48hr", lbl: "Average Response Time" },
          ].map((s, i) => (
            <div key={i} className="ns-result-item">
              <p className="ns-result-val">{s.val}</p>
              <p className="ns-result-lbl">{s.lbl}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY ZONIC ─────────────────────────────────────── */}
      <section className="ns-why-section">
        <div className="ns-container">
          <div className="ns-why-inner">
            {/* copy column */}
            <div>
              <p className="ns-label">Why Zonic Media</p>
              <h2 className="ns-section-h2">
                The Growth Partner Built for Results
              </h2>
              <p className="ns-section-sub">
                We combine deep strategy, premium design, and performance-first
                development to deliver results that matter to your bottom line —
                not just your portfolio page.
              </p>
              <div className="ns-why-list">
                {whyPoints.map((pt, i) => (
                  <div key={i} className="ns-why-item">
                    <div className="ns-why-check">{pt.icon}</div>
                    <div>
                      <p className="ns-why-item-title">{pt.title}</p>
                      <p className="ns-why-item-desc">{pt.desc}</p>
                    </div>
                  </div>
                ))}
                <Link href="/contact-us" className="ns-why-cta-tile">
                  <span>Ready for a cleaner growth plan?</span>
                  <strong>Book a Strategy Call</strong>
                  <em>Tell us your goals and we will map the fastest path forward.</em>
                </Link>
              </div>
            </div>

            {/* visual column */}
            <div className="ns-why-visual">
              <h3 className="ns-why-visual-h3">Built for Compounding Growth</h3>
              <p className="ns-why-visual-p">
                Every engagement starts with your goals and ends with results
                you can see. We keep optimizing after launch so your digital
                presence keeps improving.
              </p>
              <div className="ns-why-stat-cards">
                {whyStats.map((s, i) => (
                  <div key={i} className="ns-why-stat-card">
                    <p className="ns-why-stat-val">{s.val}</p>
                    <p className="ns-why-stat-lbl">{s.lbl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <section className="ns-industries-section">
        <div className="ns-container">
          <div className="ns-section-header">
            <p className="ns-label">Who We Serve</p>
            <h2 className="ns-section-h2">Industries We Work With</h2>
            <p className="ns-section-sub">
              From lean startups to established enterprises — we build tailored
              digital strategies for the unique challenges and growth goals of
              your specific industry.
            </p>
          </div>
          <div className="ns-industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className="ns-industry-card">
                <div className="ns-industry-icon">{ind.icon}</div>
                <h3 className="ns-industry-title">{ind.title}</h3>
                <p className="ns-industry-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="ns-finalcta-section">
        <div className="ns-container">
          <div className="ns-finalcta-inner">
            <div>
              <p className="ns-label ns-label-accent">Ready to Start?</p>
              <h2 className="ns-finalcta-h2">
                Build a Digital System That Turns{" "}
                <span>Attention Into Revenue</span>
              </h2>
              <p className="ns-finalcta-p">
                Whether you need a new website, a full-scale growth strategy, or
                a complete digital transformation — Zonic Media delivers results
                from day one. No fluff, no bloated timelines.
              </p>
            </div>
            <div className="ns-finalcta-actions">
              <Link href="/contact-us" className="buttons ns-btn-yellow">
                Start Your Project <BtnArrow />
              </Link>
              <Link href="/services" className="buttons ns-btn-ghost">
                View All Services <BtnArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm content={contactContent} />
      <Footer />
    </>
  );
}
