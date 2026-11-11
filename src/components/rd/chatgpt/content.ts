/* ---------------------------------------------------------------------------
   Copy for /services/chatgpt-business-profile (11 Nov 2026).

   Research (Semrush US + Google Trends + GSC, 11 Nov): OpenAI opened
   "Businesses in ChatGPT" in beta on 10 Nov 2026. Rising this week:
   "chatgpt business hub", "claim your business in chatgpt" (+1,200%),
   "businesses in chatgpt", "chatgpt business profile". Service terms:
   chatgpt search visibility 480, chatgpt brand visibility services 480,
   chatgpt visibility 390, companies that help my brand show up in chatgpt
   170, agency help business show up in chatgpt 110, chatgpt optimization
   140. FAQ questions from Semrush phrase_questions. AI SEO / GEO / AEO
   terms stay with /services/ai-seo-services (linked, not targeted).

   Facts follow OpenAI's launch pages: claiming is free and does not
   guarantee placement; the owner passes the ID check; local businesses
   claim an existing US listing; Business Agents are for eligible US
   ecommerce and online service businesses. Links use [label](href).
--------------------------------------------------------------------------- */

export const PAGE_URL = "/services/chatgpt-business-profile";
export const SERVICE_NAME = "Claim Business in ChatGPT Help";
export const CONTACT_ID = "cg-contact";

export const META = {
  // Google Trends (US, 7 days to 11 Nov): "chatgpt business hub" +3,200%,
  // "claim your business in chatgpt" +1,200%, "... on chatgpt" +900%,
  // "chatgpt business profile(s)" +450%.
  title: "Claim Your Business in ChatGPT | ChatGPT Business Hub Setup",
  description:
    "Zonic Media helps you claim your business on ChatGPT: Business Hub setup, verification and a ChatGPT business profile with the blue check. Get a free check.",
  keywords: [
    "claim your business in chatgpt",
    "claim your business on chatgpt",
    "claim business in chatgpt",
    "chatgpt business hub",
    "chatgpt business profile",
    "businesses in chatgpt",
    "chatgpt business listing",
    "chatgpt business profiles",
    "openai business",
    "chatgpt business agent",
    "chatgpt visibility",
    "get business recommended by chatgpt",
  ],
};

export const HERO = {
  // Two balanced lines so the first one clears the icon ring.
  h1: ["Claim your business in", "ChatGPT with Zonic Media"],
  lead: "OpenAI’s new Businesses in ChatGPT lets you claim a verified profile, and Zonic Media does the work for you, in any niche. We claim and verify your business, keep your details accurate and build the reviews and listings ChatGPT reads, so customers asking for a business like yours find you.",
  cta: "Help me claim my business",
};

export type Feature = {
  id: string;
  title: string;
  body: string;
  points: string[];
  ui: "claim" | "facts" | "agent" | "insights";
};

export const FEATURES: Feature[] = [
  {
    id: "cg-claim",
    title: "We claim and verify your business in ChatGPT for you",
    body: "Our team finds your ChatGPT business listing in Business Hub, claims it with the right method (business phone, email or a DNS record on your website) and walks you through the ID check. Once approved, your ChatGPT business profile shows the blue check.",
    points: [
      "ChatGPT Business Hub setup done for you",
      "Phone, email or DNS verification handled",
      "You stay the owner; Zonic gets agency access",
    ],
    ui: "claim",
  },
  {
    id: "cg-facts",
    title: "We shape how your business shows up in ChatGPT",
    body: "ChatGPT answers from your profile, your website and the listings and reviews around the web. Zonic Media writes your description, categories and policies, then matches the same facts on your [Google Business Profile](/local-seo-google-business-optimization) and directories.",
    points: [
      "Description, logo and categories",
      "Matching hours, phone and address",
      "Product feeds for online stores",
    ],
    ui: "facts",
  },
  {
    id: "cg-agent",
    title: "We set up a Business Agent that turns questions into sales",
    body: "Eligible US online stores and online service businesses can publish a ChatGPT Business Agent that answers from their own product and policy details. Zonic Media writes its guidelines, tests the answers and keeps it current as your offers change.",
    points: [
      "Guidelines written and tested",
      "Answers from your real policies",
      "Every chat points back to your site",
    ],
    ui: "agent",
  },
  {
    id: "cg-insights",
    title: "We show you how customers find you in ChatGPT",
    body: "Business Hub reports mentions, website clicks and the discovery topics where your business appears. Zonic Media reviews them with you each month, tags ChatGPT visits in your analytics and traces them to calls and form leads.",
    points: [
      "Mentions and website clicks",
      "Discovery topics explained",
      "ChatGPT visits tracked to leads",
    ],
    ui: "insights",
  },
];

