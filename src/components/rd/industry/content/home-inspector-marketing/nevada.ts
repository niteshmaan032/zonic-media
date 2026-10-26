import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* NEVADA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so keywords and angles come from
   web research. Rank safety: the live title's core term "Home Inspector
   Marketing in Nevada" opens the title, and every live keywords-meta phrase
   sits in the title, H1, an H2/H3 or an FAQ question. Verified facts used:
   the Nevada Real Estate Division certifies inspectors of structures
   (NRS/NAC 645D: residential, general and master certificates); Carson
   City, Douglas County and parts of Washoe County show high shares of
   elevated radon tests (UNR Extension); new-construction phase and
   11-month warranty inspections are common Las Vegas services. */

export const CONTENT: LocationContent = {
  draftSlug: "nevada-2",
  liveUrl: "/services/home-inspector-marketing/nevada",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Nevada",
  meta: {
    title: "Home Inspector Marketing in Nevada | Las Vegas & Reno",
    description:
      "Nevada home inspector marketing for Las Vegas, Henderson, Reno and Carson City: Google Maps rankings, new-build and radon pages, ads and reviews.",
    keywords: [
      "home inspector marketing nevada",
      "home inspector seo nevada",
      "home inspector las vegas",
      "home inspection henderson nv",
      "home inspector reno nv",
      "home inspectors pahrump nevada",
      "home inspection las vegas cost",
      "inspector of structures nevada marketing",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation nevada",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.violetAmber,
  hero: {
    h1: "Nevada Home Inspector Marketing Agency From Las Vegas to Reno",
    h1NoWrap: "Las Vegas",
    lead: [
      "Nevada inspectors need a Real Estate Division certificate, and buyers book whoever looks most trusted on Google. Through ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " built for Nevada, we earn you that trust in Las Vegas, Henderson, Reno and Carson City, with map rankings, new-build pages and reviews.",
    ],
    cta: "Get My Nevada Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top map spots across both valleys",
        sub: "Las Vegas Valley, Truckee Meadows and Carson Valley",
        chips: ["Las Vegas", "Henderson", "Reno", "Carson City", "+ your area"],
      },
      left: {
        icon: "home",
        title: "More new-build inspections",
        sub: "Phase and 11-month warranty pages that rank",
      },
      right: {
        icon: "pool",
        title: "More pool and spa add-ons",
        sub: "Pages for backyard equipment checks",
      },
      bottom: {
        title: "Out-of-state buyers, booked online",
        sub: "Pages and booking built for remote clients",
      },
    },
  },
  services: {
    title: "Inspector of Structures? Nevada\nMarketing Around Your Certificate",
    lead: "Las Vegas to Reno, one team handles your Nevada inspector marketing.",
    cta: "Audit My Nevada Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profile Work for the Las Vegas Valley and Reno",
        desc: "Community service areas, add-on services, your certificate number and real job photos, all aimed at a higher map spot where you inspect.",
        points: [
          "Community service areas",
          "Certificate number shown",
          "Job photos each week",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile setup",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO, Nevada Communities and New Builds",
        desc: "Pages for Summerlin, Inspirada, Damonte Ranch and every area you cover, plus phase, warranty, pool and radon inspection pages.",
        points: [
          "Community pages",
          "Phase and warranty pages",
          "Pool and radon content",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for service businesses",
          },
        ],
      },
      {
        icon: "target",
        title: "Ads Split Between Southern and Northern Nevada",
        desc: "Google search and Local Services placements for buyers in escrow, with separate budgets for each valley you serve.",
        points: [
          "Under-contract buyers",
          "Budgets per valley",
          "Relocating-buyer targeting",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads campaigns" },
        ],
      },
      {
        icon: "monitor",
        title: "Nevada Inspection Sites Remote Buyers Can Book",
        desc: "Mobile sites with online booking, sample reports and a video walkthrough sample, so a buyer relocating from another state can book without calling.",
        points: [
          "Book without a call",
          "Sample report on view",
          "Video walkthrough sample",
        ],
        links: [{ href: "/services/web-design", label: "Web design" }],
      },
      {
        icon: "star",
        title: "Reviews That Name Nevada Communities, Plus Agent Reach",
        desc: "Review requests sent with each report, prompts to mention the community, and an agent page that makes passing your name along easy.",
        points: [
          "Sent with every report",
          "Community name prompts",
          "Agent-ready page",
        ],
        links: [{ href: "/services", label: "See all services" }],
      },
      {
        icon: "shield",
        title: "Help for Suspended Nevada Google Profiles",
        desc: "A suspension or stuck verification can hide you mid-season. We pin down the trigger, resolve it and manage the appeal, backed by 900+ reinstatements.",
        points: [
          "Trigger identified",
          "Verification walkthrough",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get verified",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Home Inspector Lead Generation: Nevada Buyers, Near and Far",
    lead: "Bookings from Google Maps, AI assistants and a website out-of-state buyers can use without calling.",
    rows: [
      {
        title: "Win the Map When Buyers Search “Home Inspector Las Vegas”",
        body: [
          "Buyers in Summerlin, Spring Valley and North Las Vegas search on their phones and call from the top of the map. We complete your profile, publish community pages and ask every client for a review, so your company sits near the top of what they see.",
        ],
        points: [
          "Community-level coverage",
          "New-build services listed",
          "Weekly photo updates",
          "Rank grid reports",
        ],
        cta: "Check My Las Vegas Ranking",
        ui: {
          kind: "maps",
          query: "home inspector las vegas",
          city: "Las Vegas",
          category: "Home inspector · New construction",
        },
      },
      {
        title: "AI SEO for Home Inspectors in Reno and Carson City",
        body: [
          "Northern Nevada buyers ask AI assistants whether they need a radon test and who checks new builds near Reno. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " publish those answers, keep every listing consistent and mark up your pages, so ChatGPT and Google's AI mention your company by name.",
        ],
        points: [
          "Radon and new-build answers",
          "Certificate details listed",
          "Pages marked up",
          "Listings kept consistent",
        ],
        cta: "See My AI Visibility",
        ui: {
          kind: "ai",
          query: "home inspector reno nv",
          intro: "For a home inspector in Reno, NV,",
          bullets: [
            "Nevada-certified inspector",
            "Radon testing available",
            "Serves Sparks and Damonte Ranch",
          ],
        },
      },
      {
        title: "Online Booking for Buyers Moving to Nevada",
        body: [
          "Buyers moving to Nevada from another state often can't attend the inspection. Your site should let them book online, pay, see a sample report and know they'll get photos and a video summary, all from a phone in another time zone.",
        ],
        points: [
          "Online booking and payment",
          "Sample report on view",
          "Video summary offer",
          "Fast on any phone",
        ],
        cta: "Plan My Booking Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/las-vegas",
          headline: "Nevada inspections, booked from anywhere",
          services: [
            "Buyer inspection",
            "New-build phase check",
            "11-month warranty",
            "Pool and spa",
          ],
        },
      },
    ],
  },
  regions: {
    title: "Nevada Areas We Market, North and South",
    lead: "Southern Nevada's master-planned communities and Northern Nevada's valleys have different buyers, so we plan them apart.",
    items: [
      {
        name: "Las Vegas & Summerlin",
        cities: "Las Vegas · Summerlin · Spring Valley · Enterprise",
        focus: "Community pages and resale inspection ads",
      },
      {
        name: "Henderson & Boulder City",
        cities: "Henderson · Green Valley · Inspirada · Boulder City",
        focus: "New-build and warranty inspection pages",
      },
      {
        name: "North Las Vegas & Northwest",
        cities: "North Las Vegas · Aliante · Centennial Hills · Skye Canyon",
        focus: "Newer tract neighborhoods and pool add-ons",
      },
      {
        name: "Reno & Sparks",
        cities: "Reno · Sparks · Damonte Ranch · Spanish Springs",
        focus: "Radon, snow-country and new-build pages",
      },
      {
        name: "Carson City & Carson Valley",
        cities: "Carson City · Minden · Gardnerville · Dayton",
        focus: "Radon testing pages for higher-risk valleys",
      },
      {
        name: "Rural Nevada",
        cities: "Pahrump · Mesquite · Fernley · Elko",
        focus: "Well, septic and manufactured home pages",
      },
    ],
    other: "Inspecting somewhere else in Nevada? We'll build pages for it.",
  },
  reviews: {
    title: "Owners Who Work With Us Rate Us 5.0 on Google",
    lead: "Real Google reviews from home service companies on our roster.",
  },
  pricing: {
    title: "Plans for Nevada Home Inspection Companies",
    lead: [
      "All plans are month to month. Ad budgets reach Google at a 0% markup, and the plans pair well with ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home services",
      },
      ".",
    ],
    compareTitle: "Nevada Plans at a Glance",
    compareLead: "One valley or both, see what each plan covers.",
    addOnsTitle: "Extras for Busy Closing Months",
    addOnsLead: "Add community pages or ads when new phases open.",
    customTitle: "Teams in Las Vegas and Reno?",
    customText: "Send both service areas for a combined quote.",
  },
  faq: {
    title: "Nevada Home Inspector Marketing Questions, Answered",
    lead: "Certificates, new builds, radon and remote buyers. Rather talk? Call us.",
    items: [
      {
        q: "Does Nevada require a certificate to advertise home inspections?",
        a: "Yes. The Nevada Real Estate Division certifies inspectors of structures, and residential inspectors need that certificate before inspecting for pay. We show your certificate number on your profile, website and ads, which reassures buyers and gives AI tools a fact they can verify.",
      },
      {
        q: "How do I rank for “home inspection Henderson NV” new-build searches?",
        a: "Give new construction its own pages. Buyers of new homes in Henderson, Inspirada or Cadence look for phase inspections and 11-month warranty visits separately from resale inspections. We build those pages, add them as Google profile services and run ads on the searches before builder deadlines arrive.",
      },
      {
        q: "Can one company rank for home inspector Reno NV and Las Vegas searches?",
        a: "Not on the map from one address. The two metros sit hundreds of miles apart, and Google ranks map results near your office. A real office in each lets you run two verified profiles; otherwise regular search pages and ads cover the second market.",
      },
      {
        q: "Should Northern Nevada inspectors market radon testing?",
        a: "Yes. Elevated radon turns up often in Carson City, Douglas County and parts of Washoe County, and buyers there search for testing by name. A radon page with your method, timing and local context, plus radon listed on your profile, turns those searches into paid radon tests on top of the main inspection.",
      },
      {
        q: "Should my site answer “home inspection Las Vegas cost” searches?",
        a: "Yes, using your own fee schedule. Explain what's included, how home size, pools and casitas change the fee, and how new-build phase visits are priced compared with resale inspections. Clear answers keep cost shoppers on your site and help you rank for those searches.",
      },
      {
        q: "Is “home inspectors Pahrump Nevada” worth targeting from Las Vegas?",
        a: "Often, yes. Pahrump sits about an hour from Las Vegas, and buyers there look for inspectors willing to make the drive. A Pahrump page, reviews from local clients and ads set to its zip codes can win those jobs, though a Las Vegas address won't top Pahrump's map.",
      },
      {
        q: "What do Nevada home inspector marketing plans cost?",
        a: "Nevada plans: $297, $750 or $1,500 every month you stay, billed month to month. Advertising budgets get a 0% markup from us, and larger plans add more communities, more content and coverage of both Nevada markets.",
      },
    ],
  },
  audit: {
    title: "Free Nevada Home Inspector Marketing Audit, North or South",
    lead: [
      "Our audit records your map position in every Nevada community you cover, grades your profile, site, reviews and certificate details and shows where bookings leak to other inspectors. Inspecting across the border too? We also market inspectors in ",
      {
        href: "/services/home-inspector-marketing/california",
        label: "California",
      },
      ", ",
      { href: "/services/home-inspector-marketing/arizona", label: "Arizona" },
      ", ",
      { href: "/services/home-inspector-marketing/utah", label: "Utah" },
      " and ",
      { href: "/services/home-inspector-marketing/oregon", label: "Oregon" },
      ".",
    ],
    points: [
      "Every community you serve checked",
      "Profile, site and reviews audited",
      "Plans start at $297 a month",
    ],
    form: {
      formType: "home-inspector-marketing-nevada",
      badge: "Free Nevada audit",
      title: "Start Your Free Nevada Audit",
      subtitle: "Free, with nothing to sign.",
      submitText: "Send My Nevada Audit",
      messageLabel: "Your Nevada areas and services",
      messagePlaceholder: "e.g. Henderson and Summerlin, new builds and pools",
    },
  },
  banner: {
    title: "Be the Certified Inspector Nevada Buyers Book First",
    lead: "Find out where you rank in each Nevada community, free of charge.",
    icons: ["inspect", "sun"],
  },
};
