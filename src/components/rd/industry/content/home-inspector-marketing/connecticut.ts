import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* CONNECTICUT HOME INSPECTOR MARKETING — new live state page (5 Nov 2026).
   Brief: docs/fence-and-inspector-brief-2026-11.md. Semrush units are out;
   volumes come from reports/research/home-inspector-states-2026-11.md
   ("home inspection connecticut" 110, "home inspector connecticut" 110,
   "home inspection hartford ct" 40, "how to become a home inspector in
   ct" 110).
   Web research (5 Nov 2026):
   - Licensing: the Department of Consumer Protection (DCP) licenses home
     inspectors through its Home Inspection Licensing Board, with an
     intern permit before the full license (CGS chapter 400f,
     cga.ct.gov; portal.ct.gov/dcp).
   - Crumbling foundations: the Department of Housing's program covers
     pyrrhotite damage in Hartford, Tolland and Windham counties; core
     testing (by engineers) is the definitive check (portal.ct.gov/doh).
     The page only says inspectors can note visible signs and point to
     an engineer's core test.
   - Hartford-area inspector listings sell radon in air and water, well
     water, oil tank checks and lead testing as add-ons.
   - No Connecticut rule restricting agents from recommending inspectors
     was found, so the agent lane markets on service only (never
     referral payments). */

export const CONTENT: LocationContent = {
  draftSlug: "connecticut",
  liveUrl: "/services/home-inspector-marketing/connecticut",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Connecticut",
  meta: {
    title: "Home Inspector Marketing in Connecticut | Hartford to Stamford",
    description:
      "Connecticut home inspector marketing for Hartford, New Haven, Stamford and the Quiet Corner: Map Pack rankings, inspector SEO, AI answers and agent-ready booking.",
    keywords: [
      "home inspector marketing connecticut",
      "home inspection connecticut",
      "home inspector connecticut",
      "home inspection hartford ct",
      "home inspector seo connecticut",
      "connecticut home inspector license",
      "home inspector lead generation connecticut",
      "home inspector marketing to realtors",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.skyFuchsia,
  hero: {
    h1: "Connecticut Home Inspector Marketing Agency for Busier Weeks",
    h1NoWrap: "Busier Weeks",
    lead: [
      "Connecticut buyers ask about radon, oil tanks, wells and crumbling foundations before they book anyone. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " puts your DCP license and those answers on Google Maps, in AI recommendations and on a site agents happily share.",
    ],
    cta: "Get My Connecticut Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 from Greenwich to Putnam",
        sub: "Map Pack reach from Fairfield County to the Quiet Corner",
        chips: ["Hartford", "New Haven", "Stamford", "Danbury", "+ your town"],
      },
      left: {
        icon: "agent",
        title: "More agent-referred buyers",
        sub: "Fast slots and clean summaries agents pass on",
      },
      right: {
        icon: "drop",
        title: "Radon and well water add-ons",
        sub: "Tests buyers can tick while booking",
      },
      bottom: {
        title: "Bookings beyond the spring rush",
        sub: "Fall and winter campaigns keep the calendar moving",
      },
    },
  },
  services: {
    title: "Marketing Services for Connecticut Home Inspection Firms",
    lead: "Licensed inspectors from Fairfield County to Windham County get one team for maps, search, ads, site and reviews.",
    cta: "Audit My Connecticut Marketing",
    items: [
      {
        icon: "pin",
        title: "A Google Profile That Shows Your DCP License",
        desc: "We list your Department of Consumer Protection license, the towns you cover, radon, water and oil tank services, and new photos each week.",
        points: [
          "DCP license shown",
          "Town service areas",
          "Weekly photo posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Upgrade my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Town-by-Town SEO for Connecticut Home Inspection",
        desc: "Connecticut buyers search by town, so we build pages for the towns you serve plus radon, well water, oil tank and foundation topics.",
        points: [
          "A page for every town",
          "Add-on test pages",
          "Schema on each page",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads Timed to Connecticut Contracts",
        desc: "Search ads and Local Services Ads switch on when listings move in spring and stay lean through the slower winter weeks.",
        points: [
          "Spring push, winter trim",
          "Local Services Ads run",
          "Town-level targeting",
        ],
        links: [{ href: "/services/google-ads", label: "Run my Google Ads" }],
      },
      {
        icon: "monitor",
        title: "Booking Sites Buyers and Agents Both Use",
        desc: "Online scheduling, checkboxes for radon or water tests, an example report and a page agents can bookmark for their clients.",
        points: [
          "Self-serve scheduling",
          "Example report online",
          "Agent bookmark page",
        ],
        links: [
          { href: "/services/web-design", label: "Build my booking site" },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Mention Towns and Tests",
        desc: "Every delivered report triggers a polite review request, so new reviews name the town, the test and the inspector who did it.",
        points: [
          "Asks sent after reports",
          "Reply drafts ready",
          "Town names in reviews",
        ],
        links: [
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Check my map rank free",
          },
        ],
      },
      {
        icon: "shield",
        title: "Suspended Listing? Connecticut Profile Recovery",
        desc: "We trace why Google suspended or stalled your profile, fix the cause and handle the appeal. Track record: 900+ profiles reinstated.",
        points: [
          "Cause pinned down",
          "Listing corrected",
          "Appeal handled start to end",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Get my listing back",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help verifying my profile",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Connecticut Buyers Find an Inspector, and Where You Appear",
    lead: "Map results for the urgent search, AI answers for the careful one, and reviews that settle the choice.",
    rows: [
      {
        title: "Own the Map for “Home Inspection Hartford CT”",
        body: [
          "Buyers in West Hartford, Glastonbury and Manchester open Maps the day an offer is accepted. We set the capital-region towns you cover as service areas, publish a page for each and earn reviews that name them, so your profile holds a top-three spot.",
        ],
        points: [
          "Capital-region town pages",
          "Reviews that cite towns",
          "Radon listed as a service",
          "Grid rank reports",
        ],
        cta: "Check My Hartford Ranking",
        ui: {
          kind: "maps",
          query: "home inspection hartford ct",
          city: "West Hartford",
          category: "Home inspector · DCP licensed",
        },
      },
      {
        title: "Be the Connecticut Inspector ChatGPT and Gemini Recommend",
        body: [
          "Buyers relocating from New York ask AI assistants which Fairfield County inspector checks oil tanks and tests well water. With ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          ", your license, services and reviews read the same on every site, so ChatGPT, Gemini, Perplexity and AI Overviews can cite you.",
        ],
        points: [
          "Answer-first FAQ blocks",
          "License in schema",
          "Matching business facts",
          "Reviews naming add-ons",
        ],
        cta: "See What AI Says About Me",
        ui: {
          kind: "ai",
          query: "home inspector stamford ct oil tank and well water",
          intro:
            "For a Stamford home inspection with oil tank and well checks,",
          bullets: [
            "Connecticut-licensed inspector",
            "Oil tank and well water tests",
            "Weekend slots open",
          ],
        },
      },
      {
        title: "New Haven Reviews That Agents Notice After Every Report",
        body: [
          "Agents in New Haven, Hamden and Milford share inspectors their clients rate well. A short text goes out with each finished report, the review takes seconds to leave and we help you reply, so your profile shows a steady flow of recent, specific praise.",
        ],
        points: [
          "Review text with every report",
          "Single-tap review page",
          "Replies written with you",
          "Agents see fresh reviews",
        ],
        cta: "Grow My Connecticut Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Dana, the Hamden inspection report is in your inbox. Glad we could help, and a short Google review would mean a lot: g.page/yourcompany/review",
          reviewer: "Marcus",
          review:
            "Booked online Monday, inspected Wednesday. He flagged the old oil tank and walked us through the radon results. Our agent now sends friends to him.",
          reply:
            "Thanks, Marcus. Glad the tank notes helped, and congratulations on the new place in Hamden.",
        },
      },
    ],
  },
  audiences: {
    title: "Connecticut Inspection Work From Agents and Direct Bookings",
    lead: [
      "Connecticut inspectors earn work two ways: agents who suggest you inside the inspection window, and buyers, sellers and owners who find and book you directly. We market to both, and never through referral payments.",
    ],
    lanes: [
      {
        audience: "Agents Writing Connecticut Offers",
        icon: "agent",
        pitch:
          "Connecticut agents want an inspector who answers fast, fits the contingency deadline and writes reports their buyers understand. We make that easy to see and easy to share.",
        query: "Agent text: Glastonbury offer accepted, need Thursday",
        flow: [
          "Agent finds your page",
          "Picks an open slot",
          "Summary sent same day",
          "Agent books again",
        ],
        badge: "Agent rebooks on the next deal",
        jobs: [
          {
            name: "Buyer’s pre-purchase inspection",
            tactic: "Live booking slots and an example report for agents",
          },
          {
            name: "Condo and multifamily inspections",
            tactic: "Plain-language summaries agents can forward",
          },
          {
            name: "Radon test with the inspection",
            tactic: "A one-click add-on agents can request",
          },
        ],
      },
      {
        audience: "Connecticut Owners Booking Direct",
        icon: "home",
        pitch:
          "Sellers, owners and buyers who choose for themselves start on Google. We place you where they search, with pre-listing, upkeep and warranty pages that end in a clear booking button.",
        query: "pre listing home inspection fairfield ct",
        flow: [
          "Search on Google",
          "Read your page",
          "Pick add-on tests",
          "Booked online",
        ],
        badge: "Booked without a phone call",
        jobs: [
          {
            name: "Pre-listing inspection",
            tactic: "Seller page on avoiding surprises during negotiation",
          },
          {
            name: "Annual maintenance inspection",
            tactic: "An annual note to former clients when one is due",
          },
          {
            name: "Older-home inspection",
            tactic: "Pages on oil heat, old wiring and lead paint",
          },
        ],
      },
    ],
    addOns: {
      title: "Add-On Tests Connecticut Clients Ask For",
      items: [
        "Radon in air",
        "Radon in well water",
        "Well water testing",
        "Oil tank sweeps",
        "Lead paint screening",
        "Septic evaluation",
      ],
    },
    cta: "Plan My Connecticut Audience Mix",
  },
  regions: {
    title: "Connecticut Counties and Towns We Market In",
    lead: "Shoreline condos, Quiet Corner farmhouses and Fairfield County commuter homes need different pages, so each area gets its own.",
    items: [
      {
        name: "Hartford County",
        cities: "Hartford · West Hartford · Glastonbury · Farmington",
        focus: "Suburb pages for capital-region buyers",
      },
      {
        name: "Fairfield County",
        cities: "Stamford · Norwalk · Fairfield · Danbury",
        focus: "Oil tank and radon pages for commuter buyers",
      },
      {
        name: "New Haven County",
        cities: "New Haven · Hamden · Milford · Guilford",
        focus: "Shoreline and university-area condo inspections",
      },
      {
        name: "Tolland & Windham",
        cities: "Vernon · Tolland · Mansfield · Putnam",
        focus: "Foundation-concern pages for Quiet Corner buyers",
      },
      {
        name: "New London County",
        cities: "New London · Groton · Norwich · Stonington",
        focus: "Coastal homes and Navy relocation bookings",
      },
      {
        name: "Litchfield County",
        cities: "Torrington · New Milford · Litchfield · Winsted",
        focus: "Well, septic and older farmhouse inspection pages",
      },
    ],
    other:
      "Working in Middlesex County or the Naugatuck Valley? We’ll build those towns in too.",
  },
  reviews: {
    title: "Connecticut Inspectors, Meet Our 5.0 Google Reviews",
    lead: "Unfiltered reviews from owners who trusted us with their local marketing.",
  },
  pricing: {
    title: "Connecticut Home Inspector Marketing Plans",
    compareTitle: "Side-by-Side Plans for Connecticut Firms",
    addOnsTitle: "Extras for the Spring Listing Rush",
    customTitle: "Inspecting in several Connecticut counties?",
  },
  faq: {
    title: "Connecticut Home Inspector Marketing FAQ",
    lead: "Licensing, add-on tests, AI search, agents and pricing. Rather talk it through? Call us.",
    items: [
      {
        q: "Where should my Connecticut home inspector license appear online?",
        a: "Everywhere a buyer or agent checks you. Connecticut's Department of Consumer Protection issues home inspector licenses, and anyone can look yours up. We add the license number to your Google profile, site footer, booking page and schema, which also hands AI assistants a fact they can verify.",
      },
      {
        q: "Should I market radon in water testing to Connecticut buyers?",
        a: "If you offer it, yes. Many Connecticut homes draw from private wells, and buyers in well towns often ask about radon in water as well as in air. A page explaining both tests, how samples are taken and when results arrive lets them add the tests while booking.",
      },
      {
        q: "Can I rank for “home inspection Connecticut” across the whole state?",
        a: "Statewide terms are hard because Google ranks map results by distance. We target the towns your inspectors actually drive to, then support the broader term with a strong state page, consistent listings and reviews. That mix usually wins more calls than chasing one phrase.",
      },
      {
        q: "How should I talk about crumbling foundations on my website?",
        a: "Carefully and helpfully. Buyers in parts of Hartford, Tolland and Windham counties worry about pyrrhotite in concrete. Explain what your visual inspection can note, what it cannot confirm, and when an engineer's core test is the right next step. Honest pages build trust and keep your claims accurate.",
      },
      {
        q: "How do I market to Connecticut real estate agents the right way?",
        a: "Earn the recommendation with service, not payments. Agents want quick scheduling, reports their buyers grasp and an inspector who stays calm about findings. We build an agent page, an example report, a booking link and a short monthly email, then collect reviews from agents and buyers alike.",
      },
      {
        q: "Does AI search matter for Connecticut home inspectors?",
        a: "More each year. Buyers moving in from New York or Boston ask ChatGPT, Gemini and Perplexity to shortlist inspectors before they ever open Maps. Those tools lean on consistent listings, detailed reviews and clear FAQ answers, so we tighten all three and track where you get named.",
      },
      {
        q: "What do Connecticut home inspector marketing plans cost?",
        a: "Plans run $297, $950 or $1,500 a month with no long contract. Ad spend is paid straight to Google with a 0% markup from us. Inspectors covering one county often begin on the smallest plan and add towns, ads or AI work as the bookings climb.",
      },
    ],
  },
  audit: {
    title: "Get a Free Audit of Your Connecticut Inspection Marketing",
    lead: [
      "We check your Map Pack position town by town, grade your Google profile, site and reviews, and show where agents and buyers find a competitor first. Inspect across the border too? See our pages for ",
      {
        href: "/services/home-inspector-marketing/massachusetts",
        label: "Massachusetts",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/new-york",
        label: "New York",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/new-jersey",
        label: "New Jersey",
      },
      ".",
    ],
    points: [
      "Every town you serve, ranked",
      "Agent and owner channels reviewed",
      "Month-to-month plans from $297",
    ],
    form: {
      formType: "home-inspector-marketing-connecticut",
      badge: "Free Connecticut audit",
      title: "Request My Connecticut Inspector Audit",
      subtitle: "Free, quick and yours to keep.",
      submitText: "Send My Connecticut Audit",
      messageLabel: "Your Connecticut towns and add-on tests",
      messagePlaceholder:
        "e.g. Hartford suburbs, radon in air and water, oil tank sweeps",
    },
  },
  banner: {
    title: "Be the Inspector Connecticut Agents and Buyers Call First",
    lead: "First, get a free look at where you rank in each town you inspect.",
    icons: ["inspect", "agent"],
  },
};
