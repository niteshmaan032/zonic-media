import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* ARIZONA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush resource_organic (US, 24 Oct, first row only before
   API units ran out) shows the live URL ranking for "home inspector
   advertising" (pos 82, vol 110). It is kept in an H3 and an FAQ question.
   The live title's core term "Home Inspector Marketing in Arizona" stays
   in the title, and every live keywords-meta phrase sits in the title,
   H1, an H2/H3 or an FAQ question. Head-term volumes (Semrush US, 18 Sep
   2026): home inspector marketing 210 · seo for home inspectors 170.
   Web research (24 Oct): Arizona certifies home inspectors through the
   Board of Technical Registration; top Phoenix results list pool and spa,
   termite, sewer scope, pre-drywall and 11-month warranty inspections;
   termite reports come from licensed pest inspectors; monsoon roofs,
   stucco and solar come up often. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "arizona-2",
  liveUrl: "/services/home-inspector-marketing/arizona",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Arizona",
  meta: {
    title: "Home Inspector Marketing in Arizona | SEO, Ads & Leads",
    description:
      "Arizona home inspector marketing for Phoenix, Scottsdale, Mesa and Tucson: Map Pack rankings, home inspector advertising, pool and warranty pages, reviews.",
    keywords: [
      "home inspector marketing arizona",
      "home inspector seo arizona",
      "arizona home inspector",
      "home inspector phoenix az",
      "home inspection phoenix cost",
      "home inspection companies phoenix",
      "home inspector tucson az",
      "home inspector scottsdale",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation arizona",
      "ai seo for home inspectors",
      "home inspector advertising",
    ],
  },
  palette: PALETTES.orangeBlue,
  hero: {
    h1: "Arizona Home Inspector Marketing Agency for Booked-Out Weeks",
    h1NoWrap: "Booked-Out Weeks",
    lead: [
      "Phoenix and Tucson buyers often have days, not weeks, to book an inspector, so the first name Google shows usually gets the call. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing service",
      },
      " puts you there across the Valley and beyond, with Map Pack rankings, pool and warranty pages and tracked ad calls.",
    ],
    cta: "Get My Arizona Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 across the Valley",
        sub: "City by city, from Buckeye to Queen Creek",
        chips: ["Phoenix", "Scottsdale", "Mesa", "Tucson", "+ your city"],
      },
      left: {
        icon: "pool",
        title: "Pool and spa checks added",
        sub: "Pages buyers find before they schedule",
      },
      right: {
        icon: "construction",
        title: "New-build inspections booked",
        sub: "Pre-drywall and 11-month warranty pages",
      },
      bottom: {
        title: "Calls from buyers, not just agents",
        sub: "Direct bookings that never wait on a referral",
      },
    },
  },
  services: {
    title: "Arizona SEO for Home Inspectors,\nPlus Maps and Ads",
    lead: "Arizona home inspector SEO, ads and reviews, handled in one place.",
    cta: "Audit My Arizona Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Rankings Across Valley Cities",
        desc: "Metro Phoenix is a grid of separate city maps, so we set service areas city by city, add pool and termite services and post photos weekly.",
        points: [
          "City-level service areas",
          "Pool and termite services",
          "Weekly job photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Optimize my Maps listing",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO in Arizona, City by City",
        desc: "City pages plus pages for pool and spa, 11-month warranty, pre-drywall and termite inspections, the tests desert buyers search by name.",
        points: [
          "Page per Valley city",
          "Warranty and pool pages",
          "Citations made consistent",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Home Inspector Scottsdale and Valley Searches",
        desc: "Paid search plus Local Services Ads for buyers in escrow, fenced to your zip codes, with career and DIY searches filtered out.",
        points: [
          "Escrow-stage keywords",
          "Google Guaranteed listing",
          "Career searches excluded",
        ],
        links: [
          { href: "/services/google-ads", label: "Inspection ad management" },
        ],
      },
      {
        icon: "monitor",
        title: "Inspector Websites Out-of-State Buyers Can Book",
        desc: "Relocating buyers book from their phones, so your site shows open slots, add-on checkboxes, your certification and a sample report.",
        points: [
          "Live booking calendar",
          "Add-ons at checkout",
          "Certification shown",
        ],
        links: [
          {
            href: "/services/web-design",
            label: "Website design for inspectors",
          },
        ],
      },
      {
        icon: "star",
        title: "Arizona Reviews and Realtor Referral Tools",
        desc: "Reviews requested the day reports go out, plus an agent booking page and report summaries Valley realtors can forward in one tap.",
        points: [
          "Same-day review texts",
          "Realtor booking page",
          "Replies written for you",
        ],
        links: [{ href: "/services", label: "See our full service list" }],
      },
      {
        icon: "shield",
        title: "Arizona Listings Suspended or Stuck in Verification",
        desc: "When Google suspends or stalls a listing, we pinpoint why, fix it and handle the appeal. We've reinstated 900+ profiles so far.",
        points: [
          "Suspension cause found",
          "Verification video prep",
          "Appeal written for you",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Get my Arizona listing back",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify a new Arizona listing",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Home Inspector Lead Generation in Arizona, Channel by Channel",
    lead: "Maps for the ready-to-book buyer, AI answers for the researcher and ads you can trace to each call.",
    rows: [
      {
        title: "Rank First for “Home Inspector Phoenix AZ” on Google Maps",
        body: [
          "A buyer in escrow in Phoenix rarely scrolls past the map. We fill your profile with pool, termite and warranty services, build pages for Glendale, Tempe and the neighborhoods around them, and keep fresh reviews coming so you hold a top-three pin.",
        ],
        points: [
          "Desert add-on services listed",
          "Valley city pages",
          "Geo-tagged photos",
          "Spam competitors reported",
        ],
        cta: "See My Phoenix Ranking",
        ui: {
          kind: "maps",
          query: "home inspector phoenix az",
          city: "Phoenix",
          category: "Home inspector · Pool & spa",
        },
      },
      {
        title: "AI SEO for Home Inspectors Covering Tucson and Scottsdale",
        body: [
          "Buyers moving from out of state ask ChatGPT whether a Scottsdale pool needs its own inspection or who checks foam roofs in Tucson. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO service" },
          " publishes clear answers on your site and aligns your listings, so assistants cite your company.",
        ],
        points: [
          "Answer pages for desert topics",
          "Same details on every listing",
          "Certification marked up",
          "Reviews that name the city",
        ],
        cta: "Test My AI Visibility",
        ui: {
          kind: "ai",
          query: "does a pool need a separate inspection in scottsdale",
          intro: "For a Scottsdale home with a pool,",
          bullets: [
            "Pool and spa inspection add-on",
            "Arizona-certified inspector",
            "Reports within a day",
          ],
        },
      },
      {
        title: "Home Inspector Advertising With Every Call Tracked",
        body: [
          "Paid search works for inspectors when you can see which ads book real jobs. We record each call from Google Ads and Local Services Ads, tag it by city and service, and shift spend toward the campaigns that fill your Valley calendar.",
        ],
        points: [
          "Every call recorded",
          "City and service tags",
          "Bad leads disputed",
          "Bookings by city each month",
        ],
        cta: "Track My Arizona Ad Calls",
        ui: {
          kind: "calls",
          title: "Ad calls this week · Phoenix",
          calls: [
            {
              service: "Buyer inspection + pool",
              source: "Google Ads",
              when: "Mon 8:40 AM",
            },
            {
              service: "11-month warranty check",
              source: "Local Services Ads",
              when: "Wed 12:15 PM",
            },
            {
              service: "Termite inspection add-on",
              source: "Google Maps",
              when: "Fri 5:30 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Where in Arizona We Grow Inspection Companies",
    lead: "Metro Phoenix returns separate map results for each city, so every region gets its own pages and service areas.",
    items: [
      {
        name: "Phoenix & Central Valley",
        cities: "Phoenix · Glendale · Tempe",
        focus: "Map Pack work across a patchwork of city maps",
      },
      {
        name: "Scottsdale & Paradise Valley",
        cities: "Scottsdale · Paradise Valley · Fountain Hills",
        focus: "Pool, spa and luxury-home inspection pages",
      },
      {
        name: "East Valley",
        cities: "Mesa · Gilbert · Chandler · Queen Creek",
        focus: "New-build and 11-month warranty pages for builder communities",
      },
      {
        name: "West Valley",
        cities: "Peoria · Surprise · Goodyear · Buckeye",
        focus:
          "Pre-drywall and final walk-through searches near new subdivisions",
      },
      {
        name: "Southern Arizona",
        cities: "Tucson · Oro Valley · Marana · Sahuarita",
        focus: "Older-home, termite and snowbird booking pages",
      },
      {
        name: "Northern & Western Arizona",
        cities: "Flagstaff · Prescott · Yuma · Lake Havasu City",
        focus: "Well, septic and second-home pages for far-flung towns",
      },
    ],
    other:
      "Based in Sierra Vista, Kingman or Show Low? We cover those towns too.",
  },
  reviews: {
    title: "Arizona Inspectors, See Our 5.0 Google Reviews",
    lead: "Feedback from home service owners after working with our team.",
  },
  pricing: {
    title: "Arizona Home Inspector Marketing Pricing",
    lead: [
      "Every tier stays month to month; ad spend is never marked up (0%). Want help beyond inspections? Browse ",
      { href: "/services", label: "our full list of services" },
      ".",
    ],
    compareTitle: "Arizona Plans, Side by Side",
    compareLead: "One city, the whole Valley or the entire state.",
    addOnsTitle: "Extras for Snowbird Season",
    addOnsLead: "More city pages or ads when winter buyers arrive.",
    customTitle: "Teams in Phoenix and Tucson?",
    customText: "Share every branch and service area for a single quote.",
  },
  faq: {
    title: "Arizona Home Inspector Marketing Questions",
    lead: "Certification, ads, pricing pages, Tucson rankings and add-ons, answered.",
    items: [
      {
        q: "Do Arizona home inspectors need state certification for their marketing?",
        a: "Yes. Arizona requires home inspectors to be certified by the State Board of Technical Registration before they inspect for a fee. We add that number to your Google listing, site footer and realtor handouts, since out-of-state buyers often check it first.",
      },
      {
        q: "Is home inspector advertising worth it in Arizona?",
        a: "For most companies, yes. Buyers in escrow search with urgency, and Local Services Ads plus search ads catch them before an agent's list does. We exclude career searches about becoming an inspector, track every call and add no markup to ad spend.",
      },
      {
        q: "How should I handle “home inspection Phoenix cost” searches?",
        a: "Give them a page. Explain what changes your fee, like square footage, pools, home age and add-on tests, then add an instant quote or booking form. Buyers comparing companies stay on the page and book, and you choose whether any figures appear.",
      },
      {
        q: "Can a “home inspector Tucson AZ” search find me if I'm based in Marana?",
        a: "Yes. A Tucson page built with job photos from the city and Tucson reviews can show up in regular results, and your service area can include Tucson. The map leans on distance, so steady Tucson reviews and posts matter. We set it up the way Google's guidelines allow.",
      },
      {
        q: "Should pool, termite and warranty inspections get their own pages?",
        a: "Yes, because each one is searched on its own. Pool and spa pages catch Scottsdale and Paradise Valley buyers, 11-month warranty pages reach new-build owners before the builder deadline, and termite pages should name the licensed pest inspector who writes the report.",
      },
      {
        q: "How can a small team compete with large home inspection companies in Phoenix?",
        a: "Focus beats size on Google. A complete profile, a page for each city you cover, quick replies and reviews that mention real findings let a two-inspector firm outrank bigger names in individual suburbs. We start with the cities where you can win fastest.",
      },
    ],
  },
  audit: {
    title: "Request a Free Arizona Home Inspector Audit",
    lead: [
      "We search like your buyers do in each Arizona city you serve, add-on tests included, then grade your profile, website and review count, and point to the inspectors taking those calls.",
    ],
    points: [
      "Each Valley city you serve checked",
      "Pool, termite and warranty searches run",
      "No contract; tiers from $297/mo",
    ],
    form: {
      formType: "home-inspector-marketing-arizona",
      badge: "Free Arizona audit",
      title: "Get My Free Arizona Audit",
      subtitle: "Takes two minutes, with no obligation.",
      submitText: "Send My Arizona Audit",
      messageLabel: "Your Arizona cities and inspection types",
      messagePlaceholder:
        "e.g. Gilbert and Chandler, pool and warranty inspections",
    },
  },
  banner: {
    title: "Make Your Company the Valley's First Inspection Call",
    lead: "Get a free audit of where you rank across each Arizona city you serve.",
    icons: ["sun", "inspect"],
  },
};
