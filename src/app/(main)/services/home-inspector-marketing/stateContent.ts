export type StateCityCard = {
  h: string;
  p: string;
  link: string;
  linkLabel: string;
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
  };

  problem: {
    eyebrow: string;
    headlinePre: string;
    accent: string;
    lede: string;
    proseSegments: { strongs?: string[]; text: string }[];
    cards: { h: string; p: string }[];
  };

  processLede: string;

  results: {
    headlinePre: string;
    accent: string;
    lede: string;
    proseSegments: { strongs?: string[]; text: string }[];
    stats: { big: string; h: string; p: string }[];
  };

  cities: {
    eyebrow: string;
    headlinePre: string;
    accent: string;
    lede: string;
    cards: StateCityCard[];
  };

  pricingHeadlinePre: string;
  pricingAccent: string;
  pricingLede: string;

  faqEyebrow: string;
  faqs: { q: string; a: string }[];

  final: {
    accent: string;
    lede: string;
  };
};

export const STATE_CONTENT: Record<string, StateContent> = {
  georgia: {
    name: "Georgia",
    slug: "georgia",
    metaTitle: "Georgia Home Inspector Marketing & SEO",
    metaDescription:
      "Home inspector marketing for Georgia. Local SEO, Google Ads, GBP for inspectors in Atlanta, Savannah, Augusta, Athens, Marietta. Free audit, no contracts.",
    ticker: [
      "Free Georgia Home Inspector Marketing Audit",
      "500+ Local Businesses Ranked",
      "Month-to-Month, No Contracts",
      "Local SEO · Google Ads · GBP · Social · Websites",
      "Trusted by Home Inspectors Nationally",
      "4.9/5 Average Client Rating",
    ],
    hero: {
      eyebrow: "Marketing for Georgia Home Inspectors",
      headlinePre: "Georgia Home Inspector Marketing — More Inspections in",
      accent: "Atlanta and Beyond.",
      sub: "Atlanta's housing market has been one of the most active in the South for the past five years, and Georgia's secondary metros — Savannah, Augusta, Athens — are growing fast behind it. Georgia home inspectors who get their digital marketing right are filling calendars while the competition waits for agent referrals. We help you do that.",
    },
    problem: {
      eyebrow: "Why Georgia Home Inspectors Hit a Ceiling",
      headlinePre: "Metro Atlanta is huge. Most inspectors only see",
      accent: "part of it.",
      lede: "Metro Atlanta has more than six million people spread across nearly thirty counties. Most home inspectors in the region operate as if it's one market — and they end up competing for the same fifteen ZIP codes while the rest of the metro goes uncovered. The Georgia inspectors growing fastest are the ones building submarket-by-submarket digital presence in Cobb, Gwinnett, Fulton, DeKalb, and Cherokee counties simultaneously.",
      proseSegments: [
        {
          strongs: ["Cobb County, Gwinnett, North Fulton, Cherokee, and DeKalb"],
          text: "Georgia home inspection is dominated by metro Atlanta, but the metro itself is so geographically dispersed that thinking of it as a single market is a mistake. {0} all have their own buyer pools, agent networks, and competitive landscapes. An inspector ranking #1 for \"home inspector Marietta\" can be completely invisible for \"home inspector Alpharetta\" twenty minutes away.",
        },
        {
          strongs: ["termite and WDI inspections"],
          text: "The second Georgia reality is {0}. Georgia's climate and red-clay soil make wood-destroying-insect inspections a routine part of every transaction. Most Georgia inspectors include them as part of standard inspection packages, but very few optimize their websites or GBPs for the keywords buyers actually search (\"termite inspection + city,\" \"WDI report + city\"). That's a missed segment of buyer traffic.",
        },
        {
          strongs: ["film and tech relocation wave"],
          text: "Third, there's the {0}. Hollywood South, Microsoft, Google, and a wave of corporate relocations have brought tens of thousands of transplants to Atlanta over the past five years. Like North Carolina, these buyers don't have local agent relationships — they Google their inspectors. Inspectors capturing that traffic are growing while traditional referral-based competitors stagnate.",
        },
      ],
      cards: [
        {
          h: "Metro Atlanta is six markets, not one.",
          p: "Submarket-specific service pages for Cobb, Gwinnett, North Fulton, Cherokee, and DeKalb counties consistently outperform a single \"Atlanta home inspector\" page.",
        },
        {
          h: "Termite/WDI demand goes uncaptured.",
          p: "Most Georgia inspectors offer WDI inspections but don't have dedicated service pages. Buyers searching specifically for termite inspections book someone else.",
        },
        {
          h: "Transplant volume is changing the buyer profile.",
          p: "Film, tech, and corporate relocations have brought online-native buyers to Atlanta. They don't ask their agent — they search Google.",
        },
        {
          h: "Coastal Georgia is its own market.",
          p: "Savannah and the coast operate completely separately from Atlanta. Inspectors trying to cover both regions need separate page strategies — what works in Marietta doesn't work in Savannah.",
        },
      ],
    },
    processLede:
      "No tedious onboarding deck. No fifty-question intake form. Georgia home inspectors are running a business while we get started, so we keep your time in the process to about forty-five minutes total across the first two weeks.",
    results: {
      headlinePre: "What changes when Georgia home inspectors stop",
      accent: "relying on referrals alone.",
      lede: "Here are the patterns we see across Georgia home inspection companies after the first ninety to one-hundred-eighty days. Your specific numbers will depend on whether you're in metro Atlanta or one of Georgia's secondary metros.",
      proseSegments: [
        {
          text: "Georgia client results in metro Atlanta follow the submarket-saturation pattern: by month three, you're ranking strongly in two or three submarkets where competition is thinner (often Marietta, Roswell, Alpharetta, or East Cobb). By month six, those rankings have spread to additional submarkets, and the cumulative effect is substantially more bookings without ever fighting for the high-competition \"home inspector Atlanta\" head term directly.",
        },
        {
          text: "One metro Atlanta home inspector we work with was doing about thirty inspections a month from two agent referral sources when we started. Within four months his GBP and submarket pages were ranking #1 across Marietta, Roswell, and Sandy Springs, adding twenty-eight monthly bookings from direct Google traffic. By month nine, the agent-referral business had grown too (more agents had started recommending him because his online presence made him look more established), and he was up to seventy-five inspections monthly.",
        },
        {
          strongs: ["termite and pre-listing inspection specialty pages"],
          text: "The other Georgia pattern worth noting: {0} drive disproportionate volume. Most Georgia inspectors don't have dedicated pages for these — building them is one of the fastest ways to capture buyer searches your competitors haven't optimized for.",
        },
      ],
      stats: [
        {
          big: "3.1×",
          h: "More direct calls within 90 days",
          p: "Average increase across metro Atlanta and secondary Georgia metros.",
        },
        {
          big: "5+",
          h: "Submarket #1 rankings by month 6",
          p: "Average number of Atlanta-area submarkets where clients achieve top map pack position.",
        },
        {
          big: "50%",
          h: "Lower cost per booked inspection",
          p: "Comparing month-one CAC to month-twelve, blended across all channels.",
        },
        {
          big: "70%",
          h: "WDI specialty traffic lift",
          p: "Increase in buyer searches surfacing for termite/WDI keywords after page builds.",
        },
      ],
    },
    cities: {
      eyebrow: "Georgia Cities We Serve",
      headlinePre: "Local marketing across Georgia's",
      accent: "growth metros.",
      lede: "Georgia inspection markets divide cleanly: metro Atlanta (which is really a constellation of submarkets), the coast, and the secondary metros. Each has its own buyer profile, agent network, and competitive landscape. Here are the Georgia markets we focus on most.",
      cards: [
        {
          h: "Atlanta",
          p: "Largest Georgia metro. Operates as multiple submarkets — North Fulton, Buckhead, Decatur, Midtown — each with separate ranking strategies.",
          link: "#",
          linkLabel: "Local SEO in Atlanta",
        },
        {
          h: "Savannah",
          p: "Coastal premium market with strong tourism, retirement, and second-home buyer activity. Completely separate from metro Atlanta competitively.",
          link: "#",
          linkLabel: "Local SEO in Savannah",
        },
        {
          h: "Augusta",
          p: "Second-largest metro. Steady transactional volume with less digital marketing competition — strong opportunity for first-page domination.",
          link: "#",
          linkLabel: "Local SEO in Augusta",
        },
        {
          h: "Athens",
          p: "College town with growing transplant volume from Atlanta. Premium inspection pricing supported by UGA-related relocation cycles.",
          link: "#",
          linkLabel: "Local SEO in Athens",
        },
        {
          h: "Macon",
          p: "Traditional Georgia market with consistent volume and lower CPCs. Google Ads especially efficient here for inspectors willing to invest early.",
          link: "#",
          linkLabel: "Local SEO in Macon",
        },
        {
          h: "Columbus",
          p: "Military-driven market via Fort Moore. PCS-cycle inspections create predictable seasonal demand throughout the year.",
          link: "#",
          linkLabel: "Local SEO in Columbus",
        },
        {
          h: "Marietta",
          p: "Cobb County core. Premium suburban market with strong agent overlap. Often paired with Roswell and Alpharetta in service-area strategies.",
          link: "#",
          linkLabel: "Local SEO in Marietta",
        },
        {
          h: "Sandy Springs",
          p: "High-income North Fulton market. Premium inspection pricing and sophisticated buyers — strong fit for inspectors with established online presence.",
          link: "#",
          linkLabel: "Local SEO in Sandy Springs",
        },
      ],
    },
    pricingHeadlinePre:
      "Three plans built for where your Georgia inspection business is",
    pricingAccent: "right now.",
    pricingLede:
      "Pick the plan that fits where your Georgia inspection business is today — you can move up or down between tiers any month. Ad spend is separate and goes straight to Google and Meta. No setup fees, no twelve-month lockups.",
    faqEyebrow: "Common Questions From Georgia Home Inspectors",
    faqs: [
      {
        q: "How long does it take to see results from home inspector marketing in Georgia?",
        a: "Most Georgia home inspectors see measurable changes within thirty to forty-five days. Google Business Profile improvements and paid ad campaigns typically generate calls inside the first three weeks. Sustained local SEO ranking takes ninety to one-hundred-eighty days depending on which Georgia metro you're in and the current state of your online presence. We give honest timelines during the audit — never inflated \"results in seven days\" promises.",
      },
      {
        q: "Do I need to sign a long-term contract?",
        a: "No. Every plan is month to month. If a service is not producing results, you can pause or cancel without penalty. We stay away from twelve-month lockups because home inspectors deserve to keep working with us because the work is paying off, not because a contract says they have to.",
      },
      {
        q: "How do you handle competition in the saturated metro Atlanta market?",
        a: "Metro Atlanta is one of the most competitive home inspector markets in the South. Our approach is submarket-by-submarket rather than fighting for the \"home inspector Atlanta\" head term directly. We build out service pages for Marietta, Roswell, Alpharetta, Sandy Springs, Decatur, Buckhead, East Cobb, North Fulton, and other submarkets where competition is thinner and search intent is higher. By month six, most Atlanta-area clients are ranking #1 in three to five submarkets simultaneously — which usually produces more bookings than a single metro-wide #1 ranking would.",
      },
      {
        q: "Do you serve coastal Georgia and Savannah differently than Atlanta?",
        a: "Yes. Coastal Georgia is a completely separate market from metro Atlanta — different buyer profile, different agent network, different competitive landscape. Savannah in particular has heavy second-home and tourism-rental inspection demand that doesn't exist in Atlanta, and we build dedicated content around it. If you cover both Atlanta and the coast, we run them as two separate marketing strategies rather than one — because trying to be everything to everyone is how Georgia inspectors waste budget.",
      },
      {
        q: "Will digital marketing replace my real estate agent referrals in Georgia?",
        a: "Our goal is not to replace agent relationships — it is to stop you from depending entirely on them. Most Georgia inspectors we work with keep their agent referrals and add a steady stream of direct calls from buyers, sellers, and FSBO transactions through Google. The agent referrals become a bonus, not a lifeline. Many clients also report new agents joining their referral pool because strong online presence makes them look more established.",
      },
      {
        q: "What is included in the free Georgia home inspector marketing audit?",
        a: "The audit reviews your current Google Business Profile setup, your local pack ranking for primary inspection keywords in your Georgia service area, your website speed and conversion structure, your review velocity and response patterns, citation accuracy across home services and real estate directories, and any active ad accounts. You receive a written report with prioritized recommendations within five business days. There is no obligation to hire us after.",
      },
      {
        q: "How much does home inspector marketing cost in Georgia?",
        a: "Plans start at $750 per month for foundational local SEO and Google Business Profile work, $1,350 per month for growth-stage inspectors who need paid ads and review systems, and $2,000 per month for established firms who want the full digital marketing stack. Ad spend is separate and goes directly to Google and Meta. We typically recommend a starting ad budget of $1,000 to $2,500 per month for Georgia markets depending on the size of your service area.",
      },
      {
        q: "Can you fix my Google Business Profile if it's been suspended?",
        a: "Yes. GBP reinstatement is one of our specialties — we've reinstated hundreds of suspended profiles across local service businesses including home inspectors. If your profile is currently suspended, mention it on the audit form and we'll prioritize reviewing the suspension reason and the path to reinstatement. Most cases resolve within seven to twenty-one days once the appeal is properly structured.",
      },
    ],
    final: {
      accent: "Georgia Home Inspectors.",
      lede: "Five-page written report covering your GBP, your Georgia local rankings, your website, and the gaps your competitors are exploiting. Delivered within five business days. No sales call required to receive it.",
    },
  },

  texas: {
    name: "Texas",
    slug: "texas",
    metaTitle: "Texas Home Inspector Marketing & SEO",
    metaDescription:
      "Home inspector marketing for Texas. Local SEO, Google Ads, GBP for inspectors in Houston, Dallas, Austin, San Antonio, Fort Worth. Free audit, no contracts.",
    ticker: [
      "Free Texas Home Inspector Marketing Audit",
      "500+ Local Businesses Ranked",
      "Month-to-Month, No Contracts",
      "Local SEO · Google Ads · GBP · Social · Websites",
      "Trusted by Home Inspectors Nationally",
      "4.9/5 Average Client Rating",
    ],
    hero: {
      eyebrow: "Marketing for Texas Home Inspectors",
      headlinePre: "Home Inspector Marketing Built for",
      accent: "the Texas Market.",
      sub: "Texas is the fastest-growing real estate market in America — Houston, Dallas, Austin, and San Antonio are all on tear, new construction is everywhere, and transplants are arriving by the thousand every month. The home inspectors winning Texas right now are the ones showing up first on Google. We help Texas inspection companies own their local search territory across every major metro in the state.",
    },
    problem: {
      eyebrow: "Why Texas Home Inspectors Lose Bookings",
      headlinePre: "The Texas market is growing. So is",
      accent: "your competition.",
      lede: "Texas added more new residents than any other state for three years running. That sounds like a tailwind for home inspectors — and it is, but only for the ones who get found online. Every transplant moving into Frisco, The Woodlands, Round Rock, or Cedar Park is Googling \"home inspector near me\" before they ask their agent for a recommendation. If you're not on page one for your city, those inspections are going to someone else.",
      proseSegments: [
        {
          strongs: ["TREC license"],
          text: "Texas home inspection is a high-volume, high-competition business. The major metros — DFW, Houston, Austin, San Antonio — have hundreds of licensed inspectors each, and new ones get their {0} every month. Standing out is no longer optional. The inspectors winning in Texas right now have professional Google Business Profiles, dozens of recent reviews, and websites that load fast on mobile because nine out of ten buyers are searching from their phone.",
        },
        {
          strongs: ["Foundation issues from expansive clay soil"],
          text: "The other Texas-specific challenge is the diversity of your inspection work. {0}, hail damage assessments, wind mitigation in coastal counties, and Wood Destroying Insect (WDI) reports are all routine in Texas in ways they aren't in most other states. Buyers and agents searching for those specific services need to find you for the specialty — not just for \"home inspector.\"",
        },
        {
          text: "Then there's the investor market. Houston, San Antonio, and Dallas all have huge investor activity, and investors don't ask their agent for a recommendation — they Google an inspector who can turn around inspections fast and provide reports the way they want them. That's a market segment you can capture entirely through digital marketing, and most Texas inspectors are leaving it on the table.",
        },
      ],
      cards: [
        {
          h: "New construction means new competitors.",
          p: "Every new master-planned community in DFW or Houston brings new inspectors trying to break in. You need an established Google presence before they show up — once they're ranking, it's harder to displace them.",
        },
        {
          h: "Foundation work is your edge — if buyers find you.",
          p: "Texas foundation expertise is your differentiator, but only if your service pages rank for \"foundation inspection + city\" and your GBP categories include slab and foundation specialties.",
        },
        {
          h: "DFW alone has 200+ licensed inspectors.",
          p: "In dense Texas metros, ranking #1 for \"home inspector + city\" is a five-figure annual revenue opportunity. The inspector at position #4 is barely getting any clicks.",
        },
        {
          h: "Investor calls bypass agents entirely.",
          p: "Real estate investors source their own inspectors through Google. If your profile doesn't surface for keywords like \"investor home inspection Houston,\" that revenue stream stays closed.",
        },
      ],
    },
    processLede:
      "No tedious onboarding deck. No fifty-question intake form. Most Texas home inspectors are running a business while we're getting started, so we keep your time in the process to about forty-five minutes total across the first two weeks.",
    results: {
      headlinePre: "What changes when Texas home inspectors stop",
      accent: "relying on referrals alone.",
      lede: "Here are the patterns we see across Texas home inspection companies after the first ninety to one-hundred-eighty days. Your specific numbers will depend on which metro you're in, how saturated it already is, and how aggressive you want to be with paid spend.",
      proseSegments: [
        {
          text: "The pattern across our Texas clients is consistent: in the first ninety days, the GBP rebuild and the paid ads start filling the calendar with direct calls from buyers in target zip codes. By month four or five, the local SEO investment compounds — you stop paying for clicks on keywords you now rank #1 for organically. By the end of year one, the cost per booked inspection has typically dropped by half.",
        },
        {
          text: "One Houston-area home inspector we work with was running on about thirty agent-referred inspections a month when we started. Ninety days in, direct Google calls were adding twenty-two more inspections from across Katy, Sugar Land, and The Woodlands. By month seven, his GBP was ranking #1 for \"home inspector\" in three of his target submarkets, and he had stopped advertising on Angi entirely.",
        },
        {
          strongs: ["foundation and WDI specialty pages"],
          text: "The other Texas-specific pattern: {0} drive a disproportionate share of new leads. Buyers searching for specialty services convert at higher rates and pay more per inspection. Most Texas inspectors don't optimize for those keywords — which means whoever does will own that segment in their metro.",
        },
      ],
      stats: [
        {
          big: "3.4×",
          h: "More direct calls within 90 days",
          p: "Average increase in non-referred calls from buyers across Texas metros.",
        },
        {
          big: "48%",
          h: "Lower cost per booked inspection",
          p: "Comparing month-one CAC to month-twelve, blended across all channels.",
        },
        {
          big: "#1",
          h: "Local map pack rankings in target metro",
          p: "Within 6 months for primary inspection keyword + Texas city.",
        },
        {
          big: "65%",
          h: "Foundation/WDI inquiry lift",
          p: "Specialty keyword traffic increase after dedicated service-page builds.",
        },
      ],
    },
    cities: {
      eyebrow: "Texas Cities We Serve",
      headlinePre: "Local marketing playbooks for every major",
      accent: "Texas metro.",
      lede: "We work with home inspectors across every population center in Texas, from the I-35 corridor to the Gulf Coast. Each metro has its own competitive landscape, search volume, and price-per-click economics — here's where we focus most of our Texas work, and how each market is different.",
      cards: [
        {
          h: "Houston",
          p: "Largest Texas metro. Foundation specialty demand is high; investor market is massive. Submarkets include Katy, Sugar Land, The Woodlands, Pearland.",
          link: "#",
          linkLabel: "Local SEO in Houston",
        },
        {
          h: "Dallas",
          p: "Tech corridor with heavy transplant volume. Competition is intense — first-page rankings here are five-figure annual revenue opportunities.",
          link: "#",
          linkLabel: "Local SEO in Dallas",
        },
        {
          h: "Austin",
          p: "Tech capital. Premium inspection pricing supports aggressive marketing investment. Round Rock, Cedar Park, Pflugerville are active submarkets.",
          link: "#",
          linkLabel: "Local SEO in Austin",
        },
        {
          h: "San Antonio",
          p: "Growing rapidly with strong investor activity. Lower CPCs than DFW/Austin make Google Ads especially efficient here.",
          link: "#",
          linkLabel: "Local SEO in San Antonio",
        },
        {
          h: "Fort Worth",
          p: "Traditional Texas market with strong family-home volume. Less saturated than Dallas — opportunity for first-mover local SEO wins.",
          link: "#",
          linkLabel: "Local SEO in Fort Worth",
        },
        {
          h: "Plano",
          p: "High-income Dallas suburb. Premium inspection market, agent-network-heavy — digital marketing complements rather than replaces referrals.",
          link: "#",
          linkLabel: "Local SEO in Plano",
        },
        {
          h: "Arlington",
          p: "DFW middle with steady transaction volume. Strong opportunity for inspectors covering both Dallas and Fort Worth submarkets.",
          link: "#",
          linkLabel: "Local SEO in Arlington",
        },
        {
          h: "El Paso",
          p: "Border metro with growing inspection demand. Less competitive Google landscape — early SEO wins still achievable here.",
          link: "#",
          linkLabel: "Local SEO in El Paso",
        },
      ],
    },
    pricingHeadlinePre:
      "Three plans built for where your Texas inspection business is",
    pricingAccent: "right now.",
    pricingLede:
      "Pick the plan that fits where your Texas inspection business is today — you can move up or down between tiers any month. Ad spend is separate from the management fee and goes straight to Google and Meta. No setup fees, no twelve-month lockups, no hidden charges.",
    faqEyebrow: "Common Questions From Texas Home Inspectors",
    faqs: [
      {
        q: "How long does it take to see results from home inspector marketing in Texas?",
        a: "Most Texas home inspectors see measurable changes within thirty to forty-five days. Google Business Profile improvements and paid ad campaigns typically generate calls inside the first three weeks. Sustained local SEO ranking takes ninety to one-hundred-eighty days depending on which Texas metro you're in and the current state of your online presence. We give honest timelines during the audit — never inflated \"results in seven days\" promises.",
      },
      {
        q: "Do I need to sign a long-term contract?",
        a: "No. Every plan is month to month. If a service is not producing results, you can pause or cancel without penalty. We stay away from twelve-month lockups because home inspectors deserve to keep working with us because the work is paying off, not because a contract says they have to.",
      },
      {
        q: "Do you understand Texas TREC licensing requirements for home inspectors?",
        a: "Yes. We work exclusively with TREC-licensed home inspectors and understand the licensing tier structure (Apprentice, Real Estate Inspector, Professional Inspector). Our content and marketing copy is calibrated to TREC standards — we never make claims or use language that could trigger a license issue. If you have a specific concern about how we present your credentials, we address it during onboarding.",
      },
      {
        q: "How do you handle the saturation in Dallas, Houston, and Austin metros?",
        a: "Texas's largest metros are some of the most competitive home inspector markets in the country. Our approach in saturated metros is hyper-local: instead of trying to rank for \"home inspector Dallas\" against fifty competitors, we build out submarket-specific pages (Frisco, Plano, McKinney, Allen, Richardson, etc.) where competition is thinner and search intent is higher. By month six, most clients are ranking #1 in three to five submarkets even if the broader metro keyword takes longer.",
      },
      {
        q: "Will digital marketing replace my real estate agent referrals in Texas?",
        a: "Our goal is not to replace agent relationships — it is to stop you from depending entirely on them. Most Texas inspectors we work with keep their agent referrals and add a steady stream of direct calls from buyers, sellers, and FSBO transactions through Google. The agent referrals become a bonus, not a lifeline. Many clients also report new agents joining their referral pool because strong online presence makes them look more established.",
      },
      {
        q: "What is included in the free Texas home inspector marketing audit?",
        a: "The audit reviews your current Google Business Profile setup, your local pack ranking for primary inspection keywords in your Texas service area, your website speed and conversion structure, your review velocity and response patterns, citation accuracy across home services and real estate directories, and any active ad accounts. You receive a written report with prioritized recommendations within five business days. There is no obligation to hire us after.",
      },
      {
        q: "How much does home inspector marketing cost in Texas?",
        a: "Plans start at $750 per month for foundational local SEO and Google Business Profile work, $1,350 per month for growth-stage inspectors who need paid ads and review systems, and $2,000 per month for established firms who want the full digital marketing stack. Ad spend is separate and goes directly to Google and Meta. We typically recommend a starting ad budget of $1,000 to $2,500 per month for Texas markets depending on the size of your service area.",
      },
      {
        q: "Can you fix my Google Business Profile if it's been suspended?",
        a: "Yes. GBP reinstatement is one of our specialties — we've reinstated hundreds of suspended profiles across local service businesses including home inspectors. If your profile is currently suspended, mention it on the audit form and we'll prioritize reviewing the suspension reason and the path to reinstatement. Most cases resolve within seven to twenty-one days once the appeal is properly structured.",
      },
    ],
    final: {
      accent: "Texas Home Inspectors.",
      lede: "Five-page written report covering your GBP, your Texas local rankings, your website, and the gaps your competitors are exploiting. Delivered within five business days. No sales call required to receive it.",
    },
  },

  florida: {
    name: "Florida",
    slug: "florida",
    metaTitle: "Florida Home Inspector Marketing & SEO",
    metaDescription:
      "Home inspector marketing for Florida. Local SEO, Google Ads, GBP for inspectors in Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale. Free audit, no contracts.",
    ticker: [
      "Free Florida Home Inspector Marketing Audit",
      "500+ Local Businesses Ranked",
      "Month-to-Month, No Contracts",
      "Local SEO · Google Ads · GBP · Social · Websites",
      "Trusted by Home Inspectors Nationally",
      "4.9/5 Average Client Rating",
    ],
    hero: {
      eyebrow: "Marketing for Florida Home Inspectors",
      headlinePre: "Home Inspector Marketing That Wins in",
      accent: "Florida's Insurance Era.",
      sub: "Florida's home inspection market is unlike anywhere else in the country. Wind mitigation inspections, 4-point inspections, and the ongoing insurance crisis have created year-round demand — but they've also created saturation. We help Florida home inspectors stand out in Miami, Tampa, Orlando, Jacksonville, and every metro in between by building digital marketing that speaks directly to the insurance-driven buyer.",
    },
    problem: {
      eyebrow: "Why Florida Home Inspectors Struggle Online",
      headlinePre: "Florida demand is high. So is the competition for",
      accent: "every keyword.",
      lede: "Florida has more licensed home inspectors per capita than almost any other state, and the insurance crisis has only increased demand for specialty inspections. Every homeowner in the state now needs a 4-point and wind mitigation just to keep coverage, and buyers are doing more inspections than ever. The opportunity is enormous — but the inspectors capturing it are the ones with strong Google presence, optimized service pages for specialty work, and review counts that signal trust to nervous buyers.",
      proseSegments: [
        {
          strongs: ["insurance"],
          text: "Florida home inspection is shaped by one thing more than any other: {0}. The state's ongoing insurance crisis has made 4-point inspections, wind mitigation reports, and roof condition certifications routine demands from every carrier. That's a massive opportunity — but most Florida inspectors aren't optimizing their websites or GBP profiles for the specific keywords insurance-driven buyers are searching.",
        },
        {
          strongs: ["snowbird and second-home market"],
          text: "The second Florida-specific reality is the {0}. Buyers from New York, New Jersey, Pennsylvania, and Ohio routinely buy homes in Naples, Sarasota, the Panhandle, and coastal Broward County without ever visiting in person — they hire their inspector entirely through Google reviews and online presence. If your profile isn't there, you're invisible to a huge slice of the Florida buyer market.",
        },
        {
          strongs: ["hurricane and humidity reality"],
          text: "Third, there's the {0}. Mold inspections, post-storm assessments, and ongoing moisture intrusion work are all year-round revenue streams for Florida inspectors. But again — buyers and adjusters searching for those services need to find you. Most Florida inspectors have a single \"home inspection\" service page and miss every long-tail keyword that drives specialty work.",
        },
      ],
      cards: [
        {
          h: "Wind mitigation searches are exploding.",
          p: "Every Florida homeowner needs one to keep insurance. If your GBP and website don't surface for \"wind mitigation inspection + city,\" you're missing one of the highest-volume keyword segments in the state.",
        },
        {
          h: "4-point inspections are required by every insurer.",
          p: "This is now a recurring revenue stream — not a one-off inspection. Inspectors who rank for 4-point keywords get repeat business from the same homeowners every renewal cycle.",
        },
        {
          h: "Snowbird buyers hire entirely online.",
          p: "If your reviews and GBP photos aren't strong, out-of-state buyers will book the inspector with the better online presence — every time.",
        },
        {
          h: "Hurricane season changes search behavior.",
          p: "Demand for post-storm inspections, mold assessments, and roof certifications spikes seasonally. Most Florida inspectors don't have seasonal content ready to capture that demand.",
        },
      ],
    },
    processLede:
      "No tedious onboarding deck. No fifty-question intake form. Florida home inspectors are usually running flat-out during season, so we keep your time in the process to about forty-five minutes total across the first two weeks.",
    results: {
      headlinePre: "What changes when Florida home inspectors stop",
      accent: "relying on referrals alone.",
      lede: "Here are the patterns we see across Florida home inspection companies after the first ninety to one-hundred-eighty days. Your specific numbers will depend on whether you're in a Tier 1 metro like Miami or Tampa or a secondary market like Naples or Pensacola.",
      proseSegments: [
        {
          text: "Florida client results follow a slightly different pattern than other states. In the first ninety days, the specialty service pages (wind mitigation, 4-point) start ranking and bringing in insurance-driven inquiries that are highly likely to convert. The standard \"home inspector + city\" rankings take longer — usually four to six months — but the specialty pages move much faster because most competitors haven't optimized for them.",
        },
        {
          text: "One Tampa Bay home inspector we work with was doing about forty inspections a month when we started, mostly through agent referrals. Within four months his wind mitigation page was the #1 result for \"wind mitigation inspection Tampa\" and was bringing in twenty-five additional bookings monthly directly from insurance-required searches. By month nine, the standard home inspection rankings caught up and the agent-referral business became roughly half his volume instead of all of it.",
        },
        {
          strongs: ["review velocity matters more here than almost anywhere else"],
          text: "The other Florida pattern worth noting: {0}. Snowbird buyers and out-of-state investors hire entirely on the basis of review count and recency. Florida inspectors with sixty recent reviews routinely outbook inspectors with two hundred older reviews. Our review automation is built for that reality.",
        },
      ],
      stats: [
        {
          big: "3.8×",
          h: "More direct inspection bookings within 90 days",
          p: "Including specialty 4-point and wind mitigation inquiries.",
        },
        {
          big: "55%",
          h: "Lower cost per booked inspection",
          p: "Comparing month-one CAC to month-twelve, blended across all channels.",
        },
        {
          big: "#1",
          h: "Specialty keyword rankings in target metro",
          p: "For wind mitigation, 4-point, and mold inspection searches.",
        },
        {
          big: "72%",
          h: "Review velocity increase",
          p: "Average review acquisition rate after automated request system goes live.",
        },
      ],
    },
    cities: {
      eyebrow: "Florida Cities We Serve",
      headlinePre: "Hyper-local marketing across every major",
      accent: "Florida metro.",
      lede: "Florida is really five or six distinct markets stitched together — South Florida, the I-4 corridor, Tampa Bay, Jacksonville, the Panhandle, and the high-end Gulf Coast. Each has its own buyer profile, agent network, and search behavior. Here are the Florida metros we focus on most.",
      cards: [
        {
          h: "Miami",
          p: "International buyers, premium inspection pricing, Spanish-language search volume. Highly competitive — specialty service ranking is the fast win here.",
          link: "#",
          linkLabel: "Local SEO in Miami",
        },
        {
          h: "Orlando",
          p: "Fast-growing investor market with strong tourism-rental inspection demand. I-4 corridor includes Kissimmee, Sanford, and Winter Park.",
          link: "#",
          linkLabel: "Local SEO in Orlando",
        },
        {
          h: "Tampa",
          p: "Bay Area boom market. Wind mitigation demand peaks here. St. Petersburg, Clearwater, Brandon all viable submarkets.",
          link: "#",
          linkLabel: "Local SEO in Tampa",
        },
        {
          h: "Jacksonville",
          p: "Largest Florida city by area. Growing tech and military relocation market. Less saturated than South Florida — faster SEO wins possible.",
          link: "#",
          linkLabel: "Local SEO in Jacksonville",
        },
        {
          h: "Fort Lauderdale",
          p: "South Florida premium market. Coral Springs, Pompano Beach, Coconut Creek all active submarkets with consistent agent referral overlap.",
          link: "#",
          linkLabel: "Local SEO in Fort Lauderdale",
        },
        {
          h: "Naples",
          p: "High-end retirement and second-home market. Snowbird buyers research entirely online — review count and GBP photos are the conversion drivers here.",
          link: "#",
          linkLabel: "Local SEO in Naples",
        },
        {
          h: "St. Petersburg",
          p: "Growing rapidly with strong relocation volume from the Northeast. Pinellas County submarket optimization is the fast play.",
          link: "#",
          linkLabel: "Local SEO in St. Petersburg",
        },
        {
          h: "Sarasota",
          p: "Premium Gulf Coast market with strong second-home buyer activity. Lower CPCs than Tampa make Google Ads especially efficient here.",
          link: "#",
          linkLabel: "Local SEO in Sarasota",
        },
      ],
    },
    pricingHeadlinePre:
      "Three plans built for where your Florida inspection business is",
    pricingAccent: "right now.",
    pricingLede:
      "Pick the plan that fits where your Florida inspection business is today — you can move up or down between tiers any month. Ad spend is separate and goes straight to Google and Meta. No setup fees, no twelve-month lockups.",
    faqEyebrow: "Common Questions From Florida Home Inspectors",
    faqs: [
      {
        q: "How long does it take to see results from home inspector marketing in Florida?",
        a: "Most Florida home inspectors see measurable changes within thirty to forty-five days. Google Business Profile improvements and paid ad campaigns typically generate calls inside the first three weeks. Sustained local SEO ranking takes ninety to one-hundred-eighty days depending on which Florida metro you're in and the current state of your online presence. We give honest timelines during the audit — never inflated \"results in seven days\" promises.",
      },
      {
        q: "Do I need to sign a long-term contract?",
        a: "No. Every plan is month to month. If a service is not producing results, you can pause or cancel without penalty. We stay away from twelve-month lockups because home inspectors deserve to keep working with us because the work is paying off, not because a contract says they have to.",
      },
      {
        q: "Can you handle marketing for wind mitigation and 4-point inspection services specifically?",
        a: "Yes — these are some of the highest-volume and highest-intent search categories in Florida home inspection. We build dedicated service pages for both, optimize your GBP categories to include them, and run targeted Google Ads campaigns for insurance-driven keywords. For most Florida clients, specialty service rankings are the fastest wins because most competitors haven't built dedicated pages for them.",
      },
      {
        q: "Do you work with DBPR-licensed inspectors and understand Florida's specific regulations?",
        a: "Yes. Our work is calibrated to Florida DBPR licensing standards. We're careful never to make claims in your marketing copy that could create licensing issues, and we understand the specific inspection categories Florida recognizes (general home inspection, wind mitigation, 4-point, roof certification, etc.). If your business handles specialty Florida inspections, we build separate optimized pages for each.",
      },
      {
        q: "Will digital marketing replace my real estate agent referrals in Florida?",
        a: "Our goal is not to replace agent relationships — it is to stop you from depending entirely on them. Most Florida inspectors we work with keep their agent referrals and add a steady stream of direct calls from buyers, sellers, and FSBO transactions through Google. The agent referrals become a bonus, not a lifeline. Many clients also report new agents joining their referral pool because strong online presence makes them look more established.",
      },
      {
        q: "What is included in the free Florida home inspector marketing audit?",
        a: "The audit reviews your current Google Business Profile setup, your local pack ranking for primary inspection keywords in your Florida service area, your website speed and conversion structure, your review velocity and response patterns, citation accuracy across home services and real estate directories, and any active ad accounts. You receive a written report with prioritized recommendations within five business days. There is no obligation to hire us after.",
      },
      {
        q: "How much does home inspector marketing cost in Florida?",
        a: "Plans start at $750 per month for foundational local SEO and Google Business Profile work, $1,350 per month for growth-stage inspectors who need paid ads and review systems, and $2,000 per month for established firms who want the full digital marketing stack. Ad spend is separate and goes directly to Google and Meta. We typically recommend a starting ad budget of $1,000 to $2,500 per month for Florida markets depending on the size of your service area.",
      },
      {
        q: "Can you fix my Google Business Profile if it's been suspended?",
        a: "Yes. GBP reinstatement is one of our specialties — we've reinstated hundreds of suspended profiles across local service businesses including home inspectors. If your profile is currently suspended, mention it on the audit form and we'll prioritize reviewing the suspension reason and the path to reinstatement. Most cases resolve within seven to twenty-one days once the appeal is properly structured.",
      },
    ],
    final: {
      accent: "Florida Home Inspectors.",
      lede: "Five-page written report covering your GBP, your Florida local rankings, your website, and the gaps your competitors are exploiting. Delivered within five business days. No sales call required to receive it.",
    },
  },

  california: {
    name: "California",
    slug: "california",
    metaTitle:
      "California Home Inspector Marketing & SEO",
    metaDescription:
      "Home inspector marketing for California. Local SEO, Google Ads, GBP for inspectors in Los Angeles, San Diego, San Francisco, San Jose, Sacramento. Free audit, no contracts.",
    ticker: [
      "Free California Home Inspector Marketing Audit",
      "500+ Local Businesses Ranked",
      "Month-to-Month, No Contracts",
      "Local SEO · Google Ads · GBP · Social · Websites",
      "Trusted by Home Inspectors Nationally",
      "4.9/5 Average Client Rating",
    ],
    hero: {
      eyebrow: "Marketing for California Home Inspectors",
      headlinePre: "Home Inspector Marketing for",
      accent: "California's Toughest Markets.",
      sub: "California home inspectors work in the most expensive housing market in the country, with the strictest regulations and the most informed buyers. The inspectors winning California are the ones who show up first on Google with profiles that say \"I know this market.\" We build that presence — from the Bay Area to San Diego, and everywhere the California real estate market is moving.",
    },
    problem: {
      eyebrow: "Why California Home Inspectors Get Outranked",
      headlinePre: "Every California inspector is online. Most of them are",
      accent: "doing it wrong.",
      lede: "California has been an online-first home inspection market for over a decade. Almost every licensed inspector in the state has a Google Business Profile, a website, and at least some marketing presence. What separates the inspectors getting twenty bookings a month from the inspectors getting two is execution, not effort — and that's exactly what most California inspectors get wrong.",
      proseSegments: [
        {
          text: "California home inspection is a premium-priced, highly regulated market. Inspections in San Francisco and Los Angeles regularly clear $700 to $1,200, which means each new direct booking represents serious revenue. But it also means competition for online visibility is fierce. The inspectors ranking #1 in the Bay Area or West LA aren't there by accident — they have professional GBP profiles, dozens of recent reviews mentioning specific neighborhoods, and websites built for conversion.",
        },
        {
          strongs: [
            "Seismic and earthquake retrofit inspections",
            "Title 24 energy compliance work",
            "wildfire defensible-space assessments",
          ],
          text: "California's specialty inspection landscape is also unique. {0}, {1}, {2}, and pre-listing inspections for million-dollar homes are all routine in California in ways they aren't elsewhere. Each represents a long-tail keyword opportunity most inspectors haven't capitalized on.",
        },
        {
          strongs: ["buyer profile"],
          text: "The other California reality is the {0}. California buyers are sophisticated. They read inspection reports cover to cover, they ask agents specific questions, and they cross-reference reviews across multiple platforms before booking. Your online presence isn't just about visibility — it's about credibility. Generic stock-photo websites and three-line GBP descriptions don't pass that bar.",
        },
      ],
      cards: [
        {
          h: "Every premium California metro has 100+ inspectors.",
          p: "Ranking on page one in LA, SF, or San Diego is a multi-quarter SEO project. Specialty service pages get there faster than head terms.",
        },
        {
          h: "California buyers cross-reference everything.",
          p: "If your reviews on Google, Yelp, and Angi don't align — or if any platform shows old or thin review counts — sophisticated buyers walk away.",
        },
        {
          h: "Specialty inspections drive premium revenue.",
          p: "Seismic retrofit, Title 24, wildfire defensible space — these specialties are high-revenue and low-competition in search. Most inspectors haven't optimized for them.",
        },
        {
          h: "Mobile speed determines whether you get the call.",
          p: "California search is almost entirely mobile. A site that takes four seconds to load on a phone loses the booking before it starts. Sub-two-second mobile load is the baseline here.",
        },
      ],
    },
    processLede:
      "No tedious onboarding deck. No fifty-question intake form. California home inspectors are running a premium business, and we respect that — we keep your time in the process to about forty-five minutes total across the first two weeks.",
    results: {
      headlinePre: "What changes when California home inspectors stop",
      accent: "relying on referrals alone.",
      lede: "Here are the patterns we see across California home inspection companies after the first ninety to one-hundred-eighty days. Your specific numbers will depend heavily on whether you're in a Tier 1 metro like the Bay Area or LA, or a secondary California market.",
      proseSegments: [
        {
          text: "California client results take slightly longer to materialize because the markets are more competitive — but the revenue per booking is so much higher that the ROI math usually works out faster than other states. In the first ninety days, the specialty service pages (seismic, Title 24, wildfire) start ranking and bring in high-margin inquiries. The standard \"home inspector + city\" rankings often take six to nine months in the most saturated markets, but the specialty pages drive revenue while we wait.",
        },
        {
          text: "One Sacramento-area home inspector we work with was doing about twenty-five inspections a month at $750 average ticket when we started. Within five months his GBP was ranking #1 for \"home inspector Sacramento\" in three submarkets including Folsom and Roseville. By month nine, his average monthly inspection count was fifty-two and his average ticket had risen to $895 because the digital marketing was attracting higher-end clients who weren't price-shopping.",
        },
        {
          strongs: ["Yelp matters here"],
          text: "The other California pattern: {0}. Unlike most other states where Yelp is secondary, California buyers consistently cross-reference Yelp reviews before booking. Our review automation includes Yelp-specific request flows for California clients because ignoring it costs bookings.",
        },
      ],
      stats: [
        {
          big: "2.8×",
          h: "More direct calls within 90 days",
          p: "Average increase in non-referred buyer inquiries across California metros.",
        },
        {
          big: "$895",
          h: "Average ticket size after 9 months",
          p: "Higher-value clients self-select toward inspectors with stronger digital presence.",
        },
        {
          big: "#1",
          h: "Specialty keyword rankings",
          p: "Within 4-6 months for seismic, Title 24, or wildfire inspection searches.",
        },
        {
          big: "44%",
          h: "Lower cost per booked inspection",
          p: "Comparing month-one CAC to month-twelve, blended across channels.",
        },
      ],
    },
    cities: {
      eyebrow: "California Cities We Serve",
      headlinePre: "Local marketing playbooks for every major",
      accent: "California metro.",
      lede: "California is the most segmented inspection market in the country — every metro has its own price point, buyer profile, and competitive landscape. Here are the California markets we focus on most, and what makes each one different.",
      cards: [
        {
          h: "Los Angeles",
          p: "Largest California metro. Sprawling submarket structure — West LA, San Fernando Valley, South Bay, Pasadena, Long Beach all behave like separate markets.",
          link: "#",
          linkLabel: "Local SEO in Los Angeles",
        },
        {
          h: "San Diego",
          p: "Strong military relocation volume and steady year-round demand. Less saturated than LA — first-page rankings achievable in 4-6 months.",
          link: "#",
          linkLabel: "Local SEO in San Diego",
        },
        {
          h: "San Francisco",
          p: "Premium Bay Area market with tech-wealth buyers. Average inspection prices clear $1,000. Specialty work (foundation, seismic) drives high-margin volume.",
          link: "#",
          linkLabel: "Local SEO in San Francisco",
        },
        {
          h: "San Jose",
          p: "Tech capital. South Bay buyers are sophisticated, review-driven, and willing to pay premium for inspectors with strong online credibility.",
          link: "#",
          linkLabel: "Local SEO in San Jose",
        },
        {
          h: "Sacramento",
          p: "Growing state capital with strong relocation volume from the Bay Area. Less competitive than coastal metros — faster SEO wins possible.",
          link: "#",
          linkLabel: "Local SEO in Sacramento",
        },
        {
          h: "Fresno",
          p: "Central Valley market with steady volume and lower CPCs. Google Ads especially efficient here — opportunity for first-page domination.",
          link: "#",
          linkLabel: "Local SEO in Fresno",
        },
        {
          h: "Long Beach",
          p: "LA-adjacent with its own distinct buyer profile. Pre-listing inspections for the older housing stock drive consistent specialty work.",
          link: "#",
          linkLabel: "Local SEO in Long Beach",
        },
        {
          h: "Oakland",
          p: "Bay Area East Bay. Strong Berkeley/Albany/Alameda submarket coverage opportunities for inspectors covering the broader region.",
          link: "#",
          linkLabel: "Local SEO in Oakland",
        },
      ],
    },
    pricingHeadlinePre:
      "Three plans built for where your California inspection business is",
    pricingAccent: "right now.",
    pricingLede:
      "Pick the plan that fits where your California inspection business is today — you can move up or down between tiers any month. Ad spend is separate from the management fee and goes straight to Google and Meta. No setup fees, no twelve-month lockups.",
    faqEyebrow: "Common Questions From California Home Inspectors",
    faqs: [
      {
        q: "How long does it take to see results from home inspector marketing in California?",
        a: "Most California home inspectors see measurable changes within thirty to forty-five days. Google Business Profile improvements and paid ad campaigns typically generate calls inside the first three weeks. Sustained local SEO ranking takes ninety to one-hundred-eighty days depending on which California metro you're in and the current state of your online presence. We give honest timelines during the audit — never inflated \"results in seven days\" promises.",
      },
      {
        q: "Do I need to sign a long-term contract?",
        a: "No. Every plan is month to month. If a service is not producing results, you can pause or cancel without penalty. We stay away from twelve-month lockups because home inspectors deserve to keep working with us because the work is paying off, not because a contract says they have to.",
      },
      {
        q: "Do you handle California-specific inspections like Title 24 and seismic retrofit?",
        a: "Yes. We build dedicated optimized service pages for Title 24 energy compliance, seismic retrofit, wildfire defensible-space assessment, and any other California-specific inspection categories you offer. These specialty pages typically rank faster than the general \"home inspector\" head term because competition for them is much thinner — and they bring in higher-revenue work.",
      },
      {
        q: "How do you compete in saturated California metros like the Bay Area and LA?",
        a: "California's largest metros are some of the most competitive home inspector markets in the country. Our approach in saturated metros is the same as Texas — hyper-local. Instead of fighting for \"home inspector Los Angeles\" against fifty competitors, we build out submarket pages (Pasadena, West LA, Long Beach, Santa Monica, etc.) where competition is thinner. We also lean heavily into specialty service rankings, which are typically lower-competition and higher-margin.",
      },
      {
        q: "Will digital marketing replace my real estate agent referrals in California?",
        a: "Our goal is not to replace agent relationships — it is to stop you from depending entirely on them. Most California inspectors we work with keep their agent referrals and add a steady stream of direct calls from buyers, sellers, and FSBO transactions through Google. The agent referrals become a bonus, not a lifeline. Many clients also report new agents joining their referral pool because strong online presence makes them look more established.",
      },
      {
        q: "What is included in the free California home inspector marketing audit?",
        a: "The audit reviews your current Google Business Profile setup, your local pack ranking for primary inspection keywords in your California service area, your website speed and conversion structure, your review velocity and response patterns, citation accuracy across home services and real estate directories, and any active ad accounts. You receive a written report with prioritized recommendations within five business days. There is no obligation to hire us after.",
      },
      {
        q: "How much does home inspector marketing cost in California?",
        a: "Plans start at $750 per month for foundational local SEO and Google Business Profile work, $1,350 per month for growth-stage inspectors who need paid ads and review systems, and $2,000 per month for established firms who want the full digital marketing stack. Ad spend is separate and goes directly to Google and Meta. We typically recommend a starting ad budget of $1,000 to $2,500 per month for California markets depending on the size of your service area.",
      },
      {
        q: "Can you fix my Google Business Profile if it's been suspended?",
        a: "Yes. GBP reinstatement is one of our specialties — we've reinstated hundreds of suspended profiles across local service businesses including home inspectors. If your profile is currently suspended, mention it on the audit form and we'll prioritize reviewing the suspension reason and the path to reinstatement. Most cases resolve within seven to twenty-one days once the appeal is properly structured.",
      },
    ],
    final: {
      accent: "California Home Inspectors.",
      lede: "Five-page written report covering your GBP, your California local rankings, your website, and the gaps your competitors are exploiting. Delivered within five business days. No sales call required to receive it.",
    },
  },

  "north-carolina": {
    name: "North Carolina",
    slug: "north-carolina",
    metaTitle:
      "North Carolina Home Inspector Marketing & SEO",
    metaDescription:
      "Home inspector marketing for North Carolina. Local SEO, Google Ads, GBP for inspectors in Charlotte, Raleigh, Durham, Greensboro, Asheville. Free audit, no contracts.",
    ticker: [
      "Free North Carolina Home Inspector Marketing Audit",
      "500+ Local Businesses Ranked",
      "Month-to-Month, No Contracts",
      "Local SEO · Google Ads · GBP · Social · Websites",
      "Trusted by Home Inspectors Nationally",
      "4.9/5 Average Client Rating",
    ],
    hero: {
      eyebrow: "Marketing for North Carolina Home Inspectors",
      headlinePre: "Home Inspector Marketing Across North Carolina —",
      accent: "Charlotte to the Coast.",
      sub: "North Carolina is one of the fastest-growing relocation markets in the country. Transplants from New York, New Jersey, California, and Florida are flooding into Charlotte and the Triangle every month — and they're hiring home inspectors they Google, not the one their agent suggests. We help NC inspection companies capture that direct demand across every metro in the state.",
    },
    problem: {
      eyebrow: "Why North Carolina Inspectors Miss Transplant Buyers",
      headlinePre:
        "Your busiest buyer segment isn't from here. And they're not asking",
      accent: "your local agents.",
      lede: "North Carolina's growth story is the transplant buyer — Charlotte, Raleigh, Durham, and Cary are all in the top ten US metros for net migration. Those buyers don't have an existing relationship with a local agent. They're searching online for an inspector before they even close on the house, often from a different state entirely. If you're not surfacing in those searches, you're invisible to the most active buyer segment in your market.",
      proseSegments: [
        {
          text: "North Carolina home inspection is shaped by relocation. The Triangle (Raleigh, Durham, Chapel Hill) and Charlotte metros are absorbing transplants at historic rates, primarily driven by the tech corridor in the Triangle and the banking corridor in Charlotte. These buyers are sophisticated, online-native, and they make hiring decisions based on Google reviews and search visibility — not local referral networks.",
        },
        {
          strongs: ["housing stock"],
          text: "The second North Carolina reality is the {0}. NC has a mix of brand-new construction in master-planned communities and older homes with crawlspaces, moisture issues, and termite vulnerability. Buyers searching for \"crawlspace inspection Charlotte\" or \"moisture intrusion Raleigh\" are highly intentful — and most NC inspectors haven't built specialty pages for those searches.",
        },
        {
          strongs: ["NCLHIB licensing standards"],
          text: "Third, North Carolina has {0} that are stricter than many neighboring states. That's an advantage for inspectors who emphasize their credentialing properly in their marketing — but most NC inspectors bury their license number in a footer instead of leading with it. Sophisticated transplant buyers (especially from California and the Northeast) actively look for proper credentialing as a trust signal.",
        },
      ],
      cards: [
        {
          h: "Transplant buyers Google before they arrive.",
          p: "Your highest-value buyer segment makes their inspector decision before they even tour the house. If you're not on page one for \"home inspector + city,\" you don't exist to them.",
        },
        {
          h: "Crawlspace and moisture issues drive specialty work.",
          p: "NC's older housing stock means crawlspace inspections, moisture assessments, and termite work are consistent revenue streams. Most NC inspectors don't have dedicated service pages for these.",
        },
        {
          h: "NCLHIB credentials are a trust signal — when surfaced properly.",
          p: "Out-of-state buyers look for licensing rigor. Leading with your NCLHIB number and recent reviews mentioning your professionalism wins these bookings.",
        },
        {
          h: "Charlotte vs Triangle search behavior is different.",
          p: "Charlotte buyers behave more like financial-services transplants — risk-averse, review-heavy. Triangle buyers behave more like tech transplants — speed and online-booking focused. Same playbook doesn't work for both.",
        },
      ],
    },
    processLede:
      "No tedious onboarding deck. No fifty-question intake form. North Carolina home inspectors are usually busy keeping up with the relocation volume, so we keep your time in the process to about forty-five minutes total across the first two weeks.",
    results: {
      headlinePre: "What changes when North Carolina home inspectors stop",
      accent: "relying on referrals alone.",
      lede: "Here are the patterns we see across North Carolina home inspection companies after the first ninety to one-hundred-eighty days. Your specific numbers will depend on whether you're in the Triangle, Charlotte, or a secondary metro like Greensboro or Asheville.",
      proseSegments: [
        {
          text: "NC client results follow a pattern shaped by the transplant buyer. In the first ninety days, GBP optimization and paid ads start surfacing your business for \"home inspector + city\" searches — and transplant buyers who haven't picked an agent yet convert at higher rates than typical local buyers. By month four or five, the organic SEO investment starts paying out for the broader metro keywords.",
        },
        {
          text: "One Raleigh-area home inspector we work with was running about twenty-five inspections a month, mostly through three local agents. Within four months his direct Google bookings had grown to thirty-five additional inspections on top of the agent base, almost entirely from transplant buyers relocating from New York, California, and Florida. By month nine, he was the #1 Google result for \"home inspector Raleigh\" and was actively turning down work.",
        },
        {
          strongs: ["review count compounds faster here"],
          text: "The other NC pattern worth noting: {0} because transplant buyers leave reviews at higher rates than local buyers. Once you cross 100 reviews, GBP ranking accelerates noticeably. Our automation is calibrated to capture that volume.",
        },
      ],
      stats: [
        {
          big: "3.5×",
          h: "More direct calls within 90 days",
          p: "Especially strong in Charlotte and Triangle metros with high transplant volume.",
        },
        {
          big: "100+",
          h: "Review count milestone by month 8",
          p: "Average review accumulation for NC clients on automated request systems.",
        },
        {
          big: "#1",
          h: "Local map pack rankings in target metro",
          p: "Within 4-6 months for primary inspection keyword + NC city.",
        },
        {
          big: "58%",
          h: "Transplant buyer share",
          p: "Approximate percentage of new direct bookings coming from out-of-state relocations.",
        },
      ],
    },
    cities: {
      eyebrow: "North Carolina Cities We Serve",
      headlinePre: "Local marketing across every major",
      accent: "North Carolina metro.",
      lede: "North Carolina splits into roughly four distinct inspection markets: Charlotte, the Triangle, the Triad, and the coast. Each has its own buyer profile, competitive landscape, and growth trajectory. Here are the NC metros we focus on most.",
      cards: [
        {
          h: "Charlotte",
          p: "Banking corridor capital. Heaviest transplant volume in the state. Submarkets include Concord, Huntersville, Matthews, Pineville — all viable separate market opportunities.",
          link: "#",
          linkLabel: "Local SEO in Charlotte",
        },
        {
          h: "Raleigh",
          p: "Triangle tech hub. Sophisticated transplant buyers, premium inspection prices, strong agent overlap with Cary and Durham.",
          link: "#",
          linkLabel: "Local SEO in Raleigh",
        },
        {
          h: "Greensboro",
          p: "Traditional Triad market with steady volume and lower competition than Charlotte/Raleigh. Fast SEO wins still possible here.",
          link: "#",
          linkLabel: "Local SEO in Greensboro",
        },
        {
          h: "Durham",
          p: "Triangle research corridor. Heavy tech transplant volume. Often paired with Chapel Hill and Hillsborough in service-area coverage.",
          link: "#",
          linkLabel: "Local SEO in Durham",
        },
        {
          h: "Winston-Salem",
          p: "Traditional Triad market. Less competitive Google landscape — early wins achievable for inspectors who haven't invested in digital yet.",
          link: "#",
          linkLabel: "Local SEO in Winston-Salem",
        },
        {
          h: "Asheville",
          p: "Mountain market with strong retirement and second-home buyer activity. Premium pricing supports aggressive marketing investment.",
          link: "#",
          linkLabel: "Local SEO in Asheville",
        },
        {
          h: "Fayetteville",
          p: "Military-driven market with consistent relocation volume from Fort Liberty. PCS-cycle inspections create predictable seasonal demand.",
          link: "#",
          linkLabel: "Local SEO in Fayetteville",
        },
        {
          h: "Cary",
          p: "High-income Triangle suburb. Premium inspection market overlap with Raleigh — strong opportunity for inspectors covering both.",
          link: "#",
          linkLabel: "Local SEO in Cary",
        },
      ],
    },
    pricingHeadlinePre:
      "Three plans built for where your North Carolina inspection business is",
    pricingAccent: "right now.",
    pricingLede:
      "Pick the plan that fits where your North Carolina inspection business is today — you can move up or down between tiers any month. Ad spend is separate and goes straight to Google and Meta. No setup fees, no twelve-month lockups.",
    faqEyebrow: "Common Questions From North Carolina Home Inspectors",
    faqs: [
      {
        q: "How long does it take to see results from home inspector marketing in North Carolina?",
        a: "Most North Carolina home inspectors see measurable changes within thirty to forty-five days. Google Business Profile improvements and paid ad campaigns typically generate calls inside the first three weeks. Sustained local SEO ranking takes ninety to one-hundred-eighty days depending on which North Carolina metro you're in and the current state of your online presence. We give honest timelines during the audit — never inflated \"results in seven days\" promises.",
      },
      {
        q: "Do I need to sign a long-term contract?",
        a: "No. Every plan is month to month. If a service is not producing results, you can pause or cancel without penalty. We stay away from twelve-month lockups because home inspectors deserve to keep working with us because the work is paying off, not because a contract says they have to.",
      },
      {
        q: "Do you handle marketing for NCLHIB-licensed inspectors specifically?",
        a: "Yes. We work exclusively with NCLHIB-licensed home inspectors and understand North Carolina's licensing structure. Your license number and certification level are surfaced prominently in your marketing copy because they're a real trust signal — especially for transplant buyers from states with weaker licensing requirements. We're careful to never make claims that could create licensing or advertising compliance issues.",
      },
      {
        q: "How do you help me capture the transplant buyer market in Charlotte and the Triangle?",
        a: "Transplant capture is the core of NC home inspector marketing strategy. We focus on three things: (1) ranking for \"home inspector + city\" so out-of-state buyers find you during their pre-move research, (2) building review velocity because transplant buyers heavily weight review count and recency, and (3) ensuring your website explains your service area clearly so buyers from New York or California understand exactly what coverage you provide. Most of our NC clients see 50-60% of new direct bookings coming from transplants within six months.",
      },
      {
        q: "Will digital marketing replace my real estate agent referrals in North Carolina?",
        a: "Our goal is not to replace agent relationships — it is to stop you from depending entirely on them. Most North Carolina inspectors we work with keep their agent referrals and add a steady stream of direct calls from buyers, sellers, and FSBO transactions through Google. The agent referrals become a bonus, not a lifeline. Many clients also report new agents joining their referral pool because strong online presence makes them look more established.",
      },
      {
        q: "What is included in the free North Carolina home inspector marketing audit?",
        a: "The audit reviews your current Google Business Profile setup, your local pack ranking for primary inspection keywords in your North Carolina service area, your website speed and conversion structure, your review velocity and response patterns, citation accuracy across home services and real estate directories, and any active ad accounts. You receive a written report with prioritized recommendations within five business days. There is no obligation to hire us after.",
      },
      {
        q: "How much does home inspector marketing cost in North Carolina?",
        a: "Plans start at $750 per month for foundational local SEO and Google Business Profile work, $1,350 per month for growth-stage inspectors who need paid ads and review systems, and $2,000 per month for established firms who want the full digital marketing stack. Ad spend is separate and goes directly to Google and Meta. We typically recommend a starting ad budget of $1,000 to $2,500 per month for North Carolina markets depending on the size of your service area.",
      },
      {
        q: "Can you fix my Google Business Profile if it's been suspended?",
        a: "Yes. GBP reinstatement is one of our specialties — we've reinstated hundreds of suspended profiles across local service businesses including home inspectors. If your profile is currently suspended, mention it on the audit form and we'll prioritize reviewing the suspension reason and the path to reinstatement. Most cases resolve within seven to twenty-one days once the appeal is properly structured.",
      },
    ],
    final: {
      accent: "North Carolina Home Inspectors.",
      lede: "Five-page written report covering your GBP, your North Carolina local rankings, your website, and the gaps your competitors are exploiting. Delivered within five business days. No sales call required to receive it.",
    },
  },
};

