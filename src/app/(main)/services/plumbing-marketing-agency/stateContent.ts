export type PlumbServiceCard = {
  num: string;
  h: string;
  p: string;
};

export type PlumbSpecialty = {
  icon: string;
  h: string;
  p: string;
};

export type PlumbPriceCard = {
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
  { num: "50+", label: "Plumbing Contractors Served" },
  { num: "300+", label: "GBPs Reinstated" },
];

/** The six marketing functions — shared by the parent and state pages. */
export const SERVICES: PlumbServiceCard[] = [
  {
    num: "01 · GBP & MAP PACK",
    h: "Google Business Profile rebuild for plumber map pack visibility.",
    p: "Complete GBP rebuild in the first 30 days. Plumber-specific categories, service-area-business verification, 24/7 emergency attributes, geo-tagged jobsite photos, weekly Posts on a seasonal plumbing calendar. Ongoing monthly management to defend the ranking once it's won.",
  },
  {
    num: "02 · GOOGLE ADS / PPC",
    h: "Paid search built around plumbing emergency intent.",
    p: "Plumber-specific keyword targeting, geo-modified emergency keywords, ad copy tuned to mobile decision compression, conversion tracking integrated with your dispatch software, and Local Services Ads management where available in your metro.",
  },
  {
    num: "03 · WEBSITE DESIGN",
    h: "Mobile-first plumber websites that convert emergencies.",
    p: "Sub-2-second mobile load times, persistent click-to-call across every page, online booking integration with ServiceTitan, FieldEdge, or Housecall Pro, schema markup for Plumber and LocalBusiness, dedicated submarket and service landing pages.",
  },
  {
    num: "04 · REVIEW VELOCITY",
    h: "Automated reviews after every plumbing service call.",
    p: "SMS plus email review requests fire automatically after every completed job. Keyword-coached templates that mention neighborhood and service type. Multi-platform monitoring across Google, Yelp, Facebook, and BBB. Negative-review response protocols.",
  },
  {
    num: "05 · LOCAL SEO",
    h: "Citations, submarket pages, and on-page SEO for plumbers.",
    p: "NAP consistency across 60+ general and plumber-specific directories. Submarket-specific landing pages for every service area you cover. On-page SEO with proper schema, internal linking, and content tuned to plumbing search behavior.",
  },
  {
    num: "06 · GBP REINSTATEMENT",
    h: "Suspension defense and rapid reinstatement when needed.",
    p: "Daily monitoring for suspension early-warning signs. False-report defense, duplicate listing cleanup, and SAB verification work. If suspension happens anyway: root cause diagnosis, documentation prep, appeal filing. Included on every plan.",
  },
];

/** Eight plumbing service categories we market. */
export const SPECIALTIES: PlumbSpecialty[] = [
  {
    icon: "🚨",
    h: "Emergency & 24/7",
    p: "Pipe burst, sewer backup, flooded basement. 24/7 attribute optimization and emergency-intent keyword targeting.",
  },
  {
    icon: "🚿",
    h: "Drain Cleaning & Sewer",
    p: "Drain snake, hydro-jetting, sewer line repair and replacement. High-volume residential service category.",
  },
  {
    icon: "🔥",
    h: "Water Heaters",
    p: "Tank and tankless install + repair. Manufacturer-credential markup for Rinnai, A.O. Smith, Bradford White.",
  },
  {
    icon: "🏠",
    h: "Slab Leak Repair",
    p: "Slab leak detection and pinhole repair. Major in Phoenix, Florida, Texas — where concrete slabs are common.",
  },
  {
    icon: "💧",
    h: "Water Softeners",
    p: "Hard-water service, softener install, fixture replacement. Massive recurring category in AZ, TX, CA.",
  },
  {
    icon: "🔧",
    h: "Repipe Services",
    p: "Whole-house repipe, polybutylene replacement, copper-to-PEX conversion. High-AOV residential category.",
  },
  {
    icon: "🏢",
    h: "Commercial Plumbing",
    p: "Restaurants, retail, office, multi-family. B2B keyword patterns, longer sales cycles, separate landing pages.",
  },
  {
    icon: "🏗️",
    h: "New Construction",
    p: "Builder relationships plus retail consumer visibility. Critical in growth states — FL, TX, AZ, GA, NC.",
  },
];

