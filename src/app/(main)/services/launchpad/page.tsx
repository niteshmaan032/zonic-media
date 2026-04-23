import "@/app/style/launchpad.css";
import GmbFaqs from "@/app/components/GmbFaqs";
import SharedLottiePlayer from "@/app/components/SharedLottiePlayer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Col, Row } from "react-bootstrap";
import { FaArrowTrendUp, FaCheck, FaCircleExclamation } from "react-icons/fa6";
import { PiBagSimple } from "react-icons/pi";
import { IoRocket } from "react-icons/io5";
import ClutchWidget from "@/app/components/ClutchWidget";
import Footer from "@/app/components/Footer";
import LeadContactForm from "@/app/components/LeadContactForm";

const LaunchpadServiceFaqItems = [
  {
    question: "What is Zonic LaunchPad?",
    answer:
      "Zonic LaunchPad is a done-for-you business launch service that helps new businesses get essential branding, website, Google presence, and marketing foundations ready quickly.",
  },
  {
    question: "Who is Zonic LaunchPad best for?",
    answer:
      "It is best for startups, local businesses, service providers, and entrepreneurs who need a professional online presence without managing multiple vendors or confusing setup steps.",
  },
  {
    question: "How long does it take to launch my business setup?",
    answer:
      "Most LaunchPad projects are completed within 7 to 14 days, depending on how quickly content, business details, and approvals are provided.",
  },
  {
    question: "What is included in a LaunchPad package?",
    answer:
      "LaunchPad can include branding, website setup, Google Business Profile support, basic local SEO foundations, social media setup, and launch-ready marketing assets.",
  },
  {
    question: "Do I need to have content ready before starting?",
    answer:
      "No. If you do not have content ready, the Zonic Media team can help structure your messaging, service details, and launch copy during the onboarding process.",
  },
  {
    question: "Can you help with Google Business Profile setup?",
    answer:
      "Yes. We can help set up or improve your Google Business Profile so customers can find your business more easily in Google Search and Maps.",
  },
  {
    question: "Is LaunchPad only for new businesses?",
    answer:
      "No. It also works for existing businesses that need a cleaner brand, better website, stronger online presence, or a faster relaunch.",
  },
  {
    question: "Can I customize the package based on my needs?",
    answer:
      "Yes. LaunchPad plans can be adjusted based on your business type, goals, service area, and what assets you already have.",
  },
  {
    question: "What happens after the launch is complete?",
    answer:
      "After launch, you can continue with ongoing SEO, marketing, website updates, Google profile optimization, or paid ads depending on your growth goals.",
  },
  {
    question: "How do I get started with Zonic LaunchPad?",
    answer:
      "You can start by contacting Zonic Media, sharing your business details, and choosing the LaunchPad plan that best matches your goals.",
  },
];

const LaunchpadHomeFormHead = {
  leadFormTitle: "Get Your Free Local SEO Audit",
  leadCallText: (
    <>
      One call can help you get more local rankings, calls, and booked jobs.
      <br />{" "}
      <a href="tel:+13027269736" className="lead-call-link">
        Call Now:(302) 726-9736
      </a>
    </>
  ),
};

