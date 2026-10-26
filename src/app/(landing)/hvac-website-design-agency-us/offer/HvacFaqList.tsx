/** Exported so the page can emit FAQPage schema from the same source. */
export const FAQS = [
  {
    question: "Does the free HVAC website cost anything upfront?",
    answer:
      "No. The $2,000 HVAC website design and development fee is waived when your company starts a qualifying marketing plan at $297/month or above on a six-month term. Your written proposal lists the page count, features and revision rounds before any work begins.",
  },
  {
    question: "What is in your HVAC marketing packages?",
    answer:
      "Our three qualifying packages, Local Foundation, Growth and Full Market, can include HVAC Google Ads, local SEO, Google Business Profile management, seasonal campaigns and call tracking. Each includes the website build.",
  },
  {
    question: "Can an HVAC website bring in free HVAC leads?",
    answer:
      "Yes, over time. Calls from Google Maps, your Google Business Profile and organic search have no cost per click. The site is built to rank for your services and cities, and we track which leads came in free.",
  },
  {
    question: "What does a good HVAC marketing website need?",
    answer:
      "Clear AC, heating and heat pump pages, emergency call buttons, maintenance plan sign-up, financing details, city pages, reviews, booking forms, fast mobile pages, tracking and lead routing. If you already have a site, we can rebuild or replace it.",
  },
  {
    question: "Do you build service-area and seasonal pages?",
    answer:
      "Yes. The standard build covers a homepage plus ten pages and up to five city pages, which usually holds AC repair, heating, maintenance and your main service areas. More city or service pages can be added through the expanded city-page program on the Full Market plan.",
  },
  {
    question: "What is the minimum term, and what if we cancel?",
    answer:
      "The qualifying plan runs on a six-month minimum term, and the waived $2,000 build fee is set against it. We host the site for those six months, and ownership of the site and hosting transfers to you at the end of month six. Cancel earlier and you keep your domain and your content, but the website does not transfer. Your written proposal restates this before you sign.",
  },
];

export default function HvacFaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((faq, index) => (
        <details key={faq.question} name="hwd-faq" open={index === 0}>
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
