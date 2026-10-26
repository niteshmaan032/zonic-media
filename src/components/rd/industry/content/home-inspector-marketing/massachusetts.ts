import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* MASSACHUSETTS HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so keywords and angles come from
   web research. Rank safety: the live title's core term "Home Inspector
   Marketing in Massachusetts" opens the title, and every live keywords-meta
   phrase sits in the title, H1, an H2/H3 or an FAQ question. Verified facts
   used: 760 CMR 74.00 (inspection-waiver rule, effective Oct 15, 2025),
   G.L. c.112 §87YY½ (seller's agents can't recommend an inspector; buyer's
   agents may), Board of Registration of Home Inspectors licensing, Title 5
   septic inspections by DEP-approved inspectors only. */

export const CONTENT: LocationContent = {
  draftSlug: "massachusetts-2",
  liveUrl: "/services/home-inspector-marketing/massachusetts",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Massachusetts",
  meta: {
    title: "Home Inspector Marketing in Massachusetts | Boston & Cape Cod",
    description:
      "Massachusetts home inspector marketing for Boston, Worcester and Cape Cod firms: Google Maps rankings, town SEO pages, ads and reviews built around the waiver rule.",
    keywords: [
      "home inspector marketing massachusetts",
      "home inspector seo massachusetts",
      "home inspector boston ma",
      "home inspectors boston area",
      "home inspection worcester ma",
      "home inspection cape cod",
      "home inspection massachusetts new law",
      "home inspection massachusetts cost",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation massachusetts",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.orangeViolet,
  hero: {
    h1: "Massachusetts Home Inspector Marketing Agency for More Bookings",
    h1NoWrap: "More Bookings",
    lead: [
      "Since October 2025, Massachusetts sellers can't make buyers skip the inspection, so buyers keep theirs and often choose the inspector themselves on Google. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " team gets your firm on the map in Boston, Worcester, the South Shore and the Cape.",
    ],
    cta: "Get My Massachusetts Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "A top-3 map spot in your towns",
        sub: "In the Massachusetts towns your inspectors drive to",
        chips: ["Boston", "Worcester", "Quincy", "Barnstable", "+ your town"],
      },
      left: {
        icon: "inspectList",
        title: "More direct buyer bookings",
        sub: "From buyers who found you on their own",
      },
      right: {
        icon: "home",
        title: "More older-home add-ons",
        sub: "Radon, lead paint and oil tank searches covered",
      },
      bottom: {
        title: "A spring calendar filled early",
        sub: "Pages and ads ready before listings pick up in March",
      },
    },
  },
  services: {
    title: "Inspection Marketing Services for Massachusetts Firms",
    lead: "Massachusetts inspector marketing for the towns you cover, one team.",
    cta: "Audit My Massachusetts Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Rankings for Your Massachusetts Towns",
        desc: "We set your service area, categories, add-on services and state license number on your Google profile, so you surface in each town you inspect.",
        points: [
          "Town-level service area",
          "Board license shown",
          "Fresh inspection photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile tune-up",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO, Massachusetts Town by Town",
        desc: "Separate pages for the towns you serve and for each add-on test, from radon and lead paint to oil tanks and, if you're approved, Title 5.",
        points: [
          "Page per town served",
          "Radon and lead pages",
          "Older-home topic pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home services",
          },
        ],
      },
      {
        icon: "target",
        title: "Massachusetts Search Ads and Local Services Ads",
        desc: "Ads aimed at buyers with an accepted offer, fenced to your zip codes and kept clear of people shopping for inspector courses.",
        points: [
          "Accepted-offer search terms",
          "Zip code targeting",
          "Course traffic blocked",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "Massachusetts Inspection Websites That Take Bookings",
        desc: "Fast mobile pages, online scheduling and a plain rundown of the waiver rule, so a buyer can book the moment their offer is accepted.",
        points: [
          "Online scheduling",
          "Waiver rule explained",
          "Add-ons bookable",
        ],
        links: [{ href: "/services/web-design", label: "Website design" }],
      },
      {
        icon: "star",
        title: "Reviews That Reach Buyers and Buyer's Agents",
        desc: "Review requests after each report, plus pages buyer's agents can share, since listing agents here can't name an inspector.",
        points: [
          "Requests after each report",
          "Town and house details",
          "Agent-friendly share page",
        ],
        links: [{ href: "/services", label: "All our services" }],
      },
      {
        icon: "shield",
        title: "Help for Suspended Massachusetts Inspector Profiles",
        desc: "A suspended listing or a stalled verification can stop your calls. We diagnose the problem, correct it and appeal on your behalf, drawing on 900+ profiles reinstated.",
        points: [
          "Root cause found",
          "Video verification prep",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my Massachusetts profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get my verification done",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Massachusetts Home Inspector Lead Generation",
    lead: "Three places where buyers pick an inspector without a referral list: the map, AI answers and your reviews.",
    rows: [
      {
        title: "Show Up When Buyers Search “Home Inspector Boston MA”",
        body: [
          "A buyer with an accepted offer in Dorchester or Brighton opens Google Maps and phones a firm from the top three. We tune your profile, add Boston neighborhood pages and keep fresh reviews arriving, so your pin lands among them, inside Route 128 and out.",
        ],
        points: [
          "Neighborhood service areas",
          "Add-on tests listed",
          "Weekly photo posts",
          "Map rank tracking",
        ],
        cta: "Check My Boston Ranking",
        ui: {
          kind: "maps",
          query: "home inspector boston ma",
          city: "Boston",
          category: "Home inspector · Radon testing",
        },
      },
      {
        title: "AI SEO for Home Inspectors in the Bay State",
        body: [
          "Buyers now ask ChatGPT and Google's AI what the new rule means and who inspects older Worcester homes. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO work" },
          " writes clear answer pages, aligns your listings and adds schema, so those tools describe your firm accurately and name it.",
        ],
        points: [
          "Waiver rule answer page",
          "Matching listing details",
          "Schema on every page",
          "Reviews naming the town",
        ],
        cta: "Test My AI Visibility",
        ui: {
          kind: "ai",
          query: "home inspection worcester ma",
          intro: "For a home inspection in Worcester, MA,",
          bullets: [
            "Licensed by the state board",
            "Radon and lead paint add-ons",
            "Covers Shrewsbury and Auburn",
          ],
        },
      },
      {
        title: "Grow Google Reviews From Every Massachusetts Inspection",
        body: [
          "Since listing agents can't steer buyers to you, the next buyer often decides on reviews. We text a request when each report goes out, suggest mentioning the town and house, and draft calm replies, so your profile reads like a trusted local name.",
        ],
        points: [
          "Text sent with the report",
          "Town and house prompts",
          "Replies in your voice",
          "Unfair reviews flagged",
        ],
        cta: "Grow My Massachusetts Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Megan, it's Your Company. We've emailed your Arlington report. Could you take a minute to review us on Google?",
          reviewer: "Megan",
          review:
            "Our inspector spent the whole morning in a 1920s Colonial and walked us through the knob-and-tube and the old oil tank. Calm, clear and thorough.",
          reply:
            "Thank you, Megan! Enjoy the new house, and call us when it's time for that radon retest.",
        },
      },
    ],
  },
  regions: {
    title: "Massachusetts Regions Where We Book Inspections",
    lead: "Each region gets its own town pages, service areas and ads, matched to its housing and the way its buyers search.",
    items: [
      {
        name: "Greater Boston",
        cities: "Boston · Cambridge · Somerville · Newton",
        focus: "Condo, triple-decker and neighborhood pages",
      },
      {
        name: "North Shore & Merrimack Valley",
        cities: "Salem · Lynn · Lowell · Andover",
        focus: "Coastal and mill-city pages for older housing",
      },
      {
        name: "MetroWest & Worcester",
        cities: "Framingham · Natick · Worcester · Shrewsbury",
        focus: "Commuter-town pages and Worcester map work",
      },
      {
        name: "South Shore & South Coast",
        cities: "Quincy · Plymouth · Brockton · New Bedford",
        focus: "Waterfront homes and septic-area add-on pages",
      },
      {
        name: "Cape Cod & Islands",
        cities: "Barnstable · Falmouth · Hyannis · Nantucket",
        focus: "Seasonal and out-of-state buyers of second homes",
      },
      {
        name: "Pioneer Valley & Berkshires",
        cities: "Springfield · Northampton · Amherst · Pittsfield",
        focus: "Well, radon and rural route coverage",
      },
    ],
    other:
      "Inspecting in a Massachusetts town not shown here? We'll build pages for it.",
  },
  reviews: {
    title: "Rated 5.0 on Google by the Owners We Work With",
    lead: "Real reviews from home service owners who trust us with their marketing.",
  },
  pricing: {
    title: "Massachusetts Home Inspector Marketing Plans",
    lead: [
      "Plans renew monthly, ad spend gets a 0% markup, and every engagement starts with a free check of your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ".",
    ],
    compareTitle: "Compare Plans for Massachusetts Firms",
    compareLead: "From a single-inspector company to a multi-county team.",
    addOnsTitle: "Add-Ons for the Spring Rush",
    addOnsLead: "More town pages or a bigger ad push as listings climb.",
    customTitle: "Inspectors in several Massachusetts regions?",
    customText: "Send your towns and headcount for a custom quote.",
  },
  faq: {
    title: "Your Massachusetts Inspection Marketing Questions",
    lead: "The waiver rule, agent referrals, licensing and towns. Still deciding? Call us.",
    items: [
      {
        q: "Buyers search “home inspection Massachusetts new law.” What should my site say?",
        a: "Explain it in plain words. Since October 15, 2025, 760 CMR 74.00 stops sellers and their agents from making an offer depend on the buyer waiving or limiting an inspection. We write a short answer page on what that means for buyers, link it from your profile and keep it current.",
      },
      {
        q: "Can listing agents still refer home inspectors in the Boston area?",
        a: "Not directly. Massachusetts law bars seller's agents from recommending a specific inspector, while a buyer's agent may. So we market straight to buyers through Maps, search and reviews, and give buyer's agents an easy page to share when a client asks them for a name.",
      },
      {
        q: "Should my Massachusetts license number appear on Google and my website?",
        a: "Yes. Licenses here come from the state's Board of Registration of Home Inspectors. Buyers can look yours up, so we add your number to your profile, site footer and booking pages, which also gives AI assistants a verifiable fact about your firm.",
      },
      {
        q: "Can one firm rank for “home inspection Worcester MA” and “home inspection Cape Cod”?",
        a: "Yes, within limits. Map rankings are strongest near your business address, so towns farther out rely on their own service pages, reviews that name those towns and, where you have a real second office, a separate profile. We plan that mix town by town.",
      },
      {
        q: "Should my site answer “home inspection Massachusetts cost” searches?",
        a: "Yes, with your own fee guide. Buyers compare inspectors on price and scope, so a clear page showing what's included, how condos and multi-families differ and which add-ons are extra keeps them on your site. We write it from your fee sheet and keep it updated.",
      },
      {
        q: "Which add-on services should Massachusetts inspectors promote?",
        a: "Push the tests older homes call for: radon, lead paint, oil tank checks, sewer scopes and, if you're DEP-approved, Title 5 septic inspections. We give each one a dedicated page and a matching service on your Google profile, so buyers searching for that test find you instead of a general list.",
      },
      {
        q: "What does home inspector marketing in Massachusetts cost with Zonic?",
        a: "Pricing runs $297, $750 or $1,500 monthly, all month to month. Your ad budget is paid to Google directly, and we add a 0% markup. The right tier depends on how many towns, inspectors and add-on services you want to grow this year.",
      },
    ],
  },
  audit: {
    title: "Get a Free Massachusetts Home Inspector Marketing Audit",
    lead: [
      "Our audit finds your Map Pack spot in each town you serve, checks your profile on Google, your site and reviews, then shows where Massachusetts buyers are booking someone else. Working across state lines? We also market inspectors in ",
      {
        href: "/services/home-inspector-marketing/new-york",
        label: "New York",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/new-jersey",
        label: "New Jersey",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/pennsylvania",
        label: "Pennsylvania",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/maryland",
        label: "Maryland",
      },
      ".",
    ],
    points: [
      "Every town you cover, checked",
      "Waiver-rule content reviewed",
      "From $297 a month, month to month",
    ],
    form: {
      formType: "home-inspector-marketing-massachusetts",
      badge: "Free Massachusetts audit",
      title: "Request Your Free Massachusetts Audit",
      subtitle: "No cost and no obligation.",
      submitText: "Send My Massachusetts Audit",
      messageLabel: "Your towns and inspection services",
      messagePlaceholder:
        "e.g. Newton and Waltham, radon and lead paint add-ons",
    },
  },
  banner: {
    title: "Be the Inspector Massachusetts Buyers Find on Their Own",
    lead: "Your free audit starts with your rank in every town you serve.",
    icons: ["inspect", "home"],
  },
};
