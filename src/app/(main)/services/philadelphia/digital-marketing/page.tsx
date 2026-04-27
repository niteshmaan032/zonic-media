import type { Metadata } from "next";
import "@/app/style/philadelphia/philaDigital.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import { SITE_CONTACT } from "@/shared/siteConfig";
import Image from "next/image";

import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import {
  FaSearch,
  FaMousePointer,
  FaFileAlt,
  FaSearchPlus,
  FaBuilding,
  FaBullseye,
  FaChartBar,
  FaEye,
  FaUsers,
  FaMapMarkerAlt,
  FaBullhorn,
  FaChartLine,
  FaPenNib,
  FaShareAlt,
  FaHome,
  FaBriefcase,
  FaStore,
} from "react-icons/fa";
import {
  FaArrowTrendUp,
  FaGoogle,
  FaHandPointer,
  FaUserDoctor,
} from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { LuCalendarCheck2, LuSettings2, LuShieldCheck } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiCrownSimple } from "react-icons/pi";
import { RiLineChartLine } from "react-icons/ri";
import Footer from "@/app/components/Footer";

const PhilaDigitalFaqs = [
  {
    question: "What does a digital marketing agency in Philadelphia do?",
    answer:
      "A digital marketing agency helps Philadelphia businesses generate leads, increase online visibility, and grow revenue through services like SEO, Google Ads, web design, social media marketing, and content strategy.",
  },
  {
    question: "Why should I hire a digital marketing agency in Philadelphia?",
    answer:
      "Hiring a local agency helps you compete in the Philadelphia market with strategies tailored to local search trends, customer behavior, and regional competition.",
  },
  {
    question: "How can digital marketing help my Philadelphia business grow?",
    answer:
      "Digital marketing helps your business rank higher on Google, attract qualified traffic, generate more calls, increase leads, and improve conversions.",
  },
  {
    question: "What services does Zonic Media offer in Philadelphia?",
    answer:
      "Zonic Media offers SEO, Google Ads management, Local SEO, website design, social media marketing, content marketing, AI SEO optimization, and conversion rate optimization.",
  },
  {
    question: "How long does SEO take to show results in Philadelphia?",
    answer:
      "Most businesses begin seeing early SEO improvements within 2 to 3 months, while stronger rankings and lead growth usually develop within 4 to 6 months depending on competition.",
  },
  {
    question: "Is Google Ads better than SEO for local businesses?",
    answer:
      "Google Ads can generate faster short-term leads, while SEO creates long-term organic visibility. Many Philadelphia businesses benefit from using both together.",
  },
  {
    question: "What industries do you work with in Philadelphia?",
    answer:
      "We work with home service companies, medical practices, law firms, contractors, eCommerce brands, restaurants, real estate businesses, and professional service providers.",
  },
  {
    question: "Can you help my business rank on Google Maps in Philadelphia?",
    answer:
      "Yes. Our Local SEO services include Google Business Profile optimization, citation management, review strategies, and map ranking improvements.",
  },
  {
    question: "How much does digital marketing cost in Philadelphia?",
    answer:
      "Pricing depends on your goals, competition, and services needed. We offer custom strategies for startups, growing businesses, and established companies.",
  },
  {
    question:
      "What makes Zonic Media different from other Philadelphia digital marketing companies?",
    answer:
      "We focus on real business growth: more leads, calls, sales, and ROI, rather than vanity metrics like impressions or clicks alone.",
  },
  {
    question: "Can digital marketing help small businesses in Philadelphia?",
    answer:
      "Yes. Small businesses can use SEO, paid ads, and local marketing to compete with larger brands and generate consistent customer inquiries.",
  },
  {
    question: "How do I get started with Zonic Media?",
    answer:
      "You can contact Zonic Media for a free strategy call or marketing audit to discuss your business goals and growth opportunities in Philadelphia.",
  },
];

