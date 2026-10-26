import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* NORTH CAROLINA PLUMBING MARKETING — redesign draft content (24 Oct 2026).
   Semrush US (24 Oct): resource_organic has no ranking data for the live
   URL, so the title keeps its head term "plumbing marketing agency in
   north carolina". Volumes used: well pump repair near me 3,600 · plumber
   charlotte nc 1,600 · plumber raleigh nc 1,000 · plumber durham nc 720 ·
   plumber greensboro nc 720 · water heater repair raleigh 480 · plumber
   cary nc 480 · plumber wilmington nc 480 · emergency plumber charlotte
   390 · drain cleaning charlotte 320. Angles from web research: Charlotte
   and Triangle growth, private wells and septic systems in rural and
   coastal counties. */

export const CONTENT: LocationContent = {
  draftSlug: "north-carolina-2",
  liveUrl: "/services/plumbing-marketing-agency/north-carolina",
  parent: {
    href: "/services/plumbing-marketing-agency",
    label: "Plumbing Marketing Agency",
    niche: "Plumbing",
  },
  place: "North Carolina",
  meta: {
    title: "Plumbing Marketing Agency in North Carolina | Charlotte",
    description:
      "North Carolina plumbing marketing for Charlotte, Raleigh, Durham and rural towns: Map Pack rankings, plumber SEO, Google Ads and well pump and septic calls.",
    keywords: [
      "plumbing marketing agency north carolina",
      "plumber charlotte nc",
      "plumber raleigh nc",
      "plumbing seo raleigh",
      "well pump repair near me",
      "plumbing company charlotte nc",
    ],
  },
  palette: PALETTES.tealAmber,
  hero: {
    h1: "North Carolina Plumbing Marketing Agency From Charlotte to the Coast",
    h1NoWrap: "to the Coast",
    lead: [
      "New subdivisions around Charlotte and Raleigh and well-and-septic homes out in the country all start with a Google search. Our ",
      {
        href: "/services/plumbing-marketing-agency",
        label: "plumbing marketing agency",
      },
      " gets your company found in both, with Map Pack rankings, city pages, ads and reviews built for North Carolina.",
    ],
    cta: "Get My NC Plumbing Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 from Charlotte to Wilmington",
        sub: "Map Pack rankings in each North Carolina city you serve",
        chips: [
          "Charlotte",
          "Raleigh",
          "Durham",
          "Greensboro",
          "+ your county",
        ],
      },
      left: {
        icon: "drop",
        title: "More well pump calls",
        sub: "Pages built for rural well and water searches",
      },
      right: {
        icon: "home",
        title: "Jobs in new subdivisions",
        sub: "Service areas that grow with Wake and Mecklenburg",
      },
      bottom: {
        title: "Recommended by AI search",
        sub: "Named in ChatGPT, Gemini and AI Overviews",
      },
    },
  },
  services: {
    title: "What We Do for North Carolina Plumbing Companies",
    lead: "We run every channel that brings North Carolina plumbers more calls.",
    cta: "Review My NC Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Placement in Charlotte, Raleigh and Beyond",
        desc: "We rebuild your Google profile with the right categories, service areas and real job photos so you rank in each North Carolina city you cover.",
        points: [
          "Category and service cleanup",
          "Triangle and Charlotte areas",
          "Weekly Google posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization service",
          },
        ],
      },
      {
        icon: "search",
        title: "City Pages and Plumber SEO",
        desc: "Pages for every town and job, like water heater repair in Raleigh or drain cleaning in Charlotte, written to rank and to convert.",
        points: [
          "One page per city",
          "Well and septic pages",
          "Citations kept consistent",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-plumber",
            label: "Plumber SEO services",
          },
        ],
      },
      {
        icon: "target",
        title: "Search Ads and Local Services Ads",
        desc: "Google Ads for urgent jobs and Local Services Ads with the Google Guaranteed badge, aimed only at the counties you actually drive to.",
        points: [
          "Emergency-only campaigns",
          "Google Guaranteed listing",
          "County-level targeting",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for plumbers" },
        ],
      },
      {
        icon: "monitor",
        title: "A Website Built for NC Homeowners",
        desc: "A quick mobile site with click-to-call, online booking and clear pages for city water, well and septic customers alike.",
        points: [
          "Click-to-call header",
          "Booking in a few taps",
          "Pages for rural customers",
        ],
        links: [
          {
            href: "/services/plumbing-website-design",
            label: "Websites for plumbers",
          },
          { href: "/services/web-design", label: "Web design services" },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Name Your Town",
        desc: "Review requests go out after each visit with a prompt to describe the job, so new reviews help you rank in Cary or Concord.",
        points: [
          "Request sent after each visit",
          "Replies drafted for you",
          "Rating trends tracked",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for home service trades",
          },
        ],
      },
      {
        icon: "shield",
        title: "Fixes for Locked or Unverified Listings",
        desc: "Suspended profile or a verification that never finished? We find the cause, fix it and appeal, with 900+ profiles reinstated to date.",
        points: [
          "Root cause found first",
          "Verification walk-through",
          "Appeal tracked to the end",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Get a profile reinstated",
          },
          {
            href: "/services/gmb-verification-help",
            label: "GBP verification support",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Ways We Bring North Carolina Plumbers More Work",
    lead: "Ranking on the map, getting named by AI and turning mobile visits into booked calls.",
    rows: [
      {
        title: "Rank in the Charlotte Map Pack for “Plumber Near Me”",
        body: [
          "Charlotte homeowners with a leaking water heater rarely scroll past the map. We tighten your Google profile, add pages for Matthews, Huntersville and Concord, and build reviews from those areas so your listing earns a place in the top three.",
        ],
        points: [
          "Suburb service areas mapped",
          "Job photos posted weekly",
          "After-hours calls answered",
          "Rank grid checked monthly",
        ],
        cta: "Check My Charlotte Ranking",
        ui: {
          kind: "maps",
          query: "plumber charlotte nc",
          city: "Charlotte",
          category: "Well pump & plumbing service",
        },
      },
      {
        title: "Be the Name AI Gives for Raleigh Plumbing Jobs",
        body: [
          "Ask Gemini or ChatGPT for a good plumber in Raleigh and it names a few companies drawn from websites, listings and reviews. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " shape those sources so your company is one of the names it offers.",
        ],
        points: [
          "Clear answers on service pages",
          "Matching details everywhere",
          "Structured data added",
          "Reviews that name services",
        ],
        cta: "See If AI Recommends Me",
        ui: {
          kind: "ai",
          query: "water heater repair raleigh",
          intro: "For water heater repair in Raleigh,",
          bullets: [
            "Tank and tankless repairs",
            "Serves Cary, Apex and Garner",
            "Trusted by Wake County families",
          ],
        },
      },
      {
        title: "A Mobile Site That Books Well and Septic Calls",
        body: [
          "Rural callers often reach your site from a phone with one bar of signal. We build light pages that load fast, put the call button up top and list well pump, water treatment and septic line services clearly.",
        ],
        points: [
          "Loads on a weak signal",
          "Call button always visible",
          "Well and septic menus",
          "Short booking form",
        ],
        cta: "Plan My New Website",
        ui: {
          kind: "website",
          url: "yourcompany.com",
          headline: "Well pump out? We can be there today.",
          services: [
            "Well pump repair",
            "Water heaters",
            "Septic lines",
            "Drain cleaning",
          ],
        },
      },
    ],
  },
  regions: {
    title: "North Carolina Areas and Cities We Serve",
    lead: "Each part of the state looks for plumbers in its own way, so we plan pages, service areas and ads region by region.",
    items: [
      {
        name: "Charlotte Metro",
        cities: "Charlotte · Concord · Gastonia · Huntersville",
        focus: "Suburb pages for new builds and older ranch homes",
      },
      {
        name: "The Triangle",
        cities: "Raleigh · Durham · Cary · Chapel Hill",
        focus: "Water heater and repipe searches across Wake County",
      },
      {
        name: "The Triad",
        cities: "Greensboro · Winston-Salem · High Point",
        focus: "Map Pack work for three cities that share one market",
      },
      {
        name: "Coastal Carolina",
        cities: "Wilmington · Jacksonville · New Bern",
        focus: "Septic, storm flooding and vacation-rental plumbing pages",
      },
      {
        name: "Western Mountains",
        cities: "Asheville · Hickory · Boone",
        focus: "Well pump and frozen line searches in hill country",
      },
      {
        name: "Sandhills & Eastern NC",
        cities: "Fayetteville · Greenville · Rocky Mount",
        focus: "Rural service areas with well and septic coverage",
      },
    ],
    other: "Don't see your North Carolina town? Ask and we'll map it.",
  },
  reviews: {
    title: "Google Reviews From Trade Owners We Work With",
    lead: "See how home service owners rate working with us.",
  },
  pricing: {
    title: "Plumbing Marketing Pricing for North Carolina",
    lead: [
      "Plans stay month to month, with a 0% markup on whatever you spend on ads. Plumbers with a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google profile",
      },
      " can start with getting it reinstated.",
    ],
    compareTitle: "See What Each NC Plan Includes",
    compareLead: "From one metro to statewide coverage.",
    addOnsTitle: "Extras for Storms and Busy Seasons",
    addOnsLead:
      "Add city pages or campaigns when hurricanes or cold snaps bring a rush.",
    customTitle: "Serving both the Triangle and Charlotte?",
    customText:
      "Share your locations and counties, and we'll build a plan that fits.",
  },
  faq: {
    title: "Answers for North Carolina Plumbers",
    lead: "What it costs, where we work and how we handle rural, storm and AI searches.",
    items: [
      {
        q: "What does plumbing marketing cost in North Carolina?",
        a: "You choose from three plans at $297, $750 or $1,500 per month, and each runs month to month, so you can stop whenever you like. Ad spend is separate and carries a 0% markup. A single-metro shop can begin on the first plan and add cities later.",
      },
      {
        q: "Can you help my plumbing company get calls from rural North Carolina?",
        a: "Yes. Rural homeowners search for things like well pump repair and septic line work, often from towns far from your shop. We build pages for those services and the counties you cover, match your service area to them and run ads only where you're willing to drive.",
      },
      {
        q: "Do you market well pump and water treatment services?",
        a: "We do. Well pump repair, pressure tank swaps and water softener or filter installs each get their own page and a service listing on your Google profile, so people outside city water lines find you instead of a directory.",
      },
      {
        q: "Which North Carolina cities do you build pages for?",
        a: "Any city you serve. Common starting points are Charlotte or Raleigh plus nearby suburbs like Cary, Apex, Matthews and Concord. From there we add Durham, Greensboro, Winston-Salem, Wilmington or Asheville as your crews expand.",
      },
      {
        q: "Will ChatGPT or Google's AI Overviews recommend my plumbing company?",
        a: "They can. AI tools pull from your website, Google profile, reviews and directory listings. We write clear answers on your service pages, make your details match everywhere and add structured data, so those tools can confidently name you for a search like plumber in Durham.",
      },
      {
        q: "Is Google Ads or SEO better for a Charlotte or Raleigh plumber?",
        a: "Both, for different jobs. Ads bring emergency calls this week, while Maps and SEO bring in organic calls with no click charges. We usually start ads for urgent work, grow organic rankings alongside them and shift the mix as rankings climb.",
      },
      {
        q: "My Google profile won't verify. Can you help?",
        a: "Yes. Verification often stalls for plumbers who work from home or share an address. We sort out the address and service-area settings, prepare you for video verification and stay with it until the profile is live. If it gets suspended, we handle that appeal too.",
      },
    ],
  },
  audit: {
    title: "Claim Your Free North Carolina Plumbing Audit",
    lead: [
      "We test your map position city by city, then look over your Google profile, website and reviews to show where North Carolina customers call instead.",
    ],
    points: [
      "Every NC city you serve, checked",
      "Rural well and septic searches included",
      "Month-to-month, from $297 a month",
    ],
    form: {
      formType: "plumbing-marketing-north-carolina",
      badge: "Free NC audit",
      title: "Get Your Free NC Plumbing Audit",
      subtitle: "Free to request, with nothing to sign.",
      submitText: "Send My NC Audit",
      messageLabel: "Your NC towns and services",
      messagePlaceholder: "e.g. Raleigh and Cary, water heaters and well pumps",
    },
  },
  banner: {
    title: "Make Your Company North Carolina's First Call for Plumbing",
    lead: "Kick things off with a no-cost review of your rankings in every county you cover.",
    icons: ["drop", "home"],
  },
};
