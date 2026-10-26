import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* TRAVEL AND TOURISM MARKETING AGENCY — redesign draft content (26 Oct 2026).

   Owner: "hero section having video in bg, also optimize the content new
   meta title and description, new keywords and content in it".

   Research, 26 Oct 2026:
   - Search Console, 90 days, URL contains "travel-and-tourism": almost no
     non-brand demand (tourism digital marketing agency 3 impressions at
     46.7; one each for destination marketing agency services, tourism
     marketing services/firm, travel digital marketing agency, tourism seo
     agency near me). Brand "zonic media" also lands here.
   - Semrush US: travel and tourism marketing agency 880 (KD 18, the URL's
     own phrase, so the primary) · tourism marketing agency 1,300 (42) ·
     travel marketing agency 1,000 (55) · tourism marketing 1,000 (17) ·
     travel marketing 720 (24) · travel seo 1,900 (25) · travel seo agency
     590 (12) · travel agency seo 390 (17) · tourism seo 390 (19) ·
     destination marketing agency 480 (25) · travel marketing company 480
     · tourism marketing company 390 · travel agency marketing 390 (7) ·
     travel digital marketing agency 390 · tourism digital marketing
     agency 320 · travel advertising agency 320 · tourism marketing
     services 260 · google ads for tour operators 210 (10) · tour operator
     marketing 170 (10) · vacation rental marketing 720 (9) · hotel seo
     agency 1,000 (17). Hotel/hospitality terms are supporting only.
   - Web research: direct bookings are operators' top goal while OTAs
     gain share; trip planning increasingly starts in AI assistants, which
     surface operators with clear, structured product data (itinerary,
     inclusions, meeting point, cancellation terms); Google Things to Do
     and booking links on Google matter for tours and stays; travelers
     want pre-booking answers; asking guests "how did you find us" proves
     which channels work.
   Rules: fresh copy only (nothing from the live page: its commission and
   booking-window figures, home-service cards, stale 500+ and badges are
   gone); no OTA, review site or competitor named; plan prices only in the
   cost FAQ and audit point; non-home niche, so the local SEO link points
   to /services/local-seo-for-small-business (owner rule, 25 Oct). Every
   live in-content link is kept. formType matches the live lead form. */

