/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the flooring website truly free for my company?",
    answer:
      "The upfront flooring website design and development fee, $2,000 for a standard build, is waived when you start an eligible recurring marketing plan at $297/month or above on a six-month term. Your written proposal confirms the page count, functionality and revision limits before work begins.",
  },
  {
    question: "Which marketing plans unlock the flooring website?",
    answer:
      "Qualifying services may include Google Ads management, Local SEO, Google Business Profile management, a combined PPC and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your flooring goals and market.",
  },
  {
    question: "What goes into a flooring company website?",
    answer:
      "The agreed scope can include a conversion-focused homepage, flooring product and service pages, measure and quote forms, click-to-call, mobile optimization, SEO foundations, tracking and lead routing. Exact page count and features are confirmed in your proposal.",
  },
  {
    question: "Can you rebuild the website for our flooring store?",
    answer:
      "Yes. The offer suits flooring businesses with no website, an outdated website, or a site that is not producing enough enquiries. Zonic will recommend a full replacement or a rebuild.",
  },
  {
    question: "Which contract terms apply to flooring companies?",
    answer:
      "The qualifying plan has a six-month minimum term. Because the flooring website fee is waived as part of that engagement, the written agreement sets out hosting, revisions, cancellation and website ownership terms before you approve the project.",
  },
];

export default function FlooringFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-flooring-faq" open={index === 0}>
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
