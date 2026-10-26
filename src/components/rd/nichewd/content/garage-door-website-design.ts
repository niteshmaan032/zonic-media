/* Garage Door Website Design — redesign draft copy (26 Oct 2026).

   Research, 26 Oct 2026:
   - Search Console, 90 days, live page: garage door repair web design
     agency 110 impressions (pos 22.8) · garage door repair web design
     company 93 (24.3) · garage door repair web design services 68 (21.1)
     · garage door web design 11 (52.8) · website design agency for garage
     door companies 9 (27.3) · garage door website design 7 (36.4).
   - Semrush US: garage door web design 70 · garage door website design 70
     (KD 10) · garage door websites 70 (64).
   - Web research (garage door site guides, templates, consumer-protection
     notices): fake listings and lookalike sites are a known problem in
     this trade, so homeowners check for a real address, license, a
     consistent business name and genuine reviews before calling; sites
     need an urgent repair path (springs, cables, openers) and a gallery of
     real installs for new-door buyers; separate pages per location and
     service; mobile-first with clear calls to action; smart openers and
     insulated doors are common upgrade questions; springs fail more in
     cold weather.
   Angle: two buyers (stuck door today vs new door this season), local
   proof against fake listings, a site you own vs a rented lead site.
   Rules kept: build time 2–3 weeks, no prices, no company, brand or
   software named, verified numbers only, every live content link kept. */

import { tonesFor } from "../tones";
import type { NicheWebContent } from "../types";

