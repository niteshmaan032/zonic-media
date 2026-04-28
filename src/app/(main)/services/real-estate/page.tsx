import "@/app/style/realEstate.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import LeadContactForm from "@/app/components/LeadContactForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import { FaGoogle, FaSearch } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaBullhorn, FaChartLine, FaPenNib } from "react-icons/fa";
import { RiLineChartLine } from "react-icons/ri";

const RealEstateFaqs = [
  {
    question: "How does SEO help real estate agents get more leads?",
    answer:
      "SEO helps real estate agents appear in Google search and local map results when buyers and sellers are actively searching, which leads to more qualified traffic, calls, and inquiries.",
  },
  {
    question: "Do real estate businesses need Google Business Profile optimization?",
    answer:
      "Yes. Google Business Profile optimization improves local visibility, helps you rank in map results, and increases trust with nearby prospects looking for agents or brokerages.",
  },
  {
    question: "How long does real estate SEO take to show results?",
    answer:
      "Early improvements can appear within a few months, while stronger ranking growth and more consistent lead flow usually build over time as authority, content, and local signals improve.",
  },
  {
    question: "What is included in your real estate SEO services?",
    answer:
      "Our services can include local SEO, website SEO, Google Business Profile optimization, conversion improvements, content strategy, and visibility planning for organic lead growth.",
  },
  {
    question: "Can SEO help me get both buyers and sellers?",
    answer:
      "Yes. A strong SEO strategy can target different search intent groups so your business attracts both buyer leads and seller leads from relevant local keywords.",
  },
  {
    question: "Why is website optimization important for real estate SEO?",
    answer:
      "Ranking alone is not enough. Your website needs strong messaging, clear calls to action, fast performance, and conversion-focused pages to turn traffic into real inquiries.",
  },
];

const RealEstateFormHead = {
  leadFormTitle: "Ready to Grow Your Real Estate Business?",
  leadCallText: (
    <>
      Let&apos;s build a strategy that helps you rank higher, attract better
      leads, and generate more buyer and seller inquiries.
      <br />{" "}
      <a href={SITE_CONTACT.phoneHref} className="lead-call-link">
        Call Now:{SITE_CONTACT.phoneDisplay}
      </a>
    </>
  ),
};

