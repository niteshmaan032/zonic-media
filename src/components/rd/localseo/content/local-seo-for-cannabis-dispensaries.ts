/* Local SEO for Cannabis Dispensaries — redesign draft copy (26 Oct 2026).
   Fresh copy; never reuse the live page, the electricians reference or
   the cannabis marketing draft (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: dispensary seo 97 impressions
     (pos 61.1) · dispensary seo services 67 (39.7) · local seo for
     dispensaries 63 (42.4) · cannabis local seo 60 (43.8) · seo for
     dispensaries 49 · dispensary local seo 32 · local seo cannabis 32 ·
     local dispensary seo 20 · medical marijuana search engine
     optimization 16.
   - Semrush US: cannabis seo 1,900 (KD 14) · dispensary seo 880 (27) ·
     cannabis seo agency 720 (38) · marijuana seo 720 (23) · seo for
     dispensaries 210 (19).
   - Web research (top results for "dispensary seo" / "local seo for
     cannabis", Business Profile guides for dispensaries, menu SEO and
     AI-search pieces): ranking pages agree on the "Cannabis store"
     primary category, the legal business name only (keyword names risk
     suspension), Google limiting posts/products for cannabis listings,
     iframe menus that Google treats as another site's content, age gates
     that must let crawlers through, and shoppers searching by product and
     strain as much as "dispensary near me". Gaps: no tracking of
     direction requests or menu clicks, thin compliance detail on review
     replies. Those became the menu card, the crawler-safe age gate, the
     reply-wording points and the leads row.
   - Ad-restricted vertical: no Google Ads, Meta ads or SMS promised, no
     /services/google-ads link; organic, Maps, menu and directory SEO
     only. Menu and dispensary directories are never named.
   - Title keeps "Local SEO for Cannabis Dispensaries" (live title term)
     and adds the head term "cannabis seo agency"; H1 uses "Cannabis SEO". */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-cannabis-dispensaries",
  audience: "Licensed cannabis dispensaries",
  serviceName: "Local SEO for Cannabis Dispensaries",
  meta: {
    title: "Cannabis SEO Agency | Local SEO for Cannabis Dispensaries",
    description:
      "Cannabis SEO agency for licensed dispensaries: Google Maps, a compliant Business Profile, crawlable menus, directory listings and AI search for more shoppers.",
    keywords: [
      "cannabis seo",
      "dispensary seo",
      "cannabis seo agency",
      "marijuana seo",
      "seo for dispensaries",
      "local seo for dispensaries",
      "cannabis local seo",
      "dispensary seo services",
      "dispensary local seo",
      "local seo for cannabis dispensaries",
    ],
  },
  hero: {
    h1Lead: "Cannabis SEO",
    h1Rest: "That Turns Map Searches Into Dispensary Visits",
    icon: "cannabis",
    lead: [
      "Cannabis SEO for licensed dispensaries that can't lean on paid ads. We set up a compliant ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", move your menu onto crawlable pages, grow shopper reviews and sync store details across menu and dispensary directories, so nearby adults find you on Maps.",
    ],
    cta: "Get My Free Dispensary SEO Audit",
    ui: {
      kind: "growth",
      maps: "pin",
      ai: "chat",
      growth: "calls",
      business: "Your Dispensary",
      category: "Cannabis store",
      query: "dispensary near me",
      aiPrompt: "Which dispensary near me is open late?",
      aiReasons: ["Live menu online", "Open until late"],
      growthLabel: "Store visits by week",
      leads: [
        ["Directions request", "Google Maps"],
        ["Menu visit", "AI answer"],
        ["Order-ahead call", "Store page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 nearby",
          title: "The First Dispensary on the Map",
          text: "Hours, menu links and reviews put your store first for nearby searches.",
        },
        {
          label: "AI answers",
          badge: "Suggested",
          title: "Suggested When Shoppers Ask AI",
          text: "AI tools name your store for open hours, menus and service.",
        },
        {
          label: "Visits",
          badge: "Rising",
          title: "More Shoppers Walking Through the Door",
          text: "Directions requests and menu visits climb week after week.",
        },
      ],
    },
  },
  searches: {
    title: "What Adults Search Before Visiting a Dispensary",
    lead: "Store pages, menu categories and profile details are matched to the phrases shoppers and patients really type.",
    groups: [
      {
        icon: "pin",
        label: "Dispensary near-me searches",
        terms: [
          "dispensary near me open now",
          "weed store near me",
          "recreational dispensary near me",
          "dispensary open late",
          "cannabis store + your city",
          "dispensary pickup near me",
        ],
      },
      {
        icon: "cannabis",
        label: "Cannabis product and menu searches",
        terms: [
          "pre rolls near me",
          "edibles near me",
          "live resin near me",
          "sativa strains in stock",
          "cannabis vape cartridges",
          "dispensary menu + your city",
        ],
      },
      {
        icon: "medical",
        label: "Medical and first-visit dispensary searches",
        terms: [
          "medical marijuana dispensary near me",
          "medical card dispensary + your city",
          "what to bring to a dispensary",
          "first time dispensary visit",
          "cbd dispensary near me",
        ],
      },
    ],
  },
  services: {
    title: "Dispensary SEO Services\nBuilt Around Cannabis Rules",
    lead: "Organic, Maps, menu and directory work only, planned around what Google and your state allow.",
    cta: "Audit My Dispensary Site",
    items: [
      {
        icon: "pin",
        title: "Dispensary Profile Setup Within Google's Rules",
        desc: "The cannabis store category, your legal business name, accurate hours, storefront photos and Q&A, kept clear of the features Google restricts.",
        points: [
          "Cannabis store category",
          "Legal-name listing",
          "Restricted features avoided",
        ],
        links: [
          {
            href: "/services/gmb-verification-help",
            label: "Help verifying your store",
          },
        ],
      },
      {
        icon: "layers",
        title: "Indexable Menu SEO for Dispensaries",
        desc: "Iframe menus hide products from Google. We move your menu to crawlable pages on your domain, with category, brand and strain URLs that rank.",
        points: [
          "Native or proxied menu",
          "Strain and brand pages",
          "Product schema",
        ],
        links: [
          { href: "/services/web-design", label: "Dispensary-ready websites" },
        ],
      },
      {
        icon: "tool",
        title: "Technical SEO for Cannabis Websites",
        desc: "An age gate that lets search crawlers through, fast mobile pages, local store schema and clean indexing for every location and menu page.",
        points: [
          "Crawler-safe age gate",
          "Store schema",
          "Sitemap and index fixes",
        ],
        links: [],
      },
      {
        icon: "star",
        title: "Cannabis Shopper Reviews and Replies",
        desc: "Receipt QR codes, counter cards and email follow-ups ask for reviews, and every reply thanks the shopper without health or effect claims.",
        points: [
          "Receipt QR requests",
          "Compliant reply wording",
          "Review theme tracking",
        ],
        links: [],
      },
      {
        icon: "clipboard",
        title: "Dispensary Directory and Menu Listings",
        desc: "Your name, address, hours and phone kept identical across menu and dispensary directories, data aggregators and local listings, plus links from local news.",
        points: [
          "Directory NAP cleanup",
          "Menu directory profiles",
          "Local press links",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended listing",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Dispensaries",
        desc: "Clear store facts, FAQ answers and consistent listings give assistants like ChatGPT and Gemini good reason to mention your shop for nearby product questions.",
        points: [
          "Store entity facts",
          "Question-led pages",
          "AI mention reviews",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Dispensary SEO Grows Store Visits and Pickups",
    lead: "With paid search off the table, Maps spots, menu rankings and AI mentions do the heavy lifting.",
    rank: {
      title: "Rank Menu Pages for Strain and Product Searches",
      body: [
        "Shoppers search by product as often as by store. We build crawlable category, brand and strain pages tied to each location, then track every search weekly, so you see which menu pages climb and which still need work.",
      ],
      points: [
        "Strain keyword map",
        "Category page targets",
        "Store-by-store tracking",
        "Competing shop gaps",
      ],
      cta: "See My Menu Keyword Gaps",
      keywords: [
        ["dispensary near me", 17, 3],
        ["pre rolls near me", 34, 5],
        ["recreational dispensary + city", 22, 2],
        ["medical dispensary near me", 28, 4],
      ],
    },
    ai: {
      title: "Get Your Dispensary Named in AI Shopping Answers",
      body: [
        "Ask an AI assistant where to buy pre-rolls nearby and it leans on Google reviews, store pages and directory listings. We make those facts clear and consistent, then check mentions monthly, using our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        " process.",
      ],
      points: [
        "Store facts AI can read",
        "Menu pages with answers",
        "Directory data aligned",
        "Monthly mention check",
      ],
      cta: "Test What AI Says About My Store",
      query: "where can i buy pre rolls near me tonight",
      intro: "For pre-rolls near you tonight,",
      bullets: [
        "Open late with pickup",
        "Indexable pre-roll menu page",
        "Recent shopper reviews",
      ],
    },
    leads: {
      title: "Trace Dispensary Calls and Menu Clicks to Search",
      body: [
        "We tag calls, direction requests and menu clicks by listing, page and source, so you know which searches send shoppers. When you want a wider plan, our ",
        {
          href: "/services/cannabis-marketing-agency",
          label: "cannabis marketing team",
        },
        " adds compliant content and email on top.",
      ],
      points: [
        "Calls by listing",
        "Direction request tracking",
        "Menu click tracking",
        "Monthly store report",
      ],
      cta: "Show Me What Sends Shoppers",
      items: [
        ["Pickup question call", "Google Maps", "Fri 4:52 PM"],
        ["Directions request", "Cannabis store profile", "Fri 6:18 PM"],
        ["Menu visit", "Pre-roll category page", "Sat 11:05 AM"],
        ["Medical card question", "AI Overview link", "Sat 2:40 PM"],
      ],
    },
  },
  results: {
    title: "What Grows for Your Dispensary Once Zonic Starts",
    lead: "In order: a compliant listing, then crawlable menu pages, shopper reviews and more tracked store visits.",
    cta: "Plan My Store's SEO Growth",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Cannabis Listing Made Compliant",
        text: "We set the cannabis store category, legal name and hours, cutting common reasons for suspensions or wrong details.",
      },
      {
        when: "Month 1",
        title: "Menu Moved Onto Your Domain",
        text: "Category, brand and strain pages become crawlable and start competing for product searches near each store.",
      },
      {
        when: "Months 2–4",
        title: "Store Climbs Nearby Map Results",
        text: "Counter review cards and directory cleanup tend to push your listing toward the top of local results.",
      },
      {
        when: "Month 4 onward",
        title: "More Shoppers Finding Each Store",
        text: "More calls, direction requests and menu visits arrive from search, each tracked to the store that earned it.",
      },
    ],
    wins: [
      {
        icon: "pin",
        title: "A Stronger Spot for Dispensary Near Me",
        text: "A clean, compliant listing with steady reviews helps your store show higher when nearby adults search on phones.",
      },
      {
        icon: "cannabis",
        title: "Product Searches Landing on Your Menu",
        text: "Shoppers looking for pre-rolls, edibles or a strain reach your own menu page instead of a third-party directory.",
      },
      {
        icon: "shield",
        title: "Less Exposure to Listing Suspensions",
        text: "Legal-name listings with restricted features left alone give Google fewer reasons to pull your profile.",
      },
      {
        icon: "sparkle",
        title: "Your Store Mentioned in AI Answers",
        text: "Consistent store facts and menu pages give ChatGPT and Google AI Overviews reliable details to share with shoppers.",
      },
    ],
  },
  compare: {
    title: "Dispensary SEO With Zonic vs. a Generalist Provider",
    lead: "What dispensaries are often offered elsewhere, set beside how we handle cannabis SEO.",
    rows: [
      {
        topic: "Menu and directory listings",
        other:
          "Store details can drift out of sync across menu and dispensary directories.",
        zonic:
          "Name, address, hours and phone matched across menu directories, aggregators and your profile.",
      },
      {
        topic: "Crawlable dispensary menus",
        other:
          "Embedded iframe menus that leave product pages credited to another domain.",
        zonic:
          "Native or proxied menus on your domain, with category, brand and strain URLs.",
      },
      {
        topic: "Age-gate-friendly pages",
        other:
          "Age gates that can block search crawlers along with underage visitors.",
        zonic:
          "A crawler-safe age gate that keeps the store compliant while Google indexes every page.",
      },
      {
        topic: "Cannabis listing compliance",
        other:
          "Keyword-stuffed business names or restricted features that can invite a suspension.",
        zonic:
          "Your legal business name, the cannabis store category and only the profile features Google permits.",
      },
      {
        topic: "Ad-restricted channel planning",
        other:
          "Plans can promise search or social ads that platforms restrict for THC.",
        zonic:
          "Organic search, Maps, menu and directory SEO only, the channels a licensed store can use.",
      },
      {
        topic: "Store-level dispensary reports",
        other:
          "Reports showing traffic totals with no view of individual store actions.",
        zonic:
          "Calls, direction requests and menu clicks tracked per store and source every month.",
      },
    ],
  },
  steps: {
    title: "Our Dispensary SEO Process, Store by Store",
    lead: "Compliance and profile fixes first, then menu pages, reviews and local links that add up month after month.",
    items: [
      {
        h: "Audit the Store, Menu and Local Rivals",
        p: "We look at your profile, menu setup, website and the dispensaries around you, then flag suspension risks and list the searches worth winning first.",
      },
      {
        h: "Fix the Listing, Open Up the Menu",
        p: "Category, name and hours fixes go live first, followed by crawlable menu pages, store pages and review prompts at the counter.",
      },
      {
        h: "Measure Dispensary Actions Each Month",
        p: "Monthly reports show Maps position, calls, direction requests and menu clicks per store, and effort shifts to the pages bringing shoppers in.",
      },
    ],
    audit: [
      ["Cannabis category", "behind"],
      ["Menu indexing", "gap"],
      ["Shopper reviews", "open"],
      ["Age gate", "behind"],
    ],
    plan: [
      "Menu pages",
      "Strain pages",
      "Store pages",
      "Review cards",
      "Directory sync",
    ],
    launch: [
      "Listing compliant",
      "Menu crawlable",
      "Counter cards out",
      "Store actions tracked",
    ],
  },
  explore: {
    title: "More Ways to Grow a Licensed Dispensary",
    lead: "Organic search goes further with a compliant marketing plan and a fast, age-gated website.",
    items: [
      {
        name: "Cannabis Marketing",
        sub: "A full plan for your stores",
        href: "/services/cannabis-marketing-agency",
        icon: "cannabis",
      },
      {
        name: "Website Design",
        sub: "Fast, age-gated store sites",
        href: "/services/web-design",
        icon: "monitor",
      },
      {
        name: "GBP Reinstatement",
        sub: "Back on Maps after a suspension",
        href: "/services/gbp-reinstatement-service",
        icon: "shield",
      },
      {
        name: "Small Business Local SEO",
        sub: "The core of every local plan",
        href: "/services/local-seo-for-small-business",
        icon: "pin",
      },
    ],
    other:
      "Running several stores or a licensed delivery service? We plan profiles and pages for each license.",
  },
  reviews: {
    title: "Proof Before Your Cannabis SEO Audit: 5.0 on Google",
    lead: "What dispensary owners and other clients wrote about us on Google, left unedited.",
  },
  pricing: {
    title: "Dispensary SEO Plans With No Long Contract",
    compareTitle: "Compare Cannabis SEO Plans for Your Stores",
    addOnsTitle: "Add-Ons for New Dispensary Openings",
    customTitle: "Managing a Multi-License Cannabis Group?",
  },
  faq: {
    title: "Cannabis SEO Answers for Licensed Retailers",
    lead: "Google rules, menus, suspensions, timelines and AI answers for dispensaries.",
    items: [
      {
        q: "What is local SEO for cannabis dispensaries?",
        a: "It is the organic work that gets a licensed store found by nearby adults: a compliant Business Profile, crawlable menu and store pages, shopper reviews, consistent directory listings and local links. The aim is a top Maps spot for “dispensary near me” and page-one rankings for the products you stock.",
      },
      {
        q: "Is a dispensary allowed on Google Maps?",
        a: "Yes, in states where cannabis sales are legal. Licensed stores can list under the cannabis store category, but Google limits some features, such as product listings and certain posts. We set up what is allowed and keep the profile clear of anything that invites a suspension.",
      },
      {
        q: "How do you protect a dispensary listing from suspension?",
        a: "We use your exact legal business name, a real storefront address, accurate hours and the right category, and we avoid keyword-stuffed names and restricted content. If a listing is already suspended, our reinstatement team prepares the evidence Google asks for.",
      },
      {
        q: "Why does my dispensary menu matter for cannabis SEO?",
        a: "Most embedded iframe menus belong to the menu provider's domain in Google's eyes, so your product pages never rank for you. Moving to a native or proxied menu on your own site gives each category, brand and strain its own crawlable URL.",
      },
      {
        q: "What do your cannabis SEO plans cost?",
        a: "We offer $297, $750 and $1,500 monthly plans, billed month to month. For dispensaries only the SEO, Maps and listing work applies, since THC ads are off limits. A single store usually fits Foundation; multi-store groups get a scope per location after the free audit.",
      },
      {
        q: "How long until dispensary SEO shows results?",
        a: "The listing usually moves first, often within weeks of the category and hours being fixed. Crawlable menu pages tend to rank for product searches over a few months, and crowded metro markets take longer. Your monthly report shows calls, direction requests and menu clicks.",
      },
      {
        q: "Do you run Google Ads or social ads for dispensaries?",
        a: "No. Google and Meta restrict ads for THC products, so we do not sell them for dispensaries. This page covers organic search, Google Maps, menu SEO and directory listings, the channels a licensed store can use without breaking platform rules.",
      },
      {
        q: "Can marijuana SEO help our store compete with menu directories?",
        a: "Yes, on the searches that matter most. Directories rank for broad terms, but your own store, menu and city pages can win “dispensary near me”, product searches and your brand name. Keeping your directory profiles accurate also feeds the Maps signals that help you rank.",
      },
      {
        q: "How does a dispensary show up in AI answers?",
        a: "ChatGPT, Gemini and Google AI Overviews lean on clear store facts, reviews, menu pages that answer common questions and matching directory data. We tighten each of those, then run shopper-style prompts monthly to see whether your store is named.",
      },
      {
        q: "How do you keep cannabis SEO content within state rules?",
        a: "We avoid health or effect claims, never aim content at minors, keep age gates in place and follow your state's advertising limits on wording and offers. Because limits vary from state to state, nothing goes live on your site or profile until you sign off.",
      },
    ],
  },
  audit: {
    title: "See Where Your Dispensary Ranks on Maps, Free",
    lead: [
      "Share your site and the stores you run. We check Maps position, menu indexing, listing compliance and reviews against nearby shops, then send a clear plan. Get to know ",
      { href: "/about", label: "our team" },
      " or browse ",
      { href: "/services", label: "everything we offer" },
      ".",
    ],
    points: [
      "Maps spot per store",
      "Menu indexing check",
      "Suspension risk review",
      "First-month priorities",
    ],
    form: {
      formType: "local-seo",
      badge: "Free cannabis SEO audit",
      title: "Request a Dispensary SEO Review",
      subtitle: "Free, discreet and no contract.",
      submitText: "Send My Store Audit",
      messageLabel: "Your website and store locations",
      messagePlaceholder:
        "yourdispensary.com, your menu provider and the cities your stores serve",
    },
  },
  banner: {
    title: "Make Your Dispensary the Obvious Pick on Maps",
    lead: "Crawlable menus, a compliant profile and steady reviews, with a monthly report on what moved.",
  },
};
