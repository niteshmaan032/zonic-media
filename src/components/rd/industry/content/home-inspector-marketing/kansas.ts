import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* KANSAS HOME INSPECTOR MARKETING — new live state page (5 Nov 2026).
   Brief: docs/fence-and-inspector-brief-2026-11.md. Semrush units are out;
   volumes come from reports/research/home-inspector-states-2026-11.md
   ("kansas home inspector license" 140, "home inspector wichita ks" 20,
   "home inspection overland park" 10).
   Web research (5 Nov 2026):
   - Licensing: the Kansas Home Inspectors Professional Competence and
     Financial Responsibility Act expired on 1 July 2013; Kansas does not
     license or register home inspectors (2020 testimony on
     kslegislature.gov). Later registration bills (SB 176, HB 2526) died
     in committee in 2022; 2023–2026 sessions not confirmed, so the FAQ
     adds "check current state rules".
   - Radon: the Kansas Radon Certification Law requires anyone testing
     for radon to be certified by KDHE (kdhe.ks.gov); K.S.A. 58-3078a
     requires every residential sale contract to carry a radon notice
     saying testing should be done by a radon measurement technician
     (ksrevisor.gov).
   - Wichita and Overland Park inspector listings bundle radon, sewer
     scope and termite with the inspection.
   - No Kansas rule on agents recommending inspectors was found; the agent
     lane markets on service only (never referral payments). */

