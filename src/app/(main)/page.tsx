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
              local SEO, paid advertising, Google Business optimization, and
              creative design, all focused on driving real leads and revenue.
            </p>
          </Col>

          <Col xs={12}>
            <div className="home-sec1-buttons">
              <Link href="/contact-us" className="buttons">
                Get Free Strategy Call
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
              <span> Today’s Digital-First Market</span>
            </h2>
            <p className="home-sec3-descrp">
              In a world where customers search online before making decisions,
              your brand’s digital presence determines your growth. Zonic Media
              helps businesses stand out with strategic design, powerful SEO,
              and data-driven marketing campaigns that generate measurable
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
              From startup to enterprise, grow your business with
              <span> fast and creative designs! </span>
            </h2>
          </Col>

          <Col xs={12} lg={4}>
            <p className="home-sec4-descrp">
              Zonic Media is a fantastic design team, with a healthy blend of UI
              and UX skills. Highly recommended
            </p>
            <Link href="#" className="buttons">
              Book a call
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
              <h2 className="home-sec5-service-heading">Web Design </h2>
              <p className="home-sec5-service-descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>
            </div>
            <Link href="#!">Get your Website </Link>
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
                google my business (GMB)
              </h2>
              <p className="home-sec5-service-descrp">
                Get a fully optimized Google My Business profile that increases
                visibility and drives real local results. With accurate
                listings, compelling visuals, keyword optimization, and review
                management, your business attracts more customers, boosts calls
                and visits, builds trust, and strengthens your local online
                presence.
              </p>
            </div>
            <Link href="#!">grow your business </Link>
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
              <h2 className="home-sec5-service-heading">google Ads (PPC)</h2>
              <p className="home-sec5-service-descrp">
                Get high-performing Google Ads campaigns that drive real
                results. With smart targeting, compelling ad creatives,
                strategic keyword selection, and continuous optimization, we
                help you attract qualified traffic, maximize conversions, reduce
                wasted spend, and achieve measurable ROI faster.
              </p>
            </div>
            <Link href="#!">get more leads </Link>
          </div>
          <div className="home-sec5-service-img-cont">
            <Image
              src="/images/google-ads.webp"
              fill
              alt="web design"
              sizes="(max-width: 991.98px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="home-sec5-service-wrapper">
          <div className="home-sec5-service-content">
            <div>
              <h2 className="home-sec5-service-heading">local SEO</h2>
              <p className="home-sec5-service-descrp">
                Get high-performing Google Ads campaigns that drive real
                results. With smart targeting, compelling ad creatives,
                strategic keyword selection, and continuous optimization, we
                help you attract qualified traffic, maximize conversions, reduce
                wasted spend, and achieve measurable ROI faster.
              </p>
            </div>
            <Link href="#!">rank your business</Link>
          </div>
          <div className="home-sec5-service-img-cont">
            <Image
              src="/images/home-service-4.jpg"
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
              <h3>140+ International design awards</h3>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="home-sec6-card">
              <p> 02 </p>
              <h3>300%+ Average conversion uplift</h3>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="home-sec6-card">
              <p> 03 </p>
              <h3>$10B+ raisedUX-led launches </h3>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="home-sec6-card border-0">
              <p> 04 </p>
              <h3>100M+ Global users reached</h3>
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
