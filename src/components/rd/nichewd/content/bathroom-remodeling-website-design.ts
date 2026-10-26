/* Bathroom Remodeling Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: only bot-like long tail ("website
     design company providing websites for companies providing bathroom
     remodeling services near <town>"), so targets come from Semrush.
   - Semrush US: remodeling websites 170 (KD 16, kept for the kitchen page)
     · remodeling website design 110 (15) · bathroom remodeling website
     design 10. This page leads with "bathroom remodeling website design",
     "bathroom remodeler websites" and "remodeling website design".
   - Web research (2026 remodeling trend studies, remodeler and agency
     guides): about half of renovating homeowners enlarge the shower;
     grab bars, slip-resistant floors and low-curb showers top the
     aging-in-place list; tub-to-shower and curbless showers are searched
     on their own. Homeowners compare galleries and reviews before they
     reach out, want before-and-after project pages, a plain explanation
     of the process (layout, fixture and tile choices), visible license,
     insurance and warranty details, and a free in-home estimate as the
     main call to action. Angle chosen: walk-in shower and safety-upgrade
     pages plus a photo estimate form (kitchen gets consult booking).
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company named, verified numbers only, every live
   content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/bathroom-remodeling-website-design",
  stage: {
    widget: "quote",
    switchLabel: "Preview the example site by bathroom project",
    business: "Your Bath Remodeling Co.",
    domain: "yourbathremodelco.com",
    nav: ["Remodels", "Showers", "Gallery", "Areas"],
    call: "Call today",
    primary: "Get my estimate",
    secondary: "See bathrooms",
    proof: "Rated by homeowners nearby",
    bookTitle: "Get a free estimate",
    confirm: "Send my request",
    serviceSubs: [
      "Design help included",
      "Licensed installers",
      "Financing available",
    ],
    toast: "Estimate requested",
    toastNote: "Callback today",
    phoneCta: "Quote",
    modes: [
      {
        label: "Full remodel",
        icon: "bath",
        badge: "Full bathroom remodel",
        headline: "Your Dated Bathroom, Rebuilt From the Studs Up",
        sub: "Layout changes, new tile, vanities and lighting, planned and built by one crew.",
        services: [
          "Primary bath remodel",
          "Guest bath refresh",
          "Tile and vanity",
        ],
        book: ["Full remodel", "Guest bath", "Vanity + tile"],
        img: {
          src: "/images/free-website/free-bathroom-remodeling/hero.webp",
          position: "50% 50%",
        },
      },
      {
        label: "Walk-in showers",
        icon: "shower",
        badge: "Tub-to-shower · Low curb",
        headline: "Swap the Tub for a Safe, Walk-In Shower",
        sub: "Low-curb entries, grab bars and slip-resistant tile for every stage of life.",
        services: [
          "Tub-to-shower swap",
          "Aging-in-place bath",
          "Curbless shower",
        ],
        book: ["Tub to shower", "Grab bars", "Curbless shower"],
        img: {
          src: "/images/free-website/free-bathroom-remodeling/hero.webp",
          position: "28% 40%",
          phonePosition: "30% 40%",
          zoom: 1.7,
        },
      },
    ],
    legend: [
      "Tap-to-call header",
      "Shower and remodel pages",
      "Estimate form with photos",
      "Thumb-reach quote bar",
    ],
  },
  // Sky and rose for the two bath projects, then violet and lime (tones.ts).
  tones: tonesFor("bathroom-remodeling-website-design"),
  serviceName: "Bathroom Remodeling Website Design",
  audience: "bathroom remodelers and bath renovation companies",
  meta: {
    title: "Bathroom Remodeling Website Design | Bath Remodeler Websites",
    description:
      "Bathroom remodeling website design for bath remodelers: walk-in shower pages, photo estimate forms and project galleries that turn local searches into jobs.",
    keywords: [
      "bathroom remodeling website design",
      "bathroom remodeler websites",
      "remodeling website design",
      "bathroom remodeling web design",
      "bath remodeler website design",
      "website design for bathroom remodelers",
      "remodeling web design",
      "remodeling contractor website design",
      "bathroom renovation website",
      "walk-in shower company website",
      "bath remodeling web design company",
    ],
  },
  hero: {
    h1Lead: "Bathroom Remodeling Website Design",
    h1Rest: "That Sells Walk-In Showers",
    icon: "bath",
    lead: [
      "We build bathroom remodeler websites that show finished baths, explain each project in plain steps and let homeowners send photos for an estimate. Each ",
      { href: "/services/web-design", label: "custom website" },
      " for a bath remodeler launches in 2–3 weeks and comes with a page for every shower type and town.",
    ],
    cta: "Get My Free Bath Remodel Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/bathroom-remodeling-first-impressions-1.webp",
        position: "58% center",
        query: "walk in shower remodel near me",
      },
      cardA: {
        icon: "shower",
        title: "Found for Every Shower Search",
        sub: "Tub-to-shower and curbless pages that rank",
      },
      photoB: {
        src: "/images/home-improvement-web/bathroom-remodeling-hero.webp",
        position: "center 30%",
        query: "bath remodeling company",
      },
      cardB: {
        icon: "trend",
        title: "Estimate Requests Week After Week",
        sub: "Photo uploads that pre-qualify each job",
      },
    },
  },
  showcase: {
    title: "Preview a Bathroom Remodeling Website, Project by Project",
    lead: "Flip between a full remodel and a walk-in shower page to watch the offer and estimate form change.",
  },
  services: {
    title: "Remodeling Website Design for\nBathroom Specialists",
    lead: "Every piece a bath remodeler needs online, planned, written and maintained by one team.",
    cta: "Outline My Bath Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Bath Remodeler Websites",
        desc: "A site shaped around the baths you build, the towns you serve and the way you run estimates, never a recycled theme.",
        points: [
          "Original design",
          "Your project photos",
          "Plain-language copy",
        ],
        links: [
          { href: "/services/web-design", label: "See our web design service" },
        ],
      },
      {
        icon: "shower",
        title: "Walk-In Shower and Tub-to-Shower Pages",
        desc: "Pages for the most requested bath upgrades, with photos, options and an estimate button.",
        points: [
          "Curbless shower page",
          "Tub-to-shower page",
          "Ad-ready versions",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for remodelers" },
        ],
      },
      {
        icon: "heart",
        title: "Aging-in-Place Bathroom Pages",
        desc: "Pages for families planning safer baths, covering grab bars, low thresholds, comfort-height fixtures and slip-resistant tile.",
        points: [
          "Safety upgrade guides",
          "Caregiver-friendly forms",
          "Accessible layouts",
        ],
        links: [],
      },
      {
        icon: "camera",
        title: "Before-and-After Bath Galleries",
        desc: "Every finished bath gets a page with before photos, the scope and the final room, sorted by style.",
        points: ["Project case pages", "Style filters", "Image SEO"],
        links: [
          {
            href: "/services/industry/local-seo-for-bathroom-remodelers",
            label: "Local SEO for bath remodelers",
          },
        ],
      },
      {
        icon: "layers",
        title: "Kitchen and Flooring Add-On Pages",
        desc: "Remodelers who also take on kitchens or new floors get linked service pages, so one site can sell the whole job.",
        points: ["Cross-room projects", "Shared gallery", "One brand"],
        links: [
          {
            href: "/services/kitchen-remodeling-website-design",
            label: "Kitchen remodeling sites",
          },
          {
            href: "/services/flooring-website-design",
            label: "Flooring sites",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting, Updates and Fresh Photos",
        desc: "We host and secure the site and add new projects as you finish them, so the gallery stays current.",
        points: ["Managed hosting", "New project uploads", "Security updates"],
        links: [
          {
            href: "/bathroom-remodeling-website-design-agency-us/offer",
            label: "Free bath remodeler website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "The Bath Remodeler Website Checklist We Build To",
    lead: "Small details that make homeowners trust you with the most personal room in the house.",
    items: [
      {
        icon: "camera",
        title: "Photo Upload in the Estimate Form",
        text: "Homeowners attach pictures of their current bath, so you can price before the visit.",
      },
      {
        icon: "phone",
        title: "A Call Bar That Follows the Scroll",
        text: "On phones, your number and estimate button stay pinned to the screen.",
      },
      {
        icon: "shower",
        title: "Separate Shower and Remodel Paths",
        text: "Each visitor lands on the project they came for, not a generic homepage.",
      },
      {
        icon: "heart",
        title: "Accessibility Built Into Every Page",
        text: "Readable text, strong contrast and simple forms for older homeowners.",
      },
      {
        icon: "star",
        title: "Reviews Next to Each Estimate Button",
        text: "Recent Google reviews sit right where homeowners decide to reach out.",
      },
      {
        icon: "shield",
        title: "License, Warranty and Insurance Shown",
        text: "Credentials appear across the site, not buried on the About page.",
      },
      {
        icon: "bolt",
        title: "Quick-Loading Image Galleries",
        text: "Compressed photos and lazy loading keep big galleries fast on phones.",
      },
      {
        icon: "search",
        title: "Remodeling Schema on Each Page",
        text: "Service, project and review markup that helps Google read the site.",
      },
    ],
  },
  growth: {
    title: "Three Ways Our Bath Remodeler Sites Bring In Projects",
    lead: "Rank in each town, make the estimate easy and get named in AI answers.",
    rank: {
      title: "Show Up for Shower and Bath Searches Nearby",
      body: [
        "We write a page for each bath project and each town, matched to real searches like walk-in shower installs and small bathroom remodels, then check positions weekly. For map rankings too, add ",
        {
          href: "/services/industry/local-seo-for-bathroom-remodelers",
          label: "bathroom remodeler local SEO",
        },
        " alongside ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google Business Profile optimization",
        },
        ".",
      ],
      points: [
        "Project-type pages",
        "Town landing pages",
        "Weekly rank checks",
        "Local business schema",
      ],
      cta: "Find My Bath Search Gaps",
      keywords: [
        ["walk in shower installation", 24, 3],
        ["bathroom remodel + your city", 19, 2],
        ["tub to shower conversion", 31, 4],
        ["bathroom remodelers near me", 17, 3],
      ],
    },
    convert: {
      title: "Make the Estimate Request Effortless",
      body: [
        "A short, three-step estimate form with photo upload, a callback choice and a sticky call bar turns more visits into booked walkthroughs. Every request records which page and search brought it in, and ",
        { href: "/services/google-ads", label: "remodeling ads" },
        " can send more traffic to your best pages.",
      ],
      points: [
        "Three-step form",
        "Photo upload",
        "Callback or text",
        "Source tracking",
      ],
      cta: "Show Me the Estimate Form",
      url: "yourbathremodelco.com",
      headline: "Your New Bathroom Starts Here",
      services: [
        "Full remodel",
        "Walk-in shower",
        "Tub to shower",
        "Vanity + tile",
      ],
    },
    ai: {
      title: "Bath Remodel Questions Answered by AI, Citing You",
      body: [
        "Plain answers on shower options, timelines and safety upgrades, marked up with structured data, make it easier for ChatGPT and Google's AI Overviews to cite your company when homeowners ask who to call. This is the base of our ",
        { href: "/services/ai-seo-services", label: "AI search optimization" },
        " work.",
      ],
      points: [
        "Plain-answer FAQs",
        "Project schema",
        "Linked gallery pages",
        "AI mention checks",
      ],
      cta: "Test My AI Visibility",
      query: "who converts a tub to a walk-in shower near me",
      intro: "For tub-to-shower conversions in your area,",
      bullets: [
        "Before-and-after project pages",
        "Aging-in-place know-how",
        "Recent local reviews",
      ],
    },
  },
  sitemap: {
    title: "A Bathroom Remodeling Site Map Built for Search",
    lead: "Every page answers a real bath search, so traffic arrives through many doors.",
    home: "Your Bath Remodeling Co. homepage",
    groups: [
      {
        name: "Remodels",
        icon: "bath",
        pages: [
          "Full bathroom remodel",
          "Primary suite bath",
          "Small bath makeover",
        ],
      },
      {
        name: "Showers",
        icon: "shower",
        pages: ["Walk-in showers", "Tub-to-shower", "Curbless showers"],
      },
      {
        name: "Safety and Comfort",
        icon: "heart",
        pages: ["Aging-in-place baths", "Grab bars", "Slip-resistant floors"],
      },
      {
        name: "Project Gallery",
        icon: "camera",
        pages: ["Before and after", "Style gallery", "Town projects"],
      },
    ],
  },
  results: {
    title: "After Launch: How a Bath Remodeler Site Gains Momentum",
    lead: "Each month adds indexed pages, fresh reviews and more estimate requests from the form.",
    cta: "See My Bath Site Timeline",
    milestones: [
      {
        when: "Launch week",
        title: "Each Estimate Lead Traced to a Source",
        text: "Form, call and text leads carry their source starting on launch day.",
      },
      {
        when: "Month 1",
        title: "Shower Pages Enter the Index",
        text: "Your shower, remodel and town pages get discovered and begin showing in local results.",
      },
      {
        when: "Months 2–3",
        title: "Town Pages Move Up",
        text: "Fresh gallery projects and reviews push key bath searches closer to page one.",
      },
      {
        when: "Pre-holiday rush",
        title: "More Walkthroughs Booked",
        text: "Homeowners who want a new bath before guests arrive find your shower pages first.",
      },
    ],
    wins: [
      {
        icon: "camera",
        title: "Better-Prepared Estimates",
        text: "Photos arrive with each request, so first visits start with real details.",
      },
      {
        icon: "shower",
        title: "More Shower Conversions",
        text: "Walk-in and tub-to-shower pages pull a steady stream of upgrade jobs.",
      },
      {
        icon: "trend",
        title: "A Gallery That Ranks",
        text: "Each new project page adds another way for homeowners to find you.",
      },
      {
        icon: "heart",
        title: "Confidence Before the Walkthrough",
        text: "Credentials, reviews and clear steps calm nerves before anyone calls.",
      },
    ],
    band: [
      {
        icon: "heart",
        value: "Dream-Bath Leads",
        label: "Galleries that turn browsing into consult requests",
      },
      {
        icon: "users",
        value: "Accessible Remodels",
        label: "Walk-in shower pages for aging-in-place buyers",
      },
      {
        icon: "clipboard",
        value: "Serious Inquiries",
        label: "Project forms that capture scope and timing",
      },
      {
        icon: "camera",
        value: "Polished on Mobile",
        label: "Before-and-after photos that look sharp on phones",
      },
    ],
  },
  process: {
    title: "Your Bath Remodeling Site Goes Live in 2–3 Weeks",
    lead: "One plan, a free homepage mockup and a fixed launch date from the first call.",
    items: [
      {
        when: "Week 1",
        h: "Bath Services Review and Mockup",
        p: "We go through your bath services, towns and how you price jobs, then sketch the homepage you'll review first.",
      },
      {
        when: "Weeks 1–2",
        h: "Gallery and Page Writing",
        p: "We sort your photos into projects and write pages for each shower and remodel type.",
      },
      {
        when: "Weeks 2–3",
        h: "Estimate Form and Tracking Setup",
        p: "We wire up the photo estimate form, call tracking, redirects and local markup.",
      },
      {
        when: "Launch",
        h: "Live, Then Add Projects",
        p: "The site goes live and new before-and-after sets are added as you finish jobs.",
      },
    ],
  },
  compare: {
    title: "What a DIY Builder Page Can't Do for a Bath Remodeler",
    lead: "Where a site planned for bathroom remodeling pulls ahead of a drag-and-drop page.",
    otherLabel: "DIY builder site",
    rows: [
      {
        topic: "Bathroom photos",
        other: "A slideshow of stock bathrooms or a few untagged pictures.",
        zonic:
          "Real before-and-after pages for each bath, sorted by style and town.",
      },
      {
        topic: "Shower upgrades",
        other: "Walk-in showers mentioned in one line on the services page.",
        zonic:
          "Dedicated walk-in, curbless and tub-to-shower pages built to rank.",
      },
      {
        topic: "Getting an estimate",
        other: "A name-and-email form with no way to share photos.",
        zonic:
          "A three-step estimate form with photo upload and a callback choice.",
      },
      {
        topic: "Older homeowners",
        other: "Small text, low contrast and fiddly menus on phones.",
        zonic: "Readable pages and simple forms that work for every age group.",
      },
      {
        topic: "Trust signals",
        other: "Licenses and warranties hidden or missing.",
        zonic: "License, insurance and warranty details shown throughout.",
      },
      {
        topic: "Upkeep after launch",
        other: "You update plugins, photos and backups yourself.",
        zonic: "Hosting, security and new gallery uploads handled for you.",
      },
    ],
  },
  reviews: {
    title: "See the 5.0 Google Reviews Owners Left Us",
    lead: "Real, unedited feedback left on our Google profile by business owners.",
  },
  pricing: {
    title: "Growth Plans for a New Bath Remodeling Site",
    compareTitle: "Plan Features for Bathroom Remodeler Websites",
    addOnsTitle: "Add-Ons for Shower and Remodel Pages",
    customTitle: "Running Several Bath Showrooms or Brands?",
  },
  faq: {
    title: "Bathroom Remodeler Website Questions We Hear Most",
    lead: "Straight answers on cost, launch time, galleries and holding on to existing rankings.",
    items: [
      {
        q: "What will a bathroom remodeling website cost me?",
        a: "You get one fixed price once we've talked through your services, service area and estimate process on a free call, and it does not change mid-build. Add a growth plan that qualifies, on monthly billing, and the website itself comes free through our website offer.",
      },
      {
        q: "When can my bathroom remodeling site go live?",
        a: "Usually 2–3 weeks after kickoff. You see a homepage mockup in the first week, review the gallery and page copy in week two, and the estimate form, tracking and redirects are tested before the site goes live. Nothing launches until you sign off.",
      },
      {
        q: "What should a bathroom remodeling website include?",
        a: "Before-and-after project pages, separate pages for full remodels and walk-in showers, an estimate form that accepts photos, a phone button that stays in view, your license, insurance and warranty details, recent reviews, town pages and clear steps explaining how a remodel works.",
      },
      {
        q: "Can homeowners upload photos of their bathroom with the estimate request?",
        a: "Yes. The estimate form lets homeowners add pictures of their current bathroom along with the project type and ZIP code. You see the space before the first visit, which makes estimates faster and filters out jobs you don't take. The photos stay private to your team.",
      },
      {
        q: "Should walk-in showers and aging-in-place work get their own pages?",
        a: "Yes. Tub-to-shower swaps, curbless showers and safety upgrades are searched on their own, so a single services page rarely ranks for them. Separate pages with photos and plain explanations rank better and double as landing pages for paid ads.",
      },
      {
        q: "Will redesigning my bathroom remodeling website hurt my rankings?",
        a: "Not if the move is planned. Before launch we list every page that brings visitors, carry each one over or point it to its new address, and send Google the updated sitemap. Then we compare rankings and estimate requests week by week.",
      },
      {
        q: "Where do the project photos come from?",
        a: "Your own jobs work best. We sort and compress the photos you already have, pair them as before-and-after sets and write a short scope for each. If your library is thin, we plan a photo checklist for your next few projects.",
      },
      {
        q: "Do I need a separate website for kitchens or other rooms?",
        a: "Usually not. If you also remodel kitchens or install floors, we add linked service pages and a shared gallery so one site sells the whole renovation and builds trust under one name. A separate brand only makes sense when the businesses run apart.",
      },
      {
        q: "What happens after my bathroom website goes live?",
        a: "We host and secure it, add new projects to the gallery, track calls and estimate requests, and make edits whenever you ask. Once it's live, many remodelers pair it with local SEO or Google Ads to reach more homeowners in the towns they serve.",
      },
    ],
  },
  consult: {
    title: "Bath Remodeling Homepage Mockup, On Us",
    lead: [
      "Send your services, towns and a few project photos. Our designers will sketch your new homepage and outline the pages your site needs, free. Rather talk it through? ",
      { href: "/contact-us", label: "Reach our team" },
      ", read ",
      { href: "/about", label: "who we are" },
      ", look over ",
      { href: "/services", label: "our other services" },
      " or ask how we reinstate ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google profiles",
      },
      ". We also handle ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home services",
      },
      ".",
    ],
    points: [
      "Free bath homepage mockup",
      "Gallery and page plan",
      "Estimate form setup",
      "Live in 2–3 weeks",
    ],
    form: {
      formType: "bathroom-remodeling-website-design",
      badge: "Free bath remodeler mockup",
      title: "Send Us Your Bath Remodel Details",
      subtitle: "No cost and no commitment.",
      submitText: "Send My Bath Mockup Request",
      messageLabel: "Your company, website and bath services",
      messagePlaceholder:
        "Company name, current site (if any), the bath projects you take on and the towns you serve",
    },
  },
  banner: {
    title: "Let Your Finished Bathrooms Do the Selling",
    lead: "Real project galleries, a photo estimate form and your number pinned to every phone screen.",
  },
};
