/* SEO services redesign draft — copy (25 Oct 2026).

   Fresh copy (owner rule: nothing carried over from the live page),
   keyword-led from the research below. Main sections only.

   Research, 25 Oct 2026:
   - Semrush US (web app via Chrome): seo services 60,500 (KD 50) · seo
     agency 60,500 (65) · seo company 49,500 (62) · local seo services
     27,100 (48) · seo consultant 18,100 · seo services near me 12,100
     (30) · professional seo services 12,100 · search engine optimization
     services 12,100 · seo company near me 9,900 (39) · technical seo
     services 6,600 (27) · seo audit services 5,400 (33) · on page seo
     services 4,400 (27) · organic seo services 4,400 (22) · link building
     services 8,100 (17) · seo services for small business 3,600 (19) ·
     what are seo services 1,900 · how much do seo services cost 720.
   - Search Console (90 days): the live URL earns almost nothing (brand
     and stray queries; "seo consultancy services" at #72), so the title
     and H1 are free to target the head terms.
   - Google results: top pages cover what's included, timelines, pricing
     and how to choose; no honest agency guarantees rankings.
   Rules kept: no prices outside the FAQ plan answer, no budgets, no
   invented results, no other company named, verified numbers only. */

import type { Rich } from "@/components/rd/industry/types";
import type { IconKey } from "@/components/rd/industry/icons";

export const LIVE_URL = "/services/seo-services";

export const META = {
  title: "SEO Services & SEO Agency for Small Businesses | Zonic",
  description:
    "SEO services from an SEO company built for small businesses: technical SEO, on-page SEO, local SEO, link building and AI search, measured in calls and leads.",
  keywords: [
    "seo services",
    "seo agency",
    "seo company",
    "seo services near me",
    "seo company near me",
    "professional seo services",
    "search engine optimization services",
    "seo services for small business",
    "technical seo services",
    "on page seo services",
    "organic seo services",
    "link building services",
    "seo audit services",
    "seo consulting services",
    "ai seo services",
  ],
};

export const HERO = {
  h1Lead: "SEO Services",
  h1Rest: "That Bring In Customers From Google and AI Search",
  lead: [
    "We are the SEO company growing businesses call when they want more customers from search. We fix what holds your site back, build pages people search for, earn real links and get you named in ",
    { href: "/services/ai-seo-services", label: "AI search answers" },
    ", then report the calls and leads it brings.",
  ] as Rich,
  cta: "Get My Free SEO Audit",
};

export type SeoCard = {
  icon: IconKey;
  title: string;
  desc: string;
  points: [string, string, string];
  links: { href: string; label: string }[];
};

export const SERVICES = {
  // "\n" = desktop line break: two lines (owner rule for services heads).
  title: "What Our SEO Agency Runs\nfor Your Website",
  lead: "Six services, one team, each one measured in calls and leads.",
  cta: "Audit My Website",
  items: [
    {
      icon: "tool",
      title: "Technical SEO Services",
      desc: "Speed, crawl errors, indexing, schema and site structure fixed, so search engines can crawl and rank your pages.",
      points: [
        "Core Web Vitals fixes",
        "Crawl and index cleanup",
        "Schema markup",
      ],
      links: [
        { href: "/services/web-design", label: "Websites built to rank" },
      ],
    },
    {
      icon: "file",
      title: "On-Page SEO and Content",
      desc: "Pages, titles and copy built around what your customers type, from service pages to city pages.",
      points: [
        "Keyword research",
        "Service and city pages",
        "Titles and internal links",
      ],
      links: [
        {
          href: "/services/local-seo-for-home-services",
          label: "Local SEO for home services",
        },
      ],
    },
    {
      icon: "pin",
      title: "Local SEO and Google Business Profile",
      desc: "Profile, categories, reviews and listings tuned so you show in the Map Pack for nearby searches.",
      points: ["Profile optimization", "Review requests", "Citation cleanup"],
      links: [
        {
          href: "/local-seo-google-business-optimization",
          label: "Business Profile optimization",
        },
        { href: "/services/gmb-verification-help", label: "Verification help" },
      ],
    },
    {
      icon: "layers",
      title: "Link Building Services",
      desc: "Real links from local news, partners and trade sites that raise your authority, with no paid link farms.",
      points: [
        "Local and trade links",
        "Digital PR mentions",
        "Toxic link cleanup",
      ],
      links: [],
    },
    {
      icon: "sparkle",
      title: "AI SEO for ChatGPT and Google AI",
      desc: "Clear answers, consistent facts and structured data that help AI tools quote and recommend you.",
      points: [
        "AI Overview answers",
        "Entity and schema work",
        "ChatGPT and Gemini checks",
      ],
      links: [{ href: "/services/ai-seo-services", label: "AI SEO services" }],
    },
    {
      icon: "trend",
      title: "SEO Audits and Monthly Reporting",
      desc: "A full SEO audit to start, then a monthly report on rankings, calls, forms and what we changed.",
      points: [
        "Full site audit",
        "Weekly rank tracking",
        "Calls and leads reported",
      ],
      links: [
        { href: "/services/local-seo-packages", label: "Local SEO packages" },
        {
          href: "/services/gbp-reinstatement-service",
          label: "Suspended profile help",
        },
      ],
    },
  ] as SeoCard[],
};

