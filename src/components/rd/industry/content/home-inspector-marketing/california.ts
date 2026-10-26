import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* CALIFORNIA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush resource_organic (US, 24 Oct) returned no ranking
   data for the live URL; API units then ran out, so keyword work came from
   web research. The live title's core term "Home Inspector Marketing in
   California" stays in the title, and every live keywords-meta phrase
   sits in the title, H1, an H2/H3 or an FAQ question. Head-term volumes
   (Semrush US, 18 Sep 2026): home inspector marketing 210 · home inspector
   seo 140.
   Web research (24 Oct): California has no home inspector license, but
   Business and Professions Code 7195-7199 sets the standard of care and
   bars inspectors from repairing homes they inspected; top Los Angeles
   results cover seismic and hillside issues, sewer laterals, older wiring
   and plumbing, chimneys, pools and mold; termite reports come from
   licensed pest control operators. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "california-2",
  liveUrl: "/services/home-inspector-marketing/california",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "California",
  meta: {
    title: "Home Inspector Marketing in California | SEO, Maps & Leads",
    description:
      "California home inspector marketing for Los Angeles, San Diego, the Bay Area and Sacramento: Map Pack rankings, home inspector SEO, ads, reviews and AI search.",
    keywords: [
      "home inspector marketing california",
      "home inspectors los angeles",
      "home inspection san diego",
      "bay area home inspectors",
      "home inspectors in sacramento",
      "certified home inspector california",
      "home inspector marketing",
      "home inspector seo",
    ],
  },
  palette: PALETTES.coralTeal,
  hero: {
    h1: "California Home Inspector Marketing Agency for Direct Bookings",
    h1NoWrap: "Direct Bookings",
    lead: [
      "California buyers vet inspectors hard: they read reviews, compare sample reports and ask agents for names. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing services",
      },
      " put you in front of them in Los Angeles, Sacramento, San Diego and the Bay Area, with Map Pack rankings, metro pages and AI visibility.",
    ],
    cta: "Get My California Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 in every metro you serve",
        sub: "From the Inland Empire to the East Bay",
        chips: [
          "Los Angeles",
          "San Jose",
          "San Diego",
          "Sacramento",
          "+ your city",
        ],
      },
      left: {
        icon: "plumbing",
        title: "More sewer lateral scopes",
        sub: "Older-home pages for LA and Bay Area buyers",
      },
      right: {
        icon: "star",
        title: "Reviews that close the deal",
        sub: "Detailed feedback buyers read before booking",
      },
      bottom: {
        title: "Buyers who choose you, not a list",
        sub: "Direct bookings alongside your agent referrals",
      },
    },
  },
  services: {
    title: "Home Inspector SEO, Maps and Ads for California Firms",
    lead: "California home inspection marketing, managed end to end by one team.",
    cta: "Audit My California Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Placement in California's Crowded Metros",
        desc: "Categories, service cities, add-on services and fresh photos, tuned so your listing climbs above the dozens of inspectors nearby.",
        points: [
          "Service cities defined",
          "Add-on services listed",
          "Photos posted weekly",
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
        title:
          "California Home Inspector SEO for Sewer, Seismic and City Searches",
        desc: "City pages across your service area plus sewer lateral, foundation, chimney, pool and mold topics that older California homes raise.",
        points: [
          "Page per metro city",
          "Older-home topic pages",
          "Directory listings fixed",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home services local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "California Paid Search and LSA for Inspection Firms",
        desc: "Ads shown to buyers in escrow within your zip codes, Google Guaranteed listings included, with career and DIY searches excluded.",
        points: [
          "Escrow-window keywords",
          "Google Guaranteed spot",
          "Zip code fencing",
        ],
        links: [
          { href: "/services/google-ads", label: "California ad management" },
        ],
      },
      {
        icon: "monitor",
        title: "California Inspection Sites Built to Convert",
        desc: "Fast pages with online booking, sample reports, your credentials and a Spanish option where your buyers need one.",
        points: [
          "Online scheduling",
          "Sample reports shown",
          "Spanish pages available",
        ],
        links: [
          { href: "/services/web-design", label: "Inspector web design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Agent Referrals Across California",
        desc: "Review texts land as each report is delivered, and listing and buyer agents get a booking page and a report preview to share.",
        points: [
          "Texts as reports ship",
          "Agent booking page",
          "Replies in your tone",
        ],
        links: [{ href: "/services", label: "Explore all services" }],
      },
      {
        icon: "shield",
        title: "Suspended California Profiles, Reinstated",
        desc: "Suspensions often follow address or category issues. We find what Google flagged, correct the problem and submit an appeal; 900+ profiles reinstated so far.",
        points: ["Flag identified", "Verification support", "Appeal filed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Recover my suspended profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help with verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How California Inspectors Win Direct Bookings",
    lead: "Maps for buyers ready to book, AI answers for buyers still researching, and a site that books them.",
    rows: [
      {
        title: "Show Up First When Buyers Search “Home Inspectors Los Angeles”",
        body: [
          "In Los Angeles, a buyer's first move is often a map search on the drive home from an open house. We build out your profile, add pages for the Valley, Westside and South Bay, and grow reviews month after month until your pin sits in the top three.",
        ],
        points: [
          "LA neighborhood pages",
          "Add-ons listed on profile",
          "Geo-tagged job photos",
          "Rank tracking by area",
        ],
        cta: "See My LA Ranking",
        ui: {
          kind: "maps",
          query: "home inspectors los angeles",
          city: "Los Angeles",
          category: "Home inspector · Sewer scope",
        },
      },
      {
        title: "Get Recommended When San Diego Buyers Ask AI for an Inspector",
        body: [
          "San Diego buyers ask ChatGPT and AI Overviews which inspector handles older stucco homes or checks a sewer line. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " hands those assistants facts worth repeating: credentials, consistent listings, reviews describing real findings and answer pages for each service.",
        ],
        points: [
          "Credentials marked up",
          "Sewer and stucco answer pages",
          "Identical details everywhere",
          "Reviews naming neighborhoods",
        ],
        cta: "Check My AI Mentions",
        ui: {
          kind: "ai",
          query: "home inspection san diego for an older stucco house",
          intro: "For a San Diego home inspection on an older stucco house,",
          bullets: [
            "Sewer scope available",
            "Moisture and stucco checks",
            "Reports within 24 hours",
          ],
        },
      },
      {
        title: "A Booking Site Bay Area Home Inspectors Can Rely On",
        body: [
          "Bay Area buyers often schedule on a phone during a crowded open-house weekend. We build a quick site with live availability, add-on options, sample reports and Spanish pages if needed, and track each booking to its source.",
        ],
        points: [
          "Live availability",
          "Add-ons at checkout",
          "Sample report page",
          "Bookings tracked to source",
        ],
        cta: "Plan My Booking Site",
        ui: {
          kind: "website",
          url: "yourcompany.com/bay-area",
          headline: "Bay Area home inspections, booked in minutes",
          services: [
            "Buyer inspection",
            "Sewer lateral scope",
            "Pre-listing",
            "Chimney check",
          ],
        },
      },
    ],
  },
  regions: {
    title: "California Regions, From San Diego to Sacramento",
    lead: "Each metro searches in its own way, so we match pages, ads and service areas to how buyers there look for inspectors.",
    items: [
      {
        name: "LA County",
        cities: "Long Beach · Pasadena · Los Angeles · Glendale",
        focus: "Seismic, hillside and sewer lateral pages for older homes",
      },
      {
        name: "Orange County & Inland Empire",
        cities: "Irvine · Anaheim · Riverside · Temecula",
        focus: "New-build and pool pages for growing suburbs",
      },
      {
        name: "San Diego Area",
        cities: "San Diego · Carlsbad · Chula Vista · El Cajon",
        focus: "Coastal moisture and military-relocation booking pages",
      },
      {
        name: "Bay Area",
        cities: "San Jose · Oakland · San Francisco · Walnut Creek",
        focus: "Older-home and sewer pages for competitive escrows",
      },
      {
        name: "Greater Sacramento",
        cities: "Roseville · Sacramento · Folsom · Elk Grove",
        focus: "Pages for Bay Area movers buying their next home",
      },
      {
        name: "Central Valley & Central Coast",
        cities: "Fresno · Bakersfield · Modesto · San Luis Obispo",
        focus: "Map Pack work in markets with fewer optimized rivals",
      },
    ],
    other:
      "Inspecting in Redding, Santa Barbara or Palm Springs? We build pages there too.",
  },
  reviews: {
    title: "Why California Owners Trust Us: 5.0 on Google",
    lead: "Google reviews from owners of inspection and home service businesses.",
  },
  pricing: {
    title: "California Home Inspector Marketing Plans and Pricing",
    lead: [
      "Each plan bills month to month with zero markup on ad spend, and ",
      { href: "/services", label: "every other service we offer" },
      " can be added later.",
    ],
    compareTitle: "Compare California Plans",
    compareLead: "One metro to multiple regions, see what each covers.",
    addOnsTitle: "Extras for Peak Escrow Months",
    addOnsLead: "Extra metro pages or ad campaigns when listings surge.",
    customTitle: "Teams in SoCal and NorCal?",
    customText: "Send every office and service area for one combined quote.",
  },
  faq: {
    title: "Questions California Inspectors Ask Us",
    lead: "Credentials, metros, older homes, Spanish and costs, answered briefly.",
    items: [
      {
        q: "What does “certified home inspector California” mean if the state has no license?",
        a: "California doesn't license home inspectors, though state law sets a standard of care and bars inspectors from repairing homes they've inspected. Certification therefore comes from trade associations and training. We feature your credentials, insurance and sample reports on your Google profile and website, because buyers lean on them.",
      },
      {
        q: "How do I compete for “home inspection San Diego” searches?",
        a: "Win neighborhoods before the whole city. Pages for Clairemont, Chula Vista or Oceanside, reviews that mention them and photos from local jobs help you rank there first. Then the main San Diego page gathers strength from the pages around it.",
      },
      {
        q: "Can I rank among home inspectors in Sacramento and the Bay Area at once?",
        a: "In organic search, yes, with strong pages for each metro. On Google Maps, distance from your verified address matters, so a second map spot generally needs a real local base. We build both metros within Google's rules.",
      },
      {
        q: "Which add-on services sell best online in California?",
        a: "Sewer lateral scopes for older homes, pool and spa inspections, chimney checks and mold assessments are searched often. Termite reports come from licensed pest control operators, so if you work with one, we promote the bundled booking and say who writes that report.",
      },
      {
        q: "Should California inspectors market in Spanish?",
        a: "In much of Los Angeles, the Inland Empire and the Central Valley, yes. A Spanish service page, Spanish Google posts and a bilingual booking form reach buyers your competitors skip. We only add them if someone on your team can serve Spanish-speaking clients.",
      },
      {
        q: "Which Zonic Media plan fits a California inspection company?",
        a: "Pick the $297, $750 or $1,500 monthly tier based on how many metros you cover; none needs a long contract. Google bills ad spend directly and we add no markup. Higher tiers bring more pages and full campaign management.",
      },
    ],
  },
  audit: {
    title: "Get Your Free California Home Inspector Audit",
    lead: [
      "We test the searches buyers run in each California city you cover, score your profile, site and reviews, then list the inspectors getting the bookings you're missing.",
    ],
    points: [
      "Each metro and city you serve, tested",
      "English and Spanish searches checked",
      "Tiers from $297 to $1,500, month to month",
    ],
    form: {
      formType: "home-inspector-marketing-california",
      badge: "Free California audit",
      title: "Request a California Inspector Audit",
      subtitle: "Free, fast and without obligation.",
      submitText: "Send My California Audit",
      messageLabel: "Your California cities and add-on services",
      messagePlaceholder: "e.g. Pasadena and Burbank, sewer scopes and pools",
    },
  },
  banner: {
    title: "Become the Inspector California Buyers Book Directly",
    lead: "A free audit shows your rank against local rivals in each metro you serve.",
    icons: ["inspect", "star"],
  },
};
