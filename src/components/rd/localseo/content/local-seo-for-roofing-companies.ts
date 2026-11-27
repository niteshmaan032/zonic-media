/* Local SEO for Roofing Companies — redesign draft copy (26 Oct 2026).
   Fresh copy for the Local SEO dropdown family; never reuse the live
   page, the electricians reference or the roofing marketing draft wording
   (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: seo for roofing companies 520
     impressions (pos 47.7) · local seo for roofing companies 306 (40.7) ·
     roofing seo 296 (42.7) · seo for roofing company 268 · local seo for
     roofers 234 (38.2) · roofing company seo 228 · roofing contractor seo
     168 · roofing seo services 165 (34.0).
   - Semrush US: roofing seo 4,400 (KD 23) · seo for roofers 2,400 (10) ·
     roofing seo company 1,900 (21) · seo for roofing companies 1,900 (22)
     · roofing seo services 1,000 (40) · roofing contractor seo 480 (22) ·
     local seo for roofers 320 (17).
   - Web research (roofing SEO guides, roofer GBP guides, AI Overview
     guides): "Roofing contractor" / "Roofer" are the usual primary
     categories, with roof inspection and commercial roofing secondaries;
     city pages that only swap the town name are called out as thin; top
     pages skip storm/hail and insurance-claim content entirely, so that
     became its own service card and FAQ; AI answers lean on hail-damage,
     repair-vs-replace and warranty explanations, which shaped the AI row.
   - Title keeps "Local SEO for Roofing Companies" (live title + GSC) and
     adds "Roofing SEO Services"; H1 leads with the head term.

   Copy pass, 19 Nov 2026 (owner: no "inspection", it reads as our home
   inspection service; storm is not the theme):
   - Search Console, 3 months (16K impressions): roofing seo 1,471 (pos
     44.9) · seo for roofing companies 1,431 · roofing seo services 876 ·
     seo for roofing company 763 · roofing company seo 701 · local seo for
     roofing companies 681 · seo for roofing contractors 594 · local seo
     for roofers 379 · best roofing seo companies 269 · best roofing seo
     267 · best roofing seo company 228. None of 232 queries contains
     inspection or storm.
   - Semrush US: roofing seo 4,400 · seo for roofers 2,400 · roofer seo
     1,900 · roofing seo company 1,900 · roofing seo keywords 1,300 (KD 9)
     · roofing seo agency 880. Homeowner examples swapped to searches with
     volume: emergency roof repair 14,800, storm damage roof repair 9,900
     (kept once), roof replacement cost 27,100, roof replacement
     financing 1,900. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-roofing-companies",
  audience: "Roofers and roofing contractors",
  serviceName: "Local SEO for Roofing Companies",
  meta: {
    title: "Roofing SEO Services | Local SEO for Roofing Companies",
    description:
      "Roofing SEO services and local SEO for roofers: Google Maps rankings, repair and town pages, reviews and AI answers, with every call traced to the job.",
    keywords: [
      "roofing seo",
      "seo for roofers",
      "roofing seo company",
      "seo for roofing companies",
      "roofing seo services",
      "roofing contractor seo",
      "local seo for roofers",
      "local seo for roofing companies",
      "roofing company seo",
      "roofing local seo",
      "roofer seo",
      "roofing seo agency",
      "roofing seo keywords",
      "seo for roofing contractors",
      "best roofing seo company",
    ],
  },
  hero: {
    h1Lead: "Roofing SEO Services",
    h1Rest: "That Keep Your Roofing Crews Busy",
    icon: "roof",
    lead: [
      "We do SEO for roofers who want the call when a homeowner spots a leak, not a week later. Your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      " gets tuned for repair and replacement searches, every town you cover gets its own page, and reviews start naming the work.",
    ],
    cta: "Book a Free Roofing SEO Audit",
    ui: {
      kind: "growth",
      maps: "pin",
      ai: "chat",
      growth: "feed",
      business: "Your Roofing Co.",
      category: "Roofing contractor",
      query: "roof repair near me",
      growthLabel: "New roofing leads",
      aiPrompt: "Which roofing company near me fixes leaks fast?",
      aiReasons: ["Clear leak repair pages", "Steady homeowner reviews"],
      leads: [
        ["Roof repair estimate booked", "Google Maps"],
        ["Leak repair call", "AI Overview link"],
        ["Replacement quote request", "Roof replacement page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Rank #1",
          title: "First Pin on the Map for Roof Repair",
          text: "Profile fixes, town pages and reviews put your listing above nearby roofers.",
        },
        {
          label: "AI answers",
          badge: "Top pick",
          title: "Named When Homeowners Ask AI",
          text: "ChatGPT, Gemini and Google AI suggest your company for leak repairs and new roofs.",
        },
        {
          label: "Leads",
          badge: "More calls",
          title: "Estimates Booked Straight From Search",
          text: "Calls and quote requests arrive from Maps, AI answers and your town pages.",
        },
      ],
    },
  },
  searches: {
    title: "Roof Searches Homeowners Type Before They Call",
    lead: "Each phrase below gets a page, a profile signal or both, so your crew shows up from the first drip to the final estimate.",
    groups: [
      {
        icon: "repair",
        label: "Roof repair and leak searches",
        terms: [
          "roof leak repair near me",
          "emergency roof repair",
          "storm damage roof repair",
          "missing shingles repair",
          "water stain on ceiling after rain",
          "roof leaking around chimney",
        ],
      },
      {
        icon: "roof",
        label: "Roof replacement and material searches",
        terms: [
          "roof replacement near me",
          "metal roofing contractors near me",
          "roof replacement cost",
          "flat roof repair",
          "tile roof contractor",
          "new roof estimate",
        ],
      },
      {
        icon: "pin",
        label: "Local roofer lookups",
        terms: [
          "roofing company near me",
          "best roofer near me",
          "roofers in (your town)",
          "insurance claim roofer",
          "roof replacement financing",
          "commercial roofing contractor near me",
        ],
      },
    ],
  },
  services: {
    title: "What Our Roofing SEO Company\nHandles Each Month",
    lead: "Six workstreams, each aimed at the roofs you most want to sell: repairs, full replacements, metal roofs and commercial flat roofs.",
    cta: "Review My Roofing Site Free",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile Tuning for Roofers",
        desc: "Roofing contractor as the primary category, every repair, replacement and material service listed, service towns set, and fresh tear-off photos posted every week.",
        points: [
          "Roofing contractor category",
          "Every roof service listed",
          "Weekly tear-off photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile setup",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Profile verification",
          },
        ],
      },
      {
        icon: "search",
        title: "Roofing SEO Keyword Research",
        desc: "We size every roofing search in your towns, from leak repair to metal roof installs, and map each one to a page, a profile signal or both.",
        points: [
          "Roofing keyword map",
          "Searches sized by town",
          "Job value per search",
        ],
        links: [],
      },
      {
        icon: "file",
        title: "Roofing Town and Service Pages",
        desc: "Distinct pages for each suburb and roof type, with local job photos and details, never the same text with a swapped city name.",
        points: [
          "Repair and replacement pages",
          "Metal, tile and flat roofs",
          "Fast mobile load times",
        ],
        links: [
          {
            href: "/services/roofing-website-design",
            label: "Roofing website builds",
          },
          { href: "/services/web-design", label: "Sites built for search" },
        ],
      },
      {
        icon: "star",
        title: "Roof Review Requests and Replies",
        desc: "A text goes out when the dumpster leaves, asking homeowners to mention the roof type and town, and we answer every review.",
        points: [
          "Post-job text requests",
          "Roof type in reviews",
          "Answers to each review",
        ],
        links: [],
      },
      {
        icon: "layers",
        title: "Roofing Citations and Supplier Links",
        desc: "The same business details on every directory, plus manufacturer locator listings, chamber pages and links from sponsorships you already fund.",
        points: [
          "Directory cleanup",
          "Manufacturer locator listings",
          "Sponsorship links",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Fix a suspended roofer listing",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "Roofing Answers in AI Search",
        desc: "Plain answers on repair versus replace, roof costs and shingle warranties, so AI Overviews and ChatGPT name your roofing crew.",
        points: [
          "Repair and warranty answers",
          "Same roofer facts everywhere",
          "Roof query checks monthly",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI search for roofers",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Local SEO for Roofers Turns Searches Into Signed Roofs",
    lead: "Higher roofer Maps placement, your name in AI replies about roofing, and estimate calls tied to the page that earned them.",
    rank: {
      title: "Climb for Roof Repair and Replacement Searches",
      body: [
        "We sort roofing searches by job value and town, then write or repair whichever roof page has the best shot at each. Repair, replacement, metal and commercial terms get watched every week, so you see which towns move first and where a rival still sits above you.",
      ],
      points: [
        "Keywords sorted by job value",
        "Weekly town tracking",
        "Roofing keyword watchlist",
        "Competitor page gaps",
      ],
      cta: "Show My Roofing Keyword Gaps",
      keywords: [
        ["roof repair near me", 24, 3],
        ["roof replacement + your town", 31, 4],
        ["emergency roof repair", 18, 2],
        ["metal roof installers", 37, 5],
      ],
    },
    ai: {
      title: "Show Up in AI Answers About Roofing",
      body: [
        "AI Overviews and ChatGPT pull from pages that answer roofing questions plainly: repair or replace, what a new roof involves, what the warranty covers. We write those answers, mark them up and keep your listings consistent, as part of our ",
        { href: "/services/ai-seo-services", label: "AI SEO work" },
        ".",
      ],
      points: [
        "Repair-or-replace FAQs",
        "Warranty and material facts",
        "Matching listings everywhere",
        "AI mention tracking",
      ],
      cta: "Check My Roofing AI Mentions",
      query: "should I repair or replace my roof",
      intro: "For an honest repair-or-replace answer near you,",
      bullets: [
        "Repair vs replace guide with photos",
        "Recent reviews naming roof work",
        "Clear warranty details",
      ],
    },
    leads: {
      title: "Trace Every Roofing Call to Its Source",
      body: [
        "A ranking only pays when the phone rings. Each call and estimate request is tagged by page, town and search, your quote forms get shorter, and ",
        { href: "/services/google-ads", label: "Google Ads for roofers" },
        " can cover your busiest weeks.",
      ],
      points: [
        "Calls tagged by town",
        "Short estimate forms",
        "Tap-to-call on mobile",
        "Monthly source report",
      ],
      cta: "See Where My Roofing Calls Start",
      items: [
        ["Leak repair call", "Google Maps", "Mon 6:52 AM"],
        ["Estimate request", "Roof repair page", "Mon 11:20 AM"],
        ["Replacement estimate", "Town page", "Tue 9:02 AM"],
        ["Flat roof call", "AI Overview link", "Wed 2:35 PM"],
      ],
    },
  },
  results: {
    title: "What a Roofing Company Gains With Zonic SEO",
    lead: "The usual order for roofers: profile first, roof and town pages next, then steadier estimate calls.",
    cta: "Map Out My Roofing Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Roofer Profile Cleaned Up",
        text: "We correct categories, service towns and photos, so Google starts matching your listing to roof repair searches.",
      },
      {
        when: "Month 1",
        title: "Roof and Town Pages Publish",
        text: "Repair, replacement and town pages go live, giving each roofing search a page that can start ranking.",
      },
      {
        when: "Months 2–4",
        title: "Roofing Reviews Build Up",
        text: "Post-job texts bring in more reviews naming roof types, and your listing moves toward the top three.",
      },
      {
        when: "Busy season onward",
        title: "Busier Roofing Crews",
        text: "Repair and replacement calls tend to pick up, each one tagged so you can see which page earned it.",
      },
    ],
    wins: [
      {
        icon: "roof",
        title: "More Replacement Jobs From Search",
        text: "Homeowners planning a new roof land on your replacement pages instead of a shared lead site.",
      },
      {
        icon: "pin",
        title: "Seen Across Your Whole Service Area",
        text: "Town pages and weekly profile posts keep your crew visible in every suburb you cover.",
      },
      {
        icon: "star",
        title: "Reviews That Name the Roof",
        text: "Steady reviews mention shingles, metal or flat roofs and the town, helping the next homeowner decide.",
      },
      {
        icon: "sparkle",
        title: "Roofing Answers AI Tools Quote",
        text: "Clear cost, warranty and repair-or-replace pages give ChatGPT and AI Overviews a reason to mention your company.",
      },
    ],
  },
  compare: {
    title: "Roofing SEO With Zonic vs. a Generic SEO Firm",
    lead: "Where roofers usually feel the difference between a general SEO firm and our roofing local SEO team.",
    rows: [
      {
        topic: "Roofing keyword research",
        other:
          "Often a generic keyword list borrowed from another trade.",
        zonic:
          "Roof searches sized by town and job value, each mapped to its own page.",
      },
      {
        topic: "Insurance claim content for roofers",
        other:
          "Often skipped, or written with promises an insurer may never keep.",
        zonic:
          "Plain claim and adjuster explainers that earn searches without promising what any policy pays.",
      },
      {
        topic: "Roofing town pages",
        other:
          "Many sites get one template copied across towns with only the city swapped.",
        zonic:
          "Each town page carries local roof jobs, photos and permit notes worth ranking.",
      },
      {
        topic: "Roofer review requests",
        other:
          "Requests are often left to chance, so recent feedback stays thin.",
        zonic:
          "A text after every job asks homeowners to mention the roof type and their town.",
      },
      {
        topic: "Busy-season ad spend",
        other:
          "Agency fees tied to spend can climb right when budgets peak.",
        zonic:
          "Google Ads with a 0% markup on every dollar you spend.",
      },
      {
        topic: "Roofing contract length",
        other:
          "Often a long agreement signed before the work proves itself.",
        zonic:
          "Billed month to month; your profile, site and listings stay in your name.",
      },
    ],
  },
  steps: {
    title: "Three Steps to Roofing Rankings That Hold",
    lead: "Roofing contractor SEO done in order: fixes first, pages and reviews next, then steady tuning around your busy season.",
    items: [
      {
        h: "Roofing Market and Profile Audit",
        p: "We check your profile, site and the roofers above you in each town, then rank the searches worth chasing by job value.",
      },
      {
        h: "Build Roof Pages Before Your Busy Season",
        p: "Profile and speed fixes land in week one; repair, replacement and town pages follow, along with the post-job review texts.",
      },
      {
        h: "Report Roofing Leads and Double Down",
        p: "Your monthly roofing report splits rankings, calls and estimate requests by town and roof type, and effort shifts toward whatever books jobs.",
      },
    ],
    audit: [
      ["Maps rank by town", "behind"],
      ["Roof service pages", "gap"],
      ["Roof review asks", "open"],
      ["Phone page speed", "behind"],
    ],
    plan: [
      "Repair pages",
      "Metal roof page",
      "Town pages",
      "Review texts",
      "Supplier links",
    ],
    launch: [
      "Category fixed",
      "Roof pages live",
      "Reviews coming in",
      "Calls tagged",
    ],
  },
  explore: {
    title: "More Ways to Grow a Roofing Company",
    lead: "Local SEO for roofing companies works harder next to a fast website and paid ads for your busy weeks.",
    items: [
      {
        name: "Roofing Marketing",
        sub: "One plan across every channel",
        href: "/services/roofing-marketing-agency",
        icon: "roof",
      },
      {
        name: "Roofing Websites",
        sub: "Built to turn visits into estimates",
        href: "/services/roofing-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Ads on repair and replacement searches",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Roofing beside every exterior trade we rank",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other: [
      "Also install gutters or siding? Our ",
      { href: "/services/seo-for-contractors", label: "SEO services for contractors" },
      " cover every exterior trade you sell in one plan.",
    ],
  },
  reviews: {
    title: "Roofers, See Why Owners Rate Our Team 5.0 on Google",
    lead: "Unedited reviews from owners who hired us, pulled from our Google profile.",
  },
  pricing: {
    title: "Roofing SEO Plans Without Long Contracts",
    compareTitle: "Compare Plans for Roofing Contractors",
    addOnsTitle: "Extra Services for Roofing Contractors",
    customTitle: "Roofing in Several Metros?",
  },
  faq: {
    title: "Roofing SEO Questions From Contractors",
    lead: "Timelines, costs, keywords and Map Pack tactics, answered plainly for roofers.",
    items: [
      {
        q: "What is roofing SEO?",
        a: "Roofing SEO is the work that gets a roofing company found when nearby homeowners search: a tuned Google Business Profile, separate pages for every roof service and town, reviews that name the roof, and clean citations. Done well, it wins Map Pack spots and page-one results for repair and replacement searches.",
      },
      {
        q: "How much does SEO for roofing companies cost?",
        a: "Our three plans are $297, $950 and $1,500 a month, all month to month. A one-crew roofer in a single metro usually starts on the first; contractors covering several counties, or wanting Google Ads managed, lean toward the larger two. The free audit tells you which fits.",
      },
      {
        q: "How long until a roofer sees SEO results?",
        a: "Profile fixes and fresh roof repair pages can lift Maps placement within a few weeks. Head searches in a crowded metro can take six months or more. Launching pages before your busy season means they are already indexed when demand climbs, and your monthly report shows the movement.",
      },
      {
        q: "What roofing SEO keywords should a roofer target?",
        a: "Start with the money jobs plus your towns: roof repair near me, roof replacement with your city, emergency roof repair, metal roof installation and flat roof repair if you do commercial work. Each one is sized in your audit, and only the ones that lead to signed contracts get a page.",
      },
      {
        q: "What gets a roofing company into the top three on Google Maps?",
        a: "The right primary category, every service and town listed, real job photos, weekly posts and a steady flow of reviews that mention the work. Consistent listings on other directories and a dedicated page per service on your website do the rest.",
      },
      {
        q: "What makes the best roofing SEO company?",
        a: "Roofing-specific work and plain reporting. Look for a team that bills month to month, tracks calls and booked jobs rather than traffic, builds real town pages instead of copies, and keeps your profile and website in your name. Ask to see a sample monthly report before you sign.",
      },
      {
        q: "Do roofers need a separate page for each town?",
        a: "For the towns you want work in, yes, but each page needs real substance: local jobs, photos, permit notes and the roof types common there. Pages that only swap the city name tend not to rank and can drag the rest of the site down.",
      },
      {
        q: "Should a roofing website answer insurance claim questions?",
        a: "Yes. Homeowners look up how claims, adjusters and deductibles work before they call anyone. Plain, accurate answers on a claims page earn those searches and AI citations. We keep them general and never promise what an insurer will pay.",
      },
      {
        q: "Do you handle local SEO for roofers doing commercial work?",
        a: "Yes. Flat, TPO and metal roof jobs call for separate pages targeting property managers and facility owners. We add commercial categories to your profile, write those roof pages and keep commercial leads apart from residential calls in your report.",
      },
      {
        q: "Does a roofer have to sign a long SEO contract?",
        a: "No. Every roofing plan is month to month; roofers stay because rankings and calls improve, not because of paperwork. You keep ownership of the roofing profile, website and each listing, and every monthly report spells out what we changed.",
      },
    ],
  },
  audit: {
    title: "Check Your Roofing Rankings Town by Town, Free",
    lead: [
      "Send your website and the roof jobs you want most. We line up your Maps spots, pages and reviews against the roofers ranking above you, then return a short plan. Roofers often read ",
      { href: "/about", label: "about our team" },
      " first, or scan ",
      { href: "/services", label: "the full service list" },
      ".",
    ],
    points: [
      "Roofer Maps position per town",
      "Missing roofing pages",
      "Profile category review",
      "First-month priority list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free roofer SEO check",
      title: "Request My Roofing Rankings Check",
      subtitle: "No contract and no sales pressure.",
      submitText: "Send My Roofing Check",
      messageLabel: "Your website and the roofing work you want",
      messagePlaceholder:
        "yourwebsite.com, roof types you install and the towns you cover",
    },
  },
  banner: {
    title: "Own the Map for Roofer Searches Near You",
    lead: "Stronger town-by-town rankings and roof pages that convert, reported in plain numbers each month.",
  },
};
