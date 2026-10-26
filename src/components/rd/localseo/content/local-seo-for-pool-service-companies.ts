/* Local SEO for Pool Service Companies — redesign draft copy (26 Oct 2026).
   Fresh copy; never reuse the live page, the electricians reference, the
   seo-services-2 draft or /services/pool-service-marketing-agency-2
   (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: pool company seo services 282
     impressions (pos 28.8) · pool company seo 217 (38.3) · seo for pool
     service company 216 (23.4) · pool service search engine optimization
     189 · local seo pool services 180 (11.9) · pool service seo 139 (22.4)
     · local seo for pool companies 114 (18.0) · pool cleaners seo 95 ·
     seo for pool service companies 92.
   - Semrush US: pool company seo 390 (KD 20) · pool builder seo 320 (2) ·
     pool service seo 260 (18) · seo for pool companies 50 (4).
   - Web research (pool SEO guides, builder SEO pages, pool GBP playbooks):
     the clearest finding is that builder buyers research for months while
     service customers search reactively and pick on distance and reviews,
     yet most pages blend the two. Guides warn against adding Swimming pool
     contractor unless you build, and list Pool cleaning service / Swimming
     pool repair service as service-side categories. Nothing covered route
     towns, opening-season timing or AI answers on water care. Those gaps
     became the builder card, the builder-vs-service, category and timing
     FAQs, and the route-town grid hero. Customer searches: pool cleaning
     service near me, weekly pool service, green pool cleanup, pool pump
     repair, pool builders near me, pool leak detection.
   - Title keeps "Pool Service SEO" and "Cleaning & Repair" (live title)
     and adds the head term "Pool Company SEO"; H1 uses the head term;
     "pool builder seo" (320) owns a service card and the FAQ title. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-pool-service-companies",
  audience: "Pool service, repair and pool building companies",
  serviceName: "Local SEO for Pool Service Companies",
  meta: {
    title: "Pool Service SEO | Pool Company SEO for Cleaning & Repair",
    description:
      "Pool company SEO for cleaning routes, repair shops and builders: Maps rankings by route town, service pages, client reviews and AI answers for steady accounts.",
    keywords: [
      "pool company seo",
      "pool builder seo",
      "pool service seo",
      "pool company seo services",
      "seo for pool companies",
      "seo for pool service companies",
      "local seo for pool companies",
      "pool service search engine optimization",
      "local seo pool services",
      "pool cleaners seo",
    ],
  },
  hero: {
    h1Lead: "Pool Company SEO",
    h1Rest: "That Wins Weekly Accounts and New Builds",
    icon: "pool",
    lead: [
      "Weekly cleaning, a pump that quit, a new build: pool owners settle each one on Google or in an AI answer. Our pool service SEO puts your company in those results through ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile tuning",
      },
      ", route-town pages, reviews from regular clients and clean listings.",
    ],
    cta: "Get My Free Pool Company Audit",
    ui: {
      kind: "growth",
      maps: "towns",
      ai: "chat",
      growth: "calendar",
      business: "Your Pool Service",
      category: "Pool cleaning service",
      query: "pool service near me",
      areas: [
        "North route",
        "South route",
        "Gated communities",
        "New developments",
      ],
      aiPrompt: "Who services pools weekly in my neighborhood?",
      aiReasons: ["Weekly service routes", "Opening and closing crews"],
      growthLabel: "Route stops this week",
      leads: [
        ["Weekly cleaning start", "Google Maps"],
        ["Pool opening", "AI answer"],
        ["Pump repair visit", "Equipment page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 on route",
          title: "Top Pool Service Along Your Routes",
          text: "Your listing leads the map in the towns your techs already drive.",
        },
        {
          label: "AI answers",
          badge: "Recommended",
          title: "The Pool Pro AI Suggests Nearby",
          text: "AI tools recommend you for weekly service, openings and repairs.",
        },
        {
          label: "Routes",
          badge: "Fuller",
          title: "Routes Filling With Weekly Stops",
          text: "New weekly accounts and repairs fill each day's route from search.",
        },
      ],
    },
  },
  searches: {
    title: "What Pool Owners Search Before They Pick a Company",
    lead: "Pages and profile details mirror what pool owners type when the water turns or the pump stops.",
    groups: [
      {
        icon: "pool",
        label: "Pool cleaning and upkeep searches",
        terms: [
          "pool cleaning service near me",
          "weekly pool service",
          "green pool cleanup",
          "pool opening service",
          "pool closing near me",
          "saltwater pool maintenance",
        ],
      },
      {
        icon: "wrench",
        label: "Pool repair and equipment searches",
        terms: [
          "pool pump repair near me",
          "pool filter replacement",
          "pool heater not working",
          "pool leak detection",
          "variable speed pump install",
          "pool resurfacing near me",
        ],
      },
      {
        icon: "construction",
        label: "Pool builder and town searches",
        terms: [
          "pool builders near me",
          "inground pool installation",
          "custom pool builder + your city",
          "pool companies + your town",
          "commercial pool service",
          "hoa pool maintenance",
        ],
      },
    ],
  },
  services: {
    title: "Pool Company SEO Services for\nCleaning, Repair and Pool Builds",
    lead: "Six monthly workstreams, split so route clients and new-build buyers each land on the right page.",
    cta: "Audit My Pool Company Website",
    items: [
      {
        icon: "pin",
        title: "Pool Service Profile and Categories",
        desc: "Pool cleaning or repair as primary, builder categories only if you build, every route town listed and fresh photos of finished service.",
        points: [
          "Cleaning or repair primary",
          "Route towns listed",
          "Clear-water photo posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help verifying a profile",
          },
        ],
      },
      {
        icon: "pool",
        title: "Weekly Pool Cleaning and Repair Pages",
        desc: "Weekly service, green-pool cleanups, openings, closings and pump, filter and heater repair each get a page aimed at the towns on your routes.",
        points: [
          "Weekly service page",
          "Equipment repair pages",
          "Opening and closing pages",
        ],
        links: [
          {
            href: "/services/pool-service-website-design",
            label: "Pool service website design",
          },
        ],
      },
      {
        icon: "construction",
        title: "Pool Builder SEO for New Construction",
        desc: "Builders sell over months, so we add portfolio pages, build-process guides and design FAQs that rank for custom pool searches and hold buyers' interest.",
        points: [
          "Portfolio by pool type",
          "Build-process guide",
          "Design and permit FAQs",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Reviews From Pool Route Clients",
        desc: "Clients on your route get a short review link after service, reviews that mention the job get replies, and listings stay identical everywhere.",
        points: [
          "Post-visit review links",
          "Replies to every review",
          "Identical listings",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended listing help",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Pool Website Speed and Structure",
        desc: "Service and town pages linked so Google crawls them, photos compressed for phones, and schema that spells out each pool service and area.",
        points: [
          "Internal link structure",
          "Phone-first speed",
          "Service and area schema",
        ],
        links: [
          { href: "/services/web-design", label: "Web design that ranks" },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for Pool Companies",
        desc: "Straight answers on water chemistry, green pools, equipment life and build timelines give AI Overviews and chat assistants solid reasons to name you.",
        points: [
          "Water-care answers",
          "Build timeline facts",
          "AI mention checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI search services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Pool Service SEO Grows Routes and Builds",
    lead: "Route towns climbing into the top three, AI answers naming you, and leads you can trace.",
    rank: {
      title: "Move Up for Pool Cleaning and Repair Searches",
      body: [
        "We split searches into route work, repairs and new builds, then match each to the towns you serve. Pages get built or tightened to win them, and a weekly position check shows the moment a town tips your way.",
      ],
      points: [
        "Route, repair and build map",
        "Positions logged weekly",
        "Builder term targets",
        "Gaps against rivals",
      ],
      cta: "Find My Pool Keyword Gaps",
      keywords: [
        ["pool cleaning service near me", 22, 3],
        ["pool pump repair + your city", 28, 2],
        ["pool builders near me", 36, 5],
        ["weekly pool service", 19, 2],
      ],
    },
    ai: {
      title: "Earn AI Mentions for Pool Care and Repair",
      body: [
        "AI assistants usually suggest pool companies whose pages explain the service clearly and whose listings match. Our pages answer green-water, equipment and opening questions directly, carry structured data, and get checked monthly as part of our ",
        { href: "/services/ai-seo-services", label: "AI SEO program" },
        ".",
      ],
      points: [
        "Green-water answers",
        "Equipment and build facts",
        "Listings that match",
        "AI checks each month",
      ],
      cta: "See What AI Says About My Pool Company",
      query: "who can fix a green pool near me",
      intro: "For green pool cleanups nearby,",
      bullets: [
        "Clear green-pool page",
        "Reviews from route clients",
        "Service hours listed",
      ],
    },
    leads: {
      title: "Tie Every Pool Lead to the Page That Won It",
      body: [
        "Calls, quote forms and build consultations are logged against the page and search that brought them, so cleaning and construction leads stay separate. Mobile pages get faster quote buttons, and ",
        {
          href: "/services/google-ads",
          label: "Google Ads for pool companies",
        },
        " can cover opening season.",
      ],
      points: [
        "Calls tagged by town",
        "Build consults tracked",
        "Quick mobile quote",
        "Monthly lead summary",
      ],
      cta: "Show Me My Pool Lead Sources",
      items: [
        ["Weekly service quote", "Google Maps", "Mon 7:38 AM"],
        ["Pump repair call", "Repair page", "Mon 3:12 PM"],
        ["New build consult", "AI Overview link", "Wed 11:05 AM"],
        ["Green pool cleanup", "Town page", "Fri 9:44 AM"],
      ],
    },
  },
  results: {
    title: "What Pool Companies Gain After Joining Zonic",
    lead: "Change comes in layers: categories sorted, service and builder pages live, then fuller routes and consults.",
    cta: "Plan My Pool Season Growth",
    milestones: [
      {
        when: "Early on",
        title: "Pool Categories Set Right",
        text: "Cleaning, repair or builder categories matched to your real work, with every route town listed on the profile.",
      },
      {
        when: "Before opening season",
        title: "Cleaning and Repair Pages Live",
        text: "Weekly service, green-pool, equipment and builder pages are published early enough to be indexed before pools open.",
      },
      {
        when: "Opening season",
        title: "More Route Towns in Reach",
        text: "Steady reviews from weekly clients usually strengthen your map position across more of the towns you drive.",
      },
      {
        when: "Next spring",
        title: "Fuller Routes, Steadier Builds",
        text: "Routes tend to fill in around current stops and builder inquiries pick up, each traced to its source page.",
      },
    ],
    wins: [
      {
        icon: "pool",
        title: "More Weekly Service Accounts Nearby",
        text: "Pool owners near your existing stops can find you easily, so new accounts slot into routes you already run.",
      },
      {
        icon: "wrench",
        title: "Repair Calls in the Busy Months",
        text: "Pump, filter and heater pages catch owners whose equipment fails just as swim season starts.",
      },
      {
        icon: "construction",
        title: "Serious Buyers for New Pool Builds",
        text: "Portfolio pages and build guides help keep long-researching buyers on your site instead of a competitor's gallery.",
      },
      {
        icon: "star",
        title: "Reviews From Clients Who See You Weekly",
        text: "Regular customers describe clear water and reliable visits, which reassures the next pool owner comparing companies.",
      },
    ],
  },
  compare: {
    title: "Pool Companies: Zonic Next to the Usual SEO Agency",
    lead: "Seasonal demand, routes and builds: where our pool work differs from the usual plan.",
    rows: [
      {
        topic: "Opening and closing seasons",
        other: "Flat effort all year, missing the spring rush for openings.",
        zonic:
          "Opening, closing and green-pool pages prepared ahead of each season's spike in searches.",
      },
      {
        topic: "Service vs construction buyers",
        other:
          "Cleaning, repair and new builds squeezed into one keyword plan.",
        zonic:
          "Separate pages and tracking for route clients and buyers researching a new pool.",
      },
      {
        topic: "Route-town coverage",
        other:
          "Pages aimed at a whole metro, regardless of where trucks drive.",
        zonic:
          "A page for each town on your routes, with local jobs and client reviews.",
      },
      {
        topic: "Profile category choice",
        other:
          "Extra pool categories added freely, inviting suspensions and mixed signals.",
        zonic:
          "Cleaning, repair or builder category matched to real revenue, with nothing padded on.",
      },
      {
        topic: "Equipment repair searches",
        other: "Repair work hidden in a list on the homepage.",
        zonic:
          "Pump, filter, heater and leak pages that answer owners when equipment fails.",
      },
      {
        topic: "Ad spend and billing",
        other: "Ad spend markups are common, and terms can outlast the season.",
        zonic:
          "Month-to-month billing, and a 0% markup on any Google Ads budget we manage.",
      },
    ],
  },
  steps: {
    title: "Local SEO for Pool Companies in Three Steps",
    lead: "Blocking issues get fixed early, then pages, reviews and links build through the off-season.",
    items: [
      {
        h: "Pool Route and Ranking Audit",
        p: "We map where your profile ranks across each route town, review your site, and size up the pool companies showing above you.",
      },
      {
        h: "Pool Pages Live Before Opening Season",
        p: "Category and site fixes come first. Cleaning, repair and builder pages follow on a schedule that has them indexed before pools open.",
      },
      {
        h: "Pool Leads Reported, Effort Adjusted",
        p: "Each month shows rankings, calls and build consults by service and town, and next month's work leans toward whatever fills routes fastest.",
      },
    ],
    audit: [
      ["Route coverage", "behind"],
      ["Repair pages", "gap"],
      ["Client reviews", "open"],
      ["Site speed", "good"],
    ],
    plan: [
      "Weekly service page",
      "Repair pages",
      "Builder portfolio",
      "Reviews",
      "HOA links",
    ],
    launch: [
      "Categories fixed",
      "Pages indexed",
      "Reviews requested",
      "Leads tracked",
    ],
  },
  explore: {
    title: "Other Services to Pair With SEO for Pool Service Companies",
    lead: "A site that books quotes and ads for opening season help every ranking pay off sooner.",
    items: [
      {
        name: "Pool Service Marketing",
        sub: "All lead channels, one plan",
        href: "/services/pool-service-marketing-agency",
        icon: "pool",
      },
      {
        name: "Pool Service Websites",
        sub: "Pages that book route quotes",
        href: "/services/pool-service-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads for Pools",
        sub: "Calls before opening season",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Service Trades SEO",
        sub: "The method behind every trade",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Run a pool supply store or spa service too? Ask about one plan for both.",
  },
  reviews: {
    title: "Pool Company Owners, See Our 5.0 Google Reviews",
    lead: "Each one was posted to Google by a client who runs a business, shown here unedited.",
  },
  pricing: {
    title: "SEO Plans for Pool Companies, Month to Month",
    compareTitle: "Compare Plans for Pool Service Companies",
    addOnsTitle: "Add-Ons for Pool Builders and Service Pros",
    customTitle: "Multiple Pool Routes or Service Areas?",
  },
  faq: {
    title: "Pool Service and Pool Builder SEO Questions",
    lead: "Seasons, categories, builder versus service work and costs, answered plainly.",
    items: [
      {
        q: "What does SEO for pool service companies involve?",
        a: "Monthly work on the signals Google uses to rank nearby pool businesses: the Business Profile, pages for each service and route town, client reviews, consistent listings, local links and site health. The aim is to show up first when a pool owner nearby needs cleaning, repairs or a build.",
      },
      {
        q: "How much does pool company SEO cost?",
        a: "There are three plans: $297, $750 and $1,500 a month, with no long contract. A single-route cleaner usually fits the first, while builders or multi-town service companies that want ads handled as well often need a larger plan. Your audit ends with a recommendation.",
      },
      {
        q: "Is pool builder SEO different from pool service SEO?",
        a: "Yes. Builder buyers research for months, compare portfolios and want design and permit answers, so builder SEO leans on project pages and guides. Service customers search when the water turns or a pump fails and pick on distance and reviews, so service SEO leans on maps and route towns.",
      },
      {
        q: "When should a pool company start working on SEO?",
        a: "Ideally in late fall or winter. New pages and profile changes take weeks to be indexed and climb, so off-season work is ranking when openings and green-pool calls surge in spring. Builders benefit from starting early too, since buyers plan months ahead.",
      },
      {
        q: "Which Business Profile category should a pool company choose?",
        a: "Pick the one matching most of your revenue: a cleaning-focused route usually fits Pool cleaning service, a repair shop fits Swimming pool repair service, and builders use Swimming pool contractor. Add a secondary category only for work you really do; padding categories invites trouble.",
      },
      {
        q: "Can a pool service rank in every town on its routes?",
        a: "It can rank in many of them. Proximity matters on maps, so towns farther from your address need their own page with local jobs, reviews from those clients and service details. We track each route town so you can see which ones are improving.",
      },
      {
        q: "Do reviews from weekly pool clients help rankings?",
        a: "Yes, a lot. Regular clients are your best reviewers because they see the work every week. Steady reviews that mention cleaning, repairs or equipment strengthen map rankings and give AI tools specific details to repeat. We automate the request after service visits.",
      },
      {
        q: "Can AI Overviews recommend my pool cleaning company?",
        a: "They can when your basics are solid. Google's AI summaries lean on pages that explain each service, listings that agree, a steady flow of reviews and plain answers to questions such as how to clear a green pool. Companies already holding top map spots tend to be cited, so the work overlaps.",
      },
      {
        q: "Do you handle SEO for commercial and HOA pool service?",
        a: "Yes. HOAs, apartment complexes and hotels search for contract maintenance, chemical logs and health-code compliance, not backyard cleaning. That work gets its own pages and profile services, with commercial inquiries counted separately from homeowner calls.",
      },
      {
        q: "Am I locked into a pool SEO contract?",
        a: "No. Cancel whenever you like; every login stays in your name. Each report lists what changed, and seasonal companies can scale effort up before opening and back down after closing, with no fees or notice periods.",
      },
    ],
  },
  audit: {
    title: "Free Route-Town Ranking Check for Pool Companies",
    lead: [
      "Tell us your routes and the pool work you want more of, whether cleaning, repairs or builds. We put your map spots, pages and reviews beside the pool companies near you and send a plain plan. Meet ",
      { href: "/about", label: "the people behind it" },
      " or see ",
      { href: "/services", label: "our full services" },
      ".",
    ],
    points: [
      "Rank by route town",
      "Cleaning and builder gaps",
      "Category check",
      "A first-season plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free pool company SEO audit",
      title: "Get a Pool Service SEO Review",
      subtitle: "Free, honest and contract-free.",
      submitText: "Send My Pool Audit",
      messageLabel: "Your website and the pool services you offer",
      messagePlaceholder:
        "yourwebsite.com, cleaning, repair or builds, and your route towns",
    },
  },
  banner: {
    title: "Top the Map Wherever Your Pool Trucks Go",
    lead: "Route-town rankings, AI mentions and logged leads, gathered in a monthly report you can skim.",
  },
};
