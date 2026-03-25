import "@/app/style/landingPage.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdCenterFocusWeak } from "react-icons/md";

import Testimonials from "@/app/components/Testimonials";
import Faqs from "@/app/components/Faqs";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import { landingPages } from "@/shared/landing-pages";
import LandingProcess from "@/app/components/LandingProcess";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const landingPageList = Object.values(landingPages);

function getLandingPageBySlug(slug: string) {
  return landingPageList.find((page) => page.slug === slug);
}

function ArrowIcon() {
  return (
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
  );
}

function CTAButton({
  href,
  text,
  className = "buttons",
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <Link href={href} className={className}>
      {text}
      <ArrowIcon />
    </Link>
  );
}

function getCardIcon(icon: string) {
  switch (icon) {
    case "trendUp":
      return <FaArrowTrendUp />;
    case "badgeCheck":
      return <LuBadgeCheck />;
    case "call":
      return <IoCallOutline />;
    default:
      return <FaArrowTrendUp />;
  }
}

export async function generateStaticParams() {
  return landingPageList.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getLandingPageBySlug(slug);

  if (!pageData) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: pageData.meta.title,
    description: pageData.meta.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getLandingPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  const WebContact = pageData.contact;
  const WebFaqs = pageData.faqs;

  return (
    <>
      <div
        className="landing-hero-section"
        style={{
          backgroundImage: `url('${pageData.hero.backgroundImage}')`,
        }}
      >
        <div className="landing-hero-section-content">
          <h1 className="landing-hero-heading">{pageData.hero.heading}</h1>
          <div className="landing-hero-descrip-container">
            <p className="landing-hero-descrp">{pageData.hero.description}</p>
            <CTAButton
              href={pageData.hero.ctaLink}
              text={pageData.hero.ctaText}
              className="buttons z-5"
            />
          </div>
        </div>
      </div>

      <div className="content-wrapper-landing-page">
        <div className="landing-section-2">
          <Row className="m-0 justify-content-between">
            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec-head-container">
                <p className="landing-sub-heading">
                  {pageData.section2.subHeading}
                </p>
                <h2 className="landing-section-heading">
                  {pageData.section2.heading}
                </h2>
                <p className="landing-head-descrp">
                  {pageData.section2.shortDescription}
                </p>

                <CTAButton
                  href={pageData.section2.ctaLink}
                  text={pageData.section2.ctaText}
                />

                <div className="landing-sec2-img-cont">
                  <Image
                    src={pageData.section2.image}
                    fill
                    alt={pageData.section2.imageAlt}
                  />
                </div>
              </div>
            </Col>

            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec2-content">
                {pageData.section2.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === pageData.section2.paragraphs.length - 1
                        ? "m-0"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        <div className="landing-section-3">
          <Row className="m-0 justify-content-between landing-sec3-head-cont align-items-start">
            <Col xs={12} lg={6} className="col-padding">
              <p className="landing-sub-heading">
                {pageData.section3.subHeading}
              </p>
              <h2 className="landing-section-heading">
                {pageData.section3.heading}
              </h2>
            </Col>
            <Col xs={12} lg={6} className="col-padding">
              <p className="landing-head-descrp">
                {pageData.section3.description}
              </p>
              <CTAButton
                href={pageData.section3.ctaLink}
                text={pageData.section3.ctaText}
              />
            </Col>
          </Row>

          <Row className="m-0 landing-sec3-card-row">
            {pageData.section3.cards.map((card, index) => (
              <Col xs={12} lg={4} className="col-padding" key={index}>
                <div
                  className={`landing-sec3-card ${
                    index === pageData.section3.cards.length - 1
                      ? "border-0 pe-0"
                      : ""
                  }`}
                >
                  {getCardIcon(card.icon)}
                  <h3 className="landing-sec3-card-heading">{card.title}</h3>
                  <p className="landing-sec3-card-content">
                    {card.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="landing-section-4">
          <Row className="m-0">
            <Col xs={12} lg={6} className="col-padding">
              <h2 className="landing-section-heading">
                {pageData.section4.heading}
              </h2>
              <p className="landing-head-descrp">
                {pageData.section4.description}
              </p>
              <div className="landing-sec4-stats">
                {pageData.section4.stats.map((stat, index) => (
                  <div className="landing-sec4-stats-card" key={index}>
                    <h3 className="landing-sec4-stats-numb">{stat.number}</h3>
                    <p className="landing-sec4-stat-descrp">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
              <CTAButton
                href={pageData.section4.ctaLink}
                text={pageData.section4.ctaText}
              />
            </Col>

            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec4-img-cont">
                <Image
                  src={pageData.section4.image}
                  fill
                  alt={pageData.section4.imageAlt}
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className="landing-section-5">
          {/* TOP CONTENT */}
          <Row className="m-0 justify-content-between">
            <Col xs={12} lg={6} className="col-padding">
              <p className="landing-sub-heading">
                {pageData.section5.subHeading}
              </p>
              <h2 className="landing-section-heading">
                {pageData.section5.heading}
              </h2>
            </Col>

            <Col xs={12} lg={6} className="col-padding">
              <p className="landing-head-descrp">
                {pageData.section5.description}
              </p>
              <CTAButton
                href={pageData.hero.ctaLink}
                text={pageData.hero.ctaText}
              />
            </Col>
          </Row>

          {/* ✅ SWIPER (THIS IS YOUR DESIGN) */}
          <LandingProcess steps={pageData.section5.steps} />
        </div>

        <div className="landing-section-6">
          <Row className="m-0 justify-content-between">
            <Col xs={12} lg={5} className="col-padding">
              <div className="landing-sec-head-container">
                <p className="landing-sub-heading">
                  {pageData.section6.subHeading}
                </p>
                <h2 className="landing-section-heading">
                  {pageData.section6.heading}
                </h2>
                <p className="landing-head-descrp">
                  {pageData.section6.description}
                </p>

                <CTAButton
                  href={pageData.section6.ctaLink}
                  text={pageData.section6.ctaText}
                />
              </div>
            </Col>

            <Col xs={12} lg={7} className="col-padding">
              <div className="landing-sec6-cards-wrapper">
                <div className="landing-sec6-card-row-1">
                  {pageData.section6.cards.slice(0, 2).map((card, index) => (
                    <div className="landing-sec6-card" key={index}>
                      <MdCenterFocusWeak />
                      <h3 className="landing-sec6-card-heading">
                        {card.title}
                      </h3>
                      <p className="landing-sec6-card-cont">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="landing-sec6-card-row-1">
                  {pageData.section6.cards.slice(2, 4).map((card, index) => (
                    <div className="landing-sec6-card" key={index}>
                      <MdCenterFocusWeak />
                      <h3 className="landing-sec6-card-heading">
                        {card.title}
                      </h3>
                      <p className="landing-sec6-card-cont">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="landing-section-7">
          <Row className="m-0 justify-content-between">
            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec-head-container">
                <p className="landing-sub-heading">
                  {pageData.section7.subHeading}
                </p>
                <h2 className="landing-section-heading">
                  {pageData.section7.heading}
                </h2>
                <p className="landing-head-descrp">
                  {pageData.section7.description}
                </p>

                <CTAButton
                  href={pageData.section7.ctaLink}
                  text={pageData.section7.ctaText}
                />
              </div>
            </Col>

            <Col xs={12} lg={6} className="col-padding">
              <div className="landing-sec2-content">
                {pageData.section7.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        <div className="landing-section-10">
          <Row className="m-0 justify-content-between landing-sec3-head-cont align-items-start">
            <Col xs={12} lg={6} className="col-padding">
              <h2 className="landing-section-heading">
                {pageData.section10.heading}
              </h2>
            </Col>

            <div className="landing-service-wrapper">
              {pageData.section10.services.map((service, index) => (
                <Row className="landing-service-row" key={index}>
                  <Col xs={12} lg={6} className="col-padding">
                    <p className="landing-service-numb">
                      <span>{service.number}</span> {service.title}
                    </p>
                  </Col>
                  <Col xs={12} lg={6} className="col-padding">
                    <p className="landing-service-cont">
                      {service.description}
                    </p>
                    <Link href={service.link}>{service.linkText}</Link>
                  </Col>
                </Row>
              ))}
            </div>
          </Row>
        </div>

        <div className="landing-section-8">
          <h2 className="testimonial-heading">
            {pageData.testimonials.heading}
            <span>{pageData.testimonials.highlightedHeading}</span>
          </h2>
          <Testimonials />
        </div>

        <div className="landing-section-9">
          <Faqs items={WebFaqs} />
        </div>

        <ContactForm content={WebContact} />

        <Footer />
      </div>
    </>
  );
}
