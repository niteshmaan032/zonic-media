import "@/app/style/roofingLanding.css";
import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";

function page() {
  return (
    <>
      <div className="roofing-sec-1">
        <Col xs={12} lg={7}>
          <div className="roofing-sec-1-content">
            <h1>
              Get More Roofing Leads Every Month With
              <span> Proven Local SEO </span>
            </h1>
            <p>
              If your roofing company is not showing up when homeowners search
              on Google, you are losing high value jobs to competitors every
              day.
            </p>
            <p>
              Zonic Media helps roofing companies rank higher on Google,
              dominate local search, and consistently generate calls from
              homeowners ready to hire.
            </p>
            <Link href="/contact-us" className="buttons">
              Get Your Free Roofing SEO Audit Today
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
      </div>

      <div className="roofing-sec-2">
        <Row>
          <Col xs={12} lg={6}>
            <div className="roof-img-container">
              <Image
                src="/images/roofing/roof-img-2.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="roofing-sec-content">
              <h2 className="roofing-sec-heading">
                Struggling to Get Consistent Roofing Leads?
              </h2>
              <p className="roofing-sec-descrp">
                Most roofing contractors face the same challenges:
              </p>
              <ul className="roofing-sec-list">
                <li>
                  <FaCircle />
                  Not ranking on Google Maps for roofing searches
                </li>
                <li>
                  <FaCircle />
                  Competitors getting more calls and jobs
                </li>
                <li>
                  <FaCircle />
                  Relying too much on referrals or lead platforms
                </li>
                <li>
                  <FaCircle />
                  Inconsistent flow of estimates and bookings
                </li>
              </ul>
              <p className="roofing-sec-descrp">
                If this sounds familiar, your problem is not demand, it is
                visibility.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="roofing-sec-3">
        <Row>
          <Col xs={12} lg={6}>
            <div className="roofing-sec-content">
              <h2 className="roofing-sec-heading">
                Struggling to Get Consistent Roofing Leads?
              </h2>
              <p className="roofing-sec-descrp">
                Most roofing contractors face the same challenges:
              </p>
              <ul className="roofing-sec-list">
                <li>
                  <FaCircle />
                  Not ranking on Google Maps for roofing searches
                </li>
                <li>
                  <FaCircle />
                  Competitors getting more calls and jobs
                </li>
                <li>
                  <FaCircle />
                  Relying too much on referrals or lead platforms
                </li>
                <li>
                  <FaCircle />
                  Inconsistent flow of estimates and bookings
                </li>
              </ul>
              <p className="roofing-sec-descrp">
                If this sounds familiar, your problem is not demand, it is
                visibility.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="roof-img-container">
              <Image
                src="/images/roofing/roof-img-4.svg"
                fill
                alt="roofing seo"
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default page;