function page() {
  return (
    <>
      <div className="realest-sec-1">
        <div className="realest-sec-1-content">
          <Col lg={8} className="realest-sec-1-content-wrapper">
            <h1 className="realest-sec-1-heading">
              Get More Buyers and Sellers Without Chasing Leads
            </h1>
            <p className="realest-sec-1-sub-head">
              Dedicated Real Estate SEO Company | Zonic Media
            </p>
            <p className="realest-sec-1-descrp">
              Most real estate agents waste money on generic marketing that
              never produces consistent leads. Zonic Media is not an average
              real estate SEO company, we are a dedicated growth partner built
              specifically for real estate agents, brokers, teams, and agencies
              across the United States.
            </p>

            <p className="realest-sec-1-descrp">
              We help real estate professionals dominate Google search,
              strengthen online visibility, and generate high-quality buyer and
              seller inquiries every month through strategic SEO, Google
              Business Profile optimization, website SEO, and data-driven
              marketing systems.
            </p>

            <div className="realest-sec-1-ctas">
              <Link href="/contact-us" className="buttons">
                Get Free Strategy Call
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

              <Link href="/contact-us" className="buttons">
                See How It Works
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

            <div className="realest-feature-grid">
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
                <p>GET MORE CALLS FROM LOCAL BUYERS &amp; SELLERS</p>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <LuCalendarCheck2 />
                </div>
                <p>BOOK MORE DEALS &amp; GROW YOUR BUSINESS</p>
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

      <div className="realest-sec-2">
        <div className="realest-sec-2-grid">
          <div className="realest-sec-2-item">
            <h3>250+</h3>
            <p>Properties Listed</p>
          </div>
          <div className="realest-sec-2-item">
            <h3>95%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="realest-sec-2-item">
            <h3>50+</h3>
            <p>Prime Locations Covered</p>
          </div>
          <div className="realest-sec-2-item">
            <h3>1200+</h3>
            <p>Leads Generated</p>
          </div>
        </div>
      </div>

      <div className="realest-sec-3">
        <div className="realest-center-head">
          <div className="realest-center-head-content-wrapper">
            <p className="realest-label">WHAT WE DO</p>
            <h2 className="realest-sec-heading">
              Real Estate SEO Services Built to Generate Consistent Leads
            </h2>
            <p className="realest-sec-descrp">
              Our real estate marketing system combines SEO, local visibility,
              and conversion strategy to help agents and brokers attract more
              qualified buyers and sellers in competitive markets.
            </p>
          </div>
        </div>

        <div className="realest-sec-3-content-wrapper">
          <Row className="g-4 justify-content-center">
            <Col lg={4} md={6}>
              <div className="realest-card">
                <div className="realest-card-top">
                  <div className="realest-card-icon">
                    <FaSearch />
                  </div>
                  <h3 className="realest-card-title">
                    Real Estate SEO <br /> Strategy
                  </h3>
                </div>
                <p className="realest-card-desc">
                  Rank for high-intent local keywords, increase organic
                  visibility, and bring in buyers and sellers searching for
                  real estate services in your area.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="realest-card">
                <div className="realest-card-top">
                  <div className="realest-card-icon">
                    <FaGoogle />
                  </div>
                  <h3 className="realest-card-title">
                    Google Business <br /> Profile Optimization
                  </h3>
                </div>
                <p className="realest-card-desc">
                  Improve your map visibility, generate more local calls, and
                  stand out when nearby buyers and sellers search for trusted
                  real estate professionals.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="realest-card">
                <div className="realest-card-top">
                  <div className="realest-card-icon">
                    <HiOutlinePresentationChartLine />
                  </div>
                  <h3 className="realest-card-title">
                    Lead-Focused <br /> Growth System
                  </h3>
                </div>
                <p className="realest-card-desc">
                  Turn traffic into inquiries with better on-page messaging,
                  conversion-focused website improvements, and a strategy built
                  to produce steady deal flow.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="realest-sec-4">
        <div className="realest-sec-4-grid">
          <div className="realest-sec-4-left">
            <h2 className="realest-sec-4-heading">
              Why SEO is Essential for Your Real Estate Business
            </h2>

            <div className="realest-sec-4-image-wrap">
              <Image
                src="/images/real-est-industries/realest-img-2.jpg"
                alt="Real estate locations map"
                fill
                className="realest-sec-4-image"
              />
            </div>
          </div>

          <div className="realest-sec-4-right">
            <div className="realest-sec-4-point">
              <div className="realest-sec-4-badge">01</div>
              <div className="realest-sec-4-copy">
                <h3>Higher Local Visibility</h3>
                <p>
                  Appear on Google when buyers and sellers search for
                  properties or agents in your area.
                </p>
              </div>
            </div>

            <div className="realest-sec-4-point">
              <div className="realest-sec-4-badge">02</div>
              <div className="realest-sec-4-copy">
                <h3>Consistent Quality Leads</h3>
                <p>
                  Attract high-intent clients who are actively looking to buy,
                  sell, or invest.
                </p>
              </div>
            </div>

            <div className="realest-sec-4-point">
              <div className="realest-sec-4-badge">03</div>
              <div className="realest-sec-4-copy">
                <h3>Build Trust &amp; Credibility</h3>
                <p>
                  Top rankings make your brand look more reliable and
                  professional to potential clients.
                </p>
              </div>
            </div>

            <div className="realest-sec-4-point">
              <div className="realest-sec-4-badge">04</div>
              <div className="realest-sec-4-copy">
                <h3>Long-Term Growth</h3>
                <p>
                  Unlike ads, SEO keeps bringing traffic and leads over time
                  without ongoing high costs.
                </p>
              </div>
            </div>

            <div className="realest-sec-4-point">
              <div className="realest-sec-4-badge">05</div>
              <div className="realest-sec-4-copy">
                <h3>Better Conversion Rates</h3>
                <p>
                  Optimized websites turn visitors into inquiries, calls, and
                  property bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="realest-sec-5">
        <Row>
          <Col lg={7}>
            <div className="realest-sec-5-content">
              <h2 className="realest-sec-5-heading">
                Real Estate SEO Company Focused on Leads, Visibility, and
                Long-Term Growth
              </h2>

              <div>
                <p className="realest-sec-5-descrp">
                  Most real estate businesses invest in marketing without a
                  clear system to generate predictable buyer and seller leads.
                  That usually leads to wasted budget, inconsistent inquiries,
                  and weak visibility in competitive local markets.
                </p>

                <p className="realest-sec-5-descrp">
                  Zonic Media takes a more strategic approach. We build SEO and
                  local search systems designed to help agents, brokers, and
                  teams rank higher, attract qualified traffic, and turn that
                  visibility into real conversations, appointments, and closed
                  deals.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="realest-sec-5-img-cont">
              <Image
                src="/images/real-est-industries/realest-img-4.jpg"
                fill
                alt="Real estate marketing strategy discussion"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="realest-sec-6">
        <div className="realest-center-head">
          <div className="realest-center-head-content-wrapper">
            <h2 className="realest-sec-heading">How It Works</h2>
            <p className="realest-sec-descrp">
              It works by optimizing your presence, targeting the right
              audience, and converting traffic into leads.
            </p>
          </div>
        </div>

        <Row className="realest-strategy-row">
          <Col lg={4} className="realest-strategy-col">
            <div className="realest-strategy-card">
              <div className="realest-strategy-circle">
                <span className="realest-strategy-number">01</span>
              </div>
              <h4>Market &amp; Goal Clarity</h4>
              <p>
                Understanding your market and goals means identifying your
                target audience and aligning strategies to achieve clear
                business outcomes.
              </p>
            </div>
          </Col>

          <Col lg={4} className="realest-strategy-col">
            <div className="realest-strategy-card">
              <div className="realest-strategy-circle">
                <span className="realest-strategy-number">02</span>
              </div>
              <h4>Google &amp; Website Optimization</h4>
              <p>
                Optimizing your presence across Google and your website means
                improving visibility and performance to attract and convert more
                customers.
              </p>
            </div>
          </Col>

          <Col lg={4} className="realest-strategy-col">
            <div className="realest-strategy-card">
              <div className="realest-strategy-circle">
                <span className="realest-strategy-number">03</span>
              </div>
              <h4>Visibility &amp; Lead Growth</h4>
              <p>
                Scaling visibility and lead generation means growing your
                online presence while consistently attracting more potential
                customers through strategic marketing.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="realest-sec-7">
        <h2 className="realest-sec-7-main-heading">Why Zonic Media</h2>

        <div className="realest-sec-7-intro">
          <h3 className="realest-sec-7-heading">
            Built for Real Estate Growth, Not Just Marketing
          </h3>
          <p className="realest-sec-7-lead">
            We don&apos;t just run campaigns we create a complete local
            domination system that positions your real estate business as the
            go-to choice in your area, helping you attract high-intent buyers
            and sellers, build strong visibility, and generate consistent,
            quality leads without chasing them.
          </p>
          <p className="realest-sec-7-lead">
            We don&apos;t just run campaigns we create a complete local
            domination system that positions your real estate business as the
            go-to choice in your area, helping you attract high-intent buyers
            and sellers, build strong visibility, and generate consistent,
            quality leads without chasing them.
          </p>
        </div>

        <div className="realest-sec-7-grid">
          <div className="realest-sec-7-image-wrap">
            <Image
              src="/images/real-est-industries/realest-img-5.jpg"
              fill
              alt="Real estate local search marketing"
              className="realest-sec-7-image"
            />
          </div>

          <div className="realest-sec-7-content">
            <div className="realest-sec-7-block">
              <h3>Google Business Profile Verification &amp; Setup</h3>
              <h4>
                Struggling to get your GMB verified or facing suspension
                issues?
              </h4>
              <p>
                We help you get verified the right way and make sure your
                profile is fully optimized to attract local buyers and sellers.
              </p>
            </div>

            <div className="realest-sec-7-block">
              <h3>Local SEO That Gets You Calls</h3>
              <p>
                We position your business in the Google 3 pack, where real
                leads happen. From keyword targeting like &ldquo;real estate
                agent near me&rdquo; to local authority building, we make sure
                you show up when it matters.
              </p>
            </div>

            <div className="realest-sec-7-block">
              <h3>GMB Optimization That Converts</h3>
              <p>We optimize your profile with:</p>
              <ul className="realest-sec-7-list">
                <li>High converting descriptions</li>
                <li>Service based keyword targeting</li>
                <li>Regular posts and updates</li>
                <li>Review strategy that builds trust</li>
              </ul>
              <p>So when people find you, they actually contact you.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="realest-sec-8">
        <div className="realest-center-head">
          <div className="realest-center-head-content-wrapper">
            <h2 className="realest-sec-heading">Our Services</h2>
            <p className="realest-sec-descrp">
              Optimize your pediatric website for better visibility, traffic,
              and patient growth.
            </p>
          </div>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="realest-sec-8-card">
              <div className="realest-sec-8-img">
                <Image
                  src="/images/real-est-industries/realest-serv-1.jpg"
                  alt="Google Business Profile verification and optimization"
                  width={500}
                  height={350}
                />
              </div>

              <div className="realest-sec-8-overlay">
                <div className="realest-sec-8-head">
                  <div className="realest-sec-8-icon">
                    <FaGoogle />
                  </div>
                  <h4>Google Business Profile Verification and Optimization</h4>
                </div>

                <p>
                  We help your business rank on Google Search and Maps to
                  generate consistent organic leads.
                </p>

                <Link href="/contact-us" className="realest-sec-8-link">
                  LEARN MORE <span>&gt;&gt;</span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="realest-sec-8-card">
              <div className="realest-sec-8-img">
                <Image
                  src="/images/real-est-industries/realest-serv-2.jpg"
                  alt="Local SEO for real estate"
                  width={500}
                  height={350}
                />
              </div>

              <div className="realest-sec-8-overlay">
                <div className="realest-sec-8-head">
                  <div className="realest-sec-8-icon">
                    <FaBullhorn />
                  </div>
                  <h4>Local SEO for Real Estate</h4>
                </div>

                <p>
                  We run targeted paid campaigns that bring immediate high
                  intent traffic.
                </p>

                <Link href="/contact-us" className="realest-sec-8-link">
                  LEARN MORE <span>&gt;&gt;</span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="realest-sec-8-card">
              <div className="realest-sec-8-img">
                <Image
                  src="/images/real-est-industries/realest-serv-3.jpg"
                  alt="Website SEO and conversion optimization"
                  width={500}
                  height={350}
                />
              </div>

              <div className="realest-sec-8-overlay">
                <div className="realest-sec-8-head">
                  <div className="realest-sec-8-icon">
                    <FaChartLine />
                  </div>
                  <h4>Website SEO and Conversion Optimization</h4>
                </div>

                <p>
                  Traffic alone is not enough. We optimize your website to:
                  increase conversions, reduce bounce rates, generate more
                  inquiries
                </p>

                <Link href="/contact-us" className="realest-sec-8-link">
                  LEARN MORE <span>&gt;&gt;</span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="realest-sec-8-card">
              <div className="realest-sec-8-img">
                <Image
                  src="/images/real-est-industries/realest-serv-1.jpg"
                  alt="Social media growth strategy"
                  width={500}
                  height={350}
                />
              </div>

              <div className="realest-sec-8-overlay">
                <div className="realest-sec-8-head">
                  <div className="realest-sec-8-icon">
                    <FiPhoneCall />
                  </div>
                  <h4>Social Media Growth Strategy</h4>
                </div>

                <p>
                  We prepare your business for: AI search engines, ChatGPT
                  recommendations, Google AI Overviews
                </p>

                <Link href="/contact-us" className="realest-sec-8-link">
                  LEARN MORE <span>&gt;&gt;</span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="realest-sec-8-card">
              <div className="realest-sec-8-img">
                <Image
                  src="/images/real-est-industries/realest-serv-2.jpg"
                  alt="AEO and GEO optimization"
                  width={500}
                  height={350}
                />
              </div>

              <div className="realest-sec-8-overlay">
                <div className="realest-sec-8-head">
                  <div className="realest-sec-8-icon">
                    <FaSearch />
                  </div>
                  <h4>AEO and GEO Optimization</h4>
                </div>

                <p>
                  We create strategic content that: builds trust, improves
                  rankings, attracts qualified leads.
                </p>

                <Link href="/contact-us" className="realest-sec-8-link">
                  LEARN MORE <span>&gt;&gt;</span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="realest-sec-8-card">
              <div className="realest-sec-8-img">
                <Image
                  src="/images/real-est-industries/realest-serv-3.jpg"
                  alt="Local SEO and Google Business Profile optimization"
                  width={500}
                  height={350}
                />
              </div>

              <div className="realest-sec-8-overlay">
                <div className="realest-sec-8-head">
                  <div className="realest-sec-8-icon">
                    <FaPenNib />
                  </div>
                  <h4>Local SEO &amp; Google Business Profile optimization</h4>
                </div>

                <p>
                  We create strategic content that: builds trust, improves
                  rankings, attracts qualified leads.
                </p>

                <Link href="/contact-us" className="realest-sec-8-link">
                  LEARN MORE <span>&gt;&gt;</span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="realest-sec-9">
        <h2 className="realest-sec-9-heading">What Our Clients Say</h2>

        <div className="realest-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      <div className="realest-sec-10">
        <div className="realest-center-head">
          <div className="realest-center-head-content-wrapper">
            <h2 className="realest-sec-heading">
              Frequently Asked Questions About Real Estate SEO
            </h2>
          </div>
        </div>

        <div className="realest-sec-10-faq-wrapper">
          <GmbFaqs items={RealEstateFaqs} columns={2} />
        </div>

        <Script
          id="realest-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: RealEstateFaqs.map((faq) => ({
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

      <div className="realest-sec-11">
        <div className="realest-sec-11-inner">
          <div className="realest-sec-11-content">
            <h2 className="realest-sec-11-heading">
              Ready to Grow with a Dedicated Real Estate SEO Company?
            </h2>
            <p className="realest-sec-11-descrp">
              Book a discovery call with Zonic Media and let&apos;s create a
              strategy focused on better rankings, stronger local visibility,
              and more buyer and seller leads for your real estate business.
            </p>

            <div className="realest-sec-11-info-grid">
              <div className="realest-sec-11-info-card">
                <div className="realest-sec-11-info-head">
                  <div className="realest-sec-11-info-icon">
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

              <div className="realest-sec-11-info-card">
                <div className="realest-sec-11-info-head">
                  <div className="realest-sec-11-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>{SITE_CONTACT.email}</a>
                <a href={SITE_CONTACT.phoneHref}>{SITE_CONTACT.phoneDisplay}</a>
              </div>
            </div>

            <div className="realest-sec-11-image-wrap">
              <Image
                src="/images/real-est-industries/realest-img-6.jpg"
                fill
                alt="Real estate consultation and contact"
                className="realest-sec-11-image"
              />
            </div>
          </div>

          <div className="realest-sec-11-contact-form" id="realest-contact-form">
            <LeadContactForm
              leadFormTitle={RealEstateFormHead.leadFormTitle}
              leadCallText={RealEstateFormHead.leadCallText}
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
