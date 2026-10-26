import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* GENERAL CONTRACTOR MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("General Contractor Marketing
   Agency") opens the new title, and every phrase in the live keywords
   meta sits in the title, H1, an H2/H3 or an FAQ question.
   Web research (25 Oct): owners search "general contractor near me",
   "home addition builder", "home renovation contractor" and "kitchen
   remodel contractor"; top agency pages cover referral dependence, long
   sales cycles, visual proof, trust and credentials, and competition
   from specialty remodelers; commercial clients send RFPs to firms they
   find on Google. Common questions: which channels work best, how to
   compete with specialists, how important a portfolio is.
   Angle vs sibling remodel drafts: work beyond referrals, whole-home
   remodels, additions and commercial build-outs. No niche photos, so
   the hero uses tiles.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "general-contractor-marketing-agency-2",
  liveUrl: "/services/general-contractor-marketing-agency",
  niche: "General Contractor",
  meta: {
    title: "General Contractor Marketing Agency | Contractor SEO & Leads",
    description:
      "Zonic Media is a general contractor marketing agency: contractor SEO, Google Maps rankings and Google Ads that win whole-home remodels, additions and build-outs.",
    keywords: [
      "general contractor marketing agency",
      "marketing agency for contractors",
      "marketing agency for construction company",
      "marketing for general contractors",
      "marketing company for contractors",
      "construction marketing agency",
      "contractor seo",
      "contractor lead generation",
      "general contractor marketing company",
      "general contractor advertising agency",
      "general contractor internet marketing",
      "general contractor lead generation",
      "general contractor seo",
      "construction company marketing",
      "general contractor website design",
    ],
  },
  palette: PALETTES.amberSlate,
  hero: {
    h1Lead: "General Contractor",
    h1Icon: "construction",
    h1Rest: "Marketing Agency for Bigger, Steadier Projects",
    lead: [
      "Referrals are great until they slow down. We give general contractors a second source of work with contractor SEO, Google Ads, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile management",
      },
      " and a ",
      {
        href: "/services/general-contractor-website-design",
        label: "contractor website",
      },
      " that shows homeowners and property owners why you can be trusted with a big build.",
    ],
    cta: "Get My Free Contractor Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "A top-3 spot on the map",
        sub: "For remodel, addition and build searches near you",
        chips: ["Additions", "Whole-home remodels", "Basements", "Build-outs"],
      },
      left: {
        icon: "briefcase",
        title: "Bigger projects",
        sub: "Additions and full remodels, not handyman calls",
      },
      right: {
        icon: "building",
        title: "Commercial bids",
        sub: "Build-out requests from owners and tenants",
      },
      bottom: {
        title: "Work beyond referrals",
        sub: "A steady flow of projects you didn't have to chase",
      },
    },
  },
  services: {
    title: "General Contractor Internet Marketing That Wins Larger Jobs",
    lead: "Search, ads, site and reviews aimed at the projects worth bidding.",
    cta: "Audit My Contractor Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for General Contractors",
        desc: "Correct contractor categories, project types listed as services, mapped service areas and job-site photos, so your listing ranks for big projects.",
        points: [
          "Contractor categories corrected",
          "Job-site photo posts",
          "Verification for new offices",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization for contractors",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Business Profile verification",
          },
        ],
      },
      {
        icon: "search",
        title: "Contractor SEO",
        desc: "Pages for additions, whole-home remodels, basements and commercial work in every town you build in, plus citations and link building.",
        points: [
          "Project-type pages",
          "Town-by-town targeting",
          "Citations and links",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-general-contractors",
            label: "Local SEO for general contractors",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO across home trades",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Remodels and Build-Outs",
        desc: "Campaigns aimed at homeowners planning major projects and owners seeking build-out contractors, with small-repair and job-seeker searches excluded.",
        points: [
          "Large-project keywords",
          "Commercial search campaigns",
          "Spend billed without markup",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "Contractor Websites That Prove You Can Deliver",
        desc: "Project pages with photos, scope and timeline, license and insurance details up front, and a form that qualifies each inquiry.",
        points: [
          "Case-study project pages",
          "Licenses and insurance shown",
          "Qualifying inquiry form",
        ],
        links: [
          {
            href: "/services/general-contractor-website-design",
            label: "General contractor website design",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Reputation for GCs",
        desc: "Requests at project closeout ask clients to describe scope, communication and finish, the details big-project buyers look for.",
        points: [
          "Closeout review requests",
          "Replies in your voice",
          "Reviews on project pages",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile reinstatement",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for General Contractors",
        desc: "Homeowners ask AI tools to suggest a general contractor. We make your licenses, projects and reviews easy for them to confirm.",
        points: [
          "Licenses and areas stated clearly",
          "Project-rich reviews",
          "Answer-led pages",
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
    title: "General Contractor Lead Generation Beyond Word of Mouth",
    lead: "Maps, AI answers and paid search each bring a different kind of project to your door.",
    rows: [
      {
        title: "Rank on Maps for Additions, Remodels and Build-Outs",
        body: [
          "A search for a general contractor nearby shows three map listings before anything else. We fix your categories, list each project type as a service, post job-site progress photos and track rankings in the towns you build in, so your listing lands among those three.",
        ],
        points: [
          "General contractor category",
          "Project types as services",
          "Progress photo posts",
          "Town-level rank tracking",
        ],
        cta: "See My Contractor Map Rank",
        ui: {
          kind: "maps",
          query: "general contractor near me",
          city: "Nashville",
          category: "General contractor · Licensed & insured",
        },
      },
      {
        title: "Be the GC That AI Assistants Recommend for Major Projects",
        body: [
          "Homeowners planning an addition increasingly ask AI tools such as Gemini and ChatGPT to name a reliable general contractor. Those answers favor companies with clear licensing, project pages and reviews describing finished builds. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO program" },
          " puts those signals in place across the web.",
        ],
        points: [
          "License and insurance details",
          "Project pages by type",
          "Reviews describing finished builds",
          "Consistent company details",
        ],
        cta: "Check How AI Sees My Company",
        ui: {
          kind: "ai",
          query: "reliable general contractor for a home addition in nashville",
          intro: "For home additions in Nashville,",
          bullets: [
            "Licensed and fully insured",
            "Design, permits and build in one contract",
            "Weekly progress updates",
          ],
        },
      },
      {
        title: "Google Ads That Bring Calls for Big Builds, Not Small Fixes",
        body: [
          "Paid search can flood a contractor with handyman requests. We build campaigns around addition, whole-home remodel and build-out searches, exclude small-repair terms, and route calls to your estimator, logging the project type of every inquiry.",
        ],
        points: [
          "Large-project keywords only",
          "Handyman terms excluded",
          "Calls routed to your estimator",
          "Project type logged",
        ],
        cta: "Plan My Contractor Ads",
        ui: {
          kind: "calls",
          title: "Project calls from ads this week",
          calls: [
            {
              service: "Two-story home addition",
              source: "Google Ads",
              when: "Mon 10:22 AM",
            },
            {
              service: "Whole-home remodel",
              source: "Google Ads · Call",
              when: "Wed 3:05 PM",
            },
            {
              service: "Retail tenant build-out",
              source: "Google Ads",
              when: "Fri 8:47 AM",
            },
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Contractor Lead Generation That Belongs to You",
    body: [
      "Shared lead sites pass one homeowner's project to several contractors and reward the lowest bid. As part of our ",
      { href: "/services", label: "full-service marketing" },
      ", we build inquiries that come only to you, through your rankings, ads and website.",
    ],
    cta: "Build My Own Project Pipeline",
    colShared: "Shared lead sites",
    colOwn: "Leads you own",
    rows: [
      ["Who sees the project", "Several GCs competing", "Only your estimator"],
      [
        "What wins the bid",
        "The lowest number",
        "Your portfolio and track record",
      ],
      ["Size of the work", "Mostly small jobs", "Additions and full remodels"],
      ["Brand they remember", "The lead site", "Your company name"],
      [
        "After you stop paying",
        "Nothing is left",
        "Rankings and reviews keep working",
      ],
    ],
  },
  specialties: {
    title: "Marketing for General Contractors, Project Type by Project Type",
    lead: "Additions, gut remodels and tenant build-outs each have a different buyer, so every project type gets its own pages and campaigns.",
    items: [
      {
        icon: "home",
        name: "Home Additions",
        tactic: "Second-story and bump-out pages ranked in each town",
      },
      {
        icon: "construction",
        name: "Whole-Home Remodels",
        tactic: "Before-and-after case studies with scope and timeline",
      },
      {
        icon: "foundation",
        name: "Basement Finishing",
        tactic: "Seasonal campaigns aimed at families needing more space",
      },
      {
        icon: "kitchen",
        name: "Kitchen & Bath Remodels",
        tactic: "Room-specific galleries linked from your project hub",
      },
      {
        icon: "building",
        name: "Commercial Build-Outs",
        tactic: "Tenant-improvement pages and bid forms for property owners",
      },
      {
        icon: "hammer",
        name: "Custom Home Construction",
        tactic: "Lot-to-keys process pages for custom home buyers",
      },
      {
        icon: "waterDamage",
        name: "Restoration & Insurance Repairs",
        tactic: "Storm and water damage pages for claim-driven searches",
      },
      {
        icon: "yard",
        name: "Decks, Porches & Outdoor Living",
        tactic: "Spring campaigns and photo posts for outdoor builds",
      },
    ],
    more: "Building ADUs, garages or historic renovations? Each can have its own page.",
  },
  steps: {
    title: "Three Steps Toward a Steadier Project Pipeline",
    lead: "We start with fixes that produce inquiries soonest, then build the authority that keeps big projects coming.",
    items: [
      {
        h: "We Measure Your Visibility Town by Town",
        p: "We search your main project types across your service area, see where you rank on Maps, compare your site and reviews with competing contractors and show what's losing you bids.",
      },
      {
        h: "We Pick the Projects That Pay Best",
        p: "Together we decide which project types, towns and commercial work to push first, matched to your crew capacity and the jobs you'd rather turn down.",
      },
      {
        h: "We Launch and Report on Signed Work",
        p: "Profile fixes, project pages, ads and closeout review requests go live, and every month you see inquiries, site visits scheduled and the projects they became.",
      },
    ],
    audit: [
      ["Maps rank: general contractor near me", "behind"],
      ["Project pages by type", "gap"],
      ["Reviews describing finished builds", "behind"],
      ["Commercial build-out searches", "open"],
    ],
    plan: [
      "Additions",
      "Whole-home remodels",
      "Build-outs",
      "Nashville",
      "Franklin",
    ],
    launch: [
      "Contractor categories fixed",
      "Project case studies live",
      "Inquiry form qualifies leads",
      "Closeout review texts on",
    ],
  },
  reviews: {
    title: "Contractors and Local Owners Review Our Work",
    lead: "These come straight from our Google Business Profile, rated 5.0 by our clients.",
  },
  pricing: {
    title: "General Contractor Marketing Plans on Monthly Terms",
    compareTitle: "Compare Plans for General Contractors",
    addOnsTitle: "Add Campaigns for New Project Types",
    customTitle: "Building in several metros?",
  },
  faq: {
    title: "Answers for General Contractors Weighing an Agency",
    lead: "On leads, SEO, ads, AI search, commercial work and how our plans run.",
    items: [
      {
        q: "What does a general contractor marketing company actually do?",
        a: "It builds a steady flow of project inquiries that doesn't depend on referrals. That includes Maps rankings, contractor SEO pages for each project type and town, Google Ads for major projects, a portfolio website, closeout reviews and reporting that ties inquiries to signed contracts. You see which channels bring the projects you actually want.",
      },
      {
        q: "Why hire a marketing agency for contractors instead of relying on referrals?",
        a: "Referrals are high quality but unpredictable, and they rarely bring the new project types or towns you want to grow into. An agency builds search visibility you control, so slow referral months don't leave crews idle, and you can steer toward larger work. Referral partners still matter; marketing simply stops them being your only source.",
      },
      {
        q: "What should a marketing company for contractors focus on first?",
        a: "Your Google Business Profile and reviews, because they decide whether you appear and get chosen on Maps. Next come project pages on your website, then Google Ads for the work you want most. Fixing those basics usually brings the quickest change in inquiry quality. Content and link building can follow once those are solid.",
      },
      {
        q: "Is contractor SEO worth it for a general contractor?",
        a: "Yes, especially for high-value work. Homeowners research additions and full remodels for a long time, and ranking pages keep reaching them without a per-click charge. Contractor SEO also lifts your Maps visibility and your presence in AI answers, so the effort pays back across several channels.",
      },
      {
        q: "How does a construction marketing agency win commercial build-out work?",
        a: "With pages aimed at property owners, tenants and facility managers, case studies of finished spaces, a bid-request form and search ads on commercial terms. Commercial buyers check capacity, safety and references, so we put licenses, insurance and project scope where they can find them quickly. Relationships with architects and property managers can be supported with dedicated pages.",
      },
      {
        q: "Do you act as a marketing agency for construction company owners with several divisions?",
        a: "Yes. Residential, commercial and specialty divisions each get their own pages, keywords and campaigns, so homeowners and commercial clients see messaging built for them. Reporting is split the same way, letting you see which division's marketing produces inquiries and signed work. Shared assets like reviews still strengthen every division.",
      },
      {
        q: "What makes a good general contractor advertising agency?",
        a: "Focus on the right projects, honest tracking and no hidden fees. A good partner targets large-project searches, excludes handyman and DIY clicks, records every call and form, and bills ad spend at cost. Our markup is 0%, so your full ad budget reaches Google. Reports show which project types each campaign produced.",
      },
      {
        q: "How can general contractors appear in ChatGPT or Gemini recommendations?",
        a: "Make your company easy to verify. Keep your name, address, phone, licenses and service areas identical across listings, earn reviews that describe real projects and publish pages answering common homeowner questions. AI tools rely on exactly those signals to suggest a contractor. Photos of finished projects with clear captions help too.",
      },
      {
        q: "What do your general contractor marketing plans cost?",
        a: "$1,500 a month buys our Authority tier, Growth is $750 and Foundation is $297, all billed month to month, and Google invoices your ad spend directly at 0% markup. Contractors running several project types plus Google Ads usually choose Growth or Authority.",
      },
      {
        q: "Can you recover a suspended Business Profile for a contracting company?",
        a: "Yes. Our team has reinstated 900+ suspended profiles, and contractors are often flagged over service-area or address issues. We find the cause, fix the listing, file the appeal with documents and keep the profile compliant afterward. Reinstatement is included with every plan. Most cases start with a review of your listing history.",
      },
    ],
  },
  audit: {
    title: "Free General Contractor Marketing Audit for Your Market",
    lead: [
      "We review your Maps rank for project searches, Business Profile, website, reviews and ads next to the contractors above you, then rank the fixes by impact. ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Profile reinstatement",
      },
      " is covered, and we serve ",
      { href: "/industries", label: "20+ industries" },
      ", construction included.",
    ],
    points: [
      "Plans from $297 monthly",
      "0% ad-spend markup, always",
      "Month-to-month agreements",
      "Suspended profiles reinstated",
    ],
    form: {
      formType: "general-contractor-marketing",
      badge: "Free contractor audit",
      title: "Request Your Free General Contractor Marketing Audit",
      subtitle: "No cost, no contract, just findings.",
      submitText: "Send My Contractor Audit",
      messageLabel: "Your service area and the projects you want",
      messagePlaceholder:
        "Towns you build in, project types you want more of (additions, remodels, build-outs) and your crew capacity",
    },
  },
  banner: {
    title: "Keep Your Crews Booked Between Referrals",
    lead: "Your free audit points to the fixes that will bring larger projects soonest.",
    icons: ["construction", "hammer"],
  },
};
