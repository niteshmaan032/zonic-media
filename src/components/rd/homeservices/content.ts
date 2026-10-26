/* Local SEO for home services — redesign draft copy (re-optimized 24 Oct
   2026, docs/content-optimization-brief.md "Special care").

   The draft started as a verbatim copy of the live page (the site's top page
   for clicks and impressions). The copy is now fresh, research-led wording
   (Semrush US resource_organic / phrase_these / phrase_questions, 24 Oct):
   - the exact phrases the live URL ranks for stay in the title, the H1 and
     the H2s / FAQ questions that carry them ("local seo for home service
     businesses / companies", "seo services for home service companies",
     "home service seo agency", "home services seo company", "seo experts for
     home services", "organic search for home service businesses", "home
     improvement seo services");
   - every internal link is kept (anchor text rewritten), the FAQ count stays
     at 11 and the FAQPage JSON-LD is built from HS_FAQS;
   - verified numbers only (1,500+ GBPs optimized, 900+ reinstated, 5.0
     Google rating, 20+ industries, 0% ad-spend markup, the $297 / $750 /
     $1,500 plans, month to month). No budgets, no invented results, no other
     company named. */

export const HS_FAQS: { question: string; answer: string }[] = [
  {
    question: "How does local SEO for home service businesses work?",
    answer:
      "It makes your business easy for Google to trust and show nearby. We optimize your Google Business Profile, build service and town pages, earn reviews and citations, and keep your details consistent, lifting you in Maps, search and AI answers.",
  },
  {
    question: "Why is SEO important for home service contractors?",
    answer:
      "Homeowners with a leak or a dead furnace search first and call fast. Ranking in the Map Pack and the top results puts you in front of them at that moment, bringing in calls and estimate requests without paying per lead.",
  },
  {
    question: "How soon do local SEO results show up?",
    answer:
      "Profile and on-page fixes often show movement in two to three months. Stronger Map Pack spots and steady lead growth usually take four to six, depending on how crowded your trade and towns are.",
  },
  {
    question:
      "Can local SEO get my business into Google AI Overviews and ChatGPT?",
    answer:
      "It gives you the best chance. AI tools lean on the same signals as Google Maps: a full profile, steady reviews, consistent listings and clear service pages, plus the structured data we add.",
  },
  {
    question: "Which trades benefit most from local SEO for contractors?",
    answer:
      "Any trade that works at the customer's property: plumbers, HVAC and electrical contractors, roofers, remodelers, landscapers, pest control and cleaning crews. We serve 20+ industries; pick yours in the trade list above.",
  },
  {
    question: "What do your home services SEO services include?",
    answer:
      "Google Business Profile optimization, local keyword research, service and town pages, on-page SEO, citation cleanup, review generation, local links, schema and a monthly report. Higher plans add Search ads and Local Services Ads setup.",
  },
  {
    question: "How does Google Business Profile optimization help contractors?",
    answer:
      "It is the listing people see in the Map Pack, where many local calls start. We set your categories, services and service area, add job photos, post updates and answer reviews so it ranks and converts.",
  },
  {
    question: "Should we use local SEO, Local Services Ads or Google Ads?",
    answer:
      "Often a mix. Paid search and Local Services Ads produce calls fast but stop when spending stops. Local SEO takes longer, then keeps working with no cost per click. We manage ads with 0% ad-spend markup.",
  },
  {
    question: "What does home services SEO cost with Zonic Media?",
    answer:
      "We publish three plans: $297, $750 or $1,500 per month, billed month to month. The right one depends on how many services, towns and locations you want to rank, and a free audit shows which fits.",
  },
  {
    question: "What makes Zonic Media SEO experts for home services?",
    answer:
      "Local growth for service businesses is our core work. We have optimized 1,500+ Google Business Profiles, reinstated 900+ suspended ones and hold a 5.0 Google rating from owners who judge us on calls and booked jobs.",
  },
  {
    question:
      "How does local SEO for home service companies differ from storefront SEO?",
    answer:
      "Customers don't visit you; you go to them. Google weighs your declared service area, the towns your site and profile name, and distance from your verified address, so we build town pages and town-named reviews and track rank across your territory.",
  },
];

