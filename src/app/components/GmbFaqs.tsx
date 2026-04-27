"use client";

import { useState } from "react";
import { Accordion, Col, Row } from "react-bootstrap";

type GmbFaqItem = {
  question: string;
  answer: string;
};

type GmbFaqsProps = {
  items: GmbFaqItem[];
  columns?: 1 | 2;
};

export default function GmbFaqs({ items, columns = 1 }: GmbFaqsProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const midpoint = Math.ceil(items.length / 2);
  const leftColumnItems = columns === 2 ? items.slice(0, midpoint) : items;
  const rightColumnItems = columns === 2 ? items.slice(midpoint) : [];

  const renderAccordion = (
    columnItems: GmbFaqItem[],
    columnKey: string,
  ) => (
    <Accordion
      activeKey={activeKey ?? undefined}
      onSelect={(eventKey) =>
        setActiveKey(
          typeof eventKey === "string" && eventKey !== activeKey
            ? eventKey
            : null,
        )
      }
      className="global-faqs-accordion"
    >
      {columnItems.map((item, index) => (
        <Accordion.Item
          eventKey={`${columnKey}-${index}`}
          key={`${columnKey}-${item.question}`}
        >
          <Accordion.Header as="h3">{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );

  return (
    <Row>
      <Col lg={columns === 2 ? 6 : 12}>{renderAccordion(leftColumnItems, "left")}</Col>

      {columns === 2 && rightColumnItems.length > 0 ? (
        <Col lg={6}>{renderAccordion(rightColumnItems, "right")}</Col>
      ) : null}
    </Row>
  );
}
