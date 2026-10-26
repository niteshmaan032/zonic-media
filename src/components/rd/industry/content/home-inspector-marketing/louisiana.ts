import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* LOUISIANA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so the live page's ranking
   report and keyword volumes could not be pulled. Rank safety: the live
   title's core term "Home Inspector Marketing in Louisiana" stays in the
   title, and every phrase in the live keywords meta sits in the title,
   H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): the Louisiana State Board of Home Inspectors
   licenses inspectors (annual renewal, E&O insurance); a wood destroying
   insect report may only be issued by a licensed termite control operator
   or a certified WDIR technician under one; insurers must offer wind
   mitigation discounts once an approved surveyor files the Louisiana
   Hurricane Loss Mitigation Survey; top New Orleans pages cover termite
   damage, raised vs slab homes, moisture and mold, and sewer/water line
   camera inspections on shifting ground. */

export const CONTENT: LocationContent = {
  draftSlug: "louisiana-2",
  liveUrl: "/services/home-inspector-marketing/louisiana",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Louisiana",
  meta: {
    title: "Home Inspector Marketing in Louisiana | NOLA to Shreveport",
    description:
      "Home inspection marketing in Louisiana: Maps rankings in New Orleans, Metairie, Baton Rouge and Lafayette, plus mold and sewer camera pages, ads and reviews.",
    keywords: [
      "home inspector marketing louisiana",
      "home inspector seo louisiana",
      "home inspector new orleans",
      "best home inspectors new orleans",
      "home inspection baton rouge",
      "home inspection lafayette la",
      "home inspection cost louisiana",
      "home inspector louisiana",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation louisiana",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.limeBlue,
  hero: {
    h1: "Louisiana Home Inspector Marketing Agency, Parish by Parish",
    h1NoWrap: "Parish by Parish",
    lead: [
      "Louisiana buyers want an inspector who knows raised homes, moisture and termite damage, and they find one on Google or through their agent. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing program",
      },
      " puts you first from Metairie and the Northshore to Baton Rouge, Acadiana and Shreveport.",
    ],
    cta: "Get My Louisiana Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on Maps in every parish you serve",
        sub: "New Orleans to Shreveport, tracked town by town",
        chips: [
          "New Orleans",
          "Baton Rouge",
          "Lafayette",
          "Shreveport",
          "+ your parish",
        ],
      },
      left: {
        icon: "drop",
        title: "More mold and moisture jobs",
        sub: "Pages for humid-climate add-on testing",
      },
      right: {
        icon: "storm",
        title: "Steady bookings around storms",
        sub: "Campaigns paused and restarted with the weather",
      },
      bottom: {
        title: "Agents who trust your reports",
        sub: "Profiles and reviews that make referrals easy",
      },
    },
  },
  services: {
    title: "Marketing for the Home Inspector\nLouisiana Agents Recommend",
    lead: "Louisiana home inspector marketing under one roof, listing to reviews.",
    cta: "Audit My Louisiana Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profiles for Louisiana Inspectors",
        desc: "Correct inspection categories, your LSBHI license, service areas by parish and current job photos, kept active so you climb local maps.",
        points: [
          "License number listed",
          "Parish service areas",
          "Photos from recent jobs",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Optimize my profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO, Louisiana Parishes and Add-On Pages",
        desc: "Pages for Metairie, Mandeville and Prairieville, plus mold, sewer camera, wind mitigation and new-construction pages built on Louisiana buyer searches.",
        points: [
          "Page per parish or town",
          "Mold and sewer camera pages",
          "Wind mitigation page",
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
        title: "Local Services Ads and Google Ads by Parish",
        desc: "Search ads and Local Services Ads set to your parishes, switched off ahead of storms and back on once inspections pick up again.",
        points: [
          "Parish-level targeting",
          "Storm pause and restart",
          "Calls tracked by ad",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "Websites That Book Inspections Across Louisiana",
        desc: "Phone-friendly pages that take bookings, show a sample report, offer add-ons and alert the agent about every appointment, even on a weak signal.",
        points: ["Online booking", "Sample report page", "Agent notified"],
        links: [{ href: "/services/web-design", label: "Website design" }],
      },
      {
        icon: "star",
        title: "Reviews and Agent Visibility in Every Parish",
        desc: "Each report triggers a review text, we draft owner replies, and a referral page lays out your coverage, turnaround and add-ons for agents.",
        points: [
          "Texts sent with reports",
          "Owner replies drafted",
          "Agent page published",
        ],
        links: [{ href: "/services", label: "See all services" }],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified Louisiana Profiles, Fixed",
        desc: "We find why Google suspended or stalled your listing, correct the issue and run the appeal on your behalf. We've brought back 900+ suspended profiles.",
        points: ["Cause found", "Verification sorted", "Appeal submitted"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my listing",
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
    title: "How We Grow Louisiana Home Inspection Companies",
    lead: "Buyers and agents check three things before booking a Louisiana inspector, and we work on all of them.",
    rows: [
      {
        title: "Claim a Top Pin for “Home Inspector New Orleans”",
        body: [
          "In New Orleans, buyers often pick an inspector straight from the map while they're still reading the seller's disclosure. We complete your profile, add pages for Uptown, Gentilly and Metairie, and gather steady reviews so your listing holds a top-three spot.",
        ],
        points: [
          "Neighborhood pages live",
          "Mold testing listed",
          "Monthly rank grid",
          "License shown on profile",
        ],
        cta: "See My New Orleans Ranking",
        ui: {
          kind: "maps",
          query: "home inspector new orleans",
          city: "New Orleans",
          category: "Home inspector · Mold testing",
        },
      },
      {
        title:
          "AI SEO for Home Inspectors Chasing “Home Inspection Baton Rouge”",
        body: [
          "Baton Rouge buyers now type questions into Gemini or ChatGPT, asking which inspector knows older raised homes. With ",
          { href: "/services/ai-seo-services", label: "AI SEO" },
          ", your site, reviews and listings share the same clear details, so those assistants have good reason to name your company.",
        ],
        points: [
          "Answer pages for each add-on",
          "Matching listings everywhere",
          "Schema on service pages",
          "Reviews that mention Baton Rouge",
        ],
        cta: "See What AI Says About Me",
        ui: {
          kind: "ai",
          query: "home inspection baton rouge",
          intro: "For a home inspection in Baton Rouge,",
          bullets: [
            "LSBHI-licensed inspector",
            "Sewer camera on request",
            "Reports the next morning",
          ],
        },
      },
      {
        title: "Reviews That Keep Louisiana Agents Sending Buyers",
        body: [
          "Agents in Lafayette and the Northshore read your latest reviews before they give a client your number. Each buyer gets a short text once the report is delivered, reviewing takes a tap, and we write replies in your tone, so your rating keeps working for you.",
        ],
        points: [
          "Text sent on delivery",
          "One-tap review link",
          "Replies in your tone",
          "Negative reviews flagged",
        ],
        cta: "Grow My Louisiana Reviews",
        ui: {
          kind: "reviews",
          sms: "Marcus, thanks for booking us in Lafayette. Your report just landed. Could you share a short Google review?",
          reviewer: "Marcus",
          review:
            "They spotted water damage under the raised floor that our walk-through missed. Report was simple to read.",
          reply:
            "Appreciate it, Marcus! Raised homes around Lafayette hide a lot underneath. Glad we found it before closing.",
        },
      },
    ],
  },
  regions: {
    title: "Louisiana Regions and Parishes We Cover",
    lead: "From the river parishes to the Arkansas line, each region has its own agents, housing and weather, so pages and service areas follow suit.",
    items: [
      {
        name: "New Orleans & Jefferson Parish",
        cities: "New Orleans · Metairie · Kenner · Gretna",
        focus: "Older raised homes and sewer camera pages",
      },
      {
        name: "The Northshore",
        cities: "Mandeville · Covington · Slidell · Hammond",
        focus: "Separate rankings north of the lake",
      },
      {
        name: "Greater Baton Rouge",
        cities: "Baton Rouge · Prairieville · Denham Springs · Zachary",
        focus: "New-construction and flood-zone buyer pages",
      },
      {
        name: "Lafayette & Acadiana",
        cities: "Lafayette · Youngsville · Broussard · New Iberia",
        focus: "Crawlspace moisture and mold testing pages",
      },
      {
        name: "Lake Charles & the Bayou Region",
        cities: "Lake Charles · Sulphur · Houma · Thibodaux",
        focus: "Storm-aware campaigns and roof-focused pages",
      },
      {
        name: "North Louisiana",
        cities: "Shreveport · Bossier City · Monroe · Ruston",
        focus: "City pages with few inspectors competing online",
      },
    ],
    other: "Covering a parish that isn't listed? We'll build for it too.",
  },
  reviews: {
    title: "Owners Explain Our 5.0 Google Rating",
    lead: "Reviews from home service businesses we've helped grow.",
  },
  pricing: {
    title: "Pricing for Home Inspector Lead Generation, Louisiana-Wide",
    lead: [
      "Month-to-month terms apply to every tier; our markup on ad budgets is 0%. For the wider menu, visit our ",
      { href: "/services", label: "digital marketing services" },
      ".",
    ],
    compareTitle: "Louisiana Plans at a Glance",
    compareLead: "One parish or statewide coverage.",
    addOnsTitle: "Add-Ons for Peak Spring Months",
    addOnsLead: "Extra parish pages or more ad budget when contracts climb.",
    customTitle: "Inspectors in New Orleans and Baton Rouge?",
    customText: "Tell us every territory for one combined quote.",
  },
  faq: {
    title: "Louisiana Home Inspector Marketing FAQ",
    lead: "Licensing, termites, storms, costs and the lake. Prefer to talk? Call our team.",
    items: [
      {
        q: "Does a Louisiana home inspector license need to show on my marketing?",
        a: "It's a smart move. Louisiana inspectors hold a license from the state's Board of Home Inspectors that renews every year, so agents expect a current number. We place it on your Google profile, website footer and agent page, next to your insurance details.",
      },
      {
        q: "Can I market WDI or termite inspections in Louisiana?",
        a: "Only if you're licensed for them. Louisiana's wood destroying insect report must come from a licensed termite control operator or a certified technician working under one. Licensed operators get dedicated WDI pages from us; if that's not you, we promote your partner arrangement and keep every claim accurate.",
      },
      {
        q: "How do I compete for “best home inspectors New Orleans” searches?",
        a: "Win the signals Google weighs: distance, relevance and reviews. A complete profile, a New Orleans page that covers raised homes and moisture, and a steady run of recent reviews that mention neighborhoods give you the best chance at those searches.",
      },
      {
        q: "How should I handle “home inspection cost Louisiana” searches without listing prices?",
        a: "Write a page that explains what drives the fee: raised or slab foundation, size, age and add-ons such as mold or sewer camera work. Close it with a quote request form. Buyers get an honest answer, and you get their details.",
      },
      {
        q: "Do you pause ads when a hurricane heads for Louisiana?",
        a: "Yes. When a storm threatens your area, we pause ads and scheduled posts, then restart them once roads reopen and closings resume. Afterward, your profile and site highlight re-inspections and roof checks, which buyers and sellers ask about right away.",
      },
      {
        q: "Can I offer wind mitigation surveys as a Louisiana home inspector?",
        a: "If you're an approved wind mitigation surveyor, yes, and it's worth marketing. Louisiana insurers must offer discounts based on those surveys, so homeowners and buyers search for them. We build a wind mitigation page and list the survey on your Google profile.",
      },
      {
        q: "Will a home inspection Lafayette LA page help if my office is in Baton Rouge?",
        a: "It helps with organic search and ads, but the map favors businesses near the searcher. A Lafayette page, reviews from Acadiana jobs and Lafayette in your service area build visibility, and a second verified location helps most if you staff one there.",
      },
    ],
  },
  audit: {
    title: "Request a Free Louisiana Home Inspector Marketing Audit",
    lead: [
      "Our audit grades your map position parish by parish, along with the profile, site and reviews, and flags the searches where buyers book another inspector. Working beyond Louisiana? We also market inspectors in ",
      {
        href: "/services/home-inspector-marketing/texas",
        label: "Texas",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/arkansas",
        label: "Arkansas",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/alabama",
        label: "Alabama",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/florida",
        label: "Florida",
      },
      ".",
    ],
    points: [
      "Every parish you serve checked",
      "Mold and sewer searches tested",
      "Entry plan $297, month to month",
    ],
    form: {
      formType: "home-inspector-marketing-louisiana",
      badge: "Free Louisiana audit",
      title: "Get Your Free Louisiana Audit",
      subtitle: "Free, simple and with no obligation.",
      submitText: "Send My Louisiana Audit",
      messageLabel: "Your parishes, towns and add-ons",
      messagePlaceholder:
        "e.g. Metairie and the Northshore, mold and sewer camera",
    },
  },
  banner: {
    title: "Smarter SEO for Home Inspectors in Every Louisiana Parish",
    lead: "One free audit shows how your listing ranks in each parish you serve.",
    icons: ["inspect", "storm"],
  },
};
