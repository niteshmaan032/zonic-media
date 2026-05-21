import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import LeadContactForm from "@/app/components/LeadContactForm";
import "@/app/style/philadelphia/philaSem.css";
import { SITE_CONTACT } from "@/shared/siteConfig";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import {
  FaClipboardList,
  FaDatabase,
  FaEye,
  FaFileAlt,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaSearch,
  FaTools,
} from "react-icons/fa";
import {
  FaBullseye,
  FaFan,
  FaGoogle,
  FaHammer,
  FaScaleBalanced,
  FaTooth,
} from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuCalendarCheck2 } from "react-icons/lu";
import {
  MdHealthAndSafety,
  MdOutlineLocationOn,
  MdOutlineRocketLaunch,
  MdPlumbing,
  MdRoofing,
} from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Search Engine Marketing Agency Philadelphia | SEM Services",
  description:
    "Philadelphia search engine marketing agency helping businesses drive more leads with SEO, Google Ads, integrated SEM strategy, and conversion-focused growth systems.",
};

const PhilaSemFaqs = [
  {
    question: "What is search engine marketing?",
    answer:
      "Search engine marketing combines SEO and paid advertising to improve visibility, capture demand, and generate qualified leads from people actively searching online.",
  },
  {
    question: "Is SEM better than SEO alone?",
    answer:
      "SEM is often stronger because it combines immediate visibility from paid search with long-term growth from SEO, giving businesses both fast results and sustainable lead generation.",
  },
  {
    question: "How long does SEM take to show results?",
    answer:
      "Paid search can begin generating traffic quickly, while SEO takes longer to build momentum. Together, SEM creates both short-term lead flow and long-term visibility growth.",
  },
  {
    question: "Do I need both SEO and PPC?",
    answer:
      "Not every business needs both at the same level, but combining them usually creates stronger coverage, better data, and more opportunities to capture high-intent searches.",
  },
  {
    question: "Can SEM increase business revenue?",
    answer:
      "Yes. A well-managed SEM strategy can increase calls, form submissions, booked jobs, and revenue by helping your business appear when customers are ready to buy.",
  },
];

