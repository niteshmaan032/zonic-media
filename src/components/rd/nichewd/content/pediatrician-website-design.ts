/* Pediatrician Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: pediatrician web design 25
     impressions (pos 31.2) · pediatric website design 14 (54.1) ·
     pediatrician website design 9 (51.3) · website design for pediatrics
     6 (35.7) · website design agencies for pediatricians 5 (13.4) ·
     pediatric website design examples 5 (37.4) · pediatric web design 4
     (61.8).
   - Semrush US: pediatric website design 260 (KD 8) · pediatrician
     website design 170 (0) · medical practice website design 720 (27,
     secondary: answered in the FAQ).
   - Web research (pediatric practice sites and practice-ops articles,
     2026): parents book well and sick visits online and expect same-day
     and next-day sick slots bookable from home; a patient portal with
     proxy access for parents; after-hours nurse line or clinic shown
     clearly; prenatal meet-and-greet sign-up, "register your baby before
     discharge" steps and newborn first-visit timing; a plain vaccine
     policy page; insurance lists; transferring records; telehealth
     visits; pages in the languages families speak. Practices ask about
     cost, timing, portal and scheduling links, privacy-safe forms and
     whether pediatric sites differ from general medical practice sites.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company, portal or software named, no clinical
   claims (physicians approve medical wording), verified numbers only,
   every live content link kept; small-business local SEO link replaces
   the home-services one. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/pediatrician-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by visit type",
    business: "Your Pediatric Practice",
    domain: "yourpediatrics.com",
    nav: ["Visits", "Newborns", "Parents", "Portal"],
    call: "Nurse line",
    primary: "Book a visit",
    secondary: "New families",
    proof: "Trusted by local families",
    bookTitle: "Schedule a visit",
    confirm: "Confirm visit",
    serviceSubs: [
      "Newborns welcome",
      "Same-day sick slots",
      "Telehealth option",
    ],
    toast: "Visit scheduled",
    toastNote: "Today 10 AM",
    phoneCta: "Book",
    modes: [
      {
        label: "Well visits",
        icon: "baby",
        badge: "Checkups · Now booking",
        headline: "Checkups and Sports Physicals, Booked Online.",
        sub: "Well-child visits from newborn to teen, with forms parents can finish at home.",
        services: ["Well-child checkup", "Vaccine visits", "Sports physical"],
        book: ["Well-child visit", "Sports physical", "Newborn visit"],
        img: {
          src: "/images/home-improvement-web/pediatrician-first-impressions-1.webp",
          position: "50% 35%",
        },
      },
      {
        label: "Sick visits",
        icon: "medical",
        badge: "Sick visits · Same day",
        headline: "Sick Kiddo? Same-Day Appointments Open Now.",
        sub: "Fevers, ear pain, coughs and rashes seen today, plus after-hours nurse advice.",
        services: [
          "Same-day sick visit",
          "Ear & throat checks",
          "Telehealth visit",
        ],
        book: ["Sick visit", "Telehealth", "Nurse callback"],
        img: {
          src: "/images/home-improvement-web/pediatrician-hero-v2.webp",
          position: "25% 30%",
          phonePosition: "28% 30%",
          zoom: 1.6,
        },
      },
    ],
    legend: [
      "Nurse-line call button",
      "Well and sick visit pages",
      "Same-day scheduling",
      "Sticky call bar for parents",
    ],
  },
  // Coral for well visits, cyan for sick visits, then purple and gold.
  tones: tonesFor("pediatrician-website-design"),
  serviceName: "Pediatric Website Design",
  audience: "pediatricians and pediatric practices",
  meta: {
    title: "Pediatric Website Design | Pediatrician Web Design Agency",
    description:
      "Pediatric website design for practices that want more new families: online well and sick visit booking, newborn pages, secure forms and fast mobile pages.",
    keywords: [
      "pediatric website design",
      "pediatrician website design",
      "pediatrician web design",
      "pediatric web design",
      "website design for pediatrics",
      "website design agencies for pediatricians",
      "pediatric website design examples",
      "pediatric practice website design",
      "medical practice website design",
      "pediatrician website",
      "pediatric practice website",
    ],
  },
  hero: {
    h1Lead: "Pediatric Website Design",
    h1Rest: "That Helps New Parents Pick Your Practice",
    icon: "baby",
    lead: [
      "We design pediatrician websites where parents can book a same-day sick visit from the couch, find newborn and vaccine policy pages, and reach your office with a single tap. A ",
      { href: "/services/web-design", label: "custom website" },
      " built for your pediatrics team launches in 2–3 weeks, with visit-type pages made to rank.",
    ],
    cta: "Request My Free Pediatric Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/pediatrician-hero-v2.webp",
        position: "center 35%",
        query: "pediatric website design",
      },
      cardA: {
        icon: "baby",
        title: "Chosen by Expecting Parents",
        sub: "Prenatal meet-and-greet pages that rank",
      },
      photoB: {
        src: "/images/home-improvement-web/pediatrician-first-impressions-1.webp",
        position: "center 30%",
        query: "pediatrician accepting new patients",
      },
      cardB: {
        icon: "calendar",
        title: "Sick Visits Booked Online",
        sub: "Same-day slots parents grab from home",
      },
    },
  },
  showcase: {
    title: "Explore a Pediatrician Website Built for Well and Sick Visits",
    lead: "Toggle the visit type to see headlines, appointment slots and the phone view update for parents.",
  },
  services: {
    title: "Pediatrician Web Design for\nPractices Families Rely On",
    lead: "Independent pediatrics offices and multi-doctor groups get design, parent-friendly copy and upkeep from one team.",
    cta: "Plan My Pediatric Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Pediatric Practice Websites",
        desc: "A warm, easy site built around your doctors, your visit types and how parents book, never a reused clinic theme.",
        points: [
          "One-of-a-kind design",
          "Provider bios",
          "Parent-friendly copy",
        ],
        links: [
          { href: "/services/web-design", label: "Our web design service" },
        ],
      },
      {
        icon: "repeat",
        title: "Redesigns That Keep Parents Finding You",
        desc: "We rebuild outdated pediatric sites with simpler menus and faster pages, keeping every URL that already ranks.",
        points: ["Old URLs mapped", "Simpler menus", "Faster on phones"],
        links: [],
      },
      {
        icon: "baby",
        title: "Newborn and Prenatal Pages",
        desc: "Pages for expecting parents: meet-and-greet sign-up, what to do after the hospital and how to register a new baby.",
        points: [
          "Meet-and-greet sign-up",
          "Newborn first visit",
          "Registration steps",
        ],
        links: [
          {
            href: "/services/industry/pediatricians",
            label: "SEO for pediatricians",
          },
        ],
      },
      {
        icon: "calendar",
        title: "Well and Sick Visit Scheduling",
        desc: "Online booking for checkups and same-day sick visits that connects to your scheduling system or patient portal.",
        points: ["Same-day sick slots", "Portal links", "Telehealth option"],
        links: [],
      },
      {
        icon: "book",
        title: "Policies, Forms and Parent Resources",
        desc: "Vaccine policy, insurance, after-hours and forms pages in plain words, with secure forms that skip medical details.",
        points: [
          "Vaccine policy page",
          "After-hours guidance",
          "Secure contact forms",
        ],
        links: [
          {
            href: "/services/gmb-verification-help",
            label: "Google profile verification help",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting, Updates and Quick Edits",
        desc: "Secure hosting, accessibility checks and quick edits when hours, doctors or flu-shot clinics change.",
        points: ["Managed hosting", "Accessibility checks", "Seasonal updates"],
        links: [
          { href: "/services/google-ads", label: "Google Ads for practices" },
        ],
      },
    ],
  },
  features: {
    title: "Parent-Friendly Features Built Into Each Pediatric Site",
    lead: "The pieces that help a tired parent find answers and book quickly.",
    items: [
      {
        icon: "phone",
        title: "One Tap to the Nurse Line",
        text: "Office and after-hours numbers stay pinned on every phone screen.",
      },
      {
        icon: "calendar",
        title: "Same-Day Sick Slots Online",
        text: "Parents grab morning sick appointments before the phones open.",
      },
      {
        icon: "baby",
        title: "A Home Base for New Parents",
        text: "Newborn visit steps, parent resources and meet-and-greet sign-up.",
      },
      {
        icon: "shield",
        title: "Vaccine and Office Policies",
        text: "Clear, kind wording on vaccines, late arrivals and new-patient rules.",
      },
      {
        icon: "users",
        title: "Get to Know Each Doctor",
        text: "Photos, training and a personal note from each provider.",
      },
      {
        icon: "key",
        title: "Patient Portal, One Click Away",
        text: "Portal login and proxy access steps sit in the main menu.",
      },
      {
        icon: "translate",
        title: "Pages in the Languages You Serve",
        text: "Translated pages, such as Spanish, so more local families can read along.",
      },
      {
        icon: "check",
        title: "Readable on Any Device",
        text: "Accessible contrast, large tap targets and fast loads on older phones.",
      },
    ],
  },
  growth: {
    title: "Reach More Families With Pediatric Web Design",
    lead: "Climb local results, make booking simple for parents and appear in AI answers.",
    rank: {
      title: "Show Up When Parents Search for a Pediatrician",
      body: [
        "Visit-type and neighborhood pages are built around what parents type, from a pediatrician accepting new patients to a same-day sick visit, and rankings are checked weekly. Combine it with ",
        {
          href: "/services/industry/pediatricians",
          label: "pediatrician SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Maps listing management",
        },
        " so the office leads the local map as well.",
      ],
      points: [
        "Visit-type pages",
        "A page for each suburb",
        "Weekly rank checks",
        "Medical practice schema",
      ],
      cta: "Plan My Visit-Type Pages",
      keywords: [
        ["new pediatrician near me", 27, 4],
        ["same day sick visit kids", 31, 5],
        ["newborn pediatrician", 24, 2],
        ["sports physical near me", 19, 3],
      ],
    },
    convert: {
      title: "Make Booking a Checkup Simple for Busy Parents",
      body: [
        "Big buttons, short forms and visit types parents recognize turn late-night browsing into booked appointments. Reports show which page and search each family came from, and ",
        { href: "/services/google-ads", label: "Google Ads" },
        " can widen your reach ahead of back-to-school season.",
      ],
      points: [
        "Visit types parents know",
        "Short booking form",
        "Booking source reports",
        "Large tap targets",
      ],
      cta: "Preview a Parent Booking Flow",
      url: "yourpediatrics.com",
      headline: "Sick Today? Book a Same-Day Visit",
      services: [
        "Sick visit",
        "Well-child",
        "Sports physical",
        "Newborn visit",
      ],
    },
    ai: {
      title: "Be the Pediatric Practice AI Search Cites",
      body: [
        "More parents now ask AI chatbots and Google AI Overviews which pediatricians nearby take new patients or stay open late. Answer-first pages and medical practice schema make your office easy to cite, a core part of our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Parent FAQs with direct answers",
        "Provider and practice schema",
        "Hours and insurance as text",
        "Monthly AI answer checks",
      ],
      cta: "See What AI Says About My Practice",
      query: "pediatrician near me with evening hours",
      intro: "For evening pediatric appointments nearby,",
      bullets: [
        "Same-day sick visits online",
        "Clear newborn guidance",
        "Kind reviews from parents",
      ],
    },
  },
  sitemap: {
    title: "Pediatric Website Design Examples, Page by Page",
    lead: "A typical practice site, laid out so each page answers something parents search.",
    home: "Your Pediatric Practice homepage",
    groups: [
      {
        name: "Visits",
        icon: "calendar",
        pages: [
          "Well-child checkups",
          "Same-day sick visits",
          "School & sports physicals",
        ],
      },
      {
        name: "New Families",
        icon: "baby",
        pages: [
          "Prenatal meet & greet",
          "Newborn first visit",
          "Transfer records",
        ],
      },
      {
        name: "Parent Resources",
        icon: "book",
        pages: ["Vaccine policy", "After-hours care", "Insurance & billing"],
      },
      {
        name: "Practice & Areas",
        icon: "pin",
        pages: ["Our pediatricians", "Office locations", "Suburb pages"],
      },
    ],
  },
  results: {
    title: "How a New Pediatric Site Pays Off Over the School Year",
    lead: "Progress builds as visit pages index, parent reviews grow and booking runs nonstop.",
    cta: "Map My Practice's First Months",
    milestones: [
      {
        when: "Launch week",
        title: "Every Appointment Has a Source",
        text: "Booking requests and calls are tagged by page from the moment the site is live.",
      },
      {
        when: "Month 1",
        title: "Visit Pages Start Indexing",
        text: "Google crawls the newborn, well-child and sick-visit pages and begins showing them to local parents.",
      },
      {
        when: "Months 2–3",
        title: "Rising in Pediatrician Searches",
        text: "Suburb pages and fresh parent reviews lift the practice toward page one.",
      },
      {
        when: "Back-to-school",
        title: "Ready for the Physicals Rush",
        text: "School and sports physical pages catch late-summer demand with open slots.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Fewer Morning Phone Jams",
        text: "Parents book sick visits online, freeing the front desk at opening.",
      },
      {
        icon: "baby",
        title: "More Expecting Parents Reaching Out",
        text: "Prenatal pages turn due-date searches into meet-and-greet requests.",
      },
      {
        icon: "search",
        title: "Visible for Every Visit Type",
        text: "Checkup, sick-visit and physical pages each pull their own searches.",
      },
      {
        icon: "heart",
        title: "Parents Who Trust You Early",
        text: "Friendly doctor pages and reviews reassure families before the first visit.",
      },
    ],
    band: [
      {
        icon: "users",
        value: "Family Sign-Ups",
        label: "New-patient forms parents can finish fast",
      },
      {
        icon: "clock",
        value: "Sick-Visit Bookings",
        label: "Same-day options shown clearly",
      },
      {
        icon: "heart",
        value: "Parent Trust",
        label: "Doctor and staff pages that reassure families",
      },
      {
        icon: "smile",
        value: "Easy for Busy Parents",
        label: "Mobile pages made for one free hand",
      },
    ],
  },
  process: {
    title: "Pediatric Website Launch Plan: 2–3 Weeks, Four Steps",
    lead: "Little effort from your team: one kickoff call, quick reviews and a fixed launch date.",
    items: [
      {
        when: "Week 1",
        h: "Intro Call and a Free Homepage Draft",
        p: "We cover your visit types, providers, portal and insurance, then send a homepage design.",
      },
      {
        when: "Weeks 1–2",
        h: "Warm Design and Parent Copy",
        p: "Pages come together with your photos and simple, friendly wording parents trust.",
      },
      {
        when: "Weeks 2–3",
        h: "Scheduling, Portal and SEO",
        p: "Online booking, portal links, redirects and practice schema are set and tested.",
      },
      {
        when: "Launch",
        h: "Launch Day and Ongoing Care",
        p: "After launch we track every booking and refresh seasonal pages ahead of flu and school seasons.",
      },
    ],
  },
  compare: {
    title: "Your Own Pediatrics Website vs. a Directory Profile Page",
    lead: "Insurer and hospital directories list you; your own website persuades parents to book.",
    otherLabel: "Directory profile page",
    rows: [
      {
        topic: "First impression",
        other: "A small photo and an address among dozens of doctors.",
        zonic: "A warm homepage that shows your team, office and care style.",
      },
      {
        topic: "New-parent questions",
        other: "Nothing about prenatal visits or newborn steps.",
        zonic:
          "Clear pages for meet-and-greets, newborn visits and registering a baby.",
      },
      {
        topic: "Booking a sick visit today",
        other: "A phone number and office hours, nothing more.",
        zonic: "Online sick-visit booking with today's openings shown.",
      },
      {
        topic: "Office policies",
        other: "Vaccine, insurance and after-hours rules left unexplained.",
        zonic: "Plain policy pages that answer parents before they call.",
      },
      {
        topic: "Searches by nearby parents",
        other: "Ranks for your name, rarely for 'pediatrician near me'.",
        zonic: "Visit-type and suburb pages built to rank in nearby searches.",
      },
      {
        topic: "Control",
        other: "Wording set by the directory, next to other practices.",
        zonic:
          "Your site, your wording and your domain, updated when you like.",
      },
    ],
  },
  reviews: {
    title: "Our 5.0 Google Rating, Before You Trust Us With Your Practice Site",
    lead: "Reviews from business owners we have built for, shown exactly as posted on Google.",
  },
  pricing: {
    title: "Plans That Keep Your Pediatric Site Growing",
    compareTitle: "How the Plans Compare for Pediatric Offices",
    addOnsTitle: "Extras for Pediatric Practice Websites",
    customTitle: "A Pediatric Group With Several Offices?",
  },
  faq: {
    title: "Pediatric Website Design: Your Questions, Our Answers",
    lead: "Cost, timing, scheduling, privacy and what parents need from your site.",
    items: [
      {
        q: "What does a pediatric website design project cost?",
        a: "Expect one fixed price, set once a free call has covered your visit types, providers and booking setup. Choose a qualifying monthly growth plan for pediatric offices and the website is included at no cost under our website offer, leaving more room to reach new families.",
      },
      {
        q: "How quickly can our new pediatric website launch?",
        a: "A typical pediatric site takes 2–3 weeks. The free homepage mockup is ready for your approval in the first week; well, sick and newborn pages follow, and we test scheduling, portal links and redirects before going live. Practices with several offices get location pages added over a few more days.",
      },
      {
        q: "Which pages should a pediatric practice website include?",
        a: "Well-child and sick-visit pages, a newborn and prenatal section, a vaccine policy page, after-hours guidance, insurance and billing, forms and portal access, doctor bios, office locations with hours, and parent reviews. Each page answers one thing parents look up, which also helps it rank.",
      },
      {
        q: "Can parents book sick visits online through the website?",
        a: "Yes. We connect the online scheduling built into your practice software or patient portal, or add a request form that alerts your front desk at once, so parents can grab same-day sick slots and checkups without waiting on hold. Each request is logged with the page that sent it.",
      },
      {
        q: "Is pediatric website design different from medical practice website design?",
        a: "The foundations match: fast pages, secure forms, provider bios and schema. Pediatric sites add what parents need: newborn and prenatal pages, same-day sick booking, vaccine and after-hours policies, portal proxy access for guardians and a warmer, family-friendly design that still reads as a trusted medical office.",
      },
      {
        q: "Will redesigning our pediatrics site affect our Google rankings?",
        a: "Not when it is handled carefully. We catalog the URLs you have now, preserve the visit pages families already find you through, forward retired addresses to their replacements and hand Google an updated sitemap. For the first weeks we watch the practice's rankings and appointment requests and fix anything that slips.",
      },
      {
        q: "How do you keep website forms safe for patient privacy?",
        a: "Our contact and booking forms collect only what scheduling needs, with no symptoms or health history, and every page runs over SSL. Anything medical goes through your secure portal or practice software, which we link from the site, so protected details stay out of email.",
      },
      {
        q: "Can we see pediatric website design examples before we commit?",
        a: "Yes. The example site on this page shows how well and sick visit pages switch, and every project starts with a free homepage mockup in your colors, with your photos and visit types. You decide whether to move ahead only after seeing it.",
      },
      {
        q: "Do you write the content, including vaccine and after-hours pages?",
        a: "Yes. We draft every page in calm, plain language, including vaccine policy, after-hours and insurance pages, using the details and medical wording your physicians provide. Your team reviews and approves each page, so nothing clinical goes live without a doctor's sign-off.",
      },
    ],
  },
  consult: {
    title: "Picture Your Practice's New Homepage, Free",
    lead: [
      "Send your visit types, providers and the neighborhoods your families live in, and get back a homepage concept and visit-page outline without charge. Prefer a conversation? ",
      { href: "/contact-us", label: "Reach our team" },
      ", read ",
      { href: "/about", label: "our story" },
      ", explore ",
      { href: "/services", label: "all services" },
      " or ask us to restore a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google listing",
      },
      ". For wider local reach, see ",
      {
        href: "/services/local-seo-for-small-business",
        label: "local SEO for small businesses",
      },
      ".",
    ],
    points: [
      "Homepage mockup, no charge",
      "Visit-type page plan",
      "Portal and booking tips",
      "Launch inside 2–3 weeks",
    ],
    form: {
      formType: "pediatrician-website-design",
      badge: "Free pediatric homepage mockup",
      title: "Ask for Your Pediatric Site Mockup",
      subtitle: "Free and no-pressure.",
      submitText: "Request My Free Mockup",
      messageLabel: "Your practice, website and visit types",
      messagePlaceholder:
        "Practice name, current website, providers, visit types you offer and the neighborhoods your families come from",
    },
  },
  banner: {
    title: "Let Parents Book Your Next Checkup Tonight",
    lead: "Same-day sick slots, newborn pages and a nurse line one tap away.",
  },
};
