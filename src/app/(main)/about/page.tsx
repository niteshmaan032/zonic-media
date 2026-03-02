import { Col, Row } from "react-bootstrap";
import "@/app/style/about.css";
import Image from "next/image";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import Testimonials from "@/app/components/Testimonials";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import Faqs from "@/app/components/Faqs";
function page() {
  return (
    <>
      {/*about-section-1*/}
      <div className="about-sec1">
        <div className="about-sec1-content">
          <Row className="justify-content-between align-items-start ">
            <Col xs="auto">
              <h1 className="about-sec1-heading">About Us</h1>
            </Col>

            <Col lg={6}>
              <p className="about-sec1-descrp">
                A global team driven by{" "}
                <span>
                  {" "}
                  passion, expertise, and creativity — building digital{" "}
                </span>{" "}
                success worldwide.
              </p>
            </Col>
          </Row>
        </div>

        <div className="about-sec1-img">
          <Image
            src="/images/about-img-1.jpg"
            fill
            alt="agency employee working"
          />
        </div>
      </div>

      {/*about-section-2*/}
      <div className="about-section-2 margin-box">
        <Row className="align-items-start">
          <Col
            xs={12}
            lg={5}
            className="d-flex align-items-lg-center flex-column flex-lg-row gap-lg-3"
          >
            <FaArrowRight className="d-none d-lg-block" size={36} />
            <FaArrowDown className="d-block d-lg-none mb-4" size={36} />
            <p className="section-title">Who we are </p>
          </Col>

          <Col xs={12} lg={7}>
            <h2 className="about-sec2-heading">
              Not just another digital agency. A{" "}
              <span> smarter model for sustainable growth.</span>
            </h2>
            <p className="about-sec2-descrp">
              Zonic Media is a performance-focused digital agency helping
              businesses grow in an increasingly competitive online world. We
              believe a powerful digital presence is built through strategy,
              clarity, and user-centered experiences — never guesswork. Our
              approach blends creative innovation with data-backed insights to
              create meaningful digital solutions that strengthen brand
              identity, build credibility, and deliver long-term business value
              across global markets.
            </p>

            <p className="about-sec2-descrp">
              Every project starts with understanding a brand’s vision, audience
              behavior, and growth objectives, ensuring every strategy aligns
              with measurable business outcomes. We believe successful digital
              experiences are intentional, scalable, and designed to perform in
              real-world environments. Each decision we make is guided by
              strategy, creativity, and performance-driven execution.
            </p>

            <p className="about-sec2-descrp">
              From research and planning to launch and continuous optimization,
              our focus remains on sustainable growth, stronger engagement, and
              measurable success for every business we partner with worldwide.
            </p>
          </Col>
        </Row>
      </div>

      {/*about-section-3*/}
      <div className="about-section-3 margin-box">
        <Row className="align-items-start">
          <Col
            xs={12}
            lg={5}
            className="d-flex align-items-lg-center flex-column flex-lg-row gap-lg-3 "
          >
            <FaArrowRight className="d-none d-lg-block" size={36} />
            <FaArrowDown className="d-block d-lg-none mb-4" size={36} />
            <p className="section-title">Why Choose Us </p>
          </Col>

          <Col xs={12} lg={7}>
            <h2 className="about-sec3-heading">
              We position your brand to stand out in an{" "}
              <span> increasingly digital-first world. </span>
            </h2>
            <p className="about-sec3-descrp">
              Zonic Media is a global digital marketing agency specializing in
              website development, SEO, branding, and performance marketing
              solutions. With a strategy-first and results-driven approach, we
              collaborate with businesses across the USA, UAE, India, Australia,
              the United Kingdom, and Canada to build strong, scalable online
              presences that drive growth.
            </p>
          </Col>
        </Row>

        <Row className="info-card-row">
          <Col xs={12} lg={4}>
            <div className="info-card">
              <h3> Discover</h3>
              <h4> (strategy & research) </h4>
              <p>
                We begin by analyzing your business, audience, competitors, and
                market opportunities to build a clear, data-driven roadmap
                designed to achieve sustainable digital growth and measurable
                success.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="info-card">
              <h3> Design</h3>
              <h4> (branding, web & content)</h4>
              <p>
                Our team transforms ideas into impactful brand identities,
                conversion-focused websites, and engaging digital content
                crafted with precision, creativity, and user experience at the
                core.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="info-card">
              <h3> Deliver</h3>
              <h4> (launch, growth & optimization) </h4>
              <p>
                We launch, monitor, and continuously optimize your digital
                ecosystem using performance-driven strategies that increase
                visibility, generate leads, and support long-term business
                growth.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/*about-section4*/}
      <div className="about-section-4">
        <h2 className="about-sec4-heading">
          Bold digital experiences backed by real results.{" "}
          <span> We measure success through impact — not just design. </span>
        </h2>

        {/*features-grid*/}
        <Row className="g-3">
          <Col lg={4}>
            <div className="feature-wrapper">
              <p className="feature-numb"> 01 </p>

              <div>
                <h3 className="feature-head">92%</h3>
                <p className="feature-descrp">
                  client satisfaction rate based on post-project feedback and
                  long-term partnerships.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="feature-wrapper">
              <p className="feature-numb"> 02 </p>

              <div>
                <h3 className="feature-head">10+</h3>
                <p className="feature-descrp">
                  years of combined digital marketing and web development
                  expertise.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="feature-wrapper">
              <p className="feature-numb"> 03 </p>

              <div>
                <h3 className="feature-head">1K</h3>
                <p className="feature-descrp">
                  verified client interactions and reviews across multiple
                  digital platforms.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="feature-wrapper">
              <p className="feature-numb"> 04 </p>

              <div>
                <h3 className="feature-head">20K</h3>
                <p className="feature-descrp">
                  monthly visitors generated across client websites worldwide.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="feature-wrapper">
              <p className="feature-numb"> 05 </p>

              <div>
                <h3 className="feature-head">100+ global project</h3>
                <p className="feature-descrp">
                  successfully delivered for businesses across multiple
                  industries and countries.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/*about-section5*/}
      <div className="about-section-5">
        <h2 className="testimonial-heading">
          Hear what our clients say about
          <span> working with Zonic Media.</span>
        </h2>
        <Testimonials />
      </div>

      {/*about-section6*/}
      <div className="about-section-6">
        <Faqs />
      </div>

      {/*about-section7*/}
      <ContactForm />

      {/*about-section8*/}
      <Footer />
    </>
  );
}

export default page;
