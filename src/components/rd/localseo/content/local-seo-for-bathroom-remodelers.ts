/* Local SEO for Bathroom Remodelers — redesign draft copy (26 Oct 2026).
   Brief: docs/local-seo-redesign-brief.md. Fresh wording only; the live
   page, the electricians reference, /services/seo-services-2 and
   /services/bathroom-remodeling-marketing-agency-2 were checked for
   overlap.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: bathroom remodeling seo company
     463 impressions (pos 20.6) · bathroom remodeling seo marketing 335
     (26.2, a marketing term, left to the marketing page) · seo for
     bathroom remodeling 276 (13.2) · bathroom remodeling seo 273 (22.9) ·
     seo for bathroom remodeling company 239 · bathroom remodeling company
     seo 162 · seo for bathroom companies 150 · seo for bathroom fitters
     145 · seo services for bathroom remodel company 140 · seo for bathroom
     designers 132 · bathroom remodel seo services 112.
   - Semrush US: bathroom remodeling seo 140 (KD 9) · bathroom remodel seo
     90 (10) · seo for bathroom remodelers 10. "seo for remodelers" (880)
     and "remodeling seo" (480) belong to the kitchen page.
   - Web research (bathroom remodeling seo, bath GBP categories, shower /
     tub-to-shower searches, AI search for remodelers; top pages read:
     an agency bath SEO page and a 2026 bath SEO guide): every top page
     sells generic SEO and skips project galleries, accessible-bath
     searches, fitters/designers and AI answers. Guides recommend
     "Bathroom Remodeler" as the primary category and one page per
     project type. Added: gallery card, conversion and aging-in-place
     search groups, a fitters/designers FAQ and a photos FAQ.
   - Title keeps "Bathroom Remodeling SEO" (live title) and leads with
     the top GSC query; H1 uses the same company term. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-bathroom-remodelers",
  audience: "Bathroom remodelers, bath fitters and bathroom designers",
  serviceName: "Local SEO for Bathroom Remodelers",
  meta: {
    title: "Bathroom Remodeling SEO Company | Bath Remodeler Local SEO",
    description:
      "Bathroom remodeling SEO for shower, tub and full-bath projects: Business Profile, project pages, galleries, reviews and AI search that bring in-home consults.",
    keywords: [
      "bathroom remodeling seo",
      "bathroom remodeling seo company",
      "seo for bathroom remodeling",
      "local seo for bathroom remodelers",
      "bathroom remodel seo services",
      "bathroom remodeling company seo",
      "seo for bathroom companies",
      "seo services for bathroom remodel company",
      "seo for bathroom fitters",
      "seo for bathroom designers",
    ],
  },
  hero: {
    h1Lead: "Bathroom Remodeling SEO Company",
    h1Rest: "That Brings Better Bath Projects",
    icon: "bath",
    lead: [
      "Our SEO for bathroom remodeling puts your tub-to-shower swaps, walk-in showers and full gut jobs where renovating homeowners look: the local map, organic results and AI answers. We start with your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile and project photos",
      },
      ", then add pages and reviews that keep consults coming.",
    ],
    cta: "Get My Free Bath Remodel SEO Audit",
    ui: {
      kind: "growth",
      maps: "towns",
      ai: "overview",
      growth: "pipeline",
      business: "Your Bath Remodeling",
      category: "Bathroom remodeler",
      query: "bathroom remodelers near me",
      areas: ["Old town", "Hillside", "Riverside", "New builds"],
      aiPrompt: "walk-in shower remodel company near me",
      aiReasons: ["Real before-and-after galleries", "Accessible bath designs"],
      growthLabel: "Bath projects",
      leads: [
        ["Walk-in shower project", "Project gallery"],
        ["Tub-to-shower consult", "AI Overview"],
        ["Vanity and tile quote", "Google Maps"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 by area",
          title: "The Bath Remodeler Each Area Finds",
          text: "Your remodeling listing tops the map in the neighborhoods worth working.",
        },
        {
          label: "AI Overview",
          badge: "Cited",
          title: "Cited When Homeowners Plan a Bath",
          text: "Galleries and shower guides earn mentions in Google's AI answers.",
        },
        {
          label: "Projects",
          badge: "Signed",
          title: "Consults Turning Into Signed Remodels",
          text: "See each bath project move from quote to consult to signed contract.",
        },
      ],
    },
  },
  searches: {
    title: "Bath Remodel Searches Homeowners Make Before They Call",
    lead: "Real phrases from people planning a new shower or a full bathroom, each matched to the page or profile detail that answers it.",
    groups: [
      {
        icon: "shower",
        label: "Bath conversion searches",
        terms: [
          "tub to shower conversion near me",
          "walk in shower installers",
          "replace bathtub with shower",
          "curbless shower contractor",
          "shower remodel near me",
          "bathtub replacement company",
        ],
      },
      {
        icon: "bath",
        label: "Full bathroom remodel searches",
        terms: [
          "bathroom remodel near me",
          "master bathroom renovation",
          "small bathroom remodel",
          "bathroom remodeling contractor + your city",
          "bathroom gut and remodel",
          "bathroom design consultation",
        ],
      },
      {
        icon: "shield",
        label: "Accessible bathroom searches",
        terms: [
          "aging in place bathroom remodel",
          "ada bathroom contractor",
          "walk in tub installation",
          "grab bar installation near me",
          "wheelchair accessible shower",
        ],
      },
    ],
  },
  services: {
    title: "What Our Bathroom Remodel\nSEO Services Cover",
    lead: "Six pieces of local SEO for bathroom remodelers, each pointed at the bath projects you most want on the schedule.",
    cta: "Audit My Bathroom Website",
    items: [
      {
        icon: "pin",
        title: "Business Profile Tuning for Bathroom Remodelers",
        desc: "Primary category, service list, service area and weekly project photos arranged so your shop shows in the Map Pack for shower and bath searches.",
        points: [
          "Bathroom remodeler category",
          "Showroom or service area",
          "Weekly photo uploads",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization service",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help verifying a listing",
          },
        ],
      },
      {
        icon: "file",
        title: "Bath Project and Town Pages",
        desc: "Separate pages for walk-in showers, tub conversions, accessible baths and each town you cover, so every search lands on a matching page.",
        points: [
          "Shower and tub pages",
          "Town-by-town pages",
          "Permit and timeline FAQs",
        ],
        links: [
          {
            href: "/services/bathroom-remodeling-website-design",
            label: "Bathroom remodeling websites",
          },
        ],
      },
      {
        icon: "camera",
        title: "Before-and-After Galleries for Bath Jobs",
        desc: "Project galleries with captions, alt text and the town named, so Google and homeowners can see the tile, glass and layout you delivered.",
        points: [
          "Captioned photo sets",
          "Image alt text",
          "Project schema markup",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Reviews That Mention the Bathroom Project",
        desc: "A text request when the glass goes in, a reply to every review, and prompts that get clients naming the shower or tub work.",
        points: [
          "Ask at final walk-through",
          "Reply to each review",
          "Project words in reviews",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Fix a suspended listing",
          },
        ],
      },
      {
        icon: "tool",
        title: "Technical SEO for Bathroom Remodeling Sites",
        desc: "Image-heavy galleries compressed, mobile pages sped up, schema added and duplicate town pages cleaned so every bath page gets crawled and indexed.",
        points: [
          "Gallery image compression",
          "Mobile page speed",
          "Index and schema fixes",
        ],
        links: [
          { href: "/services/web-design", label: "Fast remodeler websites" },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Bathroom Companies",
        desc: "Clear answers on timelines, materials and permits, plus consistent business facts, so assistants like ChatGPT and Gemini recommend your crew for bath projects.",
        points: [
          "Answer-ready bath FAQs",
          "Matching listings everywhere",
          "Monthly AI mention checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "Our AI SEO service" },
        ],
      },
    ],
  },
  growth: {
    title: "What Bathroom Remodeling SEO Changes for Your Shop",
    lead: "Three places a bath remodeler gains ground: Google rankings, AI answers and the consult log.",
    rank: {
      title: "Climb Page One for Shower and Bath Searches",
      body: [
        "We sort bath searches by project and town, then match each to a page: conversions, walk-in showers, accessible baths, full renovations. Positions are checked weekly, and gaps against nearby remodelers get closed in order of value.",
      ],
      points: [
        "Project-by-project keyword map",
        "Town rankings each week",
        "Shower pages first",
        "Gaps versus nearby remodelers",
      ],
      cta: "Show My Bath Keyword Gaps",
      keywords: [
        ["bathroom remodel near me", 24, 3],
        ["walk in shower installer", 31, 4],
        ["tub to shower conversion", 18, 2],
        ["bathroom remodeler + your city", 27, 3],
      ],
    },
    ai: {
      title: "Be the Bath Remodeler AI Tools Suggest First",
      body: [
        "When someone asks an assistant who handles curbless showers nearby, it looks at project pages, listing details and what reviews say about the work. We write those answers into your site and keep the facts aligned, applying what we practise in our ",
        {
          href: "/services/ai-seo-services",
          label: "AI search optimization work",
        },
        ".",
      ],
      points: [
        "Project facts on every page",
        "Bath FAQs in plain words",
        "Listings that agree",
        "AI answer spot checks",
      ],
      cta: "Check My AI Bath Mentions",
      query: "who installs curbless showers near me",
      intro: "For curbless shower installs near you,",
      bullets: [
        "Gallery of finished showers",
        "Clear permit and timeline page",
        "Reviews naming shower work",
      ],
    },
    leads: {
      title: "Track Every Bath Consult Back to Its Search",
      body: [
        "A ranking matters once a homeowner books the in-home visit. We label every call and consult form with the bath page and query behind it, each project page gets a booking button, and ",
        {
          href: "/services/google-ads",
          label: "Google Ads for bath remodelers",
        },
        " can cover slow months.",
      ],
      points: [
        "Calls tagged by page",
        "Consult form on mobile",
        "Gallery-page click tracking",
        "A monthly consult report",
      ],
      cta: "See Where My Bath Leads Start",
      items: [
        ["Walk-in shower consult", "Google Maps", "Mon 9:20 AM"],
        ["Tub conversion form", "Conversion page", "Mon 2:05 PM"],
        ["Grab-bar retrofit enquiry", "AI Overview link", "Thu 11:52 AM"],
        ["Full remodel request", "Town page", "Wed 4:15 PM"],
      ],
    },
  },
  results: {
    title: "A Bath Remodeler's Growth Path With Zonic",
    lead: "Profile fixes land first, then shower pages, galleries and reviews that bring steadier consult requests.",
    cta: "Map Out My Bath Remodel Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Bath Listing Cleaned Up",
        text: "We set the bathroom remodeler category, service towns and hours, so Google starts matching you to bath searches.",
      },
      {
        when: "Month 1",
        title: "Shower and Tub Pages Live",
        text: "Conversion, walk-in shower and accessible-bath pages go up with real project photos and begin picking up searches.",
      },
      {
        when: "Months 2–4",
        title: "Bath Galleries Gain Ground",
        text: "Captioned galleries and fresh reviews naming showers and tile help your listing move toward the top of Maps.",
      },
      {
        when: "Month 4 onward",
        title: "A Steadier Bath Consult Calendar",
        text: "More in-home visit requests for the bath work you prefer, with each one linked to its source page.",
      },
    ],
    wins: [
      {
        icon: "shower",
        title: "More Requests for Walk-In Showers and Conversions",
        text: "Homeowners searching tub swaps and curbless showers land on pages written for exactly that bath project.",
      },
      {
        icon: "camera",
        title: "Finished Baths That Do the Selling",
        text: "Before-and-after photos on your profile and site let homeowners judge your tile and glass work before calling.",
      },
      {
        icon: "star",
        title: "Five-Star Reviews From Finished Bathrooms",
        text: "Clients mention the shower, vanity or layout in their own words, and every review gets a thoughtful reply.",
      },
      {
        icon: "trend",
        title: "Fewer Bath Leads Shared With Rivals",
        text: "Homeowners book you straight from Google instead of filling a lead form that goes to several remodelers.",
      },
    ],
  },
  compare: {
    title: "Bath Remodeler SEO: Zonic vs. the Usual Approach",
    lead: "What bath remodelers often get from SEO providers, beside how we run it.",
    rows: [
      {
        topic: "Bath project photos",
        other:
          "Stock images or a few old photos, rarely captioned or tied to a town.",
        zonic:
          "Captioned before-and-after galleries on your profile and site, named by project and town.",
      },
      {
        topic: "Shower and tub pages",
        other:
          "One general remodeling page expected to rank for every bathroom search.",
        zonic:
          "Separate pages for tub-to-shower swaps, walk-in showers, accessible baths and each service town.",
      },
      {
        topic: "Accessible bath searches",
        other:
          "Aging-in-place and ADA searches often left out of the keyword plan.",
        zonic:
          "Dedicated pages and profile services for grab bars, walk-in tubs and curbless showers.",
      },
      {
        topic: "Bath consult tracking",
        other:
          "Traffic and ranking charts with no line to booked in-home visits.",
        zonic:
          "Calls and consult forms tagged by page and search, reported each month in plain terms.",
      },
      {
        topic: "Bath remodeler contract terms",
        other:
          "Long commitments are common before any consult can be traced to SEO.",
        zonic:
          "Cancel in any month; the profile, website and call tracking stay yours.",
      },
      {
        topic: "AI answers for bath projects",
        other:
          "Rarely planned for, so assistants suggest whichever remodeler has clearer pages.",
        zonic:
          "Plain answers on permits, timelines and materials, plus matching listings AI tools can quote.",
      },
    ],
  },
  steps: {
    title: "Our Three-Step Plan for Bathroom Remodeling Company SEO",
    lead: "Listing and site repairs come first; project pages, galleries and review requests follow and compound.",
    items: [
      {
        h: "Bath Remodel Audit and Project Map",
        p: "We compare your listing and website with the bath remodelers outranking you, then rank the projects and towns worth chasing first.",
      },
      {
        h: "Repair the Listing, Publish Bath Pages",
        p: "Category, photo and technical fixes ship in week one; shower, conversion and town pages come next, and every finished bathroom triggers a review text.",
      },
      {
        h: "Report Consults, Expand the Bath Wins",
        p: "Monthly reports show rankings, calls and consult forms by project type, and the pages bringing in work get extra attention.",
      },
    ],
    audit: [
      ["Maps position", "behind"],
      ["Shower pages", "gap"],
      ["Gallery photos", "open"],
      ["Review requests", "behind"],
    ],
    plan: [
      "Shower pages",
      "Conversion page",
      "Town pages",
      "Galleries",
      "Reviews",
    ],
    launch: [
      "Listing repaired",
      "Bath pages live",
      "Photos posted",
      "Consults tracked",
    ],
  },
  explore: {
    title: "Beyond Rankings: More Support for Bath Remodelers",
    lead: "Rankings land harder with a site built for galleries, plus paid search for quiet months.",
    items: [
      {
        name: "Bath Remodeling Marketing",
        sub: "Ads, SEO and reviews together",
        href: "/services/bathroom-remodeling-marketing-agency",
        icon: "bath",
      },
      {
        name: "Bath Remodeler Websites",
        sub: "Galleries that book visits",
        href: "/services/bathroom-remodeling-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Consults while SEO builds",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Our method across trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Remodel kitchens and basements too? One plan can cover every room you build.",
  },
  reviews: {
    title: "Our 5.0 Google Rating, Written by Business Owners",
    lead: "Each review here is copied straight from our Google listing, with nothing trimmed or polished.",
  },
  pricing: {
    title: "Bath Remodeler SEO Plans With Monthly Terms",
    compareTitle: "Side-by-Side Plans for Bath Remodeling Shops",
    addOnsTitle: "Extras for Busy Bath Remodeling Seasons",
    customTitle: "Bath Showrooms in More Than One Town?",
  },
  faq: {
    title: "Your Questions on SEO for Bathroom Remodelers",
    lead: "Timelines, costs, Maps rankings and what a bath remodeler should expect from local SEO.",
    items: [
      {
        q: "What does local SEO for bathroom remodelers include?",
        a: "It is the set of tasks that decides whether nearby homeowners find your bath business: a tuned Business Profile, pages for showers, conversions and each town, galleries of finished rooms, steady reviews and accurate listings. Done together, they lift you into the Maps top three and onto page one.",
      },
      {
        q: "How much does bathroom remodeling SEO cost?",
        a: "Plans are $297, $750 or $1,500 a month with no annual term. One-showroom shops often begin with the entry plan; firms remodeling across a metro, or adding managed Google Ads, usually need more hours. Your free audit recommends a plan based on how crowded your local results are.",
      },
      {
        q: "How long until SEO for bathroom remodeling shows results?",
        a: "Map positions often start shifting a few weeks after the profile is fixed and fresh photos go up. Busy city searches such as “bathroom remodel near me” typically take several months of new pages and steady reviews. Each monthly report shows rankings and consult requests side by side, so the trend is never hidden.",
      },
      {
        q: "Which keywords should a bathroom remodeler target?",
        a: "Lead with the projects that fill your schedule plus the towns you serve: “tub to shower conversion”, “walk in shower installer”, “bathroom remodel near me” and accessible-bath searches. Your audit ranks each phrase by demand, and we write pages for the ones that bring real projects.",
      },
      {
        q: "What puts a bathroom company in the Maps top three?",
        a: "Set Bathroom Remodeler as your main category, add each bath service and the towns you cover, upload finished-project photos often, and earn reviews that mention showers or tubs. Consistent business details on directories, plus a dedicated page per project type, complete the signals Google weighs.",
      },
      {
        q: "Do before-and-after photos help bathroom remodeling SEO?",
        a: "Yes. Photos on your profile and project pages show Google and homeowners what you build, and captions that name the town and the work add relevance. We compress them so pages stay quick, and write alt text so image search can surface them too.",
      },
      {
        q: "Do you also do SEO for bathroom fitters and designers?",
        a: "Yes. Fitters who install showers and vanities, and designers who plan whole rooms, get the same core work with different pages: install services and turnaround for fitters, design process and portfolio for designers. We pick the profile category that matches how you actually work.",
      },
      {
        q: "Will AI search change how bath remodelers get found?",
        a: "Yes, and the shift is underway. AI Overviews and ChatGPT pull from much of what drives Maps: detailed project pages, steady reviews and listings that agree. Remodelers who explain timelines, permits and materials clearly get suggested more often than shops with a bare website.",
      },
      {
        q: "Can one bathroom company rank in several towns?",
        a: "Yes, if each town has its own proof. We give every key town a page with a finished bath from that area, list those towns in your profile's service area, and report Maps positions town by town so effort moves to wherever you trail.",
      },
      {
        q: "Is there a long contract for bathroom remodeling SEO?",
        a: "No. Bath remodeling clients pay monthly with no term, keep ownership of the profile, site and call tracking, and every report spells out each edit we made and the reason for it. If the work stops earning consults, you are free to leave.",
      },
    ],
  },
  audit: {
    title: "Get a Free Look at Your Bathroom Company's Rankings",
    lead: [
      "Share your website and which bath projects you'd like more of. We'll pull your Maps positions town by town, review your photos and reviews beside the shops outranking you, and reply with a short written plan. Learn ",
      { href: "/about", label: "who our team is" },
      " or browse ",
      { href: "/services", label: "everything we offer remodelers" },
      ".",
    ],
    points: [
      "Town-by-town map positions",
      "Bath search gaps",
      "Photo and profile review",
      "Written first-month plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free bath remodel SEO audit",
      title: "Request a Bathroom SEO Audit",
      subtitle: "Free, with no contract attached.",
      submitText: "Send My Bath Audit Request",
      messageLabel: "Your website and main bath services",
      messagePlaceholder:
        "yourwebsite.com, the bath projects you want and the towns you cover",
    },
  },
  banner: {
    title: "Get on Every Bath Remodel Shortlist in Town",
    lead: "Stronger Maps placement, more AI mentions and consult requests you can trace to the search behind them.",
  },
};
