/* Law Firm Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: almost no queries yet, so targets
     come from Semrush.
   - Semrush US: law firm website design 4,400 (KD 35) · attorney website
     design 2,400 (45) · lawyer website design 2,400 (35) · law firm
     websites 1,900 (62) · legal website design 1,600 (41). The largest
     keyword set in the niche family: the title, H1 and H2s cover law
     firm, attorney, lawyer and legal website design.
   - Web research (2026 guides on attorney sites and state bar opinions):
     visitors judge a firm site against every site they use, so it must
     say "you're in the right place" within seconds; a full page per
     practice area (process, timelines, FAQs, local courts); short,
     mobile-first intake that routes to the right attorney and feeds the
     firm's intake software, plus a phone option; attorney bios with bar
     admissions; reviews about service; state bar rules on testimonials
     and past results (disclaimers placed in context, no specific
     outcomes); fast, accessible pages; AI search shortlisting firms.
     Common owner questions: cost, build time, intake software, bar rules,
     template vs custom.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no outcome promises or superlative claims (bar rules),
   no company named, verified numbers only, every live content link kept
   (small-business local SEO link replaces the home-services one). */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/law-firm-website-design",
  stage: {
    widget: "case",
    switchLabel: "Preview the example site by practice area",
    business: "Your Law Firm",
    domain: "yourlawfirm.com",
    nav: ["Practice Areas", "Attorneys", "Reviews", "Contact"],
    call: "Call the firm",
    primary: "Start my case review",
    secondary: "Meet the attorneys",
    proof: "Reviewed by clients across the county",
    bookTitle: "Free case review",
    confirm: "Send confidentially",
    serviceSubs: [
      "Free consultation",
      "Speak with an attorney",
      "Evening calls welcome",
    ],
    toast: "Request received",
    toastNote: "Callback today",
    phoneCta: "Review",
    modes: [
      {
        label: "Personal injury",
        icon: "tow",
        badge: "Injury law · Free review",
        headline: "Hurt in a Crash? Speak With an Injury Lawyer.",
        sub: "Car, truck and slip-and-fall claims, with a free and private case review.",
        services: ["Car accidents", "Truck accidents", "Slip and fall"],
        book: ["Car accident", "Work injury", "Slip and fall"],
        img: {
          src: "/images/free-website/free-law-firm/case-review.webp",
          position: "50% 40%",
        },
      },
      {
        label: "Family law",
        icon: "users",
        badge: "Family law · Private consult",
        headline: "Divorce or Custody? Get Clear, Private Advice.",
        sub: "Divorce, custody, support and adoption, handled with care and discretion.",
        services: ["Divorce", "Child custody", "Child support"],
        book: ["Divorce", "Custody", "Support order"],
        img: {
          src: "/images/free-website/free-law-firm/consultation.webp",
          position: "50% 40%",
        },
      },
    ],
    legend: [
      "Tap-to-call firm header",
      "Practice-area landing pages",
      "Confidential case review form",
      "Sticky call bar for phones",
    ],
  },
  // Navy for injury, red for family law, then gold and sky (tones.ts).
  tones: tonesFor("law-firm-website-design"),
  serviceName: "Law Firm Website Design",
  audience: "law firms, attorneys and solo lawyers",
  meta: {
    title: "Law Firm Website Design Company | Attorney Website Design",
    description:
      "Law firm website design for attorneys: practice-area pages, confidential case intake and fast mobile sites. Lawyer website design that launches in 2–3 weeks.",
    keywords: [
      "law firm website design",
      "attorney website design",
      "lawyer website design",
      "law firm websites",
      "legal website design",
      "law firm web design",
      "attorney web design",
      "lawyer web design",
      "law firm website design company",
      "law firm website design agency",
      "website design for law firms",
      "personal injury lawyer website design",
      "family law website design",
    ],
  },
  hero: {
    h1Lead: "Law Firm Website Design",
    h1Rest: "That Wins Client Trust Before the First Call",
    icon: "scale",
    lead: [
      "We design attorney websites with a page for every practice area, a confidential case review form and your office line one tap away, so people facing a legal problem reach your firm first. A ",
      { href: "/services/web-design", label: "custom website" },
      " for your firm launches in 2–3 weeks, written to rank for lawyer searches in your city.",
    ],
    cta: "Get My Free Law Firm Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/law-firm-hero-v2.webp",
        position: "30% center",
        query: "law firm website design",
      },
      cardA: {
        icon: "search",
        title: "Found for Every Practice Area",
        sub: "Pages that rank for each case type",
      },
      photoB: {
        src: "/images/home-improvement-web/law-firm-first-impressions-1.webp",
        position: "35% 30%",
        query: "family lawyer near me",
      },
      cardB: {
        icon: "trend",
        title: "More Consultation Requests Each Month",
        sub: "Confidential intake open day and night",
      },
    },
  },
  showcase: {
    title: "Preview a Lawyer Website Design Built Around Practice Areas",
    lead: "Switch between injury and family law to see the homepage, intake form and phone view change with the case type.",
  },
  services: {
    title: "Attorney Website Design Services\nBuilt for How Clients Hire",
    lead: "Solo practice or multi-office firm, one team plans, writes, builds and maintains your site.",
    cta: "Plan My Firm's Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Law Firm Websites",
        desc: "A site shaped around your practice areas, attorneys and intake process, written in plain language for people with a legal problem.",
        points: ["Bespoke design", "Attorney bio pages", "Plain-language copy"],
        links: [
          { href: "/services/web-design", label: "Explore our web design" },
        ],
      },
      {
        icon: "layers",
        title: "Landing Pages by Case Type",
        desc: "Each case type gets its own page explaining the process, typical timelines and common questions, ready for search and paid ads.",
        points: [
          "One page per case type",
          "Legal process explained",
          "Ad-ready layouts",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for law firms" },
        ],
      },
      {
        icon: "clipboard",
        title: "Confidential Intake Forms",
        desc: "Short case review forms that route every inquiry to the right attorney and feed your intake or practice management software.",
        points: [
          "Practice-area routing",
          "Conflict-check fields",
          "Secure submissions",
        ],
        links: [],
      },
      {
        icon: "repeat",
        title: "Firm Site Migrations That Keep Your Rankings",
        desc: "We move dated firm sites to a faster build while keeping the URLs, redirects and articles that already bring inquiries.",
        points: [
          "Full URL inventory",
          "301 redirects",
          "Articles carried over",
        ],
        links: [],
      },
      {
        icon: "pin",
        title: "Pages for Each Office and City",
        desc: "Office and city pages with directions, nearby courthouses and local reviews, tied to your Google Business Profile.",
        points: [
          "Office location pages",
          "Courthouses nearby",
          "Map-ready details",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-law-firms",
            label: "Local SEO for law firms",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting, Security and Upkeep",
        desc: "Managed hosting, SSL, backups and content edits after launch, so bios, practice pages and articles stay current.",
        points: ["Managed hosting", "Accessibility checks", "Edits on request"],
        links: [
          {
            href: "/services/law-firm-marketing-agency",
            label: "Law firm marketing",
          },
          {
            href: "/law-firm-website-design-agency-us/offer",
            label: "Free law firm website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Core Features of a High-Trust Law Firm Website",
    lead: "Details that help a worried visitor choose your firm and reach out.",
    items: [
      {
        icon: "phone",
        title: "One-Tap Calls From Any Page",
        text: "A fixed call bar keeps the office line within reach on every phone.",
      },
      {
        icon: "shield",
        title: "Confidential by Design",
        text: "Forms explain privacy up front and never ask for sensitive details too early.",
      },
      {
        icon: "users",
        title: "Attorney Bios That Build Trust",
        text: "Credentials, bar admissions, education and a real photo for each lawyer.",
      },
      {
        icon: "layers",
        title: "A Page for Every Case Type",
        text: "Practice pages answer the questions clients have before they phone.",
      },
      {
        icon: "star",
        title: "Service-Focused Client Reviews",
        text: "Reviews about communication and care appear beside each call to action.",
      },
      {
        icon: "translate",
        title: "Bilingual Page Options",
        text: "Pages in Spanish or another language your clients speak at home.",
      },
      {
        icon: "check",
        title: "Room for Bar Disclaimers",
        text: "Space for the notices your state bar requires, placed in context.",
      },
      {
        icon: "bolt",
        title: "Fast, Accessible Law Firm Web Design",
        text: "Quick loads, readable type and accessible markup on every device.",
      },
    ],
  },
  growth: {
    title: "How Strong Legal Website Design Wins More Inquiries",
    lead: "Rank for case searches, turn visits into consultations and get cited in AI answers.",
    rank: {
      title: "Rank for the Case Types You Want More Of",
      body: [
        "Practice and city pages are written around what people search after an accident, an arrest or a separation, then tracked weekly. Map results follow when the site is paired with ",
        {
          href: "/services/industry/local-seo-for-law-firms",
          label: "local SEO built for law firms",
        },
        " and careful ",
        {
          href: "/local-seo-google-business-optimization",
          label: "work on your Google Business Profile",
        },
        ".",
      ],
      points: [
        "Practice-area keyword map",
        "City and office pages",
        "Weekly rank reports",
        "Attorney and firm schema",
      ],
      cta: "Map My Practice Pages",
      keywords: [
        ["car accident lawyer + your city", 24, 4],
        ["divorce attorney near me", 31, 6],
        ["dui lawyer near me", 19, 3],
        ["estate planning attorney", 27, 5],
      ],
    },
    convert: {
      title: "Turn Late-Night Visits Into Consultations",
      body: [
        "A sticky call bar, a short confidential form and clear next steps help nervous visitors reach out, even after hours. Each inquiry records which page and search it came from, and our ",
        {
          href: "/services/law-firm-marketing-agency",
          label: "law firm marketing team",
        },
        " can send more qualified visitors to it.",
      ],
      points: [
        "Sticky call bar",
        "Two-step case form",
        "Inquiry source tracking",
        "After-hours intake",
      ],
      cta: "Show Me an Intake Flow",
      url: "yourlawfirm.com",
      headline: "Need a Lawyer? Request a Free Case Review",
      services: [
        "Call the firm",
        "Case review",
        "Consultation",
        "Our attorneys",
      ],
    },
    ai: {
      title: "Get Your Firm Named When Clients Ask AI",
      body: [
        "When someone asks an AI assistant which lawyer to contact, it leans on pages with plain answers, clear attorney credentials and structured data. We build all three into law firm websites, and our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        " keep them current.",
      ],
      points: [
        "Plain-answer FAQs",
        "Attorney schema",
        "Clear site structure",
        "AI mention checks",
      ],
      cta: "Check My Firm's AI Visibility",
      query: "who handles child custody cases near me",
      intro: "For child custody help nearby,",
      bullets: [
        "A clear custody process guide",
        "Experienced family attorneys",
        "Reviews praising communication",
      ],
    },
  },
  sitemap: {
    title: "A Law Firm Website Structure That Ranks Page by Page",
    lead: "Every page answers one kind of legal search, so practice areas, attorneys and offices all earn visits.",
    home: "Your Law Firm homepage",
    groups: [
      {
        name: "Practice Areas",
        icon: "scale",
        pages: ["Personal injury", "Family law", "Criminal defense"],
      },
      {
        name: "Attorneys",
        icon: "users",
        pages: ["Attorney bios", "Bar admissions", "Firm history"],
      },
      {
        name: "Client Help",
        icon: "book",
        pages: ["Case process guides", "Legal FAQs", "Free case review"],
      },
      {
        name: "Offices",
        icon: "pin",
        pages: ["Main office", "Branch offices", "Counties served"],
      },
    ],
  },
  results: {
    title: "After Launch: How Your Attorney Website Keeps Working",
    lead: "Inquiries are tracked from day one, practice pages climb and intake stays open after hours.",
    cta: "See My Firm's Launch Plan",
    milestones: [
      {
        when: "Launch week",
        title: "Inquiries Tracked by Source",
        text: "Call tracking and the confidential case form go live together, so each lead shows its page and search.",
      },
      {
        when: "Month 1",
        title: "Practice Pages Indexed",
        text: "Google crawls the new practice-area and office pages and starts listing them for nearby legal searches.",
      },
      {
        when: "Months 2–3",
        title: "Case-Type Searches Start Climbing",
        text: "Practice and city pages, helped by new reviews, start climbing toward page one for the cases you want.",
      },
      {
        when: "New year",
        title: "Ready for the January Rush",
        text: "Family law inquiries often rise after the holidays, and your divorce and custody pages are ready for it.",
      },
    ],
    wins: [
      {
        icon: "clock",
        title: "Intake That Never Closes",
        text: "People send case details at midnight, and your team wakes up to organized inquiries.",
      },
      {
        icon: "phone",
        title: "Mobile Visitors Who Call",
        text: "A fixed call bar lets visitors on phones reach your office in a single tap.",
      },
      {
        icon: "trend",
        title: "Practice Pages That Keep Ranking",
        text: "Case-type and city pages keep drawing searches long after launch day.",
      },
      {
        icon: "award",
        title: "A Firm That Looks Established",
        text: "Real attorney photos, credentials and reviews make your firm feel like a safe choice.",
      },
    ],
    band: [
      {
        icon: "chat",
        value: "Case Inquiries",
        label: "Consultation requests from qualified visitors",
      },
      {
        icon: "layers",
        value: "Practice-Area Reach",
        label: "A page for each type of case you take",
      },
      {
        icon: "award",
        value: "Authority at First Click",
        label: "Attorney bios and credentials front and center",
      },
      {
        icon: "shield",
        value: "Private, Secure Intake",
        label: "Confidential forms clients feel safe using",
      },
    ],
  },
  process: {
    title: "From Intake Map to Launch: Your Law Firm Site in 2–3 Weeks",
    lead: "Attorney sign-off at each step and a launch date fixed on day one.",
    items: [
      {
        when: "Week 1",
        h: "Practice and Intake Mapping",
        p: "We list your case types, offices and intake steps, then share a first homepage concept for free.",
      },
      {
        when: "Weeks 1–2",
        h: "Plain-Language Copy and Layout",
        p: "Each page gets plain-language copy and a clean layout, then your attorneys review the wording.",
      },
      {
        when: "Weeks 2–3",
        h: "Build, Intake Forms and Tracking",
        p: "Case forms, call tracking, redirects, schema and office pages are connected, then checked twice.",
      },
      {
        when: "Launch",
        h: "Live Site, Ongoing Care",
        p: "The site goes live, inquiries are tracked and practice pages grow over time.",
      },
    ],
  },
  compare: {
    title: "Custom Attorney Website vs. a Shared Legal Template",
    lead: "Why a site planned around your practice beats a theme dozens of other firms already use.",
    otherLabel: "Shared legal template",
    rows: [
      {
        topic: "Practice-area coverage",
        other: "One services page that lists every case type in a paragraph.",
        zonic:
          "A full page per practice area, with the process, timelines and FAQs.",
      },
      {
        topic: "Case intake",
        other: "A generic contact form that lands in a shared inbox.",
        zonic: "A confidential case review form routed to the right attorney.",
      },
      {
        topic: "Attorney credibility",
        other: "Stock photos of gavels, columns and handshakes.",
        zonic: "Real attorney photos, bios, bar admissions and education.",
      },
      {
        topic: "Advertising rules",
        other: "Disclaimers missing or buried, left for you to sort out.",
        zonic:
          "Disclaimer placements your attorneys approve before anything goes live.",
      },
      {
        topic: "City and office visibility",
        other: "A footer list of cities with no real content behind it.",
        zonic:
          "Office and city pages with directions, courts and local reviews.",
      },
      {
        topic: "Ownership and support",
        other: "Content locked to a vendor contract you can't take with you.",
        zonic:
          "You own the domain and every page; we handle hosting and updates.",
      },
    ],
  },
  reviews: {
    title: "See Our 5.0 Google Rating Before Choosing a Legal Web Partner",
    lead: "Real, unedited reviews from business owners who hired us, on our Google profile.",
  },
  pricing: {
    title: "Choose a Growth Plan for Your Firm's Website",
    compareTitle: "Side by Side: What Each Plan Gives Attorneys",
    addOnsTitle: "Optional Extras for Legal Websites",
    customTitle: "Multiple Offices or Practice Groups?",
  },
  faq: {
    title: "Lawyer Website Design, Explained for Busy Firms",
    lead: "Costs, timing, intake, bar rules and what a law firm website needs.",
    items: [
      {
        q: "How much does a law firm website cost?",
        a: "Scope drives the price: the number of practice areas, offices and attorney bios. After a free call we give your firm one fixed quote, and it won't creep up mid-project. Choose one of our qualifying growth plans, billed monthly, and the build itself comes at no charge under our free website offer.",
      },
      {
        q: "When can our new attorney website be live?",
        a: "Usually within 2–3 weeks of kickoff. Week one brings a free mockup of the homepage, the second week is for reviewing practice pages and attorney bios, and the final days cover the intake form, call tracking and redirects before the switch.",
      },
      {
        q: "What should a law firm website include?",
        a: "Clients look for a phone line they can tap from any screen, a confidential case review form, a page for each practice area, attorney bios with credentials, office and city pages, reviews about service, any disclaimers your bar requires, quick mobile loading and attorney schema.",
      },
      {
        q: "Can my website follow state bar advertising rules?",
        a: "We build with them in mind: no promised outcomes, no superlative claims and space for the disclaimers your state requires near reviews or past matters. Rules differ by state, so your attorneys approve every page before launch, and we update wording whenever your bar's guidance changes.",
      },
      {
        q: "Will a redesign hurt my firm's search rankings?",
        a: "It shouldn't. Before anything moves, we record every live URL and which pages bring visitors, carry over those practice pages and articles, forward each retired address with a permanent redirect and monitor rankings and inquiries for several weeks after the switch.",
      },
      {
        q: "Can you connect our intake or practice management software?",
        a: "Yes. Case review forms can send inquiries straight into the intake, CRM or practice management software your firm already uses, with the practice area, contact details and source attached. Nothing sits in a shared inbox, so your team can follow up within minutes.",
      },
      {
        q: "Do you write the content for practice-area pages?",
        a: "Yes. Our writers draft practice, attorney and FAQ pages in plain language around what people search, from car accident claims to custody questions. Your attorneys review and approve every word before it's published, so accuracy and tone stay in your hands.",
      },
      {
        q: "Do lawyers need a custom website, or is a template enough?",
        a: "A template may carry a brand-new solo practice for a while, but shared legal themes look alike, rank poorly for practice-area searches and rarely handle confidential intake well. A custom site gives each case type its own page and makes your firm look distinct.",
      },
      {
        q: "What happens after our law firm website launches?",
        a: "Our team hosts the site, applies updates and security patches, and adds new attorneys, practice pages or articles when you ask. Monthly reports show calls and form inquiries by page, and many firms later pair the site with local SEO or paid search.",
      },
    ],
  },
  consult: {
    title: "Review a Draft of Your Firm's Homepage, Free",
    lead: [
      "Share your practice areas and offices, and we'll send back a homepage concept and an outline of every page, free of charge. Questions first? ",
      { href: "/contact-us", label: "Talk to our team" },
      ", ",
      { href: "/about", label: "read our story" },
      " or look through ",
      { href: "/services", label: "our full range of services" },
      ". If your listing has been pulled, our ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Google profile suspension help",
      },
      " can step in. Firms that rely on local clients can read how our ",
      {
        href: "/services/local-seo-for-small-business",
        label: "small business local SEO",
      },
      " works.",
    ],
    points: [
      "No-cost homepage mockup",
      "Live in 2–3 weeks",
      "Practice-area page plan",
      "Intake form walkthrough",
    ],
    form: {
      formType: "law-firm-website-design",
      badge: "Free law firm homepage mockup",
      title: "Start Your Attorney Website Mockup",
      subtitle: "Free and confidential, with no obligation.",
      submitText: "Request My Firm's Mockup",
      messageLabel: "Your firm, practice areas and current site",
      messagePlaceholder:
        "Firm name, current website (if any), main practice areas and the cities or counties you serve",
    },
  },
  banner: {
    title: "Make Your Firm the One Clients Feel Safe Calling",
    lead: "Clear practice pages, private case reviews and a call button on every screen.",
  },
};
