import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { FaCircle as FaCircleFa } from "react-icons/fa";
import { FaCircle as FaCircleFa6 } from "react-icons/fa6";
import { notFound } from "next/navigation";
import ContactForm from "@/app/components/ContactForm";
import Faqs from "@/app/components/Faqs";
import Footer from "@/app/components/Footer";
import Testimonials from "@/app/components/Testimonials";
import "@/app/style/landingServices.css";
import {
  getLandingPageBySlug,
  landingPages,
  type HeadingPart,
  type LandingPageContent,
  type LandingTextBlock,
} from "@/shared/landing-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function renderHeadingParts(parts: HeadingPart[]) {
  return parts.map((part, index) =>
    part.highlight ? (
      <span key={`${part.text}-${index}`}>{part.text}</span>
    ) : (
      <Fragment key={`${part.text}-${index}`}>{part.text}</Fragment>
    ),
  );
}

function renderButton(label: string, href: string) {
  return (
    <Link href={href} className="buttons">
      {label}
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
  );
}

function renderTextBlock(
  block: LandingTextBlock,
  iconSet: LandingPageContent["bulletIconSet"],
  key: string,
) {
  const BulletIcon = iconSet === "fa" ? FaCircleFa : FaCircleFa6;

  switch (block.type) {
    case "paragraph":
      return (
        <p className="landing-description" key={key}>
          {block.text}
        </p>
      );
    case "subheading":
      return (
        <h3 className="landing-sub-head" key={key}>
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="landing-list" key={key}>
          {block.items.map((item, index) => (
            <li key={`${item}-${index}`}>
              <BulletIcon />
              {item}
            </li>
          ))}
        </ul>
      );
    case "button":
      return (
        <Fragment key={key}>
          {renderButton(block.button.label, block.button.href)}
        </Fragment>
      );
    case "comparison":
      return (
        <div className="landing-comparison" key={key}>
          {block.items.map((comparisonItem, index) => (
            <div
              className="landing-comp-cont"
              key={`${comparisonItem.title}-${index}`}
            >
              <h3 className="landing-sub-head">{comparisonItem.title}</h3>
              <ul className="landing-list">
                {comparisonItem.items.map((item, itemIndex) => (
                  <li key={`${item}-${itemIndex}`}>
                    <BulletIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function buildFaqSchema(pageData: LandingPageContent) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return landingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getLandingPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  return {
    metadataBase: new URL("https://zonicllc.com"),
    ...pageData.metadata,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const pageData = getLandingPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <div className={pageData.themeClassName}>
      <div className="landing-sec-1">
        <Col xs={12} lg={pageData.hero.colLg}>
          <div className="landing-sec-1-content">
            <h1>{renderHeadingParts(pageData.hero.titleParts)}</h1>
            {pageData.hero.paragraphs.map((paragraph, index) => (
              <p key={`${paragraph}-${index}`}>{paragraph}</p>
            ))}
            {renderButton(pageData.hero.cta.label, pageData.hero.cta.href)}
          </div>
        </Col>
      </div>

      {pageData.contentSections.map((section) => (
        <div className={section.className} key={section.className}>
          {section.rows.map((row, rowIndex) => (
            <Row
              className={row.className}
              key={`${section.className}-${rowIndex}`}
            >
              {row.columns.map((column, columnIndex) => (
                <Col
                  xs={12}
                  lg={column.lg}
                  className={column.orderClassName}
                  key={`${section.className}-${rowIndex}-${columnIndex}`}
                >
                  {column.type === "image" ? (
                    <div className="landing-img-container">
                      <Image src={column.src} fill alt={column.alt} />
                    </div>
                  ) : (
                    <div className="landing-sec-content">
                      <h2 className="landing-heading">{column.heading}</h2>
                      {column.blocks.map((block, blockIndex) =>
                        renderTextBlock(
                          block,
                          pageData.bulletIconSet,
                          `${section.className}-${rowIndex}-${columnIndex}-${blockIndex}`,
                        ),
                      )}
                    </div>
                  )}
                </Col>
              ))}
            </Row>
          ))}
        </div>
      ))}

      <div className="landing-sec-7">
        <Col xs={12} lg={pageData.availability.colLg}>
          <h2 className="landing-heading">{pageData.availability.heading}</h2>
          {pageData.availability.paragraphs.map((paragraph, index) => (
            <p className="landing-description" key={`${paragraph}-${index}`}>
              {paragraph}
            </p>
          ))}
          {renderButton(
            pageData.availability.cta.label,
            pageData.availability.cta.href,
          )}
        </Col>
      </div>

      <div className="landing-sec-8">
        <div className="landing-sec-8-head-cont">
          <Col xs={12} lg={6}>
            <h2 className="landing-heading">{pageData.process.introHeading}</h2>
            <p className="landing-description">
              {pageData.process.introDescription}
            </p>
          </Col>
        </div>

        <Row className="g-4">
          {pageData.process.steps.map((step) => (
            <Col xs={12} lg={6} key={step.number}>
              <div className="landing-process-box">
                <div className="landing-process-number">
                  <p>{step.number}</p>
                </div>
                <div className="landing-process-content">
                  <h3 className="landing-process-heading">{step.title}</h3>
                  <p className="landing-process-description">
                    {step.description}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="landing-sec-9">
        <Faqs items={pageData.faqs} />
        <Script
          id={`faq-schema-${pageData.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: buildFaqSchema(pageData),
          }}
        />
      </div>

      <div className="landing-sec-10">
        <h2 className="testimonial-heading">
          {renderHeadingParts(pageData.testimonialsHeadingParts)}
        </h2>
        <Testimonials />
      </div>

      <div className="landing-sec-11">
        <ContactForm content={pageData.contactForm} />
      </div>

      <Footer />
    </div>
  );
}
