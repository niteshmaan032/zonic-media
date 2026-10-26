/* Local SEO for Appliance Repair — redesign draft copy (26 Oct 2026).
   Brief: docs/local-seo-redesign-brief.md. Fresh copy; nothing reused from
   the live page, the electricians reference, /services/seo-services-2 or
   /services/appliance-repair-marketing-agency-2.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: appliance repair seo 302
     impressions (pos 30.4) · seo for appliance repair 288 (33.5) · local
     seo for appliance repair 212 (27.9) · appliance repair seo services
     138 (21.5) · appliance repair company seo 40 · appliance repair seo
     agency 36 · local seo tips for appliance repair 27 · appliance seo 7.
   - Semrush US: seo for appliance repair 320 (KD 7) · appliance repair seo
     260 (13).
   - Web research (ServiceWorks, Clicks Geek, Ignite, 1Digital, vendor
     GBP guides): customers search the symptom ("fridge not cooling",
     "washer won't drain"), the error code or brand + appliance, more than
     "appliance repair near me"; GBP advice is Appliance repair service as
     primary with each appliance listed as its own service. Top pages skip
     DIY-safety limits, warranty-network competition and AI answers for
     fault questions — each became a FAQ. Brand names are kept generic on
     the page (owner rule: never name another company).
   - Title keeps the live title as is: it already carries "Appliance
     Repair SEO", "SEO for Appliance Repair" and "Local SEO for Appliance
     Repair" (all three top GSC terms); the H1 leads with "Appliance Repair
     SEO" and the hero lead adds "appliance repair SEO services". */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-appliance-repair",
  audience: "Appliance repair companies and technicians",
  serviceName: "Local SEO for Appliance Repair",
  meta: {
    title: "Appliance Repair SEO | Local SEO for Appliance Repair",
    description:
      "Appliance repair SEO services that rank your company on Google Maps, local results and AI answers for fridge, washer, dryer and oven repairs. Free audit.",
    keywords: [
      "appliance repair seo",
      "seo for appliance repair",
      "local seo for appliance repair",
      "appliance repair seo services",
      "appliance repair company seo",
      "appliance repair seo agency",
      "appliance repair local seo",
      "seo for appliance repair companies",
      "appliance seo",
    ],
  },
  hero: {
    h1Lead: "Appliance Repair SEO",
    h1Rest: "That Books Fridge, Washer and Oven Calls",
    icon: "repair",
    lead: [
      "People with a warm fridge or a washer full of water search the symptom, then call a nearby tech. Our appliance repair SEO services tune your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile",
      },
      ", build appliance, brand and town pages, and trace each booked call.",
    ],
    cta: "Get My Free Repair Shop Audit",
    ui: {
      kind: "growth",
      maps: "pack",
      ai: "chat",
      growth: "calendar",
      business: "Your Appliance Repair",
      category: "Appliance repair service",
      query: "refrigerator repair near me",
      aiPrompt: "My fridge stopped cooling. Who repairs it nearby?",
      aiReasons: ["Repairs major brands", "Next-day appointments"],
      growthLabel: "Repair visits this week",
      leads: [
        ["Fridge not cooling", "Google Maps"],
        ["Washer won't drain", "AI answer"],
        ["Oven repair", "Brand page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top listing",
          title: "First Call for Fridge and Washer Repair",
          text: "Brand and appliance pages lift your listing to the top of local results.",
        },
        {
          label: "AI answers",
          badge: "Recommended",
          title: "Suggested When a Machine Breaks Down",
          text: "AI assistants match symptoms like 'not cooling' to your repair pages.",
        },
        {
          label: "Bookings",
          badge: "Full week",
          title: "Repair Visits Filling the Calendar",
          text: "Booked visits arrive straight from Maps, AI answers and brand pages.",
        },
      ],
    },
  },
  searches: {
    title: "Appliance Searches We Turn Into Repair Calls",
    lead: "We shape your pages and profile around the symptoms and model names people type when an appliance quits.",
    groups: [
      {
        icon: "kitchen",
        label: "Kitchen appliance repair searches",
        terms: [
          "refrigerator repair near me",
          "fridge not cooling",
          "dishwasher not draining",
          "oven not heating",
          "ice maker not working",
          "freezer repair near me",
        ],
      },
      {
        icon: "clean",
        label: "Laundry appliance repair searches",
        terms: [
          "washer repair near me",
          "washer won't spin",
          "dryer not heating",
          "washing machine leaking",
          "dryer repair same day",
          "washer error code fix",
        ],
      },
      {
        icon: "pin",
        label: "Brand and town appliance searches",
        terms: [
          "brand + refrigerator repair",
          "appliance repair + your city",
          "appliance repair open today",
          "built-in fridge repair near me",
          "stove repair near me",
          "appliance technician near me",
        ],
      },
    ],
  },
  services: {
    title: "Appliance Repair SEO Services\nfor Techs on the Road",
    lead: "Monthly work aimed at the appliances, brands and towns that keep your vans moving.",
    cta: "Audit My Repair Website",
    items: [
      {
        icon: "pin",
        title: "Appliance Repair Profile and Maps Setup",
        desc: "Appliance repair service as primary, each appliance added as a listed service with its own description, service towns mapped and van photos posted.",
        points: [
          "Primary category set",
          "Services per appliance",
          "Tech and van photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile work",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help with verification",
          },
        ],
      },
      {
        icon: "file",
        title: "Appliance, Brand and Town Pages",
        desc: "Pages for refrigerators, washers, dryers, dishwashers and ranges, the brands you service, and each town on your routes, written around symptoms.",
        points: [
          "Symptom-led repair pages",
          "Brand and model pages",
          "Town route pages",
        ],
        links: [
          {
            href: "/services/appliance-repair-website-design",
            label: "Appliance repair websites",
          },
        ],
      },
      {
        icon: "star",
        title: "Appliance Repair Reviews by Job",
        desc: "A review text lands right after the repair, nudging customers to name the appliance, the problem and how quickly the tech showed up.",
        points: [
          "Post-repair texts",
          "Appliance named in reviews",
          "Fast owner replies",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Technical SEO for Appliance Repair Sites",
        desc: "Speed for phones, repair-service schema, clean URLs for brand pages and fixed crawl errors, so Google indexes every appliance and town.",
        points: [
          "Mobile speed fixes",
          "Repair-service schema",
          "Clean brand URLs",
        ],
        links: [
          { href: "/services/web-design", label: "Web design that ranks" },
        ],
      },
      {
        icon: "layers",
        title: "Appliance Repair Citations and Links",
        desc: "Consistent details across directories and map apps, plus links from parts suppliers, property managers, realtors and neighborhood news sites.",
        points: [
          "Directory consistency",
          "Parts supplier links",
          "Property manager links",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile recovery",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Appliance Fault Questions",
        desc: "Clear answers on error codes, repair-or-replace and common faults, plus steady business details, so ChatGPT and AI Overviews recommend your shop.",
        points: [
          "Error code answers",
          "Repair-or-replace guides",
          "AI recommendation checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Appliance Repair SEO Keeps Your Routes Full",
    lead: "More map visibility, AI citations for fault questions and calls tied to the page that won them.",
    rank: {
      title: "Rank for the Appliances and Brands You Fix",
      body: [
        "Most people search the symptom or the brand, not just “appliance repair”. We map those searches by appliance and town, publish a page for each worthwhile one, and track positions weekly so gaps against nearby repair shops stay visible.",
      ],
      points: [
        "Symptom keyword map",
        "Brand page targets",
        "Town rank tracking",
        "Weekly position report",
      ],
      cta: "Show My Appliance Repair Gaps",
      keywords: [
        ["refrigerator repair near me", 19, 3],
        ["washer repair + your city", 26, 2],
        ["dryer not heating repair", 33, 4],
        ["dishwasher repair near me", 22, 3],
      ],
    },
    ai: {
      title: "Get Named When People Ask AI About a Fault",
      body: [
        "People now type error codes and symptoms into AI tools before they book a tech. Answer-first fault pages, brand coverage and reviews that describe real repairs give those tools a reason to point to you, the same base our ",
        { href: "/services/ai-seo-services", label: "AI search team" },
        " builds.",
      ],
      points: [
        "Fault and error code FAQs",
        "Brand coverage facts",
        "Listings that match",
        "AI answer tracking",
      ],
      cta: "Check My Appliance AI Mentions",
      query: "washer won't drain who can fix it near me",
      intro: "For a washer that won't drain nearby,",
      bullets: [
        "Services major brands",
        "Detailed washer repair page",
        "Reviews about quick visits",
      ],
    },
    leads: {
      title: "Connect Every Appliance Repair Call to a Page",
      body: [
        "We tag calls and booking forms with the page and search behind them, keep tap-to-call visible on mobile, and run ",
        {
          href: "/services/google-ads",
          label: "Google Ads for appliance repair",
        },
        " on days when the schedule still has open slots.",
      ],
      points: [
        "Calls tagged by source",
        "Tap-to-call on mobile",
        "Booking form per appliance",
        "Monthly repair lead report",
      ],
      cta: "Trace My Repair Call Sources",
      items: [
        ["Fridge not cooling call", "Google Maps", "Mon 8:30 AM"],
        ["Washer repair booking", "Washer page", "Mon 12:45 PM"],
        ["Error code query", "AI Overview link", "Wed 10:05 AM"],
        ["Oven repair request", "Town page", "Tue 3:50 PM"],
      ],
    },
  },
  results: {
    title: "How Appliance Repair Shops Grow With Zonic",
    lead: "A tidy listing first, then appliance and brand pages, then reviews and calls that fill each route.",
    cta: "Build My Appliance Repair Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Repair Listing Tidied Up",
        text: "Category, appliance services and service towns are fixed so your profile lines up with more fault searches.",
      },
      {
        when: "Month 1",
        title: "Appliance and Brand Pages Published",
        text: "Fridge, washer, dryer and brand pages start competing for the symptoms people type before calling.",
      },
      {
        when: "Months 2–4",
        title: "Climbing the Local Map",
        text: "Post-repair reviews and parts-supplier links tend to lift your listing across more of your route.",
      },
      {
        when: "Month 4 onward",
        title: "Fuller Daily Repair Routes",
        text: "More booked visits for the appliances you want, each one logged with the page and search that produced it.",
      },
    ],
    wins: [
      {
        icon: "kitchen",
        title: "More Calls for Fridge and Washer Faults",
        text: "People typing a symptom land on a page that explains it and lets them book a visit.",
      },
      {
        icon: "repair",
        title: "Brand Searches That Turn Into Bookings",
        text: "Pages for the brands you service often catch owners searching their model before they call anyone.",
      },
      {
        icon: "star",
        title: "Reviews Praising Quick Repair Visits",
        text: "Customers name the appliance and how fast the tech arrived, giving new callers a reason to trust you.",
      },
      {
        icon: "shield",
        title: "Less Dependence on Warranty Networks",
        text: "Direct calls from local search reduce how much work comes through shared lead sites and warranty dispatch.",
      },
    ],
  },
  compare: {
    title: "Zonic vs. a Typical SEO Shop for Appliance Repair",
    lead: "How our appliance repair SEO differs from what repair companies often get.",
    rows: [
      {
        topic: "Symptom and error code searches",
        other:
          "Targets only broad terms and skips the faults people actually type.",
        zonic:
          "Pages built around symptoms and error codes, each ending in a quick booking option.",
      },
      {
        topic: "Appliance brand coverage",
        other: "Either no brand pages at all, or thin ones for every name.",
        zonic:
          "Brand and model pages only for the makes you service often, with the parts you stock.",
      },
      {
        topic: "Appliance services on Google",
        other: "The profile lists one generic service and very few photos.",
        zonic:
          "Each appliance listed as its own service, with van and tech photos posted regularly.",
      },
      {
        topic: "DIY troubleshooting limits",
        other:
          "Blog tips that can encourage risky gas or sealed-system repairs.",
        zonic:
          "Safe checks only, with gas, sealed-system and electrical faults pointed to your technician.",
      },
      {
        topic: "Appliance repair call tracking",
        other:
          "Rank reports with no view of the repair visits actually booked.",
        zonic:
          "Calls and booking forms tagged by appliance, page and search, reviewed every month.",
      },
      {
        topic: "Terms for repair shops",
        other:
          "Lengthy contracts are common, signed before any booked repairs can be counted.",
        zonic:
          "Month to month, with listings, site and tracking held in your business name.",
      },
    ],
  },
  steps: {
    title: "Appliance Repair Company SEO, Step by Step",
    lead: "As an appliance repair SEO agency, we fix the listing and site before anything else, then add pages, reviews and links on a monthly rhythm.",
    items: [
      {
        h: "Audit Your Appliance Repair Map Spots",
        p: "We look at where your listing and site stand against the repair shops above you in each town, then list the appliances and brands to target first.",
      },
      {
        h: "Fix the Profile, Publish Appliance Pages",
        p: "Category, services and speed fixes go live first; appliance, brand and town pages follow, with review texts sent after each repair.",
      },
      {
        h: "Report Appliance Repair Calls Monthly",
        p: "You get rankings, calls and bookings by appliance and town each month, and we steer the next round toward the repairs that paid.",
      },
    ],
    audit: [
      ["Fridge repair rank", "behind"],
      ["Brand pages", "gap"],
      ["Post-repair reviews", "open"],
      ["Phone load time", "behind"],
    ],
    plan: [
      "Fridge page",
      "Washer page",
      "Brand pages",
      "Town pages",
      "Supplier links",
    ],
    launch: [
      "Profile corrected",
      "Appliance pages live",
      "Reviews rolling in",
      "Calls attributed",
    ],
  },
  explore: {
    title: "More Help for Appliance Repair Companies",
    lead: "A fast repair website and paid ads for open slots help rankings turn into a full schedule.",
    items: [
      {
        name: "Appliance Repair Marketing",
        sub: "One growth plan for repair shops",
        href: "/services/appliance-repair-marketing-agency",
        icon: "repair",
      },
      {
        name: "Appliance Repair Websites",
        sub: "Booking-first repair sites",
        href: "/services/appliance-repair-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Fill open slots this week",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Our approach across household trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Repair commercial kitchen gear too? One plan can cover both sides of the business.",
  },
  reviews: {
    title: "Owners Who Trusted Us With Their SEO, on Google",
    lead: "Real Google reviews from the service businesses we rank.",
  },
  pricing: {
    title: "Appliance Repair SEO Plans by the Month",
    compareTitle: "Compare Plans for Appliance Repair Shops",
    addOnsTitle: "Add-Ons for Appliance Repair Routes",
    customTitle: "Several Appliance Repair Territories?",
  },
  faq: {
    title: "Appliance Repair SEO Questions, Answered Plainly",
    lead: "Cost, timing, brand pages and how AI search treats repair companies.",
    items: [
      {
        q: "What is appliance repair SEO?",
        a: "Appliance repair SEO gets your company found when someone near you searches for a broken fridge, washer or oven. It covers your Business Profile, pages for each appliance, brand and town, review requests, citations and site fixes, so your listing reaches the Map Pack and your pages reach the first page of results.",
      },
      {
        q: "What do appliance repair SEO services cost?",
        a: "Our plans are $297, $750 or $1,500 a month on a month-to-month basis. One-van shops in a single town usually start with the first plan; multi-tech companies, wider routes or managed Google Ads usually call for a bigger plan. Your audit will suggest one.",
      },
      {
        q: "When will appliance repair SEO show results?",
        a: "Profile fixes and new appliance pages can move Maps positions within weeks. Broad terms like “appliance repair near me” in a large city take longer, often several months. Monthly reports show rankings, calls and bookings, so you can see which pages are pulling their weight.",
      },
      {
        q: "Should I build pages for each appliance brand I fix?",
        a: "For the brands you service often, yes. People searching a brand plus an appliance are ready to book, and a page per brand can list the models you cover and the parts you stock. Skip brands you rarely touch; thin pages for every name on the market add little.",
      },
      {
        q: "Which Google category fits an appliance repair company?",
        a: "Appliance repair service is the right primary for most companies. Add secondaries only for work you do, such as a refrigerator or washer specialty, and list each appliance as a separate service with a short description so the profile matches more symptom searches.",
      },
      {
        q: "Do symptom searches beat “appliance repair near me” for calls?",
        a: "They often convert better. Someone typing “fridge not cooling” or “washer won't drain” has a specific problem and wants it fixed now. Pages that explain the fault, say when to call a tech and offer a quick booking catch that searcher before they compare listings.",
      },
      {
        q: "Should appliance repair sites post DIY troubleshooting?",
        a: "Yes, within limits. Simple checks like a tripped breaker or a clogged filter build trust and earn AI citations. Gas, sealed-system and electrical faults should point to a technician. That balance keeps readers safe and shows Google your pages come from people who do the work.",
      },
      {
        q: "Can appliance repair SEO beat home warranty networks for calls?",
        a: "In your own towns, often yes. Warranty networks and shared lead sites rank nationally, but Maps results lean on proximity, reviews and a complete profile. A strong local listing, town pages and reviews that mention fast visits let a local shop win the direct call.",
      },
      {
        q: "Does AI search recommend appliance repair companies?",
        a: "Yes. ChatGPT, Gemini and Google AI Overviews now answer “who fixes washers near me” and fault questions. They tend to cite companies with clear appliance pages, matching listings and detailed reviews, so the same local SEO work also earns those mentions.",
      },
      {
        q: "Is there a contract for appliance repair SEO?",
        a: "No. Plans are month to month, accounts and listings are registered to your business, and each report lists the work we did. If your profile is suspended, our reinstatement service can help restore it.",
      },
    ],
  },
  audit: {
    title: "See Where Your Appliance Repair Shop Ranks",
    lead: [
      "Send your website and the appliances you want more calls for. We compare your Maps spot, pages and reviews with nearby repair shops, then return a written repair plan. You can also ",
      { href: "/about", label: "get to know Zonic" },
      " or look through ",
      { href: "/services", label: "all of our services" },
      ".",
    ],
    points: [
      "Maps spot by town",
      "Appliance keyword gaps",
      "Profile services review",
      "First-month repair plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free appliance repair SEO audit",
      title: "Ask for a Free Repair Shop Audit",
      subtitle: "Free, and you're never locked in.",
      submitText: "Send My Repair Audit Request",
      messageLabel: "Your website and the appliances you fix",
      messagePlaceholder:
        "yourwebsite.com, appliances and brands you service, and your towns",
    },
  },
  banner: {
    title: "Get the Call When the Fridge Goes Warm",
    lead: "Higher Maps spots, AI citations for fault questions, and every booked repair traced and reported.",
  },
};
