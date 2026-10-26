import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* KENTUCKY HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so the live page's ranking
   report and keyword volumes could not be pulled. Rank safety: the live
   title's core term "Home Inspector Marketing in Kentucky" stays in the
   title, and every phrase in the live keywords meta sits in the title,
   H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): since July 2006 advertising or performing paid
   home inspections needs a Kentucky Board of Home Inspectors license;
   radon measurement is overseen by the Kentucky Board of Radon Safety
   (2022); EPA rates Boone, Campbell, Grant and Kenton moderate radon
   risk and Louisville pages flag Jefferson County radon; top Louisville
   pages cover radon, sewer scope (clay lines in older homes), mold, WDI,
   karst-related foundation movement and pre-listing inspections. */

export const CONTENT: LocationContent = {
  draftSlug: "kentucky-2",
  liveUrl: "/services/home-inspector-marketing/kentucky",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Kentucky",
  meta: {
    title: "Home Inspector Marketing in Kentucky | Louisville & Lexington",
    description:
      "Kentucky home inspector marketing for Louisville, Lexington, Northern Kentucky and Bowling Green: Maps rankings, radon pages, Google Ads and more agent referrals.",
    keywords: [
      "home inspector marketing kentucky",
      "home inspector seo kentucky",
      "home inspector louisville ky",
      "best home inspector louisville ky",
      "home inspection lexington ky",
      "home inspector northern kentucky",
      "home inspections ky",
      "home inspection cost kentucky",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation kentucky",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.amberSlate,
  hero: {
    h1: "Kentucky Home Inspector Marketing Agency That Fills Your Week",
    h1NoWrap: "Fills Your Week",
    lead: [
      "Kentucky buyers lean on two things when picking an inspector: what Google shows and what their agent suggests. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "marketing for home inspectors",
      },
      " wins both in Louisville, Lexington, Northern Kentucky and Bowling Green, with radon and sewer scope bookings riding along.",
    ],
    cta: "Get My Kentucky Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on Maps across the Commonwealth",
        sub: "Louisville, Lexington and NKY ranked city by city",
        chips: [
          "Louisville",
          "Lexington",
          "Covington",
          "Bowling Green",
          "+ your town",
        ],
      },
      left: {
        icon: "inspect",
        title: "Radon tests on more jobs",
        sub: "Add-on pages for high-radon counties",
      },
      right: {
        icon: "users",
        title: "Agents who call you first",
        sub: "Profiles that make referrals an easy yes",
      },
      bottom: {
        title: "Bookings from base relocations",
        sub: "Pages for Fort Knox and Fort Campbell moves",
      },
    },
  },
  services: {
    title: "Marketing That Turns Searches Into Home Inspections, KY-Wide",
    lead: "Search, maps, ads and reviews for Kentucky inspectors from one crew.",
    cta: "Audit My Kentucky Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Optimization for Kentucky Inspectors",
        desc: "We set inspection categories, list radon and sewer scope, define service areas by county and add job photos, so you climb Louisville and Lexington maps.",
        points: [
          "Categories and add-ons set",
          "County service areas",
          "Job photos each week",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile work",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO, Kentucky City and Radon Pages",
        desc: "Pages for St. Matthews, Florence and Georgetown, plus radon, sewer scope, mold and pre-listing pages written around what Kentucky buyers type.",
        points: [
          "City and county pages",
          "Radon and sewer pages",
          "Pre-listing inspection page",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO services",
          },
        ],
      },
      {
        icon: "target",
        title: "Kentucky Search Ads and Local Services Ads by County",
        desc: "Ads and Local Services listings pointed at buyers in the counties you cover, with inspector-training and how-to searches cut out.",
        points: [
          "County-level targeting",
          "Training searches blocked",
          "Calls logged by source",
        ],
        links: [{ href: "/services/google-ads", label: "Google Ads help" }],
      },
      {
        icon: "monitor",
        title: "Inspection Websites Built to Take Bookings",
        desc: "Mobile pages with a live calendar, a sample report, add-on options and an agent copy of every booking, built to load fast on rural signal.",
        points: [
          "Live booking calendar",
          "Sample report shown",
          "Fast on weak signal",
        ],
        links: [
          { href: "/services/web-design", label: "Custom website design" },
        ],
      },
      {
        icon: "star",
        title: "Review Growth and Agent Referral Pages",
        desc: "Every report sparks a review request, owner replies get drafted in your voice, and a page for agents lists coverage, turnaround and add-on services.",
        points: [
          "A request per report",
          "Drafted owner replies",
          "Agent page with coverage",
        ],
        links: [{ href: "/services", label: "Browse our services" }],
      },
      {
        icon: "shield",
        title: "Reinstating Suspended Kentucky Listings",
        desc: "A suspended or unverified profile stops calls fast. We trace the trigger, fix it and argue the appeal, drawing on 900+ reinstated profiles.",
        points: ["Trigger identified", "Verification fixed", "Appeal managed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstatement service",
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
    title: "Home Inspector Lead Generation Kentucky Owners Can Measure",
    lead: "Three things decide whether a Kentucky buyer books you: the map, the AI answer and your website.",
    rows: [
      {
        title: "“Home Inspector Louisville KY”: Earn a Top-Three Pin",
        body: [
          "Many Louisville buyers ring an inspector straight off the map, so the first three pins matter. Your profile gets built out, pages appear for the Highlands, Jeffersontown and Prospect, and new reviews land weekly to keep your pin in place.",
        ],
        points: [
          "Neighborhood pages built",
          "Radon on your profile",
          "Weekly posts and photos",
          "Rank grid every month",
        ],
        cta: "See My Louisville Ranking",
        ui: {
          kind: "maps",
          query: "home inspector louisville ky",
          city: "Louisville",
          category: "Home inspection service · Sewer scopes",
        },
      },
      {
        title:
          "AI SEO for Home Inspectors in “Home Inspection Lexington KY” Answers",
        body: [
          "Buyers moving to Lexington for work increasingly ask an AI assistant like ChatGPT which inspector to trust. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " feeds those tools clean, matching facts about your services, coverage and reviews, which makes your company easier for them to recommend.",
        ],
        points: [
          "Plain-answer service pages",
          "Listings that match",
          "Schema on key pages",
          "Reviews naming Lexington",
        ],
        cta: "Run My AI Visibility Check",
        ui: {
          kind: "ai",
          query: "home inspection lexington ky",
          intro: "For a home inspection in Lexington, KY,",
          bullets: [
            "Kentucky-licensed inspector",
            "Radon test added on request",
            "Evening and weekend slots",
          ],
        },
      },
      {
        title: "A Booking Site Kentucky Buyers Use After Hours",
        body: [
          "Lots of Kentucky buyers search for an inspector in the evening, right after signing. Your new site shows open slots, radon and sewer scope options and a sample report, then confirms the booking and copies the agent before you're back at the office.",
        ],
        points: [
          "Open slots shown live",
          "Add-ons chosen online",
          "Agent copied automatically",
          "Sample report one tap away",
        ],
        cta: "Plan My Kentucky Site",
        ui: {
          kind: "website",
          url: "yourcompany.com",
          headline: "Book a Louisville home inspection",
          services: [
            "Buyer inspection",
            "Radon testing",
            "Sewer scope",
            "Pre-listing inspection",
          ],
        },
      },
    ],
  },
  regions: {
    title: "Kentucky Regions We Market Inspectors In",
    lead: "Louisville, the Bluegrass, Northern Kentucky and the smaller cities each have their own agents and search habits, so each gets its own pages.",
    items: [
      {
        name: "Louisville Metro",
        cities: "Louisville · St. Matthews · Jeffersontown · Prospect",
        focus: "Older-home sewer scope and radon pages",
      },
      {
        name: "Lexington & the Bluegrass",
        cities: "Lexington · Georgetown · Nicholasville · Frankfort",
        focus: "Relocation buyers and horse-country acreage",
      },
      {
        name: "Northern Kentucky",
        cities: "Covington · Florence · Independence · Fort Thomas",
        focus: "Standing out from Cincinnati-based inspectors",
      },
      {
        name: "Bowling Green & Elizabethtown",
        cities: "Bowling Green · Elizabethtown · Radcliff",
        focus: "Military moves near Fort Knox and new builds",
      },
      {
        name: "Western Kentucky",
        cities: "Owensboro · Paducah · Hopkinsville",
        focus: "Fort Campbell relocations and river-town pages",
      },
      {
        name: "Eastern Kentucky",
        cities: "Ashland · Pikeville · Morehead",
        focus: "Wide service areas with few competitors online",
      },
    ],
    other: "Inspecting in a Kentucky county not shown? We'll add it.",
  },
  reviews: {
    title: "Read Why Our Google Rating Sits at 5.0",
    lead: "Read what local service businesses say about our work.",
  },
  pricing: {
    title: "Kentucky Home Inspector Marketing Plans and Costs",
    lead: [
      "Each plan is month to month, and ads run with a 0% markup on spend. Need a new site first? Pair any plan with ",
      { href: "/services/web-design", label: "website design" },
      " or browse our ",
      { href: "/services", label: "other services" },
      ".",
    ],
    compareTitle: "Kentucky Plans, Compared",
    compareLead: "One city or the whole Commonwealth.",
    addOnsTitle: "Extras for Spring and Summer Closings",
    addOnsLead: "Added city pages or ad budget when closings stack up.",
    customTitle: "Offices in Louisville and Lexington?",
    customText: "Send each location for a single quote.",
  },
  faq: {
    title: "Kentucky Inspector Marketing, Answered",
    lead: "Licensing, radon, NKY, military moves and costs. Want to talk instead? Give us a call.",
    items: [
      {
        q: "Do I need a Kentucky license to advertise home inspections?",
        a: "Yes. Since 2006, advertising or performing paid home inspections in Kentucky requires a license from the Kentucky Board of Home Inspectors. Your license number then appears on the Google profile, the site and the agent page, ready for anyone to verify.",
      },
      {
        q: "Is radon worth marketing as its own service in Kentucky?",
        a: "Usually, yes. Radon is common in parts of the state, including Jefferson County and Northern Kentucky, and Kentucky regulates radon measurement through its own board. With the credential in place, we give radon its own page, a slot on your profile and a spot in your booking form.",
      },
      {
        q: "Do buyers search “home inspector Northern Kentucky” separately from Cincinnati?",
        a: "Some do, and it's an opening. Buyers in Covington, Florence and Fort Thomas often add Northern Kentucky or NKY to their search. Pages that use those terms, reviews from Kentucky-side jobs and a Kentucky address on your profile help you outrank inspectors based across the river.",
      },
      {
        q: "How do I show up for “best home inspector Louisville KY” searches?",
        a: "Google treats “best” searches mostly like regular local ones, weighing distance, relevance and reviews. Steady recent reviews that mention Louisville neighborhoods, a complete profile and a Louisville page that shows your credentials give you the strongest shot.",
      },
      {
        q: "Buyers Google “home inspection cost Kentucky.” What should my site say?",
        a: "Answer the question without posting a price list. Explain what affects the fee, such as square footage, crawlspaces, age and add-ons like radon, then let visitors request a quote or pick a slot online. Buyers who get a straight answer tend to book rather than keep shopping.",
      },
      {
        q: "Do PCS moves near Fort Knox and Fort Campbell bring inspection work?",
        a: "They can. Families on orders often buy quickly from a distance and rely on search to pick an inspector. Pages for Elizabethtown, Radcliff and Hopkinsville, clear scheduling details and virtual report walk-throughs make you easy to choose from out of state.",
      },
      {
        q: "How much is a Kentucky home inspector marketing plan?",
        a: "Kentucky inspectors settle on one tier ($297, $750 or $1,500), paid monthly with nothing long-term to sign, and Google gets your ad spend at a 0% markup. We'll suggest a tier after the free audit, based on how many cities you cover.",
      },
    ],
  },
  audit: {
    title: "Get Your Free Kentucky Home Inspector Marketing Audit",
    lead: [
      "Our team checks your rank in every Kentucky city and county you cover, then looks at your profile, site, reviews and any ads to show where buyers go instead. Crossing state lines? We also help inspectors in ",
      {
        href: "/services/home-inspector-marketing/ohio",
        label: "Ohio",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/indiana",
        label: "Indiana",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/tennessee",
        label: "Tennessee",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/virginia",
        label: "Virginia",
      },
      ".",
    ],
    points: [
      "Every city and county ranked",
      "Radon and NKY searches tested",
      "Monthly plans starting at $297",
    ],
    form: {
      formType: "home-inspector-marketing-kentucky",
      badge: "Free Kentucky audit",
      title: "Request a Free Kentucky Audit",
      subtitle: "No charge and no commitment.",
      submitText: "Send My Kentucky Audit",
      messageLabel: "Kentucky cities and add-ons you offer",
      messagePlaceholder:
        "e.g. Louisville and Lexington, radon and sewer scope",
    },
  },
  banner: {
    title: "Bluegrass SEO for Home Inspectors Who Want a Full Calendar",
    lead: "The free audit shows your Maps spot in each Kentucky city you cover.",
    icons: ["inspectList", "star"],
  },
};
