import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).

   Rank safety: the live page is an organic lead earner. Semrush returned
   "API units balance is zero" on 24 Oct, so its ranking report could not
   be pulled. The live title's wording ("Home Inspector Marketing Agency |
   SEO, Ads & Leads") is kept word for word inside the new title, and every
   phrase in the live keywords meta is carried by the title, H1, an H2/H3
   or an FAQ question.
   - Volumes (Semrush US, recorded 18 Sep 2026): home inspector marketing
     210 · marketing for home inspectors 170 · seo for home inspectors 170 ·
     home inspector seo 140 · home inspector advertising 140 · home
     inspection marketing 110.
   - Web research (24 Oct): buyers search "home inspector near me",
     "same-day home inspection" and "[city] home inspection"; agents still
     send most work, so top pages cover agent referrals, Maps, online
     booking, pre-listing work and add-on services; AI recommendation
     tools are a growing discovery step that competitor pages skip.
   Fresh wording only: nothing reused from the live page or other drafts. */

/* GSC check (25 Oct 2026, last 90 days, all home-inspector-marketing URLs):
   the main page earns the impressions; state pages show almost no real
   customer queries (mostly "+google search central …" probe queries).
   Phrases worked in from GSC: home inspection local seo (199 impr, pos 14),
   digital marketing for home inspectors (140), home inspection leads (78),
   home inspector digital marketing agency (48, pos 16). Already present:
   home inspector marketing agency, seo for home inspectors, marketing for
   home inspectors, home inspection marketing, home inspector seo. */
