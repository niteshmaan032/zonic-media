"use client";

import { useEffect, useRef, useState } from "react";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import "@/style/carTow.css";
import "@/app/style/philadelphia/philaDigital.css";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { motion, useAnimation } from "framer-motion";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaBolt,
  FaCarBurst,
  FaChartLine,
  FaClock,
  FaComments,
  FaMapLocationDot,
  FaPhoneVolume,
  FaRankingStar,
  FaRegCircleCheck,
  FaRoute,
  FaStar,
  FaTrafficLight,
  FaTriangleExclamation,
  FaTruckFast,
} from "react-icons/fa6";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";
import { LuBadgeCheck, LuMapPinned, LuTimerReset } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

const imagePaths = [
  "/images/cartow-seo/ChatGPT%20Image%20May%202,%202026,%2012_01_28%20PM.png",
  "/images/cartow-seo/ChatGPT%20Image%20May%202,%202026,%2012_03_25%20PM.png",
  "/images/cartow-seo/ChatGPT%20Image%20May%202,%202026,%2012_06_08%20PM.png",
  "/images/cartow-seo/ChatGPT%20Image%20May%202,%202026,%2012_08_15%20PM.png",
  "/images/cartow-seo/ChatGPT%20Image%20May%202,%202026,%2012_39_23%20PM.png",
  "/images/cartow-seo/ChatGPT%20Image%20May%202,%202026,%2003_54_59%20PM.png",
];

const trustStats = [
  { value: "24/7", label: "search demand window for emergency towing" },
  { value: "3 sec", label: "to lose a caller when search visibility is weak" },
  { value: "Top 3", label: "map positions that capture most towing calls" },
  { value: "Mobile-first", label: "buyer behavior for roadside assistance" },
];

const marqueeTerms = [
  "Tow truck near me",
  "Emergency towing service",
  "24 hour towing",
  "Roadside assistance",
  "Flatbed towing",
  "Accident towing",
  "Jump start service",
  "Tire change service",
  "Winch out service",
  "Local towing company",
];

const problemCards = [
  {
    icon: <FiSearch />,
    title: "Invisible for urgent searches",
    text: 'When a driver types "tow truck near me," Google shows a tiny group of trusted local results. If your business is not in that set, the call goes elsewhere before your site is even seen.',
  },
  {
    icon: <LuMapPinned />,
    title: "Weak map visibility",
    text: "Many towing companies have incomplete or inconsistent Google Business Profile signals, so they miss nearby searchers who are ready to call from the map pack immediately.",
  },
  {
    icon: <FaPhoneVolume />,
    title: "Missed emergency calls",
    text: "Towing decisions happen fast. Slow mobile pages, weak call prompts, and unclear service areas reduce phone conversions during the moments that matter most.",
  },
  {
    icon: <FaTriangleExclamation />,
    title: "Dependence on lead platforms",
    text: "Third-party lead sources often send shared prospects, thin margins, and price shoppers. That keeps your business renting visibility instead of owning demand in your city.",
  },
  {
    icon: <LuTimerReset />,
    title: "Inconsistent call volume",
    text: "Without strong local SEO, towing demand can feel unpredictable. Rankings shift, branded search stays weak, and dispatch teams never get a reliable flow of qualified jobs.",
  },
  {
    icon: <FaRoute />,
    title: "Weak service-area coverage",
    text: "If your location pages and city signals are thin, Google has less confidence in where your towing company should rank, which limits visibility across nearby markets.",
  },
];

const searchJourney = [
  {
    step: "01",
    title: "Search under pressure",
    text: "Drivers usually search from a phone after a breakdown, flat tire, accident, lockout, or dead battery. The query is direct and high intent, not informational.",
  },
  {
    step: "02",
    title: "Compare trust signals fast",
    text: "They scan the map, service labels, reviews, distance, hours, and whether you clearly handle the exact towing problem they have right now.",
  },
  {
    step: "03",
    title: "Call the first credible option",
    text: "The winner is typically the result that looks nearby, available, relevant, and easy to call. That is why local SEO for towing is tightly connected to revenue.",
  },
];

