import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* INDIANA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so the live page's ranking
   report and keyword volumes could not be pulled. Rank safety: the live
   title's core term "Home Inspector Marketing in Indiana" stays in the
   title, and every phrase in the live keywords meta sits in the title,
   H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): the Home Inspectors Licensing Board (Indiana
   PLA) licenses inspectors; the Indiana Department of Health licenses
   radon testers (NRPP or NRSB credential first); for-hire wood-destroying
   insect inspections need Office of Indiana State Chemist credentials;
   top Indianapolis pages cover radon, WDI, septic, well water and sewer
   scope, with Carmel, Fishers, Greenwood and Avon as named suburbs. */

export const CONTENT: LocationContent = {
  draftSlug: "indiana-2",
  liveUrl: "/services/home-inspector-marketing/indiana",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Indiana",
  meta: {
    title: "Home Inspector Marketing in Indiana | Indy, Carmel & Fort Wayne",
    description:
      "Indiana home inspector marketing for Indianapolis, Carmel, Fort Wayne and Evansville: Google Maps rankings, radon and WDI pages, Google Ads and agent reviews.",
    keywords: [
      "home inspector marketing indiana",
      "home inspector seo indiana",
      "home inspector indianapolis",
      "home inspection indianapolis cost",
      "home inspector fort wayne",
      "home inspector carmel indiana",
      "home inspection indiana",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector marketing ideas",
      "home inspector lead generation indiana",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.fuchsiaTeal,
  hero: {
    h1: "Indiana Home Inspector Marketing Agency for Hoosier Home Buyers",
    h1NoWrap: "Hoosier Home Buyers",
    lead: [
      "From Carmel cul-de-sacs to Fort Wayne farmhouses, Indiana buyers want an inspector who can test radon, check for termites and deliver fast. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing services",
      },
      " make you that obvious choice on the map, in AI-written answers and with local agents.",
    ],
    cta: "Get My Indiana Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on Maps from Indy to the Region",
        sub: "Rankings tracked in each Indiana town you drive to",
        chips: [
          "Indianapolis",
          "Carmel",
          "Fort Wayne",
          "Evansville",
          "+ your town",
        ],
      },
      left: {
        icon: "inspect",
        title: "More radon test bookings",
        sub: "Radon pages tied to your state tester license",
      },
      right: {
        icon: "bug",
        title: "WDI jobs lenders ask for",
        sub: "Wood-destroying insect pages for loan-bound buyers",
      },
      bottom: {
        title: "Steady work through the winter",
        sub: "Seller and investor inspections fill slower months",
      },
    },
  },
  services: {
    title: "What We Run for Home Inspection Companies Across Indiana",
    lead: "We run each lead channel for Indiana home inspection companies.",
    cta: "Audit My Indiana Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profile Setup for Indiana Inspectors",
        desc: "Inspection categories, radon and WDI services, town service areas and real job photos, maintained so you rise in Indianapolis and Hamilton County maps.",
        points: [
          "Add-on services listed",
          "Town service areas set",
          "Fresh job photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO: Indiana Towns, Radon and WDI Pages",
        desc: "Pages for Carmel, Fishers and Fort Wayne, plus radon, wood-destroying insect, well water and septic pages for buyers outside city limits.",
        points: [
          "Town pages that rank",
          "Radon and WDI pages",
          "Well and septic pages",
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
        title: "Indiana PPC Campaigns and Local Services Ads",
        desc: "Search campaigns and Local Services Ads held to the Indiana zip codes you cover, with careers and how-to searches excluded.",
        points: [
          "Zip-level targeting",
          "Careers searches excluded",
          "Calls tagged by source",
        ],
        links: [{ href: "/services/google-ads", label: "Paid ads management" }],
      },
      {
        icon: "monitor",
        title: "Websites That Book Indiana Inspections Online",
        desc: "A mobile site with real-time scheduling, a sample report, add-on choices and agent notifications, so bookings arrive while you're on a roof.",
        points: [
          "Real-time scheduling",
          "Sample report online",
          "Agent copy sent",
        ],
        links: [
          { href: "/services/web-design", label: "Web design for inspectors" },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Referral Pages for Indiana Agents",
        desc: "We request a review with every report, draft your replies and give agents a page showing your coverage, turnaround and add-ons.",
        points: [
          "Review asks after reports",
          "Replies ready to post",
          "Agent page with turnaround",
        ],
        links: [{ href: "/services", label: "All Zonic services" }],
      },
      {
        icon: "shield",
        title: "Help for Suspended or Unverified Indiana Profiles",
        desc: "Suspended overnight, or verification going nowhere? We pin down the reason, clean up the listing and submit the appeal. So far we've reinstated 900+ profiles.",
        points: [
          "Suspension diagnosed",
          "Verification sorted",
          "Appeal handled",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Finish my verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Home Inspector Lead Generation: Indiana Maps, AI and Calls",
    lead: "Our work covers your map listing, AI answers and the phone line, and every report ties back to paid inspections.",
    rows: [
      {
        title: "Rank in the Top Three for “Home Inspector Indianapolis”",
        body: [
          "When an Indianapolis buyer's offer is accepted, the next search is often an inspector on Google Maps. We fill out your profile, add pages for Lawrence, Speedway and Beech Grove, and line up fresh reviews so your pin stays near the top.",
        ],
        points: [
          "Profile filled out fully",
          "Neighborhood pages added",
          "Radon listed as a service",
          "Monthly grid ranking",
        ],
        cta: "See My Indy Ranking",
        ui: {
          kind: "maps",
          query: "home inspector indianapolis",
          city: "Indianapolis",
          category: "Home inspector · Radon tester",
        },
      },
      {
        title: "AI SEO for Home Inspectors Serving Carmel and Fishers",
        body: [
          "Relocating families in Hamilton County often ask an AI assistant to name a trusted inspector. Through our ",
          { href: "/services/ai-seo-services", label: "AI SEO work" },
          ", your site, reviews and listings give ChatGPT, Gemini and Google's AI Overview consistent facts to repeat when they recommend someone.",
        ],
        points: [
          "FAQ pages per add-on",
          "Listings kept consistent",
          "Schema markup set up",
          "Reviews naming Carmel",
        ],
        cta: "Check How AI Sees Me",
        ui: {
          kind: "ai",
          query: "home inspector carmel indiana",
          intro: "For a home inspector in Carmel, Indiana,",
          bullets: [
            "State-licensed radon testing",
            "WDI report on request",
            "Reports ready that evening",
          ],
        },
      },
      {
        title: "Know Which Ads Turn Into Paid Indiana Inspections",
        body: [
          "Ads only earn their keep when calls become inspections. We log every call with its source, add-on and town, so we can cut searches that never book and steer spend toward whatever fills your Indiana calendar.",
        ],
        points: [
          "Calls recorded and labeled",
          "Wasted searches removed",
          "Junk leads disputed",
          "Monthly bookings report",
        ],
        cta: "Track My Indiana Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Indianapolis",
          calls: [
            {
              service: "Buyer inspection + radon",
              source: "Google Maps",
              when: "8:05 AM",
            },
            {
              service: "WDI inspection",
              source: "Local Services Ads",
              when: "11:20 AM",
            },
            {
              service: "Pre-listing inspection",
              source: "Google Ads",
              when: "2:45 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Where We Grow Home Inspection: Indiana Metros and Towns",
    lead: "Central Indiana, the north, the south and the college towns differ in agents and housing, so we treat every region as its own market.",
    items: [
      {
        name: "Indianapolis & Hamilton County",
        cities: "Indianapolis · Carmel · Fishers · Noblesville",
        focus: "Suburb pages for relocating families and new builds",
      },
      {
        name: "Greenwood, Avon & the Outer Ring",
        cities: "Greenwood · Avon · Plainfield · Brownsburg",
        focus: "Map Pack work in fast-growing commuter towns",
      },
      {
        name: "Fort Wayne & Northeast Indiana",
        cities: "Fort Wayne · Auburn · Huntington",
        focus: "City pages with little online competition",
      },
      {
        name: "The Region & Michiana",
        cities: "Crown Point · Valparaiso · South Bend · Elkhart",
        focus: "Pages for Chicago commuters and lake-area buyers",
      },
      {
        name: "Southern Indiana",
        cities: "Evansville · Jeffersonville · New Albany",
        focus: "River-city service areas near Louisville",
      },
      {
        name: "College Towns",
        cities: "Bloomington · West Lafayette · Muncie",
        focus: "Investor and rental inspection pages",
      },
    ],
    other: "Working in a smaller Indiana town? We'll build pages for it.",
  },
  reviews: {
    title: "What Owners Say About Working With Zonic Media",
    lead: "We hold a 5.0 Google rating from service businesses like yours.",
  },
  pricing: {
    title: "Indiana Home Inspector Marketing Pricing",
    lead: [
      "Choose any tier, change it monthly, and keep a 0% markup on every ad dollar. Want the wider picture? Read our ",
      { href: "/services", label: "complete service list" },
      ".",
    ],
    compareTitle: "How the Indiana Plans Compare",
    compareLead: "Single town or the whole state.",
    addOnsTitle: "Add-Ons for Busy Closing Months",
    addOnsLead: "Extra town pages or added ad budget when contracts pick up.",
    customTitle: "Inspectors in Indy and Fort Wayne?",
    customText: "List every territory and we'll price one plan.",
  },
  faq: {
    title: "Indiana Home Inspector Marketing Questions",
    lead: "Licenses, radon, WDI, costs and winter work. Want a quicker answer? Call us.",
    items: [
      {
        q: "Does my Indiana home inspector license belong on my Google profile?",
        a: "It should. The Home Inspectors Licensing Board issues Indiana's inspector licenses, and agents can verify yours online in seconds. We place your number on your profile, website and agent page, alongside radon and WDI credentials if you hold them.",
      },
      {
        q: "Can I advertise radon testing in Indiana without a separate license?",
        a: "No. Radon testers in Indiana are licensed by the state Department of Health, and a national NRPP or NRSB credential comes first. With that in hand, radon gets its own page, a spot on your Google profile and a checkbox at booking.",
      },
      {
        q: "What about termite and WDI inspections in Indiana?",
        a: "For-hire wood-destroying insect inspections in Indiana need credentials from the Office of Indiana State Chemist. If you hold them, we build WDI pages aimed at buyers whose lenders ask for the report. If you don't, we leave WDI out of your marketing.",
      },
      {
        q: "What should my site say to “home inspection Indianapolis cost” searches?",
        a: "Give a clear answer without a rate card. Explain what moves the fee, like square footage, age, crawlspace and add-ons, then show an instant quote or a booking button. Buyers comparing inspectors stay on your page instead of calling the next listing.",
      },
      {
        q: "How do I show up for “home inspector Carmel Indiana” searches?",
        a: "Build proof that you work there. A Carmel page with real local photos, reviews from Carmel buyers and Carmel listed in your Google service area help most. If your office sits in Indianapolis, we pair that with ads covering Hamilton County zip codes.",
      },
      {
        q: "Can you rank me for “home inspector Fort Wayne” and nearby towns?",
        a: "Yes. Fort Wayne has fewer inspectors fighting for the top spots than Indianapolis, so a strong profile and city page can move quickly. We then add pages for Auburn, Huntington and New Haven so the surrounding towns find you too.",
      },
      {
        q: "Which home inspector marketing ideas work in an Indiana winter?",
        a: "Winter is when pre-listing inspections, investor walk-throughs and review building pay off. We push seller-focused pages and posts, ask past clients for reviews and keep ads running only on searches that still book, so you head into spring with momentum.",
      },
    ],
  },
  audit: {
    title: "Book a Free Indiana Home Inspector Marketing Audit",
    lead: [
      "We rank-check every Indiana town you serve, then review your Google profile, site, reviews and ad account to show where bookings slip away. Covering a neighboring state too? We also market inspectors in ",
      {
        href: "/services/home-inspector-marketing/illinois",
        label: "Illinois",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/ohio",
        label: "Ohio",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/michigan",
        label: "Michigan",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/kentucky",
        label: "Kentucky",
      },
      ".",
    ],
    points: [
      "Each Indiana town rank-checked",
      "Radon and WDI searches tested",
      "$297 to $1,500 tiers, no lock-in",
    ],
    form: {
      formType: "home-inspector-marketing-indiana",
      badge: "Free Indiana audit",
      title: "Get Your Free Indiana Audit",
      subtitle: "Free, fast and with zero obligation.",
      submitText: "Send My Indiana Audit",
      messageLabel: "Indiana towns you cover and add-ons",
      messagePlaceholder: "e.g. Carmel and Fishers, radon and WDI",
    },
  },
  banner: {
    title: "SEO for Home Inspectors From Indy to the Ohio River",
    lead: "See, at no cost, how your pin ranks across every Indiana town on your route.",
    icons: ["inspect", "home"],
  },
};
