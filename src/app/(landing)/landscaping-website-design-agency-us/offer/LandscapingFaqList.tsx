/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Why is the landscaping website build free?",
    answer:
      "We waive the landscaping website design and development fee, $2,000 for a standard build, when you start an eligible recurring marketing plan at $297/month or above on a six-month term. The written proposal sets the exact page count, functionality and revision limits before work begins.",
  },
  {
    question: "Which landscaping marketing plans qualify?",
    answer:
      "Qualifying services may include Google Ads management, Local SEO, Google Business Profile management, a combined PPC and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your goals, seasons and service area.",
  },
  {
    question: "Can the site handle both design-build and lawn care?",
    answer:
      "Yes, within the agreed scope. That can include a conversion-focused homepage, separate design-build and maintenance pages, project galleries, lead forms, click-to-call, mobile optimization, SEO foundations, tracking and lead routing. Exact pages are confirmed in your proposal.",
  },
  {
    question: "Does the offer work if we have no website yet?",
    answer:
      "Yes. The offer covers landscaping companies with no website, an outdated website, or a site that is not producing enough enquiries. Zonic will recommend a new build, a replacement or a rebuild.",
  },
  {
    question: "Is there a contract with the landscaping offer?",
    answer:
      "Yes. The qualifying plan runs on a six-month minimum term, and because the website fee is waived within it, the written agreement explains hosting, revisions, cancellation and website ownership terms before you approve the project.",
  },
];

export default function LandscapingFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-landscaping-faq" open={index === 0}>
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