/** "Why it matters" cards (the banner card with the second H2 sits between
    the third and fourth). */
export const ESSENTIAL_CARDS = [
  {
    title: "More Calls From Ready-to-Hire Homeowners",
    desc: "When a pipe bursts or the AC quits, people call the first trusted name they see. We make that name yours.",
  },
  {
    title: "Higher Spots in Every Town You Serve",
    desc: "We lift your rank across the whole service area, not just around your office, so you appear ahead of nearby crews.",
  },
  {
    title: "Searches That Turn Into Booked Jobs",
    desc: "Clear service pages, one-tap calling and strong reviews turn a quick search into an estimate request or a booked visit.",
  },
  {
    title: "A Lead Flow You Don't Have to Rent",
    desc: "Rankings keep working after the month ends, so you lean less on referrals, ad spend and shared lead sites.",
  },
];

/** "Why contractors hire us" accordion. */
export const WHY_ITEMS = [
  {
    title: "01. Homeowners Hire From the First Few Names",
    content:
      "Someone with a leak or a dead furnace rarely scrolls. They call one of the first names Google shows, and the job is booked before your phone rings.",
  },
  {
    title: "02. A Top 3 Spot on Google Maps",
    content:
      "The Map Pack sits above the regular results for near-me searches. We work on what moves you into it: categories, services, reviews, photos and town relevance.",
  },
  {
    title: "03. Steady Work Beyond Referrals",
    content:
      "Referrals arrive in waves. Local SEO adds a steady stream of service calls and estimate requests, so slow weeks are easier to fill.",
  },
  {
    title: "04. Reviews and Photos That Earn Trust",
    content:
      "Homeowners compare ratings, recent reviews and job photos before they call. We help you earn reviews that name the service and the town.",
  },
  {
    title: "05. Less Spend on Ads and Lead Sites",
    content:
      "Paid clicks and shared leads stop the day the budget does. Organic rankings keep the calls coming, so ads become a choice, not a lifeline.",
  },
  {
    title: "06. A Place in AI Answers",
    content:
      "Google AI Overviews and ChatGPT now suggest local pros by name, drawing on the same profiles, reviews and service pages that win Maps.",
  },
];

/** Service cards (the "Talk to SEO experts" banner runs under them). */
export const PRO_CARDS = [
  {
    title: "Keyword Targeting by Service and Town",
    desc: "We match the jobs you want most to the words homeowners type, like water heater repair near me, then build pages around them.",
  },
  {
    title: "Websites That Turn Visits Into Calls",
    desc: "Fast mobile pages, tap-to-call buttons, proof of your work and short forms that turn visitors into calls.",
  },
  {
    title: "Google Business Profile Tuning for the Map Pack",
    desc: "Categories, services, photos, posts, review replies and citations kept in sync, so your profile climbs in each town.",
  },
  {
    title: "Service-Area Pages and Job Content",
    desc: "A page for each core service and town, plus answers to the questions homeowners ask, written to rank and to win the call.",
  },
  {
    title: "Visibility in AI Overviews and ChatGPT",
    desc: "We structure your site, schema and reviews so Google AI Overviews, ChatGPT and Gemini know what you do, where, and why to recommend you.",
  },
];

