/* Fence Company Website Design — new live page copy (5 Nov 2026).

   Research, 5 Nov 2026 (reports/research/fence-keywords-2026-11.md):
   - Semrush US (web app): fence company websites 50 (KD 55) · fence
     contractor website design 30 · fencing websites 30 · fence company
     website design / website for fence company / web design for fence
     companies: no measured volume, but 267 long-tail terms sit under the
     "fence company web design" topic. Title pairs "Fence Company Website
     Design" with "Fence Contractor Websites".
   - Customer demand the example site and sections reflect: fence company
     near me 90.5K · fence installation 60.5K · fence repair near me 22.2K ·
     vinyl 9.9K · chain link 8.1K · wood 4.4K · pool 3.6K · aluminum 2.9K ·
     privacy 2.9K · fence cost calculator 1.6K · fence financing 880 ·
     fence quote 880 · gate installation near me 880 · fence estimate 720 ·
     fence permit 590 · farm fence installation 320.
   - Search Console: web design pages already earn price-intent queries
     ("how much does an hvac website cost"), so the cost FAQ answers with
     the one-time starting price the pricing card shows.
   - Web research (fence website guides, homeowner FAQ pages, city fence
     permit sheets, AI-search guides for contractors, 2026): a short,
     phone-friendly estimate or quote form is the most repeated must-have;
     galleries sorted by material are the main sales tool; a financing
     button near the top; per-material pages; homeowners ask about
     permits, HOA approval, setbacks and property lines (a surveyor, not
     the installer, fixes the line), utility marking, pool-gate rules,
     gates, old-fence removal, warranty and timelines; AI assistants lean
     on recent reviews naming the service and town, FAQ/Service schema and
     consistent business facts.
   Cannibalization (docs/fence-and-inspector-brief-2026-11.md): this page
   owns the website terms only. "Fence company SEO" and "fence company
   marketing" are linked to their own pages with keyword anchors, never
   used as head terms here. Rules kept: build time 2–3 weeks, no prices
   except the one-time starting price in the cost FAQ, no company or
   brand named, verified numbers only. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/fence-company-website-design",
  stage: {
    widget: "estimate",
    switchLabel: "Preview the example site by fence material",
    business: "Your Fence Co.",
    domain: "yourfenceco.com",
    nav: ["Fence types", "Gates", "Repairs", "Gallery"],
    call: "Call for a quote",
    primary: "Price my fence",
    secondary: "See our fences",
    proof: "Trusted by neighbors across the county",
    bookTitle: "Estimate your new fence",
    confirm: "Send my estimate request",
    serviceSubs: [
      "Permit and HOA paperwork",
      "Property lines checked first",
      "Warranty on every install",
    ],
    toast: "Estimate request sent",
    toastNote: "Measure booked Thu",
    phoneCta: "Quote",
    modes: [
      {
        label: "Wood & privacy",
        icon: "fence",
        badge: "Cedar & privacy fences · Local crew",
        headline: "Backyard Privacy, Built by a Local Fence Crew",
        sub: "Cedar, pine and vinyl privacy fences with matching gates, set on posts made to last.",
        services: ["Cedar privacy", "Vinyl privacy", "Fence repair"],
        book: ["Wood privacy", "Vinyl privacy", "Picket"],
        img: {
          src: "/images/fence-web/wood-privacy-fence-install.webp",
          position: "62% 40%",
          phonePosition: "68% 40%",
        },
      },
      {
        label: "Aluminum fencing",
        icon: "gate",
        badge: "Ornamental aluminum · Pool-code gates",
        headline: "Black Aluminum Fencing That Never Needs Paint",
        sub: "Ornamental aluminum for front yards, pools and pets, with gates to match.",
        services: ["Ornamental aluminum", "Pool enclosures", "Gates & openers"],
        book: ["Aluminum", "Pool enclosure", "Chain link"],
        img: {
          src: "/images/fence-web/black-aluminum-fence-install.webp",
          position: "56% 45%",
          phonePosition: "62% 45%",
        },
      },
    ],
    legend: [
      "Call button in every header",
      "Landing page for each fence material",
      "Estimator with length and gates",
      "Thumb-friendly call and quote bar",
    ],
  },
  // Coral wood and privacy, navy aluminum, then lime and gold (tones.ts).
  tones: tonesFor("fence-company-website-design"),
  serviceName: "Fence Company Website Design",
  audience: "fence companies, fence contractors and fence installers",
  meta: {
    title: "Fence Company Website Design | Fence Contractor Websites",
    description:
      "Fence company website design with instant estimate forms, material galleries, permit and HOA help and fast mobile pages. One-time build, live in 2–3 weeks.",
    keywords: [
      "fence company website design",
      "fence contractor website design",
      "fence company websites",
      "fencing websites",
      "website for fence company",
      "web design for fence companies",
      "fence company web design",
      "fence contractor websites",
      "fence installer website design",
      "fencing contractor website",
      "fence company website",
      "fence estimate form for website",
    ],
  },
  hero: {
    h1Lead: "Fence Company Website Design",
    h1Rest: "That Wins More Estimates",
    icon: "fence",
    lead: [
      "We design fence company websites that let homeowners pick a material, enter a rough length and request a price in a few taps, with galleries and permit help that answer the questions behind every quote. Each ",
      { href: "/services/web-design", label: "custom website" },
      " is built around your fence lines and the towns you cover, and goes live within 2–3 weeks.",
    ],
    cta: "Get My Free Fence Site Mockup",
    bento: {
      kind: "tiles",
      wide: {
        icon: "fence",
        title: "More fence estimate requests",
        sub: "Homeowners price their fence line online, then book the measure",
        chips: ["Wood privacy", "Vinyl", "Aluminum", "Chain link"],
      },
      left: {
        icon: "pin",
        title: "Found in every town you fence",
        sub: "A service-area page for each suburb",
      },
      right: {
        icon: "repair",
        title: "Repair calls all year",
        sub: "Repair and gate pages that catch storm-season searches",
      },
      bottom: {
        title: "Bigger jobs from gallery browsers",
        sub: "Style galleries that sell full-yard enclosures",
      },
    },
  },
  showcase: {
    title: "Preview a Fence Contractor Website With a Built-In Estimator",
    lead: "Flip between wood privacy and aluminum fencing to watch the landing page, estimator and phone view change.",
  },
  services: {
    title: "Fence Contractor Website Design\nThat Covers Every Fence You Build",
    lead: "Design, copy and build for residential, commercial and farm fence companies, handled by one team.",
    cta: "Plan My Fence Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Fence Company Websites",
        desc: "A site planned around the materials you install, the crews you run and the towns you cover, with copy written for homeowners comparing quotes.",
        points: [
          "Designed from scratch",
          "Copy written for you",
          "Your photos, not stock",
        ],
        links: [{ href: "/services/web-design", label: "Custom web design" }],
      },
      {
        icon: "ruler",
        title: "Instant Estimate Tools",
        desc: "An estimator where buyers choose a fence type, rough length and gate count, so every request reaches you ready to price.",
        points: [
          "Fence type picker",
          "Length and gate fields",
          "Address and yard photos",
        ],
        links: [],
      },
      {
        icon: "layers",
        title: "Material and Style Galleries",
        desc: "Pages for wood, vinyl, aluminum, chain link, pool and farm fencing, each with real installs sorted by style and height.",
        points: [
          "A page per material",
          "Filterable photo gallery",
          "Height and color options",
        ],
        links: [
          {
            href: "/services/industry/fence-company-seo",
            label: "Fence company SEO",
          },
        ],
      },
      {
        icon: "clipboard",
        title: "Permit, HOA and Property-Line Pages",
        desc: "Plain help pages on permits, HOA approval, surveys and utility marking, the questions that stall a signed contract.",
        points: [
          "Permit guide by town",
          "HOA approval tips",
          "Survey and dig-safe notes",
        ],
        links: [],
      },
      {
        icon: "repair",
        title: "Repair, Gate and Opener Pages",
        desc: "Year-round pages for fence repair, storm damage, gate fixes and automatic gate openers that keep crews busy between installs.",
        points: ["Storm damage page", "Gate repair page", "Opener installs"],
        links: [
          {
            href: "/services/fence-company-marketing-agency",
            label: "Fence company marketing",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting, Edits and Redesigns",
        desc: "Fast managed hosting, monthly edits and careful rebuilds of older fencing websites that keep the rankings you already have.",
        points: ["Managed hosting", "Redirects mapped", "Seasonal updates"],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for fence installers",
          },
        ],
      },
    ],
  },
  features: {
    title: "Fence Buyer Must-Haves Built Into Your Site",
    lead: "The details homeowners look for before they trust a fence company with their yard.",
    items: [
      {
        icon: "phone",
        title: "Tap-to-Call on Every Screen",
        text: "The office number and a quote button follow visitors down each page.",
      },
      {
        icon: "ruler",
        title: "Estimates Started From the Yard",
        text: "Buyers enter a rough length, height and gate count from their phone.",
      },
      {
        icon: "camera",
        title: "Galleries Sorted by Material",
        text: "Wood, vinyl, aluminum and chain link installs, filtered by style.",
      },
      {
        icon: "file",
        title: "Financing Options Up Front",
        text: "Payment plans explained beside the estimate button, in plain words.",
      },
      {
        icon: "clipboard",
        title: "Permit and HOA Help",
        text: "A clear guide to approvals, setbacks and who files the paperwork.",
      },
      {
        icon: "pin",
        title: "A Page for Each Service Town",
        text: "Local permit notes and recent fence jobs on every town page.",
      },
      {
        icon: "star",
        title: "Reviews That Name the Fence",
        text: "Google reviews placed beside the material they talk about.",
      },
      {
        icon: "bolt",
        title: "Fast Pages on Any Phone",
        text: "Compressed photos and lean code keep galleries quick on mobile data.",
      },
    ],
  },
  growth: {
    title: "How Fence Company Websites Win Searches and Signed Quotes",
    lead: "Rank for material searches, turn visits into estimate requests and get named in AI answers.",
    rank: {
      title: "Rank for Every Fence Material Homeowners Search",
      body: [
        "Every material, repair and town page is aimed at a search homeowners really type, from vinyl privacy to chain link, with positions tracked weekly. Pair the site with ",
        {
          href: "/services/industry/fence-company-seo",
          label: "SEO for fence companies",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google Business Profile optimization",
        },
        " to reach the Map Pack as well.",
      ],
      points: [
        "Material landing pages",
        "Suburb and county pages",
        "Rank checks every week",
        "LocalBusiness schema",
      ],
      cta: "Map My Fence Pages",
      keywords: [
        ["fence company near me", 24, 3],
        ["vinyl fence installation", 31, 5],
        ["fence repair near me", 19, 2],
        ["aluminum fence installer", 28, 4],
      ],
    },
    convert: {
      title: "Turn Yard Measurements Into Estimate Requests",
      body: [
        "The estimator asks for material, length and gates, a financing note sits beside it and the phone bar stays in reach, so more visitors ask for a price. Every request is tagged to its page, and ",
        {
          href: "/services/fence-company-marketing-agency",
          label: "marketing for fence contractors",
        },
        " can send more of the right homeowners to it.",
      ],
      points: [
        "Fence estimator form",
        "Financing callout",
        "Lead source tags",
        "Sticky mobile call bar",
      ],
      cta: "See the Estimate Flow",
      url: "yourfenceco.com",
      headline: "New Fence? Get a Free Estimate",
      services: ["Privacy fences", "Aluminum", "Fence repair", "Gates"],
    },
    ai: {
      title: "Show Up When Homeowners Ask AI Which Fence to Buy",
      body: [
        "Material comparisons and cost explainers phrased as plain answers hand AI Overviews and assistants like ChatGPT solid facts to quote when shoppers ask who installs fences nearby. Our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        " track where your company gets named.",
      ],
      points: [
        "Material comparison pages",
        "Answer-first FAQs",
        "Clear service areas",
        "AI mention checks",
      ],
      cta: "Test My Fence Site in AI",
      query: "best fence for privacy and dogs near me",
      intro: "For a privacy fence that keeps dogs in,",
      bullets: [
        "Material guides with clear pros",
        "Gate and latch options shown",
        "Reviews from nearby yards",
      ],
    },
  },
  aiSearch: {
    title: "AEO and GEO for an AI-Ready Fence Company Website",
    lead: [
      "Homeowners now ask ChatGPT, Gemini and AI Overviews which fence to pick and who should build it. We structure your site so those tools quote your answers and recommend your crew, backed by ",
      {
        href: "/services/industry/fence-company-seo",
        label: "local SEO for fence installers",
      },
      ".",
    ],
    prompt:
      "Is aluminum or vinyl better for a pool fence, and who installs them near me?",
    answer: "For a code-ready aluminum pool fence near you,",
    reasons: [
      "Explains pool gate and latch rules",
      "Recent reviews mention pool enclosures",
      "Project pages from your town",
    ],
    tactics: [
      {
        tag: "AEO",
        icon: "chat",
        title: "Answer-First FAQ Blocks",
        text: "Each material and repair page opens with a two-sentence answer to the question buyers type, so assistants can lift it word for word.",
      },
      {
        tag: "AEO",
        icon: "file",
        title: "Cost and Material Explainers",
        text: "Plain guides on what shapes a fence quote, how wood, vinyl and aluminum age, and what upkeep each needs, marked up with FAQ and Service schema.",
      },
      {
        tag: "GEO",
        icon: "globe",
        title: "Consistent Business Facts Everywhere",
        text: "Your name, service area, materials and hours match across your site, Google Business Profile and local listings, so AI models trust one clear entity.",
      },
      {
        tag: "GEO",
        icon: "star",
        title: "Reviews and Project Pages With Place Names",
        text: "Review requests ask customers to mention the fence type and town, and fresh project pages show the same jobs, giving assistants proof to recommend you.",
      },
    ],
    cta: "Get My AI-Ready Fence Site Plan",
  },
  sitemap: {
    title: "A Fencing Website Map Built Around Materials and Towns",
    lead: "Wood, vinyl, repair and town searches each land on a page written for that one job.",
    home: "Your Fence Co. homepage",
    groups: [
      {
        name: "Fence Types",
        icon: "fence",
        pages: ["Wood privacy", "Vinyl fencing", "Aluminum & pool"],
      },
      {
        name: "Repairs & Gates",
        icon: "gate",
        pages: ["Fence repair", "Gate installs", "Automatic openers"],
      },
      {
        name: "Buyer Help",
        icon: "clipboard",
        pages: ["Permits & HOA", "Financing", "Instant estimate"],
      },
      {
        name: "Service Areas",
        icon: "pin",
        pages: ["Home county", "Town pages", "Commercial & farm"],
      },
    ],
  },
  results: {
    title: "The First Season With Your New Fence Company Website",
    lead: "Estimate requests become trackable, material pages earn rankings and spring demand lands on pages that are already live.",
    cta: "Plan My Fence Site Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Every Estimate Tracked",
        text: "Estimator submissions, calls and texts are tagged to the page that earned them from day one.",
      },
      {
        when: "Month 1",
        title: "Fence Material Pages Indexed",
        text: "Google crawls the wood, vinyl, aluminum and town pages and starts testing them for nearby searches.",
      },
      {
        when: "Months 2–3",
        title: "Repair and Gate Searches Climb",
        text: "Repair, gate and town pages move up as reviews naming those jobs come in.",
      },
      {
        when: "Spring build season",
        title: "Ready Before the Ground Thaws",
        text: "Fence demand jumps in spring, and your pages are already ranking when homeowners start planning.",
      },
    ],
    wins: [
      {
        icon: "ruler",
        title: "Requests You Can Price",
        text: "Length, material and gate details arrive with every lead, so quotes go out sooner.",
      },
      {
        icon: "fence",
        title: "Full-Yard Projects",
        text: "Galleries help buyers picture a full enclosure, not just one short run.",
      },
      {
        icon: "clipboard",
        title: "Fewer Stalled Contracts",
        text: "Permit and HOA pages answer the questions that used to delay signatures.",
      },
      {
        icon: "repair",
        title: "Steady Repair Work",
        text: "Repair and gate pages keep crews busy through the slower months.",
      },
    ],
    band: [
      {
        icon: "calendar",
        value: "Booked Measures",
        label: "On-site measure requests straight from the estimator",
      },
      {
        icon: "camera",
        value: "Material Showcase",
        label: "Galleries that sell privacy, aluminum and farm fencing",
      },
      {
        icon: "shield",
        value: "Approval-Ready Buyers",
        label: "Permit, HOA and survey answers before the visit",
      },
      {
        icon: "bolt",
        value: "Quick Mobile Pages",
        label: "Fast loads for homeowners pacing out their yard",
      },
    ],
  },
  process: {
    title: "Fence Website Build Timeline: Live in 2–3 Weeks",
    lead: "One kickoff call, a homepage draft to react to and a set go-live day, built around your crew's photos.",
    items: [
      {
        when: "Week 1",
        h: "Materials, Towns and Mockup",
        p: "We list your fence types, gate work and service area, then send a homepage mockup to react to.",
      },
      {
        when: "Weeks 1–2",
        h: "Fence Type Pages and Install Galleries",
        p: "Wood, vinyl, aluminum and repair pages are written and paired with photos from your own installs.",
      },
      {
        when: "Weeks 2–3",
        h: "Estimator Setup and Old-URL Mapping",
        p: "The estimator, call tracking and schema are wired up, and each old URL gets its redirect.",
      },
      {
        when: "Launch",
        h: "Go Live, Then Watch Rankings",
        p: "The site launches, and rankings, calls and estimate requests are checked closely in the first weeks.",
      },
    ],
  },
  compare: {
    title: "Fence Company Websites: Custom Build vs. Website Builder",
    lead: "Drag-and-drop builders get a page online fast, but fence buyers need more than a phone number and a photo.",
    otherLabel: "Drag-and-drop site",
    rows: [
      {
        topic: "Fence estimate requests",
        other: "A contact form with an empty message box.",
        zonic:
          "An estimator that collects material, length, gates and address.",
      },
      {
        topic: "Pages per fence material",
        other: "One services page listing every fence type.",
        zonic: "A ranking page and gallery for each material you install.",
      },
      {
        topic: "Permit and HOA questions",
        other: "Left for the sales call to sort out.",
        zonic: "Help pages that explain approvals before the measure.",
      },
      {
        topic: "Repair and gate work",
        other: "Hidden in a bullet list, if listed at all.",
        zonic: "Dedicated repair, storm damage and gate pages.",
      },
      {
        topic: "Speed on phones",
        other: "Heavy themes and oversized yard photos.",
        zonic: "Lean pages that open fast on a phone in the yard.",
      },
      {
        topic: "Who keeps the fence site",
        other: "Monthly rent, and the site stays behind if you leave.",
        zonic: "One build fee; the domain, site and leads are yours.",
      },
    ],
  },
  reviews: {
    title: "A 5.0 Google Rating From the Owners We Build For",
    lead: "Unedited reviews from business owners, pulled straight from our Google profile.",
  },
  pricing: {
    title: "Fence Company Website Pricing With No Monthly Rent",
    compareTitle: "Fence Site Plan Comparison",
    addOnsTitle: "Fence Website Add-Ons",
    customTitle: "Running Residential, Commercial and Farm Crews?",
  },
  faq: {
    title: "Fence Contractor Website Questions From Owners",
    lead: "Cost, timing, estimators and what homeowners expect to find on a fencing website.",
    items: [
      {
        q: "How much does a fence company website cost?",
        a: "Builds start at $950, one-time. There are no monthly hosting or rental fees, and you own the domain and the website outright. Larger builds with extra town pages, several locations or custom estimator logic get one fixed quote after a free call, so the price is settled before work starts.",
      },
      {
        q: "How quickly can a fence contractor website go live?",
        a: "Usually 2–3 weeks. You see a homepage mockup in week one, material and repair pages follow, and the final stretch connects the estimator, call tracking and redirects. Starting in late fall or winter means the site is ranking before spring, when most homeowners plan fence projects.",
      },
      {
        q: "What should a fence company website include?",
        a: "A clear estimate button, one page per material (wood, vinyl, aluminum, chain link, pool and farm), repair and gate pages, a filterable gallery of real installs, financing details, permit and HOA help, town pages, reviews and warranty terms, all quick to load on a phone.",
      },
      {
        q: "Should a fencing website have an online estimate or price calculator?",
        a: "In most markets, yes. A short estimator that asks for material, rough length, height and gates gives homeowners a sense of scope and gives you a request you can price. It can show ranges you set, or stay a simple request that leads to an on-site measure.",
      },
      {
        q: "Should fence companies show financing on their website?",
        a: "If you offer it, yes. Many homeowners weigh monthly payments before they weigh materials. We add a financing page and a short note beside the estimator explaining how it works and how to apply, using the program details you already have with your lender.",
      },
      {
        q: "Can the site answer permit, HOA and property-line questions?",
        a: "Yes. Help pages explain when towns usually require a permit, who files it, how HOA approval works and why a survey or staked corners matter. Rules differ by town, so each page points buyers to the local office and explains how your crew handles every step.",
      },
      {
        q: "Will a redesign hurt the rankings my fence company has now?",
        a: "Not when the move is planned. Every URL that earns traffic is kept or redirected, strong titles and headings carry over and the new sitemap goes to Google on launch day. Rankings, calls and quote requests stay under close watch for several weeks afterward.",
      },
      {
        q: "Do fence repair and gate opener services need their own pages?",
        a: "They should. Repair searches run all year and spike after storms, and gate and opener jobs often come from different buyers than new installs. Separate pages let each service rank, carry its own form and show photos of that exact work.",
      },
      {
        q: "How does a fence company website show up in AI answers?",
        a: "Assistants favor pages that answer a question directly and businesses with consistent facts and recent reviews. We write answer-first FAQs, add FAQ and Service schema, keep your name and service area identical everywhere and publish project pages that name the town and fence type.",
      },
    ],
  },
  consult: {
    title: "Get a Free Fence Company Homepage Mockup",
    lead: [
      "Send us your fence types, service area and a few favorite install photos, and we'll mock up a homepage with an estimator and page plan at no cost. Rather speak with someone? ",
      { href: "/contact-us", label: "Reach the Zonic team" },
      ", learn ",
      { href: "/about", label: "who we are" },
      ", see ",
      { href: "/services", label: "every service we offer" },
      " or recover a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Business Profile",
      },
      ". Fence installers can also see our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "home services local SEO",
      },
      " approach, and crews that also landscape can look at our ",
      {
        href: "/services/landscaping-marketing-agency",
        label: "landscaping marketing agency",
      },
      " page.",
    ],
    points: [
      "Free homepage mockup",
      "Material page plan",
      "Estimator setup advice",
      "Live in 2–3 weeks",
    ],
    form: {
      formType: "fence-company-website-design",
      badge: "Free fence website mockup",
      title: "Request Your Fence Website Mockup",
      subtitle: "Free to ask, no strings attached.",
      submitText: "Send My Fence Mockup Request",
      messageLabel: "Your fence company and the work you do",
      messagePlaceholder:
        "Business name, website link if you have one, the fence materials you install and your service towns",
    },
  },
  banner: {
    title: "Build the Website Your Fences Deserve",
    lead: "Material pages, an estimator homeowners actually use and help pages that keep projects moving.",
  },
};
