/* Pool Service Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: pool services web design company
     4 impressions (pos 8.2). Very little data, so targets come from
     Semrush.
   - Semrush US: pool builder website design 90 (KD 4) · pool service
     website design 50 · pool company website design 20.
   - Web research (pool owner buying guides, pool service scheduling and
     website guides): owners ask how often techs visit, what each visit
     covers (skim, brush, vacuum, test and balance, baskets, filter
     pressure), whether chemicals are included, if they need to be home,
     who handles pump, filter and heater repairs and whether weekly
     service starts with the spring opening; they want visit logs with
     readings, a quick way to confirm the company covers their street,
     24/7 online booking for weekly plans, openings, closings and
     green-pool cleanups, and a portal or pay-a-bill link. Pool builder
     sites lean on project galleries and design consultation requests.
   Angle: recurring accounts and route density, with repairs and seasonal
   work as the second demand type; a builder/remodel card covers "pool
   builder website design". Rules kept: build time 2–3 weeks, no prices
   or figures, no company, platform or software brand named, verified
   numbers only, every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/pool-service-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by service need",
    business: "Your Pool Service Co.",
    domain: "yourpoolserviceco.com",
    nav: ["Weekly care", "Repairs", "Openings", "Areas"],
    call: "Call or text",
    primary: "Start weekly service",
    secondary: "Check my ZIP",
    proof: "Trusted by local pool owners",
    bookTitle: "Schedule a pool visit",
    confirm: "Book this visit",
    serviceSubs: [
      "Readings after each visit",
      "Licensed and insured",
      "Gate-code friendly",
    ],
    toast: "Visit scheduled",
    toastNote: "Route day: Thursday",
    phoneCta: "Sign up",
    modes: [
      {
        label: "Weekly service",
        icon: "pool",
        badge: "Weekly routes · New spots open",
        headline: "Clear Water Every Week Without the Chemistry",
        sub: "Skim, brush, vacuum and balance on a set day, with a report after every stop.",
        services: ["Weekly cleaning", "Chemical balancing", "Filter cleans"],
        book: ["Weekly service", "Every other week", "One-time clean"],
        img: {
          src: "/images/free-website/free-pool-service/weekly-pool-service.webp",
          position: "50% 50%",
        },
      },
      {
        label: "Repairs & openings",
        icon: "wrench",
        badge: "Pump & filter repair · Openings",
        headline: "Pump Quit or Pool Turning Green? We'll Fix It.",
        sub: "Pump, filter and heater repair, green-pool rescues, openings and closings.",
        services: [
          "Pump & motor repair",
          "Green pool cleanup",
          "Opening & closing",
        ],
        book: ["Pump repair", "Green to clean", "Spring opening"],
        img: {
          src: "/images/free-website/free-pool-service/pool-repair.webp",
          position: "55% 45%",
        },
      },
    ],
    legend: [
      "Header button for calls and texts",
      "Weekly plan and repair pages",
      "Visit scheduler by route day",
      "Sign-up bar on every phone",
    ],
  },
  // Cyan weekly care, gold repairs and openings, then indigo and pink.
  tones: tonesFor("pool-service-website-design"),
  serviceName: "Pool Service Website Design",
  audience: "pool service companies, pool cleaners and pool builders",
  meta: {
    title: "Pool Service Website Design | Pool Company Web Design",
    description:
      "Pool service website design for cleaning routes, repair techs and pool builders: weekly plan signups, ZIP checks, repair booking and pages that rank nearby.",
    keywords: [
      "pool service website design",
      "pool company website design",
      "pool company web design",
      "pool services web design company",
      "pool builder website design",
      "pool cleaning website design",
      "pool service web design",
      "pool service websites",
      "pool cleaning company website",
      "pool repair website design",
    ],
  },
  hero: {
    h1Lead: "Pool Service Website Design",
    h1Rest: "That Signs Weekly Route Accounts",
    icon: "pool",
    lead: [
      "We build pool service websites that sign up weekly accounts, book repairs and openings, and show owners exactly which streets your routes cover. Built as a ",
      { href: "/services/web-design", label: "custom website" },
      ", it launches in 2–3 weeks and links to the route software your techs already use.",
    ],
    cta: "Get My Free Pool Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/pool-service-first-impressions-1.webp",
        position: "60% center",
        query: "pool cleaning service near me",
      },
      cardA: {
        icon: "repeat",
        title: "Weekly Accounts Signed Online",
        sub: "Plan pages owners can join in minutes",
      },
      photoB: {
        src: "/images/home-improvement-web/pool-service-hero.webp",
        position: "center",
        query: "pool repair near me",
      },
      cardB: {
        icon: "pin",
        title: "Denser Routes, Less Drive Time",
        sub: "ZIP and neighborhood pages that rank",
      },
    },
  },
  showcase: {
    title: "Preview a Pool Company Website for Routes and Repairs",
    lead: "Switch between weekly care and repair work to see the homepage, scheduler and phone view change.",
  },
  services: {
    title: "Pool Company Website Design\nfor Service Routes and Builds",
    lead: "One team for the build, the writing and every update after it.",
    cta: "Plan My Pool Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Pool Service Websites",
        desc: "Designed around your routes, service days and repair work, with copy that answers what pool owners ask first.",
        points: [
          "Original design",
          "Route-area pages",
          "Copy written in-house",
        ],
        links: [
          { href: "/services/web-design", label: "Our website design process" },
        ],
      },
      {
        icon: "repeat",
        title: "Weekly Plan Signup Pages",
        desc: "Plan pages that list what every visit covers and let owners sign up for weekly or every-other-week service.",
        points: [
          "What each visit covers",
          "Frequency options",
          "Online signup",
        ],
        links: [
          {
            href: "/pool-service-website-design-agency-us/offer",
            label: "Free pool website offer",
          },
        ],
      },
      {
        icon: "wrench",
        title: "Repair, Opening and Closing Pages",
        desc: "Pages for pumps, filters, heaters, leaks and green-pool cleanups, plus seasonal openings and closings in cooler regions.",
        points: [
          "Equipment repair pages",
          "Green pool cleanup",
          "Seasonal open and close",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for pool companies",
          },
        ],
      },
      {
        icon: "pool",
        title: "Pool Builder and Remodel Pages",
        desc: "For companies that build or resurface pools: project galleries, design consultation requests and remodel pages.",
        points: [
          "Build galleries",
          "Consultation requests",
          "Resurfacing pages",
        ],
        links: [],
      },
      {
        icon: "calendar",
        title: "Scheduling and Customer Portal Links",
        desc: "Booking that syncs with your route software, plus easy links to pay a bill or check visit notes.",
        points: [
          "Route software sync",
          "Pay-a-bill link",
          "Visit notes access",
        ],
        links: [
          {
            href: "/services/gmb-verification-help",
            label: "Google profile verification",
          },
        ],
      },
      {
        icon: "tool",
        title: "Managed Hosting and Pool-Season Edits",
        desc: "Secure hosting, backups and edits handled for you, with opening and closing offers refreshed each spring and fall.",
        points: [
          "Managed hosting",
          "Spring and fall updates",
          "Quick edit turnaround",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-pool-service-companies",
            label: "Local SEO for pool companies",
          },
        ],
      },
    ],
  },
  features: {
    title: "Pool Website Details That Turn Visitors Into Accounts",
    lead: "What pool owners check before they hand over a gate code.",
    items: [
      {
        icon: "call",
        title: "Phone or Text, Owner's Choice",
        text: "Owners reach the office by phone or text from any page.",
      },
      {
        icon: "pin",
        title: "ZIP Check for Route Coverage",
        text: "Visitors confirm you service their street before signing up.",
      },
      {
        icon: "clipboard",
        title: "What Every Visit Includes",
        text: "Skimming, brushing, vacuuming and testing spelled out plainly.",
      },
      {
        icon: "water",
        title: "Water Care Tips That Rank",
        text: "Short guides on cloudy or green water bring in searches.",
      },
      {
        icon: "shield",
        title: "Licensed, Insured, Clearly Stated",
        text: "Coverage and certifications shown before owners share access.",
      },
      {
        icon: "calendar",
        title: "Repairs Booked by Time Slot",
        text: "Pump and filter jobs get scheduled online in a few taps.",
      },
      {
        icon: "star",
        title: "Reviews Right at the Signup Button",
        text: "Owner reviews sit right beside your plan buttons.",
      },
      {
        icon: "bolt",
        title: "Speedy Pages Poolside",
        text: "Quick loads on phones, even on patchy backyard signal.",
      },
    ],
  },
  growth: {
    title: "How Pool Service Web Design Grows Routes and Repair Work",
    lead: "Rank in the neighborhoods you serve, convert visits into accounts and get mentioned by AI tools.",
    rank: {
      title: "Rank for Pool Cleaning and Repair Near Your Routes",
      body: [
        "Pages for each service and each area you run routes in are written around real searches and checked weekly. Layer on ",
        {
          href: "/services/industry/local-seo-for-pool-service-companies",
          label: "pool service local SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Business Profile tune-ups",
        },
        " for a spot in the map results.",
      ],
      points: [
        "Area pages by route",
        "Repair keyword pages",
        "Weekly rank checks",
        "Pool service schema",
      ],
      cta: "Map My Route Pages",
      keywords: [
        ["pool cleaning service near me", 25, 3],
        ["pool pump repair + city", 30, 4],
        ["weekly pool service", 21, 2],
        ["green pool cleanup near me", 34, 5],
      ],
    },
    convert: {
      title: "Turn Backyard Visitors Into Route Accounts",
      body: [
        "Plan pages explain every visit, a ZIP check confirms coverage and signup takes a few taps on a phone. Each signup and call is linked to the page that earned it, and the pages that actually fill routes become obvious.",
      ],
      points: [
        "ZIP coverage check",
        "Mobile plan signup",
        "Repair slot booking",
        "Lead source tags",
      ],
      cta: "Preview the Signup Flow",
      url: "yourpoolserviceco.com",
      headline: "Swim-Ready Water, Every Single Week",
      services: [
        "Weekly cleaning",
        "Filter clean",
        "Pump repair",
        "Opening visit",
      ],
    },
    ai: {
      title: "Get Cited When Owners Ask AI About Pool Care",
      body: [
        "Clear answers on visit frequency, chemicals and green-pool fixes give Google AI Overviews and ChatGPT something solid to cite. Our ",
        { href: "/services/ai-seo-services", label: "AI SEO service" },
        " watches which questions bring up your company.",
      ],
      points: [
        "Pool care Q&A blocks",
        "Service area markup",
        "Plan details in schema",
        "AI mention tracking",
      ],
      cta: "Audit My AI Presence",
      query: "best weekly pool service near me",
      intro: "For weekly pool service close by,",
      bullets: [
        "Clear plan inclusions",
        "Readings shared each visit",
        "Well-reviewed local techs",
      ],
    },
  },
  sitemap: {
    title: "Every Page a Pool Service Website Needs",
    lead: "Each page answers a question pool owners search, from weekly care to pump repair.",
    home: "Your Pool Service Co. homepage",
    groups: [
      {
        name: "Weekly Care",
        icon: "pool",
        pages: ["Weekly cleaning plans", "Chemical service", "Filter cleaning"],
      },
      {
        name: "Repairs",
        icon: "wrench",
        pages: [
          "Pump and motor repair",
          "Heater and leak repair",
          "Green pool cleanup",
        ],
      },
      {
        name: "Seasonal and Builds",
        icon: "sun",
        pages: ["Pool openings", "Pool closings", "Remodel and resurfacing"],
      },
      {
        name: "Route Areas",
        icon: "pin",
        pages: [
          "Primary city page",
          "Neighborhood route pages",
          "HOA and community pools",
        ],
      },
    ],
  },
  results: {
    title: "After Launch: Fuller Routes and Busier Repair Days",
    lead: "Signups and repair bookings build as area pages index and reviews accumulate.",
    cta: "Map My Launch Season",
    milestones: [
      {
        when: "Launch week",
        title: "Signups Traced to Their Source",
        text: "Plan signups, calls and repair bookings are tagged by page from launch.",
      },
      {
        when: "Month 1",
        title: "Area and Repair Pages Indexed",
        text: "Google discovers your route-area and repair pages and starts showing them nearby.",
      },
      {
        when: "Months 2–3",
        title: "Climbing in Route Neighborhoods",
        text: "Area pages and new reviews rise for pool cleaning searches near your routes.",
      },
      {
        when: "Opening season",
        title: "A Spring Calendar Filling Early",
        text: "Opening pages and weekly plan offers catch owners as covers come off.",
      },
    ],
    wins: [
      {
        icon: "repeat",
        title: "Accounts That Know What to Expect",
        text: "Clear plan pages set expectations from the very first visit.",
      },
      {
        icon: "pin",
        title: "Stops Closer Together",
        text: "Route-area pages draw owners on streets you already drive.",
      },
      {
        icon: "wrench",
        title: "Repair Work Between Visits",
        text: "Equipment pages turn weekly clients into repair bookings.",
      },
      {
        icon: "star",
        title: "A Name Owners Trust With Gate Codes",
        text: "Credentials, reviews and visit reports build trust fast.",
      },
    ],
    band: [
      {
        icon: "repeat",
        value: "Weekly Route Sign-Ups",
        label: "Service plans that fill your routes",
      },
      {
        icon: "calendar",
        value: "Opening Season Rush",
        label: "Openings and closings booked online",
      },
      {
        icon: "clipboard",
        value: "Clearer Repair Requests",
        label: "Pump and filter issues described before the visit",
      },
      {
        icon: "smile",
        value: "Fresh, Inviting Design",
        label: "Photos and colors that feel like summer",
      },
    ],
  },
  process: {
    title: "Pool Company Website Build Schedule: 2–3 Weeks",
    lead: "A clear schedule, a free mockup up front and launch before your busy season.",
    items: [
      {
        when: "Week 1",
        h: "Routes, Services and Mockup",
        p: "We note your plans, repair work and route areas, and a homepage mockup arrives for your feedback.",
      },
      {
        when: "Weeks 1–2",
        h: "Plan Pages and Pool Copy",
        p: "Weekly plan, repair and area pages get written, then designed around your own pool photos.",
      },
      {
        when: "Weeks 2–3",
        h: "Scheduler, Portal and SEO",
        p: "Scheduling, portal links, call tracking, schema and redirects get connected.",
      },
      {
        when: "Launch",
        h: "Live and Ready for Signups",
        p: "The site launches and we refine pages as signups and repair requests arrive.",
      },
    ],
  },
  compare: {
    title: "A Real Pool Service Website vs. a Social Page",
    lead: "Why owners who are ready to sign up need more than a feed of posts.",
    otherLabel: "Social media page only",
    rows: [
      {
        topic: "Plan details",
        other: "Plan details scattered across old posts.",
        zonic: "A plan page listing what every weekly visit covers.",
      },
      {
        topic: "Coverage check",
        other: "Owners must message to ask if you cover them.",
        zonic: "A ZIP check and area pages that answer instantly.",
      },
      {
        topic: "Signups",
        other: "Signups handled through back-and-forth messages.",
        zonic: "An online signup that feeds your route software.",
      },
      {
        topic: "Repairs",
        other: "Repair work rarely mentioned at all.",
        zonic: "Pages for pumps, filters, heaters and green pools.",
      },
      {
        topic: "Search visibility",
        other: "Posts that rarely show up in Google results.",
        zonic: "Pages built to rank for pool searches nearby.",
      },
      {
        topic: "Water care answers",
        other: "Advice buried in comments and replies.",
        zonic: "Guides on cloudy and green water that bring in searches.",
      },
    ],
  },
  reviews: {
    title: "Our Web Team's 5.0 Google Rating, Review by Review",
    lead: "Owners from many trades wrote these, and every one is public.",
  },
  pricing: {
    title: "Keep Your Pool Website Growing: Monthly Plans",
    compareTitle: "Plan Comparison for Pool Service Sites",
    addOnsTitle: "Extras for Pool Sites: Portals, Pages, Forms",
    customTitle: "Managing Routes in Several Markets?",
  },
  faq: {
    title: "Before You Build: Pool Service Website FAQs",
    lead: "Pricing approach, launch time, signups, software and what pool owners expect online.",
    items: [
      {
        q: "How much does a pool service website cost?",
        a: "Book a free call, tell us about your routes, repairs and signup needs, and we send back one fixed quote that covers the full build. When your pool company takes a qualifying monthly growth plan, our free website offer covers that build entirely.",
      },
      {
        q: "How quickly can you launch a website for my pool company?",
        a: "Within 2–3 weeks in most cases. A free homepage mockup comes first, then plan, repair and area pages are written and designed, and scheduling, portal links and redirects are connected and checked before launch. Starting early means it's ready for opening season.",
      },
      {
        q: "What should a pool cleaning company website include?",
        a: "A call-or-text button, a ZIP or area check, weekly plan pages that list what each visit includes, online signup, repair pages for pumps, filters and heaters, opening and closing pages, licensing and insurance details, owner reviews beside each signup button and quick-loading mobile pages.",
      },
      {
        q: "Can pool owners sign up for weekly service online?",
        a: "Yes. Owners pick a plan and visit frequency, confirm their address is on your routes and submit gate or access notes. The signup goes to your route or scheduling software, so the office only needs to confirm the start date.",
      },
      {
        q: "Will the website work with my route or billing software?",
        a: "In most cases, yes. We connect signup and booking forms to the route, scheduling and billing tools pool companies use, and add links for customers to pay a bill or view visit notes, so the site and your office stay in sync.",
      },
      {
        q: "Do you also design websites for pool builders?",
        a: "Yes. Pool builders and remodelers get project galleries, design consultation request forms and pages for new builds, resurfacing and equipment upgrades. Companies that both build and service pools can run both on one site with separate paths for each type of customer.",
      },
      {
        q: "Can I replace my current site without losing search traffic?",
        a: "Yes, with a careful move. Your current URLs are listed one by one, pages with traffic stay, changed addresses get redirects and Google gets a fresh sitemap. Rankings, calls and signups stay under watch for several weeks after launch, and any page that slips gets fixed fast.",
      },
      {
        q: "Should my plan pages say whether chemicals are included?",
        a: "Yes, because owners ask about chemicals early and often. Spell out which chemicals each visit covers, what counts as extra and how you handle green-pool recoveries. Clear plan pages cut down on billing questions and help owners compare you fairly.",
      },
    ],
  },
  consult: {
    title: "Try a Free Pool Service Homepage Draft First",
    lead: [
      "Send your service days, repair work and the areas your routes cover, and you'll get a homepage draft and page plan back, free of charge. To talk first, ",
      { href: "/contact-us", label: "ring or email the office" },
      ", read ",
      { href: "/about", label: "the Zonic Media story" },
      ", look over ",
      { href: "/services", label: "all services" },
      " or get help to ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "reinstate a suspended Google profile",
      },
      ". Our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "home services local SEO",
      },
      " page explains how maps and websites work together.",
    ],
    points: [
      "Free homepage draft",
      "Route-area page plan",
      "Signup flow advice",
      "Launch-ready in 2–3 weeks",
    ],
    form: {
      formType: "pool-service-website-design",
      badge: "Free pool homepage draft",
      title: "Get a Pool Company Homepage Draft",
      subtitle: "Free, and you're under no obligation.",
      submitText: "Send Pool Site Details",
      messageLabel: "Your pool company, routes and services",
      messagePlaceholder:
        "Company name, current site, weekly plans or repairs, and the areas your routes cover",
    },
  },
  banner: {
    title: "Give Pool Owners an Easy Yes to Weekly Service",
    lead: "Clear plans, a ZIP check and online signup that keeps your routes full.",
  },
};
