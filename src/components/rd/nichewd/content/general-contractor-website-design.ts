/* General Contractor Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: general contractor website 39
     impressions (pos 18.5) · website design for general contractors 28
     (37.1) · general contractor web design 16 (22.3) · general contractor
     website design 13 (29.2) · contractor website design 13 (15.8).
   - Semrush US (biggest opportunity in the remodeling group): contractor
     website design 1,900 (KD 27) · construction website design 880 (19)
     · contractor websites 880 (34) · general contractor website design
     720 (7) · general contractor websites 390 (18) · construction company
     website design 320 (26).
   - Web research (construction web design guides, public prequalification
     forms, contractor-site cost guides): owners and property managers
     check a builder's site before they call or invite a bid; commercial
     buyers want project scale, sector, delivery method and role per job;
     prequalification looks at licensing, insurance, bonding, safety
     record and similar work; a capability statement and a visible "request
     a bid" path help. Homeowners want additions, remodels and custom-home
     pages with real project proof. Common questions: do contractors need
     a website, what it should include, builder vs custom, cost.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company named, verified numbers only, every live
   content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/general-contractor-website-design",
  stage: {
    widget: "quote",
    switchLabel: "Preview the example site by client type",
    business: "Your Construction Co.",
    domain: "yourconstructionco.com",
    nav: ["Residential", "Commercial", "Projects", "About"],
    call: "Call the office",
    primary: "Start a project",
    secondary: "View projects",
    proof: "Reviewed by owners across the region",
    bookTitle: "Request a project quote",
    confirm: "Send project details",
    serviceSubs: [
      "Design-build option",
      "Licensed and insured",
      "Fixed-scope bids",
    ],
    toast: "Project request sent",
    toastNote: "Estimator calls today",
    phoneCta: "Project",
    modes: [
      {
        label: "Home projects",
        icon: "home",
        badge: "Additions and remodels",
        headline: "Add Space, Remodel or Build From the Ground Up",
        sub: "Home additions, whole-house remodels and custom builds managed start to finish.",
        services: ["Home additions", "Whole-house remodels", "Custom homes"],
        book: ["Home addition", "Whole-house", "Custom home"],
        img: {
          src: "/images/home-improvement-web/general-contractor-first-impressions-1.webp",
          position: "50% 60%",
        },
      },
      {
        label: "Commercial builds",
        icon: "building",
        badge: "Tenant build-outs · Bids",
        headline: "Build-Outs Delivered on Schedule and on Spec",
        sub: "Tenant improvements, retail and office build-outs, with bid packages on request.",
        services: [
          "Tenant build-outs",
          "Office renovations",
          "Retail fit-outs",
        ],
        book: ["Tenant build-out", "Office reno", "Bid invitation"],
        img: {
          src: "/images/home-improvement-web/general-contractor-hero.webp",
          position: "20% 35%",
          phonePosition: "25% 35%",
          zoom: 1.6,
        },
      },
    ],
    legend: [
      "Office call button",
      "Residential and commercial pages",
      "Project quote form",
      "Mobile quote bar",
    ],
  },
  // Slate and orange for home vs commercial work, then teal and gold.
  tones: tonesFor("general-contractor-website-design"),
  serviceName: "General Contractor Website Design",
  audience: "general contractors, builders and construction companies",
  meta: {
    title: "General Contractor Website Design | Construction Web Design",
    description:
      "General contractor website design and construction website design for builders: project portfolios, bid request forms and credential pages that win more work.",
    keywords: [
      "general contractor website design",
      "contractor website design",
      "construction website design",
      "contractor websites",
      "general contractor websites",
      "construction company website design",
      "general contractor web design",
      "website design for general contractors",
      "general contractor website",
      "construction web design",
      "builder website design",
      "construction company websites",
      "contractor web design",
    ],
  },
  hero: {
    h1Lead: "General Contractor Website Design",
    h1Rest: "That Lands Builds and Bids",
    icon: "construction",
    lead: [
      "We build contractor websites that prove your track record, show your license and insurance up front and route homeowners and commercial clients to the right quote form. Every ",
      { href: "/services/web-design", label: "custom website" },
      " we deliver launches in 2–3 weeks and is set up to rank for construction searches in each market you build in.",
    ],
    cta: "Draft My Contractor Homepage Free",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/general-contractor-hero.webp",
        position: "center 25%",
        query: "general contractor near me",
      },
      cardA: {
        icon: "building",
        title: "Seen by Homeowners and Developers",
        sub: "Separate paths for residential and commercial",
      },
      photoB: {
        src: "/images/home-improvement-web/general-contractor-first-impressions-1.webp",
        position: "40% center",
        query: "commercial general contractor",
      },
      cardB: {
        icon: "trend",
        title: "A Pipeline Past Word of Mouth",
        sub: "Search traffic that doesn't wait on referrals",
      },
    },
  },
  showcase: {
    title: "See a Construction Website Built for Two Kinds of Clients",
    lead: "Toggle between home projects and commercial builds to watch the site, quote form and phone view switch audiences.",
  },
  services: {
    title: "Contractor Website Design Services\nfor Builders and GCs",
    lead: "What a general contracting firm needs online, from the first homepage draft to monthly upkeep.",
    cta: "Scope My Contractor Website",
    items: [
      {
        icon: "monitor",
        title: "Custom General Contractor Websites",
        desc: "A site planned around your project types, markets and how you price work, written for owners who are vetting a builder.",
        points: [
          "Original layouts",
          "Copy for both audiences",
          "Mobile-first build",
        ],
        links: [
          { href: "/services/web-design", label: "About our website builds" },
        ],
      },
      {
        icon: "briefcase",
        title: "Project Portfolio and Case Pages",
        desc: "Every completed job gets a page with scope, size, schedule and photos, sorted into residential and commercial work.",
        points: ["Scope and scale", "Before and after", "Sector filters"],
        links: [
          {
            href: "/services/industry/local-seo-for-general-contractors",
            label: "Local SEO for contractors",
          },
        ],
      },
      {
        icon: "file",
        title: "Bid Request and Prequalification Pages",
        desc: "A bid request form, a downloadable capability statement and your license, insurance and bonding details in one place.",
        points: ["Bid request form", "Capability statement", "Credential hub"],
        links: [],
      },
      {
        icon: "home",
        title: "Residential Project Pages",
        desc: "Pages for additions, whole-house remodels, custom homes, kitchens and exterior work, each with its own photos and quote button.",
        points: ["Additions page", "Remodel pages", "Custom home page"],
        links: [
          {
            href: "/services/kitchen-remodeling-website-design",
            label: "Kitchen remodeling websites",
          },
          {
            href: "/services/window-and-door-website-design",
            label: "Window and door websites",
          },
        ],
      },
      {
        icon: "users",
        title: "Subcontractor and Hiring Pages",
        desc: "Trade partner signup and careers pages that help you recruit crews and keep a reliable list of subs.",
        points: ["Trade partner form", "Careers page", "Safety program page"],
        links: [],
      },
      {
        icon: "tool",
        title: "Hosting, Care and Project Uploads",
        desc: "Managed hosting, security, backups and new case pages added as jobs close out, so the site keeps pace with your work.",
        points: ["Managed hosting", "New case pages", "Uptime monitoring"],
        links: [
          { href: "/services/google-ads", label: "Google Ads for contractors" },
        ],
      },
    ],
  },
  features: {
    title: "What Construction Website Design Must Get Right",
    lead: "The details owners and property managers check before they shortlist a builder.",
    items: [
      {
        icon: "shield",
        title: "License, Bonding and Insurance Up Front",
        text: "Credentials sit near the top of the homepage and on every quote page.",
      },
      {
        icon: "briefcase",
        title: "Projects With Real Scope Details",
        text: "Square footage, schedule and your role on each job, not just photos.",
      },
      {
        icon: "users",
        title: "Two Front Doors for Two Clients",
        text: "Homeowners and commercial clients each follow their own path.",
      },
      {
        icon: "file",
        title: "Capability Statement Download",
        text: "A PDF that owners and architects can save for their bid lists.",
      },
      {
        icon: "award",
        title: "Safety Program and Certifications",
        text: "Your safety approach and trade memberships, stated plainly.",
      },
      {
        icon: "phone",
        title: "Office Number on Every Screen",
        text: "A tap-to-call bar for owners who look you up from a job site.",
      },
      {
        icon: "pin",
        title: "Pages for Each Market You Build In",
        text: "Local projects and reviews for every city and county you cover.",
      },
      {
        icon: "search",
        title: "Contractor Schema and Lean Code",
        text: "General contractor markup and light pages that load quickly.",
      },
    ],
  },
  growth: {
    title: "General Contractor Websites That Win Work Beyond Referrals",
    lead: "Rank for building searches, qualify serious buyers and get cited in AI answers.",
    rank: {
      title: "Rank for Construction Searches in Every Market",
      body: [
        "Owners search by project and place, so additions, remodels, custom homes and commercial build-outs each get their own pages, with rankings tracked market by market. Add ",
        {
          href: "/services/industry/local-seo-for-general-contractors",
          label: "general contractor local SEO",
        },
        " plus ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Business Profile optimization",
        },
        " and that reach extends into the map pack.",
      ],
      points: [
        "Project-type pages",
        "City and county pages",
        "Rank tracking",
        "Contractor schema",
      ],
      cta: "Show My Market Opportunities",
      keywords: [
        ["general contractor + your city", 22, 3],
        ["home addition contractors", 30, 5],
        ["commercial build out contractor", 27, 4],
        ["design build firm near me", 19, 2],
      ],
    },
    convert: {
      title: "Qualify Projects Before the First Site Visit",
      body: [
        "A project quote form asks for type, location, timeline and plans, so estimators spend their time on jobs that fit. Calls and forms are logged by source, and ",
        { href: "/services/google-ads", label: "paid search campaigns" },
        " can send ready-to-build owners straight to the right page.",
      ],
      points: [
        "Project-type form",
        "Plan uploads",
        "Call tracking",
        "Mobile quote bar",
      ],
      cta: "Walk Me Through the Quote Form",
      url: "yourconstructionco.com",
      headline: "Tell Us About Your Next Build",
      services: ["Home addition", "Remodel", "Custom home", "Build-out"],
    },
    ai: {
      title: "Get Named When Owners Ask AI for a Builder",
      body: [
        "When an owner asks ChatGPT or an AI Overview who to trust with a build, the answer leans on sites with clear project pages, credentials and schema. We build yours that way as the first layer of our ",
        { href: "/services/ai-seo-services", label: "AI SEO program" },
        ".",
      ],
      points: [
        "Answer-first pages",
        "Credential markup",
        "Linked project pages",
        "Citation checks",
      ],
      cta: "Audit My Firm for AI Answers",
      query: "which general contractors near me handle home additions",
      intro: "For home additions and remodels nearby,",
      bullets: [
        "Detailed project case pages",
        "Licensed, bonded and insured",
        "Strong reviews from owners",
      ],
    },
  },
  sitemap: {
    title: "Construction Company Website Design, Mapped Page by Page",
    lead: "Each page covers a project type or market that owners search, so every section of the site pulls its own search traffic.",
    home: "Your Construction Co. homepage",
    groups: [
      {
        name: "Residential",
        icon: "home",
        pages: ["Home additions", "Whole-house remodels", "Custom homes"],
      },
      {
        name: "Commercial",
        icon: "building",
        pages: ["Tenant build-outs", "Office renovations", "Retail fit-outs"],
      },
      {
        name: "Credentials",
        icon: "shield",
        pages: [
          "Licenses and insurance",
          "Safety program",
          "Capability statement",
        ],
      },
      {
        name: "Projects and Markets",
        icon: "pin",
        pages: ["Project portfolio", "City pages", "County pages"],
      },
    ],
  },
  results: {
    title: "How a New Contractor Website Pays Off Over Time",
    lead: "Progress builds as pages index, case studies stack up and quote requests arrive with better details.",
    cta: "Plan My Contractor Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Quote Requests Logged by Source",
        text: "Forms and calls are tracked from day one, with residential and commercial kept apart.",
      },
      {
        when: "Month 1",
        title: "Google Crawls Your Project Pages",
        text: "Google crawls your service, market and project pages and starts showing them.",
      },
      {
        when: "Months 2–3",
        title: "Market Pages Gain Ground",
        text: "City pages and new reviews climb for addition, remodel and build-out searches.",
      },
      {
        when: "Bid season",
        title: "More Invitations to Bid",
        text: "Owners and property managers vetting builders find a full record of your work.",
      },
    ],
    wins: [
      {
        icon: "briefcase",
        title: "Better-Fit Projects",
        text: "The quote form screens out jobs outside your size and scope.",
      },
      {
        icon: "shield",
        title: "Instant Credibility With Owners",
        text: "License, insurance and safety details answer owner questions early.",
      },
      {
        icon: "trend",
        title: "Less Reliance on Referrals",
        text: "Search brings new owners in between word-of-mouth jobs.",
      },
      {
        icon: "users",
        title: "Easier Crew Recruiting",
        text: "Careers and trade partner pages bring in subs and new hires.",
      },
    ],
    band: [
      {
        icon: "briefcase",
        value: "Bid Requests",
        label: "Commercial and residential inquiries sorted by type",
      },
      {
        icon: "shield",
        value: "Credibility at a Glance",
        label: "Licenses, insurance and project history up front",
      },
      {
        icon: "layers",
        value: "Projects That Sell",
        label: "Case studies that show scope and finish",
      },
      {
        icon: "search",
        value: "Search-Ready Services",
        label: "Pages for additions, remodels and new builds",
      },
    ],
  },
  process: {
    title: "Framed, Finished and Live: A Contractor Site in 2–3 Weeks",
    lead: "A scoped plan, a free homepage draft and a firm launch date, like any well-run build.",
    items: [
      {
        when: "Week 1",
        h: "Site Walk and Draft Homepage",
        p: "We go over project types, markets and credentials, and you get a draft homepage to mark up.",
      },
      {
        when: "Weeks 1–2",
        h: "Case Studies and Page Copy",
        p: "Completed jobs become case pages, and service pages are written for both client types.",
      },
      {
        when: "Weeks 2–3",
        h: "Quote Form and Search Setup",
        p: "The project quote form, call tracking, redirects and contractor schema are installed.",
      },
      {
        when: "Launch",
        h: "Punch List and Go Live",
        p: "We check every page on phones and desktops, launch, then add projects as they close.",
      },
    ],
  },
  compare: {
    title: "Contractor Websites vs. Renting a Directory Profile",
    lead: "Owning your construction website beats paying for space on someone else's lead page.",
    otherLabel: "Directory profile page",
    rows: [
      {
        topic: "Who owns the leads",
        other: "Leads shared with competing contractors on the same page.",
        zonic: "Every quote request comes only to you.",
      },
      {
        topic: "Project proof",
        other: "A handful of photos in a fixed template.",
        zonic: "Full case pages with scope, scale, schedule and photos.",
      },
      {
        topic: "Commercial buyers",
        other: "No place for capability statements or bid requests.",
        zonic: "A bid request form and a downloadable capability statement.",
      },
      {
        topic: "License and insurance",
        other: "Maybe a tiny badge, with nothing behind it.",
        zonic: "License, bonding, insurance and safety program on every page.",
      },
      {
        topic: "Showing up in search",
        other: "One profile that ranks for the directory, not for you.",
        zonic: "City and county pages that build rankings for your own domain.",
      },
      {
        topic: "Brand control",
        other: "Ads for rival builders shown beside your profile.",
        zonic: "Your brand and your message, with no competitor ads.",
      },
    ],
  },
  reviews: {
    title: "Check the 5.0 Google Rating Behind Our Web Team",
    lead: "What business owners have said about us, straight from our Google profile.",
  },
  pricing: {
    title: "Contractor Website Plans for Steady Growth",
    compareTitle: "Builder Plans Compared Line by Line",
    addOnsTitle: "Add Bid, Careers and Market Pages",
    customTitle: "A Builder With Multiple Offices or Divisions?",
  },
  faq: {
    title: "Contractor Website Design FAQs for Builders and GCs",
    lead: "Cost, timing, bid forms and protecting rankings, for residential and commercial builders.",
    items: [
      {
        q: "How much does a general contractor website cost?",
        a: "Pricing is a fixed, single quote given after a free call about your project types, markets and the pages you need, with no surprise add-ons later. Firms that add a qualifying growth plan, paid month to month, can have the build paid for through our free website offer.",
      },
      {
        q: "How quickly can a contractor website be built?",
        a: "A typical build takes 2–3 weeks. Week one delivers your homepage mockup, week two the project pages and copy; the quote form, tracking, redirects and schema are finished and tested before go-live. The launch date is agreed before any work starts.",
      },
      {
        q: "What should a general contractor website include?",
        a: "Separate paths for homeowners and commercial clients, a project portfolio with scope details, your license, bonding and insurance information, a quote or bid request form, service and city pages, reviews, a capability statement, careers and trade partner pages, and fast mobile pages with contractor schema.",
      },
      {
        q: "Do general contractors really need a website?",
        a: "Yes, even with strong referrals. Owners and property managers check a builder's site before they call or invite a bid, and a thin or missing site costs credibility. A real website also ranks in local searches that referrals never reach.",
      },
      {
        q: "Can one site serve both residential and commercial clients?",
        a: "Yes. Homeowners and commercial clients get separate landing pages, portfolios and forms, so a family planning an addition never wades through tenant build-out details. Each path speaks to that buyer and routes leads to the right person on your team, whether that's an estimator or a project manager.",
      },
      {
        q: "Will a redesign hurt my construction company's rankings?",
        a: "Not with a proper migration. We audit the current site for pages that rank, preserve or redirect each of them, update internal links and submit a fresh sitemap, then keep an eye on positions and quote requests through the first months.",
      },
      {
        q: "How do you show projects when clients want privacy?",
        a: "We can leave out addresses and client names, show general locations and focus on scope, size and photos. For commercial work under confidentiality, a short case summary without images still proves experience to owners and architects. You approve every project page before it's published.",
      },
      {
        q: "Can a DIY website builder work for a contracting business?",
        a: "For a brand-new solo operator, maybe. Builder templates struggle with competitive construction terms and can't handle bid packages or separate commercial paths. A custom site adds market pages, credential sections and project quote forms built around how contractors win work.",
      },
      {
        q: "What happens after the contractor website launches?",
        a: "Hosting, security and backups are on us, new case pages go up as jobs close, and calls and quote requests are tracked by source. Edits happen on request, and builders often follow up with local SEO or paid ads to reach more owners.",
      },
    ],
  },
  consult: {
    title: "Free Homepage Draft for General Contractors",
    lead: [
      "List the project types you take on and the markets you cover. We'll return a draft homepage and a site outline built around them, with no fee. Not ready for a draft yet? ",
      { href: "/contact-us", label: "Call or message us" },
      ", get to know ",
      { href: "/about", label: "our team" },
      ", review ",
      { href: "/services", label: "what else we do" },
      " or see our ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Google profile reinstatement service",
      },
      ". We also offer ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home service companies",
      },
      ".",
    ],
    points: [
      "Free homepage draft",
      "Market and page plan",
      "Bid form setup tips",
      "Site ready in 2–3 weeks",
    ],
    form: {
      formType: "general-contractor-website-design",
      badge: "Free contractor homepage draft",
      title: "Start Your Free Contractor Site Draft",
      subtitle: "No charge and no obligation to sign.",
      submitText: "Send My Contractor Draft Request",
      messageLabel: "Your firm, website and project types",
      messagePlaceholder:
        "Company name, current website (if any), residential or commercial work you take on and the markets you build in",
    },
  },
  banner: {
    title: "Show Owners the Builder Behind Every Bid",
    lead: "Case-study portfolios, credential pages and quote forms for homeowners and commercial clients.",
  },
};
