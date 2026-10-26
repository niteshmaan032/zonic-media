/* Chiropractor SEO — redesign draft copy (26 Oct 2026) for
   /services/industry/chiropractor-local-seo-services. Fresh wording; never
   reuse the live page, the electricians reference or the chiropractic
   marketing draft (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: chiropractor seo company 605
     impressions (pos 29.9) · chiropractic seo company 564 (32.9) ·
     chiropractor seo expert 555 (27.1) · local seo for chiropractors 551
     (32.2) · chiropractor seo services 484 (27.0) · chiropractor seo agency
     464 (24.7) · seo services for chiropractors 415 · chiropractor seo 387
     · chiropractic seo services 352 · chiropractic local seo 115.
   - Semrush US: chiropractor seo 2,400 (KD 21) · seo for chiropractors
     2,400 (26) · chiropractic seo 1,900 (31) · chiropractic seo company 590.
   - Web research (WebSearch x5, WebFetch of two ranking agency pages):
     ranking pages list generic SEO services and skip condition pages,
     review privacy and FAQs entirely; guides stress the Chiropractor
     category, NAP consistency and city-named treatment pages. Patient
     searches seen: "chiropractor near me open now", "walk in
     chiropractor", sciatica, whiplash / car accident, prenatal and sports
     care. That shaped the condition-page card, the auto-injury FAQ, the
     HIPAA review FAQ and a SERP hero showing a sciatica page ranking.
   - Title keeps "Chiropractor SEO Company" (top GSC term, live title lead)
     and adds "Local SEO for Chiropractors"; H1 uses "Chiropractor SEO
     Services". */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/chiropractor-local-seo-services",
  audience: "Chiropractors and chiropractic clinics",
  serviceName: "Chiropractor SEO Services",
  meta: {
    title: "Chiropractor SEO Company | Local SEO for Chiropractors",
    description:
      "Chiropractic SEO services for clinics: Google Maps rankings, condition pages, privacy-safe reviews and AI answers, run by chiropractor SEO experts.",
    keywords: [
      "chiropractor seo",
      "seo for chiropractors",
      "chiropractic seo",
      "chiropractor seo company",
      "chiropractic seo company",
      "local seo for chiropractors",
      "chiropractor seo services",
      "chiropractor seo agency",
      "seo services for chiropractors",
      "chiropractic local seo",
    ],
  },
  hero: {
    h1Lead: "Chiropractor SEO Services",
    h1Rest: "That Keep New-Patient Exams Booked",
    icon: "medical",
    lead: [
      "People with a stiff neck or a sore back rarely scroll far. They search “chiropractor near me”, scan the map and book. Our chiropractic SEO wins that moment through your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile",
      },
      ", condition pages for sciatica or headaches, and steady patient reviews.",
    ],
    cta: "Get My Chiropractic SEO Audit",
    ui: {
      kind: "growth",
      maps: "pin",
      ai: "overview",
      growth: "calendar",
      business: "Your Chiropractic Clinic",
      category: "Chiropractor",
      query: "chiropractor near me",
      aiPrompt: "chiropractor near me for lower back pain",
      aiReasons: ["Condition-focused pages", "Steady patient reviews"],
      growthLabel: "First visits this week",
      leads: [
        ["New patient visit", "Google Maps"],
        ["Back pain consult", "AI Overview"],
        ["Auto injury exam", "Condition page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Top pin",
          title: "The Clinic Locals Find First",
          text: "Your pin sits above nearby clinics for chiropractor searches.",
        },
        {
          label: "AI Overview",
          badge: "Cited",
          title: "Cited for Back and Neck Care",
          text: "Condition pages and reviews earn mentions in Google's AI answers.",
        },
        {
          label: "Visits",
          badge: "Booked",
          title: "First Visits Filling the Week",
          text: "New patient visits book from Maps, AI answers and condition pages.",
        },
      ],
    },
  },
  searches: {
    title: "Searches That Lead Patients to a Chiropractor",
    lead: "Pages and profile details are shaped around what patients type, from sudden pain to ongoing care.",
    groups: [
      {
        icon: "clock",
        label: "Same-day chiropractic searches",
        terms: [
          "chiropractor near me open now",
          "walk in chiropractor",
          "chiropractor open saturday",
          "lower back pain relief near me",
          "same day chiropractor appointment",
        ],
      },
      {
        icon: "medical",
        label: "Chiropractor searches by condition",
        terms: [
          "chiropractor for sciatica",
          "chiropractor for neck pain",
          "chiropractor for headaches",
          "herniated disc chiropractor",
          "prenatal chiropractor",
          "sports injury chiropractor",
        ],
      },
      {
        icon: "car",
        label: "Injury and coverage chiropractic searches",
        terms: [
          "car accident chiropractor",
          "whiplash treatment near me",
          "chiropractor that takes my insurance",
          "workers comp chiropractor",
          "chiropractor accepting new patients",
        ],
      },
    ],
  },
  services: {
    title: "Monthly Chiropractic SEO\nServices for Your Clinic",
    lead: "Every service points at the care you want to book more of, from first exams to injury visits.",
    cta: "Audit My Clinic Website",
    items: [
      {
        icon: "pin",
        title: "Maps Profile Work for Chiropractic Clinics",
        desc: "Chiropractor as primary category, added specialties, evening hours, adjustment-room photos and weekly updates, so your clinic shows for nearby pain searches.",
        points: [
          "Clinic category fixed",
          "Treatment-room photos",
          "Weekly clinic updates",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile tuning",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help verifying a listing",
          },
        ],
      },
      {
        icon: "file",
        title: "Condition Pages for Chiropractors",
        desc: "Pages for the problems patients search, such as sciatica, neck pain, headaches and whiplash, explaining your approach plainly without promising cures or timelines.",
        points: [
          "Sciatica and disc pages",
          "Auto injury page",
          "Town-level clinic pages",
        ],
        links: [
          {
            href: "/services/chiropractor-website-design",
            label: "Chiropractor website design",
          },
        ],
      },
      {
        icon: "star",
        title: "Review Growth for Chiropractic Clinics",
        desc: "A text after each adjustment visit, owner replies that never discuss care, and a steady pace of reviews mentioning the clinic's strengths naturally.",
        points: [
          "Post-visit text asks",
          "HIPAA-aware replies",
          "Steady review pace",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Chiropractic Website Speed and Schema",
        desc: "Quick-loading mobile pages, Chiropractor schema, clean indexing and a short booking path, so both Google and patients get through without friction.",
        points: [
          "Chiropractor schema",
          "Mobile load fixes",
          "Short booking path",
        ],
        links: [
          { href: "/services/web-design", label: "Clinic websites that rank" },
        ],
      },
      {
        icon: "layers",
        title: "Listings and Links for Chiropractors",
        desc: "Identical clinic details on every health listing and booking and doctor directory, plus links from gyms, running clubs, employers and local news features.",
        points: [
          "Directory clean-up",
          "Gym and club links",
          "Local press features",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstating a suspended profile",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answers That Name Your Chiropractic Clinic",
        desc: "Direct answers on condition pages, matching doctor and clinic facts online, and a monthly look at what AI assistants tell patients.",
        points: [
          "Condition FAQ answers",
          "Doctor entity details",
          "AI answer tracking",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "Local SEO for Chiropractors, Measured in Booked Exams",
    lead: "More Map Pack visibility, more AI mentions and new-patient bookings you can trace.",
    rank: {
      title: "Rank Chiropractic Condition Pages on Page One",
      body: [
        "We map what patients search by condition and suburb, then build or rework the page able to win each one. Sciatica, neck pain and auto injury care each get a page, and positions are logged weekly against nearby clinics.",
      ],
      points: [
        "Condition keyword map",
        "Suburb rank tracking",
        "Nearby clinic gaps",
        "Weekly position notes",
      ],
      cta: "See My Chiropractic Keyword Gaps",
      keywords: [
        ["chiropractor near me", 21, 3],
        ["chiropractor for sciatica", 28, 2],
        ["car accident chiropractor", 34, 4],
        ["chiropractor open saturday", 17, 2],
      ],
    },
    ai: {
      title: "Be the Chiropractic Clinic ChatGPT Suggests",
      body: [
        "When someone asks ChatGPT or Gemini who treats sciatica nearby, the answer leans on clear condition pages, consistent clinic facts and fresh reviews. Our team adds schema and direct answers, the same base our ",
        {
          href: "/services/ai-seo-services",
          label: "AI search optimization service",
        },
        " builds for clinics.",
      ],
      points: [
        "Condition answer blocks",
        "Doctor and clinic schema",
        "Listing alignment",
        "AI mention log",
      ],
      cta: "Run My Clinic's AI Visibility Check",
      query: "chiropractor for sciatica near me",
      intro: "For sciatica care close to you,",
      bullets: [
        "Detailed sciatica page",
        "Evening appointments listed",
        "Fresh reviews each month",
      ],
    },
    leads: {
      title: "Know Which Search Booked Each Chiropractic Exam",
      body: [
        "Rankings pay off when the schedule fills. Every call and booking request is matched to the page and keyword that sent it, health details stay out of reports, and ",
        { href: "/services/google-ads", label: "Google Ads for chiropractors" },
        " can step in when the week looks thin.",
      ],
      points: [
        "Call source tagging",
        "One-tap calling",
        "Online exam request",
        "Monthly booking summary",
      ],
      cta: "Show Me Which Pages Book Exams",
      items: [
        ["First-visit call", "Google Maps", "Mon 7:50 AM"],
        ["Sciatica exam request", "Sciatica page", "Mon 11:20 AM"],
        ["Auto injury call", "ChatGPT answer", "Tue 5:45 PM"],
        ["Adjustment booking", "Suburb page", "Thu 9:10 AM"],
      ],
    },
  },
  results: {
    title: "What Shifts for Chiropractic Clinics With Zonic",
    lead: "What usually happens, in order: a cleaner listing, then condition pages, reviews and more exam requests.",
    cta: "Plan My Clinic's Next Steps",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Clinic Listing Cleaned Up",
        text: "We set the Chiropractor category, hours and services, so the listing starts showing for nearby pain searches.",
      },
      {
        when: "Month 1",
        title: "Sciatica and Neck Pages Live",
        text: "Condition and auto injury pages go live and start competing for the searches people make when something hurts.",
      },
      {
        when: "Months 2–4",
        title: "Clinic Shows in More Suburbs",
        text: "Fresh reviews plus links from gyms and running clubs push the clinic toward top-three spots across more suburbs.",
      },
      {
        when: "Month 4 onward",
        title: "Steadier Chiropractic Bookings",
        text: "More first-visit calls and exam requests from search, each tied to the page and keyword behind it.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "More First Exams Booked Online",
        text: "People searching “chiropractor near me” reach a page with hours, directions and a booking button up front.",
      },
      {
        icon: "star",
        title: "Reviews That Speak to People in Pain",
        text: "Recent Google reviews, answered with care, show new patients that your clinic is active and well regarded.",
      },
      {
        icon: "sparkle",
        title: "Suggested by ChatGPT for Back Care",
        text: "Condition answers and matching clinic facts give AI assistants solid material when someone asks who to see.",
      },
      {
        icon: "car",
        title: "Accident Patients Find the Clinic Directly",
        text: "Car accident and whiplash searches land on your own page rather than a referral network's listing.",
      },
    ],
  },
  compare: {
    title: "Your Chiropractor SEO Expert: Zonic vs. a One-Size Agency",
    lead: "Where chiropractic clinics are often let down elsewhere, and how our approach differs.",
    rows: [
      {
        topic: "Condition-specific chiropractic pages",
        other:
          "One catch-all services page asked to rank for back pain, neck pain and sciatica at once.",
        zonic:
          "Dedicated sciatica, neck pain, headache and whiplash pages written without cure or timeline claims.",
      },
      {
        topic: "Chiropractic review privacy",
        other:
          "Replies that thank patients by name or mention what was treated.",
        zonic:
          "Replies that stay general, never confirm a visit, and move complaints to a private call.",
      },
      {
        topic: "Auto injury searches",
        other:
          "Accident and coverage searches often ignored or pointed at generic pages.",
        zonic:
          "A dedicated accident care page explaining intake and paperwork, with no recovery or settlement promises.",
      },
      {
        topic: "Chiropractor credentials online",
        other:
          "Doctor credentials and hours that differ between the website and listings.",
        zonic:
          "Matching doctor, hours and clinic facts across listings, marked up with Chiropractor schema.",
      },
      {
        topic: "Booking a first adjustment",
        other:
          "Rankings get reported, but nobody checks whether patients can book easily.",
        zonic:
          "A short booking path, tap-to-call and exam request forms, with every request traced to its source.",
      },
      {
        topic: "Clinic contract length",
        other:
          "Annual agreements that bind a clinic long before anyone can judge the work.",
        zonic:
          "Month to month, with the clinic owning its Google profile, website and tracking accounts.",
      },
    ],
  },
  steps: {
    title: "How Our Chiropractor SEO Agency Works",
    lead: "Fix the profile and site first, then add pages, reviews and links that build on each other.",
    items: [
      {
        h: "Chiropractic Local SEO Visibility Check and Condition Map",
        p: "We study your listing, site and reviews next to nearby clinics, then list the conditions and suburbs worth targeting first.",
      },
      {
        h: "Fix the Chiropractic Profile, Then Build Pages",
        p: "Listing edits and site repairs come first, usually inside a week, then condition pages, suburb pages and review texts roll out.",
      },
      {
        h: "Monthly Chiropractic Reports, Then Scale Up",
        p: "Each month shows rankings, calls and exam requests by condition, and effort moves toward the pages that bring in new patients.",
      },
    ],
    audit: [
      ["Maps visibility", "behind"],
      ["Sciatica page", "gap"],
      ["Review asks", "open"],
      ["Booking path", "behind"],
    ],
    plan: [
      "Sciatica page",
      "Neck pain page",
      "Auto injury page",
      "Suburb pages",
      "Links",
    ],
    launch: [
      "Listing fixed",
      "Condition pages live",
      "Review texts running",
      "Bookings traced",
    ],
  },
  explore: {
    title: "Other Growth Services for Chiropractic Clinics",
    lead: "SEO compounds faster beside a site built to book and ads for quiet weeks.",
    items: [
      {
        name: "Chiropractic Marketing",
        sub: "SEO, ads and site in one plan",
        href: "/services/chiropractic-marketing-agency",
        icon: "medical",
      },
      {
        name: "Chiropractor Websites",
        sub: "Clinic sites built to book visits",
        href: "/services/chiropractor-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Exam requests while rankings grow",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Small Business Local SEO",
        sub: "Local search basics, done right",
        href: "/services/local-seo-for-small-business",
        icon: "pin",
      },
    ],
    other:
      "Clinic also offers massage or rehab? One plan can cover every service line.",
  },
  reviews: {
    title: "Read Why Owners Give Our SEO Team 5.0 Stars",
    lead: "Unfiltered feedback owners left on our Google listing.",
  },
  pricing: {
    title: "Chiropractic SEO Plans, Cancel Any Month",
    compareTitle: "Chiropractic Plans at a Glance",
    addOnsTitle: "Chiropractic Clinic Add-Ons",
    customTitle: "Several Chiropractic Clinics to Rank?",
  },
  faq: {
    title: "Chiropractic SEO Questions Clinic Owners Ask",
    lead: "Pricing, timing, privacy, Maps rankings and what a chiropractic SEO company handles.",
    items: [
      {
        q: "What does a chiropractic SEO company do each month?",
        a: "It keeps your clinic visible and chosen in local search. Each month we tune your Business Profile, publish or improve condition and suburb pages, fix technical issues, request reviews after visits, clean up listings and send a report of calls and booking requests that shows which pages bring new patients.",
      },
      {
        q: "How much do SEO services for chiropractors cost?",
        a: "Our plans run $297, $750 or $1,500 a month with no annual contract. Solo clinics often begin on the first tier; multi-doctor practices, clinics ranking for many conditions or those adding managed Google Ads usually pick the second or third. The audit recommends one.",
      },
      {
        q: "How fast does chiropractor SEO show up in bookings?",
        a: "Expect early movement on Maps within weeks of the listing edits and new condition pages. Terms like “chiropractor near me” in larger metros often take several months to win. Reports put positions, calls and exam requests side by side, so you judge progress on real bookings.",
      },
      {
        q: "Which conditions should a chiropractor's website target?",
        a: "Lead with the problems your clinic treats most and wants more of, such as sciatica, neck pain, headaches, sports injuries or car accident care, each paired with your town. We check demand for each in the audit and write pages that explain your approach without promising outcomes.",
      },
      {
        q: "How does local SEO for chiropractors reach the top three on Maps?",
        a: "Set Chiropractor as the primary category, add relevant secondary ones, list services, keep hours current and post often. Steady reviews, matching details on health directories and strong condition pages on your site push the profile up for nearby searches.",
      },
      {
        q: "Can a chiropractic clinic ask for reviews without breaking HIPAA?",
        a: "Yes. Asking every patient the same way, by text or email after a visit, is fine. The risk sits in replies: ours thank the reviewer without confirming they were seen, never mention conditions, and move any complaint to a private phone call.",
      },
      {
        q: "Should a chiropractor SEO expert build pages for auto injury cases?",
        a: "If accident care is part of your clinic, yes. Car accident and whiplash searches carry clear intent, and a dedicated page can explain your intake, paperwork and how you work with insurers. We keep claims factual and avoid any promise about recovery or settlements.",
      },
      {
        q: "Can chiropractic SEO cover several clinic locations?",
        a: "Yes. We set up a separate verified listing and location page for each clinic, with that office's doctors and hours, then report rankings suburb by suburb so you know which locations need more push and which already lead.",
      },
      {
        q: "Do AI tools like ChatGPT recommend chiropractors?",
        a: "They do, and they lean on the same signals as local search: clear condition pages, consistent clinic details, credentials and recent reviews. AI tools usually name clinics whose chiropractic local SEO is already strong, so we review those answers every month.",
      },
      {
        q: "Is chiropractor SEO billed month to month?",
        a: "Yes, with no long contract. Your profile, website and tracking accounts are owned by the clinic, and every clinic report shows the adjustments we made to pages and listings, plus the new patient calls that followed.",
      },
    ],
  },
  audit: {
    title: "Get a Free Ranking Check for Your Chiropractic Clinic",
    lead: [
      "Share your website and the conditions you most want to treat. Our chiropractic SEO agency compares your Maps spot, site and reviews with clinics nearby and sends back a clear plan. Meet ",
      { href: "/about", label: "the people behind Zonic Media" },
      " or see ",
      { href: "/services", label: "all our services" },
      ".",
    ],
    points: [
      "Maps spot by suburb",
      "Condition keyword gaps",
      "Clinic profile review",
      "Plan for month one",
    ],
    form: {
      formType: "local-seo",
      badge: "Free chiropractic SEO audit",
      title: "Request a Chiropractic Clinic SEO Audit",
      subtitle: "No cost, no contract, just a clear plan.",
      submitText: "Send My Clinic Audit Request",
      messageLabel: "Your website and the conditions you treat most",
      messagePlaceholder:
        "yourclinic.com, main conditions and the suburbs you serve",
    },
  },
  banner: {
    title: "Make Your Clinic the First Chiropractor on the Map",
    lead: "Climb Google Maps, appear in AI answers and see which pages book exams, all reported monthly.",
  },
};
