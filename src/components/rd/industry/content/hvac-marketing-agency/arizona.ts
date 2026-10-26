import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* ARIZONA HVAC MARKETING — redesign draft content (25 Oct 2026).
   Rank safety: Semrush API units were exhausted, so no resource_organic or
   phrase_these calls ran; keywords come from the live page and web research.
   The live title's core term "HVAC Marketing Agency in Arizona" stays in the
   title, and every phrase in the live route's keywords meta sits in the
   title, an H2/H3 or an FAQ question.
   Web research (25 Oct): HVAC contractors are licensed by the Arizona
   Registrar of Contractors (residential, commercial or dual CR-39); since
   the 2021 change to A.R.S. 32-1124, internet, broadcast and billboard ads
   may omit the ROC number only if they give a web address whose home page
   prominently shows the name and ROC number, while bids and contracts still
   need it; post-monsoon calls are dust-matted coils, surge-damaged
   capacitors and overflowing condensate drains; Valley companies book
   spring tune-ups weeks ahead; top "hvac company phoenix" results compete
   on reviews, 24/7 AC repair, maintenance plans and ROC numbers; Tucson
   still searches evaporative cooler service. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "arizona-2",
  liveUrl: "/services/hvac-marketing-agency/arizona",
  parent: {
    href: "/services/hvac-marketing-agency",
    label: "HVAC Marketing Agency",
    niche: "HVAC",
  },
  place: "Arizona",
  meta: {
    title: "HVAC Marketing Agency in Arizona | HVAC SEO Phoenix & Mesa",
    description:
      "Arizona HVAC marketing for Phoenix, Mesa, Scottsdale and Tucson: Map Pack rankings, HVAC SEO, Local Services Ads, ROC-ready websites and monsoon-season calls.",
    keywords: [
      "hvac marketing agency arizona",
      "hvac marketing companies near me",
      "hvac companies phoenix az",
      "hvac companies mesa az",
      "marketing for hvac companies",
      "hvac local marketing services",
      "hvac digital marketing agency",
      "hvac seo phoenix",
      "ac repair phoenix",
      "monsoon ac repair",
    ],
  },
  palette: PALETTES.orangeSky,
  hero: {
    h1: "Arizona HVAC Marketing Agency for Heat-Wave and Monsoon Calls",
    h1NoWrap: "Monsoon Calls",
    lead: [
      "In the Valley, a dead AC in July is an emergency, and homeowners call the first company Google or an AI assistant suggests. Our ",
      {
        href: "/services/hvac-marketing-agency",
        label: "HVAC marketing agency",
      },
      " puts your name there in Phoenix, Mesa, Scottsdale, Tucson and the fast-growing West Valley, through heat waves and monsoon storms.",
    ],
    cta: "Get My Arizona HVAC Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "First pick on Maps, Phoenix to Tucson",
        sub: "East Valley, West Valley and every suburb between",
        chips: ["Phoenix", "Mesa", "Scottsdale", "Tucson", "+ West Valley"],
      },
      left: {
        icon: "call",
        title: "Emergency AC calls answered first",
        sub: "Round-the-clock hours and ads that run after dark",
      },
      right: {
        icon: "storm",
        title: "Monsoon cleanups booked",
        sub: "Coil cleaning and storm-check pages ready by July",
      },
      bottom: {
        title: "Tune-up plans that fill the spring",
        sub: "Members booked before the first triple-digit day",
      },
    },
  },
  services: {
    title: "Marketing for HVAC Companies, Built for Arizona Heat",
    lead: "Through summer rush and monsoon, one team runs Arizona HVAC marketing.",
    cta: "Audit My Arizona Setup",
    items: [
      {
        icon: "pin",
        title: "Map Pack Profiles With Your ROC Number Up Front",
        desc: "We set HVAC categories, Valley service areas, emergency hours and your ROC number, then add jobsite photos each week to lift your map rank.",
        points: [
          "ROC number displayed",
          "Valley-wide service areas",
          "Fresh photos weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile setup",
          },
        ],
      },
      {
        icon: "search",
        title: "HVAC SEO Phoenix and Tucson Homeowners Find",
        desc: "City pages for Mesa, Gilbert, Peoria and every town you cover, plus monsoon, coil cleaning and heat pump pages that answer real questions.",
        points: [
          "Page for each Valley city",
          "Monsoon service pages",
          "Directory listings cleaned",
        ],
        links: [
          {
            href: "/services/industry/local-seo-services-for-hvac",
            label: "Local SEO for HVAC companies",
          },
        ],
      },
      {
        icon: "target",
        title: "Local Services Ads and Search Ads for Peak Heat",
        desc: "Google Guaranteed listings plus emergency AC campaigns limited to the zip codes you can reach before the house heats up.",
        points: [
          "Google Guaranteed listing",
          "After-hours emergency ads",
          "Zip code targeting",
        ],
        links: [{ href: "/services/google-ads", label: "Google Ads help" }],
      },
      {
        icon: "monitor",
        title: "HVAC Websites With Your ROC Number Front and Center",
        desc: "Mobile sites with a one-tap call bar, online booking and membership signup, with your ROC number on the home page, not buried.",
        points: [
          "ROC number on home page",
          "Membership signup",
          "One-tap booking",
        ],
        links: [
          {
            href: "/services/hvac-website-design",
            label: "HVAC website design",
          },
          { href: "/services/web-design", label: "Website design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews After Every Valley Service Call",
        desc: "A review request lands by text as soon as the tech pulls away, and we write replies you can approve in one tap.",
        points: [
          "Automatic text requests",
          "One-tap reply approval",
          "Low ratings flagged fast",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home services local SEO",
          },
        ],
      },
      {
        icon: "shield",
        title: "Arizona HVAC Profiles Suspended or Unverified",
        desc: "Losing your profile in July hurts more than any other month. We pinpoint the trigger, repair the listing and handle the appeal; 900+ profiles reinstated.",
        points: ["Trigger pinpointed", "Listing repaired", "Appeal managed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification fixes",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Our HVAC Digital Marketing Agency Grows Arizona Contractors",
    lead: "From the Map Pack to AI answers to your website, each piece is judged by booked jobs.",
    rows: [
      {
        title: "Win the Map Pack for “HVAC Companies Phoenix AZ”",
        body: [
          "A Glendale homeowner whose AC quits at noon searches “hvac companies phoenix az” and phones whichever pin sits on top. We set your service areas, build Glendale, Peoria and Chandler pages and keep new reviews flowing so your pin stays in that top group.",
        ],
        points: [
          "Emergency hours on profile",
          "City pages across the Valley",
          "Weekly grid rank checks",
          "ROC license listed",
        ],
        cta: "See My Phoenix Map Rank",
        ui: {
          kind: "maps",
          query: "hvac companies phoenix az",
          city: "Phoenix",
          category: "Air conditioning contractor · ROC licensed",
        },
      },
      {
        title: "Show Up in AI Answers for “HVAC Companies Mesa AZ”",
        body: [
          "East Valley families increasingly ask ChatGPT or Gemini which Mesa company can fix an AC fast. Our ",
          { href: "/services/ai-seo-services", label: "AI search visibility" },
          " work keeps your site, listings and reviews consistent and full of plain answers, so those assistants recommend your business by name.",
        ],
        points: [
          "Emergency answer pages",
          "Identical details on listings",
          "Local business schema",
          "Reviews that mention the city",
        ],
        cta: "Check My AI Mentions",
        ui: {
          kind: "ai",
          query: "hvac companies mesa az open now",
          intro: "For fast AC repair in Mesa, AZ,",
          bullets: [
            "Same-day service in Gilbert and Chandler",
            "Monsoon coil cleaning",
            "ROC-licensed technicians",
          ],
        },
      },
      {
        title: "A Website That Shows Your ROC Number and Books the Job",
        body: [
          "Arizona lets online, broadcast and billboard ads leave off your ROC number only if they point to a website that shows your name and number prominently. We build ",
          { href: "/services/hvac-website-design", label: "HVAC sites" },
          " that do that on the home page, alongside a tap-to-call bar and online booking.",
        ],
        points: [
          "ROC number above the fold",
          "Membership signup page",
          "Monsoon service buttons",
          "Loads fast on phones",
        ],
        cta: "Plan My HVAC Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/phoenix-ac-repair",
          headline: "AC out in Phoenix? A tech can be there today.",
          services: [
            "AC repair",
            "Coil cleaning",
            "Heat pumps",
            "Tune-up plans",
          ],
        },
      },
    ],
  },
  regions: {
    title: "Where in Arizona We Run HVAC Local Marketing Services",
    lead: "Desert valleys, high country and retirement towns all search in their own way, so each gets its own pages, areas and ad hours.",
    items: [
      {
        name: "Central Phoenix",
        cities: "Phoenix · Paradise Valley · Glendale · Tempe",
        focus: "Crowded map packs where reviews and city pages decide",
      },
      {
        name: "East Valley",
        cities: "Gilbert · Mesa · Queen Creek · Chandler · San Tan Valley",
        focus: "Family neighborhoods and tune-up membership offers",
      },
      {
        name: "West Valley",
        cities: "Peoria · Surprise · Goodyear · Buckeye · Avondale",
        focus: "Newer subdivisions where top map spots are still open",
      },
      {
        name: "Scottsdale & North Valley",
        cities: "Scottsdale · Fountain Hills · Cave Creek · Anthem",
        focus: "Seasonal homes and high-end system replacements",
      },
      {
        name: "Tucson & Southern Arizona",
        cities: "Tucson · Marana · Oro Valley · Sierra Vista",
        focus: "Evaporative cooler and heat pump service pages",
      },
      {
        name: "High Country & River Towns",
        cities: "Prescott · Flagstaff · Lake Havasu City · Yuma",
        focus: "Furnace work up north, extreme heat out west",
      },
    ],
    other:
      "Serving Kingman, Casa Grande or Show Low? We'll build pages for your towns too.",
  },
  reviews: {
    title: "What Local Service Owners Say About Us",
    lead: "Five-star Google reviews from trades and home service companies.",
  },
  pricing: {
    title: "Arizona HVAC Marketing Pricing",
    compareTitle: "Compare Plans for Arizona Contractors",
    addOnsTitle: "Add-Ons for Monsoon and Peak Summer",
    customTitle: "Trucks in Phoenix and Tucson both?",
  },
  faq: {
    title: "Questions Arizona HVAC Owners Ask Us",
    lead: "ROC rules, monsoon season, tune-ups, Tucson and plans. Rather talk it through? Call us.",
    items: [
      {
        q: "Do my Arizona HVAC ads need to show my ROC license number?",
        a: "Usually, yes. Print ads, bids and contracts need it. Online, broadcast and billboard ads can leave it off only when they include a web address leading to a site that prominently shows your name and ROC number. We put it on your home page and Google profile, so every ad qualifies.",
      },
      {
        q: "How do I get more monsoon season HVAC calls?",
        a: "Have the pages up before storms arrive. We publish coil cleaning, storm-damage check and drain-line repair pages in spring, add those services to your profile and schedule posts and ads to run after each dust storm, so homeowners find you while their systems struggle.",
      },
      {
        q: "How early should I push AC tune-ups in Arizona?",
        a: "In late winter. Many Valley homeowners book checkups weeks before the heat arrives, so we launch tune-up and membership pages, posts and ads in February and March. Members then fill your schedule early and get priority when summer emergencies stack up.",
      },
      {
        q: "Why do some HVAC companies in Phoenix outrank me on Maps?",
        a: "Usually because of distance to the searcher, a more complete profile and more recent reviews. You can't move your shop, but you can fix categories, add services and city pages, and request reviews once each job wraps up. Our audit shows which gaps cost you the most.",
      },
      {
        q: "What should HVAC marketing companies near me report each month?",
        a: "Booked jobs, not just clicks. You should see calls by source, map rankings across your service area, review growth and what each channel brought in. Our monthly report covers all of it in plain language, and you can listen to any recorded call yourself.",
      },
      {
        q: "Can you market heat pumps and evaporative coolers in Tucson?",
        a: "Yes. Tucson homeowners still search for swamp cooler repair and conversions alongside heat pump installs, so we build pages for both, list each service on your Google profile and time ads to the months when each one peaks.",
      },
      {
        q: "What does Arizona HVAC marketing cost per month?",
        a: "Pricing comes in three tiers, $297, $750 or $1,500 billed monthly, with no long contract and a 0% markup on ad spend. A single-city shop often starts on the first plan; Valley-wide companies running ads, memberships and Tucson pages need more coverage.",
      },
    ],
  },
  audit: {
    title: "Claim a Free Arizona HVAC Marketing Audit",
    lead: [
      "See where you rank across Phoenix, Tucson and every Arizona city you serve, plus how your profile, ",
      { href: "/services/web-design", label: "website" },
      " and reviews measure up to the shops ranked ahead of you.",
    ],
    points: [
      "Each Valley city checked",
      "ROC details and website reviewed",
      "Plans from $297/mo, cancel any month",
    ],
    form: {
      formType: "hvac-marketing-arizona",
      badge: "Free Arizona HVAC audit",
      title: "Get My Arizona HVAC Audit",
      subtitle: "Free, fast and zero obligation.",
      submitText: "Send My Arizona Audit",
      messageLabel: "Arizona cities and jobs you want",
      messagePlaceholder: "e.g. Gilbert and Chandler, AC repair and tune-ups",
    },
  },
  banner: {
    title: "Own the Valley Map Before the Next Heat Wave",
    lead: "Start with a free ranking check across the Valley and Tucson.",
    icons: ["sun", "storm"],
  },
};
