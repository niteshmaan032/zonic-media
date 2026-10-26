import { PALETTES } from "../../palettes";
import type { LocationContent } from "../../types";

/* Arizona plumbing marketing — location redesign draft (24 Oct 2026).
   Research: Semrush US (Oct 2026) shows no ranking terms for the live URL
   and no volume for agency-intent phrases, so the title keeps the live
   term "Plumbing Marketing Agency in Arizona". City demand used for the
   page: plumber phoenix 2,900 · drain cleaning phoenix 2,400 · plumber
   phoenix az 1,900 · plumber tucson / mesa az / scottsdale 1,300 each ·
   emergency plumber phoenix 1,000 · water heater repair phoenix 1,000 ·
   water softener installation phoenix 390 · slab leak repair phoenix 170
   · plumbing companies phoenix az 170. Angles from web research: hard
   water, slab leaks, ROC licensing, cold-weather calls up north. */

export const CONTENT: LocationContent = {
  draftSlug: "arizona-2",
  liveUrl: "/services/plumbing-marketing-agency/arizona",
  parent: {
    href: "/services/plumbing-marketing-agency",
    label: "Plumbing Marketing Agency",
    niche: "Plumbing",
  },
  place: "Arizona",
  meta: {
    title: "Plumbing Marketing Agency in Arizona | Phoenix Plumber SEO",
    description:
      "Arizona plumbing marketing for Phoenix, Tucson, Mesa and Scottsdale plumbers: Google Maps rankings, drain and water heater pages, ads and five-star reviews.",
    keywords: [
      "plumbing marketing agency arizona",
      "plumbing companies in arizona",
      "plumbing companies phoenix az",
      "plumbing seo phoenix",
      "plumber phoenix",
      "drain cleaning phoenix",
      "emergency plumber phoenix",
      "water heater repair phoenix",
    ],
  },
  palette: PALETTES.orangeViolet,
  hero: {
    h1: "Plumbing Marketing Agency in Arizona That Keeps Your Trucks Booked",
    h1NoWrap: "Trucks Booked",
    lead: [
      "Phoenix homeowners searching for a plumber usually call one of the first names they see on the map. Our ",
      {
        href: "/services/plumbing-marketing-agency",
        label: "plumbing marketing agency",
      },
      " puts yours there across the Valley, Tucson and Flagstaff, with drain, water heater and slab leak pages, Google Ads and a steady flow of fresh reviews.",
    ],
    cta: "Get My Arizona Plumbing Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 in the Valley Map Pack",
        sub: "For drain, leak and water heater searches in each city you serve",
        chips: ["Phoenix", "Mesa", "Tucson", "Scottsdale", "Chandler"],
      },
      left: {
        icon: "call",
        title: "More emergency calls",
        sub: "Burst pipes and backups ring your phone, not a lead site",
      },
      right: {
        icon: "water",
        title: "Hard-water jobs booked",
        sub: "Softener, filter and heater flush work through every season",
      },
      bottom: {
        title: "More slab leak repairs",
        sub: "Leak detection pages placed where homeowners look first",
      },
    },
  },
  services: {
    title: "Arizona Plumbing Marketing Services We Run Each Month",
    lead: "Arizona plumbing marketing, from the Valley to Tucson, under one team.",
    cta: "Audit My Arizona Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Spots From Phoenix to Tucson",
        desc: "Categories, service areas, photos and your ROC license details, tuned until you reach the top three in each Arizona city.",
        points: [
          "Category and service setup",
          "City service areas",
          "ROC number on profile",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "Plumber SEO and Arizona City Pages",
        desc: "Pages for drain cleaning in Phoenix, water heaters in Mesa and slab leaks in Chandler, written the way locals actually search.",
        points: [
          "One page per city",
          "Service-by-city targeting",
          "Schema and fast loading",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-plumber",
            label: "SEO for plumbers",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads and Local Services Ads in Arizona",
        desc: "Emergency campaigns and Google Guaranteed listings for burst-pipe and backup searches, with each call recorded and matched to a job.",
        points: [
          "Emergency keyword sets",
          "Google Guaranteed setup",
          "Call recording included",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "Plumbing Websites Built for Phone Searches",
        desc: "Quick mobile sites with tap-to-call buttons, online booking and service pages for softeners, re-pipes and water heaters across Arizona.",
        points: [
          "Tap-to-call header",
          "Online booking form",
          "Quick on any phone",
        ],
        links: [
          {
            href: "/services/plumbing-website-design",
            label: "Plumber websites",
          },
          { href: "/services/web-design", label: "Custom web design" },
        ],
      },
      {
        icon: "star",
        title: "Review Requests After Every Arizona Job",
        desc: "A text goes out as each job closes, so a happy customer in Gilbert or Tucson reviews you while the fix is still fresh.",
        points: [
          "Automatic text requests",
          "Owner replies drafted",
          "City and job mentions",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "Reviews in AI answers" },
        ],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified Arizona Profiles",
        desc: "A suspended listing stops calls overnight. We handle appeals and stuck verifications, and our team has reinstated 900+ Google profiles.",
        points: [
          "Suspension appeals filed",
          "Video verification help",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Profile reinstatement",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Where Arizona Homeowners Find Their Plumber",
    lead: "Three places decide who gets the call: the map, AI answers and the reviews people read before they dial.",
    rows: [
      {
        title: "Win the Map When Phoenix Drains Back Up",
        body: [
          "Drain cleaning is among the busiest plumbing searches in Phoenix, and the map pack sits above every regular result. We shape your profile, city pages and reviews so you show in the top three when a sink stops draining.",
        ],
        points: [
          "Drain and sewer categories",
          "Valley service areas set",
          "Photos from real jobs",
          "Weekly Google updates",
        ],
        cta: "Check My Phoenix Ranking",
        ui: {
          kind: "maps",
          query: "drain cleaning phoenix",
          city: "Phoenix",
          category: "Plumber · Open 24 hours",
        },
      },
      {
        title: "Get Named When Tucson Asks AI for a Plumber",
        body: [
          "More homeowners now ask ChatGPT, Gemini or a Google AI Overview who to call. Those tools lean on your reviews, site and profile, so we make each one state your services, towns and license plainly. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " covers the rest.",
        ],
        points: [
          "Plain service and city facts",
          "Review themes that match",
          "FAQ answers on your site",
          "Listings kept consistent",
        ],
        cta: "Show Me in AI Answers",
        ui: {
          kind: "ai",
          query: "best plumber for slab leak tucson",
          intro: "For slab leak detection and repair in Tucson,",
          bullets: [
            "Acoustic leak detection",
            "Licensed with the Arizona ROC",
            "Same-day appointments",
          ],
        },
      },
      {
        title: "Turn Hard-Water Fixes Into Five-Star Reviews",
        body: [
          "Every softener install or heater flush can earn a review naming the job and the town. The request goes out as your van pulls away, and we draft replies and track which services your reviews mention.",
        ],
        points: [
          "Request after each visit",
          "Replies written for you",
          "Service and town mentions",
          "Review link on invoices",
        ],
        cta: "Grow My Arizona Reviews",
        ui: {
          kind: "reviews",
          sms: "Linda, thank you for having us out to Gilbert for the softener install. Would you leave us a short review?",
          reviewer: "Linda",
          review:
            "Our water finally feels soft, and the tech showed us how to look after the new system. On time and tidy.",
          reply:
            "Thanks, Linda! Glad the Gilbert install went smoothly. Call us when the first service check comes due.",
        },
      },
    ],
  },
  regions: {
    title: "Arizona Cities Where We Build Plumbing Leads",
    lead: "We plan every region on its own, with town pages and listings aimed at the repairs people there call about.",
    items: [
      {
        name: "Phoenix and the West Valley",
        cities: "Phoenix · Glendale · Peoria · Surprise",
        focus: "Round-the-clock drain and burst-pipe pages for the core metro",
      },
      {
        name: "East Valley",
        cities: "Mesa · Chandler · Gilbert · Tempe",
        focus:
          "Softener, filtration and water heater offers for newer subdivisions",
      },
      {
        name: "Scottsdale Area",
        cities: "Scottsdale · Paradise Valley · Fountain Hills",
        focus: "Re-pipe and fixture upgrade pages for larger homes",
      },
      {
        name: "Tucson and Southern Arizona",
        cities: "Tucson · Marana · Oro Valley · Sahuarita",
        focus: "Slab leak and leak detection campaigns across the metro",
      },
      {
        name: "Northern Arizona",
        cities: "Flagstaff · Prescott · Sedona",
        focus: "Frozen-pipe and winter call campaigns at higher elevation",
      },
      {
        name: "Western Arizona",
        cities: "Yuma · Lake Havasu City · Bullhead City",
        focus: "Wide service-area profiles that reach towns spread far apart",
      },
    ],
    other: "Plumbing in an Arizona town that isn't listed? We'll cover it.",
  },
  reviews: {
    title: "Owners Rate Us 5.0 on Google",
    lead: "Read what home service owners say about working with our team.",
  },
  pricing: {
    title: "Arizona Plumbing Marketing Plans",
    lead: [
      "Three plans, no long contract, and ad spend paid to Google with a 0% markup. Help with a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google profile",
      },
      " is part of the service.",
    ],
    compareTitle: "Side-by-Side Arizona Plan Comparison",
    compareLead: "From a single Valley city to coverage across the state.",
    addOnsTitle: "Add-Ons When the Phones Get Busy",
    addOnsLead:
      "Extra city pages, ad campaigns or a site refresh, added as you grow.",
    customTitle: "Branches in Phoenix and Tucson?",
    customText:
      "Send your locations and service areas, and we'll put together a custom setup.",
  },
  faq: {
    title: "Arizona Plumbing Marketing FAQ",
    lead: "Rankings, ads, licensing and contracts, answered for Arizona plumbers. Prefer to talk it through? Call us.",
    items: [
      {
        q: "How long does it take a plumber to rank in the Phoenix map pack?",
        a: "It depends on your competition and starting point. Profile fixes, photos and new reviews often move rankings within the first few months, while crowded Phoenix terms like drain cleaning take longer. A grid tracker shows your position across each city every month.",
      },
      {
        q: "Can you set up Local Services Ads for my Arizona plumbing company?",
        a: "Yes. We set up and manage Local Services Ads, walk you through Google's license and background checks, and dispute leads that don't fit. These ads appear above regular search ads, which makes them a strong fit for burst-pipe and backup calls. Your ad spend goes to Google with a 0% markup.",
      },
      {
        q: "Should my Arizona ROC license number appear on my website and profile?",
        a: "We recommend it. Showing your Registrar of Contractors number tells homeowners and Google that you're a licensed Arizona contractor. We add it to your site footer, service pages and profile description, and keep it identical across your other listings so nothing conflicts.",
      },
      {
        q: "Do you build pages for hard water, slab leaks and water softeners in Arizona?",
        a: "Yes. These are common Arizona searches, so each gets its own page naming your cities, with job photos and a booking button. Short question-and-answer blocks help too, since AI search tools often quote them.",
      },
      {
        q: "How much do your Arizona plumbing marketing plans cost?",
        a: "Arizona plans come in three tiers, $297, $750 and $1,500 per month, sized by how many cities and channels you want covered. All of them run month to month with no long contract, and ad spend is paid to Google at a 0% markup. We suggest a tier after your free audit.",
      },
      {
        q: "My Arizona plumbing profile was suspended. Can you get it back?",
        a: "Usually, yes. We've reinstated 900+ suspended Google profiles. Our team traces the trigger, fixes your address or service-area setup, files the appeal and walks you through video verification whenever Google requests it.",
      },
    ],
  },
  audit: {
    title: "Get a Free Arizona Plumbing Marketing Audit",
    lead: [
      "We check your Google Maps position in each Arizona city you serve, then review your profile, ",
      { href: "/services/web-design", label: "website" },
      " and reviews to show which drain, leak and heater searches are reaching other plumbers.",
    ],
    points: [
      "Map rankings across your Arizona cities",
      "Profile, website and review check",
      "Plans from $297/mo, cancel any month",
    ],
    form: {
      formType: "plumbing-marketing-arizona",
      badge: "Free Arizona audit",
      title: "Request Your Arizona Plumbing Audit",
      subtitle: "Free, with no obligation to sign up.",
      submitText: "Send My Arizona Audit",
      messageLabel: "Your Arizona service areas and jobs",
      messagePlaceholder: "e.g. Mesa and Gilbert, slab leaks and water heaters",
    },
  },
  banner: {
    title: "Keep Arizona's Plumbing Calls Coming to You",
    lead: "Begin with a free ranking check for the Valley, Tucson and every other Arizona town you serve.",
    icons: ["water", "sun"],
  },
};
