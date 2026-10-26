import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* BATHROOM REMODELING MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Bathroom Remodeling Marketing
   Agency") opens the new title, and every phrase in the live keywords
   meta sits in the title, H1, an H2/H3 or an FAQ question.
   Web research (25 Oct): homeowners search "bathroom remodel near me",
   "walk-in shower installation [city]", "tub to shower conversion
   [city]" and "ADA bathroom remodel [city]"; top agency pages cover Maps,
   SEO, Google Ads, galleries, reviews and long-cycle follow-up; remodel
   buyers increasingly ask ChatGPT, Gemini and AI Overviews first. Common
   questions: how to get bathroom remodeling leads, how to choose a
   remodeler, how long SEO takes.
   Angle vs sibling remodel drafts: shower/bath project types, trust from
   reviews, and estimate requests the remodeler owns.
   Photos: the free-bathroom-remodeling folder holds one scene (hero and
   detail are the same shot), so photo B is the walk-in shower photo from
   /images/home-improvement-web/.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "bathroom-remodeling-marketing-agency-2",
  liveUrl: "/services/bathroom-remodeling-marketing-agency",
  niche: "Bathroom Remodeling",
  meta: {
    title: "Bathroom Remodeling Marketing Agency | SEO, Ads & Bath Leads",
    description:
      "Bathroom remodeling digital marketing agency that books more shower conversions and full bath remodels with remodeling SEO, Maps rankings and Google Ads.",
    keywords: [
      "bathroom remodeling marketing agency",
      "home remodeling marketing agency",
      "bathroom remodeling leads",
      "remodeling contractor marketing",
      "bathroom remodeling seo",
      "bathroom remodeling google ads",
      "remodeler marketing agency",
      "home improvement marketing agency",
      "bathroom remodeling marketing company",
      "bathroom remodeling advertising agency",
      "bathroom remodeling internet marketing",
      "bathroom remodeling lead generation",
      "marketing for bathroom remodelers",
      "bathroom remodeler seo",
      "bathroom remodeling website design",
    ],
  },
  palette: PALETTES.violetCyan,
  hero: {
    h1Lead: "Bathroom Remodeling",
    h1Icon: "bath",
    h1Rest: "Marketing Agency for More Shower & Bath Jobs",
    lead: [
      "Homeowners planning a new bathroom compare photos, reviews and response times for weeks before they call. We put your work in front of them with bathroom remodeling SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      ", targeted Google Ads and a ",
      {
        href: "/services/bathroom-remodeling-website-design",
        label: "bath remodeling website",
      },
      " built around your project gallery.",
    ],
    cta: "Get My Free Bath Remodel Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-bathroom-remodeling/hero.webp",
        position: "88% 50%",
        query: "bathroom remodel near me",
      },
      cardA: {
        icon: "shower",
        title: "More walk-in shower jobs",
        sub: "From tub-to-shower searches",
      },
      cardB: {
        icon: "calendar",
        title: "More booked consultations",
        sub: "In-home visits on your calendar",
      },
      photoB: {
        src: "/images/home-improvement-web/bathroom-remodeling-first-impressions-1.webp",
        position: "42% 50%",
        query: "walk-in shower installation near me",
      },
    },
  },
  services: {
    title: "Bathroom Remodeling Marketing Services, Handled by One Team",
    lead: "Every channel a bath remodeler needs to get compared and booked.",
    cta: "Audit My Bath Remodel Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Bath Remodelers",
        desc: "Categories, service areas and finished-bath photos set up so your listing appears for shower, tub and full remodel searches nearby.",
        points: [
          "Remodel categories set",
          "Weekly project photo posts",
          "Verification and suspension help",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Profile verification help",
          },
        ],
      },
      {
        icon: "search",
        title: "Bathroom Remodeling SEO",
        desc: "A page for each bath service and each town in your area, with citation cleanup and on-page fixes, so you rank when homeowners start planning.",
        points: [
          "Service and town pages",
          "Local citation cleanup",
          "Rankings tracked by zip",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-bathroom-remodelers",
            label: "Local SEO for bath remodelers",
          },
        ],
      },
      {
        icon: "target",
        title: "Bathroom Remodeling Google Ads",
        desc: "Search campaigns aimed at remodel-ready homeowners in your best zip codes, with repair, DIY and job-seeker clicks filtered out.",
        points: [
          "Project-intent keywords only",
          "Neighborhood targeting",
          "Ad budget at a 0% markup",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "Gallery-Led Bath Remodeling Websites",
        desc: "A quick-loading site with before-and-after photo galleries, a financing options page and a short consultation form that works on any phone.",
        points: [
          "Before-and-after galleries",
          "Financing options explained",
          "Consultation request form",
        ],
        links: [
          {
            href: "/services/bathroom-remodeling-website-design",
            label: "Bathroom remodeling website design",
          },
          { href: "/services/web-design", label: "Custom website builds" },
        ],
      },
      {
        icon: "star",
        title: "Reviews That Sell the Next Bathroom",
        desc: "Review requests go out as each project wraps, asking clients to mention the shower, tile or layout you delivered.",
        points: [
          "Requests at project handoff",
          "Owner replies drafted",
          "Project reviews on display",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local search for home pros",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Bath Remodelers",
        desc: "We feed AI assistants clear, matching facts about your bath work, so Gemini, ChatGPT and AI Overviews can name you with confidence.",
        points: [
          "Matching listings everywhere",
          "Project-specific reviews",
          "Question-led service pages",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title:
      "How Our Bathroom Remodeling Digital Marketing Agency Gets You Booked",
    lead: "Three channels decide which remodeler a homeowner contacts first: the map, the AI answer and the reviews.",
    rows: [
      {
        title: "Own the Map Pack When Homeowners Plan a New Bath",
        body: [
          "Most homeowners start with the three map listings above the regular results. We tune your categories and service areas, add every bath service you offer, post finished-project photos weekly and track your position across your service area, so your pin shows up for remodel-ready searches.",
        ],
        points: [
          "Bath-specific categories",
          "Shower and tub services listed",
          "Weekly project photos",
          "Grid rank tracking",
        ],
        cta: "See My Bath Map Ranking",
        ui: {
          kind: "maps",
          query: "bathroom remodel near me",
          city: "Columbus",
          category: "Bathroom remodeler · In-home consultations",
        },
      },
      {
        title: "Get Named When Homeowners Ask AI for a Bath Remodeler",
        body: [
          "Homeowners increasingly ask ChatGPT, Gemini and Google's AI Overview to recommend a remodeler for a walk-in shower or an accessible bath. Those tools trust businesses with consistent listings, detailed reviews and pages that answer questions plainly. ",
          { href: "/services/ai-seo-services", label: "Our AI SEO work" },
          " builds that proof around your bath services.",
        ],
        points: [
          "Listings matched across the web",
          "Reviews that describe the project",
          "Accessible-bath answers",
          "Clear service and process pages",
        ],
        cta: "Test My AI Search Presence",
        ui: {
          kind: "ai",
          query: "who installs walk-in showers for seniors in columbus",
          intro: "For accessible walk-in showers in Columbus,",
          bullets: [
            "Curbless showers with grab bars",
            "Design visit before any demolition",
            "Licensed, insured remodel crew",
          ],
        },
      },
      {
        title: "Turn Finished Bathrooms Into Five-Star Reviews",
        body: [
          "A homeowner investing in a bathroom reads reviews closely, looking for tidy crews, honest timelines and great tile work. We text a review request at project handoff, flag any low rating fast and write replies in your own voice.",
        ],
        points: [
          "Requests sent at handoff",
          "Prompts to mention the project",
          "Low-rating alerts",
          "Reviews featured in your gallery",
        ],
        cta: "Grow My Remodel Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Dana, it's Your Company. We loved building your new shower! Would you share a quick Google review?",
          reviewer: "Dana R.",
          review:
            "They turned our cramped tub into a walk-in shower with a built-in bench. The tile is gorgeous and the crew cleaned up every single day.",
          reply: "Thank you, Dana! Enjoy that new shower.",
        },
      },
    ],
  },
  ownLeads: {
    title: "Bathroom Remodeling Lead Generation You Don't Share",
    body: [
      "Shared lead sites send one homeowner's request to several remodelers, and the job goes to whoever discounts hardest. Through our ",
      { href: "/services", label: "full marketing services" },
      ", we build bathroom remodeling leads that reach only you, from your map listing, your ads and a website you own.",
    ],
    cta: "Get Exclusive Bath Remodel Leads",
    colShared: "Shared lead sites",
    colOwn: "Requests you own",
    rows: [
      [
        "Who gets the homeowner's details",
        "Several bath remodelers",
        "Just your team",
      ],
      [
        "What decides the job",
        "Lowest number on paper",
        "Your gallery and reviews",
      ],
      [
        "How the homeowner knows you",
        "A lead site's brand",
        "Your name, photos and stars",
      ],
      [
        "What you build over time",
        "Nothing once payments stop",
        "Rankings and reviews that stay",
      ],
      [
        "When you hear about it",
        "After others got it too",
        "The moment they reach out",
      ],
    ],
  },
  specialties: {
    title: "A Bathroom Remodeling Marketing Company Built Around Your Services",
    lead: "Shower conversions, accessible baths and full gut remodels attract different buyers, so we give each one dedicated pages and campaigns.",
    items: [
      {
        icon: "shower",
        name: "Walk-In Showers",
        tactic: "Curbless and glass-enclosure pages ranked town by town",
      },
      {
        icon: "bath",
        name: "Tub-to-Shower Conversions",
        tactic: "Conversion ads aimed at owners replacing dated tubs",
      },
      {
        icon: "handHeart",
        name: "Accessible & Aging-in-Place Baths",
        tactic: "Safety-focused pages written for seniors and their families",
      },
      {
        icon: "home",
        name: "Primary Bath Renovations",
        tactic: "Gallery pages showing layouts, finishes and before shots",
      },
      {
        icon: "layers",
        name: "Tile & Shower Surrounds",
        tactic: "Close-up photo posts that prove craftsmanship on Maps",
      },
      {
        icon: "drop",
        name: "Freestanding & Soaking Tubs",
        tactic: "Style-led pages for homeowners upgrading to spa tubs",
      },
      {
        icon: "hammer",
        name: "Small Bath & Powder Room Remodels",
        tactic: "Quick-project offers that fill gaps between big jobs",
      },
      {
        icon: "clipboard",
        name: "Bathroom Design & Planning",
        tactic: "Design-visit booking pages linked from every ad",
      },
    ],
    more: "Doing heated floors, vanities or ventilation upgrades too? Each one can get its own page.",
  },
  steps: {
    title: "Three Steps From Free Audit to a Fuller Remodel Calendar",
    lead: "We start with fixes that win consultations soonest, then build the SEO that keeps homeowners finding you.",
    items: [
      {
        h: "We Map How Homeowners Find Bath Remodelers Near You",
        p: "We search for your main bath services the way local homeowners do, then show your map position, the remodelers outranking you and where interested homeowners drop off.",
      },
      {
        h: "We Agree on the Bath Projects Worth Chasing",
        p: "Together we pick the services and towns to push first, weighted toward the remodels with the best margins and the crews you have available.",
      },
      {
        h: "We Launch, Follow Up and Report",
        p: "We fix your profile, publish pages, start ads and switch on review texts; reminders keep slow deciders warm, and each month you get one clear report on consultations booked.",
      },
    ],
    audit: [
      ["Maps rank: bathroom remodel near me", "behind"],
      ["Project photos on your profile", "gap"],
      ["Review count vs local remodelers", "behind"],
      ["Follow-up for undecided homeowners", "open"],
    ],
    plan: [
      "Walk-in showers",
      "Tub-to-shower",
      "Accessible baths",
      "Columbus",
      "Dublin",
    ],
    launch: [
      "Profile categories fixed",
      "Before-and-after gallery live",
      "Consultation form tracked",
      "Review texts switched on",
    ],
  },
  reviews: {
    title: "Remodelers and Home Pros Rate Us 5.0 on Google",
    lead: "Owners we work with left these reviews on our Google Business Profile, word for word.",
  },
  pricing: {
    title: "Bathroom Remodeling Marketing Plans, Month to Month",
    compareTitle: "Compare Plans for Bath Remodelers",
    addOnsTitle: "Add Campaigns for Your Busiest Remodel Months",
    customTitle: "Running several showrooms or crews?",
  },
  faq: {
    title: "Bath Remodeler Questions About Marketing, Answered",
    lead: "Plain answers on leads, Maps, ads, AI search and what working together looks like.",
    items: [
      {
        q: "What should a bathroom remodeling marketing agency handle for me?",
        a: "It brings you homeowners who are ready to talk about a new bathroom. That covers Maps rankings for your Business Profile, bathroom remodeling SEO pages, Google Ads, project galleries, review requests and follow-up, all measured by consultations booked rather than clicks.",
      },
      {
        q: "How do I get more bathroom remodeling leads?",
        a: "Be visible where planning starts and convincing when homeowners compare. That means a complete Business Profile with real project photos, pages for each bath service and town, ads on remodel-intent searches, steady reviews and quick replies to every inquiry, since slow responses lose interested homeowners.",
      },
      {
        q: "Why choose a remodeler marketing agency over a home improvement marketing agency?",
        a: "Because bath remodels are high-ticket, visual purchases with long decision windows, and a general agency often treats them like quick repair calls. A remodeling-focused team sells with galleries, reviews and patient follow-up, and judges success by booked consultations and signed projects.",
      },
      {
        q: "What should a bathroom remodeling advertising agency target on Google?",
        a: "Searches that signal a real project, such as walk-in shower installation or bathroom remodel near me, inside the zip codes you want. We exclude repair, DIY and job-seeker terms and send clicks to pages with galleries and a short consultation form instead of your homepage.",
      },
      {
        q: "How long does bathroom remodeling SEO take to work?",
        a: "Expect listing fixes and paid campaigns to produce inquiries first, often within the first month. Organic rankings for bath searches climb over several months, faster in smaller towns and slower where many remodelers compete. Your monthly report shows which pages and searches are gaining ground.",
      },
      {
        q: "How do you follow up with homeowners who aren't ready yet?",
        a: "With timed reminders by text and email, retargeting ads that show your finished bathrooms, and pages that explain your process and financing options. Homeowners who need months to decide keep seeing your work, so you stay on their shortlist when they're ready to book.",
      },
      {
        q: "How do AI tools like ChatGPT pick a bathroom remodeler to recommend?",
        a: "They favor businesses they can verify: consistent listings, detailed reviews that mention specific projects and pages that answer common questions clearly. We build all three so ChatGPT, Gemini and AI Overviews have solid reasons to name your company for bath work in your area.",
      },
      {
        q: "What do your remodeling contractor marketing plans include?",
        a: "Foundation runs $297 a month and covers Business Profile work, on-page SEO and citations. Growth, at $750, adds Google Ads management, conversion tracking and a review workflow. Authority, at $1,500, adds Local Services Ads setup, social media and more. All plans are month to month with 0% ad-spend markup.",
      },
      {
        q: "What happens if Google suspends my remodeling company's listing?",
        a: "We handle the reinstatement, and it's included with every plan. Our team has restored 900+ suspended profiles. We find the trigger, often an address or category problem, correct it, file the appeal with evidence and then tighten the listing so it stays live.",
      },
      {
        q: "Do you also work as a home remodeling marketing agency for kitchens?",
        a: "Yes. Many bath remodelers also take on kitchens or basements, and we market those services too. Each project type gets separate pages, keywords and ad groups, so kitchen and bathroom searches rank on their own instead of competing for the same page.",
      },
    ],
  },
  audit: {
    title: "See Where Your Bath Remodel Inquiries Are Slipping Away",
    lead: [
      "We check how you rank on Maps for key bath searches, then compare your Business Profile, ",
      { href: "/services/web-design", label: "website and galleries" },
      ", reviews and ads with the remodelers above you. Suspended listing? Our ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Business Profile reinstatement service",
      },
      " covers it. We also market ",
      { href: "/industries", label: "20+ other industries" },
      ".",
    ],
    points: [
      "Month-to-month plans from $297",
      "Google Ads billed with 0% markup",
      "Gallery and website review included",
      "Suspended-profile recovery covered",
    ],
    form: {
      formType: "bathroom-remodeling-marketing",
      badge: "Free bath remodel audit",
      title: "Request a Free Bathroom Remodeling Marketing Audit",
      subtitle: "Specific findings, no obligation.",
      submitText: "Send My Bath Remodel Audit",
      messageLabel: "Your service area and the bath projects you want more of",
      messagePlaceholder:
        "Towns you serve, projects you want (walk-in showers, full remodels) and how you book consultations",
    },
  },
  banner: {
    title: "Be the First Remodeler They Call for a New Bathroom",
    lead: "Start with a free audit that shows where bath remodel inquiries are leaking.",
    icons: ["bath", "shower"],
  },
};
