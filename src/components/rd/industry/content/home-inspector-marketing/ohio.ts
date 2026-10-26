import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* OHIO HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush returned "API units balance is zero" on 24 Oct, so
   the live URL's ranking report could not be pulled. The live title's core
   term ("Home Inspector Marketing in Ohio") is kept, and every phrase in
   the live keywords meta sits in the title, H1, an H2/H3 or an FAQ
   question. Keywords and angles came from web research (24 Oct): Ohio
   licenses inspectors through the Division of Real Estate & Professional
   Licensing (ORC 4764); radon testers need a separate Ohio Department of
   Health license; Columbus pages cite Franklin County radon, clay soil
   and basement water, old clay/cast-iron sewer lines and an ODA
   wood-destroying insect license; top local results sell radon, sewer
   scope, termite and mold add-ons with online booking. No volumes. */

export const CONTENT: LocationContent = {
  draftSlug: "ohio-2",
  liveUrl: "/services/home-inspector-marketing/ohio",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Ohio",
  meta: {
    title: "Home Inspector Marketing in Ohio | SEO, Google Maps & Leads",
    description:
      "Ohio home inspector marketing for Columbus, Cleveland, Cincinnati and Dayton: Map Pack rankings, home inspector SEO, radon and sewer scope pages, Google Ads.",
    keywords: [
      "home inspector marketing ohio",
      "home inspector seo ohio",
      "home inspector columbus ohio",
      "home inspector cleveland ohio",
      "home inspection dayton ohio",
      "home inspection cincinnati",
      "home inspection ohio cost",
      "home inspector ohio license",
      "home inspector lead generation ohio",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.skyAmber,
  hero: {
    h1: "Ohio Home Inspector Marketing for More Inspections and Add-Ons",
    h1NoWrap: "Add-Ons",
    lead: [
      "Ohio buyers book an inspector, then often add radon, sewer scope or termite checks on the same call. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " wins both in Columbus, Cleveland, Cincinnati, Dayton and Toledo, with Map Pack rankings, local pages, ads and reviews.",
    ],
    cta: "Get My Ohio Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 in every Ohio metro",
        sub: "From the Lake Erie shore down to the Ohio River",
        chips: [
          "Columbus",
          "Cleveland",
          "Cincinnati",
          "Dayton",
          "+ your suburb",
        ],
      },
      left: {
        icon: "inspect",
        title: "More radon bookings",
        sub: "Test pages for basements across the state",
      },
      right: {
        icon: "plumbing",
        title: "Sewer scope add-ons",
        sub: "Camera inspection pages for older neighborhoods",
      },
      bottom: {
        title: "A calendar full past spring",
        sub: "Fall and winter campaigns keep inspections steady",
      },
    },
  },
  services: {
    title: "What We Do for Ohio Home Inspection Companies",
    lead: "Ohio buyers find your inspection firm on every channel one team runs.",
    cta: "Audit My Ohio Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles Tuned for Ohio Suburbs",
        desc: "We pick the right inspection categories, map the suburbs you cover, show your state license and keep photos current so the map favors you.",
        points: [
          "Suburb service areas",
          "License number added",
          "Photo posts weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Fix up my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO Ohio Buyers Find in Every Metro",
        desc: "City pages for each metro and suburb, plus radon, sewer scope, termite and mold pages that answer what Ohio buyers type into Google.",
        points: [
          "Metro and suburb pages",
          "Radon and sewer pages",
          "Structured data added",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for home service firms",
          },
        ],
      },
      {
        icon: "target",
        title: "Ohio Search Ads and LSA for Buyers",
        desc: "Search ads that reach buyers in the week after an accepted offer, plus Local Services Ads billed per lead in the counties you reach.",
        points: [
          "Contract-stage keywords",
          "Per-lead LSA billing",
          "County-level reach",
        ],
        links: [
          { href: "/services/google-ads", label: "Manage my Google Ads" },
        ],
      },
      {
        icon: "monitor",
        title: "An Ohio Website That Turns Visits Into Bookings",
        desc: "Quick-loading mobile pages let buyers pick a slot, bolt on radon or a sewer scope and read a sample report without calling twice.",
        points: [
          "Add-ons at booking",
          "Sample report page",
          "One-tap call button",
        ],
        links: [
          { href: "/services/web-design", label: "Website design" },
          {
            href: "/home-inspector-website-design-agency-us/offer",
            label: "Home inspector websites",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews Ohio Agents Notice",
        desc: "A review request goes out with each report, and an agent hub holds your booking links, so referral partners keep sending buyers.",
        points: [
          "Requests with every report",
          "Agent booking hub",
          "Thoughtful owner replies",
        ],
        links: [
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Free Maps rank checker",
          },
        ],
      },
      {
        icon: "shield",
        title: "Fixes for Suspended or Unverified Listings",
        desc: "A suspended profile can empty your calendar fast. We identify what set it off, document the fix and see the appeal through; 900+ profiles reinstated.",
        points: ["Trigger located", "Fix on record", "Appeal seen through"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my Google profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Unstick my verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Home Inspector Lead Generation Ohio Inspectors Can Measure",
    lead: "Map placement for urgent searches, AI answers for careful researchers and a website that takes the booking itself.",
    rows: [
      {
        title: "Be the Home Inspector Columbus Ohio Buyers Call From the Map",
        body: [
          "Buyers in Dublin, Westerville or Grove City open Google Maps right after their offer is accepted and phone one of the top three. Building out your profile, suburb pages and a regular flow of reviews is how your company earns and keeps a place in that group.",
        ],
        points: [
          "Suburb pages for Columbus",
          "Radon testing listed",
          "Reviews naming suburbs",
          "Rank tracking by grid",
        ],
        cta: "See My Columbus Ranking",
        ui: {
          kind: "maps",
          query: "home inspector columbus ohio",
          city: "Columbus",
          category: "Home inspector · Radon testing",
        },
      },
      {
        title:
          "Show Up in AI Answers for Home Inspector Cleveland Ohio Searches",
        body: [
          "People buying older Cleveland homes now ask AI assistants which inspector checks sewer lines and basements well. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI SEO for local businesses",
          },
          " gives your site, reviews and listings enough detail for ChatGPT and Gemini to name you for Lakewood, Parma and the Heights.",
        ],
        points: [
          "Sewer scope answer pages",
          "One set of details on every listing",
          "Schema markup added",
          "Reviews mention add-ons",
        ],
        cta: "See If AI Names Me",
        ui: {
          kind: "ai",
          query: "home inspector cleveland ohio with sewer scope",
          intro: "For an inspection with a sewer scope in Cleveland,",
          bullets: [
            "Ohio-licensed inspector",
            "Camera sewer scope",
            "Radon test available",
          ],
        },
      },
      {
        title:
          "A Booking Website Ready for Home Inspection Dayton Ohio Searches",
        body: [
          "Buyers searching from their phones in Dayton, Kettering or Beavercreek want an open date and quick answers, not a voicemail. We build a fast site with online booking, add-on boxes to tick and a sample report, turning visits into scheduled inspections.",
        ],
        points: [
          "Online booking any hour",
          "Add-on checkboxes",
          "Sample report preview",
          "Call button on every page",
        ],
        cta: "Start My Booking Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/dayton",
          headline: "Ohio-licensed home inspections in Dayton",
          services: [
            "Home inspection",
            "Radon test",
            "Sewer scope",
            "Termite report",
          ],
        },
      },
    ],
  },
  regions: {
    title: "Ohio Metros We Cover, From Toledo to Cincinnati",
    lead: "Ohio has six big metros and dozens of growing suburbs, so each one is treated as its own market with separate pages and ads.",
    items: [
      {
        name: "Central Ohio",
        cities: "Columbus · Dublin · Westerville · Delaware",
        focus: "Suburb pages and radon content for fast growth",
      },
      {
        name: "Northeast Ohio",
        cities: "Cleveland · Lakewood · Parma · Mentor",
        focus: "Sewer scope and basement pages for older homes",
      },
      {
        name: "Southwest Ohio",
        cities: "Cincinnati · Mason · West Chester · Hamilton",
        focus: "Pages that reach buyers across the whole metro",
      },
      {
        name: "Miami Valley",
        cities: "Dayton · Kettering · Beavercreek · Springfield",
        focus: "Relocation pages for buyers moving near the base",
      },
      {
        name: "Northwest Ohio",
        cities: "Toledo · Perrysburg · Findlay · Bowling Green",
        focus: "Town pages in smaller, less crowded markets",
      },
      {
        name: "Akron, Canton & Youngstown",
        cities: "Akron · Canton · Youngstown · Boardman",
        focus: "Map Pack work in mid-size cities with older housing",
      },
    ],
    other: "Inspecting in an Ohio town we didn't list? We'll add it.",
  },
  reviews: {
    title: "Google Reviews From the Owners We Market",
    lead: "Unedited Google reviews from service business owners we help grow.",
  },
  pricing: {
    title: "Plans for Ohio Home Inspection Companies",
    lead: [
      "No plan locks you in, and ad spend goes through untouched at a 0% markup. Want to see the rest of what we do? Browse our ",
      { href: "/services", label: "marketing services" },
      ".",
    ],
    compareTitle: "Ohio Plans Compared",
    compareLead: "Single metro or statewide, laid out together.",
    addOnsTitle: "Extra Help for Busy Seasons",
    addOnsLead: "Add city pages or ads when listings pick up.",
    customTitle: "Inspectors in more than one Ohio metro?",
    customText: "Share your locations for one quote that covers them all.",
  },
  faq: {
    title: "Questions Ohio Inspection Companies Ask",
    lead: "Licensing, costs, radon, AI search and multi-metro rankings. Call us anytime.",
    items: [
      {
        q: "Where should my home inspector Ohio license number appear?",
        a: "Put it on your Google profile, the site footer, the booking page and each report. Ohio's Division of Real Estate & Professional Licensing issues inspector licenses, and buyers or agents may search for yours. A visible number shows you're legitimate and gives AI assistants a checkable detail.",
      },
      {
        q: "Should I post my home inspection Ohio cost on my website?",
        a: "Most of the time, yes. When buyers compare several Ohio inspectors, the ones that list a base fee or offer a fast quote form get the first call. We put your pricing or a quote tool on the site and Google profile, always using the figures you set.",
      },
      {
        q: "Can my company rank for home inspection Cincinnati and Dayton at once?",
        a: "Yes, if you genuinely serve both. Google tends to rank a profile near its own address, so a second metro usually needs a verified location there or strong city pages, local reviews and targeted ads. We plan the mix around where your inspectors already work.",
      },
      {
        q: "Can you market radon testing if I hold an Ohio radon tester license?",
        a: "Yes. Ohio requires anyone who tests for radon to be licensed by the Ohio Department of Health, and buyers often want the test with their inspection. We write radon pages, include the test in your Google profile services and booking flow, and display your ODH license where buyers notice it.",
      },
      {
        q: "What does AI SEO for home inspectors add to Ohio Map Pack work?",
        a: "It reaches buyers who put the question to Google's AI Overviews, ChatGPT or Gemini instead of scrolling the map. Those assistants pull from your site, reviews and directory listings, so we make them consistent and detailed for each Ohio city. The same work usually strengthens regular rankings too.",
      },
      {
        q: "Do sewer scope pages bring in more Ohio bookings?",
        a: "They often do in older neighborhoods. Buyers looking at homes in places like Lakewood, Clifton or German Village search for sewer camera checks, and a dedicated page plus a booking add-on captures that demand. We write that page and add sewer scopes to your Google profile's services.",
      },
      {
        q: "Can you restore a suspended Google profile for my Ohio company?",
        a: "Yes. We pin down why it happened, make the corrections and lodge the reinstatement request, keeping you posted until it's live. We've reinstated 900+ profiles. Unverified listings get the same treatment, and your website and ads keep working in the meantime.",
      },
    ],
  },
  audit: {
    title: "Claim a Free Ohio Home Inspector Marketing Audit",
    lead: [
      "The audit maps your position in each Ohio metro you cover, grades your Google profile, website and reviews, and lists the searches where buyers pick a competitor.",
    ],
    points: [
      "Each Ohio metro and suburb checked",
      "Radon and sewer scope demand measured",
      "Pick a $297, $750 or $1,500 plan, month to month",
    ],
    form: {
      formType: "home-inspector-marketing-ohio",
      badge: "Free Ohio audit",
      title: "Get a Free Ohio Inspector Audit",
      subtitle: "Free to request, nothing to sign.",
      submitText: "Send My Ohio Audit",
      messageLabel: "Your Ohio metros and add-ons",
      messagePlaceholder: "e.g. Columbus suburbs, radon and sewer scope",
    },
  },
  banner: {
    title: "Make Your Company the Inspector Ohio Buyers Call First",
    lead: "Get a free look at your rankings in every Ohio metro you work.",
    icons: ["inspect", "plumbing"],
  },
};
