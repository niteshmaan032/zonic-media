/* Electrician Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: electrician web design company
     295 impressions (pos 30.9) · electrical company web design services
     286 (22.2) · electrician web design services 268 (19.9) · electrician
     website 268 (28.1) · electrician websites 222 (32.6) · electrician
     website design services 215 (17.1) · electrician website design
     company 174 (30.8) · website design agency for electrical companies
     149 (25.8) · electricians website design agency 149 (28.3) ·
     electrician website design agency 148 (23.2) · electrical company
     websites 113 (24.3) · electrician web design agency 112 (33.4).
   - Semrush US: electrician websites 720 (KD 15) · electrician website
     design 480 (19) · electrician web design 390 (15) · electrical
     contractor website design 50 (21) · electrical website design 40.
   - Web research (electrician site guides and 2026 home-service trend
     pieces): homeowners check license, insurance and permits before they
     let anyone near the panel, so credentials belong in the header; one
     page per job (panel upgrades, EV chargers, generators, inspections,
     rewiring) explaining capacity, permits and timelines; EV charger and
     backup-power demand keeps growing as household loads rise; separate
     residential and commercial paths; a persistent phone number; project
     galleries and FAQs on permits and timelines.
   Angle: proof of licensing up front, upgrade pages that sell bigger jobs,
   outage calls vs planned upgrades, commercial path. Rules kept: build
   time 2–3 weeks, no prices, no company, brand or software named,
   verified numbers only, every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/electrical-website-design",
  stage: {
    widget: "book",
    switchLabel:
      "Switch the example electrician site between repairs and upgrades",
    business: "Your Electric Co.",
    domain: "yourelectricco.com",
    nav: ["Repairs", "Upgrades", "EV chargers", "Areas"],
    call: "Call today",
    primary: "Book an electrician",
    secondary: "Upgrade guide",
    proof: "Licensed, insured, locally rated",
    bookTitle: "Pick a visit time",
    confirm: "Book this time",
    serviceSubs: [
      "Licensed electricians",
      "Permits handled",
      "Written quote first",
    ],
    toast: "Electrician booked",
    toastNote: "Tomorrow 8 AM",
    phoneCta: "Book",
    modes: [
      {
        label: "Repairs & safety",
        icon: "bolt",
        badge: "Outage help · Same-day",
        headline: "Lights Out or Breaker Tripping? Call Us Today.",
        sub: "Outages, tripping breakers, dead outlets and home safety inspections.",
        services: ["Outage repair", "Breaker fixes", "Safety inspection"],
        book: ["Power outage", "Tripped breaker", "Inspection"],
        img: {
          src: "/images/free-website/free-electrician/emergency-electrical.webp",
          position: "45% 35%",
        },
      },
      {
        label: "Upgrades",
        icon: "electric",
        badge: "Panels · EV · Generators",
        headline: "Ready for an EV Charger or a Bigger Panel?",
        sub: "Panel upgrades, EV chargers and standby generators, permits included.",
        services: ["Panel upgrade", "EV charger install", "Standby generator"],
        book: ["Panel upgrade", "EV charger", "Generator"],
        img: {
          src: "/images/free-website/free-electrician/panel-upgrades.webp",
          position: "55% 30%",
        },
      },
    ],
    legend: [
      "Header call button",
      "Repair and upgrade landing pages",
      "Visit scheduler",
      "Phone call bar",
    ],
  },
  // Repairs gold, upgrades navy, then teal and fuchsia (tones.ts).
  tones: tonesFor("electrical-website-design"),
  serviceName: "Electrician Website Design",
  audience: "electricians and electrical contractors",
  meta: {
    title: "Electrician Website Design Company | Electrician Websites",
    description:
      "Electrician web design services for electrical companies: license-forward websites with panel upgrade, EV charger and repair pages that rank and book jobs.",
    keywords: [
      "electrician website design",
      "electrician web design",
      "electrician websites",
      "electrician website",
      "electrical contractor website design",
      "electrical website design",
      "electrician website design company",
      "electrician web design company",
      "electrician website design services",
      "electrician web design services",
      "electrical company web design services",
      "electrician website design agency",
      "website design agency for electrical companies",
    ],
  },
  hero: {
    h1Lead: "Electrician Website Design",
    h1Rest: "That Books Repairs and Sells Panel Upgrades",
    icon: "electric",
    lead: [
      "We build electrician websites that prove you're licensed before the first call and explain panel and EV charger upgrades in plain words. Your ",
      { href: "/services/web-design", label: "custom website" },
      " is shaped around your service area and launches in 2–3 weeks.",
    ],
    cta: "Design My Electrician Homepage Free",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/electrical-web/every-service-line-image.webp",
        position: "center 40%",
        query: "licensed electrician near me",
      },
      cardA: {
        icon: "bolt",
        title: "More Panel Upgrades Quoted",
        sub: "Upgrade pages that explain the why",
      },
      photoB: {
        src: "/images/electrical-web/hero-image-primary-v2.webp",
        position: "70% 30%",
        query: "electrician websites",
      },
      cardB: {
        icon: "pin",
        title: "Seen in Every Town You Wire",
        sub: "Local pages ranked for electrician searches",
      },
    },
  },
  showcase: {
    title: "Explore an Electrician Website With Repair and Upgrade Modes",
    lead: "Switch modes to see how one electrical site greets an outage call and an EV charger shopper.",
  },
  services: {
    title:
      "Electrician Web Design Services\nfor Residential and Commercial Shops",
    lead: "Our electrician website design services cover strategy, writing, design and upkeep from one team that understands electrical work.",
    cta: "Scope My Electrician Website",
    items: [
      {
        icon: "monitor",
        title: "Electrical Company Websites Built New",
        desc: "A fresh site organized by the work you want more of, whether that's service calls, remodel wiring or commercial fit-outs.",
        points: [
          "Planned around your work",
          "Copy by our writers",
          "Mobile-first build",
        ],
        links: [
          { href: "/services/web-design", label: "Website design services" },
        ],
      },
      {
        icon: "bolt",
        title: "Panel, EV Charger and Generator Pages",
        desc: "Upgrade pages that explain amperage, permits and timelines simply, so homeowners understand the job before they request a quote.",
        points: [
          "Panel upgrade pages",
          "Level 2 charger pages",
          "Standby generator pages",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for electricians",
          },
        ],
      },
      {
        icon: "award",
        title: "License and Safety Proof Up Front",
        desc: "License numbers, insurance, permits and safety credentials shown in the header and on each service page.",
        points: [
          "License in the header",
          "Insurance badges",
          "Permit process explained",
        ],
        links: [
          {
            href: "/services/gmb-verification-help",
            label: "Google profile verification help",
          },
        ],
      },
      {
        icon: "building",
        title: "Commercial Electrical Pages",
        desc: "Separate pages for property managers and builders, covering tenant improvements, lighting retrofits and maintenance contracts.",
        points: [
          "Commercial service pages",
          "Bid request forms",
          "Project references",
        ],
        links: [],
      },
      {
        icon: "repeat",
        title: "Rebuilds for Outdated Electrician Sites",
        desc: "We rebuild slow or dated electrician websites and hold on to the URLs, content and backlinks that already win work.",
        points: ["URL audit first", "Redirects in place", "Faster page builds"],
        links: [
          {
            href: "/services/electrician-marketing-agency",
            label: "Electrician marketing",
          },
        ],
      },
      {
        icon: "tool",
        title: "Care Plans and a Free Site Option",
        desc: "Ongoing hosting, security patches and content changes once you're live, plus the option of a free electrician website on a qualifying growth plan.",
        points: ["Secure hosting", "Content changes", "Uptime monitoring"],
        links: [
          {
            href: "/electrician-website-design-agency-us/offer",
            label: "Free electrician website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Electrician Website Features That Build Trust Fast",
    lead: "What homeowners and property managers check before they let an electrician in.",
    items: [
      {
        icon: "award",
        title: "License Number in Plain Sight",
        text: "Your license and insurance sit in the header, not buried in the footer.",
      },
      {
        icon: "phone",
        title: "One-Tap Call for Outages",
        text: "A pinned call button for anyone sitting in the dark with a phone.",
      },
      {
        icon: "clipboard",
        title: "Permit Steps Explained",
        text: "Short guides show how permits and inspections work for each upgrade.",
      },
      {
        icon: "electric",
        title: "EV Charger Readiness Check",
        text: "A quick form asks about the panel and parking spot before the visit.",
      },
      {
        icon: "star",
        title: "Reviews Matched to Services",
        text: "Panel, charger and repair reviews appear on the matching service pages.",
      },
      {
        icon: "pin",
        title: "Town Pages That Mean Something",
        text: "Each town page lists local projects and reviews, not just a city name.",
      },
      {
        icon: "bolt",
        title: "Quick-Loading Pages",
        text: "Lean code keeps pages fast on phones and older office computers.",
      },
      {
        icon: "search",
        title: "Electrician Schema Markup",
        text: "Electrician, service and area markup so Google files each page correctly.",
      },
    ],
  },
  growth: {
    title: "Turning Electrician Web Design Into Booked Work",
    lead: "Get found nearby, turn mobile visitors into booked visits and become the electrician AI tools name.",
    rank: {
      title: "Rank for the Electrical Jobs Worth the Most",
      body: [
        "Electrician SEO is built into every page. We map pages to the searches behind your best jobs, from panel upgrades to generator installs, and report each one's position every week. Add our ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google Business Profile optimization",
        },
        " and ",
        {
          href: "/services/local-seo-for-home-services",
          label: "home services local SEO",
        },
        " so the map pack shows you too.",
      ],
      points: [
        "Upgrade pages first",
        "Town-level pages",
        "Weekly rank checks",
        "Area markup",
      ],
      cta: "Show Me My Ranking Plan",
      keywords: [
        ["electrician near me", 22, 3],
        ["panel upgrade + your city", 35, 4],
        ["ev charger installation", 29, 2],
        ["generator installer near me", 26, 5],
      ],
    },
    convert: {
      title: "Turn Outage Searches Into Scheduled Visits",
      body: [
        "An outage call button, a short visit form and clear permit info make it easy to book you on the spot. Calls are logged against the search that sent them, and our ",
        {
          href: "/services/electrician-marketing-agency",
          label: "electrician marketing agency",
        },
        " can scale whatever works best.",
      ],
      points: [
        "Outage call button",
        "Short visit form",
        "Call source tracking",
        "Fast mobile pages",
      ],
      cta: "Preview an Electrician Booking Flow",
      url: "yourelectricco.com",
      headline: "Power Out? Book an Electrician",
      services: ["Outage", "Panel upgrade", "EV charger", "Generator"],
    },
    ai: {
      title: "Become the Electrician AI Answers Cite",
      body: [
        "AI answers lean on sites that explain jobs clearly and show licensing, so we write upgrade guides and FAQs in that style. Structured data and regular mention checks round it out, the same approach behind our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        ".",
      ],
      points: [
        "Plain-answer guides",
        "Electrician schema",
        "Clean headings",
        "AI mention checks",
      ],
      cta: "Check My AI Search Presence",
      query: "who can install an EV charger at home",
      intro: "To install a home EV charger,",
      bullets: [
        "Licensed for panel work",
        "Permits handled for you",
        "Clear upgrade guides",
      ],
    },
  },
  sitemap: {
    title: "How We Lay Out an Electrician Website, Page by Page",
    lead: "Every page targets a search people make, so repairs, upgrades and commercial work each find you.",
    home: "Your Electric Co. homepage",
    groups: [
      {
        name: "Repairs",
        icon: "bolt",
        pages: ["Outage repair", "Breaker problems", "Outlets and wiring"],
      },
      {
        name: "Upgrades",
        icon: "electric",
        pages: ["Panel upgrades", "Whole-home rewiring", "Lighting upgrades"],
      },
      {
        name: "EV and Backup Power",
        icon: "car",
        pages: ["EV charger installs", "Standby generators", "Battery backup"],
      },
      {
        name: "Commercial and Areas",
        icon: "building",
        pages: ["Commercial services", "Property managers", "Town pages"],
      },
    ],
  },
  results: {
    title: "Your First Season on a New Electrician Website",
    lead: "Gains build as pages get indexed, reviews pile up and upgrade guides start pulling in buyers.",
    cta: "Map Out My Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Tracking Switched On",
        text: "From the first day, every call and visit request carries a source tag.",
      },
      {
        when: "Month 1",
        title: "Upgrade Pages Indexed",
        text: "Panel, charger and generator pages enter Google's index and begin showing for related searches.",
      },
      {
        when: "Months 2–3",
        title: "Moving Up in Town Searches",
        text: "Each town page gains ground as fresh reviews arrive and more homeowners click through.",
      },
      {
        when: "Storm season",
        title: "Ready for Outage Spikes",
        text: "Outage pages and the pinned call bar catch the surge when storms knock out power.",
      },
    ],
    wins: [
      {
        icon: "bolt",
        title: "Bigger Jobs in the Pipeline",
        text: "Upgrade guides bring in panel, charger and generator inquiries.",
      },
      {
        icon: "phone",
        title: "Calls From People in the Dark",
        text: "Outage visitors reach you in one tap from any phone.",
      },
      {
        icon: "award",
        title: "Doubts Settled Before the Visit",
        text: "License, insurance and permit details shown up front ease the doubts.",
      },
      {
        icon: "trend",
        title: "Traffic That Compounds",
        text: "Upgrade and town pages draw new searches all year.",
      },
    ],
    band: [
      {
        icon: "target",
        value: "Upgrade Leads",
        label: "Panel, EV charger and generator inquiries",
      },
      {
        icon: "shield",
        value: "Safety-First Trust",
        label: "Licensing and reviews shown before they call",
      },
      {
        icon: "clipboard",
        value: "Quicker Quotes",
        label: "Short forms that collect project details up front",
      },
      {
        icon: "monitor",
        value: "Built for Thumbs",
        label: "Mobile pages made for one-handed browsing",
      },
    ],
  },
  process: {
    title: "Electrician Web Design in 2–3 Weeks, Start to Launch",
    lead: "A mockup first, then a fixed timeline you can plan jobs around.",
    items: [
      {
        when: "Week 1",
        h: "Services, Licenses and a Homepage Draft",
        p: "We learn your licenses, services and service area, then create a homepage draft for you.",
      },
      {
        when: "Weeks 1–2",
        h: "Upgrade Guides and Page Copy",
        p: "Writers draft repair, upgrade and town pages in plain words homeowners trust.",
      },
      {
        when: "Weeks 2–3",
        h: "Build, Schema and Tracking",
        p: "We build the site, add markup and call tracking, and set redirects for old pages.",
      },
      {
        when: "Launch",
        h: "Launch Day and Fine-Tuning",
        p: "Launch day arrives, then call and ranking data guide every tweak we make.",
      },
    ],
  },
  compare: {
    title: "Why a Built-for-Electricians Site Beats a Generic One",
    lead: "A generic agency site can look fine, but it isn't built around how people hire an electrician.",
    otherLabel: "Generic agency site",
    rows: [
      {
        topic: "License and insurance proof",
        other: "Credentials missing or tucked away on an About page.",
        zonic: "License and insurance in the header and on every service page.",
      },
      {
        topic: "Panel upgrade buyers",
        other: "A single line that says the company does upgrades.",
        zonic:
          "A full page on amperage, permits and timelines that books quotes.",
      },
      {
        topic: "EV charger demand",
        other: "No charger page, so those searches go to someone else.",
        zonic: "A charger install page with a readiness check form.",
      },
      {
        topic: "Outage calls",
        other: "A contact form for someone with no power.",
        zonic: "A pinned call button and an outage page built for phones.",
      },
      {
        topic: "Property managers and builders",
        other: "Home and business work mixed together on one page.",
        zonic: "Separate commercial pages with a bid request form.",
      },
      {
        topic: "Permits and inspections",
        other: "Never mentioned, so buyers worry about them.",
        zonic: "Simple steps showing how you handle permits and inspections.",
      },
    ],
  },
  reviews: {
    title: "Our Google Reviews Average 5.0. Read Them First.",
    lead: "Every review comes from a business owner we worked with, and none are edited.",
  },
  pricing: {
    title: "Plans That Keep Your Electrician Site Growing",
    compareTitle: "Side by Side: What Each Plan Adds for Electricians",
    addOnsTitle: "Extras for Electrical Contractor Websites",
    customTitle: "Multiple Electrical Branches or Crews?",
  },
  faq: {
    title: "Electrician Web Design FAQs for Electrical Companies",
    lead: "What electrical contractors ask about cost, launch time, licensing and upgrade pages.",
    items: [
      {
        q: "What does an electrician website cost?",
        a: "We scope your services, licenses and must-have features on a free consultation, then quote one fixed price that won't change mid-build. Sign a monthly growth plan that qualifies and the electrician website itself is free under our offer. Either way, you know the full cost before work begins.",
      },
      {
        q: "How long until my electrician website is live?",
        a: "Most electrician websites launch in 2–3 weeks. You'll see a homepage design in the first week, then page copy and layouts, and we test call tracking, forms and redirects before anything goes public, so launch day brings no surprises for your office.",
      },
      {
        q: "What should an electrician website include?",
        a: "The best electrician website has your license and insurance in plain sight, a pinned call button, pages for repairs and upgrades such as panels, EV chargers and generators, commercial pages if you do that work, town pages, reviews matched to each service and simple permit information.",
      },
      {
        q: "Will redesigning my electrician website affect my rankings?",
        a: "Handled properly, it shouldn't. We audit every page and its traffic first, keep what performs, redirect what moves and monitor rankings and calls for several weeks after launch, so any dip gets fixed fast. A backup of the old site stays on hand too.",
      },
      {
        q: "Should I show my electrical license number on my website?",
        a: "Yes. Many states expect it on advertising, and homeowners look for it before booking. We place it in the header or footer of every page, next to your insurance and any EV charger or manufacturer certifications you hold, so the question is answered before anyone asks.",
      },
      {
        q: "Do you build EV charger and panel upgrade pages?",
        a: "Yes. Each upgrade gets its own page explaining what's involved, how permits work and how to request a quote. A short readiness form can ask about the panel and parking, so your estimator arrives prepared, and photos of past installs show buyers the finished result.",
      },
      {
        q: "Can one website serve residential and commercial electrical clients?",
        a: "Yes. We split the site into two clear paths: homeowners see repairs and upgrades, while property managers and builders see commercial services, maintenance contracts and a bid request form. Each path gets its own pages, reviews and calls to action, so nobody wades through work that isn't for them.",
      },
      {
        q: "Who writes the content for my electrician website?",
        a: "Our writers handle it, based on what people actually search, like 'breaker keeps tripping' or 'panel upgrade for EV charger'. Each page waits for your okay, and we add your photos, licenses and service towns so it sounds like your company.",
      },
      {
        q: "Can you help with my Google Business Profile as well?",
        a: "Yes. A strong profile and a strong website work together. We can help verify a new profile, reinstate a suspended one and tune categories, services and photos so map results send people to your new site, and both are planned together from day one.",
      },
    ],
  },
  consult: {
    title: "Request a Free Electrician Homepage Design",
    lead: [
      "Send us your services, license details and service area, and our designers will mock up your homepage and sketch a page map, free. Want to talk it through? ",
      { href: "/contact-us", label: "Get in touch" },
      ", learn ",
      { href: "/about", label: "who we are" },
      ", browse ",
      { href: "/services", label: "our complete services" },
      " or find out how we ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "restore suspended Google profiles",
      },
      ". Electricians can also read our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO guide for home service pros",
      },
      ".",
    ],
    points: [
      "Free homepage design",
      "Page and town map",
      "License and trust setup",
      "Live in 2–3 weeks",
    ],
    form: {
      formType: "electrical-website-design",
      badge: "Free electrician homepage design",
      title: "Start Your Electrician Homepage Mockup",
      subtitle: "Free and no strings attached.",
      submitText: "Request My Electrician Mockup",
      messageLabel: "Your electrical company and website",
      messagePlaceholder:
        "Company name, current site (if any), license state, the work you want more of and the towns you serve",
    },
  },
  banner: {
    title: "Let Your Website Prove You're the Right Electrician",
    lead: "License proof up front, clear upgrade pages and outage calls answered in one tap.",
  },
};
