/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Do I pay to have the bathroom remodeling website built?",
    answer:
      "No upfront build fee. The bathroom remodeling website design and development fee, $2,000 for a standard build, is waived when you start an eligible recurring marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, functionality and revision limits before work begins.",
  },
  {
    question: "Does Local SEO alone qualify a remodeling company?",
    answer:
      "It can. Qualifying services can include Google Ads management, Local SEO, Google Business Profile management, a combined PPC and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your remodel goals and service area.",
  },
  {
    question: "What pages does a bathroom remodeling website include?",
    answer:
      "The agreed scope can include a conversion-focused homepage, pages for your bathroom remodeling services, a project gallery, consult and lead forms, click-to-call, mobile optimization, SEO foundations, tracking and lead routing. Exact page count and features are confirmed in your proposal.",
  },
  {
    question: "Can you replace a remodel site that gets few consults?",
    answer:
      "Yes. The offer works if you have no website, an outdated one, or a site that is not bringing in enough enquiries. Zonic will recommend whether to replace it or rebuild it.",
  },
  {
    question: "How long is the commitment for remodelers?",
    answer:
      "The qualifying plan runs on a six-month minimum term. Because the website fee is waived inside that engagement, the written agreement explains hosting, revisions, cancellation and website ownership terms before you approve the project.",
  },
];

export default function BathroomRemodelingFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-bathroom-remodeling-faq" open={index === 0}>
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
