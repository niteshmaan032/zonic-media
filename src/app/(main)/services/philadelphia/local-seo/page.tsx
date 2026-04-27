import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import "@/app/style/philadelphia/philaSeo.css";
import { SITE_CONTACT } from "@/shared/siteConfig";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import {
  FaGoogle,
  FaHandPointer,
  FaMousePointer,
  FaSearch,
  FaStar,
} from "react-icons/fa";
import {
  FaFan,
  FaHelmetSafety,
  FaMapLocationDot,
  FaScaleBalanced,
  FaTooth,
} from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import {
  MdAddLocationAlt,
  MdFactCheck,
  MdCleaningServices,
  MdOutlineLocationOn,
  MdRoofing,
} from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";

const PhilaSeoFaqs = [
  {
    question: "What does a local SEO agency in Philadelphia do?",
    answer:
      "A local SEO agency helps Philadelphia businesses improve visibility in Google Search, Google Maps, and location-based searches to generate more qualified calls, leads, and inquiries.",
  },
  {
    question: "Why is local SEO important for Philadelphia businesses?",
    answer:
      "Philadelphia is a competitive market. Local SEO helps your business appear when nearby customers search for your services, which increases visibility, trust, and lead volume.",
  },
  {
    question: "How long does local SEO take to show results?",
    answer:
      "Most businesses begin seeing early movement within a few months, while stronger rankings, map visibility, and lead growth typically build over a longer period depending on competition and current site health.",
  },
  {
    question: "Can local SEO help me rank on Google Maps?",
    answer:
      "Yes. Local SEO improves your Google Business Profile, local relevance, reviews, citations, and on-site location signals to help strengthen your Google Maps visibility.",
  },
  {
    question: "Do I need local SEO if I already run Google Ads?",
    answer:
      "Yes. Google Ads can deliver short-term traffic, while local SEO builds long-term organic visibility and reduces dependence on paid lead sources over time.",
  },
  {
    question: "What types of businesses benefit from local SEO in Philadelphia?",
    answer:
      "Home service companies, dentists, legal firms, contractors, cleaning companies, medical practices, and other local service businesses all benefit from stronger local rankings.",
  },
];

