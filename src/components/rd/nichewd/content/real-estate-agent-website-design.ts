/* Real Estate Agent Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: little so far · real estate
     website design 5 impressions (pos 19.8) · realtor web design texas 5
     (3.6) · real estate brokerage websites 5 (14.6) · the best real estate
     website design 5 (12.6) · real estate agent website 3 (6.0).
   - Semrush US: real estate website design 1,900 (KD 40) · realtor
     website design 390 (35) · real estate agent website design 320 (32).
     Avoided on purpose: the portal term for listing sites (9,900, portal
     intent), so that exact phrase never appears.
   - Web research (2026 agent website guides, agent forums): IDX search is
     the baseline (map search, filters, saved searches, new-listing
     alerts); home valuation pages are the main seller-lead tool;
     neighborhood guides and area landing pages; calls to action placed
     in the visitor's path rather than pop-ups; instant lead alerts and a
     CRM connection; license number and Equal Housing details as trust
     signals. Agents ask whether they need a site beyond the brokerage
     page (it leaves when they change firms), how IDX differs from the
     MLS, whether IDX pages earn SEO credit (often loaded in a frame) and
     what a site costs.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company or platform named, verified numbers only,
   every live content link kept (small-business local SEO link replaces
   the home-services one). */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/real-estate-agent-website-design",
  stage: {
    widget: "valuation",
    switchLabel: "Preview the example site by client type",
    business: "Your Realty Team",
    domain: "yourrealtyteam.com",
    nav: ["Buy", "Sell", "Neighborhoods", "About"],
    call: "Call or text",
    primary: "Plan my move",
    secondary: "Browse listings",
    proof: "Rated by local buyers and sellers",
    bookTitle: "Value or find a home",
    confirm: "Send my request",
    serviceSubs: ["Free, no pressure", "Led by a local agent", "Book online"],
    toast: "Request sent",
    toastNote: "Agent replies today",
    phoneCta: "Tour",
    modes: [
      {
        label: "Sellers",
        icon: "home",
        badge: "Selling · Free home value",
        headline: "Selling Soon? Find Out What Your Home Is Worth.",
        sub: "A local pricing report, a selling plan and marketing that gets your home seen.",
        services: ["Home valuation", "Listing marketing", "Seller's guide"],
        book: ["Home value", "Selling soon", "Just curious"],
        img: {
          src: "/images/free-website/free-real-estate/sell-a-home.webp",
          position: "50% 45%",
        },
      },
      {
        label: "Buyers",
        icon: "key",
        badge: "Buying · Fresh listings",
        headline: "Find Your Next Home With a Local Expert.",
        sub: "Search local listings, save favorites and book private tours on your schedule.",
        services: ["Home search", "Private tours", "First-time buyers"],
        book: ["Book a tour", "Listing alerts", "Pre-approval"],
        img: {
          src: "/images/free-website/free-real-estate/buy-a-home.webp",
          position: "50% 45%",
        },
      },
    ],
    legend: [
      "Header call and text link",
      "Seller and buyer landing pages",
      "Home value and search widget",
      "Sticky mobile contact bar",
    ],
  },
  // Teal for sellers, gold for buyers, then violet and rose (tones.ts).
  tones: tonesFor("real-estate-agent-website-design"),
  serviceName: "Real Estate Agent Website Design",
  audience: "real estate agents, realtors, teams and brokerages",
  meta: {
    title: "Real Estate Agent Website Design | Realtor Website Design",
    description:
      "Real estate website design for agents and teams: IDX home search, home value pages and neighborhood guides on your own domain that win buyer and seller leads.",
    keywords: [
      "real estate agent website design",
      "real estate website design",
      "realtor website design",
      "realtor web design",
      "real estate web design",
      "real estate agent website",
      "website design for realtors",
      "real estate brokerage websites",
      "idx website design",
      "realtor website",
      "real estate team website design",
      "real estate website design company",
    ],
  },
  hero: {
    h1Lead: "Real Estate Agent Website Design",
    h1Rest: "That Wins Listings and Buyers Directly",
    icon: "key",
    lead: [
      "We build realtor websites with home search, home value requests and neighborhood pages, so buyers and sellers find you on your own domain instead of a portal. Your ",
      { href: "/services/web-design", label: "custom website" },
      ", which launches in 2–3 weeks, stays with you even if you change brokerages.",
    ],
    cta: "Get My Free Realtor Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/real-estate-agent-hero.webp",
        position: "65% 40%",
        query: "real estate website design",
      },
      cardA: {
        icon: "home",
        title: "More Seller Leads From Search",
        sub: "Home value pages that rank in your market",
      },
      photoB: {
        src: "/images/home-improvement-web/real-estate-agent-first-impressions-1.webp",
        position: "center 25%",
        query: "realtor near me",
      },
      cardB: {
        icon: "key",
        title: "Buyers Booking Tours Online",
        sub: "IDX search with saved alerts and tour requests",
      },
    },
  },
  showcase: {
    title: "See a Realtor Website Design for Buyers and Sellers",
    lead: "Flip between sellers and buyers to watch the homepage, home value tool and phone view adjust.",
  },
  services: {
    title: "Real Estate Website Design\nFor Agents, Teams and Brokers",
    lead: "Every page, search tool and lead form planned around how people buy and sell in your market.",
    cta: "Plan My Realtor Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Agent and Team Websites",
        desc: "A personal brand site on your own domain, designed around your market, your listings and the way you work with clients.",
        points: ["Your own domain", "Team and agent pages", "Brand-led design"],
        links: [
          { href: "/services/web-design", label: "See our web design service" },
        ],
      },
      {
        icon: "search",
        title: "IDX Home Search Pages",
        desc: "MLS listings shown through IDX on your site, with map search, filters and saved-search alerts that bring buyers back.",
        points: ["Map-based search", "Saved searches", "New listing alerts"],
        links: [],
      },
      {
        icon: "home",
        title: "Home Value and Seller Pages",
        desc: "Valuation request pages, seller guides and listing-marketing pages that turn curious owners into listing appointments.",
        points: [
          "Home value requests",
          "Seller guide download",
          "Listing presentation page",
        ],
        links: [
          {
            href: "/real-estate-website-design-agency-us/offer",
            label: "Free realtor website offer",
          },
        ],
      },
      {
        icon: "pin",
        title: "Neighborhood and Community Guides",
        desc: "A page for each neighborhood, suburb or area you know well, with local insight that ranks for area searches.",
        points: ["Area guide pages", "Market snapshots", "Local photos"],
        links: [
          {
            href: "/services/industry/real-estate-seo-services",
            label: "Real estate SEO",
          },
        ],
      },
      {
        icon: "chat",
        title: "Lead Routing and CRM Hookups",
        desc: "Every form, showing request and valuation lead flows into your real estate CRM and reaches the right agent fast.",
        points: ["CRM integration", "Agent routing", "Instant alerts"],
        links: [],
      },
      {
        icon: "repeat",
        title: "Redesigns and Ongoing Care",
        desc: "We rebuild dated agent sites without losing rankings, then host, update and refresh your pages every month.",
        points: ["Redirect mapping", "Managed hosting", "Monthly updates"],
        links: [
          {
            href: "/services/real-estate-marketing-agency",
            label: "Real estate marketing",
          },
        ],
      },
    ],
  },
  features: {
    title: "Real Estate Agent Website Features Clients Expect",
    lead: "Small details that keep buyers searching and sellers reaching out.",
    items: [
      {
        icon: "phone",
        title: "Call or Text the Agent Instantly",
        text: "Mobile visitors can call or text you from any listing or page.",
      },
      {
        icon: "mail",
        title: "Instant Listing Alerts",
        text: "Buyers get an email when a new home matches their saved search.",
      },
      {
        icon: "calendar",
        title: "Online Tour Requests",
        text: "Pick a home, choose a time and request a showing in seconds.",
      },
      {
        icon: "home",
        title: "Home Value Request Forms",
        text: "Owners ask for a pricing report in two short steps.",
      },
      {
        icon: "pin",
        title: "Guides to Every Neighborhood",
        text: "Area pages cover parks, commutes and the local amenities buyers ask about.",
      },
      {
        icon: "star",
        title: "Reviews From Past Clients",
        text: "Google reviews appear beside your contact and valuation buttons.",
      },
      {
        icon: "shield",
        title: "License and Fair Housing Details",
        text: "Your license number, brokerage and Equal Housing notice in the footer.",
      },
      {
        icon: "bolt",
        title: "Fast Photo-Heavy Pages",
        text: "Listing photos load quickly on phones without dragging the site down.",
      },
    ],
  },
  growth: {
    title: "How Better Realtor Web Design Grows Your Pipeline",
    lead: "Rank for local home searches, convert more visitors and get named in AI answers.",
    rank: {
      title: "Rank for Home Searches in Every Neighborhood",
      body: [
        "Neighborhood, home value and buyer pages target what people search before they ever call an agent, and their rankings are checked every week. Combine them with ",
        {
          href: "/services/industry/real-estate-seo-services",
          label: "SEO for realtors",
        },
        ", plus ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google profile optimization",
        },
        " for map pack visibility.",
      ],
      points: [
        "Neighborhood keyword map",
        "Area guide pages",
        "Weekly rank tracking",
        "Agent and listing schema",
      ],
      cta: "Map My Neighborhood Pages",
      keywords: [
        ["homes for sale in + your area", 26, 4],
        ["what is my home worth", 33, 7],
        ["realtor near me", 22, 3],
        ["best neighborhoods in + your city", 29, 5],
      ],
    },
    convert: {
      title: "Turn Browsers Into Showings and Listing Appointments",
      body: [
        "Short forms, one-tap calls and a tour request on every listing turn more visits into real conversations. Every lead is tagged with its source, and ",
        { href: "/services/google-ads", label: "Google Ads" },
        " can push more buyers and sellers to the pages that work best.",
      ],
      points: [
        "Tour request buttons",
        "Two-step home value form",
        "Lead source tracking",
        "Text-friendly contact",
      ],
      cta: "Show Me a Lead Flow",
      url: "yourrealtyteam.com",
      headline: "Ready to Move? Get a Free Home Value",
      services: ["Call an agent", "Home value", "Book a tour", "Seller guide"],
    },
    ai: {
      title: "Get Named When Buyers Ask AI for an Agent",
      body: [
        "Buyers increasingly ask AI tools to recommend an agent who knows a given neighborhood. Area guides with plain answers, clear agent profiles and structured data give Google AI Overviews a reason to mention you, and our ",
        { href: "/services/ai-seo-services", label: "AI SEO work" },
        " keeps that content fresh.",
      ],
      points: [
        "Q&A neighborhood guides",
        "Agent schema",
        "Clean page structure",
        "AI mention tracking",
      ],
      cta: "See If AI Mentions Me",
      query: "who is a good realtor for first-time buyers near me",
      intro: "For first-time buyers in your area,",
      bullets: [
        "Step-by-step buyer guides",
        "Deep neighborhood knowledge",
        "Plenty of recent reviews",
      ],
    },
  },
  sitemap: {
    title: "Realtor Website Pages Built Around How Buyers Search",
    lead: "Each page serves a buyer or seller search, so the whole site brings in leads, not only the home page.",
    home: "Your Realty Team homepage",
    groups: [
      {
        name: "Buy",
        icon: "key",
        pages: ["Home search", "Buyer's guide", "Tour requests"],
      },
      {
        name: "Sell",
        icon: "home",
        pages: ["Home value", "Seller's guide", "Listing marketing"],
      },
      {
        name: "Neighborhoods",
        icon: "pin",
        pages: ["Area guides", "Market updates", "Relocation page"],
      },
      {
        name: "About",
        icon: "users",
        pages: ["Agent bios", "Client reviews", "Contact the team"],
      },
    ],
  },
  results: {
    title: "After Launch: Leads, Listings and Rankings Build Up",
    lead: "Leads tracked from launch, area pages climbing and buyers returning through saved searches.",
    cta: "Plan My Launch Timeline",
    milestones: [
      {
        when: "Launch week",
        title: "Leads Land in Your CRM",
        text: "Valuation, tour and contact forms connect to your CRM on day one, each tagged by source.",
      },
      {
        when: "Month 1",
        title: "Area Pages Get Found",
        text: "Google indexes the neighborhood and home value pages, and early local searches start finding them.",
      },
      {
        when: "Months 2–3",
        title: "Buyers Start Returning",
        text: "Saved searches and listing alerts bring buyers back while area pages climb in local results.",
      },
      {
        when: "Spring market",
        title: "Ready for Listing Season",
        text: "Seller pages and valuation requests are in place before spring, when many owners decide to list.",
      },
    ],
    wins: [
      {
        icon: "home",
        title: "More Listing Conversations",
        text: "Owners request a home value online, giving you a natural reason to follow up.",
      },
      {
        icon: "key",
        title: "Buyers Who Stay With You",
        text: "Saved searches keep buyers on your site instead of drifting to a portal.",
      },
      {
        icon: "trend",
        title: "Rankings You Own",
        text: "Neighborhood pages keep earning visits under your name and domain.",
      },
      {
        icon: "award",
        title: "A Brand That Moves With You",
        text: "Your site, leads and reviews stay yours if you switch brokerages.",
      },
    ],
    band: [
      {
        icon: "target",
        value: "Seller Leads",
        label: "Home value requests from local owners",
      },
      {
        icon: "search",
        value: "Buyer Inquiries",
        label: "Search and showing requests captured",
      },
      {
        icon: "map",
        value: "Neighborhood Expert",
        label: "Area guides that show you know the market",
      },
      {
        icon: "star",
        value: "Your Brand, Not a Portal",
        label: "A personal site that keeps clients with you",
      },
    ],
  },
  process: {
    title: "From Listing Feed to Launch in 2–3 Weeks",
    lead: "An agreed launch day, a no-cost mockup and short check-ins throughout.",
    items: [
      {
        when: "Week 1",
        h: "Market and Brand Discovery",
        p: "We learn your farm areas, brand and lead sources, then send a first look at your homepage, free.",
      },
      {
        when: "Weeks 1–2",
        h: "Area Guides, Copy and Layout",
        p: "Pages are designed and written for your market, including the first neighborhood guides.",
      },
      {
        when: "Weeks 2–3",
        h: "IDX, CRM and SEO Setup",
        p: "We connect IDX search and your CRM, then add redirects, schema and lead tracking.",
      },
      {
        when: "Launch",
        h: "Launch and Grow Your Pipeline",
        p: "The site goes live, leads are tracked and new area pages are added over time.",
      },
    ],
  },
  compare: {
    title: "Your Own Realtor Website vs. a Brokerage Profile Page",
    lead: "Why agents who own their site keep more of their leads than those relying on a page the brokerage controls.",
    otherLabel: "Brokerage profile page",
    rows: [
      {
        topic: "Who owns the site",
        other:
          "Lives on the brokerage domain and disappears if you move firms.",
        zonic:
          "Your domain, content and rankings stay with you wherever you go.",
      },
      {
        topic: "Lead flow",
        other: "Inquiries may be shared, rerouted or delayed by the office.",
        zonic: "Every lead goes straight to you and into your own CRM.",
      },
      {
        topic: "Listing search",
        other: "A basic company search with your photo in the corner.",
        zonic: "IDX search with saved searches and alerts branded to you.",
      },
      {
        topic: "Seller leads",
        other: "No home value tool, or one that sends leads somewhere else.",
        zonic: "Your own valuation pages that start listing conversations.",
      },
      {
        topic: "Area search rankings",
        other: "One bio page that rarely ranks for area searches.",
        zonic: "Neighborhood guides built to rank for the areas you farm.",
      },
      {
        topic: "Personal brand",
        other: "The same layout as every other agent at the office.",
        zonic: "A design that reflects you, your market and your style.",
      },
    ],
  },
  reviews: {
    title: "Check Our 5.0 Google Reviews Before Hiring a Website Team",
    lead: "Unfiltered feedback from owners we've built for, straight from our Google profile.",
  },
  pricing: {
    title: "Monthly Plans for Agents and Teams",
    compareTitle: "How the Plans Compare for Realtor Sites",
    addOnsTitle: "Add Listing and Area Pages Anytime",
    customTitle: "Need Sites for a Whole Brokerage?",
  },
  faq: {
    title: "Realtor Website Design: Common Agent Questions",
    lead: "Cost, launch time, IDX, brokerage pages and what a strong agent site needs.",
    items: [
      {
        q: "How much does a real estate agent website cost?",
        a: "It depends on your pages, IDX needs and how many agents the site covers, so after a short free call you get one fixed quote, and that number doesn't move during the build. Agents who sign on to a qualifying monthly growth plan pay nothing for the build itself, thanks to our realtor website offer.",
      },
      {
        q: "How long does a realtor website take to build?",
        a: "Most agent sites are ready in 2–3 weeks. Your homepage mockup, free of charge, arrives first, then neighborhood guides and bios come to you for approval. We start the IDX paperwork on day one, so listing search, your CRM and lead tracking are all connected before launch.",
      },
      {
        q: "Do I need my own website if my brokerage gives me one?",
        a: "A brokerage page helps, but it belongs to the brokerage, looks like every other agent's and disappears if you move firms. Your own site builds your personal brand, keeps leads in your CRM and earns rankings under your name for as long as you're in the business.",
      },
      {
        q: "Can my website show MLS listings through IDX?",
        a: "Yes. We set up IDX so MLS listings appear on your own site with map search, filters, saved searches and alerts. Each MLS, from Texas to the Carolinas, has its own IDX rules, so we guide you through approval and use a setup that lets search engines read listing pages where your MLS allows it.",
      },
      {
        q: "What should a real estate agent website include?",
        a: "IDX home search with saved alerts, a home value request page, neighborhood guides, buyer and seller guides, agent bios with reviews, one-tap call and text buttons, tour request forms, your license and Equal Housing details, a CRM connection and fast mobile pages.",
      },
      {
        q: "Will a redesign hurt my realtor website's rankings?",
        a: "Handled carefully, no. We catalog your current pages and the searches they rank for, keep the neighborhood and blog content that performs, redirect every changed address and track your positions closely through the first weeks after relaunch. Listing alerts and saved searches carry over too, so returning buyers notice nothing but a better site.",
      },
      {
        q: "Can you connect my real estate CRM?",
        a: "Yes. Valuation requests, tour requests and contact forms can feed the CRM you already use, with the lead's source, area and buyer or seller type attached, so follow-up starts in minutes instead of hours. Team leads can also be routed by area or by agent.",
      },
      {
        q: "Do you write neighborhood pages and agent bios?",
        a: "Yes. Our writers create neighborhood guides, buyer and seller pages and agent bios in a friendly, local voice, using what you know about each area. Nothing goes live until you approve it, and new area pages are added as your farm grows.",
      },
      {
        q: "Are template realtor websites good enough?",
        a: "They're quick to start, but templates look like thousands of other agent sites, often load IDX in a frame search engines won't credit to you and rarely include real neighborhood content. Custom brokerage websites and agent sites give you a distinct brand and pages that rank in your market.",
      },
    ],
  },
  consult: {
    title: "Preview Your New Agent Homepage, Free",
    lead: [
      "Tell us your market, brokerage and the areas you farm, and you'll get a sample homepage plus a page-by-page outline at no charge. Rather talk first? ",
      { href: "/contact-us", label: "Contact our team" },
      ", learn ",
      { href: "/about", label: "who we are" },
      ", explore ",
      { href: "/services", label: "our full service list" },
      " or fix a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google Business Profile",
      },
      ". Solo agents and small teams can dig deeper with our ",
      {
        href: "/services/local-seo-for-small-business",
        label: "local SEO for small businesses",
      },
      " page.",
    ],
    points: [
      "Free mockup of your homepage",
      "Neighborhood page plan",
      "IDX and CRM advice",
      "Launch in 2–3 weeks",
    ],
    form: {
      formType: "real-estate-agent-website-design",
      badge: "Free realtor homepage mockup",
      title: "See Your New Realtor Homepage First",
      subtitle: "Free, no strings attached.",
      submitText: "Get My Homepage Mockup",
      messageLabel: "Your market, brokerage and current site",
      messagePlaceholder:
        "Your name or team, brokerage, current website (if any) and the neighborhoods or cities you serve",
    },
  },
  banner: {
    title: "Own the Website Your Buyers and Sellers Find First",
    lead: "Home search, home value pages and neighborhood guides under your own name.",
  },
};
