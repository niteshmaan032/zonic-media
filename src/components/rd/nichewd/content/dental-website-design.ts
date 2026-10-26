/* Dental Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: dental website design company 183
     impressions (pos 39.2) · dentist web design company 131 (43.8) ·
     dental website design companies 123 (30.7) · dental web design company
     110 (31.0) · dental website design agency 106 (39.9) · dental website
     design services 47 (37.0) · dentist website design company 28 (43.1) ·
     dental web design services 13 (40.7).
   - Semrush US: dental website design 2,900 (KD 26) · dental web design
     1,900 (27) · dental websites 1,600 (33) · dentist website design 880
     (32) · dental practice website design 480 (23).
   - Web research (practice-website guides and dentist forums, 2026):
     patients expect 24/7 self-scheduling with real openings, mobile intake
     and consent forms finished before the visit, a plain "do you take my
     insurance?" page (in-network plans, membership plans, financing), a
     separate emergency page with the phone number as the main action,
     one page per treatment, team photos and reviews to calm nervous
     patients, accessible layouts. Dentists hiring a web team ask about
     redesigns keeping rankings, booking integration, HIPAA-aware forms,
     ownership and specialist or multi-office builds.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company or software named, no clinical claims,
   "clear aligners" (no brand), verified numbers only, every live content
   link kept; small-business local SEO link replaces the home-services one. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/dental-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by patient need",
    business: "Your Dental Practice",
    domain: "yourdentalpractice.com",
    nav: ["Treatments", "Insurance", "New patients", "Visit us"],
    call: "Call the office",
    primary: "Schedule online",
    secondary: "Check my insurance",
    proof: "Trusted by patients across town",
    bookTitle: "Pick a visit time",
    confirm: "Reserve this time",
    serviceSubs: [
      "Gentle first visits",
      "Insurance checked first",
      "Weekdays and Saturdays",
    ],
    toast: "Visit reserved",
    toastNote: "Today 10 AM",
    phoneCta: "Book",
    modes: [
      {
        label: "New patients",
        icon: "tooth",
        badge: "New patients · Welcome",
        headline: "New to Town? Book Your First Cleaning Online.",
        sub: "Exams, cleanings and clear aligners, with insurance checked before you come in.",
        services: ["Exam & cleaning", "Clear aligners", "Teeth whitening"],
        book: ["New patient exam", "Cleaning", "Aligner consult"],
        img: {
          src: "/images/dental-web/hero-image-primary-v2.webp",
          position: "22% 35%",
          phonePosition: "25% 35%",
          zoom: 1.5,
        },
      },
      {
        label: "Emergency care",
        icon: "clock",
        badge: "Same-day emergencies",
        headline: "Toothache or Broken Tooth? We'll See You Today.",
        sub: "Same-day visits for a cracked tooth, a lost filling, swelling or sudden pain.",
        services: ["Toothache visit", "Broken tooth", "Lost filling"],
        book: ["Toothache", "Chipped tooth", "Swelling"],
        img: {
          src: "/images/dental-web/hero-image-primary-v2.webp",
          position: "30% 22%",
          phonePosition: "30% 22%",
          zoom: 2.0,
        },
      },
    ],
    legend: [
      "One-tap call to the front desk",
      "New-patient and emergency pages",
      "Live openings patients can book",
      "Thumb-reach call bar on phones",
    ],
  },
  // Teal for new patients, indigo for emergencies, then gold and pink.
  tones: tonesFor("dental-website-design"),
  serviceName: "Dental Website Design",
  audience: "dentists, dental practices and dental groups",
  meta: {
    title: "Dental Website Design Company | Dental Web Design Services",
    description:
      "Dental website design for practices that want more new patients: online scheduling, insurance and treatment pages, secure forms and fast mobile pages.",
    keywords: [
      "dental website design",
      "dental web design",
      "dental websites",
      "dentist website design",
      "dental practice website design",
      "dental website design company",
      "dental web design company",
      "dentist web design company",
      "dental website design companies",
      "dental website design agency",
      "dental website design services",
      "dental web design services",
      "dentist website design company",
    ],
  },
  hero: {
    h1Lead: "Dental Website Design",
    h1Rest: "That Fills Open Chairs With New Patients",
    icon: "tooth",
    lead: [
      "We design dental websites where a new patient can check insurance, pick a time and finish forms before the visit, while a patient in pain reaches your front desk in one tap. Each ",
      { href: "/services/web-design", label: "custom website" },
      " we create for a dental office launches in 2–3 weeks, with treatment pages written to rank.",
    ],
    cta: "See My Free Dental Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/dental-web/every-specialty-image.webp",
        position: "center 40%",
        query: "dental website design",
      },
      cardA: {
        icon: "search",
        title: "Seen for Every Treatment You Offer",
        sub: "Implant, aligner and cleaning pages built to rank",
      },
      photoB: {
        src: "/images/dental-web/hero-image-primary-v2.webp",
        position: "35% 30%",
        query: "family dentist near me",
      },
      cardB: {
        icon: "calendar",
        title: "New-Patient Bookings, Day and Night",
        sub: "Self-scheduling that feeds your front desk",
      },
    },
  },
  showcase: {
    title: "Try a Dental Website Built for Two Kinds of Patients",
    lead: "Switch between new patients and emergencies to see the homepage, booking and phone view change.",
  },
  services: {
    title: "Dental Web Design Company Services\nFrom First Page to Front Desk",
    lead: "General, family, cosmetic and specialty offices get one team for the build, the copy and upkeep.",
    cta: "Plan My Dental Practice Site",
    items: [
      {
        icon: "monitor",
        title: "Custom Sites for Family Dentists",
        desc: "A site shaped around your treatments, your team and how patients book, in plain words that settle nervous visitors.",
        points: [
          "Designed from scratch",
          "Team and office photos",
          "Patient-friendly copy",
        ],
        links: [
          { href: "/services/web-design", label: "Custom website design" },
          {
            href: "/services/industry/pediatricians",
            label: "SEO for pediatric offices",
          },
        ],
      },
      {
        icon: "repeat",
        title: "Practice Redesigns Without Ranking Loss",
        desc: "We rebuild dated dentist websites while keeping the addresses, reviews and treatment pages Google already trusts.",
        points: ["Every old URL mapped", "Redirects set up", "Speed rebuilt"],
        links: [],
      },
      {
        icon: "sparkle",
        title: "Implant, Aligner and Cosmetic Pages",
        desc: "High-value treatments each get a page answering comfort, timing and payment questions, ready for ads.",
        points: [
          "Dental implant pages",
          "Clear aligner pages",
          "Veneers and whitening",
        ],
        links: [
          {
            href: "/services/industry/dental-seo-services",
            label: "Dental SEO services",
          },
          { href: "/services/google-ads", label: "Google Ads for dentists" },
        ],
      },
      {
        icon: "calendar",
        title: "Online Scheduling and Digital Forms",
        desc: "Booking that syncs with your practice management software, plus intake forms patients finish on their phones before the visit.",
        points: [
          "Real-time openings",
          "Mobile intake forms",
          "Synced confirmations",
        ],
        links: [],
      },
      {
        icon: "shield",
        title: "Insurance and Membership Plan Pages",
        desc: "Clear pages listing the plans you accept, how an in-house membership works and what uninsured patients can expect.",
        points: [
          "Accepted plans list",
          "Membership plan page",
          "Financing explained",
        ],
        links: [
          {
            href: "/services/dental-marketing-agency",
            label: "Dental marketing agency",
          },
        ],
      },
      {
        icon: "tool",
        title: "Secure Hosting and Ongoing Care",
        desc: "SSL, backups, updates and accessibility checks handled for you, plus edits when hours or treatments change.",
        points: [
          "HIPAA-aware forms",
          "Accessibility checks",
          "Edits on request",
        ],
        links: [],
      },
    ],
  },
  features: {
    title: "What Patients Find on a Zonic Dental Website",
    lead: "Small details that move an anxious visitor from reading to booking.",
    items: [
      {
        icon: "phone",
        title: "The Front Desk, One Tap Away",
        text: "Your office line rides along at the foot of every mobile screen.",
      },
      {
        icon: "calendar",
        title: "Self-Scheduling Around the Clock",
        text: "Patients pick a real opening at night or on a lunch break.",
      },
      {
        icon: "clock",
        title: "An Emergency Path Without Forms",
        text: "Patients in pain see same-day steps and a direct line first.",
      },
      {
        icon: "shield",
        title: "Insurance Answered Up Front",
        text: "Accepted plans and membership options sit one click from the homepage.",
      },
      {
        icon: "file",
        title: "Forms Finished Before the Visit",
        text: "Secure new-patient paperwork that people complete at home on any phone.",
      },
      {
        icon: "users",
        title: "Dentist and Hygienist Bios",
        text: "Real faces and credentials that put first-time patients at ease.",
      },
      {
        icon: "star",
        title: "Patient Reviews by the Book Button",
        text: "Google stars sit right where patients decide to schedule.",
      },
      {
        icon: "check",
        title: "ADA-Minded, Fast-Loading Pages",
        text: "Readable contrast, keyboard paths and light code for older phones.",
      },
    ],
  },
  growth: {
    title: "Three Ways a Dental Website Adds Patients",
    lead: "Rank for treatment searches, make booking effortless and get named in AI answers.",
    rank: {
      title: "Rank for the Treatments You Want More Of",
      body: [
        "Each treatment and neighborhood page is written around what patients type, from implant consults to an emergency dentist open on Saturday, and we check positions every week. Pair those pages with ",
        {
          href: "/services/industry/dental-seo-services",
          label: "our dental SEO program",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google profile tuning",
        },
        " so the practice climbs the map pack too.",
      ],
      points: [
        "A page per treatment",
        "Neighborhood pages",
        "Weekly position checks",
        "Dentist schema markup",
      ],
      cta: "Map My Treatment Pages",
      keywords: [
        ["dentist near me", 19, 3],
        ["dental implants + your city", 31, 5],
        ["emergency dentist open now", 26, 2],
        ["clear aligners near me", 23, 4],
      ],
    },
    convert: {
      title: "Make Booking a Dentist Feel Easy",
      body: [
        "Short forms, upfront insurance answers and openings patients choose themselves turn more visits into appointments. Every booking is tagged with the page and keyword that brought the patient in, so ",
        { href: "/services/google-ads", label: "Google Ads" },
        " budgets back the treatments that fill chairs.",
      ],
      points: [
        "Live openings",
        "Insurance check step",
        "Booking source tracking",
        "Thumb-friendly layout",
      ],
      cta: "Show Me the Patient Booking Flow",
      url: "yourdentalpractice.com",
      headline: "New Patients Welcome. Book Today.",
      services: [
        "Exam & cleaning",
        "Emergency visit",
        "Clear aligners",
        "Whitening",
      ],
    },
    ai: {
      title: "Show Up When Patients Ask AI for a Dentist",
      body: [
        "When patients ask an AI assistant or Google AI Overviews which dentist takes their plan or handles emergencies, answer-first pages and clean structured data help your practice get cited. Our ",
        { href: "/services/ai-seo-services", label: "AI SEO for practices" },
        " work starts from exactly this setup.",
      ],
      points: [
        "Short, direct FAQ answers",
        "Dentist and service schema",
        "Insurance details in text",
        "Citation monitoring",
      ],
      cta: "Check How AI Sees My Practice",
      query: "which dentist nearby takes new patients",
      intro: "For a nearby dentist accepting new patients,",
      bullets: [
        "Online booking with open times",
        "Insurance plans listed clearly",
        "Warm reviews from local patients",
      ],
    },
  },
  sitemap: {
    title: "The Page Plan Behind Our Dental Practice Websites",
    lead: "One page for each thing patients look up, so treatments and neighborhoods rank on their own.",
    home: "Your Dental Practice homepage",
    groups: [
      {
        name: "General Care",
        icon: "tooth",
        pages: ["Exams & cleanings", "Fillings & crowns", "Kids' dentistry"],
      },
      {
        name: "Cosmetic & Restorative",
        icon: "sparkle",
        pages: ["Dental implants", "Clear aligners", "Veneers & whitening"],
      },
      {
        name: "Patient Info",
        icon: "file",
        pages: ["Insurance & payment", "New-patient forms", "Emergency visits"],
      },
      {
        name: "Locations",
        icon: "pin",
        pages: ["Main office page", "Neighborhood pages", "Hours & directions"],
      },
    ],
  },
  results: {
    title: "A Fuller Dental Schedule, Month by Month",
    lead: "Gains build as Google indexes new pages, reviews grow and patients book without calling.",
    cta: "Plan My Practice Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Bookings Traced to Their Source",
        text: "Calls and online requests carry source tags from day one, naming the page behind each new patient.",
      },
      {
        when: "Month 1",
        title: "Treatment Pages Enter Google",
        text: "Google crawls the implant, aligner and emergency pages, and the first local impressions show up.",
      },
      {
        when: "Months 2–3",
        title: "Rising for Dentist Searches Nearby",
        text: "Neighborhood pages and fresh reviews lift the practice for 'dentist near me' style searches.",
      },
      {
        when: "Year-end",
        title: "Ready for the Use-It-or-Lose-It Rush",
        text: "Patients spending leftover benefits find open times and book in a few taps.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Openings Filled Without Phone Tag",
        text: "Patients book cleanings and consults online, even after the office closes.",
      },
      {
        icon: "file",
        title: "Smoother First Visits",
        text: "Forms and insurance details arrive before the patient walks in.",
      },
      {
        icon: "search",
        title: "Visible for High-Value Treatments",
        text: "Implant and aligner pages keep drawing consult requests long after launch.",
      },
      {
        icon: "heart",
        title: "A Practice Patients Feel Good About",
        text: "Real team photos and honest reviews ease dental nerves before day one.",
      },
    ],
    band: [
      {
        icon: "users",
        value: "New Patient Requests",
        label: "Online booking for exams and cleanings",
      },
      {
        icon: "clock",
        value: "Emergency Visits",
        label: "Same-day pages for toothaches and breaks",
      },
      {
        icon: "heart",
        value: "Comfort Before Arrival",
        label: "Office tours and team bios that calm nerves",
      },
      {
        icon: "monitor",
        value: "Fast, Accessible Pages",
        label: "Sites that load quickly and read clearly",
      },
    ],
  },
  process: {
    title: "Dental Website Build Timeline: Mockup to Launch in 2–3 Weeks",
    lead: "A single contact person, a mockup before any build work and a go-live date fixed at kickoff.",
    items: [
      {
        when: "Week 1",
        h: "Practice Discovery and Mockup",
        p: "We learn your treatments, insurance mix and scheduling tools, and you get a homepage mockup to comment on.",
      },
      {
        when: "Weeks 1–2",
        h: "Design, Photos and Patient Copy",
        p: "Pages take shape with your team photos and plain-language treatment copy you approve.",
      },
      {
        when: "Weeks 2–3",
        h: "Scheduling, Forms and SEO Setup",
        p: "We connect booking and secure forms, set redirects and add dentist schema.",
      },
      {
        when: "Launch",
        h: "Go Live, Then Fine-Tune",
        p: "Once live, every booking is tracked and treatment pages get refined month by month.",
      },
    ],
  },
  compare: {
    title: "Why Dentists Outgrow Template Dental Websites",
    lead: "Templates look fine at launch but rarely add patients.",
    otherLabel: "Off-the-shelf dental template",
    rows: [
      {
        topic: "Treatment pages",
        other: "A lone services page that lumps every treatment together.",
        zonic:
          "A full page for implants, aligners, emergencies and each core treatment.",
      },
      {
        topic: "Dental plan questions",
        other: "Patients have to call to find out if you take their plan.",
        zonic:
          "Accepted plans and membership options answered before they ask.",
      },
      {
        topic: "Emergency visitors",
        other: "The same homepage for a toothache as for a cleaning.",
        zonic: "A same-day path with a direct line and clear next steps.",
      },
      {
        topic: "New-patient paperwork",
        other: "PDF forms to print, fill in by hand and bring along.",
        zonic: "Secure mobile forms finished before the patient arrives.",
      },
      {
        topic: "Appointment requests",
        other: "A request form someone answers the next business day.",
        zonic: "Real openings synced with your practice management software.",
      },
      {
        topic: "Photos and ownership",
        other: "Stock photos shared with other practices and a locked theme.",
        zonic: "Your own team photos and copy, on a domain registered to you.",
      },
    ],
  },
  reviews: {
    title: "Vet Our Dental Web Team on Google, Where We're Rated 5.0",
    lead: "Owners from many industries left these on our Google profile, word for word.",
  },
  pricing: {
    title: "Growth Plans for Your Dental Website",
    compareTitle: "Compare What Each Plan Adds for Dentists",
    addOnsTitle: "Add Pages for New Treatments or Dentists",
    customTitle: "Running Several Dental Offices?",
  },
  faq: {
    title: "What Dentists Ask a Dental Website Design Company",
    lead: "Cost, build time, HIPAA-aware forms, insurance pages and what a dental site needs.",
    items: [
      {
        q: "How much does a dental website design company charge?",
        a: "Pricing is a single fixed quote, given once we've had a free call covering your treatments, offices and booking setup, and it won't creep up mid-build. Enroll in a qualifying monthly growth plan for dental practices and our website offer makes the site itself free, leaving more budget for attracting patients.",
      },
      {
        q: "How many weeks until our new dental practice website is live?",
        a: "For a single office, 2–3 weeks is typical. Week one brings a free homepage mockup for your sign-off, the days after cover design and treatment copy, and online scheduling, intake forms and redirects are checked before go-live. A multi-office dental group may add a few days for location pages.",
      },
      {
        q: "What should a dental website include in 2026?",
        a: "A click-to-call number and online scheduling on every screen, a page per treatment, an emergency page, an insurance and payment page, mobile intake forms, dentist and team bios with real photos, Google reviews near the booking button, fast accessible pages and dentist schema so search engines read it all.",
      },
      {
        q: "Can patient forms on my dental site stay HIPAA-aware?",
        a: "Yes. Contact and booking forms ask only for what scheduling needs, never health history, and run over SSL. Detailed medical and insurance forms stay inside your practice management or secure intake software, which we link or embed, so protected details never land in an ordinary inbox.",
      },
      {
        q: "Can you connect online booking to our practice management software?",
        a: "In most cases, yes. We embed or link the online scheduling your practice software already offers, or set up a request flow that feeds the front desk, so patients see real openings instead of waiting on a callback, and each booking's source is tracked.",
      },
      {
        q: "Will a new dental website hurt our Google rankings?",
        a: "Handled properly, it won't. We inventory the URLs you have today, carry over the treatment pages that already pull visits, point every changed address to its new home and send Google a fresh sitemap, then watch rankings and bookings week by week.",
      },
      {
        q: "Should our website list the insurance plans we accept?",
        a: "Yes. 'Do you take my insurance?' is one of the first things a new patient checks. We build a clear page of accepted plans, explain out-of-network visits and any in-house membership plan, and link it from booking so patients don't have to call just to ask.",
      },
      {
        q: "Do you write the treatment pages and patient FAQs?",
        a: "Yes. As a dental website design agency with its own writers, we draft treatment, emergency and FAQ pages around what patients search, using the details your dentists provide. No outcome promises and no clinical claims: your team reviews and approves every page before it goes live.",
      },
    ],
  },
  consult: {
    title: "Dental Homepage Concept, Drawn Up Free",
    lead: [
      "Tell us the treatments you want to grow and where your offices sit, and our designers will sketch a dental homepage and page outline, free. Want a call first? ",
      { href: "/contact-us", label: "Send us a message" },
      ", meet ",
      { href: "/about", label: "the people behind Zonic" },
      ", scan ",
      { href: "/services", label: "our other services" },
      " or get a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google profile",
      },
      " reinstated. For map visibility, see our ",
      {
        href: "/services/local-seo-for-small-business",
        label: "small business local SEO",
      },
      " service.",
    ],
    points: [
      "A homepage mockup, free",
      "Treatment page plan",
      "Scheduling setup advice",
      "Launch in 2–3 weeks",
    ],
    form: {
      formType: "dental-website-design",
      badge: "Free dental homepage mockup",
      title: "Get Your Dental Website Mockup",
      subtitle: "No cost and no obligation.",
      submitText: "Send My Dental Practice Info",
      messageLabel: "Your practice, website and treatments",
      messagePlaceholder:
        "Practice name, current website (if any), main treatments, insurance you accept and office locations",
    },
  },
  banner: {
    title: "Turn Your Dental Website Into Your Busiest Front Desk",
    lead: "Self-scheduling, clear insurance answers and a front-desk line patients reach with a thumb.",
  },
};
