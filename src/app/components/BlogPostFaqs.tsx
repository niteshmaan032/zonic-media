"use client";

import { Accordion } from "react-bootstrap";
import type { FaqItem } from "@/backend/lib/blogs";

type BlogPostFaqsProps = {
  items: FaqItem[];
};

function BlogPostFaqs({ items }: BlogPostFaqsProps) {
  if (!items.length) return null;

  return (
    <section className="bp-faqs" aria-labelledby="bp-faqs-heading">
      <h2 id="bp-faqs-heading" className="bp-faqs-heading">
        Frequently asked questions
      </h2>

      <Accordion defaultActiveKey="0" className="global-faqs-accordion">
        {items.map((item, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header as="h3">{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

export default BlogPostFaqs;