const keywordCards = [
  {
    keyword: "tow truck near me",
    intent: "Immediate local call intent",
    copy: "The most competitive emergency phrase and often the fastest path to direct phone leads.",
  },
  {
    keyword: "emergency towing service",
    intent: "Breakdown and urgent dispatch intent",
    copy: "Essential for late-night, highway, and after-hours searches when urgency is highest.",
  },
  {
    keyword: "roadside assistance",
    intent: "Broader rescue service demand",
    copy: "Captures jump starts, lockouts, fuel delivery, and battery-related service opportunities.",
  },
  {
    keyword: "24 hour towing",
    intent: "Availability-focused searchers",
    copy: "Signals around-the-clock response and helps convert callers who need immediate reassurance.",
  },
  {
    keyword: "flatbed towing",
    intent: "Specialized towing need",
    copy: "Important for higher-value jobs where equipment type affects customer choice.",
  },
  {
    keyword: "accident towing",
    intent: "High-value incident response",
    copy: "Useful for pages tied to collision recovery, impound workflows, and urgent roadside needs.",
  },
  {
    keyword: "local towing company",
    intent: "Brand-comparison intent",
    copy: "Works well for trust-building service pages that position your company against general directories.",
  },
];

const serviceCards = [
  {
    icon: <FaMapLocationDot />,
    title: "Google Business Profile Optimization",
    text: "We refine categories, services, descriptions, photos, service areas, hours, review signals, and posting cadence so your towing business sends stronger local relevance to Google Maps.",
  },
  {
    icon: <FaBolt />,
    title: "Emergency Keyword Targeting",
    text: "We build pages and on-page signals around the urgent phrases that generate towing calls, from roadside assistance to accident recovery and 24 hour dispatch searches.",
  },
  {
    icon: <FaRoute />,
    title: "Location-Based SEO",
    text: "We structure your site around core cities, neighborhoods, highways, and service zones so nearby customers can find the right towing solution in the right place.",
  },
  {
    icon: <MdOutlinePhoneInTalk />,
    title: "Website Optimization for Calls",
    text: "We improve mobile layouts, trust sections, click-to-call visibility, CTA placement, and content clarity so more visitors turn into real inbound calls.",
  },
  {
    icon: <FaStar />,
    title: "Review and Reputation Strategy",
    text: "We help strengthen review quality, recency, and topical relevance so your company looks more dependable when searchers compare results in a hurry.",
  },
  {
    icon: <FaChartLine />,
    title: "Conversion Optimization",
    text: "We align pages, calls to action, proof, and local trust cues to improve lead quality, increase booking confidence, and reduce lost opportunities from organic traffic.",
  },
];

const reasonCards = [
  {
    icon: <FaPhoneVolume />,
    title: "Built for call-driven industries",
    text: "Towing SEO should not chase vanity traffic. It should produce better inbound calls, better local visibility, and better job volume from the areas you actually serve.",
  },
  {
    icon: <FaMapLocationDot />,
    title: "Local intent over broad traffic",
    text: "We prioritize map rankings, service-area coverage, mobile intent, and emergency search behavior instead of bloated blog plans that do not move dispatch volume.",
  },
  {
    icon: <FaBolt />,
    title: "Messaging shaped by urgency",
    text: "Tow truck customers do not browse casually. We structure content so it answers location, availability, trust, and service fit in seconds.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth with long-term value",
    text: "Owning rankings for towing searches compounds over time. Every improvement in Maps, local landing pages, and review authority supports future calls.",
  },
];

