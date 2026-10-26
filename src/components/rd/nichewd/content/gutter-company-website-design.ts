/* Gutter Company Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page (already top 10, so "gutter
     company website design" stays exact in the title and H1): gutter
     company website design 94 impressions (pos 7.6) · website design for
     gutter companies 50 (4.7) · gutter website services 45 (10.8) ·
     website design agency for gutter contractors 44 (5.6) · gutter
     website hosting 25 (8.8) · website builder for gutter cleaning
     services 2 (27.5).
   - Semrush US: gutter company website design 10 · gutter website design
     10 (tiny; Search Console matters more here).
   - Web research (gutter contractor site guides and gutter company sites,
     2026): one page per service (seamless installs, guards, cleaning,
     repair) because each draws a different buyer; guard comparison pages
     so visitors research before calling; short estimate forms with
     footage and photos; one-tap calling for homeowners searching in the
     moment; install galleries on real local homes; recurring cleaning
     plans and guard upsells for the slow months; fall is peak season.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company named, verified numbers only, every live
   content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/gutter-company-website-design",
  stage: {
    widget: "quote",
    switchLabel: "Preview the example site by gutter service",
    business: "Your Gutter Co.",
    domain: "yourgutterco.com",
    nav: ["Seamless", "Guards", "Cleaning", "Areas"],
    call: "Call today",
    primary: "Free estimate",
    secondary: "View colors",
    proof: "Reviewed by area homeowners",
    bookTitle: "Free gutter quote",
    confirm: "Get my quote",
    serviceSubs: ["Measured on site", "Colors to match", "Clean-up included"],
    toast: "Quote requested",
    toastNote: "Callback today",
    phoneCta: "Quote",
    modes: [
      {
        label: "Seamless install",
        icon: "water",
        badge: "Seamless gutters · Free measure",
        headline: "Leaky Seams? Go Seamless This Season.",
        sub: "Custom-formed aluminum and copper gutters, downspouts and fascia repair.",
        services: ["Seamless gutters", "Downspouts", "Fascia repair"],
        book: ["New gutters", "Downspouts", "Copper runs"],
        img: {
          src: "/images/free-website/free-roof/gutters-siding.webp",
          position: "50% 30%",
        },
      },
      {
        label: "Gutter guards",
        icon: "leaf",
        badge: "Guards · Cleaning plans",
        headline: "Never Climb a Ladder to Clean Gutters Again.",
        sub: "Guard installs, seasonal cleaning plans and clog checks for every roofline.",
        services: ["Guard install", "Cleaning plans", "Clog checks"],
        book: ["Guard install", "Fall cleaning", "Clog check"],
        img: {
          src: "/images/home-improvement-web/gutter-company-first-impressions-1.webp",
          position: "50% 30%",
        },
      },
    ],
    legend: [
      "Header click-to-call",
      "Seamless and guard pages",
      "Short gutter quote form",
      "Thumb-reach call bar",
    ],
  },
  // Teal seamless, coral guards, then indigo and gold (tones.ts).
  tones: tonesFor("gutter-company-website-design"),
  serviceName: "Gutter Company Website Design",
  audience:
    "gutter installers, gutter guard dealers and gutter cleaning companies",
  meta: {
    title: "Gutter Company Website Design | Gutter Website Services",
    description:
      "Gutter company website design for seamless gutter, guard and cleaning contractors: quote forms, town pages and hosting built to win more installs.",
    keywords: [
      "gutter company website design",
      "website design for gutter companies",
      "gutter website services",
      "gutter website design",
      "website design agency for gutter contractors",
      "web design for gutter contractors",
      "gutter website hosting",
      "gutter contractor website",
      "gutter cleaning website",
      "seamless gutter company website",
      "gutter guard website design",
      "website builder for gutter cleaning services",
    ],
  },
  hero: {
    h1Lead: "Gutter Company Website Design",
    h1Rest: "That Keeps Quote Requests Flowing",
    icon: "drop",
    lead: [
      "We build gutter company websites that explain seamless runs, guards and cleaning plans in plain words, with a short quote form under every page. Your ",
      { href: "/services/web-design", label: "custom website" },
      " for gutter work launches in 2–3 weeks with managed hosting and town pages for every area your crews cover.",
    ],
    cta: "Get My Free Gutter Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/gutter-company-hero-v2.webp",
        position: "center",
        query: "seamless gutters near me",
      },
      cardA: {
        icon: "drop",
        title: "Estimates Lined Up Before Fall",
        sub: "Quote requests stacked ahead of leaf season",
      },
      photoB: {
        src: "/images/home-improvement-web/gutter-company-first-impressions-1.webp",
        position: "62% 30%",
        query: "gutter guard installation",
      },
      cardB: {
        icon: "repeat",
        title: "Cleaning Clients Who Rebook",
        sub: "Seasonal plans homeowners join online",
      },
    },
  },
  showcase: {
    title: "Try a Gutter Contractor Website With Two Landing Pages",
    lead: "Switch between seamless installs and gutter guards to see the offer, quote form and phone view update.",
  },
  services: {
    title: "Gutter Website Services for\nInstallers and Cleaning Crews",
    lead: "Everything a gutter business needs online, from the first page to hosting and edits.",
    cta: "Plan My Gutter Website",
    items: [
      {
        icon: "monitor",
        title: "Gutter Contractor Websites Built to Order",
        desc: "Custom design and copy around the gutter work you actually sell, whether that's seamless aluminum, copper or guard installs.",
        points: [
          "One-off design",
          "Service-by-service pages",
          "Written by our team",
        ],
        links: [{ href: "/services/web-design", label: "See our web design" }],
      },
      {
        icon: "leaf",
        title: "Guard Comparison and Cleaning Pages",
        desc: "Pages that compare screen, mesh and cover-style guards, plus cleaning plan pages that sell spring and fall visits.",
        points: [
          "Guard style guide",
          "Cleaning plan sign-up",
          "Ice dam add-ons",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-gutter-companies",
            label: "Local SEO for gutter companies",
          },
        ],
      },
      {
        icon: "clipboard",
        title: "Quote Forms With Footage and Photos",
        desc: "A three-step form asks for rough footage, stories and a photo of the roofline, so you can quote faster and skip wasted trips.",
        points: ["Footage field", "Photo upload", "Text-back alerts"],
        links: [],
      },
      {
        icon: "pin",
        title: "Town Pages and Profile Setup",
        desc: "Pages for each town you work in, tied to a verified Google profile so the site and the map listing support each other.",
        points: [
          "Town-level pages",
          "Profile verification",
          "Matching contact details",
        ],
        links: [
          {
            href: "/services/gmb-verification-help",
            label: "Google profile verification help",
          },
        ],
      },
      {
        icon: "target",
        title: "Fall Rush Landing Pages",
        desc: "Focused pages for cleaning and guard promotions, built to pair with paid search when leaves start dropping.",
        points: ["Promo landing pages", "Call-only layouts", "Seasonal offers"],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for gutter companies",
          },
        ],
      },
      {
        icon: "tool",
        title: "Gutter Website Hosting and Care",
        desc: "Managed hosting, security patches, backups and quick content edits, so your site stays fast and safe all year.",
        points: ["Managed hosting", "Security patches", "Edits on request"],
        links: [],
      },
    ],
  },
  features: {
    title: "Gutter Website Must-Haves We Never Skip",
    lead: "Small details that decide whether a homeowner calls you or the next gutter crew.",
    items: [
      {
        icon: "phone",
        title: "Call Button Within Thumb Reach",
        text: "A fixed call bar sits at the bottom of every phone screen.",
      },
      {
        icon: "clipboard",
        title: "A Three-Step Quote Form",
        text: "Footage, a photo and contact details, quick to finish on a phone.",
      },
      {
        icon: "leaf",
        title: "Guard Options Side by Side",
        text: "Visitors compare guard styles and pick one before they ever call.",
      },
      {
        icon: "camera",
        title: "Install Photos From Real Homes",
        text: "Seamless runs and guard jobs on houses in your own service area.",
      },
      {
        icon: "calendar",
        title: "Cleaning Plan Sign-Up",
        text: "Homeowners choose spring, fall or both and join online.",
      },
      {
        icon: "star",
        title: "Star Ratings Under the Headline",
        text: "Review scores show up before anyone scrolls past the first screen.",
      },
      {
        icon: "bolt",
        title: "Pages That Load on a Ladder",
        text: "Light, quick pages for homeowners checking from the driveway.",
      },
      {
        icon: "shield",
        title: "Secure Hosting Included",
        text: "SSL, backups and updates handled for you on managed servers.",
      },
    ],
  },
  growth: {
    title: "How Website Design for Gutter Companies Pays Off",
    lead: "Rank for gutter searches, win the quote on a phone and get mentioned in AI answers.",
    rank: {
      title: "Own Gutter Searches Across Your Service Area",
      body: [
        "We write pages for what homeowners search when water spills over the edge, from seamless gutter installation to guard quotes, then track positions every week. Pair them with ",
        {
          href: "/services/industry/local-seo-for-gutter-companies",
          label: "gutter company local SEO",
        },
        " and a ",
        {
          href: "/local-seo-google-business-optimization",
          label: "fully optimized Google Business Profile",
        },
        " so your map listing pulls its weight too.",
      ],
      points: [
        "Pages per gutter service",
        "Town landing pages",
        "Weekly position checks",
        "Local business schema",
      ],
      cta: "Map My Gutter Pages",
      keywords: [
        ["seamless gutters near me", 26, 3],
        ["gutter guard installation", 33, 4],
        ["gutter cleaning + your city", 22, 2],
        ["downspout repair", 29, 5],
      ],
    },
    convert: {
      title: "Win the Quote From a Homeowner's Phone",
      body: [
        "A two-step quote request a homeowner can finish from the driveway, a phone button pinned to the screen and fast pages turn browsers into estimate requests. Each request is tagged with the page behind it, and ",
        { href: "/services/google-ads", label: "paid search campaigns" },
        " can feed whichever pages convert best.",
      ],
      points: [
        "Always-visible call button",
        "Short quote form",
        "Lead source tags",
        "Text-back on new requests",
      ],
      cta: "Show Me the Quote Flow",
      url: "yourgutterco.com",
      headline: "Overflowing Gutters? Get a Fast Quote",
      services: ["Seamless gutters", "Gutter guards", "Cleaning", "Repairs"],
    },
    ai: {
      title: "Become the Gutter Pro That AI Answers Mention",
      body: [
        "When guard comparisons and cleaning schedules are written as direct answers, AI assistants and Google's AI Overviews can quote your site and mention your company by name, the same groundwork behind our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Guard comparison guides",
        "Direct-answer FAQs",
        "Structured data",
        "Answer-engine checks",
      ],
      cta: "See If AI Mentions Me",
      query: "are gutter guards worth it for my house",
      intro: "For gutter guard installs in your area,",
      bullets: [
        "Guard options compared",
        "Seamless installs",
        "Fall cleaning plans",
      ],
    },
  },
  sitemap: {
    title: "How We Structure a Gutter Contractor Website",
    lead: "Separate pages for installs, guards, cleaning and towns, so every gutter search lands in the right place.",
    home: "Your Gutter Co. homepage",
    groups: [
      {
        name: "Installs",
        icon: "water",
        pages: ["Seamless gutters", "Copper gutters", "Downspouts"],
      },
      {
        name: "Protection",
        icon: "leaf",
        pages: ["Gutter guards", "Leaf screens", "Ice dam prevention"],
      },
      {
        name: "Maintenance",
        icon: "repeat",
        pages: ["Gutter cleaning", "Gutter repair", "Cleaning plans"],
      },
      {
        name: "Areas Served",
        icon: "pin",
        pages: ["City page", "Neighborhood pages", "County coverage"],
      },
    ],
  },
  results: {
    title: "What Gutter Contractors Gain in the Months After Launch",
    lead: "Visibility builds, quote requests get easier to track and fall demand lands on pages built for it.",
    cta: "Plan My Gutter Site Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Quote Forms and Tracking Live",
        text: "Every form and call is tagged from day one, so you see which pages bring in work.",
      },
      {
        when: "Month 1",
        title: "Google Finds Your Gutter Pages",
        text: "Install, guard and cleaning pages get crawled and start turning up in nearby results.",
      },
      {
        when: "Months 2–3",
        title: "Gutter Town Pages Climb",
        text: "Reviews and install photos push town pages higher for gutter searches nearby.",
      },
      {
        when: "Leaf season",
        title: "Guard and Cleaning Demand Captured",
        text: "Promo pages and cleaning plans catch the autumn rush instead of sending it elsewhere.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Cleaning Routes Filled Early",
        text: "Plan sign-ups arrive before the season, so routes are set ahead of time.",
      },
      {
        icon: "clipboard",
        title: "Better-Prepared Quote Requests",
        text: "Footage and photos come with each request, so quoting takes less back-and-forth.",
      },
      {
        icon: "leaf",
        title: "More Guard Upsells",
        text: "Guard comparison pages turn cleaning customers into guard installs.",
      },
      {
        icon: "star",
        title: "A Name Homeowners Trust",
        text: "Real install photos and visible reviews make your crew the safe pick.",
      },
    ],
    band: [
      {
        icon: "target",
        value: "Guard Upgrades",
        label: "Gutter guard pages that sell the add-on",
      },
      {
        icon: "calendar",
        value: "Seasonal Cleaning Lists",
        label: "Fall and spring cleanings booked in one place",
      },
      {
        icon: "camera",
        value: "Quotes From Photos",
        label: "Estimate forms that take a snapshot of the roofline",
      },
      {
        icon: "search",
        value: "Top of Town Results",
        label: "A page for every area you serve",
      },
    ],
  },
  process: {
    title: "Four Steps to a Live Gutter Website in 2–3 Weeks",
    lead: "Gutter clients get a short kickoff, a mockup to approve and a launch date agreed early.",
    items: [
      {
        when: "Week 1",
        h: "Kickoff Call and Mockup",
        p: "We list your gutter services, metals and towns, and sketch the homepage for your sign-off.",
      },
      {
        when: "Weeks 1–2",
        h: "Copy, Photos and Guard Pages",
        p: "Pages are written for homeowners comparing seamless runs, guards and cleaning.",
      },
      {
        when: "Weeks 2–3",
        h: "Forms, Hosting and Redirects",
        p: "Quote forms, call tracking and hosting are set up, and old URLs are redirected.",
      },
      {
        when: "Launch",
        h: "Live Before the Leaves Fall",
        p: "Your site goes live with seasonal pages ready for the busiest weeks of the year.",
      },
    ],
  },
  compare: {
    title: "Why a Builder Template Leaves Gutter Jobs on the Table",
    lead: "A drag-and-drop builder gets you online. A custom gutter site gets you quote requests.",
    otherLabel: "Drag-and-drop builder site",
    rows: [
      {
        topic: "Gutter and guard options",
        other: "Seamless, guards and cleaning crammed into one paragraph.",
        zonic:
          "Separate pages for seamless, copper, guards and cleaning plans.",
      },
      {
        topic: "Quote requests",
        other: "A generic contact form with name, email and message.",
        zonic:
          "A short gutter form asking footage, stories and a roofline photo.",
      },
      {
        topic: "Fall rush",
        other: "The same homepage message from January to December.",
        zonic: "Cleaning and guard promos switched on before leaves drop.",
      },
      {
        topic: "Hosting and security",
        other: "Plugins, updates and backups left for you to manage.",
        zonic: "Managed gutter website hosting with updates and SSL handled.",
      },
      {
        topic: "Town rankings",
        other: "A list of towns pasted into the footer.",
        zonic: "Town pages with local installs, reviews and directions.",
      },
      {
        topic: "Proof of quality",
        other: "Stock photos of gutters that aren't yours.",
        zonic: "Your own install photos, sorted by service and town.",
      },
    ],
  },
  reviews: {
    title: "Real 5.0 Google Reviews From Business Owners We've Served",
    lead: "Read them on our public Google profile before you pick a web partner.",
  },
  pricing: {
    title: "Growth Plans for Gutter Company Websites",
    compareTitle: "Plan-by-Plan Features for Gutter Sites",
    addOnsTitle: "Extras for Gutter Installers and Cleaners",
    customTitle: "Covering Several Metro Areas With Gutter Crews?",
  },
  faq: {
    title: "Gutter Website Questions Owners Ask Us",
    lead: "Cost, timing, hosting and what a gutter company site really needs.",
    items: [
      {
        q: "What does gutter company website design cost?",
        a: "It depends on your services, service area and features such as cleaning plan sign-ups. After a short free call you receive one fixed price for the full build, with no surprise add-ons. Choose a qualifying monthly growth plan and the gutter site is built free through our website offer.",
      },
      {
        q: "How long until my gutter website is live?",
        a: "Usually 2–3 weeks. Week one brings your gutter homepage mockup, the next stretch covers copy, photos and guard pages, and the final days go to quote forms, hosting setup and redirect checks, so the site is ready well ahead of the fall cleaning rush.",
      },
      {
        q: "What should a gutter company website include?",
        a: "A visible phone number, a short quote form, a page each for seamless installs, guard systems, cleaning visits and repair calls, real install photos, reviews near the buttons, town pages for your whole service area and fast, secure hosting that works well on phones.",
      },
      {
        q: "Is a website builder enough for a gutter cleaning business?",
        a: "A builder can work while you're starting out, but it rarely ranks for several towns and leaves updates and security to you. A custom gutter site adds service and town pages, cleaning plan sign-ups and tracked quote forms that builders don't offer well.",
      },
      {
        q: "Do you offer gutter website hosting?",
        a: "Yes. Every site we build runs on managed hosting with SSL, backups, security patches and uptime checks. Content edits are part of the service too, so you never have to log in, update plugins or fix a broken page yourself during your busiest weeks.",
      },
      {
        q: "Should gutter guards and gutter cleaning have separate pages?",
        a: "Yes. People searching for guards and people searching for cleaning want different things, so one page can't rank well for both. Separate pages let each answer its own questions, show the right photos and point to the right quote or booking option.",
      },
      {
        q: "Can my site sell seasonal gutter cleaning plans?",
        a: "Yes. We add a plan page where homeowners choose spring, fall or both visits and sign up online. Plan requests arrive with the address and roofline details, so you can set routes before the busy season and send reminders when each visit is due.",
      },
      {
        q: "Will a new website hurt the rankings my gutter site already has?",
        a: "We plan the move so it doesn't. Pages that rank today keep their URLs or get exact redirects, titles that work are kept, and the new sitemap is submitted at launch. Rankings and calls are then watched closely for the first weeks.",
      },
    ],
  },
  consult: {
    title: "Free Gutter Homepage Mockup, Built Around Your Services",
    lead: [
      "Tell us what you install, clean and protect, plus the towns you cover, and a gutter homepage mockup with a page plan lands in your inbox, free. Want a quick chat first? ",
      { href: "/contact-us", label: "Reach out to us" },
      ", meet ",
      { href: "/about", label: "the people behind Zonic" },
      ", look through ",
      { href: "/services", label: "our services" },
      " or have a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google profile reinstated",
      },
      ". Gutter contractors can also dig into ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home service businesses",
      },
      ".",
    ],
    points: [
      "Homepage mockup at no cost",
      "Install and guard page plan",
      "Quote form review",
      "Launch in 2–3 weeks",
    ],
    form: {
      formType: "gutter-company-website-design",
      badge: "Free gutter homepage mockup",
      title: "Request Your Gutter Website Mockup",
      subtitle: "Free and with no obligation.",
      submitText: "Send My Gutter Request",
      messageLabel: "Your gutter business and service area",
      messagePlaceholder:
        "Business name, current website (if any), gutter services you offer and the towns you work in",
    },
  },
  banner: {
    title: "Give Every Downpour a Path to Your Phone",
    lead: "Seamless and guard pages, a quick quote form and hosting handled for you.",
  },
};
