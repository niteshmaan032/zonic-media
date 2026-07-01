import "@/app/style/footer.css";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { MdCopyright } from "react-icons/md";
import {
  SITE_CONTACT,
  SITE_PATHS,
  SITE_SOCIAL_LINKS,
} from "@/shared/siteConfig";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-upper-content">
          <Row className="justify-content-between g-5 g-lg-0">
            <Col xs={12} lg={5}>
              <p className="footer-zonic-desc">
                Zonic Media is a results-driven digital marketing agency in
                Dover, Delaware providing web design, local SEO, Google Business
                Profile optimization, and PPC services for businesses across the
                United States. We create user-friendly digital experiences that
                strengthen brands, increase visibility, generate leads, and
                deliver long-term measurable growth.
              </p>

              <ul className="footer-contact-info">
                <li>
                  <FaPhone size={20} />
                  <Link href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </Link>
                </li>
                <li>
                  <IoMdMail size={20} />
                  <Link href={SITE_CONTACT.emailHref}>
                    {SITE_CONTACT.email}
                  </Link>
                </li>
                <li>
                  <FaLocationDot size={20} />
                  <Link
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE_CONTACT.address}
                  </Link>
                </li>
                <li>
                  <FaRegClock size={20} />
                  <span>Mon – Fri &nbsp;|&nbsp; 9 AM – 5 PM</span>
                </li>
              </ul>
            </Col>

            <Col xs={12} lg={5}>
              <div className="footer-menus">
                <ul>
                  <li className="footer-menus-head">Services</li>
                  <li>
                    <Link href="/services/web-design">Web Design</Link>
                  </li>

                  <li>
                    <Link href="/services/gmb-reinstatement-help">
                      Google My Business (GMB)
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/google-ads">Pay Per Click (PPC)</Link>
                  </li>
                  <li>
                    <Link href="/services/local-seo-for-home-services">
                      Local SEO
                    </Link>
                  </li>
                </ul>

                <ul>
                  <li className="footer-menus-head">Others</li>
                  <li>
                    <Link href={SITE_PATHS.about}>About Us</Link>
                  </li>
                  <li>
                    <Link href={SITE_PATHS.blogs}>Blogs</Link>
                  </li>
                  {/* <li>
                    <Link href="#!">Pricing</Link>
                  </li> */}
                  <li>
                    <Link href={SITE_PATHS.services}>Services</Link>
                  </li>
                  <li>
                    <Link href={SITE_PATHS.contact}>Contact Us</Link>
                  </li>
                </ul>

                <ul>
                  <li className="footer-menus-head">Legal</li>
                  <li>
                    <Link href={SITE_PATHS.terms}>Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href={SITE_PATHS.privacy}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href={SITE_PATHS.refund}>Refund Policy</Link>
                  </li>
                  {/* <li>
                    <Link href={SITE_PATHS.legalPlaceholder}>
                      Fair Use Policy
                    </Link>
                  </li> */}
                </ul>
                <div></div>
              </div>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <iframe
                  className="footer-clutch-badge mt-4"
                  width="85"
                  height="85"
                  loading="eager"
                  src="https://clutch.co/share/badges/2617344/11431?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                  title="Top Clutch Digital Marketing Company Delaware 2026"
                ></iframe>
                <div className="mt-4">
                  <a
                    href="https://businessfirms.co/company/zonic-media"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      height="85"
                      width="85"
                      alt="company widget"
                      src="https://businessfirms.co/images/bfirms-certified.png"
                    />
                  </a>
                </div>
                <Image
                  className="footer-yelp-badge mt-4"
                  width={85}
                  height={85}
                  src="/images/Partner.png"
                  alt="Yelp Advertising Partner"
                />
              </div>
            </Col>
          </Row>

          <div className="d-flex align-items-center flex-wrap justify-content-between">
            <div className="footer-socials">
              <ul>
                {SITE_SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-cta">
              <p>
                Let&apos;s work together <br />
                <Link href={SITE_CONTACT.bookCallHref}>
                  Contact Zonic Media <BsArrowUpRightCircle />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright mt-4 ">
          <p className="text-white d-flex align-item-center gap-1 justify-content-lg-end">
            <MdCopyright /> 2026 . All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
