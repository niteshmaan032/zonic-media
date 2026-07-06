import type { Metadata } from "next";
import "@/app/style/localRoofing.css";
import "@/app/style/hvacSeo.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import { FaChartBar, FaLink, FaSearch, FaStar } from "react-icons/fa";
import { FaGoogle, FaHouseChimney } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2, LuShieldCheck } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";

const HvacSeoFaqs = [
  {
    question: "What is local SEO for HVAC companies?",
    answer:
      "Local SEO for HVAC companies helps your business rank higher in Google Search and Google Maps when homeowners search for heating and cooling services in your area. It focuses on visibility, trust, and lead generation from nearby customers ready to book.",
  },
  {
    question: "How does HVAC local SEO generate more service calls?",
    answer:
      "It improves your presence for high-intent searches such as AC repair, furnace installation, heat pump service, and emergency HVAC support. That means more qualified traffic, more phone calls, and more booked jobs from people already looking for help.",
  },
  {
    question: "How long does HVAC SEO take to work?",
    answer:
      "Most HVAC companies begin seeing ranking gains within a few months, while stronger lead flow usually builds over 4 to 6 months depending on market competition, website quality, and the state of your Google Business Profile.",
  },
  {
    question: "Do HVAC companies need Google Business Profile optimization?",
    answer:
      "Yes. Your Google Business Profile is one of the most important parts of HVAC local SEO because it directly impacts your visibility in the local map pack, call volume, reviews, and service area relevance.",
  },
  {
    question: "What does an HVAC SEO campaign include?",
    answer:
      "A complete campaign typically includes keyword targeting, on-page SEO, service area pages, technical fixes, Google Business Profile optimization, citation building, review strategy, content improvements, and local backlink development.",
  },
  {
    question: "Is local SEO better than Google Ads for HVAC businesses?",
    answer:
      "They solve different problems. Ads can drive leads quickly, while local SEO builds long-term visibility and lower-cost lead generation over time. Many HVAC companies perform best when both channels are used together with a clear strategy.",
  },
  {
    question: "Can you help multi-location HVAC businesses?",
    answer:
      "Yes. We build local SEO systems for single-location HVAC companies and multi-location service businesses, including service area targeting, location pages, and map visibility improvements.",
  },
  {
    question: "How much do HVAC SEO services cost?",
    answer:
      "Pricing depends on your market, competition, number of locations, and growth goals. We scope HVAC SEO around the work needed to improve rankings, increase calls, and support long-term lead growth.",
  },
];

