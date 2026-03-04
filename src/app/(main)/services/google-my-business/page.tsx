import { Col, Row } from "react-bootstrap";
import "@/app/style/gmbservice.css";
import Link from "next/link";

import Image from "next/image";
import { PiShieldCheckBold } from "react-icons/pi";
import { LuKeyRound, LuPhoneMissed } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";
import { GrCopy } from "react-icons/gr";
import { FaRegAddressBook } from "react-icons/fa6";
import ProcessSwiper from "@/app/components/ProcessSwiper";
import WhyWork from "@/app/components/WhyWork";
import Marquee from "react-fast-marquee";
import Faqs from "@/app/components/Faqs";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

function Page() {
  const workIMages = [
    { src: "/images/work-1.png", alt: "recovered gmb account" },
    { src: "/images/work-2.png", alt: "recovered gmb account" },
    { src: "/images/work-3.png", alt: "recovered gmb account" },
    { src: "/images/work-4.png", alt: "recovered gmb account" },
  ];

  const GmbFaqs = [
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
      {/*gmb-section-1*/}
      <div className="gmb-section-1">
        <Row className="justify-content-between h-100">
          <Col lg={6}>
            <div className="gmb-sec1-content">
              <p className="gmb-sec1-title">
                <PiShieldCheckBold size={16} />
                95% success rate
              </p>
              <h1 className="gmb-sec1-heading">
                Google My Business Profile Suspension Help
              </h1>
              <p className="gmb-sec1-descrp">
                Get your suspended GMB listing reinstated by certified experts.
                We handle the complex appeals process while you focus on growing
                your business.
                <span> Trusted by 500+ agencies nationwide. </span>
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
            <div className="gmb-sec1-img-cont">
              <Image src="/images/gmb-1.png" fill alt="google my business" />
            </div>
          </Col>
        </Row>
      </div>

      {/*gmb-section-2*/}
      <div className="gmb-section-2 ">
        <div className="gmb-sec2-head-cont">
          <h2 className="gmb-sec2-heading">
            What are Causes of GMB Suspensions?
          </h2>
          <p className="gmb-sec2-descrp">
            As we’ve seen with Google’s evolving policies, common causes
            include:
          </p>

          <div className="gmb-sec2-cards">
            <div className="gmb-sec2-img-cont">
              <Image src="/images/gmb-2.png" fill alt="gmb phone " />
            </div>
            <Row>
              <Row className="justify-content-center ">
                <Col lg={4}>
                  <div className="gmb-cause-card-cont">
                    <LuPhoneMissed size={32} />
                    <h3 className="gmb-cause-card-heading"> Phone Issues </h3>
                    <p className="gmb-cause-card-descrp">
                      Phone number disapprovals or missing critical attributes
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="gmb-cause-card-row2 justify-content-between ">
                <Col lg={4}>
                  <div className="gmb-cause-card-cont">
                    <LuKeyRound size={32} />

                    <h3 className="gmb-cause-card-heading"> Phone Issues </h3>
                    <p className="gmb-cause-card-descrp">
                      Phone number disapprovals or missing critical attributes
                    </p>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="gmb-cause-card-cont">
                    <MdPhoneAndroid size={32} />

                    <h3 className="gmb-cause-card-heading"> Phone Issues </h3>
                    <p className="gmb-cause-card-descrp">
                      Phone number disapprovals or missing critical attributes
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="gmb-cause-card-row3 justify-content-between  ">
                <Col lg={4}>
                  <div className="gmb-cause-card-cont">
                    <GrCopy size={32} />

                    <h3 className="gmb-cause-card-heading"> Phone Issues </h3>
                    <p className="gmb-cause-card-descrp">
                      Phone number disapprovals or missing critical attributes
                    </p>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="gmb-cause-card-cont">
                    <FaRegAddressBook size={32} />

                    <h3 className="gmb-cause-card-heading"> Phone Issues </h3>
                    <p className="gmb-cause-card-descrp">
                      Phone number disapprovals or missing critical attributes
                    </p>
                  </div>
                </Col>
              </Row>
            </Row>
          </div>
        </div>
      </div>

      {/*gmb-section-3*/}
      <ProcessSwiper />

      {/*gmb-section-4*/}
      <WhyWork />

      {/*gmb-section-5*/}
      <div className="gmb-section-5">
        <Row>
          <Col lg={5}>
            <h2 className="gmb-sec5-heading">
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
            <div className="gmb-sec5-descrp">
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

      {/*gmb-section-6*/}
      <div className="gmb-section-6">
        <div className="gmb-sec6-head">
          <h2 className="gmb-sec6-heading">
            Our Successful GMB Appeal & Reinstatement
          </h2>
        </div>

        <Marquee>
          {workIMages.map((img, index) => (
            <div className="gmb-sec6-work-img" key={index}>
              <Image
                src={img.src}
                fill
                alt={img.alt}
                sizes="(max-width: 575.98px) 100vw, (max-width: 991.98px) 280px, 380px"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/*gmb-section-7*/}
      <div className="gmb-section-7 margin-box">
        <div className="gmb-sec7-head">
          <h2 className="gmb-sec7-heading">
            Ready to Get Your Business Back Online?
          </h2>
          <p className="gmb-sec7-descrp">
            Talk to a Google my Business expert and get your profile reinstated.
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

        <div className="gmb-sec7-img-cont">
          <Image src="/images/gmb-4.png" fill alt="gmb"></Image>
        </div>
      </div>

      {/*gmb-section-8*/}
      <Faqs items={GmbFaqs} />

      {/*gmb-section-9*/}
      <ContactForm />

      {/*gmb-section-8*/}
      <Footer />
    </>
  );
}

export default Page;

