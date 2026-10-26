/* HVAC marketing agency redesign draft, v3 copy (24 Oct 2026).

   Owner rule (24 Oct): no copy, figures or FAQs carried over from the old
   live page. Everything here is written fresh from Semrush US data pulled
   on 24 Oct 2026:
   - agency terms: hvac marketing agency 2,900 (KD 9) · hvac marketing
     company 1,900 · hvac lead generation / hvac leads 1,300 · hvac digital
     marketing 1,600 · hvac marketing ideas 1,300 · hvac ppc 1,000 · hvac
     marketing strategies 1,000 · hvac social media marketing 1,000 (KD 13)
     · hvac email marketing 590 (KD 5);
   - questions: how to get hvac leads 260 · how to market your hvac
     business 210 · how to get more hvac leads 170 · what is hvac marketing
     · what does hvac digital marketing include;
   The volumes above guided the copy but are not shown on the page (owner,
   25 Oct: no Semrush figures, CPCs or prices outside the plan FAQ). The
   only figures are the sitewide verified numbers (900+ reinstated,
   $297 / $750 / $1,500 plans, 0% ad-spend markup). No third-party company is named in a claim. "HVAC SEO"
   is left to /services/industry/local-seo-services-for-hvac (linked, not
   targeted here) so the two pages don't compete. */

export const SERVICES = [
  {
    title: "Google Business Profile & Map Pack",
    desc: "Categories, services, photos and offers set up so you land in the top three when homeowners search for AC or furnace repair.",
    href: "/local-seo-google-business-optimization",
    link: "Profile optimization",
    points: [
      "Full profile rebuild",
      "Products & Q&A set up",
      "GBP reinstatement included",
    ],
  },
  {
    title: "HVAC SEO",
    desc: "A page for every service and town you cover, plus citations and schema, so Google ranks you for the jobs you want.",
    href: "/services/industry/local-seo-services-for-hvac",
    link: "Local SEO for HVAC",
    points: [
      "AC, furnace & heat pump pages",
      "Local citation building",
      "Monthly ranking reports",
    ],
  },
  {
    title: "HVAC PPC & Local Services Ads",
    desc: "Google Ads and Local Services Ads on emergency and install searches, with budgets raised before each busy season.",
    href: "/services/google-ads",
    link: "Google Ads management",
    points: [
      "Google Guaranteed setup",
      "Emergency & seasonal keywords",
      "0% ad-spend markup",
    ],
  },
  {
    title: "HVAC Website Design",
    desc: "HVAC websites built for phones: quick to load, click-to-call on every page, online booking and service pages that rank.",
    href: "/services/hvac-website-design",
    link: "HVAC website design",
    points: [
      "Emergency call button up top",
      "Call & form tracking",
      "Built for local SEO",
    ],
  },
  {
    title: "Reviews & Reputation",
    desc: "A review request after every job keeps fresh 5-star reviews coming in, the first thing homeowners and Google check.",
    href: "/services/local-seo-for-home-services",
    link: "Local SEO for home services",
    points: [
      "Text & email review requests",
      "Replies written for you",
      "Review widget on your site",
    ],
  },
  {
    title: "HVAC Maintenance Plans",
    desc: "Tune-up club pages and seasonal reminders that turn one-off repairs into twice-a-year visits.",
    href: "#hv-audit",
    link: "Plan my membership program",
    points: [
      "Membership signup page",
      "Spring & fall tune-up reminders",
      "Renewal texts & emails",
    ],
  },
];

export const STATES = [
  { name: "Florida", slug: "florida", cities: "Miami · Tampa · Orlando" },
  { name: "Texas", slug: "texas", cities: "Houston · Dallas · Austin" },
  {
    name: "California",
    slug: "california",
    cities: "LA · San Diego · Sacramento",
  },
  { name: "Arizona", slug: "arizona", cities: "Phoenix · Tucson · Mesa" },
  {
    name: "Illinois",
    slug: "illinois",
    cities: "Chicago · Aurora · Naperville",
  },
  { name: "Georgia", slug: "georgia", cities: "Atlanta · Augusta · Savannah" },
  {
    name: "North Carolina",
    slug: "north-carolina",
    cities: "Charlotte · Raleigh · Durham",
  },
];

/* The HVAC services we market and what we run for each (owner, 24 Oct:
   show what we do per service, not search volumes). */
