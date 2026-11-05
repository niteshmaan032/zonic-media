import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* MISSISSIPPI HOME INSPECTOR MARKETING — live state page (5 Nov 2026).
   Keywords: Semrush units are out, so terms come from
   reports/research/home-inspector-states-2026-11.md (mississippi home
   inspector license 110, home inspection mississippi 40, home inspection
   gulfport ms 20, home inspector jackson ms 10) plus web research.
   Web research (5 Nov 2026), facts used on the page:
   - Licensing: Mississippi licenses home inspectors (Miss. Code ch. 73-60).
     SB 2788 (2024) moved the program from the Real Estate Commission to
     the Mississippi Real Estate Appraisal Board, with the Home Inspector
     Regulatory Board as its adjunct board; the MHID license law is dated
     1 July 2024 (mhid.ms.gov, legiscan.com).
   - Termites: WDI reports in real estate deals must be written on the
     official Bureau of Plant Industry form by a licensee (Miss. Admin.
     Code 2-1-3-11-01-117, law.cornell.edu / mdac.ms.gov).
   - Yazoo clay: highly expansive clay under parts of Hinds, Madison and
     Rankin counties damages foundations (ASCE papers, mdeq.ms.gov).
   - No Mississippi rule found that restricts agents from recommending
     inspectors; agent lane stays compliant (no referral payments).
   Fresh wording only; audiences section per the Nov 2026 brief. */

