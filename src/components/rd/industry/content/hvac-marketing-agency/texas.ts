import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* TEXAS HVAC MARKETING — redesign draft content (25 Oct 2026).
   Rank safety: Semrush API units were exhausted, so no resource_organic or
   phrase_these calls ran; keywords come from the live page and web research.
   The live title's core term "HVAC Marketing Agency in Texas" stays in the
   title, and every phrase in the live route's keywords meta sits in the
   title, an H2/H3 or an FAQ question.
   Web research (25 Oct): TDLR licenses air conditioning and refrigeration
   contractors as Class A (any system size) or Class B (size-capped), and
   16 TAC 75.71 requires the licensee's number and company name on both
   sides of work vehicles and in advertising; top "hvac company houston"
   results compete on review volume, 24/7 AC repair, tune-ups and
   commercial work; homeowner searches centre on AC blowing warm air in
   summer and frozen or struggling heat pumps in winter freezes; Spanish
   search in Houston, San Antonio and the Valley. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "texas-2",
  liveUrl: "/services/hvac-marketing-agency/texas",
  parent: {
    href: "/services/hvac-marketing-agency",
    label: "HVAC Marketing Agency",
    niche: "HVAC",
  },
  place: "Texas",
  meta: {
    title: "HVAC Marketing Agency in Texas | HVAC SEO Houston & Dallas",
    description:
      "Texas HVAC marketing for Houston, Dallas-Fort Worth, Austin and San Antonio: Google Maps rankings, HVAC SEO, Local Services Ads, reviews and AI search visibility.",
    keywords: [
      "hvac marketing agency texas",
      "hvac company in texas",
      "commercial hvac companies in texas",
      "hvac marketing companies near me",
      "marketing for hvac companies",
      "hvac digital marketing agency",
      "hvac local marketing services",
      "hvac seo houston",
      "ac repair houston",
      "heat pump repair dallas",
    ],
  },
  palette: PALETTES.amberIndigo,
  hero: {
    h1: "Texas HVAC Marketing Agency for Summer Heat and Winter Freezes",
    h1NoWrap: "Winter Freezes",
    lead: [
      "When a Houston AC quits in August or a February freeze stalls a heat pump, Texans call the first HVAC company Google shows them. Our ",
      {
        href: "/services/hvac-marketing-agency",
        label: "HVAC marketing agency",
      },
      " makes that company yours across Houston, Dallas-Fort Worth, San Antonio and Austin, from Google Maps to AI answers to reviews.",
    ],
    cta: "Start My Texas HVAC Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top map spots in every Texas metro",
        sub: "Big cities, fast-growing suburbs and small towns alike",
        chips: ["Houston", "Dallas", "San Antonio", "Austin", "+ your town"],
      },
      left: {
        icon: "snow",
        title: "More no-cool calls",
        sub: "AC repair searches land on your profile first",
      },
      right: {
        icon: "flame",
        title: "Freeze-week calls covered",
        sub: "Heat pump and furnace pages live before cold fronts",
      },
      bottom: {
        title: "A busier board in the mild months",
        sub: "Tune-up plans and commercial work fill spring and fall",
      },
    },
  },
  services: {
    title: "A Texas HVAC Digital Marketing Agency, Start to Finish",
    lead: "With Texas HVAC demand year-round, one team runs every channel.",
    cta: "See What My Texas Plan Needs",
    items: [
      {
        icon: "pin",
        title: "Google Business Profiles That Win Texas Map Packs",
        desc: "We set HVAC categories, service areas by suburb, hours and your TDLR license number, then post jobsite photos weekly to climb each local map.",
        points: [
          "TDLR number displayed",
          "Suburb service areas",
          "Weekly jobsite photos",
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
        title: "HVAC SEO for Houston, DFW and Every Texas Suburb",
        desc: "Service pages for AC repair, heat pumps and furnaces in each city you cover, written so Google and homeowners both trust them.",
        points: [
          "Page per city and service",
          "Heat pump and furnace pages",
          "Clean directory citations",
        ],
        links: [
          {
            href: "/services/industry/local-seo-services-for-hvac",
            label: "Local HVAC SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Local Services Ads Plus Google Ads for Texas Heat",
        desc: "Google Guaranteed listings and search campaigns aimed only at areas your vans reach quickly, paused or pushed as forecasts change.",
        points: [
          "Google Guaranteed badge",
          "Zip-level targeting",
          "Forecast-based scheduling",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads campaigns" },
        ],
      },
      {
        icon: "monitor",
        title: "HVAC Websites That Book Jobs From a Phone",
        desc: "Fast mobile sites with a call bar, online booking, financing and membership signup, plus Spanish pages for Houston and South Texas.",
        points: [
          "Call bar on every page",
          "Online booking built in",
          "Spanish service pages",
        ],
        links: [
          {
            href: "/services/hvac-website-design",
            label: "HVAC web design",
          },
          { href: "/services/web-design", label: "Website design services" },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Name the Repair and the Suburb",
        desc: "Texts go out as each ticket closes, asking customers to name the job and neighborhood, with replies drafted in your voice.",
        points: [
          "Requests sent automatically",
          "Replies drafted for you",
          "Low ratings caught early",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home services local search",
          },
        ],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified HVAC Profiles in Texas",
        desc: "A suspended profile can empty your dispatch board mid-heat wave. We find the trigger, correct it and file your appeal; 900+ profiles reinstated to date.",
        points: [
          "Suspension trigger traced",
          "Video verification coaching",
          "Appeal filed on your behalf",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Profile reinstatement",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification help",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How We Grow an HVAC Company in Texas",
    lead: "Maps, AI answers and reviews, each judged by the jobs that land on your board.",
    rows: [
      {
        title: "Win the Map When Houston Searches for AC Repair",
        body: [
          "A Katy homeowner with warm air pouring from the vents types “ac repair houston” and calls one of three pins. We tune your profile, build Katy, Cypress and Pearland pages and keep reviews flowing so one of those pins is yours all summer.",
        ],
        points: [
          "AC repair as primary service",
          "Suburb pages around Houston",
          "Rank grid checked weekly",
          "After-hours set correctly",
        ],
        cta: "Check My Houston Ranking",
        ui: {
          kind: "maps",
          query: "ac repair houston",
          city: "Houston",
          category: "HVAC contractor · TDLR licensed",
        },
      },
      {
        title: "Be the HVAC Company AI Suggests to Dallas Homeowners",
        body: [
          "More DFW homeowners now ask ChatGPT or Gemini who services heat pumps near them. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " line up your site, reviews and listings so those tools see one licensed, trusted company and name it.",
        ],
        points: [
          "Heat pump answer pages",
          "Matching details everywhere",
          "HVAC schema markup",
          "Reviews naming the system",
        ],
        cta: "Run My AI Search Check",
        ui: {
          kind: "ai",
          query: "best heat pump repair company in dallas",
          intro: "For heat pump repair in Dallas,",
          bullets: [
            "Same-day visits in Plano and Garland",
            "Handles freeze-damaged units",
            "TDLR-licensed technicians",
          ],
        },
      },
      {
        title: "Fill Your Profile With San Antonio Five-Star Reviews",
        body: [
          "San Antonio homeowners compare star counts before they ever dial. We text a review link the moment a tech closes the ticket, nudge customers to mention the repair and their neighborhood, and draft replies that sound like your office wrote them.",
        ],
        points: [
          "Link sent at job close",
          "English or Spanish request",
          "Neighborhood named in reviews",
          "Replies within a day",
        ],
        cta: "Grow My Review Count",
        ui: {
          kind: "reviews",
          sms: "Maria, thanks for choosing us to fix your AC today! Would you share a quick review?",
          reviewer: "Daniel",
          review:
            "Our AC died on a Sunday in Stone Oak and the tech had it blowing cold again before dinner. Fair, quick and friendly.",
          reply:
            "Thanks, Daniel! Glad Stone Oak is cool again. Call us anytime the heat spikes.",
        },
      },
    ],
  },
  regions: {
    title: "HVAC Local Marketing Services Across Texas",
    lead: "Every region searches differently, so service areas, city pages and ad schedules are set metro by metro.",
    items: [
      {
        name: "Houston & the Gulf Coast",
        cities: "Houston · Pearland · Katy · Cypress · Galveston",
        focus: "Humidity control and storm-outage service pages",
      },
      {
        name: "North Texas",
        cities: "Dallas · Fort Worth · Frisco · McKinney · Denton",
        focus: "New-build suburbs and freeze-ready heat pump pages",
      },
      {
        name: "Central Texas",
        cities: "Austin · Round Rock · Cedar Park · Georgetown · Waco",
        focus: "Growing neighborhoods and high-efficiency upgrades",
      },
      {
        name: "South Central Texas",
        cities: "San Antonio · Seguin · New Braunfels · Boerne",
        focus: "Bilingual profiles and older-home system swaps",
      },
      {
        name: "The Valley & Coastal Bend",
        cities: "McAllen · Harlingen · Brownsville · Corpus Christi",
        focus: "Spanish-first pages and year-round cooling ads",
      },
      {
        name: "West Texas & the Panhandle",
        cities: "El Paso · Lubbock · Amarillo · Midland · Odessa",
        focus: "Furnace season up north and wide areas to claim",
      },
    ],
    other:
      "Based in Tyler, College Station or Beaumont? We'll cover your area too.",
  },
  reviews: {
    title: "Texas Service Owners on Working With Us",
    lead: "A 5.0 Google rating from contractors and other local businesses.",
  },
  pricing: {
    title: "Texas HVAC Marketing Plans and Pricing",
    compareTitle: "See How the Texas Plans Differ",
    addOnsTitle: "Add-Ons for Heat Waves and Freeze Weeks",
    customTitle: "Branches in more than one Texas metro?",
  },
  faq: {
    title: "Marketing for HVAC Companies in Texas, Answered",
    lead: "Licensing, freezes, commercial work, Spanish and plans. Want a real person? Call us.",
    items: [
      {
        q: "Does my TDLR license number need to be in my Texas HVAC marketing?",
        a: "Yes. TDLR licenses air conditioning and refrigeration contractors, and its rules call for the licensee's number on both sides of work trucks and in advertising. We place your number on your Google profile, website header and ads, which also tells homeowners and AI tools they're calling a licensed company.",
      },
      {
        q: "How do you market commercial HVAC companies in Texas?",
        a: "With separate pages, ads and profile services for rooftop units, chillers, maintenance agreements and tenant build-outs, aimed at property managers and facility teams. We also state your license class on those pages, since a Class B license caps the system size you can work on while Class A doesn't.",
      },
      {
        q: "How should I prepare my HVAC marketing for a Texas freeze?",
        a: "Before the first cold front. We publish heat pump, emergency heat and furnace repair pages in the fall, add those services to your Google profile and stage ads that switch on when forecasts drop below freezing. When the rush comes, you're already on the map.",
      },
      {
        q: "Can I rank in Dallas and Houston with one Google profile?",
        a: "Not reliably. A profile ranks best near its verified address, so each real branch needs its own profile, plus city pages and ads for the suburbs around it. If you run one shop, we widen your reach with service pages and ads instead of fake locations.",
      },
      {
        q: "Do you run Spanish HVAC marketing in Houston and the Valley?",
        a: "Yes. Spanish service pages, Google posts, ads and review requests are all part of the work, and Spanish calls get their own tag so you can see what that audience books. It fits Houston, San Antonio, El Paso and the Rio Grande Valley especially well.",
      },
      {
        q: "How do I compare HVAC marketing companies near me in Texas?",
        a: "Ask each one to show your current map ranking across your service area, explain who owns your website and ad accounts, and spell out the contract terms. We answer all three in a free audit, keep every account in your name and work month to month.",
      },
      {
        q: "What do Texas HVAC marketing plans cost?",
        a: "Three tiers are available: $297, $750 or $1,500 monthly, never locked into a contract. Google receives your ad spend with a 0% markup from us. Single-metro shops usually start on the first tier, while multi-metro companies with ads and commercial pages fit the larger ones.",
      },
    ],
  },
  audit: {
    title: "Claim a Free HVAC Marketing Audit for Your Texas Metro",
    lead: [
      "We check where you rank across each Texas city you serve, then score your Google listing, ",
      { href: "/services/web-design", label: "website" },
      " and reviews to show which competitors are taking the calls you should be getting.",
    ],
    points: [
      "Every Texas metro and suburb checked",
      "TDLR license and profile details reviewed",
      "Plans start at $297 per month",
    ],
    form: {
      formType: "hvac-marketing-texas",
      badge: "Free Texas HVAC audit",
      title: "Request My Texas HVAC Audit",
      subtitle: "No cost, no contract, no pressure.",
      submitText: "Send My Texas HVAC Audit",
      messageLabel: "Cities you cover and jobs you want more of",
      messagePlaceholder:
        "e.g. Katy and Cypress, AC repair and heat pump installs",
    },
  },
  banner: {
    title: "Be the First HVAC Call Texans Make, Summer or Freeze",
    lead: "One free audit covers your rankings from Houston to El Paso.",
    icons: ["sun", "snow"],
  },
};
