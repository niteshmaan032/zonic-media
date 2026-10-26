import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* ILLINOIS HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so the live page's ranking
   report and keyword volumes could not be pulled. Rank safety: the live
   title's core term "Home Inspector Marketing in Illinois" stays in the
   title, and every phrase in the live keywords meta sits in the title,
   H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): IDFPR licenses home inspectors statewide; paid
   radon measurement needs a separate IEMA license; the Radon Awareness
   Act makes sellers hand buyers a radon disclosure; top Chicago pages
   cover condos, two-flats and three-flats, sewer scope and lateral line
   inspections, older housing stock and the collar-county suburbs. */

export const CONTENT: LocationContent = {
  draftSlug: "illinois-2",
  liveUrl: "/services/home-inspector-marketing/illinois",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Illinois",
  meta: {
    title: "Home Inspector Marketing in Illinois | Chicago & Suburbs",
    description:
      "Illinois home inspector marketing for Chicago, Naperville, Aurora and Rockford: Maps rankings, condo and radon pages, paid search and review growth.",
    keywords: [
      "home inspector marketing illinois",
      "home inspector seo illinois",
      "home inspector chicago il",
      "home inspectors chicago suburbs",
      "home inspection naperville",
      "home inspection cost illinois",
      "home inspector license illinois",
      "home inspector rockford il",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation illinois",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.orangeSky,
  hero: {
    h1: "Home Inspector Marketing Agency for Illinois Buyers and Agents",
    h1NoWrap: "Buyers and Agents",
    lead: [
      "Chicagoland buyers juggle attorney review, condo boards and tight deadlines, so they book whichever inspector looks ready first. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing agency",
      },
      " gets you into Google Maps, AI answers and agents' go-to lists from the city out to Rockford and Peoria.",
    ],
    cta: "Get My Illinois Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 in Chicago and the collar counties",
        sub: "Neighborhood and suburb rankings tracked on a grid",
        chips: ["Chicago", "Naperville", "Aurora", "Joliet", "+ your suburb"],
      },
      left: {
        icon: "building",
        title: "More condo and two-flat jobs",
        sub: "Pages for the multi-unit homes Chicago is known for",
      },
      right: {
        icon: "inspect",
        title: "Radon tests buyers ask for",
        sub: "Disclosure forms get Illinois buyers asking",
      },
      bottom: {
        title: "Agents who send repeat clients",
        sub: "Quick reports and easy scheduling they can share",
      },
    },
  },
  services: {
    title: "Home Inspector SEO, Illinois Ads and Agent Visibility in One Plan",
    lead: "Illinois home inspector SEO works best when one crew runs your ads.",
    cta: "Audit My Illinois Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile Work for Chicagoland Inspectors",
        desc: "Categories, service areas by suburb, your IDFPR license details and regular job photos, kept current so your listing climbs Chicago-area Maps results.",
        points: [
          "License details shown",
          "Suburb service areas",
          "Photos posted weekly",
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
        title: "Local SEO for Home Inspectors in Cook, DuPage and Will",
        desc: "Pages for Naperville, Joliet and city neighborhoods, plus radon, sewer scope and condo inspection pages that answer what Illinois buyers search.",
        points: [
          "Neighborhood and suburb pages",
          "Sewer scope and radon pages",
          "Condo and two-flat pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for service pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Search Ads and Local Services Ads Around Chicago",
        desc: "Pay-per-click and Local Services Ads restricted to your zip codes, with renter, DIY and job-hunting searches blocked.",
        points: [
          "Zip code targeting",
          "Job-seeker terms blocked",
          "Each call recorded",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for inspectors" },
        ],
      },
      {
        icon: "monitor",
        title: "Booking Websites for Illinois Inspection Companies",
        desc: "Your site lets buyers and their agents pick a slot, see a sample report and add radon or a sewer scope without making a call.",
        points: [
          "Online scheduling",
          "Sample report page",
          "Add-ons at checkout",
        ],
        links: [{ href: "/services/web-design", label: "Website design" }],
      },
      {
        icon: "star",
        title: "Reviews That Keep Agents Recommending You",
        desc: "A review ask goes out as each report is delivered, replies stay friendly and professional, and an agent page lists turnaround, coverage and report format.",
        points: [
          "Requests sent with reports",
          "Replies written for you",
          "Page built for agents",
        ],
        links: [{ href: "/services", label: "Every service we offer" }],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified Illinois Listings",
        desc: "Listing pulled or verification frozen? We work out what set it off, put it right and run the appeal, with 900+ reinstated listings behind us.",
        points: [
          "Trigger found fast",
          "Verification video prep",
          "Appeal filed for you",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Get my profile reinstated",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help with verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How We Bring Illinois Inspectors More Booked Jobs",
    lead: "Maps, AI answers and your website each decide whether a buyer books you or keeps scrolling.",
    rows: [
      {
        title: "Hold a Top Spot When Someone Types “Home Inspector Chicago IL”",
        body: [
          "Chicago buyers racing an attorney-review deadline usually choose from the first few inspectors pinned on the map. Your profile gets sharpened, neighborhood pages go live and reviews keep arriving, so you stay in that short list across the city and inner suburbs.",
        ],
        points: [
          "Neighborhood pages live",
          "Condo inspections listed",
          "Grid rank reports",
          "License number on profile",
        ],
        cta: "See My Chicago Ranking",
        ui: {
          kind: "maps",
          query: "home inspector chicago il",
          city: "Chicago",
          category: "Home inspector · Condo inspections",
        },
      },
      {
        title:
          "AI SEO for Home Inspectors: Get Named for “Home Inspection Naperville”",
        body: [
          "A growing share of DuPage buyers ask ChatGPT or Google's AI Overview who to call before they ever open Maps. With ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          ", your website, reviews and listings spell out what you inspect and where, giving those tools a reason to point buyers your way.",
        ],
        points: [
          "Service answers in plain text",
          "Same details on every listing",
          "Structured data added",
          "Reviews naming Naperville",
        ],
        cta: "Run My AI Check",
        ui: {
          kind: "ai",
          query: "home inspection naperville",
          intro: "For a home inspection in Naperville,",
          bullets: [
            "IDFPR-licensed inspector",
            "Radon test on the same visit",
            "Weekend appointments open",
          ],
        },
      },
      {
        title: "A Site Chicago Buyers Can Book From in a Few Taps",
        body: [
          "Plenty of buyers find you late at night, after the offer is signed. Your site shows open times, add-ons and a sample report, takes the booking and sends the agent a copy, so nobody waits for business hours.",
        ],
        points: [
          "Live calendar on every page",
          "Agent copy on booking",
          "Add-ons picked online",
          "Sample report shown",
        ],
        cta: "Plan My Booking Site",
        ui: {
          kind: "website",
          url: "yourcompany.com",
          headline: "Book your Chicago home inspection",
          services: [
            "Home inspection",
            "Radon test",
            "Sewer scope",
            "Condo inspection",
          ],
        },
      },
    ],
  },
  regions: {
    title: "Where We Market Home Inspectors: Chicago Suburbs and Downstate",
    lead: "Chicago, its collar counties and the downstate cities each lean on different agents and housing, so pages and service areas follow those lines.",
    items: [
      {
        name: "City of Chicago",
        cities: "Chicago · Evanston · Oak Park",
        focus: "Condo, two-flat and older-home sewer scope pages",
      },
      {
        name: "DuPage County",
        cities: "Naperville · Wheaton · Downers Grove",
        focus: "Radon and new-build pages for family buyers",
      },
      {
        name: "Fox Valley & Kane",
        cities: "Aurora · Elgin · St. Charles",
        focus: "Suburb rankings along a fast-growing corridor",
      },
      {
        name: "Will County & South Suburbs",
        cities: "Joliet · Orland Park · Tinley Park",
        focus: "Map Pack work across wide service areas",
      },
      {
        name: "North Shore & Lake County",
        cities: "Highland Park · Libertyville · Waukegan",
        focus: "Higher-end listings and agent outreach",
      },
      {
        name: "Rockford & Central Illinois",
        cities: "Rockford · Peoria · Bloomington-Normal · Springfield",
        focus: "City pages where few inspectors compete online",
      },
    ],
    other: "Covering a different Illinois town? We'll add it to your plan.",
  },
  reviews: {
    title: "Local Owners Who Rate Zonic Media 5.0",
    lead: "Google reviews from service businesses we've helped grow.",
  },
  pricing: {
    title: "Home Inspector Lead Generation: Illinois Plans and Pricing",
    lead: [
      "Stay only while the bookings justify it. Every tier renews monthly, and ad spend reaches Google untouched, at a 0% markup. For the rest of our work, see ",
      { href: "/services", label: "everything Zonic Media offers" },
      ".",
    ],
    compareTitle: "Illinois Plans Side by Side for Inspectors",
    compareLead: "From one suburb to statewide coverage.",
    addOnsTitle: "Add-Ons When Chicago Contracts Spike",
    addOnsLead: "Extra city pages or a bigger ad push for the spring rush.",
    customTitle: "Several inspectors across Chicagoland?",
    customText: "Share each territory and we'll quote one combined plan.",
  },
  faq: {
    title: "What Illinois Inspectors Ask Before Hiring Us",
    lead: "Licensing, radon, condos, cost pages and downstate towns. Still deciding? Ring our team.",
    items: [
      {
        q: "Is my home inspector license Illinois-wide, and should I show it?",
        a: "Yes on both counts. IDFPR issues one license that covers the whole state, and showing it builds trust. Your number goes on the Google profile, site footer, report pages and agent page, so buyers and agents can confirm it in seconds.",
      },
      {
        q: "Should my website answer “home inspection cost Illinois” searches?",
        a: "Yes, without turning the page into a price list. Explain what changes the fee, such as size, age, condo versus house and add-ons, then invite a quick quote request. That page catches buyers comparing options and gives agents something useful to share.",
      },
      {
        q: "Do I need a separate license to sell radon testing in Illinois?",
        a: "Yes. Paid radon measurement in Illinois requires a license from the Illinois Emergency Management Agency, separate from your home inspector license. Once you hold it, we build a radon page, list it on your profile and add it at booking, since sellers must give buyers a radon disclosure.",
      },
      {
        q: "Can I win “home inspector Rockford IL” searches from a nearby town?",
        a: "Yes, if Rockford sits in your real service area. Maps favors inspectors close to the searcher, so we pair a Rockford page with reviews from Rockford jobs and a profile that lists the city. A staffed Rockford address helps most if you can run one.",
      },
      {
        q: "Is it worth marketing condo and two-flat inspections on their own?",
        a: "In Chicago, yes. Condo buyers search differently from house buyers, and two-flat or three-flat purchases need a wider scope. Separate pages with their own photos and questions rank for those searches and show agents you handle the city's common building types.",
      },
      {
        q: "How long does local SEO take for an inspector in DuPage or Cook County?",
        a: "Expect profile and ad changes to show within a few weeks, and suburb page rankings to build over roughly three to six months. Dense areas like Naperville take longer than Rockford or Peoria. Monthly reports show rankings, calls and booked inspections so you can judge progress.",
      },
      {
        q: "What do Illinois inspectors pay for your plans?",
        a: "The $297, $750 and $1,500 tiers each bill monthly. Nothing is locked beyond the current month, and any Google Ads budget is billed at a 0% markup. Covering extra suburbs or downstate cities simply means a larger tier.",
      },
    ],
  },
  audit: {
    title: "Claim a Free Illinois Home Inspector Marketing Audit",
    lead: [
      "Our team pulls your ranking in every Chicago neighborhood and suburb on your list, grades the profile, the site and the review count, and pinpoints where buyers book someone else. Inspecting near the state line? Zonic also runs inspector marketing in ",
      {
        href: "/services/home-inspector-marketing/indiana",
        label: "Indiana",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/wisconsin",
        label: "Wisconsin",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/missouri",
        label: "Missouri",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/kentucky",
        label: "Kentucky",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/michigan",
        label: "Michigan",
      },
      ".",
    ],
    points: [
      "Every suburb on your map checked",
      "Radon and condo searches tested",
      "No long contract, tiers from $297",
    ],
    form: {
      formType: "home-inspector-marketing-illinois",
      badge: "Free Illinois audit",
      title: "Request Your Free Illinois Audit",
      subtitle: "Quick to request, free and with no strings.",
      submitText: "Send My Illinois Audit",
      messageLabel: "Your Illinois service areas and add-ons",
      messagePlaceholder: "e.g. Naperville and Aurora, radon and sewer scope",
    },
  },
  banner: {
    title: "Be the Inspector Illinois Agents Send Clients To",
    lead: "Find out, free, where your pin lands in each neighborhood and suburb you cover.",
    icons: ["building", "inspect"],
  },
};
