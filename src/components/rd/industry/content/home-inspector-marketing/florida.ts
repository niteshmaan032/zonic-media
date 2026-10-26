import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* FLORIDA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush resource_organic (US, 24 Oct) returned no ranking
   data for the live URL; API units then ran out, so keyword work came from
   web research. The live title's core term "Home Inspector Marketing in
   Florida" stays in the title, and every live keywords-meta phrase sits in
   the title, H1, an H2/H3 or an FAQ question. Head-term volumes (Semrush
   US, 18 Sep 2026): home inspector marketing 210 · home inspector seo 140.
   Web research (24 Oct): Florida licenses home inspectors through the
   DBPR (Chapter 468 Part XV); licensed inspectors with hurricane
   mitigation training can perform wind mitigation inspections; top
   Jacksonville and Orlando results list wind mitigation, 4-point, roof
   certification, WDO (often via pest control partners), pool and mold
   services. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "florida-2",
  liveUrl: "/services/home-inspector-marketing/florida",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Florida",
  meta: {
    title: "Home Inspector Marketing in Florida | SEO & Insurance Leads",
    description:
      "Florida home inspector marketing for Tampa, Orlando, Miami and Jacksonville: Map Pack rankings, wind mitigation and 4-point pages, ads, reviews and AI search.",
    keywords: [
      "home inspector marketing florida",
      "home inspector in florida",
      "home inspection companies in florida",
      "home inspector tampa fl",
      "home inspector in orlando fl",
      "central florida home inspectors",
      "home inspector marketing",
      "home inspector seo",
    ],
  },
  palette: PALETTES.roseEmerald,
  hero: {
    h1: "Florida Home Inspector Marketing Agency for Insurance Inspections",
    h1NoWrap: "Insurance Inspections",
    lead: [
      "Florida inspectors earn from two kinds of searches: buyers under contract and homeowners who need a wind mitigation or 4-point report for insurance. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing agency",
      },
      " ranks you for both in Tampa, Orlando, Miami and Jacksonville, with Map Pack work, report pages and tracked calls.",
    ],
    cta: "Get My Florida Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 from Pensacola to Miami",
        sub: "Map spots in each Florida city you inspect",
        chips: ["Tampa", "Orlando", "Miami", "Jacksonville", "+ your city"],
      },
      left: {
        icon: "storm",
        title: "More wind mitigation jobs",
        sub: "Report pages homeowners find before renewal",
      },
      right: {
        icon: "clipboard",
        title: "More 4-point bookings",
        sub: "Insurance inspection pages for older homes",
      },
      bottom: {
        title: "Busy outside buying season too",
        sub: "Insurance reports keep slower months moving",
      },
    },
  },
  services: {
    title: "What Home Inspection Companies in Florida Get From Us",
    lead: "Need more Florida inspections? One team covers every buyer channel.",
    cta: "Audit My Florida Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Visibility for Florida Inspectors",
        desc: "Categories for buyer and insurance inspections, service cities, add-ons like WDO and pool checks, and weekly photos to keep you climbing.",
        points: [
          "Insurance inspections listed",
          "City service areas",
          "Photos from each week's jobs",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Upgrade my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Florida Home Inspector SEO for Cities and Insurance Reports",
        desc: "City pages plus pages for wind mitigation, 4-point, roof certification, WDO and mold, each answering the questions buyers and insurers raise.",
        points: [
          "Page per city",
          "Insurance report pages",
          "Directory listings matched",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for service companies",
          },
        ],
      },
      {
        icon: "target",
        title: "Florida Google Ads and Local Services Ads",
        desc: "Ads for buyers under contract and homeowners facing an insurance deadline, limited to the zip codes you serve, with job-seeker searches removed.",
        points: [
          "Buyer and insurance campaigns",
          "Google Guaranteed listing",
          "Zip-level targeting",
        ],
        links: [
          { href: "/services/google-ads", label: "Florida ad management" },
        ],
      },
      {
        icon: "monitor",
        title: "Florida Inspection Sites With Online Booking",
        desc: "A fast site where clients pick a buyer or insurance inspection, add a WDO or pool check, see your license and book in minutes.",
        points: [
          "Inspection-type selector",
          "License number displayed",
          "Bilingual pages available",
        ],
        links: [
          { href: "/services/web-design", label: "Inspection website design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews, Realtor Links and Repeat Referrals in Florida",
        desc: "A review text follows every delivered report, and agents receive a booking link plus a short report summary to send their buyers.",
        points: [
          "Review texts after each report",
          "Agent booking link",
          "Owner replies written",
        ],
        links: [{ href: "/services", label: "Our full range of services" }],
      },
      {
        icon: "shield",
        title: "Suspended Florida Profiles and Stuck Verifications",
        desc: "We trace why Google suspended or blocked your listing, resolve it and lodge the appeal. More than 900 profiles have been reinstated this way.",
        points: [
          "Underlying issue fixed",
          "Verification help",
          "Appeal handled",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my Florida profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify my business profile",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Where Florida Inspection Bookings Come From",
    lead: "Buyer searches, AI answers and insurance calls, all measured against booked jobs.",
    rows: [
      {
        title: "Hold a Map Pack Spot for “Home Inspector Tampa FL”",
        body: [
          "Tampa Bay buyers who need an inspector this week open the map and call one of three names. We sharpen your profile, publish pages for Brandon, Riverview and St. Petersburg, and keep reviews arriving so yours is among them.",
        ],
        points: [
          "Insurance inspections on profile",
          "Tampa Bay city pages",
          "Job photos weekly",
          "Rank grid tracking",
        ],
        cta: "See My Tampa Ranking",
        ui: {
          kind: "maps",
          query: "home inspector tampa fl",
          city: "Tampa",
          category: "Home inspector · Wind mitigation",
        },
      },
      {
        title: "Get Named by AI as a Home Inspector in Orlando, FL",
        body: [
          "Out-of-state buyers relocating to Orlando ask ChatGPT and AI Overviews which inspectors also handle wind mitigation and 4-point reports. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " supplies the facts those tools repeat: your license, consistent listings, detailed reviews and an answer page for each report.",
        ],
        points: [
          "License in every listing",
          "Wind mitigation answer pages",
          "Matching name, address, phone",
          "Reviews naming the city",
        ],
        cta: "Test My AI Presence",
        ui: {
          kind: "ai",
          query: "home inspector in orlando fl who does wind mitigation",
          intro:
            "For an Orlando home inspection plus a wind mitigation report,",
          bullets: [
            "Licensed Florida inspector",
            "Wind mitigation and 4-point",
            "Reports emailed the same day",
          ],
        },
      },
      {
        title:
          "More Insurance Inspection Calls for Central Florida Home Inspectors",
        body: [
          "Wind mitigation and 4-point requests come with policy renewals and home sales all year. We run search ads and Local Services Ads on those report searches across Orlando, Lakeland and Kissimmee, record every call and show which campaigns book inspections.",
        ],
        points: [
          "Insurance report campaigns",
          "Calls recorded and tagged",
          "Junk leads disputed",
          "Bookings by campaign",
        ],
        cta: "Track My Florida Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Orlando",
          calls: [
            {
              service: "Wind mitigation report",
              source: "Local Services Ads",
              when: "8:25 AM",
            },
            {
              service: "Buyer inspection + WDO",
              source: "Google Ads",
              when: "11:50 AM",
            },
            {
              service: "4-point inspection",
              source: "Google Maps",
              when: "3:10 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Florida Regions and Cities on Our Map",
    lead: "Panhandle beaches to Miami high-rises: we shape pages and service areas around how each region searches.",
    items: [
      {
        name: "Tampa Bay",
        cities: "St. Petersburg · Tampa · Brandon · Clearwater",
        focus: "Wind mitigation and roof pages for coastal neighborhoods",
      },
      {
        name: "Central Florida",
        cities: "Orlando · Kissimmee · Lakeland · Winter Park",
        focus: "Relocation and new-build pages for fast-growing suburbs",
      },
      {
        name: "South Florida",
        cities: "Fort Lauderdale · Miami · Boca Raton · West Palm Beach",
        focus: "Spanish-language pages and condo inspection searches",
      },
      {
        name: "First Coast",
        cities: "Jacksonville · Orange Park · St. Augustine · Fernandina Beach",
        focus: "4-point and WDO pages for older homes",
      },
      {
        name: "Southwest Florida",
        cities: "Naples · Fort Myers · Cape Coral · Sarasota",
        focus: "Snowbird and second-home pages booked remotely",
      },
      {
        name: "Panhandle & Big Bend",
        cities: "Pensacola · Destin · Panama City · Tallahassee",
        focus: "Storm-season insurance pages for Gulf Coast towns",
      },
    ],
    other:
      "Inspecting in Ocala, Gainesville or the Space Coast? We cover those markets too.",
  },
  reviews: {
    title: "Florida Owners Weigh In: 5.0 Stars on Google",
    lead: "Unfiltered feedback from the inspectors and trade owners we market.",
  },
  pricing: {
    title: "Florida Home Inspector Marketing Plans and Costs",
    lead: [
      "Plans run month to month with no markup on ad spend (0%). Need more? ",
      { href: "/services", label: "See every service we provide" },
      ".",
    ],
    compareTitle: "Compare Florida Plans",
    compareLead: "A single city or every region in the state.",
    addOnsTitle: "Extras for Hurricane Season",
    addOnsLead: "Insurance-report ads and storm pages when demand jumps.",
    customTitle: "Branches in Tampa and Jacksonville?",
    customText:
      "Tell us each branch and the towns it covers, and we'll price them together.",
  },
  faq: {
    title: "Florida Inspector Marketing Questions, Answered",
    lead: "Licensing, insurance inspections, WDO, Spanish and rankings. Still unsure? Ring our team.",
    items: [
      {
        q: "What should a home inspector in Florida show in listings and ads?",
        a: "Your Florida home inspector license number first, since the state licenses inspectors through the DBPR and buyers check it. Then add the training behind any wind mitigation work, your insurance and a sample report. We place all of it on your profile, website and ads.",
      },
      {
        q: "Can I market wind mitigation and 4-point inspections as a home inspector?",
        a: "Yes. Licensed home inspectors who complete the required hurricane mitigation training can perform wind mitigation inspections, and many also offer 4-point reports. Each deserves its own page, Google profile service and ad group, since homeowners search for them separately from buyer inspections.",
      },
      {
        q: "How should WDO inspections appear in my marketing?",
        a: "List them as an add-on, but be accurate about who performs them. WDO reports fall under Florida's pest control licensing, so if a licensed partner handles yours, your pages and booking form say so. Lenders often ask for them, which makes them a strong add-on.",
      },
      {
        q: "Is it possible to rank as a home inspector in Orlando and Tampa together?",
        a: "In organic search, yes, as long as each city has its own well-built page. Google Maps leans on distance from your verified address, so a second map spot needs a real local base. Many inspectors win Lakeland and the I-4 suburbs first.",
      },
      {
        q: "Should Florida home inspectors market in Spanish?",
        a: "In South Florida, Orlando and Tampa, frequently. We write Spanish versions of your key pages and posts and send review requests in the client's language, but only when your team can take Spanish calls and deliver reports in Spanish.",
      },
      {
        q: "How do snowbird and out-of-state buyers find Florida inspectors?",
        a: "Mostly online, often weeks before they arrive. Online booking, a sample report, clear photos of past jobs and fast email replies win them over. We also target Naples, Sarasota and the Space Coast with pages written for remote buyers.",
      },
      {
        q: "What do Florida inspectors pay for Zonic Media plans?",
        a: "You can pick $297, $750 or $1,500 each month, all month to month. We add no markup to the ad spend Google bills you. More cities, report pages and campaigns come with the higher plans.",
      },
    ],
  },
  audit: {
    title: "Claim a Free Florida Inspection Marketing Audit",
    lead: [
      "We check your rankings for buyer and insurance searches in each Florida city you serve, review your listing, site and reviews, and show where those jobs are going.",
    ],
    points: [
      "Buyer and insurance searches tested",
      "Every Florida city you serve, checked",
      "Starting at $297 monthly, no contract",
    ],
    form: {
      formType: "home-inspector-marketing-florida",
      badge: "Free Florida audit",
      title: "Request Your Free Florida Audit",
      subtitle: "No charge and nothing to sign.",
      submitText: "Send My Florida Audit",
      messageLabel: "Florida cities and inspection types",
      messagePlaceholder:
        "e.g. Tampa and Brandon, wind mitigation and 4-points",
    },
  },
  banner: {
    title: "Win Florida's Buyer and Insurance Inspections",
    lead: "Start with a free audit of your rankings in every Florida city you cover.",
    icons: ["storm", "inspect"],
  },
};
