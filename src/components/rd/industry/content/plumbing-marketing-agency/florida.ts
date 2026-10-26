import { PALETTES } from "../../palettes";
import type { LocationContent } from "../../types";

/* Florida plumbing marketing — location redesign draft (24 Oct 2026).
   Research: Semrush US (Oct 2026) — the live URL ranks for "plumbing
   digital marketing agency tampa" (pos 33, vol 70), so the title carries
   "Plumbing Digital Marketing Agency" + "Tampa" and keeps "Marketing
   Agency in Florida". City demand used: plumber miami 1,600 · drain
   cleaning orlando 1,600 · plumber orlando 1,300 · plumber st petersburg
   1,300 · plumber tampa 1,000 · sewer backup cleanup 1,000 · plumber
   jacksonville 880 · water heater repair tampa 590 · emergency plumber
   miami 480 · leak detection miami 320 · repipe orlando 140 · plomero
   miami 90. Web research: hurricane season, Spanish in South Florida,
   four-point inspections flagging older piping, DBPR/CILB licensing. */

export const CONTENT: LocationContent = {
  draftSlug: "florida-2",
  liveUrl: "/services/plumbing-marketing-agency/florida",
  parent: {
    href: "/services/plumbing-marketing-agency",
    label: "Plumbing Marketing Agency",
    niche: "Plumbing",
  },
  place: "Florida",
  meta: {
    title: "Plumbing Digital Marketing Agency in Florida | Tampa to Miami",
    description:
      "Plumbing digital marketing for Florida plumbers in Tampa, Miami, Orlando and Jacksonville: Map Pack rankings, Spanish pages, storm-season ads and reviews.",
    keywords: [
      "plumbing digital marketing agency tampa",
      "plumbing marketing agency florida",
      "plumbing services in florida",
      "plumbing companies orlando florida",
      "plumber miami",
      "drain cleaning orlando",
      "emergency plumber miami",
      "water heater repair tampa",
    ],
  },
  palette: PALETTES.coralTeal,
  hero: {
    h1: "Florida Plumbing Digital Marketing Agency for Leaks and Clogs",
    lead: [
      "From a slab leak in Tampa to a sewer backup in Miami after a downpour, Florida homeowners reach for Google first. Our ",
      {
        href: "/services/plumbing-marketing-agency",
        label: "plumbing marketing services",
      },
      " put your company in those results statewide, with Map Pack rankings, Spanish pages for South Florida and storm-ready ads.",
    ],
    cta: "Get My Florida Plumbing Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on Maps, Tampa to Miami",
        sub: "Map Pack spots for leaks, clogs and hot-water problems statewide",
        chips: ["Miami", "Tampa", "Orlando", "Jacksonville", "St. Petersburg"],
      },
      left: {
        icon: "call",
        title: "More after-storm calls",
        sub: "Backup and water damage searches routed to your phone",
      },
      right: {
        icon: "translate",
        title: "Bilingual in South Florida",
        sub: "Pages, posts and review texts in Spanish where it matters",
      },
      bottom: {
        title: "Re-pipe work from older homes",
        sub: "Pages for polybutylene and cast iron replacement jobs",
      },
    },
  },
  services: {
    title: "Florida Plumbing Marketing Services, Coast to Coast",
    lead: "One crew runs Florida plumbing marketing, Panhandle to the Keys.",
    cta: "Audit My Florida Plumbing Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Visibility in Florida's Big Metros",
        desc: "Profile categories, service areas and your state plumbing license number, refined so you climb into the first three results in Miami, Tampa and Orlando.",
        points: [
          "License number listed",
          "Storm-hours updates",
          "Service areas by county",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Maps profile management",
          },
        ],
      },
      {
        icon: "search",
        title: "Plumber SEO for Florida Cities and Counties",
        desc: "Search pages for drain cleaning in Orlando, leak detection in Miami and water heaters in Tampa, plus Spanish versions for South Florida.",
        points: [
          "City and county pages",
          "Spanish page versions",
          "Re-pipe and sewer topics",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-plumber",
            label: "Plumber search optimization",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home services",
          },
        ],
      },
      {
        icon: "target",
        title: "Search Ads and LSAs Ready for Storm Season",
        desc: "Google Ads and Local Services Ads that scale up when storms bring backups and leaks, with every call logged against the job it booked.",
        points: [
          "Storm-season campaign plans",
          "Local Services Ads managed",
          "Calls logged by source",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for plumbers" },
        ],
      },
      {
        icon: "monitor",
        title: "Florida Plumbing Websites That Get the Call",
        desc: "Phone-first sites with tap-to-call, online booking and service pages for re-pipes, sewer lines and water heaters, in English and Spanish.",
        points: [
          "Tap-to-call everywhere",
          "Bilingual service pages",
          "Booking and quote forms",
        ],
        links: [
          {
            href: "/services/plumbing-website-design",
            label: "Plumbing web design",
          },
          { href: "/services/web-design", label: "Website design" },
        ],
      },
      {
        icon: "star",
        title: "Fresh Reviews From Florida Homeowners",
        desc: "After every job, customers get a short text, in their preferred language, asking for a Google review. Replies arrive drafted for your approval.",
        points: [
          "Text after each job",
          "Spanish request option",
          "Replies ready to approve",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI search visibility" },
        ],
      },
      {
        icon: "shield",
        title: "Florida Profile Suspensions and Verification",
        desc: "Virtual offices, moves and mismatched addresses get listings flagged. We find the problem, file the appeal and have reinstated 900+ Google profiles.",
        points: [
          "Address issues fixed",
          "Appeals written for you",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Get reinstated",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify your profile",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Three Ways We Bring Florida Plumbers More Work",
    lead: "Win the map, show up in AI answers and know exactly which calls turned into jobs.",
    rows: [
      {
        title: "Own the Orlando Map Pack for Drain Cleaning",
        body: [
          "Drain cleaning is one of Orlando's biggest plumbing searches, and those customers want someone today. We sharpen your profile, add job photos and earn steady reviews so you keep a top-three spot across Orange and Seminole counties.",
        ],
        points: [
          "Drain and sewer services listed",
          "County-wide service area",
          "Before-and-after photos",
          "Posts every week",
        ],
        cta: "See My Orlando Ranking",
        ui: {
          kind: "maps",
          query: "drain cleaning orlando",
          city: "Orlando",
          category: "Plumbing service · Open now",
        },
      },
      {
        title: "Become Miami's AI-Recommended Plumber",
        body: [
          "Ask Gemini or ChatGPT for an emergency plumber in Miami and you get a short list. We build the signals those answers rely on: matching listings, detailed service pages, Spanish content and reviews naming the neighborhood. More in our ",
          { href: "/services/ai-seo-services", label: "AI SEO program" },
          ".",
        ],
        points: [
          "Matching business listings",
          "Detailed service pages",
          "Spanish-language content",
          "Neighborhood review mentions",
        ],
        cta: "Test My AI Presence",
        ui: {
          kind: "ai",
          query: "emergency plumber miami",
          intro: "For emergency plumbing in Miami, day or night,",
          bullets: [
            "Se habla español",
            "State-certified plumbers",
            "Leak detection and repair",
          ],
        },
      },
      {
        title: "See Which Storm-Season Calls Turn Into Jobs",
        body: [
          "When summer storms roll over Tampa Bay, calls for backups, leaks and water heaters can land all at once. We tag each call by source and service, so you see which ads, listings and pages filled the schedule and which to pause.",
        ],
        points: [
          "Calls tagged by source",
          "Service noted on each call",
          "Missed-call alerts",
          "Monthly booked-job report",
        ],
        cta: "Track My Florida Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Tampa Bay",
          calls: [
            {
              service: "Sewer backup, Clearwater",
              source: "Local Services Ads",
              when: "7:42 am",
            },
            {
              service: "Slab leak, Brandon",
              source: "Google Maps",
              when: "10:15 am",
            },
            {
              service: "Water heater, St. Petersburg",
              source: "Website",
              when: "1:30 pm",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Florida Plumbing Territories We Cover",
    lead: "Every part of Florida gets its own city pages, service areas and campaigns, shaped around the jobs locals phone about.",
    items: [
      {
        name: "South Florida",
        cities: "Miami · Fort Lauderdale · Hialeah · Hollywood",
        focus: "Spanish pages and late-night emergency campaigns",
      },
      {
        name: "Palm Beach and Treasure Coast",
        cities: "West Palm Beach · Boca Raton · Port St. Lucie",
        focus:
          "Water heater upgrade and re-pipe pages for established neighborhoods",
      },
      {
        name: "Tampa Bay",
        cities: "Tampa · St. Petersburg · Clearwater · Brandon",
        focus: "Storm backup and leak detection ads around the bay",
      },
      {
        name: "Central Florida",
        cities: "Orlando · Kissimmee · Sanford · Lakeland",
        focus: "Drain cleaning pages and service areas for new subdivisions",
      },
      {
        name: "Northeast Florida",
        cities: "Jacksonville · St. Augustine · Orange Park",
        focus: "Cast iron drain and sewer line replacement pages",
      },
      {
        name: "Southwest Gulf Coast",
        cities: "Sarasota · Fort Myers · Naples · Cape Coral",
        focus: "Post-storm repair pages and outreach to seasonal residents",
      },
    ],
    other: "Working in the Panhandle or a town not shown here? We cover it.",
  },
  reviews: {
    title: "Read Our Google Reviews Before You Call",
    lead: "Home service owners share how working with us has gone.",
  },
  pricing: {
    title: "Plumbing Marketing Plans for Florida Companies",
    lead: [
      "Three monthly tiers starting at $297, no long-term contract, and a 0% markup on ad spend. If your listing is ",
      { href: "/services/gbp-reinstatement-service", label: "suspended" },
      ", we help with that as well.",
    ],
    compareTitle: "Which Florida Plan Fits?",
    compareLead: "From one county to every metro you serve.",
    addOnsTitle: "Add-Ons for Hurricane Season",
    addOnsLead:
      "Extra storm campaigns, city pages or Spanish content when demand picks up.",
    customTitle: "Trucks in Tampa, Orlando and Miami?",
    customText: "Tell us each branch and service area for a custom proposal.",
  },
  faq: {
    title: "Florida Plumbing Marketing, Answered",
    lead: "Storm season, Spanish, licensing and plans for Florida plumbing companies. Need more detail? Call our team.",
    items: [
      {
        q: "How do you market a Florida plumbing company before hurricane season?",
        a: "We get storm pages, emergency ad campaigns and your Google profile hours ready before the season opens in June. After a storm passes, we switch on backup, leak and water damage campaigns for the affected counties, then scale them back as calls settle, so ad spend follows real demand.",
      },
      {
        q: "Do you build Spanish plumbing pages for Miami and South Florida?",
        a: "Yes. Many South Florida homeowners search in Spanish, so we write Spanish service pages, profile posts and review texts for Miami-Dade and Broward, and run Spanish ad groups where they make sense. Each page is written for the market rather than run through a translator.",
      },
      {
        q: "Where should my Florida plumbing license number appear online?",
        a: "On your website footer, service pages, Google profile and ads. Florida law asks contractors to include their certified or registered license number in advertising, and many homeowners look it up before calling. We keep the number identical everywhere, so your listings never contradict each other.",
      },
      {
        q: "Can you bring my plumbing company more Florida re-pipe and four-point inspection jobs?",
        a: "Yes. Older Florida homes often need plumbing updates before an insurer will renew coverage, so we build pages for re-piping, polybutylene replacement and cast iron drain repair, then target those searches city by city. This planned work helps balance out the emergency calls.",
      },
      {
        q: "Do you work with plumbers in Jacksonville, Fort Myers and the Panhandle?",
        a: "Yes. Beyond Miami, Tampa and Orlando, we build city pages and service areas for Jacksonville, Fort Myers, Cape Coral, Sarasota, Pensacola and Tallahassee. Smaller towns are covered through county pages and service-area settings, so you appear wherever your trucks go.",
      },
      {
        q: "What are your plumbing marketing plan prices in Florida?",
        a: "Foundation is $297 a month, Growth is $750 and Authority is $1,500. Each one runs month to month without a long contract, and Google ad spend passes through at a 0% markup. Your free audit shows which tier suits your Florida service area.",
      },
    ],
  },
  audit: {
    title: "Book a Free Florida Plumbing Marketing Review",
    lead: [
      "We map your Google ranking in each Florida city and county you serve, check your profile, ",
      { href: "/services/web-design", label: "website" },
      " and reviews, and show where leak, drain and storm calls are landing with competitors.",
    ],
    points: [
      "City-by-city ranking map",
      "Spanish search check for South Florida",
      "No contract, plans starting at $297/mo",
    ],
    form: {
      formType: "plumbing-marketing-florida",
      badge: "Free Florida review",
      title: "Get Your Florida Plumbing Review",
      subtitle: "Free, with no strings attached.",
      submitText: "Send My Florida Review",
      messageLabel: "Your Florida counties and services",
      messagePlaceholder:
        "e.g. Hillsborough and Pinellas, sewer lines and re-pipes",
    },
  },
  banner: {
    title: "Be the First Plumber Florida Calls After the Storm",
    lead: "See where you rank in every Florida city you serve, with a free review from our team.",
    icons: ["storm", "plumbing"],
  },
};
