import "@/app/style/launchpad.css";
import GmbFaqs from "@/app/components/GmbFaqs";
import SharedLottiePlayer from "@/app/components/SharedLottiePlayer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Col, Row } from "react-bootstrap";
import { FaArrowTrendUp, FaCheck, FaCircleExclamation } from "react-icons/fa6";
import { PiBagSimple } from "react-icons/pi";
import { IoRocket } from "react-icons/io5";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import GhlChatWidget from "@/app/components/GhlChatWidget";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Launchpad", url: "/services/launchpad" },
]);

export const metadata: Metadata = {
  title: "Business Launch Services | Start Your Business",
  description:
    "Launch your business online with Zonic LaunchPad. Get branding, website design, Google Business setup, local SEO, and lead generation in one done-for-you system.",
  keywords: [
    "business launch services",
    "start a business online",
    "new business website package",
    "done for you business setup",
    "branding for new business",
    "Google Business Profile setup service",
    "local SEO for new business",
    "small business launch package",
    "logo and branding package for startups",
  ],
  alternates: {
    canonical: "/services/launchpad",
  },
  openGraph: {
    title: "Business Launch Services | Start Your Business | Zonic Media",
    description:
      "Zonic LaunchPad helps new businesses launch with branding, a conversion-focused website, Google visibility, and a lead generation foundation.",
    url: "/services/launchpad",
    type: "website",
  },
};

const LaunchpadServiceFaqItems = [
  {
    question: "How much does it cost to start a business with Zonic LaunchPad?",
    answer:
      "The cost depends on your business needs, but most clients invest between $1,500 and $3,000 for a complete setup that includes website, branding, and local presence.",
  },
  {
    question: "What do I need before getting started?",
    answer:
      "You only need a basic idea of your business. We handle everything else from branding to setup and launch.",
  },
  {
    question: "How long does it take to launch my business?",
    answer:
      "Most businesses are ready within 7 to 14 days depending on the scope and feedback speed.",
  },
  {
    question: "Will my business start getting customers immediately?",
    answer:
      "We build your business with a strong foundation for visibility and lead generation. Results can vary, but many clients start seeing inquiries within the first few weeks.",
  },
  {
    question: "Do you provide support after the launch?",
    answer:
      "Yes, we offer ongoing support and marketing services including SEO and paid ads to help you grow.",
  },
  {
    question: "Can you help if I already have a business but need improvement?",
    answer:
      "Yes, we can upgrade your existing setup, improve your website, and optimize your online presence.",
  },
  {
    question: "Do I need technical or marketing knowledge?",
    answer:
      "No, our team handles everything. You can focus on running your business while we manage the setup.",
  },
  {
    question: "What makes Zonic different from freelancers?",
    answer:
      "Instead of hiring multiple people, you get one team that handles everything with a structured process focused on results.",
  },
  {
    question: "Can I scale my business after launch?",
    answer:
      "Yes, you can upgrade to advanced marketing services like SEO and ads anytime as your business grows.",
  },
  {
    question: "Do you work with US-based businesses?",
    answer:
      "Yes, we primarily work with US clients and understand local market requirements and competition.",
  },
];

const LaunchpadHomeFormHead = {
  leadFormTitle: "Start Your Business with Zonic LaunchPad ",
  leadCallText: (
    <>
      One quick call can help you plan, build, and launch your business faster.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now: (302) 726-9736
      </a>
    </>
  ),
};

