import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* TENNESSEE HOME INSPECTOR MARKETING — redesign draft content (24 Oct 2026).
   Rank safety: Semrush returned no_api_units on 24 Oct, so resource_organic
   and phrase_these could not run; keywords come from web research. The
   live title's core term "Home Inspector Marketing in Tennessee" is kept in
   the title, and every phrase in the live keywords meta sits in the title,
   H1, an H2/H3 or an FAQ question.
   Web research (24 Oct): inspectors are licensed by the Tennessee
   Department of Commerce and Insurance (90 hours of approved training, the
   National Home Inspector Examination, insurance, renewal every two
   years); Nashville listings push radon, termite/WDO letters, sewer scope,
   same-day reports and new-construction work; Tennessee is a state where
   VA loans usually call for a wood-destroying insect report. Fresh wording
   only. */

export const CONTENT: LocationContent = {
  draftSlug: "tennessee-2",
  liveUrl: "/services/home-inspector-marketing/tennessee",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Tennessee",
  meta: {
    title: "Home Inspector Marketing in Tennessee | SEO, Ads & Agent Leads",
    description:
      "Tennessee home inspector marketing for Nashville, Memphis, Knoxville, Chattanooga and Murfreesboro: Map Pack rankings, inspector SEO, ads, reviews and AI search.",
    keywords: [
      "home inspector marketing tennessee",
      "home inspector seo tennessee",
      "home inspector nashville tn",
      "home inspector knoxville tn",
      "home inspection murfreesboro tn",
      "best home inspector nashville",
      "home inspection cost tennessee",
      "home inspector marketing",
      "seo for home inspectors",
      "home inspector lead generation tennessee",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.emeraldAmber,
  hero: {
    h1: "Tennessee Home Inspector Marketing Agency, Memphis to Knoxville",
    h1NoWrap: "Memphis to Knoxville",
    lead: [
      "Newcomers to Nashville and investors in Memphis pick inspectors from search results, while agents in Franklin check your reviews before they refer. Through our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing program",
      },
      ", you show up on the map in every division of the state, and more of those searches become booked inspections.",
    ],
    cta: "Get My Tennessee Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "Map Pack in all three divisions",
        sub: "West, Middle and East Tennessee, suburb by suburb",
        chips: [
          "Nashville",
          "Memphis",
          "Knoxville",
          "Chattanooga",
          "+ your county",
        ],
      },
      left: {
        icon: "star",
        title: "Reviews agents notice",
        sub: "Fresh ratings that make a referral an easy call",
      },
      right: {
        icon: "calendar",
        title: "Booked from out of state",
        sub: "Transplants schedule online before moving day",
      },
      bottom: {
        title: "Steady new-build work",
        sub: "Phase and warranty inspections across growing suburbs",
      },
    },
  },
  services: {
    title: "What We Handle for Tennessee Inspection Companies",
    lead: "Tennessee inspectors of any size get one team for every channel.",
    cta: "Audit My Tennessee Marketing",
    items: [
      {
        icon: "pin",
        title: "Map Rankings for Tennessee Inspection Profiles",
        desc: "We fill out categories, counties served, radon and termite add-ons and your state license, then post photos that keep you climbing locally.",
        points: [
          "State license on profile",
          "Counties served set",
          "Fresh photos weekly",
        ],
        links: [
          {
            href: "/local-seo-google-business-optimization",
            label: "Improve my Google profile",
          },
        ],
      },
      {
        icon: "search",
        title: "Home Inspector SEO, Tennessee Suburbs Included",
        desc: "Pages for Franklin, Spring Hill, Mt. Juliet and the other suburbs you cover, plus radon, sewer scope and new-construction pages people search.",
        points: [
          "Suburb landing pages",
          "Radon and sewer scope pages",
          "New-build inspection page",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "Home service SEO",
          },
        ],
      },
      {
        icon: "target",
        title: "Paid Search and LSA Campaigns for Inspectors",
        desc: "Ads shown to buyers who need an inspection this week, fenced to the counties you drive, with Local Services Ads managed alongside.",
        points: [
          "Under-contract keywords",
          "County-level targeting",
          "Lead disputes handled",
        ],
        links: [{ href: "/services/google-ads", label: "Run my Google Ads" }],
      },
      {
        icon: "monitor",
        title: "Booking Sites for Buyers in Another Time Zone",
        desc: "Scheduling that works late at night, a sample report, package details and add-on checkboxes, built to load fast on any phone.",
        points: [
          "After-hours scheduling",
          "Add-on checkboxes",
          "Fast mobile pages",
        ],
        links: [{ href: "/services/web-design", label: "Build my website" }],
      },
      {
        icon: "star",
        title: "Review Flow and Referral-Ready Pages",
        desc: "A text after every delivered report asks for a review, and a page for agents shows sample reports, availability and service area.",
        points: [
          "Review text per report",
          "Agent-friendly page",
          "Owner replies drafted",
        ],
        links: [{ href: "/services", label: "See all our services" }],
      },
      {
        icon: "shield",
        title: "Locked Out of Your Google Listing?",
        desc: "A suspension or failed verification can stop calls overnight. With 900+ profiles reinstated, we pin down what tripped yours, repair it and carry the appeal to the end.",
        points: [
          "What tripped it, found",
          "Profile repaired",
          "Appeal seen through",
        ],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "Reinstate my listing",
          },
          {
            href: "/services/gmb-verification-help",
            label: "Verify my profile",
          },
        ],
      },
    ],
  },
  growth: {
    title: "Three Ways We Book More Tennessee Inspections",
    lead: "Map rankings, AI recommendations and the reviews agents read before they refer.",
    rows: [
      {
        title:
          "Rank for “Best Home Inspector Nashville” From Franklin to Hendersonville",
        body: [
          "Nashville buyers rarely scroll past the first three map results, and many search from the suburb they're moving into. We build your profile, suburb pages and review count so your pin shows up in Brentwood, Franklin and Hendersonville, not only downtown.",
        ],
        points: [
          "Suburb service areas set",
          "Radon and WDI listed",
          "Grid rank reports",
          "Photos from real jobs",
        ],
        cta: "See My Nashville Ranking",
        ui: {
          kind: "maps",
          query: "best home inspector nashville",
          city: "Nashville",
          category: "Home inspector · TN licensed",
        },
      },
      {
        title: "AI SEO for Home Inspectors Covering Knoxville and Chattanooga",
        body: [
          "Families relocating to East Tennessee ask AI assistants whether radon is common and who inspects homes nearby. Our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          " shape your site's answers, listings and review text, so ChatGPT, Gemini and AI Overviews mention your company by name.",
        ],
        points: [
          "Radon question pages",
          "Matching listings statewide",
          "License details in schema",
          "Review prompts that name towns",
        ],
        cta: "Test My AI Mentions",
        ui: {
          kind: "ai",
          query: "home inspector knoxville tn with radon testing",
          intro: "For a Knoxville home inspection with radon testing,",
          bullets: [
            "Tennessee licensed inspector",
            "Serves Maryville and Farragut",
            "Radon results in days",
          ],
        },
      },
      {
        title: "Reviews That Make Williamson County Agents Refer You",
        body: [
          "Agents in Franklin and Brentwood guard their reputations, so they recommend inspectors with recent, detailed reviews. We text each client when the report arrives, help you reply in your own voice and keep new reviews visible where agents look.",
        ],
        points: [
          "Request sent per report",
          "Replies within a day",
          "Low ratings flagged",
          "Agent page with reviews",
        ],
        cta: "Grow My Reviews",
        ui: {
          kind: "reviews",
          sms: "Thanks for choosing us for your Franklin inspection! Your report is ready. Mind sharing a quick review?",
          reviewer: "Megan",
          review:
            "Booked from Chicago before our move. The report was clear, the photos were great and our agent loved how fast it came.",
          reply:
            "Thank you, Megan! Welcome to Franklin, and enjoy the new place.",
        },
      },
    ],
  },
  regions: {
    title: "Home Inspector Marketing, Tennessee City by City",
    lead: "West, Middle and East Tennessee buy homes differently, so we set pages, service areas and ads for each market you serve.",
    items: [
      {
        name: "Greater Nashville",
        cities: "Nashville · Brentwood · Hendersonville · Mt. Juliet",
        focus: "Transplant buyers who book before they arrive",
      },
      {
        name: "Williamson & Rutherford",
        cities: "Franklin · Spring Hill · Murfreesboro · Smyrna",
        focus: "New-construction and warranty inspection pages",
      },
      {
        name: "Memphis & West Tennessee",
        cities: "Memphis · Germantown · Collierville · Jackson",
        focus: "Investor and rental-purchase inspection searches",
      },
      {
        name: "Knoxville & the Smokies",
        cities: "Knoxville · Maryville · Sevierville · Oak Ridge",
        focus: "Radon pages and cabin buyers from out of state",
      },
      {
        name: "Chattanooga & Southeast",
        cities: "Chattanooga · Cleveland · Ooltewah · Signal Mountain",
        focus: "Relocation searches and hillside home questions",
      },
      {
        name: "Clarksville & Montgomery County",
        cities: "Clarksville · Sango · St. Bethlehem",
        focus: "Military families using VA loans near Fort Campbell",
      },
    ],
    other:
      "Covering the Tri-Cities, Cookeville or Columbia? We build pages there too.",
  },
  reviews: {
    title: "What Business Owners Say About Zonic Media on Google",
    lead: "Ratings from inspectors, contractors and local service companies we work with.",
  },
  pricing: {
    title: "Plans for Home Inspector Lead Generation, Tennessee-Wide",
    lead: [
      "Pick a tier, keep it month to month and pay Google for ads at cost, with a 0% markup. Pair any plan with a ",
      { href: "/services/web-design", label: "new inspection website" },
      " if yours is slowing bookings down.",
    ],
    compareTitle: "Tennessee Plans Compared",
    compareLead: "Solo inspector or multi-county team, see what each covers.",
    addOnsTitle: "Add-Ons When Closings Stack Up",
    addOnsLead: "Extra suburb pages or a short ad push for peak months.",
    customTitle: "Inspectors in more than one division?",
    customText: "Share your counties and team size for a combined quote.",
  },
  faq: {
    title: "Tennessee Home Inspection Marketing, Explained",
    lead: "Licensing, suburbs, radon, termite letters and pricing. A quick call works too.",
    items: [
      {
        q: "Who licenses home inspectors in Tennessee?",
        a: "The Tennessee Department of Commerce and Insurance runs the home inspector licensing program. Applicants complete 90 hours of approved training, pass the National Home Inspector Examination and carry insurance. Show the license number on your Google profile and website; buyers new to the state often look it up.",
      },
      {
        q: "Why does “home inspector Nashville TN” show different results in each suburb?",
        a: "Google ranks map results partly by distance from the searcher, so a buyer in Hendersonville sees a different top three than one downtown. We set your service area, build suburb pages and earn reviews across the metro, so you show up in more of those searches.",
      },
      {
        q: "How do I get more “home inspection Murfreesboro TN” bookings from new builds?",
        a: "Give new construction its own page for Rutherford County, list phase and 11-month warranty inspections on your profile and ask buyers for reviews that mention their subdivision. Murfreesboro and Smyrna keep adding homes, and those buyers often search before a builder suggests anyone.",
      },
      {
        q: "Is posting the home inspection cost Tennessee buyers can see a smart move?",
        a: "Usually, yes. Shoppers want to know what a standard inspection covers and what radon or sewer scope adds before they pick up the phone. We build package pages with your own fees and plain inclusions, which cuts back-and-forth and helps agents send clients your way.",
      },
      {
        q: "Do Tennessee buyers using VA loans need a termite letter?",
        a: "Often, yes. Tennessee sits in the area where VA loans typically call for a wood-destroying insect report, which comes from a licensed pest control company. If you coordinate one through a partner, we explain it on a Clarksville VA buyer page, so military families can book everything in one place.",
      },
      {
        q: "Is radon a big topic for a home inspector Knoxville TN buyers hire?",
        a: "Yes. Radon testing is a common add-on across East and Middle Tennessee, and people moving in often ask about it first. We publish a clear radon page for Knoxville and nearby towns, list the test on your profile and include it as a checkbox on your booking form.",
      },
      {
        q: "What will home inspector marketing in Tennessee cost me?",
        a: "Tennessee inspectors start at $297 a month, with $750 and $1,500 tiers for larger territories, and none requires a long contract. Tennessee ad budgets go to Google at a 0% markup. Most solo inspectors start with one metro and add counties as the calendar fills.",
      },
    ],
  },
  audit: {
    title: "Book a Free Tennessee Home Inspector Marketing Review",
    lead: [
      "We map where you rank across your Tennessee counties and review your profile, site and reviews against the leaders.",
    ],
    points: [
      "Each county you serve, mapped",
      "Radon and new-build searches checked",
      "Tiers from $297 a month, cancel anytime",
    ],
    form: {
      formType: "home-inspector-marketing-tennessee",
      badge: "Free Tennessee audit",
      title: "Get a Free Tennessee Inspector Audit",
      subtitle: "Takes two minutes and costs nothing.",
      submitText: "Send My Tennessee Audit",
      messageLabel: "Your Tennessee counties and services",
      messagePlaceholder:
        "e.g. Rutherford and Williamson, buyer inspections and radon",
    },
  },
  banner: {
    title: "Turn Tennessee Home Searches Into Booked Inspections",
    lead: "Your free review shows how you rank from Memphis to the Smokies.",
    icons: ["inspectList", "star"],
  },
};
