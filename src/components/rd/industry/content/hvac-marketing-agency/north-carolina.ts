import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* NORTH CAROLINA HVAC MARKETING — redesign draft content (25 Oct 2026).
   Semrush API units were exhausted, so no ranking report or volumes were
   pulled; keywords come from the live page and web research. Rank safety:
   the live title's core term "HVAC Marketing Agency in North Carolina"
   stays in the title, and every live keywords-meta phrase sits in the
   title, H1, an H2/H3 or an FAQ question (hvac companies in nc, hvac
   company charlotte nc, commercial hvac charlotte nc, hvac marketing
   companies near me, marketing for hvac companies, hvac digital marketing
   agency, hvac seo raleigh).
   Web research (25 Oct): the State Board of Examiners of Plumbing, Heating
   and Fire Sprinkler Contractors issues heating licenses H-1 (hydronic and
   boilers), H-2 (forced air over 15 tons) and H-3 (15 tons or less),
   Class I or Class II; refrigeration has its own board. Top Charlotte
   results lead with heat pump repair, 24/7 service and maintenance plans;
   the mountains (Asheville, Boone) need cold-climate heat pumps and
   dual-fuel, the coast needs salt-air and storm service. */

export const CONTENT: LocationContent = {
  draftSlug: "north-carolina-2",
  liveUrl: "/services/hvac-marketing-agency/north-carolina",
  parent: {
    href: "/services/hvac-marketing-agency",
    label: "HVAC Marketing Agency",
    niche: "HVAC",
  },
  place: "North Carolina",
  meta: {
    title: "HVAC Marketing Agency in North Carolina | Heat Pump SEO & Ads",
    description:
      "North Carolina HVAC marketing from Charlotte and Raleigh to Asheville and Wilmington: Google Maps rankings, HVAC SEO, Local Services Ads and more heat pump calls.",
    keywords: [
      "hvac marketing agency north carolina",
      "hvac companies in nc",
      "hvac company charlotte nc",
      "commercial hvac charlotte nc",
      "hvac marketing companies near me",
      "marketing for hvac companies",
      "hvac digital marketing agency",
      "hvac seo raleigh",
      "heat pump repair charlotte",
      "heat pump installation raleigh",
    ],
  },
  palette: PALETTES.violetCyan,
  hero: {
    h1: "North Carolina HVAC Marketing Agency for Heat Pump Contractors",
    h1NoWrap: "Heat Pump",
    lead: [
      "North Carolina runs on heat pumps, from chilly mountain nights in Boone to muggy Wilmington summers. Our ",
      {
        href: "/services/hvac-marketing-agency",
        label: "HVAC marketing agency",
      },
      " puts your company in front of those homeowners on the map, in ChatGPT and Gemini answers and in local ads, from Charlotte to the Triangle.",
    ],
    cta: "Start My North Carolina Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack spots in Charlotte and Raleigh",
        sub: "Plus the Triad, the mountains and the coast",
        chips: [
          "Charlotte",
          "Raleigh",
          "Greensboro",
          "Asheville",
          "+ your town",
        ],
      },
      left: {
        icon: "heatPump",
        title: "More heat pump installs",
        sub: "Pages for new systems, upgrades and dual-fuel",
      },
      right: {
        icon: "star",
        title: "Reviews that win the click",
        sub: "Fresh ratings that name your towns",
      },
      bottom: {
        title: "Booked in every season",
        sub: "Cold-climate and salt-air offers matched to each region",
      },
    },
  },
  services: {
    title: "Marketing for HVAC Companies, Mountains to the Outer Banks",
    lead: "North Carolina HVAC marketing, coast to mountains, run by one team.",
    cta: "Review My NC Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Visibility From Lake Norman to the Coast",
        desc: "We pick the right HVAC categories, service areas and install photos so your listing climbs in Charlotte, Raleigh and each town you cover.",
        points: [
          "Heat pump services listed",
          "Town service areas",
          "Install photos weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "HVAC SEO: Raleigh, Charlotte and Every Town You Serve",
        desc: "Pages for heat pump repair, installs and dual-fuel systems, plus a page for each Triangle, Triad and Charlotte-area town you cover.",
        points: [
          "Town-by-town pages",
          "Dual-fuel and mini-split pages",
          "Directory listings fixed",
        ],
        links: [
          {
            href: "/services/industry/local-seo-services-for-hvac",
            label: "SEO for HVAC companies",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads Built for Repair, Install and Storm Calls",
        desc: "Search campaigns and Local Services Ads for heat pump repair and new systems, widened before hurricanes and cold snaps, with every call tracked.",
        points: [
          "Repair and install campaigns",
          "Local Services Ads setup",
          "Call tracking included",
        ],
        links: [{ href: "/services/google-ads", label: "Google Ads services" }],
      },
      {
        icon: "monitor",
        title: "HVAC Websites With Booking Built In",
        desc: "Pages that load fast on a phone, show your number up top and let homeowners pick a visit time without calling.",
        points: [
          "Number fixed on screen",
          "Pick-a-time booking",
          "Service area map",
        ],
        links: [
          {
            href: "/services/hvac-website-design",
            label: "Websites for HVAC companies",
          },
          { href: "/services/web-design", label: "Web design" },
        ],
      },
      {
        icon: "star",
        title: "Google Reviews After Every Heat Pump Visit",
        desc: "A short text asks each customer for a review right after the visit, and we write the replies, so your listing keeps looking busy and trusted.",
        points: [
          "Review request by text",
          "Replies handled for you",
          "Bad reviews flagged fast",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for home services",
          },
        ],
      },
      {
        icon: "shield",
        title: "Suspended or Stuck NC Profiles, Back on Google",
        desc: "When a listing gets suspended or a verification won't finish, calls stop. We find the reason, fix it and file a clean appeal, with 900+ profiles reinstated.",
        points: [
          "Reason found and fixed",
          "Verification call prep",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Get a profile reinstated",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Fix a stuck verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Our HVAC Marketing Company Grows North Carolina Shops",
    lead: "Where NC homeowners pick a contractor, and what we improve in each spot.",
    rows: [
      {
        title: "Show Up First for “HVAC Company Charlotte NC”",
        body: [
          "When a heat pump stops cooling in July, Charlotte homeowners pick from the first few map listings. We refine your profile, add pages for Ballantyne, Huntersville and Matthews, and keep reviews arriving, so your listing stays in that short list.",
        ],
        points: [
          "Rank tracked on a grid",
          "Heat pump categories",
          "Suburb landing pages",
          "New photos every week",
        ],
        cta: "See My Charlotte Ranking",
        ui: {
          kind: "maps",
          query: "hvac company charlotte nc",
          city: "Charlotte",
          category: "HVAC contractor · Heat pump repair",
        },
      },
      {
        title: "Be the Contractor AI Names for Heat Pumps in Raleigh",
        body: [
          "Before booking an install, many Triangle homeowners ask an AI assistant like ChatGPT or Gemini who to call. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " give those tools clear facts about you, from services and towns to licenses and reviews, so your name comes up.",
        ],
        points: [
          "Pages that answer questions",
          "Licenses listed clearly",
          "Same details everywhere",
          "Structured data on pages",
        ],
        cta: "Is AI Recommending Me?",
        ui: {
          kind: "ai",
          query: "heat pump installation raleigh",
          intro: "For a new heat pump in Raleigh,",
          bullets: [
            "Dual-fuel and variable-speed systems",
            "Licensed for homes and light commercial",
            "Praised for clean installs in Cary and Apex",
          ],
        },
      },
      {
        title: "Turn Website Visits Into Booked Heat Pump Jobs",
        body: [
          "Homeowners in Asheville want cold-climate heat pump answers, while Wilmington owners ask about salt air and storm prep. We build an ",
          { href: "/services/hvac-website-design", label: "HVAC website" },
          " with pages for each, a call button that stays on screen and online booking in a few taps.",
        ],
        points: [
          "Region-specific service pages",
          "Sticky call button",
          "Online booking",
          "Maintenance plan page",
        ],
        cta: "Plan My New Website",
        ui: {
          kind: "website",
          url: "yourcompany.com",
          headline: "Heat pump repair and installs across Charlotte",
          services: [
            "Heat pump repair",
            "New system installs",
            "Ductless mini-splits",
            "Maintenance plans",
          ],
        },
      },
    ],
  },
  regions: {
    title: "North Carolina HVAC Markets We Cover, Region by Region",
    lead: "Mountain towns, Piedmont metros and coastal communities each call for different HVAC work, so we plan pages, map coverage and ads one region at a time.",
    items: [
      {
        name: "Charlotte Metro & Lake Norman",
        cities: "Charlotte · Huntersville · Mooresville · Matthews",
        focus: "Suburb pages for fast-growing neighborhoods and new builds",
      },
      {
        name: "The Triangle",
        cities: "Raleigh · Durham · Cary · Apex · Chapel Hill",
        focus: "Heat pump install pages and AI answers for newcomers",
      },
      {
        name: "Piedmont Triad",
        cities: "Winston-Salem · Greensboro · Burlington · High Point",
        focus: "Older-home upgrades and duct work in established neighborhoods",
      },
      {
        name: "Western Mountains",
        cities: "Asheville · Hendersonville · Boone",
        focus: "Cold-climate heat pump and dual-fuel pages for colder winters",
      },
      {
        name: "Wilmington & the Coast",
        cities: "Wilmington · Jacksonville · Morehead City · Outer Banks",
        focus: "Salt-air equipment care and hurricane-season service",
      },
      {
        name: "Eastern NC & the Sandhills",
        cities: "Greenville · Fayetteville · Goldsboro · Rocky Mount",
        focus: "Town pages and ads for shops covering wide rural areas",
      },
    ],
    other: "Covering a town not listed here? We'll add it to your plan.",
  },
  reviews: {
    title: "Rated 5.0 on Google by NC Service Owners",
    lead: "Real feedback from local service companies we work with.",
  },
  pricing: {
    title: "Monthly HVAC Marketing Plans in North Carolina",
    compareTitle: "North Carolina Plans, Compared",
    addOnsTitle: "Extras for Hurricane and Cold-Snap Weeks",
    customTitle: "Branches in Charlotte and Raleigh?",
  },
  faq: {
    title: "Answers for North Carolina HVAC Contractors",
    lead: "Licenses, commercial work, regions and pricing, answered plainly. Rather speak to someone? Phone us.",
    items: [
      {
        q: "Should HVAC companies in NC show their H-1, H-2 or H-3 license?",
        a: "Yes. The State Board of Examiners of Plumbing, Heating and Fire Sprinkler Contractors issues heating licenses: H-1 for boilers and hydronic heat, H-2 for forced-air systems over 15 tons, and H-3 for systems of 15 tons or less. We show your license group and number on your site and Google profile so buyers can check them.",
      },
      {
        q: "Will you market our commercial HVAC Charlotte NC work separately from residential?",
        a: "Yes. Facility managers search for rooftop units, preventive maintenance and emergency service, not heat pump tune-ups. We build commercial pages for Charlotte and its suburbs, add commercial services to your profile and run separate ad campaigns, so business calls never get mixed in with homeowner leads.",
      },
      {
        q: "Do mountain and coastal homes in North Carolina need different HVAC pages?",
        a: "They do. Asheville and Boone homeowners ask about cold-climate heat pumps, dual-fuel systems and backup heat, while Wilmington and Outer Banks owners want salt-air coil protection and help after storms. We write pages for each region's problems, so your site answers the question the homeowner is actually asking.",
      },
      {
        q: "Do I have to hire one of the HVAC marketing companies near me in Raleigh?",
        a: "No. Results come from knowing how Triangle and Charlotte homeowners search, not from sharing a zip code. We check your rank on a map grid across each town you serve, send a plain monthly report and are easy to reach by phone or video.",
      },
      {
        q: "Is an HVAC digital marketing agency worth it for a small heat pump shop?",
        a: "It can be, if the work is focused. Small shops usually gain most from a complete Google profile, a few strong service pages and steady reviews, then add ads once the schedule can handle more. We start where the calls are closest and scale up as you hire.",
      },
      {
        q: "How soon will a North Carolina HVAC company see more calls?",
        a: "Ads and profile fixes usually move first, often within the first weeks. Rankings from new town pages and reviews take longer, generally a few months, and tend to come sooner in Greenville or Hickory than in central Charlotte or Raleigh. Your monthly report shows each change.",
      },
      {
        q: "What's the monthly cost of HVAC marketing in North Carolina?",
        a: "Plans cost $297, $750 or $1,500, with monthly billing; none needs a long contract, and ad spend reaches Google with a 0% markup. Single-metro shops often start on the first plan, while companies covering Charlotte and the Triangle usually need more pages and ads.",
      },
    ],
  },
  audit: {
    title: "Your Free North Carolina HVAC Audit Starts Here",
    lead: [
      "We'll grid-check your map rank in every North Carolina town you list, review your Google profile, ",
      { href: "/services/web-design", label: "website" },
      " and recent reviews, then send a short plan showing where heat pump and AC calls are slipping away.",
    ],
    points: [
      "Every town on your list checked",
      "Mountain, Piedmont and coast searches",
      "From $297 a month, month to month",
    ],
    form: {
      formType: "hvac-marketing-north-carolina",
      badge: "Free NC audit",
      title: "Get My North Carolina HVAC Audit",
      subtitle: "Free to request, with nothing to sign.",
      submitText: "Send My NC Audit",
      messageLabel: "Your NC towns and HVAC services",
      messagePlaceholder: "e.g. Cary and Apex, heat pump installs and repairs",
    },
  },
  banner: {
    title: "Be the Heat Pump Company North Carolina Calls First",
    lead: "Start with a free map-rank check across every town you serve.",
    icons: ["heatPump", "pin"],
  },
};
