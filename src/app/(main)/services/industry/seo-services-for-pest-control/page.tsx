import type { Metadata } from "next";
import "@/app/style/pestSeo.css";
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
import { FaEye } from "react-icons/fa";
import { FaCircleDollarToSlot, FaListCheck, FaMapLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Pest Control SEO", url: "/services/industry/seo-services-for-pest-control" },
]);

const pestFaqs = [
  {
    question: "What is pest control SEO?",
    answer:
      "Pest control SEO is the process of improving your rankings on Google Search and Google Maps so homeowners and commercial customers can find your business when they need pest control services.",
  },
  {
    question: "How can SEO help my pest control company get more leads?",
    answer:
      "SEO helps your company appear for high-intent searches like pest control near me, termite treatment, rodent control, and exterminator services, which leads to more calls and booked inspections.",
  },
  {
    question: "How long does pest control SEO take to work?",
    answer:
      "Most pest control businesses begin seeing ranking improvements within a few months, with stronger lead flow building as your map visibility, website authority, and local trust improve.",
  },
  {
    question: "Is Google Maps important for pest control companies?",
    answer:
      "Yes. Many homeowners choose from the top Google Maps results when they need a nearby exterminator or urgent pest inspection.",
  },
  {
    question: "Is SEO better than paid ads for pest control?",
    answer:
      "SEO builds long-term visibility and lowers lead cost over time, while paid ads can drive faster short-term traffic. Many pest control companies benefit from combining both.",
  },
  {
    question: "What pest control keywords should be targeted?",
    answer:
      "Important keywords include pest control near me, exterminator, termite treatment, rodent control, bed bug treatment, cockroach control, and local service-area terms.",
  },
  {
    question: "Can Zonic Media help my pest control business rank on Google Maps?",
    answer:
      "Yes. We optimize your Google Business Profile, local listings, service pages, reviews, and location authority to improve Google Maps visibility.",
  },
  {
    question: "Why choose Zonic Media for pest control SEO services?",
    answer:
      "We focus on real business growth, stronger local visibility, and campaigns designed to generate qualified pest control calls and bookings instead of vanity metrics.",
  },
];

