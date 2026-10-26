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
     adds "Roofing SEO Services"; H1 leads with the head term. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-roofing-companies",
  audience: "Roofers and roofing contractors",
  serviceName: "Local SEO for Roofing Companies",
  meta: {
    title: "Roofing SEO Services | Local SEO for Roofing Companies",
    description:
      "Roofing SEO services for roofers who want more inspections: Google Maps rankings, storm and town pages, reviews and AI answers, with calls traced to each job.",
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
    ],
  },
  hero: {
    h1Lead: "Roofing SEO Services",
    h1Rest: "That Fill Your Inspection Schedule",
    icon: "roof",
    lead: [
      "We do SEO for roofers who want the call when shingles blow off, not a week later. Your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      " gets tuned for repair, replacement and inspection searches, every town you cover gets its own page, and reviews start naming the work.",
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
      aiPrompt: "Who should I call for hail damage on my roof?",
      aiReasons: ["Storm and hail repair pages", "Steady homeowner reviews"],
      leads: [
        ["Roof inspection booked", "Google Maps"],
        ["Hail damage call", "AI Overview link"],
        ["Replacement quote request", "Storm repair page"],
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
          text: "ChatGPT, Gemini and Google AI suggest your company for storm and leak repairs.",
        },
        {
          label: "Leads",
          badge: "More calls",
          title: "Inspections Booked Straight From Search",
          text: "Calls and quote requests arrive from Maps, AI answers and your storm pages.",
        },
      ],
    },
  },
  searches: {
    title: "Roof Searches Homeowners Type Before They Call",
    lead: "Each phrase below gets a page, a profile signal or both, so your crew shows up from the first drip to the final estimate.",
    groups: [
      {
        icon: "storm",
        label: "Storm and leak roof searches",
        terms: [
          "roof leak repair near me",
          "emergency roof tarp",
          "hail damage roof inspection",
          "wind damage shingles",
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
          "standing seam metal roof",
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
          "roof inspection for home sale",
          "commercial roofing contractor near me",
        ],
      },
    ],
  },
  services: {
    title: "What Our Roofing SEO Company\nHandles Each Month",
    lead: "Six workstreams, each aimed at the roofs you most want to sell: repairs, full replacements, storm work and commercial flat roofs.",
    cta: "Review My Roofing Site Free",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile Tuning for Roofers",
        desc: "Roofing contractor as the primary category, inspection and repair services listed, service towns set, and fresh tear-off photos posted every week.",
        points: [
          "Roofing contractor category",
          "Inspection services listed",
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
        icon: "storm",
        title: "Storm Damage Pages for Roofers",
        desc: "Hail, wind and leak pages written before storm season, ready to publish and promote the week a storm rolls through your area.",
        points: [
          "Hail and wind pages",
          "Insurance claim FAQs",
          "Storm-week Google posts",
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
        title: "Roof Damage Answers in AI Search",
        desc: "Plain answers on hail damage, repair versus replace and shingle warranties, so AI Overviews and ChatGPT name your roofing crew.",
        points: [
          "Hail and warranty answers",
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
    lead: "Higher roofer Maps placement, your name in AI replies about roof damage, and inspection calls tied to the page that earned them.",
    rank: {
      title: "Climb for Roof Repair and Replacement Searches",
      body: [
        "We sort roofing searches by job value and town, then write or repair whichever roof page has the best shot at each. Repair, replacement, storm and commercial terms get watched every week, so you see which towns move first and where a rival still sits above you.",
      ],
      points: [
        "Keywords sorted by job value",
        "Weekly town tracking",
        "Storm term watchlist",
        "Competitor page gaps",
      ],
      cta: "Show My Roofing Keyword Gaps",
      keywords: [
        ["roof repair near me", 24, 3],
        ["roof replacement + your town", 31, 4],
        ["hail damage roof inspection", 18, 2],
        ["metal roof installers", 37, 5],
      ],
    },
    ai: {
      title: "Show Up in AI Answers About Roof Damage",
      body: [
        "AI Overviews and ChatGPT pull from pages that answer roofing questions plainly: is this hail damage, repair or replace, what the warranty covers. We write those answers, mark them up and keep your listings consistent, as part of our ",
        { href: "/services/ai-seo-services", label: "AI SEO work" },
        ".",
      ],
      points: [
        "Hail and wind FAQs",
        "Warranty and material facts",
        "Matching listings everywhere",
        "AI mention tracking",
      ],
      cta: "Check My Roofing AI Mentions",
      query: "who should inspect my roof after hail",
      intro: "For a hail inspection near you,",
      bullets: [
        "Storm damage page with photos",
        "Recent reviews naming hail work",
        "Clear warranty details",
      ],
    },
    leads: {
      title: "Trace Every Roofing Call to Its Source",
      body: [
        "A ranking only pays when the phone rings. Each call and inspection request is tagged by page, town and search, your quote forms get shorter, and ",
        { href: "/services/google-ads", label: "Google Ads for roofers" },
        " can cover the weeks right after a storm.",
      ],
      points: [
        "Calls tagged by town",
        "Short inspection forms",
        "Tap-to-call on mobile",
        "Monthly source report",
      ],
      cta: "See Where My Roofing Calls Start",
      items: [
        ["Leak repair call", "Google Maps", "Mon 6:52 AM"],
        ["Inspection request", "Hail damage page", "Mon 11:20 AM"],
        ["Replacement estimate", "Town page", "Tue 9:02 AM"],
        ["Flat roof call", "AI Overview link", "Wed 2:35 PM"],
      ],
    },
  },
  results: {
    title: "What a Roofing Company Gains With Zonic SEO",
    lead: "The usual order for roofers: profile first, storm-ready pages next, then steadier inspection calls.",
    cta: "Map Out My Roofing Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Roofer Profile Cleaned Up",
        text: "We correct categories, service towns and photos, so Google starts matching your listing to roof repair searches.",
      },
      {
        when: "Month 1",
        title: "Roof and Storm Pages Publish",
        text: "Repair, replacement and hail pages go live, giving each roofing search a page that can start ranking.",
      },
      {
        when: "Months 2–4",
        title: "Roofing Reviews Build Up",
        text: "Post-job texts bring in more reviews naming roof types, and your listing moves toward the top three.",
      },
      {
        when: "Storm season onward",
        title: "Busier Roofing Crews",
        text: "Storm and replacement calls tend to pick up, each one tagged so you can see which page earned it.",
      },
    ],
    wins: [
      {
        icon: "roof",
        title: "More Replacement Jobs From Search",
        text: "Homeowners planning a new roof land on your replacement pages instead of a shared lead site.",
      },
      {
        icon: "storm",
        title: "Ready When Hail Hits Your Area",
        text: "Storm pages and posts already in place mean your crew is visible the week damage happens.",
      },
      {
        icon: "star",
        title: "Reviews That Name the Roof",
        text: "Steady reviews mention shingles, metal or flat roofs and the town, helping the next homeowner decide.",
      },
      {
        icon: "sparkle",
        title: "Roofing Answers AI Tools Quote",
        text: "Clear hail, warranty and repair-or-replace pages give ChatGPT and AI Overviews a reason to mention your company.",
      },
    ],
  },
  compare: {
    title: "Roofing SEO With Zonic vs. a Generic SEO Firm",
    lead: "Where roofers usually feel the difference between a general SEO firm and our roofing local SEO team.",
    rows: [
      {
        topic: "Storm and hail pages",
        other:
          "Usually missing, so storm searches go to whoever prepared ahead of time.",
        zonic:
          "Hail, wind and leak pages written before the season, then promoted the week weather hits.",
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
        topic: "Storm-week ad spend",
        other:
          "Agency fees tied to spend can climb right when storm budgets peak.",
        zonic:
          "Google Ads for storm weeks with a 0% markup on every dollar you spend.",
      },
      {
        topic: "Roofing contract length",
        other:
          "Often a long agreement signed before any storm season proves the work.",
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
        h: "Build Roof Pages Before Storm Season",
        p: "Profile and speed fixes land in week one; repair, replacement and storm pages follow, along with the post-job review texts.",
      },
      {
        h: "Report Roofing Leads and Double Down",
        p: "Your monthly roofing report splits rankings, calls and inspection requests by town and roof type, and effort shifts toward whatever books jobs.",
      },
    ],
    audit: [
      ["Maps rank by town", "behind"],
      ["Storm pages", "gap"],
      ["Roof review asks", "open"],
      ["Phone page speed", "behind"],
    ],
    plan: [
      "Repair pages",
      "Hail page",
      "Town pages",
      "Review texts",
      "Supplier links",
    ],
    launch: [
      "Category fixed",
      "Storm pages ready",
      "Reviews coming in",
      "Calls tagged",
    ],
  },
  explore: {
    title: "More Ways to Grow a Roofing Company",
    lead: "Local SEO for roofing companies works harder next to a quick website and paid ads for storm weeks.",
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
        sub: "Ads for the week after a storm",
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
    other:
      "Also install gutters or siding? One plan can cover every exterior trade you sell.",
  },
  reviews: {
    title: "Roofers, See Why Owners Rate Our Team 5.0 on Google",
    lead: "Unedited reviews from owners who hired us, pulled from our Google profile.",
  },
  pricing: {
    title: "Roofing SEO Plans Without Long Contracts",
    compareTitle: "Compare Plans for Roofing Contractors",
    addOnsTitle: "Storm Season Add-Ons for Roofers",
    customTitle: "Roofing in Several Metros?",
  },
  faq: {
    title: "Roofing SEO Questions From Contractors",
    lead: "Timelines, costs, Map Pack tactics and storm season, answered plainly for roofers.",
    items: [
      {
        q: "What is roofing SEO?",
        a: "Roofing SEO is the work that gets a roofing company found when nearby homeowners search: a tuned Google Business Profile, separate pages for every roof service and town, reviews that name the roof, and clean citations. Done well, it wins Map Pack spots and page-one results for repair and replacement searches.",
      },
      {
        q: "How much does SEO for roofing companies cost?",
        a: "Our three plans are $297, $750 and $1,500 a month, all month to month. A one-crew roofer in a single metro usually starts on the first; contractors covering several counties, or wanting storm-season Google Ads managed, lean toward the larger two. The free audit tells you which fits.",
      },
      {
        q: "How long until a roofer sees SEO results?",
        a: "Profile fixes and fresh roof repair pages can lift Maps placement within a few weeks. Head searches in a crowded metro can take six months or more. Launching storm pages a season early means they are already indexed when demand spikes, and your monthly report shows the movement.",
      },
      {
        q: "Which keywords should a roofing contractor target?",
        a: "Start with the money jobs plus your towns: roof repair near me, roof replacement with your city, hail or storm damage inspection, metal roof installer and flat roof repair if you do commercial work. Each one is sized in your audit, and only the ones that lead to signed contracts get a page.",
      },
      {
        q: "What gets a roofing company into the top three on Google Maps?",
        a: "The right primary category, every service and town listed, real job photos, weekly posts and a steady flow of reviews that mention the work. Consistent listings on other directories and a dedicated page per service on your website do the rest.",
      },
      {
        q: "Can roofing SEO help after a hail or wind storm?",
        a: "Yes, if the groundwork is ready before the storm. We build hail, wind and leak pages ahead of the season, then post updates and push review requests the week weather hits, so your listing is visible while homeowners are still checking for damage.",
      },
      {
        q: "Do roofers need a separate page for each town?",
        a: "For the towns you want work in, yes, but each page needs real substance: local jobs, photos, permit notes and the roof types common there. Pages that only swap the city name tend not to rank and can drag the rest of the site down.",
      },
      {
        q: "Should a roofing website answer insurance claim questions?",
        a: "Yes. Homeowners look up how claims, adjusters and deductibles work before they call anyone. Plain, accurate answers on a storm or claims page earn those searches and AI citations. We keep them general and never promise what an insurer will pay.",
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
    title: "Own the Map Before the Next Storm",
    lead: "Stronger town-by-town rankings and storm-ready pages, reported in plain numbers each month.",
  },
};
