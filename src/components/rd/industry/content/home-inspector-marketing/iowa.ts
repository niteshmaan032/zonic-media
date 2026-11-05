import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* IOWA HOME INSPECTOR MARKETING — new live state page (5 Nov 2026).
   Brief: docs/fence-and-inspector-brief-2026-11.md. Semrush units are out;
   volumes come from reports/research/home-inspector-states-2026-11.md
   ("how to become a home inspector in iowa" 260, "home inspection cedar
   rapids" 50, "home inspector des moines" 10).
   Web research (5 Nov 2026):
   - Law: the Home Inspection Accountability Act (SF 460, Iowa Code
     558A.4A), in effect since 1 July 2025, limits full home inspections
     to members of a national home inspector association, inspectors
     licensed or registered in another state, and licensed architects or
     engineers; requires errors and omissions insurance; bans offering or
     accepting referral fees or kickbacks (iowarealtors.com). Sources
     disagree on whether this is a "state license", so the page never
     calls it one.
   - Radon: EPA places all Iowa counties in Zone 1 (hhs.iowa.gov); testing
     radon for a fee requires Iowa HHS certification (Iowa Code 136B,
     legis.iowa.gov); HF 2297, signed May 2026 and effective 1 July 2026,
     requires passive radon mitigation in new one- and two-family homes
     (kcrg.com).
   - Septic: Iowa DNR's Time of Transfer law requires a septic inspection
     by a DNR-certified inspector before a property with a septic system
     is sold (iowadnr.gov). */

export const CONTENT: LocationContent = {
  draftSlug: "iowa",
  liveUrl: "/services/home-inspector-marketing/iowa",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Iowa",
  meta: {
    title: "Home Inspector Marketing in Iowa | Des Moines & Cedar Rapids",
    description:
      "Iowa home inspector marketing for Des Moines, Cedar Rapids, Iowa City and the Quad Cities: Map Pack rankings, inspector SEO, radon and septic pages, AI answers.",
    keywords: [
      "home inspector marketing iowa",
      "home inspector des moines",
      "home inspection cedar rapids",
      "home inspection iowa city",
      "how to become a home inspector in iowa",
      "iowa home inspection accountability act",
      "home inspector seo iowa",
      "home inspector lead generation iowa",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.greenRose,
  hero: {
    h1: "Iowa Home Inspector Marketing Agency for Buyers, Sellers & Agents",
    h1NoWrap: "Sellers & Agents",
    lead: [
      "Every Iowa county sits in the EPA's top radon zone, and a 2025 law now sets who may sign a full inspection report. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "Iowa home inspector marketing",
      },
      " shows buyers, sellers and agents you qualify, then books your inspections and radon tests online.",
    ],
    cta: "Get My Iowa Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 in Des Moines and beyond",
        sub: "Metro and small-town Map Pack coverage",
        chips: [
          "Des Moines",
          "Cedar Rapids",
          "Iowa City",
          "Davenport",
          "+ your town",
        ],
      },
      left: {
        icon: "inspect",
        title: "More radon test bookings",
        sub: "Certified radon offered at every booking",
      },
      right: {
        icon: "check",
        title: "Qualifications on display",
        sub: "Membership and insurance where buyers look",
      },
      bottom: {
        title: "Busy beyond the spring market",
        sub: "Fall and winter campaigns for steady weeks",
      },
    },
  },
  services: {
    title: "Home Inspector Marketing Services Built for Iowa Firms",
    lead: "One team for your profile, pages, ads, website and reviews, from the metro to the county seat.",
    cta: "Audit My Iowa Marketing",
    items: [
      {
        icon: "pin",
        title: "Iowa Google Profiles That Prove You Qualify",
        desc: "Association membership, insurance, certified radon testing and the towns you cover, all listed so Google and buyers see a qualified inspector.",
        points: [
          "Qualifications listed",
          "Radon certification shown",
          "Town service areas",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Polish my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Iowa Home Inspection SEO, Metro to County Seat",
        desc: "Pages for each metro and nearby town, plus radon, sewer scope, time-of-transfer septic and new-construction pages Iowa buyers look for.",
        points: [
          "Metro and town pages",
          "Radon and septic pages",
          "Structured FAQ data",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local search services",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Iowa Buyers With Accepted Offers",
        desc: "Search ads and Local Services Ads aimed at contract-week searches, with Des Moines and Eastern Iowa campaigns kept separate.",
        points: [
          "Contract-week targeting",
          "Local Services Ads",
          "Metro-level campaigns",
        ],
        links: [
          { href: "/services/google-ads", label: "Manage my ad campaigns" },
        ],
      },
      {
        icon: "monitor",
        title: "Iowa Booking Websites With Radon at Checkout",
        desc: "Buyers choose the inspection, add certified radon, sewer scope or septic, pick a time and view an example report on any phone.",
        points: [
          "Radon add-on at checkout",
          "Online scheduling",
          "Example report on mobile",
        ],
        links: [{ href: "/services/web-design", label: "Plan my new website" }],
      },
      {
        icon: "star",
        title: "Review Requests That Agents and Buyers Notice",
        desc: "Automatic requests after each report bring a steady run of reviews that mention Iowa towns, radon results and on-time reports.",
        points: [
          "Automatic review asks",
          "Towns named in reviews",
          "Prompt owner replies",
        ],
        links: [{ href: "/services", label: "Explore our services" }],
      },
      {
        icon: "shield",
        title: "Iowa Google Listing Suspended? Get It Back",
        desc: "We find the reason Google pulled or stalled your listing, fix it and manage the appeal. We've reinstated 900+ profiles.",
        points: ["Reason confirmed", "Listing fixed", "Appeal managed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Recover my listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Finish verifying my listing",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Where Iowa Buyers Choose an Inspector, and How You Get Chosen",
    lead: "Map rankings for nearby searches, AI answers for researchers and a website that books radon with the inspection.",
    rows: [
      {
        title: "Rank in the Map Pack for “Home Inspector Des Moines”",
        body: [
          "Ankeny, Waukee and West Des Moines buyers rarely scroll past three map results. Your profile gets Polk and Dallas County service areas, each suburb gets a page with local detail, and new reviews mention those suburbs, which is how Google decides who stays on top.",
        ],
        points: [
          "Suburb pages for Polk County",
          "Reviews naming suburbs",
          "Radon listed as a service",
          "Rank tracked by grid",
        ],
        cta: "See My Des Moines Ranking",
        ui: {
          kind: "maps",
          query: "home inspector des moines",
          city: "West Des Moines",
          category: "Home inspector · Certified radon",
        },
      },
      {
        title: "Be the Inspector AI Suggests for Cedar Rapids and Iowa City",
        body: [
          "Families moving to Cedar Rapids, Iowa City and North Liberty ask ChatGPT and Perplexity which inspectors handle radon. Our ",
          {
            href: "/services/ai-seo-services",
            label: "generative search work",
          },
          " lines up your qualifications, radon certification and reviews across the web, so AI Overviews and Gemini can recommend you with confidence.",
        ],
        points: [
          "Qualifications in schema",
          "Radon answer pages",
          "Matching listings",
          "Reviews about radon",
        ],
        cta: "Check My AI Answers",
        ui: {
          kind: "ai",
          query: "home inspector iowa city with radon testing",
          intro: "For a home inspection with radon testing in Iowa City,",
          bullets: [
            "Certified radon testing",
            "Covers Coralville and North Liberty",
            "Online booking open",
          ],
        },
      },
      {
        title: "A Website That Books Iowa Inspections and Radon Together",
        body: [
          "Iowa buyers expect a radon test, so make it part of booking. We build a fast site where clients pick the inspection, add radon, sewer scope or a septic check, choose a time and get instant confirmation, with an agent copy sent automatically.",
        ],
        points: [
          "Radon bundled at booking",
          "Septic and sewer options",
          "Instant confirmation",
          "Agent copy by email",
        ],
        cta: "Plan My Iowa Booking Site",
        ui: {
          kind: "website",
          url: "yourcompany.com/cedar-rapids",
          headline: "Cedar Rapids home inspections with radon testing",
          services: [
            "Home inspection",
            "Radon test",
            "Sewer scope",
            "Septic check",
          ],
        },
      },
    ],
  },
  audiences: {
    title: "Iowa Agents and Homeowners: Two Paths to Booked Inspections",
    lead: [
      "Iowa's 2025 law bans offering or accepting referral fees for inspections, so we win agents over with speed and clarity. Owners who book on their own find you through pages built for their exact job.",
    ],
    lanes: [
      {
        audience: "Iowa Real Estate Agents",
        icon: "agent",
        pitch:
          "Iowa agents need an inspector who qualifies under the new law, books inside the contract window and writes reports buyers grasp. We make all three easy to confirm.",
        query: "Agent: Waukee buyer, inspection plus radon by Tuesday",
        flow: [
          "Checks your page",
          "Books with radon",
          "Gets the summary",
          "Books you again",
        ],
        badge: "Requested by name",
        jobs: [
          {
            name: "Buyer inspection with radon",
            tactic: "Agent page offering bundled booking",
          },
          {
            name: "Acreage sale with septic",
            tactic: "Time-of-transfer septic offered alongside the inspection",
          },
          {
            name: "Repair re-inspection",
            tactic: "One-click rebook link sent with reports",
          },
        ],
      },
      {
        audience: "Iowa Owners Booking for Themselves",
        icon: "home",
        pitch:
          "Sellers, owners and new-build buyers search for the job they need. We match each search with its own page, from pre-listing to radon retests, and let them book online.",
        query: "pre listing home inspection ankeny",
        flow: [
          "Googles the job",
          "Opens your page",
          "Adds a radon test",
          "Books a slot",
        ],
        badge: "Booked online, no phone tag",
        jobs: [
          {
            name: "Pre-listing inspection",
            tactic: "Seller page about avoiding surprises at the closing table",
          },
          {
            name: "New-construction inspection",
            tactic: "Pages for growing Ankeny and Waukee subdivisions",
          },
          {
            name: "Radon retest after mitigation",
            tactic: "Follow-up emails to past radon clients",
          },
        ],
      },
    ],
    addOns: {
      title: "Iowa Add-Ons Buyers and Owners Request",
      items: [
        "Certified radon test",
        "Time-of-transfer septic",
        "Sewer scope",
        "Well water testing",
        "Termite / WDI report",
        "Mold sampling",
      ],
    },
    cta: "Map Out My Iowa Bookings",
  },
  regions: {
    title: "Iowa Metros and Towns We Cover",
    lead: "Central Iowa suburbs, Eastern Iowa college towns and river cities on both edges of the state each get their own pages and ads.",
    items: [
      {
        name: "Greater Des Moines",
        cities: "Des Moines · West Des Moines · Ankeny · Waukee",
        focus: "Suburb pages and new-build inspection searches",
      },
      {
        name: "Cedar Rapids Area",
        cities: "Cedar Rapids · Marion · Hiawatha · Mount Vernon",
        focus: "Radon and older-home pages",
      },
      {
        name: "Iowa City Area",
        cities: "Iowa City · Coralville · North Liberty · Tiffin",
        focus: "University-town rentals and relocations",
      },
      {
        name: "Quad Cities & Dubuque",
        cities: "Davenport · Bettendorf · Dubuque · Clinton",
        focus: "River-city homes with sewer scope demand",
      },
      {
        name: "Cedar Valley & Ames",
        cities: "Waterloo · Cedar Falls · Ames · Marshalltown",
        focus: "Campus and family buyer campaigns",
      },
      {
        name: "Western Iowa",
        cities: "Sioux City · Council Bluffs · Le Mars · Spencer",
        focus: "Buyers crossing from Nebraska and South Dakota",
      },
    ],
    other:
      "Inspecting in Mason City, Ottumwa or Fort Dodge? We'll cover those towns too.",
  },
  reviews: {
    title: "Proof for Iowa Inspectors: Our 5.0 Google Reviews",
    lead: "Honest reviews from local business owners who hired us to grow.",
  },
  pricing: {
    title: "Monthly Plans for Iowa Home Inspection Companies",
    compareTitle: "Iowa Plans at a Glance",
    addOnsTitle: "Add-Ons for Busy Iowa Springs",
    customTitle: "Serving two or more Iowa metros?",
  },
  faq: {
    title: "Iowa Home Inspector Marketing Questions",
    lead: "The 2025 law, radon, septic, agents, AI and cost. Rather call? We're happy to talk.",
    items: [
      {
        q: "What does Iowa’s Home Inspection Accountability Act mean for my marketing?",
        a: "Since July 2025, Iowa law limits full home inspections to qualified people, such as people who belong to a national inspector association, and requires errors and omissions insurance. Buyers and agents now check, so we display your membership, insurance and qualifications on your profile, site, booking page and schema.",
      },
      {
        q: "I'm learning how to become a home inspector in Iowa. When should I start marketing?",
        a: "Before your first paid job. Claim your Google profile, build a simple booking site and set up review requests while you finish association requirements. Starting early gives Google time to trust your listing, so calls begin as soon as you're qualified to inspect.",
      },
      {
        q: "Should Iowa inspectors bundle radon with every inspection?",
        a: "Offer it every time, since the EPA places all 99 Iowa counties in its highest radon zone. Iowa also requires certification to test radon for a fee, so show yours. A booking add-on, a clear radon page and reviews mentioning results turn that demand into bookings.",
      },
      {
        q: "Do new Iowa homes with passive radon systems still need a test?",
        a: "Buyers still benefit from one, and that makes a page worth writing. A 2026 Iowa law requires passive radon mitigation in new one- and two-family homes, yet only a test shows whether levels are actually low. We build new-construction pages explaining that for growing suburbs.",
      },
      {
        q: "Can I market time-of-transfer septic inspections in Iowa?",
        a: "If you're DNR-certified for them, yes. Iowa requires a septic inspection before most properties with a septic system are sold, and acreage buyers search for it. We add a dedicated page, list it on your Google profile and offer it as a booking add-on.",
      },
      {
        q: "Does AI search help Iowa home inspectors?",
        a: "Increasingly. Buyers relocating for jobs in Des Moines or Cedar Rapids ask ChatGPT, Gemini and Perplexity for trusted inspectors. Those tools favor businesses whose listings, reviews and site answers agree, so we make yours consistent and track when you are named.",
      },
      {
        q: "How much does home inspector marketing in Iowa cost?",
        a: "Our plans are $297, $950 and $1,500 per month, all without a long contract. Google bills your ad budget to you, and our markup on it stays at 0%. Many Iowa inspectors open with one metro and widen coverage once their weeks fill up.",
      },
    ],
  },
  audit: {
    title: "Free Marketing Audit for Iowa Home Inspectors",
    lead: [
      "You'll see your rank in each Iowa metro you serve, a score covering your Business Profile, website and reviews, plus the searches sending buyers elsewhere. Crossing state lines? We also cover ",
      {
        href: "/services/home-inspector-marketing/minnesota",
        label: "Minnesota",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/wisconsin",
        label: "Wisconsin",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/illinois",
        label: "Illinois",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/missouri",
        label: "Missouri",
      },
      ".",
    ],
    points: [
      "Every Iowa metro you serve, ranked",
      "Radon and septic demand reviewed",
      "Plans from $297, no contract",
    ],
    form: {
      formType: "home-inspector-marketing-iowa",
      badge: "Free Iowa audit",
      title: "Get My Free Iowa Inspector Audit",
      subtitle: "Quick to request, nothing to sign.",
      submitText: "Send My Iowa Audit",
      messageLabel: "Your Iowa metros and add-on tests",
      messagePlaceholder: "e.g. Des Moines suburbs, radon and sewer scope",
    },
  },
  banner: {
    title: "Make Iowa Buyers and Agents Ask for You by Name",
    lead: "Get a no-cost review of your rank in every Iowa town you inspect.",
    icons: ["inspectList", "check"],
  },
};
