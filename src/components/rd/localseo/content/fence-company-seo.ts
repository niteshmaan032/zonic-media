/* Fence Company SEO — new live page (5 Nov 2026), Local SEO template.
   Brief: docs/fence-and-inspector-brief-2026-11.md (keyword map, AEO + GEO
   section) and docs/local-seo-redesign-brief.md (template rules, Round 2).
   Fresh copy; never reuse wording from other local SEO pages or the two
   fence siblings (/services/fence-company-marketing-agency and
   /services/fence-company-website-design).

   Research, 5 Nov 2026 (reports/research/fence-keywords-2026-11.md):
   - Semrush US: fence company seo 590 (KD 2) · fence contractor seo 210
     (4) · seo for fencing companies 140 (0) · fencing seo services 90 (4)
     · seo for fence companies 70 · local seo for fence installers 70 ·
     fence company seo agency 70 (9) · local seo for fence companies 40 ·
     gmb seo for fence companies 40.
   - Search Console (sc-domain, 3 months, no fence page yet): "gmb
     optimization for fence companies" (pos 16) and "gmb seo for fence
     companies" (pos 68), so GMB + Google Business Profile wording is used.
   - Customer demand: near-me searches dominate (fence company / fence
     installation / fence repair near me), then material searches (vinyl,
     chain link, wood, pool, aluminum, privacy), gates, and quote, estimate,
     cost-calculator and financing intent.
   - Web research (top results for "fence company seo", fence GBP guides,
     homeowner hiring guides, AI-visibility guides): "Fence contractor" is
     the agreed primary category; homeowners search by material rather than
     "fence company"; permit, HOA and survey questions come before the
     call; repair and gates keep slow months busy; AI answers lean on
     reviews, consistent listings and local sources. Most ranking pages
     skip repair/gate funnels and AI search, which became their own cards,
     FAQs and the AEO + GEO section.
   - Keyword map: this page owns the SEO terms; "marketing agency" and
     "website design" stay on the siblings, linked with keyword anchors. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/fence-company-seo",
  audience: "Fence companies and fence contractors",
  serviceName: "Fence Company SEO",
  meta: {
    title: "Fence Company SEO Agency | Local SEO for Fence Contractors",
    description:
      "Fence company SEO for installers who want more estimates: GMB optimization, vinyl, wood and repair pages, reviews and AI answers that put your crew first.",
    keywords: [
      "fence company seo",
      "fence contractor seo",
      "seo for fencing companies",
      "fencing seo services",
      "seo for fence companies",
      "local seo for fence installers",
      "local seo for fence companies",
      "fence company seo agency",
      "gmb seo for fence companies",
      "fence company google business profile",
    ],
  },
  hero: {
    h1Lead: "Fence Company SEO",
    h1Rest: "That Books More Installs",
    icon: "fence",
    lead: [
      "Homeowners choose a fence installer from the Map Pack, a material search or an AI answer. Our fence contractor SEO tunes your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      " for every fence you build, adds material and town pages, and turns finished jobs into reviews that name the work.",
    ],
    cta: "Get My Free Fence SEO Audit",
    ui: {
      kind: "growth",
      maps: "grid",
      ai: "voice",
      growth: "pipeline",
      business: "Your Fence Co.",
      category: "Fence contractor",
      query: "fence company near me",
      aiPrompt: "Who installs vinyl privacy fences near me?",
      aiReasons: ["Vinyl and cedar fence pages", "Reviews naming fence jobs"],
      growthLabel: "Fence estimates this week",
      leads: [
        ["Cedar privacy fence", "Google Maps"],
        ["Pool fence estimate", "AI assistant"],
        ["Gate repair request", "Repair page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Area-wide top 3",
          title: "Top Three Across Your Service Area",
          text: "Fence contractor category, service towns and job photos lift your pin in every neighborhood.",
        },
        {
          label: "Voice & AI",
          badge: "Suggested",
          title: "Suggested When Homeowners Ask Aloud",
          text: "Voice and chat assistants name your crew for vinyl, wood and pool fence questions.",
        },
        {
          label: "Estimates",
          badge: "More jobs won",
          title: "Quote Requests Moving to Signed Jobs",
          text: "Estimates from Maps, AI answers and material pages move from new to won.",
        },
      ],
    },
  },
  searches: {
    title: "Fence Searches Homeowners Type Before Calling a Crew",
    lead: "Few people type “fence company” alone. They name the material, the problem or the gate, and we match each phrase with a page or a profile service.",
    groups: [
      {
        icon: "pin",
        label: "Near-me fence installer searches",
        terms: [
          "fence company near me",
          "fence installation near me",
          "fence builders near me",
          "fence contractors near me",
          "best fence company near me",
          "fence installers near me",
        ],
      },
      {
        icon: "fence",
        label: "Fence material and style searches",
        terms: [
          "vinyl fence installation",
          "chain link fence installation",
          "wood fence installation",
          "aluminum fence installation",
          "privacy fence installation",
          "pool fence installation",
        ],
      },
      {
        icon: "gate",
        label: "Fence repair, gate and quote searches",
        terms: [
          "fence repair near me",
          "gate installation near me",
          "fence estimate",
          "fence quote",
          "fence cost calculator",
          "fence financing",
        ],
      },
    ],
  },
  services: {
    title: "Fencing SEO Services Your Crew\nGets Every Month",
    lead: "Six workstreams aimed at the fence jobs you want more of: residential installs, repairs, gates, pool enclosures and farm or commercial runs.",
    cta: "Review My Fence Website Free",
    items: [
      {
        icon: "pin",
        title: "GMB SEO for Fence Companies",
        desc: "Fence contractor as the primary category, each fence type and gate service listed, real service towns set and project photos added every week.",
        points: [
          "Fence contractor category",
          "Gate services listed",
          "Photos sorted by material",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify a fence listing",
          },
        ],
      },
      {
        icon: "fence",
        title: "Fence Material and Style Pages",
        desc: "A page for each fence you sell, from vinyl and cedar privacy to chain link, aluminum and pool, with real installs, heights and upkeep notes.",
        points: [
          "Vinyl and wood pages",
          "Pool and aluminum pages",
          "Farm and commercial lanes",
        ],
        links: [
          {
            href: "/services/fence-company-website-design",
            label: "Fence company website design",
          },
        ],
      },
      {
        icon: "repair",
        title: "Fence Repair and Gate Opener Pages",
        desc: "Year-round pages for leaning posts, storm-bent panels, sagging gates and automatic openers, so repair searches keep calling through the slow months.",
        points: [
          "Post and panel repair",
          "Gate opener service",
          "Storm damage updates",
        ],
        links: [],
      },
      {
        icon: "map",
        title: "Local SEO for Fence Installers by Town",
        desc: "Pages for the towns you build in, each with nearby jobs, permit and HOA notes, and the soil or frost details that change your posts.",
        points: [
          "Permit and HOA notes",
          "Local job photos",
          "Service-area coverage",
        ],
        links: [{ href: "/services/web-design", label: "Sites built to rank" }],
      },
      {
        icon: "star",
        title: "Fence Review Requests After Walkthrough",
        desc: "After the final walkthrough, homeowners get a short text asking them to mention the fence style, their town and how tidy the crew left the yard.",
        points: [
          "Walkthrough review texts",
          "Material named in reviews",
          "A reply to every review",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended fence listing",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for Fence Contractors",
        desc: "Plain answers on permits, property lines, HOA rules and how long each material lasts, marked up so AI Overviews and ChatGPT can quote you.",
        points: [
          "Permit and survey answers",
          "FAQ and Service schema",
          "Monthly AI answer checks",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI SEO services",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How SEO for Fencing Companies Wins More Backyards",
    lead: "Higher Map Pack spots for fence searches, your name in AI answers about permits and materials, and every estimate request traced to where it began.",
    rank: {
      title: "Climb for Vinyl, Wood and Chain Link Searches",
      body: [
        "We group fence searches by material, job size and town, then build or repair the page with the best chance at each. Installation, repair, gate and pool fence terms are tracked weekly, so you see which neighborhoods move first and which rival still holds the top spot.",
      ],
      points: [
        "Searches grouped by material",
        "Weekly tracking by town",
        "Repair and gate watchlist",
        "Rival page gaps",
      ],
      cta: "Find My Fence Ranking Gaps",
      keywords: [
        ["fence company near me", 22, 3],
        ["vinyl fence installation", 34, 4],
        ["fence repair near me", 19, 2],
        ["pool fence installers", 41, 6],
      ],
    },
    ai: {
      title: "Get Named in AI Answers About Fence Projects",
      body: [
        "AI Overviews and ChatGPT favour pages that settle fence questions directly: do I need a permit, how close to the property line can it go, vinyl or wood. We write those answers, add schema and keep your listings consistent wherever homeowners look.",
      ],
      points: [
        "Permit and HOA answers",
        "Material comparison FAQs",
        "Consistent fence listings",
        "Assistant answers reviewed",
      ],
      cta: "See If AI Names My Fence Crew",
      query: "do i need a permit to build a fence",
      intro: "For a permitted backyard fence near you,",
      bullets: [
        "Permit and HOA guide on its site",
        "Reviews that name fence installs",
        "Matching details on every listing",
      ],
    },
    leads: {
      title: "Trace Each Fence Estimate Back to Its Search",
      body: [
        "Rankings only matter when estimate requests arrive. Each call and quote form carries a tag for the page, the town and the search behind it, the form asks for fence type and rough length up front, and our ",
        {
          href: "/services/fence-company-marketing-agency",
          label: "fence company marketing",
        },
        " plan can add paid ads when you need volume fast.",
      ],
      points: [
        "Calls tagged by page",
        "Fence type on every form",
        "Tap-to-call on phones",
        "Monthly estimate sources",
      ],
      cta: "See Which Pages Book My Estimates",
      items: [
        ["Vinyl privacy estimate", "Google Maps", "Mon 7:15 AM"],
        ["Gate opener repair call", "Repair page", "Mon 1:40 PM"],
        ["Pool fence quote", "AI Overview link", "Tue 10:05 AM"],
        ["Chain link backyard call", "Town page", "Wed 4:20 PM"],
      ],
    },
  },
  aiSearch: {
    title: "AEO and GEO That Get Fence Installers Recommended",
    lead: [
      "Homeowners now ask ChatGPT, Gemini and Google’s AI Overviews which fence installer to hire. AEO makes your pages the quoted answer on permits, materials and gates; GEO makes your company the name the assistant suggests. Both run inside our ",
      { href: "/services/ai-seo-services", label: "AI SEO services" },
      ".",
    ],
    prompt:
      "I need a cedar privacy fence and a double drive gate. Which local fence installer should I call?",
    answer: "For a cedar privacy fence with a drive gate near you,",
    reasons: [
      "Cedar and gate project photos",
      "Reviews naming privacy fence jobs",
      "Same hours and towns everywhere",
    ],
    tactics: [
      {
        tag: "AEO",
        icon: "file",
        title: "Answer-First Fence FAQs",
        text: "Short, direct answers to permit, property line, HOA and material lifespan questions sit at the top of each page, written so assistants can lift them word for word.",
      },
      {
        tag: "AEO",
        icon: "ruler",
        title: "Fence Schema and Plain Explainers",
        text: "FAQ and Service markup on every material page, plus clear walk-throughs of measuring, estimates and installation day, so answer engines understand exactly what you offer.",
      },
      {
        tag: "GEO",
        icon: "layers",
        title: "Matching Fence Facts Across the Web",
        text: "Your name, phone, service towns, fence types and hours line up on Google, Bing, directories and supplier dealer locators, so assistants trust where you work.",
      },
      {
        tag: "GEO",
        icon: "star",
        title: "Fence Reviews and Project Proof",
        text: "Reviews that mention the fence type and neighborhood, plus fresh project pages with photos, give AI assistants local evidence to recommend your crew by name.",
      },
    ],
    cta: "Check My Fence AI Visibility",
  },
  results: {
    title: "What Changes for Fence Contractors With Zonic",
    lead: "The usual path for fence companies: profile fixes first, material pages next, then a fuller estimate list.",
    cta: "Plan My Fence Company Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Fence Listing Cleaned Up",
        text: "Categories, service towns, hours and gate photos get corrected, which helps Google connect your listing with fence installation searches.",
      },
      {
        when: "Month 1",
        title: "Material Pages Go Live",
        text: "Vinyl, wood, chain link, aluminum and repair pages publish, giving each fence search a page that can begin ranking.",
      },
      {
        when: "Months 2–4",
        title: "Fence Reviews Start Stacking",
        text: "Walkthrough texts bring in more reviews naming materials and towns, and your pin moves toward the top three.",
      },
      {
        when: "Spring build season",
        title: "A Busier Estimate List",
        text: "Estimate requests tend to climb as the building season opens, each one tagged to the page that earned it.",
      },
    ],
    wins: [
      {
        icon: "fence",
        title: "More Installs Booked From Search",
        text: "Homeowners weighing vinyl against wood reach your material pages first, not a lead site reselling their request.",
      },
      {
        icon: "repair",
        title: "Repair Calls in the Quiet Months",
        text: "Post, panel and gate repair pages keep the phone busy after the main build season winds down.",
      },
      {
        icon: "star",
        title: "Reviews That Describe the Fence",
        text: "A steady run of reviews naming cedar, vinyl or aluminum, plus the neighborhood, reassures the next family comparing installers.",
      },
      {
        icon: "sparkle",
        title: "Suggested by AI Assistants",
        text: "Clear permit, HOA and material answers make your fence company an easy pick for ChatGPT and AI Overviews.",
      },
    ],
  },
  compare: {
    title: "Picking a Fence Company SEO Agency: How We Compare",
    lead: "Six places fence contractors notice the gap between generic SEO work and ours.",
    rows: [
      {
        topic: "Pages for each fence material",
        other:
          "Often one fencing services page lumps vinyl, wood and chain link together.",
        zonic:
          "Separate vinyl, wood, chain link, aluminum and pool pages, each with real job photos.",
      },
      {
        topic: "Permit, HOA and survey content",
        other:
          "Usually skipped, leaving homeowner questions to city sites and forums.",
        zonic:
          "Plain permit, HOA and property line explainers that earn searches and AI citations.",
      },
      {
        topic: "Fence repair and gate searches",
        other:
          "Often ignored because installs look bigger, so repair demand goes elsewhere.",
        zonic:
          "Post, panel and gate opener pages that keep calls steady through slower seasons.",
      },
      {
        topic: "Fence contractor Business Profile",
        other:
          "Can be set up once with a generic contractor category and few photos.",
        zonic:
          "Fence contractor category, every fence and gate service listed, and weekly photos by material.",
      },
      {
        topic: "AI answers on fence questions",
        other: "Many plans stop at blue links and never check AI answers.",
        zonic:
          "AEO and GEO work so assistants quote your answers and suggest your crew by name.",
      },
      {
        topic: "Fence contract terms and ownership",
        other:
          "Often a long agreement, with the listing or site held by the agency.",
        zonic:
          "Billed monthly with no lock-in; the profile, site and every listing remain yours.",
      },
    ],
  },
  steps: {
    title: "Three Steps to Fence Rankings That Last",
    lead: "Fence SEO handled in order: listing fixes first, then material pages and reviews, then steady tuning before each build season.",
    items: [
      {
        h: "Audit Your Fence Listing and Rivals",
        p: "Your listing, website and the fence installers outranking you get checked town by town, then searches are ranked by material and job value.",
      },
      {
        h: "Fix, Build and Ask for Fence Reviews",
        p: "Profile and speed fixes land first; material, repair and town pages follow, and walkthrough review texts start going out to finished customers.",
      },
      {
        h: "Report Fence Estimates and Adjust",
        p: "Monthly reports split rankings, calls and estimate requests by town and fence type, and effort moves toward whatever wins signed jobs.",
      },
    ],
    audit: [
      ["Map Pack by town", "behind"],
      ["Material pages", "gap"],
      ["Fence review asks", "open"],
      ["Mobile quote form", "behind"],
    ],
    plan: [
      "Vinyl page",
      "Cedar privacy page",
      "Repair page",
      "Town pages",
      "Review texts",
    ],
    launch: [
      "Category set",
      "Material pages live",
      "Reviews arriving",
      "Estimates tracked",
    ],
  },
  explore: {
    title: "Other Ways We Help Fence Contractors Grow",
    lead: "Local SEO for fence companies works best beside a site that converts, a strong profile and visibility in AI answers.",
    items: [
      {
        name: "Fence Company Marketing",
        sub: "Ads, SEO and leads in one plan",
        href: "/services/fence-company-marketing-agency",
        icon: "fence",
      },
      {
        name: "Fence Company Websites",
        sub: "Sites built to win estimates",
        href: "/services/fence-company-website-design",
        icon: "monitor",
      },
      {
        name: "GMB Optimization",
        sub: "Business Profile tuning and upkeep",
        href: "/local-seo-google-business-optimization",
        icon: "pin",
      },
      {
        name: "AI SEO Services",
        sub: "Get named in ChatGPT and AI Overviews",
        href: "/services/ai-seo-services",
        icon: "sparkle",
      },
    ],
    other:
      "Also build decks or pergolas? One plan can cover every outdoor service your crew sells.",
  },
  reviews: {
    title: "Fence Contractors, See Why Clients Rate Us 5.0 on Google",
    lead: "Real words from business owners who hired us, shown straight from our Google profile.",
  },
  pricing: {
    title: "Fencing SEO Plans With No Long Contract",
    compareTitle: "Compare Plans for Fence Installers",
    addOnsTitle: "Add-Ons for Busy Fence Seasons",
    customTitle: "Fence Crews in More Than One Metro?",
  },
  faq: {
    title: "Fence Company SEO Questions Owners Ask Us Most",
    lead: "Costs, timelines, Google Business Profile and AI answers, explained for fence installers.",
    items: [
      {
        q: "What is fence company SEO?",
        a: "Fence company SEO means making a fencing business easy to find, and easy to choose, when homeowners nearby look for an installer. It covers your Google Business Profile, a page for every material and service town, reviews describing the job and listings that match everywhere. The payoff is Map Pack placement and first-page rankings for install and repair searches.",
      },
      {
        q: "How much does SEO for fence companies cost?",
        a: "Plans are $297, $950 or $1,500 a month with no long contract. One-crew installers in a single town often begin on the first plan; companies covering several counties, or wanting Google Ads run beside SEO, tend to pick the larger two. Your free audit points to the right fit.",
      },
      {
        q: "How long does fence contractor SEO take to work?",
        a: "Profile fixes and new material pages can lift Map Pack placement within a few weeks, while competitive near-me searches in a big metro often take six months or longer. Starting before the spring build season gives pages time to be indexed before homeowners request quotes, and your monthly report shows each move.",
      },
      {
        q: "What does GMB optimization do for a fence company?",
        a: "It makes your listing the one Google trusts for fence searches. We set Fence contractor as the primary category, list each fence type and gate service, add your real service towns, post job photos by material and keep hours and booking links current. Those signals drive most near-me Map Pack results.",
      },
      {
        q: "Should a fence company have a separate page for each material?",
        a: "Yes. Homeowners usually know the fence they want before they search, so a vinyl privacy page, a chain link page and a pool fence page each match a different search. Every page should show real installs, heights, styles and upkeep, rather than one general fencing page trying to rank for all of them.",
      },
      {
        q: "Can fencing SEO bring in repair and gate jobs?",
        a: "Yes, and they matter most in slower months. Searches for leaning posts, broken panels and storm damage run all year, and gate or automatic opener searches carry clear intent. Dedicated repair and gate pages, plus matching Business Profile services, help keep the phone ringing after the install rush.",
      },
      {
        q: "Do permit, HOA and survey guides help a fence company rank?",
        a: "They do. Homeowners look up permit rules, HOA approval and survey questions before they call a fence installer. Plain, accurate explainers earn those searches and are the kind of answers AI Overviews quote. We keep them general, point readers to the local permit office and never give legal advice about property boundaries.",
      },
      {
        q: "How do fence companies get recommended by ChatGPT and AI Overviews?",
        a: "AI assistants lean on what the web says about you: consistent business details, reviews naming the fence type and town, clear service pages and mentions on trusted local sites. We tighten each of those, add FAQ and Service markup, and check monthly how assistants answer fence questions in your area.",
      },
      {
        q: "Can a local fence installer outrank directories and lead sites?",
        a: "Often, yes, in the Map Pack and for town-specific searches. Directories rank for broad terms, but Google’s map results favour nearby businesses with strong profiles, reviews and relevant pages. A focused fence contractor with real job content can hold those spots and lean less on shared leads.",
      },
      {
        q: "Is there a long contract for fence company SEO?",
        a: "No. Every plan is month to month, and fence contractors stay because estimates and rankings improve, not because of paperwork. Your Business Profile, website and listings remain in your company’s name, and each monthly report lists exactly what changed and why.",
      },
    ],
  },
  audit: {
    title: "See Where Your Fence Company Ranks, Free",
    lead: [
      "Send your website and the fence work you want more of. We compare your Map Pack spots, material pages and reviews with the fence installers ahead of you, then send back a short plan. Many fence owners like to meet ",
      { href: "/about", label: "the team behind Zonic" },
      " first, or compare how we run ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home services",
      },
      ".",
    ],
    points: [
      "Map Pack spot per town",
      "Missing fence material pages",
      "Profile category check",
      "First-month fix list",
    ],
    form: {
      formType: "fence-company-seo",
      badge: "Free fence SEO audit",
      title: "Request My Fence Ranking Review",
      subtitle: "Plain advice, no contract and no pressure.",
      submitText: "Send My Fence Ranking Review",
      messageLabel: "Your website and the fence jobs you want",
      messagePlaceholder:
        "yourwebsite.com, fence types you install and the towns you serve",
    },
  },
  banner: {
    title: "Be the First Fence Crew Homeowners Find",
    lead: "Map Pack spots, material pages and AI answers working together, reported in plain language every month.",
  },
};
