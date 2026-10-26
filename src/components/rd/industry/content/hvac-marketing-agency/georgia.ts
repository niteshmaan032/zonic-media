import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* GEORGIA HVAC MARKETING — redesign draft content (25 Oct 2026).
   Semrush API units were exhausted, so no ranking report or volumes were
   pulled; keywords come from the live page and web research. Rank safety:
   the live title's core term "HVAC Marketing Agency in Georgia" stays in
   the title, and every live keywords-meta phrase sits in the title, H1, an
   H2/H3 or an FAQ question (hvac companies in georgia, hvac company
   atlanta ga, commercial hvac companies atlanta ga, hvac marketing
   companies near me, marketing for hvac companies, hvac digital marketing
   agency, hvac seo atlanta).
   Web research (25 Oct): Georgia licenses conditioned air contractors
   through the Construction Industry Licensing Board, Class I (restricted
   capacity) and Class II (unrestricted); EPA 608 is federal. Top Atlanta
   results cover heat pump repair, humidity control and dehumidifiers,
   systems running nearly all year, emergency/aux heat in freezes and
   maintenance plans. */

export const CONTENT: LocationContent = {
  draftSlug: "georgia-2",
  liveUrl: "/services/hvac-marketing-agency/georgia",
  parent: {
    href: "/services/hvac-marketing-agency",
    label: "HVAC Marketing Agency",
    niche: "HVAC",
  },
  place: "Georgia",
  meta: {
    title: "HVAC Marketing Agency in Georgia | Atlanta AC & Heat Pump Leads",
    description:
      "Georgia HVAC marketing for metro Atlanta, Savannah, Augusta and Macon: Google Maps rankings, HVAC SEO, Local Services Ads and more AC and heat pump calls.",
    keywords: [
      "hvac marketing agency georgia",
      "hvac companies in georgia",
      "hvac company atlanta ga",
      "commercial hvac companies atlanta ga",
      "hvac marketing companies near me",
      "marketing for hvac companies",
      "hvac digital marketing agency",
      "hvac seo atlanta",
      "heat pump repair atlanta",
      "ac repair atlanta",
    ],
  },
  palette: PALETTES.greenViolet,
  hero: {
    h1: "Georgia HVAC Marketing Agency for Humid Summers and Cold Snaps",
    h1NoWrap: "Cold Snaps",
    lead: [
      "Georgia systems run hard nearly all year, from muggy August afternoons to the odd January freeze. Our ",
      {
        href: "/services/hvac-marketing-agency",
        label: "HVAC marketing agency",
      },
      " puts your company at the top of Google Maps, inside AI answers and in local ads across metro Atlanta, Savannah, Augusta, Macon and Columbus.",
    ],
    cta: "Get My Free Georgia HVAC Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on Maps across metro Atlanta",
        sub: "Suburb by suburb, then Savannah, Augusta and Macon",
        chips: ["Atlanta", "Marietta", "Alpharetta", "Savannah", "+ your city"],
      },
      left: {
        icon: "heatPump",
        title: "More heat pump jobs",
        sub: "Repair and replacement pages for year-round systems",
      },
      right: {
        icon: "drop",
        title: "Humidity calls answered",
        sub: "Dehumidifier and AC pages for sticky summers",
      },
      bottom: {
        title: "Ready for the rare hard freeze",
        sub: "Emergency heat ads switch on with the forecast",
      },
    },
  },
  services: {
    title: "Marketing for HVAC Companies, From Buckhead to Savannah",
    lead: "Map, search, ads and reviews for Georgia HVAC firms, run by one crew.",
    cta: "Audit My Georgia HVAC Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Spots in Every Atlanta Suburb You Serve",
        desc: "We set the right HVAC categories, suburb service areas, hours and install photos so your listing rises in Marietta, Alpharetta, Decatur and beyond.",
        points: [
          "HVAC categories chosen",
          "Suburb service areas",
          "Install photos added",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile management",
          },
        ],
      },
      {
        icon: "search",
        title: "HVAC SEO: Atlanta Suburbs, Savannah and Middle Georgia",
        desc: "Service pages for heat pump repair, AC replacement and dehumidifiers, plus a page for each suburb and city your trucks reach.",
        points: [
          "Suburb and city pages",
          "Heat pump service pages",
          "Humidity control pages",
        ],
        links: [
          {
            href: "/services/industry/local-seo-services-for-hvac",
            label: "HVAC local SEO services",
          },
        ],
      },
      {
        icon: "target",
        title: "Search Ads That Scale With Georgia's Heat",
        desc: "Campaigns for AC repair and heat pump service that scale with the heat, plus Local Services Ads, with each call recorded and tied to a job.",
        points: [
          "AC repair ad groups",
          "Local Services Ads managed",
          "Calls tied to jobs",
        ],
        links: [{ href: "/services/google-ads", label: "HVAC Google Ads" }],
      },
      {
        icon: "monitor",
        title: "Georgia HVAC Websites Built to Book",
        desc: "Phone-first sites with your number pinned at the top, online scheduling and maintenance plan signups, so a hot, sticky search ends in a booked visit.",
        points: [
          "Tap-to-call header",
          "Online scheduling",
          "Maintenance plan signups",
        ],
        links: [
          {
            href: "/services/hvac-website-design",
            label: "HVAC websites",
          },
          { href: "/services/web-design", label: "Our web design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews From Every Finished Service Call",
        desc: "Customers get a review link by text after each visit, and we draft the replies, so your profile keeps earning trust in each suburb.",
        points: [
          "Text after each visit",
          "Owner replies drafted",
          "Low ratings flagged",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service local SEO",
          },
        ],
      },
      {
        icon: "shield",
        title: "Getting Suspended HVAC Listings Back on the Map",
        desc: "A suspension or stuck verification in July costs more than any slow week. We trace the cause, fix it and file the appeal, with 900+ profiles reinstated.",
        points: [
          "Appeal prepared for you",
          "Verification walkthrough",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Profile reinstatement service",
          },
          {
            href: "/services/gmb-verification-help",
            label: "GMB verification help",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Three Ways Georgia HVAC Contractors Win the Call",
    lead: "Maps, AI answers and reviews decide who Georgia homeowners phone first. Here is what we change in each.",
    rows: [
      {
        title: "Win the Map When Neighbors Search “HVAC Company Atlanta GA”",
        body: [
          "When the AC quits in the middle of a humid afternoon, Atlanta homeowners tap the first few map results. We tune your profile, publish suburb pages and line up steady reviews, so your pin shows up in every suburb your crews already cover.",
        ],
        points: [
          "Grid rank tracking",
          "Heat pump services listed",
          "Fresh install photos",
          "Online booking linked",
        ],
        cta: "Show Me My Atlanta Ranking",
        ui: {
          kind: "maps",
          query: "hvac company atlanta ga",
          city: "Atlanta",
          category: "HVAC contractor · Heat pump service",
        },
      },
      {
        title: "Get Named When Alpharetta Homeowners Ask AI About Heat Pumps",
        body: [
          "Many North Fulton homeowners now ask ChatGPT or Gemini, or check Google's AI Overview, before they call anyone about a heat pump. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO" },
          " team makes your site, Google profile and reviews easy for those tools to read, so they have a reason to suggest you.",
        ],
        points: [
          "FAQ-style service pages",
          "Consistent business details",
          "Reviews that mention suburbs",
          "Structured data added",
        ],
        cta: "Test My AI Visibility",
        ui: {
          kind: "ai",
          query: "heat pump repair alpharetta",
          intro: "For heat pump repair in Alpharetta,",
          bullets: [
            "Same-week repair visits",
            "Variable-speed system upgrades",
            "Praised for fixing upstairs humidity",
          ],
        },
      },
      {
        title: "Get a Review From Every Home You Cool Down",
        body: [
          "Happy customers in Marietta or Lawrenceville rarely post a review unless asked. We send a review link by text as soon as the job closes, write replies in your voice and catch unhappy feedback early, so your rating keeps pulling in calls all summer.",
        ],
        points: [
          "Review text at job close",
          "Owner-style replies",
          "QR code on invoices",
          "Rating trends each month",
        ],
        cta: "Grow My Atlanta Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Tanya, glad we could get the AC running again today. If you have a minute, a Google review would mean a lot!",
          reviewer: "Tanya",
          review:
            "Our upstairs was sticky and warm for weeks. They found the problem, balanced the system and the house finally feels dry.",
          reply:
            "Thank you, Tanya! Glad the upstairs is comfortable again. Call us anytime.",
        },
      },
    ],
  },
  regions: {
    title: "Where We Grow HVAC Companies in Georgia",
    lead: "Intown bungalows, new subdivisions up north and coastal homes need different HVAC work, so pages and ad areas are set region by region.",
    items: [
      {
        name: "Intown Atlanta & Decatur",
        cities: "Buckhead · Midtown · Kirkwood · Decatur",
        focus: "Older-home pages for ductless and attic system upgrades",
      },
      {
        name: "North Fulton & Forsyth County",
        cities: "Alpharetta · Johns Creek · Roswell · Cumming",
        focus: "Heat pump and zoning work for larger family homes",
      },
      {
        name: "Cobb, Cherokee & Paulding",
        cities: "Marietta · Smyrna · Kennesaw · Woodstock",
        focus: "Map Pack coverage in busy, review-driven suburbs",
      },
      {
        name: "Gwinnett County",
        cities: "Lawrenceville · Suwanee · Snellville · Duluth",
        focus: "New-build service and maintenance plan offers",
      },
      {
        name: "Savannah & the Georgia Coast",
        cities: "Savannah · Brunswick · Pooler · St. Simons Island",
        focus: "Salt-air condenser care and storm-season service pages",
      },
      {
        name: "Middle & East Georgia",
        cities: "Macon · Augusta · Columbus · Athens · Warner Robins",
        focus: "Town pages and ads beyond the Atlanta metro",
      },
    ],
    other:
      "Working in another part of Georgia? Tell us the towns and we'll cover them.",
  },
  reviews: {
    title: "Five-Star Feedback From Business Owners on Google",
    lead: "Unedited Google reviews from service companies we market.",
  },
  pricing: {
    title: "Georgia HVAC Marketing Plans and Pricing",
    compareTitle: "Which Georgia Plan Fits Your Shop?",
    addOnsTitle: "Extras for Peak Cooling Months",
    customTitle: "Offices in Atlanta and Savannah?",
  },
  faq: {
    title: "Questions From Georgia HVAC Owners",
    lead: "Licensing, commercial work, humidity, freezes and pricing. Want to talk it through? Call us.",
    items: [
      {
        q: "What license do HVAC companies in Georgia need, and should it be on our site?",
        a: "Georgia licenses conditioned air contractors through the Construction Industry Licensing Board. Class I covers smaller residential-size systems, and Class II is unrestricted, which most commercial work needs. Your license number then goes on your site, your Google listing and every quote page, since homeowners and property managers look for it.",
      },
      {
        q: "Can you rank us for “commercial HVAC companies Atlanta GA” searches?",
        a: "Yes. Commercial buyers search differently from homeowners, so we build separate pages for rooftop units, restaurants, offices and preventive maintenance contracts, list commercial services on your profile and run search ads aimed at facility managers. Showing your Class II license and response times on those pages helps them choose.",
      },
      {
        q: "How can I get more heat pump and humidity calls during Georgia summers?",
        a: "Build pages for the problems Georgia homeowners describe: a sticky house, an AC that runs nonstop, a heat pump that won't keep up. We add dehumidifier, variable-speed and duct sealing services to your profile, write posts before the heat builds and run ads on those searches.",
      },
      {
        q: "Will your marketing help when a rare freeze hits Atlanta?",
        a: "Yes. Heat pumps lean on backup heat when temperatures fall, and homeowners search fast when the house won't warm up. We keep emergency heat and no-heat pages ready, update your hours and posts before the freeze, and raise ad coverage while the cold lasts.",
      },
      {
        q: "Why work with you instead of HVAC marketing companies near me in Atlanta?",
        a: "Being close to your office matters less than knowing how your suburbs search. We track your map rank on a grid across every area you serve, report on calls and booked jobs each month, and give you an HVAC marketing consultant in GA who is a phone call away whenever you need a change.",
      },
      {
        q: "What's included when an HVAC digital marketing agency runs our Georgia marketing?",
        a: "Map listing management, HVAC SEO, search and Local Services Ads, website upkeep, review requests and AI visibility, run by one team. Each month you get one report that ties rankings and calls to the jobs they produced, so you always know what's working.",
      },
      {
        q: "How much is HVAC marketing in Georgia each month?",
        a: "Plans begin at $297 a month, and the $750 and $1,500 options add more cities, ads and pages. Every plan is month to month, and ad budgets reach Google at a 0% markup. Most owners begin with the metro area they know best and add towns later.",
      },
    ],
  },
  audit: {
    title: "Free Georgia HVAC Marketing Audit, Suburb by Suburb",
    lead: [
      "Tell us where your trucks go. We'll check your map rank in each Georgia suburb and city, review your profile, ",
      { href: "/services/hvac-website-design", label: "HVAC website" },
      " and reviews, and show which AC and heat pump searches are going to rivals.",
    ],
    points: [
      "Every suburb and city checked",
      "Humidity and heat pump searches tested",
      "Starts at $297 a month, month to month",
    ],
    form: {
      formType: "hvac-marketing-georgia",
      badge: "Free Georgia audit",
      title: "See Where My Georgia HVAC Company Ranks",
      subtitle: "Free, and you're never locked in.",
      submitText: "Send My Georgia Audit",
      messageLabel: "Your Georgia service area and jobs",
      messagePlaceholder:
        "e.g. Marietta and Kennesaw, heat pumps and AC repair",
    },
  },
  banner: {
    title: "Keep Georgia Homes Cool and Your Schedule Full",
    lead: "Claim a no-cost map-rank check for each Georgia suburb you serve.",
    icons: ["sun", "heatPump"],
  },
};
