import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* CALIFORNIA HVAC MARKETING — redesign draft content (25 Oct 2026).
   Rank safety: Semrush API units were exhausted, so no resource_organic or
   phrase_these calls ran; keywords come from the live page and web research.
   The live title's core term "HVAC Marketing Agency in California" stays in
   the title, and every phrase in the live route's keywords meta sits in the
   title, an H2/H3 or an FAQ question.
   Web research (25 Oct): HVAC contractors hold a CSLB C-20 license, and
   B&P Code 7030.5 requires the CSLB number in all advertising (websites,
   online listings, vehicle lettering); changeouts need a permit and Title
   24 often requires third-party HERS verification; state and utility heat
   pump rebates run through enrolled contractors and change often; top "hvac
   company los angeles" results compete on licensing, reviews, same-day
   service and indoor air quality; Spanish search across LA, the Inland
   Empire and the Central Valley. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "california-2",
  liveUrl: "/services/hvac-marketing-agency/california",
  parent: {
    href: "/services/hvac-marketing-agency",
    label: "HVAC Marketing Agency",
    niche: "HVAC",
  },
  place: "California",
  meta: {
    title: "HVAC Marketing Agency in California | Heat Pump & AC Leads",
    description:
      "California HVAC marketing for Los Angeles, San Diego, the Bay Area and Sacramento: Map Pack rankings, HVAC SEO, Google Ads, Spanish pages and heat pump leads.",
    keywords: [
      "hvac marketing agency california",
      "hvac marketing agency los angeles",
      "hvac companies in california",
      "hvac marketing companies near me",
      "marketing for hvac companies",
      "hvac digital marketing agency",
      "hvac local marketing services",
      "hvac seo california",
      "hvac company los angeles",
      "heat pump installer san diego",
    ],
  },
  palette: PALETTES.fuchsiaTeal,
  hero: {
    h1: "California HVAC Marketing Agency for Heat Pump and AC Calls",
    h1NoWrap: "Heat Pump",
    lead: [
      "California homeowners now compare heat pumps, rebates and Title 24 rules before they call anyone. Our ",
      {
        href: "/services/hvac-marketing-agency",
        label: "HVAC marketing agency",
      },
      " makes your company the one they find and trust, from Los Angeles and the Inland Empire to San Diego, Sacramento and the Bay Area, in English and Spanish.",
    ],
    cta: "Get My California HVAC Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack spots in every metro",
        sub: "Mild coastal cities and hot inland valleys alike",
        chips: [
          "Los Angeles",
          "San Diego",
          "San Jose",
          "Sacramento",
          "+ your county",
        ],
      },
      left: {
        icon: "heatPump",
        title: "More heat pump installs",
        sub: "Rebate and electrification pages that pre-sell the upgrade",
      },
      right: {
        icon: "translate",
        title: "Bookings in two languages",
        sub: "Spanish pages, posts and review requests",
      },
      bottom: {
        title: "Ready for heat waves and smoky weeks",
        sub: "AC repair and air-filtration pages queued up early",
      },
    },
  },
  services: {
    title: "What Our HVAC Digital Marketing Agency Runs in California",
    lead: "California HVAC digital marketing, every channel in one team's care.",
    cta: "Review My California Setup",
    items: [
      {
        icon: "pin",
        title: "Google Profiles Showing Your CSLB C-20 License",
        desc: "Categories, service areas, heat pump services and your CSLB number go on the profile, refreshed weekly with real jobsite photos.",
        points: [
          "C-20 number shown",
          "Heat pump services listed",
          "Jobsite photos each week",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "HVAC SEO: California City and Service Pages",
        desc: "Pages for AC repair, heat pump installs and furnace service in each city you cover, plus Title 24 and HERS answers homeowners look for.",
        points: [
          "Page per city and service",
          "Title 24 explainers",
          "Clean citations statewide",
        ],
        links: [
          {
            href: "/services/industry/local-seo-services-for-hvac",
            label: "HVAC local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Search Ads and Google Guaranteed Listings for HVAC",
        desc: "Heat pump, AC repair and furnace campaigns split by county, with Local Services Ads and every call recorded and tagged.",
        points: [
          "County-level campaigns",
          "Google Guaranteed badge",
          "Each call recorded",
        ],
        links: [{ href: "/services/google-ads", label: "Google Ads for HVAC" }],
      },
      {
        icon: "monitor",
        title: "Bilingual HVAC Websites With Rebate Pages",
        desc: "Mobile sites with a call bar, booking, financing and an English and Spanish switch, plus pages that explain heat pump rebates.",
        points: [
          "English and Spanish switch",
          "Rebate explainer pages",
          "Booking in a few taps",
        ],
        links: [
          {
            href: "/services/hvac-website-design",
            label: "HVAC website builds",
          },
          { href: "/services/web-design", label: "Custom websites" },
        ],
      },
      {
        icon: "star",
        title: "Reviews From Every California Install and Repair",
        desc: "Each finished visit triggers a review request by text, in Spanish when that suits the customer, plus owner replies drafted for your approval.",
        points: [
          "Requests after every visit",
          "Spanish requests too",
          "Replies ready to approve",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home services SEO",
          },
        ],
      },
      {
        icon: "shield",
        title: "Help When Google Suspends a California HVAC Profile",
        desc: "Suspensions and failed verifications stall calls overnight. We pinpoint the cause, fix what Google flagged and submit the appeal, backed by 900+ reinstated profiles.",
        points: [
          "Trigger identified",
          "Verification video coached",
          "Appeal run for you",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Get reinstated",
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
    title: "Marketing for HVAC Companies Across California's Metros",
    lead: "Map rankings, AI answers and tracked calls, each tied to installs and repairs you can count.",
    rows: [
      {
        title: "HVAC Marketing Agency Los Angeles Shops Use to Win the Map",
        body: [
          "When a Pasadena or Long Beach homeowner searches “hvac company los angeles,” Google shows three pins before anything else. We tune your categories, build neighborhood pages from the Valley to the South Bay and keep new reviews arriving so your pin holds its spot.",
        ],
        points: [
          "Neighborhood service areas",
          "Heat pump category added",
          "Grid tracking every week",
          "CSLB number on profile",
        ],
        cta: "Check My LA Map Ranking",
        ui: {
          kind: "maps",
          query: "hvac company los angeles",
          city: "Los Angeles",
          category: "HVAC contractor · Hablamos español",
        },
      },
      {
        title: "Be the Heat Pump Installer AI Names in San Diego",
        body: [
          "San Diego homeowners now type rebate and permit questions into ChatGPT and AI Overviews before choosing an installer. Through ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          ", we give your site clear answers, matching listings and reviews that name the job, so those tools put your company on the shortlist.",
        ],
        points: [
          "Rebate answer pages",
          "Consistent business details",
          "Service schema in place",
          "Reviews naming heat pumps",
        ],
        cta: "See If AI Recommends Me",
        ui: {
          kind: "ai",
          query: "heat pump installer san diego with rebates",
          intro: "For heat pump installs in San Diego,",
          bullets: [
            "Handles permits and HERS testing",
            "Serves Chula Vista and Escondido",
            "CSLB-licensed C-20 contractor",
          ],
        },
      },
      {
        title: "Know Which Ads Book Sacramento Heat Pump Jobs",
        body: [
          "Paid search only earns its keep when calls become installs. We record each call, label it by campaign, service and language, and shift spend toward the searches that book heat pump swaps, AC repairs and furnace work in your county.",
        ],
        points: [
          "Every call recorded",
          "Spanish calls labeled",
          "Junk LSA leads disputed",
          "Booked jobs reported monthly",
        ],
        cta: "Track My California Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Sacramento",
          calls: [
            {
              service: "Heat pump replacement quote",
              source: "Local Services Ads",
              when: "8:45 AM",
            },
            {
              service: "Reparación de aire acondicionado",
              source: "Google Ads · Spanish",
              when: "11:20 AM",
            },
            {
              service: "Furnace not igniting",
              source: "Google Maps",
              when: "3:10 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "HVAC Local Marketing Services by California Region",
    lead: "Coast, valley and desert homes need different systems, so pages, service areas and ads follow the region.",
    items: [
      {
        name: "Los Angeles & Orange County",
        cities: "Los Angeles · Long Beach · Pasadena · Anaheim · Irvine",
        focus: "Dense competition, so neighborhood pages and reviews lead",
      },
      {
        name: "San Diego Region",
        cities: "San Diego · Oceanside · Escondido · Chula Vista",
        focus: "Heat pump retrofits for coastal homes adding cooling",
      },
      {
        name: "SF Bay Area",
        cities: "Oakland · San Jose · Walnut Creek · Fremont · San Francisco",
        focus: "Electrification upgrades and permit-ready install pages",
      },
      {
        name: "Sacramento Valley",
        cities: "Sacramento · Roseville · Elk Grove · Folsom",
        focus: "Hot summers and Title 24 changeout questions",
      },
      {
        name: "Inland Empire & the Desert",
        cities: "Riverside · San Bernardino · Ontario · Palm Springs",
        focus: "Extreme-heat AC repair and fast-response ads",
      },
      {
        name: "Central Valley",
        cities: "Fresno · Bakersfield · Stockton · Modesto",
        focus: "Spanish-first pages and summer cooling campaigns",
      },
    ],
    other:
      "Covering Santa Rosa, Santa Barbara or Redding? We build pages there as well.",
  },
  reviews: {
    title: "Real Owner Reviews Behind Our 5.0 Rating",
    lead: "Google reviews from trades and service businesses we market.",
  },
  pricing: {
    title: "California HVAC Marketing Plans",
    compareTitle: "California Plans at a Glance",
    addOnsTitle: "Extras for Heat Season and Rebate Pushes",
    customTitle: "Running crews in several counties?",
  },
  faq: {
    title: "California HVAC Marketing Questions We Hear",
    lead: "Licensing, Title 24, heat pumps, smoke season and plans. Call if your question isn't here.",
    items: [
      {
        q: "Must my CSLB number appear on HVAC ads and my website?",
        a: "Yes. California law requires your CSLB license number in all advertising, which covers websites, online listings, search ads and truck lettering. We add your C-20 number to every page template, ad and profile we manage, so you stay compliant and homeowners can check you before they call.",
      },
      {
        q: "How do you market Title 24 and HERS-tested installs?",
        a: "With plain-language pages explaining that most system changeouts need a permit and often third-party HERS verification. Homeowners who understand the process trust the contractor who explained it. We add those pages for each city you serve and mention permit-ready installs in your profile and ads.",
      },
      {
        q: "Can you generate more heat pump leads in California?",
        a: "Yes. We build heat pump install pages for each county, cover rebate and electrification questions in plain words, add heat pump services to your Google profile and bid on upgrade searches. Programs change often, so we update the pages whenever incentives shift.",
      },
      {
        q: "What do top HVAC companies in California do differently online?",
        a: "They keep one accurate profile per real location, publish a page for each city and service, collect reviews after almost every visit and answer questions in English and Spanish. Those habits also feed AI answers. Our audit shows which of them your company is missing.",
      },
      {
        q: "Should I limit my search to HVAC marketing companies near me, or can you work remotely?",
        a: "Remote works well. Rankings, ads and websites are all managed online, and we study each city you serve, from Fresno to San Diego, before building pages. You get a direct contact, call recordings and a plain monthly report, without paying for a local office.",
      },
      {
        q: "How do I market air quality services during wildfire smoke?",
        a: "Get the pages ready before fire season. We publish filtration, air purifier and duct sealing pages for your cities, set them up as services in your Google profile, then queue posts and ads that go live when smoke advisories hit, so homeowners find you while they're searching.",
      },
      {
        q: "How are California HVAC marketing plans priced?",
        a: "Choose one of three month-to-month plans: $297, $750 or $1,500. Ad spend is paid to Google directly with a 0% markup. One-metro shops usually start small; companies covering several counties with ads and Spanish pages need the larger plans.",
      },
    ],
  },
  audit: {
    title: "Book Your Free California HVAC Marketing Review",
    lead: [
      "We test your map position in each California city you cover, then grade your Google profile, ",
      { href: "/services/web-design", label: "website" },
      ", reviews and Spanish searches against the companies outranking you.",
    ],
    points: [
      "Every county you serve checked",
      "CSLB and profile details reviewed",
      "Three plans, from $297 a month",
    ],
    form: {
      formType: "hvac-marketing-california",
      badge: "Free California audit",
      title: "Request a California HVAC Audit",
      subtitle: "Free, quick and no strings.",
      submitText: "Send My California Audit",
      messageLabel: "Counties and services you want to grow",
      messagePlaceholder: "e.g. Riverside County, heat pumps and AC repair",
    },
  },
  banner: {
    title: "Turn California's Heat Pump Shift Into Booked Installs",
    lead: "Start with a free rankings check across each county on your list.",
    icons: ["heatPump", "sun"],
  },
};
