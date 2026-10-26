import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* MARYLAND HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so the live page's ranking
   report and keyword volumes could not be pulled. Rank safety: the live
   title's core term "Home Inspector Marketing in Maryland" stays in the
   title, and every phrase in the live keywords meta sits in the title,
   H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): Maryland licenses inspectors through the State
   Commission of Real Estate Appraisers, Appraisal Management Companies
   and Home Inspectors (72-hour course + National Home Inspector Exam);
   Montgomery County requires a radon test before most single-family
   home sales (Bill 31-15, since Oct 2016); rural counties rely on wells
   and septic systems; top Baltimore pages cover radon, WDI/termite,
   sewer scope, well and septic testing, and condo/townhouse inspections. */

export const CONTENT: LocationContent = {
  draftSlug: "maryland-2",
  liveUrl: "/services/home-inspector-marketing/maryland",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Maryland",
  meta: {
    title: "Home Inspector Marketing in Maryland | Baltimore to Bethesda",
    description:
      "Maryland home inspector marketing for Baltimore, Columbia, Rockville and Annapolis: Map Pack rankings, radon and well-water pages, Google Ads and agent reviews.",
    keywords: [
      "home inspector marketing maryland",
      "home inspector seo maryland",
      "home inspector baltimore md",
      "home inspector baltimore county",
      "home inspection montgomery county md",
      "home inspector annapolis",
      "home inspection maryland cost",
      "home inspector md reviews",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation maryland",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.redIndigo,
  hero: {
    h1: "Maryland Home Inspector Marketing Agency That Books Inspections",
    h1NoWrap: "Books Inspections",
    lead: [
      "Maryland buyers move fast, from Baltimore rowhouses to Montgomery County colonials, and they book the inspector Google or their agent puts in front of them. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing team",
      },
      " makes that you, with Map Pack rankings, radon pages and reviews agents trust.",
    ],
    cta: "Get My Maryland Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "A top-three map spot, county by county",
        sub: "Baltimore, Howard, Montgomery and Anne Arundel tracked",
        chips: [
          "Baltimore",
          "Columbia",
          "Rockville",
          "Annapolis",
          "+ your county",
        ],
      },
      left: {
        icon: "inspect",
        title: "Radon jobs in Montgomery County",
        sub: "Pages built around the county's pre-sale test rule",
      },
      right: {
        icon: "drop",
        title: "Well and septic add-ons",
        sub: "Pages for rural buyers outside the Beltway",
      },
      bottom: {
        title: "Referral agents who keep coming back",
        sub: "Clean reports and reviews they're proud to share",
      },
    },
  },
  services: {
    title: "Home Inspector SEO, Maryland Maps and Ads, Managed Together",
    lead: "Maryland inspection leads arrive many ways; one team runs them all.",
    cta: "Audit My Maryland Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profile Work for Maryland Inspection Companies",
        desc: "We set inspection categories, list radon, WDI and well-water services, map your counties and post job photos so you rise in Baltimore-area maps.",
        points: [
          "Add-ons on your profile",
          "Counties mapped",
          "Weekly job photos",
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
        title: "County Pages and Add-On SEO for Home Inspectors",
        desc: "Pages for Towson, Columbia and Rockville, plus radon, termite, well, septic and condo inspection pages that match what Maryland buyers type.",
        points: [
          "County and town pages",
          "Radon and termite pages",
          "Well and septic content",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home businesses",
          },
        ],
      },
      {
        icon: "target",
        title: "Maryland Search Ads Plus Local Services Ads",
        desc: "Search and Local Services campaigns fenced to the counties you work, with licensing-course and DIY searches excluded from the start.",
        points: [
          "County-level ad targeting",
          "Course searches excluded",
          "Calls traced to campaigns",
        ],
        links: [
          { href: "/services/google-ads", label: "Paid search management" },
        ],
      },
      {
        icon: "monitor",
        title: "Booking Websites for Maryland Home Inspectors",
        desc: "A fast mobile site with live scheduling, sample reports, add-on selection and an automatic agent copy, so jobs book while you're on site.",
        points: [
          "Live scheduling",
          "Sample reports online",
          "Agent copy automatic",
        ],
        links: [
          { href: "/services/web-design", label: "Website design and builds" },
        ],
      },
      {
        icon: "star",
        title: "Home Inspector MD Reviews That Agents Read First",
        desc: "Every report triggers a review request, replies come pre-written, and agents get a page with your turnaround, coverage and add-ons.",
        points: [
          "Requests with each report",
          "Replies drafted",
          "Agent page live",
        ],
        links: [{ href: "/services", label: "Our full service list" }],
      },
      {
        icon: "shield",
        title: "Recovering Suspended Maryland Google Profiles",
        desc: "Stuck in verification or suspended outright? We identify what tripped Google, correct it and manage the appeal to the end; 900+ profiles reinstated.",
        points: ["Cause corrected", "Verification unstuck", "Appeal filed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Profile reinstatement help",
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
    title: "How Maryland Inspectors Win More Buyers With Us",
    lead: "Three places shape Maryland bookings: the map, AI answers and the phone. Here's what we change in each.",
    rows: [
      {
        title:
          "Rank Near the Top When Buyers Type “Home Inspector Baltimore MD”",
        body: [
          "Baltimore buyers often choose an inspector from the first pins they see in Google Maps. Your profile gets finished in full, pages go up for Canton, Hampden and Roland Park, and reviews keep coming from city jobs, so you stay visible from rowhouse blocks to the county line.",
        ],
        points: [
          "Rowhouse and condo pages",
          "Radon listed on profile",
          "Grid rank tracking",
          "License shown everywhere",
        ],
        cta: "See My Baltimore Ranking",
        ui: {
          kind: "maps",
          query: "home inspector baltimore md",
          city: "Baltimore",
          category: "Home inspector · Sewer scopes",
        },
      },
      {
        title:
          "AI SEO for Home Inspectors Recommended for “Home Inspector Annapolis”",
        body: [
          "Buyers relocating to Anne Arundel County increasingly check Google's AI Overview or ask Gemini which inspector to book. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO program" },
          " makes your site, reviews and directory listings say the same specific things, giving those answers solid grounds to mention your company.",
        ],
        points: [
          "Clear answers per service",
          "Listings that agree",
          "Schema across the site",
          "Reviews naming Annapolis",
        ],
        cta: "Check My AI Presence",
        ui: {
          kind: "ai",
          query: "home inspector annapolis",
          intro: "For a home inspector in Annapolis,",
          bullets: [
            "Maryland-licensed inspector",
            "Radon and WDI on one visit",
            "Waterfront and condo experience",
          ],
        },
      },
      {
        title: "Trace Every Maryland Call Back to the Ad That Sent It",
        body: [
          "Paid search only makes sense when you can see which calls became inspections. We record and label calls by campaign, service and county, cut the terms that never book and move budget toward the ones that fill your Maryland calendar.",
        ],
        points: [
          "Calls recorded by campaign",
          "Dead-end terms removed",
          "Lead disputes handled",
          "Monthly booked-job report",
        ],
        cta: "Track My Maryland Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Baltimore County",
          calls: [
            {
              service: "Townhouse inspection",
              source: "Local Services Ads",
              when: "7:50 AM",
            },
            {
              service: "Radon test · Rockville",
              source: "Google Ads",
              when: "10:15 AM",
            },
            {
              service: "Well and septic check",
              source: "Google Maps",
              when: "1:30 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Maryland Counties and Cities We Cover",
    lead: "Baltimore, the DC suburbs, the Bay and the rural west and east search in different ways, so we build each region separately.",
    items: [
      {
        name: "Baltimore City",
        cities: "Baltimore · Canton · Hampden · Roland Park",
        focus: "Rowhouse, condo and sewer scope pages",
      },
      {
        name: "Baltimore & Harford Counties",
        cities: "Towson · Catonsville · Owings Mills · Bel Air",
        focus: "Suburban Map Pack work for busy agent offices",
      },
      {
        name: "Howard & Anne Arundel",
        cities: "Columbia · Ellicott City · Annapolis · Glen Burnie",
        focus: "Commuter-town pages and waterfront listings",
      },
      {
        name: "Montgomery County",
        cities: "Rockville · Bethesda · Gaithersburg · Silver Spring",
        focus: "Radon pages built around the county's sale rule",
      },
      {
        name: "Prince George's & Southern Maryland",
        cities: "Bowie · Upper Marlboro · Waldorf · La Plata",
        focus: "New-construction and well-water inspection pages",
      },
      {
        name: "Western Maryland & the Eastern Shore",
        cities: "Frederick · Hagerstown · Salisbury · Easton",
        focus: "Septic, well and long-drive service areas",
      },
    ],
    other: "Inspecting in a Maryland county not listed? We'll cover it.",
  },
  reviews: {
    title: "What a 5.0 Google Rating Looks Like From Our Clients",
    lead: "Real reviews from local service companies we help grow.",
  },
  pricing: {
    title: "Home Inspector Lead Generation Maryland Plans, Month to Month",
    lead: [
      "Your ad spend carries no margin from us, a 0% markup, on every tier. Still waiting on Google verification? Our ",
      {
        href: "/services/gmb-verification-help",
        label: "verification support",
      },
      " pairs with any plan, and the ",
      { href: "/services", label: "services page" },
      " lists everything else.",
    ],
    compareTitle: "Maryland Plans in One View",
    compareLead: "Single county or statewide, compared.",
    addOnsTitle: "Extras for the Spring Market Rush",
    addOnsLead:
      "Extra county pages or added ad spend for when new listings surge.",
    customTitle: "Teams in Baltimore and the DC suburbs?",
    customText: "List every office for a single quote.",
  },
  faq: {
    title: "Answers for Maryland Home Inspectors",
    lead: "Licensing, radon, counties, costs and add-ons. Rather speak to someone? Call us.",
    items: [
      {
        q: "Who licenses home inspectors in Maryland, and should I show my number?",
        a: "Maryland's licenses come from a state commission under the Department of Labor that also oversees appraisers, so agents expect a valid number. We show yours across your Google profile, site and agent page, along with your training and insurance details.",
      },
      {
        q: "How do I win “home inspection Montgomery County MD” radon bookings?",
        a: "Make radon easy to add. In Montgomery County, most single-family homes must be radon tested before they sell, so buyers and sellers go looking for testers. A radon page explaining the rule, radon listed on your profile and a booking add-on put you in front of that demand.",
      },
      {
        q: "Do I need separate pages for “home inspector Baltimore County” and the city?",
        a: "Yes. Buyers search the city and the county as separate places, and agents work them differently. We build a Baltimore City page focused on rowhouses and condos and county pages for Towson, Catonsville and Owings Mills, each with its own reviews and photos.",
      },
      {
        q: "“Home inspection Maryland cost” is a common search. How should my site answer it?",
        a: "Explain the factors instead of posting a fee schedule: home size, age, condo or detached, and add-ons like radon, WDI or well testing. Finish with a short quote form. Buyers comparing inspectors get a real answer, and you capture the lead.",
      },
      {
        q: "Which add-on inspections should Maryland inspectors promote?",
        a: "That depends on the area. Radon is a big one in Montgomery County, well and septic testing in rural counties, and termite inspections for buyers whose lenders ask for one. We build pages for the add-ons you're qualified to offer and list each on your Google profile.",
      },
      {
        q: "How quickly can Maryland inspectors expect results?",
        a: "Profile fixes, review requests and ads can lift calls within a few weeks. County pages and Map Pack gains usually take three to six months, longer in Montgomery and Howard, where more inspectors compete. Monthly reports track rankings, calls and booked jobs.",
      },
      {
        q: "What do Maryland plans cost?",
        a: "Maryland inspectors pick from $297, $750 and $1,500 tiers, billed monthly with no long contract. Ad budgets go to Google with a 0% markup. Inspectors covering several counties usually need a larger plan for the extra pages.",
      },
    ],
  },
  audit: {
    title: "Your Free Maryland Home Inspector Marketing Audit",
    lead: [
      "We map your ranking county by county across Maryland, then go through the profile, site, reviews and ads to show which searches hand buyers to competitors. Covering nearby states? We also grow inspectors in ",
      {
        href: "/services/home-inspector-marketing/virginia",
        label: "Virginia",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/pennsylvania",
        label: "Pennsylvania",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/new-jersey",
        label: "New Jersey",
      },
      ".",
    ],
    points: [
      "Each county and city ranked",
      "Radon and well searches tested",
      "Three plans, from $297 per month",
    ],
    form: {
      formType: "home-inspector-marketing-maryland",
      badge: "Free Maryland audit",
      title: "Send for Your Free Maryland Audit",
      subtitle: "No fee, no contract and no hard sell.",
      submitText: "Send My Maryland Audit",
      messageLabel: "Maryland counties and add-ons you cover",
      messagePlaceholder: "e.g. Towson and Columbia, radon and well water",
    },
  },
  banner: {
    title: "Become the Inspector Maryland Agents Name First",
    lead: "A free audit shows your Maps rank in every county you serve.",
    icons: ["inspectList", "home"],
  },
};
