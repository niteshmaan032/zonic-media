import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* PLUMBING MARKETING AGENCY — redesign draft content (24 Oct 2026).

   Research (Semrush US, 24 Oct 2026):
   - Live URL ranks for: plumbing marketing agency (#38, 1,000), plumbing
     marketing company/companies (#33, 320), plumbing seo agency (#37, 320),
     marketing agency for plumbers (#51, 1,000), plumber marketing services
     (#54, 480), plumbing ppc agency (#31, 140), marketing plumbing
     contractors (#7, 70), plumbing/plumber advertising agency (#29/#26, 70).
   - Head terms used: seo for plumbers 3,600 · plumber seo 2,400 · plumbing
     seo 1,900 · plumber marketing 1,600 · digital marketing for plumbers
     1,600 · plumbing marketing agency 1,000 · marketing agency for plumbers
     1,000 · plumbing lead generation 720 · plumbing leads 720 · plumbing
     website design 590 · plumbing ppc 260.
   - Questions: how to get more plumbing leads 260 · how to market a
     plumbing business 170 · how to get plumbing leads 140.
   Fresh wording only: nothing reused from the live page or HVAC drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "plumbing-marketing-agency-2",
  liveUrl: "/services/plumbing-marketing-agency",
  niche: "Plumbing",
  meta: {
    title: "Plumbing Marketing Agency | Plumber SEO, PPC & Plumbing Leads",
    description:
      "Plumbing digital marketing agency that gets plumbers more emergency, drain and water heater calls with plumber SEO, Google Maps rankings and PPC.",
    keywords: [
      "plumbing marketing agency",
      "plumber marketing",
      "seo for plumbers",
      "plumber seo",
      "plumbing seo",
      "digital marketing for plumbers",
      "marketing agency for plumbers",
      "plumbing marketing company",
      "plumbing lead generation",
      "plumbing leads",
      "plumbing ppc",
      "plumbing advertising",
      "plumbing marketing services",
      "plumbing marketing ideas",
    ],
  },
  palette: PALETTES.orangeBlue,
  hero: {
    h1Lead: "Plumbing",
    h1Icon: "plumbing",
    h1Rest: "Marketing Agency That Keeps Plumbers Booked Solid",
    lead: [
      "When a pipe bursts or a drain backs up, homeowners call one of the first plumbers they find. We put your name there with plumber SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile management",
      },
      ", call-focused PPC and ",
      {
        href: "/services/plumbing-website-design",
        label: "plumbing website design",
      },
      " that converts mobile visitors into scheduled jobs.",
    ],
    cta: "Book a Free Plumbing Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-plumbing/emergency-plumbing.webp",
        position: "45% 50%",
        query: "emergency plumber near me",
      },
      cardA: {
        icon: "call",
        title: "More emergency calls",
        sub: "Nights, weekends and holidays",
      },
      cardB: {
        icon: "flame",
        title: "More water heater jobs",
        sub: "Repairs and replacements",
      },
      photoB: {
        src: "/images/free-website/free-plumbing/water-heater.webp",
        position: "58% 50%",
        query: "water heater repair near me",
      },
    },
  },
  services: {
    title: "Plumber Marketing Services That Keep Your Trucks Rolling",
    lead: "Run for plumbing contractors and aimed at searches that end in a call.",
    cta: "Audit My Plumbing Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile & Maps",
        desc: "Categories, services, service areas and job photos tuned so your listing climbs the map for leak, drain and water heater searches.",
        points: [
          "Profile cleanup and rebuild",
          "Weekly posts and job photos",
          "Suspension recovery included",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification help",
          },
        ],
      },
      {
        icon: "search",
        title: "SEO for Plumbing Companies",
        desc: "Dedicated job and neighborhood pages, local citations and technical fixes that move your site up for the plumbing work you want.",
        points: [
          "Job and suburb pages",
          "Citation cleanup",
          "City-by-city rank tracking",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-plumber",
            label: "Plumber SEO services",
          },
        ],
      },
      {
        icon: "target",
        title: "Plumbing PPC & Local Services Ads",
        desc: "Search ads and Local Services Ads that run when pipes fail, with call-only campaigns overnight and DIY clicks filtered out.",
        points: [
          "After-hours call campaigns",
          "DIY and job-seeker negatives",
          "0% ad-spend markup",
        ],
        links: [{ href: "/services/google-ads", label: "Plumbing Google Ads" }],
      },
      {
        icon: "monitor",
        title: "Mobile-First Plumbing Websites",
        desc: "Fast mobile sites with a sticky call bar, clear service menus and short booking forms, built for people standing in water.",
        points: [
          "Tap-to-call on every screen",
          "Online booking requests",
          "Every call and form tracked",
        ],
        links: [
          {
            href: "/services/plumbing-website-design",
            label: "Websites for plumbers",
          },
          { href: "/services/web-design", label: "Custom web design" },
        ],
      },
      {
        icon: "star",
        title: "Reviews & Repeat Customers",
        desc: "Texts after each invoice ask for a Google review, and reminders bring past customers back for heater flushes and drain upkeep.",
        points: [
          "Review requests after every job",
          "Replies in your voice",
          "Past-customer reminders",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service local SEO",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "ChatGPT & AI Overview Visibility",
        desc: "We make your company easy for ChatGPT, Gemini and Google AI Overviews to verify, so they name you when people ask for a plumber.",
        points: [
          "Consistent listings everywhere",
          "Detailed reviews and mentions",
          "Answer-ready FAQ pages",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "How Our Plumbing Digital Marketing Agency Wins Leads",
    lead: "Map rankings, a site that converts, paid calls and reviews, each one feeding the next.",
    rows: [
      {
        title: "Win the Map Results for “Plumber Near Me”",
        body: [
          "Urgent plumbing calls start on the map, above the regular links. We sharpen your Google listing, add a page for each town you serve and keep fresh reviews coming, so your pin lands in the top three when water is already on the floor.",
        ],
        points: [
          "Correct plumbing categories",
          "Service-area pages",
          "Weekly job photos",
          "Fake-listing reports",
        ],
        cta: "See Where My Pin Ranks",
        ui: {
          kind: "maps",
          query: "plumber near me",
          city: "Charlotte",
          category: "Plumber · Open 24 hours",
        },
      },
      {
        title: "Be the Plumber AI Assistants Suggest First",
        body: [
          "When someone asks ChatGPT, Gemini or Google's AI Overview for a trusted plumber nearby, the answer leans on listings, reviews and clear service pages. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " lines all three up so your name is the one it gives.",
        ],
        points: [
          "Listings that match everywhere",
          "Reviews that name the job",
          "Plain-answer service pages",
          "FAQ content AI can quote",
        ],
        cta: "Check My AI Visibility",
        ui: {
          kind: "ai",
          query: "trusted plumber for a leaking water heater in raleigh",
          intro: "For water heater leaks in Raleigh,",
          bullets: [
            "Same-day water heater repair",
            "Upfront quotes before work starts",
            "Licensed, insured technicians",
          ],
        },
      },
      {
        title: "Plumbing PPC That Catches the 2 a.m. Emergency",
        body: [
          "Burst pipes ignore office hours. We point Local Services Ads and Google search campaigns at urgent searches day and night, block the clicks that never book, and trace every call back to the search that produced it.",
        ],
        points: [
          "Round-the-clock call ads",
          "Local Services Ads",
          "Wasted-click filters",
          "Recorded, tracked calls",
        ],
        cta: "Plan My Plumbing Ads",
        ui: {
          kind: "calls",
          title: "Calls from ads today",
          calls: [
            {
              service: "Burst pipe in basement",
              source: "Local Services Ads",
              when: "2:07 AM",
            },
            {
              service: "Kitchen drain clog",
              source: "Google Ads",
              when: "8:42 AM",
            },
            {
              service: "Water heater replacement",
              source: "Google Ads · Call",
              when: "11:15 AM",
            },
          ],
        },
      },
      {
        title: "Fill Your Profile With Fresh Plumbing Reviews",
        body: [
          "People in a hurry skim your star rating and how you answer complaints. The moment an invoice closes, your customer gets a text asking for a Google review, and we draft owner replies in your voice.",
        ],
        points: [
          "Requests sent automatically",
          "Low-rating alerts",
          "Reply drafts for you",
          "Review feed on your site",
        ],
        cta: "Grow My Google Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Marcus, Your Company here. Thanks for letting us fix that leak today! Mind leaving a quick Google review?",
          reviewer: "Marcus T.",
          review:
            "Our water heater quit on a Sunday morning and they had hot water running again before lunch. Clean, quick and friendly.",
          reply: "Thank you, Marcus! Enjoy the hot showers again.",
        },
      },
    ],
  },
  ownLeads: {
    title: "Plumbing Lead Generation Where Every Call Is Yours",
    body: [
      "Shared lead sites sell the same job to several plumbers, so the fastest dialer wins and everyone else still pays. We build plumbing leads that ring only your phone, from rankings, ads and a website you keep.",
    ],
    cta: "Get Exclusive Plumbing Leads",
    colShared: "Shared lead sites",
    colOwn: "Your own pipeline",
    rows: [
      [
        "Who hears about the job",
        "Several plumbers at once",
        "Only your office",
      ],
      ["How you win it", "Race to call back first", "They already called you"],
      [
        "What the money buys",
        "Contacts that may never answer",
        "Rankings, pages and ads you keep",
      ],
      [
        "Whose name they see",
        "The lead site's brand",
        "Your name, reviews and number",
      ],
      [
        "When you stop",
        "The calls stop too",
        "Your rankings and reviews remain",
      ],
    ],
  },
  specialties: {
    title: "A Marketing Agency for Plumbers, Matched to Every Job",
    lead: "Emergency calls, planned installs and commercial contracts are bought differently, so each gets its own tactics.",
    photo: {
      src: "/images/free-website/free-plumbing/drain-sewer.webp",
      alt: "Two plumbers running a camera inspection on a commercial sewer line",
      caption: "Drain, sewer and repipe crews",
      sub: "From late-night repairs to planned installs",
    },
    items: [
      {
        icon: "clock",
        name: "24-Hour Emergency Plumbing",
        tactic: "Call-only ads and Maps visibility after midnight",
      },
      {
        icon: "drop",
        name: "Drain Cleaning & Hydro Jetting",
        tactic: "Same-day drain pages ranked in every suburb",
      },
      {
        icon: "construction",
        name: "Sewer Line Repair",
        tactic: "Camera-inspection offers that open bigger sewer jobs",
      },
      {
        icon: "flame",
        name: "Water Heater Repair & Install",
        tactic: "Tank and tankless pages with quote request forms",
      },
      {
        icon: "waterDamage",
        name: "Leak Detection & Slab Leaks",
        tactic: "Leak pages written for panicked late-night searches",
      },
      {
        icon: "water",
        name: "Water Softeners & Filtration",
        tactic: "Hard-water pages plus offers to past customers",
      },
      {
        icon: "wrench",
        name: "Repiping & Remodel Plumbing",
        tactic: "Project pages with financing options and photo galleries",
      },
      {
        icon: "building",
        name: "Commercial & Property Plumbing",
        tactic: "Property-manager pages and contract-focused search ads",
      },
    ],
    more: "Run backflow testing, gas lines or something else? We market that too.",
  },
  steps: {
    title: "From Free Audit to a Busier Phone in Three Steps",
    lead: "We start with the fastest wins on Maps and ads, then build the SEO that keeps calls coming long after launch.",
    items: [
      {
        h: "We Audit Your Local Market",
        p: "We search your top jobs from inside your service area, then show where you appear, who outranks you on Maps and what is costing you calls.",
      },
      {
        h: "You Approve a Focused Plan",
        p: "Together we choose the jobs, suburbs and campaigns to push first, weighted toward the high-value work you want more of, like sewer and water heater jobs.",
      },
      {
        h: "We Launch and Report Monthly",
        p: "Profile fixes, new pages, ads and review texts switch on. Every month you get one plain report on calls, rankings and the jobs they turned into.",
      },
    ],
    audit: [
      ["Maps rank: plumber near me", "behind"],
      ["Business Profile categories", "gap"],
      ["Reviews vs nearby plumbers", "behind"],
      ["After-hours ad coverage", "open"],
    ],
    plan: [
      "Drain cleaning",
      "Water heaters",
      "Sewer lines",
      "Charlotte",
      "Concord",
    ],
    launch: [
      "Business Profile cleaned up",
      "Job pages published",
      "Call tracking connected",
      "Review texts running",
    ],
  },
  locations: {
    title: "Plumbing Marketing Tuned to Your State",
    lead: [
      "Each state page covers the cities and search habits we target there. Plumbers who also run heating or septic crews can pair it with our ",
      {
        href: "/services/hvac-marketing-agency",
        label: "HVAC marketing programs",
      },
      " or ",
      {
        href: "/services/septic-marketing-agency",
        label: "septic company marketing",
      },
      ".",
    ],
    items: [
      {
        name: "Plumbing Marketing in Arizona",
        href: "/services/plumbing-marketing-agency/arizona",
        cities: "Phoenix · Tucson · Mesa",
      },
      {
        name: "Plumbing Marketing in California",
        href: "/services/plumbing-marketing-agency/california",
        cities: "Los Angeles · San Diego · San Jose",
      },
      {
        name: "Plumbing Marketing in Florida",
        href: "/services/plumbing-marketing-agency/florida",
        cities: "Jacksonville · Tampa · Miami",
      },
      {
        name: "Plumbing Marketing in Georgia",
        href: "/services/plumbing-marketing-agency/georgia",
        cities: "Atlanta · Savannah · Augusta",
      },
      {
        name: "Plumbing Marketing in Illinois",
        href: "/services/plumbing-marketing-agency/illinois",
        cities: "Chicago · Naperville · Joliet",
      },
      {
        name: "Plumbing Marketing in North Carolina",
        href: "/services/plumbing-marketing-agency/north-carolina",
        cities: "Charlotte · Raleigh · Greensboro",
      },
      {
        name: "Plumbing Marketing in Texas",
        href: "/services/plumbing-marketing-agency/texas",
        cities: "Houston · San Antonio · Dallas",
      },
    ],
    other: "Working in another state? We market plumbers nationwide.",
  },
  reviews: {
    title: "Google Reviews From the Trades We Market",
    lead: "Unedited feedback from service business owners, straight from our Google profile.",
  },
  pricing: {
    title: "Plumbing Marketing Plans Without Long Contracts",
    lead: [
      "Plans run month to month, ad spend carries a 0% markup, and every tier covers ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "reinstatement for suspended Google profiles",
      },
      " if Google ever pulls your listing.",
    ],
    compareTitle: "Side-by-Side Plumbing Plan Comparison",
    compareLead: "See what each tier covers, from Maps work to paid search.",
    addOnsTitle: "Bolt On Campaigns When Demand Spikes",
    addOnsLead:
      "Freeze-season ad pushes, extra suburb pages or a new service line.",
    customTitle: "Running crews across several metros?",
    customText:
      "Share your branches and we'll scope a multi-location plumbing plan.",
  },
  faq: {
    title: "Plumbing Marketing Companies: Questions Plumbers Ask",
    lead: "Straight answers on leads, SEO, ads, AI search and how working with us goes.",
    items: [
      {
        q: "What does a plumbing marketing agency do?",
        a: "A plumbing marketing agency gets your phone ringing from people who need a plumber now. That means ranking your Google Business Profile on Maps, building SEO pages for each job and town, running call-focused ads, collecting reviews and keeping your website easy to call from.",
      },
      {
        q: "How do you market a plumbing business?",
        a: "Start where urgent buyers look: a complete Google Business Profile, steady reviews and a mobile site with a call button up top. Then add pages for your most valuable jobs, ads for emergencies and reminders that bring past customers back.",
      },
      {
        q: "How can plumbers get more leads without buying them?",
        a: "Build channels you own. Rank on Maps and in organic search for the jobs you want, run your own ads instead of renting leads, answer every call fast and ask each happy customer for a review. Those calls come only to you.",
      },
      {
        q: "Is SEO for plumbers worth it?",
        a: "Yes, for most shops. People search for plumbers every day of the year, and organic rankings keep producing calls without a charge per click. SEO also supports your Maps rankings and AI answers, so the same work helps you in three places.",
      },
      {
        q: "Should plumbers use Google Ads or Local Services Ads?",
        a: "Usually both. Local Services Ads sit at the very top for urgent searches and charge per lead, while Google Ads give you more control over keywords, hours and landing pages. We often start with one and add the other once call tracking is in place.",
      },
      {
        q: "How long does plumbing SEO take to work?",
        a: "Profile fixes and ads can bring calls within weeks. Organic rankings build over several months, depending on how many plumbers compete in your area and how strong your site already is. We report progress monthly so you can see what is moving.",
      },
      {
        q: "Can my plumbing company show up in ChatGPT and AI Overviews?",
        a: "Yes. AI assistants recommend businesses they can verify, so we keep your name, address and phone consistent everywhere, earn detailed reviews and local mentions, and publish clear answers to common plumbing questions. That gives those tools reasons to name you.",
      },
      {
        q: "How much does plumbing marketing cost with Zonic Media?",
        a: "Our plans are $297, $750 or $1,500 a month, all month to month. Ad spend goes straight to Google with a 0% markup. The right plan depends on how many services and towns you want to cover and whether you run ads.",
      },
      {
        q: "Can you fix a suspended Google Business Profile for my plumbing company?",
        a: "Yes. We have reinstated 900+ suspended profiles, and reinstatement comes with every plan. We find what triggered the suspension, correct it, file the appeal with proof and tighten your listing so it is less likely to happen again.",
      },
      {
        q: "Do you only work with plumbers in certain states?",
        a: "No. We market plumbing companies across the United States. Our state pages cover markets we know well, but the same approach works anywhere homeowners search for a plumber. Tell us your service area and we will show you the opportunity.",
      },
    ],
  },
  audit: {
    title: "See What's Costing You Plumbing Calls With a Free Audit",
    lead: [
      "We check your Maps position for your top jobs, compare your Business Profile, ",
      { href: "/services/web-design", label: "website and conversion setup" },
      " and reviews with the plumbers ranking above you, and list the fixes worth doing first.",
    ],
    points: [
      "0% ad-spend markup",
      "Month-to-month billing",
      "Plans from $297/mo",
      "Suspension reinstatement included",
    ],
    form: {
      formType: "plumbing-marketing",
      badge: "Free plumbing audit",
      title: "Request Your Free Plumbing Marketing Audit",
      subtitle: "No cost and no pressure to sign up.",
      submitText: "Send My Plumbing Audit",
      messageLabel: "Your service area and top plumbing jobs",
      messagePlaceholder:
        "Cities you cover, jobs you want more of, and whether you offer 24/7 service",
    },
  },
  banner: {
    title: "Be the Plumber They Call When the Water Won't Stop",
    lead: "Claim a free plumbing marketing audit and see which fixes bring calls first.",
    icons: ["plumbing", "drop"],
  },
};
