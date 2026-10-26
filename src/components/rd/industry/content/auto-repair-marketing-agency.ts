import { PALETTES } from "../palettes";
import type { IndustryContent } from "../types";

/* AUTO REPAIR MARKETING AGENCY — redesign draft content (25 Oct 2026).

   Rank safety: Semrush API units are exhausted, so no ranking report was
   pulled. The live title's core term ("Auto Repair Marketing & SEO
   Agency") stays in the new title, and every phrase in the live keywords
   meta is carried by the title, H1, an H2/H3 or an FAQ question.
   - Web research (25 Oct): drivers choose a shop from the map, its
     reviews and whoever answers; reviews that name the repair (brakes,
     diagnostics) surface for those searches; a full services list on the
     Business Profile feeds AI answers; top pages build a page per service
     (brakes, diagnostics, AC, transmission), use call tracking and Local
     Services Ads, and cover fleet work, social media and maintenance
     reminders. Common questions: ads vs SEO, reviews, competing with
     dealerships, social media.
   Hero uses tiles: the photo folder holds one distinct shot (hero and
   detail are the same image), used for the specialties panel instead.
   Fresh wording only: nothing reused from the live page or other drafts. */

export const CONTENT: IndustryContent = {
  draftSlug: "auto-repair-marketing-agency-2",
  liveUrl: "/services/auto-repair-marketing-agency",
  niche: "Auto Repair",
  meta: {
    title: "Auto Repair Marketing & SEO Agency | Maps, Ads & More Cars",
    description:
      "Auto repair marketing agency for independent shops: auto repair SEO, Google Maps rankings, Google Ads and reviews that bring more cars into your bays.",
    keywords: [
      "auto repair marketing agency",
      "auto repair shop marketing agency",
      "auto shop marketing agency",
      "auto repair marketing companies",
      "marketing for auto repair shops",
      "marketing ideas for auto repair shop",
      "automotive marketing agency near me",
      "social media marketing for auto repair shops",
      "auto repair seo",
      "auto repair marketing company",
      "auto repair advertising agency",
      "auto repair internet marketing",
      "auto repair lead generation",
      "auto repair shop marketing",
      "mechanic marketing",
      "auto repair google ads",
    ],
  },
  palette: PALETTES.redIndigo,
  hero: {
    h1Lead: "Auto Repair",
    h1Icon: "car",
    h1Rest: "Shop Marketing Agency for More Cars in Every Bay",
    lead: [
      "Drivers pick a shop in minutes, usually from the map, the reviews and whoever answers the phone. We make that shop yours with auto repair SEO, ",
      {
        href: "/local-seo-google-business-optimization",
        label: "Google Business Profile optimization",
      },
      ", call-focused ",
      { href: "/services/google-ads", label: "Google Ads" },
      " and a website that books appointments.",
    ],
    cta: "Get My Free Shop Audit",
    bento: {
      kind: "tiles",
      wide: {
        icon: "pin",
        title: "Top 3 for “Mechanic Near Me”",
        sub: "In every town your shop serves",
        chips: ["Brakes", "Diagnostics", "AC repair", "Tires", "+ your work"],
      },
      left: {
        icon: "call",
        title: "More booked repairs",
        sub: "Calls and online requests tied to the job",
      },
      right: {
        icon: "star",
        title: "A rating drivers trust",
        sub: "Fresh reviews after every repair order",
      },
      bottom: {
        title: "Steady car count, all year",
        sub: "Service reminders bring your regulars back",
      },
    },
  },
  services: {
    title: "Marketing for Auto Repair Shops, Handled by One Team",
    lead: "Digital marketing services aimed at the moment a driver needs a shop.",
    cta: "Audit My Shop Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Maps for Repair Shops",
        desc: "Repair categories, every service you offer, shop photos and weekly posts set up so you climb the map for nearby repair searches.",
        points: [
          "Full service list added",
          "Bay and team photos",
          "Suspension help included",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Profile optimization",
          },
          {
            href: "/services/gbp-reinstatement-service",
            label: "Suspended profile help",
          },
        ],
      },
      {
        icon: "search",
        title: "Auto Repair SEO by Service",
        desc: "A page for brakes, diagnostics, AC and transmissions plus each town you cover, with citations and schema, so search sends the jobs you want.",
        points: [
          "Brake and diagnostic pages",
          "Citation cleanup",
          "Town-by-town rank tracking",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for service shops",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify a new shop profile",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads That Ring the Service Desk",
        desc: "Search and call ads on urgent repair searches near your shop, with parts shoppers and do-it-yourself clicks filtered out.",
        points: [
          "Call-first mobile ads",
          "Parts and DIY negatives",
          "Ads scheduled to shop hours",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for repair shops",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Repair Shop Websites",
        desc: "Fast mobile sites with tap-to-call, appointment requests and service pages that explain each repair in plain words drivers understand.",
        points: [
          "Appointment request form",
          "Warranty and certification badges",
          "Calls and forms tracked",
        ],
        links: [
          { href: "/services/web-design", label: "Custom shop websites" },
          { href: "/auto-repair-website-design-agency-us/offer", label: "Free auto repair website" },
        ],
      },
      {
        icon: "star",
        title: "Reviews After Every Repair Order",
        desc: "When the car is picked up, the customer gets a text inviting a Google review that names the repair, and we write your replies.",
        points: [
          "Requests at pickup",
          "Replies in your voice",
          "Your best reviews featured",
        ],
        links: [{ href: "#ind-audit", label: "Compare my shop's reviews" }],
      },
      {
        icon: "sparkle",
        title: "AI Answers That Name Your Shop",
        desc: "We make your shop easy for ChatGPT, Gemini and AI Overviews to trust, so they suggest you when drivers ask for an honest mechanic.",
        points: [
          "Matching listings everywhere",
          "Reviews that name repairs",
          "Answer-ready service pages",
        ],
        links: [
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          { href: "/services", label: "All our services" },
        ],
      },
    ],
  },
  growth: {
    title: "Auto Repair Lead Generation From Search to Service Bay",
    lead: "Map rankings, AI answers and reviews, all pointed at your appointment book.",
    rows: [
      {
        title: "Rank in the Top Three When Drivers Search “Mechanic Near Me”",
        body: [
          "A warning light comes on and the driver opens Google Maps. We tune your profile, list every repair you do, build pages for the towns around you and keep reviews coming, so your shop is one of three they compare. Find out where you rank today with our ",
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "free Google Maps ranking tool",
          },
          ".",
        ],
        points: [
          "Repair-shop categories",
          "Every service listed",
          "Town landing pages",
          "Competitor spam flagged",
        ],
        cta: "See My Map Position",
        ui: {
          kind: "maps",
          query: "auto repair near me",
          city: "Tampa",
          category: "Auto repair shop · Open until 6 PM",
        },
      },
      {
        title: "Get Named When Drivers Ask AI for an Honest Mechanic",
        body: [
          "More drivers ask ChatGPT or Google's AI Overview which local shop they can trust. Our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " lines up the facts those tools read: consistent listings, reviews that describe real repairs, visible certifications and clear pages for every service you offer.",
        ],
        points: [
          "Consistent shop listings",
          "Reviews naming repairs",
          "Certifications on display",
          "Service FAQ pages",
        ],
        cta: "See If AI Names My Shop",
        ui: {
          kind: "ai",
          query: "honest auto repair shop in tampa for a check engine light",
          intro: "For check engine diagnostics in Tampa,",
          bullets: [
            "Same-day diagnostic scans",
            "Approval before any work starts",
            "Certified techs and a local warranty",
          ],
        },
      },
      {
        title: "Turn Every Pickup Into a Five-Star Review",
        body: [
          "Drivers read reviews before they trust a shop with their car. When the customer picks up, a short text requests a Google review, and our team drafts the owner replies, so the shop's rating climbs and new reviews land every month.",
        ],
        points: [
          "Texts at pickup",
          "Low-rating alerts",
          "Owner replies drafted",
          "Review widget on site",
        ],
        cta: "Grow My Shop Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Carla, thanks for trusting Your Company with your car today! Got a minute to post a Google review for our shop?",
          reviewer: "Carla M.",
          review:
            "They traced the brake noise to a loose caliper, showed me the part and had me back on the road the same afternoon.",
          reply:
            "Thanks, Carla! Drive safe, and see you at your next oil change.",
        },
      },
    ],
  },
  specialties: {
    title: "What Our Auto Repair SEO Agency Runs for Each Service",
    lead: "Drivers shop for brake jobs, diagnostics and fleet work differently, so every service below gets dedicated pages, ads and reminders.",
    photo: {
      src: "/images/free-website/free-auto-repair/hero.webp",
      alt: "Mechanic running a diagnostic scan on a car with the hood open",
      caption: "Independent repair shops",
      sub: "Brakes, diagnostics, maintenance and fleet work",
    },
    items: [
      {
        icon: "car",
        name: "Brake Repair",
        tactic: "Brake pages and call ads for grinding-noise searches",
      },
      {
        icon: "inspect",
        name: "Check Engine & Diagnostics",
        tactic: "Warning-light pages that answer drivers' first questions",
      },
      {
        icon: "snow",
        name: "Auto AC Repair",
        tactic: "Summer ad pushes and AC service pages",
      },
      {
        icon: "wrench",
        name: "Oil Changes & Maintenance",
        tactic: "Mileage reminders that bring regulars back on time",
      },
      {
        icon: "tool",
        name: "Transmission Repair",
        tactic: "High-value repair pages with appointment request forms",
      },
      {
        icon: "bolt",
        name: "Batteries & Electrical",
        tactic: "Same-day battery pages ranked across nearby towns",
      },
      {
        icon: "check",
        name: "Tires & Alignment",
        tactic: "Seasonal tire offers sent to past customers",
      },
      {
        icon: "truck",
        name: "Fleet Maintenance Accounts",
        tactic: "Business-focused pages and outreach to local fleets",
      },
    ],
    more: "Work on diesel, hybrid or European cars? We market that work too.",
  },
  steps: {
    title: "Get Auto Repair Internet Marketing Working in 3 Steps",
    lead: "Quick wins on the map and in ads come first, then search rankings grow behind them.",
    items: [
      {
        h: "We Check Your Shop's Search Presence",
        p: "We search your top repairs from around your shop, then show where you rank, which shops beat you on the map and where calls slip away.",
      },
      {
        h: "We Build a Plan Around Your Bays",
        p: "Together we choose the repairs, towns and campaigns to push first, weighted toward work your techs want more of, like brakes, diagnostics or fleet service.",
      },
      {
        h: "Go Live, Then See Every Call Counted",
        p: "Profile fixes, service pages, ads and review texts start together. Your monthly report shows rankings, calls, appointment requests and the repairs they became.",
      },
    ],
    audit: [
      ["Maps rank: mechanic near me", "behind"],
      ["Services on your profile", "gap"],
      ["Reviews vs nearby shops", "behind"],
      ["Online appointment requests", "open"],
    ],
    plan: ["Brake repair", "Diagnostics", "Fleet service", "Tampa", "Brandon"],
    launch: [
      "Shop profile completed",
      "Service pages live",
      "Calls tracked by source",
      "Pickup review texts on",
    ],
  },
  reviews: {
    title: "What Business Owners Write About Us on Google",
    lead: "Read what owners tell other owners about working with us.",
  },
  pricing: {
    title: "Auto Repair Marketing Agency Plans With No Annual Contract",
    compareTitle: "Compare Plans for Single and Multi-Bay Shops",
    addOnsTitle: "Add Campaigns for Tire and AC Seasons",
    customTitle: "Running several shop locations?",
  },
  faq: {
    title: "Before You Hire an Auto Repair Digital Marketing Agency",
    lead: "Car count, SEO, ads, reviews and AI search, in plain words.",
    items: [
      {
        q: "How does an auto repair marketing agency help an independent shop?",
        a: "It brings more drivers through your door. We push your Business Profile up the map, build auto repair SEO pages for every service and nearby town, manage call-focused ads, gather reviews after each repair and make your website simple to call or book from.",
      },
      {
        q: "Which marketing ideas for auto repair shop owners work best in 2026?",
        a: "Start with what drivers check first: a complete Business Profile with every service listed, a steady stream of reviews that mention real repairs and a mobile site with click-to-call. Then add service pages, maintenance reminders, fleet outreach and visibility in AI answers.",
      },
      {
        q: "How do I get more cars into my shop without discounting?",
        a: "Win the searches that start a repair. Rank on the map for the services you want, answer calls fast, show reviews that build trust and remind past customers when service is due. Drivers who choose you for trust rarely shop on coupons alone.",
      },
      {
        q: "Is auto repair SEO worth it next to Google Ads?",
        a: "Yes, they work best together. Ads bring calls from day one, while auto repair SEO builds rankings that send calls with no fee per click. Strong service pages also lift your map listing and the AI answers drivers read before they call.",
      },
      {
        q: "Should I hire an auto repair advertising agency or run ads myself?",
        a: "Many owners start alone and lose clicks to parts shoppers and do-it-yourself searches. An agency adds negative keywords, call tracking and schedules tied to your hours. We run the campaigns for you with a 0% ad-spend markup, so your whole spend buys clicks.",
      },
      {
        q: "Does social media marketing for auto repair shops bring in cars?",
        a: "It builds trust more than it brings urgent repairs. Posts showing your team, real fixes and new reviews remind locals you exist, but most repair calls come from the map and search. We focus there first and use social posts to support it.",
      },
      {
        q: "Do I need an automotive marketing agency near me, or is a remote team fine?",
        a: "Distance isn't a problem: our Delaware team markets shops all over the U.S. We study your local market first, then handle everything through calls, screen shares and monthly reports, so you get the attention a local agency would give.",
      },
      {
        q: "What should I look for in an auto shop marketing agency?",
        a: "Look for proof they understand repair work: service-level pages, call tracking tied to repair orders, a review system and clear monthly reporting. Avoid long contracts and hidden ad fees, and ask who owns your website and profiles if you ever leave.",
      },
      {
        q: "How much do auto repair marketing companies charge?",
        a: "Ours has three tiers: $297, $750 or $1,500 per month, with no annual contract and a 0% ad-spend markup. One-location shops focused on the map and reviews usually start on the first tier; multi-bay shops running ads need more.",
      },
      {
        q: "Can AI assistants recommend my repair shop to drivers?",
        a: "Yes. ChatGPT, Gemini and AI Overviews lean toward shops with consistent, checkable details. We match your listings across the web, gather reviews that mention real repairs, display your certifications and publish clear answers about your services, giving those assistants grounds to mention you.",
      },
    ],
  },
  audit: {
    title: "Free Auto Repair Marketing Audit for Your Shop",
    lead: [
      "Tell us about your shop. We check how you rank for your top repairs, how your profile, ",
      { href: "/services/web-design", label: "website" },
      " and reviews stack up against nearby shops, and what to fix first. We're a ",
      { href: "/about", label: "Delaware-based team" },
      " marketing shops nationwide, along with the other ",
      { href: "/industries", label: "industries we serve" },
      ".",
    ],
    points: [
      "Cancel any month",
      "$297/mo starting plan",
      "0% markup on ads",
      "Reinstatement on all plans",
    ],
    form: {
      formType: "auto-repair-marketing",
      badge: "Free shop audit",
      title: "Get Your Shop's Free Marketing Audit",
      subtitle: "No cost and nothing to sign.",
      submitText: "Send My Shop Audit",
      messageLabel: "Your shop and top services",
      messagePlaceholder:
        "City, number of bays, the repairs you want more of (brakes, diagnostics, fleet) and your hours",
    },
  },
  banner: {
    title: "Be the Shop Drivers Trust With Their Keys",
    lead: "Book a free shop audit and see where your next cars will come from.",
    icons: ["car", "wrench"],
  },
};
