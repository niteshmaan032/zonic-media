/* Flooring Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: flooring website design 155
     impressions (pos 28.4) · flooring contractor website design 93 (31.1)
     · flooring web design 72 (31.5) · flooring company web design 49
     (31.3) · flooring company website design 46 (31.8) · web design for
     flooring installation 44 (25.7) · flooring company website builder
     36 (41.9) · flooring company web development 29 (32.6) · web design
     services for flooring contractors 21 (22.0).
   - Semrush US: flooring website design 210 (KD 13) · flooring web design
     110 (17) · flooring company website 20.
   - Web research (flooring retail feature guides, trade press on room
     visualizers, flooring-site examples): shoppers browse by material
     (hardwood, luxury vinyl plank, tile, laminate, carpet), want galleries
     sorted by floor type, plain comparisons, sample requests, a room
     visualizer where suppliers offer one, a free in-home measure,
     financing and showroom details; refinishing works best as its own
     service. One catch-all services page loses material-specific buyers.
     The "website builder" and "web development" queries are answered by
     the comparison section and an FAQ.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company named, verified numbers only, every live
   content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/flooring-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by floor type",
    business: "Your Flooring Co.",
    domain: "yourflooringco.com",
    nav: ["Hardwood", "Vinyl & Tile", "Gallery", "Showroom"],
    call: "Call the store",
    primary: "Book a free measure",
    secondary: "Shop samples",
    proof: "Trusted for local installs",
    bookTitle: "Book a free in-home measure",
    confirm: "Confirm my measure",
    serviceSubs: [
      "Free in-home measure",
      "Samples brought to you",
      "Certified installers",
    ],
    toast: "Measure booked",
    toastNote: "Tomorrow 1 PM",
    phoneCta: "Measure",
    modes: [
      {
        label: "Hardwood",
        icon: "carpenter",
        badge: "Hardwood · Install & refinish",
        headline: "Real Hardwood, Installed or Brought Back to Life",
        sub: "Solid and engineered installs, plus sanding and refinishing for tired floors.",
        services: [
          "Hardwood installation",
          "Engineered hardwood",
          "Sand and refinish",
        ],
        book: ["Hardwood install", "Refinishing", "Engineered wood"],
        img: {
          src: "/images/free-website/free-flooring/hardwood-flooring.webp",
          position: "50% 55%",
        },
      },
      {
        label: "Vinyl & tile",
        icon: "drop",
        badge: "Waterproof LVP · Tile",
        headline: "Waterproof Floors for Kitchens, Baths and Pets",
        sub: "Luxury vinyl plank, porcelain and ceramic tile, measured and installed in days.",
        services: [
          "Luxury vinyl plank",
          "Porcelain tile",
          "Bathroom tile floors",
        ],
        book: ["Vinyl plank", "Tile floor", "Basement floor"],
        img: {
          src: "/images/free-website/free-flooring/luxury-vinyl.webp",
          position: "50% 50%",
        },
      },
    ],
    legend: [
      "Store call button",
      "Floor-type landing pages",
      "Free measure booking",
      "Mobile booking bar",
    ],
  },
  // Purple and gold for hardwood vs vinyl and tile, then teal and coral.
  tones: tonesFor("flooring-website-design"),
  serviceName: "Flooring Website Design",
  audience: "flooring stores, flooring contractors and installers",
  meta: {
    title: "Flooring Website Design | Flooring Contractor Web Design",
    description:
      "Flooring website design for flooring stores and contractors: material pages, free in-home measure booking and install galleries that turn shoppers into jobs.",
    keywords: [
      "flooring website design",
      "flooring web design",
      "flooring contractor website design",
      "flooring company website design",
      "flooring company web design",
      "web design for flooring installation",
      "web design services for flooring contractors",
      "flooring company web development",
      "flooring company website builder",
      "flooring store website design",
      "flooring company website",
      "flooring installer website",
    ],
  },
  hero: {
    h1Lead: "Flooring Website Design",
    h1Rest: "That Books More Free In-Home Measures",
    icon: "layers",
    lead: [
      "We design flooring websites that sort your work by material, answer hardwood-versus-vinyl questions and let homeowners schedule a free measure from their phone. A ",
      { href: "/services/web-design", label: "custom website" },
      " from us launches in 2–3 weeks, store and town pages included.",
    ],
    cta: "See My Free Flooring Homepage",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/flooring-first-impressions-1.webp",
        position: "center",
        query: "flooring installers near me",
      },
      cardA: {
        icon: "layers",
        title: "Visible for Every Material Search",
        sub: "Hardwood, vinyl, tile and carpet pages",
      },
      photoB: {
        src: "/images/home-improvement-web/flooring-hero.webp",
        position: "center 30%",
        query: "hardwood floor installers",
      },
      cardB: {
        icon: "calendar",
        title: "Measures Booked Around the Clock",
        sub: "Homeowners schedule while browsing samples",
      },
    },
  },
  showcase: {
    title: "Flip Through a Flooring Company Website by Floor Type",
    lead: "Switch from hardwood to vinyl and tile to see the offer, booking options and mobile view follow the shopper.",
  },
  services: {
    title: "Flooring Company Web Design,\nFrom Showroom to Install",
    lead: "The pages, tools and upkeep a flooring business needs, from first draft to monthly updates.",
    cta: "Map Out My Flooring Site",
    items: [
      {
        icon: "monitor",
        title: "Custom Flooring Company Websites",
        desc: "Designed from scratch around your materials, showroom and install crews, with copy written for people comparing floors.",
        points: [
          "Built for your store",
          "Material-first menus",
          "Copy written in-house",
        ],
        links: [
          { href: "/services/web-design", label: "How we design websites" },
        ],
      },
      {
        icon: "layers",
        title: "Material Pages That Rank",
        desc: "Hardwood, luxury vinyl plank, tile, laminate and carpet each get a dedicated page with photos, pros and cons and a measure button.",
        points: [
          "Hardwood and LVP pages",
          "Tile and carpet pages",
          "Ad landing versions",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for flooring" },
        ],
      },
      {
        icon: "calendar",
        title: "Free Measure and Sample Booking",
        desc: "Homeowners book an in-home measure or a shop-at-home sample visit, and the request drops into your schedule with room details.",
        points: [
          "In-home measure slots",
          "Sample visit requests",
          "Calendar sync",
        ],
        links: [],
      },
      {
        icon: "repeat",
        title: "Refinishing and Repair Pages",
        desc: "Sanding, refinishing and board repair get their own pages, catching homeowners who want to save the floors they already own.",
        points: ["Refinishing page", "Repair page", "Before and after shots"],
        links: [
          {
            href: "/services/industry/local-seo-for-flooring-companies",
            label: "Local SEO for flooring companies",
          },
        ],
      },
      {
        icon: "home",
        title: "Room Projects With Other Trades",
        desc: "If you lay bathroom floors or work alongside painters, linked pages show the full room makeover, not just the floor.",
        points: [
          "Bathroom floor pages",
          "Room makeover gallery",
          "Partner trades",
        ],
        links: [
          {
            href: "/services/bathroom-remodeling-website-design",
            label: "Bathroom remodeling websites",
          },
          {
            href: "/services/painting-contractor-website-design",
            label: "Painting contractor websites",
          },
        ],
      },
      {
        icon: "tool",
        title: "Hosting, Care and New Installs",
        desc: "We host, back up and update the site, and new install photos join the gallery as jobs wrap up.",
        points: ["Managed hosting", "Gallery updates", "Edits on request"],
        links: [
          {
            href: "/flooring-website-design-agency-us/offer",
            label: "Free flooring website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Flooring Website Features Shoppers Look For",
    lead: "What helps a homeowner choose a floor, and then choose you to install it.",
    items: [
      {
        icon: "layers",
        title: "Shop-by-Material Navigation",
        text: "Menus built around hardwood, vinyl, tile, laminate and carpet.",
      },
      {
        icon: "calendar",
        title: "Free Measure Booking",
        text: "Shoppers reserve an in-home measure without calling the store.",
      },
      {
        icon: "camera",
        title: "Room Photos by Floor Type",
        text: "Galleries sorted by material, so shoppers see real installs.",
      },
      {
        icon: "check",
        title: "Plain Material Comparisons",
        text: "Hardwood vs. vinyl and tile vs. LVP, explained without jargon.",
      },
      {
        icon: "home",
        title: "Showroom Hours and Directions",
        text: "Store hours, a map and parking details that are easy to find.",
      },
      {
        icon: "drop",
        title: "Waterproof and Pet-Friendly Pages",
        text: "Pages for kitchens, baths, basements and homes with pets.",
      },
      {
        icon: "phone",
        title: "Call and Book Bar on Phones",
        text: "Two buttons that follow the shopper down every page.",
      },
      {
        icon: "search",
        title: "Store, Service and Review Markup",
        text: "Structured data so Google can show your hours, services and ratings.",
      },
    ],
  },
  growth: {
    title: "Flooring Web Design That Keeps the Install Calendar Full",
    lead: "Rank for floor searches, book more measures and get cited in AI answers.",
    rank: {
      title: "Rank for Every Floor Type in Your Area",
      body: [
        "Shoppers search by material and town, from LVP installation to hardwood refinishing, so each one gets a page and a weekly rank check. Want the map results too? Our ",
        {
          href: "/services/industry/local-seo-for-flooring-companies",
          label: "flooring local SEO",
        },
        " works with ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Google Business Profile management",
        },
        " to put your store there.",
      ],
      points: [
        "Material pages",
        "Town pages",
        "Weekly rank reports",
        "Store schema",
      ],
      cta: "List My Missing Floor Pages",
      keywords: [
        ["flooring installation + your city", 20, 3],
        ["lvp flooring installers near me", 27, 4],
        ["hardwood floor refinishing", 33, 5],
        ["flooring store near me", 16, 2],
      ],
    },
    convert: {
      title: "Turn Sample Browsers Into Booked Measures",
      body: [
        "A free measure button on every page, a quick booking form and a sticky call bar on phones turn more visits into appointments. Bookings carry the page and search that produced them, so ",
        { href: "/services/google-ads", label: "flooring ad campaigns" },
        " can push more shoppers toward the pages that book best.",
      ],
      points: [
        "Measure booking",
        "Sample requests",
        "Call tracking",
        "Phone-first forms",
      ],
      cta: "Try the Measure Booking Flow",
      url: "yourflooringco.com",
      headline: "Free Measure, Right in Your Home",
      services: ["Hardwood", "Vinyl plank", "Tile", "Refinishing"],
    },
    ai: {
      title: "Show Up When Shoppers Ask AI About Floors",
      body: [
        "Durability, water resistance and care guides in plain language, plus product schema, give AI assistants and Google's AI Overviews something to quote when homeowners ask for flooring advice. Those pages anchor our ",
        { href: "/services/ai-seo-services", label: "AI SEO work" },
        " for flooring companies.",
      ],
      points: [
        "Answer-first guides",
        "Product schema",
        "Gallery linking",
        "AI mention tracking",
      ],
      cta: "Am I in AI Answers?",
      query: "who installs waterproof vinyl plank flooring near me",
      intro: "For vinyl plank installation in your area,",
      bullets: [
        "Clear hardwood vs. vinyl guides",
        "Free in-home measures",
        "Recent installer reviews",
      ],
    },
  },
  sitemap: {
    title: "Every Floor Type Gets Its Own Page on Your Site",
    lead: "Each page meets a floor search head-on, so shoppers reach you by many routes, not just the homepage.",
    home: "Your Flooring Co. homepage",
    groups: [
      {
        name: "Hardwood",
        icon: "carpenter",
        pages: [
          "Hardwood installation",
          "Engineered hardwood",
          "Sanding and refinishing",
        ],
      },
      {
        name: "Vinyl, Tile and Carpet",
        icon: "layers",
        pages: ["Luxury vinyl plank", "Tile flooring", "Carpet installation"],
      },
      {
        name: "Store and Booking",
        icon: "calendar",
        pages: ["Free in-home measure", "Showroom visit", "Financing options"],
      },
      {
        name: "Gallery and Areas",
        icon: "pin",
        pages: ["Installs by material", "Town pages", "County page"],
      },
    ],
  },
  results: {
    title: "The Road From Launch to a Busier Install Calendar",
    lead: "Growth compounds as pages index, galleries fill and measure booking runs day and night.",
    cta: "Sketch My Launch Plan",
    milestones: [
      {
        when: "Launch week",
        title: "Measure Bookings Start Tracking",
        text: "Online measure requests and calls are tied to their source from day one.",
      },
      {
        when: "Month 1",
        title: "Material Pages Indexed",
        text: "Your hardwood, vinyl and tile pages get crawled and begin appearing in results.",
      },
      {
        when: "Months 2–3",
        title: "Store Searches Improve",
        text: "Town pages and new reviews move closer to page one for flooring searches.",
      },
      {
        when: "Moving season",
        title: "A Packed Measure Schedule",
        text: "New homeowners who want floors done before move-in day book straight online.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Measures Booked Without Calls",
        text: "Shoppers schedule an in-home measure from any page.",
      },
      {
        icon: "layers",
        title: "More Material-Specific Leads",
        text: "Hardwood, vinyl and tile pages each pull their own searches.",
      },
      {
        icon: "repeat",
        title: "Refinishing Work Year-Round",
        text: "Repair and refinishing pages add steady, smaller jobs.",
      },
      {
        icon: "star",
        title: "A Store Shoppers Trust",
        text: "Real installs, reviews and clear answers win the comparison.",
      },
    ],
    band: [
      {
        icon: "calendar",
        value: "In-Home Measures",
        label: "Measurement visits booked online",
      },
      {
        icon: "layers",
        value: "Confident Material Picks",
        label: "Hardwood, vinyl and tile pages that answer questions",
      },
      {
        icon: "pin",
        value: "More Showroom Traffic",
        label: "Directions and hours that bring buyers in",
      },
      {
        icon: "camera",
        value: "Rooms That Wow",
        label: "Photos that make every floor look its best",
      },
    ],
  },
  process: {
    title: "Flooring Web Design on a 2–3 Week Schedule",
    lead: "We agree the scope and launch day up front, and your first mockup costs nothing.",
    items: [
      {
        when: "Week 1",
        h: "Store Tour and Mockup",
        p: "We walk through your materials, showroom, crews and booking flow, and you get a sample homepage to review within days.",
      },
      {
        when: "Weeks 1–2",
        h: "Material Pages and Gallery",
        p: "Pages are written for each floor type, and your install photos are sorted by material.",
      },
      {
        when: "Weeks 2–3",
        h: "Booking, Redirects and Markup",
        p: "We hook up measure booking and call tracking, then add redirects and store schema.",
      },
      {
        when: "Launch",
        h: "Open the Doors Online",
        p: "The site goes live, bookings are tracked and new installs join the gallery.",
      },
    ],
  },
  compare: {
    title: "A Flooring Company Website Builder vs. Custom Web Development",
    lead: "What a drag-and-drop builder misses, and what custom flooring web development adds.",
    otherLabel: "Website builder template",
    rows: [
      {
        topic: "Navigation",
        other: "Generic menus that bury your floor types.",
        zonic: "Shop-by-material menus for hardwood, vinyl, tile and carpet.",
      },
      {
        topic: "Booking",
        other: "A contact form with no time slots.",
        zonic: "Free in-home measure booking with live time slots.",
      },
      {
        topic: "Gallery",
        other: "Unsorted photos with no captions.",
        zonic: "Installs sorted by material and room, with short write-ups.",
      },
      {
        topic: "Nearby shoppers",
        other: "One page trying to rank everywhere.",
        zonic: "Town and store pages that rank for nearby floor searches.",
      },
      {
        topic: "Speed",
        other: "Heavy themes and oversized images.",
        zonic: "Compressed galleries and lean pages built for phone speed.",
      },
      {
        topic: "Site ownership",
        other: "Locked to the builder's plans and hosting.",
        zonic: "Your domain and content stay yours, with hosting handled.",
      },
    ],
  },
  reviews: {
    title: "Business Owners Gave Us 5.0 Stars on Google",
    lead: "Honest reviews from business owners, shown live from our Google profile.",
  },
  pricing: {
    title: "Keep Your Flooring Site Growing Each Month",
    compareTitle: "Which Plan Fits Your Flooring Store?",
    addOnsTitle: "Extras for Showrooms and Install Crews",
    customTitle: "More Than One Flooring Location?",
  },
  faq: {
    title: "Answers for Flooring Stores Planning a New Site",
    lead: "Cost, timing, measure booking and keeping your current rankings.",
    items: [
      {
        q: "How much does a flooring website cost?",
        a: "You'll get one fixed quote after a short, free call about your store, materials and service area, and it won't change once work starts. Choose a qualifying growth plan with monthly billing, and the flooring site itself costs nothing under our free website offer.",
      },
      {
        q: "When will my new flooring website be ready?",
        a: "Expect 2–3 weeks. You review a homepage mockup in week one and the material pages and gallery in week two; then we test measure booking, call tracking and redirects before switching the site on. Your launch date is fixed during the first call.",
      },
      {
        q: "What should a flooring company website include?",
        a: "Pages for each material you sell and install, a gallery sorted by floor type, free measure booking, showroom hours and directions, refinishing and repair pages if you offer them, financing details, reviews, town pages and fast, phone-friendly pages with local schema.",
      },
      {
        q: "Can customers book a free in-home measure online?",
        a: "Yes. Shoppers pick the rooms, the floor type and a time slot, and the request goes straight into your schedule or CRM with their notes. They get an instant confirmation, and your team arrives knowing what to bring, from sample boards to measuring tools.",
      },
      {
        q: "Should I use a flooring company website builder or a custom site?",
        a: "A builder template is quick to start but tends to bury floor types, slow down with big galleries and rank poorly for local searches. Custom web development gives you material pages, measure booking and the speed a photo-heavy flooring site needs.",
      },
      {
        q: "Will a website redesign affect my flooring store's rankings?",
        a: "Handled properly, no. We record which flooring pages earn search visits today, rebuild them on the new site with the same or redirected URLs and notify Google of the change. Rankings and measure bookings are checked weekly after go-live.",
      },
      {
        q: "Do flooring websites need separate pages for hardwood, vinyl and tile?",
        a: "Yes. Shoppers search by material, so one services page rarely ranks for all of them. A page per floor type, with real installs, honest pros and cons and a measure button, ranks better and makes a natural target for your ads.",
      },
      {
        q: "Can you show flooring samples or a room visualizer on the site?",
        a: "We can feature your sample lines with photos and details, add a shop-at-home sample request and link a room visualizer if your suppliers provide one. Pages stay fast because images are compressed and load only when shoppers scroll to them.",
      },
      {
        q: "What happens after my flooring website launches?",
        a: "Our team handles hosting, security and backups, adds fresh installs to the gallery and tracks every call and measure booking. Need a change? Ask and it's done. Local SEO and Google Ads are common next steps for stores that want more shoppers.",
      },
    ],
  },
  consult: {
    title: "Preview Your New Flooring Homepage at No Cost",
    lead: [
      "Tell us which floors you carry, which ones you install and where your crews travel. A designer will turn that into a sample homepage and page map for you, free of charge. Have questions first? ",
      { href: "/contact-us", label: "Talk with us" },
      ", see ",
      { href: "/about", label: "the people behind Zonic" },
      ", scan ",
      { href: "/services", label: "the services we provide" },
      " or learn about ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Google Business Profile reinstatement",
      },
      ". Installers can also check our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO plans for home services",
      },
      ".",
    ],
    points: [
      "Free flooring homepage mockup",
      "Material page plan",
      "Measure booking advice",
      "Live within 2–3 weeks",
    ],
    form: {
      formType: "flooring-website-design",
      badge: "Free flooring site mockup",
      title: "Book a Free Flooring Homepage Mockup",
      subtitle: "Free to request, no contract required.",
      submitText: "Send My Flooring Mockup Request",
      messageLabel: "Your store, website and floor types",
      messagePlaceholder:
        "Store or company name, current site (if any), the floors you sell or install and the towns you serve",
    },
  },
  banner: {
    title: "Put Your Floors in Front of Every Local Shopper",
    lead: "Material pages, free measure booking and an install gallery sorted the way shoppers search.",
  },
};
