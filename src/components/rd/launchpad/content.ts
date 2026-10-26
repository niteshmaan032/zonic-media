/* LaunchPad redesign draft. Copy re-optimized 24 Oct 2026 around Semrush
   US terms (small business startup package, business launch services,
   business startup services, small business website package, start a
   business online) and new-business question searches. The three plans
   keep the published names, prices and inclusions exactly; only the
   wording is new. FAQs are shared with the FAQPage JSON-LD. No price
   estimates: the cost answer quotes the published starting prices only. */

export const LP_FAQS: { question: string; answer: string }[] = [
  {
    question: "How much does the LaunchPad startup package cost?",
    answer:
      "Three fixed packages: Starter Launch from $950, Growth Launch from $1,750 and Pro Launch from $4,200. Each lists exactly what's included, so you know the scope before work starts.",
  },
  {
    question: "Do I need a website for my new business?",
    answer:
      "Yes. Most customers check a business online before they call, and your website is the one channel you fully control. It also gives your Google Business Profile somewhere to send people, so every package includes one.",
  },
  {
    question: "How quickly can a new business go live online?",
    answer:
      "Most launches go live in 2 to 3 weeks. Timing varies with the package and how fast you review our drafts.",
  },
  {
    question: "What do I need to have ready before we start?",
    answer:
      "Only your idea: what you'll sell, who you'll serve and where. No technical or marketing skills needed. We build everything, and you review and approve each piece.",
  },
  {
    question: "Can I get a logo and a website for my new business together?",
    answer:
      "Yes. Every LaunchPad plan bundles logo design with a website from the same team, so your colors, fonts and message match everywhere from day one.",
  },
  {
    question: "Why is my new business invisible on Google?",
    answer:
      "New businesses start with no history, no reviews and often an unverified Google Business Profile, which can't appear on Maps. We set up your profile and a search-ready website, and Growth and Pro add local SEO groundwork.",
  },
  {
    question: "Will customers start calling as soon as I launch?",
    answer:
      "Nobody can promise a date; it depends on your market and competition. We launch you with everything customers and Google look for, so inquiries can start as soon as people find you.",
  },
  {
    question: "Do you help after the business is live?",
    answer:
      "Yes. Pro Launch includes 30 days of post-launch support, and any client can add local SEO, Google Ads or AI search optimization month to month when ready to grow.",
  },
  {
    question: "Can you fix the setup of a business that's already open?",
    answer:
      "Yes. We can rebuild an outdated website, verify or repair your Google Business Profile and add local SEO foundations without starting over.",
  },
  {
    question: "Why hire one team instead of separate freelancers?",
    answer:
      "One team means one plan, one contact and a brand, website and Google profile built to work together. With separate freelancers you manage the handoffs, and launches stall in the gaps.",
  },
  {
    question: "What should be live online before opening day?",
    answer:
      "A verified Google Business Profile under the right category, a quick-loading site that lists what you do and where, matching listings everywhere, a way to request reviews, and lead tracking. Your package decides how far we take each.",
  },
];

/* Names, prices and inclusions are the published offer: do not change
   them. Wording only. */
export const LP_PLANS = [
  {
    name: "Starter Launch",
    price: "$950",
    description: "A clean, professional start for getting your business online",
    features: [
      "Logo design and basic brand styling",
      "Website with 2 to 5 pages",
      "Google Business Profile set up",
      "Contact form connected",
      "Layout optimized for mobile",
    ],
    ideal: "Best for a simple, professional start",
    cta: "Choose Starter",
    featured: false,
  },
  {
    name: "Growth Launch",
    price: "$1,750",
    description: "For owners who want to be found on Google and win real leads",
    features: [
      "Everything in Starter, plus:",
      "Conversion-built website, 5 to 7 pages",
      "Full Google Business Profile optimization",
      "Social media profiles set up and branded",
      "Local SEO foundations in place",
      "Lead capture system connected",
    ],
    ideal: "Best if you want customers from launch day",
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Pro Launch",
    price: "$4,200",
    description: "For launches that need to grow fast and stand out locally",
    features: [
      "Everything in Growth, plus:",
      "Premium custom-designed website",
      "Advanced local SEO configuration",
      "Google Ads campaign set up",
      "Meta Ads campaign set up",
      "Landing page dedicated to your ads",
      "Lead tracking set up",
      "30 days of support after launch",
    ],
    ideal: "Best if you plan to scale quickly",
    cta: "Choose Pro",
    featured: false,
  },
];

export const LP_PROBLEMS = [
  "A logo, website, Google listing, social profiles and a way to take bookings, all at once",
  "Weeks lost comparing site builders, designers and DIY tutorials",
  "Several freelancers who never talk to each other",
  "A half-finished setup that customers can't find on Google",
];

export const LP_SOLUTION = [
  "Your idea turned into a business that's ready to open",
  "One point of contact from first call to launch day",
  "No vendors to chase or coordinate",
  "Brand, website and Google profile built to match",
  "Live in 2 to 3 weeks",
];
