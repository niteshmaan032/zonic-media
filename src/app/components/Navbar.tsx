"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";
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
    link: "/services/local-seo",
  },
  {
    id: "ppc",
    label: "Google ADS (PPC)",
    image: "/images/header-ad-2.webp",
    alt: "google ads",
    link: "/services/google-ads",
  },
];

function Navbar() {
  const pathname = usePathname();
  const defaultService = services[0];
  const [activeService, setActiveService] = useState(defaultService);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [, setScrollDownDistance] = useState(0);
  const [, setScrollUpDistance] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [accordionKey, setAccordionKey] = useState<string | null>(null);
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
    }
  };

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileOpen]);

  return (
    <>
      <div
        className={`navbar-wrapper ${showNavbar ? "show" : "hide"} ${scrolled ? "scrolled" : ""}`}
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
                  <li>
                    <Link href={SITE_PATHS.home}>Home</Link>
                  </li>
                  <li>
                    <Link href={SITE_PATHS.about}>About Us</Link>
                  </li>
                  <li
                    className="services-dropdown"
                    onMouseLeave={() => setActiveService(defaultService)}
                  >
                    <Link href={SITE_PATHS.services}>
                      Services <MdArrowOutward size={16} />
                    </Link>
                    <div className="services-dropdown-container">
                      <Row className="h-100">
                        <Col lg={7}>
                          <div className="services-dropdown-menus">
                            <p>Core Services</p>
                            <ul>
                              {services.map((s) => (
                                <li key={s.id}>
                                  <Link
                                    href={s.link}
                                    onMouseEnter={() => setActiveService(s)}
                                  >
                                    {s.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={SITE_PATHS.services}
                              className="buttons"
                            >
                              <span>View all services</span>
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
                        <Col lg={5}>
                          <div className="services-dropdown-img-container">
                            {services.map((s) => (
                              <Image
                                key={s.id}
                                src={s.image}
                                alt={s.alt}
                                fill
                                className={`dropdown-preview-img ${activeService.id === s.id ? "active" : ""}`}
                              />
                            ))}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </li>
                  <li>
                    <Link href={SITE_PATHS.seo}>Local SEO</Link>
                  </li>
                  <li>
                    <Link href={SITE_PATHS.blogs}>Blogs</Link>
                  </li>
                  <li>
                    <Link href={SITE_PATHS.contact}>Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </Col>

            <Col xs="auto">
              <div className="header-button d-none d-lg-flex">
                <Link href={SITE_PATHS.contact} className="buttons">
                  <span>Get In Touch</span>
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
              <Link href="/" onClick={() => handleToggleMobileMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href={SITE_PATHS.about}
                onClick={() => handleToggleMobileMenu(false)}
              >
                About Us
              </Link>
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
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <Link href="/services">Services </Link>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {services.map((s) => (
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
