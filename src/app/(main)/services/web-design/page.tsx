import Link from "next/link";
import "@/app/style/webDesign.css";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import ProcessSwiper from "@/app/components/ProcessSwiper";
import Faqs from "@/app/components/Faqs";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Web Design Services | Custom Websites That Drive Results",
  description:
    "Professional web design services focused on speed, SEO, and conversions. We build responsive websites that attract visitors and turn them into customers.",
};
function Page() {
  const WebContact = {
    heading: "High-Converting Business Websites",
    highlightedHeading: "",
    points: [
      "Modern, fast, and mobile-friendly website design",
      "SEO-ready structure to help you rank on Google",
      "Designed to convert visitors into leads and customers",
    ],
    cta: {
      eyebrow: "Schedule meeting :",
      label: "Book a Strategy Call",
      href: "/contact-us",
    },
  };

  const WebFaqs = [
    {
      question: "How long does it take to design and develop a website?",
      answer:
        "The timeline for website design and development typically ranges from 2 to 6 weeks, depending on the complexity of the project, number of pages, and required features.",
    },
    {
      question: "Will my website be mobile-friendly and responsive?",
      answer:
        "Yes. Every website we build is fully mobile-responsive, ensuring it works seamlessly across desktops, tablets, and smartphones while providing an optimal user experience.",
    },
    {
      question: "Do you build SEO-friendly websites?",
      answer:
        "Absolutely. Our websites are built with SEO best practices, including fast loading speeds, optimized structure, clean code, and proper heading hierarchy to help improve search engine visibility.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes. We offer website redesign services to improve design, performance, user experience, and search engine optimization while maintaining your brand identity.",
    },
    {
      question: "What platforms do you use for website development?",
      answer:
        "We build websites using industry-leading platforms such as WordPress, Shopify, and custom development frameworks, depending on your business needs and goals.",
    },
  ];

  const WebProcessData = {
    heading: "Our Proven 5-Step Website Design & Development Process",
    items: [
      {
        number: "01",
        title: "Discovery & Strategy",
        description:
          "We begin by understanding your business goals, audience, and competitors to build a clear strategy for designing a website that supports your growth and online visibility.",
        bullets: [
          "Business goal analysis",
          "Competitor research",
          "Website strategy planning",
        ],
      },
      {
        number: "02",
        title: "Planning & Wireframing",
        description:
          "Our team creates the website structure and layout to ensure a smooth user experience and logical content flow before development begins.",
        bullets: [
          "Website structure planning",
          "Wireframe layout creation",
          "User journey mapping",
        ],
      },
      {
        number: "03",
        title: "UI/UX Design",
        description:
          "We design a modern, visually engaging interface focused on usability, branding, and conversion optimization to deliver a seamless user experience.",
        bullets: [
          "Custom UI design",
          "UX optimization",
          "Brand-focused visuals",
        ],
      },
      {
        number: "04",
        title: "Development & Optimization",
        description:
          "Our developers build a fast, responsive, and SEO-friendly website using modern technologies to ensure optimal performance across all devices.",
        bullets: [
          "Responsive development",
          "Speed optimization",
          "SEO-ready structure",
        ],
      },
      {
        number: "05",
        title: "Testing & Website Launch",
        description:
          "Before launch, we thoroughly test your website to ensure functionality, performance, and security, then deploy it for a smooth public launch.",
        bullets: [
          "Cross-device testing",
          "Performance checks",
          "Website launch deployment",
        ],
      },
    ],
  };
  return (
    <>
      {/*web-design-section-1*/}
      <div className="web-design-section-1">
        <div className="web-design-sec1-content">
          <Row className="justify-content-between">
            <Col lg={6}>
              <h1 className="web-design-sec1-heading">
                Web Design Services That Drive Real Business Growth
              </h1>
            </Col>

            <Col lg={5}>
              <p className="web-design-sec1-descrp">
                Get a high-performing website built by experienced web design
                professionals.{" "}
                <span>
                  {" "}
                  We create modern, SEO-friendly, and user-focused websites
                  designed to turn visitors into customers
                </span>
                —so you can focus on scaling your business.
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
          What’s Included in Our <span> Website Design Services </span>
        </h2>

        <div className="web-design-services-wrapper">
          <div className="web-design-services-box web-box-1">
            <div className="web-service-box-content">
              <h3 className="web-serv-heading">Custom Web Development</h3>

              <p className="web-serv-descrp">
                Build a website designed for performance and growth. Our custom
                web development solutions focus on fast loading speeds, seamless
                functionality, and optimized user experience to help your
                business attract visitors, increase engagement, and generate
                more leads online.
              </p>

              <Link className="serv-box-link" href="/contact-us">
                Start Your Website Project
              </Link>
            </div>

            <div className="web-service-box-img-cont">
              <Image src="/images/web-1.webp" fill alt="website design"></Image>
            </div>
          </div>

          <div className="web-design-services-box web-box-2">
            <div className="web-service-box-content">
              <h3 className="web-serv-heading">Custom UI/UX Design</h3>

              <p className="web-serv-descrp">
                We design intuitive user interfaces and engaging user
                experiences that make your website easy to navigate and visually
                impactful. Our UI/UX design approach improves usability,
                increases customer engagement, and helps convert website
                visitors into loyal customers.
              </p>

              <Link className="serv-box-link" href="/contact-us">
                Start Your Website Project
              </Link>
            </div>

            <div className="web-service-box-img-cont">
              <Image
                src="/images/header-web.webp"
                fill
                alt="website design"
              ></Image>
            </div>
          </div>

          <div className="web-design-services-box web-box-3">
            <div className="web-service-box-content">
              <h3 className="web-serv-heading">
                WordPress Responsive Websites
              </h3>

              <p className="web-serv-descrp">
                We build fully responsive WordPress websites that work
                seamlessly across desktops, tablets, and mobile devices. Our
                websites are optimized for speed, SEO performance, and easy
                content management so your business can grow online with
                confidence.
              </p>

              <Link className="serv-box-link" href="/contact-us">
                Start Your Website Project
              </Link>
            </div>

            <div className="web-service-box-img-cont">
              <Image
                src="/images/wordpress.webp"
                fill
                alt="wordpress website design"
              ></Image>
            </div>
          </div>

          <div className="web-design-services-box web-box-4">
            <div className="web-service-box-content">
              <h3 className="web-serv-heading">
                Responsive Shopify eCommerce Stores
              </h3>

              <p className="web-serv-descrp">
                Launch a powerful Shopify eCommerce store designed to sell more
                products online. We create responsive, conversion-focused online
                stores with optimized product pages, secure checkout, and a
                seamless shopping experience for your customers.
              </p>

              <Link className="serv-box-link" href="/contact-us">
                Start Your Website Project
              </Link>
            </div>

            <div className="web-service-box-img-cont">
              <Image
                src="/images/shopify.webp"
                fill
                alt="shopify website design"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/*web-design-section-3*/}
      <ProcessSwiper processData={WebProcessData} />

      {/*web-design-section-4*/}
      <div className="web-design-section-4 marign-box">
        <h2 className="web-design-sec4-heading">
          Recognized for
          <span>
            Delivering
            <Image
              src="/images/icon.webp"
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
              <div>
                <h3>120+ successful website projects</h3>
                <p className="card-descrp">
                  Delivered high-performing websites for businesses across
                  multiple industries.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="web-design-sec4-card">
              <p> 02 </p>
              <div>
                <h3>250%+ average conversion growth</h3>
                <p className="card-descrp">
                  Improved website engagement and lead generation through
                  optimized design.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="web-design-sec4-card">
              <p> 03 </p>
              <div>
                <h3>8+ years digital experience</h3>
                <p className="card-descrp">
                  Helping businesses build stronger online presence and scalable
                  websites.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={3}>
            <div className="web-design-sec4-card border-0">
              <p> 04 </p>
              <div>
                <h3>1M+ global users reached</h3>
                <p className="card-descrp">
                  Driving traffic and engagement across client websites
                  worldwide.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/*web-design-section-5*/}
      <div className="web-design-section-5">
        <Faqs items={WebFaqs} />
      </div>

      {/*web-design-section-6*/}
      <ContactForm content={WebContact} />

      {/*web-design-section-7*/}
      <Footer />
    </>
  );
}

export default Page;
