/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the solar website really free?",
    answer:
      "Yes. The $2,000 solar website design and development fee is waived when you start a qualifying marketing plan (Local Foundation, Growth or Full Market) at $297/month or above on a six-month term. Your written proposal sets the page count, features and revision rounds before work begins.",
  },
  {
    question: "Why not use a solar company website builder?",
    answer:
      "A builder gives you templates, but you still write the pages, set up tracking and find the traffic. With this offer we design and build the site for you, connect tracking, and run the marketing that sends homeowners to it.",
  },
  {
    question: "What should a solar company website include?",
    answer:
      "Ours can include pages for residential and commercial solar, battery storage, repair and financing, savings explainers, service-area pages, reviews, quote forms, click-to-call, tracking and lead routing. Your proposal confirms the exact scope.",
  },
  {
    question: "Can you replace the solar website we have now?",
    answer:
      "Yes. The offer suits solar companies with no website, an outdated site, or a site that is not producing enough consultation requests. We review your current site first, then recommend a rebuild or a full replacement.",
  },
  {
    question: "Are there commitment or cancellation terms?",
    answer:
      "Yes. The qualifying plan has a six-month minimum term, and the waived $2,000 build fee is set against it. We host the site during the term, and ownership of the site and hosting transfers to you at the end of month six. Cancel earlier and you keep your domain and content, but the website does not transfer.",
  },
];

export default function SolarFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-solar-faq" open={index === 0}>
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