const formHead = {
  leadFormTitle: "Ready to Get More Pest Control Leads?",
  leadCallText: (
    <>
      Let&apos;s build a local SEO strategy that drives more calls, stronger
      rankings, and booked pest control jobs every month.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

const processSteps = [
  { step: "01", label: "Local SEO Audit & Competitor Analysis" },
  { step: "02", label: "Keyword Strategy for Pest Control Services" },
  { step: "03", label: "Website & On-Page SEO Optimization" },
  { step: "04", label: "Local Citations & Listings, Local Link Building" },
  { step: "05", label: "Reviews & Reputation Management" },
  { step: "06", label: "Tracking, Reporting & Scaling" },
];

const mapCards = [
  {
    icon: <FaListCheck />,
    yellow: true,
    title: "Rank in the local pack",
    desc: "Show up where nearby homeowners are searching when pest problems need immediate attention.",
  },
  {
    icon: <FaEye />,
    title: "Optimize your Google Business Profile",
    desc: "Strengthen map visibility, service categories, and local trust signals across your listing.",
  },
  {
    icon: <FaMapLocationDot />,
    yellow: true,
    title: "Increase reviews and trust",
    desc: "Build stronger credibility so customers choose your pest control company over nearby competitors.",
  },
  {
    icon: <FaCircleDollarToSlot />,
    title: "Capture nearby pest control searches",
    desc: "Reduce dependence on paid ads by earning steady organic calls from your service areas.",
  },
];

const whyChooseItems = [
  "More calls from customers ready to book",
  "Increased visibility in your service areas",
  "Higher rankings for pest control services",
  "Transparent reporting and performance tracking",
  "A strategy built specifically for pest control businesses",
];

const services = [
  "GBP Optimization",
  "Technical SEO",
  "Local Keywords",
  "Reviews & Reputation",
  "Service Area SEO",
  "Backlinks",
  "On-Page SEO",
  "Landing Pages",
];

export const metadata: Metadata = {
  title: "SEO Services for Pest Control Companies",
  description:
    "Pest control SEO services that help exterminators rank higher on Google, dominate local search, and generate more calls and booked inspections.",
  keywords: [
    "pest control SEO services",
    "local SEO for pest control companies",
    "pest control marketing agency",
    "pest control lead generation",
    "Google Maps ranking for pest control",
    "Google Business Profile for exterminators",
    "exterminator SEO",
    "termite treatment SEO",
    "rodent control leads",
    "pest control company marketing",
  ],
  alternates: { canonical: "/services/industry/seo-services-for-pest-control" },
};

function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="phila-seo-sec-1 pest-hero">
        <div className="phila-seo-sec-1-layer">
          <div className="phila-seo-sec-1-banner-image">
            <Image
              src="/images/pest-seo/ChatGPT%20Image%20May%204,%202026,%2003_09_27%20PM%201.jpg"
              alt="Pest control near me Google Maps card"
              width={260}
              height={420}
              priority
            />
          </div>

          <div className="phila-seo-sec-1-content">
            <Col lg={8} className="phila-seo-sec-1-content-wrapper">
              <h1 className="phila-seo-sec-1-heading">
                Get More <span>Pest Control Leads</span> Every Month With
                Proven Local SEO
              </h1>
              <p className="phila-seo-sec-1-sub-head">
                Pest Control SEO Services | Zonic Media
              </p>
              <p className="phila-seo-sec-1-descrp">
                If your pest control business is not showing up when customers
                search on Google, you are losing service calls and jobs to
                competitors every day.
              </p>
              <p className="phila-seo-sec-1-descrp">
                Zonic Media helps pest control companies rank higher on Google,
                dominate local search, and consistently generate calls from
                customers who need extermination and prevention services right
                now.
              </p>

              <div className="phila-seo-sec-1-ctas">
                <HashScrollLink
                  href="#pest-contact-form"
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
                  href="#pest-contact-form"
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

              <div className="phila-seo-feature-grid">
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

      <div className="roof-sec-2">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper pest-intro-copy">
            <h2>
              Struggling to Get Consistent <span>Pest Control</span> Leads?
            </h2>
            <p>
              Turn local Google searches into real pest control jobs with a
              strategy that puts your business right where customers are
              looking. When homeowners search for exterminators, termite
              treatment, rodent control, or inspections, your company should
              appear with a strong, optimized presence.
            </p>
          </div>
        </div>
      </div>

      <div className="pest-map-grid">
        <h2 className="pest-map-grid-heading">
          Dominate Google Maps for Pest Control Searches
        </h2>
        <Row className="align-items-stretch g-4">
          <Col lg={5}>
            <div className="pest-map-cards">
              {mapCards.map((item) => (
                <div className="pest-map-card" key={item.title}>
                  <div
                    className={`pest-map-card-icon${item.yellow ? " yellow" : ""}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={7}>
            <div className="pest-map-image">
              <Image
                src="/images/pest-seo/Frame%20970%20(1).jpg"
                alt="Pest control SEO dashboard and growth metrics"
                fill
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="pest-growth-story">
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <div className="pest-growth-story-image">
              <Image
                src="/images/pest-seo/Frame%20970.jpg"
                alt="Pest control team servicing a home"
                fill
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="pest-growth-story-copy">
              <h2>
                Grow Your Pest Control Business with Targeted{" "}
                <span>SEO Strategies</span>
              </h2>
              <p>
                Generate consistent pest control leads every month with proven
                local SEO strategies designed to put your business in front of
                high-intent customers right when they are searching.
              </p>
              <p>
                From optimizing your Google Business Profile and targeting
                &quot;near me&quot; keywords to building strong local authority
                and improving your website performance, we focus on driving
                real visibility that turns into calls and booked jobs.
              </p>
              <HashScrollLink
                href="#pest-contact-form"
                className="plumb-availability-cta"
                offset={120}
              >
                Get Your Free Pest SEO Audit Today <span>&rarr;</span>
              </HashScrollLink>
            </div>
          </Col>
        </Row>
      </div>

      <div className="iaf-section">
        <InlineAuditForm
          heading="Get Your Free Pest Control SEO Audit"
          description="Share your business details and we will review your local search rankings, Google Business Profile, and lead conversion gaps at no cost."
        />
      </div>

      <div className="roof-sec-5">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-sec-5-heading">
              Our Proven Local SEO Process for Pest Control Companies
            </h2>
          </div>
        </div>

        <div className="roof-sec-5-steps">
          {processSteps.map((item, index) => (
            <div className="roof-sec-5-step-wrap" key={item.step}>
              <div className="roof-sec-5-circle">{item.step}</div>
              {index < processSteps.length - 1 && (
                <span className="roof-sec-5-arrow">&rsaquo;&rsaquo;</span>
              )}
              <p className="roof-sec-5-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="plumb-growth-section">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="plumb-growth-image">
              <Image
                src="/images/pest-seo/Frame%20970%20(2).jpg"
                fill
                alt="Why pest control companies choose Zonic Media"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="plumb-growth-copy">
              <h2>
                Why Pest Control Companies Choose <span>Zonic Media</span>
              </h2>
              <p>
                We are not a generic SEO agency. We understand how customers
                search for exterminators, inspections, and urgent pest control
                services in local markets.
              </p>
              <ul className="pest-why-list">
                {whyChooseItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className="plumb-maps-section">
        <Row className="align-items-stretch g-4 g-lg-0">
          <Col lg={6}>
            <div className="plumb-maps-copy pest-map-copy">
              <p className="plumb-maps-text">
                From optimizing your Google Business Profile and targeting
                &quot;near me&quot; keywords to building strong local authority
                and improving your website performance, we focus on driving
                real visibility that turns into calls and booked jobs.
              </p>
              <p className="plumb-maps-text">
                Our data-driven approach helps you earn stronger local trust, a
                steadier flow of quality leads, and better rankings across your
                target service areas.
              </p>
              <p className="plumb-maps-text">
                Whether you are targeting residential pest removal, termite
                inspections, rodent control, or recurring prevention plans, we
                build SEO systems that help your business show up at the exact
                moment nearby customers are ready to call.
              </p>
              <p className="plumb-maps-text">
                We focus on lead quality, map visibility, and service-area
                coverage so your website and Google presence keep generating
                inquiries beyond short-term ad spend.
              </p>
              <h2 className="plumb-maps-heading">
                Get More <span>Pest Control Leads</span> with Local SEO
              </h2>
              <HashScrollLink
                href="#pest-contact-form"
                className="plumb-maps-cta"
                offset={120}
              >
                Get Your Free Pest SEO Audit Today <span>&rarr;</span>
              </HashScrollLink>
            </div>
          </Col>
          <Col lg={6}>
            <div className="plumb-maps-image">
              <Image
                src="/images/pest-seo/Frame%20970%20(3).jpg"
                alt="Pest control local SEO rankings and leads"
                fill
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="roof-sec-7">
        <div className="roof-sec-7-top-bar">
          <p className="roof-sec-7-label">Services</p>
          <HashScrollLink
            href="#pest-contact-form"
            className="roof-sec-7-cta-btn"
            offset={120}
          >
            Get a Free Call &nbsp; &rarr;
          </HashScrollLink>
        </div>

        <div className="roof-sec-7-inner">
          <div className="roof-sec-7-left">
            <h2 className="roof-sec-7-heading">
              Our Pest Control Local SEO Services
            </h2>
            <p className="roof-sec-7-descrp">
              We build digital marketing systems designed to generate leads,
              increase revenue, and create long-term growth for pest control
              businesses.
            </p>

            <div className="roof-sec-7-grid">
              {services.map((service, index) => (
                <div
                  key={service}
                  className={`roof-sec-7-item${index === 0 ? " active" : ""}`}
                >
                  <span>{service}</span>
                  <span className="roof-sec-7-arrow">&rarr;</span>
                </div>
              ))}
            </div>
          </div>

          <div className="roof-sec-7-img-cont">
            <Image
              src="/images/pest-seo/Frame%20970%20(4).jpg"
              alt="Our pest control local SEO services"
              fill
              className="roof-sec-7-img"
            />
          </div>
        </div>
      </div>

      <div className="plumb-availability">
        <div className="plumb-availability-card">
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <div className="plumb-availability-image pest-availability-image">
                <Image
                  src="/images/pest-seo/Frame%20970%20(6).jpg"
                  alt="Limited pest control service area availability"
                  fill
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="plumb-availability-copy">
                <p className="phila-label plumb-availability-label">
                  LIMITED AVAILABILITY
                </p>
                <h2>Limited Availability Across Each Service Area</h2>
                <p>
                  We work with a limited number of pest control companies in
                  each market so we can stay focused on rankings, lead quality,
                  and measurable local growth without taking on direct area
                  competitors.
                </p>
                <HashScrollLink
                  href="#pest-contact-form"
                  className="plumb-availability-cta"
                  offset={120}
                >
                  Get Your Free Pest SEO Audit Today <span>&rarr;</span>
                </HashScrollLink>
              </div>
            </Col>
          </Row>
        </div>
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
              Frequently Asked Questions About Pest Control SEO Services
            </h2>
          </div>
        </div>

        <div className="phila-sec-9-faq-wrapper">
          <GmbFaqs items={pestFaqs} columns={2} />
        </div>

        <Script
          id="pest-seo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://zonicllc.com/services/industry/seo-services-for-pest-control",
              mainEntity: pestFaqs.map((faq) => ({
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
              Ready to Grow Your Pest Control Business with Local SEO?
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media and let us build a custom
              pest control SEO strategy focused on more calls, stronger online
              visibility, and real business growth.
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
                alt="Pest control SEO consultation and contact"
                className="phila-sec-10-image"
              />
            </div>
          </div>

          <div className="phila-sec-10-contact-form" id="pest-contact-form">
            <LeadContactForm
              leadFormTitle={formHead.leadFormTitle}
              leadCallText={formHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
