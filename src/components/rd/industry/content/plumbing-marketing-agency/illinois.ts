import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* ILLINOIS PLUMBING MARKETING — redesign draft content (24 Oct 2026).
   Semrush US (24 Oct): resource_organic has no ranking data for the live
   URL, so the title keeps its head term "plumbing marketing agency in
   illinois". Volumes used: plumber chicago 1,900 · emergency plumber
   chicago 1,300 · water heater repair chicago 880 · drain cleaning
   chicago 590 · sewer line repair chicago 480 · flood control chicago
   480 · sump pump repair chicago 390 · plumber naperville 390 · plumbing
   marketing chicago 30. Angles from web research: Chicago freezes and
   basement flooding (sump pumps, snowmelt), older housing stock. */

export const CONTENT: LocationContent = {
  draftSlug: "illinois-2",
  liveUrl: "/services/plumbing-marketing-agency/illinois",
  parent: {
    href: "/services/plumbing-marketing-agency",
    label: "Plumbing Marketing Agency",
    niche: "Plumbing",
  },
  place: "Illinois",
  meta: {
    title: "Plumbing Marketing Agency in Illinois | Chicago Maps & Ads",
    description:
      "Illinois plumbing marketing for Chicago, the suburbs and downstate: Map Pack rankings, plumber SEO, Google Ads and more sump pump, frozen pipe and sewer calls.",
    keywords: [
      "plumbing marketing agency illinois",
      "plumbing marketing chicago",
      "plumber chicago",
      "emergency plumber chicago",
      "sump pump repair chicago",
      "plumbing company chicago il",
    ],
  },
  palette: PALETTES.skyAmber,
  hero: {
    h1: "Illinois Plumbing Marketing Agency Built for Chicago Winters",
    h1NoWrap: "Chicago Winters",
    lead: [
      "When a pipe bursts in Oak Park or a sump pump quits in Naperville, homeowners call the plumber Google shows first. Our ",
      {
        href: "/services/plumbing-marketing-agency",
        label: "plumbing marketing agency",
      },
      " puts your company in that spot across Chicago, the suburbs and downstate Illinois, with Maps, ads and reviews working together.",
    ],
    cta: "Get My Illinois Plumbing Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 on the Chicago map",
        sub: "And in every suburb and downstate town your vans reach",
        chips: ["Chicago", "Naperville", "Aurora", "Rockford", "+ your town"],
      },
      left: {
        icon: "snow",
        title: "Freeze-week calls caught",
        sub: "Ads and posts go live as the cold snap lands",
      },
      right: {
        icon: "water",
        title: "More sump pump jobs",
        sub: "Pages for flooded basements and backup pumps",
      },
      bottom: {
        title: "Busy after the thaw too",
        sub: "Sewer, drain and water heater offers for spring",
      },
    },
  },
  services: {
    title: "Six Ways We Bring Illinois Plumbers More Calls",
    lead: "Chicago or downstate, Illinois plumbers trust one team with it all.",
    cta: "Check My Illinois Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Pack Spots From the Loop to Peoria",
        desc: "We tune categories, service areas, photos and hours so your profile climbs the map in Chicago, the collar counties and downstate cities.",
        points: [
          "Profile rebuilt for plumbing",
          "Suburb service areas",
          "Fresh job photos weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile tuning",
          },
        ],
      },
      {
        icon: "search",
        title: "Plumber SEO and Suburb Pages",
        desc: "A page for each city and core job, from sewer line repair in Chicago to water heater work in Naperville and Schaumburg.",
        points: [
          "Neighborhood and suburb pages",
          "A page for every job type",
          "Local citations cleaned up",
        ],
        links: [
          {
            href: "/services/industry/seo-services-for-plumber",
            label: "SEO for plumbers",
          },
        ],
      },
      {
        icon: "target",
        title: "Google Ads and Local Services Ads",
        desc: "Emergency campaigns for burst pipes and backed-up drains, plus the Google Guaranteed badge, with each call traced to the job it booked.",
        points: [
          "Burst pipe ad groups",
          "Google Guaranteed setup",
          "Call recording and scoring",
        ],
        links: [{ href: "/services/google-ads", label: "Managed Google Ads" }],
      },
      {
        icon: "monitor",
        title: "Plumbing Websites That Ring Your Phone",
        desc: "Fast mobile sites with a tap-to-call bar, clear service menus and suburb pages that turn a Chicago search into a booked visit.",
        points: [
          "Big call button up top",
          "Book-a-visit form",
          "Quick to load on phones",
        ],
        links: [
          {
            href: "/services/plumbing-website-design",
            label: "Plumbing website design",
          },
          { href: "/services/web-design", label: "Our web design work" },
        ],
      },
      {
        icon: "star",
        title: "More Five-Star Reviews After Each Job",
        desc: "A text goes out as the job wraps, so happy customers in Evanston or Joliet post a review while the fix is fresh.",
        points: [
          "Automatic review texts",
          "Replies written for you",
          "Low ratings flagged early",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service SEO",
          },
        ],
      },
      {
        icon: "shield",
        title: "Back Online After a Profile Suspension",
        desc: "If Google locks your listing in the middle of winter, we file the appeal or fix the stuck verification. 900+ profiles reinstated so far.",
        points: [
          "Appeal written and filed",
          "Video verification help",
          "Address issues sorted",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Profile reinstatement",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Help with verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Illinois Plumbers Win More Calls With Us",
    lead: "On the map, inside AI answers and across your review profile, season after season.",
    rows: [
      {
        title: "Own the Map When Chicago Needs an Emergency Plumber",
        body: [
          "A frozen line at 2 a.m. sends Chicagoans straight to Google Maps, and the first three listings get the call. We sharpen your profile, add neighborhood pages and keep reviews coming so your pin sits in that top group.",
        ],
        points: [
          "Hours set for emergencies",
          "Neighborhood landing pages",
          "Photos from real jobs",
          "Categories for every service",
        ],
        cta: "See Where I Rank in Chicago",
        ui: {
          kind: "maps",
          query: "emergency plumber chicago",
          city: "Chicago",
          category: "Emergency plumber · Open now",
        },
      },
      {
        title: "Get Picked When Illinois Homeowners Ask AI for a Plumber",
        body: [
          "Chicagoland homeowners now put plumbing questions to ChatGPT and Gemini, or read Google's AI Overview before calling anyone. Those answers lean on your site, reviews and listings, so our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization",
          },
          " makes your company the answer they give.",
        ],
        points: [
          "Answer-ready service pages",
          "Consistent name and address",
          "Review themes AI can read",
          "Schema on every page",
        ],
        cta: "Check My AI Answers",
        ui: {
          kind: "ai",
          query: "sump pump repair chicago",
          intro: "For a fast sump pump fix in Chicago,",
          bullets: [
            "Same-day basement flood calls",
            "Battery backup pumps installed",
            "Praised by homeowners on the Northwest Side",
          ],
        },
      },
      {
        title: "Turn Every Fixed Pipe Into a Fresh Google Review",
        body: [
          "Busy homeowners rarely leave a review unless someone asks. We text them a link the moment your tech closes the ticket, write polite replies and flag any unhappy note before it spreads across Schaumburg or Evanston.",
        ],
        points: [
          "Text sent at job close",
          "Replies in your voice",
          "Review link on invoices",
          "Monthly rating report",
        ],
        cta: "Get More Illinois Reviews",
        ui: {
          kind: "reviews",
          sms: "Thanks for having us out to fix the frozen line today, Karen! Mind sharing a quick review?",
          reviewer: "Karen",
          review:
            "The pipe under our kitchen sink froze and split on the coldest night of the year. They came out fast, fixed it and checked the rest of the basement.",
          reply:
            "Thanks, Karen. Glad the kitchen is dry again. Stay warm out there!",
        },
      },
    ],
  },
  regions: {
    title: "Illinois Regions Where We Grow Plumbers",
    lead: "Chicago neighborhoods, collar counties and downstate cities search differently, so each region gets its own pages and Map Pack plan.",
    items: [
      {
        name: "City of Chicago",
        cities: "Lincoln Park · Pilsen · Bridgeport · Rogers Park",
        focus: "Neighborhood pages for older two-flats and garden units",
      },
      {
        name: "North & Northwest Suburbs",
        cities: "Evanston · Arlington Heights · Schaumburg",
        focus: "Sump pump and water heater searches in basement homes",
      },
      {
        name: "West & Southwest Suburbs",
        cities: "Naperville · Aurora · Joliet",
        focus: "Growing towns that each need their own service area",
      },
      {
        name: "Northern Illinois",
        cities: "Rockford · Elgin · DeKalb",
        focus: "Map Pack work for owner-run shops beyond the city",
      },
      {
        name: "Central Illinois",
        cities: "Springfield · Peoria · Bloomington · Champaign",
        focus: "Town pages that reach small-city and farm customers",
      },
      {
        name: "Metro East & Southern Illinois",
        cities: "Belleville · Edwardsville · Carbondale",
        focus: "Pages that keep you visible on the Illinois side of the river",
      },
    ],
    other: "Working somewhere else in Illinois? Ask us about your town.",
  },
  reviews: {
    title: "Google Reviews From Plumbers and Other Trades",
    lead: "Five-star feedback from contractors we grow, straight from Google.",
  },
  pricing: {
    title: "Illinois Plumbing Marketing Plans",
    lead: [
      "Every plan is month to month, with ad spend passed through at a 0% markup. Want ",
      { href: "/services/google-ads", label: "paid search" },
      " running before freeze season? It plugs into any plan.",
    ],
    compareTitle: "Line Up the Illinois Plans",
    compareLead: "One suburb or the whole state, side by side.",
    addOnsTitle: "Add-Ons for Cold Snaps and Spring Floods",
    addOnsLead:
      "Extra city pages or emergency campaigns when the weather turns.",
    customTitle: "Trucks in more than one Illinois metro?",
    customText: "Send us your branches and towns for a custom quote.",
  },
  faq: {
    title: "Questions Illinois Plumbers Ask Us",
    lead: "Plans, suburbs, winter and Google profiles. Rather talk it through? Give us a call.",
    items: [
      {
        q: "How much does plumbing marketing cost in Illinois?",
        a: "Pricing is $297, $750 or $1,500 monthly, with no long contract. Ad spend is billed at cost with a 0% markup. Which plan suits you comes down to how many Illinois cities you serve and whether you want ads alongside Maps and SEO.",
      },
      {
        q: "Can you rank my company in Chicago and the suburbs at the same time?",
        a: "Yes. Your Google profile ranks strongest near its address, so we pair it with a page for each suburb or neighborhood you work in, plus reviews that mention those towns. That's how a Northwest Side shop shows up in Park Ridge too.",
      },
      {
        q: "How can I get more sump pump and flood control calls?",
        a: "Build pages for sump pump repair, battery backups and flood control, then run ads that switch on when heavy rain or snowmelt is forecast. We also list those jobs as services on your Google profile, so it matches basement searches across Cook, DuPage and Lake counties.",
      },
      {
        q: "What should Illinois plumbers do before a polar vortex hits?",
        a: "Have emergency pages, 24-hour hours and burst pipe ads ready before the forecast turns. We schedule Google posts on keeping pipes from freezing, widen ad coverage for burst pipe searches and keep call tracking on, so you catch the rush instead of reacting to it.",
      },
      {
        q: "How long does it take to move up on Google Maps in Chicago?",
        a: "It depends on how crowded your area is. Profile fixes can show within weeks, while dense Chicago neighborhoods usually take a few months of reviews, pages and posts. We check your rank on a grid map every month so you can watch each move.",
      },
      {
        q: "Can you help if my plumbing profile is suspended or won't verify?",
        a: "Yes. We find what triggered the suspension, fix it and file the appeal, and we coach you through Google's video check when it's requested. We've reinstated 900+ profiles for owners across the US.",
      },
    ],
  },
  audit: {
    title: "Get a Free Illinois Plumbing Marketing Audit",
    lead: [
      "We check your map rank in each Illinois town you serve, plus your profile, site and reviews.",
    ],
    points: [
      "Ranking checked town by town",
      "Freeze and flood searches reviewed",
      "Plans from $297, month to month",
    ],
    form: {
      formType: "plumbing-marketing-illinois",
      badge: "Free Illinois audit",
      title: "Request Your Free Illinois Plumbing Audit",
      subtitle: "No cost and no contract to sign.",
      submitText: "Send My Illinois Audit",
      messageLabel: "Your Illinois service area and jobs",
      messagePlaceholder:
        "e.g. Naperville and Aurora, sump pumps and water heaters",
    },
  },
  banner: {
    title: "Be the Plumber Illinois Calls When the Pipes Freeze",
    lead: "Your free check maps your ranking across the towns you serve.",
    icons: ["snow", "water"],
  },
};
