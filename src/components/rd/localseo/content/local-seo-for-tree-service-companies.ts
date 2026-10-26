/* Local SEO for Tree Service Companies — redesign draft copy (26 Oct 2026).
   Fresh copy; never reuse the live page, the electricians reference, the
   seo-services-2 draft or /services/tree-service-marketing-agency-2
   (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: tree service seo 858 impressions
     (pos 28.7) · tree service seo company 469 (21.8) · tree service seo
     agency 326 (20.9) · local seo for tree service 275 (25.2) · tree
     removal seo 238 (31.7) · local seo for tree services 169 · tree
     service seo experts 154 · tree service local search optimization 141
     · tree service seo services 130.
   - Semrush US: tree service seo 590 (KD 14) · tree removal seo 210 (9) ·
     arborist seo 40 (8) · seo for tree service 20.
   - Web research (tree service SEO guides and agency pages): all stress a
     page per service and per town and the urgency of storm searches, but
     none cover arborist credentials or insurance as trust signals, and
     storm pages are a passing mention. Live listings use both "Tree
     service" and "Arborist service" as primary categories. Customer
     searches: tree removal near me, stump grinding near me, emergency tree
     removal, tree trimming, tree fell on house, arborist near me. Those
     findings became the storm-page and credentials cards, the
     storm-timing, category and credentials FAQs, and the phone hero.
   - Title keeps "Tree Service SEO" (live title and top GSC term) with
     "company" (469) and "tree removal SEO"; H1 uses the head term. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-tree-service-companies",
  audience: "Tree service companies and arborists",
  serviceName: "Local SEO for Tree Service Companies",
  meta: {
    title: "Tree Service SEO Company | Tree Removal SEO Services",
    description:
      "Tree service SEO for removal and storm crews: Maps rankings, town and storm pages, arborist credentials, reviews and AI answers that bring urgent calls.",
    keywords: [
      "tree service seo",
      "tree service seo company",
      "tree removal seo",
      "local seo for tree service",
      "tree service seo agency",
      "local seo for tree services",
      "tree service seo services",
      "tree service seo experts",
      "tree service local search optimization",
      "arborist seo",
    ],
  },
  hero: {
    h1Lead: "Tree Service SEO",
    h1Rest: "That Gets Your Crew Called First",
    icon: "tree",
    lead: [
      "A split oak or leaning pine sends homeowners to their phones, and they call one of the first listings they see. Our local SEO for tree companies puts you there: a sharp ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", removal and storm pages, insured-crew proof and reviews from every street you work.",
    ],
    cta: "Get My Free Tree Service Audit",
    ui: {
      kind: "growth",
      maps: "pin",
      ai: "voice",
      growth: "calls",
      business: "Your Tree Service",
      category: "Tree service",
      query: "tree removal near me",
      aiPrompt: "Who can remove a fallen tree near me today?",
      aiReasons: ["Storm cleanup crews", "Insured and certified"],
      growthLabel: "Tree service calls",
      leads: [
        ["Fallen tree call", "Google Maps"],
        ["Removal estimate", "Voice search"],
        ["Stump grinding quote", "Service page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 nearby",
          title: "The First Tree Crew on the Map",
          text: "After a storm, your pin and Call button lead the local results.",
        },
        {
          label: "Voice & AI",
          badge: "Suggested",
          title: "Suggested When a Tree Comes Down",
          text: "Voice assistants and AI tools name you for removals and storm cleanup.",
        },
        {
          label: "Calls",
          badge: "Storm weeks",
          title: "Calls That Climb Every Storm Week",
          text: "Removal and cleanup calls rise with each storm and trace to their source.",
        },
      ],
    },
  },
  searches: {
    title: "What People Search When a Tree Needs to Come Down",
    lead: "Pages and profile details follow the exact words homeowners use when a tree starts to worry them.",
    groups: [
      {
        icon: "storm",
        label: "Emergency tree searches",
        terms: [
          "emergency tree removal near me",
          "tree fell on house",
          "storm damage tree removal",
          "tree on power line who to call",
          "24 hour tree service",
          "fallen tree cleanup",
        ],
      },
      {
        icon: "tree",
        label: "Tree removal and care searches",
        terms: [
          "tree removal near me",
          "stump grinding near me",
          "tree trimming service",
          "dead tree removal",
          "arborist near me",
          "land clearing service",
        ],
      },
      {
        icon: "pin",
        label: "Tree service searches by town",
        terms: [
          "tree service + your city",
          "tree companies near me",
          "certified arborist + your town",
          "tree service open now",
          "hoa tree maintenance",
          "commercial tree service",
        ],
      },
    ],
  },
  services: {
    title: "Tree Service SEO Services for\nRemoval, Trimming and Storm Work",
    lead: "Six jobs we run every month so homeowners, HOAs and property managers reach your crew before anyone else.",
    cta: "Audit My Tree Service Website",
    items: [
      {
        icon: "pin",
        title: "Tree Service Business Profile Setup",
        desc: "Tree service or arborist as primary category, emergency hours, every town in your service area and crew photos posted after real jobs.",
        points: [
          "Arborist category check",
          "Emergency hours set",
          "Crew photo posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile tuning",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
      {
        icon: "storm",
        title: "Storm Damage and Emergency Tree Pages",
        desc: "Fallen-tree, storm cleanup and emergency removal pages for each key town, with click-to-call at the top and answers on insurance claims.",
        points: [
          "Town storm pages",
          "Call button up top",
          "Insurance claim FAQs",
        ],
        links: [
          {
            href: "/services/tree-service-website-design",
            label: "Tree service website design",
          },
        ],
      },
      {
        icon: "tree",
        title: "Tree Removal SEO and Service Pages",
        desc: "Removal, trimming, stump grinding, land clearing and tree health each get a page, written around how homeowners describe the problem.",
        points: [
          "Removal and stump pages",
          "Trimming and pruning page",
          "Problem-led headings",
        ],
        links: [],
      },
      {
        icon: "shield",
        title: "Fast, Trusted Tree Service Websites",
        desc: "Pages open quickly on a phone with the power out, show insurance and arborist credentials up front, and carry schema that names every town.",
        points: [
          "Mobile speed fixes",
          "Credentials up front",
          "Town-level schema",
        ],
        links: [
          { href: "/services/web-design", label: "Websites that load fast" },
        ],
      },
      {
        icon: "star",
        title: "Tree Service Reviews and Citations",
        desc: "Review requests after each cleanup, replies to every review, and identical business details wherever homeowners look you up.",
        points: [
          "Post-cleanup review asks",
          "Reply to every review",
          "Directory consistency",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile recovery",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Tree Service Companies",
        desc: "Plain answers on removal permits, dead-tree warning signs and storm response, so assistants and Google's AI Overviews point worried homeowners to your crew.",
        points: [
          "Permit and hazard answers",
          "Storm response facts",
          "AI mention reviews",
        ],
        links: [{ href: "/services/ai-seo-services", label: "AI search work" }],
      },
    ],
  },
  growth: {
    title: "How Local SEO for Tree Service Brings Steadier Work",
    lead: "Storm season or not, our SEO for arborists and tree crews brings better map positions, AI mentions and a busier phone for removal work.",
    rank: {
      title: "Rank Higher for Removal and Stump Grinding Jobs",
      body: [
        "Searches get mapped by job and town first: removal, trimming, stump grinding, storm cleanup. Pages are then built or rewritten to win them, and every target is checked weekly so you know which towns now send calls.",
      ],
      points: [
        "Job-by-town keyword map",
        "Weekly position checks",
        "Storm term targets",
        "Competitor coverage gaps",
      ],
      cta: "Find My Tree Service Keyword Gaps",
      keywords: [
        ["tree removal near me", 23, 3],
        ["stump grinding + your city", 30, 2],
        ["emergency tree service", 18, 1],
        ["tree trimming near me", 26, 4],
      ],
    },
    ai: {
      title: "Make AI Assistants Recommend Your Tree Crew",
      body: [
        "Assistants recommend tree companies that state insurance, credentials and service towns plainly and agree across listings. We write direct answers on permits, hazard signs and storm response, add structured data and track mentions through our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Hazard-sign answers",
        "Insurance facts stated",
        "Listings that agree",
        "Mention tracking",
      ],
      cta: "Check My AI Tree Mentions",
      query: "who removes fallen trees near me",
      intro: "For fallen tree removal nearby,",
      bullets: [
        "Insured, certified crew",
        "Storm cleanup page",
        "Recent cleanup reviews",
      ],
    },
    leads: {
      title: "See Which Storm and Removal Pages Bring Calls",
      body: [
        "Calls and quote forms are tied to the exact page and search behind them, so you see what storm week really produced. Phone pages get a bigger call button, and ",
        {
          href: "/services/google-ads",
          label: "Google Ads for tree companies",
        },
        " can add reach the morning after a storm.",
      ],
      points: [
        "Storm call tracking",
        "Large mobile call button",
        "Quote form on each page",
        "Monthly call report",
      ],
      cta: "Show Me Where Tree Calls Start",
      items: [
        ["Fallen tree call", "Google Maps", "Sun 6:48 AM"],
        ["Stump grinding quote", "Stump page", "Mon 11:20 AM"],
        ["Hazard tree call", "AI Overview link", "Tue 9:37 AM"],
        ["Trimming estimate form", "Town page", "Thu 2:55 PM"],
      ],
    },
  },
  results: {
    title: "What Tree Service Owners Notice After Zonic",
    lead: "The order usually runs: profile and hours fixed, storm and removal pages live, then a busier phone.",
    cta: "Build My Tree Service Plan",
    milestones: [
      {
        when: "First weeks",
        title: "Hours and Categories Corrected",
        text: "Tree service category, emergency hours and every town you cover get fixed, so storm searchers can find you.",
      },
      {
        when: "First month",
        title: "Storm and Removal Pages Up",
        text: "Storm cleanup, removal and stump pages go live with a call button and insurance details near the top.",
      },
      {
        when: "Through storm season",
        title: "Climbing Map Spots by Town",
        text: "Cleanup reviews and local links tend to push your listing higher in the towns where crews want work.",
      },
      {
        when: "Following seasons",
        title: "Calls Between Storms Too",
        text: "More removal, trimming and stump calls in calm weeks, each tied to the page or search behind it.",
      },
    ],
    wins: [
      {
        icon: "storm",
        title: "Ready When the Storm Passes",
        text: "Storm pages and current emergency hours put your crew in front of homeowners with a tree down.",
      },
      {
        icon: "tree",
        title: "More Planned Removal and Pruning Work",
        text: "Homeowners comparing quotes for removals, stump grinding and pruning reach pages that answer their safety worries.",
      },
      {
        icon: "shield",
        title: "Trust Before the First Visit",
        text: "Insurance, arborist credentials and cleanup photos are visible online, so nervous homeowners feel safer calling.",
      },
      {
        icon: "trend",
        title: "Fewer Leads Shared With Rivals",
        text: "More calls come straight from Maps and your site rather than lead lists sold to several tree companies.",
      },
    ],
  },
  compare: {
    title: "Tree Crews: Zonic Compared With Generic SEO Firms",
    lead: "How our tree care work stacks up against the SEO many removal companies are sold.",
    rows: [
      {
        topic: "Storm-ready pages",
        other: "No emergency pages until a storm hits, when it is too late.",
        zonic:
          "Storm cleanup and emergency removal pages built in calm months, with click-to-call up top.",
      },
      {
        topic: "Emergency hours on Maps",
        other:
          "Profile hours left at weekday defaults, even for crews answering storm calls.",
        zonic:
          "Emergency hours set and updated as storms hit, alongside every town you actually serve.",
      },
      {
        topic: "Insurance and credentials",
        other: "Credentials buried on an about page homeowners never open.",
        zonic:
          "Insurance, arborist certifications and safety practices shown on service pages and your profile.",
      },
      {
        topic: "Removal vs pruning searches",
        other:
          "Removal, trimming and stump grinding lumped onto one services page.",
        zonic:
          "A page per job, written around how homeowners describe a dead, leaning or fallen tree.",
      },
      {
        topic: "Storm-week call tracking",
        other:
          "Monthly traffic totals that hide what storm week actually brought in.",
        zonic:
          "Each storm call and quote form logged by source, so busy weeks are measurable.",
      },
      {
        topic: "Leaving whenever you like",
        other: "Long agreements that outlast a slow winter for tree work.",
        zonic:
          "You can leave any month, and every login, listing and page belongs to you.",
      },
    ],
  },
  steps: {
    title: "How Our Tree Service SEO Company Gets You Ranked",
    lead: "Fast fixes come first; storm pages, crew reviews and local links stack up after that.",
    items: [
      {
        h: "Tree Service Audit Across Your Towns",
        p: "Your profile, website and the tree companies outranking you are reviewed town by town, and the removal jobs worth chasing first are listed.",
      },
      {
        h: "Storm-Ready Tree Pages and Profile Fixes",
        p: "Week one fixes hours, categories and site errors. Storm, removal and stump pages come next, each with a call button at the top.",
      },
      {
        h: "Tree Service Reports and Next Moves",
        p: "Monthly reporting shows calls, quotes and rankings by job and town, and effort moves toward the storm and removal work that pays.",
      },
    ],
    audit: [
      ["Maps position", "behind"],
      ["Storm pages", "gap"],
      ["Review asks", "open"],
      ["Phone speed", "behind"],
    ],
    plan: [
      "Storm pages",
      "Removal page",
      "Stump page",
      "Reviews",
      "Local links",
    ],
    launch: [
      "Hours fixed",
      "Storm pages live",
      "Review asks sent",
      "Calls tracked",
    ],
  },
  explore: {
    title: "More Ways to Grow a Tree Service Company",
    lead: "Pair your rankings with a site built for storm traffic and ads for the busiest weeks.",
    items: [
      {
        name: "Tree Service Marketing",
        sub: "Leads from every channel, one plan",
        href: "/services/tree-service-marketing-agency",
        icon: "tree",
      },
      {
        name: "Tree Service Websites",
        sub: "Fast pages for storm traffic",
        href: "/services/tree-service-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads for Storms",
        sub: "Reach when the weather turns",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services SEO Hub",
        sub: "Local SEO across outdoor trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Offer firewood, mulch or plant health care too? One plan can cover it.",
  },
  reviews: {
    title: "Tree Service Owners, Check Our 5.0-Rated SEO Team",
    lead: "Owner reviews from our Google profile, posted exactly as written.",
  },
  pricing: {
    title: "Tree Company SEO Plans Without Long Contracts",
    compareTitle: "Compare Tree Care SEO Plans",
    addOnsTitle: "Storm-Season Add-Ons for Tree Services",
    customTitle: "Running Several Tree Crews or Yards?",
  },
  faq: {
    title: "Tree Service SEO Agency Questions, Answered",
    lead: "Storm timing, categories, credentials and costs for tree care companies.",
    items: [
      {
        q: "What is local SEO for tree services?",
        a: "Local SEO for tree services means being the crew Google shows first when someone nearby searches for removal, trimming or storm help. It combines profile work, storm and service pages, town pages, reviews, consistent listings and local links, all measured by the calls they bring.",
      },
      {
        q: "How much does tree service SEO cost?",
        a: "Pricing is $297, $750 or $1,500 a month, never locked in. One-crew operators often start small; multi-county outfits, or those who want ads run during storm season, usually go bigger. After the free audit we suggest the plan that matches your area and goals.",
      },
      {
        q: "How fast can a tree company rank after a storm?",
        a: "Not overnight, which is why storm pages should exist before the weather turns. Pages that are already indexed and linked can surface within hours of a storm, while brand-new ones take weeks. We build them in the quiet months and update hours and posts as storms hit.",
      },
      {
        q: "Should a tree company pick Tree service or Arborist service on Google?",
        a: "Most companies use Tree service as primary; firms led by certified arborists who focus on tree health sometimes choose Arborist service. Keep extra categories to work your crews actually perform, list each service separately and set emergency hours if you answer calls after dark.",
      },
      {
        q: "Should a tree service have a page for every town?",
        a: "For the towns that matter, yes. Map rankings weaken with distance from your address, so a page with real local jobs, photos and reviews helps you compete in each town. Copy-paste pages with just the town name changed rarely earn trust from Google or homeowners.",
      },
      {
        q: "Do arborist credentials help tree service SEO?",
        a: "They help conversions and AI answers more than rankings directly. Listing certifications, insurance and safety practices on your site and profile reassures homeowners hiring for dangerous work, and assistants such as ChatGPT often mention those details when they recommend a crew.",
      },
      {
        q: "Can ChatGPT and Google AI recommend my tree company?",
        a: "Yes, if the signals line up. AI answers draw on clear service pages, matching listings, steady reviews and direct answers to questions like when a tree becomes dangerous. Crews that already lead the local map usually earn those mentions first, so one effort feeds both.",
      },
      {
        q: "Do you offer tree removal SEO for commercial accounts?",
        a: "Yes. HOAs, property managers and municipalities search for contract pruning, right-of-way clearing and storm response agreements. We give those services their own pages and profile entries and track commercial inquiries separately, so you can see how the contract side grows.",
      },
      {
        q: "What makes a tree service SEO expert worth hiring?",
        a: "Look for someone who knows the trade: storm seasons, insurance worries, arborist credentials and the gap between removal and pruning searches. Ask for month-to-month terms, reports tied to calls and full ownership of your profile and site. We offer all three.",
      },
      {
        q: "Is there a contract for tree service SEO?",
        a: "No. You pay month to month, own every account, and see in each report what was changed. Some tree companies scale back in deep winter and ramp up before spring storms; the plan bends with your season.",
      },
    ],
  },
  audit: {
    title: "Get a Free Map Check for Your Tree Service",
    lead: [
      "List the towns you cover and the tree work you want. We measure your map spots, storm pages and reviews against nearby crews and send a plan you can act on. Read ",
      { href: "/about", label: "about our team" },
      " or view ",
      { href: "/services", label: "our services" },
      ".",
    ],
    points: [
      "Map spots by town",
      "Storm page gaps",
      "Profile and hours review",
      "A clear starting plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free tree service ranking audit",
      title: "Book a Free Tree Company Audit",
      subtitle: "Free, fast and without a contract.",
      submitText: "Send My Tree Service Audit",
      messageLabel: "Your website and the tree work you want",
      messagePlaceholder:
        "yourwebsite.com, removal or trimming focus, and the towns you serve",
    },
  },
  banner: {
    title: "First on the Map When the Next Storm Hits",
    lead: "Removal and storm rankings, AI mentions and tracked calls, reported every month in plain words.",
  },
};