export const CONTENT: NicheWebContent = {
  liveUrl: "/services/garage-door-website-design",
  stage: {
    widget: "book",
    switchLabel: "Preview the example garage door site: repairs or new doors",
    business: "Your Garage Door Co.",
    domain: "yourgaragedoorco.com",
    nav: ["Repairs", "New doors", "Openers", "Gallery"],
    call: "Call now",
    primary: "Schedule service",
    secondary: "Browse door styles",
    proof: "Trusted on driveways across town",
    bookTitle: "Choose a visit time",
    confirm: "Confirm my visit",
    serviceSubs: ["Same-day service", "Stocked trucks", "Free in-home quote"],
    toast: "Visit confirmed",
    toastNote: "Today 2 PM",
    phoneCta: "Book",
    modes: [
      {
        label: "Same-day repair",
        icon: "tool",
        badge: "Springs · Tracks · Openers",
        headline: "Door Stuck Shut? We Fix Springs Today.",
        sub: "Broken springs, off-track doors and dead openers repaired the same day.",
        services: ["Spring replacement", "Off-track repair", "Opener repair"],
        book: ["Broken spring", "Off track", "Opener fix"],
        img: {
          src: "/images/free-website/free-garage-door/broken-springs.webp",
          position: "50% 35%",
        },
      },
      {
        label: "New doors",
        icon: "garage",
        badge: "Installs · Free in-home quote",
        headline: "A New Garage Door, Fitted in a Day.",
        sub: "Insulated steel, carriage-style and glass doors, plus smart openers.",
        services: ["New door install", "Insulated doors", "Smart openers"],
        book: ["New door", "Insulated door", "Smart opener"],
        img: {
          src: "/images/free-website/free-garage-door/new-door-installation.webp",
          position: "55% 50%",
        },
      },
    ],
    legend: [
      "Click-to-call header",
      "Repair and new-door pages",
      "Visit booking",
      "Sticky phone bar",
    ],
  },
  // Repairs blue, new doors gold, then rose and emerald (tones.ts).
  tones: tonesFor("garage-door-website-design"),
  serviceName: "Garage Door Website Design",
  audience: "garage door repair and installation companies",
  meta: {
    title: "Garage Door Website Design | Repair Web Design Agency",
    description:
      "Garage door website design from a repair web design agency: spring and opener pages, door style galleries and booking that turn local searches into jobs.",
    keywords: [
      "garage door website design",
      "garage door web design",
      "garage door websites",
      "garage door repair web design agency",
      "garage door repair web design company",
      "garage door repair web design services",
      "website design agency for garage door companies",
      "garage door company website",
      "garage door repair website design",
      "garage door installer website",
    ],
  },
  hero: {
    h1Lead: "Garage Door Website Design",
    h1Rest: "That Wins Spring Calls and New-Door Sales",
    icon: "garage",
    lead: [
      "We build garage door websites with a fast lane for broken springs and a showroom for new doors, so both kinds of buyer find their way. Your ",
      { href: "/services/web-design", label: "custom website" },
      " shows real local proof, from your address to your license and reviews, and launches in 2–3 weeks.",
    ],
    cta: "Claim My Free Garage Door Mockup",
    bento: {
      kind: "photos",
      photoA: {
        src: "/images/home-improvement-web/garage-door-first-impressions-1.webp",
        position: "60% 30%",
        query: "garage door repair near me",
      },
      cardA: {
        icon: "tool",
        title: "Spring Repair Calls Rolling In",
        sub: "Repair pages ranked for stuck-door searches",
      },
      photoB: {
        src: "/images/home-improvement-web/garage-door-hero-v2.webp",
        position: "60% 35%",
        query: "garage door installers near me",
      },
      cardB: {
        icon: "garage",
        title: "More New Door Projects Sold",
        sub: "Style galleries that turn browsers into installs",
      },
    },
  },
  showcase: {
    title: "Try a Garage Door Website With a Repair Mode and a Showroom Mode",
    lead: "Toggle the modes to see how one garage door site serves a stuck door and a remodel shopper.",
  },
  services: {
    title: "Garage Door Repair Web Design Services\nand New Door Showrooms",
    lead: "One crew handles the plan, the copy, the design and the upkeep for door companies.",
    cta: "Plan My Garage Door Website",
    items: [
      {
        icon: "monitor",
        title: "Garage Door Websites Built From Scratch",
        desc: "A site laid out around repairs, installs and openers, written for homeowners stuck with a broken door and those choosing a new one.",
        points: [
          "Repair and install paths",
          "Copy written for you",
          "Phone-first design",
        ],
        links: [
          { href: "/services/web-design", label: "Our web design service" },
        ],
      },
      {
        icon: "tool",
        title: "Spring, Cable and Opener Repair Pages",
        desc: "Urgent pages for broken springs, snapped cables, off-track doors and dead openers, with the call button first.",
        points: [
          "Spring replacement page",
          "Opener repair page",
          "Off-track door page",
        ],
        links: [
          {
            href: "/services/google-ads",
            label: "Google Ads for door companies",
          },
        ],
      },
      {
        icon: "door",
        title: "New Door Galleries and Style Pages",
        desc: "Photo galleries and style pages for steel, carriage-style, glass and insulated doors that turn browsing into quote requests.",
        points: [
          "Filterable project gallery",
          "Style and color pages",
          "Quote request forms",
        ],
        links: [],
      },
      {
        icon: "shield",
        title: "Local Proof That Beats Fake Listings",
        desc: "Your real address, license, named techs and branded trucks shown clearly, so homeowners know you aren't a faceless call center.",
        points: [
          "Address and license shown",
          "Team and truck photos",
          "One consistent business name",
        ],
        links: [
          {
            href: "/services/industry/local-seo-for-garage-door-companies",
            label: "Local SEO for garage door companies",
          },
        ],
      },
      {
        icon: "repeat",
        title: "Garage Door Site Redesigns",
        desc: "We rebuild dated door company websites without dropping the pages, links and reviews that earn your calls today.",
        points: ["URL inventory", "Redirects mapped", "Faster pages"],
        links: [
          {
            href: "/services/garage-door-marketing-agency",
            label: "Garage door marketing",
          },
        ],
      },
      {
        icon: "key",
        title: "Hosting, Care and a Free Website Offer",
        desc: "After launch we host the site, run backups and make your edits. Door companies on a qualifying growth plan can get the build free.",
        points: ["Managed hosting", "Edits handled", "Backups and security"],
        links: [
          {
            href: "/garage-door-website-design-agency-us/offer",
            label: "Free garage door website offer",
          },
        ],
      },
    ],
  },
  features: {
    title: "Garage Door Website Features Homeowners Notice",
    lead: "What a homeowner with a stuck door, or plans for a new one, looks for first.",
    items: [
      {
        icon: "phone",
        title: "Call Button Pinned to the Screen",
        text: "Your number follows visitors down every page on a phone.",
      },
      {
        icon: "tool",
        title: "A Fast Lane for Broken Springs",
        text: "Stuck-door visitors see one button and a safety note, not a long form.",
      },
      {
        icon: "camera",
        title: "Door Style Gallery",
        text: "Real install photos sorted by style, material and color.",
      },
      {
        icon: "shield",
        title: "Real Address and License",
        text: "Proof you're a local company, shown on every page.",
      },
      {
        icon: "users",
        title: "Named Techs and Trucks",
        text: "Team photos and branded trucks help homeowners trust who's coming.",
      },
      {
        icon: "star",
        title: "Recent Reviews on Repair Pages",
        text: "Spring and opener reviews sit right where people decide to call.",
      },
      {
        icon: "calendar",
        title: "Book a Repair or an In-Home Consult",
        text: "Two booking paths: a same-day repair slot or a new-door visit.",
      },
      {
        icon: "search",
        title: "Garage Door Schema",
        text: "Markup that tells Google your services, towns and ratings.",
      },
    ],
  },
  growth: {
    title: "Three Ways Garage Door Websites Bring In Work",
    lead: "Climb local results, win the call from the driveway and be the door company AI tools suggest.",
    rank: {
      title: "Own Local Searches for Springs, Openers and New Doors",
      body: [
        "We give each repair, door style and town its own page, then track rankings every week. Layer on ",
        {
          href: "/services/industry/local-seo-for-garage-door-companies",
          label: "garage door local SEO",
        },
        " and ",
        {
          href: "/local-seo-google-business-optimization",
          label: "hands-on Google Business Profile care",
        },
        " to claim map spots as well.",
      ],
      points: [
        "Repair pages",
        "Door style pages",
        "Rank tracking",
        "Area schema",
      ],
      cta: "Plan My Garage Door Pages",
      keywords: [
        ["garage door repair near me", 23, 2],
        ["garage door spring replacement", 30, 3],
        ["new garage door installation", 36, 5],
        ["garage door opener repair", 21, 4],
      ],
    },
    convert: {
      title: "Turn a Stuck Door Into a Same-Day Booking",
      body: [
        "A pinned call button, a short repair form and clear arrival times make it easy to book you from the driveway. Each call is tied to the page behind it, and ",
        {
          href: "/services/garage-door-marketing-agency",
          label: "garage door marketing",
        },
        " can drive more searches there.",
      ],
      points: [
        "Driveway-ready call button",
        "Three-field repair form",
        "Calls tied to pages",
        "Built for mobile",
      ],
      cta: "Show Me a Door Repair Booking",
      url: "yourgaragedoorco.com",
      headline: "Door Stuck? Book a Repair",
      services: ["Broken spring", "Opener", "Off track", "New door"],
    },
    ai: {
      title: "Be the Door Company AI Answers Trust",
      body: [
        "AI tools favor businesses that look real and explain the job clearly, which matters in a trade crowded with fake listings. We write spring and door guides, add structured data and watch your citations, the same work behind our ",
        { href: "/services/ai-seo-services", label: "AI SEO services" },
        ".",
      ],
      points: [
        "Spring safety guides",
        "Business schema",
        "Clear page layout",
        "Citation monitoring",
      ],
      cta: "Check My AI Mentions",
      query: "who fixes broken garage door springs today",
      intro: "For same-day spring replacement,",
      bullets: [
        "Real local address",
        "Spring safety explained",
        "Recent five-star reviews",
      ],
    },
  },
  sitemap: {
    title: "How a Garage Door Website Should Be Organized",
    lead: "From a snapped spring to a new carriage door, every page lines up with a real homeowner search.",
    home: "Your Garage Door Co. homepage",
    groups: [
      {
        name: "Repairs",
        icon: "tool",
        pages: ["Spring replacement", "Cables and tracks", "Opener repair"],
      },
      {
        name: "New Doors",
        icon: "garage",
        pages: ["Steel doors", "Carriage-style doors", "Insulated doors"],
      },
      {
        name: "Openers and Extras",
        icon: "key",
        pages: ["Smart openers", "Keypads and remotes", "Tune-up plans"],
      },
      {
        name: "Proof and Areas",
        icon: "pin",
        pages: ["Project gallery", "Reviews", "Service towns"],
      },
    ],
  },
  results: {
    title: "What Garage Door Companies Can Expect After Launch",
    lead: "Expect momentum as repair pages get indexed, gallery photos grow and reviews stack up.",
    cta: "Walk Me Through Launch",
    milestones: [
      {
        when: "Launch week",
        title: "Calls Linked to Pages",
        text: "Tracked numbers and online booking go live together, showing which pages produce jobs.",
      },
      {
        when: "Month 1",
        title: "Repair Pages Get Indexed",
        text: "Google crawls spring, opener and town pages and begins testing them locally.",
      },
      {
        when: "Months 2–3",
        title: "Climbing for Door Searches",
        text: "Repair and style pages rise as reviews and gallery photos build up.",
      },
      {
        when: "Cold snaps",
        title: "Ready When Springs Snap",
        text: "Cold weather breaks more springs, and your repair pages are ready for the rush.",
      },
    ],
    wins: [
      {
        icon: "tool",
        title: "More Same-Day Repairs",
        text: "Spring and opener searches turn into booked visits.",
      },
      {
        icon: "garage",
        title: "More New Door Quotes",
        text: "Galleries and style pages bring in replacement buyers.",
      },
      {
        icon: "shield",
        title: "Trust Over Fake Listings",
        text: "A real address, license and team photos set you apart.",
      },
      {
        icon: "phone",
        title: "Calls From the Driveway",
        text: "One tap from a search to your dispatcher, on any phone.",
      },
    ],
    band: [
      {
        icon: "phone",
        value: "Broken-Spring Calls",
        label: "An urgent path that turns panic into a booking",
      },
      {
        icon: "layers",
        value: "New Door Installs",
        label: "Door galleries that sell new doors and openers",
      },
      {
        icon: "pin",
        value: "Every Suburb Covered",
        label: "Service-area pages for each part of town",
      },
      {
        icon: "smile",
        value: "Easy From the Driveway",
        label: "Simple navigation that works on any phone",
      },
    ],
  },
  process: {
    title: "Launch a Garage Door Website in 2–3 Weeks",
    lead: "See a free homepage mockup first, then follow a set schedule to launch day.",
    items: [
      {
        when: "Week 1",
        h: "Kickoff Call and Homepage Draft",
        p: "We note your repair and install mix, towns and door lines, and then sketch the homepage.",
      },
      {
        when: "Weeks 1–2",
        h: "Repair Pages and Door Galleries",
        p: "We write spring, opener and town pages and sort your install photos by style.",
      },
      {
        when: "Weeks 2–3",
        h: "Build, Forms and Search Setup",
        p: "Booking forms, call tracking, schema and redirects get built and checked.",
      },
      {
        when: "Launch",
        h: "Launch, Then a Growing Gallery",
        p: "The site launches and we keep adding new install photos and reviews.",
      },
    ],
  },
  compare: {
    title: "Your Own Garage Door Website vs. a Rented Lead Site",
    lead: "Rented lead sites send your calls elsewhere once you stop paying. A site you own keeps working for you.",
    otherLabel: "Rented lead site",
    rows: [
      {
        topic: "Who owns it",
        other: "The vendor keeps the domain and the rankings.",
        zonic: "The domain, content and rankings stay in your name.",
      },
      {
        topic: "Proof you're local",
        other: "No address, no team and a generic brand.",
        zonic: "Your address, license, techs and trucks on every page.",
      },
      {
        topic: "Spring and opener calls",
        other: "One generic repair page for every problem.",
        zonic: "Separate pages for springs, cables, tracks and openers.",
      },
      {
        topic: "New door buyers",
        other: "Stock photos and no style details.",
        zonic: "A gallery of your real installs, sorted by style.",
      },
      {
        topic: "Where calls go",
        other: "Leads may be shared with other companies.",
        zonic: "Every call and form goes straight to your team.",
      },
      {
        topic: "Reviews",
        other: "Reviews tied to someone else's brand.",
        zonic: "Your Google reviews shown beside each button.",
      },
    ],
  },
  reviews: {
    title: "Vet Our Web Team First: 5.0 Stars on Google",
    lead: "Unedited reviews from the owners we've built sites and campaigns for.",
  },
  pricing: {
    title: "Monthly Plans Built for Garage Door Websites",
    compareTitle: "Plan Features for Garage Door Companies",
    addOnsTitle: "Extras for Door Repair and Install Sites",
    customTitle: "More Than One Garage Door Location?",
  },
  faq: {
    title: "Garage Door Website FAQs for Repair and Install Companies",
    lead: "Answers on cost, timing, repair pages and what a garage door site needs.",
    items: [
      {
        q: "How much does a garage door website cost?",
        a: "Pricing is one fixed number, agreed on a free call where we learn your repair and install mix, door lines and towns, and it holds through launch. Choose a growth plan that qualifies, billed monthly, and the garage door website comes free through our offer.",
      },
      {
        q: "How quickly can a garage door website go live?",
        a: "Most garage door sites are live 2–3 weeks after kickoff. The homepage mockup lands first, galleries and copy are built next, and every form, tracked phone number and redirect is tested before launch. You approve each stage before we move on.",
      },
      {
        q: "What should a garage door company website include?",
        a: "A pinned call button, a fast repair path for broken springs and openers, separate pages for each repair and door style, a real install gallery, your address and license, town pages, reviews near every button and online booking for repairs and consults.",
      },
      {
        q: "Will a new website hurt my garage door rankings?",
        a: "It shouldn't, as long as nothing is left to chance. Your ranking pages keep their URLs or get a 301 redirect, the sitemap is resubmitted and we compare rankings and calls before and after launch to catch problems early and fix them quickly.",
      },
      {
        q: "Do garage door companies need separate pages for springs and openers?",
        a: "Yes. Someone with a snapped spring searches differently from someone whose opener won't respond, and Google favors the page that matches each search. Separate pages also let you explain safety risks, like why homeowners shouldn't touch torsion springs themselves. Each one ends with a clear call button.",
      },
      {
        q: "How do I show customers I'm not a fake listing?",
        a: "Show your real address, license number, team photos, branded trucks and recent reviews, and use the exact same business name everywhere. We build those signals into every page, so homeowners worried about scams can see you're a real local company.",
      },
      {
        q: "Can my website sell new garage doors, not just repairs?",
        a: "Yes. We build style pages and a gallery of your real installs sorted by material, style and color, plus a form to book an in-home consult. That gives replacement buyers time to browse and compare before they call, and quote requests arrive with the style they picked.",
      },
      {
        q: "Can customers book a garage door repair online?",
        a: "Yes. They choose the problem, pick an arrival window and get a text confirmation, while urgent cases like a door stuck shut are pushed to a call. Bookings can go straight into your scheduling software, so the office never retypes a job.",
      },
      {
        q: "Do you design websites for commercial garage door companies?",
        a: "Yes. Commercial door work gets its own path, with pages for rolling steel, dock doors and preventive maintenance contracts, plus a service request form for facility managers. Homeowners and businesses each land on pages written for them, with separate forms and phone prompts.",
      },
    ],
  },
  consult: {
    title: "Ask for a Free Garage Door Homepage Mockup",
    lead: [
      "Tell us about your repair work, door lines and towns, and we'll put together a homepage concept and a page plan at no cost. Prefer a conversation? ",
      { href: "/contact-us", label: "Contact us" },
      ", meet ",
      { href: "/about", label: "our team" },
      ", explore ",
      { href: "/services", label: "our services" },
      " or recover a ",
      {
        href: "/services/gbp-reinstatement-service",
        label: "Google profile that's been suspended",
      },
      ". Ranking on the map matters as well, so see how we handle ",
      {
        href: "/services/local-seo-for-home-services",
        label: "local SEO for home service firms",
      },
      ".",
    ],
    points: [
      "Homepage concept, free",
      "Repair and gallery plan",
      "Booking setup tips",
      "Live in 2–3 weeks",
    ],
    form: {
      formType: "garage-door-website-design",
      badge: "Free garage door homepage mockup",
      title: "Your Free Garage Door Site Mockup",
      subtitle: "Free, and you're under no obligation.",
      submitText: "Send My Garage Door Request",
      messageLabel: "Your door company and current site",
      messagePlaceholder:
        "Company name, website (if any), repair vs install mix, door lines and towns served",
    },
  },
  banner: {
    title: "Give Every Stuck Door a Fast Way to Reach You",
    lead: "Spring repair pages, a real-install gallery and booking that works from the driveway.",
  },
};
