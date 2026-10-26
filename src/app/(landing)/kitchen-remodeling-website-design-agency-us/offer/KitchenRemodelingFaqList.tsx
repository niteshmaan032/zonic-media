/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "What does the kitchen website cost me upfront?",
    answer:
      "Nothing upfront for the build. The kitchen remodeling website design and development fee, $2,000 for a standard build, is waived once you start an eligible recurring marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, functionality and revision limits before work begins.",
  },
  {
    question: "Which plans make a kitchen remodeler eligible?",
    answer:
      "Qualifying services may include Google Ads management, Local SEO, Google Business Profile management, a combined PPC and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after looking at your goals and your kitchen remodel market.",
  },
  {
    question: "Can the site show our kitchens and financing?",
    answer:
      "Yes, within the agreed scope. That can include a conversion-focused homepage, service pages, a kitchen gallery, a financing page if you offer it, lead forms, click-to-call, mobile optimization, SEO foundations, tracking and lead routing. Exact pages are confirmed in your proposal.",
  },
  {
    question: "Is the offer open if we already have a kitchen site?",
    answer:
      "Yes. It is open to companies with no website, an outdated one, or a site that is not producing enough enquiries. Zonic will advise whether a full replacement or a rebuild makes more sense.",
  },
  {
    question: "What commitment does a kitchen remodeler sign up for?",
    answer:
      "A qualifying marketing plan on a six-month minimum term. Because the website fee is waived inside that engagement, the written agreement lists hosting, revisions, cancellation and website ownership terms before you approve anything.",
  },
];

export default function KitchenRemodelingFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-kitchen-remodeling-faq" open={index === 0}>
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
