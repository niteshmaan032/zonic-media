import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import "@/app/style/philadelphia/philaSeo.css";
import { SITE_CONTACT } from "@/shared/siteConfig";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import {
  FaGoogle,
  FaHandPointer,
  FaMousePointer,
  FaSearch,
  FaStar,
} from "react-icons/fa";
import {
  FaFan,
  FaHelmetSafety,
  FaMapLocationDot,
  FaScaleBalanced,
  FaTooth,
} from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import {
  MdAddLocationAlt,
  MdFactCheck,
  MdCleaningServices,
  MdOutlineLocationOn,
  MdRoofing,
} from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Local SEO Philadelphia | Best Local SEO Company Philadelphia",
  description:
    "Grow your business with expert Local SEO in Philadelphia. Zonic Media helps businesses rank higher on Google Maps, generate more calls, and get consistent local leads.",
};

const PhilaSeoFaqs = [
  {
    question: "How long does local SEO take in Philadelphia?",
    answer:
      "Most businesses begin seeing improvements within 3 to 6 months depending on competition and starting position.",
  },
  {
    question: "Can local SEO help small businesses compete in Philadelphia?",
    answer:
      "Yes. Local SEO helps small businesses rank against larger competitors by targeting nearby searches and Google Maps.",
  },
  {
    question: "Is Google Maps ranking important?",
    answer:
      "Yes. Many customers choose businesses from the top 3 Google Maps results.",
  },
  {
    question: "Do I need a website for local SEO?",
    answer: "A strong website helps rankings, conversions, and trust signals.",
  },
  {
    question: "Does local SEO work better than ads?",
    answer:
      "Local SEO creates long-term traffic, while ads generate faster short-term leads. Both can work together.",
  },
];

