import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* POOL SERVICE MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units were exhausted, so no ranking report or
   volumes were pulled. The live title's core term ("Pool Service Marketing
   Agency") leads the new title, and every phrase in the live keywords meta
   sits in the title, H1, an H2/H3 or an FAQ question.
   Web research (25 Oct): top agency pages cover route density, spring
   opening season, equipment repair, renovations marketed separately and
   retention of maintenance customers; owners ask how to build route
   density, when to raise spend and how to keep weekly accounts. Pool
   owners search "pool cleaning service near me", "pool opening service"
   and "pool pump repair near me", and mostly call rather than fill forms.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "pool-service-marketing-agency-2",
  liveUrl: "/services/pool-service-marketing-agency",
  niche: "Pool Service",
  meta: {
    title: "Pool Service Marketing Agency | Pool Service SEO & Google Ads",
    description:
      "Zonic Media, a pool service marketing agency, fills weekly routes for cleaning and repair companies with pool service SEO, Google Maps and Google Ads.",
    keywords: [
      "pool service marketing agency",
      "pool service marketing company",
      "pool service marketing",
      "pool cleaning marketing",
      "pool cleaning website marketing",
      "pool management marketing services",
      "pool service seo",
      "pool company google ads",
      "pool service lead generation",
      "pool service advertising agency",
      "pool service internet marketing",
      "marketing for pool service companies",
      "pool service website design",
      "pool cleaning leads",
    ],
  },
  palette: PALETTES.orangeSky,
  hero: {
    h1Lead: "Pool Service",
    h1Icon: "pool",
    h1Rest: "Marketing Agency That Builds Fuller Weekly Routes",
    lead: [
      "Pool owners pick a weekly service once and often keep it for years, so the company they find first wins the account. We make that yours with pool service SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile work",
      },
      ", Google Ads and ",
      {
        href: "/services/pool-service-website-design",
        label: "pool service websites",
      },
      " built to sign recurring customers.",
    ],
    cta: "Get My Free Pool Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-pool-service/weekly-pool-service.webp",
        position: "72% 50%",
        query: "pool cleaning service near me",
      },
      cardA: {
        icon: "repeat",
        title: "More weekly accounts",
        sub: "Denser routes, fewer miles",
      },
      cardB: {
        icon: "tool",
        title: "More repair tickets",
        sub: "Pumps, filters and heaters",
      },
      photoB: {
        src: "/images/free-website/free-pool-service/pool-repair.webp",
        position: "60% 50%",
        query: "pool pump repair near me",
      },
    },
  },
  services: {
    title: "Pool Service Marketing Services\nBuilt Around Your Routes",
    lead: "Six channels pointed at pool owners on the streets you already drive.",
    cta: "Audit My Pool Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps for Pool Pros",
        desc: "Pool categories, service areas, route-day photos and regular posts that lift your listing for cleaning and repair searches nearby.",
        points: [
          "Categories and services listed",
          "Fresh route photos",
          "Verification support",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google listing optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help verifying a profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Pool Service SEO",
        desc: "Pages for weekly cleaning, openings, closings and repairs in each neighborhood you serve, supported by local citations and clean site structure.",
        points: [
          "Pages for each neighborhood",
          "Directory listing cleanup",
          "Zip-level rank tracking",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-pool-service-companies",
            label: "Pool company local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Pool Company Google Ads",
        desc: "PPC ads shown to pool owners in your route zip codes, pushed hard before opening season and for green-pool emergencies.",
        points: [
          "Route zip targeting",
          "Spring opening pushes",
          "Calls tracked to accounts",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for pool companies",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Pool Cleaning Website Marketing",
        desc: "A fast site that explains your weekly plans, shows sparkling before-and-after water and lets owners request service in a few taps.",
        points: [
          "Service request form",
          "Weekly plan explainer",
          "Call and form tracking",
        ],
        links: [
          {
            href: "/services/pool-service-website-design",
            label: "Pool company web design",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews From Your Route",
        desc: "Every visit ends with a review request and owner replies we write, so neighbors on your street see a steady, trusted service.",
        points: [
          "Requests after each visit",
          "Reply drafts for you",
          "Ratings displayed on your website",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local search for home services",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile help",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "Pool Answers in ChatGPT and AI Overviews",
        desc: "We give AI assistants clear, consistent facts about your pool company, so it is the name they offer when owners ask.",
        points: [
          "Matching listings",
          "Detailed service pages",
          "FAQ answers for owners",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI SEO for pool companies",
          },
        ],
      },
    ],
  },
  growth: {
    title:
      "Pool Service Internet Marketing That Builds Routes Street by Street",
    lead: "Maps, AI answers and reviews, focused on the neighborhoods your trucks already cover and the owners who live next door to your current customers.",
    rows: [
      {
        title: "Rank Top 3 for “Pool Cleaning Service Near Me”",
        body: [
          "Owners comparing weekly service open Google Maps and shortlist the first few names. We tune your profile, publish neighborhood pages and keep route photos and reviews fresh, so your name sits among the top three on streets your trucks already visit.",
        ],
        points: [
          "Pool service categories",
          "Neighborhood pages",
          "Route photos",
          "Fake competitor listings flagged",
        ],
        cta: "See My Pool Map Rank",
        ui: {
          kind: "maps",
          query: "pool cleaning service near me",
          city: "Scottsdale",
          category: "Pool cleaning service · Weekly service",
        },
      },
      {
        title: "Be the Pool Company AI Suggests for Weekly Service",
        body: [
          "Plenty of new pool owners turn to Gemini, ChatGPT or an AI Overview when choosing weekly cleaning. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI recommendation work",
          },
          " makes the answer easy: identical listings, reviews that mention reliability, published plan details and pages on common chemistry and equipment questions.",
        ],
        points: [
          "Identical listings",
          "Reliability-focused reviews",
          "Plan details published",
          "Owner FAQ pages",
        ],
        cta: "Check If AI Names Me",
        ui: {
          kind: "ai",
          query: "best weekly pool service in scottsdale for a saltwater pool",
          intro: "For weekly saltwater pool care in Scottsdale,",
          bullets: [
            "Weekly cleaning and chemistry",
            "Salt cell and equipment checks",
            "Photo report after each visit",
          ],
        },
      },
      {
        title: "Turn Each Route Stop Into a 5-Star Google Review",
        body: [
          "Neighbors trust the company already working next door. After each visit, the owner gets a short text with a photo of the clean pool and a review link, while we handle the replies, so your rating climbs with every route you add.",
        ],
        points: [
          "Texts after each visit",
          "Photo service reports",
          "Owner replies drafted",
          "Reviews on your site",
        ],
        cta: "Grow My Pool Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Elena, your pool is clean and the chemistry is balanced! Mind leaving Your Company a quick Google review?",
          reviewer: "Elena R.",
          review:
            "Same tech every Tuesday, he always sends a photo, and the water has never looked better.",
          reply: "Thanks, Elena! See you next Tuesday.",
        },
      },
    ],
  },
  ownLeads: {
    title: "Pool Service Lead Generation for Accounts You Keep",
    body: [
      "Lead marketplaces pass one pool owner to several companies, and many of those requests are one-time cleanups. Our approach sends requests only to you, through rankings, ads and a website you control, aimed at weekly accounts close to your current stops.",
    ],
    cta: "Get My Own Pool Leads",
    colShared: "Lead-site requests",
    colOwn: "Your own route leads",
    rows: [
      ["Who gets the request", "Several pool companies", "Only your office"],
      [
        "Typical job",
        "A one-time green-pool cleanup",
        "Weekly or biweekly service",
      ],
      [
        "Where the customer lives",
        "Anywhere in the region",
        "Near stops you already make",
      ],
      ["After you stop paying", "Requests stop", "Rankings and reviews stay"],
    ],
  },
  specialties: {
    title: "Pool Cleaning Marketing and Every Service on Your Truck",
    lead: "Weekly accounts, seasonal visits and repairs reach you through different searches, so every service gets a separate set of pages, ads and reminders.",
    photo: {
      src: "/images/free-website/free-pool-service/pool-openings.webp",
      alt: "Pool technician vacuuming a residential pool during a spring opening",
      caption: "Openings, closings and weekly care",
      sub: "Seasonal visits that turn into routes",
    },
    items: [
      {
        icon: "repeat",
        name: "Weekly Pool Cleaning Routes",
        tactic: "Neighborhood pages and ads around existing stops",
      },
      {
        icon: "sun",
        name: "Spring Pool Openings",
        tactic: "Early-spring booking campaigns to last year's customers",
      },
      {
        icon: "snow",
        name: "Pool Closings & Winterizing",
        tactic: "Fall reminders paired with next-season opening slots",
      },
      {
        icon: "tool",
        name: "Pump, Filter & Heater Repair",
        tactic: "Repair pages tuned to urgent equipment searches",
      },
      {
        icon: "drop",
        name: "Green Pool Cleanups",
        tactic: "One-time rescue offers that convert into weekly plans",
      },
      {
        icon: "bolt",
        name: "Equipment Upgrades & Automation",
        tactic: "Variable-speed and automation pages with quote forms",
      },
      {
        icon: "water",
        name: "Leak Detection & Resurfacing",
        tactic: "Project pages with photo galleries and financing info",
      },
      {
        icon: "building",
        name: "Commercial & HOA Pool Management",
        tactic: "Compliance-focused pages for HOAs, hotels and gyms",
      },
    ],
    more: "Also service hot tubs, fountains or saltwater systems? We cover those too.",
  },
  steps: {
    title: "Grow Your Pool Routes in Three Steps",
    lead: "Start before opening season, so rankings and ads are live when pool owners start calling.",
    items: [
      {
        h: "Free Pool Route Audit",
        p: "We search weekly cleaning and repair terms from your service area and point out your rank, who wins the map and which neighborhoods are open.",
      },
      {
        h: "A Plan Built on Route Density",
        p: "We pick the neighborhoods, services and campaigns to push first, favoring areas near existing stops so new accounts fit your routes without extra drive time.",
      },
      {
        h: "Launch, Then Report Monthly",
        p: "Your profile updates, neighborhood pages, ad campaigns and visit texts go out at once. Every month you get rankings, calls, new weekly accounts and the source of each.",
      },
    ],
    audit: [
      ["Maps rank: pool cleaning", "behind"],
      ["Profile services listed", "gap"],
      ["Weekly plan page", "open"],
      ["Reviews vs nearby pool pros", "behind"],
    ],
    plan: [
      "Weekly cleaning",
      "Spring openings",
      "Pump repair",
      "Scottsdale",
      "Chandler",
    ],
    launch: [
      "Profile services added",
      "Neighborhood pages live",
      "Ad calls recorded",
      "Visit review texts on",
    ],
  },
  reviews: {
    title: "Hear It From Owners We Market",
    lead: "Their own words, posted on the Google profile where we keep a 5.0 rating.",
  },
  pricing: {
    title: "Pool Service Marketing Plans, No Long Contracts",
    compareTitle: "Compare Pool Company Plans",
    addOnsTitle: "Add Campaigns Ahead of Opening Season",
    customTitle: "Running routes in several cities?",
  },
  faq: {
    title: "Pool Service Marketing Questions We Hear Most",
    lead: "Short answers on routes, rankings, ads, AI tools and plans for pool service owners.",
    items: [
      {
        q: "What will a pool service marketing agency take off my plate?",
        a: "Everything that brings pool owners to your company and turns them into recurring accounts: map rankings, pages for cleaning, openings and repairs, Google Ads in your route zip codes, a review text after each visit and a website that makes signing up easy.",
      },
      {
        q: "How do I get more weekly pool service accounts?",
        a: "Focus on neighborhoods you already serve. Rank on Maps there, publish neighborhood pages, ask happy customers for reviews and referrals, and turn every green-pool cleanup or opening into a weekly plan offer. Dense routes mean more accounts per hour of driving.",
      },
      {
        q: "When should a pool company start marketing for opening season?",
        a: "Late winter. Profile updates, opening pages and ads need to be running before the first warm weekend, when owners start searching. Past customers get a reminder with booking slots, and new opening pages have time to rank before the rush. Closing offers follow the same pattern each fall.",
      },
      {
        q: "Do you offer pool management marketing services for HOA and commercial pools?",
        a: "Yes. Commercial pool management is sold to boards and property managers, not homeowners. We build pages on compliance, water testing logs and service schedules, run search ads aimed at HOAs, hotels and gyms, and give your team a clear proposal page to share.",
      },
      {
        q: "What does a pool service advertising agency do differently?",
        a: "It plans ads around routes and seasons. Campaigns target zip codes near current stops, budgets rise ahead of openings and summer heat, DIY chemical and job-seeker searches are blocked, and calls are tracked to the accounts they started. Spend also eases off once your routes are full.",
      },
      {
        q: "Is pool service SEO worth it for a small route?",
        a: "Yes. A solo operator can win its own neighborhoods on Google Maps with a complete profile, steady reviews and pages for each service. Rankings keep sending owners without a per-click fee, and accounts added near existing stops keep your drive time short.",
      },
      {
        q: "How long until pool service marketing brings new accounts?",
        a: "Expect early calls from ads and a tidied profile within weeks, especially near opening season. Organic rankings need several months, depending on local competition. Monthly reports show rankings, calls and new accounts so you can see momentum. Route density usually improves first in the neighborhoods you already serve.",
      },
      {
        q: "Can ChatGPT and Gemini recommend my pool company?",
        a: "They can when your facts are simple to verify. We match your listings across directories, earn reviews that mention reliability and water quality, publish your plan details and answer common owner questions on your site. That gives AI tools a reason to name you.",
      },
      {
        q: "Do Local Services Ads make sense for pool cleaning companies?",
        a: "Often, yes. They sit above regular results, show a verified badge and cost you per lead, a good fit for owners hunting for weekly service. We pair them with search ads for repairs and openings, then compare which source turns into lasting accounts rather than one-time visits.",
      },
      {
        q: "How much does pool service marketing cost at Zonic Media?",
        a: "Pick from three month-to-month tiers: $297, $750 or $1,500, each billed monthly with no annual commitment. Ad spend goes to Google at a 0% markup. Single-truck operators often begin with the first plan and move up as routes fill. Reinstatement of a suspended profile is included at every tier.",
      },
    ],
  },
  audit: {
    title: "Find Out Where Your Pool Company Ranks, Free",
    lead: [
      "Share the neighborhoods you cover. You'll see your map position for weekly cleaning and repair searches, a review and website comparison with the top pool companies near you, and the ",
      { href: "/services", label: "services" },
      " we'd start with. Pool care is one of the ",
      { href: "/industries", label: "20+ industries" },
      " we work in.",
    ],
    points: [
      "No long-term contract",
      "Plans starting at $297 monthly",
      "0% ad-spend markup",
      "Profile reinstatement included",
    ],
    form: {
      formType: "pool-service-marketing",
      badge: "Free pool audit",
      title: "Request a Free Pool Service Marketing Audit",
      subtitle: "No charge and no commitment.",
      submitText: "Send My Pool Audit",
      messageLabel: "Your service area and pool services",
      messagePlaceholder:
        "Cities or zip codes you cover, services you offer and how many weekly accounts you run",
    },
  },
  banner: {
    title: "Fill Every Route Day With Pool Owners Nearby",
    lead: "A free audit shows which neighborhoods and fixes to tackle first.",
    icons: ["pool", "sun"],
  },
};
