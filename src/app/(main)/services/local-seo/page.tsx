"use client";

import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { PiShieldCheckBold } from "react-icons/pi";
import Image from "next/image";
import "@/app/style/localseoservice.css";
import { FiUser } from "react-icons/fi";
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

  const SeoFaqs = [
    {
      question: "What industries does Zonic Media work with?",
      answer:
        "We work with startups, local businesses, service providers, and growing brands across multiple industries including technology, real estate, healthcare, e-commerce, and professional services worldwide.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. Zonic Media provides digital marketing and web design services globally, supporting clients across the USA, UAE, India, Australia, the United Kingdom, and Canada.",
    },
    {
      question: "What makes Zonic Media different from other agencies?",
      answer:
        "Our strategy-first approach combines creative design, SEO expertise, and performance marketing to deliver measurable growth instead of vanity metrics.",
    },
    {
      question: "How do you measure project success?",
      answer:
        "We track real business KPIs such as traffic growth, lead generation, conversion rates, and return on investment to ensure measurable results.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes. We offer continuous optimization, performance monitoring, and long-term digital growth support to help businesses scale consistently.",
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
                95% growth ratio
              </p>
              <h1 className="localseo-sec1-heading">
                Local SEO That Puts Your Business on the Map
              </h1>
              <p className="localseo-sec1-descrp">
                We help your business dominate local search results,{" "}
                <span> appear prominently on Google Maps, </span> attract nearby
                customers, and convert searches into measurable revenue growth.
              </p>
              <Link href="#" className="buttons">
                Request a Free Consultation
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
              <Image src="/images/header.gif" fill alt="local seo mobile" />
            </div>
          </Col>
        </Row>
      </div>

      {/*localseo-video-section*/}
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

      {/*localseo-section-2*/}
      <div className="localseo-section-2">
        <div className="localseo-sec2-head">
          <h2 className="localseo-sec2-heading">
            Our Local SEO Services for Higher Ranking
          </h2>

          <p className="localseo-sec2-descrp">
            Tailored SEO services that boost visibility, drive organic traffic,
            and improve rankings through proven optimization strategies.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <FiUser size={32} />
              <h3 className="localseo-card-heading">Boost organic traffic</h3>
              <p className="localseo-card-descrp">
                Drive targeted visitors to your website with our expert SEO
                strategies. Achieve 200% growth in qualified traffic with our
                technical SEO expertise.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <FiUser size={32} />
              <h3 className="localseo-card-heading">Boost organic traffic</h3>
              <p className="localseo-card-descrp">
                Drive targeted visitors to your website with our expert SEO
                strategies. Achieve 200% growth in qualified traffic with our
                technical SEO expertise.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <FiUser size={32} />
              <h3 className="localseo-card-heading">Boost organic traffic</h3>
              <p className="localseo-card-descrp">
                Drive targeted visitors to your website with our expert SEO
                strategies. Achieve 200% growth in qualified traffic with our
                technical SEO expertise.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <FiUser size={32} />
              <h3 className="localseo-card-heading">Boost organic traffic</h3>
              <p className="localseo-card-descrp">
                Drive targeted visitors to your website with our expert SEO
                strategies. Achieve 200% growth in qualified traffic with our
                technical SEO expertise.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <FiUser size={32} />
              <h3 className="localseo-card-heading">Boost organic traffic</h3>
              <p className="localseo-card-descrp">
                Drive targeted visitors to your website with our expert SEO
                strategies. Achieve 200% growth in qualified traffic with our
                technical SEO expertise.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="localseo-card-wrapper">
              <FiUser size={32} />
              <h3 className="localseo-card-heading">Boost organic traffic</h3>
              <p className="localseo-card-descrp">
                Drive targeted visitors to your website with our expert SEO
                strategies. Achieve 200% growth in qualified traffic with our
                technical SEO expertise.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/*localseo-section-3*/}
      <div className="localseo-section-3">
        <Row>
          <Col lg={5}>
            <h2 className="localseo-sec3-heading">
              <span> Trusted </span> GMB Suspension Recovery Across Industries
            </h2>

            <Link href="#" className="buttons">
              Request a Free Consultation
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
                Whether you’re an
                <span>
                  HVAC technician, locksmith, roofer, health clinic, or home
                  service professional
                </span>
                , Zonic Media LLC helps businesses across industries recover
                suspended Google Business Profiles quickly and safely.
                <span>
                  From plumbers, electricians, and landscapers to dentists, med
                  spas, realtors, auto repair shops, movers, and cleaning
                  companies
                </span>
                —we’ve helped local businesses regain visibility and customer
                trust without risking further penalties.
              </p>
              <p>
                A suspended Google Business Profile directly impacts your local
                visibility, incoming leads, and brand credibility. Lost rankings
                mean fewer calls, fewer visits, and missed revenue
                opportunities. At <span> Zonic Media LLC </span> , we understand
                how urgent reinstatement is—and why it must be handled correctly
                to avoid repeat suspensions or long-term damage.
              </p>
              <p>
                We specialize in reinstating Google Business Profiles for
                single-location businesses, multi-location brands, and
                service-area businesses alike.
                <span> No matter your industry </span> , if your profile is
                suspended, our experts follow Google’s latest 2025 policies to
                reinstate your listing efficiently and keep it fully compliant
                for long-term local success.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/*localseo-section-4*/}
      <ProcessSwiper />

      {/*localseo-section-5*/}
      <WhyWork />

      {/*localseo-section-6*/}
      <Faqs items={SeoFaqs} />

      {/*localseo-section-7*/}
      <ContactForm />

      {/*localseo-section-8*/}
      <Footer />
    </>
  );
}

export default Page;

