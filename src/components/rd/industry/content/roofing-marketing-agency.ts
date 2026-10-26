import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* ROOFING MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted (25 Oct), so no ranking
   report or volumes were pulled. The live title's core term ("Roofing
   Marketing Agency USA") stays at the front of the new title, and every
   phrase in the live keywords meta is carried by the title, H1, an H2/H3
   or an FAQ question.
   Web research (25 Oct): top results cover Map Pack and Business Profile
   work, storm-response ad campaigns kept ready by zip code, insurance and
   restoration work (credentials, adjuster-friendly process pages), speed to
   lead, exclusive vs shared leads, and AI answers (ChatGPT, AI Overviews)
   now shaping which roofer homeowners call. Customers search "roof repair
   near me", "roof replacement near me", "storm damage roof repair" and
   "hail damage roof inspection".
   Fresh wording only: nothing reused from the live page or other drafts.
   No estimate figures, budgets or job prices anywhere. */

export const CONTENT: IndustryContent = {
  draftSlug: "roofing-marketing-agency-2",
  liveUrl: "/services/roofing-marketing-agency",
  niche: "Roofing",
  meta: {
    title: "Roofing Marketing Agency USA | Roofing SEO, Ads & Leads",
    description:
      "Zonic Media is a roofing marketing agency for US roofers: roofing SEO, Google Maps rankings, storm-season Google Ads and reviews that win more roof replacements.",
    keywords: [
      "roofing marketing agency",
      "roofing marketing agency in usa",
      "roofing marketing agency near me",
      "best roofing marketing agency",
      "roofing digital marketing agency",
      "roofing company marketing agency",
      "roofing marketing companies",
      "roofing marketing ideas",
      "roofing contractor marketing agency",
      "roofing marketing company",
      "roofing advertising agency",
      "roofing internet marketing",
      "roofing lead generation",
      "roofing seo",
      "marketing for roofers",
      "roofing google ads",
      "roofing leads",
    ],
  },
  palette: PALETTES.redSlate,
  hero: {
    h1Lead: "Roofing",
    h1Icon: "roof",
    h1Rest: "Marketing Agency That Books More Roof Replacements",
    lead: [
      "After a hailstorm, homeowners search “roof repair near me” and call whoever looks most trustworthy. We make that your company with roofing SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      ", storm-ready Google Ads and ",
      {
        href: "/services/roofing-website-design",
        label: "roofing website design",
      },
      " built to book inspections.",
    ],
    cta: "Get My Free Roofing Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-roof/storm-damage.webp",
        position: "46% 50%",
        query: "storm damage roof repair near me",
      },
      cardA: {
        icon: "storm",
        title: "More storm repair calls",
        sub: "Hail, wind and leak jobs",
      },
      cardB: {
        icon: "roof",
        title: "More roof replacements",
        sub: "Booked from local searches",
      },
      photoB: {
        src: "/images/free-website/free-roof/roof-replacement.webp",
        position: "74% 50%",
        query: "roof replacement near me",
      },
    },
  },
  services: {
    title: "Roofing Marketing Services Our Digital Agency Runs",
    lead: "Six channels aimed at homeowners who need a roofer this week.",
    cta: "Audit My Roofing Marketing",
    items: [
      {
        icon: "pin",
        title: "Roofing Google Business Profile",
        desc: "We set categories, services, service areas and storm-work photos so your listing climbs Google Maps whenever roofs get damaged nearby.",
        points: [
          "Roofer categories set right",
          "Before-and-after job photos",
          "Suspension recovery covered",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile reinstatement",
          },
        ],
      },
      {
        icon: "search",
        title: "Roofing SEO by Town",
        desc: "A page for each roofing job and every town on your list, with citations and technical fixes, so you outrank out-of-town storm chasers.",
        points: [
          "Repair and replacement pages",
          "City and suburb pages",
          "Rankings tracked by town",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-roofing-companies",
            label: "Local SEO for roofers",
          },
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for contractors",
          },
        ],
      },
      {
        icon: "target",
        title: "Storm-Season Google Ads",
        desc: "Search and Local Services Ads switched on in the zip codes a storm hits, with DIY and job-seeker clicks kept out.",
        points: [
          "Zip-code storm targeting",
          "Call-only mobile ads",
          "Ad spend passed through at cost",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for roofers" },
        ],
      },
      {
        icon: "monitor",
        title: "Roofing Websites That Book Inspections",
        desc: "Fast, mobile-first roofing sites with tap-to-call on every screen, inspection request forms and project galleries that build trust.",
        points: [
          "Inspection request form",
          "Project photo galleries",
          "Calls and forms tracked",
        ],
        links: [
          {
            href: "/services/roofing-website-design",
            label: "Websites for roofing companies",
          },
          { href: "/services/web-design", label: "Web design services" },
        ],
      },
      {
        icon: "star",
        title: "Roofing Reviews & Reputation",
        desc: "A review request goes out when the crew packs up, and we draft the replies, so homeowners see a long record of local roofs done well.",
        points: [
          "Text requests after each job",
          "Owner replies drafted",
          "Ratings embedded on your site",
        ],
        links: [{ href: "/services", label: "Full-service marketing" }],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Roofers",
        desc: "We feed ChatGPT, Gemini and Google AI Overviews one consistent set of facts about you, so they mention your company when owners ask who to call.",
        points: [
          "Matching listings everywhere",
          "Reviews that mention roof work",
          "Answer-first FAQ pages",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for roofers" },
        ],
      },
    ],
  },
  growth: {
    title: "How a Roofing Company Marketing Agency Wins You Jobs",
    lead: "Map rankings, AI answers and storm-ready ads, each built to reach homeowners before the next roofer does.",
    rows: [
      {
        title: "Own the Map When Homeowners Search “Roofer Near Me”",
        body: [
          "Most roofing calls start on Google Maps, not in the website list below it. We tune your profile, publish pages for the towns you work in and keep the review count growing, which lifts your pin into the top three. Check your current spot with our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "free Maps rank checker",
          },
          ".",
        ],
        points: [
          "Roofing contractor category",
          "Town landing pages",
          "Geo-tagged roof photos",
          "Fake competitor listings flagged",
        ],
        cta: "Check My Roofing Map Rank",
        ui: {
          kind: "maps",
          query: "roofer near me",
          city: "Dallas",
          category: "Roofing contractor · Storm repair",
        },
      },
      {
        title: "Be the Roofer ChatGPT Recommends After a Storm",
        body: [
          "Homeowners now ask ChatGPT, Gemini and AI Overviews who handles hail damage nearby. Our ",
          { href: "/services/ai-seo-services", label: "AI search work" },
          " gives those tools verified facts: identical listings, reviews that name real roof jobs, visible licensing and a clear answer on every service page.",
        ],
        points: [
          "Identical business listings",
          "Reviews that mention hail repairs",
          "Licenses shown clearly",
          "FAQ answers AI can cite",
        ],
        cta: "Audit My Roofing AI Visibility",
        ui: {
          kind: "ai",
          query: "who should i call for hail damage on my roof in fort worth",
          intro: "For hail damage repair around Fort Worth,",
          bullets: [
            "Storm damage inspections",
            "Photo reports for insurance claims",
            "Licensed, insured roofing crews",
          ],
        },
      },
      {
        title: "Storm Ads From a Roofing Advertising Agency",
        body: [
          "Hail and wind damage arrive without warning. We keep paused storm campaigns ready for your zip codes, switch them on as soon as a storm passes, filter out DIY and job-hunting clicks, and trace each call back to the search behind it.",
        ],
        points: [
          "Pre-built storm campaigns",
          "Zip-code targeting",
          "Insurance-claim keywords",
          "Every call recorded",
        ],
        cta: "Plan My Storm Ads",
        ui: {
          kind: "calls",
          title: "Calls after Tuesday's hailstorm",
          calls: [
            {
              service: "Hail damage inspection",
              source: "Google Ads · Call",
              when: "Wed 7:12 AM",
            },
            {
              service: "Leak over the kitchen ceiling",
              source: "Local Services Ads",
              when: "Wed 9:40 AM",
            },
            {
              service: "Full roof replacement",
              source: "Google Maps",
              when: "Wed 1:05 PM",
            },
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Roofing Lead Generation That Stays Exclusive to You",
    body: [
      "Lead marketplaces hand one homeowner to several roofers, and storm chasers flood the same streets. Our ",
      { href: "/services", label: "full-service marketing team" },
      " builds roofing leads that call only you, from rankings, ads and reviews you keep. When hail hits, those channels ring your phone, not a marketplace's.",
    ],
    cta: "Get Exclusive Roofing Leads",
    colShared: "Shared roofing leads",
    colOwn: "Leads you own",
    rows: [
      [
        "Who else gets the homeowner",
        "Several competing roofers",
        "Nobody but your team",
      ],
      [
        "Right after a storm",
        "A race against out-of-town crews",
        "Locals find your reviews first",
      ],
      [
        "What your money buys",
        "Names, booked or not",
        "Rankings, pages and ads that last",
      ],
      ["Whose brand they remember", "A directory's logo", "Your company name"],
      [
        "When the next storm rolls in",
        "Start from zero again",
        "Rankings and reviews carry over",
      ],
    ],
  },
  specialties: {
    title: "A Roofing Contractor Marketing Agency for Every Job You Sell",
    lead: "Storm repairs, full replacements and commercial roofs sell to different buyers with different worries, so each one is marketed on its own terms.",
    photo: {
      src: "/images/free-website/free-roof/commercial-roofing.webp",
      alt: "Two roofers sealing seams on a flat commercial roof",
      caption: "Residential and commercial crews",
      sub: "From single leaks to full tear-offs",
    },
    items: [
      {
        icon: "storm",
        name: "Storm & Hail Damage Repair",
        tactic: "Storm-triggered ads and hail damage pages by zip",
      },
      {
        icon: "roof",
        name: "Full Roof Replacements",
        tactic: "Replacement pages with financing and inspection forms",
      },
      {
        icon: "waterDamage",
        name: "Emergency Roof Leaks",
        tactic: "Urgent leak pages ranked for same-day searches",
      },
      {
        icon: "file",
        name: "Insurance Claim Roofing",
        tactic:
          "Claim-process pages explaining inspections and adjuster visits",
      },
      {
        icon: "home",
        name: "Shingle, Metal & Tile Roofs",
        tactic: "Material pages matched to what your area searches",
      },
      {
        icon: "inspect",
        name: "Roof Inspection Requests",
        tactic: "Inspection offers that open bigger repair conversations",
      },
      {
        icon: "layers",
        name: "Gutter & Siding Add-Ons",
        tactic: "Add-on offers sent after every finished roof",
      },
      {
        icon: "building",
        name: "Commercial & Flat Roofing",
        tactic:
          "Facility-manager outreach pages and commercial search campaigns",
      },
    ],
    more: "Install skylights, solar mounts or coatings? We market those jobs too.",
  },
  steps: {
    title: "Three Steps to Working With Our Roofing Marketing Company",
    lead: "Map and ad fixes usually move first; organic rankings build steadily after that, ahead of the next storm season.",
    items: [
      {
        h: "A Free Roofing Visibility Audit",
        p: "We search repair, replacement and storm terms across your towns, then show where you rank, which roofers beat you and the fixes worth doing first.",
      },
      {
        h: "Your Storm-Ready Roofing Plan",
        p: "Together we decide which jobs and towns come first, and we build storm ads ahead of time so they can launch the day hail hits.",
      },
      {
        h: "Roofing Campaigns Go Live",
        p: "Profile updates, town pages, ads and review texts launch together. Each month a short report shows calls, rankings and the jobs they became.",
      },
    ],
    audit: [
      ["Map Pack spot for roofer near me", "behind"],
      ["Storm damage service pages", "gap"],
      ["Reviews vs local roofers", "behind"],
      ["Insurance claim content", "open"],
    ],
    plan: ["Storm repair", "Replacements", "Dallas", "Plano", "Hail ads"],
    launch: [
      "Profile categories fixed",
      "Town pages published",
      "Storm ads on standby",
      "Review texts switched on",
    ],
  },
  reviews: {
    title: "What Contractors Say After Working With Us",
    lead: "Every review below was posted on our Google profile by a client.",
  },
  pricing: {
    title: "Month-to-Month Roofing Marketing Plans",
    compareTitle: "Compare Roofing Plans Side by Side",
    addOnsTitle: "Add Storm Campaigns When You Need Them",
    customTitle: "Running roofing crews in several cities?",
  },
  faq: {
    title: "What Roofers Ask Before Hiring Us",
    lead: "Leads, storms, insurance work, costs and AI search, in plain English.",
    items: [
      {
        q: "What does a roofing marketing agency handle for roofers?",
        a: "It gets homeowners calling you instead of the next roofer. That covers your Google Business Profile and Maps rankings, roofing SEO pages for each service and town, search and Local Services Ads campaigns, a site that books inspections, and a steady flow of reviews. A good agency also shows which channel produced each signed job.",
      },
      {
        q: "Which roofing marketing ideas bring in the most jobs?",
        a: "The ones that meet homeowners where they already look. Rank in the Map Pack, publish pages for repair, replacement and storm work in each town, run ads on urgent searches, answer calls fast and collect a review from every customer. These beat cold canvassing because the homeowner calls you.",
      },
      {
        q: "How do roofers get storm damage and hail leads?",
        a: "By preparing before the weather turns. We build hail and wind damage pages for your service area, keep ad campaigns paused and ready by zip code, and make sure your profile lists storm repair. When a storm passes, the campaigns go live and your listing is already in place. Afterward, review requests reach every storm customer, strengthening your profile before the next event.",
      },
      {
        q: "Can you help my roofing company win insurance claim jobs?",
        a: "Yes. We publish clear pages on how you inspect damage, document it with photos and work alongside the homeowner's insurance adjuster. Showing licenses, insurance and manufacturer certifications builds the trust these jobs need. We never promise claim outcomes; we make your process easy to understand.",
      },
      {
        q: "Is roofing internet marketing worth it for a smaller crew?",
        a: "Usually, yes. Roof replacements are big jobs, so search visibility that brings in even a few more of them matters. Smaller crews often begin with the Google profile, reviews and core service pages, then add ads once every call is tracked. The pages and reviews you build this year keep working for you next season too.",
      },
      {
        q: "How long does it take for roofing SEO to show results?",
        a: "Paid ads and Google profile updates often produce calls in the first few weeks. Organic roofing rankings take longer, typically several months, and depend on local competition and your site's current strength. You see progress in a report every month, and starting before storm season gives new pages time to rank.",
      },
      {
        q: "Can ChatGPT and Google AI Overviews recommend my roofing company?",
        a: "Yes. These tools recommend roofers they can confirm across many sources, so we align your listings, earn reviews that describe real roof work and publish direct answers to common roofing questions. The more consistent your facts, the more often AI tools bring up your name.",
      },
      {
        q: "What separates the best roofing marketing agency from other roofing marketing companies?",
        a: "Proof and transparency. A strong agency reports calls and booked jobs rather than traffic, works month to month, bills ad spend at a 0% markup and keeps your profile, website and ad accounts in your name. Ask for those terms before you sign anything.",
      },
      {
        q: "Is a roofing marketing agency near me better than one serving the whole USA?",
        a: "Not necessarily. Rankings depend on your profile, pages, reviews and ads, not on where the agency's office is. We work remotely with roofers in every state, meet over video, research your towns in detail and report each month on calls and rankings. What matters is a team that understands storm seasons and how homeowners choose a roofer.",
      },
      {
        q: "What do Zonic Media's roofing marketing plans cost?",
        a: "Roofers choose from three tiers: $297, $750 or $1,500 monthly, with no long-term contract. Google bills ad spend to you directly, and we add 0% markup on top. The right tier comes down to the number of services and towns to cover, and whether storm ads are included.",
      },
    ],
  },
  audit: {
    title: "Find Out Where Your Roofing Calls Are Going",
    lead: [
      "We check your Maps rank for repair, replacement and storm searches, review your Google profile and its ",
      {
        href: "/services/gmb-verification-help",
        label: "verification status",
      },
      ", compare your reviews with nearby roofers and list the first fixes. Installing panels too? Ask about our ",
      {
        href: "/services/solar-marketing-agency",
        label: "solar marketing program",
      },
      ".",
    ],
    points: [
      "Month-to-month agreement",
      "Storm campaigns planned ahead",
      "Plans start at $297 a month",
      "Zero markup on Google ad spend",
    ],
    form: {
      formType: "roofing-marketing",
      badge: "Free roofing audit",
      title: "Claim Your Free Roofing Marketing Audit",
      subtitle: "No cost, no sales pressure.",
      submitText: "Send My Roofing Audit",
      messageLabel: "Your service area and roofing services",
      messagePlaceholder:
        "Towns you cover, the jobs you want more of, and whether you take storm or insurance work",
    },
  },
  banner: {
    title: "Be the Roofer Homeowners Call When the Storm Clears",
    lead: "Book a free roofing audit and get a clear list of what to fix first.",
    icons: ["roof", "storm"],
  },
};
