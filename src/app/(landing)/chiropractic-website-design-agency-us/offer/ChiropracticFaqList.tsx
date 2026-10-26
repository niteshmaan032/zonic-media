/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the chiropractic website really free to build?",
    answer:
      "Yes, the build is. The upfront chiropractic website design and development fee, valued at $2,000 for a standard build, is waived when you start a qualifying marketing plan at $297/month or above on a six-month term. Your written proposal sets the pages, features and revision limits.",
  },
  {
    question: "What plan does my clinic need to qualify?",
    answer:
      "Qualifying plans can include Google Ads management, Local SEO, Google Business Profile management, a combined ads and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your clinic and local market.",
  },
  {
    question: "Can new patients book and fill in forms online?",
    answer:
      "Yes. The agreed scope can include booking requests, new patient pages, condition pages, insurance details, click-to-call, mobile layout, SEO basics and tracking. If your practice software offers online scheduling or intake, we can link to it. Your proposal confirms the details.",
  },
  {
    question: "Can you replace our current chiropractic website?",
    answer:
      "Yes. The offer works for clinics with no website, an outdated one, or a site that books too few new patients. Zonic reviews your current site and recommends a rebuild or replacement.",
  },
  {
    question: "What if my clinic wants to cancel?",
    answer:
      "The website fee is waived as part of a recurring marketing engagement, so your written agreement covers the minimum term, hosting, revisions, cancellation and website ownership before you approve. If you cancel early, you keep your domain and the content you supplied.",
  },
];

export default function ChiropracticFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-chiropractic-faq" open={index === 0}>
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
