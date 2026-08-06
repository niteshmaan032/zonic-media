export type HvacServiceCard = {
  num: string;
  h: string;
  p: string;
};

export type HvacSpecialty = {
  icon: string;
  h: string;
  p: string;
};

export type HvacPriceCard = {
  tier: string;
  amount: string;
  period: string;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
};

export type StateContent = {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;

  ticker: string[];

  hero: {
    eyebrow: string;
    headlinePre: string;
    accent: string;
    sub: string;
    trustExtra: { num: string; label: string };
  };

  problem: {
    eyebrow: string;
    title: string;
    lede: string;
    cards: { h: string; p: string }[];
  };

  mapPack: {
    eyebrow: string;
    title: string;
    paras: string[];
  };

  strategy: {
    eyebrow: string;
    title: string;
    lede: string;
    items: string[];
  };

  cities: {
    eyebrow: string;
    title: string;
    lede: string;
    cards: { h: string; p: string }[];
  };

  faqEyebrow: string;
  faqs: { q: string; a: string }[];

  final: {
    accentTail: string;
    lede: string;
    checks: string[];
  };
};

/** Three fixed trust stats shared across the parent and every state page. */
export const BASE_TRUST = [
  { num: "500+", label: "Local Businesses Ranked" },
  { num: "35+", label: "HVAC Contractors Served" },
  { num: "300+", label: "GBPs Reinstated" },
];

/** The six marketing functions — shared by the parent and state pages. */
export const SERVICES: HvacServiceCard[] = [
  {
    num: "01 · GBP & MAP PACK",
    h: "Google Business Profile Rebuild for HVAC Map Pack Visibility.",
    p: "Complete GBP rebuild with HVAC-specific categories (HVAC contractor, AC contractor, heating contractor, furnace repair service), NATE-certification trust signals, manufacturer credential markup (Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi), 24/7 emergency attributes, geo-tagged jobsite photos, weekly Posts on an HVAC seasonal calendar.",
  },
  {
    num: "02 · GOOGLE ADS / PPC",
    h: "Paid Search Timed to HVAC Seasonal Peaks.",
    p: "HVAC contractor-specific keyword targeting, geo-modified emergency keywords, ad copy tuned to mobile decision compression, conversion tracking integrated with your dispatch software, and Local Services Ads management where available in your metro.",
  },
  {
    num: "03 · WEBSITE DESIGN",
    h: "Mobile-First HVAC Websites That Convert Summer and Winter Emergencies.",
    p: "Sub-2-second mobile load times, persistent click-to-call across every page, maintenance-contract membership signup flow, online booking integration, schema markup for HVAC contractor and LocalBusiness, dedicated submarket and service landing pages, R-454B refrigerant transition content.",
  },
  {
    num: "04 · MEMBERSHIPS & RETENTION",
    h: "Maintenance-Contract Program Development and Customer Retention.",
    p: "Membership program structure, landing pages, automated email sequences for two-visit-per-year touchpoints, retention dashboards. Maintenance contracts at 80%+ gross margin are the highest-leverage HVAC marketing asset and most contractors leave them on the table.",
  },
  {
    num: "05 · REVIEW VELOCITY",
    h: "Automated Reviews After Every HVAC Service Call.",
    p: "SMS plus email review requests fire automatically after every completed service or installation. Keyword-coached templates that mention neighborhood, equipment type (heat pump, AC, furnace), and service. Multi-platform monitoring. Negative-review response protocols. Review request integration with dispatch software.",
  },
  {
    num: "06 · LOCAL SEO & CITATIONS",
    h: "Citations, Submarket Pages, and HVAC-Specific Directory Work.",
    p: "NAP consistency across 60+ general and HVAC-specific directories including manufacturer dealer locators (Carrier, Trane, Lennox dealer pages count as citations). Submarket-specific landing pages. R-454B transition content. Title 24 compliance content for California. GBP reinstatement included.",
  },
];

/** Eight HVAC service categories we market. */
export const SPECIALTIES: HvacSpecialty[] = [
  {
    icon: "❄️",
    h: "AC Repair & Install",
    p: "Central AC, package units, condenser replacement. Peak demand May-September. Highest emergency call volume.",
  },
  {
    icon: "🔥",
    h: "Furnace & Heating",
    p: "Gas furnace, electric furnace, boiler service. Peak demand November-February. Older homes drive replacement.",
  },
  {
    icon: "⚡",
    h: "Heat Pump Install",
    p: "Fastest-growing HVAC category. California Title 24 mandate and federal IRA tax credits drive adoption.",
  },
  {
    icon: "🌬️",
    h: "Ductless Mini-Split",
    p: "Mitsubishi, Daikin, LG systems. Premium-margin installations. Older homes, additions, garages, ADUs.",
  },
  {
    icon: "🌿",
    h: "Indoor Air Quality",
    p: "UV lights, air purifiers, humidifiers, ventilation. Add-on revenue per service call. Growing post-2020 demand.",
  },
  {
    icon: "📋",
    h: "Maintenance Memberships",
    p: "Two visits/year, recurring revenue at 80%+ margin. The highest-leverage HVAC marketing asset most miss.",
  },
  {
    icon: "🏢",
    h: "Commercial HVAC",
    p: "Restaurants, retail, office, multi-family. B2B keyword patterns, longer sales cycles, separate landing pages.",
  },
  {
    icon: "🏗️",
    h: "New Construction",
    p: "Builder relationships plus retail visibility. Critical in growth states — FL, TX, AZ, GA, NC. High AOV installs.",
  },
];

/** Month-to-month pricing — shared by the parent and state pages. */
export const PRICE_CARDS: HvacPriceCard[] = [
  {
    tier: "Foundation",
    amount: "$750",
    period: "per month · billed monthly",
    features: [
      "Google Business Profile rebuild + monthly management",
      "Citation cleanup across 40+ general directories",
      "Map pack monitoring across primary HVAC keywords",
      "NATE certification + manufacturer trust signals",
      "HVAC-specific category + attribute optimization",
      "On-page SEO for up to 5 location/service pages",
      "Monthly performance report with map pack data",
      "Email support, 24-hour response",
    ],
    cta: "Start with Foundation",
    featured: false,
  },
  {
    tier: "Growth",
    amount: "$1,350",
    period: "per month · billed monthly",
    features: [
      "Everything in Foundation",
      "Google Ads management with HVAC seasonal playbook",
      "Maintenance contract membership program development",
      "Automated SMS + email review request system",
      "Multi-platform review monitoring",
      "Submarket pages expanded to up to 12 areas",
      "GBP reinstatement support (included)",
      "Quarterly strategy call with founder",
    ],
    cta: "Choose Growth",
    featured: true,
    badge: "Most Popular",
  },
  {
    tier: "Authority",
    amount: "$2,000",
    period: "per month · billed monthly",
    features: [
      "Everything in Growth",
      "Full website rebuild on HVAC conversion architecture",
      "R-454B refrigerant transition content program",
      "Spanish-language landing pages where demographic supports",
      "Social media management — Instagram, Facebook",
      "Short-form video content from jobsites (4 per month)",
      "Meta Ads with local homeowner targeting",
      "Multi-state expansion + unlimited submarkets",
      "Monthly strategy call with founder",
    ],
    cta: "Go Authority",
    featured: false,
  },
];

