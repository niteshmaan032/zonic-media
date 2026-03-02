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
            <Col lg="6">
              <h1 className="service-page-section-1-heading">
                Our Digital Marketing Services
              </h1>
            </Col>

            <Col lg={6}>
              <p className="service-page-section-1-descrp">
                We provide end-to-end digital solutions designed to strengthen
                your brand, increase online visibility, and generate measurable
                <span>
                  {" "}
                  business growth through strategy, technology, and
                  performance-driven marketing.{" "}
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
                Google Business Profile Optimization
              </h3>

              <p className="service-page-section-3-descrp">
                Improve your local visibility and attract more customers through
                a fully optimized Google Business Profile. We enhance your
                listing to increase rankings, drive calls, and build credibility
                with customers actively searching for your services.
              </p>

              <ul className="service-page-section-3-key-points">
                <li> Profile setup & optimization </li>
                <li> Business information optimization</li>
                <li> Image & content enhancement </li>
                <li> Review strategy implementation</li>
              </ul>

              <Link
                className="service-page-section-3-link"
                href="/services/google-my-business"
              >
                Explore GBP Optimization
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
                Custom Web Development
              </h3>

              <p className="service-page-section-3-descrp">
                Build a website designed not just to look impressive but to
                perform. Our custom web development services focus on speed,
                user experience, and conversion optimization to help businesses
                attract visitors, build trust, and turn traffic into qualified
                leads across all digital platforms.
              </p>

              <ul className="service-page-section-3-key-points">
                <li> Custom website design & development </li>
                <li> Mobile-responsive optimization</li>
                <li> SEO-ready website structure </li>
                <li> Performance & speed optimization</li>
              </ul>

              <Link
                className="service-page-section-3-link"
                href="/services/web-design"
              >
                Explore Web Development
              </Link>
            </div>

            <div className="service-page-section-3-img-cont service-box-2-img">
              <Image src="/images/m-5.webp" fill alt="website design" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="service-page-section-3-box service-page-section-3-box-3">
            <div className="service-page-section-3-content">
              <h3 className="service-page-section-3-heading">
                Local SEO Services
              </h3>

              <p className="service-page-section-3-descrp">
                Increase your visibility in local search results and connect
                with customers near you. Our local SEO strategies improve search
                rankings, drive targeted traffic, and help businesses generate
                consistent leads organically.
              </p>

              <ul className="service-page-section-3-key-points">
                <li> Local keyword research</li>
                <li> On-page SEO optimization </li>
                <li> Citation building & consistency</li>
                <li> Local ranking strategy</li>
              </ul>

              <Link
                className="service-page-section-3-link"
                href="/services/local-seo"
              >
                Explore Local SEO
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
                Google Ads Management (PPC)
              </h3>

              <p className="service-page-section-3-descrp">
                Drive immediate traffic and high-quality leads with
                strategically managed Google Ads campaigns. Our PPC specialists
                create, optimize, and scale campaigns focused on maximizing
                conversions while reducing wasted ad spend.
              </p>

              <ul className="service-page-section-3-key-points">
                <li>Google Ads campaign setup</li>
                <li> Keyword targeting & bidding strategy</li>
                <li> Ad copy optimization</li>
                <li> Conversion tracking & reporting </li>
              </ul>

              <Link
                className="service-page-section-3-link"
                href="/services/google-ads"
              >
                Explore Google Ads Service
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