export const CONTENT: LocationContent = {
  draftSlug: "mississippi",
  liveUrl: "/services/home-inspector-marketing/mississippi",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Mississippi",
  meta: {
    title: "Home Inspector Marketing in Mississippi | Jackson to the Coast",
    description:
      "Mississippi home inspector marketing for Jackson, DeSoto County, Hattiesburg and the Gulf Coast: Map Pack rankings, SEO, AI answers, agent outreach and WDI bookings.",
    keywords: [
      "home inspector marketing mississippi",
      "home inspection mississippi",
      "home inspector jackson ms",
      "home inspection gulfport ms",
      "home inspector southaven ms",
      "home inspection hattiesburg ms",
      "termite inspection mississippi",
      "mississippi home inspector license",
      "home inspector seo mississippi",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.blueFuchsia,
  hero: {
    h1: "Mississippi Home Inspector Marketing, Southaven to Biloxi",
    h1NoWrap: "Southaven to Biloxi",
    lead: [
      "From DeSoto County subdivisions to Gulf Coast cottages, Mississippi buyers and their agents choose inspectors quickly. With our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspection marketing services",
      },
      ", your license, termite reports and reviews lead the map, get cited by AI assistants and feed a site that takes bookings around the clock.",
    ],
    cta: "Get My Mississippi Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack wins in every metro you serve",
        sub: "Jackson, the Coast, the Pine Belt and DeSoto",
        chips: [
          "Jackson",
          "Gulfport",
          "Southaven",
          "Hattiesburg",
          "+ your town",
        ],
      },
      left: {
        icon: "bug",
        title: "More WDI termite reports",
        sub: "Sold with the inspection, not as an afterthought",
      },
      right: {
        icon: "handshake",
        title: "Agents who book you again",
        sub: "Clear summaries that keep closings on track",
      },
      bottom: {
        title: "A full calendar beyond spring",
        sub: "Off-season pushes for relocations and new builds",
      },
    },
  },
  services: {
    title: "What We Handle for Mississippi Inspection Companies",
    lead: "Your Google profile, metro pages, ads and reviews, plus outreach to agents, run by a team that understands Mississippi closings.",
    cta: "Audit My Mississippi Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles With Your Mississippi License Number",
        desc: "We add your state license, the counties you cover, WDI and mold services and fresh job photos, so Google trusts the profile and ranks it higher.",
        points: [
          "License number listed",
          "County coverage set",
          "Termite service shown",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Improve my Maps listing",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO for Jackson, the Coast and DeSoto",
        desc: "City pages for Madison, Brandon, Gulfport, Ocean Springs and Olive Branch, plus termite, mold and foundation pages written for Mississippi buyers.",
        points: [
          "Metro and suburb pages",
          "Termite and mold pages",
          "Clay-soil foundation page",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for local service firms",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads and Local Services Ads by Metro",
        desc: "A separate campaign for each metro, reaching buyers the week their offer is accepted, with Local Services Ads leads screened before they reach you.",
        points: [
          "Campaign per metro",
          "Accepted-offer keywords",
          "LSA leads screened",
        ],
        links: [
          { href: "/services/google-ads", label: "Set up my ad campaigns" },
        ],
      },
      {
        icon: "monitor",
        title: "Websites That Book Inspections and Termite Reports",
        desc: "Mobile pages where buyers choose a slot, add a WDI report or mold sampling and open a sample report before they ever call.",
        points: [
          "Add-ons at booking",
          "Sample report preview",
          "Mobile-first layout",
        ],
        links: [
          { href: "/services/web-design", label: "Design my inspection site" },
        ],
      },
      {
        icon: "star",
        title: "Reviews From Buyers and Agents, Requested for You",
        desc: "Each delivered report triggers a review request to the buyer and a thank-you note to the agent, and we draft replies for you to approve.",
        points: [
          "Buyer review texts",
          "Agent thank-you notes",
          "Drafted replies",
        ],
        links: [{ href: "/services", label: "View every service" }],
      },
      {
        icon: "shield",
        title: "Suspended Profile? Mississippi Reinstatement Help",
        desc: "If Google suspends your listing or won't verify it, we trace the cause, correct the profile and handle the appeal. More than 900 profiles reinstated.",
        points: ["Cause traced", "Profile corrected", "Appeal handled"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help me verify",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Mississippi Buyers Choose an Inspector, and Where You Show Up",
    lead: "In the Map Pack, in AI answers and in the reviews agents read before they recommend anyone.",
    rows: [
      {
        title: "Lead the Map Pack for “Home Inspector Jackson MS”",
        body: [
          "Buyers in Madison, Ridgeland and Brandon still type the Jackson name. We add those suburbs to your service area, write a page for every one and gather reviews that mention them, so the profile shows up metro-wide rather than only near your office.",
        ],
        points: [
          "Suburbs as service areas",
          "Page per suburb",
          "Reviews that name towns",
          "Rank tracked weekly",
        ],
        cta: "See My Jackson Ranking",
        ui: {
          kind: "maps",
          query: "home inspector jackson ms",
          city: "Jackson",
          category: "Home inspector · MS licensed",
        },
      },
      {
        title: "Be the Inspector AI Suggests on the Gulf Coast",
        body: [
          "Buyers relocating to Gulfport, Biloxi and Ocean Springs ask ChatGPT and Gemini which inspectors check for termites and storm damage. With ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          ", your listings, pages and reviews give the same plain facts, so assistants have solid reasons to name you.",
        ],
        points: [
          "License in schema",
          "Termite and storm FAQs",
          "Consistent listings",
          "Reviews naming services",
        ],
        cta: "Check My AI Answers",
        ui: {
          kind: "ai",
          query: "best home inspector gulfport ms termite report",
          intro: "For a home inspection with a termite report in Gulfport,",
          bullets: [
            "State-licensed inspector",
            "WDI reports available",
            "Covers Biloxi and Long Beach",
          ],
        },
      },
      {
        title: "Turn Each Closing Into a Review Agents Read",
        body: [
          "Agents check reviews before they hand a buyer your name. After every report, the buyer gets a short review link by text and the agent gets a thank-you, so your profile keeps filling with recent, specific praise.",
        ],
        points: [
          "Text review links",
          "Agent thank-yous",
          "Replies drafted for you",
          "Review growth tracked",
        ],
        cta: "Grow My Reviews",
        ui: {
          kind: "reviews",
          title: "Post-inspection review request",
          sentNote: "Sent when the report went out",
          sms: "Thanks for trusting us with the Brandon home, Kayla. Would you share a quick review?",
          reviewer: "Kayla",
          review:
            "Thorough inspection, termite report included, and the summary made our repair request easy. Our agent loved it.",
          reply: "Thank you, Kayla! Enjoy the new house in Brandon.",
        },
      },
    ],
  },
  audiences: {
    title: "Buyers, Sellers and Agents Across Mississippi: How We Reach Each",
    lead: [
      "Agents steer most buyer inspections in Mississippi, while sellers and owners often book on their own. We give each group dedicated pages, ads and follow-ups, and nobody is ever paid or rewarded for a referral.",
    ],
    lanes: [
      {
        audience: "Mississippi Listing and Buyer Agents",
        icon: "handshake",
        pitch:
          "Agents want a licensed inspector who books inside the inspection period, brings the termite report along and sends a calm summary. We put that promise everywhere they look.",
        query: "Agent text: need inspection and WDI in Madison this week",
        flow: [
          "Agent finds profile",
          "Books online",
          "Adds WDI report",
          "Report delivered",
        ],
        badge: "Closing stays on schedule",
        jobs: [
          {
            name: "Buyer's home inspection",
            tactic: "Live calendar link agents can share",
          },
          {
            name: "WDI termite report",
            tactic: "Bundled at booking, done under the proper license",
          },
          {
            name: "Repair verification visit",
            tactic: "Rebook button in each emailed report",
          },
        ],
      },
      {
        audience: "Mississippi Owners Who Book on Their Own",
        icon: "home",
        pitch:
          "Sellers fixing problems before they list, new-build owners and buyers without an agent go to Google by themselves. We rank you in each metro where they search.",
        query: "pre listing inspection hattiesburg ms",
        flow: ["Google search", "Visits your page", "Chooses a slot", "Booked"],
        badge: "Direct booking, no referral needed",
        jobs: [
          {
            name: "Pre-listing inspection",
            tactic: "Seller page about catching issues before buyers do",
          },
          {
            name: "Foundation and moisture check",
            tactic: "Clay-soil page for Jackson-area owners",
          },
          {
            name: "Annual maintenance inspection",
            tactic: "A once-a-year check-in with past clients",
          },
        ],
      },
    ],
    addOns: {
      title: "Add-Ons Mississippi Clients Ask For",
      items: [
        "WDI termite report",
        "Mold air sampling",
        "Foundation elevation survey",
        "Sewer camera scope",
        "Well water test",
        "Pool and spa check",
      ],
    },
    cta: "Plan My Mississippi Audience Marketing",
  },
  regions: {
    title: "Mississippi Metros and Towns We Cover",
    lead: "Each area gets its own pages, ad settings and review push, based on who buys homes there.",
    items: [
      {
        name: "Jackson Metro",
        cities: "Jackson · Madison · Ridgeland · Brandon",
        focus: "Clay-soil foundation questions and agent-led buyers",
      },
      {
        name: "DeSoto County",
        cities: "Southaven · Olive Branch · Hernando · Horn Lake",
        focus: "Suburban buyers searching across the Memphis line",
      },
      {
        name: "Gulf Coast",
        cities: "Gulfport · Biloxi · Ocean Springs · Long Beach",
        focus: "Storm-season roof and moisture questions",
      },
      {
        name: "Pine Belt",
        cities: "Hattiesburg · Petal · Laurel · Purvis",
        focus: "Campus-area homes and first-time buyer searches",
      },
      {
        name: "North Mississippi",
        cities: "Tupelo · Oxford · Starkville · Columbus",
        focus: "College-town rentals and family moves",
      },
      {
        name: "Central & River Towns",
        cities: "Meridian · Vicksburg · Natchez · Clinton",
        focus: "Older homes and historic-district inspections",
      },
    ],
    other:
      "Inspecting in Greenville, McComb or Picayune? We'll add those towns to your plan.",
  },
  reviews: {
    title: "Our 5.0 Google Rating, Open for Mississippi Owners to Check",
    lead: "Read reviews from owners in many trades before you pick up the phone.",
  },
  pricing: {
    title: "Mississippi Home Inspector Lead Generation Plans",
    compareTitle: "Compare Plans for Mississippi Inspectors",
    addOnsTitle: "Extras When Mississippi Closings Peak",
    customTitle: "Covering several Mississippi metros?",
  },
  faq: {
    title: "Mississippi Home Inspector Marketing FAQ",
    lead: "Licensing, termite reports, agents, AI and cost. Prefer answers by phone? Give us a call.",
    items: [
      {
        q: "Who licenses home inspectors in Mississippi now?",
        a: "Mississippi requires a state home inspector license. The Home Inspector Regulatory Board oversees it, and since 2024 the program has run under the Mississippi Real Estate Appraisal Board rather than the Real Estate Commission. Check current state rules for details. We show your license number on your profile, site and schema.",
      },
      {
        q: "Can I sell termite reports with my inspections in Mississippi?",
        a: "Only under the right license. Mississippi requires wood-destroying insect reports in real estate deals to be written on the official Bureau of Plant Industry form by a licensee. If you hold that license, or partner with someone who does, we add the WDI report to your booking flow and pages.",
      },
      {
        q: "How should I market to Mississippi real estate agents?",
        a: "Make yourself easy to recommend. Agents get a page with your open slots and a sample summary, short monthly emails and LinkedIn updates, and we collect their reviews. We never offer agents payments or gifts for referrals; fast, clear work is what earns repeat calls.",
      },
      {
        q: "Should Jackson-area inspectors talk about Yazoo clay?",
        a: "Yes, in plain terms. The Yazoo clay under parts of Hinds, Madison and Rankin counties shrinks and swells, and buyers worry about foundations. A page explaining what you check and when you suggest a structural engineer ranks for those questions and builds trust before the call.",
      },
      {
        q: "Can one inspector rank in both Southaven and Olive Branch?",
        a: "Yes, if both sit inside the area you really serve. Each town is listed as a service area, gets its own page with local details and earns reviews from clients there. DeSoto County buyers often search by town name, so separate pages matter.",
      },
      {
        q: "Does AI search matter for a Mississippi home inspector?",
        a: "It is becoming one of your channels. Buyers moving in from other states now let ChatGPT, Gemini or AI Overviews draw up a shortlist, and those tools favor licensed businesses with matching listings and reviews that name real services. Our AI work builds on the same signals that lift your Map Pack position.",
      },
      {
        q: "What will home inspector marketing cost me in Mississippi?",
        a: "Our plans are $297, $950 or $1,500 a month, month to month with no contract. Ad spend goes to Google directly at a 0% markup. Most single-metro inspectors begin with one plan and add a second metro or ads as bookings grow.",
      },
    ],
  },
  audit: {
    title: "Free Mississippi Home Inspector Marketing Audit",
    lead: [
      "Find out how you rank in each Mississippi metro, with notes on your Business Profile, website, review count and termite and mold pages. Also working in a neighboring state? Our team serves inspectors in ",
      {
        href: "/services/home-inspector-marketing/louisiana",
        label: "Louisiana",
      },
      ", ",
      { href: "/services/home-inspector-marketing/alabama", label: "Alabama" },
      " and ",
      {
        href: "/services/home-inspector-marketing/tennessee",
        label: "Tennessee",
      },
      " as well.",
    ],
    points: [
      "Every metro you serve, checked",
      "License and WDI pages reviewed",
      "No lock-in, from $297/mo",
    ],
    form: {
      formType: "home-inspector-marketing-mississippi",
      badge: "Free Mississippi audit",
      title: "Get My Free Mississippi Inspector Audit",
      subtitle: "Quick form, no obligation.",
      submitText: "Send My Mississippi Audit",
      messageLabel: "Metros you serve and add-on services",
      messagePlaceholder: "e.g. Jackson and DeSoto, WDI and mold sampling",
    },
  },
  banner: {
    title: "Make Mississippi Agents and Buyers Call You First",
    lead: "See your rank in each Mississippi metro with a free audit.",
    icons: ["inspect", "bug"],
  },
};
