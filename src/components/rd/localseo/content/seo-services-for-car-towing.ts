/* SEO Services for Car Towing — redesign draft copy (26 Oct 2026).
   Local SEO dropdown family; brief: docs/local-seo-redesign-brief.md.
   Fresh copy only: no wording from the live page, the electricians
   reference, /services/seo-services-2 or /services/towing-marketing-agency-2.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: seo for towing 527 impressions
     (pos 17.3) · towing seo 401 (19.3) · seo for roadside assistance 240
     (7.4) · towing company seo 234 (22.1) · local seo for towing 192
     (15.9) · seo for car towing companies 169 (6.5) · seo for towing
     companies 132 (16.9) · seo for towing services 127 (17.9).
   - Semrush US: towing seo 140 (KD 5) · towing company seo 40 (2) · seo
     for towing companies 20 · roadside assistance seo 10.
   - Title kept as live ("Towing SEO Company | SEO for Roadside Assistance
     & Towing"): it already carries the head term and the pos-7.4 query.
     H1 leads with "SEO for Towing Companies" (contains the top GSC
     query "seo for towing"; roadside wording stays in the title so the
     H1 does not repeat the live H1); "SEO for car towing companies"
     (pos 6.5) sits in the services H2 and an FAQ; "seo for roadside
     assistance" in an FAQ; "local seo for towing" in the growth H2.
   - Web research (WebSearch ×4, WebFetch ×2 of top results): "Towing
     service" is the primary category with roadside / lockout as
     secondaries; searches are urgent and phone-first, so the Map Pack
     takes the call. Top pages skip after-hours visibility, call tracking,
     suspension risk (towing is a heavily policed category), roadside-only
     operators, commercial accounts and AI answers, so those became the
     night-ranking, suspension, roadside and commercial FAQs, the leads
     row and the AI row. Searches split into emergency, roadside and
     specialty towing. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/seo-services-for-car-towing",
  audience: "Towing companies and roadside assistance operators",
  serviceName: "SEO Services for Car Towing",
  meta: {
    title: "Towing SEO Company | SEO for Roadside Assistance & Towing",
    description:
      "SEO for towing and roadside assistance: Maps rankings, call-type and corridor pages, driver reviews and AI answers that send stranded drivers to your dispatch.",
    keywords: [
      "towing seo",
      "seo for towing",
      "seo for towing companies",
      "towing company seo",
      "seo for roadside assistance",
      "seo for car towing companies",
      "local seo for towing",
      "seo for towing services",
      "towing seo company",
      "roadside assistance seo",
    ],
  },
  hero: {
    h1Lead: "SEO for Towing Companies",
    h1Rest: "That Rings Dispatch Day and Night",
    icon: "tow",
    lead: [
      "A driver with a blown tire on the shoulder taps the first pin that says open now. Our towing SEO makes that pin yours: a tuned ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", call-type and corridor pages, and reviews that mention fast arrivals.",
    ],
    cta: "Audit My Towing Rankings",
    ui: {
      kind: "growth",
      maps: "towns",
      ai: "voice",
      growth: "calls",
      business: "Your Towing Co.",
      category: "Towing service",
      query: "tow truck near me",
      areas: ["Highway corridor", "Downtown", "Airport area", "Suburbs"],
      aiPrompt: "Get a tow truck near me right now",
      aiReasons: ["Dispatch around the clock", "Flatbed and roadside help"],
      growthLabel: "Dispatch calls by week",
      leads: [
        ["Accident tow call", "Google Maps"],
        ["Roadside jump-start", "Voice search"],
        ["Lockout call", "Roadside page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 by corridor",
          title: "First Tow Truck on the Map",
          text: "Corridor and area pages keep you on top wherever drivers break down.",
        },
        {
          label: "Voice & AI",
          badge: "Dispatched",
          title: "The Tow Company Assistants Call",
          text: "Drivers ask out loud and voice assistants dial your dispatch.",
        },
        {
          label: "Calls",
          badge: "Day and night",
          title: "Dispatch Calls Growing Day and Night",
          text: "Tows, jump-starts and lockouts arrive straight from search.",
        },
      ],
    },
  },
  searches: {
    title: "What Stranded Drivers Type Into Their Phones",
    lead: "Roadside searches are short, local and urgent. Each one below gets a page or a profile signal built to match.",
    groups: [
      {
        icon: "tow",
        label: "Emergency towing searches",
        terms: [
          "tow truck near me",
          "towing service near me",
          "24 hour towing",
          "emergency tow near me",
          "accident towing near me",
          "flatbed tow truck near me",
        ],
      },
      {
        icon: "car",
        label: "Roadside assistance searches",
        terms: [
          "jump start service near me",
          "car lockout service",
          "flat tire change near me",
          "fuel delivery near me",
          "winch out service",
          "roadside assistance near me",
        ],
      },
      {
        icon: "truck",
        label: "Specialty towing searches",
        terms: [
          "heavy duty towing near me",
          "motorcycle towing",
          "long distance towing",
          "junk car removal near me",
          "semi truck towing",
          "private property towing",
        ],
      },
    ],
  },
  services: {
    title: "SEO for Car Towing Companies\nThat Never Goes Off Shift",
    lead: "Six services tuned to the calls that keep trucks moving: accident recovery, lockouts, flatbeds and heavy-duty work.",
    cta: "Review My Towing Website",
    items: [
      {
        icon: "pin",
        title: "Towing Google Business Profile Management",
        desc: "Towing Service as primary, roadside and lockout secondaries where they fit, accurate overnight hours, truck photos and corridor-based service areas.",
        points: [
          "Night hours verified",
          "Corridor service areas",
          "Truck and yard photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile management",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification for tow listings",
          },
        ],
      },
      {
        icon: "tow",
        title: "Tow Service Pages for Every Call Type",
        desc: "Pages for flatbed towing, accident recovery, lockouts, jump starts, winch-outs and heavy-duty work, each written for a driver reading on a cracked phone screen.",
        points: [
          "Flatbed and accident pages",
          "Roadside service pages",
          "Heavy-duty recovery page",
        ],
        links: [
          {
            href: "/services/towing-company-website-design",
            label: "Towing website design",
          },
        ],
      },
      {
        icon: "globe",
        title: "Highway and Town Pages for Towing",
        desc: "Pages for the interstates, exits and towns your trucks cover, with clean directory listings, so Google connects your company to every stretch you serve.",
        points: [
          "Corridor landing pages",
          "Exit-by-exit coverage",
          "Directory fixes",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended tow listing recovery",
          },
        ],
      },
      {
        icon: "star",
        title: "Driver Reviews for Tow Operators",
        desc: "A text after every drop-off asks drivers to mention arrival time, vehicle care and the operator, and each review gets a reply.",
        points: [
          "Drop-off review texts",
          "Arrival time in reviews",
          "Replies to every driver",
        ],
        links: [],
      },
      {
        icon: "phone",
        title: "One-Tap Mobile Sites for Towing",
        desc: "Pages that load fast on weak roadside signal, with a sticky call button, towing schema and clean indexing for every service page.",
        points: ["Weak-signal speed", "Sticky call button", "Towing schema"],
        links: [{ href: "/services/web-design", label: "Fast website builds" }],
      },
      {
        icon: "sparkle",
        title: "AI Search for Towing and Roadside Help",
        desc: "Clear facts on hours, coverage, vehicle types and response steps, so Gemini, ChatGPT and Google AI Overviews point stranded drivers to you.",
        points: [
          "Hours and coverage facts",
          "Roadside FAQ answers",
          "AI answer monitoring",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "Optimize for AI answers",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Local SEO for Towing Keeps Trucks Dispatched",
    lead: "The first pin across your coverage, a place in AI answers and calls you can trace to a page.",
    rank: {
      title: "Climb for Tow Truck Near Me on Every Corridor",
      body: [
        "Coverage is split into corridors and towns, and each stretch with steady breakdown traffic earns its own page. Flatbed, accident and lockout searches are tracked weekly by location, so you see which highways are turning into calls.",
      ],
      points: [
        "Corridor keyword map",
        "Weekly grid checks",
        "Rival listing gaps",
        "Night-search tracking",
      ],
      cta: "Find My Towing Keyword Gaps",
      keywords: [
        ["tow truck near me", 17, 2],
        ["towing service + your city", 26, 3],
        ["flatbed towing near me", 31, 4],
        ["roadside assistance near me", 22, 3],
      ],
    },
    ai: {
      title: "Get Your Towing Service Into AI Roadside Answers",
      body: [
        "Drivers now ask voice assistants and chatbots who can tow them right now. The operators that get named have clear hours, coverage pages and recent reviews. We publish those facts in a format AI tools can read and check the answers through our ",
        { href: "/services/ai-seo-services", label: "AI search service" },
        ".",
      ],
      points: [
        "Hours stated everywhere",
        "Coverage pages by town",
        "Matching listings",
        "AI prompt testing",
      ],
      cta: "Check My Towing AI Mentions",
      query: "who can tow my car right now",
      intro: "For a tow near you right now,",
      bullets: [
        "Open around the clock",
        "Clear coverage page",
        "Reviews mention fast arrival",
      ],
    },
    leads: {
      title: "Know Which Search Sent Every Tow Call",
      body: [
        "Dispatch cares about calls, not charts. Every call and form is logged with its source page, search and hour, and call-only ",
        { href: "/services/google-ads", label: "Google Ads for towing" },
        " can cover busy weekends while organic rankings in new towns grow.",
      ],
      points: [
        "Calls logged by hour",
        "Sticky mobile call button",
        "Source on every call",
        "Monthly dispatch report",
      ],
      cta: "Trace My Tow Calls",
      items: [
        ["Accident tow call", "Google Maps", "Sat 2:14 AM"],
        ["Lockout call", "Lockout page", "Sat 9:30 AM"],
        ["Flatbed quote form", "Flatbed page", "Sun 1:05 PM"],
        ["Jump start call", "AI Overview link", "Sun 6:48 PM"],
      ],
    },
  },
  results: {
    title: "What a Busier Tow Dispatch Looks Like With Zonic",
    lead: "First the listing gets accurate, then call-type pages and driver reviews, then more calls at every hour.",
    cta: "Plan My Towing Growth",
    milestones: [
      {
        when: "First week",
        title: "Tow Listing Hours Fixed",
        text: "We correct your towing category, overnight hours and corridor service areas so late-night searches can find you.",
      },
      {
        when: "Month 1",
        title: "Call-Type Tow Pages Launch",
        text: "Flatbed, lockout, accident and roadside pages go live, built to load fast on a weak signal.",
      },
      {
        when: "Months 2–4",
        title: "Towing Reviews Build Momentum",
        text: "Drop-off review texts and local links add up, pushing your pin toward the top along more corridors.",
      },
      {
        when: "After month 4",
        title: "Steadier Direct Tow Calls",
        text: "More drivers call your dispatch line directly, and each call is logged by hour, page and search.",
      },
    ],
    wins: [
      {
        icon: "phone",
        title: "More Direct Tow Calls After Dark",
        text: "Accurate hours and night-time reviews help your listing show as open when late breakdown searches happen.",
      },
      {
        icon: "trend",
        title: "Less Towing Work Tied to Motor Clubs",
        text: "Drivers who find you on Maps call you directly, so less of your work hinges on motor club referrals.",
      },
      {
        icon: "star",
        title: "Tow Reviews That Reassure Stranded Drivers",
        text: "Reviews describing quick arrivals and careful handling help a nervous driver choose you over the next listing.",
      },
      {
        icon: "truck",
        title: "More Fleet and Dealer Towing Accounts",
        text: "Commercial towing pages give body shops, dealers and fleet managers a reason to set up ongoing work.",
      },
    ],
  },
  compare: {
    title: "How Zonic Differs for Towing and Roadside Operators",
    lead: "Where our approach for tow companies differs from what operators often get.",
    rows: [
      {
        topic: "Overnight tow visibility",
        other:
          "Hours and profile work often done once, with little attention to after-dark searches.",
        zonic:
          "Round-the-clock hours kept accurate and reviews that mention late-night help, so night searches can find you.",
      },
      {
        topic: "Reliance on motor club work",
        other:
          "Often little thought given to how much work arrives through motor clubs.",
        zonic:
          "Direct-call pages and Maps work aimed at drivers who call you, not a club dispatcher.",
      },
      {
        topic: "Tow call-type pages",
        other:
          "Often one towing page that covers flatbeds, lockouts and heavy recovery in a paragraph.",
        zonic:
          "Flatbed, accident, lockout, jump start and heavy-duty pages, each written for a driver at the roadside.",
      },
      {
        topic: "Tow listing suspensions",
        other:
          "Keyword-stuffed names or shared addresses that can put a towing listing at risk.",
        zonic:
          "Listings kept inside Google's guidelines, and suspended tow profiles appealed through our reinstatement service.",
      },
      {
        topic: "Corridor and exit coverage",
        other:
          "A city-name keyword list that often ignores the highways where breakdowns happen.",
        zonic:
          "Interstate, exit and town pages for the stretches you serve, with rankings checked corridor by corridor.",
      },
      {
        topic: "Ads and tow call tracking",
        other:
          "Call totals without sources, and ad spend that can carry a management markup.",
        zonic:
          "Every call logged by hour, page and search, with call-only ads at 0% ad-spend markup.",
      },
    ],
  },
  steps: {
    title: "How Towing SEO Gets Set Up and Grows",
    lead: "Week one is listing and site repair; corridor pages, driver reviews and local links pile up from there.",
    items: [
      {
        h: "Map Your Towing Corridors and Rivals",
        p: "We review your listing, site and the tow operators beating you on each highway and town, then rank call types by volume and value.",
      },
      {
        h: "Fix the Tow Listing, Then Launch Call-Type Pages",
        p: "Hours, category and photos are corrected in the first week; flatbed, lockout and corridor pages follow, and review texts start with the next drop-off.",
      },
      {
        h: "Report Tow Calls by Hour and Source",
        p: "Monthly reports break down calls by hour, call type and source, and we push harder on the corridors and services bringing the most dispatches.",
      },
    ],
    audit: [
      ["Night hours", "gap"],
      ["Call-type pages", "gap"],
      ["Driver reviews", "open"],
      ["Weak-signal speed", "behind"],
    ],
    plan: [
      "Flatbed page",
      "Lockout page",
      "Corridor pages",
      "Driver reviews",
      "Auto shop links",
    ],
    launch: [
      "Hours fixed",
      "Call pages live",
      "Reviews coming in",
      "Calls logged",
    ],
  },
  explore: {
    title: "More Services for Towing and Roadside Companies",
    lead: "Rankings pay off faster with a one-tap site and paid calls for holiday and storm weekends.",
    items: [
      {
        name: "Towing Marketing",
        sub: "A full plan for more dispatches",
        href: "/services/towing-marketing-agency",
        icon: "tow",
      },
      {
        name: "Towing Websites",
        sub: "Built for one-thumb calling",
        href: "/services/towing-company-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads for Towing",
        sub: "Call ads for peak weekends",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Local SEO Across Service Trades",
        sub: "The playbook behind this page",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Run a repair shop or impound yard too? One plan can cover every location.",
  },
  reviews: {
    title: "Our 5.0 Google Rating, Open for Tow Owners to Read",
    lead: "Real feedback from business owners, posted publicly on Google.",
  },
  pricing: {
    title: "Towing SEO Plans, Cancel Any Month",
    compareTitle: "Compare Plans for One Tow Truck or a Full Fleet",
    addOnsTitle: "Towing Add-Ons for Storm and Holiday Weekends",
    customTitle: "Multiple Yards or Towing Brands?",
  },
  faq: {
    title: "Towing SEO Questions Operators Ask Before Signing",
    lead: "Cost, timing, Map Pack rules and what SEO for towing covers.",
    items: [
      {
        q: "What does SEO for towing companies include?",
        a: "It is the work that puts your trucks in front of drivers searching nearby: Business Profile management, call-type and corridor pages, driver reviews, directory listings, mobile speed fixes and local links. The target is the first Map Pack pin for “tow truck near me” across the areas you cover.",
      },
      {
        q: "How much does towing company SEO cost?",
        a: "Our three plans cost $297, $750 or $1,500 each month, and you can stop any month. One-truck operators usually start small; fleets covering several towns, or wanting Google Ads run alongside, choose a bigger plan. The free audit shows which one matches your coverage.",
      },
      {
        q: "How fast can SEO for towing bring more calls?",
        a: "Category, hours and photo fixes can move your Maps position within weeks, especially at night when fewer operators show as open. Busy metro corridors take a few months of reviews, pages and links. Your monthly report shows calls and rankings, so you can judge progress yourself.",
      },
      {
        q: "How do towing companies rank in the Map Pack at night?",
        a: "Google favors listings that are open when the search happens. Mark round-the-clock hours only if dispatch truly answers, keep Towing Service as the primary category, and earn reviews that mention late-night help. Verified operators that are open at 2 AM often outrank bigger fleets after dark.",
      },
      {
        q: "Does SEO for roadside assistance work without towing?",
        a: "Yes. Operators who only do jump starts, lockouts, tire changes and fuel delivery can rank with a roadside-focused category, a page for each service and reviews that name the job. We set that up so you are not competing for flatbed searches you cannot take.",
      },
      {
        q: "Why do towing listings get suspended, and can you fix it?",
        a: "Google watches the towing category closely because of fake listings, so address problems, keyword-stuffed names or duplicate profiles can trigger a suspension. We clean up those causes, handle the appeal through our reinstatement service, then keep the listing inside Google's guidelines.",
      },
      {
        q: "Should a towing company build pages for each town or highway?",
        a: "For the areas where you want calls, yes. A page for a town or an interstate stretch can mention exits, landmarks and local details that a single coverage page cannot. Each one also gives Google a clear signal about where your trucks operate.",
      },
      {
        q: "Can SEO for car towing companies bring commercial accounts?",
        a: "Yes. Body shops, dealerships, fleet managers and property managers search for fleet towing, dealer transport and private property towing. We build pages for those services, list them on your profile and track business inquiries separately from roadside calls.",
      },
      {
        q: "Will AI assistants send stranded drivers to my towing company?",
        a: "They can. Voice assistants, ChatGPT and Google AI Overviews pick tow operators whose hours, coverage and reviews are clear and consistent across the web. Winning the Map Pack and being named by AI rest on the same profile and page work.",
      },
      {
        q: "Are towing SEO plans locked into long contracts?",
        a: "No. Every plan is month to month, and you own the Google profile, website and call data outright. Each monthly report shows what we changed and how many calls followed. You stay because dispatch is busier, not because of a contract.",
      },
    ],
  },
  audit: {
    title: "Get a Free Map Check for Every Corridor You Tow",
    lead: [
      "Send your site and the towns and highways you cover. We check your Map Pack position at different hours, your call-type pages and reviews against nearby operators, then send a plain plan. Read ",
      { href: "/about", label: "about Zonic Media" },
      " or browse ",
      { href: "/services", label: "our services" },
      ".",
    ],
    points: [
      "Map rank by corridor",
      "Night-time visibility",
      "Listing suspension risks",
      "First-month fix list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free towing SEO audit",
      title: "Request a Tow Listing and Rankings Audit",
      subtitle: "Fast, free and with no contract to sign.",
      submitText: "Send My Towing Audit",
      messageLabel: "Your website and the call types you run",
      messagePlaceholder:
        "yourwebsite.com, flatbed, roadside or heavy-duty, and the towns or highways you cover",
    },
  },
  banner: {
    title: "Be the First Pin Drivers Tap When They Break Down",
    lead: "Top Maps spots day and night, AI mentions and a call log you can trace, reported monthly.",
  },
};
