/* Local SEO for Small Business — redesign draft copy (26 Oct 2026).
   Hub page of the Local SEO dropdown: written for small and local
   businesses in general, not one niche (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: local seo consultant 121
     impressions (pos 14.0) · local seo consulting 59 (23.3) · small town
     seo company 33 (19.5) · local seo consultation 16 (29.6) · local seo
     services for kent small business 13 (16.6) · local seo audit services
     7 (37.4).
   - Semrush US: local seo expert 4,400 (KD 42) · local seo audit 3,600
     (11) · local seo consultant 3,600 (43) · local seo for small business
     2,900 (44) · affordable local seo services 2,400 (50) · local seo
     services for small business 1,900 (36) · small business local seo
     1,300 (63).
   - Web research (small-business local SEO guides, audit checklists,
     "questions before hiring" articles): an audit covers four buckets —
     profile, NAP, on-page/technical, reviews and links — plus a look at
     nearby rivals and a ranked fix list. Profile first, then reviews.
     Primary category plus a few honest secondaries. Proximity can't be
     optimized away. Bing Places and Apple Maps are often skipped. Owners
     should ask who does the work and who owns the accounts. Added: the
     scorecard hero (what an audit finds), a Bing/Apple listings card,
     FAQs on consultant vs agency, account ownership, storefront-free
     businesses and small towns.
   - Title keeps "Local SEO Consultant" (live URL ranks #14) plus "Local
     SEO for Small Business" and "Audit"; H1 leads with the page term.
     Packages, AI SEO and "seo services" terms stay on their own pages. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/local-seo-for-small-business",
  audience: "Small businesses",
  serviceName: "Local SEO for Small Business",
  meta: {
    title: "Local SEO for Small Business | Local SEO Consultant & Audit",
    description:
      "Local SEO for small business owners: a local SEO consultant, a free audit, and profile, listing and review fixes that move you into the Google Map Pack.",
    keywords: [
      "local seo for small business",
      "local seo consultant",
      "local seo expert",
      "local seo audit",
      "small business local seo",
      "local seo services for small business",
      "affordable local seo services",
      "local seo consulting",
      "local seo audit services",
      "small town seo company",
    ],
  },
  hero: {
    h1Lead: "Local SEO for Small Business",
    h1Rest: "With a Consultant in Your Corner",
    icon: "briefcase",
    lead: [
      "Small business local SEO works best with one local SEO consultant who knows your street, not a call center. We audit your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile",
      },
      ", listings and site, fix what keeps you off the Map Pack, then report every call and direction request monthly.",
    ],
    cta: "Book My Free Small Business Audit",
    ui: {
      kind: "growth",
      maps: "pin",
      ai: "overview",
      growth: "feed",
      business: "Your Business",
      category: "Local business",
      query: "open near me",
      aiPrompt: "who is the best local business near me",
      aiReasons: ["Helpful owner replies", "Up-to-date hours and services"],
      growthLabel: "New customers this week",
      leads: [
        ["Directions request", "Google Maps"],
        ["Phone call", "Business Profile"],
        ["Quote form", "Service page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top pin",
          title: "The Shop Locals See First",
          text: "A cleaned-up profile and listings put your business on top of nearby searches.",
        },
        {
          label: "AI answers",
          badge: "Cited",
          title: "Mentioned When Neighbors Ask Google",
          text: "Consistent details and reviews give Google's AI Overview reasons to cite you.",
        },
        {
          label: "Customers",
          badge: "Growing",
          title: "More Calls, Visits and Forms Each Week",
          text: "Every call, form and direction request is tracked back to the search behind it.",
        },
      ],
    },
  },
  searches: {
    title: "The Searches Locals Run Before Choosing a Small Business",
    lead: "Searches like these decide who gets the visit. We match your categories, services and pages to them.",
    groups: [
      {
        icon: "pin",
        label: "Near-me searches for small businesses",
        terms: [
          "coffee shop near me",
          "dentist accepting new patients",
          "nail salon walk in near me",
          "tailor near me",
          "bakery near me",
          "pet groomer near me",
        ],
      },
      {
        icon: "clock",
        label: "Open-now small business searches",
        terms: [
          "florist same day delivery",
          "phone repair same day",
          "urgent care open late",
          "locksmith open now",
          "dry cleaner open saturday",
        ],
      },
      {
        icon: "search",
        label: "Small business searches by town",
        terms: [
          "best pizza in + your town",
          "accountant + your city",
          "yoga studio + neighborhood",
          "auto repair shop + your town",
          "gift shop downtown + city name",
        ],
      },
    ],
  },
  services: {
    title: "Small Business Local SEO\nWe Handle While You Work",
    lead: "Local SEO services for small business owners who would rather run the shop: six jobs, done every month.",
    cta: "Audit My Small Business Listing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Small Businesses",
        desc: "Primary and secondary categories, services, hours, attributes and photos set the way Google reads them, then kept fresh with weekly posts.",
        points: ["Category reset", "Weekly profile posts", "Photo refreshes"],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Stuck on verification?",
          },
        ],
      },
      {
        icon: "layers",
        title: "Small Business Listings on Google, Bing and Apple",
        desc: "One correct name, address and phone pushed to Bing Places, Apple Business Connect and the directories Google cross-checks, with duplicates removed.",
        points: [
          "NAP source of truth",
          "Bing and Apple Maps",
          "Duplicate removal",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended listing help",
          },
        ],
      },
      {
        icon: "star",
        title: "Review Requests for Small Business Owners",
        desc: "Once a customer pays, a short text or email requests a Google review, and every review gets a reply written in your voice.",
        points: [
          "Post-visit requests",
          "Owner-voice replies",
          "Policy-safe asks",
        ],
        links: [],
      },
      {
        icon: "file",
        title: "Service and Town Pages for Small Businesses",
        desc: "A page for each service and neighborhood you serve, with real details, photos and FAQs, so Google can match you to the search.",
        points: ["One page per service", "Neighborhood pages", "Local FAQs"],
        links: [
          { href: "/services/web-design", label: "Small business websites" },
        ],
      },
      {
        icon: "tool",
        title: "Small Business Website Fixes for Local Search",
        desc: "LocalBusiness schema, mobile speed, click-to-call buttons and working forms checked and repaired, so visitors who find you can reach you.",
        points: ["LocalBusiness schema", "Mobile speed", "Click-to-call"],
        links: [],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Small Businesses",
        desc: "Consistent facts and answer-first pages, so AI assistants and Google’s AI Overviews mention you when locals ask who to choose.",
        points: [
          "AI Overview checks",
          "Consistent business facts",
          "Prompt tests",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "How AI SEO works" },
        ],
      },
    ],
  },
  growth: {
    title: "How a Local SEO Expert Grows a Small Business",
    lead: "Map Pack gains, AI mentions and a busier phone, each shown in your monthly report.",
    rank: {
      title: "Put Your Small Business in the Top 3 on Maps",
      body: [
        "Distance from the searcher still counts, so we win the area around you first, then widen it. Categories, town pages and reviews push you up for the searches nearby customers type, with rankings checked across your area each week.",
      ],
      points: [
        "Area-first targeting",
        "Weekly rank checks",
        "Neighborhood pages",
        "Category testing",
      ],
      cta: "See Where My Business Ranks",
      keywords: [
        ["coffee shop near me", 14, 2],
        ["accountant + your city", 22, 3],
        ["pet groomer near me", 17, 1],
        ["florist same day delivery", 26, 4],
      ],
    },
    ai: {
      title: "Get Your Small Business Into AI Recommendations",
      body: [
        "When locals ask ChatGPT or Google’s AI for a recommendation, it pulls from profiles, reviews and listings. We keep those facts identical everywhere and write plain answers on your pages. Our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        " go further for crowded markets.",
      ],
      points: [
        "Identical business facts",
        "Answer-first FAQs",
        "Review keywords",
        "AI mention checks",
      ],
      cta: "Ask What AI Says About Me",
      query: "where can i order a custom birthday cake nearby",
      intro: "For custom birthday cakes nearby,",
      bullets: [
        "Custom cake page",
        "Steady recent reviews",
        "Same hours everywhere",
      ],
    },
    leads: {
      title: "Count Every Small Business Call From Google",
      body: [
        "Rankings only matter if the phone rings. We track calls, direction requests and forms by source, fix the pages that leak visitors, and show which of our ",
        {
          href: "/services/local-seo-packages",
          label: "local SEO packages",
        },
        " suits your next stage of growth.",
      ],
      points: [
        "Calls by source",
        "Direction requests",
        "Form tracking",
        "Plain monthly report",
      ],
      cta: "Show Me My Lead Sources",
      items: [
        ["Appointment booking", "Google Maps", "Mon 9:05 AM"],
        ["Phone call", "Business Profile", "Mon 12:30 PM"],
        ["Quote request form", "Town page", "Tue 11:15 AM"],
        ["Directions request", "Google Maps", "Tue 5:40 PM"],
      ],
    },
  },
  results: {
    title: "Small Business Wins We Work Toward, Step by Step",
    lead: "The order most owners notice: a cleaner listing first, then more calls, then reviews that keep coming.",
    cta: "Plan My Small Business Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Listing Errors Cleared Away",
        text: "We fix categories, hours and your address across Google, Bing and Apple, so customers stop meeting wrong details.",
      },
      {
        when: "Month 1",
        title: "Review Requests Start Flowing",
        text: "Post-visit texts go out after each sale, and new Google reviews start to arrive in your customers’ own words.",
      },
      {
        when: "Months 2–4",
        title: "Neighborhood Pages Take Hold",
        text: "Service and town pages go live, and your listing begins appearing for more searches across nearby blocks.",
      },
      {
        when: "Month 4 onward",
        title: "A Busier Small Business Counter",
        text: "More calls, bookings and direction requests come through, each logged by source in your plain monthly report.",
      },
    ],
    wins: [
      {
        icon: "pin",
        title: "Found by Neighbors Ready to Buy",
        text: "People searching a few streets away see your listing sooner, with correct hours, photos and services.",
      },
      {
        icon: "star",
        title: "A Review Count That Keeps Growing",
        text: "A simple ask after each visit turns happy customers into fresh Google reviews you answer in your own voice.",
      },
      {
        icon: "phone",
        title: "Steadier Calls Beyond Word of Mouth",
        text: "Search becomes a reliable second source of customers next to referrals, tracked so you see which page brought them.",
      },
      {
        icon: "clock",
        title: "Hours Back for Running the Shop",
        text: "One consultant handles listings, pages and reports, so your week goes to customers rather than to Google.",
      },
    ],
  },
  compare: {
    title: "Small Business SEO Help: Zonic Next to the Usual Offer",
    lead: "What small business owners often get elsewhere, and what they get from our consultants.",
    rows: [
      {
        topic: "Who you talk to",
        other: "A rotating account manager reading from a ticket queue.",
        zonic:
          "A named strategist who knows your business and takes your calls directly.",
      },
      {
        topic: "Scope for a small shop",
        other:
          "A big-company plan full of tasks a single location doesn’t need.",
        zonic:
          "Work sized to one location: profile, listings, reviews and the pages you really use.",
      },
      {
        topic: "Listings beyond Google",
        other:
          "Google handled, while Bing, Apple Maps and directories keep old details.",
        zonic:
          "Bing Places, Apple Business Connect and key directories matched to your Google details.",
      },
      {
        topic: "Asking for reviews",
        other:
          "Sometimes review gating or rewards that can break Google’s review rules.",
        zonic:
          "A plain post-visit text or email to every customer, with replies in your voice.",
      },
      {
        topic: "Who owns the accounts",
        other:
          "Profiles and analytics sometimes set up under the provider’s own login.",
        zonic:
          "Your profile, site, analytics and listings stay in your name, month to month.",
      },
      {
        topic: "What your report counts",
        other: "Ranking charts that never say whether the phone rang more.",
        zonic:
          "Calls, direction requests and forms counted by source, explained in plain language.",
      },
    ],
  },
  steps: {
    title: "How Our Local SEO Consulting Works",
    lead: "A clear audit, quick fixes in the first weeks, then steady monthly work you can see.",
    items: [
      {
        h: "Small Business Audit and Consultation",
        p: "We review your profile, listings, site and three nearby competitors, then walk you through the findings on a call, without jargon.",
      },
      {
        h: "Fix the Small Business Basics First",
        p: "Categories, listings, review requests and site repairs go live early, because these fixes usually move Maps rankings fastest.",
      },
      {
        h: "Grow Small Business Visibility Monthly",
        p: "Each month adds pages, reviews and local mentions, and your report shows rankings, calls and direction requests side by side.",
      },
    ],
    audit: [
      ["Profile categories", "behind"],
      ["Listings", "gap"],
      ["Reviews", "open"],
      ["Town pages", "gap"],
    ],
    plan: [
      "Categories",
      "Listings",
      "Review texts",
      "Service pages",
      "Local links",
    ],
    launch: [
      "Profile reset",
      "Listings matched",
      "Reviews coming in",
      "Calls tracked",
    ],
  },
  explore: {
    title: "Other Ways We Help Local Businesses Grow",
    lead: "Pick the program that matches your business type, size or state.",
    items: [
      {
        name: "Home Services Local SEO",
        sub: "For trades and field crews",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
      {
        name: "Local SEO Packages",
        sub: "See what each plan covers",
        href: "/services/local-seo-packages",
        icon: "layers",
      },
      {
        name: "SEO Services",
        sub: "Organic SEO beyond the map",
        href: "/services/seo-services",
        icon: "search",
      },
      {
        name: "Delaware SEO",
        sub: "Kent, New Castle and Sussex",
        href: "/services/delaware/seo",
        icon: "pin",
      },
    ],
    other:
      "Looking for a small town SEO company? We work markets of every size, one profile at a time.",
  },
  reviews: {
    title: "Owners of Small Businesses Rate Us 5.0 on Google",
    lead: "Every review below comes from our real Google profile, unedited.",
  },
  pricing: {
    title: "Small Business SEO Plans Without Long Contracts",
    compareTitle: "See What Each Small Business Plan Includes",
    addOnsTitle: "Add-Ons as Your Small Business Grows",
    customTitle: "Small Business With More Than One Location?",
  },
  faq: {
    title: "Local SEO Consultant Questions From Owners",
    lead: "Costs, timing, doing it yourself and what to expect from a consultant.",
    items: [
      {
        q: "What does a local SEO consultant do for a small business?",
        a: "A local SEO consultant audits how your business shows up on Google Maps, search and AI tools, then fixes the gaps: profile categories, listings, reviews, service pages and site issues. You get one point of contact and a monthly report tied to calls.",
      },
      {
        q: "How much does local SEO cost for a small business?",
        a: "Our plans are $297, $750 or $1,500 a month, month to month. Most single-location small businesses start on the first plan; adding Google Ads or more locations moves you up. Your free audit says which plan fits before you commit.",
      },
      {
        q: "What is included in a small business local SEO audit?",
        a: "We check your Google Business Profile, your name, address and phone across directories, reviews, service and town pages, site speed, schema and the businesses outranking you nearby. You get a scorecard and a ranked list of first fixes, explained on a short call.",
      },
      {
        q: "Can a small business do local SEO on its own?",
        a: "Yes, the basics are doable: claim your profile, choose accurate categories, ask every customer for a review and keep your details consistent. Owners usually bring in help when time runs short, rankings stall, or a profile gets suspended and needs an appeal.",
      },
      {
        q: "How long before a small business sees local SEO results?",
        a: "Maps movement often starts a few weeks after the profile and listing fixes. Busier towns need a few months of pages and reviews. Distance from the searcher always counts, so we win the blocks around you first and widen out from there.",
      },
      {
        q: "Should a small business hire a local SEO consultant or an agency?",
        a: "A consultant gives you one person who knows your account; an agency gives you more hands. We combine both: a named strategist you can call, backed by a team for pages, listings and reporting. Ask any provider who does the work and who owns the accounts.",
      },
      {
        q: "Does a small business need a storefront for local SEO?",
        a: "No. Service-area businesses can hide their address and still rank across the towns they serve. Google needs a real, verifiable location, and the work shifts to service-area settings, town pages and reviews that mention the places you work.",
      },
      {
        q: "Who owns the accounts when a small business hires you?",
        a: "You do. Your Google Business Profile, website, analytics and listings stay in your name, and we work through manager access. If you leave, everything stays with you and nothing needs rebuilding. There is no long contract either; plans run month to month.",
      },
      {
        q: "Do you work with small town businesses?",
        a: "Yes. Small towns often have fewer competitors, so profile fixes and a few strong pages can win the Map Pack quickly. We also cover the nearby towns customers drive in from, so you are found beyond your own main street.",
      },
      {
        q: "Are affordable local SEO services worth it for a small business?",
        a: "They can be, if the scope is clear. Ask what gets done each month, who does it and how results are reported. Cheap plans that only submit directory listings rarely move rankings; steady profile, review and page work does.",
      },
    ],
  },
  audit: {
    title: "Your Free Small Business Local SEO Audit",
    lead: [
      "Tell us your business and town. A local SEO expert checks your profile, listings, reviews and site against nearby competitors and sends a scorecard with the first three fixes. Read ",
      { href: "/about", label: "about our team" },
      " or see ",
      { href: "/services", label: "all our services" },
      ".",
    ],
    points: [
      "Map Pack position nearby",
      "Listing and NAP errors",
      "Review gaps",
      "Three first fixes",
    ],
    form: {
      formType: "local-seo-small-business",
      badge: "Free small business audit",
      title: "Request Your Small Business SEO Audit",
      subtitle: "Free, no contract, explained on a short call.",
      submitText: "Send My Business Audit Request",
      messageLabel: "Your business name, website and town",
      messagePlaceholder:
        "Business name, yourwebsite.com and the town or neighborhood you serve",
    },
  },
  banner: {
    title: "Be the Local Name Neighbors Find First",
    lead: "A sharper profile, matched listings and steady reviews, with one consultant reporting every change.",
  },
};
