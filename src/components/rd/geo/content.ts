/* Generative Engine Optimization page copy (26 Nov 2026).

   Research (research_notes/GEO service page research/):
   - Semrush US, 26 Nov 2026: generative engine optimization services 2,900
     (KD 42, rising) · …agency 1,900 (32) · geo agency 1,300 (52, fastest
     rising) · …companies 390 · …agencies 320 · …company 260 · best
     generative engine optimization company for ai visibility 210 · ai
     visibility audit 590 (rising) · geo vs seo 4,400 · what is generative
     engine optimization 3,600 · aeo vs geo 1,900.
   - The GEO and "AI SEO" result pages share 0 of their top-10 URLs, so
     this page owns the GEO terms and /services/ai-seo-services keeps
     "ai seo services / agency / company", AEO, LLM SEO and ChatGPT SEO.
     "geo services" is off-topic (geotechnical firms) and not targeted.
   - Facts come from primary sources: Google's generative AI optimization
     guide and AI features doc, OpenAI / Perplexity / Anthropic crawler
     docs, Microsoft (Copilot runs on Bing's index), the GEO paper (KDD
     2024), BrightLocal (Feb and Jul 2026) and SparkToro (Jan 2026).
   - Title keeps the two biggest terms; the H1 is the owner's wording.
   No prices outside the pricing FAQ, no invented results, no competitor
   names, Google 5.0 only. */

export type Rich = (string | { href: string; label: string })[];

export const PAGE_URL = "/services/generative-engine-optimization";
export const AUDIT_ID = "geo-audit";

export const META = {
  title: "Generative Engine Optimization Services | GEO Agency",
  description:
    "Generative engine optimization services from a GEO agency that gets local businesses named and cited in ChatGPT, AI Overviews and Perplexity. Free audit.",
  keywords: [
    "generative engine optimization services",
    "generative engine optimization agency",
    "generative engine optimization company",
    "geo agency",
    "geo seo agency",
    "ai visibility audit",
    "ai visibility agency",
  ],
};

export const HERO = {
  h1: "Generative Engine Optimization Company for AI Visibility",
  lead: "When customers ask ChatGPT, Google AI Overviews, Gemini, Perplexity or Copilot who to hire, the answer is built from sources the engine trusts. We strengthen those sources so your business gets named and cited.",
  cta: "Get My Free AI Visibility Audit",
};

/** Hero card (example only): one buyer question goes to all five AI
    engines at once and each answer names the business, some with a
    citation. Tabs switch trade; answers follow ENGINE_LIST order. */
export const HERO_UI = {
  title: "AI answer check",
  sub: "Asked on five AI engines",
  business: "Your Company",
  runs: [
    {
      trade: "HVAC",
      prompt: "Best HVAC company near me for a same-day repair?",
      answers: [
        { text: "Your Company offers same-day repair visits.", cited: true },
        { text: "Your Company lists same-day service on its site.", cited: true },
        { text: "Reviewers praise Your Company for quick visits.", cited: false },
        { text: "Your Company covers your area with same-day slots.", cited: true },
        { text: "Your Company is a well-reviewed local pick.", cited: false },
      ],
    },
    {
      trade: "Plumbing",
      prompt: "Which plumber near me has the best recent reviews?",
      answers: [
        { text: "Your Company has strong recent five-star reviews.", cited: true },
        { text: "Your Company has a page for every plumbing service.", cited: true },
        { text: "Local directories rate Your Company highly.", cited: true },
        { text: "Your Company is a well-reviewed local plumber.", cited: false },
        { text: "Customers praise Your Company for clear quotes.", cited: false },
      ],
    },
    {
      trade: "Roofing",
      prompt: "Who should I call to fix a leaking roof this week?",
      answers: [
        { text: "Your Company repairs roof leaks and posts its hours.", cited: true },
        { text: "Your Company offers roof leak repair near you.", cited: true },
        { text: "Your Company appears on a local best-of list.", cited: false },
        { text: "Your Company lists roof repair on its profile.", cited: true },
        { text: "Homeowners recommend Your Company for leaks.", cited: false },
      ],
    },
    {
      trade: "Electrical",
      prompt: "Which electrician near me can install an EV charger?",
      answers: [
        { text: "Your Company installs home EV chargers.", cited: true },
        { text: "Your Company lists its license details online.", cited: true },
        { text: "Reviews mention Your Company's charger installs.", cited: false },
        { text: "Your Company serves your area for EV chargers.", cited: true },
        { text: "Your Company is a licensed local electrician.", cited: false },
      ],
    },
  ],
  sources: ["yourcompany.com", "Business Profile", "Review sites"],
  caption: "Example answers. Wording and sources vary by engine and question.",
};

