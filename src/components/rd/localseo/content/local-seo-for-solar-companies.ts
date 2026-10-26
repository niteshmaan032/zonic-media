/* Local SEO for Solar Companies — redesign draft copy (26 Oct 2026).
   Fresh copy for the Local SEO dropdown family; never reuse the live
   page, the electricians reference or the solar marketing draft wording
   (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: seo for solar companies 294
     impressions (pos 43.9) · solar seo services 150 (34.6) · solar
     company seo 143 (46.4) · seo for solar power companies 142 · seo for
     solar 120 · solar seo company 107 (27.9) · solar company seo near me
     105 (6.6) · solar seo 99 (37.2) · local seo for solar company 95 ·
     solar company local seo 90 · local seo for solar companies 85.
   - Semrush US: seo for solar companies 390 (KD 20) · solar seo 320 (17)
     · solar seo company 170 (22).
   - Web research (solar SEO guides, solar GBP category guide, AI
     visibility guides): "solar energy company" / "solar energy system
     service" are the usual primaries, with panel maintenance only when a
     crew does it; guides split residential, commercial and battery pages
     and add incentive/financing explainers; AI prompts cluster on
     incentives, net metering, battery backup and roof fit, and AI can
     repeat outdated incentive facts, so the AI row and two FAQs focus on
     keeping that content current; lead sites crowd the results, which
     became an FAQ.
   - Title keeps "Local SEO for Solar Companies" (live title) and adds
     "Solar SEO Services"; H1 uses the biggest term, "seo for solar
     companies". */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-solar-companies",
  audience: "Solar installers and solar energy companies",
  serviceName: "Local SEO for Solar Companies",
  meta: {
    title: "Solar SEO Services | Local SEO for Solar Companies",
    description:
      "SEO for solar companies that follows buyers from first question to signed install: Map Pack rankings, incentive and battery pages, reviews and AI answers.",
    keywords: [
      "seo for solar companies",
      "solar seo",
      "solar seo company",
      "solar seo services",
      "solar company seo",
      "local seo for solar companies",
      "solar company local seo",
      "seo for solar power companies",
      "solar installer seo company",
      "solar company seo services",
    ],
  },
  hero: {
    h1Lead: "SEO for Solar Companies",
    h1Rest: "From First Question to Signed Install",
    icon: "solar",
    lead: [
      "Solar buyers research for weeks before they call. Our solar SEO services put your installs in front of them at each stage: AI answers on incentives and batteries, the Map Pack for installers nearby, and pages that rank in your towns. It starts with your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ".",
    ],
    cta: "Get a Free Solar Ranking Audit",
    ui: {
      kind: "growth",
      maps: "towns",
      ai: "chat",
      growth: "pipeline",
      business: "Your Solar Co.",
      category: "Solar installer",
      query: "solar installers near me",
      areas: ["North county", "City center", "East suburbs", "Valley towns"],
      aiPrompt: "Which solar installer near me is worth a consultation?",
      aiReasons: ["Clear incentive guides", "Strong install reviews"],
      growthLabel: "Solar pipeline",
      leads: [
        ["System signed", "Battery page"],
        ["Site survey booked", "ChatGPT referral"],
        ["Savings consult request", "Google Maps"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 by area",
          title: "Top Installer Across Your Region",
          text: "Area pages and reviews keep you first in each town you install in.",
        },
        {
          label: "AI answers",
          badge: "Top pick",
          title: "Recommended While Buyers Research",
          text: "AI assistants cite your incentive and battery guides during long research.",
        },
        {
          label: "Pipeline",
          badge: "Moving",
          title: "Consults Turning Into Signed Systems",
          text: "Track each lead from consult request to site survey to signed install.",
        },
      ],
    },
  },
  searches: {
    title: "What Homeowners Search on the Way to Solar",
    lead: "Solar buyers move from questions to comparisons to local installers; we place a page or profile signal at each step.",
    groups: [
      {
        icon: "sun",
        label: "Early solar research searches",
        terms: [
          "is solar worth it in my state",
          "solar tax credit",
          "net metering explained",
          "how many solar panels do i need",
          "solar lease vs buy",
          "solar panels on an older roof",
        ],
      },
      {
        icon: "solar",
        label: "Solar install and battery searches",
        terms: [
          "solar panel installation near me",
          "solar battery backup installer",
          "home battery storage",
          "ev charger with solar",
          "ground mount solar installer",
          "solar roof replacement",
        ],
      },
      {
        icon: "pin",
        label: "Solar installer comparison searches",
        terms: [
          "best solar installers near me",
          "solar companies in (your city)",
          "local solar installer reviews",
          "solar panel repair near me",
          "solar panel cleaning service",
          "commercial solar installer",
        ],
      },
    ],
  },
  services: {
    title: "Solar Company SEO,\nBuilt for Long Buying Cycles",
    lead: "Six services that follow a solar buyer from first search to signed contract, each tied to the systems you actually sell.",
    cta: "Review My Solar Website",
    items: [
      {
        icon: "pin",
        title: "Solar Map Pack and Profile Work",
        desc: "We confirm the right solar category in your picker, list rooftop, battery and commercial services, set a true service area and post installs weekly.",
        points: [
          "Solar category confirmed",
          "Battery services listed",
          "Install photo posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
      {
        icon: "sun",
        title: "Solar Education Pages That Rank",
        desc: "Answer pages on incentives, net metering, roof fit and battery backup, written for your state's rules and rechecked whenever policies change.",
        points: [
          "Incentive explainers",
          "Net metering guides",
          "Policy update checks",
        ],
        links: [],
      },
      {
        icon: "file",
        title: "Solar System and Town Pages",
        desc: "Separate pages for rooftop, battery, ground-mount and commercial systems, plus town pages covering local permits, utilities and finished installs.",
        points: [
          "System-type pages",
          "Town and utility pages",
          "Install case write-ups",
        ],
        links: [
          {
            href: "/services/solar-website-design",
            label: "Solar website design",
          },
          { href: "/services/web-design", label: "Fast, crawlable websites" },
        ],
      },
      {
        icon: "star",
        title: "Solar Install Reviews and Replies",
        desc: "Review requests go out after activation, when owners first watch their system produce, asking them to mention the system type and town.",
        points: [
          "Post-activation requests",
          "System type in reviews",
          "Owner replies within days",
        ],
        links: [],
      },
      {
        icon: "layers",
        title: "Solar Citations and Local Authority",
        desc: "Consistent business details across directories, plus links from local news, home builders, HOAs and energy groups that cover solar in your area.",
        points: [
          "Directory cleanup",
          "Builder and HOA links",
          "Local energy press",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstating suspended listings",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for Solar Shoppers",
        desc: "Accurate, current answers on incentives, batteries and warranties, so ChatGPT, Gemini and AI Overviews recommend your solar company instead of a lead site.",
        points: [
          "Current incentive facts",
          "Warranty and equipment facts",
          "AI citation checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Solar SEO Grows Your Installation Pipeline",
    lead: "More visibility while buyers research, more AI mentions, and leads you can trace to the page that won them.",
    rank: {
      title: "Climb for Solar Installer and Battery Searches",
      body: [
        "We group solar searches by buying stage and town, from incentive questions to installer comparisons, and give each its own page. Rooftop, battery and commercial terms are rechecked weekly, showing where you lead and where a lead-gen site still outranks you.",
      ],
      points: [
        "Buying-stage keyword map",
        "Weekly rank checks",
        "Battery term tracking",
        "Lead site gap list",
      ],
      cta: "List My Solar Search Gaps",
      keywords: [
        ["solar installers near me", 26, 3],
        ["solar battery installer + your town", 35, 4],
        ["solar companies in your city", 19, 2],
        ["is solar worth it in my state", 41, 6],
      ],
    },
    ai: {
      title: "Win the AI Answer on Solar and Battery Questions",
      body: [
        "AI assistants answer solar questions with whatever sources look current and local. We publish clear pages on incentives, batteries and roof fit, update them when rules change, and align your listings so the answer names you. It is the core of our ",
        { href: "/services/ai-seo-services", label: "AI search work" },
        ".",
      ],
      points: [
        "Current incentive pages",
        "Battery backup answers",
        "Aligned business listings",
        "AI mention log",
      ],
      cta: "See If AI Recommends My Solar Company",
      query: "best solar installer near me with battery backup",
      intro: "For solar with battery backup near you,",
      bullets: [
        "Up-to-date incentive page",
        "Battery install reviews",
        "Licensed and insured",
      ],
    },
    leads: {
      title: "Trace Solar Leads From Click to Site Survey",
      body: [
        "Solar leads take longer to close, so source data matters. Each call and consultation form is tagged by page and search, intake forms collect roof and utility details up front, and ",
        { href: "/services/google-ads", label: "Google Ads for solar" },
        " can test new territories before you commit crews.",
      ],
      points: [
        "Consultation source tags",
        "Roof and utility intake",
        "Click-to-call on mobile",
        "Monthly pipeline report",
      ],
      cta: "Map My Solar Lead Sources",
      items: [
        ["Battery backup call", "Google Maps", "Mon 9:15 AM"],
        ["Site survey request", "Battery page", "Tue 1:05 PM"],
        ["Rooftop consultation", "Town page", "Wed 10:30 AM"],
        ["Commercial solar inquiry", "AI Overview link", "Thu 3:50 PM"],
      ],
    },
  },
  results: {
    title: "What Solar Installers Gain Over the Buying Cycle",
    lead: "Solar results follow the buyer's pace: profile fixes, then education pages, then more consultations over time.",
    cta: "Sketch My Solar Growth Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Solar Profile Corrected",
        text: "We confirm the solar category, list battery and commercial services, and fix the details buyers check first.",
      },
      {
        when: "Month 1",
        title: "Incentive and Battery Pages Live",
        text: "Clear pages on incentives, net metering and backup power go live for buyers still researching.",
      },
      {
        when: "Months 2–4",
        title: "Solar Installer Reviews Grow",
        text: "Post-activation review requests add more owner stories, and your Maps listing reaches toward more nearby searches.",
      },
      {
        when: "Through the buying cycle",
        title: "Fuller Solar Survey Calendar",
        text: "Readers from earlier research return as consultation requests, each traced to the page that started it.",
      },
    ],
    wins: [
      {
        icon: "solar",
        title: "Solar Buyers Who Arrive Informed",
        text: "Homeowners who read your incentive and battery pages reach the consultation with fewer basic questions.",
      },
      {
        icon: "shield",
        title: "Exclusive Solar Leads, Not Shared Ones",
        text: "Requests come straight from your pages and profile rather than lists sold to several installers.",
      },
      {
        icon: "sparkle",
        title: "Accurate Solar Facts in AI Answers",
        text: "Current incentive and warranty pages help AI tools describe your company correctly instead of guessing.",
      },
      {
        icon: "star",
        title: "Reviews Describing the Solar System",
        text: "Owners mention their battery, panel layout and town, giving future buyers concrete detail to trust.",
      },
    ],
  },
  compare: {
    title: "Solar SEO From Zonic Beside a One-Size Agency",
    lead: "How our solar work differs from the SEO installers often buy elsewhere.",
    rows: [
      {
        topic: "Solar incentive pages",
        other:
          "Incentive content is often written once and then left to go stale.",
        zonic:
          "Incentive and net metering pages written for your state and dated whenever rules change.",
      },
      {
        topic: "Battery and storage searches",
        other:
          "Batteries usually appear as one bullet on a general solar page.",
        zonic:
          "Dedicated battery backup pages aimed at outage and storage searches in your towns.",
      },
      {
        topic: "Solar lead-site competition",
        other:
          "Many plans ignore lead sites that outrank installers in local results.",
        zonic:
          "Town pages, install photos and system-specific reviews built to compete with lead sites nearby.",
      },
      {
        topic: "Solar sales cycle reporting",
        other:
          "Reports can judge success on monthly traffic and miss slow-closing solar deals.",
        zonic:
          "Calls and consultation forms tagged by page, so longer sales still show their source.",
      },
      {
        topic: "Solar ad budgets",
        other: "Ad management fees can grow as your monthly spend grows.",
        zonic:
          "Google Ads for testing new territories with a 0% markup on your ad spend.",
      },
      {
        topic: "Solar SEO commitment",
        other:
          "Contracts may run longer than a solar buyer's whole research phase.",
        zonic:
          "Month to month; the profile, website and tracking accounts belong to you.",
      },
    ],
  },
  steps: {
    title: "Our Solar SEO Company's Three-Stage Plan for Solar Installers",
    lead: "Local SEO for solar companies in three stages: fix the foundation, build research and install pages, then refine around what closes.",
    items: [
      {
        h: "Solar Search and Competitor Review",
        p: "We study your profile, site and the installers and lead sites ranking in each town, then pick target searches by buying stage.",
      },
      {
        h: "Publish Solar Pages and Fix the Profile",
        p: "Category and technical fixes go first, followed by battery, incentive and town pages plus a review flow after activation.",
      },
      {
        h: "Measure Solar Leads, Refine Monthly",
        p: "You get rankings, calls and consultation forms by system type each month, and we put more work behind what turns into contracts.",
      },
    ],
    audit: [
      ["Maps position", "behind"],
      ["Battery page", "gap"],
      ["Incentive content", "open"],
      ["Page speed", "behind"],
    ],
    plan: [
      "Battery page",
      "Incentive guide",
      "Town pages",
      "Activation reviews",
      "Local links",
    ],
    launch: [
      "Profile corrected",
      "Pages published",
      "Reviews requested",
      "Leads tagged",
    ],
  },
  explore: {
    title: "Solar Growth Services Beyond SEO",
    lead: "As a solar SEO company, we pair rankings with a site that explains solar well and ads that test new territories.",
    items: [
      {
        name: "Solar Marketing",
        sub: "Full-funnel plan for installers",
        href: "/services/solar-marketing-agency",
        icon: "solar",
      },
      {
        name: "Solar Websites",
        sub: "Pages that explain, then convert",
        href: "/services/solar-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Search ads for ready buyers",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Our playbook for home pros",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Selling roofing or EV chargers alongside solar? Ask how one plan can rank every line.",
  },
  reviews: {
    title: "For Solar Installers: Our 5.0 Google Rating in Full",
    lead: "These reviews appear exactly as clients posted them on Google.",
  },
  pricing: {
    title: "Solar SEO Plans With No Lock-In",
    compareTitle: "Solar Company SEO Plans in Detail",
    addOnsTitle: "Add-Ons for Growing Solar Installers",
    customTitle: "Installing Solar in Several States?",
  },
  faq: {
    title: "Answers on SEO for Solar Installers",
    lead: "Timelines, costs, incentive content and AI search, answered for solar businesses.",
    items: [
      {
        q: "What does SEO for solar companies cover?",
        a: "It covers the work that gets an installer found during a long research process: a tuned Google Business Profile, pages for each system type and town, accurate incentive and battery content, install reviews and local links. The goal is to be visible from the first question through to the installer comparison.",
      },
      {
        q: "What do solar SEO plans cost?",
        a: "There are three: $297, $750 or $1,500 a month, each billed month to month. Single-market installers usually begin on the first; companies selling across several territories, or wanting Google Ads run as well, tend to move up to a larger plan. Your free audit recommends one.",
      },
      {
        q: "How quickly can SEO bring a solar installer leads?",
        a: "New battery or town pages and profile corrections often show Maps movement inside a few weeks. Broad terms such as solar installers in a big city take longer, usually months. Because solar buyers research for a long time, early content keeps drawing readers who become customers later.",
      },
      {
        q: "Should a solar company write about incentives and net metering?",
        a: "Yes, carefully. Incentive and net metering questions are where many buyers start, and AI tools quote pages that explain them well. We keep those pages accurate for your state, date every update, and avoid promising savings an installer cannot guarantee.",
      },
      {
        q: "Which Google Business Profile category should solar installers use?",
        a: "Choose the label that matches your main work, usually solar energy company or solar energy system service, and confirm it in your own picker because names change. Add secondaries such as panel maintenance only if your crews actually do that work.",
      },
      {
        q: "Can solar SEO compete with lead-generation sites?",
        a: "Yes, locally. Lead sites rank broadly but thinly. An installer with real town pages, install photos, reviews naming the system and a strong Maps profile can outrank them for nearby searches, and the leads it earns are not shared with other installers.",
      },
      {
        q: "Do solar companies need separate battery and EV charger pages?",
        a: "Usually yes. Battery backup and EV charging buyers search on their own terms and ask different questions about outages, sizing and permits. A dedicated page for each can rank for those searches and gives AI tools a clear, specific source.",
      },
      {
        q: "Do you offer SEO for commercial solar installers?",
        a: "Yes. Commercial buyers search for things like rooftop solar for warehouses, solar carports and demand charges. We build those pages, add commercial services to your profile and report commercial inquiries apart from residential leads.",
      },
      {
        q: "Will AI search change how homeowners pick a solar company?",
        a: "It already shapes early research. Google AI Overviews and ChatGPT summarize incentives and battery options, then often name local installers with clear, current pages and steady reviews. Keeping that information accurate is now part of solar SEO.",
      },
      {
        q: "Are solar companies tied to a long SEO contract?",
        a: "No. You can stop in any month. The Google profile, website and tracking accounts belong to you from the start, and the monthly report itemizes every change our team made.",
      },
    ],
  },
  audit: {
    title: "Get a Free SEO Review for Your Solar Company",
    lead: [
      "Share your site and the systems you most want to sell. We set your Maps visibility, pages and reviews beside the installers and lead sites ahead of you, then send a short plan. Meet ",
      { href: "/about", label: "our team" },
      " or view ",
      { href: "/services", label: "every service we offer" },
      ".",
    ],
    points: [
      "Maps visibility by town",
      "Missing system pages",
      "Profile category check",
      "Clear first-month priorities",
    ],
    form: {
      formType: "local-seo",
      badge: "Free solar visibility review",
      title: "Request My Solar Visibility Review",
      subtitle: "Free and no-obligation.",
      submitText: "Send My Solar Review",
      messageLabel: "Your website and the systems you sell",
      messagePlaceholder:
        "yourwebsite.com, rooftop, battery or commercial, plus your territory",
    },
  },
  banner: {
    title: "Be the Installer Buyers Trust Before They Call",
    lead: "Visible during research, named in AI answers and traceable to signed installs, with a plain report every month.",
  },
};
