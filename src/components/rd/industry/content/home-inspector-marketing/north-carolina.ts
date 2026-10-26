import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* NORTH CAROLINA HOME INSPECTOR MARKETING — redesign draft content
   (24 Oct 2026).
   Rank safety: Semrush returned "API units balance is zero" on 24 Oct, so
   the live URL's ranking report could not be pulled. The live title's core
   term ("Home Inspector Marketing in North Carolina") is kept, and every
   phrase in the live keywords meta sits in the title, H1, an H2/H3 or an
   FAQ question. Keywords and angles came from web research (24 Oct): the
   NC Home Inspector Licensure Board licenses inspectors; buyers inspect
   inside the due diligence period of the standard Offer to Purchase (Form
   2-T); WDIR 100 termite reports must come from someone licensed by the
   NCDA&CS Structural Pest Control Division; Piedmont radon, crawl spaces,
   wells and septic drive add-ons. No volumes available. */

export const CONTENT: LocationContent = {
  draftSlug: "north-carolina-2",
  liveUrl: "/services/home-inspector-marketing/north-carolina",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "North Carolina",
  meta: {
    title: "Home Inspector Marketing in North Carolina | Charlotte SEO",
    description:
      "North Carolina home inspector marketing: Map Pack rankings in Charlotte, Raleigh and Wilmington, home inspector SEO, Google Ads and more agent referrals.",
    keywords: [
      "home inspector marketing north carolina",
      "home inspector charlotte nc",
      "home inspector raleigh nc",
      "home inspectors wilmington nc",
      "home inspections in nc",
      "nc licensed home inspectors",
      "home inspector marketing",
      "home inspector seo",
    ],
  },
  palette: PALETTES.redSlate,
  hero: {
    h1: "North Carolina Home Inspector Marketing for Due Diligence Calls",
    h1NoWrap: "Due Diligence",
    lead: [
      "In North Carolina, buyers get a short due diligence window to inspect, so they book whoever they find and trust fastest. We make that your company in Charlotte, the Triangle and the coast, using our ",
      {
        href: "/services/home-inspector-marketing",
        label: "marketing for home inspectors",
      },
      ": Maps, SEO, ads and reviews.",
    ],
    cta: "Get My NC Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "First on the map",
        sub: "In Charlotte, the Triangle, the Triad and coastal towns",
        chips: [
          "Charlotte",
          "Raleigh",
          "Greensboro",
          "Wilmington",
          "+ your county",
        ],
      },
      left: {
        icon: "calendar",
        title: "Booked inside due diligence",
        sub: "Online scheduling buyers can use the same night",
      },
      right: {
        icon: "bug",
        title: "More WDIR add-ons",
        sub: "Termite report pages for licensed teams",
      },
      bottom: {
        title: "Agents who refer again",
        sub: "Clean reports and reviews they can point to",
      },
    },
  },
  services: {
    title: "Marketing That Books More Home Inspections in NC",
    lead: "One crew, every channel, more booked North Carolina home inspections.",
    cta: "Audit My NC Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Work for Every NC Metro",
        desc: "Your Google profile gets inspection categories, county service areas, your NC license number and new photos, so your pin rises in the areas you work.",
        points: [
          "County service areas",
          "License number listed",
          "Photos added weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Sharpen my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "City-by-City Home Inspector SEO for NC",
        desc: "City pages for places like Charlotte, Cary or Asheville, plus pages for radon, crawl space, well and septic, and termite reports.",
        points: [
          "One page per city",
          "Add-on service pages",
          "Local schema markup",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Paid Search for Buyers Under Contract",
        desc: "Google Ads on inspection searches plus Local Services Ads that charge per lead, fenced to the counties your team covers.",
        points: [
          "Due diligence timing",
          "Pay-per-lead Local Services",
          "County targeting",
        ],
        links: [{ href: "/services/google-ads", label: "Run my Google Ads" }],
      },
      {
        icon: "monitor",
        title: "A Site Buyers Can Book From Tonight",
        desc: "Mobile pages where buyers choose a date, tick their add-ons and preview a sample report, so booking takes minutes instead of a callback.",
        points: [
          "Book online 24/7",
          "Sample report shown",
          "Add-ons at checkout",
        ],
        links: [
          { href: "/services/web-design", label: "Get a new website" },
          {
            href: "/home-inspector-website-design-agency-us/offer",
            label: "Inspector site package",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and a Spot on Agents' Lists",
        desc: "Review requests after every report and an agent page with booking links, so buyer's agents in each metro pass your name on.",
        points: [
          "Texts after each report",
          "Agent booking page",
          "Replies within a day",
        ],
        links: [
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Free Maps rank check",
          },
        ],
      },
      {
        icon: "shield",
        title: "Locked or Unverified Google Listings",
        desc: "Suspensions and stalled verifications stop calls cold. We work out the cause, gather proof and argue the appeal. Our record: 900+ profiles reinstated.",
        points: [
          "Cause traced to the source",
          "Proof prepared",
          "Appeal managed",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Restore my listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification help",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How We Grow North Carolina Inspection Companies",
    lead: "Top map placement, mentions in AI answers and a steady stream of reviews that agents can see.",
    rows: [
      {
        title: "Be the Home Inspector Charlotte NC Agents Find in the Top 3",
        body: [
          "A Charlotte buyer who just went under contract opens Google Maps and calls from the first three results. We fill out your profile, build Ballantyne, Huntersville and Matthews pages and keep fresh reviews arriving until your pin earns one of those spots.",
        ],
        points: [
          "Inspection categories set",
          "Suburb pages built",
          "Crawl space work listed",
          "Rank grid tracking",
        ],
        cta: "See My Charlotte Ranking",
        ui: {
          kind: "maps",
          query: "home inspector charlotte nc",
          city: "Charlotte",
          category: "Home inspector · NC licensed",
        },
      },
      {
        title: "Be the Home Inspector Raleigh NC Buyers Get From ChatGPT",
        body: [
          "Plenty of people moving to the Triangle ask an AI assistant who to hire before they ever meet an agent. With our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          ", your site, reviews and listings answer those questions clearly, so you're the name it gives for Raleigh, Cary and Durham.",
        ],
        points: [
          "FAQ pages that answer",
          "Consistent listings",
          "Schema in place",
          "Reviews naming the city",
        ],
        cta: "Check My AI Visibility",
        ui: {
          kind: "ai",
          query: "which home inspector should i hire in raleigh",
          intro: "For a home inspection in Raleigh,",
          bullets: [
            "NC licensed inspector",
            "Radon and WDIR add-ons",
            "Reports the next day",
          ],
        },
      },
      {
        title: "Reviews That Keep Agents Sending Buyers Your Way",
        body: [
          "In North Carolina, a buyer's agent often hands over two or three inspector names, and the buyer checks reviews before calling. We text a review link when each report goes out and draft replies, so your profile stays fresh in Greensboro, Durham and beyond.",
        ],
        points: [
          "Link sent with every report",
          "We draft every reply",
          "Agent mentions encouraged",
          "Low ratings flagged early",
        ],
        cta: "Grow My NC Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi from the inspection team! If the Elm Street report helped, would you leave us a short review?",
          reviewer: "Megan",
          review:
            "Booked online the same night we went under contract. The report was clear and our agent loved the photos.",
          reply:
            "Thank you, Megan! Good luck with closing, and enjoy the new house.",
        },
      },
    ],
  },
  regions: {
    title: "Regions We Cover for Home Inspectors, Wilmington NC to Asheville",
    lead: "From the mountains to the sounds, each region is handled separately, with matching pages, service areas and ad rules.",
    items: [
      {
        name: "Charlotte Metro",
        cities: "Charlotte · Concord · Huntersville · Gastonia",
        focus: "Pages for suburbs as the metro keeps spreading",
      },
      {
        name: "Research Triangle",
        cities: "Cary · Raleigh · Durham · Wake Forest",
        focus: "Relocation buyer pages and AI answer content",
      },
      {
        name: "Piedmont Triad",
        cities: "Winston-Salem · Greensboro · High Point · Burlington",
        focus: "Radon and older-home pages for Piedmont buyers",
      },
      {
        name: "Wilmington & the Coast",
        cities: "Wilmington · Leland · Jacksonville · Morehead City",
        focus: "Moisture and crawl space pages for coastal homes",
      },
      {
        name: "Western NC",
        cities: "Asheville · Hendersonville · Boone",
        focus: "Well, septic and radon pages for mountain homes",
      },
      {
        name: "Eastern NC & Sandhills",
        cities: "Greenville · Fayetteville · Goldsboro",
        focus: "Military move pages and rural service areas",
      },
    ],
    other: "Inspecting in a county that isn't listed? We'll cover it.",
  },
  reviews: {
    title: "Five-Star Google Reviews From Owners We Market",
    lead: "Reviews from inspectors and other service businesses we market.",
  },
  pricing: {
    title: "North Carolina Home Inspector Marketing Pricing",
    lead: [
      "No long contracts: each plan is month to month, with ad spend at a 0% markup. See everything we offer on our ",
      { href: "/services", label: "services page" },
      ".",
    ],
    compareTitle: "NC Plans at a Glance",
    compareLead: "Compare coverage for one metro or every corner of the state.",
    addOnsTitle: "Add-Ons for Peak Season",
    addOnsLead: "Extra city pages or ads for spring and summer closings.",
    customTitle: "Teams in Charlotte and Raleigh?",
    customText: "Tell us your offices for a single combined quote.",
  },
  faq: {
    title: "Questions NC Inspectors Ask Us",
    lead: "Licensing, due diligence timing, WDIRs, coast and mountain markets. Call if you'd rather talk.",
    items: [
      {
        q: "How should NC licensed home inspectors show their license online?",
        a: "Put the number wherever buyers look, from the Google profile and site footer to the booking screen and each report. The NC Home Inspector Licensure Board issues these licenses, and agents often confirm one before referring. A visible number earns trust and hands AI tools a fact to repeat.",
      },
      {
        q: "How can I get booked inside a buyer's due diligence period?",
        a: "Be easy to book the night they go under contract. Under the standard NC offer form, buyers inspect during a negotiated due diligence period that rarely leaves time to wait for callbacks. Online scheduling, quick replies to calls and texts and a clear report turnaround win those jobs.",
      },
      {
        q: "Can you promote WDIR termite reports for my company?",
        a: "Yes, if your team or a partner holds the right license. In North Carolina, the WDIR form must come from someone licensed through the state's Structural Pest Control Division. We create termite report pages, list the WDIR among your Google profile services and make it a checkbox when buyers book.",
      },
      {
        q: "Is home inspector SEO worth it outside Charlotte and Raleigh?",
        a: "Often more so. Towns like Hickory, Boone or Greenville have fewer inspectors with real websites, so a few well-built pages and a complete Google profile can reach the top quickly. We start with the towns where you already inspect the most.",
      },
      {
        q: "Do buyers moving to North Carolina use AI to find inspectors?",
        a: "Many do. Out-of-state buyers with no local contacts ask AI tools such as ChatGPT or Gemini for names, and those answers lean on reviews, listings and clear website pages. We keep yours accurate and detailed for each NC city you serve.",
      },
      {
        q: "How are your North Carolina marketing plans priced?",
        a: "The three NC plans are priced at $297, $750 or $1,500 monthly, and you can leave in any month. Ad platforms bill your budget separately, and we add a 0% markup to it. Higher plans add more cities, pages and campaigns.",
      },
      {
        q: "What if my NC inspection company's Google listing is suspended?",
        a: "We track down what triggered it, put it right and handle the reinstatement request for you, with updates until it's back. We've reinstated 900+ profiles, and stuck verifications are handled the same way. Your site and ads keep calls coming meanwhile.",
      },
    ],
  },
  audit: {
    title: "Book a Free North Carolina Inspector Marketing Audit",
    lead: [
      "Our review covers your rank in every NC metro you serve, the state of your profile, site and reviews, and the inspections currently going to rivals.",
    ],
    points: [
      "Each metro and county checked",
      "WDIR and radon searches reviewed",
      "$297, $750 and $1,500 plans, no contract",
    ],
    form: {
      formType: "home-inspector-marketing-north-carolina",
      badge: "No-cost NC audit",
      title: "Request Your NC Inspector Audit",
      subtitle: "Free, fast and no strings.",
      submitText: "Send My NC Audit",
      messageLabel: "Your NC cities and add-ons",
      messagePlaceholder: "e.g. Raleigh and Cary, radon and WDIR reports",
    },
  },
  banner: {
    title: "Turn North Carolina Due Diligence Into Booked Inspections",
    lead: "A free review shows your ranking in each NC metro, county by county.",
    icons: ["inspectList", "home"],
  },
};
