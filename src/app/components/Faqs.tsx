"use client";

import React from "react";
import Link from "next/link";
import { Accordion, Col, Row } from "react-bootstrap";
import { FaMessage } from "react-icons/fa6";

type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

type FaqData = {
  items: FaqItem[];
  defaultActiveKey?: string;
};

type FaqsProps = {
  items: FaqItem[] | FaqData;
  defaultActiveKey?: string;
};

function Faqs({ items, defaultActiveKey = "0" }: FaqsProps) {
  const resolvedItems = Array.isArray(items) ? items : items.items;
  const resolvedDefaultActiveKey = Array.isArray(items)
    ? defaultActiveKey
    : (items.defaultActiveKey ?? defaultActiveKey);

  return (
    <div className="global-faqs-section">
      <h2 className="faq-heading">Frequently asked questions</h2>

      <Row className="justify-content-between gap-5 gap-lg-0">
        {/* LEFT FAQ */}
        <Col lg={8}>
          <div className="why-work-faq-wrapper">
            <Accordion
              defaultActiveKey={resolvedDefaultActiveKey}
              className="global-faqs-accordion"
            >
              {resolvedItems.map((item, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                  <Accordion.Header as="h3">{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Col>

        {/* RIGHT BOX (UNCHANGED) */}
        <Col lg={3}>
          <div className="faqs-question-box">
            <FaMessage size={48} />

            <h4>Have a Question or Need Expert Guidance?</h4>

            <p>
              Connect with our team to discuss your project, explore the right
              digital strategy, and discover how we can help grow your business
              online.
            </p>

            <Link href="mailto:contact@zonicllc.com" className="buttons">
              Send Us an Email
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Faqs;
