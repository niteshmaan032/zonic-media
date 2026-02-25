import Link from "next/link";
import "@/app/style/webDesign.css";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import ProcessSwiper from "@/app/components/ProcessSwiper";
import Faqs from "@/app/components/Faqs";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
function page() {
  return (
    <>
      {/*web-design-section-1*/}
      <div className="web-design-section-1">
        <div className="web-design-sec1-content">
          <Row className="justify-content-between">
            <Col lg={6}>
              <h1 className="web-design-sec1-heading">
                Web Design services that drive results
              </h1>
            </Col>

            <Col lg={5}>
              <p className="web-design-sec1-descrp">
                Get a
                <span>
                  high-performing website designed by experienced
                  professionals.{" "}
                </span>
                We create modern, user-friendly websites that convert visitors
                into customers—while you focus on growing your business.
              </p>
              <Link href="#" className="buttons">
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
            </Col>
          </Row>
        </div>

        <div className="web-design-sec1-video-cont">
          <video autoPlay muted loop playsInline>
            <source src="/video/web-design.mp4"></source>
          </video>
        </div>
      </div>

      {/*web-design-section-2*/}
      <div className="web-design-section-2">
        <h2 className="web-design-sec2-heading">
          What’s included in our <span> website design services</span>
        </h2>

        <div className="web-design-services-wrapper">
          <div className="web-design-services-box web-box-1">
            <div className="web-service-box-content">
              <h3 className="web-serv-heading">custom web development</h3>

              <p className="web-serv-descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <Link className="serv-box-link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="web-service-box-img-cont">
              <Image src="/images/web-1.png" fill alt="website design"></Image>
            </div>
          </div>

          <div className="web-design-services-box web-box-2">
            <div className="web-service-box-content">
              <h3 className="web-serv-heading">Custom UI/UX Design</h3>

              <p className="web-serv-descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <Link className="serv-box-link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="web-service-box-img-cont">
              <Image
                src="/images/web-design.webp"
                fill
                alt="website design"
              ></Image>
            </div>
          </div>

          <div className="web-design-services-box web-box-3">
            <div className="web-service-box-content">
              <h3 className="web-serv-heading">
                Responsive & Mobile Optimize Design
              </h3>

              <p className="web-serv-descrp">
                Get a website that looks great and drives real results. With
                responsive, user-friendly design, your site will engage
                visitors, boost conversions, enhance your brand’s online
                presence, build credibility, improve user experience, and
                support long-term business growth across all digital
                touchpoints.
              </p>

              <Link className="serv-box-link" href="#!">
                Get your website
              </Link>
            </div>

            <div className="web-service-box-img-cont">
              <Image src="/images/web-3.png" fill alt="website design"></Image>
            </div>
          </div>
        </div>
      </div>

      {/*web-design-section-3*/}
      <ProcessSwiper />

      {/*web-design-section-4*/}
      <div className="web-design-section-4 marign-box">
        <h2 className="web-design-sec4-heading">
          Recognized for
          <span>
            Delivering
            <Image
              src="/images/icon.png"
              width={95}
              height={90}
              alt="zonic icon"
            />
            {""} Results
          </span>
        </h2>

        {/* Updated Row and Cols */}
        <Row className="web-design-sec4-row">
          <Col xs={12} lg={3}>
            <div className="web-design-sec4-card">
              <p> 01 </p>
              <h3>140+ International design awards</h3>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="web-design-sec4-card">
              <p> 02 </p>
              <h3>300%+ Average conversion uplift</h3>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="web-design-sec4-card">
              <p> 03 </p>
              <h3>$10B+ raisedUX-led launches </h3>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="web-design-sec4-card border-0">
              <p> 04 </p>
              <h3>100M+ Global users reached</h3>
            </div>
          </Col>
        </Row>
      </div>

      {/*web-design-section-5*/}
      <div className="web-design-section-5">
        <Faqs />
      </div>

      {/*web-design-section-6*/}
      <ContactForm />

      {/*web-design-section-7*/}
      <Footer />
    </>
  );
}

export default page;