export const WHAT = {
  title: "What Is Generative Engine Optimization (GEO)?",
  answer:
    "Generative engine optimization (GEO) is the work of getting your business named, quoted and linked inside answers written by AI engines such as ChatGPT, Gemini, Perplexity, Copilot and Google's AI Overviews. SEO earns a ranked link; GEO earns a mention in the answer itself, backed by sources the engine cites.",
  facts: [
    {
      title: "Built on search",
      body: "Google says AI Overviews and AI Mode run on its core Search ranking systems, so a page must be indexed and eligible for a snippet before it can be cited.",
      source: "Google Search Central",
    },
    {
      title: "One question, many searches",
      body: "AI engines often run several related searches behind one question. Google calls it query fan-out, so real follow-up questions matter more than one keyword.",
      source: "Google Search Central",
    },
    {
      title: "Evidence gets quoted",
      body: "In a KDD 2024 study, adding sources, quotations and statistics lifted visibility in AI answers by up to about 40% in testing. Keyword stuffing did not help.",
      source: "GEO study, KDD 2024",
    },
  ],
  fanout: {
    title: "How an AI engine builds one answer",
    steps: ["Buyer asks", "Engine runs related searches", "Reads trusted sources", "Writes the answer"],
    question: "Is a heat pump worth it for an older house?",
    searches: [
      "heat pump vs furnace",
      "heat pumps in older homes",
      "heat pump installers near me",
      "how long heat pumps last",
    ],
    sources: [
      { label: "Installer service page", sub: "yourcompany.com" },
      { label: "Business Profile", sub: "Services, hours, reviews" },
      { label: "Review site", sub: "Recent customer reviews" },
    ],
    answer:
      "A heat pump can suit an older house once insulation and ductwork are checked. Your Company installs them locally and has strong recent reviews.",
    caption: "Query fan-out, as Google describes it. Example questions.",
  },
};

export type ServiceCard = {
  icon: "prompts" | "facts" | "lists" | "pages" | "access" | "tracking";
  title: string;
  desc: string;
  points: string[];
};

export const SERVICES = {
  title: "Generative Engine Optimization Services That Earn AI Citations",
  lead: "Six workstreams that change what AI engines read about you, then check whether the answers change.",
  cta: "Start With a Free Audit",
  items: [
    {
      icon: "prompts",
      title: "Buyer Prompt Mapping",
      desc: "We list the questions your customers ask AI about your services and area, then run them across five engines to see who gets named today.",
      points: ["Prompts by service and city", "Five engines tested", "A baseline before any work"],
    },
    {
      icon: "facts",
      title: "Brand Fact Alignment",
      desc: "AI repeats what it reads. Your name, services, areas and hours are made to match on your site, Google Business Profile, Bing Places and Apple Business Connect.",
      points: ["Profiles completed", "Conflicting details fixed", "Wrong AI claims flagged"],
    },
    {
      icon: "lists",
      title: "Listings, Reviews and Best-Of Lists",
      desc: "We earn genuine placements on the directories, review sites, associations and local roundups that AI engines cite for your trade.",
      points: ["Trade directories", "Review sites beyond Google", "Best-of list outreach"],
    },
    {
      icon: "pages",
      title: "Source-Backed Service Pages",
      desc: "One clear page for each service, opening with a direct answer and backed by the facts, specifics and quotes an engine can lift.",
      points: ["A page per service", "The answer up front", "Facts from your own work"],
    },
    {
      icon: "access",
      title: "AI Crawler Access",
      desc: "We check that robots.txt, your CDN and your firewall let the search crawlers in: Googlebot, Bingbot, OAI-SearchBot, PerplexityBot and Claude-SearchBot.",
      points: ["Search vs training bots", "Firewall rules checked", "Schema matched to the page"],
    },
    {
      icon: "tracking",
      title: "Share-of-Answer Tracking",
      desc: "Every month we rerun your prompt set and log where you're named and cited, alongside data from Search Console, Bing and GA4.",
      points: ["Named and cited, by engine", "Repeated runs, not one screenshot", "A dated monthly log"],
    },
  ] satisfies ServiceCard[],
};

