import { PALETTES } from "../../palettes";
import type { LocationContent } from "../../types";

/* California plumbing marketing — location redesign draft (24 Oct 2026).
   Research: Semrush US (Oct 2026) shows no ranking terms for the live URL
   and no volume for agency-intent phrases, so the title keeps the live
   term "Plumbing Marketing Agency in California". City demand used:
   plumber los angeles 2,900 · plumber san diego 2,900 · plumber
   sacramento 1,600 · plumber san francisco 1,600 · plumber san jose 1,300
   · emergency plumber los angeles 720 · drain cleaning los angeles 720 ·
   water heater repair los angeles 590 · water heater strapping 260 ·
   tankless water heater installation los angeles 260 · plumbing companies
   in california 110. Web research: CSLB requires the license number in
   all advertising (B&P 7030.5); seismic strapping (CPC 507.2); Bay Area
   zero-NOx water heater rules; Spanish-language demand. */

export const CONTENT: LocationContent = {
  draftSlug: "california-2",
  liveUrl: "/services/plumbing-marketing-agency/california",
  parent: {
    href: "/services/plumbing-marketing-agency",
    label: "Plumbing Marketing Agency",
    niche: "Plumbing",
  },
  place: "California",
  meta: {
    title: "Plumbing Marketing Agency in California | LA, SD & Bay Area",
    description:
      "California plumbing marketing for Los Angeles, San Diego, Bay Area and Sacramento plumbers: Map Pack rankings, bilingual pages, Google Ads and reviews.",
    keywords: [
      "plumbing marketing agency california",
      "plumbing companies in california",
      "plumbing seo california",
      "plumber los angeles",
      "plumber san diego",
      "water heater repair los angeles",
      "emergency plumber los angeles",
      "water heater strapping",
    ],
  },
  palette: PALETTES.emeraldIndigo,
  hero: {
    h1: "California Plumbing Marketing Agency, From San Diego to Sacramento",
    h1NoWrap: "to Sacramento",
    lead: [
      "When a water heater quits in Los Angeles or a sewer line backs up in San Jose, homeowners tend to call whoever Google ranks first. Our ",
      {
        href: "/services/plumbing-marketing-agency",
        label: "plumbing marketing team",
      },
      " earns you that spot statewide with Map Pack work, city pages, ads and Spanish-language listings.",
    ],
    cta: "Get My California Plumbing Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "First-page Maps spots statewide",
        sub: "Los Angeles, San Diego, the Bay Area and the Central Valley",
        chips: ["Los Angeles", "San Diego", "San Jose", "Sacramento", "Fresno"],
      },
      left: {
        icon: "translate",
        title: "Calls in English and Spanish",
        sub: "Bilingual pages and profiles for the neighborhoods that need them",
      },
      right: {
        icon: "tool",
        title: "More water heater installs",
        sub: "Tankless, heat pump and strapping work booked from search",
      },
      bottom: {
        title: "Sewer and drain jobs, year-round",
        sub: "Camera inspection and line repair pages ranked by city",
      },
    },
  },
  services: {
    title: "Plumbing Marketing Services for California Contractors",
    lead: "California plumbers get search, ads, site and reviews from one team.",
    cta: "Audit My California Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Rankings Across California Metros",
        desc: "Categories, service areas, photos and your CSLB license number, set up so each profile can reach the top three in the metros you serve.",
        points: [
          "Profile fully built out",
          "CSLB number displayed",
          "Metro service areas",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile service",
          },
        ],
      },
      {
        icon: "search",
        title: "Plumber SEO and City Pages, LA to Sacramento",
        desc: "Separate pages for water heater repair in Los Angeles, sewer lines in Oakland and leak detection in San Diego, each aimed at a real search.",
        points: [
          "A page for every city",
          "Spanish versions available",
          "Internal links mapped",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-plumber",
            label: "Plumbing SEO",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for trades",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads and LSAs for California Plumbers",
        desc: "Search campaigns and Local Services Ads built around urgent leak, clog and no-hot-water searches, split by city with separate reporting.",
        points: [
          "Urgent-job keyword lists",
          "LSA profile and checks",
          "Reports split by city",
        ],
        links: [
          { href: "/services/google-ads", label: "Paid search management" },
        ],
      },
      {
        icon: "monitor",
        title: "Mobile Plumbing Websites in Two Languages",
        desc: "Sites that open fast on phones, keep your number at the top and take bookings in English and Spanish from customers statewide.",
        points: [
          "Click-to-call on every page",
          "English and Spanish pages",
          "Booking built in",
        ],
        links: [
          {
            href: "/services/plumbing-website-design",
            label: "Websites for plumbers",
          },
          { href: "/services/web-design", label: "Web design services" },
        ],
      },
      {
        icon: "star",
        title: "More Google Reviews From California Customers",
        desc: "Texts after each visit ask for a review in the customer's own language, and we draft replies that mention the job and the city.",
        points: [
          "Texts in two languages",
          "Replies drafted for you",
          "Review growth reported",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI recommendation work",
          },
        ],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified California Listings",
        desc: "Moved shops, home offices and shared addresses can trigger a suspension. We fix the cause, handle verification and have reinstated 900+ profiles.",
        points: [
          "Root cause found",
          "Appeal filed for you",
          "Verification calls prepared",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstatement help",
          },
          { href: "/services/gmb-verification-help", label: "Get verified" },
        ],
      },
    ],
  },
  growth: {
    title: "How California Plumbers Win More Local Calls",
    lead: "Rank on the map, get suggested by AI tools and turn visitors into bookings on a site built for phones.",
    rows: [
      {
        title: "Rank in the Map Pack When LA Homes Lose Hot Water",
        body: [
          "A cold shower in Los Angeles sends people straight to Google Maps. We tighten your profile, service area and review mix so you hold a top-three spot for water heater searches in the neighborhoods you actually cover.",
        ],
        points: [
          "Water heater categories",
          "Neighborhood service areas",
          "Install photos each week",
          "Hours that match reality",
        ],
        cta: "Check My LA Map Ranking",
        ui: {
          kind: "maps",
          query: "water heater repair los angeles",
          city: "Los Angeles",
          category: "Plumber · Same-day service",
        },
      },
      {
        title: "Be the Plumber AI Suggests in San Diego",
        body: [
          "When a San Diego homeowner asks Gemini or ChatGPT for a reliable plumber, the reply is assembled from reviews, listings and websites. We make yours easy to quote, with clear services, areas and your CSLB license. Read about our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          ".",
        ],
        points: [
          "Services stated plainly",
          "Areas served listed",
          "License shown everywhere",
          "Answers AI can quote",
        ],
        cta: "Check My AI Mentions",
        ui: {
          kind: "ai",
          query: "emergency plumber san diego",
          intro: "For late-night plumbing emergencies in San Diego,",
          bullets: [
            "Open nights and weekends",
            "CSLB-licensed technicians",
            "Written estimates before work",
          ],
        },
      },
      {
        title: "A Bilingual Website That Books Bay Area Jobs",
        body: [
          "Most callers glance at your site before they phone. We build it in English and Spanish, keep a call button on every screen and trim load times, so a visitor from Oakland or San Jose can book from the very first page.",
        ],
        points: [
          "English and Spanish pages",
          "Call button always visible",
          "Online booking form",
          "Strapping and tankless pages",
        ],
        cta: "Plan My New Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/san-jose",
          headline: "San Jose Plumbers, Ready Today",
          services: [
            "Water heaters",
            "Sewer lines",
            "Drain clogs",
            "Leak detection",
          ],
        },
      },
    ],
  },
  regions: {
    title: "California Regions We Market Plumbers In",
    lead: "Southern California, the Bay Area and the Central Valley search differently, so each one gets its own plan.",
    items: [
      {
        name: "Los Angeles County",
        cities: "Los Angeles · Long Beach · Pasadena · Glendale",
        focus: "Water heater, slab leak and sewer pages in English and Spanish",
      },
      {
        name: "Orange County and Inland Empire",
        cities: "Anaheim · Irvine · Riverside · San Bernardino",
        focus: "Re-pipe and tankless upgrade campaigns for growing suburbs",
      },
      {
        name: "San Diego County",
        cities: "San Diego · Chula Vista · Oceanside · Escondido",
        focus: "Emergency and leak detection ads split by neighborhood",
      },
      {
        name: "Bay Area",
        cities: "San Francisco · Oakland · San Jose · Fremont",
        focus: "Heat pump water heater and older-building repair pages",
      },
      {
        name: "Sacramento Region",
        cities: "Sacramento · Roseville · Elk Grove · Folsom",
        focus: "Service-area profiles that reach fast-spreading suburbs",
      },
      {
        name: "Central Valley",
        cities: "Fresno · Bakersfield · Modesto · Stockton",
        focus:
          "Bilingual listings and drain cleaning pages for wide service areas",
      },
    ],
    other: "Serving a California city we didn't list? Ask us about it.",
  },
  reviews: {
    title: "Why Service Owners Give Us Five Stars",
    lead: "Google reviews from the home service companies we market.",
  },
  pricing: {
    title: "California Plumbing Marketing Pricing",
    lead: [
      "Plans start at $297 a month, with $750 and $1,500 tiers above it. Stop any month, and your ad spend carries a 0% markup. Dealing with a ",
      { href: "/services/gmb-verification-help", label: "stuck verification" },
      "? We fix those too.",
    ],
    compareTitle: "Compare California Plan Tiers",
    compareLead: "Start with one metro or cover several at once.",
    addOnsTitle: "Extra Help for Bigger California Markets",
    addOnsLead:
      "Add Spanish pages, more cities or another ad campaign whenever you need them.",
    customTitle: "Shops in more than one California metro?",
    customText:
      "Share your locations and we'll build a plan around each market.",
  },
  faq: {
    title: "Answers for California Plumbing Owners",
    lead: "Spanish marketing, licensing, ads and plans, explained for California plumbers. Want specifics? Give us a call.",
    items: [
      {
        q: "Do you offer Spanish-language plumbing marketing in California?",
        a: "Yes. Spanish versions of your service pages, profile updates, review texts and ads go live in areas like East Los Angeles, Santa Ana and the Central Valley, where many homeowners search in Spanish. Both language versions point to each other, so Google serves the right one.",
      },
      {
        q: "Does my CSLB license number need to appear in my plumbing ads?",
        a: "Yes. California requires licensed contractors to include their license number in all advertising, and that covers websites and online listings. We place your CSLB number on your site, Google profile and ads, and keep it identical everywhere, which also reassures homeowners comparing plumbers.",
      },
      {
        q: "Do you create pages for water heater strapping and tankless installs in California?",
        a: "Yes. Strapping, tankless installs and heat pump water heaters each get their own page listing the cities you serve. Strapping often comes up when a home is sold or remodeled, so these pages bring in planned work that fills the gaps between emergency calls.",
      },
      {
        q: "How do you split plumbing marketing across Los Angeles, the Bay Area and San Diego?",
        a: "Each metro gets its own city pages, service-area settings and ad campaigns, reported separately. You see which areas turn into booked jobs and shift effort toward them, rather than one statewide campaign that hides the detail.",
      },
      {
        q: "Is Google Ads worth it for plumbers in crowded California cities?",
        a: "It can be, when campaigns stay tight. We target urgent searches, block job-seeker and do-it-yourself terms, split campaigns by city and trace each call to a booked job, so you keep only what produces work. Google bills you directly for California ad spend, and our markup is 0%.",
      },
      {
        q: "What does California plumbing marketing cost with Zonic?",
        a: "Our three California tiers run $297, $750 and $1,500, and the right one depends on how many metros, pages and campaigns you need. None lock you into a long contract, and we never add a markup to your Google ad spend.",
      },
      {
        q: "Google wants to re-verify my California plumbing listing. Can you help?",
        a: "Yes. We prepare you for video verification, check that your business details match your license and website, and handle the back-and-forth with Google support. If the profile is already suspended, we've reinstated 900+ of them and know what reviewers look for.",
      },
    ],
  },
  audit: {
    title: "Claim Your Free California Plumbing Audit",
    lead: [
      "We test your Maps ranking in the California cities you cover, look over your Google profile, ",
      { href: "/services/web-design", label: "site" },
      " and reviews, and point out where water heater and drain calls are slipping away.",
    ],
    points: [
      "Rankings checked city by city",
      "English and Spanish searches reviewed",
      "Plans from $297/mo, no long contract",
    ],
    form: {
      formType: "plumbing-marketing-california",
      badge: "Free California audit",
      title: "Get a California Plumbing Audit",
      subtitle: "No cost and no commitment.",
      submitText: "Send My California Audit",
      messageLabel: "Cities and services you focus on",
      messagePlaceholder:
        "e.g. Long Beach and Torrance, water heaters and sewer lines",
    },
  },
  banner: {
    title: "Win More California Plumbing Calls This Year",
    lead: "Find out where you rank across your California cities, free of charge.",
    icons: ["plumbing", "translate"],
  },
};