/* Helpers — build state-flavored service/price content from a single template. */

export type StateService = {
  num: string;
  h: string;
  p: string;
  items: string[];
};

export type StatePriceCard = {
  tier: string;
  amount: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

export function buildStateServices(stateName: string): StateService[] {
  return [
    {
      num: "01 · LOCAL SEO",
      h: `Rank for "Home Inspector Near Me" in Every ${stateName} Town You Serve.`,
      p: `Local SEO for home inspectors is not a generic checklist exercise. The way ${stateName} buyers search for inspectors is hyper-local and intent-heavy — they're searching for a specific city, neighborhood, sometimes a specific home type. We build out service-area pages for every ${stateName} town in your coverage map, fix your citations across the directories real estate buyers actually use, and earn the kind of local backlinks that move the needle.`,
      items: [
        `Service-area pages for every ${stateName} town and zip you cover`,
        "Citation cleanup on Angi, Yelp, NACHI, InterNACHI, BBB, HomeAdvisor",
        "NAP consistency audit across 60+ directories",
        "Local backlinks from real estate agents, lenders, title companies",
        "On-page SEO for radon, mold, sewer scope, pool, and pre-listing pages",
      ],
    },
    {
      num: "02 · GOOGLE BUSINESS PROFILE",
      h: `Own the Local Map Pack for Your ${stateName} Service Area.`,
      p: `Your Google Business Profile is the single highest-converting asset you own — when it's optimized properly, it sends more calls than your website. We rebuild the profile from the inside out: every category beyond "home inspector" you should be claiming, photo geo-tagging from real inspections in ${stateName}, weekly Google Posts about seasonal issues, and a Q&A section seeded with the questions ${stateName} buyers actually ask.`,
      items: [
        "Category optimization (mold, radon, sewer scope, drone, thermal imaging)",
        `Geo-tagged photo uploads from real ${stateName} inspection sites`,
        `Weekly Google Posts tied to ${stateName} season and local market events`,
        "Q&A seeding with high-intent buyer questions",
        "Service-area accuracy and review response management",
      ],
    },
    {
      num: "03 · GOOGLE ADS",
      h: `Capture the ${stateName} Buyers Searching Right Now.`,
      p: `Local SEO is a long game. Google Ads is how you fill the calendar this week. We build inspection-specific search campaigns with the negative keywords no one else thinks about (no, you don't want to pay for "DIY home inspection checklist" or "home inspector salary"), call-only ads for mobile users, and geo-targeting that matches the actual ${stateName} neighborhoods you want to work in. Most clients see calls inside the first ten days of the campaign going live.`,
      items: [
        "Inspection-specific keyword research and negative keyword lists",
        "Call-only ads optimized for mobile buyers",
        `Geo-targeting at the ${stateName} zip code and neighborhood level`,
        "Conversion tracking for calls, form fills, and online bookings",
        "Monthly bid management and budget pacing reports",
      ],
    },
    {
      num: "04 · SOCIAL MEDIA MARKETING",
      h: "Build the Trust That Closes the Booking.",
      p: `Homebuyers are nervous. They are spending more money than they ever have on a property they barely understand, and they're hiring you to be their last line of defense before signing. Social media — when done right for home inspectors — is where that trust gets built before a buyer ever picks up the phone. We create short-form video content from real inspection findings, agent-facing content on LinkedIn, and a weekly cadence that keeps your name in front of every potential referral source in ${stateName}.`,
      items: [
        "Short-form video clips of unusual inspection findings",
        `Educational content for first-time ${stateName} homebuyers`,
        `LinkedIn presence for ${stateName} real estate agent relationships`,
        "Instagram and Facebook content calendar with weekly posts",
        "Reels and YouTube Shorts optimized for local discovery",
      ],
    },
    {
      num: "05 · WEBSITE DESIGN & SEO",
      h: `A Website That Actually Books ${stateName} Inspections.`,
      p: `Most home inspector websites are brochures. We build conversion machines. That means online scheduling integrated with your inspection software, instant quote calculators for service type and square footage, service pages for every inspection add-on you offer, mobile load times under two seconds, and on-page SEO that targets the exact phrases ${stateName} buyers are typing. If your current site is what it is and we just need to fix it, we can do that too.`,
      items: [
        "Online booking integrated with ISN, Spectora, HomeGauge, or HomeHubZone",
        "Instant quote calculator by property type and size",
        "Mobile-first design with sub-2-second load times",
        "Schema markup for LocalBusiness, FAQPage, Review, Service",
        "Dedicated pages for every ancillary service (mold, radon, pool, sewer scope, drone)",
      ],
    },
    {
      num: "06 · REVIEWS & REPUTATION",
      h: "Turn Every Inspection Into a Five-Star Public Endorsement.",
      p: "Reviews are the single biggest factor — after distance — in whether a buyer chooses your inspection company over the one three blocks away. We build an automated review request system that fires the right message at the right time after every inspection, monitors review activity across Google, Yelp, Angi, and NextDoor, and writes professional response templates for negative reviews so a one-star complaint doesn't bury you on Page One.",
      items: [
        "Automated review requests by SMS and email after every inspection",
        "Custom review templates referencing actual findings (not generic)",
        "Monitoring across Google, Yelp, Angi, BBB, NextDoor, Facebook",
        "Professional response drafting for negative reviews",
        "Strategy to surface neighborhood-specific reviews for local SEO",
      ],
    },
  ];
}

export function buildStatePriceCards(stateName: string): StatePriceCard[] {
  return [
    {
      tier: "Foundation",
      amount: "$750",
      period: "per month · billed monthly",
      features: [
        "Google Business Profile optimization (full rebuild + monthly management)",
        `Local SEO foundation — service-area pages for up to 5 ${stateName} towns`,
        "Citation cleanup across 40+ home services and real estate directories",
        "NAP consistency audit and fix",
        "On-page SEO for primary inspection service pages",
        "Monthly performance report",
        "Email support, 24-hour response",
      ],
      cta: "Start with Foundation",
    },
    {
      tier: "Growth",
      amount: "$1,350",
      period: "per month · billed monthly",
      featured: true,
      badge: "Most Popular",
      features: [
        "Everything in Foundation",
        "Google Ads management — full search campaign build and weekly bid management",
        "Automated review request system with custom inspection templates",
        "Review monitoring and response across Google, Yelp, Angi, BBB",
        `${stateName} service-area pages expanded to up to 12 towns`,
        "Quarterly strategy call with founder",
        "Priority email + SMS support",
      ],
      cta: "Choose Growth",
    },
    {
      tier: "Authority",
      amount: "$2,000",
      period: "per month · billed monthly",
      features: [
        "Everything in Growth",
        "Social media management — Instagram, Facebook, LinkedIn",
        "Short-form video content from inspection sites (4 per month)",
        "Meta Ads management for buyer and agent audiences",
        "Website conversion audit and ongoing optimization",
        `${stateName} service-area expansion to unlimited towns`,
        "Monthly strategy call with founder",
      ],
      cta: "Go Authority",
    },
  ];
}

export type ChannelTableRow = {
  channel: string;
  tag: string;
  delivers: string;
  timeline: string;
  fit: string;
};

export const CHANNEL_TABLE: ChannelTableRow[] = [
  {
    channel: "Google Business Profile",
    tag: "Map pack",
    delivers:
      "Direct calls from local Maps searches and the GBP knowledge panel — typically the highest-converting asset for a home inspection company.",
    timeline: "30–60 days",
    fit: "Inspectors invisible in the local 3-pack despite having reviews.",
  },
  {
    channel: "Local SEO",
    tag: "Organic rankings",
    delivers:
      "Page-one rankings for buyer search phrases across your city, suburbs, and service-area towns.",
    timeline: "90–180 days",
    fit: "Inspectors paying for clicks they should be ranking for organically.",
  },
  {
    channel: "Google Ads",
    tag: "Paid search",
    delivers:
      "Buyer-intent leads that fill the calendar this week while SEO compounds in the background.",
    timeline: "1–10 days",
    fit: "Inspectors who need booked inspections now, not next quarter.",
  },
  {
    channel: "Conversion Website",
    tag: "Booking engine",
    delivers:
      "Mobile-first site with online scheduling, instant quote calculator, and dedicated pages for every add-on service.",
    timeline: "Day one of launch",
    fit: "Inspectors losing leads on a brochure-style site that loads in five seconds.",
  },
  {
    channel: "Reviews & Reputation",
    tag: "Trust signal",
    delivers:
      "Automated review requests across SMS and email, plus monitoring and response across Google, Yelp, Angi, BBB.",
    timeline: "First 14 days",
    fit: "Inspectors who can't break into the 4.8★+ tier of their local market.",
  },
  {
    channel: "Social Media",
    tag: "Top of funnel",
    delivers:
      "Short-form video of real findings and agent-facing LinkedIn content that builds trust before the booking call.",
    timeline: "60–90 days",
    fit: "Inspectors competing on reputation and referrals, not just clicks.",
  },
];
