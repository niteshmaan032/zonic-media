import type { IndustryIcon } from "./icons";

/* Industries hub redesign (23 Oct 2026; copy re-optimized 24 Oct 2026):
   the 31 industries grouped like the header's Industries menu (same order,
   same names, same links). Taglines and FAQs are new wording (none from the
   live /industries page), outcome-led, with no prices and no company names. */

export type IndustryItem = {
  id: string;
  name: string;
  href: string;
  tagline: string;
  icon: IndustryIcon;
};
export type IndustryGroup = { group: string; items: IndustryItem[] };

export const INDUSTRY_GROUPS: IndustryGroup[] = [
  {
    group: "Repair & Installation",
    items: [
      {
        id: "hvac",
        name: "HVAC",
        href: "/services/hvac-marketing-agency",
        tagline:
          "More AC repair and furnace calls, with ads timed to every heat wave and cold snap.",
        icon: "hvac",
      },
      {
        id: "plumbing",
        name: "Plumbing",
        href: "/services/plumbing-marketing-agency",
        tagline:
          "Rank for emergency plumber searches and book more water heater, drain and repipe jobs.",
        icon: "plumbing",
      },
      {
        id: "electrician",
        name: "Electrician",
        href: "/services/electrician-marketing-agency",
        tagline:
          "Show up first for panel upgrades, EV chargers and same-day electrical repairs.",
        icon: "electric",
      },
      {
        id: "roofing",
        name: "Roofing",
        href: "/services/roofing-marketing-agency",
        tagline:
          "Win roof repair and replacement calls the day a storm rolls through your area.",
        icon: "roofing",
      },
      {
        id: "garage-door",
        name: "Garage Door",
        href: "/services/garage-door-marketing-agency",
        tagline:
          "Top the local map for broken springs, opener fixes and new door installs.",
        icon: "garage",
      },
      {
        id: "appliance-repair",
        name: "Appliance Repair",
        href: "/services/appliance-repair-marketing-agency",
        tagline:
          "Book same-day visits from homeowners searching with a broken fridge, washer or oven.",
        icon: "appliance",
      },
      {
        id: "gutter",
        name: "Gutter",
        href: "/services/gutter-marketing-agency",
        tagline:
          "Fill the schedule with gutter installs, guards and cleanings after every storm.",
        icon: "gutter",
      },
      {
        id: "septic",
        name: "Septic Services",
        href: "/services/septic-marketing-agency",
        tagline:
          "Get found for pumping, inspections and drain field repairs across rural service areas.",
        icon: "septic",
      },
      {
        id: "solar",
        name: "Solar",
        href: "/services/solar-marketing-agency",
        tagline:
          "Reach homeowners researching panels and batteries, and book serious consultations.",
        icon: "solar",
      },
    ],
  },
  {
    group: "Remodeling & Construction",
    items: [
      {
        id: "bathroom-remodeling",
        name: "Bathroom Remodeling",
        href: "/services/bathroom-remodeling-marketing-agency",
        tagline:
          "Turn shower conversion and full remodel searches into in-home design visits.",
        icon: "bathroom",
      },
      {
        id: "kitchen-remodeling",
        name: "Kitchen Remodeling",
        href: "/services/kitchen-remodeling-marketing-agency",
        tagline:
          "Reach homeowners planning a new kitchen and book their design consultation early.",
        icon: "kitchen",
      },
      {
        id: "general-contractor",
        name: "General Contractor",
        href: "/services/general-contractor-marketing-agency",
        tagline:
          "Keep additions, remodels and ADU projects coming in beyond word of mouth.",
        icon: "contractor",
      },
      {
        id: "flooring",
        name: "Flooring",
        href: "/services/flooring-marketing-agency",
        tagline:
          "Rank for hardwood, tile and LVP searches that turn into measure appointments.",
        icon: "flooring",
      },
      {
        id: "window-and-door",
        name: "Window & Door",
        href: "/services/window-and-door-marketing-agency",
        tagline:
          "Win replacement window and door estimates against much bigger brands in your area.",
        icon: "windows",
      },
      {
        id: "painting",
        name: "Painting Contractor",
        href: "/services/painting-contractor-marketing-agency",
        tagline:
          "More quote requests for interior, exterior and commercial paint jobs.",
        icon: "painting",
      },
    ],
  },
  {
    group: "Outdoor & Property Care",
    items: [
      {
        id: "landscaping",
        name: "Landscaping",
        href: "/services/landscaping-marketing-agency",
        tagline:
          "Sign design projects and year-round maintenance clients across your territory.",
        icon: "landscape",
      },
      {
        id: "tree-service",
        name: "Tree Service",
        href: "/services/tree-service-marketing-agency",
        tagline:
          "Get the call for tree removal and storm cleanup before another crew does.",
        icon: "tree",
      },
      {
        id: "pool-service",
        name: "Pool Service",
        href: "/services/pool-service-marketing-agency",
        tagline:
          "Grow weekly service routes from one-time cleaning and repair calls.",
        icon: "pool",
      },
      {
        id: "pest-control",
        name: "Pest Control",
        href: "/services/pest-control-marketing-agency",
        tagline:
          "Win termite, rodent and insect calls, then turn them into ongoing plans.",
        icon: "pest",
      },
    ],
  },
  {
    group: "Cleaning Services",
    items: [
      {
        id: "cleaning",
        name: "Cleaning Company",
        href: "/services/cleaning-company-marketing-agency",
        tagline:
          "Land regular house and office cleaning clients straight from Google Maps.",
        icon: "clean",
      },
    ],
  },
  {
    group: "Health & Medical",
    items: [
      {
        id: "dental",
        name: "Dental",
        href: "/services/dental-marketing-agency",
        tagline:
          "Attract new patients for checkups, implants and cosmetic dentistry near your office.",
        icon: "dental",
      },
      {
        id: "chiropractic",
        name: "Chiropractic",
        href: "/services/chiropractic-marketing-agency",
        tagline:
          "Rank for local chiropractor searches and fill new-patient slots every week.",
        icon: "chiro",
      },
      {
        id: "pediatric",
        name: "Pediatrics",
        href: "/services/pediatric-marketing-agency",
        tagline:
          "Help new parents nearby choose your practice and book that first visit.",
        icon: "pediatric",
      },
    ],
  },
  {
    group: "Professional Services",
    items: [
      {
        id: "law-firm",
        name: "Law Firm",
        href: "/services/law-firm-marketing-agency",
        tagline:
          "Reach people who need a lawyer today and turn their searches into consultations.",
        icon: "law",
      },
      {
        id: "real-estate",
        name: "Real Estate",
        href: "/services/real-estate-marketing-agency",
        tagline:
          "Generate buyer and seller leads and grow a local name for your brokerage.",
        icon: "realestate",
      },
      {
        id: "home-inspector",
        name: "Home Inspector",
        href: "/services/home-inspector-marketing",
        tagline:
          "Get chosen by buyers and agents searching for a licensed inspector nearby.",
        icon: "inspection",
      },
      {
        id: "nonprofit",
        name: "Nonprofit",
        href: "/services/non-profit-marketing-agency",
        tagline:
          "Reach donors and volunteers through search, social and the Google Ad Grants program.",
        icon: "nonprofit",
      },
    ],
  },
  {
    group: "Cannabis & Retail",
    items: [
      {
        id: "cannabis",
        name: "Cannabis Dispensaries",
        href: "/services/cannabis-marketing-agency",
        tagline:
          "Show up on Google Maps when shoppers search for a dispensary and win repeat visits.",
        icon: "cannabis",
      },
    ],
  },
  {
    group: "Auto & Transport",
    items: [
      {
        id: "auto-repair",
        name: "Auto Repair",
        href: "/services/auto-repair-marketing-agency",
        tagline:
          "Fill your service bays with local drivers looking for brakes, diagnostics and oil changes.",
        icon: "auto",
      },
      {
        id: "towing",
        name: "Towing",
        href: "/services/towing-marketing-agency",
        tagline:
          "Be the tow company stranded drivers find and call first, day or night.",
        icon: "towing",
      },
      {
        id: "moving",
        name: "Moving Company",
        href: "/services/moving-company-marketing-agency",
        tagline:
          "Book more local and long-distance moves from people setting their move date.",
        icon: "moving",
      },
      {
        id: "travel",
        name: "Travel & Tourism",
        href: "/services/travel-and-tourism-marketing-agency",
        tagline:
          "Win more direct bookings for hotels, tour operators and destinations.",
        icon: "travel",
      },
    ],
  },
];