const PhilaWhyChooseCards = [
  {
    icon: <FaBullseye />,
    title: "Results Focused Strategies",
    description:
      "We build campaigns designed to generate calls, leads, and customers that help grow your business consistently.",
  },
  {
    icon: <HiOutlinePresentationChartLine />,
    title: "Full-Service Expertise",
    description:
      "From SEO and Google Ads to web design, local SEO, and content marketing, we manage complete growth systems under one roof.",
  },
  {
    icon: <FaShareAlt />,
    title: "Transparent Communication",
    description:
      "You receive clear updates, honest insights, and performance reporting so you always know what is working.",
  },
  {
    icon: <LuSettings2 />,
    title: "Customized Growth Plans",
    description:
      "Every business is different. We create tailored strategies based on your goals, competition, and market opportunities in Philadelphia.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Long-Term Partnership Mindset",
    description:
      "We focus on sustainable growth, stronger ROI, and long-term success, not short-term tactics.",
  },
];

const PhilaIndustries = [
  {
    icon: <FaHome />,
    title: "Home Services",
    description:
      "Roofing, HVAC, plumbing, electricians, remodeling, landscaping, pest control.",
  },
  {
    icon: <FaBriefcase />,
    title: "Professional Services",
    description:
      "Law firms, accountants, consultants, agencies, financial services.",
  },
  {
    icon: <FaUserDoctor />,
    title: "Healthcare & Wellness",
    description: "Dentists, med spas, clinics, chiropractors, wellness brands.",
  },
  {
    icon: <FaStore />,
    title: "Local Businesses",
    description:
      "Retail stores, restaurants, gyms, salons, franchises, service providers.",
  },
];

const PhilaLeadBenefits = [
  {
    icon: <FaBullseye />,
    title: "More qualified leads",
  },
  {
    icon: <FaSearch />,
    title: "Better Google rankings",
  },
  {
    icon: <FiPhoneCall />,
    title: "Increased calls and inquiries",
  },
  {
    icon: <LuShieldCheck />,
    title: "Stronger brand trust",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Sustainable long-term growth",
  },
];

export const metadata: Metadata = {
  title: "Digital Marketing Agency Philadelphia | SEO, Google Ads & Web Design",
  description:
    "Philadelphia digital marketing agency helping businesses grow with SEO, Google Ads, web design, local SEO, content marketing, and conversion-focused strategies.",
};

