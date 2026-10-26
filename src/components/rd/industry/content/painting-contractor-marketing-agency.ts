import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* PAINTING CONTRACTOR MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units were exhausted, so no ranking report was
   pulled. The live title's core term ("Painting Contractor Marketing
   Agency") stays at the front of the new title, and every phrase in the
   live keywords meta is carried by the title, H1, an H2/H3 or an FAQ
   question: painting contractor marketing agency (title, H1) · marketing
   agency for contractors (FAQ) · painting company marketing (services H2)
   · painter marketing agency (FAQ) · marketing for painting contractors
   (specialties H2) · painting contractor seo (service H3, FAQ) · painting
   company google ads (service H3) · painting contractor leads (FAQ) ·
   painting contractor marketing company (FAQ) · painting contractor
   advertising agency (FAQ) · painting contractor internet marketing
   (growth H2) · painting contractor lead generation (own-leads H2).
   - Web research (25 Oct): homeowners hire painters phone-first from
     Maps and reviews, then judge real project photos; top agency pages
     cover GBP, Local Services Ads, search ads split by job type, short
     estimate forms, galleries, seasonal exterior pushes and referrals;
     shared lead marketplaces sell one job to several painters; AI search
     is barely covered by competitors.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "painting-contractor-marketing-agency-2",
  liveUrl: "/services/painting-contractor-marketing-agency",
  niche: "Painting Contractor",
  meta: {
    title: "Painting Contractor Marketing Agency | SEO, Google Ads & Leads",
    description:
      "Painting contractor marketing agency for home and commercial painters: painting contractor SEO, Google Maps, Google Ads and reviews that book more estimates.",
    keywords: [
      "painting contractor marketing agency",
      "marketing agency for contractors",
      "painting company marketing",
      "painter marketing agency",
      "marketing for painting contractors",
      "painting contractor seo",
      "painting company google ads",
      "painting contractor leads",
      "painting contractor marketing company",
      "painting contractor advertising agency",
      "painting contractor internet marketing",
      "painting contractor lead generation",
      "painter marketing",
      "seo for painters",
      "house painter marketing",
    ],
  },
  palette: PALETTES.fuchsiaTeal,
  hero: {
    h1Lead: "Painting Contractor",
    h1Icon: "roller",
    h1Rest: "Marketing Agency That Books More Estimates",
    lead: [
      "Homeowners compare painters on Google, study the photos and reviews, then ask a few for an estimate. We make yours the first request they send, with painting contractor SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "a stronger Google listing",
      },
      ", Google Ads and a ",
      {
        href: "/services/painting-contractor-website-design",
        label: "painting contractor website",
      },
      " that shows off your best work.",
    ],
    cta: "Get My Free Painting Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-painting-contractor/interior-painting.webp",
        position: "62% 50%",
        query: "interior painters near me",
      },
      cardA: {
        icon: "roller",
        title: "More interior repaints",
        sub: "Rooms, ceilings, trim and cabinets",
      },
      cardB: {
        icon: "home",
        title: "More exterior projects",
        sub: "Booked ahead of painting season",
      },
      photoB: {
        src: "/images/free-website/free-painting-contractor/exterior-painting.webp",
        position: "30% 50%",
        query: "exterior house painters near me",
      },
    },
  },
  services: {
    title: "Painting Contractors Marketing Services, Run by One Team",
    lead: "Digital marketing channels aimed at owners ready to hire a painter.",
    cta: "Audit My Painting Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Listing for Painters",
        desc: "Categories, services, project photos and weekly posts arranged so your listing climbs when locals search for house painters nearby.",
        points: [
          "Interior and exterior services listed",
          "Fresh project photos",
          "Suspension help included",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Listing optimization for painters",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile reinstatement",
          },
        ],
      },
      {
        icon: "search",
        title: "Painting Contractor SEO and Town Pages",
        desc: "Pages for each service and town, local citations and technical site fixes that lift you for the painting work you want most.",
        points: [
          "Service and town pages",
          "Directory listings cleaned up",
          "Rankings tracked each month",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-painting-contractors",
            label: "Local SEO for painters",
          },
        ],
      },
      {
        icon: "target",
        title: "Painting Company Google Ads",
        desc: "Local Services Ads plus search campaigns on exterior, interior and cabinet searches, with DIY and paint-store shoppers filtered out.",
        points: [
          "Campaigns split by job type",
          "Seasonal exterior pushes",
          "0% ad-spend markup",
        ],
        links: [
          { href: "/services/google-ads", label: "Paid ads for painters" },
        ],
      },
      {
        icon: "monitor",
        title: "Websites Built for Painters",
        desc: "A fast site with before-and-after galleries, a short estimate form and click-to-call on every page, built to rank in your towns.",
        points: [
          "Project galleries",
          "Short estimate form",
          "Calls and forms tracked",
        ],
        links: [
          {
            href: "/services/painting-contractor-website-design",
            label: "Painting contractor web design",
          },
          { href: "/services/web-design", label: "Custom websites" },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Referrals for Painters",
        desc: "Review requests after each finished job and simple referral asks, so happy clients send neighbors your way and Google sees fresh feedback.",
        points: [
          "Texts after the final walkthrough",
          "Owner replies written",
          "Referral follow-ups",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service local SEO",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Recommendations for Painting Companies",
        desc: "Consistent listings, project-rich reviews and pages about your prep and warranty help AI assistants put your company on their shortlist.",
        points: [
          "Matching business details",
          "Reviews that name the project",
          "Answer-first FAQ pages",
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
    title: "Painting Contractor Internet Marketing That Wins the Estimate",
    lead: "Map rankings, AI answers and a site that converts, all pointed at the same estimate calendar.",
    rows: [
      {
        title: "Show Up in the Top 3 for “Painters Near Me”",
        body: [
          "Most homeowners choose from the painters listed on the map. We polish your profile, publish town-by-town pages and keep project photos and reviews fresh, so your company makes the shortlist. Starting a new listing? Use our ",
          {
            href: "/services/gmb-verification-help",
            label: "profile verification service",
          },
          ".",
        ],
        points: [
          "Painter categories",
          "Town pages",
          "Before-and-after photos",
          "Fake listing reports",
        ],
        cta: "Check My Painter Ranking",
        ui: {
          kind: "maps",
          query: "painters near me",
          city: "Nashville",
          category: "Painting contractor · Open today",
        },
      },
      {
        title: "Be the Painter AI Assistants Recommend",
        body: [
          "Homeowners ask ChatGPT and Gemini which painting company to trust with their home. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI visibility work",
          },
          " gives those tools clear facts: matching listings, reviews that describe real projects, and pages that explain your prep, products and warranty.",
        ],
        points: [
          "Same details everywhere",
          "Project-specific reviews",
          "Warranty and insurance shown",
          "FAQ answers AI can cite",
        ],
        cta: "Test My AI Visibility",
        ui: {
          kind: "ai",
          query: "best house painters in charlotte for an older home exterior",
          intro: "For exterior repaints on older Charlotte homes,",
          bullets: [
            "Careful scraping and prep",
            "Written labor warranty",
            "Licensed, insured crews",
          ],
        },
      },
      {
        title: "A Website That Turns Visitors Into Estimate Requests",
        body: [
          "Homeowners want to see your work before they invite you over. We build pages with real project galleries, a short estimate form and a call button pinned to the screen, then trace every request to the search that sent it.",
        ],
        points: [
          "Before-and-after galleries",
          "Three-field estimate form",
          "Sticky call button",
          "Request tracking",
        ],
        cta: "Plan My Painting Website",
        ui: {
          kind: "website",
          url: "yourcompany.com",
          headline: "Interior & Exterior Painting, Done Right",
          services: [
            "Interior painting",
            "Exterior painting",
            "Cabinet refinishing",
            "Commercial painting",
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Painting Contractor Lead Generation Without Bidding Wars",
    body: [
      "Shared lead sites sell one painting request to several contractors, so the job often goes to whoever quotes lowest. We build estimate requests that reach only you, from rankings, ads and ",
      { href: "/services", label: "marketing services" },
      " you keep.",
    ],
    cta: "Get My Own Painting Leads",
    colShared: "Shared lead sites",
    colOwn: "Your own estimate requests",
    rows: [
      ["Who sees the request", "Several painters at once", "Just your team"],
      ["How the job is won", "Lowest quote wins", "Your portfolio and reviews"],
      ["Type of client", "Price shoppers", "Homeowners who chose you"],
      [
        "After you pause",
        "Requests stop coming",
        "Pages and reviews keep working",
      ],
    ],
  },
  specialties: {
    title: "Marketing for Painting Contractors, From Bedrooms to Warehouses",
    lead: "Every type of painting job is sold differently, so we plan each one separately.",
    photo: {
      src: "/images/free-website/free-painting-contractor/commercial-painting.webp",
      alt: "Commercial painter in a hard hat rolling paint onto a wall inside an empty office building",
      caption: "Residential and commercial crews",
      sub: "From a single room to a full building",
    },
    items: [
      {
        icon: "roller",
        name: "Interior Repaints",
        tactic: "Room-by-room galleries and short estimate forms",
      },
      {
        icon: "home",
        name: "Exterior House Painting",
        tactic: "Spring ad pushes timed before painting season",
      },
      {
        icon: "kitchen",
        name: "Cabinet Painting & Refinishing",
        tactic: "Before-and-after reels and kitchen-focused landing pages",
      },
      {
        icon: "building",
        name: "Commercial & Office Painting",
        tactic: "Pages for property managers and repaint-cycle bids",
      },
      {
        icon: "fence",
        name: "Deck and Fence Staining Jobs",
        tactic: "Summer offers sent to past exterior clients",
      },
      {
        icon: "paint",
        name: "Color Consultations",
        tactic: "Consult request forms that lead to full repaints",
      },
      {
        icon: "hammer",
        name: "Drywall Repair & Surface Prep",
        tactic: "Add-on pages that grow the size of each job",
      },
      {
        icon: "spray",
        name: "Specialty Finishes & Epoxy Floors",
        tactic: "Showcase pages for higher-ticket specialty work",
      },
    ],
    more: "Offer wallpaper removal, power washing or murals? We market those too.",
  },
  steps: {
    title: "Getting Started With a Painting Company Marketing Agency",
    lead: "Maps and ads move first; search rankings build steadily behind them.",
    items: [
      {
        h: "Free Painting Market Audit",
        p: "We look up interior, exterior and commercial painters in your towns, then report your position, the competitors ahead of you and the gaps losing you estimates.",
      },
      {
        h: "Your Season Sets the Plan",
        p: "We choose the services, towns and campaigns to push first, timed so exterior pages and ads are live before homeowners start planning spring projects.",
      },
      {
        h: "Go Live and Measure Every Request",
        p: "Profile updates, galleries, ads and review texts switch on together, and each monthly report covers rankings, calls, estimate requests and the work they turned into.",
      },
    ],
    audit: [
      ["Maps rank: painters near me", "behind"],
      ["Project photos on profile", "gap"],
      ["Estimate form on mobile", "open"],
      ["Reviews vs top 3 painters", "behind"],
    ],
    plan: [
      "Exterior repaints",
      "Cabinets",
      "Commercial",
      "Nashville",
      "Franklin",
    ],
    launch: [
      "Profile photos added",
      "Service pages live",
      "Estimate form tracked",
      "Review texts running",
    ],
  },
  reviews: {
    title: "Real Google Reviews From Business Owners We Serve",
    lead: "Feedback from local business owners, posted on our own Google profile.",
  },
  pricing: {
    title: "Painting Contractor Marketing Plans, Month to Month",
    compareTitle: "Compare Painting Marketing Plans",
    addOnsTitle: "Add Campaigns Before Exterior Season",
    customTitle: "Running painting crews in several cities?",
  },
  faq: {
    title: "Painting Contractor Marketing FAQs",
    lead: "Estimates, ads, SEO, AI search and plans, explained simply.",
    items: [
      {
        q: "What does a painter marketing agency do for a painting company?",
        a: "A painting marketing agency brings you more estimate requests from homeowners and property managers nearby. The work spans Maps rankings for your Google listing, pages for each service and town, Google Ads, regular new reviews and a fast, clear website people can contact from a phone.",
      },
      {
        q: "Is a marketing agency for contractors a good fit for a small painting company?",
        a: "Yes, if it knows the trades. A marketing agency for contractors understands seasonal demand, estimate-based selling and how homeowners judge crews by photos and reviews. Small painting companies often gain fastest from a fully built-out Google listing, frequent fresh reviews and a site that makes requesting an estimate simple.",
      },
      {
        q: "How do I get more painting contractor leads in the slow season?",
        a: "Shift focus indoors. Promote interior repaints, cabinets and commercial work when exterior jobs slow down, email past clients with seasonal offers, and keep collecting reviews so your Maps ranking holds. Ads can target interior and commercial searches while your SEO pages keep working in the background.",
      },
      {
        q: "Is painting contractor SEO worth the investment?",
        a: "Usually, yes. Homeowners look for painters year-round, and pages that rank keep sending estimate requests without paying for every click. Strong pages also lift your Maps listing and your chances of being named in AI answers, so the work pays off in more than one place.",
      },
      {
        q: "What should a painting contractor advertising agency run first, search ads or Local Services Ads?",
        a: "Many painters start with Local Services Ads, which sit at the very top with a verified badge and charge per lead. Google Ads add control over job types, towns and landing pages, which helps for cabinets or commercial work. We test one, track calls and forms, then add the other.",
      },
      {
        q: "How do I choose a painting contractor marketing company?",
        a: "Ask for examples from painters or other home service trades, check that the site and ad accounts stay in your name, and ask how estimate requests are tracked and whether you can leave any month. A good partner reports on booked jobs, not just clicks, and explains every change in plain language.",
      },
      {
        q: "Can my painting company get recommended by ChatGPT or Google's AI Overviews?",
        a: "Yes, when your information is consistent and detailed. We align your business details across every listing, gather reviews that mention the rooms and exteriors you painted, show your insurance and warranty, and answer common painting questions on your site. AI tools lean on those signals when they suggest local painters.",
      },
      {
        q: "How long does it take to see results from painting contractor marketing?",
        a: "A fixed Google listing and new ads can bring estimate requests within weeks. Organic rankings take several months and depend on how many painters compete in your towns. Starting in late winter means exterior pages are ranking by the time homeowners plan spring projects.",
      },
      {
        q: "Should painters post project photos on their Google listing?",
        a: "Yes. Fresh photos of real rooms, exteriors and cabinets show homeowners the quality of your prep and finish, and an active listing gives Google more reasons to show you. We help you post job photos each week, labeled by service and town, with no staging or stock images.",
      },
      {
        q: "How much does painting contractor marketing cost with Zonic Media?",
        a: "Monthly plans cost $297, $750 or $1,500, and you can cancel any month. Ad spend is billed to you by Google, and we never mark it up (0%). Smaller residential painters often begin on the first tier, while companies running commercial crews and ads across several towns usually choose a larger plan.",
      },
    ],
  },
  audit: {
    title: "See Why Homeowners Call Other Painters First",
    lead: [
      "We'll check your Maps rank for your main painting jobs, compare your reviews, photos and ",
      { href: "/services/web-design", label: "website" },
      " with the painters above you, and send a short list of fixes. Curious which other trades we serve? Browse our ",
      { href: "/industries", label: "industry list" },
      ".",
    ],
    points: [
      "Cancel any month",
      "From $297 per month",
      "Zero markup on ad spend",
      "Reinstatement on all plans",
    ],
    form: {
      formType: "painting-contractor-marketing",
      badge: "Free painting audit",
      title: "Your Free Painting Contractor Audit",
      subtitle: "No cost and no obligation.",
      submitText: "Send My Painting Audit",
      messageLabel: "Your towns and painting services",
      messagePlaceholder:
        "Cities you work in, interior, exterior or commercial focus, and crew size",
    },
  },
  banner: {
    title: "Be the Painter Homeowners Call for the Estimate",
    lead: "Begin with a free audit and a brief list of fixes ranked by impact.",
    icons: ["roller", "paint"],
  },
};
