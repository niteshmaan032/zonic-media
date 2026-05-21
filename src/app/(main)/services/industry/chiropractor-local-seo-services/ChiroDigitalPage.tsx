"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import InlineAuditForm from "@/app/components/InlineAuditForm";
import ClutchWidget from "@/app/components/ClutchWidget";
import { SITE_CONTACT } from "@/shared/siteConfig";
import "@/app/style/carTow.css";
import "@/app/style/chiroDigital.css";
import "@/app/style/philadelphia/philaDigital.css";

import {
  FaMapMarkerAlt,
  FaGlobe,
  FaStar,
  FaUserInjured,
  FaChartLine,
  FaBullhorn,
  FaCalendarCheck,
  FaPhoneAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaUsers,
  FaShieldAlt,
  FaBolt,
  FaExclamationTriangle,
  FaHandshake,
  FaRegClock,
  FaLaptopCode,
  FaArrowRight,
  FaSyncAlt,
} from "react-icons/fa";
import {
  FaArrowTrendUp,
  FaRegCircleCheck,
  FaPhoneVolume,
  FaRankingStar,
  FaRoute,
} from "react-icons/fa6";
import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";


/* ─── IMAGE PATHS ─── */
const imgs = {
  hero:    "/images/chiro-digital/ChatGPT Image May 13, 2026, 06_27_49 PM.png",
  img1:    "/images/chiro-digital/ChatGPT Image May 7, 2026, 05_07_40 PM.png",
  img3:    "/images/chiro-digital/ChatGPT Image May 7, 2026, 05_11_53 PM.png",
};

/* ─── ARROW BUTTON ICON ─── */
const ArrowIcon = () => (
  <span className="buttons__icon-wrapper" aria-hidden="true">
    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="buttons__icon-svg" width="8">
      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
    </svg>
    <svg viewBox="0 0 14 15" fill="none" width="8" xmlns="http://www.w3.org/2000/svg" className="buttons__icon-svg buttons__icon-svg--copy">
      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
    </svg>
  </span>
);

/* ─── DATA ─── */
const marqueeTerms = [
  "Chiropractor near me",
  "Back pain treatment",
  "Chiropractic adjustment",
  "Spinal decompression",
  "Neck pain chiropractor",
  "Sports injury chiropractor",
  "Local chiropractic clinic",
  "Walk-in chiropractor",
  "Best chiropractor in my city",
  "Chiropractic appointment online",
];

const problemCards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Not Showing Up on Google Maps",
    text: "When a potential patient searches for a chiropractor nearby, you are not in the top results. Competitors with stronger local SEO signals capture those calls and appointments first.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Visitors Leaving Without Booking",
    text: "Your website gets traffic but very few visitors take the next step. Poor structure, slow loading, unclear messaging, or buried contact options drive patients away before they book.",
  },
  {
    icon: <FaUsers />,
    title: "Too Much Dependency on Referrals",
    text: "Word of mouth is valuable, but it creates an unpredictable patient pipeline. A clinic without consistent digital visibility cannot control its growth month after month.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Irregular Patient Flow Each Month",
    text: "Some months feel busy and others feel slow with no clear pattern. Without a structured patient acquisition system, your schedule depends on chance rather than strategy.",
  },
  {
    icon: <FaChartLine />,
    title: "Competitors Ranking Above You",
    text: "Nearby clinics with more reviews, better-optimized profiles, and stronger websites consistently appear above yours in local search results, capturing patients you should be reaching.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Weak Review Strategy and Low Trust",
    text: "Patients trust clinics with strong, recent reviews. Without a proactive review generation strategy, your credibility looks weaker compared to clinics actively building trust online.",
  },
];

const journeySteps = [
  {
    step: "01",
    icon: <FaSearch />,
    title: "Patient Searches With Intent",
    text: "Most patients searching for a chiropractor are experiencing real pain or discomfort. Their search is purposeful and urgent. They want help quickly, not a long research journey.",
  },
  {
    step: "02",
    icon: <FaStar />,
    title: "Compares a Few Clinics Quickly",
    text: "A patient typically looks at two or three top results, scans reviews, checks location, and evaluates the clinic's website. The comparison happens in seconds, not minutes.",
  },
  {
    step: "03",
    icon: <FaCalendarCheck />,
    title: "Chooses the Most Credible Option",
    text: "They book with the clinic that looks trustworthy, nearby, easy to contact, and simple to schedule with. Your entire online presence is judged in this single moment.",
  },
];

