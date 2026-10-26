/* SEO Services for Pest Control — redesign draft copy (26 Oct 2026).
   Local SEO dropdown family; brief: docs/local-seo-redesign-brief.md.
   Fresh copy only: no wording from the live page, the electricians
   reference, /services/seo-services-2 or /services/pest-control-marketing-agency-2.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: no impressions recorded.
   - Semrush US: pest control seo 1,600 (KD 30) · pest control seo company
     880 (26) · seo for pest control 880 (25) · exterminator seo 10.
   - Title keeps the live wording ("Pest Control SEO Company", "SEO
     Services for Pest Control"), which already carries the head term;
     H1 leads with "Pest Control SEO" (1,600).
   - Web research (WebSearch ×4, WebFetch ×2 of top results): guides agree
     Maps is where urgent pest calls go and that "Pest Control Service" is
     the primary category (Exterminator, Wildlife Control, Fumigation as
     secondaries). Top pages cover GBP, pest pages and links but skip
     seasonal timing, same-day/emergency pages, commercial accounts, AI
     answers and call measurement, so those became the services, the
     seasonal and commercial FAQs, the AI row and the leads row. Customer
     searches split into same-day, per-pest and town/plan searches. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/seo-services-for-pest-control",
  audience: "Pest control companies and exterminators",
  serviceName: "SEO Services for Pest Control",
  meta: {
    title: "Pest Control SEO Company | SEO Services for Pest Control",
    description:
      "Pest control SEO for exterminators: Maps rankings, termite, rodent and bed bug pages, treatment reviews and AI answers that turn pest searches into calls.",
    keywords: [
      "pest control seo",
      "seo for pest control",
      "pest control seo company",
      "seo services for pest control",
      "local seo for pest control",
      "seo for pest control companies",
      "pest control seo services",
      "pest control seo agency",
      "exterminator seo",
      "seo for exterminators",
    ],
  },
  hero: {
    h1Lead: "Pest Control SEO",
    h1Rest: "That Turns Bug Sightings Into Booked Treatments",
    icon: "pest",
    lead: [
      "When a homeowner spots termite swarmers or hears mice in the attic, they grab a phone and call one of the first listings on the map. We tune your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", pest pages and reviews so that first listing is yours, then log every call it sends.",
    ],
    cta: "Audit My Pest Control Rankings",
    ui: {
      kind: "growth",
      maps: "grid",
      ai: "voice",
      growth: "feed",
      business: "Your Pest Control",
      category: "Pest control service",
      query: "exterminator near me",
      aiPrompt: "Find an exterminator near me for termites",
      aiReasons: ["Licensed technicians", "Pet-safe treatment plans"],
      growthLabel: "New pest control leads",
      leads: [
        ["Termite inspection", "Google Maps"],
        ["Rodent call", "Voice search"],
        ["Quarterly plan signup", "Plan page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top 3 citywide",
          title: "Leading the Map Across Your Service Area",
          text: "Your listing ranks near #1 across the neighborhoods you treat.",
        },
        {
          label: "Voice & AI",
          badge: "Named",
          title: "Named When Someone Spots a Pest",
          text: "Voice and AI assistants suggest you for termites, rodents and bed bugs.",
        },
        {
          label: "Leads",
          badge: "Rising",
          title: "Inspections and Plans From Search",
          text: "Calls, inspections and plan signups arrive from Maps and voice search.",
        },
      ],
    },
  },
  searches: {
    title: "What Homeowners Search When Pests Move Indoors",
    lead: "Pest pages and profile details are built around the phrases people type with a spider on the wall or droppings under the sink.",
    groups: [
      {
        icon: "bug",
        label: "Same-day pest control searches",
        terms: [
          "exterminator near me",
          "pest control open now",
          "emergency pest control",
          "same day exterminator",
          "wasp nest removal near me",
          "bed bug exterminator near me",
        ],
      },
      {
        icon: "pest",
        label: "Searches by pest type",
        terms: [
          "termite inspection near me",
          "rodent control near me",
          "mosquito yard treatment",
          "ant exterminator",
          "cockroach exterminator",
          "bed bug heat treatment",
        ],
      },
      {
        icon: "pin",
        label: "Pest control plans by town",
        terms: [
          "pest control + your city",
          "quarterly pest control service",
          "best pest control company near me",
          "commercial pest control near me",
          "wildlife removal near me",
          "flea treatment for house",
        ],
      },
    ],
  },
  services: {
    title: "SEO for Pest Control,\nTreatment by Treatment",
    lead: "Six workstreams aimed at the pests that pay best in your area, from termite contracts to quarterly plans.",
    cta: "Review My Pest Control Site",
    items: [
      {
        icon: "pin",
        title: "Pest Control Google Business Profile Setup",
        desc: "Pest Control Service as the primary category, wildlife or fumigation secondaries that match your license, county service areas, treatment photos and seasonal posts.",
        points: [
          "Primary category corrected",
          "County service areas",
          "Seasonal pest posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
          { href: "/services/gmb-verification-help", label: "Get verified" },
        ],
      },
      {
        icon: "file",
        title: "Pest-by-Pest Service Pages",
        desc: "Separate pages for termites, rodents, bed bugs, mosquitoes and stinging insects, each answering what homeowners ask about signs, treatment steps and safety around pets.",
        points: [
          "Termite and rodent pages",
          "Pet-safety answers",
          "Signs-of-infestation FAQs",
        ],
        links: [
          {
            href: "/services/pest-control-website-design",
            label: "Pest control website design",
          },
        ],
      },
      {
        icon: "home",
        title: "Route Towns and Pest Control Listings",
        desc: "A page per route town naming local pressure like subterranean termites or fire ants, plus consistent listings across directories and listing apps.",
        points: [
          "Route-town pages",
          "Local pest pressure",
          "Directory cleanup",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended listing recovery",
          },
        ],
      },
      {
        icon: "star",
        title: "Post-Treatment Reviews for Pest Control",
        desc: "A text goes out after each service visit, so customers mention the pest, the tech and the result, and every review gets a reply.",
        points: [
          "Visit-day text requests",
          "Pest named in reviews",
          "Replies within a day",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Fast, Crawlable Pest Control Websites",
        desc: "Mobile speed, LocalBusiness schema, clean indexing and a click-to-call header so a homeowner with ants in the kitchen reaches you in one tap.",
        points: [
          "Pest service schema",
          "Click-to-call header",
          "Core Web Vitals fixes",
        ],
        links: [
          { href: "/services/web-design", label: "Websites that load fast" },
        ],
      },
      {
        icon: "sparkle",
        title: "Pest Control Answers for AI Search",
        desc: "Short, sourced answers about signs, treatment timing and pet safety, plus steady business facts, so Google AI Overviews and ChatGPT cite you.",
        points: [
          "Answer-first pest FAQs",
          "Consistent business facts",
          "Monthly citation checks",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How SEO for Pest Control Companies Fills Routes",
    lead: "More pins on the map, more mentions in AI answers and more booked treatments from search.",
    rank: {
      title: "Climb for Every Pest Your Techs Treat",
      body: [
        "We group searches by pest and by town, then build or tune a page for each pair worth winning. Termite inspections, rodent exclusion and mosquito plans get tracked weekly, so you see which treatments are gaining ground.",
      ],
      points: [
        "Pest-by-town keyword map",
        "Weekly rank tracking",
        "Rival pest page gaps",
        "Seasonal search forecasts",
      ],
      cta: "Show My Pest Keyword Gaps",
      keywords: [
        ["exterminator near me", 21, 3],
        ["termite inspection + your city", 28, 2],
        ["bed bug treatment", 34, 4],
        ["mosquito control near me", 25, 3],
      ],
    },
    ai: {
      title: "Get Your Pest Control Company Into AI Answers",
      body: [
        "When a homeowner asks ChatGPT who treats termites nearby, the answer leans on license details, clear treatment pages and recent reviews. We supply all three and review the answers each month through our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "License and applicator facts",
        "Treatment FAQs on site",
        "Matching listings",
        "Monthly AI answer checks",
      ],
      cta: "Check My Pest AI Mentions",
      query: "who treats termites near me",
      intro: "For termite treatment near you,",
      bullets: [
        "Licensed applicators listed",
        "Termite page with clear steps",
        "Reviews that mention termites",
      ],
    },
    leads: {
      title: "Trace Each Pest Call Back to Its Search",
      body: [
        "A first-place pin means little until a homeowner dials. Every exterminator call and quote request carries a label naming the pest page and query that produced it, and we add ",
        { href: "/services/google-ads", label: "Google Ads for pest control" },
        " when termite season needs more volume than organic can deliver.",
      ],
      points: [
        "Calls tagged by pest",
        "One-tap call buttons",
        "Quote form per pest page",
        "Monthly booked-job report",
      ],
      cta: "See Where My Pest Calls Start",
      items: [
        ["Termite inspection call", "Google Maps", "Mon 8:20 AM"],
        ["Bed bug quote form", "Bed bug page", "Mon 2:05 PM"],
        ["Wasp nest call", "AI Overview link", "Wed 11:40 AM"],
        ["Quarterly plan signup", "Town page", "Tue 4:10 PM"],
      ],
    },
  },
  results: {
    title: "How Pest Control Routes Grow With Zonic SEO",
    lead: "Each stage builds on the last: a cleaner listing, pest pages, treatment reviews, then fuller routes.",
    cta: "Plan My Pest Season Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Pest Listing Cleaned Up",
        text: "We fix your category, hours and county service areas, so Maps starts matching you to the right pest searches.",
      },
      {
        when: "Month 1",
        title: "Termite and Rodent Pages Live",
        text: "Termite, rodent and bed bug pages launch and compete for the treatments your techs prefer.",
      },
      {
        when: "Months 2–4",
        title: "Moving Up for Pest Searches",
        text: "Post-treatment reviews and local links build up, nudging your listing toward the top of Maps in more route towns.",
      },
      {
        when: "First full season",
        title: "Steadier Pest Season Bookings",
        text: "Seasonal pages are ready before swarms and mosquito spikes, so more of the peak demand starts reaching your phone.",
      },
    ],
    wins: [
      {
        icon: "phone",
        title: "More Termite and Bed Bug Calls",
        text: "Homeowners searching for high-value treatments land on pest pages written to answer their worries and book the visit.",
      },
      {
        icon: "repeat",
        title: "One-Time Pest Jobs Turn Into Plans",
        text: "Pages that explain quarterly and annual pest plans give first-time callers a clear reason to stay on your route.",
      },
      {
        icon: "star",
        title: "Pest Control Reviews That Name the Pest",
        text: "Customers mention the termites, wasps or mice you handled, which reassures the next homeowner reading your profile.",
      },
      {
        icon: "trend",
        title: "Pest Calls That Skip the Lead Sites",
        text: "Homeowners call your company straight from Maps or AI answers instead of filling a form sold to several exterminators.",
      },
    ],
  },
  compare: {
    title: "Pest Control Companies: Zonic vs. Generic SEO Firms",
    lead: "Where exterminator SEO from Zonic parts ways with what pest companies often get.",
    rows: [
      {
        topic: "Pest season timing",
        other:
          "Content goes live whenever it is ready, often after the busy season starts.",
        zonic:
          "Termite, mosquito and rodent pages scheduled to publish before each pest's peak months.",
      },
      {
        topic: "Dedicated pest pages",
        other:
          "Every pest crammed onto a single list that can rank for none of them.",
        zonic:
          "Separate termite, rodent, bed bug and mosquito pages that answer signs, prep and pet safety.",
      },
      {
        topic: "Recurring pest plan pages",
        other:
          "Pages chase one-time calls and rarely explain quarterly or annual service plans.",
        zonic:
          "Service pages that explain quarterly and annual plans, aimed at homeowners wanting ongoing protection.",
      },
      {
        topic: "Restaurant and warehouse pest work",
        other:
          "Homeowner keywords only, so restaurants and warehouses rarely find the company.",
        zonic:
          "Commercial pest pages and profile details, with business leads tracked apart from residential calls.",
      },
      {
        topic: "Pest license and safety facts",
        other:
          "Applicator licensing and pet-safety details are often missing or buried in fine print.",
        zonic:
          "License, applicator and pet-safety facts shown where homeowners and AI tools look first.",
      },
      {
        topic: "Pest call reporting",
        other:
          "Rank charts that often leave out which pests actually brought in calls.",
        zonic:
          "Calls and quote forms tagged by pest page and search, reported monthly, month to month.",
      },
    ],
  },
  steps: {
    title: "How Local SEO for Pest Control Runs Each Month",
    lead: "Listing and site repairs come first; pest pages, reviews and links stack up after that.",
    items: [
      {
        h: "Map the Pests and Towns Worth Winning",
        p: "We audit your listing and site against the pest companies outranking you in each town, then rank treatments and areas by value.",
      },
      {
        h: "Repair the Listing, Then Launch Pest Pages",
        p: "Category, hours and photo fixes land in week one; termite, rodent and route-town pages go live next while post-visit review texts start sending.",
      },
      {
        h: "Report Booked Pest Jobs, Then Scale Up",
        p: "Monthly reports break down rankings, calls and booked treatments by pest, and the next month's hours move to whichever pests fill routes fastest.",
      },
    ],
    audit: [
      ["Maps position", "behind"],
      ["Pest pages", "gap"],
      ["Review texts", "open"],
      ["Mobile speed", "behind"],
    ],
    plan: [
      "Termite page",
      "Rodent page",
      "Mosquito page",
      "Route towns",
      "Local links",
    ],
    launch: [
      "Listing repaired",
      "Pest pages live",
      "Reviews arriving",
      "Calls tagged",
    ],
  },
  explore: {
    title: "More Ways to Grow a Pest Control Company",
    lead: "Rankings work harder with a site that converts and paid search for peak swarm weeks.",
    items: [
      {
        name: "Pest Control Marketing",
        sub: "Full-funnel plan for recurring routes",
        href: "/services/pest-control-marketing-agency",
        icon: "pest",
      },
      {
        name: "Pest Control Websites",
        sub: "Pages that sell service plans",
        href: "/services/pest-control-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads Management",
        sub: "Extra calls during swarm season",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Local SEO for Home Services",
        sub: "Ranking help for related trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Also run lawn care or wildlife removal crews? Those trades can share your exterminator plan.",
  },
  reviews: {
    title: "A 5.0 Google Rating Pest Control Owners Can Verify",
    lead: "Every review on our Google profile, unedited and unfiltered.",
  },
  pricing: {
    title: "Pest Control SEO Plans, Billed Monthly",
    compareTitle: "Side-by-Side Plans for Pest Control Companies",
    addOnsTitle: "Pest Season Add-Ons for Busy Months",
    customTitle: "Running Pest Control From Several Branches?",
  },
  faq: {
    title: "What Pest Control Owners Ask Before Hiring for SEO",
    lead: "Cost, timing, Maps rankings and how exterminator SEO handles seasonal demand.",
    items: [
      {
        q: "What does pest control SEO include?",
        a: "It covers everything that decides whether a nearby homeowner finds you: Business Profile setup, pest-specific and town pages, review requests, directory listings, technical fixes and local links. Success means sitting in the top three map results and on page one for the treatments that pay best.",
      },
      {
        q: "How much does SEO for pest control cost?",
        a: "There are three plans: $297, $750 and $1,500 a month, all month to month. A single-branch exterminator typically fits the entry plan; operators whose routes cross several counties, or who want managed Google Ads too, lean toward the middle or top tier. Your free audit picks one.",
      },
      {
        q: "When will pest control SEO start producing calls?",
        a: "Listing fixes and new pest pages often show up in Maps within a few weeks. Crowded searches such as “exterminator near me” in a metro area take several months of reviews, links and content. Each monthly report shows where you moved and which calls followed.",
      },
      {
        q: "Which keywords should a pest control company target?",
        a: "Lead with the treatments that earn the most plus your towns: “exterminator near me”, “termite inspection” with your city, “bed bug treatment”, “rodent control” and “mosquito service”. The audit sizes each one, and pages go to the searches tied to paying work first.",
      },
      {
        q: "Which Google Business Profile category suits an exterminator?",
        a: "Pest Control Service is the right primary category for most companies. Add secondaries such as Exterminator, Wildlife Control Service or Fumigation Service only where the work is real, and skip unrelated ones like lawn care. Then list each treatment as a service and post seasonal updates.",
      },
      {
        q: "Should each pest have its own page on a pest control website?",
        a: "Yes, for the pests you want more of. A termite or bed bug page built around that one pest can win its search and answer what people ask, such as signs, prep and pet safety. A general page listing every treatment seldom wins any of those searches.",
      },
      {
        q: "How does pest control SEO handle seasonal demand?",
        a: "Content follows the calendar: termite swarm pages before spring, mosquito and stinging-insect pages before summer, rodent exclusion before the first cold snap. Pages go live early enough to rank when searches spike, and profile posts follow the same schedule.",
      },
      {
        q: "Can SEO for pest control win commercial accounts?",
        a: "Yes. Restaurants, warehouses, schools and property managers search differently from homeowners, often for “commercial pest control” plus a facility type and audit-ready service. We build those pages, add commercial details to your profile and track business leads apart from residential calls.",
      },
      {
        q: "Do AI Overviews change SEO for pest control companies?",
        a: "They add another place to be named. Google AI Overviews, ChatGPT and Gemini pull from the signals local SEO already builds: clear pest pages, license details, consistent listings and recent reviews. Pest companies with solid local rankings are usually the ones these tools mention.",
      },
      {
        q: "How do I choose a pest control SEO company?",
        a: "Look for month-to-month terms, accounts kept in your name and reports that show calls, not just rankings. We work that way: no long contract, your profile and site stay yours, and every report lists what changed and what it produced.",
      },
    ],
  },
  audit: {
    title: "How Visible Is Your Pest Company? Find Out Free",
    lead: [
      "Send your site and the pests you'd like booked more often. We stack your Maps position, pest pages and reviews against the exterminators ranking above you and return a plain-English first-month plan. Meet ",
      { href: "/about", label: "the strategists on pest accounts" },
      " or look over ",
      { href: "/services", label: "the rest of what we offer" },
      ".",
    ],
    points: [
      "Maps rank in each town",
      "Pest keyword gaps",
      "Profile category check",
      "First-month action list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free pest control SEO audit",
      title: "Request a Pest Control SEO Review",
      subtitle: "Takes two minutes. No contract, no obligation.",
      submitText: "Send My Pest Control Audit Request",
      messageLabel: "Your website and the pests you treat most",
      messagePlaceholder:
        "yourwebsite.com, main pests (termites, rodents, bed bugs) and the towns you cover",
    },
  },
  banner: {
    title: "Own the Map Before the Next Swarm Season",
    lead: "Climb the map, show up in AI answers and watch booked treatments add up in your monthly report.",
  },
};
