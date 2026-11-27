import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* HOME SERVICES MARKETING AGENCY — new page (26 Nov 2026).

   Research: research_notes/Home services and contractor SEO pages/
   home_services_marketing_agency.md (Semrush US, Google top 10s, the ranking
   agency pages, Google/BrightLocal/Pew sources, 26 Nov 2026).
   - Targets: home services marketing agency 1,900 (KD 17) · home service
     marketing agency 1,300 (KD 25) · home services digital marketing 1,300
     (KD 16) · digital marketing for home services 1,900 · home services
     digital marketing agency 720 (KD 14) · home service marketing company
     480 (KD 9). Search Console (3 months): these phrases reach the site at
     positions 27–68, all on /services/local-seo-for-home-services, whose
     intent is SEO. "home service marketing agency" 77 impressions at 59.5.
   - Left to other pages: every "home services SEO" phrase (locked
     /services/local-seo-for-home-services, linked from the search card);
     "contractor marketing agency" (shares 0 of 10 Google results with the
     target, so it is a different topic); "<trade> marketing agency" terms
     (trade pages, linked from the trade grid); "local seo for contractors"
     and every "contractor seo" phrase (/services/seo-for-contractors).
   - /industries was retuned to "Industries We Serve" in the same release
     so the hub and this page no longer share a title and H1 phrase.
   - Gaps none of the ranking pages cover, used here: shared vs owned
     leads, Local Services Ads moving into Google Ads (Aug 2026), the
     Google Verified badge, and booked-job reporting.
   No marketplace or agency is named, no prices outside the plan FAQ and
   audit points, no "inspection" wording and no storm theme. The hero uses
   outcome tiles: every trade photo is already used on another page. */

