/* Local SEO for Electricians — redesign draft copy (26 Oct 2026).
   Reference page for the Local SEO dropdown family; other pages must not
   reuse its wording (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: local seo for electricians 1,481
     impressions (pos 39.7) · electrician seo services 1,095 (37.5) · seo
     for electricians 1,052 (47.7) · electrician seo company 711 (39.6) ·
     electrician local seo 656 (38.6) · seo services for electricians 462.
   - Semrush US: electrician seo 2,900 (KD 22) · seo for electricians
     2,900 (19) · local seo for electricians 880 (9) · electrician seo
     services 590 (9).
   - Title keeps "Local SEO for Electricians" (the live ranking term) and
     adds the head terms; H1 uses the exact top GSC query. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-electricians",
  audience: "Electricians and electrical contractors",
  serviceName: "Local SEO for Electricians",
  meta: {
    title: "Electrician SEO Services | Local SEO for Electricians",
    description:
      "Electrician SEO services that win Google Maps, local search and AI answers: profile, service pages, reviews and links for electrical contractors who want more calls.",
    keywords: [
      "electrician seo",
      "seo for electricians",
      "local seo for electricians",
      "electrician seo services",
      "electrician seo company",
      "electrician local seo",
      "seo services for electricians",
      "electrical contractor seo",
      "local electrician seo",
      "electrician seo agency",
    ],
  },
  hero: {
    h1Lead: "Local SEO for Electricians",
    h1Rest: "That Turns Searches Into Booked Jobs",
    icon: "bolt",
    lead: [
      "Our electrician SEO services put your shop in the Map Pack, on page one and in AI answers for searches like “electrician near me” and “panel upgrade”. We tune your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", build the pages and reviews that win, then track every call.",
    ],
    cta: "Get My Free Electrician SEO Audit",
    ui: {
      kind: "growth",
      maps: "pack",
      ai: "overview",
      growth: "calls",
      business: "Your Electric Co.",
      category: "Electrician",
      query: "electrician near me",
      aiPrompt: "licensed electrician near me for a panel upgrade",
      aiReasons: ["Licensed and insured", "Panel and EV charger pages"],
      growthLabel: "Calls by week",
      leads: [
        ["Panel upgrade call", "Google Maps"],
        ["EV charger quote", "AI Overview"],
        ["Emergency outage call", "Service page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Rank #1",
          title: "The Electrician Locals Call First",
          text: "Your listing tops the pack, so your Call button is the first one locals see.",
        },
        {
          label: "AI Overview",
          badge: "Cited",
          title: "Cited for Panels and EV Chargers",
          text: "Licence details and job pages get you named in Google's AI answer.",
        },
        {
          label: "Calls",
          badge: "Climbing",
          title: "A Steady Climb in Electrical Calls",
          text: "Panel, EV and emergency calls rise and trace back to their source.",
        },
      ],
    },
  },
  searches: {
    title: "What Customers Search Before They Call an Electrician",
    lead: "We build pages and profile signals around the exact phrases homeowners and property managers type.",
    groups: [
      {
        icon: "bolt",
        label: "Urgent electrical searches",
        terms: [
          "emergency electrician near me",
          "24 hour electrician",
          "breaker keeps tripping",
          "burning smell from outlet",
          "power out in half the house",
          "electrician open now",
        ],
      },
      {
        icon: "electric",
        label: "Upgrade and install searches",
        terms: [
          "panel upgrade near me",
          "ev charger installation",
          "whole house generator install",
          "rewire an old house",
          "recessed lighting installer",
          "200 amp service upgrade",
        ],
      },
      {
        icon: "pin",
        label: "Electrician-by-town searches",
        terms: [
          "licensed electrician + your city",
          "residential electrician near me",
          "commercial electrician near me",
          "electrical contractor + your town",
          "best rated electrician nearby",
        ],
      },
    ],
  },
  services: {
    title: "Electrician SEO Services\nWe Run Every Month",
    lead: "Each service targets the jobs you want more of, from panel upgrades to EV chargers.",
    cta: "Audit My Electrical Website",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Electricians",
        desc: "Primary category, service areas, real job photos and a weekly post schedule, set up so you rank in the Map Pack across your territory.",
        points: [
          "Primary category fixed",
          "Service-area setup",
          "Weekly job posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification help",
          },
        ],
      },
      {
        icon: "file",
        title: "Electrical Service and City Pages",
        desc: "A page for every job and town you serve, written around real searches: panel upgrades, EV chargers, generators and rewiring.",
        points: [
          "Panel and EV pages",
          "Town landing pages",
          "Permit and code FAQs",
        ],
        links: [
          {
            href: "/services/electrical-website-design",
            label: "Electrician website design",
          },
        ],
      },
      {
        icon: "star",
        title: "Review Growth for Electrical Contractors",
        desc: "Text requests after every job, a reply to each review, and customers naming the work in their own words.",
        points: [
          "After-job text requests",
          "Owner replies",
          "Job names in reviews",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Technical SEO for Electrician Websites",
        desc: "Speed, mobile layout, schema and indexing fixed so Google crawls every service page and phones load it fast.",
        points: ["Core Web Vitals", "Electrician schema", "Index cleanup"],
        links: [
          { href: "/services/web-design", label: "Websites built to rank" },
        ],
      },
      {
        icon: "layers",
        title: "Citations and Electrical Trade Links",
        desc: "Matching name, address and phone on every directory, plus links from suppliers, trade groups and local news.",
        points: [
          "NAP cleanup",
          "Supplier and trade links",
          "Local press mentions",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile help",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for Electricians",
        desc: "Answer-first pages and steady business facts, so AI assistants like ChatGPT and Gemini, plus Google AI Overviews, name you for electrical jobs.",
        points: [
          "AI Overview answers",
          "Entity consistency",
          "Monthly AI checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Electrician SEO Grows Your Electrical Business",
    lead: "More Map Pack spots, more AI mentions and more calls for the work you want.",
    rank: {
      title: "Rank on Page One for High-Value Electrical Jobs",
      body: [
        "For electrician local SEO, we map searches by job type and town, then build and tune the pages that can win them. Panel upgrades, EV chargers and generators each get a page, and every keyword is tracked week by week.",
      ],
      points: [
        "Job-type keyword map",
        "Town-by-town tracking",
        "Page-one targets",
        "Rival gap reports",
      ],
      cta: "See My Electrical Keyword Gaps",
      keywords: [
        ["electrician near me", 19, 3],
        ["panel upgrade + your city", 27, 2],
        ["ev charger installer", 33, 4],
        ["emergency electrician", 22, 3],
      ],
    },
    ai: {
      title: "Get Named When Locals Ask AI for an Electrician",
      body: [
        "AI assistants favor electricians with licence details, clear service pages and steady reviews. We add structured data, tidy your listings and write direct answers, the same groundwork behind our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        ".",
      ],
      points: [
        "Licence and service facts",
        "FAQ answers on site",
        "Listing consistency",
        "AI mention checks",
      ],
      cta: "Test My AI Recommendations",
      query: "who installs ev chargers near me",
      intro: "For EV charger installs near you,",
      bullets: [
        "Licensed and insured",
        "Detailed EV charger page",
        "Strong recent reviews",
      ],
    },
    leads: {
      title: "Turn Electrical Searches Into Booked Jobs",
      body: [
        "Rankings matter when the phone rings. We track every call and form by page and keyword, sharpen your calls to action, and add ",
        { href: "/services/google-ads", label: "Google Ads for electricians" },
        " when you need jobs this week.",
      ],
      points: [
        "Call tracking by page",
        "Click-to-call on mobile",
        "Quote form on every page",
        "Monthly lead report",
      ],
      cta: "Show Me Where Calls Come From",
      items: [
        ["Panel upgrade call", "Google Maps", "Mon 8:12 AM"],
        ["EV charger quote form", "EV charger page", "Mon 1:40 PM"],
        ["Emergency call", "AI Overview link", "Tue 7:05 AM"],
        ["Lighting estimate request", "Town page", "Tue 3:18 PM"],
      ],
    },
  },
  results: {
    title: "What Changes After Electricians Hire Our Electrician SEO Company",
    lead: "Visible progress in order: a fixed profile first, then pages, reviews and calls that keep building.",
    cta: "Show Me My Electrical Growth Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Profile Fixed and Verified",
        text: "Right categories, service area and hours, so Google stops showing the wrong trade or towns.",
      },
      {
        when: "Month 1",
        title: "Job Pages Go Live",
        text: "Panel, EV charger and generator pages start competing for the searches that pay best.",
      },
      {
        when: "Months 2–4",
        title: "Climbing the Map Pack",
        text: "Fresh reviews and local links push your listing toward the top three in more towns.",
      },
      {
        when: "Month 4 onward",
        title: "A Fuller Job Board",
        text: "More calls for the work you want, tracked by page, so you can see what SEO brings in.",
      },
    ],
    wins: [
      {
        icon: "phone",
        title: "More Calls for Bigger Electrical Jobs",
        text: "Searches for panel upgrades, EV chargers and rewiring land on pages built to book them.",
      },
      {
        icon: "star",
        title: "Reviews Homeowners Trust",
        text: "Steady five-star reviews that mention real jobs, each one answered by your team.",
      },
      {
        icon: "sparkle",
        title: "Named When Locals Ask AI",
        text: "Clear answers and matching facts give ChatGPT and Google AI a reason to suggest you.",
      },
      {
        icon: "trend",
        title: "Less Reliance on Shared Leads",
        text: "Customers call you straight from search instead of a lead site sharing them with rivals.",
      },
    ],
  },
  compare: {
    title: "Zonic vs. a Typical SEO Company for Electricians",
    lead: "How our electrician SEO company differs from what contractors often get elsewhere.",
    rows: [
      {
        topic: "Who the work is built for",
        other: "One general SEO plan sold to every kind of business.",
        zonic:
          "Pages and profile work built around electrical jobs, permits and service areas.",
      },
      {
        topic: "Contract terms",
        other: "Often a long lock-in before you can judge the results.",
        zonic: "Month to month, with every account and listing in your name.",
      },
      {
        topic: "What gets reported",
        other: "Ranking and traffic charts with no link to the phone.",
        zonic:
          "Calls, forms and booked jobs traced to the page and search behind them.",
      },
      {
        topic: "Your Google Business Profile",
        other: "Set up once, then left alone for months.",
        zonic:
          "Job photos, posts, Q&A and review replies kept current every week.",
      },
      {
        topic: "AI search answers",
        other: "Rarely part of the plan, or treated as a buzzword.",
        zonic:
          "Structured data, direct answers and clean listings that AI tools can quote.",
      },
      {
        topic: "Links and citations",
        other: "Bulk directory blasts and links from unrelated sites.",
        zonic:
          "Clean citations plus links from suppliers, trade groups and local news.",
      },
    ],
  },
  steps: {
    title: "How We Run Electrician Local SEO for Electrical Contractors",
    lead: "Our SEO services for electricians put profile and site fixes first, then pages, reviews and links that build each month.",
    items: [
      {
        h: "Electrical SEO Audit and Job Map",
        p: "We review your profile, site and nearby rivals in each town, then list the jobs and searches worth winning first.",
      },
      {
        h: "Fix the Profile, Build the Pages",
        p: "Profile fixes and technical repairs go live in week one, followed by service pages, town pages and review requests.",
      },
      {
        h: "Report Calls and Push What Works",
        p: "Your monthly report breaks rankings, calls and forms down by job type, and we put more effort behind the winners.",
      },
    ],
    audit: [
      ["Map Pack spot", "behind"],
      ["Service pages", "gap"],
      ["Review flow", "open"],
      ["Site speed", "behind"],
    ],
    plan: ["Panel pages", "EV charger page", "Town pages", "Reviews", "Links"],
    launch: ["Profile fixed", "Pages live", "Reviews flowing", "Calls tracked"],
  },
  explore: {
    title: "More Growth Services for Electricians",
    lead: "As an electrician SEO agency, we find SEO works best alongside a fast website and paid search for busy weeks.",
    items: [
      {
        name: "Electrician Marketing",
        sub: "A full growth plan for your shop",
        href: "/services/electrician-marketing-agency",
        icon: "bolt",
      },
      {
        name: "Electrician Websites",
        sub: "Sites that turn visits into calls",
        href: "/services/electrical-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Calls this week, not next quarter",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "The playbook for every trade",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Run electrical plus other trades? Ask about one plan that covers them all.",
  },
  reviews: {
    title: "Why Contractors Rate Our Local SEO Team 5.0 on Google",
    lead: "Read what owners wrote on our Google profile, unedited.",
  },
  pricing: {
    title: "Electrician SEO Plans, Month to Month",
    compareTitle: "Compare Electrician SEO Plans Side by Side",
    addOnsTitle: "Add-Ons for Electrical Contractors",
    customTitle: "Running Several Electrical Branches?",
  },
  faq: {
    title: "Electrician SEO Questions, Answered",
    lead: "Costs, timelines, Maps rankings and what local SEO for electricians includes.",
    items: [
      {
        q: "What is local SEO for electricians?",
        a: "It is the work that gets an electrical contractor found by nearby customers on Google: Business Profile setup, service and town pages, reviews, citations and links. The goal is a top-3 Map Pack spot and page-one rankings for the jobs you want.",
      },
      {
        q: "How much does electrician SEO cost?",
        a: "Our plans are $297, $750 or $1,500 a month, month to month. Single-location shops usually start on the first plan; contractors covering several towns, or who also want Google Ads managed, tend to pick the second or third. The free audit shows which fits.",
      },
      {
        q: "How long does SEO take for an electrical company?",
        a: "Profile fixes and new service pages often lift Maps visibility within weeks. Competitive searches like “electrician near me” in larger cities usually take several months. Your report shows rankings and calls each month, so progress is always visible.",
      },
      {
        q: "Which keywords should an electrician rank for?",
        a: "Start with the jobs that pay plus your towns: “electrician near me”, “panel upgrade” with your city, “EV charger installation”, “generator installer” and “emergency electrician”. We size each one in the audit and build pages for those that bring paying work.",
      },
      {
        q: "How do electricians get into the Google Map Pack?",
        a: "Choose the right primary category, list every service and town, add real job photos, post weekly and earn steady reviews that mention the work. Matching name, address and phone across directories and a strong page for each service do the rest.",
      },
      {
        q: "Do I need a separate page for each electrical service?",
        a: "Yes, for the services you want more of. A dedicated panel upgrade or EV charger page can rank for that search and convert the visitor, while one general services page rarely ranks for any of them.",
      },
      {
        q: "Can electrician SEO work if I serve several towns?",
        a: "Yes. We set your service area on the profile, build a page for each key town with local jobs and details, and track rankings town by town so you see where you lead and where to push.",
      },
      {
        q: "Will AI search change SEO for electricians?",
        a: "It already has. Google AI Overviews and ChatGPT draw on the same signals: clear service pages, licence details, reviews and consistent listings. AI tools usually name the electricians whose SEO is already strong.",
      },
      {
        q: "Do you do SEO for commercial electrical contractors?",
        a: "Yes. Commercial work needs its own pages and searches: tenant build-outs, lighting retrofits, service contracts and maintenance for property managers. We build those pages, add commercial categories to your profile and track business searches apart from residential calls.",
      },
      {
        q: "Do you lock electricians into long contracts?",
        a: "No. Every plan runs month to month, every account and listing stays in your name, and your report shows exactly what we changed each month.",
      },
    ],
  },
  audit: {
    title: "See Where Your Electrical Business Ranks, Free",
    lead: [
      "Send your site and the electrical jobs you want more of. We compare your Map Pack position, website and reviews with nearby contractors, then send a plain plan. Meet ",
      { href: "/about", label: "the team behind it" },
      " or explore ",
      { href: "/services", label: "our full service list" },
      ".",
    ],
    points: [
      "Maps position by town",
      "Electrical keyword gaps",
      "Business Profile review",
      "A clear first-month plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free electrician SEO audit",
      title: "Request Your Electrician SEO Audit",
      subtitle: "Free, no contract, no pressure.",
      submitText: "Send My Electrical Audit",
      messageLabel: "Your website and main electrical services",
      messagePlaceholder:
        "yourwebsite.com, the jobs you want more of and the towns you serve",
    },
  },
  banner: {
    title: "Be the First Electrician Locals Call",
    lead: "Higher Maps spots, AI mentions and a steadier call log, with every change reported.",
  },
};
