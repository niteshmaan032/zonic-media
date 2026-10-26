/* SEO Services for Plumbers — redesign draft copy (26 Oct 2026).
   Brief: docs/local-seo-redesign-brief.md. Fresh copy; nothing reused from
   the live page, the electricians reference, /services/seo-services-2 or
   /services/plumbing-marketing-agency-2.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: no impressions recorded; the live
     title targets "SEO for Plumbers" and "Plumbing SEO Company".
   - Semrush US: seo for plumbers 3,600 (KD 17) · plumber seo 2,400 (37) ·
     plumbing seo 1,900 (41) · local seo for plumbers 1,300 (13) · plumbing
     seo company 880 (32) · plumbing seo services 720 (22).
   - Web research (ServiceTitan, WebFX, Housecall Pro, vendor GBP guides):
     top pages cover GBP, keywords, on-page, content, technical, links;
     few cover after-hours visibility, AI answers, commercial plumbing or
     category choice. GBP guides agree on "Plumber" as primary with
     Drainage Service, Water Heater Installation Service, Emergency Plumber
     as optional secondaries, and note that listings showing "Closed" drop
     out of night searches — hence the 24-hour FAQ and the phone hero on
     "emergency plumber near me". PAA themes used: how long plumber SEO
     takes, which keywords to target, SEO alongside Local Services Ads.
   - Title keeps "SEO for Plumbers" and "Plumbing SEO Company" (live
     title); the H1 uses the head term "SEO for Plumbers". */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/seo-services-for-plumber",
  audience: "Plumbers and plumbing companies",
  serviceName: "SEO Services for Plumbers",
  meta: {
    title: "SEO for Plumbers | Plumbing SEO Company & Local SEO",
    description:
      "Plumber SEO that puts your plumbing company at the top of Google Maps, local results and AI answers for burst pipes, clogged drains and water heaters. Free audit.",
    keywords: [
      "seo for plumbers",
      "plumber seo",
      "plumbing seo",
      "local seo for plumbers",
      "plumbing seo company",
      "plumbing seo services",
      "seo services for plumbers",
      "plumber local seo",
      "plumbing seo agency",
      "seo for plumbing companies",
    ],
  },
  hero: {
    h1Lead: "SEO for Plumbers",
    h1Rest: "That Puts Your Van First When a Pipe Bursts",
    icon: "plumbing",
    lead: [
      "Someone standing in an inch of water taps the first plumber on the map. Our plumbing SEO company puts you there: a sharper ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile",
      },
      ", a page for every drain, leak and water heater job, and calls tagged by source.",
    ],
    cta: "Start My Free Plumbing Audit",
    ui: {
      kind: "growth",
      maps: "pin",
      ai: "voice",
      growth: "feed",
      business: "Your Plumbing Co.",
      category: "Plumber",
      query: "emergency plumber near me",
      aiPrompt: "Call a plumber near me for a burst pipe",
      aiReasons: ["Answers around the clock", "Clear emergency service page"],
      growthLabel: "New plumbing jobs",
      leads: [
        ["Burst pipe call", "Google Maps"],
        ["Drain cleaning booking", "Voice search"],
        ["Water heater quote", "Water heater page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 nearby",
          title: "The First Plumber on the Map",
          text: "When a pipe bursts, your pin and Call button sit above every rival.",
        },
        {
          label: "Voice & AI",
          badge: "Chosen",
          title: "Picked When Homeowners Ask Hands-Free",
          text: "Voice and AI assistants read your hours, services and reviews aloud.",
        },
        {
          label: "Jobs",
          badge: "More booked",
          title: "Drains, Leaks and Heaters Booked Daily",
          text: "Emergency calls and booked jobs arrive from Maps, voice search and service pages.",
        },
      ],
    },
  },
  searches: {
    title: "Plumbing Searches We Rank Your Company For",
    lead: "Pages and profile signals built on the exact words people use with a backed-up drain or a cold shower.",
    groups: [
      {
        icon: "drop",
        label: "Leak and burst-pipe plumbing searches",
        terms: [
          "emergency plumber near me",
          "burst pipe repair",
          "water leak under sink",
          "24 hour plumber",
          "slab leak detection",
          "plumber open now",
        ],
      },
      {
        icon: "plumbing",
        label: "Drain and sewer plumbing searches",
        terms: [
          "clogged drain near me",
          "drain cleaning service",
          "sewer line camera inspection",
          "hydro jetting near me",
          "toilet keeps clogging",
          "main line backup",
        ],
      },
      {
        icon: "flame",
        label: "Water heater plumbing searches",
        terms: [
          "water heater repair near me",
          "no hot water",
          "tankless water heater install",
          "water heater replacement",
          "water heater leaking",
          "gas line plumber",
        ],
      },
    ],
  },
  services: {
    title: "Plumbing SEO Services\nfor Every Job on the Board",
    lead: "Monthly work aimed at the jobs that keep your trucks profitable: drains, leaks, sewer lines and water heaters.",
    cta: "Audit My Plumbing Site",
    items: [
      {
        icon: "pin",
        title: "Plumber Business Profile Optimization",
        desc: "Plumber as the primary category, drainage and water heater secondaries, every town you cover mapped, and job photos posted straight from the truck.",
        points: [
          "Plumber primary category",
          "Service towns mapped",
          "Truck-side photo posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile tuning service",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Video verification help",
          },
        ],
      },
      {
        icon: "file",
        title: "Plumbing Service and City Pages",
        desc: "Pages for drain cleaning, leak detection, sewer repair, water heaters and repiping, plus a page per city with local pipe and code notes.",
        points: [
          "Drain and sewer pages",
          "Water heater pages",
          "City pages with codes",
        ],
        links: [
          {
            href: "/services/plumbing-website-design",
            label: "Plumbing website builds",
          },
        ],
      },
      {
        icon: "star",
        title: "Plumbing Reviews That Name the Job",
        desc: "Customers get a text as the invoice closes, and the request nudges them to mention the fix, their town and the plumber who came.",
        points: [
          "Invoice-close texts",
          "Job and town mentions",
          "Owner replies to all",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Plumbing Website Speed and Schema",
        desc: "Pages that load fast on a phone in a flooded basement, Plumber schema on every service, and crawl errors cleared so Google indexes them.",
        points: [
          "Plumber schema markup",
          "Mobile load speed",
          "Crawl error cleanup",
        ],
        links: [
          { href: "/services/web-design", label: "Websites built for search" },
        ],
      },
      {
        icon: "layers",
        title: "Plumbing Citations and Local Links",
        desc: "Matching business details on every directory and map app, plus links from supply houses, builders, property managers and local news.",
        points: [
          "Directory NAP fixes",
          "Supply house links",
          "Builder and landlord links",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended listing help",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Plumbing Questions",
        desc: "Short answers on leaks, clogs and water heater choices, matched with steady listings, so ChatGPT, Gemini and AI Overviews suggest your company.",
        points: [
          "Answer-first plumbing FAQs",
          "Uniform NAP details",
          "Plumber mentions logged",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI SEO for plumbers",
          },
        ],
      },
    ],
  },
  growth: {
    title: "What Plumber SEO Changes for Your Phone Line",
    lead: "More map visibility, more AI mentions and calls you can trace back to a page.",
    rank: {
      title: "Rank for the Plumbing Jobs With the Best Margins",
      body: [
        "Drain calls keep the board busy, but sewer lines, repipes and tankless installs pay best. We map searches by job and city, build a page for each, and check positions every week so you see which suburbs still go to someone else.",
      ],
      points: [
        "Margin-first keyword map",
        "City-by-city positions",
        "Weekly rank checks",
        "Competitor gap list",
      ],
      cta: "Find My Plumbing Ranking Gaps",
      keywords: [
        ["emergency plumber near me", 17, 2],
        ["sewer line repair + your city", 29, 3],
        ["tankless water heater install", 34, 5],
        ["drain cleaning near me", 20, 3],
      ],
    },
    ai: {
      title: "Show Up When Homeowners Ask AI About a Leak",
      body: [
        "When a water heater starts leaking, many people ask an assistant what to do and who to call. Licence numbers, clear service pages and reviews that describe real fixes give assistants grounds to recommend your plumbing company. Our ",
        { href: "/services/ai-seo-services", label: "AI SEO work" },
        " handles that groundwork.",
      ],
      points: [
        "Licence and insurance facts",
        "Leak and clog FAQs",
        "Matching listings everywhere",
        "AI answer audits",
      ],
      cta: "Test My Plumbing AI Visibility",
      query: "who can fix a leaking water heater near me",
      intro: "For a leaking water heater nearby,",
      bullets: [
        "Licensed master plumber",
        "Water heater repair page",
        "Reviews about quick fixes",
      ],
    },
    leads: {
      title: "Turn Plumbing Searches Into Dispatched Jobs",
      body: [
        "Each plumbing call and form records the page and query that produced it, the call button stays pinned on mobile, and ",
        { href: "/services/google-ads", label: "Google Ads for plumbers" },
        " can cover quiet weeks while organic rankings build underneath.",
      ],
      points: [
        "Calls tagged by page",
        "Pinned mobile call button",
        "Short booking form",
        "Monthly plumbing lead report",
      ],
      cta: "Show My Plumbing Call Sources",
      items: [
        ["Burst pipe call", "Google Maps", "Sat 6:52 AM"],
        ["Water heater quote", "Water heater page", "Mon 11:20 AM"],
        ["Leak question", "AI Overview link", "Mon 4:45 PM"],
        ["Drain cleaning booking", "City page", "Tue 8:10 AM"],
      ],
    },
  },
  results: {
    title: "What Plumbing Companies Gain With Zonic",
    lead: "Changes arrive in order: a corrected listing, job pages, then reviews and calls that keep the vans moving.",
    cta: "Plan My Plumbing Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Plumber Listing Set Straight",
        text: "Category, emergency hours and service towns get corrected, so Google can match you to urgent plumbing searches.",
      },
      {
        when: "Month 1",
        title: "Drain, Leak and Heater Pages",
        text: "Pages for the jobs with the best margins go live and begin competing for city-level searches.",
      },
      {
        when: "Months 2–4",
        title: "Rising in More Neighborhoods",
        text: "New job-photo reviews and supply-house links tend to move your listing up across more of your cities.",
      },
      {
        when: "Ongoing",
        title: "A Busier Dispatch Board",
        text: "More calls arrive for sewer, repipe and water heater work, each traced to the search behind it.",
      },
    ],
    wins: [
      {
        icon: "drop",
        title: "More Emergency Calls at Any Hour",
        text: "Accurate hours and a fast mobile page help burst-pipe and leak searchers reach your phone first.",
      },
      {
        icon: "plumbing",
        title: "Bigger Sewer and Repipe Jobs",
        text: "Pages for high-margin plumbing work attract owners ready to book, not only quick drain clears.",
      },
      {
        icon: "star",
        title: "Reviews That Describe the Plumbing Fix",
        text: "Customers mention the leak, the clog or the heater you replaced, which helps the next homeowner decide.",
      },
      {
        icon: "trend",
        title: "Fewer Plumbing Leads Shared With Rivals",
        text: "Homeowners call your number directly from Google rather than through lead sites that sell them on.",
      },
    ],
  },
  compare: {
    title: "Zonic vs. a One-Size SEO Agency for Plumbers",
    lead: "How our plumber SEO compares with what plumbing companies are often sold.",
    rows: [
      {
        topic: "Night and weekend plumbing calls",
        other:
          "Hours and categories left as set long ago, showing closed overnight.",
        zonic:
          "Emergency categories, true hours and tap-to-call set up for burst-pipe and backup searches.",
      },
      {
        topic: "Plumbing job pages",
        other:
          "A single services page meant to rank for drains, sewers and heaters.",
        zonic:
          "Separate pages for drains, leaks, sewer lines, water heaters and repiping in each city.",
      },
      {
        topic: "Plumbing review requests",
        other:
          "Reviews left to chance, often only after an unhappy customer posts.",
        zonic:
          "A text at invoice close asking customers to mention the fix and their town.",
      },
      {
        topic: "Local plumbing links",
        other:
          "Generic directory submissions and links from sites with no local tie.",
        zonic:
          "Matching listings plus links from supply houses, builders, property managers and local news.",
      },
      {
        topic: "Plumbing ads alongside SEO",
        other: "Ad spend can carry a markup, and ads often run apart from SEO.",
        zonic:
          "Google Ads managed with a 0% ad-spend markup, tuned with the same call data as SEO.",
      },
      {
        topic: "Plumbing agreement length",
        other:
          "Many agencies ask for a lengthy agreement before any calls are measured.",
        zonic:
          "Month to month, with the profile, website and call numbers in your name.",
      },
    ],
  },
  steps: {
    title: "How Our Plumbing SEO Work Rolls Out",
    lead: "Listing and site repairs come first; job pages, reviews and links stack up in the months after.",
    items: [
      {
        h: "Plumbing Market and Listing Audit",
        p: "City by city, we line up your listing, website and reviews against every plumber outranking you and shortlist the jobs to chase first.",
      },
      {
        h: "Fix the Basics, Publish Plumbing Pages",
        p: "Category, hours and crawl fixes ship in the first week; drain, sewer and water heater pages follow, along with review texts.",
      },
      {
        h: "Report Plumbing Calls and Scale Winners",
        p: "Your report shows calls, forms and rankings by job and city each month, and the next round of work backs the pages that booked jobs.",
      },
    ],
    audit: [
      ["Map spot for drains", "behind"],
      ["Water heater page", "gap"],
      ["Review texts", "open"],
      ["Mobile load time", "behind"],
    ],
    plan: [
      "Drain page",
      "Sewer page",
      "Water heater page",
      "City pages",
      "Supply house links",
    ],
    launch: [
      "Listing corrected",
      "Job pages live",
      "Reviews arriving",
      "Calls sourced",
    ],
  },
  explore: {
    title: "More Ways to Grow Your Plumbing Company",
    lead: "Pair rankings with a fast plumbing site, and lean on paid search when the board looks thin.",
    items: [
      {
        name: "Plumbing Marketing",
        sub: "Full growth plan for plumbers",
        href: "/services/plumbing-marketing-agency",
        icon: "plumbing",
      },
      {
        name: "Plumbing Websites",
        sub: "Mobile sites that get the call",
        href: "/services/plumbing-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Calls on demand for quiet weeks",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Our method for every home trade",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Run HVAC or drain crews too? One plan can rank every service you offer.",
  },
  reviews: {
    title: "Why Service Owners Rate Our SEO Work 5.0",
    lead: "Straight from our Google profile, word for word.",
  },
  pricing: {
    title: "Plumber SEO Plans, No Long Contract",
    compareTitle: "Compare Plans for Plumbing Companies",
    addOnsTitle: "Add-Ons for Busy Plumbing Shops",
    customTitle: "Several Plumbing Branches or Brands?",
  },
  faq: {
    title: "Plumber SEO Questions Owners Ask First",
    lead: "Costs, timelines, categories and how AI search is reshaping local results for plumbers.",
    items: [
      {
        q: "What is local SEO for plumbers?",
        a: "Local SEO for plumbers is the set of fixes that moves a plumbing company into the Maps results and onto page one for nearby customers. It covers the Business Profile, a page per job and city, review requests, citations, links and site repairs, all aimed at calls for the work you want.",
      },
      {
        q: "How much does plumbing SEO cost with Zonic Media?",
        a: "Plans are $297, $750 or $1,500 a month and run month to month. A solo plumber in one city usually begins with the first; shops with several vans, more cities or managed Google Ads tend to land on the second or third. Your free audit points to the right fit.",
      },
      {
        q: "How soon does SEO for plumbers bring calls?",
        a: "Category and hours fixes plus fresh drain and water heater pages often move your map position in a few weeks. Big-city terms such as “plumber near me” usually take several months, depending on how strong the plumbers above you are. Rankings, calls and forms appear in each monthly report, so progress never hides.",
      },
      {
        q: "Which plumbing keywords bring the most valuable calls?",
        a: "Emergency and high-ticket searches: “emergency plumber near me”, “sewer line repair” with your city, “water heater replacement”, “slab leak repair” and “drain cleaning”. The audit sizes each one in your market, and we build pages first for the jobs with the best margins.",
      },
      {
        q: "What Google categories should a plumber pick?",
        a: "Plumber should be the primary category for most companies. Drainage Service, Water Heater Installation Service, Emergency Plumber or Septic System Service can be added as secondaries, but only for work you actually do. Padding the list with loose matches tends to weaken relevance rather than help.",
      },
      {
        q: "Should plumbers set 24-hour hours on Google?",
        a: "Only if someone really answers the phone at night. Listings that show as closed tend to drop out of after-hours results, so true emergency plumbers should set round-the-clock hours. If you don't take night calls, keep accurate hours and win the daytime searches instead.",
      },
      {
        q: "Does plumber SEO still matter if I run Local Services Ads?",
        a: "Yes. Paid placements stop when the payments stop, while Maps rankings and service pages keep bringing calls. Many plumbers run both: ads for immediate volume, SEO for the steady base underneath. Strong reviews and a complete profile help both channels perform.",
      },
      {
        q: "Can AI search send calls to a plumbing company?",
        a: "It already does. People ask ChatGPT and Google's AI Overviews what a leak means and who can fix it. Assistants tend to name plumbers with clear answer pages, the same business details on every listing and reviews that mention actual repairs. We build all three.",
      },
      {
        q: "Can you rank commercial plumbing services too?",
        a: "Yes. Commercial plumbing needs its own pages and searches: backflow testing, grease trap service, tenant build-outs and maintenance agreements for property managers. We add commercial categories, build those pages and report commercial leads separately from residential calls.",
      },
      {
        q: "Will I be locked into a plumbing SEO contract?",
        a: "No. You can stop any month with no exit fee; the profile, website and tracking numbers remain yours; and each report lists what changed. If your listing ever gets suspended, our reinstatement specialists can work on getting it back.",
      },
    ],
  },
  audit: {
    title: "Find Out Where Your Plumbing Company Ranks",
    lead: [
      "Share your site and the plumbing jobs worth more calls. We compare your map ranking city by city, plus your pages and reviews, with nearby plumbers, then send a short, plain plan. Wondering who picks up your file? Read ",
      { href: "/about", label: "who runs Zonic Media" },
      " or scan ",
      { href: "/services", label: "our services beyond plumbing SEO" },
      ".",
    ],
    points: [
      "Maps rank per city",
      "Plumbing keyword gaps",
      "Category and hours check",
      "First-month job plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free plumber SEO audit",
      title: "Get Your Free Plumbing Rankings Review",
      subtitle: "Free and no obligation.",
      submitText: "Send My Plumbing Audit",
      messageLabel: "Your website and the plumbing jobs you want",
      messagePlaceholder:
        "yourwebsite.com, your top jobs (drains, water heaters, sewer) and cities",
    },
  },
  banner: {
    title: "Own the Map Before the Next Burst Pipe",
    lead: "Rankings, reviews and AI mentions that keep dispatch busy, reported plainly every month.",
  },
};