const journeyChecklist = [
  "Show up in local search results",
  "Build trust instantly through reviews",
  "Explain services clearly and simply",
  "Display credibility signals prominently",
  "Make appointment booking effortless",
  "Load fast on every mobile device",
];

const systemCards = [
  {
    tag: "Foundation",
    icon: <FaMapMarkerAlt />,
    title: "Local SEO and Google Maps Ranking",
    text: "We optimize your Google Business Profile, refine local keyword targeting, strengthen service area signals, and improve your positioning in Google Maps so nearby patients can find and trust your clinic.",
  },
  {
    tag: "Conversion",
    icon: <FaLaptopCode />,
    title: "High-Converting Chiropractic Website",
    text: "We build or improve mobile-first websites with clear service pages, direct appointment calls to action, trust elements like credentials and reviews, and fast load performance that patients expect.",
  },
  {
    tag: "Optimization",
    icon: <FaArrowTrendUp />,
    title: "Patient Conversion Optimization",
    text: "We improve how your website and contact flow work — from CTA placement and booking form design to call tracking and user experience refinements — turning more visitors into booked appointments.",
  },
  {
    tag: "Reputation",
    icon: <FaStar />,
    title: "Reputation and Review Growth",
    text: "We help your clinic build a consistent stream of genuine patient reviews, improve your overall rating, and use credibility signals that make new patients feel confident before they even call.",
  },
  {
    tag: "Visibility",
    icon: <FaSearch />,
    title: "Chiropractic SEO Content Strategy",
    text: "We create targeted service pages, condition-specific content, and local landing pages that help Google understand what you treat, who you serve, and why your clinic is the right choice.",
  },
  {
    tag: "Growth",
    icon: <FaChartLine />,
    title: "Ongoing Growth and Optimization",
    text: "We track rankings, calls, form submissions, and lead quality every month. We use this data to continuously improve campaigns and make sure your growth does not plateau over time.",
  },
];

const beforePoints = [
  "Low Google Maps visibility in local searches",
  "Few website visitors turning into booked appointments",
  "Missed calls and no clear lead tracking system",
  "Inconsistent patient flow month to month",
  "Competitors dominating high-intent search results",
  "No clear digital growth strategy in place",
];

const afterPoints = [
  "Stronger local search and Google Maps presence",
  "More calls and appointment requests each month",
  "Better website conversion path and lead tracking",
  "Improved review strategy and online credibility",
  "Consistent patient acquisition system in place",
  "Clear performance tracking with regular insights",
];

const caseStudyStats = [
  {
    icon: <FaPhoneVolume />,
    label: "Google Business Profile calls",
    before: "28/mo",
    after: "67/mo",
    detail: "More direct appointment calls from nearby patients searching with high-intent chiropractic terms.",
  },
  {
    icon: <FaRankingStar />,
    label: "Top-3 map rankings",
    before: "3 keywords",
    after: "14 keywords",
    detail: "Broader local pack coverage across the core phrases that drive chiropractic patient demand.",
  },
  {
    icon: <FaRoute />,
    label: "Organic service-area pages",
    before: "2 indexed",
    after: "11 indexed",
    detail: "Better local relevance for surrounding neighborhoods, towns, and clinic coverage zones.",
  },
  {
    icon: <FaCalendarCheck />,
    label: "New patient inquiries",
    before: "Unstable",
    after: "Consistent monthly flow",
    detail: "A steadier stream of inbound appointment requests from patients in the clinic's service area.",
  },
];

