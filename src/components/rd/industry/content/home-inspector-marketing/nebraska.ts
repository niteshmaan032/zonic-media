import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* NEBRASKA HOME INSPECTOR MARKETING — live state page (5 Nov 2026).
   Keywords: Semrush units are out, so terms come from
   reports/research/home-inspector-states-2026-11.md (nebraska home
   inspector license 90, home inspection lincoln ne 90, home inspection
   nebraska 20) plus web research.
   Web research (5 Nov 2026), facts used on the page:
   - Licensing: no state license or exam. LB 423 (2021), Neb. Rev. Stat.
     §§ 76-3601 to 76-3606, requires home inspectors to register with the
     Secretary of State before inspecting, effective 1 Jan 2023, with a
     certificate of general liability insurance (sos.nebraska.gov,
     nebraskalegislature.gov).
   - Radon: Nebraska DHHS licenses anyone working in a radon occupation,
     incl. measurement (dhhs.ne.gov); DHHS fact sheets put the highest
     indoor levels in eastern Nebraska.
   - Offutt AFB sits in Bellevue (Sarpy County).
   - No Nebraska rule found that restricts agents from recommending
     inspectors; agent lane stays compliant (no referral payments).
   Fresh wording only; audiences section per the Nov 2026 brief. */

export const CONTENT: LocationContent = {
  draftSlug: "nebraska",
  liveUrl: "/services/home-inspector-marketing/nebraska",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Nebraska",
  meta: {
    title: "Home Inspector Marketing in Nebraska | Omaha & Lincoln SEO",
    description:
      "Nebraska home inspector marketing for Omaha, Lincoln, Grand Island and Kearney: Map Pack rankings, SEO, AI answers, agent outreach and radon and sewer scope bookings.",
    keywords: [
      "home inspector marketing nebraska",
      "home inspection nebraska",
      "home inspection lincoln ne",
      "home inspector omaha",
      "home inspection grand island ne",
      "radon testing omaha",
      "nebraska home inspector license",
      "nebraska home inspector registration",
      "home inspector seo nebraska",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.slateOrange,
  hero: {
    h1: "Nebraska Home Inspector Marketing Agency for Omaha and Lincoln",
    h1NoWrap: "Omaha and Lincoln",
    lead: [
      "Nebraska basements put radon and sewer scope questions into many sales. With our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing agency",
      },
      ", your registered business is found on Maps, named by AI assistants and booked online, from Omaha and Lincoln out to the Tri-Cities.",
    ],
    cta: "Get My Nebraska Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Top 3 across Omaha and Lincoln",
        sub: "Then Grand Island, Kearney and beyond",
        chips: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "+ your town"],
      },
      left: {
        icon: "inspect",
        title: "Radon tests on more bookings",
        sub: "Offered the moment buyers schedule",
      },
      right: {
        icon: "plumbing",
        title: "Sewer scopes sold upfront",
        sub: "Camera inspections for older neighborhoods",
      },
      bottom: {
        title: "Agents and owners both booking",
        sub: "Separate pages and follow-ups for each",
      },
    },
  },
  services: {
    title: "Nebraska Home Inspection Marketing, Service by Service",
    lead: "Every channel Omaha and Lincoln buyers use to pick an inspector, run by one team with one monthly report.",
    cta: "Audit My Nebraska Marketing",
    items: [
      {
        icon: "pin",
        title: "A Google Business Profile Built for Nebraska Buyers",
        desc: "We add your Secretary of State registration, the towns you cover, radon and sewer scope services and new photos, so Maps sees a complete listing.",
        points: [
          "Registration noted",
          "Town service areas",
          "Radon and sewer listed",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Improve my Business Profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO From Omaha Suburbs to Kearney",
        desc: "Pages for Papillion, Gretna, Elkhorn and Lincoln neighborhoods, plus radon, sewer scope and well and septic pages that match how Nebraskans search.",
        points: ["Suburb pages", "Radon and sewer pages", "Acreage well pages"],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Search Ads That Reach Buyers After the Offer",
        desc: "Google Ads plus Local Services Ads that target buyers in the days after an accepted offer, split by metro so Omaha and Lincoln stay separate.",
        points: [
          "Post-offer keywords",
          "LSA management",
          "Metro-level campaigns",
        ],
        links: [
          { href: "/services/google-ads", label: "Launch my Google Ads" },
        ],
      },
      {
        icon: "monitor",
        title: "An Inspection Website With Radon at Checkout",
        desc: "On their phone, buyers pick the inspection, tick radon or a sewer scope, choose a slot and preview a sample report.",
        points: [
          "Add-on selection",
          "Online scheduling",
          "Report sample on hand",
        ],
        links: [{ href: "/services/web-design", label: "Get a new website" }],
      },
      {
        icon: "star",
        title: "Agent Outreach and Reviews That Compound",
        desc: "An agent page with your turnaround and coverage, short email updates, and review requests after each report that bring in buyer and agent praise.",
        points: ["Agent landing page", "Email updates", "Review requests"],
        links: [{ href: "/services", label: "Explore all services" }],
      },
      {
        icon: "shield",
        title: "Fix a Suspended or Unverified Nebraska Listing",
        desc: "We figure out what triggered the suspension or verification block, clean up the profile and run the appeal, the same process behind 900+ reinstatements.",
        points: [
          "Reason identified",
          "Listing cleaned up",
          "Appeal run for you",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Get my listing back",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Finish Google verification",
          },
        ],
      },
    ],
  },
  growth: {
    title: "How Nebraska Buyers Pick an Inspector, and How We Get You Picked",
    lead: "Top of the Map Pack, named in AI answers and booked through ads that reach buyers under contract.",
    rows: [
      {
        title: "Win the Map Pack for “Home Inspection Lincoln NE”",
        body: [
          "Lincoln buyers often add “NE” to the search, and nearby towns like Waverly and Hickman search for Lincoln too. Those towns join your coverage, a page goes up for each and new reviews mention them, so your listing appears across Lancaster County.",
        ],
        points: [
          "Lancaster County coverage",
          "Pages for nearby towns",
          "Reviews naming places",
          "Rank checks each week",
        ],
        cta: "Check My Lincoln Ranking",
        ui: {
          kind: "maps",
          query: "home inspection lincoln ne",
          city: "Lincoln",
          category: "Home inspector · NE registered",
        },
      },
      {
        title: "Get Recommended When Omaha Buyers Ask AI",
        body: [
          "Families relocating to Omaha ask ChatGPT, Perplexity and Gemini for a home inspector who also tests radon. Through ",
          { href: "/services/ai-seo-services", label: "AI-ready SEO" },
          ", your site, listings and reviews state identical facts, so assistants can confidently put your company forward.",
        ],
        points: [
          "Radon FAQs",
          "Matching business facts",
          "Reviews that name tests",
          "Service schema",
        ],
        cta: "Test My AI Visibility",
        ui: {
          kind: "ai",
          query: "home inspector omaha who also tests radon",
          intro: "For an Omaha inspector who also tests radon,",
          bullets: [
            "DHHS-licensed radon testing",
            "Camera sewer scopes",
            "Covers Papillion and Gretna",
          ],
        },
      },
      {
        title: "Ads That Ring Your Phone the Week of the Offer",
        body: [
          "Most buyers book an inspector soon after an accepted offer. Our Google Ads and Local Services Ads cover that window in Omaha and Lincoln, every call is traced to the job it became, and keywords that only bring tire-kickers get dropped.",
        ],
        points: [
          "Offer-week keywords",
          "Calls traced to jobs",
          "Wasted terms removed",
          "Separate metro budgets",
        ],
        cta: "Plan My Nebraska Ads",
        ui: {
          kind: "calls",
          title: "This week's inspection calls",
          calls: [
            {
              service: "Inspection + radon",
              source: "Google Ads",
              when: "Mon 9:12",
            },
            {
              service: "Sewer scope",
              source: "Local Services",
              when: "Tue 2:40",
            },
            {
              service: "Pre-listing inspection",
              source: "Google Maps",
              when: "Wed 11:05",
            },
          ],
        },
      },
    ],
  },
  audiences: {
    title: "Agents and Homeowners in Nebraska: Two Lanes, One Calendar",
    lead: [
      "Buyers, sellers and agents each pick inspectors in their own way. Agents want speed and readable reports; owners want answers before they book. We run a lane for each, with no referral fees or gifts to agents, ever.",
    ],
    lanes: [
      {
        audience: "Omaha and Lincoln Agents",
        icon: "agent",
        pitch:
          "Agents juggling several contracts need an inspector they can book in one step, who adds radon without fuss and sends a summary buyers understand.",
        query: "Agent request: inspection + radon, Elkhorn, Friday morning",
        flow: [
          "Agent opens link",
          "Chooses time",
          "Radon added",
          "Summary to agent",
        ],
        badge: "Booked in one step",
        jobs: [
          {
            name: "Buyer's inspection",
            tactic: "A booking link agents can text their clients",
          },
          {
            name: "Radon test with the inspection",
            tactic: "Your DHHS radon license shown at booking",
          },
          {
            name: "Sewer scope for older homes",
            tactic: "Camera footage linked in the agent summary",
          },
        ],
      },
      {
        audience: "Nebraska Homeowners Who Search First",
        icon: "sold",
        pitch:
          "Owners getting a house ready to list, families in new builds and buyers skipping the agent all search directly. Your name and booking button should be waiting there.",
        query: "pre listing inspection omaha",
        flow: [
          "Searches Google",
          "Compares reviews",
          "Books online",
          "Confirmed",
        ],
        badge: "New client, booked direct",
        jobs: [
          {
            name: "Pre-listing inspection",
            tactic: "Seller page with a repair-planning checklist",
          },
          {
            name: "New construction phase inspections",
            tactic: "Pages for foundation, pre-drywall and final",
          },
          {
            name: "11-month builder warranty check",
            tactic: "Reminder campaign before the warranty ends",
          },
        ],
      },
    ],
    addOns: {
      title: "Add-On Tests for Nebraska Homes",
      items: [
        "Radon test",
        "Sewer scope",
        "Well water test",
        "Septic inspection",
        "Termite (WDI) check",
        "Thermal imaging",
      ],
    },
    cta: "Plan My Nebraska Agent Marketing",
  },
  regions: {
    title: "Where in Nebraska We Can Grow Your Bookings",
    lead: "Metro suburbs, county seats and acreages are covered with pages and ads built for the buyers in each.",
    items: [
      {
        name: "Omaha Metro",
        cities: "Omaha · Elkhorn · Bennington · Millard",
        focus: "Busy resale market with agent-led buyers",
      },
      {
        name: "Sarpy County",
        cities: "Bellevue · Papillion · La Vista · Gretna",
        focus: "New subdivisions and military families near Offutt",
      },
      {
        name: "Lincoln & Lancaster",
        cities: "Lincoln · Waverly · Hickman · Bennet",
        focus: "Campus-area homes and first-time buyers",
      },
      {
        name: "Tri-Cities",
        cities: "Grand Island · Kearney · Hastings · Aurora",
        focus: "Regional hubs with acreage and well questions",
      },
      {
        name: "Northeast Nebraska",
        cities: "Norfolk · Columbus · Fremont · Wayne",
        focus: "Small-town searches you can win early",
      },
      {
        name: "Western Nebraska",
        cities: "North Platte · Scottsbluff · Gering · Ogallala",
        focus: "Wide service areas covered by one profile",
      },
    ],
    other:
      "Based in Beatrice, York or McCook? Ask us about adding those towns.",
  },
  reviews: {
    title: "Nebraska Inspectors, See Our 5.0 Google Rating First",
    lead: "Owners in many trades share how working with us went.",
  },
  pricing: {
    title: "Home Inspector Lead Generation Pricing for Nebraska",
    compareTitle: "Nebraska Inspector Plans Compared",
    addOnsTitle: "Extras for Nebraska's Busy Season",
    customTitle: "Covering Omaha and Lincoln both?",
  },
  faq: {
    title: "Nebraska Home Inspector Marketing: Common Questions",
    lead: "Registration, radon, agents, AI and cost. Want to talk instead? We're a phone call away.",
    items: [
      {
        q: "Do Nebraska home inspectors need a license?",
        a: "Not a license, but a registration. Since January 1, 2023, Nebraska has required home inspectors to register with the Secretary of State before inspecting and to file a certificate of general liability insurance. There's no state exam. We show your registration on your profile and site; check current state rules for updates.",
      },
      {
        q: "Is a separate license needed to market radon testing in Nebraska?",
        a: "Yes. Nebraska's Department of Health and Human Services licenses people who do radon measurement work, and that covers inspectors testing for clients. Once yours is current, we feature it on your radon page, Google profile and booking form, since agents and buyers check for it.",
      },
      {
        q: "How can I get more Omaha and Lincoln agent referrals without paying for them?",
        a: "Be the inspector agents trust to keep deals moving. Your agent page shows open slots, sample summaries and a coverage map; brief email updates keep you in mind, and agent reviews build proof. Paying or rewarding agents for referrals is off the table; speed and clarity win them.",
      },
      {
        q: "Should Nebraska inspectors offer sewer scopes?",
        a: "If you own the camera, it's worth promoting. Buyers of older homes in Omaha and Lincoln search for sewer scopes by name. A dedicated page explaining what the camera finds and how it fits alongside the inspection converts those searches into extra bookings.",
      },
      {
        q: "Can I rank in Grand Island and Kearney from one office?",
        a: "Often, yes, if you truly serve both. Each city goes on your profile's service list, earns its own locally detailed page and collects reviews from clients there. Smaller Nebraska cities can be easier to win than Omaha, so steady work there moves you up sooner.",
      },
      {
        q: "Do AI assistants recommend Nebraska home inspectors?",
        a: "Increasingly. Buyers put the question to ChatGPT, Gemini or Google's AI Overviews, looking for inspectors who test radon or scope sewers. Those tools lean on consistent business facts, detailed service pages and reviews, so our AI SEO work also strengthens your Map Pack rankings.",
      },
      {
        q: "What do Nebraska inspectors pay for marketing with us?",
        a: "Plans run $297, $950 or $1,500 a month, and nobody signs a long-term contract. Google bills ad spend itself, and we add a 0% markup. Many inspectors start with one metro, then add Lincoln or the Tri-Cities when the calendar fills.",
      },
    ],
  },
  audit: {
    title: "Your Free Nebraska Inspector Marketing Audit",
    lead: [
      "We review your ranking in each Nebraska town you serve, your Business Profile, website, reviews and how radon and sewer scope show up. Covering nearby states too? See our work for inspectors in ",
      {
        href: "/services/home-inspector-marketing/colorado",
        label: "Colorado",
      },
      " and ",
      {
        href: "/services/home-inspector-marketing/missouri",
        label: "Missouri",
      },
      ".",
    ],
    points: [
      "Every town ranked",
      "Radon and sewer pages checked",
      "No contract, from $297/mo",
    ],
    form: {
      formType: "home-inspector-marketing-nebraska",
      badge: "Free Nebraska audit",
      title: "Request a Free Nebraska Inspector Audit",
      subtitle: "A short form, a useful report.",
      submitText: "Send My Nebraska Audit",
      messageLabel: "Towns you serve and add-on tests",
      messagePlaceholder: "e.g. Omaha and Sarpy County, radon and sewer scope",
    },
  },
  banner: {
    title: "Put Your Nebraska Inspection Business on the Map",
    lead: "Find out where you rank in Omaha, Lincoln and beyond, free.",
    icons: ["inspect", "pin"],
  },
};
