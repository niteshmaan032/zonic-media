import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* CANNABIS MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Cannabis Marketing Agency" plus
   "Dispensary SEO, SMS") is kept in the new title, and every phrase in the
   live keywords meta is carried by the title, H1, an H2/H3 or an FAQ
   question.
   - Ad policy check (25 Oct, Google Ads policy centre): Google's only
     cannabis ad programme is a Canada-only Search pilot (Aug 2025 to
     31 Dec 2026); US cannabis product ads stay prohibited. So this page
     never promises Google Ads; growth comes from Maps, local SEO, AI
     answers, reviews, the website and opt-in texts/email.
   - Web research (25 Oct): dispensary agencies cover local SEO, menu
     pages, SMS/email/loyalty and programmatic display on cannabis-friendly
     networks; SMS needs explicit opt-in, a 21+ age gate and carrier-safe
     wording; AI assistants recommend far fewer stores than the Map Pack
     and reward consistent listings and active reviews.
   - Owner rules: no company names, never imply illegal sales, age-gating
     mentions allowed.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "cannabis-marketing-agency-2",
  liveUrl: "/services/cannabis-marketing-agency",
  niche: "Cannabis",
  meta: {
    title: "Cannabis Marketing Agency | Dispensary SEO, SMS & Loyalty",
    description:
      "Cannabis marketing agency for licensed dispensaries: Google Maps rankings, dispensary SEO, AI search visibility, reviews, SMS and loyalty built around state rules.",
    keywords: [
      "cannabis marketing agency",
      "dispensary marketing agency",
      "cannabis digital marketing agency",
      "dispensary marketing",
      "cannabis marketing",
      "marijuana marketing agency",
      "cannabis advertising agency",
      "dispensary marketing services",
      "marketing for dispensaries",
      "cannabis marketing company",
      "dispensary sms marketing",
      "dispensary email marketing",
      "dispensary loyalty program",
      "cannabis programmatic advertising",
      "compliant cannabis marketing",
      "dispensary grand opening marketing",
      "dispensary seo",
    ],
  },
  palette: PALETTES.limeIndigo,
  hero: {
    h1Lead: "Cannabis",
    h1Icon: "cannabis",
    h1Rest: "Marketing Agency That Puts Your Dispensary on the Map",
    lead: [
      "Google Ads won't run cannabis product ads in the US, so dispensaries grow through channels they can control. We rank your store on Google Maps with ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile optimization",
      },
      ", build ",
      {
        href: "/services/industry/local-seo-for-cannabis-dispensaries",
        label: "dispensary local SEO",
      },
      ", earn reviews and keep regulars coming back through opt-in texts.",
    ],
    cta: "Get My Free Dispensary Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Found first on the map",
        sub: "When adults nearby search for a dispensary",
        chips: ["Adult-use", "Medical", "Brands", "+ your town"],
      },
      left: {
        icon: "repeat",
        title: "More repeat visits",
        sub: "Opt-in texts and rewards that bring regulars back",
      },
      right: {
        icon: "sparkle",
        title: "Suggested by AI assistants",
        sub: "When shoppers ask ChatGPT or Gemini",
      },
      bottom: {
        title: "Growth without paid search",
        sub: "Built on Maps, reviews and channels you own",
      },
    },
  },
  services: {
    title: "Cannabis Digital Marketing\nServices for Dispensaries",
    lead: "Six programs for licensed retailers, built around your state's ad rules.",
    cta: "Audit My Dispensary Marketing",
    items: [
      {
        icon: "pin",
        title: "Dispensary Business Profile Management",
        desc: "Accurate hours, attributes, photos and posts that follow Google's listing rules, so your store holds a steady spot in local map results.",
        points: [
          "Policy-safe profile setup",
          "Weekly storefront photos",
          "Suspension appeals handled",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "GBP optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Listing reinstatement",
          },
        ],
      },
      {
        icon: "search",
        title: "Dispensary SEO and Menu Pages",
        desc: "Crawlable menu, category and neighborhood pages plus local citations, so your own site ranks alongside the big menu directories.",
        points: [
          "Indexable menu categories",
          "Neighborhood landing pages",
          "Directory listing cleanup",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-cannabis-dispensaries",
            label: "Local SEO for dispensaries",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Age-Gated Dispensary Websites",
        desc: "Fast sites with a 21+ age gate, clear store details, menu embeds and education pages, built to rank and respect your state's rules.",
        points: [
          "21+ age verification",
          "Hours and menu up front",
          "Education content hub",
        ],
        links: [
          { href: "/services/web-design", label: "Dispensary web design" },
        ],
      },
      {
        icon: "chat",
        title: "Dispensary Loyalty Program, Texts & Email",
        desc: "Opt-in texts and emails with age confirmation, plus rewards that bring regulars back, sent through cannabis-friendly platforms within carrier rules.",
        points: [
          "Double opt-in sign-ups",
          "Rewards and new-drop alerts",
          "Quiet-hours sending",
        ],
        links: [{ href: "#ind-audit", label: "Plan my retention program" }],
      },
      {
        icon: "file",
        title: "Compliant Cannabis Marketing Content",
        desc: "Blog posts, product guides and social captions written without health claims or youth appeal, checked against your state's advertising limits.",
        points: [
          "No medical claims",
          "Adult-only messaging",
          "State rule checks",
        ],
        links: [{ href: "#ind-audit", label: "Review my content" }],
      },
      {
        icon: "sparkle",
        title: "Dispensary Visibility in AI Answers",
        desc: "Consistent store facts, detailed reviews and clear menu pages that ChatGPT, Gemini and AI Overviews can confirm before suggesting you.",
        points: [
          "Same details everywhere",
          "Reviews about the visit",
          "First-visit FAQ pages",
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
    title: "Marketing for Dispensaries Where Shoppers Actually Look",
    lead: "With paid search mostly closed, Maps, AI answers and reviews do the heavy lifting. We make each one count for a licensed store.",
    rows: [
      {
        title: "Rank in the Map Pack for “Dispensary Near Me”",
        body: [
          "Adults looking for a store open now check the map first. We keep your hours, attributes and photos accurate, ",
          {
            href: "/services/gmb-verification-help",
            label: "verify new locations",
          },
          ", build a page for each neighborhood you serve and report fake listings, so shoppers see your pin among the first results.",
        ],
        points: [
          "Accurate hours and attributes",
          "Neighborhood pages",
          "Fresh storefront photos",
          "Fake listing reports",
        ],
        cta: "Check My Dispensary Ranking",
        ui: {
          kind: "maps",
          query: "dispensary near me",
          city: "Denver",
          category: "Cannabis store · 21+ with valid ID",
        },
      },
      {
        title: "Be the Dispensary AI Suggests to First-Time Visitors",
        body: [
          "More adults now ask AI tools like ChatGPT and Gemini where to shop. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " supply those assistants with verifiable facts: consistent directory listings, recent reviews, clear store policies and pages answering first-visit questions.",
        ],
        points: [
          "Matching directory listings",
          "Recent, detailed reviews",
          "Store policies spelled out",
          "First-visit questions answered",
        ],
        cta: "See What AI Says About Us",
        ui: {
          kind: "ai",
          query: "friendly dispensary near downtown denver for a first visit",
          intro: "For a relaxed first visit near downtown Denver,",
          bullets: [
            "Staff who explain products clearly",
            "Menu updated daily online",
            "Adults 21+ with valid ID",
          ],
        },
      },
      {
        title: "Collect Reviews That Help Shoppers Choose You",
        body: [
          "Shoppers compare ratings before they pick a store. Opted-in customers get a short text after their visit with a review link, and we draft friendly owner replies, so your rating grows and AI tools see an active, trusted store.",
        ],
        points: [
          "Opt-in review texts",
          "Reply drafts for staff",
          "Low-rating alerts",
          "Reviews shown on site",
        ],
        cta: "Grow My Store Reviews",
        ui: {
          kind: "reviews",
          title: "After-visit review request",
          sentNote: "Sent after the customer's visit",
          sms: "Hi Jordan, thanks for stopping by Your Company today! If you have a minute, we'd love a Google review.",
          reviewer: "Jordan P.",
          review:
            "Staff took time to walk me through the menu on my first visit and checkout was quick. Clean, calm shop.",
          reply: "Thanks, Jordan! Glad your first visit went smoothly.",
        },
      },
    ],
  },
  specialties: {
    title: "Dispensary Marketing Services for Every Type of License",
    lead: "Adult-use stores, medical dispensaries and cannabis brands reach customers differently, so each gets its own plan. Delivery and brand work always follow your state's licensing.",
    items: [
      {
        icon: "cannabis",
        name: "Adult-Use Retail Stores",
        tactic: "Map Pack work and neighborhood pages for 21+ shoppers",
      },
      {
        icon: "medical",
        name: "Medical Marijuana Dispensaries",
        tactic: "Patient education pages and card-holder information hubs",
      },
      {
        icon: "truck",
        name: "Licensed Cannabis Delivery",
        tactic: "Delivery-zone pages only where state law permits",
      },
      {
        icon: "building",
        name: "Multi-Store Dispensary Groups",
        tactic: "One profile and landing page per licensed location",
      },
      {
        icon: "award",
        name: "Cannabis Brands & Product Lines",
        tactic: "Brand pages and store locators for stocking retailers",
      },
      {
        icon: "leaf",
        name: "CBD & Hemp Shops",
        tactic: "Product education pages kept free of health claims",
      },
      {
        icon: "calendar",
        name: "Dispensary Grand Opening Marketing Plans",
        tactic: "Verified profile, sign-ups and local press before opening",
      },
      {
        icon: "repeat",
        name: "Store Relocations & Rebrands",
        tactic: "Moves handled so rankings and reviews carry over",
      },
    ],
    more: "Run a lounge, cultivation brand or ancillary business? Ask us how we'd approach it.",
  },
  steps: {
    title: "Getting Your Dispensary Found, Step by Step",
    lead: "Maps and review gains usually come first; neighborhood pages and AI visibility build over the months that follow.",
    items: [
      {
        h: "We Audit Your Local Visibility",
        p: "We search like nearby adults do and show where your store appears on Maps, in organic results and in AI answers, plus which listings or policies hold you back.",
      },
      {
        h: "We Build a Plan Around State Rules",
        p: "Together we choose the neighborhoods, product categories and channels to lead with, checked against your state's advertising limits and each platform's policies.",
      },
      {
        h: "Go Live With Monthly Reports",
        p: "Profile updates, menu pages, review texts and loyalty messages start. Each month you get one report on rankings, direction requests from Maps and subscriber growth.",
      },
    ],
    audit: [
      ["Maps rank: dispensary near me", "behind"],
      ["Menu pages indexed", "gap"],
      ["Opt-in text program", "open"],
      ["Reviews vs nearby stores", "behind"],
    ],
    plan: ["Flower menu", "Pre-rolls", "Medical", "Capitol Hill", "Aurora"],
    launch: [
      "Profile details corrected",
      "Menu pages crawlable",
      "Review texts on",
      "Loyalty sign-ups live",
    ],
  },
  reviews: {
    title: "Reviews From Owners Who Trust Us With Growth",
    lead: "What business owners wrote about working with us, straight from Google.",
  },
  pricing: {
    title: "Dispensary Marketing Plans, Month to Month",
    compareTitle: "Compare Cannabis Marketing Plans",
    addOnsTitle: "Add Campaigns for 4/20 or a New Store",
    customTitle: "Operating dispensaries in several states?",
  },
  faq: {
    title: "Cannabis Marketing Questions From Dispensary Owners",
    lead: "Plain answers on ads, Maps, texts, AI search and compliance.",
    items: [
      {
        q: "What does a dispensary marketing agency do?",
        a: "It brings more adults 21+ through your door using channels that allow cannabis. That means Map Pack rankings, crawlable menu and neighborhood pages, opt-in texts and email, steady reviews, AI search visibility and content that follows your state's advertising rules. Every channel is planned around platform policies first.",
      },
      {
        q: "Are dispensaries allowed to run Google Ads?",
        a: "Not for cannabis products in the US. Google's ad policies block THC product ads here, and its cannabis pilot program is limited to Canada. That's why we focus on Maps, organic search, AI answers, reviews and your own subscriber lists instead of paid search.",
      },
      {
        q: "What can a cannabis advertising agency run if paid search is off the table?",
        a: "Plenty. Local SEO and Google Maps reach shoppers at the moment they're choosing a store, opt-in texts and email bring regulars back, and review programs build trust. Where state law and the platform allow, age-targeted display can be tested once the owned channels are working.",
      },
      {
        q: "How do dispensaries rank higher on Google Maps?",
        a: "Start with a complete, accurate profile: the right category, real hours, storefront photos and attributes. Add a page on your site for each neighborhood, keep store details identical across directories and earn fresh reviews every week. Avoid keyword-stuffed business names, a common cause of suspensions. Storefront and parking photos help first-time visitors too.",
      },
      {
        q: "Which works better: dispensary SMS marketing or dispensary email marketing?",
        a: "Texts get read fast and suit new drops and same-day promos; email suits education, menus and longer stories. Most stores use both. Each needs clear opt-in, age confirmation and an easy opt-out, and texts must follow carrier rules on cannabis wording, so we set those up first.",
      },
      {
        q: "Does cannabis programmatic advertising work for dispensaries?",
        a: "It can, in the right market. A few display networks accept cannabis ads aimed at adults in legal states, but policies and state rules vary widely. We'll tell you honestly whether it suits your store, and we only test it after Maps, SEO and texts are in place.",
      },
      {
        q: "Can ChatGPT or an AI Overview recommend my dispensary?",
        a: "Yes, once your store is easy to verify. We align your details across Google and the cannabis directories, earn recent reviews, publish clear store policies and answer common first-visit questions on your site. That gives those tools grounds to suggest you. Listing payment methods and ID rules helps as well.",
      },
      {
        q: "Why do dispensary Google Business Profiles get suspended, and can you fix one?",
        a: "Common triggers include keyword-stuffed names, mismatched addresses, wrong categories and posts that break Google's product rules. We have helped reinstate 900+ suspended profiles; recovery support is part of every plan. We trace the cause, correct it, appeal with proof and tighten the listing.",
      },
      {
        q: "Is a marijuana marketing agency different from a regular agency?",
        a: "It should be. Cannabis work means knowing which platforms ban the category, how age gates and opt-ins work, what state rules say about claims and imagery, and how to keep a Business Profile live. General agencies often learn all of that on your account. Ask any agency how they handle age gating before you sign.",
      },
      {
        q: "How much does a cannabis marketing company like Zonic Media cost?",
        a: "Plans are priced at $297, $750 and $1,500 each month, all month to month. Most single-store dispensaries start on the first or second tier; groups with several locations and loyalty programs usually need the third. Grand openings can be added as a short campaign, and your free audit shows which tier fits.",
      },
    ],
  },
  audit: {
    title: "Free Dispensary Marketing Audit for Your Store",
    lead: [
      "Share your store and neighborhood. We'll check your Maps position, Business Profile health, ",
      { href: "/services/web-design", label: "website and menu pages" },
      ", reviews and AI visibility against nearby dispensaries, then list the fixes to make first. Curious what else we do? See ",
      { href: "/services", label: "our full service list" },
      " or ",
      { href: "/industries", label: "industries we serve" },
      ".",
    ],
    points: [
      "No yearly contract",
      "Plans from $297/mo",
      "Profile recovery included",
      "State-rule content checks",
    ],
    form: {
      formType: "cannabis-marketing",
      badge: "Free dispensary audit",
      title: "Request a Free Dispensary Marketing Audit",
      subtitle: "Free to request, with nothing to sign.",
      submitText: "Send My Dispensary Audit",
      messageLabel: "Your store, state and goals",
      messagePlaceholder:
        "Store name, city and state, adult-use or medical, and what you want more of (visits, loyalty sign-ups, reviews)",
    },
  },
  banner: {
    title: "Be the Dispensary Nearby Adults Find First",
    lead: "A free audit shows what's keeping nearby shoppers from finding your store.",
    icons: ["cannabis", "pin"],
  },
};