export const CONTENT: IndustryContent = {
  draftSlug: "travel-and-tourism-marketing-agency-2",
  liveUrl: "/services/travel-and-tourism-marketing-agency",
  niche: "Travel & Tourism",
  meta: {
    title: "Travel and Tourism Marketing Agency | Travel SEO & Ads",
    description:
      "Travel and tourism marketing agency for tour operators, hotels and destinations: travel SEO, Google Ads and booking-ready websites that grow direct bookings.",
    keywords: [
      "travel and tourism marketing agency",
      "tourism marketing agency",
      "travel marketing agency",
      "tourism marketing",
      "travel marketing",
      "travel seo",
      "travel seo agency",
      "tourism digital marketing agency",
      "travel digital marketing agency",
      "destination marketing agency",
      "tour operator marketing",
      "google ads for tour operators",
      "vacation rental marketing",
      "travel agency marketing",
      "tourism marketing services",
      "travel marketing company",
    ],
  },
  palette: PALETTES.tealRose,
  hero: {
    h1Lead: "Travel and Tourism Marketing Agency",
    h1Icon: "plane",
    h1Rest: "Built for Direct Bookings",
    lead: [
      "Travelers plan in search, on the map and in AI chats long before they book. We put your tours, stays and destination in front of them with travel SEO, ",
      { href: "/services/google-ads", label: "Google Ads" },
      " and a ",
      { href: "/services/web-design", label: "booking-ready website" },
      ", so more trips are booked with you, not through a commission site.",
    ],
    cta: "Get My Free Travel Marketing Audit",
    video: {
      src: "/video/travel-hero-720.mp4",
      srcSmall: "/video/travel-hero-540.mp4",
      poster: "/images/travel-tourism/travel-hero-poster.webp",
    },
    bento: {
      kind: "tiles",
      wide: {
        icon: "compass",
        title: "Found while trips are planned",
        sub: "Search, maps and AI travel answers",
        chips: ["Travel SEO", "Google Maps", "AI answers"],
      },
      left: {
        icon: "calendar",
        title: "More direct bookings",
        sub: "Fewer trips lost to commission sites",
      },
      right: {
        icon: "star",
        title: "Reviews travelers trust",
        sub: "Fresh Google ratings after every trip",
      },
      bottom: {
        title: "Booked ahead of each season",
        sub: "Campaigns timed to booking windows",
      },
    },
  },
  services: {
    title: "Tourism Marketing Services for Tours, Stays and Destinations",
    lead: "Travel digital marketing that follows a trip from first idea to confirmed booking.",
    cta: "Plan My Tourism Marketing",
    items: [
      {
        icon: "search",
        title: "Travel SEO for Tours and Stays",
        desc: "Destination, activity and itinerary pages built around how travelers search, with schema that helps Google and AI tools read your tours, rates and policies.",
        points: [
          "Destination and activity pages",
          "Tour and lodging schema",
          "Rank reports by market",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads for Tour Operators and Hotels",
        desc: "Search, brand-protection and remarketing campaigns timed to your booking windows, so paid clicks land on your own booking page instead of a reseller's.",
        points: [
          "Your brand name protected",
          "Booking-window schedules",
          "Bookings tracked to the ad",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "Booking-Ready Travel Website Design",
        desc: "Fast pages with clear itineraries, real photos, honest inclusions and a booking engine that works on a phone in a few taps.",
        points: [
          "Mobile booking flow",
          "Itinerary and FAQ pages",
          "Speed tuned for photos",
        ],
        links: [
          { href: "/services/web-design", label: "Travel website design" },
        ],
      },
      {
        icon: "pin",
        title: "Google Maps for Departure Points and Hotels",
        desc: "Offices, departure points, hotels and attractions set up to rank on the map, with photos, hours and the booking link travelers check on arrival day.",
        points: [
          "Category and photo setup",
          "Booking link on the profile",
          "Suspension recovery",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile reinstatement",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Guest Reputation",
        desc: "Review requests sent as guests check out or step off the tour, with replies written in your voice so planners see a business that cares.",
        points: [
          "Post-trip review requests",
          "Guest replies written for you",
          "Reviews beside booking buttons",
        ],
        links: [
          {
            href: "/services/local-seo-for-small-business",
            label: "Local SEO for small businesses",
          },
        ],
      },
      {
        icon: "mail",
        title: "Email, Social and Repeat-Guest Marketing",
        desc: "Trip-planning emails, short travel videos and offers to past guests keep your brand in the mix while people compare dates and destinations.",
        points: [
          "Pre-trip email flows",
          "Short-form trip videos",
          "Past-guest offers",
        ],
        links: [{ href: "/services", label: "All marketing services" }],
      },
    ],
  },
  growth: {
    title: "How Our Travel SEO Agency Brings Bookings Home",
    lead: "AI travel answers, the map and your own booking page, each built to win the trip.",
    rows: [
      {
        title: "Get Recommended When Travelers Plan Trips With AI",
        body: [
          "More trips now start with a question to ChatGPT, Gemini or Google's AI Overview. With ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          ", we publish itineraries, inclusions, meeting points and cancellation terms in a form those tools can quote, then back them with reviews, so your tour or stay is named in the answer.",
        ],
        points: [
          "Itineraries AI can read",
          "Policies stated plainly",
          "Reviews that describe trips",
          "Matching listings everywhere",
        ],
        cta: "See If AI Recommends Us",
        ui: {
          kind: "tripChat",
          prompt: "Plan 3 days in Charleston for food lovers",
          days: [
            "Arrive, stroll the old town and settle in",
            "Small-group food tour through the historic district",
            "Harbor cruise, then a farm-to-table dinner",
          ],
          pick: "Your Tour Co. · Food tour",
          note: "Small groups · Local guide · Free cancellation",
          img: "/images/travel-tourism/postcard-culinary-tour.webp",
        },
      },
      {
        title: "Rank on the Map Where Travelers Look on Arrival",
        body: [
          "Once travelers land, they search the map for tours, dinners and things to do nearby. We tune your ",
          {
            href: "/local-seo-google-business-optimization",
            label: "Google Business Profile",
          },
          " with the right categories, fresh photos, a booking link and steady reviews, so you show up in that moment.",
        ],
        points: [
          "Things-to-do categories",
          "Booking link on the profile",
          "Weekly photo posts",
          "Prompt review replies",
        ],
        cta: "Check My Map Ranking",
        ui: {
          kind: "thingsToDo",
          query: "things to do in key west",
          tabs: ["Things to do", "Tours", "Boat trips"],
          tours: [
            {
              name: "Your Tour Co. · Sunset sail",
              img: "/images/travel-tourism/postcard-cruise-deck.webp",
              tag: "Book online",
            },
            {
              name: "Another island tour",
              img: "/images/travel-tourism/postcard-island-escape.webp",
              tag: "Tour",
            },
            {
              name: "Another beach day trip",
              img: "/images/travel-tourism/postcard-coastal-resort.webp",
              tag: "Day trip",
            },
          ],
          toast: "New booking from Google · Sunset sail",
        },
      },
      {
        title: "Turn Lookers Into Direct Bookings on Your Own Site",
        body: [
          "Commission sites win when your booking page is slow or unclear. We build mobile pages that answer what is included, who the trip suits and where to meet, then make booking a few taps, so travelers book direct and you keep the guest's details.",
        ],
        points: [
          "Clear inclusions",
          "Few-tap mobile checkout",
          "Reasons to book direct",
          "Guest data you keep",
        ],
        cta: "Fix My Booking Page",
        ui: {
          kind: "directBook",
          url: "yourresortco.com/book",
          title: "Oceanfront Suite, Booked Direct",
          img: "/images/travel-tourism/destination-hero.webp",
          dates: "Fri – Sun",
          guests: "2 adults",
          perks: [
            "Best rate when you book direct",
            "Free date changes",
            "Late checkout on request",
          ],
          cta: "Book direct",
          toast: "Booking confirmed",
          toastNote: "Guest added to your email list",
        },
      },
    ],
  },
  // Grey UI panels like the /home2 cards (owner, 26 Oct).
  growthPanel: "var(--panel)",
  ownLeads: {
    title: "Direct Bookings vs. Commission Bookings",
    body: [
      "Online travel agencies can fill quiet dates, but every booking they send costs a commission and keeps the guest's details on their side. We grow the share of travelers who book with you directly, so more revenue and every guest relationship stay in your hands.",
    ],
    cta: "Grow My Direct Bookings",
    colShared: "Booked through an OTA",
    colOwn: "Booked direct with you",
    rows: [
      [
        "Commission on the booking",
        "Taken from every reservation",
        "None, you keep the full rate",
      ],
      [
        "Guest email and history",
        "Held by the platform",
        "Yours for future trips",
      ],
      [
        "How your offer appears",
        "Listed beside rivals",
        "Your brand on its own",
      ],
      ["Add-ons and upgrades", "Limited to their checkout", "Offered your way"],
    ],
  },
  specialties: {
    title: "Marketing for Every Kind of Travel Business",
    lead: "A boutique hotel, a whale-watching tour and a tourism board win travelers in different ways, so each gets its own plan.",
    photo: {
      src: "/images/travel-tourism/traveler-direct-booking-checkout.webp",
      alt: "Traveler completing a direct hotel booking on a smartphone beside luggage",
      caption: "Tours, stays and destinations",
      sub: "Each with its own path to booking",
    },
    items: [
      {
        icon: "hotel",
        name: "Hotels & Resorts",
        tactic: "Hotel SEO and direct-booking pages",
      },
      {
        icon: "hiking",
        name: "Tour & Activity Operators",
        tactic: "Things-to-do pages and ads by departure point",
      },
      {
        icon: "rental",
        name: "Vacation Rentals",
        tactic: "Property pages that rank and book direct",
      },
      {
        icon: "map",
        name: "Destination Marketing Organizations",
        tactic: "Visitor guides and seasonal campaigns",
      },
      {
        icon: "luggage",
        name: "Travel Agencies & Advisors",
        tactic: "Niche trip pages and inquiry forms",
      },
      {
        icon: "sailing",
        name: "Cruise, Boat & Charter",
        tactic: "Charter pages timed to the sailing season",
      },
      {
        icon: "compass",
        name: "Adventure & Eco Tours",
        tactic: "Trip pages with safety and gear details",
      },
      {
        icon: "ticket",
        name: "Attractions & Experiences",
        tactic: "Ticket pages and listings on Google",
      },
    ],
    more: "Run a campground, a ski school or a wedding venue? We plan marketing for those too.",
  },
  steps: {
    title: "Your Tourism Marketing Plan in Three Steps",
    lead: "We start well before peak season, so rankings, reviews and campaigns are ready when booking searches climb.",
    items: [
      {
        h: "We Audit Your Booking Channels",
        p: "We review your rankings, map listings, ads and booking flow, then show where travelers drop off and how much of your business runs through commission sites.",
      },
      {
        h: "We Map Plans to Your Booking Windows",
        p: "Together we choose the trips, markets and seasons to push first, with campaigns starting ahead of the weeks when travelers book.",
      },
      {
        h: "We Launch and Report in Bookings",
        p: "Pages, profiles, ads and review requests go live together. Monthly reports show direct bookings, revenue and the channels that produced them.",
      },
    ],
    audit: [
      ["Rank: things to do in your area", "behind"],
      ["Booking link on Google profile", "gap"],
      ["Mobile booking flow", "open"],
      ["Reviews vs nearby operators", "behind"],
    ],
    plan: [
      "Day tours",
      "Private charters",
      "Shoulder season",
      "Drive markets",
      "Repeat guests",
    ],
    launch: [
      "Profile and booking link live",
      "Tour pages published",
      "Brand search ads running",
      "Post-trip review requests on",
    ],
  },
  reviews: {
    title: "Clients Rate Our Work 5.0 on Google",
    lead: "Straight from our Google profile: what owners say about working with our team.",
  },
  pricing: {
    title: "Travel Marketing Plans for Every Season",
    compareTitle: "Compare Plans for Tours, Stays and Destinations",
    addOnsTitle: "Add Campaigns Before Peak Booking Season",
    customTitle: "Marketing several properties or destinations?",
  },
  faq: {
    title: "Travel Marketing FAQs for Tours, Hotels and Destinations",
    lead: "Direct bookings, travel SEO, ads, AI search and seasons.",
    items: [
      {
        q: "What does a tourism marketing agency handle for a travel business?",
        a: "It helps travel businesses get found and booked. That means travel SEO for destination and activity searches, Google Ads around booking windows, a strong Google Business Profile, review programs, booking-ready websites and visibility in AI answers, all measured in bookings and revenue rather than clicks.",
      },
      {
        q: "How can a tour operator get more direct bookings instead of OTA bookings?",
        a: "Make booking with you the easier choice. Protect your brand name in search, add your own booking link on Google, answer pre-trip questions on your site, give a reason to book direct such as flexible changes or add-ons, and remarket to visitors who left without booking. Keep OTAs for reach, not as the main channel.",
      },
      {
        q: "Is travel SEO still worth it with AI Overviews and AI trip planners?",
        a: "Yes, but the target has moved. AI tools build answers from pages they can read and trust, so clear itineraries, inclusions, policies and reviews now help you rank and get named in AI answers at the same time. Travel SEO done this way serves both.",
      },
      {
        q: "What is Google Things to Do, and should my tours be listed?",
        a: "It is the part of Google Search and Maps that shows tours, attractions and activities with booking options. If you sell tours or tickets, connecting your booking system puts a book button in front of people searching your area. We help set it up and keep the listings accurate.",
      },
      {
        q: "How do you plan tourism marketing around travel seasons?",
        a: "By booking windows, not calendar months. Content and SEO run well ahead of peak season, ads scale as travelers start booking, and shoulder months get packages, drive-market campaigns and past-guest offers so quieter dates still fill.",
      },
      {
        q: "Do you work with hotels, vacation rentals and destination organizations?",
        a: "Yes. We work with boutique hotels, resorts, vacation rental managers, tour and activity operators, travel advisors, attractions and destination marketing organizations. Each gets a plan suited to how its travelers search and book, from hotel SEO to visitor guides.",
      },
      {
        q: "Can Google Ads work for tour operators on a modest budget?",
        a: "Yes, when spend goes to the right searches: your brand name, tours near where travelers stay and remarketing to recent visitors. We schedule campaigns around booking windows, cut wasted clicks and track each booking back to its ad. Ad spend is billed at a 0% markup.",
      },
      {
        q: "What does travel and tourism marketing cost at Zonic Media?",
        a: "Plans cost $297, $750 or $1,500 each month, all month to month, with ad spend billed at a 0% markup. A single tour or rental usually starts on the first tier; operators with several products or markets tend to need more.",
      },
      {
        q: "How long before a travel business sees more bookings?",
        a: "Ads, profile fixes and booking-page changes can lift bookings within weeks. Travel SEO and destination content build over several months and keep growing after that. Monthly reports show both, so quick wins and long-term growth sit side by side.",
      },
    ],
  },
  audit: {
    title: "Free Travel Marketing Audit Before Your Next Season",
    lead: [
      "Tell us what you sell and where. We check how you rank for trip searches, review your Google profile, ",
      { href: "/services/web-design", label: "booking flow and website" },
      " and reviews against the businesses outranking you, and order every fix by how fast it lifts bookings. Travel sits among the ",
      { href: "/industries", label: "20+ industries we serve" },
      ". Rather speak to someone? Our ",
      { href: "/about", label: "team" },
      " is a ",
      { href: "/contact-us", label: "call or message away" },
      ", and you can read more about ",
      { href: "/", label: "Zonic Media" },
      " first.",
    ],
    points: [
      "Plans from $297 a month",
      "Free, with no obligation",
      "Direct-booking review included",
      "0% ad-spend markup",
    ],
    form: {
      formType: "travel-tourism-marketing",
      badge: "Free travel marketing audit",
      title: "Request Your Free Travel Marketing Audit",
      subtitle: "Free, with no long-term contract.",
      submitText: "Send My Travel Audit",
      messageLabel: "Your tours, stays or destination",
      messagePlaceholder:
        "What you sell, where your travelers come from, your booking system and your busiest season",
    },
  },
  banner: {
    title: "Fill Your Calendar With Travelers Who Book Direct",
    lead: "Book a free audit and find the fastest route to more direct bookings.",
    icons: ["plane", "map"],
  },
};
