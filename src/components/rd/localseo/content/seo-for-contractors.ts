/* SEO for Contractors — new hub page (26 Nov 2026).

   Research: research_notes/Home services and contractor SEO pages/
   seo_for_contractors.md (Semrush US, Google top 10s, the ranking agency
   pages, Google/FTC/BrightLocal sources, 26 Nov 2026).
   - Targets: seo for contractors 2,900 (KD 21) · contractor seo 2,900
     (KD 19); the two share 5 of their 10 Google results, so one page owns
     both. Secondary: contractor seo services, seo services for contractors,
     contractor seo company/agency, seo company for contractors, contractors
     seo, contractor search engine optimization, seo for trades.
   - Search Console (3 months): generic contractor-SEO searches reach the
     site only through /services/industry/local-seo-for-general-contractors
     (for example "seo company for contractors hoover", 167 impressions at
     12.2). That page was retuned in the same release to keep its general
     contractor, construction and home builder phrases and to link here.
   - Left to other pages: general contractor, construction and home builder
     SEO (GC page); every "home services seo" phrase and "local seo for
     contractors" (locked /services/local-seo-for-home-services, which
     already carries that H2 and FAQ); "[trade] seo" phrases (trade pages,
     linked from the explore grid, which makes this page the trade hub).
   - Gaps the ranking pages leave, used here: a real hub to every trade,
     service-area setup without a storefront, review-request rules (Google
     and the FTC), and AI search tied to what AI answers actually cite.
   No firm or platform is named in a claim, no prices outside the plan FAQ,
   no "inspection" wording and no storm theme. Hero combination pack /
   chat / calls is used by no other page. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/seo-for-contractors",
  audience: "Contractors and trade businesses",
  serviceName: "SEO for Contractors",
  meta: {
    title: "SEO for Contractors | Contractor SEO Services & Agency",
    description:
      "SEO for contractors in every trade: Google Maps, service and town pages, reviews and AI answers that turn local searches into calls and booked jobs.",
    keywords: [
      "seo for contractors",
      "contractor seo",
      "contractor seo services",
      "seo services for contractors",
      "contractor seo company",
      "seo company for contractors",
      "contractor seo agency",
      "seo agency for contractors",
      "contractors seo",
      "contractor search engine optimization",
      "seo for trades",
      "best seo for contractors",
    ],
  },
  hero: {
    h1Lead: "Contractor SEO Services",
    h1Rest: "That Book More Jobs",
    icon: "hammer",
    lead: [
      "Our SEO for contractors puts your company in the Map Pack, on page one and in AI answers when homeowners search for your trade in your towns. We fix your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", build service and town pages and keep reviews coming.",
    ],
    cta: "Get My Free Contractor SEO Audit",
    ui: {
      kind: "growth",
      maps: "pack",
      ai: "chat",
      growth: "calls",
      business: "Your Contracting Co.",
      category: "Contractor",
      query: "contractor near me",
      aiPrompt:
        "Which licensed contractor near me has the best recent reviews?",
      aiReasons: ["Licensed and insured", "Recent 5-star reviews"],
      growthLabel: "Calls from search",
      leads: [
        ["Water heater install call", "Google Maps"],
        ["Panel upgrade quote", "Service page"],
        ["Roof repair estimate", "ChatGPT answer"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top 3",
          title: "In the Map Pack for Your Trade",
          text: "Your profile shows in the top three when homeowners search your trade and town.",
        },
        {
          label: "AI answers",
          badge: "Recommended",
          title: "Named When Homeowners Ask AI",
          text: "Clear license, service and review facts give AI tools a reason to suggest you.",
        },
        {
          label: "Calls",
          badge: "Trending up",
          title: "More Calls From Search Each Month",
          text: "Calls and quote requests from search, logged by trade, page and town.",
        },
      ],
    },
  },
  searches: {
    title: "How Homeowners Find Contractors on Google Now",
    lead: "They search by job, by urgency and by trust, and each kind of search needs its own page or profile signal.",
    groups: [
      {
        icon: "clock",
        label: "Urgent job searches",
        terms: [
          "emergency plumber near me",
          "ac repair same day",
          "electrician near me open now",
          "roof leak repair near me",
          "garage door spring repair",
        ],
      },
      {
        icon: "hammer",
        label: "Project searches",
        terms: [
          "kitchen remodeling contractor",
          "roof replacement company",
          "bathroom remodel near me",
          "new hvac system installation",
          "fence installation near me",
          "window replacement company",
        ],
      },
      {
        icon: "shield",
        label: "Licensed and reviewed searches",
        terms: [
          "licensed electrician near me",
          "insured roofing contractor",
          "best plumber + your city",
          "contractor reviews near me",
          "certified hvac technician",
        ],
      },
    ],
  },
  services: {
    title: "SEO Services for Contractors,\nFrom Map Pack to Booked Job",
    lead: "Six services that turn trade and town searches into calls you can trace.",
    cta: "Audit My Contractor SEO",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Contractors",
        desc: "Categories for your trade, every service listed, service areas set without a storefront, and job photos posted as work wraps up.",
        points: [
          "Trade categories tested",
          "Service areas set right",
          "Job photos each week",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile optimization",
          },
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Google Maps ranking checker",
          },
        ],
      },
      {
        icon: "file",
        title: "Service and Town Pages",
        desc: "A page for each job you want more of and each town you cover, with local projects, license details and a clear way to call.",
        points: [
          "One page per service",
          "Town pages with real jobs",
          "Click-to-call on mobile",
        ],
        links: [{ href: "/services/web-design", label: "Contractor website design" }],
      },
      {
        icon: "camera",
        title: "Project Pages That Prove the Work",
        desc: "Finished jobs written up with the town, scope, timeline and photos, marked up with schema and linked from the matching service page.",
        points: [
          "Before-and-after photos",
          "Scope and timeline",
          "Project schema",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Reviews and Replies",
        desc: "A review request after every job, sent to every customer with no incentives, plus replies in your voice. Google forbids review incentives and the FTC bans fake reviews.",
        points: [
          "Post-job request texts",
          "Replies within days",
          "No incentives, ever",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile reinstatement",
          },
        ],
      },
      {
        icon: "tool",
        title: "Listings, Links and Technical Fixes",
        desc: "The same name, phone and service area across directories, local links from suppliers and trade groups, and speed and schema fixes.",
        points: ["Directory clean-up", "Local links", "Speed and schema"],
        links: [{ href: "/services/seo-services", label: "SEO services" }],
      },
      {
        icon: "sparkle",
        title: "AI Search for Contractors",
        desc: "License, service-area and project facts kept identical everywhere, so ChatGPT and Google's AI answers can confirm your company and name it.",
        points: [
          "License facts published",
          "Consistent listings",
          "AI mention checks",
        ],
        links: [{ href: "/services/ai-seo-services", label: "AI SEO" }],
      },
    ],
  },
  growth: {
    title: "How Contractor SEO Turns Searches Into Calls",
    lead: "Higher rankings for the jobs you want, mentions in AI answers and calls with a known source.",
    rank: {
      title: "Rank on Page One for Every Trade and Town",
      body: [
        "Homeowners search the job and the town, so we map each service you sell to its own page and check positions weekly against the contractors and directories holding page one today.",
      ],
      points: [
        "Service-by-town keyword map",
        "Weekly rank tracking",
        "Directory pages watched",
        "Biggest gaps fixed first",
      ],
      cta: "See My Contractor Keyword Gaps",
      keywords: [
        ["roof repair + your city", 24, 3],
        ["emergency electrician near me", 31, 5],
        ["water heater installation", 19, 2],
        ["kitchen remodel contractor", 35, 6],
      ],
    },
    ai: {
      title: "Get Named When Homeowners Ask AI for a Contractor",
      body: [
        "In BrightLocal's 2026 study of about 200,000 local prompts, business websites made up 42% of AI citations and Business Profiles 28.5%. Our ",
        {
          href: "/services/ai-seo-services",
          label: "AI search optimization",
        },
        " makes both spell out your trade, license and service area.",
      ],
      points: [
        "Website facts first",
        "Profile kept complete",
        "Reviews naming the job",
        "Monthly AI checks",
      ],
      cta: "Check My Contractor AI Mentions",
      query: "best licensed contractor near me for a bathroom remodel",
      intro: "For a bathroom remodel in your area,",
      bullets: [
        "Licensed and insured contractor",
        "Project photos with scope",
        "Recent reviews naming the work",
      ],
    },
    leads: {
      title: "Know Which Trade and Town Sends Each Call",
      body: [
        "Every call and form is logged with the page, search and town it came from, so you see which jobs pay. ",
        { href: "/services/google-ads", label: "Google Ads for contractors" },
        " can fill slow weeks while rankings build.",
      ],
      points: [
        "Call tracking by page",
        "Form source tagging",
        "Trade-by-trade reports",
        "Booked-job totals",
      ],
      cta: "Show Me Where My Calls Come From",
      items: [
        ["Water heater install call", "Google Maps", "Mon 7:52 AM"],
        ["Panel upgrade quote form", "Service page", "Tue 11:20 AM"],
        ["Roof repair call", "AI Overview link", "Wed 3:35 PM"],
        ["Deck build estimate", "Town page", "Fri 9:05 AM"],
      ],
    },
  },
  results: {
    title: "What Changes After Contractors Start SEO With Zonic",
    lead: "Profile fixes land first; pages, proof and reviews then lift calls across more towns.",
    cta: "Map My Contractor SEO Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Profile and Site Fixes",
        text: "Categories, service areas, speed and tracking are fixed, so Google reads the jobs you actually do.",
      },
      {
        when: "Month 1",
        title: "Service Pages Go Live",
        text: "Pages for your main jobs and towns launch and start competing for local searches.",
      },
      {
        when: "Months 2–4",
        title: "Reviews and Proof Build",
        text: "Project pages and fresh reviews help your profile climb the Map Pack in more towns.",
      },
      {
        when: "First busy season",
        title: "More Calls You Can Trace",
        text: "More calls and quote requests for the jobs you prefer, each logged with its source.",
      },
    ],
    wins: [
      {
        icon: "call",
        title: "Calls From Homeowners Ready to Book",
        text: "Urgent and project searches land on pages built for that exact job and town.",
      },
      {
        icon: "map",
        title: "Map Pack Spots in More Towns",
        text: "Service areas, photos and reviews widen the area where your profile shows up.",
      },
      {
        icon: "award",
        title: "A Name Homeowners Already Trust",
        text: "Reviews, project pages and license details make the first call easier to win.",
      },
      {
        icon: "repeat",
        title: "Less Reliance on Shared Leads",
        text: "Leads from your own rankings go to you alone and keep coming when you pause ads.",
      },
    ],
  },
  compare: {
    title: "How Zonic Runs Contractor SEO Differently",
    lead: "What contractors often get from SEO providers, beside what we do instead.",
    rows: [
      {
        topic: "Pages for your trade",
        other: "One generic services page that lists every job in a sentence.",
        zonic:
          "A page for each service and town, with local projects and license details.",
      },
      {
        topic: "Google Business Profile",
        other: "Set up once, then left alone for months.",
        zonic:
          "Weekly photos, posts and category checks, with service areas set by Google's rules.",
      },
      {
        topic: "Review requests",
        other: "Bulk review blasts, or nothing at all.",
        zonic:
          "A request after every job, no incentives, and replies in your voice.",
      },
      {
        topic: "Monthly reporting",
        other: "Traffic and ranking charts with no link to calls.",
        zonic:
          "Calls, forms and booked jobs by trade, page and town, every month.",
      },
      {
        topic: "AI search",
        other: "Not covered, or sold as a separate add-on.",
        zonic:
          "Included: consistent facts and project pages that AI answers can confirm.",
      },
      {
        topic: "Terms and ownership",
        other: "Annual contracts, and listings sometimes kept by the agency.",
        zonic:
          "Month to month, with every profile, site and account in your name.",
      },
    ],
  },
  steps: {
    title: "How We Run SEO for Contractors, Start to Finish",
    lead: "Fixes that bring calls soonest come first; pages, reviews and links compound from there.",
    items: [
      {
        h: "Audit Your Trade, Towns and Rivals",
        p: "We check your profile, site, reviews and rankings in each town against the contractors and directories on page one, then pick the jobs to target.",
      },
      {
        h: "Fix the Profile, Publish Service Pages",
        p: "Categories, service areas, speed and tracking get fixed first; service, town and project pages follow, with review requests after every job.",
      },
      {
        h: "Report Calls, Then Expand",
        p: "Each month you see rankings, calls, quote requests and booked jobs by trade; the pages that work best get more content and links.",
      },
    ],
    audit: [
      ["Map Pack rank by town", "behind"],
      ["Service pages", "gap"],
      ["Reviews in last 90 days", "open"],
      ["License details shown", "good"],
    ],
    plan: ["Service pages", "Town pages", "Project pages", "Reviews", "Links"],
    launch: ["Profile fixed", "Pages live", "Tracking on", "Reviews flowing"],
  },
  explore: {
    title: "Contractor SEO for Every Trade",
    lead: "Each trade has its own page with the searches, seasons and proof that matter for it.",
    items: [
      {
        name: "HVAC SEO",
        sub: "Heating and cooling contractors",
        href: "/services/industry/local-seo-services-for-hvac",
        icon: "hvac",
      },
      {
        name: "SEO for Plumbers",
        sub: "Plumbing and drain companies",
        href: "/services/industry/seo-services-for-plumber",
        icon: "plumbing",
      },
      {
        name: "Electrician SEO",
        sub: "Electrical contractors",
        href: "/services/industry/local-seo-for-electricians",
        icon: "electric",
      },
      {
        name: "Roofing SEO",
        sub: "Roofers and roofing contractors",
        href: "/services/industry/local-seo-for-roofing-companies",
        icon: "roof",
      },
      {
        name: "General Contractor SEO",
        sub: "GCs and home builders",
        href: "/services/industry/local-seo-for-general-contractors",
        icon: "construction",
      },
      {
        name: "Kitchen Remodeling SEO",
        sub: "Kitchen remodelers",
        href: "/services/industry/local-seo-for-kitchen-remodelers",
        icon: "kitchen",
      },
      {
        name: "Bathroom Remodeling SEO",
        sub: "Bath remodelers",
        href: "/services/industry/local-seo-for-bathroom-remodelers",
        icon: "bath",
      },
      {
        name: "Painting Contractor SEO",
        sub: "Interior and exterior painters",
        href: "/services/industry/local-seo-for-painting-contractors",
        icon: "paint",
      },
      {
        name: "Flooring SEO",
        sub: "Flooring installers and stores",
        href: "/services/industry/local-seo-for-flooring-companies",
        icon: "layers",
      },
      {
        name: "Window and Door SEO",
        sub: "Replacement companies",
        href: "/services/industry/local-seo-for-window-and-door-companies",
        icon: "window",
      },
      {
        name: "Garage Door SEO",
        sub: "Install and repair companies",
        href: "/services/industry/local-seo-for-garage-door-companies",
        icon: "garage",
      },
      {
        name: "Fence Company SEO",
        sub: "Fence builders",
        href: "/services/industry/fence-company-seo",
        icon: "fence",
      },
      {
        name: "Gutter SEO",
        sub: "Gutter contractors",
        href: "/services/industry/local-seo-for-gutter-companies",
        icon: "drop",
      },
      {
        name: "Solar SEO",
        sub: "Solar installers",
        href: "/services/industry/local-seo-for-solar-companies",
        icon: "solar",
      },
      {
        name: "Home Services SEO",
        sub: "Lawn, pest and cleaning trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
      {
        name: "Contractor Website Design",
        sub: "Sites built to win calls",
        href: "/services/web-design",
        icon: "monitor",
      },
    ],
    other:
      "Don't see your trade? Concrete, siding, insulation and other contractors get the same groundwork.",
  },
  reviews: {
    title: "Read What Trade Owners Say About Us on Google",
    lead: "Straight from our Google Business Profile, where clients rate us 5.0.",
  },
  pricing: {
    title: "Contractor SEO Plans With Monthly Terms",
    compareTitle: "Compare Contractor SEO Plans",
    addOnsTitle: "Add-Ons for New Trades and Towns",
    customTitle: "Running crews in several markets?",
  },
  faq: {
    title: "What Contractors Ask Before Paying for SEO",
    lead: "Cost, timing, Google Maps, AI search, reviews and how to choose an SEO company.",
    items: [
      {
        q: "What is SEO for contractors?",
        a: "It is the work that makes your company show up when homeowners search for your trade in your towns: your Google Business Profile, service and town pages, project proof, reviews, listings and links. It is judged by calls and booked jobs, not by traffic alone.",
      },
      {
        q: "How much does SEO cost for contractors?",
        a: "Our plans are $297, $950 or $1,500 a month, billed month to month. The right tier depends on your trade, how many towns you cover and how crowded those results are. Your free audit recommends one, and you can change tiers as your seasons change.",
      },
      {
        q: "How long does SEO take for contractors?",
        a: "Profile fixes and new service pages often show in Google Maps within weeks. Broad searches such as “roofer near me” in busy towns take several months, because directories and established contractors hold those spots. We report progress monthly so you can see what is moving.",
      },
      {
        q: "Is SEO worth it for contractors?",
        a: "For most contractors, yes, because the calls it brings come to you alone and keep coming after the work is done. Judge it by cost per booked job against your other lead sources; our reports show that number, so the answer is clear for your business.",
      },
      {
        q: "Is SEO better than Google Ads or lead sites for contractors?",
        a: "They do different jobs. Google Ads bring calls quickly but stop when you stop paying, lead sites often share each request with other contractors, and SEO builds calls you own over time. Most contractors pair SEO with ads for busy or slow weeks.",
      },
      {
        q: "How does SEO work for contractors?",
        a: "Google ranks local results on relevance, distance and prominence. You can't move your location, so SEO improves the other two: pages and profile details that match each job, plus reviews, links and mentions that show Google your company is well known nearby.",
      },
      {
        q: "Does contractor SEO include my Google Business Profile?",
        a: "Yes. Your profile drives most Map Pack results, so we set categories and services, add service areas, post job photos, keep hours and details current and reply to reviews. We also watch for unwanted edits and suspensions and fix them quickly.",
      },
      {
        q: "I work from home or out of a truck. Can I still rank on Google Maps?",
        a: "Yes. Google treats you as a service-area business: hide your home address, list up to 20 service areas within about two hours' drive, and skip virtual offices, which Google doesn't allow. Rankings then come from relevance, reviews and links rather than a storefront.",
      },
      {
        q: "Do you offer SEO for my specific trade?",
        a: "Yes. HVAC, plumbing, electrical, roofing, remodeling, painting, flooring, windows and doors, garage doors, fencing, gutters and solar each have their own page above, with the searches and proof that matter for that trade. Other contractors get the same groundwork.",
      },
      {
        q: "How do contractors get named in AI search results?",
        a: "AI answers lean on your own website and your Business Profile, so both need clear facts: services, service area, license and insurance, and project details. Google says no special AI optimization is needed beyond solid SEO, which is why it is part of every plan.",
      },
      {
        q: "Is it OK to ask customers for Google reviews?",
        a: "Yes, and you should ask every customer. Google forbids offering incentives for reviews or asking only happy customers, and the FTC bans fake reviews. A short text with your review link after each job is the simplest system that follows both rules.",
      },
      {
        q: "How do I choose an SEO company for contractors?",
        a: "Pick one that keeps every account in your name, works month to month and reports calls and booked jobs, not only rankings. Be wary of a promised #1 spot: Google says there is no way to request or pay for a better local ranking.",
      },
      {
        q: "Do I need a new website for contractor SEO?",
        a: "Not always. If your site loads fast, works on phones and can hold a page per service and town, we build on it. We suggest a rebuild only when the site blocks progress, and the website stays yours either way.",
      },
    ],
  },
  audit: {
    title: "Get a Free Contractor SEO Audit",
    lead: [
      "Tell us your trade and the towns you cover. We'll check your Map Pack rank in each town, compare your pages and reviews with the contractors above you and send a plain plan. Learn ",
      { href: "/about", label: "who we are" },
      " or see our other ",
      { href: "/services", label: "marketing services" },
      ".",
    ],
    points: [
      "Map Pack rank by town",
      "Service page gaps",
      "Profile and category check",
      "First-month priorities",
    ],
    form: {
      formType: "seo-for-contractors",
      badge: "Free contractor SEO audit",
      title: "Request Your Contractor SEO Audit",
      subtitle: "Free, with no obligation to sign.",
      submitText: "Send My Contractor SEO Audit",
      messageLabel: "Your trade, website and service area",
      messagePlaceholder:
        "yourwebsite.com, your trade and the towns you want more calls from",
    },
  },
  banner: {
    title: "Turn Trade Searches Into Booked Jobs",
    lead: "Map Pack spots, AI mentions and a call log that shows where every job began.",
  },
};