const PhilaSeoFormHead = {
  leadFormTitle: "Ready to Grow Your Local Visibility?",
  leadCallText: (
    <>
      Let&apos;s build a Philadelphia local SEO strategy that drives more map
      visibility, stronger rankings, and consistent high-intent leads.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

function page() {
  return (
    <>
      <div className="phila-seo-sec-1">
        <div className="phila-seo-sec-1-layer">
          <div className="phila-seo-sec-1-banner-image">
            <Image
              src="/images/philadelphia/phila-seo/phila-seo-banner-img-2.png"
              alt="Philadelphia local SEO"
              width={680}
              height={680}
              priority
            />
          </div>

          <div className="phila-seo-sec-1-content">
            <Col lg={9} className="phila-seo-sec-1-content-wrapper">
              <h1 className="phila-seo-sec-1-heading">
                Local SEO Agency Philadelphia: Get{" "}
                <span>More Local Leads in 2026</span>
              </h1>
              <p className="phila-seo-sec-1-sub-head">
                Local SEO Agency Philadelphia | Zonic Media
              </p>
              <p className="phila-seo-sec-1-descrp">
                Looking for a Local SEO agency in Philadelphia? Zonic Media
                helps businesses rank higher on Google Maps and generate
                consistent local leads.
              </p>

              <div className="phila-seo-sec-1-ctas">
                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="buttons"
                  offset={120}
                >
                  Get A Free Call
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
                  href="#phila-seo-contact-form"
                  className="buttons"
                  offset={120}
                >
                  Get A Free Quote
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
                  <p>GET MORE CALLS FROM LOCAL CUSTOMBERS</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <LuCalendarCheck2 />
                  </div>
                  <p>BOOK MORE JOBS & GROW YOUR BUSINESS</p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <RiLineChartLine />
                  </div>
                  <p>SUSTAINABLE GROWTH THAT LAST</p>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>

      <div className="phila-seo-sec-2">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <p className="phila-seo-label">WHAT WE FOCUS ON</p>

            <h2 className="phila-seo-sec-heading">
              Why Choose Zonic Media as Your Philadelphia Local SEO Agency
            </h2>

            <p className="phila-seo-sec-descrp">
              We are not just another SEO company.
            </p>
          </div>
        </div>

        <div className="phila-seo-sec-2-content-wrapper">
          <Row>
            <Col lg={6} md={6} className="mb-4">
              <div className="phila-seo-card">
                <div className="phila-seo-card-top">
                  <div className="phila-seo-card-icon">
                    <FaSearch />
                  </div>
                  <h3 className="phila-seo-card-title">
                    Search Engine <br /> Optimization
                  </h3>
                </div>
                <p className="phila-seo-card-desc">
                  Improve rankings, increase organic traffic, and build
                  long-term visibility.
                </p>
              </div>
            </Col>

            <Col lg={6} md={6} className="mb-4">
              <div className="phila-seo-card">
                <div className="phila-seo-card-top">
                  <div className="phila-seo-card-icon">
                    <FaMousePointer />
                  </div>
                  <h3 className="phila-seo-card-title">
                    Pay Per Click <br /> Advertising
                  </h3>
                </div>
                <p className="phila-seo-card-desc">
                  Improve rankings, increase organic traffic, and build
                  long-term visibility.
                </p>
              </div>
            </Col>

            <Col lg={6} md={6} className="mb-4">
              <div className="phila-seo-card">
                <div className="phila-seo-card-top">
                  <div className="phila-seo-card-icon">
                    <FaHandPointer />
                  </div>
                  <h3 className="phila-seo-card-title">
                    Conversion rate <br /> optimization
                  </h3>
                </div>
                <p className="phila-seo-card-desc">
                  Improve rankings, increase organic traffic, and build
                  long-term visibility.
                </p>
              </div>
            </Col>

            <Col lg={6} md={6} className="mb-4">
              <div className="phila-seo-card">
                <div className="phila-seo-card-top">
                  <div className="phila-seo-card-icon">
                    <FaGoogle />
                  </div>
                  <h3 className="phila-seo-card-title">
                    Google Business <br /> Profile optimization
                  </h3>
                </div>
                <p className="phila-seo-card-desc">
                  Improve rankings, increase organic traffic, and build
                  long-term visibility.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="phila-seo-sec-3">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <h2 className="phila-seo-sec-heading">
              Our Digital Marketing Strategy Framework
            </h2>
          </div>
        </div>

        <Row className="phila-seo-strategy-row">
          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">01</span>
              </div>
              <h4>Audit Your Current Presence</h4>
              <p>We analyze your rankings, competitors, and gaps.</p>
            </div>
          </Col>

          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">02</span>
              </div>
              <h4>Fix Core Issues</h4>
              <p>We optimize your GBP, website, and citations.</p>
            </div>
          </Col>

          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">03</span>
              </div>
              <h4>Build Authority</h4>
              <p>We strengthen local signals and content.</p>
            </div>
          </Col>

          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">04</span>
              </div>
              <h4>Scale Visibility</h4>
              <p>We expand into multiple service areas.</p>
            </div>
          </Col>

          <Col lg={true} className="phila-seo-strategy-col">
            <div className="phila-seo-strategy-card">
              <div className="phila-seo-strategy-circle">
                <span className="phila-seo-strategy-number">05</span>
              </div>
              <h4>Optimize Conversions</h4>
              <p>We turn traffic into calls and leads.</p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-seo-sec-4">
        <Row>
          <Col lg={7}>
            <div className="phila-seo-sec-4-content">
              <h2 className="phila-seo-sec-4-heading">
                <span>Local SEO Agency</span> in Philadelphia That Drives Real
                Leads
              </h2>

              <p className="phila-seo-sec-4-descrp">
                If your business is not showing up in Google Maps or local
                search results, you are losing customers every single day. In a
                competitive market like Philadelphia, simply having a website is
                not enough. Your business needs to appear exactly when potential
                customers search for services near them.
              </p>

              <p className="phila-seo-sec-4-descrp">
                That is where local SEO becomes critical. At Zonic Media, we
                help Philadelphia businesses dominate local search, increase
                visibility, and generate consistent high-quality leads without
                relying only on paid ads.
              </p>
            </div>
          </Col>

          <Col lg={5}>
            <div className="phila-seo-sec-4-img-cont">
              <Image
                src="/images/philadelphia/phila-seo/phila-seo-img-2.jpg"
                fill
                alt="Philadelphia local SEO strategy"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-seo-sec-5">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <p className="phila-seo-label">WHY US</p>

            <h2 className="phila-seo-sec-heading">
              Why Local SEO Matters for Philadelphia Businesses
            </h2>
          </div>
        </div>

        <div className="phila-seo-sec-5-grid">
          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <MdRoofing />
            </div>
            <h3>
              Roofing
              <br />
              Companies
            </h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <FaFan />
            </div>
            <h3>
              HVAC
              <br />
              Repair
            </h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <FaTooth />
            </div>
            <h3>Dentists</h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <MdCleaningServices />
            </div>
            <h3>
              Cleaning
              <br />
              Services
            </h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <FaHelmetSafety />
            </div>
            <h3>Contractors</h3>
          </div>

          <div className="phila-seo-sec-5-item">
            <div className="phila-seo-sec-5-icon">
              <FaScaleBalanced />
            </div>
            <h3>
              Legal
              <br />
              Services
            </h3>
          </div>
        </div>
      </div>

      <div className="phila-seo-sec-6">
        <Row>
          <Col lg={5}>
            <div className="phila-seo-sec-6-img-cont">
              <Image
                src="/images/philadelphia/phila-seo/phila-seo-img-3.jpg"
                fill
                alt="AI SEO and local SEO strategy"
              />
            </div>
          </Col>

          <Col lg={7}>
            <div className="phila-seo-sec-6-content">
              <h2 className="phila-seo-sec-6-heading">
                <span>Local SEO + AI SEO</span> Advantage
              </h2>

              <p className="phila-seo-sec-6-descrp">Search is evolving.</p>

              <p className="phila-seo-sec-6-descrp">
                Customers are now asking AI tools:
              </p>

              <ul className="phila-seo-sec-6-list">
                <li>“best roofing company in Philadelphia”</li>
                <li>“top dentist near me”</li>
              </ul>

              <p className="phila-seo-sec-6-descrp">
                We optimize your business for:
              </p>

              <ul className="phila-seo-sec-6-list">
                <li>Google</li>
                <li>AI search engines</li>
                <li>ChatGPT and Gemini discovery</li>
              </ul>

              <p className="phila-seo-sec-6-descrp">
                This future-proofs your growth.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-seo-sec-7">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <h2 className="phila-seo-sec-heading">
              Our Local SEO Services in Philadelphia
            </h2>
          </div>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-1.jpg"
                  alt="Google Business Profile Optimization"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <FaGoogle />
                  </div>
                  <h4>Google Business Profile Optimization</h4>
                </div>

                <p>
                  We help your business rank on Google Search and Maps to
                  generate consistent organic leads.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-2.jpg"
                  alt="Google Maps Ranking Strategy"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <FaMapLocationDot />
                  </div>
                  <h4>Google Maps Ranking Strategy</h4>
                </div>

                <p>
                  We run targeted paid campaigns that bring immediate high
                  intent traffic.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-3.jpg"
                  alt="Local Keyword Targeting"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <FaSearch />
                  </div>
                  <h4>Local Keyword Targeting</h4>
                </div>

                <p>
                  Traffic alone is not enough. We optimize your website to:
                  increase conversions, reduce bounce rates, generate more
                  inquiries
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-4.jpg"
                  alt="City Based Landing Pages"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <MdAddLocationAlt />
                  </div>
                  <h4>City Based Landing Pages</h4>
                </div>

                <p>
                  We prepare your business for: AI search engines, ChatGPT
                  recommendations, Google AI Overviews
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-5.jpg"
                  alt="Review Growth Strategy"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <FaStar />
                  </div>
                  <h4>Review Growth Strategy</h4>
                </div>

                <p>
                  We create strategic content that: builds trust, improves
                  rankings, attracts qualified leads.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="phila-seo-sec-7-card">
              <div className="phila-seo-sec-7-img">
                <Image
                  src="/images/philadelphia/phila-seo/phila-seo-serv-6.jpg"
                  alt="Local Citations and Directory Management"
                  width={500}
                  height={350}
                />
              </div>

              <div className="phila-seo-sec-7-overlay">
                <div className="phila-seo-sec-7-head">
                  <div className="phila-seo-sec-7-icon">
                    <MdFactCheck />
                  </div>
                  <h4>Local Citations &amp; Directory Management</h4>
                </div>

                <p>
                  We create strategic content that: builds trust, improves
                  rankings, attracts qualified leads.
                </p>

                <HashScrollLink
                  href="#phila-seo-contact-form"
                  className="phila-seo-sec-7-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-seo-sec-8">
        <h2 className="phila-seo-sec-8-heading">What Our Clients Say</h2>

        <div className="phila-seo-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      <div className="phila-seo-sec-9">
        <div className="phila-seo-center-head">
          <div className="phila-seo-center-head-content-wrapper">
            <h2 className="phila-seo-sec-heading">
              Frequently Asked Questions About Local SEO in Philadelphia
            </h2>
          </div>
        </div>

        <div className="phila-seo-sec-9-faq-wrapper">
          <GmbFaqs items={PhilaSeoFaqs} columns={2} />
        </div>

        <Script
          id="phila-seo-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: PhilaSeoFaqs.map((faq) => ({
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

      <div className="phila-seo-sec-10">
        <div className="phila-seo-sec-10-inner">
          <div className="phila-seo-sec-10-content">
            <h2 className="phila-seo-sec-10-heading">
              Looking to Grow Your Business with a Local SEO Agency in
              Philadelphia?
            </h2>
            <p className="phila-seo-sec-10-descrp">
              Book a discovery call with Zonic Media and let&apos;s build a
              local SEO strategy focused on higher map visibility, stronger
              search rankings, and more qualified leads from Philadelphia
              customers.
            </p>

            <div className="phila-seo-sec-10-info-grid">
              <div className="phila-seo-sec-10-info-card">
                <div className="phila-seo-sec-10-info-head">
                  <div className="phila-seo-sec-10-info-icon">
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

              <div className="phila-seo-sec-10-info-card">
                <div className="phila-seo-sec-10-info-head">
                  <div className="phila-seo-sec-10-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <LenisIframeGuard className="phila-seo-sec-10-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.828947392318!2d-75.5245087!3d39.155871999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c76560e5bf48df%3A0x49d58c7e4301bcd!2sZonic%20Media!5e0!3m2!1sen!2sin!4v1777032391834!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zonic Media office location"
              />
            </LenisIframeGuard>
          </div>

          <div
            className="phila-seo-sec-10-contact-form"
            id="phila-seo-contact-form"
          >
            <LeadContactForm
              leadFormTitle={PhilaSeoFormHead.leadFormTitle}
              leadCallText={PhilaSeoFormHead.leadCallText}
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
