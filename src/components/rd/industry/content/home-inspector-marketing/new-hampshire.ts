import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* NEW HAMPSHIRE HOME INSPECTOR MARKETING — live state page (5 Nov 2026).
   Keywords: Semrush units are out, so terms come from
   reports/research/home-inspector-states-2026-11.md (home inspection
   nashua nh 90, home inspection nh 70, home inspector manchester nh 30,
   nh home inspector license 20) plus web research.
   Web research (5 Nov 2026), facts used on the page:
   - Licensing: anyone doing paid home inspections needs a license from
     the Board of Home Inspectors at the Office of Professional Licensure
     and Certification (RSA 310-A:182–201; oplc.nh.gov).
   - Wells: NHDES says nearly half of residents use a private well and
     urges buyers to test before purchase; radon and arsenic are the main
     natural contaminants (des.nh.gov, dhhs.nh.gov). No figure on page.
   - Waterfront septic: RSA 485-A:39 as amended (effective 1 Sep 2024) —
     before a developed waterfront property on septic transfers, the buyer
     must hire a licensed septic system evaluator (gencourt.state.nh.us).
   - No New Hampshire rule found that restricts agents from recommending
     inspectors; agent lane stays compliant (no referral payments).
   Fresh wording only; audiences section per the Nov 2026 brief. */

