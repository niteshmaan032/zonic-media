"use client";

import { Accordion, Col, Row } from "react-bootstrap";
import "@/app/style/whywork.css";
import Image from "next/image";
import React from "react";

export type WhyWorkItem = {
  title: string;
  content: string | React.ReactNode;
};

export type WhyWorkImage = {
  src: string;
  alt: string;
};

export type WhyWorkData = {
  heading?: string | React.ReactNode;
  image?: WhyWorkImage;
  items: WhyWorkItem[];
  defaultActiveKey?: string;
};

type WhyWorkProps = {
  items?: WhyWorkItem[] | WhyWorkData;
  heading?: string | React.ReactNode;
  image?: WhyWorkImage;
  defaultActiveKey?: string;
};

function WhyWork({ items, heading, image, defaultActiveKey }: WhyWorkProps) {
  const resolvedHeading = Array.isArray(items)
    ? heading
    : (items?.heading ?? heading);
  const resolvedImage = Array.isArray(items) ? image : (items?.image ?? image);
  const resolvedItems = Array.isArray(items) ? items : (items?.items ?? []);
  const resolvedDefaultActiveKey = Array.isArray(items)
    ? defaultActiveKey
    : (items?.defaultActiveKey ?? defaultActiveKey);

  return (
    <>
      <div className="why-work-wrapper">
        <Row>
          <Col lg={5}>
            <div className="why-work-img-wrapper why-ad-img-wrapper ">
              {resolvedImage ? (
                <Image
                  src={resolvedImage.src}
                  fill
                  alt={resolvedImage.alt}
                ></Image>
              ) : null}
            </div>
          </Col>

          <Col lg={7}>
            <div className="why-work-content-wrapper">
              {resolvedHeading ? (
                <h2 className="why-work-heading">{resolvedHeading}</h2>
              ) : null}
              <Accordion
                defaultActiveKey={resolvedDefaultActiveKey ?? "0"}
                className="global-faqs-accordion"
              >
                {resolvedItems.map((item, index) => (
                  <Accordion.Item eventKey={String(index)} key={index}>
                    <Accordion.Header as="h3">{item.title}</Accordion.Header>
                    <Accordion.Body>{item.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WhyWork;
