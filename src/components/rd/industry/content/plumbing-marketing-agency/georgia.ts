import { PALETTES } from "../../palettes";
import type { LocationContent } from "../../types";

/* Georgia plumbing marketing — location redesign draft (24 Oct 2026).
   Research: Semrush US (Oct 2026) shows no ranking terms for the live URL
   and no volume for agency-intent phrases, so the title keeps the live
   term "Plumbing Marketing Agency in Georgia". City demand used: plumber
   atlanta 1,900 · plumber atlanta ga 1,000 · water heater repair atlanta
   880 · emergency plumber atlanta 720 · plumber marietta ga 720 · drain
   cleaning atlanta 590 · sewer line repair atlanta 590 · plumber
   alpharetta 590 · plumber roswell ga 480 · plumber lawrenceville ga 390
   · repiping atlanta 90 · plumbing companies in atlanta ga 50. Web
   research: polybutylene and galvanized lines in older Atlanta homes,
   state master/journeyman plumber licensing, suburban growth. */

export const CONTENT: LocationContent = {
  draftSlug: "georgia-2",
  liveUrl: "/services/plumbing-marketing-agency/georgia",
  parent: {
    href: "/services/plumbing-marketing-agency",
    label: "Plumbing Marketing Agency",
    niche: "Plumbing",
  },
  place: "Georgia",
  meta: {
    title: "Plumbing Marketing Agency in Georgia | Atlanta Maps & Ads",
    description:
      "Georgia plumbing marketing for Atlanta, Marietta, Alpharetta and Savannah plumbers: Map Pack rankings, repiping and water heater pages, Google Ads and reviews.",
    keywords: [
      "plumbing marketing agency georgia",
      "plumbing companies in atlanta ga",
      "plumbing seo atlanta",
      "plumber atlanta",
      "water heater repair atlanta",
      "emergency plumber atlanta",
      "sewer line repair atlanta",
      "plumber marietta ga",
    ],
  },
  palette: PALETTES.roseEmerald,
  hero: {
    h1: "Georgia Plumbing Marketing Agency for Metro Atlanta and Beyond",
    h1NoWrap: "Metro Atlanta",
    lead: [
      "Atlanta keeps adding new neighborhoods, and every new homeowner needs a plumber they don't know yet. Our ",
      {
        href: "/services/plumbing-marketing-agency",
        label: "plumbing marketing agency",
      },
      " helps them find yours first across metro Atlanta, Savannah, Augusta and Macon, with Map Pack rankings, repiping pages, Google Ads and reviews.",
    ],
    cta: "Get My Georgia Plumbing Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on Maps Around Atlanta",
        sub: "Ranked for plumber, drain and water heater searches in each suburb",
        chips: [
          "Atlanta",
          "Marietta",
          "Alpharetta",
          "Lawrenceville",
          "Savannah",
        ],
      },
      left: {
        icon: "home",
        title: "New-homeowner calls",
        sub: "Reach families settling into new subdivisions",
      },
      right: {
        icon: "wrench",
        title: "More repiping jobs",
        sub: "Older intown homes searching for pipe replacement",
      },
      bottom: {
        title: "Sewer line work booked",
        sub: "Camera, repair and replacement pages by county",
      },
    },
  },
  services: {
    title: "Georgia Plumbing Marketing, Handled End to End",
    lead: "Atlanta or rural Georgia, your plumbing marketing sits with one team.",
    cta: "Audit My Georgia Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Rankings for Metro Atlanta Suburbs",
        desc: "Your profile is built out with categories, photos, service areas and your Georgia plumbing license, then pushed toward the top three suburb by suburb.",
        points: [
          "Suburb-level service areas",
          "Georgia license shown",
          "Photos added weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "Atlanta Plumber SEO and County Pages",
        desc: "Pages for water heater repair in Atlanta, sewer lines in Marietta and repiping in Decatur, plus county pages for Cobb, Gwinnett and Fulton.",
        points: [
          "County and city pages",
          "Repiping and sewer topics",
          "Schema on every page",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-plumber",
            label: "SEO services for plumbers",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Home services SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Paid Search and Local Services Ads for Georgia",
        desc: "Campaigns for emergency, water heater and sewer searches, split by metro, with LSA setup and recorded calls that show which ads book jobs.",
        points: [
          "Emergency search campaigns",
          "LSA setup and screening",
          "Recorded, tagged calls",
        ],
        links: [{ href: "/services/google-ads", label: "Google Ads services" }],
      },
      {
        icon: "monitor",
        title: "Georgia Plumbing Websites That Convert Visitors",
        desc: "Fast, phone-friendly sites with a call button up top, booking forms and dedicated pages for repiping, water heaters and sewer repair.",
        points: [
          "Call button up top",
          "Booking forms built in",
          "Dedicated service pages",
        ],
        links: [
          {
            href: "/services/plumbing-website-design",
            label: "Plumber website design",
          },
          { href: "/services/web-design", label: "Design and development" },
        ],
      },
      {
        icon: "star",
        title: "Google Reviews From Georgia Households",
        desc: "Automatic texts invite each customer to review the visit, and we draft replies that thank them by name and mention their town.",
        points: [
          "Texts after each visit",
          "Replies drafted by name",
          "Town mentions tracked",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI answer visibility" },
        ],
      },
      {
        icon: "shield",
        title: "Locked or Unverified Georgia Profiles",
        desc: "If Google suspends your listing or verification stalls, we track down the cause, correct it and file the appeal. Our team has reinstated 900+ profiles.",
        points: [
          "Cause found and fixed",
          "Appeal handled for you",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification assistance",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Georgia Plumbers Get Found and Chosen",
    lead: "Get found on Google Maps, get named by AI tools and get picked from the reviews new residents read first.",
    rows: [
      {
        title: "Lead the Atlanta Map Pack for Water Heater Repair",
        body: [
          "Water heater repair is one of Atlanta's most searched plumbing jobs, and the map results get the first look. We tune your categories, hours, photos and reviews so your company holds a top-three place in the suburbs you serve.",
        ],
        points: [
          "Water heater services listed",
          "Suburb service areas",
          "Fresh install photos",
          "Accurate hours and phone",
        ],
        cta: "Check My Atlanta Ranking",
        ui: {
          kind: "maps",
          query: "water heater repair atlanta",
          city: "Atlanta",
          category: "Plumber · Emergency service",
        },
      },
      {
        title: "Get Recommended When Marietta Asks AI",
        body: [
          "Homeowners in Marietta and across Cobb County increasingly turn to ChatGPT, Gemini or an AI Overview to pick a plumber. We make sure those tools find clear services, areas served, your license and recent reviews, through our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          ".",
        ],
        points: [
          "Clear service descriptions",
          "Areas served spelled out",
          "License details visible",
          "Recent reviews highlighted",
        ],
        cta: "Review My AI Visibility",
        ui: {
          kind: "ai",
          query: "emergency plumber marietta ga",
          intro: "For urgent plumbing repairs in Marietta,",
          bullets: [
            "Licensed Georgia master plumber",
            "Sewer camera inspections",
            "Fast emergency response",
          ],
        },
      },
      {
        title: "Win Over New Neighbors With Steady Reviews",
        body: [
          "People new to Alpharetta or Lawrenceville don't have a plumber yet, so they read reviews closely. We text every customer after the job, write your replies and keep fresh reviews coming that mention the service and the suburb.",
        ],
        points: [
          "Text after every job",
          "Replies written for you",
          "Suburb names in reviews",
          "Monthly review report",
        ],
        cta: "Build My Georgia Reviews",
        ui: {
          kind: "reviews",
          sms: "Marcus, it was a pleasure fixing your water heater in Alpharetta today. Would a short review be okay?",
          reviewer: "Marcus",
          review:
            "Called in the morning and had hot water by lunch. The plumber explained everything and cleaned up after.",
          reply:
            "Thank you, Marcus! We're glad the Alpharetta repair was quick. We're here whenever you need us again.",
        },
      },
    ],
  },
  regions: {
    title: "Georgia Plumbing Markets We Serve",
    lead: "Metro Atlanta's suburbs and Georgia's other cities each get their own pages and campaigns, built around how residents search.",
    items: [
      {
        name: "Intown Atlanta",
        cities: "Atlanta · Decatur · Sandy Springs · Brookhaven",
        focus: "Repiping and sewer line pages for older homes",
      },
      {
        name: "North Fulton and Forsyth",
        cities: "Alpharetta · Roswell · Johns Creek · Cumming",
        focus: "Water heater offers and service areas for newer builds",
      },
      {
        name: "Cobb and Cherokee",
        cities: "Marietta · Kennesaw · Smyrna · Woodstock",
        focus: "Emergency plumbing campaigns and steady review growth",
      },
      {
        name: "Gwinnett County",
        cities: "Lawrenceville · Duluth · Snellville · Buford",
        focus: "Drain cleaning pages and suburb-by-suburb rankings",
      },
      {
        name: "Coastal Georgia",
        cities: "Savannah · Brunswick · Richmond Hill",
        focus: "Historic-home repiping and coastal service areas",
      },
      {
        name: "Middle and East Georgia",
        cities: "Macon · Augusta · Columbus · Athens",
        focus: "City pages and wide service areas between the metros",
      },
    ],
    other: "Plumbing somewhere else in Georgia? Let's add your town.",
  },
  reviews: {
    title: "Real Google Reviews From Trade Owners",
    lead: "Owners of home service businesses on what it's like to work with Zonic.",
  },
  pricing: {
    title: "Georgia Plumbing Marketing Packages",
    lead: [
      "Plans begin at $297 per month and step up to $750 and $1,500, all month to month, with ad spend at a 0% markup. Need a ",
      { href: "/services/gmb-verification-help", label: "profile verified" },
      "? We handle that too.",
    ],
    compareTitle: "Find the Right Georgia Package",
    compareLead: "Start with one suburb or cover the whole metro and beyond.",
    addOnsTitle: "Extras for Fast-Growing Metro Areas",
    addOnsLead:
      "More county pages, extra ad campaigns or a new website as you expand.",
    customTitle: "Running crews in Atlanta and Savannah?",
    customText:
      "List your branches and service areas, and we'll quote a custom plan.",
  },
  faq: {
    title: "Questions Georgia Plumbers Ask Us",
    lead: "Repiping, metro coverage, ads and plans for Georgia plumbing companies. Prefer a quick call? We're here.",
    items: [
      {
        q: "How do you get a plumber ranked across so many Atlanta suburbs?",
        a: "We pick the suburbs that matter most to you, add them to your service area and build a page for each, with local photos and reviews that mention the town. A grid tracker shows your Map Pack position in every suburb, so we can push the ones that lag.",
      },
      {
        q: "Can you help me get more repiping jobs from older Atlanta homes?",
        a: "Yes. Many older homes around Atlanta still have galvanized steel or polybutylene supply lines. We build repiping and pipe replacement pages for those neighborhoods, target the searches homeowners use, and show off your past repipes with photos and reviews.",
      },
      {
        q: "Should my Georgia plumbing license appear on my website and Google profile?",
        a: "Yes, we suggest it. A visible Georgia master or journeyman license number reassures homeowners and backs up your Google profile. We add it to your footer, service pages and profile, and keep it matched across directories and other listings.",
      },
      {
        q: "Do you market plumbers in Savannah, Augusta and Macon too?",
        a: "Yes. Outside metro Atlanta, Savannah, Augusta, Macon, Columbus and Athens each get a city page and a spot in your service area, along with the smaller towns nearby. Each city runs as its own campaign, so you can see exactly where calls come from.",
      },
      {
        q: "Are Local Services Ads a good fit for Georgia plumbing companies?",
        a: "For many, yes. Local Services Ads show above regular search ads, and Google screens your license and insurance before you appear. We handle setup, keep your hours and details accurate, and dispute leads that don't fit. Ad spend goes to Google with no markup from us.",
      },
      {
        q: "What do Georgia plumbing marketing packages cost?",
        a: "The three Georgia packages sit at $297, $750 and $1,500, billed each month and sized by how many suburbs, pages and ad campaigns you want. There's no long contract, you can stop any month, and Google ad spend carries a 0% markup. We recommend a package after your free audit.",
      },
    ],
  },
  audit: {
    title: "Your Free Georgia Plumbing Marketing Audit",
    lead: [
      "We check your Maps ranking across the Georgia suburbs and cities you serve, then go through your profile, ",
      { href: "/services/web-design", label: "web presence" },
      " and reviews to find the plumbing calls you're missing.",
    ],
    points: [
      "Rankings across every Georgia suburb",
      "Google profile and site health check",
      "Month-to-month plans from $297/mo",
    ],
    form: {
      formType: "plumbing-marketing-georgia",
      badge: "Free Georgia audit",
      title: "Start Your Georgia Plumbing Audit",
      subtitle: "Costs nothing, and no contract is needed.",
      submitText: "Send My Georgia Audit",
      messageLabel: "Your Georgia suburbs and services",
      messagePlaceholder:
        "e.g. Marietta and Kennesaw, repiping and sewer lines",
    },
  },
  banner: {
    title: "Grow With Georgia, One Booked Plumbing Job at a Time",
    lead: "Get a free look at where you rank around Atlanta and the rest of the state.",
    icons: ["home", "plumbing"],
  },
};
