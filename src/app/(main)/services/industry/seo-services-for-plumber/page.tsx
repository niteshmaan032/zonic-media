import type { Metadata } from "next";
import "@/app/style/plumbSeo.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";

const plumberFaqs = [
  {
    question: "What is plumbing SEO?",
    answer:
      "Plumbing SEO is the process of optimizing your business to rank higher in Google search results and Maps so customers can find and contact you for plumbing services.",
  },
  {
    question: "How can SEO help my plumbing business get more leads?",
    answer:
      "SEO increases your visibility when customers search for plumbing services, leading to more calls, service requests, and booked jobs.",
  },
  {
    question: "How long does it take to see results from plumbing SEO?",
    answer:
      "Most plumbing businesses start seeing improvements within 4 to 8 weeks, with stronger results in 3 to 6 months depending on competition.",
  },
  {
    question: "What keywords are important for plumbing SEO?",
    answer:
      "Important keywords include plumber near me, emergency plumber, drain cleaning, water heater repair, and plumbing services.",
  },
  {
    question: "Is SEO better than Google Ads for plumbing companies?",
    answer:
      "SEO provides long-term results and lower cost per lead over time, while ads provide immediate visibility. A combination of both usually works best.",
  },
  {
    question: "Do I need a website for plumbing SEO?",
    answer:
      "Yes. A well-optimized website combined with a strong Google Business Profile is essential for rankings and conversions.",
  },
  {
    question: "How do I choose the right plumbing SEO company?",
    answer:
      "Look for an agency with local SEO experience, clear strategy, transparent reporting, and a focus on generating real leads.",
  },
  {
    question: "Why do plumbing companies choose Zonic Media for SEO?",
    answer:
      "Plumbing companies choose Zonic Media for its industry-focused approach, local SEO expertise, and ability to deliver measurable growth in calls and bookings.",
  },
];

