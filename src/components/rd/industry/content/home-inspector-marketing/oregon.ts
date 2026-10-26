import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* OREGON HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush returned "API units balance is zero" on 24 Oct, so
   the live URL's ranking report could not be pulled. The live title's core
   term ("Home Inspector Marketing in Oregon") is kept, and every phrase in
   the live keywords meta sits in the title, H1, an H2/H3 or an FAQ
   question. Keywords and angles came from web research (24 Oct): Oregon
   inspectors are certified (OCHI) through the Construction Contractors
   Board, pass the national exam and must work for a CCB-licensed
   business; Portland-area results sell sewer scopes, oil tank sweeps for
   older homes, radon and mold; the City of Portland requires a Home Energy
   Score when most single-family homes are listed. No volumes available. */

export const CONTENT: LocationContent = {
  draftSlug: "oregon-2",
  liveUrl: "/services/home-inspector-marketing/oregon",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Oregon",
  meta: {
    title: "Home Inspector Marketing in Oregon | Portland & Bend SEO",
    description:
      "Oregon home inspector marketing: Map Pack rankings, home inspector SEO and Google Ads for Portland, Salem, Eugene and Bend, plus sewer scope and oil tank pages.",
    keywords: [
      "home inspector marketing oregon",
      "home inspector seo oregon",
      "home inspector portland oregon",
      "home inspection bend oregon",
      "home inspection eugene oregon",
      "home inspection salem oregon",
      "home inspector license oregon",
      "home inspector marketing ideas",
      "home inspector lead generation oregon",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.tealAmber,
  hero: {
    h1: "Oregon Home Inspector Marketing for Sewer Scopes and Tank Sweeps",
    h1NoWrap: "Tank Sweeps",
    lead: [
      "Portland-area buyers often book more than the inspection: a sewer scope, an oil tank sweep or a radon test. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "marketing for home inspectors",
      },
      " ranks you for every one of them in Portland, Salem, Eugene and Bend, using map work, add-on pages, ads and reviews.",
    ],
    cta: "Get My Oregon Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 across Oregon",
        sub: "Portland metro, the Willamette Valley and Central Oregon",
        chips: ["Portland", "Salem", "Eugene", "Bend", "+ your town"],
      },
      left: {
        icon: "plumbing",
        title: "More sewer scopes",
        sub: "Camera inspection pages for older Portland homes",
      },
      right: {
        icon: "inspect",
        title: "Tank sweep bookings",
        sub: "Pages for buyers of older oil-heated houses",
      },
      bottom: {
        title: "Busy beyond spring",
        sub: "Steady campaigns through Oregon's wet season",
      },
    },
  },
  services: {
    title: "Home Inspector Marketing Ideas We Put to Work in Oregon",
    lead: "Oregon inspection companies hand us every channel, region by region.",
    cta: "Audit My Oregon Marketing",
    items: [
      {
        icon: "pin",
        title: "A Google Profile Ready for Oregon Buyers",
        desc: "Inspection categories, city service areas, your CCB and OCHI details and regular photos, all tuned for a place in the Map Pack.",
        points: [
          "CCB and OCHI shown",
          "City service areas",
          "Regular photo uploads",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Get my profile optimized",
          },
        ],
      },
      {
        icon: "search",
        title: "City Pages and Home Inspector SEO, Oregon Coast to Bend",
        desc: "A page per Oregon city, along with sewer scope, oil tank sweep, radon and mold pages that match how buyers here search.",
        points: [
          "Page for each city",
          "Add-on pages built",
          "Schema throughout",
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
        title: "Search and Local Services Ads Across Oregon",
        desc: "Campaigns on inspection and add-on searches, with Local Services Ads charged by the lead and kept to areas your inspectors cover.",
        points: [
          "Add-on search terms",
          "Per-lead billing",
          "Area-limited targeting",
        ],
        links: [{ href: "/services/google-ads", label: "Google Ads help" }],
      },
      {
        icon: "monitor",
        title: "A Website With Add-Ons in the Booking Flow",
        desc: "A quick mobile site where buyers pick the inspection, sewer scope and tank sweep in one booking, with a sample report to review.",
        points: ["Bundled booking", "Sample report page", "Call button up top"],
        links: [
          { href: "/services/web-design", label: "Website design services" },
          {
            href: "/home-inspector-website-design-agency-us/offer",
            label: "Inspector website build",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Broker Relationships",
        desc: "Review requests after each report and a broker page with booking links, so Portland and Bend agents can refer you in seconds.",
        points: [
          "Requests after reports",
          "Broker booking page",
          "Personal owner replies",
        ],
        links: [
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Check my Google Maps rank",
          },
        ],
      },
      {
        icon: "shield",
        title: "Suspended Listings and Verification Trouble",
        desc: "Bookings stall if your listing gets suspended or verification never finishes. We diagnose it, apply the fixes and run the appeal; 900+ profiles reinstated.",
        points: [
          "Cause diagnosed",
          "Fixes applied",
          "Appeal handled end to end",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Bring my listing back",
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
    title: "Our Home Inspector Lead Generation, Oregon Market by Market",
    lead: "Maps for buyers searching today, AI answers for researchers and a site that books add-ons in one go.",
    rows: [
      {
        title: "Claim a Top Map Spot for Home Inspector Portland Oregon",
        body: [
          "Buyers under contract in Beaverton or Gresham tap Google Maps and usually phone a name from the top three. Our work on your profile, neighborhood pages and reviews keeps your company in that set across the whole metro.",
        ],
        points: [
          "Neighborhood pages",
          "Sewer scope listed",
          "Reviews by area",
          "Map rank grid",
        ],
        cta: "See My Portland Ranking",
        ui: {
          kind: "maps",
          query: "home inspector portland oregon",
          city: "Portland",
          category: "Home inspector · Sewer scopes",
        },
      },
      {
        title: "Get Cited by AI for Home Inspection Bend Oregon Questions",
        body: [
          "People moving to Central Oregon often ask ChatGPT or Gemini who should inspect a house they found online. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO work" },
          " gives those tools clear pages, matching listings and detailed reviews to draw from, so they name you for Bend and Redmond.",
        ],
        points: [
          "Relocation answer pages",
          "Listings that match",
          "Schema on each page",
          "Reviews that name Bend",
        ],
        cta: "See If AI Recommends Me",
        ui: {
          kind: "ai",
          query: "home inspection bend oregon",
          intro: "For a home inspection in Bend,",
          bullets: [
            "Oregon certified inspector",
            "Radon and well testing",
            "Reports within a day",
          ],
        },
      },
      {
        title: "A Site That Wins Home Inspection Eugene Oregon Bookings",
        body: [
          "Eugene and Springfield buyers often book late at night after a showing. When your site lets them choose a date, add extras and read a sample report, they lock in an inspection without waiting for your morning callback.",
        ],
        points: [
          "Late-night booking",
          "Add-ons in one step",
          "Sample report link",
          "Click-to-call header",
        ],
        cta: "Map Out My New Site",
        ui: {
          kind: "website",
          url: "yourcompany.com/eugene",
          headline: "Certified home inspections in Eugene",
          services: [
            "Home inspection",
            "Sewer scope",
            "Radon test",
            "Oil tank sweep",
          ],
        },
      },
    ],
  },
  regions: {
    title: "Where We Market Oregon Inspection Companies",
    lead: "Housing and buyers differ from the Coast to the high desert, which is why each region runs its own pages, service areas and ads.",
    items: [
      {
        name: "Portland Metro",
        cities: "Portland · Gresham · Milwaukie · Lake Oswego",
        focus: "Sewer scope and oil tank pages for older neighborhoods",
      },
      {
        name: "Washington County",
        cities: "Beaverton · Hillsboro · Tigard · Tualatin",
        focus: "Suburb pages for buyers relocating for work",
      },
      {
        name: "Mid-Willamette Valley",
        cities: "Salem · Keizer · Albany · Corvallis",
        focus: "Town pages with fewer competitors to beat",
      },
      {
        name: "Lane County",
        cities: "Eugene · Springfield · Cottage Grove",
        focus: "Booking-first site pages and radon content",
      },
      {
        name: "Central Oregon",
        cities: "Bend · Redmond · Sisters · Prineville",
        focus: "Relocation and new-construction inspection pages",
      },
      {
        name: "Southern Oregon & Coast",
        cities: "Medford · Grants Pass · Ashland · Coos Bay",
        focus: "Well, septic and older-home add-on pages",
      },
    ],
    other: "Working an Oregon town not shown here? We'll cover it too.",
  },
  reviews: {
    title: "Google Reviews That Back Our 5.0 Rating",
    lead: "What service business owners say after working with us.",
  },
  pricing: {
    title: "Oregon Home Inspector Marketing Pricing",
    lead: [
      "You're never locked in, and ad spend is billed at a 0% markup. Looking for something beyond inspector marketing? Explore our ",
      { href: "/services", label: "full service lineup" },
      ".",
    ],
    compareTitle: "Oregon Plans Side by Side",
    compareLead: "Single city or every region, compared.",
    addOnsTitle: "Add-Ons for Peak Listing Months",
    addOnsLead: "More city pages or add-on ads when spring arrives.",
    customTitle: "Offices in Portland and Bend?",
    customText: "Tell us every location for a single quote.",
  },
  faq: {
    title: "Oregon Inspector Marketing FAQ",
    lead: "Certification, add-ons, Salem rankings and AI search. Rather talk it through? Give us a call.",
    items: [
      {
        q: "Should my home inspector license, Oregon CCB number and OCHI ID be on Google?",
        a: "Yes. Oregon requires home inspectors to be certified through the Construction Contractors Board and to work for a CCB-licensed business, and buyers can look both up. Listing both numbers on your profile, website and booking screen reassures them and gives AI tools solid facts to cite.",
      },
      {
        q: "Can I rank for home inspection Salem Oregon searches from Portland?",
        a: "Yes, if you really inspect there. A Google profile is strongest close to its own address, so Salem usually needs a dedicated city page, reviews from Salem clients and focused ads, or a second verified location. We plan it around the drives your inspectors already make.",
      },
      {
        q: "Do sewer scope and oil tank pages bring Portland bookings?",
        a: "Often, yes. Many older Portland homes have aging sewer lines, and some still hide buried heating oil tanks, so buyers look for both. Dedicated pages, matching services on your Google profile and add-on options at booking turn those searches into bundled inspections.",
      },
      {
        q: "Can you market Home Energy Score reports to Portland sellers?",
        a: "Yes, if you're a certified assessor. Portland requires sellers of most single-family homes to get a Home Energy Score before listing. We build a page for it, add the service to your profile and target seller searches, which can open a pre-listing stream alongside buyer inspections.",
      },
      {
        q: "How does AI SEO for home inspectors work in Portland and Bend?",
        a: "We make the sources AI tools read accurate and specific: your website, Google profile, directory entries and reviews. When a buyer asks ChatGPT or Gemini for an inspector who does sewer scopes in Portland, clear service pages and matching details make you a likely answer.",
      },
      {
        q: "How much do your Oregon marketing plans cost?",
        a: "The three tiers are $297, $750 and $1,500, billed monthly with no lock-in. You can pay ad platforms directly or through us at a 0% markup. Larger tiers cover more cities, add-on pages and campaigns.",
      },
      {
        q: "Can you fix a suspended Google listing for my Oregon company?",
        a: "Usually, yes. We work out what caused the suspension, make the corrections and submit the reinstatement request, then update you until it's restored. We've reinstated 900+ profiles. Listings that won't verify are covered as well, and your site and ads keep working.",
      },
    ],
  },
  audit: {
    title: "Get Your Free Oregon Home Inspector Marketing Audit",
    lead: [
      "Expect a city-by-city look at your Oregon map rankings, notes on your profile, website and reviews, and a list of add-on bookings you're missing.",
    ],
    points: [
      "Each Oregon city on your list checked",
      "Sewer scope and tank sweep searches tested",
      "Plans start at $297 monthly, no contract",
    ],
    form: {
      formType: "home-inspector-marketing-oregon",
      badge: "Free Oregon audit",
      title: "Get a Free Oregon Inspector Audit",
      subtitle: "Quick, free and no obligation.",
      submitText: "Send My Oregon Audit",
      messageLabel: "Your Oregon cities and add-ons",
      messagePlaceholder:
        "e.g. Portland east side, sewer scopes and tank sweeps",
    },
  },
  banner: {
    title: "Book More Oregon Inspections, Add-Ons Included",
    lead: "Find out, free, how you rank in every Oregon city you cover.",
    icons: ["inspect", "water"],
  },
};