export const GROWTH = {
  title: "How Our SEO Company Grows Your Business",
  lead: "Rankings on Google, mentions in AI answers and pages that turn visitors into calls.",
  rows: [
    {
      key: "rank",
      title: "Climb to Page One for the Searches That Pay",
      body: [
        "We map the searches that bring buyers, then fix and build the pages that can rank for them. Technical fixes, on-page work and links move you up, and we track every keyword week by week.",
      ] as Rich,
      points: [
        "Keyword map by service",
        "Weekly rank tracking",
        "Page-one targets",
        "Competitor gap reports",
      ],
      cta: "See My Keyword Gaps",
    },
    {
      key: "ai",
      title: "Get Named in Google AI Overviews and ChatGPT",
      body: [
        "AI tools quote businesses with clear answers and consistent facts. We write answer-first content, add structured data and clean up your listings, the groundwork behind our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        ".",
      ] as Rich,
      points: [
        "Answer-first pages",
        "Schema markup",
        "Listing consistency",
        "AI mention checks",
      ],
      cta: "Check My AI Visibility",
    },
    {
      key: "leads",
      title: "Turn Organic Visits Into Calls and Booked Jobs",
      body: [
        "Traffic only matters when it calls. We tune pages for speed and clear next steps, track every call and form, and pair SEO with ",
        { href: "/services/google-ads", label: "Google Ads management" },
        " when you need leads sooner.",
      ] as Rich,
      points: [
        "Call and form tracking",
        "Faster pages",
        "Clear calls to action",
        "Monthly lead report",
      ],
      cta: "Turn My Visits Into Leads",
    },
  ],
  ai: {
    query: "who is the best local company for this job near me",
    intro: "For this job in your area,",
    bullets: [
      "Strong recent reviews",
      "Clear service pages",
      "Same name and number everywhere",
    ] as [string, string, string],
  },
};

export const STEPS = {
  title: "How We Run Your SEO, Step by Step",
  lead: "Fixes come first, then content and links that compound.",
  items: [
    {
      h: "Free SEO Audit and Keyword Map",
      p: "We crawl your site, check your profile and listings, and map the searches worth winning in your market.",
    },
    {
      h: "Fix, Build and Publish",
      p: "Technical fixes go live first, then new and improved pages, links and AI-ready answers every month.",
    },
    {
      h: "Track, Report and Expand",
      p: "Your report lists rankings, calls and leads every month, and we push harder on what is working.",
    },
  ] as [
    { h: string; p: string },
    { h: string; p: string },
    { h: string; p: string },
  ],
  audit: [
    ["Page speed", "behind"],
    ["Indexing", "gap"],
    ["Title tags", "open"],
    ["Backlinks", "behind"],
  ] as [string, "gap" | "behind" | "open" | "good"][],
  plan: ["Service pages", "City pages", "Schema", "Links", "AI answers"],
  launch: [
    "Speed fixes live",
    "Pages published",
    "Links earned",
    "Report sent",
  ],
};

export const CITIES = {
  title: "SEO Services Near You, City by City",
  lead: "Local teams for the markets we know best, and the same playbook for businesses anywhere in the US.",
  items: [
    {
      name: "Delaware SEO",
      href: "/services/delaware/seo",
      sub: "Dover · Wilmington · Newark",
    },
    {
      name: "Philadelphia SEO",
      href: "/services/philadelphia/local-seo",
      sub: "Center City · Main Line",
    },
    {
      name: "NYC Local SEO",
      href: "/services/nyc/local-seo",
      sub: "All five boroughs",
    },
    {
      name: "Small Business Local SEO",
      href: "/services/local-seo-for-small-business",
      sub: "Any town in the US",
    },
  ],
  other: "Somewhere else? We run SEO for businesses in all 50 states.",
};

