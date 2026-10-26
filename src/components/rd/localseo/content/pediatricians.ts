/* Pediatrician SEO — redesign draft copy (26 Oct 2026) for
   /services/industry/pediatricians. Fresh wording; never reuse the live
   page, the electricians reference or the pediatric marketing draft
   (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: pediatrics seo company 381
     impressions (pos 11.7, the page's best term) · pediatrician seo 100
     (20.5) · seo for pediatrician 83 (21.4) · pediatrician seo marketing 53
     · seo for pediatricians 36 (17.8). The marketing terms in the same
     report (pediatrician marketing 228, pediatric marketing agency 85…)
     are left to /services/pediatric-marketing-agency.
   - Semrush US: pediatrician seo 50 (KD 0) · pediatric dental seo 10.
   - Web research (WebSearch x5, WebFetch of a ranking pediatric SEO
     agency page; a second ranking page returned 403): ranking pages skip
     new-patient openings, insurance, after-hours/sick-visit and newborn
     searches. Parent guides (hospital systems) say families pick a
     pediatrician before the birth, check "accepting new patients" and
     insurance first, then hours and after-hours care. "Pediatrician" is a
     Google Business Profile category. That shaped the visit-type pages
     card, the new-family and sick-day search groups, the profile hero
     (new-patient status, Saturday hours, prenatal Q&A) and the HIPAA
     review FAQ (replies never name a child or confirm a visit).
   - Title leads with "Pediatrician SEO" (live title term) and keeps
     "Pediatrics SEO Company" (top GSC term); "Pediatric Practice
     Marketing" is dropped from the title so the marketing page owns it. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/pediatricians",
  audience: "Pediatricians and pediatric practices",
  serviceName: "Pediatrician SEO",
  meta: {
    title: "Pediatrician SEO | Pediatrics SEO Company for Practices",
    description:
      "Pediatrician SEO and local SEO for pediatricians: Maps rankings, visit pages, privacy-safe parent reviews and AI answers that bring new families in.",
    keywords: [
      "pediatrician seo",
      "pediatric seo",
      "seo for pediatricians",
      "pediatrics seo company",
      "seo for pediatrician",
      "pediatrician seo company",
      "local seo for pediatricians",
      "pediatric practice seo",
      "pediatric seo services",
    ],
  },
  hero: {
    h1Lead: "Pediatrician SEO",
    h1Rest: "That Makes You the First Call for New Parents",
    icon: "baby",
    lead: [
      "Parents-to-be pick a pediatrician before the due date, and families who move search “pediatrician accepting new patients” within days. Our pediatric SEO puts your practice in those results by refining your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google profile",
      },
      ", visit pages and parent reviews.",
    ],
    cta: "Get My Free Pediatrician SEO Audit",
    ui: {
      kind: "growth",
      maps: "towns",
      ai: "voice",
      growth: "calendar",
      business: "Your Pediatric Practice",
      category: "Pediatrician",
      query: "pediatrician near me",
      areas: [
        "Downtown",
        "School district",
        "North suburbs",
        "New neighborhoods",
      ],
      aiPrompt: "Find a pediatrician near me taking new patients",
      aiReasons: ["Taking new families", "Same-day sick visits"],
      growthLabel: "New family appointments",
      leads: [
        ["Newborn visit", "Google Maps"],
        ["Sick visit", "Voice search"],
        ["Well-child checkup", "Visit page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 by area",
          title: "The Pediatrician Parents Find Nearby",
          text: "Your practice leads the map in the neighborhoods families move to.",
        },
        {
          label: "Voice & AI",
          badge: "Suggested",
          title: "Suggested When Parents Ask Out Loud",
          text: "Voice and AI assistants name you for newborn and sick visits.",
        },
        {
          label: "Families",
          badge: "Booking",
          title: "New Families on the Schedule",
          text: "Newborn, sick and well-child visits book straight from search.",
        },
      ],
    },
  },
  searches: {
    title: "What Parents Search When Choosing a Pediatrician",
    lead: "Each page and profile field is written around words parents use, from a fever at night to a first newborn visit.",
    groups: [
      {
        icon: "baby",
        label: "New-family pediatrician searches",
        terms: [
          "pediatrician accepting new patients",
          "pediatrician near me",
          "newborn doctor near me",
          "prenatal pediatrician visit",
          "pediatrician that accepts my insurance",
          "best pediatrician + your town",
        ],
      },
      {
        icon: "clock",
        label: "Sick-day pediatric searches",
        terms: [
          "same day pediatric appointment",
          "pediatrician open saturday",
          "after hours pediatrician",
          "pediatric urgent care near me",
          "child fever doctor near me",
        ],
      },
      {
        icon: "calendar",
        label: "Checkup and pediatric care searches",
        terms: [
          "well child visit near me",
          "school physical near me",
          "sports physical for kids",
          "kids flu shot near me",
          "adhd pediatrician near me",
          "teen doctor near me",
        ],
      },
    ],
  },
  services: {
    title: "SEO for Pediatricians\nFrom Newborn Pages to Reviews",
    lead: "Six services, each pointed at the visits you want booked, from prenatal meet-and-greets to sports physicals.",
    cta: "Check My Pediatric Website",
    items: [
      {
        icon: "pin",
        title: "Pediatric Practice Profile on Google",
        desc: "Pediatrician category, accepting-new-patients status, Saturday hours, kid-friendly office photos and weekly updates, so your practice appears when nearby parents search.",
        points: [
          "Pediatrician category set",
          "New-patient status shown",
          "Weekly parent updates",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile optimization",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Getting your listing verified",
          },
        ],
      },
      {
        icon: "file",
        title: "Visit-Type Pages for Pediatric Offices",
        desc: "Pages for newborn care, well-child checkups, sick visits, vaccines and sports physicals, each answering the hours, insurance and age questions parents ask.",
        points: [
          "Newborn and prenatal pages",
          "Sick-visit page",
          "Town pages for families",
        ],
        links: [
          {
            href: "/services/pediatrician-website-design",
            label: "Pediatric website design",
          },
        ],
      },
      {
        icon: "star",
        title: "Pediatric Review Growth Without Privacy Risk",
        desc: "A text to parents after visits, replies that never name a child or confirm care, and a steady flow of fresh parent feedback.",
        points: [
          "Post-visit parent texts",
          "Child-safe replies",
          "Fresh review flow",
        ],
        links: [],
      },
      {
        icon: "tool",
        title: "Pediatric Site Speed, Schema and Booking",
        desc: "Fast phone-first pages, Pediatrician schema, tidy indexing and a portal or booking link parents can find, so Google reads every visit page.",
        points: [
          "Pediatrician schema",
          "Phone-first layout",
          "Booking link checks",
        ],
        links: [
          {
            href: "/services/web-design",
            label: "Practice websites built to rank",
          },
        ],
      },
      {
        icon: "layers",
        title: "Pediatric Listings and Community Links",
        desc: "Correct practice details on insurer lists and booking and doctor directories, with links earned from schools, youth leagues, birthing centers and parent groups.",
        points: [
          "Insurer list accuracy",
          "Youth league links",
          "Parent group mentions",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile reinstatement",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "Pediatrician Answers in AI Search",
        desc: "Plain answers to parent questions, consistent doctor and office facts, and a monthly review of what ChatGPT and AI Overviews tell parents nearby.",
        points: [
          "Parent FAQ answers",
          "Doctor profile facts",
          "Monthly AI review",
        ],
        links: [
          {
            href: "/services/ai-seo-services",
            label: "AI SEO for medical practices",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Pediatric SEO Grows Your Patient Panel",
    lead: "Pediatrician SEO marketing brings higher Maps spots, practice mentions in AI answers and new-family calls you can trace.",
    rank: {
      title: "Lift Pediatrician Pages Into the Top Results",
      body: [
        "Parent searches are grouped by visit type and town, and each group gets the page best placed to win it. Newborn care, sick visits and physicals stand on their own pages, with rankings recorded every week beside nearby practices.",
      ],
      points: [
        "Visit-type keyword map",
        "Town-by-town rankings",
        "Nearby practice gaps",
        "Weekly rank notes",
      ],
      cta: "Find My Pediatric Search Gaps",
      keywords: [
        ["pediatrician near me", 22, 3],
        ["pediatrician accepting new patients", 29, 2],
        ["same day pediatric appointment", 35, 4],
        ["newborn doctor + your town", 18, 2],
      ],
    },
    ai: {
      title: "Earn Pediatrician Mentions in AI Overviews",
      body: [
        "Many new parents ask ChatGPT or Google's AI which pediatrician near them takes new patients. Those answers draw on clear visit pages, steady office details and recent reviews, so we build all three, backed by our ",
        { href: "/services/ai-seo-services", label: "AI search work" },
        ".",
      ],
      points: [
        "Practice and doctor schema",
        "Parent question answers",
        "Consistent listings",
        "Monthly AI answer log",
      ],
      cta: "Check My Practice in AI Answers",
      query: "pediatrician near me taking new patients",
      intro: "For a pediatrician taking new families nearby,",
      bullets: [
        "Accepting new patients",
        "Clear newborn visit page",
        "Recent parent reviews",
      ],
    },
    leads: {
      title: "See Which Searches Bring New Pediatric Families",
      body: [
        "A top ranking matters once a parent picks up the phone. Each call and visit request is tagged with the page and search behind it, no child health data kept, and ",
        {
          href: "/services/google-ads",
          label: "Google Ads for pediatric practices",
        },
        " can fill open newborn slots faster.",
      ],
      points: [
        "Parent call tracking",
        "Tap-to-call buttons",
        "Visit request form",
        "Monthly new-family report",
      ],
      cta: "Show Me Where Families Find Us",
      items: [
        ["Newborn visit call", "Google Maps", "Fri 8:12 AM"],
        ["Sports physical request", "Physicals page", "Mon 2:10 PM"],
        ["Sick visit call", "Google AI Mode", "Tue 7:15 AM"],
        ["Prenatal meet request", "Town page", "Wed 5:20 PM"],
      ],
    },
  },
  results: {
    title: "The Pediatric Practice Growth Path With Zonic",
    lead: "Change comes in steps: an accurate listing first, then visit pages, parent reviews and new-family calls.",
    cta: "Plan My Pediatric Growth Path",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Accurate Pediatric Listing",
        text: "We set the Pediatrician category, new-patient status and weekend hours, so parents start seeing correct details.",
      },
      {
        when: "Month 1",
        title: "Newborn and Sick-Visit Pages",
        text: "Newborn, sick-visit and physicals pages launch and begin competing for the searches parents make most often.",
      },
      {
        when: "Months 2–4",
        title: "Wider Reach Across Family Towns",
        text: "Parent reviews and links from schools and youth leagues help lift the practice toward top Maps spots in more towns.",
      },
      {
        when: "Month 4 onward",
        title: "More New Families Calling In",
        text: "More calls and visit requests from new families, traced to the page and search that brought each one.",
      },
    ],
    wins: [
      {
        icon: "baby",
        title: "Expecting Parents Book Prenatal Visits",
        text: "Parents choosing before the birth find a clear prenatal and newborn page with an easy way to book.",
      },
      {
        icon: "star",
        title: "Parent Reviews That Build Confidence",
        text: "Fresh reviews from families, each answered without naming a child, show new parents an active, responsive practice.",
      },
      {
        icon: "sparkle",
        title: "Named in AI Answers for Families",
        text: "Clear visit pages and consistent doctor details help AI assistants describe your practice accurately to parents.",
      },
      {
        icon: "clock",
        title: "Sick-Day Calls Come Straight to You",
        text: "Parents searching for same-day or Saturday care see your hours and call your office directly.",
      },
    ],
  },
  compare: {
    title: "Pediatric SEO With Zonic vs. a Generic Agency",
    lead: "Where pediatric practices are often underserved by general SEO, and what we do instead.",
    rows: [
      {
        topic: "Replies to parent reviews",
        other: "Replies that can name a child or hint at a diagnosis.",
        zonic:
          "Replies that thank families without naming a child, confirming a visit or discussing any care.",
      },
      {
        topic: "New-patient openings shown",
        other:
          "Accepting-new-patients status left off, so parents assume the practice is full.",
        zonic:
          "New-patient status kept current on your profile and site, with a clear way to book.",
      },
      {
        topic: "Pediatric insurance questions",
        other:
          "Insurance details buried in a PDF or missing from the site entirely.",
        zonic:
          "Visit pages and profile answers that cover the common insurance questions parents ask before calling.",
      },
      {
        topic: "Visit-type pages for parents",
        other:
          "One services page covering newborns, sick visits and teens together.",
        zonic:
          "Separate newborn, sick-visit, vaccine and sports physical pages, each built around real parent searches.",
      },
      {
        topic: "Pediatrician bios and listings",
        other:
          "Doctor bios that differ across directories, or leave out credentials.",
        zonic:
          "Matching doctor and office facts across listings and your site, marked up with Pediatrician schema.",
      },
      {
        topic: "Pediatric reports and ownership",
        other:
          "Ranking charts with no link to calls, and accounts held by the agency.",
        zonic:
          "Month to month, accounts in the practice's name, with calls and visit requests tracked every month.",
      },
    ],
  },
  steps: {
    title: "How Our Pediatrics SEO Company Gets Started",
    lead: "The listing and website get fixed first; visit pages, parent reviews and community links follow and add up over time.",
    items: [
      {
        h: "Pediatric Visibility Review and Visit Map",
        p: "We look at your listing, website and reviews beside nearby practices, then rank which visit types and towns to chase first.",
      },
      {
        h: "Fix the Pediatric Listing, Launch Visit Pages",
        p: "Listing corrections and site fixes go out in week one, with newborn, sick-visit and town pages plus parent review texts after.",
      },
      {
        h: "Track New Pediatric Families, Then Expand",
        p: "Monthly reports show rankings, calls and visit requests by visit type, and we put more effort into pages that bring new families.",
      },
    ],
    audit: [
      ["Maps position", "behind"],
      ["Newborn page", "gap"],
      ["Parent reviews", "open"],
      ["Phone layout", "behind"],
    ],
    plan: [
      "Newborn page",
      "Sick-visit page",
      "Physicals page",
      "Town pages",
      "Parent reviews",
    ],
    launch: [
      "Listing corrected",
      "Visit pages live",
      "Review texts sent",
      "Calls tracked",
    ],
  },
  explore: {
    title: "Related Services for Pediatric Practices",
    lead: "As a pediatric marketing agency, we know search grows faster with a parent-friendly website and ads for weeks with open appointments.",
    items: [
      {
        name: "Pediatric Marketing",
        sub: "Full growth plan for your practice",
        href: "/services/pediatric-marketing-agency",
        icon: "baby",
      },
      {
        name: "Pediatrician Websites",
        sub: "Sites parents can book from fast",
        href: "/services/pediatrician-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads",
        sub: "Fill open slots this month",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Small Business Local SEO",
        sub: "How local search works for you",
        href: "/services/local-seo-for-small-business",
        icon: "pin",
      },
    ],
    other:
      "Running a group practice across towns? We scope SEO for each office in one plan.",
  },
  reviews: {
    title: "What Owners Say in Our 5.0 Google Reviews",
    lead: "Business owners we work with wrote these on Google, and we show them unedited.",
  },
  pricing: {
    title: "Pediatric SEO Plans Billed Monthly",
    compareTitle: "Which Pediatric SEO Plan Fits?",
    addOnsTitle: "Pediatric Practice SEO Add-Ons",
    customTitle: "Pediatric Group With Several Offices?",
  },
  faq: {
    title: "Pediatrician SEO Questions From Practice Owners",
    lead: "Costs, timelines, parent privacy, Maps rankings and what pediatric SEO includes.",
    items: [
      {
        q: "What is SEO for pediatricians?",
        a: "SEO for pediatricians means making your practice easy for local parents to find, compare and book on Google. We cover your Business Profile, a page for every visit type in each town you serve, parent reviews, listings and links, with the goal of a top-three Maps spot for the visits you want.",
      },
      {
        q: "What does a pediatrics SEO company charge?",
        a: "Our three plans are $297, $750 and $1,500 a month, month to month. Single-office practices often start with the first; groups with several pediatricians or offices, or those adding managed Google Ads, tend to choose the second or third. Your audit will name the best fit.",
      },
      {
        q: "How soon do pediatric practices see SEO results?",
        a: "Smaller towns can show gains a few weeks after the listing and visit pages improve; busy metros with many practices take longer, often several months for “pediatrician near me”. Your monthly report shows rankings, calls and visit requests, so you never have to guess.",
      },
      {
        q: "Which searches matter most for a pediatric practice?",
        a: "Lead with “pediatrician near me”, “pediatrician accepting new patients” and “same day sick visit”, plus newborn care, physicals and vaccines paired with your town. Those carry the clearest intent. The audit checks local demand for each, then we build pages for the visits you most want to grow.",
      },
      {
        q: "What puts a pediatrician in the top three on Google Maps?",
        a: "Pediatrician as the primary category, new-patient status switched on, accurate hours including weekends, regular updates and a steady pace of parent reviews. Consistent listings on insurer and doctor directories, and strong visit pages on your site, support the profile for nearby searches.",
      },
      {
        q: "How does pediatric SEO handle parent reviews under HIPAA?",
        a: "Carefully. Every family gets the same review request after a visit, and replies thank the reviewer without naming a child, confirming a visit or touching on care. Complaints move to a private call with the office manager, so the practice protects families and its reputation.",
      },
      {
        q: "Do pediatricians need separate newborn and sick-visit pages?",
        a: "Yes, for visit types you want to grow. Expecting parents look for prenatal meet-and-greets and newborn care, while a parent with a feverish child wants same-day hours. Separate pages answer each need directly and give Google a clear match for each search.",
      },
      {
        q: "Can pediatrician SEO cover several offices in one group?",
        a: "Yes. Each office keeps its own verified listing and town page with its doctors, hours and directions, and you get rankings reported office by office, showing which locations lead and which need more attention from the team.",
      },
      {
        q: "Will AI assistants recommend my pediatric practice?",
        a: "They can. When parents ask ChatGPT, Gemini or Google AI Overviews for a children's doctor, the answers tend to name practices with clear visit pages, consistent doctor and office details and recent parent reviews. Strong pediatric SEO is usually what gets a practice named, and we check how those tools describe yours every month.",
      },
      {
        q: "Is pediatrician SEO a long contract?",
        a: "No. Pediatric plans renew monthly, and you can cancel before the next cycle starts. The Business Profile, website and tracking stay in the practice's name, and each report lists what we changed and what it did for rankings and calls.",
      },
    ],
  },
  audit: {
    title: "See How Parents Find Your Pediatric Practice, Free",
    lead: [
      "Tell us your website and the visit types you want to fill. Our team reviews your Maps placement, website and parent reviews next to nearby practices, then emails a short plan in plain English. Learn ",
      { href: "/about", label: "who we are" },
      " or view ",
      { href: "/services", label: "the full list of services" },
      ".",
    ],
    points: [
      "Maps rank by town",
      "Visit-type search gaps",
      "Profile and listing check",
      "First-month to-do list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free pediatric practice audit",
      title: "Get Your Pediatrician SEO Review",
      subtitle: "Free, with no contract and no sales pitch.",
      submitText: "Send My Pediatric Audit Request",
      messageLabel: "Your website and the visits you want more of",
      messagePlaceholder:
        "yourpractice.com, visit types to grow and the towns you serve",
    },
  },
  banner: {
    title: "Put Your Practice on Every New Parent's Shortlist",
    lead: "More parents finding you on Maps, in search and in AI answers, with each change reported monthly.",
  },
};
