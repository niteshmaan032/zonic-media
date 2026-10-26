/* Local SEO for Commercial Cleaning — redesign draft copy (26 Oct 2026).
   Local SEO dropdown family; brief: docs/local-seo-redesign-brief.md.
   Fresh copy only: no wording from the live page, the electricians
   reference, /services/seo-services-2 or /services/cleaning-company-marketing-agency-2.
   Owns the B2B side of cleaning; maid / house cleaning terms belong to
   /services/industry/local-seo-services-for-residential-cleaning.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: seo for cleaning companies 453
     impressions (pos 39.2) · local seo for cleaning services 336 (33.5) ·
     seo for janitorial services 292 (41.4) · janitorial seo 264 (14.7,
     best position) · seo cleaning services 236 · local seo for cleaning
     company 210 · cleaning company local seo 178 · local seo for cleaning
     companies 151.
   - Semrush US: cleaning company seo 590 (KD 16) · seo for cleaning
     companies 390 (18) · janitorial seo 70 (10) · commercial cleaning
     seo 10.
   - Title keeps "Commercial Cleaning SEO" (live title) and the janitorial
     wording behind the pos-14.7 query, and adds "SEO for Cleaning
     Companies" (top GSC query); H1 leads with the head term "Cleaning
     Company SEO" (590).
   - Web research (WebSearch ×4, WebFetch ×2 of top results): buyers are
     facility, property and practice managers on a weeks-long, recurring-
     contract cycle; "Janitorial service" is the reliable US category
     (no "commercial cleaning service" option in the public list). Top
     pages skip procurement proof (insurance, bonding, QC), RFP support,
     multi-site coverage and AI vendor shortlists, so those became a proof
     service card, the RFP and multi-city FAQs and the AI row. Searches
     split into office/janitorial, facility-type and project cleaning. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-commercial-cleaning",
  audience: "Commercial cleaning and janitorial companies",
  serviceName: "Local SEO for Commercial Cleaning",
  meta: {
    title: "Janitorial & Commercial Cleaning SEO for Cleaning Companies",
    description:
      "Cleaning company SEO for janitorial firms: Google Maps rankings, facility-type pages, insurance proof and B2B reviews that bring walkthrough and bid requests.",
    keywords: [
      "cleaning company seo",
      "seo for cleaning companies",
      "janitorial seo",
      "commercial cleaning seo",
      "seo for janitorial services",
      "local seo for cleaning services",
      "local seo for cleaning companies",
      "cleaning company local seo",
      "office cleaning seo",
      "seo for commercial cleaning companies",
    ],
  },
  hero: {
    h1Lead: "Cleaning Company SEO",
    h1Rest: "That Wins Office and Janitorial Contracts",
    icon: "building",
    lead: [
      "Facility managers compare cleaning vendors on Google long before they ask for a walkthrough. Our janitorial SEO puts your firm in the Map Pack, ranks your office and medical cleaning pages, and makes your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile",
      },
      " read like a contractor worth shortlisting.",
    ],
    cta: "Audit My Janitorial Rankings",
    ui: {
      kind: "growth",
      maps: "pack",
      ai: "chat",
      growth: "pipeline",
      business: "Your Cleaning Co.",
      category: "Janitorial service",
      query: "commercial cleaning services near me",
      aiPrompt: "Which janitorial company handles office buildings nearby?",
      aiReasons: ["Multi-site office cleaning", "Insured, vetted crews"],
      growthLabel: "Contract pipeline",
      leads: [
        ["Office contract won", "Facility page"],
        ["Walkthrough scheduled", "ChatGPT referral"],
        ["Bid request", "Google Maps"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Rank #1",
          title: "Top Janitorial Listing for Facility Buyers",
          text: "Your profile leads the pack when managers search for office cleaning.",
        },
        {
          label: "AI answers",
          badge: "Shortlisted",
          title: "On the AI Vendor Shortlist",
          text: "AI assistants list your firm when buyers ask for janitorial vendors.",
        },
        {
          label: "Contracts",
          badge: "Won",
          title: "Bids Turning Into Cleaning Contracts",
          text: "Track each lead from bid request to walkthrough to signed contract.",
        },
      ],
    },
  },
  searches: {
    title: "What Facility Managers Search for in a Cleaning Vendor",
    lead: "Office managers, property managers and practice owners type specific, facility-led phrases. We build pages for each one.",
    groups: [
      {
        icon: "building",
        label: "Office and janitorial searches",
        terms: [
          "office cleaning services near me",
          "janitorial services near me",
          "commercial cleaning company near me",
          "nightly office cleaning",
          "day porter services",
          "building maintenance cleaning",
        ],
      },
      {
        icon: "medical",
        label: "Facility-specific cleaning searches",
        terms: [
          "medical office cleaning",
          "dental office cleaning service",
          "school custodial services",
          "warehouse cleaning company",
          "gym cleaning service",
          "church cleaning services",
        ],
      },
      {
        icon: "clipboard",
        label: "Commercial project cleaning searches",
        terms: [
          "post construction cleaning company",
          "floor stripping and waxing",
          "commercial carpet cleaning",
          "office disinfection service",
          "commercial window cleaning",
          "janitorial contract bid",
        ],
      },
    ],
  },
  services: {
    title: "Janitorial SEO Built for\nRecurring Cleaning Contracts",
    lead: "Six services aimed at the contracts you want: nightly offices, clinics, schools and multi-site portfolios.",
    cta: "Review My Commercial Cleaning Site",
    items: [
      {
        icon: "pin",
        title: "Janitorial Business Profile Setup",
        desc: "The right janitorial category, service areas drawn around business districts, crew and equipment photos, and posts written for facility buyers, not homeowners.",
        points: [
          "Janitorial category set",
          "Business-district areas",
          "Crew and equipment photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile tuning",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Profile verification",
          },
        ],
      },
      {
        icon: "building",
        title: "Commercial Cleaning Pages by Facility Type",
        desc: "Dedicated pages for offices, medical suites, schools, warehouses and gyms, each covering cleaning frequency, scope, after-hours access and the checklist your crews follow.",
        points: [
          "Office and medical pages",
          "Scope and frequency",
          "After-hours access notes",
        ],
        links: [
          {
            href: "/services/commercial-cleaning-website-design",
            label: "Commercial cleaning websites",
          },
        ],
      },
      {
        icon: "shield",
        title: "Proof Pages for Janitorial Buyers",
        desc: "Insurance, bonding, background checks, training and quality-control steps laid out clearly, so procurement teams can prequalify you before a request for proposal.",
        points: [
          "Insurance and bonding",
          "Quality-control process",
          "Multi-site capability",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "B2B Reviews and Citations for Janitorial Firms",
        desc: "Review requests aimed at office and property managers, consistent listings on business directories, and links from chambers of commerce and facility trade groups.",
        points: [
          "Manager review requests",
          "Business directory cleanup",
          "Chamber and trade links",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile recovery",
          },
        ],
      },
      {
        icon: "tool",
        title: "Technical SEO for Commercial Cleaning Sites",
        desc: "Fast pages, Service schema, tidy indexing and a short walkthrough form that works on a facility manager's phone between site visits.",
        points: [
          "Page speed fixes",
          "Service schema",
          "Walkthrough request form",
        ],
        links: [
          {
            href: "/services/web-design",
            label: "Websites built for B2B leads",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for Commercial Cleaning Firms",
        desc: "Clear scope, frequency and compliance answers that ChatGPT, Gemini and Google AI Overviews can quote when a buyer asks for a vendor shortlist.",
        points: [
          "Scope answer blocks",
          "Consistent company facts",
          "Shortlist prompt checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for vendors" },
        ],
      },
    ],
  },
  growth: {
    title: "How SEO for Cleaning Companies Fills Your Bid Pipeline",
    lead: "More Map Pack visibility near offices, more AI shortlists and more walkthrough requests you can trace.",
    rank: {
      title: "Climb for Office and Janitorial Searches",
      body: [
        "Searches are sorted by building type and business district, and every combination with contract value gets its own page. Medical office cleaning, day porter work and floor care are tracked weekly, so you can see which bids are getting closer.",
      ],
      points: [
        "Facility-type keyword map",
        "District-level tracking",
        "Competitor page gaps",
        "Contract-value priorities",
      ],
      cta: "Find My Janitorial Keyword Gaps",
      keywords: [
        ["office cleaning services near me", 24, 3],
        ["janitorial services + your city", 31, 2],
        ["medical office cleaning", 38, 5],
        ["post construction cleaning company", 27, 4],
      ],
    },
    ai: {
      title: "Make AI Shortlist Your Commercial Cleaning Firm",
      body: [
        "Office managers now ask AI assistants for vendor shortlists. Those answers favor cleaners with published scope, frequency and insurance details plus steady reviews. Our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        " adds that structure and tests the prompts buyers actually use.",
      ],
      points: [
        "Published scope details",
        "Compliance facts on site",
        "Matching directory listings",
        "Buyer prompt testing",
      ],
      cta: "Test My AI Vendor Shortlists",
      query: "janitorial company for a medical office",
      intro: "For medical office cleaning near you,",
      bullets: [
        "Published cleaning scope",
        "Insurance and bonding listed",
        "Reviews from practice managers",
      ],
    },
    leads: {
      title: "Tie Every Janitorial Bid Request to Its Source",
      body: [
        "Contract leads arrive slowly, so each one matters. Walkthrough requests, RFP forms and calls are tagged by page and search, and ",
        {
          href: "/services/google-ads",
          label: "Google Ads for cleaning companies",
        },
        " can fill gaps while organic rankings for new districts mature.",
      ],
      points: [
        "Walkthrough requests tagged",
        "RFP form tracking",
        "Calls by facility page",
        "Monthly pipeline report",
      ],
      cta: "See Where My Contract Leads Start",
      items: [
        ["Office walkthrough request", "Google Maps", "Mon 9:10 AM"],
        ["Medical cleaning RFP form", "Medical office page", "Tue 11:30 AM"],
        ["Day porter inquiry", "AI Overview link", "Wed 8:45 AM"],
        ["Floor care quote call", "District page", "Thu 2:15 PM"],
      ],
    },
  },
  results: {
    title: "What Janitorial Firms Gain After Hiring Zonic",
    lead: "Progress tends to arrive in order: buyer-ready profile, facility pages, B2B reviews, then more bid requests.",
    cta: "Map My Janitorial Growth Plan",
    milestones: [
      {
        when: "First two weeks",
        title: "Janitorial Profile Made Buyer-Ready",
        text: "We set the janitorial category, business-district service areas and crew photos so facility buyers see a credible vendor.",
      },
      {
        when: "Month 1",
        title: "Facility and Proof Pages Publish",
        text: "Office, medical and school cleaning pages go live alongside an insurance and quality-control page procurement teams can check.",
      },
      {
        when: "Months 2–4",
        title: "Climbing for Office Cleaning Searches",
        text: "Manager reviews and chamber links accumulate, moving your listing toward the top near office parks and medical districts.",
      },
      {
        when: "Month 4 onward",
        title: "A Steadier Cleaning Bid Pipeline",
        text: "More walkthrough requests and RFP invitations start arriving from search, each tagged so you can see which pages earn them.",
      },
    ],
    wins: [
      {
        icon: "clipboard",
        title: "More Walkthrough Requests From Facility Managers",
        text: "Office and property managers find your facility pages and ask for a site walkthrough instead of a generic quote.",
      },
      {
        icon: "shield",
        title: "Easier Prequalification for Janitorial Bids",
        text: "Insurance, bonding and quality-control details are already published, so procurement teams can clear your firm sooner.",
      },
      {
        icon: "sparkle",
        title: "On AI Shortlists for Office Cleaning",
        text: "Clear scope and frequency answers make it easier for ChatGPT and Google AI Overviews to put your firm on vendor lists.",
      },
      {
        icon: "building",
        title: "Contract Work Beyond Your First Cleaning District",
        text: "District and facility pages open up new office parks and medical corridors without relying on referrals alone.",
      },
    ],
  },
  compare: {
    title: "Zonic Compared With Typical SEO for Janitorial Firms",
    lead: "What commercial cleaning SEO looks like here versus what B2B cleaners often receive.",
    rows: [
      {
        topic: "Janitorial buyer focus",
        other:
          "Homeowner keywords and copy, so facility managers rarely see a fit.",
        zonic:
          "Pages, posts and reviews written for office, property and practice managers comparing cleaning vendors.",
      },
      {
        topic: "Facility-type cleaning pages",
        other:
          "One commercial cleaning page tries to cover offices, clinics and warehouses at once.",
        zonic:
          "A page per facility type covering scope, frequency, after-hours access and your crew checklist.",
      },
      {
        topic: "Procurement proof for cleaners",
        other:
          "Insurance, bonding and quality-control details are often left for the sales call.",
        zonic:
          "A published proof page with insurance, bonding, background checks and quality-control steps buyers can verify.",
      },
      {
        topic: "Multi-site janitorial coverage",
        other:
          "A single city target, with little help for clients spread across districts.",
        zonic:
          "District and city pages, per-branch service areas and a page explaining how you staff several sites.",
      },
      {
        topic: "Reviews from facility managers",
        other:
          "Review requests aimed at anyone, often producing short, vague feedback.",
        zonic:
          "Requests sent to office and property managers, so reviews mention the building type and service.",
      },
      {
        topic: "Bid and walkthrough tracking",
        other:
          "Traffic reports that often can't separate a walkthrough request from a job applicant.",
        zonic:
          "Walkthrough requests, RFP forms and calls tagged by page and search, on month-to-month terms.",
      },
    ],
  },
  steps: {
    title: "The Commercial Cleaning SEO Process, Start to Finish",
    lead: "Profile and proof fixes first, then facility pages, B2B reviews and links that compound.",
    items: [
      {
        h: "Audit Janitorial Rivals by Building Type",
        p: "Your profile and site are compared with the cleaning firms beating you near office parks and medical districts, and facility types get ranked by contract value.",
      },
      {
        h: "Fix the Profile, Publish Commercial Cleaning Proof",
        p: "Category, service-area and photo corrections come first, followed by facility pages, the insurance and compliance page, and manager review requests.",
      },
      {
        h: "Report Janitorial Leads, Then Add Districts",
        p: "Each month you get rankings, walkthrough requests and bids by facility type; new districts open up once the first ones hold.",
      },
    ],
    audit: [
      ["Janitorial category", "behind"],
      ["Facility pages", "gap"],
      ["Proof page", "open"],
      ["B2B reviews", "behind"],
    ],
    plan: [
      "Office page",
      "Medical page",
      "Proof page",
      "District pages",
      "Chamber links",
    ],
    launch: [
      "Profile corrected",
      "Facility pages live",
      "Manager reviews",
      "Bids tracked",
    ],
  },
  explore: {
    title: "Other Ways We Grow Commercial Cleaning Firms",
    lead: "Search works best with a site built to convert buyers and ads for slow bidding months.",
    items: [
      {
        name: "Cleaning Company Marketing",
        sub: "One plan for every lead source",
        href: "/services/cleaning-company-marketing-agency",
        icon: "clean",
      },
      {
        name: "Commercial Cleaning Websites",
        sub: "Sites that win walkthrough requests",
        href: "/services/commercial-cleaning-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads for Cleaners",
        sub: "Bid-season lead flow on demand",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Our local playbook across trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Run both janitorial and residential crews? We can plan both under one account.",
  },
  reviews: {
    title: "A 5.0 Google Rating You Can Check Before Any Bid",
    lead: "Read unedited reviews from the business owners we work with.",
  },
  pricing: {
    title: "Commercial Cleaning SEO Plans, Month to Month",
    compareTitle: "Compare Plans for Janitorial Firms of Any Size",
    addOnsTitle: "Add-Ons for Commercial Cleaning Bid Season",
    customTitle: "Cleaning Contracts Across Several Metros?",
  },
  faq: {
    title: "Janitorial and Commercial Cleaning SEO Questions",
    lead: "Costs, timing, Maps categories and how SEO feeds a commercial bid pipeline.",
    items: [
      {
        q: "What is janitorial SEO?",
        a: "It is local SEO aimed at business buyers instead of homeowners. The work covers your Business Profile, facility-type pages, proof of insurance and training, B2B reviews, directory listings and links, so office, medical and property managers find your firm and shortlist it.",
      },
      {
        q: "How much does SEO for cleaning companies cost?",
        a: "We offer three plans at $297, $750 and $1,500 per month, with no annual term. A janitorial firm with one office typically begins with the first; operators bidding across several cities, or who want Google Ads managed too, often move to the second or third. Your audit recommends a fit.",
      },
      {
        q: "How long does cleaning company SEO take to produce leads?",
        a: "Profile and page fixes can lift Maps visibility within weeks, but contract leads take longer because buyers research for days before a walkthrough. Most firms see steady requests after several months. Reports track rankings, requests and bids every month.",
      },
      {
        q: "What do facility managers search for when hiring a commercial cleaner?",
        a: "Mostly the service plus the building type or area: “office cleaning services near me”, “medical office cleaning”, “janitorial services” with a city, “day porter services” and “post construction cleaning company”. We build a page for each search tied to contracts you want.",
      },
      {
        q: "Which Google Business Profile category fits a janitorial company?",
        a: "Janitorial Service is usually the right primary category for firms selling recurring facility cleaning. Add secondary categories only for work you really do, such as Carpet Cleaning or Window Cleaning, and check the live category list, since Google adds and removes options.",
      },
      {
        q: "Do commercial cleaning companies need a page for each facility type?",
        a: "Yes, for the facilities you want more of. A medical office cleaning page can cover disinfection, privacy and after-hours access in a way a general page cannot, and it can rank for that search on its own.",
      },
      {
        q: "Can janitorial SEO help us win RFPs and bids?",
        a: "Indirectly, yes. Procurement teams often check your site before they invite a bid, and a clear proof page with insurance, bonding, staffing and quality-control steps makes the shortlist easier. Ranking for facility searches also brings private bid requests that never reach public portals.",
      },
      {
        q: "Does commercial cleaning SEO work across several cities?",
        a: "Yes. We set service areas per branch, build district or city pages with local facility examples, and track rankings city by city. Multi-site clients also get a page explaining how you staff and inspect several locations at once.",
      },
      {
        q: "Will AI search change how offices choose a cleaning company?",
        a: "It already shapes shortlists. Office and property managers ask ChatGPT, Gemini and Google AI Overviews for vendor options, and those tools quote firms with published scope, frequency, compliance details and reviews. Strong local SEO for cleaning companies feeds those answers directly.",
      },
      {
        q: "Are commercial cleaning SEO plans month to month?",
        a: "Yes. There is no long contract, your Business Profile, site and data stay in your name, and each monthly report spells out what changed, what ranked and which leads came in. Most clients stay because the bid pipeline grows, not because they are locked in.",
      },
    ],
  },
  audit: {
    title: "Check How Facility Buyers See Your Cleaning Firm",
    lead: [
      "Send your site and the facility types you want to win. We compare your Maps position, facility pages and proof of insurance against the firms ahead of you, and you get a written plan back. Learn ",
      { href: "/about", label: "who we are" },
      " or see ",
      { href: "/services", label: "all of our services" },
      ".",
    ],
    points: [
      "Maps rank near office districts",
      "Facility keyword gaps",
      "Proof page review",
      "Bid-ready first-month plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free janitorial SEO audit",
      title: "Request a Commercial Cleaning SEO Audit",
      subtitle: "No contract and no sales call unless you ask.",
      submitText: "Send My Janitorial Audit",
      messageLabel: "Your website and the facilities you clean",
      messagePlaceholder:
        "yourwebsite.com, facility types (offices, clinics, schools) and the cities you bid in",
    },
  },
  banner: {
    title: "Be the Janitorial Firm on Every Buyer's Shortlist",
    lead: "More Maps visibility near offices, AI mentions and walkthrough requests, all reported monthly.",
  },
};
