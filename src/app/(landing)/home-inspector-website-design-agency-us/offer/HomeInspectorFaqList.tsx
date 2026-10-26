/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the home inspector website free?",
    answer:
      "Yes. The $2,000 home inspector website design and development fee is waived when you start a qualifying marketing plan (Local Foundation, Growth or Full Market) at $297/month or above on a six-month term. Your written proposal sets the page count, features and revision rounds first.",
  },
  {
    question: "What is the best website builder for home inspectors?",
    answer:
      "Builders made for inspectors give you templates, but you still write, design and market the site yourself. We handle the home inspector website design, booking setup and tracking, then run the marketing that sends buyers and agents to it.",
  },
  {
    question: "What should a home inspection website include?",
    answer:
      "Good home inspection website design puts booking first. Ours can include online scheduling, a sample report, pages for each inspection and add-on, an agent page, certifications, service-area pages, reviews, tracking and lead routing.",
  },
  {
    question: "Can you replace my current inspection website?",
    answer:
      "Yes. The offer suits inspectors with no website, an outdated site, or a site that is not producing enough bookings. We review your current site first, then recommend a rebuild or a full replacement.",
  },
  {
    question: "How long is the term, and can I cancel?",
    answer:
      "The qualifying plan runs on a six-month minimum term, and the waived $2,000 build fee is set against it. We host the site during the term, and ownership of the site and hosting transfers to you at the end of month six. If you cancel sooner, you keep your domain and content, but the website does not transfer.",
  },
];

export default function HomeInspectorFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-home-inspector-faq" open={index === 0}>
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
