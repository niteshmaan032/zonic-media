/* Web design page redesign: FAQs and process steps. Copy re-researched and
   rewritten 24 Oct 2026 (content-optimization brief): fresh wording, no
   live-page sentences and no price estimates. Build time: 2–3 weeks
   (owner, 25 Oct 2026). FAQs feed the FAQPage JSON-LD. */

export const WEB_FAQS: { question: string; answer: string }[] = [
  {
    question: "How long does a small business website take to build?",
    answer:
      "We launch most small business websites within 2 to 3 weeks. Your page count and how quickly content and feedback come back decide where you land in that window. You get a written timeline with your quote, and we can launch the key pages first.",
  },
  {
    question: "How much does a website design company charge?",
    answer:
      "Every build gets one fixed price, set after a free consultation and based on pages, features and content. It is agreed before work starts and does not change. Service businesses on a qualifying monthly plan can get their site through our free website offer.",
  },
  {
    question: "Will a website redesign hurt my Google rankings?",
    answer:
      "Not when it is planned properly. We list every existing URL, keep the content that ranks, set up 301 redirects and submit a new sitemap. After launch we watch Search Console, so the traffic you earned carries over.",
  },
  {
    question: "Do you write the content for my website?",
    answer:
      "Yes. Our team writes the copy from a short interview with you, using the words your customers search for. You approve every page before launch, or we can work from your existing text and photos.",
  },
  {
    question: "Who owns the website after it is built?",
    answer:
      "You do. The domain, design, content and accounts are set up in your name with full access for you. If you ever switch providers, the site and its files go with you.",
  },
  {
    question: "Which platform is best for a small business website?",
    answer:
      "For most service businesses we recommend WordPress: fast, flexible and easy for your team to edit. Online stores usually run best on Shopify. We write custom code only when a project needs features those platforms handle poorly.",
  },
  {
    question: "Will my new website show up on Google and in AI search?",
    answer:
      "Every site launches search-ready: a page per service, clean headings, schema markup and fast load times, so Google and AI assistants can understand and cite your business. Ranking for competitive searches still takes ongoing local SEO and reviews.",
  },
  {
    question: "Can you design a website for my industry?",
    answer:
      "Yes. We work with businesses in 20+ industries, from home services and healthcare to law firms and real estate. Each site is planned around how your customers pick a provider, with the proof and calls to action your field needs.",
  },
];

/* Tags are stage names, not weeks; the build time (2–3 weeks) is in the
   FAQ. */
export const WEB_STEPS = [
  {
    tag: "Discover",
    title: "Goals and Customer Research",
    desc: "We study your goals, your customers and the sites you compete with, then plan pages around what wins customers in your market.",
  },
  {
    tag: "Design",
    title: "Wireframes, Then Your Design",
    desc: "Page layouts come first, then a custom design in your colors and style, refined with you until it feels right.",
  },
  {
    tag: "Build",
    title: "Build, Speed and SEO Setup",
    desc: "We code a fast, responsive site and add SEO structure, schema and call and form tracking as each page goes up.",
    chips: ["Responsive", "Schema", "Tracking"],
  },
  {
    tag: "Launch",
    title: "Device Testing and Go-Live",
    desc: "Pages are tested on phones, tablets and every major browser, then launched with redirects and uptime monitoring in place.",
    chips: ["Devices", "Redirects", "Uptime"],
  },
];
