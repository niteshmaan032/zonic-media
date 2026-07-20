import type { Metadata } from "next";
import "@/app/style/delware/delDigital.css";
import "@/app/style/carTow.css";
import ClutchWidget from "@/app/components/ClutchWidget";
import GmbFaqs from "@/app/components/GmbFaqs";
import HashScrollLink from "@/app/components/HashScrollLink";
import InlineAuditForm from "@/app/components/InlineAuditForm";
import LeadContactForm from "@/app/components/LeadContactForm";
import GhlChatWidget from "@/app/components/GhlChatWidget";
import ServiceSectionCta from "@/app/components/ServiceSectionCta";
import Footer from "@/app/components/Footer";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import {
  FaBullseye,
  FaChartLine,
  FaGoogle,
  FaLightbulb,
} from "react-icons/fa6";
import { FaFileAlt, FaShareAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiStackSimpleFill } from "react-icons/pi";

const DelDigitalFaqs = [
  {
    question: "What does a digital marketing agency in Delaware do?",
    answer:
      "A digital marketing agency helps Delaware businesses generate leads, improve search visibility, increase conversions, and grow revenue through SEO, paid ads, content, web optimization, and local marketing.",
  },
  {
    question: "Can digital marketing help local businesses in Delaware?",
    answer:
      "Yes. Delaware businesses can use digital marketing to rank higher on Google, attract qualified local traffic, generate more calls, and compete more effectively in their market.",
  },
  {
    question:
      "What digital marketing services does Zonic Media offer in Delaware?",
    answer:
      "We offer Local SEO, PPC campaign management, social media marketing, email marketing, content and authority building, AI SEO optimization, and conversion-focused strategy.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "Paid campaigns can generate faster short-term leads, while SEO and authority-building typically show stronger momentum over several months. The timeline depends on your goals, competition, and starting point.",
  },
  {
    question: "Is SEO or Google Ads better for Delaware businesses?",
    answer:
      "Both can be valuable. SEO builds long-term visibility and trust, while Google Ads can produce faster lead flow. Many businesses in Delaware benefit from combining both strategies.",
  },
  {
    question: "Do you create strategies for specific industries?",
    answer:
      "Yes. We tailor campaigns around your market, sales cycle, competition, and audience so the strategy fits your business instead of using a generic template.",
  },
  {
    question: "Can you help improve conversions, not just traffic?",
    answer:
      "Yes. We focus on lead quality, landing page performance, user experience, messaging, and campaign optimization so your traffic turns into measurable business growth.",
  },
  {
    question: "How do I get started with Zonic Media in Delaware?",
    answer:
      "You can book a free strategy call with our team to review your goals, current performance, and the best digital marketing plan for your business.",
  },
];

const DelFrameworkSteps = [
  {
    number: "01",
    title: "Market and Competitor Analysis",
    description:
      "We study your market, search demand, and competition across Delaware to identify gaps, opportunities, and the fastest path to qualified growth.",
    icon: <FaFileAlt />,
  },
  {
    number: "02",
    title: "Channel Strategy Setup",
    description:
      "We map the right mix of SEO, paid search, local visibility, content, and conversion systems around your goals and customer journey.",
    icon: <FaLightbulb />,
  },
  {
    number: "03",
    title: "Execution and Optimization",
    description:
      "We launch campaigns, improve pages, refine targeting, and optimize performance continuously so momentum compounds over time.",
    icon: <PiStackSimpleFill />,
  },
  {
    number: "04",
    title: "Lead Tracking and Reporting",
    description:
      "We measure calls, forms, pipeline impact, and ROI so you can see clear business outcomes instead of vanity metrics.",
    icon: <FaChartLine />,
  },
];

const DelServiceCards = [
  {
    title: "Local SEO and Organic Growth",
    description:
      "Traffic alone is not enough. We improve search visibility, strengthen rankings, and generate more qualified local inquiries.",
    image: "/images/delaware/dela-digital-icon-1.svg",
    accentClass: "violet",
  },
  {
    title: "Social Media Marketing",
    description:
      "We build social campaigns that expand awareness, improve engagement, and support lead generation across the right platforms.",
    image: "/images/delaware/dela-digital-icon-2.svg",
    accentClass: "orange",
  },
  {
    title: "PPC Campaign Management",
    description:
      "We run focused paid campaigns that bring in high-intent traffic, lower wasted spend, and drive measurable ROI.",
    image: "/images/delaware/dela-digital-icon-3.svg",
    accentClass: "green",
  },
  {
    title: "Email Marketing",
    description:
      "We create email systems that nurture prospects, re-engage customers, and turn interest into consistent revenue.",
    image: "/images/delaware/dela-digital-icon-4.svg",
    accentClass: "pink",
  },
  {
    title: "Content and Authority Building",
    description:
      "We produce conversion-focused content that builds trust, supports rankings, and positions your brand as the better choice.",
    image: "/images/delaware/dela-digital-icon-5.svg",
    accentClass: "blue",
  },
  {
    title: "AI SEO Optimization",
    description:
      "We prepare your business for AI-driven discovery so customers can find your brand across modern search experiences.",
    image: "/images/delaware/dela-digital-icon-6.svg",
    accentClass: "yellow",
  },
];

