/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is there a catch with the free auto repair website?",
    answer:
      "Only that it comes with a marketing plan. The upfront auto repair website design and development fee, valued at $2,000 for a standard build, is waived when you start a qualifying plan at $297/month or above on a six-month term. Your written proposal sets the pages, features and revision limits.",
  },
  {
    question: "Which plans qualify my shop?",
    answer:
      "Qualifying plans can include Google Ads management, Local SEO, Google Business Profile management, a combined ads and Local SEO plan, or a broader growth plan. Zonic confirms eligibility after reviewing your shop, services and market.",
  },
  {
    question: "Can customers book appointments on the website?",
    answer:
      "Yes. The agreed scope can include appointment request forms, a service menu, repair pages, click-to-call buttons, mobile layout, SEO basics, tracking and lead routing. If your shop software offers online booking, we can link to it. Your proposal confirms the details.",
  },
  {
    question: "Our shop has an old website. Can Zonic replace it?",
    answer:
      "Yes. The offer works for shops with no website, an outdated site, or one that brings in too few calls and bookings. Zonic reviews your current site and recommends a rebuild or replacement.",
  },
  {
    question: "What terms come with the free shop website?",
    answer:
      "Because the website fee is waived as part of a recurring marketing engagement, your written agreement explains the minimum term, hosting, revisions, cancellation and website ownership before you approve the project.",
  },
];

export default function AutoRepairFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="ofr-auto-repair-faq" open={index === 0}>
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
