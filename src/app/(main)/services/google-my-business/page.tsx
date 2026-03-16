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
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Google Business Profile Reinstatement Service | Fix Suspended GBP",
  description:
    "Fix your suspended Google Business Profile with expert reinstatement support. We identify violations, submit appeals, and restore your GBP quickly and safely.",
};

function Page() {
  const workIMages = [
    { src: "/images/work-1.png", alt: "recovered gmb account" },
    { src: "/images/work-2.png", alt: "recovered gmb account" },
    { src: "/images/work-3.png", alt: "recovered gmb account" },
    { src: "/images/work-4.png", alt: "recovered gmb account" },
  ];

  const gmbFaqs = [
    {
      question: "Why was my Google Business Profile suspended?",
      answer:
        "A Google Business Profile can be suspended if it violates Google's guidelines. Common reasons include incorrect business information, using a virtual address, keyword stuffing in the business name, duplicate listings, or suspicious account activity.",
    },
    {
      question:
        "How long does it take to reinstate a suspended Google Business Profile?",
      answer:
        "The reinstatement process usually takes between 3 to 14 business days, depending on the complexity of the issue and how quickly Google reviews the appeal request.",
    },
    {
      question:
        "Can I recover a permanently suspended Google Business Profile?",
      answer:
        "Yes, in many cases a suspended Google Business Profile can be reinstated if the policy violations are corrected and a proper reinstatement appeal is submitted with supporting documentation.",
    },
    {
      question:
        "How can I prevent my Google Business Profile from being suspended again?",
      answer:
        "To avoid future suspensions, ensure your business information is accurate, follow Google's guidelines, avoid duplicate listings, maintain a legitimate business address, and keep your profile updated regularly.",
    },
    {
      question:
        "Do you provide help for agencies managing multiple suspended profiles?",
      answer:
        "Yes. Zonic Media works with marketing agencies and multi-location businesses to recover multiple suspended Google Business Profiles while ensuring compliance with Google's policies.",
    },
  ];

  const GmbProcessData = {
    heading:
      "Our Proven 5-Step Google Business Profile Suspension Recovery Process",
    items: [
      {
        number: "01",
        title: "In-Depth Profile Audit",
        description:
          "We perform a detailed audit of your Google Business Profile, guidelines compliance, listing history, and potential violations to identify the exact reason behind the suspension.",
        bullets: [
          "NAP accuracy check",
          "Listing history review",
          "Suspension trigger analysis",
        ],
      },
      {
        number: "02",
        title: "Issue Identification & Compliance Fix",
        description:
          "Our experts identify policy violations and correct inaccurate business information, categories, address details, or other elements that may have triggered the suspension.",
        bullets: [
          "Business info corrections",
          "Category compliance fixes",
          "Policy violation removal",
        ],
      },
      {
        number: "03",
        title: "Profile Optimization & Documentation",
        description:
          "We optimize your Google Business Profile and prepare the required supporting documentation to ensure your listing aligns with Google’s policies and verification requirements.",
        bullets: [
          "Profile detail optimization",
          "Verification documents preparation",
          "Compliance standard alignment",
        ],
      },
      {
        number: "04",
        title: "Reinstatement Appeal Submission",
        description:
          "Our team prepares and submits a professional reinstatement request to Google, ensuring the appeal clearly explains the issue resolution and meets Google’s reinstatement guidelines.",
        bullets: [
          "Appeal documentation preparation",
          "Reinstatement request submission",
          "Supporting evidence submission",
        ],
      },
      {
        number: "05",
        title: "Monitoring & Listing Recovery",
        description:
          "We track the reinstatement request, communicate with Google if needed, and ensure your Google Business Profile is successfully restored and fully operational.",
        bullets: [
          "Appeal status monitoring",
          "Google response handling",
          "Listing recovery confirmation",
        ],
      },
    ],
  };

  const WhygmbData = {
    heading: "Why Work With Zonic Media for GMB Recovery:",
    image: {
      src: "/images/header-gmb.webp",
      alt: "google my business recovery",
    },
    defaultActiveKey: "0",
    items: [
      {
        title: "Proven Google Business Profile Reinstatement Expertise",
        content:
          "Our specialists understand Google's latest policies and suspension triggers, helping businesses recover suspended listings through a structured and compliant reinstatement process.",
      },
      {
        title: "Root Cause Analysis Before Appeal",
        content:
          "We conduct a detailed audit of your Google Business Profile to identify the exact reason for the suspension and resolve all violations before submitting the reinstatement request.",
      },
      {
        title: "Safe & Policy-Compliant Recovery Process",
        content:
          "Our reinstatement strategy follows Google's official guidelines to ensure your profile is restored safely without risking additional penalties or repeated suspensions.",
      },
      {
        title: "Long-Term Local SEO Stability",
        content:
          "Beyond reinstatement, we help optimize your Google Business Profile to improve local rankings, maintain compliance, and generate consistent calls, leads, and customer engagement.",
      },
    ],
  };
  return (
    <>
      {/*gmb-section-1*/}
      <div className="gmb-section-1">
        <Row className="justify-content-between ">
          <Col lg={6}>
            <div className="gmb-sec1-content">
              <p className="gmb-sec1-title">
                <PiShieldCheckBold size={16} />
                95% Reinstatement Success Rate
              </p>
              <h1 className="gmb-sec1-heading">
                Google Business Profile Suspension & Reinstatement Experts
              </h1>
              <p className="gmb-sec1-descrp">
                Get your suspended Google Business Profile reinstated with the
                help of experienced specialists. We manage the entire appeal and
                reinstatement process while you focus on running your business.
                <span>Trusted by agencies and business owners worldwide.</span>
              </p>
              <Link href="/contact-us" className="buttons" target="blank">
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

          <Col lg={6} className="d-flex justify-content-center">
            <div className="gmb-sec1-img-cont">
              <Image
                src="/images/gmb-page-1.png"
                fill
                alt="google my business"
              />
            </div>
          </Col>
        </Row>
      </div>

      {/*gmb-section-2*/}
      <div className="gmb-section-2 ">
        <div className="gmb-sec2-head-cont">
          <h2 className="gmb-sec2-heading">
            What Causes Google Business Profile Suspensions?
          </h2>
          <p className="gmb-sec2-descrp">
            Google Business Profile listings can be suspended when they violate
            Google&apos;s guidelines or contain inconsistent business
            information. Based on Google&apos;s policies and common industry
            cases, some of the most frequent causes of suspension include:
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
                    <h3 className="gmb-cause-card-heading">
                      {" "}
                      Category & Service Misrepresentation
                    </h3>
                    <p className="gmb-cause-card-descrp">
                      Selecting inaccurate business categories or adding
                      services that do not match the actual business operations.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="gmb-cause-card-row2 justify-content-between ">
                <Col lg={4}>
                  <div className="gmb-cause-card-cont">
                    <LuKeyRound size={32} />

                    <h3 className="gmb-cause-card-heading">
                      {" "}
                      Website & Verification Problems
                    </h3>
                    <p className="gmb-cause-card-descrp">
                      Broken website links, domain issues, or suspicious
                      verification activity that may trigger a listing
                      suspension.
                    </p>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="gmb-cause-card-cont">
                    <MdPhoneAndroid size={32} />

                    <h3 className="gmb-cause-card-heading">
                      {" "}
                      Business Information Issues
                    </h3>
                    <p className="gmb-cause-card-descrp">
                      Incorrect business name, address, or phone number (NAP)
                      details that do not match official records or website
                      information.
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="gmb-cause-card-row3 justify-content-between  ">
                <Col lg={4}>
                  <div className="gmb-cause-card-cont">
                    <GrCopy size={32} />

                    <h3 className="gmb-cause-card-heading">
                      {" "}
                      Multiple or Duplicate Listings
                    </h3>
                    <p className="gmb-cause-card-descrp">
                      Creating duplicate Google Business Profiles for the same
                      business location or service area.
                    </p>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="gmb-cause-card-cont">
                    <FaRegAddressBook size={32} />

                    <h3 className="gmb-cause-card-heading">
                      {" "}
                      Address & Location Violations{" "}
                    </h3>
                    <p className="gmb-cause-card-descrp">
                      Using virtual offices, shared workspaces, or locations
                      where the business is not physically operating.
                    </p>
                  </div>
                </Col>
              </Row>
            </Row>
          </div>
        </div>
      </div>

      {/*gmb-section-3*/}
      <ProcessSwiper processData={GmbProcessData} />

      {/*gmb-section-4*/}
      <WhyWork items={WhygmbData} />

      {/*gmb-section-5*/}
      <div className="gmb-section-5">
        <Row>
          <Col lg={5}>
            <h2 className="gmb-sec5-heading">
              Google Business Profile Suspension{" "}
              <span> Recovery for Local Businesses Across Industries </span>
            </h2>

            <Link href="/contact-us" className="buttons" target="blank">
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
            <div className="gmb-sec5-descrp">
              <p>
                Zonic Media helps businesses across multiple industries recover
                suspended Google Business Profiles quickly and safely. Whether
                you operate in home services, healthcare, real estate,
                automotive, or professional services, our specialists understand
                the unique challenges businesses face when their Google listing
                is suspended.
              </p>
              <p>
                We have successfully helped companies such as plumbers,
                electricians, HVAC contractors, roofers, locksmiths, dentists,
                medical clinics, realtors, auto repair shops, movers,
                landscapers, and cleaning companies restore their Google
                Business Profiles and regain their local search visibility.
              </p>
              <p>
                A suspended Google Business Profile can significantly impact
                your online presence. When your listing disappears from Google
                Maps and local search results, it can lead to fewer customer
                calls, reduced website traffic, and lost revenue opportunities.
                That’s why fast and accurate reinstatement is critical for
                protecting your business reputation and maintaining consistent
                lead generation.
              </p>

              <p>
                At Zonic Media, our experts follow Google’s latest policies and
                reinstatement guidelines to recover suspended listings without
                risking further penalties. We help single-location businesses,
                service-area businesses, and multi-location companies restore
                their profiles and maintain long-term compliance to ensure
                continued success in local search results.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/*gmb-section-6*/}
      <div className="gmb-section-6">
        <div className="gmb-sec6-head">
          <h2 className="gmb-sec6-heading">
            Successful Google Business Profile Reinstatement Cases
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
          <Link href="/contact-us" className="buttons">
            Connect with GMB expert
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
      <Faqs items={gmbFaqs} />

      {/*gmb-section-9*/}
      <ContactForm />

      {/*gmb-section-8*/}
      <Footer />
    </>
  );
}

export default Page;
