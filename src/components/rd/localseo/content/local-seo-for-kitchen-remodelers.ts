/* Local SEO for Kitchen Remodelers — redesign draft copy (26 Oct 2026).
   Brief: docs/local-seo-redesign-brief.md. Fresh wording only; the live
   page, the electricians reference, /services/seo-services-2 and
   /services/kitchen-remodeling-marketing-agency-2 were checked for
   overlap.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: kitchen remodel seo services 654
     impressions (pos 12.6, the page's best term) · kitchen remodeling
     seo 479 (26.8) · seo for kitchen remodeling 266 (27.3) · kitchen
     renovation seo 254 (25.4) · seo for kitchen 105 · seo for kitchen
     remodeling company 104 · seo services for kitchen remodeling 104 ·
     seo for kitchen remodeling companies ny 97 · kitchen remodel seo 81 ·
     seo for kitchen designers 79 · kitchen company seo 63.
   - Semrush US: seo for remodelers 880 (KD 13) · remodeling seo 480 (22)
     · kitchen remodeling seo 390 (22) · kitchen remodeler seo 10. This
     page owns the broad remodeler terms; the bathroom page owns
     "bathroom remodeling seo".
   - Web research (kitchen remodeling seo, seo for remodelers, kitchen
     GBP categories, cabinet/countertop searches, AI search for
     remodelers; top pages read: two agency kitchen SEO pages): both
     skip FAQs, planning content and AI answers, and neither explains
     categories. Verified listings use Kitchen Remodeler as primary with
     cabinet and countertop work as services. Added: planning-content
     card, cabinet/counter search group, category FAQ, designers and
     showrooms FAQ, and the long research window as the page's angle.
   - Title keeps "Kitchen Remodeling SEO" (live title), adds "services"
     for the top GSC query and "SEO for Remodelers" (head term). */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-kitchen-remodelers",
  audience: "Kitchen remodelers, kitchen designers and design-build firms",
  serviceName: "Local SEO for Kitchen Remodelers",
  meta: {
    title: "Kitchen Remodeling SEO Services | Local SEO for Remodelers",
    description:
      "Kitchen remodeling SEO and SEO for remodelers: Maps rankings, project pages, planning content and AI answers that win cabinet, counter and full-kitchen consults.",
    keywords: [
      "kitchen remodeling seo",
      "kitchen remodel seo services",
      "seo for remodelers",
      "remodeling seo",
      "seo for kitchen remodeling",
      "kitchen renovation seo",
      "local seo for kitchen remodelers",
      "seo for kitchen remodeling companies",
      "seo for kitchen designers",
      "kitchen remodel seo",
    ],
  },
  hero: {
    h1Lead: "Kitchen Remodeling SEO",
    h1Rest: "That Turns Planning Searches Into Projects",
    icon: "kitchen",
    lead: [
      "Our kitchen remodel SEO services reach homeowners during the long planning stretch, when they search cabinets, counters and layouts for months. We tune your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", publish project and town pages, and earn the reviews that win the design visit.",
    ],
    cta: "Get My Free Kitchen SEO Audit",
    ui: {
      kind: "growth",
      maps: "pin",
      ai: "overview",
      growth: "pipeline",
      business: "Your Kitchen Remodeling",
      category: "Kitchen remodeler",
      query: "kitchen remodelers near me",
      aiPrompt: "kitchen remodeling company near me with design help",
      aiReasons: ["Design-to-build service", "Finished project photos"],
      growthLabel: "Kitchen projects",
      leads: [
        ["Full kitchen remodel", "Project page"],
        ["Design consult", "AI Overview"],
        ["Cabinet and counter quote", "Google Maps"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top pin",
          title: "The Kitchen Pro Locals Find First",
          text: "Showroom details and reviews put your pin above other remodelers.",
        },
        {
          label: "AI Overview",
          badge: "Mentioned",
          title: "Named While Homeowners Plan for Months",
          text: "Planning guides and project pages get cited in AI Overviews.",
        },
        {
          label: "Projects",
          badge: "Signed",
          title: "Design Consults That Become Kitchens",
          text: "Leads move from quote to design consult to signed remodel.",
        },
      ],
    },
  },
  searches: {
    title: "Kitchen Searches Homeowners Run While They Plan",
    lead: "Kitchen buyers research for weeks; we map those phrases to pages and profile details that catch them early.",
    groups: [
      {
        icon: "kitchen",
        label: "Full kitchen renovation searches",
        terms: [
          "kitchen remodel near me",
          "kitchen renovation contractor",
          "design build kitchen remodeler",
          "open concept kitchen remodel",
          "kitchen remodeling company + your city",
          "kitchen design consultation",
        ],
      },
      {
        icon: "layers",
        label: "Kitchen cabinet and counter searches",
        terms: [
          "cabinet refacing near me",
          "custom kitchen cabinets",
          "quartz countertop installation",
          "kitchen island installation",
          "cabinet painting service",
          "backsplash tile installer",
        ],
      },
      {
        icon: "pin",
        label: "Kitchen remodeler comparison searches",
        terms: [
          "best kitchen remodelers near me",
          "kitchen showroom near me",
          "kitchen remodeler reviews",
          "licensed kitchen contractor",
          "kitchen designer near me",
        ],
      },
    ],
  },
  services: {
    title: "SEO for Kitchen Remodeling,\nCovered End to End",
    lead: "Six kitchen renovation SEO services aimed at the kitchens you most want to sign, from refacing jobs to full gut remodels.",
    cta: "Audit My Kitchen Website",
    items: [
      {
        icon: "pin",
        title: "Kitchen Remodeler Profile Optimization",
        desc: "Kitchen Remodeler as primary, cabinet and countertop secondaries where they fit, showroom hours and phase-by-phase photos that keep the listing active.",
        points: [
          "Category stack set",
          "Showroom hours listed",
          "Build-phase photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile service",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify a new showroom",
          },
        ],
      },
      {
        icon: "file",
        title: "Kitchen Project and Service Pages",
        desc: "One page each for refacing, countertops, islands, layout changes and full remodels, plus town pages showing a finished kitchen nearby.",
        points: [
          "Cabinet and counter pages",
          "Layout-change pages",
          "Town project pages",
        ],
        links: [
          {
            href: "/services/kitchen-remodeling-website-design",
            label: "Kitchen remodeler websites",
          },
        ],
      },
      {
        icon: "book",
        title: "Kitchen Planning Content That Ranks",
        desc: "Guides on layouts, materials and remodel timelines that answer early research questions and quietly lead readers toward a consult request.",
        points: [
          "Layout and material guides",
          "Timeline explainers",
          "Consult links in content",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Reviews That Describe the Kitchen",
        desc: "Review asks timed to the final walkthrough, an owner reply on each one, and wording that nudges clients to describe cabinets, counters or layout.",
        points: [
          "Walkthrough review asks",
          "Owner reply to each",
          "Kitchen words in reviews",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Recover a suspended profile",
          },
        ],
      },
      {
        icon: "tool",
        title: "Technical SEO for Kitchen Remodeler Sites",
        desc: "Heavy portfolio images resized, layout shifts fixed, structured data added and thin duplicate pages merged so search engines read every kitchen page.",
        points: [
          "Portfolio image sizing",
          "Layout-shift fixes",
          "Kitchen schema markup",
        ],
        links: [
          { href: "/services/web-design", label: "Website design that ranks" },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Kitchen Remodeling Companies",
        desc: "Answer-first pages on design steps, lead times and materials, with business details kept identical everywhere, so ChatGPT and Gemini shortlist your firm.",
        points: [
          "Design-process answers",
          "Identical listings",
          "AI shortlist checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for remodelers" },
        ],
      },
    ],
  },
  growth: {
    title: "What Remodeling SEO Does for a Kitchen Business",
    lead: "Earlier visibility while homeowners research, recommendations from AI tools, and leads tied back to the search that found you.",
    rank: {
      title: "Rank While Homeowners Research Their Kitchen",
      body: [
        "Kitchen buyers search materials and layouts long before they call, so we target both research and hiring phrases. Each project type and town gets a page, and weekly tracking shows how you stack up against the remodelers already holding page one.",
      ],
      points: [
        "Research and hiring terms",
        "Pages per project type",
        "Weekly position tracking",
        "Page-one rival review",
      ],
      cta: "Find My Kitchen Keyword Gaps",
      keywords: [
        ["kitchen remodel near me", 22, 3],
        ["cabinet refacing + your city", 29, 2],
        ["quartz countertop installers", 35, 5],
        ["kitchen remodeling contractor", 26, 4],
      ],
    },
    ai: {
      title: "Get Recommended When AI Plans a Kitchen",
      body: [
        "Homeowners now ask assistants to compare remodelers, timelines and materials. Those answers favor firms with detailed project pages, clear process explanations and listings that match. We build that groundwork using our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        " playbook for remodeling firms.",
      ],
      points: [
        "Process pages AI can quote",
        "Material and timeline FAQs",
        "Matching listings",
        "Monthly AI answer checks",
      ],
      cta: "Test My Kitchen AI Mentions",
      query: "best kitchen remodeler for an open layout",
      intro: "For opening up a kitchen layout nearby,",
      bullets: [
        "Detailed layout-change page",
        "Finished open-plan kitchens",
        "Reviews praising the design",
      ],
    },
    leads: {
      title: "Know Where Each Kitchen Design Visit Started",
      body: [
        "Kitchen projects take months to close, so we record where each lead began: the page, the search and the channel. Every project page carries a design-visit button, and ",
        {
          href: "/services/google-ads",
          label: "Google Ads for kitchen remodelers",
        },
        " fill gaps in your calendar.",
      ],
      points: [
        "Lead source on every form",
        "Design-visit button",
        "Call recording by page",
        "Monthly pipeline report",
      ],
      cta: "Show Me My Kitchen Lead Sources",
      items: [
        ["Cabinet refacing call", "Google Maps", "Mon 10:05 AM"],
        ["Full kitchen consult form", "Layout-change page", "Tue 11:30 AM"],
        ["Countertop quote request", "AI Overview link", "Wed 9:45 AM"],
        ["Design visit booking", "Town page", "Thu 6:10 PM"],
      ],
    },
  },
  results: {
    title: "How Kitchen Remodelers Grow Once Zonic Starts",
    lead: "Fixes go live early, then planning content and project pages build toward a fuller design calendar.",
    cta: "Plan My Kitchen Remodeling Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Showroom Listing Put Right",
        text: "We correct the kitchen remodeler category, showroom hours and photos, so your profile starts matching kitchen searches.",
      },
      {
        when: "Month 1",
        title: "Cabinet and Counter Pages Launch",
        text: "Refacing, countertop and island pages go live and begin appearing for the searches homeowners run while planning.",
      },
      {
        when: "Months 2–4",
        title: "Kitchen Guides Start Ranking",
        text: "Layout and material guides earn early-research visits, and reviews describing finished kitchens help lift your Maps standing.",
      },
      {
        when: "First season",
        title: "Fuller Kitchen Design Calendar",
        text: "More design-visit requests arrive from people who found you while researching, each tagged to its first search.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "More Booked Kitchen Design Visits",
        text: "Homeowners who compared layouts and materials on your site reach out ready to talk about their kitchen.",
      },
      {
        icon: "book",
        title: "Seen Early in the Kitchen Planning Phase",
        text: "Guides on cabinets, counters and timelines put your name in front of buyers months before they hire.",
      },
      {
        icon: "sparkle",
        title: "Kitchen Shortlists in AI Answers",
        text: "Clear design-process pages and matching listings give ChatGPT and Gemini good reasons to include your firm.",
      },
      {
        icon: "star",
        title: "Reviews That Show Off Finished Kitchens",
        text: "Clients describe cabinets, counters and the new layout, and those words help the next homeowner decide.",
      },
    ],
  },
  compare: {
    title: "Kitchen Remodeler SEO: How Zonic Compares",
    lead: "Common gaps in kitchen remodeling SEO elsewhere, and how our approach handles them.",
    rows: [
      {
        topic: "Kitchen planning content",
        other:
          "Thin blog posts that rarely match what kitchen buyers research.",
        zonic:
          "Guides on layouts, materials and timelines, each linked to a project page and consult form.",
      },
      {
        topic: "Long kitchen sales cycles",
        other:
          "Leads counted the week they arrive, with no view of slower decisions.",
        zonic:
          "Each lead keeps its first page and search, so slow-closing kitchens still show their source.",
      },
      {
        topic: "Kitchen showroom categories",
        other: "A generic contractor category chosen once and never revisited.",
        zonic:
          "Kitchen Remodeler as primary, with cabinet or countertop secondaries only where your work supports them.",
      },
      {
        topic: "Kitchen project pages",
        other:
          "A single remodeling page asked to cover cabinets, counters and full renovations.",
        zonic:
          "Separate refacing, countertop, island and layout-change pages, plus town pages with nearby kitchens.",
      },
      {
        topic: "Kitchen SEO reporting",
        other:
          "Rankings and traffic reports that never mention a design visit.",
        zonic:
          "Calls, consult forms and design-visit bookings tracked by page and reported every month.",
      },
      {
        topic: "Kitchen remodeler agreements",
        other:
          "Annual contracts are common, with accounts sometimes held by the provider.",
        zonic:
          "Month-to-month plans, and your profile, site and call tracking stay under your ownership.",
      },
    ],
  },
  steps: {
    title: "Three Steps to Better Kitchen Remodeler Rankings",
    lead: "Good SEO for remodelers starts with repairs: profile and site in week one, then planning content and project pages.",
    items: [
      {
        h: "Kitchen Search Audit and Target List",
        p: "We compare your profile and site with the remodelers outranking you, then choose the kitchen projects, research terms and towns to pursue.",
      },
      {
        h: "Fix the Showroom Listing, Launch Kitchen Pages",
        p: "Category, hours and speed fixes go live first; refacing, countertop, island and town pages follow, with review asks after each finished kitchen.",
      },
      {
        h: "Trace Consults, Grow the Kitchen Pages That Work",
        p: "Monthly reports tie rankings to calls and design visits by project type, and the pages that bring signed kitchens get expanded first.",
      },
    ],
    audit: [
      ["Maps visibility", "behind"],
      ["Cabinet pages", "gap"],
      ["Planning guides", "open"],
      ["Showroom hours", "good"],
    ],
    plan: [
      "Refacing page",
      "Countertop page",
      "Layout guides",
      "Town pages",
      "Review asks",
    ],
    launch: [
      "Showroom listing fixed",
      "Kitchen pages live",
      "Guides published",
      "Design visits tracked",
    ],
  },
  explore: {
    title: "More Services for Kitchen Remodeling Firms",
    lead: "Local SEO for kitchen remodelers converts better on a portfolio-led site, with paid search for weeks you need consults fast.",
    items: [
      {
        name: "Kitchen Remodeling Marketing",
        sub: "One growth plan for kitchens",
        href: "/services/kitchen-remodeling-marketing-agency",
        icon: "kitchen",
      },
      {
        name: "Kitchen Remodeler Websites",
        sub: "Portfolios that win consults",
        href: "/services/kitchen-remodeling-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Fill open design slots",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "How we rank every trade",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Remodel baths, basements and additions too? We can plan SEO across every service line.",
  },
  reviews: {
    title: "Owners Rate Our Search Work 5.0 on Google",
    lead: "Real reviews pulled from our Google listing, word for word.",
  },
  pricing: {
    title: "Kitchen Remodeler SEO Plans, Billed Monthly",
    compareTitle: "How Our Kitchen Remodeler Plans Compare",
    addOnsTitle: "Add-Ons for Kitchen Design-Build Firms",
    customTitle: "Several Kitchen Showrooms to Rank?",
  },
  faq: {
    title: "What Kitchen Remodelers Ask Before Starting SEO",
    lead: "Costs, timelines, design-visit tracking and how SEO for remodelers handles long kitchen sales cycles.",
    items: [
      {
        q: "What is kitchen remodeling SEO?",
        a: "Kitchen remodeling SEO is everything that helps homeowners planning a new kitchen find your firm on Google, Maps and AI tools: a well-kept Business Profile, project and town pages, planning content, reviews and accurate listings. Success is measured in design visits from search, not just traffic.",
      },
      {
        q: "What do kitchen remodel SEO services cost?",
        a: "Our three plans are $297, $750 and $1,500 a month, billed month to month. A one-showroom firm often starts with the first; design-build companies covering a metro, or wanting Google Ads handled too, generally choose a larger plan. The free audit names the right fit.",
      },
      {
        q: "How long does SEO for kitchen remodeling take?",
        a: "Profile repairs and new project pages can lift Maps visibility fairly quickly. Ranking for broad phrases like “kitchen remodel near me” in a big market takes longer, often several months. Kitchen buyers also research for a while, so rankings earned this season often become consults the next.",
      },
      {
        q: "Is SEO for remodelers different from SEO for other trades?",
        a: "Yes. Remodeling buyers research longer, compare portfolios and care about design, so the work leans on project galleries, planning content and reviews that describe finished rooms. Emergency trades win on speed; remodelers win on proof of past kitchens and a clear, well-explained process.",
      },
      {
        q: "Which Google Business Profile categories suit a kitchen remodeler?",
        a: "Kitchen Remodeler usually belongs as the primary category. Secondary options depend on what you really sell, such as cabinet maker, countertop store or general contractor. We match categories to your revenue and listed services, because a category Google can't verify can hurt more than it helps.",
      },
      {
        q: "Do kitchen design blogs help remodeling SEO?",
        a: "The right ones do. Guides that answer real planning questions on layouts, cabinet options and project timelines can rank, earn links and get quoted in AI answers. We skip filler posts and link each guide to the matching project page and consult form.",
      },
      {
        q: "Do you offer SEO for kitchen designers and cabinet showrooms?",
        a: "Yes. Designers and showrooms need the same groundwork with a different emphasis: design process, portfolio pages and showroom visits instead of install crews. We set categories and pages to match how clients actually buy from you, then track showroom appointments as leads.",
      },
      {
        q: "Can AI tools recommend my kitchen remodeling company?",
        a: "They already recommend some firms. ChatGPT, Gemini and Google AI Overviews favor remodelers with detailed project pages, matching business details and reviews describing finished kitchens. Firms explaining their design process and lead times in plain words are the ones these assistants tend to name.",
      },
      {
        q: "Can you handle SEO for kitchen remodeling companies in several markets?",
        a: "Yes. Each market gets town pages with local projects, its own rank tracking and, where you have a staffed showroom, its own profile. Reports break rankings and design visits down by market, so you can see which area deserves the next round of pages.",
      },
      {
        q: "Will I be locked into a kitchen SEO contract?",
        a: "No. Every plan renews monthly, you keep ownership of the profile, website and call tracking, and each report spells out what changed. Judge the work by design visits and signed kitchens, not promises, and leave whenever it stops earning its place.",
      },
    ],
  },
  audit: {
    title: "A Free SEO Checkup for Your Kitchen Remodeling Firm",
    lead: [
      "Tell us your website and the kitchens you'd most like to sell. We'll measure your Maps visibility around each showroom, set your portfolio and reviews beside the firms ranking above you, and send a brief written plan. Find out ",
      { href: "/about", label: "who handles our remodeler accounts" },
      " or see ",
      { href: "/services", label: "every service we run" },
      ".",
    ],
    points: [
      "Maps visibility by town",
      "Kitchen keyword gaps",
      "Portfolio and profile check",
      "First-month action list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free kitchen remodeler SEO audit",
      title: "Request Your Kitchen SEO Audit",
      subtitle: "No cost, no contract, no sales pitch.",
      submitText: "Send My Kitchen Audit",
      messageLabel: "Your website and main kitchen services",
      messagePlaceholder:
        "yourwebsite.com, the kitchen projects you want and where you work",
    },
  },
  banner: {
    title: "Show Up Early in Every Kitchen Plan",
    lead: "Visibility through the research months, a voice in AI answers and design visits with a clear source.",
  },
};
