/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the roofing website free, or is there a catch?",
    answer:
      "The $2,000 roofing website design and development fee is waived when your company starts a qualifying marketing plan at $297/month or above on a six-month term. There is no separate build invoice. Your written proposal sets the page count, features and revision rounds before work begins.",
  },
  {
    question: "Which roofing marketing plans qualify for the free site?",
    answer:
      "Local Foundation, Growth and Full Market all qualify. Plans can include roofing Google Ads, local SEO, Google Business Profile management, storm-response campaigns and call tracking. We confirm eligibility after reviewing your services, territory and goals.",
  },
  {
    question: "What should a roofing company website include?",
    answer:
      "Ours can include a homepage built around inspection requests, roof repair and replacement pages, storm damage and insurance claim pages, project galleries, financing details, city pages, click-to-call, mobile layouts, tracking and lead routing. Your proposal confirms the exact scope.",
  },
  {
    question: "Can you rebuild the roofing website we already have?",
    answer:
      "Yes. The offer suits roofers with no website, an outdated site, or a site that is not producing enough inspection and estimate requests. We review your current site first, then recommend a rebuild or a full replacement.",
  },
  {
    question: "Do you build storm damage and city pages?",
    answer:
      "Yes. The standard build covers a homepage plus ten pages and up to five city pages, which usually holds roof repair, replacement, storm damage and your main service areas. More city or service pages can be added through the expanded city-page program on the Full Market plan.",
  },
  {
    question: "How long is the commitment, and what if we cancel?",
    answer:
      "The qualifying plan has a six-month minimum term, and the waived $2,000 build fee is set against it. We host the site during those six months, and ownership of the site and hosting transfers to you at the end of month six. If you cancel before then, you keep your domain and your content, but the website does not transfer. Your written proposal restates all of this before you sign anything.",
  },
];

export default function RoofingFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="rwd-faq" open={index === 0}>
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
