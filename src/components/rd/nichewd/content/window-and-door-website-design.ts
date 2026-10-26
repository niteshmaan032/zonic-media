/* Window and Door Web Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page (positions 6–18 already, so the
     "window and door web design" phrasing stays in the title and H1):
     window and door web design services 149 impressions (pos 8.5) · web
     design services for window and door companies 142 (10.0) · web
     design for window companies 132 (12.4) · website development services
     for window and door companies 74 (13.8) · window and door installers
     web design 63 (6.3) · window company web design 56 (7.9) · window
     service web design 56 (17.6) · website design for window and door
     companies 45 (13.1) · window company website design 45 (14.4).
   - Semrush US: window company website design 10 · window and door
     website design (no data).
   - Web research (window and door site guides, buyer surveys, 2026):
     energy efficiency is the top reason homeowners replace windows, so
     ratings (U-factor, solar heat gain, low-E glass, climate zones) need
     plain explanations; buyers want to see styles, frame colors and
     grids before a visit; warranty terms and transferability get
     checked; a visible "request a consultation" button; galleries of
     finished projects and reviews; cost is the main hesitation, so
     financing is explained without figures.
   Rules kept: build time 2–3 weeks (owner), no prices except the locked
   pricing section, no company or manufacturer named, verified numbers
   only, every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/window-and-door-website-design",
  stage: {
    widget: "quote",
    switchLabel: "Preview the example site by product line",
    business: "Your Window & Door Co.",
    domain: "yourwindowco.com",
    nav: ["Windows", "Doors", "Styles", "Showroom"],
    call: "Call the showroom",
    primary: "Book a free measure",
    secondary: "Browse styles",
    proof: "Chosen by homeowners nearby",
    bookTitle: "Free in-home estimate",
    confirm: "Book my measure",
    serviceSubs: [
      "Measured at home",
      "Energy-rated glass",
      "Our own installers",
    ],
    toast: "Measure booked",
    toastNote: "Sat 11 AM",
    phoneCta: "Measure",
    modes: [
      {
        label: "Window replacement",
        icon: "window",
        badge: "Replacement windows · Free measure",
        headline: "Drafty Windows? Replace Them Before Winter.",
        sub: "Double-hung, casement, sliding and bay windows with energy-rated glass.",
        services: ["Double-hung", "Casement windows", "Bay & bow"],
        book: ["Whole house", "A few windows", "Bay window"],
        img: {
          src: "/images/home-improvement-web/window-and-door-first-impressions-1.webp",
          position: "8% 40%",
          phonePosition: "18% 40%",
          zoom: 1.6,
        },
      },
      {
        label: "Exterior doors",
        icon: "door",
        badge: "Entry & patio doors · Showroom",
        headline: "Make Your Front Door the Best Part of the House.",
        sub: "Fiberglass and steel entry doors plus sliding and French patio doors, installed.",
        services: ["Entry doors", "Patio doors", "Storm doors"],
        book: ["Entry door", "Patio slider", "French doors"],
        img: {
          src: "/images/home-improvement-web/window-and-door-first-impressions-1.webp",
          position: "100% 42%",
          phonePosition: "68% 42%",
          zoom: 1.6,
        },
      },
    ],
    legend: [
      "Showroom call button",
      "Window and door landing pages",
      "In-home measure request",
      "Mobile call bar",
    ],
  },
  // Cyan windows, violet doors, then gold and emerald (tones.ts).
  tones: tonesFor("window-and-door-website-design"),
  serviceName: "Window and Door Web Design",
  audience: "window and door companies, installers and showrooms",
  meta: {
    title: "Window and Door Web Design | Window Company Website Design",
    description:
      "Window and door web design services for replacement window and door companies: energy-rating pages, style galleries and in-home measure booking that ranks.",
    keywords: [
      "window and door web design",
      "window and door web design services",
      "web design services for window and door companies",
      "web design for window companies",
      "window company website design",
      "window company web design",
      "website design for window and door companies",
      "window and door installers web design",
      "website development services for window and door companies",
      "window service web design",
      "door company website design",
      "replacement window company website",
    ],
  },
  hero: {
    h1Lead: "Window and Door Web Design",
    h1Rest: "That Books More In-Home Measures",
    icon: "window",
    lead: [
      "We build window and door websites that show styles, frame colors and energy ratings clearly, then make booking an in-home measure the obvious next step. We deliver each window and door ",
      { href: "/services/web-design", label: "custom website" },
      " in 2–3 weeks, with replacement pages for every town you install in.",
    ],
    cta: "Get My Free Window Site Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/window-and-door-first-impressions-1.webp",
        position: "40% center",
        query: "replacement windows near me",
      },
      cardA: {
        icon: "window",
        title: "Measures Booked From Search",
        sub: "Replacement pages that rank in your towns",
      },
      photoB: {
        src: "/images/home-improvement-web/window-and-door-hero.webp",
        position: "center",
        query: "window and door web design",
      },
      cardB: {
        icon: "door",
        title: "Whole-Home Orders, Not Single Panes",
        sub: "Style pages that sell full-house projects",
      },
    },
  },
  showcase: {
    title: "Test-Drive a Window Company Website With Two Product Lines",
    lead: "Switch between windows and exterior doors to see the landing page, measure request and phone view respond.",
  },
  services: {
    title: "Web Design Services for Window\nand Door Companies",
    lead: "Design and website development for installers, dealers and showrooms, all under one roof.",
    cta: "Plan My Window Website",
    items: [
      {
        icon: "monitor",
        title: "Custom Window Company Websites",
        desc: "A site designed around the windows and doors you sell, your showroom and your install crews, written for homeowners mid-research.",
        points: ["Built for your lines", "Showroom page", "Copy included"],
        links: [
          { href: "/services/web-design", label: "Custom website design" },
        ],
      },
      {
        icon: "window",
        title: "Product and Style Pages",
        desc: "A page for each window type and door style, with frame colors, glass packages, grid patterns and photos of real installs.",
        points: [
          "Window type pages",
          "Door style pages",
          "Frame and glass options",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-window-and-door-companies",
            label: "Local SEO for window and door companies",
          },
        ],
      },
      {
        icon: "leaf",
        title: "Energy-Efficiency Explainers",
        desc: "Plain guides to energy ratings, low-E glass and climate zones, so buyers understand what they get from better windows.",
        points: [
          "Energy rating guides",
          "Low-E glass pages",
          "Climate-zone advice",
        ],
        links: [],
      },
      {
        icon: "calendar",
        title: "In-Home Measure and Showroom Booking",
        desc: "Homeowners request an in-home measure or reserve a showroom visit online, and each request arrives with the products they viewed.",
        points: ["Measure requests", "Showroom visits", "Viewed-product notes"],
        links: [],
      },
      {
        icon: "repeat",
        title: "Redesign and Website Development",
        desc: "Rebuilds for older window and door sites that keep page-one rankings, plus custom development for configurators and dealer tools.",
        points: ["Rankings protected", "Redirect mapping", "Custom features"],
        links: [],
      },
      {
        icon: "tool",
        title: "Hosting, Care and Sister-Trade Sites",
        desc: "Managed hosting and monthly edits, plus matching sites if you also run a remodeling or painting crew.",
        points: ["Managed hosting", "Monthly edits", "Multi-brand setups"],
        links: [
          {
            href: "/services/general-contractor-website-design",
            label: "General contractor websites",
          },
          {
            href: "/services/painting-contractor-website-design",
            label: "Painting contractor websites",
          },
        ],
      },
    ],
  },
  features: {
    title: "Details Every Window and Door Website Needs",
    lead: "Features that help a careful buyer move from browsing styles to booking a measure.",
    items: [
      {
        icon: "phone",
        title: "Showroom Number Always in View",
        text: "The phone and showroom address stay visible on every screen.",
      },
      {
        icon: "camera",
        title: "Before-and-After Window Photos",
        text: "Old frames next to new ones, on homes your buyers will recognize.",
      },
      {
        icon: "leaf",
        title: "Energy Ratings in Plain English",
        text: "What the numbers on a window sticker mean for comfort and bills.",
      },
      {
        icon: "layers",
        title: "Frame Colors and Grid Styles",
        text: "Buyers see finishes, grids and hardware options before the visit.",
      },
      {
        icon: "calendar",
        title: "Measure Booking in a Few Taps",
        text: "A short request picks the products, the rooms and a preferred day.",
      },
      {
        icon: "award",
        title: "Warranty Terms Up Front",
        text: "Coverage and transfer rules explained on every product page.",
      },
      {
        icon: "pin",
        title: "Pages for Each Town You Install In",
        text: "Local projects and directions to the showroom on every town page.",
      },
      {
        icon: "search",
        title: "Product and Local Schema",
        text: "Markup that helps Google understand your products, reviews and area.",
      },
    ],
  },
  growth: {
    title: "How Window and Door Web Design Grows Your Install Schedule",
    lead: "Win replacement searches, turn style browsing into measures and appear in AI answers.",
    rank: {
      title: "Win Replacement Searches Before Buyers Visit a Showroom",
      body: [
        "Pages are planned around what buyers search while they compare, from window replacement to new entry doors, and tracked week by week. Back the site with ",
        {
          href: "/services/industry/local-seo-for-window-and-door-companies",
          label: "window and door local SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "map listing optimization",
        },
        " to win showroom searches on Google Maps.",
      ],
      points: [
        "Product pages",
        "Town and suburb pages",
        "Weekly rank checks",
        "Product schema",
      ],
      cta: "Map My Window Pages",
      keywords: [
        ["window replacement near me", 23, 3],
        ["entry door installation", 30, 5],
        ["patio door replacement", 26, 4],
        ["energy efficient windows", 34, 6],
      ],
    },
    convert: {
      title: "Turn Style Browsing Into Booked Measures",
      body: [
        "Style pages lead straight to a short measure request, the showroom number stays in view and pages load quickly, so more browsers book a visit. Each booking shows the page that earned it, and ",
        { href: "/services/google-ads", label: "Google Ads" },
        " can push spring and fall promotions to the strongest pages.",
      ],
      points: [
        "Measure request form",
        "Showroom click-to-call",
        "Booking source tracking",
        "Fast photo-heavy pages",
      ],
      cta: "See a Measure Booking Flow",
      url: "yourwindowco.com",
      headline: "New Windows? Book a Free Measure",
      services: ["Windows", "Entry doors", "In-home measure", "Patio doors"],
    },
    ai: {
      title: "Earn a Mention When Buyers Ask AI About Windows",
      body: [
        "Energy-rating explainers and style guides written as direct answers give Google AI Overviews and chat assistants something worth citing when shoppers ask which installer to trust. It mirrors the approach behind our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Direct-answer guides",
        "Energy rating FAQs",
        "Organized product pages",
        "AI citation tracking",
      ],
      cta: "Review My AI Visibility",
      query: "who installs energy efficient windows near me",
      intro: "For energy-efficient window installs nearby,",
      bullets: [
        "Energy ratings explained",
        "Real local installs",
        "Free in-home measures",
      ],
    },
  },
  sitemap: {
    title: "A Window and Door Site Map Built Around Products",
    lead: "Every product and town gets its own page, so each style search has somewhere to land.",
    home: "Your Window & Door Co. homepage",
    groups: [
      {
        name: "Windows",
        icon: "window",
        pages: ["Double-hung", "Casement", "Bay and bow"],
      },
      {
        name: "Doors",
        icon: "door",
        pages: ["Entry doors", "Patio doors", "Storm doors"],
      },
      {
        name: "Buying Help",
        icon: "book",
        pages: ["Energy ratings", "Financing", "Warranty"],
      },
      {
        name: "Locations",
        icon: "pin",
        pages: ["Main market", "Suburb pages", "Showroom page"],
      },
    ],
  },
  results: {
    title: "Where a New Window Company Website Takes You",
    lead: "Product pages earn search visibility, measure requests become trackable and promo seasons land on ready pages.",
    cta: "Plan My Window Site Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Measure Requests Tracked",
        text: "Booking, calls and showroom visits are tagged from launch, so you see what works.",
      },
      {
        when: "Month 1",
        title: "Product Pages Indexed",
        text: "Google indexes the window, door and town pages, and they surface for nearby product searches.",
      },
      {
        when: "Months 2–3",
        title: "Higher for Replacement Searches",
        text: "Style pages and new reviews move up for window and door searches nearby.",
      },
      {
        when: "Fall rush",
        title: "Promotion Season Ready",
        text: "Seasonal offers go live on pages that already rank, before cold weather sets in.",
      },
    ],
    wins: [
      {
        icon: "clipboard",
        title: "Better-Informed Buyers",
        text: "Homeowners arrive at the measure already knowing the styles they like.",
      },
      {
        icon: "home",
        title: "Whole-House Projects",
        text: "Style and energy pages make the case for replacing every window at once.",
      },
      {
        icon: "door",
        title: "Showroom Visits From Search",
        text: "Directions and visit booking bring local buyers through your front door.",
      },
      {
        icon: "star",
        title: "A Brand Buyers Remember",
        text: "Clean design and real installs keep you top of mind during long research.",
      },
    ],
    band: [
      {
        icon: "calendar",
        value: "Showroom Visits",
        label: "Measure and showroom bookings from the homepage",
      },
      {
        icon: "layers",
        value: "Style-Hungry Browsers",
        label: "Galleries that let buyers compare looks side by side",
      },
      {
        icon: "sparkle",
        value: "Energy-Savvy Buyers",
        label: "Glass and efficiency pages that answer the big question",
      },
      {
        icon: "award",
        value: "Premium First Impression",
        label: "A design that matches the quality you install",
      },
    ],
  },
  process: {
    title: "2–3 Weeks From Product List to Live Window Site",
    lead: "Window and door dealers get a kickoff call, a homepage concept and a go-live date fixed up front.",
    items: [
      {
        when: "Week 1",
        h: "Product Audit and Mockup",
        p: "Your window and door lines, showrooms and towns get listed, and a homepage concept comes back for comments.",
      },
      {
        when: "Weeks 1–2",
        h: "Style Pages and Photo Plan",
        p: "Product pages are written and designed around your best install photos.",
      },
      {
        when: "Weeks 2–3",
        h: "Booking, Schema and Redirects",
        p: "Measure booking and call tracking are connected, and every old URL is mapped.",
      },
      {
        when: "Launch",
        h: "Live With Rankings Protected",
        p: "The new site goes live, with rankings checked often during the switchover.",
      },
    ],
  },
  compare: {
    title: "Your Own Window Site vs. a Dealer Template Site",
    lead: "Template sites handed out to dealers look alike and rank alike. Yours should stand apart.",
    otherLabel: "Dealer template site",
    rows: [
      {
        topic: "Product range",
        other: "One manufacturer's catalog, even if you sell several lines.",
        zonic: "Every window and door line you install, on pages you control.",
      },
      {
        topic: "Ranking in your towns",
        other: "Copy shared with dealers in other cities, word for word.",
        zonic: "Original pages for your towns, projects and showroom.",
      },
      {
        topic: "Measure booking",
        other: "A dealer locator form that may route leads elsewhere.",
        zonic: "A measure request that comes straight to your team.",
      },
      {
        topic: "Energy questions",
        other: "Spec sheets full of ratings with no explanation.",
        zonic: "Plain guides to ratings, glass and climate-zone choices.",
      },
      {
        topic: "Your photos",
        other: "Catalog renderings of houses in other states.",
        zonic: "Before-and-after photos from homes in your area.",
      },
      {
        topic: "Who owns the domain",
        other: "Access can end if the dealer program changes.",
        zonic: "The domain, pages and every lead record belong to you.",
      },
    ],
  },
  reviews: {
    title: "See Why Clients Rate Zonic 5.0 on Google",
    lead: "Business owners left these on our Google profile; we don't edit or filter them.",
  },
  pricing: {
    title: "Window and Door Website Plans",
    compareTitle: "Features by Plan for Window Company Sites",
    addOnsTitle: "Extra Tools for Window and Door Dealers",
    customTitle: "Several Showrooms or Install Regions?",
  },
  faq: {
    title: "Window and Door Website Questions",
    lead: "Cost, timing and the jobs a window company site has to do well.",
    items: [
      {
        q: "How much do web design services for window and door companies cost?",
        a: "After a free discovery call about your product lines, showrooms and towns, we send one fixed quote covering design, copy and development. That price stays put until go-live. Window and door dealers on a qualifying monthly growth plan get the website itself free.",
      },
      {
        q: "How long does a window company website take?",
        a: "In most cases 2–3 weeks. A homepage concept arrives in week one, product and style pages follow, and the last stretch connects measure booking and call tracking and maps old URLs. If a promotion is coming up, we can plan the launch date around it.",
      },
      {
        q: "What should a window and door website include?",
        a: "Your showroom address and phone in plain view, a page for each window type and door style, energy rating guides, warranty details, before-and-after photos, financing information, reviews, an in-home measure request and a page for each town you install in, all fast on phones.",
      },
      {
        q: "Will a redesign affect the Google rankings my site has now?",
        a: "We protect them. Every ranking URL is kept or redirected exactly, strong titles and headings are carried over, and the sitemap is resubmitted on launch day. Positions and leads are then checked closely while Google re-crawls the site, and anything that slips is fixed fast.",
      },
      {
        q: "Can customers book an in-home measure or showroom visit online?",
        a: "Yes. Homeowners pick a measure or a showroom visit, note the products and rooms they're interested in and choose a preferred day. Requests arrive in your inbox or CRM with those details, and an automatic confirmation goes out so nobody is left wondering.",
      },
      {
        q: "Can you feature the product lines and brands we install?",
        a: "Yes. We build pages for each line you carry, using approved photos and specifications, and we follow any logo rules your suppliers set. Your company stays the hero, and products are shown as the options you install, service and stand behind.",
      },
      {
        q: "Do you build sites for window installers who also do siding or painting?",
        a: "Yes. We can add siding or painting to one site or build a separate site for each trade, so every crew ranks for its own searches. We also design general contractor and painting contractor websites with the same structure and care.",
      },
      {
        q: "Do you offer website development, or only design?",
        a: "Both. Alongside design and copy, our developers build booking tools, product filters, custom integrations and fast, secure hosting from day one. Window and door companies get one team for the whole site instead of juggling a separate designer, developer and hosting company.",
      },
    ],
  },
  consult: {
    title: "Start With a Free Window and Door Homepage Sketch",
    lead: [
      "List your product lines, showrooms and towns, and we'll mock up a window and door homepage with a page plan, free. Want to talk first? ",
      { href: "/contact-us", label: "Contact Zonic" },
      ", get to know ",
      { href: "/about", label: "our team" },
      ", explore ",
      { href: "/services", label: "what we offer" },
      " or ask about a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "suspended Google profile",
      },
      ". Window installers can also read about ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home services",
      },
      ".",
    ],
    points: [
      "Homepage design, free",
      "Product page plan",
      "Measure booking advice",
      "Launch within 2–3 weeks",
    ],
    form: {
      formType: "window-and-door-website-design",
      badge: "Free window and door mockup",
      title: "Request Your Window Website Mockup",
      subtitle: "No cost, no commitment.",
      submitText: "Send My Window Mockup Request",
      messageLabel: "Your company, showroom and product lines",
      messagePlaceholder:
        "Company name, current website (if any), the windows and doors you install and the towns you serve",
    },
  },
  banner: {
    title: "Open the Door to More Window and Door Jobs",
    lead: "Product pages, energy guides and measure booking that keep buyers moving forward.",
  },
};
