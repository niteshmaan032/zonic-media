import "@/app/style/launchpad.css";
import SharedLottiePlayer from "@/app/components/SharedLottiePlayer";
import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { FaArrowTrendUp, FaCheck, FaCircleExclamation } from "react-icons/fa6";
import { PiBagSimple } from "react-icons/pi";
import { IoRocket } from "react-icons/io5";

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
        <Row>
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
    </>
  );
}

export default page;