export const ALL_INDUSTRIES = INDUSTRY_GROUPS.flatMap((g) => g.items);

/* FAQs built from how owners search for industry and home services
   marketing (what's included, AI search, fit, location, plans). Prices are
   only the published plans. */
export const INDUSTRY_FAQS: { question: string; answer: string }[] = [
  {
    question: "Which industries does Zonic Media serve?",
    answer:
      "Local service businesses in 20+ industries: HVAC, plumbing, roofing and electrical contractors, remodelers, outdoor and cleaning companies, dental and chiropractic practices, law firms, real estate agents, auto shops, towing and moving companies. Each has its own page in the list above.",
  },
  {
    question: "Why hire a marketing agency that knows my industry?",
    answer:
      "Buyers in each field search and decide differently. A homeowner with a flooded basement phones whichever plumber tops Google Maps; a patient compares dentists' reviews for days. A plan built for your industry targets the right searches, proof and timing.",
  },
  {
    question: "What does home services marketing include?",
    answer:
      "Usually local SEO and Google Maps rankings, a fully optimized Google Business Profile, a website that turns visits into calls, Google Ads and Local Services Ads, steady review requests and monthly reports on calls and booked jobs, mixed to suit your trade.",
  },
  {
    question:
      "How is marketing for contractors different from clinics or law firms?",
    answer:
      "Contractors need fast Google Maps visibility for urgent jobs and photos of real work. Clinics need reviews, insurance details and easy online booking. Law firms need credentials and pages for each case type. The channels overlap, but the pages, offers and timing change for every field.",
  },
  {
    question: "How do local businesses get recommended by AI search tools?",
    answer:
      "ChatGPT and Google AI Overviews favor businesses whose details they can verify: a fully filled-in Google profile, matching directory listings, fresh reviews and pages that spell out your services, service area and licenses. We build and maintain those signals so you are easier to recommend.",
  },
  {
    question: "Can you help if my industry isn't listed?",
    answer:
      "Yes. The pages above show where we have the most experience, but local SEO, Google profile work, websites and Google Ads suit almost any local business. Tell us what you do and we'll say honestly if we fit.",
  },
  {
    question: "Can you market a business outside Delaware?",
    answer:
      "Yes. Our office is in Dover, Delaware, and we work remotely with local businesses across the United States, building each plan around the towns you cover.",
  },
  {
    question: "Which marketing plan suits a contractor or local business?",
    answer:
      "Foundation, at $297 a month, suits a business building its Google Maps presence. Growth, at $750, adds Google Search Ads and deeper local SEO. Authority, at $1,500, covers several locations plus social media and Meta Ads. Every plan runs month to month with 0% ad-spend markup.",
  },
];
