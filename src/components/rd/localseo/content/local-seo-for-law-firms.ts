/* Local SEO for Law Firms — redesign draft copy (26 Oct 2026).
   Fresh copy; never reuse the live page, the electricians reference or
   the law firm marketing draft (docs/local-seo-redesign-brief.md).

   Research, 25–26 Oct 2026:
   - Search Console, 90 days, live URL: law firm local seo 1,006
     impressions (pos 51.2) · local seo services for law firms 786 (50.0)
     · local seo for law firms 462 (42.4) · local seo services for lawyers
     125 · lawyer local seo 101 · attorney local seo 51 · local seo for
     criminal defense law firms 43.
   - Semrush US: law firm seo 9,900 (KD 37) · seo for lawyers 9,900 (33)
     · lawyer seo 6,600 (50) · seo for law firms 6,600 (40) · attorney seo
     3,600 (41) · legal seo 3,600 (40) · law firm seo company 2,900 (49) ·
     seo for attorneys 2,400 (38) · local seo for law firms 1,600 (29) ·
     personal injury seo 1,000 (20).
   - Web research (top results for "law firm seo" / "local seo for law
     firms", Google Business Profile guides for lawyers, legal AI search
     pieces): the pages that rank stress a practice-specific primary
     category ("Law firm" only for general practices), Google's
     one-listing-per-practitioner rule, practice-area + city pages, legal
     directory consistency, reviews within bar rules, and YMYL trust
     (attorney bios, bar admissions, reviewed-by notes) for AI Overviews.
     Their gaps: no intake tracking by practice area, little on ethics
     rules, nothing on after-hours calls. Those became the bios card, the
     ethics/category/practitioner FAQs and the intake growth row.
   - Title keeps "Local SEO for Law Firms" (live ranking term) and leads
     with the head term "law firm seo"; H1 uses "Law Firm SEO". Attorney
     advertising care: no "best", no guarantees, no outcome promises; legal
     directories are never named. */

import type { LocalSeoContent } from "../types";

