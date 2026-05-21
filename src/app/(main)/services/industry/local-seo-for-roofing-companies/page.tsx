import type { Metadata } from "next";
import "@/app/style/localRoofing.css";
import "@/app/style/carTow.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import InlineAuditForm from "@/app/components/InlineAuditForm";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import { FaSearch, FaLink, FaStar, FaChartBar } from "react-icons/fa";
import { FaGoogle, FaHouseChimney } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2, LuShieldCheck } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";
import Footer from "@/app/components/Footer";

const RoofingSeoFaqs = [
  {
    question: "What is local SEO for roofing companies?",
    answer:
      "Local SEO for roofing companies is a strategy that helps your business rank higher on Google Search and Google Maps when homeowners search for roofing services near them. It includes optimizing your Google Business Profile, website, local citations, and reviews to generate consistent roofing leads.",
  },
  {
    question: "How long does local SEO take to generate roofing leads?",
    answer:
      "Most roofing companies start seeing ranking improvements within 2 to 3 months, with stronger lead flow developing within 4 to 6 months depending on competition, market size, and the current state of your online presence.",
  },
  {
    question: "Why do roofing companies need local SEO?",
    answer:
      "Homeowners search for roofing services on Google every day. If your business does not appear at the top of search results or Google Maps, you are losing customers to competitors who do. Local SEO ensures your roofing company shows up when customers are ready to hire.",
  },
  {
    question: "What does a roofing SEO strategy include?",
    answer:
      "A complete roofing SEO strategy includes Google Business Profile optimization, local keyword targeting, website on-page SEO, technical SEO, local citation building, review management, backlink acquisition, and service-area page creation.",
  },
  {
    question: "Is local SEO better than Google Ads for roofers?",
    answer:
      "Local SEO builds long-term visibility and generates ongoing organic leads without paying for every click. Google Ads deliver faster but stop the moment you stop spending. Many successful roofing companies use both together for the best results.",
  },
  {
    question: "Can Zonic Media help my roofing company rank on Google Maps?",
    answer:
      "Yes. Our roofing SEO services include full Google Business Profile optimization, citation management, review strategies, and local ranking improvements to help you appear prominently in the Google Maps 3-Pack.",
  },
  {
    question: "Do you work with roofing companies outside of Philadelphia?",
    answer:
      "Yes. We provide local SEO services for roofing companies across the United States. Whether you are in a small market or a major metro area, our strategies are customized to your competition and service area.",
  },
  {
    question: "How much does local SEO for roofing companies cost?",
    answer:
      "Pricing depends on your market competition, service area size, and goals. We offer custom SEO packages for roofing companies at every stage of growth. Contact us for a free audit and pricing consultation.",
  },
];

