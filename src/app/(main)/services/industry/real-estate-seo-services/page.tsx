import "@/app/style/realEstate.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
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
    question:
      "How can SEO help real estate agents get more buyer and seller leads?",
    answer:
      "SEO helps real estate agents appear on Google when people search for homes, listing agents, home values, or realtors in their area. This creates a consistent flow of high-intent buyer and seller leads without depending only on referrals or paid platforms.",
  },
  {
    question: "What makes real estate SEO different from regular SEO?",
    answer:
      "Real estate SEO requires strategies built around local markets, neighborhood searches, buyer intent, seller intent, Google Maps visibility, IDX/property pages, and lead conversion systems. Generic SEO agencies often miss these industry-specific opportunities.",
  },
  {
    question: "How long does it take for real estate SEO to generate leads?",
    answer:
      "Most campaigns begin showing ranking improvements within 3 to 6 months. Lead generation depends on your market competition, website condition, local authority, and how aggressively the campaign is executed.",
  },
  {
    question: "Can SEO help me get more listings instead of only buyer leads?",
    answer:
      "Yes. We target seller-focused searches such as home valuation, sell my house, listing agent near me, and realtor for sellers. This helps attract homeowners who are ready to list their property.",
  },
  {
    question: "Is SEO better than Zillow, Realtor.com, or paid lead platforms?",
    answer:
      "SEO helps you build your own lead source and brand authority instead of renting leads from third-party platforms. Many agents use SEO to reduce long-term dependence on expensive lead providers.",
  },
  {
    question:
      "Do you provide SEO for individual agents, teams, and brokerages?",
    answer:
      "Yes. We work with solo real estate agents, growing teams, luxury brokerages, franchise offices, and multi-location real estate brands across the United States.",
  },
  {
    question:
      "Can you rank my real estate business in multiple cities or neighborhoods?",
    answer:
      "Yes. We build city pages, neighborhood pages, service-area strategies, and local SEO systems that help you rank in multiple target markets.",
  },
  {
    question: "What does a real estate SEO campaign usually include?",
    answer:
      "A complete campaign may include keyword research, on-page SEO, technical SEO, Google Business Profile optimization, city pages, content creation, backlink building, review growth, and lead conversion optimization.",
  },
  {
    question: "Does Google Business Profile matter for real estate agents?",
    answer:
      "Absolutely. Google Business Profile improves your Maps visibility, builds trust through reviews, and helps local buyers and sellers contact you directly from search results.",
  },
  {
    question: "Can SEO help luxury real estate agents or high-end markets?",
    answer:
      "Yes. We can target luxury-specific searches, premium neighborhoods, high-value property keywords, and affluent buyer intent searches to help luxury agents attract qualified opportunities.",
  },
  {
    question: "Why do many real estate websites fail to generate leads?",
    answer:
      "Most real estate websites focus only on design instead of rankings, speed, user experience, local trust signals, and clear calls-to-action. Traffic without conversion strategy usually produces poor results.",
  },
  {
    question: "Why choose Zonic Media over a generic real estate SEO company?",
    answer:
      "Zonic Media is a dedicated growth partner for real estate professionals. We focus on generating buyer and seller leads, improving local rankings, building authority, and creating long-term predictable lead flow.",
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
        <div className="realest-sec-1-layer">
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
                real estate SEO company, we are a dedicated growth partner
                built specifically for real estate agents, brokers, teams, and
                agencies across the United States.
              </p>

              <p className="realest-sec-1-descrp">
                We help real estate professionals dominate Google search,
                strengthen online visibility, and generate high-quality buyer
                and seller inquiries every month through strategic SEO, Google
                Business Profile optimization, website SEO, and data-driven
                marketing systems.
              </p>

              <div className="realest-sec-1-ctas">
                <HashScrollLink
                  href="#realest-contact-form"
                  className="buttons"
                  offset={120}
                >
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
                </HashScrollLink>

                <HashScrollLink
                  href="#realest-contact-form"
                  className="buttons"
                  offset={120}
                >
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
                </HashScrollLink>
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
              Website SEO That Turns Visitors Into Real Estate Leads
            </h2>
            <p className="realest-sec-descrp">
              A real estate website should do more than look good-it should
              generate buyer inquiries, seller leads, showing requests, and
              listing opportunities. We fix what most real estate websites get
              wrong.
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
                    Search Engine <br /> Optimization
                  </h3>
                </div>
                <p className="realest-card-desc">
                  Rank higher for searches like homes for sale, real estate
                  agent near me, realtor in [city], and seller agent searches
                  that bring real opportunities.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="realest-card">
                <div className="realest-card-top">
                  <div className="realest-card-icon">
                    <FaBullhorn />
                  </div>
                  <h3 className="realest-card-title">
                    Pay Per Click <br /> Advertising
                  </h3>
                </div>
                <p className="realest-card-desc">
                  Generate immediate traffic and motivated buyer or seller leads
                  through targeted Google Ads campaigns.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="realest-card">
                <div className="realest-card-top">
                  <div className="realest-card-icon">
                    <FaChartLine />
                  </div>
                  <h3 className="realest-card-title">
                    Conversion Rate <br /> Optimization
                  </h3>
                </div>
                <p className="realest-card-desc">
                  Turn more website visitors into booked calls, showing
                  requests, valuation inquiries, and listing appointments.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="realest-card">
                <div className="realest-card-top">
                  <div className="realest-card-icon">
                    <FaPenNib />
                  </div>
                  <h3 className="realest-card-title">
                    Content <br /> Marketing
                  </h3>
                </div>
                <p className="realest-card-desc">
                  Build authority with neighborhood pages, buyer guides, seller
                  guides, blogs, and market content that ranks and converts.
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
                  Improve your local map visibility, strengthen trust, and
                  capture more calls from buyers and sellers searching nearby.
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
                    Lead Tracking <br /> and Reporting
                  </h3>
                </div>
                <p className="realest-card-desc">
                  Measure what is working, track lead sources clearly, and make
                  smarter growth decisions with data-driven reporting.
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
                <h3>Stronger Local Search Visibility</h3>
                <p>
                  Real estate SEO helps your business appear when people search
                  for real estate agents, homes for sale, listing services, and
                  neighborhood-specific property searches in your target market.
                </p>
              </div>
            </div>

            <div className="realest-sec-4-point">
              <div className="realest-sec-4-badge">02</div>
              <div className="realest-sec-4-copy">
                <h3>More High-Intent Buyer and Seller Leads</h3>
                <p>
                  Instead of chasing cold prospects, you attract motivated
                  buyers, sellers, and investors who are already searching for
                  the services you offer online.
                </p>
              </div>
            </div>

            <div className="realest-sec-4-point">
              <div className="realest-sec-4-badge">03</div>
              <div className="realest-sec-4-copy">
                <h3>Greater Trust, Authority, and Click-Through Rates</h3>
                <p>
                  Top rankings in Google Search and Google Maps make your real
                  estate brand look more credible, more established, and more
                  trustworthy to potential clients.
                </p>
              </div>
            </div>

            <div className="realest-sec-4-point">
              <div className="realest-sec-4-badge">04</div>
              <div className="realest-sec-4-copy">
                <h3>Predictable Long-Term Organic Growth</h3>
                <p>
                  Unlike short-term lead platforms, SEO builds a durable source
                  of traffic and inquiries that keeps working as your authority
                  and local presence improve.
                </p>
              </div>
            </div>

            <div className="realest-sec-4-point">
              <div className="realest-sec-4-badge">05</div>
              <div className="realest-sec-4-copy">
                <h3>Better Website Conversion Performance</h3>
                <p>
                  A well-optimized real estate website converts search traffic
                  into valuation requests, property inquiries, showing
                  appointments, and listing consultations.
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
                A Real Estate SEO Company Built to Turn Search Traffic Into Real
                Closings
              </h2>

              <div>
                <p className="realest-sec-5-descrp">
                  Most real estate websites are built to look polished but are
                  not structured to rank for competitive local keywords or
                  convert serious buyers and sellers once they land on the page.
                  That is why many agents get traffic without consistent
                  inquiries, calls, or listing opportunities.
                </p>

                <p className="realest-sec-5-descrp">
                  Zonic Media approaches real estate SEO as a complete growth
                  system. We combine local keyword targeting, Google Business
                  Profile optimization, technical SEO, on-page conversion
                  improvements, and market-focused content to help agents,
                  brokerages, and real estate teams generate more qualified
                  buyer leads, seller leads, and long-term organic visibility.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="realest-sec-5-img-cont">
              <Image
                src="/images/real-est-industries/realest-img-3.jpg"
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
              Our real estate SEO process is designed to improve local
              visibility, target high-intent search demand, and convert traffic
              into buyer and seller leads that are ready to take action.
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
                We identify your local market, ideal client profile, service
                areas, and revenue goals so the SEO strategy targets the right
                buyer searches, seller searches, and neighborhood demand.
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
                We optimize your Google Business Profile, core landing pages,
                technical SEO, on-page messaging, and local trust signals so
                your business ranks better and converts more visitors.
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
                Once the foundation is in place, we scale rankings, local
                authority, and lead flow through strategic content, city-page
                expansion, reputation growth, and ongoing SEO refinement.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="realest-sec-7">
        <h2 className="realest-sec-7-main-heading">Why Zonic Media</h2>

        <div className="realest-sec-7-intro">
          <h3 className="realest-sec-7-heading">
            Built for Real Estate Lead Generation, Not Generic Marketing
          </h3>
          <p className="realest-sec-7-lead">
            We do not approach real estate SEO like a generic agency campaign.
            We build a local growth system that helps your real estate business
            rank higher, become more visible in the markets that matter, and
            generate consistent buyer and seller leads from Google Search and
            Google Maps.
          </p>
          <p className="realest-sec-7-lead">
            Whether you are an individual agent, a growing team, or a
            multi-office brokerage, our focus stays the same: stronger local
            rankings, better website performance, higher-quality inquiries, and
            a lead generation engine you actually own.
          </p>
        </div>

        <div className="realest-sec-7-grid">
          <div className="realest-sec-7-image-wrap">
            <Image
              src="/images/real-est-industries/realest-img-4.jpg"
              fill
              alt="Real estate local search marketing"
              className="realest-sec-7-image"
            />
          </div>

          <div className="realest-sec-7-content">
            <div className="realest-sec-7-block">
              <h3>Google Business Profile Setup, Verification, and Growth</h3>
              <h4>
                Need stronger local visibility in Google Maps and local search?
              </h4>
              <p>
                We help real estate businesses build or repair their Google
                Business Profile correctly, improve category targeting, enhance
                trust signals, and position the profile to generate more calls,
                direction requests, and qualified local inquiries.
              </p>
            </div>

            <div className="realest-sec-7-block">
              <h3>Local SEO That Brings Real Estate Calls and Listing Leads</h3>
              <p>
                From ranking for terms like &ldquo;real estate agent near
                me,&rdquo; &ldquo;homes for sale in [city],&rdquo; and
                seller-intent searches to building city pages and local
                authority, we make sure your business appears when buyers and
                sellers are ready to act.
              </p>
            </div>

            <div className="realest-sec-7-block">
              <h3>Optimization That Improves Rankings and Conversion</h3>
              <p>We improve your local presence with:</p>
              <ul className="realest-sec-7-list">
                <li>Keyword-focused business descriptions and service copy</li>
                <li>Location targeting aligned to your real estate markets</li>
                <li>Ongoing Google updates, content, and activity signals</li>
                <li>Review growth strategies that build trust and authority</li>
              </ul>
              <p>
                The result is stronger local rankings and more people who
                contact your business instead of scrolling past it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="realest-sec-8">
        <div className="realest-center-head">
          <div className="realest-center-head-content-wrapper">
            <h2 className="realest-sec-heading">Our Services</h2>
            <p className="realest-sec-descrp">
              Our real estate SEO services are built to increase local rankings,
              improve conversion performance, and help agents, brokerages, and
              teams generate more buyer and seller leads.
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

                <HashScrollLink
                  href="#realest-contact-form"
                  className="realest-sec-8-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
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

                <HashScrollLink
                  href="#realest-contact-form"
                  className="realest-sec-8-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
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

                <HashScrollLink
                  href="#realest-contact-form"
                  className="realest-sec-8-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="realest-sec-8-card">
              <div className="realest-sec-8-img">
                <Image
                  src="/images/real-est-industries/realest-serv-4.jpg"
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

                <HashScrollLink
                  href="#realest-contact-form"
                  className="realest-sec-8-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="realest-sec-8-card">
              <div className="realest-sec-8-img">
                <Image
                  src="/images/real-est-industries/realest-serv-5.jpg"
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

                <HashScrollLink
                  href="#realest-contact-form"
                  className="realest-sec-8-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="realest-sec-8-card">
              <div className="realest-sec-8-img">
                <Image
                  src="/images/real-est-industries/realest-serv-6.jpg"
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

                <HashScrollLink
                  href="#realest-contact-form"
                  className="realest-sec-8-link"
                  offset={120}
                >
                  LEARN MORE <span>&gt;&gt;</span>
                </HashScrollLink>
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
              Frequently Asked Questions About Real Estate SEO &amp; Lead
              Generation
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
              Ready to Grow with a Real Estate SEO Company Focused on Leads and
              Local Rankings?
            </h2>
            <p className="realest-sec-11-descrp">
              Book a discovery call with Zonic Media and let&apos;s build a real
              estate SEO strategy designed to improve Google rankings,
              strengthen Google Business Profile visibility, and generate more
              qualified buyer and seller leads for your market.
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
                src="/images/real-est-industries/realest-img-5.jpg"
                fill
                alt="Real estate consultation and contact"
                className="realest-sec-11-image"
              />
            </div>
          </div>

          <div
            className="realest-sec-11-contact-form"
            id="realest-contact-form"
          >
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
