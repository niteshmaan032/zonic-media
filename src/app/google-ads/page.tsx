import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { PiShieldCheckBold } from "react-icons/pi";
import Image from "next/image";
import "../style/googleAds.css";
import ProcessSwiper from "../components/ProcessSwiper";
import WhyWork from "../components/WhyWork";
import Faqs from "../components/Faqs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function page() {
  return (
    <>
      {/* ads-section-1 */}
      <div className="ads-section-1">
        <Row className="justify-content-between h-100">
          <Col lg={6}>
            <div className="ads-section-1__content">
              {/* Optional badge/title (was in CSS but not used earlier) */}
              <div className="ads-section-1__title">
                <PiShieldCheckBold />
                Google Ads Specialists
              </div>

              <h1 className="ads-section-1__heading">
                Google Ads That Drive High-Intent Customers To Your Business
              </h1>

              <p className="ads-section-1__descrp">
                We help your business capture ready-to-buy traffic, appear at
                the top of paid search results, maximize ad spend efficiency,
                and{" "}
                <span> convert clicks into measurable revenue growth. </span>
              </p>

              <Link href="#" className="buttons">
                Request a Free Consultation
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

          <Col lg={6}>
            <div className="ads-section-1__img-cont">
              <Image src="/images/ad-1.png" fill alt="google ads" />
            </div>
          </Col>
        </Row>
      </div>

      {/* ads-section-2 */}
      <div className="ads-section-2">
        <Row className="justify-content-between">
          <Col lg={5}>
            <h2 className="ads-section-2__heading">
              Trusted Google Ads Across Industries
            </h2>

            <Link href="#" className="buttons">
              Request a Free Consultation
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

          <Col lg={6}>
            <div className="ads-section-2__descrp">
              <p>
                Whether you’re an{" "}
                <span>
                  HVAC technician, locksmith, roofer, health clinic, or home
                  service professional
                </span>
                , Zonic Media LLC helps businesses across industries recover
                suspended Google Business Profiles quickly and safely.
                <span>
                  {" "}
                  From plumbers, electricians, and landscapers to dentists, med
                  spas, realtors, auto repair shops, movers, and cleaning
                  companies{" "}
                </span>
                —we’ve helped local businesses regain visibility and customer
                trust without risking further penalties.
              </p>

              <p>
                A suspended Google Business Profile directly impacts your local
                visibility, incoming leads, and brand credibility. Lost rankings
                mean fewer calls, fewer visits, and missed revenue
                opportunities. At <span> Zonic Media LLC </span> , we understand
                how urgent reinstatement is—and why it must be handled correctly
                to avoid repeat suspensions or long-term damage.
              </p>

              <p>
                We specialize in reinstating Google Business Profiles for
                single-location businesses, multi-location brands, and
                service-area businesses alike.
                <span> No matter your industry </span> , if your profile is
                suspended, our experts follow Google’s latest 2025 policies to
                reinstate your listing efficiently and keep it fully compliant
                for long-term local success.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* ads-section-3 */}
      <div className="ads-section-3">
        <div className="ads-section-3__wrapper">
          {/* Box 1 */}
          <div className="ads-section-3__box ads-section-3__box--1">
            <div className="ads-section-3__content">
              <h3 className="ads-section-3__heading">custom web development</h3>

              <p className="ads-section-3__descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <ul className="ads-section-3__key-points">
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
              </ul>

              <Link className="ads-section-3__link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="ads-section-3__img-cont">
              <Image src="/images/ad-2.jpg" fill alt="website design" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="ads-section-3__box ads-section-3__box--2">
            <div className="ads-section-3__content">
              <h3 className="ads-section-3__heading">Custom UI/UX Design</h3>

              <p className="ads-section-3__descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <ul className="ads-section-3__key-points">
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
              </ul>

              <Link className="ads-section-3__link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="ads-section-3__img-cont">
              <Image src="/images/ad-3.svg" fill alt="website design" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="ads-section-3__box ads-section-3__box--3">
            <div className="ads-section-3__content">
              <h3 className="ads-section-3__heading">
                Responsive & Mobile Optimize Design
              </h3>

              <p className="ads-section-3__descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <ul className="ads-section-3__key-points">
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
                <li> Profile optimization </li>
              </ul>

              <Link className="ads-section-3__link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="ads-section-3__img-cont">
              <Image src="/images/ad-4.jpg" fill alt="website design" />
            </div>
          </div>
        </div>
      </div>

      {/* ads-section-4 */}
      <ProcessSwiper />

      {/* ads-section-5 */}
      <WhyWork />

      {/* ads-section-6 */}
      <Faqs />

      {/* ads-section-7 */}
      <ContactForm />

      {/* ads-section-8 */}
      <Footer />
    </>
  );
}

export default page;