export const CONTENT: LocalSeoContent = {
  liveUrl: "/services/industry/local-seo-for-law-firms",
  audience: "Law firms, attorneys and legal practices",
  serviceName: "Local SEO for Law Firms",
  meta: {
    title: "Law Firm SEO Services | Local SEO for Law Firms & Lawyers",
    description:
      "Law firm SEO for solo and small practices: Google Maps, practice-area pages, attorney bios, ethical reviews and AI search that bring lawyers more consultations.",
    keywords: [
      "law firm seo",
      "seo for lawyers",
      "lawyer seo",
      "seo for law firms",
      "attorney seo",
      "legal seo",
      "local seo for law firms",
      "law firm local seo",
      "local seo services for law firms",
      "seo for attorneys",
    ],
  },
  hero: {
    h1Lead: "Law Firm SEO",
    h1Rest: "That Puts Every Practice Area in Local Search",
    icon: "gavel",
    lead: [
      "Law firm SEO that gets your practice seen in Google Maps, organic results and AI answers when someone needs a lawyer nearby. We sharpen your ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile",
      },
      ", publish practice-area pages and attorney bios, then trace each consultation call to the page that earned it.",
    ],
    cta: "Get My Free Law Firm SEO Audit",
    ui: {
      kind: "growth",
      maps: "towns",
      ai: "chat",
      growth: "calls",
      business: "Your Law Firm",
      category: "Law firm",
      query: "car accident lawyer near me",
      areas: ["Downtown", "County seat", "North suburbs", "Business district"],
      aiPrompt: "Which local law firm handles car accident cases?",
      aiReasons: ["Practice-area guides", "Client reviews by case type"],
      growthLabel: "Consultation calls",
      leads: [
        ["Injury consultation call", "Google Maps"],
        ["Family law inquiry", "ChatGPT referral"],
        ["Estate planning form", "Practice page"],
      ],
      tabs: [
        {
          label: "Google Maps",
          badge: "#1 by area",
          title: "The Firm Each Area Finds First",
          text: "Practice and location pages put your firm on top across the county.",
        },
        {
          label: "AI answers",
          badge: "Named",
          title: "Named When Clients Ask AI for a Lawyer",
          text: "Practice-area answers and reviews give AI tools reasons to suggest you.",
        },
        {
          label: "Consults",
          badge: "Rising",
          title: "More Consultation Calls Each Month",
          text: "Intake calls and forms climb, each traced to its practice area.",
        },
      ],
    },
  },
  searches: {
    title: "What Clients Type Before They Call a Law Firm",
    lead: "Every practice page and profile signal is built around the words people use the day a legal problem lands.",
    groups: [
      {
        icon: "shield",
        label: "Injury and defense lawyer searches",
        terms: [
          "car accident lawyer near me",
          "dui attorney open now",
          "criminal defense lawyer near me",
          "slip and fall lawyer",
          "workers comp attorney near me",
          "lawyer for a bail hearing",
        ],
      },
      {
        icon: "users",
        label: "Family and estate lawyer searches",
        terms: [
          "divorce lawyer near me",
          "child custody attorney",
          "estate planning attorney near me",
          "will and trust lawyer",
          "probate lawyer + your county",
          "prenup lawyer near me",
        ],
      },
      {
        icon: "briefcase",
        label: "Business and local attorney searches",
        terms: [
          "business attorney + your city",
          "employment lawyer near me",
          "immigration lawyer near me",
          "landlord tenant lawyer",
          "bankruptcy attorney near me",
          "lawyer free consultation near me",
        ],
      },
    ],
  },
  services: {
    title: "What Our SEO for Lawyers\nCovers Each Month",
    lead: "Local SEO services for law firms, split by practice area so the case types you want get the attention.",
    cta: "Audit My Law Firm Website",
    items: [
      {
        icon: "pin",
        title: "Map Pack Setup for Law Firm Offices",
        desc: "A primary category matched to your main practice, office hours, attorney photos, posts and Q&A, with practitioner listings handled inside Google's rules.",
        points: [
          "Practice-specific category",
          "Per-attorney listings",
          "Office photos and posts",
        ],
        links: [
          {
            href: "/services/gmb-verification-help",
            label: "Help getting verified",
          },
        ],
      },
      {
        icon: "file",
        title: "Practice-Area and City Pages for Lawyers",
        desc: "A page for each case type and courthouse town you handle, answering what clients ask before calling: process, timelines and what to bring.",
        points: [
          "Case-type landing pages",
          "County and city pages",
          "Plain-language answers",
        ],
        links: [
          {
            href: "/services/law-firm-website-design",
            label: "Law firm website design",
          },
        ],
      },
      {
        icon: "award",
        title: "Law Firm Site Trust and Technical SEO",
        desc: "Legal pages face a higher trust bar, so we add attorney bios with bar admissions, reviewed-by notes, schema and fast mobile pages.",
        points: [
          "Bar admission details",
          "Attorney schema markup",
          "Mobile speed fixes",
        ],
        links: [
          {
            href: "/services/web-design",
            label: "Sites built for legal search",
          },
        ],
      },
      {
        icon: "star",
        title: "Ethical Review Requests for Law Firms",
        desc: "Requests timed after a matter closes, worded to suit your state bar, with public replies that never reveal anything about the client.",
        points: [
          "Post-matter requests",
          "Confidential replies",
          "Bar-aware wording",
        ],
        links: [],
      },
      {
        icon: "layers",
        title: "Legal Directory Citations and Law Links",
        desc: "One firm name, address and phone across legal directories, bar listings and data aggregators, plus links from bar groups, law schools and press.",
        points: [
          "Legal directory cleanup",
          "Bar association links",
          "Local press features",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate a suspended profile",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Search Optimization for Law Firms",
        desc: "Attorney-reviewed answers to common legal questions, clean firm data and schema, so ChatGPT, Gemini and AI Overviews can cite your lawyers.",
        points: [
          "Question-led legal pages",
          "Firm entity data",
          "AI citation checks",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
        ],
      },
    ],
  },
  growth: {
    title: "What Attorney SEO Changes in Your Local Market",
    lead: "Law firm local SEO brings better Map Pack visibility, more AI citations and a clear view of which practice areas make the phone ring.",
    rank: {
      title: "Rank Practice-Area Pages for Case-Type Searches",
      body: [
        "We split keywords by case type and courthouse town, then build or rework the page that can win each one. Injury, family and defense terms are tracked apart, so you see which practice areas climb and which still need work.",
      ],
      points: [
        "Case-type keyword map",
        "County-level tracking",
        "Competing firm gaps",
        "Page-one shortlist",
      ],
      cta: "Find My Practice-Area Gaps",
      keywords: [
        ["car accident lawyer near me", 24, 4],
        ["divorce attorney + your city", 31, 3],
        ["dui lawyer near me", 18, 2],
        ["estate planning attorney", 29, 5],
      ],
    },
    ai: {
      title: "Get Your Attorneys Cited in AI Legal Answers",
      body: [
        "AI answers on legal topics favour sources that show who wrote them and why that person is qualified. We publish attorney-reviewed answers, mark up bios and firm facts, and keep listings consistent, using the methods from our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        " work.",
      ],
      points: [
        "Reviewed-by bylines",
        "Attorney bio markup",
        "Consistent firm facts",
        "Monthly citation checks",
      ],
      cta: "Check My Firm in AI Answers",
      query: "who handles dui cases near me",
      intro: "For DUI defense near you,",
      bullets: [
        "Attorney bio with bar details",
        "Dedicated DUI defense page",
        "Recent client reviews",
      ],
    },
    leads: {
      title: "Track Which Practice Areas Bring Legal Calls",
      body: [
        "A ranking only matters once intake picks up. We tag every call and form by page, practice area and source, tidy click-to-call and consult forms, and add ",
        {
          href: "/services/google-ads",
          label: "Google Ads management for law firms",
        },
        " when a practice area needs paid coverage.",
      ],
      points: [
        "Calls by practice area",
        "Consult form on each page",
        "After-hours call capture",
        "Monthly intake report",
      ],
      cta: "Show Me Where Consultations Start",
      items: [
        ["Family law consult call", "Google Maps", "Thu 8:51 AM"],
        ["Injury case form", "Car accident page", "Mon 2:26 PM"],
        ["After-hours defense call", "AI Overview link", "Tue 11:48 PM"],
        ["Estate planning request", "County page", "Wed 10:15 AM"],
      ],
    },
  },
  results: {
    title: "How Your Law Practice Grows With Law Firm Local SEO",
    lead: "Progress comes in stages: a corrected profile, then practice pages, reviews and steadier intake calls.",
    cta: "Map My Firm's Growth Plan",
    milestones: [
      {
        when: "Weeks 1–2",
        title: "Practice Category Set Right",
        text: "We correct categories, hours and attorney details, so Google starts matching your firm to the right legal searches.",
      },
      {
        when: "Month 1",
        title: "Case-Type Pages Published",
        text: "Injury, family or defense pages go live and begin competing for searches tied to your courthouse towns.",
      },
      {
        when: "Months 2–4",
        title: "Firm Listing Moves Up Locally",
        text: "Ethical review requests and legal directory cleanup tend to lift your Map Pack position in more nearby towns.",
      },
      {
        when: "Month 4 onward",
        title: "Steadier Consultation Intake",
        text: "More calls and consult forms arrive for the practice areas you chose, each traced to the page that sent it.",
      },
    ],
    wins: [
      {
        icon: "phone",
        title: "More Calls for the Cases You Want",
        text: "Searches for your chosen practice areas land on pages written to answer questions and invite a consultation.",
      },
      {
        icon: "star",
        title: "Reviews That Respect Client Confidentiality",
        text: "A steady flow of Google reviews, each answered without confirming who the client is or what happened.",
      },
      {
        icon: "sparkle",
        title: "Your Lawyers Named in AI Answers",
        text: "Reviewed bios and direct answers give ChatGPT and Google AI Overviews clear reasons to mention your firm.",
      },
      {
        icon: "trend",
        title: "More Clients Who Find You Directly",
        text: "Prospective clients reach your intake line straight from search instead of through shared legal lead services.",
      },
    ],
  },
  compare: {
    title: "How Zonic's Law Firm SEO Differs From the Usual Agency",
    lead: "Where our legal SEO work parts ways with what many firms are sold elsewhere.",
    rows: [
      {
        topic: "Practice-area page coverage",
        other:
          "Often one generic services page listing every practice area together.",
        zonic:
          "A dedicated page for each case type and courthouse town your firm wants to grow.",
      },
      {
        topic: "Bar-rule-safe legal copy",
        other:
          "Copy can include “best” claims or outcome language that bar rules restrict.",
        zonic:
          "No “best” or specialist claims, no promised outcomes, and your firm approves every page.",
      },
      {
        topic: "Requests for client reviews",
        other:
          "Review requests can ignore confidentiality or offer incentives some bars prohibit.",
        zonic:
          "Requests sent after a matter closes, never incentivized, with replies that reveal nothing about clients.",
      },
      {
        topic: "Attorney bios and credentials",
        other:
          "Thin attorney pages with little proof of credentials or bar admissions.",
        zonic:
          "Bios with bar admissions, education and reviewed-by notes that Google and AI tools can read.",
      },
      {
        topic: "Intake reporting by practice",
        other: "Ranking charts with no link to consultation calls or forms.",
        zonic:
          "Calls and consult forms tracked by page, practice area and source, reported every month.",
      },
      {
        topic: "Terms for law firm clients",
        other: "Often a long contract before a firm can fairly judge the work.",
        zonic:
          "Month to month, listings and accounts in your firm's name, and 0% markup on ad spend.",
      },
    ],
  },
  steps: {
    title: "Local SEO Services for Law Firms: Our Three-Stage Plan for Legal SEO",
    lead: "Month one clears what blocks your rankings; every month after adds practice-area content and authority.",
    items: [
      {
        h: "Audit the Firm and Map Practice Areas",
        p: "We study your profile, website and the competing firms near your office, then order practice areas by search demand and the cases you want.",
      },
      {
        h: "Fix Listings, Then Build Legal Pages",
        p: "Category, listing and technical fixes go live first. Practice-area pages, attorney bios and review requests follow in the order we agreed.",
      },
      {
        h: "Report Intake by Practice Area",
        p: "Monthly reports show rankings, calls and forms for each practice area, so effort moves toward the case types your firm wants more of.",
      },
    ],
    audit: [
      ["Map Pack spot", "behind"],
      ["Practice pages", "gap"],
      ["Attorney bios", "open"],
      ["Legal citations", "behind"],
    ],
    plan: [
      "Injury pages",
      "Family law pages",
      "Attorney bios",
      "Review asks",
      "Bar links",
    ],
    launch: [
      "Practice category set",
      "Attorney pages live",
      "Review asks running",
      "Intake calls tagged",
    ],
  },
  explore: {
    title: "Services That Work Alongside Law Firm SEO",
    lead: "Rankings convert better with an intake-ready website and paid reach for the practice areas you are building.",
    items: [
      {
        name: "Law Firm Marketing",
        sub: "Every channel in one practice plan",
        href: "/services/law-firm-marketing-agency",
        icon: "gavel",
      },
      {
        name: "Law Firm Websites",
        sub: "Sites built around legal intake",
        href: "/services/law-firm-website-design",
        icon: "monitor",
      },
      {
        name: "Google Ads for Lawyers",
        sub: "Paid reach by practice area",
        href: "/services/google-ads",
        icon: "target",
      },
      {
        name: "Small Business Local SEO",
        sub: "Our core local search method",
        href: "/services/local-seo-for-small-business",
        icon: "pin",
      },
    ],
    other:
      "Several offices, or partners with their own listings? We can cover each one under a single plan.",
  },
  reviews: {
    title: "Attorneys Value Proof: Read Our 5.0 Google Reviews",
    lead: "Owners who hired us left these on Google; we quote them exactly, without trimming a line.",
  },
  pricing: {
    title: "Lawyer SEO Plans That Run Month to Month",
    compareTitle: "Compare Lawyer SEO Plans by Practice Size",
    addOnsTitle: "Add-Ons for Growing Law Practices",
    customTitle: "A Multi-Office Firm or Several Partners?",
  },
  faq: {
    title: "Answers on SEO for Law Firms and Lawyers",
    lead: "Fees, timelines, ethics rules, Map Pack listings and AI answers, covered plainly.",
    items: [
      {
        q: "What does law firm SEO include?",
        a: "Law firm SEO is the work that gets your practice found by people who need a local attorney: a Business Profile set to your main practice category, practice-area and city pages, attorney bios, ethical review requests, legal directory citations, links and technical fixes. Each month we report rankings and consultation calls by practice area.",
      },
      {
        q: "How is local SEO for law firms different from legal SEO in general?",
        a: "Local SEO targets the Map Pack and searches tied to a town, like “divorce lawyer near me”. Broader legal SEO chases informational questions that can rank nationwide. Most small and mid-size firms win more consultations locally first, then add guides on common legal questions once the profile and practice pages are strong.",
      },
      {
        q: "How much does SEO for lawyers cost?",
        a: "Plans run $297, $750 or $1,500 a month on month-to-month terms. A solo lawyer in one town usually starts with Foundation; firms with several practice areas or offices, or that want Google Ads managed too, tend to need Growth or Authority. Your audit recommends a plan.",
      },
      {
        q: "How long does attorney SEO take to show results?",
        a: "Category fixes and new practice pages can lift Maps visibility within weeks. Competitive terms such as personal injury or criminal defense in a large metro often take six months or more. Your monthly report shows rankings and calls by practice area, so you can judge progress yourself.",
      },
      {
        q: "Can a law firm SEO company guarantee first place on Google?",
        a: "No honest one can. Google decides rankings, and promises of a top spot are a warning sign. Our promise covers the work itself: profile, pages, reviews, citations and links, plus clear monthly reporting so you see what changed and what it produced.",
      },
      {
        q: "Should each attorney at our firm have a Google Business Profile?",
        a: "Google allows individual listings for public-facing practitioners, but they can compete with the firm's own profile. Solo lawyers usually need one listing. Larger firms may give senior attorneys their own, each with a distinct category. We plan this up front so listings support each other.",
      },
      {
        q: "Which Google Business Profile category should a law firm choose?",
        a: "Pick the most specific category for your main practice, such as personal injury attorney, divorce lawyer or criminal justice attorney. “Law firm” suits only a true general practice. Secondary categories should match practice areas you actively take, and we test changes against the firms ranking around you.",
      },
      {
        q: "Does your lawyer SEO follow attorney advertising rules?",
        a: "We write to stay within common bar rules: no “best” or “specialist” claims unless certified, no promised outcomes, disclaimers where needed, and review requests that never offer anything in return. Rules differ by state, so you approve every page and have the final say.",
      },
      {
        q: "Do you do SEO for personal injury and criminal defense firms?",
        a: "Yes. Both are fiercely competitive, so we build a page for each case type, from truck accidents to DUI defense, and target the towns your office covers. After-hours call capture matters here, because many of these searches happen at night or on weekends.",
      },
      {
        q: "Do ChatGPT and AI Overviews cite law firms like ours?",
        a: "They can when your firm's information is clear and trusted. AI tools draw on attorney bios, practice pages that answer questions directly, reviews and consistent directory listings. Each month we test common legal prompts and log how your firm is described.",
      },
    ],
  },
  audit: {
    title: "See How Your Firm Ranks Near the Courthouse, Free",
    lead: [
      "Tell us your firm's website and the practice areas you want to grow. We compare your Map Pack position, practice pages and reviews with the firms ranking near you, then send a plain plan. Before you share case-type goals, read ",
      { href: "/about", label: "about the Zonic Media team" },
      " or review ",
      { href: "/services", label: "our work outside legal SEO" },
      ".",
    ],
    points: [
      "Map Pack spot by town",
      "Practice-area keyword gaps",
      "Profile and category check",
      "First-month action list",
    ],
    form: {
      formType: "local-seo",
      badge: "Free law firm SEO audit",
      title: "Request a Law Firm SEO Review",
      subtitle: "Free and confidential. No contract.",
      submitText: "Send My Firm's Audit Request",
      messageLabel: "Your website and main practice areas",
      messagePlaceholder:
        "yourfirm.com, the case types you want more of and the counties you serve",
    },
  },
  banner: {
    title: "Get Your Firm in Front of Clients Searching Today",
    lead: "Practice pages that rank, a stronger Map Pack spot and AI citations, all reported monthly.",
  },
};