const benefitCards = [
  {
    icon: <FaUserInjured />,
    title: "More Patient Bookings",
    text: "Attract patients who are actively searching for chiropractic help in your area, not general browsers unlikely to convert.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Better Local Search Visibility",
    text: "Appear in Google Maps and local search results when patients in your service area are looking for a chiropractor nearby.",
  },
  {
    icon: <FaStar />,
    title: "Stronger Reputation and Trust",
    text: "Build credibility through consistent reviews, clear credentials, and trust signals that make new patients feel confident choosing your clinic.",
  },
  {
    icon: <FaGlobe />,
    title: "Better Website Conversion",
    text: "Turn more of your existing website traffic into actual appointment requests by improving messaging, structure, and patient experience.",
  },
  {
    icon: <FaRegClock />,
    title: "Lower Long-Term Cost Per Patient",
    text: "Unlike paid ads that stop when you stop spending, SEO builds lasting visibility that reduces cost per patient over time.",
  },
  {
    icon: <FaBolt />,
    title: "Stronger Brand in Your Service Area",
    text: "Establish your clinic as the recognized and trusted chiropractic option in your local market through consistent visibility.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Better Call and Form Tracking",
    text: "Know exactly where your leads are coming from so you can make smarter decisions about where to invest your marketing efforts.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Predictable Monthly Patient Growth",
    text: "Replace unpredictable referral-only growth with a structured system that generates new patient inquiries consistently.",
  },
];

const seoPoints = [
  "Long-term search visibility that compounds over time",
  "Builds local authority and patient trust",
  "Captures organic high-intent searches at no click cost",
  "Reduces dependency on paid advertising spend",
  "Every improvement adds lasting value to your presence",
];

const adsPoints = [
  "Faster short-term traffic and patient visibility",
  "Useful for specific promotions or new service launches",
  "Stops generating leads when the budget stops",
  "Can become expensive in competitive chiropractic markets",
  "Works best paired with strong landing pages and tracking",
];

const whyCards = [
  {
    icon: <FaUserInjured />,
    title: "We Understand Patient Behavior",
    text: "We know how chiropractic patients search, compare, and make decisions online. Our strategies are built around that real behavior, not generic assumptions.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "We Focus on Bookings, Not Traffic",
    text: "We do not celebrate vanity metrics. Our goal is more appointment requests, more phone calls, and more patients walking through your door every month.",
  },
  {
    icon: <FaLaptopCode />,
    title: "We Build Conversion-Focused Websites",
    text: "We design and optimize websites that explain services clearly, build patient trust quickly, and make it simple for someone to book an appointment.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "We Improve Google Maps Visibility",
    text: "Local map rankings are where chiropractic patients make their first choice. We focus heavily on the signals that move your clinic up in map results.",
  },
  {
    icon: <FaShieldAlt />,
    title: "We Understand Healthcare Trust Factors",
    text: "Patients are cautious about choosing a healthcare provider. We build credibility signals into every part of your online presence to reduce friction.",
  },
  {
    icon: <FaChartLine />,
    title: "We Use Transparent Performance Tracking",
    text: "You will always know what is working. We provide regular reporting on rankings, calls, leads, and overall campaign performance.",
  },
  {
    icon: <FaBullhorn />,
    title: "We Create Market-Specific Strategies",
    text: "Every market is different. We build your strategy based on your actual competition, local search volume, and current online presence.",
  },
  {
    icon: <FaHandshake />,
    title: "We Limit Clinics Per Area",
    text: "We work with a limited number of chiropractic clinics per market to avoid conflicts of interest and give each client a focused, undivided strategy.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <FaSearch />,
    title: "Audit and Market Analysis",
    text: "We review your current online presence, competitor landscape, local search performance, and website health to identify exactly where you are losing patients and what needs to change first.",
  },
  {
    step: "02",
    icon: <FaMapMarkerAlt />,
    title: "Google Business Profile Optimization",
    text: "We optimize every element of your Google Business Profile — categories, service descriptions, photos, review responses, and posting strategy — to improve map rankings and patient trust signals.",
  },
  {
    step: "03",
    icon: <FaLaptopCode />,
    title: "Website and Conversion Optimization",
    text: "We improve your website's structure, mobile experience, page speed, service content, and appointment flow to make sure every visitor has a clear, frictionless path to booking.",
  },
  {
    step: "04",
    icon: <FaChartLine />,
    title: "Reputation, Tracking and Growth",
    text: "We generate patient reviews systematically, set up call and form tracking, build local authority signals, and deliver monthly reporting so the campaign keeps improving over time.",
  },
];

