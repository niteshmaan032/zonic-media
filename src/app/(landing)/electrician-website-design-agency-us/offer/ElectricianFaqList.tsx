/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the electrician website free to build?",
    answer:
      "Yes. The $2,000 electrician website design and development fee is waived when you start a qualifying marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, features and revision rounds first.",
  },
  {
    question: "Where can I find free advertising for electricians?",
    answer:
      "Your Google Business Profile, local listings and reviews are the main free options. Every qualifying plan includes Google Business Profile work, and Growth and Full Market add Google Ads. We confirm the right plan after reviewing your market.",
  },
  {
    question: "What should an electrician website include?",
    answer:
      "Ours can include a homepage built for calls and quotes, pages for panel upgrades, EV chargers, rewiring and emergency work, license proof, city pages, reviews, click-to-call, tracking and lead routing. Your proposal confirms the exact scope.",
  },
  {
    question: "Can you replace the electrical website we have now?",
    answer:
      "Yes. The offer suits electricians with no website, an outdated site, or a site that is not bringing in enough quote requests. We review your current site first, then recommend a rebuild or a full replacement.",
  },
  {
    question: "What are the commitment and cancellation terms?",
    answer:
      "The qualifying plan has a six-month minimum term, and the waived $2,000 build fee is set against it. We host the site during the term, and ownership of the site and hosting transfers to you at the end of month six. If you cancel earlier, you keep your domain and content, but the website does not transfer.",
  },
];

export default function ElectricianFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-electrician-faq" open={index === 0}>
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
