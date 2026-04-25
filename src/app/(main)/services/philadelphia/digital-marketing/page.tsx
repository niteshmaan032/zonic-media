import "@/app/style/philadelphia.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import GmbFaqs from "@/app/components/GmbFaqs";
import LeadContactForm from "@/app/components/LeadContactForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import Image from "next/image";

import Link from "next/link";
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
} from "react-icons/fa";
import { FaArrowTrendUp, FaGoogle, FaHandPointer } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { LuCalendarCheck2, LuSettings2, LuShieldCheck } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiCrownSimple } from "react-icons/pi";
import { RiLineChartLine } from "react-icons/ri";
import Footer from "@/app/components/Footer";

const PhilaDigitalFaqs = [
  {
    question: "How long does local SEO take in Philadelphia?",
    answer:
      "Most businesses start seeing results within 3 to 6 months depending on competition.",
  },
  {
    question: "Can local SEO help small businesses compete in Philadelphia?",
    answer:
      "Yes. With the right strategy, small businesses can outrank larger competitors in local search.",
  },
  {
    question: "Is Google Maps ranking important?",
    answer:
      "Yes. Google Maps rankings generate the highest intent leads for local businesses.",
  },
  {
    question: "Do I need a website for local SEO?",
    answer: "Yes. A well optimized website supports rankings and conversions.",
  },
  {
    question: "Does local SEO work better than ads?",
    answer:
      "Local SEO provides long term sustainable results, while ads provide immediate traffic.",
  },
];

const PhilaDigitalFormHead = {
  leadFormTitle: "Get Your Free Local SEO Audit",
  leadCallText: (
    <>
      One call can help you get more local rankings, calls, and booked jobs.
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
            <Col lg={8} className="phila-sec-1-content-wrapper">
              <h1 className="phila-sec-1-heading">
                Digital Marketing Agency Philadelphia: Grow Your Business{" "}
                <span> Faster in 2026 </span>
              </h1>
              <p className="phila-sec-1-sub-head">
                Digital Marketing Agency Philadelphia | Zonic Media
              </p>
              <p className="phila-sec-1-descrp">
                Looking for a digital marketing agency in Philadelphia? Zonic
                Media helps businesses generate leads through SEO, PPC, and high
                converting strategies.
              </p>

              <div className="phila-sec-1-ctas">
                <Link href="/contact-us" className="buttons">
                  Get a Free Call
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

                <Link href="/contact-us" className="buttons">
                  Get a Quote
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

              <div className="phila-feature-grid">
                <div className="feature-card">
                  <div className="icon-box">
                    <MdOutlineLocationOn />
                  </div>
                  <p>RANK HIGHER ON GOOGLE this is test </p>
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
                  <p>SUSTAINABLE GROWTH THAT LAST</p>
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
              Modern digital marketing is not just one channel.It combines
              multiple system working together to drive growth.
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
                  long-term visibility.
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
                  Improve rankings, increase organic traffic, and build
                  long-term visibility.
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
                  Improve rankings, increase organic traffic, and build
                  long-term visibility.
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
                  Improve rankings, increase organic traffic, and build
                  long-term visibility.
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
                  Improve rankings, increase organic traffic, and build
                  long-term visibility.
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
                  Improve rankings, increase organic traffic, and build
                  long-term visibility.
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
                src="/images/philadelphia/phila-img-2.jpg"
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
                results. Why?
              </h3>

              <div>
                <p className="phila-sec-3-descrp">
                  Because they focus on traffic instead of conversions. <br />{" "}
                  At Zonic Media, we take a different approach. We build digital
                  marketing systems designed to generate leads, increase
                  revenue, and create long term growth for businesses in
                  Philadelphia.
                </p>
                <p className="phila-sec-3-descrp">
                  Whether you are a local service provider or a growing company,
                  our strategies are built to deliver measurable outcomes, not
                  just vanity metrics.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-sec-4">
        <h2 className="phila-sec-4-heading">
          Why Businesses in Philadelphia Need Digital Marketing:
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
                If your business isn&apos;t visible across search, ads, and
                digital channels, your competitors are capturing that demand and
                turning it into their growth.
              </p>

              <p className="phila-sec-4-sub">
                Digital marketing ensures your business:
              </p>

              <div className="phila-list">
                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Gets Discovered</p>
                </div>

                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Builds Trust</p>
                </div>

                <div className="phila-item">
                  <span className="phila-dot"></span>
                  <p>Converts visitors into customers</p>
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

              <h4>Market and Competitor Analysis</h4>
              <p>
                We analyze your competitors in Philadelphia to uncover their
                strategies, strengths, and gaps so we can position your business
                ahead of them with smarter.
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
                We build high-performing SEO, PPC, and content systems designed
                to drive traffic, generate leads, and grow your business
                consistently.
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

              <h4>Execution and Optimization</h4>
              <p>
                We continuously optimize and refine performance to drive better
                results, higher conversions, and sustained growth over time.
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

              <h4>Lead Tracking and Reporting</h4>
              <p>
                We track real business results measuring leads, calls, and
                revenue to ensure your growth is clear, consistent, and
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

            <h2 className="phila-sec-heading">
              What Makes Zonic Media Difference
            </h2>
          </div>
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
                  src="/images/philadelphia/phila-digital-1.jpg"
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
                  We run targeted paid campaigns that bring immediate high
                  intent traffic.
                </p>

                <Link href="#" className="phila-sec-7-link">
                  LEARN MORE <span>››</span>
                </Link>
              </div>
            </div>
          </Col>

          {/* CARD 2 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital-2.jpg"
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
                  bounce rates, and generate more inquiries.
                </p>

                <Link href="#" className="phila-sec-7-link">
                  LEARN MORE <span>››</span>
                </Link>
              </div>
            </div>
          </Col>

          {/* CARD 3 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital-3.jpg"
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
                  recommendations, and Google AI results.
                </p>

                <Link href="#" className="phila-sec-7-link">
                  LEARN MORE <span>››</span>
                </Link>
              </div>
            </div>
          </Col>

          {/* CARD 4 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital-4.jpg"
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
                  rankings, and attracts qualified leads.
                </p>

                <Link href="#" className="phila-sec-7-link">
                  LEARN MORE <span>››</span>
                </Link>
              </div>
            </div>
          </Col>

          {/* CARD 5 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital-5.jpg"
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
                  We create strategic content that builds trust, improves
                  engagement, and attracts qualified leads.
                </p>

                <Link href="#" className="phila-sec-7-link">
                  LEARN MORE <span>››</span>
                </Link>
              </div>
            </div>
          </Col>

          {/* CARD 6 */}
          <Col lg={4}>
            <div className="phila-sec-7-card">
              <div className="phila-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-digital-6.jpg"
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
                  We help your business rank on Google Search and Maps to
                  generate consistent organic leads.
                </p>

                <Link href="#" className="phila-sec-7-link">
                  LEARN MORE <span>››</span>
                </Link>
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
            <h2 className="phila-sec-heading">Frequently Asked Question</h2>
          </div>
        </div>

        <div className="phila-sec-9-faq-wrapper">
          <GmbFaqs items={PhilaDigitalFaqs} />
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
              Looking to grow your business in Philadelphia?
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media and let’s build a strategy
              that drives real results.
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
                  {SITE_CONTACT.address}
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

            <div className="phila-sec-10-map">
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
            </div>
          </div>

          <div className="phila-sec-10-contact-form">
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