export const ENGINES = {
  title: "How ChatGPT and Google AI Choose Which Businesses to Name",
  lead: "Each engine searches before it answers, reads a short list of sources and cites the ones it uses. Here is where each one looks, from the companies' own documentation.",
  columns: ["AI engine", "Where it finds sources", "What we check"],
  rows: [
    {
      engine: "ChatGPT search",
      tone: "#10a37f",
      where: "OpenAI's OAI-SearchBot crawler, plus partner search providers",
      check: "OAI-SearchBot is allowed. OpenAI says sites that block it are left out of ChatGPT search answers.",
    },
    {
      engine: "Google AI Overviews and AI Mode",
      tone: "#1a73e8",
      where: "Google's Search index, crawled by Googlebot",
      check: "Pages are indexed and snippet-eligible, and your Business Profile is current.",
    },
    {
      engine: "Gemini",
      tone: "#8e75f0",
      where: "Google's index and Google's own products",
      check: "The same Google basics, plus a complete Business Profile.",
    },
    {
      engine: "Microsoft Copilot",
      tone: "#0078d4",
      where: "Bing's search index, crawled by Bingbot",
      check: "Bingbot is allowed, Bing Places is complete and new pages are sent through IndexNow.",
    },
    {
      engine: "Perplexity",
      tone: "#20808d",
      where: "Its own search crawler, PerplexityBot",
      check: "PerplexityBot gets through your firewall or CDN.",
    },
    {
      engine: "Claude",
      tone: "#c96442",
      where: "Claude-SearchBot and web search results",
      check: "Claude-SearchBot is allowed where your buyers use Claude.",
    },
  ],
  note: "No special file is required for Google's AI features, and Google says an llms.txt file neither helps nor hurts in Search. Access, accurate facts and trusted sources come first.",
};

export const COMPARE = {
  title: "GEO vs SEO vs AEO: What Each One Wins",
  lead: "Three names for overlapping work. Here is what each one is for, so you know what you are paying for.",
  columns: ["", "SEO", "AEO", "GEO"],
  rows: [
    ["Goal", "Rank your pages in search results", "Get one clear answer quoted", "Get your business named and cited in AI answers"],
    ["Where it shows", "Blue links and the Map Pack", "Featured snippets, voice answers, AI Overviews", "ChatGPT, Gemini, Perplexity, Copilot, AI Overviews and AI Mode"],
    ["What moves it", "Relevance, links and page experience", "Answer-first formatting and structure", "Matching facts, trusted third-party sources, reviews and mentions"],
    ["How it is measured", "Rankings, clicks and calls", "Snippets and AI Overview citations", "Mentions and citations across repeated prompt runs, plus AI referrals"],
  ],
  note: [
    "They share one foundation: GEO builds on SEO, because AI engines lean on pages that already rank. Answer formatting and on-page AI work sit in our ",
    { href: "/services/ai-seo-services", label: "AI SEO services" },
    ", and classic rankings in our ",
    { href: "/services/seo-services", label: "SEO program" },
    ".",
  ] satisfies Rich,
};

export const PROCESS = {
  title: "Our GEO Agency Process, From Audit to Monthly Retest",
  lead: "Four steps our generative engine optimization agency runs in the same order for every client, so you always know what happens next.",
  steps: [
    {
      tag: "Week 1",
      title: "AI Visibility Audit",
      body: "We run your buyers' prompts across five engines, record who is named and which sources are cited, and list what AI gets wrong about you.",
    },
    {
      tag: "Weeks 2–4",
      title: "Facts and Access Fixed",
      body: "Profiles, listings and site details are aligned, crawler access is opened and service pages get direct answers.",
    },
    {
      tag: "Months 2–3",
      title: "Citations Earned",
      body: "We pursue placements on the directories, review sites, associations and lists engines cite for your trade and area.",
    },
    {
      tag: "Every month",
      title: "Retest and Report",
      body: "The same prompts are rerun, results are logged by engine and next month's priorities come from what changed.",
    },
  ],
};