const faqs = [
  {
    question: "What does a chiropractor digital marketing agency do?",
    answer:
      "A chiropractor digital marketing agency helps chiropractic clinics attract more patients through services like local SEO, Google Maps optimization, website improvement, reputation management, and lead generation. The goal is to build a consistent flow of new patient inquiries rather than relying entirely on referrals.",
  },
  {
    question: "How can digital marketing help my chiropractic clinic?",
    answer:
      "Digital marketing helps your clinic appear when patients are actively searching for chiropractic care in your area. It improves your Google Maps visibility, builds patient trust through reviews and credibility signals, and converts more website visitors into actual appointment bookings.",
  },
  {
    question: "How long does chiropractor SEO take to work?",
    answer:
      "Most clinics start to see early improvements within 2 to 3 months, particularly from Google Business Profile optimization. Stronger ranking gains and more consistent patient growth typically develop within 4 to 6 months of sustained effort. Results depend on your market, competition level, and current online presence.",
  },
  {
    question: "Do I need a website for chiropractic marketing?",
    answer:
      "Yes. A website is essential for chiropractic digital marketing because it gives Google a signal of your clinic's legitimacy, helps patients learn about your services before they call, and acts as the destination for all your digital visibility. Without a well-structured website, your marketing results will be limited.",
  },
  {
    question: "Is SEO better than paid ads for chiropractors?",
    answer:
      "SEO builds long-term visibility that compounds over time and reduces cost per patient, while paid ads provide faster short-term traffic that stops when the budget stops. For most chiropractic clinics, a strong SEO foundation is the most sustainable investment, though ads can support specific goals when used strategically.",
  },
  {
    question: "Can you help my clinic rank on Google Maps?",
    answer:
      "Yes. Google Maps ranking is one of our primary focus areas for chiropractic clients. We optimize your Google Business Profile, improve local relevance signals, strengthen your review strategy, and align your website with your map listing to support better map pack visibility.",
  },
  {
    question: "What makes Zonic Media different from other chiropractic marketing agencies?",
    answer:
      "We focus on patient bookings rather than traffic or impressions. We build strategies specific to your market and competition, limit the number of clinics we work with per area, and provide transparent reporting so you always understand what is working and why.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can contact Zonic Media to request a free chiropractic marketing audit. We will review your current online presence, identify where you are losing potential patients, and walk you through a strategy tailored to your clinic's goals and market.",
  },
];

