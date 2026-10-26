/* Tree Service Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: tree service web design company
     49 impressions (pos 26.6) · tree service web design agency 41 (24.8)
     · tree service web design services 37 (30.6) · tree service web
     design 35 (36.9) · tree service web design experts 30 (34.6) · tree
     service website design 14 (35.1) · tree service website hosting 8
     (31.2).
   - Semrush US: tree service website design 210 (KD 3, easy win) · tree
     service websites 70 (67).
   - Web research (arborist hiring guides from university extension
     programmes, tree service website guides): homeowners check for
     certified arborists, insurance that covers tree work (certificates on
     request), written estimates and a local address, and are wary of
     out-of-town storm crews; storm visitors need a big call button and a
     storm page linked from the homepage; galleries with before, during
     and after shots of real jobs; separate pages for removal, pruning,
     stump grinding and crane work; a free on-site assessment as the main
     booking offer.
   Angle: credibility and safety first, with a storm-day path split from
   planned tree work (landscaping, the sister page, sells design work and
   lawn plans instead). Widget: on-site assessment booking. Rules kept:
   build time 2–3 weeks, no prices or figures, no company or brand named,
   verified numbers only, every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/tree-service-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by job urgency",
    business: "Your Tree Service Co.",
    domain: "yourtreeserviceco.com",
    nav: ["Removal", "Trimming", "Storm help", "Areas"],
    call: "Emergency line",
    primary: "Book an assessment",
    secondary: "Meet the arborists",
    proof: "Reviewed by homeowners nearby",
    bookTitle: "Book an on-site assessment",
    confirm: "Confirm my visit",
    serviceSubs: ["Certified arborists", "Fully insured", "Debris hauled away"],
    toast: "Assessment booked",
    toastNote: "Arborist calls ahead",
    phoneCta: "Book",
    modes: [
      {
        label: "Trimming & removal",
        icon: "tree",
        badge: "Free on-site assessment",
        headline: "Big Tree Too Close to the House? Let's Look.",
        sub: "Removal, pruning and stump grinding, planned by an arborist, cleaned up after.",
        services: ["Tree removal", "Pruning & trimming", "Stump grinding"],
        book: ["Tree removal", "Pruning", "Stump grinding"],
        img: {
          src: "/images/home-improvement-web/tree-service-first-impressions-1.webp",
          position: "40% 35%",
        },
      },
      {
        label: "Storm emergencies",
        icon: "storm",
        badge: "Storm damage · Crews on call",
        headline: "Tree Down After the Storm? Crews Roll Fast.",
        sub: "Trees off roofs, cars and driveways, cleared safely with photos for insurance.",
        services: [
          "Fallen tree removal",
          "Crane-assisted work",
          "Storm cleanup",
        ],
        book: ["Tree on house", "Blocked driveway", "Hanging limbs"],
        img: {
          src: "/images/home-improvement-web/tree-service-first-impressions-1.webp",
          position: "80% 40%",
          phonePosition: "75% 40%",
          zoom: 1.6,
        },
      },
    ],
    legend: [
      "Emergency call button",
      "Storm and tree care pages",
      "On-site assessment booking",
      "Always-visible call bar",
    ],
  },
  // Teal planned work, orange storm calls, then navy and lime (tones.ts).
  tones: tonesFor("tree-service-website-design"),
  serviceName: "Tree Service Website Design",
  audience: "tree service companies, arborists and tree removal crews",
  meta: {
    title: "Tree Service Website Design | Tree Service Web Design Pros",
    description:
      "Tree service website design for arborists and removal crews: storm call pages, on-site assessment booking, credential pages and hosting handled for you.",
    keywords: [
      "tree service website design",
      "tree service web design",
      "tree service web design company",
      "tree service web design agency",
      "tree service web design services",
      "tree service web design experts",
      "tree service websites",
      "tree service website hosting",
      "arborist website design",
      "tree removal website design",
      "tree care web design",
    ],
  },
  hero: {
    h1Lead: "Tree Service Website Design",
    h1Rest: "That Keeps Every Crew and Chipper Booked",
    icon: "tree",
    lead: [
      "We build tree service websites that prove your crew is certified, insured and local, give storm callers a direct line and let planned jobs book an on-site assessment. The ",
      { href: "/services/web-design", label: "custom website" },
      " we build for your crew launches in 2–3 weeks, and we keep hosting and care in hand after go-live.",
    ],
    cta: "Mock Up My Tree Service Homepage",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/tree-service-hero.webp",
        position: "40% center",
        query: "tree removal near me",
      },
      cardA: {
        icon: "tree",
        title: "Top Results for Tree Removal",
        sub: "Removal, trimming and stump pages that rank",
      },
      photoB: {
        src: "/images/home-improvement-web/tree-service-first-impressions-1.webp",
        position: "35% center",
        query: "emergency tree service",
      },
      cardB: {
        icon: "calendar",
        title: "Assessments Booked Every Week",
        sub: "Homeowners schedule visits from their phones",
      },
    },
  },
  showcase: {
    title: "Explore a Tree Service Website for Calm Days and Storm Days",
    lead: "Switch between planned tree work and storm calls to watch the homepage, booking and phone view respond.",
  },
  services: {
    title: "Tree Service Web Design\nBuilt for Arborists and Crews",
    lead: "Our tree service web design experts handle the planning, writing, building and upkeep.",
    cta: "Plan My Tree Service Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Websites for Tree Companies",
        desc: "Built around your services, equipment and service towns, with copy that speaks to worried homeowners and property managers.",
        points: [
          "Designed from scratch",
          "Town pages included",
          "Plain-language copy",
        ],
        links: [
          { href: "/services/web-design", label: "How we design websites" },
        ],
      },
      {
        icon: "storm",
        title: "24/7 Storm Response Pages",
        desc: "A storm page with a big call button, what to do right now and how insurance photos work, linked from the homepage.",
        points: [
          "Emergency call path",
          "Insurance photo tips",
          "After-hours alerts",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for storm calls" },
        ],
      },
      {
        icon: "tree",
        title: "Removal, Pruning and Stump Pages",
        desc: "A page for each job type, from crane removals to crown thinning and stump grinding, written to rank in your towns.",
        points: [
          "Crane removal page",
          "Pruning and thinning",
          "Stump grinding page",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-tree-service-companies",
            label: "Local SEO for tree companies",
          },
        ],
      },
      {
        icon: "award",
        title: "Credential and Insurance Pages",
        desc: "Certified arborist bios, insurance certificates on request and safety practices laid out so buyers trust the crew.",
        points: ["Arborist bios", "Coverage details", "Safety standards"],
        links: [],
      },
      {
        icon: "calendar",
        title: "Assessment Booking and Dispatch Sync",
        desc: "Homeowners pick a visit time online, and the request lands in your scheduling software with photos attached.",
        points: ["Online visit booking", "Photo uploads", "Software sync"],
        links: [
          {
            href: "/services/gmb-verification-help",
            label: "Google profile verification help",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting, Backups and Storm-Season Updates",
        desc: "Fast managed hosting, backups, security and updates, plus edits whenever you add a crew, a service or a town.",
        points: ["Managed hosting", "Regular backups", "Edits on request"],
        links: [],
      },
    ],
  },
  features: {
    title: "Tree Service Website Essentials We Never Skip",
    lead: "Built-in pieces that help a nervous homeowner pick up the phone.",
    items: [
      {
        icon: "phone",
        title: "Emergency Number Always in Reach",
        text: "A storm-line button stays pinned on every phone screen.",
      },
      {
        icon: "calendar",
        title: "Free Assessments Booked Online",
        text: "Homeowners choose a visit slot without waiting for a callback.",
      },
      {
        icon: "award",
        title: "Certified Arborists Front and Center",
        text: "Credentials and crew photos replace vague claims.",
      },
      {
        icon: "shield",
        title: "Insurance Proof on Request",
        text: "A clear note on coverage and how to get a certificate.",
      },
      {
        icon: "camera",
        title: "Job Photos Before, During and After",
        text: "Real removals and cleanups, captioned by service and town.",
      },
      {
        icon: "book",
        title: "Tree Health and Pruning Guides",
        text: "Short guides answer common care questions and earn searches.",
      },
      {
        icon: "pin",
        title: "Local Proof in Each Service Town",
        text: "Every town page shows jobs your crew finished nearby.",
      },
      {
        icon: "bolt",
        title: "Fast Loads During Outages",
        text: "Light pages open quickly on weak storm-day signal.",
      },
    ],
  },
  growth: {
    title: "How a Tree Service Website Wins Calls, Visits and AI Mentions",
    lead: "Rank for tree work nearby, book more on-site visits and get cited when people ask AI.",
    rank: {
      title: "Rank for Removal, Trimming and Stump Searches",
      body: [
        "Each job type and town gets a page aimed at what homeowners type, then rankings are checked every week. Combine it with ",
        {
          href: "/services/industry/local-seo-for-tree-service-companies",
          label: "tree service local SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google profile management",
        },
        " to show up on the map as well.",
      ],
      points: [
        "One page per job type",
        "Town-level targeting",
        "Weekly ranking checks",
        "Tree service schema",
      ],
      cta: "Plan My Tree Pages",
      keywords: [
        ["tree removal near me", 22, 3],
        ["stump grinding + city", 29, 4],
        ["emergency tree service", 33, 5],
        ["tree trimming company near me", 18, 2],
      ],
    },
    convert: {
      title: "Turn Worried Homeowners Into Booked Assessments",
      body: [
        "Storm callers get one big button, and everyone else books an on-site visit in a few taps. Each call and booking is tied to the search and page behind it, which shows exactly where your crews' work comes from.",
      ],
      points: [
        "Separate storm path",
        "Visit booking in taps",
        "Call source tracking",
        "Photo upload on mobile",
      ],
      cta: "Walk Me Through Booking",
      url: "yourtreeserviceco.com",
      headline: "Leaning Tree? Book a Free Assessment",
      services: ["Tree removal", "Pruning", "Stump grinding", "Storm cleanup"],
    },
    ai: {
      title: "Show Up When People Ask AI Who Removes Trees",
      body: [
        "Clear pages on removal, permits and storm steps give ChatGPT and Google AI Overviews facts worth citing. Our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        " work then tracks when your name appears.",
      ],
      points: [
        "Permit and safety FAQs",
        "Credentials marked up",
        "Clear service areas",
        "Monthly AI answer checks",
      ],
      cta: "See My AI Visibility",
      query: "who removes a fallen tree near me",
      intro: "For fallen tree removal in your area,",
      bullets: [
        "Certified arborists on staff",
        "Insured, local crews",
        "Quick storm response",
      ],
    },
  },
  sitemap: {
    title: "The Tree Service Site Map Behind Every Ranking Page",
    lead: "Every page targets one job or town, so traffic reaches the whole site.",
    home: "Your Tree Service Co. homepage",
    groups: [
      {
        name: "Tree Work",
        icon: "tree",
        pages: ["Tree removal", "Pruning and trimming", "Crane removals"],
      },
      {
        name: "Storm Help",
        icon: "storm",
        pages: ["Emergency service", "Storm cleanup", "Insurance photos"],
      },
      {
        name: "Stumps and Clearing",
        icon: "construction",
        pages: ["Stump grinding", "Land clearing", "Lot clearing for builders"],
      },
      {
        name: "Towns",
        icon: "pin",
        pages: ["Main service city", "Town pages", "Commercial accounts"],
      },
    ],
  },
  results: {
    title: "Where a Tree Service Website Takes You After Launch",
    lead: "Calls and assessments build as pages index, job photos pile up and reviews land.",
    cta: "Build My Storm-Ready Plan",
    milestones: [
      {
        when: "Launch week",
        title: "Calls and Visits Logged",
        text: "Storm calls and assessment bookings are tracked by page from day one.",
      },
      {
        when: "Month 1",
        title: "Job Pages Found by Google",
        text: "Removal, pruning and stump pages enter Google's index and begin appearing in nearby results.",
      },
      {
        when: "Months 2–3",
        title: "Town Pages Gain Ground",
        text: "Fresh reviews and job photos lift town pages for tree service searches.",
      },
      {
        when: "Storm season",
        title: "Ready When Trees Come Down",
        text: "The storm page and call bar catch urgent calls the moment bad weather hits.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "More Assessments, Less Phone Tag",
        text: "Homeowners book visits online and come to the call ready to talk.",
      },
      {
        icon: "award",
        title: "Trusted Before the First Call",
        text: "Credentials and insurance details set you apart from out-of-town storm crews.",
      },
      {
        icon: "storm",
        title: "Urgent Calls Routed to You",
        text: "Storm traffic lands on a page built for one action: calling.",
      },
      {
        icon: "trend",
        title: "Steady Pruning and Removal Leads",
        text: "Job pages keep pulling in planned work between storms.",
      },
    ],
    band: [
      {
        icon: "phone",
        value: "Storm Emergency Calls",
        label: "A fast path when trees come down",
      },
      {
        icon: "shield",
        value: "Safety You Can See",
        label: "Insurance, certifications and crew photos shown",
      },
      {
        icon: "calendar",
        value: "Assessment Bookings",
        label: "Free on-site visits scheduled online",
      },
      {
        icon: "search",
        value: "Ranked Across Your Area",
        label: "City pages for removal and trimming searches",
      },
    ],
  },
  process: {
    title: "How a Tree Service Website Comes Together in 2–3 Weeks",
    lead: "One kickoff call, a mockup you can react to early and a go-live date fixed up front.",
    items: [
      {
        when: "Week 1",
        h: "Crew, Gear and Mockup",
        p: "We list your services, equipment and towns; a homepage mockup follows for you to review.",
      },
      {
        when: "Weeks 1–2",
        h: "Storm and Service Copy",
        p: "Our writers draft removal, pruning and storm pages around your job photos.",
      },
      {
        when: "Weeks 2–3",
        h: "Booking, Hosting and SEO",
        p: "Booking, call tracking, hosting, schema and redirects are configured and checked twice.",
      },
      {
        when: "Launch",
        h: "Launch and Watch the Phones",
        p: "Your new site goes public, and page tweaks follow from the calls and bookings it brings in.",
      },
    ],
  },
  compare: {
    title: "Why a Tree Service Website Beats a Shared Directory Listing",
    lead: "A directory puts rival tree crews right beside your name. Your own site doesn't.",
    otherLabel: "Shared directory listing",
    rows: [
      {
        topic: "Storm-day calls",
        other: "Callers see other tree companies on the same page.",
        zonic: "A storm page where your number is the only option.",
      },
      {
        topic: "Arborist credentials",
        other: "Maybe a tiny badge, with nothing to back it up.",
        zonic: "Arborist bios, insurance notes and safety standards.",
      },
      {
        topic: "Job types",
        other: "One generic category for all tree work.",
        zonic: "Separate pages for removal, pruning, stumps and crane work.",
      },
      {
        topic: "Assessment booking",
        other: "A message form the directory controls.",
        zonic: "Online visit booking that feeds your own calendar.",
      },
      {
        topic: "Photos and proof",
        other: "A few photos you can't arrange or caption.",
        zonic: "Captioned before, during and after shots from your crews.",
      },
      {
        topic: "Whose leads they are",
        other: "The listing and its leads belong to the platform.",
        zonic: "A site, domain and lead data that stay yours.",
      },
    ],
  },
  reviews: {
    title: "Our 5.0 Google Reviews Come From Real Business Owners",
    lead: "Each one is posted publicly on our Google profile.",
  },
  pricing: {
    title: "Plans That Keep a Tree Service Website Growing",
    compareTitle: "Side-by-Side Plans for Tree Care Sites",
    addOnsTitle: "Tree Service Add-Ons and Extra Pages",
    customTitle: "Multiple Yards or Crews Across Regions?",
  },
  faq: {
    title: "Tree Service Website Design, Answered Plainly",
    lead: "Budget, launch time, storm calls, hosting and what to put on a tree service website.",
    items: [
      {
        q: "How much should a tree service website cost?",
        a: "Once a free call covers your services, towns and booking needs, we quote one flat price that holds from kickoff to launch. Add a qualifying monthly growth plan and our website offer covers the build, so the site costs you nothing up front.",
      },
      {
        q: "How long until my tree service website is live?",
        a: "Expect 2–3 weeks. By the end of week one you'll have a homepage mockup to review, our writers and designers build the storm and service pages next, and booking, call tracking, hosting and redirects are finished and tested before the site goes live on the agreed date.",
      },
      {
        q: "What should a tree service website include?",
        a: "A storm call button on every screen, online booking for free assessments, separate pages for removal, pruning, stump grinding and crane work, arborist bios, insurance details, before-and-after job photos, city pages across your coverage area and reviews beside each booking button.",
      },
      {
        q: "How do I get more storm and emergency calls from my website?",
        a: "Give storm visitors their own page with one large call button, simple steps to stay safe and a note on insurance photos, and link it from the homepage. Fast pages matter when power is out, and a storm ad campaign can point straight to that page.",
      },
      {
        q: "Should I show arborist certifications and insurance on my site?",
        a: "Yes. Homeowners are told to check for certified arborists and insurance that covers tree work before hiring. Showing credentials, crew bios and how to request a certificate of insurance builds trust, and it separates your company from crews that roll in after storms.",
      },
      {
        q: "Do you offer tree service website hosting?",
        a: "Yes. We host your site on fast, secure servers, keep software updated, run backups and watch uptime, so pages stay online when storm traffic spikes. Edits are handled whenever you ask, and the domain stays registered in your company's name, not ours.",
      },
      {
        q: "I rank for a few tree searches now. Is a new site risky?",
        a: "Not when the switch is planned. Before launch we catalogue each existing URL, hold on to pages that already bring calls, add redirects where addresses change and hand Google an updated sitemap. Rankings, calls and bookings are watched closely in the weeks after go-live.",
      },
      {
        q: "Can customers book an estimate or assessment online?",
        a: "Yes. Homeowners choose a service, pick a time for an on-site assessment and upload photos of the tree or the damage. Each request drops into your scheduling software, and you can confirm by text, which cuts down on back-and-forth calls with the office.",
      },
      {
        q: "Do I need separate pages for stump grinding and tree removal?",
        a: "Yes. People search for each service separately, so a stump grinding page, a removal page and a pruning page can each rank on their own. Separate pages also let you show the right photos and answer questions specific to each job.",
      },
    ],
  },
  consult: {
    title: "A Free Tree Service Homepage Draft, No Strings",
    lead: [
      "Share your services, equipment and the towns you work in, and our designers return a homepage mockup plus a page plan for free. Rather talk it through? ",
      { href: "/contact-us", label: "Phone or email us" },
      ", meet ",
      { href: "/about", label: "the Zonic crew" },
      ", browse ",
      { href: "/services", label: "everything we offer" },
      " or read how ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Google profile reinstatement",
      },
      " works. The map side is explained in our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home services",
      },
      " guide.",
    ],
    points: [
      "No-charge homepage mockup",
      "Storm page plan",
      "Booking and hosting advice",
      "Go live in 2–3 weeks",
    ],
    form: {
      formType: "tree-service-website-design",
      badge: "Free tree service mockup",
      title: "Book a Free Tree Service Site Mockup",
      subtitle: "Free and no obligation.",
      submitText: "Start My Tree Service Mockup",
      messageLabel: "Your tree company, crews and services",
      messagePlaceholder:
        "Company name, current site, services like removal or stump grinding, and towns you cover",
    },
  },
  banner: {
    title: "Give Storm Callers and Planners One Clear Number",
    lead: "Credentials up front, assessments booked online and a storm line on every screen.",
  },
};
