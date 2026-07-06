import type { Metadata } from "next";
import "@/app/style/philadelphia/philaDigital.css";
import "@/app/style/pediatricians.css";
import "@/app/style/carTow.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import InlineAuditForm from "@/app/components/InlineAuditForm";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import {
  FaChartLine,
  FaLaptopMedical,
  FaMapMarkedAlt,
  FaSearch,
  FaStethoscope,
} from "react-icons/fa";
import { FaChildren, FaGoogle, FaUserDoctor } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "Marketing for Pediatricians | Pediatric SEO",
  description:
    "Pediatrician marketing and SEO services that help children's clinics rank on Google, attract more parents, and book more patient appointments.",
  keywords: [
    "pediatrician marketing",
    "pediatric SEO services",
    "local SEO for pediatricians",
    "pediatrician lead generation",
    "Google Maps ranking for pediatricians",
    "Google Business Profile for pediatric clinics",
    "marketing for children's clinics",
    "pediatric practice marketing",
    "SEO for pediatric practices",
  ],
  alternates: { canonical: "/services/industry/pediatricians" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Pediatricians SEO", url: "/services/industry/pediatricians" },
]);

const PediatricFaqs = [
  {
    question: "How does pediatric SEO help my clinic grow?",
    answer:
      "Pediatric SEO improves your visibility when parents search for child healthcare services, helping your clinic attract more appointment inquiries.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Local SEO and website improvements often show early traction within a few months, while stronger rankings and steady patient growth build over time.",
  },
  {
    question: "Do you work with new pediatric clinics?",
    answer:
      "Yes. We help both established practices and new pediatric clinics build online visibility, local trust, and a reliable flow of patient leads.",
  },
  {
    question:
      "What makes pediatric marketing different from general marketing?",
    answer:
      "Pediatric marketing needs parent-focused messaging, local trust signals, and a strategy that reflects how families search for care and choose providers.",
  },
  {
    question: "Can you help my clinic rank in my city?",
    answer:
      "Yes. We optimize your local presence, service pages, keyword targeting, and Google Business Profile so your clinic can compete in its target area.",
  },
];

