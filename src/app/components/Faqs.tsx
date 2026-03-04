"use client";

import { h3 } from "framer-motion/client";
import Link from "next/link";
import { Accordion, Col, Row } from "react-bootstrap";
import { FaMessage } from "react-icons/fa6";

type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

type FaqsProps = {
  items: FaqItem[];
  defaultActiveKey?: string;
};

function Faqs({ items, defaultActiveKey = "0" }: FaqsProps) {
  return (
    <>
      <div className="global-faqs-section">
        <h2 className="faq-heading">Frequently asked questions</h2>

        <Row className="justify-content-between gap-5 gap-lg-0">
          {/* LEFT FAQ */}
          <Col lg={8}>
            <div className="why-work-faq-wrapper">
              <Accordion
                defaultActiveKey={defaultActiveKey}
                className="global-faqs-accordion"
              >
                {items.map((item, index) => (
                  <Accordion.Item eventKey={String(index)} key={index}>
                    <Accordion.Header as={h3}>{item.question}</Accordion.Header>

                    <Accordion.Body>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>

          {/* ✅ RIGHT BOX (UNCHANGED) */}
          <Col lg={3}>
            <div className="faqs-question-box">
              <FaMessage size={48} />

              <h4>Do you have question</h4>

              <p>
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>

              <Link href="mailto:contact@zonicllc.com" className="buttons">
                Shoot a direct mail
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Faqs;
