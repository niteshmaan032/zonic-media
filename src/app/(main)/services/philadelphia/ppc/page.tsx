import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import InlineAuditForm from "@/app/components/InlineAuditForm";
import LeadContactForm from "@/app/components/LeadContactForm";
import ServiceSectionCta from "@/app/components/ServiceSectionCta";
import "@/app/style/philadelphia/philaPpc.css";
import "@/app/style/carTow.css";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import {
  FaArrowRotateRight,
  FaBullseye,
  FaDatabase,
  FaFan,
  FaGoogle,
  FaScaleBalanced,
  FaTooth,
} from "react-icons/fa6";
import {
  FaClipboardList,
  FaChartLine,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearch,
  FaTools,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import {
  MdOutlineLocationOn,
  MdOutlineRocketLaunch,
  MdRoofing,
} from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "PPC Agency Philadelphia | Google Ads Management",
  description:
    "Philadelphia PPC agency helping businesses generate high-intent leads through Google Ads, landing page optimization, conversion tracking, and campaign management.",
  keywords: [
    "PPC agency Philadelphia",
    "Google Ads management Philadelphia",
    "PPC management services Philadelphia",
    "pay per click advertising Philadelphia",
    "Philadelphia Google Ads agency",
    "landing page optimization Philadelphia",
    "PPC for local business Philadelphia",
    "conversion tracking PPC Philadelphia",
    "lead generation Google Ads Philadelphia",
  ],
  alternates: { canonical: "/services/philadelphia/ppc" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "PPC Agency Philadelphia | Google Ads Management | Zonic Media",
    description:
      "Philadelphia PPC agency generating high-intent leads through Google Ads, landing page optimization, conversion tracking, and campaign management.",
    url: "/services/philadelphia/ppc",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Philadelphia PPC", url: "/services/philadelphia/ppc" },
]);

const PhilaPpcFaqs = [
  {
    question: "How fast does PPC generate results?",
    answer:
      "PPC campaigns can start generating leads within days after launch, depending on setup and competition.",
  },
  {
    question: "What is better, PPC or SEO?",
    answer:
      "PPC delivers immediate results, while SEO builds long-term growth. Combining both provides the best outcome.",
  },
  {
    question: "Do I need a landing page for PPC campaigns?",
    answer:
      "Yes. A well-optimized landing page improves conversions and ensures better ROI.",
  },
  {
    question: "How do you measure PPC success?",
    answer:
      "We track leads, calls, conversions, cost per lead, and ROI to measure performance.",
  },
  {
    question: "Is PPC expensive for local businesses?",
    answer:
      "PPC budgets can be controlled. With the right strategy, it delivers strong ROI.",
  },
];