/** Industry groups: every live link kept, anchor text rewritten. */
export const INDUSTRY_GROUPS: {
  title: string;
  links: [string, string][];
}[] = [
  {
    title: "Home Improvement SEO Services",
    links: [
      [
        "Bathroom remodeler SEO",
        "/services/industry/local-seo-for-bathroom-remodelers",
      ],
      [
        "Kitchen remodeler SEO",
        "/services/industry/local-seo-for-kitchen-remodelers",
      ],
      [
        "General contractor SEO",
        "/services/industry/local-seo-for-general-contractors",
      ],
      [
        "Flooring company SEO",
        "/services/industry/local-seo-for-flooring-companies",
      ],
      [
        "Window and door company SEO",
        "/services/industry/local-seo-for-window-and-door-companies",
      ],
      [
        "Painting contractor SEO",
        "/services/industry/local-seo-for-painting-contractors",
      ],
    ],
  },
  {
    title: "Repair, Install & Emergency Trades",
    links: [
      ["Electrician SEO", "/services/industry/local-seo-for-electricians"],
      ["Plumber SEO", "/services/industry/seo-services-for-plumber"],
      ["HVAC SEO", "/services/industry/local-seo-services-for-hvac"],
      [
        "Garage door company SEO",
        "/services/industry/local-seo-for-garage-door-companies",
      ],
      [
        "Roofing company SEO",
        "/services/industry/local-seo-for-roofing-companies",
      ],
      [
        "Appliance repair SEO",
        "/services/industry/local-seo-for-appliance-repair",
      ],
      ["Towing company SEO", "/services/industry/seo-services-for-car-towing"],
    ],
  },
  {
    title: "Outdoor, Cleaning & Specialty Crews",
    links: [
      [
        "Landscaping company SEO",
        "/services/industry/local-seo-for-landscaping-companies",
      ],
      ["Pest control SEO", "/services/industry/seo-services-for-pest-control"],
      [
        "Pool service SEO",
        "/services/industry/local-seo-for-pool-service-companies",
      ],
      [
        "Gutter company SEO",
        "/services/industry/local-seo-for-gutter-companies",
      ],
      [
        "Tree service SEO",
        "/services/industry/local-seo-for-tree-service-companies",
      ],
      ["Solar company SEO", "/services/industry/local-seo-for-solar-companies"],
      [
        "Commercial cleaning SEO",
        "/services/industry/local-seo-for-commercial-cleaning",
      ],
      [
        "Residential cleaning SEO",
        "/services/industry/local-seo-services-for-residential-cleaning",
      ],
    ],
  },
  {
    title: "Health, Legal & Real Estate Practices",
    links: [
      [
        "Chiropractor SEO",
        "/services/industry/chiropractor-local-seo-services",
      ],
      ["Dental SEO", "/services/industry/dental-seo-services"],
      ["Pediatric practice SEO", "/services/industry/pediatricians"],
      ["Law firm SEO", "/services/industry/local-seo-for-law-firms"],
      ["Real estate SEO", "/services/industry/real-estate-seo-services"],
    ],
  },
];

/** "Why Zonic Media" reasons (each one syncs with a panel on the left). */
export const CHOOSE_CARDS = [
  {
    title: "We Know How Homeowners Search",
    desc: "Emergency, seasonal and planned jobs get searched in different ways. We target each one, from burst pipe plumber to kitchen remodel estimate.",
  },
  {
    title: "Calls and Jobs, Not Vanity Metrics",
    desc: "We report Map Pack rank, calls, estimate requests and booked jobs. Impressions and follower counts don't pay your crew.",
  },
  {
    title: "Plain Monthly Reports",
    desc: "Each month you see what we did, what moved and what comes next. Plans run month to month, so we keep earning your business.",
  },
  {
    title: "A System Built to Keep Growing",
    desc: "Reviews, pages and citations stack up over time, so each month builds on the last instead of starting from zero.",
  },
];

/** Trades in the scrolling strip under the hero. */
export const MARQUEE = [
  "Plumbers",
  "HVAC Contractors",
  "Roofers",
  "Electricians",
  "Garage Door Pros",
  "Landscapers",
  "Pest Control",
  "Pool Service",
  "Tree Care",
  "Gutter Installers",
  "Solar Installers",
  "Painters",
  "Flooring Installers",
  "Window & Door Installers",
  "Kitchen Remodelers",
  "Bathroom Remodelers",
  "General Contractors",
  "Appliance Repair",
];
