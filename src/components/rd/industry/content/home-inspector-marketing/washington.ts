import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* WASHINGTON STATE HOME INSPECTOR MARKETING — redesign draft content
   (24 Oct 2026).
   Rank safety: Semrush returned no_api_units on 24 Oct, so resource_organic
   and phrase_these could not run; keywords come from web research. The
   live title's core term "Home Inspector Marketing in Washington State" is
   kept in the title, and every phrase in the live keywords meta sits in
   the title, H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): the Washington State Department of Licensing
   licenses inspectors (at least 120 classroom hours, field training, a
   board-approved exam); WSDA says a home inspector cannot inspect for or
   report wood-destroying organisms without a Structural Pest Inspector
   license; Seattle buyers order side-sewer scopes and often inspect before
   writing an offer; crawlspaces and moisture top the topic list. Fresh
   wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "washington-2",
  liveUrl: "/services/home-inspector-marketing/washington",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Washington State",
  meta: {
    title: "Home Inspector Marketing in Washington State | SEO, Maps & Ads",
    description:
      "Washington State home inspector marketing for Seattle, Tacoma, Spokane, Bellevue and Vancouver: Map Pack rankings, inspector SEO, sewer scope pages and ads.",
    keywords: [
      "home inspector marketing washington state",
      "home inspector seo washington state",
      "home inspector washington state",
      "home inspection washington state",
      "home inspectors seattle wa",
      "home inspection seattle cost",
      "home inspector tacoma wa",
      "home inspector spokane wa",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation washington",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.roseSky,
  hero: {
    h1: "Washington State Home Inspector Marketing Agency for Fast Markets",
    h1NoWrap: "Fast Markets",
    lead: [
      "Puget Sound offers can be reviewed within days, so buyers book whichever inspector they can find and schedule first. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " for Washington puts your licensed company on the map from Seattle to Spokane and lets buyers book a pre-inspection or sewer scope tonight.",
    ],
    cta: "Get My Washington Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "First on the map, Puget Sound to Spokane",
        sub: "City and county service areas on both sides of the mountains",
        chips: ["Seattle", "Tacoma", "Bellevue", "Spokane", "+ your city"],
      },
      left: {
        icon: "clock",
        title: "Booked before the offer",
        sub: "Pre-inspections scheduled online in minutes",
      },
      right: {
        icon: "water",
        title: "More sewer scope add-ons",
        sub: "Side-sewer pages buyers find and book",
      },
      bottom: {
        title: "Agents who send you first",
        sub: "Reviews and fast reports that make you the safe referral",
      },
    },
  },
  services: {
    title: "The Services Behind a Fuller Washington Inspection Calendar",
    lead: "Washington State inspectors trust one crew with every channel.",
    cta: "Audit My Washington Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles Tuned for Washington Inspectors",
        desc: "We add your DOL license, service cities, sewer scope and other add-ons, real job photos and Saturday hours if you work them, so you rank locally.",
        points: [
          "DOL license listed",
          "Weekend hours shown",
          "Add-ons on the profile",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Sharpen my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO: Washington State Towns and Sewer Scopes",
        desc: "Pages for Ballard, Kirkland, Puyallup and every town you serve, plus side-sewer scope, crawlspace and pre-inspection pages buyers search.",
        points: [
          "Neighborhood and town pages",
          "Sewer scope page",
          "Crawlspace answers",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local search for home services",
          },
        ],
      },
      {
        icon: "target",
        title: "Ads That Stay in Washington, Not D.C.",
        desc: "Search ads and Local Services Ads fenced to your Washington counties, with D.C.-area clicks excluded and keywords built around buyers ready to book.",
        points: [
          "D.C. clicks excluded",
          "County-level targeting",
          "Pre-inspection keywords",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads management services",
          },
        ],
      },
      {
        icon: "monitor",
        title: "Booking Sites Built for Pre-Offer Speed",
        desc: "Online scheduling, instant confirmations, bundled packages with sewer scope and a sample report, so a buyer can book before the offer deadline.",
        points: ["Instant booking", "Bundled packages", "Mobile sample report"],
        links: [{ href: "/services/web-design", label: "Get a new website" }],
      },
      {
        icon: "star",
        title: "Reviews and Agent Visibility Across Puget Sound",
        desc: "Review requests sent as each report goes out, owner replies drafted and an agent page showing turnaround, add-ons and coverage.",
        points: [
          "Requests per report",
          "Owner replies drafted",
          "Agent coverage page",
        ],
        links: [{ href: "/services", label: "View every service" }],
      },
      {
        icon: "shield",
        title: "When Google Suspends or Won't Verify You",
        desc: "We trace why your profile was suspended or stuck in verification, correct the problem and submit the appeal. 900+ profiles reinstated and counting.",
        points: ["Problem traced", "Profile corrected", "Appeal filed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Fix my suspension",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Finish verifying my listing",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How We Win “Home Inspector Washington State” Searches for You",
    lead: "The map, AI tools and the review pages that agents and buyers check.",
    rows: [
      {
        title: "Win the Seattle Map for “Home Inspectors Seattle WA”",
        body: [
          "Seattle buyers often book a pre-inspection before they even write an offer, and they call one of the first three names on the map. We tighten your profile, build neighborhood pages for Ballard, West Seattle and Capitol Hill, and keep reviews flowing.",
        ],
        points: [
          "Neighborhood pages",
          "Sewer scope listed",
          "Saturday hours shown",
          "Rank grid tracking",
        ],
        cta: "See My Seattle Ranking",
        ui: {
          kind: "maps",
          query: "home inspectors seattle wa",
          city: "Seattle",
          category: "Home inspector · WA licensed",
        },
      },
      {
        title: "AI SEO for Home Inspectors on the Eastside and in Spokane",
        body: [
          "Eastside tech buyers and families moving to Spokane ask ChatGPT and AI Overviews what a pre-inspection covers and who does sewer scopes. With ",
          {
            href: "/services/ai-seo-services",
            label: "answer engine optimization",
          },
          ", those tools get the same facts from your site, listings and reviews, so they can recommend you.",
        ],
        points: [
          "Pre-inspection answer pages",
          "Sewer scope FAQs",
          "DOL license in schema",
          "Listings that line up",
        ],
        cta: "Test My AI Results",
        ui: {
          kind: "ai",
          query: "who does pre-inspections and sewer scopes in bellevue",
          intro: "For a pre-inspection with a sewer scope in Bellevue,",
          bullets: [
            "WA licensed inspector",
            "Reports the same day",
            "Covers Kirkland and Redmond",
          ],
        },
      },
      {
        title: "Reviews That Lift You for “Home Inspector Tacoma WA”",
        body: [
          "Tacoma and Pierce County buyers read reviews closely, and agents check them before sharing your name. We text clients when the report arrives, draft owner replies you approve and keep recent reviews naming neighborhoods and findings near the top.",
        ],
        points: [
          "Review text per report",
          "Replies you approve",
          "Reviews that name findings",
          "Negative reviews caught early",
        ],
        cta: "Grow My Tacoma Reviews",
        ui: {
          kind: "reviews",
          sms: "Thanks for booking your Tacoma inspection with us! Your report is ready. Would you leave a short review?",
          reviewer: "Jordan",
          review:
            "Booked a pre-inspection the night before our offer. Clear report, sewer scope video included, and our offer went in on time.",
          reply:
            "Thanks, Jordan! Glad the timing worked, and congrats on the house.",
        },
      },
    ],
  },
  regions: {
    title: "Washington Markets We Cover, Puget Sound to the Palouse",
    lead: "Wet-side and dry-side buyers search differently, which is why every region gets its own pages, service areas and ad settings.",
    items: [
      {
        name: "Seattle",
        cities: "Seattle · Ballard · West Seattle · Shoreline",
        focus: "Pre-inspections and sewer scopes for older homes",
      },
      {
        name: "The Eastside",
        cities: "Bellevue · Redmond · Kirkland · Sammamish",
        focus: "Tech relocation buyers who book online",
      },
      {
        name: "Pierce & Thurston",
        cities: "Tacoma · Puyallup · Lakewood · Olympia",
        focus: "Military moves near JBLM and first-time buyers",
      },
      {
        name: "Snohomish & North Sound",
        cities: "Everett · Lynnwood · Marysville · Bellingham",
        focus: "Commuter suburbs and crawlspace questions",
      },
      {
        name: "Spokane & Inland Northwest",
        cities: "Spokane · Spokane Valley · Liberty Lake · Cheney",
        focus: "A growing market with fewer strong competitors",
      },
      {
        name: "Vancouver & Clark County",
        cities: "Vancouver · Camas · Battle Ground · Ridgefield",
        focus: "Keeping Washington buyers apart from Oregon clicks",
      },
    ],
    other:
      "Covering the Tri-Cities, Wenatchee or Yakima? We'll set up pages there too.",
  },
  reviews: {
    title: "See What Owners Say About Us on Google",
    lead: "A 5.0 Google rating from inspectors, contractors and other owners.",
  },
  pricing: {
    title: "Home Inspector Lead Generation, Washington Plans",
    lead: [
      "No contract and a 0% markup on your ad budget. Curious where you rank today? Try our ",
      {
        href: "/google-maps-business-ranking-tool-online",
        label: "free map rank checker",
      },
      ".",
    ],
    compareTitle: "Washington Plans Compared",
    compareLead: "From one city to both sides of the state.",
    addOnsTitle: "Add-Ons for the Spring Market",
    addOnsLead: "More neighborhood pages or ad pushes when listings jump.",
    customTitle: "Inspectors on both sides of the Cascades?",
    customText: "Share your cities and team size for a custom plan.",
  },
  faq: {
    title: "Home Inspector Marketing, Washington State FAQ",
    lead: "Licensing, WDO rules, pre-inspections, pricing pages and plans. Questions left? Call us.",
    items: [
      {
        q: "What does Washington require of licensed home inspectors?",
        a: "Home inspector licenses come from the Washington State Department of Licensing, after at least 120 hours of approved classroom training, supervised field training and a board-approved exam. Your license number goes on your profile, website and schema so buyers and AI tools can confirm it.",
      },
      {
        q: "Can I include WDO findings in a home inspection? Washington State law limits it",
        a: "Only a licensed Structural Pest Inspector. The Washington State Department of Agriculture says a home inspector can't inspect for or report wood-destroying organisms without that license. If you hold it, we promote WDO inspections on your pages; if not, we word your services so they stay within the rules.",
      },
      {
        q: "Do Seattle buyers want “home inspection Seattle cost” answered online?",
        a: "Yes. Buyers facing an offer deadline won't wait for an emailed quote. Post your fees, a sewer scope bundle and online booking on one page, and that search turns into a scheduled inspection the same evening.",
      },
      {
        q: "Is Eastern Washington worth targeting for “home inspector Spokane WA”?",
        a: "Often, yes. Spokane and Spokane Valley keep growing, and competition on the map is lighter than around Seattle. A Spokane profile or service area, local pages and steady reviews can bring direct bookings quickly, especially from buyers relocating from the west side.",
      },
      {
        q: "Should I market pre-inspections before buyers make an offer?",
        a: "In fast Puget Sound markets, yes. Many buyers inspect before writing an offer, so they need someone who can come within a day or two. A pre-inspection page, online booking and Saturday availability on your profile help you win that rush.",
      },
      {
        q: "How do I stop Washington ads from showing in D.C. or Oregon?",
        a: "We target your ads by county and city instead of the word Washington, exclude the D.C. area and fence Vancouver campaigns away from Portland clicks. Search terms are reviewed weekly, so budget stays on buyers who can actually book you.",
      },
      {
        q: "What do Washington inspectors pay for marketing with Zonic Media?",
        a: "Washington pricing tops out at $1,500 a month, with $297 and $750 tiers below it, and every tier can be cancelled any month. You pay Google for ads yourself, at a 0% markup from our side. One-city inspectors usually start on the first tier; teams covering several counties need more.",
      },
    ],
  },
  audit: {
    title: "Request a Free Washington State Inspector Audit",
    lead: [
      "Our team looks at where you rank in each Washington city, how your ",
      { href: "/services/web-design", label: "booking flow" },
      ", profile and reviews compare, and how you show up for sewer scope searches. Working in Oregon or California too? We also grow inspectors in ",
      { href: "/services/home-inspector-marketing/oregon", label: "Oregon" },
      " and ",
      {
        href: "/services/home-inspector-marketing/california",
        label: "California",
      },
      ".",
    ],
    points: [
      "Each Washington city reviewed",
      "Sewer scope and pre-inspection searches tested",
      "Cancel anytime, plans from $297",
    ],
    form: {
      formType: "home-inspector-marketing-washington",
      badge: "Free Washington audit",
      title: "Claim Your Free Washington Inspection Audit",
      subtitle: "Free and fast, with nothing to sign.",
      submitText: "Send My Washington Audit",
      messageLabel: "Your Washington cities and add-ons",
      messagePlaceholder:
        "e.g. Tacoma and Puyallup, pre-inspections and sewer scopes",
    },
  },
  banner: {
    title: "Be Booked Before the Offer Deadline in Washington",
    lead: "See your rank on both sides of the Cascades with a free audit.",
    icons: ["inspect", "water"],
  },
};
