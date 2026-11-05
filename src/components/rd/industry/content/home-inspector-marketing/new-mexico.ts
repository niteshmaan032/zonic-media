import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* NEW MEXICO HOME INSPECTOR MARKETING — live state page (5 Nov 2026).
   Keywords: Semrush units are out, so terms come from
   reports/research/home-inspector-states-2026-11.md (new mexico home
   inspector license 90, home inspector albuquerque 10) plus web research.
   Web research (5 Nov 2026), facts used on the page:
   - Licensing: Home Inspector Licensing Act (NMSA 61-24D); the Home
     Inspectors Board, attached to the Regulation and Licensing
     Department, licenses inspectors, and inspecting without a license is
     illegal (rld.nm.gov, nmlegis.gov).
   - Septic: before a property with an on-site liquid waste system
     transfers, the seller must have it evaluated (20.7.3.902 NMAC;
     env.nm.gov). The page says "check current state rules".
   - Housing: stucco and adobe walls, flat roofs with parapets and
     canales, and evaporative (swamp) coolers are standard inspection
     topics in Albuquerque and Santa Fe (local inspector and roofing
     guides); no figures used.
   - No New Mexico rule found that restricts agents from recommending
     inspectors; agent lane stays compliant (no referral payments).
   Fresh wording only; audiences section per the Nov 2026 brief. */

