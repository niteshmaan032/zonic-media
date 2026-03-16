"use client";

import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { PiShieldCheckBold } from "react-icons/pi";
import Image from "next/image";
import "@/app/style/localseoservice.css";
import { FiUser } from "react-icons/fi";
import { IoKey } from "react-icons/io5";
import { FaDesktop } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

import ProcessSwiper from "@/app/components/ProcessSwiper";
import WhyWork from "@/app/components/WhyWork";
import Faqs from "@/app/components/Faqs";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useRef, useState } from "react";
function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const LocalProcessData = {
    heading:
      "Our Proven 5-Step Google Business Profile Suspension Recovery Process",
    items: [
      {
        number: "01",
        title: "Local SEO Audit",
        description:
          "We begin with a detailed analysis of your website, Google Business Profile, and current local search performance to identify opportunities for improving rankings and visibility.",
        bullets: [
          "Website SEO audit",
          "Competitor analysis",
          "Local ranking review",
        ],
      },
      {
        number: "02",
        title: "Keyword & Market Research",
        description:
          "Our team identifies high-intent local keywords and analyzes search behavior to ensure your business targets the most valuable search opportunities.",
        bullets: [
          "Local keyword research",
          "Search intent analysis",
          "Market opportunity review",
        ],
      },
      {
        number: "03",
        title: "On-Page SEO Optimization",
        description:
          "We optimize your website pages, content, meta tags, and local signals to improve relevance and help search engines understand your business location and services.",
        bullets: [
          "Page SEO improvements",
          "Location signal optimization",
          "Content enhancements",
        ],
      },
      {
        number: "04",
        title: "Google Business Profile Optimization",
        description:
          "We enhance your Google Business Profile with accurate information, optimized categories, and engaging content to improve your visibility on Google Maps.",
        bullets: [
          "Profile optimization",
          "Category alignment",
          "NAP consistency",
        ],
      },
      {
        number: "05",
        title: "Performance Tracking & Growth",
        description:
          "We continuously monitor rankings, traffic, and leads to refine your strategy and ensure consistent local search growth.",
        bullets: [
          "Ranking monitoring",
          "Traffic analysis",
          "Strategy optimization",
        ],
      },
    ],
  };

  const WhylocalData = {
    heading: "Why Work With Zonic Media for Local SEO Services",
    image: {
      src: "/images/home-seo-2.jpg",
      alt: "google my business recovery",
    },
    defaultActiveKey: "0",
    items: [
      {
        title: "Proven Local SEO Expertise",
        content:
          "Zonic Media brings proven expertise in helping businesses improve their visibility in local search results. Our team uses data-driven strategies, industry best practices, and the latest search engine guidelines to ensure your business ranks higher on Google Search and Google Maps. By focusing on targeted local optimization, we help businesses attract more qualified customers who are actively searching for their services.",
      },
      {
        title: "Customized SEO Strategies",
        content:
          "Every business is different, which is why we create tailored local SEO strategies based on your industry, location, and competition. From keyword research and on-page optimization to Google Business Profile improvements and citation management, our strategies are designed to generate measurable results and sustainable growth for your business.",
      },
      {
        title: "Transparent Reporting & Insights",
        content:
          "We believe in complete transparency when it comes to your SEO performance. Our team provides clear reports and performance insights so you can track improvements in rankings, traffic, and lead generation. This allows you to understand how your local SEO strategy is performing and how it contributes to your overall business growth.",
      },
      {
        title: "Long-Term Local Growth Focus",
        content:
          "Our goal is not just short-term rankings but long-term local visibility and consistent lead generation. By continuously optimizing your website, managing your local listings, and adapting to search engine updates, we help your business maintain a competitive advantage in local search results.",
      },
    ],
  };

  const LocalFaqs = [
    {
      question: "What is Local SEO and how does it help my business?",
      answer:
        "Local SEO is the process of optimizing your online presence so your business appears in local search results on Google and Google Maps. It helps attract nearby customers who are actively searching for the services you offer.",
    },
    {
      question: "How long does it take to see results from Local SEO?",
      answer:
        "Local SEO is a long-term strategy, but many businesses begin seeing improvements in rankings, traffic, and customer inquiries within 3 to 4 months, depending on competition and current website performance.",
    },
    {
      question: "What factors influence local search rankings?",
      answer:
        "Local rankings depend on several factors including Google Business Profile optimization, website SEO, local keyword relevance, business citations, customer reviews, and overall online authority.",
    },
    {
      question: "Do I need a Google Business Profile for Local SEO?",
      answer:
        "Yes. A properly optimized Google Business Profile is one of the most important factors for ranking in local search and Google Maps. It helps customers find your business location, services, and contact information quickly.",
    },
    {
      question: "Can Local SEO help generate more leads for my business?",
      answer:
        "Yes. Local SEO targets high-intent searches from customers in your area, helping your business appear when people are actively looking for your services, which leads to more calls, inquiries, and conversions.",
    },
  ];
  return (
    <>
      {/*localseo-section-1*/}
      <div className="localseo-section-1">
        <Row className="justify-content-between h-100">
          <Col lg={6}>
            <div className="localseo-sec1-content">
              <p className="localseo-sec1-title">
                <PiShieldCheckBold size={16} />
                95% Local Visibility Growth
              </p>
              <h1 className="localseo-sec1-heading">
                Local SEO That Puts Your Business on the Map
              </h1>
              <p className="localseo-sec1-descrp">
                We help businesses{" "}
                <span>
                  {" "}
                  dominate local search results, rank higher on Google Maps,
                  attract nearby customers,{" "}
                </span>{" "}
                and turn high-intent searches into consistent leads and revenue
                growth through proven local SEO strategies.
              </p>
              <Link href="/contact-us" target="blank" className="buttons">
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
            <div className="localseo-sec1-img-cont">
              <Image src="/images/seo-1.gif" fill alt="local seo " />
            </div>
          </Col>
        </Row>
      </div>

      {/*localseo-video-section*/}
      <div className="localseo-section-video-wrapper">
        <div className="localseo-video-head">
          <h2 className="localseo-video-heading">
            How Our Local SEO Strategy Helps <br /> Your Business Rank Higher
          </h2>
        </div>
        <div className="localseo-section-video">
          {!isPlaying && (
            <div className="video-layer" onClick={handlePlay}>
              <FaRegCirclePlay size={62} />
            </div>
          )}

          <video
            ref={videoRef}
            playsInline
            loop
            poster="/images/video-prv.png"
            controls={isPlaying}
            className="seo-video"
            src="/video/seo-video.mp4"
          />
        </div>
      </div>

      {/*localseo-section-2*/}
      <div className="localseo-section-2">
        <div className="localseo-sec2-head">
          <h2 className="localseo-sec2-heading">
            Our Local SEO Services for Higher Rankings
          </h2>

          <p className="localseo-sec2-descrp">
            Our data-driven local SEO services improve search visibility,
            increase organic traffic, and help your business rank higher in
            Google Search and Maps through proven optimization strategies.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <FiUser size={32} />
              <h3 className="localseo-card-heading">
                Google Business Profile Optimization
              </h3>
              <p className="localseo-card-descrp">
                Improve your visibility on Google Maps with a fully optimized
                Google Business Profile designed to attract local customers and
                increase calls and inquiries.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <IoKey size={32} />
              <h3 className="localseo-card-heading">Local Keyword Targeting</h3>
              <p className="localseo-card-descrp">
                We identify high-intent local keywords your customers are
                searching for and optimize your website to rank for searches
                that generate real leads.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <FaDesktop size={32} />
              <h3 className="localseo-card-heading">On-Page Local SEO</h3>
              <p className="localseo-card-descrp">
                Our team optimizes your website pages, meta tags, headings, and
                location signals to strengthen your local search relevance and
                ranking performance.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <MdContacts size={32} />
              <h3 className="localseo-card-heading">
                Citation Building & NAP Consistency
              </h3>
              <p className="localseo-card-descrp">
                We ensure your business information is consistent across
                directories and local listings, helping build trust with search
                engines and improve local rankings.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <FaRegStar size={32} />
              <h3 className="localseo-card-heading">
                Online Review & Reputation Management
              </h3>
              <p className="localseo-card-descrp">
                We help generate and manage customer reviews to build trust,
                improve credibility, and increase conversions from local search
                traffic.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <IoDocumentTextSharp size={32} />
              <h3 className="localseo-card-heading">
                Local Content & Authority Building
              </h3>
              <p className="localseo-card-descrp">
                Our team creates location-focused content and SEO strategies
                that position your business as a trusted authority in your local
                market.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/*localseo-section-3*/}
      <div className="localseo-section-3">
        <Row className="justify-content-between">
          <Col lg={5}>
            <h2 className="localseo-sec3-heading">
              <span> Local SEO Solutions </span> for Businesses Across Multiple
              Industries
            </h2>

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
          </Col>

          <Col lg={6}>
            <div className="localseo-sec3-descrp">
              <p>
                Zonic Media helps businesses across a wide range of industries
                improve their visibility in local search results and attract
                more customers from their target locations. Whether you operate
                an HVAC company, roofing business, locksmith service, medical
                clinic, or any other home service business, our local SEO
                strategies are designed to help you rank higher on Google Search
                and Google Maps.
              </p>
              <p>
                From plumbers, electricians, and landscapers to dentists, med
                spas, real estate agencies, auto repair shops, moving companies,
                and cleaning services, we help local businesses strengthen their
                online presence and generate more qualified leads through
                effective local SEO optimization.
              </p>
              <p>
                Local search visibility plays a critical role in business
                growth. When your business appears at the top of local search
                results, you gain more calls, website visits, and customer
                inquiries. At Zonic Media, we focus on optimizing every element
                of your local presence—including your website, Google Business
                Profile, local citations, and customer reviews—to ensure your
                business stands out ahead of competitors.
              </p>
              <p>
                Our local SEO services support single-location businesses,
                service-area businesses, and multi-location brands looking to
                grow their presence in competitive local markets. No matter your
                industry, our proven strategies help businesses improve
                rankings, attract nearby customers, and achieve sustainable
                local growth.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/*localseo-section-4*/}
      <ProcessSwiper processData={LocalProcessData} />

      {/*localseo-section-5*/}
      <WhyWork items={WhylocalData} />

      {/*localseo-section-6*/}
      <Faqs items={LocalFaqs} />

      {/*localseo-section-7*/}
      <ContactForm />

      {/*localseo-section-8*/}
      <Footer />
    </>
  );
}

export default Page;
