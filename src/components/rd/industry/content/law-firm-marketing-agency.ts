import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* LAW FIRM MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking or volume
   pull was possible. The live title's core term ("Law Firm Marketing
   Agency USA") opens the new title, and every phrase in the live keywords
   meta sits in the title, H1, an H2/H3 or an FAQ question.
   "law firm marketing philadelphia" opens one FAQ question verbatim.
   Keywords came from web research (25 Oct 2026):
   - Top results for "law firm marketing agency" cover SEO, paid ads,
     websites and content; legal-focused agencies stress ethics rules on
     claims, testimonials and specialization.
   - 2026 guides: the Maps pack is where eyes go first, AI answers
     (ChatGPT, Perplexity, AI Overviews) reshape discovery, every practice
     area and city needs its own page, Local Services Ads sit above the
     results, and intake speed decides who books the consultation.
   - Ethics: no guarantees, no "expert"/"specialist" claims without
     certification, testimonials can imply results, state rules vary.
   Law rules: no expert/specialist/best claims about the client firm, no
   guaranteed outcomes, no case-result figures, review replies never
   discuss a matter.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "law-firm-marketing-agency-2",
  liveUrl: "/services/law-firm-marketing-agency",
  niche: "Law Firm",
  meta: {
    title: "Law Firm Marketing Agency USA | Lawyer SEO, PPC & Consultations",
    description:
      "Get more consultations with a law firm marketing agency for solo and small firms: lawyer SEO, Google Maps rankings, PPC and websites built for intake.",
    keywords: [
      "law firm marketing agency",
      "law firm advertising agency",
      "best law firm marketing agency",
      "law firm digital marketing agency",
      "law firm marketing companies",
      "law firm marketing consultant",
      "law firm website marketing",
      "law firm marketing philadelphia",
      "attorney marketing agency",
      "law firm marketing company",
      "law firm internet marketing",
      "law firm lead generation",
      "lawyer marketing",
      "lawyer seo",
      "attorney seo",
      "law firm seo",
      "law firm ppc",
      "law firm website design",
    ],
  },
  palette: PALETTES.amberBlue,
  hero: {
    h1Lead: "Law Firm",
    h1Icon: "scale",
    h1Rest: "Marketing Agency That Fills Your Consultation Calendar",
    lead: [
      "People with a legal problem compare a few firms, then call the one that looks clear and easy to reach. We put your firm on that shortlist with lawyer SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google listing management",
      },
      ", PPC and ",
      {
        href: "/services/law-firm-website-design",
        label: "a law firm website made for intake",
      },
      ".",
    ],
    cta: "Get My Free Law Firm Audit",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/free-website/free-law-firm/consultation.webp",
        position: "38% 50%",
        query: "family lawyer near me",
      },
      cardA: {
        icon: "calendar",
        title: "More booked consultations",
        sub: "From Maps, search and ads",
      },
      cardB: {
        icon: "sparkle",
        title: "Named in AI answers",
        sub: "ChatGPT, Gemini and AI Overviews",
      },
      photoB: {
        src: "/images/free-website/free-law-firm/case-review.webp",
        position: "24% 50%",
        query: "estate planning attorney near me",
      },
    },
  },
  services: {
    title: "What Our Law Firm Digital Marketing Agency Runs for You",
    lead: "Six services, one team, all measured by the consultations they produce.",
    cta: "Audit My Firm's Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for Law Firms",
        desc: "Practice-area categories, office hours, photos and a consultation link tuned so your firm ranks on Maps in the areas you serve.",
        points: [
          "Practice categories set",
          "Consultation link added",
          "Regular posts and Q&A",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Listing optimization for firms",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help with listing verification",
          },
        ],
      },
      {
        icon: "search",
        title: "Lawyer SEO",
        desc: "Practice-area and city pages, consistent legal citations and a quick, crawlable site lift your firm for the matters you want.",
        points: [
          "Practice-area pages",
          "Legal directory citations",
          "City-level rank tracking",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-law-firms",
            label: "Law firm local SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Law Firm PPC",
        desc: "Search campaigns and Local Services Ads aimed at high-intent legal searches, with tight negatives so spend reaches people who need a lawyer now.",
        points: [
          "Practice-area campaigns",
          "After-hours call routing",
          "0% markup on spend",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for attorneys" },
        ],
      },
      {
        icon: "monitor",
        title: "Law Firm Website Marketing & Design",
        desc: "Fast, clear sites with practice-area pages, attorney bios, a simple intake form and click-to-call, built to turn visits into consultations.",
        points: [
          "Intake form on every page",
          "Attorney bio pages",
          "Calls and forms tracked",
        ],
        links: [
          {
            href: "/services/law-firm-website-design",
            label: "Websites for law firms",
          },
          { href: "/services/web-design", label: "Custom website builds" },
        ],
      },
      {
        icon: "star",
        title: "Client Reviews Within the Rules",
        desc: "Review requests that respect bar ethics rules, plus owner replies that thank clients without discussing any matter.",
        points: [
          "Request texts and emails",
          "Confidential reply drafts",
          "Reviews featured on your site",
        ],
        links: [
          {
            href: "/services/local-seo-for-small-business",
            label: "Our local search framework",
          },
        ],
      },
      {
        icon: "sparkle",
        title: "AI Answer Visibility for Firms",
        desc: "When your firm details, reviews and practice pages agree everywhere, AI assistants have solid grounds to suggest you to people nearby.",
        points: [
          "Matching firm details",
          "Practice-area FAQs",
          "Local mentions earned",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO for law firms" },
        ],
      },
    ],
  },
  growth: {
    title: "How Our Law Firm Marketing Company Brings In Consultations",
    lead: "Maps, AI answers and ads, each tracked from the first search to a booked consultation.",
    rows: [
      {
        title: "Rank on the Map When Clients Search for a Lawyer",
        body: [
          "Local legal searches show three firms on the map before any website. We build your listing, add city and practice-area pages and earn steady reviews. Philadelphia firms can pair it with our ",
          {
            href: "/services/philadelphia/digital-marketing",
            label: "Philadelphia marketing plan",
          },
          ", and suspended listings get ",
          {
            href: "/services/gbp-reinstatement-service",
            label: "reinstated through Google's appeal",
          },
          ".",
        ],
        points: [
          "Practice-area categories",
          "City pages",
          "Office and attorney photos",
          "Client review requests",
        ],
        cta: "Check My Firm on Maps",
        ui: {
          kind: "maps",
          query: "family lawyer near me",
          city: "Philadelphia",
          category: "Family law attorney · Open today",
        },
      },
      {
        title: "Be the Firm AI Assistants Suggest for Your Practice Area",
        body: [
          "More people now type questions about a DUI, a divorce or a will into ChatGPT or an AI Overview to find a lawyer. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI answer optimization",
          },
          " keeps your firm details consistent, earns reviews and publishes plain answers, so AI tools have verified facts to cite when they name a firm.",
        ],
        points: [
          "Consistent firm details",
          "Attorney bios and bar info",
          "Practice-area FAQs",
          "Reviews in client words",
        ],
        cta: "See What AI Says About My Firm",
        ui: {
          kind: "ai",
          query: "dui lawyer near me with free consultations in phoenix",
          intro: "For DUI consultations around Phoenix,",
          bullets: [
            "Free initial consultations",
            "Evening and weekend calls",
            "Spanish-speaking staff",
          ],
        },
      },
      {
        title: "Law Firm Advertising Agency Work That Fills Your Intake Line",
        body: [
          "Legal clicks are competitive, so each one has to count. Our team runs search campaigns plus Local Services Ads for each practice area, blocks research and job-seeker clicks, and ties every call to the keyword that started it.",
        ],
        points: [
          "Practice-area campaigns",
          "Local Services Ads",
          "Negative keyword lists",
          "Calls recorded and tracked",
        ],
        cta: "Plan My Firm's Ads",
        ui: {
          kind: "calls",
          title: "Consultation calls from ads",
          calls: [
            {
              service: "Car accident consultation",
              source: "Google Ads · Call",
              when: "Mon 8:05 AM",
            },
            {
              service: "Divorce consultation",
              source: "Local Services Ads",
              when: "Tue 6:40 PM",
            },
            {
              service: "DUI arrest, court next week",
              source: "Google Ads",
              when: "Sat 11:52 PM",
            },
          ],
        },
      },
    ],
  },
  specialties: {
    title: "Attorney Marketing Agency Plans for Each Practice Area",
    lead: "Injury victims, divorcing spouses and business owners search and decide differently, so each practice area gets its own pages and ads.",
    photo: {
      src: "/images/free-website/free-law-firm/client-meeting.webp",
      alt: "Attorneys reviewing documents with clients at a conference table",
      caption: "Solo, small and mid-size firms",
      sub: "Marketing shaped around each practice area",
    },
    items: [
      {
        icon: "tow",
        name: "Personal Injury Firms",
        tactic: "Injury-type pages and call ads for urgent searches",
      },
      {
        icon: "users",
        name: "Family Law & Divorce Practices",
        tactic: "Calm, private-feeling pages and confidential contact forms",
      },
      {
        icon: "shield",
        name: "Criminal Defense & DUI Firms",
        tactic: "Around-the-clock call ads with fast callback routing",
      },
      {
        icon: "file",
        name: "Estate Planning & Probate",
        tactic: "Guide pages and seminar sign-ups for planning clients",
      },
      {
        icon: "translate",
        name: "Immigration Law Practices",
        tactic: "Multilingual pages and Maps listings in client languages",
      },
      {
        icon: "briefcase",
        name: "Business & Contract Law",
        tactic: "Owner-focused service pages and referral partner outreach",
      },
      {
        icon: "clipboard",
        name: "Employment Law Firms",
        tactic:
          "Worker-rights pages that answer wrongful termination questions",
      },
      {
        icon: "gavel",
        name: "Bankruptcy & Debt Relief",
        tactic: "Plain-language pages and discreet consultation booking",
      },
    ],
    more: "Workers' comp, tax or real estate law? We promote those too.",
  },
  steps: {
    title: "Three Steps to More Booked Consultations",
    lead: "Fast wins on Maps and ads come first; practice-area rankings compound from there.",
    items: [
      {
        h: "We Audit Your Firm's Visibility",
        p: "We search your main practice areas the way clients do, then show where you rank on Maps, which firms outrank you and where callers drop off before a consultation.",
      },
      {
        h: "We Agree on Practice Areas to Push",
        p: "Together we choose the practice areas, cities and campaigns to lead with, weighted toward the matters your firm most wants and has room to take on.",
      },
      {
        h: "We Launch and Report on Consultations",
        p: "Your refreshed listing, new practice-area pages, ad campaigns and client review asks launch at once. Monthly reporting then lays out rankings, calls, intake forms and booked consultations in one place.",
      },
    ],
    audit: [
      ["Maps rank: lawyer near me", "behind"],
      ["Practice areas on listing", "gap"],
      ["After-hours intake", "open"],
      ["Reviews vs nearby firms", "behind"],
    ],
    plan: [
      "Family law",
      "DUI defense",
      "Estate planning",
      "Philadelphia",
      "Cherry Hill",
    ],
    launch: [
      "Firm listing refreshed",
      "Practice-area pages published",
      "Intake calls recorded",
      "Client review asks scheduled",
    ],
  },
  reviews: {
    title: "Google Reviews From Clients of Zonic Media",
    lead: "Owners across many industries rate us 5.0; here are their words, unedited.",
  },
  pricing: {
    title: "Law Firm Marketing Plans With No Annual Contract",
    compareTitle: "Compare Plans for Your Firm",
    addOnsTitle: "Add Campaigns for New Practice Areas",
    customTitle: "Running several offices or practice groups?",
  },
  faq: {
    title: "Law Firm Marketing Questions From Attorneys",
    lead: "Plain answers on consultations, ads, ethics rules, AI search and pricing.",
    items: [
      {
        q: "How do I pick the best law firm marketing agency for a small firm?",
        a: "Pick one that measures booked consultations, not clicks, knows attorney advertising rules, lets you own your website and ad accounts and works month to month. Ask how they track calls, who writes your practice-area pages and how they handle reviews without discussing matters. A sample monthly report tells you a lot.",
      },
      {
        q: "What separates law firm marketing companies from general agencies?",
        a: "Law firm marketing companies understand intake, practice-area search habits and the ethics rules on claims, testimonials and specialization. A general agency may write superlative copy that a state bar would flag. We write plain, compliant pages, avoid superlatives about your firm and let you approve every word before it goes live.",
      },
      {
        q: "Do we need a law firm marketing consultant or a full-service agency?",
        a: "A consultant advises; an agency does the work. If you have staff to run listings, pages, ads and reviews, a consultant may be enough. Most solo and small firms need the work done for them, so we plan, build, run and report, month to month, and you keep a single point of contact.",
      },
      {
        q: "What is law firm internet marketing, and what does it include?",
        a: "Law firm internet marketing covers everything that helps clients find and contact your firm online: Google listing and Maps rankings, practice-area SEO, search ads and Local Services Ads, an intake-ready website, reviews and visibility in AI answers, all tracked to consultations.",
      },
      {
        q: "How does law firm lead generation work without shared leads?",
        a: "Instead of buying inquiries that several firms also receive, you build your own sources: Maps rankings, practice-area pages, your own ads and a website with simple intake. Every call and form reaches only your firm, and rankings keep working after a campaign ends. You also control how fast intake responds, which often decides who books the consultation.",
      },
      {
        q: "Does your marketing follow attorney advertising rules?",
        a: "We write with the common rules in mind: no guaranteed outcomes, no “expert” or “specialist” claims without certification, no case results presented out of context, and disclaimers where your state requires them. Your firm reviews and approves every page and ad, since bar rules vary by state.",
      },
      {
        q: "Can our firm be recommended by ChatGPT and Google AI Overviews?",
        a: "It can, when your details are easy to check, though no one can promise placement. We make your firm name, address, phone and practice areas match everywhere, show attorney bios and bar admissions, earn client reviews and publish plain answers to common legal questions, giving AI tools solid facts to work from.",
      },
      {
        q: "How long does lawyer SEO take to bring consultations?",
        a: "Listing improvements and ads can produce calls within weeks. Practice-area rankings usually take several months, longer in crowded fields like personal injury. The monthly report shows rankings, calls, intake forms and consultations, so you can judge progress yourself and adjust which practice areas to push.",
      },
      {
        q: "Law firm marketing Philadelphia: do you work with local firms?",
        a: "Yes. Our team is based in Delaware, close to Philadelphia, and we market firms across the city and its suburbs as well as nationwide. Each plan targets the neighborhoods, counties and practice areas your firm serves, with Maps and search positions tracked locally.",
      },
      {
        q: "What do law firm marketing plans cost at Zonic Media?",
        a: "Our three law firm tiers cost $297, $750 or $1,500 each month, with no annual contract. Ad clicks are billed by Google to your firm, with zero markup added by us. Solo attorneys often start on the first tier; firms running ads in several practice areas usually need more.",
      },
    ],
  },
  audit: {
    title: "Claim a Free Law Firm Marketing Audit",
    lead: [
      "Name your firm, city and main practice areas. We'll check your visibility on Maps and in search for those areas, review your intake path from click to consultation, and flag the fastest fixes. You can also see ",
      { href: "/services", label: "all our marketing services" },
      ".",
    ],
    points: [
      "Plans start at $297/mo",
      "Zero markup on ad spend",
      "Month to month, no lock-in",
      "Listing reinstatement covered",
    ],
    form: {
      formType: "law-firm-marketing",
      badge: "Free law firm audit",
      title: "Request Your Free Law Firm Marketing Audit",
      subtitle: "Free and confidential, with no obligation.",
      submitText: "Send My Firm Audit",
      messageLabel: "Your city and main practice areas",
      messagePlaceholder:
        "Cities you serve, practice areas to grow and how many attorneys you have",
    },
  },
  banner: {
    title: "Be the Firm People Call When It Matters",
    lead: "Request a free audit and learn what's slowing your intake.",
    icons: ["scale", "calendar"],
  },
};