export const LOCAL = {
  title: "GEO for Home Service and Local Businesses",
  lead: [
    "People now ask AI which local business to hire, then check Google before they call. GEO works best on top of a strong ",
    { href: "/local-seo-google-business-optimization", label: "Google Business Profile" },
    " and ",
    { href: "/services/local-seo-for-home-services", label: "local SEO for home services" },
    ", which is where Zonic Media started.",
  ] satisfies Rich,
  stats: [
    {
      value: "45%",
      text: "of US consumers used ChatGPT or another AI tool for local recommendations in the past year, up from 6% the year before.",
      source: "BrightLocal, Local Consumer Review Survey, Feb 2026",
    },
    {
      value: "43%",
      text: "of people who started a local search with an AI tool went on to check Google.",
      source: "BrightLocal, Consumer Search Behavior, Jul 2026",
    },
  ],
  listTitle: "What we line up for local AI answers",
  list: [
    "Google Business Profile, Bing Places and Apple Business Connect complete and matching",
    "Reviews on Google and on the review sites your trade relies on",
    "Listings on general and trade directories",
    "Local press, association and community mentions",
    "A page for every service you sell",
    "Prompt checks for “[service] near me” questions",
  ],
  tradesTitle: "GEO and local SEO by trade",
  trades: [
    { href: "/services/industry/local-seo-services-for-hvac", label: "HVAC" },
    { href: "/services/industry/seo-services-for-plumber", label: "Plumbing" },
    { href: "/services/industry/local-seo-for-roofing-companies", label: "Roofing" },
    { href: "/services/industry/local-seo-for-electricians", label: "Electricians" },
    { href: "/services/industry/local-seo-for-landscaping-companies", label: "Landscaping" },
    { href: "/services/chatgpt-business-profile", label: "Claim your business in ChatGPT" },
  ],
};

export const REPORT = {
  title: "What Your AI Visibility Report Shows Each Month",
  lead: "AI answers change from one run to the next, so we measure how often you're named across repeated runs, not a single screenshot, and pair it with data from Google, Bing and GA4.",
  board: {
    title: "AI visibility report",
    sub: "Example: an HVAC company",
    engines: ["ChatGPT", "AI Overviews", "Perplexity", "Copilot", "Gemini"],
    prompts: [
      "best hvac company near me",
      "who does same-day ac repair",
      "is an hvac maintenance plan worth it",
      "emergency furnace repair near me",
    ],
    // 2 = named and cited, 1 = named, 0 = not yet (example layout only).
    grid: [
      [2, 2, 1, 0, 1],
      [1, 2, 0, 1, 0],
      [2, 1, 2, 0, 1],
      [0, 1, 1, 0, 0],
    ],
    caption: "Example layout. Your report uses your own prompts.",
  },
  items: [
    { icon: "runs", title: "Prompt runs", body: "Named, cited or missing, engine by engine, across repeated runs." },
    { icon: "gsc", title: "Google Search Console", body: "Impressions from the Generative AI report for AI Overviews and AI Mode." },
    { icon: "bing", title: "Bing Webmaster Tools", body: "Citations from the AI Performance report for Copilot and Bing's AI answers." },
    { icon: "ga4", title: "Google Analytics 4", body: "Visits from the AI Assistant channel, such as ChatGPT, Gemini and Copilot." },
    { icon: "accuracy", title: "Answer accuracy", body: "What each engine says about your hours, services and service areas." },
  ] as { icon: "runs" | "gsc" | "bing" | "ga4" | "accuracy"; title: string; body: string }[],
  footnote:
    "A 2026 SparkToro study found AI recommendation lists almost never repeat in the same order, which is why we track how often you appear rather than one position.",
};

export const TIMELINE = {
  title: "What Changes in Your First 90 Days of GEO",
  lead: "What we work toward each month. Timing depends on your market, your starting point and how quickly new sources go live.",
  items: [
    { tag: "Month 1", title: "Accurate facts everywhere", body: "Profiles, listings and site details match, crawlers can reach your pages and your baseline is on record." },
    { tag: "Month 2", title: "New sources go live", body: "New listings, reviews and page answers give each engine more to read and cite." },
    { tag: "Month 3", title: "The retests tell the story", body: "Monthly runs show where you're named more often and which sources each engine picks up." },
    { tag: "Ongoing", title: "A steadier AI presence", body: "We add sources where gaps remain and keep your facts current as your business changes." },
  ],
  honest:
    "No agency can guarantee that an AI engine will name you. We show you the evidence each month, engine by engine.",
};

export const REVIEWS = {
  title: "Check Our 5.0 Google Rating in Owners' Own Words",
  lead: "Unedited Google reviews from business owners we work with.",
};

export const PRICING = {
  title: "Generative Engine Optimization Pricing, Month to Month",
  compareTitle: "Compare What Each GEO Plan Covers",
  addOnsTitle: "Add More AI Visibility Work in Any Month",
  customTitle: "Running GEO for Several Locations or Brands?",
};

