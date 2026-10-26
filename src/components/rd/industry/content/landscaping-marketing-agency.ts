import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* LANDSCAPING MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted (25 Oct), so no ranking
   report or volumes were pulled. The live title's core term ("Landscaping
   Marketing Agency USA") stays at the front of the new title, and every
   phrase in the live keywords meta is carried by the title, H1, an H2/H3
   or an FAQ question.
   Web research (25 Oct): recurring maintenance contracts are the core
   revenue model; hardscape, lighting and outdoor-living work is growing
   faster than mowing and needs its own campaigns and landing pages;
   Google Business Profile, reviews and project photos drive "landscapers
   near me" results; AI Overviews pull from sites that answer homeowner
   questions plainly; off-season (snow, planning) marketing smooths cash
   flow. Customers search "landscapers near me", "lawn care service near
   me", "paver patio installers" and "landscape design near me".
   Fresh wording only: nothing reused from the live page or other drafts.
   No prices, budgets or cost-per-lead figures anywhere. */

export const CONTENT: IndustryContent = {
  draftSlug: "landscaping-marketing-agency-2",
  liveUrl: "/services/landscaping-marketing-agency",
  niche: "Landscaping",
  meta: {
    title: "Landscaping Marketing Agency USA | Landscaping SEO, Ads & Leads",
    description:
      "Landscaping marketing agency for US landscapers and lawn care companies: landscaping SEO, Google Maps, Google Ads and websites that win contracts and hardscape jobs.",
    keywords: [
      "landscaping marketing agency",
      "landscaping digital marketing agency",
      "lawn care marketing agency",
      "landscaping marketing company",
      "landscaping ad agency",
      "landscape marketing ideas",
      "landscaper digital marketing company",
      "landscaping seo",
      "landscaping advertising agency",
      "landscaping internet marketing",
      "landscaping lead generation",
      "lawn care marketing",
      "marketing for landscapers",
      "landscaping google ads",
      "landscaping leads",
      "hardscaping marketing",
    ],
  },
  palette: PALETTES.greenSky,
  hero: {
    h1Lead: "Landscaping",
    h1Icon: "grass",
    h1Rest: "Marketing Agency for Full Crews and Bigger Builds",
    lead: [
      "Homeowners search “landscapers near me” in early spring and pick from the first few names they see. We put yours there with landscaping SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile setup",
      },
      ", seasonal ads and ",
      {
        href: "/services/landscaping-website-design",
        label: "landscaping website design",
      },
      " that shows off your best projects.",
    ],
    cta: "Get My Free Landscaping Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-landscaping/lawn-care.webp",
        position: "36% 50%",
        query: "lawn care service near me",
      },
      cardA: {
        icon: "grass",
        title: "More maintenance contracts",
        sub: "Weekly routes that renew",
      },
      cardB: {
        icon: "layers",
        title: "More hardscape projects",
        sub: "Patios, walls and walkways",
      },
      photoB: {
        src: "/images/free-website/free-landscaping/hardscaping.webp",
        position: "44% 50%",
        query: "paver patio installers near me",
      },
    },
  },
  services: {
    title: "Landscaping Digital Marketing Agency Services",
    lead: "All the channels that win landscaping work, each tied to signed jobs.",
    cta: "Audit My Landscaping Marketing",
    items: [
      {
        icon: "pin",
        title: "Landscaper Google Business Profile",
        desc: "Services, service areas, categories and seasonal project photos, arranged to lift your listing for lawn, design and patio searches.",
        points: [
          "Landscaper categories set",
          "Seasonal project photos",
          "Help verifying new profiles",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile setup",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Profile verification help",
          },
        ],
      },
      {
        icon: "search",
        title: "Landscaping SEO by Suburb",
        desc: "Pages for every service and town on your routes, plus citations and site fixes, so you outrank crews competing for the same yards.",
        points: [
          "Service and suburb pages",
          "Citation cleanup and building",
          "Town-level rank reports",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-landscaping-companies",
            label: "Local SEO for landscapers",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home pros",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads From a Landscaping Ad Agency",
        desc: "Targeted search and Local Services Ads split by maintenance, design and hardscape, launched before spring demand peaks in your area.",
        points: [
          "Separate maintenance and build ads",
          "Early-spring launch",
          "Ad spend billed at cost",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for landscapers" },
        ],
      },
      {
        icon: "monitor",
        title: "Landscaping Websites With Galleries",
        desc: "Photo-led sites with project galleries, a quote form on every page and tap-to-call, built to turn browsing homeowners into consults.",
        points: [
          "Before-and-after galleries",
          "Quote form on every page",
          "Leads tracked by source",
        ],
        links: [
          {
            href: "/services/landscaping-website-design",
            label: "Landscaping website design",
          },
          { href: "/services/web-design", label: "Website builds" },
        ],
      },
      {
        icon: "star",
        title: "Reviews & Profile Recovery",
        desc: "Review texts after each visit or project, replies written for you, and suspension recovery from a team that has reinstated 900+ profiles.",
        points: [
          "Visit and project review texts",
          "Owner replies written",
          "Suspended listing recovery",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "GBP reinstatement",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search for Landscapers",
        desc: "Matching listings, project reviews and plain answers help ChatGPT, Gemini and AI Overviews point homeowners to your crew.",
        points: [
          "Same details on every listing",
          "Reviews describing projects",
          "Plain-answer FAQ pages",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI SEO for landscapers",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Landscaping Marketing Services That Win Jobs on Google and AI",
    lead: "Map rankings, AI recommendations and a website that sells your work, timed to the season.",
    rows: [
      {
        title: "Take a Top-3 Spot for “Landscapers Near Me”",
        body: [
          "Spring buyers compare the three landscapers Google Maps shows first. We tighten your profile, create pages for each suburb you mow and build in, and keep reviews flowing so your pin lands among them. Fresh photos after each project help too. Use our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Maps ranking tool",
          },
          " to see where you sit.",
        ],
        points: [
          "Landscaper and lawn categories",
          "Suburb landing pages",
          "Project photos each week",
          "Spam listings reported",
        ],
        cta: "Check My Landscaping Map Rank",
        ui: {
          kind: "maps",
          query: "landscapers near me",
          city: "Charlotte",
          category: "Landscaper · Design consults",
        },
      },
      {
        title: "Get Suggested When Homeowners Ask AI for a Landscaper",
        body: [
          "Homeowners now ask ChatGPT or an AI Overview who builds patios or handles weekly lawn care nearby. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search visibility service",
          },
          " feeds them details to trust: consistent listings, reviews describing finished projects, labeled photos and plain answers on each service page. That makes your crew the easy answer.",
        ],
        points: [
          "Listings that agree",
          "Project-specific reviews",
          "Labeled project photos",
          "Service-area answers",
        ],
        cta: "Audit My Landscaping AI Presence",
        ui: {
          kind: "ai",
          query: "landscaping company that builds paver patios in raleigh",
          intro: "For paver patios around Raleigh,",
          bullets: [
            "Custom patio and wall design",
            "Weekly lawn maintenance plans",
            "Insured, local crews",
          ],
        },
      },
      {
        title: "A Website That Sells Your Best Landscaping Work",
        body: [
          "Homeowners judge landscapers by their photos. We build fast sites with before-and-after galleries, a quote form on every page and click-to-call, then track which pages and ads produce each consultation request. Every request reaches your inbox with the page and search that sent it.",
        ],
        points: [
          "Project galleries by service",
          "Short quote forms",
          "Click-to-call buttons",
          "Lead source tracking",
        ],
        cta: "Plan My Landscaping Website",
        ui: {
          kind: "website",
          url: "yourcompany.com/landscaping",
          headline: "Outdoor spaces designed, built and kept sharp",
          services: [
            "Lawn maintenance",
            "Patios & walls",
            "Landscape design",
            "Seasonal cleanups",
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Landscaping Lead Generation That Builds Contracts",
    body: [
      "Shared lead sites send the same yard to several landscapers, and the low bid usually wins. Our ",
      { href: "/services", label: "marketing services" },
      " bring landscaping leads that reach only you, so you can sell maintenance contracts instead of one-off cuts. Contract customers renew, refer neighbors and add projects over time.",
    ],
    cta: "Get Landscaping Leads of My Own",
    colShared: "Shared yard leads",
    colOwn: "Leads you generate",
    rows: [
      ["Who sees the request", "A handful of crews", "Just your company"],
      [
        "How jobs get decided",
        "Lowest bid, most often",
        "Your photos and reviews",
      ],
      [
        "Typical job",
        "One-time mow or cleanup",
        "Seasonal contract or project",
      ],
      ["When spending ends", "Requests dry up", "Pages and reviews stay live"],
      [
        "Who they call next year",
        "Whoever bids lowest again",
        "You, for renewals and add-ons",
      ],
      [
        "What builds over time",
        "Nothing; each lead is a one-off",
        "A route of repeat customers",
      ],
    ],
  },
  specialties: {
    title: "Lawn Care Marketing Agency Plans for Each Service",
    lead: "Weekly mowing, design-build and snow work sell to different buyers, so every service is marketed to its own audience and season.",
    photo: {
      src: "/images/free-website/free-landscaping/seasonal-cleanups.webp",
      alt: "Landscaping crew raking leaves and trimming shrubs during a fall cleanup",
      caption: "Maintenance and build crews",
      sub: "Weekly routes, projects and cleanups",
    },
    items: [
      {
        icon: "grass",
        name: "Lawn Care & Mowing",
        tactic: "Route-town pages that sell weekly service plans",
      },
      {
        icon: "yard",
        name: "Landscape Design Consults",
        tactic: "Consult offers with project galleries and design pages",
      },
      {
        icon: "layers",
        name: "Patios, Walls & Hardscapes",
        tactic: "High-value patio ads and before-and-after pages",
      },
      {
        icon: "water",
        name: "Irrigation & Sprinklers",
        tactic: "Spring startup and winterization reminder campaigns",
      },
      {
        icon: "leaf",
        name: "Spring & Fall Cleanups",
        tactic: "Spring and fall offers emailed to past clients",
      },
      {
        icon: "sun",
        name: "Landscape Lighting Add-Ons",
        tactic: "Add-on offers on patio and design pages",
      },
      {
        icon: "tree",
        name: "Tree & Shrub Care",
        tactic: "Trimming pages paired with maintenance contract upsells",
      },
      {
        icon: "snow",
        name: "Snow & Ice Contracts",
        tactic: "Winter contract pages for homes and properties",
      },
    ],
    more: "Install sod, drainage or water features? We cover those too.",
  },
  steps: {
    title: "How Our Landscaping Marketing Company Gets You Started",
    lead: "Start in late winter so pages and ads are live before spring demand.",
    items: [
      {
        h: "Free Landscaping Search Audit",
        p: "We run the searches homeowners use in your towns, from mowing to patios, and show where you rank, who wins those yards and what to fix.",
      },
      {
        h: "A Plan Split by Season and Service",
        p: "We pick the services, suburbs and campaigns to push first, weighted toward contracts and higher-value builds like hardscaping and design.",
      },
      {
        h: "Live Before the Spring Rush",
        p: "Profile updates, suburb pages, ads and review texts all launch together. Monthly reports show rankings, calls, quote requests and their sources.",
      },
    ],
    audit: [
      ["Map rank: landscapers near me", "behind"],
      ["Project photo gallery", "gap"],
      ["Maintenance plan page", "open"],
      ["Reviews vs nearby crews", "behind"],
    ],
    plan: [
      "Maintenance plans",
      "Hardscaping",
      "Charlotte",
      "Matthews",
      "Spring ads",
    ],
    launch: [
      "Business Profile updated",
      "Suburb pages published",
      "Spring ads scheduled",
      "Review requests on",
    ],
  },
  reviews: {
    title: "Google Reviews Left by Our Clients",
    lead: "Owners of local service companies, in their own words.",
  },
  pricing: {
    title: "Landscaping Marketing Plans, No Long Contracts",
    compareTitle: "Compare Landscaping Marketing Plans",
    addOnsTitle: "Add Spring and Fall Campaigns",
    customTitle: "Several crews or service regions?",
  },
  faq: {
    title: "Questions for a Landscape Marketing Company",
    lead: "Seasons, contracts, ads, SEO and AI search, in short answers.",
    items: [
      {
        q: "How does a landscaping marketing agency help landscapers grow?",
        a: "It fills your schedule with the right work. The job spans Maps rankings for your Google Business Profile, landscaping SEO pages for each service and suburb, ads timed to the season, project showcases on your website, review collection and follow-up that wins contracts. A monthly report ties each channel to signed work.",
      },
      {
        q: "What landscape marketing ideas work best in early spring?",
        a: "Get visible before the first warm weekend. Refresh your Google profile with new photos, send renewal offers to last year's clients, publish cleanup and maintenance pages and switch on ads for mowing and design searches. Contracts signed early keep crews busy through fall, and the same approach sells snow and cleanup contracts each autumn.",
      },
      {
        q: "How can landscapers sell more maintenance contracts?",
        a: "Make the contract the default offer. Put plan options on your website and quote forms, show what each visit includes, follow up after one-time jobs with a seasonal plan and send renewal reminders before spring. Reviews from long-term clients also help close new contracts.",
      },
      {
        q: "How do I get more hardscaping and patio leads?",
        a: "Give those buyers their own path. We build hardscape and patio pages with project galleries, run separate ads for design-build searches and add a consult form, so big-ticket inquiries don't get lost among mowing requests and get answered first. Each finished project you photograph makes the next consult easier to win.",
      },
      {
        q: "Should I hire a landscaping advertising agency or run ads myself?",
        a: "If you have time to manage keywords, negatives and call tracking every week, you can run ads yourself. Most owners don't, which is where a marketing agency for landscapers helps: separate campaigns by service, seasonal timing, wasted clicks blocked and calls tied to booked work. Spend can also shift away from services once crews are fully booked.",
      },
      {
        q: "Is landscaping internet marketing worth it during winter?",
        a: "Yes, if you use the quiet months well. Winter is when we build pages, gather reviews and line up ads, and when homeowners start planning spring projects. Snow and holiday lighting campaigns can also keep crews earning while lawns are dormant, and many competitors go quiet, so rankings are easier to move.",
      },
      {
        q: "Why hire a landscaper digital marketing company instead of doing it yourself?",
        a: "Time and focus. Ranking on Maps, writing service pages, running seasonal ads and chasing reviews is weekly work that competes with running crews. A dedicated team handles it month to month, and you keep the website, profile and accounts it builds. You also get one point of contact who understands seasonal crews.",
      },
      {
        q: "How long does landscaping SEO take to bring in calls?",
        a: "Profile and ad updates often lift calls inside a few weeks, but organic rankings for service and suburb pages build over several months. Starting in the off-season means the climb happens before spring demand. Monthly reports show what has moved, and new suburb pages give the map more to work with.",
      },
      {
        q: "Can my landscaping company show up in AI Overviews?",
        a: "Yes. AI answers favor companies whose details agree across listings and whose reviews describe real projects. We align your listings, collect detailed reviews, label project photos and publish plain answers about services and areas, so those tools have reasons to recommend you. Photos tagged with the town and project type help the most.",
      },
      {
        q: "What do landscaping marketing plans cost with Zonic Media?",
        a: "Landscaping plans cost $297, $750 or $1,500 per month, billed monthly with no lock-in contract. Ad spend goes to Google with a 0% markup. Most landscapers choose a tier by how many services, suburbs and ad campaigns they want running. Snow or spring campaigns can be added for peak weeks.",
      },
    ],
  },
  audit: {
    title: "See Which Yards Your Competitors Are Winning, Free",
    lead: [
      "We look at your Maps position for lawn, design and patio searches, compare your profile, photos and reviews with nearby crews and list the first fixes. Also run tree crews? See our ",
      {
        href: "/services/tree-service-marketing-agency",
        label: "tree service marketing",
      },
      ", or browse all ",
      { href: "/industries", label: "industries we market" },
      ".",
    ],
    points: [
      "Billed month to month",
      "0% markup on ads you run",
      "Plans begin at $297/mo",
      "Reinstatement included",
    ],
    form: {
      formType: "landscaping-marketing",
      badge: "Free landscaping audit",
      title: "Get a Free Landscaping Marketing Audit",
      subtitle: "Costs nothing, commits you to nothing.",
      submitText: "Send My Landscaping Audit",
      messageLabel: "Your service area and landscaping services",
      messagePlaceholder:
        "Towns you cover, services you want more of, and whether you sell maintenance contracts",
    },
  },
  banner: {
    title: "Be the Landscaper Neighbors Point to First",
    lead: "Get a free audit now and line up your best season yet.",
    icons: ["grass", "leaf"],
  },
};
