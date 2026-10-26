import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* MISSOURI HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so keywords and angles come from
   web research. Rank safety: the live title's core term "Home Inspector
   Marketing in Missouri" opens the title, and every live keywords-meta
   phrase sits in the title, H1, an H2/H3 or an FAQ question. Verified facts
   used: Missouri has no state license or registration for home inspectors;
   many St. Louis County municipalities require a city or county occupancy
   inspection when a home changes hands; Kansas City inspectors commonly
   work both sides of the state line; termite/WDI, radon and sewer scope
   are the standard add-ons. */

export const CONTENT: LocationContent = {
  draftSlug: "missouri-2",
  liveUrl: "/services/home-inspector-marketing/missouri",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Missouri",
  meta: {
    title: "Home Inspector Marketing in Missouri | St. Louis & Kansas City",
    description:
      "Missouri home inspector marketing for Kansas City, St. Louis, Columbia and Springfield: map rankings, municipality pages, ads and reviews that win buyers and agents.",
    keywords: [
      "home inspector marketing missouri",
      "home inspector seo missouri",
      "home inspector st louis mo",
      "home inspector kansas city mo",
      "home inspection springfield mo",
      "home inspection columbia mo",
      "home inspection st louis county",
      "best home inspector kansas city",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation missouri",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.greenSky,
  hero: {
    h1: "Missouri Home Inspector Marketing Agency for St. Louis and KC",
    h1NoWrap: "St. Louis and KC",
    lead: [
      "Missouri has no state home inspector license, and its two big metros sit on state lines and span dozens of municipalities. We bring our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " playbook to both, with map rankings, reviews and city pages that make you the obvious call.",
    ],
    cta: "Get My Missouri Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack spots on both sides of the state",
        sub: "St. Louis, Kansas City and the towns between",
        chips: [
          "St. Louis",
          "Kansas City",
          "Springfield",
          "Columbia",
          "+ your town",
        ],
      },
      left: {
        icon: "star",
        title: "Reviews that work as credentials",
        sub: "Proof buyers trust when there's no license to check",
      },
      right: {
        icon: "bug",
        title: "More termite and radon add-ons",
        sub: "Pages for the tests Missouri buyers ask about",
      },
      bottom: {
        title: "Calls from both sides of the state line",
        sub: "Kansas-side searches covered when you inspect there",
      },
    },
  },
  services: {
    title: "Missouri Home Inspection\nMarketing That Books Jobs",
    lead: "One team looks after Missouri home inspection marketing top to bottom.",
    cta: "Audit My Missouri Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Rankings in St. Louis and Kansas City",
        desc: "Profile categories, municipality-level service areas, add-on services and job photos, set up so your pin rises wherever you inspect.",
        points: [
          "Municipality service areas",
          "Termite and radon listed",
          "Fresh photos weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO, Missouri Suburbs to the Ozarks",
        desc: "Pages for Kirkwood, Lee's Summit and every town you cover, plus termite, radon and sewer scope pages for buyers searching those tests.",
        points: [
          "Suburb and town pages",
          "Termite and WDI pages",
          "Sewer scope content",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home service firms",
          },
        ],
      },
      {
        icon: "target",
        title: "Kansas City and St. Louis Ads Without Wasted Clicks",
        desc: "Search ads and Local Services listings aimed at buyers with signed contracts, set to whichever side of the state line you actually serve.",
        points: [
          "Under-contract searches",
          "State-line targeting",
          "Invalid leads disputed",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for home inspectors",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Missouri Inspection Websites That Book Online",
        desc: "Fast mobile sites with your credentials, a sample report and online booking, so a Kansas City buyer can schedule on the first visit.",
        points: [
          "Credentials up front",
          "Sample report online",
          "Book in a few taps",
        ],
        links: [{ href: "/services/web-design", label: "Website design" }],
      },
      {
        icon: "star",
        title: "Agent Referrals and Reviews From Every Closing",
        desc: "Review requests after each report and an agent page carrying your scheduling link, so agents and buyers both see your record.",
        points: [
          "Request with every report",
          "Agent booking page",
          "Owner-style replies",
        ],
        links: [{ href: "/services", label: "All services" }],
      },
      {
        icon: "shield",
        title: "Suspended Missouri Listings Reinstated",
        desc: "If a suspension or a stalled verification knocks your listing offline, we identify what Google objected to, repair it and appeal. 900+ profiles reinstated.",
        points: [
          "Flag identified",
          "Verification help",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstatement service",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Google verification help",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Home Inspector Lead Generation: Missouri Bookings You Can Count",
    lead: "Map rankings, AI answers and reviews, measured by the inspections they put on your calendar.",
    rows: [
      {
        title: "Be the Best Home Inspector Kansas City Buyers See on Maps",
        body: [
          "Kansas City buyers search from Lee's Summit, Liberty and Overland Park, and the map decides who gets the call. We tighten your profile, build pages for the suburbs you cover on both sides of State Line Road and grow your review count, so your pin stays in view.",
        ],
        points: [
          "Both-sides service areas",
          "Termite and radon services",
          "Photos added each week",
          "Rank grid tracking",
        ],
        cta: "See My Kansas City Ranking",
        ui: {
          kind: "maps",
          query: "best home inspector kansas city",
          city: "Kansas City",
          category: "Home inspector · Termite inspections",
        },
      },
      {
        title: "AI SEO for Home Inspectors Covering St. Louis County",
        body: [
          "Buyers moving into St. Louis County ask ChatGPT what a municipal occupancy inspection covers and which home inspectors to trust. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO team" },
          " posts plain answers about those rules, cleans up your listings and adds structured data, so AI tools describe you correctly and recommend you.",
        ],
        points: [
          "Occupancy permit explainers",
          "Listings that match",
          "Structured data added",
          "Town names in reviews",
        ],
        cta: "See What AI Says About Me",
        ui: {
          kind: "ai",
          query: "home inspection st louis county",
          intro: "For a home inspection in St. Louis County,",
          bullets: [
            "Pre-listing inspections",
            "Termite and radon add-ons",
            "Covers Kirkwood and Webster Groves",
          ],
        },
      },
      {
        title: "Make Reviews Your Credential in a No-License State",
        body: [
          "With no state license to look up, Missouri buyers read reviews to judge an inspector. We text a request as each report lands, prompt clients to mention the town and the findings, and write measured replies, so your profile proves your work from Springfield to St. Charles.",
        ],
        points: [
          "Text request per report",
          "Town and finding prompts",
          "Measured owner replies",
          "Low ratings flagged",
        ],
        cta: "Build My Missouri Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Dana, it's Your Company. Your Columbia inspection report is ready. Could you share a quick Google review?",
          reviewer: "Dana",
          review:
            "Crawled every inch of the crawlspace, told us straight about the aging sewer line and kept the focus on what mattered. Our first purchase felt far less stressful.",
          reply:
            "Thanks, Dana! Glad the sewer scope helped. Enjoy your first home in Columbia.",
        },
      },
    ],
  },
  regions: {
    title: "Missouri Metros and Towns We Market For",
    lead: "St. Louis municipalities, Kansas City suburbs and Ozarks towns each get their own pages and ad settings.",
    items: [
      {
        name: "St. Louis City & County",
        cities: "St. Louis · Kirkwood · Florissant · Chesterfield",
        focus: "Municipality pages and pre-listing inspection content",
      },
      {
        name: "St. Charles County",
        cities: "St. Charles · O'Fallon · St. Peters · Wentzville",
        focus: "New-build and move-up buyer pages",
      },
      {
        name: "Kansas City Metro",
        cities: "Kansas City · Independence · Lee's Summit · Liberty",
        focus: "Ads on both sides of the line and suburb pages",
      },
      {
        name: "Springfield & the Ozarks",
        cities: "Springfield · Nixa · Branson · Joplin",
        focus: "Termite, radon and rural route pages",
      },
      {
        name: "Columbia & Lake of the Ozarks",
        cities: "Columbia · Jefferson City · Osage Beach · Camdenton",
        focus: "College-town buyers and lake-home inspections",
      },
      {
        name: "Southeast Missouri",
        cities: "Cape Girardeau · Sikeston · Farmington · Poplar Bluff",
        focus: "Town pages for buyers far from the metros",
      },
    ],
    other: "Inspecting in a Missouri town we didn't list? We'll cover it too.",
  },
  reviews: {
    title: "Business Owners on Google Give Us 5.0 Stars",
    lead: "Unedited Google reviews from owners we market for.",
  },
  pricing: {
    title: "What Missouri Home Inspector Marketing Costs",
    lead: [
      "Every plan bills monthly, and our markup on your ad budget is 0%. Need a site first? See our ",
      { href: "/services/web-design", label: "website design work" },
      ".",
    ],
    compareTitle: "Pick a Missouri Plan",
    compareLead: "One metro, both metros or the whole state.",
    addOnsTitle: "Extras for Peak Listing Season",
    addOnsLead: "Add city pages or ad budget as spring listings rise.",
    customTitle: "Inspectors in St. Louis and Kansas City?",
    customText: "Share both teams for a single combined quote.",
  },
  faq: {
    title: "Missouri Home Inspector Marketing FAQ",
    lead: "Licensing, metros, occupancy inspections and costs. Still unsure? Call our team.",
    items: [
      {
        q: "Do Missouri home inspectors need a license to market their services?",
        a: "No. Missouri doesn't license or register home inspectors statewide, so you're free to advertise wherever you work. Buyers still want proof, so we put your certification, insurance, sample report and reviews front and center on your Google profile and website.",
      },
      {
        q: "Is a municipal occupancy inspection the same as a home inspection in St. Louis County?",
        a: "No. Many St. Louis County municipalities require an occupancy inspection by the city or county when a home changes hands, focused on local code items. A home inspection is a full condition report for the buyer. We write pages explaining the difference, which also draws sellers wanting a pre-listing inspection.",
      },
      {
        q: "Can a home inspector Kansas City MO company rank on the Kansas side too?",
        a: "Yes, if you inspect there. Your map ranking leans toward your office location, so Kansas-side suburbs like Overland Park and Olathe need dedicated pages, client reviews mentioning them and ads set to those zip codes. Kansas has its own rules, so check them before advertising there.",
      },
      {
        q: "How do I become a top home inspector St. Louis MO buyers trust?",
        a: "Earn trust where buyers look. That means a complete Google profile, steady reviews that mention St. Louis neighborhoods, pages for the municipalities you cover and a site with your sample report and credentials. Agents notice the same signals when they suggest names to clients.",
      },
      {
        q: "Which add-on services should Missouri inspectors promote?",
        a: "Termite and wood-destroying insect inspections, radon testing and sewer scopes are the add-ons Missouri buyers ask about often. Build a dedicated page for each, add it to your Google profile's services and mention it in review requests, so buyers searching for one test find your full inspection too.",
      },
      {
        q: "Can I rank for home inspection Springfield MO and home inspection Columbia MO at once?",
        a: "Yes, when you serve both. Each city needs its own page and reviews that name it, and a staffed office in each lets you run a second verified Google profile. Without one, regular search results and ads carry the second city while your map ranking stays strongest at home.",
      },
      {
        q: "What do your Missouri home inspector marketing plans cost?",
        a: "Three tiers at $297, $750 and $1,500, each month to month. Media spend passes through to Google at a 0% markup. Higher tiers reach more Missouri cities with more content, more reviews work and paid campaigns.",
      },
    ],
  },
  audit: {
    title: "Book a Free Missouri Home Inspector Marketing Audit",
    lead: [
      "We map where you rank across the Missouri cities and suburbs you cover, look over your profile, website and reviews, and point out where bookings go elsewhere. Inspecting in nearby states as well? We also market inspectors in ",
      {
        href: "/services/home-inspector-marketing/illinois",
        label: "Illinois",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/kentucky",
        label: "Kentucky",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/tennessee",
        label: "Tennessee",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/arkansas",
        label: "Arkansas",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/oklahoma",
        label: "Oklahoma",
      },
      ".",
    ],
    points: [
      "Both metros and your towns checked",
      "Reviews and credentials reviewed",
      "Three plans, $297 to $1,500 a month",
    ],
    form: {
      formType: "home-inspector-marketing-missouri",
      badge: "Free Missouri audit",
      title: "Request a Free Missouri Audit",
      subtitle: "No charge, no obligation.",
      submitText: "Send My Missouri Audit",
      messageLabel: "Your Missouri cities and add-ons",
      messagePlaceholder: "e.g. Kirkwood and Webster Groves, termite and radon",
    },
  },
  banner: {
    title: "Become the Inspector Missouri Buyers Call First",
    lead: "Your free audit shows your map position in every city you cover.",
    icons: ["inspect", "bug"],
  },
};
