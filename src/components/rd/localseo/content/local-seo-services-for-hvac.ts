/* Local SEO Services for HVAC — redesign draft copy (26 Oct 2026).
   Brief: docs/local-seo-redesign-brief.md. Fresh copy; nothing reused from
   the live page, the electricians reference, /services/seo-services-2 or
   /services/hvac-marketing-agency-2.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: no impressions recorded, so no
     ranking phrase to protect beyond the live title's "HVAC SEO Company".
   - Semrush US: hvac seo 3,600 (KD 33) · hvac seo services 2,400 (28) ·
     seo for hvac companies 1,900 (34) · hvac seo company 1,600 (29) · hvac
     seo agency 1,300 (25) · local seo for hvac 720 (26).
   - Web research (BrightLocal, HawkSEM, vendor GBP guides, AI-search
     guides): top pages cover GBP, keywords, service/town pages, reviews,
     links; gaps were emergency/after-hours visibility, seasonal timing,
     schema and AI answers. GBP guides agree on "HVAC Contractor" as the
     primary category with AC/furnace repair secondaries, and warn that a
     primary-category change can trigger re-verification (so: not in peak
     season). AI-search sources say big-ticket installs (furnace, heat pump)
     increasingly start in AI answers while breakdowns still go to Maps —
     hence the phone hero on "ac repair near me" and the AI row on furnace
     replacement. Commercial HVAC got its own FAQ.
   - Title keeps "HVAC SEO Company" (live title) and adds "local seo for
     hvac"; the H1 leads with "HVAC SEO Services". */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-services-for-hvac",
  audience: "HVAC contractors and heating and cooling companies",
  serviceName: "Local SEO Services for HVAC",
  meta: {
    title: "HVAC SEO Company & Services | Local SEO for HVAC",
    description:
      "HVAC SEO services that rank heating and cooling companies on Google Maps, local results and AI answers for AC repair, furnace and heat pump jobs. Free audit.",
    keywords: [
      "hvac seo",
      "hvac seo services",
      "seo for hvac companies",
      "hvac seo company",
      "hvac seo agency",
      "local seo for hvac",
      "hvac local seo",
      "seo for hvac contractors",
      "hvac contractor seo",
      "local seo services for hvac",
    ],
  },
  hero: {
    h1Lead: "HVAC SEO Services",
    h1Rest: "That Win the Call When the AC or Furnace Quits",
    icon: "hvac",
    lead: [
      "A homeowner with a dead compressor or a cold furnace picks from the first names on Maps. Our HVAC SEO company tunes your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", builds a page for each system you service and logs every call by source.",
    ],
    cta: "Book My Free HVAC Audit",
    ui: {
      kind: "growth",
      maps: "grid",
      ai: "voice",
      growth: "calls",
      business: "Your HVAC Co.",
      category: "HVAC contractor",
      query: "ac repair near me",
      aiPrompt: "Find an AC repair company open now near me",
      aiReasons: ["Open 24 hours", "Same-day repairs"],
      growthLabel: "Repair calls by week",
      leads: [
        ["No-cool repair call", "Google Maps"],
        ["Furnace tune-up booking", "Voice search"],
        ["Heat pump quote", "System page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top 3 citywide",
          title: "On Top of the Map in Every Suburb",
          text: "Service-area setup and town pages keep you near #1 across your region.",
        },
        {
          label: "Voice & AI",
          badge: "Suggested",
          title: "The Answer When Someone Asks Out Loud",
          text: "Voice assistants and AI tools suggest you when the AC dies at night.",
        },
        {
          label: "Calls",
          badge: "Peak season",
          title: "More Repair Calls When It Heats Up",
          text: "Calls climb through peak season, and every one traces to its source.",
        },
      ],
    },
  },
  searches: {
    title: "What Homeowners Search When the Heat or AC Fails",
    lead: "Your pages and profile are built on the words people type with a warm house or an iced-up coil.",
    groups: [
      {
        icon: "snow",
        label: "Breakdown HVAC searches",
        terms: [
          "ac repair near me",
          "furnace not turning on",
          "ac blowing warm air",
          "emergency hvac repair",
          "heat pump not heating",
          "hvac service open now",
        ],
      },
      {
        icon: "hvac",
        label: "HVAC install and replacement searches",
        terms: [
          "new ac unit installation",
          "furnace replacement near me",
          "heat pump installers near me",
          "ductless mini split install",
          "central air installation",
          "hvac company for a new system",
        ],
      },
      {
        icon: "calendar",
        label: "Seasonal HVAC maintenance searches",
        terms: [
          "ac tune up near me",
          "furnace tune up",
          "hvac maintenance plan",
          "duct cleaning near me",
          "smart thermostat installation",
          "indoor air quality testing",
        ],
      },
    ],
  },
  services: {
    title: "What Our HVAC SEO Agency\nHandles Every Month",
    lead: "Six workstreams tied to the systems and seasons that pay your techs best.",
    cta: "Review My HVAC Website",
    items: [
      {
        icon: "pin",
        title: "HVAC Business Profile and Maps Setup",
        desc: "We set HVAC Contractor as the primary category, add furnace and AC repair secondaries, map your service area and post finished installs weekly.",
        points: [
          "Primary category check",
          "Service-area radius",
          "Install photo posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "HVAC profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get the HVAC profile verified",
          },
        ],
      },
      {
        icon: "file",
        title: "HVAC Service and Town Pages",
        desc: "Separate pages for AC repair, furnace repair, heat pumps and ductless systems, plus a page for each town your trucks reach.",
        points: [
          "Repair and install pages",
          "Town pages by radius",
          "Rebate and sizing FAQs",
        ],
        links: [
          {
            href: "/services/hvac-website-design",
            label: "HVAC website builds",
          },
        ],
      },
      {
        icon: "star",
        title: "HVAC Review Requests After Every Visit",
        desc: "A text goes out once the tech closes the ticket, so new reviews mention tune-ups, installs and the technician by name.",
        points: [
          "Ticket-close texts",
          "Tech names in reviews",
          "Replies within a day",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "HVAC Site Speed and Schema Repairs",
        desc: "Mobile load time, HVACBusiness schema, broken links and index bloat fixed, so Google reads every system page and booking forms work on phones.",
        points: [
          "HVACBusiness schema",
          "Core Web Vitals",
          "Crawl and index fixes",
        ],
        links: [{ href: "/services/web-design", label: "Fast site rebuilds" }],
      },
      {
        icon: "layers",
        title: "HVAC Citations and Distributor Links",
        desc: "Consistent name, address and phone across directories, plus links from equipment distributors, utility rebate lists and local trade associations.",
        points: [
          "NAP cleanup",
          "Dealer locator listings",
          "Trade group mentions",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended listing recovery",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for HVAC Companies",
        desc: "Direct answers on repair-or-replace, sizing and maintenance, with your licence, brands and service area stated identically everywhere, so AI tools can name you.",
        points: [
          "Repair-or-replace answers",
          "Entity facts aligned",
          "HVAC answer checks monthly",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI visibility for HVAC",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How HVAC SEO Turns Peak Seasons Into Booked Calls",
    lead: "Higher Maps spots in July and January, AI mentions for big installs, and calls you can trace.",
    rank: {
      title: "Climb the HVAC Searches That Spike Each Season",
      body: [
        "We group HVAC searches by system and season, then publish pages before demand peaks: AC repair ahead of summer, furnace work ahead of the first freeze. Every term is tracked by town, so you can see which neighborhoods still favor a rival.",
      ],
      points: [
        "Pre-season page launches",
        "System-by-system keyword map",
        "Town-level rank tracking",
        "Rival gap notes",
      ],
      cta: "Show My HVAC Ranking Gaps",
      keywords: [
        ["ac repair near me", 18, 3],
        ["furnace repair + your city", 24, 2],
        ["heat pump installers", 31, 4],
        ["emergency hvac service", 21, 3],
      ],
    },
    ai: {
      title: "Get Your HVAC Company Named in AI Answers",
      body: [
        "Homeowners now ask AI which contractor to trust with a new system. Clear install pages, licence and warranty details, and reviews that name the equipment give assistants something to cite. It is the same groundwork as our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Licence and warranty facts",
        "Install FAQs on site",
        "Consistent listings",
        "AI answer checks",
      ],
      cta: "Check My HVAC AI Mentions",
      query: "best company to replace my furnace near me",
      intro: "To replace a furnace near you,",
      bullets: [
        "Licensed and insured techs",
        "Detailed furnace install page",
        "Recent reviews naming installs",
      ],
    },
    leads: {
      title: "Trace Every HVAC Call Back to Its Search",
      body: [
        "A ranking only matters if the phone rings. Each inbound call and web form is labelled with its page and keyword, click-to-call stays within thumb reach, and we switch on ",
        { href: "/services/google-ads", label: "Google Ads for HVAC" },
        " when a slow shoulder month needs extra calls.",
      ],
      points: [
        "Call tags by page",
        "Sticky mobile call button",
        "Booking form per system",
        "Monthly HVAC lead report",
      ],
      cta: "See Where My HVAC Calls Start",
      items: [
        ["No-cool call", "Google Maps", "Mon 7:48 AM"],
        ["Furnace quote form", "Furnace page", "Mon 2:15 PM"],
        ["Heat pump question", "AI Overview link", "Tue 9:30 AM"],
        ["Tune-up booking", "Town page", "Tue 4:02 PM"],
      ],
    },
  },
  results: {
    title: "What Improves for HVAC Contractors With Zonic",
    lead: "Progress comes in layers: a clean listing, system pages, then reviews and calls that build season by season.",
    cta: "Map My HVAC Growth Path",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "HVAC Listing Cleaned Up",
        text: "We correct categories, hours and service area, so Google starts showing your company for the right systems and towns.",
      },
      {
        when: "Month 1",
        title: "AC and Furnace Pages Published",
        text: "Repair, replacement and heat pump pages begin competing for searches homeowners make before calling an HVAC company.",
      },
      {
        when: "First peak season",
        title: "More Map Pack Appearances",
        text: "Fresh tune-up and install reviews plus local links tend to lift your listing in more towns as demand rises.",
      },
      {
        when: "Following seasons",
        title: "Steadier Calls Between Peaks",
        text: "Maintenance and shoulder-month searches start bringing more booked visits, each traced to the page that earned it.",
      },
    ],
    wins: [
      {
        icon: "hvac",
        title: "More Replacement and Install Calls",
        text: "High-ticket furnace, heat pump and central air searches reach pages built to win the estimate visit.",
      },
      {
        icon: "calendar",
        title: "Fuller Schedules in Shoulder Months",
        text: "Tune-up and maintenance-plan pages give spring and fall searchers a reason to book before the rush.",
      },
      {
        icon: "star",
        title: "Reviews That Name the Tech and System",
        text: "Homeowners describe the repair, the equipment and the technician, which reassures the next caller reading them.",
      },
      {
        icon: "sparkle",
        title: "Suggested by AI for HVAC Questions",
        text: "Repair-or-replace and sizing answers on your site help ChatGPT and Google AI find something worth citing.",
      },
    ],
  },
  compare: {
    title: "Zonic vs. a Generic SEO Agency for HVAC Companies",
    lead: "Where HVAC SEO from Zonic differs from what heating and cooling firms often get.",
    rows: [
      {
        topic: "HVAC peak-season timing",
        other:
          "Pages and fixes often roll out whenever the agency gets to them.",
        zonic:
          "AC pages go live before summer and furnace pages before the first freeze.",
      },
      {
        topic: "After-hours HVAC visibility",
        other:
          "Listing hours left vague, so night searches can skip your company.",
        zonic:
          "Accurate emergency hours, categories and call buttons set for no-heat and no-cool searches.",
      },
      {
        topic: "Pages per HVAC system",
        other: "One services page that lists every system and ranks for few.",
        zonic:
          "Separate AC, furnace, heat pump and ductless pages, each with sizing and repair answers.",
      },
      {
        topic: "HVAC trade links",
        other:
          "Mass directory submissions plus links from sites unrelated to heating or cooling.",
        zonic:
          "Tidy citations and links earned from distributors, rebate lists and trade associations near you.",
      },
      {
        topic: "HVAC call reporting",
        other: "Charts of rankings and traffic with no sign of booked jobs.",
        zonic:
          "Every call and form tagged by system, town and search, reviewed in a monthly report.",
      },
      {
        topic: "Contracts for HVAC owners",
        other:
          "Commonly a lengthy commitment that runs through a slow season you can't judge.",
        zonic:
          "Month to month, with your profile, site and tracking kept in your company's name.",
      },
    ],
  },
  steps: {
    title: "How We Roll Out Local SEO for HVAC Companies",
    lead: "Fixes first, then pages and reviews timed ahead of your busy seasons.",
    items: [
      {
        h: "HVAC Market and Profile Audit",
        p: "Town by town, we score your listing and website against the HVAC firms that outrank you and pick which systems to push first.",
      },
      {
        h: "Fix the Listing, Publish HVAC Pages",
        p: "Category, hours and technical repairs land in week one; system pages, town pages and review texts follow before the next peak.",
      },
      {
        h: "Report HVAC Calls, Then Double Down",
        p: "Each month's report breaks out HVAC rankings, calls and forms by system and town, and the next month's effort backs whatever booked the most work.",
      },
    ],
    audit: [
      ["Maps rank in July", "behind"],
      ["Furnace page", "gap"],
      ["Review requests", "open"],
      ["Mobile speed", "behind"],
    ],
    plan: [
      "AC repair page",
      "Furnace page",
      "Heat pump page",
      "Town pages",
      "Review texts",
    ],
    launch: [
      "Listing fixed",
      "System pages live",
      "Reviews coming in",
      "Calls tagged",
    ],
  },
  explore: {
    title: "Grow Faster Alongside Your HVAC Rankings",
    lead: "SEO for HVAC contractors pays off sooner with a booking-ready site and paid ads for the shoulder months.",
    items: [
      {
        name: "HVAC Marketing",
        sub: "Ads, SEO and reviews in one plan",
        href: "/services/hvac-marketing-agency",
        icon: "hvac",
      },
      {
        name: "HVAC Website Design",
        sub: "Booking-ready sites for HVAC",
        href: "/services/hvac-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Extra calls in shoulder months",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services Local SEO",
        sub: "Where HVAC sits among the trades we rank",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Also run plumbing or electrical crews? One plan can cover every trade on your trucks.",
  },
  reviews: {
    title: "Rated 5.0 on Google by the Trades We Rank",
    lead: "Unedited reviews from owners who handed us their Maps rankings.",
  },
  pricing: {
    title: "HVAC SEO Plans With No Annual Lock-In",
    compareTitle: "Compare Plans for HVAC Contractors",
    addOnsTitle: "Seasonal Add-Ons for HVAC Companies",
    customTitle: "Several HVAC Locations or Brands?",
  },
  faq: {
    title: "HVAC SEO Questions Contractors Ask Us",
    lead: "Cost, timing, Google categories and what changes when AI answers the search.",
    items: [
      {
        q: "What does an HVAC SEO company actually do?",
        a: "An HVAC SEO company makes your heating and cooling business the obvious pick on Google. That covers your Business Profile, a page per system and town, review requests, citations, technical fixes and call tracking. The target: a place in the Map Pack and on the first results page whenever someone in your service area needs heating or cooling help.",
      },
      {
        q: "What does HVAC SEO cost per month?",
        a: "Our plans are $297, $750 or $1,500 a month, month to month. Single-truck operators in one town usually start on the first; companies spread across a metro, or wanting their Google Ads run by us too, normally need the middle or top plan. The free audit tells you which.",
      },
      {
        q: "When will HVAC SEO start bringing calls?",
        a: "Listing fixes and new system pages often move Maps positions within a few weeks. Competitive terms like “ac repair near me” in a large metro can take several months, and launching pages before peak season helps. Each monthly report shows rankings and calls, so you can watch progress.",
      },
      {
        q: "What searches matter most for HVAC SEO?",
        a: "Start with the jobs that earn the most: “ac repair near me”, “furnace replacement” with your city, “heat pump installation”, “emergency hvac” and “ac tune up”. The audit estimates local demand for each, and pages go up first for the searches that bring paying work in your area.",
      },
      {
        q: "Should HVAC Contractor be my main Google category?",
        a: "In most cases, yes. HVAC Contractor covers full-service heating and cooling, while Air Conditioning Repair Service, Furnace Repair Service or Heating Contractor work as secondaries. Add only the ones that match work you do, and change the primary outside your busy season, since edits can trigger re-verification.",
      },
      {
        q: "Do I need separate pages for AC, furnace and heat pump work?",
        a: "Yes. A page per system can rank for that exact search and answer what buyers ask about sizing, efficiency and repair-or-replace. A single services page listing everything rarely ranks for any of them, and it gives AI assistants little worth quoting.",
      },
      {
        q: "Can HVAC SEO rank me in towns outside my home city?",
        a: "Yes, within reason. We set your service area, build a town page with local jobs and housing details for each key market, and track rankings town by town. Maps still favors proximity, so outer towns lean on organic pages and on reviews that mention them.",
      },
      {
        q: "How do Google AI Overviews affect HVAC searches?",
        a: "Many furnace, heat pump and repair-or-replace questions now open with an AI summary. Google builds it from pages with direct answers, clear business facts and solid reviews, so HVAC companies with strong local SEO are the ones it cites. We write and mark up pages to be quotable.",
      },
      {
        q: "Do you handle SEO for commercial HVAC and refrigeration?",
        a: "Yes. Rooftop units, preventive maintenance agreements and service for property managers need their own pages, searches and profile categories. We build that side apart from residential calls and report it on its own line, so you can see which brings the bigger tickets.",
      },
      {
        q: "Is HVAC SEO with Zonic Media tied to a long contract?",
        a: "No. Plans run month to month, and your profile, website and call tracking numbers stay registered to you. Every report lists what we changed. If a suspension or verification problem stalls your listing, our reinstatement team can step in.",
      },
    ],
  },
  audit: {
    title: "See Your HVAC Map Rankings, Town by Town",
    lead: [
      "Tell us your site and the systems you want to sell more of. Our team maps where you appear for heating and cooling searches in each town, weighs your pages and reviews against nearby HVAC firms, then sends a plain plan. HVAC owners can also meet ",
      { href: "/about", label: "the Zonic team" },
      " or look through ",
      { href: "/services", label: "our complete services list" },
      ".",
    ],
    points: [
      "HVAC Maps rank by town",
      "HVAC keyword gaps",
      "Profile and category review",
      "Pre-season page plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free HVAC SEO audit",
      title: "Request Your HVAC Rankings Audit",
      subtitle: "Free, with no contract attached.",
      submitText: "Send My HVAC Audit Request",
      messageLabel: "Your website and main HVAC services",
      messagePlaceholder:
        "yourwebsite.com, the systems you install or repair, and your towns",
    },
  },
  banner: {
    title: "Rank First Before the Next Heat Wave Hits",
    lead: "Top Maps positions through both peak seasons, with every call traced and reported.",
  },
};
