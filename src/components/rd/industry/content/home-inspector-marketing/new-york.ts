import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* NEW YORK HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush returned "API units balance is zero" on 24 Oct, so
   the live URL's ranking report could not be pulled. The live title's core
   term ("Home Inspector Marketing in New York") is kept, and every phrase
   in the live keywords meta sits in the title, H1, an H2/H3 or an FAQ
   question. Keywords and angles came from web research (24 Oct): NY
   Department of State licenses inspectors under Real Property Law Article
   12-B; the state health department lists Erie, Onondaga, Albany and other
   upstate counties as high radon risk; NYC buyers split into co-op/condo
   unit inspections and full brownstone inspections; Long Island listings
   push termite, radon and pre-listing add-ons. No volumes available. */

export const CONTENT: LocationContent = {
  draftSlug: "new-york-2",
  liveUrl: "/services/home-inspector-marketing/new-york",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "New York",
  meta: {
    title: "Home Inspector Marketing in New York | NYC & Long Island",
    description:
      "Home inspector marketing for New York: Map Pack rankings, home inspector SEO and Google Ads for Long Island, NYC, Westchester, Buffalo and the Capital Region.",
    keywords: [
      "home inspector marketing new york",
      "home inspector seo new york",
      "home inspector long island",
      "best home inspector long island",
      "home inspection new york city",
      "home inspector buffalo ny",
      "home inspection cost new york",
      "home inspector new york state",
      "home inspector lead generation new york",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.limeTeal,
  hero: {
    h1: "New York Home Inspector Marketing for Buyers Who Book Fast",
    h1NoWrap: "Book Fast",
    lead: [
      "New York buyers often line up an inspection within days of an accepted offer, and they hire whoever looks credible on Google first. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " puts your license, reviews and open dates in front of them in the boroughs, on Long Island and upstate.",
    ],
    cta: "Get My New York Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on the local map",
        sub: "Across the five boroughs, Long Island and upstate towns",
        chips: [
          "Brooklyn",
          "Long Island",
          "Westchester",
          "Buffalo",
          "+ your town",
        ],
      },
      left: {
        icon: "call",
        title: "More booked inspections",
        sub: "Calls and online bookings traced to each source",
      },
      right: {
        icon: "inspect",
        title: "More radon add-ons",
        sub: "Test pages for high-risk upstate counties",
      },
      bottom: {
        title: "Agents who send repeat work",
        sub: "Reviews and reports that make you easy to refer",
      },
    },
  },
  services: {
    title: "What We Run for New York Home Inspection Companies",
    lead: "How New York buyers pick inspectors shapes every channel we run.",
    cta: "Audit My New York Marketing",
    items: [
      {
        icon: "pin",
        title: "A Google Profile Set Up for NY Searches",
        desc: "Inspection categories, county service areas, your Department of State license and fresh photos, adjusted until you hold a Map Pack spot.",
        points: [
          "Categories and areas set",
          "State license displayed",
          "Weekly photo posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Optimize my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO, New York Town by Town",
        desc: "A page for every town and borough you cover, plus radon, termite, sewer scope and oil tank pages that match local searches.",
        points: [
          "Town and borough pages",
          "Add-on service pages",
          "Schema on every page",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local search for home pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Paid Search Aimed at Accepted Offers",
        desc: "Search campaigns that reach buyers right after an offer is accepted, and Local Services Ads billed per lead inside the counties you really drive to.",
        points: [
          "Accepted-offer keywords",
          "Pay-per-lead LSA setup",
          "Drive-time county limits",
        ],
        links: [{ href: "/services/google-ads", label: "Our Google Ads team" }],
      },
      {
        icon: "monitor",
        title: "A Booking Website for New York Inspectors",
        desc: "Your site loads quickly on phones, takes bookings around the clock and shows a sample report, so nobody has to play phone tag.",
        points: [
          "Online scheduling",
          "Sample report page",
          "Click-to-call header",
        ],
        links: [
          { href: "/services/web-design", label: "Website design" },
          {
            href: "/home-inspector-website-design-agency-us/offer",
            label: "Inspector website offer",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Make Agents Refer You",
        desc: "A review request follows every report, and a page built for agents plus shareable summaries makes you the simple name to pass along.",
        points: [
          "Requests sent post-report",
          "Page made for agents",
          "Owner-voice replies",
        ],
        links: [
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Check my Maps rank",
          },
        ],
      },
      {
        icon: "shield",
        title: "Help for Suspended or Stuck Google Profiles",
        desc: "When Google freezes your listing during the spring market, we trace the trigger, repair it and file the appeal, as we have for 900+ profiles.",
        points: [
          "Trigger traced first",
          "Verification video coaching",
          "Appeal written and sent",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get my profile verified",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How We Bring New York Inspectors More Bookings",
    lead: "The map for buyers searching now, AI answers for buyers asking questions and call tracking that shows what pays.",
    rows: [
      {
        title: "Be the Home Inspector Long Island Buyers See First on the Map",
        body: [
          "A Suffolk buyer with an accepted offer types the search into Google Maps and rings whichever company shows near the top. Your profile, town pages and steady reviews are what put you in that short list, from Nassau out to the East End.",
        ],
        points: [
          "Town-level service areas",
          "Termite and radon listed",
          "Reviews that name towns",
          "Grid rank reports",
        ],
        cta: "See My Long Island Ranking",
        ui: {
          kind: "maps",
          query: "home inspector long island",
          city: "Huntington",
          category: "Home inspector · Licensed in NY",
        },
      },
      {
        title: "When AI Picks a Home Inspector, Buffalo NY Hears Your Name",
        body: [
          "People relocating to Western New York often put the inspector question to an AI chatbot first. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO service" },
          " shapes the pages, reviews and listings those assistants read, which makes you a likely suggestion for Buffalo and Amherst.",
        ],
        points: [
          "Answer-first service pages",
          "Matching listings everywhere",
          "Schema markup added",
          "Reviews that mention radon",
        ],
        cta: "Check My AI Mentions",
        ui: {
          kind: "ai",
          query: "best home inspector buffalo ny",
          intro: "For a home inspection in Buffalo,",
          bullets: [
            "Radon testing on request",
            "Reports within a day",
            "Covers Amherst and Cheektowaga",
          ],
        },
      },
      {
        title:
          "Home Inspector Lead Generation: New York Calls Traced to Bookings",
        body: [
          "Ads and Maps only earn their keep when calls turn into booked inspections. Every call is logged and tagged by source, town and add-on, then move effort toward whatever fills your calendar in Queens, Westchester or Albany.",
        ],
        points: [
          "Calls recorded and tagged",
          "Online bookings tracked",
          "Add-ons counted separately",
          "Monthly booked-job report",
        ],
        cta: "Track My New York Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Long Island",
          calls: [
            {
              service: "Home inspection + termite",
              source: "Google Maps",
              when: "8:40 AM",
            },
            {
              service: "Sewer camera add-on",
              source: "Local Services Ads",
              when: "11:15 AM",
            },
            {
              service: "Seller pre-listing walkthrough",
              source: "Google Ads",
              when: "1:50 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "New York Regions and Towns We Market You In",
    lead: "Search habits shift between the city, the Island and upstate, so we fit each region's pages, service areas and ads to its housing.",
    items: [
      {
        name: "New York City",
        cities: "Queens · Brooklyn · the Bronx · Staten Island",
        focus: "Brownstone, co-op and condo pages by neighborhood",
      },
      {
        name: "Long Island",
        cities: "Hempstead · Huntington · Babylon · Brookhaven",
        focus: "Town pages across Nassau and Suffolk, termite add-ons",
      },
      {
        name: "Hudson Valley & Westchester",
        cities: "Yonkers · White Plains · Poughkeepsie · New Rochelle",
        focus: "Older-home pages for oil tank and sewer scope searches",
      },
      {
        name: "Capital Region",
        cities: "Albany · Schenectady · Troy · Saratoga Springs",
        focus: "Radon test pages for state-listed high-risk counties",
      },
      {
        name: "Central NY & Southern Tier",
        cities: "Syracuse · Binghamton · Ithaca · Utica",
        focus: "Radon and well water pages for rural buyers",
      },
      {
        name: "Western NY & Finger Lakes",
        cities: "Buffalo · Rochester · Amherst · Cheektowaga",
        focus: "Winter-ready ads and pages for relocating buyers",
      },
    ],
    other:
      "Covering a New York town that isn't listed? We'll build pages for it.",
  },
  reviews: {
    title: "Read Our 5.0 Google Reviews Before You Call",
    lead: "Real reviews from inspectors, contractors and other local service owners.",
  },
  pricing: {
    title: "New York Home Inspector Marketing Plans",
    lead: [
      "You can stop any month, and we charge a 0% markup on ad spend. To see what else we handle, browse our ",
      { href: "/services", label: "digital marketing services" },
      ".",
    ],
    compareTitle: "Compare New York Plans",
    compareLead: "A single county up to every region, upstate and down.",
    addOnsTitle: "Spring Rush Extras",
    addOnsLead: "Extra town pages or a burst of ads once listings jump.",
    customTitle: "Inspectors in several NY regions?",
    customText: "Send your offices and counties for one combined quote.",
  },
  faq: {
    title: "New York Home Inspector Marketing FAQ",
    lead: "Licensing, Long Island, the boroughs, pricing pages and AI search. Rather speak to someone? Call us.",
    items: [
      {
        q: "Should my home inspector New York State license number be on Google?",
        a: "Yes. The Department of State licenses New York inspectors under Article 12-B, and buyers and agents often look the number up. Placing it on your profile, in the site footer and beside the booking button signals legitimacy, and AI assistants can repeat it as a checked fact.",
      },
      {
        q: "How do I become the best home inspector Long Island agents recommend?",
        a: "Make referring you effortless. Agents want fast scheduling, clear reports and happy clients, so we set up online booking, a sample report page and steady Google reviews that name Nassau and Suffolk towns. When an agent's buyer looks you up, everything they see backs the referral.",
      },
      {
        q: "What does it take to rank for home inspection New York City searches in all five boroughs?",
        a: "Build a page per borough, then add neighborhood pages where you inspect most. City buyers search for co-op, condo and brownstone inspections differently, so each page explains what you check in that property type. Your Google profile then lists the boroughs as service areas.",
      },
      {
        q: "Is it smart to post home inspection cost New York buyers can compare?",
        a: "Usually, yes. Buyers choosing an inspector in a hurry lean toward firms that show a starting fee or an instant quote, because it skips a phone call. We add clear pricing or a quote tool to your site and Google profile, and we never publish figures you haven't approved.",
      },
      {
        q: "Is AI SEO for home inspectors worth it in New York?",
        a: "For most firms, yes, because a growing share of buyers asks ChatGPT, Gemini or Google's AI Overviews to recommend an inspector. Those tools draw on your website, reviews and listings. We make those sources clear and consistent, so you're more likely to be named for Brooklyn, Westchester or Rochester.",
      },
      {
        q: "Can you market radon testing for upstate New York buyers?",
        a: "Yes. The state health department lists dozens of counties, including Erie, Onondaga and Albany, as high risk for indoor radon. We build radon pages for those areas, add the test to your Google profile and bundle it into booking, so buyers can add it in one step.",
      },
      {
        q: "What happens if Google suspends my New York inspection company's profile?",
        a: "Our team pinpoints what set it off, repairs the issue and submits the reinstatement request, with updates until the listing is back. We've reinstated 900+ profiles. While it's down, your website and ads keep bookings coming in, and stuck verifications get the same hands-on help.",
      },
    ],
  },
  audit: {
    title: "Order a Free NY Home Inspector Marketing Audit",
    lead: [
      "This review measures your map rank across each county you serve, grades your profile, website and reviews, and pinpoints the bookings you're losing.",
    ],
    points: [
      "Every county and borough checked",
      "Radon and add-on searches reviewed",
      "Monthly plans starting at $297, no lock-in",
    ],
    form: {
      formType: "home-inspector-marketing-new-york",
      badge: "Free New York audit",
      title: "Get Your Free NY Inspector Audit",
      subtitle: "No cost and no commitment.",
      submitText: "Send My New York Audit",
      messageLabel: "Your New York service area",
      messagePlaceholder:
        "e.g. Nassau and western Suffolk, radon and termite add-ons",
    },
  },
  banner: {
    title: "Fill Your New York Inspection Calendar Before Spring Listings Hit",
    lead: "Start with a free check of your ranking in each county you cover.",
    icons: ["inspect", "building"],
  },
};