export const STATE_CONTENT: Record<string, StateContent> = {
  arizona: {
    name: "Arizona",
    slug: "arizona",
    metaTitle: "HVAC Marketing Agency in Arizona",
    metaDescription:
      "HVAC marketing agency for Arizona contractors. Map pack rankings, GBP optimization, Google Ads, maintenance memberships & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Arizona HVAC Audit",
      "Phoenix · Tucson · Mesa · Scottsdale",
      "GBP · Memberships · Google Ads · R-454B Transition",
      "500+ Local Businesses Ranked · 35+ HVAC Contractors Served",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Arizona HVAC: 115°F Summers Destroy Equipment. Cooling Replacement Cycles Run Half As Long.",
      headlinePre: "HVAC Marketing Agency in",
      accent: "Arizona.",
      sub: "Arizona has the harshest HVAC operating conditions in the continental US. Phoenix runs 110+ days per year above 100°F. Outdoor units run 14-18 hours a day for months. Equipment that lasts 15 years in moderate climates fails in 8-10 years across the Valley. Heat pumps overwork in 115°F conditions. Monsoon season dust storms (July-September) clog condenser coils and reduce efficiency by 25-40% in days. We help Arizona HVAC contractors win local SEO across every Valley submarket and Tucson metro so customers find your business first when their AC quits at 2 PM in July with the indoor temperature climbing past 90°F.",
      trustExtra: { num: "7.5M", label: "Arizona Population" },
    },
    problem: {
      eyebrow: "Why Arizona HVAC Marketing Is Different",
      title:
        "Four Arizona-specific dynamics that decide which HVAC contractors win the map pack.",
      lede: "Arizona HVAC has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Arizona HVAC economics — equipment lifespan, climate stress patterns, demographic search behavior, and competitive density.",
      cards: [
        {
          h: "115°F destroys HVAC equipment faster than anywhere in the US.",
          p: "Phoenix runs 110+ days above 100°F annually. Condensers, compressors, and capacitors fail in 8-10 years instead of 15+. The replacement category alone is a defining service revenue stream for every Arizona HVAC contractor.",
        },
        {
          h: "Monsoon season dust storms clog systems in hours.",
          p: "July through September monsoons hit the Valley with massive dust storms. Condenser coils foul, efficiency drops 25-40%, emergency cleaning and recovery work spikes. Pre-ranked HVAC contractors capture the wave.",
        },
        {
          h: "Heat pumps overwork in extreme heat — design matters.",
          p: "Standard heat pumps lose efficiency above 100°F. Arizona HVAC contractors who specialize in heat-pump-optimized installation for extreme heat (variable-speed, dual-fuel, oversized condenser) win the high-AOV replacement category.",
        },
        {
          h: "Phoenix is sprawl — submarket pages are essential.",
          p: "Scottsdale to Buckeye is 60 miles. Generic 'Phoenix HVAC' SEO doesn't survive. Dedicated submarket pages for every Valley city you serve are mandatory for ranking depth.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Arizona Customers Find HVAC Contractors",
      title: "The Phoenix map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for HVAC in Arizona. Three pinned results sit above every organic listing for HVAC-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Arizona HVAC customers searching at that moment.",
        "The work to rank in Arizona is concrete: a complete Google Business Profile rebuild with proper HVAC categories and Arizona ROC (C-39) license verification, manufacturer dealer credentials (Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi where applicable), citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Arizona-specific seasonal calendar, and submarket-specific landing pages for every Arizona metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency HVAC call is being searched right now somewhere in Arizona. Whether it goes to you or a competitor is decided by map pack position, not by which contractor is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Arizona HVAC Strategy",
      title: "Six Arizona-calibrated workstreams that compound month over month.",
      lede: "Generic HVAC marketing playbooks don't survive Arizona dynamics. The six workstreams below are calibrated to the specific factors driving Arizona HVAC demand — climate stress, equipment lifespan patterns, regulatory environment, and competitive landscape. Each runs every month for the duration of the engagement.",
      items: [
        "Extreme-heat specialty pages — emergency AC repair, condenser replacement, capacitor service, refrigerant recharge, heat damage prevention.",
        "Monsoon recovery and seasonal cleaning landing pages — pre-positioned for July-September dust storm windows.",
        "Heat pump optimization pages — variable-speed installation, dual-fuel systems, extreme-heat-rated equipment.",
        "Submarket-specific pages for Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, Queen Creek.",
        "Bilingual Spanish landing pages for South Phoenix, Maryvale, West Valley markets.",
        "Arizona ROC C-39 license verification integrated with citation profiles.",
      ],
    },
    cities: {
      eyebrow: "Arizona Cities We Serve",
      title:
        "Dedicated Arizona city pages built around each metro's specific HVAC market.",
      lede: "Each Arizona city below has its own market dynamics, equipment mix, and competitive landscape. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Arizona metros where our HVAC marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Phoenix",
          p: "Hottest US metro. 115°F+ destroys condensers, heat pumps overwork, monsoon dust clogs systems. Fast suburban growth in Buckeye, Surprise, Goodyear.",
        },
        {
          h: "Tucson",
          p: "Southern AZ — slightly milder than Phoenix but still extreme. University commercial work. Monsoon season impact on outdoor units.",
        },
        {
          h: "Mesa",
          p: "East Valley submarket. Family residential, slab homes, HVAC replacement cycles 8-10 years (vs 15+ in milder climates) — strong recurring market.",
        },
        {
          h: "Scottsdale",
          p: "Affluent North Valley. Premium replacement equipment market — multi-zone systems, smart controls, custom installation. High AOV.",
        },
      ],
    },
    faqEyebrow: "Arizona HVAC Contractor FAQ",
    faqs: [
      {
        q: "How fast can an Arizona HVAC contractor rank in the map pack?",
        a: "Most Arizona HVAC contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Less competitive West Valley submarkets like Buckeye, Surprise, and Goodyear often reach top-three inside 60 days because the field is less saturated and growing quickly. Hyper-competitive Scottsdale and Central Phoenix usually take six months.",
      },
      {
        q: "Will this help with monsoon season HVAC marketing?",
        a: "Yes. Monsoon season (July-September) is a major Arizona HVAC marketing window. Dust storms foul condenser coils, drop efficiency, and produce emergency service calls in waves. We pre-write monsoon-recovery content, schedule Google Posts around the seasonal pattern, and pre-position your GBP for the spike. Pre-ranked Arizona HVAC contractors capture disproportionate share of post-storm emergency volume.",
      },
      {
        q: "Do you handle GBP suspensions for Arizona HVAC contractors?",
        a: "Yes. Reinstatement is included on every plan. Arizona HVAC contractors see elevated suspension rates because of the dense East Valley competitive landscape, service-area-business verification issues, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this work for HVAC contractors in newer West Valley submarkets?",
        a: "Yes. West Valley submarkets — Buckeye, Surprise, Goodyear, Avondale, Queen Creek — are some of our strongest performance categories because they're growing fast and the ranking competition is lighter. New construction generates steady HVAC service and replacement demand. Most West Valley HVAC contractors reach top-three rankings inside 75 days.",
      },
      {
        q: "Can you handle Spanish-language SEO for Phoenix HVAC markets?",
        a: "Yes. Bilingual landing pages and Spanish Google Ads are available on the Authority tier. South Phoenix, Maryvale, parts of Mesa, and the West Valley generate substantial Spanish-language HVAC search at consistently lower keyword competition than English.",
      },
      {
        q: "Will this work for maintenance membership marketing in Arizona?",
        a: "Yes — Arizona is exceptional for membership economics because of the extreme-heat operating conditions. Members get priority service during peak demand windows (a real value differentiator when emergency calls run 5+ days out in July) plus the seasonal cleaning and tune-up cadence that prevents the catastrophic failures Arizona heat causes. We build dedicated membership landing pages and integrate enrollment with your dispatch software.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Arizona metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, manufacturer credential opportunities, review velocity vs the Arizona HVAC contractors outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
      checks: [
        "No long-term contract — month to month",
        "GBP reinstatement included if suspension happens",
        "Starting at $750/mo · No setup fee",
        "Free Arizona audit before any commitment",
        "Active across all Arizona metros — Phoenix, Tucson, Mesa, Scottsdale and beyond",
      ],
    },
  },

  california: {
    name: "California",
    slug: "california",
    metaTitle: "HVAC Marketing Agency in California",
    metaDescription:
      "HVAC marketing agency for California contractors. Map pack rankings, GBP optimization, Google Ads, maintenance memberships & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free California HVAC Audit",
      "Los Angeles · San Francisco Bay Area · San Diego · Sacramento",
      "GBP · Memberships · Google Ads · R-454B Transition",
      "500+ Local Businesses Ranked · 35+ HVAC Contractors Served",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "California HVAC: Title 24 Mandate, Heat Pump Conversion Wave, Refrigerant Transition.",
      headlinePre: "HVAC Marketing Agency in",
      accent: "California.",
      sub: "California HVAC is the country's largest and most regulated market. Title 24 Part 6 — the energy efficiency code that updates every three years — forces specific HVAC equipment, sizing, and installation practices that generalist contractors struggle to navigate. The 2023 update accelerated heat pump conversion requirements, particularly in new construction. The R-410A to R-454B refrigerant transition (starting 2025) is reshaping every replacement decision. California Climate Investment incentives stack with IRA federal tax credits for heat pumps to create the most aggressive HVAC conversion economics anywhere in the country. We help California HVAC contractors win local SEO across LA, the Bay Area, San Diego, Sacramento, and the Central Valley so customers find your business first.",
      trustExtra: { num: "39M", label: "California Population" },
    },
    problem: {
      eyebrow: "Why California HVAC Marketing Is Different",
      title:
        "Four California-specific dynamics that decide which HVAC contractors win the map pack.",
      lede: "California HVAC has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to California HVAC economics — equipment lifespan, climate stress patterns, demographic search behavior, and competitive density.",
      cards: [
        {
          h: "Title 24 compliance is a competitive moat.",
          p: "California's Title 24 energy code is the most aggressive in the US. HVAC contractors who understand and properly execute Title 24 compliance win the high-AOV replacement and new-construction work. Generalists installing non-compliant equipment face permit failures, retrofits, and reputational damage.",
        },
        {
          h: "Heat pump conversion is the biggest market shift in 20 years.",
          p: "California is forcing heat pump conversion through code requirements, incentives, and gas hookup bans in dozens of cities. IRA federal tax credits stack with state Climate Investment incentives to make heat pump replacement economically attractive for millions of California homes.",
        },
        {
          h: "R-410A to R-454B transition reshapes every replacement.",
          p: "Starting 2025, new HVAC equipment uses R-454B refrigerant instead of R-410A. Repair vs replace decisions for older systems now favor replacement. HVAC contractors marketed around the transition capture the upgrade wave.",
        },
        {
          h: "Spanish-language search is structural across California.",
          p: "East LA, San Gabriel Valley, San Diego South Bay, Central Valley, parts of Bay Area. Spanish-language HVAC search at substantial volume with consistently lower keyword competition than English.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How California Customers Find HVAC Contractors",
      title: "The Los Angeles map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for HVAC in California. Three pinned results sit above every organic listing for HVAC-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four California HVAC customers searching at that moment.",
        "The work to rank in California is concrete: a complete Google Business Profile rebuild with proper HVAC categories and California CSLB (C-20) license verification, manufacturer dealer credentials (Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi where applicable), citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a California-specific seasonal calendar, and submarket-specific landing pages for every California metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency HVAC call is being searched right now somewhere in California. Whether it goes to you or a competitor is decided by map pack position, not by which contractor is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our California HVAC Strategy",
      title:
        "Six California-calibrated workstreams that compound month over month.",
      lede: "Generic HVAC marketing playbooks don't survive California dynamics. The six workstreams below are calibrated to the specific factors driving California HVAC demand — climate stress, equipment lifespan patterns, regulatory environment, and competitive landscape. Each runs every month for the duration of the engagement.",
      items: [
        "Title 24 compliance landing pages — Title 24-compliant heat pump installation, condensing furnace replacement, ductwork sealing service.",
        "Heat pump conversion pages with IRA tax credit and California Climate Investment stacking calculators for high-value lead conversion.",
        "R-454B refrigerant transition content — repair-vs-replace decision tools, equipment availability, customer education content.",
        "Bilingual Spanish landing pages for East LA, San Gabriel Valley, San Diego South Bay, Central Valley.",
        "CSLB C-20 (HVAC) license verification displayed prominently across citation profiles for California trust signal compounding.",
        "Bay Area / LA submarket pages — Mid-City, San Gabriel Valley, South Bay, North County, Inland Empire — with submarket-specific Title 24 enforcement context.",
      ],
    },
    cities: {
      eyebrow: "California Cities We Serve",
      title:
        "Dedicated California city pages built around each metro's specific HVAC market.",
      lede: "Each California city below has its own market dynamics, equipment mix, and competitive landscape. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the California metros where our HVAC marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Los Angeles",
          p: "Largest US HVAC market. Title 24 efficiency mandate compliance, older homes lack central AC retrofits, Spanish-language critical, heat pump conversion demand.",
        },
        {
          h: "San Francisco Bay Area",
          p: "Mild coastal climate + extreme inland Bay heat. Tech corridor commercial work. Title 24 forced heat pump conversions in new construction and replacement.",
        },
        {
          h: "San Diego",
          p: "Coastal mild climate, military base commercial work, growing inland heat zones. Title 24 compliance complexity in retrofit installations.",
        },
        {
          h: "Sacramento",
          p: "Capital region hot dry summers. Title 24 inland aggressive enforcement. Older Land Park / East Sac homes need retrofits. Growth corridor.",
        },
      ],
    },
    faqEyebrow: "California HVAC Contractor FAQ",
    faqs: [
      {
        q: "How fast can a California HVAC contractor rank in the map pack?",
        a: "Most California HVAC contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 120 to 240 days because California is among the most competitive HVAC markets in the country. LA, the Bay Area, San Diego, and Sacramento are particularly dense. Less competitive Inland Empire and Central Valley submarkets often reach top-three inside 90 days.",
      },
      {
        q: "Can you handle Spanish-language SEO for California HVAC markets?",
        a: "Yes. Bilingual landing pages and Spanish Google Ads are available on the Authority tier. East LA, the San Gabriel Valley, San Diego's South Bay, the Central Valley, and parts of the Bay Area generate substantial Spanish-language HVAC search. Keyword competition in Spanish is consistently lower than in English, making the ROI strong for California HVAC contractors willing to serve those markets.",
      },
      {
        q: "Will this work for heat pump conversion marketing?",
        a: "Yes — and California is the best US state for heat pump conversion economics because Title 24 incentives stack with IRA federal tax credits. We build dedicated heat pump conversion landing pages with savings calculators, integrate enrollment forms with your dispatch software, and run paid ads tuned to heat-pump-intent and conversion-incentive keywords. The customer education content matters more in California than anywhere else because the incentive landscape is genuinely complex.",
      },
      {
        q: "How do you handle Title 24 compliance positioning?",
        a: "Title 24 compliance is a real competitive advantage in California HVAC because most generalist contractors don't market for it. We build dedicated Title 24 landing pages, integrate Title 24 specifics into your GBP attributes and Service schema, and seed Q&A entries with Title 24 questions California customers actually search for. Customers searching for Title 24-compliant HVAC contractors are pre-qualified high-AOV leads.",
      },
      {
        q: "Do you handle GBP suspensions for California HVAC contractors?",
        a: "Yes. Reinstatement is included on every plan. California HVAC contractors see elevated suspension rates because of the dense LA and Bay Area competitive landscape, CSLB verification dynamics, and duplicate listings from older agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Do you serve California HVAC contractors outside the four major metros?",
        a: "Yes. We work with HVAC contractors across all of California including Fresno, Bakersfield, Riverside, San Bernardino, Long Beach, Anaheim, Stockton, Modesto, Santa Rosa, and the broader Central Valley. Strategy calibrates to local competitive density and Title 24 enforcement intensity by climate zone.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across California metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, manufacturer credential opportunities, review velocity vs the California HVAC contractors outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
      checks: [
        "No long-term contract — month to month",
        "GBP reinstatement included if suspension happens",
        "Starting at $750/mo · No setup fee",
        "Free California audit before any commitment",
        "Active across all California metros — Los Angeles, San Francisco Bay Area, San Diego, Sacramento and beyond",
      ],
    },
  },

  florida: {
    name: "Florida",
    slug: "florida",
    metaTitle: "HVAC Marketing Agency in Florida",
    metaDescription:
      "HVAC marketing agency for Florida contractors. Map pack rankings, GBP optimization, Google Ads, maintenance memberships & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Florida HVAC Audit",
      "Miami · Tampa · Orlando · Jacksonville",
      "GBP · Memberships · Google Ads · R-454B Transition",
      "500+ Local Businesses Ranked · 35+ HVAC Contractors Served",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Florida HVAC Never Stops. Year-Round Cooling, Salt-Air Corrosion, Hurricane Recovery.",
      headlinePre: "HVAC Marketing Agency in",
      accent: "Florida.",
      sub: "Florida is the only US state where HVAC contractors face year-round cooling demand instead of the two-peak pattern that drives the rest of the country. Coastal salt air destroys condenser coils at three times the inland rate. Hurricane season (June through November) damages outdoor units across coastal counties and creates emergency replacement waves. Snowbird homes go from dormant to occupied overnight, exposing every cooling system that sat idle through summer. We help Florida HVAC contractors win local SEO across Miami, Tampa, Orlando, Jacksonville, and every Florida metro so you're the contractor customers find first when their AC quits at 2 PM in August.",
      trustExtra: { num: "22M", label: "Florida Population" },
    },
    problem: {
      eyebrow: "Why Florida HVAC Marketing Is Different",
      title:
        "Four Florida-specific dynamics that decide which HVAC contractors win the map pack.",
      lede: "Florida HVAC has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Florida HVAC economics — equipment lifespan, climate stress patterns, demographic search behavior, and competitive density.",
      cards: [
        {
          h: "Year-round cooling is a Florida-only dynamic.",
          p: "Florida doesn't get the dual-peak demand windows that drive the rest of US HVAC. Demand runs hot from March through November and steady through winter. Marketing cadence and Google Posts have to run year-round, not seasonally.",
        },
        {
          h: "Salt-air corrosion is destroying coastal condensers.",
          p: "Coastal Florida — Miami-Dade, Broward, Pinellas, Hillsborough — sees condenser coil corrosion at 3× the inland rate. Replacement cycles run 8-10 years coastal vs 12-15 inland. Anti-corrosion coating and stainless service is a dedicated revenue category.",
        },
        {
          h: "Hurricane season is a wave of forced replacements.",
          p: "June through November, hurricanes damage outdoor units across coastal counties. Insurance-claim replacement is a major business category. Pre-ranked HVAC contractors capture the post-storm replacement wave.",
        },
        {
          h: "Spanish-language search is enormous in South Florida.",
          p: "Miami-Dade, Hialeah, Doral, parts of Tampa. Spanish-language HVAC search at substantial volume with consistently lower keyword competition than English. Bilingual landing pages and Spanish Google Ads convert at favorable economics.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Florida Customers Find HVAC Contractors",
      title: "The Miami map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for HVAC in Florida. Three pinned results sit above every organic listing for HVAC-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Florida HVAC customers searching at that moment.",
        "The work to rank in Florida is concrete: a complete Google Business Profile rebuild with proper HVAC categories and Florida CILB license verification, manufacturer dealer credentials (Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi where applicable), citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Florida-specific seasonal calendar, and submarket-specific landing pages for every Florida metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency HVAC call is being searched right now somewhere in Florida. Whether it goes to you or a competitor is decided by map pack position, not by which contractor is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Florida HVAC Strategy",
      title: "Six Florida-calibrated workstreams that compound month over month.",
      lede: "Generic HVAC marketing playbooks don't survive Florida dynamics. The six workstreams below are calibrated to the specific factors driving Florida HVAC demand — climate stress, equipment lifespan patterns, regulatory environment, and competitive landscape. Each runs every month for the duration of the engagement.",
      items: [
        "Year-round content cadence — no seasonal lull. Weekly Google Posts on a 12-month Florida HVAC calendar with coastal corrosion, hurricane prep, and year-round cooling themes.",
        "Salt-air specialty service pages — condenser replacement, coastal coil cleaning, anti-corrosion coating service, stainless installation.",
        "Hurricane preparation and recovery landing pages pre-positioned for June-November storm windows.",
        "Spanish-language GBP optimization and landing pages for Miami-Dade, Broward, Hialeah, Doral, and Tampa Spanish markets.",
        "Florida CILB license verification linked from citation profiles for trust signal compounding.",
        "Maintenance membership program landing pages — recurring revenue at 80%+ margin, the highest-leverage HVAC marketing category in Florida year-round demand patterns.",
      ],
    },
    cities: {
      eyebrow: "Florida Cities We Serve",
      title:
        "Dedicated Florida city pages built around each metro's specific HVAC market.",
      lede: "Each Florida city below has its own market dynamics, equipment mix, and competitive landscape. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Florida metros where our HVAC marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Miami",
          p: "Year-round cooling demand. Salt-air corrosion destroys condensers 3× faster inland than coastal. Spanish-language critical across Hialeah, Doral, Little Havana. Hurricane recovery work.",
        },
        {
          h: "Tampa",
          p: "Coastal humidity + salt-air condenser corrosion. Slab homes. Growing residential demand. Strong AC replacement category — Florida's oldest HVAC equipment concentration.",
        },
        {
          h: "Orlando",
          p: "Tourism commercial work (theme parks, hotels, restaurants). Residential growth in Lake Nona, Winter Garden, Clermont. Year-round cooling load.",
        },
        {
          h: "Jacksonville",
          p: "Largest FL city by area — service-area logistics matter. Coastal humidity, hurricane drainage impact on outdoor units, fast-growing southside.",
        },
      ],
    },
    faqEyebrow: "Florida HVAC Contractor FAQ",
    faqs: [
      {
        q: "How fast can a Florida HVAC contractor rank in the map pack?",
        a: "Most Florida HVAC contractors see initial map pack movement within 60 to 90 days. Top-three rankings in primary keywords typically take 90 to 180 days. Less competitive Florida metros like Cape Coral, Tallahassee, and parts of the Panhandle often reach top-three inside 75 days. Hyper-competitive Miami, Tampa, and Orlando typically take six months because the HVAC competitive density in those metros is among the highest in the country.",
      },
      {
        q: "Can you handle Spanish-language SEO for South Florida HVAC?",
        a: "Yes. Spanish-language landing pages and Spanish Google Ads are available on the Authority tier. South Florida specifically — Miami-Dade, Broward, Hialeah, Doral — generates substantial Spanish-language HVAC search volume with consistently lower keyword competition than English. ROI is strong for Florida HVAC contractors willing to serve those markets, especially in AC repair and emergency service categories.",
      },
      {
        q: "Will this help with hurricane-season HVAC replacement marketing?",
        a: "Yes. Hurricane season is one of the highest-leverage windows for Florida HVAC marketing. Outdoor units are damaged by water, debris, and storm surge across coastal counties. Insurance-claim replacement runs 4-6× normal volume in the weeks following major storms. We pre-position your GBP and pre-write storm-recovery content that publishes in real time. Pre-ranked Florida HVAC contractors capture disproportionate share of the post-storm replacement wave.",
      },
      {
        q: "Do you handle GBP suspensions for Florida HVAC contractors?",
        a: "Yes. Reinstatement is included on every plan. Florida HVAC contractors see elevated suspension rates because of the service-area-business model, competitor false reporting in dense Miami and Tampa markets, and duplicate listings from older agencies. Most reinstatements resolve within seven to twenty-one days. We've reinstated 300-plus profiles across home services nationally.",
      },
      {
        q: "Will this work for maintenance membership program marketing?",
        a: "Yes — and Florida is the best US state for membership program economics because of year-round cooling demand. We build dedicated maintenance membership landing pages, integrate enrollment funnels with your dispatch software (ServiceTitan, FieldEdge, Housecall Pro), and run Google Ads tuned to maintenance-intent keywords. Membership programs typically run 80%+ gross margin and produce 30-50% of total revenue once scaled.",
      },
      {
        q: "Do you serve Florida HVAC contractors outside the four major metros?",
        a: "Yes. We work with HVAC contractors in every Florida metro and most secondary markets — Cape Coral, Fort Myers, Sarasota, Naples, Gainesville, Tallahassee, Pensacola, Daytona, West Palm Beach. Strategy adapts to local competitive density. Smaller markets typically see faster ranking timelines because the competition is less saturated.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Florida metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, manufacturer credential opportunities, review velocity vs the Florida HVAC contractors outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
      checks: [
        "No long-term contract — month to month",
        "GBP reinstatement included if suspension happens",
        "Starting at $750/mo · No setup fee",
        "Free Florida audit before any commitment",
        "Active across all Florida metros — Miami, Tampa, Orlando, Jacksonville and beyond",
      ],
    },
  },

  georgia: {
    name: "Georgia",
    slug: "georgia",
    metaTitle: "HVAC Marketing Agency in Georgia",
    metaDescription:
      "HVAC marketing agency for Georgia contractors. Map pack rankings, GBP optimization, Google Ads, maintenance memberships & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Georgia HVAC Audit",
      "Atlanta · Augusta · Savannah · Columbus",
      "GBP · Memberships · Google Ads · R-454B Transition",
      "500+ Local Businesses Ranked · 35+ HVAC Contractors Served",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Georgia HVAC: Atlanta Growth Boom, Hot Humid Summers, Occasional Freeze Surprises.",
      headlinePre: "HVAC Marketing Agency in",
      accent: "Georgia.",
      sub: "Georgia HVAC sits on top of one of the country's most aggressive growth curves. Metro Atlanta has added more than 100,000 residents annually for the past decade. North Fulton, Cobb, Gwinnett, Forsyth, and Cherokee counties are building thousands of new homes — each one a future HVAC customer. Hot humid summers (90+ degree days, 80%+ humidity) drive constant cooling demand and shorten equipment cycles. Occasional freeze events — 2014's snowmageddon, the 2022 Christmas freeze — catch Georgia HVAC contractors and homeowners off-guard and produce massive emergency furnace and heat pump call volume. We help Georgia HVAC contractors win local SEO across Atlanta, the surrounding metros, and growing secondary markets.",
      trustExtra: { num: "11M", label: "Georgia Population" },
    },
    problem: {
      eyebrow: "Why Georgia HVAC Marketing Is Different",
      title:
        "Four Georgia-specific dynamics that decide which HVAC contractors win the map pack.",
      lede: "Georgia HVAC has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Georgia HVAC economics — equipment lifespan, climate stress patterns, demographic search behavior, and competitive density.",
      cards: [
        {
          h: "Atlanta growth is creating new HVAC ranking arenas weekly.",
          p: "North Fulton, Cobb, Gwinnett, Forsyth, Cherokee. Thousands of new homes, thousands of new HVAC customers, ranking competition that's still consolidating. Early movers win the moats.",
        },
        {
          h: "Hot humid summers drive shorter equipment cycles.",
          p: "Georgia humidity + sustained 90+ degree days accelerate cooling system wear. Replacement cycles run 10-12 years vs 15+ in milder climates. HVAC contractors marketed for replacement capture recurring high-AOV revenue.",
        },
        {
          h: "Occasional freeze events produce massive emergency surges.",
          p: "Georgia freezes catch HVAC contractors and homeowners off-guard because they're rare. The 2014 snowmageddon and the 2022 Christmas freeze each produced thousands of furnace failure and heat pump emergency calls.",
        },
        {
          h: "Atlanta's submarket sprawl fragments the metro.",
          p: "Buckhead doesn't search into Marietta. Each suburb is its own competitive arena. Generic 'Atlanta HVAC' SEO doesn't survive the geography.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Georgia Customers Find HVAC Contractors",
      title: "The Atlanta map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for HVAC in Georgia. Three pinned results sit above every organic listing for HVAC-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Georgia HVAC customers searching at that moment.",
        "The work to rank in Georgia is concrete: a complete Google Business Profile rebuild with proper HVAC categories and Georgia Construction Industry Licensing Board license verification, manufacturer dealer credentials (Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi where applicable), citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Georgia-specific seasonal calendar, and submarket-specific landing pages for every Georgia metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency HVAC call is being searched right now somewhere in Georgia. Whether it goes to you or a competitor is decided by map pack position, not by which contractor is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Georgia HVAC Strategy",
      title: "Six Georgia-calibrated workstreams that compound month over month.",
      lede: "Generic HVAC marketing playbooks don't survive Georgia dynamics. The six workstreams below are calibrated to the specific factors driving Georgia HVAC demand — climate stress, equipment lifespan patterns, regulatory environment, and competitive landscape. Each runs every month for the duration of the engagement.",
      items: [
        "Suburban submarket pages for North Fulton (Alpharetta, Roswell, Johns Creek), Cobb (Marietta, Smyrna), Gwinnett (Lawrenceville, Duluth), Forsyth (Cumming), Cherokee (Canton).",
        "Atlanta intown neighborhood pages — Buckhead, Midtown, Virginia-Highland, Decatur, East Atlanta.",
        "Freeze-event content pre-positioned for the rare but high-impact Georgia freeze windows.",
        "New-construction-focused content for the rapidly growing Atlanta exurbs — high-AOV multi-zone system installation.",
        "Historic district specialty pages for Savannah and Augusta — coastal humidity service, salt-air corrosion (Savannah), older home retrofit.",
        "Georgia Construction Industry Licensing Board verification integrated with citation profiles.",
      ],
    },
    cities: {
      eyebrow: "Georgia Cities We Serve",
      title:
        "Dedicated Georgia city pages built around each metro's specific HVAC market.",
      lede: "Each Georgia city below has its own market dynamics, equipment mix, and competitive landscape. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Georgia metros where our HVAC marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Atlanta",
          p: "Largest GA metro. Hyper-growth suburbs across North Fulton, Cobb, Gwinnett. Hot humid summers + occasional freeze surprises. Strong commercial work.",
        },
        {
          h: "Augusta",
          p: "Eastern GA market. Military base commercial work, older Summerville district housing, growing suburban Columbia County, mixed climate.",
        },
        {
          h: "Savannah",
          p: "Coastal metro with historic district complexity. Humidity damages outdoor units, hurricane drainage impact, tourist-driven commercial.",
        },
        {
          h: "Columbus",
          p: "Southwestern GA market. Fort Moore military base, residential growth, mixed older homes — less competitive ranking landscape.",
        },
      ],
    },
    faqEyebrow: "Georgia HVAC Contractor FAQ",
    faqs: [
      {
        q: "How fast can a Georgia HVAC contractor rank in the map pack?",
        a: "Most Georgia HVAC contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Hyper-competitive Atlanta intown neighborhoods like Buckhead, Midtown, and Decatur generally take six months. Less competitive suburban submarkets like Forsyth, Cherokee, and the broader exurbs often reach top-three inside 75 days because growth has outpaced agency saturation.",
      },
      {
        q: "Will this work for HVAC contractors in newer Atlanta exurbs?",
        a: "Yes. The North Atlanta exurbs — Forsyth, Cherokee, parts of Cobb and Gwinnett — are some of our strongest performance categories because they're growing fast and ranking competition is still consolidating. New construction generates steady HVAC service and replacement demand from new homeowners. Most exurb HVAC contractors reach top-three rankings inside 75 days.",
      },
      {
        q: "Do you handle GBP suspensions for Georgia HVAC contractors?",
        a: "Yes. Reinstatement is included on every plan. Atlanta HVAC contractors see elevated suspension rates because of the dense competitive landscape, service-area-business verification issues, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this help during Georgia freeze events?",
        a: "Georgia freeze events are rare but extremely high-leverage. The 2014 snowmageddon and 2022 Christmas freeze each produced thousands of furnace failure and heat pump emergency calls. We pre-write emergency freeze content and pre-position your GBP for the spike. Pre-ranked Georgia HVAC contractors capture disproportionate share of the volume because most homeowners have no HVAC relationship and search at the moment of crisis.",
      },
      {
        q: "How does this work for Savannah and the coastal historic district?",
        a: "Savannah and other coastal historic markets need specialized HVAC service messaging because of salt-air corrosion on outdoor units and humidity dynamics. We build dedicated landing pages for historic district services — salt-air condenser service, anti-corrosion installation, historic home retrofit — and tune the strategy to the coastal market.",
      },
      {
        q: "Will this work for maintenance membership marketing in Georgia?",
        a: "Yes. Georgia membership economics are strong because of sustained summer cooling demand combined with rare-but-severe winter events. We build dedicated membership landing pages, integrate enrollment with your dispatch software, and run paid ads tuned to maintenance-intent keywords. Membership programs typically run 80%+ gross margin and produce 30-50% of total revenue once scaled.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Georgia metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, manufacturer credential opportunities, review velocity vs the Georgia HVAC contractors outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
      checks: [
        "No long-term contract — month to month",
        "GBP reinstatement included if suspension happens",
        "Starting at $750/mo · No setup fee",
        "Free Georgia audit before any commitment",
        "Active across all Georgia metros — Atlanta, Augusta, Savannah, Columbus and beyond",
      ],
    },
  },

  illinois: {
    name: "Illinois",
    slug: "illinois",
    metaTitle: "HVAC Marketing Agency in Illinois",
    metaDescription:
      "HVAC marketing agency for Illinois contractors. Map pack rankings, GBP optimization, Google Ads, maintenance memberships & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Illinois HVAC Audit",
      "Chicago · Aurora · Naperville · Rockford",
      "GBP · Memberships · Google Ads · R-454B Transition",
      "500+ Local Businesses Ranked · 35+ HVAC Contractors Served",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Illinois HVAC Lives or Dies in January. Polar Vortex Furnace Emergencies Decide the Year.",
      headlinePre: "HVAC Marketing Agency in",
      accent: "Illinois.",
      sub: "Illinois HVAC has the most extreme winter demand asymmetry of any US market. A normal January is busy. A polar vortex January is a year's worth of work in two weeks. The 2019 polar vortex hit -23°F in Chicago and produced thousands of furnace failures, frozen heat pumps, and emergency replacement calls in concentrated days. The 2021 freeze and 2023 December event continued the pattern. Chicago's housing stock — pre-war bungalows, two-flats, three-flats with aging boilers — is uniquely vulnerable. We help Illinois HVAC contractors win local SEO across Chicago and every Chicagoland and downstate metro so you're ranked before the next polar vortex hits.",
      trustExtra: { num: "12.5M", label: "Illinois Population" },
    },
    problem: {
      eyebrow: "Why Illinois HVAC Marketing Is Different",
      title:
        "Four Illinois-specific dynamics that decide which HVAC contractors win the map pack.",
      lede: "Illinois HVAC has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Illinois HVAC economics — equipment lifespan, climate stress patterns, demographic search behavior, and competitive density.",
      cards: [
        {
          h: "Polar vortex events reset the entire Illinois HVAC market.",
          p: "The 2019 polar vortex hit -23°F in Chicago — a year's worth of emergency furnace and heat pump failures in two weeks. The 2021 freeze produced thousands of boiler emergencies. Pre-ranked HVAC contractors captured the wave; the rest watched.",
        },
        {
          h: "Older Chicago boilers are uniquely vulnerable.",
          p: "Most Chicago bungalows, two-flats, and three-flats predate WWII and run aging steam or hot-water boilers. End-of-life replacement is a constant pipeline. Boiler-to-modern-furnace conversion is a high-AOV specialty category.",
        },
        {
          h: "Chicago is 77 separate hyperlocal markets.",
          p: "Lincoln Park doesn't search into Bridgeport. Each Chicago community area is its own competitive arena. Generic citywide HVAC SEO doesn't survive Chicago's neighborhood-driven search behavior.",
        },
        {
          h: "Spanish-language search is real in Pilsen, Little Village, Logan Square.",
          p: "Chicago's Spanish-speaking neighborhoods generate meaningful HVAC search volume. Bilingual landing pages and Spanish Google Ads convert at favorable economics where the demographic supports it.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Illinois Customers Find HVAC Contractors",
      title: "The Chicago map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for HVAC in Illinois. Three pinned results sit above every organic listing for HVAC-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Illinois HVAC customers searching at that moment.",
        "The work to rank in Illinois is concrete: a complete Google Business Profile rebuild with proper HVAC categories and Illinois IDPH license verification, manufacturer dealer credentials (Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi where applicable), citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Illinois-specific seasonal calendar, and submarket-specific landing pages for every Illinois metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency HVAC call is being searched right now somewhere in Illinois. Whether it goes to you or a competitor is decided by map pack position, not by which contractor is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Illinois HVAC Strategy",
      title: "Six Illinois-calibrated workstreams that compound month over month.",
      lede: "Generic HVAC marketing playbooks don't survive Illinois dynamics. The six workstreams below are calibrated to the specific factors driving Illinois HVAC demand — climate stress, equipment lifespan patterns, regulatory environment, and competitive landscape. Each runs every month for the duration of the engagement.",
      items: [
        "Pre-positioned polar vortex content — furnace emergency repair, heat pump frozen unit thaw, emergency replacement — published the moment polar vortex events begin.",
        "Chicago community area submarket pages — Lincoln Park, Wicker Park, West Loop, River North, Hyde Park, Logan Square, Pilsen.",
        "Suburban submarket pages for Aurora, Naperville, Schaumburg, Arlington Heights, Joliet, Elgin, Evanston, Oak Park.",
        "Boiler-to-furnace conversion specialty pages — high-AOV Chicago older-home category.",
        "Bilingual Spanish landing pages for Pilsen, Little Village, Logan Square, Humboldt Park markets.",
        "Illinois IDPH HVAC contractor license verification integrated with citation profiles.",
      ],
    },
    cities: {
      eyebrow: "Illinois Cities We Serve",
      title:
        "Dedicated Illinois city pages built around each metro's specific HVAC market.",
      lede: "Each Illinois city below has its own market dynamics, equipment mix, and competitive landscape. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Illinois metros where our HVAC marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Chicago",
          p: "Largest IL metro. Brutal winters, older boiler-heated housing across North/South Side, 77 community areas — hyperlocal search behavior.",
        },
        {
          h: "Aurora",
          p: "Second-largest IL city. Western suburbs growth, mixed older furnace homes, polar vortex emergency demand, family residential focus.",
        },
        {
          h: "Naperville",
          p: "Affluent western suburb. Custom homes, multi-zone systems, premium replacement equipment. Highest AOV HVAC submarket in IL.",
        },
        {
          h: "Rockford",
          p: "Northern IL market. Older industrial-era housing, brutal winters, lower competitive density vs Chicago — faster ranking timelines.",
        },
      ],
    },
    faqEyebrow: "Illinois HVAC Contractor FAQ",
    faqs: [
      {
        q: "How fast can an Illinois HVAC contractor rank in the map pack?",
        a: "Most Illinois HVAC contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Hyper-competitive Chicago neighborhoods like Lincoln Park, River North, and the West Loop generally take six months. Less competitive Chicagoland suburbs like Aurora, Joliet, Schaumburg, and downstate Illinois often reach top-three inside 75 days.",
      },
      {
        q: "Will this help during polar vortex events?",
        a: "This is the highest-leverage window for Illinois HVAC marketing. We pre-write emergency content — furnace failure, heat pump frozen unit, emergency replacement, dual-fuel system installation — and pre-position your GBP for the spike. Pre-ranked Illinois HVAC contractors capture disproportionate share of post-vortex emergency call volume. The 2019 polar vortex was a year's worth of bookings for HVAC contractors holding top map pack positions.",
      },
      {
        q: "Can you handle Spanish-language SEO for Chicago HVAC neighborhoods?",
        a: "Yes. Bilingual landing pages and Spanish Google Ads are available on the Authority tier. Pilsen, Little Village, Logan Square, and Humboldt Park generate substantial Spanish-language HVAC search at consistently lower keyword competition than English.",
      },
      {
        q: "Do you handle GBP suspensions for Illinois HVAC contractors?",
        a: "Yes. Reinstatement is included on every plan. Illinois HVAC contractors see elevated suspension rates because of the dense Chicago competitive landscape, neighborhood-on-neighborhood reporting, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this work for boiler-to-furnace conversion marketing?",
        a: "Yes. Boiler-to-furnace conversion is a major specialty category in Chicago because so much of the housing stock runs aging steam or hot-water boilers. We build dedicated conversion landing pages, optimize your GBP for the relevant categories, and seed Q&A entries with boiler-replacement questions Chicago customers actually search for. Conversion is a high-AOV category with strong margins.",
      },
      {
        q: "Do you serve Illinois HVAC contractors outside the Chicago metro?",
        a: "Yes. We work with HVAC contractors across all of Illinois including Rockford, Peoria, Springfield, Champaign-Urbana, Bloomington, Decatur, and the broader downstate market. Strategy calibrates to local competitive density and the dominant equipment mix.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Illinois metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, manufacturer credential opportunities, review velocity vs the Illinois HVAC contractors outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
      checks: [
        "No long-term contract — month to month",
        "GBP reinstatement included if suspension happens",
        "Starting at $750/mo · No setup fee",
        "Free Illinois audit before any commitment",
        "Active across all Illinois metros — Chicago, Aurora, Naperville, Rockford and beyond",
      ],
    },
  },

  "north-carolina": {
    name: "North Carolina",
    slug: "north-carolina",
    metaTitle: "HVAC Marketing Agency in North Carolina",
    metaDescription:
      "HVAC marketing agency for North Carolina contractors. Map pack rankings, GBP optimization, Google Ads, memberships & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free North Carolina HVAC Audit",
      "Charlotte · Raleigh · Greensboro · Durham",
      "GBP · Memberships · Google Ads · R-454B Transition",
      "500+ Local Businesses Ranked · 35+ HVAC Contractors Served",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "North Carolina: Heat Pump Capital of the Southeast. Charlotte and Triangle Growth Boom.",
      headlinePre: "HVAC Marketing Agency in",
      accent: "North Carolina.",
      sub: "North Carolina is the heat pump capital of the Southeast — the equipment category that dominates HVAC installation across both Charlotte and the Raleigh-Durham Triangle. The mild winters and hot humid summers make heat pumps the dominant residential HVAC choice across the state, and Charlotte plus the Triangle are two of the fastest-growing US metros. Combined population growth produces tens of thousands of new homes annually, each one a future HVAC customer. Older Charlotte and Greensboro neighborhoods built mid-century need retrofit work. We help North Carolina HVAC contractors win local SEO across Charlotte, Raleigh, Durham, Greensboro, and every growing submarket — Cary, Apex, Huntersville, Concord, Fort Mill — so your business captures the heat-pump growth wave.",
      trustExtra: { num: "10.7M", label: "North Carolina Population" },
    },
    problem: {
      eyebrow: "Why North Carolina HVAC Marketing Is Different",
      title:
        "Four North Carolina-specific dynamics that decide which HVAC contractors win the map pack.",
      lede: "North Carolina HVAC has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to North Carolina HVAC economics — equipment lifespan, climate stress patterns, demographic search behavior, and competitive density.",
      cards: [
        {
          h: "Heat pump is the dominant residential equipment category.",
          p: "Mild winters + hot humid summers make heat pumps the dominant NC HVAC choice. HVAC contractors who specialize in heat pump installation, service, and replacement win the high-volume residential category.",
        },
        {
          h: "Charlotte and Triangle growth is the biggest market shift in NC HVAC.",
          p: "Charlotte adds 75,000+ residents annually. The Triangle adds another 60,000+. Thousands of new HVAC installations every year. Ranking competition is still consolidating — early movers establish defensible positions.",
        },
        {
          h: "Suburban submarket sprawl fragments the metros.",
          p: "Lake Norman doesn't search into Ballantyne. Cary doesn't search into Apex. Each suburb is its own competitive arena. Generic citywide SEO doesn't survive.",
        },
        {
          h: "Mixed climate creates year-round service demand.",
          p: "NC sees humid summers, occasional freeze events, and enough seasonal variation to drive consistent HVAC service demand year-round. The two-peak demand pattern fits standard membership program economics perfectly.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How North Carolina Customers Find HVAC Contractors",
      title: "The Charlotte map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for HVAC in North Carolina. Three pinned results sit above every organic listing for HVAC-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four North Carolina HVAC customers searching at that moment.",
        "The work to rank in North Carolina is concrete: a complete Google Business Profile rebuild with proper HVAC categories and NC State Board of Examiners license verification, manufacturer dealer credentials (Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi where applicable), citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a North Carolina-specific seasonal calendar, and submarket-specific landing pages for every North Carolina metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency HVAC call is being searched right now somewhere in North Carolina. Whether it goes to you or a competitor is decided by map pack position, not by which contractor is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our North Carolina HVAC Strategy",
      title:
        "Six North Carolina-calibrated workstreams that compound month over month.",
      lede: "Generic HVAC marketing playbooks don't survive North Carolina dynamics. The six workstreams below are calibrated to the specific factors driving North Carolina HVAC demand — climate stress, equipment lifespan patterns, regulatory environment, and competitive landscape. Each runs every month for the duration of the engagement.",
      items: [
        "Heat pump specialty pages — heat pump installation, heat pump repair, heat pump replacement, dual-fuel system, geothermal heat pump (the highest-AOV NC category).",
        "Charlotte submarket pages — Ballantyne, South End, Myers Park, Dilworth, Plaza Midwood, Lake Norman, Huntersville, Concord.",
        "Triangle submarket pages — Raleigh Inside-the-Beltline, North Raleigh, Cary, Apex, Holly Springs, Durham, Chapel Hill.",
        "New-construction-focused content for the rapidly growing Charlotte and Triangle suburbs.",
        "Older-home retrofit pages for established Charlotte and Greensboro neighborhoods — boiler-to-heat-pump conversion.",
        "NC State Board HVAC contractor license verification integrated with citation profiles.",
      ],
    },
    cities: {
      eyebrow: "North Carolina Cities We Serve",
      title:
        "Dedicated North Carolina city pages built around each metro's specific HVAC market.",
      lede: "Each North Carolina city below has its own market dynamics, equipment mix, and competitive landscape. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the North Carolina metros where our HVAC marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Charlotte",
          p: "Largest NC metro. Banking corridor commercial work, hyper-growth suburbs in Lake Norman, South Charlotte, Ballantyne. Heat pump primary.",
        },
        {
          h: "Raleigh",
          p: "Research Triangle hub. Tech and biotech growth, affluent residential, fast-growing Cary, Apex, Holly Springs. Heat pump capital.",
        },
        {
          h: "Greensboro",
          p: "Triad market. Mixed older industrial-era housing and new growth. Mid-size metro with less saturated competitive landscape.",
        },
        {
          h: "Durham",
          p: "Triangle east side. Duke University commercial work, historic Trinity Park district, growing south Durham residential.",
        },
      ],
    },
    faqEyebrow: "North Carolina HVAC Contractor FAQ",
    faqs: [
      {
        q: "How fast can a North Carolina HVAC contractor rank in the map pack?",
        a: "Most NC HVAC contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Hyper-competitive Charlotte and Raleigh urban cores can take six months. Less competitive suburban submarkets and secondary markets like Greensboro, Winston-Salem, and Wilmington often reach top-three inside 75 days because growth has outpaced agency saturation.",
      },
      {
        q: "Will this work for heat pump specialty marketing?",
        a: "Yes — and NC is the best US state for heat pump marketing because the climate makes heat pumps the dominant residential equipment category. We build dedicated heat pump landing pages, integrate IRA tax credit information for high-value lead conversion, optimize your GBP for heat-pump-specific categories, and seed Q&A entries with heat pump questions NC customers actually search for.",
      },
      {
        q: "Will this work for HVAC contractors in newer Charlotte and Triangle suburbs?",
        a: "Yes. The Charlotte and Raleigh-Durham suburbs are some of our strongest performance categories. Lake Norman, Huntersville, Concord, Fort Mill (SC border), Cary, Apex, Holly Springs, Wake Forest, and the broader exurbs are all growing fast with ranking competition still consolidating. Most suburban HVAC contractors reach top-three rankings inside 75 days.",
      },
      {
        q: "Do you handle GBP suspensions for NC HVAC contractors?",
        a: "Yes. Reinstatement is included on every plan. NC HVAC contractors see elevated suspension rates in Charlotte and the Triangle because of the dense competitive landscape, service-area-business verification issues, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this help during NC freeze events?",
        a: "Yes. NC sees occasional but high-impact freeze events that strain heat pumps in particular. We pre-write emergency freeze content — frozen heat pump thawing, emergency furnace service, auxiliary heat troubleshooting — and pre-position your GBP for the spike. Pre-ranked NC HVAC contractors capture disproportionate share of freeze-event call volume.",
      },
      {
        q: "Do you serve NC HVAC contractors outside the major metros?",
        a: "Yes. We work with HVAC contractors across all of North Carolina including Winston-Salem, Wilmington, Asheville, Fayetteville, Greenville, High Point, Concord, Gastonia, and the broader secondary markets. Strategy calibrates to local competitive density and submarket dynamics.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across North Carolina metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, manufacturer credential opportunities, review velocity vs the North Carolina HVAC contractors outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
      checks: [
        "No long-term contract — month to month",
        "GBP reinstatement included if suspension happens",
        "Starting at $750/mo · No setup fee",
        "Free North Carolina audit before any commitment",
        "Active across all North Carolina metros — Charlotte, Raleigh, Greensboro, Durham and beyond",
      ],
    },
  },

  texas: {
    name: "Texas",
    slug: "texas",
    metaTitle: "HVAC Marketing Agency in Texas",
    metaDescription:
      "HVAC marketing agency for Texas contractors. Map pack rankings, GBP optimization, Google Ads, maintenance memberships & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Texas HVAC Audit",
      "Houston · Dallas · Austin · San Antonio",
      "GBP · Memberships · Google Ads · R-454B Transition",
      "500+ Local Businesses Ranked · 35+ HVAC Contractors Served",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Texas HVAC: 100°F Summers, 2021 Freeze Memory, Suburban Growth Boom.",
      headlinePre: "HVAC Marketing Agency in",
      accent: "Texas.",
      sub: "Texas HVAC sits on top of two structural drivers. The first is sustained extreme heat — Houston, Dallas, San Antonio, and Austin all run 90+ days per year above 90°F, with summer cooling demand among the heaviest in the country. The second is the 2021 polar vortex memory — a generational HVAC event that destroyed millions of cooling and heating systems statewide and reset Texas homeowner expectations about backup heating and emergency replacement capacity. We help Texas HVAC contractors win local SEO across Houston, Dallas-Fort Worth, Austin, San Antonio, and the rapidly growing suburbs — Frisco, McKinney, Round Rock, The Woodlands, Sugar Land — so you're the contractor customers find first when 105°F hits in August or the next polar vortex rolls in.",
      trustExtra: { num: "30M+", label: "Texas Population" },
    },
    problem: {
      eyebrow: "Why Texas HVAC Marketing Is Different",
      title:
        "Four Texas-specific dynamics that decide which HVAC contractors win the map pack.",
      lede: "Texas HVAC has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Texas HVAC economics — equipment lifespan, climate stress patterns, demographic search behavior, and competitive density.",
      cards: [
        {
          h: "Sustained summer heat creates the heaviest cooling demand in the US.",
          p: "Houston, Dallas, San Antonio, and Austin run 90+ days per year above 90°F. Cooling systems run 12-16 hours per day for months. Equipment fails faster, replacement cycles run shorter, and emergency demand is structural.",
        },
        {
          h: "The 2021 polar vortex reset Texas HVAC permanently.",
          p: "February 2021 produced billions in HVAC damage statewide. Texas homeowners now expect backup heating capacity, dual-fuel systems, and emergency replacement capability. The next freeze is a marketing opportunity for HVAC contractors who pre-rank.",
        },
        {
          h: "Suburban growth is creating new ranking arenas weekly.",
          p: "Frisco, Round Rock, Cedar Park, McKinney, Plano, The Woodlands, Sugar Land. Hundreds of thousands of new homes, thousands of new HVAC customers, ranking competition still consolidating in the fastest-growing exurbs.",
        },
        {
          h: "Hispanic-majority metros need bilingual presence.",
          p: "Houston, San Antonio, and the Rio Grande Valley are majority Hispanic. Spanish-language HVAC search is enormous. English-only HVAC contractors compete in less than half the available Texas market.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Texas Customers Find HVAC Contractors",
      title: "The Houston map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for HVAC in Texas. Three pinned results sit above every organic listing for HVAC-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Texas HVAC customers searching at that moment.",
        "The work to rank in Texas is concrete: a complete Google Business Profile rebuild with proper HVAC categories and Texas TDLR (HVACR) license verification, manufacturer dealer credentials (Carrier, Trane, Lennox, Goodman, Daikin, Mitsubishi where applicable), citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Texas-specific seasonal calendar, and submarket-specific landing pages for every Texas metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency HVAC call is being searched right now somewhere in Texas. Whether it goes to you or a competitor is decided by map pack position, not by which contractor is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Texas HVAC Strategy",
      title: "Six Texas-calibrated workstreams that compound month over month.",
      lede: "Generic HVAC marketing playbooks don't survive Texas dynamics. The six workstreams below are calibrated to the specific factors driving Texas HVAC demand — climate stress, equipment lifespan patterns, regulatory environment, and competitive landscape. Each runs every month for the duration of the engagement.",
      items: [
        "Extreme-heat service pages — emergency AC repair, same-day cooling, dual-stage compressor service, R-454B refrigerant transition messaging.",
        "Freeze-event content pre-positioned for the next polar vortex — emergency furnace, heat pump service, dual-fuel system installation, backup heating.",
        "Bilingual Spanish landing pages and Spanish Google Ads for Houston, San Antonio, and Rio Grande Valley markets.",
        "Suburban submarket pages for Frisco, McKinney, Plano, Round Rock, Cedar Park, The Woodlands, Sugar Land, Pearland.",
        "Texas TDLR HVACR license verification integrated with citation profiles for trust signal.",
        "Commercial HVAC landing pages for Houston Energy Corridor, Dallas Galleria, Austin tech corridor, and San Antonio military commercial markets.",
      ],
    },
    cities: {
      eyebrow: "Texas Cities We Serve",
      title:
        "Dedicated Texas city pages built around each metro's specific HVAC market.",
      lede: "Each Texas city below has its own market dynamics, equipment mix, and competitive landscape. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Texas metros where our HVAC marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Houston",
          p: "Hottest sustained summers in continental US. Hurricane Beryl + Harvey aftermath, August humidity, Hispanic-majority — bilingual essential. Strong commercial work.",
        },
        {
          h: "Dallas",
          p: "DFW metroplex extreme heat + occasional brutal freezes. 2021 polar vortex was a once-in-a-generation HVAC event. Aging Park Cities equipment, growing northern suburbs.",
        },
        {
          h: "Austin",
          p: "Hyper-growth tech market. New construction surge in Cedar Park, Round Rock, Leander. Affluent residential — premium replacement equipment market.",
        },
        {
          h: "San Antonio",
          p: "Older housing stock + intense heat. Hispanic-majority market — bilingual critical. Military base commercial work, lower competitive density than DFW or Houston.",
        },
      ],
    },
    faqEyebrow: "Texas HVAC Contractor FAQ",
    faqs: [
      {
        q: "How fast can a Texas HVAC contractor rank in the map pack?",
        a: "Most Texas HVAC contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Hyper-competitive Houston, Dallas, and Austin generally take six months because they're among the densest HVAC competitive markets in the country. Less competitive suburban submarkets like Frisco, McKinney, and Round Rock often reach top-three inside 75 days because the field is still consolidating.",
      },
      {
        q: "Can you handle Spanish-language SEO for Houston and San Antonio HVAC?",
        a: "Yes. Bilingual landing pages and Spanish Google Ads are available on the Authority tier. Houston, San Antonio, and the Rio Grande Valley generate substantial Spanish-language HVAC search at consistently lower keyword competition than English. The ROI is strong for Texas HVAC contractors willing to serve those markets — emergency AC and AC replacement search converts particularly well in Spanish.",
      },
      {
        q: "Will this help during freeze events like 2021?",
        a: "This is one of the highest-leverage windows for Texas HVAC marketing. We pre-write emergency freeze content — furnace repair, heat pump emergency service, dual-fuel installation, frozen heat pump thawing — and pre-position your GBP for the spike. Pre-ranked Texas HVAC contractors capture disproportionate share of post-freeze emergency call volume. The 2021 polar vortex was a year's worth of bookings for HVAC contractors holding top map pack positions.",
      },
      {
        q: "Do you handle GBP suspensions for Texas HVAC contractors?",
        a: "Yes. Reinstatement is included on every plan. Texas HVAC contractors see elevated suspension rates because of the dense Houston and DFW competitive landscape, service-area-business verification issues, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this work for maintenance membership program marketing?",
        a: "Yes. Texas has strong membership program economics because of the sustained summer cooling load combined with occasional severe winter events that drive backup heating awareness. We build dedicated maintenance membership landing pages, integrate enrollment funnels with your dispatch software, and run paid ads tuned to maintenance-intent keywords. Membership programs typically run 80%+ gross margin.",
      },
      {
        q: "Do you serve Texas HVAC contractors outside the four major metros?",
        a: "Yes. We work with HVAC contractors across all of Texas including Fort Worth, El Paso, Corpus Christi, McAllen, Lubbock, Amarillo, Waco, Tyler, College Station, and the broader Rio Grande Valley. Strategy calibrates to local competitive density and demographic mix.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Texas metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, manufacturer credential opportunities, review velocity vs the Texas HVAC contractors outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
      checks: [
        "No long-term contract — month to month",
        "GBP reinstatement included if suspension happens",
        "Starting at $750/mo · No setup fee",
        "Free Texas audit before any commitment",
        "Active across all Texas metros — Houston, Dallas, Austin, San Antonio and beyond",
      ],
    },
  },
};
