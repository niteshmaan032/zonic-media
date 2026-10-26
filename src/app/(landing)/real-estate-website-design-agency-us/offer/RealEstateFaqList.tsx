/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "How is the real estate website free?",
    answer:
      "The upfront real estate website design and development fee, valued at $2,000 for a standard build, is waived when you start a qualifying marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, features and revision limits before work begins.",
  },
  {
    question: "Which plans qualify an agent or team?",
    answer:
      "Qualifying plans can include Google Ads management, Local SEO, Google Business Profile management, a combined ads and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your farm areas and goals.",
  },
  {
    question: "Can the site show MLS listings and home value forms?",
    answer:
      "Yes. The agreed scope can include buyer and seller pages, neighborhood pages, home value forms, click-to-call, mobile layout, SEO basics and lead tracking. Listing search runs through an IDX feed from your MLS, and your proposal confirms the provider and any third-party costs.",
  },
  {
    question: "Can Zonic replace my brokerage-provided website?",
    answer:
      "Yes. The offer works for agents with no site, a basic brokerage page or an outdated website that brings in too few leads. Zonic reviews what you have and recommends a rebuild or replacement that respects your brokerage’s branding rules.",
  },
  {
    question: "How long do I commit for?",
    answer:
      "The website fee is waived as part of a recurring marketing engagement on a six-month term. Your written agreement explains the minimum commitment, hosting, revisions, cancellation and website ownership before you approve the project.",
  },
];

export default function RealEstateFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-real-estate-faq" open={index === 0}>
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