const launchpadPricingPlans = [
  {
    name: "Starter Launch",
    price: "$950",
    description:
      "Best for getting your business online with a solid foundation",
    features: [
      "Logo design with basic branding",
      "2 to 5 page website",
      "Google Business Profile setup",
      "Contact form integration",
      "Mobile optimized layout",
    ],
    ideal: "Ideal if you want a simple and professional start",
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth Launch",
    price: "$1,750",
    description:
      "Designed for business owners who want visibility and real leads",
    features: [
      "Everything in Starter",
      "5 to 7 page website built for conversions",
      "Full Google Business optimization",
      "Social media setup and branding",
      "Local SEO foundation setup",
      "Lead capture system integration",
    ],
    ideal: "Ideal if you want customers from day one",
    cta: "Book Free Consultation",
    featured: true,
  },
  {
    name: "Pro Launch",
    price: "$4,200",
    description:
      "Built for businesses that want fast growth and a competitive edge",
    features: [
      "Everything in Growth",
      "Premium custom website design",
      "Advanced local SEO setup",
      "Google Ads campaign setup",
      "Meta Ads campaign setup",
      "Dedicated landing page for ads",
      "Lead tracking system",
      "30 day post launch support",
    ],
    ideal: "Ideal if you want to scale quickly",
    cta: "Scale My Business",
    featured: false,
  },
];

// Lead CTAs now route to the contact page (the inline lead form is hidden; GHL chat handles leads).
const LAUNCHPAD_LEAD_HREF = "/contact-us" as const;