export const CONTENT: LocationContent = {
  draftSlug: "kansas",
  liveUrl: "/services/home-inspector-marketing/kansas",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Kansas",
  meta: {
    title: "Home Inspector Marketing in Kansas | Wichita & Overland Park",
    description:
      "Kansas home inspector marketing for Wichita, Johnson County, Topeka and Lawrence: Map Pack rankings, inspector SEO, radon and sewer scope pages, AI answers.",
    keywords: [
      "home inspector marketing kansas",
      "home inspector wichita ks",
      "home inspection overland park",
      "home inspection olathe ks",
      "kansas home inspector license",
      "home inspector seo kansas",
      "radon testing kansas home inspection",
      "home inspector lead generation kansas",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.tealViolet,
  hero: {
    h1: "Kansas Home Inspector Marketing Agency for Wichita and KC Suburbs",
    h1NoWrap: "KC Suburbs",
    lead: [
      "Kansas stopped licensing home inspectors in 2013, and every home sale contract there carries a radon notice. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing in Kansas",
      },
      " turns your certifications, KDHE radon credentials and reviews into Map Pack rankings, AI mentions and agent bookings.",
    ],
    cta: "Get My Kansas Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack from Olathe to Wichita",
        sub: "Johnson County suburbs and south-central Kansas",
        chips: ["Overland Park", "Olathe", "Wichita", "Topeka", "+ your town"],
      },
      left: {
        icon: "inspect",
        title: "Radon tests on every booking",
        sub: "Buyers read the radon notice, then book you",
      },
      right: {
        icon: "award",
        title: "Credentials front and center",
        sub: "Certifications shown where buyers compare",
      },
      bottom: {
        title: "Busy past the summer peak",
        sub: "Fall and winter campaigns for Kansas inspectors",
      },
    },
  },
  services: {
    title: "Kansas Home Inspection Marketing, Run by One Team",
    lead: "From Johnson County to the Flint Hills and Wichita, we run your listing, pages, ads, website and review flow.",
    cta: "Audit My Kansas Marketing",
    items: [
      {
        icon: "pin",
        title: "Kansas Google Profiles That Show Real Credentials",
        desc: "With no state license, your profile shows certifications, insurance, KDHE radon credentials and service towns, so buyers and Maps see a qualified pro.",
        points: [
          "Certifications listed",
          "KDHE radon shown",
          "Service towns mapped",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Improve my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Inspector SEO for Johnson County and Wichita Suburbs",
        desc: "Pages for Overland Park, Olathe, Lenexa, Andover and Derby, plus radon, sewer scope and foundation pages that answer Kansas buyers' questions.",
        points: [
          "Suburb-by-suburb pages",
          "Radon and sewer pages",
          "Rich-result schema",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Search services for home pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Search Ads for Kansas Buyers Ready to Book",
        desc: "Google Ads and Local Services Ads tuned for KC-side and Wichita contract searches, with budgets moving toward what actually books.",
        points: [
          "KC and Wichita split",
          "Local Services Ads",
          "Booked-job tracking",
        ],
        links: [
          { href: "/services/google-ads", label: "Get help with Google Ads" },
        ],
      },
      {
        icon: "monitor",
        title: "Kansas Inspection Websites With Radon Built In",
        desc: "Clients book the inspection, add a radon test or sewer scope, choose a time and preview an example report, all from a phone.",
        points: [
          "Radon at booking",
          "Sewer scope option",
          "Mobile-first scheduling",
        ],
        links: [
          { href: "/services/web-design", label: "Start my website" },
          {
            href: "/home-inspector-website-design-agency-us/offer",
            label: "Websites for home inspectors",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Agent Updates for Kansas Realtors",
        desc: "Requests follow every report, and a monthly email or LinkedIn note keeps agents current on openings, add-ons and turnaround.",
        points: [
          "Requests after every report",
          "Monthly agent email",
          "Replies on every review",
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
        title: "Kansas Listing Suspended or Unverified? Fixed",
        desc: "We pin down why Google acted, correct the listing and pursue the appeal for you, with 900+ profiles reinstated to date.",
        points: ["Cause found", "Corrections made", "Appeal pursued"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my Google profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Sort out my verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Kansas Home Inspector Lead Generation, Channel by Channel",
    lead: "Maps for nearby buyers, AI answers for researchers and reviews that agents and buyers read before calling.",
    rows: [
      {
        title: "Lead the Map for “Home Inspector Wichita KS”",
        body: [
          "Wichita buyers in Andover, Derby and Maize call whoever tops Google Maps that week. We give your profile Sedgwick and Butler County service areas, write a page for each suburb and keep reviews coming that mention them, so your spot holds.",
        ],
        points: [
          "Wichita suburb pages",
          "Sedgwick County coverage",
          "Radon listed on profile",
          "Rank grid each month",
        ],
        cta: "See My Wichita Ranking",
        ui: {
          kind: "maps",
          query: "home inspector wichita ks",
          city: "Wichita",
          category: "Home inspector · KDHE radon",
        },
      },
      {
        title: "Show Up When Overland Park Buyers Ask AI for an Inspector",
        body: [
          "Johnson County buyers often ask ChatGPT or Gemini which Overland Park inspector also tests for radon. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO work" },
          " aligns your credentials, services and reviews across the web and adds answer-first radon FAQs, so AI Overviews and Perplexity can name you.",
        ],
        points: [
          "Radon FAQ blocks",
          "Credentials in schema",
          "Listings kept identical",
          "Reviews naming suburbs",
        ],
        cta: "See If AI Mentions Me",
        ui: {
          kind: "ai",
          query: "home inspection overland park with radon test",
          intro: "For a home inspection with a radon test in Overland Park,",
          bullets: [
            "KDHE-certified radon testing",
            "Covers Olathe and Lenexa",
            "Sewer scope available",
          ],
        },
      },
      {
        title: "Reviews That Keep Topeka and Lawrence Agents Calling",
        body: [
          "Agents in Topeka and Lawrence recommend inspectors their buyers praise. Each report goes out with a review link by text, leaving one takes a minute and we help you answer, so your profile stays full of recent, detailed feedback agents can point to.",
        ],
        points: [
          "Review link with report",
          "Quick one-tap reviews",
          "Reply help for owners",
          "Fresh feedback weekly",
        ],
        cta: "Build My Kansas Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Jordan, your Lawrence inspection report is in your inbox. If we earned it, would you leave a quick Google review? g.page/yourcompany/review",
          reviewer: "Priya",
          review:
            "Scheduled online the same evening, and the report came quickly. The radon results were explained clearly and our agent got a summary too. Easy choice next time.",
          reply:
            "Thank you, Priya. Enjoy the new home in Lawrence, and reach out anytime.",
        },
      },
    ],
  },
  audiences: {
    title: "Kansas Agents and Homeowners, Both Covered",
    lead: [
      "Agents shape many Kansas buyer inspections, while owners and sellers often book on their own. We earn agent trust through service rather than referral payments, and reach sellers and owners right when they go looking.",
    ],
    lanes: [
      {
        audience: "Kansas Buyer and Listing Agents",
        icon: "handshake",
        pitch:
          "Kansas agents juggle tight inspection deadlines and want inspectors who arrive on time and explain radon calmly. We give them a fast way to book you and reasons to repeat.",
        query: "Agent: Olathe buyer, need inspection and radon this week",
        flow: [
          "Visits agent page",
          "Books online",
          "Gets clear summary",
          "Sends next buyer",
        ],
        badge: "First call for the next deal",
        jobs: [
          {
            name: "Buyer inspection plus radon",
            tactic: "Agent page with bundled booking and an example report",
          },
          {
            name: "Older-home resale in Wichita",
            tactic: "Sewer scope suggested for older homes",
          },
          {
            name: "Repair verification visit",
            tactic: "Calendar link agents can forward to sellers",
          },
        ],
      },
      {
        audience: "Kansas Homeowners and Sellers Booking Direct",
        icon: "sold",
        pitch:
          "Sellers prepping a listing and owners planning upkeep search Google by job. We build pages for pre-listing, maintenance and new-build searches and let them book in minutes.",
        query: "pre listing inspection overland park ks",
        flow: [
          "Searches the job",
          "Reads the page",
          "Picks add-ons",
          "Booked in minutes",
        ],
        badge: "Seller booked before listing",
        jobs: [
          {
            name: "Pre-listing inspection",
            tactic: "Page on fixing issues before buyers see them",
          },
          {
            name: "Annual maintenance inspection",
            tactic: "Anniversary reminders sent to past clients",
          },
          {
            name: "New-build inspection in Johnson County",
            tactic: "Phase pages for Olathe and Gardner subdivisions",
          },
        ],
      },
    ],
    addOns: {
      title: "Kansas Add-On Tests Worth Selling",
      items: [
        "KDHE-certified radon test",
        "Sewer scope",
        "Termite / WDI report",
        "Mold sampling",
        "Well and septic check",
        "Thermal imaging",
      ],
    },
    cta: "Plan My Kansas Bookings",
  },
  regions: {
    title: "Kansas Cities and Counties We Serve",
    lead: "The KC suburbs, Wichita, the capital and the college towns behave differently, so we treat each as a separate market.",
    items: [
      {
        name: "Johnson County",
        cities: "Overland Park · Olathe · Lenexa · Shawnee",
        focus: "Suburban Map Pack work and new-build phases",
      },
      {
        name: "Wyandotte & Leavenworth",
        cities: "Kansas City · Bonner Springs · Leavenworth · Lansing",
        focus: "Older-home and military relocation pages",
      },
      {
        name: "Greater Wichita",
        cities: "Wichita · Andover · Derby · Maize",
        focus: "Sewer scope and radon pages for resale homes",
      },
      {
        name: "Topeka & Lawrence",
        cities: "Topeka · Lawrence · Eudora · Tecumseh",
        focus: "Capital and university-town buyers",
      },
      {
        name: "Flint Hills",
        cities: "Manhattan · Junction City · Emporia · Wamego",
        focus: "Fort Riley moves and campus-area rentals",
      },
      {
        name: "Central & Western Kansas",
        cities: "Salina · Hutchinson · Hays · Garden City",
        focus: "Well, septic and small-town searches",
      },
    ],
    other: "Working in Pittsburg, Dodge City or Liberal? Count them in.",
  },
  reviews: {
    title: "A 5.0 Google Rating Kansas Inspectors Can Verify",
    lead: "Read unedited reviews from business owners whose marketing we run every month.",
  },
  pricing: {
    title: "Kansas Home Inspector Plans, No Long Contracts",
    compareTitle: "How the Kansas Plans Compare",
    addOnsTitle: "Extras for Peak Kansas Listings",
    customTitle: "Inspecting on both sides of the state?",
  },
  faq: {
    title: "Questions From Kansas Inspection Companies",
    lead: "Licensing, radon rules, agents, AI search and pricing. Prefer a call? Ring us.",
    items: [
      {
        q: "Does Kansas have a home inspector license I should advertise?",
        a: "Not currently. The Kansas home inspector registration law expired in July 2013, and the state has not licensed inspectors since; check current state rules for any change. Buyers therefore lean on certifications, insurance and reviews, so we put those front and center on every channel.",
      },
      {
        q: "How should Kansas inspectors market radon testing?",
        a: "Lead with it. Kansas sale contracts include a radon notice telling buyers that testing should be done by a radon measurement technician, and KDHE certifies radon testers. Show your KDHE certification, offer the test at booking and write a radon page for each main city.",
      },
      {
        q: "Can my Olathe company rank for “home inspection Overland Park”?",
        a: "Usually, since the two cities sit side by side. We add Overland Park to your service area, publish an Overland Park page full of neighborhood detail, collect reviews from buyers there and back it with ads. Proximity helps, but reviews and relevance decide who holds the top three.",
      },
      {
        q: "Is sewer scope worth promoting in Wichita?",
        a: "Often, in older neighborhoods. Buyers of mid-century homes in Wichita and Topeka search for sewer camera inspections, and agents appreciate catching line problems early. A dedicated page, a booking add-on and a Google profile service listing bring in those jobs.",
      },
      {
        q: "What is the right way to market to Kansas real estate agents?",
        a: "Show reliability and never offer payment. Give agents an online booking link, an example report, quick delivery and a summary they can share, then keep in touch through a brief monthly newsletter or a LinkedIn post. Reviews from agents and buyers do the persuading from there.",
      },
      {
        q: "Will AI assistants recommend my Kansas inspection company?",
        a: "They can once your facts line up. ChatGPT, Gemini, Perplexity and AI Overviews compare your site, listings and reviews. When each source shows the same credentials, cities and add-on tests, assistants are more likely to name you for Wichita or Johnson County searches.",
      },
      {
        q: "What does home inspector marketing in Kansas cost per month?",
        a: "Pick a plan at $297, $950 or $1,500 per month; there is no long contract. Google charges ad spend to you directly, with a 0% markup from us. Inspectors in one metro usually begin small and add cities or Local Services Ads as demand grows.",
      },
    ],
  },
  audit: {
    title: "Get a Free Kansas Inspector Marketing Audit",
    lead: [
      "See your rank in each Kansas market you serve, plus a scorecard for your Business Profile, site and reviews, and the searches rivals are winning. Also inspecting across the line? Visit ",
      {
        href: "/services/home-inspector-marketing/missouri",
        label: "Missouri",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/oklahoma",
        label: "Oklahoma",
      },
      " or ",
      {
        href: "/services/home-inspector-marketing/colorado",
        label: "Colorado",
      },
      ".",
    ],
    points: [
      "Each Kansas market ranked",
      "Radon visibility checked",
      "Month-to-month from $297",
    ],
    form: {
      formType: "home-inspector-marketing-kansas",
      badge: "Free Kansas audit",
      title: "Get My Kansas Audit, Free",
      subtitle: "One short form, no strings attached.",
      submitText: "Send My Kansas Audit",
      messageLabel: "Your Kansas cities and add-on tests",
      messagePlaceholder: "e.g. Johnson County, radon and sewer scope",
    },
  },
  banner: {
    title: "Make Kansas Buyers Call You Before Anyone Else",
    lead: "Kick off with a no-cost rank check for every Kansas city you serve.",
    icons: ["inspect", "award"],
  },
};
