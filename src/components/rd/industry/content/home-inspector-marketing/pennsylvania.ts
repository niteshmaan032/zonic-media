import { PALETTES } from "@/components/rd/industry/palettes";
import type { LocationContent } from "@/components/rd/industry/types";

/* PENNSYLVANIA HOME INSPECTOR MARKETING — redesign draft content
   (24 Oct 2026).
   Rank safety: Semrush returned "API units balance is zero" on 24 Oct, so
   the live URL's ranking report could not be pulled. The live title's core
   term ("Home Inspector Marketing in Pennsylvania") is kept, and every
   phrase in the live keywords meta sits in the title, H1, an H2/H3 or an
   FAQ question. Keywords and angles came from web research (24 Oct): no
   statewide license, but the Home Inspection Law (Act 114 of 2000)
   requires full membership in a national home inspection association plus
   insurance; the City of Philadelphia issues its own Home Inspector's
   License through L&I; DEP certifies radon testers; invasive stucco
   moisture testing is common in southeast PA and needs the seller's
   written permission. No volumes available. */

export const CONTENT: LocationContent = {
  draftSlug: "pennsylvania-2",
  liveUrl: "/services/home-inspector-marketing/pennsylvania",
  parent: {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector Marketing",
    niche: "Home Inspector",
  },
  place: "Pennsylvania",
  meta: {
    title: "Home Inspector Marketing in Pennsylvania | Philly & Pittsburgh",
    description:
      "Pennsylvania home inspector marketing: Map Pack rankings, inspector SEO and Google Ads for Philadelphia, Pittsburgh, Lancaster and York, plus radon pages.",
    keywords: [
      "home inspector marketing pennsylvania",
      "home inspector seo pennsylvania",
      "home inspector philadelphia",
      "home inspector pittsburgh pa",
      "home inspection lancaster pa",
      "home inspection york pa",
      "home inspections pa",
      "home inspection pa cost",
      "home inspector lead generation pennsylvania",
      "home inspector marketing",
      "seo for home inspectors",
      "ai seo for home inspectors",
    ],
  },
  palette: PALETTES.greenViolet,
  hero: {
    h1: "Pennsylvania Home Inspector Marketing From Philly to Pittsburgh",
    h1NoWrap: "Philly to Pittsburgh",
    lead: [
      "Pennsylvania has no statewide inspector license, so buyers weigh your reviews, association credentials and how quickly they can book instead. Our ",
      {
        href: "/services/home-inspector-marketing",
        label: "home inspector marketing",
      },
      " makes that case on Google in Philadelphia, Pittsburgh, the Lehigh Valley and Lancaster.",
    ],
    cta: "Get My Pennsylvania Inspector Audit",
    tiles: {
      wide: {
        icon: "pin",
        title: "A top map spot statewide",
        sub: "Philadelphia suburbs, Pittsburgh and central PA towns",
        chips: [
          "Philadelphia",
          "Pittsburgh",
          "Lancaster",
          "Allentown",
          "+ your borough",
        ],
      },
      left: {
        icon: "inspect",
        title: "More radon test bookings",
        sub: "Pages for DEP-certified radon testers",
      },
      right: {
        icon: "home",
        title: "Stucco test leads",
        sub: "Moisture testing pages for southeast PA buyers",
      },
      bottom: {
        title: "Agents who refer you first",
        sub: "Credentials and reviews they can share",
      },
    },
  },
  services: {
    title: "Services That Win Pennsylvania Inspection Bookings",
    lead: "Pennsylvania inspection leads, borough by borough, from one team.",
    cta: "Audit My Pennsylvania Marketing",
    items: [
      {
        icon: "pin",
        title: "Google Business Profile for PA Townships",
        desc: "We list the townships and boroughs you serve, add your association membership and Philadelphia license if you hold one, and keep photos fresh.",
        points: [
          "Townships listed",
          "Credentials shown",
          "Photos kept current",
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
        title: "Home Inspector SEO, Pennsylvania County by County",
        desc: "County and city pages plus radon, stucco, well water and termite pages, written for the searches Pennsylvania buyers actually run.",
        points: [
          "County and city pages",
          "Radon and stucco pages",
          "Structured data built in",
        ],
        links: [
          {
            href: "/services/local-seo-for-home-services",
            label: "SEO for home service companies",
          },
        ],
      },
      {
        icon: "target",
        title: "Pennsylvania Paid Search and LSA Campaigns",
        desc: "Google Ads for buyers under agreement and Local Services Ads you pay for by the lead, kept inside counties you can reach that same week.",
        points: [
          "Agreement-stage keywords",
          "Per-lead Local Services Ads",
          "Same-week service areas",
        ],
        links: [
          { href: "/services/google-ads", label: "Google Ads management" },
        ],
      },
      {
        icon: "monitor",
        title: "A Booking Site With Credentials Up Front",
        desc: "Online scheduling, optional extras, a sample report and your association and insurance details on the first screen buyers see.",
        points: [
          "Credentials on page one",
          "Add-on booking",
          "Sample report preview",
        ],
        links: [
          { href: "/services/web-design", label: "Custom website design" },
          {
            href: "/home-inspector-website-design-agency-us/offer",
            label: "Home inspector site offer",
          },
        ],
      },
      {
        icon: "star",
        title: "Reviews and Agent Referral Pages",
        desc: "A text asks for a review once each report is delivered, and an agent page carries your booking link so Main Line and Pittsburgh agents refer fast.",
        points: [
          "Review asks after reports",
          "Agent page with booking",
          "Replies written for you",
        ],
        links: [
          {
            href: "/google-maps-business-ranking-tool-online",
            label: "Run a free Maps rank check",
          },
        ],
      },
      {
        icon: "shield",
        title: "Getting a Locked Google Profile Back",
        desc: "A suspended listing, or one stuck in verification, gets diagnosed, repaired and appealed by our team. 900+ profiles reinstated to date.",
        points: ["Why it happened", "What needs fixing", "Appeal managed"],
        links: [
          {
            href: "/services/gbp-reinstatement-service",
            label: "GBP reinstatement",
          },
          {
            href: "/services/gmb-verification-help",
            label: "GMB verification help",
          },
        ],
      },
    ],
  },
  growth: {
    title:
      "Our Home Inspector Lead Generation Pennsylvania Plan, in Three Parts",
    lead: "Maps for buyers searching right now, AI answers for the research crowd and reviews that agents and buyers both check.",
    rows: [
      {
        title: "Take the Top Spot for Home Inspector Philadelphia Searches",
        body: [
          "Buyers in Philadelphia and in Bucks, Montgomery and Delaware counties check Google Maps and usually call a company from the top of the list. A complete profile, neighborhood and township pages and a steady review flow keep you there.",
        ],
        points: [
          "Township and neighborhood pages",
          "City license shown",
          "Stucco testing listed",
          "Rank grid reports",
        ],
        cta: "See My Philadelphia Ranking",
        ui: {
          kind: "maps",
          query: "home inspector philadelphia",
          city: "Philadelphia",
          category: "Home inspector · Stucco testing",
        },
      },
      {
        title: "Turn AI Answers About Home Inspector Pittsburgh PA Into Calls",
        body: [
          "Buyers looking at century-old houses in Pittsburgh increasingly want an AI assistant's opinion on which inspector to trust. With our ",
          { href: "/services/ai-seo-services", label: "AI SEO services" },
          ", your website, listings and reviews hand those tools clear facts, so you're named for Mt. Lebanon, Cranberry and the North Hills.",
        ],
        points: [
          "Older-home answer pages",
          "Matching listing details",
          "Schema markup in place",
          "Reviews naming neighborhoods",
        ],
        cta: "Check My Pittsburgh AI Visibility",
        ui: {
          kind: "ai",
          query: "home inspector pittsburgh pa",
          intro: "For a home inspection in Pittsburgh,",
          bullets: [
            "Association-certified inspector",
            "DEP-certified radon testing",
            "Sewer and well checks",
          ],
        },
      },
      {
        title: "Reviews That Lift Home Inspection Lancaster PA Rankings",
        body: [
          "Around Lancaster and York, buyers and agents read reviews closely before choosing an inspector. Each finished report triggers a review request by text, we draft replies that sound like you, and a weak rating gets flagged to you the same day.",
        ],
        points: [
          "Review link with reports",
          "Replies in your voice",
          "Agent shout-outs encouraged",
          "Weak ratings flagged",
        ],
        cta: "Grow My PA Reviews",
        ui: {
          kind: "reviews",
          sms: "Hi Dan, the report for the Lititz house is in your inbox. Could you tell other buyers how it went on Google?",
          reviewer: "Dan",
          review:
            "We booked online at night, the radon canisters went down the next morning and the findings were laid out plainly. Our agent noticed.",
          reply: "Thanks, Dan! Enjoy the new place in Lititz.",
        },
      },
    ],
  },
  regions: {
    title: "Where We Market Home Inspections, PA Region by Region",
    lead: "Pennsylvania buyers search by township and borough, so we build pages and service areas at that level in every region.",
    items: [
      {
        name: "Philadelphia & Suburbs",
        cities: "Philadelphia · Media · Norristown · Doylestown",
        focus: "City license, stucco and rowhome pages",
      },
      {
        name: "Pittsburgh & Western PA",
        cities: "Pittsburgh · Mt. Lebanon · Cranberry · Erie",
        focus: "Older-home and sewer line pages",
      },
      {
        name: "Lehigh Valley & Poconos",
        cities: "Allentown · Bethlehem · Easton · Stroudsburg",
        focus: "Radon and well water pages",
      },
      {
        name: "South Central PA",
        cities: "Lancaster · York · Harrisburg · Hershey",
        focus: "Review-led growth in tight-knit markets",
      },
      {
        name: "Northeast PA",
        cities: "Scranton · Wilkes-Barre · Hazleton",
        focus: "Town pages with fewer rivals online",
      },
      {
        name: "Central PA",
        cities: "State College · Altoona · Williamsport",
        focus: "Pages for buyers far from the big metros",
      },
    ],
    other: "Serving a Pennsylvania township we didn't name? We'll add it.",
  },
  reviews: {
    title: "What Business Owners Say About Us on Google",
    lead: "Google reviews from inspectors, trades and local service businesses.",
  },
  pricing: {
    title: "Pennsylvania Home Inspector Marketing Plans",
    lead: [
      "Plans are month to month, with ad spend passed along at a 0% markup. For services beyond inspector marketing, see our ",
      { href: "/services", label: "complete services list" },
      ".",
    ],
    compareTitle: "Compare Pennsylvania Plans",
    compareLead: "One county or the whole Commonwealth.",
    addOnsTitle: "Add-Ons for the Spring Listing Season",
    addOnsLead: "Extra township pages or ads when listings rise.",
    customTitle: "Offices east and west of Harrisburg?",
    customText: "Share your locations for one combined quote.",
  },
  faq: {
    title: "Pennsylvania Inspector Marketing Questions",
    lead: "Credentials, Philadelphia licensing, radon, costs and AI search. You can always call us instead.",
    items: [
      {
        q: "Do I need a license to inspect homes in Philadelphia?",
        a: "Yes. The state doesn't license home inspectors, but the City of Philadelphia requires its own Home Inspector's License through L&I. Statewide, Pennsylvania's Home Inspection Law expects inspectors to be full members of a national inspector association and to carry insurance. We show both credentials on your profile and site.",
      },
      {
        q: "Should I list my home inspection PA cost online?",
        a: "Usually, yes. Many buyers shortlist the inspectors whose sites state a fee or give an instant quote before the inspection deadline gets close. We add your pricing, or a quote form, to the website and Google profile, with only the numbers you choose to share.",
      },
      {
        q: "What brings in more home inspection York PA bookings?",
        a: "Build a York page that covers the housing buyers there see most, list York and its townships as service areas, and earn reviews from local clients. Pair that with ads on York searches, and your company shows up in a market where nearby competitors are thin online.",
      },
      {
        q: "Can you market radon testing in Pennsylvania?",
        a: "Yes, for certified testers. Pennsylvania's Department of Environmental Protection certifies anyone who tests homes for radon, and buyers ask for the test often. We create county radon pages, list testing among your profile services, add it to booking and display your DEP certification.",
      },
      {
        q: "Is stucco testing worth marketing in southeast Pennsylvania?",
        a: "If you offer it, yes. Hidden moisture behind stucco is a known worry for buyers in the Philadelphia suburbs, and invasive testing needs the seller's written permission, so buyers plan ahead and search early. A dedicated page and a booking option catch those searches.",
      },
      {
        q: "Can AI SEO for home inspectors help in Philadelphia's suburbs?",
        a: "Yes. Buyers new to Chester or Montgomery County often type the question into ChatGPT or read an AI Overview to find an inspector. We make your site, listings and reviews specific about towns and services like stucco and radon, so those tools have solid reasons to name you.",
      },
      {
        q: "What if my Pennsylvania company's Google listing gets suspended?",
        a: "We identify the cause, put it right and send the reinstatement request, then keep you informed until Google lifts it. Our count so far: 900+ profiles reinstated. Verification snags get handled too, and your ads and website keep bookings coming in the meantime.",
      },
    ],
  },
  audit: {
    title: "Request Your Free Pennsylvania Home Inspector Audit",
    lead: [
      "You get a county-by-county read on your map rankings, a check of your profile, website and reviews, and the boroughs where bookings go to other firms.",
    ],
    points: [
      "Each PA county and borough reviewed",
      "Radon and stucco searches tested",
      "Three plans from $297, all month to month",
    ],
    form: {
      formType: "home-inspector-marketing-pennsylvania",
      badge: "Free PA audit",
      title: "Get a Free Pennsylvania Inspector Audit",
      subtitle: "No cost, no pressure, no contract.",
      submitText: "Send My PA Audit",
      messageLabel: "Your PA counties and add-ons",
      messagePlaceholder:
        "e.g. Chester and Delaware counties, radon and stucco",
    },
  },
  banner: {
    title: "Become the First Call for Pennsylvania Home Inspections",
    lead: "Your free audit maps your rankings across each county you cover.",
    icons: ["inspectList", "building"],
  },
};