const philaContactFormHead = {
  leadFormTitle: "Ready to Grow Your Business?",
  leadCallText: (
    <>
      Let&apos;s build a digital marketing strategy that drives more leads,
      stronger visibility, and long-term business growth.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

/* ─── COMPONENT ─── */
export default function ChiroDigitalPage() {
  const [highlightedUpTo, setHighlightedUpTo] = useState(0);
  const lineControls = useAnimation();
  const cancelledRef = useRef(false);
  const processSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.classList.add("car-tow-navbar-active");
    return () => {
      document.body.classList.remove("car-tow-navbar-active");
    };
  }, []);

  useEffect(() => {
    const section = processSectionRef.current;
    if (!section) return;
    cancelledRef.current = false;

    const run = async () => {
      await new Promise<void>((r) => setTimeout(r, 400));
      for (let step = 1; step < processSteps.length; step++) {
        if (cancelledRef.current) return;
        const pct = (step / (processSteps.length - 1)) * 100;
        await lineControls.start({ width: `${pct}%`, transition: { duration: 1.5, ease: "easeInOut" } });
        if (cancelledRef.current) return;
        setHighlightedUpTo(step);
        if (step < processSteps.length - 1) {
          await new Promise<void>((r) => setTimeout(r, 2200));
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { observer.disconnect(); run(); } },
      { threshold: 0.25 }
    );
    observer.observe(section);
    return () => { cancelledRef.current = true; lineControls.stop(); observer.disconnect(); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="chiro-page">

      {/* ─── HERO ─── */}
      <section className="car-tow-hero" style={{ backgroundImage: `url("${imgs.hero}")` }}>
        <div className="car-tow-hero-layer">
          <div className="car-tow-container">
            <Row>
              <Col lg={9} className="car-tow-hero-copy">
                <p className="car-tow-eyebrow">Chiropractor Local SEO</p>
                <h1>
                  Chiropractor Local SEO Services That Help Your Clinic Rank
                  Higher and Book More Patients
                </h1>
                <p className="car-tow-hero-sub-head">
                  Local SEO Strategy · Google Maps Ranking · Service Area
                  Visibility · Patient Lead Growth
                </p>
                <p className="car-tow-hero-body">
                  Zonic Media helps chiropractic clinics build a consistent flow
                  of new patient bookings through local SEO, Google Maps
                  optimization, conversion-focused websites, and reputation
                  growth. If your clinic is not generating predictable patient
                  inquiries every month, there is a visibility and conversion
                  gap worth fixing.
                </p>
                <div className="car-tow-hero-actions">
                  <HashScrollLink href="#chiro-contact-form" className="buttons" offset={120}>
                    Get Your Free Chiropractic Marketing Audit
                    <ArrowIcon />
                  </HashScrollLink>
                  <a href="#chiro-problems" className="buttons car-tow-button-secondary">
                    See How Many Patients You Are Missing
                    <ArrowIcon />
                  </a>
                </div>
                <div className="car-tow-trust-grid">
                  <div className="car-tow-trust-card">
                    <strong>Local SEO</strong>
                    <span>Google Maps and organic search for chiropractic clinics</span>
                  </div>
                  <div className="car-tow-trust-card">
                    <strong>Patient Leads</strong>
                    <span>More appointment requests from high-intent searches</span>
                  </div>
                  <div className="car-tow-trust-card">
                    <strong>Reputation</strong>
                    <span>Review growth and online trust building</span>
                  </div>
                  <div className="car-tow-trust-card">
                    <strong>Conversion</strong>
                    <span>Website improvements that turn visitors into bookings</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="car-tow-marquee" aria-label="Chiropractic search terms">
          <div className="car-tow-marquee-track">
            {[...marqueeTerms, ...marqueeTerms].map((term, i) => (
              <span key={`${term}-${i}`}>
                <FiArrowUpRight />
                {term}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="car-tow-section" id="chiro-problems">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">The Core Challenge</p>
              <h2>Why Most Chiropractic Clinics Struggle to Get Consistent New Patients</h2>
              <p className="car-tow-section-descrp">
                Most chiropractors do not have a demand problem. Patients
                searching for chiropractic care are out there every day. The
                challenge is a visibility and conversion problem — not being
                found when it matters, and not being compelling enough to book
                when found.
              </p>
            </div>
          </div>
          <Row className="g-4">
            {problemCards.map((card) => (
              <Col lg={4} md={6} key={card.title} className="d-flex">
                <article className="car-tow-info-card">
                  <div className="car-tow-icon-box">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ─── PATIENT JOURNEY ─── */}
      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-center">
            <Col lg={6}>
              <div className="car-tow-split-copy">
                <p className="car-tow-eyebrow">Understanding Patient Behavior</p>
                <h2>How Patients Actually Choose a Chiropractor Online</h2>
                <h3 className="car-tow-sub-heading">
                  Patients looking for chiropractic care often have pain,
                  discomfort, or urgency. They compare a short list quickly and
                  book the clinic that feels most credible and accessible.
                </h3>
                <p>
                  Most chiropractic patients are not leisurely browsing options.
                  They are searching because something hurts, and they need help
                  soon. They scan two or three top results, check reviews,
                  evaluate the website, and make a decision in under a minute.
                  The clinic that looks credible, is easy to reach, and makes
                  booking simple usually wins that appointment.
                </p>
                <ul className="car-tow-check-list">
                  {journeyChecklist.map((item, i) => (
                    <li key={i}><FaRegCircleCheck />{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div className="car-tow-image-frame">
                <img src={imgs.img1} alt="Chiropractic patient consultation and trust building" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ─── MARKETING SYSTEM ─── */}
      <section className="car-tow-section car-tow-section-dark">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
              <p className="car-tow-eyebrow">Our System</p>
              <h2>Our Chiropractic Digital Marketing System</h2>
              <p className="car-tow-section-descrp">
                Zonic Media does not offer isolated marketing services. We build
                a complete patient acquisition system for chiropractic clinics
                connecting local SEO, website performance, reputation growth,
                and ongoing optimization into one strategy.
              </p>
            </div>
          </div>
          <Row className="g-4 align-items-stretch">
            {systemCards.map((card) => (
              <Col lg={4} md={6} key={card.title} className="d-flex">
                <article className="car-tow-service-card">
                  <div className="car-tow-service-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ─── SPLIT IMAGE SECTION ─── */}
      <section className="car-tow-section">
        <div className="car-tow-container">
          <Row className="align-items-center gy-4">
            <Col lg={12}>
              <div className="car-tow-feature-copy car-tow-feature-copy-split">
                <h2>A focused system built for consistent chiropractic patient growth.</h2>
                <h3 className="car-tow-sub-heading">
                  Local SEO for chiropractic clinics has to support trust,
                  urgency, and an easy path to booking.
                </h3>
                <p>
                  We align Google Business Profile optimization, location pages,
                  review signals, and conversion-focused website content so your
                  clinic can compete for high-intent patient searches with more
                  consistency. The goal is a stronger local presence that helps
                  nearby patients trust your clinic before they even call.
                </p>
                <ul className="car-tow-check-list">
                  <li><FaRegCircleCheck />Better rankings for chiropractic and pain-relief keywords</li>
                  <li><FaRegCircleCheck />Stronger appointment conversion from website and map traffic</li>
                  <li><FaRegCircleCheck />Broader service-area visibility in Google Maps results</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="car-tow-section">
        <div className="car-tow-container">
          <InlineAuditForm
            heading="Get Your Free Chiropractic Practice SEO Audit"
            description="Share your practice details and we will review your local search rankings, Google Maps visibility, and new patient conversion gaps at no cost."
          />
        </div>
      </section>

      {/* ─── CASE STUDY ─── */}
      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-center">
            <Col lg={7}>
              <div className="car-tow-case-copy">
                <p className="car-tow-eyebrow">Case Study Example</p>
                <h2>Real results from a focused chiropractor digital marketing campaign.</h2>
                <h3 className="car-tow-sub-heading">
                  The right local SEO setup improves both patient visibility and
                  appointment quality over time.
                </h3>
                <p>
                  Consider a chiropractic clinic in a mid-size metro area with
                  an active Google Business Profile but a weak website and no
                  structured local SEO strategy. The clinic had a small number
                  of reviews, inconsistent NAP data across directories, and
                  service pages that did not target the conditions patients were
                  actually searching for. New patients were coming mostly from
                  referrals with no reliable digital channel in place.
                </p>
                <p>
                  After optimizing the Google Business Profile, building
                  condition-specific landing pages, cleaning up local citations,
                  and implementing a review generation process, the clinic began
                  appearing more often in map results for high-intent searches.
                  The result was not just more traffic — it was more calls, more
                  appointment form submissions, and a more predictable flow of
                  new patients each month from the areas that mattered most.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="car-tow-case-visual">
                <img src={imgs.img3} alt="Chiropractic clinic digital marketing results" />
              </div>
            </Col>
          </Row>

          {/* BEFORE / AFTER — keep red/green */}
          <div className="car-tow-before-after">
            <div className="car-tow-compare-card chiro-ba-before">
              <span className="chiro-ba-label-before">Before Zonic Media</span>
              <h3>Common problems without a strategy</h3>
              <ul className="chiro-ba-list-inner">
                {beforePoints.map((p, i) => (
                  <li key={i}><FaTimesCircle className="chiro-icon-red" />{p}</li>
                ))}
              </ul>
            </div>
            <div className="car-tow-compare-card car-tow-compare-card-accent chiro-ba-after">
              <span className="chiro-ba-label-after">After Choosing Zonic Media</span>
              <h3>What a focused system produces</h3>
              <ul className="chiro-ba-list-inner">
                {afterPoints.map((p, i) => (
                  <li key={i}><FaCheckCircle className="chiro-icon-green" />{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* METRICS */}
          <div className="car-tow-metric-grid">
            {caseStudyStats.map((item) => (
              <article className="car-tow-metric-card" key={item.label}>
                <div className="car-tow-metric-label-row">
                  <div className="car-tow-service-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <h3>{item.label}</h3>
                    <p className="car-tow-metric-detail">{item.detail}</p>
                  </div>
                </div>
                <div className="car-tow-metric-numbers">
                  <div className="car-tow-metric-num car-tow-metric-num-before">
                    <span className="car-tow-metric-num-label">Before</span>
                    <strong>{item.before}</strong>
                  </div>
                  <div className="car-tow-metric-num-arrow" aria-hidden="true">
                    <FaArrowRight />
                  </div>
                  <div className="car-tow-metric-num car-tow-metric-num-after">
                    <span className="car-tow-metric-num-label">After</span>
                    <strong>{item.after}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="car-tow-section">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-center">
            <Col lg={12}>
              <div className="car-tow-center-head" style={{ justifyContent: "flex-start", marginBottom: "32px" }}>
                <div className="car-tow-center-head-content" style={{ alignItems: "flex-start", textAlign: "left" }}>
                  <p className="car-tow-eyebrow">Why It Matters</p>
                  <h2>Benefits of Digital Marketing for Chiropractors</h2>
                  <p className="car-tow-section-descrp">
                    When digital marketing is done right for a chiropractic
                    clinic, the impact goes beyond more website traffic. It
                    creates a sustainable patient acquisition engine that runs
                    alongside the clinical work you already do.
                  </p>
                </div>
              </div>
              <div className="car-tow-results-grid">
                {benefitCards.slice(0, 6).map((card) => (
                  <article className="car-tow-result-item" key={card.title}>
                    <div className="car-tow-result-icon" aria-hidden="true">{card.icon}</div>
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ─── SEO VS ADS ─── */}
      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Strategy Comparison</p>
              <h2>SEO vs Paid Ads for Chiropractors</h2>
              <p className="car-tow-section-descrp">
                Both approaches can generate patient leads, but they work
                differently and serve different timeframes. Understanding the
                distinction helps you make smarter decisions about where to
                invest your marketing budget.
              </p>
            </div>
          </div>
          <div className="car-tow-table-wrap">
            <table className="car-tow-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Chiropractic SEO</th>
                  <th>Paid Ads</th>
                </tr>
              </thead>
              <tbody>
                {seoPoints.map((point, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600, color: "var(--secondary)" }}>
                      {["Visibility", "Authority", "Cost model", "Intent quality", "Long-term value"][i]}
                    </td>
                    <td>{point}</td>
                    <td>{adsPoints[i]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="chiro-compare-conclusion" style={{ marginTop: "24px" }}>
            The most effective strategy for most chiropractic clinics is a{" "}
            <strong>strong SEO foundation</strong> supported by smart paid
            campaigns when specific short-term goals require faster visibility.
            One without the other is often less efficient than both working
            together.
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE ZONIC MEDIA ─── */}
      <section className="car-tow-section car-tow-section-dark">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
              <p className="car-tow-eyebrow">Why Work With Us</p>
              <h2>Why Chiropractors Choose Zonic Media</h2>
              <p className="car-tow-section-descrp">
                There are many digital marketing agencies. Fewer of them
                understand the nuance of healthcare marketing, patient trust
                factors, and the specific behavior of chiropractic patients
                searching online.
              </p>
            </div>
          </div>
          <Row className="g-4">
            {whyCards.slice(0, 6).map((card) => (
              <Col lg={4} md={6} key={card.title}>
                <article className="car-tow-service-card">
                  <div className="car-tow-service-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Col>
            ))}
          </Row>
          <div className="car-tow-final-cta" style={{ marginTop: "40px" }}>
            <p className="car-tow-eyebrow">Ready to Start?</p>
            <h2>Book a Free Chiropractic Marketing Strategy Call</h2>
            <p>
              Let&apos;s walk through exactly what your clinic needs to attract
              more patients consistently. No pressure, no generic pitch — just a
              focused conversation about your market and growth opportunities.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions">
              <HashScrollLink href="#chiro-contact-form" className="buttons" offset={120}>
                Book Your Free Strategy Call
                <ArrowIcon />
              </HashScrollLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS (interactive, 4 steps, same as car-tow) ─── */}
      <section
        ref={processSectionRef}
        className="car-tow-section car-tow-section-dark car-tow-process-section"
      >
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
              <p className="car-tow-eyebrow">How We Work</p>
              <h2>Our Proven Patient Acquisition Process</h2>
              <p className="car-tow-section-descrp">
                Every engagement follows a structured process designed to build
                visibility, improve conversion, and generate consistent patient
                growth. Each step feeds into the next to create a compounding
                effect over time.
              </p>
            </div>
          </div>

          <div className="car-tow-process-nav" role="tablist" aria-label="Process steps">
            <div className="car-tow-process-line" aria-hidden="true">
              <motion.div
                className="car-tow-process-line-fill"
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
                className={`car-tow-process-btn${highlightedUpTo >= index ? " is-active" : ""}`}
                onClick={() => {
                  cancelledRef.current = true;
                  lineControls.stop();
                  const pct = (index / (processSteps.length - 1)) * 100;
                  lineControls.start({ width: `${pct}%`, transition: { duration: 0.5, ease: "easeOut" } });
                  setHighlightedUpTo(index);
                }}
              >
                <div className="car-tow-process-btn-circle" aria-hidden="true">
                  <span className="car-tow-process-btn-num">{step.step}</span>
                  {step.icon}
                </div>
                <span className="car-tow-process-btn-label">{step.title}</span>
              </button>
            ))}
          </div>

          <div className="car-tow-process-detail" role="tabpanel">
            <div className="car-tow-process-detail-icon" aria-hidden="true">
              {processSteps[highlightedUpTo].icon}
            </div>
            <motion.div
              key={highlightedUpTo}
              className="car-tow-process-detail-body"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span className="car-tow-process-detail-step">
                Step {processSteps[highlightedUpTo].step}
              </span>
              <h3>{processSteps[highlightedUpTo].title}</h3>
              <p>{processSteps[highlightedUpTo].text}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="phila-sec-8 chiro-phila-section">
        <h2 className="phila-sec-8-heading">What Our Clients Say</h2>

        <div className="phila-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      <div className="phila-sec-9 chiro-phila-section">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <h2 className="phila-sec-heading">
              Frequently Asked Questions About Digital Marketing in Philadelphia
            </h2>
          </div>
        </div>

        <div className="phila-sec-9-faq-wrapper">
          <GmbFaqs items={faqs} columns={2} />
        </div>

        <Script
          id="chiro-digital-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      </div>

      {/* ─── FINAL CTA ─── */}
      <section className="car-tow-section car-tow-final-section">
        <div className="car-tow-container">
          <div className="car-tow-final-cta">
            <p className="car-tow-eyebrow">Start Growing Today</p>
            <h2>More chiropractic patients from Google and Maps.</h2>
            <p>
              Zonic Media builds local SEO systems for chiropractic clinics that
              need more direct appointment bookings, stronger emergency search
              coverage, and better local growth. If your current visibility is
              not converting into enough patients, the gap is measurable and
              fixable.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions">
              <HashScrollLink href="#chiro-contact-form" className="buttons" offset={120}>
                Request My Free Chiropractic Marketing Audit
                <ArrowIcon />
              </HashScrollLink>
              <a href={SITE_CONTACT.phoneHref} className="buttons car-tow-button-secondary">
                Book a Strategy Call
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT (car-tow / phila style) ─── */}
      <div className="phila-sec-10 chiro-phila-section">
        <div className="phila-sec-10-inner">
          <div className="phila-sec-10-content">
            <h2 className="phila-sec-10-heading">
              Looking to Grow Your Business with a Digital Marketing Agency in
              Philadelphia?
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media, a results-driven digital
              marketing agency serving Philadelphia businesses. Let&apos;s build a
              custom strategy focused on more leads, stronger online
              visibility, and real business growth through SEO, Google Ads, web
              design, and full-service digital marketing.
            </p>

            <div className="phila-sec-10-info-grid">
              <div className="phila-sec-10-info-card">
                <div className="phila-sec-10-info-head">
                  <div className="phila-sec-10-info-icon">
                    <MdOutlineLocationOn />
                  </div>
                  <h3>Our Office</h3>
                </div>
                <a href={SITE_CONTACT.mapHref} target="_blank" rel="noreferrer">
                  8 The Green, STE B Dover, Kent, DE 19901
                  <br />United States
                </a>
              </div>
              <div className="phila-sec-10-info-card">
                <div className="phila-sec-10-info-head">
                  <div className="phila-sec-10-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <div className="phila-sec-10-image-wrap">
              <Image
                src="/images/contact-section.jpg"
                fill
                alt="Philadelphia marketing consultation and contact"
                className="phila-sec-10-image"
              />
            </div>
          </div>

          <div className="phila-sec-10-contact-form" id="chiro-contact-form">
            <LeadContactForm
              leadFormTitle={philaContactFormHead.leadFormTitle}
              leadCallText={philaContactFormHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
