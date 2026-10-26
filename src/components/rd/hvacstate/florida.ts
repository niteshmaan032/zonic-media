/* Florida HVAC marketing — redesign draft copy (24 Oct 2026).

   Owner rules for this page: fresh wording for every heading and paragraph
   (nothing from the live Florida page or the new HVAC agency draft, same
   message in different words), new UI components, relevant sections only,
   few figures.

   Semrush US data pulled 24 Oct 2026:
   - the live URL ranks only for "hvac marketing company fl" (#19, 70/mo);
   - agency terms are small: hvac marketing florida 40 · hvac marketing
     agency florida 30 · hvac marketing company florida 30 · hvac seo tampa
     50 · hvac marketing miami 20 · hvac contractors florida 70;
   - homeowner AC searches carry the demand and the cost. Average CPC for
     "ac repair <city>": Jacksonville $72.14 · Orlando $69.57 · Tampa
     $66.47 · Fort Myers $55.06 · Sarasota $51.52 · Miami $23.59. Not
     shown on the page (owner, 25 Oct: no cost figures anywhere).
   - "ac repair <city>" volumes for 12 cities sum to 12,550/mo (Sarasota
     1,900 · Tampa 1,600 · Orlando 1,600 · Miami 1,300 · Cape Coral 1,300 ·
     Jacksonville 1,000 · Fort Myers 880 · West Palm Beach 880 · Fort
     Lauderdale 720 · Tallahassee 590 · St. Petersburg 390 · Naples 390),
     shown as "12,500+" in the hero stats.
   - Title/H1 wording (24 Oct, owner asked): title keeps "HVAC Marketing
     Company FL" (the one term the live URL ranks for, 70/mo); the H1 uses
     "agency" (hvac marketing agency 2,900/mo nationally vs company 1,900;
     hvac marketing agency orlando 40, florida 30).
   Owner (24 Oct): no images on location pages; stats instead.
   The only other figures are sitewide verified ones ($297 plans, 0%
   ad-spend markup, 900+ reinstated). No third-party company is named in a
   claim. */

export const FL_META = {
  title: "HVAC Marketing Company FL | Florida HVAC Marketing Agency",
  description:
    "Florida HVAC marketing for contractors in Miami, Tampa, Orlando and Jacksonville: Map Pack rankings, leaner Google Ads, Spanish pages and storm plans.",
  keywords: [
    "hvac marketing company fl",
    "hvac marketing florida",
    "hvac marketing agency florida",
    "hvac marketing company florida",
    "florida hvac marketing",
    "hvac seo florida",
    "hvac seo tampa",
    "hvac marketing miami",
    "hvac marketing jacksonville",
    "hvac contractors florida",
  ],
};

/* How we grow a Florida HVAC company (owner, 24 Oct: show clients what we
   offer and how we grow them, e.g. Google Maps rankings and AI
   recommendations, not when HVAC demand peaks). Each row has its own UI. */
export const FL_GROWTH = [
  {
    key: "maps",
    title: "Show Up First on Google Maps in Your Florida City",
    body: "When an Orlando homeowner searches “AC repair near me,” three companies appear on the map before anything else. We tune your Google Business Profile, city pages and reviews so yours is one of them, in every city you cover.",
    points: [
      "Profile fully optimized",
      "City service areas",
      "Weekly photos and posts",
      "License number shown",
    ],
    cta: "See My Maps Ranking",
  },
  {
    key: "ai",
    title: "Get Named When Floridians Ask AI for an AC Company",
    body: "More homeowners now ask ChatGPT, Gemini and Google's AI Overviews who to call. We make your business easy for them to trust and quote, with matching listings, fresh reviews and clear answers on your site, in English and Spanish.",
    points: [
      "Matching business listings",
      "Reviews that name your services",
      "Answer-first service pages",
      "Spanish versions included",
    ],
    cta: "Check My AI Visibility",
  },
  {
    key: "reviews",
    title: "Earn a New Google Review After Every Job",
    body: "A text goes out the moment a job closes, in English or Spanish, asking for a Google review. Happy customers leave one in a tap, and we reply for you, so your rating and review count keep climbing.",
    points: [
      "Automatic text requests",
      "English and Spanish",
      "Replies written for you",
      "Reviews shown on your site",
    ],
    cta: "Grow My Reviews",
  },
];

/* Average cost per click for "ac repair <city>" (Semrush US, 24 Oct 2026). */
/* Example Florida ad setup per city: what runs there. No costs. */
export const FL_AD_SETUP: [city: string, runs: string[]][] = [
  ["Jacksonville", ["Call-only", "LSA"]],
  ["Orlando", ["Call-only", "Search"]],
  ["Tampa", ["LSA", "Search"]],
  ["Fort Myers", ["Storm-season push"]],
  ["Miami", ["Search", "Remarketing"]],
];

export const FL_AD_POINTS = [
  "Call-only campaigns",
  "City-level targeting",
  "Local Services Ads",
  "Calls tracked to booked jobs",
];

/* What we run, as rows. `links` keeps every internal link the live page
   carried (anchor text rewritten). */