export const REVIEWS = {
  title: "Google Reviews From Owners Who Hired Our SEO Team",
  lead: "Real reviews, straight from the Zonic Media Google profile.",
};

export const PRICING = {
  title: "SEO Plans for Small Businesses, Month to Month",
  compareTitle: "Compare Our SEO Plans Line by Line",
  addOnsTitle: "SEO Add-Ons When You Need More",
  customTitle: "Need an SEO Plan for Several Locations?",
};

export const FAQ = {
  title: "SEO Services Questions, Answered",
  lead: "What SEO includes, what it costs, how long it takes and how to choose a company.",
  items: [
    {
      q: "What are SEO services?",
      a: "SEO services are the ongoing work that helps your business show up in unpaid search results: technical fixes, keyword research, on-page content, local listings, links and now visibility in AI answers. The aim is more calls, forms and customers, not just more traffic.",
    },
    {
      q: "What do your SEO services include?",
      a: "Technical SEO, on-page SEO and new content, local SEO and Google Business Profile work, link building, AI search optimization and monthly reporting. Every plan starts with a full audit, and you see what we changed each month alongside the calls and leads it brought.",
    },
    {
      q: "How much do your SEO services cost?",
      a: "Our SEO plans are $297, $750 or $1,500 a month with no long-term contract. Which plan fits comes down to how many services and locations you want ranked, and the free audit shows that before you commit.",
    },
    {
      q: "How long does SEO take to work?",
      a: "Technical fixes and profile updates can lift visibility within weeks. Rankings for competitive searches usually build over several months, depending on your market and where your site starts. Your monthly report shows the movement, so you are never guessing.",
    },
    {
      q: "How do I choose an SEO company near me?",
      a: "Pick one that reports calls and leads, explains what it changes, leaves every account in your name and works month to month. Ask for a free audit first; how well it reads your market tells you more than any sales pitch.",
    },
    {
      q: "Can you guarantee first-page rankings?",
      a: "No honest SEO agency can, because Google decides rankings. What we commit to is the work: fixes, pages, links and reporting every month, aimed at the searches that bring you customers, with the results shown plainly.",
    },
    {
      q: "Does SEO still matter with Google AI Overviews?",
      a: "It matters more. AI answers pull from the same signals SEO builds: clear pages, consistent business facts, reviews and links. Businesses that rank well are the ones AI tools tend to cite, so SEO now wins you clicks and AI mentions together.",
    },
    {
      q: "Do you offer technical SEO services on their own?",
      a: "Yes. We can run a technical SEO audit and fix speed, indexing, structured data and site structure as a standalone project, then hand back a clean site or carry on with monthly SEO if you want ongoing growth.",
    },
    {
      q: "Do you provide SEO services for small businesses?",
      a: "That is most of our work. We serve small and mid-size businesses across 20+ industries, from home services to clinics and law firms, and focus on the local and service searches that turn into real customers.",
    },
  ],
};

export const AUDIT = {
  title: "Get a Free SEO Audit for Your Website",
  lead: [
    "Send your website and the services you sell. We check your rankings, technical health and listings, then send a plain plan. Want to know who you would work with? Read ",
    { href: "/about", label: "about our team" },
    " or browse ",
    { href: "/services", label: "all our services" },
    ".",
  ] as Rich,
  points: [
    "Technical health check",
    "Keyword gap report",
    "Google profile review",
    "A plain next-step plan",
  ] as [string, string, string, string],
  form: {
    formType: "seo-services",
    badge: "Free SEO audit",
    title: "Request Your Free SEO Audit",
    subtitle: "Free, with nothing to sign.",
    submitText: "Send My Free SEO Audit",
    messageLabel: "Your website and main services",
    messagePlaceholder:
      "yourwebsite.com, the services you sell and the areas you serve",
  },
};

export const BANNER = {
  title: "Be the Business Customers Find First on Google",
  lead: "Better rankings, AI mentions and more calls, run by one SEO team that shows its work.",
  icons: ["search", "trend"] as [IconKey, IconKey],
};