export const FAQ = {
  title: "Generative Engine Optimization FAQs",
  lead: "What GEO is, how it differs from SEO and AEO, how we measure it and what it costs.",
  items: [
    {
      q: "What is generative engine optimization (GEO)?",
      a: "Generative engine optimization (GEO) makes your business easy for AI engines to find, trust and cite, so it appears inside answers from ChatGPT, Gemini, Perplexity, Copilot and Google's AI Overviews. It works on your site, your profiles, your reviews and the third-party sources those engines read.",
    },
    {
      q: "What does a generative engine optimization company do?",
      a: "A GEO company maps the questions your buyers ask AI, tests who gets named, then fixes the sources behind those answers: your facts, crawler access, listings, reviews and mentions. Zonic Media retests the same prompts every month and reports the changes engine by engine.",
    },
    {
      q: "Is GEO different from SEO?",
      a: "Yes, but they share a foundation. SEO earns rankings and clicks, while GEO earns mentions and citations inside AI answers. Google says its AI features run on its core Search ranking systems, so strong SEO supports GEO, and most businesses keep both running.",
    },
    {
      q: "What's the difference between GEO and AEO?",
      a: "Answer engine optimization (AEO) shapes a page so one clear answer can be quoted. GEO is wider: it covers the outside sources, brand facts and mentions that decide whether an AI engine recommends you at all. Our AEO and on-page work sits in our AI SEO services.",
    },
    {
      q: "Which AI engines does your GEO agency cover?",
      a: "ChatGPT search, Google AI Overviews and AI Mode, Gemini, Microsoft Copilot and Perplexity, plus Claude where your buyers use it. They read different indexes: Google's for its AI features and Gemini, Bing's for Copilot, and their own crawlers for ChatGPT and Perplexity, so we test each one.",
    },
    {
      q: "How do you measure AI visibility?",
      a: "With repeated prompt runs that log whether you're named and cited on each engine, plus first-party data: the Generative AI report in Google Search Console, the AI Performance report in Bing Webmaster Tools and the AI Assistant channel in Google Analytics 4.",
    },
    {
      q: "How long does generative engine optimization take?",
      a: "Profile and listing fixes can show up in AI answers within weeks, because engines reread their sources often. New citations, reviews and mentions usually take two to three months to show in retests, and we report the trend every month.",
    },
    {
      q: "Can you guarantee ChatGPT will recommend my business?",
      a: "No, and no honest agency can. AI answers vary from run to run and each engine picks its own sources. What we can do is fix your facts, earn the sources engines cite and show you, month by month, how often you're named.",
    },
    {
      q: "Do I need an llms.txt file for GEO?",
      a: "Not for Google: it says llms.txt neither helps nor hurts in Search, and no major AI company has confirmed using it for answers. We may add one where it is cheap to keep current, but crawler access, accurate facts and trusted sources matter far more.",
    },
    {
      q: "How much do generative engine optimization services cost?",
      a: "Our plans are $297, $950 or $1,500 a month, or $197, $750 or $1,250 a month billed annually. The free AI visibility audit shows which plan fits your market and how much work your AI presence needs.",
    },
    {
      q: "Is GEO worth it for a local business?",
      a: "If your customers ask AI who to hire, yes. BrightLocal found 45% of US consumers used AI for local recommendations in the past year, and most still check Google. Local GEO builds on your Business Profile and reviews, so the same work helps in both places.",
    },
  ],
};

export const AUDIT = {
  title: "Get a Free AI Visibility Audit From Our GEO Team",
  lead: [
    "Send your website and the services you sell. We'll run your buyers' questions across five AI engines, show who gets named and why, and send a short fix list. Need on-page AI work too? See our ",
    { href: "/services/ai-seo-services", label: "AI SEO services" },
    " or ",
    { href: "/services/chatgpt-business-profile", label: "claim your business in ChatGPT" },
    ".",
  ] satisfies Rich,
  points: [
    "Results for each engine",
    "Sources AI cites today",
    "Wrong facts AI repeats",
    "Your first fixes, in order",
  ],
  form: {
    formType: "generative-engine-optimization",
    badge: "Free AI visibility audit",
    title: "Request Your AI Visibility Audit",
    subtitle: "Free, with no contract and no sales script.",
    submitText: "Send My Audit Request",
    messageLabel: "Your website and the services you sell",
    messagePlaceholder: "yourwebsite.com, your main services and the areas you serve",
  },
};

export const BANNER = {
  title: "Be the Business AI Answers Name and Cite",
  lead: "Accurate facts, trusted sources and monthly retests across every major AI engine.",
};
