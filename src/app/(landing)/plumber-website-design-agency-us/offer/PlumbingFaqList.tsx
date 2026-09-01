/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the plumbing website really free?",
    answer:
      "The upfront plumbing website design and development fee — $2,000 for a standard build — is waived when your company starts an eligible recurring marketing plan at $895/month or above on a six-month term. Your written proposal defines the exact page count, functionality, and revision limits before work begins.",
  },
  {
    question: "Which plumbing marketing plans qualify?",
    answer:
      "Qualifying services may include plumbing Google Ads management, Local SEO, Google Business Profile management, emergency-service campaigns, or a combined plumbing growth plan. Zonic confirms eligibility after reviewing your services, territory, and lead goals.",
  },
  {
    question: "What is included in the plumbing website?",
    answer:
      "The agreed scope can include a conversion-focused homepage, emergency, drain, water heater, sewer, and leak-detection pages, service-area pages, booking forms, click-to-call actions, mobile optimization, SEO foundations, tracking, and lead routing. Exact page count and functionality are confirmed in your proposal.",
  },
  {
    question: "Can Zonic replace our existing plumbing website?",
    answer:
      "Yes. This offer works for plumbing companies with no website, an outdated site, or a website that is not generating enough service calls and estimate requests. We recommend the right replacement or rebuild approach after reviewing the current site.",
  },
  {
    question: "Do you build emergency and service-area pages too?",
    answer:
      "Yes. The standard build covers a homepage plus ten pages and up to five city pages, which is where emergency plumbing, drains, water heaters, and your priority service areas usually live. Additional city or service pages can be added under the expanded city-page program on the Full Market plan.",
  },
  {
    question: "Are there commitment or cancellation terms?",
    answer:
      "Yes. The qualifying plan runs on a six-month minimum term, and that’s what the waived $2,000 build fee is set against. We host the site during those six months; ownership of the site and hosting transfers to you at the end of month six. If you cancel before then, you keep your domain and your content, but the website doesn’t transfer. Your written proposal restates all of this before you sign anything.",
  },
];

export default function PlumbingFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="pwd-faq" open={index === 0}>
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