const insightCards = [
  {
    icon: <FaClock />,
    title: "Customers act fast",
    text: "Most towing buyers are not researching for next month. They are stuck now, and they need a credible solution immediately.",
  },
  {
    icon: <FaTruckFast />,
    title: "Service clarity matters",
    text: "Light-duty towing, flatbed service, roadside assistance, accident recovery, and lockouts should be obvious at a glance.",
  },
  {
    icon: <FaCarBurst />,
    title: "Mobile experience decides conversions",
    text: "If your mobile page is cluttered, slow, or hard to call from, rankings alone will not save the lead.",
  },
  {
    icon: <FaRankingStar />,
    title: "Google Maps is a major lead source",
    text: "For towing companies, local pack visibility is often the difference between a quiet phone and a steady dispatch schedule.",
  },
];

const caseStudyStats = [
  {
    icon: <FaPhoneVolume />,
    label: "Google Business Profile calls",
    before: "41/mo",
    after: "96/mo",
    detail: "More direct call activity from nearby drivers searching with urgent towing intent.",
  },
  {
    icon: <FaRankingStar />,
    label: "Top-3 map rankings",
    before: "4 keywords",
    after: "19 keywords",
    detail: "Broader local pack coverage across the core phrases that drive emergency job demand.",
  },
  {
    icon: <FaRoute />,
    label: "Organic service-area pages",
    before: "3 indexed",
    after: "18 indexed",
    detail: "Better local relevance for surrounding towns, neighborhoods, and coverage zones.",
  },
  {
    icon: <FaTruckFast />,
    label: "Qualified towing jobs",
    before: "Unstable",
    after: "Consistent weekly flow",
    detail: "A steadier stream of inbound opportunities that fit real dispatch capacity.",
  },
];

const comparisonRows = [
  {
    label: "Lead ownership",
    platforms: "Shared leads and directory dependence",
    seo: "Direct calls through your own branded presence",
  },
  {
    label: "Cost profile",
    platforms: "High recurring spend and margin pressure",
    seo: "Compounding value from local visibility and content assets",
  },
  {
    label: "Conversion quality",
    platforms: "Often price shoppers comparing several providers",
    seo: "Higher-intent callers choosing your business directly",
  },
  {
    label: "Long-term value",
    platforms: "Little residual value when spend stops",
    seo: "Rankings, reviews, pages, and map authority continue building",
  },
];

const benefitCards = [
  {
    icon: <FaPhoneVolume />,
    title: "More emergency calls",
    text: "Win a larger share of urgent inbound demand from drivers who need help immediately.",
  },
  {
    icon: <FaMapLocationDot />,
    title: "Higher Google Maps visibility",
    text: "Show up more often in the map pack where towing customers make fast call decisions.",
  },
  {
    icon: <LuBadgeCheck />,
    title: "Stronger trust signals",
    text: "Build confidence through better reviews, clearer service pages, and stronger local relevance.",
  },
  {
    icon: <FaComments />,
    title: "Better call quality",
    text: "Attract callers looking for the exact towing or roadside service your team provides.",
  },
  {
    icon: <FaTruckFast />,
    title: "More towing jobs",
    text: "Turn stronger rankings into more booked work across core service categories and areas.",
  },
  {
    icon: <FaTrafficLight />,
    title: "Consistent lead flow",
    text: "Reduce dependence on unstable sources by owning more of your local search demand.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <FaMapLocationDot />,
    title: "Local visibility audit",
    text: "We review your Google Business Profile, rankings, service-area coverage, competitors, mobile call flow, and current local search gaps.",
  },
  {
    step: "02",
    icon: <FaRoute />,
    title: "Service-area SEO buildout",
    text: "We strengthen location signals, towing service pages, internal linking, and local keyword targeting so Google understands where you should rank.",
  },
  {
    step: "03",
    icon: <FaStar />,
    title: "Trust and conversion improvements",
    text: "We refine reviews, page messaging, click-to-call placement, and mobile usability so more local visitors convert into real dispatch calls.",
  },
  {
    step: "04",
    icon: <FaChartLine />,
    title: "Growth tracking and expansion",
    text: "We monitor visibility, calls, rankings, and service-area performance so the campaign keeps improving instead of stalling after setup.",
  },
];

