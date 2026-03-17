import type { Metadata } from "next";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { PiShieldCheckBold } from "react-icons/pi";
import Image from "next/image";
import "@/app/style/googleAds.css";
import ProcessSwiper from "@/app/components/ProcessSwiper";
import WhyWork from "@/app/components/WhyWork";
import Faqs from "@/app/components/Faqs";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Google Ads Management Services | PPC Campaign Experts",
  description:
    "Drive high-intent traffic with expert Google Ads management. We create, optimize, and scale PPC campaigns to generate qualified leads and maximize ROI.",
};

function Page() {
  const ContactAds = {
    heading: "Get Instant Leads with Google Ads",
    highlightedHeading: "",
    points: [
      "Target high-intent customers searching for your services",
      "Data-driven campaigns to maximize ROI",
      "Continuous optimization for better conversions and lower costs",
    ],
  };

  const AdsProcessData = {
    heading: "Our Proven 5-Step Google Ads Management Process",
    items: [
      {
        number: "01",
        title: "Campaign & Market Audit",
        description:
          "We start with a comprehensive analysis of your business, target audience, competitors, and current advertising performance to build a strong Google Ads strategy.",
        bullets: [
          "Account performance review",
          "Competitor ad analysis",
          "Keyword opportunity research",
        ],
      },
      {
        number: "02",
        title: "Keyword Research & Targeting",
        description:
          "Our team identifies high-intent search keywords your customers are using to find services like yours, ensuring your ads appear for valuable searches.",
        bullets: [
          "High-intent keyword research",
          "Negative keyword filtering",
          "Search intent targeting",
        ],
      },
      {
        number: "03",
        title: "Ad Creation & Campaign Setup",
        description:
          "We build optimized campaigns with compelling ad copy, proper ad group structure, and conversion-focused messaging to attract qualified clicks.",
        bullets: [
          "Ad copy creation",
          "Campaign structure setup",
          "Ad extension configuration",
        ],
      },
      {
        number: "04",
        title: "Campaign Optimization",
        description:
          "We continuously monitor campaign performance and make strategic adjustments to improve click-through rates, lower costs, and increase conversions.",
        bullets: [
          "Bid strategy optimization",
          "A/B ad testing",
          "Budget performance control",
        ],
      },
      {
        number: "05",
        title: "Performance Tracking & Scaling",
        description:
          "We track key metrics such as conversions, cost-per-click, and ROI to scale successful campaigns and maximize your advertising results.",
        bullets: [
          "Conversion tracking setup",
          "ROI performance monitoring",
          "Campaign scaling strategy",
        ],
      },
    ],
  };
  const AdsFaqs = [
    {
      question: "What is Google Ads and how can it help my business?",
      answer:
        "Google Ads is a paid advertising platform that allows your business to appear at the top of Google search results. It helps attract high-intent customers who are actively searching for your products or services, generating qualified leads and increasing sales.",
    },
    {
      question: "How quickly can I see results from Google Ads?",
      answer:
        "Google Ads campaigns can start generating traffic and leads almost immediately after launch. However, optimizing campaigns for the best performance and return on ad spend typically takes a few weeks of testing and adjustments.",
    },
    {
      question: "How much should I spend on Google Ads?",
      answer:
        "Your Google Ads budget depends on factors such as your industry, competition, and business goals. We help determine the right budget and bidding strategy to maximize your ad performance while keeping costs efficient.",
    },
    {
      question: "How do you improve the performance of Google Ads campaigns?",
      answer:
        "We improve campaign performance through keyword research, audience targeting, ad copy testing, bid optimization, and continuous monitoring of conversion data to increase leads and reduce wasted ad spend.",
    },
    {
      question: "Can Google Ads work for local businesses?",
      answer:
        "Yes. Google Ads is highly effective for local businesses because it allows your ads to appear when nearby customers search for services in your area, helping generate more calls, inquiries, and appointments.",
    },
  ];

  const WhyAdsData = {
    heading: "Why Work With Zonic Media for Google Ads Management",
    image: {
      src: "/images/header-ad-2.webp",
      alt: "google ads management",
    },
    defaultActiveKey: "0",
    items: [
      {
        title: "Data-Driven Campaign Strategy",
        content:
          "At Zonic Media, we build Google Ads campaigns based on data, not guesswork. Our specialists conduct in-depth keyword research, competitor analysis, and audience targeting to ensure your ads reach customers who are actively searching for your services. This strategic approach helps maximize visibility, improve click-through rates, and drive qualified traffic that converts into real business leads.",
      },
      {
        title: "Optimized Ad Spend & ROI Focus",
        content:
          "Our goal is to help your business achieve the highest possible return on ad spend. We carefully manage bidding strategies, keyword targeting, and campaign structure to reduce wasted budget and increase conversion opportunities. By continuously monitoring campaign performance, we ensure every advertising dollar works efficiently to generate measurable results.",
      },
      {
        title: "Continuous Campaign Optimization",
        content:
          "Successful Google Ads campaigns require constant monitoring and improvement. Our team regularly analyzes campaign performance, tests new ad variations, adjusts bidding strategies, and refines audience targeting. This ongoing optimization process ensures your campaigns stay competitive and continue delivering consistent leads and growth.",
      },
      {
        title: "Transparent Reporting & Insights",
        content:
          "We believe in complete transparency when managing your advertising campaigns. Our team provides clear performance reports showing metrics such as clicks, conversions, cost per lead, and return on investment. This allows you to track campaign performance and understand how your Google Ads strategy contributes to your overall business growth.",
      },
    ],
  };

  return (
    <>
      {/* ads-section-1 */}
      <div className="ads-section-1">
        <Row className="justify-content-between h-100">
          <Col lg={6}>
            <div className="ads-section-1__content">
              {/* Optional badge/title (was in CSS but not used earlier) */}
              <div className="ads-section-1__title">
                <PiShieldCheckBold />
                Certified Google Ads Specialists
              </div>

              <h1 className="ads-section-1__heading">
                Google Ads Campaigns That Drive High-Intent Customers
              </h1>

              <p className="ads-section-1__descrp">
                We help businesses capture ready-to-convert traffic, appear at
                the top of Google search results, optimize advertising budgets,
                and turn paid clicks into measurable leads and revenue through
                strategic Google Ads management.
              </p>

              <Link href="/contact-us" className="buttons">
                Request a Consultation
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
          </Col>

          <Col lg={6}>
            <div className="ads-section-1__img-cont">
              <Image src="/images/ad-page-1.webp" fill alt="google ads" />
            </div>
          </Col>
        </Row>
      </div>

      {/* ads-section-2 */}
      <div className="ads-section-2">
        <Row className="justify-content-between">
          <Col lg={5}>
            <h2 className="ads-section-2__heading">
              Trusted Google Ads Management Across Industries
            </h2>
          </Col>

          <Col lg={6}>
            <div className="ads-section-2__descrp">
              <p>
                Whether you operate an HVAC company, roofing business, locksmith
                service, healthcare clinic, or any local service business, Zonic
                Media helps companies across industries generate qualified leads
                through strategic Google Ads campaigns. From plumbers,
                electricians, landscapers, and contractors to dentists, medical
                spas, real estate agencies, auto repair shops, moving companies,
                and cleaning services — we help businesses attract ready-to-buy
                customers through highly targeted paid search advertising.
              </p>

              <p>
                Google Ads allows businesses to appear at the top of search
                results exactly when potential customers are actively looking
                for their services. With the right strategy, your ads can
                capture high-intent searches, drive qualified traffic, and
                generate consistent leads for your business. At Zonic Media, we
                focus on creating data-driven campaigns that maximize return on
                ad spend while minimizing wasted budget.
              </p>

              <p>
                Our Google Ads services support local businesses, service-area
                businesses, and multi-location companies looking to scale their
                online lead generation. No matter your industry, our experts
                build optimized campaigns, refine targeting, and continuously
                improve performance to deliver measurable growth and long-term
                advertising success.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* ads-section-3 */}
      <div className="ads-section-3">
        <div className="ads-section-3__wrapper">
          {/* Box 1 */}
          <div className="ads-section-3__box ads-section-3__box--1">
            <div className="ads-section-3__content">
              <h3 className="ads-section-3__heading">
                Google Ads Campaign Setup
              </h3>

              <p className="ads-section-3__descrp">
                Launch highly targeted Google Ads campaigns designed to reach
                customers actively searching for your products or services. Our
                team builds data-driven campaigns that maximize visibility,
                improve click-through rates, and generate qualified leads for
                your business.
              </p>

              <ul className="ads-section-3__key-points">
                <li>Keyword research &amp; targeting</li>
                <li>Campaign structure setup</li>
                <li>Ad group optimization</li>
                <li>Conversion tracking setup</li>
              </ul>

              <Link className="ads-section-3__link" href="/contact-us">
                Get started with Google Ads
              </Link>
            </div>

            <div className="ads-section-3__img-cont">
              <Image src="/images/home-ads.webp" fill alt="ads" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="ads-section-3__box ads-section-3__box--2">
            <div className="ads-section-3__content">
              <h3 className="ads-section-3__heading">
                Google Ads Optimization
              </h3>

              <p className="ads-section-3__descrp">
                We continuously monitor and optimize your Google Ads campaigns
                to improve performance and maximize return on ad spend. Our
                optimization strategies focus on improving ad quality, reducing
                wasted spend, and increasing conversions.
              </p>

              <ul className="ads-section-3__key-points">
                <li>Bid strategy optimization</li>
                <li>Negative keyword management</li>
                <li>Ad performance testing</li>
                <li>Budget efficiency improvements</li>
              </ul>

              <Link className="ads-section-3__link" href="/contact-us">
                Optimize my Google Ads
              </Link>
            </div>

            <div className="ads-section-3__img-cont">
              <Image src="/images/service-ads-2.webp" fill alt="google ads" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="ads-section-3__box ads-section-3__box--3">
            <div className="ads-section-3__content">
              <h3 className="ads-section-3__heading">
                Landing Page & Conversion Optimization
              </h3>

              <p className="ads-section-3__descrp">
                A successful Google Ads campaign requires more than clicks. We
                optimize landing pages and user experience to convert traffic
                into leads and customers while improving campaign performance.
              </p>

              <ul className="ads-section-3__key-points">
                <li>Conversion-focused landing pages</li>
                <li>User experience improvements</li>
                <li>A/B testing strategies</li>
                <li>Conversion rate optimization</li>
              </ul>

              <Link className="ads-section-3__link" href="/contact-us">
                Improve my conversions
              </Link>
            </div>

            <div className="ads-section-3__img-cont">
              <Image src="/images/ad-3.webp" fill alt="google ad dashboard" />
            </div>
          </div>
        </div>
      </div>

      {/* ads-section-4 */}
      <ProcessSwiper processData={AdsProcessData} />

      {/* ads-section-5 */}
      <WhyWork items={WhyAdsData} />

      {/* ads-section-6 */}
      <Faqs items={AdsFaqs} />

      {/* ads-section-7 */}
      <ContactForm content={ContactAds} />

      {/* ads-section-8 */}
      <Footer />
    </>
  );
}

export default Page;
