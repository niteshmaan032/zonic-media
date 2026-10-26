import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* UTAH HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush returned no_api_units on 24 Oct, so resource_organic
   and phrase_these could not run; keywords come from web research. The
   live title's core term "Home Inspector Marketing in Utah" is kept in the
   title, and every phrase in the live keywords meta sits in the title, H1,
   an H2/H3 or an FAQ question.
   Web research (24 Oct): H.B. 58 (2025) created a private home inspector
   license issued by the Utah Division of Professional Licensing (DOPL);
   DOPL and third-party sources disagree on whether applications opened on
   1 Jan or 1 May 2026, so the page only says "2026". Salt Lake City
   inspector listings consistently sell radon, methamphetamine testing and
   sewer scopes as add-ons. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "utah-2",
  liveUrl: "/services/home-inspector-marketing/utah",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Utah",
  meta: {
    title: "Home Inspector Marketing in Utah | SEO, Maps & Radon Bookings",
    description:
      "Utah home inspector marketing for Salt Lake City, Utah County, Ogden, Logan and St. George: Map Pack rankings, inspector SEO, ads and radon and meth test pages.",
    keywords: [
      "home inspector marketing utah",
      "home inspector seo utah",
      "home inspector utah county",
      "home inspector salt lake city",
      "home inspection ogden utah",
      "home inspection logan utah",
      "home inspection utah cost",
      "home inspector license utah",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation utah",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.fuchsiaIndigo,
  hero: {
    h1: "Utah Home Inspector Marketing Agency for Licensed Inspectors",
    h1NoWrap: "Licensed Inspectors",
    lead: [
      "Utah now licenses private home inspectors, and buyers along the Wasatch Front are starting to check. With our ",
      {
        href: "/services/home-inspector-marketing",
        label: "Utah home inspector marketing",
      },
      ", your license, radon and meth testing and reviews reach them on the map, inside AI recommendations and through a booking site.",
    ],
    cta: "Get My Utah Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack from Logan to St. George",
        sub: "County by county along the Wasatch Front and south",
        chips: [
          "Salt Lake City",
          "Provo",
          "Ogden",
          "St. George",
          "+ your county",
        ],
      },
      left: {
        icon: "shield",
        title: "License front and center",
        sub: "Your new state license where buyers look first",
      },
      right: {
        icon: "check",
        title: "More radon and meth tests",
        sub: "Add-ons buyers can pick the moment they book",
      },
      bottom: {
        title: "Bookings through every season",
        sub: "Northern summers and southern winters both covered",
      },
    },
  },
  services: {
    title: "What We Run for Utah Home Inspection Companies",
    lead: "Wherever Utah buyers search for inspectors, one team has you covered.",
    cta: "Audit My Utah Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles With Your Utah License Up Front",
        desc: "We add your DOPL license, counties served, radon, meth and sewer scope services and fresh photos, so the map trusts and ranks you.",
        points: [
          "DOPL license listed",
          "County service areas",
          "Add-on services shown",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Tighten up my profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO Utah Buyers Find by County",
        desc: "Utahns often search by county, so we build Utah County, Davis County and Salt Lake County pages, plus radon, meth and sewer scope pages.",
        points: [
          "County and city pages",
          "Radon and meth pages",
          "Sewer scope page",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO services",
          },
        ],
      },
      {
        icon: "target",
        title: "Seasonal Google Ads and Local Services Ads",
        desc: "Campaigns that follow Utah's two calendars, spring and summer up north and fall through winter in St. George, with LSA leads managed too.",
        points: [
          "North and south calendars",
          "Local Services Ads managed",
          "County-level budgets",
        ],
        links: [
          { href: "/services/google-ads", label: "Plan my ad campaigns" },
        ],
      },
      {
        icon: "monitor",
        title: "Booking Sites With Add-On Tests at Checkout",
        desc: "A fast site where buyers choose the inspection, tick radon, meth or sewer scope and book a time, with a sample report one tap away.",
        points: [
          "Add-ons at checkout",
          "Online time slots",
          "Sample report link",
        ],
        links: [{ href: "/services/web-design", label: "Design my website" }],
      },
      {
        icon: "star",
        title: "Review Requests and Pages for Utah Agents",
        desc: "Every finished report triggers a review request, and a short page gives agents your availability, add-ons and service counties.",
        points: [
          "Requests after reports",
          "Agent info page",
          "Replies you approve",
        ],
        links: [{ href: "/services", label: "Browse our services" }],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified? Utah Profile Fixes",
        desc: "Google suspensions and stalled verifications can be fixed. We find the trigger and clean up the profile, then appeal on your behalf. So far, 900+ profiles reinstated.",
        points: [
          "Trigger found",
          "Profile cleaned up",
          "Appeal filed and tracked",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my Google listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Finish my verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Where Utah Buyers Find Inspectors, and How We Get You There",
    lead: "On the map by county, in AI answers and on a site that sells add-on tests.",
    rows: [
      {
        title: "Hold the Map for “Home Inspector Utah County”",
        body: [
          "Buyers in Lehi, Saratoga Springs and Provo type the county name nearly as often as the city. We set Utah County as your service area, build pages for its fastest-growing towns and earn reviews there, so you rank across the whole county instead of one zip code.",
        ],
        points: [
          "County service areas",
          "Town pages that rank",
          "Radon and meth listed",
          "Weekly map tracking",
        ],
        cta: "See My Utah County Ranking",
        ui: {
          kind: "maps",
          query: "home inspector utah county",
          city: "Provo",
          category: "Home inspector · Utah licensed",
        },
      },
      {
        title: "Be the AI Answer for “Home Inspector Salt Lake City”",
        body: [
          "Relocating tech workers ask ChatGPT and Gemini which Salt Lake City inspectors are licensed and test for radon. With ",
          {
            href: "/services/ai-seo-services",
            label: "AI SEO for local businesses",
          },
          ", your site, listings and reviews answer those questions the same way everywhere, so AI tools can recommend you with confidence.",
        ],
        points: [
          "License in schema markup",
          "Radon and meth FAQs",
          "Listings that match",
          "Reviews that name tests",
        ],
        cta: "Test My AI Answers",
        ui: {
          kind: "ai",
          query: "licensed home inspector salt lake city radon",
          intro: "For a licensed home inspector in Salt Lake City,",
          bullets: [
            "Radon and meth testing",
            "Covers Sandy and Draper",
            "Online booking tonight",
          ],
        },
      },
      {
        title: "Sell Radon, Meth and Sewer Scope at Booking",
        body: [
          "Utah buyers order add-on tests more than most, but only if they see them. We build a booking flow that offers radon, meth and sewer scope next to the main inspection, shows what each includes and confirms the slot instantly.",
        ],
        points: [
          "Add-on checkboxes",
          "Instant confirmations",
          "Package comparison",
          "Sample report link",
        ],
        cta: "Plan My Utah Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/salt-lake-city",
          headline: "Salt Lake City home inspections and testing",
          services: [
            "Full home inspection",
            "Radon test",
            "Meth screening",
            "Sewer scope",
          ],
        },
      },
    ],
  },
  regions: {
    title: "Utah Counties and Cities We Cover",
    lead: "From Cache Valley to Washington County, each area gets pages and ads matched to its buyers and seasons.",
    items: [
      {
        name: "Salt Lake County",
        cities: "Salt Lake City · Sandy · West Jordan · Draper",
        focus: "Older-home radon pages and fast-moving resale buyers",
      },
      {
        name: "Utah County",
        cities: "Provo · Orem · Lehi · Saratoga Springs",
        focus: "New-construction inspections near Silicon Slopes",
      },
      {
        name: "Davis & Weber",
        cities: "Ogden · Layton · Bountiful · Kaysville",
        focus: "Military moves near Hill Air Force Base",
      },
      {
        name: "Cache Valley",
        cities: "Logan · North Logan · Smithfield · Hyde Park",
        focus: "Campus-area buyers and smaller-town searches",
      },
      {
        name: "Washington County",
        cities: "St. George · Washington · Hurricane · Ivins",
        focus: "Winter-season campaigns for retirees and snowbirds",
      },
      {
        name: "Summit & Wasatch",
        cities: "Park City · Heber City · Kamas · Midway",
        focus: "Second-home and mountain property pages",
      },
    ],
    other:
      "Inspecting in Tooele, Cedar City or Vernal? We'll cover those towns as well.",
  },
  reviews: {
    title: "Utah Owners Can See Our 5.0 Google Rating",
    lead: "Read what inspectors and other local owners say about working with us.",
  },
  pricing: {
    title: "Home Inspector Lead Generation: Utah Plans and Pricing",
    lead: [
      "No long contracts, and a 0% markup on any ad spend. Short on a site that sells add-ons? Pair a plan with ",
      { href: "/services/web-design", label: "a new booking website" },
      ".",
    ],
    compareTitle: "Compare Plans for Utah Inspectors",
    compareLead: "From one county to the full Wasatch Front and south.",
    addOnsTitle: "Extras for Spring Up North",
    addOnsLead: "Add county pages or ads when Wasatch Front contracts spike.",
    customTitle: "Covering north and south Utah?",
    customText: "Tell us your counties for a combined plan quote.",
  },
  faq: {
    title: "Your Questions on Home Inspector Marketing, Utah Style",
    lead: "The new license, add-on tests, counties and pricing. Prefer to talk? Give us a ring.",
    items: [
      {
        q: "What does the new home inspector license Utah created mean for my marketing?",
        a: "Utah's 2025 law, H.B. 58, created a private home inspector license that the Division of Professional Licensing (DOPL) issues; applications opened in 2026. Being licensed is now a trust signal, so we put your license on your profile, site, schema and booking page.",
      },
      {
        q: "Can one company rank for “home inspection Ogden Utah” and “home inspection Logan Utah”?",
        a: "Yes, if both are inside your real service area. Google weighs distance, so we set both cities as service areas, give each its own page full of local details and request reviews from clients in each city. Logan often has fewer strong competitors, which helps.",
      },
      {
        q: "Do buyers searching “home inspection Utah cost” want prices on my site?",
        a: "Yes. Someone typing that is shopping around, so show your fees, what the inspection covers and what radon, meth or sewer scope adds. We build that pricing page and link it from your Google profile and ads, so the answer comes before the phone call.",
      },
      {
        q: "Should I market meth testing as a Utah home inspector?",
        a: "If you offer it, yes. Meth screening is a common Utah add-on, and buyers search for it by name. A dedicated page explaining how you test, when results arrive and how it pairs with the inspection helps those buyers choose you and book both together.",
      },
      {
        q: "How should St. George inspectors plan their marketing year?",
        a: "Opposite to the north. St. George and Washington County see many winter buyers and retirees, so we push ads, posts and review requests from fall through spring, while Wasatch Front campaigns peak in spring and summer. Each region gets its own budget.",
      },
      {
        q: "Does AI SEO for home inspectors matter in Utah yet?",
        a: "It's growing fast. Relocating buyers in Lehi and Salt Lake City use ChatGPT, Gemini and AI Overviews to shortlist inspectors. Those tools favor businesses with consistent listings, licensed status and detailed reviews, so the same work also lifts your Google rankings.",
      },
      {
        q: "How much is home inspector marketing for Utah companies?",
        a: "Our Utah pricing has three levels, $297, $750 and $1,500, each billed monthly and never locked in. Google invoices ad spend itself, and our markup on it is 0%. One-county inspectors usually start small, then add counties or seasonal ads as bookings grow.",
      },
    ],
  },
  audit: {
    title: "Free Utah Home Inspector Marketing Audit",
    lead: [
      "Your audit covers your rank in every Utah county you serve, your Google profile, site, reviews and how your add-on tests show up. Working in nearby states? We also help inspectors in ",
      { href: "/services/home-inspector-marketing/arizona", label: "Arizona" },
      ", ",
      { href: "/services/home-inspector-marketing/nevada", label: "Nevada" },
      " and ",
      {
        href: "/services/home-inspector-marketing/colorado",
        label: "Colorado",
      },
      ".",
    ],
    points: [
      "Each county you serve, checked",
      "License and add-ons reviewed",
      "No contract, from $297/mo",
    ],
    form: {
      formType: "home-inspector-marketing-utah",
      badge: "Free Utah audit",
      title: "Request My Free Utah Inspector Audit",
      subtitle: "Quick to request, free to keep.",
      submitText: "Send My Utah Audit",
      messageLabel: "Your Utah counties and add-on tests",
      messagePlaceholder:
        "e.g. Utah County and Salt Lake, radon and sewer scope",
    },
  },
  banner: {
    title: "Make Your Utah License Work as Hard as You Do",
    lead: "Get a free audit of your rank in every county you inspect.",
    icons: ["inspect", "shield"],
  },
};
