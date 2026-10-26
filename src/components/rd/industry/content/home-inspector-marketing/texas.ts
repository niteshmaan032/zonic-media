import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* TEXAS HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush returned no_api_units on 24 Oct, so resource_organic
   and phrase_these could not run; keywords come from web research. The
   live title's core term "Home Inspector Marketing in Texas" is kept in the
   title, and every phrase in the live route's keywords meta sits in the
   title, H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): TREC licenses inspectors in three tiers
   (apprentice, real estate inspector, professional inspector) and requires
   the REI 7-6 report form; WDI reports fall under the Texas Department of
   Agriculture's Structural Pest Control Service, not the TREC license;
   expansive clay soils make foundations a top buyer question in Houston,
   DFW and San Antonio; South Texas add-ons include pools, sewer scope and
   septic; buyers book inside the option period. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "texas-2",
  liveUrl: "/services/home-inspector-marketing/texas",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Texas",
  meta: {
    title: "Home Inspector Marketing in Texas | SEO, Maps & Agent Referrals",
    description:
      "Texas home inspector marketing for Houston, DFW, Austin and San Antonio: Map Pack rankings, home inspector SEO, ads and reviews for TREC-licensed inspectors.",
    keywords: [
      "home inspector marketing texas",
      "home inspector in texas",
      "home inspector houston texas",
      "home inspector austin tx",
      "home inspector san antonio",
      "texas licensed home inspectors",
      "home inspector marketing",
      "home inspector seo",
    ],
  },
  palette: PALETTES.violetCyan,
  hero: {
    h1: "Texas Home Inspector Marketing Agency for Houston, DFW and Austin",
    h1NoWrap: "DFW and Austin",
    lead: [
      "Texas buyers pick inspectors fast, often the same day their option period starts, and agents lean on names they trust. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing services",
      },
      " put your TREC-licensed company in the Map Pack, in AI answers and in front of agents across every metro you cover.",
    ],
    cta: "Get My Texas Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top of the map in every metro",
        sub: "Houston, DFW, Austin and San Antonio suburbs too",
        chips: [
          "Houston",
          "Fort Worth",
          "Austin",
          "San Antonio",
          "+ more metros",
        ],
      },
      left: {
        icon: "clock",
        title: "Booked inside the option period",
        sub: "Online scheduling buyers can use tonight",
      },
      right: {
        icon: "pool",
        title: "Add-ons on every booking",
        sub: "Pool, sewer scope and phase inspections up front",
      },
      bottom: {
        title: "Agents who keep referring",
        sub: "Reviews and quick reports that make you the safe pick",
      },
    },
  },
  services: {
    title: "Marketing Services Built for Texas Licensed Home Inspectors",
    lead: "Texas home inspectors keep pace with growing metros via one team.",
    cta: "Audit My Texas Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles That Show Your TREC License",
        desc: "Your TREC license number, inspection categories, suburbs served and add-ons go on your profile, with fresh job photos that lift your map rank.",
        points: [
          "TREC number displayed",
          "Suburbs set as service areas",
          "Job photos added weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Get my profile fixed",
          },
        ],
      },
      {
        icon: "search",
        title: "Suburb-Level Home Inspector SEO Across Texas",
        desc: "Pages for Katy, Frisco, Round Rock and each suburb you serve, plus foundation, pool, sewer scope and new-construction phase inspection pages.",
        points: [
          "Suburb pages that rank",
          "Phase inspection pages",
          "Foundation answer pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for home service companies",
          },
        ],
      },
      {
        icon: "target",
        title: "Ads for Buyers Inside Their Option Period",
        desc: "Google search ads and Local Services Ads timed for buyers who need an inspector within days, with spend held to the zip codes you cover.",
        points: [
          "Option-period keywords",
          "Zip code targeting",
          "Every call recorded",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for inspectors" },
        ],
      },
      {
        icon: "monitor",
        title: "Inspection Websites With Online Scheduling",
        desc: "A mobile site where buyers choose an inspection, add a pool or sewer scope, pick a time and pay, without waiting for a callback.",
        points: [
          "Pick, add and pay online",
          "Sample TREC report",
          "Click-to-call header",
        ],
        links: [
          { href: "/services/web-design", label: "Website design services" },
        ],
      },
      {
        icon: "star",
        title: "Reviews Plus Pages Agents Can Share",
        desc: "Automatic review requests after every report, owner replies drafted for you and a page agents can share with their buyers.",
        points: [
          "Requests after each report",
          "Replies drafted for you",
          "Shareable agent page",
        ],
        links: [{ href: "/services", label: "All Zonic Media services" }],
      },
      {
        icon: "shield",
        title: "Help for Suspended or Unverified Profiles",
        desc: "Suspensions and stuck verifications cost Texas inspectors real bookings. We locate the cause, fix the profile and push the appeal through; 900+ profiles reinstated.",
        points: [
          "Root cause found",
          "Profile corrected",
          "Appeal run start to finish",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my listing",
          },
          { href: "/services/gmb-verification-help", label: "Get verified" },
        ],
      },
    ],
  },
  growth: {
    title: "How We Help a Home Inspector in Texas Fill the Calendar",
    lead: "Map rankings, AI answers and tracked ad calls, all measured against booked inspections.",
    rows: [
      {
        title: "Top 3 on the Map for “Home Inspector Houston Texas”",
        body: [
          "Houston buyers search from Katy, Pearland and The Woodlands, and Google shows each of them a different top three. We set your service areas, build suburb pages and grow reviews, so your pin keeps showing up wherever your next client is searching.",
        ],
        points: [
          "Suburb service areas",
          "Foundation and pool listed",
          "Weekly rank grid",
          "TREC license on profile",
        ],
        cta: "See My Houston Ranking",
        ui: {
          kind: "maps",
          query: "home inspector houston texas",
          city: "Houston",
          category: "Home inspector · TREC licensed",
        },
      },
      {
        title: "Get Named When AI Is Asked for a “Home Inspector Austin TX”",
        body: [
          "Austin's tech transplants ask ChatGPT and Google's AI Overviews which inspectors handle new builds and older bungalows. Through ",
          { href: "/services/ai-seo-services", label: "AI search marketing" },
          ", we make your site, reviews and listings tell one clear story, so those tools recommend your company.",
        ],
        points: [
          "New-build answer pages",
          "One profile story everywhere",
          "Schema with TREC details",
          "Reviews naming suburbs",
        ],
        cta: "Check My AI Visibility",
        ui: {
          kind: "ai",
          query: "best home inspector austin tx for new construction",
          intro: "For new-construction inspections in Austin, TX,",
          bullets: [
            "Phase and final inspections",
            "Serves Round Rock and Leander",
            "TREC-licensed team",
          ],
        },
      },
      {
        title: "Track Every Ad Call to a Booked Texas Inspection",
        body: [
          "Ad spend is only worth it when clicks become inspections. Every call gets recorded and labeled by ad, service and suburb, and budget moves toward the searches that book phase inspections, pool add-ons and full buyer inspections.",
        ],
        points: [
          "Calls recorded and labeled",
          "Spend by zip code",
          "Bad LSA leads flagged",
          "Bookings reported monthly",
        ],
        cta: "Show Me My Ad Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Dallas-Fort Worth",
          calls: [
            {
              service: "Pre-pour phase inspection",
              source: "Google Ads",
              when: "8:20 AM",
            },
            {
              service: "Buyer inspection + pool",
              source: "Local Services Ads",
              when: "11:05 AM",
            },
            {
              service: "11-month warranty inspection",
              source: "Google Maps",
              when: "2:40 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Texas Metros Where We Grow Inspection Companies",
    lead: "Each metro has its own soil, builders and buyer habits, so pages, service areas and ads are set per market.",
    items: [
      {
        name: "Greater Houston",
        cities: "Houston · Katy · Pearland · The Woodlands · Sugar Land",
        focus: "Foundation and flood-history questions buyers ask",
      },
      {
        name: "Dallas-Fort Worth",
        cities: "Dallas · Fort Worth · Frisco · McKinney · Arlington",
        focus: "Phase inspections across booming northern suburbs",
      },
      {
        name: "Austin Metro",
        cities: "Austin · Round Rock · Leander · Georgetown",
        focus: "New-build and older-bungalow pages for transplants",
      },
      {
        name: "San Antonio & New Braunfels",
        cities: "San Antonio · New Braunfels · Schertz · Boerne",
        focus: "Military buyers near the bases and Hill Country homes",
      },
      {
        name: "El Paso & West Texas",
        cities: "El Paso · Midland · Odessa · Lubbock",
        focus: "Fewer competitors and wide service areas to claim",
      },
      {
        name: "Gulf Coast & the Valley",
        cities: "Corpus Christi · McAllen · Brownsville · Galveston",
        focus: "Coastal and bilingual pages for buyers on the move",
      },
    ],
    other:
      "Inspecting in Tyler, Waco or Amarillo? Pages for those markets are on the table as well.",
  },
  reviews: {
    title: "What Owners Tell Google About Working With Us",
    lead: "Reviews from inspection companies, trades and local service owners.",
  },
  pricing: {
    title: "Texas Home Inspector Marketing Plans",
    lead: [
      "Every tier renews monthly, and ads are billed at cost with a 0% markup. Lost a listing? ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Profile reinstatement",
      },
      " is part of every plan.",
    ],
    compareTitle: "Compare Texas Inspector Plans",
    compareLead: "One metro or several, see what each tier includes.",
    addOnsTitle: "Add-Ons for Peak Closing Months",
    addOnsLead: "Extra suburb pages or ad pushes when contracts surge.",
    customTitle: "Running crews in several metros?",
    customText: "Share your metros and team size for one quote.",
  },
  faq: {
    title: "Answers on Home Inspector Marketing: Texas Edition",
    lead: "TREC rules, WDI, foundations, new builds and pricing. Rather talk? Give us a call.",
    items: [
      {
        q: "How should Texas licensed inspectors show their TREC license in marketing?",
        a: "TREC licenses inspectors in three tiers: apprentice, real estate inspector and professional inspector. Show your tier and license number in your Google profile, on your website and in reports, since agents and buyers often check it. We add it to your schema markup too, so search tools read it correctly.",
      },
      {
        q: "Is it possible to be the home inspector San Antonio buyers find without an agent?",
        a: "Yes. Plenty of San Antonio buyers, including military families relocating to the area, search on their own. A strong profile, pages for Schertz, Boerne and New Braunfels, and steady reviews let you win those direct bookings while agent referrals keep coming.",
      },
      {
        q: "Can a TREC inspector advertise WDI termite reports?",
        a: "Only with the right credential. WDI reports in Texas fall under the Texas Department of Agriculture's Structural Pest Control Service, so a TREC license alone doesn't cover them. If you hold both, we promote it; if a partner handles it, we say so clearly on your pages.",
      },
      {
        q: "How do I market foundation-related inspections in Houston and Dallas?",
        a: "Write pages that explain what you check on slab foundations in clay-soil areas and when you recommend a structural engineer. Buyers in Houston and DFW search these questions constantly. Add photos from real inspections and reviews that mention foundations to back it up.",
      },
      {
        q: "Is it worth marketing new-construction phase inspections in DFW and Austin?",
        a: "Yes. Builders keep adding homes in Frisco, McKinney, Leander and Georgetown, and many buyers want pre-pour, pre-drywall and final inspections plus an 11-month warranty check. A dedicated page and a profile service for each phase brings those bookings in before the builder's walkthrough.",
      },
      {
        q: "Will marketing to buyers hurt my agent referrals in Texas?",
        a: "No, the two help each other. Agents check your reviews and website before recommending you, so stronger online visibility makes referring you easier. We add an agent page with sample TREC reports and booking links, and buyers who find you directly become a second source of work.",
      },
      {
        q: "How are Texas home inspector marketing plans priced?",
        a: "The three Texas tiers cost $297, $750 and $1,500; each renews monthly and can be cancelled any month. Ad budgets go straight to Google at a 0% markup. Single-metro inspectors tend to start lower, while multi-metro teams need more pages and campaigns.",
      },
    ],
  },
  audit: {
    title: "Request a Free Texas Home Inspector Audit",
    lead: [
      "You'll learn where you rank in each Texas metro and suburb, and how your profile, ",
      { href: "/services/web-design", label: "site and online booking" },
      " and reviews compare. Working across state lines? We also grow inspectors in ",
      {
        href: "/services/home-inspector-marketing/oklahoma",
        label: "Oklahoma",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/louisiana",
        label: "Louisiana",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/arkansas",
        label: "Arkansas",
      },
      ".",
    ],
    points: [
      "Every metro and suburb checked",
      "TREC details reviewed",
      "Entry plan $297 monthly",
    ],
    form: {
      formType: "home-inspector-marketing-texas",
      badge: "Texas inspector audit",
      title: "Get My Free Texas Inspection Marketing Audit",
      subtitle: "Free, fast and no strings attached.",
      submitText: "Send My Texas Inspector Audit",
      messageLabel: "Your Texas metros and services",
      messagePlaceholder: "e.g. Katy and Cypress, buyer and phase inspections",
    },
  },
  banner: {
    title: "Own the Texas Map Before the Next Option Period",
    lead: "Start with a no-cost audit of your rank across each Texas metro.",
    icons: ["inspectList", "clock"],
  },
};