function page() {
  return (
    <>
      <div className="launchpad-sec-1">
        <Col lg={8}>
          <div className="launchpad-sec-1-content-wrapper">
            <p className="launchpad-label">
              <span>
                <FaArrowTrendUp />
              </span>
              Zonic Media Your Growth Partner
            </p>

            <h1 className="launchpad-main-heading">
              Start{" "}
              <span>
                <Image
                  src="/images/launch-rocket.svg"
                  alt="success rocket"
                  width={60}
                  height={60}
                ></Image>
              </span>{" "}
              Your Business in 7 to 14 Days Without the Confusion
            </h1>
            <p className="launchpad-descrp">
              At <span> Zonic LaunchPad </span> we build everything you need
              from branding and website to Google presence and marketing so you
              can focus on growing your business
            </p>

            <div className="launchpad-sec1-ctas">
              <Link href="/contact-us" className="buttons">
                launch your website
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
                launch your website
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
          </div>
        </Col>
      </div>

      <div className="launchpad-sec-2">
        <Row className="g-4">
          <Col lg={3}>
            <div className="launchpad-sec-1-card-wrapper launch-sec-1-card-1">
              <SharedLottiePlayer
                className="launchpad-rocket-lottie"
                src="/lottie/rocket-launchpad.lottie"
              />
            </div>
          </Col>

          <Col lg={5}>
            <div className="launch-sec-1-card-2 launchpad-sec-1-card-wrapper">
              <iframe
                src="https://www.youtube.com/embed/8XloRxwawiw?si=SGxO16MpdXp7-KN5"
                title="YouTube video player"
                loading="eager"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-sec-1-card-wrapper launch-sec-1-card-3">
              <h2>Start Your Business in 7 to 14 Days </h2>
              <Link href="/contact-us" className="buttons">
                launch your website
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
        </Row>
      </div>

      <div className="launchpad-sec-3">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                Zonic Media Your Growth Partner
              </p>

              <h2 className="launchpad-sec-heading">
                Start Your Business in 7 to 14 Days Without the Confusion
              </h2>
            </div>
          </Col>
        </div>

        <Row className="g-4">
          <Col lg={6}>
            <div className="launchpad-box-card">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    <span>
                      <PiBagSimple />
                    </span>{" "}
                    Starting a business feels exciting at first{" "}
                  </h3>
                </div>

                <p className="launchpad-box-card-sub-head">Then reality hits</p>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCircleExclamation />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>
                  <li>
                    <span>
                      <FaCircleExclamation />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>
                  <li>
                    <span>
                      <FaCircleExclamation />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>
                  <li>
                    <span>
                      <FaCircleExclamation />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>
                  <li>
                    <span>
                      <FaCircleExclamation />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="launchpad-box-card launchpad-box-card-2">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    <span>
                      <IoRocket />
                    </span>{" "}
                    Starting a business feels exciting at first{" "}
                  </h3>
                </div>

                <p className="launchpad-box-card-sub-head">Then reality hits</p>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>
                </ul>

                <div className="launchpad-box-card-cta">
                  <Link href="/contact-us" className="buttons">
                    launch your website
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
              </div>
            </div>
          </Col>

          <Col lg={12}>
            <div className="launchpad-box-card-content-wrapper">
              <Row>
                <Col lg={6}>
                  <div className="launchpad-box-card launchpad-box-card-3">
                    <div className="launchpad-box-card-heading-container">
                      <h3 className="launchpad-box-card-heading">
                        <span>
                          <FaArrowTrendUp />
                        </span>{" "}
                        Starting a business feels exciting at first{" "}
                      </h3>
                    </div>

                    <p className="launchpad-box-card-sub-head">
                      Then reality hits
                    </p>

                    <ul className="launchpad-box-card-list">
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        You need a logo, a website, a Google listing, social
                        media profiles, branding, and a way to get customers
                      </li>

                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        You need a logo, a website, a Google listing, social
                        media profiles, branding, and a way to get customers
                      </li>

                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        You need a logo, a website, a Google listing, social
                        media profiles, branding, and a way to get customers
                      </li>
                      <li>
                        <span>
                          <FaCheck />
                        </span>
                        You need a logo, a website, a Google listing, social
                        media profiles, branding, and a way to get customers
                      </li>
                    </ul>
                    <div className="launchpad-box-card-cta">
                      <Link href="/contact-us" className="buttons">
                        launch your website
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
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="launchpad-box-card-3-img-cont">
                    <Image
                      src="/images/launchpad-2.jpg"
                      fill
                      alt="launchpad business lauch"
                    ></Image>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className="launchpad-sec-4">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                Zonic Media Your Growth Partner
              </p>

              <h2 className="launchpad-sec-heading">
                Start Your Business in 7 to 14 Days Without the Confusion
              </h2>
            </div>
          </Col>
        </div>

        <Row>
          <Col lg={4}>
            <div className="launchpad-sec-4-card-wrapper">
              <p className="launchpad-sec-4-card-number"> 1 </p>

              <h3 className="launchpad-sec-4-card-heading">
                Design your waitlist
              </h3>
              <p className="launchpad-sec-4-card-descrp">
                Customize your waitlist page or form with our intuitive
                drag-and-drop editor — no coding required.
              </p>

              <p className="launchpad-sec-4-card-descrp-2">
                Features included:
              </p>

              <ul className="launchpad-sec-4-list">
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Landing pages
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Landing pages
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Landing pages
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-sec-4-card-wrapper">
              <p className="launchpad-sec-4-card-number"> 1 </p>

              <h3 className="launchpad-sec-4-card-heading">
                Design your waitlist
              </h3>
              <p className="launchpad-sec-4-card-descrp">
                Customize your waitlist page or form with our intuitive
                drag-and-drop editor — no coding required.
              </p>

              <p className="launchpad-sec-4-card-descrp-2">
                Features included:
              </p>

              <ul className="launchpad-sec-4-list">
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Landing pages
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Landing pages
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Landing pages
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-sec-4-card-wrapper launchpad-sec-4-card-wrapper-3">
              <p className="launchpad-sec-4-card-number"> 1 </p>

              <h3 className="launchpad-sec-4-card-heading">
                Design your waitlist
              </h3>
              <p className="launchpad-sec-4-card-descrp">
                Customize your waitlist page or form with our intuitive
                drag-and-drop editor — no coding required.
              </p>

              <p className="launchpad-sec-4-card-descrp-2">
                Features included:
              </p>

              <ul className="launchpad-sec-4-list">
                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Landing pages
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Landing pages
                </li>

                <li>
                  <span>
                    <FaCheck />
                  </span>
                  Landing pages
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <div className="launchpad-sec-5">
        <Col lg={7}>
          <div className="launchpad-sec-5-content-wrapper">
            <h2 className="launchpad-banner-heading">
              Start Your Business in 7 to 14 Days Without the Confusion
            </h2>
            <p className="launchpad-banner-descrp">
              At Zonic LaunchPad We build everything you need from branding and
              website to Google presence and marketing so you can focus on
              growing your business
            </p>

            <div className="launchpad-banner-ctas">
              <Link href="/contact-us" className="buttons">
                launch your website
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

              <ClutchWidget />
            </div>
          </div>
        </Col>
      </div>

      <div className="launchpad-sec-8">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                Zonic Media Your Growth Partner
              </p>

              <h2 className="launchpad-sec-heading">
                Start Your Business in 7 to 14 Days Without the Confusion
              </h2>
            </div>
          </Col>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="launchpad-box-card">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    What do you need to launch your business online?{" "}
                  </h3>
                </div>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    To launch successfully, your business needs more than just a
                    website
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    You need a strong foundation including branding, a
                    professional website, Google visibility, and a system to
                    generate leads
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Without these, most businesses struggle to get consistent
                    customers
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-box-card">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    How can you launch your business online the right way?
                  </h3>
                </div>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Launching the right way means building everything with
                    growth in mind from day one
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    This includes setting up your website, optimizing your
                    Google presence, targeting the right keywords, and creating
                    a clear path for customers to contact you
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-box-card">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    Why is local SEO important for home service businesses?
                  </h3>
                </div>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    You need a logo, a website, a Google listing, social media
                    profiles, branding, and a way to get customers
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Most customers search online before choosing a service
                    provider
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Local SEO helps your business appear in those searches,
                    especially in Google Maps and local results where customers
                    are ready to hire
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="launchpad-box-card ">
              <div className="launchpad-box-card-content-wrapper launch-box-card-banner">
                <h2 className="launch-box-card-banner-heading">
                  From Setup to Growth, Everything Matters
                </h2>

                <p className="launch-box-card-banner-descrp">
                  A successful business is not just built it is strategically
                  positioned to attract customers, generate leads, and grow
                  consistently
                </p>

                <Link href="/contact-us" className="buttons">
                  launch your website
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
            </div>
          </Col>

          <Col lg={4}>
            <div className="launchpad-box-card">
              <div className="launchpad-box-card-content-wrapper">
                <div className="launchpad-box-card-heading-container">
                  <h3 className="launchpad-box-card-heading">
                    Why choose Zonic Media to launch and grow your business?
                  </h3>
                </div>

                <ul className="launchpad-box-card-list">
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    We do not just build websites or run SEO campaigns
                  </li>

                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    We create complete systems designed to help your business
                    get visible, generate leads, and convert those leads into
                    real customers
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="launchpad-sec-6">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                Zonic Media Your Growth Partner
              </p>

              <h2 className="launchpad-sec-heading">
                Start Your Business in 7 to 14 Days Without the Confusion
              </h2>
            </div>
          </Col>
        </div>

        <div className="launchpad-pricing-wrapper">
          <Row className="g-4 justify-content-center">
            <Col xs={12} md={12} lg={4}>
              <div className="launchpad-pricing-card">
                <div className="launchpad-price-badge">STARTER PLAN</div>

                <h1 className="launchpad-price">
                  $350 <span>/ month</span>
                </h1>

                <p className="launchpad-price-subtitle">
                  Best for small businesses targeting one service area.
                </p>

                <h5 className="launchpad-price-section-title">
                  What&apos;s Included
                </h5>

                <ul className="launchpad-price-features">
                  <li>Google Business Profile optimization</li>
                  <li>Local keyword targeting</li>
                  <li>Basic on-page SEO updates</li>
                  <li>Citation cleanup & consistency</li>
                  <li>Monthly reporting</li>
                  <li>Email support</li>
                </ul>

                <Link href="/contact-us" className="launchpad-price-cta-btn">
                  Get This Plan
                </Link>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <div className="launchpad-pricing-card">
                <div className="launchpad-price-badge">GROWTH PLAN</div>

                <h1 className="launchpad-price">
                  $650 <span>/ month</span>
                </h1>

                <p className="launchpad-price-subtitle">
                  Best for growing companies ready for more calls and booked
                  jobs.
                </p>

                <h5 className="launchpad-price-section-title">
                  What&apos;s Included
                </h5>

                <ul className="launchpad-price-features">
                  <li>Everything in Starter Plan</li>
                  <li>Multi-service keyword targeting</li>
                  <li>Advanced local SEO strategy</li>
                  <li>Review growth support</li>
                  <li>Competitor tracking</li>
                  <li>Priority support</li>
                </ul>

                <Link href="/contact-us" className="launchpad-price-cta-btn">
                  Get This Plan
                </Link>
              </div>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <div className="launchpad-pricing-card launchpad-pricing-card--dominate">
                <div className="launchpad-price-badge">DOMINATE PLAN</div>

                <h1 className="launchpad-price">
                  $950 <span>/ month</span>
                </h1>

                <p className="launchpad-price-subtitle">
                  Best for competitive markets and multi-location growth.
                </p>

                <h5 className="launchpad-price-section-title">
                  What&apos;s Included
                </h5>

                <ul className="launchpad-price-features">
                  <li>Everything in Growth Plan</li>
                  <li>Multi-location SEO campaigns</li>
                  <li>High-authority backlink outreach</li>
                  <li>Conversion optimization</li>
                  <li>Aggressive ranking growth strategy</li>
                  <li>Dedicated account manager</li>
                </ul>

                <Link href="/contact-us" className="launchpad-price-cta-btn">
                  Get This Plan
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="launchpad-sec-7">
        <div className="launchpad-center-head">
          <Col lg={6}>
            <div className="launchpad-center-head-content-wrapper">
              <p className="launchpad-label bg-label">
                <span>
                  <FaArrowTrendUp />
                </span>
                LaunchPad FAQs
              </p>

              <h2 className="launchpad-sec-heading">
                Zonic LaunchPad Questions Answered
              </h2>

              <p className="launchpad-sec-descrp">
                Have questions about how Zonic LaunchPad works or what you need
                before starting? Here are clear answers about setup, timelines,
                deliverables, and next steps so you can launch with confidence.
              </p>
            </div>
          </Col>
        </div>

        <div className="launchpad-faq-wrapper">
          <GmbFaqs items={LaunchpadServiceFaqItems} />
        </div>

        <Script
          id="launchpad-service-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: LaunchpadServiceFaqItems.map((faq) => ({
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

      <div className="launchpad-sec-9">
        <div className="launchpad-home-content">
          <p className="launchpad-home-label">95% Growth Success Rate</p>
          <h1 className="launchpad-home-main-heading">
            Local SEO Built to Grow Home Service Businesses
          </h1>
          <p className="launchpad-home-descrp">
            Homeowners search online every day for reliable local professionals
            they can trust. If your business is not appearing in those searches,
            you are missing calls, estimates, and booked jobs that are going
            directly to competitors in your area.
          </p>

          <p className="launchpad-home-descrp">
            Zonic Media helps home service companies generate more leads through
            strategic local SEO. We improve your rankings on Google Search and
            Maps, increase visibility in your service areas, and turn
            high-intent searches into real customers for roofing, HVAC,
            plumbing, electrical, pest control, and other service businesses.
          </p>

          <div className="launchpad-home-cta-clutch">
            <Link href="/contact-us" className="buttons">
              Call Now: (302) 726-9736
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

            <ClutchWidget />
          </div>
        </div>

        <div className="launchpad-home-contact-form">
          <LeadContactForm
            leadFormTitle={LaunchpadHomeFormHead.leadFormTitle}
            leadCallText={LaunchpadHomeFormHead.leadCallText}
            submitButtonText="Contact Us"
          />
        </div>
      </div>

      <div className="launchpad-sec-10">
        <div className="launchpad-sec-5">
          <Col lg={7}>
            <div className="launchpad-sec-5-content-wrapper">
              <h2 className="launchpad-banner-heading">
                Start Your Business in 7 to 14 Days Without the Confusion
              </h2>
              <p className="launchpad-banner-descrp">
                At Zonic LaunchPad We build everything you need from branding
                and website to Google presence and marketing so you can focus on
                growing your business
              </p>

              <div className="launchpad-banner-ctas">
                <Link href="/contact-us" className="buttons">
                  launch your website
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
                  launch your website
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
            </div>
          </Col>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
