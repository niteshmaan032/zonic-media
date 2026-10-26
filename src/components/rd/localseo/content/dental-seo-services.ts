/* Dental SEO Services — redesign draft copy (26 Oct 2026) for
   /services/industry/dental-seo-services. Fresh wording; never reuse the
   live page, the electricians reference or the dental marketing draft
   (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: no impressions recorded yet.
   - Semrush US: dental seo 6,600 (KD 35) · seo for dentists 5,400 (28) ·
     dental seo company 3,600 (44) · dentist seo 3,600 (26) · dental seo
     services 2,900 (37) · local seo for dentists 2,900 (24) · dental seo
     agency 2,400 (32) · seo for dental practices 720 (25).
   - Web research (WebSearch x6, WebFetch of two ranking pages): top pages
     lead with treatment pages, GBP categories (Dentist primary, specialty
     secondaries), reviews and schema; patient searches seen were
     "emergency dentist open saturday", "dentist accepting new patients",
     "invisalign provider", "kids dentist". Gaps on those pages: no HIPAA
     review-reply guidance, no AI-answer coverage, no tracking that keeps
     health data out. Those gaps became the review card, the AI row and
     the leads row; the HIPAA FAQ follows the "never confirm someone is a
     patient" rule. Directories are named generically, never by brand.
   - Title keeps "Dental SEO Company" (live title lead) and adds "SEO for
     Dentists"; H1 carries "Dental SEO Services" (slug + head term). */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/dental-seo-services",
  audience: "Dentists and dental practices",
  serviceName: "Dental SEO Services",
  meta: {
    title: "Dental SEO Company & Services | SEO for Dentists",
    description:
      "Dental SEO services for practices that want more new patients: local SEO for dentists on Google Maps, treatment pages, HIPAA-aware reviews and AI answers.",
    keywords: [
      "dental seo",
      "seo for dentists",
      "dental seo company",
      "dentist seo",
      "dental seo services",
      "local seo for dentists",
      "dental seo agency",
      "seo for dental practices",
      "dental practice seo",
      "dentist local seo",
    ],
  },
  hero: {
    h1Lead: "Dental SEO Services",
    h1Rest: "That Help New Patients Pick Your Practice",
    icon: "tooth",
    lead: [
      "When a toothache starts or a family moves to town, patients type “dentist near me” and ring one of the first offices on the map. Our dental SEO earns your practice that spot by refining your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", treatment pages and patient reviews.",
    ],
    cta: "Start My Free Dental SEO Audit",
    ui: {
      kind: "growth",
      maps: "pack",
      ai: "overview",
      growth: "calendar",
      business: "Your Dental Practice",
      category: "Dentist",
      query: "dentist near me",
      aiPrompt: "dentist near me accepting new patients",
      aiReasons: ["Accepting new patients", "Gentle care reviews"],
      growthLabel: "New patient visits",
      leads: [
        ["New patient exam", "Google Maps"],
        ["Emergency visit", "AI Overview"],
        ["Implant consult", "Implant page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "Rank #1",
          title: "The Practice Patients See First",
          text: "Your listing leads the pack for nearby dentist searches.",
        },
        {
          label: "AI Overview",
          badge: "Cited",
          title: "Cited When Patients Search for Care",
          text: "Treatment pages and reviews get your practice named in AI Overviews.",
        },
        {
          label: "Patients",
          badge: "Booking up",
          title: "New Patient Exams on the Schedule",
          text: "Exams, emergencies and consults book straight from local search.",
        },
      ],
    },
  },
  searches: {
    title: "What Patients Type Before Choosing a Dentist",
    lead: "Your pages, profile and reviews are shaped around the words patients really use, from sudden pain to planned treatment.",
    groups: [
      {
        icon: "clock",
        label: "Same-day dental searches",
        terms: [
          "emergency dentist near me",
          "dentist open saturday",
          "chipped tooth repair",
          "toothache relief today",
          "walk in dentist",
          "same day crown",
        ],
      },
      {
        icon: "tooth",
        label: "Dental treatment searches",
        terms: [
          "dental implants near me",
          "invisalign provider",
          "teeth whitening near me",
          "root canal specialist",
          "cosmetic dentist near me",
          "wisdom teeth removal",
        ],
      },
      {
        icon: "users",
        label: "Family and new-patient dental searches",
        terms: [
          "dentist accepting new patients",
          "family dentist near me",
          "kids dentist near me",
          "dentist that takes my insurance",
          "sedation dentist for anxiety",
          "top rated dentist nearby",
        ],
      },
    ],
  },
  services: {
    title: "What Our Dental SEO Agency\nDoes for Your Practice",
    lead: "Six pieces of work, each aimed at the treatments and neighborhoods you want more patients from.",
    cta: "Review My Dental Website",
    items: [
      {
        icon: "pin",
        title: "Google Profile Tuning for Dental Offices",
        desc: "Primary and secondary dental categories, hours, new-patient status, real treatment-room photos and weekly posts, so Maps shows your office nearby.",
        points: [
          "Dentist category set",
          "Office photo refresh",
          "Weekly profile posts",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Business Profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Profile verification support",
          },
        ],
      },
      {
        icon: "file",
        title: "Treatment Pages for Dental Practices",
        desc: "One page per procedure patients look up, from implants and aligners to crowns and emergency visits, each answering comfort, timing and insurance questions.",
        points: [
          "Implant and aligner pages",
          "Emergency visit page",
          "Neighborhood pages",
        ],
        links: [
          {
            href: "/services/dental-website-design",
            label: "Dental website design",
          },
        ],
      },
      {
        icon: "star",
        title: "HIPAA-Aware Review Growth for Dentists",
        desc: "Post-visit text requests, replies that never confirm who sat in your chair, and patients describing the treatment in their own words.",
        points: [
          "Post-visit review texts",
          "Privacy-safe replies",
          "Treatments named in reviews",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Technical SEO for Dental Websites",
        desc: "Fast mobile pages, Dentist schema, clean indexing and booking buttons that work, so Google reads each treatment page and patients can act.",
        points: [
          "Dentist schema markup",
          "Mobile speed fixes",
          "Online booking checks",
        ],
        links: [
          { href: "/services/web-design", label: "Fast practice websites" },
        ],
      },
      {
        icon: "layers",
        title: "Dental Citations and Community Links",
        desc: "One name, address and phone across health listings and booking and doctor directories, plus links from dental societies, schools and local news.",
        points: [
          "Health listing cleanup",
          "Dental society links",
          "Community sponsorships",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended listing recovery",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "Dentist Answers in ChatGPT and AI Overviews",
        desc: "Answer-first FAQs, dentist and office facts kept identical everywhere, and monthly checks of what ChatGPT, Gemini and AI Overviews say about you.",
        points: [
          "Treatment FAQ answers",
          "Dentist entity data",
          "Monthly AI spot checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for practices" },
        ],
      },
    ],
  },
  growth: {
    title: "Where Local SEO for Dentists Grows Your Patient List",
    lead: "Good dentist SEO shows up as higher Maps spots, mentions in AI answers and calls you can trace to a page.",
    rank: {
      title: "Move Dental Treatment Pages Onto Page One",
      body: [
        "We group searches by treatment and neighborhood, then write or rebuild the treatment page best placed to rank for it. Implants, aligners and emergency care get their own pages, and every search is checked weekly against nearby offices.",
      ],
      points: [
        "Treatment keyword map",
        "Neighborhood rank checks",
        "Nearby office gaps",
        "Weekly position log",
      ],
      cta: "Show My Dental Keyword Gaps",
      keywords: [
        ["dentist near me", 18, 3],
        ["emergency dentist", 24, 2],
        ["dental implants + your city", 31, 4],
        ["family dentist + your town", 15, 2],
      ],
    },
    ai: {
      title: "Get Your Dental Office Named in AI Answers",
      body: [
        "When an anxious patient asks ChatGPT or Gemini for a gentle dentist, the reply draws on clear treatment pages, matching office details and recent reviews. We add schema, align your listings and write plain answers to common patient questions, the groundwork our ",
        { href: "/services/ai-seo-services", label: "AI SEO team" },
        " runs for every practice.",
      ],
      points: [
        "Dentist and office schema",
        "Patient FAQ answers",
        "Matching listings",
        "AI answer reviews",
      ],
      cta: "Check What AI Says About My Office",
      query: "gentle dentist for anxious patients near me",
      intro: "For a gentle dentist near you,",
      bullets: [
        "Sedation options explained",
        "Clear new-patient page",
        "Recent patient reviews",
      ],
    },
    leads: {
      title: "Trace Each New-Patient Call to a Dental Search",
      body: [
        "A ranking only matters when the front desk phone rings. We tag calls and appointment requests by page and search, without storing health details, and add ",
        {
          href: "/services/google-ads",
          label: "Google Ads for dental offices",
        },
        " when you need new-patient visits sooner.",
      ],
      points: [
        "Calls matched to treatments",
        "Front-desk call button",
        "Appointment request form",
        "Monthly new-patient report",
      ],
      cta: "Show Where My Patients Come From",
      items: [
        ["New-patient exam call", "Google Maps", "Mon 8:05 AM"],
        ["Implant consult request", "Implants page", "Mon 12:30 PM"],
        ["Emergency visit call", "Google AI Overview", "Tue 7:40 AM"],
        ["Cleaning appointment form", "Neighborhood page", "Wed 4:15 PM"],
      ],
    },
  },
  results: {
    title: "How a Dental Practice Grows With Zonic SEO",
    lead: "Progress shows up in stages: a corrected office profile, then treatment pages, reviews and new-patient calls.",
    cta: "Map My Practice's Growth Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Office Profile Put Right",
        text: "We correct categories, hours, insurance notes and photos until Google pairs your office with the right dental searches.",
      },
      {
        when: "Month 1",
        title: "Implant and Aligner Pages Up",
        text: "Treatment and emergency pages publish and start chasing the searches patients type before they book.",
      },
      {
        when: "Months 2–4",
        title: "Stronger Dental Map Presence",
        text: "New reviews, health listings and local links tend to move your office toward the top three in more neighborhoods.",
      },
      {
        when: "Month 4 onward",
        title: "A Busier Dental Schedule",
        text: "More calls and appointment requests for the treatments you chose, each one traced to the page that brought it.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "More Booked New-Patient Exams",
        text: "Searches like “dentist accepting new patients” lead to a profile and pages that make the first booking simple.",
      },
      {
        icon: "star",
        title: "Reviews That Reassure Nervous Patients",
        text: "A steady flow of fresh Google reviews, each answered without revealing who visited or what was done.",
      },
      {
        icon: "sparkle",
        title: "Mentioned in AI Answers About Dentists",
        text: "Consistent office facts and plain treatment answers give ChatGPT and Google AI good reasons to mention you.",
      },
      {
        icon: "users",
        title: "Less Dependence on Dental Directories",
        text: "More patients choose you straight from Google instead of booking and doctor directories that list rivals beside you.",
      },
    ],
  },
  compare: {
    title: "Zonic or a Generic Agency: Dental SEO Compared",
    lead: "What dental practices often get from general agencies, and what we do differently.",
    rows: [
      {
        topic: "Replies to dental reviews",
        other:
          "Template replies that can confirm a visit or mention treatment details.",
        zonic:
          "HIPAA-aware replies that say thanks while never confirming a reviewer is a patient or mentioning treatment.",
      },
      {
        topic: "Booking a first dental visit",
        other: "Pages that rank but hide the booking button or phone number.",
        zonic:
          "Tap-to-call, appointment request forms and online booking links checked on every treatment page we build.",
      },
      {
        topic: "Dental insurance questions",
        other:
          "Accepted plans left off, so patients call another office to ask.",
        zonic:
          "Treatment pages and profile Q&A that answer the common insurance questions in plain words.",
      },
      {
        topic: "Implant and aligner pages",
        other:
          "One general services page expected to rank for every procedure.",
        zonic:
          "Separate implant, aligner and emergency pages, each written around what patients actually search for.",
      },
      {
        topic: "Dentist and office details",
        other:
          "Dentist bios and office facts that differ across listings and the site.",
        zonic:
          "Matching dentist and office facts across your site and listings, marked up with Dentist schema.",
      },
      {
        topic: "Dental contract terms",
        other:
          "Long agreements, with listings or tracking held in the agency's name.",
        zonic:
          "Month to month, with your Google profile, website and tracking accounts kept in the practice's name.",
      },
    ],
  },
  steps: {
    title: "SEO for Dental Practices, Step by Step",
    lead: "Office profile and website fixes come first, then treatment pages, reviews and links that add up month after month.",
    items: [
      {
        h: "Dental Market Audit and Treatment Map",
        p: "We compare your profile, site and reviews with nearby offices, then rank the treatments and neighborhoods worth chasing first.",
      },
      {
        h: "Repair the Dental Profile, Publish Pages",
        p: "Profile corrections and technical repairs land in the first week, followed by treatment pages, neighborhood pages and review requests.",
      },
      {
        h: "Monthly Dental Reports and Next Moves",
        p: "Every month you see rankings, calls and appointment requests by treatment, and we shift effort toward whatever is bringing patients in.",
      },
    ],
    audit: [
      ["Maps ranking", "behind"],
      ["Implant page", "gap"],
      ["Review texts", "open"],
      ["Booking button", "behind"],
    ],
    plan: [
      "Implant page",
      "Aligner page",
      "Emergency page",
      "Neighborhood pages",
      "Reviews",
    ],
    launch: [
      "Profile corrected",
      "Treatment pages live",
      "Review texts on",
      "Calls traced",
    ],
  },
  explore: {
    title: "More Ways We Help Dental Practices Grow",
    lead: "Search works harder next to a site that converts and ads for slower weeks.",
    items: [
      {
        name: "Dental Marketing",
        sub: "One plan for SEO, ads and site",
        href: "/services/dental-marketing-agency",
        icon: "tooth",
      },
      {
        name: "Dental Website Design",
        sub: "Pages that turn visits into bookings",
        href: "/services/dental-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "New-patient calls while SEO builds",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Small Business Local SEO",
        sub: "The core local playbook",
        href: "/services/local-seo-for-small-business",
        icon: "pin",
      },
    ],
    other:
      "Several offices or associate dentists under one brand? We can plan SEO for every location together.",
  },
  reviews: {
    title: "Our 5.0 Google Rating, in Business Owners' Words",
    lead: "Unedited reviews from the owners we work with, posted on our Google listing.",
  },
  pricing: {
    title: "Dental SEO Plans With No Long Contract",
    compareTitle: "Side-by-Side Plans for Dental Offices",
    addOnsTitle: "Extras for Dental Offices",
    customTitle: "Need SEO for a Dental Group?",
  },
  faq: {
    title: "Dental SEO Questions Practice Owners Ask Us",
    lead: "Costs, timing, Maps rankings, privacy and what SEO for dentists covers.",
    items: [
      {
        q: "What does a dental SEO company actually do?",
        a: "It makes your practice easier to find and choose on Google. That means tuning your Business Profile, writing treatment and neighborhood pages, fixing site speed and schema, growing reviews and cleaning up listings, then reporting calls and appointment requests so you can see which work brings patients.",
      },
      {
        q: "How much does SEO for dentists cost with Zonic Media?",
        a: "Plans are $297, $750 or $1,500 a month, billed month to month. A single office usually begins on the first plan; practices with several dentists, more treatments to rank or a need for managed Google Ads often choose the second or third. The audit will point to the right one.",
      },
      {
        q: "When do dentists usually see SEO results?",
        a: "Many practices notice more Maps views and calls within the first few weeks, once the profile is corrected and treatment pages go live. Crowded searches such as “dentist near me” in a large city usually need several months. Each monthly report tracks positions, calls and appointment requests, so progress is visible.",
      },
      {
        q: "Which searches should a dental practice rank for first?",
        a: "Start where demand meets your schedule: “dentist near me”, “emergency dentist”, “dentist accepting new patients” and the treatments you most want to grow, like implants or aligners, paired with your town. The audit sizes each search so effort goes to the ones that bring new patients, not vanity terms.",
      },
      {
        q: "How does local SEO for dentists win the Map Pack?",
        a: "Start with the best-fit primary category, add specialties as secondary ones, list every treatment, keep hours and new-patient status current, post weekly and earn a steady stream of reviews. Identical office details on health listings plus a focused website page per treatment back the profile up.",
      },
      {
        q: "Is dentist SEO safe under HIPAA?",
        a: "It should be, and ours is set up that way. Review replies never confirm that someone is a patient or mention treatment, call tracking never stores health details, and pages avoid promising clinical outcomes. Before-and-after photos or patient stories go live only with written consent that your office collects and keeps.",
      },
      {
        q: "Do dental implants and aligners each need their own page?",
        a: "Yes, for the treatments you want to grow. A focused implant or aligner page answers what patients ask before booking, such as comfort, steps and insurance, and can rank for that exact search, which a single long services page rarely manages.",
      },
      {
        q: "Can a dental SEO agency handle several office locations?",
        a: "Yes. Each office gets its own verified profile, a location page with real team and parking details, and rankings tracked by neighborhood, so you see which locations lead and where to focus next. Shared brand pages stay on one site to keep authority together.",
      },
      {
        q: "Will AI search change how patients find a dentist?",
        a: "It already shapes the first click. Google AI Overviews and ChatGPT pull from the same signals local search rewards: clear treatment pages, consistent office details and recent reviews. Practices with strong local SEO tend to be the ones these tools name, which is why we check AI answers monthly.",
      },
      {
        q: "Are dental SEO contracts month to month?",
        a: "Yes. Plans renew monthly with no long commitment. The practice keeps ownership of its Google profile, site and call-tracking logins, and every report lists the changes we made that month and the reason for each one.",
      },
    ],
  },
  audit: {
    title: "Find Out Where Your Dental Office Ranks, Free",
    lead: [
      "Send your website and the procedures you would like more of. We check your Maps position, site and reviews against nearby offices and reply with a plain plan. See ",
      { href: "/about", label: "who runs our dental accounts" },
      " or browse ",
      { href: "/services", label: "our other practice-growth services" },
      ".",
    ],
    points: [
      "Maps rank by neighborhood",
      "Treatment keyword gaps",
      "Business Profile check",
      "First-month action list",
    ],
    form: {
      formType: "local-seo",
      badge: "Dental practice SEO audit",
      title: "Book a Dental Practice SEO Audit",
      subtitle: "Free, private and with no obligation.",
      submitText: "Send My Dental Office Details",
      messageLabel: "Your website and the procedures to grow",
      messagePlaceholder:
        "yourpractice.com, key treatments and the neighborhoods you serve",
    },
  },
  banner: {
    title: "Become the Dentist Your Neighborhood Calls First",
    lead: "More new-patient calls from Maps, search and AI answers, with a monthly report showing what changed.",
  },
};