const PhilaSeoFormHead = {
  leadFormTitle: "Ready to Grow Your Local Visibility?",
  leadCallText: (
    <>
      Let&apos;s build a Philadelphia local SEO strategy that drives more map
      visibility, stronger rankings, and consistent high-intent leads.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

const PhilaSeoGrowthBenefits = [
  {
    icon: <FaMapLocationDot />,
    title: "Higher rankings on Google Maps",
  },
  {
    icon: <FiPhoneCall />,
    title: "More phone calls and inquiries",
  },
  {
    icon: <FaStar />,
    title: "Better trust through reviews",
  },
  {
    icon: <FaSearch />,
    title: "Increased traffic from nearby customers",
  },
  {
    icon: <RiLineChartLine />,
    title: "Long-term lead generation without relying only on ads",
  },
];

function page() {
  return (
    <>
      <div className="phila-seo-sec-1">
        <div className="phila-seo-sec-1-layer">
          <div className="phila-seo-sec-1-banner-image">
            <Image
              src="/images/philadelphia/phila-seo/phila-seo-banner-img-2.png"
              alt="Philadelphia local SEO agency hero illustration"
              width={680}
              height={680}
              priority
            />
          </div>

          <div className="phila-seo-sec-1-content">
            <Col lg={9} className="phila-seo-sec-1-content-wrapper">
              <h1 className="phila-seo-sec-1-heading">
                Local SEO Agency Philadelphia: Get{" "}
                <span>More Local Leads in 2026</span>
              </h1>
              <p className="phila-seo-sec-1-sub-head">
                Best Local SEO Company Philadelphia | Zonic Media
              </p>
              <p className="phila-seo-sec-1-descrp">
                Looking for a trusted Local SEO agency in Philadelphia? Zonic
                Media helps businesses rank higher on Google Maps, improve local
                visibility, and generate consistent local leads through proven
                SEO strategies.
              </p>

              <p className="phila-seo-sec-1-descrp">
                Whether you run a law firm, dental clinic, contractor business,
                med spa, or local service company, we help you dominate local
                search and turn online traffic into paying customers.
              </p>

              <div className="phila-seo-sec-1-ctas">
                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="buttons"
                  offset={120}
                >
                  Get A Free Call
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
                  href="#phila-seo-contact-form"
                  className="buttons"
                  offset={120}
                >
                  Get A Free Quote
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

              <div className="phila-seo-feature-grid">
                <div className="feature-card">
                  <div className="icon-box">
                    <MdOutlineLocationOn />
                  </div>
                  <p>RANK HIGHER ON GOOGLE</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <FiPhoneCall />
                  </div>
                  <p>GET MORE CALLS FROM LOCAL CUSTOMERS</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <LuCalendarCheck2 />
                  </div>
                  <p>BOOK MORE JOBS & GROW YOUR BUSINESS</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <RiLineChartLine />
                  </div>
                  <p>SUSTAINABLE GROWTH THAT LASTS</p>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>

      <div className="phila-seo-sec-2">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <p className="phila-seo-label">WHAT WE FOCUS ON</p>

            <h2 className="phila-seo-sec-heading">
              Why Choose Zonic Media as Your Philadelphia Local SEO Agency
            </h2>

            <p className="phila-seo-sec-descrp">
              We are not just another SEO company. We build local growth systems
              designed to generate calls, leads, and measurable revenue for
              Philadelphia businesses.
            </p>
          </div>
        </div>

        <div className="phila-seo-sec-2-content-wrapper">
          <Row>
            <Col lg={6} md={6} className="mb-4">
              <div className="phila-seo-card">
                <div className="phila-seo-card-top">
                  <div className="phila-seo-card-icon">
                    <FaSearch />
                  </div>
                  <h3 className="phila-seo-card-title">
                    Search Engine Optimization
                  </h3>
                </div>
                <p className="phila-seo-card-desc">
                  Improve local rankings, increase organic traffic, and build
                  long-term Google visibility in Philadelphia.
                </p>
              </div>
            </Col>

            <Col lg={6} md={6} className="mb-4">
              <div className="phila-seo-card">
                <div className="phila-seo-card-top">
                  <div className="phila-seo-card-icon">
                    <MdOutlineLocationOn />
                  </div>
                  <h3 className="phila-seo-card-title">Google Maps Rankings</h3>
                </div>
                <p className="phila-seo-card-desc">
                  Improve your presence in Google Maps and attract customers
                  searching for nearby businesses.
                </p>
              </div>
            </Col>

            <Col lg={6} md={6} className="mb-4">
              <div className="phila-seo-card">
                <div className="phila-seo-card-top">
                  <div className="phila-seo-card-icon">
                    <FaHandPointer />
                  </div>
                  <h3 className="phila-seo-card-title">
                    Conversion rate <br /> optimization
                  </h3>
                </div>
                <p className="phila-seo-card-desc">
                  Turn more visitors into calls and leads through stronger
                  landing pages and user experience.
                </p>
              </div>
            </Col>

            <Col lg={6} md={6} className="mb-4">
              <div className="phila-seo-card">
                <div className="phila-seo-card-top">
                  <div className="phila-seo-card-icon">
                    <FaGoogle />
                  </div>
                  <h3 className="phila-seo-card-title">
                    Google Business <br /> Profile optimization
                  </h3>
                </div>
                <p className="phila-seo-card-desc">
                  Optimize your Google profile to generate more calls, clicks,
                  reviews, and local trust.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="phila-seo-sec-3">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <h2 className="phila-seo-sec-heading">
              Our Local SEO Growth Framework
            </h2>
          </div>
        </div>

        <Row className="phila-seo-strategy-row">
          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">01</span>
              </div>
              <h4>Audit Your Current Presence</h4>
              <p>
                We analyze rankings, competitors, citations, website SEO, and
                missed growth opportunities.
              </p>
            </div>
          </Col>

          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">02</span>
              </div>
              <h4>Fix Core SEO Issues</h4>
              <p>
                We optimize your Google Business Profile, website structure, and
                local trust signals.
              </p>
            </div>
          </Col>

          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">03</span>
              </div>
              <h4>Build Local Authority</h4>
              <p>
                We strengthen citations, backlinks, reviews, and content
                authority for stronger rankings.
              </p>
            </div>
          </Col>

          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">04</span>
              </div>
              <h4>Scale Visibility</h4>
              <p>
                We expand rankings across multiple keywords, nearby areas, and
                service searches.
              </p>
            </div>
          </Col>

          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">05</span>
              </div>
              <h4>Optimize Conversions</h4>
              <p>
                We turn traffic into calls, leads, bookings, and measurable
                business growth.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-seo-sec-4">
        <Row>
          <Col lg={7}>
            <div className="phila-seo-sec-4-content">
              <h2 className="phila-seo-sec-4-heading">
                <span>Local SEO Agency</span> in Philadelphia That Drives Real
                Leads
              </h2>

              <p className="phila-seo-sec-4-descrp">
                If your business is not showing in Google Maps or local search
                results, you are losing customers every day. In a competitive
                market like Philadelphia, simply having a website is not enough.
                Your business needs to appear exactly when potential customers
                search for nearby services.
              </p>

              <p className="phila-seo-sec-4-descrp">
                That is where Zonic Media helps. We improve local visibility,
                increase rankings, and generate consistent high-quality leads
                without relying only on paid ads.
              </p>
            </div>
          </Col>

          <Col lg={5}>
            <div className="phila-seo-sec-4-img-cont">
              <Image
                src="/images/philadelphia/phila-seo/phila-seo-img-2.jpg"
                fill
                alt="Philadelphia local SEO lead generation strategy"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-seo-sec-5">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <p className="phila-seo-label">WHY US</p>

            <h2 className="phila-seo-sec-heading">
              Why Local SEO Matters for Philadelphia Businesses
            </h2>
          </div>
        </div>

        <div className="phila-seo-sec-5-grid">
          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <MdRoofing />
            </div>
            <h3>Roofing Companies</h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <FaFan />
            </div>
            <h3>HVAC Repair</h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <FaTooth />
            </div>
            <h3>Dentists</h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <MdCleaningServices />
            </div>
            <h3>Cleaning Services</h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <FaHelmetSafety />
            </div>
            <h3>Contractors</h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <FaScaleBalanced />
            </div>
            <h3>Legal Services</h3>
          </div>
        </div>
      </div>

      <div className="phila-seo-sec-6">
        <Row>
          <Col lg={5}>
            <div className="phila-seo-sec-6-img-cont">
              <Image
                src="/images/philadelphia/phila-seo/phila-seo-img-3.jpg"
                fill
                alt="AI SEO and local SEO advantage for Philadelphia businesses"
              />
            </div>
          </Col>

          <Col lg={7}>
            <div className="phila-seo-sec-6-content">
              <h2 className="phila-seo-sec-6-heading">
                <span>Local SEO + AI SEO</span> Advantage
              </h2>

              <p className="phila-seo-sec-6-descrp">Search is changing fast.</p>

              <p className="phila-seo-sec-6-descrp">
                Customers now ask AI tools:
              </p>

              <ul className="phila-seo-sec-6-list">
                <li>Best roofer in Philadelphia</li>
                <li>Top dentist near me</li>
                <li>Best HVAC company Philadelphia</li>
                <li>Trusted lawyer near me</li>
              </ul>

              <p className="phila-seo-sec-6-descrp">
                We optimize your business for:
              </p>

              <ul className="phila-seo-sec-6-list">
                <li>Google Search</li>
                <li>Google Maps</li>
                <li>AI Search Engines</li>
                <li>ChatGPT &amp; Gemini Discovery</li>
                <li>Voice Search Results</li>
              </ul>

              <p className="phila-seo-sec-6-descrp">
                This helps future-proof your growth and keeps you ahead of
                competitors.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-seo-sec-7">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <h2 className="phila-seo-sec-heading">
              Our Local SEO Services in Philadelphia
            </h2>
          </div>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-1.jpg"
                  alt="Google Business Profile optimization service in Philadelphia"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <FaGoogle />
                  </div>
                  <h4>Google Business Profile Optimization</h4>
                </div>

                <p>
                  We optimize your profile to rank higher in Google Search and
                  Maps while generating more calls.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-2.jpg"
                  alt="Google Maps ranking strategy service in Philadelphia"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <FaMapLocationDot />
                  </div>
                  <h4>Google Maps Ranking Strategy</h4>
                </div>

                <p>
                  We improve local rankings so nearby customers find your
                  business before competitors.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-3.jpg"
                  alt="Local keyword targeting service for Philadelphia SEO"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <FaSearch />
                  </div>
                  <h4>Local Keyword Targeting</h4>
                </div>

                <p>
                  We target high-intent Philadelphia keywords that bring
                  qualified local traffic.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-4.jpg"
                  alt="City based landing pages service for Philadelphia local SEO"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <MdAddLocationAlt />
                  </div>
                  <h4>City Based Landing Pages</h4>
                </div>

                <p>
                  We build optimized city and service pages that rank across
                  multiple nearby areas.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-5.jpg"
                  alt="Review growth strategy service for Philadelphia businesses"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <FaStar />
                  </div>
                  <h4>Review Growth Strategy</h4>
                </div>

                <p>
                  We help generate positive reviews that improve trust, clicks,
                  and local rankings.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-6.jpg"
                  alt="Local citations and directory management service in Philadelphia"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <MdFactCheck />
                  </div>
                  <h4>Local Citations &amp; Directory Management</h4>
                </div>

                <p>
                  We build consistent listings across trusted directories to
                  strengthen local authority.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-seo-sec-11">
        <div className="phila-seo-sec-11-inner">
          <div className="phila-seo-sec-11-panel">
            <div className="phila-seo-sec-11-panel-head">
              <p className="phila-seo-label">WHY IT MATTERS</p>
              <h3>Benefits of Local SEO in Philadelphia</h3>
            </div>

            <div className="phila-seo-sec-12-benefits">
              {PhilaSeoGrowthBenefits.map((benefit) => (
                <div className="phila-seo-sec-12-benefit" key={benefit.title}>
                  <div className="phila-seo-sec-12-benefit-icon">
                    {benefit.icon}
                  </div>
                  <p>{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="phila-seo-sec-11-copy">
            <h2 className="phila-seo-sec-heading">
              Why Businesses in Philadelphia Need Local SEO to Grow
            </h2>
            <p className="phila-seo-sec-11-lead">
              Philadelphia is one of the most competitive local markets in
              Pennsylvania. Customers search online every day for nearby
              businesses they can trust, compare reviews, and contact quickly.
              If your business is not visible in Google Search or Google Maps,
              those leads are going to competitors.
            </p>
            <p className="phila-seo-sec-11-lead">
              Local SEO helps your business appear when people search for
              services in your area. Whether someone needs a roofer in Center
              City, a dentist in Northeast Philadelphia, or an HVAC company near
              South Philly, showing up at the right time creates real
              opportunities.
            </p>
            <p className="phila-seo-sec-11-lead">
              Unlike paid ads that stop when budget ends, Local SEO builds
              long-term visibility and consistent lead flow. It helps your
              business rank higher, earn trust through reviews, and generate
              calls from customers already ready to buy.
            </p>
          </div>
        </div>
      </div>

      <div className="phila-seo-sec-12">
        <div className="phila-seo-sec-12-inner">
          <div className="phila-seo-sec-12-copy">
            <h2 className="phila-seo-sec-heading">
              Why Choose Zonic Media for Local SEO in Philadelphia
            </h2>
            <p className="phila-seo-sec-12-text">
              Many agencies offer SEO, but very few understand how local
              businesses actually generate revenue. At Zonic Media, we focus on
              one thing-helping Philadelphia businesses get more calls, booked
              jobs, and qualified leads through proven local SEO systems.
            </p>
            <p className="phila-seo-sec-12-text">
              We do not chase vanity metrics like impressions or random traffic.
              Our strategies are built around ranking for high-intent local
              keywords, improving Google Business Profile visibility,
              strengthening trust signals, and converting visitors into
              customers.
            </p>
            <p className="phila-seo-sec-12-text">
              Whether you are a contractor, lawyer, dentist, med spa, or home
              service company, we create a custom growth plan based on your
              market, competition, and goals.
            </p>
          </div>

          <div className="phila-seo-sec-12-panel">
            <p className="phila-seo-label">OUR APPROACH</p>
            <h3>Built Around Real Local Revenue</h3>

            <div className="phila-seo-sec-12-benefits">
              <div className="phila-seo-sec-12-benefit">
                <div className="phila-seo-sec-12-benefit-icon">
                  <FaSearch />
                </div>
                <p>Rank for high-intent Philadelphia keywords</p>
              </div>

              <div className="phila-seo-sec-12-benefit">
                <div className="phila-seo-sec-12-benefit-icon">
                  <FaGoogle />
                </div>
                <p>Improve Google Business Profile visibility</p>
              </div>

              <div className="phila-seo-sec-12-benefit">
                <div className="phila-seo-sec-12-benefit-icon">
                  <FaStar />
                </div>
                <p>Strengthen trust signals and reviews</p>
              </div>

              <div className="phila-seo-sec-12-benefit">
                <div className="phila-seo-sec-12-benefit-icon">
                  <FaHandPointer />
                </div>
                <p>Convert visitors into calls and booked jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="phila-seo-sec-8">
        <h2 className="phila-seo-sec-8-heading">What Our Clients Say</h2>

        <div className="phila-seo-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      <div className="phila-seo-sec-9">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <h2 className="phila-seo-sec-heading">
              Frequently Asked Questions About Local SEO in Philadelphia
            </h2>
          </div>
        </div>

        <div className="phila-seo-sec-9-faq-wrapper">
          <GmbFaqs items={PhilaSeoFaqs} columns={2} />
        </div>

        <Script
          id="phila-seo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: PhilaSeoFaqs.map((faq) => ({
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

      <div className="phila-seo-sec-10">
        <div className="phila-seo-sec-10-inner">
          <div className="phila-seo-sec-10-content">
            <h2 className="phila-seo-sec-10-heading">
              Looking to Grow Your Business in Philadelphia?
            </h2>
            <p className="phila-seo-sec-10-descrp">
              Book a discovery call with Zonic Media and let&apos;s build a
              local SEO strategy that drives real results.
            </p>

            <div className="phila-seo-sec-10-info-grid">
              <div className="phila-seo-sec-10-info-card">
                <div className="phila-seo-sec-10-info-head">
                  <div className="phila-seo-sec-10-info-icon">
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

              <div className="phila-seo-sec-10-info-card">
                <div className="phila-seo-sec-10-info-head">
                  <div className="phila-seo-sec-10-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

          </div>

          <div
            className="phila-seo-sec-10-contact-form"
            id="phila-seo-contact-form"
          >
            <LeadContactForm
              leadFormTitle={PhilaSeoFormHead.leadFormTitle}
              leadCallText={PhilaSeoFormHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