const PediatricFormHead = {
  leadFormTitle: "Your clinic deserves more visibility and more patients.",
  leadCallText: (
    <>
      Book a discovery call with Zonic Media and let us build a search marketing
      strategy that drives consistent growth.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

const HeroHighlights = [
  {
    icon: <FaUserDoctor />,
    title: "Pediatric SEO Expertise",
    colorClass: "pink",
  },
  {
    icon: <FaChildren />,
    title: "Parent-Focused Messaging",
    colorClass: "green",
  },
  {
    icon: <LuCalendarCheck2 />,
    title: "Appointment Growth Strategy",
    colorClass: "blue",
  },
];

const LocalSeoItems = [
  "Google Business Profile optimization",
  "Local citations and listings",
  "Location-based keyword targeting",
  "Map ranking improvements",
  "Review and reputation optimization",
];

const WebsiteItems = [
  "Website structure optimization",
  "Mobile-friendly design improvements",
  "Faster loading speed",
  "Clear call to action placement",
  "Patient-focused content optimization",
];

const ProcessSteps = [
  {
    step: "01",
    title: "Understand Your Clinic",
    description:
      "We analyze your services, target audience, and local competition to understand your market position and identify the best opportunities for growth.",
  },
  {
    step: "02",
    title: "Build a Custom Strategy",
    description:
      "We create a pediatric marketing plan focused on visibility, trust, and attracting the right parents in your local area.",
  },
  {
    step: "03",
    title: "Execute and Optimize",
    description:
      "We improve rankings, pages, and campaigns continuously so your clinic generates stronger leads and more appointment requests over time.",
  },
];

const PediatricServices = [
  {
    image: "/images/pediatricians/pedis-serv-img-1.jpg",
    icon: <FaSearch />,
    title: "Keyword Research Focused on Pediatric Services",
    description:
      "We target the searches parents actually use when looking for pediatric care, checkups, urgent visits, and child health services.",
  },
  {
    image: "/images/pediatricians/pedis-serv-img-2.jpg",
    icon: <FaGoogle />,
    title: "On-Page SEO for Your Website",
    description:
      "We optimize service pages, page structure, headings, and copy so your clinic earns stronger organic visibility.",
  },
  {
    image: "/images/pediatricians/pedis-serv-img-3.jpg",
    icon: <FaStethoscope />,
    title: "Service Page Optimization",
    description:
      "We improve your core treatment and service pages so parents understand what you offer and feel confident contacting your clinic.",
  },
  {
    image: "/images/pediatricians/pedis-serv-img-4.jpg",
    icon: <FaLaptopMedical />,
    title: "Content Strategy Targeting Parent Queries",
    description:
      "We build helpful content around real parent questions to increase trust, rankings, and long-tail search visibility.",
  },
  {
    image: "/images/pediatricians/pedis-serv-img-5.jpg",
    icon: <FaChartLine />,
    title: "Technical SEO Improvements",
    description:
      "We fix performance, indexing, and site health issues that hold back rankings and reduce the quality of your online experience.",
  },
  {
    image: "/images/pediatricians/pedis-serv-img-6.jpg",
    icon: <FaMapMarkedAlt />,
    title: "Local SEO & Google Business Profile Optimization",
    description:
      "We strengthen your local presence so nearby families can find, trust, and choose your clinic more easily.",
  },
];

function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="pedi-sec-1">
        <div className="pedi-sec-1-layer">
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="pedi-sec-1-content">
                <h1 className="pedi-sec-1-heading">
                  Marketing for <span>Pediatricians</span> That Brings More
                  Patient Appointments
                </h1>

                <p className="pedi-sec-1-descrp">
                  We help pediatric clinics grow with SEO, local visibility, and
                  targeted digital marketing strategies designed to attract more
                  patients and build long-term trust.
                </p>

                <div className="pedi-sec-1-ctas">
                  <HashScrollLink
                    href="#pediatricians-contact-form"
                    className="buttons"
                    offset={120}
                  >
                    Book Free Strategy Call
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
                  </HashScrollLink>

                  <HashScrollLink
                    href="#pediatricians-contact-form"
                    className="buttons pedi-sec-1-secondary-btn"
                    offset={120}
                  >
                    Get More Patient Leads
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
                  </HashScrollLink>
                </div>

                <div className="pedi-feature-grid">
                  {HeroHighlights.map((item) => (
                    <div className="pedi-feature-card" key={item.title}>
                      <div className={`pedi-feature-icon ${item.colorClass}`}>
                        {item.icon}
                      </div>
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="pedi-sec-1-visual">
                <div className="pedi-sec-1-shape pedi-sec-1-shape-left" />
                <div className="pedi-sec-1-shape pedi-sec-1-shape-right" />
                <Image
                  src="/images/pediatricians/pedis-banner-1.png"
                  alt="Marketing for pediatricians hero illustration"
                  width={760}
                  height={720}
                  priority
                />
              </div>
            </Col>
          </Row>

          <div className="pedi-priority-strip">
            <div className="pedi-priority-strip-media pedi-priority-strip-media-left">
              <Image
                src="/images/pediatricians/pedis-img-2.svg"
                alt="Pediatric clinic growth illustration"
                width={88}
                height={88}
              />
            </div>
            <div className="pedi-priority-strip-copy">
              <h3>Your Practice Growth Is Our Priority</h3>
              <p>
                We help pediatric clinics attract more local patients and grow
                their online presence with strategies built for long-term trust.
              </p>
            </div>
            <div className="pedi-priority-strip-media pedi-priority-strip-media-right">
              <Image
                src="/images/pediatricians/pedis-img-3.svg"
                alt="Pediatric care support illustration"
                width={88}
                height={88}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pedi-sec-2">
        <div className="pedi-center-head">
          <h2 className="pedi-sec-heading">
            A Pediatric Marketing Agency <span>Built For Growth</span>
          </h2>
          <p className="pedi-sec-descrp">
            At Zonic, we specialize in marketing for pediatricians and
            children&apos;s clinics.
          </p>
          <p className="pedi-sec-descrp">
            We build systems that position your clinic in front of parents who
            are actively searching for care.
          </p>
          <p className="pedi-sec-descrp">
            No generic strategies. No guesswork. Just focused pediatric
            marketing designed to increase appointments.
          </p>
        </div>
      </div>

      <div className="pedi-sec-3">
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <div className="pedi-split-copy">
              <h2 className="pedi-split-heading">
                Local SEO For Pediatricians
              </h2>
              <h3 className="pedi-split-subhead">
                Get Found in Your Local Area
              </h3>
              <p className="pedi-split-text">
                Most parents search for pediatricians near them when they need
                care for their child. Local SEO ensures your clinic appears in
                Google Maps and local search results at the right moment, making
                it easier for nearby parents to find, trust, and choose your
                services.
              </p>
              <p className="pedi-split-label">What We Do:</p>

              <div className="pedi-timeline-list">
                {LocalSeoItems.map((item) => (
                  <div className="pedi-timeline-item" key={item}>
                    <span className="pedi-timeline-dot" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="pedi-split-image">
              <Image
                src="/images/pediatricians/pedis-img-4.jpg"
                alt="Local SEO for pediatricians"
                fill
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="iaf-section">
        <InlineAuditForm
          heading="Get Your Free Pediatric Practice SEO Audit"
          description="Share your practice details and we will review your local search rankings, Google Maps visibility, and patient acquisition gaps at no cost."
        />
      </div>

      <div className="pedi-sec-4">
        <div className="pedi-center-head pedi-center-head-dark">
          <h2 className="pedi-sec-heading">How Our Process Works</h2>
          <p className="pedi-sec-descrp">
            From research to optimization, every step is focused on performance,
            scalability, and consistent lead generation.
          </p>
        </div>

        <Row className="pedi-process-row">
          {ProcessSteps.map((item) => (
            <Col lg={4} md={6} key={item.step} className="pedi-process-col">
              <div className="pedi-process-card">
                <div className="pedi-process-circle">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="pedi-sec-5">
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <div className="pedi-split-image pedi-split-image-light">
              <Image
                src="/images/pediatricians/pedis-img-5.jpg"
                alt="Pediatric website optimization"
                fill
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="pedi-split-copy">
              <h2 className="pedi-split-heading">
                Pediatric Website Optimization
              </h2>
              <h3 className="pedi-split-subhead">
                Turn Visitors Into Patients
              </h3>
              <p className="pedi-split-text">
                Getting traffic is not enough. Your website must convert
                visitors into appointment requests. We optimize your website so
                parents trust your clinic and take action.
              </p>
              <p className="pedi-split-label">What We Do:</p>

              <div className="pedi-timeline-list">
                {WebsiteItems.map((item) => (
                  <div className="pedi-timeline-item" key={item}>
                    <span className="pedi-timeline-dot" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="pedi-sec-6">
        <div className="pedi-center-head pedi-center-head-dark">
          <h2 className="pedi-sec-heading">Pediatric SEO Services</h2>
          <p className="pedi-sec-descrp">
            Optimize your pediatric website for better visibility, traffic, and
            patient growth.
          </p>
        </div>

        <Row className="g-4">
          {PediatricServices.map((service) => (
            <Col lg={4} md={6} key={service.title}>
              <div className="pedi-service-card">
                <div className="pedi-service-img">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={350}
                  />
                </div>

                <div className="pedi-service-overlay">
                  <div className="pedi-service-head">
                    <div className="pedi-service-icon">{service.icon}</div>
                    <h4>{service.title}</h4>
                  </div>

                  <p>{service.description}</p>

                  <HashScrollLink
                    href="#pediatricians-contact-form"
                    className="pedi-service-link"
                    offset={120}
                  >
                    LEARN MORE <span>&gt;&gt;</span>
                  </HashScrollLink>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="phila-sec-8">
        <h2 className="phila-sec-8-heading">What Our Clients Say</h2>

        <div className="phila-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      <div className="phila-sec-9">
        <div className="phila-center-head">
          <div className="phila-center-head-content-wrapper">
            <h2 className="phila-sec-heading">
              Frequently Asked Questions About Pediatric Marketing
            </h2>
          </div>
        </div>

        <div className="phila-sec-9-faq-wrapper">
          <GmbFaqs items={PediatricFaqs} columns={2} />
        </div>

        <Script
          id="pediatricians-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://zonicllc.com/services/industry/pediatricians",
              mainEntity: PediatricFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>

      <div className="phila-sec-10">
        <div className="phila-sec-10-inner">
          <div className="phila-sec-10-content">
            <h2 className="phila-sec-10-heading">
              Your clinic deserves more visibility and more patients.
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media and let us build a search
              engine marketing strategy that drives consistent growth for your
              pediatric practice.
            </p>

            <div className="phila-sec-10-info-grid">
              <div className="phila-sec-10-info-card">
                <div className="phila-sec-10-info-head">
                  <div className="phila-sec-10-info-icon">
                    <MdOutlineLocationOn />
                  </div>
                  <h3>Our Office</h3>
                </div>
                <a href={SITE_CONTACT.mapHref} target="_blank" rel="noreferrer">
                  8 The Green, STE B Dover, Kent, DE 19901
                  <br />
                  United States
                </a>
              </div>

              <div className="phila-sec-10-info-card">
                <div className="phila-sec-10-info-head">
                  <div className="phila-sec-10-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <div className="phila-sec-10-image-wrap">
              <Image
                src="/images/contact-section.jpg"
                fill
                alt="Pediatric clinic marketing consultation"
                className="phila-sec-10-image"
              />
            </div>
          </div>

          <div
            className="phila-sec-10-contact-form"
            id="pediatricians-contact-form"
          >
            <LeadContactForm
              leadFormTitle={PediatricFormHead.leadFormTitle}
              leadCallText={PediatricFormHead.leadCallText}
              submitButtonText="Book Your Free Call"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
