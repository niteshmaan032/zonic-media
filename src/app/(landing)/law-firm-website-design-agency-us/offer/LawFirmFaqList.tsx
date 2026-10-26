/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "What does ’free’ mean for our law firm website?",
    answer:
      "It means the upfront law firm website design and development fee, valued at $2,000 for a standard build, is waived when your firm starts a qualifying marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, features and revision limits before work begins.",
  },
  {
    question: "Which plans make our firm eligible?",
    answer:
      "Qualifying plans can include Google Ads management, Local SEO, Google Business Profile management, legal content or a combined growth plan. Zonic confirms eligibility after reviewing your practice areas, markets and intake goals.",
  },
  {
    question: "What pages come with the law firm website?",
    answer:
      "The agreed scope can include a homepage, attorney bios, practice-area and county pages, consultation forms, click-to-call, mobile layout, SEO basics, intake tracking and lead routing. Your firm reviews all copy against your state’s advertising rules before launch.",
  },
  {
    question: "Can Zonic rebuild our current law firm website?",
    answer:
      "Yes. The offer works for firms with no website, an outdated site, or one that brings in too few qualified consultation requests. Zonic reviews your current site and recommends a rebuild or replacement.",
  },
  {
    question: "How do the commitment and cancellation terms work?",
    answer:
      "Because the website fee is waived as part of a recurring marketing engagement, your written agreement explains the minimum term, hosting, revisions, cancellation and website ownership before you approve the project.",
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