const faqs = [
  {
    question: "How can SEO help my towing business?",
    answer:
      "SEO helps your towing business appear when people search for urgent services such as tow truck near me, roadside assistance, flatbed towing, and 24 hour towing. Strong local SEO improves your Google Maps visibility, strengthens trust signals, and increases the chances that nearby drivers call your company instead of a competitor.",
  },
  {
    question: "How long does towing SEO take?",
    answer:
      "Some improvements, especially Google Business Profile updates and call-focused website fixes, can help within the first few weeks. More competitive growth, including stronger map rankings across several service terms and areas, usually takes a few months of consistent optimization.",
  },
  {
    question: "What keywords should towing companies target?",
    answer:
      "Towing companies should prioritize high-intent terms tied to emergencies and local service demand, including tow truck near me, emergency towing service, roadside assistance, 24 hour towing, flatbed towing, accident towing, jump start service, and local towing company plus city and area modifiers.",
  },
  {
    question: "Is Google Business Profile important for towing companies?",
    answer:
      "Yes. For most towing businesses, Google Business Profile is one of the strongest lead channels because urgent searchers often call directly from the map results. Category alignment, review quality, service areas, photos, and profile completeness all influence visibility and trust.",
  },
  {
    question: "Do towing companies need a website?",
    answer:
      "Yes. A website supports rankings beyond the map listing, gives Google stronger location and service relevance, and helps customers confirm that you handle their exact towing need. It also gives your business an owned asset that improves conversion rates and long-term search authority.",
  },
  {
    question: "Why choose Zonic Media for towing SEO?",
    answer:
      "Zonic Media approaches towing SEO as a call-generation system, not a generic content package. The focus is on urgent local search behavior, Google Maps performance, mobile conversion flow, and messaging that helps more drivers choose your company quickly.",
  },
];

const carTowFormHead = {
  leadFormTitle: "Ready to Get More Towing Calls?",
  leadCallText: (
    <>
      Let&apos;s build a towing SEO strategy that improves Google Maps
      visibility, strengthens emergency search coverage, and turns more local
      searches into direct calls.
      <br />{" "}
      <a href={SITE_CONTACT.phoneHref} className="lead-call-link">
        Call Now:{SITE_CONTACT.phoneDisplay}
      </a>
    </>
  ),
};