function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="launchpad-sec-1">
        <Col lg={8} className="launch-col">
          <div className="launchpad-sec-1-content-wrapper">
            <p className="launchpad-label">
              <span>
                <FaArrowTrendUp />
              </span>
              Zonic Media Your Growth Partner
            </p>

            <h1 className="launchpad-main-heading">
              Start{" "}
              <span>
                <Image
                  src="/images/launch-rocket.svg"
                  alt="success rocket"
                  width={60}
                  height={60}
                ></Image>
              </span>{" "}
              Your Business in 7 to 14 Days Without the Confusion
            </h1>
            <p className="launchpad-descrp">
              At <span> Zonic LaunchPad </span> we build everything you need
              from branding and website to Google presence and marketing so you
              can focus on growing your business
            </p>

            <div className="launchpad-sec1-ctas">
              <HashScrollLink
                href={LAUNCHPAD_LEAD_HREF}
                className="buttons"
              >
                Get Started Today
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
              </HashScrollLink>

              <HashScrollLink
                href={LAUNCHPAD_LEAD_HREF}
                className="buttons"
              >
                Book Free Consultation
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
              </HashScrollLink>
            </div>
          </div>
        </Col>
      </div>

      <div className="launchpad-sec-2">
        <Row className="g-4">
          <Col lg={3}>
            <div className="launchpad-sec-1-card-wrapper launch-sec-1-card-1">
              <SharedLottiePlayer
                className="launchpad-rocket-lottie"
                src="/lottie/rocket-launchpad.lottie"
              />
            </div>
          </Col>

          <Col lg={5}>
            <LenisIframeGuard className="launch-sec-1-card-2 launchpad-sec-1-card-wrapper">
              <iframe
                src="https://www.youtube.com/embed/8XloRxwawiw?si=SGxO16MpdXp7-KN5"
                title="YouTube video player"
                loading="eager"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </LenisIframeGuard>
          </Col>

          <Col lg={4}>
            <div className="launchpad-sec-1-card-wrapper launch-sec-1-card-3">
              <h2>Launch Your Business Online in 7 to 14 Days </h2>
              <HashScrollLink
                href={LAUNCHPAD_LEAD_HREF}
                className="buttons"
              >
                Book Free Consultation
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
              </HashScrollLink>
            </div>
          </Col>
        </Row>
      </div>

      <div className="launchpad-sec-3">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                Zonic LaunchPad Business Setup System
              </p>

              <h2 className="launchpad-sec-heading">
                From Idea to Launch: Build Your Business the Right Way
              </h2>
            </div>
          </Col>
        </div>

        <Row className="g-4">
          <Col lg={6}>
            <div className="launchpad-box-card">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    <span>
                      <PiBagSimple />
                    </span>{" "}
                    Starting a business feels exciting at first
                  </h3>
                </div>

                <p className="launchpad-box-card-sub-head">Then reality hits</p>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCircleExclamation />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>
                  <li>
                    <span>
                      <FaCircleExclamation />
                    </span>
                    Most people get stuck before they even begin
                  </li>
                  <li>
                    <span>
                      <FaCircleExclamation />
                    </span>
                    They spend weeks researching, hire multiple freelancers, or
                    end up with something incomplete that never performs
                  </li>
                  <li>
                    <span>
                      <FaCircleExclamation />
                    </span>
                    That is why many great ideas never turn into real businesses
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="launchpad-box-card launchpad-box-card-2">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    <span>
                      <IoRocket />
                    </span>{" "}
                    Introducing Zonic LaunchPad™
                  </h3>
                </div>

                <p className="launchpad-box-card-sub-head">
                  A complete business setup solution designed for people who
                  want to launch the right way from day one
                </p>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    We take your idea and turn it into a fully built and ready
                    to launch business
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    No confusion
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    No multiple vendors
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    No wasted time
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Just one team handling everything
                  </li>
                </ul>

                <div className="launchpad-box-card-cta">
                  <HashScrollLink
                    href={LAUNCHPAD_LEAD_HREF}
                    className="buttons"
                  >
                    Get started Today
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
                  </HashScrollLink>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={12}>
            <div className="launchpad-box-card-content-wrapper">
              <Row>
                <Col lg={6}>
                  <div className="launchpad-box-card launchpad-box-card-3">
                    <div className="launchpad-box-card-heading-container">
                      <h3 className="launchpad-box-card-heading">
                        <span>
                          <FaArrowTrendUp />
                        </span>{" "}
                        Everything Required to Launch Your Business
                      </h3>
                    </div>

                    <p className="launchpad-box-card-sub-head">
                      Everything you need in one complete system
                    </p>

                    <ul className="launchpad-box-card-list">
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        Professional logo and brand identity
                      </li>

                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        Mobile optimized website designed for conversions
                      </li>

                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        Google Business Profile setup and optimization
                      </li>

                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        Social media account setup and branding
                      </li>

                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        Local SEO foundation to improve visibility
                      </li>

                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        Lead capture system so customers can reach you easily
                      </li>
                    </ul>

                    <div className="launchpad-box-card-cta">
                      <HashScrollLink
                        href={LAUNCHPAD_LEAD_HREF}
                        className="buttons"
                      >
                        Book free Consultation
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
                      </HashScrollLink>
                    </div>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="launchpad-box-card-3-img-cont">
                    <Image
                      src="/images/launchpad-2.jpg"
                      fill
                      alt="launchpad business launch"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className="launchpad-sec-4">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                How Zonic LaunchPad Works
              </p>

              <h2 className="launchpad-sec-heading">
                A Simple 3-Step Process to Launch Your Business Online
              </h2>
            </div>
          </Col>
        </div>

        <Row>
          <Col lg={4}>
            <div className="launchpad-sec-4-card-wrapper">
              <p className="launchpad-sec-4-card-number"> 1 </p>

              <h3 className="launchpad-sec-4-card-heading">Share Your Idea</h3>
              <p className="launchpad-sec-4-card-descrp">
                Tell us about your business, your goals, and your target
                audience
              </p>

              <p className="launchpad-sec-4-card-descrp-2">
                Features included:
              </p>

              <ul className="launchpad-sec-4-list">
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Business idea consultation and strategy planning
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Target audience and service area research
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Competitor analysis for better positioning
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-sec-4-card-wrapper">
              <p className="launchpad-sec-4-card-number"> 2 </p>

              <h3 className="launchpad-sec-4-card-heading">
                We Build Your Foundation
              </h3>
              <p className="launchpad-sec-4-card-descrp">
                Our team creates your brand, website, and complete online
                presence
              </p>

              <p className="launchpad-sec-4-card-descrp-2">
                Features included:
              </p>

              <ul className="launchpad-sec-4-list">
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Professional logo and brand identity creation
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Conversion-focused website development
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Google Business Profile setup and optimization
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-sec-4-card-wrapper launchpad-sec-4-card-wrapper-3">
              <p className="launchpad-sec-4-card-number"> 3 </p>

              <h3 className="launchpad-sec-4-card-heading">Launch and Grow</h3>
              <p className="launchpad-sec-4-card-descrp">
                You receive a fully ready business setup designed to attract
                customers
              </p>

              <p className="launchpad-sec-4-card-descrp-2">
                Features included:
              </p>

              <ul className="launchpad-sec-4-list">
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Local SEO setup to improve search visibility
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Lead capture system for calls and inquiries
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Launch support and growth-ready foundation
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className="launchpad-sec-5">
        <Col lg={7}>
          <div className="launchpad-sec-5-content-wrapper">
            <h2 className="launchpad-banner-heading">
              Build, Launch, and Start Getting Customers in 7 to 14 Days
            </h2>
            <p className="launchpad-banner-descrp">
              Zonic LaunchPad builds your complete online presence—from branding
              and website to Google visibility—so you can start getting
              customers faster without the hassle.
            </p>

            <div className="launchpad-banner-ctas">
              <HashScrollLink
                href={LAUNCHPAD_LEAD_HREF}
                className="buttons"
              >
                Launch My Business
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
              </HashScrollLink>

              <ClutchWidget />
            </div>
          </div>
        </Col>
      </div>

      <div className="launchpad-sec-8">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                Business Launch & Growth Insights
              </p>

              <h2 className="launchpad-sec-heading">
                What It Takes to Launch and Grow a Successful Business Online
              </h2>
            </div>
          </Col>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="launchpad-box-card">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    What do you need to launch your business online?{" "}
                  </h3>
                </div>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    To launch successfully, your business needs more than just a
                    website
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    You need a strong foundation including branding, a
                    professional website, Google visibility, and a system to
                    generate leads
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Without these, most businesses struggle to get consistent
                    customers
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-box-card">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    How can you launch your business online the right way?
                  </h3>
                </div>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Launching the right way means building everything with
                    growth in mind from day one
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    This includes setting up your website, optimizing your
                    Google presence, targeting the right keywords, and creating
                    a clear path for customers to contact you
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-box-card">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    Why is local SEO important for home service businesses?
                  </h3>
                </div>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Most customers search online before choosing a service
                    provider
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Local SEO helps your business appear in those searches,
                    especially in Google Maps and local results where customers
                    are ready to hire
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="launchpad-box-card ">
              <div className="launchpad-box-card-content-wrapper launch-box-card-banner">
                <h2 className="launch-box-card-banner-heading">
                  From Setup to Growth, Everything Matters
                </h2>

                <p className="launch-box-card-banner-descrp">
                  A successful business is not just built it is strategically
                  positioned to attract customers, generate leads, and grow
                  consistently
                </p>

                <HashScrollLink
                  href={LAUNCHPAD_LEAD_HREF}
                  className="buttons"
                >
                  Get started today
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
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-box-card launchpad-box-card-5">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    Why choose Zonic Media to launch and grow your business?
                  </h3>
                </div>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    We do not just build websites or run SEO campaigns
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    We create complete systems designed to help your business
                    get visible, generate leads, and convert those leads into
                    real customers
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="launchpad-sec-6">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                Zonic Launchpad Pricing
              </p>

              <h2 className="launchpad-sec-heading">
                Choose Your Business Launch Plan
              </h2>

              <p className="launchpad-sec-descrp">
                Simple packages designed to take you from idea to a fully
                operational, market-ready business.
              </p>
            </div>
          </Col>
        </div>

        <div className="launchpad-pricing-wrapper">
          <Row className="g-4 justify-content-center">
            {launchpadPricingPlans.map((plan) => (
              <Col xs={12} md={12} lg={4} key={plan.name}>
                <div
                  className={`launchpad-pricing-card${plan.featured ? " launchpad-pricing-card--dominate" : ""}`}
                >
                  <div className="launchpad-price-badge">
                    {plan.name}
                    {plan.featured ? " | Most Popular" : ""}
                  </div>

                  <p className="launchpad-price-prefix">Starting at</p>

                  <h2 className="launchpad-price">{plan.price}</h2>

                  <p className="launchpad-price-subtitle">{plan.description}</p>

                  <ul className="launchpad-price-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <p className="launchpad-price-ideal">{plan.ideal}</p>

                  <HashScrollLink
                    href={LAUNCHPAD_LEAD_HREF}
                    className="launchpad-price-cta-btn"
                  >
                    {plan.cta}
                  </HashScrollLink>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="launchpad-sec-7">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                LaunchPad FAQs
              </p>

              <h2 className="launchpad-sec-heading">
                Zonic LaunchPad Questions Answered
              </h2>

              <p className="launchpad-sec-descrp">
                Have questions about how Zonic LaunchPad works or what you need
                before starting? Here are clear answers about setup, timelines,
                deliverables, and next steps so you can launch with confidence.
              </p>
            </div>
          </Col>
        </div>

        <div className="launchpad-faq-wrapper">
          <GmbFaqs items={LaunchpadServiceFaqItems} />
        </div>

        <Script
          id="launchpad-service-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://zonicllc.com/services/launchpad",
              mainEntity: LaunchpadServiceFaqItems.map((faq) => ({
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

      <div className="launchpad-sec-9">
        <div className="launchpad-home-content">
          <p className="launchpad-home-label">
            Launch Your Business with Confidence
          </p>
          <h2 className="launchpad-home-main-heading">
            Everything You Need to Start and Grow Your Business — All in One
            Place
          </h2>
          <p className="launchpad-home-descrp">
            Starting a business is more than just building a website. You need
            the right setup, strong branding, and a system that helps you
            attract real customers from day one.
          </p>

          <p className="launchpad-home-descrp">
            Zonic LaunchPad gives you a complete done-for-you business
            setup—from branding and website to Google presence and lead
            generation—so you can launch faster and focus on growing your
            business.
          </p>

          <div className="launchpad-home-cta-clutch">
            <Link href="tel:+13027269736" className="buttons">
              Call Now: (302) 726-9736
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
            </Link>

            <ClutchWidget />
          </div>
        </div>

        {/* Contact form hidden — GHL chat widget handles leads on this page. Change false to true to restore. */}
        {false && (
        <div
          id={LAUNCHPAD_LEAD_HREF.slice(1)}
          className="launchpad-home-contact-form"
        >
          <LeadContactForm
            leadFormTitle={LaunchpadHomeFormHead.leadFormTitle}
            leadCallText={LaunchpadHomeFormHead.leadCallText}
            submitButtonText="Contact Us"
          />
        </div>
        )}
      </div>

      <div className="launchpad-sec-10">
        <div className="launchpad-sec-5">
          <Col lg={7}>
            <div className="launchpad-sec-5-content-wrapper">
              <h2 className="launchpad-banner-heading">
                Start Your Business in 7 to 14 Days Without the Confusion
              </h2>
              <p className="launchpad-banner-descrp">
                At Zonic LaunchPad We build everything you need from branding
                and website to Google presence and marketing so you can focus on
                growing your business
              </p>

              <div className="launchpad-banner-ctas">
                <HashScrollLink
                  href={LAUNCHPAD_LEAD_HREF}
                  className="buttons"
                >
                  Get Started Today
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
                </HashScrollLink>

                <Link href="tel:+13027269736" className="buttons">
                  Call Now: (302) 726-9736
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
                </Link>
              </div>
            </div>
          </Col>
        </div>
      </div>

      <GhlChatWidget />
      <Footer />
    </>
  );
}

export default page;