const RoofingFormHead = {
  leadFormTitle: "Ready to Get More Roofing Leads?",
  leadCallText: (
    <>
      Let&apos;s build a local SEO strategy that drives more calls, stronger
      rankings, and consistent roofing leads every month.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

const ProcessSteps = [
  { step: "01", label: "Local SEO Audit & Competitor Analysis" },
  { step: "02", label: "Keyword Strategy for Roofing Services" },
  { step: "03", label: "Website & On Page SEO Optimization" },
  { step: "04", label: "Local Citations & Listings, Local Link Building" },
  { step: "05", label: "Reviews & Reputation Management" },
  { step: "06", label: "Tracking, Reporting & Scaling" },
];

const WhyChoosePoints = [
  {
    badge: "01",
    title: "More calls from homeowners ready to hire",
    desc: "Appear on Google when homeowners search for roof repair, replacement, or inspection services in your area.",
  },
  {
    badge: "02",
    title: "Increased visibility in your service areas",
    desc: "Attract high-intent homeowners who are actively looking for emergency repairs, storm damage help, or a new roof.",
  },
  {
    badge: "03",
    title: "Higher rankings for roofing services",
    desc: "Top rankings make your roofing company look more reliable and professional to potential customers.",
  },
  {
    badge: "04",
    title: "Transparent reporting and ROI tracking",
    desc: "Unlike ads, SEO keeps bringing traffic and leads over time so you can see exactly what is driving calls.",
  },
  {
    badge: "05",
    title: "A strategy built specifically for roofing businesses",
    desc: "Optimized roofing pages turn visitors into inquiries, estimate requests, and booked projects.",
  },
];

const RoofingServices = [
  { icon: <FaGoogle />, label: "GBP Optimization" },
  { icon: <FaSearch />, label: "Technical SEO" },
  { icon: <FaHouseChimney />, label: "Local Roofing SEO" },
  { icon: <FaStar />, label: "Reviews & Reputation" },
  { icon: <MdOutlineLocationOn />, label: "Service Area Targeting" },
  { icon: <FaLink />, label: "Backlinks" },
  { icon: <FaChartBar />, label: "On-Page SEO" },
  { icon: <LuShieldCheck />, label: "High-Converting Pages" },
];

export const metadata: Metadata = {
  title:
    "Local SEO for Roofing Companies | Get More Roofing Leads | Zonic Media",
  description:
    "Local SEO services for roofing companies. Zonic Media helps roofers rank higher on Google, dominate local search, and generate consistent calls from homeowners ready to hire.",
  alternates: { canonical: "/services/industry/local-seo-for-roofing-companies" },
};

function page() {
  return (
    <>
      {/* SECTION 1 - HERO */}
      <div className="roof-sec-1">
        <div className="roof-sec-1-layer">
          <div className="roof-sec-1-content">
            <Col lg={9} className="roof-sec-1-content-wrapper">
              <h1 className="roof-sec-1-heading">
                Get More Roofing Leads Every Month With Proven{" "}
                <span>Local SEO</span>
              </h1>
              <p className="roof-sec-1-sub-head">
                Search Engine Marketing Agency Philadelphia | Zonic Media
              </p>
              <p className="roof-sec-1-descrp">
                Zonic Media helps roofing companies rank higher on Google,
                dominate local search, and consistently generate calls from
                homeowners ready to hire.
              </p>

              <div className="roof-sec-1-ctas">
                <HashScrollLink
                  href="#roof-contact-form"
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
                  href="#roof-contact-form"
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

      {/* SECTION 2 - TURN GOOGLE SEARCHES INTO ROOFING JOBS */}
      <div className="roof-sec-2">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-sec-2-heading">
              Turn Google Searches Into <span>Roofing Jobs</span>
            </h2>
            <p className="roof-sec-2-descrp">
              Turn local Google searches into real roofing jobs with a strategy
              that puts your business right where customers are looking. When
              homeowners search for roof repair, installation, or inspection,
              your company appears at the top with a strong, optimized presence.
              From improving your visibility on search results to building trust
              through reviews and accurate listings, we help convert clicks into
              calls and inquiries into confirmed projects. It&apos;s not just
              about traffic &mdash; it&apos;s about attracting the right
              customers at the right time and turning every search into a
              potential job.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3 - GET MORE ROOFING LEADS (2-col: text left, image right) */}
      <div className="roof-sec-3">
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <div className="roof-sec-3-content">
              <h2 className="roof-sec-3-heading">
                Get More Roofing Leads Every Month With Proven{" "}
                <span>Local SEO</span>
              </h2>
              <p className="roof-sec-3-descrp">
                If your business is not showing up in Google Maps or local
                search results, you are losing customers every single day.
              </p>
              <p className="roof-sec-3-descrp">
                In a competitive market like Philadelphia, simply having a
                website is not enough. Your business needs to appear exactly
                when potential customers search for services near them.
              </p>
              <p className="roof-sec-3-descrp">
                At Zonic Media, we help Philadelphia businesses dominate local
                search, increase visibility, and generate consistent
                high-quality leads without relying only on paid ads.
              </p>
              <HashScrollLink
                href="#roof-contact-form"
                className="roof-sec-3-cta"
                offset={120}
              >
                Get Your Free Roofing SEO Audit Today &nbsp; &rarr;
              </HashScrollLink>
            </div>
          </Col>
          <Col lg={5}>
            <div className="roof-sec-3-img-cont">
              <Image
                src="/images/roofing-seo/roofing-seo-img-2.jpg"
                fill
                alt="Roofing contractor using local SEO to grow business"
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* SECTION 4 - WHY ROOFING COMPANIES CHOOSE ZONIC MEDIA */}
      <div className="roof-sec-4">
        <div className="roof-sec-4-heading-wrap">
          <h2 className="roof-sec-4-heading">
            Why Roofing Companies Choose <span>Zonic</span> Media
          </h2>
        </div>
        <div className="roof-sec-4-grid">
          <div className="roof-sec-4-left">
            {WhyChoosePoints.map((point) => (
              <div className="roof-sec-4-point" key={point.badge}>
                <div className="roof-sec-4-badge">{point.badge}</div>
                <div className="roof-sec-4-copy">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="roof-sec-4-right">
            <div className="roof-sec-4-image-wrap">
              <Image
                src="/images/roofing-seo/roofing-seo-img-3.jpg"
                alt="Roofing company local SEO strategy"
                fill
                className="roof-sec-4-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 - GOOGLE BUSINESS PROFILE VERIFICATION & SETUP */}
      <div className="roof-sec-4b">
        <Row className="align-items-stretch g-0">
          <Col lg={5}>
            <div className="roof-sec-4b-img-cont">
              <Image
                src="/images/roofing-seo/roofing-seo-img-6.jpg"
                alt="Roofing contractors working on a roof"
                fill
                className="roof-sec-4b-img"
              />
            </div>
          </Col>

          <Col lg={7}>
            <div className="roof-sec-4b-content">
              <p className="roof-sec-4b-kicker">
                Google Business Profile Verification &amp; Setup
              </p>
              <p className="roof-sec-4b-lead">
                Struggling to get your GBP verified or dealing with suspension
                issues? We handle the setup the right way and make sure your
                profile is fully optimized to attract local homeowners.
              </p>

              <div className="roof-sec-4b-copy-block">
                <h3>Local SEO That Gets You Calls</h3>
                <p>
                  We position your business in the Google 3 Pack, where real
                  roofing leads happen. From keyword targeting to local
                  authority building, we make sure your company shows up when it
                  matters.
                </p>
              </div>

              <h2 className="roof-sec-4b-heading">
                <span>Real Growth</span> for Roofing Contractors
              </h2>

              <HashScrollLink
                href="#roof-contact-form"
                className="roof-sec-4b-cta"
                offset={120}
              >
                Get Your Free Roofing SEO Audit Today
                <span className="roof-sec-4b-cta-arrow">&rarr;</span>
              </HashScrollLink>
            </div>
          </Col>
        </Row>
      </div>

      <div className="iaf-section">
        <InlineAuditForm
          heading="Get Your Free Roofing Company SEO Audit"
          description="Share your business details and we will review your local rankings, Google Business Profile, and lead conversion gaps at no cost."
        />
      </div>

      {/* SECTION 6 - OUR PROVEN LOCAL SEO PROCESS (dark bg, 6 steps) */}
      <div className="roof-sec-5">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-sec-5-heading">
              Our Proven Local SEO Process for Roofing Companies
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

      {/* SECTION 7 - SEO vs PAID ADS (similar to phila-ppc-sec-6) */}
      <div className="roof-sec-6">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-sec-6-heading">
              <span>SEO</span> vs <span>Paid Ads</span> for Roofing Companies
            </h2>
            <p className="roof-sec-6-intro">
              Search Engine Marketing includes Search Engine Optimization for
              organic rankings and paid search advertising through platforms
              like Google Ads, working together to ensure your business appears
              at every stage of the customer journey. Search Engine Marketing
              includes Search Engine Optimization for organic rankings and paid
              search advertising through platforms like Google Ads, working
              together to ensure your business appears at every stage of the
              customer journey.
            </p>
          </div>
        </div>

        <div className="roof-sec-6-inner">
          <div className="roof-sec-6-panel">
            <h3 className="roof-sec-6-panel-title">
              <span>SEO</span>
            </h3>
            <p className="roof-sec-6-panel-text">
              PPC brings instant visibility and quick leads, while SEO builds
              long-term traffic and trust.
            </p>
            <div className="roof-timeline-list">
              <div className="roof-timeline-item">
                <span className="roof-timeline-dot" />
                <p>Long term visibility</p>
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
              Search behavior is constantly evolving, and modern PPC strategies
              need to keep up. We align your campaigns with:
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
                <p>Short term results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 8 - OUR ROOFING LOCAL SEO SERVICES (dark bg) */}
      <div className="roof-sec-7">
        <div className="roof-sec-7-top-bar">
          <p className="roof-sec-7-label">Services</p>
          <HashScrollLink
            href="#roof-contact-form"
            className="roof-sec-7-cta-btn"
            offset={120}
          >
            Get a Free Call &nbsp; &rarr;
          </HashScrollLink>
        </div>

        <div className="roof-sec-7-inner">
          <div className="roof-sec-7-left">
            <h2 className="roof-sec-7-heading">
              Our Roofing Local SEO Services
            </h2>
            <p className="roof-sec-7-descrp">
              We build digital marketing systems designed to generate leads,
              increase revenue, and create long term growth for businesses in
              Philadelphia.
            </p>

            <div className="roof-sec-7-grid">
              {RoofingServices.map((service, index) => (
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
              src="/images/roofing-seo/roofing-seo-img-4.jpg"
              alt="Roofing local SEO services"
              fill
              className="roof-sec-7-img"
            />
          </div>
        </div>
      </div>

      {/* SECTION 9 - REAL GROWTH / PARTNERSHIP */}
      <div className="roof-sec-8">
        <Row className="align-items-stretch g-0">
          <Col lg={4}>
            <div className="roof-sec-8-img-cont">
              <Image
                src="/images/roofing-seo/roofing-seo-img-5.jpg"
                alt="Roofing growth strategy"
                fill
                className="roof-sec-8-img"
              />
            </div>
          </Col>

          <Col lg={8}>
            <div className="roof-sec-8-content">
              <p className="roof-sec-8-tagline">
                Every client engagement begins a long-term partnership.
              </p>
              <p className="roof-sec-8-descrp">
                We do not treat your business like a short-term campaign. Every
                engagement is built on trust, transparent communication, and a
                clear plan for better rankings, stronger visibility, and more
                roofing leads.
              </p>
              <p className="roof-sec-8-descrp">
                We focus on strategies that hold up over time, so your company
                keeps building authority, earning calls, and growing beyond the
                next month&apos;s ad spend.
              </p>
              <h2 className="roof-sec-8-heading">
                <span>Real Growth</span> for Roofing Contractors. Our strategies
                are designed to deliver measurable results.
              </h2>
              <HashScrollLink
                href="#roof-contact-form"
                className="roof-sec-8-cta"
                offset={120}
              >
                Get a Free Call <span>&rarr;</span>
              </HashScrollLink>
            </div>
          </Col>
        </Row>
      </div>

      {/* TESTIMONIALS */}
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

      {/* FAQs */}
      <div className="roof-sec-faq">
        <div className="roof-center-head">
          <div className="roof-center-head-content-wrapper">
            <h2 className="roof-faq-heading">
              Frequently Asked Questions About Local SEO for Roofing Companies
            </h2>
          </div>
        </div>
        <div className="roof-faq-wrapper">
          <GmbFaqs items={RoofingSeoFaqs} columns={2} />
        </div>

        <Script
          id="roof-seo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: RoofingSeoFaqs.map((faq) => ({
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

      {/* CONTACT FORM */}
      <div className="roof-sec-contact">
        <div className="roof-sec-contact-inner">
          <div className="roof-sec-contact-content">
            <h2 className="roof-sec-contact-heading">
              Ready to Grow Your Roofing Business with Local SEO?
            </h2>
            <p className="roof-sec-contact-descrp">
              Book a discovery call with Zonic Media and let us build a local
              SEO strategy that drives consistent roofing leads, stronger Google
              rankings, and measurable business growth.
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
                alt="Roofing SEO consultation and contact"
                className="roof-sec-contact-image"
              />
            </div>
          </div>

          <div className="roof-sec-contact-form" id="roof-contact-form">
            <LeadContactForm
              leadFormTitle={RoofingFormHead.leadFormTitle}
              leadCallText={RoofingFormHead.leadCallText}
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
