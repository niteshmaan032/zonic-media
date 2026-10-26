import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* OKLAHOMA HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush returned "API units balance is zero" on 24 Oct, so
   the live URL's ranking report could not be pulled. The live title's core
   term ("Home Inspector Marketing in Oklahoma") is kept, and every phrase
   in the live keywords meta sits in the title, H1, an H2/H3 or an FAQ
   question. Keywords and angles came from web research (24 Oct): the
   Construction Industries Board licenses inspectors (90 hours of training,
   national exam); wood-destroying insect reports use the state agriculture
   department's official ODAFF-1 form; OKC-area soils are shrink-swell clay
   (foundation movement); top OKC results sell builder's 11-month warranty
   inspections, termite, sewer scope and online booking across Edmond,
   Moore, Yukon, Mustang and Norman. No volumes available. */

export const CONTENT: LocationContent = {
  draftSlug: "oklahoma-2",
  liveUrl: "/services/home-inspector-marketing/oklahoma",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Oklahoma",
  meta: {
    title: "Home Inspector Marketing in Oklahoma | SEO for OKC & Tulsa",
    description:
      "Oklahoma home inspector marketing: Map Pack rankings, home inspector SEO and Google Ads for Oklahoma City, Tulsa, Edmond and Norman, plus termite and warranty pages.",
    keywords: [
      "home inspector marketing oklahoma",
      "home inspector seo oklahoma",
      "home inspector oklahoma city",
      "home inspectors oklahoma city",
      "home inspector tulsa ok",
      "best home inspector tulsa",
      "home inspector edmond ok",
      "home inspection cost oklahoma",
      "home inspector lead generation oklahoma",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.indigoRose,
  hero: {
    h1: "Oklahoma Home Inspector Marketing for OKC and Tulsa Bookings",
    h1NoWrap: "OKC and Tulsa",
    lead: [
      "Oklahoma buyers search for an inspector the week their offer is accepted, and builders' warranty clocks send new-home owners looking too. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " puts you first for both groups in Oklahoma City, Edmond, Norman and Tulsa.",
    ],
    cta: "Get My Oklahoma Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 from OKC to Tulsa",
        sub: "Metro cores, fast-growing suburbs and smaller towns",
        chips: ["Oklahoma City", "Tulsa", "Edmond", "Norman", "+ your town"],
      },
      left: {
        icon: "bug",
        title: "More termite reports",
        sub: "Pages and add-ons for wood-destroying insect checks",
      },
      right: {
        icon: "home",
        title: "11-month warranty jobs",
        sub: "Pages for new-build owners before coverage ends",
      },
      bottom: {
        title: "Agents who keep calling",
        sub: "Fast reports and reviews worth passing along",
      },
    },
  },
  services: {
    title: "What We Run for Home Inspectors, Oklahoma City to Tulsa",
    lead: "Oklahoma inspectors lean on one team for Maps, SEO, ads and reviews.",
    cta: "Audit My Oklahoma Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Profiles for OKC and Tulsa Suburbs",
        desc: "Every suburb you drive to gets listed, your CIB license goes on the profile and new photos go up regularly, so your pin climbs.",
        points: [
          "Every suburb listed",
          "CIB license displayed",
          "Fresh photos each week",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Google profile optimization",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO Oklahoma Searchers Find, Suburb by Suburb",
        desc: "Pages for Moore, Yukon, Broken Arrow and Owasso, plus termite, sewer scope, foundation and new-construction pages people search for.",
        points: [
          "Suburb landing pages",
          "Termite and sewer pages",
          "New-build inspection pages",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Local SEO for service firms",
          },
        ],
      },
      {
        icon: "target",
        title: "Ads for Buyers on a Deadline",
        desc: "Google Ads on inspection searches and per-lead Local Services Ads, fenced to the counties you serve, with every call tracked.",
        points: [
          "Contract-week keywords",
          "Pay-per-lead LSA",
          "Calls tracked by source",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads campaigns" },
        ],
      },
      {
        icon: "monitor",
        title: "A Site That Books While You're on a Roof",
        desc: "Mobile-first pages handle scheduling, termite or sewer add-ons and a sample report, so buyers book even while your phone stays in your pocket.",
        points: [
          "Self-serve scheduling",
          "Add-ons at checkout",
          "Sample report preview",
        ],
        links: [
          { href: "/services/web-design", label: "Build my website" },
          {
            href: "/home-inspector-website-design-agency-us/offer",
            label: "Inspector website deal",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Realtor Visibility",
        desc: "Review texts after each report and a realtor page that holds your booking link, which keeps agents in Edmond, Norman and Tulsa sending buyers.",
        points: [
          "Review texts after reports",
          "Realtor booking page",
          "Replies that sound like you",
        ],
        links: [
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "See my Maps rank",
          },
        ],
      },
      {
        icon: "shield",
        title: "Suspended or Unverified? We Fix It",
        desc: "When Google locks your listing, we trace the reason, clean up the problem and push the appeal through, the same way we've reinstated 900+ profiles.",
        points: [
          "Reason pinpointed",
          "Corrections made",
          "Appeal filed and tracked",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Profile reinstatement",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verification support",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Home Inspector Lead Generation Oklahoma Firms Can Track",
    lead: "Top-three map spots, AI mentions and call tracking that reveals which source fills your schedule.",
    rows: [
      {
        title:
          "Hold the Map Pack When Buyers Search Home Inspector Oklahoma City",
        body: [
          "Buyers in Moore, Yukon and Mustang check Google Maps first and ring one of the top three inspectors. We complete your profile, build suburb pages and keep new reviews landing, which holds your company in that group across the metro.",
        ],
        points: [
          "Metro suburbs mapped",
          "Termite reports listed",
          "Reviews naming suburbs",
          "Weekly rank checks",
        ],
        cta: "See My OKC Ranking",
        ui: {
          kind: "maps",
          query: "home inspector oklahoma city",
          city: "Oklahoma City",
          category: "Home inspector · Termite reports",
        },
      },
      {
        title: "Get Picked by AI for Home Inspector Tulsa OK Questions",
        body: [
          "Buyers relocating to Tulsa often ask ChatGPT or Gemini which inspectors handle foundations and older roofs. Through our ",
          {
            href: "/services/ai-seo-services",
            label: "AI search optimization service",
          },
          ", your pages, reviews and listings give those tools clear answers, so they mention you for Broken Arrow, Jenks and Owasso.",
        ],
        points: [
          "Foundation answer pages",
          "Listings kept consistent",
          "Schema on key pages",
          "Reviews naming services",
        ],
        cta: "Find Out If AI Mentions Me",
        ui: {
          kind: "ai",
          query: "best home inspector tulsa ok",
          intro: "For a home inspection in Tulsa,",
          bullets: [
            "Licensed in Oklahoma",
            "Foundation and roof focus",
            "Termite report add-on",
          ],
        },
      },
      {
        title: "Track Every Call From Home Inspector Edmond OK Searches",
        body: [
          "Every call from your profile, ads and website gets a source tag, so you can see whether Edmond buyers found you on Maps, in a Local Services Ad or on your site. We then put more weight behind the channel that books.",
        ],
        points: [
          "Source on every call",
          "Missed calls flagged",
          "Bookings by suburb",
          "Monthly lead summary",
        ],
        cta: "Track My Oklahoma Calls",
        ui: {
          kind: "calls",
          title: "Today's calls · Edmond",
          calls: [
            {
              service: "Buyer's home inspection",
              source: "Google Maps",
              when: "9:05 AM",
            },
            {
              service: "11-month warranty inspection",
              source: "Local Services Ads",
              when: "12:30 PM",
            },
            {
              service: "Termite report add-on",
              source: "Google Ads",
              when: "3:50 PM",
            },
          ],
        },
      },
    ],
  },
  regions: {
    title: "Oklahoma Regions and Towns We Cover",
    lead: "Oklahoma's growth is split between two metros and a ring of suburbs, so we treat each area as its own market for pages and ads.",
    items: [
      {
        name: "Oklahoma City Core",
        cities: "Oklahoma City · Moore · Midwest City · Del City",
        focus: "Map Pack work across a wide, spread-out metro",
      },
      {
        name: "Edmond & North Metro",
        cities: "Edmond · Deer Creek · Piedmont · Guthrie",
        focus: "New-construction and warranty inspection pages",
      },
      {
        name: "Norman & South Metro",
        cities: "Norman · Newcastle · Blanchard · Noble",
        focus: "Pages for college-town buyers and investors",
      },
      {
        name: "West Metro",
        cities: "Yukon · Mustang · El Reno · Tuttle",
        focus: "Suburb pages for fast-growing west-side towns",
      },
      {
        name: "Tulsa Metro",
        cities: "Tulsa · Broken Arrow · Owasso · Jenks · Bixby",
        focus: "Foundation and roof pages for older neighborhoods",
      },
      {
        name: "Across the State",
        cities: "Lawton · Stillwater · Enid · Ardmore",
        focus: "Town pages for inspectors who travel",
      },
    ],
    other:
      "Inspecting somewhere else in Oklahoma? We'll build pages there too.",
  },
  reviews: {
    title: "Zonic Media's 5.0 Google Rating, in Owners' Words",
    lead: "Google reviews from inspectors and other local service owners.",
  },
  pricing: {
    title: "Oklahoma Home Inspector Marketing Plans",
    lead: [
      "Cancel in any month you like; we take a 0% markup on ad spend. Curious what else we do? Browse ",
      { href: "/services", label: "every service we offer" },
      ".",
    ],
    compareTitle: "Oklahoma Plans, Compared",
    compareLead: "Start with one metro or cover every corner of Oklahoma.",
    addOnsTitle: "Add-Ons for Spring and Summer",
    addOnsLead: "Extra suburb pages or ads when closings climb.",
    customTitle: "Crews in OKC and Tulsa?",
    customText: "List your offices and we'll send one combined quote.",
  },
  faq: {
    title: "Oklahoma Inspector Marketing Questions",
    lead: "Licensing, termite reports, costs, AI search and Tulsa rankings. Want to talk instead? Call us.",
    items: [
      {
        q: "How can I rank as the best home inspector Tulsa buyers find online?",
        a: "Win the Map Pack and the review count together. We complete your Google profile, add pages for Tulsa suburbs and the add-ons you offer, and send review requests after every report. Steady, specific reviews and accurate listings are what push one inspector above the rest.",
      },
      {
        q: "Should my site explain home inspection cost Oklahoma buyers ask about?",
        a: "Yes, in plain terms. Buyers comparing inspectors want to know what moves the fee, like the home's size, its age and any add-ons, before they call. We publish that on your site with your own pricing or a quote form, so ready-to-book buyers reach you first.",
      },
      {
        q: "Does my Oklahoma CIB license help my rankings?",
        a: "Indirectly. Oklahoma licenses home inspectors through the Construction Industries Board, and showing that license on your profile, your site and every report builds trust with buyers and agents. Trust leads to clicks, calls and reviews, which do move rankings, and AI tools can cite the license too.",
      },
      {
        q: "Can you promote termite inspections for Oklahoma buyers?",
        a: "Yes, if you or a partner hold the right license. Oklahoma wood-destroying insect reports go on the state agriculture department's official form. We set up termite pages, show the report as a service on your profile and offer it during booking, so buyers order it with the inspection.",
      },
      {
        q: "Is it worth marketing 11-month warranty inspections in Oklahoma?",
        a: "Often, yes, especially around Edmond, Yukon and Broken Arrow, where new subdivisions keep going up. Owners of new builds want an inspection before the builder's one-year warranty ends. A dedicated page, timed Google posts and a focused ad group reach them at the right moment.",
      },
      {
        q: "Will AI SEO for home inspectors pay off in Tulsa and OKC?",
        a: "It's becoming part of how buyers shortlist inspectors. Relocating buyers ask Gemini, ChatGPT or Google's AI Mode for a shortlist, and the assistants build those answers from reviews, directory entries and site content. We make yours detailed and consistent, which tends to lift normal search results as well.",
      },
      {
        q: "What if my Oklahoma inspection company's Google profile is suspended?",
        a: "We figure out why it happened, fix the problem and file the reinstatement for you, with updates along the way. We've reinstated 900+ profiles. Verification problems are covered too, while your site and ads keep bringing in calls.",
      },
    ],
  },
  audit: {
    title: "Request a Free Oklahoma Home Inspector Marketing Audit",
    lead: [
      "You'll get a look at how you place on the map across OKC, Tulsa and the towns between, a review of your profile, site and ratings, and a list of buyers you're missing.",
    ],
    points: [
      "OKC, Tulsa and suburbs checked",
      "Termite and warranty searches tested",
      "Month-to-month plans starting at $297",
    ],
    form: {
      formType: "home-inspector-marketing-oklahoma",
      badge: "Free Oklahoma audit",
      title: "Get a Free Oklahoma Inspector Audit",
      subtitle: "Free, with no strings attached.",
      submitText: "Send My Oklahoma Audit",
      messageLabel: "Your Oklahoma towns and services",
      messagePlaceholder:
        "e.g. Edmond and north OKC, termite and warranty inspections",
    },
  },
  banner: {
    title: "Make Your Company Oklahoma's Go-To Home Inspector",
    lead: "A free audit shows your rankings across OKC, Tulsa and every town you serve.",
    icons: ["inspectList", "bug"],
  },
};