const PhilaPpcFormHead = {
  leadFormTitle: "Want More Leads Fast in Philadelphia?",
  leadCallText: (
    <>
      Book a discovery call with Zonic Media and let&apos;s build a PPC
      strategy that drives real results.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

const HeroFeatures = [
  {
    icon: <MdOutlineLocationOn />,
    title: "RANK HIGHER ON GOOGLE",
  },
  {
    icon: <FiPhoneCall />,
    title: "GET MORE CALLS FROM LOCAL CUSTOMERS",
  },
  {
    icon: <LuCalendarCheck2 />,
    title: "BOOK MORE JOBS & GROW YOUR BUSINESS",
  },
  {
    icon: <RiLineChartLine />,
    title: "SUSTAINABLE GROWTH THAT LASTS",
  },
];

const EssentialSearches = [
  "Emergency plumber Philadelphia",
  "Roofing contractor near me",
  "HVAC repair Philadelphia",
  "Dentist near me",
];

const PpcWorkflow = [
  {
    step: "01",
    icon: <FaSearch />,
    title: "Keyword Targeting",
    description:
      "We target high-intent search terms your customers are actively using in Philadelphia.",
  },
  {
    step: "02",
    icon: <FaClipboardList />,
    title: "Ad Copy Optimization",
    description:
      "We create compelling ads that increase click-through rates and attract the right audience.",
  },
  {
    step: "03",
    icon: <MdOutlineRocketLaunch />,
    title: "Landing Page Optimization",
    description:
      "We optimize your landing pages to convert visitors into leads, calls, and inquiries.",
  },
  {
    step: "04",
    icon: <FaDatabase />,
    title: "Conversion Tracking",
    description:
      "We track calls, form submissions, and results to ensure your campaigns are profitable.",
  },
];

const Industries = [
  {
    icon: <MdRoofing />,
    title: "Roofing Companies",
  },
  {
    icon: <FaTooth />,
    title: "Dentists",
  },
  {
    icon: <FaScaleBalanced />,
    title: "Legal Services",
  },
  {
    icon: <FaTools />,
    title: "Contractors",
  },
  {
    icon: <FaFan />,
    title: "HVAC Businesses",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Cleaning Companies",
  },
];

const DifferenceCards = [
  {
    icon: <FaBullseye />,
    title: "Precise Keyword Targeting",
    description: "We focus on high-intent keywords that generate real leads.",
  },
  {
    icon: <MdOutlineRocketLaunch />,
    title: "Continuous Campaign Optimization",
    description:
      "We constantly test and improve campaigns for better performance.",
  },
  {
    icon: <FaClipboardList />,
    title: "Conversion-Focused Landing Pages",
    description: "We optimize landing pages to turn traffic into customers.",
  },
  {
    icon: <FaDatabase />,
    title: "Data-Driven Decision Making",
    description: "Every decision is backed by performance data and analytics.",
  },
];

const PpcServices = [
  {
    image: "/images/philadelphia/phila-ppc/phila-ppc-serv1.jpg",
    icon: <FaGoogle />,
    title: "Google Ads Campaign Setup",
    description:
      "We build optimized campaigns that generate leads and maximize ROI.",
  },
  {
    image: "/images/philadelphia/phila-ppc/phila-ppc-serv2.jpg",
    icon: <FaSearch />,
    title: "Keyword Research & Targeting",
    description:
      "We identify high-converting keywords your audience is actively searching.",
  },
  {
    image: "/images/philadelphia/phila-ppc/phila-ppc-serv3.jpg",
    icon: <FaClipboardList />,
    title: "Ad Copy Optimization",
    description:
      "We create and test ads to improve click-through rates and conversions.",
  },
  {
    image: "/images/philadelphia/phila-ppc/phila-ppc-serv4.jpg",
    icon: <MdOutlineRocketLaunch />,
    title: "Landing Page Optimization",
    description:
      "We improve landing pages to increase conversion rates and reduce bounce rates.",
  },
  {
    image: "/images/philadelphia/phila-ppc/phila-ppc-serv5.jpg",
    icon: <FaChartLine />,
    title: "Conversion Tracking Setup",
    description:
      "We track performance metrics to measure real business results.",
  },
  {
    image: "/images/philadelphia/phila-ppc/phila-ppc-serv6.jpg",
    icon: <FaArrowRotateRight />,
    title: "Remarketing & Retargeting Campaigns",
    description: "We re-engage visitors and convert lost traffic into leads.",
  },
];

function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="phila-ppc-sec-1">
        <div className="phila-ppc-sec-1-layer">
          <div className="phila-ppc-sec-1-banner-image">
            <Image
              src="/images/philadelphia/phila-ppc/phila-ppc-banner-img-2.png"
              alt="Philadelphia PPC agency hero illustration"
              width={480}
              height={480}
              priority
            />
          </div>
          <div className="phila-ppc-sec-1-content">
            <Col lg={9} className="phila-ppc-sec-1-content-wrapper">
              <h1 className="phila-ppc-sec-1-heading">
                PPC Agency Philadelphia: Get More Leads Fast with{" "}
                <span>Google Ads in 2026</span>
              </h1>
              <p className="phila-ppc-sec-1-sub-head">
                PPC Agency Philadelphia | Zonic Media
              </p>
              <p className="phila-ppc-sec-1-descrp">
                Looking for a high-performing Philadelphia PPC agency that
                actually delivers results? Zonic Media helps businesses generate
                high-quality leads through strategic Google Ads campaigns,
                advanced targeting, and data-driven PPC management.
              </p>
              <p className="phila-ppc-sec-1-descrp">
                As a trusted PPC agency in Philadelphia, we focus on what
                matters: qualified leads, lower cost per acquisition, and
                scalable growth. Whether you need more calls, form submissions,
                or sales, our PPC campaigns are built to convert.
              </p>

              <div className="phila-ppc-sec-1-ctas">
                <HashScrollLink
                  href="#phila-ppc-audit-form"
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
                  href="#phila-ppc-audit-form"
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

              <div className="phila-ppc-feature-grid">
                {HeroFeatures.map((feature) => (
                  <div className="feature-card" key={feature.title}>
                    <div className="icon-box">{feature.icon}</div>
                    <p>{feature.title}</p>
                  </div>
                ))}
              </div>
            </Col>
          </div>
        </div>
      </div>

      <div className="phila-ppc-sec-2">
        <Row className="align-items-center g-4">
          <Col lg={5}>
            <div className="phila-ppc-sec-2-img-cont">
              <Image
                src="/images/philadelphia/phila-ppc/phila-ppc-img-2.jpg"
                fill
                alt="Philadelphia PPC campaign management"
              />
            </div>
          </Col>

          <Col lg={7}>
            <div className="phila-ppc-sec-2-content">
              <h2 className="phila-ppc-sec-2-heading">
                <span>PPC Agency</span> in Philadelphia That Delivers High
                Intent Leads
              </h2>
              <p className="phila-ppc-sec-2-descrp">
                If you want immediate leads for your business, PPC advertising
                in Philadelphia is one of the fastest ways to generate results.
                But running ads alone is not enough; strategy, targeting, and
                optimization make the difference.
              </p>
              <p className="phila-ppc-sec-2-descrp">
                Many businesses waste thousands of dollars on poorly managed
                campaigns that generate clicks but no real customers.
              </p>
              <p className="phila-ppc-sec-2-descrp">
                At Zonic Media, we take a different approach.
              </p>
              <p className="phila-ppc-sec-2-descrp">
                As a results-focused Philadelphia PPC company, we build
                campaigns with one clear objective:
              </p>
              <p className="phila-ppc-sec-2-highlight">
                Generating high-quality leads that convert into revenue.
              </p>

              <ServiceSectionCta href="#phila-ppc-audit-form" align="left">
                Get My Free PPC Audit
              </ServiceSectionCta>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-ppc-sec-3">
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <div className="phila-ppc-sec-3-content">
              <h2 className="phila-ppc-sec-heading">
                Why PPC Is Essential for Philadelphia Businesses
              </h2>
              <p className="phila-ppc-sec-3-text">
                Philadelphia is a competitive market where customers are
                actively searching for services every day.
              </p>
              <p className="phila-ppc-sec-3-text">Searches like:</p>

              <div className="phila-ppc-timeline-list">
                {EssentialSearches.map((item) => (
                  <div className="phila-ppc-timeline-item" key={item}>
                    <span className="phila-ppc-timeline-dot" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="phila-ppc-sec-3-text">
                These are high-intent searches where customers are ready to take
                action.
              </p>
              <p className="phila-ppc-sec-3-text">
                With the right PPC marketing in Philadelphia, your business
                appears at the top of Google instantly, capturing these
                opportunities before competitors do.
              </p>
              <p className="phila-ppc-sec-3-text">PPC allows you to:</p>

              <div className="phila-ppc-timeline-list">
                <div className="phila-ppc-timeline-item">
                  <span className="phila-ppc-timeline-dot" />
                  <p>
                    Reach customers at the exact moment they need your service
                  </p>
                </div>
                <div className="phila-ppc-timeline-item">
                  <span className="phila-ppc-timeline-dot" />
                  <p>Control your visibility and budget</p>
                </div>
                <div className="phila-ppc-timeline-item">
                  <span className="phila-ppc-timeline-dot" />
                  <p>Generate leads faster than organic methods</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="phila-ppc-sec-3-img-cont">
              <Image
                src="/images/philadelphia/phila-ppc/phila-ppc-img-3.jpg"
                fill
                alt="Why PPC matters for Philadelphia businesses"
              />
            </div>
          </Col>
        </Row>

        <ServiceSectionCta href="#phila-ppc-audit-form" align="left">
          Review My PPC Opportunity
        </ServiceSectionCta>
      </div>

      <div className="phila-ppc-sec-4">
        <div className="phila-ppc-center-head">
          <div className="phila-ppc-center-head-content-wrapper">
            <h2 className="phila-ppc-sec-heading">
              How PPC Works for Local Businesses
            </h2>
            <p className="phila-ppc-sec-descrp">
              PPC advertising places your business in front of customers who are
              ready to take action. You only pay when someone clicks your ad,
              making it a highly targeted and measurable strategy.
            </p>
          </div>
        </div>

        <Row className="phila-ppc-strategy-row">
          {PpcWorkflow.map((item) => (
            <Col
              lg={3}
              md={6}
              key={item.title}
              className="phila-ppc-strategy-col"
            >
              <div className="phila-ppc-strategy-card">
                <div className="phila-ppc-strategy-circle">
                  <span className="phila-ppc-strategy-step">{item.step}</span>
                  <i className="phila-ppc-strategy-icon">{item.icon}</i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <ServiceSectionCta href="#phila-ppc-audit-form">
          Build My PPC Plan
        </ServiceSectionCta>
      </div>

      <div className="iaf-section service-mid-audit" id="phila-ppc-audit-form">
        <InlineAuditForm
          heading="Get Your Free Philadelphia PPC Audit"
          description="Share your business details and we will review your ad targeting, landing page conversion gaps, and lead generation opportunities at no cost."
        />
      </div>

      <div className="phila-ppc-sec-5">
        <div className="phila-ppc-center-head">
          <div className="phila-ppc-center-head-content-wrapper">
            <p className="phila-ppc-label">WHY US</p>
            <h2 className="phila-ppc-sec-heading">
              Industries We Serve in Philadelphia
            </h2>
          </div>
        </div>

        <div className="phila-ppc-sec-5-grid">
          {Industries.map((industry) => (
            <div className="phila-ppc-sec-5-item" key={industry.title}>
              <div className="phila-ppc-sec-5-icon">{industry.icon}</div>
              <h3>{industry.title}</h3>
            </div>
          ))}
        </div>

        <ServiceSectionCta href="#phila-ppc-contact-form">
          See If PPC Fits My Industry
        </ServiceSectionCta>
      </div>

      <div className="phila-ppc-sec-6">
        <div className="phila-ppc-sec-6-inner">
          <div className="phila-ppc-sec-6-panel">
            <h2 className="phila-ppc-sec-6-heading">
              <span>PPC + SEO</span> Combined Strategy
            </h2>
            <p className="phila-ppc-sec-6-text">
              PPC brings instant visibility and quick leads, while SEO builds
              long-term traffic and authority. Together, they create a powerful
              growth system for Philadelphia businesses.
            </p>

            <div className="phila-ppc-timeline-list">
              <div className="phila-ppc-timeline-item">
                <span className="phila-ppc-timeline-dot" />
                <p>A consistent and predictable flow of leads</p>
              </div>
              <div className="phila-ppc-timeline-item">
                <span className="phila-ppc-timeline-dot" />
                <p>Better brand visibility across paid and organic search</p>
              </div>
              <div className="phila-ppc-timeline-item">
                <span className="phila-ppc-timeline-dot" />
                <p>
                  Lower cost per lead over time as organic traffic increases
                </p>
              </div>
              <div className="phila-ppc-timeline-item">
                <span className="phila-ppc-timeline-dot" />
                <p>Stronger overall marketing performance and ROI</p>
              </div>
            </div>
          </div>

          <div className="phila-ppc-sec-6-panel phila-ppc-sec-6-panel-right">
            <h2 className="phila-ppc-sec-6-heading">
              <span>AI-Driven</span> PPC Strategy
            </h2>
            <p className="phila-ppc-sec-6-text">
              Search behavior is evolving, and modern PPC management in
              Philadelphia must adapt to new trends.
            </p>

            <div className="phila-ppc-timeline-list">
              <div className="phila-ppc-timeline-item">
                <span className="phila-ppc-timeline-dot" />
                <p>AI-driven targeting improves audience precision</p>
              </div>
              <div className="phila-ppc-timeline-item">
                <span className="phila-ppc-timeline-dot" />
                <p>User intent signals help optimize campaign performance</p>
              </div>
              <div className="phila-ppc-timeline-item">
                <span className="phila-ppc-timeline-dot" />
                <p>Conversational search queries influence keyword strategy</p>
              </div>
            </div>

            <p className="phila-ppc-sec-6-text">
              This ensures your campaigns remain effective, competitive, and
              future-ready.
            </p>
          </div>
        </div>

        <ServiceSectionCta href="#phila-ppc-contact-form">
          Combine PPC and SEO for Growth
        </ServiceSectionCta>
      </div>

      <div className="phila-ppc-sec-7">
        <div className="phila-ppc-center-head">
          <div className="phila-ppc-center-head-content-wrapper">
            <h2 className="phila-ppc-sec-heading">
              What Makes Zonic Media Different
            </h2>
            <p className="phila-ppc-sec-descrp">
              Our Philadelphia PPC management approach is built around
              performance, not just clicks.
            </p>
          </div>
        </div>

        <Row className="g-4">
          {DifferenceCards.map((card) => (
            <Col lg={6} key={card.title}>
              <div className="phila-ppc-diff-card">
                <div className="phila-ppc-diff-icon">{card.icon}</div>
                <div className="phila-ppc-diff-copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <ServiceSectionCta href="#phila-ppc-contact-form">
          Improve My PPC Performance
        </ServiceSectionCta>
      </div>

      <div className="phila-ppc-sec-12">
        <Row className="align-items-center g-4">
          <Col lg={7}>
            <div className="phila-ppc-sec-12-content">
              <p className="phila-ppc-label">GROWTH STRATEGY</p>
              <h2 className="phila-ppc-sec-12-heading">
                How PPC Delivers Measurable Growth for Philadelphia Businesses
              </h2>
              <p className="phila-ppc-sec-12-text">
                PPC advertising is one of the most effective ways to generate
                immediate visibility and high-intent traffic. With the right
                Philadelphia PPC management strategy, your business appears at
                the top of Google exactly when potential customers are
                searching for your services.
              </p>
              <p className="phila-ppc-sec-12-text">
                This means you are not just getting traffic; you are attracting
                users who are ready to take action. Whether it&apos;s a call,
                form submission, or direct purchase, PPC campaigns help
                convert search demand into real business opportunities.
              </p>

              <ServiceSectionCta href="#phila-ppc-contact-form" align="left">
                Get More Measurable Leads
              </ServiceSectionCta>
            </div>
          </Col>

          <Col lg={5}>
            <div className="phila-ppc-sec-12-highlights">
              <div className="phila-ppc-sec-12-highlight-card">
                <div className="phila-ppc-sec-12-icon">
                  <FaChartLine />
                </div>
                <h3>Immediate Visibility</h3>
                <p>
                  Reach buyers faster by showing up at the top of Google when
                  demand is highest.
                </p>
              </div>
              <div className="phila-ppc-sec-12-highlight-card">
                <div className="phila-ppc-sec-12-icon">
                  <FaBullseye />
                </div>
                <h3>High-Intent Traffic</h3>
                <p>
                  Capture visitors who are actively searching for your services
                  and ready to convert.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-ppc-sec-13">
        <div className="phila-ppc-sec-13-grid">
          <article className="phila-ppc-sec-13-card">
            <div className="phila-ppc-sec-13-icon">
              <FaBullseye />
            </div>
            <h2>Why Choosing the Right PPC Agency in Philadelphia Matters</h2>
            <p>
              Not all campaigns deliver results. A poorly managed campaign can
              quickly drain your budget without generating meaningful leads.
              That&apos;s why working with an experienced PPC agency in
              Philadelphia is critical.
            </p>
            <p>
              At Zonic Media, we focus on precise keyword targeting, smart
              bidding strategies, and continuous optimization. Our goal is
              simple: maximize your return on ad spend while reducing wasted
              clicks. This ensures your campaigns remain profitable and
              scalable.
            </p>
            <ServiceSectionCta href="#phila-ppc-contact-form" align="left">
              Talk to a PPC Specialist
            </ServiceSectionCta>
          </article>

          <article className="phila-ppc-sec-13-card phila-ppc-sec-13-card-accent">
            <div className="phila-ppc-sec-13-icon">
              <FaDatabase />
            </div>
            <h2>Future-Proof Your Growth with Data-Driven PPC Strategies</h2>
            <p>
              Search behavior is evolving, and businesses must adapt to stay
              competitive. Modern PPC advertising in Philadelphia relies on
              data, automation, and user intent signals to drive performance.
            </p>
            <p>
              By leveraging AI-driven optimization, audience insights, and
              real-time tracking, we ensure your campaigns stay ahead of market
              trends. This approach not only improves performance today but
              also builds a strong foundation for long-term growth and
              consistent lead generation.
            </p>
          </article>
        </div>
      </div>

      <div className="phila-ppc-sec-8">
        <div className="phila-ppc-center-head">
          <div className="phila-ppc-center-head-content-wrapper">
            <h2 className="phila-ppc-sec-heading">
              Our PPC Services in Philadelphia
            </h2>
            <p className="phila-ppc-sec-descrp">
              At Zonic Media, we offer full-service PPC management Philadelphia
              businesses trust.
            </p>
          </div>
        </div>

        <Row className="g-4">
          {PpcServices.map((service) => (
            <Col lg={4} md={6} key={service.title}>
              <div className="phila-ppc-service-card">
                <div className="phila-ppc-service-img">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={350}
                  />
                </div>

                <div className="phila-ppc-service-overlay">
                  <div className="phila-ppc-service-head">
                    <div className="phila-ppc-service-icon">{service.icon}</div>
                    <h4>{service.title}</h4>
                  </div>

                  <p>{service.description}</p>

                  <HashScrollLink
                    href="#phila-ppc-contact-form"
                    className="phila-ppc-service-link"
                    offset={120}
                  >
                    LEARN MORE <span>&gt;&gt;</span>
                  </HashScrollLink>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <ServiceSectionCta href="#phila-ppc-contact-form">
          Get a Free PPC Audit
        </ServiceSectionCta>
      </div>

      <div className="phila-ppc-sec-9">
        <h2 className="phila-ppc-sec-9-heading">What Our Clients Say</h2>

        <div className="phila-ppc-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      <div className="phila-ppc-sec-10">
        <div className="phila-ppc-center-head">
          <div className="phila-ppc-center-head-content-wrapper">
            <h2 className="phila-ppc-sec-heading">
              Frequently Asked Questions About PPC in Philadelphia
            </h2>
          </div>
        </div>

        <div className="phila-ppc-sec-10-faq-wrapper">
          <GmbFaqs items={PhilaPpcFaqs} columns={2} />
        </div>

        <Script
          id="phila-ppc-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://zonicllc.com/services/philadelphia/ppc",
              mainEntity: PhilaPpcFaqs.map((faq) => ({
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

      <div className="phila-ppc-sec-11">
        <div className="phila-ppc-sec-11-inner">
          <div className="phila-ppc-sec-11-content">
            <h2 className="phila-ppc-sec-11-heading">
              Want More Leads Fast in Philadelphia?
            </h2>
            <p className="phila-ppc-sec-11-descrp">
              Book a discovery call with Zonic Media and let&apos;s build a PPC
              strategy that drives real results.
            </p>

            <div className="phila-ppc-sec-11-info-grid">
              <div className="phila-ppc-sec-11-info-card">
                <div className="phila-ppc-sec-11-info-head">
                  <div className="phila-ppc-sec-11-info-icon">
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

              <div className="phila-ppc-sec-11-info-card">
                <div className="phila-ppc-sec-11-info-head">
                  <div className="phila-ppc-sec-11-info-icon">
                    <FaPhoneAlt />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <div className="phila-ppc-sec-11-image-wrap">
              <Image
                src="/images/contact-section.jpg"
                fill
                alt="Philadelphia marketing consultation and contact"
                className="phila-ppc-sec-11-image"
              />
            </div>
          </div>

          <div
            className="phila-ppc-sec-11-contact-form"
            id="phila-ppc-contact-form"
          >
            <LeadContactForm
              leadFormTitle={PhilaPpcFormHead.leadFormTitle}
              leadCallText={PhilaPpcFormHead.leadCallText}
              submitButtonText="Get a Free Call"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
