/* Local SEO for Flooring Companies — redesign draft copy (26 Oct 2026).
   Brief: docs/local-seo-redesign-brief.md. Fresh wording only; the live
   page, the electricians reference, /services/seo-services-2 and
   /services/flooring-marketing-agency-2 were checked for overlap.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: seo for flooring companies 532
     impressions (pos 34.5) · flooring company seo 329 (29.7) · flooring
     company seo services 257 (30.9) · flooring seo 214 (34.0) · flooring
     company local seo services 212 (16.0) · flooring company local seo
     135 (19.7) · seo services for flooring companies 103 · local seo for
     flooring companies 89 · local seo for flooring installers 79 · local
     seo for flooring contractors 78. "local seo cost for flooring
     company" (121) is answered by the cost FAQ only (no price talk
     elsewhere); "flooring company seo marketing" is left to the
     marketing page.
   - Semrush US: seo for flooring companies 590 (KD 10) · flooring seo
     320 (5).
   - Web research (seo for flooring companies, flooring GBP categories,
     hardwood/LVP/refinishing searches, AI search; top pages read: a
     flooring SEO guide and an agency flooring SEO page): both list
     generic tactics and skip the store-versus-installer split, sample
     and material questions, commercial work and AI answers. A category
     guide separates Flooring Store (staffed showroom) from Flooring
     Contractor (crews at customer sites). Added: store/installer
     category FAQ, material pages, a refinishing search group, a
     commercial FAQ and an installers FAQ.
   - Title keeps the live title (it already holds "Flooring SEO" and the
     top query); H1 uses the top query. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-flooring-companies",
  audience: "Flooring stores, flooring contractors and installers",
  serviceName: "Local SEO for Flooring Companies",
  meta: {
    title: "Flooring SEO Company | Local SEO for Flooring Companies",
    description:
      "SEO services for flooring companies and installers: Google Maps, material pages, install galleries, reviews and AI answers that bring showroom visits and measures.",
    keywords: [
      "seo for flooring companies",
      "flooring seo",
      "flooring company seo",
      "flooring seo company",
      "local seo for flooring companies",
      "flooring company seo services",
      "flooring company local seo services",
      "seo services for flooring companies",
      "local seo for flooring installers",
      "local seo for flooring contractors",
    ],
  },
  hero: {
    h1Lead: "SEO for Flooring Companies",
    h1Rest: "That Fills Your Showroom",
    icon: "layers",
    lead: [
      "Our flooring company SEO puts your store and install crews in front of shoppers searching hardwood, luxury vinyl, tile and carpet nearby. We set up your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", build a page for every material and town, and grow the reviews that win the free measure.",
    ],
    cta: "Get My Free Flooring Visibility Audit",
    ui: {
      kind: "growth",
      maps: "pin",
      ai: "chat",
      growth: "calendar",
      business: "Your Flooring Store",
      category: "Flooring store",
      query: "flooring store near me",
      aiPrompt: "Where can I see hardwood and LVP samples nearby?",
      aiReasons: ["Large sample showroom", "Install crews in-house"],
      growthLabel: "Showroom visits this week",
      leads: [
        ["Showroom visit", "Google Maps"],
        ["In-home measure", "AI answer"],
        ["LVP install", "Material page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top pin",
          title: "First Store on the Map for Floors",
          text: "Store hours, photos and reviews lift your pin for flooring searches.",
        },
        {
          label: "AI answers",
          badge: "Suggested",
          title: "Recommended for Samples and Installs",
          text: "AI tools point shoppers to your showroom and install services.",
        },
        {
          label: "Visits",
          badge: "Booked",
          title: "Showroom and Measure Visits Booked",
          text: "Visits and in-home measures fill the week straight from search.",
        },
      ],
    },
  },
  searches: {
    title: "Flooring Searches That Lead to a Measure or Store Visit",
    lead: "Shoppers search by material, by problem and by store, so we plan pages and profile details for all three.",
    groups: [
      {
        icon: "layers",
        label: "Flooring material searches",
        terms: [
          "luxury vinyl plank installation",
          "hardwood floor installers near me",
          "tile floor installation",
          "carpet installation near me",
          "engineered hardwood flooring",
          "laminate flooring installer",
        ],
      },
      {
        icon: "repair",
        label: "Floor repair and refinishing searches",
        terms: [
          "hardwood floor refinishing near me",
          "floor sanding and staining",
          "water damaged floor replacement",
          "squeaky floor repair",
          "stair tread replacement",
        ],
      },
      {
        icon: "pin",
        label: "Flooring store and showroom searches",
        terms: [
          "flooring store near me",
          "flooring showroom open today",
          "flooring contractor + your city",
          "free in-home flooring measure",
          "carpet store near me",
          "commercial flooring contractor",
        ],
      },
    ],
  },
  services: {
    title: "Flooring Company SEO Services\nfor Stores and Install Crews",
    lead: "Six services, each pointed at the materials and rooms you most want to sell and install.",
    cta: "Audit My Flooring Website",
    items: [
      {
        icon: "pin",
        title: "Business Profile Setup for Flooring Stores",
        desc: "Flooring Store or Flooring Contractor as primary based on how you sell, showroom hours, material list and fresh job photos each week.",
        points: [
          "Store vs contractor category",
          "Material list filled",
          "Weekly install photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get a listing verified",
          },
        ],
      },
      {
        icon: "file",
        title: "Flooring Material and Town Pages",
        desc: "Dedicated pages for hardwood, luxury vinyl, tile, carpet and refinishing, plus town pages featuring a nearby install, so each search finds its match.",
        points: [
          "One page per material",
          "Refinishing service page",
          "Town install pages",
        ],
        links: [
          {
            href: "/services/flooring-website-design",
            label: "Flooring website design",
          },
        ],
      },
      {
        icon: "camera",
        title: "Room-by-Room Flooring Photo Galleries",
        desc: "Install photos sorted by material and room, captioned with the town and product, compressed to load fast and marked up for image search.",
        points: [
          "Galleries by material",
          "Town and product captions",
          "Image search markup",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Install-Day Reviews for Flooring Companies",
        desc: "Review requests after install day and after store purchases, owner replies to every one, and prompts that bring up the material and room.",
        points: [
          "Install-day requests",
          "Store purchase follow-up",
          "Material named in reviews",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended listing",
          },
        ],
      },
      {
        icon: "tool",
        title: "Technical SEO for Flooring Websites",
        desc: "Product and gallery images resized, filters stopped from creating duplicate URLs, speed fixed on phones and schema added for store and services.",
        points: [
          "Duplicate URL cleanup",
          "Mobile speed fixes",
          "Store and service schema",
        ],
        links: [
          { href: "/services/web-design", label: "Sites built for search" },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for Flooring Companies",
        desc: "Direct answers on durability, pets, moisture and install time, with consistent listings, so AI Overviews and ChatGPT suggest your store for new floors.",
        points: [
          "Material comparison answers",
          "Consistent store listings",
          "AI mention tracking",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "Get cited by AI tools" },
        ],
      },
    ],
  },
  growth: {
    title: "How Flooring SEO Grows Store Visits and Installs",
    lead: "Every material ranked, your store quoted in AI answers and each measure linked to the phrase that produced it.",
    rank: {
      title: "Rank for Every Flooring Material You Sell",
      body: [
        "Shoppers rarely search “flooring”; they search hardwood refinishing, waterproof plank or tile for a bathroom. We map those phrases by material and town, give each a page, and track positions every week against nearby stores and installers.",
      ],
      points: [
        "Material keyword map",
        "Town-level positions",
        "Refinishing terms included",
        "Store and installer rivals",
      ],
      cta: "List My Flooring Keyword Gaps",
      keywords: [
        ["flooring store near me", 21, 3],
        ["hardwood floor refinishing", 28, 2],
        ["lvp installation + your city", 34, 4],
        ["tile installer near me", 19, 3],
      ],
    },
    ai: {
      title: "Be the Flooring Store AI Assistants Name",
      body: [
        "Shoppers ask AI which floor survives pets or a damp basement, and which local store installs it. Answers favor businesses with clear material pages, matching listings and reviews that name the product. We build that base with our ",
        {
          href: "/services/ai-seo-services",
          label: "AI search optimization method",
        },
        ".",
      ],
      points: [
        "Material pros-and-cons pages",
        "Pet and moisture FAQs",
        "Listings that match",
        "Monthly AI checks",
      ],
      cta: "Check My Flooring AI Mentions",
      query: "best waterproof flooring for a basement near me",
      intro: "For waterproof basement flooring near you,",
      bullets: [
        "Clear moisture-rated plank page",
        "Basement install photos",
        "Reviews naming the product",
      ],
    },
    leads: {
      title: "Flooring Calls, Forms and Measures by Source",
      body: [
        "Rankings count when a shopper books a measure or walks into the showroom. We record each call and form with its page and search, add a measure button to every material page, and use ",
        {
          href: "/services/google-ads",
          label: "Google Ads for flooring companies",
        },
        " when the install calendar thins.",
      ],
      points: [
        "Calls tagged by material",
        "Measure button on pages",
        "Showroom direction clicks",
        "Monthly source report",
      ],
      cta: "Show Where My Flooring Leads Begin",
      items: [
        ["Hardwood refinish call", "Google Maps", "Mon 8:50 AM"],
        ["LVP measure request", "Vinyl plank page", "Mon 3:25 PM"],
        ["Carpet quote form", "AI Overview link", "Tue 12:10 PM"],
        ["Showroom directions", "Town page", "Sat 10:30 AM"],
      ],
    },
  },
  results: {
    title: "What Flooring Stores Gain From Working With Zonic",
    lead: "Category and photo fixes first, then material pages and reviews that bring more measures and walk-ins.",
    cta: "Chart My Flooring Growth Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Store or Installer Category Set",
        text: "We pick the flooring category that matches how you sell, then fix hours, materials and store photos.",
      },
      {
        when: "Month 1",
        title: "Flooring Material Pages Go Up",
        text: "Hardwood, luxury vinyl, tile, carpet and refinishing pages launch and start showing for material searches nearby.",
      },
      {
        when: "Months 2–4",
        title: "Flooring Galleries Build Trust",
        text: "Room-by-room install photos and product-naming reviews help your store climb the local pack for key materials.",
      },
      {
        when: "Month 4 onward",
        title: "More Flooring Measures Booked",
        text: "More measure requests, showroom visits and calls for the floors you most want to sell, each traced to its source.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "More Booked In-Home Flooring Measures",
        text: "Shoppers comparing hardwood, plank and tile reach a page with a measure button instead of a competitor.",
      },
      {
        icon: "pin",
        title: "More Walk-Ins at the Flooring Showroom",
        text: "Directions taps from Maps send more shoppers to browse samples and pick out flooring in person.",
      },
      {
        icon: "star",
        title: "Reviews That Name the Floor Installed",
        text: "Customers mention the material, the room and the crew, which helps the next shopper choose with confidence.",
      },
      {
        icon: "sparkle",
        title: "Suggested by AI for New Floors",
        text: "Material pages that answer pet, moisture and wear questions give AI assistants reasons to mention your store.",
      },
    ],
  },
  compare: {
    title: "How Our SEO for Flooring Stores Differs From Others",
    lead: "Where flooring businesses often get let down by SEO, and what we do differently as a flooring SEO agency.",
    rows: [
      {
        topic: "Flooring store vs installer setup",
        other:
          "One category picked by default, even when it doesn't match how you sell.",
        zonic:
          "Flooring Store or Flooring Contractor chosen from your revenue, with hours and install photos behind it.",
      },
      {
        topic: "Pages by flooring material",
        other:
          "A single “flooring services” page trying to rank for every material.",
        zonic:
          "Hardwood, luxury vinyl, tile, carpet and refinishing each get a page, as do your install towns.",
      },
      {
        topic: "Flooring photos and samples",
        other:
          "Manufacturer stock photos that look the same as every other store.",
        zonic:
          "Your own install photos by material and room, plus posts announcing new sample lines.",
      },
      {
        topic: "Commercial flooring work",
        other:
          "Commercial jobs lumped in with homeowner pages, or skipped entirely.",
        zonic:
          "Dedicated pages for office, clinic and retail flooring, with commercial inquiries reported on their own line.",
      },
      {
        topic: "Flooring lead tracking",
        other:
          "Reports full of traffic graphs but silent on measures and showroom visits.",
        zonic:
          "Calls, measure requests and direction taps traced to the material page and search behind them.",
      },
      {
        topic: "Flooring SEO contract terms",
        other:
          "Long agreements and listings set up under the provider's own account.",
        zonic:
          "No term contract; the store's profile, site and tracking logins remain yours.",
      },
    ],
  },
  steps: {
    title: "How We Rank Flooring Stores and Installers",
    lead: "The first weeks fix what's broken; after that, every month adds material pages, photos and reviews.",
    items: [
      {
        h: "Flooring Visibility Audit by Material",
        p: "We check how your store and crews show up today, compare nearby rivals, and rank materials, repairs and towns by opportunity.",
      },
      {
        h: "Correct the Flooring Listing, Add Material Pages",
        p: "Week one repairs the category, store details and page speed; material pages, town pages and install-day review requests come next.",
      },
      {
        h: "Report Measures, Push the Best Flooring Lines",
        p: "Monthly, you get rankings, calls, measures and showroom visits by material; the lines selling best earn more pages and links.",
      },
    ],
    audit: [
      ["Local pack rank", "behind"],
      ["Material pages", "gap"],
      ["Install photos", "open"],
      ["Store hours", "good"],
    ],
    plan: [
      "Hardwood page",
      "Vinyl plank page",
      "Tile page",
      "Town pages",
      "Reviews",
    ],
    launch: [
      "Category corrected",
      "Material pages live",
      "Galleries posted",
      "Measures tracked",
    ],
  },
  explore: {
    title: "Related Services for Flooring Companies",
    lead: "SEO lands more measures on a site that shows your floors well, with ads for slower weeks.",
    items: [
      {
        name: "Flooring Marketing",
        sub: "A full plan for your store",
        href: "/services/flooring-marketing-agency",
        icon: "layers",
      },
      {
        name: "Flooring Websites",
        sub: "Sites that sell the showroom",
        href: "/services/flooring-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Measures booked this week",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Map rankings for installers and trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Sell cabinets or countertops too? One plan can rank every product line.",
  },
  reviews: {
    title: "A 5.0 Google Rating Earned One Client at a Time",
    lead: "Pulled unedited from our Google listing, the same reviews a flooring owner can check today.",
  },
  pricing: {
    title: "Flooring SEO Plans on Month-to-Month Terms",
    compareTitle: "Flooring Store SEO Plans Side by Side",
    addOnsTitle: "Add-Ons for Flooring Showrooms and Crews",
    customTitle: "Flooring Showrooms in Several Cities?",
  },
  faq: {
    title: "Flooring SEO Questions From Store Owners",
    lead: "Costs, timing, store versus installer setup and what local SEO for flooring companies covers.",
    items: [
      {
        q: "What do flooring company local SEO services include?",
        a: "They cover the mix of work that gets a flooring store or installer found nearby: a Business Profile with the right category, pages for each material and town, install galleries, reviews and accurate listings. The goal is leading the Maps results and page one for the materials you most want to sell.",
      },
      {
        q: "How much does flooring SEO cost?",
        a: "Plans cost $297, $750 or $1,500 a month on month-to-month terms. Smaller stores tend to fit the entry plan; multi-showroom companies, commercial installers and anyone wanting paid search handled as well usually move up. The free audit points to the plan your local competition calls for.",
      },
      {
        q: "Should a flooring business list as a store or a contractor?",
        a: "Pick the primary category that matches most of your revenue. A staffed showroom where people choose products fits Flooring Store; crews installing at customer homes fit Flooring Contractor. Hybrids keep one as primary and add the other as a secondary category, backed by real store hours and install photos.",
      },
      {
        q: "How long does flooring company SEO take to work?",
        a: "Category and photo fixes often show on Maps within a few weeks, and material pages begin ranking soon after. Competitive phrases such as “flooring store near me” in bigger cities take months of steady work. Your report tracks calls and measures, so you can see the curve as it forms.",
      },
      {
        q: "Which keywords should a flooring company target?",
        a: "Start with materials and services plus your towns: “hardwood floor refinishing”, “luxury vinyl plank installation”, “tile installer” and “flooring store near me”. Add commercial terms if you bid on offices or retail. Search demand for each is checked in the audit, and pages go only to terms linked to real sales.",
      },
      {
        q: "Can SEO help a flooring company win commercial jobs?",
        a: "Yes, with its own pages. Property managers and builders search for office carpet tile, sheet vinyl for clinics and polished concrete, so those get dedicated pages, project photos and a separate inquiry form, and we report commercial leads on their own line.",
      },
      {
        q: "Do you offer local SEO for flooring installers and contractors?",
        a: "Yes. Installers without a showroom use a service-area profile, so the work leans on town pages, install photos and reviews instead of store visits. We set the service area, build pages for the towns you cover and track calls by town.",
      },
      {
        q: "How do AI assistants choose a flooring store to suggest?",
        a: "They read material pages, check that store details agree across listings, and weigh reviews naming the product and install. A store that answers questions about pets, moisture and wear in plain words gives ChatGPT and Google AI Overviews a reason to suggest it.",
      },
      {
        q: "Can you do flooring SEO for several showrooms?",
        a: "Yes. Every staffed showroom gets its own profile, location page and tracking, while install-only areas get town pages. Reports rank each showroom against the others, showing which location needs more reviews, photos or pages next.",
      },
      {
        q: "Do flooring SEO plans have a long contract?",
        a: "No. Plans are month to month, and the profile, website and tracking accounts remain yours. Every report lists the changes made, so you can judge the work on measures booked and store visits. If those dry up, you are free to stop at the end of any month.",
      },
    ],
  },
  audit: {
    title: "Free Rankings Check for Your Flooring Business",
    lead: [
      "Tell us your website and which floors you want to sell more of. We'll map your Maps positions around the store, line up your photos and reviews against nearby rivals, and send a short plan in writing. Meet ",
      { href: "/about", label: "the people behind Zonic" },
      " or view ",
      { href: "/services", label: "our service lineup" },
      ".",
    ],
    points: [
      "Maps rank near the store",
      "Material keyword gaps",
      "Profile category check",
      "A first-month to-do list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free flooring company SEO audit",
      title: "Request My Flooring Rankings Audit",
      subtitle: "Free and no-obligation.",
      submitText: "Send My Flooring Audit",
      messageLabel: "Your website and main flooring materials",
      messagePlaceholder:
        "yourwebsite.com, the floors you sell or install and your towns",
    },
  },
  banner: {
    title: "Make Your Store the First Stop for New Floors",
    lead: "Higher placement for every material, mentions in AI tools and measures traced to their source.",
  },
};
