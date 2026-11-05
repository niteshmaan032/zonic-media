import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* IDAHO HOME INSPECTOR MARKETING — new live state page (5 Nov 2026).
   Brief: docs/fence-and-inspector-brief-2026-11.md. Semrush units are out;
   volumes come from reports/research/home-inspector-states-2026-11.md
   ("idaho home inspector license" 140, "home inspector boise" 20).
   Web research (5 Nov 2026):
   - Licensing: Idaho does not license or register home inspectors at the
     state level (KTVB report quoting the Idaho Association of Home
     Inspectors; contractorlicenserequirements.com; theceshop.com). No
     Idaho statute or DOPL page was found, so the FAQ adds "check current
     state rules".
   - Radon: the Idaho Department of Health and Welfare has found high
     radon in homes in every county (healthandwelfare.idaho.gov).
   - Boise-area inspector listings sell new-construction, well, septic and
     radon services; well flow testing is a common rural add-on.
   - No Idaho rule on agents recommending inspectors was found; the agent
     lane markets on service only (never referral payments). */

export const CONTENT: LocationContent = {
  draftSlug: "idaho",
  liveUrl: "/services/home-inspector-marketing/idaho",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Idaho",
  meta: {
    title: "Home Inspector Marketing in Idaho | Boise & Coeur d'Alene SEO",
    description:
      "Idaho home inspector marketing for the Treasure Valley, North Idaho and eastern Idaho: Map Pack rankings, inspector SEO, radon and well pages, AI answers.",
    keywords: [
      "home inspector marketing idaho",
      "home inspector boise",
      "home inspection boise idaho",
      "home inspector meridian idaho",
      "home inspection coeur d'alene",
      "idaho home inspector license",
      "home inspector seo idaho",
      "home inspector lead generation idaho",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.emeraldViolet,
  hero: {
    h1: "Idaho Home Inspector Marketing Agency, Boise to Coeur d'Alene",
    h1NoWrap: "Coeur d'Alene",
    lead: [
      "Idaho has no state home inspector license, so buyers judge you on certifications, insurance and reviews. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing for Idaho",
      },
      " puts that proof on Google Maps, inside AI answers and in front of agents from Meridian to Post Falls.",
    ],
    cta: "Get My Idaho Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 across the Treasure Valley",
        sub: "Boise, Meridian, Nampa and every town you drive to",
        chips: ["Boise", "Meridian", "Nampa", "Coeur d'Alene", "+ your town"],
      },
      left: {
        icon: "award",
        title: "Credentials buyers can see",
        sub: "Certifications and insurance shown up front",
      },
      right: {
        icon: "water",
        title: "More well and septic jobs",
        sub: "Rural add-ons booked with the inspection",
      },
      bottom: {
        title: "New builds kept on the calendar",
        sub: "Phase inspections for fast-growing subdivisions",
      },
    },
  },
  services: {
    title: "Idaho Home Inspection Marketing That Proves Your Credentials",
    lead: "No state license means trust has to be earned online, so we build it on every channel buyers use.",
    cta: "Audit My Idaho Marketing",
    items: [
      {
        icon: "pin",
        title: "Idaho Google Profiles With Credentials Up Front",
        desc: "Without a state license to point to, we show your association membership, insurance and service areas, plus radon, well and septic services.",
        points: [
          "Membership and insurance",
          "Valley service areas",
          "Rural add-ons listed",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Get my listing in shape",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO for Boise, Meridian and Beyond",
        desc: "City pages across the Treasure Valley and North Idaho, plus radon, well flow, septic and new-construction pages that answer buyers' questions.",
        points: [
          "Treasure Valley pages",
          "Well and septic pages",
          "Answer-first FAQs",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for service companies",
          },
        ],
      },
      {
        icon: "target",
        title: "Idaho Google Ads Split by Region",
        desc: "Separate campaigns for the Treasure Valley, North Idaho and the eastern cities, so each ad fits local listing seasons and drive times.",
        points: [
          "Regional campaigns",
          "Local Services Ads",
          "Drive-time targeting",
        ],
        links: [
          { href: "/services/google-ads", label: "Launch my Google Ads" },
        ],
      },
      {
        icon: "monitor",
        title: "Inspection Booking Sites for Idaho Buyers",
        desc: "Buyers pick the inspection, add radon, well or septic checks, choose a slot and see an example report before you ever pick up the phone.",
        points: ["Rural add-on options", "Real-time slots", "Report preview"],
        links: [
          { href: "/services/web-design", label: "Get a booking website" },
        ],
      },
      {
        icon: "star",
        title: "Reviews and an Agent Page for Idaho Realtors",
        desc: "Requests go out with every report, and a simple agent page lists your availability, credentials and the towns you cover.",
        points: [
          "Review asks with reports",
          "Agent-ready page",
          "Fresh replies weekly",
        ],
        links: [
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Try the Maps rank checker",
          },
        ],
      },
      {
        icon: "shield",
        title: "Idaho Profile Suspended? We Handle the Appeal",
        desc: "We find what triggered the suspension or failed verification, fix the cause and stay with the appeal until it's settled, with 900+ profiles reinstated behind us.",
        points: ["Trigger traced", "Listing repaired", "Appeal followed up"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get my profile verified",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Idaho Buyers Pick an Inspector, and Where We Place You",
    lead: "Maps for local searches, AI answers for relocating buyers and ad calls that land on your phone.",
    rows: [
      {
        title: "Win the Map Pack for “Home Inspector Boise”",
        body: [
          "Buyers in Boise's North End, Eagle and Kuna call one of the first three map results. We define your Ada and Canyon County service areas, add pages for the towns you drive to and earn reviews naming them, so you stay visible valley-wide.",
        ],
        points: [
          "Ada and Canyon pages",
          "Town names in reviews",
          "Radon and well listed",
          "Monthly rank grid",
        ],
        cta: "Check My Boise Ranking",
        ui: {
          kind: "maps",
          query: "home inspector boise",
          city: "Boise",
          category: "Home inspector · Radon testing",
        },
      },
      {
        title: "Get Recommended When Movers Ask AI for an Idaho Inspector",
        body: [
          "Plenty of buyers moving to Meridian or Coeur d'Alene ask ChatGPT and Gemini for an inspector before they arrive. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " makes your credentials, services and reviews consistent everywhere and adds clear radon and well answers, giving AI Overviews and Perplexity facts to cite.",
        ],
        points: [
          "Credentials in schema",
          "Radon and well answers",
          "Listings that agree",
          "Reviews naming towns",
        ],
        cta: "Find Out if AI Names Me",
        ui: {
          kind: "ai",
          query: "certified home inspector coeur d'alene radon and well test",
          intro: "For a certified home inspector in Coeur d'Alene,",
          bullets: [
            "Certified and insured",
            "Radon and well water tests",
            "Covers Post Falls and Hayden",
          ],
        },
      },
      {
        title: "Google Ads That Ring Your Phone From Nampa to Idaho Falls",
        body: [
          "Buyers under contract want a date, not a form. Our search and Local Services campaigns are split by region, every call is tracked and shift effort to the towns and inspection types that actually book, from Treasure Valley new builds to rural well checks.",
        ],
        points: [
          "Calls tracked by source",
          "Regional ad groups",
          "New-build keywords",
          "Weekly tuning",
        ],
        cta: "Start My Idaho Ads",
        ui: {
          kind: "calls",
          title: "Calls this week from Idaho ads",
          calls: [
            {
              service: "New-build inspection",
              source: "Google Ads",
              when: "Mon 9:12 am",
            },
            {
              service: "Well flow and water test",
              source: "Local Services",
              when: "Tue 2:40 pm",
            },
            {
              service: "Radon test add-on",
              source: "Google Maps",
              when: "Wed 11:05 am",
            },
          ],
        },
      },
    ],
  },
  audiences: {
    title: "Buyers' Agents and Idaho Homeowners: Two Ways You Get Booked",
    lead: [
      "Agents steer many buyer inspections, while owners, sellers and new-build buyers book on their own. We court agents with service, never referral payments, and meet owners at the moment they search.",
    ],
    lanes: [
      {
        audience: "Idaho Buyer's Agents",
        icon: "agent",
        pitch:
          "Treasure Valley and North Idaho agents need inspectors who fit tight timelines and write reports buyers can act on. We show them both before they ever call.",
        query: "Agent: Nampa buyer, needs inspection plus well test",
        flow: [
          "Finds agent page",
          "Books in minutes",
          "Report on time",
          "Refers again",
        ],
        badge: "The agent's go-to inspector",
        jobs: [
          {
            name: "Pre-purchase inspection",
            tactic: "Credentials and open dates on an agent page",
          },
          {
            name: "Well and septic on rural sales",
            tactic: "Add-on checklist agents can request in one tap",
          },
          {
            name: "Re-check after seller repairs",
            tactic: "Quick rebook links in every report email",
          },
        ],
      },
      {
        audience: "Idaho Owners and New-Build Buyers",
        icon: "home",
        pitch:
          "Owners booking for themselves search the job by name. Pages for new-construction phases, warranty checks and pre-listing inspections put you in front of each search.",
        query: "new construction inspection meridian idaho",
        flow: [
          "Searches the phase",
          "Reads your page",
          "Adds radon test",
          "Books online",
        ],
        badge: "Direct booking, no middleman",
        jobs: [
          {
            name: "Pre-drywall and final inspections",
            tactic: "Phase pages for Treasure Valley subdivisions",
          },
          {
            name: "11-month warranty inspection",
            tactic: "Reminder campaign before builder deadlines",
          },
          {
            name: "Pre-listing inspection",
            tactic: "Seller page that explains repairs before listing",
          },
        ],
      },
    ],
    addOns: {
      title: "Idaho Add-On Tests Worth Promoting",
      items: [
        "Radon testing",
        "Well flow and water quality",
        "Septic evaluation",
        "Sewer scope",
        "Thermal imaging",
        "Mold sampling",
      ],
    },
    cta: "Build My Idaho Booking Plan",
  },
  regions: {
    title: "Where in Idaho We Grow Inspection Companies",
    lead: "Idaho's markets sit hours apart, so the Treasure Valley, the panhandle and eastern Idaho each get their own pages, ads and review plan.",
    items: [
      {
        name: "Ada County",
        cities: "Boise · Meridian · Eagle · Kuna",
        focus: "Map Pack work in the state's largest metro",
      },
      {
        name: "Canyon County",
        cities: "Nampa · Caldwell · Middleton · Melba",
        focus: "New-construction phases in growing subdivisions",
      },
      {
        name: "North Idaho",
        cities: "Coeur d'Alene · Post Falls · Hayden · Sandpoint",
        focus: "Radon and well pages for lake-country homes",
      },
      {
        name: "Eastern Idaho",
        cities: "Idaho Falls · Pocatello · Rexburg · Blackfoot",
        focus: "Rural lots, wells and student-area rentals",
      },
      {
        name: "Magic Valley",
        cities: "Twin Falls · Jerome · Burley · Kimberly",
        focus: "Septic and acreage inspections outside town",
      },
      {
        name: "Mountain Towns",
        cities: "Ketchum · Hailey · McCall · Driggs",
        focus: "Second-home and cabin inspection pages",
      },
    ],
    other:
      "Inspecting in Lewiston, Moscow or Mountain Home? We'll add them to the plan.",
  },
  reviews: {
    title: "Idaho Inspectors, See Why Owners Rate Us 5.0",
    lead: "Straight-from-Google reviews by owners we have helped grow.",
  },
  pricing: {
    title: "Plans That Fit Idaho Inspection Companies",
    compareTitle: "Compare Idaho Plans",
    addOnsTitle: "Extras for Peak Building Season",
    customTitle: "Covering more than one Idaho region?",
  },
  faq: {
    title: "Idaho Home Inspector Marketing, Answered",
    lead: "Licensing, radon, wells, agents, AI search and pricing. Prefer the phone? Call us.",
    items: [
      {
        q: "Does Idaho require a home inspector license, and how does that affect marketing?",
        a: "Idaho doesn't issue a state home inspector license today, though you should check current state rules before relying on that. Without one, buyers look for other proof: association certification, insurance, years inspecting and detailed reviews. We place those signals on your profile, site and schema so trust is obvious.",
      },
      {
        q: "Should Idaho inspectors push radon testing?",
        a: "Yes, if you offer it. Idaho's health department has found high radon in homes in every county, and buyers increasingly ask for a test with the inspection. A clear radon page, a booking add-on and reviews that mention it help you win those jobs.",
      },
      {
        q: "How do I get more well and septic inspections in rural Idaho?",
        a: "Build pages for them and offer them at booking. Acreage buyers outside Boise, Twin Falls and Idaho Falls often need well flow, water quality and septic checks. We write those pages, add them as services on your Google profile and advertise them on rural search terms.",
      },
      {
        q: "Can I rank for “home inspector Boise” if my office is in Nampa?",
        a: "Possibly, though distance matters on Google Maps. We set Boise inside your service area, publish a Boise page with local detail, earn reviews from Boise clients and support it with ads. Many Canyon County inspectors win Boise jobs this way without a second office.",
      },
      {
        q: "How should I market to Idaho real estate agents?",
        a: "With service agents can see. Offer online booking, an example report, quick turnaround and plain-language summaries, then keep agents posted with a short monthly email or LinkedIn update. Never offer payments or gifts for referrals; agents pick you because their buyers had a smooth experience.",
      },
      {
        q: "Do AI assistants recommend home inspectors in Idaho?",
        a: "They do, and relocating buyers use them. ChatGPT, Gemini, Perplexity and AI Overviews pull from your site, listings and reviews. When those agree on your services, towns and credentials, you're far more likely to be the inspector they name in Boise or Coeur d'Alene.",
      },
      {
        q: "How much does home inspector marketing cost in Idaho?",
        a: "Choose a $297, $950 or $1,500 monthly plan, all month to month and free of long contracts; ad budgets are paid to Google directly with a 0% markup. Most Idaho firms begin with one region, then expand as the calendar fills.",
      },
    ],
  },
  audit: {
    title: "Your Free Idaho Inspector Marketing Checkup",
    lead: [
      "We map your rankings in each Idaho region you serve, review your profile, site and reviews, and flag the searches going to rivals. Also inspect in a neighboring state? See ",
      { href: "/services/home-inspector-marketing/utah", label: "Utah" },
      ", ",
      {
        href: "/services/home-inspector-marketing/washington",
        label: "Washington",
      },
      " and ",
      { href: "/services/home-inspector-marketing/oregon", label: "Oregon" },
      ".",
    ],
    points: [
      "Every region you serve, ranked",
      "Credentials and add-ons reviewed",
      "Plans from $297, month to month",
    ],
    form: {
      formType: "home-inspector-marketing-idaho",
      badge: "Free Idaho audit",
      title: "Request a Free Idaho Inspector Audit",
      subtitle: "Free to ask, no contract to sign.",
      submitText: "Send My Idaho Audit",
      messageLabel: "Your Idaho towns and add-on tests",
      messagePlaceholder: "e.g. Boise and Nampa, radon, well and septic",
    },
  },
  banner: {
    title: "Turn Idaho Searches Into Booked Inspections",
    lead: "Find out, free, where you rank across the valley and beyond.",
    icons: ["inspect", "water"],
  },
};