export const FL_SERVICES: {
  key: string;
  points: string[];
  title: string;
  body: string;
  links: { href: string; label: string }[];
}[] = [
  {
    key: "map",
    points: [
      "Full profile setup",
      "City service areas",
      "License number shown",
    ],
    title: "Map Pack Rankings in Every Florida City",
    body: "Categories, service areas, photos and your state license details, tuned until you hold a top-three spot in each city you cover.",
    links: [
      {
        href: "/local-seo-google-business-optimization",
        label: "Google profile optimization",
      },
    ],
  },
  {
    key: "seo",
    points: [
      "A page for every city",
      "Spanish service pages",
      "Matching directory listings",
    ],
    title: "City and Spanish-Language SEO",
    body: "A page for each city you serve, Spanish versions where they pay off, and directory listings that match word for word.",
    links: [
      {
        href: "/services/industry/local-seo-services-for-hvac",
        label: "HVAC local SEO",
      },
    ],
  },
  {
    key: "ads",
    points: [
      "Local Services Ads setup",
      "Storm-season campaigns",
      "Calls tied to booked jobs",
    ],
    title: "Leaner Google Ads",
    body: "Call-only and Local Services Ads with tight service areas and negative keywords, so pricey Florida clicks turn into booked jobs.",
    links: [{ href: "/services/google-ads", label: "Google Ads management" }],
  },
  {
    key: "web",
    points: [
      "Tap-to-call buttons throughout",
      "Storm-service banner",
      "City and service pages",
    ],
    title: "Websites Built for Phone Calls",
    body: "Quick mobile sites with click-to-call, a storm-service banner you can switch on, and a page for every city and service.",
    links: [{ href: "/services/web-design", label: "Website design" }],
  },
  {
    key: "reviews",
    points: [
      "Texts after every job",
      "English and Spanish requests",
      "Owner replies written",
    ],
    title: "A Steady Stream of New Reviews",
    body: "A text after each job asks for a review in English or Spanish, and we write the replies for you.",
    links: [
      {
        href: "/services/local-seo-for-home-services",
        label: "Home services local SEO",
      },
    ],
  },
  {
    key: "rescue",
    points: [
      "Suspension appeals",
      "Verification fixes",
      "900+ profiles reinstated",
    ],
    title: "Suspended or Unverified Profiles",
    body: "A locked Google profile shouldn't cost you a summer. We fix suspensions and stuck verifications, and we've reinstated 900+ profiles.",
    links: [
      {
        href: "/services/gbp-reinstatement-service",
        label: "Reinstatement",
      },
      { href: "/services/gmb-verification-help", label: "Verification help" },
    ],
  },
];

/* Regions we cover, each with what we focus on there. */
export const FL_REGIONS: { name: string; cities: string; focus: string }[] = [
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
  {
    name: "Central Florida",
    cities: "Orlando · Kissimmee · Lakeland",
    focus: "New-home installs in fast-growing suburbs",
  },
  {
    name: "Southwest Florida",
    cities: "Fort Myers · Cape Coral · Naples",
    focus: "Storm-ready pages and seasonal-home tune-ups",
  },
  {
    name: "Sarasota & Bradenton",
    cities: "Sarasota · Bradenton · Venice",
    focus: "Maintenance plans and indoor air quality add-ons",
  },
  {
    name: "North Florida",
    cities: "Jacksonville · Tallahassee · Pensacola",
    focus: "Wide service areas and heat pump work",
  },
];

/* Florida questions, answered fresh. Shared with the FAQPage JSON-LD. */
export const FL_FAQS = [
  {
    q: "What does a Florida HVAC marketing plan cost?",
    a: "Our plans start at $297 a month and run month to month. Ad budgets are billed separately with a 0% markup. In busy metros like Tampa, Orlando and Jacksonville we lean on Map Pack rankings and Local Services Ads, so more of your calls come without paying per click.",
  },
  {
    q: "Which parts of Florida do you cover?",
    a: "The whole state: South Florida, Tampa Bay, Central Florida, Southwest Florida, Sarasota and Bradenton, and North Florida from Jacksonville to Pensacola. You get an HVAC marketing consultant in FL who plans the work, and each city you serve gets its own page and Map Pack work.",
  },
  {
    q: "Can you market my HVAC company in Spanish?",
    a: "Yes. We build Spanish service pages, Google posts, review requests and ads for areas where homeowners search in Spanish, such as Miami-Dade, Broward and parts of Orlando and Tampa.",
  },
  {
    q: "How should a Florida HVAC company prepare for hurricane season?",
    a: "Before June 1, we publish storm-damage and replacement pages, prepare emergency ads you can switch on in minutes, and set up Google profile updates for hours and service changes. After a storm, review requests go out as jobs close.",
  },
  {
    q: "Is there a slow season for HVAC marketing in Florida?",
    a: "Not really. Cooling calls arrive all year. In the milder months we shift budget toward tune-ups, maintenance plans, heat pump checks and homes that seasonal residents are reopening.",
  },
  {
    q: "Should my Florida HVAC license number appear online?",
    a: "Yes. Florida requires air conditioning contractors to hold a state license, and homeowners can look it up. We add your license number to your website, Google profile and directory listings so it backs up every call.",
  },
  {
    q: "What if my Google Business Profile is suspended or won't verify?",
    a: "We handle both. Reinstatement and verification help are part of every plan, and we've brought back 900+ suspended profiles.",
  },
];
