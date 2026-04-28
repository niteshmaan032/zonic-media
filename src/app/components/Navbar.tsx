"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug, FaFan, FaTooth, FaWrench } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { IoDesktopOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import { MdRoofing } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { SiGoogleads } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "@/app/style/navbar.css";
import { SITE_PATHS, SITE_SOCIAL_LINKS } from "@/shared/siteConfig";

const services = [
  {
    id: "gmb",
    label: "google my business (GMB)",
    image: "/images/header-gmb.webp",
    alt: "google my business",
    link: "/services/google-my-business",
  },
  {
    id: "web",
    label: "web design",
    image: "/images/header-web.webp",
    alt: "web design",
    link: "/services/web-design",
  },
  {
    id: "seo",
    label: "local SEO",
    image: "/images/header-seo.webp",
    alt: "local seo",
    link: "/services/local-seo-for-home-services",
  },
  {
    id: "ppc",
    label: "Google ADS (PPC)",
    image: "/images/header-ad-2.webp",
    alt: "google ads",
    link: "/services/google-ads",
  },
];

const gmbServiceLinks = [
  {
    id: "gmb-reinstatement-help",
    label: "GMB Reinstatement",
    link: "/services/gmb-reinstatement-help",
  },
  {
    id: "gmb-verification-help",
    label: "GMB Verification Help",
    link: "/services/gmb-verification-help",
  },
  {
    id: "gmb-optimization",
    label: "GMB Optimization",
    link: "/services/gmb-optimization",
  },
];

const localSeoServices = [
  {
    id: "Roofing SEO",
    label: "Roofing Local SEO",
    image: "/images/roofing/roof-link-thumb.jpg",
    alt: "roofing agency seo",
    link: "/roofing-seo-services",
  },
  {
    id: "Dentist SEO",
    label: "Dentist Local SEO",
    image: "/images/dental/dental-link-thumb.jpg",
    alt: "dentist seo",
    link: "/dentist-seo-services",
  },
  {
    id: "Hvac SEO",
    label: "HVAC Local SEO",
    image: "/images/hvac/hvac-link-thumb.jpg",
    alt: "hvac-seo",
    link: "/hvac-seo-services",
  },
  {
    id: "Plumber SEO",
    label: "Plumber Local SEO",
    image: "/images/plumber/plumber-link-thumb.jpg",
    alt: "plumber seo",
    link: "/plumber-seo-services",
  },
  {
    id: "Pest SEO",
    label: "Pest Control Local SEO",
    image: "/images/pest/pest-thumb-link.jpg",
    alt: "pest control seo",
    link: "/pest-seo-services",
  },
];

