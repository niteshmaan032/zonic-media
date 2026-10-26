/* Local SEO for Window and Door Companies — redesign draft copy (26 Oct
   2026). Fresh copy for the Local SEO dropdown family; never reuse the
   live page, the electricians reference or the window and door marketing
   draft wording (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: no impressions recorded.
   - Semrush US: window and door seo 40 (KD 10) · seo for window
     companies 30 · window company seo 20 · door company seo 0. Brief
     adds local seo for window and door companies, window installer seo
     and door installer seo.
   - Web research (window and door SEO guides, installer Business
     Profiles, homeowner question pages): buyers search by product
     (replacement windows, entry doors, patio doors, impact windows), not
     "window company", so the page is organised by product line; guides
     use "window installation service" as the primary with door
     secondaries and stress showroom pages, before-and-after galleries
     with alt text, and out-localising national brands; homeowner
     questions centre on foggy glass, drafts, efficiency ratings and
     repair vs replace, which shaped the AI row and FAQs. Top pages had no
     door-specific or gallery guidance; both became service cards.
   - Title keeps "Local SEO for Window & Door Companies" (live title) and
     leads with the head term "window and door seo", also the H1. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-window-and-door-companies",
  audience: "Window and door installers and replacement companies",
  serviceName: "Local SEO for Window and Door Companies",
  meta: {
    title: "Window and Door SEO | Local SEO for Window & Door Companies",
    description:
      "Window and door SEO for replacement installers: product pages, a showroom-ready Business Profile, project galleries, reviews and AI answers that win local searches.",
    keywords: [
      "window and door seo",
      "local seo for window and door companies",
      "seo for window companies",
      "window company seo",
      "window installer seo",
      "door installer seo",
      "door company seo",
      "window replacement seo",
      "seo for window and door companies",
      "window and door company local seo",
    ],
  },
  hero: {
    h1Lead: "Window and Door SEO",
    h1Rest: "That Wins Replacement Searches in Your Town",
    icon: "window",
    lead: [
      "Homeowners rarely search for a window company; they search for the product: replacement windows, a new entry door, a sliding patio door. Our window and door SEO builds a ranking page for each line, tunes your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      " and showroom details, and earns reviews that mention the install.",
    ],
    cta: "Request a Free Window SEO Audit",
    ui: {
      kind: "growth",
      maps: "pack",
      ai: "overview",
      growth: "pipeline",
      business: "Your Window & Door Co.",
      category: "Window installer",
      query: "window replacement near me",
      aiPrompt: "best window replacement company near me",
      aiReasons: [
        "Energy-efficient window lines",
        "Showroom with door samples",
      ],
      growthLabel: "Window and door jobs",
      leads: [
        ["Whole-home window order", "Window page"],
        ["Entry door consult", "AI Overview"],
        ["Patio door estimate", "Google Maps"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Rank #1",
          title: "Top of the Pack for Replacements",
          text: "Product pages and reviews put your company first for window searches.",
        },
        {
          label: "AI Overview",
          badge: "Cited",
          title: "Cited for Efficient Windows and Doors",
          text: "Efficiency answers and showroom details get quoted in AI Overviews.",
        },
        {
          label: "Jobs",
          badge: "Signed",
          title: "Estimates Turning Into Window Orders",
          text: "Follow each job from estimate to consult to signed order.",
        },
      ],
    },
  },
  searches: {
    title: "Window and Door Searches We Rank You For",
    lead: "Product, problem and showroom searches; we give each one a page or a detail on your Business Profile.",
    groups: [
      {
        icon: "window",
        label: "Window replacement searches",
        terms: [
          "window replacement near me",
          "replacement windows for old house",
          "energy efficient windows",
          "double pane window replacement",
          "foggy window glass repair",
          "impact windows installer",
        ],
      },
      {
        icon: "door",
        label: "Entry and patio door searches",
        terms: [
          "front door replacement near me",
          "patio door installation",
          "sliding glass door repair",
          "storm door installation",
          "fiberglass entry doors",
          "french patio doors installed",
        ],
      },
      {
        icon: "pin",
        label: "Window showroom and installer searches",
        terms: [
          "window showroom near me",
          "window and door companies near me",
          "window installers in (your town)",
          "broken window repair near me",
          "new construction windows supplier",
          "drafty windows fix",
        ],
      },
    ],
  },
  services: {
    title: "SEO for Window Companies\nand Door Installers",
    lead: "Six services aimed at the products you most want to install, from whole-house window jobs to a single entry door.",
    cta: "Review My Window Company Site",
    items: [
      {
        icon: "pin",
        title: "Showroom and Profile Work for Window Companies",
        desc: "We set window installation as the primary category, add door services, list showroom hours and parking, and post finished installs every week.",
        points: [
          "Window category set",
          "Showroom details added",
          "Weekly install posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Getting verified",
          },
        ],
      },
      {
        icon: "window",
        title: "Window Product Pages That Rank",
        desc: "Separate pages for replacement, energy-efficient, impact and new construction windows, each explaining materials, glass options and what install day looks like.",
        points: [
          "Replacement window page",
          "Efficiency and glass guide",
          "Impact window page",
        ],
        links: [
          {
            href: "/services/window-and-door-website-design",
            label: "Window and door websites",
          },
        ],
      },
      {
        icon: "door",
        title: "Entry, Patio and Storm Door Pages",
        desc: "Doors get their own pages and searches, from fiberglass entry doors to sliding patio units, so door buyers land on the right product.",
        points: [
          "Entry door page",
          "Patio and sliding doors",
          "Storm and security doors",
        ],
        links: [{ href: "/services/web-design", label: "Sites that rank" }],
      },
      {
        icon: "camera",
        title: "Before-and-After Window Galleries",
        desc: "Project galleries grouped by home style and town, with descriptive file names and alt text, so image search and buyers both see your work.",
        points: [
          "Galleries by home style",
          "Descriptive alt text",
          "Town-tagged projects",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Window and Door Reviews and Citations",
        desc: "Review requests after the final walkthrough ask homeowners to name the product, while your details stay identical across every directory and listing app.",
        points: [
          "Walkthrough review texts",
          "Product named in reviews",
          "Directory consistency",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspension appeals",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Window Shoppers",
        desc: "Clear answers on efficiency ratings, glass packages and repair versus replace, so AI Overviews and ChatGPT cite your window company when buyers ask.",
        points: [
          "Efficiency rating answers",
          "Repair or replace guides",
          "AI window-mention checks",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI search for window firms",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Window and Door SEO Fills Your Install Calendar",
    lead: "Better placement for product searches, more AI citations and leads tied to the page that won them.",
    rank: {
      title: "Rank for Replacement Windows and New Doors",
      body: [
        "We list the products you sell, pair each with the towns you serve, and give every pairing a page worth ranking. Window, entry door and patio door searches are reviewed weekly, so you can see which lines climb and where a national brand still outranks you.",
      ],
      points: [
        "Product-by-town map",
        "Weekly position reports",
        "Door search tracking",
        "National brand gaps",
      ],
      cta: "Find My Window Search Gaps",
      keywords: [
        ["window replacement near me", 28, 3],
        ["entry door installation + your town", 34, 5],
        ["energy efficient windows installer", 22, 2],
        ["patio door replacement", 39, 6],
      ],
    },
    ai: {
      title: "Get Your Window Company Into AI Answers",
      body: [
        "Buyers now ask AI whether to repair foggy glass or replace the whole window, and which glass suits their climate. We publish plain answers to those questions, add structured data and align your listings through our ",
        { href: "/services/ai-seo-services", label: "AI visibility service" },
        ".",
      ],
      points: [
        "Repair-or-replace answers",
        "Glass and climate guides",
        "Aligned listings",
        "AI citation tracking",
      ],
      cta: "Check If AI Names My Window Company",
      query: "who replaces drafty windows near me",
      intro: "For window replacement near you,",
      bullets: [
        "Detailed efficiency page",
        "Reviews naming the product",
        "Showroom hours listed",
      ],
    },
    leads: {
      title: "Connect Each Window Lead to the Search Behind It",
      body: [
        "Window and door jobs start with a consultation, so we tag every call, showroom visit request and form by page and search. Booking forms ask the right product questions, and ",
        {
          href: "/services/google-ads",
          label: "Google Ads for window companies",
        },
        " can fill gaps in slower months.",
      ],
      points: [
        "Showroom visit tracking",
        "Product-specific forms",
        "Mobile call buttons",
        "Monthly lead summary",
      ],
      cta: "Trace My Window and Door Leads",
      items: [
        ["Bay window quote call", "Google Maps", "Mon 10:52 AM"],
        ["Entry door quote form", "Entry door page", "Tue 12:40 PM"],
        ["Showroom visit request", "Business Profile", "Wed 9:20 AM"],
        ["Patio door call", "AI Overview link", "Thu 5:10 PM"],
      ],
    },
  },
  results: {
    title: "What Window and Door Companies Gain With Zonic",
    lead: "Progress follows your product lines: showroom fixes, then window and door pages, then more consultations.",
    cta: "Plan My Window Company Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Showroom Listing Squared Away",
        text: "We set the window category, add door services, showroom hours and photos, so buyers see the right details.",
      },
      {
        when: "Month 1",
        title: "Window and Door Pages Publish",
        text: "Replacement window, entry door and patio door pages go live, each matched to its own searches.",
      },
      {
        when: "Months 2–4",
        title: "Window Galleries Fill Out",
        text: "Project galleries and walkthrough reviews accumulate, pushing your listing toward more product searches nearby.",
      },
      {
        when: "Month 4 onward",
        title: "More Window Consultations Booked",
        text: "In-home measure and showroom requests tend to grow, each traced to the product page behind it.",
      },
    ],
    wins: [
      {
        icon: "window",
        title: "Window Buyers Land on the Right Product",
        text: "Someone searching patio doors reaches your patio door page, not a general home page they leave.",
      },
      {
        icon: "camera",
        title: "Galleries That Sell the Window Install",
        text: "Real before-and-after projects by home style help buyers picture their own house finished.",
      },
      {
        icon: "trend",
        title: "Holding Ground Against National Window Brands",
        text: "Local pages, photos and reviews give your company an edge in nearby results where big ad budgets matter less.",
      },
      {
        icon: "star",
        title: "Reviews That Mention the Door or Window",
        text: "Homeowners describe what was installed and how the crew worked, reassuring the next buyer comparing quotes.",
      },
    ],
  },
  compare: {
    title: "How Zonic Handles Window and Door SEO Differently",
    lead: "Where window and door companies tend to notice the gap between a generic firm and us.",
    rows: [
      {
        topic: "Window product-line pages",
        other:
          "Windows and doors often share a single services page that ranks for little.",
        zonic:
          "Separate replacement window, entry door and patio door pages, each targeting its own searches.",
      },
      {
        topic: "Showroom details on Google",
        other:
          "Showroom hours, parking and products are frequently missing from the profile.",
        zonic:
          "Showroom hours, parking, products and install photos kept current on your Business Profile.",
      },
      {
        topic: "Install photos that sell",
        other:
          "Project photos often sit unlabeled, so image search never sees them.",
        zonic:
          "Galleries grouped by home style and town, with descriptive file names and alt text.",
      },
      {
        topic: "Window efficiency answers",
        other:
          "Efficiency and glass questions are rarely answered on installer websites.",
        zonic:
          "Plain answers on efficiency ratings, glass options and repair versus replace, ready for AI tools.",
      },
      {
        topic: "Window consultation tracking",
        other:
          "Reporting can stop at rankings, with no view of booked consultations.",
        zonic:
          "Calls, showroom requests and quote forms tagged by product page and search.",
      },
      {
        topic: "Window company contracts",
        other:
          "Long agreements can outlast a full replacement season before results are clear.",
        zonic:
          "Month-to-month billing; your Business Profile, site and tracking accounts stay yours.",
      },
    ],
  },
  steps: {
    title: "Three Steps to More Window Consultations",
    lead: "Profile and site fixes first, product pages next, then monthly tuning toward what books.",
    items: [
      {
        h: "Window Market and Showroom Audit",
        p: "We review your profile, site and the window companies and national brands ranking near you, then rank your products by opportunity.",
      },
      {
        h: "Launch Window and Door Product Pages",
        p: "Profile and speed fixes go live first; window, door and gallery pages follow, along with review requests after each walkthrough.",
      },
      {
        h: "Report Window Leads, Then Expand",
        p: "Monthly reports show calls, forms and showroom requests by product, and we add pages for the lines that convert best.",
      },
    ],
    audit: [
      ["Map Pack spot", "behind"],
      ["Door pages", "gap"],
      ["Project gallery", "open"],
      ["Core Web Vitals", "behind"],
    ],
    plan: [
      "Window pages",
      "Door pages",
      "Galleries",
      "Showroom page",
      "Walkthrough reviews",
    ],
    launch: [
      "Category set",
      "Product pages live",
      "Galleries indexed",
      "Leads traced",
    ],
  },
  explore: {
    title: "Window and Door Growth Beyond Rankings",
    lead: "Local SEO for window & door companies pulls in product searches; a strong site and selective ads turn more of them into consultations.",
    items: [
      {
        name: "Window and Door Marketing",
        sub: "Full plan for every channel",
        href: "/services/window-and-door-marketing-agency",
        icon: "window",
      },
      {
        name: "Window and Door Websites",
        sub: "Showroom-quality sites that book",
        href: "/services/window-and-door-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Paid search for slower months",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "The wider home trades playbook",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Selling blinds, shutters or glass repair too? Each line can get its own pages in one plan.",
  },
  reviews: {
    title: "Home Improvement Owners Rate Our Work 5.0",
    lead: "Window, door and other business owners reviewed us on Google; here are their words, untouched.",
  },
  pricing: {
    title: "Window Company SEO Plans, Month to Month",
    compareTitle: "Side-by-Side Plans for Window Companies",
    addOnsTitle: "Add-Ons for Door and Window Installers",
    customTitle: "Several Window Showrooms to Rank?",
  },
  faq: {
    title: "What Window and Door Owners Ask About SEO",
    lead: "Timing, costs, product pages and showroom traffic, explained for window and door businesses.",
    items: [
      {
        q: "What is local SEO for window & door companies?",
        a: "It is the work that gets a window and door business found by nearby buyers on Google: a tuned Business Profile with showroom details, a page for each product and town, project galleries, reviews that name the product and consistent listings. The aim is Map Pack and page-one visibility for replacement searches.",
      },
      {
        q: "How much does window company SEO cost?",
        a: "We offer three plans, $297, $750 and $1,500 a month, with no long contract. A single showroom often fits the first; companies with several showrooms or a wide install area, or that want Google Ads handled, usually pick a larger plan. The free audit points to one.",
      },
      {
        q: "How long does SEO take for a window replacement company?",
        a: "A corrected profile and new product pages can show Maps gains within weeks. Wide searches such as window replacement across a big metro climb more slowly, often over several months. Window projects have long buying cycles, so pages published now keep earning research traffic for future installs.",
      },
      {
        q: "Should windows and doors have separate pages?",
        a: "Yes. Window buyers and door buyers search differently and ask different questions, so one combined page rarely ranks for either. Separate pages for replacement windows, entry doors and patio doors each target their own searches and give buyers the details they came for.",
      },
      {
        q: "Which Google Business Profile category suits a window and door company?",
        a: "Choose the category that reflects most of your revenue, often window installation service, and add door-related secondaries only if you truly sell and install doors. Showroom hours, products and service areas should match how you actually operate, and we confirm labels in your own picker.",
      },
      {
        q: "Can a local window company outrank national brands on Google?",
        a: "In local results, often yes. National brands spend heavily on ads, but the Map Pack rewards proximity, reviews and complete profiles. Town-specific pages, real project photos and reviews that mention local neighborhoods give an independent installer an edge nearby.",
      },
      {
        q: "Do project photos help window and door SEO?",
        a: "They do. Before-and-after galleries with descriptive file names and alt text can appear in image results, support your town pages and give your Business Profile fresh content. Real install photos also persuade buyers far better than stock images.",
      },
      {
        q: "Can you rank a window company with a showroom and a wide install area?",
        a: "Yes. A showroom can display its address while also listing the towns your installers cover. We build a showroom page with hours, parking and products, plus town pages for the wider install area, and keep both consistent with your profile.",
      },
      {
        q: "Will AI search affect how buyers choose a window company?",
        a: "It already does. AI Overviews and ChatGPT answer questions about efficiency ratings, glass options and repair versus replace, then often name local companies with clear pages and strong reviews. Accurate, well-structured product content is how a window business gets mentioned.",
      },
      {
        q: "Is there a long contract for window and door SEO?",
        a: "No. Billing runs month to month and you can stop whenever you like. Your Business Profile, site and call-tracking logins belong to you from the first day, and each monthly report details every edit we made.",
      },
    ],
  },
  audit: {
    title: "See How Your Window Company Ranks, Free",
    lead: [
      "Tell us which windows and doors you most want to install and share your site. We check your Maps placement, product pages and reviews against nearby window companies, then return a plain plan. Learn ",
      { href: "/about", label: "who runs Zonic Media" },
      " or browse ",
      { href: "/services", label: "the services we offer" },
      ".",
    ],
    points: [
      "Maps placement by town",
      "Missing product pages",
      "Showroom profile check",
      "First-month action list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free window company audit",
      title: "Request My Window Company Audit",
      subtitle: "No obligation and no contract.",
      submitText: "Send My Window Audit",
      messageLabel: "Your website and main products",
      messagePlaceholder:
        "yourwebsite.com, window and door lines you install, and towns you cover",
    },
  },
  banner: {
    title: "Rank First When Your Town Shops for Windows",
    lead: "Product pages that rank, AI answers that name you and leads traced to the install, reported monthly.",
  },
};
