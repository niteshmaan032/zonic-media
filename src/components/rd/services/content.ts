/* Services hub redesign (23 Oct 2026; copy re-optimized 24 Oct 2026):
   copy shared by the page and its JSON-LD. Rewritten from Semrush US data
   (24 Oct): digital marketing services 33,100 · full service digital
   marketing agency 4,400 · digital marketing services for small business
   2,900 · small business marketing services 1,900 · seo and digital
   marketing services 1,300 · local digital marketing services 720. Child
   anchors carry the child pages' terms (local SEO services 27,100, AI SEO
   services 4,400). No live wording kept; no price estimates. */

export type ServiceGroup = {
  key: string;
  label: string;
  title: string;
  body: string;
  points: { t: string; d: string }[];
  links: { label: string; href: string }[];
  cta: { label: string; href: string };
};

/** One row per service area; every child page the hub links down to. */
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    key: "search",
    label: "SEO & AI search",
    title: "Local SEO Services and AI Search Optimization",
    body: "We fix technical issues, publish a page for every service and town you cover, earn local links and write answer-first content that ChatGPT and Google AI Overviews can quote.",
    points: [
      { t: "Technical SEO", d: "Fast, crawlable pages." },
      { t: "Local SEO", d: "Every town you serve." },
      { t: "AI search", d: "Named in AI answers." },
      { t: "Rank tracking", d: "Matched to calls and forms." },
    ],
    links: [
      { label: "SEO services", href: "/services/seo-services" },
      {
        label: "Local SEO for home service companies",
        href: "/services/local-seo-for-home-services",
      },
      {
        label: "Local SEO services for small business",
        href: "/services/local-seo-for-small-business",
      },
      { label: "AI SEO services", href: "/services/ai-seo-services" },
      {
        label: "Local SEO packages and pricing",
        href: "/services/local-seo-packages",
      },
    ],
    cta: { label: "See Our SEO Services", href: "/services/seo-services" },
  },
  {
    key: "gbp",
    label: "Google Business Profile",
    title: "Google Business Profile Optimization and Recovery",
    body: "From video verification to weekly posts, review requests and quick appeals if a listing gets suspended. So far we have optimized 1,500+ profiles and reinstated 900+.",
    points: [
      { t: "Verification help", d: "Video checks prepped." },
      { t: "Optimization", d: "Categories, services, photos." },
      { t: "Review growth", d: "Asked after every job." },
      { t: "Reinstatement", d: "No fix, no charge." },
    ],
    links: [
      {
        label: "Google Business Profile optimization",
        href: "/local-seo-google-business-optimization",
      },
      {
        label: "Suspended profile reinstatement",
        href: "/services/gbp-reinstatement-service",
      },
      {
        label: "GBP verification help",
        href: "/services/gmb-verification-help",
      },
      {
        label: "Free Google Maps rank checker",
        href: "/google-maps-business-ranking-tool-online",
      },
    ],
    cta: {
      label: "Optimize My Google Profile",
      href: "/local-seo-google-business-optimization",
    },
  },
  {
    key: "web",
    label: "Web design",
    title: "Small Business Web Design Built to Win Calls",
    body: "Mobile-first websites with click-to-call, quote forms, online booking and call tracking built in, laid out around how your customers search, compare and choose.",
    points: [
      { t: "Mobile-first", d: "Designed for phones first." },
      { t: "Core Web Vitals", d: "Checked before launch." },
      { t: "Conversion-ready", d: "Calls, forms and bookings." },
      { t: "Easy to edit", d: "You own it after launch." },
    ],
    links: [
      { label: "Website design services", href: "/services/web-design" },
      {
        label: "Free website offer",
        href: "/website-design-agency-us/offer",
      },
      { label: "LaunchPad for new businesses", href: "/services/launchpad" },
    ],
    cta: { label: "Plan My New Website", href: "/services/web-design" },
  },
  {
    key: "ads",
    label: "Google Ads",
    title: "Google Ads Management for Buyers Searching Now",
    body: "Search and Local Services campaigns built on high-intent searches, each ad sent to a matching landing page, junk search terms blocked every week, and spend paid to Google from your own account.",
    points: [
      { t: "Search and LSA", d: "Top of the results page." },
      { t: "Matched pages", d: "A landing page per offer." },
      { t: "Weekly checks", d: "Junk searches blocked." },
      { t: "Call tracking", d: "Calls and forms counted." },
    ],
    links: [
      {
        label: "Google Ads management services",
        href: "/services/google-ads",
      },
    ],
    cta: { label: "Audit My Google Ads", href: "/services/google-ads" },
  },
  {
    key: "design",
    label: "Design & automation",
    title: "Branding, UI/UX Design and Marketing Automation",
    body: "A brand customers remember, screens that are easy to use, and automations that text each new lead, log it in your CRM and book the visit. Agencies can hire the same team white-label.",
    points: [
      { t: "Brand systems", d: "Logo, colors and fonts." },
      { t: "UI/UX design", d: "Wireframes to clickable prototypes." },
      { t: "Automation", d: "Instant replies to new leads." },
      { t: "White label", d: "Delivered under your brand." },
    ],
    links: [
      {
        label: "White-label marketing services",
        href: "/services/white-label-services",
      },
    ],
    cta: { label: "Ask About Design Work", href: "#sv-contact" },
  },
];