/** Month-to-month pricing — shared by the parent and state pages. */
export const PRICE_CARDS: PlumbPriceCard[] = [
  {
    tier: "Foundation",
    amount: "$750",
    period: "per month · billed monthly",
    features: [
      "Google Business Profile rebuild + monthly management",
      "Citation cleanup across 40+ general directories",
      "Map pack monitoring across primary plumbing keywords",
      "NAP consistency audit and fix",
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
      "Google Ads management with plumber emergency playbook",
      "Automated SMS + email review request system",
      "Review monitoring across Google, Yelp, Facebook, BBB",
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
      "Full website rebuild on plumber conversion architecture",
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
    metaTitle: "Plumbing Marketing Agency in Arizona",
    metaDescription:
      "Plumbing marketing agency for Arizona contractors. Map pack rankings, GBP optimization, Google Ads, website design & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Arizona Plumbing Audit",
      "Phoenix · Tucson · Mesa · Scottsdale",
      "GBP Optimization · Reinstatement · Verification",
      "500+ Local Businesses Ranked",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Arizona Plumbing: Hardest Water in the US, 115°F Summers, Slab Leaks Year-Round.",
      headlinePre: "Plumbing Marketing Agency in",
      accent: "Arizona.",
      sub: "Arizona has the hardest water in the country — 12 to 17 grains per gallon across Phoenix, Tucson, Mesa, and Scottsdale. Combined with 100+ days per year above 100°F and the slab-foundation construction that dominates Arizona housing, every fixture, water heater, and supply line has a shortened life. Slab leaks are an everyday call. Water softeners are not a luxury — they're foundational. We help Arizona plumbing contractors win local SEO across every Valley submarket and Tucson metro so customers find your business first.",
      trustExtra: { num: "7.5M", label: "Arizona Population" },
    },
    problem: {
      eyebrow: "Why Arizona Plumbing Marketing Is Different",
      title:
        "Four Arizona-specific dynamics that decide which plumbers win the map pack.",
      lede: "Arizona plumbing has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Arizona plumbing economics — what your customers search for, when they search, and which plumbers they call.",
      cards: [
        {
          h: "Hardest water in the country shortens equipment life.",
          p: "12-17 grains per gallon across the Valley and Tucson. Water heaters fail in 6-8 years instead of 12. Faucets scale. Pipes corrode. Plumbers ranking for 'water softener installation Phoenix' own that recurring category.",
        },
        {
          h: "Slab foundation construction is everywhere.",
          p: "Most AZ homes sit on concrete slabs. Slab leaks accumulate silently and surface as catastrophic damage. Slab leak repair is a foundational service category every Arizona plumber should market for.",
        },
        {
          h: "115°F heat is destroying equipment outdoors.",
          p: "Outdoor plumbing components — hose bibs, sprinkler valves, pool plumbing — fail faster in Arizona heat than anywhere in the country. Pool plumbing alone is a major recurring category.",
        },
        {
          h: "Phoenix is sprawl — submarket pages are essential.",
          p: "Scottsdale to Buckeye is a 60-mile span. Generic 'Phoenix plumber' SEO doesn't survive. You need dedicated pages for every Valley submarket you serve.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Arizona Customers Find Plumbers",
      title: "The Phoenix map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for plumbing in Arizona. Three pinned results sit above every organic listing for plumbing-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Arizona plumbing customers searching at that moment.",
        "The work to rank in Arizona is concrete: a complete Google Business Profile rebuild with proper plumber categories and Arizona ROC license verification, citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Arizona-specific seasonal calendar, and submarket-specific landing pages for every Arizona metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency call is being searched right now somewhere in Arizona. Whether it goes to you or a competitor is decided by map pack position, not by which plumber is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Arizona Plumbing Strategy",
      title:
        "Six Arizona-calibrated workstreams that compound month over month.",
      lede: "Generic plumbing marketing playbooks don't survive Arizona dynamics. The six workstreams below are calibrated to the specific factors driving Arizona plumbing demand — geography, climate, demographics, and competitive landscape. Each one runs every month for the duration of the engagement.",
      items: [
        "Hard-water specialty pages — water softener installation, scale removal, fixture replacement, tankless service.",
        "Slab-leak detection and repair landing pages for every Valley submarket.",
        "Pool plumbing service pages — pool returns, pump replacement, equipment pad work.",
        "Submarket-specific pages for Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear.",
        "Bilingual Spanish landing pages for South Phoenix, Maryvale, and West Valley markets.",
        "Arizona ROC license verification integrated with citation profiles for trust signal compounding.",
      ],
    },
    cities: {
      eyebrow: "Arizona Cities We Serve",
      title:
        "Dedicated Arizona city pages built around each metro's specific market.",
      lede: "Each Arizona city below has its own market dynamics, its own competitive landscape, and its own optimal keyword set. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Arizona metros where our plumbing marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Phoenix",
          p: "Largest AZ metro. 115°F+ summers, 12-17 GPG water hardness, slab leaks, fast suburban growth in Buckeye and Surprise.",
        },
        {
          h: "Tucson",
          p: "Southern AZ market, slightly milder than Phoenix, hard water, University of Arizona commercial work, monsoon drainage.",
        },
        {
          h: "Mesa",
          p: "East Valley submarket, family residential, slab homes, hard water service is core revenue category.",
        },
        {
          h: "Scottsdale",
          p: "Affluent North Valley market, custom homes, pool plumbing, premium pricing — high AOV plumbing services.",
        },
      ],
    },
    faqEyebrow: "Arizona Plumber FAQ",
    faqs: [
      {
        q: "How fast can an Arizona plumber rank in the map pack?",
        a: "Most Arizona plumbing contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Less competitive West Valley submarkets like Buckeye, Surprise, and Goodyear often hit top-three inside 60 days because the field is less saturated and growing quickly. Hyper-competitive Scottsdale and Central Phoenix usually take six months.",
      },
      {
        q: "Will this help with hard-water and water-softener service marketing?",
        a: "Yes. Hard water is a foundational service category for Arizona plumbers because water hardness across the entire Valley and Tucson sits at 12-17 grains per gallon. We build dedicated water softener installation landing pages, optimize your GBP for water-softener-installer and water-heater-installation categories, and seed Q&A with hard-water-related questions Arizona customers actually search for.",
      },
      {
        q: "Do you handle GBP suspensions for Arizona plumbers?",
        a: "Yes. Reinstatement is included on every plan. Arizona plumbers see elevated suspension rates because of the dense East Valley competitive landscape, service-area-business verification issues, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this work for plumbers in newer West Valley submarkets?",
        a: "Yes. West Valley submarkets — Buckeye, Surprise, Goodyear, Avondale — are some of our strongest performance categories because they're growing fast and the ranking competition is lighter. New construction generates steady plumbing service demand from new homeowners. Most West Valley plumbing contractors reach top-three rankings inside 75 days.",
      },
      {
        q: "Can you handle Spanish-language SEO for Phoenix neighborhoods?",
        a: "Yes. Bilingual landing pages and Spanish Google Ads are available on the Authority tier. South Phoenix, Maryvale, parts of Mesa, and the West Valley generate substantial Spanish-language plumbing search at consistently lower keyword competition than English.",
      },
      {
        q: "Will this help with pool plumbing service marketing?",
        a: "Yes. Pool plumbing is a meaningful recurring service category for Arizona plumbers because so many homes have pools and the 115°F heat destroys outdoor plumbing equipment. We build dedicated pool plumbing service pages, optimize your GBP for pool-related plumbing categories where available, and seed Q&A with pool plumbing questions Arizona customers actually search for.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Arizona metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, review velocity vs the Arizona plumbers outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
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
    metaTitle: "Plumbing Marketing Agency in California",
    metaDescription:
      "Plumbing marketing agency for California contractors. Map pack rankings, GBP optimization, Google Ads, website design & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free California Plumbing Audit",
      "Los Angeles · San Francisco Bay Area · San Diego · Sacramento",
      "GBP Optimization · Reinstatement · Verification",
      "500+ Local Businesses Ranked",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "California's Largest Plumbing Market. Drought Restrictions, Aging Pipes, Earthquake-Code Repipe Demand.",
      headlinePre: "Plumbing Marketing Agency in",
      accent: "California.",
      sub: "California plumbing is the country's largest market and one of its most regulated. Drought-driven water restrictions push customers toward efficient fixtures. Aging Los Angeles housing built in the 1920s-1960s produces continuous repipe and service demand. San Francisco Bay Area's Victorian and Edwardian housing has its own complex plumbing service ecosystem. Earthquake codes require gas line and water heater seismic strapping work that few generalist plumbers properly market. We help California plumbing contractors win local SEO across LA, the Bay Area, San Diego, Sacramento, and the Central Valley — so you're the first plumber California customers find.",
      trustExtra: { num: "39M", label: "California Population" },
    },
    problem: {
      eyebrow: "Why California Plumbing Marketing Is Different",
      title:
        "Four California-specific dynamics that decide which plumbers win the map pack.",
      lede: "California plumbing has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to California plumbing economics — what your customers search for, when they search, and which plumbers they call.",
      cards: [
        {
          h: "Aging Los Angeles housing drives perpetual repipe demand.",
          p: "Most of LA's housing stock predates 1970. Galvanized pipes corrode, cast iron drains fail, polybutylene supply lines leak. The repipe category alone is worth millions to plumbers ranking for it across LA submarkets.",
        },
        {
          h: "Drought restrictions shift the service mix toward efficiency.",
          p: "California water restrictions push customers toward low-flow fixtures, tankless water heaters, and water reclamation systems. Plumbers marketed around water-saving services win against generalists.",
        },
        {
          h: "Earthquake codes create specialty service revenue.",
          p: "California Title 24 requires water heater strapping, gas line seismic shutoff valves, and earthquake-rated installation practices. These are differentiating service categories generalists never market for.",
        },
        {
          h: "Spanish-language search is structural in California.",
          p: "East LA, the San Gabriel Valley, parts of the Bay Area, San Diego's South Bay, the Central Valley. Spanish-language plumbing search is enormous, with consistently lower keyword competition.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How California Customers Find Plumbers",
      title: "The Los Angeles map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for plumbing in California. Three pinned results sit above every organic listing for plumbing-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four California plumbing customers searching at that moment.",
        "The work to rank in California is concrete: a complete Google Business Profile rebuild with proper plumber categories and California CSLB license verification, citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a California-specific seasonal calendar, and submarket-specific landing pages for every California metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency call is being searched right now somewhere in California. Whether it goes to you or a competitor is decided by map pack position, not by which plumber is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our California Plumbing Strategy",
      title:
        "Six California-calibrated workstreams that compound month over month.",
      lede: "Generic plumbing marketing playbooks don't survive California dynamics. The six workstreams below are calibrated to the specific factors driving California plumbing demand — geography, climate, demographics, and competitive landscape. Each one runs every month for the duration of the engagement.",
      items: [
        "Repipe-focused landing pages for Los Angeles submarkets — Highland Park, Eagle Rock, Mid-City, South LA, San Gabriel Valley.",
        "Drought-aware content positioning low-flow, tankless, and water-saving service categories.",
        "Earthquake-code specialty service pages — water heater strapping, gas line seismic shutoff, Title 24 compliance.",
        "Bilingual Spanish landing pages for East LA, San Gabriel Valley, San Diego South Bay, Central Valley markets.",
        "CSLB license number prominently displayed and verified across citation profiles for California trust signal.",
        "Bay Area Victorian/Edwardian-specific service pages — cast iron drain replacement, lead service line work, older home repipe.",
      ],
    },
    cities: {
      eyebrow: "California Cities We Serve",
      title:
        "Dedicated California city pages built around each metro's specific market.",
      lede: "Each California city below has its own market dynamics, its own competitive landscape, and its own optimal keyword set. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the California metros where our plumbing marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Los Angeles",
          p: "Largest US plumbing market. Older 1920s-1960s housing stock, drought restrictions, Spanish-language critical across East LA, Boyle Heights, Pico Rivera.",
        },
        {
          h: "San Francisco Bay Area",
          p: "Aging Victorian and Edwardian housing, premium pricing, environmental regulation complexity. South Bay tech corridor commercial work.",
        },
        {
          h: "San Diego",
          p: "Coastal corrosion, military base commercial work, Spanish-speaking neighborhoods. North County tech and biotech corridors.",
        },
        {
          h: "Sacramento",
          p: "Growing capital region. Older Land Park/East Sac neighborhoods. Hot dry summers, agricultural service area for commercial plumbing.",
        },
      ],
    },
    faqEyebrow: "California Plumber FAQ",
    faqs: [
      {
        q: "How fast can a California plumber rank in the map pack?",
        a: "Most California plumbing contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 120 to 240 days because California is one of the most competitive plumbing markets in the country. LA, the Bay Area, San Diego, and Sacramento are particularly dense. Less competitive Inland Empire and Central Valley submarkets often reach top-three inside 90 days.",
      },
      {
        q: "Can you handle Spanish-language SEO for California markets?",
        a: "Yes. Bilingual landing pages and Spanish Google Ads are available on the Authority tier. East LA, the San Gabriel Valley, San Diego's South Bay, the Central Valley, and parts of the Bay Area generate substantial Spanish-language plumbing search. Keyword competition in Spanish is consistently lower than in English, making the ROI strong for California plumbers willing to serve those markets.",
      },
      {
        q: "Will this work for repipe and aging home plumbing marketing?",
        a: "Yes. The repipe category is one of the highest-value plumbing services in California because of the aging housing stock across LA, the Bay Area, and much of the state. We build dedicated repipe landing pages for each submarket, optimize your GBP for repipe and water-line-installation categories, and seed Q&A with galvanized-pipe and polybutylene-related questions California customers actually search for.",
      },
      {
        q: "Do you handle GBP suspensions for California plumbers?",
        a: "Yes. Reinstatement is included on every plan. California plumbers see elevated suspension rates because of the dense LA and Bay Area competitive landscape, CSLB verification dynamics, and duplicate listings from older agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Do you market earthquake-code specialty services?",
        a: "Yes, and this is a real differentiator in California. Title 24 water heater strapping, gas line seismic shutoff valves, and earthquake-rated installation practices are specialty service categories that most generalist plumbers don't actively market. We build dedicated landing pages for these services where the demographic supports it — Bay Area, LA, and other earthquake-zone markets.",
      },
      {
        q: "Do you serve California plumbers outside the four major metros?",
        a: "Yes. We work with plumbing contractors across all of California including Fresno, Bakersfield, Riverside, San Bernardino, Long Beach, Anaheim, Stockton, Modesto, Santa Rosa, and the broader Central Valley. Strategy calibrates to local competitive density and demographic mix.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across California metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, review velocity vs the California plumbers outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
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
    metaTitle: "Plumbing Marketing Agency in Florida",
    metaDescription:
      "Plumbing marketing agency for Florida contractors. Map pack rankings, GBP optimization, Google Ads, website design & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Florida Plumbing Audit",
      "Miami · Tampa · Orlando · Jacksonville",
      "GBP Optimization · Reinstatement · Verification",
      "500+ Local Businesses Ranked",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Florida Plumbing Demand Never Rests. Slab Leaks, Hurricane Drainage, Snowbird Pipes.",
      headlinePre: "Plumbing Marketing Agency in",
      accent: "Florida.",
      sub: "Florida plumbing is a year-round emergency category. Slab construction across Miami-Dade, Broward, Hillsborough, and Orange counties produces slab-leak repair demand that doesn't slow down. Hurricane drainage backups overwhelm sewer lines from June through November. Snowbird homes go from dormant to occupied overnight and surface every leak that compounded during the off-season. We help Florida plumbing contractors win local SEO across every metro — Miami to Jacksonville, Tampa to Orlando — so you're the plumber customers call first when something breaks.",
      trustExtra: { num: "22M", label: "Florida Population" },
    },
    problem: {
      eyebrow: "Why Florida Plumbing Marketing Is Different",
      title:
        "Four Florida-specific dynamics that decide which plumbers win the map pack.",
      lede: "Florida plumbing has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Florida plumbing economics — what your customers search for, when they search, and which plumbers they call.",
      cards: [
        {
          h: "Slab construction is the silent emergency driver.",
          p: "Most Florida homes sit on concrete slabs. Slab leaks accumulate quietly for months, then surface as catastrophic damage. Plumbers who rank for 'slab leak repair' in your metro own that lead category.",
        },
        {
          h: "Hurricane season multiplies sewer demand by 4-6×.",
          p: "June through November, heavy rains overwhelm Florida sewer infrastructure. Sewer line repair search volume spikes during storm events. Pre-ranked plumbers capture the wave.",
        },
        {
          h: "Snowbird season creates predictable surge windows.",
          p: "October-April brings 1M+ seasonal residents to Florida. Vacation home plumbing emergencies surge in October as homes are reopened. Map pack visibility before October is what captures that volume.",
        },
        {
          h: "Spanish-language search is enormous in South Florida.",
          p: "Miami-Dade, Hialeah, Doral, and parts of Tampa generate massive Spanish-language plumbing search. Bilingual landing pages and Spanish Google Ads campaigns convert at meaningful volume.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Florida Customers Find Plumbers",
      title: "The Miami map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for plumbing in Florida. Three pinned results sit above every organic listing for plumbing-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Florida plumbing customers searching at that moment.",
        "The work to rank in Florida is concrete: a complete Google Business Profile rebuild with proper plumber categories and Florida CILB license verification, citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Florida-specific seasonal calendar, and submarket-specific landing pages for every Florida metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency call is being searched right now somewhere in Florida. Whether it goes to you or a competitor is decided by map pack position, not by which plumber is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Florida Plumbing Strategy",
      title:
        "Six Florida-calibrated workstreams that compound month over month.",
      lede: "Generic plumbing marketing playbooks don't survive Florida dynamics. The six workstreams below are calibrated to the specific factors driving Florida plumbing demand — geography, climate, demographics, and competitive landscape. Each one runs every month for the duration of the engagement.",
      items: [
        "Slab-leak detection landing pages built for every metro you cover — Miami, Tampa, Orlando, Jacksonville.",
        "Hurricane season Google Posts scheduled June-November with pre-storm prep and post-storm restoration content.",
        "Spanish-language GBP optimization and landing pages for South Florida and Tampa Spanish markets.",
        "Snowbird-aware content cadence — pre-season prep posts in September, in-season emergency posts October-April.",
        "Florida CILB license verification linked from citation profiles for trust signal compounding.",
        "Coastal humidity service messaging — pipe corrosion, fixture replacement, water heater anode rod service.",
      ],
    },
    cities: {
      eyebrow: "Florida Cities We Serve",
      title:
        "Dedicated Florida city pages built around each metro's specific market.",
      lede: "Each Florida city below has its own market dynamics, its own competitive landscape, and its own optimal keyword set. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Florida metros where our plumbing marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Miami",
          p: "Heat, humidity, slab construction. Spanish-language opportunity in Little Havana, Hialeah, Doral. Hurricane season drainage emergencies.",
        },
        {
          h: "Tampa",
          p: "Growing metro, slab homes, hard water in St Pete. Coastal humidity damages plumbing fixtures. Strong residential market.",
        },
        {
          h: "Orlando",
          p: "Tourism-driven seasonality, theme park commercial work, residential growth in Lake Nona and Winter Garden. Mixed climate demands.",
        },
        {
          h: "Jacksonville",
          p: "Largest city by area in FL — service-area logistics matter. Coastal humidity, older Riverside homes, fast-growing southside.",
        },
      ],
    },
    faqEyebrow: "Florida Plumber FAQ",
    faqs: [
      {
        q: "How fast can a Florida plumber rank in the map pack?",
        a: "Most Florida plumbing contractors see initial map pack movement within 60 to 90 days. Top-three rankings in primary keywords typically take 90 to 180 days. Less competitive Florida metros like Cape Coral, Tallahassee, and parts of the Panhandle often reach top-three inside 75 days. Hyper-competitive Miami, Tampa, and Orlando typically take six months.",
      },
      {
        q: "Can you handle Spanish-language SEO for South Florida?",
        a: "Yes. Spanish-language landing pages and Spanish Google Ads are available on the Authority tier. South Florida specifically — Miami-Dade, Broward, Hialeah, Doral — generates substantial Spanish-language plumbing search volume with consistently lower competition than English keywords. The ROI is strong for Florida plumbers willing to serve those markets.",
      },
      {
        q: "Will this help with slab-leak repair marketing specifically?",
        a: "Yes. Slab-leak repair is a foundational service category in Florida because of the prevalence of slab construction across Miami-Dade, Broward, Hillsborough, Orange, and most other Florida counties. We build dedicated slab-leak landing pages for each metro you serve, optimize your GBP for slab-leak detection and repair, and seed Q&A entries with slab-leak-related questions Florida customers actually search for.",
      },
      {
        q: "Do you handle GBP suspensions for Florida plumbers?",
        a: "Yes. Reinstatement is included on every plan. Florida plumbers see elevated suspension rates because of the service-area-business model, competitor false reporting in dense Miami and Tampa markets, and duplicate listings from older agencies. Most reinstatements resolve within seven to twenty-one days. We've reinstated 300-plus profiles across home services nationally.",
      },
      {
        q: "How does this work during hurricane season?",
        a: "Hurricane season (June through November) is actually one of our highest-leverage windows. Sewer line repair, water heater service, and emergency drain cleaning all see 4-6× search spikes during and after major storms. We schedule Google Posts around the seasonal patterns, pre-position your GBP for the spike, and pre-write emergency content that publishes in real time during storm windows. Pre-ranked Florida plumbers capture disproportionate share of the post-storm call volume.",
      },
      {
        q: "Do you serve Florida plumbers outside the four major metros?",
        a: "Yes. We work with plumbing contractors in every Florida metro and most secondary markets — Cape Coral, Fort Myers, Sarasota, Naples, Gainesville, Tallahassee, Pensacola, Daytona, West Palm Beach. The strategy adapts to local competitive density. Smaller markets typically see faster ranking timelines because the competition is less saturated.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Florida metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, review velocity vs the Florida plumbers outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
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
    metaTitle: "Plumbing Marketing Agency in Georgia",
    metaDescription:
      "Plumbing marketing agency for Georgia contractors. Map pack rankings, GBP optimization, Google Ads, website design & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Georgia Plumbing Audit",
      "Atlanta · Augusta · Savannah · Columbus",
      "GBP Optimization · Reinstatement · Verification",
      "500+ Local Businesses Ranked",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Georgia's Atlanta Growth Corridor. Hot Humid Summers, Suburban Sprawl, Occasional Freeze Surprises.",
      headlinePre: "Plumbing Marketing Agency in",
      accent: "Georgia.",
      sub: "Georgia plumbing demand sits on top of one of the country's most aggressive growth curves. Metro Atlanta added more than 100,000 new residents annually for the past decade. North Fulton, Cobb, Gwinnett, Forsyth, and Cherokee counties are building thousands of new homes — each one a future plumbing customer. Hot humid summers accelerate fixture corrosion. Occasional freeze events (the 2014 storm, the 2022 Christmas freeze) catch Georgia plumbers and homeowners off-guard and produce massive emergency call volume. We help Georgia plumbing contractors win local SEO across Atlanta, the surrounding metros, and growing secondary markets — Augusta, Savannah, Columbus, Macon, Athens.",
      trustExtra: { num: "11M", label: "Georgia Population" },
    },
    problem: {
      eyebrow: "Why Georgia Plumbing Marketing Is Different",
      title:
        "Four Georgia-specific dynamics that decide which plumbers win the map pack.",
      lede: "Georgia plumbing has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Georgia plumbing economics — what your customers search for, when they search, and which plumbers they call.",
      cards: [
        {
          h: "Atlanta growth is creating new ranking arenas weekly.",
          p: "North Fulton, Cobb, Gwinnett, Forsyth, Cherokee. Thousands of new homes, thousands of new plumbing customers, ranking competition that's still consolidating. Early movers win the moats.",
        },
        {
          h: "Hot humid summers accelerate fixture failure.",
          p: "Georgia humidity drives corrosion across pipes, fixtures, and water heaters. Service intervals are shorter than in dry climates. Plumbers marketed for water heater replacement and fixture service capture recurring revenue.",
        },
        {
          h: "Occasional freeze events produce massive emergency surges.",
          p: "Georgia freezes catch plumbers and homeowners off-guard because they're rare. The 2014 storm and the 2022 Christmas freeze each produced thousands of burst-pipe calls. Pre-ranked plumbers captured the volume.",
        },
        {
          h: "Atlanta's submarket sprawl fragments the metro.",
          p: "Buckhead doesn't search into Marietta. Each suburb is its own competitive arena. Generic 'Atlanta plumber' SEO doesn't survive the geography.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Georgia Customers Find Plumbers",
      title: "The Atlanta map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for plumbing in Georgia. Three pinned results sit above every organic listing for plumbing-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Georgia plumbing customers searching at that moment.",
        "The work to rank in Georgia is concrete: a complete Google Business Profile rebuild with proper plumber categories and Georgia Construction Industry Licensing Board license verification, citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Georgia-specific seasonal calendar, and submarket-specific landing pages for every Georgia metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency call is being searched right now somewhere in Georgia. Whether it goes to you or a competitor is decided by map pack position, not by which plumber is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Georgia Plumbing Strategy",
      title:
        "Six Georgia-calibrated workstreams that compound month over month.",
      lede: "Generic plumbing marketing playbooks don't survive Georgia dynamics. The six workstreams below are calibrated to the specific factors driving Georgia plumbing demand — geography, climate, demographics, and competitive landscape. Each one runs every month for the duration of the engagement.",
      items: [
        "Suburban submarket pages for North Fulton (Alpharetta, Roswell, Johns Creek), Cobb (Marietta, Smyrna), Gwinnett (Lawrenceville, Duluth), Forsyth (Cumming), Cherokee (Canton).",
        "Atlanta intown neighborhood pages — Buckhead, Midtown, Virginia-Highland, Decatur, East Atlanta.",
        "Freeze-event content pre-positioned for the rare but high-impact Georgia freeze windows.",
        "New-construction-focused content for the rapidly growing Atlanta exurbs.",
        "Historic district specialty pages for Savannah and Augusta — older home repipe, cast iron drain replacement.",
        "Georgia Construction Industry Licensing Board verification integrated with citation profiles.",
      ],
    },
    cities: {
      eyebrow: "Georgia Cities We Serve",
      title:
        "Dedicated Georgia city pages built around each metro's specific market.",
      lede: "Each Georgia city below has its own market dynamics, its own competitive landscape, and its own optimal keyword set. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Georgia metros where our plumbing marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Atlanta",
          p: "Largest GA metro. Hyper-growth suburbs across North Fulton, Cobb, Gwinnett. Hot humid summers, occasional freeze events.",
        },
        {
          h: "Augusta",
          p: "Eastern GA market. Military base commercial work, older Summerville district housing, growing suburban Columbia County.",
        },
        {
          h: "Savannah",
          p: "Coastal metro with historic district plumbing complexity. Humidity damages fixtures, hurricane drainage risk, tourist-driven commercial.",
        },
        {
          h: "Columbus",
          p: "Southwestern GA market. Fort Moore military base, residential growth, mixed older homes — less competitive ranking landscape.",
        },
      ],
    },
    faqEyebrow: "Georgia Plumber FAQ",
    faqs: [
      {
        q: "How fast can a Georgia plumber rank in the map pack?",
        a: "Most Georgia plumbing contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Hyper-competitive Atlanta intown neighborhoods like Buckhead, Midtown, and Decatur generally take six months. Less competitive suburban submarkets like Forsyth, Cherokee, and the broader exurbs often reach top-three inside 75 days because growth has outpaced agency saturation.",
      },
      {
        q: "Will this work for plumbers in newer Atlanta exurbs?",
        a: "Yes. The North Atlanta exurbs — Forsyth, Cherokee, parts of Cobb and Gwinnett — are some of our strongest performance categories because they're growing fast and the ranking competition is still consolidating. New construction generates steady plumbing service demand from new homeowners. Most exurb plumbing contractors reach top-three rankings inside 75 days.",
      },
      {
        q: "Do you handle GBP suspensions for Georgia plumbers?",
        a: "Yes. Reinstatement is included on every plan. Atlanta plumbers see elevated suspension rates because of the dense competitive landscape, service-area-business verification issues, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this help during Georgia freeze events?",
        a: "Georgia freeze events are rare but extremely high-leverage. The 2014 storm and the 2022 Christmas freeze each produced thousands of burst pipe emergencies. We pre-write emergency freeze content and pre-position your GBP for the spike. Pre-ranked Georgia plumbers capture disproportionate share of the volume because most homeowners have no plumber relationship and search at the moment of crisis.",
      },
      {
        q: "How does this work for Savannah and the coastal historic district?",
        a: "Savannah and other coastal historic markets need specialized service messaging because the housing stock and humidity dynamics differ from inland Georgia. We build dedicated landing pages for historic district services — older home repipe, cast iron drain replacement, salt-air-corrosion fixture work — and tune the strategy to the coastal market.",
      },
      {
        q: "Do you serve Georgia plumbers outside the Atlanta metro?",
        a: "Yes. We work with plumbing contractors across all of Georgia including Macon, Athens, Albany, Valdosta, Warner Robins, Gainesville, Rome, and the broader secondary markets. Strategy calibrates to local competitive density.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Georgia metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, review velocity vs the Georgia plumbers outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
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
    metaTitle: "Plumbing Marketing Agency in Illinois",
    metaDescription:
      "Plumbing marketing agency for Illinois contractors. Map pack rankings, GBP optimization, Google Ads, website design & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Illinois Plumbing Audit",
      "Chicago · Aurora · Naperville · Rockford",
      "GBP Optimization · Reinstatement · Verification",
      "500+ Local Businesses Ranked",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Illinois Plumbing Lives or Dies in January. Polar Vortex Freeze Emergencies Decide the Year.",
      headlinePre: "Plumbing Marketing Agency in",
      accent: "Illinois.",
      sub: "Illinois plumbing has the most extreme demand asymmetry of any US plumbing market. A normal January is busy. A polar vortex January is a year's worth of work in two weeks. The 2019 polar vortex, the 2021 freeze, the 2023 December event — each one produced thousands of frozen-pipe and burst-pipe emergencies, and the plumbing contractors holding top map pack positions during those windows captured disproportionate share of the volume. We help Illinois plumbing contractors win local SEO across Chicago and every Chicagoland and downstate metro — Aurora, Naperville, Rockford, Peoria, Springfield — so you're ranked before the next freeze hits.",
      trustExtra: { num: "12.5M", label: "Illinois Population" },
    },
    problem: {
      eyebrow: "Why Illinois Plumbing Marketing Is Different",
      title:
        "Four Illinois-specific dynamics that decide which plumbers win the map pack.",
      lede: "Illinois plumbing has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Illinois plumbing economics — what your customers search for, when they search, and which plumbers they call.",
      cards: [
        {
          h: "Polar vortex events reset the entire Illinois market in days.",
          p: "The 2019 polar vortex was a year's worth of emergency calls in two weeks. The 2021 freeze produced thousands of burst pipes across the Chicago metro. Pre-ranked plumbers captured the wave — the rest watched.",
        },
        {
          h: "Older Chicago housing stock is uniquely vulnerable.",
          p: "Most Chicago bungalows, two-flats, and three-flats predate WWII. Pipes run through unheated walls, attics, and crawl spaces. Freeze damage is structural to Chicago plumbing economics.",
        },
        {
          h: "Chicago is 77 separate hyperlocal markets.",
          p: "Lincoln Park doesn't search into Bridgeport. Each Chicago community area is its own competitive arena. Generic citywide SEO doesn't survive Chicago's neighborhood-driven search behavior.",
        },
        {
          h: "Spanish-language search is real in Pilsen, Little Village, Logan Square.",
          p: "Chicago's Spanish-speaking neighborhoods generate meaningful plumbing search volume. Bilingual landing pages and Spanish Google Ads convert at favorable economics where the demographic supports it.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Illinois Customers Find Plumbers",
      title: "The Chicago map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for plumbing in Illinois. Three pinned results sit above every organic listing for plumbing-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Illinois plumbing customers searching at that moment.",
        "The work to rank in Illinois is concrete: a complete Google Business Profile rebuild with proper plumber categories and Illinois DPR license verification, citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Illinois-specific seasonal calendar, and submarket-specific landing pages for every Illinois metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency call is being searched right now somewhere in Illinois. Whether it goes to you or a competitor is decided by map pack position, not by which plumber is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Illinois Plumbing Strategy",
      title:
        "Six Illinois-calibrated workstreams that compound month over month.",
      lede: "Generic plumbing marketing playbooks don't survive Illinois dynamics. The six workstreams below are calibrated to the specific factors driving Illinois plumbing demand — geography, climate, demographics, and competitive landscape. Each one runs every month for the duration of the engagement.",
      items: [
        "Pre-positioned freeze content — frozen pipe thaw, burst pipe repair, emergency restoration — published the moment polar vortex events begin.",
        "Chicago community area submarket pages — Lincoln Park, Wicker Park, West Loop, River North, Hyde Park, Logan Square, Pilsen.",
        "Suburban submarket pages for Aurora, Naperville, Schaumburg, Arlington Heights, Joliet, Elgin.",
        "Older-home specialty pages — galvanized pipe repipe, cast iron drain replacement, lead service line work.",
        "Bilingual Spanish landing pages for Pilsen, Little Village, Logan Square, Humboldt Park markets.",
        "Illinois Department of Public Health plumber license verification integrated with citation profiles.",
      ],
    },
    cities: {
      eyebrow: "Illinois Cities We Serve",
      title:
        "Dedicated Illinois city pages built around each metro's specific market.",
      lede: "Each Illinois city below has its own market dynamics, its own competitive landscape, and its own optimal keyword set. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Illinois metros where our plumbing marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Chicago",
          p: "Largest IL metro. Brutal winters, older housing across North/South Side, 77 community areas — hyperlocal search behavior.",
        },
        {
          h: "Aurora",
          p: "Second-largest IL city. Western suburbs growth, mixed older homes, freeze emergencies, family residential focus.",
        },
        {
          h: "Naperville",
          p: "Affluent western suburb, custom homes, premium pricing, established residential. High-AOV plumbing services.",
        },
        {
          h: "Rockford",
          p: "Northern IL market. Older industrial-era housing, cold winters, lower competitive density vs Chicago — faster ranking timelines.",
        },
      ],
    },
    faqEyebrow: "Illinois Plumber FAQ",
    faqs: [
      {
        q: "How fast can an Illinois plumber rank in the map pack?",
        a: "Most Illinois plumbing contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Hyper-competitive Chicago neighborhoods like Lincoln Park, River North, and the West Loop generally take six months. Less competitive Chicagoland suburbs like Aurora, Joliet, Schaumburg, and downstate Illinois often reach top-three inside 75 days.",
      },
      {
        q: "Will this help during polar vortex and freeze events?",
        a: "This is the highest-leverage window for Illinois plumbing marketing. We pre-write emergency freeze content, pre-position your GBP for the spike, and have Google Posts and Q&A entries ready to publish the moment a polar vortex hits. Pre-ranked Illinois plumbers capture disproportionate share of post-freeze emergency call volume — the 2019 vortex was a year's worth of bookings for plumbers holding top map pack positions.",
      },
      {
        q: "Can you handle Spanish-language SEO for Chicago neighborhoods?",
        a: "Yes. Bilingual landing pages and Spanish Google Ads are available on the Authority tier. Pilsen, Little Village, Logan Square, and Humboldt Park generate substantial Spanish-language plumbing search at consistently lower keyword competition than English.",
      },
      {
        q: "Do you handle GBP suspensions for Illinois plumbers?",
        a: "Yes. Reinstatement is included on every plan. Illinois plumbers see elevated suspension rates because of the dense Chicago competitive landscape, neighborhood-on-neighborhood reporting, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this work for older Chicago housing repipe marketing?",
        a: "Yes. Older home repipe is a major service category in Chicago because most of the housing stock predates WWII. Galvanized pipes corrode, cast iron drains fail, lead service lines are still common. We build dedicated repipe and older-home service landing pages, optimize your GBP for the relevant categories, and seed Q&A with questions Chicago customers actually search for.",
      },
      {
        q: "Do you serve Illinois plumbers outside the Chicago metro?",
        a: "Yes. We work with plumbing contractors across all of Illinois including Rockford, Peoria, Springfield, Champaign-Urbana, Bloomington, Decatur, and the broader downstate market. Strategy calibrates to local competitive density.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Illinois metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, review velocity vs the Illinois plumbers outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
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
    metaTitle: "Plumbing Marketing Agency in North Carolina",
    metaDescription:
      "Plumbing marketing agency for North Carolina contractors. Map pack rankings, GBP optimization, Google Ads, website design & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free North Carolina Plumbing Audit",
      "Charlotte · Raleigh · Greensboro · Durham",
      "GBP Optimization · Reinstatement · Verification",
      "500+ Local Businesses Ranked",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "North Carolina's Charlotte-Triangle Growth Boom. New Construction Plumbing and Suburban Sprawl Wins.",
      headlinePre: "Plumbing Marketing Agency in",
      accent: "North Carolina.",
      sub: "North Carolina has two of the fastest-growing US metros — Charlotte and the Raleigh-Durham Triangle. Combined population growth is producing tens of thousands of new homes annually, each one a future plumbing customer. Older Charlotte and Greensboro neighborhoods built mid-century need repipe and service work. Coastal Wilmington and Asheville mountain markets have their own dynamics. We help North Carolina plumbing contractors win local SEO across Charlotte, Raleigh, Durham, Greensboro, and every growing submarket — Cary, Apex, Huntersville, Concord, Fort Mill — so your business captures the growth wave.",
      trustExtra: { num: "10.7M", label: "North Carolina Population" },
    },
    problem: {
      eyebrow: "Why North Carolina Plumbing Marketing Is Different",
      title:
        "Four North Carolina-specific dynamics that decide which plumbers win the map pack.",
      lede: "North Carolina plumbing has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to North Carolina plumbing economics — what your customers search for, when they search, and which plumbers they call.",
      cards: [
        {
          h: "Charlotte and Triangle growth is the biggest market shift in plumbing.",
          p: "Charlotte adds 75,000+ residents annually. The Triangle adds another 60,000+. Thousands of new homes every year. The ranking competition is still consolidating — early movers establish defensible positions.",
        },
        {
          h: "Suburban submarket sprawl fragments the metros.",
          p: "Lake Norman doesn't search into Ballantyne. Cary doesn't search into Apex. Each suburb is its own competitive arena. Generic citywide SEO doesn't survive.",
        },
        {
          h: "Mixed climate creates year-round service demand.",
          p: "NC sees humid summers, occasional freeze events, and enough seasonal variation to drive consistent plumbing service demand year-round. No single dominant emergency category — a balanced book of business.",
        },
        {
          h: "Older mid-century housing in Charlotte and Greensboro drives repipe.",
          p: "Plaza Midwood, Dilworth, Myers Park, central Greensboro. Plenty of post-WWII housing with galvanized pipes nearing end of life. Repipe is a recurring high-AOV category.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How North Carolina Customers Find Plumbers",
      title: "The Charlotte map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for plumbing in North Carolina. Three pinned results sit above every organic listing for plumbing-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four North Carolina plumbing customers searching at that moment.",
        "The work to rank in North Carolina is concrete: a complete Google Business Profile rebuild with proper plumber categories and North Carolina State Board of Examiners license verification, citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a North Carolina-specific seasonal calendar, and submarket-specific landing pages for every North Carolina metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency call is being searched right now somewhere in North Carolina. Whether it goes to you or a competitor is decided by map pack position, not by which plumber is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our North Carolina Plumbing Strategy",
      title:
        "Six North Carolina-calibrated workstreams that compound month over month.",
      lede: "Generic plumbing marketing playbooks don't survive North Carolina dynamics. The six workstreams below are calibrated to the specific factors driving North Carolina plumbing demand — geography, climate, demographics, and competitive landscape. Each one runs every month for the duration of the engagement.",
      items: [
        "Charlotte submarket pages — Ballantyne, South End, Myers Park, Dilworth, Plaza Midwood, Lake Norman, Huntersville, Concord.",
        "Triangle submarket pages — Raleigh Inside-the-Beltline, North Raleigh, Cary, Apex, Holly Springs, Durham, Chapel Hill.",
        "New-construction-focused content for the rapidly growing suburbs across both metros.",
        "Older-home repipe specialty pages for established Charlotte and Greensboro neighborhoods.",
        "NC State Board plumber license verification integrated with citation profiles for trust signal.",
        "Tech-corridor commercial pages for Research Triangle Park and Charlotte uptown markets.",
      ],
    },
    cities: {
      eyebrow: "North Carolina Cities We Serve",
      title:
        "Dedicated North Carolina city pages built around each metro's specific market.",
      lede: "Each North Carolina city below has its own market dynamics, its own competitive landscape, and its own optimal keyword set. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the North Carolina metros where our plumbing marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Charlotte",
          p: "Largest NC metro. Banking and finance corridor, hyper-growth suburbs in Lake Norman, South Charlotte, Ballantyne.",
        },
        {
          h: "Raleigh",
          p: "Research Triangle hub. Tech and biotech growth, affluent residential, fast-growing Cary, Apex, Holly Springs.",
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
    faqEyebrow: "North Carolina Plumber FAQ",
    faqs: [
      {
        q: "How fast can a North Carolina plumber rank in the map pack?",
        a: "Most North Carolina plumbing contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Hyper-competitive Charlotte and Raleigh urban cores can take six months. Less competitive suburban submarkets and secondary markets like Greensboro, Winston-Salem, and Wilmington often reach top-three inside 75 days because growth has outpaced agency saturation.",
      },
      {
        q: "Will this work for plumbers in newer Charlotte and Triangle suburbs?",
        a: "Yes. The Charlotte and Raleigh-Durham suburbs are some of our strongest performance categories. Lake Norman, Huntersville, Concord, Fort Mill (SC border), Cary, Apex, Holly Springs, Wake Forest, and the broader exurbs are all growing fast with ranking competition still consolidating. Most suburban plumbing contractors reach top-three rankings inside 75 days.",
      },
      {
        q: "Do you handle GBP suspensions for NC plumbers?",
        a: "Yes. Reinstatement is included on every plan. NC plumbers see elevated suspension rates in Charlotte and the Triangle because of the dense competitive landscape, service-area-business verification issues, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this help during NC freeze events?",
        a: "Yes. NC sees occasional but high-impact freeze events. We pre-write emergency freeze content and pre-position your GBP for the spike. Pre-ranked NC plumbers capture disproportionate share of freeze-event call volume because most homeowners have no plumber relationship and search at the moment of crisis.",
      },
      {
        q: "Will this work for older Charlotte and Greensboro repipe marketing?",
        a: "Yes. Older home repipe is a real service category in established Charlotte neighborhoods (Plaza Midwood, Dilworth, Myers Park) and central Greensboro. We build dedicated repipe landing pages, optimize your GBP for repipe and water-line-installation categories, and seed Q&A with galvanized-pipe and end-of-life-piping questions NC customers actually search for.",
      },
      {
        q: "Do you serve NC plumbers outside the major metros?",
        a: "Yes. We work with plumbing contractors across all of North Carolina including Winston-Salem, Wilmington, Asheville, Fayetteville, Greenville, High Point, Concord, Gastonia, and the broader secondary markets. Strategy calibrates to local competitive density and submarket dynamics.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across North Carolina metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, review velocity vs the North Carolina plumbers outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
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
    metaTitle: "Plumbing Marketing Agency in Texas",
    metaDescription:
      "Plumbing marketing agency for Texas contractors. Map pack rankings, GBP optimization, Google Ads, website design & reviews. Free audit. From $750/mo.",
    ticker: [
      "Free Texas Plumbing Audit",
      "Houston · Dallas · Austin · San Antonio",
      "GBP Optimization · Reinstatement · Verification",
      "500+ Local Businesses Ranked",
      "Starting at $750/mo · Month-to-Month",
    ],
    hero: {
      eyebrow:
        "Texas-Sized Plumbing Market. Hard Water, Freeze Events, and Houston Hurricane Recovery.",
      headlinePre: "Plumbing Marketing Agency in",
      accent: "Texas.",
      sub: "Texas plumbing demand sits on top of three structural drivers: extreme heat that destroys equipment, hard water across DFW and Houston that accelerates fixture failure, and the freeze events (2021 polar vortex, 2024 hard freeze) that produced billions in plumbing damage and reset Texas plumbers' marketing strategies forever. We help Texas plumbing contractors win local SEO across Houston, Dallas-Fort Worth, Austin, San Antonio, and the rapidly growing suburban submarkets — Round Rock, Frisco, McKinney, Plano, The Woodlands — so you're the plumber customers find first.",
      trustExtra: { num: "30M+", label: "Texas Population" },
    },
    problem: {
      eyebrow: "Why Texas Plumbing Marketing Is Different",
      title:
        "Four Texas-specific dynamics that decide which plumbers win the map pack.",
      lede: "Texas plumbing has structural drivers that don't exist in other states. Generic marketing playbooks miss them. The four pain points below are calibrated specifically to Texas plumbing economics — what your customers search for, when they search, and which plumbers they call.",
      cards: [
        {
          h: "Hard water across DFW and Houston is a recurring service driver.",
          p: "Most DFW and Houston suburbs sit at 12-15+ grains per gallon. Water heaters fail faster, fixtures scale, pipes corrode. Plumbers ranking for 'water softener installation' own that compounding category.",
        },
        {
          h: "Freeze events reset the entire Texas market overnight.",
          p: "The February 2021 freeze produced an estimated $200B in damage. February 2024 brought another hard freeze. Pre-ranked plumbers captured years of work in a single week. The next freeze is coming.",
        },
        {
          h: "Hispanic-majority metros need bilingual presence.",
          p: "Houston, San Antonio, and the Rio Grande Valley are majority Hispanic. Spanish-language plumbing search is enormous and English-only plumbers compete in less than half the available market.",
        },
        {
          h: "Suburban growth is creating new competitive arenas weekly.",
          p: "Frisco, Round Rock, Cedar Park, The Woodlands, Sugar Land, Plano. Hundreds of thousands of new homes, thousands of new plumbing customers, and ranking competition that's still consolidating.",
        },
      ],
    },
    mapPack: {
      eyebrow: "How Texas Customers Find Plumbers",
      title: "The Houston map pack at the moment of decision.",
      paras: [
        "The Google Map Pack is the only piece of search real estate that matters for plumbing in Texas. Three pinned results sit above every organic listing for plumbing-related queries. Position #1 captures roughly 44% of clicks. Position #2 takes 18%. Position #3 takes 11%. Combined, those three pins absorb nearly three out of every four Texas plumbing customers searching at that moment.",
        "The work to rank in Texas is concrete: a complete Google Business Profile rebuild with proper plumber categories and Texas TSBPE license verification, citation consistency across home services directories, automated review velocity from every completed job, weekly Google Posts on a Texas-specific seasonal calendar, and submarket-specific landing pages for every Texas metro you cover. Done properly, top-three rankings typically establish within 90 to 180 days.",
        "The next emergency call is being searched right now somewhere in Texas. Whether it goes to you or a competitor is decided by map pack position, not by which plumber is actually better.",
      ],
    },
    strategy: {
      eyebrow: "Our Texas Plumbing Strategy",
      title: "Six Texas-calibrated workstreams that compound month over month.",
      lede: "Generic plumbing marketing playbooks don't survive Texas dynamics. The six workstreams below are calibrated to the specific factors driving Texas plumbing demand — geography, climate, demographics, and competitive landscape. Each one runs every month for the duration of the engagement.",
      items: [
        "Hard-water-focused service pages for water softener installation, water heater replacement, and fixture service across DFW and Houston metros.",
        "Freeze-event content pre-positioned for the next polar vortex — frozen pipe thaw, burst pipe repair, emergency restoration.",
        "Bilingual Spanish landing pages and Spanish Google Ads for Houston, San Antonio, and Rio Grande Valley markets.",
        "Suburban submarket pages for Frisco, McKinney, Plano, Round Rock, Cedar Park, The Woodlands, Sugar Land.",
        "TSBPE master plumber license verification integrated into citation profiles for trust signal.",
        "Commercial plumbing landing pages for Houston Energy Corridor, Dallas Galleria, and Austin tech corridor markets.",
      ],
    },
    cities: {
      eyebrow: "Texas Cities We Serve",
      title:
        "Dedicated Texas city pages built around each metro's specific market.",
      lede: "Each Texas city below has its own market dynamics, its own competitive landscape, and its own optimal keyword set. The pages below — when launched — will go deeper than this state-level overview, with city-specific submarket strategy, local market context, and case study examples. Right now, the cities below represent the Texas metros where our plumbing marketing strategy is calibrated most carefully.",
      cards: [
        {
          h: "Houston",
          p: "Largest TX metro. Hurricane Beryl + Harvey aftermath. Hard water across most suburbs. Hispanic-majority — bilingual essential.",
        },
        {
          h: "Dallas",
          p: "DFW hard water hits 15+ GPG in many suburbs. Aging Park Cities and Highland Park infrastructure. Strong commercial market.",
        },
        {
          h: "Austin",
          p: "Hyper-growth tech market. New construction surge in Cedar Park, Round Rock, Leander. Tech salaries — affluent residential.",
        },
        {
          h: "San Antonio",
          p: "Older housing stock. Hispanic-majority market — bilingual critical. Hot summers, hard water, military base commercial work.",
        },
      ],
    },
    faqEyebrow: "Texas Plumber FAQ",
    faqs: [
      {
        q: "How fast can a Texas plumber rank in the map pack?",
        a: "Most Texas plumbing contractors see initial map pack movement within 60 to 90 days. Top-three rankings typically take 90 to 180 days. Hyper-competitive Houston, Dallas, and Austin generally take six months. Less competitive suburban submarkets like Frisco, McKinney, and Round Rock often reach top-three inside 75 days because the competitive field is still consolidating.",
      },
      {
        q: "Can you handle Spanish-language SEO for Houston and San Antonio?",
        a: "Yes. Bilingual landing pages and Spanish Google Ads are available on the Authority tier. Houston, San Antonio, and the Rio Grande Valley generate substantial Spanish-language plumbing search at consistently lower keyword competition than English. The ROI is strong for Texas plumbers willing to serve those markets.",
      },
      {
        q: "Will this help during freeze events?",
        a: "This is one of the highest-leverage windows for Texas plumbing marketing. We pre-write emergency freeze content, pre-position your GBP for the spike, and have Google Posts and Q&A entries ready to publish during the event. Pre-ranked Texas plumbers capture disproportionate share of post-freeze emergency call volume — the February 2021 polar vortex was a year's worth of bookings for the plumbers who held top map pack positions.",
      },
      {
        q: "Do you handle GBP suspensions for Texas plumbers?",
        a: "Yes. Reinstatement is included on every plan. Texas plumbers see elevated suspension rates because of the dense Houston and DFW competitive landscape, service-area-business verification issues, and duplicate listings from old agencies. Most reinstatements resolve within seven to twenty-one days.",
      },
      {
        q: "Will this work for hard water and water-softener service marketing?",
        a: "Yes. Hard water service is a foundational category for DFW and Houston plumbers because water hardness across most suburbs sits at 12-15+ grains per gallon. We build dedicated water softener installation landing pages, optimize your GBP for water-softener-installer and water-heater-installation categories, and seed Q&A with hard-water-related questions Texas customers actually search for.",
      },
      {
        q: "Do you serve Texas plumbers outside the four major metros?",
        a: "Yes. We work with plumbing contractors across all of Texas including Fort Worth, El Paso, Corpus Christi, McAllen, Lubbock, Amarillo, Waco, Tyler, College Station, and the broader Rio Grande Valley. Strategy calibrates to local competitive density and demographic mix.",
      },
    ],
    final: {
      accentTail: "Your Specific Metro.",
      lede: "Five-page written report covering current map pack position across Texas metros that matter to your business, GBP health (and any suspension risks), category and attribute gaps, review velocity vs the Texas plumbers outranking you, and the specific work required to move your business into the three-pack. Delivered within five business days.",
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
