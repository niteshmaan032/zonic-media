/* Towing Company Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: towing website design 154
     impressions (pos 17.4) · towing web design 52 (16.0) · web design for
     roadside assistance 41 (19.1) · web design for towing service 39
     (19.6) · towing website design agency 21 (11.0) · towing company
     website design 21 (17.6) · towing websites 3 (26.3).
   - Semrush US: towing website design 110 (KD 18) · tow truck website 30
     · towing company website design 20.
   - Web research (2026 towing and roadside website guides, dispatch
     software docs): almost all towing traffic is mobile and urgent, so a
     click-to-call number on every screen beats any form; customers expect
     to share their location and get a clear idea of arrival; separate
     pages per roadside service (jump starts, lockouts, fuel, winch-outs);
     a clear list of towns and counties served; 24/7 stated plainly;
     impound and vehicle-release pages (documents, hours, directions,
     digital forms) cut repeat calls; dispatch tools track motor club,
     fleet and municipal accounts, so commercial pages matter; light pages
     for weak roadside signal; reviews near the call button.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company or software named, verified numbers only,
   every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/towing-company-website-design",
  stage: {
    widget: "dispatch",
    switchLabel: "Preview the example site by call type",
    business: "Your Towing Co.",
    domain: "yourtowingco.com",
    nav: ["Towing", "Roadside", "Fleet", "Areas"],
    call: "24/7 dispatch",
    primary: "Request a tow",
    secondary: "Fleet accounts",
    proof: "Trusted by local drivers",
    bookTitle: "Get help now",
    confirm: "Dispatch a truck",
    serviceSubs: ["Fast response", "Insured operators", "Day and night"],
    toast: "Tow request sent",
    toastNote: "Truck en route",
    phoneCta: "Tow",
    modes: [
      {
        label: "Roadside & towing",
        icon: "tow",
        badge: "Roadside help · 24/7",
        headline: "Stranded? Send Your Location and We'll Roll.",
        sub: "Towing, jump starts, lockouts and flat tire changes around the clock.",
        services: ["Local towing", "Jump starts", "Lockouts"],
        book: ["Tow my car", "Jump start", "Flat tire"],
        img: {
          src: "/images/free-website/free-towing/roadside-assistance.webp",
          position: "45% 45%",
        },
      },
      {
        label: "Fleet & heavy-duty",
        icon: "truck",
        badge: "Commercial · Fleet accounts",
        headline: "Heavy-Duty Towing for Fleets and Big Rigs.",
        sub: "Semi, box truck and equipment towing, plus account billing for fleets.",
        services: ["Semi towing", "Box trucks", "Equipment hauling"],
        book: ["Semi truck", "Box truck", "Equipment"],
        img: {
          src: "/images/free-website/free-towing/fleet-accounts.webp",
          position: "50% 45%",
        },
      },
    ],
    legend: [
      "One-tap dispatch header",
      "Roadside and fleet landing pages",
      "Location-sharing tow request",
      "Sticky call bar on phones",
    ],
  },
  // Red for roadside calls, slate for fleet work, then gold and cyan
  // (tones.ts).
  tones: tonesFor("towing-company-website-design"),
  serviceName: "Towing Company Website Design",
  audience:
    "towing companies, tow truck operators and roadside assistance providers",
  meta: {
    title: "Towing Website Design Agency | Towing Company Web Design",
    description:
      "Towing website design for tow truck and roadside assistance companies: one-tap calls, tow request forms and town pages that rank and ring your dispatch line.",
    keywords: [
      "towing website design",
      "towing web design",
      "towing company website design",
      "towing website design agency",
      "towing company web design",
      "web design for towing service",
      "web design for roadside assistance",
      "roadside assistance website design",
      "tow truck website",
      "tow truck website design",
      "towing websites",
    ],
  },
  hero: {
    h1Lead: "Towing Company Website Design",
    h1Rest: "That Keeps Your Tow Line Ringing",
    icon: "tow",
    lead: [
      "We build towing websites that load fast on a weak roadside signal, keep your dispatch number on every screen and let drivers share their location in one tap. The ",
      { href: "/services/web-design", label: "custom website" },
      " we design for you launches in 2–3 weeks, and every town you tow in gets its own page.",
    ],
    cta: "Get My Free Towing Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/towing-company-hero.webp",
        position: "35% 40%",
        query: "towing website design",
      },
      cardA: {
        icon: "phone",
        title: "More Calls From Roadside Searches",
        sub: "Tap-to-call on every page and phone",
      },
      photoB: {
        src: "/images/home-improvement-web/towing-company-first-impressions-1.webp",
        position: "center 45%",
        query: "tow truck near me",
      },
      cardB: {
        icon: "pin",
        title: "Ranked in Every Town You Tow",
        sub: "Coverage pages built for local tow searches",
      },
    },
  },
  showcase: {
    title: "Test-Drive a Towing Web Design Built for Roadside Calls",
    lead: "Switch between roadside and fleet calls to see the homepage, tow request and phone view change.",
  },
  services: {
    title: "Towing Web Design Services\nFor Roadside Assistance Teams",
    lead: "From light-duty tows to heavy recovery, one team builds and looks after the site.",
    cta: "Plan My Towing Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Tow Truck Websites",
        desc: "A site built around your trucks, services and coverage area, written for drivers who need help right now.",
        points: ["Custom layout", "Your trucks pictured", "Calm, plain copy"],
        links: [
          { href: "/services/web-design", label: "Our web design service" },
        ],
      },
      {
        icon: "tow",
        title: "Pages for Each Roadside Call",
        desc: "Separate pages for towing, jump starts, lockouts, fuel delivery and winch-outs, each with a call button up top.",
        points: [
          "One page per service",
          "Call button first",
          "Ad-ready layouts",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for towing" },
        ],
      },
      {
        icon: "pin",
        title: "Town and Highway Coverage Pages",
        desc: "A page for each town, highway corridor and county you cover, so you show up where drivers break down.",
        points: ["Town pages", "Highway corridor pages", "Coverage map"],
        links: [
          {
            href: "/services/industry/seo-services-for-car-towing",
            label: "SEO for towing companies",
          },
        ],
      },
      {
        icon: "truck",
        title: "Fleet and Commercial Account Pages",
        desc: "Pages that win business accounts, from dealerships and repair shops to property managers and fleet operators.",
        points: [
          "Account sign-up form",
          "Heavy-duty services",
          "Business billing info",
        ],
        links: [],
      },
      {
        icon: "key",
        title: "Impound and Vehicle Release Pages",
        desc: "Release steps, required documents, lot hours and directions, so owners arrive prepared and your phone stays free.",
        points: [
          "Release checklist",
          "Lot hours and map",
          "Digital release forms",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Hosting, Care and Profile Help",
        desc: "Managed hosting, updates and quick edits after launch, plus help keeping your Google Business Profile verified.",
        points: [
          "Managed hosting",
          "Monthly edits",
          "Profile verification help",
        ],
        links: [
          {
            href: "/services/gmb-verification-help",
            label: "Google profile verification",
          },
          {
            href: "/towing-website-design-agency-us/offer",
            label: "Free towing website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Towing Company Website Features That Make the Phone Ring",
    lead: "Built for a stressed driver on a cracked phone screen at the side of the road.",
    items: [
      {
        icon: "phone",
        title: "Dispatch Number Always Visible",
        text: "Your dispatch line stays pinned to the screen on every page.",
      },
      {
        icon: "pin",
        title: "Share My Location Button",
        text: "Drivers send their GPS position in one tap instead of guessing mile markers.",
      },
      {
        icon: "clock",
        title: "Clear Arrival Expectations",
        text: "Pages explain response times by area, so callers know what to expect.",
      },
      {
        icon: "bolt",
        title: "Works on One Bar of Service",
        text: "Lightweight pages open fast on one bar of rural coverage.",
      },
      {
        icon: "tow",
        title: "Service Pages for Every Call",
        text: "Towing, lockouts, jump starts, winch-outs and fuel delivery each get a page.",
      },
      {
        icon: "truck",
        title: "Fleet Account Signup",
        text: "Businesses request an account and billing setup online.",
      },
      {
        icon: "star",
        title: "Reviews Next to the Call Button",
        text: "Recent Google reviews reassure drivers right before they dial.",
      },
      {
        icon: "search",
        title: "Towing Schema Markup",
        text: "Local business and service markup that helps Google place you on the map.",
      },
    ],
  },
  growth: {
    title: "How Towing Website Design Brings In More Tow Calls",
    lead: "Rank for roadside searches, convert panicked visitors and get named in AI answers.",
    rank: {
      title: "Rank for Tow Searches Along Every Route",
      body: [
        "Service, town and highway pages target the exact words drivers type on the shoulder, with positions logged every week. Adding ",
        {
          href: "/services/industry/seo-services-for-car-towing",
          label: "towing SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google Maps profile work",
        },
        " helps you claim the map pack, too.",
      ],
      points: [
        "Highway and town pages",
        "Search terms mapped",
        "Weekly rank checks",
        "Towing service schema",
      ],
      cta: "Map My Coverage Pages",
      keywords: [
        ["tow truck near me", 23, 3],
        ["roadside assistance + your city", 30, 5],
        ["24 hour towing service", 26, 4],
        ["heavy duty towing near me", 35, 6],
      ],
    },
    convert: {
      title: "Turn Roadside Searches Into Dispatched Trucks",
      body: [
        "A pinned call bar, a location-sharing tow request and short forms make it easy for a stressed driver to reach you. Calls are traced to the page and keyword behind them, and ",
        { href: "/services/google-ads", label: "towing ads" },
        " can push more roadside traffic their way.",
      ],
      points: [
        "Pinned call bar",
        "Location sharing",
        "Call source tracking",
        "Light, fast pages",
      ],
      cta: "Show Me a Tow Request Flow",
      url: "yourtowingco.com",
      headline: "Need a Tow? Help Is One Tap Away",
      services: [
        "Call dispatch",
        "Roadside help",
        "Scheduled tow",
        "Fleet account",
      ],
    },
    ai: {
      title: "Show Up When Drivers Ask AI Who Tows Nearby",
      body: [
        "More drivers now ask a voice or AI assistant for the nearest tow. Clear service pages, accurate hours and structured data help AI Overviews name your company, the basis of our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Plain-answer service FAQs",
        "Hours and area schema",
        "Consistent business details",
        "AI answer checks",
      ],
      cta: "Check My Towing AI Visibility",
      query: "who does 24 hour towing near me",
      intro: "For round-the-clock towing nearby,",
      bullets: [
        "Open around the clock",
        "A clear coverage area",
        "Reviews praising quick arrivals",
      ],
    },
  },
  sitemap: {
    title: "The Towing Site Map That Covers Every Call",
    lead: "Each page matches a roadside search, so the whole site pulls in calls, not just the homepage.",
    home: "Your Towing Co. homepage",
    groups: [
      {
        name: "Towing",
        icon: "tow",
        pages: ["Light-duty towing", "Flatbed towing", "Motorcycle towing"],
      },
      {
        name: "Roadside",
        icon: "car",
        pages: ["Jump starts", "Lockouts", "Fuel delivery"],
      },
      {
        name: "Commercial",
        icon: "truck",
        pages: ["Heavy-duty towing", "Fleet accounts", "Impound and release"],
      },
      {
        name: "Coverage",
        icon: "pin",
        pages: ["Town pages", "Highway pages", "County pages"],
      },
    ],
  },
  results: {
    title: "After Your Towing Website Launches: The Road Ahead",
    lead: "Calls tracked from day one, coverage pages climbing and steadier work from accounts.",
    cta: "Show Me the Launch Roadmap",
    milestones: [
      {
        when: "Launch week",
        title: "Dispatch Calls Logged From Day One",
        text: "Call tracking and the tow request form start on launch day, so you see which pages ring the phone.",
      },
      {
        when: "Month 1",
        title: "Coverage Pages Picked Up",
        text: "Google crawls the service and town pages, and nearby roadside searches begin to surface them.",
      },
      {
        when: "Months 2–3",
        title: "Climbing for Tow Truck Searches",
        text: "Town and highway pages, backed by fresh reviews, move up for tow truck near me searches.",
      },
      {
        when: "Winter season",
        title: "Ready When Breakdowns Spike",
        text: "Dead batteries, slide-offs and holiday travel bring a rush of calls, and your pages are ready.",
      },
    ],
    wins: [
      {
        icon: "phone",
        title: "Calls From Drivers in Trouble",
        text: "One-tap calling and location sharing get stranded drivers through to dispatch fast.",
      },
      {
        icon: "truck",
        title: "Steady Fleet Account Work",
        text: "Account pages bring repeat business from dealers, shops and fleets.",
      },
      {
        icon: "trend",
        title: "Service-Area Pages Built to Hold Rank",
        text: "Town and highway pages keep earning calls well after launch.",
      },
      {
        icon: "star",
        title: "A Name Drivers Trust",
        text: "Real truck photos, honest reviews and clear service details earn trust before the call.",
      },
    ],
    band: [
      {
        icon: "phone",
        value: "Roadside Calls",
        label: "One tap from stranded driver to dispatch",
      },
      {
        icon: "briefcase",
        value: "Fleet Accounts",
        label: "Commercial pages that win business contracts",
      },
      {
        icon: "pin",
        value: "Found on the Highway",
        label: "Coverage pages for every route you run",
      },
      {
        icon: "clock",
        value: "Built for Bad Signal",
        label: "Light pages that load on the roadside",
      },
    ],
  },
  process: {
    title: "Live in 2–3 Weeks: How We Build Your Towing Website",
    lead: "A no-cost homepage sketch up front and a launch date you can count on.",
    items: [
      {
        when: "Week 1",
        h: "Coverage and Call Flow Planning",
        p: "We map your services, towns and dispatch setup, then mock up a homepage around your trucks.",
      },
      {
        when: "Weeks 1–2",
        h: "Roadside Copy and Page Design",
        p: "Pages are designed and written for stranded drivers and fleet managers, with your truck photos.",
      },
      {
        when: "Weeks 2–3",
        h: "Build, Tracking and Local SEO",
        p: "Call tracking and the tow request form go in first, then schema, redirects and coverage pages.",
      },
      {
        when: "Launch",
        h: "Switch On and Keep Tuning",
        p: "Once live, every call is tracked and new coverage pages follow as you add towns.",
      },
    ],
  },
  compare: {
    title: "Template Tow Sites vs. a Zonic Build",
    lead: "What a towing-specific build adds over a do-it-yourself page.",
    otherLabel: "DIY builder site",
    rows: [
      {
        topic: "Calling dispatch",
        other: "A phone number in small print at the top of the page.",
        zonic: "A pinned call bar and tap-to-call on every screen.",
      },
      {
        topic: "Driver location",
        other: "Callers struggle to describe where they are.",
        zonic: "A share-my-location button that sends GPS details to dispatch.",
      },
      {
        topic: "Speed on the roadside",
        other: "Heavy themes that crawl on one bar of signal.",
        zonic: "Lightweight pages that load fast on weak rural coverage.",
      },
      {
        topic: "Service coverage",
        other: "A single page listing every town in one paragraph.",
        zonic: "Real town and highway pages with local jobs and reviews.",
      },
      {
        topic: "Fleet and commercial work",
        other: "Nowhere for businesses to set up an account.",
        zonic: "Account pages and forms that bring in repeat fleet calls.",
      },
      {
        topic: "Impound releases",
        other: "Owners phone with the same release questions all day.",
        zonic: "A release page with documents, hours and directions.",
      },
    ],
  },
  reviews: {
    title: "What Clients Say About Our Builds on Google (5.0)",
    lead: "Every review is unedited and posted publicly on our Google profile.",
  },
  pricing: {
    title: "Pick a Plan That Keeps the Tow Calls Coming",
    compareTitle: "Plan Features for Towing Companies",
    addOnsTitle: "Extra Coverage Pages and Tools",
    customTitle: "Running Trucks Out of Several Yards?",
  },
  faq: {
    title: "Questions Tow Truck Owners Ask About Websites",
    lead: "Cost, build time, dispatch tools and what a towing site needs.",
    items: [
      {
        q: "What does a towing company website cost?",
        a: "Every tow business is different, so we talk through your trucks, services and coverage on a free call, then send one firm quote that doesn't change once work starts. And if you choose one of our qualifying plans, billed monthly, the build costs nothing under our free towing website offer.",
      },
      {
        q: "How quickly can my towing website go live?",
        a: "Plan on 2–3 weeks for most tow companies. First comes a no-cost homepage mockup, then your page and truck photo approvals, and finally call tracking, the tow request form and redirects before the switch. Your current site stays up the whole time, so not a single call is missed during the build.",
      },
      {
        q: "What should a towing website include?",
        a: "A dispatch number pinned to every screen, a tow request form with location sharing, separate pages for towing and each roadside service, town and highway coverage pages, fleet account and impound release pages, reviews beside the call button and pages that load fast on weak signal.",
      },
      {
        q: "Can customers share their location from my website?",
        a: "Yes. A share-my-location button sends the caller's GPS position with the tow request, so dispatch knows where to go without guessing mile markers or exits. Requests can text or email your team instantly or feed the dispatch software you already run, and callers see a clear confirmation once the request is through.",
      },
      {
        q: "Can my site attract fleet and commercial accounts?",
        a: "Yes. We add commercial pages that explain your heavy-duty equipment, coverage and account setup, with a form businesses can use to open an account. Dealerships, repair shops, property managers and fleets reach the right person without tying up the main dispatch line.",
      },
      {
        q: "Will a new website hurt my towing rankings?",
        a: "A planned move protects them. We list your current pages and their rankings, keep the ones that ring the phone, set 301 redirects for anything renamed and monitor calls and positions closely in the weeks after launch. Your Google Business Profile link and phone number stay consistent, so map rankings hold steady too.",
      },
      {
        q: "Do I need a website if I already get motor club calls?",
        a: "Club and network calls help, but you don't control their volume or their rates. A website that ranks for tow truck near me brings private-pay calls straight to your dispatch and builds a name drivers remember, so you rely less on any single source.",
      },
      {
        q: "Do you write the content for towing websites?",
        a: "Yes. A writer on our team drafts each roadside, town and FAQ page from what stranded drivers actually type, from jump starts to heavy-duty recovery, in calm, plain words. You check every page before launch, and we keep adding coverage pages as your trucks reach new towns.",
      },
      {
        q: "Will my website work on phones with weak signal?",
        a: "Yes. We keep pages light, compress truck photos, avoid heavy scripts and test on slow mobile connections, because most tow searches happen on a phone at the roadside, often with only a bar or two of coverage. The call button loads first, so a driver can reach dispatch even before the rest of the page appears.",
      },
    ],
  },
  consult: {
    title: "Claim a Free Homepage Mockup for Your Tow Business",
    lead: [
      "Send us your services, truck types and coverage area, and you'll get a free homepage sketch plus a town-by-town page outline. Prefer a call first? ",
      { href: "/contact-us", label: "Reach our team" },
      ", get to know ",
      { href: "/about", label: "Zonic Media" },
      ", browse ",
      { href: "/services", label: "the services we offer" },
      " or, if your listing was pulled, read about ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Google profile reinstatement",
      },
      ". Roadside and towing businesses can also explore our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for service businesses",
      },
      " page.",
    ],
    points: [
      "Homepage mockup at no cost",
      "Coverage page plan",
      "Call tracking setup tips",
      "Ready in 2–3 weeks",
    ],
    form: {
      formType: "towing-company-website-design",
      badge: "Free towing homepage mockup",
      title: "Show Me My New Towing Homepage",
      subtitle: "Free, fast and no obligation.",
      submitText: "Get My Tow Site Mockup",
      messageLabel: "Your company, trucks and coverage area",
      messagePlaceholder:
        "Company name, current website (if any), services you offer and the towns or highways you cover",
    },
  },
  banner: {
    title: "Put Your Tow Trucks on Every Driver's Screen",
    lead: "Roadside pages, location-sharing requests and a dispatch line that's never more than a tap away.",
  },
};
