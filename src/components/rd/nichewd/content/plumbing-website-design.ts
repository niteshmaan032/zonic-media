/* Plumbing Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: website design for plumbers long
     beach 65 impressions (pos 22.5) · plumbing web design agency 50 (33.7)
     · plumbing website design company 48 (30.5) · plumbing web design
     company 38 (32.9) · plumber web design company 29 (29.0) · sewer
     repair website design 28 (6.5) · plumber website design company 23
     (33.6).
   - Semrush US: plumbing websites 880 (KD 14) · plumber website design 590
     (23) · plumbing website design 590 (19) · plumber websites 480 (17) ·
     plumbing web design 210 (15).
   - Web research (plumbing site guides, cost guides, booking guides):
     online booking is now expected and must book straight into the real
     schedule; most bookings start on a phone; state an arrival window;
     emergencies need a call-first path with no form; dedicated pages per
     service (sewer, drains, water heaters, tankless) for local search;
     licenses, team photos and reviews as trust signals; financing and
     decision help for high-ticket installs; the number of town pages
     drives build scope. People also ask what a plumbing website costs and
     whether plumbers need a site when they have a Google profile.
   Angle: the emergency call vs planned work split, sewer/drain/water
   heater pages, after-hours booking. Rules kept: build time 2–3 weeks, no
   prices, no company or software named, verified numbers only, every live
   content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/plumbing-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example plumbing site by job type",
    business: "Your Plumbing Co.",
    domain: "yourplumbingco.com",
    nav: ["Emergency", "Water heaters", "Drains", "Areas"],
    call: "Call 24/7",
    primary: "Book a plumber",
    secondary: "Meet our plumbers",
    proof: "Rated by neighbors across town",
    bookTitle: "Schedule a plumber",
    confirm: "Lock in my time",
    serviceSubs: [
      "Licensed and insured",
      "Pick a slot online",
      "Clean-up included",
    ],
    toast: "Plumber booked",
    toastNote: "Tech en route today",
    phoneCta: "Book",
    modes: [
      {
        label: "Emergency",
        icon: "waterDamage",
        badge: "24/7 emergency · Fast arrival",
        headline: "Burst Pipe? A Plumber Can Be There Tonight.",
        sub: "Leaks, clogs and no hot water handled day or night across your area.",
        services: ["Burst pipe repair", "Sewer backup", "No hot water"],
        book: ["Burst pipe", "Sewer backup", "No hot water"],
        img: {
          src: "/images/free-website/free-plumbing/emergency-plumbing.webp",
          position: "55% 45%",
        },
      },
      {
        label: "Planned work",
        icon: "plumbing",
        badge: "Installs · Pick your day",
        headline: "New Water Heater? Choose a Day That Suits You.",
        sub: "Water heater installs, repiping and drain service, booked in minutes.",
        services: [
          "Water heater install",
          "Whole-home repiping",
          "Drain cleaning",
        ],
        book: ["Water heater", "Repiping quote", "Drain cleaning"],
        img: {
          src: "/images/free-website/free-plumbing/water-heater.webp",
          position: "60% 40%",
        },
      },
    ],
    legend: [
      "24/7 call button",
      "Emergency and planned-work pages",
      "Online plumber scheduling",
      "Tap-to-call bar on phones",
    ],
  },
  // Emergency navy, planned work cyan, then orange and lime (tones.ts).
  tones: tonesFor("plumbing-website-design"),
  serviceName: "Plumbing Website Design",
  audience: "plumbers and plumbing companies",
  meta: {
    title: "Plumbing Website Design Company | Plumber Web Design",
    description:
      "Plumbing website design company building plumber websites with 24/7 booking, emergency and sewer repair pages, and town pages that rank and fill your schedule.",
    keywords: [
      "plumbing website design",
      "plumbing web design",
      "plumber website design",
      "plumbing websites",
      "plumber websites",
      "plumbing website design company",
      "plumbing web design company",
      "plumbing web design agency",
      "plumber web design company",
      "plumber website design company",
      "website design for plumbers",
      "sewer repair website design",
    ],
  },
  hero: {
    h1Lead: "Plumbing Website Design",
    h1Rest: "That Gets the Call Before the Water Spreads",
    icon: "plumbing",
    lead: [
      "Our plumber websites put a 24/7 call button in front of every homeowner with water on the floor, and let planned jobs like water heater swaps book themselves online. You get a ",
      { href: "/services/web-design", label: "custom website" },
      " that launches in 2–3 weeks and arrives with sewer, drain and town pages.",
    ],
    cta: "Get My Free Plumbing Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/plumbing-web/hero-image-primary-v3.webp",
        position: "35% center",
        query: "plumbing website design",
      },
      cardA: {
        icon: "drop",
        title: "First Call on Leak Searches",
        sub: "Emergency pages built for local Google",
      },
      photoB: {
        src: "/images/plumbing-web/every-service-line-image.webp",
        position: "center 40%",
        query: "emergency plumber near me",
      },
      cardB: {
        icon: "calendar",
        title: "Water Heater Installs Booked Online",
        sub: "Planned jobs scheduled while the office sleeps",
      },
    },
  },
  showcase: {
    title: "Try a Plumbing Website Built for Two Kinds of Calls",
    lead: "Flip between emergency and planned work to see the headline, booking slots and phone screen change.",
  },
  services: {
    title: "What Our Plumbing Web Design\nCompany Builds for You",
    lead: "One team plans, writes, builds and looks after your plumbing site, so you can stay on the tools.",
    cta: "Plan My Plumbing Website",
    items: [
      {
        icon: "monitor",
        title: "Plumber Websites Designed From Scratch",
        desc: "A site mapped to the jobs you want more of, written for urgent callers and homeowners planning ahead.",
        points: [
          "Designed around your jobs",
          "Written by our team",
          "Built mobile-first",
        ],
        links: [{ href: "/services/web-design", label: "Custom web design" }],
      },
      {
        icon: "waterDamage",
        title: "Emergency and Leak Landing Pages",
        desc: "Fast pages for burst pipes, slab leaks and backed-up sewers that put the phone number first and skip long forms.",
        points: [
          "Call-first layout",
          "After-hours messaging",
          "Ready for paid ads",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for plumbers" },
        ],
      },
      {
        icon: "plumbing",
        title: "Sewer, Drain and Water Heater Pages",
        desc: "A page for each money service, from sewer repair and hydro jetting to tankless installs.",
        points: [
          "Sewer repair pages",
          "Tank and tankless installs",
          "Drain cleaning pages",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-plumber",
            label: "SEO for plumbers",
          },
        ],
      },
      {
        icon: "calendar",
        title: "Online Booking Tied to Dispatch",
        desc: "Booking that reads your real availability and sends each job to your scheduling software, address and issue attached.",
        points: ["Real-time slots", "Job type questions", "Text confirmations"],
        links: [],
      },
      {
        icon: "repeat",
        title: "Plumbing Site Redesigns, Rankings Intact",
        desc: "We rebuild dated plumber websites while keeping the URLs, reviews and pages that already bring in work.",
        points: ["Every URL mapped", "301 redirects set", "Speed rebuilt"],
        links: [],
      },
      {
        icon: "shield",
        title: "Hosting, Updates and a Free Site Offer",
        desc: "We host, secure and update the site and make edits on request. A free plumbing site comes with a qualifying growth plan.",
        points: ["Managed hosting", "Edits on request", "Backups and SSL"],
        links: [
          {
            href: "/plumber-website-design-agency-us/offer",
            label: "Free plumber website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Plumbing Website Features That Earn the Call",
    lead: "Small details that help a stressed homeowner pick you and book fast.",
    items: [
      {
        icon: "phone",
        title: "Tap-to-Call on Every Page",
        text: "The number stays pinned to the screen while visitors scroll on a phone.",
      },
      {
        icon: "clock",
        title: "Clear Arrival Windows",
        text: "Each page says when a plumber can arrive, so nobody is left guessing.",
      },
      {
        icon: "waterDamage",
        title: "A Shortcut for Water Emergencies",
        text: "Burst-pipe visitors get one big button and a short checklist, not a form.",
      },
      {
        icon: "users",
        title: "Faces of Your Plumbers",
        text: "Real team photos and licenses help homeowners feel safe opening the door.",
      },
      {
        icon: "star",
        title: "Ratings Where People Decide",
        text: "Recent Google reviews sit right beside the call and booking buttons.",
      },
      {
        icon: "pin",
        title: "Town Pages With Real Jobs",
        text: "Each town page shows local work and reviews, not just a swapped name.",
      },
      {
        icon: "bolt",
        title: "Pages That Load on One Bar",
        text: "Light code keeps pages quick, even on a weak signal in a basement.",
      },
      {
        icon: "search",
        title: "Plumber Schema Built In",
        text: "Plumber, service and review markup help Google understand every page.",
      },
    ],
  },
  growth: {
    title: "Plumber Websites That Rank, Ring and Get Recommended",
    lead: "Rank nearby, turn phone visits into jobs and get named when people ask AI for a plumber.",
    rank: {
      title: "Show Up When Neighbors Search for a Plumber",
      body: [
        "Each service and town page targets a real search, from sewer line repair to tankless water heater installs, and we report where it ranks each week. Add ",
        {
          href: "/services/industry/seo-services-for-plumber",
          label: "plumber SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "a tuned-up Google Business Profile",
        },
        " and you can hold a spot in the map pack too.",
      ],
      points: [
        "Pages per service",
        "Pages per town",
        "Rank reports weekly",
        "Plumber schema",
      ],
      cta: "Map My Plumbing Pages",
      keywords: [
        ["emergency plumber near me", 24, 3],
        ["water heater installation + your city", 31, 4],
        ["sewer line repair near me", 19, 2],
        ["drain cleaning service", 27, 5],
      ],
    },
    convert: {
      title: "Turn a Leak on the Floor Into a Booked Job",
      body: [
        "A pinned call button, a two-tap booking flow and stated arrival windows turn more phone visits into jobs. Each call is logged against the page that won it, and ",
        {
          href: "/services/plumbing-marketing-agency",
          label: "plumbing marketing",
        },
        " can push more traffic to the pages that book best.",
      ],
      points: [
        "Pinned call button",
        "Two-tap booking",
        "Calls tracked by page",
        "Quick on phones",
      ],
      cta: "See a Plumbing Booking Flow",
      url: "yourplumbingco.com",
      headline: "Leak? Book a Plumber Now",
      services: ["Burst pipe", "Water heater", "Drain clog", "Sewer line"],
    },
    ai: {
      title: "Be the Plumber AI Assistants Recommend",
      body: [
        "Ask ChatGPT or a Google AI Overview who fixes sewer lines nearby, and the answer leans on pages that explain the job clearly. We write those pages, add structured data and check citations through our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Direct-answer FAQs",
        "Local business markup",
        "Tidy page structure",
        "Citation tracking",
      ],
      cta: "Test My AI Visibility",
      query: "who can fix a sewer line near me",
      intro: "For sewer line repair close by,",
      bullets: [
        "Camera inspections explained",
        "Trenchless options listed",
        "Fresh local reviews",
      ],
    },
  },
  sitemap: {
    title: "A Page for Every Plumbing Job You Want More Of",
    lead: "Each page answers one homeowner search, so leak, sewer and heater jobs all find you.",
    home: "Your Plumbing Co. homepage",
    groups: [
      {
        name: "Emergency Plumbing",
        icon: "waterDamage",
        pages: ["Burst pipes", "Leak detection", "Sewer backups"],
      },
      {
        name: "Water Heaters",
        icon: "flame",
        pages: ["Tank water heaters", "Tankless installs", "Heater repair"],
      },
      {
        name: "Drains and Sewer",
        icon: "plumbing",
        pages: ["Drain cleaning", "Sewer line repair", "Camera inspection"],
      },
      {
        name: "Towns You Cover",
        icon: "pin",
        pages: ["Home city", "Nearby towns", "Neighborhood guides"],
      },
    ],
  },
  results: {
    title: "The First Months on Your New Plumbing Website",
    lead: "Progress builds as Google finds your pages and after-hours bookings start to land.",
    cta: "Plan My Plumbing Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Every Call Has a Source",
        text: "Call tracking and online booking switch on with the site, so you know which page rang.",
      },
      {
        when: "Month 1",
        title: "New Pages Get Found",
        text: "Search engines index each sewer, drain and town page, and they begin appearing for nearby searches.",
      },
      {
        when: "Months 2–3",
        title: "Steady Climb in Nearby Searches",
        text: "Town and service pages move up as reviews grow and links point to the new site.",
      },
      {
        when: "Freeze season",
        title: "Ready When Pipes Burst",
        text: "Emergency pages and after-hours booking catch the rush of frozen and burst pipe calls.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Jobs Booked Overnight",
        text: "Planned work lands in your schedule while the office is closed.",
      },
      {
        icon: "phone",
        title: "More Calls From Mobile Searches",
        text: "One tap takes a homeowner from a search result to your phone ringing.",
      },
      {
        icon: "trend",
        title: "Rankings That Keep Paying",
        text: "Sewer, drain and heater pages keep pulling in searches long after launch.",
      },
      {
        icon: "users",
        title: "Trust Before the Truck Arrives",
        text: "Team photos, licenses and reviews make homeowners comfortable saying yes.",
      },
    ],
    band: [
      {
        icon: "phone",
        value: "Emergency Calls Answered",
        label: "A tap-to-call path for burst pipes and backups",
      },
      {
        icon: "trend",
        value: "Bigger Plumbing Jobs",
        label: "Water heater and repipe pages that sell the big work",
      },
      {
        icon: "pin",
        value: "Found in Every ZIP",
        label: "Neighborhood pages for the areas you drive",
      },
      {
        icon: "award",
        value: "Pro From the First Scroll",
        label: "Clean design that makes a small shop look established",
      },
    ],
  },
  process: {
    title: "From Kickoff to a Live Plumbing Site in 2–3 Weeks",
    lead: "You get a free mockup first and a launch date before any build starts.",
    items: [
      {
        when: "Week 1",
        h: "Job Mix, Towns and Mockup",
        p: "We list the jobs you want more of, your towns and your software, then mock up the homepage.",
      },
      {
        when: "Weeks 1–2",
        h: "Pages Written for Plumbing",
        p: "Our writers and designers shape each page around how homeowners describe the problem.",
      },
      {
        when: "Weeks 2–3",
        h: "Booking, Tracking and Redirects",
        p: "We connect booking and call tracking, add schema and point old URLs to their new pages.",
      },
      {
        when: "Launch",
        h: "Live, Watched and Tuned",
        p: "We switch the site on, watch incoming calls and refine any page that needs a push.",
      },
    ],
  },
  compare: {
    title: "A Custom Plumber Website or a DIY Builder Site?",
    lead: "Why a site planned for plumbers out-books a drag-and-drop kit.",
    otherLabel: "DIY builder site",
    rows: [
      {
        topic: "Burst-pipe callers",
        other: "A number in small print that's hard to tap on a phone.",
        zonic:
          "A pinned call button and a one-tap emergency path on every page.",
      },
      {
        topic: "Sewer and drain work",
        other: "One services page listing everything in a single paragraph.",
        zonic:
          "A dedicated page each for sewer repair, jetting and drain cleaning.",
      },
      {
        topic: "Water heater sales",
        other: "No room to explain tank vs tankless or payment options.",
        zonic: "Install pages that compare options and book a quote visit.",
      },
      {
        topic: "Arrival times",
        other: "A form that promises someone will be in touch.",
        zonic: "Clear arrival windows and booking that shows real open slots.",
      },
      {
        topic: "Town coverage",
        other: "A list of town names crammed into the footer.",
        zonic: "Separate town pages with local jobs, photos and reviews.",
      },
      {
        topic: "Ownership and upkeep",
        other: "You fix plugins, backups and broken layouts yourself.",
        zonic: "We host, update and edit it, and the domain stays yours.",
      },
    ],
  },
  reviews: {
    title: "Hiring a Web Team? Start With Our 5.0 Google Reviews",
    lead: "Real reviews left by business owners on our Google profile, shown unedited.",
  },
  pricing: {
    title: "Growth Plans for Your Plumbing Website",
    compareTitle: "Compare What Each Plan Does for a Plumber",
    addOnsTitle: "Optional Extras for Plumbing Company Sites",
    customTitle: "Running Several Plumbing Locations?",
  },
  faq: {
    title: "What Plumbers Ask Before a New Plumbing Website",
    lead: "Straight answers on cost, timing, booking tools and what a plumber website needs.",
    items: [
      {
        q: "How much does a plumbing website cost?",
        a: "We price each plumbing build after a free call to learn your services, service area and booking setup, then give you one fixed quote that won't creep up mid-project. Bundle it with a qualifying growth plan, billed monthly, and you pay nothing for the plumbing website itself under our plumber website offer.",
      },
      {
        q: "What is the timeline for a new plumber website?",
        a: "Expect 2–3 weeks between our kickoff call and launch day. You see a homepage mockup first, our team then writes and designs each page, and we test online booking, call tracking and every redirect before going live, with your sign-off at each stage.",
      },
      {
        q: "What should a plumbing company website include?",
        a: "A tap-to-call number on every screen, online booking with real slots, a separate route for emergencies, one page per service such as sewer repair, drains and water heaters, town pages, reviews beside the buttons, license details and fast mobile pages.",
      },
      {
        q: "Will a new website hurt my plumbing rankings?",
        a: "Careful planning keeps them where they are. We record every current URL, carry over the pages that bring in calls, point old addresses to new ones with 301 redirects and resubmit the sitemap, then track rankings and call volume through the first month.",
      },
      {
        q: "Do plumbers need a website if they have a Google Business Profile?",
        a: "Yes. Your profile gets you onto the map, but it can't hold a page for every service, explain water heater options or take bookings the way a site can. Google also leans on your website to judge which searches your profile should appear for.",
      },
      {
        q: "Can customers book a plumber online after hours?",
        a: "Yes. Visitors choose the problem, pick an open slot and get a text confirmation, even at midnight. True emergencies are routed to your on-call number instead, so a burst pipe never sits in an inbox until morning while the water keeps spreading.",
      },
      {
        q: "Can the site connect to my scheduling software?",
        a: "Yes. We connect booking forms to the field service and dispatch tools plumbing shops already use, so each request arrives with the address, issue and photos attached. No software yet? We set up a simple online calendar your office can manage from any phone.",
      },
      {
        q: "Do you build pages for sewer repair and other specialty work?",
        a: "Yes. Sewer line repair, trenchless work, hydro jetting, water filtration, gas lines and backflow testing can each get their own page. Specialty services usually face fewer competing results, so they are worth building early, and each page ends with a clear way to book.",
      },
    ],
  },
  consult: {
    title: "See Your New Plumbing Homepage Before You Commit",
    lead: [
      "Share your services, towns and current site, and we'll send a free homepage mockup with a page plan. Rather talk first? ",
      { href: "/contact-us", label: "Contact our team" },
      ", read ",
      { href: "/about", label: "about Zonic" },
      ", browse ",
      { href: "/services", label: "our full service menu" },
      " or let us fix a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google Business Profile",
      },
      ". Our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home services",
      },
      " page shows how plumbers win the map too.",
    ],
    points: [
      "A free mockup of your homepage",
      "Page and town plan",
      "Booking and dispatch advice",
      "Launch in 2–3 weeks",
    ],
    form: {
      formType: "plumbing-website-design",
      badge: "Free plumbing homepage mockup",
      title: "Book Your Free Plumbing Mockup",
      subtitle: "No cost and no obligation.",
      submitText: "Send My Plumbing Mockup Request",
      messageLabel: "Your plumbing company and current site",
      messagePlaceholder:
        "Company name, website (if you have one), the jobs you want more of and the towns you serve",
    },
  },
  banner: {
    title: "Be the Plumber Homeowners Reach First",
    lead: "Emergency pages, online booking and a phone button that stays on screen.",
  },
};
