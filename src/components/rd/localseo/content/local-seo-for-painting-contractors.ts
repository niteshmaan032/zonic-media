/* Local SEO for Painting Contractors — redesign draft copy (26 Oct 2026).
   Fresh copy; never reuse the live page, the electricians reference, the
   seo-services-2 draft or /services/painting-contractor-marketing-agency-2
   (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: seo for painters 724 impressions
     (pos 62.3) · seo for painting contractors 428 (45.6) · painting
     company seo 294 (48.5) · seo agency for painting service 198 · seo for
     painting companies 159 · painter seo 138 · painting contractor seo 132
     · local seo for painters 94 · seo services for painting contractors 83
     (19.9, the page's best position) · local seo services for painting
     companies 65 (18.6).
   - Semrush US: seo for painters 720 (KD 7) · painting company seo 480
     (10) · painter seo 260 (10) · painting contractor seo 140 (9).
   - Web research (painter SEO guides and agency pages): top results are
     generic GBP/citation/backlink checklists; none split interior,
     exterior and cabinet work into their own pages, none cover the Painter
     primary category, HousePainter schema or AI answers on prep, coats and
     warranties. Those gaps became the service cards, the categories FAQ and
     the separate-pages FAQ. Customer searches lean on "house painters near
     me", "cabinet painting near me", exterior repaints, deck staining and
     commercial/HOA work.
   - Title keeps "Painting Contractor SEO" (live title term) and leads with
     the head term "SEO for Painters"; H1 uses the head term. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-painting-contractors",
  audience: "Painting contractors and painting companies",
  serviceName: "Local SEO for Painting Contractors",
  meta: {
    title: "SEO for Painters | Painting Contractor SEO Company",
    description:
      "SEO for painters and painting companies: Google Maps rankings, interior, exterior and cabinet pages, reviews and AI answers that turn searches into estimates.",
    keywords: [
      "seo for painters",
      "painting company seo",
      "painter seo",
      "painting contractor seo",
      "seo for painting contractors",
      "local seo for painters",
      "seo services for painting contractors",
      "seo for painting companies",
      "local seo services for painting companies",
      "house painter seo",
    ],
  },
  hero: {
    h1Lead: "SEO for Painters",
    h1Rest: "That Fills the Estimate Calendar",
    icon: "paint",
    lead: [
      "Homeowners choose a painter from the Map Pack, a page-one result or an AI answer. Our painting company SEO wins those spots for interior, exterior and cabinet work across your service area: a sharper ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", town pages, project photos and reviews that name the finish.",
    ],
    cta: "Get My Free Painter Ranking Audit",
    ui: {
      kind: "growth",
      maps: "grid",
      ai: "overview",
      growth: "calendar",
      business: "Your Painting Co.",
      category: "Painter",
      query: "house painters near me",
      aiPrompt: "exterior house painters near me with good reviews",
      aiReasons: ["Interior and exterior work", "Photo-rich project pages"],
      growthLabel: "Estimates this week",
      leads: [
        ["Exterior repaint estimate", "Google Maps"],
        ["Cabinet painting quote", "AI Overview"],
        ["Interior walkthrough", "Project page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top 3 area-wide",
          title: "Painter of Choice Across Town",
          text: "Your listing holds top spots across the neighborhoods you paint.",
        },
        {
          label: "AI Overview",
          badge: "Cited",
          title: "Named in Google's Answer on Painters",
          text: "Project photos and reviews give AI Overviews a reason to cite you.",
        },
        {
          label: "Estimates",
          badge: "Booked",
          title: "A Week of Estimates on the Books",
          text: "Walkthroughs and estimates fill your calendar from local search.",
        },
      ],
    },
  },
  searches: {
    title: "What Homeowners Type Before Hiring a House Painter",
    lead: "Your pages and profile are built around the phrases homeowners, landlords and HOA boards actually use.",
    groups: [
      {
        icon: "paint",
        label: "Interior painting searches",
        terms: [
          "interior painters near me",
          "ceiling painting service",
          "drywall repair and paint",
          "accent wall painter",
          "painters for rental turnover",
          "trim and door painting",
        ],
      },
      {
        icon: "home",
        label: "Exterior and cabinet painting searches",
        terms: [
          "exterior house painters near me",
          "cabinet painting near me",
          "deck staining service",
          "fence painting and staining",
          "stucco painting contractor",
          "peeling exterior paint repair",
        ],
      },
      {
        icon: "pin",
        label: "Painter searches by town",
        terms: [
          "house painters + your city",
          "best painting company near me",
          "commercial painters near me",
          "painting contractor + your town",
          "licensed painter near me",
          "hoa repaint contractor",
        ],
      },
    ],
  },
  services: {
    title:
      "SEO Services for Painting Contractors\nFrom Profile to Finish Photos",
    lead: "Six jobs we run each month so homeowners, property managers and HOAs find your crew before the next painter.",
    cta: "Audit My Painting Website",
    items: [
      {
        icon: "pin",
        title: "Painter Maps Profile and Categories",
        desc: "We set Painter as the primary category, add cabinet and deck services, upload finished rooms weekly and keep hours, areas and answers current.",
        points: [
          "Painter primary category",
          "Cabinet and deck services",
          "Weekly finished-room photos",
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
        icon: "roller",
        title: "Interior, Exterior and Cabinet Painting Pages",
        desc: "Separate pages for interior repaints, exterior coats, cabinet refinishing and staining, each written for the towns where you want bigger jobs.",
        points: [
          "Service-by-service pages",
          "Town and suburb pages",
          "Prep and paint FAQs",
        ],
        links: [
          {
            href: "/services/painting-contractor-website-design",
            label: "Websites for painting contractors",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Mention the Paint Job",
        desc: "A text after each final walkthrough asks clients to name the room or surface, and we reply to every review in your voice.",
        points: [
          "Walkthrough review texts",
          "Replies within days",
          "Surfaces named in reviews",
        ],
        links: [],
      },
      {
        icon: "monitor",
        title: "Faster Painting Websites With Schema",
        desc: "Gallery-heavy painter sites often load slowly on phones. Photos get compressed, layouts tightened and HousePainter schema added so Google reads every page.",
        points: [
          "Compressed gallery images",
          "HousePainter schema",
          "Mobile estimate button",
        ],
        links: [
          { href: "/services/web-design", label: "Sites built for search" },
        ],
      },
      {
        icon: "layers",
        title: "Painter Citations and Local Links",
        desc: "Matching listings on the directories homeowners check, plus links from paint suppliers, realtors, HOA newsletters and the community projects you sponsor.",
        points: [
          "Directory cleanup",
          "Supplier and realtor links",
          "Sponsored project mentions",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended listing",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Painting Companies",
        desc: "Clear answers on prep, coats, drying time and warranty give ChatGPT, Gemini and Google's AI answers a reason to name your painting company.",
        points: [
          "Prep and warranty answers",
          "Consistent business facts",
          "Monthly AI spot checks",
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
    title: "How Painting Contractor SEO Fills Your Schedule",
    lead: "Higher map spots, more AI mentions and estimate requests linked to their source page.",
    rank: {
      title: "Climb for Exterior and Cabinet Painting Searches",
      body: [
        "We group searches by surface and town, then build or rewrite the pages that can win them. Exterior repaints, cabinet refinishing and deck staining each earn their own page, and we watch every target move until it reaches page one.",
      ],
      points: [
        "Surface-by-town keyword map",
        "Weekly rank checks",
        "Page-one targets by job",
        "Competitor gap notes",
      ],
      cta: "Show My Painting Keyword Gaps",
      keywords: [
        ["house painters near me", 24, 3],
        ["exterior painting + your city", 31, 2],
        ["cabinet painters near me", 38, 4],
        ["interior painter", 19, 3],
      ],
    },
    ai: {
      title: "When Locals Ask AI Which Painter to Hire",
      body: [
        "Ask ChatGPT for a painter and it leans on clear service pages, steady reviews and matching business facts. We publish direct answers on prep, coats and warranties and add structured data; our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        " team checks the mentions monthly.",
      ],
      points: [
        "Prep and coat answers",
        "Warranty facts on site",
        "Matching listings",
        "Monthly mention checks",
      ],
      cta: "Check My AI Painter Mentions",
      query: "who paints kitchen cabinets near me",
      intro: "For cabinet painting nearby,",
      bullets: [
        "Detailed cabinet page",
        "Recent glowing reviews",
        "Clear warranty terms",
      ],
    },
    leads: {
      title: "Trace Every Estimate Request to Its Search",
      body: [
        "An estimate request is the real finish line. Every phone call and quote request carries a tag naming the page and keyword behind it, mobile buttons get sharper, and ",
        { href: "/services/google-ads", label: "Google Ads for painters" },
        " can cover the spring rush.",
      ],
      points: [
        "Calls tagged by page",
        "Tap-to-call on phones",
        "Estimate form everywhere",
        "Monthly estimate report",
      ],
      cta: "See Which Pages Send Estimates",
      items: [
        ["Exterior repaint call", "Google Maps", "Mon 9:04 AM"],
        ["Cabinet quote form", "Cabinet page", "Mon 2:26 PM"],
        ["Interior estimate call", "AI Overview link", "Wed 8:47 AM"],
        ["Deck stain request", "Town page", "Thu 4:10 PM"],
      ],
    },
  },
  results: {
    title: "What Changes Once Painters Work With Zonic",
    lead: "Progress shows up in stages: a cleaner profile, then surface pages, then more estimate requests.",
    cta: "Map Out My Painting Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Painter Profile Cleaned Up",
        text: "Painter becomes your primary category and your towns and hours get corrected, so Google starts matching you to painting work.",
      },
      {
        when: "Month 1",
        title: "Surface Pages Published",
        text: "Interior, exterior and cabinet pages are published and start contending for the repaint searches homeowners type most.",
      },
      {
        when: "Months 2–4",
        title: "Moving Up Across Suburbs",
        text: "Walkthrough reviews and paint-supplier mentions gradually move your listing toward the map's top spots in more suburbs.",
      },
      {
        when: "Next exterior season",
        title: "A Fuller Estimate Calendar",
        text: "More estimate requests for the surfaces you prefer, each traced to a page, so slow weeks get easier to plan.",
      },
    ],
    wins: [
      {
        icon: "paint",
        title: "More Exterior and Cabinet Estimates",
        text: "Homeowners searching for repaints and cabinet refinishing reach pages that explain your prep, finish and warranty.",
      },
      {
        icon: "star",
        title: "Reviews That Describe the Finish",
        text: "Clients mention rooms, colors and tidy job sites unprompted, and each review receives a reply from your side.",
      },
      {
        icon: "sparkle",
        title: "A Painter AI Assistants Can Recommend",
        text: "Clear prep, coat and warranty answers give ChatGPT and Google AI solid facts to repeat about you.",
      },
      {
        icon: "calendar",
        title: "Steadier Work Through the Slow Months",
        text: "Interior and commercial pages help keep requests coming when exterior work pauses for winter weather.",
      },
    ],
  },
  compare: {
    title: "Painting Contractor SEO: Zonic vs. the Usual Approach",
    lead: "Where our work for painting companies parts ways with what many agencies sell.",
    rows: [
      {
        topic: "Interior vs exterior pages",
        other:
          "A single catch-all list of services meant to cover every painting job.",
        zonic:
          "Separate interior, exterior, cabinet and staining pages, each aimed at the towns you choose.",
      },
      {
        topic: "Seasonal estimate swings",
        other:
          "The same monthly plan whether it is peak exterior season or midwinter.",
        zonic:
          "Exterior pages tuned ahead of spring, with interior and commercial work pushed in colder months.",
      },
      {
        topic: "Project photo handling",
        other:
          "Stock images, or a gallery so heavy it slows every phone visit.",
        zonic:
          "Real finished-room photos compressed for speed and posted to your profile and service pages.",
      },
      {
        topic: "Commercial and HOA repaints",
        other:
          "Homeowner keywords only, leaving property managers and HOA boards unreached.",
        zonic:
          "Office, tenant-turnover and HOA work gets its own pages, profile services and separate tracking.",
      },
      {
        topic: "Estimate request tracking",
        other:
          "Traffic and ranking charts that never connect to an estimate request.",
        zonic:
          "Every phone call and estimate form logged by page and keyword in your monthly report.",
      },
      {
        topic: "Lock-in and ownership",
        other:
          "Long commitments, with the profile or site sometimes held by the agency.",
        zonic:
          "No lock-in: billing runs month to month and your profile, site and listings stay yours.",
      },
    ],
  },
  steps: {
    title: "Our Three-Step Plan for Painting Company SEO",
    lead: "We repair what holds rankings back in week one, then add surface pages, reviews and links.",
    items: [
      {
        h: "Painter Visibility Audit and Surface Map",
        p: "We check your profile, website and the painters ranking near you, then rank the surfaces and towns to target first.",
      },
      {
        h: "Painting Profile Fixes and New Pages",
        p: "Category, service and photo fixes go live in the first days, then interior, exterior and cabinet pages follow with review requests.",
      },
      {
        h: "Painting Leads Reported, Winners Pushed",
        p: "You get rankings, calls and estimate forms by surface and town every month, and the following month's effort goes where the jobs came from.",
      },
    ],
    audit: [
      ["Map Pack rank", "behind"],
      ["Cabinet page", "gap"],
      ["Review requests", "open"],
      ["Gallery speed", "behind"],
    ],
    plan: [
      "Exterior pages",
      "Cabinet page",
      "Town pages",
      "Reviews",
      "Supplier links",
    ],
    launch: [
      "Profile tuned",
      "Pages published",
      "Walkthrough texts on",
      "Estimates tracked",
    ],
  },
  explore: {
    title: "Services That Pair With SEO for Painting Companies",
    lead: "SEO for painting contractors pays off sooner with a site built for estimates and ads ready for the busy season.",
    items: [
      {
        name: "Painting Contractor Marketing",
        sub: "One plan for every lead channel",
        href: "/services/painting-contractor-marketing-agency",
        icon: "paint",
      },
      {
        name: "Painting Contractor Websites",
        sub: "Galleries that win the estimate",
        href: "/services/painting-contractor-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads Management",
        sub: "Estimates before exterior season",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Local SEO for Home Services",
        sub: "How we rank every trade",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Also run drywall or epoxy crews? Those service lines can share a single plan.",
  },
  reviews: {
    title: "Read the 5.0 Google Reviews Behind Our Painter SEO",
    lead: "Owners describe working with our local SEO team in their own words.",
  },
  pricing: {
    title: "Painter SEO Plans Billed Month to Month",
    compareTitle: "Painting Company SEO Plans Compared",
    addOnsTitle: "Extras for Painting Contractors",
    customTitle: "Running Several Painting Crews or Branches?",
  },
  faq: {
    title: "SEO for Painters: Questions Owners Ask Us",
    lead: "Costs, timing, Map Pack rules and what our painting contractor SEO covers.",
    items: [
      {
        q: "What does local SEO for painters include?",
        a: "Four things, run every month: a tuned Business Profile, a page for each surface and town you serve, a steady stream of reviews, and listings plus local links that back it all up. Together they push your company into the map results and onto page one for repaint searches.",
      },
      {
        q: "How much does painting contractor SEO cost?",
        a: "Our three plans run $297, $750 and $1,500 a month with no contract. Owner-operators with one crew often begin on the entry plan, while painting companies spread over several suburbs, or wanting Google Ads handled too, usually need more. Your free audit recommends one.",
      },
      {
        q: "How soon will a painting company see SEO results?",
        a: "Profile fixes and new surface pages often move map rankings within a few weeks. A crowded city search such as “house painters near me” can need several months of steady work. Each monthly report shows rankings, calls and estimate forms, so you see the trend before the season turns.",
      },
      {
        q: "Which searches should a painter try to rank for?",
        a: "Begin with the jobs that pay best plus the towns you work: exterior painting with your city, cabinet painters near me, interior painters, deck staining and commercial painting. The audit weighs each one, and only searches that lead to paid jobs get their own page.",
      },
      {
        q: "What is the best Business Profile category for a painter?",
        a: "Most residential and commercial painters should choose Painter as the primary category, then keep secondary categories to the work you genuinely do. Loosely related extras can blur relevance, so we pick the fewest that describe the business and list cabinet, deck and drywall work as services instead.",
      },
      {
        q: "Should painters build separate pages for interior and exterior work?",
        a: "Yes. Someone searching for exterior painting wants weather, prep and paint-life details, while an interior client asks about odor, furniture and timing. Separate pages can rank for each search and answer those worries, where one combined services page usually ranks for neither.",
      },
      {
        q: "Do before-and-after photos help painter rankings?",
        a: "They help most through engagement and trust. Fresh job photos on your profile and service pages prove the finish, keep the listing active and give AI tools something concrete to describe. We name files clearly and add alt text so Google understands each image.",
      },
      {
        q: "Can a painting company show up in Google AI Overviews?",
        a: "Yes, once the basics are strong. AI Overviews and ChatGPT draw on clear service pages, consistent listings, steady reviews and direct answers about prep, coats and warranties. Strong local rankings and AI mentions grow from the same groundwork, so one plan serves both.",
      },
      {
        q: "Do you handle SEO for commercial painting contractors?",
        a: "Yes. Office repaints, warehouse coatings, tenant turnovers and HOA contracts are searched differently from homeowner jobs, so they get their own pages, profile services and tracking. You see property-manager leads apart from residential calls and can decide where to push.",
      },
      {
        q: "Will I be locked into a painter SEO contract?",
        a: "No. Billing is monthly with no term, the profile, site and listings remain in your name, and every report spells out what changed. If winter is slow you can scale back without penalties and ramp up again before exterior season.",
      },
    ],
  },
  audit: {
    title: "Request a Free Ranking Review for Your Painting Company",
    lead: [
      "Share your site and the surfaces you most want to paint. Within a few days you get your map position, page gaps and reviews next to nearby painters, plus a plain first-month plan. Learn ",
      { href: "/about", label: "who we are" },
      " or browse ",
      { href: "/services", label: "every service we offer" },
      ".",
    ],
    points: [
      "Map rank by suburb",
      "Painting keyword gaps",
      "Profile and photo review",
      "First-month action list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free painter SEO audit",
      title: "Get Your Painting Company Audit",
      subtitle: "No cost, no contract, plain advice.",
      submitText: "Send My Painter Audit",
      messageLabel: "Your website and the painting work you want",
      messagePlaceholder:
        "yourwebsite.com, interior or exterior focus, and the towns you paint in",
    },
  },
  banner: {
    title: "Own the Map Every Time Someone Needs a Painter",
    lead: "Climb the map, earn AI mentions and watch estimate requests grow, all in one monthly report.",
  },
};