const DelDigitalFormHead = {
  leadFormTitle: "Ready to Grow Your Business?",
  leadCallText: (
    <>
      Let&apos;s build a digital marketing strategy that drives more leads,
      better visibility, and long-term business growth in Delaware.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

export const metadata: Metadata = {
  title: "Digital Marketing Agency Delaware | SEO & PPC",
  description:
    "Delaware digital marketing agency helping businesses grow with SEO, PPC, social media, email marketing, AI SEO, and conversion-focused strategy.",
  keywords: [
    "digital marketing agency Delaware",
    "Delaware SEO company",
    "PPC management Delaware",
    "local SEO Delaware",
    "digital marketing Dover DE",
    "social media marketing Delaware",
    "Delaware marketing agency for small business",
    "lead generation Delaware",
    "Google Ads management Delaware",
  ],
  alternates: { canonical: "/services/delaware/digital-marketing" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Digital Marketing Agency Delaware | SEO & PPC | Zonic Media",
    description:
      "Delaware digital marketing agency helping businesses grow with SEO, PPC, social media, email marketing, AI SEO, and conversion-focused strategy.",
    url: "/services/delaware/digital-marketing",
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Delaware Digital Marketing", url: "/services/delaware/digital-marketing" },
]);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="deldg-sec-1">
        <div className="deldg-sec-1-copy">
          <h1 className="deldg-sec-1-title">
            Digital Marketing
            <br />
            That Drives
            <br />
            <span>Real Growth</span>
          </h1>

          <p className="deldg-sec-1-text">
            Looking for a digital marketing agency in Delaware? Zonic Media
            helps businesses generate leads through SEO, PPC, and
            high-converting growth strategies, and also serves nearby markets
            like{" "}
            <Link href="/services/philadelphia/digital-marketing" className="deldg-inline-link">
              digital marketing in Philadelphia
            </Link>
            .
          </p>

          <div className="deldg-sec-1-cta-row">
            <HashScrollLink
              href="/contact-us"
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

            <div className="deldg-sec-1-watch">
              <ClutchWidget />
            </div>
          </div>
        </div>

        <div className="deldg-sec-1-visual">
          <Image
            src="/images/delaware/dela-digital-banner.jpg"
            alt="Delaware skyline for digital marketing hero section"
            fill
            priority
          />
        </div>

        <div className="deldg-sec-1-strip">
          <div className="deldg-strip-card">
            <div className="deldg-strip-icon purple">
              <FaGoogle />
            </div>
            <div>
              <h3>SEO THAT RANKS</h3>
              <p>Get found by the right people at the right time.</p>
            </div>
          </div>

          <div className="deldg-strip-card">
            <div className="deldg-strip-icon blue">
              <FaBullseye />
            </div>
            <div>
              <h3>ADS THAT CONVERT</h3>
              <p>Targeted campaigns that bring real results.</p>
            </div>
          </div>

          <div className="deldg-strip-card">
            <div className="deldg-strip-icon orange">
              <FaChartLine />
            </div>
            <div>
              <h3>WEBSITES THAT SELL</h3>
              <p>High-performing pages designed to convert.</p>
            </div>
          </div>

          <div className="deldg-strip-card">
            <div className="deldg-strip-icon green">
              <FaShareAlt />
            </div>
            <div>
              <h3>CONTENT THAT BUILDS</h3>
              <p>Messaging that grows trust and drives action.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="deldg-sec-2">
        <div className="deldg-sec-2-left">
          <h2>
            High-Performance
            <br />
            Digital Marketing
            <br />
            Agency in Delaware
          </h2>
          <p>Some make promises. We make results.</p>

          <ServiceSectionCta href="/contact-us" align="left">
            Get a Free Call
          </ServiceSectionCta>
        </div>

        <div className="deldg-sec-2-right">
          <h3>Scale Your Business with Smarter Digital Marketing</h3>
          <p>
            We create data-driven strategies, from{" "}
            <Link href="/services/google-ads" className="deldg-inline-link">
              Google Ads management
            </Link>{" "}
            to organic search, that help you reach the right audience, increase
            visibility, and generate consistent leads that turn into real
            business growth.
          </p>
          <p>
            Our approach combines creativity, data, and performance marketing to
            deliver measurable outcomes that help your brand grow stronger and
            faster. We build digital systems, including a{" "}
            <Link href="/services/web-design" className="deldg-inline-link">
              conversion-focused website
            </Link>
            , that attract, convert, and retain customers for long-term success.
          </p>

          <div className="deldg-sec-2-stats">
            <div>
              <h4>250+</h4>
              <p>Leads Generated</p>
            </div>
            <div>
              <h4>120%</h4>
              <p>Average Growth</p>
            </div>
            <div>
              <h4>50+</h4>
              <p>Active Clients</p>
            </div>
            <div>
              <h4>4.9/5</h4>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="deldg-sec-3">
        <div className="deldg-sec-3-head">
          <div>
            <p className="deldg-kicker">What We Do</p>
            <h2>
              What Digital Marketing
              <br />
              Includes Today
            </h2>
          </div>

          <div className="deldg-sec-3-head-side">
            <HashScrollLink
              href="/contact-us"
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

            <p>
              We build{" "}
              <Link href="/services" className="deldg-inline-link">
                full-service digital marketing
              </Link>{" "}
              systems designed to generate leads, increase revenue, and create
              long term growth for businesses in Delaware.
            </p>
          </div>
        </div>

        <div className="deldg-sec-3-body">
          <div className="deldg-sec-3-list">
            {[
              "Higher Local Visibility",
              "Consistent Quality Leads",
              "Build Trust & Credibility",
              "Long-Term Growth",
              "Better Conversion Rates",
            ].map((item, index) => (
              <div className="deldg-sec-3-list-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="deldg-sec-3-image">
            <Image
              src="/images/delaware/dela-digital-img-2.jpg"
              alt="Digital marketing collaboration and campaign planning"
              fill
            />
          </div>
        </div>
      </section>

      {/* Audit form hidden — GHL chat widget handles leads on this page. Change false to true to restore. */}
      {false && (
      <div className="iaf-section service-mid-audit" id="del-digital-audit-form">
        <InlineAuditForm
          heading="Get Your Free Delaware Digital Marketing Audit"
          description="Share your business details and we will review your search visibility, paid growth opportunities, and conversion gaps at no cost."
        />
      </div>
      )}

      <section className="deldg-sec-4">
        <h2>
          Our Digital Marketing Strategy
          <br />
          Framework
        </h2>

        <Row className="deldg-framework-row">
          {DelFrameworkSteps.map((step) => (
            <Col
              lg={3}
              md={6}
              key={step.number}
              className="deldg-framework-col"
            >
              <div className="deldg-framework-card">
                <div className="deldg-framework-circle">
                  <div className="deldg-framework-icon">{step.icon}</div>
                  <span className="deldg-framework-badge">{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <ServiceSectionCta href="/contact-us">
          Build My Growth Strategy
        </ServiceSectionCta>
      </section>

      <section className="deldg-sec-5">
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <div className="deldg-sec-5-copy">
              <h2>
                Digital Marketing Agency in
                <br />
                Delaware Focused on Real Growth
              </h2>
              <h3>
                Most businesses invest in digital marketing but fail to see real
                results. Why?
              </h3>
              <p>
                Because they focus on traffic instead of conversions. At Zonic
                Media, we build digital marketing systems, backed by{" "}
                <Link href="/services/gmb-optimization" className="deldg-inline-link">
                  Google Business Profile optimization
                </Link>
                , designed to generate leads, increase revenue, and create long
                term growth for Delaware businesses.
              </p>
              <p>
                Whether you are a local service provider that benefits from{" "}
                <Link href="/services/local-seo-for-home-services" className="deldg-inline-link">
                  local SEO for home services
                </Link>{" "}
                or a growing company, our strategies are built to deliver
                measurable outcomes, not vanity metrics.
              </p>
              <ServiceSectionCta href="/contact-us" align="left">
                Get a Free Strategy Call
              </ServiceSectionCta>
            </div>
          </Col>

          <Col lg={6}>
            <div className="deldg-sec-5-image">
              <Image
                src="/images/delaware/dela-digital-img-3.jpg"
                alt="Digital marketing specialist working across multiple channels"
                fill
              />
            </div>
          </Col>
        </Row>
      </section>

      <section className="deldg-sec-6">
        <Row className="align-items-stretch g-4">
          <Col lg={5}>
            <div className="deldg-sec-6-image">
              <Image
                src="/images/delaware/dela-digital-img-4.jpg"
                alt="Website growth and digital marketing partnership workspace"
                fill
              />
            </div>
          </Col>

          <Col lg={7}>
            <div className="deldg-sec-6-copy">
              <h3>Every client engagement begins a long-term partnership.</h3>
              <p>
                We do not believe in treating businesses as just clients. Every
                collaboration is built on trust, transparency, and shared goals.
                Your success is not a metric we track. It is a mission we commit
                to.
              </p>
              <p>
                From the beginning, we work alongside you to understand your
                vision, challenges, and opportunities, whether that means
                scaling paid ads or handling a{" "}
                <Link href="/services/gmb-reinstatement-help" className="deldg-inline-link">
                  suspended Google Business Profile reinstatement
                </Link>
                . Instead of offering one-size-fits-all solutions, we build
                strategies that align with your growth and your market.
              </p>
              <p>
                We celebrate wins as our own and take responsibility when things
                need improvement. That mindset helps us create stronger
                relationships and better measurable impact.
              </p>

              <h2>
                Not clients, but
                <br />
                partners in every success
                <br />
                we build.
              </h2>

              <ServiceSectionCta href="/contact-us" align="left">
                Get a Free Call
              </ServiceSectionCta>
            </div>
          </Col>
        </Row>
      </section>

      <section className="deldg-sec-7">
        <div className="deldg-sec-7-head">
          <h2>
            Our Digital Marketing Services
            <br />
            in Delaware
          </h2>
        </div>

        <Row className="g-4">
          {DelServiceCards.map((card) => (
            <Col lg={4} md={6} key={card.title}>
              <div className="deldg-service-card">
                <div className={`deldg-service-icon ${card.accentClass}`}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={148}
                    height={148}
                  />
                </div>
                <h3>{card.title}</h3>
                <span
                  className={`deldg-service-line ${card.accentClass}`}
                ></span>
                <p>{card.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <ServiceSectionCta href="/contact-us">
          Get a Free Marketing Audit
        </ServiceSectionCta>
      </section>

      <section className="deldg-sec-8">
        <h2 className="deldg-sec-8-heading">What Our Clients Say</h2>

        <div className="deldg-test">
          <ClutchWidget
            widgetType="12"
            height="375"
            primaryColor="#f7c00a"
            reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
          />
        </div>
      </section>

      <section className="deldg-sec-9">
        <div className="deldg-center-head">
          <div className="deldg-center-head-content">
            <h2 className="deldg-common-heading">
              Frequently Asked Questions About Digital Marketing in Delaware
            </h2>
          </div>
        </div>

        <div className="deldg-sec-9-faq-wrapper">
          <GmbFaqs items={DelDigitalFaqs} columns={2} />
        </div>

        <Script
          id="del-digital-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "url": "https://zonicllc.com/services/delaware/digital-marketing",
              mainEntity: DelDigitalFaqs.map((faq) => ({
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
      </section>

      {/* Contact section hidden — GHL chat widget handles leads on this page. Change false to true to restore. */}
      {false && (
      <section className="deldg-sec-10">
        <div className="deldg-sec-10-inner">
          <div className="deldg-sec-10-content">
            <h2 className="deldg-sec-10-heading">
              Looking to Grow Your Business with a Digital Marketing Agency in
              Delaware?
            </h2>
            <p className="deldg-sec-10-descrp">
              Book a discovery call with Zonic Media and let&apos;s build a
              digital marketing strategy focused on stronger visibility, better
              leads, and real business growth.
            </p>

            <div className="deldg-sec-10-info-grid">
              <div className="deldg-sec-10-info-card">
                <div className="deldg-sec-10-info-head">
                  <div className="deldg-sec-10-info-icon">
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

              <div className="deldg-sec-10-info-card">
                <div className="deldg-sec-10-info-head">
                  <div className="deldg-sec-10-info-icon">
                    <FiPhoneCall />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <a href={SITE_CONTACT.emailHref}>contact@zonicllc.com</a>
                <a href={SITE_CONTACT.phoneHref}>(302) 726-9736</a>
              </div>
            </div>

            <div className="deldg-sec-10-image-wrap">
              <Image
                src="/images/contact-section.jpg"
                fill
                alt="Delaware business growth consultation"
                className="deldg-sec-10-image"
              />
            </div>
          </div>

          <div
            className="deldg-sec-10-contact-form"
            id="del-digital-contact-form"
          >
            <LeadContactForm
              leadFormTitle={DelDigitalFormHead.leadFormTitle}
              leadCallText={DelDigitalFormHead.leadCallText}
              submitButtonText="Contact Us"
            />
          </div>
        </div>
      </section>
      )}

      <GhlChatWidget />
      <Footer />
    </>
  );
}
