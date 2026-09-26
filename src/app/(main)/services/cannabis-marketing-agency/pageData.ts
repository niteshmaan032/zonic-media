import { buildIndustryMarketingPage } from "@/data/industryMarketing/template";

// Cannabis is the one vertical where the template's default paid channels are
// wrong: Google Ads and Meta both refuse THC ads in the US, and carriers block
// cannabis on standard 10DLC texting. The `paid` overrides swap in what a
// licensed dispensary can actually buy (21+ programmatic, menu-platform
// placements, cannabis-compliant SMS). Facts checked Sep 26 2026 — see
// content-drafts/cannabis-pages-content-brief.md for sources.
export const cannabisMarketing = buildIndustryMarketingPage({
  slug: "cannabis-marketing-agency",
  title: "Cannabis Marketing Agency | Dispensary SEO, SMS & Leads",
  description:
    "Cannabis marketing agency for licensed dispensaries: local SEO, Map Pack, menu SEO, compliant 21+ ads, SMS and loyalty. Month-to-month from $197.",
  keywords: [
    "cannabis marketing agency",
    "dispensary marketing agency",
    "cannabis digital marketing agency",
    "dispensary marketing",
    "cannabis marketing",
    "marijuana marketing agency",
    "cannabis advertising agency",
    "dispensary marketing services",
    "marketing for dispensaries",
    "cannabis marketing company",
    "dispensary sms marketing",
    "dispensary email marketing",
    "dispensary loyalty program",
    "cannabis programmatic advertising",
    "compliant cannabis marketing",
    "dispensary grand opening marketing",
  ],

  eyebrow: "Cannabis Marketing Agency",
  keyword: "cannabis marketing agency",
  industry: "cannabis",
  industryTitle: "Cannabis",
  business: "dispensary",
  businesses: "dispensaries",
  owners: "dispensary owners",
  customers: "adult shoppers",
  specialists: "Cannabis specialists",
  jobsNoun: "orders",

  h1Tail: "that grows your dispensary when ad platforms say no.",
  heroLead:
    "Google Ads and Meta won't run THC ads, so your dispensary grows on channels you own. We handle local SEO, the Map Pack, SEO-friendly menus, Weedmaps and Leafly listings, compliant 21+ advertising, and SMS and loyalty for licensed dispensaries. The result is that adults searching \"dispensary near me\" find your store first, and they keep coming back.",

  problemIntro:
    "Most retail businesses buy growth with ads. Dispensaries can't. With Google and Meta closed to THC advertising, the fight moves to organic search, Google Maps, the menu platforms, and your own customer list. Most agencies don't know how to compete there.",
  problems: [
    {
      icon: "pin",
      title: "Outranked by Weedmaps and Leafly",
      body: "For \"[city] dispensary\" searches, the directories often sit above your own site. Without a strong Google Business Profile, city pages, and a menu that Google can actually read, you're paying for listings that compete against you.",
    },
    {
      icon: "flame",
      title: "One Suspension Away From Invisible",
      body: "Dispensary profiles get suspended for product photos, prices, the wrong category, or a name that doesn't match the license. When the profile disappears, so do the \"dispensary near me\" customers, often for weeks. Our <a class=\"ima-inline-link\" href=\"/services/gbp-reinstatement-service\">Google Business Profile reinstatement</a> team handles the recovery.",
    },
    {
      icon: "users",
      title: "Customers Who Never Come Back",
      body: "The average shopper will happily buy from whoever is closest or cheapest this week. If you don't have a compliant SMS list and a loyalty program, every visit is a one-off, and you're buying the same customer twice.",
    },
  ],

  localSeoBlurb:
    'City and neighborhood pages, product and category pages your menu actually indexes, and schema. These are the foundations of <a class="ima-inline-link" href="/services/industry/local-seo-for-cannabis-dispensaries">local SEO for cannabis dispensaries</a>, and they get your store ranking for "dispensary near me," "[city] dispensary," and the strain and product searches that turn into orders.',
  adsBlurb:
    "Google and Meta are closed to THC, so we buy where it's allowed. That means cannabis-compliant programmatic networks with 21+ audience targeting, geofencing around your store, and featured placements on Weedmaps and Leafly. Every campaign is checked against your state's advertising rules before launch.",
  directoriesLabel: "cannabis platforms like Weedmaps and Leafly",

  answerLead:
    'A cannabis marketing agency helps licensed dispensaries and cannabis brands win customers without breaking platform policies or state advertising law. Because Google Ads and Meta prohibit THC ads, the work centers on local SEO, Google Business Profile and Map Pack rankings, SEO-friendly menus, Weedmaps and Leafly listings, compliant 21+ programmatic ads, and SMS, email, and loyalty programs. When a listing goes dark, it also covers <a class="ima-inline-link" href="/services/gbp-reinstatement-service">recovering a suspended Google Business Profile</a>.',
  marketFact: {
    label: "The market",
    value:
      "Adult-use cannabis is legal in 24 states plus Washington, D.C., and nearly 40 states run medical programs. Regulated US sales run roughly $30 billion a year, and prices keep falling. That makes local visibility and repeat customers the main advantage a dispensary has.",
  },
  whoItsFor:
    "Licensed storefront dispensaries, medical cannabis dispensaries, multi-location operators, and cannabis and hemp brands in the United States that want more foot traffic, online orders, and repeat customers, marketed in line with state rules.",

  mapEyebrow: "Where adult shoppers actually look",
  mapIntro:
    'Most shoppers pick from the first three dispensaries on the map, especially when they want to buy today. We track your rank across a geo-grid around your store and work every signal Google allows for a cannabis store: <a class="ima-inline-link" href="/local-seo-google-business-optimization">Google Business Profile optimization</a> in the right category, compliant photos, reviews, citations, and links. That moves you into the spots that get the visits.',
  mapQuery: "dispensary near me",

  foundationDesc:
    "Get found locally and start turning dispensary searches into store visits.",
  growthDesc:
    "Rank higher, fix your menu SEO, and add compliant paid reach.",
  authorityDesc:
    "Own your market across every location and every channel you're allowed.",
  webDesignHref: "/services/web-design",

  processIntro:
    "Every cannabis engagement starts with your license, your state's advertising rules, and the fastest compliant route to more orders. Then we ship the work, not a slide deck.",

  faqs: [
    {
      q: "Can dispensaries advertise on Google Ads?",
      a: "Not for THC products in the US. Google's policy prohibits ads for recreational drugs, including marijuana, whether the dispensary is medical or adult-use. Only narrow exceptions exist, such as certified topical hemp CBD. That's why dispensary growth runs through organic search, Google Maps, menu platforms, and compliant programmatic networks.",
    },
    {
      q: "Can cannabis businesses advertise on Facebook or Instagram?",
      a: "Meta doesn't allow ads that promote THC or cannabis products. CBD ads need LegitScript certification and Meta's written approval. Organic posting is possible, but cannabis accounts do get restricted, so we treat social as a brand and community channel and never make it the only thing your pipeline depends on.",
    },
    {
      q: "Can dispensaries use SMS text marketing?",
      a: "Yes, but not on a standard business texting setup. US carriers treat cannabis as restricted content on regular business lines, so we run SMS through cannabis-specific platforms such as Alpine IQ or Springbig. Those platforms handle double opt-in, age verification, and carrier-safe wording, and they tie into your loyalty program.",
    },
    {
      q: "How do you handle state cannabis advertising rules?",
      a: "Every campaign and page is checked against your state's rules before it goes live. California, for example, requires that at least 71.6% of an ad's audience be reasonably expected to be 21 or older, and that the ad show your license number. Other states set different thresholds, and we build to the one that applies to you. Your site gets a 21+ age gate, your license number, and copy with no health claims or appeal to minors.",
    },
    {
      q: "Does federal rescheduling change what dispensaries can advertise?",
      a: "Not yet. In April 2026 the federal government moved state-licensed medical marijuana to Schedule III, but adult-use marijuana is still Schedule I while a DEA hearing continues. Google and Meta set their own ad policies, and those still prohibit THC ads in the US. Organic search and owned channels remain the main growth engine.",
    },
    {
      q: "Do you work with CBD and hemp brands?",
      a: "Yes. We work with hemp and CBD brands on SEO, content, and the ad programs they qualify for. Starting December 11, 2026, a new federal hemp definition caps total THC per container, so we review product pages and claims against it before we scale any campaign.",
    },
    {
      q: "What marketing should a new dispensary do before opening?",
      a: "Start 60 to 90 days before opening day. That means building the Google Business Profile as soon as the storefront address can be verified, setting up Weedmaps and Leafly listings, launching a site with an SEO-friendly menu, and building an opt-in SMS list through pre-opening signups. This way, day one opens with customers already waiting.",
    },
    {
      q: "Do you require long-term contracts?",
      a: "No. We work month to month and earn the relationship by delivering results. Most dispensary clients stay because the orders keep coming, not because a contract holds them.",
    },
    {
      q: "Do you work with multi-location operators?",
      a: "Yes. We're based in Dover, Delaware, and we serve dispensaries and multi-location operators across the legal US markets. Every location gets its own profile, location page, and rank tracking, all reported in one dashboard.",
    },
  ],

  finalHeading: "Ready to Grow Your Dispensary the Compliant Way?",
  finalLead:
    "Tell us where you want to grow and we'll come back with the fastest compliant next step: a free audit of your profile, rankings, menu, and website, with no obligation.",

  formBusinessPlaceholder: "Your dispensary",

  knowsAbout: [
    "Cannabis Dispensary Local SEO",
    "Dispensary Google Business Profile Optimization",
    "Dispensary Menu SEO (Dutchie, Jane, Headless)",
    "Weedmaps & Leafly Listing Optimization",
    "Cannabis Programmatic Advertising",
    "Dispensary SMS & Loyalty Marketing",
    "Cannabis Advertising Compliance",
    "Google Map Pack Ranking",
    "Cannabis Website Design & Development",
  ],
  costAnswer:
    "Most cannabis marketing agencies charge $1,500 to $8,000 per month. At Zonic Media, plans are $197/mo (Foundation), $750/mo (Growth), and $1,500/mo (Authority), and custom WordPress websites start at $900. All plans are month-to-month with no long-term contracts. Paid media spend on programmatic networks or menu platforms is billed separately.",
  answerSchema:
    "A cannabis marketing agency helps licensed dispensaries and cannabis brands win customers without breaking platform policies or state advertising law. Because Google Ads and Meta prohibit THC ads, the work centers on local SEO, Google Business Profile and Map Pack rankings, SEO-friendly menus, Weedmaps and Leafly listings, compliant 21+ programmatic ads, and SMS, email, and loyalty programs.",

  paid: {
    pill: "Compliant 21+ Ads",
    includesFact:
      "Local SEO, Google Business Profile &amp; Map Pack optimization, menu SEO, Weedmaps &amp; Leafly listings, compliant 21+ programmatic ads, SMS &amp; loyalty, backlinks &amp; local citations, and website design.",
    cardTitle: "Compliant Cannabis Advertising",
    socialBlurb:
      "Organic, on-brand content for Instagram and other channels that follows each platform's cannabis rules. We build community and credibility without putting your account at risk.",
    growthItem: "Compliant 21+ programmatic ads",
    authorityItem: "SMS &amp; loyalty program management",
    speedFact:
      "Menu-platform placements and compliant programmatic ads can bring store visits within the first weeks. Local SEO and Map Pack rankings typically build over three to six months, and those rankings are the traffic you don't pay for per click.",
    formOption: "Menu, SMS & loyalty",
    visualLabel: "Weedmaps",
  },
});