const ArrowIcon = () => (
  <span className="buttons__icon-wrapper" aria-hidden="true">
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

export default function CarTowSeoPage() {
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
        await lineControls.start({
          width: `${pct}%`,
          transition: { duration: 1.5, ease: "easeInOut" },
        });

        if (cancelledRef.current) return;
        setHighlightedUpTo(step);

        if (step < processSteps.length - 1) {
          await new Promise<void>((r) => setTimeout(r, 2200));
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
    <main className="car-tow-page">
      <section
        className="car-tow-hero"
        style={{ backgroundImage: `url("${imagePaths[5]}")` }}
      >
        <div className="car-tow-hero-layer">
          <div className="car-tow-container">
            <Row>
              <Col lg={9} className="car-tow-hero-copy">
                <h1>
                  Car towing SEO services built to turn urgent searches into
                  more direct calls.
                </h1>
                <p className="car-tow-hero-sub-head">
                  Local SEO for tow truck companies, emergency towing services,
                  and roadside assistance businesses.
                </p>
                <p className="car-tow-hero-body">
                  Zonic Media helps tow truck companies and roadside assistance
                  businesses improve Google Maps rankings, strengthen service
                  area visibility, and generate more high-intent phone calls
                  from people who need help right now.
                </p>
                <p className="car-tow-hero-body">
                  If your company is not showing up when drivers search for tow
                  truck near me, emergency towing service, roadside assistance,
                  or 24 hour towing, those jobs are being handed to competitors.
                  Our towing SEO approach is designed around fast-moving local
                  intent, mobile-first search behavior, and the signals that
                  help more customers call instead of scrolling past your
                  business.
                </p>
                <div className="car-tow-hero-actions">
                  <HashScrollLink
                    href="#car-tow-contact-form"
                    className="buttons"
                    offset={120}
                  >
                    Get Free Towing SEO Audit
                    <ArrowIcon />
                  </HashScrollLink>
                  <a
                    href="#car-tow-problems"
                    className="buttons car-tow-button-secondary"
                  >
                    See How Many Calls You Are Missing
                    <ArrowIcon />
                  </a>
                </div>
                <div className="car-tow-trust-grid">
                  {trustStats.map((stat) => (
                    <div className="car-tow-trust-card" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="car-tow-marquee" aria-label="Towing search terms">
          <div className="car-tow-marquee-track">
            {[...marqueeTerms, ...marqueeTerms].map((term, index) => (
              <span key={`${term}-${index}`}>
                <FiArrowUpRight />
                {term}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="car-tow-section" id="car-tow-problems">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Why Towing Companies Lose Calls</p>
              <h2>Towing companies lose calls, not local demand.</h2>
              <p className="car-tow-section-descrp">
                Search behavior in towing is unforgiving. Drivers are usually on
                the side of the road, on a deadline, or dealing with a stressful
                situation. They search, compare quickly, and call the result
                that looks closest, most available, and most credible.
              </p>
            </div>
          </div>
          <Row className="g-4">
            {problemCards.map((card) => (
              <Col lg={4} md={6} key={card.title}>
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

      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
            <p className="car-tow-eyebrow">Customer Search Behavior</p>
            <h2>Towing buyers decide in under a minute.</h2>
            <p className="car-tow-section-descrp">
              That compressed search journey is exactly why towing SEO needs a
              different strategy than normal local business SEO. The goal is not
              just traffic. The goal is to make the next call land with your
              dispatch team.
            </p>
            </div>
          </div>
          <div className="car-tow-timeline">
            {searchJourney.map((item) => (
              <article className="car-tow-timeline-item" key={item.step}>
                <span className="car-tow-timeline-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="car-tow-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
            <p className="car-tow-eyebrow">High-Intent Keywords</p>
            <h2>Target terms that produce the fastest towing leads.</h2>
            <p className="car-tow-section-descrp">
              Keyword strategy for towing should stay close to immediate service
              demand. The priority is not high-volume traffic for its own sake.
              It is coverage of the phrases that signal immediate need, local
              urgency, and a strong likelihood of a phone call.
            </p>
            </div>
          </div>
          <Row className="g-4">
            {keywordCards.slice(0, 5).map((item, index) => (
              <Col lg={index === 0 ? 8 : 4} md={6} key={item.keyword}>
                <article className={`car-tow-bento-card ${index === 0 ? "car-tow-bento-card-large" : ""}`}>
                  <span className="car-tow-keyword-pill">{item.intent}</span>
                  <h3>{item.keyword}</h3>
                  <p>{item.copy}</p>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="car-tow-section car-tow-section-dark">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
            <p className="car-tow-eyebrow">Core Services</p>
            <h2>SEO built to generate more towing calls.</h2>
            <p className="car-tow-section-descrp">
              Every part of the service stack is aimed at stronger local
              visibility and cleaner conversion paths. That means better
              positioning in Maps, better coverage of emergency service terms,
              and a website that supports faster action from mobile visitors.
            </p>
            </div>
          </div>
          <Row className="g-4 align-items-stretch">
            {serviceCards.map((service) => (
              <Col lg={4} md={6} key={service.title} className="d-flex">
                <article className="car-tow-service-card">
                  <div className="car-tow-service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="car-tow-section">
        <div className="car-tow-container">
          <Row className="align-items-center gy-4">
            <Col lg={5}>
              <div className="car-tow-feature-image car-tow-feature-image-large">
                <img
                  src={imagePaths[1]}
                  alt="Tow truck operator assisting a stranded driver"
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="car-tow-feature-copy car-tow-feature-copy-split">
                <h2>Visibility built for dispatch growth and more calls.</h2>
                <h3 className="car-tow-sub-heading">
                  Local SEO for towing companies has to support urgency, trust,
                  and quick decisions.
                </h3>
                <p>
                  We align Google Business Profile optimization, location pages,
                  review signals, and conversion-focused site content so your
                  towing business can compete for emergency jobs with more
                  consistency. The goal is a stronger local presence that helps
                  nearby drivers trust your company faster.
                </p>
                <ul className="car-tow-check-list">
                  <li>
                    <FaRegCircleCheck />
                    Better rankings for towing and roadside keywords
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Stronger call conversion from mobile visitors
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Broader service-area visibility in Google Maps
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="car-tow-section">
        <div className="car-tow-container">
          <Row className="align-items-center gy-4">
            <Col lg={7}>
            <div className="car-tow-split-copy">
              <p className="car-tow-eyebrow">Google Maps Domination</p>
              <h2>Google Maps is where most towing calls start.</h2>
              <h3 className="car-tow-sub-heading">
                Nearby customers usually call from the map results before they
                compare many websites.
              </h3>
              <p>
                Google Maps often becomes the first screen that matters. Drivers
                searching for a tow truck usually see a small set of local
                options, compare distance and review strength, and place a call
                without ever visiting several websites. If your business is not
                visible there, your best demand is leaking out at the exact
                moment it should convert.
              </p>
              <p>
                Our work focuses on the ranking signals that help towing brands
                compete in local pack results: profile relevance, service-area
                clarity, supporting website authority, review quality, mobile
                user experience, and content that reinforces what your team does
                and where you do it. That combination gives nearby customers
                more reasons to trust your listing and call sooner.
              </p>
            </div>
            </Col>
            <Col lg={5}>
            <div className="car-tow-image-frame">
              <img
                src={imagePaths[2]}
                alt="Tow truck ready for roadside dispatch service"
              />
            </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
            <p className="car-tow-eyebrow">Why Choose Zonic Media</p>
            <h2>We focus on calls, not vanity rankings.</h2>
            <p className="car-tow-section-descrp">
              The towing industry is fast, local, and highly transactional. SEO
              has to reflect that. We focus on the signals that support urgent
              discovery, trust, and conversion so your online visibility is more
              useful to the business, not just nicer in a report.
            </p>
            </div>
          </div>
          <Row className="g-4">
            {reasonCards.map((card) => (
              <Col lg={6} md={6} key={card.title}>
                <article className="car-tow-bento-card car-tow-reason-card">
                  <div className="car-tow-icon-box">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="car-tow-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
            <p className="car-tow-eyebrow">Towing Industry Insight</p>
            <h2>Towing SEO demands a unique customer mindset.</h2>
            <p className="car-tow-section-descrp">
              Traditional local businesses often sell through consideration,
              repeat visits, or slower research. Towing companies usually do
              not. Searchers are under pressure, on a phone, in a vehicle
              problem, and trying to make a choice in under a minute. That means
              the right SEO strategy has to combine local relevance, immediate
              clarity, and strong conversion cues on every important page.
            </p>
            </div>
          </div>
          <Row className="g-4">
            {insightCards.map((card) => (
              <Col lg={3} md={6} key={card.title}>
                <article className="car-tow-info-card" key={card.title}>
                  <div className="car-tow-icon-box">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section ref={processSectionRef} className="car-tow-section car-tow-section-dark car-tow-process-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content car-tow-center-head-content-light">
              <p className="car-tow-eyebrow">Our Process</p>
              <h2>Four steps built for measurable towing SEO growth.</h2>
              <p className="car-tow-section-descrp">
                The process is structured to improve visibility first, then
                reinforce trust and conversion. That keeps the work tied to
                dispatch outcomes instead of generic traffic reporting.
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
                  lineControls.start({
                    width: `${pct}%`,
                    transition: { duration: 0.5, ease: "easeOut" },
                  });
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

      <section className="car-tow-section">
        <div className="car-tow-container">
          <Row className="gy-4 align-items-center">
            <Col lg={7}>
            <div className="car-tow-case-copy">
              <p className="car-tow-eyebrow">Case Study Example</p>
              <h2>Real results from a focused towing SEO campaign.</h2>
              <h3 className="car-tow-sub-heading">
                The right local SEO setup improves both visibility and job
                quality over time.
              </h3>
              <p>
                Consider a regional towing company serving multiple nearby
                suburbs with a solid dispatch operation but weak search
                performance. Their Google Business Profile was active, but the
                website lacked clear service-area pages, emergency keyword
                targeting, and mobile call prompts. Reviews existed, yet the
                profile and site did not reinforce each other well enough to win
                local pack consistency.
              </p>
              <p>
                After tightening local service messaging, expanding location
                coverage, improving on-page call paths, and strengthening Google
                Business Profile relevance, the business began showing up more
                often for urgent towing terms. The result was not just more
                traffic. It was more direct calls, a stronger share of map
                exposure, and more dependable towing jobs from the areas that
                mattered most.
              </p>
            </div>
            </Col>
            <Col lg={5}>
            <div className="car-tow-case-visual">
              <img
                src={imagePaths[3]}
                alt="Roadside towing response vehicle and service team"
              />
            </div>
            </Col>
          </Row>

          <div className="car-tow-before-after">
            <div className="car-tow-compare-card">
              <span>Before</span>
              <h3>Weak coverage and uneven call flow</h3>
              <p>
                Limited location targeting, underused Google Business Profile
                content, and poor mobile conversion flow left valuable demand on
                the table.
              </p>
            </div>
            <div className="car-tow-compare-card car-tow-compare-card-accent">
              <span>After</span>
              <h3>Stronger local presence and more qualified jobs</h3>
              <p>
                Better map relevance, broader service-area visibility, and
                cleaner website conversion signals created a more stable inbound
                pipeline.
              </p>
            </div>
          </div>

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

      <section className="car-tow-section car-tow-section-alt">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
            <p className="car-tow-eyebrow">SEO vs Lead Platforms</p>
            <h2>Own demand instead of renting it from platforms.</h2>
            <p className="car-tow-section-descrp">
              Many towing businesses rely heavily on lead marketplaces because
              they can produce jobs quickly. The problem is that those leads are
              often shared, expensive, and easy to lose on price. SEO gives your
              company a stronger long-term position by helping customers find
              you directly through Google Search and Maps.
            </p>
            </div>
          </div>
          <div className="car-tow-table-wrap">
            <table className="car-tow-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Lead Platforms</th>
                  <th>Local SEO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.platforms}</td>
                    <td>{row.seo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="car-tow-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Results You Want</p>
              <h2>Results that matter to your towing operation.</h2>
              <p className="car-tow-section-descrp">
                The best outcome is a search presence that consistently supports
                your operation. That means more urgent calls from nearby drivers,
                stronger map pack placement, and a website that helps more people
                choose your company without friction.
              </p>
            </div>
          </div>
          <div className="car-tow-results-grid">
            {benefitCards.map((benefit) => (
              <article className="car-tow-result-item" key={benefit.title}>
                <div className="car-tow-result-icon" aria-hidden="true">
                  {benefit.icon}
                </div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="car-tow-section car-tow-section-dark">
        <div className="car-tow-container">
          <div className="car-tow-limited">
            <div className="car-tow-limited-copy">
              <p className="car-tow-eyebrow">Limited Availability</p>
              <h2>Selective coverage keeps every towing campaign stronger.</h2>
              <p>
                Towing SEO works best when location strategy is deliberate. We
                limit how many towing clients we support in overlapping service
                regions so each campaign has room to build stronger local
                authority, clearer coverage, and better long-term visibility.
              </p>
              <p>
                If your company wants better rankings, more Google Maps calls,
                and a cleaner path to consistent towing jobs, this is the right
                time to review how much demand your current visibility is
                leaving behind.
              </p>
              <div className="car-tow-limited-points">
                <div>
                  <FaRegCircleCheck />
                  <span>Selective area coverage for stronger local focus</span>
                </div>
                <div>
                  <FaRegCircleCheck />
                  <span>Clear SEO roadmap tied to calls and jobs</span>
                </div>
                <div>
                  <FaRegCircleCheck />
                  <span>Built for towing operators and roadside brands</span>
                </div>
              </div>
              <HashScrollLink
                href="#car-tow-contact-form"
                className="buttons"
                offset={120}
              >
                Reserve a Strategy Review
                <ArrowIcon />
              </HashScrollLink>
            </div>
            <div className="car-tow-limited-image">
              <img
                src={imagePaths[4]}
                alt="Professional towing vehicle ready for emergency local service"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="car-tow-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Frequently Asked Questions</p>
              <h2>Common towing SEO questions answered clearly.</h2>
            </div>
          </div>
          <div className="car-tow-faq-wrapper">
            <GmbFaqs items={faqs} columns={2} />
          </div>
          <Script
            id="car-tow-faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      <section className="car-tow-section car-tow-final-section" id="car-tow-final-cta">
        <div className="car-tow-container">
          <div className="car-tow-final-cta">
            <p className="car-tow-eyebrow">Start Growing Today</p>
            <h2>More towing calls from Google and Maps.</h2>
            <p>
              Zonic Media builds local SEO systems for tow truck companies that
              need more direct calls, stronger emergency search coverage, and
              better local growth. If your current visibility is not converting
              into enough jobs, the gap is measurable and fixable.
            </p>
            <div className="car-tow-hero-actions car-tow-final-actions">
              <HashScrollLink
                href="#car-tow-contact-form"
                className="buttons"
                offset={120}
              >
                Get Free Towing SEO Audit
                <ArrowIcon />
              </HashScrollLink>
              <a
                href={SITE_CONTACT.phoneHref}
                className="buttons car-tow-button-secondary"
              >
                Book a Strategy Call
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="car-tow-section car-tow-section-alt car-tow-testimonial-section">
        <div className="car-tow-container">
          <div className="car-tow-center-head">
            <div className="car-tow-center-head-content">
              <p className="car-tow-eyebrow">Testimonials</p>
              <h2>What our clients say about working with Zonic Media.</h2>
            </div>
          </div>
          <div className="car-tow-testimonial-card">
            <ClutchWidget
              widgetType="12"
              height="375"
              primaryColor="#f7c00a"
              reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
            />
          </div>
        </div>
      </section>

      <section className="phila-sec-10 car-tow-contact-section">
        <div className="phila-sec-10-inner car-tow-container">
          <div className="phila-sec-10-content">
            <h2 className="phila-sec-10-heading">
              Ready to Grow Your Towing Business with Stronger Local SEO?
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media and let&apos;s build a
              towing SEO strategy focused on more Google Maps visibility,
              stronger emergency keyword coverage, and more direct calls from
              drivers who need help now.
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
                  <br />
                  United States
                </a>
              </div>

              <div className="phila-sec-10-info-card">
                <div className="phila-sec-10-info-head">
                  <div className="phila-sec-10-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>{SITE_CONTACT.email}</a>
                <a href={SITE_CONTACT.phoneHref}>{SITE_CONTACT.phoneDisplay}</a>
              </div>
            </div>

            <div className="phila-sec-10-image-wrap">
              <img
                src="/images/real-est-industries/realest-img-5.jpg"
                alt="Philadelphia marketing consultation and contact"
                className="phila-sec-10-image"
              />
            </div>
          </div>

          <div
            className="phila-sec-10-contact-form"
            id="car-tow-contact-form"
          >
            <LeadContactForm
              leadFormTitle={carTowFormHead.leadFormTitle}
              leadCallText={carTowFormHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