export const SPECIALTIES: [name: string, tactic: string][] = [
  ["AC Repair and New Systems", "24/7 call ads and a top-3 Map Pack spot"],
  ["Furnace and Heat Repair", "Winter ad schedules and no-heat service pages"],
  ["Heat Pump Installs", "Install pages with quote and financing forms"],
  [
    "Emergency & 24-Hour Service",
    "Call-only ads that keep running after hours",
  ],
  ["Ductless Mini-Splits", "Quote-request pages for single-room comfort"],
  ["Tune-Ups & Maintenance", "Spring and fall offers sent to past customers"],
  [
    "Duct Cleaning & Air Quality",
    "Add-on offers in follow-up texts and emails",
  ],
  ["Commercial HVAC Service", "B2B service pages and contract-focused ads"],
];

export const STEPS = [
  {
    h: "Free HVAC Marketing Audit",
    p: "We search your services the way homeowners do and show where you rank, who outranks you and the quickest wins.",
  },
  {
    h: "A Plan Built Around Your Peaks",
    p: "We pick the services, towns and ad budget to push first, timed so you're ranking before summer and winter demand.",
  },
  {
    h: "Launch, Track, Report",
    p: "Profile, pages, ads and review requests go live. Each month you see rankings, calls and booked jobs in one report.",
  },
];

/* Shared vs own leads. No platform names and no unsourced prices (owner,
   24 Oct: naming lead platforms is a legal risk). Each row is true of
   shared leads by definition. */
export const LEAD_ROWS: [string, string, string][] = [
  ["Who gets the lead", "Several contractors", "Only your company"],
  [
    "What you pay for",
    "Every lead, booked or not",
    "Rankings, site and ads you own",
  ],
  ["When you stop paying", "Leads stop", "Rankings and reviews keep working"],
  [
    "Repeat business",
    "Starts over every job",
    "Yours: tune-ups and memberships",
  ],
];

/* FAQs written fresh around the Semrush questions (owner, 24 Oct: nothing
   from the old page). Shared with the FAQPage JSON-LD. */
export const FAQS = [
  {
    q: "What is HVAC marketing, and what does an HVAC marketing consultant do?",
    a: "HVAC marketing is how heating and cooling contractors get found and chosen by homeowners: Map Pack and search rankings, Google Ads and Local Services Ads, a website that turns visits into calls, and steady reviews. A consultant plans it; we plan it and run it, then report on calls and booked jobs, not clicks.",
  },
  {
    q: "How do I market my HVAC business online?",
    a: "Start where homeowners look when something breaks: a complete Google Business Profile, a fast mobile website with a page for each service and town, and fresh reviews. Then add Google Ads and Local Services Ads for emergency searches, and social media and email to bring past customers back for tune-ups.",
  },
  {
    q: "How can HVAC companies get more leads?",
    a: "Own the searches that bring calls. Rank in the Map Pack for searches like “AC repair near me”, run ads on emergency searches before your busy season, put click-to-call on every page and ask for a review after every job. Leads from your own profile, website and ads come only to you.",
  },
  {
    q: "What does HVAC digital marketing include?",
    a: "With Zonic Media it covers Google Business Profile optimization, HVAC SEO (service and town pages, citations and schema), Google Ads and Local Services Ads management, website design, review automation and monthly reporting. Our Authority plan adds social media management on up to two platforms.",
  },
  {
    q: "How much does HVAC marketing cost?",
    a: "Our HVAC marketing plans are $297, $750 and $1,500 a month, month to month. Ad spend is paid separately with a 0% markup, and every plan covers Google Business Profile reinstatement.",
  },
  {
    q: "How long until HVAC marketing brings more calls?",
    a: "Google Ads and Local Services Ads can bring calls as soon as they go live. Map Pack and search rankings build over months, faster in smaller towns than in big metros, which is why we start before your busy season.",
  },
  {
    q: "Is SEO or Google Ads better for an HVAC company?",
    a: "Both, for different jobs. HVAC PPC and Local Services Ads bring calls quickly and cover your peak weeks. SEO and your Google Business Profile take longer but keep bringing calls without paying for each click. Most contractors run both and shift budget toward SEO as rankings grow.",
  },
  {
    q: "What are the best HVAC marketing ideas for 2026?",
    a: "Market ahead of each peak: tune-up offers in spring and fall, emergency ads during heat waves and cold snaps, a maintenance membership, automatic review requests, heat pump and mini-split pages, short job videos for social media and email reminders to past customers.",
  },
  {
    q: "Can you help my HVAC company show up in ChatGPT and Google AI Overviews?",
    a: "Yes. AI assistants recommend HVAC contractors they can verify: a complete, consistent Google Business Profile, matching business details across directories, recent reviews that mention services and towns, and clear service pages with FAQ answers. We build all of that into every HVAC program.",
  },
  {
    q: "What happens if my Google Business Profile gets suspended?",
    a: "We get it back. Every plan covers reinstatement, and we've reinstated 900+ profiles. We also fix duplicate listings and service-area settings, the most common reasons profiles get suspended.",
  },
];
