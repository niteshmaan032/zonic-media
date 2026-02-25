import { Row, Col } from "react-bootstrap";
import "./services-page.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

function page() {
  return (
    <>
      {/* service-page-section-1 */}
      <div className="service-page-section-1">
        <div className="service-page-section-1-content">
          <Row className="justify-content-between align-items-start ">
            <Col xs="auto">
              <h1 className="service-page-section-1-heading">Our Services</h1>
            </Col>

            <Col lg={6}>
              <p className="service-page-section-1-descrp">
                We deliver end-to-end digital services designed to grow your
                brand,
                <span>
                  increase visibility, and drive real, measurable business
                  results online.
                </span>
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
      </div>

      {/* service-page-section-3 */}
      <div className="service-page-section-3">
        <div className="service-page-section-3-wrapper">
          {/* Box 1 */}
          <div className="service-page-section-3-box service-page-section-3-box-1">
            <div className="service-page-section-3-content">
              <h3 className="service-page-section-3-heading">
                custom web development
              </h3>

              <p className="service-page-section-3-descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <ul className="service-page-section-3-key-points">
                <li> optimization </li>
                <li> Profile optimization </li>
                <li> optimization </li>
                <li> Profile optimization </li>
              </ul>

              <Link className="service-page-section-3-link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="service-page-section-3-img-cont">
              <Image
                src="/images/home-service-2.webp"
                fill
                alt="website design"
              />
            </div>
          </div>

          {/* Box 2 */}
          <div className="service-page-section-3-box service-page-section-3-box-2">
            <div className="service-page-section-3-content">
              <h3 className="service-page-section-3-heading">
                Custom UI/UX Design
              </h3>

              <p className="service-page-section-3-descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <ul className="service-page-section-3-key-points">
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
              </ul>

              <Link className="service-page-section-3-link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="service-page-section-3-img-cont">
              <Image src="/images/m-5.webp" fill alt="website design" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="service-page-section-3-box service-page-section-3-box-3">
            <div className="service-page-section-3-content">
              <h3 className="service-page-section-3-heading">
                Responsive & Mobile Optimize Design
              </h3>

              <p className="service-page-section-3-descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <ul className="service-page-section-3-key-points">
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
              </ul>

              <Link className="service-page-section-3-link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="service-page-section-3-img-cont">
              <Image src="/images/local-seo.webp" fill alt="website design" />
            </div>
          </div>

          {/* Box 4 */}
          <div className="service-page-section-3-box service-page-section-3-box-4">
            <div className="service-page-section-3-content">
              <h3 className="service-page-section-3-heading">
                Responsive & Mobile Optimize Design
              </h3>

              <p className="service-page-section-3-descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <ul className="service-page-section-3-key-points">
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
              </ul>

              <Link className="service-page-section-3-link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="service-page-section-3-img-cont">
              <Image src="/images/ad-4.jpg" fill alt="website design" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