export const CONTENT: IndustryContent = {
  draftSlug: "home-services-marketing-agency",
  liveUrl: "/services/home-services-marketing-agency",
  niche: "Home Services",
  meta: {
    title: "Home Services Marketing Agency | Digital Marketing & Ads",
    description:
      "Home services marketing agency for HVAC, plumbing, roofing and other trades: Google Maps, Google Ads, websites and AI search that bring leads you own.",
    keywords: [
      "home services marketing agency",
      "home service marketing agency",
      "home services marketing",
      "home service marketing",
      "home services digital marketing",
      "home services digital marketing agency",
      "digital marketing for home services",
      "marketing for home service businesses",
      "home service business marketing",
      "home services marketing company",
      "home service marketing company",
      "home services lead generation",
      "home services advertising",
      "google ads for home services",
      "home services ppc",
      "marketing agency for home services",
    ],
  },
  palette: PALETTES.emeraldSky,
  hero: {
    h1Lead: "Home Service",
    h1Icon: "home",
    h1Rest: "Marketing Agency for Leads You Own",
    lead: [
      "We help HVAC, plumbing, roofing, electrical and other home service companies win calls that come to them alone. One team runs your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", ",
      { href: "/services/google-ads", label: "Google Ads" },
      ", website and AI search, and reports every booked job by source.",
    ],
    cta: "Get My Free Home Services Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Top 3 on Google Maps",
        sub: "For the jobs you want, in every town you serve",
        chips: ["HVAC", "Plumbing", "Roofing", "Electrical"],
      },
      left: {
        icon: "call",
        title: "More booked jobs",
        sub: "Calls from homeowners ready to book",
      },
      right: {
        icon: "sparkle",
        title: "Named in AI answers",
        sub: "When homeowners ask ChatGPT or Google",
      },
      bottom: {
        title: "Leads that stay yours",
        sub: "Rankings, reviews and ads in your own name",
      },
    },
  },
  services: {
    title: "Home Services Digital Marketing That Books Jobs",
    lead: "Six channels run as one plan and measured in booked jobs, not clicks.",
    cta: "Audit My Home Services Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile and Maps",
        desc: "Categories, services, service areas, photos and posts set up so your profile shows in the Map Pack for each trade and town you cover.",
        points: [
          "Service areas set right",
          "Weekly photos and posts",
          "Suspension help included",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile optimization",
          },
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Google Maps ranking checker",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads and Local Services Ads",
        desc: "Search campaigns for high-value jobs and Local Services Ads set up for pay-per-lead calls, with junk searches blocked and every call recorded.",
        points: [
          "High-value job campaigns",
          "Local Services Ads setup",
          "Ad spend billed at cost",
        ],
        links: [{ href: "/services/google-ads", label: "Google Ads management" }],
      },
      {
        icon: "monitor",
        title: "Home Service Websites",
        desc: "Fast mobile sites with click-to-call, a page for every service and town, warranty and financing details, and forms that record each lead's source.",
        points: [
          "Click-to-call on every page",
          "Service and town pages",
          "Lead source tracking",
        ],
        links: [
          { href: "/services/web-design", label: "Home service website design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Reputation",
        desc: "Review requests after every job, replies in your voice and fresh reviews that name the work, since homeowners check how recent reviews are.",
        points: [
          "Post-job review texts",
          "Replies within days",
          "Reviews that name the job",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile reinstatement",
          },
        ],
      },
      {
        icon: "search",
        title: "Local Search Rankings",
        desc: "Service pages, town pages and links that lift your website for searches like “water heater repair near me”, run by the same team.",
        points: [
          "Service and town pages",
          "Local links and citations",
          "Rankings tracked weekly",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home services SEO",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility",
        desc: "Clear service, area and license facts kept the same on your site and listings, so ChatGPT and Google's AI answers can name your company.",
        points: [
          "Consistent business facts",
          "Answer-ready service pages",
          "Monthly AI mention checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI search optimization" },
        ],
      },
    ],
  },
  growth: {
    title: "Get Found Where Homeowners Look: Maps, Ads and AI Answers",
    lead: "Three places decide who gets the call, and each one needs different work.",
    rows: [
      {
        title: "Win the Map Pack for Every Service You Sell",
        body: [
          "Google ranks local results on relevance, distance and prominence, and says more reviews and good ratings help. We tune your profile for each service, set service areas within Google's rules and keep fresh reviews coming in every town you cover.",
        ],
        points: [
          "Category and service setup",
          "Service areas set by the rules",
          "Review flow after every job",
          "Rank tracking by town",
        ],
        cta: "Check My Maps Ranking",
        ui: {
          kind: "maps",
          query: "ac repair near me",
          city: "Charlotte",
          category: "HVAC contractor · Open 24 hours",
        },
      },
      {
        title: "Home Services Advertising That Pays for Real Jobs",
        body: [
          "Local Services Ads charge for valid leads, not clicks, and Google began moving them into Google Ads in August 2026, starting with trades like plumbing and HVAC. We set up both, keep the Google Verified checks current and point search ads at your highest-value jobs.",
        ],
        points: [
          "Pay-per-lead setup",
          "Google Verified badge steps",
          "Search ads for big jobs",
          "Every call recorded",
        ],
        cta: "Plan My Home Services Ads",
        ui: {
          kind: "calls",
          title: "Calls from ads this week",
          calls: [
            {
              service: "Water heater replacement",
              source: "Local Services Ads",
              when: "Mon 8:12 AM",
            },
            {
              service: "AC system replacement",
              source: "Google Ads · Call",
              when: "Tue 2:40 PM",
            },
            {
              service: "Electrical panel upgrade",
              source: "Google Ads",
              when: "Thu 10:05 AM",
            },
          ],
        },
      },
      {
        title: "Be the Company AI Answers Recommend",
        body: [
          "Google's AI Mode now researches home services such as electricians and tree cutting, and BrightLocal found 45% of US consumers used AI tools for local recommendations (Feb 2026). We make your services, areas and reviews easy for these tools to confirm.",
        ],
        points: [
          "Service and area facts",
          "Listings kept consistent",
          "Reviews that describe the job",
          "AI answer checks",
        ],
        cta: "See How AI Describes My Business",
        ui: {
          kind: "ai",
          query: "who can repair my furnace today near me",
          intro: "For same-day furnace repair near you,",
          bullets: [
            "Open now with same-day slots",
            "Licensed and insured technicians",
            "Strong, recent reviews",
          ],
        },
      },
    ],
  },
  ownLeads: {
    title: "Home Services Lead Generation You Don't Share",
    body: [
      "On lead marketplaces, one homeowner request can go to several companies, and you may pay for it whether or not you reach the customer. As a ",
      { href: "/services", label: "full-service marketing team" },
      ", we build leads that reach only you, through your own rankings, ads and website.",
    ],
    cta: "Build My Own Lead Flow",
    colShared: "Shared lead lists",
    colOwn: "Leads you own",
    rows: [
      ["Who hears about the job", "Several companies at once", "Only your business"],
      ["How you're charged", "Per lead, reached or not", "Your own ads and site"],
      ["Name the homeowner saves", "The marketplace's", "Your company's"],
      ["Where reviews land", "On someone else's site", "On your Google profile"],
      ["If you pause spending", "Requests stop", "Your rankings and reviews stay"],
    ],
  },
  specialties: {
    title: "Marketing for Home Service Businesses, Trade by Trade",
    lead: "Each trade buys differently, so each gets its own pages, campaigns and seasons. Open your trade to see its full plan.",
    items: [
      {
        icon: "hvac",
        name: "HVAC Marketing",
        tactic: "AC and furnace calls in every season",
        href: "/services/hvac-marketing-agency",
      },
      {
        icon: "plumbing",
        name: "Plumbing Marketing",
        tactic: "Emergency, drain and water heater calls",
        href: "/services/plumbing-marketing-agency",
      },
      {
        icon: "electric",
        name: "Electrician Marketing",
        tactic: "Panels, EV chargers and repairs",
        href: "/services/electrician-marketing-agency",
      },
      {
        icon: "roof",
        name: "Roofing Marketing",
        tactic: "Repairs and full replacements",
        href: "/services/roofing-marketing-agency",
      },
      {
        icon: "garage",
        name: "Garage Door Marketing",
        tactic: "Spring, opener and new-door calls",
        href: "/services/garage-door-marketing-agency",
      },
      {
        icon: "repair",
        name: "Appliance Repair Marketing",
        tactic: "Same-day repair bookings",
        href: "/services/appliance-repair-marketing-agency",
      },
      {
        icon: "drop",
        name: "Gutter Marketing",
        tactic: "Installs, guards and cleanings",
        href: "/services/gutter-marketing-agency",
      },
      {
        icon: "water",
        name: "Septic Marketing",
        tactic: "Pumping and repair calls",
        href: "/services/septic-marketing-agency",
      },
      {
        icon: "solar",
        name: "Solar Marketing",
        tactic: "Consultations with careful buyers",
        href: "/services/solar-marketing-agency",
      },
      {
        icon: "kitchen",
        name: "Kitchen Remodeling Marketing",
        tactic: "Design consults after long research",
        href: "/services/kitchen-remodeling-marketing-agency",
      },
      {
        icon: "bath",
        name: "Bathroom Remodeling Marketing",
        tactic: "Galleries that book home visits",
        href: "/services/bathroom-remodeling-marketing-agency",
      },
      {
        icon: "construction",
        name: "General Contractor Marketing",
        tactic: "Additions and whole-home remodels",
        href: "/services/general-contractor-marketing-agency",
      },
      {
        icon: "layers",
        name: "Flooring Marketing",
        tactic: "Showroom visits and in-home measures",
        href: "/services/flooring-marketing-agency",
      },
      {
        icon: "window",
        name: "Window and Door Marketing",
        tactic: "In-home consultations",
        href: "/services/window-and-door-marketing-agency",
      },
      {
        icon: "paint",
        name: "Painting Contractor Marketing",
        tactic: "Interior and exterior estimates",
        href: "/services/painting-contractor-marketing-agency",
      },
      {
        icon: "grass",
        name: "Landscaping Marketing",
        tactic: "Spring rush and maintenance plans",
        href: "/services/landscaping-marketing-agency",
      },
      {
        icon: "tree",
        name: "Tree Service Marketing",
        tactic: "Removal and trimming calls",
        href: "/services/tree-service-marketing-agency",
      },
      {
        icon: "fence",
        name: "Fence Company Marketing",
        tactic: "Quotes backed by project photos",
        href: "/services/fence-company-marketing-agency",
      },
      {
        icon: "pool",
        name: "Pool Service Marketing",
        tactic: "Weekly service accounts",
        href: "/services/pool-service-marketing-agency",
      },
      {
        icon: "pest",
        name: "Pest Control Marketing",
        tactic: "First visits that become plans",
        href: "/services/pest-control-marketing-agency",
      },
      {
        icon: "clean",
        name: "Cleaning Company Marketing",
        tactic: "Recurring house and office cleans",
        href: "/services/cleaning-company-marketing-agency",
      },
      {
        icon: "moving",
        name: "Moving Company Marketing",
        tactic: "Quotes for busy moving dates",
        href: "/services/moving-company-marketing-agency",
      },
      {
        icon: "inspectList",
        name: "Home Inspector Marketing",
        tactic: "Realtor referrals and buyer bookings",
        href: "/services/home-inspector-marketing",
      },
      {
        icon: "search",
        name: "SEO for Contractors",
        tactic: "Rankings for every contractor trade",
        href: "/services/seo-for-contractors",
      },
    ],
    more: "Run a trade we haven't listed? We build the same plan around it.",
  },
  steps: {
    title: "How We Plan Your Home Services Marketing",
    lead: "Fixes that bring calls soonest come first; rankings, reviews and AI visibility build from there.",
    items: [
      {
        h: "We Check Every Channel You Rely On",
        p: "Your Maps rank by town, site speed, reviews, ads and lead sources, compared with the companies winning your jobs, so you see what is costing calls.",
      },
      {
        h: "We Plan Around Your Trade's Seasons",
        p: "Together we pick the services, towns and months to push, matched to your crew size and the jobs that pay best.",
      },
      {
        h: "We Launch, Then Report Booked Jobs",
        p: "Profile fixes, pages, ads and review requests go live, and each month you see calls, booked jobs and where every one came from.",
      },
    ],
    audit: [
      ["Maps rank in your main towns", "behind"],
      ["Reviews from the last 90 days", "gap"],
      ["Calls tracked by source", "open"],
      ["Mobile site speed", "good"],
    ],
    plan: ["Drain cleaning", "AC tune-ups", "Busy season", "Town pages", "Reviews"],
    launch: [
      "Profile categories fixed",
      "Service pages live",
      "Call tracking on",
      "Review texts running",
    ],
  },
  reviews: {
    title: "Home Service Owners Rate Us 5.0 on Google",
    lead: "Every review below comes from our Google profile, unedited.",
  },
  pricing: {
    title: "Home Services Marketing Plans You Can Change Monthly",
    compareTitle: "Compare Plans for Home Service Companies",
    addOnsTitle: "Add-Ons for Busy Seasons and New Towns",
    customTitle: "Running several trades or locations?",
  },
  faq: {
    title: "Home Services Marketing Company Questions, From Cost to Contracts",
    lead: "Costs, timelines, shared leads, Local Services Ads, AI search and who owns what.",
    items: [
      {
        q: "What does a home services marketing agency do?",
        a: "It runs the channels that bring homeowners to you as one plan: your Google Business Profile and Maps rankings, website, Google Ads and Local Services Ads, reviews and AI search. A good agency reports booked jobs and where each came from, not just clicks or traffic.",
      },
      {
        q: "How much does home services marketing cost?",
        a: "Our plans are $297, $950 or $1,500 a month, billed month to month, and Google bills your ad budget directly with 0% markup from us. Companies running ads across two or more trades usually choose Growth or Authority. Your free audit recommends a tier for your market.",
      },
      {
        q: "Which marketing should a home service business start with?",
        a: "Start with your Google Business Profile, reviews and a fast site with click-to-call, because they decide whether you show up and get chosen. Then add Local Services Ads or search ads to catch demand while rankings grow. AI search and content work build on that base.",
      },
      {
        q: "Do I need Local Services Ads if I already rank on Google Maps?",
        a: "They do different jobs. Maps rankings are free placements earned over time, while Local Services Ads charge per valid lead and often sit above them. Google began moving these ads into Google Ads in August 2026, starting with trades like plumbing and HVAC. Many companies run both.",
      },
      {
        q: "Are leads from lead marketplaces shared with other companies?",
        a: "Often, yes. On many lead marketplaces one homeowner request goes to several companies, and you can be charged whether or not you reach the customer. Leads from your own rankings, website and ads go to you alone, and the reviews they bring keep working for you.",
      },
      {
        q: "How soon will home services marketing bring calls?",
        a: "Search ads can bring calls within days of launch. Local Services Ads start once Google's screening and verification are done. Maps and website rankings build over months, so we run quick wins and long-term work side by side and report what each one brings in.",
      },
      {
        q: "Who owns my website, Google Business Profile and ad accounts?",
        a: "You do. Your Business Profile, website, domain, Google Ads account and call-tracking numbers stay in your company's name, and you keep full access if you ever leave. We work inside your accounts, so nothing has to be rebuilt or transferred later.",
      },
      {
        q: "Is there a long-term contract for home services marketing?",
        a: "No. Plans run month to month, so you stay because the calls keep coming, not because of a contract. You can move between plans as your busy and slow seasons change, and your accounts stay yours either way.",
      },
      {
        q: "How do you measure home services marketing results?",
        a: "By calls, form leads, booked jobs and cost per booked job, split by source: Google Maps, your website, Local Services Ads, search ads and AI referrals. Monthly reports also list the work done, so you can see what changed and what it produced.",
      },
      {
        q: "Can you get my company recommended in ChatGPT and Google's AI answers?",
        a: "We can make it far more likely. AI tools lean on business websites, Business Profiles and reviews when they suggest local pros, so we keep your services, areas and licenses clear and identical everywhere. No one can guarantee a mention, and we track where you appear.",
      },
      {
        q: "Which home service trades do you work with?",
        a: "HVAC, plumbing, electrical, roofing, garage doors, remodeling, flooring, painting, landscaping, tree care, pools, pest control, cleaning, moving and more. Each trade has its own plan and page, listed above, and we build the same groundwork for trades we haven't listed yet.",
      },
      {
        q: "Do digital ads work for home service businesses?",
        a: "Yes, especially for urgent, high-value jobs such as a dead AC or a burst pipe, when people call the first trusted company they see. Pay-per-lead ads suit steady demand and search ads suit specific job types; call tracking shows which one pays off for you.",
      },
    ],
  },
  audit: {
    title: "Free Home Services Marketing Audit for Your Area",
    lead: [
      "We check your Maps rank by town, profile, website, reviews, ads and lead sources against the companies winning your jobs, then rank the fixes by the calls they should add. ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Profile reinstatement",
      },
      " is covered too. See every other ",
      { href: "/industries", label: "industry we serve" },
      ".",
    ],
    points: [
      "Monthly plans from $297",
      "No markup on ad spend",
      "Month to month, no lock-in",
      "Accounts kept in your name",
    ],
    form: {
      formType: "home-services-marketing",
      badge: "Free home services audit",
      title: "Request Your Free Home Services Marketing Audit",
      subtitle: "No cost and no contract, only findings.",
      submitText: "Send My Home Services Audit",
      messageLabel: "Your trades and service area",
      messagePlaceholder:
        "Trades you run (HVAC, plumbing, roofing…), the towns you cover and the jobs you want more of",
    },
  },
  banner: {
    title: "Fill Your Schedule With Jobs That Come Only to You",
    lead: "Your free audit shows which fixes will add booked jobs soonest.",
    icons: ["home", "call"],
  },
};