const PhilaSemFormHead = {
  leadFormTitle: "Ready to Dominate Search Results?",
  leadCallText: (
    <>
      Let&apos;s build a Philadelphia SEM strategy that combines SEO and paid
      search to generate more visibility, better leads, and measurable growth.
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

const SeoPpcBenefits = [
  {
    icon: <FaClipboardList />,
    title: "Immediate + Long Term Results",
    description:
      "PPC generates leads quickly, while SEO builds sustainable growth.",
  },
  {
    icon: <FaEye />,
    title: "Increased Search Visibility",
    description: "Your business appears in multiple positions on search results.",
  },
  {
    icon: <FaDatabase />,
    title: "Better Data Insights",
    description: "PPC data helps improve SEO strategy.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Lower Cost Per Lead Over Time",
    description: "SEO reduces dependency on paid ads.",
  },
];

const ProcessSteps = [
  {
    step: "01",
    title: "Audit and Research",
    description: "We analyze your current performance and competitors.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "We create a combined SEO and PPC plan.",
  },
  {
    step: "03",
    title: "Execution",
    description: "We implement campaigns and optimizations.",
  },
  {
    step: "04",
    title: "Continuous Optimization",
    description: "We refine strategies based on performance data.",
  },
];

const DifferenceCards = [
  {
    icon: <FaBullseye />,
    title: "lead generation",
  },
  {
    icon: <MdOutlineRocketLaunch />,
    title: "conversion optimization",
  },
  {
    icon: <FaFileAlt />,
    title: "local market targeting",
  },
  {
    icon: <FaDatabase />,
    title: "AI Search Readiness",
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
    icon: <MdPlumbing />,
    title: "Plumbing",
  },
  {
    icon: <MdHealthAndSafety />,
    title: "Healthcare",
  },
  {
    icon: <FaFan />,
    title: "HVAC Businesses",
  },
  {
    icon: <FaHammer />,
    title: "Cleaning Companies",
  },
];

const WhySemSearches = [
  "Local Services",
  "Urgent Solutions",
  "Trusted Providers",
];

const WhySemResults = [
  "Dominate Search Visibility",
  "Capture High Intent Traffic",
  "Increase Conversions",
];

const SemServices = [
  {
    image: "/images/philadelphia/phila-sem/phila-sem-serv-1.jpg",
    icon: <FaSearch />,
    title: "SEO for Long Term Growth",
    description:
      "We help your business rank on Google Search and Maps to generate consistent organic leads.",
  },
  {
    image: "/images/philadelphia/phila-sem/phila-sem-serv-2.jpg",
    icon: <FaGoogle />,
    title: "Paid Search Campaign Management",
    description:
      "We run targeted paid campaigns that bring immediate high intent traffic.",
  },
  {
    image: "/images/philadelphia/phila-sem/phila-sem-serv-3.jpg",
    icon: <FaFileAlt />,
    title: "Integrated Strategy Approach",
    description:
      "We optimize your website too: increase conversions, reduce bounce rates, generate more inquiries.",
  },
];

function page() {
  return (
    <>
      <div className="phila-sem-sec-1">
        <div className="phila-sem-sec-1-layer">
          <div className="phila-sem-sec-1-banner-image">
            <Image
              src="/images/philadelphia/phila-sem/phila-sem-banner-2-img.png"
              alt="Philadelphia search engine marketing hero illustration"
              width={480}
              height={480}
              priority
            />
          </div>
          <div className="phila-sem-sec-1-content">
            <Col lg={9} className="phila-sem-sec-1-content-wrapper">
              <h1 className="phila-sem-sec-1-heading">
                Search Engine Marketing Agency Philadelphia: Drive More Leads
                with <span>SEM in 2026</span>
              </h1>
              <p className="phila-sem-sec-1-sub-head">
                Search Engine Marketing Agency Philadelphia | Zonic Media
              </p>
              <p className="phila-sem-sec-1-descrp">
                Looking for a search engine marketing agency in Philadelphia?
                Zonic Media helps businesses generate leads through SEO and paid
                search strategies.
              </p>
              <p className="phila-sem-sec-1-descrp">
                We combine organic search growth with Google Ads execution so
                your business appears across the customer journey and captures
                more high-intent opportunities.
              </p>

              <div className="phila-sem-sec-1-ctas">
                <HashScrollLink
                  href="#phila-sem-contact-form"
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
                  href="#phila-sem-contact-form"
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

              <div className="phila-sem-feature-grid">
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

      <div className="phila-sem-sec-2">
        <div className="phila-sem-center-head">
          <div className="phila-sem-center-head-content-wrapper">
            <h2 className="phila-sem-sec-heading">
              What Is <span>Search Engine Marketing</span>
            </h2>
            <p className="phila-sem-sec-descrp">
              Search Engine Marketing includes Search Engine Optimization for
              organic rankings and paid search advertising through platforms
              like Google Ads, working together to ensure your business appears
              at every stage of the customer journey.
            </p>
          </div>
        </div>
      </div>

      <div className="phila-sem-sec-3">
        <div className="phila-sem-center-head">
          <div className="phila-sem-center-head-content-wrapper">
            <h2 className="phila-sem-sec-heading">
              Benefits of Combining <span>SEO and PPC</span>
            </h2>
          </div>
        </div>

        <Row className="align-items-center g-4">
          <Col lg={5}>
            <div className="phila-sem-benefit-stack">
              {SeoPpcBenefits.map((benefit, index) => (
                <div className="phila-sem-benefit-card" key={benefit.title}>
                  <div
                    className={`phila-sem-benefit-icon ${index % 2 === 1 ? "dark" : ""}`}
                  >
                    {benefit.icon}
                  </div>
                  <div className="phila-sem-benefit-copy">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={7}>
            <div className="phila-sem-sec-3-img-cont">
              <Image
                src="/images/philadelphia/phila-sem/phila-sem-img-2.jpg"
                fill
                alt="Benefits of combining SEO and PPC in Philadelphia"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-sem-sec-4">
        <div className="phila-sem-center-head">
          <div className="phila-sem-center-head-content-wrapper">
            <h2 className="phila-sem-sec-heading">Our SEM Process</h2>
            <p className="phila-sem-sec-descrp">
              From research to optimization, every step is focused on
              performance, scalability, and consistent lead generation.
            </p>
          </div>
        </div>

        <Row className="phila-sem-process-row">
          {ProcessSteps.map((step) => (
            <Col lg={3} md={6} key={step.step} className="phila-sem-process-col">
              <div className="phila-sem-process-card">
                <div className="phila-sem-process-circle">
                  <span className="phila-sem-process-number">{step.step}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="phila-sem-sec-5">
        <div className="phila-sem-center-head">
          <div className="phila-sem-center-head-content-wrapper">
            <h2 className="phila-sem-sec-heading">
              What Makes Zonic Media Different
            </h2>
            <p className="phila-sem-sec-descrp">
              Performance driven marketing. Our SEM strategies are built around:
            </p>
          </div>
        </div>

        <Row className="g-4">
          {DifferenceCards.map((card) => (
            <Col lg={6} key={card.title}>
              <div className="phila-sem-diff-card">
                <div className="phila-sem-diff-icon">{card.icon}</div>
                <div className="phila-sem-diff-copy">
                  <h3>{card.title}</h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="phila-sem-sec-6">
        <div className="phila-sem-center-head">
          <div className="phila-sem-center-head-content-wrapper">
            <p className="phila-sem-label">WHY US</p>
            <h2 className="phila-sem-sec-heading">
              Industries We Serve in Philadelphia
            </h2>
          </div>
        </div>

        <div className="phila-sem-sec-6-grid">
          {Industries.map((industry) => (
            <div className="phila-sem-sec-6-item" key={industry.title}>
              <div className="phila-sem-sec-6-icon">{industry.icon}</div>
              <h3>{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="phila-sem-sec-7">
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <div className="phila-sem-sec-7-content">
              <h2 className="phila-sem-sec-heading">
                Why SEM Matters for Philadelphia Businesses
              </h2>
              <p className="phila-sem-sec-7-text">
                Philadelphia is a highly competitive market. Customers are
                constantly searching for:
              </p>

              <div className="phila-sem-timeline-list">
                {WhySemSearches.map((item) => (
                  <div className="phila-sem-timeline-item" key={item}>
                    <span className="phila-sem-timeline-dot" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="phila-sem-sec-7-text">
                If your business does not appear in both paid and organic
                results, you are missing opportunities. SEM allows you to:
              </p>

              <div className="phila-sem-timeline-list">
                {WhySemResults.map((item) => (
                  <div className="phila-sem-timeline-item" key={item}>
                    <span className="phila-sem-timeline-dot" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="phila-sem-sec-7-img-cont">
              <Image
                src="/images/philadelphia/phila-sem/phila-sem-img-3.jpg"
                fill
                alt="Why SEM matters for Philadelphia businesses"
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="phila-sem-sec-8">
        <div className="phila-sem-center-head">
          <div className="phila-sem-center-head-content-wrapper">
            <h2 className="phila-sem-sec-heading">
              Our SEM Services in Philadelphia
            </h2>
            <p className="phila-sem-sec-descrp">
              Drive instant traffic and high-quality leads with targeted SEM
              campaigns.
            </p>
          </div>
        </div>

        <Row className="g-4">
          {SemServices.map((service) => (
            <Col lg={4} md={6} key={service.title}>
              <div className="phila-sem-service-card">
                <div className="phila-sem-service-img">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={350}
                  />
                </div>

                <div className="phila-sem-service-overlay">
                  <div className="phila-sem-service-head">
                    <div className="phila-sem-service-icon">
                      {service.icon}
                    </div>
                    <h4>{service.title}</h4>
                  </div>

                  <p>{service.description}</p>

                  <HashScrollLink
                    href="#phila-sem-contact-form"
                    className="phila-sem-service-link"
                    offset={120}
                  >
                    LEARN MORE <span>&gt;&gt;</span>
                  </HashScrollLink>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="phila-sem-sec-9">
        <h2 className="phila-sem-sec-9-heading">What Our Clients Say</h2>

        <div className="phila-sem-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </div>

      <div className="phila-sem-sec-10">
        <div className="phila-sem-center-head">
          <div className="phila-sem-center-head-content-wrapper">
            <h2 className="phila-sem-sec-heading">
              Frequently Asked Questions About SEM in Philadelphia
            </h2>
          </div>
        </div>

        <div className="phila-sem-sec-10-faq-wrapper">
          <GmbFaqs items={PhilaSemFaqs} columns={2} />
        </div>

        <Script
          id="phila-sem-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: PhilaSemFaqs.map((faq) => ({
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

      <div className="phila-sem-sec-11">
        <div className="phila-sem-sec-11-inner">
          <div className="phila-sem-sec-11-content">
            <h2 className="phila-sem-sec-11-heading">
              Want to dominate search results in Philadelphia?
            </h2>
            <p className="phila-sem-sec-11-descrp">
              Book a discovery call with Zonic Media and let us build a search
              engine marketing strategy that drives consistent growth.
            </p>

            <div className="phila-sem-sec-11-info-grid">
              <div className="phila-sem-sec-11-info-card">
                <div className="phila-sem-sec-11-info-head">
                  <div className="phila-sem-sec-11-info-icon">
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

              <div className="phila-sem-sec-11-info-card">
                <div className="phila-sem-sec-11-info-head">
                  <div className="phila-sem-sec-11-info-icon">
                    <FaPhoneAlt />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <div className="phila-sem-sec-11-image-wrap">
              <Image
                src="/images/contact-section.jpg"
                fill
                alt="Philadelphia marketing consultation and contact"
                className="phila-sem-sec-11-image"
              />
            </div>
          </div>

          <div
            className="phila-sem-sec-11-contact-form"
            id="phila-sem-contact-form"
          >
            <LeadContactForm
              leadFormTitle={PhilaSemFormHead.leadFormTitle}
              leadCallText={PhilaSemFormHead.leadCallText}
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
