/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "How can a moving company website be free?",
    answer:
      "The upfront moving company website design and development fee, valued at $2,000 for a standard build, is waived when you start a qualifying marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, features and revision limits before work starts.",
  },
  {
    question: "Which plans unlock the free moving website?",
    answer:
      "Qualifying plans can include Google Ads management, Local SEO, Google Business Profile management, a combined ads and Local SEO plan, or a wider growth plan. Zonic confirms eligibility after reviewing your routes and goals.",
  },
  {
    question: "Can the site handle local and long-distance quote requests?",
    answer:
      "Yes. The agreed scope can include a quote-first homepage, separate local and long-distance pages, city pages, quote forms, click-to-call, mobile layout, SEO basics, tracking and lead routing. Your proposal confirms the exact pages and features.",
  },
  {
    question: "We already have a moving website. Can you replace it?",
    answer:
      "Yes. The offer works for movers with no website, an outdated one, or a site that brings in too few quote requests. Zonic reviews what you have and recommends a rebuild or a full replacement.",
  },
  {
    question: "Is there a minimum term or cancellation policy?",
    answer:
      "Yes. The website fee is waived as part of a recurring marketing engagement, so your written agreement covers the minimum term, hosting, revisions, cancellation and website ownership before you approve anything.",
  },
];

export default function MovingCompanyFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-moving-company-faq" open={index === 0}>
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
