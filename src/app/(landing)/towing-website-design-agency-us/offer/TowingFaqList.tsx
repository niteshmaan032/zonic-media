/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "What does the free towing website cover?",
    answer:
      "The upfront towing website design and development fee, valued at $2,000 for a standard build, is waived when you start a qualifying marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, features and revision limits before work starts.",
  },
  {
    question: "Which towing marketing plans qualify?",
    answer:
      "Plans can include Google Ads management, Local SEO, Google Business Profile management, a combined ads and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your coverage area and goals.",
  },
  {
    question: "Will the website show 24/7 dispatch and my service area?",
    answer:
      "Yes, if you offer it. The agreed scope can include a call-first homepage, towing and roadside pages, city pages for your coverage area, tow request forms, tap-to-call buttons, mobile layout, SEO basics and call tracking. Your proposal confirms the exact pages.",
  },
  {
    question: "Can Zonic replace the towing website I have now?",
    answer:
      "Yes. The offer works if you have no website, an old one, or one that brings in few direct calls. Direct calls from your own site add to any motor club work you already take. Zonic reviews your setup and recommends a rebuild or replacement.",
  },
  {
    question: "What commitment comes with the free towing website?",
    answer:
      "The website fee is waived as part of a recurring marketing engagement, so your written agreement spells out the minimum term, hosting, revisions, cancellation and website ownership before you approve the project.",
  },
];

export default function TowingFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-towing-faq" open={index === 0}>
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
