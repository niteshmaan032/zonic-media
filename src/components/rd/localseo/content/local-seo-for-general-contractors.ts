/* Local SEO for General Contractors — redesign draft copy (26 Oct 2026).
   Brief: docs/local-seo-redesign-brief.md. Fresh wording only; the live
   page, the electricians reference, /services/seo-services-2 and
   /services/general-contractor-marketing-agency-2 were checked for
   overlap.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: general contractor seo 495
     impressions (pos 35.0) · seo for general contractors 415 (43.5) ·
     local seo marketing for remodeling contractors 302 (a marketing
     term, left to the marketing page) · seo company for contractors 239
     (11.5) · seo services for home improvement companies 177 (10.1) ·
     local seo for general contractors 135 · local seo general
     contractors 134 · general contractor seo company 117 (14.9) · local
     seo for remodeling contractors 95 · general contractor seo services
     50 · seo for general contractors near me 41 (4.9).
   - Semrush US: contractor seo 3,600 (KD 23) · seo for contractors 3,600
     (23) · home builder seo 2,400 (8) · construction seo 1,600 (26) · seo
     for general contractors 1,000 (16) · general contractor seo 880 (22)
     · seo for home builders 720 (8). Roofing and painting contractor
     terms belong to their own pages.
   - Web research (contractor seo, construction seo, GC GBP categories,
     addition/basement/commercial searches, home builder seo, AI search;
     top pages read: an agency contractor SEO page and a 26-step
     contractor SEO guide): neither covers commercial build-outs, home
     builders, permits/licensing or AI answers in depth, and category
     advice splits between "General Contractor" and a sharper specialty
     primary. Added: home builder card, commercial and trust search
     groups, a category FAQ, a commercial FAQ, a project case-page FAQ
     and a remodeling-contractor FAQ for the live GSC terms.
   - Title keeps "General Contractor SEO" (live title) and adds
     "Construction SEO" and "SEO for Contractors" (head terms); H1 joins
     "contractor seo" with "seo for general contractors". */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-general-contractors",
  audience: "General contractors, home builders and construction companies",
  serviceName: "Local SEO for General Contractors",
  meta: {
    title: "General Contractor SEO | Construction SEO for Contractors",
    description:
      "Contractor SEO for general contractors and home builders: Google Maps, project pages, reviews and AI answers that bring additions, remodels and build-outs.",
    keywords: [
      "contractor seo",
      "seo for contractors",
      "construction seo",
      "general contractor seo",
      "seo for general contractors",
      "local seo for general contractors",
      "general contractor seo company",
      "home builder seo",
      "seo company for contractors",
      "local seo for remodeling contractors",
    ],
  },
  hero: {
    h1Lead: "Contractor SEO for General Contractors",
    h1Rest: "That Wins More Bids",
    icon: "construction",
    lead: [
      "Our SEO for contractors gets your firm into the Map Pack, onto page one and into AI answers when owners search for additions, whole-home remodels and build-outs. We tighten your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile",
      },
      ", add pages for each build type and town, and gather reviews that win bids.",
    ],
    cta: "Get My Free GC SEO Audit",
    ui: {
      kind: "growth",
      maps: "grid",
      ai: "chat",
      growth: "pipeline",
      business: "Your Construction Co.",
      category: "General contractor",
      query: "general contractor near me",
      aiPrompt: "Which general contractor near me builds home additions?",
      aiReasons: ["Project case studies", "Licensed and bonded"],
      growthLabel: "Bid pipeline",
      leads: [
        ["Home addition contract", "Project page"],
        ["Basement finish bid", "ChatGPT referral"],
        ["Remodel estimate request", "Google Maps"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top 3 area-wide",
          title: "The Builder Owners See Across Town",
          text: "Your company holds top map spots in every town you build in.",
        },
        {
          label: "AI answers",
          badge: "Shortlisted",
          title: "On the AI Shortlist for Big Projects",
          text: "Case studies and credentials give AI tools reasons to suggest you.",
        },
        {
          label: "Bids",
          badge: "Won",
          title: "Estimates Becoming Signed Projects",
          text: "Follow every bid from estimate request to signed contract.",
        },
      ],
    },
  },
  searches: {
    title: "What Owners Search Before Hiring a General Contractor",
    lead: "Homeowners, investors and businesses search by project, by credential and by town; we cover all three.",
    groups: [
      {
        icon: "home",
        label: "Home project contractor searches",
        terms: [
          "home addition contractors near me",
          "whole house remodel contractor",
          "basement finishing company",
          "second story addition builder",
          "garage conversion contractor",
          "custom home builder near me",
        ],
      },
      {
        icon: "building",
        label: "Commercial contractor searches",
        terms: [
          "commercial general contractor",
          "tenant improvement contractor",
          "office build out contractor",
          "restaurant construction company",
          "retail build out near me",
        ],
      },
      {
        icon: "shield",
        label: "Contractor trust searches",
        terms: [
          "licensed general contractor + your city",
          "insured contractor near me",
          "design build firm near me",
          "general contractor reviews",
          "bonded contractor for remodel",
          "construction company near me",
        ],
      },
    ],
  },
  services: {
    title: "Construction SEO Services\nBuilt Around Your Projects",
    lead: "Six services, each aimed at the project types and clients you want to win more often.",
    cta: "Audit My Contractor Website",
    items: [
      {
        icon: "pin",
        title: "Business Profile Work for General Contractors",
        desc: "General Contractor or a sharper primary category, project-type secondaries, a mapped service area and jobsite photos posted while builds are underway.",
        points: [
          "Category stack tested",
          "Service area by county",
          "Jobsite progress photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
      {
        icon: "file",
        title: "Contractor Project and Town Pages",
        desc: "A page each for home additions, basement finishing, full-house remodels and tenant build-outs, plus town pages with a local project, permit notes and photos.",
        points: [
          "Project-type pages",
          "Town pages with builds",
          "Permit and timeline notes",
        ],
        links: [
          {
            href: "/services/general-contractor-website-design",
            label: "General contractor websites",
          },
        ],
      },
      {
        icon: "home",
        title: "Home Builder SEO for New Construction",
        desc: "Floor plan, lot and community pages for custom and semi-custom builders, written for buyers searching new construction in specific towns.",
        points: [
          "Floor plan pages",
          "Community and lot pages",
          "Builder profile setup",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Reviews and Proof for Contracting Firms",
        desc: "Review requests at substantial completion, owner replies, and project case pages that show scope, timeline and the finished result.",
        points: [
          "Completion-day requests",
          "Owner replies",
          "Project case pages",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore a suspended profile",
          },
        ],
      },
      {
        icon: "tool",
        title: "Technical SEO for Contractor Websites",
        desc: "Portfolio pages sped up, broken project links fixed, schema for services and projects added, and old thin pages merged into stronger ones.",
        points: [
          "Portfolio speed fixes",
          "Project schema",
          "Thin page cleanup",
        ],
        links: [
          {
            href: "/services/web-design",
            label: "Contractor-ready web design",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for Construction Companies",
        desc: "Clear facts on licensing, project types, service area and process, kept identical across listings, so AI tools name your firm for major builds.",
        points: [
          "License and scope facts",
          "Consistent listings",
          "AI recommendation checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for builders" },
        ],
      },
    ],
  },
  growth: {
    title: "How Local SEO for General Contractors Builds a Pipeline",
    lead: "Better rankings for the builds you want, mentions in AI answers and bid requests with a known source.",
    rank: {
      title: "Put Your Contractor Projects on Page One",
      body: [
        "Owners search by project, not by trade label, so we map additions, basements, remodels and commercial work to their own pages and towns. Positions are checked weekly against the contractors and directories holding page one today.",
      ],
      points: [
        "Project-type keyword map",
        "Town-level tracking",
        "Directory pages tracked",
        "Commercial terms split out",
      ],
      cta: "See My Contractor Keyword Gaps",
      keywords: [
        ["general contractor near me", 26, 3],
        ["home addition contractor", 32, 4],
        ["basement finishing + your city", 21, 2],
        ["commercial build out contractor", 38, 6],
      ],
    },
    ai: {
      title: "Get Your Firm Named in AI Contractor Answers",
      body: [
        "Owners now ask ChatGPT and Gemini who can handle an addition or a tenant build-out. Those tools draw on project pages, license details, consistent listings and reviews describing scope. We build those signals through our ",
        {
          href: "/services/ai-seo-services",
          label: "AI search optimization program",
        },
        ".",
      ],
      points: [
        "Project scope on every page",
        "License facts published",
        "Listings kept consistent",
        "AI answer audits",
      ],
      cta: "Check My Contractor AI Mentions",
      query: "who builds home additions near me",
      intro: "For home additions in your area,",
      bullets: [
        "Detailed home addition page",
        "Licensed and insured details",
        "Reviews describing finished builds",
      ],
    },
    leads: {
      title: "Contractor Bid Requests, Sorted by Source",
      body: [
        "Big projects start with a call or a bid form, sometimes weeks after the first visit. We log every lead with its landing page and search, add a request-a-bid button to project pages, and run ",
        { href: "/services/google-ads", label: "Google Ads for contractors" },
        " through quiet stretches.",
      ],
      points: [
        "Bid forms tagged by page",
        "Call tracking by project",
        "Commercial vs residential",
        "Monthly signed-work report",
      ],
      cta: "Show Me Where My Bids Come From",
      items: [
        ["Home addition call", "Google Maps", "Mon 7:45 AM"],
        ["Basement bid form", "Basement page", "Tue 1:15 PM"],
        ["Tenant build-out request", "AI Overview link", "Wed 8:30 AM"],
        ["Whole-home remodel call", "Town page", "Thu 2:50 PM"],
      ],
    },
  },
  results: {
    title: "Where General Contractors Gain Ground With Zonic",
    lead: "Profile repairs come first, then project pages, case studies and reviews that draw better bid requests.",
    cta: "Lay Out My Contractor Growth Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Contractor Profile Rebuilt",
        text: "We settle the primary category, service counties and project photos, so Google reads the builds you actually take on.",
      },
      {
        when: "Month 1",
        title: "Contractor Project Pages Go Live",
        text: "Pages for additions, basements, whole-home remodels and build-outs launch and begin competing for project searches.",
      },
      {
        when: "Months 2–4",
        title: "GC Case Studies Earn Trust",
        text: "Case pages with scope and photos, plus completion reviews, help your firm move up Maps in more towns.",
      },
      {
        when: "First season",
        title: "Better Contractor Bids Coming In",
        text: "More bid requests for the project types you prefer, each logged with the page and search it came from.",
      },
    ],
    wins: [
      {
        icon: "clipboard",
        title: "More Bid Requests for Major Projects",
        text: "Owners searching additions, basements and tenant build-outs land on pages built around that exact project.",
      },
      {
        icon: "building",
        title: "Commercial Contractor Work From Search",
        text: "Tenant improvement and build-out pages give property managers a direct path to request a commercial bid.",
      },
      {
        icon: "award",
        title: "A Contracting Name Owners Recognize",
        text: "Project pages, completion reviews and local links make your firm familiar before the first site visit.",
      },
      {
        icon: "repeat",
        title: "Less Dependence on Contractor Referrals Alone",
        text: "Search adds inquiries between referrals, so a quiet month is less likely to leave crews waiting.",
      },
    ],
  },
  compare: {
    title: "How Zonic Differs for General Contractors and Builders",
    lead: "What contracting firms often receive from SEO providers, set beside our approach.",
    rows: [
      {
        topic: "Project-type contractor pages",
        other: "One services page listing every trade, with no project depth.",
        zonic:
          "Separate pages for additions, basements, whole-home remodels and build-outs, each with local projects.",
      },
      {
        topic: "Commercial contractor bids",
        other:
          "Commercial work mixed into homeowner pages, so business buyers rarely find it.",
        zonic:
          "Tenant improvement and build-out pages, with commercial bid requests tracked apart from residential calls.",
      },
      {
        topic: "Home builder listings",
        other:
          "New-construction builders treated like remodelers, with no plan or community pages.",
        zonic:
          "Floor plan, lot and community pages, plus a profile for your model home or office.",
      },
      {
        topic: "Contractor case studies",
        other:
          "Portfolio photos without scope, town or timeline, so they rarely rank.",
        zonic:
          "A page per notable build with scope, timeline, town and photos, marked up with schema.",
      },
      {
        topic: "Contractor bid tracking",
        other:
          "Traffic summaries that never show which builds turned into bid requests.",
        zonic:
          "Calls and bid forms tagged by project page and search, with monthly reporting by project type.",
      },
      {
        topic: "GC agreement terms",
        other:
          "Multi-year or annual agreements, and listings sometimes registered to the agency.",
        zonic:
          "Month to month, and every profile, site and tracking account stays in your company's name.",
      },
    ],
  },
  steps: {
    title: "Our General Contractor SEO Plan, Step by Step",
    lead: "Profile and site repairs land first; project pages, case studies and reviews add up from there.",
    items: [
      {
        h: "Contractor Visibility Audit and Project Picks",
        p: "We review your profile, portfolio and site beside the firms and directories ranking in each town, then shortlist the project types to target.",
      },
      {
        h: "Fix the GC Profile, Publish Project Pages",
        p: "Categories, service area and speed get fixed in week one; project pages for additions, remodels and basements roll out next, with review requests at completion.",
      },
      {
        h: "Report Signed Work, Expand Contractor Pages",
        p: "You get a monthly view of rankings, calls, bid requests and signed jobs per project type; the strongest pages then get new content and links.",
      },
    ],
    audit: [
      ["Maps ranking", "behind"],
      ["Project pages", "gap"],
      ["Case studies", "open"],
      ["License info", "good"],
    ],
    plan: [
      "Addition page",
      "Basement page",
      "Town pages",
      "Case studies",
      "Links",
    ],
    launch: [
      "GC profile repaired",
      "Project pages live",
      "Case studies up",
      "Bids tracked",
    ],
  },
  explore: {
    title: "More Ways We Support GCs and Home Builders",
    lead: "Local SEO for general contractors works harder alongside a portfolio site and paid search for slow bid seasons.",
    items: [
      {
        name: "General Contractor Marketing",
        sub: "One plan for every division",
        href: "/services/general-contractor-marketing-agency",
        icon: "construction",
      },
      {
        name: "Contractor Websites",
        sub: "Show the builds behind a bid",
        href: "/services/general-contractor-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Bid requests this month",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Local SEO across home trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Run remodeling, roofing or restoration divisions too? We can cover them in one plan.",
  },
  reviews: {
    title: "Read the Reviews Behind Our 5.0 Google Rating",
    lead: "Taken directly from our Google profile, with nothing edited.",
  },
  pricing: {
    title: "SEO Plans for GCs, Billed Month to Month",
    compareTitle: "Compare GC and Builder SEO Plans",
    addOnsTitle: "Add-Ons for Contractors Bidding Commercial Work",
    customTitle: "Contracting Offices in Several Markets?",
  },
  faq: {
    title: "Common Questions About SEO for Contractors",
    lead: "Costs, timelines, commercial work, home builders and how construction SEO fits a referral business.",
    items: [
      {
        q: "What is contractor SEO?",
        a: "Contractor SEO is the work that helps owners and businesses find your firm when they search for a builder: Business Profile upkeep, a page per project type and per town, case studies, reviews and links. It is measured in bid requests and signed jobs, not traffic alone.",
      },
      {
        q: "How much does SEO for general contractors cost?",
        a: "Monthly plans are $297, $750 or $1,500, and none require a yearly commitment. A firm working one county often starts on the first; contractors with commercial divisions, several offices or managed Google Ads usually step up to a larger tier. Your free audit picks the fit by how crowded your county's results are.",
      },
      {
        q: "Does construction SEO work for commercial contractors?",
        a: "Yes. Commercial clients search for tenant improvements, build-outs and ground-up projects, often with a location attached. We build pages for those project types, add the capability details buyers look for, and track commercial bid requests separately from homeowner calls.",
      },
      {
        q: "How long does general contractor SEO take?",
        a: "Profile changes and new project pages usually register on Maps first, within weeks. “General contractor near me” and similar broad terms are crowded with directories, so they usually take several months. Large projects have long decision windows, so a ranking earned now may produce a signed contract months later.",
      },
      {
        q: "Should a general contractor use a broad or specific Business Profile category?",
        a: "Use General Contractor as primary only if broad contracting is most of your revenue. Firms that mainly build homes, finish basements or remodel often do better with that specific category first and General Contractor as a secondary. We test the setup against who already ranks in your towns.",
      },
      {
        q: "Do you offer home builder SEO?",
        a: "Yes. Builders need pages for floor plans, communities, available lots and the towns they build in, plus a profile set up for a model home or office. Buyers research for months, so we also write guides on building timelines and choosing a lot that lead to a consultation.",
      },
      {
        q: "How do contractors get project photos and case studies to rank?",
        a: "Give each notable project its own page with the town, scope, timeline and photos, then link it from the matching service page. Captions and alt text describe the work, and schema marks it up. Those pages rank for local searches and give AI tools concrete facts to cite.",
      },
      {
        q: "Can AI assistants recommend a general contractor?",
        a: "They already do. When owners ask ChatGPT or Gemini for a contractor, the answers lean on project pages, license details, consistent listings and reviews describing scope. Firms that publish those facts plainly on their own site tend to get named ahead of firms relying on referrals alone.",
      },
      {
        q: "Do you do local SEO for remodeling contractors too?",
        a: "Yes. Remodeling contractors and residential remodelers get the same groundwork with pages built around kitchens, baths, basements and whole-home work. If you run separate remodeling and new-build divisions, each gets its own pages and tracking so leads land with the right team.",
      },
      {
        q: "What should you expect from an SEO company for contractors?",
        a: "From a general contractor SEO company, expect clear reporting, full ownership and no lock-in. Our plans renew month to month, every account stays in your company's name, and each report details the work done and the bid requests it produced. If results stall, you can stop at any time.",
      },
    ],
  },
  audit: {
    title: "Free SEO Review for Your Contracting Business",
    lead: [
      "Share your website and the builds you want more of, from additions to tenant improvements. We'll map your Maps rank across your service area, weigh your project pages and reviews against the firms winning those searches, and email a plain plan. Get to know ",
      { href: "/about", label: "who we are" },
      " or see ",
      { href: "/services", label: "what else we do" },
      ".",
    ],
    points: [
      "Maps rank across your area",
      "Project keyword gaps",
      "Category and profile check",
      "First-month priorities",
    ],
    form: {
      formType: "local-seo",
      badge: "Free GC search audit",
      title: "Request Your GC Search Audit",
      subtitle: "Free, with no obligation to sign.",
      submitText: "Send My Contractor Audit",
      messageLabel: "Your website and main project types",
      messagePlaceholder:
        "yourwebsite.com, the projects you want and the areas you build in",
    },
  },
  banner: {
    title: "Win the Search Before the Bid Goes Out",
    lead: "Page-one projects, AI recommendations and a bid log that shows where every request began.",
  },
};
