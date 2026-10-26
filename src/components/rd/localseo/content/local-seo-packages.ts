/* Local SEO Packages — redesign draft copy (26 Oct 2026).
   Hub page of the Local SEO dropdown: written for small and local
   businesses in general (docs/local-seo-redesign-brief.md). Tier names
   and contents come from src/components/rd/home/pricing.ts; no prices
   appear outside the one FAQ cost answer (owner pricing lock).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: local seo packages 1,417
     impressions (pos 41.8) · local seo package 276 (40.7) · local
     business seo packages 237 (38.4) · local seo plans 198 (38.2) · seo
     packages for small business 180 (49.6) · local seo service package
     174 (45.6) · local seo pricing packages 168 (43.5) · small business
     seo packages 116 (45.8) · affordable local seo packages 110 (50.6) ·
     custom seo packages 52 (65.1).
   - Semrush US: local seo packages 4,400 (KD 38) · local seo pricing
     2,900 (34) · seo packages for small business 2,400 (4) · local seo
     package 1,900 (39) · small business seo packages 1,600 (3) · local
     seo plans 480 (30) · affordable local seo packages 170 (37).
   - Web research (package comparison guides, pricing explainers, "which
     package do I need" articles): other providers tier by starter /
     growth / full service; buyers are told to pick by how crowded their
     market is, and to watch for automated rank-only reports, guaranteed
     Map Pack spots, review incentives and hidden extras. Added: a hero
     that shows what each tier covers, searches grouped by the tier that
     targets them, and FAQs on switching tiers, what sits outside a
     package, AI Overviews, home-based businesses and contracts.
   - Title keeps "Local SEO Packages" (top GSC term) and adds "SEO
     Packages for Small Business" (KD 4); H1 leads with "Local SEO
     Packages". Consultant/audit terms stay on the small business page. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/local-seo-packages",
  audience: "Small and local businesses",
  serviceName: "Local SEO Packages",
  meta: {
    title: "Local SEO Packages & Plans | SEO Packages for Small Business",
    description:
      "Local SEO packages for small businesses: Foundation, Growth and Authority plans with Business Profile work, on-page SEO, citations, reviews and monthly reports.",
    keywords: [
      "local seo packages",
      "local seo package",
      "seo packages for small business",
      "small business seo packages",
      "local seo plans",
      "local seo pricing",
      "local business seo packages",
      "affordable local seo packages",
      "local seo service package",
      "custom seo packages",
    ],
  },
  hero: {
    h1Lead: "Local SEO Packages",
    h1Rest: "Sized to Your Market, Locations and Goals",
    icon: "layers",
    lead: [
      "Three plans, each with a fixed list of monthly work: Foundation for one profile, Growth when you add Google Search Ads, Authority for several locations and social. Every package starts with ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      " and ends with a plain report.",
    ],
    cta: "Match Me to a Package, Free",
    ui: {
      kind: "growth",
      maps: "grid",
      ai: "chat",
      growth: "calls",
      business: "Your Company",
      category: "Local service",
      query: "local service near me",
      aiPrompt: "Which local company do people recommend nearby?",
      aiReasons: ["Optimized Business Profile", "Fresh posts every month"],
      growthLabel: "Calls by week",
      leads: [
        ["New call", "Google Maps"],
        ["Quote request", "Service page"],
        ["Booking", "Business Profile"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Wider reach",
          title: "Ranking Across More of Your Area",
          text: "Each package widens the map area where your profile shows near the top.",
        },
        {
          label: "AI answers",
          badge: "Recommended",
          title: "Picked by AI Assistants Locally",
          text: "Profile posts, reviews and clean citations give AI tools facts to quote.",
        },
        {
          label: "Calls",
          badge: "Climbing",
          title: "A Call Line That Keeps Rising",
          text: "Monthly reports show calls and leads growing as each package does its work.",
        },
      ],
    },
  },
  searches: {
    title: "Searches Each Package Tier Is Built to Win",
    lead: "Local business SEO packages should aim at what customers type. Examples, grouped by the plan that targets them.",
    groups: [
      {
        icon: "pin",
        label: "Near-me searches every package targets",
        terms: [
          "barber near me",
          "vet clinic near me",
          "breakfast spot open now",
          "massage therapist near me",
          "print shop near me",
        ],
      },
      {
        icon: "target",
        label: "Ready-to-buy searches the Growth package adds",
        terms: [
          "book a massage today",
          "emergency vet open now",
          "catering for an office lunch",
          "tax preparer appointment this week",
          "math tutor near me",
        ],
      },
      {
        icon: "building",
        label: "Multi-location searches in the Authority package",
        terms: [
          "urgent care near + neighborhood",
          "gym locations near me",
          "daycare near + suburb name",
          "physical therapy clinic near work",
          "self storage near + town",
        ],
      },
    ],
  },
  services: {
    title: "SEO Packages for Small Business,\nTier by Tier",
    lead: "Each plan lists its monthly work in plain terms. Here is what you get, and where each tier adds more.",
    cta: "Compare Packages for My Business",
    items: [
      {
        icon: "pin",
        title: "Business Profile Work in Every Package",
        desc: "Profile audit and optimization, monthly upkeep and four posts a month, so your listing stays complete and active on Google Maps.",
        points: ["Profile audit", "Monthly upkeep", "Four posts monthly"],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "How we optimize profiles",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile recovery",
          },
        ],
      },
      {
        icon: "file",
        title: "On-Page SEO by Package Tier",
        desc: "Foundation tunes up to three existing pages for up to five keywords; Growth and Authority keep optimizing existing pages every month.",
        points: [
          "Titles and headings",
          "Local keyword targeting",
          "Page copy updates",
        ],
        links: [
          { href: "/services/seo-services", label: "Broader SEO services" },
        ],
      },
      {
        icon: "layers",
        title: "Citation Audit in Each Package",
        desc: "We audit your name, address and phone across up to twenty directories and list every mismatch Google might cross-check against you.",
        points: [
          "Up to 20 directories",
          "NAP mismatches",
          "Duplicate listings",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Review Management Across Packages",
        desc: "Foundation monitors reviews and guides your replies; Growth and Authority add a review request workflow so new reviews keep arriving.",
        points: ["Review monitoring", "Reply guidance", "Request workflow"],
        links: [],
      },
      {
        icon: "target",
        title: "Search Ads in the Growth Package",
        desc: "Google Search Ads set up or rebuilt: one account, up to two campaigns, geo-targeted, with keyword, negative keyword and conversion tracking.",
        points: [
          "Weekly campaign checks",
          "Geo-targeting",
          "Conversion tracking",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "building",
        title: "The Multi-Location Authority Package",
        desc: "Up to five priority profiles, Local Services Ads setup, two social platforms with short-form video editing, and a monthly strategy meeting.",
        points: [
          "Local Services Ads",
          "Social and video",
          "Lead-source review",
        ],
        links: [{ href: "/pricing", label: "See all plans and pricing" }],
      },
    ],
  },
  growth: {
    title: "How Our Local SEO Plans Turn Into Real Leads",
    lead: "The same three results drive every tier: rankings, AI mentions and tracked leads.",
    rank: {
      title: "Package Work That Lifts Your Maps Rankings",
      body: [
        "Profile optimization, on-page fixes and the citation audit are the levers every package pulls first. We track your main searches weekly, so you can see which tier’s work moved you and when to step up. New to this? Start with ",
        {
          href: "/services/local-seo-for-small-business",
          label: "small business local SEO",
        },
        ".",
      ],
      points: [
        "Weekly rank tracking",
        "Profile-first fixes",
        "On-page updates",
        "Tier-by-tier gains",
      ],
      cta: "Show Me What My Package Would Fix",
      keywords: [
        ["barber near me", 19, 3],
        ["vet clinic + your city", 25, 4],
        ["massage therapist near me", 15, 2],
        ["print shop open now", 28, 5],
      ],
    },
    ai: {
      title: "Packages That Prepare You for AI Search",
      body: [
        "Google AI Overviews and ChatGPT reuse the facts your package maintains: profile details, consistent listings and reviews. Every tier keeps those facts clean; for deeper work, our ",
        {
          href: "/services/ai-seo-services",
          label: "generative AI search program",
        },
        " adds prompt testing and mention building.",
      ],
      points: [
        "Accurate profile facts",
        "Consistent listings",
        "Fresh reviews",
        "AI SEO when needed",
      ],
      cta: "Check My AI Readiness",
      query: "barber who takes walk-ins on sunday",
      intro: "For Sunday walk-in haircuts nearby,",
      bullets: [
        "Sunday hours listed",
        "Walk-in note on profile",
        "Fresh weekend reviews",
      ],
    },
    leads: {
      title: "Every Package Reports the Leads It Brings",
      body: [
        "Foundation sends a clear monthly performance summary. Growth adds conversion tracking and a monthly lead report, and Authority adds a lead-source review and strategy meeting, so you always know which channel brought each new call.",
      ],
      points: [
        "Monthly summary",
        "Conversion tracking",
        "Lead report",
        "Strategy reviews",
      ],
      cta: "Ask About Package Reporting",
      items: [
        ["Call from Maps listing", "Google Maps", "Mon 10:10 AM"],
        ["Booking form", "Search ad", "Mon 3:25 PM"],
        ["Quote request", "Service page", "Tue 9:50 AM"],
        ["Call from LSA", "Local Services Ads", "Wed 1:35 PM"],
      ],
    },
  },
  results: {
    title: "What Moves After Your Package Begins",
    lead: "Every tier follows the same order: profile and on-page fixes first, then reviews, then tracked leads.",
    cta: "Show Me My Package Timeline",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Package Profile Audit Done",
        text: "We audit and optimize your Google Business Profile and start the monthly posts every package includes.",
      },
      {
        when: "Month 1",
        title: "Pages and Citations Checked",
        text: "On-page fixes land on your existing pages, and the citation audit lists each directory mismatch to correct.",
      },
      {
        when: "Months 2–4",
        title: "Ads and Reviews Join In",
        text: "On Growth and Authority, Search Ads and the review workflow start adding calls while rankings move upward.",
      },
      {
        when: "Month 4 onward",
        title: "Reports Guide the Next Tier",
        text: "Monthly reports show which work brought leads, so moving up, staying put or stepping down is an easy call.",
      },
    ],
    wins: [
      {
        icon: "pin",
        title: "A Profile That Never Goes Stale",
        text: "Monthly upkeep and regular posts keep your listing complete, current and active for every nearby search.",
      },
      {
        icon: "file",
        title: "Plain Lists of Package Work",
        text: "Each package spells out its tasks, so you always know what was done and what comes next.",
      },
      {
        icon: "target",
        title: "Faster Calls When Ads Join SEO",
        text: "On Growth and Authority, Search Ads with conversion tracking can bring calls while organic rankings keep building.",
      },
      {
        icon: "trend",
        title: "Room to Grow Without Switching Teams",
        text: "Add locations, Local Services Ads or social content by moving up a tier with the same people.",
      },
    ],
  },
  compare: {
    title: "How Our Tiers Compare With Packages Sold Elsewhere",
    lead: "Where our plans differ from what local businesses are often offered in a package.",
    rows: [
      {
        topic: "What the package lists",
        other: "Vague promises like full SEO, with no list of monthly tasks.",
        zonic:
          "Each tier names its work: profile posts, page optimization, directory audit and reporting.",
      },
      {
        topic: "Moving between tiers",
        other:
          "Upgrades sold as a new contract, and downgrades often discouraged.",
        zonic:
          "Month to month, so you can move up or down when your needs change.",
      },
      {
        topic: "Search Ads inside a package",
        other:
          "Ads often run by a separate team, sometimes with a markup on spend.",
        zonic:
          "Growth and Authority include Google Search Ads management with 0% ad-spend markup.",
      },
      {
        topic: "Review handling",
        other: "Review monitoring only, with no system for asking customers.",
        zonic:
          "Monitoring and reply guidance on Foundation, plus a review request workflow from Growth up.",
      },
      {
        topic: "Multi-location coverage",
        other:
          "One profile per plan, with every extra location quoted separately.",
        zonic:
          "Growth and Authority cover several priority profile locations, Authority the most.",
      },
      {
        topic: "Reporting and strategy time",
        other: "An automated rank report with nobody to explain it.",
        zonic:
          "Monthly reports on every tier, quarterly reviews on Growth, monthly meetings on Authority.",
      },
    ],
  },
  steps: {
    title: "From Free Audit to the Right Package",
    lead: "No guessing at tiers: the audit decides, and you can move up or down later.",
    items: [
      {
        h: "Package Audit of Your Market",
        p: "We check your profile, listings, pages and the businesses ranking above you, then measure how crowded your Map Pack really is.",
      },
      {
        h: "Package Match and Launch",
        p: "You get a plain recommendation, Foundation, Growth or Authority, with the reasons. Profile and on-page work starts in the first month.",
      },
      {
        h: "Package Reviews as You Grow",
        p: "Reports show what each month’s work moved. When a tier stops being enough, we say so; when a lighter one fits, we say that too.",
      },
    ],
    audit: [
      ["Map Pack crowding", "behind"],
      ["Profile health", "open"],
      ["Listings", "gap"],
      ["Ads readiness", "open"],
    ],
    plan: ["Profile work", "On-page", "Citations", "Ads", "Social"],
    launch: ["Tier chosen", "Profile live", "Pages tuned", "Reporting on"],
  },
  explore: {
    title: "Programs That Pair With a Local SEO Package",
    lead: "Small business SEO packages cover the core work; these pages go deeper by business type or city.",
    items: [
      {
        name: "Small Business Local SEO",
        sub: "How we work with single locations",
        href: "/services/local-seo-for-small-business",
        icon: "briefcase",
      },
      {
        name: "Home Services Local SEO",
        sub: "Plans for contractors and trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
      {
        name: "SEO Services",
        sub: "Content and technical SEO",
        href: "/services/seo-services",
        icon: "search",
      },
      {
        name: "Philadelphia Local SEO",
        sub: "City-level Map Pack work",
        href: "/services/philadelphia/local-seo",
        icon: "pin",
      },
    ],
    other:
      "Need custom SEO packages for franchises or several brands? We scope those after the audit.",
  },
  reviews: {
    title: "Google Reviews From Clients on Every Plan Tier",
    lead: "Real reviews from owners on our Google profile, shown as written.",
  },
  pricing: {
    title: "Local SEO Pricing, Plan by Plan",
    compareTitle: "Line Up the Three Local SEO Packages",
    addOnsTitle: "Package Add-Ons for Extra Pages and Locations",
    customTitle: "Need a Package for Many Locations?",
  },
  faq: {
    title: "Local SEO Package Questions Before You Choose",
    lead: "Cost, contracts, switching tiers and what sits outside each plan.",
    items: [
      {
        q: "How much do your local SEO packages cost?",
        a: "Foundation is $297 a month, Growth $750 and Authority $1,500, billed month to month, with a lower rate on Foundation and Authority if you pay annually. The free audit tells you which package your market needs before you spend anything.",
      },
      {
        q: "Which local SEO package do I need?",
        a: "Foundation suits one location in a lighter market. Growth fits established businesses that want Google Search Ads alongside SEO and up to three priority locations. Authority is for multi-location teams that also want Local Services Ads, social content and a monthly strategy meeting.",
      },
      {
        q: "What is included in every local SEO package?",
        a: "Every plan covers Google Business Profile optimization, four profile posts a month, on-page SEO for existing pages, a citation audit across up to twenty directories, review management and monthly reporting. Higher tiers add ads, more locations, social content and strategy time.",
      },
      {
        q: "Can I switch packages later?",
        a: "Yes. Plans run month to month, so you can move up when you add a location or start ads, and move down if a lighter package covers your market. Your report flags when a change makes sense.",
      },
      {
        q: "Are affordable local SEO packages worth it?",
        a: "Affordable is fine when the work is listed. Be wary of any package that guarantees a Map Pack spot, buys reviews, or only sends an automated rank report. Ask what gets done each month and who does it.",
      },
      {
        q: "What is not included in a local SEO package?",
        a: "New websites, extra service-area landing pages, additional location campaigns, extra ad campaigns and website migrations sit outside the plans and are quoted as add-ons. The pricing section lists them, so nothing appears on an invoice you didn’t expect.",
      },
      {
        q: "How long does a local SEO package take to work?",
        a: "Expect early Maps movement in the weeks after the profile and citation fixes. Crowded searches need a few months of steady on-page and review work. Your monthly report shows rankings and leads side by side, so you judge the package on results.",
      },
      {
        q: "Do local SEO packages help with Google AI Overviews?",
        a: "Yes, indirectly. AI Overviews and ChatGPT lean on accurate profiles, consistent listings and reviews, which every package maintains. For prompt testing and mention building across AI tools, we offer AI SEO as its own program.",
      },
      {
        q: "Can a home-based business use a local SEO package?",
        a: "Yes. If customers never visit you, Google lets you hide the street address and list the towns you cover instead. The package then leans on service-area settings, town-focused service pages and reviews that mention where you worked.",
      },
      {
        q: "Is there a contract with your local SEO plans?",
        a: "No long contract. Monthly billing runs month to month, and annual billing is optional for a lower rate. Your profile, ad account and listings stay in your name, so switching or stopping never means starting over.",
      },
    ],
  },
  audit: {
    title: "Get Matched to the Right Package, Free",
    lead: [
      "Send your website and town. We review your profile, listings and nearby competitors, then recommend one package with the reasons behind it. Learn ",
      { href: "/about", label: "who we are" },
      ", see ",
      { href: "/services", label: "everything we offer" },
      " or compare ",
      { href: "/pricing", label: "plan pricing" },
      ".",
    ],
    points: [
      "Package recommendation",
      "Map Pack competition",
      "Profile and listing gaps",
      "First-month work list",
    ],
    form: {
      formType: "local-seo-packages",
      badge: "Free package match",
      title: "Find My Local SEO Package",
      subtitle: "Free audit, no contract, a straight recommendation.",
      submitText: "Send My Package Request",
      messageLabel: "Your website, town and number of locations",
      messagePlaceholder:
        "yourwebsite.com, your town and how many locations you run",
    },
  },
  banner: {
    title: "Pick a Package That Shows Its Work",
    lead: "Fixed monthly tasks, plain reports and month-to-month terms, from one profile to many locations.",
  },
};
