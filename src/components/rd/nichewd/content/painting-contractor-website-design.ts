/* Painting Contractor Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: painting contractor website design
     236 impressions (pos 21.8) · painting contractor websites 212 (15.8) ·
     painting company website design 167 (29.0) · web design for painting
     companies 141 (29.7) · website for painting business 80 (28.6) ·
     website design for painting contractors 79 (29.1) · best painting
     contractor websites 71 (14.9) · painting contractor website 67 (13.9)
     · web design for painting contractors 63 (21.4).
   - Semrush US: painting contractor website design 170 (KD 27) · painting
     contractor websites 170 (13) · painting company website design 140
     (6) · painter website design 30. "Painting websites" avoided (art
     intent).
   - Web research (homeowner hiring guides, painter marketing and
     estimating-software guides): homeowners compare several bids and ask
     about licence and insurance, prep work, paint products, cleanup and
     timelines before they choose; galleries split by room and surface;
     short mobile estimate forms with photos; colour consultation and
     visualizer requests; separate interior, exterior and commercial pages;
     reviews beside the quote button.
   Angle: the site wins the bid before the walkthrough (prep, products and
   proof up front). Modes: interior vs exterior. Rules kept: build time
   2–3 weeks, no prices or figures, no company or brand named, verified
   numbers only, every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/painting-contractor-website-design",
  stage: {
    widget: "quote",
    switchLabel: "Switch the example site between interior and exterior work",
    business: "Your Painting Co.",
    domain: "yourpaintingco.com",
    nav: ["Interior", "Exterior", "Colors", "Gallery"],
    call: "Call today",
    primary: "Get a free estimate",
    secondary: "See before & afters",
    proof: "Trusted by homeowners and HOAs",
    bookTitle: "Free painting estimate",
    confirm: "Request estimate",
    serviceSubs: [
      "Color help included",
      "Fully insured crew",
      "Written estimate",
    ],
    toast: "Estimate requested",
    toastNote: "Walkthrough Thursday",
    phoneCta: "Quote",
    modes: [
      {
        label: "Interior painting",
        icon: "roller",
        badge: "Interior · Free color consult",
        headline: "Fresh Walls, Clean Lines, No Mess Left Behind",
        sub: "Rooms, cabinets and trim painted by a careful crew that protects your floors.",
        services: ["Room painting", "Cabinet refinishing", "Drywall repair"],
        book: ["Living areas", "Cabinets", "Trim & doors"],
        img: {
          src: "/images/free-website/free-painting-contractor/interior-painting.webp",
          position: "55% 45%",
        },
      },
      {
        label: "Exterior painting",
        icon: "home",
        badge: "Exterior · Booking this season",
        headline: "Curb Appeal That Holds Up to Sun and Rain",
        sub: "Siding, stucco, decks and fences prepped right and coated to last for years.",
        services: ["House painting", "Deck staining", "Siding & stucco"],
        book: ["Whole house", "Deck or fence", "Trim only"],
        img: {
          src: "/images/free-website/free-painting-contractor/exterior-painting.webp",
          position: "50% 40%",
        },
      },
    ],
    legend: [
      "Tap-to-call header button",
      "Interior and exterior landing pages",
      "Estimate request with photos",
      "Call bar on every phone screen",
    ],
  },
  // Fuchsia interior, sky exterior, then gold and lime (tones.ts).
  tones: tonesFor("painting-contractor-website-design"),
  serviceName: "Painting Contractor Website Design",
  audience:
    "painting contractors and residential and commercial painting companies",
  meta: {
    title: "Painting Contractor Website Design | Websites for Painters",
    description:
      "Painting contractor website design for interior and exterior painters: project galleries, photo estimate forms and town pages built to rank and win bids.",
    keywords: [
      "painting contractor website design",
      "painting contractor websites",
      "painting company website design",
      "web design for painting companies",
      "website design for painting contractors",
      "web design for painting contractors",
      "painting contractor website",
      "website for painting business",
      "best painting contractor websites",
      "painter website design",
      "painting company web design",
    ],
  },
  hero: {
    h1Lead: "Painting Contractor Website Design",
    h1Rest: "That Wins Jobs Before You Bid",
    icon: "roller",
    lead: [
      "We build painting contractor websites that show your prep, your finish work and your reviews before a homeowner ever compares estimates. Each ",
      { href: "/services/web-design", label: "custom website" },
      " we design for painters launches in 2–3 weeks, with room, surface and town pages ready to rank.",
    ],
    cta: "Show Me My Painting Homepage",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/painting-contractor-hero.webp",
        position: "58% center",
        query: "house painters near me",
      },
      cardA: {
        icon: "search",
        title: "Found First for Painter Searches",
        sub: "Interior, exterior and town pages that rank",
      },
      photoB: {
        src: "/images/home-improvement-web/painting-contractor-first-impressions-1.webp",
        position: "center",
        query: "interior painting near me",
      },
      cardB: {
        icon: "clipboard",
        title: "More Estimates on the Calendar",
        sub: "Photo-ready quote forms homeowners finish",
      },
    },
  },
  showcase: {
    title: "Preview a Painting Company Website, Inside and Out",
    lead: "Flip between interior and exterior work to see the homepage, estimate form and phone view change.",
  },
  services: {
    title: "Web Design for Painting\nContractors, Start to Finish",
    lead: "From first sketch to monthly edits, a single Zonic team owns your painting company website.",
    cta: "Plan My Painting Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Sites for Painting Companies",
        desc: "Built around your crews, surfaces and service towns, with copy that explains your prep and products in plain words.",
        points: ["Custom layout", "Prep process page", "Written for you"],
        links: [
          { href: "/services/web-design", label: "See our web design service" },
        ],
      },
      {
        icon: "repeat",
        title: "Rebuilds of Tired Painter Websites",
        desc: "We redo dated or slow painting websites and carry over every URL, review and page that already brings in estimates.",
        points: ["Old URLs mapped", "301 redirects set", "Speed fixed"],
        links: [],
      },
      {
        icon: "roller",
        title: "Interior and Exterior Service Pages",
        desc: "Separate pages for rooms, cabinets, siding, decks and commercial repaints, each ready to rank and to send ad traffic to.",
        points: [
          "Cabinet and trim pages",
          "Exterior and deck pages",
          "Commercial repaint page",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for painters" },
        ],
      },
      {
        icon: "camera",
        title: "Room-by-Room Color Transformations",
        desc: "Galleries sorted by room, surface and town, with captions that name the products and colors used on each job.",
        points: [
          "Room-by-room filters",
          "Color names listed",
          "Easy photo uploads",
        ],
        links: [],
      },
      {
        icon: "clipboard",
        title: "Estimate Requests That Get Finished",
        desc: "Short, phone-friendly estimate forms that collect room counts, photos and timing, then route straight to your CRM.",
        points: ["Photo uploads", "CRM hookup", "Text-back alerts"],
        links: [
          {
            href: "/services/industry/local-seo-for-painting-contractors",
            label: "Local SEO for painting contractors",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting, Care and Repaint-Season Updates",
        desc: "Managed hosting, backups and edits after launch, plus fresh exterior promos before the spring repaint rush.",
        points: ["Managed hosting", "Edits on request", "Seasonal promos"],
        links: [
          {
            href: "/painting-contractor-website-design-agency-us/offer",
            label: "Free painting website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Painting Contractor Website Features That Win Bids",
    lead: "Small details that make a homeowner pick your estimate over the other two on the table.",
    items: [
      {
        icon: "phone",
        title: "One-Tap Calling From Any Page",
        text: "A call button follows visitors down the page on their phone.",
      },
      {
        icon: "clipboard",
        title: "A Prep Process Page",
        text: "Show how you scrape, patch, prime and protect before paint goes on.",
      },
      {
        icon: "camera",
        title: "Photo Sets for Every Surface",
        text: "Kitchens, cabinets, siding and decks each get their own photo set.",
      },
      {
        icon: "shield",
        title: "Proof of Coverage Up Front",
        text: "Coverage details and safety practices sit where buyers look for them.",
      },
      {
        icon: "paint",
        title: "Color Consult Requests",
        text: "Homeowners ask for a color visit straight from the site.",
      },
      {
        icon: "pin",
        title: "Neighborhood Pages Showing Recent Jobs",
        text: "Each service town shows nearby projects and neighbors' reviews.",
      },
      {
        icon: "star",
        title: "Reviews Next to Every Quote Button",
        text: "Google stars sit right beside the estimate form.",
      },
      {
        icon: "bolt",
        title: "Quick Loads on Mobile Data",
        text: "Compressed photos keep large galleries fast on phones.",
      },
    ],
  },
  growth: {
    title: "How Painting Contractor Websites Turn Searches Into Jobs",
    lead: "Show up for local paint searches, turn visits into estimates and get named in AI answers.",
    rank: {
      title: "Climb for Interior and Exterior Searches by Town",
      body: [
        "Every room, surface and town page targets a search homeowners actually type, then gets tracked each week. Add ",
        {
          href: "/services/industry/local-seo-for-painting-contractors",
          label: "local SEO for painting contractors",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google Business Profile optimization",
        },
        " so your company shows in the map pack as well.",
      ],
      points: [
        "Pages for each surface",
        "Town pages that rank",
        "Weekly position checks",
        "Painting schema",
      ],
      cta: "Plan My Painting Pages",
      keywords: [
        ["interior painters near me", 24, 3],
        ["exterior house painting + city", 31, 5],
        ["cabinet painting near me", 27, 4],
        ["painting contractor near me", 19, 2],
      ],
    },
    convert: {
      title: "Turn Color Questions Into Booked Walkthroughs",
      body: [
        "Estimate forms take photos and room counts in under a minute, and every request is tagged to the page that won it. Our ",
        {
          href: "/services/painting-contractor-marketing-agency",
          label: "painting contractor marketing",
        },
        " team can then push more traffic to your best pages.",
      ],
      points: [
        "Photo-ready estimate form",
        "Walkthrough scheduling",
        "Lead source tracking",
        "Sticky call bar",
      ],
      cta: "Show Me the Estimate Flow",
      url: "yourpaintingco.com",
      headline: "New Colors? Get a Free Estimate",
      services: [
        "Interior rooms",
        "Cabinets",
        "Exterior repaint",
        "Deck staining",
      ],
    },
    ai: {
      title: "When AI Suggests a Local Painter, Make It You",
      body: [
        "When your pages plainly explain prep, product lines and drying times, ChatGPT and Google AI Overviews have something worth quoting. Our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        " then track when your company gets named.",
      ],
      points: [
        "Q&A on every service page",
        "Structured service data",
        "Prep and product details",
        "Citation tracking",
      ],
      cta: "Test My AI Visibility",
      query: "who can repaint my house exterior",
      intro: "For exterior repaints in your area,",
      bullets: [
        "A detailed prep process",
        "Insured, careful crews",
        "Strong neighborhood reviews",
      ],
    },
  },
  sitemap: {
    title: "The Page Plan Behind a Painting Company Website",
    lead: "Each page lines up with one search a homeowner or property manager makes, which spreads rankings across the site.",
    home: "Your Painting Co. homepage",
    groups: [
      {
        name: "Interior",
        icon: "roller",
        pages: ["Room painting", "Cabinet refinishing", "Ceilings and trim"],
      },
      {
        name: "Exterior",
        icon: "home",
        pages: [
          "House painting",
          "Deck and fence staining",
          "Siding and stucco",
        ],
      },
      {
        name: "Proof",
        icon: "camera",
        pages: ["Project gallery", "Prep process", "Colors and products"],
      },
      {
        name: "Areas and Clients",
        icon: "pin",
        pages: ["Home city page", "Nearby town pages", "Property manager page"],
      },
    ],
  },
  results: {
    title: "Painting Website Results From Launch to Repaint Season",
    lead: "Gains build as pages get indexed, galleries fill up and reviews stack beside your estimate button.",
    cta: "Map Out My First Season",
    milestones: [
      {
        when: "Launch week",
        title: "Paint Leads Traced From Day One",
        text: "Forms, calls and texts carry a page tag from launch morning on.",
      },
      {
        when: "Month 1",
        title: "Room and Surface Pages Indexed",
        text: "Google crawls the interior, exterior and town pages, and the first painter searches near you start listing them.",
      },
      {
        when: "Months 2–3",
        title: "Climbing the Painter Results",
        text: "Newer reviews plus the town pages lift your company toward the top results for painters nearby.",
      },
      {
        when: "Repaint season",
        title: "A Fuller Exterior Calendar",
        text: "Exterior pages and early-booking promos catch demand as the weather warms.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Walkthroughs Booked Online",
        text: "Homeowners pick a walkthrough time without a round of phone tag.",
      },
      {
        icon: "camera",
        title: "Work That Sells Itself",
        text: 'Captioned before-and-after sets answer the "how will it look" question.',
      },
      {
        icon: "trend",
        title: "Visitors Through the Slow Months",
        text: "Surface and town pages keep bringing in searchers when exterior work slows.",
      },
      {
        icon: "shield",
        title: "Trust Before the Walkthrough",
        text: "License, insurance and prep details settle doubts before you arrive.",
      },
    ],
    band: [
      {
        icon: "clipboard",
        value: "Estimate Requests",
        label: "Quick forms for interior and exterior jobs",
      },
      {
        icon: "sparkle",
        value: "Color Confidence",
        label: "Galleries that help homeowners picture the finish",
      },
      {
        icon: "pin",
        value: "Neighborhood Reach",
        label: "Area pages for every part of town you paint",
      },
      {
        icon: "smile",
        value: "Clean, Bright Design",
        label: "A site as tidy as your brushwork",
      },
    ],
  },
  process: {
    title: "Painting Contractor Website Design in 2–3 Weeks, Step by Step",
    lead: "You see a mockup in week one and get a fixed launch date before work starts.",
    items: [
      {
        when: "Week 1",
        h: "Scope Call and Homepage Mockup",
        p: "We note the surfaces you paint, where you work and how you quote, and a free homepage mockup follows.",
      },
      {
        when: "Weeks 1–2",
        h: "Pages Written, Galleries Laid Out",
        p: "We write every page and lay out your best project photos and brand colors.",
      },
      {
        when: "Weeks 2–3",
        h: "Quote Tools and Tracking Hooked Up",
        p: "Photo estimate forms, call tracking, redirects, schema and town pages all get connected.",
      },
      {
        when: "Launch",
        h: "Launch and First Tune-Ups",
        p: "The site launches and we tune pages as calls and estimate requests come in.",
      },
    ],
  },
  compare: {
    title: "Why Painters Outgrow DIY Builder Websites",
    lead: "Where a do-it-yourself site loses estimates and a site built for painters wins them.",
    otherLabel: "DIY builder site",
    rows: [
      {
        topic: "Finished-job photos",
        other: "A slow slideshow of mixed jobs with no captions.",
        zonic:
          "Galleries by room and surface, compressed and captioned with colors.",
      },
      {
        topic: "Prep and products",
        other: "No mention of how surfaces get prepped.",
        zonic:
          "A process page covering scraping, priming, caulking and paint lines.",
      },
      {
        topic: "Quote request form",
        other: "Just a name, an email and an empty message box.",
        zonic: "A short form that collects photos, rooms and timing.",
      },
      {
        topic: "Interior vs. exterior",
        other: "Every service crammed onto one page.",
        zonic:
          "Separate pages for interior, exterior, cabinets and commercial work.",
      },
      {
        topic: "Trust details",
        other: "License and insurance left off or buried.",
        zonic:
          "Coverage, safety and warranty details next to the quote button.",
      },
      {
        topic: "Town-by-town reach",
        other: "One page that lists every town on a single line.",
        zonic: "Town pages with nearby jobs and reviews from those streets.",
      },
    ],
  },
  reviews: {
    title: "Look Up Our 5.0 Google Reviews First, Then Call",
    lead: "Unfiltered feedback from owners we've worked with, live on our Google profile.",
  },
  pricing: {
    title: "Growth Plans for a Painting Contractor Website",
    compareTitle: "Plan Features for Painting Company Sites",
    addOnsTitle: "Add-Ons for Painters: Pages, Galleries, Tools",
    customTitle: "Running Paint Crews in Several Cities?",
  },
  faq: {
    title: "Before You Hire a Painting Website Designer: FAQs",
    lead: "Cost, launch time, galleries, estimates and what to put on a painting company website.",
    items: [
      {
        q: "How much does a painting contractor website cost?",
        a: "Your price is set once, after a free call where we go over your crews, service towns and how you handle estimates, and it stays put through launch. On a qualifying monthly growth plan? Then our free website offer waives the build itself.",
      },
      {
        q: "How many weeks does a website for a painting business take?",
        a: "Two to three weeks for most painting businesses. You see a free homepage mockup in the first week, then we write and design the pages, connect estimate forms and call tracking, and set redirects before the launch date we agreed on at the start.",
      },
      {
        q: "What should go on a painting company's website?",
        a: "A click-to-call button, a short estimate form that accepts photos, separate interior, exterior and cabinet pages, a gallery sorted by room and surface, a page on your prep process, license and insurance details, town pages and Google reviews placed near every quote button.",
      },
      {
        q: "Should I post prices or an estimate form on my painting website?",
        a: "Most painters do better with an estimate form plus a page that explains what affects a quote: room count, wall condition, ceiling height, trim and the paint line chosen. Homeowners learn what to expect, and you still price each job after seeing it.",
      },
      {
        q: "How should painters show before-and-after photos online?",
        a: "Group photos by room, surface and town, shoot the before and after from the same angle, and caption each set with the colors and products used. We compress every image so large galleries still load fast on phones, and you can add new jobs yourself.",
      },
      {
        q: "Will redesigning my painting website drop my Google rankings?",
        a: "A planned move keeps them safe. Our team logs each old address, keeps the pages that pull visitors, sends changed URLs to their new homes with redirects and gives Google a fresh sitemap. Rankings and estimate requests are watched closely for the first few weeks.",
      },
      {
        q: "What makes the best painting contractor websites stand out?",
        a: "The best painting company websites answer a homeowner's doubts before the walkthrough. Real project photos, a clear prep process, proof of insurance, fast pages and an estimate form that takes a minute to finish set them apart from sites that only list services and a phone number.",
      },
      {
        q: "Can you add color consultation requests to my site?",
        a: "Yes. We add a color consult request to your interior and exterior pages, and we can embed a color visualizer you already license. Homeowners who are still choosing colors can book a visit with your estimator instead of leaving the site to keep browsing.",
      },
    ],
  },
  consult: {
    title: "Picture Your New Painting Website Before You Commit",
    lead: [
      "Send your services, your best jobs and the towns you paint in. In return we design your homepage, mock it up and outline every page, at no charge. Prefer a conversation? ",
      { href: "/contact-us", label: "Call or message us" },
      ", learn ",
      { href: "/about", label: "about our company" },
      ", scan ",
      { href: "/services", label: "the full list of Zonic services" },
      " or get help when a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Google profile gets suspended",
      },
      ". Reviews and maps get their own page in our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO playbook for home services",
      },
      ". Painting crews that also lay floors or install windows can look at our ",
      {
        href: "/services/flooring-website-design",
        label: "flooring website design",
      },
      " and ",
      {
        href: "/services/window-and-door-website-design",
        label: "window and door website design",
      },
      " pages.",
    ],
    points: [
      "Mockup of your homepage",
      "Surface and town page plan",
      "Estimate form advice",
      "Launch in 2–3 weeks",
    ],
    form: {
      formType: "painting-contractor-website-design",
      badge: "Free painting site mockup",
      title: "Start Your Painting Website Mockup",
      subtitle: "No cost and no obligation.",
      submitText: "Request My Painting Mockup",
      messageLabel: "Your painting company and services",
      messagePlaceholder:
        "Company name, current website, interior or exterior focus, and the towns you serve",
    },
  },
  banner: {
    title: "Make Your Painting Company the Easy Choice Online",
    lead: "Clear prep pages, real project photos and an estimate form homeowners actually finish.",
  },
};
