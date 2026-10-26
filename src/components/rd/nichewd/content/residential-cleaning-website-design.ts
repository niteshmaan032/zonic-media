/* House Cleaning (Residential Cleaning) Website Design — redesign draft
   copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: deep cleaning services web design
     services 6 impressions (pos 18.5) · housekeeping web design services
     5 (24.4) · web design for deep cleaning 4 (1.0) · cleaning company web
     design company 4 (47.2).
   - Semrush US: cleaning business website 170 (KD 20) · house cleaning
     website 40 (52) · house cleaning website design 20 · maid service
     website design 20. The commercial draft owns contracts, janitorial
     and "cleaning company website design"; this page owns house
     cleaning, maid service, housekeeping, deep cleaning and "cleaning
     business website".
   - Web research (cleaning-industry trend guides, booking-tool and agency
     pages): most home cleaning bookings now start online or on a phone;
     homeowners want a price before they book (size-based price card or
     instant quote), online booking with recurring plans, separate pages
     for standard, deep and move-in/move-out cleans with a clear
     what's-included list, background checks and insurance spelled out,
     the same cleaner each visit, eco-friendly product options, reviews
     and text-friendly contact. Subscription-style plans are growing.
   Angle: a homeowner pricing, booking and rebooking a clean (consumer),
   unlike the commercial page's B2B vendor check. Rules kept: build time
   2–3 weeks, no prices or figures, no company named, verified numbers
   only, every live content link kept, /services/ai-seo-services added. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/residential-cleaning-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by clean type",
    business: "Your Cleaning Co.",
    domain: "yourcleaningco.com",
    nav: ["Pricing", "Cleans", "Our team", "Areas"],
    call: "Call or text",
    primary: "Get my price",
    secondary: "What's included",
    proof: "Rated by busy local households",
    bookTitle: "Book a clean",
    confirm: "Book this clean",
    serviceSubs: [
      "Same cleaner each visit",
      "Supplies brought along",
      "Vetted and insured",
    ],
    toast: "Clean booked",
    toastNote: "Cleaner confirmed",
    phoneCta: "Book",
    modes: [
      {
        label: "Recurring cleans",
        icon: "repeat",
        badge: "Weekly · Biweekly · Monthly",
        headline: "Come Home to a Clean House, Every Week.",
        sub: "Recurring house cleaning with one trusted cleaner and the price shown upfront.",
        services: ["Weekly cleaning", "Biweekly cleaning", "Monthly cleaning"],
        book: ["Biweekly", "Weekly", "Monthly"],
        img: {
          src: "/images/home-improvement-web/residential-cleaning-first-impressions-1.webp",
          position: "50% 45%",
        },
      },
      {
        label: "Deep & move-out",
        icon: "spray",
        badge: "Deep clean · Move-out",
        headline: "Moving Out? Leave It Spotless for Inspection.",
        sub: "Top-to-bottom deep cleans for move-ins, move-outs and seasonal resets.",
        services: ["Deep cleaning", "Move-out cleaning", "Move-in cleaning"],
        book: ["Move-out clean", "Deep clean", "Move-in clean"],
        img: {
          src: "/images/home-improvement-web/residential-cleaning-first-impressions-1.webp",
          position: "30% 30%",
          phonePosition: "35% 30%",
          zoom: 1.6,
        },
      },
    ],
    legend: [
      "Call-or-text button",
      "Recurring and deep-clean pages",
      "Instant price and booking card",
      "Sticky call and book bar",
    ],
  },
  // Recurring pink, deep-clean blue, then gold and cyan (tones.ts).
  tones: tonesFor("residential-cleaning-website-design"),
  serviceName: "House Cleaning Website Design",
  audience: "house cleaning companies, maid services and home cleaners",
  meta: {
    title: "House Cleaning Website Design | Maid Service Web Design",
    description:
      "House cleaning website design for maid services: instant pricing, online booking, recurring plans and trust pages that turn visitors into regular clients.",
    keywords: [
      "house cleaning website design",
      "maid service website design",
      "maid service web design",
      "cleaning business website",
      "cleaning business website design",
      "house cleaning website",
      "house cleaning web design",
      "residential cleaning website design",
      "housekeeping web design services",
      "deep cleaning web design",
      "home cleaning website design",
      "cleaning service website",
    ],
  },
  hero: {
    h1Lead: "House Cleaning Website Design",
    h1Rest: "That Turns Price Checks Into Regulars",
    icon: "clean",
    lead: [
      "Maid service websites that show a price in a few taps, take the booking online and invite every first-time client onto a recurring plan. A maid service ",
      { href: "/services/web-design", label: "custom website" },
      " from Zonic launches in 2–3 weeks, neighborhood pages and all.",
    ],
    cta: "Design My Free Cleaning Homepage",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/residential-cleaning-hero.webp",
        position: "center 40%",
        query: "house cleaning near me",
      },
      cardA: {
        icon: "calendar",
        title: "Cleans Booked Any Hour",
        sub: "Instant price and online booking, day or night",
      },
      photoB: {
        src: "/images/home-improvement-web/residential-cleaning-first-impressions-1.webp",
        position: "center 25%",
        query: "maid service near me",
      },
      cardB: {
        icon: "repeat",
        title: "Regulars Who Keep Rebooking",
        sub: "Weekly and biweekly plans sold online",
      },
    },
  },
  showcase: {
    title: "Two Booking Paths on One Maid Service Website",
    lead: "Switch from recurring cleans to deep and move-out work and watch the page, booking card and phone view adjust.",
  },
  services: {
    title: "Residential Cleaning Web Design\nfor Maids and Housekeeping Teams",
    lead: "Everything a home cleaning company needs online, built and kept running by one team.",
    cta: "Plan My Cleaning Website",
    items: [
      {
        icon: "home",
        title: "Fresh Cleaning Sites From a Blank Page",
        desc: "A fresh site designed around your clean types, your neighborhoods and a booking path homeowners can finish on a phone.",
        points: [
          "Custom look and feel",
          "Neighborhood pages",
          "Homeowner-friendly copy",
        ],
        links: [
          { href: "/services/web-design", label: "Website design services" },
        ],
      },
      {
        icon: "repeat",
        title: "Maid Service Site Redesigns",
        desc: "We refresh a tired cleaning business website without losing the pages, URLs and reviews that already bring in bookings.",
        points: [
          "Existing pages mapped",
          "Clean redirects",
          "Rankings watched",
        ],
        links: [],
      },
      {
        icon: "spray",
        title: "Deep, Move-Out and Specialty Pages",
        desc: "Separate pages for deep cleans, moving-day cleans for tenants and sellers, post-party resets and seasonal cleans, each with a clear list of what's included.",
        points: [
          "What's-included checklists",
          "Move-out pages",
          "Seasonal clean pages",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for cleaners" },
        ],
      },
      {
        icon: "calendar",
        title: "Instant Pricing and Online Booking",
        desc: "Homeowners enter bedrooms, bathrooms and frequency, see the price and pick a slot, and the job lands in your booking software.",
        points: [
          "Price-by-size form",
          "Live time slots",
          "Booking software sync",
        ],
        links: [],
      },
      {
        icon: "heart",
        title: "Trust and Cleaner Profile Pages",
        desc: "Meet-the-team pages, vetting and insurance details and a satisfaction promise that answer the question of who is coming into the home.",
        points: ["Cleaner bios", "Vetting explained", "Satisfaction policy"],
        links: [
          {
            href: "/services/industry/local-seo-services-for-residential-cleaning",
            label: "Residential cleaning SEO",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting and Ongoing Edits",
        desc: "Hosting, security, backups and seasonal promotions updated for you, so the site stays current all year.",
        points: ["Secure hosting", "Promo updates", "Fast edits on request"],
        links: [],
      },
    ],
  },
  features: {
    title: "Small Touches That Get a House Cleaning Booked",
    lead: "The pieces homeowners look for before they let a cleaner in.",
    items: [
      {
        icon: "calendar",
        title: "Book Without a Phone Call",
        text: "Pick a clean, a date and a time in one short flow.",
      },
      {
        icon: "clipboard",
        title: "Prices Shown Before Booking",
        text: "A size-based price appears before anyone hands over a card.",
      },
      {
        icon: "check",
        title: "A Clear What's-Included List",
        text: "Room-by-room checklists end the guesswork on every clean type.",
      },
      {
        icon: "users",
        title: "Faces of Your Cleaners",
        text: "Short bios and photos make the first visit feel familiar.",
      },
      {
        icon: "shield",
        title: "Vetting and Insurance Explained",
        text: "Background checks and coverage are spelled out in plain words.",
      },
      {
        icon: "leaf",
        title: "Green Product Options",
        text: "Eco-friendly and pet-safe product choices shown up front.",
      },
      {
        icon: "chat",
        title: "Text and Chat Friendly",
        text: "Clients can text a question instead of filling in a form.",
      },
      {
        icon: "star",
        title: "Ratings From Across Town",
        text: "Google ratings from local clients sit right beside the book button.",
      },
    ],
  },
  growth: {
    title: "Why a Strong Cleaning Business Website Wins More Homes",
    lead: "More local visibility, more online bookings and a place in AI answers.",
    rank: {
      title: "Rank for House Cleaning Searches in Each Neighborhood",
      body: [
        "Clean-type and neighborhood pages match what people type, from biweekly house cleaning to move-out cleaning, then get tracked month to month. Combine the site with ",
        {
          href: "/services/industry/local-seo-services-for-residential-cleaning",
          label: "residential cleaning SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Maps listing optimization",
        },
        " to rank on the map too.",
      ],
      points: [
        "Neighborhood pages",
        "Clean-type keywords",
        "Ranking reports",
        "Local business schema",
      ],
      cta: "Map My Neighborhood Pages",
      keywords: [
        ["house cleaning + your city", 22, 3],
        ["maid service near me", 29, 4],
        ["move out cleaning", 35, 6],
        ["deep cleaning services", 26, 2],
      ],
    },
    convert: {
      title: "Let Homeowners Price and Book in One Visit",
      body: [
        "An instant price, open time slots and a text-friendly contact option remove the back-and-forth that loses bookings. You'll see which page produced every booking, and ",
        {
          href: "/services/cleaning-company-marketing-agency",
          label: "marketing for cleaning companies",
        },
        " from our team can send extra homeowners its way.",
      ],
      points: [
        "Instant price card",
        "Open time slots",
        "Booking source tracking",
        "Text-friendly contact",
      ],
      cta: "Preview the Booking Card",
      url: "yourcleaningco.com",
      headline: "A Spotless Home, Booked in a Few Taps",
      services: ["Standard clean", "Deep clean", "Move-out", "Biweekly plan"],
    },
    ai: {
      title: "Be the Cleaner AI Suggests to Busy Households",
      body: [
        "Plain answers to common questions, from what a deep clean covers to whether cleaners bring supplies, help ChatGPT and Google AI Overviews pick you out as a cleaner to suggest, especially with clean schema behind them. Our ",
        { href: "/services/ai-seo-services", label: "AI SEO team" },
        " handles the setup.",
      ],
      points: [
        "Plain-answer FAQs",
        "LocalBusiness schema",
        "Consistent listings",
        "AI answer tracking",
      ],
      cta: "Does AI Recommend Me?",
      query: "who does reliable biweekly house cleaning near me",
      intro: "For dependable recurring house cleaning nearby,",
      bullets: [
        "Same cleaner each visit",
        "Upfront pricing",
        "Strong neighborhood reviews",
      ],
    },
  },
  sitemap: {
    title: "The Maid Service Site Map, Clean by Clean",
    lead: "Homeowners find the clean they need, check the price and book, without hunting through menus.",
    home: "Your Cleaning Co. homepage",
    groups: [
      {
        name: "Cleans",
        icon: "clean",
        pages: ["Standard cleaning", "Deep cleaning", "Moving cleans"],
      },
      {
        name: "Plans",
        icon: "repeat",
        pages: ["Weekly", "Biweekly", "Monthly"],
      },
      {
        name: "Trust",
        icon: "shield",
        pages: ["Meet the cleaners", "Our checklist", "Happiness promise"],
      },
      {
        name: "Neighborhoods",
        icon: "pin",
        pages: ["City page", "Neighborhood pages", "Apartments and condos"],
      },
    ],
  },
  results: {
    title: "How Bookings Grow Once Your Cleaning Site Launches",
    lead: "Bookings build as clean-type pages index, reviews pile up and the booking card works every hour.",
    cta: "Map My Launch Timeline",
    milestones: [
      {
        when: "Launch week",
        title: "Online Booking Switched On",
        text: "Instant pricing and booking go live, and each booking is labeled with the search or page behind it.",
      },
      {
        when: "Month 1",
        title: "Clean Pages Get Discovered",
        text: "Google indexes the deep, move-out and recurring pages and starts matching them to cleaning searches around town.",
      },
      {
        when: "Months 2–3",
        title: "Neighborhood Pages Gain Ground",
        text: "Neighborhood pages and new reviews start climbing for house cleaning searches close to home.",
      },
      {
        when: "Spring cleaning",
        title: "Ready for the Seasonal Rush",
        text: "Deep-clean and move-out pages are indexed before spring cleaning and moving season peak.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Bookings Without the Phone Tag",
        text: "Homeowners lock in a time slot without waiting for a callback.",
      },
      {
        icon: "repeat",
        title: "More Clients on Recurring Plans",
        text: "First cleans turn into weekly and biweekly routines.",
      },
      {
        icon: "users",
        title: "Cleaners Clients Already Know",
        text: "Team pages make the first knock on the door feel familiar.",
      },
      {
        icon: "trend",
        title: "Homeowners Finding You on Google",
        text: "Clean-type and neighborhood pages keep bringing homeowners in.",
      },
    ],
    band: [
      {
        icon: "calendar",
        value: "Instant Bookings",
        label: "Clients pick a date and time in a few taps",
      },
      {
        icon: "repeat",
        value: "Repeat Clients",
        label: "Recurring plans that keep calendars full",
      },
      {
        icon: "users",
        value: "Trust at the Door",
        label: "Team bios that put homeowners at ease",
      },
      {
        icon: "smile",
        value: "Friendly on Mobile",
        label: "Booking that works on the go",
      },
    ],
  },
  process: {
    title: "From Mockup to Bookable Cleaning Site in 2–3 Weeks",
    lead: "Short planning, your mockup within days and a launch date that holds.",
    items: [
      {
        when: "Week 1",
        h: "Clean Types and Area Plan",
        p: "We list your clean types, plans and neighborhoods, then mock up a maid service homepage.",
      },
      {
        when: "Weeks 1–2",
        h: "Look, Feel and Homeowner Copy",
        p: "Pages are written for busy households and styled with your team photos.",
      },
      {
        when: "Weeks 2–3",
        h: "Instant Booking and Search Console Setup",
        p: "Instant pricing and booking get connected, followed by schema, redirects and neighborhood pages.",
      },
      {
        when: "Launch",
        h: "Live and Ready for Regulars",
        p: "Your site opens for bookings, each one tracked, and seasonal promos rotate in.",
      },
    ],
  },
  compare: {
    title: "Your Own House Cleaning Website vs. a Marketplace Listing",
    lead: "A site you own keeps clients, prices and reviews under your name, not a platform's.",
    otherLabel: "Marketplace listing",
    rows: [
      {
        topic: "Who owns the client",
        other: "The platform keeps the relationship and shows rival cleaners.",
        zonic: "Clients book with you directly and stay on your list.",
      },
      {
        topic: "Pricing display",
        other: "Your price squeezed into a profile next to cheaper rivals.",
        zonic:
          "Your own price card, plans and add-ons, with no rivals beside it.",
      },
      {
        topic: "Repeat-clean plans",
        other: "Jobs set up one at a time, with no plan signup.",
        zonic: "Weekly and biweekly plans sold right on the booking card.",
      },
      {
        topic: "Brand and trust",
        other: "A small profile photo and a short bio.",
        zonic: "Team pages, checklists and vetting details in your own brand.",
      },
      {
        topic: "Showing up locally",
        other: "One profile page competing with every cleaner in town.",
        zonic: "Neighborhood and clean-type pages that rank for you alone.",
      },
      {
        topic: "Fees and control",
        other: "Lead fees or job commissions, under rules you don't set.",
        zonic: "No per-lead fees, and the site and domain are yours.",
      },
    ],
  },
  reviews: {
    title: "Every Review Behind Our 5.0 Google Rating Is Public",
    lead: "Unedited feedback from clients who hired us for their websites and marketing.",
  },
  pricing: {
    title: "Keep Your Maid Service Website Improving Each Month",
    compareTitle: "Pick the Plan That Fits Your Maid Service",
    addOnsTitle: "Optional Extras for House Cleaning Websites",
    customTitle: "Running Maid Teams in More Than One City?",
  },
  faq: {
    title: "House Cleaning Website Questions, Short Answers",
    lead: "Cost, timing, booking tools and what homeowners want to see.",
    items: [
      {
        q: "How much does a house cleaning website cost?",
        a: "We price it after a free chat about your clean types, service area and booking tools, and the quote is fixed for the full build, with nothing tacked on later. Add a qualifying monthly growth plan to your maid service and our website offer makes the build free.",
      },
      {
        q: "How fast can my maid service website launch?",
        a: "Most house cleaning websites are live in 2–3 weeks. Your homepage draft arrives within the first week, the clean-type pages and copy come next, and the booking card, tracking and redirects are checked with test bookings before launch. If spring cleaning or moving season is close, we build the deep-clean and move-out pages first.",
      },
      {
        q: "Does a cleaning business really need its own website?",
        a: "Yes, if you want clients who come back. Social pages and marketplace profiles help, but your own site holds your prices, plans, reviews and booking in one place, ranks in local search and keeps clients booking with you instead of a platform.",
      },
      {
        q: "What should a maid service website include?",
        a: "Instant pricing or a quick quote, online booking, a page for each clean type with a what's-included checklist, recurring plan options, team and vetting details, reviews, neighborhood pages, a text or call button and fast mobile pages. Green product options and a clear cancellation policy help too.",
      },
      {
        q: "Should my cleaning website show prices?",
        a: "Most homeowners want a number before they book, so we usually build a price card based on home size and frequency, with a note that final pricing follows a walk-through when needed. You decide how much to show, and we design it clearly.",
      },
      {
        q: "Can you connect my cleaning booking software?",
        a: "Yes. The booking card can feed the scheduling and payment tools cleaning companies already use, so new clients, recurring plans and add-ons land on your calendar automatically. If a tool can't connect, we set up instant alerts by text or email.",
      },
      {
        q: "Will a redesign drop my cleaning website from Google?",
        a: "Handled properly, no. We inventory the pages that bring bookings today, carry their wording and reviews onto the new design, forward any changed address with a 301 and tell Google about the new sitemap. Then we keep an eye on rankings and bookings for several weeks after launch.",
      },
      {
        q: "Do you build pages for deep cleaning and move-out cleaning?",
        a: "Yes. Deep cleans, moving cleans for tenants and owners, and seasonal resets each get their own page with a checklist, booking card and FAQs, so they rank for those searches and set clear expectations before the crew arrives. Housekeeping add-ons such as inside-oven or fridge cleaning can sit on the same pages.",
      },
      {
        q: "Do you design websites for housekeeping teams of any size?",
        a: "Yes. We build for solo cleaners, small housekeeping teams and multi-crew maid services. Smaller sites start lean and add neighborhood and clean-type pages as the business grows, all on the same design. Recurring plans, instant pricing or a team page can be switched on whenever you're ready.",
      },
    ],
  },
  consult: {
    title: "Start With a Free Mockup of Your Cleaning Website",
    lead: [
      "Tell us which cleans you offer and which streets and suburbs you clean in; we'll sketch your homepage and a clean-by-clean page plan, free. Prefer a quick chat? ",
      { href: "/contact-us", label: "Send us a message" },
      ", meet ",
      { href: "/about", label: "our team" },
      ", check ",
      { href: "/services", label: "everything we do" },
      " or restore a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Business Profile",
      },
      ". Home cleaning owners can also read about ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO built for home services",
      },
      ".",
    ],
    points: [
      "Free cleaning homepage mockup",
      "Clean-type page plan",
      "Booking tool advice",
      "Ready in 2–3 weeks",
    ],
    form: {
      formType: "residential-cleaning-website-design",
      badge: "Free house cleaning site mockup",
      title: "Request a House Cleaning Website Mockup",
      subtitle: "Free, with nothing to sign.",
      submitText: "Send My Cleaning Mockup Request",
      messageLabel: "Your business, cleans and neighborhoods",
      messagePlaceholder:
        "Business name, current website (if any), the cleans you offer, any recurring plans and the areas you serve",
    },
  },
  banner: {
    title: "Make Booking Your Cleaners the Easy Part",
    lead: "Instant prices, online booking and recurring plans on a site that's all yours.",
  },
};
