/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the professional website really free?",
    answer:
      "The upfront design and development fee — $2,000 for a standard build — is waived when you start an eligible recurring marketing plan at $895/month or above on a six-month term. Your written proposal defines the exact page count, functionality, and revision limits before work begins.",
  },
  {
    question: "Which marketing plans qualify?",
    answer:
      "Qualifying services may include Google Ads management, Local SEO, Google Business Profile management, a combined PPC and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your goals and market.",
  },
  {
    question: "What is included in the website?",
    answer:
      "The agreed scope can include a conversion-focused homepage, service pages, lead forms, click-to-call actions, mobile optimization, SEO foundations, tracking, and lead routing. Exact page count and functionality are confirmed in your proposal.",
  },
  {
    question: "Can Zonic replace my existing website?",
    answer:
      "Yes. The offer can be used for businesses with no website, an outdated website, or a website that is not generating enough enquiries. Zonic will recommend the right replacement or rebuild approach.",
  },
  {
    question: "Are there commitment or cancellation terms?",
    answer:
      "Yes. The qualifying plan runs on a six-month minimum term, and that's what the waived $2,000 build fee is set against. We host the site during those six months; ownership of the site and hosting transfers to you at the end of month six. If you cancel before then, you keep your domain and your content, but the website doesn't transfer. Your written proposal restates all of this before you sign anything.",
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
