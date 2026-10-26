import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* TREE SERVICE MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units were exhausted, so no ranking report or
   volumes were pulled. The live title's core term ("Tree Service Marketing
   Agency") leads the new title, and every phrase in the live keywords meta
   sits in the title, H1, an H2/H3 or an FAQ question.
   Web research (25 Oct): top agency pages cover post-storm lead capture,
   credential-led campaigns (insurance, arborist credentials), turning
   one-time removals into recurring pruning, commercial/HOA work, stump
   grinding and land clearing, Maps/GBP and AI search. Customers search
   "tree removal near me", "emergency tree removal", "stump grinding near
   me" and ask about insurance and credentials before hiring.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "tree-service-marketing-agency-2",
  liveUrl: "/services/tree-service-marketing-agency",
  niche: "Tree Service",
  meta: {
    title: "Tree Service Marketing Agency | Tree Service SEO, Ads & Leads",
    description:
      "Zonic Media is a tree service marketing agency for removal, trimming and arborist companies: Google Maps rankings, tree service SEO and storm-ready Google Ads.",
    keywords: [
      "tree service marketing agency",
      "tree service marketing company",
      "tree removal marketing agency",
      "tree service digital marketing",
      "local tree service marketing",
      "tree service seo",
      "tree service advertising agency",
      "best advertising for tree service",
      "tree service advertising ideas",
      "tree service internet marketing",
      "tree service lead generation",
      "tree service marketing",
      "marketing for tree service companies",
      "tree service google ads",
      "tree service website design",
    ],
  },
  palette: PALETTES.greenViolet,
  hero: {
    h1Lead: "Tree Service",
    h1Icon: "tree",
    h1Rest: "Marketing Agency for More Removal and Storm Calls",
    lead: [
      "After a windstorm, or when a limb hangs over the roof, homeowners call the first tree company they trust. We put yours there with tree service SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google profile optimization",
      },
      ", call-first Google Ads and ",
      {
        href: "/services/tree-service-website-design",
        label: "tree service websites",
      },
      " that show your insurance, crew and finished work.",
    ],
    cta: "Get My Free Tree Service Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Top of the map after storms",
        sub: "For removal, trimming and stump searches across your area",
        chips: ["Tree removal", "Trimming", "Stump grinding", "Storm cleanup"],
      },
      left: {
        icon: "call",
        title: "More storm-damage calls",
        sub: "Fallen trees and hanging limbs, day or night",
      },
      right: {
        icon: "tree",
        title: "Bigger removal jobs",
        sub: "Quote requests from homeowners ready to book",
      },
      bottom: {
        title: "Trimming clients who return",
        sub: "Pruning reminders that refill slow months",
      },
    },
  },
  services: {
    title: "Tree Service Marketing Company\nfor Removal and Trimming Work",
    lead: "Every channel, from the map tap after a storm to the neighbor's review.",
    cta: "Audit My Tree Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Tree Companies",
        desc: "Correct tree service categories, service areas, crew and equipment photos, and steady posts that push your listing up the local map.",
        points: [
          "Categories and services set",
          "Crew and job photos",
          "Profile verification help",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Optimize my Google profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Profile verification",
          },
        ],
      },
      {
        icon: "search",
        title: "Tree Service SEO",
        desc: "Pages for removal, trimming, stump grinding and storm cleanup in each town you work, plus directory listings and on-site fixes.",
        points: [
          "Service and town pages",
          "Directory citations",
          "Monthly rank reports by town",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-tree-service-companies",
            label: "Tree company local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Tree Service Google Ads",
        desc: "Call-first ads on emergency and removal searches, raised the moment a storm rolls through, with firewood and DIY clicks blocked.",
        points: [
          "Storm-triggered budgets",
          "Firewood and DIY negatives",
          "Every call recorded",
        ],
        links: [
          { href: "/services/google-ads", label: "Paid search management" },
        ],
      },
      {
        icon: "monitor",
        title: "Tree Service Website Design",
        desc: "Mobile sites that show your insurance, credentials and before-and-after photos, with a quote form on every page.",
        points: [
          "Quote form on every page",
          "Insurance and credentials shown",
          "Photo upload for quotes",
        ],
        links: [
          {
            href: "/services/tree-service-website-design",
            label: "Websites for tree companies",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Prove Safe, Clean Work",
        desc: "Every finished job triggers a Google review request, and our team drafts each reply, so homeowners see a careful, insured crew.",
        points: [
          "Requests after every job",
          "Owner replies drafted",
          "Review feed on your site",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service map rankings",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended listing",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "Tree Care Visibility in AI Answers",
        desc: "When someone asks an AI assistant for a trusted tree company, your listings, reviews and pages give it your name.",
        points: [
          "Listings that match",
          "Reviews naming the job",
          "Arborist FAQ answers",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI search visibility" },
        ],
      },
    ],
  },
  growth: {
    title: "Tree Service Digital Marketing That Rings After Every Storm",
    lead: "Maps, AI answers and call ads, set up before the wind picks up, so your crews hear the phone first when branches come down.",
    rows: [
      {
        title: "Hold a Top-3 Map Spot for “Tree Removal Near Me”",
        body: [
          "Homeowners with a split trunk or a limb on the fence pull up Google Maps and phone a crew near the top of the list. We refine your listing, publish pages town by town across the area you cover and keep fresh reviews arriving, so that crew is yours.",
        ],
        points: [
          "Tree service categories",
          "Town service pages",
          "Crew photos weekly",
          "Fake listings flagged",
        ],
        cta: "Check My Tree Map Rank",
        ui: {
          kind: "maps",
          query: "tree removal near me",
          city: "Atlanta",
          category: "Tree service · Emergency service",
        },
      },
      {
        title: "When Homeowners Ask ChatGPT Who to Hire for a Tree",
        body: [
          "A homeowner staring at a leaning oak may type the question into ChatGPT or Gemini before calling anyone. Our ",
          { href: "/services/ai-seo-services", label: "AI search work" },
          " hands those assistants proof to quote: consistent listings, reviews that describe the job, insurance details and clear pages on removal, trimming and stumps.",
        ],
        points: [
          "Matching business details",
          "Job-specific reviews",
          "Insurance shown clearly",
          "Removal and pruning FAQs",
        ],
        cta: "Test My AI Visibility",
        ui: {
          kind: "ai",
          query:
            "who can remove a large oak leaning toward my house in atlanta",
          intro: "For large and leaning tree removals in Atlanta,",
          bullets: [
            "Crane-assisted removals",
            "Fully insured crews",
            "Stump grinding on request",
          ],
        },
      },
      {
        title: "Storm Ads That Catch the Emergency Tree Calls",
        body: [
          "Storm demand arrives fast and fades in days. We raise Google Ads and Local Services Ads budgets as soon as high winds hit your area, keep call-only ads running after dark and match every call to the search behind it.",
        ],
        points: [
          "Weather-timed budgets",
          "After-hours call ads",
          "Local Services Ads",
          "Call recording",
        ],
        cta: "Plan My Storm Ads",
        ui: {
          kind: "calls",
          title: "Storm calls since last night",
          calls: [
            {
              service: "Oak on the garage roof",
              source: "Local Services Ads",
              when: "11:48 PM",
            },
            {
              service: "Limb across the driveway",
              source: "Google Ads · Call",
              when: "6:20 AM",
            },
            {
              service: "Stump grinding after cleanup",
              source: "Google Maps",
              when: "9:05 AM",
            },
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Tree Service Lead Generation You Don't Share",
    body: [
      "Many lead sites sell one storm job to several crews, then the homeowner picks whoever answers first or bids lowest. We build tree removal leads through your own rankings, ads and website, so callers have already chosen your company.",
    ],
    cta: "Get Exclusive Tree Leads",
    colShared: "Pay-per-lead sites",
    colOwn: "Leads you own",
    rows: [
      ["Who else bids", "Several local crews", "No one else"],
      [
        "What decides the job",
        "Lowest quote, fastest callback",
        "Your reviews and credentials",
      ],
      ["After the storm passes", "Leads dry up", "Rankings keep sending calls"],
      [
        "Repeat pruning work",
        "Starts from zero",
        "Reminders bring clients back",
      ],
    ],
  },
  specialties: {
    title: "Local Tree Service Marketing for Every Job Your Crews Handle",
    lead: "Emergency removals, planned pruning and land clearing come from different buyers, so we market each one on its own terms, with matching pages, ads and reminders.",
    items: [
      {
        icon: "storm",
        name: "Emergency Storm Removal",
        tactic: "Call-only ads that switch on with storm warnings",
      },
      {
        icon: "tree",
        name: "Tree Removal & Takedowns",
        tactic: "Removal pages with photo-upload quote requests by town",
      },
      {
        icon: "leaf",
        name: "Tree Trimming & Pruning",
        tactic: "Seasonal pruning reminders sent to past customers",
      },
      {
        icon: "construction",
        name: "Stump Grinding & Removal",
        tactic: "Add-on offers attached to every removal quote",
      },
      {
        icon: "inspect",
        name: "Arborist Consultations & Tree Health",
        tactic: "Disease and risk pages ranked for worried homeowners",
      },
      {
        icon: "shield",
        name: "Hazard & Dead Tree Removal",
        tactic: "Safety-first pages aimed at urgent hazard searches",
      },
      {
        icon: "yard",
        name: "Land & Lot Clearing",
        tactic: "Builder and landowner pages with acreage quote forms",
      },
      {
        icon: "building",
        name: "Commercial & HOA Tree Care",
        tactic: "HOA and municipal pages with contract-ready quote forms",
      },
    ],
    more: "Offer plant health care, cabling or firewood sales? Those get a plan too.",
  },
  steps: {
    title: "Your Tree Service Marketing Plan in Three Steps",
    lead: "Maps and ads usually move first; organic rankings then build month after month, storm season or not.",
    items: [
      {
        h: "Free Tree Service Market Audit",
        p: "We run removal, trimming and stump searches from inside your towns, then show your current spot, the crews listed above you and where calls are lost.",
      },
      {
        h: "A Plan Weighted to Profitable Work",
        p: "We rank the jobs and towns worth chasing first, leaning toward large removals and storm work instead of small, low-margin requests.",
      },
      {
        h: "Launch Everything, Then Track Jobs",
        p: "We switch on your profile fixes, pages for each town, storm call ads and review texts in one push. Each monthly report then covers rankings, calls, quotes requested and the jobs they produced.",
      },
    ],
    audit: [
      ["Maps rank: tree removal", "behind"],
      ["Profile categories and photos", "gap"],
      ["Storm ad coverage", "open"],
      ["Insurance shown on site", "gap"],
    ],
    plan: [
      "Tree removal",
      "Storm cleanup",
      "Stump grinding",
      "Atlanta",
      "Marietta",
    ],
    launch: [
      "Profile categories fixed",
      "Removal pages published",
      "Storm ads ready to switch on",
      "Review texts after each job",
    ],
  },
  reviews: {
    title: "Owners We Market Share Their Experience",
    lead: "Unedited words from service business owners, taken from the Google profile where we hold a 5.0 rating.",
  },
  pricing: {
    title: "Tree Service Marketing Plans Billed Monthly",
    compareTitle: "Tree Company Plans Side by Side",
    addOnsTitle: "Add Storm Campaigns When Weather Turns",
    customTitle: "Running tree crews in more than one region?",
  },
  faq: {
    title: "Tree Service Marketing FAQs",
    lead: "Leads, ads, rankings, AI tools and pricing, answered briefly.",
    items: [
      {
        q: "What will a tree service marketing agency handle for me?",
        a: "The work that gets your tree company picked when homeowners need help. Expect Maps ranking, service pages for removal, trimming and stumps, storm-triggered ads, review requests after each job and a website that shows your insurance and turns visits into quote requests.",
      },
      {
        q: "What is the best advertising for tree service companies?",
        a: "For most crews it is Google search and Local Services Ads on removal and emergency terms, backed by a top-three Maps listing. Ads bring storm calls fast, while Maps and reviews keep calls coming between storms without a fee per click. Door hangers near active jobs add neighbors who watched your crew work.",
      },
      {
        q: "What are good tree service advertising ideas for slow months?",
        a: "Send pruning and inspection reminders to past customers, offer stump grinding to homeowners who had a removal, publish seasonal tree health pages and run ads on planned work like trimming and lot clearing. Yard signs and truck wraps on active jobs help too.",
      },
      {
        q: "Why hire a tree removal marketing agency instead of a general one?",
        a: "Tree work has its own pattern: storm spikes, high-value removals and buyers who worry about safety and insurance. A specialist plans budgets around weather, filters firewood and DIY clicks and puts your credentials front and center, which general agencies tend to miss.",
      },
      {
        q: "What does a tree service advertising agency manage day to day?",
        a: "Keywords, budgets, ad copy, call tracking and negative lists. We watch the forecast to raise spend before storms, pause ads when crews are fully booked, test landing pages and report which searches produced booked removals rather than just clicks. You keep full ownership of the ad account.",
      },
      {
        q: "How long does tree service internet marketing take to work?",
        a: "Call-only ads and Google profile updates can bring calls within the first weeks. Organic rankings take longer, typically a few months, and move faster in less crowded areas. Each monthly report lays out rankings, calls and booked jobs, so progress is visible from the start.",
      },
      {
        q: "How do I prove my tree crew is insured and qualified online?",
        a: "Show it everywhere a homeowner looks: insurance and license details on your site, certified arborist credentials if your team holds them, photos of crews in safety gear and reviews that mention careful work. That reassures buyers and gives AI tools facts to repeat.",
      },
      {
        q: "Can ChatGPT recommend my tree service?",
        a: "Yes, once your details agree across the web. We make your business information match in every directory, collect reviews describing real removals and pruning jobs, and publish plain answers on tree health and safety. AI tools favor companies they can verify. Captioned photos of finished jobs help as well.",
      },
      {
        q: "How much does tree service marketing cost with Zonic Media?",
        a: "We offer three month-to-month plans, at $297, $750 and $1,500 each month. Ad spend is paid to Google with a 0% markup. Crews that only want map rankings start on the first tier; storm advertising and more towns usually call for a higher one.",
      },
      {
        q: "Can you get a suspended tree company listing back on Google?",
        a: "Yes. Reinstatement comes with all plans, and we've already recovered 900+ suspended listings. We trace what set off the suspension, correct the profile, appeal with evidence and keep it compliant afterward so it stays live.",
      },
    ],
  },
  audit: {
    title: "See Where Your Tree Company Ranks With a Free Audit",
    lead: [
      "We'll check where you rank for removal, trimming and storm searches, line up your reviews and website against the strongest crews nearby and name the first fixes. Browse all our ",
      { href: "/services", label: "growth services" },
      ", or see how we market ",
      {
        href: "/services/landscaping-marketing-agency",
        label: "landscaping companies",
      },
      " and the other ",
      { href: "/industries", label: "industries we serve" },
      ".",
    ],
    points: [
      "Billed month to month",
      "Plans begin at $297 monthly",
      "Zero markup on ad spend",
      "Suspension help on every plan",
    ],
    form: {
      formType: "tree-service-marketing",
      badge: "Free tree service audit",
      title: "Claim Your Tree Service Marketing Audit",
      subtitle: "Costs nothing, commits you to nothing.",
      submitText: "Send My Tree Audit",
      messageLabel: "Your towns and tree services",
      messagePlaceholder:
        "Areas you cover, jobs you want more of (removals, trimming, stumps) and whether you take storm calls",
    },
  },
  banner: {
    title: "Be the Tree Crew Neighbors Call First",
    lead: "A free audit shows which changes bring removal calls soonest.",
    icons: ["tree", "storm"],
  },
};
