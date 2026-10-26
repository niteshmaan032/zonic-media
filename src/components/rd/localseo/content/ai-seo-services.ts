/* AI SEO Services — redesign draft copy (26 Oct 2026).
   Hub page of the Local SEO dropdown: written for small and local
   businesses in general, not one niche (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: ai seo services 212 impressions
     (pos 39.0) · ai content seo consultant 25 (57.0) · ai seo consultant
     13 (40.4) · ai search engine optimization services 10 (53.6) ·
     chatgpt seo los angeles 7 · ai search optimization consultant 7.
   - Semrush US: ai search optimization 4,400 (KD 73) · ai seo agency
     4,400 (36) · ai seo services 4,400 (34) · generative engine
     optimization services 2,900 (28) · ai seo company 1,900 (46) · llm seo
     1,900 (25) · chatgpt seo 1,600 (49) · answer engine optimization
     services 880 (50) · ai seo consultant 260 (38) · geo seo services 110.
   - Web research (GEO vs AEO vs LLM SEO explainers, "get recommended by
     ChatGPT" guides, AI crawler / llms.txt studies): the terms overlap and
     share one groundwork; top explainers skip measurement and the local
     angle (profile, reviews, listings). ChatGPT's local picks lean on
     complete profiles, steady reviews, plain-text service pages and
     matching NAP. Crawler access is the clear prerequisite; llms.txt is
     unproven. Added: a prompt-testing card, a schema + AI crawler card,
     monthly citation tracking, and FAQs on GEO vs AEO, LLM SEO, tracking,
     llms.txt and Google's rules.
   - Title keeps "AI SEO Services" (top GSC term) and the live title's
     "AI Search Optimization, GEO & AEO"; H1 leads with "AI SEO Services".
     "seo services / agency / company" stay with /services/seo-services. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/ai-seo-services",
  audience: "Small and local businesses",
  serviceName: "AI SEO Services",
  meta: {
    title: "AI SEO Services & Agency | GEO, AEO & AI Search Optimization",
    description:
      "AI SEO agency for small businesses: generative engine optimization, answer engine optimization and LLM SEO so ChatGPT, Gemini and AI Overviews name you.",
    keywords: [
      "ai seo services",
      "ai seo agency",
      "ai seo company",
      "ai search optimization",
      "generative engine optimization services",
      "answer engine optimization services",
      "llm seo",
      "chatgpt seo",
      "ai seo consultant",
      "geo seo services",
    ],
  },
  hero: {
    h1Lead: "AI SEO Services",
    h1Rest: "That Get ChatGPT and Google AI to Recommend You",
    icon: "sparkle",
    lead: [
      "When a customer asks ChatGPT, Gemini or Google’s AI Overview who to hire, the reply is assembled from your profile, pages, reviews and listings. We tune each source, starting with your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", then retest the prompts your buyers use every month.",
    ],
    cta: "Run My Free AI Visibility Check",
    ui: {
      kind: "growth",
      maps: "pack",
      ai: "chat",
      growth: "feed",
      business: "Your Company",
      category: "Local business",
      query: "best local service near me",
      aiPrompt: "Which local company should I trust for this job?",
      aiReasons: ["Clear answers on its site", "Facts match everywhere"],
      growthLabel: "Leads from AI search",
      leads: [
        ["Quote request", "ChatGPT referral"],
        ["New call", "AI Overview link"],
        ["Booking form", "Gemini answer"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top 3",
          title: "Maps Signals AI Tools Read First",
          text: "A complete profile and steady reviews feed the facts AI assistants repeat.",
        },
        {
          label: "AI answers",
          badge: "Named first",
          title: "Recommended by Name in AI Answers",
          text: "Entity data, answer-first pages and citations make assistants confident naming you.",
        },
        {
          label: "Leads",
          badge: "From AI",
          title: "Customers Who Arrive Already Convinced",
          text: "Visitors from AI answers call and book with fewer questions to ask.",
        },
      ],
    },
  },
  searches: {
    title: "What Customers Ask AI Before They Pick a Business",
    lead: "AI search optimization starts with real prompts. These are the kinds we test monthly in ChatGPT, Gemini, Perplexity and Google.",
    groups: [
      {
        icon: "chat",
        label: "Questions people ask AI assistants",
        terms: [
          "who is the best rated accountant near me",
          "which vet near me is open sunday",
          "recommend a dentist taking new patients",
          "best italian restaurant for a birthday dinner",
          "good hair salon for curly hair nearby",
        ],
      },
      {
        icon: "search",
        label: "Searches that trigger an AI Overview",
        terms: [
          "is it worth hiring a bookkeeper",
          "what to look for in a daycare",
          "best gym for beginners near me",
          "florist that delivers same day",
          "how often should brakes be checked",
        ],
      },
      {
        icon: "pin",
        label: "Side-by-side picks in Google AI Mode",
        terms: [
          "auto repair shop with honest reviews",
          "pet groomer open saturday near me",
          "best tax preparer for freelancers",
          "quiet coffee shop to work from",
          "family photographer for outdoor sessions",
        ],
      },
    ],
  },
  services: {
    title: "Generative Engine Optimization\nServices, Month by Month",
    lead: "Six workstreams our AI SEO agency runs to decide whether a model trusts your business enough to name it.",
    cta: "Audit My AI Mentions",
    items: [
      {
        icon: "inspect",
        title: "AI Visibility Audit and Prompt Testing",
        desc: "We put your buyers’ real questions to ChatGPT, Gemini, Perplexity and AI Overviews, record who gets named, and trace why.",
        points: [
          "Buyer prompt list",
          "Engine-by-engine results",
          "Rival source map",
        ],
        links: [],
      },
      {
        icon: "layers",
        title: "Entity Consistency for AI Models",
        desc: "Your name, category, services and hours made identical on Google, Bing, Apple and key directories, so models see one clear business.",
        points: [
          "Profile and listing sync",
          "Category alignment",
          "Duplicate cleanup",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile tuning",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
      {
        icon: "file",
        title: "Answer-First Pages for AI Search",
        desc: "Our answer engine optimization services rework service pages and FAQs so each opens with a plain answer AI tools can quote.",
        points: [
          "Question-led headings",
          "Short answer blocks",
          "Facts AI can verify",
        ],
        links: [
          { href: "/services/web-design", label: "Websites built for answers" },
        ],
      },
      {
        icon: "tool",
        title: "Schema and AI Crawler Access",
        desc: "LocalBusiness and FAQ schema, a clean sitemap and robots rules that let AI search bots fetch your pages when buyers ask.",
        points: ["Structured data", "Bot access rules", "llms.txt as a hint"],
        links: [],
      },
      {
        icon: "star",
        title: "Reviews and Mentions AI Engines Trust",
        desc: "Steady Google reviews that name your services, plus mentions on local news, chamber and industry sites that models cite as proof.",
        points: [
          "Review requests",
          "Local press mentions",
          "Industry directories",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile fix",
          },
        ],
      },
      {
        icon: "trend",
        title: "AI Citation Log, Updated Monthly",
        desc: "Each month we rerun your prompt set, log which engines name you and which sources they cite, and send the changes dated.",
        points: [
          "Mentions by engine",
          "Cited-source log",
          "Next-month actions",
        ],
        links: [],
      },
    ],
  },
  growth: {
    title: "How an AI SEO Company Turns Answers Into Customers",
    lead: "Rankings feed AI answers, AI answers send buyers, and every lead is traced back to where it started.",
    rank: {
      title: "Rank Where AI Models Look for Answers",
      body: [
        "AI Overviews and chat tools lean on pages that already rank. We lift your service pages for the searches models read, then tie that work to ",
        {
          href: "/services/local-seo-for-small-business",
          label: "local SEO for small businesses",
        },
        " so Maps and AI grow together.",
      ],
      points: [
        "Pages AI reads first",
        "Question-led keywords",
        "Weekly rank checks",
        "Maps and organic aligned",
      ],
      cta: "Show My AI Ranking Gaps",
      keywords: [
        ["bookkeeper for small business", 24, 4],
        ["payroll service near me", 31, 6],
        ["best accountant + your city", 18, 3],
        ["tax help for freelancers", 36, 7],
      ],
    },
    ai: {
      title: "Become the First Name in ChatGPT and AI Mode",
      body: [
        "ChatGPT SEO and LLM SEO come down to proof: matching facts, cited sources and reviews that describe your work. We supply each one, then check the answer engine by engine. Want classic rankings too? See our ",
        { href: "/services/seo-services", label: "full SEO program" },
        ".",
      ],
      points: [
        "Consistent business facts",
        "Sources models cite",
        "Review language",
        "Engine-by-engine checks",
      ],
      cta: "Test What ChatGPT Says About Me",
      query: "best bookkeeper for a new restaurant",
      intro: "For restaurant bookkeeping near you,",
      bullets: [
        "Restaurant clients page",
        "Consistent listings",
        "Reviews from owners",
      ],
    },
    leads: {
      title: "Trace Every AI Referral to a Call or Form",
      body: [
        "AI answers send buyers who have mostly decided already. We tag visits from ChatGPT, Perplexity and AI Overviews, track calls and forms by page, and add ",
        { href: "/services/google-ads", label: "Google Ads management" },
        " when you want reach this week.",
      ],
      points: [
        "AI referral tagging",
        "Call tracking",
        "Form source fields",
        "Leads by engine",
      ],
      cta: "Show Me My AI Referrals",
      items: [
        ["Consultation call", "ChatGPT link", "Mon 9:20 AM"],
        ["Quote request form", "Perplexity citation", "Mon 2:05 PM"],
        ["Booking request", "AI Overview link", "Tue 10:42 AM"],
        ["Directions request", "Google Maps", "Wed 4:15 PM"],
      ],
    },
  },
  results: {
    title: "What Shifts Once AI Search Starts Naming You",
    lead: "First the facts AI reads get fixed, then pages and mentions, then the prompts we test start to name you.",
    cta: "Map My AI Visibility Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "AI Facts Lined Up",
        text: "We correct your profile, listings and schema so every AI engine reads the same name, category and hours.",
      },
      {
        when: "Month 1",
        title: "Answer Pages Published",
        text: "Service pages and FAQs gain plain, quotable answers, and AI Overviews start to have something clear to cite.",
      },
      {
        when: "Months 2–4",
        title: "AI Mentions Start Adding Up",
        text: "Reviews and outside mentions build week by week, and more of your tested prompts begin to include you.",
      },
      {
        when: "Month 4 onward",
        title: "A Steadier AI Presence",
        text: "New services and towns join the monthly tests, and AI referrals appear in your lead report as their own source.",
      },
    ],
    wins: [
      {
        icon: "sparkle",
        title: "Your Name in More AI Answers",
        text: "Buyers asking ChatGPT, Gemini or Google’s AI for a recommendation hear your business name more often.",
      },
      {
        icon: "call",
        title: "Warmer Inquiries From AI Referrals",
        text: "People who arrive from an AI answer have often compared options already, so conversations start closer to yes.",
      },
      {
        icon: "shield",
        title: "One Consistent Story for AI Models",
        text: "Models stop mixing up your hours, services or location because every source now tells the same story.",
      },
      {
        icon: "trend",
        title: "Google Rankings That Lift Alongside AI",
        text: "The answer-first pages and cleaner facts AI favors also help your regular Google rankings and Map Pack spot.",
      },
    ],
  },
  compare: {
    title: "Zonic vs. a Typical Agency on AI Search Visibility",
    lead: "Where our AI search work differs from what businesses are often sold under the GEO label.",
    rows: [
      {
        topic: "How AI visibility is measured",
        other:
          "Often a one-off screenshot of a single ChatGPT answer, never repeated.",
        zonic:
          "A fixed buyer prompt set rerun monthly across four AI engines, with a dated log.",
      },
      {
        topic: "Entity and listing facts",
        other:
          "Business details left mismatched across profiles, directories and the website.",
        zonic:
          "Name, category, services and hours aligned on Google, Bing, Apple and key directories.",
      },
      {
        topic: "Content written for AI",
        other:
          "Large batches of generic AI-written posts published to chase volume.",
        zonic:
          "Service pages and FAQs reworked to open with plain answers models can quote.",
      },
      {
        topic: "Crawler access and llms.txt",
        other:
          "llms.txt can be pitched as a shortcut while robots rules still block AI bots.",
        zonic:
          "Robots rules, sitemap and schema checked first; llms.txt added only as a low-cost hint.",
      },
      {
        topic: "Citations AI trusts",
        other:
          "Mentions placed on unrelated sites that models rarely trust or cite.",
        zonic:
          "Real reviews plus mentions from local news, chambers and industry sites in your field.",
      },
      {
        topic: "Contract and ownership",
        other: "Often a long commitment before any AI change can be judged.",
        zonic:
          "Month to month, with your profiles, listings and analytics kept in your name.",
      },
    ],
  },
  steps: {
    title: "How an AI SEO Consultant Runs Your Program",
    lead: "Testing first, then fixes to the sources AI reads, then monthly retests that show what moved.",
    items: [
      {
        h: "Test the AI Prompts Your Buyers Use",
        p: "We run your buyer questions through four AI engines and note who is named, plus the pages and listings they cite as sources.",
      },
      {
        h: "Fix the Sources AI Engines Read",
        p: "Profile, listings, schema and answer-first pages are corrected first, then reviews and outside mentions are built week by week.",
      },
      {
        h: "Retest AI Answers Every Month",
        p: "The same prompts run again monthly, so you see which engines now name you, what changed and where we push next.",
      },
    ],
    audit: [
      ["ChatGPT mention", "gap"],
      ["AI Overview citation", "behind"],
      ["Entity facts", "open"],
      ["Schema", "behind"],
    ],
    plan: ["Answer pages", "Listing sync", "Schema", "Reviews", "Mentions"],
    launch: [
      "Prompts tested",
      "Facts aligned",
      "Pages answer-first",
      "Citations logged",
    ],
  },
  explore: {
    title: "Keep Building Beyond AI Answers",
    lead: "AI visibility rests on strong rankings, so most owners pair it with organic or city SEO.",
    items: [
      {
        name: "SEO Services",
        sub: "Organic rankings AI draws from",
        href: "/services/seo-services",
        icon: "search",
      },
      {
        name: "NYC Local SEO",
        sub: "Map Pack work across the boroughs",
        href: "/services/nyc/local-seo",
        icon: "building",
      },
      {
        name: "Philadelphia Local SEO",
        sub: "Neighborhood search in Philly",
        href: "/services/philadelphia/local-seo",
        icon: "pin",
      },
      {
        name: "Delaware SEO",
        sub: "Statewide search from our home base",
        href: "/services/delaware/seo",
        icon: "home",
      },
    ],
    other:
      "Several brands or locations? Our GEO SEO services can cover each one under one plan.",
  },
  reviews: {
    title: "Read the 5.0-Star Reviews Owners Left Us on Google",
    lead: "Unedited Google reviews from the businesses whose visibility we manage.",
  },
  pricing: {
    title: "AI SEO Plans, Billed Month to Month",
    compareTitle: "Compare AI SEO Plan Coverage",
    addOnsTitle: "AI SEO Add-Ons for Bigger Footprints",
    customTitle: "Need AI SEO for Several Brands?",
  },
  faq: {
    title: "Your AI SEO, GEO and AEO Questions, in Plain English",
    lead: "What the terms mean, how AI picks a business, cost, timing and tracking.",
    items: [
      {
        q: "What are AI SEO services?",
        a: "AI SEO services make your business easy for AI tools to find, trust and recommend. That means accurate profiles and listings, pages that answer questions directly, schema, reviews and outside mentions, all checked against what ChatGPT, Gemini, Perplexity and Google AI Overviews actually say.",
      },
      {
        q: "What is the difference between GEO and AEO in AI search?",
        a: "Answer engine optimization (AEO) formats a page so a search engine or assistant can quote one clear answer from it. Generative engine optimization (GEO) builds the outside proof, such as listings, reviews and mentions, that persuades an AI model to recommend you. They overlap, so we run them as one program.",
      },
      {
        q: "Is LLM SEO just another name for AI SEO?",
        a: "Close to it. LLM SEO targets large language model tools such as ChatGPT, Gemini, Claude and Perplexity, and ChatGPT SEO narrows that to one tool. AI SEO also covers Google AI Overviews and AI Mode. The groundwork is shared: crawlable pages, consistent facts and sources models trust.",
      },
      {
        q: "How does ChatGPT or another AI tool pick a business?",
        a: "It searches the web and reads what it finds, leaning on business profiles, review sites, directories and pages that answer the question clearly. Businesses with complete profiles, steady reviews and the same details everywhere tend to be named more often than those with gaps.",
      },
      {
        q: "Does AI SEO replace traditional SEO?",
        a: "No. AI answers draw heavily on pages and profiles that already rank, so strong SEO stays the base. AI SEO adds a layer on top: answer-first formatting, entity consistency, mention building and prompt tracking across the AI engines your buyers use.",
      },
      {
        q: "What do AI SEO services cost per month?",
        a: "Our plans run $297, $750 or $1,500 a month, month to month. Each covers the profile, page and listing work AI engines rely on. The free check shows which plan fits your market and whether extra AI work is worth adding.",
      },
      {
        q: "How long until AI tools start naming my business?",
        a: "Profile and listing fixes can show up in AI answers within weeks, because engines reread their sources often. Outside mentions and review growth take longer, usually a few months. Monthly prompt tests show the trend, engine by engine.",
      },
      {
        q: "Can you track whether AI engines recommend me?",
        a: "Yes. We keep a fixed set of buyer prompts, run them each month in ChatGPT, Gemini, Perplexity and Google AI Overviews, and log whether you are named, where you appear and which sources are cited. The dated log arrives with your report.",
      },
      {
        q: "Does llms.txt help with AI search?",
        a: "It may help a little, but no major AI company has confirmed it affects citations. We add one where it is cheap to maintain and treat it as a hint. Crawler access, schema and clear answers on your pages matter far more.",
      },
      {
        q: "Is optimizing for AI answers allowed by Google?",
        a: "Yes. Google treats optimizing for its AI features as ordinary SEO: helpful pages, accurate facts and sound technical health. We never use hidden text, fake reviews or link schemes, which can cost you rankings and AI visibility at once.",
      },
    ],
  },
  audit: {
    title: "Find Out What AI Says About Your Business, Free",
    lead: [
      "Send your website and the questions buyers ask. We test them across four AI engines, list who gets named and why, then send a short fix plan. Meet ",
      { href: "/about", label: "the team running the tests" },
      ", compare ",
      { href: "/services/local-seo-packages", label: "our local SEO packages" },
      " or browse ",
      { href: "/services", label: "every service" },
      ".",
    ],
    points: [
      "Prompt results by engine",
      "Who AI names instead",
      "Missing facts and sources",
      "A first-month fix list",
    ],
    form: {
      formType: "ai-seo-services",
      badge: "Free AI visibility check",
      title: "Request Your AI Visibility Check",
      subtitle: "Free, no contract, no sales script.",
      submitText: "Send My AI Check Request",
      messageLabel: "Your website and the questions buyers ask",
      messagePlaceholder:
        "yourwebsite.com, your main services and two or three questions customers ask AI",
    },
  },
  banner: {
    title: "Be the Business AI Recommends by Name",
    lead: "Clear facts, cited sources and monthly prompt tests, so AI answers point buyers to you.",
  },
};