const PhilaDigitalFormHead = {
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

function page() {
  return (
    <>
      <div className="phila-sec-1">
        <div className="phila-sec-1-layer">
          <div className="phila-sec-1-content">
            <Col lg={9} className="phila-sec-1-content-wrapper">
              <h1 className="phila-sec-1-heading">
                Digital Marketing Agency Philadelphia That Helps{" "}
                <span>Businesses Grow Faster </span>
              </h1>
              <p className="phila-sec-1-sub-head">
                Top-Rated Digital Marketing Agency Philadelphia | Zonic Media
              </p>
              <p className="phila-sec-1-descrp">
                Looking for a trusted digital marketing agency in Philadelphia
                that delivers real results? Zonic Media helps local businesses
                generate more leads, increase revenue, and scale faster through
                expert SEO, Google Ads, web design, and full-service digital
                marketing strategies built for growth.
              </p>

              <p className="phila-sec-1-descrp">
                We work with Philadelphia businesses that want more calls,
                better online visibility, and a consistent stream of qualified
                customers. Whether you need stronger rankings, better ad
                performance, or a website that converts, our team builds systems
                designed to grow your business in 2026 and beyond.
              </p>

              <div className="phila-sec-1-ctas">
                <HashScrollLink
                  href="#phila-digital-contact-form"
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
                  href="#phila-digital-contact-form"
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

              <div className="phila-feature-grid">
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
                  <p>GET MORE LEADS FROM PHILADELPHIA CUSTOMERS</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <LuCalendarCheck2 />
                  </div>
                  <p>INCREASE SALES & BUSINESS GROWTH</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <RiLineChartLine />
                  </div>
                  <p>LONG-TERM RESULTS THAT SCALE</p>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>

      <div className="phila-sec-2">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <p className="phila-label ">WHAT WE DO</p>

            <h2 className="phila-sec-heading">
              What Digital Marketing Includes Today
            </h2>

            <p className="phila-sec-descrp">
              Modern digital marketing is not just one channel or a single
              tactic. It combines multiple systems working together to drive
              growth, generate qualified leads, improve brand visibility, and
              increase long-term revenue for Philadelphia businesses in
              competitive markets.
            </p>
          </div>
        </div>

        <div className="phila-sec-2-content-wrapper">
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="phila-card">
                <div className="phila-card-top">
                  <div className="phila-card-icon">
                    <FaSearch />
                  </div>
                  <h3 className="phila-card-title">
                    Search Engine <br /> Optimization
                  </h3>
                </div>
                <p className="phila-card-desc">
                  Improve rankings, increase organic traffic, and build
                  long-term visibility on Google so your business attracts
                  customers searching for your services every day.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <div className="phila-card">
                <div className="phila-card-top">
                  <div className="phila-card-icon">
                    <FaMousePointer />
                  </div>
                  <h3 className="phila-card-title">
                    Pay Per Click <br /> Advertising
                  </h3>
                </div>
                <p className="phila-card-desc">
                  Generate fast leads, targeted traffic, and measurable ROI
                  through strategic Google Ads campaigns built to reach
                  ready-to-buy customers quickly.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <div className="phila-card">
                <div className="phila-card-top">
                  <div className="phila-card-icon">
                    <FaGoogle />
                  </div>
                  <h3 className="phila-card-title">
                    Google Business <br /> Profile optimization
                  </h3>
                </div>
                <p className="phila-card-desc">
                  Increase local visibility, improve Google Maps rankings, and
                  generate more calls from nearby customers actively searching
                  for trusted businesses.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <div className="phila-card">
                <div className="phila-card-top">
                  <div className="phila-card-icon">
                    <FaHandPointer />
                  </div>
                  <h3 className="phila-card-title">
                    Conversion rate <br /> optimization
                  </h3>
                </div>
                <p className="phila-card-desc">
                  Turn more website visitors into qualified leads through better
                  landing pages, stronger messaging, and improved user
                  experience design.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <div className="phila-card">
                <div className="phila-card-top">
                  <div className="phila-card-icon">
                    <FaFileAlt />
                  </div>
                  <h3 className="phila-card-title">
                    Content <br /> marketing
                  </h3>
                </div>
                <p className="phila-card-desc">
                  Attract ideal customers with strategic content that builds
                  trust, supports rankings, and helps convert traffic into
                  inquiries.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-4">
              <div className="phila-card">
                <div className="phila-card-top">
                  <div className="phila-card-icon">
                    <FaSearchPlus />
                  </div>
                  <h3 className="phila-card-title">
                    AI search <br /> visibility
                  </h3>
                </div>
                <p className="phila-card-desc">
                  Improve visibility across modern search platforms and future
                  AI-driven search results so customers can discover your
                  business faster.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="phila-sec-3">
        <Row>
          <Col lg={5}>
            <div className="phila-sec-3-img-cont">
              <Image
                src="/images/philadelphia/phila-digital/phila-img-2.jpg"
                fill
                alt="philadelphia digital marketing"
              ></Image>
            </div>
          </Col>

          <Col lg={7}>
            <div className="phila-sec-3-content">
              <h2 className="phila-sec-3-heading">
                Digital Marketing Agency in Philadelphia Focused on Real Growth
              </h2>

              <h3 className="phila-sec-3-sub-head">
                Most businesses invest in digital marketing but fail to see real
                results. Why? Because they focus on clicks, impressions, and
                traffic instead of leads, sales, and revenue growth.
              </h3>

              <div>
                <p className="phila-sec-3-descrp">
                  At Zonic Media, we take a different approach. As a
                  results-driven digital marketing agency in Philadelphia, we
                  build full-service marketing systems designed to generate
                  qualified leads, increase conversions, and create long-term
                  business growth.
                </p>
                <p className="phila-sec-3-descrp">
                  Whether you are a local service business, contractor, medical
                  practice, eCommerce brand, or growing company, our strategies
                  are built to deliver measurable outcomes—not vanity metrics.
                  We focus on what matters most: more calls, more customers, and
                  stronger ROI for Philadelphia businesses.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-sec-4">
        <h2 className="phila-sec-4-heading">
          Why Businesses in Philadelphia Need Digital Marketing
        </h2>

        <Row className="phila-sec-4-row">
          <Col lg={6}>
            <div className="phila-sec-4-box left">
              <p className="phila-sec-4-text">
                Philadelphia is a highly competitive business environment, where
                real success comes from a well-planned strategy, strong and
                consistent online visibility, and a clear advantage that sets
                you apart from your competitors.
              </p>

              <p className="phila-sec-4-sub">
                Customers are constantly searching online for:
              </p>

              <div className="phila-list">
                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Services</p>
                </div>

                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Products</p>
                </div>

                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Solutions</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="phila-sec-4-box right">
              <p className="phila-sec-4-text">
                If your business is not visible across Google Search, paid ads,
                Maps, and other digital channels, potential customers are
                choosing competitors instead.
              </p>

              <p className="phila-sec-4-sub">
                Digital marketing helps your business:
              </p>

              <div className="phila-list">
                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Get Discovered</p>
                </div>

                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Build Trust</p>
                </div>

                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Generate Leads</p>
                </div>

                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Convert More Customers</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-sec-5">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <h2 className="phila-sec-heading">
              Our Digital Marketing Strategy Framework
            </h2>
          </div>
        </div>

        <Row className="phila-strategy-row">
          <Col lg={3} className="phila-strategy-col">
            <div className="phila-strategy-card">
              <div className="phila-strategy-circle">
                <span className="phila-strategy-step">01</span>
                <i className="phila-strategy-icon">
                  <HiOutlinePresentationChartLine />
                </i>
              </div>

              <h4>Market & Competitor Analysis</h4>
              <p>
                We analyze your Philadelphia competitors to identify their
                strengths, weaknesses, keywords, and growth opportunities so we
                can position your business ahead of them.
              </p>
            </div>
          </Col>

          <Col lg={3} className="phila-strategy-col">
            <div className="phila-strategy-card">
              <div className="phila-strategy-circle">
                <span className="phila-strategy-step">02</span>
                <i className="phila-strategy-icon">
                  <LuShieldCheck />
                </i>
              </div>

              <h4>Channel Strategy Setup</h4>
              <p>
                We build high-performing SEO, Google Ads, local SEO, and content
                systems designed to increase visibility, generate qualified
                leads, and grow your business consistently.
              </p>
            </div>
          </Col>

          <Col lg={3} className="phila-strategy-col">
            <div className="phila-strategy-card">
              <div className="phila-strategy-circle">
                <span className="phila-strategy-step">03</span>
                <i className="phila-strategy-icon">
                  <LuSettings2 />
                </i>
              </div>

              <h4>Execution & Optimization</h4>
              <p>
                We continuously manage, improve, and optimize campaigns to
                deliver stronger rankings, better conversions, and long-term
                growth over time.
              </p>
            </div>
          </Col>

          <Col lg={3} className="phila-strategy-col">
            <div className="phila-strategy-card">
              <div className="phila-strategy-circle">
                <span className="phila-strategy-step">04</span>
                <i className="phila-strategy-icon">
                  <PiCrownSimple />
                </i>
              </div>

              <h4>Lead Tracking & Reporting</h4>
              <p>
                We track real business results including calls, leads,
                inquiries, and ROI so your growth stays clear, measurable, and
                data-driven.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-sec-6">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <p className="phila-label">WHY CHOOSE US</p>

            <h2 className="phila-sec-heading">Why Choose Zonic Media</h2>

            <p className="phila-sec-descrp">
              Choosing the right digital marketing agency in Philadelphia can
              directly impact your growth. At Zonic Media, we focus on
              strategies that generate real leads, stronger visibility, and
              measurable revenue growth, not empty metrics.
            </p>
          </div>
        </div>

        <div className="phila-sec-2-content-wrapper">
          <Row className="g-4">
            {PhilaWhyChooseCards.map((card) => (
              <Col lg={4} md={6} key={card.title}>
                <div className="phila-card">
                  <div className="phila-card-top">
                    <div className="phila-card-icon">{card.icon}</div>
                    <h3 className="phila-card-title">{card.title}</h3>
                  </div>
                  <p className="phila-card-desc">{card.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <Row className="phila-sec-6-row">
          {/* LEFT CARD */}
          <Col lg={6}>
            <div className="phila-sec-6-card left">
              <div className="phila-sec-6-top-icon gray">
                <FaBuilding />
              </div>

              <h4 className="phila-sec-6-title">Most Agencies Focus On</h4>

              <div className="phila-sec-6-features">
                <div className="phila-sec-6-feature">
                  <div className="icon gray">
                    <FaEye />
                  </div>
                  <p>Impression</p>
                </div>

                <div className="divider"></div>

                <div className="phila-sec-6-feature">
                  <div className="icon gray">
                    <FaMousePointer />
                  </div>
                  <p>Clicks</p>
                </div>

                <div className="divider"></div>

                <div className="phila-sec-6-feature">
                  <div className="icon gray">
                    <FaChartBar />
                  </div>
                  <p>Traffic</p>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT CARD */}
          <Col lg={6}>
            <div className="phila-sec-6-card right">
              <div className="phila-sec-6-top-icon yellow">
                <FaBullseye />
              </div>

              <h4 className="phila-sec-6-title">We Focus On</h4>

              <div className="phila-sec-6-main">
                <div className="icon yellow big">
                  <FaUsers />
                </div>

                <h5>Leads and Revenue</h5>
                <p>Real results that grow your business</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-sec-11">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper phila-sec-11-intro">
            <p className="phila-label">INDUSTRIES WE SERVE</p>
            <h2 className="phila-sec-heading">
              Industries We Help Grow in Philadelphia
            </h2>
            <p className="phila-sec-11-lead">
              Zonic Media works with businesses across Philadelphia that want
              more leads, stronger visibility, and measurable growth. Our
              digital marketing strategies are customized for each industry to
              attract the right customers and increase conversions.
            </p>
            <p className="phila-sec-11-lead">
              We help local service businesses, medical practices, legal firms,
              contractors, home service companies, eCommerce brands,
              restaurants, real estate companies, and professional service
              providers grow through SEO, Google Ads, web design, and lead
              generation systems.
            </p>
            <p className="phila-sec-11-lead">
              Whether you are a startup or an established company, we create
              strategies built around your goals, market competition, and target
              audience in Philadelphia.
            </p>
          </div>
        </div>

        <div className="phila-sec-11-panel">
          <div className="phila-sec-11-panel-head">
            <p className="phila-label">INDUSTRY FOCUS</p>
            <h3>Industries We Commonly Work With</h3>
          </div>

          <Row className="g-4">
            {PhilaIndustries.map((industry) => (
              <Col lg={6} key={industry.title}>
                <div className="phila-sec-11-card">
                  <div className="phila-sec-11-icon">{industry.icon}</div>
                  <div className="phila-sec-11-card-copy">
                    <h4>{industry.title}</h4>
                    <p>{industry.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="phila-sec-12">
        <div className="phila-sec-12-inner">
          <div className="phila-sec-12-copy">
            <p className="phila-label">LEAD GENERATION</p>
            <h2 className="phila-sec-heading">
              Get More Leads From Philadelphia Customers
            </h2>
            <p className="phila-sec-12-text">
              Customers search online every day for businesses they can trust.
              If your company is not visible when they are ready to buy,
              competitors are winning those opportunities first.
            </p>
            <p className="phila-sec-12-text">
              Our Philadelphia digital marketing strategies help your business
              rank higher, generate more calls, improve conversion rates, and
              build long-term brand authority. We combine SEO, Google Ads, local
              SEO, content marketing, and website optimization to create
              consistent growth.
            </p>
            <p className="phila-sec-12-text">
              Instead of relying on referrals or unpredictable traffic, we build
              systems that generate leads month after month. If you want more
              visibility, stronger ROI, and scalable growth, Zonic Media is
              ready to help.
            </p>
          </div>

          <div className="phila-sec-12-panel">
            <p className="phila-label">WHY IT MATTERS</p>
            <h3>Benefits of Working With Us</h3>

            <div className="phila-sec-12-benefits">
              {PhilaLeadBenefits.map((benefit) => (
                <div className="phila-sec-12-benefit" key={benefit.title}>
                  <div className="phila-sec-12-benefit-icon">
                    {benefit.icon}
                  </div>
                  <p>{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="phila-sec-7">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <h2 className="phila-sec-heading">
              Our Digital Marketing Services in Philadelphia
            </h2>
          </div>
        </div>

        <Row className="g-4">
          {/* CARD 1 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital/phila-digital-1.jpg"
                  alt="service"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-sec-7-overlay">
                <div className="phila-sec-7-head">
                  <div className="phila-sec-7-icon">
                    <FaBullhorn />
                  </div>
                  <h4>PPC Campaign Management</h4>
                </div>

                <p>
                  We run targeted Google Ads and paid campaigns that bring
                  immediate high-intent traffic, qualified leads, and measurable
                  ROI for your business.
                </p>

                <HashScrollLink
                  href="#phila-digital-contact-form"
                  className="phila-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>››</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          {/* CARD 2 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital/phila-digital-2.jpg"
                  alt="service"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-sec-7-overlay">
                <div className="phila-sec-7-head">
                  <div className="phila-sec-7-icon">
                    <FaChartLine />
                  </div>
                  <h4>Website Conversion Optimization</h4>
                </div>

                <p>
                  We optimize your website to increase conversions, reduce
                  bounce rates, improve user experience, and generate more calls
                  or inquiries.
                </p>

                <HashScrollLink
                  href="#phila-digital-contact-form"
                  className="phila-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>››</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          {/* CARD 3 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital/phila-digital-3.jpg"
                  alt="service"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-sec-7-overlay">
                <div className="phila-sec-7-head">
                  <div className="phila-sec-7-icon">
                    <FaSearch />
                  </div>
                  <h4>AI SEO Optimization</h4>
                </div>

                <p>
                  We prepare your business for AI search engines, ChatGPT
                  recommendations, voice search, and Google AI-powered search
                  results.
                </p>

                <HashScrollLink
                  href="#phila-digital-contact-form"
                  className="phila-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>››</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          {/* CARD 4 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital/phila-digital-4.jpg"
                  alt="service"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-sec-7-overlay">
                <div className="phila-sec-7-head">
                  <div className="phila-sec-7-icon">
                    <FaPenNib />
                  </div>
                  <h4>Content and Authority Building</h4>
                </div>

                <p>
                  We create strategic content that builds trust, improves
                  rankings, strengthens authority, and attracts qualified leads
                  consistently.
                </p>

                <HashScrollLink
                  href="#phila-digital-contact-form"
                  className="phila-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>››</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          {/* CARD 5 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital/phila-digital-5.jpg"
                  alt="service"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-sec-7-overlay">
                <div className="phila-sec-7-head">
                  <div className="phila-sec-7-icon">
                    <FaShareAlt />
                  </div>
                  <h4>Social Media Marketing</h4>
                </div>

                <p>
                  We create engaging campaigns and branded content that improve
                  visibility, grow engagement, and attract potential customers
                  online.
                </p>

                <HashScrollLink
                  href="#phila-digital-contact-form"
                  className="phila-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>››</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          {/* CARD 6 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital/phila-digital-6.jpg"
                  alt="service"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-sec-7-overlay">
                <div className="phila-sec-7-head">
                  <div className="phila-sec-7-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h4>Local SEO and Organic Growth</h4>
                </div>

                <p>
                  We help your business rank higher on Google Search and Maps to
                  generate consistent local traffic, calls, and organic leads.
                </p>

                <HashScrollLink
                  href="#phila-digital-contact-form"
                  className="phila-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>››</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-sec-8">
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

      <div className="phila-sec-9">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <h2 className="phila-sec-heading">
              Frequently Asked Questions About Digital Marketing in Philadelphia
            </h2>
          </div>
        </div>

        <div className="phila-sec-9-faq-wrapper">
          <GmbFaqs items={PhilaDigitalFaqs} columns={2} />
        </div>

        <Script
          id="phila-digital-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: PhilaDigitalFaqs.map((faq) => ({
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

      <div className="phila-sec-10">
        <div className="phila-sec-10-inner">
          <div className="phila-sec-10-content">
            <h2 className="phila-sec-10-heading">
              Looking to Grow Your Business with a Digital Marketing Agency in
              Philadelphia?
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media, a results-driven digital
              marketing agency serving Philadelphia businesses. Let’s build a
              custom strategy focused on more leads, stronger online visibility,
              and real business growth through SEO, Google Ads, web design, and
              full-service digital marketing.
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
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <LenisIframeGuard className="phila-sec-10-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.828947392318!2d-75.5245087!3d39.155871999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c76560e5bf48df%3A0x49d58c7e4301bcd!2sZonic%20Media!5e0!3m2!1sen!2sin!4v1777032391834!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zonic Media office location"
              />
            </LenisIframeGuard>
          </div>

          <div
            className="phila-sec-10-contact-form"
            id="phila-digital-contact-form"
          >
            <LeadContactForm
              leadFormTitle={PhilaDigitalFormHead.leadFormTitle}
              leadCallText={PhilaDigitalFormHead.leadCallText}
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
