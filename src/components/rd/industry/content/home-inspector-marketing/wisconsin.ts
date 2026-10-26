import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* WISCONSIN HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush returned no_api_units on 24 Oct, so resource_organic
   and phrase_these could not run; keywords come from web research. The
   live title's core term "Home Inspector Marketing in Wisconsin" is kept
   in the title, and every phrase in the live keywords meta sits in the
   title, H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): Wisconsin home inspectors register with DSPS
   after 40 hours of approved education plus the national exam and a state
   statutes-and-rules exam; septic (POWTS) inspections are a separate state
   credential, and some counties require one at property transfer;
   Milwaukee and Madison listings sell radon, well water, septic and sewer
   scope add-ons, and stress freeze-thaw foundations, ice dams and basement
   moisture. Fresh wording only. */

export const CONTENT: LocationContent = {
  draftSlug: "wisconsin-2",
  liveUrl: "/services/home-inspector-marketing/wisconsin",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Wisconsin",
  meta: {
    title: "Home Inspector Marketing in Wisconsin | SEO, Maps & Ads",
    description:
      "Wisconsin home inspector marketing for Milwaukee, Madison, Green Bay and the Fox Valley: Map Pack rankings, inspector SEO, radon and rural add-on pages and ads.",
    keywords: [
      "home inspector marketing wisconsin",
      "home inspector seo wisconsin",
      "home inspector milwaukee wi",
      "home inspection madison wi",
      "home inspector green bay",
      "home inspector wisconsin dells",
      "home inspection cost wisconsin",
      "home inspector advertising",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation wisconsin",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.amberBlue,
  hero: {
    h1: "Wisconsin Home Inspector Marketing Agency for Year-Round Bookings",
    h1NoWrap: "Year-Round Bookings",
    lead: [
      "Wisconsin's market jumps after the thaw and slows when the snow returns, so the inspectors buyers find first get the spring rush. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing plans",
      },
      " keep you visible all year, from the Google map and AI answers to ads running from Milwaukee to the Northwoods.",
    ],
    cta: "Get My Wisconsin Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 from Milwaukee to Green Bay",
        sub: "Metro and lake-country towns, each with its own pages",
        chips: ["Milwaukee", "Madison", "Green Bay", "Appleton", "+ your town"],
      },
      left: {
        icon: "snow",
        title: "Busy past the thaw",
        sub: "Radon and pre-listing offers fill winter weeks",
      },
      right: {
        icon: "water",
        title: "More rural add-on bookings",
        sub: "Well water and septic pages for country buyers",
      },
      bottom: {
        title: "Referrals from lake-country agents",
        sub: "Reviews and reports that make you an easy recommendation",
      },
    },
  },
  services: {
    title: "Home Inspection Marketing Built for Wisconsin Inspectors",
    lead: "In Wisconsin, one team plans your inspection marketing by season.",
    cta: "Audit My Wisconsin Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles for DSPS-Registered Inspectors",
        desc: "Your DSPS registration, counties served, radon and other add-ons and steady job photos go on your profile, so you rank in each town you cover.",
        points: [
          "Registration number listed",
          "County service areas",
          "Photos through winter",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Upgrade my listing",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO Wisconsin Buyers Find in Every County",
        desc: "Pages for Waukesha, Brookfield, Appleton and each town you serve, plus radon, well water, septic and older-basement pages buyers search.",
        points: [
          "Town pages that rank",
          "Radon testing page",
          "Well and septic pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home services SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Home Inspector Advertising on Google and Local Services Ads",
        desc: "Paid search plus Local Services Ads that ramp up as spring listings land and ease off in winter, aimed at buyers already under contract.",
        points: [
          "Thaw-season ramp-up",
          "Under-contract searches",
          "LSA budget managed",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads for my business" },
        ],
      },
      {
        icon: "monitor",
        title: "Websites That Book Inspections and Radon Tests",
        desc: "A quick mobile site with online booking, add-on checkboxes for radon and water tests and a sample report buyers can open anywhere.",
        points: [
          "Book online any hour",
          "Radon and water add-ons",
          "Sample report page",
        ],
        links: [{ href: "/services/web-design", label: "Web design services" }],
      },
      {
        icon: "star",
        title: "Reviews and Agent Pages From Milwaukee to Madison",
        desc: "Clients get a review request after each report, you get reply drafts in your own voice, and agents get a page with coverage, add-ons and turnaround.",
        points: [
          "Review asks per report",
          "Your-voice replies",
          "Page for agents",
        ],
        links: [{ href: "/services", label: "See what else we do" }],
      },
      {
        icon: "shield",
        title: "Profile Suspended or Never Verified?",
        desc: "We figure out why Google suspended your profile or blocked verification, fix the cause and get the appeal filed; 900+ profiles reinstated.",
        points: ["Cause figured out", "Fix applied", "Appeal submitted"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my business profile",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Get my listing verified",
          },
        ],
      },
    ],
  },
  growth: {
    title: "AI SEO for Home Inspectors, Maps and Ads Across Wisconsin",
    lead: "How we keep you booked: the map, AI answers and ads timed to the season.",
    rows: [
      {
        title: "Hold a Top Spot for “Home Inspector Milwaukee WI”",
        body: [
          "Milwaukee buyers searching from Wauwatosa, Bay View or Brookfield each see a different set of map results. We set your service area, build neighborhood and suburb pages, and earn reviews that mention older basements and block walls, so your pin shows across the metro.",
        ],
        points: [
          "Suburb and neighborhood pages",
          "Radon listed as a service",
          "Winter photo posts",
          "Map rank grid",
        ],
        cta: "See My Milwaukee Ranking",
        ui: {
          kind: "maps",
          query: "home inspector milwaukee wi",
          city: "Milwaukee",
          category: "Home inspector · WI registered",
        },
      },
      {
        title: "When AI Gets Asked About “Home Inspection Madison WI”",
        body: [
          "Madison buyers, many new to Wisconsin, turn to ChatGPT or AI Overviews to learn if radon is a concern and who tests for it. Our ",
          {
            href: "/services/ai-seo-services",
            label: "generative engine optimization",
          },
          " gives your site, listings and reviews matching facts, so those tools suggest your company.",
        ],
        points: [
          "Radon answer pages",
          "DSPS details in schema",
          "Consistent listings",
          "Reviews naming tests",
        ],
        cta: "Check My AI Mentions",
        ui: {
          kind: "ai",
          query: "home inspection madison wi with radon test",
          intro: "For a Madison home inspection with a radon test,",
          bullets: [
            "Wisconsin registered inspector",
            "Covers Middleton and Fitchburg",
            "Continuous radon monitoring",
          ],
        },
      },
      {
        title: "Ads That Ring Your Phone When the Thaw Hits",
        body: [
          "Wisconsin listings surge in spring, and buyers under contract call the first inspector they see. We ramp up ads as the season starts, record every call, tag it by service and town, and move spend to whatever books inspections fastest.",
        ],
        points: [
          "Seasonal ad calendar",
          "Calls tagged by service",
          "Spend by town",
          "Monthly booking report",
        ],
        cta: "Track My Wisconsin Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Fox Valley",
          calls: [
            {
              service: "Buyer inspection + radon",
              source: "Google Ads",
              when: "8:45 AM",
            },
            {
              service: "Well water test add-on",
              source: "Google Maps",
              when: "11:30 AM",
            },
            {
              service: "Pre-listing inspection",
              source: "Local Services Ads",
              when: "4:15 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Wisconsin Regions Where We Grow Inspection Companies",
    lead: "City, suburb and lake-country buyers don't search alike, so every region is set up with dedicated pages, service areas and ad timing.",
    items: [
      {
        name: "Metro Milwaukee",
        cities: "Milwaukee · Wauwatosa · West Allis · Brookfield",
        focus: "Older-home and basement pages for city buyers",
      },
      {
        name: "Waukesha & Lake Country",
        cities: "Waukesha · Pewaukee · Oconomowoc · Hartland",
        focus: "Radon and suburban resale inspection searches",
      },
      {
        name: "Madison & Dane County",
        cities: "Madison · Middleton · Fitchburg · Sun Prairie",
        focus: "Campus and tech-job relocations booking online",
      },
      {
        name: "Green Bay & the Fox Valley",
        cities: "Green Bay · Appleton · Oshkosh · De Pere",
        focus: "Profiles that cover several Fox Cities at once",
      },
      {
        name: "Southeast Lakeshore",
        cities: "Kenosha · Racine · Sheboygan · Manitowoc",
        focus: "Lakeshore towns and Chicago-area commuter buyers",
      },
      {
        name: "Northwoods & the Dells",
        cities: "Wisconsin Dells · Minocqua · Rhinelander · Eagle River",
        focus: "Cabin buyers with well and septic questions",
      },
    ],
    other:
      "Inspecting in Eau Claire, La Crosse or Wausau? We'll cover those towns too.",
  },
  reviews: {
    title: "Wisconsin Owners, Check Our 5.0 Google Rating",
    lead: "What inspection companies and other local owners write about us.",
  },
  pricing: {
    title: "Home Inspector Lead Generation, Wisconsin Pricing",
    lead: [
      "Tiers renew monthly with a 0% ad-spend markup. Losing calls to a suspended listing? ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Profile reinstatement help",
      },
      " comes with every plan.",
    ],
    compareTitle: "How the Wisconsin Plans Differ",
    compareLead:
      "Single metro, or the lakes and Northwoods too: see each tier.",
    addOnsTitle: "Add-Ons for Thaw Season",
    addOnsLead: "More town pages or ad pushes once spring listings arrive.",
    customTitle: "Covering Milwaukee and Madison both?",
    customText:
      "Share your towns and how many inspectors you run for one quote.",
  },
  faq: {
    title: "Your Home Inspector Marketing Wisconsin Questions",
    lead: "Registration, radon, wells, towns and pricing. Prefer a conversation? Call us.",
    items: [
      {
        q: "How are Wisconsin home inspectors credentialed, and should I advertise it?",
        a: "Wisconsin home inspectors register with DSPS, the state's safety and professional services department, after 40 hours of approved education and passing both a national exam and a state statutes and rules exam. Yes, advertise it: we add your registration to your profile, site and schema.",
      },
      {
        q: "Can a home inspector Green Bay agents know also rank in Appleton?",
        a: "Yes, if Appleton is inside your real service area. We add the Fox Cities to your profile's service areas, build an Appleton page with local details and ask clients there for reviews, so you appear in both cities instead of only near your office.",
      },
      {
        q: "Should I target “home inspector Wisconsin Dells” cabin and lake buyers?",
        a: "If you travel there, yes. Buyers of Dells and Northwoods cabins often live in Chicago or the Twin Cities and search from home. Pages that cover well water, septic coordination and remote booking help you win those trips and justify the drive.",
      },
      {
        q: "Should my website list home inspection cost? Wisconsin buyers compare first.",
        a: "Yes. List your fees, what each inspection covers and what radon or water tests add, then let buyers book on that same page. Your Google profile and ads point straight to it, so no one has to call around to compare.",
      },
      {
        q: "Is radon testing worth pushing in Wisconsin's slow season?",
        a: "Yes. Radon is a common concern across Wisconsin, and homeowners can test any time of year, not just during a sale. Winter posts, a radon page and a booking checkbox keep that add-on selling when buyer inspections slow down.",
      },
      {
        q: "Can I market well and septic inspections up north?",
        a: "Only for work you're credentialed to do. Septic (POWTS) inspections need their own state credential, and some counties require one when a property changes hands, so many home inspectors partner with a licensed specialist. We word your pages around what you offer and who handles the rest.",
      },
      {
        q: "How much does marketing cost for a Wisconsin inspection company?",
        a: "Wisconsin plans are priced at $297, $750 and $1,500, renewing monthly with no annual contract. Ad spend is charged to you by Google itself, marked up 0%. One-metro inspectors often begin on the first tier and add towns or spring campaigns as bookings climb.",
      },
    ],
  },
  audit: {
    title: "Get a Free Wisconsin Home Inspector Marketing Audit",
    lead: [
      "The audit shows your rank in each Wisconsin town you cover, how your profile, site and reviews compare, and whether radon and rural add-ons show up. Inspecting over the border? We also grow inspectors in ",
      {
        href: "/services/home-inspector-marketing/minnesota",
        label: "Minnesota",
      },
      ", ",
      {
        href: "/services/home-inspector-marketing/michigan",
        label: "Michigan",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/illinois",
        label: "Illinois",
      },
      ".",
    ],
    points: [
      "Every town you inspect in, checked",
      "Radon and rural searches tested",
      "Plans from $297/mo with no contract",
    ],
    form: {
      formType: "home-inspector-marketing-wisconsin",
      badge: "Free Wisconsin audit",
      title: "Request My Free Wisconsin Audit",
      subtitle: "It's free, and you're not committing to anything.",
      submitText: "Send My Wisconsin Audit",
      messageLabel: "Your Wisconsin towns and services",
      messagePlaceholder:
        "e.g. Waukesha and Brookfield, buyer inspections and radon",
    },
  },
  banner: {
    title: "Stay Booked in Wisconsin Long After the Thaw",
    lead: "Find out how you rank from Milwaukee to the Northwoods, free.",
    icons: ["snow", "home"],
  },
};