export const CONTENT: LocationContent = {
  draftSlug: "new-hampshire",
  liveUrl: "/services/home-inspector-marketing/new-hampshire",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "New Hampshire",
  meta: {
    title: "Home Inspector Marketing in New Hampshire | Nashua & Seacoast",
    description:
      "New Hampshire home inspector marketing for Manchester, Nashua, Concord and the Seacoast: Map Pack rankings, SEO, AI answers, agent outreach and well and radon bookings.",
    keywords: [
      "home inspector marketing new hampshire",
      "home inspection nh",
      "home inspection nashua nh",
      "home inspector manchester nh",
      "home inspection concord nh",
      "home inspection portsmouth nh",
      "nh home inspector license",
      "well water testing nh",
      "radon testing nh",
      "home inspector seo nh",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.slateRose,
  hero: {
    h1: "New Hampshire Home Inspector Marketing for Agents and Owners",
    h1NoWrap: "Agents and Owners",
    lead: [
      "Licensed New Hampshire inspectors sell to two crowds: agents with buyers under contract and owners booking on their own. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector SEO and marketing",
      },
      " wins both with Map Pack rankings, AI recommendations and a site that books well water and radon tests.",
    ],
    cta: "Get My New Hampshire Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack from Nashua to the Seacoast",
        sub: "Town pages for every corner you inspect",
        chips: ["Manchester", "Nashua", "Concord", "Portsmouth", "+ your town"],
      },
      left: {
        icon: "water",
        title: "More well water bookings",
        sub: "Radon and arsenic tests added at checkout",
      },
      right: {
        icon: "agent",
        title: "Agents on repeat",
        sub: "Fast slots and summaries they forward",
      },
      bottom: {
        title: "Lakes Region buyers covered",
        sub: "Waterfront and second-home pages that rank",
      },
    },
  },
  services: {
    title: "Our Marketing Work for New Hampshire Home Inspectors",
    lead: "Maps, search pages, ads, reviews and outreach to agents, all planned around New Hampshire's town-by-town market.",
    cta: "Audit My NH Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles Showing Your NH License",
        desc: "We list your OPLC license, the towns you serve, well water, radon and septic services and real job photos, so Google sees a trusted inspector.",
        points: [
          "OPLC license listed",
          "Towns served set",
          "Water tests shown",
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
        title: "Home Inspection SEO for Manchester, Nashua and Concord",
        desc: "Pages for each city and nearby towns like Bedford and Hudson, plus well water, radon and waterfront septic pages for NH buyers.",
        points: [
          "City and town pages",
          "Well and radon pages",
          "Waterfront septic page",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local search for home pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads Split by New Hampshire Region",
        desc: "Separate campaigns for the southern tier, the Seacoast and the Lakes Region, reaching buyers right after an accepted offer, with Local Services Ads managed.",
        points: ["Region-by-region ads", "Offer-stage keywords", "LSA managed"],
        links: [
          { href: "/services/google-ads", label: "Start my ad campaigns" },
        ],
      },
      {
        icon: "monitor",
        title: "A Site Where Buyers Add Water and Radon Tests",
        desc: "A fast booking page with test explainers, open time slots and a sample report, built for buyers on their phones.",
        points: ["Test explainers", "Live calendar", "Sample report link"],
        links: [{ href: "/services/web-design", label: "Design my new site" }],
      },
      {
        icon: "star",
        title: "Review Requests and an Agent Resource Page",
        desc: "Automatic review requests after each report, plus a page agents can share listing your availability, service towns and report format.",
        points: [
          "Automatic requests",
          "Shareable agent page",
          "Replies drafted",
        ],
        links: [{ href: "/services", label: "All our services" }],
      },
      {
        icon: "shield",
        title: "Suspended NH Profile? Get It Back",
        desc: "We pin down what got your listing suspended or stalled, fix it and file the appeal. 900+ profiles reinstated to date.",
        points: ["Root cause found", "Profile corrected", "Appeal filed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify my listing",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How New Hampshire Buyers Find Inspectors, and How You Get Found",
    lead: "Maps for each town, AI recommendations and a booking site that sells water and radon tests.",
    rows: [
      {
        title: "Rank for “Home Inspection Nashua NH” and Next-Door Towns",
        body: [
          "Buyers in Hudson, Merrimack and Amherst often type Nashua into the search bar. Those towns are added to your coverage, each gets a page, and clients there are asked for reviews, so your listing shows up across the southern tier.",
        ],
        points: [
          "Southern tier coverage",
          "Page per town",
          "Location-rich reviews",
          "Weekly map tracking",
        ],
        cta: "See My Nashua Ranking",
        ui: {
          kind: "maps",
          query: "home inspection nashua nh",
          city: "Nashua",
          category: "Home inspector · NH licensed",
        },
      },
      {
        title: "Be the Inspector AI Names for Well Water Questions",
        body: [
          "Buyers moving to New Hampshire ask ChatGPT and Gemini who can test a private well for radon and arsenic. With ",
          { href: "/services/ai-seo-services", label: "AI SEO for inspectors" },
          ", your pages answer that plainly and your listings and reviews agree, giving assistants clear grounds to recommend you.",
        ],
        points: [
          "Water test FAQs",
          "License in schema markup",
          "Listings that agree",
          "Reviews naming tests",
        ],
        cta: "Test My AI Recommendations",
        ui: {
          kind: "ai",
          query: "home inspector near concord nh who tests well water",
          intro: "For a home inspection with well water testing near Concord,",
          bullets: [
            "State-licensed inspector",
            "Radon and arsenic tests",
            "Covers Bow and Hopkinton",
          ],
        },
      },
      {
        title: "Book the Inspection and Water Panel in One Visit",
        body: [
          "Plenty of New Hampshire homes run on private wells, so buyers need a water test as well as the inspection. A booking page that explains each test, shows open times and confirms on the spot gets both ordered together.",
        ],
        points: [
          "Water panel options",
          "Radon in air and water",
          "Instant confirmations",
          "Phone-friendly pages",
        ],
        cta: "Plan My NH Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/new-hampshire",
          headline: "NH home inspections and well water testing",
          services: [
            "Home inspection",
            "Well water panel",
            "Radon test",
            "Septic evaluation",
          ],
        },
      },
    ],
  },
  audiences: {
    title: "Granite State Agents and Owners: Who We Market You To",
    lead: [
      "New Hampshire inspections come from buyers, sellers and agents. One lane targets agents who refer buyers, the other targets owners who book direct, and both run on speed, reviews and clear reports, never referral fees.",
    ],
    lanes: [
      {
        audience: "NH Buyer's Agents",
        icon: "agent",
        pitch:
          "Agents want an inspector who handles wells, septic and radon in one visit and delivers a readable summary before the contract deadline. We show them that you do.",
        query: "Agent: need inspection + well test in Bedford next week",
        flow: [
          "Agent views page",
          "Selects a slot",
          "Well test added",
          "Summary sent",
        ],
        badge: "On time for the deadline",
        jobs: [
          {
            name: "Buyer inspection under contract",
            tactic: "A shareable calendar for agents",
          },
          {
            name: "Well water and radon testing",
            tactic: "Plain-English results agents can forward",
          },
          {
            name: "Waterfront septic evaluation",
            tactic: "Lakes Region page, if you hold the license",
          },
        ],
      },
      {
        audience: "Homeowners and Sellers Booking Direct",
        icon: "sold",
        pitch:
          "People preparing to sell, owners of older colonials and buyers working without an agent start on Google. We rank your pages for their questions and keep booking simple.",
        query: "pre listing home inspection manchester nh",
        flow: ["Google search", "Opens your site", "Picks a time", "All set"],
        badge: "Booked direct online",
        jobs: [
          {
            name: "Pre-listing inspection",
            tactic: "Seller page on clearing repairs before showings",
          },
          {
            name: "Annual home maintenance check",
            tactic: "Yearly reminders for past clients",
          },
          {
            name: "New-build phase inspections",
            tactic: "Pages for each construction stage",
          },
        ],
      },
    ],
    addOns: {
      title: "Tests New Hampshire Buyers Add",
      items: [
        "Radon in the air",
        "Radon and arsenic in wells",
        "Full well water panel",
        "Waterfront septic evaluation",
        "Oil tank review",
        "Lead paint test",
        "Chimney check",
      ],
    },
    cta: "Plan My NH Audience Marketing",
  },
  regions: {
    title: "New Hampshire Regions We Help You Reach",
    lead: "From the southern tier to the North Country, each region gets its own pages, ads and review push.",
    items: [
      {
        name: "Southern Tier",
        cities: "Nashua · Hudson · Salem · Londonderry",
        focus: "Border-town buyers and fast agent bookings",
      },
      {
        name: "Greater Manchester",
        cities: "Manchester · Bedford · Goffstown · Hooksett",
        focus: "Older city homes and suburban resales",
      },
      {
        name: "Capital Area",
        cities: "Concord · Bow · Hopkinton · Pembroke",
        focus: "Private wells and rural-edge properties",
      },
      {
        name: "Seacoast",
        cities: "Portsmouth · Dover · Exeter · Hampton",
        focus: "Historic homes and coastal moisture questions",
      },
      {
        name: "Lakes Region",
        cities: "Laconia · Meredith · Wolfeboro · Gilford",
        focus: "Waterfront septic and second-home buyers",
      },
      {
        name: "Monadnock & Upper Valley",
        cities: "Keene · Peterborough · Lebanon · Hanover",
        focus: "Rural acreage with wells and septic",
      },
    ],
    other:
      "Inspecting around Conway, Littleton or Plymouth? We'll build those towns into your plan.",
  },
  reviews: {
    title: "New Hampshire Owners: Read Our 5.0 Google Reviews",
    lead: "See how owners across the trades describe working with us.",
  },
  pricing: {
    title: "New Hampshire Home Inspector Lead Generation Plans",
    compareTitle: "Plans for NH Inspectors, Compared",
    addOnsTitle: "Extras for New Hampshire Listing Season",
    customTitle: "Covering the Seacoast and the Lakes?",
  },
  faq: {
    title: "New Hampshire Inspector Marketing Questions",
    lead: "Licensing, wells, waterfront septic, agents and cost. Need to talk it through? Ring us.",
    items: [
      {
        q: "Do New Hampshire home inspectors need a state license?",
        a: "Yes. New Hampshire requires anyone doing paid home inspections to hold a license from the Board of Home Inspectors, which sits within the Office of Professional Licensure and Certification. We add your license number to your Google profile, website and schema, since buyers and agents increasingly check it.",
      },
      {
        q: "Should I market well water testing in New Hampshire?",
        a: "Yes. Many New Hampshire homes rely on private wells, and state health and environmental agencies urge buyers to test well water before purchase, including for radon and arsenic. A clear water-testing page, linked from your profile and booking form, turns that advice into add-on bookings.",
      },
      {
        q: "What changed with waterfront septic rules, and can I market it?",
        a: "Since September 2024, buyers of developed waterfront property on septic must hire a licensed septic system evaluator before the transfer. Hold that license? Then a Lakes Region page explains the rule and lets buyers book it with the inspection. Check current state rules for details.",
      },
      {
        q: "How do I get more NH agents recommending me?",
        a: "Give them less to worry about. Agents get a page showing open slots, sample summaries and the towns you cover, plus concise email updates and steady LinkedIn posts, and their reviews go on your profile. Gifts or payments for referrals are never part of the plan; reliability is.",
      },
      {
        q: "Can one inspector rank in Manchester, Nashua and Concord?",
        a: "Yes, as long as all three fall within the area you actually cover. Because distance counts, each city gets its own page, service-area entry and reviews from clients there. We start with the city where you're closest to the top three, then build outward.",
      },
      {
        q: "Is AI search important for New Hampshire inspectors?",
        a: "It matters more each year. Relocating buyers ask ChatGPT, Gemini and AI Overviews for inspectors who test wells and radon. Assistants lean toward licensed firms whose listings agree and whose reviews name the tests, and those same signals help your Google Maps ranking.",
      },
      {
        q: "What do our plans cost New Hampshire inspectors?",
        a: "We offer $297, $950 and $1,500 monthly plans with no long contract. Google bills any ad spend to you, with a 0% markup from us. Single-region inspectors often start with one plan, then add the Seacoast or Lakes Region when bookings climb.",
      },
    ],
  },
  audit: {
    title: "Free New Hampshire Home Inspector Marketing Audit",
    lead: [
      "See your position in every New Hampshire town you serve, plus notes on your Google profile, site, reviews and water and radon pages. Crossing the border for jobs? We cover ",
      { href: "/services/home-inspector-marketing/maine", label: "Maine" },
      " and ",
      {
        href: "/services/home-inspector-marketing/massachusetts",
        label: "Massachusetts",
      },
      " inspectors too.",
    ],
    points: [
      "Every town you cover, ranked",
      "License and water tests reviewed",
      "No long contract, from $297/mo",
    ],
    form: {
      formType: "home-inspector-marketing-new-hampshire",
      badge: "Free NH audit",
      title: "Request My Free NH Inspector Audit",
      subtitle: "Two minutes now, a clear plan later.",
      submitText: "Send My NH Audit",
      messageLabel: "Your NH towns and test services",
      messagePlaceholder: "e.g. Nashua and the Seacoast, radon and well water",
    },
  },
  banner: {
    title: "Turn Your NH License Into a Fuller Calendar",
    lead: "See where you rank across New Hampshire with a free audit.",
    icons: ["inspect", "water"],
  },
};
