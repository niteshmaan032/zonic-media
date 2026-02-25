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
          <Row className="justify-content-between align-items-center ">
            <Col xs="auto">
              <h1 className="about-sec1-heading">About Us</h1>
            </Col>

            <Col lg={6}>
              <p className="about-sec1-descrp">
                A team with <span> passion , knowledge </span> & a lot of
                <span> fun </span> all over the world.
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
              Not another brand consultancy. A new model for
              <span> growth.</span>
            </h2>
            <p className="about-sec2-descrp">
              Zonic Media is a results-driven digital agency focused on helping
              brands grow in an increasingly competitive digital landscape. We
              believe a strong digital presence is built on clarity, strategy,
              and user-first thinking—not guesswork. Our approach combines
              creative vision with data-driven insights to craft meaningful
              digital experiences that strengthen brand identity, build trust,
              and create lasting value.
            </p>

            <p className="about-sec2-descrp">
              Every project begins with understanding the brand’s purpose,
              audience, and goals, ensuring our solutions are aligned with real
              business outcomes. We believe great digital work is intentional,
              measurable, and designed to perform. Every decision is guided by
              strategy, creativity, and performance-focused thinking.
            </p>

            <p className="about-sec2-descrp">
              From planning to execution and continuous optimization, we stay
              focused on long-term growth, meaningful engagement, and
              sustainable success for every brand we work with.
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
              We visually position your brand powerfully in a market that’s
              becoming<span> increasingly digital.</span>
            </h2>
            <p className="about-sec3-descrp">
              Zonic Media is a dynamic digital agency specializing in website
              development, social media, graphic design, and online marketing.
              With a results-driven, creative approach, we partner with brands
              to build a strong, impactful online presence.
            </p>
          </Col>
        </Row>

        <Row className="info-card-row">
          <Col xs={12} lg={4}>
            <div className="info-card">
              <h3> Discover</h3>
              <h4> (strategy & research) </h4>
              <p>
                We start by deeply understanding your brand, goals, audience,
                and competitors to define a clear, data-driven strategic
                direction for success.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="info-card">
              <h3> Design</h3>
              <h4> (branding, web & content)</h4>
              <p>
                We transform ideas into impactful branding, high-performing
                websites, and engaging content crafted with purpose, precision,
                and user experience in mind.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="info-card">
              <h3> Deliver</h3>
              <h4> (launch, growth & optimization) </h4>
              <p>
                We launch, optimize, and scale your digital presence through
                performance-driven strategies to deliver measurable growth and
                long-term business results.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/*about-section4*/}
      <div className="about-section-4">
        <h2 className="about-sec4-heading">
          Bold UX design, billion-dollar proof. We measure impact,{" "}
          <span> not just ship pixels. </span>
        </h2>

        {/*features-grid*/}
        <Row className="g-3">
          <Col lg={4}>
            <div className="feature-wrapper">
              <p className="feature-numb"> 01 </p>

              <div>
                <h3 className="feature-head">92%</h3>
                <p className="feature-descrp">
                  client satisfactionin post-project reviews.
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
                  years of real-world digital experience
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
                  online customer reviews across platforms
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
                  monthly visits on client platforms worldwide
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
                  delivering diverse digital projects for clients worldwide.
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