/* FAQ questions follow how small-business owners phrase searches about
   digital marketing services (what's included, cost, timing, contracts,
   AI search). Prices are only the published plans. */
export const SERVICES_FAQS: { question: string; answer: string }[] = [
  {
    question: "What do digital marketing services include?",
    answer:
      "Local and technical SEO, Google Business Profile optimization, AI search optimization, web design and Google Ads management, plus branding, UI/UX design and automation. Many owners begin with one or two channels and add more once those bring in calls.",
  },
  {
    question: "What does a digital marketing plan cost each month?",
    answer:
      "Plans are $297, $750 and $1,500 a month, each with fixed deliverables. Websites are a fixed-price project and add-ons are priced separately. Ad budgets go straight to Google or Meta with 0% ad-spend markup.",
  },
  {
    question: "How long does SEO take to bring in calls?",
    answer:
      "Google profile fixes can register within weeks. Local rankings build over the following months as reviews, pages and links add up. Google Ads can send calls once campaigns go live, so many clients pair the two early.",
  },
  {
    question: "Can you help ChatGPT and AI Overviews recommend my business?",
    answer:
      "We make you easier to recommend. AI tools draw on sources they can check: a complete Google profile, recent reviews, consistent directory listings and pages that state your services, area and credentials. Nobody can promise a mention, but we close the gaps that get businesses skipped.",
  },
  {
    question: "Are your marketing services available outside the US?",
    answer:
      "Yes. Most clients are in the United States, and we also take on businesses in the UK, Canada, the UAE and Australia, with search work built for the towns you sell in.",
  },
  {
    question: "Is there a minimum contract length?",
    answer:
      "There is none. Plans run month to month and website builds are fixed-scope projects. If a channel stops paying its way, we pause it, and you keep every account we set up.",
  },
  {
    question: "Can you take over from my current marketing agency?",
    answer:
      "Yes. We audit the existing website, Google profile and ad accounts first, keep whatever is working and write down every change we make. Accounts, properties and profiles stay in your name, including anything we create for you.",
  },
  {
    question: "Who will work on my account?",
    answer:
      "Your audit specialist stays on the account. SEO, ads and development each have a named person you can call or email directly.",
  },
  {
    question: "What is the first step to working with Zonic Media?",
    answer:
      "Request a free audit. We look at your website, search rankings, Google profile and ads, then walk you through the findings and the first fixes we would make. There is no obligation to sign up afterwards.",
  },
  {
    question:
      "What should a small business invest in first for digital marketing?",
    answer:
      "Begin where buyers already look: a verified, complete Google profile, rankings in the towns you cover and a site that turns visits into calls. Add Google Ads once those convert, plus AI search work. Social media usually comes later, since it builds awareness more than demand.",
  },
];

export const SERVICES_STEPS = [
  {
    tag: "Week 1",
    title: "Audit Your Online Presence",
    desc: "We check your website, rankings, Google profile and ads against the local businesses taking your customers today.",
  },
  {
    tag: "Week 2",
    title: "Agree the Roadmap",
    desc: "A written plan in priority order: which channel starts first, what we deliver each month and which plan fits.",
  },
  {
    tag: "Weeks 3–6",
    title: "Build Pages, Profile and Campaigns",
    desc: "Website pages, Google profile updates and ad campaigns built together, with redirects, schema and call tracking tested before launch.",
    chips: ["Website", "Profile", "Campaigns"],
  },
  {
    tag: "Monthly",
    title: "Report Calls and Booked Jobs",
    desc: "A plain-English report on calls, forms, reviews and rankings, with next month's work picked from what the data shows.",
    chips: ["Calls", "Reviews", "Rankings"],
  },
];
