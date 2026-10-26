/* Pest Control Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: pest control web design services
     167 impressions (pos 32.8) · website design for pest control companies
     90 (33.3) · pest control web design 77 (36.6) · pest control services
     website design agency 69 (31.1) · website design for pest control 68
     (36.7) · pest control website design services 56 (28.7) ·
     exterminator website design 52 (28.4) · pest control website builder
     49 (39.4).
   - Semrush US: pest control web design 260 (KD 12) · pest control
     website design 260 (16) · exterminator website design 70 (12) · pest
     control websites 480 (85, high KD, secondary only).
   - Web research (scheduling-tool and agency guides on pest sites): one
     page per pest (signs, treatment, why you), a page per town served,
     online booking that asks which pest and takes photos, one-time
     treatment shown next to quarterly plans at booking, licence and
     insurance up front, family and pet safety answers (claims must be
     approved by the owner), click-to-call for phone searchers, seasonal
     pest content. Builder searches ("pest control website builder") are
     answered by the comparison section and an FAQ.
   Angle: the panicked first call (book the treatment) and the recurring
   plan (sell it on the site). Rules kept: build time 2–3 weeks, no
   prices or figures, no company named, verified numbers only, every live
   content link kept, /services/ai-seo-services added. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/pest-control-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by customer need",
    business: "Your Pest Control Co.",
    domain: "yourpestcontrolco.com",
    nav: ["Pests", "Plans", "Commercial", "Areas"],
    call: "Call today",
    primary: "Book an inspection",
    secondary: "Compare plans",
    proof: "Rated by local families",
    bookTitle: "Schedule service",
    confirm: "Confirm my visit",
    serviceSubs: ["Same-day visits", "Free inspection", "Pet-safe options"],
    toast: "Visit scheduled",
    toastNote: "Today 10 AM",
    phoneCta: "Book",
    modes: [
      {
        label: "Active pests",
        icon: "bug",
        badge: "Pest removal · Same-day",
        headline: "Seeing Pests Now? A Tech Can Come Today.",
        sub: "Termite, bed bug and rodent treatment, starting with a free inspection.",
        services: ["Termite treatment", "Bed bug removal", "Rodent control"],
        book: ["Termites", "Bed bugs", "Rodents"],
        img: {
          src: "/images/pest-control-web/first-impressions-img-1.webp",
          position: "55% 45%",
        },
      },
      {
        label: "Protection plans",
        icon: "shield",
        badge: "Quarterly service · Pet-safe",
        headline: "Year-Round Protection, One Visit a Season.",
        sub: "Quarterly plans for ants, spiders and mosquitoes, with free re-treats.",
        services: [
          "Quarterly plan",
          "Mosquito season",
          "Ant and spider barrier",
        ],
        book: ["Quarterly plan", "Mosquito plan", "Termite bond"],
        img: {
          src: "/images/pest-control-web/hero-image-primary-v2.webp",
          position: "70% 35%",
          phonePosition: "65% 35%",
          zoom: 1.5,
        },
      },
    ],
    legend: [
      "Call button up top",
      "Pest and plan landing pages",
      "Scheduling by pest type",
      "Thumb-reach call bar",
    ],
  },
  // Treatment orange, plan emerald, then navy and rose (tones.ts).
  tones: tonesFor("pest-control-website-design"),
  serviceName: "Pest Control Website Design",
  audience: "pest control companies and exterminators",
  meta: {
    title: "Pest Control Website Design | Pest Control Web Design",
    description:
      "Pest control web design services for exterminators: a page for every pest, online scheduling and quarterly plan signups, built to rank and book treatments.",
    keywords: [
      "pest control website design",
      "pest control web design",
      "pest control web design services",
      "pest control website design services",
      "website design for pest control companies",
      "website design for pest control",
      "exterminator website design",
      "exterminator web design",
      "pest control website builder",
      "pest control websites",
      "pest control company website",
      "pest control website design agency",
    ],
  },
  hero: {
    h1Lead: "Pest Control Website Design",
    h1Rest: "That Books Treatments and Sells Plans",
    icon: "pest",
    lead: [
      "Website design for pest control companies that calms a panicked search, books the first inspection online and offers a quarterly plan before the visitor leaves. The ",
      { href: "/services/web-design", label: "custom website" },
      " behind it launches in 2–3 weeks, with a page for every pest you treat.",
    ],
    cta: "Show Me My Pest Control Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/pest-control-web/every-service-line-image.webp",
        position: "center 40%",
        query: "pest control near me",
      },
      cardA: {
        icon: "bug",
        title: "Found by Pest and by Town",
        sub: "Termite, rodent and bed bug pages that rank",
      },
      photoB: {
        src: "/images/pest-control-web/hero-image-primary-v2.webp",
        position: "center 25%",
        query: "exterminator near me",
      },
      cardB: {
        icon: "repeat",
        title: "Quarterly Plans Sold Online",
        sub: "First-time callers become plan members",
      },
    },
  },
  showcase: {
    title: "Try a Pest Control Website Built for Urgent Calls and Plans",
    lead: "Flip between an active infestation and a protection plan to watch the landing page, scheduler and phone view change.",
  },
  services: {
    title: "Pest Control Web Design Services\nBuilt Around Pests and Plans",
    lead: "Our pest control website design services cover design, pest pages, scheduling and upkeep for exterminators, handled by one web team.",
    cta: "Scope My Pest Control Site",
    items: [
      {
        icon: "monitor",
        title: "New Exterminator Websites",
        desc: "A full pest control website planned around the pests you treat, the towns on your routes and how you want jobs booked.",
        points: [
          "Original design",
          "Pest and town pages",
          "Written for homeowners",
        ],
        links: [{ href: "/services/web-design", label: "Custom web design" }],
      },
      {
        icon: "repeat",
        title: "Site Moves Without Losing Leads",
        desc: "We move a dated pest site onto a faster build and keep the pest pages, URLs and redirects that already bring in calls.",
        points: [
          "Page-by-page URL map",
          "301 redirects set",
          "Ranking watch after launch",
        ],
        links: [],
      },
      {
        icon: "bug",
        title: "Pages for Each Pest and Season",
        desc: "Termite, bed bug, rodent and mosquito pages explaining signs, treatment and next steps, timed to each swarm season.",
        points: ["Pest ID content", "Seasonal pest pages", "Ad-ready landers"],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for pest control",
          },
        ],
      },
      {
        icon: "calendar",
        title: "Online Scheduling and Intake",
        desc: "A scheduler that asks which pest, where it was spotted and takes a photo, then drops the job into your routing software.",
        points: ["Pest picker form", "Photo uploads", "Routing software sync"],
        links: [],
      },
      {
        icon: "shield",
        title: "Protection Plan Signup Pages",
        desc: "Pages that set one-time treatment beside quarterly plans and let homeowners enroll online, so first calls turn into recurring service.",
        points: ["Plan comparison", "Online enrollment", "Termite bond pages"],
        links: [
          {
            href: "/services/industry/seo-services-for-pest-control",
            label: "SEO for pest control",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting and Monthly Updates",
        desc: "Secure hosting, backups, updates and seasonal content swaps, handled once the site is live.",
        points: ["Managed hosting", "Seasonal swaps", "Same-week edits"],
        links: [],
      },
    ],
  },
  features: {
    title: "The Pest Control Website Checklist We Build Against",
    lead: "Small details that turn a worried visitor into a scheduled treatment.",
    items: [
      {
        icon: "phone",
        title: "One Tap to a Live Person",
        text: "A call bar follows the visitor down every page on a phone.",
      },
      {
        icon: "calendar",
        title: "Scheduling Outside Office Hours",
        text: "Homeowners pick a pest and a time slot at midnight if they need to.",
      },
      {
        icon: "bug",
        title: "Pest ID Help With Photos",
        text: "Simple visual guides help visitors name the pest before they book.",
      },
      {
        icon: "heart",
        title: "Family and Pet Safety Answers",
        text: "Clear notes on products, prep and re-entry ease the biggest worry.",
      },
      {
        icon: "award",
        title: "Licensing Details Easy to Find",
        text: "State license and coverage details sit where buyers look for them.",
      },
      {
        icon: "star",
        title: "Neighbor Reviews in Plain Sight",
        text: "Fresh Google reviews from nearby homeowners appear on each pest page.",
      },
      {
        icon: "bolt",
        title: "Fast Pages on Weak Signal",
        text: "Lean code loads quickly, even from a basement or a crawl space.",
      },
      {
        icon: "search",
        title: "Pest and Area Schema",
        text: "Structured data tells Google which pests and towns each page covers.",
      },
    ],
  },
  growth: {
    title: "Three Ways a Pest Control Website Earns Its Keep",
    lead: "It ranks for pest searches, books the visit and gets named in AI answers.",
    rank: {
      title: "Rank the Moment a Pest Shows Up",
      body: [
        "Every pest and town page is written around the words homeowners type, from termite inspection to mice in the walls, and tracked as it climbs. Layer on ",
        {
          href: "/services/industry/seo-services-for-pest-control",
          label: "pest control SEO",
        },
        " plus our ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Business Profile tune-ups",
        },
        " and the map pack opens up too.",
      ],
      points: [
        "Pest-by-town page plan",
        "One keyword per page",
        "Rank reports",
        "LocalBusiness schema",
      ],
      cta: "Plan My Pest Pages",
      keywords: [
        ["termite inspection near me", 26, 4],
        ["exterminator + your city", 19, 2],
        ["bed bug treatment", 31, 6],
        ["mice removal near me", 23, 3],
      ],
    },
    convert: {
      title: "Convert Worried Visitors Into Scheduled Visits",
      body: [
        "Short forms, a pest picker and a sticky call bar turn a late-night search into a booked slot, and your report shows which pest page each call came from. Our ",
        {
          href: "/services/pest-control-marketing-agency",
          label: "pest control marketing",
        },
        " agency crew can then aim ad and search spend at whichever pages turn visits into treatments.",
      ],
      points: [
        "Tap-to-call bar",
        "Pest picker form",
        "Tracked phone numbers",
        "Light mobile pages",
      ],
      cta: "Show Me the Scheduler",
      url: "yourpestcontrolco.com",
      headline: "Bugs Inside? Book a Tech Today",
      services: ["Termites", "Rodents", "Bed bugs", "Quarterly plan"],
    },
    ai: {
      title: "Show Up in AI Answers About Pest Problems",
      body: [
        "Pest pages that answer the question first, plus tidy structured data, hand ChatGPT and Google AI Overviews a clean source to cite. Our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        " team keeps those signals current.",
      ],
      points: [
        "Question-led pest guides",
        "Organization schema",
        "Safety FAQs",
        "Citation monitoring",
      ],
      cta: "Test My AI Visibility",
      query: "who treats termites near me and is it safe for pets",
      intro: "For pet-friendly termite treatment close by,",
      bullets: [
        "Clear treatment steps",
        "Pet and child safety notes",
        "Licensed local techs",
      ],
    },
  },
  sitemap: {
    title: "How a Pest Control Website Is Organized to Rank",
    lead: "Each branch answers a different search, from a single pest to a single town.",
    home: "Your Pest Control Co. homepage",
    groups: [
      {
        name: "Pests We Treat",
        icon: "bug",
        pages: ["Termites", "Bed bugs", "Rodents"],
      },
      {
        name: "Protection Plans",
        icon: "shield",
        pages: ["Quarterly plan", "Mosquito season", "Termite bond"],
      },
      {
        name: "Commercial",
        icon: "building",
        pages: ["Restaurants", "Warehouses", "Property managers"],
      },
      {
        name: "Service Areas",
        icon: "pin",
        pages: ["Home city", "Surrounding towns", "Neighborhood pages"],
      },
    ],
  },
  results: {
    title: "After Launch: More Treatments, More Plan Members",
    lead: "Gains build as pest pages index, reviews land and the scheduler books around the clock.",
    cta: "See My Pest Site Timeline",
    milestones: [
      {
        when: "Launch week",
        title: "Every Call Gets a Source",
        text: "Tracked numbers and online scheduling go live, so you can see which page booked each job.",
      },
      {
        when: "Month 1",
        title: "Google Starts Listing Your Pest Pages",
        text: "Google crawls the new pest pages, and local pest searches start showing them.",
      },
      {
        when: "Months 2–3",
        title: "Rising for Pest-Plus-Town Searches",
        text: "Pages backed by fresh reviews climb for searches that pair a pest with your town.",
      },
      {
        when: "Swarm season",
        title: "Ready for the Spring Rush",
        text: "Seasonal pages and the scheduler are live before termites and ants start swarming.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Treatments Booked Overnight",
        text: "Homeowners schedule after hours, and the job is queued by morning.",
      },
      {
        icon: "repeat",
        title: "More Plans, Fewer One-Offs",
        text: "Plan pages nudge first-time customers toward quarterly service.",
      },
      {
        icon: "trend",
        title: "Pest Guides That Rank Season After Season",
        text: "Pest and town pages pull in visits long after launch day.",
      },
      {
        icon: "shield",
        title: "Trust Earned Before the Tech Arrives",
        text: "License details, safety answers and reviews settle nerves early.",
      },
    ],
    band: [
      {
        icon: "phone",
        value: "Urgent Pest Calls",
        label: "Termite and rodent pages that prompt a call",
      },
      {
        icon: "repeat",
        value: "Recurring Protection Plans",
        label: "Quarterly sign-ups that build steady revenue",
      },
      {
        icon: "chat",
        value: "Calm, Clear Answers",
        label: "Pest guides that ease worried homeowners",
      },
      {
        icon: "pin",
        value: "Fast Local Discovery",
        label: "Area pages that put you on the map",
      },
    ],
  },
  process: {
    title: "Launch a New Pest Control Website in 2–3 Weeks",
    lead: "One project lead, a free mockup and a firm go-live date.",
    items: [
      {
        when: "Week 1",
        h: "Pest and Route Mapping",
        p: "We list your pests, towns and plans, then mock up your pest control homepage.",
      },
      {
        when: "Weeks 1–2",
        h: "Layout and Pest Page Writing",
        p: "Pages take shape around your truck, crew and treatment photos, with copy written for homeowners.",
      },
      {
        when: "Weeks 2–3",
        h: "Scheduler and Search Setup",
        p: "We link scheduling and call tracking, then add schema, redirects and area pages.",
      },
      {
        when: "Launch",
        h: "Live, Tracked, Tuned by Season",
        p: "The site goes live and seasonal pages update ahead of each pest rush.",
      },
    ],
  },
  compare: {
    title: "Pest Control Website Builder or a Custom Build?",
    lead: "Where a do-it-yourself builder site falls short for exterminators.",
    otherLabel: "DIY builder site",
    rows: [
      {
        topic: "Pest pages",
        other: "Every pest crammed into one paragraph on a services page.",
        zonic: "A full page per pest, with signs, treatment steps and photos.",
      },
      {
        topic: "Urgent callers",
        other: "A contact form that waits until someone checks the inbox.",
        zonic: "A call bar and same-day scheduler for active infestations.",
      },
      {
        topic: "Plan signups",
        other: "Plans mentioned in passing, with no way to sign up.",
        zonic: "Plan comparison and online enrollment on dedicated pages.",
      },
      {
        topic: "Safety questions",
        other: "Nothing on products, prep or pets, so buyers hesitate.",
        zonic:
          "Plain answers on prep, re-entry and pet safety on every pest page.",
      },
      {
        topic: "Seasonal swings",
        other: "The same homepage in termite season and in mosquito season.",
        zonic: "Seasonal pages swapped in ahead of each swarm.",
      },
      {
        topic: "Site ownership and care",
        other: "Locked to the builder's plan, with updates left to you.",
        zonic: "Domain and site in your name, with hosting and edits handled.",
      },
    ],
  },
  reviews: {
    title: "Vet Our Web Team Through Its 5.0 Google Rating",
    lead: "Unfiltered feedback from the owners we have built for, straight from Google.",
  },
  pricing: {
    title: "Monthly Plans That Keep a Pest Control Site Growing",
    compareTitle: "Compare Plan Features for Pest Control Sites",
    addOnsTitle: "Add-Ons for Swarm Season and Beyond",
    customTitle: "Multiple Pest Control Branches to Cover?",
  },
  faq: {
    title: "What Exterminators Ask Before a Website Build",
    lead: "Cost, timing, scheduling tools and the pages a pest site needs.",
    items: [
      {
        q: "How much does a pest control website cost?",
        a: "Price depends on how many pests, plans and towns the site covers. After a free scoping call you get a single locked quote for the whole build. And if your pest company joins one of our qualifying monthly growth plans, the build itself is covered by our free website offer.",
      },
      {
        q: "What's the timeline for a pest control website build?",
        a: "At our pest control website design agency, most exterminator sites need 2–3 weeks, start to finish. The opening week brings a mockup of your homepage, the following week covers the pest pages and copy, and the last days go to testing scheduling, call tracking and redirects, so nothing breaks in your busy season.",
      },
      {
        q: "What pages should a pest control website have?",
        a: "Start with a homepage that puts your phone number first, then a page for each pest you treat, protection plan and termite bond pages, commercial service pages, a page per town on your routes, reviews, license and insurance details, and a short guide to treatment prep and pet safety.",
      },
      {
        q: "Can customers sign up for a quarterly pest plan online?",
        a: "Yes. We build plan pages that compare one-time treatment with recurring service, explain what each visit covers and let homeowners enroll online. Signups flow into your CRM or routing software, so the first visit gets scheduled without extra phone tag.",
      },
      {
        q: "Will the new site work with my pest control scheduling software?",
        a: "Yes. We connect forms and the online scheduler to the routing and billing tools pest companies use, so a booked treatment arrives with the pest type, address and photos attached. If a tool has no connection, we set up instant email or text alerts instead.",
      },
      {
        q: "Will redesigning my pest control site hurt my rankings?",
        a: "A careful migration keeps them intact. First we export your current URLs, flag the termite, rodent and town pages Google already likes, and point each retired address to its new home with a 301. After launch we compare calls and positions against the old site, so any dip gets fixed fast.",
      },
      {
        q: "Is a pest control website builder good enough?",
        a: "A builder can carry you through a first season, but one-page service lists rarely rank for each pest or town, and plan signups are hard to bolt on. The best pest control website design is a custom site that gives every pest its own page, faster load times and booking that fits your routes.",
      },
      {
        q: "Should a pest control website talk about pet and child safety?",
        a: "Yes, because safety for kids and pets tops the list of homeowner worries. We add plain-language notes on prep, re-entry times and product choices to each pest page, written from information you approve, so buyers feel safe booking without a long phone call.",
      },
      {
        q: "Do you write the copy for exterminator websites?",
        a: "Yes. Our writers draft pest, plan and town pages around the searches homeowners make, from termite inspections to mice in the attic. You review and approve every page, and license and safety details stay exactly as you supply them. Seasonal pages get refreshed later as each pest season comes around.",
      },
    ],
  },
  consult: {
    title: "Your Pest Control Homepage, Drafted Free",
    lead: [
      "List the pests you treat and the towns on your routes, and our designers will return a homepage concept plus a page-by-page plan, free of charge. Questions first? ",
      { href: "/contact-us", label: "Message the Zonic team" },
      ", read ",
      { href: "/about", label: "who runs Zonic" },
      ", browse ",
      { href: "/services", label: "the full menu of services" },
      " or get help reviving a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended profile on Google Maps",
      },
      ". Pest companies that want map visibility too can look at ",
      {
        href: "/services/local-seo-for-home-services",
        label: "home-service local SEO",
      },
      ".",
    ],
    points: [
      "Free pest site mockup",
      "Pest and town page list",
      "Scheduler setup tips",
      "Launch in 2–3 weeks",
    ],
    form: {
      formType: "pest-control-website-design",
      badge: "Free pest control site mockup",
      title: "Request a Pest Control Homepage Mockup",
      subtitle: "No cost and no obligation.",
      submitText: "Send My Pest Site Request",
      messageLabel: "Your company, pests and service area",
      messagePlaceholder:
        "Company name, current site (if you have one), pests you treat, plans you sell and the towns you cover",
    },
  },
  banner: {
    title: "Give Every Pest Search a Page Worth Booking From",
    lead: "Pest pages, online scheduling and plan signups on a site you own.",
  },
};
