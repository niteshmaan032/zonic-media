import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* ILLINOIS HVAC MARKETING — redesign draft content (25 Oct 2026).
   Semrush API units were exhausted, so no ranking report or volumes were
   pulled; keywords come from the live page and web research. Rank safety:
   the live title's core term "HVAC Marketing Agency in Illinois" stays in
   the title, and every live keywords-meta phrase sits in the title, H1, an
   H2/H3 or an FAQ question (hvac companies in illinois, hvac company
   bloomington il, hvac marketing companies near me, marketing for hvac
   companies, hvac digital marketing agency, hvac local marketing services,
   hvac seo chicago).
   Web research (25 Oct): Illinois has no statewide HVAC contractor
   license; Aurora, Evanston, Elgin and Springfield run local exams or
   registration, Chicago ties permitted work to its contractor licensing,
   EPA 608 is federal. Top Chicago results lead with furnace repair, boiler
   and radiator service, 24/7 no-heat calls and AC tune-ups. */

export const CONTENT: LocationContent = {
  draftSlug: "illinois-2",
  liveUrl: "/services/hvac-marketing-agency/illinois",
  parent: {
    href: "/services/hvac-marketing-agency",
    label: "HVAC Marketing Agency",
    niche: "HVAC",
  },
  place: "Illinois",
  meta: {
    title: "HVAC Marketing Agency in Illinois | Chicago Furnace & AC Leads",
    description:
      "Illinois HVAC marketing for Chicago, the suburbs and downstate: Google Maps rankings, HVAC SEO, Local Services Ads and more furnace, boiler and AC calls.",
    keywords: [
      "hvac marketing agency illinois",
      "hvac companies in illinois",
      "hvac company bloomington il",
      "hvac marketing companies near me",
      "marketing for hvac companies",
      "hvac digital marketing agency",
      "hvac local marketing services",
      "hvac seo chicago",
      "furnace repair chicago",
      "boiler repair chicago",
    ],
  },
  palette: PALETTES.roseBlue,
  hero: {
    h1: "Illinois HVAC Marketing Agency for Chicagoland and Downstate",
    h1NoWrap: "and Downstate",
    lead: [
      "Chicago winters punish old furnaces and boilers, and the summer heat is just as hard on AC units. Our ",
      {
        href: "/services/hvac-marketing-agency",
        label: "HVAC marketing agency",
      },
      " team makes your company the first one Illinois homeowners see on Google Maps, in AI answers and in ads, from the city to Bloomington and Springfield.",
    ],
    cta: "Check My Illinois HVAC Rankings",
    tiles: {
      wide: {
        icon: "pin",
        title: "Chicagoland map-pack rankings",
        sub: "Ranked neighborhood by neighborhood, then out to the suburbs",
        chips: [
          "Chicago",
          "Naperville",
          "Aurora",
          "Bloomington",
          "+ your town",
        ],
      },
      left: {
        icon: "flame",
        title: "More no-heat calls booked",
        sub: "Furnace and boiler pages live before the first freeze",
      },
      right: {
        icon: "air",
        title: "A fuller summer AC schedule",
        sub: "Cooling offers ready when the heat arrives",
      },
      bottom: {
        title: "Steady work in both seasons",
        sub: "Heating jobs in winter, cooling jobs in summer",
      },
    },
  },
  services: {
    title: "Marketing for HVAC Companies From Chicago to Champaign",
    lead: "One team runs each channel Illinois homeowners use to find HVAC help.",
    cta: "Review My Illinois Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Rankings for Furnace and AC Searches",
        desc: "We set heating and cooling categories, service areas, hours and job photos so your profile climbs for furnace and AC repair near each crew.",
        points: [
          "Heating and cooling categories",
          "Suburb service areas",
          "Weekly job photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "HVAC SEO: Chicago Neighborhoods, Suburbs and Downstate",
        desc: "Pages for every neighborhood, suburb and core job, from boiler repair in Chicago to furnace installs in Naperville and Peoria.",
        points: [
          "Neighborhood and town pages",
          "Boiler and furnace pages",
          "Spanish pages where useful",
        ],
        links: [
          {
            href: "/services/industry/local-seo-services-for-hvac",
            label: "Local SEO for HVAC",
          },
        ],
      },
      {
        icon: "target",
        title: "Local Services Ads and Google Ads for No-Heat Calls",
        desc: "Emergency heating campaigns and Local Services Ads that grow as temperatures fall, with every call recorded and matched to the job.",
        points: [
          "Cold-snap ad schedules",
          "Google Guaranteed badge",
          "Every call recorded",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "HVAC Websites That Book Furnace and AC Visits",
        desc: "Quick-loading mobile pages with call and booking buttons up top, so a homeowner with a cold house books you before calling anyone else.",
        points: [
          "Call button on every page",
          "Online booking form",
          "Tune-up plan signups",
        ],
        links: [
          {
            href: "/services/hvac-website-design",
            label: "Websites for HVAC contractors",
          },
          { href: "/services/web-design", label: "Web design services" },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Mention the Town and the Repair",
        desc: "After each visit we text a review link and draft your replies, so new reviews keep naming your towns and the systems you fixed.",
        points: [
          "Review link after each visit",
          "Owner replies written for you",
          "Unhappy customers flagged",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home services",
          },
        ],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified HVAC Profiles Fixed",
        desc: "If your listing is suspended or verification stalls in the middle of heating season, we find the cause and file the fix. 900+ profiles reinstated.",
        points: [
          "Suspension cause found",
          "Video check coaching",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "GBP reinstatement",
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
    title: "How Illinois HVAC Contractors Win the Call With Us",
    lead: "Three places homeowners decide who to call, and the work we do in each one.",
    rows: [
      {
        title: "Rank First When Chicago Searches “Furnace Repair Near Me”",
        body: [
          "On a below-zero morning, Chicago homeowners open Google Maps and tap one of the top three pins. We sharpen the listing, publish a page for each neighborhood and ask every customer for a review, so your pin is there from Rogers Park to Beverly.",
        ],
        points: [
          "Heating categories set",
          "Pages by neighborhood",
          "Photos from real installs",
          "Hours for emergency calls",
        ],
        cta: "See My Chicago Map Rank",
        ui: {
          kind: "maps",
          query: "furnace repair chicago",
          city: "Chicago",
          category: "Heating contractor · Furnace repair",
        },
      },
      {
        title: "Be the Company AI Suggests for Chicago Boiler Repair",
        body: [
          "More Illinois homeowners ask ChatGPT, Gemini or Google's AI Overview which HVAC company to trust before they call. Those tools read your website, reviews and listings, so our ",
          { href: "/services/ai-seo-services", label: "AI SEO" },
          " work gives them clear reasons to name you.",
        ],
        points: [
          "Answer-style service pages",
          "Same details on every listing",
          "Reviews naming the system",
          "Schema markup throughout",
        ],
        cta: "See If AI Recommends Me",
        ui: {
          kind: "ai",
          query: "boiler repair chicago",
          intro: "For boiler and radiator repair in Chicago,",
          bullets: [
            "Steam and hot-water boilers serviced",
            "Same-day no-heat visits",
            "Praised by two-flat owners in Logan Square",
          ],
        },
      },
      {
        title: "Turn Cold Snaps Into Booked Furnace Jobs",
        body: [
          "When the forecast drops below zero, we raise your Local Services Ads and Google Ads coverage, switch on no-heat ad groups and track every ring. You see which calls came from which campaign and which ones became paid jobs.",
        ],
        points: [
          "Weather-timed ad schedules",
          "No-heat keywords only",
          "Calls recorded and tagged",
          "Jobs matched to campaigns",
        ],
        cta: "Plan My Winter Campaigns",
        ui: {
          kind: "calls",
          title: "Calls from this week's cold snap",
          calls: [
            {
              service: "No heat, furnace won't light",
              source: "Local Services Ads",
              when: "6:10 am",
            },
            {
              service: "Boiler banging, radiators cold",
              source: "Google Maps",
              when: "7:45 am",
            },
            {
              service: "Furnace replacement estimate",
              source: "Google Ads",
              when: "Yesterday",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "HVAC Local Marketing Services Across Illinois",
    lead: "Each part of Illinois has its own housing, heating systems and competitors, so we build pages and map coverage region by region.",
    items: [
      {
        name: "Chicago Neighborhoods",
        cities: "Logan Square · Lakeview · Beverly · Pilsen",
        focus: "Boiler, radiator and no-heat pages for prewar homes",
      },
      {
        name: "North Shore & Northwest Suburbs",
        cities: "Evanston · Skokie · Arlington Heights · Palatine",
        focus: "Furnace replacement and AC tune-up searches in larger homes",
      },
      {
        name: "DuPage & the Fox Valley",
        cities: "Naperville · Wheaton · Aurora · Elgin",
        focus: "Multi-zone and high-efficiency installs in newer subdivisions",
      },
      {
        name: "South Suburbs & Will County",
        cities: "Joliet · Orland Park · Tinley Park · Oak Lawn",
        focus: "Map coverage for crews that drive long service areas",
      },
      {
        name: "Rockford & Northern Illinois",
        cities: "Rockford · DeKalb · Crystal Lake · Freeport",
        focus: "Town pages for owner-run shops outside the metro",
      },
      {
        name: "Central Illinois",
        cities: "Bloomington · Normal · Peoria · Springfield · Champaign",
        focus:
          "City pages and ads for furnace and heat pump searches downstate",
      },
    ],
    other:
      "Serving another Illinois town? We'll build your coverage there too.",
  },
  reviews: {
    title: "What Service Owners Say After Working With Us",
    lead: "Real reviews, pulled from our own Google Business Profile.",
  },
  pricing: {
    title: "HVAC Marketing Plans for Illinois Contractors",
    compareTitle: "Compare Plans for Chicagoland and Downstate",
    addOnsTitle: "Extras for Polar Vortex Weeks",
    customTitle: "Crews in Chicago and downstate?",
  },
  faq: {
    title: "Questions for an HVAC Marketing Company in IL",
    lead: "Licensing, winter rushes, downstate towns and pricing. Prefer a quick call? We're happy to talk.",
    items: [
      {
        q: "Do HVAC companies in Illinois need a state license, and should we show one?",
        a: "Illinois has no statewide HVAC contractor license, so the rules come from each city or village. Aurora, Evanston, Elgin and Springfield run their own exams or registration, and Chicago ties permitted work to its contractor licensing. We show the local licenses, insurance and EPA 608 certifications you hold on your site and Google profile.",
      },
      {
        q: "How do I catch no-heat calls when a Chicago cold snap hits?",
        a: "Prepare before the forecast turns. We publish no-heat and furnace repair pages ahead of winter, set emergency hours on your profile, schedule Google posts and raise Local Services Ads coverage the day the cold arrives. Call tracking stays on, so you see which searches filled the board.",
      },
      {
        q: "Can you rank me for “HVAC company Bloomington IL” and other downstate searches?",
        a: "Yes. Bloomington, Normal, Peoria and Springfield each have their own map results, so we pair your Google profile with a page for every town you serve and ask customers there for reviews. Downstate maps are often less crowded than Chicago's, so progress can come sooner.",
      },
      {
        q: "Is boiler and radiator work worth marketing in Chicago?",
        a: "Yes. Much of Chicago's older housing still heats with steam or hot-water boilers, and those owners search for boiler repair, radiator service and boiler replacement by name. We build a page for each, add the services to your Google profile and run ads for them in the neighborhoods where your techs work.",
      },
      {
        q: "What does an HVAC digital marketing agency handle for an Illinois contractor?",
        a: "Everything that brings a homeowner to your phone: your Google Business Profile, SEO and city pages, Google Ads and Local Services Ads, your website, reviews and AI search visibility. One team runs it all, with an HVAC marketing consultant for Illinois as your single contact, reporting monthly and shifting focus between heating and cooling as the seasons change.",
      },
      {
        q: "Does my agency need to be among the HVAC marketing companies near me?",
        a: "Not really. What matters is knowing how your towns search and checking your rank where your customers live. We track your map position on a grid across each suburb and neighborhood you serve, and we're a call or video meeting away whenever you need us.",
      },
      {
        q: "What do your Illinois HVAC plans cost?",
        a: "You can choose $297, $750 or $1,500 monthly. Every plan runs month to month. Any ad spend goes to Google at a 0% markup. Shops serving one suburb often start small, while multi-county crews usually pick a plan with ads and more town pages.",
      },
    ],
  },
  audit: {
    title: "Free Illinois HVAC Audit: See Who Gets Your Calls",
    lead: [
      "Send us your towns and services. We'll map your rank across each one, look over your Google profile, reviews and ",
      { href: "/services/web-design", label: "website" },
      ", then list the furnace and AC searches you're missing.",
    ],
    points: [
      "Rank grid for every town you serve",
      "Heating and cooling searches tested",
      "Month-to-month plans from $297",
    ],
    form: {
      formType: "hvac-marketing-illinois",
      badge: "Free Illinois audit",
      title: "Request My Illinois HVAC Audit",
      subtitle: "Free, with no contract attached.",
      submitText: "Start My Illinois Audit",
      messageLabel: "Your Illinois towns and HVAC services",
      messagePlaceholder:
        "e.g. Naperville and Wheaton, furnace repair and AC installs",
    },
  },
  banner: {
    title: "Be Chicagoland's First Call When the Furnace Quits",
    lead: "Your free audit charts your rank across every Illinois town you cover, block by block.",
    icons: ["flame", "snow"],
  },
};
