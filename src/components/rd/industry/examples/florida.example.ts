import { PALETTES } from "../palettes";
import type { LocationContent } from "../types";

/* REFERENCE EXAMPLE (not routed): the owner-approved Florida HVAC draft's
   words in the LocationContent schema. Shows the expected tone, lengths
   and field usage. Never copy its wording to another page. */

export const FLORIDA_EXAMPLE: LocationContent = {
  draftSlug: "florida-2",
  liveUrl: "/services/hvac-marketing-agency/florida",
  parent: {
    href: "/services/hvac-marketing-agency",
    label: "HVAC Marketing Agency",
    niche: "HVAC",
  },
  place: "Florida",
  meta: {
    title: "HVAC Marketing Company FL | Florida HVAC Marketing Agency",
    description:
      "Florida HVAC marketing for contractors in Miami, Tampa, Orlando and Jacksonville: Map Pack rankings, leaner Google Ads, Spanish pages and storm plans.",
    keywords: [
      "hvac marketing company fl",
      "hvac marketing florida",
      "hvac marketing agency florida",
    ],
  },
  palette: PALETTES.coralTeal,
  hero: {
    h1: "Florida HVAC Marketing Agency for Year-Round AC Calls",
    h1NoWrap: "Year-Round",
    lead: [
      "Florida homeowners need cooling all twelve months, and they call whoever Google shows first. We put your company there in Tampa, Miami, Orlando, Jacksonville and the towns around them, using the playbook from our ",
      {
        href: "/services/hvac-marketing-agency",
        label: "HVAC marketing agency",
      },
      ": Map Pack rankings, leaner Google Ads and pages in English and Spanish.",
    ],
    cta: "Get My Florida HVAC Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on Google Maps",
        sub: "In every Florida city you serve, in English and Spanish",
        chips: ["Tampa", "Miami", "Orlando", "Jacksonville", "+ your city"],
      },
      left: {
        icon: "call",
        title: "More booked jobs",
        sub: "Every call tracked from first ring to finished install",
      },
      right: {
        icon: "storm",
        title: "Storm-season ready",
        sub: "Pages and ads live before the calls flood in",
      },
      bottom: {
        title: "A full schedule, all year",
        sub: "Tune-up and membership offers fill the cooler months",
      },
    },
  },
  services: {
    title: "What We Run for Florida HVAC Contractors",
    lead: "One team for search, ads, your website and reviews, set up around Florida's cities and seasons.",
    cta: "Audit My Florida Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Rankings in Every Florida City",
        desc: "Categories, service areas, photos and your state license details, tuned until you hold a top-three spot in each city you cover.",
        points: [
          "Full profile setup",
          "City service areas",
          "License number shown",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile optimization",
          },
        ],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified Profiles",
        desc: "A locked Google profile shouldn't cost you a summer. We fix suspensions and stuck verifications, and we've reinstated 900+ profiles.",
        points: [
          "Suspension appeals",
          "Verification fixes",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstatement",
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
    title: "How We Grow Florida HVAC Companies",
    lead: "On the map, in AI answers and in your reviews, in English and Spanish.",
    rows: [
      {
        title: "Show Up First on Google Maps in Your Florida City",
        body: [
          "When an Orlando homeowner searches “AC repair near me,” three companies appear on the map before anything else. We tune your Google Business Profile, city pages and reviews so yours is one of them.",
        ],
        points: [
          "Profile fully optimized",
          "City service areas",
          "Weekly photos and posts",
          "License number shown",
        ],
        cta: "See My Maps Ranking",
        ui: {
          kind: "maps",
          query: "ac repair orlando",
          city: "Orlando",
          category: "AC repair · Open 24 hours",
        },
      },
    ],
  },
  regions: {
    title: "Florida Regions and Cities We Cover",
    lead: "From the Keys to the Panhandle, each region gets city pages and Map Pack work matched to how its homeowners search.",
    items: [
      {
        name: "South Florida",
        cities: "Miami · Fort Lauderdale · West Palm Beach",
        focus: "Bilingual pages and around-the-clock emergency ads",
      },
      {
        name: "Tampa Bay",
        cities: "Tampa · St. Petersburg · Clearwater",
        focus: "Coastal service areas and system-replacement offers",
      },
    ],
    other: "Serving a Florida town that isn't listed? We cover it too.",
  },
  reviews: {
    title: "Reviews From Owners We've Helped Grow",
    lead: "Real Google reviews from home service businesses we work with.",
  },
  pricing: {
    title: "Florida HVAC Marketing Pricing",
    lead: [
      "Plans run month to month. Ad budgets are billed separately at a 0% markup, and ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "getting a suspended profile back",
      },
      " is covered on every plan.",
    ],
    compareTitle: "Compare the Florida Plans",
    compareLead: "From a single city to statewide coverage.",
    addOnsTitle: "Extras for Busy Months",
    addOnsLead: "More city pages or ad campaigns for summer and storm season.",
    customTitle: "Several Florida locations?",
    customText: "Send us your branches and service areas for a custom quote.",
  },
  faq: {
    title: "Florida HVAC Marketing Questions",
    lead: "Costs, cities, Spanish, storms and licensing. Still unsure? Call us.",
    items: [
      {
        q: "Can you market my HVAC company in Spanish?",
        a: "Yes. We build Spanish service pages, Google posts, review requests and ads for areas where homeowners search in Spanish.",
      },
    ],
  },
  audit: {
    title: "Request Your Free Florida HVAC Marketing Audit",
    lead: [
      "We check your Map Pack spot in each Florida city you serve, your Google profile, ",
      { href: "/services/web-design", label: "website" },
      " and reviews, then show you where those calls are going instead.",
    ],
    points: [
      "Every Florida city you serve, checked",
      "English and Spanish searches covered",
      "Plans from $297/mo, month to month",
    ],
    form: {
      formType: "hvac-marketing-florida",
      badge: "Free Florida audit",
      title: "Get Your Free Florida HVAC Audit",
      subtitle: "Costs nothing and commits you to nothing.",
      submitText: "Send My Florida Audit",
      messageLabel: "Your Florida cities and services",
      messagePlaceholder: "e.g. Tampa and St. Pete, AC repair and new installs",
    },
  },
  banner: {
    title: "Turn Florida's Endless Summer Into Booked Jobs",
    lead: "Start with a free look at your Map Pack spot in every city you serve.",
    icons: ["sun", "storm"],
  },
};
