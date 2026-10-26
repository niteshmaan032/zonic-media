/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "What does a pool company pay for the website build?",
    answer:
      "Nothing upfront. The pool service website design and development fee, $2,000 for a standard build, is waived when you start an eligible recurring marketing plan at $297/month or above on a six-month term. Your written proposal defines the page count, functionality and revision limits before work begins.",
  },
  {
    question: "Which services count toward the pool website offer?",
    answer:
      "Qualifying services may include Google Ads management, Local SEO, Google Business Profile management, a combined PPC and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your goals and route area.",
  },
  {
    question: "Can the site sell weekly plans and take repairs?",
    answer:
      "Yes, within the agreed scope. That can include a conversion-focused homepage, weekly service and repair pages, signup and lead forms, click-to-call, mobile optimization, SEO foundations, tracking and lead routing. Exact page count and features are confirmed in your proposal.",
  },
  {
    question: "We have an old pool website. Can it be replaced?",
    answer:
      "Yes. The offer suits pool companies with no website, an outdated website, or a site that is not bringing in enough enquiries. Zonic will recommend whether to replace or rebuild it.",
  },
  {
    question: "Do pool companies sign a minimum term?",
    answer:
      "Yes, a six-month minimum term on the qualifying plan. Because the website fee is waived inside that engagement, the written agreement explains hosting, revisions, cancellation and website ownership terms before you approve the project.",
  },
];

export default function PoolServiceFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-pool-service-faq" open={index === 0}>
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