const formHead = {
  leadFormTitle: "Ready to Get More Plumbing Jobs Every Month?",
  leadCallText: (
    <>
      Let&apos;s build a local SEO strategy that drives more calls, stronger
      rankings, and booked plumbing jobs every month.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

const processSteps = [
  { step: "01", label: "Local SEO Audit & Competitor Analysis" },
  { step: "02", label: "Keyword Strategy for Plumbing Services" },
  { step: "03", label: "Website & On-Page SEO Optimization" },
  { step: "04", label: "Local Citations & Listings, Local Link Building" },
  { step: "05", label: "Reviews & Reputation Management" },
  { step: "06", label: "Tracking, Reporting & Scaling" },
];

const growthPoints = [
  {
    badge: "01",
    title: "More Local Visibility",
    desc: "Appear in 'plumber near me' searches and rank higher on Google Maps to reach nearby customers.",
  },
  {
    badge: "02",
    title: "High-Quality Leads",
    desc: "Attract people actively searching for plumbing services and ready to book.",
  },
  {
    badge: "03",
    title: "Increased Calls & Bookings",
    desc: "Turn online searches into real inquiries, calls, and confirmed jobs.",
  },
  {
    badge: "04",
    title: "Builds Trust & Credibility",
    desc: "Higher rankings and positive reviews make your business look more professional.",
  },
  {
    badge: "05",
    title: "Long-Term Growth",
    desc: "Generate consistent leads over time without depending only on paid ads.",
  },
];

const plumbingServices = [
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
  title: "SEO Services for Plumbers | Get More Plumbing Leads | Zonic Media",
  description:
    "Plumbing SEO services that help plumbing businesses rank higher on Google, dominate local search, and generate more calls and booked jobs.",
};

function page() {
  return (
    <>
      <div className="roof-sec-1">
        <div className="roof-sec-1-layer">
          <div className="roof-sec-1-content">
            <Col lg={8} className="roof-sec-1-content-wrapper">
              <h1 className="roof-sec-1-heading">
                Get More <span>Plumbing</span> Leads Every Month With Proven
                Local SEO
              </h1>
              <p className="roof-sec-1-sub-head">
                Plumbing SEO Services | Zonic Media
              </p>
              <p className="roof-sec-1-descrp">
                If your plumbing business is not showing up when customers
                search on Google, you are losing service calls and jobs to
                competitors every day.
              </p>
              <p className="roof-sec-1-descrp">
                Zonic Media helps plumbing companies rank higher on Google,
                dominate local search, and consistently generate calls from
                customers who need plumbing services right now.
              </p>

              <div className="roof-sec-1-ctas">
                <HashScrollLink
                  href="#plumber-contact-form"
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
                  href="#plumber-contact-form"
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

      <div className="roof-sec-2">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-sec-2-heading">
              Turn Google Searches Into <span>Plumbing Jobs</span>
            </h2>
            <p className="roof-sec-2-descrp">
              Turn local Google searches into real plumbing jobs with a
              strategy that puts your business right where customers are
              looking. When homeowners search for repairs, installation, or
              emergency plumbing, your company appears at the top with a strong,
              optimized presence.
            </p>
          </div>
        </div>
      </div>

      <div className="roof-sec-3">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="roof-sec-3-content">
              <h2 className="roof-sec-3-heading">
                Turn Local Searches into High-Quality <span>Plumbing Leads</span>
              </h2>
              <p className="roof-sec-3-descrp">
                Grow your plumbing business with powerful local SEO that puts
                you in front of customers exactly when they need you.
              </p>
              <p className="roof-sec-3-descrp">
                We optimize your Google Business Profile, target high-intent
                keywords like plumber near me, and improve your website to rank
                higher on search results and maps.
              </p>
              <p className="roof-sec-3-descrp">
                Our strategy focuses on driving real leads, calls, bookings,
                and inquiries by combining technical SEO, local listings,
                reviews, and conversion-focused design.
              </p>
              <HashScrollLink
                href="#plumber-contact-form"
                className="roof-sec-3-cta"
                offset={120}
              >
                Get Your Free Plumbing SEO Audit Today &nbsp; &rarr;
              </HashScrollLink>
            </div>
          </Col>
          <Col lg={6}>
            <div className="roof-sec-3-img-cont">
              <Image
                src="/images/plumb-seo/Frame%20970.jpg"
                fill
                alt="Plumbing contractor local SEO lead generation"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="roof-sec-5">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-sec-5-heading">
              Our Proven Local SEO Process for Plumbing Companies
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
            <div className="plumb-growth-copy">
              <h2>Real Growth for Plumbing Contractors</h2>
              <div className="plumb-growth-image">
                <Image
                  src="/images/plumb-seo/image%201061.jpg"
                  fill
                  alt="Real growth for plumbing contractors"
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="plumb-growth-points">
              {growthPoints.map((point) => (
                <div className="plumb-growth-point" key={point.badge}>
                  <div className="plumb-growth-badge">{point.badge}</div>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>

      <div className="roof-sec-6">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-sec-6-heading">
              <span>SEO</span> vs <span>Paid Ads</span> for Plumbing Companies
            </h2>
            <p className="roof-sec-6-intro">
              Search Engine Marketing includes Search Engine Optimization for
              organic rankings and paid search advertising through platforms
              like Google Ads. Together, they help your plumbing company appear
              at every stage of the customer journey.
            </p>
          </div>
        </div>

        <div className="roof-sec-6-inner">
          <div className="roof-sec-6-panel">
            <h3 className="roof-sec-6-panel-title">
              <span>SEO</span>
            </h3>
            <p className="roof-sec-6-panel-text">
              SEO builds brand trust, local visibility, and lower acquisition
              costs over time.
            </p>
            <div className="roof-timeline-list">
              <div className="roof-timeline-item">
                <span className="roof-timeline-dot" />
                <p>Long-term visibility</p>
              </div>
              <div className="roof-timeline-item">
                <span className="roof-timeline-dot" />
                <p>Lower cost per lead over time</p>
              </div>
              <div className="roof-timeline-item">
                <span className="roof-timeline-dot" />
                <p>Consistent inbound leads</p>
              </div>
            </div>
          </div>

          <div className="roof-sec-6-divider" />

          <div className="roof-sec-6-panel">
            <h3 className="roof-sec-6-panel-title">
              <span>Ads</span>
            </h3>
            <p className="roof-sec-6-panel-text">
              Paid campaigns can create quick visibility, but results depend on
              active spend and ongoing optimization.
            </p>
            <div className="roof-timeline-list">
              <div className="roof-timeline-item">
                <span className="roof-timeline-dot" />
                <p>Stops when budget stops</p>
              </div>
              <div className="roof-timeline-item">
                <span className="roof-timeline-dot" />
                <p>Higher cost per lead</p>
              </div>
              <div className="roof-timeline-item">
                <span className="roof-timeline-dot" />
                <p>Short-term results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plumb-maps-section">
        <Row className="align-items-stretch g-4 g-lg-0">
          <Col lg={6}>
            <div className="plumb-maps-copy">
              <p className="plumb-maps-text">
                From optimizing your Google Business Profile and targeting
                &quot;near me&quot; keywords to building strong local authority
                and improving your website performance, our focus is on driving
                qualified plumbing calls.
              </p>
              <p className="plumb-maps-text">
                Get consistent plumbing leads every month with proven local SEO
                that drives real calls and bookings.
              </p>
              <h2 className="plumb-maps-heading">
                Dominate Google Maps for Plumbing Searches. Most customers
                choose from the top results on Google Maps.
              </h2>
              <HashScrollLink
                href="#plumber-contact-form"
                className="plumb-maps-cta"
                offset={120}
              >
                Get Your Free Plumbing SEO Audit Today <span>&rarr;</span>
              </HashScrollLink>
            </div>
          </Col>
          <Col lg={6}>
            <div className="plumb-maps-image">
              <Image
                src="/images/plumb-seo/Frame%20970%20(1).jpg"
                alt="Plumber working on pipes for Google Maps plumbing searches"
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
            href="#plumber-contact-form"
            className="roof-sec-7-cta-btn"
            offset={120}
          >
            Get a Free Call &nbsp; &rarr;
          </HashScrollLink>
        </div>

        <div className="roof-sec-7-inner">
          <div className="roof-sec-7-left">
            <h2 className="roof-sec-7-heading">Our Plumbing Local SEO Services</h2>
            <p className="roof-sec-7-descrp">
              We build digital marketing systems designed to generate more
              leads, increase revenue, and create long-term growth for
              plumbing companies.
            </p>

            <div className="roof-sec-7-grid">
              {plumbingServices.map((service, index) => (
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
              src="/images/plumb-seo/Frame%20970%20(3).jpg"
              alt="Our plumbing local SEO services"
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
              <div className="plumb-availability-image">
                <Image
                  src="/images/plumb-seo/Frame%20970%20(2).jpg"
                  alt="Plumbing service area availability"
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
                  We work with a limited number of plumbing companies in each
                  service area so we can stay focused on rankings, leads, and
                  measurable growth without taking on direct local competitors.
                </p>
                <HashScrollLink
                  href="#plumber-contact-form"
                  className="plumb-availability-cta"
                  offset={120}
                >
                  Get Your Free Plumbing SEO Audit Today <span>&rarr;</span>
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
              Frequently Asked Questions About Plumbing SEO Services
            </h2>
          </div>
        </div>

        <div className="phila-sec-9-faq-wrapper">
          <GmbFaqs items={plumberFaqs} columns={2} />
        </div>

        <Script
          id="plumber-seo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: plumberFaqs.map((faq) => ({
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
              Ready to Grow Your Plumbing Business with Local SEO?
            </h2>
            <p className="phila-sec-10-descrp">
              Book a discovery call with Zonic Media and let us build a custom
              plumbing SEO strategy focused on more calls, stronger online
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
                src="/images/real-est-industries/realest-img-5.jpg"
                fill
                alt="Plumbing SEO consultation and contact"
                className="phila-sec-10-image"
              />
            </div>
          </div>

          <div className="phila-sec-10-contact-form" id="plumber-contact-form">
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
