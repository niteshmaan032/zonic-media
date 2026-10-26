/* Local SEO for Garage Door Companies — redesign draft copy (26 Oct 2026).
   Brief: docs/local-seo-redesign-brief.md. Fresh copy; nothing reused from
   the live page, the electricians reference, /services/seo-services-2 or
   /services/garage-door-marketing-agency-2.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: garage door repair seo company 822
     impressions (pos 20.6) · garage door seo 706 (35.0) · seo for garage
     door companies 589 (27.8) · garage door seo services 391 (27.8) ·
     garage door local seo marketing 383 (19.1) · local seo for garage door
     company 375 (25.0) · garage door repair seo agency 333 (16.2) · garage
     door repair seo services 311 · garage door repair seo 299 · garage
     door company seo 259 · local seo for garage door companies 208.
   - Semrush US: garage door seo 480 (KD 11) · seo for garage door
     companies 260 (1) · garage door repair seo 110 (9) · garage door seo
     company 50 (1).
   - Web research (Housecall Pro, Disruptive, Sterling Sky case study,
     vendor GBP guides, AI-search guides): searches are same-day and
     symptom-led (broken spring, off track, opener not responding); GBP
     advice pairs Garage door repair service with Garage door supplier;
     AI Overviews answer repair-cost and repair-or-replace questions and
     favour safety-correct guidance on spring work. Gaps in top pages: new
     door installs, after-hours handling, service-area towns without an
     office, DIY-safety content — each became a FAQ or card.
   - Title keeps the live ranking terms "Garage Door Repair SEO Company"
     and "local seo for garage door…"; the H1 leads with "Garage Door SEO". */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-garage-door-companies",
  audience: "Garage door repair and installation companies",
  serviceName: "Local SEO for Garage Door Companies",
  meta: {
    title: "Garage Door Repair SEO Company | Local SEO for Garage Doors",
    description:
      "Garage door SEO that ranks repair companies on Google Maps, local results and AI answers for broken springs, openers and new doors. Get a free garage door SEO audit.",
    keywords: [
      "garage door seo",
      "garage door repair seo company",
      "seo for garage door companies",
      "garage door seo services",
      "local seo for garage door companies",
      "garage door repair seo",
      "garage door repair seo agency",
      "garage door company seo",
      "garage door local seo",
      "garage door repair seo services",
    ],
  },
  hero: {
    h1Lead: "Garage Door SEO",
    h1Rest: "That Ranks You First for Broken Spring Calls",
    icon: "garage",
    lead: [
      "When a spring snaps and the car is trapped, people call whoever tops the map. As a garage door repair SEO company, we sharpen your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google profile",
      },
      ", build spring, opener and install pages for each town, and track every call.",
    ],
    cta: "Claim My Free Garage Door Audit",
    ui: {
      kind: "growth",
      maps: "pack",
      ai: "voice",
      growth: "feed",
      business: "Your Garage Door Co.",
      category: "Garage door repair",
      query: "garage door spring repair near me",
      aiPrompt: "Who can fix a broken garage door spring today?",
      aiReasons: ["Same-day spring repairs", "Strong local reviews"],
      growthLabel: "Garage door calls today",
      leads: [
        ["Broken spring call", "Google Maps"],
        ["Opener install booking", "Voice search"],
        ["New door estimate", "Door install page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Rank #1",
          title: "First in the Pack for Spring Repairs",
          text: "Your listing leads the pack, with Call and Directions one tap away.",
        },
        {
          label: "Voice & AI",
          badge: "Named",
          title: "The Shop Assistants Suggest Today",
          text: "Ask for a spring fix out loud and your company comes back first.",
        },
        {
          label: "Calls",
          badge: "Busier days",
          title: "A Phone That Rings Before Lunch",
          text: "Spring, opener and new door calls stack up from Maps and voice search.",
        },
      ],
    },
  },
  searches: {
    title: "Garage Door Searches That Turn Into Service Calls",
    lead: "We target the exact phrases homeowners type with a door stuck halfway or a spring in pieces.",
    groups: [
      {
        icon: "garage",
        label: "Stuck and broken garage door searches",
        terms: [
          "garage door spring repair near me",
          "garage door won't open",
          "garage door off track",
          "broken garage door cable",
          "emergency garage door repair",
          "garage door stuck closed",
        ],
      },
      {
        icon: "tool",
        label: "Garage door opener searches",
        terms: [
          "garage door opener repair",
          "opener not responding to remote",
          "smart garage door opener install",
          "garage door opener installation near me",
          "garage keypad not working",
          "belt drive opener replacement",
        ],
      },
      {
        icon: "door",
        label: "New garage door install searches",
        terms: [
          "new garage door installation",
          "insulated garage door replacement",
          "garage door quote near me",
          "carriage house garage doors",
          "commercial overhead door repair",
          "garage door weather seal replacement",
        ],
      },
    ],
  },
  services: {
    title: "Garage Door SEO Services\nfor Repair and Install Crews",
    lead: "Our garage door repair SEO services cover six jobs we run monthly, each tied to springs, openers and the installs with the biggest tickets.",
    cta: "Audit My Garage Door Site",
    items: [
      {
        icon: "pin",
        title: "Garage Door Profile and Maps Work",
        desc: "Garage door repair service as primary, Garage door supplier added if you sell doors, every service town listed and job photos posted weekly.",
        points: [
          "Repair and supplier categories",
          "Town-by-town area",
          "Weekly door photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile setup",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Profile verification",
          },
        ],
      },
      {
        icon: "file",
        title: "Spring, Opener and Town Pages for Garage Doors",
        desc: "Dedicated pages for springs, cables, off-track doors, openers and new installs, plus a page for every town with local job notes.",
        points: [
          "Spring and cable pages",
          "Opener repair pages",
          "Town job pages",
        ],
        links: [
          {
            href: "/services/garage-door-website-design",
            label: "Garage door website design",
          },
        ],
      },
      {
        icon: "star",
        title: "Garage Door Reviews After Each Call",
        desc: "A review link goes out as the tech leaves the driveway, and customers are prompted to mention the spring, opener or door they got.",
        points: [
          "Driveway review links",
          "Job named in reviews",
          "Replies to every review",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Garage Door Site Speed and Markup",
        desc: "Fast mobile pages for stranded homeowners, LocalBusiness and service markup, and cleaned-up indexing so every spring and town page gets crawled.",
        points: [
          "Mobile-first speed",
          "LocalBusiness markup",
          "Indexing repairs",
        ],
        links: [
          { href: "/services/web-design", label: "Search-ready web design" },
        ],
      },
      {
        icon: "layers",
        title: "Garage Door Citations and Builder Links",
        desc: "The same name, address and phone on each directory and listing app, with links earned from home builders, HOAs, manufacturer dealer pages and local press.",
        points: [
          "Directory cleanup",
          "Builder and HOA links",
          "Dealer page listings",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended profile",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "Garage Door Visibility in AI Search",
        desc: "Safety-first answers on springs, openers and repair-or-replace, backed by consistent company details, so assistants and AI Overviews cite you.",
        points: [
          "Spring safety answers",
          "Steady business facts",
          "AI citation checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI search services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Garage Door SEO Grows Repair and Install Work",
    lead: "Map spots for emergencies, AI mentions for new doors, and calls traced to the search that found you.",
    rank: {
      title: "Climb Higher for Springs, Openers and New Doors",
      body: [
        "Repair searches come with urgency and installs come with bigger tickets, so we target both with SEO for garage door repair and install work. Each service and town gets its own page, and positions are tracked weekly so you see where another garage door company still outranks you.",
      ],
      points: [
        "Repair and install map",
        "Town rank tracking",
        "Weekly position checks",
        "Rival listing review",
      ],
      cta: "See My Garage Door Gaps",
      keywords: [
        ["garage door repair near me", 16, 2],
        ["broken spring repair + your city", 28, 3],
        ["garage door opener repair", 25, 4],
        ["new garage door installation", 36, 5],
      ],
    },
    ai: {
      title: "Get Cited When Homeowners Ask AI About Doors",
      body: [
        "Before buying a new door, many homeowners ask AI about insulation, styles and whether a repair will do. Pages that answer plainly, plus reviews and listings that agree with each other, give assistants a source to quote. That is the core of our ",
        { href: "/services/ai-seo-services", label: "AI visibility work" },
        ".",
      ],
      points: [
        "Install and style FAQs",
        "Repair-or-replace answers",
        "Matching listings",
        "AI mention reports",
      ],
      cta: "Check My Garage Door AI Mentions",
      query: "should i repair or replace my garage door",
      intro: "For a garage door replacement nearby,",
      bullets: [
        "Clear install and style page",
        "Insured, licensed installers",
        "Reviews naming new doors",
      ],
    },
    leads: {
      title: "Count Every Garage Door Call by Source",
      body: [
        "Each spring, opener and install call is logged against the door page and keyword that triggered it. The call button stays within thumb reach on phones, and we run ",
        {
          href: "/services/google-ads",
          label: "Google Ads for garage door companies",
        },
        " in towns where garage door local SEO rankings are still building.",
      ],
      points: [
        "Calls tied to pages",
        "Call button in thumb reach",
        "Quote form per service",
        "Monthly garage door lead report",
      ],
      cta: "Show My Garage Door Call Sources",
      items: [
        ["Broken spring call", "Google Maps", "Mon 7:15 AM"],
        ["New door quote form", "Install page", "Mon 1:05 PM"],
        ["Opener reset request", "AI Overview link", "Thu 9:50 AM"],
        ["Off-track door call", "Town page", "Tue 5:22 PM"],
      ],
    },
  },
  results: {
    title: "What Garage Door Companies Notice With Zonic",
    lead: "With our local SEO services for garage door companies, the listing gets fixed first, then spring and install pages go up, and reviews and calls start to build.",
    cta: "Show My Garage Door Growth Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Door Categories Corrected",
        text: "Repair and supplier categories, hours and service towns get fixed, so Google stops misreading what you do.",
      },
      {
        when: "Month 1",
        title: "Spring and Opener Pages Live",
        text: "Pages for springs, cables, openers and new doors start competing in the towns you want.",
      },
      {
        when: "Months 2–4",
        title: "Climbing Maps Town by Town",
        text: "Fresh reviews from driveway visits and builder links tend to raise your listing beyond your home town.",
      },
      {
        when: "Month 4 onward",
        title: "Repair and Install Calls Grow",
        text: "More spring, opener and new door calls come in, and each one shows which search sent it.",
      },
    ],
    wins: [
      {
        icon: "garage",
        title: "More Same-Day Spring Repair Calls",
        text: "Stranded homeowners find a fast page and a call button before they scroll to another listing.",
      },
      {
        icon: "door",
        title: "Bigger Tickets From New Door Installs",
        text: "Style, insulation and replacement pages bring buyers who research longer and spend more per job.",
      },
      {
        icon: "star",
        title: "Reviews That Mention Springs and Openers",
        text: "Customers name the part you fixed and how fast you arrived, which reassures the next caller.",
      },
      {
        icon: "pin",
        title: "Calls From Towns Beyond Your Base",
        text: "Town pages and local reviews help a service-area garage door company show up where it has no office.",
      },
    ],
  },
  compare: {
    title: "Zonic vs. a Typical SEO Firm for Garage Door Pros",
    lead: "How our garage door SEO company compares with what door companies often receive.",
    rows: [
      {
        topic: "Spring and cable emergencies",
        other:
          "Urgent repair searches treated like any other keyword on a long list.",
        zonic:
          "Spring, cable and off-track pages paired with accurate hours and a pinned call button.",
      },
      {
        topic: "Door company profile categories",
        other: "A single category picked at setup and rarely checked again.",
        zonic:
          "Repair service as primary, supplier added if you sell doors, reviewed as you grow.",
      },
      {
        topic: "Opener and install pages",
        other: "Repairs and new doors lumped onto one generic services page.",
        zonic:
          "Separate opener repair, new door and town pages, each written around what buyers search.",
      },
      {
        topic: "Garage door DIY content",
        other:
          "Thin blog posts that can push risky spring repairs onto readers.",
        zonic:
          "Safety-first answers that send torsion spring work to a pro, written to be quotable.",
      },
      {
        topic: "Builder and HOA links for doors",
        other: "Bulk links from sites that never mention garage doors.",
        zonic:
          "Consistent listings plus links from home builders, HOAs, dealer pages and local press.",
      },
      {
        topic: "Garage door call tracking",
        other: "Reports full of rankings, with no tie to calls or quotes.",
        zonic:
          "Every call and quote form traced to its page and search, shown in a monthly report.",
      },
    ],
  },
  steps: {
    title: "How We Run Local SEO for Garage Door Companies",
    lead: "We clear profile and technical problems first, then add door pages, reviews and links monthly.",
    items: [
      {
        h: "Audit the Garage Door Map in Each Town",
        p: "We map where you sit for each town's door searches, study the listings outranking you, and choose the repair and install terms worth winning.",
      },
      {
        h: "Repair the Listing, Build Door Pages",
        p: "Category, hours and technical fixes go live first; spring, opener and town pages follow, with review links in every closeout.",
      },
      {
        h: "Track Garage Door Calls, Push Winners",
        p: "Each month you see calls, quotes and positions by service and town, and we shift effort toward the jobs that paid.",
      },
    ],
    audit: [
      ["Spring search rank", "behind"],
      ["Opener page", "gap"],
      ["Review links", "open"],
      ["Page speed", "behind"],
    ],
    plan: [
      "Spring page",
      "Opener page",
      "Install page",
      "Town pages",
      "Builder links",
    ],
    launch: [
      "Profile fixed",
      "Door pages live",
      "Reviews growing",
      "Calls counted",
    ],
  },
  explore: {
    title: "Other Services for Garage Door Companies",
    lead: "Garage door company SEO turns into booked jobs faster with a quick, clear website and paid ads for new towns.",
    items: [
      {
        name: "Garage Door Marketing",
        sub: "SEO, ads and reviews together",
        href: "/services/garage-door-marketing-agency",
        icon: "garage",
      },
      {
        name: "Garage Door Websites",
        sub: "Sites built to book repairs",
        href: "/services/garage-door-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Calls in towns still ranking",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "The same Maps work for every trade",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Also install gates or overhead doors? Those jobs can sit in the same garage door plan.",
  },
  reviews: {
    title: "What Owners Wrote About Our SEO Team on Google",
    lead: "Every review below comes straight from Google, unedited.",
  },
  pricing: {
    title: "Garage Door SEO Plans, Month to Month",
    compareTitle: "Compare Plans for Garage Door Companies",
    addOnsTitle: "Add-Ons for Garage Door Crews",
    customTitle: "Running Multiple Garage Door Branches?",
  },
  faq: {
    title: "Garage Door SEO Questions We Get Asked",
    lead: "Costs, timelines, categories and what it takes to rank for emergency door repairs.",
    items: [
      {
        q: "What does a garage door repair SEO company do?",
        a: "It makes your company the first door pro locals see on Google. The work covers your Business Profile, spring, opener and town pages, review requests, citations, links and site fixes, with Map Pack and first-page placement for spring, opener and install searches as the goal.",
      },
      {
        q: "How much does garage door SEO cost?",
        a: "Plans are $297, $750 or $1,500 a month with no long contract. A one-van door company usually starts on the entry plan; outfits spread across a wider metro, or pairing SEO with managed Google Ads, usually need plan two or three. The audit settles which one fits your crews.",
      },
      {
        q: "When does garage door SEO start paying off?",
        a: "Listing fixes and new spring and opener pages often move Maps positions within weeks. Competitive terms like “garage door repair near me” in a big metro usually take several months. Reports show rankings and calls monthly, so you never have to guess where things stand.",
      },
      {
        q: "Which searches should a garage door company rank for?",
        a: "Lead with urgent repairs, then installs: “garage door repair near me”, “broken spring repair” with your town, “garage door opener repair”, “garage door off track” and “new garage door installation”. The audit sizes each one locally, and we build pages for those that pay.",
      },
      {
        q: "What Google category should a garage door company use?",
        a: "Garage door repair service fits most repair-led companies as the primary, with Garage door supplier added if you sell and install doors. List only work you do, and fill the services section with springs, openers and installs so Google can match more searches.",
      },
      {
        q: "Can a garage door company rank in towns without an office?",
        a: "Yes. Set the profile up as a service-area garage door business: hide the address if customers don't visit, list the towns you cover, and build a page for each with real jobs and photos from that town. Maps favors nearby listings, so outer towns lean more on organic pages and reviews.",
      },
      {
        q: "Should garage door companies publish DIY repair tips?",
        a: "Some, carefully. Lubrication, weather seals and opener resets are fair game, but torsion spring and cable work should point to a pro for safety. Those safety-first answers build trust with readers and are the kind of content AI Overviews tend to quote.",
      },
      {
        q: "Does garage door SEO help sell new doors, not just repairs?",
        a: "Yes. Install buyers research longer, so they need style, insulation and material pages, before-and-after photos and reviews that mention new doors. We build that side alongside the repair pages and report install quotes separately, since those jobs carry the biggest tickets.",
      },
      {
        q: "Will AI search change how garage door companies get found?",
        a: "It already has. Google AI Overviews answer repair-cost and repair-or-replace questions, and ChatGPT names a few local companies when asked. Both draw on plain-spoken spring and opener pages, consistent listings and reviews that describe the repair, which is exactly what strong garage door SEO builds.",
      },
      {
        q: "Do garage door SEO plans require a long contract?",
        a: "No. Garage door plans run month to month and you can cancel whenever you like. The Google profile, site and call numbers belong to your business, not to us. Each report spells out the changes made. If Google suspends your listing, our reinstatement team can help bring it back.",
      },
    ],
  },
  audit: {
    title: "Free Garage Door Ranking Review for Your Towns",
    lead: [
      "Send your website and the door jobs you'd like more of. We'll compare where you appear on Maps in every town you cover, plus your pages and reviews, against nearby door companies, then reply with a door-by-door plan. Meet ",
      { href: "/about", label: "the team behind our garage door work" },
      " or scan ",
      { href: "/services", label: "our wider service list" },
      ".",
    ],
    points: [
      "Maps rank by town",
      "Spring and opener keyword gaps",
      "Category and photo review",
      "A first-month action list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free garage door SEO audit",
      title: "Book a Garage Door Rankings Audit",
      subtitle: "Free. No contract, no hard sell.",
      submitText: "Send My Garage Door Audit",
      messageLabel: "Your website and main garage door services",
      messagePlaceholder:
        "yourwebsite.com, springs, openers or installs, and the towns you serve",
    },
  },
  banner: {
    title: "Win the Next Snapped-Spring Call in Town",
    lead: "Top map spots, AI citations and a call log that shows which searches paid off.",
  },
};
