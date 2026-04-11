"use client";

import Link from "next/link";
import { Accordion, Col, Row } from "react-bootstrap";
import { FaMessage } from "react-icons/fa6";

import { SITE_CONTACT } from "@/shared/siteConfig";

const faqItems = [
  {
    question: "What types of GMB suspensions do you handle?",
    answer:
      "We handle all suspension types — soft suspensions, hard suspensions, disabled listings, and suspended-pending-verification profiles. If it's suspended, we've likely seen it before.",
  },
  {
    question: "How long does reinstatement take?",
    answer:
      "Most cases are resolved within 5–7 business days. Complex cases or those requiring video verification may take up to 14 days. We'll give you a realistic timeline after your free audit.",
  },
  {
    question: "What if Google rejects the appeal?",
    answer:
      "We don't stop at one appeal. We analyze the rejection, adjust the strategy, and resubmit. Our persistence is one reason our success rate is so high.",
  },
  {
    question: "Do I need to provide anything?",
    answer:
      "Yes — we'll need basic business documents (utility bill, business registration, etc.) to support your appeal. We'll tell you exactly what to gather after the audit.",
  },
  {
    question: "What is GMB Optimization and why do I need it?",
    answer:
      "After reinstatement, we optimize your profile — the right categories, keywords, images, posts, and Q&A — so you rank higher in local search and attract more customers than you did before the suspension.",
  },
  {
    question: "Do you work with agencies?",
    answer:
      "Yes. We work with digital marketing agencies managing multiple client GMB profiles. Contact us for agency pricing and partnership options.",
  },
];

export default function GmbReinstFaqs() {
  return (
    <Row>
      <Col>
        <Accordion defaultActiveKey="0" className="global-faqs-accordion">
          {faqItems.map((item, index) => (
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