/** Cell of each icon in the hero sprite (6×4, row by row), shared by the
    icon ring and the niche tiles. */
export const SPRITE = "/images/chatgpt/claim-business-in-chatgpt-niche-icons.webp";
export const SPRITE_CELL = {
  roofing: 0,
  cannabisShelf: 1,
  hvacHouse: 2,
  lawBook: 3,
  paintSwatches: 4,
  realEstateKeys: 5,
  dental: 6,
  garageDoor: 7,
  cannabisBottles: 8,
  homeInspection: 9,
  toolboxRed: 10,
  housePainting: 11,
  pestControl: 12,
  acUnit: 13,
  lawGavel: 14,
  cannabisLeaf: 15,
  houseForSale: 16,
  cleaning: 17,
  paintRoller: 18,
  poolService: 19,
  inspectionChecklist: 20,
  toolboxYellow: 21,
} as const;

/* Owner, 11 Nov: "mention like we help every type of niche". Tiles link
   to each niche's local SEO page (the AI-visibility work lives there). */
export const NICHES = {
  title: "We help every niche show up in ChatGPT",
  lead: "Local trades, clinics, law firms, real estate teams and online stores: if customers ask ChatGPT for a business like yours, Zonic Media can claim, verify and grow your profile.",
  items: [
    { label: "Roofing companies", href: "/services/industry/local-seo-for-roofing-companies", icon: SPRITE_CELL.roofing },
    { label: "HVAC companies", href: "/services/industry/local-seo-services-for-hvac", icon: SPRITE_CELL.hvacHouse },
    { label: "Plumbers", href: "/services/industry/seo-services-for-plumber", icon: SPRITE_CELL.toolboxYellow },
    { label: "Painting contractors", href: "/services/industry/local-seo-for-painting-contractors", icon: SPRITE_CELL.housePainting },
    { label: "Garage door companies", href: "/services/industry/local-seo-for-garage-door-companies", icon: SPRITE_CELL.garageDoor },
    { label: "Cleaning services", href: "/services/industry/local-seo-services-for-residential-cleaning", icon: SPRITE_CELL.cleaning },
    { label: "Pest control", href: "/services/industry/seo-services-for-pest-control", icon: SPRITE_CELL.pestControl },
    { label: "Pool services", href: "/services/industry/local-seo-for-pool-service-companies", icon: SPRITE_CELL.poolService },
    { label: "Dentists", href: "/services/industry/dental-seo-services", icon: SPRITE_CELL.dental },
    { label: "Law firms", href: "/services/industry/local-seo-for-law-firms", icon: SPRITE_CELL.lawGavel },
    { label: "Real estate agents", href: "/services/industry/real-estate-seo-services", icon: SPRITE_CELL.realEstateKeys },
    { label: "Home inspectors", href: "/services/home-inspector-marketing", icon: SPRITE_CELL.homeInspection },
    { label: "Cannabis dispensaries", href: "/services/industry/local-seo-for-cannabis-dispensaries", icon: SPRITE_CELL.cannabisShelf },
    { label: "General contractors", href: "/services/industry/local-seo-for-general-contractors", icon: SPRITE_CELL.toolboxRed },
  ],
  more: { label: "Your niche too", sub: "See all industries", href: "/industries" },
};

export const STEPS = {
  title: "How to claim your business in ChatGPT with Zonic Media",
  lead: "Three steps, and you keep ownership of your profile. Our team handles the setup, the fixes and the follow-up.",
  items: [
    {
      title: "Free ChatGPT visibility check",
      body: "We ask ChatGPT the questions your customers ask, record whether your business is named and note which sources it trusts.",
    },
    {
      title: "Claim, verify and publish",
      body: "We claim your listing in Business Hub, you complete the short ID check, and we publish a complete, accurate profile.",
    },
    {
      title: "Grow your mentions every month",
      body: "We fix weak sources, earn reviews and add answer-ready pages through our [AI SEO services](/services/ai-seo-services), then report what changed.",
    },
  ],
};

