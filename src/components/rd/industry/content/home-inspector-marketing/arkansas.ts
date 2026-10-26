import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* ARKANSAS HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush resource_organic (US, 24 Oct, first row only before
   API units ran out) shows the live URL ranking for "home inspector
   arkansas" (pos 55, vol 110). The exact phrase is kept in the growth H2,
   the meta description and keywords. The live title's core term "Home
   Inspector Marketing in Arkansas" stays in the title, and every live
   keywords-meta phrase sits in the title, H1, an H2/H3 or an FAQ question.
   Head-term volumes (Semrush US, 18 Sep 2026): home inspector marketing
   210 · seo for home inspectors 170.
   Web research (24 Oct): anyone who advertises or performs paid home
   inspections must register with the Arkansas Home Inspector Registration
   Board; termite clearance letters need a commercial pest control license
   (State Plant Board); crawlspace moisture, new construction in Northwest
   Arkansas and add-ons (radon, sewer scope, WDI) shape top results. Fresh
   wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "arkansas-2",
  liveUrl: "/services/home-inspector-marketing/arkansas",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Arkansas",
  meta: {
    title: "Home Inspector Marketing in Arkansas | SEO & Inspection Leads",
    description:
      "Be the home inspector Arkansas buyers find first: Maps rankings, town pages, ads and reviews for Little Rock, Northwest Arkansas, Fort Smith and Jonesboro.",
    keywords: [
      "home inspector marketing arkansas",
      "home inspector arkansas",
      "home inspector seo arkansas",
      "home inspector northwest arkansas",
      "home inspector little rock",
      "home inspector fayetteville ar",
      "home inspection benton ar",
      "best home inspectors northwest arkansas",
      "home inspection cost arkansas",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation arkansas",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.redSky,
  hero: {
    h1: "Arkansas Home Inspector Marketing Agency for a Busier Schedule",
    h1NoWrap: "Busier Schedule",
    lead: [
      "From Bentonville's new subdivisions to older homes around Little Rock, Arkansas buyers now look up inspectors on their own before an agent hands them a name. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing team",
      },
      " makes your company the one they find, with Map Pack rankings, town pages and reviews.",
    ],
    cta: "Get My Arkansas Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 from the Ozarks to the Delta",
        sub: "Map spots in every Arkansas town you inspect",
        chips: [
          "Little Rock",
          "Bentonville",
          "Fayetteville",
          "Fort Smith",
          "+ your town",
        ],
      },
      left: {
        icon: "construction",
        title: "Extra new-construction jobs",
        sub: "Phase and final walk-through pages for NWA",
      },
      right: {
        icon: "users",
        title: "Steady realtor referrals",
        sub: "Booking tools agents actually use",
      },
      bottom: {
        title: "Bookings that don't hinge on one agent",
        sub: "Buyers who search, compare and choose you",
      },
    },
  },
  services: {
    title: "Local SEO for Home Inspectors,\nOzarks to the Delta",
    lead: "Hand your Arkansas inspector marketing to one crew that runs it all.",
    cta: "Audit My Arkansas Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profiles for Arkansas Inspectors",
        desc: "We fix categories, add every inspection type and add-on, set your Arkansas service towns and post photos from real jobs each week.",
        points: [
          "Inspection types added",
          "Town service areas",
          "Real-job photos weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Improve my Google listing",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO for Arkansas Towns and Crawlspace Homes",
        desc: "City pages for Little Rock, Conway, Rogers and beyond, plus pages on new construction, crawlspaces, radon and termite-letter questions.",
        points: [
          "Pages for each town",
          "New-build and crawlspace pages",
          "Citation cleanup",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home service pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Inspection Ads on Google and LSA Across Arkansas",
        desc: "Ads reach buyers already under contract in the counties you cover, with Google Guaranteed listings and job-seeker searches filtered out.",
        points: [
          "County targeting",
          "Google Guaranteed badge",
          "Career clicks blocked",
        ],
        links: [
          { href: "/services/google-ads", label: "Run my inspection ads" },
        ],
      },
      {
        icon: "monitor",
        title: "Arkansas Inspection Websites With Online Booking",
        desc: "A quick mobile site showing your registration number, open times, add-on tests and a sample report agents can send ahead.",
        points: [
          "Book in a few taps",
          "Registration number shown",
          "Sample report included",
        ],
        links: [
          {
            href: "/services/web-design",
            label: "Build my inspection website",
          },
        ],
      },
      {
        icon: "star",
        title:
          "Reviews That Earn “Best Home Inspectors Northwest Arkansas” Mentions",
        desc: "Review texts go out with each report, and NWA agents get a booking link and report preview they can share with clients.",
        points: [
          "Texts with every report",
          "Agent booking link",
          "Owner replies drafted",
        ],
        links: [{ href: "/services", label: "All Zonic Media services" }],
      },
      {
        icon: "shield",
        title: "Fixing Suspended or Unverified Arkansas Listings",
        desc: "Suspensions and stuck verifications stop calls fast. We track down the trigger, fix it and handle the paperwork with Google. We've brought back 900+ profiles.",
        points: ["Trigger pinned down", "Verification prep", "Appeal managed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my suspended listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get my listing verified",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Be the Home Inspector Arkansas Buyers Find First",
    lead: "Three ways we turn Arkansas searches into booked inspections.",
    rows: [
      {
        title: "Win the “Home Inspector Northwest Arkansas” Map Pack",
        body: [
          "New arrivals in Bentonville, Rogers and Springdale don't have an agent's favorite yet, so they open Google Maps and compare the top three. We tune your listing, build NWA town pages and keep fresh reviews coming in, so your pin is one of them.",
        ],
        points: [
          "NWA town pages",
          "Inspection types listed",
          "Fresh job photos",
          "Rank grid tracking",
        ],
        cta: "Check My NWA Ranking",
        ui: {
          kind: "maps",
          query: "home inspector northwest arkansas",
          city: "Rogers",
          category: "Home inspector · New construction",
        },
      },
      {
        title: "Get Named by ChatGPT: AI SEO for Home Inspectors in Arkansas",
        body: [
          "Retirees eyeing Hot Springs and families relocating to Fayetteville increasingly ask AI tools which inspector to hire. Our ",
          { href: "/services/ai-seo-services", label: "AI search work" },
          " gives ChatGPT, Gemini and AI Overviews the facts they quote: your registration, matching listings, detailed reviews and clear service pages.",
        ],
        points: [
          "Registration on every listing",
          "Crawlspace answer pages",
          "One consistent business profile",
          "Reviews that mention the town",
        ],
        cta: "See My AI Visibility",
        ui: {
          kind: "ai",
          query: "home inspector fayetteville ar for a new construction home",
          intro: "For new-construction inspections in Fayetteville,",
          bullets: [
            "Phase and final walk-throughs",
            "Registered in Arkansas",
            "Online booking with add-ons",
          ],
        },
      },
      {
        title:
          "A Website That Turns “Home Inspector Little Rock” Searches Into Bookings",
        body: [
          "Most Little Rock buyers find you on a phone between showings. We build a fast site that shows open times, lets buyers tick add-on tests and links a sample report, then traces each booking back to the search behind it.",
        ],
        points: [
          "Open times shown live",
          "Add-ons at checkout",
          "Click-to-call on every page",
          "Bookings traced to source",
        ],
        cta: "Plan My Inspection Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/little-rock",
          headline: "Home inspections in Little Rock, booked online",
          services: [
            "Buyer inspection",
            "Pre-listing",
            "New construction",
            "Radon test",
          ],
        },
      },
    ],
  },
  regions: {
    title: "Arkansas Regions Where Buyers Look for Inspectors",
    lead: "Each corner of the state searches differently, from new subdivisions in Benton County to lake homes near Hot Springs.",
    items: [
      {
        name: "Northwest Arkansas",
        cities: "Bentonville · Rogers · Springdale · Fayetteville",
        focus: "New-construction and relocation pages for incoming buyers",
      },
      {
        name: "Central Arkansas",
        cities: "Little Rock · North Little Rock · Conway · Cabot",
        focus: "Map Pack work in the state's busiest inspection market",
      },
      {
        name: "Saline County",
        cities: "Benton · Bryant · Haskell",
        focus: "Suburb pages that catch Little Rock commuters",
      },
      {
        name: "River Valley",
        cities: "Fort Smith · Van Buren · Russellville",
        focus: "Town pages where few inspectors advertise",
      },
      {
        name: "Northeast Arkansas",
        cities: "Jonesboro · Paragould · Searcy",
        focus: "Crawlspace and older-home pages for regional buyers",
      },
      {
        name: "Ouachitas & Ozark Lakes",
        cities: "Hot Springs · Mountain Home · Harrison",
        focus: "Retiree and lake-home pages for out-of-state buyers",
      },
    ],
    other:
      "Covering Texarkana, Pine Bluff or El Dorado? We add pages for those areas too.",
  },
  reviews: {
    title: "A Perfect 5.0 on Google, From Owners We've Grown",
    lead: "Real reviews from inspection and home service companies we've helped.",
  },
  pricing: {
    title: "Arkansas Home Inspector Marketing Pricing and Plans",
    lead: [
      "There's no contract, and ad spend reaches Google without any markup (0%). Want something not listed here? ",
      { href: "/services", label: "Browse all of our services" },
      ".",
    ],
    compareTitle: "Arkansas Plans Compared",
    compareLead: "Start with one town or cover the whole state.",
    addOnsTitle: "Boosts for the Spring Market",
    addOnsLead: "Add town pages or ad campaigns when Arkansas listings climb.",
    customTitle: "Inspectors in NWA and Little Rock?",
    customText: "List your offices and service towns for a custom quote.",
  },
  faq: {
    title: "Questions From Arkansas Home Inspectors",
    lead: "Registration, rankings, add-ons, pricing pages and leads. Rather talk it over? Phone our team.",
    items: [
      {
        q: "Does a home inspector in Arkansas need to register before advertising?",
        a: "Yes. Arkansas law says anyone who advertises or performs paid home inspections must first register with the Arkansas Home Inspector Registration Board. We show your registration number on your Google profile, site and ads, which also reassures agents and out-of-state buyers.",
      },
      {
        q: "Can I rank for “home inspector Fayetteville AR” and Bentonville at once?",
        a: "Yes, with separate pages and a service area that covers both. Organic results reward a strong page for each city. On the map, distance from your office matters, so reviews and photos from jobs in each town help the farther one catch up.",
      },
      {
        q: "Is “home inspection Benton AR” worth its own page next to Little Rock?",
        a: "Usually, yes. Benton and Bryant buyers search their own town names, and few inspectors build pages for them. A Benton page with local photos, Saline County reviews and your add-on tests can rank sooner than a Little Rock page.",
      },
      {
        q: "Should my site address “home inspection cost Arkansas” searches?",
        a: "Yes. Cost searches come from buyers ready to book. Explain what shapes your fee, such as size, foundation type, crawlspace access and add-on tests, and add a quote form. You decide whether to publish figures; the page works either way.",
      },
      {
        q: "Can I market termite letters if I'm not a pest control company?",
        a: "Not on your own. In Arkansas, termite clearance letters can only be issued under a commercial pest control license. If you partner with a licensed firm, we market the combined booking and name the partner clearly, so buyers and lenders know who writes the letter.",
      },
      {
        q: "How does home inspector lead generation in Arkansas work?",
        a: "Three channels on top of your agent referrals: Google Maps rankings, town pages that win organic searches and inspection ads for buyers under contract. Each booking is traced to its source, so you can see which channel fills your schedule and grow the ones that work.",
      },
    ],
  },
  audit: {
    title: "Book a Free Arkansas Home Inspector Audit",
    lead: [
      "Our audit checks your map position in each Arkansas town you cover, plus your listing, site and reviews, then reveal which inspectors are winning the bookings you should have.",
    ],
    points: [
      "Every town you inspect, checked",
      "NWA and central Arkansas searches tested",
      "Month-to-month: $297, $750 or $1,500 tiers",
    ],
    form: {
      formType: "home-inspector-marketing-arkansas",
      badge: "Free Arkansas audit",
      title: "Claim Your Free Arkansas Audit",
      subtitle: "Quick to request and free of obligation.",
      submitText: "Send My Arkansas Audit",
      messageLabel: "Towns you cover and services you sell",
      messagePlaceholder: "e.g. Rogers and Bentonville, new builds and radon",
    },
  },
  banner: {
    title: "Give Arkansas Buyers a Reason to Book You Directly",
    lead: "Your free audit charts your map spot across the Arkansas towns you cover.",
    icons: ["inspect", "home"],
  },
};
