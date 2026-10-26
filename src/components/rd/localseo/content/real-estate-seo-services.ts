/* Real Estate SEO Services — redesign draft copy (26 Oct 2026).
   Fresh copy; never reuse the live page, the electricians reference or
   the real estate marketing draft (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: real estate seo services 1,647
     impressions (pos 28.4) · real estate seo company 1,602 (28.1) · real
     estate seo companies 1,015 · real estate seo agency 1,009 · seo
     services for real estate agents 871 (25.7) · seo services for real
     estate 810 · real estate seo expert 612 · local seo for real estate
     agents 546 (22.7) · real estate seo consultant 493 · local seo for
     real estate 423 · realtor seo company 378 (13.1). "cheap seo for
     realtors" (1,408) is deliberately not targeted (owner: no price talk).
   - Semrush US: real estate seo 2,900 (KD 28) · real estate seo company
     1,300 (23) · real estate seo services 1,300 (32) · seo for real estate
     agents 880 (27) · seo for realtors 720 (28) · realtor seo 320 (28).
   - Web research (top results for "real estate seo services", agent
     Business Profile guides, AI-search pieces for realtors): ranking
     pages cover IDX/listing crawlability, neighborhood and community
     pages, the agent vs agency category choice, service-area setup for
     agents without walk-in offices, and reviews. AI recommendation
     studies point at Google profiles, reviews and community content.
     Gaps: no fair housing care on area pages, no seller vs buyer lead
     split, little on competing with listing portals. Those became the
     portal-gap rank row, the IDX card and the fair housing FAQ.
   - Title keeps "Real Estate SEO Services" (live top query); H1 uses the
     head term "real estate seo". Listing portals are never named. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/real-estate-seo-services",
  audience: "Real estate agents, teams and brokerages",
  serviceName: "Real Estate SEO Services",
  meta: {
    title: "Real Estate SEO Services | SEO for Realtors and Agents",
    description:
      "Real estate SEO services for agents, teams and brokerages: Google Maps, neighborhood pages, IDX fixes, closing reviews and AI search that bring seller leads.",
    keywords: [
      "real estate seo",
      "real estate seo services",
      "real estate seo company",
      "seo for real estate agents",
      "seo for realtors",
      "realtor seo",
      "seo services for real estate agents",
      "local seo for real estate agents",
      "real estate seo agency",
      "realtor seo company",
    ],
  },
  hero: {
    h1Lead: "Real Estate SEO",
    h1Rest: "for Agents Who Want to Own Their Farm Area",
    icon: "home",
    lead: [
      "Real estate SEO services that help sellers and buyers find you on Google Maps, page one and AI answers before they open a listing portal. We build out your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", publish neighborhood guides, fix IDX indexing and tag each lead by source.",
    ],
    cta: "Get My Free Real Estate SEO Audit",
    ui: {
      kind: "growth",
      maps: "grid",
      ai: "overview",
      growth: "feed",
      business: "Your Realty Team",
      category: "Real estate agent",
      query: "realtor near me",
      aiPrompt: "best real estate agent near me to sell my home",
      aiReasons: ["Neighborhood market guides", "Recent closing reviews"],
      growthLabel: "New seller and buyer leads",
      leads: [
        ["Listing appointment", "Google Maps"],
        ["Home value request", "AI Overview"],
        ["Buyer tour request", "Neighborhood page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top 3 farm-wide",
          title: "The Agent Your Farm Area Sees",
          text: "Your profile ranks across every neighborhood in your farm area.",
        },
        {
          label: "AI Overview",
          badge: "Cited",
          title: "Cited When Sellers Ask Who to Hire",
          text: "Neighborhood guides and reviews get you named in AI Overviews.",
        },
        {
          label: "Leads",
          badge: "Growing",
          title: "Seller and Buyer Leads From Search",
          text: "Listing appointments and valuation requests arrive from local search.",
        },
      ],
    },
  },
  searches: {
    title: "What Sellers and Buyers Search Before Calling a Realtor",
    lead: "Area guides and profile signals are built around the words home sellers and buyers actually type.",
    groups: [
      {
        icon: "home",
        label: "Home seller searches for a realtor",
        terms: [
          "sell my house + your city",
          "what is my home worth",
          "listing agent near me",
          "realtor to sell my condo",
          "how to sell a house fast",
          "top selling agent + your town",
        ],
      },
      {
        icon: "search",
        label: "Homebuyer searches for homes and agents",
        terms: [
          "homes for sale in + neighborhood",
          "buyer's agent near me",
          "first-time home buyer agent",
          "new construction homes + your city",
          "condos for sale downtown",
          "homes near + school district",
        ],
      },
      {
        icon: "pin",
        label: "Real estate agent-by-area searches",
        terms: [
          "realtor near me",
          "real estate agent + your town",
          "luxury real estate agent + your city",
          "relocation realtor",
          "real estate brokerage near me",
          "commercial real estate agent near me",
        ],
      },
    ],
  },
  services: {
    title: "SEO for Real Estate Agents\nand Brokerage Teams",
    lead: "Each service from our real estate SEO agency is aimed at the neighborhoods and listing types you want more of, from condos to luxury homes.",
    cta: "Audit My Real Estate Site",
    items: [
      {
        icon: "pin",
        title: "Agent and Brokerage Profiles on Google Maps",
        desc: "The right agent or agency category, a service area matching the towns you sell in, listing photos, open-house posts and Q&A.",
        points: [
          "Agent vs agency category",
          "Service-area towns",
          "Open-house posts",
        ],
        links: [
          {
            href: "/services/google-business-profile-services-real-estate-agents",
            label: "Profiles for agents",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
      {
        icon: "building",
        title: "Neighborhood and Community Pages for Agents",
        desc: "Pages for each subdivision, school zone and condo building you sell, with market notes, commute details and listings buyers can browse.",
        points: [
          "Subdivision guides",
          "School-zone pages",
          "Condo building pages",
        ],
        links: [
          {
            href: "/services/real-estate-agent-website-design",
            label: "Real estate agent websites",
          },
        ],
      },
      {
        icon: "tool",
        title: "IDX and Technical SEO for Real Estate Sites",
        desc: "Listing feeds Google can crawl, clean URLs for each property, sold-listing handling, schema and quick mobile pages for buyers on the move.",
        points: [
          "Crawlable IDX pages",
          "Sold-listing redirects",
          "Listing schema",
        ],
        links: [{ href: "/services/web-design", label: "Sites built to rank" }],
      },
      {
        icon: "star",
        title: "Seller and Buyer Reviews for Realtors",
        desc: "A request at keys handoff, a reminder a week later and replies that name the neighborhood, so new reviews mention the areas you sell.",
        points: [
          "Keys-handoff requests",
          "Neighborhood in replies",
          "Team review routing",
        ],
        links: [],
      },
      {
        icon: "layers",
        title: "Real Estate Citations and Local Links",
        desc: "Consistent contact details on listing portals, brokerage pages and data aggregators, plus links from lenders, builders, HOAs and local press.",
        points: [
          "Portal profile cleanup",
          "Lender and builder links",
          "Local press mentions",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile recovery",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for Realtors and Teams",
        desc: "Answer-first market pages and aligned agent details help ChatGPT, Gemini and AI Overviews mention you when people ask who sells homes nearby.",
        points: [
          "Market Q&A pages",
          "Agent entity facts",
          "AI mention tracking",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI search services" },
        ],
      },
    ],
  },
  growth: {
    title: "How SEO for Realtors Builds Your Listing Pipeline",
    lead: "Higher Maps visibility, more AI mentions and seller inquiries you can trace to a page.",
    rank: {
      title: "Compete With Listing Portals on Area Searches",
      body: [
        "Portals own broad “homes for sale” terms, so we target what they serve poorly: subdivision names, school zones and seller questions. Each area page is tracked weekly by a real estate SEO expert, and we keep building wherever you sit close to page one.",
      ],
      points: [
        "Subdivision keyword map",
        "Seller-intent targets",
        "Area-by-area tracking",
        "Portal gap reports",
      ],
      cta: "See My Neighborhood Gaps",
      keywords: [
        ["realtor near me", 26, 4],
        ["homes for sale in + subdivision", 38, 5],
        ["sell my house + your city", 21, 3],
        ["listing agent near me", 30, 2],
      ],
    },
    ai: {
      title: "Earn AI Mentions for Your Neighborhood Expertise",
      body: [
        "When someone asks which agent knows a neighborhood, AI assistants pull from Google reviews, area guides and community content. Our real estate SEO experts write those guides, tidy your profile facts and track the mentions, building on our ",
        { href: "/services/ai-seo-services", label: "AI SEO program" },
        ".",
      ],
      points: [
        "Area guides AI can quote",
        "Agent facts kept aligned",
        "Review themes by area",
        "Monthly mention log",
      ],
      cta: "Test My AI Visibility as an Agent",
      query: "which agent sells homes in my neighborhood",
      intro: "For selling in your neighborhood,",
      bullets: [
        "Recent area sales noted",
        "Detailed neighborhood guide",
        "Steady seller reviews",
      ],
    },
    leads: {
      title: "See Which Pages Bring Seller and Buyer Leads",
      body: [
        "We tag every call, form and showing request by page and source, separate seller leads from buyer leads, and add ",
        { href: "/services/google-ads", label: "Google Ads for real estate" },
        " when a new listing or farm area needs a push.",
      ],
      points: [
        "Seller vs buyer tagging",
        "Showing request forms",
        "Home value form tracking",
        "Monthly lead summary",
      ],
      cta: "Show Me My Lead Sources",
      items: [
        ["Home value request", "Neighborhood page", "Mon 8:47 AM"],
        ["Listing agent call", "Google Maps", "Mon 1:12 PM"],
        ["Showing request", "Condo building page", "Tue 6:30 PM"],
        ["Relocation inquiry", "AI Overview link", "Wed 9:22 AM"],
      ],
    },
  },
  results: {
    title: "How Real Estate Agents Grow With Our Real Estate SEO Experts",
    lead: "It comes in order: a sharper agent profile, then area guides, closing reviews and seller leads you can trace.",
    cta: "Plan My Farm-Area Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Agent Profile Cleaned Up",
        text: "We fix your category, service-area towns and contact details, so Google starts tying you to the right neighborhoods.",
      },
      {
        when: "Month 1",
        title: "First Neighborhood Guides Live",
        text: "Subdivision and school-zone guides publish and begin competing for area searches that listing portals cover thinly.",
      },
      {
        when: "Months 2–4",
        title: "IDX Listing Pages Get Indexed",
        text: "Crawlable listing pages and fresh closing reviews tend to move your profile toward more local map spots.",
      },
      {
        when: "Next selling season",
        title: "More Seller Conversations Logged",
        text: "Home value requests and listing calls start to grow, each tagged to the neighborhood page or profile behind it.",
      },
    ],
    wins: [
      {
        icon: "home",
        title: "More Listing Appointments From Search",
        text: "Homeowners researching a sale find your area guides and home value form while they compare local agents.",
      },
      {
        icon: "star",
        title: "Reviews That Name Your Neighborhoods",
        text: "Each closing can add a Google review mentioning the area, which helps the next seller there decide.",
      },
      {
        icon: "users",
        title: "Buyer Inquiries That Come Straight to You",
        text: "Buyers browsing your neighborhood guides contact you directly instead of being routed through a listing portal.",
      },
      {
        icon: "sparkle",
        title: "Your Market Knowledge Quoted by AI",
        text: "Detailed area guides give ChatGPT and Google AI Overviews something specific to quote when people ask about your market.",
      },
    ],
  },
  compare: {
    title: "Realtor SEO From Zonic Next to a One-Size Plan",
    lead: "What agents often get from generalist SEO providers, and what we do for real estate.",
    rows: [
      {
        topic: "Neighborhood and farm-area pages",
        other:
          "Often citywide pages that compete head-on with listing portals for broad terms.",
        zonic:
          "A guide for each subdivision, school zone or condo building you actually farm.",
      },
      {
        topic: "IDX listing indexing",
        other:
          "IDX feeds left framed or duplicated, so listing pages rarely get indexed.",
        zonic:
          "Crawlable listing pages where your provider allows, plus clean handling once homes sell.",
      },
      {
        topic: "Fair housing care in copy",
        other:
          "Area pages can drift into describing who a neighborhood suits or attracts.",
        zonic:
          "Factual notes on homes, schools, parks and commutes, and you review every page first.",
      },
      {
        topic: "Agent vs brokerage profiles",
        other:
          "Team members' profiles can end up competing with the brokerage's own listing.",
        zonic:
          "One planned profile structure for solo agents, teams and brokerages, following brokerage policy.",
      },
      {
        topic: "Seller and buyer lead reports",
        other:
          "Traffic charts that never separate seller inquiries from buyer browsing.",
        zonic:
          "Calls, showing requests and home value forms tracked, then split into seller and buyer leads.",
      },
      {
        topic: "Agreements for agents and teams",
        other:
          "Long agreements that can outlast a slow market or a team change.",
        zonic:
          "Month to month, with your agent profile, site accounts and listings kept in your name.",
      },
    ],
  },
  steps: {
    title: "Working With Our Real Estate SEO Company in Three Stages",
    lead: "Profile and IDX fixes land first; neighborhood pages, reviews and local links build from there.",
    items: [
      {
        h: "Audit Your Market and Farm Areas",
        p: "We map the agents winning each target area, check your profile and site against them, then order neighborhoods by search demand and listing potential.",
      },
      {
        h: "Fix the Foundation, Publish Area Pages",
        p: "Category, IDX and speed fixes go live first. Neighborhood guides, review requests and local links follow in the order we set together.",
      },
      {
        h: "Report Leads by Neighborhood",
        p: "Monthly reports split seller and buyer leads by page and area, and we move effort to the neighborhoods producing appointments.",
      },
    ],
    audit: [
      ["Agent profile", "behind"],
      ["Area pages", "gap"],
      ["IDX indexing", "open"],
      ["Closing reviews", "behind"],
    ],
    plan: [
      "Subdivision guides",
      "Seller pages",
      "IDX cleanup",
      "Reviews",
      "Local links",
    ],
    launch: [
      "Category corrected",
      "Area guides live",
      "Reviews requested",
      "Leads split by type",
    ],
  },
  explore: {
    title: "Grow Your Real Estate Business Beyond SEO",
    lead: "Rankings work harder with a listing-friendly website and paid reach for new farm areas.",
    items: [
      {
        name: "Real Estate Marketing",
        sub: "One plan for listings and leads",
        href: "/services/real-estate-marketing-agency",
        icon: "home",
      },
      {
        name: "Agent Websites",
        sub: "IDX sites built for home searches",
        href: "/services/real-estate-agent-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Paid reach for a new listing",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Local SEO for Small Business",
        sub: "The method behind every plan",
        href: "/services/local-seo-for-small-business",
        icon: "pin",
      },
    ],
    other:
      "Leading a team or brokerage with several agents? We can plan profiles and pages for each of them.",
  },
  reviews: {
    title: "Agents Trust Reviews, So Read Our 5.0 on Google",
    lead: "Owners from many industries posted these on our Google profile; nothing is edited.",
  },
  pricing: {
    title: "Real Estate SEO Plans With Monthly Terms",
    compareTitle: "Compare Realtor SEO Plans for Agents and Teams",
    addOnsTitle: "Add-Ons for Listing Launches and New Areas",
    customTitle: "Running a Brokerage With Many Agents?",
  },
  faq: {
    title: "What Agents Ask About Real Estate SEO",
    lead: "Costs, timelines, IDX, Google profiles and AI answers for agents, teams and brokerages.",
    items: [
      {
        q: "What do real estate SEO services include?",
        a: "They cover the work that gets an agent found by local sellers and buyers: a Business Profile with an accurate agent category and service area, neighborhood pages, IDX and technical fixes, closing reviews, citations and local links. Each month you get rankings and leads split by area.",
      },
      {
        q: "What does local SEO for real estate agents involve?",
        a: "It focuses on the Map Pack and place-based searches like “realtor near me” or a subdivision name. The work is a tuned profile, one guide per neighborhood you farm, reviews that name those neighborhoods, and matching details across brokerage and portal profiles.",
      },
      {
        q: "Can SEO for real estate agents compete with listing portals?",
        a: "Yes, on the right searches. Portals win broad listing terms, but they serve subdivision names, school zones and seller questions poorly. An agent with detailed area guides and a strong profile can rank there, and those leads come straight to you instead of being shared.",
      },
      {
        q: "How are your real estate SEO services priced?",
        a: "There are three plans: $297, $750 and $1,500 a month, all month to month, so even the affordable entry plan has no lock-in. A solo agent farming one market often begins with Foundation, while teams across several towns, or those adding Google Ads, lean toward Growth or Authority.",
      },
      {
        q: "How long does SEO for realtors take to work?",
        a: "Profile and IDX fixes usually move an agent on Maps within weeks. Guides for quieter subdivisions often reach page one in a few months, while metro-wide terms take longer. Your report tracks each neighborhood, so you can see where you are gaining.",
      },
      {
        q: "Should a real estate agent have their own Google Business Profile?",
        a: "Solo agents should, usually with the real estate agent category and a service area instead of a home address. Agents on a team need to coordinate with the brokerage profile so the two do not compete, and to follow brokerage policy. We set up whichever structure fits.",
      },
      {
        q: "Does IDX hurt my real estate website's SEO?",
        a: "Framed IDX feeds and copied listing text rarely rank, because the same content sits on many sites. We make listing pages crawlable where your provider allows, handle sold listings cleanly and pair the feed with original area pages that give Google a reason to rank you.",
      },
      {
        q: "Are neighborhood pages safe under fair housing rules?",
        a: "They are when written carefully. We describe homes, schools, parks and commute times factually, and avoid language about who lives in an area or who an area suits. You review every page before it goes live.",
      },
      {
        q: "How do I choose the right real estate SEO company?",
        a: "Ask for reporting by neighborhood and lead type, IDX experience, accounts and listings kept in your name, and month-to-month terms. A good realtor SEO company explains what it changed each month and ties it to inquiries, not just traffic.",
      },
      {
        q: "How can a realtor appear in ChatGPT and Google AI Overviews?",
        a: "Both lean on agents with clear profile facts, steady reviews that mention neighborhoods, and area guides that answer questions directly. We build those sources, then ask AI assistants about agents in your market every month and report what they say.",
      },
    ],
  },
  audit: {
    title: "Find Out Where You Rank in Your Farm Area, Free",
    lead: [
      "Send your site and the neighborhoods you want more listings in. We check your Map Pack spot, area pages and reviews against the agents ranking there, then send a clear plan. You can also ",
      { href: "/about", label: "meet the people behind it" },
      " or browse ",
      { href: "/services", label: "every Zonic service" },
      ".",
    ],
    points: [
      "Map Pack spot by area",
      "Neighborhood keyword gaps",
      "IDX and site health",
      "A first-month action plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free real estate SEO audit",
      title: "Request a Realtor SEO Audit",
      subtitle: "Free, quick and with no contract.",
      submitText: "Send My Market Audit",
      messageLabel: "Your website and target neighborhoods",
      messagePlaceholder:
        "yoursite.com, the areas you farm and whether you want seller or buyer leads",
    },
  },
  banner: {
    title: "Own the Searches in the Neighborhoods You Sell",
    lead: "Stronger area rankings, seller inquiries you can trace and a clear report every month.",
  },
};
