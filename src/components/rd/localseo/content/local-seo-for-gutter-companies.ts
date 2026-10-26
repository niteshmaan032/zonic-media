/* Local SEO for Gutter Companies — redesign draft copy (26 Oct 2026).
   Fresh copy for the Local SEO dropdown family; never reuse the live
   page, the electricians reference or the gutter marketing draft wording
   (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: gutter seo 142 impressions (pos
     17.6) · local seo for gutter installers 127 (5.5) · seo for gutter
     contractors 123 (13.9) · gutter installation seo 120 (16.9) · gutter
     company seo 92 (16.2) · gutter local seo 87 (6.9) · seo for gutter
     installation & cleaning 70 (10.4) · local seo for gutter companies 54
     (5.8) · google maps optimization for gutter companies 46 (7.2) ·
     google business profile for gutter companies 38 (10.6).
   - Semrush US: gutter seo 50 (KD 1). Tiny volumes, so GSC terms lead.
   - Web research (gutter SEO guides, live gutter Business Profiles, AI
     visibility guides): live profiles split between gutter cleaning and
     gutter service primaries with installs/guards/repairs as services;
     guides push one page per service and town and warn against duplicate
     city pages; none cover seasonality (leaf drop, spring storms, ice
     dams) or guard-comparison content, so both became cards; national
     guard brands win on ads, so local pages and Maps carry the fight.
   - Keeps the top-10 terms "local seo for gutter installers" (H1) and
     "gutter local seo" (hero lead, growth H2) plus "Local SEO for Gutter
     Companies" (live title) in the title with the head term "gutter seo".
*/

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-gutter-companies",
  audience: "Gutter installers and gutter cleaning companies",
  serviceName: "Local SEO for Gutter Companies",
  meta: {
    title: "Gutter SEO | Local SEO for Gutter Companies & Installers",
    description:
      "Gutter local SEO for installers and cleaning crews: Google Maps rankings street by street, guard and seamless pages, seasonal posts, reviews and AI answers.",
    keywords: [
      "gutter seo",
      "local seo for gutter installers",
      "gutter local seo",
      "local seo for gutter companies",
      "seo for gutter contractors",
      "gutter company seo",
      "gutter installation seo",
      "google maps optimization for gutter companies",
      "google business profile for gutter companies",
      "gutter contractors seo company",
    ],
  },
  hero: {
    h1Lead: "Local SEO for Gutter Installers",
    h1Rest: "That Ranks You Street by Street",
    icon: "water",
    lead: [
      "Gutter local SEO for crews that hang seamless runs, fit guards and clear downspouts. We tune your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      " for each service, build pages for the neighborhoods you work, and time posts and review asks to leaf season and spring storms.",
    ],
    cta: "Check My Gutter Rankings Free",
    ui: {
      kind: "growth",
      maps: "grid",
      ai: "overview",
      growth: "pipeline",
      business: "Your Gutter Co.",
      category: "Gutter installer",
      query: "gutter installation near me",
      aiPrompt: "best gutter guard installer near me",
      aiReasons: ["Seamless gutter installs", "Guard comparison guides"],
      growthLabel: "Gutter jobs this month",
      leads: [
        ["Seamless gutter install", "Google Maps"],
        ["Gutter guard estimate", "AI Overview"],
        ["Fall cleaning request", "Service page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top 3 area-wide",
          title: "Ranking on Every Street You Serve",
          text: "Your listing holds the top spots across the neighborhoods your crews cover.",
        },
        {
          label: "AI Overview",
          badge: "Cited",
          title: "Quoted in Google's AI Answer",
          text: "Guard guides and reviews get your company cited in AI Overviews.",
        },
        {
          label: "Jobs",
          badge: "Booked",
          title: "From Estimate Request to Booked Install",
          text: "Estimates move through to installs, each tagged with the search that sent it.",
        },
      ],
    },
  },
  searches: {
    title: "What Homeowners Search When Gutters Overflow",
    lead: "Real searches, from the first clogged downspout to a full seamless replacement, each matched to a page or a profile signal.",
    groups: [
      {
        icon: "water",
        label: "Overflow and damage gutter searches",
        terms: [
          "gutters overflowing in rain",
          "sagging gutters repair",
          "downspout repair near me",
          "water pooling by foundation",
          "leaking gutter seams",
          "gutter pulled away from house",
        ],
      },
      {
        icon: "home",
        label: "Gutter install and guard searches",
        terms: [
          "seamless gutter installation",
          "gutter guards installed near me",
          "leaf guard installation",
          "gutter replacement near me",
          "6 inch gutters",
          "copper gutter installer",
        ],
      },
      {
        icon: "leaf",
        label: "Seasonal gutter cleaning searches",
        terms: [
          "gutter cleaning near me",
          "fall gutter cleaning",
          "gutter cleaning before winter",
          "ice dam gutter heat cables",
          "downspout unclogging",
          "roof and gutter cleaning service",
        ],
      },
    ],
  },
  services: {
    title: "SEO for Gutter Contractors,\nService by Service",
    lead: "Six pieces of work, each pointed at the gutter jobs that keep crews busy between storms.",
    cta: "Review My Gutter Website",
    items: [
      {
        icon: "pin",
        title: "Google Maps Optimization for Gutter Companies",
        desc: "We set the right gutter category, list installs, guards and cleanings as services, draw a realistic service area and post finished runs weekly.",
        points: [
          "Gutter category check",
          "Realistic service radius",
          "Weekly finished-run photos",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile work",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help verifying a profile",
          },
        ],
      },
      {
        icon: "home",
        title: "Seamless, Guard and Downspout Gutter Pages",
        desc: "A focused page for each gutter service, explaining materials, sizes and what a homeowner should expect, so every service can rank by itself.",
        points: [
          "Seamless install page",
          "Guard comparison page",
          "Downspout and drainage page",
        ],
        links: [
          {
            href: "/services/gutter-company-website-design",
            label: "Gutter company websites",
          },
        ],
      },
      {
        icon: "layers",
        title: "Neighborhood Pages for Gutter Crews",
        desc: "Pages for the towns and subdivisions you actually work, with local photos, tree cover notes and recent jobs, not copy with the city swapped.",
        points: [
          "Local job photos",
          "Tree cover and roof notes",
          "Nearby job lists",
        ],
        links: [{ href: "/services/web-design", label: "Websites that rank" }],
      },
      {
        icon: "leaf",
        title: "Leaf Season and Storm Timing for Gutter SEO",
        desc: "Posts, page updates and review pushes scheduled for fall leaf drop, spring storms and freeze season, when gutter searches climb near you.",
        points: [
          "Fall cleaning pushes",
          "Spring storm updates",
          "Ice dam content",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Gutter Reviews and Directory Listings",
        desc: "A review request goes out after cleanup, asking customers to name the service, while your business details match on every listing site.",
        points: [
          "Cleanup-day review texts",
          "Replies to every review",
          "Directory detail matching",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended listing help",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers on Gutter Guards and Repairs",
        desc: "Straight answers on guard types, gutter sizes and overflow fixes, marked up so ChatGPT and Google AI Overviews can cite your gutter company.",
        points: [
          "Guard comparison answers",
          "Gutter sizing FAQs",
          "AI mention reviews",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI SEO for local firms",
          },
        ],
      },
    ],
  },
  growth: {
    title: "What Gutter Local SEO Changes for Your Crew",
    lead: "Higher spots on the map, gutter answers AI tools trust and calls you can trace.",
    rank: {
      title: "Rank for Gutter Installs, Guards and Cleanings",
      body: [
        "We split gutter searches by service and neighborhood, then fix or write the page best placed to win each. A weekly grid scan shows the streets where you already lead and the ones still going to another gutter company.",
      ],
      points: [
        "Service-by-neighborhood map",
        "Weekly grid scans",
        "Guard search watchlist",
        "Rival listing gaps",
      ],
      cta: "Find My Gutter Ranking Gaps",
      keywords: [
        ["gutter installation near me", 21, 3],
        ["gutter guards + your town", 29, 4],
        ["gutter cleaning near me", 16, 2],
        ["seamless gutters installer", 34, 5],
      ],
    },
    ai: {
      title: "Earn AI Mentions for Gutter Repair Questions",
      body: [
        "When someone asks ChatGPT which gutter guard suits pine needles, or why water spills over the front run, the answer comes from pages that explain it clearly. We write those pages, add schema and line up your listings through our ",
        {
          href: "/services/ai-seo-services",
          label: "AI search optimization",
        },
        ".",
      ],
      points: [
        "Guard type explainers",
        "Overflow cause answers",
        "Listing consistency checks",
        "AI answer tracking",
      ],
      cta: "Test My Gutter AI Visibility",
      query: "best gutter guards for pine needles near me",
      intro: "For guard installs in your area,",
      bullets: [
        "Guard comparison page",
        "Reviews mentioning guards",
        "Clear service area",
      ],
    },
    leads: {
      title: "Know Which Page Sent Each Gutter Call",
      body: [
        "Every call and quote form is tagged to the page, search and street it came from. We trim the estimate form to a few fields, add tap-to-call, and bring in ",
        { href: "/services/google-ads", label: "Google Ads for gutter jobs" },
        " when a storm leaves gutters hanging.",
      ],
      points: [
        "Calls tagged by street",
        "Short estimate form",
        "Tap-to-call buttons",
        "Monthly lead sources",
      ],
      cta: "Show Me My Gutter Lead Sources",
      items: [
        ["Leaf guard quote call", "Google Maps", "Mon 7:13 AM"],
        ["Cleaning booking form", "Fall cleaning page", "Mon 2:10 PM"],
        ["Seamless estimate request", "Neighborhood page", "Tue 10:45 AM"],
        ["Downspout repair call", "AI Overview link", "Thu 4:05 PM"],
      ],
    },
  },
  results: {
    title: "The Gutter Business You Grow Into With Zonic",
    lead: "Gutter results build in layers: listing fixes, then service pages, seasonal pushes and steadier bookings.",
    cta: "Plan My Gutter Season",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Gutter Listing Put Right",
        text: "We set the gutter category, a realistic service area and your services, so Google stops guessing what you do.",
      },
      {
        when: "Month 1",
        title: "Guard and Seamless Pages Live",
        text: "Guard, seamless and downspout pages publish, each aimed at a search your crew wants to answer.",
      },
      {
        when: "Before leaf season",
        title: "Fall Gutter Push Ready",
        text: "Cleaning posts, page updates and review asks are lined up before leaves start filling gutters.",
      },
      {
        when: "Month 4 onward",
        title: "Steadier Gutter Calendar",
        text: "Install and guard requests tend to fill the gaps between cleaning rushes, traced back to each page.",
      },
    ],
    wins: [
      {
        icon: "water",
        title: "Guard Jobs Without Shared Leads",
        text: "Homeowners comparing guards reach your page and call you directly, not a lead site reselling them.",
      },
      {
        icon: "calendar",
        title: "Fewer Dead Weeks Between Gutter Seasons",
        text: "Install and repair searches keep calls coming when cleaning demand dips after fall.",
      },
      {
        icon: "star",
        title: "Reviews Naming Guards and Neighborhoods",
        text: "Customers describe the guard, the cleanup and their street, giving nearby homeowners real proof.",
      },
      {
        icon: "pin",
        title: "Known Across More Gutter Territory",
        text: "Your listing appears in more blocks of your service area, so your name starts to feel familiar.",
      },
    ],
  },
  compare: {
    title: "Gutter SEO: Zonic Next to a Generalist Agency",
    lead: "What gutter installers often get elsewhere, and what our team does instead.",
    rows: [
      {
        topic: "Gutter guard content",
        other: "Guards often get one line on a general services page.",
        zonic:
          "A guard comparison page with honest notes on debris, roof pitch and upkeep.",
      },
      {
        topic: "Leaf season timing",
        other: "Posts and updates tend to run on the same schedule all year.",
        zonic:
          "Fall cleaning, spring storm and freeze-season updates scheduled ahead of local demand.",
      },
      {
        topic: "Gutter service area setup",
        other:
          "A wide radius may be claimed that the crew cannot really cover.",
        zonic:
          "A realistic service area plus neighborhood pages for the streets you actually work.",
      },
      {
        topic: "Cleaning-only gutter crews",
        other:
          "Install keywords may be targeted even when the crew only cleans.",
        zonic:
          "Cleaning-focused pages and categories that skip install searches bringing calls you cannot take.",
      },
      {
        topic: "Gutter lead tracking",
        other:
          "Reports often stop at traffic charts with nothing tied to estimates.",
        zonic:
          "Calls and estimate forms tagged by page, search and street, reported each month.",
      },
      {
        topic: "Gutter SEO agreements",
        other: "Long terms can tie you in through the slow winter months.",
        zonic:
          "Month to month, with the profile and website staying in your name throughout.",
      },
    ],
  },
  steps: {
    title: "Gutter SEO in Three Clear Steps",
    lead: "Profile and site fixes come first, then pages and reviews, then tuning ahead of each busy season.",
    items: [
      {
        h: "Gutter Map and Competitor Audit",
        p: "We scan your Maps rank street by street, review your site and profile, and list the gutter searches worth chasing first.",
      },
      {
        h: "Fix the Listing, Publish Gutter Pages",
        p: "Category and profile corrections go live in the first week; service and neighborhood pages follow before leaf season starts.",
      },
      {
        h: "Track Gutter Leads, Repeat Each Season",
        p: "Monthly reports show calls, forms and rankings by service, and we move effort toward guards, installs or cleanings as demand shifts.",
      },
    ],
    audit: [
      ["Grid coverage", "behind"],
      ["Guard page", "gap"],
      ["Review asks", "open"],
      ["Directory data", "behind"],
    ],
    plan: [
      "Guard page",
      "Seamless page",
      "Neighborhood pages",
      "Fall posts",
      "Cleanup reviews",
    ],
    launch: [
      "Listing fixed",
      "Service pages live",
      "Season posts set",
      "Calls traced",
    ],
  },
  explore: {
    title: "Pair Gutter SEO With These Services",
    lead: "Local SEO for gutter companies works best beside a sharp site and well-timed ads that turn visitors into estimates.",
    items: [
      {
        name: "Gutter Marketing",
        sub: "Every channel, one plan",
        href: "/services/gutter-marketing-agency",
        icon: "water",
      },
      {
        name: "Gutter Websites",
        sub: "Built to book estimates",
        href: "/services/gutter-company-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Fast calls after storms",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Our approach for home trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Do roofing or siding too? We can fold each exterior service into a single plan.",
  },
  reviews: {
    title: "Gutter Company Owners: Our 5.0 Google Rating, Unfiltered",
    lead: "Real words from real clients, shown exactly as posted on Google.",
  },
  pricing: {
    title: "Gutter SEO Plans, Cancel Any Month",
    compareTitle: "Gutter Company SEO Plans Compared",
    addOnsTitle: "Leaf Season Add-Ons for Gutter Crews",
    customTitle: "Gutter Crews in Several Cities?",
  },
  faq: {
    title: "Questions Gutter Contractors Ask About SEO",
    lead: "Costs, timing, guard pages and seasonal swings, answered for gutter businesses.",
    items: [
      {
        q: "What does local SEO for gutter installers include?",
        a: "It covers everything that helps nearby homeowners find your gutter crew on Google: profile category and services, standalone pages for every gutter service and subdivision you cover, review requests after each job, consistent directory listings and links from local partners. The aim is a top-three Maps spot for installs, guards and cleanings.",
      },
      {
        q: "How much is gutter SEO with Zonic Media?",
        a: "Plans are $297, $750 or $1,500 a month, month to month. A single-crew gutter business usually starts with the first; companies covering several cities, or wanting storm-week Google Ads handled too, often choose the larger plans. Your free review shows which one makes sense.",
      },
      {
        q: "How fast can a gutter company climb on Google Maps?",
        a: "Often within a few weeks. Correcting the category and profile details tends to nudge a gutter crew up the local map in most towns. Competitive installation searches in larger metros take longer, often several months. Publishing cleaning pages well before fall leaf drop gives them time to settle in before demand peaks.",
      },
      {
        q: "Should gutter guards have their own page?",
        a: "Yes. Guard buyers compare types, debris and roof pitch before they call, so a dedicated guard page with honest comparisons can rank and convert. It also gives AI tools a clear source when homeowners ask which guard suits the trees over their house.",
      },
      {
        q: "What Google Business Profile category suits a gutter company?",
        a: "Choose the label that reflects where most of your gutter income comes from, often a gutter service or gutter cleaning category, then add only the secondaries you truly perform. List installs, guards, repairs and cleanings as services. We confirm current labels in your own category picker, since Google changes them.",
      },
      {
        q: "Can gutter SEO even out the slow months?",
        a: "It can soften them. Cleaning searches spike in fall and spring, while install and guard searches stay steadier through the year. We plan posts and page updates around those swings, so you are visible for whichever gutter work is in season.",
      },
      {
        q: "Can you rank a gutter cleaning business that does not install?",
        a: "Yes. Cleaning-only crews get a narrower plan: a cleaning-focused category, pages for recurring service plans and roof debris removal, and review requests timed to each visit. We skip install terms that would only bring calls you cannot take.",
      },
      {
        q: "Will AI search change how homeowners find gutter contractors?",
        a: "Yes, and quickly. ChatGPT and Google's AI Overviews now summarize guard comparisons and repair advice, then name local businesses with clear pages, consistent listings and recent reviews. The groundwork that wins Maps spots is the same groundwork that gets a gutter company mentioned.",
      },
      {
        q: "Can you recover a suspended gutter company listing?",
        a: "Yes. Service-area listings can be suspended after address or name edits. We find the likely cause, correct the profile and file the appeal, using the same process our team has followed to reinstate 900+ suspended profiles.",
      },
      {
        q: "Do gutter crews get locked into a long SEO contract?",
        a: "No. Gutter plans are billed month to month, so a slow winter never traps you in a deal. Your profile and website remain yours, and every monthly report lists the gutter work done and the reason behind it.",
      },
    ],
  },
  audit: {
    title: "Claim a Free Rank Check for Your Gutter Company",
    lead: [
      "Tell us the gutter services and towns you want more of. We compare where you sit on Maps, which pages you have and how your reviews stack up against the gutter crews outranking you, and we reply with a short plan. Get to know ",
      { href: "/about", label: "the Zonic team" },
      " or look through ",
      { href: "/services", label: "every service we run" },
      ".",
    ],
    points: [
      "Maps rank by neighborhood",
      "Missing gutter service pages",
      "Category and profile review",
      "Plan for the next season",
    ],
    form: {
      formType: "local-seo",
      badge: "Free gutter rank check",
      title: "Request My Gutter Rank Check",
      subtitle: "Free, with no strings attached.",
      submitText: "Send My Gutter Check",
      messageLabel: "Your website and gutter services",
      messagePlaceholder:
        "yourwebsite.com, services like guards or seamless installs, and your towns",
    },
  },
  banner: {
    title: "Make Your Gutter Crew the First Call in Town",
    lead: "Map rankings, AI mentions and traceable calls for installs, guards and cleanings, reported every month.",
  },
};
