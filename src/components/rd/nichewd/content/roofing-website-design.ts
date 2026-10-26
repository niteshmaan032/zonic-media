/* Roofing Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: roofing website design agency 449
     impressions (pos 23.6) · roofing web design agency 440 (35.2) ·
     roofing web design company 195 (35.1) · roofing company web design
     services 182 (26.8) · roofing web design services 104 (36.3) ·
     website design roofing company 78 (35.2) · roofing website design
     services 71 (27.7) · siding company website design 43 (30.1).
   - Semrush US: roofing website design 1,000 (KD 19) · roofing web design
     720 (19) · roofing websites 480 (16) · roofer website design 210 (18)
     · roofing company website 110 (29).
   - Web research (roofing site guides and roofer sites, 2026): a storm
     and insurance-claim page with plain claim steps (inspection,
     documentation, adjuster meeting), short estimate forms with photo
     upload, before-and-after galleries grouped by material and town,
     a financing page for cost worries, licence/insurance/warranty badges
     near the buttons, town pages that are more than a swapped city name.
     Instant-price tools are treated as preliminary, so the copy offers
     estimate requests, not prices. Sites owned by the roofer are compared
     with shared-lead services, a common alternative for roofers.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company named, verified numbers only, every live
   content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/roofing-website-design",
  stage: {
    widget: "quote",
    switchLabel: "Preview the example site by roofing job",
    business: "Your Roofing Co.",
    domain: "yourroofingco.com",
    nav: ["Repairs", "Replacement", "Storm help", "Financing"],
    call: "Call a roofer",
    primary: "Free inspection",
    secondary: "See finished roofs",
    proof: "Trusted on roofs across town",
    bookTitle: "Get a free estimate",
    confirm: "Send my request",
    serviceSubs: ["Free inspection", "Photo estimate", "Written warranty"],
    toast: "Request received",
    toastNote: "Inspection tomorrow",
    phoneCta: "Inspect",
    modes: [
      {
        label: "Roof replacement",
        icon: "roof",
        badge: "Re-roofing · Free estimate",
        headline: "Ready for a New Roof? Compare Your Options.",
        sub: "Shingle, metal and flat roof replacement with financing and written warranties.",
        services: ["Shingle roofs", "Metal roofing", "Flat roofs"],
        book: ["Full replacement", "Metal roof", "Financing"],
        img: {
          src: "/images/free-website/free-roof/roof-replacement.webp",
          position: "50% 45%",
        },
      },
      {
        label: "Storm damage",
        icon: "storm",
        badge: "Hail & wind · Claim help",
        headline: "Storm Hit Your Roof? Get It Checked Today.",
        sub: "Free damage inspections, emergency tarping and help with your insurance claim.",
        services: ["Hail damage", "Emergency tarping", "Claim support"],
        book: ["Hail damage", "Wind damage", "Active leak"],
        img: {
          src: "/images/free-website/free-roof/storm-damage.webp",
          position: "50% 45%",
        },
      },
    ],
    legend: [
      "One-tap roofer call button",
      "Storm and re-roof landing pages",
      "Roof photo estimate form",
      "Pinned call bar on phones",
    ],
  },
  // Indigo re-roof, red storm, then gold and teal (tones.ts).
  tones: tonesFor("roofing-website-design"),
  serviceName: "Roofing Website Design",
  audience: "roofers and roofing contractors",
  meta: {
    title: "Roofing Website Design Agency | Roofing Web Design Company",
    description:
      "Roofing website design for roofers who want more inspections: storm damage pages, photo estimate forms and town pages built to rank and win roof jobs.",
    keywords: [
      "roofing website design",
      "roofing web design",
      "roofing websites",
      "roofer website design",
      "roofing company website",
      "roofing website design agency",
      "roofing web design agency",
      "roofing web design company",
      "roofing company web design services",
      "roofing website design services",
      "website design roofing company",
      "siding company website design",
    ],
  },
  hero: {
    h1Lead: "Roofing Website Design",
    h1Rest: "That Fills Your Inspection Calendar",
    icon: "roof",
    lead: [
      "We design roofing websites that answer storm calls fast, show the roofs you've already replaced and turn a homeowner's first visit into an inspection request. Every ",
      { href: "/services/web-design", label: "custom website" },
      " we build for roofers launches in 2–3 weeks, complete with storm-season pages for every town you roof.",
    ],
    cta: "Get My Free Roofing Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/roofing-web/every-roofing-vertical-image.webp",
        position: "45% center",
        query: "roofing website design",
      },
      cardA: {
        icon: "roof",
        title: "More Roof Inspections Booked",
        sub: "Estimate forms homeowners finish on phones",
      },
      photoB: {
        src: "/images/roofing-web/hero-image-primary-v3.webp",
        position: "40% 30%",
        query: "roofers near me",
      },
      cardB: {
        icon: "storm",
        title: "First Call After the Storm",
        sub: "Hail and wind pages ready in advance",
      },
    },
  },
  showcase: {
    title: "A Roofing Company Website That Shifts With the Weather",
    lead: "Flip between re-roof and storm mode and see the offer, the estimate request and the mobile layout adapt to each job.",
  },
  services: {
    title: "Roofing Web Design Agency Work,\nFrom Shingles to Storm Claims",
    lead: "Our roofing website design services cover design, copy, forms and upkeep for residential and commercial roofers, handled by one team.",
    cta: "Plan My Roofing Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Roofing Company Websites",
        desc: "A site shaped around the roofs you install, the towns you cover and how you like to receive leads, written for homeowners comparing roofers.",
        points: ["Built from scratch", "Roof-type pages", "Copy we write"],
        links: [
          { href: "/services/web-design", label: "Website design services" },
        ],
      },
      {
        icon: "repeat",
        title: "Roofing Site Rebuilds and Migrations",
        desc: "Dated or slow roofing sites are rebuilt on fresh code, with every page that already ranks mapped and redirected first.",
        points: [
          "Every old URL mapped",
          "Redirects in place",
          "Faster page loads",
        ],
        links: [],
      },
      {
        icon: "storm",
        title: "Storm Response and Claim Pages",
        desc: "Hail and wind pages that explain inspections, damage photos and adjuster meetings, switched on the moment a storm rolls through.",
        points: [
          "Hail and wind pages",
          "Claim steps explained",
          "Storm ad pages",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for roofers" },
        ],
      },
      {
        icon: "clipboard",
        title: "Estimate and Inspection Forms",
        desc: "Short step-by-step forms ask for roof type, the problem and a few photos, then pass the request to your CRM with its source.",
        points: ["Photo uploads", "CRM handoff", "Text alerts to you"],
        links: [],
      },
      {
        icon: "layers",
        title: "Material, Siding and Financing Pages",
        desc: "Pages for asphalt, metal, tile and flat roofs, siding and gutter add-ons, and a financing page that answers cost worries early.",
        points: [
          "Metal and shingle pages",
          "Siding add-on pages",
          "Financing explainer",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-roofing-companies",
            label: "Local SEO for roofing companies",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting and Storm-Season Edits",
        desc: "Managed hosting, security updates and fast edits, including new storm banners and town pages when you expand.",
        points: ["Managed hosting", "Same-week edits", "Backups and SSL"],
        links: [
          {
            href: "/roofing-website-design-agency-us/offer",
            label: "Free roofing website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "What Every Roofer Website Ships With",
    lead: "Built-in parts that move a homeowner from a roof search to a signed inspection.",
    items: [
      {
        icon: "phone",
        title: "Your Number Pinned to Every Roof Page",
        text: "Homeowners can ring your crew from any page without scrolling back up.",
      },
      {
        icon: "camera",
        title: "Project Photos, Tear-Off to Final Shingle",
        text: "Finished jobs sorted by material and town, with the roof type named.",
      },
      {
        icon: "storm",
        title: "A Storm Banner You Switch On",
        text: "Hail and wind messaging goes live the morning after a storm.",
      },
      {
        icon: "clipboard",
        title: "Estimates With Photo Upload",
        text: "Homeowners send a picture of the leak or missing shingles with the request.",
      },
      {
        icon: "award",
        title: "License and Warranty Badges",
        text: "Credentials, insurance and warranty terms sit right beside the buttons.",
      },
      {
        icon: "pin",
        title: "Town Pages With Real Roofs",
        text: "Each town page features roofs you replaced on its own streets.",
      },
      {
        icon: "bolt",
        title: "Fast Loads on Weak Signal",
        text: "Lean pages open quickly, even in a storm-hit neighborhood.",
      },
      {
        icon: "search",
        title: "Roofing Contractor Markup",
        text: "Roofing contractor and review schema help Google read each page.",
      },
    ],
  },
  growth: {
    title: "How a Roofing Website Wins More Inspections",
    lead: "Show up in each town you roof, convert phone visits and get named in AI answers.",
    rank: {
      title: "Show Up When Homeowners Look for a Roofer",
      body: [
        "We build pages around what homeowners search after a leak or a hailstorm, from roof repair to a full tear-off, and check where each one ranks every week. Add ",
        {
          href: "/services/industry/local-seo-for-roofing-companies",
          label: "roofing local SEO",
        },
        ", then let our ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google profile optimization team",
        },
        " tune your map listing for roof searches.",
      ],
      points: [
        "Roof service pages",
        "Town and county pages",
        "Weekly rank reports",
        "Contractor schema",
      ],
      cta: "Plan My Roofing Pages",
      keywords: [
        ["roof replacement + your city", 24, 3],
        ["roof repair near me", 31, 4],
        ["hail damage roof inspection", 27, 2],
        ["metal roofing contractor", 19, 5],
      ],
    },
    convert: {
      title: "Turn Phone Visits Into Inspection Requests",
      body: [
        "Photo upload in a short estimate flow, a pinned call button and fast-loading pages turn more roof shoppers into inspections, and every request is stamped with the page it came from. Pair it with our ",
        {
          href: "/services/roofing-marketing-agency",
          label: "roofing marketing agency",
        },
        " services to send paid and organic visitors where requests close best.",
      ],
      points: [
        "Pinned call button",
        "Photo estimate form",
        "Lead source tagging",
        "Quick on 4G",
      ],
      cta: "Show Me the Estimate Flow",
      url: "yourroofingco.com",
      headline: "Roof Leak? Get a Free Inspection",
      services: ["Roof repair", "Storm damage", "Replacement", "Metal roofs"],
    },
    ai: {
      title: "Be the Roofer AI Answers Recommend",
      body: [
        "Material guides, insurance-claim answers and tidy markup make your roofing company the name ChatGPT and AI Overviews in Google recommend when someone asks which roofer to trust. It's the same groundwork our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        " team lays for every client.",
      ],
      points: [
        "Answer-first guides",
        "Claim FAQs",
        "Tidy page structure",
        "AI mention tracking",
      ],
      cta: "Test My AI Visibility",
      query: "who fixes hail damage on roofs near me",
      intro: "For hail damage roof repair nearby,",
      bullets: [
        "Free storm inspections",
        "Help with insurance claims",
        "Photo-backed roof reports",
      ],
    },
  },
  sitemap: {
    title: "How Our Roofing Web Design Agency Maps Your Pages",
    lead: "Each page answers one thing homeowners look up, from a leak repair to a metal roof.",
    home: "Your Roofing Co. homepage",
    groups: [
      {
        name: "Roof Repair",
        icon: "tool",
        pages: ["Leak repair", "Storm damage", "Emergency tarping"],
      },
      {
        name: "Roof Replacement",
        icon: "roof",
        pages: ["Asphalt shingles", "Metal roofing", "Flat roofs"],
      },
      {
        name: "Claims and Financing",
        icon: "shield",
        pages: ["Insurance claim help", "Financing", "Warranties"],
      },
      {
        name: "Where You Roof",
        icon: "pin",
        pages: ["Home city", "Surrounding towns", "Storm-hit suburbs"],
      },
    ],
  },
  results: {
    title: "From Launch Day to a Fuller Roofing Pipeline",
    lead: "Expect roofing leads to build in stages: indexing first, then reviews, then storm-season surges.",
    cta: "See My Launch Roadmap",
    milestones: [
      {
        when: "Launch week",
        title: "Every Estimate Request Has a Source",
        text: "Forms, call tracking and lead tags go live with the site, so each roof job traces back to the page that won it.",
      },
      {
        when: "Month 1",
        title: "Roof Pages Enter Google's Index",
        text: "Repair, replacement and town pages get crawled and start showing for local roof searches.",
      },
      {
        when: "Months 2–3",
        title: "Town Pages Earn Higher Spots",
        text: "With fresh reviews and project photos, town pages climb toward page one for roofer searches.",
      },
      {
        when: "Storm season",
        title: "Ready When the Hail Hits",
        text: "Storm pages and the claim guide catch the rush of inspection requests after severe weather.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Inspections Requested Overnight",
        text: "Homeowners send photos and book inspections after hours, ready for your morning.",
      },
      {
        icon: "shield",
        title: "Claim Help That Builds Trust",
        text: "A plain claim guide shows storm victims you'll handle the paperwork with them.",
      },
      {
        icon: "layers",
        title: "Bigger Replacement Jobs",
        text: "Material pages help homeowners weigh metal and premium shingles before you arrive.",
      },
      {
        icon: "star",
        title: "The Roofer the Whole Street Knows",
        text: "Yard-sign jobs, reviews and town pages make your company the familiar choice.",
      },
    ],
    band: [
      {
        icon: "trend",
        value: "Storm Season Leads",
        label: "Damage pages ready before the hail hits",
      },
      {
        icon: "award",
        value: "Bigger Roof Jobs",
        label: "Replacement pages that earn trust for major work",
      },
      {
        icon: "file",
        value: "Insurance-Ready Help",
        label: "Claim guidance that keeps homeowners with you",
      },
      {
        icon: "shield",
        value: "A Brand That Looks Solid",
        label: "Project photos and warranties front and center",
      },
    ],
  },
  process: {
    title: "Storm-Season Ready: Your Roofing Website in 2–3 Weeks",
    lead: "Roofers get one kickoff call, a no-cost homepage design and a fixed go-live date.",
    items: [
      {
        when: "Week 1",
        h: "Roof Mix and Mockup",
        p: "We learn your roof types, crews and coverage area before sketching a roofing homepage you can mark up.",
      },
      {
        when: "Weeks 1–2",
        h: "Copy Built on Your Job Photos",
        p: "Our writers draft repair, replacement and storm pages around your own job photos.",
      },
      {
        when: "Weeks 2–3",
        h: "Roof Estimate Forms Go Live",
        p: "Estimate forms, call tracking, roofing schema and redirects are connected and checked.",
      },
      {
        when: "Launch",
        h: "Live Site and Storm Prep",
        p: "The site goes live, and storm pages sit ready for the next severe-weather week.",
      },
    ],
  },
  compare: {
    title: "Owning a Roofing Website vs. Buying Shared Leads",
    lead: "Lead services rent you attention. A site you own keeps working after every storm.",
    otherLabel: "Shared lead service",
    rows: [
      {
        topic: "Who gets the lead",
        other: "The same homeowner is often sold to several roofers at once.",
        zonic: "Every request comes to you alone, straight from your own site.",
      },
      {
        topic: "Storm demand",
        other: "Lead costs tend to climb when every roofer wants storm work.",
        zonic:
          "Your storm pages rank and convert without bidding against rivals.",
      },
      {
        topic: "Your reputation",
        other: "Homeowners meet a lead form, not your company or your reviews.",
        zonic: "Your photos, reviews and warranty greet every visitor first.",
      },
      {
        topic: "Claim and adjuster questions",
        other: "No room to explain inspections, adjusters or claim steps.",
        zonic: "A claim guide answers questions before the first phone call.",
      },
      {
        topic: "Long-term value",
        other: "Stop paying and the requests stop the same day.",
        zonic:
          "Town pages keep ranking and bringing requests month after month.",
      },
      {
        topic: "Data and ownership",
        other:
          "The platform keeps the traffic, the history and the customer list.",
        zonic: "Domain, content and lead history stay in your name.",
      },
    ],
  },
  reviews: {
    title: "Vet Our Roofing Web Design Agency Through 5.0 Google Reviews",
    lead: "Unfiltered feedback from owners of the businesses we build for, all public on Google.",
  },
  pricing: {
    title: "Roofing Website Plans for Steady Growth",
    compareTitle: "Compare What Each Plan Does for a Roofing Site",
    addOnsTitle: "Add-Ons Roofers Ask For Most",
    customTitle: "Running Crews in Several Roofing Markets?",
  },
  faq: {
    title: "Common Questions About Roofing Websites",
    lead: "Roofers ask us about cost, timing, storm pages and protecting search positions.",
    items: [
      {
        q: "How much does a roofing website cost?",
        a: "Roofing sites differ in how many roof types, towns and tools they need, so pricing starts with a free call. After it, you get a single fixed quote that holds until launch. With a qualifying monthly growth plan in place, the roofing website itself costs nothing under our offer.",
      },
      {
        q: "How many weeks does a roofing website build take?",
        a: "Roofing builds run 2–3 weeks end to end. Week one is your mockup review, copy, photos and storm pages come next, and estimate forms, call tracking and redirects get tested last, right before go-live. Storm pages can be switched on from launch day.",
      },
      {
        q: "What pages should a roofing company website have?",
        a: "Start with repair and replacement pages, one page per roofing material, a storm damage and insurance claim guide, financing and warranty pages, a before-and-after gallery and reviews. Then build out town pages for every area you roof in, and link all of them to a short photo estimate form.",
      },
      {
        q: "Can my website capture storm damage and insurance leads?",
        a: "Yes. We build hail and wind pages that explain free inspections and how insurance claims work, then pair them with a photo estimate form. After severe weather you can switch on a sitewide storm banner, and the same pages work as landing pages for storm ads.",
      },
      {
        q: "Will redesigning my roofing website hurt my Google rankings?",
        a: "Only a rushed move does that. We map every current URL, keep or redirect each ranking page one to one and carry over titles that already work. The sitemap is resubmitted at launch, and roofing rankings and lead volume are watched closely through the first weeks.",
      },
      {
        q: "Can you add an instant roof estimate to my site?",
        a: "We build estimate forms that collect roof type, the problem, photos and an address so you can reply with a real number quickly. If you want an instant price range, we can add one using the figures and rules you approve.",
      },
      {
        q: "Do you design websites for siding and gutter work too?",
        a: "Yes. Many roofers also sell siding, gutters or skylights, so we add a page for each of those services and link them from the roofing pages. Siding companies without a roofing crew can get the same build, with pages written around siding searches in their towns.",
      },
      {
        q: "Should a roofer use a website builder or hire a web design agency?",
        a: "A builder template can get a new roofer online, but it rarely ranks across several towns or handles storm surges well. A custom roofing website adds town pages, claim content, tracked estimate forms and the page speed that templates struggle to reach on phones.",
      },
    ],
  },
  consult: {
    title: "Your Free Roofing Homepage Mockup Starts Here",
    lead: [
      "Send us your roof types and coverage area. Our designers return a roofing homepage mockup and a page-by-page plan, free. Rather talk first? ",
      { href: "/contact-us", label: "Call or message our team" },
      ", read ",
      { href: "/about", label: "the Zonic Media story" },
      ", browse ",
      { href: "/services", label: "all of our services" },
      " or see how we revive a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google Business Profile",
      },
      ". Roofing contractors may also like our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home services",
      },
      ".",
    ],
    points: [
      "Free homepage design",
      "Storm and re-roof page plan",
      "Estimate form advice",
      "Live in 2–3 weeks",
    ],
    form: {
      formType: "roofing-website-design",
      badge: "Free roofing homepage mockup",
      title: "Request a Roofing Website Mockup",
      subtitle: "No cost and no pressure.",
      submitText: "Get My Roofing Mockup",
      messageLabel: "Your roofing company and service area",
      messagePlaceholder:
        "Company name, current site (if any), the roof types you install and the towns you cover",
    },
  },
  banner: {
    title: "Turn Storm Searches Into Signed Roofing Jobs",
    lead: "Storm pages, photo estimate forms and a call button that's never out of reach.",
  },
};
