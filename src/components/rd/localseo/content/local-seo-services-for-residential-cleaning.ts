/* Local SEO Services for Residential Cleaning — redesign draft copy
   (26 Oct 2026). Local SEO dropdown family; brief:
   docs/local-seo-redesign-brief.md. Fresh copy only: no wording from the
   live page, the electricians reference, /services/seo-services-2,
   /services/cleaning-company-marketing-agency-2 or the commercial
   cleaning draft. Owns the maid / house cleaning side; janitorial and
   "seo for cleaning companies" terms belong to
   /services/industry/local-seo-for-commercial-cleaning.

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: no SEO impressions recorded.
   - Semrush US: maid service seo 260 (KD 10) · cleaning business seo 140
     (14) · house cleaning seo 70 (9). The cleaning company / seo for
     cleaning companies terms are left to the commercial page.
   - Title keeps "House Cleaning SEO" (live title) and adds "Maid Service"
     (biggest owned term) and "Residential Cleaning SEO"; H1 leads with
     "Maid Service SEO" (260).
   - Web research (WebSearch ×4, WebFetch ×2 of top results): primary
     category "House cleaning service" with "Maid service" as secondary;
     clean types (move-out, deep) belong under Services, not categories;
     home-based cleaners should run as service-area businesses with the
     address hidden. Top pages stay generic and skip recurring-client
     focus, trust/vetting signals, suspension risk and AI answers, so
     those became the trust card, the address and recurring FAQs and the
     AI row. Searches split into recurring, one-time and trust-led. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-services-for-residential-cleaning",
  audience: "House cleaning and maid service businesses",
  serviceName: "Local SEO Services for Residential Cleaning",
  meta: {
    title: "Maid Service & House Cleaning SEO | Residential Cleaning SEO",
    description:
      "Maid service SEO for house cleaners: Business Profile, recurring and move-out cleaning pages, trust signals and reviews that book weekly and biweekly cleans.",
    keywords: [
      "maid service seo",
      "house cleaning seo",
      "residential cleaning seo",
      "cleaning business seo",
      "seo for house cleaners",
      "seo for maid services",
      "local seo for residential cleaning",
      "house cleaning business seo",
      "maid service local seo",
      "home cleaning seo",
    ],
  },
  hero: {
    h1Lead: "Maid Service SEO",
    h1Rest: "That Fills Your Calendar With Recurring Cleans",
    icon: "spray",
    lead: [
      "Families pick a cleaner the way they pick a babysitter: by reviews, photos and trust. Our house cleaning SEO tunes your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", builds pages for recurring and move-out cleans, and turns happy clients into new weekly bookings.",
    ],
    cta: "Audit My Cleaning Business Profile",
    ui: {
      kind: "growth",
      maps: "grid",
      ai: "chat",
      growth: "calendar",
      business: "Your Maid Service",
      category: "House cleaning service",
      query: "house cleaning near me",
      aiPrompt: "Who does reliable recurring house cleaning near me?",
      aiReasons: ["Background-checked cleaners", "Easy online booking"],
      growthLabel: "Cleans this week",
      leads: [
        ["Biweekly clean", "Google Maps"],
        ["Deep clean", "AI answer"],
        ["Move-out clean", "Service page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top 3 nearby",
          title: "The Maid Service Every Suburb Sees",
          text: "Your listing ranks near the top across the suburbs your team covers.",
        },
        {
          label: "AI answers",
          badge: "Recommended",
          title: "Recommended for Recurring Cleans",
          text: "AI tools suggest you when families ask for trusted house cleaners.",
        },
        {
          label: "Bookings",
          badge: "Full week",
          title: "A Calendar of Recurring Cleans",
          text: "Recurring, deep and move-out cleans fill the week from search.",
        },
      ],
    },
  },
  searches: {
    title: "What Families Search Before Booking a House Cleaner",
    lead: "Homeowners, renters and busy parents use plain, specific phrases. Pages and profile services match each one.",
    groups: [
      {
        icon: "spray",
        label: "Recurring house cleaning searches",
        terms: [
          "house cleaning near me",
          "maid service near me",
          "weekly house cleaning",
          "biweekly cleaning service",
          "house cleaners near me",
          "home cleaning service",
        ],
      },
      {
        icon: "home",
        label: "One-time maid service searches",
        terms: [
          "deep cleaning service near me",
          "move out cleaning near me",
          "move in cleaning service",
          "post renovation cleaning",
          "spring cleaning service",
          "vacation rental cleaning",
        ],
      },
      {
        icon: "shield",
        label: "Trust-led house cleaning searches",
        terms: [
          "best house cleaners + your city",
          "eco friendly cleaning service",
          "pet friendly house cleaning",
          "insured house cleaners",
          "same day house cleaning",
          "apartment cleaning service",
        ],
      },
    ],
  },
  services: {
    title: "Residential Cleaning SEO\nThat Books Repeat Clients",
    lead: "Recurring clients come first in every plan, with one-time deep and move-out cleans filling the gaps.",
    cta: "Review My House Cleaning Website",
    items: [
      {
        icon: "pin",
        title: "House Cleaning Business Profile Care",
        desc: "House cleaning service as primary, maid service as secondary, your home address hidden behind a service area, every clean type listed and photos weekly.",
        points: [
          "Category pair set",
          "Address hidden safely",
          "Clean types listed",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
      {
        icon: "file",
        title: "Maid Service Pages by Clean Type",
        desc: "Pages for recurring, deep, move-in, move-out and vacation rental cleans, each spelling out what is included, visit length and how to book.",
        points: [
          "Included-tasks checklists",
          "Move-out page",
          "Online booking prompts",
        ],
        links: [
          {
            href: "/services/residential-cleaning-website-design",
            label: "House cleaning website design",
          },
        ],
      },
      {
        icon: "home",
        title: "Neighborhood Pages for Home Cleaners",
        desc: "A page for each neighborhood and suburb inside your travel radius, and matching directory listings, so Google trusts where your cleaners work.",
        points: [
          "Suburb landing pages",
          "Travel-radius coverage",
          "Listing consistency",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended listing",
          },
        ],
      },
      {
        icon: "shield",
        title: "Trust Signals and Reviews for Maid Services",
        desc: "Background checks, insurance and guarantees shown plainly, plus review texts after each visit so clients name their cleaner and the rooms that sparkled.",
        points: [
          "Background-check badges",
          "Visit-day review texts",
          "Cleaner names in reviews",
        ],
        links: [],
      },
      {
        icon: "monitor",
        title: "Fast Booking Sites for House Cleaners",
        desc: "Quick mobile pages, LocalBusiness schema and a quote form short enough to finish on a phone while the laundry is running.",
        points: ["Mobile speed fixes", "Short quote form", "Clean-type schema"],
        links: [
          {
            href: "/services/web-design",
            label: "Web design for local services",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers for House Cleaning Questions",
        desc: "Plain answers about what a deep clean covers, supplies, pets and scheduling, so ChatGPT and Google AI Overviews suggest your company to nearby families.",
        points: [
          "Deep-clean answer blocks",
          "Steady business details",
          "Monthly AI spot checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Cleaning Business SEO Grows Repeat Bookings",
    lead: "Better placement on the map, mentions in AI answers and a booking log showing which searches bring recurring clients.",
    rank: {
      title: "Climb for House Cleaning Near Me and Move-Outs",
      body: [
        "Each clean type gets mapped to the neighborhoods you serve, and the pairs with recurring potential get pages first. Biweekly cleaning, deep cleans and move-outs are tracked by suburb every week, so gains show up early.",
      ],
      points: [
        "Clean-type keyword map",
        "Suburb rank tracking",
        "Rival profile gaps",
        "Recurring-first targets",
      ],
      cta: "Show My Cleaning Keyword Gaps",
      keywords: [
        ["house cleaning near me", 18, 3],
        ["move out cleaning + your city", 29, 2],
        ["maid service near me", 23, 4],
        ["deep cleaning service", 35, 5],
      ],
    },
    ai: {
      title: "Get Your Maid Service Named in AI Answers",
      body: [
        "Parents ask ChatGPT for trusted cleaners the way they ask friends. AI tools lean on background-check details, clear plan pages and reviews that mention cleaners by name. We build those signals and check results through our ",
        { href: "/services/ai-seo-services", label: "AI SEO work" },
        ".",
      ],
      points: [
        "Vetting details on site",
        "Recurring plan pages",
        "Consistent listings",
        "AI answer checks",
      ],
      cta: "Test My AI Cleaner Mentions",
      query: "trusted house cleaners near me",
      intro: "For trusted house cleaners near you,",
      bullets: [
        "Background-checked cleaners",
        "Clear recurring plan page",
        "Reviews naming cleaners",
      ],
    },
    leads: {
      title: "See Which Searches Book Recurring Maid Clients",
      body: [
        "A booking calendar tells the real story. We label every quote form, call and online booking by the search that produced it, and ",
        {
          href: "/services/google-ads",
          label: "Google Ads for house cleaners",
        },
        " can fill open slots before spring and move-out season.",
      ],
      points: [
        "Bookings by clean type",
        "One-tap booking button",
        "Recurring vs one-time split",
        "Monthly booking report",
      ],
      cta: "See Where My Bookings Come From",
      items: [
        ["Biweekly cleaning booking", "Google Maps", "Mon 8:40 AM"],
        ["Move-out quote form", "Move-out page", "Mon 3:25 PM"],
        ["Deep clean call", "AI Overview citation", "Tue 1:35 PM"],
        ["Weekly plan signup", "Neighborhood page", "Wed 6:50 PM"],
      ],
    },
  },
  results: {
    title: "How a Maid Service Calendar Fills With Zonic",
    lead: "Trust comes first, then clean-type pages and steady reviews, then more households booking recurring visits.",
    cta: "Plan My Maid Service Growth",
    milestones: [
      {
        when: "Week 1",
        title: "House Cleaning Listing Made Safe",
        text: "We set the house cleaning category, hide your home address and list every clean type, lowering suspension risk.",
      },
      {
        when: "Weeks 2–4",
        title: "Recurring and Move-Out Pages Live",
        text: "Weekly, biweekly, deep and move-out cleaning pages go live, each spelling out what a visit includes.",
      },
      {
        when: "Months 2–3",
        title: "Reviews That Name Your Cleaners",
        text: "Visit-day review texts bring in fresh feedback, helping your profile move up the map across nearby suburbs.",
      },
      {
        when: "Month 4 onward",
        title: "More Repeat House Cleaning Clients",
        text: "More families book ongoing plans from search, and your report shows which pages bring the clients who stay.",
      },
    ],
    wins: [
      {
        icon: "repeat",
        title: "More Weekly and Biweekly Cleaning Clients",
        text: "Plan pages and reviews from long-term clients attract households looking for an ongoing cleaner, not a single visit.",
      },
      {
        icon: "shield",
        title: "Families Trust Your Cleaners Before Booking",
        text: "Background checks, insurance and named-cleaner reviews answer the safety questions parents ask before letting a crew inside.",
      },
      {
        icon: "calendar",
        title: "Fewer Empty Slots in the Maid Schedule",
        text: "Move-out, deep clean and seasonal pages help fill gaps between recurring visits during slower weeks.",
      },
      {
        icon: "home",
        title: "A House Cleaning Name Neighbors Recognize",
        text: "Steady Maps visibility and AI mentions help make your company the cleaner people remember when a friend asks.",
      },
    ],
  },
  compare: {
    title: "Maid Service SEO at Zonic vs. a Generic Agency",
    lead: "How we handle house cleaning SEO compared with what many cleaners are offered.",
    rows: [
      {
        topic: "Recurring cleaning clients",
        other:
          "Campaigns chase one-time deep cleans that rarely turn into repeat bookings.",
        zonic:
          "Weekly and biweekly plan pages come first, with one-time cleans filling calendar gaps.",
      },
      {
        topic: "Home-based cleaner listings",
        other:
          "Home addresses can stay visible on profiles, a common trigger for suspensions.",
        zonic:
          "Service-area setup with the address hidden, plus reinstatement help if a listing is already suspended.",
      },
      {
        topic: "In-home trust signals",
        other:
          "Often little mention of background checks, insurance or who will enter the home.",
        zonic:
          "Vetting, insurance and guarantee details on site, plus reviews that name the cleaner who visited.",
      },
      {
        topic: "Clean-type service pages",
        other:
          "One services page lumps deep, move-out and recurring cleaning together.",
        zonic:
          "Recurring, deep, move-in, move-out and vacation rental pages, each listing what the visit includes.",
      },
      {
        topic: "Suburb and neighborhood reach",
        other:
          "Targets the main city name only, skipping the suburbs your cleaners drive to.",
        zonic:
          "Neighborhood pages inside your travel radius, tracked suburb by suburb in your monthly report.",
      },
      {
        topic: "Booking-level cleaning reports",
        other:
          "Reports often stop at clicks, without showing which searches led to bookings.",
        zonic:
          "Bookings, calls and quote forms traced to their search; no long contract, listings in your name.",
      },
    ],
  },
  steps: {
    title: "Three Steps to a Busier House Cleaning Calendar",
    lead: "Profile repairs first; clean-type pages, trust signals and reviews add up month after month.",
    items: [
      {
        h: "Audit the House Cleaning Profile and Rivals",
        p: "We check how your profile, pages and reviews stack up against cleaners ranking above you in each suburb, then pick the clean types to chase first.",
      },
      {
        h: "Fix the Maid Service Listing, Add Clean Pages",
        p: "Address, category and photo issues are fixed first; recurring, deep and move-out pages follow, and review texts begin after every visit.",
      },
      {
        h: "Track Cleaning Bookings, Then Widen the Map",
        p: "Your report splits bookings by clean type and suburb each month, and we add neighborhoods once the current ones hold steady.",
      },
    ],
    audit: [
      ["Primary category", "gap"],
      ["Clean-type pages", "gap"],
      ["Review requests", "open"],
      ["Booking form", "behind"],
    ],
    plan: [
      "Recurring page",
      "Move-out page",
      "Deep clean page",
      "Suburb pages",
      "Trust badges",
    ],
    launch: [
      "Listing fixed",
      "Clean pages live",
      "Reviews flowing",
      "Bookings tagged",
    ],
  },
  explore: {
    title: "More Ways to Book Out Your Cleaning Crews",
    lead: "Search does more with a booking-ready site and ads for spring and move-out rushes.",
    items: [
      {
        name: "Cleaning Business Marketing",
        sub: "Every channel in one plan",
        href: "/services/cleaning-company-marketing-agency",
        icon: "clean",
      },
      {
        name: "House Cleaning Websites",
        sub: "Sites that take bookings online",
        href: "/services/residential-cleaning-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Paid reach for move-out peaks",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Home Services SEO Playbook",
        sub: "Local SEO across home trades",
        href: "/services/local-seo-for-home-services",
        icon: "home",
      },
    ],
    other:
      "Clean offices as well as homes? Ask about covering both in a single plan.",
  },
  reviews: {
    title: "Maid Service Owners: Check Our 5.0 Google Rating",
    lead: "These are the unedited reviews on our Google profile.",
  },
  pricing: {
    title: "House Cleaning SEO Plans With No Lock-In",
    compareTitle: "Compare Plans for Solo Cleaners and Growing Teams",
    addOnsTitle: "Add-Ons for Spring and Move-Out Cleaning Rushes",
    customTitle: "Several Cleaning Teams or Territories?",
  },
  faq: {
    title: "House Cleaning SEO Questions From Maid Service Owners",
    lead: "Costs, timing, Google categories and how SEO turns one-time cleans into regulars.",
    items: [
      {
        q: "What is house cleaning SEO?",
        a: "House cleaning SEO helps nearby families find your residential cleaning business on Google and in AI tools. It covers profile setup, pages for each clean type and neighborhood, trust signals, reviews and listings, with one goal: ranking near the top of Maps for “house cleaning near me” in every suburb your crews visit.",
      },
      {
        q: "How much does maid service SEO cost?",
        a: "Plans are priced at $297, $750 or $1,500 monthly and can be cancelled any month. Solo owners and small teams usually begin with the first; companies serving several suburbs or adding Google Ads management move up a tier. Your audit suggests the right starting point.",
      },
      {
        q: "How soon will residential cleaning SEO bring bookings?",
        a: "Profile fixes and new clean-type pages can raise Maps visibility within weeks. Busy suburbs with many cleaners take a few months of reviews and content to crack. Each month your report lays out suburb rankings next to recurring and one-time bookings, so you can watch the calendar respond.",
      },
      {
        q: "Which Google category should a house cleaning business use?",
        a: "House Cleaning Service is the best primary category for most residential cleaners, with Maid Service as a secondary. Add Carpet Cleaning or Window Cleaning only if you offer them as real services, and list move-out and deep cleaning under Services rather than as categories.",
      },
      {
        q: "Can a home-based cleaning business rank on Google Maps?",
        a: "Yes. Set it up as a service-area business, keep the home address private and name each suburb your cleaners travel to. Showing a home address as a storefront is a common cause of suspensions; if that has already happened, our reinstatement team can help restore the listing.",
      },
      {
        q: "What pages should a maid service website have?",
        a: "At minimum: recurring cleaning, deep cleaning, move-in and move-out cleaning, a page per main neighborhood, an about page showing your vetting and insurance, and a booking or quote page. Each clean-type page should list what is included so visitors can compare without calling.",
      },
      {
        q: "How do house cleaners get more Google reviews?",
        a: "Ask while the clean is fresh. A text with a direct review link after each visit works best, ideally naming the cleaner. Reply to every review, and never offer discounts in exchange, since Google can remove those reviews and act against the listing.",
      },
      {
        q: "Does cleaning business SEO help win recurring clients?",
        a: "Yes. Pages that explain weekly and biweekly plans, with what each visit covers, attract people looking for ongoing help rather than a single clean. Reviews from long-term clients reinforce it, and tracking shows which searches bring the clients who stay.",
      },
      {
        q: "Will AI assistants recommend my house cleaning company?",
        a: "Often, yes. When parents ask AI for a trusted cleaner, assistants such as ChatGPT and Google AI Overviews tend to pick maid services with clear clean-type pages, consistent listings, vetting details and strong reviews. The work that lifts your Maps ranking is the same work that gets a maid service mentioned in those answers.",
      },
      {
        q: "Is there a contract for residential cleaning SEO?",
        a: "No. Plans run month to month, your Google profile and website stay in your name, and each report lists the changes made and the bookings they produced. If results stall, you can leave without a fee.",
      },
    ],
  },
  audit: {
    title: "Get a Free Review of Your House Cleaning Profile",
    lead: [
      "Tell us your site and the clean types worth more bookings. You get a side-by-side of your Maps spot, pages and reviews against the cleaners ranking above you, plus a short, plain plan. Curious who would handle your listing? See ",
      { href: "/about", label: "who runs your account" },
      " or scan ",
      { href: "/services", label: "everything we do beyond cleaning SEO" },
      ".",
    ],
    points: [
      "Maps rank by suburb",
      "Clean-type keyword gaps",
      "Category and address check",
      "Simple first-month plan",
    ],
    form: {
      formType: "local-seo",
      badge: "Free maid service SEO audit",
      title: "Request a House Cleaning SEO Audit",
      subtitle: "No charge and no cleaning contract to sign.",
      submitText: "Send My Cleaning Audit Request",
      messageLabel: "Your website and main cleaning services",
      messagePlaceholder:
        "yourwebsite.com, recurring or one-time cleans, and the neighborhoods you serve",
    },
  },
  banner: {
    title: "Become the Cleaner Every Neighbor Recommends",
    lead: "More neighbors finding you on the map and in AI answers, and a recurring calendar that keeps filling.",
  },
};
