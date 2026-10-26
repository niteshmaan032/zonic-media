import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* TEXAS PLUMBING MARKETING — redesign draft content (24 Oct 2026).
   Semrush US (24 Oct): resource_organic has no ranking data for the live
   URL, so the title keeps its head term "plumbing marketing agency in
   texas". Volumes used: plumber dallas 2,900 · plumber houston 2,400 ·
   plumber austin 2,400 · plumber san antonio 2,400 · plomero cerca de mi
   1,900 · plumber fort worth 1,600 · emergency plumber dallas 1,300 ·
   water heater repair houston 1,000 · slab leak repair dallas 480 ·
   slab leak repair houston 110 · plumbing marketing texas 20. Angles from
   web research: clay soil and slab leaks in Houston and DFW, hard freezes
   and burst pipes, Spanish-language search. */

export const CONTENT: LocationContent = {
  draftSlug: "texas-2",
  liveUrl: "/services/plumbing-marketing-agency/texas",
  parent: {
    href: "/services/plumbing-marketing-agency",
    label: "Plumbing Marketing Agency",
    niche: "Plumbing",
  },
  place: "Texas",
  meta: {
    title: "Plumbing Marketing Agency in Texas | Houston, Dallas & Austin",
    description:
      "Texas plumbing marketing for Houston, DFW, Austin and San Antonio: Map Pack rankings, English and Spanish SEO, Google Ads and more slab leak and freeze calls.",
    keywords: [
      "plumbing marketing agency texas",
      "plumbing marketing texas",
      "plumber houston",
      "plumber dallas",
      "plumber san antonio",
      "plomero cerca de mi",
      "slab leak repair dallas",
    ],
  },
  palette: PALETTES.redIndigo,
  hero: {
    h1: "Texas Plumbing Marketing Agency for Calls in English and Spanish",
    h1NoWrap: "English and Spanish",
    lead: [
      "Texas is four giant plumbing markets plus a long list of growing towns, and in each one the job goes to the company on top of Google. Our ",
      {
        href: "/services/plumbing-marketing-agency",
        label: "plumbing marketing agency",
      },
      " gets you there in Houston, DFW, Austin and San Antonio, in both languages your customers speak.",
    ],
    cta: "Get My Texas Plumbing Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 in every Texas metro",
        sub: "From the Gulf Coast to the Panhandle, suburbs included",
        chips: ["Houston", "Dallas", "Austin", "San Antonio", "+ your suburb"],
      },
      left: {
        icon: "translate",
        title: "Calls in two languages",
        sub: "Spanish pages and ads for plomero searches",
      },
      right: {
        icon: "foundation",
        title: "More slab leak jobs",
        sub: "Leak detection pages for clay-soil neighborhoods",
      },
      bottom: {
        title: "Ready before the next hard freeze",
        sub: "Burst pipe ads queued up ahead of the cold",
      },
    },
  },
  services: {
    title: "Plumbing Marketing Built for Texas-Sized Service Areas",
    lead: "Texas plumbers cover big areas, so one crew covers every channel.",
    cta: "Audit My Texas Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Rankings Across Houston, DFW and Beyond",
        desc: "Your Google profile gets plumbing categories, suburb service areas and new photos, so you climb the map in each Texas city you work.",
        points: [
          "Profile categories fixed",
          "Suburb-level service areas",
          "New photos every week",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Optimize my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Plumber SEO in English and Spanish",
        desc: "City and service pages for searches like water heater repair in Houston, plus Spanish versions for customers looking for a plomero.",
        points: [
          "Page per city and job",
          "Spanish service pages",
          "Clean directory listings",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-plumber",
            label: "SEO built for plumbers",
          },
        ],
      },
      {
        icon: "target",
        title: "Emergency Ads and Google Guaranteed Listings",
        desc: "Emergency search ads plus Google Guaranteed Local Services Ads, fenced to the zip codes your trucks can reach quickly.",
        points: [
          "Burst pipe and leak ads",
          "Google Guaranteed badge",
          "Zip code targeting",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads campaigns" },
        ],
      },
      {
        icon: "monitor",
        title: "Fast Websites With Bilingual Pages",
        desc: "Mobile-first plumbing sites with a call button on every screen, an English and Spanish switch and booking that takes a few taps.",
        points: [
          "Always-visible call button",
          "English and Spanish versions",
          "Simple online booking",
        ],
        links: [
          {
            href: "/services/plumbing-website-design",
            label: "Plumber website design",
          },
          { href: "/services/web-design", label: "Custom web design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews From Every Texas Job",
        desc: "Review requests by text in the customer's own language, sent as the job closes, with replies that sound like you wrote them.",
        points: [
          "Requests in two languages",
          "Owner-style replies",
          "Bad reviews flagged fast",
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
        title: "Help With Suspended or Unverified Listings",
        desc: "A suspended listing can stop your calls overnight. We trace what triggered it, correct it and file the appeal, backed by 900+ profiles reinstated.",
        points: [
          "Cause found and fixed",
          "Video verification prep",
          "Appeal handled for you",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Fix my verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How We Win Texas Plumbers More Booked Jobs",
    lead: "From the map to AI answers to the call log, every step is measured against real jobs.",
    rows: [
      {
        title: "Hold a Top Spot When Dallas Searches for an Emergency Plumber",
        body: [
          "Dallas homeowners with water spreading across the floor open Google Maps and phone whoever sits in the top three. We build out your profile, Plano and Oak Cliff pages and steady reviews so your pin is one of those three.",
        ],
        points: [
          "24/7 hours on your profile",
          "Suburb pages across DFW",
          "Leak and slab services listed",
          "Grid rank tracking",
        ],
        cta: "See My Dallas Ranking",
        ui: {
          kind: "maps",
          query: "emergency plumber dallas",
          city: "Dallas",
          category: "Plumber · Se habla español",
        },
      },
      {
        title: "Show Up When Texans Ask AI Who Fixes Slab Leaks",
        body: [
          "Plenty of Houston homeowners now type their leak question into an AI assistant instead of a search box. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO work" },
          " shapes the website copy, Google reviews and directory listings those assistants read, so your company is the one they suggest.",
        ],
        points: [
          "Slab leak answer pages",
          "Same details on every listing",
          "Schema markup in place",
          "Reviews naming the repair",
        ],
        cta: "Test My AI Visibility",
        ui: {
          kind: "ai",
          query: "slab leak repair houston",
          intro: "For slab leak repair in Houston,",
          bullets: [
            "Non-invasive leak detection",
            "Works in Katy and Sugar Land",
            "Bilingual crew on call",
          ],
        },
      },
      {
        title: "See Which Ads Bring Texas Plumbing Calls",
        body: [
          "Paid search and Local Services Ads only pay off when you know which calls turn into jobs. We record and tag each call by source, service and language, then move spend toward whatever books work in your metro.",
        ],
        points: [
          "Calls recorded and tagged",
          "Spanish calls tracked",
          "Junk leads disputed",
          "Monthly booked-job report",
        ],
        cta: "Track My Texas Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Houston",
          calls: [
            {
              service: "Slab leak detection",
              source: "Local Services Ads",
              when: "8:12 AM",
            },
            {
              service: "Reparación de calentador",
              source: "Google Ads · Spanish",
              when: "10:40 AM",
            },
            {
              service: "Burst pipe repair",
              source: "Google Maps",
              when: "1:05 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Texas Metros and Regions We Cover",
    lead: "Each region has its own search habits, housing and languages, so we set up pages, service areas and ads to match.",
    items: [
      {
        name: "Greater Houston",
        cities: "Houston · Katy · Sugar Land · The Woodlands",
        focus: "Slab leak and flood-damage pages, English and Spanish",
      },
      {
        name: "Dallas-Fort Worth",
        cities: "Dallas · Fort Worth · Plano · Frisco · Arlington",
        focus: "Suburb pages for a metro that keeps spreading north",
      },
      {
        name: "Austin & Central Texas",
        cities: "Austin · Round Rock · Georgetown · San Marcos",
        focus: "Water heater and repipe searches in new neighborhoods",
      },
      {
        name: "San Antonio & Hill Country",
        cities: "San Antonio · New Braunfels · Boerne",
        focus: "Bilingual Map Pack work and hard-water service pages",
      },
      {
        name: "Rio Grande Valley & El Paso",
        cities: "McAllen · Brownsville · El Paso",
        focus: "Spanish-first pages and ads for border cities",
      },
      {
        name: "Coastal Bend & West Texas",
        cities: "Corpus Christi · Lubbock · Midland",
        focus: "Town pages that reach customers far from big metros",
      },
    ],
    other:
      "Working outside these metros? We'll build pages for your Texas towns too.",
  },
  reviews: {
    title: "Owners Rate Zonic Media 5.0 on Google",
    lead: "Reviews from plumbers, HVAC techs and other home service owners.",
  },
  pricing: {
    title: "Texas Plumbing Marketing Plans and Pricing",
    lead: [
      "Each tier runs month to month, and ad spend carries a 0% markup. Need a site first? Pair any plan with a ",
      {
        href: "/services/plumbing-website-design",
        label: "new plumbing website",
      },
      ".",
    ],
    compareTitle: "Texas Plans Side by Side",
    compareLead: "Single metro or statewide, see what each one covers.",
    addOnsTitle: "Add-Ons for Freeze Weeks and Busy Summers",
    addOnsLead: "Spin up extra city pages or emergency ads when demand jumps.",
    customTitle: "Trucks in Houston and DFW at once?",
    customText: "Send us every location for one combined quote.",
  },
  faq: {
    title: "Texas Plumbing Marketing, Answered",
    lead: "Plans, cities, Spanish, slab leaks and freezes. Prefer to talk? Call our team.",
    items: [
      {
        q: "How is Texas plumbing marketing priced?",
        a: "Three plans are on offer, at $297, $750 and $1,500 monthly, and each stays month to month. Any ad spend is passed through with a 0% markup from us. Larger plans cover more cities and metros.",
      },
      {
        q: "Do you run Spanish-language pages and ads in Texas?",
        a: "Yes. Plenty of Texans search for a plomero cerca de mí, so we write Spanish service pages, Google posts and ads, and send review requests in the customer's language. Calls are tagged by language, so you can see what the Spanish side brings in.",
      },
      {
        q: "How can I get more slab leak repair jobs in Houston or Dallas?",
        a: "Give slab leaks their own page for each metro, add leak detection to the services on your Google profile and run ads on slab leak searches. Reviews that mention the repair help too, since homeowners in clay-soil areas look for this work all year.",
      },
      {
        q: "Can one plumbing company rank in several Texas metros?",
        a: "Yes, where you have a real branch or service area. A Google profile ranks best near its own location, so companies in several metros need a verified profile per branch plus city pages for each area. We set up both within Google's rules.",
      },
      {
        q: "How should Texas plumbers prepare their marketing for a hard freeze?",
        a: "Get ready before the forecast turns. We prepare burst pipe and frozen line pages, write Google posts on protecting pipes and stage emergency ads that can go live the moment temperatures drop, so your phones are covered when the rush starts.",
      },
      {
        q: "Are Local Services Ads worth it for Texas plumbers?",
        a: "They're worth testing for most plumbing companies. Local Services Ads sit above regular ads, show the Google Guaranteed badge and charge per lead rather than per click. We handle setup, license and insurance details, and we dispute junk leads for you.",
      },
      {
        q: "What if Google suspends my plumbing company's profile?",
        a: "We find the reason, correct it and file a reinstatement request, keeping you updated until it's live again. We've reinstated 900+ profiles so far. Meanwhile, ads and your website keep the phone ringing.",
      },
    ],
  },
  audit: {
    title: "Book a Free Texas Plumbing Marketing Audit",
    lead: [
      "Our team reviews where you sit on the map in every Texas city you serve, along with your profile, site, reviews and Spanish searches, and shows where calls slip to other plumbers.",
    ],
    points: [
      "Every metro and suburb checked",
      "English and Spanish searches tested",
      "$297, $750 or $1,500 plans, month to month",
    ],
    form: {
      formType: "plumbing-marketing-texas",
      badge: "Free Texas audit",
      title: "Get a Free Texas Plumbing Audit",
      subtitle: "Free, quick and no obligation.",
      submitText: "Send My Texas Audit",
      messageLabel: "Your Texas cities and services",
      messagePlaceholder:
        "e.g. Katy and Sugar Land, slab leaks and water heaters",
    },
  },
  banner: {
    title: "Make Your Plumbing Company the First Call Across Texas",
    lead: "Your free audit shows where you rank in every Texas metro you serve.",
    icons: ["plumbing", "translate"],
  },
};
