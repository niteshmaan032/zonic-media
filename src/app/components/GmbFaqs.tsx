"use client";

import { Accordion, Col, Row } from "react-bootstrap";

type GmbFaqItem = {
  question: string;
  answer: string;
};

type GmbFaqsProps = {
  items: GmbFaqItem[];
};

export default function GmbFaqs({ items }: GmbFaqsProps) {
  return (
    <Row>
      <Col>
        <Accordion defaultActiveKey="0" className="global-faqs-accordion">
          {items.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={item.question}>
              <Accordion.Header as="h3">{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Col>
    </Row>
  );
}
