/* Solar Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: solar marketing agency 35
     impressions (pos 5.1, so "solar marketing" stays in the copy) · solar
     website development 10 (49.5) · web design for solar companies 6
     (25.3) · website design agency for solar companies 5 (23.4) · solar
     installer website design companies 4 (20.8) · solar website design
     agency 3 (21.3).
   - Semrush US: solar website design 170 (KD 15) · solar web design 140
     (36) · solar websites 170 (67, high; secondary) · solar company
     website design 0.
   - Web research (solar installer site guides, 2026): buyers collect
     several quotes and judge installers by the website first; a quote
     form with an optional power-bill upload; address-based roof checks
     followed by a consultation booking; battery storage and backup power
     content for outage-worried buyers; incentive and net-metering pages
     kept current (the federal residential credit changed for 2026, and
     state and utility programs vary), honest savings copy over hype;
     lease, loan and cash options explained.
   Rules kept: build time 2–3 weeks (owner), no prices or savings figures
   except the locked pricing section, no company named, verified numbers
   only, every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/solar-website-design",
  stage: {
    widget: "quote",
    switchLabel: "Preview the example site by energy product",
    business: "Your Solar Co.",
    domain: "yoursolarco.com",
    nav: ["Solar", "Batteries", "Savings", "Reviews"],
    call: "Call an advisor",
    primary: "Check my roof",
    secondary: "How savings work",
    proof: "Recommended by local homeowners",
    bookTitle: "Free solar assessment",
    confirm: "Book my consult",
    serviceSubs: ["Free roof check", "Custom design", "Permits handled"],
    toast: "Consult booked",
    toastNote: "Video call Thu",
    phoneCta: "Savings",
    modes: [
      {
        label: "Solar panels",
        icon: "solar",
        badge: "Rooftop solar · Free design",
        headline: "Tired of Rising Power Bills? Go Solar.",
        sub: "Custom rooftop systems, with permits and installation handled by one local crew.",
        services: ["Rooftop solar", "Ground mounts", "Panel cleaning"],
        book: ["Rooftop system", "Upload my bill", "Ground mount"],
        img: {
          src: "/images/free-website/free-solar/residential-solar.webp",
          position: "50% 45%",
        },
      },
      {
        label: "Battery storage",
        icon: "bolt",
        badge: "Home batteries · Backup",
        headline: "Keep the Lights On When the Grid Goes Down.",
        sub: "Home battery storage, backup panels and add-ons for existing solar systems.",
        services: ["Home batteries", "Backup panels", "EV chargers"],
        book: ["Add a battery", "Full backup", "EV charger"],
        img: {
          src: "/images/free-website/free-solar/battery-storage.webp",
          position: "50% 40%",
        },
      },
    ],
    legend: [
      "Advisor call button",
      "Solar and battery pages",
      "Bill-upload consult form",
      "Sticky call bar on phones",
    ],
  },
  // Orange solar, navy storage, then emerald and sky (tones.ts).
  tones: tonesFor("solar-website-design"),
  serviceName: "Solar Website Design",
  audience: "solar installers and solar energy companies",
  meta: {
    title: "Solar Website Design Agency | Web Design for Solar Companies",
    description:
      "Solar website design for installers: honest savings pages, battery backup pages and consultation booking built to rank locally and turn rooftops into proposals.",
    keywords: [
      "solar website design",
      "solar web design",
      "solar websites",
      "solar website design agency",
      "web design for solar companies",
      "website design agency for solar companies",
      "solar installer website design",
      "solar website development",
      "solar company website design",
      "solar installer website",
      "solar battery website design",
      "solar marketing website",
    ],
  },
  hero: {
    h1Lead: "Solar Website Design",
    h1Rest: "That Gets Rooftops to Signed Proposals",
    icon: "solar",
    lead: [
      "We build solar websites that explain savings honestly, show battery backup options and let homeowners book a consultation without a hard sell. A solar ",
      { href: "/services/web-design", label: "custom website" },
      " from us goes live in 2–3 weeks and is built to rank for solar installer searches in each town you cover.",
    ],
    cta: "Get My Free Solar Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/solar-hero-v2.webp",
        position: "center",
        query: "solar website design",
      },
      cardA: {
        icon: "sun",
        title: "Consultations Booked From Search",
        sub: "Town pages that rank for installers",
      },
      photoB: {
        src: "/images/home-improvement-web/solar-first-impressions-1.webp",
        position: "center 35%",
        query: "solar installers near me",
      },
      cardB: {
        icon: "bolt",
        title: "More Battery Backup Leads",
        sub: "Outage-ready pages for storage buyers",
      },
    },
  },
  showcase: {
    title: "Explore a Solar Installer Website With Panel and Battery Modes",
    lead: "Toggle between solar panels and battery storage to see the offer, consult form and mobile view adapt.",
  },
  services: {
    title: "Solar Web Design and Website\nDevelopment for Installers",
    lead: "From the first build to ongoing marketing, one team runs your solar site.",
    cta: "Plan My Solar Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Solar Installer Websites",
        desc: "A site designed around your products, service area and sales process, written for homeowners who are comparing several installers.",
        points: ["Original design", "Product pages", "Installer-focused copy"],
        links: [
          { href: "/services/web-design", label: "Our custom web design" },
        ],
      },
      {
        icon: "sun",
        title: "Honest Savings and Incentive Pages",
        desc: "Plain explanations of how savings, net metering and state or utility incentives work where you install, revised when the rules change.",
        points: [
          "Net metering explained",
          "Incentive updates",
          "Lease, loan or cash",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-solar-companies",
            label: "Local SEO for solar companies",
          },
        ],
      },
      {
        icon: "bolt",
        title: "Battery and Backup Power Pages",
        desc: "Dedicated pages for home batteries, whole-home backup and EV chargers, written for buyers worried about outages.",
        points: ["Storage pages", "Outage-focused copy", "Add-on offers"],
        links: [],
      },
      {
        icon: "calendar",
        title: "Consultation Booking and CRM Handoff",
        desc: "Homeowners choose a video or in-home consultation and attach a power bill, then land in your CRM ready for a proposal.",
        points: ["Video or in-home slots", "Bill upload", "CRM handoff"],
        links: [],
      },
      {
        icon: "target",
        title: "Paid Search Landing Pages",
        desc: "Tight, fast pages for solar and battery campaigns, each with one offer and one form, so ad clicks become consultations.",
        points: [
          "One offer per page",
          "Call and form options",
          "Conversion tracking",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for solar" },
        ],
      },
      {
        icon: "trend",
        title: "Hosting, Care and Solar Marketing",
        desc: "Managed hosting, updates and edits, plus a full solar marketing plan when you want more traffic on the new site.",
        points: ["Managed hosting", "Monthly page edits", "Growth reporting"],
        links: [
          {
            href: "/services/solar-marketing-agency",
            label: "Solar marketing agency",
          },
          {
            href: "/solar-website-design-agency-us/offer",
            label: "Free solar website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "What Sits Inside a Solar Website That Sells",
    lead: "The details that help a cautious buyer trust you with a long-term investment.",
    items: [
      {
        icon: "phone",
        title: "An Advisor One Tap Away",
        text: "Buyers with questions reach a real person straight from their phone.",
      },
      {
        icon: "file",
        title: "Bill Upload in the Consult Form",
        text: "Homeowners attach a recent bill so proposals start from real usage.",
      },
      {
        icon: "sun",
        title: "Savings Explained Without Hype",
        text: "Clear pages show how savings work, with no inflated promises.",
      },
      {
        icon: "bolt",
        title: "Battery and Outage Content",
        text: "Backup power pages for buyers who lose power in storms.",
      },
      {
        icon: "camera",
        title: "Install Galleries by Roof Type",
        text: "Real systems on tile, shingle and metal roofs near your buyers.",
      },
      {
        icon: "shield",
        title: "Warranty and Monitoring Pages",
        text: "What's covered and how system monitoring works, spelled out.",
      },
      {
        icon: "star",
        title: "Homeowner Reviews Near Each Form",
        text: "Ratings appear right where buyers decide to book or leave.",
      },
      {
        icon: "search",
        title: "Structured Data for Solar Searches",
        text: "Local business markup and fast pages Google can read with ease.",
      },
    ],
  },
  growth: {
    title: "How Solar Web Design Turns Research Into Consultations",
    lead: "Solar buyers research for weeks. Rank for those searches, make booking easy and get cited in AI answers.",
    rank: {
      title: "Rank Where Homeowners Research Solar Installers",
      body: [
        "We build pages for the searches buyers make while comparing installers, from solar panel installation to home battery backup, and track every page weekly. Layer on ",
        {
          href: "/services/industry/local-seo-for-solar-companies",
          label: "solar local SEO",
        },
        " and a ",
        {
          href: "/local-seo-google-business-optimization",
          label: "tuned Google Business Profile",
        },
        ", and you'll compete in the Google Maps results as well.",
      ],
      points: [
        "Installer and town pages",
        "Battery search pages",
        "Weekly ranking checks",
        "Solar business markup",
      ],
      cta: "Plan My Solar Pages",
      keywords: [
        ["solar installers near me", 28, 4],
        ["home battery backup", 35, 6],
        ["solar panel installation + your city", 24, 3],
        ["solar company reviews", 19, 2],
      ],
    },
    convert: {
      title: "Turn Long Research Into Booked Consultations",
      body: [
        "A consult flow with bill upload, a visible call button and quick pages helps buyers act once they're ready, and your CRM notes which page each booking came from. Our ",
        {
          href: "/services/solar-marketing-agency",
          label: "solar marketing agency",
        },
        " team can then drive more visitors to the pages that convert.",
      ],
      points: [
        "Bill-upload form",
        "Video consult slots",
        "Booking source tracking",
        "Fast mobile pages",
      ],
      cta: "Preview a Solar Consult Flow",
      url: "yoursolarco.com",
      headline: "See If Your Roof Qualifies for Solar",
      services: ["Solar panels", "Batteries", "Consultation", "EV chargers"],
    },
    ai: {
      title: "Show Up in AI Answers About Going Solar",
      body: [
        "Straight answers on payback, batteries and incentives, backed by structured data, make your site a source that AI search tools such as ChatGPT can quote when buyers ask who installs nearby, the same base our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        " build on.",
      ],
      points: [
        "Payback explainers",
        "Battery FAQs",
        "Structured data",
        "AI citation checks",
      ],
      cta: "Audit My AI Presence",
      query: "is a home battery worth it with solar",
      intro: "For solar and battery installs nearby,",
      bullets: [
        "Honest savings guides",
        "Battery backup options",
        "Local install photos",
      ],
    },
  },
  sitemap: {
    title: "Solar Website Pages That Match Buyer Research",
    lead: "Pages follow the order buyers ask questions, from whether their roof works to which battery fits.",
    home: "Your Solar Co. homepage",
    groups: [
      {
        name: "Solar Power",
        icon: "solar",
        pages: ["Rooftop solar", "Ground mounts", "Commercial solar"],
      },
      {
        name: "Storage",
        icon: "bolt",
        pages: ["Home batteries", "Backup power", "EV chargers"],
      },
      {
        name: "Savings",
        icon: "trend",
        pages: ["How savings work", "Incentives", "Financing options"],
      },
      {
        name: "Markets",
        icon: "pin",
        pages: ["Metro page", "Town pages", "Utility territories"],
      },
    ],
  },
  results: {
    title: "The Months After Your Solar Site Launches",
    lead: "Research traffic builds first, then consultations follow as pages rank and reviews grow.",
    cta: "Show Me My Solar Launch Plan",
    milestones: [
      {
        when: "Launch week",
        title: "Consult Booking Goes Live",
        text: "Bill upload, consult slots and tracking start on day one, so every booking has a source.",
      },
      {
        when: "Month 1",
        title: "Installer Pages Appear in Search",
        text: "Search engines pick up the solar, battery and town pages, and first local impressions appear.",
      },
      {
        when: "Months 2–3",
        title: "Ranking for Research Searches",
        text: "Savings and battery guides start reaching buyers who are still comparing options.",
      },
      {
        when: "Storm season",
        title: "Backup Power Interest Captured",
        text: "When outages hit the news, battery pages are ready to turn worry into consultations.",
      },
    ],
    wins: [
      {
        icon: "calendar",
        title: "Consultations Without Phone Tag",
        text: "Buyers pick their own consult time, so fewer leads go cold.",
      },
      {
        icon: "file",
        title: "Proposals Built From Real Bills",
        text: "Uploaded bills mean the first proposal fits the home's actual usage.",
      },
      {
        icon: "bolt",
        title: "More Storage Add-Ons",
        text: "Battery pages lift interest in backup power alongside new panels.",
      },
      {
        icon: "star",
        title: "Trust Before the First Call",
        text: "Real installs, reviews and honest savings pages set you apart from pushy sellers.",
      },
    ],
    band: [
      {
        icon: "check",
        value: "Qualified Consults",
        label: "Forms that ask about roof, bill and ownership first",
      },
      {
        icon: "sparkle",
        value: "A Clear Savings Story",
        label: "Panels, batteries and incentives explained plainly",
      },
      {
        icon: "shield",
        value: "Trust Before Signing",
        label: "Installer credentials and warranties on show",
      },
      {
        icon: "monitor",
        value: "Smooth on Every Screen",
        label: "Tools and pages that load without lag",
      },
    ],
  },
  process: {
    title: "Solar Website Design, Done in 2–3 Weeks",
    lead: "Solar teams get a written plan, a mockup on the house and a firm go-live date.",
    items: [
      {
        when: "Week 1",
        h: "Market Review and Mockup",
        p: "We study your products, utility territories and towns, and design a first homepage for review.",
      },
      {
        when: "Weeks 1–2",
        h: "Savings Copy and Design",
        p: "Writers explain savings, storage and incentives in plain words around your installs.",
      },
      {
        when: "Weeks 2–3",
        h: "Booking, CRM and Schema",
        p: "Consult booking, bill upload and CRM sync are connected, and markup is added.",
      },
      {
        when: "Launch",
        h: "Launch, Measure, Refine",
        p: "Launch day starts the tracking, and we fine-tune pages as consultation data builds.",
      },
    ],
  },
  compare: {
    title: "Solar-Focused Web Design vs. a Generic Agency Site",
    lead: "Solar buyers ask harder questions than most. Your website needs to answer them.",
    otherLabel: "Generic agency site",
    rows: [
      {
        topic: "Savings claims",
        other: "Big promised-savings banners that make buyers suspicious.",
        zonic: "Honest explainers matched to local rates and utility rules.",
      },
      {
        topic: "Incentive information",
        other: "Copy written once and left alone as programs change.",
        zonic:
          "Incentive pages reviewed when federal, state or utility rules shift.",
      },
      {
        topic: "Battery buyers",
        other: "Storage mentioned once, buried near the footer.",
        zonic:
          "Dedicated backup and battery pages with their own consult path.",
      },
      {
        topic: "Lead details",
        other: "Name and email only, so the first call starts from zero.",
        zonic:
          "Address, roof type and an optional power bill arrive with each lead.",
      },
      {
        topic: "Booking a consult",
        other: "A contact form and a wait for someone to call back.",
        zonic: "Video or in-home consult slots booked online in a few taps.",
      },
      {
        topic: "Local proof",
        other: "Stock photos of panels on houses nobody recognizes.",
        zonic:
          "Real installs in nearby towns, grouped by roof and system type.",
      },
    ],
  },
  reviews: {
    title: "Before Hiring a Solar Web Designer, Read Our 5.0 Google Reviews",
    lead: "Posted in public by clients we've worked with; nothing is edited.",
  },
  pricing: {
    title: "Solar Website Plans Built Around Growth",
    compareTitle: "Side-by-Side Plan Features for Solar Sites",
    addOnsTitle: "Add-Ons for Solar and Battery Installers",
    customTitle: "Selling Solar Across Several States?",
  },
  faq: {
    title: "Solar Website Questions Installers Bring Us",
    lead: "Cost, build time, incentives, batteries and how the site books consultations.",
    items: [
      {
        q: "How much does a solar website cost?",
        a: "We quote it after a free call about your products, markets and booking setup. You get one fixed figure for the whole build, not an hourly estimate. Add a qualifying monthly growth plan for solar, and the website build is covered by our free website program.",
      },
      {
        q: "How long does a solar website take to build?",
        a: "A solar build takes 2–3 weeks. The homepage mockup is yours to review in week one, savings and battery pages get written next, and consult booking, CRM sync and redirects are checked in the final days. Incentive pages get one more review just before launch.",
      },
      {
        q: "What should a solar installer website include?",
        a: "A clear call button, a consult form with optional bill upload, honest savings and incentive pages, battery and backup pages, financing choices, real install galleries, warranty details, reviews near each form, plus town and utility-area pages for the markets you install in.",
      },
      {
        q: "Can my website explain incentives and net metering accurately?",
        a: "Yes. We write plain pages on how incentives and net metering work in your market and revisit them when federal, state or utility rules change. We only publish savings examples you can stand behind, which keeps trust high with careful buyers.",
      },
      {
        q: "Do you build pages for battery storage and EV chargers?",
        a: "Yes. Storage buyers and EV owners search differently from first-time solar buyers, so each gets its own page and consult path. These pages also help you sell batteries to past customers who already have panels on the roof and now want backup power.",
      },
      {
        q: "Can homeowners upload a power bill or book a consultation online?",
        a: "Yes. The consult form accepts a photo or file of a recent bill, and homeowners can choose a video or in-home slot. Details go straight to your CRM, so your designer has real usage data before the first conversation and proposals start on the right foot.",
      },
      {
        q: "Will a redesign hurt my solar company's search rankings?",
        a: "Not when it's handled carefully. We record every current URL, keep or redirect the pages that rank, carry over titles that work and submit the new sitemap at launch. Then we watch positions and consultation bookings closely while Google re-crawls the new site.",
      },
      {
        q: "Do you design websites for commercial solar installers too?",
        a: "Yes. Commercial pages speak to business owners, property managers and farms, with project galleries, a site assessment request and content on operating costs and roof or ground space. Many installers run residential and commercial pages on one site with separate forms.",
      },
      {
        q: "What's the difference between solar web design and solar marketing?",
        a: "Web design builds the site itself: pages, booking, speed and structure. Solar marketing sends people to it through local SEO, paid search on Google and AI visibility work. Most installers start with the website, then add marketing once the site is ready to convert visitors.",
      },
    ],
  },
  consult: {
    title: "Preview Your Solar Homepage, Free of Charge",
    lead: [
      "Send us your products, markets and current site, and our team turns them into a solar homepage mockup and page plan, free of charge. Prefer a conversation? ",
      { href: "/contact-us", label: "Book a call with us" },
      ", read ",
      { href: "/about", label: "about our team" },
      ", scan ",
      { href: "/services", label: "every Zonic service" },
      " or bring back a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google Business Profile",
      },
      ". Solar installers may also find our ",
      {
        href: "/services/local-seo-for-home-services",
        label: "home services local SEO",
      },
      " page useful.",
    ],
    points: [
      "Free solar homepage mockup",
      "Solar and battery page plan",
      "Consult flow advice",
      "Site live in 2–3 weeks",
    ],
    form: {
      formType: "solar-website-design",
      badge: "Free solar homepage mockup",
      title: "Request Your Solar Website Mockup",
      subtitle: "Free, with nothing to sign.",
      submitText: "Send My Solar Mockup Request",
      messageLabel: "Your solar company and markets",
      messagePlaceholder:
        "Company name, current website (if any), panels, batteries or chargers you install and the areas you serve",
    },
  },
  banner: {
    title: "Make Your Solar Company the Easy Yes",
    lead: "Honest savings pages, battery content and booking that works on any phone.",
  },
};
