/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "What exactly is free on the cleaning company website?",
    answer:
      "The upfront cleaning company website design and development fee, valued at $2,000 for a standard build, is waived when you start a qualifying marketing plan at $297/month or above on a six-month term. Your written proposal sets the pages, features and revision limits before work begins.",
  },
  {
    question: "Which plans qualify a cleaning business?",
    answer:
      "Qualifying plans can include Google Ads management, Local SEO, Google Business Profile management, a combined ads and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your service area and goals.",
  },
  {
    question: "Can the site take walkthrough and bid requests?",
    answer:
      "Yes. The agreed scope can include a quote-first homepage, facility and service pages, walkthrough request forms, click-to-call, mobile layout, SEO basics, tracking and lead routing. Your proposal confirms the exact pages and features.",
  },
  {
    question: "Can you rebuild the cleaning website we have now?",
    answer:
      "Yes. The offer works for cleaning companies with no website, an outdated one, or a site that brings in too few bid requests. Zonic reviews your current site and recommends a rebuild or a replacement.",
  },
  {
    question: "Is there a contract term for this offer?",
    answer:
      "Yes. Because the website fee is waived as part of a recurring marketing engagement, your written agreement explains the minimum term, hosting, revisions, cancellation and website ownership before you approve the project.",
  },
];

export default function CleaningCompanyFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-cleaning-company-faq" open={index === 0}>
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
