/* Local SEO for Landscaping Companies — redesign draft copy (26 Oct 2026).
   Fresh copy; never reuse the live page, the electricians reference, the
   seo-services-2 draft or /services/landscaping-marketing-agency-2
   (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: landscaping seo company 803
     impressions (pos 26.3, the page's best term) · landscaper seo 472
     (54.4) · local seo for landscapers 401 (46.7) · landscaping seo
     services 374 (37.8) · landscaper seo services 355 · local seo for
     landscaping companies 330 (44.7) · landscaping company seo services
     265 · seo for landscaping companies 176.
   - Semrush US: seo for landscapers 2,400 (KD 21) · landscaping seo 1,900
     (19) · lawn care seo 720 (15) · landscaping seo company 590 (12).
   - Web research (landscaper SEO guides and agency pages): results treat
     lawn care and design-build as one audience; few split recurring-route
     work from project work, none plan pages around the season calendar,
     and AI answers get one bullet at most. Guides note the Landscaper vs
     Lawn care service primary-category choice and that planting answers in
     AI Overviews need regional accuracy. Those gaps became the lawn care
     card, the category, seasonal-timing and lawn-vs-landscaping FAQs, and
     the region-aware AI card. Customer searches: landscapers near me,
     paver patios, retaining walls, lawn mowing, aeration, spring cleanup,
     HOA maintenance.
   - Title keeps "Landscaping SEO Company" (live title and top GSC term) and
     adds the head term "SEO for Landscapers" plus lawn care; H1 uses the
     head term. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-landscaping-companies",
  audience: "Landscaping and lawn care companies",
  serviceName: "Local SEO for Landscaping Companies",
  meta: {
    title: "Landscaping SEO Company | SEO for Landscapers & Lawn Care",
    description:
      "SEO for landscapers and lawn care crews: Maps rankings by suburb, design, hardscape and mowing pages, reviews and AI visibility for more consults and routes.",
    keywords: [
      "seo for landscapers",
      "landscaping seo",
      "lawn care seo",
      "landscaping seo company",
      "landscaper seo",
      "local seo for landscapers",
      "landscaping seo services",
      "local seo for landscaping companies",
      "seo for landscaping companies",
      "landscaping company seo services",
    ],
  },
  hero: {
    h1Lead: "SEO for Landscapers",
    h1Rest: "That Keeps Crews Booked Every Season",
    icon: "leaf",
    lead: [
      "When a homeowner searches for a patio builder or weekly mowing, three spots win the job: the Map Pack, page one and the AI answer. Our landscaping SEO earns all three with a well-kept ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile",
      },
      ", suburb pages, project galleries and steady reviews.",
    ],
    cta: "Get My Free Landscaper Audit",
    ui: {
      kind: "growth",
      maps: "towns",
      ai: "overview",
      growth: "calendar",
      business: "Your Landscaping Co.",
      category: "Landscaper",
      query: "landscaping company near me",
      areas: ["North suburbs", "Lake district", "West hills", "Town center"],
      aiPrompt: "landscaper near me for a patio and planting",
      aiReasons: ["Design-build projects", "Weekly lawn care routes"],
      growthLabel: "Visits on the schedule",
      leads: [
        ["Patio design visit", "AI Overview"],
        ["Weekly mowing start", "Google Maps"],
        ["Spring cleanup", "Service page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 by suburb",
          title: "First on the Map in Each Suburb",
          text: "Area pages keep your listing on top where your crews already work.",
        },
        {
          label: "AI Overview",
          badge: "Cited",
          title: "Cited for Patios, Planting and Lawn Care",
          text: "Project galleries and seasonal answers get quoted by Google's AI.",
        },
        {
          label: "Schedule",
          badge: "Filling up",
          title: "Crews Booked Through the Season",
          text: "Design visits and weekly routes fill the schedule from search.",
        },
      ],
    },
  },
  searches: {
    title: "Searches Homeowners Use to Find a Landscaper",
    lead: "Local SEO for landscapers starts with the words people type when the yard needs work, and your pages and profile follow them.",
    groups: [
      {
        icon: "yard",
        label: "Landscape design and hardscape searches",
        terms: [
          "landscape designer near me",
          "paver patio installers",
          "retaining wall builders near me",
          "outdoor kitchen contractor",
          "landscape lighting installation",
          "front yard landscaping near me",
        ],
      },
      {
        icon: "grass",
        label: "Lawn care and maintenance searches",
        terms: [
          "lawn mowing service near me",
          "lawn aeration and overseeding",
          "weed control service",
          "sod installation near me",
          "spring yard cleanup",
          "leaf removal service",
        ],
      },
      {
        icon: "pin",
        label: "Landscaper searches by town",
        terms: [
          "landscapers + your city",
          "landscaping companies near me",
          "commercial landscaping services",
          "hoa landscape maintenance",
          "lawn care + your town",
          "irrigation repair near me",
        ],
      },
    ],
  },
  services: {
    title:
      "Landscaping SEO Services for Design,\nHardscape and Lawn Care Crews",
    lead: "Six workstreams that match how homeowners and property managers hire for outdoor work.",
    cta: "Audit My Landscaping Website",
    items: [
      {
        icon: "pin",
        title: "Landscaper Profile and Category Setup",
        desc: "Landscaper or lawn care service as primary, depending on how you earn, with services, service areas, seasonal posts and fresh project photos.",
        points: [
          "Right primary category",
          "Service-area towns listed",
          "Seasonal profile posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile work",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get verified faster",
          },
        ],
      },
      {
        icon: "yard",
        title: "Landscape Design and Hardscape Pages",
        desc: "Patios, retaining walls, outdoor lighting and planting design each get a page with project photos and the suburbs where you build.",
        points: [
          "Hardscape project pages",
          "Design consult page",
          "Suburb landing pages",
        ],
        links: [
          {
            href: "/services/landscaping-website-design",
            label: "Landscaping website design",
          },
        ],
      },
      {
        icon: "grass",
        title: "Lawn Care SEO for Recurring Routes",
        desc: "Mowing, fertilizing, aeration and weed control pages aimed at the neighborhoods where an extra weekly stop makes your routes tighter.",
        points: [
          "Mowing and treatment pages",
          "Route-density targeting",
          "Maintenance plan FAQs",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Landscaping Reviews and Listings",
        desc: "Review links after each install or season-end visit, owner replies, and matching name, address and phone on the directories homeowners trust.",
        points: [
          "Post-install review links",
          "Owner reply to each",
          "Directory NAP cleanup",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended listing recovery",
          },
        ],
      },
      {
        icon: "tool",
        title: "Landscaping Website Fixes and Schema",
        desc: "Crawl errors, thin seasonal pages and slow before-and-after galleries get repaired, then schema tells Google which towns and services you cover.",
        points: [
          "Crawl and index fixes",
          "Seasonal page cleanup",
          "Service-area schema",
        ],
        links: [{ href: "/services/web-design", label: "Websites that rank" }],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Landscapers",
        desc: "Region-aware answers on planting times, watering and maintenance plans help Google AI Overviews, ChatGPT and Gemini name your landscaping company.",
        points: [
          "Climate-zone answers",
          "Matching business facts",
          "AI mention tracking",
        ],
        links: [{ href: "/services/ai-seo-services", label: "AI SEO help" }],
      },
    ],
  },
  growth: {
    title: "How Landscaper SEO Fills Routes and Project Calendars",
    lead: "More suburbs in the top three, more AI mentions and more requests for the work you want.",
    rank: {
      title: "Own Patio, Lawn and Design Searches by Suburb",
      body: [
        "Each search is sorted by service and suburb before we write a line. Hardscape, design and maintenance terms then get pages built to win them, and rankings are logged weekly so you can tell which neighborhoods are turning in your favor.",
      ],
      points: [
        "Service-by-suburb map",
        "Weekly rank log",
        "Hardscape term targets",
        "Rival suburb gaps",
      ],
      cta: "Find My Landscaping Keyword Gaps",
      keywords: [
        ["landscapers near me", 21, 3],
        ["patio installation + your city", 29, 2],
        ["lawn care service near me", 17, 1],
        ["landscape designer", 35, 4],
      ],
    },
    ai: {
      title: "Get Named in AI Answers About Yard Work",
      body: [
        "Assistants pick landscapers whose sites answer local questions plainly and whose listings agree. We add region-aware answers on planting, irrigation and upkeep, mark them up with structured data and measure mentions through our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        " checks.",
      ],
      points: [
        "Planting and irrigation answers",
        "Agreeing listings",
        "Structured service data",
        "Monthly assistant checks",
      ],
      cta: "See If AI Suggests My Company",
      query: "best landscaper for a backyard patio near me",
      intro: "For backyard patio projects nearby,",
      bullets: [
        "Hardscape gallery online",
        "Reviews mention patios",
        "Clear design process",
      ],
    },
    leads: {
      title: "Know Which Pages Bring Landscaping Requests",
      body: [
        "Every call, quote form and consult booking is tagged with the suburb page or search that produced it. Mobile pages get a clearer quote button, and ",
        { href: "/services/google-ads", label: "Google Ads for landscapers" },
        " can fill gaps before spring cleanups start.",
      ],
      points: [
        "Calls tagged by suburb",
        "Consult bookings tracked",
        "Clear mobile quote button",
        "Monthly request report",
      ],
      cta: "Show Me My Best Lead Pages",
      items: [
        ["Patio design consult", "Google Maps", "Mon 7:52 AM"],
        ["Weekly mowing quote", "Lawn care page", "Mon 12:15 PM"],
        ["Retaining wall call", "AI Overview link", "Tue 10:31 AM"],
        ["Spring cleanup form", "Suburb page", "Wed 5:02 PM"],
      ],
    },
  },
  results: {
    title: "How a Landscaping Business Changes With Zonic",
    lead: "First a sharper profile, then suburb and service pages, then more consults and route stops each season.",
    cta: "Plan My Landscaping Season",
    milestones: [
      {
        when: "First weeks",
        title: "Category and Areas Sorted",
        text: "Landscaper or lawn care category, service towns and seasonal hours set, so the right homeowners start seeing you.",
      },
      {
        when: "Before spring",
        title: "Hardscape and Lawn Pages Live",
        text: "Patio, wall, design and mowing pages go up while it is quiet, ready for early spring searches.",
      },
      {
        when: "Peak season",
        title: "More Suburbs Turning Your Way",
        text: "As project reviews and garden-center links build up, your listing usually climbs in more neighborhoods.",
      },
      {
        when: "Season two onward",
        title: "Tighter Routes, Bigger Projects",
        text: "More mowing stops near existing routes and more design consults, each traced back to the page that earned it.",
      },
    ],
    wins: [
      {
        icon: "grass",
        title: "Denser Mowing and Treatment Routes",
        text: "New lawn care accounts tend to cluster near streets you already serve, cutting windshield time between stops.",
      },
      {
        icon: "yard",
        title: "More Patio and Design Consults",
        text: "Homeowners planning hardscapes find project galleries and suburb pages, then book a consult instead of browsing directories.",
      },
      {
        icon: "star",
        title: "Reviews Neighbors Actually Read",
        text: "Clients mention the patio, the plantings or the weekly crew, which reassures the next homeowner on the street.",
      },
      {
        icon: "leaf",
        title: "Fewer Quiet Weeks Between Seasons",
        text: "Fall cleanup, snow and HOA maintenance pages give the winter months something to rank for.",
      },
    ],
  },
  compare: {
    title: "How Zonic Handles Landscaping Search Differently",
    lead: "A side-by-side look at our landscaping work and the plans many outdoor firms are sold.",
    rows: [
      {
        topic: "Lawn care vs design-build",
        other:
          "One keyword list mixing weekly mowing with large hardscape projects.",
        zonic:
          "Separate pages, keywords and tracking for recurring lawn routes and design-build projects.",
      },
      {
        topic: "Route density",
        other:
          "Rankings chased citywide, even in suburbs your crews rarely reach.",
        zonic:
          "Lawn care pages aimed at neighborhoods where an extra stop tightens your existing routes.",
      },
      {
        topic: "Spring and fall timing",
        other:
          "Work started whenever the contract begins, often after the rush.",
        zonic:
          "Season pages and profile posts planned so they are live before spring and fall demand.",
      },
      {
        topic: "Project galleries",
        other:
          "Photo galleries that load slowly and never reach the Business Profile.",
        zonic:
          "Before-and-after project photos compressed, labeled by suburb and shared to your profile.",
      },
      {
        topic: "Climate-aware answers",
        other:
          "Planting and watering content copied from national sites, ignoring your region.",
        zonic:
          "Region-specific planting, irrigation and upkeep answers that Google AI and ChatGPT can quote.",
      },
      {
        topic: "Landscaping account ownership",
        other:
          "Annual terms, and logins that can stay with the agency when you leave.",
        zonic:
          "Billed month to month; your profile, website and every listing stay in the company's name.",
      },
    ],
  },
  steps: {
    title: "Three Steps to Local SEO for Landscaping Companies",
    lead: "As your landscaping SEO company, we fix what blocks rankings now, then add pages, reviews and links before each season.",
    items: [
      {
        h: "Landscaping Search Audit by Suburb",
        p: "Suburb by suburb, your profile and site are measured against the landscapers outranking you, and the services and areas with the quickest upside are listed.",
      },
      {
        h: "Landscaper Fixes Before the Spring Rush",
        p: "Category, service and technical repairs land first. Hardscape, design and lawn care pages follow, timed so they are indexed before peak season.",
      },
      {
        h: "Grow the Landscaping Routes That Pay",
        p: "Monthly reports break out rankings, calls and consults by service and suburb, and we shift effort toward the work with the best margins.",
      },
    ],
    audit: [
      ["Maps coverage", "behind"],
      ["Hardscape pages", "gap"],
      ["Review links", "open"],
      ["Mobile speed", "good"],
    ],
    plan: [
      "Patio pages",
      "Lawn care pages",
      "Suburb pages",
      "Reviews",
      "Nursery links",
    ],
    launch: [
      "Category fixed",
      "Season pages live",
      "Reviews arriving",
      "Consults tracked",
    ],
  },
  explore: {
    title: "What Landscaping Companies Add Next",
    lead: "A site that shows off projects and ads for the spring rush make every ranking work harder.",
    items: [
      {
        name: "Landscaping Marketing",
        sub: "Leads across every channel",
        href: "/services/landscaping-marketing-agency",
        icon: "leaf",
      },
      {
        name: "Landscaping Websites",
        sub: "Galleries that book consults",
        href: "/services/landscaping-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Fill the calendar before spring",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Service Local SEO",
        sub: "Our method for outdoor trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Snow removal or irrigation as a side line? Ask how one plan covers both.",
  },
  reviews: {
    title: "Landscaping Owners: Read Our 5.0 Google Reviews First",
    lead: "Every review on our Google profile, shown as the owner wrote it.",
  },
  pricing: {
    title: "Landscaper SEO Plans, Billed Monthly",
    compareTitle: "Compare Plans for Landscaping Companies",
    addOnsTitle: "Seasonal Add-Ons for Landscapers",
    customTitle: "Multiple Landscaping Branches or Crews?",
  },
  faq: {
    title: "Landscaping SEO Company Questions, Answered",
    lead: "Timelines, categories, seasons and costs for landscapers and lawn care companies.",
    items: [
      {
        q: "What does SEO for landscapers cover?",
        a: "Every piece that shapes whether homeowners nearby find your crew: the right profile category and posts, design, hardscape and lawn care pages, suburb pages, reviews, listings and site health. Worked as one plan, those pieces move you into the map's top three for the services you sell most.",
      },
      {
        q: "What does a landscaping SEO company charge?",
        a: "We offer three plans at $297, $750 and $1,500 a month, all month to month. A lawn care route in one town usually fits the starter plan; design-build firms working several suburbs, or wanting ads managed as well, tend to need the larger ones. The audit names the right plan.",
      },
      {
        q: "How is lawn care SEO different from landscaping SEO?",
        a: "Lawn care SEO chases recurring, close-together accounts: mowing, treatments and aeration near your existing routes. Landscaping SEO targets fewer, larger projects like patios and full designs across a wider area. Many companies need both, so we split pages, keywords and tracking by service line.",
      },
      {
        q: "When should a landscaping company start SEO?",
        a: "Late fall or winter is ideal. Pages and profile fixes need time to be indexed and climb, so work done in the quiet months is ranking when homeowners start searching for spring cleanups and patio builds. Starting mid-season still helps, but the first gains arrive later.",
      },
      {
        q: "Is Landscaper or Lawn care service the right category?",
        a: "Choose based on how most revenue arrives. Project-led companies that design and install usually pick Landscaper as primary; route-based mowing and treatment businesses often fit Lawn care service. Add only secondary categories that match real work, since loosely related ones can dilute relevance.",
      },
      {
        q: "How quickly can a landscaper climb Google Maps?",
        a: "Profile and category fixes can lift map visibility within weeks in smaller towns. In a big metro, a contested search like “landscapers near me” tends to need several months of pages, reviews and links. The monthly report shows each suburb's movement, so progress is easy to read.",
      },
      {
        q: "Can landscapers rank in towns where they have no office?",
        a: "Yes, as a service-area business. You hide the street address, list the towns you serve, and back each important town with a page showing real projects there. Map rankings fade with distance, so suburb pages and reviews from those areas carry more weight.",
      },
      {
        q: "Will AI Overviews change SEO for landscaping companies?",
        a: "They already shape how homeowners research planting, irrigation and patio ideas. AI answers favor sites with clear, region-specific advice, consistent listings and steady reviews, which is the same footing strong local rankings need. A landscaper doing both well tends to get named.",
      },
      {
        q: "Do you work with commercial and HOA landscaping contractors?",
        a: "Yes. Property managers and HOA boards search for maintenance contracts, snow service and grounds care, not backyard designs. Those services get dedicated pages, commercial work is added to your profile, and contract inquiries are reported apart from residential calls.",
      },
      {
        q: "Is there a long-term contract for landscaper SEO?",
        a: "No contract. Plans run month to month, you keep ownership of the profile and website, and every report notes the month's changes. Many landscapers keep the plan through winter so rankings are in place when spring demand returns.",
      },
    ],
  },
  audit: {
    title: "See Where Your Landscaping Company Ranks by Suburb",
    lead: [
      "Tell us which services and suburbs matter most. We line your profile, pages and reviews up against the landscapers ranking above you and return a short, season-ready plan. Meet ",
      { href: "/about", label: "the crew behind our landscaper accounts" },
      " or explore ",
      { href: "/services", label: "our other services for outdoor firms" },
      ".",
    ],
    points: [
      "Map spots by suburb",
      "Landscaping keyword gaps",
      "Profile category check",
      "A season-ready first plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free landscaper SEO audit",
      title: "Request a Landscaping Ranking Review",
      subtitle: "No charge, no contract, honest notes.",
      submitText: "Send My Landscaping Audit",
      messageLabel: "Your site and the outdoor work you want",
      messagePlaceholder:
        "yourwebsite.com, lawn care or design-build, and the suburbs you cover",
    },
  },
  banner: {
    title: "Lead the Map for Every Yard You Want",
    lead: "Suburb-by-suburb rankings, AI mentions and steady consult requests, tracked in one plain report.",
  },
};
