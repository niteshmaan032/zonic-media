import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* CLEANING COMPANY MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units were exhausted, so no ranking report was
   pulled. The live title's core term ("Cleaning Company Marketing Agency")
   stays at the front of the new title, and every phrase in the live
   keywords meta is carried by the title, H1, an H2/H3 or an FAQ question:
   cleaning company marketing agency (title, H1) · cleaning service
   marketing agency (FAQ) · marketing for cleaning business (growth H2) ·
   marketing for cleaning services (specialties H2) · digital marketing for
   cleaning business (FAQ) · how to market a cleaning business (FAQ) ·
   house cleaning advertising services (service H3) · cleaning business
   seo (service H3, FAQ) · cleaning company marketing company (FAQ) ·
   cleaning company advertising agency (FAQ) · cleaning company internet
   marketing (services H2) · cleaning company lead generation (own-leads H2).
   - Web research (25 Oct): recurring residential clients are the core of
     a cleaning business, so top pages stress converting first cleans into
     weekly/biweekly slots; commercial buyers (office, facility and
     property managers) check insurance and walkthrough options and need
     separate pages; Maps and AI shortlists overlap, both driven by
     reviews; Local Services Ads cover house cleaning.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "cleaning-company-marketing-agency-2",
  liveUrl: "/services/cleaning-company-marketing-agency",
  niche: "Cleaning Company",
  meta: {
    title: "Cleaning Company Marketing Agency | SEO, Ads & Cleaning Leads",
    description:
      "Zonic Media is a cleaning company marketing agency for house and commercial cleaners: cleaning business SEO, Google Maps rankings, ads and recurring clients.",
    keywords: [
      "cleaning company marketing agency",
      "cleaning service marketing agency",
      "marketing for cleaning business",
      "marketing for cleaning services",
      "digital marketing for cleaning business",
      "how to market a cleaning business",
      "house cleaning advertising services",
      "cleaning business seo",
      "cleaning company marketing company",
      "cleaning company advertising agency",
      "cleaning company internet marketing",
      "cleaning company lead generation",
      "cleaning business marketing",
      "commercial cleaning marketing",
      "house cleaning marketing",
    ],
  },
  palette: PALETTES.skyAmber,
  hero: {
    h1Lead: "Cleaning Company",
    h1Icon: "clean",
    h1Rest: "Marketing Agency That Keeps Your Crews Booked",
    lead: [
      "Families want a cleaner they can trust every week, and office managers want one who never misses a night. We help you win both with cleaning business SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Business Profile optimization",
      },
      ", local ads and booking-ready sites for ",
      {
        href: "/services/residential-cleaning-website-design",
        label: "residential cleaners",
      },
      " and ",
      {
        href: "/services/commercial-cleaning-website-design",
        label: "commercial cleaning crews",
      },
      ".",
    ],
    cta: "Get My Free Cleaning Audit",
    /* Tiles, not photos: the cleaning photo folder holds one shot only
       (hero.webp and detail.webp are the same office lobby). */
    bento: {
      kind: "tiles",
      wide: {
        icon: "clean",
        title: "Top 3 on Google Maps",
        sub: "Home and office cleaning searches in every town you cover",
        chips: ["House cleaning", "Office cleaning", "Move-out", "Deep clean"],
      },
      left: {
        icon: "repeat",
        title: "More recurring cleans",
        sub: "Weekly and biweekly home clients",
      },
      right: {
        icon: "building",
        title: "More office contracts",
        sub: "Nightly and weekly janitorial work",
      },
      bottom: {
        title: "Crews booked all week",
        sub: "First cleans that turn into standing appointments",
      },
    },
  },
  services: {
    title: "Cleaning Company Internet Marketing, Run by One Team",
    lead: "Win first cleans, keep standing visits and land office contracts.",
    cta: "Audit My Cleaning Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps Listing for Cleaners",
        desc: "We set the right cleaning categories, list every service, add team photos and post weekly, so your listing rises for nearby cleaner searches.",
        points: [
          "Home and office services listed",
          "Weekly photo posts",
          "Suspension recovery covered",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Listing optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Cleaning Business SEO",
        desc: "Pages for deep cleans, move-outs and offices, one for each neighborhood you serve, plus citations, so Google ranks you for paying work.",
        points: [
          "Neighborhood pages",
          "Citation cleanup",
          "Rank tracking by town",
        ],
        links: [
          {
            href: "/services/industry/local-seo-services-for-residential-cleaning",
            label: "Residential cleaning SEO",
          },
          {
            href: "/services/industry/local-seo-for-commercial-cleaning",
            label: "Commercial cleaning SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "House Cleaning Advertising Services",
        desc: "Google Ads and Local Services Ads shown to people ready to book a cleaner, with job-seeker and do-it-yourself searches blocked.",
        points: [
          "Local Services Ads setup",
          "Recurring-clean offers",
          "0% ad-spend markup",
        ],
        links: [
          { href: "/services/google-ads", label: "Cleaning PPC management" },
        ],
      },
      {
        icon: "monitor",
        title: "Cleaning Websites That Take Bookings",
        desc: "Fast, phone-friendly sites with online booking, a short quote form and clear proof that your staff are insured and background-checked.",
        points: [
          "Online booking built in",
          "Insurance and vetting badges",
          "Every form tracked",
        ],
        links: [
          {
            href: "/services/residential-cleaning-website-design",
            label: "House cleaning websites",
          },
          {
            href: "/services/commercial-cleaning-website-design",
            label: "Janitorial websites",
          },
        ],
      },
      {
        icon: "repeat",
        title: "Reviews and Rebooking",
        desc: "A text after each visit asks for a Google review, and friendly reminders turn one-time deep cleans into standing weekly slots.",
        points: [
          "Review texts after visits",
          "Owner replies in your tone",
          "Rebooking reminders",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for home services",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search Visibility for Cleaners",
        desc: "Clear service pages, matching listings and detailed client reviews give ChatGPT, Gemini and AI Overviews a reason to suggest your cleaning company.",
        points: [
          "Identical business details",
          "Reviews that describe visits",
          "Common questions answered",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "Marketing for Cleaning Business Owners: Maps, AI and Reviews",
    lead: "Three channels that bring in first-time clients and keep them coming back.",
    rows: [
      {
        title: "Rank in the Map Pack for “House Cleaning Near Me”",
        body: [
          "Most cleaning searches end on the map, not the links below it. We tune your profile, add a page for each neighborhood you clean and keep reviews arriving, so you're among the first names a busy parent sees. New listing? We offer ",
          {
            href: "/services/gmb-verification-help",
            label: "Google verification help",
          },
          ".",
        ],
        points: [
          "Cleaning categories set",
          "Neighborhood pages",
          "Team and before-after photos",
          "Spam competitor reports",
        ],
        cta: "Check My Map Position",
        ui: {
          kind: "maps",
          query: "house cleaning near me",
          city: "Austin",
          category: "House cleaning service · Open today",
        },
      },
      {
        title: "Get Named When Clients Ask AI for a Cleaner",
        body: [
          "More clients now rely on ChatGPT, Gemini and Google's AI answers to choose a house cleaner or an office cleaning crew. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " hands them facts they can trust: consistent listings, reviews that mention real visits and service pages that answer common questions.",
        ],
        points: [
          "Same details on every listing",
          "Reviews that name the service",
          "Insurance and vetting shown",
          "Plain-answer FAQ pages",
        ],
        cta: "See If AI Recommends Me",
        ui: {
          kind: "ai",
          query:
            "reliable biweekly house cleaner in denver who brings supplies",
          intro: "For biweekly home cleaning in Denver,",
          bullets: [
            "Same cleaner every visit",
            "Supplies and equipment included",
            "Insured, background-checked team",
          ],
        },
      },
      {
        title: "Turn Every Spotless Visit Into a Five-Star Review",
        body: [
          "Trust decides who gets a key to someone's home. When a visit wraps up, your client receives a quick review-link text, we draft polite owner replies, and your rating keeps growing where new clients compare cleaners.",
        ],
        points: [
          "Texts after each visit",
          "Low-rating alerts",
          "Replies drafted politely",
          "Review badge on your website",
        ],
        cta: "Grow My Cleaning Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Jenna, it's Your Company. Hope you love walking into a fresh home today! Would you share a quick Google review?",
          reviewer: "Jenna R.",
          review:
            "Same two cleaners every other Friday, and they notice the little things. Coming home on cleaning day is the best part of my week.",
          reply: "Thank you, Jenna! We'll pass this on to your team.",
        },
      },
    ],
  },
  ownLeads: {
    title: "Cleaning Company Lead Generation That Stays Yours",
    body: [
      "Shared lead sites send one cleaning request to several companies, and the cheapest quote usually wins a client who rarely stays. Our ",
      { href: "/services", label: "complete marketing services" },
      " bring people to your own phone number and booking form instead.",
    ],
    cta: "Build My Own Cleaning Leads",
    colShared: "Shared lead sites",
    colOwn: "Your own bookings",
    rows: [
      ["Who gets the request", "Several cleaners at once", "Just your office"],
      [
        "How the job is won",
        "Lowest price quoted",
        "Your reviews and reputation",
      ],
      [
        "Chance of a regular client",
        "Slim: bargain hunters",
        "Better: they picked you on purpose",
      ],
      [
        "If you pause spending",
        "Requests dry up",
        "Your rankings and reviews stay",
      ],
    ],
  },
  specialties: {
    title: "Commercial Cleaning and House Cleaning Marketing, Job by Job",
    lead: "A move-out clean, a weekly home visit and a nightly office contract are bought by different people, so each one gets its own pages and offers.",
    items: [
      {
        icon: "home",
        name: "Recurring House Cleaning",
        tactic: "Weekly and biweekly offers with rebooking reminders",
      },
      {
        icon: "sparkle",
        name: "Deep Cleans & Spring Cleans",
        tactic: "Seasonal deep-clean pages ranked by neighborhood",
      },
      {
        icon: "moving",
        name: "Move-In & Move-Out Cleaning",
        tactic: "Renter-focused ads plus outreach to property managers",
      },
      {
        icon: "building",
        name: "Office & Janitorial Contracts",
        tactic: "Walkthrough request pages for office and facility managers",
      },
      {
        icon: "medical",
        name: "Medical & Dental Office Cleaning",
        tactic: "Compliance-minded pages written for clinic managers",
      },
      {
        icon: "construction",
        name: "Post-Construction Cleanup",
        tactic: "Builder outreach and project-ready service pages",
      },
      {
        icon: "spray",
        name: "Carpet & Upholstery Add-Ons",
        tactic: "Add-on offers sent to your current clients",
      },
      {
        icon: "window",
        name: "Residential & Storefront Window Washing",
        tactic: "Spring add-on campaigns for homes and shops",
      },
    ],
    more: "Run vacation rental turnovers or pressure washing too? Those get their own plan.",
  },
  steps: {
    title: "From Free Audit to Booked Cleaning Routes in 3 Steps",
    lead: "Maps and ad gains show up first; SEO then builds steady bookings for the months ahead.",
    items: [
      {
        h: "We Audit Your Cleaning Market",
        p: "We search for house and office cleaning across your towns, then share your rank, the cleaners above you and which gaps cost you bookings.",
      },
      {
        h: "We Plan Around Recurring Work",
        p: "Together we pick the services, neighborhoods and campaigns to push first, weighted toward recurring homes and commercial accounts that keep crews busy.",
      },
      {
        h: "We Launch and Report Each Month",
        p: "We fix your profile, publish pages and start ads and review texts. A monthly summary then shows rankings, calls, booking forms and new recurring clients.",
      },
    ],
    audit: [
      ["Map Pack spot: house cleaning", "behind"],
      ["Business Profile services", "gap"],
      ["Online booking", "open"],
      ["Reviews vs top 3 cleaners", "behind"],
    ],
    plan: [
      "Recurring cleans",
      "Move-outs",
      "Office cleaning",
      "Austin",
      "Round Rock",
    ],
    launch: [
      "Profile services added",
      "Neighborhood pages live",
      "Booking form tracked",
      "Review texts switched on",
    ],
  },
  reviews: {
    title: "Our Google Rating: 5.0 From Business Owners",
    lead: "Read what local business owners say about our work, in reviews they left on Google.",
  },
  pricing: {
    title: "Cleaning Company Marketing Plans, No Long Contract",
    compareTitle: "Compare Cleaning Marketing Plans Side by Side",
    addOnsTitle: "Add Campaigns for Spring Cleaning and Move-Out Season",
    customTitle: "Running several cleaning crews or territories?",
  },
  faq: {
    title: "Questions for a Cleaning Company SEO Agency",
    lead: "Straight answers on recurring clients, office contracts, ads and AI search.",
    items: [
      {
        q: "Why hire a cleaning service marketing agency instead of doing it yourself?",
        a: "Because running crews leaves little time for marketing. A specialist cleaning marketing agency already knows how house and office cleaning clients search, which categories and pages Google rewards and how to turn first visits into recurring slots. You keep cleaning; we handle profiles, pages, ads, reviews and the monthly report.",
      },
      {
        q: "How to market a cleaning business: what comes first?",
        a: "Begin with a fully filled-out Google Business Profile, a steady stream of reviews and a website where people can book from their phone. Once those work, add neighborhood pages, ads on ready-to-book searches and reminders that move one-time clients onto a weekly or biweekly schedule.",
      },
      {
        q: "What does digital marketing for cleaning business owners include?",
        a: "It covers every place a client finds and checks you: Google Maps rankings, search pages for each service and area, paid search and Local Services Ads, a booking-ready website, review requests, rebooking texts and visibility in AI answers. We run them together so each channel supports the others.",
      },
      {
        q: "How do cleaning companies turn one-time cleans into recurring clients?",
        a: "Ask at the right moment. Right after a great first visit, offer a standing weekly or biweekly slot, send a friendly follow-up text and make rebooking one tap. Consistent cleaners, clear arrival windows and quick replies keep those clients from drifting to someone else.",
      },
      {
        q: "How can a cleaning company win more commercial cleaning contracts?",
        a: "Give office and facility managers what they check first: a dedicated commercial page, proof of insurance, the types of buildings you clean and an easy walkthrough request. We pair those pages with commercial search ads and the right Maps categories, so contract inquiries don't get lost among home requests.",
      },
      {
        q: "Should a cleaning company advertising agency start with Local Services Ads or Google Ads?",
        a: "In most cases, both. Local Services Ads appear above everything else with a verified badge and bill per lead. Google Ads let us pick the keywords, schedule and landing page, which suits commercial searches. We usually launch one first, measure calls and bookings, then layer in the second.",
      },
      {
        q: "Can my cleaning company show up when people ask ChatGPT for a cleaner?",
        a: "Yes, when your details are easy to confirm. We match your business details on every listing, collect reviews that describe real visits, show your insurance and staff screening, and publish plain answers to common cleaning questions. Those signals give AI assistants good reason to suggest your company by name.",
      },
      {
        q: "How long does cleaning business SEO take to bring bookings?",
        a: "Maps fixes and ads usually move first. Search rankings for cleaning terms grow over several months, depending on how crowded your area is and where your site starts. Each monthly report tracks rankings, calls and new bookings, so progress is easy to follow.",
      },
      {
        q: "What should I look for in a cleaning company marketing company?",
        a: "Look for proof they understand recurring service work, not just one-off leads. Check that you'll own the website and ad accounts, that you can cancel any month, how calls are tracked and what the report shows. A good partner explains every channel in plain words and ties results to booked cleans.",
      },
      {
        q: "What does cleaning company marketing cost at Zonic Media?",
        a: "We offer three plans: $297, $750 or $1,500 monthly, with no long contract. You pay Google for ads yourself, and we charge a 0% markup on that spend. Solo cleaners in a few neighborhoods often start small; companies with several crews and commercial ads usually need a larger plan.",
      },
    ],
  },
  audit: {
    title: "Get a Free Cleaning Company Marketing Audit",
    lead: [
      "Share your service area and we'll check your Maps rank for house and office cleaning searches, compare your reviews and ",
      { href: "/services/web-design", label: "website" },
      " with the cleaners above you, and list the fixes that bring bookings first.",
    ],
    points: [
      "Billed month to month",
      "No markup on ad spend (0%)",
      "Reinstatement covered on all plans",
      "Plans start at $297 a month",
    ],
    form: {
      formType: "cleaning-company-marketing",
      badge: "Free cleaning audit",
      title: "Claim Your Free Cleaning Marketing Audit",
      subtitle: "Free, with no pressure to sign.",
      submitText: "Send My Cleaning Audit",
      messageLabel: "Your towns and cleaning services",
      messagePlaceholder:
        "Areas you clean, home or office work, and how many crews you run",
    },
  },
  banner: {
    title: "Be the Cleaner Families and Offices Call First",
    lead: "Start with a free marketing audit and a plain list of the first fixes to make.",
    icons: ["clean", "sparkle"],
  },
};
