import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* ELECTRICIAN MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted (25 Oct), so no ranking
   report or volumes were pulled. The live title's core term ("Electrician
   Marketing Agency USA") stays at the front of the new title, and every
   phrase in the live keywords meta is carried by the title, H1, an H2/H3
   or an FAQ question.
   Web research (25 Oct): top results stress split campaigns by job type
   (emergency vs panel upgrades vs EV chargers), high-margin electrification
   work, Local Services Ads, review management, mobile sites with call
   buttons, and AI tools drawing on listings and reviews. Customers search
   "electrician near me", "ev charger installation near me", "electrical
   panel upgrade near me" and "emergency electrician".
   Fresh wording only: nothing reused from the live page or other drafts.
   No prices, budgets or cost-per-lead figures anywhere. */

export const CONTENT: IndustryContent = {
  draftSlug: "electrician-marketing-agency-2",
  liveUrl: "/services/electrician-marketing-agency",
  niche: "Electrician",
  meta: {
    title: "Electrician Marketing Agency USA | Electrician SEO, Ads & Leads",
    description:
      "Electrician marketing agency for US electrical contractors: electrician SEO, Google Maps, Google Ads and websites that book panel, EV charger and emergency jobs.",
    keywords: [
      "electrician marketing agency",
      "electrical marketing agency",
      "electrician marketing company",
      "electrician digital marketing agency",
      "electrician internet marketing agency",
      "internet marketing services electricians",
      "electrical contractor web marketing",
      "electrician seo",
      "electrician advertising agency",
      "electrician internet marketing",
      "electrician lead generation",
      "marketing for electricians",
      "electrical contractor marketing",
      "seo for electricians",
      "electrician google ads",
      "electrician leads",
    ],
  },
  palette: PALETTES.amberIndigo,
  hero: {
    h1Lead: "Electrician",
    h1Icon: "electric",
    h1Rest: "Marketing Agency for More Calls and Bigger Jobs",
    lead: [
      "When the power cuts out or a new EV needs a charger, homeowners choose from the first electricians Google shows them. We put your shop there with electrician SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Maps profile work",
      },
      ", targeted ads and ",
      {
        href: "/services/electrical-website-design",
        label: "electrical website design",
      },
      " that turns visits into booked calls.",
    ],
    cta: "Get My Free Electrician Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-electrician/ev-chargers.webp",
        position: "64% 50%",
        query: "ev charger installation near me",
      },
      cardA: {
        icon: "bolt",
        title: "More EV charger installs",
        sub: "Garage and driveway jobs",
      },
      cardB: {
        icon: "electric",
        title: "More panel upgrades",
        sub: "Bigger tickets, booked online",
      },
      photoB: {
        src: "/images/free-website/free-electrician/panel-upgrades.webp",
        position: "38% 50%",
        query: "electrical panel upgrade near me",
      },
    },
  },
  services: {
    title: "Electrician Digital Marketing Agency Services",
    lead: "Every channel that sends electrical work your way, judged by booked jobs.",
    cta: "Audit My Electrical Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Listing for Electricians",
        desc: "Your categories, service list, coverage area and real job photos, set up so your listing rises for electrician, panel and outlet searches nearby.",
        points: [
          "Electrician categories fixed",
          "Service list fully built",
          "New-profile verification help",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Maps profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get a profile verified",
          },
        ],
      },
      {
        icon: "search",
        title: "Electrician SEO & Town Pages",
        desc: "A page for each electrical service and each town you cover, backed by citations and site fixes, so you climb the organic results.",
        points: [
          "Service and town pages",
          "Citations cleaned up",
          "Monthly rank tracking",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-electricians",
            label: "Local SEO for electricians",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for home service trades",
          },
        ],
      },
      {
        icon: "target",
        title: "Electrician PPC: Google Ads & LSA",
        desc: "Separate campaigns for emergency, panel and EV charger searches, so each job type gets its own keywords, hours and landing page.",
        points: [
          "Split campaigns by job type",
          "After-hours call ads",
          "No markup on your ad spend",
        ],
        links: [{ href: "/services/google-ads", label: "Managed Google Ads" }],
      },
      {
        icon: "monitor",
        title: "Websites for Electrical Contractors",
        desc: "Quick mobile sites with a sticky call button, clear service menus and online booking, built to turn worried searches into calls.",
        points: [
          "Click-to-call header",
          "Booking and quote forms",
          "Call source tracking",
        ],
        links: [
          {
            href: "/services/electrical-website-design",
            label: "Electrical website design",
          },
          { href: "/services/web-design", label: "Our web design work" },
        ],
      },
      {
        icon: "star",
        title: "Electrician Reviews & Profile Protection",
        desc: "Automatic review texts after each job, replies written for you, and quick action if Google ever takes your listing down.",
        points: [
          "Post-job review texts",
          "Owner replies drafted for you",
          "Suspension appeals handled",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile help",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "ChatGPT & Gemini Visibility",
        desc: "We line up the facts AI assistants check, so ChatGPT, Gemini and AI Overviews name your shop when people ask for an electrician.",
        points: [
          "Consistent listings",
          "Licensing shown clearly",
          "Direct-answer FAQ pages",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Electrician Marketing Services That Turn Searches Into Work",
    lead: "Maps rankings, AI recommendations and call-focused ads, all tracked to the jobs they produce.",
    rows: [
      {
        title: "Show Up First for “Electrician Near Me”",
        body: [
          "Urgent electrical calls usually go to the three shops on the map. We tighten up your profile, give every town in your service area its own page and line up a steady flow of reviews, so your listing makes that short list. Try our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Maps rank checker",
          },
          " to see today's position.",
        ],
        points: [
          "Electrician and contractor categories",
          "Town service-area pages",
          "Job photos every week",
          "Spam competitor reports",
        ],
        cta: "See My Electrician Map Rank",
        ui: {
          kind: "maps",
          query: "electrician near me",
          city: "Denver",
          category: "Electrician · Same-day service",
        },
      },
      {
        title: "Get Named When Homeowners Ask AI for an Electrician",
        body: [
          "More homeowners ask ChatGPT or Gemini which electrician can install a charger or upgrade a panel. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " hand those tools facts worth trusting: matching listings, reviews that mention the work, license details and clear answers on each service page. When those facts line up, your shop is the one they name.",
        ],
        points: [
          "Matching listings",
          "Job-specific reviews",
          "License details visible",
          "Answer-led service pages",
        ],
        cta: "Audit My Electrical AI Presence",
        ui: {
          kind: "ai",
          query:
            "licensed electrician to install an ev charger in my garage in austin",
          intro: "For EV charger installs in Austin,",
          bullets: [
            "Level 2 charger installs",
            "Panel capacity checks",
            "Licensed, insured electricians",
          ],
        },
      },
      {
        title: "Emergency Call Ads From an Electrician Advertising Agency",
        body: [
          "Power failures don't keep business hours. We run separate campaigns for emergency, panel and EV charger searches, keep call ads on overnight, block DIY and job-seeker clicks, and match each call to the keyword that produced it.",
        ],
        points: [
          "Overnight call campaigns",
          "Job-type ad groups",
          "DIY clicks blocked",
          "Calls matched to keywords",
        ],
        cta: "Plan My Electrical Ads",
        ui: {
          kind: "calls",
          title: "Electrical calls from ads",
          calls: [
            {
              service: "Half the house lost power",
              source: "Google Ads · Call",
              when: "Sat 11:48 PM",
            },
            {
              service: "EV charger install quote",
              source: "Google Ads",
              when: "Mon 10:20 AM",
            },
            {
              service: "200-amp panel upgrade",
              source: "Local Services Ads",
              when: "Tue 3:35 PM",
            },
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Electrician Lead Generation Without Shared Lists",
    body: [
      "Shared lead sites pass the same homeowner to several electricians and charge each of them. Our ",
      { href: "/services", label: "full marketing team" },
      " builds electrician leads that ring your line alone, backed by rankings, ads and a site you own. Every lead and customer relationship stays with you.",
    ],
    cta: "Build My Own Electrical Leads",
    colShared: "Shared lead lists",
    colOwn: "Leads that are yours",
    rows: [
      [
        "Who receives the request",
        "Several electricians at once",
        "Your office only",
      ],
      [
        "How fast you must respond",
        "Within minutes, or lose it",
        "They chose you already",
      ],
      [
        "Type of work",
        "Small, price-shopped calls",
        "Panel, EV and rewire jobs you target",
      ],
      [
        "When spending stops",
        "Requests stop the same day",
        "Your rankings stay put",
      ],
      [
        "Name they remember next time",
        "Whichever site they used",
        "Your shop and your number",
      ],
    ],
  },
  specialties: {
    title: "An Electrical Contractor Marketing Agency for Every Service",
    lead: "Homeowners shop for a panel swap differently than for a midnight outage, so we build separate pages, ads and follow-up for each service.",
    photo: {
      src: "/images/free-website/free-electrician/commercial-electrical.webp",
      alt: "Electrician in a hard hat wiring a commercial breaker panel",
      caption: "Residential and commercial electrical",
      sub: "Service calls, upgrades and new builds",
    },
    items: [
      {
        icon: "clock",
        name: "Emergency Electrical Repair",
        tactic: "Overnight call ads and a top map position",
      },
      {
        icon: "electric",
        name: "Panel Upgrades & Replacements",
        tactic: "Upgrade pages with booking forms and job photos",
      },
      {
        icon: "bolt",
        name: "EV Charger Installs",
        tactic: "Charger pages aimed at new EV owners nearby",
      },
      {
        icon: "home",
        name: "Rewiring Older Homes",
        tactic:
          "Older-home pages ranked for rewiring and knob-and-tube searches",
      },
      {
        icon: "sun",
        name: "Lighting & Fixture Installs",
        tactic: "Indoor and landscape lighting galleries with quote forms",
      },
      {
        icon: "shield",
        name: "Standby Generators",
        tactic: "Outage-season ads and generator quote pages",
      },
      {
        icon: "inspectList",
        name: "Electrical Inspections & Safety",
        tactic: "Inspection pages for buyers, sellers and insurers",
      },
      {
        icon: "building",
        name: "Commercial Electrical Contracts",
        tactic: "Facility and property contract pages with B2B ads",
      },
    ],
    more: "Do solar, smart-home or low-voltage work? Each gets its own plan as well.",
  },
  steps: {
    title: "How to Start With Our Electrician Marketing Company",
    lead: "You approve every step; Maps and ads move before organic results do.",
    items: [
      {
        h: "We Map Your Electrical Market",
        p: "We run the searches your customers use, from outages to EV chargers, across your towns, and show where you rank and who takes the calls you miss.",
      },
      {
        h: "Pick the Jobs Worth Chasing",
        p: "Together we choose the services, towns and campaigns to push first, favoring higher-value work such as panel upgrades, rewires and charger installs.",
      },
      {
        h: "Switch On and Track Every Call",
        p: "Profile updates, service pages, ads and review texts go live. A monthly report shows rankings, calls and which jobs each channel booked.",
      },
    ],
    audit: [
      ["Maps rank: electrician near me", "behind"],
      ["EV charger service page", "gap"],
      ["Emergency ad coverage", "open"],
      ["Google review count", "behind"],
    ],
    plan: [
      "Panel upgrades",
      "EV chargers",
      "Emergency calls",
      "Austin",
      "Round Rock",
    ],
    launch: [
      "Maps profile rebuilt",
      "Service pages live",
      "Split ad campaigns running",
      "Review texts active",
    ],
  },
  reviews: {
    title: "Client Reviews Straight From Our Google Profile",
    lead: "Posted by owners of service businesses we market, shown word for word.",
  },
  pricing: {
    title: "Electrical Marketing Agency Plans With No Annual Contract",
    compareTitle: "What Each Electrician Plan Includes",
    addOnsTitle: "Add Ads for Outage Season",
    customTitle: "Multiple shops or service areas?",
  },
  faq: {
    title: "Questions About Hiring a Marketing Agency for Electricians",
    lead: "What electrical contractors ask before hiring us, answered briefly.",
    items: [
      {
        q: "What does an electrical marketing agency do for contractors?",
        a: "It brings in calls from people who need an electrician and filters out the ones who don't. The work spans your Business Profile and its map position, SEO pages by service and town, paid search and LSA campaigns, a site built for calls, and a steady review program. You should also see which channel sent every booked job.",
      },
      {
        q: "How can an electrician get more customers without buying leads?",
        a: "Own the places people look first. Rank on Google Maps for your core services, publish a page for each high-value job, run ads on urgent and planned searches, and request a review after each finished job. Every call that follows belongs to your shop alone. Fast callbacks matter too, since many people try the next shop if nobody answers.",
      },
      {
        q: "Can you target EV charger and panel upgrade jobs?",
        a: "Yes, and we keep them separate. EV charger, panel upgrade and rewiring searches each get their own page and ad group, so you can push the jobs you want, see what each one books and shift effort as demand changes in your area. Bundled work, like a charger that needs a new panel, is tracked as well.",
      },
      {
        q: "How do electricians get emergency calls at night?",
        a: "Be visible and reachable after hours. We set your profile hours correctly, run call-only ads overnight on outage and sparking-outlet searches, and put a tap-to-call bar on every page. If you don't offer 24/7 service, those ads stay off so you only pay for calls you can take.",
      },
      {
        q: "What internet marketing services for electricians matter most?",
        a: "Start with a complete Google Business Profile and steady reviews, since the map is where urgent searches end. Next comes a fast site with service and town pages, then ads for emergency and high-value jobs. AI search visibility builds on that same foundation, so each layer makes the next one work harder.",
      },
      {
        q: "For a small shop, is an electrician internet marketing agency worth it?",
        a: "Often, yes. One agency can run the profile, pages, ads and reviews that a small shop rarely has time for, and you keep everything it builds. Look for month-to-month terms and reports built around phone calls and jobs won rather than clicks.",
      },
      {
        q: "How long does electrician SEO take to work?",
        a: "Profile and ad changes tend to reach your phone within the first weeks, while organic rankings typically need a few months to climb. Timing depends on how crowded your market is and your site's starting point; we report movement every month. Shops that already have reviews and a decent site usually move faster.",
      },
      {
        q: "Can my electrical company appear in ChatGPT answers?",
        a: "Yes. AI assistants favor businesses whose details match across the web and whose reviews describe real work. We align your listings, earn job-specific reviews, show your license and publish clear answers to common electrical questions, giving those tools solid reasons to name you. Reviews that mention specific jobs, like a panel swap, help the most.",
      },
      {
        q: "What do your electrician marketing plans cost?",
        a: "Pricing is simple: $297, $750 and $1,500 per month, and you can cancel any month. We add 0% markup to the ad spend you pay Google. The best fit comes down to your service list, your towns and whether you want ads managed for you.",
      },
      {
        q: "What happens if Google suspends my electrical business listing?",
        a: "Reinstatement is included on every plan, and our team has brought back 900+ suspended profiles. We find the cause, fix it, file the appeal with supporting documents and tidy the listing to lower the chance of a repeat. Common triggers include address settings, duplicate listings and category mix-ups.",
      },
    ],
  },
  audit: {
    title: "Find the Electrical Calls You're Missing, Free",
    lead: [
      "We test your Maps rank for outage, panel and charger searches, compare your profile and reviews with nearby electricians, and list the quickest fixes. Curious who else we help? Browse the ",
      { href: "/industries", label: "industries we serve" },
      ".",
    ],
    points: [
      "Cancel any month",
      "0% markup on your ad spend",
      "$297, $750 or $1,500 plans",
      "Reinstatement on all plans",
    ],
    form: {
      formType: "electrician-marketing",
      badge: "Free electrician audit",
      title: "Request a Free Electrician Marketing Audit",
      subtitle: "Free, no obligation.",
      submitText: "Send My Electrician Audit",
      messageLabel: "Your towns and electrical services",
      messagePlaceholder:
        "Where you work, the jobs you want more of, and whether you take emergency calls",
    },
  },
  banner: {
    title: "Be the Electrician Homeowners Call When the Lights Go Out",
    lead: "Start with a free audit and a short list of fixes for your shop.",
    icons: ["bolt", "electric"],
  },
};
