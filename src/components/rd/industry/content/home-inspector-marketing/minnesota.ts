import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* MINNESOTA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Semrush returned no_api_units on 24 Oct, so keywords and angles come from
   web research. Rank safety: the live title's core term "Home Inspector
   Marketing in Minnesota" opens the title, and every live keywords-meta
   phrase sits in the title, H1, an H2/H3 or an FAQ question. Verified facts
   used: Minnesota has no state license for private home inspectors;
   Minneapolis and St. Paul require a Truth in Sale of Housing (TISH)
   evaluation by a city-licensed evaluator before a home is marketed;
   radon measurement professionals are licensed by MDH (Minn. Stat.
   144.4961); sellers must give buyers radon information at sale. */

export const CONTENT: LocationContent = {
  draftSlug: "minnesota-2",
  liveUrl: "/services/home-inspector-marketing/minnesota",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Minnesota",
  meta: {
    title: "Home Inspector Marketing in Minnesota | Minneapolis & St. Paul",
    description:
      "Minnesota home inspector marketing for Minneapolis, St. Paul, Rochester and Duluth: Google Maps rankings, TISH and radon pages, ads and reviews.",
    keywords: [
      "home inspector marketing minnesota",
      "home inspector seo minnesota",
      "home inspector minneapolis",
      "best home inspector minneapolis",
      "home inspection rochester mn",
      "home inspection duluth mn",
      "home inspectors mn",
      "home inspection minnesota cost",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation minnesota",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.roseBlue,
  hero: {
    h1: "Minnesota Home Inspector Marketing Agency, Metro to North Shore",
    h1NoWrap: "North Shore",
    lead: [
      "Minnesota buyers find home inspectors on Google and through agents, and sellers in Minneapolis and St. Paul need a licensed TISH evaluator before listing. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "marketing for home inspectors",
      },
      " reaches both groups, with map rankings, radon pages and steady reviews from Rochester to Duluth.",
    ],
    cta: "Get My Minnesota Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top of the map in your Minnesota city",
        sub: "Twin Cities suburbs, Rochester, Duluth and lake country",
        chips: [
          "Minneapolis",
          "St. Paul",
          "Rochester",
          "Duluth",
          "+ your city",
        ],
      },
      left: {
        icon: "file",
        title: "More TISH evaluations",
        sub: "Seller-side pages for city-required reports",
      },
      right: {
        icon: "check",
        title: "Radon add-ons that book",
        sub: "Pages built around licensed radon testing",
      },
      bottom: {
        title: "Booked through the short spring market",
        sub: "Ads and pages running before the thaw",
      },
    },
  },
  services: {
    title: "Marketing Services for Minnesota Home Inspection Companies",
    lead: "Minnesota inspection companies: every lead channel, one partner.",
    cta: "Audit My Minnesota Marketing",
    items: [
      {
        icon: "pin",
        title: "Twin Cities Map Pack Work and Beyond",
        desc: "Your Google profile gets suburb coverage, TISH and radon listed as services and photos from actual jobs, so you rise in Minneapolis, St. Paul and the ring suburbs.",
        points: [
          "Suburb service areas",
          "TISH and radon listed",
          "Photos from each job",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile tuning",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO, Minnesota Cities Plus TISH and Radon",
        desc: "City pages from Bloomington to Duluth, plus pages for TISH evaluations, radon testing and sewer scopes where buyers search for them.",
        points: [
          "Page for every city",
          "TISH evaluation pages",
          "Radon and sewer scope",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Paid Search Paced to Minnesota's Spring Market",
        desc: "Campaigns on Google search and Local Services that target accepted-offer buyers by suburb and scale up as spring listings arrive.",
        points: [
          "Under-contract buyer ads",
          "Suburb-level targeting",
          "Seasonal budget pacing",
        ],
        links: [{ href: "/services/google-ads", label: "Google Ads services" }],
      },
      {
        icon: "monitor",
        title: "Inspection Websites Built for Minnesota Buyers and Sellers",
        desc: "Mobile sites where buyers book an inspection and sellers book a TISH evaluation, each with clear scope, sample reports and quick scheduling.",
        points: [
          "Buyer and seller paths",
          "Sample reports posted",
          "Online scheduling",
        ],
        links: [{ href: "/services/web-design", label: "Website design" }],
      },
      {
        icon: "star",
        title: "Reviews and Agent Trust Across Minnesota",
        desc: "Review requests after every report and a referral page agents can forward, so your name travels from one closing to the next.",
        points: [
          "Asked after each report",
          "Forwardable agent page",
          "Replies drafted for you",
        ],
        links: [{ href: "/services", label: "Our full service list" }],
      },
      {
        icon: "shield",
        title: "Fixes for Suspended Minnesota Inspector Listings",
        desc: "A suspended or unverified Google listing hides you from buyers. We work out why, correct it and see the appeal through, with 900+ profiles already reinstated.",
        points: [
          "Cause found and fixed",
          "Verification support",
          "900+ profiles reinstated",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
    ],
  },
  growth: {
    title:
      "Home Inspector Lead Generation: Minnesota Buyers, Sellers and Agents",
    lead: "Three ways we fill your calendar: map rankings, answers from AI assistants and a site that books both sides of a sale.",
    rows: [
      {
        title: "Rank as the Best Home Inspector Minneapolis Buyers Can Find",
        body: [
          "Searches for the best home inspector in Minneapolis end on the map, where the top three pins get the first calls. We build out your profile, Edina and Bloomington pages and a steady stream of reviews, so your pin earns a place among them.",
        ],
        points: [
          "Suburb-by-suburb coverage",
          "TISH listed as a service",
          "Photo posts every week",
          "Grid rank reports",
        ],
        cta: "Check My Minneapolis Ranking",
        ui: {
          kind: "maps",
          query: "best home inspector minneapolis",
          city: "Minneapolis",
          category: "Home inspector · TISH evaluations",
        },
      },
      {
        title: "AI SEO for Home Inspectors Answering Minnesota Radon Questions",
        body: [
          "Minnesota buyers ask AI assistants whether a radon test is worth it and who can run one near Rochester. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO program" },
          " puts those answers on your pages, syncs every directory listing and marks up the site, so ChatGPT and Google's AI can name your company.",
        ],
        points: [
          "Radon answer pages",
          "License details listed",
          "Structured data on key pages",
          "Consistent directory details",
        ],
        cta: "Test My AI Answers",
        ui: {
          kind: "ai",
          query: "home inspection rochester mn",
          intro: "For a home inspection in Rochester, MN,",
          bullets: [
            "MDH-licensed radon testing",
            "Sewer scope add-on",
            "Serves Byron and Stewartville",
          ],
        },
      },
      {
        title: "A Site That Books Inspections and TISH Evaluations",
        body: [
          "Minneapolis and St. Paul sellers need a city-licensed TISH evaluator before they list, and buyers need an inspector soon after. If you hold both credentials, your site should book both in a few taps, with scope, sample reports and open times on every page.",
        ],
        points: [
          "Buyer and seller booking",
          "TISH pages by city",
          "Sample reports online",
          "Mobile-first speed",
        ],
        cta: "Plan My Booking Site",
        ui: {
          kind: "website",
          url: "yourcompany.com/minneapolis",
          headline: "Inspections and TISH reports, booked online",
          services: [
            "Buyer inspection",
            "TISH evaluation",
            "Radon test",
            "Sewer scope",
          ],
        },
      },
    ],
  },
  regions: {
    title: "Where We Grow Home Inspectors, MN Metro to Lake Country",
    lead: "Metro suburbs, river towns and lake country each search differently, so each gets its own pages and ad settings.",
    items: [
      {
        name: "Minneapolis & West Metro",
        cities: "Minneapolis · Bloomington · Edina · Plymouth",
        focus: "TISH pages and suburb-level map work",
      },
      {
        name: "St. Paul & East Metro",
        cities: "St. Paul · Woodbury · Maplewood · Stillwater",
        focus: "Disclosure-report sellers and older-home buyers",
      },
      {
        name: "North & South Metro",
        cities: "Blaine · Coon Rapids · Eagan · Burnsville",
        focus: "New-build and move-up buyer searches",
      },
      {
        name: "Southern Minnesota",
        cities: "Rochester · Mankato · Owatonna · Winona",
        focus: "Radon and relocating-buyer pages near Rochester",
      },
      {
        name: "Duluth & North Shore",
        cities: "Duluth · Hermantown · Cloquet · Two Harbors",
        focus: "Hillside homes, wells and cabin inspections",
      },
      {
        name: "St. Cloud & Lake Country",
        cities: "St. Cloud · Brainerd · Alexandria · Baxter",
        focus: "Lake cabin, well and septic inspection pages",
      },
    ],
    other: "Inspecting in another Minnesota town? We'll plan pages for it too.",
  },
  reviews: {
    title: "Owners Rate Our Work 5.0 on Google",
    lead: "Reviews from home service businesses that let us run their marketing.",
  },
  pricing: {
    title: "Minnesota Home Inspector Marketing Pricing",
    lead: [
      "No plan locks you in beyond a month, and we never mark up ad spend. Locked out of Google? Ask about ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended profile reinstatement",
      },
      ".",
    ],
    compareTitle: "Minnesota Plans, Side by Side",
    compareLead: "From one metro suburb to statewide coverage.",
    addOnsTitle: "Add-Ons for the Spring Thaw",
    addOnsLead: "Extra city pages or ad budget when listings jump.",
    customTitle: "Inspectors in the metro and up north?",
    customText: "Send your cities and team size for one quote.",
  },
  faq: {
    title: "Minnesota Home Inspection Marketing, Answered",
    lead: "TISH, radon, licensing and cities. Anything else? Our team picks up the phone.",
    items: [
      {
        q: "Do home inspectors in Minnesota need a state license to advertise?",
        a: "No. Minnesota doesn't license private home inspectors, so you can advertise statewide. Cities are different: Minneapolis, St. Paul and some suburbs license their own TISH evaluators, and radon testers must be licensed by MDH, the state health department. We show whichever credentials you hold.",
      },
      {
        q: "Can TISH evaluations bring my company more inspection work?",
        a: "Yes. Sellers in Minneapolis and St. Paul must have a TISH report before marketing a home, so a well-ranked TISH page reaches them weeks before buyers appear. A clear, fair evaluation also puts your name in front of the listing agent, who works with many future buyers.",
      },
      {
        q: "How should my site handle “home inspection Minnesota cost” searches?",
        a: "Answer them with your own fee guide. Explain what a standard inspection covers, how square footage, home age and extras such as radon move the fee, and when a TISH evaluation is billed separately. Buyers who understand the price book faster, and the page can rank for cost searches.",
      },
      {
        q: "Can I rank for home inspection Rochester MN and home inspection Duluth MN from the Twin Cities?",
        a: "Only partly, unless you work there. Map rankings favor businesses near the searcher, so a metro address rarely wins Rochester or Duluth map results. City pages and reviews can still rank in regular results, and a real local office can carry its own Google profile.",
      },
      {
        q: "Should Minnesota inspectors market radon testing separately?",
        a: "Yes. Radon testing gets searched on its own, and Minnesota sellers must give buyers radon information at sale, so buyers ask about it early. A dedicated page showing your MDH radon license and test method turns those searches into add-on bookings; one line in a service list rarely does.",
      },
      {
        q: "When should Minnesota home inspectors start spring marketing?",
        a: "In winter. Listings climb as the snow melts, and companies that start pages and reviews in January go into April with stronger rankings. We launch ads a few weeks before the thaw, raise budgets through the peak and pull back once the season cools.",
      },
      {
        q: "How much does Minnesota home inspector marketing cost?",
        a: "Plans come in at $297, $750 or $1,500, each billed month to month. We never mark up ad spend, so you pay Google exactly what the clicks cost. Bigger plans cover more cities, more pages and paid campaigns across the metro and outstate.",
      },
    ],
  },
  audit: {
    title: "Your Free Minnesota Home Inspector Marketing Audit",
    lead: [
      "We look at where you appear for Minneapolis, St. Paul and outstate searches, reviews your profile, site, reviews and TISH or radon pages, and shows what's costing you bookings. Working in neighboring states? We also grow inspectors in ",
      {
        href: "/services/home-inspector-marketing/wisconsin",
        label: "Wisconsin",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/michigan",
        label: "Michigan",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/illinois",
        label: "Illinois",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/missouri",
        label: "Missouri",
      },
      ".",
    ],
    points: [
      "Metro and outstate cities checked",
      "TISH and radon pages reviewed",
      "Monthly plans, $297 up to $1,500",
    ],
    form: {
      formType: "home-inspector-marketing-minnesota",
      badge: "Free Minnesota audit",
      title: "Claim Your Free Minnesota Audit",
      subtitle: "Free, fast and no commitment.",
      submitText: "Send My Minnesota Audit",
      messageLabel: "Your Minnesota cities and services",
      messagePlaceholder: "e.g. Edina and Richfield, TISH and radon testing",
    },
  },
  banner: {
    title: "Own Your City's Map Results Before the Spring Thaw",
    lead: "Begin with a free check of your rankings across the metro and outstate.",
    icons: ["inspect", "snow"],
  },
};