export const CONTENT: LocationContent = {
  draftSlug: "new-mexico",
  liveUrl: "/services/home-inspector-marketing/new-mexico",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "New Mexico",
  meta: {
    title: "Home Inspector Marketing in New Mexico | Albuquerque SEO & Maps",
    description:
      "New Mexico home inspector marketing for Albuquerque, Rio Rancho, Santa Fe and Las Cruces: Map Pack rankings, SEO, AI answers, agent outreach and stucco and septic bookings.",
    keywords: [
      "home inspector marketing new mexico",
      "home inspector albuquerque",
      "home inspection rio rancho",
      "home inspection santa fe nm",
      "home inspector las cruces",
      "new mexico home inspector license",
      "stucco inspection albuquerque",
      "septic inspection new mexico",
      "home inspector seo new mexico",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.cyanRed,
  hero: {
    h1: "New Mexico Home Inspector Marketing, ABQ to Las Cruces",
    h1NoWrap: "ABQ to Las Cruces",
    lead: [
      "Stucco walls, flat roofs and swamp coolers give New Mexico buyers plenty to ask about. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "marketing for home inspection companies",
      },
      " lifts your licensed business to the top of Maps, into AI answers and onto a site that books stucco, septic and well tests.",
    ],
    cta: "Get My New Mexico Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack from Rio Rancho to Las Cruces",
        sub: "City pages up and down the Rio Grande",
        chips: [
          "Albuquerque",
          "Rio Rancho",
          "Santa Fe",
          "Las Cruces",
          "+ your town",
        ],
      },
      left: {
        icon: "roof",
        title: "Flat roof and stucco jobs",
        sub: "Pages for the questions adobe buyers ask",
      },
      right: {
        icon: "drop",
        title: "Septic and well add-ons",
        sub: "Booked with the inspection on rural homes",
      },
      bottom: {
        title: "Bookings through monsoon season",
        sub: "Campaigns that keep summer and fall calendars full",
      },
    },
  },
  services: {
    title: "Home Inspector Marketing Services Across New Mexico",
    lead: "Everything from your Google listing to agent outreach, shaped by how New Mexico homes are built and sold.",
    cta: "Audit My New Mexico Marketing",
    items: [
      {
        icon: "pin",
        title: "A Business Profile That Proves You're Licensed in NM",
        desc: "We list your state license, the cities you serve, stucco, septic and well services and current photos, so Google treats you as a trusted local inspector.",
        points: [
          "License number shown",
          "Cities served set",
          "Specialty tests listed",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Polish my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Albuquerque, Santa Fe and Las Cruces Home Inspector SEO",
        desc: "City and neighborhood pages, plus stucco, flat roof, evaporative cooler and septic pages that answer what New Mexico buyers search.",
        points: [
          "City pages",
          "Stucco and roof pages",
          "Septic and well pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for home pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads Built Around Buyer Contracts",
        desc: "Ads and Local Services Ads that reach buyers in the inspection window, split by metro so Albuquerque and Las Cruces each get their own campaign.",
        points: [
          "Inspection-window keywords",
          "Metro campaigns",
          "LSA handled",
        ],
        links: [{ href: "/services/google-ads", label: "Manage my ads" }],
      },
      {
        icon: "monitor",
        title: "A Website That Books Stucco, Septic and Well Tests",
        desc: "Buyers pick a time, add stucco moisture testing or a septic evaluation and preview a sample report without picking up the phone.",
        points: [
          "Add-ons while booking",
          "Live time slots",
          "Sample report on screen",
        ],
        links: [{ href: "/services/web-design", label: "Build my site" }],
      },
      {
        icon: "star",
        title: "Reviews and an Agent Page That Win Referrals",
        desc: "Review requests go out after each report, and agents get a shareable page with your turnaround, service area and a report sample.",
        points: [
          "Post-report requests",
          "Agent-friendly page",
          "Drafted replies",
        ],
        links: [{ href: "/services", label: "Our full service list" }],
      },
      {
        icon: "shield",
        title: "Suspended in New Mexico? We Reinstate Profiles",
        desc: "When Google suspends or won't verify your profile, we find the trigger, fix the details and manage the appeal. 900+ reinstated so far.",
        points: ["Trigger identified", "Details fixed", "Appeal managed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my Google profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Complete verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How New Mexico Buyers Choose Inspectors, and Where We Place You",
    lead: "First on the map, named in AI answers and booked through ads aimed at buyers under contract.",
    rows: [
      {
        title: "Top the Map for “Home Inspector Albuquerque”",
        body: [
          "Buyers in Rio Rancho, Corrales and the Northeast Heights often search Albuquerque by name. Those areas are added to your profile, each one gets a page and new reviews mention them, so you appear right across the metro.",
        ],
        points: [
          "Metro service areas",
          "Neighborhood pages",
          "Reviews naming areas",
          "Map rank tracking",
        ],
        cta: "See My Albuquerque Ranking",
        ui: {
          kind: "maps",
          query: "home inspector albuquerque",
          city: "Albuquerque",
          category: "Home inspector · NM licensed",
        },
      },
      {
        title: "Get Recommended by AI for Adobe and Stucco Homes",
        body: [
          "Buyers eyeing an adobe or stucco home in Santa Fe ask ChatGPT and Perplexity which inspectors know these walls and flat roofs. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization services",
          },
          " hand assistants consistent facts and detailed pages to cite, so your company is the one they name.",
        ],
        points: [
          "Stucco and roof FAQs",
          "Licensed status in schema",
          "Matching listings",
          "Reviews about stucco homes",
        ],
        cta: "See My AI Answers",
        ui: {
          kind: "ai",
          query: "home inspector santa fe adobe flat roof",
          intro: "For an adobe or flat-roof home inspection in Santa Fe,",
          bullets: [
            "State-licensed inspector",
            "Stucco moisture testing",
            "Covers Eldorado and Tesuque",
          ],
        },
      },
      {
        title: "Ads That Catch Buyers During the Inspection Window",
        body: [
          "New Mexico buyers book soon after their offer is accepted. Google Search campaigns plus Local Services Ads target Albuquerque and Las Cruces buyers in those days; every call is tied to a booked job, and keywords that don't convert get cut.",
        ],
        points: [
          "Contract-week keywords",
          "Call-to-job tracking",
          "Two metro campaigns",
          "Dead-end terms removed",
        ],
        cta: "Plan My New Mexico Ads",
        ui: {
          kind: "calls",
          title: "Inspection calls this week",
          calls: [
            {
              service: "Inspection + stucco test",
              source: "Google Ads",
              when: "Mon 10:20",
            },
            {
              service: "Septic evaluation",
              source: "Local Services",
              when: "Wed 1:15",
            },
            {
              service: "Well water test",
              source: "Google Maps",
              when: "Fri 8:45",
            },
          ],
        },
      },
    ],
  },
  audiences: {
    title: "New Mexico Agents and Owners: Two Ways Work Arrives",
    lead: [
      "In New Mexico, buyer inspections usually come through agents, while sellers, new-build owners and buyers going it alone book direct. Our plan speaks to buyers, sellers and agents separately, and it never involves paying for referrals.",
    ],
    lanes: [
      {
        audience: "Agents Working New Mexico Deals",
        icon: "handshake",
        pitch:
          "A good inspector for these agents understands stucco, flat roofs and evaporative coolers, books inside the inspection period and sends a summary clients can follow.",
        query: "Agent: stucco home in Rio Rancho, inspection by Tuesday?",
        flow: [
          "Agent clicks link",
          "Chooses a time",
          "Adds stucco test",
          "Report on time",
        ],
        badge: "Summary ready for negotiation",
        jobs: [
          {
            name: "Buyer inspection",
            tactic: "Online calendar agents can send to clients",
          },
          {
            name: "Stucco moisture testing",
            tactic: "Explainer page agents can share with buyers",
          },
          {
            name: "Septic evaluation before transfer",
            tactic: "Booked together when you're qualified",
          },
        ],
      },
      {
        audience: "New Mexico Owners Who Book Themselves",
        icon: "home",
        pitch:
          "Sellers wanting no surprises, owners of brand-new homes and do-it-yourself buyers look online first. We put your answers and your booking button in front of them.",
        query: "home inspector las cruces nm",
        flow: ["Searches online", "Reads reviews", "Books a slot", "Confirmed"],
        badge: "Direct client booked",
        jobs: [
          {
            name: "Pre-listing inspection",
            tactic: "Seller page on getting ahead of buyer requests",
          },
          {
            name: "New-construction phase checks",
            tactic: "Pages for foundation, framing and final",
          },
          {
            name: "Annual roof and cooler check",
            tactic: "Spring reminders before cooling season",
          },
        ],
      },
    ],
    addOns: {
      title: "Add-On Tests New Mexico Clients Want",
      items: [
        "Stucco moisture testing",
        "Septic evaluation",
        "Domestic well test",
        "Radon test",
        "Sewer scope",
        "Thermal imaging",
      ],
    },
    cta: "Plan My New Mexico Audience Marketing",
  },
  regions: {
    title: "New Mexico Cities and Regions We Cover",
    lead: "Each region gets pages, ads and reviews tuned to its homes and buyers.",
    items: [
      {
        name: "Albuquerque Metro",
        cities: "Albuquerque · Rio Rancho · Corrales · Bernalillo",
        focus: "Stucco, flat roofs and agent-led resales",
      },
      {
        name: "Valencia County",
        cities: "Los Lunas · Belen · Bosque Farms · Peralta",
        focus: "Acreage homes with wells and septic",
      },
      {
        name: "Santa Fe & North",
        cities: "Santa Fe · Los Alamos · Española · Taos",
        focus: "Adobe homes and second-home buyers",
      },
      {
        name: "Southern New Mexico",
        cities: "Las Cruces · Mesilla · Alamogordo · Deming",
        focus: "Retiree and military moves in the south",
      },
      {
        name: "Four Corners",
        cities: "Farmington · Aztec · Bloomfield · Gallup",
        focus: "Wide service areas from one profile",
      },
      {
        name: "Eastern Plains",
        cities: "Roswell · Clovis · Hobbs · Carlsbad",
        focus: "Energy-industry moves and ranch homes",
      },
    ],
    other:
      "Inspecting in Silver City, Ruidoso or Raton? We'll fold them into your plan.",
  },
  reviews: {
    title: "See Our 5.0 Google Rating, New Mexico Inspectors",
    lead: "Owners from many trades describe what it was like to work with us.",
  },
  pricing: {
    title: "Home Inspector Lead Generation Plans for New Mexico",
    compareTitle: "Compare New Mexico Inspector Plans",
    addOnsTitle: "Extras for New Mexico Summer Closings",
    customTitle: "Covering ABQ and Las Cruces both?",
  },
  faq: {
    title: "New Mexico Home Inspector Marketing FAQs",
    lead: "Licensing, stucco, septic, agents and pricing. Rather call? We pick up.",
    items: [
      {
        q: "Is a license required to inspect homes in New Mexico?",
        a: "Yes. Under the Home Inspector Licensing Act, New Mexico's Home Inspectors Board, attached to the Regulation and Licensing Department, licenses inspectors, and inspecting without a license is illegal. We display that license number across your Business Profile, website and schema markup, so agents and buyers can verify it at a glance.",
      },
      {
        q: "How should I market stucco and flat-roof inspections?",
        a: "Answer the questions buyers ask before they book. Pages that explain how you check stucco for moisture, flat roofs, parapets and canales, and evaporative coolers rank for those searches and get cited in AI answers. Link each page from your Google profile and booking form.",
      },
      {
        q: "Can I sell septic evaluations alongside inspections in New Mexico?",
        a: "If you're qualified, yes. New Mexico rules call for a septic system evaluation before a home with an on-site system changes hands, so rural buyers and sellers need one. We build a page explaining the process and add it to your booking flow. Check current state rules first.",
      },
      {
        q: "How do I get Albuquerque agents to refer me?",
        a: "Make every handoff smooth. Agents receive a page listing your open slots, sample summaries and coverage map, brief updates by email and LinkedIn, and a place to leave reviews. We never suggest paying or rewarding agents for referrals; dependable timing and clear reports bring them back.",
      },
      {
        q: "Can one company rank in both Albuquerque and Santa Fe?",
        a: "Yes, if you inspect in both. Give each city a dedicated page, a spot in your service area and reviews from local clients. Santa Fe searches often mention adobe and historic homes, so that page leads with those, while Albuquerque pages focus on suburbs like Rio Rancho.",
      },
      {
        q: "Do New Mexico buyers use AI to pick inspectors?",
        a: "More of them do every year, asking ChatGPT, Gemini and AI Overviews to suggest licensed inspectors who know stucco or septic. Those tools prefer businesses with consistent listings, specific service pages and detailed reviews, which also strengthen your Map Pack position.",
      },
      {
        q: "How are our New Mexico inspector plans priced?",
        a: "Choose from $297, $950 or $1,500 a month, with no contract and month-to-month billing. You pay Google for ads directly; we charge a 0% markup. One-metro inspectors often start small and add Las Cruces, Santa Fe or ads as the calendar fills.",
      },
    ],
  },
  audit: {
    title: "Claim a Free New Mexico Inspector Marketing Audit",
    lead: [
      "Our team checks how you rank across every New Mexico city you serve, then looks over your listing, site and reviews and how stucco and septic services appear. Working in a neighboring state? Inspectors in ",
      {
        href: "/services/home-inspector-marketing/arizona",
        label: "Arizona",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/colorado",
        label: "Colorado",
      },
      " and ",
      { href: "/services/home-inspector-marketing/texas", label: "Texas" },
      " work with us too.",
    ],
    points: [
      "Each city you serve, ranked",
      "License and specialty tests reviewed",
      "Plans from $297/mo, no lock-in",
    ],
    form: {
      formType: "home-inspector-marketing-new-mexico",
      badge: "Free New Mexico audit",
      title: "Request My New Mexico Inspector Audit",
      subtitle: "Fill it in, get a plan back.",
      submitText: "Send My New Mexico Audit",
      messageLabel: "Your NM cities and specialty tests",
      messagePlaceholder: "e.g. Albuquerque and Rio Rancho, stucco and septic",
    },
  },
  banner: {
    title: "Get Your New Mexico Inspection Business Booked Up",
    lead: "Find out where you rank from Farmington to Las Cruces, free.",
    icons: ["inspect", "roof"],
  },
};
