/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the small business website actually free?",
    answer:
      "Yes, the build is. The $2,000 design and development fee is waived when you start a qualifying recurring marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, features and revision rounds before work starts.",
  },
  {
    question: "What kinds of businesses can claim the free website?",
    answer:
      "Local and service businesses across the 20+ industries we work in. Qualifying plans include Google Ads management, local SEO, Google Business Profile management or a combined plan. We confirm eligibility after reviewing your goals and market.",
  },
  {
    question: "What pages and features does the website include?",
    answer:
      "The standard build is a homepage plus ten pages and up to five city pages, with two rounds of design revisions. It covers service pages, contact forms, click-to-call, mobile layouts, SEO basics, tracking and lead routing.",
  },
  {
    question: "How is this different from a free website builder?",
    answer:
      "A free builder hands you a template and leaves the rest to you. We design and build the site, connect tracking and run the marketing that sends customers to it. Existing site? We can rebuild it.",
  },
  {
    question: "What happens if I cancel before six months?",
    answer:
      "The qualifying plan has a six-month minimum term, which the waived $2,000 build fee is set against. We host the site during the term, and ownership of the site and hosting transfers to you at the end of month six. If you cancel earlier, you keep your domain and your content, but the website does not transfer. Your proposal states all of this before you sign anything.",
  },
];

export default function FaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="fwd-faq" open={index === 0}>
          <summary>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {faq.question}
            <i>+</i>
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
