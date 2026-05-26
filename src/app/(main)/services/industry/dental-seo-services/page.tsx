import type { Metadata } from "next";
import "@/app/style/dentaSeo.css";
import "@/app/style/carTow.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import InlineAuditForm from "@/app/components/InlineAuditForm";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import Footer from "@/app/components/Footer";
import { SITE_CONTACT } from "@/shared/siteConfig";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import { FaDatabase, FaDollarSign, FaEye, FaFileAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";

const DentalSeoFaqs = [
  {
    question: "What is local SEO for dental practices?",
    answer:
      "Local SEO for dental practices helps your clinic rank higher on Google Search and Google Maps when patients search for dentists, cosmetic dentistry, emergency dental care, implants, Invisalign, and other services near them.",
  },
  {
    question: "How can dental SEO help my clinic get more patients?",
    answer:
      "Dental SEO improves local visibility, builds trust through reviews and content, and helps your website convert high-intent searches into calls, appointment requests, and booked patients.",
  },
  {
    question: "How long does dental SEO take to show results?",
    answer:
      "Most dental offices begin seeing early ranking and visibility improvements within 2 to 3 months, while stronger patient lead flow usually builds over 4 to 6 months depending on competition and current website authority.",
  },
  {
    question: "Do dental offices need Google Business Profile optimization?",
    answer:
      "Yes. Google Business Profile optimization is critical for dental offices because many patients choose practices directly from Google Maps results, reviews, photos, service listings, and local search information.",
  },
  {
    question: "Is SEO better than paid ads for dental offices?",
    answer:
      "SEO builds long-term visibility and lowers patient acquisition cost over time, while paid ads can generate faster short-term leads. Many dental offices get the best results from using both together.",
  },
  {
    question: "What dental services can you target with SEO?",
    answer:
      "We can target general dentistry, cosmetic dentistry, dental implants, Invisalign, teeth whitening, emergency dentistry, pediatric dentistry, veneers, root canals, dentures, and service-area searches.",
  },
  {
    question: "Can you help my dental office rank on Google Maps?",
    answer:
      "Yes. Our dental SEO strategy includes Google Business Profile optimization, local citations, review strategy, service optimization, local landing pages, and map ranking improvements.",
  },
  {
    question: "How do I get started with Zonic Media?",
    answer:
      "You can book a free dental SEO audit or strategy call so we can review your clinic's visibility, rankings, website, competition, and best growth opportunities.",
  },
];

const DentalFormHead = {
  leadFormTitle: "Ready to Get More Dental Patients?",
  leadCallText: (
    <>
      Let&apos;s build a local SEO strategy that drives more calls, stronger
      rankings, and consistent patient bookings every month.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

const DentalProcessSteps = [
  { step: "01", label: "Local SEO Audit & Competitor Analysis" },
  { step: "02", label: "Keyword Strategy for Dental Services" },
  { step: "03", label: "Google Business Profile Optimization" },
  { step: "04", label: "Reviews & Reputation Management" },
  { step: "05", label: "Local Citations & Listings, Link Building" },
  { step: "06", label: "Tracking, Reporting & Scaling" },
];

const DentalChoosePoints = [
  {
    icon: <FaFileAlt />,
    title: "More calls from patients ready to book",
    desc: "PPC generates leads quickly, while SEO builds sustainable growth.",
  },
  {
    icon: <FaEye />,
    title: "Higher rankings for high value treatments",
    desc: "Your clinic appears in multiple positions on search results.",
  },
  {
    icon: <FaDatabase />,
    title: "Transparent reporting and tracking",
    desc: "Performance data shows what drives booked patient appointments.",
  },
  {
    icon: <FaDollarSign />,
    title: "Strategy built for dental offices",
    desc: "SEO reduces dependency on paid ads and supports long-term growth.",
  },
];

const DentalServices = [
  "GBP Optimization",
  "Technical SEO",
  "Local Dentist SEO",
  "Reviews & Reputation",
  "Keyword Targeting",
  "Backlinks",
  "On-Page SEO",
  "Landing Pages",
];

export const metadata: Metadata = {
  title: "Dental SEO Services | Local SEO for Dentists",
  description:
    "Dental SEO services that help dental offices rank higher on Google, dominate local search, and generate more patient calls and bookings.",
  alternates: { canonical: "/services/industry/dental-seo-services" },
};

function Page() {
  return (
    <>
      <section className="dent-sec-1">
        <div className="dent-sec-1-layer">
          <Col lg={9} className="dent-sec-1-content-wrapper">
            <h1 className="dent-sec-1-heading">
              Get More High Value <span>Dental</span> Patients Every Month With
              Proven <span>Local SEO</span>
            </h1>
            <p className="dent-sec-1-sub-head">
              Dental SEO Services | Zonic Media
            </p>
            <p className="dent-sec-1-descrp">
              Zonic Media helps dental offices rank higher on Google, dominate
              local search, and consistently generate calls from patients ready
              to book.
            </p>

            <div className="dent-sec-1-ctas">
              <HashScrollLink
                href="#dental-contact-form"
                className="buttons"
                offset={120}
              >
                Get a Free Call
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
                href="#dental-contact-form"
                className="buttons"
                offset={120}
              >
                Get a Quote
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

            <div className="dent-feature-grid">
              <div className="feature-card">
                <div className="icon-box">
                  <MdOutlineLocationOn />
                </div>
                <p>RANK HIGHER ON GOOGLE</p>
              </div>
              <div className="feature-card">
                <div className="icon-box">
                  <FiPhoneCall />
                </div>
                <p>GET MORE CALLS FROM LOCAL PATIENTS</p>
              </div>
              <div className="feature-card">
                <div className="icon-box">
                  <LuCalendarCheck2 />
                </div>
                <p>BOOK MORE APPOINTMENTS</p>
              </div>
              <div className="feature-card">
                <div className="icon-box">
                  <RiLineChartLine />
                </div>
                <p>SUSTAINABLE GROWTH THAT LASTS</p>
              </div>
            </div>
          </Col>
        </div>
      </section>

      <section className="dent-sec-2">
        <div className="dent-center-head">
          <h2 className="dent-sec-2-heading">
            Turn Google Searches Into <span>Dental Appointments</span>
          </h2>
          <p className="dent-sec-2-descrp">
            Patients search every day for dentists, emergency care, implants,
            Invisalign, whitening, and cosmetic treatments. We position your
            dental practice where those searches happen, then optimize your
            website and Google Business Profile to turn visibility into booked
            appointments.
          </p>
        </div>
      </section>

      <section className="dent-sec-3">
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <div className="dent-sec-img">
              <Image
                src="/images/dental-seo/dental-seo-img-2.jpg"
                fill
                alt="Dental map visibility and local SEO growth"
              />
            </div>
          </Col>
          <Col lg={7}>
            <div className="dent-sec-copy">
              <h2>
                Struggling to Get Consistent Patient <span>Bookings?</span>
              </h2>
              <p>
                If your clinic is not appearing in Google Maps or local search
                results, patients are choosing competitors before they ever find
                your website.
              </p>
              <p>
                We help dental practices improve map visibility, rank for
                high-value treatment searches, and build conversion paths that
                turn searchers into booked patients.
              </p>
              <HashScrollLink
                href="#dental-contact-form"
                className="dent-outline-cta"
                offset={120}
              >
                Get Your Free Dental SEO Audit Today <span>-&gt;</span>
              </HashScrollLink>
            </div>
          </Col>
        </Row>
      </section>

      <section className="dent-sec-4">
        <h2 className="dent-sec-4-heading">
          Why Dental Offices Choose <span>Zonic</span> Media
        </h2>

        <Row className="align-items-center g-4">
          <Col lg={5}>
            <div className="dent-choose-list">
              {DentalChoosePoints.map((point, index) => (
                <div className="dent-choose-card" key={point.title}>
                  <div
                    className={`dent-choose-icon ${
                      index % 2 === 0 ? "yellow" : "dark"
                    }`}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={7}>
            <div className="dent-sec-4-image">
              <Image
                src="/images/dental-seo/dental-seo-img-3.jpg"
                alt="Dental offices choosing Zonic Media SEO"
                fill
              />
            </div>
          </Col>
        </Row>
      </section>

      <section className="dent-sec-5">
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <div className="dent-sec-img">
              <Image
                src="/images/dental-seo/dental-seo-img-4.jpg"
                fill
                alt="Dental practice SEO ranking boost"
              />
            </div>
          </Col>
          <Col lg={7}>
            <div className="dent-sec-copy">
              <h3>Google Business Profile Verification & Setup</h3>
              <p>
                Struggling to get your profile verified or facing suspension
                issues? We help you get verified the right way and make sure
                your profile is fully optimized to attract local patients.
              </p>
              <h3>Local SEO That Gets You Calls</h3>
              <p>
                We position your practice in the Google 3 pack where real
                patient leads happen, from local service targeting to authority
                building and conversion-ready pages.
              </p>
              <h2>
                Dominate Google Maps for <span>&quot;Dentist Near Me&quot;</span>{" "}
                Searches
              </h2>
              <HashScrollLink
                href="#dental-contact-form"
                className="dent-outline-cta"
                offset={120}
              >
                Get Your Free Dental SEO Audit Today <span>-&gt;</span>
              </HashScrollLink>
            </div>
          </Col>
        </Row>
      </section>

      <div className="iaf-section">
        <InlineAuditForm
          heading="Get Your Free Dental Practice SEO Audit"
          description="Share your practice details and we will review your local search rankings, Google Business Profile, and patient conversion gaps at no cost."
        />
      </div>

      <section className="dent-sec-6">
        <div className="dent-center-head">
          <h2>Our Proven Local SEO Process for Dental Offices</h2>
        </div>
        <div className="dent-process-steps">
          {DentalProcessSteps.map((item, index) => (
            <div className="dent-process-step" key={item.step}>
              <div className="dent-process-circle">{item.step}</div>
              {index < DentalProcessSteps.length - 1 && (
                <span className="dent-process-arrow">&gt;&gt;</span>
              )}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dent-sec-7">
        <div className="dent-center-head">
          <h2>
            <span>SEO</span> vs <span>Paid Ads</span> for Dental Offices
          </h2>
          <p>
            Search Engine Optimization and paid advertising can work together,
            but they serve different purposes. SEO builds lasting visibility and
            compounding trust, while paid ads can support faster short-term
            patient acquisition.
          </p>
        </div>

        <div className="dent-compare-inner">
          <div className="dent-compare-panel">
            <h3>SEO</h3>
            <p>
              Search behavior is constantly evolving, and modern dental SEO
              strategies need to keep up.
            </p>
            <div className="dent-timeline-list">
              <div className="dent-timeline-item">
                <span />
                <p>Long term visibility</p>
              </div>
              <div className="dent-timeline-item">
                <span />
                <p>Lower cost per lead over time</p>
              </div>
              <div className="dent-timeline-item">
                <span />
                <p>Consistent inbound leads</p>
              </div>
            </div>
          </div>

          <div className="dent-compare-divider"></div>

          <div className="dent-compare-panel">
            <h3>Ads</h3>
            <p>
              Paid ads can create immediate visibility, but the results depend
              on active spend and campaign efficiency.
            </p>
            <div className="dent-timeline-list">
              <div className="dent-timeline-item">
                <span />
                <p>Stops when budget stops</p>
              </div>
              <div className="dent-timeline-item">
                <span />
                <p>Higher cost per lead</p>
              </div>
              <div className="dent-timeline-item">
                <span />
                <p>Short term results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dent-sec-8">
        <div className="dent-sec-8-top">
          <p>Services</p>
          <HashScrollLink
            href="#dental-contact-form"
            className="dent-yellow-cta"
            offset={120}
          >
            Get a Free Call <span>-&gt;</span>
          </HashScrollLink>
        </div>

        <div className="dent-sec-8-intro">
          <h2>Our Dental Local SEO Services</h2>
          <p>
            We build digital marketing systems designed to generate patient
            calls, increase local visibility, and create long-term growth for
            dental offices.
          </p>
        </div>

        <div className="dent-sec-8-inner">
          <div>
            <div className="dent-service-grid">
              {DentalServices.map((service, index) => (
                <div
                  key={service}
                  className={`dent-service-item ${index === 0 ? "active" : ""}`}
                >
                  <span>{service}</span>
                  <span>-&gt;</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dent-sec-8-image">
            <Image
              src="/images/dental-seo/dental-seo-img-5.jpg"
              alt="Dental local SEO service dashboard"
              fill
            />
          </div>
        </div>
      </section>

      <section className="dent-sec-9">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="dent-sec-copy">
              <h2>Real Growth for Dental Practices</h2>
              <h3>
                Most businesses invest in digital marketing but fail to see
                real results. Why?
              </h3>
              <p>
                Because they focus on traffic instead of conversions. At Zonic
                Media, we build dental SEO systems designed to generate leads,
                increase revenue, and create long-term growth.
              </p>
              <p>
                Whether you are a general dentist, cosmetic dentist, implant
                clinic, or multi-location practice, our strategies are built to
                deliver measurable outcomes, not vanity metrics.
              </p>
              <HashScrollLink
                href="#dental-contact-form"
                className="dent-yellow-cta"
                offset={120}
              >
                Get Your Free Dental SEO Audit Today <span>-&gt;</span>
              </HashScrollLink>
            </div>
          </Col>
          <Col lg={6}>
            <div className="dent-sec-9-image">
              <Image
                src="/images/dental-seo/dental-seo-img-6.jpg"
                alt="Real growth for dental practices"
                fill
              />
            </div>
          </Col>
        </Row>
      </section>

      <section className="dent-sec-testimonial">
        <h2 className="dent-testimonial-heading">What Our Clients Say</h2>
        <div className="dent-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </section>

      <section className="dent-sec-faq">
        <div className="dent-center-head">
          <h2>Frequently Asked Questions About Dental SEO Services</h2>
        </div>
        <div className="dent-faq-wrapper">
          <GmbFaqs items={DentalSeoFaqs} columns={2} />
        </div>
        <Script
          id="dental-seo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://zonicllc.com/services/industry/dental-seo-services",
              mainEntity: DentalSeoFaqs.map((faq) => ({
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
      </section>

      <section className="dent-sec-contact">
        <div className="dent-sec-contact-inner">
          <div className="dent-sec-contact-content">
            <h2>Ready to Grow Your Dental Practice with Local SEO?</h2>
            <p>
              Book a discovery call with Zonic Media and let us build a local
              SEO strategy that drives more patient calls, stronger Google
              rankings, and measurable business growth.
            </p>

            <div className="dent-contact-info-grid">
              <div className="dent-contact-info-card">
                <div className="dent-contact-info-head">
                  <div className="dent-contact-info-icon">
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

              <div className="dent-contact-info-card">
                <div className="dent-contact-info-head">
                  <div className="dent-contact-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <div className="dent-contact-image-wrap">
              <Image
                src="/images/contact-section.jpg"
                fill
                alt="Dental SEO consultation and contact"
                className="dent-contact-image"
              />
            </div>
          </div>

          <div className="dent-contact-form" id="dental-contact-form">
            <LeadContactForm
              leadFormTitle={DentalFormHead.leadFormTitle}
              leadCallText={DentalFormHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Page;