export const FAQ = {
  title: "Claiming your business in ChatGPT: common questions",
  items: [
    {
      q: "What does it mean to claim your business in ChatGPT?",
      a: "OpenAI’s Business Hub lets an owner or authorized representative take control of a business profile in ChatGPT. After verification you can update your details, see insights and get a blue check that shows customers the profile is managed by the business itself.",
    },
    {
      q: "How do I claim my business on ChatGPT?",
      a: "Sign in to ChatGPT, open Business Hub from the sidebar and search for your business. Verify it by business phone, business email, a DNS record on your website or a Shopify connection. After OpenAI reviews the claim, the owner completes an ID check, and the profile can then be edited and published. Zonic Media can run every step with you.",
    },
    {
      q: "Can Zonic Media claim my business in ChatGPT for me?",
      a: "Yes. On a short call Zonic Media runs the claim with your own ChatGPT account, then you add us as your agency so we can manage the profile. The one step only you can complete is the identity check, because OpenAI requires it from the owner or an authorized representative.",
    },
    {
      q: "Do you help businesses in my industry get into ChatGPT?",
      a: "Yes. Zonic Media helps every type of business: home services like roofing, HVAC, plumbing and cleaning, dentists and other practices, law firms, real estate teams, cannabis dispensaries and online stores. If customers ask ChatGPT for what you offer, we can claim, verify and grow your profile. See the [industries we work with](/industries).",
    },
    {
      q: "Is claiming a business in ChatGPT free?",
      a: "OpenAI does not charge to claim a business or to publish a Business Agent. ChatGPT ads are a separate, paid product. Our plans cover the setup, the fixes to your listings and website, and the monthly work; see our [pricing](/pricing).",
    },
    {
      q: "Which businesses can claim a profile in ChatGPT right now?",
      a: "The beta opened on November 10, 2026. Eligible businesses with a website can claim, depending on industry, location and OpenAI’s verification checks. Local stores currently claim an existing US ChatGPT business listing, and some business types are still marked as coming soon, so we prepare those profiles and claim as soon as access opens.",
    },
    {
      q: "How do I get my business recommended by ChatGPT?",
      a: "ChatGPT makes its own recommendations, so nobody can buy or promise a placement. It leans on consistent facts and trusted sources: your website, your Google Business Profile, reviews, directory listings and articles that mention you. Zonic Media strengthens each one, which is the core of our [AI SEO services](/services/ai-seo-services).",
    },
    {
      q: "Why isn’t my business showing up in ChatGPT?",
      a: "Usually the sources ChatGPT reads are thin or disagree: no page on your [website](/services/web-design) for the service, different hours or addresses across listings, few recent reviews or no mentions on other sites. Our free visibility check shows which of these is holding you back, starting with your [Google Business Profile](/local-seo-google-business-optimization).",
    },
    {
      q: "Will claiming my business make it rank higher in ChatGPT?",
      a: "Not on its own. OpenAI says claiming does not guarantee higher placement. It makes sure the details ChatGPT shows are accurate and gives you insights; how often you are recommended still depends on the quality and consistency of everything written about you.",
    },
    {
      q: "What is a ChatGPT Business Agent?",
      a: "A Business Agent is a chat assistant for your business inside ChatGPT. It answers questions using the product and policy information you provide, in a separate, labeled conversation. It is available to eligible US ecommerce and online service businesses.",
    },
    {
      q: "How can I see how often ChatGPT mentions my business?",
      a: "Business Hub shows mentions, website clicks and discovery topics for the last 7 or 28 days once activity passes a reporting threshold. ChatGPT also adds utm_source=chatgpt.com to the links it shares, so we can separate those visits in your analytics.",
    },
  ],
};

export const BANNER = {
  title: "Let Zonic Media claim your business in ChatGPT",
  lead: "We set up, verify and track your ChatGPT business profile, so customers who ask ChatGPT can find you and call.",
};

export const CONTACT = {
  title: "Start your ChatGPT business claim with Zonic Media",
  lead: "Zonic Media has optimized 1,500+ Google Business Profiles, and we bring the same care to ChatGPT. Send us your business name and website, and we will check what ChatGPT says about you today and reply with a clear plan to claim, verify and grow your profile. Already on Google Maps? Run our [free rank checker](/google-maps-business-ranking-tool-online) too.",
  points: [
    "Free ChatGPT visibility check",
    "Business Hub claim and verification",
    "Listings and reviews lined up",
    "Monthly mentions report",
  ],
  form: {
    formType: "claim-business-in-chatgpt",
    title: "Request your free ChatGPT check",
    subtitle: "Free, with no contract to sign.",
    submitText: "Get My Free Check",
    messageLabel: "Your website and main services",
    messagePlaceholder:
      "Your website and the services you want ChatGPT to know about",
  },
};

/** Plain text of a [label](href) string, for schema and meta. */
export const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
