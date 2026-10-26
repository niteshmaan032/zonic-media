/* Appliance Repair Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: appliance repair website design
     187 impressions (pos 25.5) · appliance repair web design 173 (23.7) ·
     appliance repair web design services 145 (19.6) · web design for
     appliance repair 52 (24.7) · appliance repair web design company 45
     (20.7) · appliance repair website design agency 25 (21.4).
   - Semrush US: appliance repair website design 110 (KD 11) · appliance
     repair web design 50 (6) · appliance repair websites 40 (53).
   - Web research (appliance repair site guides and examples): visitors
     want to know at once whether you cover their area and fix their
     appliance and brand; owners search make + fault + city, so brand and
     symptom pages win searches; real-time booking and click-to-call near
     the top; tech photos, warranty terms and an honest repair-or-replace
     stance build trust; most people book from a phone standing next to
     the broken machine. People ask about repair vs replace, diagnostic
     visits and whether you service their brand.
   Angle: appliance, brand and fault pages, a ZIP coverage check, arrival
   windows that fill the daily route. No appliance brand is named. Rules
   kept: build time 2–3 weeks, no prices, no company or software named,
   verified numbers only, every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/appliance-repair-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example repair site by appliance type",
    business: "Your Appliance Repair",
    domain: "yourappliancerepair.com",
    nav: ["Kitchen", "Laundry", "Brands", "Areas"],
    call: "Call a tech",
    primary: "Schedule a repair",
    secondary: "Brands we fix",
    proof: "Rated by local households",
    bookTitle: "Book a repair visit",
    confirm: "Reserve this slot",
    serviceSubs: ["All major brands", "Same-day slots", "Parts on the truck"],
    toast: "Repair booked",
    toastNote: "Arrival window texted",
    phoneCta: "Repair",
    modes: [
      {
        label: "Kitchen appliances",
        icon: "kitchen",
        badge: "Fridge · Oven · Dishwasher",
        headline: "Fridge Warm? Get It Cold Again Today.",
        sub: "Refrigerator, oven, range and dishwasher repair for every major brand.",
        services: [
          "Refrigerator repair",
          "Oven and range repair",
          "Dishwasher repair",
        ],
        book: ["Fridge warm", "Oven won't heat", "Dishwasher leak"],
        img: {
          src: "/images/home-improvement-web/appliance-repair-first-impressions-1.webp",
          position: "40% 40%",
        },
      },
      {
        label: "Laundry",
        icon: "water",
        badge: "Washer · Dryer",
        headline: "Washer Won't Drain? Book a Tech Today.",
        sub: "Washer and dryer repair, from noisy drums to dryers that run with no heat.",
        services: ["Washer repair", "Dryer repair", "Dryer vent check"],
        book: ["Won't drain", "No dryer heat", "Noisy drum"],
        img: {
          src: "/images/home-improvement-web/appliance-repair-hero-v2.webp",
          position: "15% 30%",
          phonePosition: "20% 30%",
          zoom: 1.7,
        },
      },
    ],
    legend: [
      "Same-day call button",
      "Kitchen and laundry pages",
      "Repair slot booking",
      "Mobile call bar",
    ],
  },
  // Kitchen cyan, laundry orange, then purple and lime (tones.ts).
  tones: tonesFor("appliance-repair-website-design"),
  serviceName: "Appliance Repair Website Design",
  audience: "appliance repair companies and technicians",
  meta: {
    title: "Appliance Repair Website Design | Web Design Services",
    description:
      "Appliance repair website design for repair companies: brand and fault pages, same-day booking by ZIP code and web design services that fill your daily route.",
    keywords: [
      "appliance repair website design",
      "appliance repair web design",
      "appliance repair web design services",
      "web design for appliance repair",
      "appliance repair web design company",
      "appliance repair website design agency",
      "appliance repair websites",
      "appliance repair website",
      "website design for appliance repair companies",
      "appliance repair business website",
    ],
  },
  hero: {
    h1Lead: "Appliance Repair Website Design",
    h1Rest: "That Keeps Your Repair Route Full",
    icon: "repair",
    lead: [
      "We design appliance repair websites with a page for every appliance, brand and common fault, so a household with a warm fridge finds you and books a slot. It's a ",
      { href: "/services/web-design", label: "custom website" },
      ", never a template, and your route's town pages are ready when it launches in 2–3 weeks.",
    ],
    cta: "Get a Free Appliance Repair Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/appliance-repair-first-impressions-1.webp",
        position: "62% center",
        query: "refrigerator repair near me",
      },
      cardA: {
        icon: "search",
        title: "Found for Every Brand You Fix",
        sub: "Brand pages matched to owner searches",
      },
      photoB: {
        src: "/images/home-improvement-web/appliance-repair-hero-v2.webp",
        position: "58% 30%",
        query: "appliance repair same day",
      },
      cardB: {
        icon: "calendar",
        title: "Same-Day Slots Filled Online",
        sub: "Households pick a window from their phone",
      },
    },
  },
  showcase: {
    title: "Test-Drive an Appliance Repair Website for Kitchen and Laundry",
    lead: "Switch between kitchen and laundry to watch the headline, fault list and booking chips update.",
  },
  services: {
    title: "Appliance Repair Web Design Services\nBuilt Around Your Route",
    lead: "Planning, writing, design and care from a team that knows how repair calls come in.",
    cta: "Start My Appliance Repair Site",
    items: [
      {
        icon: "monitor",
        title: "Appliance Repair Websites From the Ground Up",
        desc: "A new site planned around the appliances you fix, the brands you stock parts for and the towns your techs drive.",
        points: [
          "Built for your route",
          "Repair-ready copy",
          "Phone-first layout",
        ],
        links: [{ href: "/services/web-design", label: "See our web design" }],
      },
      {
        icon: "kitchen",
        title: "Appliance and Brand Pages",
        desc: "Dedicated pages for every appliance type and make you service, written the way owners search for help.",
        points: [
          "Kitchen appliance pages",
          "Washer and dryer pages",
          "Brand-by-brand pages",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-appliance-repair",
            label: "Local SEO for appliance repair",
          },
        ],
      },
      {
        icon: "search",
        title: "Symptom Pages That Rank",
        desc: "Pages for the problems people type, like a fridge not cooling or a washer that won't drain, each ending in a booking button.",
        points: [
          "Fault-based pages",
          "Quick checks vs. tech visits",
          "Built-in FAQs",
        ],
        links: [],
      },
      {
        icon: "calendar",
        title: "ZIP Check and Repair Booking",
        desc: "Visitors confirm you cover their ZIP code, choose the appliance and pick an arrival window that syncs with your schedule.",
        points: ["Service-area check", "Arrival windows", "Model number field"],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for repair shops",
          },
        ],
      },
      {
        icon: "repeat",
        title: "Rebuilds for Dated Repair Sites",
        desc: "We redesign slow appliance repair websites and protect the URLs and pages that already bring in calls.",
        points: ["URL map first", "Redirects handled", "Speed improved"],
        links: [],
      },
      {
        icon: "shield",
        title: "Hosting, Edits and Profile Help",
        desc: "Hosting and upkeep after launch, plus hands-on help verifying or fixing the Google Business Profile your route depends on.",
        points: [
          "Managed hosting",
          "Edits when you need them",
          "Profile verification",
        ],
        links: [
          {
            href: "/services/gmb-verification-help",
            label: "Google profile verification",
          },
        ],
      },
    ],
  },
  features: {
    title: "Appliance Repair Website Essentials We Include",
    lead: "Details that help a household with a broken machine choose you and book.",
    items: [
      {
        icon: "pin",
        title: "ZIP Code Coverage Check",
        text: "Visitors see right away whether your techs reach their street.",
      },
      {
        icon: "clipboard",
        title: "Model Number Field",
        text: "Customers share make and model, so techs bring the right parts.",
      },
      {
        icon: "clock",
        title: "Arrival Windows, Not Guesswork",
        text: "Bookings show a clear window and send a text when the tech is close.",
      },
      {
        icon: "award",
        title: "Warranty Terms in Plain Words",
        text: "Your parts and labor warranty appears on every repair page.",
      },
      {
        icon: "repair",
        title: "Repair or Replace Guide",
        text: "An honest guide that helps people decide before they call.",
      },
      {
        icon: "star",
        title: "Reviews Sorted by Appliance",
        text: "Fridge, washer and oven reviews show up on the matching pages.",
      },
      {
        icon: "phone",
        title: "Sticky Call Button",
        text: "The number follows visitors down the page on every phone.",
      },
      {
        icon: "search",
        title: "Repair Service Schema",
        text: "Markup tells Google which appliances, brands and towns you cover.",
      },
    ],
  },
  growth: {
    title: "Appliance Repair Web Design That Ranks, Books and Gets Cited",
    lead: "Win local searches, turn phone visits into booked windows and show up in AI answers.",
    rank: {
      title: "Rank for Brand, Appliance and Fault Searches",
      body: [
        "Brand, appliance and symptom pages each target a real search, and we track how they climb week by week. Combine the site with ",
        {
          href: "/services/industry/local-seo-for-appliance-repair",
          label: "appliance repair local SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google Maps profile tuning",
        },
        " to appear in the map pack too.",
      ],
      points: [
        "Brand pages",
        "Fault pages",
        "Weekly rank reports",
        "Service-area schema",
      ],
      cta: "Plan My Repair Pages",
      keywords: [
        ["appliance repair near me", 20, 2],
        ["refrigerator repair + your city", 33, 4],
        ["washer repair same day", 25, 3],
        ["dryer not heating repair", 38, 6],
      ],
    },
    convert: {
      title: "Turn a Broken Fridge Search Into a Booked Window",
      body: [
        "A ZIP check, a model field and live arrival windows make booking quick on any phone. Calls and bookings are tagged with the page behind them, and ",
        { href: "/services/google-ads", label: "Google Ads" },
        " can send more same-day searches straight to those pages.",
      ],
      points: [
        "ZIP code check",
        "Live arrival windows",
        "Tagged calls",
        "Fast on phones",
      ],
      cta: "Show Me the Booking Flow",
      url: "yourappliancerepair.com",
      headline: "Broken Appliance? Book a Tech",
      services: ["Fridge", "Washer", "Dryer", "Oven"],
    },
    ai: {
      title: "Be the Repair Shop AI Answers Point To",
      body: [
        "AI assistants field a lot of fix-or-replace questions, and they quote pages that give honest, specific answers. We write those guides and add structured data, the core of our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Fix-or-replace guides",
        "Repair schema",
        "Clear page structure",
        "Monthly AI checks",
      ],
      cta: "See If AI Mentions Me",
      query: "is it worth repairing a 10 year old fridge",
      intro: "For an honest repair-or-replace call,",
      bullets: [
        "Repair-or-replace guide",
        "Same-day repair windows",
        "Brands serviced listed",
      ],
    },
  },
  sitemap: {
    title: "Appliance Repair Website Pages, Mapped to Real Searches",
    lead: "Each page answers one search, so fridge, washer and brand-specific jobs all lead to you.",
    home: "Your Appliance Repair homepage",
    groups: [
      {
        name: "Kitchen",
        icon: "kitchen",
        pages: ["Refrigerators", "Ovens and ranges", "Dishwashers"],
      },
      {
        name: "Laundry",
        icon: "water",
        pages: ["Washers", "Dryers", "Dryer vent cleaning"],
      },
      {
        name: "Brands",
        icon: "award",
        pages: ["Brands we service", "Brand repair pages", "Warranty work"],
      },
      {
        name: "Coverage",
        icon: "pin",
        pages: ["ZIP code checker", "City pages", "Same-day zones"],
      },
    ],
  },
  results: {
    title: "How an Appliance Repair Website Pays Off After Launch",
    lead: "Results build as brand pages get indexed, reviews grow and online booking fills more windows.",
    cta: "Show Me the Launch Timeline",
    milestones: [
      {
        when: "Launch week",
        title: "Bookings and Calls Tracked",
        text: "Online booking and call tracking start together, so each lead shows where it came from.",
      },
      {
        when: "Month 1",
        title: "Brand Pages in Google",
        text: "Appliance, brand and fault pages get indexed and begin appearing in local results.",
      },
      {
        when: "Months 2–3",
        title: "More Searches, Fewer Gaps",
        text: "Pages climb for fault and brand searches, filling empty spots on your route.",
      },
      {
        when: "Holiday season",
        title: "Ready for Oven Emergencies",
        text: "Oven and fridge pages catch the rush when holiday cooking pushes appliances hard.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Fuller Daily Routes",
        text: "More booked windows per day in the towns you already drive.",
      },
      {
        icon: "search",
        title: "Calls From Brand Searches",
        text: "Owners searching their make and fault land on your page.",
      },
      {
        icon: "phone",
        title: "Bookings From Phones",
        text: "A ZIP check and arrival windows make booking quick on mobile.",
      },
      {
        icon: "star",
        title: "Trust at First Glance",
        text: "Tech photos, warranty terms and reviews help people say yes.",
      },
    ],
    band: [
      {
        icon: "calendar",
        value: "Same-Day Bookings",
        label: "Repair slots booked straight from the page",
      },
      {
        icon: "search",
        value: "Every Brand Covered",
        label: "Brand and appliance pages that match real searches",
      },
      {
        icon: "check",
        value: "Better-Fit Callers",
        label: "Clear service details that pre-qualify every call",
      },
      {
        icon: "clock",
        value: "Loads Before They Bounce",
        label: "Lean pages that open in a blink",
      },
    ],
  },
  process: {
    title: "Your Appliance Repair Website, Launched in 2–3 Weeks",
    lead: "Free mockup first, then a clear schedule from planning to launch.",
    items: [
      {
        when: "Week 1",
        h: "Route, Brands and Mockup",
        p: "We map your appliances, brands and towns, then show you a first homepage design.",
      },
      {
        when: "Weeks 1–2",
        h: "Pages for Every Fault",
        p: "Writers build appliance, brand and symptom pages in the words customers use.",
      },
      {
        when: "Weeks 2–3",
        h: "Booking, ZIP Check and SEO",
        p: "We hook up online booking and the ZIP checker, then add schema and redirects.",
      },
      {
        when: "Launch",
        h: "Live and Fine-Tuned",
        p: "The site goes live, and we adjust pages using real call and booking data.",
      },
    ],
  },
  compare: {
    title: "Why Owning an Appliance Repair Website Beats a Directory Listing",
    lead: "A listing rents you a spot next to rival shops. Your own site sends every lead to you.",
    otherLabel: "Directory profile page",
    rows: [
      {
        topic: "Brand coverage",
        other: "A short list of brands in one paragraph.",
        zonic: "A page for each brand you service, built to rank.",
      },
      {
        topic: "Fault searches",
        other: "Nothing for 'fridge not cooling' or 'washer won't drain'.",
        zonic: "Symptom pages that answer the problem and book a visit.",
      },
      {
        topic: "Booking a repair",
        other: "A message button that waits for a reply.",
        zonic: "Arrival windows booked online and synced to your schedule.",
      },
      {
        topic: "Service area",
        other: "A radius set by the listing site.",
        zonic: "A ZIP lookup plus a city page for each place your vans cover.",
      },
      {
        topic: "Repair-or-replace advice",
        other: "No space to explain your approach.",
        zonic: "An honest guide that builds trust before the call.",
      },
      {
        topic: "Competitors nearby",
        other: "Rival shops shown on the same page as you.",
        zonic: "Only your business, your reviews and your phone number.",
      },
    ],
  },
  reviews: {
    title: "Our Google Profile Shows a 5.0. The Reviews Are Below.",
    lead: "Every review on our Google profile comes from a real business owner, left as written.",
  },
  pricing: {
    title: "Plans to Keep Your Repair Website Working Harder",
    compareTitle: "What Each Plan Adds for an Appliance Repair Shop",
    addOnsTitle: "Optional Extras for Appliance Repair Websites",
    customTitle: "Covering Several Metro Areas?",
  },
  faq: {
    title: "Appliance Repair Website Questions From Shop Owners",
    lead: "Cost, launch timing, booking tools and the pages an appliance repair site needs.",
    items: [
      {
        q: "How much does an appliance repair website cost?",
        a: "You get one fixed quote after a free call about the appliances, brands and towns you cover, and it stays the same through launch. Pair the build with an eligible monthly growth plan and the website itself is on us, through our free website offer.",
      },
      {
        q: "How soon can my appliance repair site go live?",
        a: "Usually within 2–3 weeks. Week one is for your homepage mockup review, writing and design follow, and the final days cover booking, call tracking, schema and redirects, each tested before launch. You approve the pages at every stage, so the finished site matches how your shop works.",
      },
      {
        q: "What pages should an appliance repair website have?",
        a: "A page for each appliance you fix, pages for the brands you service, symptom pages like 'dryer not heating', city pages for your route, a ZIP code checker, warranty details, a repair-or-replace guide, reviews and online booking with arrival windows.",
      },
      {
        q: "Will a redesign hurt my appliance repair rankings?",
        a: "A careful rebuild protects what you've earned. Before launch we export every URL, match old pages to new ones, preserve the content that ranks and set redirects. After launch we check rankings and bookings weekly until things settle and fix any slip right away.",
      },
      {
        q: "Should I list the brands I repair on my website?",
        a: "Yes, ideally with a page for each one. Many owners search their make plus the fault, so brand pages catch high-intent searches. Only list brands you actually service, and mention any factory training or authorized status you hold, since that detail often decides the call.",
      },
      {
        q: "Can customers book a repair online with a time window?",
        a: "Yes. They check their ZIP code, choose the appliance, add the model number and pick an arrival window from your real availability. The booking lands in your scheduling software, and the customer gets a text confirmation, plus a reminder before the visit.",
      },
      {
        q: "Should my site explain how a diagnostic visit works?",
        a: "Being upfront helps. We add a short section on how your diagnostic visit works and whether the fee is credited toward the repair, so nobody is surprised at the door. Whether you publish the amount or share it by phone is your call.",
      },
      {
        q: "Do you write the content for appliance repair websites?",
        a: "Yes. Our writers create appliance, brand and fault pages in the plain language homeowners use, like 'washer won't spin' or 'freezer frosting up'. You review everything before launch, and we add your tech photos, warranty terms and the service towns on your route.",
      },
      {
        q: "Does an appliance repair website need to work well on phones?",
        a: "Absolutely. Most people look for repair help on a phone while standing next to the broken machine. We design phone-first, with a sticky call button, a short booking flow and pages that load quickly on mobile data, even in a basement laundry room.",
      },
    ],
  },
  consult: {
    title: "Try a Free Appliance Repair Homepage Design First",
    lead: [
      "Tell us the appliances, brands and towns you cover, and we'll mock up your homepage and outline the pages you need, free of charge. Want to chat first? ",
      { href: "/contact-us", label: "Reach our team" },
      ", read ",
      { href: "/about", label: "our story" },
      ", look through ",
      { href: "/services", label: "everything we do" },
      " or get a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google listing reinstated",
      },
      ". For more on map rankings, see our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "home service local SEO",
      },
      " page.",
    ],
    points: [
      "Homepage mockup at no cost",
      "Brand and town page plan",
      "Booking setup ideas",
      "Launch in 2–3 weeks",
    ],
    form: {
      formType: "appliance-repair-website-design",
      badge: "Free appliance repair mockup",
      title: "Request Your Appliance Repair Site Mockup",
      subtitle: "Free, with no commitment.",
      submitText: "Send My Repair Site Request",
      messageLabel: "Your repair company and current website",
      messagePlaceholder:
        "Company name, website (if any), appliances and brands you fix, and the towns on your route",
    },
  },
  banner: {
    title: "Make Your Shop the First Call for Broken Appliances",
    lead: "Brand pages, a ZIP check and same-day booking that keeps your techs on the road.",
  },
};
