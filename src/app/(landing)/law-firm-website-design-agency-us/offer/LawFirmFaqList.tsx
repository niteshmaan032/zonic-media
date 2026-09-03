/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the law-firm website really free?",
    answer:
      "The upfront law firm website design and development fee — $2,000 for a standard build — is waived when you start an eligible recurring marketing plan at $895/month or above on a six-month term. Your written proposal defines the exact page count, functionality, and revision limits before work begins.",
  },
  {
    question: "Which legal marketing plans qualify?",
    answer:
      "Qualifying services may include Google Ads management, Local SEO, Google Business Profile management, legal content strategy, or a combined law-firm growth plan. Zonic confirms eligibility after reviewing your practice areas, market, and intake goals.",
  },
  {
    question: "What is included in the law-firm website?",
    answer:
      "The agreed scope can include a conversion-focused homepage, attorney profiles, practice-area and market pages, consultation forms, click-to-call actions, mobile optimization, SEO foundations, intake tracking, and lead routing.",
  },
  {
    question: "Can Zonic replace our existing law-firm website?",
    answer:
      "Yes. This offer works for firms with no website, an outdated site, or a website that is not generating enough qualified consultation requests. We recommend the right replacement or rebuild approach after reviewing the current site.",
  },
  {
    question: "Are there commitment or cancellation terms?",
    answer:
      "Yes. Because the website fee is waived as part of a recurring marketing engagement, the written agreement will explain any minimum commitment, hosting, revision, cancellation, and website ownership terms before you approve the project.",
  },
];

export default function LawFirmFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-law-firm-faq" open={index === 0}>
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
