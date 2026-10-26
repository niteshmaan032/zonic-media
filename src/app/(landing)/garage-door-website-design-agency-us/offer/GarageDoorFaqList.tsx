/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the garage door website free, or just discounted?",
    answer:
      "The upfront garage door website design and development fee, $2,000 for a standard build, is fully waived when you start an eligible recurring marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, functionality and revision limits before work begins.",
  },
  {
    question: "Which plan do I need for the garage door website?",
    answer:
      "Qualifying services may include Google Ads management, Local SEO, Google Business Profile management, a combined PPC and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your goals and service area.",
  },
  {
    question: "Will the website be built for emergency repair calls?",
    answer:
      "Yes. The agreed scope can include a conversion-focused homepage, pages for repairs and installs, click-to-call on every screen, lead forms, mobile optimization, SEO foundations, call tracking and lead routing. Exact page count and features are confirmed in your proposal.",
  },
  {
    question: "Our door site barely gets calls. Can you rebuild it?",
    answer:
      "Yes. The offer works for garage door companies with no website, an outdated website, or a site that is not producing enough calls and enquiries. Zonic will recommend a replacement or rebuild.",
  },
  {
    question: "What commitment does the garage door offer require?",
    answer:
      "A qualifying plan on a six-month minimum term. Because the website fee is waived as part of that engagement, the written agreement explains hosting, revisions, cancellation and website ownership terms before you approve the project.",
  },
];

export default function GarageDoorFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-garage-door-faq" open={index === 0}>
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
