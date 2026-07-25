"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { FaBroom, FaTooth, FaUserDoctor } from "react-icons/fa6";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { IoDesktopOutline } from "react-icons/io5";
import { LuPlaneTakeoff } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import {
  MdGavel,
  MdOutlineCarRepair,
  MdOutlineChildCare,
  MdOutlineCleaningServices,
  MdOutlineElectricalServices,
  MdOutlineFormatPaint,
  MdOutlineGarage,
  MdOutlineGrass,
  MdOutlineHomeRepairService,
  MdOutlineHomeWork,
  MdOutlineHvac,
  MdOutlineLocalShipping,
  MdOutlinePestControl,
  MdOutlinePlumbing,
  MdOutlinePropaneTank,
  MdOutlineRealEstateAgent,
  MdOutlineSolarPower,
  MdOutlineVolunteerActivism,
  MdRoofing,
} from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { SiGoogleads } from "react-icons/si";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";
import "@/app/style/navbar.css";
import { SITE_PATHS, SITE_SOCIAL_LINKS } from "@/shared/siteConfig";

const services = [
  {
    id: "gmb",
    label: "google my business (GMB)",
    image: "/images/header-gmb.webp",
    alt: "google my business",
    link: "/services/gmb-reinstatement-help",
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
  {
    id: "travel-tourism",
    label: "Travel & Tourism Marketing",
    image: "/images/header-seo.webp",
    alt: "travel and tourism marketing",
    link: "/services/travel-and-tourism-marketing-agency",
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

const seoServiceLinks = [
  {
    id: "local-seo-for-home-services",
    title: "Local SEO for Home Services",
    description:
      "Local search strategies that help home service businesses rank and generate consistent calls.",
    link: "/services/local-seo-for-home-services",
    icon: <MdOutlineHomeRepairService />,
  },
  {
    id: "local-seo-services-for-hvac",
    title: "Local SEO for HVAC",
    description:
      "Map pack rankings and local visibility tuned to HVAC seasonal demand peaks.",
    link: "/services/local-seo-services-for-hvac",
    icon: <MdOutlineHvac />,
  },
  {
    id: "seo-services-for-plumber",
    title: "SEO for Plumbers",
    description:
      "Rank for 'plumber near me' searches and win urgent service calls on Google Maps.",
    link: "/services/industry/seo-services-for-plumber",
    icon: <MdOutlinePlumbing />,
  },
  {
    id: "local-seo-for-roofing-companies",
    title: "Local SEO for Roofing Companies",
    description:
      "Show up when homeowners search for roof repair, replacement, or inspections nearby.",
    link: "/services/industry/local-seo-for-roofing-companies",
    icon: <MdRoofing />,
  },
  {
    id: "seo-services-for-pest-control",
    title: "SEO for Pest Control",
    description:
      "Rank in the local pack when nearby homeowners need immediate pest help.",
    link: "/services/industry/seo-services-for-pest-control",
    icon: <MdOutlinePestControl />,
  },
  {
    id: "seo-services-for-car-towing",
    title: "SEO for Car Towing",
    description:
      "Google Maps visibility for emergency towing and roadside assistance searches.",
    link: "/services/industry/seo-services-for-car-towing",
    icon: <MdOutlineLocalShipping />,
  },
  {
    id: "dental-seo-services",
    title: "Dental SEO Services",
    description:
      "More calls from patients ready to book with local search and Maps visibility.",
    link: "/services/industry/dental-seo-services",
    icon: <FaTooth />,
  },
  {
    id: "chiropractor-local-seo-services",
    title: "Chiropractor Local SEO",
    description:
      "Local SEO and marketing built for chiropractic clinics and practices.",
    link: "/services/industry/chiropractor-local-seo-services",
    icon: <FaUserDoctor />,
  },
  {
    id: "pediatricians-seo",
    title: "Pediatrician SEO & Marketing",
    description:
      "Local search visibility that helps parents find and choose your pediatric practice.",
    link: "/services/industry/pediatricians",
    icon: <MdOutlineChildCare />,
  },
  {
    id: "local-seo-for-law-firms",
    title: "Local SEO for Law Firms",
    description:
      "Qualified case inquiries from local search and attorney-focused SEO.",
    link: "/services/industry/local-seo-for-law-firms",
    icon: <MdGavel />,
  },
  {
    id: "real-estate-seo-services",
    title: "Real Estate SEO Services",
    description:
      "Search visibility for realtors, teams, and brokerages in their local markets.",
    link: "/services/industry/real-estate-seo-services",
    icon: <MdOutlineRealEstateAgent />,
  },
  {
    id: "local-seo-for-commercial-cleaning",
    title: "Local SEO for Commercial Cleaning",
    description:
      "Janitorial SEO that brings steady commercial cleaning contracts.",
    link: "/services/industry/local-seo-for-commercial-cleaning",
    icon: <MdOutlineCleaningServices />,
  },
  {
    id: "local-seo-services-for-residential-cleaning",
    title: "Residential Cleaning SEO",
    description:
      "House cleaning leads from local search, Maps, and review visibility.",
    link: "/services/industry/local-seo-services-for-residential-cleaning",
    icon: <FaBroom />,
  },
];

const industryLinks = [
  {
    id: "auto-repair-marketing-agency",
    title: "Auto Repair Marketing",
    description:
      "Local visibility, paid search, reviews, and lead generation for repair shops.",
    link: "/services/auto-repair-marketing-agency",
    icon: <MdOutlineCarRepair />,
  },
  {
    id: "chiropractic-marketing-agency",
    title: "Chiropractic Marketing",
    description:
      "Patient acquisition systems for chiropractic clinics and local practices.",
    link: "/services/chiropractic-marketing-agency",
    icon: <FaUserDoctor />,
  },
  {
    id: "cleaning-company-marketing-agency",
    title: "Cleaning Company Marketing",
    description:
      "Lead generation and local growth for residential and commercial cleaners.",
    link: "/services/cleaning-company-marketing-agency",
    icon: <MdOutlineCleaningServices />,
  },
  {
    id: "dental-marketing-agency",
    title: "Dental Marketing",
    description:
      "Local patient acquisition, paid ads, and reputation growth for dentists.",
    link: "/services/dental-marketing-agency",
    icon: <FaTooth />,
  },
  {
    id: "electrician-marketing-agency",
    title: "Electrician Marketing",
    description:
      "Map visibility, paid leads, and booking systems for electrical contractors.",
    link: "/services/electrician-marketing-agency",
    icon: <MdOutlineElectricalServices />,
  },
  {
    id: "garage-door-marketing-agency",
    title: "Garage Door Marketing",
    description:
      "Urgent-call lead generation for garage door repair and installation teams.",
    link: "/services/garage-door-marketing-agency",
    icon: <MdOutlineGarage />,
  },
  {
    id: "landscaping-marketing-agency",
    title: "Landscaping Marketing",
    description:
      "Local search, ads, and recurring-service leads for landscaping companies.",
    link: "/services/landscaping-marketing-agency",
    icon: <MdOutlineGrass />,
  },
  {
    id: "law-firm-marketing-agency",
    title: "Law Firm Marketing",
    description:
      "Qualified case inquiries from search, paid media, and conversion-focused pages.",
    link: "/services/law-firm-marketing-agency",
    icon: <MdGavel />,
  },
  {
    id: "moving-company-marketing-agency",
    title: "Moving Company Marketing",
    description:
      "Booked move leads and local visibility for residential and commercial movers.",
    link: "/services/moving-company-marketing-agency",
    icon: <MdOutlineLocalShipping />,
  },
  {
    id: "painting-contractor-marketing-agency",
    title: "Painting Contractor Marketing",
    description:
      "Estimate requests and local demand generation for painting contractors.",
    link: "/services/painting-contractor-marketing-agency",
    icon: <MdOutlineFormatPaint />,
  },
  {
    id: "pest-control-marketing-agency",
    title: "Pest Control Marketing",
    description:
      "Urgent and recurring pest-control leads from maps, search, and paid ads.",
    link: "/services/pest-control-marketing-agency",
    icon: <MdOutlinePestControl />,
  },
  {
    id: "real-estate-marketing-agency",
    title: "Real Estate Marketing",
    description:
      "Lead generation and digital visibility for agents, teams, and brokerages.",
    link: "/services/real-estate-marketing-agency",
    icon: <MdOutlineRealEstateAgent />,
  },
  {
    id: "roofing-marketing-agency",
    title: "Roofing Marketing",
    description:
      "Storm, repair, and replacement leads for residential roofing companies.",
    link: "/services/roofing-marketing-agency",
    icon: <MdRoofing />,
  },
  {
    id: "septic-marketing-agency",
    title: "Septic Marketing",
    description:
      "Pumping, repair, and install leads for septic companies from maps, search, and paid ads.",
    link: "/services/septic-marketing-agency",
    icon: <MdOutlinePropaneTank />,
  },
  {
    id: "solar-marketing-agency",
    title: "Solar Marketing",
    description:
      "Exclusive install and battery storage leads for solar companies from maps, search, and paid ads.",
    link: "/services/solar-marketing-agency",
    icon: <MdOutlineSolarPower />,
  },
  {
    id: "home-inspector-marketing",
    title: "Home Inspector Marketing",
    description:
      "Local SEO, Google Ads, GBP, and websites built to book more home inspections across the US.",
    link: "/services/home-inspector-marketing",
    icon: <MdOutlineHomeWork />,
  },
  {
    id: "plumbing-marketing-agency",
    title: "Plumbing Marketing",
    description:
      "Map pack rankings, GBP, paid ads, websites, and reviews built to win urgent service calls for plumbing contractors.",
    link: "/services/plumbing-marketing-agency",
    icon: <MdOutlinePlumbing />,
  },
  {
    id: "hvac-marketing-agency",
    title: "HVAC Marketing",
    description:
      "Map pack rankings, GBP, paid ads, maintenance memberships, and reviews tuned to HVAC seasonal demand peaks.",
    link: "/services/hvac-marketing-agency",
    icon: <MdOutlineHvac />,
  },
  {
    id: "non-profit-marketing-agency",
    title: "Nonprofit Marketing",
    description:
      "Digital fundraising and advocacy — social, Google Ad Grant, video, and board-ready reporting for mission-driven organizations.",
    link: "/services/non-profit-marketing-agency",
    icon: <MdOutlineVolunteerActivism />,
  },
];

// Chevron-only accordion toggle so mobile header links stay outside the button
// (an <a> inside <button> is invalid HTML).
function MobileAccordionToggle({
  eventKey,
  label,
}: {
  eventKey: string;
  label: string;
}) {
  const { activeEventKey } = useContext(AccordionContext);
  const toggleAccordion = useAccordionButton(eventKey);
  const isOpen = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className={`accordion-button mob-acc-toggle${isOpen ? "" : " collapsed"}`}
      aria-expanded={isOpen}
      aria-label={label}
      onClick={toggleAccordion}
    />
  );
}

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const forceWhiteNavbar =
    pathname === "/" ||
    pathname === "/services/philadelphia/digital-marketing" ||
    pathname === "/services/philadelphia/sem" ||
    pathname === "/services/philadelphia/ppc" ||
    pathname === "/services/philadelphia/local-seo" ||
    pathname === "/services/delaware/digital-marketing" ||
    pathname === "/services/local-seo-services-for-hvac" ||
    pathname === "/services/industry/local-seo-services-for-hvac" ||
    pathname === "/services/industry/local-seo-for-roofing-companies" ||
    pathname === "/services/industry/car-towing" ||
    pathname === "/services/industry/seo-services-for-plumber" ||
    pathname === "/services/industry/plumber" ||
    pathname === "/services/industry/seo-services-for-pest-control" ||
    pathname === "/services/industry/pest-control" ||
    pathname === "/services/industry/dental-seo-services" ||
    pathname === "/services/industry/pediatricians" ||
    pathname === "/services/industry/real-estate-seo-services" ||
    pathname === "/services/industry/chiropractor-local-seo-services" ||
    pathname === "/services/industry/local-seo-for-law-firms" ||
    pathname === "/services/industry/local-seo-for-commercial-cleaning" ||
    pathname === "/services/industry/local-seo-services-for-residential-cleaning";
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
    const syncScrolledState = () => {
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

    syncScrolledState();

    window.addEventListener("scroll", syncScrolledState, { passive: true });
    window.addEventListener("pageshow", syncScrolledState);

    return () => {
      window.removeEventListener("scroll", syncScrolledState);
      window.removeEventListener("pageshow", syncScrolledState);
    };
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

                        <Link
                          href="/services/travel-and-tourism-marketing-agency"
                          className="services-core-card"
                        >
                          <span className="services-core-icon">
                            <LuPlaneTakeoff />
                          </span>
                          <span className="services-core-content">
                            <strong>Travel &amp; Tourism Marketing</strong>
                            <span>
                              Direct-booking growth for hotels, tour operators,
                              and destinations.
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
                        {seoServiceLinks.map((seoLink) => (
                          <Link
                            href={seoLink.link}
                            className="services-core-card"
                            key={seoLink.id}
                          >
                            <span className="services-core-icon">
                              {seoLink.icon}
                            </span>
                            <span className="services-core-content">
                              <strong>{seoLink.title}</strong>
                              <span>{seoLink.description}</span>
                            </span>
                          </Link>
                        ))}
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
                                href="/services/delaware/digital-marketing"
                                className="services-core-title-link"
                              >
                                Digital Marketing Agency in Delaware
                              </Link>
                            </strong>
                            <span>
                              Full-service digital marketing strategies for
                              Delaware businesses focused on visibility, leads,
                              and long-term growth.
                            </span>
                          </span>
                        </div>

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
                              <Link
                                href="/services/philadelphia/sem"
                                className="services-core-tag"
                              >
                                SEM Agency Philadelphia
                              </Link>
                              <Link
                                href="/services/philadelphia/ppc"
                                className="services-core-tag"
                              >
                                PPC Agency Philadelphia
                              </Link>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="services-dropdown">
                    <Link
                      href={SITE_PATHS.industries}
                      className="nav-link-with-icon"
                    >
                      Industries <MdArrowOutward size={16} />
                    </Link>

                    <div className="services-dropdown-container services-core-dropdown local-seo-core-dropdown industries-core-dropdown">
                      <div className="services-core-label">Industries</div>

                      <div className="services-core-grid local-seo-core-grid">
                        {industryLinks.map((industry) => (
                          <div
                            className="services-core-card services-core-card--with-tags"
                            key={industry.id}
                          >
                            <span className="services-core-icon">
                              {industry.icon}
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
                            <strong>Blog</strong>
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
                  <div className="mob-acc-link-header">
                    <Link
                      href="/services"
                      onClick={() => handleToggleMobileMenu(false)}
                    >
                      Services
                    </Link>
                    <MobileAccordionToggle
                      eventKey="0"
                      label="Toggle services menu"
                    />
                  </div>
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
                id="mobileLocalSeoAccordion"
                activeKey={accordionKey}
                onSelect={(eventKey) =>
                  setAccordionKey(
                    typeof eventKey === "string" ? eventKey : null,
                  )
                }
              >
                <Accordion.Item eventKey="5">
                  <div className="mob-acc-link-header">
                    <Link
                      href={SITE_PATHS.seo}
                      onClick={() => handleToggleMobileMenu(false)}
                    >
                      Local SEO
                    </Link>
                    <MobileAccordionToggle
                      eventKey="5"
                      label="Toggle local SEO menu"
                    />
                  </div>
                  <Accordion.Body>
                    <ul>
                      {seoServiceLinks.map((seoLink) => (
                        <li key={seoLink.id}>
                          <Link
                            href={seoLink.link}
                            onClick={() => handleToggleMobileMenu(false)}
                          >
                            {seoLink.title}
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
                          href="/services/delaware/digital-marketing"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          Digital Marketing Agency in Delaware
                        </Link>
                      </li>
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
                      <li>
                        <Link
                          href="/services/philadelphia/sem"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          SEM Agency Philadelphia
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/philadelphia/ppc"
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          PPC Agency Philadelphia
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
                      <li>
                        <Link
                          href={SITE_PATHS.industries}
                          onClick={() => handleToggleMobileMenu(false)}
                        >
                          View all industries
                        </Link>
                      </li>
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
                  <div className="mob-acc-link-header">
                    <Link
                      href={SITE_PATHS.about}
                      onClick={() => handleToggleMobileMenu(false)}
                    >
                      Others
                    </Link>
                    <MobileAccordionToggle
                      eventKey="2"
                      label="Toggle others menu"
                    />
                  </div>
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
                          Blog
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
