/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "How is the painting contractor website free?",
    answer:
      "We waive the upfront painting contractor website design and development fee, $2,000 for a standard build, when you start an eligible recurring marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, functionality and revision limits before work begins.",
  },
  {
    question: "Do I need Google Ads to qualify as a painter?",
    answer:
      "Not always. Qualifying services may include Google Ads management, Local SEO, Google Business Profile management, a combined PPC and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your painting goals and market.",
  },
  {
    question: "What does a painting contractor website include?",
    answer:
      "The agreed scope can include a conversion-focused homepage, pages for each painting service, project galleries, estimate forms, click-to-call, mobile optimization, SEO foundations, tracking and lead routing. Exact page count and functions are confirmed in your proposal.",
  },
  {
    question: "Can you replace our DIY-builder painter site?",
    answer:
      "Yes. The offer is open to painters with no website, an outdated website, or a website that is not bringing in enough enquiries. Zonic will recommend whether to replace or rebuild it.",
  },
  {
    question: "What terms come with the free painter website?",
    answer:
      "A six-month minimum term on the qualifying plan. Since the website fee is waived as part of that engagement, the written agreement explains hosting, revisions, cancellation and website ownership terms before you approve the project.",
  },
];

export default function PaintingContractorFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-painting-contractor-faq" open={index === 0}>
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
