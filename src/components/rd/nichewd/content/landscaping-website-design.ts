/* Landscaping Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: landscaping web design services
     205 impressions (pos 39.2) · landscaper web design services 151 (42.5)
     · landscaping company web design services 100 (37.6) · web design
     services for landscaping companies 81 (43.4) · landscaping web design
     company 48 (33.7) · web design for sod installation 39 (14.4) ·
     landscaping web design agency 38 (42.5) · website design for
     landscaping companies 28 (43.7) · landscaping website design agency
     26 (30.1).
   - Semrush US: landscaping websites 590 (KD 20) · landscaping website
     design 480 (16) · landscaping web design 390 (20) · lawn care website
     design 390 (9) · landscaper website design 50 (11).
   - Web research (landscaping and lawn care website guides, 2026 design
     round-ups): before-and-after project stories (problem, plan, result)
     for design and hardscape work; "schedule a design consultation"
     calls to action; quote forms that ask for the property address and
     photos so jobs can be sized before a drive-out; service plan pages
     that spell out what recurring lawn care includes and how often;
     services organised by season (spring cleanup, aeration, leaf removal,
     snow); a page per service, incl. sod installation; neighbourhood
     pages; licences and insurance near the quote button.
   Angle: one site, two businesses (big outdoor projects + recurring lawn
   routes). Tree service is a separate page with a safety/storm angle, so
   tree work is not covered here. Rules kept: build time 2–3 weeks, no
   prices or figures, no company or brand named, verified numbers only,
   every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/landscaping-website-design",
  stage: {
    widget: "quote",
    switchLabel: "Preview the example site by service line",
    business: "Your Landscaping Co.",
    domain: "yourlandscapingco.com",
    nav: ["Design", "Lawn care", "Projects", "Areas"],
    call: "Call us today",
    primary: "Get my yard quote",
    secondary: "Browse our yards",
    proof: "Recommended by neighbors all over town",
    bookTitle: "Free yard quote",
    confirm: "Submit my details",
    serviceSubs: [
      "Free property visit",
      "Plans for any yard size",
      "Seasonal scheduling",
    ],
    toast: "Quote request sent",
    toastNote: "Site visit this week",
    phoneCta: "Quote",
    modes: [
      {
        label: "Design & hardscape",
        icon: "yard",
        badge: "Patios · Walls · Outdoor living",
        headline: "Outdoor Living Spaces Designed Around Your Yard",
        sub: "Patios, walls, planting and sod installs, designed and built by one local crew.",
        services: ["Patio & pavers", "Retaining walls", "Sod installation"],
        book: ["Patio or pavers", "Full yard design", "Sod install"],
        img: {
          src: "/images/free-website/free-landscaping/hardscaping.webp",
          position: "50% 50%",
        },
      },
      {
        label: "Lawn care plans",
        icon: "grass",
        badge: "Lawn plans · Route spots open",
        headline: "A Greener Lawn Without Lifting a Finger",
        sub: "Mowing, feeding, aeration and cleanups on a set schedule for your yard.",
        services: ["Weekly mowing", "Fertilization", "Spring cleanup"],
        book: ["Weekly mowing", "Feed & weed", "Cleanup visit"],
        img: {
          src: "/images/free-website/free-landscaping/lawn-care.webp",
          position: "50% 55%",
        },
      },
    ],
    legend: [
      "Click-to-call office line",
      "Project and lawn plan pages",
      "Yard quote with address and photos",
      "Thumb-reach call bar",
    ],
  },
  // Green design work, orange lawn plans, then sky and violet (tones.ts).
  tones: tonesFor("landscaping-website-design"),
  serviceName: "Landscaping Website Design",
  audience: "landscapers, landscaping companies and lawn care businesses",
  meta: {
    title: "Landscaping Website Design | Landscaping Web Design Services",
    description:
      "Landscaping website design for design-build crews and lawn care companies: project portfolios, lawn plan signups and address-first quote forms that rank.",
    keywords: [
      "landscaping website design",
      "landscaping web design",
      "landscaping web design services",
      "landscaper web design services",
      "landscaping websites",
      "lawn care website design",
      "landscaper website design",
      "landscaping web design company",
      "landscaping website design agency",
      "website design for landscaping companies",
      "web design for sod installation",
      "landscaping company web design services",
    ],
  },
  hero: {
    h1Lead: "Landscaping Website Design",
    h1Rest: "That Sells Patios and Fills Mowing Routes",
    icon: "yard",
    lead: [
      "We build landscaping websites that sell big outdoor projects and keep weekly lawn routes full, with project stories, plan pages and quote forms that start with the property address. Your ",
      { href: "/services/web-design", label: "custom website" },
      " is planned with you, then launches in 2–3 weeks, ahead of the spring rush.",
    ],
    cta: "Get My Free Landscaping Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/landscaping-first-impressions-1.webp",
        position: "center 35%",
        query: "landscapers near me",
      },
      cardA: {
        icon: "yard",
        title: "Bigger Projects From Search",
        sub: "Hardscape and design pages built to rank",
      },
      photoB: {
        src: "/images/home-improvement-web/landscaping-hero.webp",
        position: "center",
        query: "lawn care service near me",
      },
      cardB: {
        icon: "repeat",
        title: "Mowing Routes That Stay Full",
        sub: "Lawn plan signups straight from the site",
      },
    },
  },
  showcase: {
    title: "Watch a Landscaping Company Website Switch Service Lines",
    lead: "Toggle between design work and lawn plans to see the page, quote form and phone view adapt.",
  },
  services: {
    title: "Landscaping and Lawn Care\nWeb Design Services",
    lead: "Everything a landscaper's site needs, from the first build to off-season updates.",
    cta: "Plan My Landscaping Site",
    items: [
      {
        icon: "monitor",
        title: "Custom Landscaping Company Websites",
        desc: "Planned around your crews, your service menu and the neighborhoods you cover, with copy written for property owners.",
        points: ["Built from scratch", "Neighborhood pages", "Copy included"],
        links: [
          { href: "/services/web-design", label: "Explore custom web design" },
        ],
      },
      {
        icon: "layers",
        title: "Design and Hardscape Portfolios",
        desc: "Project pages that walk through the yard before, the plan and the finished patio, wall or planting.",
        points: [
          "Case-study layouts",
          "Material callouts",
          "Drone and video ready",
        ],
        links: [],
      },
      {
        icon: "grass",
        title: "Lawn Care Plan Signup Pages",
        desc: "Maintenance pages that explain visit frequency and what each plan covers, with a signup form at the end.",
        points: ["Plan comparison", "Recurring signup form", "Add-on services"],
        links: [],
      },
      {
        icon: "leaf",
        title: "Seasonal and Sod Install Pages",
        desc: "Pages for spring cleanups, aeration, leaf removal, snow plowing and sod installation, live before each rush.",
        points: [
          "Sod installation page",
          "Cleanup pages",
          "Snow and holiday pages",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for landscapers" },
        ],
      },
      {
        icon: "pin",
        title: "Address-First Quote Forms",
        desc: "Quote forms that ask for the property address and photos first, so you can size the job before driving out.",
        points: ["Address and lot details", "Photo uploads", "Scheduling sync"],
        links: [
          {
            href: "/services/industry/local-seo-for-landscaping-companies",
            label: "Local SEO for landscapers",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting and Year-Round Upkeep",
        desc: "Hosting, backups, security and edits handled, with seasonal banners swapped as your services change.",
        points: ["Managed hosting", "Seasonal swaps", "Fast edit requests"],
        links: [
          {
            href: "/landscaping-website-design-agency-us/offer",
            label: "Free landscaping website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Every Landscaping Website We Ship Includes These",
    lead: "The details that turn a yard search into a quote request or a lawn plan signup.",
    items: [
      {
        icon: "call",
        title: "Call and Text From the Header",
        text: "Visitors can ring or text your office from any page.",
      },
      {
        icon: "camera",
        title: "Before-and-After Yard Stories",
        text: "Each project shows the problem, the plan and the result.",
      },
      {
        icon: "grass",
        title: "Plan Pages With Clear Inclusions",
        text: "Mowing, feeding and cleanup plans spell out every visit.",
      },
      {
        icon: "pin",
        title: "Service Maps by Neighborhood",
        text: "Buyers see right away whether you work on their street.",
      },
      {
        icon: "leaf",
        title: "Season-Aware Homepage Banners",
        text: "Spring cleanups, fall leaves and snow work rotate in on time.",
      },
      {
        icon: "shield",
        title: "Licenses and Insurance Shown",
        text: "Applicator licenses and coverage sit near the quote form.",
      },
      {
        icon: "star",
        title: "Google Reviews by Service Type",
        text: "Hardscape and lawn reviews appear on the matching pages.",
      },
      {
        icon: "bolt",
        title: "Light Galleries, Fast Pages",
        text: "Big yard photos load quickly, even on job-site signal.",
      },
    ],
  },
  growth: {
    title: "How Landscaping Web Design Grows Both Sides of Your Business",
    lead: "Rank for project and lawn searches, turn visitors into quotes and get named in AI answers.",
    rank: {
      title: "Rank Locally for Hardscape, Sod and Lawn Searches",
      body: [
        "Each service and neighborhood page is built around a real local search, from paver patios to sod installation, and tracked weekly. Run it alongside ",
        {
          href: "/services/industry/local-seo-for-landscaping-companies",
          label: "landscaping local SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "our Business Profile management",
        },
        " and you can win map spots as well.",
      ],
      points: [
        "Service-by-service pages",
        "Neighborhood targeting",
        "Weekly rank reports",
        "LocalBusiness schema",
      ],
      cta: "Map My Service Pages",
      keywords: [
        ["landscapers near me", 23, 3],
        ["paver patio installation + city", 30, 4],
        ["sod installation near me", 26, 2],
        ["lawn care service near me", 20, 3],
      ],
    },
    convert: {
      title: "Turn Yard Searches Into Quote Requests and Plans",
      body: [
        "Quote forms start with the address and a few photos, and plan pages let homeowners pick a lawn schedule on their phone. Every lead is tagged to its page, and ",
        {
          href: "/services/landscaping-marketing-agency",
          label: "landscaping marketing",
        },
        " can bring in more of the right visitors.",
      ],
      points: [
        "Address-first quotes",
        "Plan signup on mobile",
        "Lead source tags",
        "Call bar on phones",
      ],
      cta: "See the Quote Flow",
      url: "yourlandscapingco.com",
      headline: "Dream Patio? Get a Yard Quote Today",
      services: ["Patios & pavers", "Weekly mowing", "Sod install", "Cleanups"],
    },
    ai: {
      title: "Earn a Mention in AI Answers About Yard Work",
      body: [
        "Answer-led pages on plants, materials and upkeep give Google AI Overviews and ChatGPT clear facts to cite. Our ",
        { href: "/services/ai-seo-services", label: "AI SEO team" },
        " checks which answers mention your company.",
      ],
      points: [
        "Plant and material FAQs",
        "Plan details in schema",
        "Clear service areas",
        "Monthly answer checks",
      ],
      cta: "Check How AI Sees Us",
      query: "who installs paver patios near me",
      intro: "For paver patios and outdoor living nearby,",
      bullets: [
        "Detailed project galleries",
        "A clear design process",
        "A well-reviewed local crew",
      ],
    },
  },
  sitemap: {
    title: "The Landscaping Site Map: Services, Seasons, Towns",
    lead: "Every page is aimed at a single yard or lawn search, so traffic spreads across the whole site.",
    home: "Your Landscaping Co. homepage",
    groups: [
      {
        name: "Design and Build",
        icon: "yard",
        pages: ["Landscape design", "Patios and walls", "Sod installation"],
      },
      {
        name: "Lawn Care",
        icon: "grass",
        pages: ["Mowing plans", "Fertilization", "Aeration and seeding"],
      },
      {
        name: "Seasonal",
        icon: "leaf",
        pages: ["Spring cleanup", "Leaf removal", "Snow plowing"],
      },
      {
        name: "Neighborhoods",
        icon: "pin",
        pages: ["Core city page", "Neighborhood pages", "Commercial grounds"],
      },
    ],
  },
  results: {
    title: "Your Landscaping Site's First Year, Phase by Phase",
    lead: "Quote requests and plan signups build as pages rank and your project galleries grow.",
    cta: "Plan My First Year Online",
    milestones: [
      {
        when: "Launch week",
        title: "Quotes and Signups Tracked",
        text: "Every form, plan signup and call is linked to its page from day one.",
      },
      {
        when: "Month 1",
        title: "Service Pages Get Crawled",
        text: "Google finds your patio, sod and lawn plan pages and tests them for local searches.",
      },
      {
        when: "Months 2–3",
        title: "Neighborhood Pages Climb",
        text: "Local pages and fresh reviews move up for landscaper and lawn care searches.",
      },
      {
        when: "Spring rush",
        title: "Routes and Projects Booked Early",
        text: "Plan pages and cleanup offers fill the calendar before the first mow.",
      },
    ],
    wins: [
      {
        icon: "repeat",
        title: "Lawn Plans Signed Online",
        text: "Homeowners choose a schedule and sign up without waiting on a callback.",
      },
      {
        icon: "yard",
        title: "Higher-Value Project Leads",
        text: "Design galleries attract owners planning patios and full-yard makeovers.",
      },
      {
        icon: "pin",
        title: "Tighter Mowing Routes",
        text: "Neighborhood pages bring clients near the streets you already serve.",
      },
      {
        icon: "star",
        title: "A Name Neighbors Recognize",
        text: "Reviews and project stories make your crew the trusted pick.",
      },
    ],
    band: [
      {
        icon: "layers",
        value: "Design-Build Projects",
        label: "Hardscape and planting galleries that win big jobs",
      },
      {
        icon: "repeat",
        value: "Recurring Lawn Care",
        label: "Plan sign-ups that steady your season",
      },
      {
        icon: "calendar",
        value: "Seasonal Promotions",
        label: "Spring and fall offers ready to publish",
      },
      {
        icon: "camera",
        value: "Easy Yard Quotes",
        label: "Yard photos uploaded straight from the phone",
      },
    ],
  },
  process: {
    title: "Landscaping Website Design From Plan to Launch in 2–3 Weeks",
    lead: "Set dates, a free first draft and no surprises along the way.",
    items: [
      {
        when: "Week 1",
        h: "Service Menu and Mockup",
        p: "We map your design, lawn and seasonal services and sketch a homepage mockup you can edit with us.",
      },
      {
        when: "Weeks 1–2",
        h: "Pages, Photos and Plans",
        p: "Project stories, plan pages and neighborhood copy are written and designed.",
      },
      {
        when: "Weeks 2–3",
        h: "Forms, Sync and SEO",
        p: "Quote forms, scheduling sync, schema and redirects go in, then get a full test run.",
      },
      {
        when: "Launch",
        h: "Launch and Season Prep",
        p: "The site goes live and seasonal banners are queued for the months ahead.",
      },
    ],
  },
  compare: {
    title: "Landscaping Websites: Built for You vs. Off the Shelf",
    lead: "Where a one-size theme falls short for landscapers and lawn care crews.",
    otherLabel: "Generic contractor template",
    rows: [
      {
        topic: "Project portfolio",
        other: "A photo grid with no story behind each yard.",
        zonic:
          "Case-study pages with before shots, the plan and the finished space.",
      },
      {
        topic: "Recurring lawn plans",
        other: "No way to sign up for ongoing service online.",
        zonic: "Plan pages with a signup form tied to your scheduling tools.",
      },
      {
        topic: "Quote intake",
        other: "Name, email and a blank message box.",
        zonic: "Address, photos and project type collected up front.",
      },
      {
        topic: "Seasonal services",
        other: "The same banner from spring through winter.",
        zonic: "Cleanups, leaf removal and snow pages promoted on time.",
      },
      {
        topic: "Neighborhood reach",
        other: "A long list of towns in the footer.",
        zonic: "Pages for the neighborhoods you mow and build in.",
      },
      {
        topic: "Sod and planting",
        other: "Sod and planting lumped under other services.",
        zonic: "Dedicated sod installation and planting pages that can rank.",
      },
    ],
  },
  reviews: {
    title: "Our 5.0 Google Rating, in Clients' Own Words",
    lead: "Straight from our Google profile, written by business owners we've built for.",
  },
  pricing: {
    title: "Monthly Plans for Your Landscaping Website",
    compareTitle: "Compare Plans for a Landscaper Site",
    addOnsTitle: "Landscaping Add-Ons: Pages, Forms and More",
    customTitle: "Multiple Branches or a Franchise Territory?",
  },
  faq: {
    title: "Landscaping Web Design: Common Questions",
    lead: "Costs, timelines, plan signups and what belongs on a landscaping website.",
    items: [
      {
        q: "What does a landscaping company website cost?",
        a: "We price the build once, on a free call where you walk us through crews, services and your territory, and surprise add-on charges never follow. Landscapers who add a qualifying monthly growth plan see the site folded into our free website offer.",
      },
      {
        q: "When could my new landscaping website be live?",
        a: "Most landscaping sites go live 2–3 weeks after kickoff. We send a homepage mockup in week one, write and design the pages next, and connect quote forms and scheduling before launch. Starting in winter means the site is ranking and ready before spring calls pick up.",
      },
      {
        q: "What pages should landscaping websites have?",
        a: "A homepage with a clear quote button, one page per service (design, hardscape, sod installation, mowing, cleanups), lawn plan pages, a project portfolio with before-and-after stories, neighborhood pages, a page on licenses and insurance, and reviews placed near each form.",
      },
      {
        q: "Can customers sign up for lawn care plans on the website?",
        a: "Yes. Plan pages list what each visit includes and how often crews come, and a short signup form sends the new account to your scheduling software or CRM. Homeowners can start service at night or on weekends without waiting for the office to open.",
      },
      {
        q: "Should landscapers post prices on their website?",
        a: "Many landscapers show what each lawn plan includes and quote design work after a property visit. We build pages that set expectations, explaining what shapes a quote, such as lot size, access and materials, so the leads you get are already a good fit.",
      },
      {
        q: "Do landscaping and lawn care need separate websites?",
        a: "Usually not. One site with two clear paths works well: a project path for design and hardscape buyers and a plan path for weekly lawn care. Both share your reviews and brand, and each path has its own pages, forms and calls to action.",
      },
      {
        q: "Will a new landscaping site lose the Google rankings I have now?",
        a: "Not if the switch is mapped out. Every live URL goes on a list, pages that already earn visits are kept, moved pages get redirects and Google receives the new sitemap. For several weeks after launch we watch rankings, calls and quote requests.",
      },
      {
        q: "Do you build pages for sod installation and seasonal services?",
        a: "Yes. Sod installation, aeration, spring cleanups, leaf removal and snow plowing each get their own page, written around what people search in your area. Seasonal pages go live before each rush, so they can rank and carry ads when demand starts.",
      },
    ],
  },
  consult: {
    title: "Let's Sketch Your Landscaping Homepage, Free",
    lead: [
      "Walk us through your services, your proudest projects and the streets your crews work, and a homepage mockup plus page plan comes back to you at no charge. Questions first? ",
      { href: "/contact-us", label: "Reach our team" },
      ", learn ",
      { href: "/about", label: "who we are" },
      ", see ",
      { href: "/services", label: "what else we do" },
      " or sort out a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google Business Profile",
      },
      ". Map rankings are covered in our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "home services local SEO",
      },
      " guide.",
    ],
    points: [
      "A homepage mockup, free",
      "Service and area page plan",
      "Quote form setup tips",
      "Live within 2–3 weeks",
    ],
    form: {
      formType: "landscaping-website-design",
      badge: "Free landscaping homepage draft",
      title: "Ask for a Landscaping Homepage Draft",
      subtitle: "Free to request, with no obligation.",
      submitText: "Get My Landscaping Mockup",
      messageLabel: "Your landscaping business and services",
      messagePlaceholder:
        "Business name, website (if any), design or lawn care focus, and the neighborhoods you serve",
    },
  },
  banner: {
    title: "Turn Your Best Yards Into Your Best Sales Tool",
    lead: "Project stories, lawn plan signups and quote forms that ask the right questions.",
  },
};
