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
   No estimate figures, budgets or job prices anywhere.

   Copy pass, 19 Nov 2026 (owner: no "inspection", it reads as our home
   inspection service; storm is not the theme):
   - Search Console, 3 months: roofing marketing agency 1,501 impressions
     (pos 45.8) · roofing company marketing agency 415 · roofing marketing
     services 369 · roofing digital marketing agency 199 · roofing
     marketing agency near me 131 · roofing social media agency 108 ·
     roofing advertising agency 100. No query contains inspection, storm
     or leads.
   - Semrush US: roofing marketing agency 2,400 · roofing leads 1,900
     (KD 3) · digital marketing for roofers 1,300 · roofing lead
     generation 1,000 · roofer marketing 1,000 · roofing digital
     marketing 880 · roofing ppc 720 · google ads for roofers 480 ·
     roofing advertising 390 · exclusive roofing leads 320 · how to get
     roofing leads 320. Storm marketing terms have no demand (storm damage
     roofing marketing 0), so storm stays as one job type only.
   - SERP: agencies (SEO, PPC, GBP, reviews, AI) and "best roofing
     marketing companies" lists. */

export const CONTENT: IndustryContent = {
  draftSlug: "roofing-marketing-agency-2",
  liveUrl: "/services/roofing-marketing-agency",
  niche: "Roofing",
  meta: {
    title: "Roofing Marketing Agency USA | Roofing SEO, Ads & Leads",
    description:
      "Zonic Media is a roofing marketing agency for US roofers: roofing SEO, Google Maps rankings, roofing PPC and reviews that bring in exclusive roofing leads.",
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
      "exclusive roofing leads",
      "roofing marketing services",
      "roofing ppc",
      "roofing advertising",
      "digital marketing for roofers",
      "roofer marketing",
    ],
  },
  palette: PALETTES.redSlate,
  hero: {
    h1Lead: "Roofing",
    h1Icon: "roof",
    h1Rest: "Marketing Agency That Books More Roof Replacements",
    lead: [
      "When a roof leaks or wears out, homeowners search “roof repair near me” and call whoever looks most trustworthy. We make that your company with roofing SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      ", roofing PPC and ",
      {
        href: "/services/roofing-website-design",
        label: "roofing website design",
      },
      " built to book estimates.",
    ],
    cta: "Get My Free Roofing Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-roof/roof-repair.webp",
        position: "46% 50%",
        query: "roof leak repair near me",
      },
      cardA: {
        icon: "repair",
        title: "More roof repair calls",
        sub: "Leak, shingle and flashing jobs",
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
        desc: "We set categories, services, service areas and fresh job photos so your listing climbs Google Maps for roofer searches in every town you cover.",
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
        desc: "A page for each roofing job and every town on your list, with citations and technical fixes, so you outrank the roofers above you today.",
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
        title: "Roofing PPC and Google Ads",
        desc: "Search and Local Services Ads aimed at repair and replacement searches in your zip codes, with DIY and job-seeker clicks kept out.",
        points: [
          "Zip-code targeting",
          "Call-only mobile ads",
          "Ad spend passed through at cost",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for roofers" },
        ],
      },
      {
        icon: "monitor",
        title: "Roofing Websites That Book Estimates",
        desc: "Fast, mobile-first roofing sites with tap-to-call on every screen, estimate request forms and project galleries that build trust.",
        points: [
          "Estimate request form",
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
          "SMS review requests after each job",
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
    lead: "Map rankings, AI answers and roofing ads, each built to reach homeowners before the next roofer does.",
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
          category: "Roofing contractor · Roof repair",
        },
      },
      {
        title: "Be the Roofer ChatGPT Recommends",
        body: [
          "Homeowners now ask ChatGPT, Gemini and AI Overviews which roofer to trust nearby. Our ",
          { href: "/services/ai-seo-services", label: "AI search work" },
          " gives those tools verified facts: identical listings, reviews that name real roof jobs, visible licensing and a clear answer on every service page.",
        ],
        points: [
          "Identical business listings",
          "Reviews that mention real roof jobs",
          "Licenses shown clearly",
          "FAQ answers AI can cite",
        ],
        cta: "Audit My Roofing AI Visibility",
        ui: {
          kind: "ai",
          query: "who is the best roofing company in fort worth for a new roof",
          intro: "For a roof replacement around Fort Worth,",
          bullets: [
            "Free written estimates",
            "Photo reports for insurance claims",
            "Licensed, insured roofing crews",
          ],
        },
      },
      {
        title: "Roofing Google Ads From a Roofing Advertising Agency",
        body: [
          "Homeowners comparing roofers click the first ad that matches their job. We build roofing PPC campaigns around repair, replacement and material searches in your zip codes, filter out DIY and job-hunting clicks, and trace each call back to the search behind it.",
        ],
        points: [
          "Repair and replacement campaigns",
          "Zip-code targeting",
          "Local Services Ads",
          "Every call recorded",
        ],
        cta: "Plan My Roofing Ads",
        ui: {
          kind: "calls",
          title: "Roofing calls on Wednesday",
          calls: [
            {
              service: "Metal roof estimate",
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
      "Lead marketplaces hand one homeowner to several roofers at once. Our ",
      { href: "/services", label: "full-service marketing team" },
      " builds roofing leads that call only you, from rankings, ads and reviews you keep. When a homeowner is ready, those channels ring your phone, not a marketplace's.",
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
        "When homeowners compare roofers",
        "A race to call back first",
        "They find your reviews first",
      ],
      [
        "What your money buys",
        "Names, booked or not",
        "Rankings, pages and ads that last",
      ],
      ["Whose brand they remember", "A directory's logo", "Your company name"],
      [
        "When you stop paying",
        "The leads stop that day",
        "Rankings and reviews carry over",
      ],
    ],
  },
  specialties: {
    title: "A Roofing Contractor Marketing Agency for Every Job You Sell",
    lead: "Repairs, full replacements and commercial roofs sell to different buyers with different worries, so each one is marketed on its own terms.",
    photo: {
      src: "/images/free-website/free-roof/commercial-roofing.webp",
      alt: "Two roofers sealing seams on a flat commercial roof",
      caption: "Residential and commercial crews",
      sub: "From single leaks to full tear-offs",
    },
    items: [
      {
        icon: "repair",
        name: "Roof Repair Jobs",
        tactic: "Repair pages and ads for shingle, flashing and leak fixes",
      },
      {
        icon: "roof",
        name: "Full Roof Replacements",
        tactic: "Replacement pages with financing and estimate forms",
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
          "Claim-process pages explaining photo reports and adjuster visits",
      },
      {
        icon: "home",
        name: "Shingle, Metal & Tile Roofs",
        tactic: "Material pages matched to what your area searches",
      },
      {
        icon: "storm",
        name: "Storm Damage Repair",
        tactic: "Wind and hail damage pages ranked before the busy season",
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
    lead: "Map and ad fixes usually move first; organic rankings build steadily after that, month by month.",
    items: [
      {
        h: "A Free Roofing Visibility Audit",
        p: "We search repair, replacement and roofer terms across your towns, then show where you rank, which roofers beat you and the fixes worth doing first.",
      },
      {
        h: "Your Roofing Marketing Plan",
        p: "Together we decide which jobs and towns come first, which ads to run and which pages to build or fix.",
      },
      {
        h: "Roofing Campaigns Go Live",
        p: "Profile updates, town pages, ads and review texts launch together. Each month a short report shows calls, rankings and the jobs they became.",
      },
    ],
    audit: [
      ["Map Pack spot for roofer near me", "behind"],
      ["Roof repair service pages", "gap"],
      ["Reviews vs local roofers", "behind"],
      ["Insurance claim content", "open"],
    ],
    plan: ["Roof repair", "Replacements", "Dallas", "Plano", "Search ads"],
    launch: [
      "Profile categories fixed",
      "Town pages published",
      "Search ads live",
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
    addOnsTitle: "Add Roofing Ad Campaigns When You Need Them",
    customTitle: "Running roofing crews in several cities?",
  },
  faq: {
    title: "What Roofers Ask Before Hiring Us",
    lead: "Leads, ads, insurance work, costs and AI search, in plain English.",
    items: [
      {
        q: "What does a roofing marketing agency handle for roofers?",
        a: "It gets homeowners calling you instead of the next roofer. That covers your Google Business Profile and Maps rankings, roofing SEO pages for each service and town, search and Local Services Ads campaigns, a site that books estimates, and a steady flow of reviews. A good agency also shows which channel produced each signed job.",
      },
      {
        q: "Which roofing marketing ideas bring in the most jobs?",
        a: "The ones that meet homeowners where they already look. Rank in the Map Pack, publish pages for repair, replacement and metal roof work in each town, run ads on urgent searches, answer calls fast and collect a review from every customer. These beat cold canvassing because the homeowner calls you.",
      },
      {
        q: "How do roofers get more roofing leads without buying shared leads?",
        a: "By owning the channels homeowners already use: a Google Business Profile that ranks in the Map Pack, repair and town pages on your own site, search ads on repair and replacement terms, and a review request after every job. Every call and form is tracked, so you can see which channel produced each signed roof.",
      },
      {
        q: "Can you help my roofing company win insurance claim jobs?",
        a: "Yes. We publish clear pages on how you assess damage, document it with photos and work alongside the homeowner's insurance adjuster. Showing licenses, insurance and manufacturer certifications builds the trust these jobs need. We never promise claim outcomes; we make your process easy to understand.",
      },
      {
        q: "Is roofing internet marketing worth it for a smaller crew?",
        a: "Usually, yes. Roof replacements are big jobs, so search visibility that brings in even a few more of them matters. Smaller crews often begin with the Google profile, reviews and core service pages, then add ads once every call is tracked. The pages and reviews you build this year keep working for you next season too.",
      },
      {
        q: "How long does it take for roofing SEO to show results?",
        a: "Paid ads and Google profile updates often produce calls in the first few weeks. Organic roofing rankings take longer, typically several months, and depend on local competition and your site's current strength. You see progress in a report every month, and starting before your busy season gives new pages time to rank.",
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
        a: "Not necessarily. Rankings depend on your profile, pages, reviews and ads, not on where the agency's office is. We work remotely with roofers in every state, meet over video, research your towns in detail and report each month on calls and rankings. What matters is a team that understands roofing seasons and how homeowners choose a roofer.",
      },
      {
        q: "What do Zonic Media's roofing marketing plans cost?",
        a: "Roofers choose from three tiers: $297, $950 or $1,500 monthly, with no long-term contract. Google bills ad spend to you directly, and we add 0% markup on top. The right tier comes down to the number of services and towns to cover, and whether Google Ads are included.",
      },
    ],
  },
  audit: {
    title: "Find Out Where Your Roofing Calls Are Going",
    lead: [
      "We check your Maps rank for repair, replacement and roofer searches, review your Google profile and its ",
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
      "Ad campaigns planned with you",
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
        "Towns you cover, the jobs you want more of, and whether you take insurance work",
    },
  },
  banner: {
    title: "Be the Roofer Homeowners Call First",
    lead: "Book a free roofing audit and get a clear list of what to fix first.",
    icons: ["roof", "repair"],
  },
};
