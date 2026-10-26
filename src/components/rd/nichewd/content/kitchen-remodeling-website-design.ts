/* Kitchen Remodeling Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: bot-like long tail only, so
     targets come from Semrush.
   - Semrush US: remodeling websites 170 (KD 16, owned by this page; the
     bathroom page takes "remodeling website design") · kitchen website
     design 20 · kitchen remodeling website design 0.
   - Web research (2026 kitchen trend studies, remodeler and showroom
     booking pages): homeowners plan a kitchen for months and expect a
     far shorter build than the real timeline, so a clear process and
     timeline page matters. They browse finished kitchens sorted by style
     and material (white oak and warmer palettes lead; most remodels add
     or update an island), compare reviews, and book a design
     consultation in a showroom or at home as the first step. Many choose
     strategic upgrades (cabinets, counters) over a full gut. Angle
     chosen: design-consult booking and style-sorted portfolios for a long
     planning cycle (bathroom gets the photo estimate form).
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company named, verified numbers only, every live
   content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/kitchen-remodeling-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example site by kitchen project",
    business: "Your Kitchen Co.",
    domain: "yourkitchenco.com",
    nav: ["Kitchens", "Cabinets", "Portfolio", "Process"],
    call: "Call the studio",
    primary: "Book a consult",
    secondary: "View kitchens",
    proof: "Loved by local homeowners",
    bookTitle: "Book a design consult",
    confirm: "Reserve my visit",
    serviceSubs: [
      "3D layout preview",
      "Showroom or in-home",
      "Material samples",
    ],
    toast: "Consult reserved",
    toastNote: "Thu 10 AM",
    phoneCta: "Book",
    modes: [
      {
        label: "Full kitchen",
        icon: "kitchen",
        badge: "Full remodel · Design-build",
        headline: "Plan the Kitchen You'll Cook in for Decades",
        sub: "New layouts, islands, lighting and finishes, designed and built by one team.",
        services: [
          "Full kitchen remodel",
          "Island and layout",
          "Lighting and finishes",
        ],
        book: ["Full remodel", "New island", "Open layout"],
        img: {
          src: "/images/free-website/free-kitchen-remodeling/full-kitchen-remodels.webp",
          position: "50% 50%",
        },
      },
      {
        label: "Cabinet upgrades",
        icon: "layers",
        badge: "Refacing · New counters",
        headline: "New Cabinets and Counters Without a Full Gut",
        sub: "Refacing, new doors and quartz or stone tops, finished with little downtime.",
        services: [
          "Cabinet refacing",
          "New cabinet install",
          "Quartz countertops",
        ],
        book: ["Refacing", "New cabinets", "Countertops"],
        img: {
          src: "/images/free-website/free-kitchen-remodeling/custom-cabinetry.webp",
          position: "50% 45%",
        },
      },
    ],
    legend: [
      "Studio call button",
      "Project-type landing pages",
      "Design consult booking",
      "Phone booking bar",
    ],
  },
  // Emerald and coral for the two kitchen projects, then navy and gold.
  tones: tonesFor("kitchen-remodeling-website-design"),
  serviceName: "Kitchen Remodeling Website Design",
  audience: "kitchen remodelers and design-build firms",
  meta: {
    title: "Kitchen Remodeling Website Design | Remodeling Websites",
    description:
      "Kitchen remodeling website design for remodelers and design-build firms: style-sorted portfolios, online design consult booking and cabinet and counter pages.",
    keywords: [
      "kitchen remodeling website design",
      "remodeling websites",
      "kitchen website design",
      "kitchen remodeler websites",
      "kitchen remodeling web design",
      "website design for kitchen remodelers",
      "kitchen remodeling company website",
      "design build website design",
      "cabinet company website design",
      "kitchen renovation website",
      "remodeling contractor websites",
    ],
  },
  hero: {
    h1Lead: "Kitchen Remodeling Website Design",
    h1Rest: "That Earns Design Consults",
    icon: "kitchen",
    lead: [
      "Homeowners plan a kitchen for months, so we build remodeling websites that keep them browsing your finished work until they book a design consult. Your ",
      { href: "/services/web-design", label: "custom website" },
      " typically launches in 2–3 weeks and includes style galleries and a page per kitchen service.",
    ],
    cta: "Design My Free Kitchen Homepage",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/kitchen-remodeling-hero.webp",
        position: "center 30%",
        query: "kitchen remodeling website design",
      },
      cardA: {
        icon: "calendar",
        title: "Design Consults on the Calendar",
        sub: "Online booking for studio and home visits",
      },
      photoB: {
        src: "/images/home-improvement-web/kitchen-remodeling-first-impressions-1.webp",
        position: "62% center",
        query: "kitchen remodelers near me",
      },
      cardB: {
        icon: "star",
        title: "Chosen Before the First Meeting",
        sub: "Style galleries that earn trust early",
      },
    },
  },
  showcase: {
    title: "Walk Through an Example Kitchen Remodeler Website",
    lead: "Switch between a full remodel and a cabinet upgrade to see the headline, offers and booking slots adapt.",
  },
  services: {
    title: "What Our Kitchen Remodeler\nWebsite Service Covers",
    lead: "Everything a kitchen company needs to look as good online as its finished work.",
    cta: "Start My Kitchen Website",
    items: [
      {
        icon: "monitor",
        title: "Design-Led Kitchen Remodeling Sites",
        desc: "Layouts with room for big photography, clear calls to book and copy that speaks to homeowners planning a major project.",
        points: [
          "Photo-first layouts",
          "Written for planners",
          "Built to your brand",
        ],
        links: [
          { href: "/services/web-design", label: "Explore website design" },
        ],
      },
      {
        icon: "camera",
        title: "Style-Sorted Kitchen Portfolios",
        desc: "Finished kitchens filed by style, layout and material, so a homeowner who loves white oak or a big island finds it fast.",
        points: ["Filter by style", "Project write-ups", "Before and after"],
        links: [
          {
            href: "/services/industry/local-seo-for-kitchen-remodelers",
            label: "Kitchen remodeler SEO",
          },
        ],
      },
      {
        icon: "calendar",
        title: "Design Consultation Booking",
        desc: "Homeowners pick a studio visit or in-home meeting and a time slot, and the booking lands in your calendar with project notes.",
        points: ["Studio or in-home", "Calendar sync", "Reminder emails"],
        links: [],
      },
      {
        icon: "layers",
        title: "Cabinet and Countertop Pages",
        desc: "Separate pages for refacing, new cabinetry and stone or quartz tops catch the many buyers who aren't ready for a full gut.",
        points: ["Refacing page", "Countertop page", "Ad landing versions"],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for kitchen pros",
          },
        ],
      },
      {
        icon: "home",
        title: "Whole-Home Remodeling Links",
        desc: "If you also renovate bathrooms or run full projects as a general contractor, we connect those services so the site sells every room.",
        points: [
          "Bath service pages",
          "Additions and more",
          "One shared portfolio",
        ],
        links: [
          {
            href: "/services/bathroom-remodeling-website-design",
            label: "Bathroom remodeling sites",
          },
          {
            href: "/services/general-contractor-website-design",
            label: "General contractor sites",
          },
        ],
      },
      {
        icon: "tool",
        title: "Ongoing Care and Portfolio Updates",
        desc: "Hosting, backups, security and new kitchens added to the portfolio after each install, all done for you.",
        points: ["Managed hosting", "Portfolio additions", "Same-week edits"],
        links: [
          {
            href: "/kitchen-remodeling-website-design-agency-us/offer",
            label: "Free kitchen remodeler website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Kitchen Website Design Details That Win the Consult",
    lead: "The building blocks that keep a long kitchen search pointed at your company.",
    items: [
      {
        icon: "camera",
        title: "Large, Fast-Loading Project Photos",
        text: "Full-width images that stay sharp on desktops and quick on phones.",
      },
      {
        icon: "calendar",
        title: "Consult Booking Within One Click",
        text: "A clear button to reserve a studio or in-home design visit.",
      },
      {
        icon: "clipboard",
        title: "A Step-by-Step Remodel Timeline",
        text: "Sets honest expectations for the design, ordering and build phases.",
      },
      {
        icon: "layers",
        title: "Material and Finish Guides",
        text: "Plain comparisons of cabinet styles, counters and backsplash options.",
      },
      {
        icon: "star",
        title: "Reviews Tied to Real Projects",
        text: "Each testimonial sits beside the kitchen it describes.",
      },
      {
        icon: "file",
        title: "A Kitchen Planning Guide Download",
        text: "A free guide that collects emails from homeowners still deciding.",
      },
      {
        icon: "pin",
        title: "Neighborhood Project Pages",
        text: "Local kitchens, photos and reviews for each area on your list.",
      },
      {
        icon: "search",
        title: "Structured Data for Kitchens",
        text: "Schema that labels services, projects and FAQs for Google and AI tools.",
      },
    ],
  },
  growth: {
    title: "Kitchen Remodeling Web Design for the Long Planning Phase",
    lead: "Get found early, earn the consult and stay in the answers AI tools give planners.",
    rank: {
      title: "Reach Homeowners Early in Their Kitchen Search",
      body: [
        "Planners search for layouts, cabinets and countertops months before they hire, so we write pages for those searches and track each term over time. To appear on the map as well, pair the site with ",
        {
          href: "/services/industry/local-seo-for-kitchen-remodelers",
          label: "kitchen remodeler local SEO",
        },
        ", together with ",
        {
          href: "/local-seo-google-business-optimization",
          label: "Business Profile management",
        },
        ".",
      ],
      points: [
        "Style and layout pages",
        "Neighborhood pages",
        "Term tracking",
        "Project schema",
      ],
      cta: "Plan My Kitchen Pages",
      keywords: [
        ["kitchen remodeling + your city", 23, 3],
        ["cabinet refacing near me", 29, 4],
        ["quartz countertop installers", 26, 5],
        ["kitchen remodelers near me", 18, 2],
      ],
    },
    convert: {
      title: "Turn Inspiration Visits Into Booked Consults",
      body: [
        "A consult button on every page, a short booking flow and a free planning guide turn browsing into scheduled meetings. You'll see which page and search produced every booking, and ",
        { href: "/services/google-ads", label: "paid search for remodelers" },
        " can grow the visits that book.",
      ],
      points: [
        "Consult booking",
        "Planning guide signup",
        "Calendar sync",
        "Lead source tags",
      ],
      cta: "Preview My Consult Booking",
      url: "yourkitchenco.com",
      headline: "Start Your Kitchen With a Design Consult",
      services: ["Full remodel", "Cabinets", "Countertops", "Island"],
    },
    ai: {
      title: "Get Recommended When Planners Ask AI",
      body: [
        "AI tools pull from pages that answer clearly. Timeline, layout and material guides with clean schema make your company the one chat assistants and AI Overviews suggest when someone asks who to hire. That groundwork feeds our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Answer-led pages",
        "FAQ schema",
        "Portfolio linking",
        "Citation tracking",
      ],
      cta: "See If AI Recommends Me",
      query: "best kitchen remodeler for a white oak kitchen near me",
      intro: "For custom kitchen remodels nearby,",
      bullets: [
        "Style-sorted kitchen portfolio",
        "Clear design-build process",
        "Detailed local reviews",
      ],
    },
  },
  sitemap: {
    title: "Inside a Kitchen Remodeling Website: The Page Plan",
    lead: "Each page answers a question kitchen planners search, so the site draws visits from many angles.",
    home: "Your Kitchen Co. homepage",
    groups: [
      {
        name: "Kitchen Remodels",
        icon: "kitchen",
        pages: [
          "Full kitchen remodel",
          "Open-concept layouts",
          "Kitchen islands",
        ],
      },
      {
        name: "Cabinets and Counters",
        icon: "layers",
        pages: [
          "Cabinet refacing",
          "Custom cabinetry",
          "Quartz and stone tops",
        ],
      },
      {
        name: "Design Process",
        icon: "clipboard",
        pages: ["Design consult", "Remodel timeline", "Planning guide"],
      },
      {
        name: "Portfolio",
        icon: "camera",
        pages: [
          "Kitchens by style",
          "Before and after",
          "Neighborhood projects",
        ],
      },
    ],
  },
  results: {
    title: "The First Months With a New Kitchen Remodeling Site",
    lead: "Momentum grows as pages get indexed, the portfolio fills out and consult booking runs nonstop.",
    cta: "Map Out My Kitchen Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Consult Bookings Go Live",
        text: "Online booking and lead tracking start working the day the site does.",
      },
      {
        when: "Month 1",
        title: "Portfolio Pages Get Crawled",
        text: "Google finds your kitchen, cabinet and neighborhood pages and begins ranking them.",
      },
      {
        when: "Months 2–3",
        title: "Planning Searches Find You",
        text: "Style and layout pages start appearing for searches homeowners make while they plan.",
      },
      {
        when: "New-year planning",
        title: "A Fuller Design Calendar",
        text: "As homeowners set their remodel plans for the year, consult slots fill from your own site.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Consults Booked Online",
        text: "Planners reserve design visits without a round of phone tag.",
      },
      {
        icon: "camera",
        title: "A Portfolio That Sells",
        text: "Style-sorted kitchens help homeowners picture their own.",
      },
      {
        icon: "layers",
        title: "Smaller Jobs That Grow",
        text: "Cabinet and counter pages bring buyers who often expand the project.",
      },
      {
        icon: "thumbs",
        title: "Warmer First Meetings",
        text: "Homeowners arrive already knowing your process and your work.",
      },
    ],
    band: [
      {
        icon: "calendar",
        value: "Design Consults Booked",
        label: "Calendars that fill your consultation slots",
      },
      {
        icon: "trend",
        value: "Full-Kitchen Projects",
        label: "Pages that attract homeowners ready for a full remodel",
      },
      {
        icon: "book",
        value: "Inspiring Portfolios",
        label: "Project stories that show your craftsmanship",
      },
      {
        icon: "clock",
        value: "Smooth Browsing",
        label: "Fast pages even with large photo galleries",
      },
    ],
  },
  process: {
    title: "A Kitchen Remodeler Website Built in 2–3 Weeks",
    lead: "One call to plan, a mockup you can react to and a launch date you can count on.",
    items: [
      {
        when: "Week 1",
        h: "Style Brief and Mockup",
        p: "We study your kitchen services, design steps and favorite projects; your homepage mockup arrives by week's end.",
      },
      {
        when: "Weeks 1–2",
        h: "Portfolio and Copy",
        p: "Kitchens are grouped by style, and each service page is written for homeowners still planning.",
      },
      {
        when: "Weeks 2–3",
        h: "Booking and Search Setup",
        p: "We connect consult booking to your calendar and add tracking, redirects and schema.",
      },
      {
        when: "Launch",
        h: "Launch, Then Keep Adding Kitchens",
        p: "The site launches, and every new kitchen you finish is added as a project page.",
      },
    ],
  },
  compare: {
    title: "Why Kitchen Remodelers Outgrow Generic Agency Sites",
    lead: "A side-by-side look at what kitchen buyers see on each kind of site.",
    otherLabel: "Generic agency site",
    rows: [
      {
        topic: "Portfolio",
        other: "One long gallery with no sorting or project details.",
        zonic:
          "Kitchens filed by style and material, each with its own write-up.",
      },
      {
        topic: "Booking a meeting",
        other: "A basic form and a vague promise of a callback.",
        zonic: "A design consult booked online, in the studio or at home.",
      },
      {
        topic: "Long planning cycles",
        other: "Nothing for homeowners who aren't ready yet.",
        zonic: "A planning guide and timeline page that keep them coming back.",
      },
      {
        topic: "Partial projects",
        other: "Cabinets and counters lumped into one services list.",
        zonic: "Refacing, cabinet and countertop pages that rank on their own.",
      },
      {
        topic: "Reaching nearby buyers",
        other: "A footer list of city names.",
        zonic: "Neighborhood pages with real kitchens and nearby reviews.",
      },
      {
        topic: "After launch",
        other: "Extra fees for every new photo or edit.",
        zonic:
          "We keep it hosted, secure and current with your newest kitchens.",
      },
    ],
  },
  reviews: {
    title: "Read What Owners Wrote in Our 5.0 Google Reviews",
    lead: "Owners we've worked with left these on our Google profile, unedited.",
  },
  pricing: {
    title: "Monthly Plans for Your New Kitchen Website",
    compareTitle: "Kitchen Remodeler Plan Features Side by Side",
    addOnsTitle: "Optional Pages for Cabinets and Countertops",
    customTitle: "Several Showrooms or Design Studios?",
  },
  faq: {
    title: "Before You Rebuild Your Kitchen Company's Website",
    lead: "Cost, launch time, booking tools and portfolio tips for kitchen companies.",
    items: [
      {
        q: "What does a kitchen remodeling website cost?",
        a: "After a free planning call about your services, showroom and booking needs, we put one fixed number in writing, and it stays put until launch. If you also start a qualifying growth plan, billed each month, our free website offer covers the build itself.",
      },
      {
        q: "How long until my kitchen remodeler website is live?",
        a: "Most launch in 2–3 weeks. Week one is your homepage mockup; week two covers the portfolio and service copy; consult booking, tracking and redirects are tested before launch. Your remodels take months; your website shouldn't. A clear launch date is set on day one.",
      },
      {
        q: "What pages does a kitchen remodeling website need?",
        a: "A homepage that leads with finished kitchens, a portfolio sorted by style, pages for full remodels, cabinets and countertops, a design and build process page with a realistic timeline, consult booking, reviews, neighborhood pages and a planning guide for homeowners not ready to book.",
      },
      {
        q: "Can clients book a design consultation online?",
        a: "Yes. Homeowners choose a studio visit or in-home consultation, pick a time and add notes about their kitchen. The booking syncs with your calendar, sends reminders and lands in your CRM, so nobody waits on a callback to get started.",
      },
      {
        q: "How should a kitchen portfolio be organized?",
        a: "By what homeowners search for: style, layout and material. Give every finished kitchen a page of its own showing the starting point, the scope, the materials and a short story; that helps it rank in image search and gives planners ideas to bring to the consult.",
      },
      {
        q: "Will a new website cost me my current kitchen rankings?",
        a: "It shouldn't. Your existing addresses are mapped first, high-traffic pages keep their content, and 301 redirects cover anything renamed or merged. After the switch, we monitor search positions and consult bookings for several weeks so any dip is caught and fixed early.",
      },
      {
        q: "Should cabinet refacing and countertops have separate pages?",
        a: "Yes. Many homeowners search for a cabinet or countertop upgrade instead of a full remodel. Separate pages rank for those searches, work as ad destinations and often bring in smaller jobs that grow into a complete kitchen once the homeowner trusts your team.",
      },
      {
        q: "Do you write the copy and handle the photos?",
        a: "Yes. Our writers create every page around real kitchen searches, and we prepare your project photos for speed and image search. You approve each page before launch, and we can plan a shot list for upcoming installs so the portfolio keeps growing.",
      },
      {
        q: "What support do I get once the kitchen site launches?",
        a: "Hosting, security updates, backups, portfolio additions and edits on request are all covered. We also track consult bookings by source and share what's working. Plenty of kitchen firms layer on Google Ads or local SEO afterward to bring in more planners from nearby neighborhoods.",
      },
    ],
  },
  consult: {
    title: "Your Kitchen Homepage, Mocked Up Free",
    lead: [
      "Share a few finished kitchens and the neighborhoods you work in. We'll return a sample homepage and a list of the pages your site should have, at no charge. Want a conversation first? ",
      { href: "/contact-us", label: "Get in touch" },
      ", learn ",
      { href: "/about", label: "about Zonic Media" },
      ", browse ",
      { href: "/services", label: "everything else we do" },
      " or read about ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Business Profile reinstatement",
      },
      ". For the search side, see ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home service businesses",
      },
      ".",
    ],
    points: [
      "Free kitchen homepage mockup",
      "Portfolio and page plan",
      "Consult booking setup",
      "Launch in 2–3 weeks",
    ],
    form: {
      formType: "kitchen-remodeling-website-design",
      badge: "Free kitchen website mockup",
      title: "Request a Kitchen Homepage Mockup",
      subtitle: "Free and with no strings attached.",
      submitText: "Send My Kitchen Mockup Request",
      messageLabel: "Your company, website and kitchen services",
      messagePlaceholder:
        "Company name, current website (if any), kitchen services you offer and the neighborhoods you work in",
    },
  },
  banner: {
    title: "Win the Kitchen Before the First Consult",
    lead: "A style-sorted portfolio, online design booking and pages for every kitchen upgrade.",
  },
};
