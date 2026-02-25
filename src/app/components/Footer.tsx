import "@/app/style/footer.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-upper-content">
          <Row className="justify-content-between g-5 g-lg-0">
            <Col xs={12} lg={5}>
              <p className="footer-zonic-desc">
                Zonic Media is a results-driven digital agency creating
                user-friendly, effective solutions that strengthen brands, build
                trust, drive deliver consistent measurable growth, and support
                long-term business success globally.
              </p>

              <ul className="footer-contact-info">
                <li>
                  <FaPhone size={20} />
                  <Link href="#!">+1 (302) 244-5494 </Link>
                </li>
                <li>
                  <IoMdMail size={20} />
                  <Link href="#!"> contact@zonicllc.com </Link>
                </li>
                <li>
                  <FaLocationDot size={20} />
                  <Link href="#!">
                    8 The Green, STE B Dover Kent, DE 19901 United States
                  </Link>
                </li>
              </ul>
            </Col>

            <Col xs={12} lg={5}>
              <div className="footer-menus">
                <ul>
                  <li className="footer-menus-head">Services</li>
                  <li>
                    <Link href="#!">Web Design</Link>
                  </li>
                  <li>
                    <Link href="#!">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href="#!">Google My Business (GMB)</Link>
                  </li>
                  <li>
                    <Link href="#!">Pay Per Click (PPC)</Link>
                  </li>
                  <li>
                    <Link href="#!">Google Ads</Link>
                  </li>
                </ul>

                <ul>
                  <li className="footer-menus-head">Others</li>
                  <li>
                    <Link href="#!">About Us</Link>
                  </li>
                  <li>
                    <Link href="#!">Blogs</Link>
                  </li>
                  <li>
                    <Link href="#!">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#!">Services</Link>
                  </li>
                  <li>
                    <Link href="#!">Contact Us</Link>
                  </li>
                </ul>

                <ul>
                  <li className="footer-menus-head">Legal</li>
                  <li>
                    <Link href="#!">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="#!">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#!">Fair Use Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <div className="d-flex align-items-center flex-wrap justify-content-between">
            <div className="footer-socials">
              <ul>
                <li>
                  <Link href="#!">LinkedIn </Link>
                </li>
                <li>
                  <Link href="#!">facebook </Link>
                </li>
                <li>
                  <Link href="#!">instagram </Link>
                </li>
                <li>
                  <Link href="#!">pinterest </Link>
                </li>
              </ul>
            </div>

            <div className="footer-cta">
              <p>
                Let's work together <br />
                <Link href="#!">
                  Call Zonic Media <BsArrowUpRightCircle />
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Logo Marquee */}
        <div className="footer-logo d-lg-none">
          <Marquee>
            <div className="footer-logo-img-cont">
              <Image
                src="/images/footer-logo.svg"
                fill
                alt="zonic media logo"
              />
            </div>
          </Marquee>
        </div>

        {/* Desktop Logo Static */}
        <div className="footer-logo d-none d-lg-block">
          <div className="footer-logo-img-cont">
            <Image src="/images/footer-logo.svg" fill alt="zonic media logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
