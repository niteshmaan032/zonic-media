/* HVAC Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, URLs containing "hvac-website-design": hvac
     website design agency 169 impressions (pos 39.9) · hvac website design
     services 163 (28.0) · hvac web design agency 114 (47.5) · hvac web
     design services 105 (34.9) · hvac website design companies 98 (34.7) ·
     hvac company web design services 95 (25.7) · hvac web design company
     93 (41.4) · hvac website design company 87 (31.1).
   - Semrush US: hvac website design 1,600 (KD 21) · hvac websites 1,000
     (21) · hvac web design 880 (24) · hvac website 590 (40) · hvac web
     design agency 480 (18) · best hvac website design 390 (20) · hvac web
     design services 320 (19) · best hvac websites 260 · hvac web design
     company 260 · hvac website templates 260 (13) · hvac website builder
     210 · hvac website design services 210 · hvac contractor website 170.
   - Web research (vendor guides on HVAC sites): split the emergency call
     path from routine booking, after-hours online booking, financing and
     maintenance-plan pages, a real page per service area, reviews next to
     the buttons, speed on phones. Template/builder searches (templates,
     builder) are answered by the comparison section.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company named, verified numbers only, every live
   content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/hvac-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by season",
    business: "Your HVAC Co.",
    domain: "yourhvacco.com",
    nav: ["Cooling", "Heating", "Plans", "Areas"],
    call: "Call 24/7",
    primary: "Book online",
    secondary: "Financing options",
    proof: "Rated by local homeowners",
    bookTitle: "Book a visit",
    confirm: "Confirm booking",
    serviceSubs: ["Same-day visits", "Book online", "Free estimate"],
    toast: "Booking confirmed",
    toastNote: "Today 10 AM",
    phoneCta: "Book",
    modes: [
      {
        label: "Cooling season",
        icon: "snow",
        badge: "AC repair · Same-day",
        headline: "AC Not Cooling? A Tech Can Be There Today.",
        sub: "Cooling repair, tune-ups and new systems across your service area.",
        services: ["AC repair", "AC tune-up", "New AC system"],
        book: ["AC repair", "Tune-up", "New system quote"],
        img: {
          src: "/images/free-website/free-hvac/ac-repair.webp",
          position: "60% 40%",
        },
      },
      {
        label: "Heating season",
        icon: "flame",
        badge: "Furnace repair · 24/7",
        headline: "No Heat Tonight? We'll Get It Running.",
        sub: "Furnace and heat pump repair, maintenance and installs, day or night.",
        services: ["Furnace repair", "Heat pump service", "Furnace tune-up"],
        book: ["Furnace repair", "Heat pump", "Tune-up"],
        img: {
          src: "/images/free-website/free-hvac/furnace-heating.webp",
          position: "55% 40%",
        },
      },
    ],
    legend: [
      "Click-to-call header",
      "Seasonal landing pages",
      "24/7 online booking",
      "Sticky mobile call bar",
    ],
  },
  // Cooling sky, heating orange, then indigo and emerald (tones.ts).
  tones: tonesFor("hvac-website-design"),
  serviceName: "HVAC Website Design",
  audience: "HVAC contractors and heating and cooling companies",
  meta: {
    title: "HVAC Website Design Services | HVAC Web Design Agency",
    description:
      "HVAC website design services for heating and cooling contractors: seasonal pages, online booking and service-area pages built to rank and book calls.",
    keywords: [
      "hvac website design",
      "hvac web design",
      "hvac websites",
      "hvac website design services",
      "hvac web design agency",
      "hvac website design agency",
      "hvac web design company",
      "hvac website design company",
      "best hvac website design",
      "hvac web design services",
      "hvac contractor website",
      "hvac website templates",
      "hvac website builder",
    ],
  },
  hero: {
    h1Lead: "HVAC Website Design",
    h1Rest: "That Books Calls in Every Season",
    icon: "hvac",
    lead: [
      "We build HVAC websites that switch with the season, keep your number one tap away and let homeowners book a tune-up at 10 PM. Every ",
      { href: "/services/web-design", label: "custom website" },
      " launches in 2–3 weeks with town pages built to rank.",
    ],
    cta: "Get My Free Homepage Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/hvac-web/every-service-line-image.webp",
        position: "center",
        query: "hvac website design",
      },
      cardA: {
        icon: "search",
        title: "Ranked in Every Town Served",
        sub: "Service and city pages built for Google",
      },
      photoB: {
        src: "/images/hvac-web/hero-image-primary-v2.webp",
        position: "center 30%",
        query: "hvac company near me",
      },
      cardB: {
        icon: "trend",
        title: "Booked Jobs All Year Round",
        sub: "AC and furnace demand, both covered",
      },
    },
  },
  showcase: {
    title: "See an HVAC Website Built for Both Seasons",
    lead: "Switch seasons and watch the homepage, booking options and phone view follow demand.",
  },
  services: {
    title: "HVAC Web Design Services\nWe Build and Run",
    lead: "From the first launch to seasonal updates, one team at our HVAC website design company handles your site.",
    cta: "Plan My HVAC Website",
    items: [
      {
        icon: "monitor",
        title: "Custom HVAC Websites From Scratch",
        desc: "A site planned around your services, towns and booking flow, written and designed for heating and cooling buyers.",
        points: [
          "Custom design",
          "Town pages included",
          "Copy written for you",
        ],
        links: [
          { href: "/services/web-design", label: "Our website design work" },
        ],
      },
      {
        icon: "repeat",
        title: "Redesigns That Keep Your Rankings",
        desc: "We rebuild slow or dated HVAC sites while keeping the URLs, redirects and pages that already bring calls.",
        points: [
          "URL and redirect map",
          "Faster templates",
          "Rankings protected",
        ],
        links: [],
      },
      {
        icon: "snow",
        title: "Cooling and Heating Season Pages",
        desc: "AC pages for heat waves and furnace pages for cold snaps, live before demand peaks and ready for ads.",
        points: [
          "AC repair pages",
          "Furnace and heat pump pages",
          "Ad landing pages",
        ],
        links: [{ href: "/services/google-ads", label: "Google Ads for HVAC" }],
      },
      {
        icon: "calendar",
        title: "Booking and Dispatch Hookups",
        desc: "Booking forms and calendars that connect to your field service software, so requests land straight in dispatch.",
        points: [
          "24/7 online booking",
          "Software integration",
          "Instant confirmations",
        ],
        links: [],
      },
      {
        icon: "shield",
        title: "Tune-Up Plan and Financing Pages",
        desc: "Dedicated pages that sell maintenance memberships and walk homeowners through financing for a new system.",
        points: [
          "Plan signup flow",
          "Financing explainer",
          "Replacement guides",
        ],
        links: [
          {
            href: "/services/industry/local-seo-services-for-hvac",
            label: "Local SEO for HVAC",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting, Care and Monthly Edits",
        desc: "Secure hosting, updates, backups and quick edits handled for you after launch, so the site never goes stale.",
        points: ["Managed hosting", "Monthly edits", "Uptime checks"],
        links: [
          {
            href: "/hvac-website-design-agency-us/offer",
            label: "Free HVAC website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Inside Every HVAC Website We Launch",
    lead: "The parts that turn a visit into a booked service call.",
    items: [
      {
        icon: "phone",
        title: "A Call Button on Every Screen",
        text: "A sticky call bar keeps your number one tap away on every phone.",
      },
      {
        icon: "calendar",
        title: "Booking That Works After Hours",
        text: "Homeowners book repairs and tune-ups when your office is closed.",
      },
      {
        icon: "air",
        title: "A Fast Lane for No-Cool Calls",
        text: "Emergency callers skip the forms and go straight to dispatch.",
      },
      {
        icon: "pin",
        title: "Town Pages Across Your Service Area",
        text: "Each town gets local jobs, photos and reviews, not a swapped name.",
      },
      {
        icon: "star",
        title: "Reviews Beside the Buttons",
        text: "Star ratings sit next to the call and booking buttons.",
      },
      {
        icon: "shield",
        title: "Plan and Financing Pages",
        text: "Clear pages for maintenance memberships and system financing.",
      },
      {
        icon: "bolt",
        title: "Speed Built for Phones",
        text: "Light pages and clean code that load fast on mobile data.",
      },
      {
        icon: "search",
        title: "HVAC Schema From Day One",
        text: "Service, area and review markup so Google reads every page.",
      },
    ],
  },
  growth: {
    title: "How a Better HVAC Website Brings More Calls",
    lead: "Rank for local searches, convert more visits and show up in AI answers.",
    rank: {
      title: "Rank for Repair Searches in Every Town",
      body: [
        "Service and town pages are written around what homeowners type, from AC repair to furnace replacement, then tracked week by week. Pair the site with ",
        {
          href: "/services/industry/local-seo-services-for-hvac",
          label: "HVAC local SEO",
        },
        " and our ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google Business Profile work",
        },
        " to own the map too.",
      ],
      points: [
        "Town-by-town pages",
        "Searches mapped to pages",
        "Weekly rank tracking",
        "Local schema",
      ],
      cta: "Map My Town Pages",
      keywords: [
        ["ac repair + your city", 21, 3],
        ["furnace replacement near me", 34, 5],
        ["heat pump installer", 28, 4],
        ["hvac company near me", 18, 2],
      ],
    },
    convert: {
      title: "Turn Visits Into Booked Service Calls",
      body: [
        "Clear buttons, short forms and a booking flow built for phones turn more visitors into calls. Each call carries a tag naming its source page and search, and ",
        { href: "/services/hvac-marketing-agency", label: "HVAC marketing" },
        " can send more traffic to it.",
      ],
      points: [
        "Sticky call button",
        "Two-step booking",
        "Call tracking",
        "Fast on mobile",
      ],
      cta: "Show Me a Booking Flow",
      url: "yourhvacco.com",
      headline: "AC Down? Book a Tech in Minutes",
      services: ["AC repair", "Furnace repair", "Tune-up", "New system"],
    },
    ai: {
      title: "Get Your Site Quoted in AI Answers",
      body: [
        "Answer-first service pages and clean structured data help ChatGPT and Google AI Overviews cite your site when homeowners ask who to call, the groundwork behind our ",
        { href: "/services/ai-seo-services", label: "AI SEO work" },
        ".",
      ],
      points: [
        "Answer-first FAQs",
        "Service schema",
        "Clean site structure",
        "AI citation checks",
      ],
      cta: "Check My AI Readiness",
      query: "who installs heat pumps near me",
      intro: "For heat pump installation nearby,",
      bullets: [
        "Clear replacement guides",
        "Financing explained",
        "Strong local reviews",
      ],
    },
  },
  sitemap: {
    title: "The Pages We Build Into Every HVAC Site",
    lead: "Each page targets a search homeowners make, so the whole site ranks, not only the homepage.",
    home: "Your HVAC Co. homepage",
    groups: [
      {
        name: "Cooling",
        icon: "snow",
        pages: ["AC repair", "AC installation", "AC tune-ups"],
      },
      {
        name: "Heating",
        icon: "flame",
        pages: ["Furnace repair", "Heat pumps", "Boiler service"],
      },
      {
        name: "Plans and Financing",
        icon: "shield",
        pages: ["Maintenance plan", "Financing options", "System replacement"],
      },
      {
        name: "Service Areas",
        icon: "pin",
        pages: ["Main city page", "Suburb pages", "County page"],
      },
    ],
  },
  results: {
    title: "What Changes After Your HVAC Site Goes Live",
    lead: "Steady gains as pages get indexed, reviews show up and booking runs around the clock.",
    cta: "Show Me My Launch Plan",
    milestones: [
      {
        when: "Launch week",
        title: "Calls Tracked From Day One",
        text: "Call tracking and online booking go live with the site, so every lead has a source.",
      },
      {
        when: "Month 1",
        title: "Pages Start Getting Indexed",
        text: "Google crawls the new service and town pages, and the first local searches pick them up.",
      },
      {
        when: "Months 2–3",
        title: "Climbing for Town Searches",
        text: "Town pages and fresh reviews start moving toward page one for repair and install searches.",
      },
      {
        when: "Peak season",
        title: "A Busier Booking Calendar",
        text: "Season pages and online booking catch more AC and furnace demand when it spikes.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Bookings While You Sleep",
        text: "Homeowners book tune-ups and repairs at night, straight into your schedule.",
      },
      {
        icon: "phone",
        title: "More Calls From Phones",
        text: "A sticky call bar turns mobile visitors into service calls in one tap.",
      },
      {
        icon: "trend",
        title: "A Site That Keeps Ranking",
        text: "Service and town pages keep pulling search traffic month after month.",
      },
      {
        icon: "star",
        title: "A Brand Homeowners Trust",
        text: "Reviews, real photos and clear plan pages make you the obvious call.",
      },
    ],
    band: [
      {
        icon: "trend",
        value: "Busier Seasons",
        label: "Calls in summer heat and winter cold alike",
      },
      {
        icon: "calendar",
        value: "Booked After Hours",
        label: "Tune-ups scheduled while the office is closed",
      },
      {
        icon: "monitor",
        value: "Quick on Phones",
        label: "Pages that open fast on any signal",
      },
      {
        icon: "star",
        value: "Trusted at First Glance",
        label: "Reviews and badges where homeowners decide",
      },
    ],
  },
  process: {
    title: "Your HVAC Website, Live in 2–3 Weeks",
    lead: "A clear plan, a free mockup and a launch date set on day one.",
    items: [
      {
        when: "Week 1",
        h: "Discovery and Free Mockup",
        p: "We map your services, towns and booking tools, then send a homepage mockup.",
      },
      {
        when: "Weeks 1–2",
        h: "Design and HVAC Copy",
        p: "Pages are designed and written for heating and cooling buyers, with your photos.",
      },
      {
        when: "Weeks 2–3",
        h: "Build, Booking and SEO",
        p: "We connect booking and call tracking, then set redirects, schema and town pages.",
      },
      {
        when: "Launch",
        h: "Go Live and Keep Improving",
        p: "Your site goes live, calls are tracked and season pages refresh before each peak.",
      },
    ],
  },
  compare: {
    title: "Zonic vs. a Template HVAC Website",
    lead: "Why a site built for HVAC books more calls than a drag-and-drop template.",
    otherLabel: "Template website",
    rows: [
      {
        topic: "Design and layout",
        other: "A generic theme shared with thousands of other sites.",
        zonic:
          "A custom layout planned around your services, towns and booking flow.",
      },
      {
        topic: "Emergency callers",
        other: "The phone number tucked away in the header or footer.",
        zonic:
          "A sticky call bar and a separate path for no-cool and no-heat calls.",
      },
      {
        topic: "Seasonal demand",
        other: "One homepage that says the same thing all year.",
        zonic: "Cooling and heating pages ready before every peak season.",
      },
      {
        topic: "Local rankings",
        other: "A single list of town names on one page.",
        zonic:
          "A real page for each town, with local jobs, photos and reviews.",
      },
      {
        topic: "Booking requests",
        other: "A contact form that waits for office hours.",
        zonic:
          "Online booking connected to your scheduling software, day or night.",
      },
      {
        topic: "Support after launch",
        other: "Updates, fixes and backups left to you.",
        zonic:
          "Hosting, updates and edits handled, with the domain in your name.",
      },
    ],
  },
  reviews: {
    title: "See Why Clients Rate Our Web Team 5.0 on Google",
    lead: "Business owners posted these on our Google profile, unedited.",
  },
  pricing: {
    title: "Plans to Grow Your HVAC Site After Launch",
    compareTitle: "What Each Plan Adds to an HVAC Website",
    addOnsTitle: "Extra Pages and Tools for HVAC Sites",
    customTitle: "Building Sites for Several HVAC Branches?",
  },
  faq: {
    title: "HVAC Website Design Questions, Answered",
    lead: "Cost, timelines, booking tools and what an HVAC site should include.",
    items: [
      {
        q: "What does it cost to build an HVAC website?",
        a: "You get a single flat quote after a free call about your services, towns and booking needs, and that number holds for the whole build. If your HVAC company joins a qualifying monthly growth plan, the site itself can come free through our website offer.",
      },
      {
        q: "How soon can my new HVAC website go live?",
        a: "Most HVAC websites go live in 2–3 weeks. A free homepage mockup arrives in week one, then design and copy follow, and booking, call tracking and redirects are finished before launch day.",
      },
      {
        q: "What should an HVAC website include?",
        a: "A visible phone number and sticky call button, online booking, separate paths for emergencies and routine visits, pages for each service and town, financing and maintenance plan pages, reviews near every button, and fast mobile pages with local schema.",
      },
      {
        q: "Can you connect my booking or dispatch software?",
        a: "Yes. We connect booking forms and calendars to the field service and scheduling tools HVAC companies use, so online requests land in dispatch with the customer's details instead of waiting in an inbox.",
      },
      {
        q: "Can I move to a new HVAC website without losing rankings?",
        a: "Not when it is planned. We map every existing URL, keep the pages that earn traffic, redirect anything that moves and resubmit the sitemap, then watch rankings and calls closely in the weeks after launch.",
      },
      {
        q: "Do you write the content for HVAC websites?",
        a: "Yes. Our writers create service, town and FAQ pages around what homeowners search, from AC repair to heat pump installs, in plain words your customers understand. Nothing is published until you approve it.",
      },
      {
        q: "Is a website builder or template enough for an HVAC company?",
        a: "A template can work for a brand-new shop, but it rarely ranks for town searches or handles emergency calls well. A custom HVAC site adds town pages, booking connections and the speed templates struggle to match.",
      },
      {
        q: "Do you build seasonal landing pages for AC and heating?",
        a: "Yes. We build cooling pages for summer and heating pages for winter, refresh them before each peak and use them for ads, so the right offer meets each homeowner during a heat wave or a cold snap.",
      },
      {
        q: "What happens after my HVAC website launches?",
        a: "We host it, keep it updated and secure, track calls and bookings, and make edits when you ask. Many HVAC clients add local SEO or Google Ads after launch to send more traffic to the new site.",
      },
    ],
  },
  consult: {
    title: "Get a Free Homepage Mockup for Your HVAC Company",
    lead: [
      "Tell us your services and the towns you cover, and we'll design a homepage mockup and page plan, free. Prefer to talk first? ",
      { href: "/contact-us", label: "Contact us" },
      ", meet ",
      { href: "/about", label: "the team" },
      ", see ",
      { href: "/services", label: "all our services" },
      " or get help with a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google profile",
      },
      ". Home service firms can also read our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "home services local SEO",
      },
      " guide.",
    ],
    points: [
      "Free homepage mockup",
      "Page and town plan",
      "Booking setup advice",
      "Live in 2–3 weeks",
    ],
    form: {
      formType: "hvac-website-design",
      badge: "Free HVAC homepage mockup",
      title: "Request Your HVAC Website Mockup",
      subtitle: "Free, with no obligation.",
      submitText: "Send My HVAC Mockup Request",
      messageLabel: "Your company, current site and services",
      messagePlaceholder:
        "Company name, current website (if any), the services you sell and the towns you cover",
    },
  },
  banner: {
    title: "Give Homeowners an HVAC Site Worth Calling",
    lead: "Seasonal pages, online booking and a phone number that's always one tap away.",
  },
};