export const CONTENT: IndustryContent = {
  draftSlug: "home-inspector-marketing-2",
  liveUrl: "/services/home-inspector-marketing",
  niche: "Home Inspector",
  meta: {
    title: "Home Inspector Marketing Agency | SEO, Ads & Inspection Leads",
    description:
      "Home inspector marketing agency for digital marketing that books inspections: home inspection local SEO, Google Maps rankings, Google Ads and agent referrals.",
    keywords: [
      "home inspector marketing",
      "home inspector marketing agency",
      "home inspection local seo",
      "digital marketing for home inspectors",
      "home inspector digital marketing agency",
      "home inspection leads",
      "home inspection marketing",
      "marketing for home inspectors",
      "home inspector seo",
      "seo for home inspectors",
      "home inspector advertising",
      "home inspector google ads",
      "home inspector lead generation",
      "home inspector leads",
      "home inspector marketing ideas",
      "how to get clients as a home inspector",
      "home inspector website design",
      "realtors and home inspectors",
    ],
  },
  palette: PALETTES.amberGreen,
  hero: {
    h1Lead: "Home Inspector",
    h1Icon: "inspectList",
    h1Rest: "Marketing Agency for More Booked Inspections",
    lead: [
      "Buyers search “home inspector near me” the day their offer is accepted, and agents read your reviews before passing on your name. We win both with digital marketing for home inspectors: home inspector SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      ", Google Ads and a ",
      { href: "/services/web-design", label: "website that takes bookings" },
      ".",
    ],
    cta: "Get My Free Inspector Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-home-inspector/buyer-inspections.webp",
        position: "62% 40%",
        query: "home inspector near me",
      },
      cardA: {
        icon: "home",
        title: "More buyer inspections",
        sub: "Booked straight from Google",
      },
      cardB: {
        icon: "inspect",
        title: "More add-on bookings",
        sub: "Radon, sewer scope and mold",
      },
      photoB: {
        src: "/images/free-website/free-home-inspector/sewer-scope.webp",
        position: "40% 50%",
        query: "sewer scope inspection near me",
      },
    },
  },
  services: {
    // "\n" = desktop line break: two lines (owner, 25 Oct).
    title: "Home Inspection Marketing\nServices for Every Booking Source",
    lead: "One team runs every channel that books inspections, from Maps to reviews.",
    cta: "Audit My Inspection Marketing",
    items: [
      {
        icon: "pin",
        title: "Home Inspection Local SEO on Google Maps",
        desc: "We pick the right inspection categories, list every add-on test, post real job photos and keep the profile active so it climbs the map.",
        points: [
          "Categories and add-ons listed",
          "Weekly posts with job photos",
          "Verification support included",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify a new profile",
          },
        ],
      },
      {
        icon: "search",
        title: "SEO for Home Inspectors",
        desc: "Pages for each inspection type and every town you cover, plus citations and local schema, so buyers find you before they phone anyone.",
        points: [
          "Town and add-on pages",
          "Directory citation cleanup",
          "Rankings tracked by city",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home service pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Home Inspector Google Ads",
        desc: "Search and call ads shown to buyers under contract in your zip codes, with job-seeker and DIY checklist searches filtered out.",
        points: [
          "Call-first mobile ads",
          "Zip-code targeting",
          "0% ad-spend markup",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for inspection companies",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Home Inspector Website Design",
        desc: "A quick, phone-friendly site with online scheduling, add-on checkboxes and a sample report, so buyers can book in a few taps.",
        points: [
          "Scheduler on every page",
          "Sample report showcase",
          "Calls and bookings tracked",
        ],
        links: [
          { href: "/services/web-design", label: "Custom website design" },
          {
            href: "/home-inspector-website-design-agency-us/offer",
            label: "Free inspector website offer",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews Buyers and Agents Trust",
        desc: "Each delivered report triggers a friendly review request, and we write replies in your voice, so your star rating keeps rising.",
        points: [
          "Automatic text requests",
          "Owner replies written",
          "Reviews shown on your site",
        ],
        links: [{ href: "#ind-audit", label: "Check my review gap" }],
      },
      {
        icon: "users",
        title: "Real Estate Agent Referral Marketing",
        desc: "Agent-friendly booking links, a shareable sample report and regular email updates keep you top of mind with the realtors who refer buyers.",
        points: [
          "Agent booking page",
          "Monthly agent emails",
          "Pre-listing outreach",
        ],
        links: [{ href: "#ind-audit", label: "Plan my agent outreach" }],
      },
    ],
  },
  growth: {
    title: "Digital Marketing for Home Inspectors That Reaches Buyers First",
    lead: "Maps, AI answers, paid search and reviews, all pointed at the same booking calendar.",
    rows: [
      {
        title: "Land in the Top 3 for “Home Inspector Near Me”",
        body: [
          "Buyers who want a second opinion on their agent's pick open Google Maps first. We tune your profile, build a page for each town you cover and keep reviews flowing, so you are one of three inspectors they compare. Try our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "free Google Maps rank checker",
          },
          ".",
        ],
        points: [
          "Inspection categories",
          "Town landing pages",
          "Geo-tagged job photos",
          "Spam listing reports",
        ],
        cta: "Check My Maps Ranking",
        ui: {
          kind: "maps",
          query: "home inspector near me",
          city: "Columbus",
          category: "Home inspector · Online booking",
        },
      },
      {
        title: "Be the Inspector ChatGPT Names in Your City",
        body: [
          "A growing number of buyers type “best home inspector in Denver” into ChatGPT, Gemini or an AI Overview. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " gives those tools facts they can trust: matching listings, detailed reviews, visible certifications and a clear page for each inspection you offer.",
        ],
        points: [
          "Identical listings everywhere",
          "Reviews that mention findings",
          "Certifications on display",
          "Plain-answer FAQ pages",
        ],
        cta: "Audit My AI Visibility",
        ui: {
          kind: "ai",
          query: "best home inspector in denver for an older house",
          intro: "For older homes around Denver,",
          bullets: [
            "Sewer scope and radon add-ons",
            "Same-day digital reports",
            "Certified, insured inspectors",
          ],
        },
      },
      {
        title: "Home Inspector Advertising for Buyers Under Contract",
        body: [
          "Inspection windows are short, so buyers book fast. We run search and call ads on inspection searches in the zip codes you serve, block job-hunter and DIY checklist clicks, and tie each call to the keyword behind it.",
        ],
        points: [
          "Call-only mobile ads",
          "Zip-code targeting",
          "Negative keyword lists",
          "Recorded, tracked calls",
        ],
        cta: "Plan My Inspection Ads",
        ui: {
          kind: "calls",
          title: "Calls from ads this week",
          calls: [
            {
              service: "Buyer inspection + radon test",
              source: "Google Ads · Call",
              when: "Mon 9:12 AM",
            },
            {
              service: "Pre-listing inspection",
              source: "Google Ads",
              when: "Tue 1:40 PM",
            },
            {
              service: "Sewer scope add-on",
              source: "Local Services Ads",
              when: "Thu 7:05 PM",
            },
          ],
        },
      },
      {
        title: "Collect Reviews the Day Each Report Lands",
        body: [
          "Agents and buyers both check your reviews before they book. When the report reaches your client, they get a short text with a review link, and we write the owner replies, so your star rating and total reviews climb month after month.",
        ],
        points: [
          "Texts sent on delivery",
          "Alerts on low ratings",
          "Owner replies drafted",
          "Reviews embedded on site",
        ],
        cta: "Grow My Inspection Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Priya, it's Your Company. Your inspection report is in your inbox! Would you share a quick Google review?",
          reviewer: "Priya S.",
          review:
            "He walked us through every finding, scoped the sewer line and had the full report to us that evening. Our agent was impressed too.",
          reply: "Thank you, Priya! Congratulations on the new home.",
        },
      },
    ],
  },
  ownLeads: {
    title: "Home Inspector Lead Generation Beyond Agent Referrals",
    body: [
      "Most inspection work still starts with an agent's referral, and that list can shrink overnight when one agent retires or changes offices. We add a second pipeline of home inspection leads: buyers and sellers who find you on Google and book you directly.",
    ],
    cta: "Build My Own Inspection Leads",
    colShared: "Agent referrals only",
    colOwn: "Agents plus your own leads",
    rows: [
      [
        "Where bookings come from",
        "A few agents' contact lists",
        "Agents, Maps, search and ads",
      ],
      [
        "When an agent stops referring",
        "Your calendar thins out",
        "Search bookings keep arriving",
      ],
      [
        "Who picks the inspector",
        "Usually the agent",
        "Buyers who chose you themselves",
      ],
      [
        "Quiet winter months",
        "Idle days on the schedule",
        "Pre-listing and add-on campaigns",
      ],
    ],
  },
  specialties: {
    title: "Marketing for Home Inspectors, Service by Service",
    lead: "Buyer, seller and builder inspections are booked in different ways, so each service gets its own pages, ads and follow-up.",
    photo: {
      src: "/images/free-website/free-home-inspector/new-construction.webp",
      alt: "Home inspector in a hard hat checking the foundation of a newly built house",
      caption: "Residential, new-build and commercial work",
      sub: "Plus every ancillary test you offer",
    },
    items: [
      {
        icon: "home",
        name: "Buyer Home Inspections",
        tactic: "Map Pack ranking with same-week booking buttons",
      },
      {
        icon: "inspectList",
        name: "Pre-Listing Inspections",
        tactic: "Seller-focused pages and outreach to listing agents",
      },
      {
        icon: "construction",
        name: "New Construction & 11-Month Warranty",
        tactic: "Builder-phase pages and warranty-deadline reminder emails",
      },
      {
        icon: "air",
        name: "Radon Testing",
        tactic: "Add-on offers at checkout and radon-zone town pages",
      },
      {
        icon: "inspect",
        name: "Sewer Scope Inspections",
        tactic: "Older-home pages paired with short camera-footage clips",
      },
      {
        icon: "waterDamage",
        name: "Mold Testing & Air Sampling",
        tactic: "Moisture-problem pages ranked for musty-smell searches",
      },
      {
        icon: "bug",
        name: "Termite & WDI Inspections",
        tactic: "WDI report pages for lender-required inspections",
      },
      {
        icon: "building",
        name: "Commercial Property Inspections",
        tactic: "Investor and property-manager pages plus targeted search ads",
      },
    ],
    more: "Offer pool, thermal imaging, drone roof or 4-point inspections? We market those too.",
  },
  steps: {
    title: "Three Steps to a Fuller Inspection Schedule",
    lead: "Maps and ads move first, then rankings climb.",
    items: [
      {
        h: "Free Inspection Market Audit",
        p: "We run the searches buyers use in your towns, add-on tests included, and map where you rank, which inspectors beat you and what costs you bookings.",
      },
      {
        h: "A Plan for Your Towns and Services",
        p: "We choose the towns, inspection types and campaigns to push first, weighted toward higher-value work like radon, sewer scope and pre-listing inspections.",
      },
      {
        h: "Go Live, Then Monthly Reporting",
        p: "Profile updates, town pages, paid campaigns and review texts all launch together. Every month you see rankings, calls, online bookings and the source of each inspection.",
      },
    ],
    audit: [
      ["Map Pack spot in your city", "behind"],
      ["Profile services and add-ons", "gap"],
      ["Online scheduling", "open"],
      ["Review count vs top 3", "behind"],
    ],
    plan: ["Buyer inspections", "Radon", "Sewer scope", "Columbus", "Dublin"],
    launch: [
      "Profile services listed",
      "Town pages live",
      "Ad calls tracked",
      "Review texts on",
    ],
  },
  locations: {
    title: "Local Home Inspector Marketing in 31 States",
    lead: [
      "Every state page covers local licensing rules, the busiest metros and how buyers there search. Starting in the Sunshine State? See our plan for ",
      {
        href: "/services/home-inspector-marketing/florida",
        label: "Florida home inspection companies",
      },
      ".",
    ],
    items: [
      {
        name: "Alabama Home Inspector Marketing",
        href: "/services/home-inspector-marketing/alabama",
        cities: "Birmingham · Huntsville · Mobile",
      },
      {
        name: "Home Inspector Marketing in Arizona",
        href: "/services/home-inspector-marketing/arizona",
        cities: "Phoenix · Tucson · Mesa",
      },
      {
        name: "Arkansas Home Inspection Marketing",
        href: "/services/home-inspector-marketing/arkansas",
        cities: "Little Rock · Fayetteville · Fort Smith",
      },
      {
        name: "California Home Inspector Marketing",
        href: "/services/home-inspector-marketing/california",
        cities: "Los Angeles · San Diego · Sacramento",
      },
      {
        name: "Home Inspector Marketing in Colorado",
        href: "/services/home-inspector-marketing/colorado",
        cities: "Denver · Colorado Springs · Fort Collins",
      },
      {
        name: "Florida Home Inspection Marketing",
        href: "/services/home-inspector-marketing/florida",
        cities: "Jacksonville · Orlando · Tampa",
      },
      {
        name: "Georgia Home Inspector Marketing",
        href: "/services/home-inspector-marketing/georgia",
        cities: "Atlanta · Savannah · Athens",
      },
      {
        name: "Home Inspector Marketing in Illinois",
        href: "/services/home-inspector-marketing/illinois",
        cities: "Chicago · Naperville · Rockford",
      },
      {
        name: "Indiana Home Inspection Marketing",
        href: "/services/home-inspector-marketing/indiana",
        cities: "Indianapolis · Fort Wayne · Evansville",
      },
      {
        name: "Kentucky Home Inspector Marketing",
        href: "/services/home-inspector-marketing/kentucky",
        cities: "Louisville · Lexington · Bowling Green",
      },
      {
        name: "Home Inspector Marketing in Louisiana",
        href: "/services/home-inspector-marketing/louisiana",
        cities: "New Orleans · Baton Rouge · Shreveport",
      },
      {
        name: "Maryland Home Inspection Marketing",
        href: "/services/home-inspector-marketing/maryland",
        cities: "Baltimore · Columbia · Frederick",
      },
      {
        name: "Massachusetts Home Inspector Marketing",
        href: "/services/home-inspector-marketing/massachusetts",
        cities: "Boston · Worcester · Springfield",
      },
      {
        name: "Home Inspector Marketing in Michigan",
        href: "/services/home-inspector-marketing/michigan",
        cities: "Detroit · Grand Rapids · Ann Arbor",
      },
      {
        name: "Minnesota Home Inspection Marketing",
        href: "/services/home-inspector-marketing/minnesota",
        cities: "Minneapolis · St. Paul · Rochester",
      },
      {
        name: "Missouri Home Inspector Marketing",
        href: "/services/home-inspector-marketing/missouri",
        cities: "Kansas City · St. Louis · Springfield",
      },
      {
        name: "Home Inspector Marketing in Nevada",
        href: "/services/home-inspector-marketing/nevada",
        cities: "Las Vegas · Henderson · Reno",
      },
      {
        name: "New Jersey Home Inspection Marketing",
        href: "/services/home-inspector-marketing/new-jersey",
        cities: "Newark · Jersey City · Toms River",
      },
      {
        name: "New York Home Inspector Marketing",
        href: "/services/home-inspector-marketing/new-york",
        cities: "Long Island · Albany · Buffalo",
      },
      {
        name: "Home Inspector Marketing in North Carolina",
        href: "/services/home-inspector-marketing/north-carolina",
        cities: "Charlotte · Raleigh · Wilmington",
      },
      {
        name: "Ohio Home Inspection Marketing",
        href: "/services/home-inspector-marketing/ohio",
        cities: "Columbus · Cleveland · Cincinnati",
      },
      {
        name: "Oklahoma Home Inspector Marketing",
        href: "/services/home-inspector-marketing/oklahoma",
        cities: "Oklahoma City · Tulsa · Norman",
      },
      {
        name: "Home Inspector Marketing in Oregon",
        href: "/services/home-inspector-marketing/oregon",
        cities: "Portland · Salem · Eugene",
      },
      {
        name: "Pennsylvania Home Inspection Marketing",
        href: "/services/home-inspector-marketing/pennsylvania",
        cities: "Philadelphia · Pittsburgh · Allentown",
      },
      {
        name: "South Carolina Home Inspector Marketing",
        href: "/services/home-inspector-marketing/south-carolina",
        cities: "Charleston · Columbia · Greenville",
      },
      {
        name: "Home Inspector Marketing in Tennessee",
        href: "/services/home-inspector-marketing/tennessee",
        cities: "Nashville · Knoxville · Memphis",
      },
      {
        name: "Texas Home Inspection Marketing",
        href: "/services/home-inspector-marketing/texas",
        cities: "Dallas · Houston · San Antonio",
      },
      {
        name: "Utah Home Inspector Marketing",
        href: "/services/home-inspector-marketing/utah",
        cities: "Salt Lake City · Provo · Ogden",
      },
      {
        name: "Home Inspector Marketing in Virginia",
        href: "/services/home-inspector-marketing/virginia",
        cities: "Virginia Beach · Richmond · Arlington",
      },
      {
        name: "Washington Home Inspection Marketing",
        href: "/services/home-inspector-marketing/washington",
        cities: "Seattle · Spokane · Tacoma",
      },
      {
        name: "Wisconsin Home Inspector Marketing",
        href: "/services/home-inspector-marketing/wisconsin",
        cities: "Milwaukee · Madison · Green Bay",
      },
    ],
    other: "Licensed somewhere else? We market inspectors in every state.",
  },
  reviews: {
    title: "Google Reviews From Business Owners We Grow",
    lead: "Unfiltered reviews left on our own Google profile by the owners we work with.",
  },
  pricing: {
    title: "Home Inspector Marketing Plans, Billed Month to Month",
    lead: [
      "No annual lock-in, a 0% markup on ad spend, and every plan includes ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "help reinstating a suspended Business Profile",
      },
      " if Google ever takes yours down.",
    ],
    compareTitle: "Compare Inspector Marketing Plans",
    compareLead:
      "From Map Pack work to Google Ads, see what each tier includes.",
    addOnsTitle: "Add Campaigns Before the Spring Rush",
    addOnsLead:
      "Extra town pages, an ancillary-service push or a seasonal ad campaign.",
    customTitle: "Running a multi-inspector firm?",
    customText:
      "Tell us your team size and territories and we'll scope a multi-market inspection plan.",
  },
  faq: {
    title: "Home Inspection Marketing Questions, Answered",
    lead: "Clients, referrals, SEO, ads, AI search and plans, in plain words.",
    items: [
      {
        q: "What does a home inspector marketing agency do?",
        a: "A home inspector digital marketing agency makes your company the one buyers, sellers and agents pick. That covers Map Pack rankings, search pages for each inspection type and town, Google Ads aimed at buyers under contract, a steady flow of reviews and a website where clients can book online.",
      },
      {
        q: "How can I get clients as a home inspector beyond agent referrals?",
        a: "Market straight to buyers and sellers. Rank on Google Maps for “home inspector near me”, publish pages for each town and add-on test, run ads in the zip codes you serve, offer online booking and request a review after every report. Keep nurturing agents alongside it.",
      },
      {
        q: "What are the best home inspector marketing ideas for 2026?",
        a: "The home inspection marketing ideas that pay off first are the basics: a fully built Business Profile, a stream of fresh reviews and online scheduling on your site. Then add pre-listing outreach to listing agents, ancillary-service pages for radon and sewer scope, short videos of real findings and visibility in AI answers.",
      },
      {
        q: "Is home inspector SEO worth it for a one-inspector company?",
        a: "Yes. Buyers look for inspectors every day, and organic rankings keep sending bookings without a fee per click. Home inspector SEO also strengthens your Maps listing and AI answers, so a solo inspector with a strong local footprint can outrank bigger firms in their own towns.",
      },
      {
        q: "Do realtors and home inspectors still depend on each other for work?",
        a: "Yes. Agents still send a large share of inspections, and they check your reviews and report quality before recommending you. We support that with an agent-friendly booking page, a sample report and fresh reviews, while search brings in buyers who choose an inspector on their own.",
      },
      {
        q: "Should home inspectors run Google Ads or Local Services Ads?",
        a: "Many inspectors benefit from both. Local Services Ads place a verified badge at the top of the results and bill by the lead; search ads let us pick exact keywords, zip codes and landing pages. We launch whichever suits your market first, then add the other once calls are tracked.",
      },
      {
        q: "Should a home inspection company offer online booking?",
        a: "Yes. Many buyers book after work hours and need a slot before their inspection window closes. Online scheduling lets them choose a time, tick add-ons like radon or sewer scope and get a confirmation without waiting for a callback, which often wins the job over slower competitors.",
      },
      {
        q: "Can my inspection company show up when buyers ask ChatGPT or Gemini?",
        a: "Yes, when the facts about you line up. We make your name, address and phone match on every listing, earn reviews that mention real inspections, display your licenses and certifications, and answer common buyer questions on your site. That gives ChatGPT, Gemini and AI Overviews solid grounds to recommend you.",
      },
      {
        q: "What does home inspector marketing cost at Zonic Media?",
        a: "Three plans: $297, $750 and $1,500 monthly, with no annual contract. Google bills your ad spend directly, with a 0% markup from us. Solo inspectors covering a few towns usually start on the first tier; firms with several inspectors, add-on services and ad campaigns tend to need more.",
      },
      {
        q: "How long does home inspection marketing take to show results?",
        a: "A cleaned-up Business Profile and live ads tend to bring the first calls, often within weeks. Search rankings take longer, usually several months, and depend on how crowded your market is. Your monthly report shows rankings, calls and bookings, so progress stays visible.",
      },
    ],
  },
  audit: {
    title: "Free Home Inspector Marketing Audit for Your Service Area",
    lead: [
      "Send your company name and towns. We'll show where you appear for inspection searches, how your profile, ",
      { href: "/services/web-design", label: "website and online booking" },
      " and reviews stack up against the top three inspectors, and which changes should come first.",
    ],
    points: [
      "No long-term contract",
      "0% markup on ad spend",
      "Starts at $297 a month",
      "Profile reinstatement covered",
    ],
    form: {
      formType: "home-inspector-marketing",
      badge: "Free inspector audit",
      title: "Request Your Free Home Inspector Marketing Audit",
      subtitle: "Free, and no obligation to sign.",
      submitText: "Send My Inspection Audit",
      messageLabel: "Your towns and inspection services",
      messagePlaceholder:
        "Cities you cover, add-ons you offer (radon, sewer scope, mold) and how many inspectors you run",
    },
  },
  banner: {
    title: "Be the Inspector Buyers and Agents Find First",
    lead: "Get a free audit and see which fixes will bring your next booking soonest.",
    icons: ["inspectList", "home"],
  },
};
