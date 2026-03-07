import Link from "next/link";
import "./page.css";
import ImageMarquee from "@/app/components/ImageMarquee";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import Image from "next/image";
import Testimonials from "@/app/components/Testimonials";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import { Row, Col } from "react-bootstrap";
import WorldMap from "@/app/components/WorldMap";
import { GoDotFill } from "react-icons/go";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Digital Marketing Agency | Web Design, SEO & PPC Services | Zonic Media",
  description:
    "Zonic Media provides web design, local SEO, Google Business Profile optimization, and PPC services to help businesses grow online. Call (302) 244-5494 today.",
};

export default function Home() {
  return (
    <>
      {/*home-section-1*/}
      <div className="home-section-1">
        <Row className="align-items-end justify-content-between">
          <Col xs={12} lg={8}>
            <p className="home-sec1-subtitle">
              Zonic Media your growth partner for your business
            </p>
            <h1 className="home-sec1-heading">
              From Website to Rankings to Ads, We{" "}
              <span>Grow Your Business Online</span>
            </h1>
          </Col>

          <Col xs={12} lg={3}>
            <p className="home-sec1-descrp">
              Zonic Media helps businesses scale with high converting websites,
              local SEO, paid advertising.
            </p>
          </Col>

          <Col xs={12}>
            <div className="home-sec1-buttons">
              <Link
                href="https://calendar.app.google/EGNcQQMvMU3DGP5R6"
                target="blank"
                className="buttons"
              >
                Book a Strategy Call
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

              <Link href="/services" className="buttons">
                Our Services
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
          </Col>
        </Row>
      </div>

      {/*home-section-2*/}
      <div className="home-section-2 margin-box">
        <ImageMarquee />
      </div>

      {/*home-section-3*/}
      <div className="home-section-3 margin-box">
        <Row className="justify-content-between">
          <Col xs={12} lg={4}>
            <FaArrowRight className="d-none d-lg-block" size={40} />
            <FaArrowDown className="d-block d-lg-none mb-4" size={36} />
          </Col>

          <Col xs={12} lg={7}>
            <h2 className="home-sec3-heading">
              We Position Your Brand to Win in{" "}
              <span> Today&apos;s Digital-First Market</span>
            </h2>
            <p className="home-sec3-descrp">
              In a world where customers search online before making decisions,
              your brand&apos;s digital presence determines your growth. Zonic
              Media helps businesses stand out with strategic design, powerful
              SEO, and data-driven marketing campaigns that generate measurable
              results.
            </p>
            <p className="home-sec3-descrp">
              We combine creative design with performance marketing to build a
              strong online presence that attracts, converts, and retains
              customers.
            </p>
            <p className="home-sec3-descrp">
              From local businesses to national brands, we create digital
              strategies that drive long-term growth and predictable leads.
            </p>
          </Col>
        </Row>

        <Row className="info-card-row">
          <Col xs={12} lg={4}>
            <div className="info-card">
              <h3> Discover</h3>
              <h4> (strategy & research) </h4>
              <p>
                We begin by understanding your business, target audience, and
                competitors. Our team conducts in-depth keyword research, market
                analysis, and conversion audits to build a strategy designed to
                generate leads and revenue.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="info-card">
              <h3> Design</h3>
              <h4> ( Branding, Website & Content )</h4>
              <p>
                Our designers and developers create fast, mobile-responsive,
                SEO-optimized websites and brand assets that improve user
                experience and increase conversions.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="info-card">
              <h3> Deliver</h3>
              <h4> (Launch, Optimize & Scale ) </h4>
              <p>
                We launch, optimize, and scale your digital presence through
                performance-driven strategies to deliver measurable growth and
                long-term business results.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/*home-section-4*/}
      <div className="home-section-4">
        <Row className="align-items-center justify-content-between">
          <Col xs={12} lg={7}>
            <h2 className="home-sec4-heading">
              From startups to established brands, accelerate your growth with
              high-converting,
              <span> performance-driven digital solutions.</span>
            </h2>
          </Col>

          <Col xs={12} lg={4}>
            <p className="home-sec4-descrp">
              Zonic Media delivers expert UI/UX design combined with
              results-focused marketing strategies. Highly trusted by growing
              businesses.
            </p>
            <Link
              href="https://calendar.app.google/EGNcQQMvMU3DGP5R6"
              target="blank"
              className="buttons"
            >
              Book a Strategy Call
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
          </Col>
        </Row>
      </div>

      {/*home-section-5*/}

      <div className="home-section-5">
        <div className="home-sec5-service-wrapper">
          <div className="home-sec5-service-content">
            <div>
              <h2 className="home-sec5-service-heading">
                Web Design & Development
              </h2>
              <p className="home-sec5-service-descrp">
                Get a high-performing website designed to convert visitors into
                customers. Our websites are fast, mobile-friendly, SEO-ready,
                and built for long-term growth.
              </p>

              <ul className="home-sec5-list">
                <li>
                  <GoDotFill size={16} />
                  Business Websites
                </li>
                <li>
                  <GoDotFill size={16} />
                  Landing Pages
                </li>
                <li>
                  <GoDotFill size={16} />
                  WordPress Websites
                </li>
                <li>
                  <GoDotFill size={16} />
                  Conversion-Focused Design
                </li>
                <li>
                  <GoDotFill size={16} />
                  SEO-Friendly Development
                </li>
              </ul>
            </div>
            <Link href="/services/web-design">view web design service </Link>
          </div>
          <div className="home-sec5-service-img-cont">
            <Image
              src="/images/home-service-1.webp"
              fill
              alt="web design"
              sizes="(max-width: 991.98px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="home-sec5-service-wrapper">
          <div className="home-sec5-service-content">
            <div>
              <h2 className="home-sec5-service-heading">
                Google Business Profile Optimization
              </h2>
              <p className="home-sec5-service-descrp">
                We optimize your Google Business Profile to improve local
                rankings, increase calls, and drive more customers.
              </p>
              <ul className="home-sec5-list list-white">
                <li>
                  <GoDotFill size={16} />
                  Profile Optimization
                </li>
                <li>
                  <GoDotFill size={16} />
                  Keyword Targeting
                </li>
                <li>
                  <GoDotFill size={16} />
                  Review Strategy
                </li>
                <li>
                  <GoDotFill size={16} />
                  Local Ranking Improvements
                </li>
                <li>
                  <GoDotFill size={16} />
                  Ongoing Updates
                </li>
              </ul>
            </div>
            <Link href="/services/google-my-business">
              View GMB optimization service{" "}
            </Link>
          </div>
          <div className="home-sec5-service-img-cont">
            <Image
              src="/images/home-service-2.webp"
              fill
              alt="web design"
              sizes="(max-width: 991.98px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="home-sec5-service-wrapper">
          <div className="home-sec5-service-content">
            <div>
              <h2 className="home-sec5-service-heading">Google Ads (PPC)</h2>
              <p className="home-sec5-service-descrp">
                Generate instant leads with high-converting Google Ads campaigns
                managed by experienced PPC specialists.
              </p>
              <ul className="home-sec5-list list-white">
                <li>
                  <GoDotFill size={16} />
                  Campaign Setup
                </li>
                <li>
                  <GoDotFill size={16} />
                  Keyword Targeting
                </li>
                <li>
                  <GoDotFill size={16} />
                  Conversion Tracking
                </li>
                <li>
                  <GoDotFill size={16} />
                  Ad Optimization
                </li>
                <li>
                  <GoDotFill size={16} />
                  ROI Tracking
                </li>
              </ul>
            </div>
            <Link href="/services/google-ads">
              view google ads (PPC) service{" "}
            </Link>
          </div>
          <div className="home-sec5-service-img-cont">
            <Image
              src="/images/ad-4.jpg"
              fill
              alt="web design"
              sizes="(max-width: 991.98px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="home-sec5-service-wrapper">
          <div className="home-sec5-service-content">
            <div>
              <h2 className="home-sec5-service-heading">Local SEO Services</h2>
              <p className="home-sec5-service-descrp">
                Rank higher in Google Maps and local search results with our
                data-driven local SEO strategies.
              </p>
              <ul className="home-sec5-list list-white">
                <li>
                  <GoDotFill size={16} />
                  Rank in Local Searches
                </li>
                <li>
                  <GoDotFill size={16} />
                  Get More Calls
                </li>
                <li>
                  <GoDotFill size={16} />
                  Increase Website Traffic
                </li>
                <li>
                  <GoDotFill size={16} />
                  Generate Qualified Leads
                </li>
              </ul>
            </div>
            <Link href="/services/local-seo">view local SEO service</Link>
          </div>
          <div className="home-sec5-service-img-cont">
            <Image
              src="/images/seo-4.jpg"
              fill
              alt="web design"
              sizes="(max-width: 991.98px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/*home-section-6*/}
      <div className="home-section-6 marign-box">
        <h2 className="home-sec6-heading">
          Recognized for
          <span>
            Delivering
            <Image
              src="/images/icon.png"
              width={95}
              height={90}
              alt="zonic icon"
            />
            {""} Results
          </span>
        </h2>

        {/* Updated Row and Cols */}
        <Row className="home-sec6-row">
          <Col xs={12} lg={3}>
            <div className="home-sec6-card">
              <p> 01 </p>
              <h3>95+ proven growth strategies implemented</h3>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="home-sec6-card">
              <p> 02 </p>
              <h3>Up to 300% higher conversion rates achieved</h3>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="home-sec6-card">
              <p> 03 </p>
              <h3>200%+ increase in online visibility for clients</h3>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="home-sec6-card border-0">
              <p> 04 </p>
              <h3>90% long-term client retention rate</h3>
            </div>
          </Col>
        </Row>
      </div>

      {/*world-map*/}
      <WorldMap />

      {/*home-section-7*/}
      <div className="home-section-7">
        <h2 className="testimonial-heading">
          Hear what our clients say about
          <span> working with Zonic Media.</span>
        </h2>
        <Testimonials />
      </div>

      {/*home-section-8 contact-form*/}
      <ContactForm />

      {/*home-section-9 footer*/}
      <Footer />
    </>
  );
}
