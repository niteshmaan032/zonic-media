import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* MAINE HOME INSPECTOR MARKETING — live state page (5 Nov 2026).
   Keywords: Semrush units are out, so terms come from
   reports/research/home-inspector-states-2026-11.md (home inspection maine
   50, maine home inspector license 140) plus web research.
   Web research (5 Nov 2026), facts used on the page:
   - Licensing: Maine has no state home inspector license. The 129th
     Legislature's Resolve ch. 61 (LD 671) only ordered a sunrise review
     (legislature.maine.gov), so the page says "check current state rules".
   - Radon: the Radon Registration Act (22 MRSA ch. 165) requires anyone
     testing radon in air or water for clients, home inspectors included,
     to register with the Maine CDC Radiation Control Program (maine.gov).
   - Wells: Maine CDC tells buyers of homes on private wells to test the
     water before purchase, incl. arsenic and radon (maine.gov).
   - Shoreland septic: 30-A MRSA §4216 — buyers of shoreland property with
     a septic system must have it inspected by a state-certified inspector
     before purchase (legislature.maine.gov).
   - No Maine rule found that restricts agents from recommending
     inspectors; agent lane stays compliant (no referral payments).
   Fresh wording only; audiences section per the Nov 2026 brief. */

export const CONTENT: LocationContent = {
  draftSlug: "maine",
  liveUrl: "/services/home-inspector-marketing/maine",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Maine",
  meta: {
    title: "Home Inspector Marketing in Maine | Portland, Bangor & Radon",
    description:
      "Maine home inspector marketing for Portland, Lewiston, Bangor and the coast: Map Pack rankings, SEO, AI answers, agent pages and radon and well test bookings.",
    keywords: [
      "home inspector marketing maine",
      "home inspection maine",
      "home inspector portland maine",
      "home inspection bangor maine",
      "home inspector lewiston auburn",
      "radon testing maine",
      "well water testing maine home sale",
      "maine home inspector license",
      "home inspector seo maine",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.emeraldSky,
  hero: {
    h1: "Maine Home Inspector Marketing Agency for Radon and Well Tests",
    h1NoWrap: "Well Tests",
    lead: [
      "Maine buyers want more than a walk-through: radon in the air and the well, the septic and the oil tank. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "marketing for home inspectors",
      },
      " puts you first on the map from York County to Bangor, in AI answers and on a site that books every test.",
    ],
    cta: "Get My Maine Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack spots from Kittery to Bangor",
        sub: "Ranked town by town along the coast and inland",
        chips: ["Portland", "Lewiston", "Bangor", "Brunswick", "+ your town"],
      },
      left: {
        icon: "water",
        title: "More well water tests",
        sub: "Booked online right beside the inspection",
      },
      right: {
        icon: "agent",
        title: "Agents calling you first",
        sub: "Quick slots and summaries their buyers can follow",
      },
      bottom: {
        title: "Bookings straight through mud season",
        sub: "Campaigns timed to spring listings and fall closings",
      },
    },
  },
  services: {
    title: "How We Market Maine Home Inspection Businesses",
    lead: "Your Google listing, town pages, ads, reviews and agent outreach, handled by one team that knows how Maine houses change hands.",
    cta: "Audit My Maine Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles That Show Your Radon Registration",
        desc: "We list the towns you cover, your Maine CDC radon registration, well and septic services and recent photos, so Maps shows a complete, trusted inspector.",
        points: [
          "Radon registration shown",
          "Town service areas",
          "Well and septic listed",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Optimize my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Maine Home Inspector SEO, Town by Town",
        desc: "Pages for Portland, Scarborough, Lewiston and Bangor, plus radon, well water and shoreland septic pages that answer what Maine buyers type.",
        points: [
          "Town and county pages",
          "Radon and well pages",
          "Shoreland septic page",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for home service pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Spring Listings and Fall Closings",
        desc: "Search ads and Local Services Ads tuned to Maine's busy listing months, aimed at buyers under contract in the counties you actually drive to.",
        points: [
          "Under-contract keywords",
          "Local Services Ads run",
          "Drive-time targeting",
        ],
        links: [{ href: "/services/google-ads", label: "Start my Maine ads" }],
      },
      {
        icon: "monitor",
        title: "A Booking Site Where Buyers Add Every Test",
        desc: "Clients pick a time, tick radon, well water or septic, open a sample report and get confirmed on the spot, all from a phone.",
        points: [
          "Add-on checkboxes",
          "Sample report link",
          "Confirmed on the spot",
        ],
        links: [
          { href: "/services/web-design", label: "Build my booking site" },
        ],
      },
      {
        icon: "star",
        title: "Repeat Agent Calls From Reviews and an Agent Page",
        desc: "A page for agents with your openings, turnaround and a sample summary, plus review requests after each report so buyers and agents praise you by name.",
        points: ["Agent info page", "Review requests", "Replies you approve"],
        links: [{ href: "/services", label: "See all our services" }],
      },
      {
        icon: "shield",
        title: "Maine Profile Suspended? We Reinstate It",
        desc: "A suspended or stuck profile hides you from every Maine buyer. We find the cause, fix the listing and file the appeal, with 900+ profiles reinstated so far.",
        points: ["Cause identified", "Listing corrected", "Appeal tracked"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my Google profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get verified on Google",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Maine Buyers Find Inspectors and Where We Put You",
    lead: "Found on the map in each town, quoted by AI assistants and booked through a site that sells radon and well tests.",
    rows: [
      {
        title: "Rank for “Home Inspector Portland Maine” and Its Suburbs",
        body: [
          "Buyers in South Portland, Westbrook and Scarborough search the city name even when the house sits next door. Those towns go into your service area, each one earns its own page, and reviews from clients there mention them by name, so you appear in every nearby Map Pack.",
        ],
        points: [
          "Suburb service areas",
          "A page per town",
          "Reviews naming towns",
          "Weekly rank checks",
        ],
        cta: "Check My Portland Ranking",
        ui: {
          kind: "maps",
          query: "home inspector portland maine",
          city: "Portland",
          category: "Home inspector · Radon registered",
        },
      },
      {
        title: "Get Named When Buyers Ask AI About Radon in Maine",
        body: [
          "People moving to Maine ask ChatGPT, Gemini and Perplexity who tests radon in air and water. With ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization for inspectors",
          },
          ", those tools find matching facts, clear test pages and detailed reviews to quote, so yours is the business they suggest.",
        ],
        points: [
          "Radon FAQs in schema",
          "Matching listings",
          "Reviews naming tests",
          "Answer-first test pages",
        ],
        cta: "Check My AI Visibility",
        ui: {
          kind: "ai",
          query: "who tests radon in well water near bangor maine",
          intro: "For radon in air and well water near Bangor,",
          bullets: [
            "Registered radon tester",
            "Well and septic checks",
            "Clear written reports",
          ],
        },
      },
      {
        title: "Sell Well, Radon and Septic Tests at Checkout",
        body: [
          "Rural Maine buyers often need several tests on top of the inspection. A booking page lists each one with a plain explanation, shows open slots and confirms instantly, so add-ons get ordered upfront instead of remembered a week before closing.",
        ],
        points: [
          "Plain test explainers",
          "Live time slots",
          "Phone-first design",
          "Sample report preview",
        ],
        cta: "Plan My Maine Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/maine",
          headline: "Maine home inspections, radon and water tests",
          services: [
            "Home inspection",
            "Radon in air",
            "Well water test",
            "Septic inspection",
          ],
        },
      },
    ],
  },
  audiences: {
    title: "Maine Agents and Owners: Two Ways Your Calendar Fills",
    lead: [
      "Most Maine inspections start with a buyer's agent, yet sellers, owners and buyers searching alone book direct too. We reach buyers, sellers and agents with separate pages, searches and follow-ups, never with referral payments.",
    ],
    lanes: [
      {
        audience: "Agents With Maine Buyers",
        icon: "agent",
        pitch:
          "Agents need an inspector who fits the contract deadline, explains radon and water results calmly and sends a summary they can forward. We make you that first call.",
        query: "Agent request: inspection plus radon, Scarborough, Thursday",
        flow: [
          "Agent visits page",
          "Picks open slot",
          "Adds water test",
          "Summary sent",
        ],
        badge: "Agent-ready summary",
        jobs: [
          {
            name: "Pre-purchase inspection",
            tactic: "Online booking that fits the inspection deadline",
          },
          {
            name: "Radon in air and water",
            tactic: "A page that shows your state radon registration",
          },
          {
            name: "Repair re-inspection",
            tactic: "A one-tap rebook link inside every report",
          },
        ],
      },
      {
        audience: "Maine Owners Booking Direct",
        icon: "home",
        pitch:
          "Sellers prepping a listing, owners of older farmhouses and buyers shopping alone search Google first. We get you ranking for those searches and keep booking fast.",
        query: "pre listing home inspection maine",
        flow: [
          "Searches Google",
          "Reads your page",
          "Books a time",
          "Inspection confirmed",
        ],
        badge: "Booked without a referral",
        jobs: [
          {
            name: "Pre-listing inspection",
            tactic: "A seller page on fixing issues before showings",
          },
          {
            name: "New-build phase checks",
            tactic: "Pre-drywall and final walk-through pages",
          },
          {
            name: "11-month warranty inspection",
            tactic: "Reminders for owners nearing the builder deadline",
          },
        ],
      },
    ],
    addOns: {
      title: "Tests Maine Buyers and Sellers Add",
      items: [
        "Air radon test",
        "Well water radon",
        "Arsenic and well panel",
        "Shoreland septic inspection",
        "Oil tank check",
        "Lead paint screening",
      ],
    },
    cta: "Plan My Agent and Owner Marketing",
  },
  regions: {
    title: "Maine Regions and Towns Where We Grow Your Bookings",
    lead: "Coastal suburbs, mill cities and rural counties each get pages and ads matched to how buyers there search.",
    items: [
      {
        name: "Greater Portland",
        cities: "Portland · South Portland · Westbrook · Scarborough",
        focus: "Agent-led resale buyers and suburban town searches",
      },
      {
        name: "York County",
        cities: "Biddeford · Saco · Kennebunk · York",
        focus: "Coastal homes and border-town buyer searches",
      },
      {
        name: "Androscoggin",
        cities: "Lewiston · Auburn · Lisbon · Turner",
        focus: "Older multifamily homes and first-time buyers",
      },
      {
        name: "Midcoast",
        cities: "Brunswick · Bath · Rockland · Camden",
        focus: "Seasonal and waterfront homes with septic questions",
      },
      {
        name: "Kennebec Valley",
        cities: "Augusta · Waterville · Gardiner · Winslow",
        focus: "Capital-area buyers and rural well properties",
      },
      {
        name: "Bangor Region",
        cities: "Bangor · Brewer · Orono · Hampden",
        focus: "Campus-area buyers and farmhouse inspections",
      },
    ],
    other:
      "Working in Aroostook County, Ellsworth or the western mountains? Ask us about those towns.",
  },
  reviews: {
    title: "A 5.0 Google Rating Maine Inspectors Can Verify",
    lead: "See what owners across the trades say about working with our team.",
  },
  pricing: {
    title: "Home Inspector Lead Generation Plans for Maine",
    compareTitle: "Side-by-Side Plans for Maine Inspectors",
    addOnsTitle: "Extras for Maine's Spring Rush",
    customTitle: "Inspecting across several Maine counties?",
  },
  faq: {
    title: "Maine Home Inspector Marketing Questions, Answered",
    lead: "Radon registration, licensing, agent outreach, AI and pricing. A quick phone call works too.",
    items: [
      {
        q: "Does Maine license home inspectors?",
        a: "Not at the state level, as far as we can verify. Lawmakers have studied a license, but Maine doesn't issue one today, so check current state rules. Without it, buyers judge you on certifications, insurance, reviews and your radon registration, so we make those easy to find everywhere you're listed.",
      },
      {
        q: "Do I need to register before marketing radon testing in Maine?",
        a: "Yes. Maine's Radon Registration Act requires anyone who tests radon for clients, in air or water, to register with the Maine CDC radon program. Once you're registered, we show it on your Google profile, radon pages and booking form, where agents and buyers expect to see it.",
      },
      {
        q: "How do I win more inspections from Maine real estate agents?",
        a: "Be the easiest inspector to book and the clearest to read. Agents get a page of their own showing open slots, a sample summary and the towns you cover, plus short email updates; their reviews go on your profile. We never pay or reward agents for referrals; trust and speed do the work.",
      },
      {
        q: "Can you market shoreland septic inspections for me?",
        a: "If you hold the state certification, yes. Maine law has buyers of shoreland property with a septic system get it inspected by a state-certified inspector before purchase. We build a page for lake and coastal buyers that explains the rule and lets them book it alongside the home inspection.",
      },
      {
        q: "Which Maine towns should my pages target first?",
        a: "Start where you already inspect most and buyers search hardest, usually Portland's suburbs, Lewiston-Auburn or the Bangor area. We check which town searches you nearly rank for, build those pages first, then widen to the coast or rural counties as reviews build.",
      },
      {
        q: "Will AI search send Maine buyers my way?",
        a: "It already shapes shortlists. People relocating to Maine ask ChatGPT, Gemini and Google's AI Overviews which inspectors test radon and well water. Those tools lean on consistent listings, clear service pages and reviews that name the tests, the same work that lifts your Map Pack rank.",
      },
      {
        q: "What does home inspector marketing cost in Maine?",
        a: "Three plans, $297, $950 or $1,500 a month, all month to month with no contract. Any ad budget is paid straight to Google with a 0% markup from us. Single-county inspectors often start small and add towns or ads once the calendar fills.",
      },
    ],
  },
  audit: {
    title: "Your Free Maine Home Inspector Audit",
    lead: [
      "We check your Map Pack rank in each Maine town you serve, your Google profile, website, reviews and how your radon and water tests appear. Also inspecting next door? See our ",
      {
        href: "/services/home-inspector-marketing/new-hampshire",
        label: "New Hampshire inspector marketing",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/massachusetts",
        label: "Massachusetts",
      },
      " pages.",
    ],
    points: [
      "Every town you serve, ranked",
      "Radon and well pages reviewed",
      "Month to month, from $297/mo",
    ],
    form: {
      formType: "home-inspector-marketing-maine",
      badge: "Free Maine audit",
      title: "Request My Maine Inspector Audit",
      subtitle: "Takes a minute, costs nothing.",
      submitText: "Send My Maine Audit",
      messageLabel: "Towns you cover and tests you offer",
      messagePlaceholder:
        "e.g. Portland and York County, radon in air and water",
    },
  },
  banner: {
    title: "Fill Your Maine Calendar Before Spring Listings Hit",
    lead: "See where you rank in each Maine town, free.",
    icons: ["inspect", "water"],
  },
};
