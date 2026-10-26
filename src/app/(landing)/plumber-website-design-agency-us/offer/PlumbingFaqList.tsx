/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Is the plumber website free, with no build invoice?",
    answer:
      "Yes. The $2,000 plumbing website design and development fee is waived when your company starts a qualifying marketing plan at $297/month or above on a six-month term. Your written proposal sets the page count, features and revision rounds before work begins.",
  },
  {
    question: "Which plumbing marketing plans include the free site?",
    answer:
      "Local Foundation, Growth and Full Market all qualify. Plans can include plumbing Google Ads, local SEO, Google Business Profile management, emergency campaigns and call tracking. We confirm the fit after reviewing your services, territory and goals.",
  },
  {
    question: "What should a plumber website have?",
    answer:
      "Ours can include a homepage built for emergency calls, drain cleaning, water heater, sewer line and leak detection pages, city pages, reviews, booking forms, click-to-call, fast mobile pages, SEO basics, tracking and lead routing. Your proposal confirms the exact scope.",
  },
  {
    question: "We already have a plumbing website. Can you replace it?",
    answer:
      "Yes. The offer suits plumbers with no website, an old site, or a site that is not bringing in enough service calls and estimate requests. We review your current site first, then recommend a rebuild or a full replacement.",
  },
  {
    question: "Do you build emergency and city pages?",
    answer:
      "Yes. The standard build covers a homepage plus ten pages and up to five city pages, which usually holds emergency plumbing, drains, water heaters and your main service areas. More city or service pages can be added through the expanded city-page program on the Full Market plan.",
  },
  {
    question: "How long do we commit, and what if we cancel?",
    answer:
      "You commit to the qualifying plan for a six-month minimum term, and the waived $2,000 build fee is set against that term. We host the site for those six months, then ownership of the site and hosting transfers to you at the end of month six. If you cancel sooner, you keep your domain and content, but the website does not transfer. Your written proposal restates this before you sign.",
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
