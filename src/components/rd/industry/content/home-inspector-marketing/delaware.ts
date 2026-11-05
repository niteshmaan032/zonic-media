import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* DELAWARE HOME INSPECTOR MARKETING — new live state page (5 Nov 2026).
   Brief: docs/fence-and-inspector-brief-2026-11.md. Semrush units are out;
   volumes come from reports/research/home-inspector-states-2026-11.md
   ("home inspection delaware" 110, "home inspector delaware" 70, "home
   inspection wilmington de" 70, "delaware home inspector license" 140).
   Web research (5 Nov 2026):
   - Licensing: the Board of Home Inspectors, part of the Division of
     Professional Regulation, licenses home inspectors and trainees
     (dpr.delaware.gov/boards/homeinspector).
   - Agent referrals: the Board's code of ethics (24 DE Admin Code
     4100-17.0, regulations.justia.com excerpt) bars inspectors from paying
     real estate agents for referrals. The agent lane markets on service
     only.
   - Septic: DNREC rules require a Class H septic inspection by a licensed
     Class H inspector when a property with a septic system is transferred
     (dnrec.delaware.gov; Delaware Administrative Code via
     regulations.justia.com). The page hedges with
     "most" and "if you hold the Class H license".
   - Growth: Sussex County is Delaware's fastest-growing county, driven by
     retirees and new homes (census.gov QuickFacts, spotlightdelaware.org).
   - Termite: Delaware sits in a moderate-to-heavy termite zone; WDI
     reports are often done by licensed pest firms, so the add-on is
     listed without claiming who may do it. */

