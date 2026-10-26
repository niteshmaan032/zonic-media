/* Commercial Cleaning Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: cleaning company web design
     company 33 impressions (pos 39.6) · cleaning company web design agency
     26 (32.3) · cleaning company web design services 14 (38.0) · cleaning
     company website design agency 10 (33.8) · commercial cleaning web
     design company 5 (27.8) · commercial cleaning website 5 (37.4) · web
     design janitorial service 4 (25.5).
   - Semrush US: cleaning company website design 140 (KD 23) · commercial
     cleaning website design 20 · janitorial website design 20. The
     residential draft takes house cleaning / maid service / cleaning
     business website; this page owns contracts, janitorial and "cleaning
     company website design".
   - Web research (public janitorial RFPs, capability statement samples,
     facility-manager guides): buyers vet vendors before a walkthrough;
     RFPs ask for proof of bonding, general liability insurance, OSHA
     compliance, background checks and references, and score green
     cleaning; capability statements list services, certifications and
     past work by facility type (offices, medical, schools, warehouses,
     post-construction); managers value consistent crews, clear scope and
     quality reporting. Sites should have facility-type pages, city
     pages, a bid form and mobile-friendly proof.
   Angle: a B2B vendor check (facility managers and procurement), unlike
   the residential page's instant booking. Rules kept: build time 2–3
   weeks, no prices or figures, no company named, verified numbers only,
   every live content link kept, /services/ai-seo-services added. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/commercial-cleaning-website-design",
  stage: {
    widget: "quote",
    switchLabel: "Preview the example site by facility type",
    business: "Your Janitorial Co.",
    domain: "yourjanitorialco.com",
    nav: ["Facilities", "Services", "Compliance", "Markets"],
    call: "Call sales",
    primary: "Request a walkthrough",
    secondary: "Capability sheet",
    proof: "Rated by facility managers",
    bookTitle: "Request a bid",
    confirm: "Send bid request",
    serviceSubs: [
      "Nightly or weekly",
      "Bonded and insured",
      "Free walkthrough",
    ],
    toast: "Bid request sent",
    toastNote: "Walkthrough this week",
    phoneCta: "Bid",
    modes: [
      {
        label: "Office contracts",
        icon: "building",
        badge: "Janitorial · After hours",
        headline: "Offices Cleaned Overnight, Ready by Morning.",
        sub: "Nightly and weekly janitorial programs for offices, schools and retail floors.",
        services: ["Office janitorial", "Restroom care", "Floor care"],
        book: ["Office suite", "Multi-floor", "Retail space"],
        img: {
          src: "/images/free-website/free-cleaning-company/hero.webp",
          position: "50% 45%",
        },
      },
      {
        label: "Medical & industry",
        icon: "medical",
        badge: "Disinfection · To spec",
        headline: "Cleaning to Spec for Clinics and Plants.",
        sub: "Clinic disinfection, warehouse floors and post-construction cleanup.",
        services: [
          "Clinic disinfection",
          "Warehouse floors",
          "Post-construction",
        ],
        book: ["Medical office", "Warehouse", "Construction"],
        img: {
          src: "/images/home-improvement-web/commercial-cleaning-first-impressions-1.webp",
          position: "50% 40%",
        },
      },
    ],
    legend: [
      "One-tap sales line",
      "Facility-type landing pages",
      "Walkthrough and bid request",
      "Sticky mobile sales bar",
    ],
  },
  // Office navy, medical emerald, then sky and gold (tones.ts).
  tones: tonesFor("commercial-cleaning-website-design"),
  serviceName: "Commercial Cleaning Website Design",
  audience: "commercial cleaning companies and janitorial contractors",
  meta: {
    title: "Commercial Cleaning Website Design | Janitorial Web Design",
    description:
      "Cleaning company web design for janitorial and commercial cleaning firms: facility pages, bid requests and the proof buyers check before they sign.",
    keywords: [
      "commercial cleaning website design",
      "cleaning company website design",
      "cleaning company web design",
      "janitorial website design",
      "janitorial web design",
      "cleaning company web design services",
      "cleaning company web design agency",
      "cleaning company website design agency",
      "commercial cleaning web design company",
      "commercial cleaning website",
      "web design janitorial service",
      "office cleaning website design",
    ],
  },
  hero: {
    h1Lead: "Commercial Cleaning Website Design",
    h1Rest: "That Gets You Invited to Bid",
    icon: "building",
    lead: [
      "Cleaning company web design for janitorial firms that facility managers can vet in one visit: facility pages, proof of insurance and a walkthrough request that reaches sales fast. Your janitorial ",
      { href: "/services/web-design", label: "custom website" },
      " then launches in 2–3 weeks, facility pages for each market you bid in included.",
    ],
    cta: "Request My Free Janitorial Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/commercial-cleaning-hero-v2.webp",
        position: "center 30%",
        query: "commercial cleaning services near me",
      },
      cardA: {
        icon: "building",
        title: "On Facility Buyers' Shortlists",
        sub: "Office, medical and warehouse pages that rank",
      },
      photoB: {
        src: "/images/home-improvement-web/commercial-cleaning-first-impressions-1.webp",
        position: "center",
        query: "janitorial services near me",
      },
      cardB: {
        icon: "clipboard",
        title: "More Walkthroughs Requested",
        sub: "Bid forms that arrive ready to price",
      },
    },
  },
  showcase: {
    title: "Walk Through a Janitorial Website Built for Two Buyer Types",
    lead: "Switch between office contracts and medical or industrial work to see the pages, bid form and phone view adapt.",
  },
  services: {
    title:
      "Cleaning Company Web Design Services\nfor Janitorial and Contract Cleaners",
    lead: "Strategy, design, bid flows and hosting from one web team that knows B2B cleaning.",
    cta: "Scope My Janitorial Site",
    items: [
      {
        icon: "monitor",
        title: "Commercial Cleaning Sites From Scratch",
        desc: "A new site organized around the facilities you clean, the markets you cover and the way buyers ask you for a bid.",
        points: [
          "Original layout",
          "Facility and city pages",
          "B2B copywriting",
        ],
        links: [
          { href: "/services/web-design", label: "Custom website design" },
        ],
      },
      {
        icon: "repeat",
        title: "Janitorial Site Rebuilds",
        desc: "We modernize an outdated cleaning company website and carry over the URLs, redirects and pages already winning searches.",
        points: ["URL inventory", "Redirect plan", "Search traffic kept"],
        links: [],
      },
      {
        icon: "building",
        title: "Facility-Type Landing Pages",
        desc: "Dedicated pages for office buildings, medical suites, schools, warehouses and post-construction jobs, each written to that buyer's checklist.",
        points: [
          "Office and medical pages",
          "Industrial and warehouse pages",
          "Paid search landers",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for cleaning firms",
          },
        ],
      },
      {
        icon: "clipboard",
        title: "Walkthrough and Bid Request Flows",
        desc: "A short multi-step form that captures square footage, cleaning frequency and site count, then routes it to your sales inbox or CRM.",
        points: ["Multi-step bid form", "CRM routing", "Instant sales alerts"],
        links: [],
      },
      {
        icon: "award",
        title: "Compliance and Proof Pages",
        desc: "Insurance, bonding, safety training and green cleaning practices laid out plainly, with a capability sheet procurement teams can download.",
        points: [
          "Insurance and bonding",
          "Capability sheet",
          "Client references",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-commercial-cleaning",
            label: "Commercial cleaning SEO",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting, Security and Contract-Season Updates",
        desc: "Hosting, security patches and backups run in the background, and new facility pages get added as you win work in new markets.",
        points: [
          "Hosting and backups",
          "New market pages",
          "Quick content edits",
        ],
        links: [
          {
            href: "/cleaning-company-website-design-agency-us/offer",
            label: "Free cleaning website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "What Facility Managers Expect From a Janitorial Website",
    lead: "Every detail answers a question a buyer asks before inviting you to bid.",
    items: [
      {
        icon: "phone",
        title: "A Direct Line to Sales",
        text: "The sales number stays visible on desktop and mobile alike.",
      },
      {
        icon: "clipboard",
        title: "Bid Forms Built for B2B",
        text: "Questions on size, frequency and sites, not a blank message box.",
      },
      {
        icon: "building",
        title: "Pages by Facility Type",
        text: "Offices, clinics and warehouses each get copy that fits their rules.",
      },
      {
        icon: "award",
        title: "Insurance and Bonding Shown",
        text: "Coverage, bonding and staff training are easy to find and verify.",
      },
      {
        icon: "file",
        title: "Capability Sheet Download",
        text: "Procurement teams grab a one-page summary for their vendor file.",
      },
      {
        icon: "star",
        title: "References From Real Accounts",
        text: "Client reviews and short case notes show the work you already do.",
      },
      {
        icon: "leaf",
        title: "Green Cleaning Practices",
        text: "Low-impact products and methods explained for sustainability goals.",
      },
      {
        icon: "pin",
        title: "Every Market You Serve",
        text: "City pages show local crews and coverage for multi-site buyers.",
      },
    ],
  },
  growth: {
    title: "Where a Commercial Cleaning Website Pays Off",
    lead: "Rank for contract searches, turn visits into bid requests and get named by the AI tools buyers use.",
    rank: {
      title: "Win Page One for Contract Cleaning Searches",
      body: [
        "Facility and city pages target the exact phrases buyers use, from office cleaning services to medical janitorial, and each one is tracked as it climbs. Pair the site with ",
        {
          href: "/services/industry/local-seo-for-commercial-cleaning",
          label: "commercial cleaning SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google listing management",
        },
        " so buyers spot you on Maps before they ever click.",
      ],
      points: [
        "Facility keyword map",
        "City and market pages",
        "Monthly rank reports",
        "Service schema",
      ],
      cta: "Map My Contract Keywords",
      keywords: [
        ["commercial cleaning + your city", 24, 3],
        ["office cleaning services", 33, 5],
        ["janitorial services near me", 19, 2],
        ["medical office cleaning", 28, 4],
      ],
    },
    convert: {
      title: "Turn Vendor Research Into Walkthrough Requests",
      body: [
        "A clear bid path, proof beside every button and a visible sales line keep buyers from moving on. Each request is tagged to its source, so ",
        {
          href: "/services/cleaning-company-marketing-agency",
          label: "cleaning company marketing",
        },
        " can steer more facility buyers toward the pages that convert.",
      ],
      points: [
        "Multi-step bid form",
        "Proof beside each button",
        "Source tracking",
        "Fast on any device",
      ],
      cta: "Show Me the Bid Flow",
      url: "yourjanitorialco.com",
      headline: "Need a New Cleaning Vendor? Get a Bid",
      services: [
        "Office janitorial",
        "Medical suites",
        "Floor care",
        "Post-construction",
      ],
    },
    ai: {
      title: "Earn Mentions When Buyers Ask AI for a Cleaning Vendor",
      body: [
        "Clear service pages, facility FAQs and schema markup mean ChatGPT and Google AI Overviews have accurate facts to repeat when a buyer asks for vendor options. Our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        " work keeps those signals fresh.",
      ],
      points: [
        "Facility-specific FAQs",
        "Organization schema",
        "Consistent firm details",
        "Answer-engine spot checks",
      ],
      cta: "Am I in AI Answers?",
      query: "best janitorial company for a medical office near me",
      intro: "For medical office janitorial work nearby,",
      bullets: [
        "Documented cleaning protocols",
        "Insurance and bonding listed",
        "Trained night crews",
      ],
    },
  },
  sitemap: {
    title: "The Page Structure Behind a Contract-Winning Cleaning Site",
    lead: "Buyers land on the page that matches their building, then find proof and a bid form one click away.",
    home: "Your Janitorial Co. homepage",
    groups: [
      {
        name: "Facilities",
        icon: "building",
        pages: ["Office buildings", "Medical suites", "Warehouses"],
      },
      {
        name: "Services",
        icon: "clean",
        pages: ["Nightly janitorial", "Floor care", "Post-construction"],
      },
      {
        name: "Proof",
        icon: "award",
        pages: [
          "Insurance and bonding",
          "Capability sheet",
          "Client references",
        ],
      },
      {
        name: "Markets",
        icon: "pin",
        pages: ["Metro hub page", "City pages", "Multi-site accounts"],
      },
    ],
  },
  results: {
    title: "What Facility Managers Notice After Your Relaunch",
    lead: "Momentum builds as facility pages index and detailed bid requests start arriving.",
    cta: "Plan My Bid Pipeline Site",
    milestones: [
      {
        when: "Launch week",
        title: "Bid Requests Start Logging",
        text: "The new form and a tracked sales line go live, so every inquiry has a source.",
      },
      {
        when: "Month 1",
        title: "Facility Pages Get Crawled",
        text: "Office, medical and warehouse pages get indexed and begin appearing for facility searches near you.",
      },
      {
        when: "Months 2–3",
        title: "Showing Up in More Markets",
        text: "City pages and new reviews start lifting you for contract searches beyond your home base.",
      },
      {
        when: "Budget season",
        title: "Ready When Contracts Rebid",
        text: "Proof pages and the capability sheet are in place when budgets reset and buyers shop vendors.",
      },
    ],
    wins: [
      {
        icon: "clipboard",
        title: "Better-Qualified Bid Requests",
        text: "Square footage, frequency and site count arrive with the inquiry.",
      },
      {
        icon: "award",
        title: "Faster Vendor Approval",
        text: "Insurance and bonding details answer procurement questions upfront.",
      },
      {
        icon: "building",
        title: "Work Across New Facility Types",
        text: "Dedicated pages open doors to clinics, schools and warehouses.",
      },
      {
        icon: "trend",
        title: "Search Traffic That Keeps Coming",
        text: "Facility and city pages keep pulling in buyers month after month.",
      },
    ],
    band: [
      {
        icon: "calendar",
        value: "Walkthrough Requests",
        label: "Facility managers book site visits online",
      },
      {
        icon: "shield",
        value: "Contract-Ready Trust",
        label: "Insurance, bonding and processes on display",
      },
      {
        icon: "briefcase",
        value: "Industry Pages",
        label: "Offices, medical and industrial cleaning covered",
      },
      {
        icon: "award",
        value: "Corporate Polish",
        label: "A site that looks ready for a corporate buyer",
      },
    ],
  },
  process: {
    title: "A 2–3 Week Build Plan for Commercial Cleaners",
    lead: "Scoped on the first call, mocked up in week one, launched on a fixed date.",
    items: [
      {
        when: "Week 1",
        h: "Buyer and Market Research",
        p: "We map your facility types, markets and bid process, then mock up a janitorial homepage.",
      },
      {
        when: "Weeks 1–2",
        h: "B2B Design and Copy",
        p: "Pages are written for facility managers and procurement, using your crew photos.",
      },
      {
        when: "Weeks 2–3",
        h: "Bid Flow and SEO Build",
        p: "We wire the bid form to your CRM, add schema and set every redirect.",
      },
      {
        when: "Launch",
        h: "Go Live and Add Markets",
        p: "The site launches, and new facility or city pages follow as you grow.",
      },
    ],
  },
  compare: {
    title: "Why Janitorial Buyers Skip Generic Cleaning Sites",
    lead: "What a one-size template misses for contract cleaning, and what we build instead.",
    otherLabel: "Generic template site",
    rows: [
      {
        topic: "Buyer focus",
        other: "Written for homeowners, with the same copy house cleaners use.",
        zonic:
          "Written for facility managers, property managers and procurement.",
      },
      {
        topic: "Facility coverage",
        other: "One services page listing everything you clean.",
        zonic: "A page for each facility type with its own standards.",
      },
      {
        topic: "Requesting a bid",
        other: "A bare contact form wanting nothing but a name and email.",
        zonic: "A bid form that gathers size, frequency and number of sites.",
      },
      {
        topic: "Proof and compliance",
        other: "Insurance and bonding never mentioned.",
        zonic: "Coverage, training and a capability sheet one click away.",
      },
      {
        topic: "Multi-market reach",
        other: "A list of cities squeezed into the footer.",
        zonic: "City pages with local crew and coverage details.",
      },
      {
        topic: "Site and domain ownership",
        other: "A theme license that limits changes and moves.",
        zonic: "Your domain and your site, hosted and maintained by us.",
      },
    ],
  },
  reviews: {
    title: "A 5.0 Google Rating Any Facility Buyer Can Verify",
    lead: "Owners who hired us left these reviews on Google, word for word.",
  },
  pricing: {
    title: "Growth Plans for Commercial Cleaning Websites",
    compareTitle: "How the Plans Differ for Janitorial Firms",
    addOnsTitle: "Extra Pages for New Facilities and Markets",
    customTitle: "Contracts Spread Across Several Regions?",
  },
  faq: {
    title: "Questions Janitorial Firms Ask About Website Design",
    lead: "Pricing, timing, bid forms and what buyers expect to find.",
    items: [
      {
        q: "How much does a commercial cleaning website cost?",
        a: "Scope drives the number: facility types, markets and how your bid process works. We talk it through on a free call, then send a firm, fixed quote that won't creep before launch. There's also a free website offer for janitorial firms that sign onto a qualifying monthly growth plan: the build is then on us.",
      },
      {
        q: "How long does a janitorial website take to build?",
        a: "Expect 2–3 weeks from kickoff to launch for most janitorial sites. The homepage concept lands in week one, facility pages and copy follow, and the bid form, tracking and redirects get tested on staging before anything goes live. City pages can follow later.",
      },
      {
        q: "What should a commercial cleaning website include?",
        a: "A clear sales line, a bid or walkthrough request form, pages for each facility type you clean, insurance, bonding and training details, a capability sheet, client references, a page for each market you serve and fast mobile pages with schema markup.",
      },
      {
        q: "Does a janitorial website need different pages than a house cleaning site?",
        a: "Commercial buyers compare vendors on proof, scope and reliability rather than an instant price. A janitorial site leads with facility pages, compliance details and a bid form, while a house cleaning site leans on online booking. We build each one for its buyer.",
      },
      {
        q: "Can a website help my cleaning company win more contracts?",
        a: "Yes, by putting you in front of buyers earlier and answering their vetting questions before the first call. Facility pages rank for contract searches, proof pages speed up approval and the bid form collects what you need to price the job.",
      },
      {
        q: "Can you connect the bid form to my CRM?",
        a: "Yes. Walkthrough and bid requests flow into your CRM or sales inbox with square footage, frequency and site details attached. We also set up email or text alerts, so a buyer hears back while they're still comparing vendors. Each request also notes which page and search sent it.",
      },
      {
        q: "Will a new site cost my cleaning company its rankings?",
        a: "Not with a migration plan. Our team crawls the old site, keeps every facility or city page that draws searches, maps the rest to new URLs with permanent redirects and submits a fresh sitemap to Google. Rankings and bid inquiries are checked weekly after launch, so contract leads keep arriving during the switch.",
      },
      {
        q: "Do you build pages for each city we clean in?",
        a: "Yes. Each market gets its own page with local crew details, the facilities you serve there and client proof from that area. That helps you rank in each city without copying the same text and changing the town name. Multi-site buyers can also see every market you cover in one place.",
      },
      {
        q: "Do you write the copy for our cleaning company website?",
        a: "Yes. Our writers create facility, service and city pages in the language facility managers and procurement teams use. You approve every page, and certifications, insurance and safety details appear exactly as you provide them. Capability sheets and proof pages follow what procurement teams look for in a vendor file.",
      },
    ],
  },
  consult: {
    title: "Test-Drive a Janitorial Homepage at No Cost",
    lead: [
      "Describe the facilities you clean and the markets you cover, and we'll mock up a janitorial homepage with a facility page map, no charge. Want a conversation before that? ",
      { href: "/contact-us", label: "Talk to our web team" },
      ", read ",
      { href: "/about", label: "the Zonic story" },
      ", look over ",
      { href: "/services", label: "all of our services" },
      " or bring back a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google listing",
      },
      ". Commercial cleaners can also see how ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home service firms",
      },
      " supports a new site.",
    ],
    points: [
      "Free janitorial mockup",
      "Facility page map",
      "Bid form advice",
      "Live in 2–3 weeks",
    ],
    form: {
      formType: "commercial-cleaning-website-design",
      badge: "Free janitorial site mockup",
      title: "Request Your Commercial Cleaning Mockup",
      subtitle: "Free, and no strings attached.",
      submitText: "Send My Cleaning Site Request",
      messageLabel: "Your firm, facilities and markets",
      messagePlaceholder:
        "Company name, current site (if any), facility types you clean, cities you serve and how buyers request bids",
    },
  },
  banner: {
    title: "Look Like the Safe Choice on Every Vendor List",
    lead: "Facility pages, proof buyers trust and a bid form that reaches sales fast.",
  },
};