const HvacFormHead = {
  leadFormTitle: "Ready to Get More HVAC Leads?",
  leadCallText: (
    <>
      Let&apos;s build a local SEO strategy that drives more service calls,
      stronger rankings, and steady HVAC lead flow every month.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

const ProcessSteps = [
  { step: "01", label: "Local SEO Audit & Competitor Analysis" },
  { step: "02", label: "Keyword Strategy for HVAC Services" },
  { step: "03", label: "Website & On Page SEO Optimization" },
  { step: "04", label: "Local Citations & Listings, Local Link Building" },
  { step: "05", label: "Reviews & Reputation Management" },
  { step: "06", label: "Tracking, Reporting & Scaling" },
];

const HvacServices = [
  { icon: <FaGoogle />, label: "GBP Optimization" },
  { icon: <FaSearch />, label: "Technical SEO" },
  { icon: <FaHouseChimney />, label: "Local HVAC SEO" },
  { icon: <FaStar />, label: "Reviews & Reputation" },
  { icon: <MdOutlineLocationOn />, label: "Service Area Targeting" },
  { icon: <FaLink />, label: "Backlinks" },
  { icon: <FaChartBar />, label: "On-Page SEO" },
  { icon: <LuShieldCheck />, label: "High-Converting Pages" },
];

const HvacBenefits = [
  {
    title: "More calls from homeowners ready to book",
    desc: "Show up when customers search for AC repair, furnace service, or emergency HVAC help near them.",
  },
  {
    title: "Higher rankings for high-value HVAC searches",
    desc: "Own more local visibility for heating, cooling, installation, maintenance, and repair keywords.",
  },
  {
    title: "Transparent reporting and tracking",
    desc: "See how rankings, calls, form leads, and service-area growth are trending each month.",
  },
  {
    title: "Strategy built for HVAC contractors",
    desc: "Everything is aligned around booked jobs, recurring service demand, and profitable local growth.",
  },
];

export const metadata: Metadata = {
  title: "Local SEO Services for HVAC Companies | Zonic Media",
  description:
    "Local SEO services for HVAC companies. Zonic Media helps heating and cooling businesses rank higher on Google Maps and get more qualified service calls.",
  keywords: [
    "local SEO services for HVAC",
    "HVAC SEO company",
    "SEO for HVAC contractors",
    "HVAC local SEO agency",
    "Google Business Profile for HVAC",
    "HVAC lead generation SEO",
    "Google Maps ranking for HVAC",
    "HVAC marketing agency",
    "SEO for heating and cooling companies",
  ],
  alternates: { canonical: "/services/local-seo-services-for-hvac" },
  openGraph: {
    title: "Local SEO Services for HVAC Companies | Zonic Media",
    description:
      "Local SEO services for HVAC companies. Rank higher on Google Maps and turn heating and cooling searches into qualified service calls.",
    url: "/services/local-seo-services-for-hvac",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "HVAC Local SEO", url: "/services/local-seo-services-for-hvac" },
]);

export default function HvacSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="roof-sec-1 hvac-hero">
        <div className="roof-sec-1-layer hvac-hero-layer">
          <div className="roof-sec-1-content">
            <Col lg={8} className="roof-sec-1-content-wrapper">
              <h1 className="roof-sec-1-heading">
                Get More <span>HVAC</span> Leads Every Month With Proven Local
                SEO
              </h1>
              <p className="roof-sec-1-descrp">
                Boost your HVAC business visibility with targeted SEO
                strategies that bring high-intent local customers straight to
                you.
              </p>
              <p className="roof-sec-1-descrp hvac-hero-copy">
                Rank higher on Google, get more calls, and turn searches into
                consistent service bookings.
              </p>

              <div className="roof-sec-1-ctas">
                <HashScrollLink
                  href="#hvac-contact-form"
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
                  href="#hvac-contact-form"
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

              <div className="roof-feature-grid">
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
                  <p>GET MORE CALLS FROM LOCAL CUSTOMERS</p>
                </div>
                <div className="feature-card">
                  <div className="icon-box">
                    <LuCalendarCheck2 />
                  </div>
                  <p>BOOK MORE JOBS &amp; GROW YOUR BUSINESS</p>
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
        </div>
      </div>

      <section className="hvac-sec-2">
        <div className="hvac-center-copy">
          <h2>Struggling to Get Consistent HVAC Leads?</h2>
          <p className="hvac-accent-copy">
            Most businesses invest in digital marketing but fail to see real
            results. Why?
          </p>
          <p>
            Because they focus on traffic instead of conversions. At Zonic
            Media, we build digital marketing systems designed to generate
            leads, increase revenue, and create long-term growth for businesses
            in Philadelphia. Whether you are a local service provider or a
            growing company, our strategies are built to deliver measurable
            outcomes, not just vanity metrics.
          </p>
        </div>
      </section>

      <section className="hvac-sec-3">
        <div className="hvac-intro-card">
          <div className="hvac-intro-image">
            <Image
              src="/images/hvac-seo/hvac-seo-img-2.jpg"
              fill
              alt="HVAC technician working on local search growth"
            />
          </div>

          <div className="hvac-intro-copy">
            <h2>Digital Marketing Agency in Philadelphia Focused on Real Growth</h2>
            <p className="hvac-accent-copy">
              Most businesses invest in digital marketing but fail to see real
              results. Why?
            </p>
            <p>
              Because they focus on traffic instead of conversions. At Zonic
              Media, we take a different approach. We build digital marketing
              systems designed to generate leads, increase revenue, and create
              long-term growth for businesses in Philadelphia.
            </p>
            <p>
              Whether you are a local service provider or a growing company,
              our strategies are built to deliver measurable outcomes, not just
              vanity metrics.
            </p>
          </div>
        </div>
      </section>

      <div className="roof-sec-5">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-sec-5-heading">
              Our Proven Local SEO Process for HVAC Companies
            </h2>
          </div>
        </div>

        <div className="roof-sec-5-steps">
          {ProcessSteps.map((item, index) => (
            <div className="roof-sec-5-step-wrap" key={item.step}>
              <div className="roof-sec-5-circle">{item.step}</div>
              {index < ProcessSteps.length - 1 && (
                <span className="roof-sec-5-arrow">&rsaquo;&rsaquo;</span>
              )}
              <p className="roof-sec-5-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="hvac-sec-4">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-sec-4-heading hvac-sec-4-heading">
              Dominate Google Maps for HVAC Searches
            </h2>
          </div>
        </div>

        <div className="hvac-map-grid">
          <div className="hvac-benefit-list">
            {HvacBenefits.map((item, index) => (
              <div className="hvac-benefit-card" key={item.title}>
                <div className="hvac-benefit-badge">{`0${index + 1}`}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hvac-map-image">
            <Image
              src="/images/hvac-seo/hvac-seo-img-3.jpg"
              fill
              alt="HVAC local SEO dashboard and reporting"
            />
          </div>
        </div>
      </section>

      <section className="hvac-sec-5">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="hvac-results-image">
              <Image
                src="/images/hvac-seo/hvac-seo-img-4.jpg"
                fill
                alt="HVAC local SEO lead growth results"
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="hvac-results-copy">
              <p>
                Generate consistent HVAC leads every month with proven local SEO
                strategies designed to put your business in front of high-intent
                customers right when they&apos;re searching.
              </p>
              <p>
                From optimizing your Google Business Profile and targeting
                near-me keywords to building strong local authority and
                improving your website performance, we focus on driving real
                visibility that turns into calls and booked jobs.
              </p>
              <p>
                Our data-driven approach ensures higher rankings, increased
                local trust, and a steady flow of quality leads, so you can
                grow your HVAC business without relying on unpredictable ads or
                chasing customers.
              </p>
              <h2>
                <span>Real Growth</span> for HVAC Contractors
              </h2>
              <HashScrollLink
                href="#hvac-contact-form"
                className="hvac-results-cta"
                offset={120}
              >
                Get Your Free HVAC SEO Audit Today <span>&rarr;</span>
              </HashScrollLink>
            </div>
          </Col>
        </Row>
      </section>

      <div className="roof-sec-7">
        <div className="roof-sec-7-top-bar">
          <p className="roof-sec-7-label">Services</p>
          <HashScrollLink
            href="#hvac-contact-form"
            className="roof-sec-7-cta-btn"
            offset={120}
          >
            Get a Free Call &nbsp; &rarr;
          </HashScrollLink>
        </div>

        <div className="roof-sec-7-inner">
          <div className="roof-sec-7-left">
            <h2 className="roof-sec-7-heading">Our HVAC Local SEO Services</h2>
            <p className="roof-sec-7-descrp">
              We build digital marketing systems designed to generate leads,
              increase revenue, and create long term growth for HVAC businesses
              that want stronger local visibility.
            </p>

            <div className="roof-sec-7-grid">
              {HvacServices.map((service, index) => (
                <div
                  key={service.label}
                  className={`roof-sec-7-item${index === 0 ? " active" : ""}`}
                >
                  <span>{service.label}</span>
                  <span className="roof-sec-7-arrow">&rarr;</span>
                </div>
              ))}
            </div>
          </div>

          <div className="roof-sec-7-img-cont">
            <Image
              src="/images/hvac-seo/hvac-seo-img-5.jpg"
              alt="HVAC SEO services"
              fill
              className="roof-sec-7-img"
            />
          </div>
        </div>
      </div>

      <section className="hvac-sec-6">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="hvac-growth-copy">
              <h2>Turn Google Searches Into HVAC Service Calls</h2>
              <p className="hvac-accent-copy">
                Most businesses invest in digital marketing but fail to see
                real results. Why?
              </p>
              <p>
                Because they focus on traffic instead of conversions. At Zonic
                Media, we take a different approach. We build digital marketing
                systems designed to generate leads, increase revenue, and create
                long-term growth for businesses in Philadelphia.
              </p>
              <HashScrollLink
                href="#hvac-contact-form"
                className="hvac-results-cta"
                offset={120}
              >
                Get Your Free HVAC SEO Audit Today <span>&rarr;</span>
              </HashScrollLink>
            </div>
          </Col>

          <Col lg={6}>
            <div className="hvac-growth-image">
              <Image
                src="/images/hvac-seo/hvac-seo-img-6.jpg"
                fill
                alt="HVAC search visibility and analytics"
              />
            </div>
          </Col>
        </Row>
      </section>

      <div className="roof-sec-testimonial">
        <h2 className="roof-testimonial-heading">What Our Clients Say</h2>
        <div className="roof-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      <div className="roof-sec-faq">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-faq-heading">
              Frequently Asked Questions About Local SEO for HVAC Companies
            </h2>
          </div>
        </div>
        <div className="roof-faq-wrapper">
          <GmbFaqs items={HvacSeoFaqs} columns={2} />
        </div>

        <Script
          id="hvac-seo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://zonicllc.com/services/local-seo-services-for-hvac",
              mainEntity: HvacSeoFaqs.map((faq) => ({
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

      <div className="roof-sec-contact">
        <div className="roof-sec-contact-inner">
          <div className="roof-sec-contact-content">
            <h2 className="roof-sec-contact-heading">
              Ready to Grow Your HVAC Business with Local SEO?
            </h2>
            <p className="roof-sec-contact-descrp">
              Book a discovery call with Zonic Media and let us build a local
              SEO strategy that drives more service calls, stronger map
              visibility, and measurable business growth.
            </p>

            <div className="roof-sec-contact-info-grid">
              <div className="roof-sec-contact-info-card">
                <div className="roof-sec-contact-info-head">
                  <div className="roof-sec-contact-info-icon">
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

              <div className="roof-sec-contact-info-card">
                <div className="roof-sec-contact-info-head">
                  <div className="roof-sec-contact-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <div className="roof-sec-contact-image-wrap">
              <Image
                src="/images/contact-section.jpg"
                fill
                alt="HVAC SEO consultation and strategy"
                className="roof-sec-contact-image"
              />
            </div>
          </div>

          <div className="roof-sec-contact-form" id="hvac-contact-form">
            <LeadContactForm
              leadFormTitle={HvacFormHead.leadFormTitle}
              leadCallText={HvacFormHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