export const CONTENT: LocationContent = {
  draftSlug: "delaware",
  liveUrl: "/services/home-inspector-marketing/delaware",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Delaware",
  meta: {
    title: "Home Inspector Marketing in Delaware | Wilmington to Lewes",
    description:
      "Delaware home inspector marketing for New Castle, Kent and Sussex counties: Map Pack rankings, inspector SEO, new-construction and septic pages, AI answers.",
    keywords: [
      "home inspector marketing delaware",
      "home inspection delaware",
      "home inspector delaware",
      "home inspection wilmington de",
      "delaware home inspector license",
      "home inspector seo delaware",
      "new construction inspection sussex county",
      "home inspector lead generation delaware",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.violetLime,
  hero: {
    h1: "Delaware Home Inspector Marketing Agency, Wilmington to the Beach",
    h1NoWrap: "to the Beach",
    lead: [
      "Delaware is small, yet buyers in New Castle, Kent and Sussex search in very different ways. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "Delaware home inspector marketing",
      },
      " gets your licensed firm onto the map, into AI answers and in front of agents, from Newark townhomes to new builds near Lewes.",
    ],
    cta: "Get My Delaware Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack in all three counties",
        sub: "New Castle, Kent and Sussex, each with its own plan",
        chips: ["Wilmington", "Dover", "Lewes", "Middletown", "+ your town"],
      },
      left: {
        icon: "construction",
        title: "More new-build inspections",
        sub: "Phase checks for Sussex County buyers",
      },
      right: {
        icon: "handshake",
        title: "Agents who rebook you",
        sub: "Quick slots and summaries they can forward",
      },
      bottom: {
        title: "A steady calendar all year",
        sub: "Beach-season and winter campaigns planned apart",
      },
    },
  },
  services: {
    title: "Delaware Home Inspection Marketing, One Team for Every Channel",
    lead: "From the Brandywine Valley to the beaches, one crew handles your profile, pages, ads, site and reviews.",
    cta: "Audit My Delaware Marketing",
    items: [
      {
        icon: "pin",
        title: "Delaware Google Profiles Built Around Your License",
        desc: "Your Board of Home Inspectors license, county service areas, septic and termite services and fresh job photos, set up so Maps trusts you.",
        points: [
          "License number listed",
          "Service areas by county",
          "Fresh inspection photos weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Refresh my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO for New Castle, Kent and Sussex",
        desc: "Separate pages for each county and its busiest towns, plus new-construction, septic, well water and termite pages Delaware buyers search for.",
        points: [
          "Town and county pages",
          "New-build phase pages",
          "FAQ schema added",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home services",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Delaware Buyers Under Contract",
        desc: "Search ads and Local Services Ads focused on the week after an accepted offer, with beach-town campaigns kept apart from Wilmington ones.",
        points: [
          "Contract-week keywords",
          "Local Services Ads",
          "Beach and city split",
        ],
        links: [{ href: "/services/google-ads", label: "Set up my ads" }],
      },
      {
        icon: "monitor",
        title: "A Booking Site for Delaware Buyers on the Move",
        desc: "Phone-first scheduling, septic, well and termite checkboxes and an example report, so out-of-state buyers can book from wherever they live.",
        points: [
          "Book from any state",
          "Septic and well options",
          "Example report to browse",
        ],
        links: [
          { href: "/services/web-design", label: "Design my booking site" },
        ],
      },
      {
        icon: "star",
        title: "Agent Pages and Reviews Delaware Realtors Notice",
        desc: "A shareable agent page for buyers, plus automatic review requests after each report, so your newest reviews mention Delaware towns.",
        points: [
          "Shareable agent page",
          "Review asks after reports",
          "Replies written for you",
        ],
        links: [{ href: "/services", label: "See all our services" }],
      },
      {
        icon: "shield",
        title: "Delaware Listing Suspended? We Restore It",
        desc: "When Google suspends your profile or won't verify it, we pin down why, correct it and file the appeal, with 900+ reinstatements behind the team.",
        points: [
          "Reason identified",
          "Fixes documented",
          "Appeal run to the end",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify my business",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Three Places Delaware Buyers Choose an Inspector",
    lead: "The map for quick decisions, AI assistants for out-of-state movers, and a site that books the job itself.",
    rows: [
      {
        title: "Rank for “Home Inspection Wilmington DE” on Google Maps",
        body: [
          "Wilmington, Newark and Hockessin buyers choose from the first three map results. We tune your profile to New Castle County, publish pages for its key towns and earn reviews mentioning them, so you keep that place as competitors come and go.",
        ],
        points: [
          "New Castle town pages",
          "Reviews mentioning towns",
          "Termite and septic listed",
          "Weekly rank grid",
        ],
        cta: "See My Wilmington Ranking",
        ui: {
          kind: "maps",
          query: "home inspection wilmington de",
          city: "Wilmington",
          category: "Home inspector · Delaware licensed",
        },
      },
      {
        title: "Get Named When Movers Ask AI About Sussex County Inspectors",
        body: [
          "Retirees moving to Lewes, Milton and Millsboro often ask ChatGPT or Perplexity for an inspector before they visit. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " give every listing the same facts, add answer-first FAQs on new-build and septic checks, and gather reviews that Gemini and AI Overviews can quote.",
        ],
        points: [
          "New-build FAQ answers",
          "Septic and well facts",
          "Consistent listings",
          "Quotable reviews",
        ],
        cta: "Check My AI Visibility",
        ui: {
          kind: "ai",
          query: "best home inspector for new construction in lewes delaware",
          intro: "For a new-construction inspection near Lewes,",
          bullets: [
            "Pre-drywall and final checks",
            "Licensed in Delaware",
            "Septic and well add-ons",
          ],
        },
      },
      {
        title:
          "A Booking Website That Sells Delaware Septic and Termite Checks",
        body: [
          "Rural Kent and Sussex sales often involve a septic system, a private well or termite worries. We build a site where buyers book the inspection, tick the extra checks they need and see what each covers, so one visit replaces three phone calls.",
        ],
        points: [
          "Septic and well choices",
          "Termite report add-on",
          "Instant confirmations",
          "Agent copied on bookings",
        ],
        cta: "Plan My Delaware Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/sussex-county",
          headline: "Sussex County home inspections and new-build checks",
          services: [
            "Home inspection",
            "New-construction phases",
            "Septic inspection",
            "Termite report",
          ],
        },
      },
    ],
  },
  audiences: {
    title: "Who Books Delaware Inspections: Agents and Homeowners",
    lead: [
      "Delaware's code of ethics for inspectors rules out paying agents for referrals, so we win agent trust with service they can see. Homeowners who book direct get pages built around their exact job.",
    ],
    lanes: [
      {
        audience: "Delaware Listing and Buyer Agents",
        icon: "handshake",
        pitch:
          "Agents across Delaware protect tight inspection deadlines. Show them open slots, a clear example report and quick turnaround, and they keep your name on their short list.",
        query: "Agent: new build in Millsboro, final walk-through Friday",
        flow: [
          "Opens agent page",
          "Books a time",
          "Gets the summary",
          "Sends next client",
        ],
        badge: "Back on the agent's short list",
        jobs: [
          {
            name: "Buyer inspection under contract",
            tactic: "Live calendar and a two-minute booking form",
          },
          {
            name: "New-construction final walk",
            tactic: "Punch-list style findings agents and builders follow",
          },
          {
            name: "Re-inspection after repairs",
            tactic: "Fast rebook link sent with every report",
          },
        ],
      },
      {
        audience: "Delaware Homeowners and Sellers",
        icon: "home",
        pitch:
          "Owners booking for themselves search by job: pre-listing, pre-drywall, 11-month warranty or septic. We build a page for each, so the right search lands on the right offer.",
        query: "11 month warranty inspection millsboro de",
        flow: [
          "Searches the job",
          "Lands on its page",
          "Adds septic or well",
          "Confirms online",
        ],
        badge: "Booked straight from search",
        jobs: [
          {
            name: "Pre-drywall phase inspection",
            tactic: "Pages targeting Sussex County new-build searches",
          },
          {
            name: "11-month builder warranty check",
            tactic: "Ads timed to the warranty deadline",
          },
          {
            name: "Pre-listing inspection for sellers",
            tactic: "Seller guide listing agents can hand out",
          },
        ],
      },
    ],
    addOns: {
      title: "Delaware Add-Ons Both Audiences Order",
      items: [
        "Class H septic inspection",
        "Termite / WDI report",
        "Well water testing",
        "Radon testing",
        "Sewer scope",
        "Mold sampling",
      ],
    },
    cta: "Map Out My Delaware Audiences",
  },
  regions: {
    title: "Delaware Counties and Towns We Cover",
    lead: "Three counties, three markets: city resale up north, military and state jobs in the middle, retirees and new builds at the shore.",
    items: [
      {
        name: "Northern New Castle",
        cities: "Wilmington · Newark · Hockessin · Pike Creek",
        focus: "Older-home resale and university-area rentals",
      },
      {
        name: "Southern New Castle",
        cities: "Middletown · Townsend · Bear · Odessa",
        focus: "Subdivision growth and new-construction checks",
      },
      {
        name: "Kent County",
        cities: "Dover · Smyrna · Camden · Milford",
        focus: "Military moves near Dover Air Force Base",
      },
      {
        name: "Cape Region",
        cities: "Lewes · Rehoboth Beach · Milton · Millsboro",
        focus: "Retiree buyers and new-build phase inspections",
      },
      {
        name: "Quiet Resorts",
        cities: "Bethany Beach · Ocean View · Selbyville · Fenwick Island",
        focus: "Second-home and coastal property pages",
      },
      {
        name: "Western Sussex",
        cities: "Seaford · Georgetown · Laurel · Bridgeville",
        focus: "Well, septic and rural property inspections",
      },
    ],
    other:
      "Inspecting on the Eastern Shore or in southeastern Pennsylvania too? We can include it.",
  },
  reviews: {
    title: "Delaware Inspectors Can Read Our 5.0 Reviews First",
    lead: "Real Google reviews from service business owners who hired us.",
  },
  pricing: {
    title: "Plans for Delaware Inspection Firms, Month to Month",
    compareTitle: "Inspector Plans for the First State, Compared",
    addOnsTitle: "Extras for Beach-Season Demand",
    customTitle: "Covering all three Delaware counties?",
  },
  faq: {
    title: "Delaware Inspector Marketing Questions",
    lead: "Licensing, septic, new builds, agents, AI and pricing. Want to talk instead? Call anytime.",
    items: [
      {
        q: "How should I show my Delaware home inspector license?",
        a: "Prominently. Delaware's Board of Home Inspectors, part of the Division of Professional Regulation, licenses inspectors and trainees. We put your license number on your Google profile, booking page, site footer and schema, so buyers, agents and AI tools can confirm you in seconds.",
      },
      {
        q: "Can I pay Delaware agents for referrals to grow faster?",
        a: "No, and we never suggest it. Under the Board's code of ethics, an inspector may not pay agents for referrals. Instead we earn agent loyalty with live scheduling, example reports, quick turnaround and reviews from agents and buyers, which keeps you compliant and still fills the calendar.",
      },
      {
        q: "Should Delaware inspectors market Class H septic inspections?",
        a: "If you hold the Class H license, yes. DNREC requires a septic inspection before most Delaware properties with a septic system change hands, and rural Kent and Sussex buyers search for it. A dedicated page and a booking add-on capture those jobs alongside the home inspection.",
      },
      {
        q: "How do I win new-construction inspections in Sussex County?",
        a: "Target the phases buyers search for: pre-drywall, final walk-through and 11-month warranty checks. Sussex County leads Delaware's growth, so we build a page for each phase, run ads around active communities and ask new-build clients for reviews naming their town.",
      },
      {
        q: "Can my firm rank for “home inspection Delaware” statewide?",
        a: "Partly. Map results favor nearby businesses, so a Wilmington office rarely ranks in Rehoboth on its own. We target the towns you truly serve, build county pages and add a strong statewide page, which together capture more searches than one broad phrase can.",
      },
      {
        q: "Is AI search worth it for a Delaware home inspection company?",
        a: "Yes, especially at the shore. Many buyers relocating to Sussex County research from another state and ask ChatGPT, Gemini or Perplexity for local inspectors. Clear answers on your site, matching listings and specific reviews make you the name those assistants give.",
      },
      {
        q: "What does home inspector marketing in Delaware cost?",
        a: "Monthly plans are $297, $950 or $1,500, and none needs a long contract. Any Google Ads budget is billed by Google itself, at a 0% markup on our side. Firms in a single county tend to start with the first tier and grow into the others.",
      },
    ],
  },
  audit: {
    title: "Free Delaware Inspection Marketing Review",
    lead: [
      "We check where you rank in each Delaware county, grade your profile, site and reviews, and list the searches going to rivals. Inspecting across state lines? We also cover ",
      {
        href: "/services/home-inspector-marketing/maryland",
        label: "Maryland",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/pennsylvania",
        label: "Pennsylvania",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/new-jersey",
        label: "New Jersey",
      },
      ".",
    ],
    points: [
      "Each Delaware county checked",
      "Agent and direct channels scored",
      "No contract, plans from $297",
    ],
    form: {
      formType: "home-inspector-marketing-delaware",
      badge: "Free Delaware audit",
      title: "Get My Free Delaware Inspector Audit",
      subtitle: "Takes a minute, costs nothing.",
      submitText: "Send My Delaware Audit",
      messageLabel: "Your Delaware counties and add-ons",
      messagePlaceholder: "e.g. Sussex County, new-build phases and septic",
    },
  },
  banner: {
    title: "Make Delaware Buyers and Agents Choose You First",
    lead: "Begin with a no-cost look at where you rank in all three counties.",
    icons: ["inspect", "construction"],
  },
};