const industryLinks = [
  {
    id: "real-estate",
    title: "Real Estate SEO",
    description:
      "SEO and lead generation strategies built for agents, teams, and brokerages.",
    link: "/services/industry/real-estate-seo-services",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const forceWhiteNavbar =
    pathname === "/services/philadelphia/digital-marketing" ||
    pathname === "/services/philadelphia/local-seo" ||
    pathname === "/services/industry/real-estate-seo-services";
  // const [showNavbar, setShowNavbar] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const [, setScrollDownDistance] = useState(0);
  // const [, setScrollUpDistance] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [accordionKey, setAccordionKey] = useState<string | null>(null);
  const [mobileServicesNestedKey, setMobileServicesNestedKey] = useState<
    string | null
  >(null);
  const isFirstPathnameRenderRef = useRef(true);
  const mobileOpenRef = useRef(mobileOpen);
  const closeMenuFrameRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  useEffect(() => {
    if (isFirstPathnameRenderRef.current) {
      isFirstPathnameRenderRef.current = false;
      return;
    }

    if (!mobileOpenRef.current) {
      return;
    }

    closeMenuFrameRef.current = window.requestAnimationFrame(() => {
      setMobileOpen(false);
      setAccordionKey(null);
    });

    return () => {
      if (closeMenuFrameRef.current !== null) {
        window.cancelAnimationFrame(closeMenuFrameRef.current);
        closeMenuFrameRef.current = null;
      }
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeMenuFrameRef.current !== null) {
        window.cancelAnimationFrame(closeMenuFrameRef.current);
      }
    };
  }, []);

  const handleToggleMobileMenu = (isOpen: boolean) => {
    setMobileOpen(isOpen);
    if (!isOpen) {
      setAccordionKey(null);
      setMobileServicesNestedKey(null);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      /*
      if (mobileOpen) {
        setShowNavbar(true);
        return;
      }
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY < 80) {
        setShowNavbar(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (diff > 0) {
        setScrollDownDistance((prev) => {
          const newDown = prev + diff;
          if (newDown > 80) setShowNavbar(false);
          return newDown;
        });
        setScrollUpDistance(0);
      } else {
        setScrollUpDistance((prev) => {
          const newUp = prev + Math.abs(diff);
          if (newUp > 120) setShowNavbar(true);
          return newUp;
        });
        setScrollDownDistance(0);
      }
      setLastScrollY(currentScrollY);
      */
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`navbar-wrapper show ${scrolled ? "scrolled" : ""} ${forceWhiteNavbar ? "force-white" : ""}`}
      >
        <Container fluid className="p-0">
          <Row className="align-items-center justify-content-between g-0">
            <Col xs="auto">
              <Link href="/">
                <Image
                  src="/images/logo.webp"
                  width={132}
                  height={50}
                  alt="logo"
                  className="logo-img"
                  priority
                />
              </Link>
            </Col>

            <Col className="d-none d-lg-block">
              <nav className="menu-items">
                <ul>
                  <li className="services-dropdown">
                    <Link href={SITE_PATHS.services}>
                      Services <MdArrowOutward size={16} />
                    </Link>
                    <div className="services-dropdown-container services-core-dropdown">
                      <div className="services-core-label">Core Services</div>

                      <div className="services-core-grid services-main-grid">
                        <Link
                          href="/services/web-design"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <IoDesktopOutline />
                          </span>
                          <span className="services-core-content">
                            <strong>Web Design</strong>
                            <span>
                              Conversion-focused websites built to give your
                              business a polished online presence.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/services/google-ads"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <SiGoogleads />
                          </span>
                          <span className="services-core-content">
                            <strong>Google Ads</strong>
                            <span>
                              Paid campaigns designed to bring qualified leads
                              and faster visibility.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/services/local-seo-for-home-services"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <RiMapPinLine />
                          </span>
                          <span className="services-core-content">
                            <strong>Local SEO</strong>
                            <span>
                              Local search strategies that help service
                              businesses rank and generate consistent calls.
                            </span>
                          </span>
                        </Link>

                        <div className="services-core-card services-core-card--with-tags">
                          <span className="services-core-icon">
                            <FaStore />
                          </span>
                          <span className="services-core-content">
                            <strong>Google My Business</strong>
                            <span>
                              Profile setup, recovery, and optimization to help
                              customers find you locally.
                            </span>

                            <span className="services-core-tags">
                              {gmbServiceLinks.map((gmbLink) => (
                                <Link
                                  key={gmbLink.id}
                                  href={gmbLink.link}
                                  className="services-core-tag"
                                >
                                  {gmbLink.label}
                                </Link>
                              ))}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="services-core-divider" />

                      <div className="services-core-bottom">
                        <p className="services-core-bottom-copy">
                          Let&apos;s Start a project with{" "}
                          <strong>Zonic Media</strong>
                        </p>

                        <Link href="/contact-us" className="services-core-cta">
                          Get Started Today
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="services-dropdown">
                    <Link href={SITE_PATHS.seo}>
                      Local SEO <MdArrowOutward size={16} />
                    </Link>

                    <div className="services-dropdown-container services-core-dropdown local-seo-core-dropdown">
                      <div className="services-core-label">
                        Local SEO Services
                      </div>

                      <div className="services-core-grid local-seo-core-grid">
                        <Link
                          href="/roofing-seo-services"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <MdRoofing />
                          </span>
                          <span className="services-core-content">
                            <strong>Roofing Local SEO</strong>
                            <span>
                              Help roofing companies rank locally and turn
                              search traffic into booked estimates.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/dentist-seo-services"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <FaTooth />
                          </span>
                          <span className="services-core-content">
                            <strong>Dentist Local SEO</strong>
                            <span>
                              Improve map visibility and patient leads for
                              dental practices in competitive markets.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/hvac-seo-services"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <FaFan />
                          </span>
                          <span className="services-core-content">
                            <strong>HVAC Local SEO</strong>
                            <span>
                              Generate more calls for heating and cooling
                              services with stronger local rankings.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/plumber-seo-services"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <FaWrench />
                          </span>
                          <span className="services-core-content">
                            <strong>Plumber Local SEO</strong>
                            <span>
                              Build consistent local visibility that helps
                              plumbing businesses win urgent service calls.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href="/pest-seo-services"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <FaBug />
                          </span>
                          <span className="services-core-content">
                            <strong>Pest Control Local SEO</strong>
                            <span>
                              Reach nearby homeowners searching for fast pest
                              control help and recurring service plans.
                            </span>
                          </span>
                        </Link>
                      </div>

                      <div className="services-core-divider" />

                      <div className="services-core-bottom">
                        <p className="services-core-bottom-copy">
                          Grow your local rankings with{" "}
                          <strong>Zonic Media</strong>
                        </p>

                        <Link href="/contact-us" className="services-core-cta">
                          Get Started Today
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="/services/gmb-reinstatement-help">
                      GMB Reinstatement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/launchpad"
                      className="nav-link-with-icon"
                    >
                      <HiMiniRocketLaunch />
                      <span>Launchpad</span>
                    </Link>
                  </li>
                  <li className="services-dropdown">
                    <span className="nav-link-with-icon">
                      Locations <MdArrowOutward size={16} />
                    </span>

                    <div className="services-dropdown-container services-core-dropdown areas-core-dropdown">
                      <div className="services-core-label">Locations</div>

                      <div className="services-core-grid areas-core-grid">
                        <div className="services-core-card services-core-card--with-tags">
                          <span className="services-core-icon">
                            <MdOutlineLocationOn />
                          </span>
                          <span className="services-core-content">
                            <strong>
                              <Link
                                href="/services/philadelphia/digital-marketing"
                                className="services-core-title-link"
                              >
                                Digital Marketing Agency in Philadelphia
                              </Link>
                            </strong>
                            <span>
                              Explore our upcoming local market pages and city-
                              focused service coverage.
                            </span>

                            <span className="services-core-tags">
                              <Link
                                href="/services/philadelphia/local-seo"
                                className="services-core-tag"
                              >
                                Local SEO Agency Philadelphia
                              </Link>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="services-dropdown">
                    <span className="nav-link-with-icon">
                      Industries <MdArrowOutward size={16} />
                    </span>

                    <div className="services-dropdown-container services-core-dropdown areas-core-dropdown">
                      <div className="services-core-label">Industries</div>

                      <div className="services-core-grid areas-core-grid">
                        {industryLinks.map((industry) => (
                          <div
                            className="services-core-card services-core-card--with-tags"
                            key={industry.id}
                          >
                            <span className="services-core-icon">
                              <FaStore />
                            </span>
                            <span className="services-core-content">
                              <strong>
                                <Link
                                  href={industry.link}
                                  className="services-core-title-link"
                                >
                                  {industry.title}
                                </Link>
                              </strong>
                              <span>{industry.description}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="services-dropdown">
                    <Link href={SITE_PATHS.about}>
                      Others <MdArrowOutward size={16} />
                    </Link>

                    <div className="services-dropdown-container services-core-dropdown others-core-dropdown">
                      <div className="services-core-label">Others</div>

                      <div className="services-core-grid others-core-grid">
                        <Link
                          href={SITE_PATHS.about}
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <MdOutlineInfo />
                          </span>
                          <span className="services-core-content">
                            <strong>About Us</strong>
                            <span>
                              Learn about Zonic Media, our process, and how we
                              help businesses grow online.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href={SITE_PATHS.blogs}
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <FaRegNewspaper />
                          </span>
                          <span className="services-core-content">
                            <strong>Blogs</strong>
                            <span>
                              Read insights, guides, and updates around SEO,
                              websites, ads, and local growth.
                            </span>
                          </span>
                        </Link>

                        <Link
                          href={SITE_PATHS.contact}
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <MdOutlineMail />
                          </span>
                          <span className="services-core-content">
                            <strong>Contact Us</strong>
                            <span>
                              Reach out to Zonic Media for your next website,
                              SEO, or ads project.
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </Col>

            <Col xs="auto">
              <div className="header-button d-none d-lg-flex">
                <Link href="tel:3027269736" className="buttons">
                  <span>(302) 726-9736</span>
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

              <div className="hamburger-menu-wrapper d-block d-lg-none">
                <input
                  hidden
                  className="check-icon"
                  id="check-icon"
                  type="checkbox"
                  checked={mobileOpen}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleToggleMobileMenu(e.target.checked)
                  }
                />
                <label className="icon-menu" htmlFor="check-icon">
                  <div className="bar bar--1"></div>
                  <div className="bar bar--2"></div>
                  <div className="bar bar--3"></div>
                </label>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className={`mob-tab-navbar-wrapper d-lg-none ${mobileOpen ? "show-mob-tab" : ""}`}
      >
        <div className="mob-tab-nav-menus">
          <ul>
            <li>
              <Accordion
                flush
                id="mobileServicesAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <Link href="/services">Services </Link>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {services.map((s) => (
                        <li key={s.id}>
                          {s.id === "gmb" ? (
                            <Accordion
                              flush
                              className="mobile-services-nested-accordion"
                              activeKey={mobileServicesNestedKey}
                              onSelect={(eventKey) =>
                                setMobileServicesNestedKey(
                                  typeof eventKey === "string"
                                    ? eventKey
                                    : null,
                                )
                              }
                            >
                              <Accordion.Item eventKey="gmb-mobile">
                                <Accordion.Header>{s.label}</Accordion.Header>
                                <Accordion.Body>
                                  <ul className="mobile-services-submenu">
                                    {gmbServiceLinks.map((gmbLink) => (
                                      <li key={gmbLink.id}>
                                        <Link
                                          href={gmbLink.link}
                                          onClick={() =>
                                            handleToggleMobileMenu(false)
                                          }
                                        >
                                          {gmbLink.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          ) : (
                            <Link
                              href={s.link}
                              onClick={() => handleToggleMobileMenu(false)}
                            >
                              {s.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion
                flush
                id="mobileServicesAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <Link href={SITE_PATHS.seo}>Local SEO </Link>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {localSeoServices.map((s) => (
                        <li key={s.id}>
                          <Link
                            href={s.link}
                            onClick={() => handleToggleMobileMenu(false)}
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Link href="/services/gmb-reinstatement-help">
                GMB Reinstatement
              </Link>
            </li>
            <li>
              <Link
                href="/services/launchpad"
                onClick={() => handleToggleMobileMenu(false)}
              >
                Launchpad
              </Link>
            </li>
            <li>
              <Accordion
                flush
                id="mobileAreasAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
                >
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Locations</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <Link
                          href="/services/philadelphia/digital-marketing"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Digital Marketing Agency in Philadelphia
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/philadelphia/local-seo"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Local SEO Agency Philadelphia
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion
                flush
                id="mobileIndustriesAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Industries</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {industryLinks.map((industry) => (
                        <li key={industry.id}>
                          <Link
                            href={industry.link}
                            onClick={() => handleToggleMobileMenu(false)}
                          >
                            {industry.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
            <li>
              <Accordion
                flush
                id="mobileOthersAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    <Link href={SITE_PATHS.about}>Others </Link>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <Link
                          href={SITE_PATHS.about}
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={SITE_PATHS.blogs}
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={SITE_PATHS.contact}
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>
          </ul>
        </div>
        <div className="mob-tab-nav-socials">
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
      </div>
    </>
  );
}

export default Navbar;
